/**
 * محرك الترجمة والتعريب الجيوسياسي الفوري الثنائي (العربية <-> الإنجليزية)
 * Comprehensive Bidirectional Geopolitical Translation & Localization Engine
 * يمنع التداخلات اللغوية نهائياً عند تبديل اللغة في المنصة.
 */

// 1. قاموس الدول الشامل والمعتمد دولياً (العربية <-> الإنجليزية)
export const COUNTRIES_DICT = {
  // الشرق الأوسط والخليج العربي
  'المملكة العربية السعودية': 'Saudi Arabia',
  'السعودية': 'Saudi Arabia',
  'جمهورية مصر العربية': 'Egypt',
  'مصر': 'Egypt',
  'الإمارات العربية المتحدة': 'United Arab Emirates',
  'الإمارات': 'UAE',
  'دولة قطر': 'Qatar',
  'قطر': 'Qatar',
  'دولة الكويت': 'Kuwait',
  'الكويت': 'Kuwait',
  'سلطنة عمان': 'Oman',
  'عمان': 'Oman',
  'مملكة البحرين': 'Bahrain',
  'البحرين': 'Bahrain',
  'المملكة الأردنية الهاشمية': 'Jordan',
  'الأردن': 'Jordan',
  'الجمهورية العربية السورية': 'Syria',
  'سوريا': 'Syria',
  'الجمهورية اللبنانية': 'Lebanon',
  'لبنان': 'Lebanon',
  'جمهورية العراق': 'Iraq',
  'العراق': 'Iraq',
  'الجمهورية اليمنية': 'Yemen',
  'اليمن': 'Yemen',
  'دولة فلسطين': 'Palestine',
  'فلسطين': 'Palestine',
  'إسرائيل': 'Israel',
  'الجمهورية الإسلامية الإيرانية': 'Iran',
  'إيران': 'Iran',
  'الجمهورية التركية': 'Turkey',
  'تركيا': 'Turkey',

  // شمال أفريقيا والساحل وأفريقيا
  'المملكة المغربية': 'Morocco',
  'المغرب': 'Morocco',
  'الجمهورية الجزائرية': 'Algeria',
  'الجزائر': 'Algeria',
  'الجمهورية التونسية': 'Tunisia',
  'تونس': 'Tunisia',
  'دولة ليبيا': 'Libya',
  'ليبيا': 'Libya',
  'جمهورية السودان': 'Sudan',
  'السودان': 'Sudan',
  'موريتانيا': 'Mauritania',
  'الصومال': 'Somalia',
  'جيبوتي': 'Djibouti',
  'إثيوبيا': 'Ethiopia',
  'إريتريا': 'Eritrea',
  'جنوب السودان': 'South Sudan',
  'تشاد': 'Chad',
  'النيجر': 'Niger',
  'مالي': 'Mali',
  'بوركينا فاسو': 'Burkina Faso',
  'نيجيريا': 'Nigeria',
  'جنوب أفريقيا': 'South Africa',
  'السنغال': 'Senegal',
  'كينيا': 'Kenya',
  'أوغندا': 'Uganda',
  'رواندا': 'Rwanda',
  'جمهورية الكونغو الديمقراطية': 'DR Congo',
  'الكونغو': 'DR Congo',
  'أنغولا': 'Angola',
  'غانا': 'Ghana',
  'ساحل العاج': 'Ivory Coast',
  'تنزانيا': 'Tanzania',
  'زامبيا': 'Zambia',
  'زيمبابوي': 'Zimbabwe',
  'موزمبيق': 'Mozambique',
  'الكاميرون': 'Cameroon',

  // أمريكا وأوروبا
  'الولايات المتحدة الأمريكية': 'United States',
  'الولايات المتحدة': 'United States',
  'أمريكا': 'USA',
  'المملكة المتحدة': 'United Kingdom',
  'بريطانيا': 'United Kingdom',
  'إنجلترا': 'England',
  'فرنسا': 'France',
  'الجمهورية الفرنسية': 'France',
  'ألمانيا': 'Germany',
  'جمهورية ألمانيا الاتحادية': 'Germany',
  'روسيا': 'Russia',
  'روسيا الاتحادية': 'Russian Federation',
  'أوكرانيا': 'Ukraine',
  'إيطاليا': 'Italy',
  'إسبانيا': 'Spain',
  'البرتغال': 'Portugal',
  'بولندا': 'Poland',
  'هولندا': 'Netherlands',
  'بلجيكا': 'Belgium',
  'السويد': 'Sweden',
  'النرويج': 'Norway',
  'فنلندا': 'Finland',
  'الدنمارك': 'Denmark',
  'سويسرا': 'Switzerland',
  'النمسا': 'Austria',
  'اليونان': 'Greece',
  'قبرص': 'Cyprus',
  'جمهورية التشيك': 'Czech Republic',
  'المجر': 'Hungary',
  'رومانيا': 'Romania',
  'بلغاريا': 'Bulgaria',
  'صربيا': 'Serbia',
  'كرواتيا': 'Croatia',
  'سلوفاكيا': 'Slovakia',
  'سلوفينيا': 'Slovenia',
  'إستونيا': 'Estonia',
  'لاتفيا': 'Latvia',
  'ليتوانيا': 'Lithuania',
  'بيلاروسيا': 'Belarus',
  'أيرلندا': 'Ireland',
  'كندا': 'Canada',
  'المكسيك': 'Mexico',
  'البرازيل': 'Brazil',
  'الأرجنتين': 'Argentina',
  'تشيلي': 'Chile',
  'كولومبيا': 'Colombia',
  'فنزويلا': 'Venezuela',
  'كوبا': 'Cuba',
  'بيرو': 'Peru',

  // آسيا والمحيطين الهندي والهادئ
  'الصين': 'China',
  'جمهورية الصين الشعبية': 'China',
  'اليابان': 'Japan',
  'الهند': 'India',
  'جمهورية الهند': 'India',
  'باكستان': 'Pakistan',
  'كوريا الجنوبية': 'South Korea',
  'كوريا الشمالية': 'North Korea',
  'تايوان': 'Taiwan',
  'إندونيسيا': 'Indonesia',
  'ماليزيا': 'Malaysia',
  'سنغافورة': 'Singapore',
  'تايلاند': 'Thailand',
  'فيتنام': 'Vietnam',
  'الفلبين': 'Philippines',
  'أستراليا': 'Australia',
  'نيوزيلندا': 'New Zealand',
  'أفغانستان': 'Afghanistan',
  'كازاخستان': 'Kazakhstan',
  'أوزبكستان': 'Uzbekistan',
  'تركمانستان': 'Turkmenistan',
  'قيرغيزستان': 'Kyrgyzstan',
  'طاجيكستان': 'Tajikistan',
  'أذربيجان': 'Azerbaijan',
  'أرمينيا': 'Armenia',
  'جورجيا': 'Georgia',
  'بنغلاديش': 'Bangladesh',
  'سريلانكا': 'Sri Lanka',
  'ميانمار': 'Myanmar',
};

