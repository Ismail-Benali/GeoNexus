/**
 * خدمة الأخبار والاستخبارات المباشرة — بث حي من BBC، DW، الجزيرة، France 24، وGDELT
 * Live Intelligence News Service with Canonical Publisher Detection & Sentiment Analysis
 */

import { enrichNewsWithGemini, analyzeHeadlineSentimentLocally } from './geminiSentiment.js';

const FREE_NEWS = 'https://freenewsapi.ai/v1/search';
const RSS2JSON = 'https://rss2json.com/api.json';
const GDELT = 'https://api.gdeltproject.org/api/v2/doc/doc';

const TIMEOUT_MS = 12000;

export const NEWS_SOURCES_META = {
  all: { ar: 'كافة المصادر العالمية', en: 'All Global Sources' },
  aljazeera: { ar: 'شبكة الجزيرة الإخبارية', en: 'Al Jazeera Network', badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
  bbc: { ar: 'هيئة الإذاعة البريطانية BBC', en: 'BBC News World', badge: 'bg-rose-500/20 text-rose-300 border-rose-500/40' },
  dw: { ar: 'دويتشه فيله الألمانية DW', en: 'Deutsche Welle (DW)', badge: 'bg-sky-500/20 text-sky-300 border-sky-500/40' },
  france24: { ar: 'فرانس 24 الدولية', en: 'France 24', badge: 'bg-blue-500/20 text-blue-300 border-blue-500/40' },
  guardian: { ar: 'صحيفة الغارديان', en: 'The Guardian', badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40' },
  gdelt: { ar: 'مشروع GDELT الدولي', en: 'GDELT Project', badge: 'bg-slate-500/20 text-slate-300 border-slate-500/40' },
};

/** مصادر RSS الرسمية لـ BBC، DW، الجزيرة، وفرانس 24 */
const RSS_FEEDS = {
  ar: [
    { sourceCode: 'aljazeera', host: 'aljazeera.net', nameAr: 'الجزيرة نت', nameEn: 'Al Jazeera', feed: 'https://www.aljazeera.com/xml/rss/all.xml' },
    { sourceCode: 'bbc', host: 'bbc.com', nameAr: 'بي بي سي عربي', nameEn: 'BBC Arabic', feed: 'https://feeds.bbci.co.uk/arabic/rss.xml' },
    { sourceCode: 'dw', host: 'dw.com', nameAr: 'دويتشه فيله (DW)', nameEn: 'DW Arabic', feed: 'https://rss.dw.com/rdf/rss-ar-all' },
    { sourceCode: 'france24', host: 'france24.com', nameAr: 'فرانس 24', nameEn: 'France 24 Arabic', feed: 'https://www.france24.com/ar/rss' },
  ],
  en: [
    { sourceCode: 'aljazeera', host: 'aljazeera.com', nameAr: 'الجزيرة الإنجليزية', nameEn: 'Al Jazeera English', feed: 'https://www.aljazeera.com/xml/rss/all.xml' },
    { sourceCode: 'bbc', host: 'bbc.com', nameAr: 'بي بي سي وورلد', nameEn: 'BBC World', feed: 'https://feeds.bbci.co.uk/news/world/rss.xml' },
    { sourceCode: 'dw', host: 'dw.com', nameAr: 'دويتشه فيله العالمية', nameEn: 'DW News', feed: 'https://rss.dw.com/rdf/rss-en-all' },
    { sourceCode: 'theguardian', host: 'theguardian.com', nameAr: 'الغارديان', nameEn: 'The Guardian', feed: 'https://www.theguardian.com/world/rss' },
  ],
};

const QUERIES = {
  ar: ['الشرق الأوسط', 'الأمم المتحدة', 'الناتو', 'النزاع والحروب', 'بريكس'],
  en: ['geopolitics sanctions', 'NATO defense', 'Middle East conflict', 'UN Security Council', 'BRICS'],
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

function detectSourceMeta(url, title, rawSource) {
  const str = `${url} ${title} ${rawSource}`.toLowerCase();
  if (str.includes('aljazeera') || str.includes('الجزيرة')) {
    return { sourceCode: 'aljazeera', sourceNameAr: 'الجزيرة', sourceNameEn: 'Al Jazeera' };
  }
  if (str.includes('bbc') || str.includes('بي بي سي')) {
    return { sourceCode: 'bbc', sourceNameAr: 'BBC News', sourceNameEn: 'BBC News' };
  }
  if (str.includes('dw.com') || str.includes('dw ') || str.includes('دويتشه')) {
    return { sourceCode: 'dw', sourceNameAr: 'DW الألمانية', sourceNameEn: 'Deutsche Welle (DW)' };
  }
  if (str.includes('france24') || str.includes('فرانس 24')) {
    return { sourceCode: 'france24', sourceNameAr: 'فرانس 24', sourceNameEn: 'France 24' };
  }
  if (str.includes('guardian') || str.includes('غارديان')) {
    return { sourceCode: 'guardian', sourceNameAr: 'الغارديان', sourceNameEn: 'The Guardian' };
  }
  return { sourceCode: 'gdelt', sourceNameAr: rawSource || 'وكالات دولية', sourceNameEn: rawSource || 'International Wires' };
}

async function fromFreeNews(lang, signal, out) {
  const q = QUERIES[lang] ?? QUERIES.en;
  const results = await Promise.allSettled(
    q.map((term) =>
      getJson(`${FREE_NEWS}?q=${encodeURIComponent(term)}&size=8&lang=${lang}&date=24h`, signal).then((j) =>
        (j.results ?? []).map((a) => {
          const meta = detectSourceMeta(a.url, a.title, a.sitename || a.host);
          return {
            key: a.url,
            text: normTitle(a.title),
            href: a.url,
            source: a.sitename ?? a.host ?? '',
            sourceCode: meta.sourceCode,
            sourceNameAr: meta.sourceNameAr,
            sourceNameEn: meta.sourceNameEn,
            published: a.published_at ?? new Date().toISOString(),
          };
        }),
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
    feeds.map(({ sourceCode, nameAr, nameEn, feed }) =>
      getJson(`${RSS2JSON}?rss_url=${encodeURIComponent(feed)}&count=15`, signal).then((j) => {
        if (j.status !== 'ok' || !Array.isArray(j.items)) throw new Error('bad feed');
        return j.items.map((it) => ({
          key: it.link,
          text: normTitle(it.title),
          href: it.link,
          source: j.feed?.title ?? nameEn,
          sourceCode,
          sourceNameAr: nameAr,
          sourceNameEn: nameEn,
          published: it.pubDate ?? new Date().toISOString(),
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
      ? '(الشرق OR غزة OR أوكرانيا OR sanctions) sourcelang:arabic'
      : '(geopolitics OR sanctions OR war OR NATO) sourcelang:english';
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
    const meta = detectSourceMeta(a.url, a.title, a.domain);
    pushItem(out, {
      key: a.url,
      text: normTitle(a.title),
      href: a.url,
      source: a.domain ?? '',
      sourceCode: meta.sourceCode,
      sourceNameAr: meta.sourceNameAr,
      sourceNameEn: meta.sourceNameEn,
      published: a.seendate ?? new Date().toISOString(),
    });
  }
  return out;
}

/**
 * جلب الأخبار وتزويدها بتحليل المشاعر
 */
export async function fetchGeoNews(lang, { signal } = {}) {
  const out = new Map();

  // جلب من RSS المباشر لـ BBC، DW، والجزيرة أولاً
  await Promise.allSettled([fromRss(lang, signal, out), fromFreeNews(lang, signal, out)]);

  let primary = 'BBC + DW + Al Jazeera Live';
  if (out.size === 0) {
    try {
      await fromGdelt(lang, signal, out);
      primary = 'GDELT Global';
    } catch {
      primary = 'fallback';
    }
  }

  const rawItems = [...out.values()].slice(0, 36);

  // إلحاق تحليل المشاعر لكل خبر
  const enrichedItems = rawItems.map((item) => {
    const sentiment = analyzeHeadlineSentimentLocally(item.text);
    return {
      ...item,
      sentiment: sentiment.type,
      sentimentScore: sentiment.score,
      sentimentMeta: sentiment.meta,
    };
  });

  return { items: enrichedItems, source: enrichedItems.length ? primary : 'none' };
}

/**
 * جلب البث الاستخباري الكامل وتحليله بواسطة Gemini API عند الرغبة
 */
export async function fetchIntelligenceStream(lang, { signal } = {}) {
  const { items, source } = await fetchGeoNews(lang, { signal });
  const fullyEnriched = await enrichNewsWithGemini(items, { signal });
  return { items: fullyEnriched, source };
}
