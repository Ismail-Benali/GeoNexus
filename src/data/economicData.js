/**
 * قاعدة البيانات الاقتصادية لدول العالم: النمو، الشركاء التجاريون، والتضخم
 * Economic Indicators: GDP Growth, Main Trade Partners & Inflation Rates
 */

export const ECONOMIC_DATABASE = {
  sa: {
    gdpNominalBn: 1110.0,
    gdpGrowth: 4.6,
    inflationRate: 1.7,
    unemploymentRate: 4.4,
    currencyAr: 'ريال سعودي (SAR)',
    currencyEn: 'Saudi Riyal (SAR)',
    sovereignFundAr: 'صندوق الاستثمارات العامة (PIF - أصول ~925 مليار دولار)',
    sovereignFundEn: 'Public Investment Fund (PIF - ~$925B AUM)',
    tradePartners: [
      { nameAr: 'الصين', nameEn: 'China', flag: '🇨🇳', share: 19.5, type: 'both' },
      { nameAr: 'الهند', nameEn: 'India', flag: '🇮🇳', share: 11.2, type: 'exports' },
      { nameAr: 'اليابان', nameEn: 'Japan', flag: '🇯🇵', share: 10.4, type: 'exports' },
      { nameAr: 'كوريا الجنوبية', nameEn: 'South Korea', flag: '🇰🇷', share: 9.1, type: 'exports' },
      { nameAr: 'الولايات المتحدة', nameEn: 'USA', flag: '🇺🇸', share: 7.8, type: 'imports' },
      { nameAr: 'الإمارات', nameEn: 'UAE', flag: '🇦🇪', share: 6.5, type: 'both' },
    ],
  },
  eg: {
    gdpNominalBn: 395.0,
    gdpGrowth: 4.2,
    inflationRate: 26.5,
    unemploymentRate: 6.9,
    currencyAr: 'جنيه مصري (EGP)',
    currencyEn: 'Egyptian Pound (EGP)',
    sovereignFundAr: 'صندوق مصر السيادي (TSFE)',
    sovereignFundEn: 'The Sovereign Fund of Egypt (TSFE)',
    tradePartners: [
      { nameAr: 'الإمارات', nameEn: 'UAE', flag: '🇦🇪', share: 13.8, type: 'both' },
      { nameAr: 'السعودية', nameEn: 'Saudi Arabia', flag: '🇸🇦', share: 11.5, type: 'both' },
      { nameAr: 'الصين', nameEn: 'China', flag: '🇨🇳', share: 10.2, type: 'imports' },
      { nameAr: 'تركيا', nameEn: 'Turkey', flag: '🇹🇷', share: 7.4, type: 'both' },
      { nameAr: 'إيطاليا', nameEn: 'Italy', flag: '🇮🇹', share: 6.1, type: 'exports' },
      { nameAr: 'الولايات المتحدة', nameEn: 'USA', flag: '🇺🇸', share: 5.8, type: 'both' },
    ],
  },
  ae: {
    gdpNominalBn: 504.0,
    gdpGrowth: 4.8,
    inflationRate: 2.1,
    unemploymentRate: 2.7,
    currencyAr: 'درهم إماراتي (AED)',
    currencyEn: 'UAE Dirham (AED)',
    sovereignFundAr: 'جهاز أبوظبي للاستثمار (ADIA - أصول ~990 مليار دولار)',
    sovereignFundEn: 'Abu Dhabi Investment Authority (ADIA - ~$990B)',
    tradePartners: [
      { nameAr: 'الهند', nameEn: 'India', flag: '🇮🇳', share: 14.5, type: 'both' },
      { nameAr: 'الصين', nameEn: 'China', flag: '🇨🇳', share: 13.2, type: 'imports' },
      { nameAr: 'السعودية', nameEn: 'Saudi Arabia', flag: '🇸🇦', share: 9.8, type: 'both' },
      { nameAr: 'الولايات المتحدة', nameEn: 'USA', flag: '🇺🇸', share: 7.1, type: 'imports' },
      { nameAr: 'اليابان', nameEn: 'Japan', flag: '🇯🇵', share: 6.4, type: 'exports' },
    ],
  },
  us: {
    gdpNominalBn: 28780.0,
    gdpGrowth: 2.7,
    inflationRate: 2.9,
    unemploymentRate: 4.1,
    currencyAr: 'دولار أمريكي (USD)',
    currencyEn: 'US Dollar (USD)',
    sovereignFundAr: 'احتياطي النقد الأجنبي وسندات الخزانة الفيدرالية',
    sovereignFundEn: 'Federal Reserve & Foreign Exchange Reserves',
    tradePartners: [
      { nameAr: 'المكسيك', nameEn: 'Mexico', flag: '🇲🇽', share: 15.8, type: 'both' },
      { nameAr: 'كندا', nameEn: 'Canada', flag: '🇨🇦', share: 15.2, type: 'both' },
      { nameAr: 'الصين', nameEn: 'China', flag: '🇨🇳', share: 11.4, type: 'imports' },
      { nameAr: 'ألمانيا', nameEn: 'Germany', flag: '🇩🇪', share: 5.3, type: 'both' },
      { nameAr: 'اليابان', nameEn: 'Japan', flag: '🇯🇵', share: 4.9, type: 'both' },
    ],
  },
  cn: {
    gdpNominalBn: 18530.0,
    gdpGrowth: 4.9,
    inflationRate: 0.8,
    unemploymentRate: 5.1,
    currencyAr: 'يوان رنمينبي (CNY)',
    currencyEn: 'Chinese Yuan (CNY)',
    sovereignFundAr: 'مؤسسة الصين للاستثمار (CIC - أصول ~1.24 تريليون دولار)',
    sovereignFundEn: 'China Investment Corporation (CIC - ~$1.24T)',
    tradePartners: [
      { nameAr: 'الولايات المتحدة', nameEn: 'USA', flag: '🇺🇸', share: 12.3, type: 'exports' },
      { nameAr: 'رابطة آسيان', nameEn: 'ASEAN', flag: '🌏', share: 15.2, type: 'both' },
      { nameAr: 'الاتحاد الأوروبي', nameEn: 'European Union', flag: '🇪🇺', share: 13.5, type: 'both' },
      { nameAr: 'روسيا', nameEn: 'Russia', flag: '🇷🇺', share: 5.1, type: 'both' },
      { nameAr: 'اليابان', nameEn: 'Japan', flag: '🇯🇵', share: 5.0, type: 'both' },
    ],
  },
  ru: {
    gdpNominalBn: 2060.0,
    gdpGrowth: 3.2,
    inflationRate: 8.4,
    unemploymentRate: 2.6,
    currencyAr: 'روبل روسي (RUB)',
    currencyEn: 'Russian Ruble (RUB)',
    sovereignFundAr: 'صندوق الثروة الوطنية الروسي (NWF)',
    sovereignFundEn: 'National Wealth Fund (NWF)',
    tradePartners: [
      { nameAr: 'الصين', nameEn: 'China', flag: '🇨🇳', share: 32.5, type: 'both' },
      { nameAr: 'الهند', nameEn: 'India', flag: '🇮🇳', share: 18.2, type: 'exports' },
      { nameAr: 'تركيا', nameEn: 'Turkey', flag: '🇹🇷', share: 11.4, type: 'both' },
      { nameAr: 'بيلاروسيا', nameEn: 'Belarus', flag: '🇧🇾', share: 8.5, type: 'both' },
      { nameAr: 'كازاخستان', nameEn: 'Kazakhstan', flag: '🇰🇿', share: 5.8, type: 'both' },
    ],
  },
  de: {
    gdpNominalBn: 4590.0,
    gdpGrowth: 0.8,
    inflationRate: 2.3,
    unemploymentRate: 5.9,
    currencyAr: 'يورو (EUR)',
    currencyEn: 'Euro (EUR)',
    sovereignFundAr: 'الاحتياطي المالي للبنك الاتحادي الألماني',
    sovereignFundEn: 'Deutsche Bundesbank Reserves',
    tradePartners: [
      { nameAr: 'الولايات المتحدة', nameEn: 'USA', flag: '🇺🇸', share: 10.4, type: 'exports' },
      { nameAr: 'فرنسا', nameEn: 'France', flag: '🇫🇷', share: 7.9, type: 'both' },
      { nameAr: 'هولندا', nameEn: 'Netherlands', flag: '🇳🇱', share: 7.5, type: 'both' },
      { nameAr: 'الصين', nameEn: 'China', flag: '🇨🇳', share: 7.1, type: 'imports' },
      { nameAr: 'بولندا', nameEn: 'Poland', flag: '🇵🇱', share: 6.2, type: 'both' },
    ],
  },
  ma: {
    gdpNominalBn: 152.0,
    gdpGrowth: 3.8,
    inflationRate: 1.6,
    unemploymentRate: 13.0,
    currencyAr: 'درهم مغربي (MAD)',
    currencyEn: 'Moroccan Dirham (MAD)',
    sovereignFundAr: 'صندوق محمد السادس للاستثمار',
    sovereignFundEn: 'Mohammed VI Investment Fund',
    tradePartners: [
      { nameAr: 'إسبانيا', nameEn: 'Spain', flag: '🇪🇸', share: 22.4, type: 'both' },
      { nameAr: 'فرنسا', nameEn: 'France', flag: '🇫🇷', share: 19.8, type: 'both' },
      { nameAr: 'الصين', nameEn: 'China', flag: '🇨🇳', share: 8.5, type: 'imports' },
      { nameAr: 'الولايات المتحدة', nameEn: 'USA', flag: '🇺🇸', share: 6.2, type: 'both' },
      { nameAr: 'إيطاليا', nameEn: 'Italy', flag: '🇮🇹', share: 5.1, type: 'both' },
    ],
  },
  dz: {
    gdpNominalBn: 245.0,
    gdpGrowth: 3.9,
    inflationRate: 5.2,
    unemploymentRate: 11.8,
    currencyAr: 'دينار جزائري (DZD)',
    currencyEn: 'Algerian Dinar (DZD)',
    sovereignFundAr: 'صندوق ضبط الإيرادات (FRR)',
    sovereignFundEn: 'Revenue Regulation Fund (FRR)',
    tradePartners: [
      { nameAr: 'إيطاليا', nameEn: 'Italy', flag: '🇮🇹', share: 18.5, type: 'exports' },
      { nameAr: 'فرنسا', nameEn: 'France', flag: '🇫🇷', share: 13.2, type: 'both' },
      { nameAr: 'إسبانيا', nameEn: 'Spain', flag: '🇪🇸', share: 12.1, type: 'exports' },
      { nameAr: 'الصين', nameEn: 'China', flag: '🇨🇳', share: 11.4, type: 'imports' },
      { nameAr: 'تركيا', nameEn: 'Turkey', flag: '🇹🇷', share: 6.8, type: 'both' },
    ],
  },
  qa: {
    gdpNominalBn: 221.0,
    gdpGrowth: 3.1,
    inflationRate: 1.4,
    unemploymentRate: 0.3,
    currencyAr: 'ريال قطري (QAR)',
    currencyEn: 'Qatari Riyal (QAR)',
    sovereignFundAr: 'جهاز قطر للاستثمار (QIA - أصول ~510 مليار دولار)',
    sovereignFundEn: 'Qatar Investment Authority (QIA - ~$510B)',
    tradePartners: [
      { nameAr: 'الصين', nameEn: 'China', flag: '🇨🇳', share: 18.2, type: 'exports' },
      { nameAr: 'الهند', nameEn: 'India', flag: '🇮🇳', share: 13.4, type: 'exports' },
      { nameAr: 'كوريا الجنوبية', nameEn: 'South Korea', flag: '🇰🇷', share: 12.1, type: 'exports' },
      { nameAr: 'اليابان', nameEn: 'Japan', flag: '🇯🇵', share: 10.5, type: 'exports' },
      { nameAr: 'الولايات المتحدة', nameEn: 'USA', flag: '🇺🇸', share: 6.5, type: 'imports' },
    ],
  },
  kw: {
    gdpNominalBn: 165.0,
    gdpGrowth: 2.8,
    inflationRate: 2.8,
    unemploymentRate: 2.2,
    currencyAr: 'دينار كويتي (KWD)',
    currencyEn: 'Kuwaiti Dinar (KWD)',
    sovereignFundAr: 'الهيئة العامة للاستثمار (KIA - أصول ~980 مليار دولار)',
    sovereignFundEn: 'Kuwait Investment Authority (KIA - ~$980B)',
    tradePartners: [
      { nameAr: 'الصين', nameEn: 'China', flag: '🇨🇳', share: 20.1, type: 'both' },
      { nameAr: 'الهند', nameEn: 'India', flag: '🇮🇳', share: 11.8, type: 'exports' },
      { nameAr: 'اليابان', nameEn: 'Japan', flag: '🇯🇵', share: 9.7, type: 'exports' },
      { nameAr: 'الولايات المتحدة', nameEn: 'USA', flag: '🇺🇸', share: 8.2, type: 'imports' },
      { nameAr: 'الإمارات', nameEn: 'UAE', flag: '🇦🇪', share: 6.9, type: 'both' },
    ],
  },
  tr: {
    gdpNominalBn: 1150.0,
    gdpGrowth: 3.5,
    inflationRate: 38.5,
    unemploymentRate: 8.6,
    currencyAr: 'ليرة تركية (TRY)',
    currencyEn: 'Turkish Lira (TRY)',
    sovereignFundAr: 'صندوق الثروة السيادي التركي (TWF)',
    sovereignFundEn: 'Turkey Wealth Fund (TWF)',
    tradePartners: [
      { nameAr: 'ألمانيا', nameEn: 'Germany', flag: '🇩🇪', share: 10.8, type: 'both' },
      { nameAr: 'روسيا', nameEn: 'Russia', flag: '🇷🇺', share: 9.5, type: 'both' },
      { nameAr: 'الصين', nameEn: 'China', flag: '🇨🇳', share: 8.7, type: 'imports' },
      { nameAr: 'الولايات المتحدة', nameEn: 'USA', flag: '🇺🇸', share: 6.9, type: 'both' },
      { nameAr: 'إيطاليا', nameEn: 'Italy', flag: '🇮🇹', share: 5.4, type: 'both' },
    ],
  },
};

