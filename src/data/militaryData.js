/**
 * بيانات الجاهزية العسكرية والتسليح ومؤشرات القوة لجيوش دول العالم
 * Global Military Readiness, Defense Budgets, Personnel & Power Rankings
 */

export const GLOBAL_MILITARY_DB = {
  us: {
    budgetBn: 886.0,
    activePersonnelK: 1328,
    reservePersonnelK: 799,
    globalRank: 1,
    readinessScore: 98,
    pwrScore: 0.0699,
    mainBranchesAr: ['الجيش الأمريكي', 'البحرية والمارينز', 'القوات الجوية', 'قوة الفضاء', 'القيادة السيبرانية'],
    mainBranchesEn: ['US Army', 'US Navy & Marines', 'US Air Force', 'US Space Force', 'Cyber Command'],
  },
  ru: {
    budgetBn: 140.0,
    activePersonnelK: 1320,
    reservePersonnelK: 2000,
    globalRank: 2,
    readinessScore: 94,
    pwrScore: 0.0702,
    mainBranchesAr: ['القوات البرية الروسية', 'القوات الجو-فضائية', 'الأسطول الحربي الروسي', 'قوات الصواريخ الاستراتيجية'],
    mainBranchesEn: ['Russian Ground Forces', 'Aerospace Forces', 'Russian Navy', 'Strategic Rocket Forces'],
  },
  cn: {
    budgetBn: 296.0,
    activePersonnelK: 2035,
    reservePersonnelK: 510,
    globalRank: 3,
    readinessScore: 96,
    pwrScore: 0.0706,
    mainBranchesAr: ['جيش التحرير الشعبي (القوات البرية)', 'بحرية جيش التحرير', 'القوات الجوية', 'قوة الصواريخ الاستراتيجية', 'قوة الدعم السيبراني'],
    mainBranchesEn: ['PLA Ground Force', 'PLA Navy', 'PLA Air Force', 'PLA Rocket Force', 'Strategic Support Force'],
  },
  in: {
    budgetBn: 81.4,
    activePersonnelK: 1450,
    reservePersonnelK: 1155,
    globalRank: 4,
    readinessScore: 89,
    pwrScore: 0.1023,
    mainBranchesAr: ['الجيش الهندي', 'البحرية الهندية', 'القوات الجوية الهندية', 'قيادة القوات الاستراتيجية'],
    mainBranchesEn: ['Indian Army', 'Indian Navy', 'Indian Air Force', 'Strategic Forces Command'],
  },
  kr: {
    budgetBn: 47.0,
    activePersonnelK: 555,
    reservePersonnelK: 2750,
    globalRank: 5,
    readinessScore: 90,
    pwrScore: 0.1416,
    mainBranchesAr: ['جيش جمهورية كوريا', 'البحرية الكورية ومشاة البحرية', 'القوات الجوية الكورية'],
    mainBranchesEn: ['ROK Army', 'ROK Navy & Marines', 'ROK Air Force'],
  },
  gb: {
    budgetBn: 68.5,
    activePersonnelK: 185,
    reservePersonnelK: 75,
    globalRank: 6,
    readinessScore: 88,
    pwrScore: 0.1443,
    mainBranchesAr: ['الجيش البريطاني', 'البحرية الملكية', 'سلاح الجو الملكي (RAF)'],
    mainBranchesEn: ['British Army', 'Royal Navy', 'Royal Air Force (RAF)'],
  },
  jp: {
    budgetBn: 54.0,
    activePersonnelK: 247,
    reservePersonnelK: 56,
    globalRank: 7,
    readinessScore: 87,
    pwrScore: 0.1601,
    mainBranchesAr: ['قوة الدفاع الذاتي البرية', 'قوة الدفاع الذاتي البحرية', 'قوة الدفاع الذاتي الجوية'],
    mainBranchesEn: ['JGSDF (Ground)', 'JMSDF (Maritime)', 'JASDF (Air)'],
  },
  tr: {
    budgetBn: 25.0,
    activePersonnelK: 355,
    reservePersonnelK: 380,
    globalRank: 8,
    readinessScore: 88,
    pwrScore: 0.1697,
    mainBranchesAr: ['القوات البرية التركية', 'القوات البحرية', 'القوات الجوية', 'قيادة الطائرات المسيرة (بيرقدار/قزل إلما)'],
    mainBranchesEn: ['Turkish Land Forces', 'Turkish Naval Forces', 'Turkish Air Force', 'UAV / Drone Command'],
  },
  pk: {
    budgetBn: 10.3,
    activePersonnelK: 654,
    reservePersonnelK: 550,
    globalRank: 9,
    readinessScore: 84,
    pwrScore: 0.1711,
    mainBranchesAr: ['الجيش الباكستاني', 'البحرية الباكستانية', 'القوات الجوية الباكستانية', 'قيادة الخطط الاستراتيجية (النووية)'],
    mainBranchesEn: ['Pakistan Army', 'Pakistan Navy', 'Pakistan Air Force', 'Strategic Plans Division'],
  },
  it: {
    budgetBn: 32.0,
    activePersonnelK: 165,
    reservePersonnelK: 18,
    globalRank: 10,
    readinessScore: 85,
    pwrScore: 0.1863,
    mainBranchesAr: ['الجيش الإيطالي', 'البحرية الإيطالية', 'القوات الجوية', 'الكارابينييري'],
    mainBranchesEn: ['Italian Army', 'Italian Navy', 'Italian Air Force', 'Carabinieri'],
  },
  fr: {
    budgetBn: 50.0,
    activePersonnelK: 205,
    reservePersonnelK: 41,
    globalRank: 11,
    readinessScore: 88,
    pwrScore: 0.1878,
    mainBranchesAr: ['جيش البر الفرنسي', 'البحرية الوطنية وحاملات الطائرات', 'سلاح الجو والفضاء', 'قوة الردع النووي الاستراتيجي'],
    mainBranchesEn: ['French Army', 'French Navy', 'Air & Space Force', 'Strategic Nuclear Force'],
  },
  br: {
    budgetBn: 24.0,
    activePersonnelK: 360,
    reservePersonnelK: 1340,
    globalRank: 12,
    readinessScore: 81,
    pwrScore: 0.2159,
    mainBranchesAr: ['الجيش البرازيلي', 'البحرية البرازيلية', 'القوات الجوية البرازيلية'],
    mainBranchesEn: ['Brazilian Army', 'Brazilian Navy', 'Brazilian Air Force'],
  },
  id: {
    budgetBn: 9.2,
    activePersonnelK: 400,
    reservePersonnelK: 400,
    globalRank: 13,
    readinessScore: 79,
    pwrScore: 0.2251,
    mainBranchesAr: ['الجيش الإندونيسي الوطني', 'القوات البحرية', 'القوات الجوية'],
    mainBranchesEn: ['Indonesian Army', 'Indonesian Navy', 'Indonesian Air Force'],
  },
  de: {
    budgetBn: 56.0,
    activePersonnelK: 181,
    reservePersonnelK: 34,
    globalRank: 14,
    readinessScore: 82,
    pwrScore: 0.2314,
    mainBranchesAr: ['الجيش الاتحادي الألماني (هير)', 'البحرية الألمانية', 'سلاح الجو (لوفتفافه)', 'قيادة الفضاء السيبراني'],
    mainBranchesEn: ['German Army (Heer)', 'German Navy', 'German Air Force (Luftwaffe)', 'Cyber and Info Domain'],
  },
  eg: {
    budgetBn: 5.5,
    activePersonnelK: 440,
    reservePersonnelK: 480,
    globalRank: 15,
    readinessScore: 86,
    pwrScore: 0.2458,
    mainBranchesAr: ['القوات المسلحة المصرية (الجيش البري)', 'القوات البحرية (أسطول الشمال والجنوب)', 'القوات الجوية', 'قوات الدفاع الجوي'],
    mainBranchesEn: ['Egyptian Army', 'Egyptian Navy (North & South Fleets)', 'Egyptian Air Force', 'Air Defense Forces'],
  },
  ir: {
    budgetBn: 10.3,
    activePersonnelK: 610,
    reservePersonnelK: 350,
    globalRank: 16,
    readinessScore: 82,
    pwrScore: 0.2511,
    mainBranchesAr: ['الجيش الإيراني (أرتيش)', 'الحرس الثوري الإيراني (IRGC)', 'القوة الجوفضائية والصاروخية', 'البحرية'],
    mainBranchesEn: ['Iranian Army (Artesh)', 'IRGC (Revolutionary Guard)', 'Aerospace & Missile Force', 'Navy'],
  },
  il: {
    budgetBn: 27.5,
    activePersonnelK: 170,
    reservePersonnelK: 465,
    globalRank: 17,
    readinessScore: 91,
    pwrScore: 0.2596,
    mainBranchesAr: ['القوات البرية', 'سلاح الجو الإسرائيلي', 'البحرية', 'الاستخبارات العسكرية والسيبرانية (8200)'],
    mainBranchesEn: ['Ground Forces', 'Israeli Air Force', 'Navy', 'Military & Cyber Intelligence (Unit 8200)'],
  },
  sa: {
    budgetBn: 75.0,
    activePersonnelK: 257,
    reservePersonnelK: 100,
    globalRank: 22,
    readinessScore: 89,
    pwrScore: 0.3214,
    mainBranchesAr: ['القوات البرية الملكية السعودية', 'القوات الجوية الملكية السعودية', 'القوات البحرية الملكية', 'قوات الدفاع الجوي الملكي', 'قوة الصواريخ الاستراتيجية الملكية'],
    mainBranchesEn: ['Royal Saudi Land Forces', 'Royal Saudi Air Force', 'Royal Saudi Navy', 'Royal Saudi Air Defense', 'Royal Strategic Missile Force'],
  },
  dz: {
    budgetBn: 21.6,
    activePersonnelK: 130,
    reservePersonnelK: 150,
    globalRank: 26,
    readinessScore: 83,
    pwrScore: 0.3589,
    mainBranchesAr: ['الجيش الوطني الشعبي الجزائري', 'القوات الجوية الجزائرية', 'القوات البحرية الجزائرية', 'قوات الدفاع الجوي عن الإقليم'],
    mainBranchesEn: ['National People\'s Army', 'Algerian Air Force', 'Algerian Naval Forces', 'Territorial Air Defense'],
  },
  ae: {
    budgetBn: 23.0,
    activePersonnelK: 65,
    reservePersonnelK: 35,
    globalRank: 36,
    readinessScore: 88,
    pwrScore: 0.5012,
    mainBranchesAr: ['القوات المسلحة الإماراتية البرية', 'القوات الجوية والدفاع الجوي', 'القوات البحرية', 'قيادة الحرس الرئاسي والعمليات الخاصة'],
    mainBranchesEn: ['UAE Land Forces', 'UAE Air Force & Air Defense', 'UAE Navy', 'Presidential Guard & Special Ops'],
  },
  ma: {
    budgetBn: 5.4,
    activePersonnelK: 196,
    reservePersonnelK: 150,
    globalRank: 55,
    readinessScore: 80,
    pwrScore: 0.8124,
    mainBranchesAr: ['القوات المسلحة الملكية المغربية (الجيش)', 'القوات الملكية الجوية', 'البحرية الملكية', 'الدرك الملكي والمنطقة الجنوبية'],
    mainBranchesEn: ['Royal Moroccan Armed Forces', 'Royal Air Force', 'Royal Navy', 'Royal Gendarmerie & Southern Zone'],
  },
  qa: {
    budgetBn: 15.0,
    activePersonnelK: 17,
    reservePersonnelK: 10,
    globalRank: 60,
    readinessScore: 84,
    pwrScore: 0.9123,
    mainBranchesAr: ['القوات البرية الأميرية القطرية', 'القوات الجوية الأميرية (رافال وتايفون وF-15QA)', 'القوات البحرية الأميرية'],
    mainBranchesEn: ['Qatari Emiri Land Force', 'Qatari Emiri Air Force', 'Qatari Emiri Navy'],
  },
  kw: {
    budgetBn: 7.0,
    activePersonnelK: 18,
    reservePersonnelK: 24,
    globalRank: 68,
    readinessScore: 78,
    pwrScore: 1.0542,
    mainBranchesAr: ['الجيش الكويتي البري', 'القوة الجوية الكويتية (يوروفايتر وF/A-18)', 'القوة البحرية الكويتية', 'الحرس الوطني الكويتي'],
    mainBranchesEn: ['Kuwaiti Land Forces', 'Kuwaiti Air Force', 'Kuwaiti Navy', 'Kuwait National Guard'],
  },
  om: {
    budgetBn: 6.5,
    activePersonnelK: 43,
    reservePersonnelK: 20,
    globalRank: 72,
    readinessScore: 80,
    pwrScore: 1.1420,
    mainBranchesAr: ['الجيش السلطاني العماني', 'سلاح الجو السلطاني العماني', 'البحرية السلطانية العمانية', 'الحرس السلطاني العماني'],
    mainBranchesEn: ['Royal Army of Oman', 'Royal Air Force of Oman', 'Royal Navy of Oman', 'Royal Guard of Oman'],
  },
  jo: {
    budgetBn: 2.2,
    activePersonnelK: 101,
    reservePersonnelK: 65,
    globalRank: 75,
    readinessScore: 82,
    pwrScore: 1.1850,
    mainBranchesAr: ['القوات المسلحة الأردنية (الجيش العربي)', 'سلاح الجو الملكي الأردني', 'القوة البحرية الملكية', 'قيادة العمليات الخاصة'],
    mainBranchesEn: ['Jordanian Armed Forces (Arab Army)', 'Royal Jordanian Air Force', 'Royal Naval Force', 'Special Operations Command'],
  },
};

