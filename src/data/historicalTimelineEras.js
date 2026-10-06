/**
 * محرك الخط الزمني الجيوسياسي التفاعلي (1914 - 2026)
 * Interactive Geopolitical Historical Timeline Simulation Engine
 * يتيح تتبع تحولات موازين القوى العالمية والتحالفات وبؤر النزاع عبر أكثر من قرن.
 */

export const TIMELINE_ERAS = [
  {
    year: 1914,
    label: '1914',
    titleAr: 'اندلاع الحرب العالمية الأولى (1914 - 1918)',
    titleEn: 'World War I Outbreak (1914–1918)',
    orderAr: 'عالم الإمبراطوريات والتنافس الاستعماري العسكري',
    orderEn: 'Age of Empires & Colonial Arms Rivalry',
    alliancesAr: ['الوفاق الثلاثي (بريطانيا، فرنسا، روسيا)', 'دول المركز (ألمانيا، النمسا-المجر، الدولة العثمانية)'],
    alliancesEn: ['Triple Entente (UK, France, Russian Empire)', 'Central Powers (Germany, Austria-Hungary, Ottoman Empire)'],
    hotspotsCount: 8,
    activeConflictsAr: ['الجبهة الغربية في أوروبا', 'الجبهة الشرقية الروسية', 'معركة غاليبولي والمضايق', 'مسرح الشرق الأوسط والثورة العربية'],
    activeConflictsEn: ['Western Front in Europe', 'Russian Eastern Front', 'Gallipoli & Turkish Straits', 'Middle Eastern Campaigns'],
    globalDefenseSpendEstimate: '$68B (معادلة بقيمة الذهب)',
    dominantPowerAr: 'الإمبراطورية البريطانية والقيصرية الألمانية',
    dominantPowerEn: 'British Empire & German Empire',
    blocs: [
      { id: 'entente', nameAr: 'الوفاق الثلاثي', nameEn: 'Triple Entente', color: '#0ea5e9', members: ['gb', 'fr', 'ru', 'us', 'it'] },
      { id: 'central', nameAr: 'دول المركز', nameEn: 'Central Powers', color: '#f43f5e', members: ['de', 'at', 'tr'] },
    ],
  },
  {
    year: 1939,
    label: '1939',
    titleAr: 'اندلاع الحرب العالمية الثانية (1939 - 1945)',
    titleEn: 'World War II Outbreak (1939–1945)',
    orderAr: 'انهيار عصبة الأمم وصعود الفاشية والشمولية',
    orderEn: 'Collapse of League of Nations & Rise of Totalitarian Blocs',
    alliancesAr: ['قوات الحلفاء (بريطانيا، الاتحاد السوفيتي، فرنسا، لاحقاً أمريكا)', 'دول المحور (ألمانيا النازية، إيطاليا، إمبراطورية اليابان)'],
    alliancesEn: ['Allied Powers (UK, USSR, France, later USA)', 'Axis Powers (Nazi Germany, Fascist Italy, Imperial Japan)'],
    hotspotsCount: 12,
    activeConflictsAr: ['غزو بولندا ومعركة فرنسا', 'معركة ستالينغراد والجبهة الشرقية', 'معركة بريطانيا الجوية', 'مسرح المحيط الهادئ وبيرل هاربر'],
    activeConflictsEn: ['Invasion of Poland & Fall of France', 'Battle of Stalingrad & Eastern Front', 'Battle of Britain', 'Pacific Theater & Pearl Harbor'],
    globalDefenseSpendEstimate: '$240B (ذروة اقتصاد الحرب الشاملة)',
    dominantPowerAr: 'الولايات المتحدة والاتحاد السوفيتي والإمبراطورية البريطانية',
    dominantPowerEn: 'United States, Soviet Union & British Empire',
    blocs: [
      { id: 'allies', nameAr: 'قوات الحلفاء', nameEn: 'Allied Powers', color: '#10b981', members: ['gb', 'fr', 'ru', 'us', 'cn'] },
      { id: 'axis', nameAr: 'دول المحور', nameEn: 'Axis Powers', color: '#ef4444', members: ['de', 'it', 'jp'] },
    ],
  },
  {
    year: 1949,
    label: '1949',
    titleAr: 'تأسيس حلف الناتو وبداية الحرب الباردة',
    titleEn: 'NATO Inception & Dawn of Cold War',
    orderAr: 'نظام ثنائي القطبية (واشنطن وموسكو) والستار الحديدي',
    orderEn: 'Bipolar Cold War Order & The Iron Curtain',
    alliancesAr: ['حلف شمال الأطلسي - الناتو (12 دولة مؤسسة)', 'الكتلة الشرقية السوفيتية (نواة وارسو)', 'جامعة الدول العربية'],
    alliancesEn: ['NATO (12 Founding Nations)', 'Soviet Eastern Bloc', 'Arab League'],
    hotspotsCount: 6,
    activeConflictsAr: ['حصار برلين والجسر الجوي', 'الحرب الأهلية الصينية وتأسيس جمهورية الصين', 'الحرب الكورية (1950-1953)', 'الصراع العربي الإسرائيلي الأول'],
    activeConflictsEn: ['Berlin Blockade & Airlift', 'Chinese Civil War & PRC Proclamation', 'Korean War (1950–1953)', 'First Arab-Israeli Conflict'],
    globalDefenseSpendEstimate: '$310B',
    dominantPowerAr: 'الولايات المتحدة (احتكار نووي مبكر) والاتحاد السوفيتي',
    dominantPowerEn: 'United States & Soviet Union',
    blocs: [
      { id: 'nato_early', nameAr: 'حلف الناتو (1949)', nameEn: 'NATO (Founding)', color: '#3b82f6', members: ['us', 'gb', 'fr', 'ca', 'it', 'nl', 'be', 'no', 'dk', 'pt'] },
      { id: 'soviet_early', nameAr: 'الكتلة السوفيتية', nameEn: 'Soviet Bloc', color: '#dc2626', members: ['ru', 'pl', 'cz', 'ro', 'bg', 'hu'] },
    ],
  },
  {
    year: 1962,
    label: '1962',
    titleAr: 'أزمة الصواريخ الكوبية والردع النووي (MAD)',
    titleEn: 'Cuban Missile Crisis & Nuclear Deterrence',
    orderAr: 'ذروة سباق التسلح النووي وبروز حركة عدم الانحياز',
    orderEn: 'Peak Nuclear Brinkmanship & Non-Aligned Movement',
    alliancesAr: ['حلف شمال الأطلسي (الناتو)', 'حلف وارسو (المعاهدة الشرقية)', 'حركة عدم الانحياز (مصر، الهند، يوغوسلافيا)'],
    alliancesEn: ['NATO Alliance', 'Warsaw Pact', 'Non-Aligned Movement (NAM)'],
    hotspotsCount: 7,
    activeConflictsAr: ['أزمة الصواريخ في كوبا (حافة الحرب النووية)', 'حرب فيتنام وتدخل القوى العظمى', 'النزاع الحدودي الصيني الهندي (1962)', 'حرب تحرير الجزائر واليمن'],
    activeConflictsEn: ['Cuban Missile Crisis (Nuclear Brink)', 'Vietnam War Escalation', 'Sino-Indian Border War (1962)', 'Algerian War of Independence'],
    globalDefenseSpendEstimate: '$480B',
    dominantPowerAr: 'القطبان النوويان: الولايات المتحدة والاتحاد السوفيتي',
    dominantPowerEn: 'Superpowers: USA & USSR',
    blocs: [
      { id: 'nato_cold', nameAr: 'حلف الناتو', nameEn: 'NATO', color: '#2563eb', members: ['us', 'gb', 'fr', 'de', 'it', 'ca', 'tr', 'gr'] },
      { id: 'warsaw', nameAr: 'حلف وارسو', nameEn: 'Warsaw Pact', color: '#b91c1c', members: ['ru', 'pl', 'cz', 'ro', 'bg', 'hu'] },
      { id: 'nam', nameAr: 'حركة عدم الانحياز', nameEn: 'Non-Aligned Movement', color: '#059669', members: ['eg', 'in', 'id', 'yu'] },
    ],
  },
  {
    year: 1991,
    label: '1991',
    titleAr: 'تفكك الاتحاد السوفيتي وعالم القطب الواحد',
    titleEn: 'Soviet Collapse & The Unipolar Moment',
    orderAr: 'نهاية الحرب الباردة، هيمنة النموذج الغربي، وتحرير الكويت',
    orderEn: 'End of Cold War, Pax Americana & Desert Storm',
    alliancesAr: ['حلف الناتو المتوسع', 'الاتحاد الأوروبي (معاهدة ماستريخت)', 'مجلس التعاون الخليجي', 'رابطة الدول المستقلة'],
    alliancesEn: ['Expanding NATO', 'European Union (Maastricht)', 'Gulf Cooperation Council (GCC)', 'CIS Post-Soviet'],
    hotspotsCount: 8,
    activeConflictsAr: ['حرب الخليج الثانية (عاصفة الصحراء وتحرير الكويت)', 'اندلاع حروب البلقان وتفكك يوغوسلافيا', 'الحرب الأهلية في الصومال', 'الصراع في ناغورنو قره باغ'],
    activeConflictsEn: ['Gulf War (Operation Desert Storm)', 'Yugoslav Wars & Balkan Breakup', 'Somali Civil War', 'Nagorno-Karabakh War'],
    globalDefenseSpendEstimate: '$980B',
    dominantPowerAr: 'الولايات المتحدة الأمريكية (القوة العظمى الوحيدة)',
    dominantPowerEn: 'United States (Hyperpower / Unipolar Hegemon)',
    blocs: [
      { id: 'nato_91', nameAr: 'الناتو والحلفاء', nameEn: 'NATO & Allies', color: '#38bdf8', members: ['us', 'gb', 'fr', 'de', 'it', 'ca', 'tr', 'sa', 'kw'] },
      { id: 'eu_91', nameAr: 'الاتحاد الأوروبي', nameEn: 'European Union', color: '#6366f1', members: ['fr', 'de', 'it', 'nl', 'be', 'es'] },
    ],
  },
  {
    year: 2001,
    label: '2001',
    titleAr: 'أحداث 11 سبتمبر والحرب الدولية على الإرهاب',
    titleEn: 'September 11 & Global War on Terror',
    orderAr: 'تفعيل المادة 5 للناتو لأول مرة وتأسيس منظمة شنغهاي (SCO)',
    orderEn: 'First NATO Article 5 Invocation & SCO Emergence',
    alliancesAr: ['التحالف الدولي لمكافحة الإرهاب', 'حلف الناتو', 'منظمة شنغهاي للتعاون (الصين وروسيا)', 'الاتحاد الأوروبي'],
    alliancesEn: ['Global Counter-Terror Coalition', 'NATO', 'Shanghai Cooperation Organisation (SCO)', 'European Union'],
    hotspotsCount: 9,
    activeConflictsAr: ['حرب أفغانستان والإطاحة بنظام طالبان', 'التحضير لغزو العراق (2003)', 'الصراع الشيشاني الثاني', 'الانتفاضة الفلسطينية الثانية'],
    activeConflictsEn: ['War in Afghanistan', 'Lead-up to Iraq Invasion (2003)', 'Second Chechen War', 'Second Palestinian Intifada'],
    globalDefenseSpendEstimate: '$1.14T',
    dominantPowerAr: 'الولايات المتحدة وحلفاؤها الغربيون',
    dominantPowerEn: 'United States & Western Coalition',
    blocs: [
      { id: 'nato_01', nameAr: 'الناتو ومكافحة الإرهاب', nameEn: 'NATO & Counter-Terror', color: '#0284c7', members: ['us', 'gb', 'fr', 'de', 'it', 'ca', 'tr', 'pl'] },
      { id: 'sco_01', nameAr: 'منظمة شنغهاي للتعاون', nameEn: 'SCO', color: '#e11d48', members: ['cn', 'ru', 'kz', 'kg', 'tj', 'uz'] },
    ],
  },
  {
    year: 2014,
    label: '2014',
    titleAr: 'ضم القرم وبداية الصراع الهجين والحرب الاقتصادية',
    titleEn: 'Crimea Annexation & Rise of Hybrid Warfare',
    orderAr: 'تصدع الأمن الأوروبي وصعود بريكس في قمة فورتاليزا',
    orderEn: 'European Security Fracture & BRICS Institution Building',
    alliancesAr: ['حلف الناتو (تعزيز الجناح الشرقي)', 'مجموعة بريكس (بنك التنمية الجديد)', 'منظمة معاهدة الأمن الجماعي (CSTO)'],
    alliancesEn: ['NATO Enhanced Forward Presence', 'BRICS (New Development Bank)', 'CSTO Alliance'],
    hotspotsCount: 11,
    activeConflictsAr: ['أزمة شبه جزيرة القرم وحرب دونباس', 'صعود تنظيم داعش واجتياح الموصل وسوريا', 'حرب غزة (الجرف الصامد 2014)', 'التنافس في بحر الصين الجنوبي'],
    activeConflictsEn: ['Crimea Annexation & War in Donbas', 'Rise of ISIS in Iraq and Syria', '2014 Gaza Conflict', 'South China Sea Land Reclamation'],
    globalDefenseSpendEstimate: '$1.72T',
    dominantPowerAr: 'المنافسة الاستراتيجية: الولايات المتحدة vs روسيا والصين',
    dominantPowerEn: 'Strategic Rivalry: USA vs Russia & China',
    blocs: [
      { id: 'nato_14', nameAr: 'الناتو والاتحاد الأوروبي', nameEn: 'NATO & EU', color: '#0ea5e9', members: ['us', 'gb', 'fr', 'de', 'it', 'pl', 'ro', 'ca'] },
      { id: 'brics_14', nameAr: 'مجموعة بريكس (2014)', nameEn: 'BRICS', color: '#f59e0b', members: ['br', 'ru', 'in', 'cn', 'za'] },
      { id: 'csto_14', nameAr: 'معاهدة الأمن الجماعي', nameEn: 'CSTO', color: '#dc2626', members: ['ru', 'by', 'am', 'kz', 'kg', 'tj'] },
    ],
  },
  {
    year: 2022,
    label: '2022',
    titleAr: 'حرب أوكرانيا وإعادة تسليح القارة الأوروبية',
    titleEn: 'Ukraine War & Full European Rearmament',
    orderAr: 'أكبر حرب تقليدية في أوروبا منذ 1945 وتفكك سلاسل الطاقة',
    orderEn: 'Major Interstate War in Europe & Geoeconomic Rupture',
    alliancesAr: ['حلف الناتو الموسع (طلب انضمام فنلندا والسويد)', 'المحور الاستراتيجي الروسي الصيني بلا حدود', 'تحالف أوكوس (AUKUS) والرباعي (Quad)'],
    alliancesEn: ['Enlarging NATO (Finland & Sweden application)', 'Russia-China No-Limits Strategic Partnership', 'AUKUS & Quad Alliance'],
    hotspotsCount: 13,
    activeConflictsAr: ['الحرب الروسية الأوكرانية الشاملة وحصار ماريوبول', 'أزمة مضيق تايوان ومناورات الإغلاق', 'حرب تيغراي في إثيوبيا', 'عقوبات الطاقة والتضخم العالمي'],
    activeConflictsEn: ['Russian Invasion of Ukraine', 'Taiwan Strait Crisis Drills', 'Tigray War in Ethiopia', 'Global Energy Sanctions Shock'],
    globalDefenseSpendEstimate: '$2.24T',
    dominantPowerAr: 'الكتلة الغربية ضد المحور الأوراسي الصيني الروسي',
    dominantPowerEn: 'Western Alliance vs Eurasian Sino-Russian Axis',
    blocs: [
      { id: 'nato_22', nameAr: 'حلف الناتو (30 دولة)', nameEn: 'NATO (30 Nations)', color: '#0284c7', members: ['us', 'gb', 'fr', 'de', 'pl', 'fi', 'se', 'tr', 'ca'] },
      { id: 'eurasia_22', nameAr: 'محور أوراسيا', nameEn: 'Eurasian Axis', color: '#e11d48', members: ['ru', 'cn', 'ir', 'kp', 'by'] },
      { id: 'aukus_22', nameAr: 'أوكوس وكواد', nameEn: 'AUKUS & Quad', color: '#10b981', members: ['us', 'gb', 'au', 'jp', 'in'] },
    ],
  },
  {
    year: 2026,
    label: '2026',
    titleAr: 'العالم متعدد الأقطاب وتوسع بريكس+ (المشهد الراهن)',
    titleEn: 'Present Multipolar Order & Expanded BRICS+ (2026)',
    orderAr: 'تعددية أقطاب صريحة، صراعات الممرات المائية والذكاء الاصطناعي والتسليح المفرط',
    orderEn: 'Fully Multipolar Order, Maritime Chokepoint Wars & AI/Hypersonic Arms Race',
    alliancesAr: ['حلف الناتو (32 دولة بعد فنلندا والسويد)', 'مجموعة بريكس+ الموسعة (السعودية، مصر، الإمارات، إيران، إثيوبيا)', 'تحالف أوكوس والرباعي', 'مجلس التعاون الخليجي'],
    alliancesEn: ['NATO (32 Member States)', 'Expanded BRICS+ (Saudi, Egypt, UAE, Iran, Ethiopia)', 'AUKUS & Quad', 'GCC'],
    hotspotsCount: 16,
    activeConflictsAr: ['حرب غزة والبحر الأحمر (تهديد باب المندب ومضيق هرمز)', 'جبهة الاستنزاف في أوكرانيا والدفاع الجوي', 'حرب السودان بين الجيش والدعم السريع', 'سباق الردع في تايوان وبحر الصين'],
    activeConflictsEn: ['Gaza & Red Sea Crisis (Bab el-Mandeb & Hormuz)', 'Ukraine Attrition Warfare & Air Defense Grids', 'Sudan Civil Conflict (SAF vs RSF)', 'Taiwan Strait Deterrence & Pacific Island Pact'],
    globalDefenseSpendEstimate: '$2.48T (رقم قياسي تاريخي غير مسبوق)',
    dominantPowerAr: 'تعددية قطبية معقدة (واشنطن، بكين، موسكو، القوى المتوسطة الإقليمية)',
    dominantPowerEn: 'Complex Multipolarity (US, China, Russia, Strategic Middle Powers)',
    blocs: [
      { id: 'nato_26', nameAr: 'الناتو (32 دولة)', nameEn: 'NATO (32 States)', color: '#0ea5e9', members: ['us', 'gb', 'fr', 'de', 'pl', 'fi', 'se', 'tr', 'it', 'ca'] },
      { id: 'brics_26', nameAr: 'بريكس بلس الموسعة', nameEn: 'BRICS+ (Expanded)', color: '#f59e0b', members: ['cn', 'ru', 'in', 'br', 'za', 'sa', 'ae', 'eg', 'ir', 'et'] },
      { id: 'aukus_26', nameAr: 'أوكوس والشراكة الآسيوية', nameEn: 'AUKUS & Indo-Pacific', color: '#10b981', members: ['us', 'gb', 'au', 'jp', 'kr', 'ph'] },
      { id: 'gcc_26', nameAr: 'مجلس التعاون الخليجي', nameEn: 'GCC', color: '#14b8a6', members: ['sa', 'ae', 'qa', 'kw', 'om', 'bh'] },
    ],
  },
];

/**
 * الحصول على العصر التاريخي المناسب لأي سنة مختارة
 */
export function getEraForYear(year) {
  const numericYear = Number(year) || 2026;
  if (numericYear <= 1918) return TIMELINE_ERAS[0];
  if (numericYear <= 1945) return TIMELINE_ERAS[1];
  if (numericYear <= 1955) return TIMELINE_ERAS[2];
  if (numericYear <= 1975) return TIMELINE_ERAS[3];
  if (numericYear <= 1995) return TIMELINE_ERAS[4];
  if (numericYear <= 2008) return TIMELINE_ERAS[5];
  if (numericYear <= 2018) return TIMELINE_ERAS[6];
  if (numericYear <= 2023) return TIMELINE_ERAS[7];
  return TIMELINE_ERAS[8];
}
