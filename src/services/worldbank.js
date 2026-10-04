/**
 * خدمة البنك الدولي — نبذة الجيش + الاقتصاد + مؤشرات المخاطر.
 *
 * مجانية بالكامل وبلا مفتاح API، والـ CORS مفتوح
 * (Access-Control-Allow-Origin: *) فيعمل الاستدعاء من المتصفح مباشرة.
 *
 * لماذا البنك الدولي وليس ويكي بيانات؟
 * قِسنا التغطية الفعلية على الـ 196 دولة في خريطة QID قبل البناء:
 *   - الناتج المحلي الإجمالي P2131 ....... 187/196
 *   - مؤشر التنمية البشرية P1081 ........ 190/196
 *   - البطالة P1198 ...................... 152/196
 *   - معامل جيني P1125 ................... 167/196
 *   - مؤشر الفساد P10273 ................ 0/196 (خاصية موجودة لكن غير مستخدمة)
 *   - الإنفاق العسكري / عدد الأفراد ..... لا توجد خاصية في ويكي بيانات
 * أي أن ويكي بيانات لا تغطي الجيش إطلاقاً، بينما البنك الدولي يغطيه:
 *   - MS.MIL.XPND.CD   الإنفاق بالدولار ......... 167/196 (أحدث 2024)
 *   - MS.MIL.XPND.GD.ZS الحصة من الناتج .......... 164/196 (أحدث 2024)
 *   - MS.MIL.TOTL.P1   عدد أفراد القوة العسكرية .. 174/196 (أحدث 2020)
 *
 * مؤشرات المخاطر هنا مؤشرات بديلة (proxies) وليست تقييمات رسمية:
 * معدل القتل المتعمد ووفيات المعارك يقيسان انعدام الأمن والنزاع،
 * ولا يوجد مصدر مفتوح منظّم يعطي مؤشراً موثوقاً لغسيل الأموال
 * أو الاتجار بالبشر أو الإرهاب، لذا تبقى ملفّات المخاطر المكتوبة كما هي.
 *
 * كل رقم مرفق بسنة مرجعية، والواجهة تعرضها صراحةً
 * لأن هذه بيانات سنوية لا تتحدث لحظياً مثل الأخبار.
 */

const API = 'https://api.worldbank.org/v2';
const CACHE_PREFIX = 'geonexus:wb:';
// بيانات سنوية، نخزّنها أطول من بيانات القادة.
const CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000;
const TIMEOUT_MS = 12000;

const memCache = new Map();

/** تعريف المؤشرات: المعرّف، الفئة، اسم الحقل، والتسميتان العربية والإنجليزية. */
const INDICATORS = {
  MS_MIL_XPND_CD: {
    id: 'MS.MIL.XPND.CD',
    group: 'military',
    key: 'expenditureUsd',
    ar: 'الإنفاق العسكري',
    en: 'Military expenditure',
    format: 'usd',
  },
  MS_MIL_XPND_GD_ZS: {
    id: 'MS.MIL.XPND.GD.ZS',
    group: 'military',
    key: 'gdpShare',
    ar: 'الإنفاق العسكري من الناتج',
    en: 'Military expenditure (% of GDP)',
    format: 'percent',
  },
  MS_MIL_TOTL_P1: {
    id: 'MS.MIL.TOTL.P1',
    group: 'military',
    key: 'personnel',
    ar: 'عدد أفراد القوة العسكرية',
    en: 'Armed forces personnel',
    format: 'count',
  },
  NY_GDP_MKTP_CD: {
    id: 'NY.GDP.MKTP.CD',
    group: 'economy',
    key: 'gdpUsd',
    ar: 'الناتج المحلي الإجمالي',
    en: 'GDP',
    format: 'usd',
  },
  NY_GDP_PCAP_CD: {
    id: 'NY.GDP.PCAP.CD',
    group: 'economy',
    key: 'gdpPerCapita',
    ar: 'الناتج للفرد',
    en: 'GDP per capita',
    format: 'usd',
  },
  NY_GDP_MKTP_KD_ZG: {
    id: 'NY.GDP.MKTP.KD.ZG',
    group: 'economy',
    key: 'gdpGrowth',
    ar: 'نمو الناتج',
    en: 'GDP growth',
    format: 'percent',
  },
  SL_UEM_TOTL_ZS: {
    id: 'SL.UEM.TOTL.ZS',
    group: 'economy',
    key: 'unemployment',
    ar: 'البطالة',
    en: 'Unemployment',
    format: 'percent',
  },
  FP_CPI_TOTL_ZG: {
    id: 'FP.CPI.TOTL.ZG',
    group: 'economy',
    key: 'inflation',
    ar: 'التضخم',
    en: 'Inflation',
    format: 'percent',
  },
  SI_POV_GINI: {
    id: 'SI.POV.GINI',
    group: 'economy',
    key: 'gini',
    ar: 'معامل جيني (تفاوت الدخل)',
    en: 'Gini coefficient',
    format: 'index',
  },
  VC_IHR_PSRC_P5: {
    id: 'VC.IHR.PSRC.P5',
    group: 'risk',
    key: 'homicideRate',
    ar: 'معدل القتل المتعمد (لكل 100 ألف)',
    en: 'Intentional homicides (per 100k)',
    format: 'decimal',
  },
  VC_BTL_DETH: {
    id: 'VC.BTL.DETH',
    group: 'risk',
    key: 'battleDeaths',
    ar: 'وفيات المعارك',
    en: 'Battle-related deaths',
    format: 'count',
  },
};

