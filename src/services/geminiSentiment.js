/**
 * خدمة التحليل الجيوسياسي ومؤشرات المشاعر والتصنيف الإخباري بواسطة Gemini API
 * Geopolitical Sentiment Analysis & Intelligence Classification Engine
 *
 * يستخدم @google/genai مع نموذج 'gemini-3.8-flash' عند توفر المفتاح،
 * مع محرك تصنيف استخباري محلي فوري فائق الدقة كاحتياطي لتفادي أي تأخير.
 */

import { GoogleGenAI } from '@google/genai';

const SENTIMENT_LABELS = {
  ESCALATION: {
    ar: 'تصعيد عسكري وأمني',
    en: 'Military Escalation',
    tone: 'rose',
    badgeClass: 'bg-rose-500/15 border-rose-500/40 text-rose-300',
    dotClass: 'bg-rose-500',
  },
  CRISIS: {
    ar: 'أزمة إنسانية وطوارئ',
    en: 'Humanitarian Crisis',
    tone: 'orange',
    badgeClass: 'bg-orange-500/15 border-orange-500/40 text-orange-300',
    dotClass: 'bg-orange-500',
  },
  DIPLOMACY: {
    ar: 'حوار ومسار دبلوماسي',
    en: 'Diplomatic Dialogue',
    tone: 'sky',
    badgeClass: 'bg-sky-500/15 border-sky-500/40 text-sky-300',
    dotClass: 'bg-sky-400',
  },
  STABILIZATION: {
    ar: 'استقرار وتهدئة',
    en: 'Stabilization & Peace',
    tone: 'emerald',
    badgeClass: 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300',
    dotClass: 'bg-emerald-500',
  },
  ECONOMIC_PRESSURE: {
    ar: 'ضغوط وعقوبات اقتصادية',
    en: 'Economic Sanctions',
    tone: 'amber',
    badgeClass: 'bg-amber-500/15 border-amber-500/40 text-amber-300',
    dotClass: 'bg-amber-400',
  },
  STRATEGIC_ALLIANCE: {
    ar: 'شراكة وتحالف استراتيجي',
    en: 'Strategic Alliance',
    tone: 'indigo',
    badgeClass: 'bg-indigo-500/15 border-indigo-500/40 text-indigo-300',
    dotClass: 'bg-indigo-400',
  },
};

/** محرك القواعد الجيوسياسية المتقدم باللغتين العربية والإنجليزية */
const RULES = [
  {
    type: 'ESCALATION',
    score: -0.85,
    keywords: [
      'حرب', 'قصف', 'غارة', 'صاروخ', 'صواريخ', 'اشتباك', 'اغتيال', 'مواجهة', 'توتر', 'قوات', 'هجوم',
      'طائرات مسيرة', 'مسيرات', 'عملية عسكرية', 'معارك', 'غزو', 'اعتداء', 'مقاتلات',
      'strike', 'war', 'missile', 'bomb', 'drone', 'attack', 'clashes', 'offensive', 'assault', 'troops',
      'casualty', 'casualties', 'military', 'conflict', 'intercepted', 'hostilities',
    ],
  },
  {
    type: 'CRISIS',
    score: -0.7,
    keywords: [
      'مجاعة', 'نزوح', 'نازحين', 'لاجئين', 'كارثة', 'ضحايا', 'شهداء', 'انهيار', 'فيضانات', 'زلزال',
      'حصار', 'انقطاع', 'طوارئ', 'مأساة',
      'famine', 'displacement', 'refugees', 'crisis', 'emergency', 'collapse', 'shortage', 'catastrophe',
      'disaster', 'humanitarian', 'devastation',
    ],
  },
  {
    type: 'ECONOMIC_PRESSURE',
    score: -0.45,
    keywords: [
      'عقوبات', 'حظر', 'تضخم', 'فائدة', 'رسوم جمركية', 'تعرفة', 'تجميد أصول', 'ديون', 'ركود', 'أسعار النفط',
      'sanctions', 'embargo', 'tariff', 'tariffs', 'inflation', 'inflationary', 'debt', 'freeze', 'assets',
      'recession', 'crude prices', 'trade war',
    ],
  },
  {
    type: 'DIPLOMACY',
    score: +0.4,
    keywords: [
      'مفاوضات', 'محادثات', 'قمة', 'وساطة', 'مبعوث', 'هدنة', 'اتفاق', 'وقف إطلاق النار', 'تنسيق', 'مؤتمر',
      'talks', 'negotiations', 'summit', 'envoy', 'mediator', 'mediation', 'ceasefire', 'treaty', 'accord',
      'diplomacy', 'diplomatic', 'truce',
    ],
  },
  {
    type: 'STRATEGIC_ALLIANCE',
    score: +0.6,
    keywords: [
      'تحالف', 'شراكة', 'الناتو', 'بريكس', 'مجلس التعاون', 'معاهدة', 'انضمام', 'توسيع', 'تعاون أمني',
      'alliance', 'partnership', 'pact', 'nato', 'brics', 'treaty', 'coalition', 'accession', 'cooperation',
      'bilateral', 'trilateral', 'multilateral',
    ],
  },
  {
    type: 'STABILIZATION',
    score: +0.75,
    keywords: [
      'استقرار', 'إعادة إعمار', 'تنمية', 'سلام', 'تطبيع', 'تهدئة', 'اتفاق سلام', 'تسوية',
      'peace', 'stability', 'reconstruction', 'recovery', 'growth', 'normalization', 'de-escalation',
    ],
  },
];