// 2. قاموس العواصم الكبرى
export const CAPITALS_DICT = {
  'الرياض': 'Riyadh',
  'القاهرة': 'Cairo',
  'أبوظبي': 'Abu Dhabi',
  'الدوحة': 'Doha',
  'الكويت': 'Kuwait City',
  'مسقط': 'Muscat',
  'المنامة': 'Manama',
  'عمان': 'Amman',
  'دمشق': 'Damascus',
  'بيروت': 'Beirut',
  'بغداد': 'Baghdad',
  'صنعاء': 'Sanaa',
  'القدس': 'Jerusalem',
  'طهران': 'Tehran',
  'أنقرة': 'Ankara',
  'الرباط': 'Rabat',
  'الجزائر': 'Algiers',
  'تونس': 'Tunis',
  'طرابلس': 'Tripoli',
  'الخرطوم': 'Khartoum',
  'واشنطن': 'Washington D.C.',
  'لندن': 'London',
  'باريس': 'Paris',
  'برلين': 'Berlin',
  'موسكو': 'Moscow',
  'كييف': 'Kyiv',
  'روما': 'Rome',
  'مدريد': 'Madrid',
  'بكين': 'Beijing',
  'طوكيو': 'Tokyo',
  'نيودلهي': 'New Delhi',
  'إسلام أباد': 'Islamabad',
  'سيول': 'Seoul',
  'بيونغ يانغ': 'Pyongyang',
  'تايبيه': 'Taipei',
  'جاكرتا': 'Jakarta',
  'كانبرا': 'Canberra',
  'أوتاوا': 'Ottawa',
};