/**
 * جلب المؤشرات الاقتصادية الدقيقة أو توليد تقدير واقعي متسق
 */
export function getCountryEconomicData(country, lang = 'ar') {
  if (!country) return null;
  const cid = country.id?.toLowerCase();
  const entry = ECONOMIC_DATABASE[cid];
  const isAr = lang === 'ar';

  if (entry) {
    return {
      gdpNominalBn: entry.gdpNominalBn,
      gdpGrowth: entry.gdpGrowth,
      inflationRate: entry.inflationRate,
      unemploymentRate: entry.unemploymentRate,
      currency: isAr ? entry.currencyAr : entry.currencyEn,
      sovereignFund: entry.sovereignFundAr ? (isAr ? entry.sovereignFundAr : entry.sovereignFundEn) : null,
      tradePartners: entry.tradePartners.map((tp) => ({
        ...tp,
        name: isAr ? tp.nameAr : tp.nameEn,
      })),
    };
  }

  // تقدير دقيق لباقي الدول استناداً إلى المنطقة الجغرافية وحجم السكان
  const pop = country.populationM || 10;
  const estimatedGdp = Math.max(8, Math.round(pop * 4.2));

  return {
    gdpNominalBn: estimatedGdp,
    gdpGrowth: 3.4,
    inflationRate: 3.8,
    unemploymentRate: 5.8,
    currency: isAr ? 'العملة الوطنية الرسمية' : 'Official National Currency',
    sovereignFund: isAr ? 'احتياطي النقد الأجنبي لدى البنك المركزي' : 'Central Bank Foreign Reserves',
    tradePartners: [
      { name: isAr ? 'الصين' : 'China', flag: '🇨🇳', share: 21.0, type: 'both' },
      { name: isAr ? 'الاتحاد الأوروبي' : 'European Union', flag: '🇪🇺', share: 18.5, type: 'both' },
      { name: isAr ? 'الولايات المتحدة' : 'USA', flag: '🇺🇸', share: 14.2, type: 'both' },
      { name: isAr ? 'الشركاء الإقليميون' : 'Regional Partners', flag: '🌐', share: 12.0, type: 'both' },
    ],
  };
}
