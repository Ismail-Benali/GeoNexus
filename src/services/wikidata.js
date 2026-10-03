/**
 * خدمة ويكي بيانات — القادة + صورهم + عدد الأحزاب.
 *
 * مجانية بالكامل وبلا مفتاح API، وCORS مفتوح على query.wikidata.org
 * فيعمل الاستدعاء من المتصفح مباشرة.
 *
 * ملاحظة مهمة عن ترتيب الخصائص:
 * في ويكي بيانات P35 هو عملياً "رئيس الدولة" (رئيس جمهورية أو ملك)
 * وP6 هو عملياً "رئيس الحكومة" (رئيس الوزراء أو chancellor) —
 * أي عكس التسمية الظاهرية للخصائص. تم التحقق تجريبياً على ثماني دول:
 * فرنسا (P35=ماكرون، P6=لوكورنو)، الصين (P35=شي، P6=لي تشيانغ)،
 * اليابان (P35=ناروهيتو، P6=تاكايتشي)، إسرائيل (P35=هيرتزوغ، P6=نتانيا).
 *
 * لا نستخدم P39 (المنصب الممارَس) لأنه ينتج انفجاراً في الصفوف
 * ويجعل بادئات OPTIONAL تفشل، فنعتمد P35 وP35 مباشرة
 * بعد استبعاد البيانات المنتهية (P582).
 */

import { qidOf } from '../data/wikidataMap.js';

const WDQS = 'https://query.wikidata.org/sparql';
const CACHE_PREFIX = 'geonexus:wd:';
const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const TIMEOUT_MS = 15000;
const FILEPATH = 'https://commons.wikimedia.org/wiki/Special:FilePath/';

const memCache = new Map();

function readCache(key) {
  try {
    const raw = localStorage.getItem(CACHE_PREFIX + key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.fetchedAt > CACHE_TTL_MS) return null;
    return parsed.data;
  } catch {
    return null;
  }
}

function writeCache(key, data) {
  try {
    localStorage.setItem(CACHE_PREFIX + key, JSON.stringify({ fetchedAt: Date.now(), data }));
  } catch {
    /* حصة التخزين ممتلئة — نتجاهل */
  }
}

async function sparql(query, signal) {
  const url = `${WDQS}?format=json&query=${encodeURIComponent(query)}`;
  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), TIMEOUT_MS);
  const onAbort = () => ac.abort();
  signal?.addEventListener('abort', onAbort);
  try {
    const res = await fetch(url, { headers: { Accept: 'application/sparql-results+json' }, signal: ac.signal });
    if (!res.ok) throw new Error(`WDQS ${res.status}`);
    const json = await res.json();
    return json.results?.bindings ?? [];
  } finally {
    clearTimeout(timer);
    signal?.removeEventListener('abort', onAbort);
  }
}

export function imageUrl(value) {
  if (!value) return null;
  const file = String(value)
    .replace(/^.*Special:FilePath[:/]/, '')
    .trim();
  if (!file) return null;
  return `${FILEPATH}${file}?width=260`;
}

/** استعلام 1: الأدوار الحالية فقط، خفيف وبلا انفجار في الصفوف */
const ROLES_QUERY = (qid) => `
SELECT ?prop ?personQ WHERE {
  VALUES ?c { wd:${qid} }
  {
    ?c p:P6 ?st . ?st ps:P6 ?personQ ; wikibase:rank ?rk .
    FILTER NOT EXISTS { ?st pq:P582 [] }
    FILTER(?rk != wikibase:DeprecatedRank)
    BIND("gov" AS ?prop)
  } UNION {
    ?c p:P35 ?st . ?st ps:P35 ?personQ ; wikibase:rank ?rk .
    FILTER NOT EXISTS { ?st pq:P582 [] }
    FILTER(?rk != wikibase:DeprecatedRank)
    BIND("state" AS ?prop)
  }
}`;

/** استعلام 2: أسماء وصور الشخصين المختارين */
const DETAILS_QUERY = (qids) => `
SELECT ?personQ ?ar ?en ?img WHERE {
  VALUES ?personQ { ${qids.map((q) => `wd:${q}`).join(' ')} }
  OPTIONAL { ?personQ rdfs:label ?ar . FILTER(LANG(?ar) = "ar") }
  OPTIONAL { ?personQ rdfs:label ?en . FILTER(LANG(?en) = "en") }
  OPTIONAL { ?personQ wdt:P18 ?img }
}`;

const PARTIES_QUERY = (qid) => `
SELECT ?party ?ar ?en ?seats WHERE {
  ?party wdt:P17 wd:${qid} ; wdt:P31/wdt:P279* wd:Q7278 .
  OPTIONAL { ?party rdfs:label ?ar . FILTER(LANG(?ar) = "ar") }
  OPTIONAL { ?party rdfs:label ?en . FILTER(LANG(?en) = "en") }
  OPTIONAL { ?party wdt:P2937 ?seats }
}`;