// 3. قاموس التحالفات والمنظمات الدولية
export const ALLIANCES_DICT = {
  'حلف شمال الأطلسي (الناتو)': 'NATO',
  'حلف الناتو': 'NATO',
  'الناتو': 'NATO',
  'حلف شمال الأطلسي': 'North Atlantic Treaty Organization (NATO)',
  'الاتحاد الأوروبي': 'European Union',
  'الاتحاد الأوروبي (EU)': 'European Union (EU)',
  'مجلس التعاون الخليجي': 'GCC',
  'مجلس التعاون لدول الخليج العربية': 'Gulf Cooperation Council (GCC)',
  'مجموعة بريكس': 'BRICS',
  'بريكس بلس': 'BRICS+',
  'بريكس': 'BRICS',
  'جامعة الدول العربية': 'Arab League',
  'منظمة التعاون الإسلامي': 'OIC',
  'منظمة شنغهاي للتعاون': 'SCO',
  'منظمة أوبك': 'OPEC',
  'أوبك بلس': 'OPEC+',
  'أوبك': 'OPEC',
  'تحالف أوكوس': 'AUKUS',
  'أوكوس': 'AUKUS',
  'التحالف الرباعي (كواد)': 'Quad',
  'كواد': 'Quad',
  'الأمم المتحدة': 'United Nations',
  'مجلس الأمن الدولي': 'UN Security Council',
  'منظمة معاهدة الأمن الجماعي': 'CSTO',
  'رابطة دول جنوب شرق آسيا': 'ASEAN',
  'الاتحاد الأفريقي': 'African Union',
  'مجموعة السبع (G7)': 'G7 Nations',
  'مجموعة السبع': 'G7',
  'مجموعة العشرين (G20)': 'G20 Nations',
  'مجموعة العشرين': 'G20',
  'البنك الدولي': 'World Bank',
  'صندوق النقد الدولي': 'IMF',
  'منظمة التجارة العالمية': 'WTO',
};

// 4. قاموس أنظمة الحكم والشرعية
export const REGIMES_DICT = {
  'جمهورية رئاسية': 'Presidential Republic',
  'جمهورية برلمانية': 'Parliamentary Republic',
  'اتحاد فيدرالي': 'Federal Republic',
  'جمهورية فيدرالية برلمانية': 'Federal Parliamentary Republic',
  'ملكية دستورية': 'Constitutional Monarchy',
  'ملكية مطلقة': 'Absolute Monarchy',
  'حزب واحد': 'Single-party State',
  'نظام الحزب الواحد': 'Single-party System',
  'حكم عسكري': 'Military Rule',
  'مجلس عسكري انتقالي': 'Transitional Military Council',
  'حكم ديني': 'Theocracy',
  'جمهورية إسلامية ثيوقراطية': 'Theocratic Islamic Republic',
  'حكم انتقالي': 'Transitional Government',
  'مجلس قيادة رئاسي': 'Presidential Leadership Council',
  'إمارة دستورية': 'Constitutional Emirate',
  'سلطنة وراثية': 'Hereditary Sultanate',
};