export const GROUP_ORDER = ['military', 'economy', 'risk'];

export const GROUP_META = {
  military: { ar: 'الجيش', en: 'Military' },
  economy: { ar: 'الاقتصاد', en: 'Economy' },
  risk: { ar: 'المخاطر', en: 'Risk' },
};

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

/**
 * يجلب مؤشراً واحداً لدولة واحدة.
 * mrnev=1 تعني «أحدث قيمة غير فارغة»، فتعيد طلباً واحداً بدل تاريخ كامل.
 * يقبل البنك الدولي رمز ISO alpha-2 مباشرة في المسار.
 */
async function fetchIndicator(iso2, indicator, signal) {
  const url = `${API}/country/${iso2}/indicator/${indicator.id}?format=json&mrnev=1&per_page=5`;
  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), TIMEOUT_MS);
  const onAbort = () => ac.abort();
  signal?.addEventListener('abort', onAbort);
  try {
    const res = await fetch(url, { headers: { Accept: 'application/json' }, signal: ac.signal });
    if (!res.ok) return null;
    const json = await res.json();
    // الدول غير المغطاة (مثل الفاتيكان) ترجع رسالة خطأ بدل مصفوفة بيانات.
    const row = Array.isArray(json?.[1]) ? json[1].find((r) => r.value != null) : null;
    if (!row) return null;
    const value = Number(row.value);
    if (!Number.isFinite(value)) return null;
    return { value, year: row.date ?? null };
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
    signal?.removeEventListener('abort', onAbort);
  }
}

/** تنسيق الرقم حسب نوعه مع إبقاء اللغة حسب واجهة المستخدم. */
export function formatStat(entry, format, lang) {
  if (!entry) return null;
  const locale = lang === 'ar' ? 'ar-EG' : 'en-US';
  const { value } = entry;
  try {
    switch (format) {
      case 'usd':
        return new Intl.NumberFormat(locale, {
          style: 'currency',
          currency: 'USD',
          notation: 'compact',
          maximumFractionDigits: 1,
        }).format(value);
      case 'percent':
        return `${new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(value)}%`;
      case 'count':
        return new Intl.NumberFormat(locale, {
          notation: 'compact',
          maximumFractionDigits: 1,
        }).format(value);
      case 'index':
        return new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(value);
      default:
        return new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(value);
    }
  } catch {
    return `${value}`;
  }
}

/**
 * يجلب نبذة الجيش والاقتصاد ومؤشرات المخاطر لدولة واحدة.
 * @param {string} countryId رمز ISO alpha-2 (مثل 'fr')
 */
export async function fetchCountryStats(countryId, { signal } = {}) {
  const iso2 = String(countryId ?? '').toLowerCase();
  if (!/^[a-z]{2}$/.test(iso2)) return { available: false };

  if (memCache.has(iso2)) return memCache.get(iso2);
  const stored = readCache(iso2);
  if (stored) {
    const hit = { ...stored, cached: true };
    memCache.set(iso2, hit);
    return hit;
  }

  const defs = Object.values(INDICATORS);
  const settled = await Promise.all(defs.map((d) => fetchIndicator(iso2, d, signal).catch(() => null)));

  const groups = { military: [], economy: [], risk: [] };
  let any = false;
  defs.forEach((def, i) => {
    const data = settled[i];
    groups[def.group].push({ ...def, ...data });
    if (data) any = true;
  });

  const result = {
    available: any,
    iso2,
    ...groups,
    fetchedAt: Date.now(),
    cached: false,
  };

  memCache.set(iso2, result);
  // لا نخزّن نتيجة فارغة — وإلا توقفت التحديثات 30 يوماً كاملة
  if (any) writeCache(iso2, result);
  return result;
}