export function analyzeHeadlineSentimentLocally(text) {
  const lower = String(text || '').toLowerCase();
  for (const rule of RULES) {
    if (rule.keywords.some((k) => lower.includes(k))) {
      const meta = SENTIMENT_LABELS[rule.type];
      return {
        type: rule.type,
        score: rule.score,
        meta,
      };
    }
  }

  // افتراضي محايد أو دبلوماسي معتدل
  const fallbackMeta = SENTIMENT_LABELS.DIPLOMACY;
  return {
    type: 'DIPLOMACY',
    score: 0.1,
    meta: fallbackMeta,
  };
}

/**
 * فحص وتحليل قائمة الأخبار بواسطة Gemini API مع الاحتياطي
 */
export async function enrichNewsWithGemini(articles = [], { signal: _signal } = {}) {
  const apiKey =
    typeof process !== 'undefined' && process.env?.GEMINI_API_KEY
      ? process.env.GEMINI_API_KEY
      : typeof import.meta !== 'undefined' && import.meta.env?.VITE_GEMINI_API_KEY
      ? import.meta.env.VITE_GEMINI_API_KEY
      : null;

  // إذا لم يكن المفتاح متوفراً، نستخدم المحرك الاستخباري المدمج فائق السرعة
  if (!apiKey) {
    return articles.map((item) => {
      const analysis = analyzeHeadlineSentimentLocally(item.text);
      return {
        ...item,
        sentiment: analysis.type,
        sentimentScore: analysis.score,
        sentimentMeta: analysis.meta,
        analyzedBy: 'Local-Rule-Engine',
      };
    });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const prompt = `Classify each of the following geopolitical news headlines into one of these strict categories:
['ESCALATION', 'CRISIS', 'DIPLOMACY', 'STABILIZATION', 'ECONOMIC_PRESSURE', 'STRATEGIC_ALLIANCE']
Provide a score between -1.0 and +1.0 for each headline.
Headlines:
${articles.slice(0, 15).map((a, i) => `${i + 1}. ${a.text}`).join('\n')}

Respond ONLY with valid JSON array of objects:
[{"index": 1, "type": "ESCALATION", "score": -0.85}, ...]`;

    const res = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const parsed = JSON.parse(res.text || '[]');
    const lookup = new Map(parsed.map((p) => [p.index, p]));

    return articles.map((item, idx) => {
      const gItem = lookup.get(idx + 1);
      if (gItem && SENTIMENT_LABELS[gItem.type]) {
        return {
          ...item,
          sentiment: gItem.type,
          sentimentScore: gItem.score,
          sentimentMeta: SENTIMENT_LABELS[gItem.type],
          analyzedBy: 'Gemini-3.8-Flash',
        };
      }
      const local = analyzeHeadlineSentimentLocally(item.text);
      return {
        ...item,
        sentiment: local.type,
        sentimentScore: local.score,
        sentimentMeta: local.meta,
        analyzedBy: 'Local-Rule-Engine',
      };
    });
  } catch {
    // في حال وجود أي خطأ في استدعاء الذكاء الاصطناعي، نعود بسلاسة للمحرك المحلي
    return articles.map((item) => {
      const analysis = analyzeHeadlineSentimentLocally(item.text);
      return {
        ...item,
        sentiment: analysis.type,
        sentimentScore: analysis.score,
        sentimentMeta: analysis.meta,
        analyzedBy: 'Local-Rule-Engine',
      };
    });
  }
}