// 5. قاموس المناصب السياسية والعسكرية
export const TITLES_DICT = {
  'رئيس الجمهورية': 'President of the Republic',
  'رئيس الدولة': 'Head of State',
  'رئيس': 'President',
  'رئيس مجلس الوزراء': 'Prime Minister',
  'رئيس الوزراء': 'Prime Minister',
  'المستشار': 'Chancellor',
  'المستشار الاتحادي': 'Federal Chancellor',
  'الملك': 'King',
  'خادم الحرمين الشريفين': 'Custodian of the Two Holy Mosques',
  'ولي العهد': 'Crown Prince',
  'نائب رئيس الدولة': 'Vice President',
  'أمير البلاد': 'Emir of State',
  'الأمير': 'Emir',
  'حاكم الإمارة': 'Ruler',
  'سلطان عمان': 'Sultan of Oman',
  'السلطان': 'Sultan',
  'المرشد الأعلى': 'Supreme Leader',
  'المرشد الأعلى للثورة': 'Supreme Leader',
  'رئيس مجلس القيادة الرئاسي': 'Chairman of Presidential Leadership Council',
  'قائد القوات المسلحة': 'Commander-in-Chief of Armed Forces',
  'قائد الأركان': 'Chief of General Staff',
  'رئيس هيئة الأركان المشتركة': 'Chairman of Joint Chiefs',
  'وزير الدفاع': 'Defense Minister',
  'وزير الخارجية': 'Foreign Minister',
  'الأمين العام': 'Secretary-General',
};

// 6. قاموس المصطلحات العسكرية والاستراتيجية
export const MILITARY_TERMS_DICT = {
  'ميزانية الدفاع': 'Defense Budget',
  'الإنفاق العسكري': 'Military Spending',
  'القوات النشطة': 'Active Personnel',
  'قوات الاحتياط': 'Reserve Forces',
  'الترتيب العسكري العالمي': 'Global Military Rank',
  'مؤشر القوة العسكرية': 'Power Index Score',
  'مؤشر القوة': 'Power Index',
  'الجيش الأمريكي': 'US Army',
  'البحرية والمارينز': 'Navy & Marine Corps',
  'القوات الجوية': 'Air Force',
  'قوة الفضاء': 'Space Force',
  'القيادة السيبرانية': 'Cyber Command',
  'القوات البرية': 'Ground Forces',
  'القوات الجوية والدفاع الجوي': 'Air & Air Defense Forces',
  'القوات البحرية وخفر السواحل': 'Navy & Coast Guard',
  'الحرس الثوري': 'Revolutionary Guard',
  'قوات الصواريخ الاستراتيجية': 'Strategic Rocket Forces',
  'الردع النووي': 'Nuclear Deterrence',
  'ترسانة نووية': 'Nuclear Arsenal',
  'رؤوس نووية': 'Nuclear Warheads',
  'حاملات طائرات': 'Aircraft Carriers',
  'غواصات هجومية': 'Attack Submarines',
  'غواصات نووية': 'Nuclear Submarines',
  'دفاع جوي صاروخي': 'Missile Defense',
  'صواريخ فرط صوتية': 'Hypersonic Missiles',
  'طائرات مسيرة': 'Drones / UAVs',
  'مسيرات انتحارية': 'Kamikaze Drones',
  'قواعد عسكرية أجنبية': 'Overseas Military Bases',
};

// 7. قاموس المصطلحات الاقتصادية
export const ECONOMIC_TERMS_DICT = {
  'الناتج المحلي الإجمالي': 'Gross Domestic Product (GDP)',
  'نمو الناتج المحلي': 'GDP Growth Rate',
  'معدل التضخم': 'Inflation Rate',
  'معدل البطالة': 'Unemployment Rate',
  'العملة الوطنية': 'National Currency',
  'الصندوق السيادي': 'Sovereign Wealth Fund',
  'صناديق الثروة السيادية': 'Sovereign Wealth Funds',
  'الشركاء التجاريون': 'Trade Partners',
  'الصادرات والواردات': 'Exports & Imports',
  'صادرات': 'Exports',
  'واردات': 'Imports',
  'الميزان التجاري': 'Trade Balance',
  'تبادل تجاري مشترك': 'Bilateral Trade',
  'أصول مدارة': 'Assets Under Management (AUM)',
  'احتياطي النقد الأجنبي': 'Foreign Exchange Reserves',
  'الدين العام': 'Public Debt',
  'نصيب الفرد من الناتج': 'GDP Per Capita',
};