/**
 * استرجاع بيانات الجاهزية العسكرية أو توليد تقديرات دقيقة وفق الميزانية المتاحة
 */
export function getMilitaryReadinessData(country) {
  if (!country) return null;
  const cid = country.id?.toLowerCase();
  const entry = GLOBAL_MILITARY_DB[cid];

  const budget = country.militaryBudgetBn ?? (entry ? entry.budgetBn : 2.0);

  if (entry) {
    return {
      budgetBn: budget,
      activePersonnelK: entry.activePersonnelK,
      reservePersonnelK: entry.reservePersonnelK,
      globalRank: entry.globalRank,
      readinessScore: entry.readinessScore,
      pwrScore: entry.pwrScore,
      branchesAr: entry.mainBranchesAr,
      branchesEn: entry.mainBranchesEn,
      comparisonList: getGlobalComparison(cid, entry),
    };
  }

  // تقدير دقيق لبقية دول العالم
  const pop = country.populationM || 10;
  const activeK = Math.max(8, Math.round(pop * 3.5));
  const reserveK = Math.round(activeK * 1.2);
  const rank = Math.min(145, Math.max(30, Math.round(150 - budget * 4.5)));
  const readiness = Math.min(88, Math.max(50, Math.round(60 + Math.log10(Math.max(1, budget)) * 12)));

  const fallback = {
    budgetBn: budget,
    activePersonnelK: activeK,
    reservePersonnelK: reserveK,
    globalRank: rank,
    readinessScore: readiness,
    pwrScore: Number((rank * 0.02 + 0.3).toFixed(4)),
    branchesAr: ['القوات البرية الوطنية', 'القوات الجوية والدفاع الجوي', 'القوات البحرية وخفر السواحل'],
    branchesEn: ['National Land Forces', 'Air & Air Defense Forces', 'Navy & Coast Guard'],
  };

  return {
    ...fallback,
    comparisonList: getGlobalComparison(cid, fallback),
  };
}