/** يختار أول مرشّح يملك اسماً لكل دور */
export function pickRole(rows, prop) {
  const seen = new Map();
  for (const r of rows) {
    if (r.prop?.value !== prop) continue;
    const q = r.personQ.value.split('/').pop();
    if (!seen.has(q)) seen.set(q, { qid: q });
  }
  const list = [...seen.values()];
  return list[0] ?? null;
}

export function normalize(partiesRows) {
  const acc = new Map();
  for (const r of partiesRows) {
    const q = r.party.value.split('/').pop();
    const cur = acc.get(q) ?? { qid: q, name: { ar: null, en: null }, seats: null };
    cur.name.ar ??= r.ar?.value ?? null;
    cur.name.en ??= r.en?.value ?? null;
    if (r.seats && Number(r.seats.value) > 0) cur.seats = Number(r.seats.value);
    acc.set(q, cur);
  }
  return [...acc.values()]
    .filter((p) => p.name.ar || p.name.en)
    .sort((a, b) => (b.seats ?? 0) - (a.seats ?? 0))
    .slice(0, 12);
}

/**
 * احتياطي: أحياناً يفقد استعلام SPARQL أحد ربطَات الاسم،
 * فنجلبه من Special:EntityData الذي يعيد كل اللغات دفعة واحدة.
 */
async function fetchLabels(qid, signal) {
  try {
    const res = await fetch(`https://www.wikidata.org/wiki/Special:EntityData/${qid}.json`, {
      headers: { Accept: 'application/json' },
      signal,
    });
    if (!res.ok) return null;
    const json = await res.json();
    const labels = json.entities?.[qid]?.labels;
    if (!labels) return null;
    return { ar: labels.ar?.value ?? null, en: labels.en?.value ?? null };
  } catch {
    return null;
  }
}

/**
 * يجلب بيانات القيادة والأحزاب لدولة واحدة.
 * @param {string} countryId رمز ISO alpha-2 (مثل 'fr')
 */
export async function fetchCountryIntel(countryId, { signal } = {}) {
  const qid = qidOf(countryId);
  if (!qid) return { available: false };

  if (memCache.has(countryId)) return memCache.get(countryId);
  const stored = readCache(countryId);
  if (stored) {
    const hit = { ...stored, cached: true };
    memCache.set(countryId, hit);
    return hit;
  }

  const [roleRows, partyRows] = await Promise.all([
    sparql(ROLES_QUERY(qid), signal).catch(() => []),
    sparql(PARTIES_QUERY(qid), signal).catch(() => []),
  ]);

  const stateRole = pickRole(roleRows, 'state');
  const govRole = pickRole(roleRows, 'gov');
  const wanted = [stateRole?.qid, govRole?.qid].filter(Boolean);

  let detailRows = [];
  if (wanted.length) {
    detailRows = await sparql(DETAILS_QUERY(wanted), signal).catch(() => []);
  }

  const details = new Map();
  for (const r of detailRows) {
    const q = r.personQ.value.split('/').pop();
    const cur = details.get(q) ?? { qid: q, name: { ar: null, en: null }, image: null };
    cur.name.ar ??= r.ar?.value ?? null;
    cur.name.en ??= r.en?.value ?? null;
    cur.image ??= imageUrl(r.img?.value);
    details.set(q, cur);
  }

  const headOfState = stateRole ? (details.get(stateRole.qid) ?? stateRole) : null;
  const headOfGovernment = govRole ? (details.get(govRole.qid) ?? govRole) : null;

  // إكمال أي اسم ناقص من المصدر الاحتياطي
  for (const person of [headOfState, headOfGovernment]) {
    if (person && (!person.name?.ar || !person.name?.en)) {
      const fallback = await fetchLabels(person.qid, signal);
      if (fallback) {
        person.name = { ar: person.name?.ar ?? fallback.ar, en: person.name?.en ?? fallback.en };
      }
    }
  }

  const parties = normalize(partyRows);
  const partyCount = partyRows.length ? new Set(partyRows.map((r) => r.party.value)).size : null;

  // في presidential republics قد يتطابق الشخصان (مثل البرازيل) — نعرض واحداً فقط
  const samePerson =
    headOfState?.qid && headOfState.qid === headOfGovernment?.qid ? headOfGovernment : null;

  const available = Boolean(headOfState || headOfGovernment || partyCount);
  const result = {
    available,
    qid,
    headOfState,
    headOfGovernment: samePerson ? null : headOfGovernment,
    partyCount,
    parties,
    fetchedAt: Date.now(),
    cached: false,
  };

  memCache.set(countryId, result);
  // لا نخزّن النتائج الفاشلة — وإلا لتوقفت التحديثات 7 أيام كاملة
  if (available) writeCache(countryId, result);
  return result;
}