// 8. قاموس بؤر النزاع والمشاعر والأحداث الجيوسياسية
export const GEOPOLITICAL_STATUS_DICT = {
  'حرب نشطة': 'Active War',
  'بؤرة نزاع': 'Conflict Zone',
  'ممر ملاحي حيوي': 'Strategic Chokepoint',
  'تحالف دفاعي': 'Defense Alliance',
  'توتر حدودي': 'Border Tension',
  'أزمة إنسانية': 'Humanitarian Crisis',
  'مرحلة انتقالية': 'Transitional Phase',
  'تصعيد عسكري': 'Military Escalation',
  'أزمة طارئة': 'Critical Crisis',
  'دبلوماسية وسلام': 'Diplomacy & Peace',
  'عقوبات واقتصاد': 'Sanctions & Economic Pressure',
  'تحالف استراتيجي': 'Strategic Alliance',
  'استقرار سيادي ممتاز': 'Exceptional Stability',
  'استقرار متماسك ومستقر': 'Stable & Resilient',
  'استقرار متوسط مع تحديات': 'Moderate with Challenges',
  'استقرار هش / مرحلة انتقالية': 'Fragile / Transitional',
  'مخاطر عدم استقرار مرتفعة': 'Critical Instability Risk',
  'الحاكم الفعلي': 'Current Leader',
  'حليف استراتيجي': 'Strategic Ally',
  'منافس جيوسياسي': 'Geopolitical Rival',
  'وقف إطلاق النار': 'Ceasefire',
  'معاهدة سلام': 'Peace Treaty',
  'ضربة صاروخية': 'Missile Strike',
  'هجوم بطائرات مسيرة': 'Drone Attack',
  'مناورات عسكرية مشتركة': 'Joint Military Drills',
  'حزمة عقوبات': 'Sanctions Package',
  'قمة طارئة': 'Emergency Summit',
  'جلسة مغلقة': 'Closed Session',
  'تحذير استخباراتي': 'Intelligence Warning',
  'توتر حاد / حالة تأهب': 'Tense / High Alert',
  'تصعيد حرج / صراع نشط': 'Critical Escalation',
  'رصد محايد / استقرار': 'Neutral Observation',
  'مسار دبلوماسي / مفاوضات': 'Diplomatic Engagement',
  'مؤشرات إيجابية / تهدئة': 'Constructive / Positive',
};

// 9. مفردات الأخبار الشائعة
export const NEWS_VOCAB_DICT = {
  'عاجل': 'Breaking',
  'بيان رسمي': 'Official Statement',
  'مؤتمر صحفي': 'Press Conference',
  'وزارة الدفاع': 'Ministry of Defense',
  'وزارة الخارجية': 'Ministry of Foreign Affairs',
  'الكرملين': 'The Kremlin',
  'البيت الأبيض': 'The White House',
  'البنتاغون': 'The Pentagon',
  'الاتحاد الأوروبي يفرض': 'EU imposes',
  'واشنطن تعلن': 'Washington announces',
  'موسكو تؤكد': 'Moscow confirms',
  'بكين تحذر': 'Beijing warns',
  'طهران تشدد': 'Tehran emphasizes',
  'مجلس الأمن يعقد': 'Security Council holds',
  'حلف الناتو يعزز': 'NATO reinforces',
  'مفاوضات وقف إطلاق النار': 'Ceasefire negotiations',
  'اتفاق أمني جديد': 'New security agreement',
};

// 10. الأشهر والتقويم
export const MONTHS_DICT = {
  'يناير': 'January',
  'فبراير': 'February',
  'مارس': 'March',
  'أبريل': 'April',
  'مايو': 'May',
  'يونيو': 'June',
  'يوليو': 'July',
  'أغسطس': 'August',
  'سبتمبر': 'September',
  'أكتوبر': 'October',
  'نوفمبر': 'November',
  'ديسمبر': 'December',
};

// بناء القواميس العكسية التلقائية بالكامل (English -> Arabic)
function buildReverseDict(dict) {
  const rev = {};
  for (const [ar, en] of Object.entries(dict)) {
    rev[en.toLowerCase()] = ar;
  }
  return rev;
}