/**
 * قائمة المقارنة لترتيب القوة العسكرية مع دول مرجعية عالمية وإقليمية
 */
function getGlobalComparison(targetId, targetData) {
  const benchmarks = [
    { id: 'us', nameAr: 'أمريكا', nameEn: 'USA', flag: '🇺🇸', rank: 1, budget: 886, score: 98 },
    { id: 'cn', nameAr: 'الصين', nameEn: 'China', flag: '🇨🇳', rank: 3, budget: 296, score: 96 },
    { id: 'ru', nameAr: 'روسيا', nameEn: 'Russia', flag: '🇷🇺', rank: 2, budget: 140, score: 94 },
    { id: 'sa', nameAr: 'السعودية', nameEn: 'Saudi Arabia', flag: '🇸🇦', rank: 22, budget: 75, score: 89 },
    { id: 'eg', nameAr: 'مصر', nameEn: 'Egypt', flag: '🇪🇬', rank: 15, budget: 5.5, score: 86 },
    { id: 'tr', nameAr: 'تركيا', nameEn: 'Turkey', flag: '🇹🇷', rank: 8, budget: 25, score: 88 },
  ];

  // إذا كانت الدولة المستهدفة ليست من ضمن المعايير أعلاه، نضيفها
  const list = benchmarks.filter((b) => b.id !== targetId).slice(0, 4);

  list.push({
    id: targetId,
    nameAr: 'الدولة الحالية',
    nameEn: 'Target Country',
    flag: '📍',
    rank: targetData.globalRank,
    budget: targetData.budgetBn,
    score: targetData.readinessScore,
    isCurrent: true,
  });

  return list.sort((a, b) => a.rank - b.rank);
}
