/**
 * بيانات ومسارات النمو الاقتصادي (الناتج المحلي الإجمالي) والديموغرافي (السكان)
 * لتغذية مخططات Recharts التفاعلية
 */

// الناتج المحلي الإجمالي الاسمي بالمليارات (تقديرات 2026) للدول الكبرى
const KNOWN_GDP_2026 = {
  us: 28780, cn: 18530, de: 4590, jp: 4110, in: 3940, gb: 3500, fr: 3130,
  it: 2330, br: 2330, ca: 2240, ru: 2060, mx: 1810, au: 1790, kr: 1760,
  es: 1650, id: 1490, tr: 1110, nl: 1140, sa: 1110, ch: 938, pl: 844,
  be: 655, ar: 644, se: 623, ie: 564, ae: 545, th: 536, at: 526, il: 510,
  sg: 525, no: 504, ph: 471, vn: 466, my: 445, bd: 455, dk: 412, co: 400,
  eg: 395, za: 373, pk: 340, ng: 253, dz: 245, iq: 265, qa: 235, kz: 290,
  ma: 153, kw: 160, om: 110, jo: 52, tn: 52, lb: 24, ly: 50, sd: 35,
  ua: 190, gr: 250, pt: 287, fi: 300, cz: 330, ro: 360, cl: 335, pe: 275,
  nz: 255, ke: 120, et: 165, gh: 75, ci: 80, tz: 85, ug: 50, sy: 20,
};

// معدلات النمو السنوية النموذجية (2018 - 2027) تشمل انكماش 2020 وتعافي 2021
const GROWTH_FACTORS = [
  { year: 2018, gdpRatio: 0.74, gdpGrowth: 3.1, popRatio: 0.945 },
  { year: 2019, gdpRatio: 0.78, gdpGrowth: 2.8, popRatio: 0.954 },
  { year: 2020, gdpRatio: 0.74, gdpGrowth: -3.2, popRatio: 0.962 }, // جائحة كورونا
  { year: 2021, gdpRatio: 0.83, gdpGrowth: 6.2, popRatio: 0.971 }, // تعافي عالمي
  { year: 2022, gdpRatio: 0.88, gdpGrowth: 3.4, popRatio: 0.979 },
  { year: 2023, gdpRatio: 0.92, gdpGrowth: 2.9, popRatio: 0.987 },
  { year: 2024, gdpRatio: 0.96, gdpGrowth: 3.2, popRatio: 0.994 },
  { year: 2025, gdpRatio: 0.98, gdpGrowth: 3.0, popRatio: 0.997 },
  { year: 2026, gdpRatio: 1.00, gdpGrowth: 3.3, popRatio: 1.000 }, // الأساس الحالي
  { year: 2027, gdpRatio: 1.04, gdpGrowth: 3.5, popRatio: 1.006 }, // توقعات
];

/**
 * الحصول على الناتج المحلي التقديري لدولة ما بالمليارات
 */
export function getBaseGdp(country) {
  const id = country?.id?.toLowerCase();
  if (KNOWN_GDP_2026[id]) return KNOWN_GDP_2026[id];

  // تقدير مبني على الميزانية العسكرية أو عدد السكان
  if (country?.militaryBudgetBn && country.militaryBudgetBn > 0) {
    // ميزانيات الدفاع تمثل عادة 1.8% إلى 4.5% من الناتج المحلي
    return Math.round(country.militaryBudgetBn * 35);
  }

  const pop = country?.populationM || 10;
  // متوسط الناتج المحلي للفرد بحسب المنطقة
  const gdpPerCapita = country?.continent === 'europe' ? 38000
    : country?.continent === 'north-america' ? 35000
    : country?.continent === 'asia' ? 12000
    : country?.continent === 'south-america' ? 9000
    : 3200; // أفريقيا وغيرها

  return Math.max(8, Math.round((pop * gdpPerCapita) / 1000));
}

/**
 * توليد سلسلة زمنية كاملة للناتج المحلي والسكان لاستخدامها في Recharts
 */
export function getCountryTrendSeries(country) {
  const baseGdp = getBaseGdp(country);
  const basePop = country?.populationM || 15;

  return GROWTH_FACTORS.map((f, idx) => {
    // تعديل طفيف خاص بالدولة لمنح كل دولة مساراً طبيعياً وواقعياً
    const hash = (country?.id?.charCodeAt(0) || 10) + (country?.id?.charCodeAt(1) || 20);
    const countryJitter = ((hash % 10) - 5) * 0.008;

    const gdp = Number((baseGdp * (f.gdpRatio + countryJitter)).toFixed(1));
    const pop = Number((basePop * (f.popRatio + countryJitter * 0.3)).toFixed(2));

    // حساب النمو مقارنة بالسنة السابقة
    const prevGdpRatio = idx > 0 ? GROWTH_FACTORS[idx - 1].gdpRatio : 0.72;
    const gdpGrowthRate = Number((((f.gdpRatio - prevGdpRatio) / prevGdpRatio) * 100).toFixed(1));

    return {
      year: f.year,
      gdp, // بالمليارات
      gdpDisplay: gdp >= 1000 ? `$${(gdp / 1000).toFixed(2)}T` : `$${gdp.toFixed(0)}B`,
      gdpGrowth: gdpGrowthRate,
      pop, // بالمليون
      popDisplay: `${pop.toFixed(1)}M`,
      gdpPerCapita: Math.round((gdp * 1000000000) / (pop * 1000000)),
    };
  });
}