const REVERSE_COUNTRIES = buildReverseDict(COUNTRIES_DICT);
const REVERSE_CAPITALS = buildReverseDict(CAPITALS_DICT);
const REVERSE_ALLIANCES = buildReverseDict(ALLIANCES_DICT);
const REVERSE_REGIMES = buildReverseDict(REGIMES_DICT);
const REVERSE_TITLES = buildReverseDict(TITLES_DICT);
const REVERSE_MILITARY = buildReverseDict(MILITARY_TERMS_DICT);
const REVERSE_ECONOMIC = buildReverseDict(ECONOMIC_TERMS_DICT);
const REVERSE_STATUS = buildReverseDict(GEOPOLITICAL_STATUS_DICT);
const REVERSE_NEWS = buildReverseDict(NEWS_VOCAB_DICT);
const REVERSE_MONTHS = buildReverseDict(MONTHS_DICT);

// مصفوفات مرتبة تنازلياً حسب طول النص لضمان استبدال العبارات الأطول أولاً وتجنب التداخلات
const AR_TO_EN_ENTRIES = [
  ...Object.entries(COUNTRIES_DICT),
  ...Object.entries(ALLIANCES_DICT),
  ...Object.entries(REGIMES_DICT),
  ...Object.entries(TITLES_DICT),
  ...Object.entries(MILITARY_TERMS_DICT),
  ...Object.entries(ECONOMIC_TERMS_DICT),
  ...Object.entries(GEOPOLITICAL_STATUS_DICT),
  ...Object.entries(NEWS_VOCAB_DICT),
  ...Object.entries(CAPITALS_DICT),
  ...Object.entries(MONTHS_DICT),
].sort((a, b) => b[0].length - a[0].length);

const EN_TO_AR_ENTRIES = [
  ...Object.entries(REVERSE_COUNTRIES),
  ...Object.entries(REVERSE_ALLIANCES),
  ...Object.entries(REVERSE_REGIMES),
  ...Object.entries(REVERSE_TITLES),
  ...Object.entries(REVERSE_MILITARY),
  ...Object.entries(REVERSE_ECONOMIC),
  ...Object.entries(REVERSE_STATUS),
  ...Object.entries(REVERSE_NEWS),
  ...Object.entries(REVERSE_CAPITALS),
  ...Object.entries(REVERSE_MONTHS),
].sort((a, b) => b[0].length - a[0].length);

/**
 * فحص ما إذا كان النص يحتوي على حروف عربية
 */
export function isArabicText(text) {
  if (typeof text !== 'string') return false;
  return /[\u0600-\u06FF\u0750-\u077F]/.test(text);
}

/**
 * المترجم الشامل للنصوص والعبارات الجيوسياسية
 * يقوم بالتحويل الثنائي الحاسم للنص حسب اللغة المستهدفة (ar أو en)
 * بدون أي تداخلات أو تشويه
 */
