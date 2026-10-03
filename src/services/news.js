/**
 * خدمة الأخبار المجانية — ثلاث طبقات، كلها بلا مفتاح API.
 *
 * 1) FreeNewsApi (freenewsapi.ai)  — مفتوح، CORS ✔، يدعم lang=ar وlang=en وبحث حر.
 * 2) rss2json.com                 — يحوّل RSS إلى JSON، CORS ✔، يغذّي موجزاً عربياً
 *                                   (BBC عربي، DW عربي، France24 عربي، الجزيرة).
 * 3) GDELT DOC 2.0                — احتياطي، مقيّد بطلب واحد كل 5 ثوانٍ.
 *
 * كل ذلك تم التحقق منه عملياً بإرسال Origin وفحص ترويسة
 * access-control-allow-origin قبل الاعتماد.
 */

const FREE_NEWS = 'https://freenewsapi.ai/v1/search';
const RSS2JSON = 'https://rss2json.com/api.json';
const GDELT = 'https://api.gdeltproject.org/api/v2/doc/doc';

const TIMEOUT_MS = 12000;

/** موجز RSS عربي/دولي مجرّب — يعمل عبر rss2json */
const RSS_FEEDS = {
  ar: [
    { host: 'bbc.com', feed: 'https://feeds.bbci.co.uk/arabic/rss.xml' },
    { host: 'dw.com', feed: 'https://rss.dw.com/rdf/rss-ar-all' },
    { host: 'france24.com', feed: 'https://www.france24.com/ar/rss' },
    { host: 'aljazeera.net', feed: 'https://www.aljazeera.com/xml/rss/all.xml' },
  ],
  en: [
    { host: 'aljazeera.com', feed: 'https://www.aljazeera.com/xml/rss/all.xml' },
    { host: 'bbc.com', feed: 'https://feeds.bbci.co.uk/news/world/rss.xml' },
    { host: 'theguardian.com', feed: 'https://www.theguardian.com/world/rss' },
  ],
};

/** استعلامات البحث الجيوسياسي */
const QUERIES = {
  ar: ['الشرق الأوسط', 'الأمم المتحدة', 'الطاقة'],
  en: ['geopolitics sanctions', 'Middle East diplomacy', 'global energy'],
};

async function getJson(url, signal) {
  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), TIMEOUT_MS);
  const onAbort = () => ac.abort();
  signal?.addEventListener('abort', onAbort);
  try {
    const res = await fetch(url, { headers: { Accept: 'application/json' }, signal: ac.signal });
    if (!res.ok) throw new Error(String(res.status));
    return await res.json();
  } finally {
    clearTimeout(timer);
    signal?.removeEventListener('abort', onAbort);
  }
}

function normTitle(s) {
  return String(s ?? '').replace(/\s+/g, ' ').trim();
}

function pushItem(map, item) {
  if (!item.href || !item.text) return;
  const key = item.href.split('?')[0];
  if (!map.has(key)) map.set(key, item);
}

async function fromFreeNews(lang, signal, out) {
  const q = QUERIES[lang] ?? QUERIES.en;
  const results = await Promise.allSettled(
    q.map((term) =>
      getJson(`${FREE_NEWS}?q=${encodeURIComponent(term)}&size=8&lang=${lang}&date=24h`, signal).then((j) =>
        (j.results ?? []).map((a) => ({
          key: a.url,
          text: normTitle(a.title),
          href: a.url,
          source: a.sitename ?? a.host ?? '',
          published: a.published_at ?? null,
        })),
      ),
    ),
  );
  for (const r of results) {
    if (r.status !== 'fulfilled') continue;
    for (const item of r.value) pushItem(out, item);
  }
  return out;
}

async function fromRss(lang, signal, out) {
  const feeds = RSS_FEEDS[lang] ?? RSS_FEEDS.en;
  const results = await Promise.allSettled(
    feeds.map(({ feed }) =>
      getJson(`${RSS2JSON}?rss_url=${encodeURIComponent(feed)}&count=12`, signal).then((j) => {
        if (j.status !== 'ok' || !Array.isArray(j.items)) throw new Error('bad feed');
        return j.items.map((it) => ({
          key: it.link,
          text: normTitle(it.title),
          href: it.link,
          source: j.feed?.title ?? '',
          published: it.pubDate ?? null,
        }));
      }),
    ),
  );
  for (const r of results) {
    if (r.status !== 'fulfilled') continue;
    for (const item of r.value) pushItem(out, item);
  }
  return out;
}

async function fromGdelt(lang, signal, out) {
  const query =
    lang === 'ar'
      ? '(الشرق OR Moyen OR sanctions) sourcelang:arabic'
      : '(geopolitics OR sanctions OR coalition) sourcelang:english';
  const params = new URLSearchParams({
    query,
    mode: 'ArtList',
    format: 'json',
    maxrecords: '20',
    sort: 'DateDesc',
    timespan: '6h',
  });
  const j = await getJson(`${GDELT}?${params}`, signal);
  for (const a of j.articles ?? []) {
    pushItem(out, {
      key: a.url,
      text: normTitle(a.title),
      href: a.url,
      source: a.domain ?? '',
      published: a.seendate ?? null,
    });
  }
  return out;
}

/**
 * يجلب أحدث أخبار الجيوسياسيا.
 * @returns {{items: Array, source: string}}
 */
export async function fetchGeoNews(lang, { signal } = {}) {
  const out = new Map();

  // الطبقة 1+2: FreeNewsApi و rss2json متاحان معاً — نجمعهما معاً
  const settled = await Promise.allSettled([fromFreeNews(lang, signal, out), fromRss(lang, signal, out)]);

  const sources = settled.map((s) => (s.status === 'fulfilled' ? s.value : null)).filter(Boolean);
  let primary = 'freenewsapi + rss2json';
  if (out.size === 0) {
    try {
      await fromGdelt(lang, signal, out);
      primary = 'GDELT';
    } catch {
      primary = 'none';
    }
  }
  void sources;

  const items = [...out.values()].slice(0, 24);
  return { items, source: items.length ? primary : 'none' };
}