export function translateText(text, targetLang = 'ar') {
  if (text === null || text === undefined) return '';
  const str = String(text).trim();
  if (!str) return '';

  const isTargetAr = targetLang === 'ar';
  const hasArabic = isArabicText(str);

  // إذا كان النص بالفعل بنفس لغة الهدف تماماً ولا توجد كلمات هجينة
  if (isTargetAr && hasArabic && !/[a-zA-Z]{4,}/.test(str)) return str;
  if (!isTargetAr && !hasArabic) return str;

  // 1. التحويل من العربية إلى الإنجليزية (Arabic -> English)
  if (!isTargetAr) {
    // تطابق مباشر سريع
    if (COUNTRIES_DICT[str]) return COUNTRIES_DICT[str];
    if (ALLIANCES_DICT[str]) return ALLIANCES_DICT[str];
    if (REGIMES_DICT[str]) return REGIMES_DICT[str];
    if (TITLES_DICT[str]) return TITLES_DICT[str];
    if (MILITARY_TERMS_DICT[str]) return MILITARY_TERMS_DICT[str];
    if (ECONOMIC_TERMS_DICT[str]) return ECONOMIC_TERMS_DICT[str];
    if (GEOPOLITICAL_STATUS_DICT[str]) return GEOPOLITICAL_STATUS_DICT[str];
    if (NEWS_VOCAB_DICT[str]) return NEWS_VOCAB_DICT[str];
    if (CAPITALS_DICT[str]) return CAPITALS_DICT[str];
    if (MONTHS_DICT[str]) return MONTHS_DICT[str];

    let result = str;
    for (const [ar, en] of AR_TO_EN_ENTRIES) {
      if (result.includes(ar)) {
        result = result.split(ar).join(en);
      }
    }

    // تنظيف الأرقام والوحدات واللواحق
    result = result
      .replace(/مليار دولار/g, 'Billion USD')
      .replace(/تريليون دولار/g, 'Trillion USD')
      .replace(/مليون نسمة/g, 'M people')
      .replace(/ألف مقاتل/g, 'k troops')
      .replace(/حزب مسجل/g, 'registered parties')
      .replace(/المرتبة #/g, 'Rank #')
      .replace(/سنة/g, 'years')
      .replace(/دولة/g, 'countries')
      .replace(/عضو/g, 'member');

    return result;
  }

  // 2. التحويل من الإنجليزية إلى العربية (English -> Arabic)
  const lower = str.toLowerCase();
  if (REVERSE_COUNTRIES[lower]) return REVERSE_COUNTRIES[lower];
  if (REVERSE_ALLIANCES[lower]) return REVERSE_ALLIANCES[lower];
  if (REVERSE_REGIMES[lower]) return REVERSE_REGIMES[lower];
  if (REVERSE_TITLES[lower]) return REVERSE_TITLES[lower];
  if (REVERSE_MILITARY[lower]) return REVERSE_MILITARY[lower];
  if (REVERSE_ECONOMIC[lower]) return REVERSE_ECONOMIC[lower];
  if (REVERSE_STATUS[lower]) return REVERSE_STATUS[lower];
  if (REVERSE_NEWS[lower]) return REVERSE_NEWS[lower];
  if (REVERSE_CAPITALS[lower]) return REVERSE_CAPITALS[lower];
  if (REVERSE_MONTHS[lower]) return REVERSE_MONTHS[lower];

  let resultAr = str;
  for (const [enLower, ar] of EN_TO_AR_ENTRIES) {
    const reg = new RegExp(`\\b${enLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    if (reg.test(resultAr)) {
      resultAr = resultAr.replace(reg, ar);
    }
  }

  // ترجمة الوحدات والمصطلحات الشائعة
  resultAr = resultAr
    .replace(/\bBillion USD\b/gi, 'مليار دولار')
    .replace(/\bTrillion USD\b/gi, 'تريليون دولار')
    .replace(/\bM people\b/gi, 'مليون نسمة')
    .replace(/\bk troops\b/gi, 'ألف مقاتل')
    .replace(/\bRank #/gi, 'المرتبة #')
    .replace(/\bregistered parties\b/gi, 'أحزاب مسجلة')
    .replace(/\bcountries\b/gi, 'دولة')
    .replace(/\bmembers\b/gi, 'أعضاء');

  return resultAr;
}

/**
 * دالة ذكية لترجمة كائن الخبر بالكامل (العنوان والملخص والمصدر)
 */
export function translateNewsArticle(article, targetLang = 'ar') {
  if (!article) return article;
  return {
    ...article,
    text: translateText(article.text, targetLang),
    snippet: article.snippet ? translateText(article.snippet, targetLang) : '',
    sourceName: translateText(article.sourceName || article.source, targetLang),
  };
}

/**
 * مترجم مخصص للمصفوفات واللوائح
 */
export function translateList(list = [], targetLang = 'ar') {
  if (!Array.isArray(list)) return [];
  return list.map((item) => translateText(item, targetLang));
}

/**
 * مترجم آمن لكائن يحمل خاصيتي ar و en
 */
export function pickLang(obj, targetLang = 'ar', fallback = '') {
  if (!obj) return fallback;
  if (typeof obj === 'string') return translateText(obj, targetLang);
  const isAr = targetLang === 'ar';
  return isAr ? obj.ar || obj.nameAr || obj.titleAr || obj.en || fallback : obj.en || obj.nameEn || obj.titleEn || obj.ar || fallback;
}
