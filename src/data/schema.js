/**
 * قاموس الترجمة + شبكات التحالفات + تحويل الصفوف إلى كائنات دول
 */

export const TITLES = {
  president: { ar: 'رئيس الجمهورية', en: 'President' },
  pm: { ar: 'رئيس الوزراء', en: 'Prime Minister' },
  chancellor: { ar: 'المستشار', en: 'Chancellor' },
  monarch: { ar: 'الملك', en: 'Monarch' },
  emir: { ar: 'حاكم الإمارة', en: 'Ruler' },
  supreme: { ar: 'الأعلى', en: 'Supreme Leader' },
  presidency: { ar: 'رئاسة جماعية', en: 'Presidency' },
  taoiseach: { ar: 'رئيس الحكومة', en: 'Taoiseach' },
  pope: { ar: 'البابا', en: 'Pope' },
  captain: { ar: 'القبطان', en: 'Captain Regent' },
  council: { ar: 'مجلس الحكم', en: 'Council' },
  military: { ar: 'قائد عسكري', en: 'Military leader' },
};

export const REGIMES = {
  republic: { ar: 'جمهورية رئاسية', en: 'Presidential republic' },
  parliamentary: { ar: 'جمهورية برلمانية', en: 'Parliamentary republic' },
  federal: { ar: 'اتحاد فيدرالي', en: 'Federal republic' },
  monarchy: { ar: 'ملكية دستورية', en: 'Constitutional monarchy' },
  'one-party': { ar: 'حزب واحد', en: 'Single-party state' },
  military: { ar: 'حكم عسكري', en: 'Military rule' },
  theocracy: { ar: 'حكم ديني', en: 'Theocracy' },
  transitional: { ar: 'حكم انتقالي', en: 'Transitional government' },
};

/** أسماء القادة بالعربية — يُعرض الاسم اللاتيني لغير المُدرج */
export const LEADERS_AR = {
  us: 'دونالد ترامب', gb: 'كير ستارمر', fr: 'إيمانويل ماكرون', de: 'فريدريش ميرتز',
  ru: 'فلاديمير بوتين', cn: 'شي جين بينغ', in: 'ناريندرا مودي',
  br: 'لويس إناسيو لولا دا سيلفا', jp: 'ساناي تاكيشي', ca: 'مارك كارني', au: 'أنتوني ألبانيز',
  kr: 'لي جاي ميونغ', tr: 'رجب طيب أردوغان', eg: 'عبد الفتاح السيسي', sa: 'محمد بن سلمان',
  ae: 'محمد بن زايد آل نهيان', qa: 'تميم بن حمد آل ثاني', il: 'يسحق هرتسوغ', ir: 'علي خامنئي',
  za: 'سيريل رامافوزا', id: 'برابو سوبيانتو', pk: 'شبهاز شريف', ua: 'فولوديمير زيلينسكي',
  mx: 'كلاوديا شينباوم', ar: 'خافيرو ميلي', ng: 'بولا تينوبو', ke: 'وليام روتو',
  kz: 'كاسيم جوكوف', sg: 'تارمان شانموغاراتنام', my: 'أنور إبراهيم', bd: 'محمد شهاب الدين أحمد',
  vn: 'تو لام', th: 'أنوتين تشارنفيراكول', nl: 'ديك شوف', se: 'أولف كريستيرسون',
  no: 'يوناس غار ستوره', pl: 'دونالد توسك', es: 'بيدرو سانشيز', it: 'جورجيا ميلوني',
  ch: 'غاي بارملين', be: 'بارت دي فيفر', dk: 'ميتي فريديركسن', fi: 'بيتيري أوربو',
  cz: 'بيتري فيالا', gr: 'كيرياكوس ميتوتاكيس', hu: 'فيكتور أوربان', ro: 'إيلي بولوجان',
  cl: 'غابرييل بوريتش', co: 'غوستافو بيترو', pe: 'دينا بولوارتي', ve: 'نيكولاس مادورو',
  af: 'هبة الله أخوندزاده', sy: 'أحمد الشرع', lb: 'جوزيف عون', iq: 'عبد اللطيف رشيد',
  jo: 'الملك عبد الله الثاني', ma: 'الملك محمد السادس', dz: 'عبد المجيد تبون',
  ly: 'عبد الحميد الدبيبة', sd: 'عبد الفتاح البرهان', by: 'ألكسندر لوكاشينكو',
  kp: 'كيم جونغ أون', mm: 'مين أونغ هلاينغ', la: 'ثونغ لون', uz: 'شاڤكات ميرزيباييف',
  tz: 'سمياء سولهو حسن', gh: 'جون ماهاما', ci: 'الاسيان واتارا',
  et: 'تاي أتسكي سلاسي', so: 'حسن شيخ محمد', ml: 'أسييمي غويتا', bf: 'إبراهيم تراوري',
  ne: 'عبد الرحمان تشياني', td: 'محمات ديبي', cd: 'فيليش تشيسيكيدي', zw: 'إيمرسون مناناغوا',
  rs: 'ألكسندر فتشيتش', ba: 'زيليكو تسفييانوفيتش',
};

export const REGIONS = {
  'north-africa': { ar: 'شمال أفريقيا', en: 'North Africa', continent: 'africa' },
  'west-africa': { ar: 'غرب أفريقيا', en: 'West Africa', continent: 'africa' },
  'east-africa': { ar: 'شرق أفريقيا', en: 'East Africa', continent: 'africa' },
  'central-africa': { ar: 'وسط أفريقيا', en: 'Central Africa', continent: 'africa' },
  'southern-africa': { ar: 'الجنوب الأفريقي', en: 'Southern Africa', continent: 'africa' },
  'middle-east': { ar: 'الشرق الأوسط', en: 'Middle East', continent: 'asia' },
  'south-asia': { ar: 'جنوب آسيا', en: 'South Asia', continent: 'asia' },
  'east-asia': { ar: 'شرق آسيا', en: 'East Asia', continent: 'asia' },
  'southeast-asia': { ar: 'جنوب شرق آسيا', en: 'Southeast Asia', continent: 'asia' },
  'central-asia': { ar: 'وسط آسيا', en: 'Central Asia', continent: 'asia' },
  'west-asia': { ar: 'غرب آسيا', en: 'West Asia', continent: 'asia' },
  'north-america': { ar: 'أمريكا الشمالية', en: 'North America', continent: 'north-america' },
  'central-america': { ar: 'أمريكا الوسطى', en: 'Central America', continent: 'north-america' },
  caribbean: { ar: 'الكاريبي', en: 'Caribbean', continent: 'north-america' },
  'south-america': { ar: 'أمريكا الجنوبية', en: 'South America', continent: 'south-america' },
  'west-europe': { ar: 'أوروبا الغربية', en: 'Western Europe', continent: 'europe' },
  'east-europe': { ar: 'أوروبا الشرقية', en: 'Eastern Europe', continent: 'europe' },
  'north-europe': { ar: 'أوروبا الشمالية', en: 'Northern Europe', continent: 'europe' },
  'south-europe': { ar: 'أوروبا الجنوبية', en: 'Southern Europe', continent: 'europe' },
  balkans: { ar: 'البلقان', en: 'Balkans', continent: 'europe' },
  oceania: { ar: 'أوقيانوسيا', en: 'Oceania', continent: 'oceania' },
  pacific: { ar: 'المحيط الهادئ', en: 'Pacific', continent: 'oceania' },
};

const NATO = ['al','be','bg','ca','hr','cz','dk','ee','fi','fr','de','gr','hu','is','it','lv','lt','lu','me','mk','nl','no','pl','pt','ro','sk','si','es','se','tr','gb','us'];
const EU = ['fr','de','it','es','pl','nl','be','se','fi','at','pt','ie','dk','sk','si','lv','lt','ee','cz','hu','ro','gr','hr','bg','lu','cy','mt'];
const AU = ['dz','ao','bj','bw','bf','bi','cm','cv','cf','td','km','cd','cg','dj','eg','gq','er','sz','et','ga','gm','gh','gn','gw','ci','ke','ls','lr','ly','mg','mw','ml','mr','mu','ma','mz','na','ne','ng','rw','st','sn','sc','sl','so','za','ss','sd','tz','tg','tn','ug','zm','zw'];
const GCC = ['bh','kw','qa','sa','ae','om'];
const BRICS = ['br','ru','in','cn','za','sa','ae','ir','eg','et','id'];
const SCO = ['cn','ru','kz','kg','tj','uz','ir','pk'];
const P5 = ['us','gb','fr','ru','cn'];
const QUAD = ['us','in','jp','au'];
const FVEY = ['us','gb','ca','au','nz'];
const AUKUS = ['us','gb','au'];
const ASEAN = ['sg','my','th','id','vn','ph','kh','la','mm','bn'];
const OPEC = ['dz','ng','sa','ae','iq','kw','qa','ly','om','ve','ec','ga','cg','gq','ir','cd'];
const SAARC = ['bd','bt','in','np','pk','sl','mv','af'];
const MAGHREB = ['dz','ma','tn','ly','mr'];
const ECOWAS = ['bj','bf','ci','gm','gn','gw','lr','ml','ne','sn','sl','tg'];
const CSTO = ['ru','by','kz','kg','tj','am','az'];
const OAS = ['us','ca','mx','br','ar','cl','co','pe','ve','ec','bo','py','uy','cu','do','gt','hn','ni','pa','sv','jm','tt'];
const ARAB_LEAGUE = ['dz','bh','dj','eg','iq','jo','kw','lb','ly','mr','ma','mu','om','ps','qa','sa','sd','sy','tn','ae','ye'];
const OIC = ['af','al','az','bd','bh','bi','bj','cf','ci','cm','dj','dz','eg','er','ga','gm','gn','gw','gy','id','iq','ir','jo','kg','kz','kw','lb','ly','ma','mg','ml','mr','mu','mv','mz','ne','ng','om','pk','ps','qa','sa','sd','sl','sn','so','sr','sy','td','tg','tj','tm','tr','tz','ug','uz','ye'];
const NUCLEAR = ['us','ru','gb','fr','cn','il','in','pk','kp'];
const G7 = ['us','ca','fr','de','it','jp','gb'];
const G20 = ['us','ca','fr','de','it','jp','gb','cn','in','br','ru','za','id','tr','sa','ae','mx','kr','au'];
const ACCORDS = ['il','ae','bh','ma','sd'];
const PIF = ['au','nz','fj','ki','mh','fm','nr','pw','pg','ws','sb','to','tv','vu'];
const CARICOM = ['ag','bs','bb','dm','do','gd','ht','jm','kn','lc','vc','tt'];
const MERCOSUR = ['ar','br','py','uy'];
const ANDEAN = ['co','pe','ec','bo','cl'];
const SADC = ['za','zw','zm','mw','ls','na','mz','sz','mg','cd','ag'];
const EAC = ['ke','tz','ug','rw','bi','ss','so','cd'];
const ECCAS = ['cm','cf','td','cg','gq','ga','st'];
const EU_NEIGHBOURS = ['ua','md','ge','am','az'];
const WESTERN_BALKANS = ['al','ba','xk','me','mk','rs','md'];

export const ALLIANCES = [
  { id: 'nato', ar: 'حلف شمال الأطلسي (الناتو)', en: 'North Atlantic Treaty Organization (NATO)', focusAr: 'دفاع جماعي أطلسي', focusEn: 'Collective Atlantic defence', members: NATO, tone: 'sky' },
  { id: 'eu', ar: 'الاتحاد الأوروبي', en: 'European Union', focusAr: 'تكامل اقتصادي وقانوني', focusEn: 'Economic & legal integration', members: EU, tone: 'indigo' },
  { id: 'brics', ar: 'تجمع بريكس', en: 'BRICS', focusAr: 'اقتصاد متعدد الأقطاب ونقد بديل', focusEn: 'Multipolar economy & alternatives', members: BRICS, tone: 'emerald' },
  { id: 'sco', ar: 'منظمة شانغهاي للتعاون', en: 'Shanghai Cooperation Organisation', focusAr: 'أمن إقليمي', focusEn: 'Regional security', members: SCO, tone: 'rose' },
  { id: 'au', ar: 'الاتحاد الأفريقي', en: 'African Union', focusAr: 'تعاون أفريقي', focusEn: 'African cooperation', members: AU, tone: 'amber' },
  { id: 'gcc', ar: 'مجلس التعاون الخليجي', en: 'Gulf Cooperation Council', focusAr: 'تنسيق خليجي', focusEn: 'Gulf coordination', members: GCC, tone: 'teal' },
  { id: 'unsc', ar: 'مجلس الأمن الدولي (دائم)', en: 'UN Security Council (permanent)', focusAr: 'أمن عالمي', focusEn: 'Global security', members: P5, tone: 'slate' },
  { id: 'quad', ar: 'الحوار الأمني الرباعي', en: 'Quad Security Dialogue', focusAr: 'محيط هادئ', focusEn: 'Indo-Pacific', members: QUAD, tone: 'cyan' },
  { id: 'fvey', ar: 'الخمس عيون', en: 'Five Eyes', focusAr: 'استخبارات وتحالف أمني', focusEn: 'Intelligence & security', members: FVEY, tone: 'violet' },
  { id: 'aukus', ar: 'أوكوس', en: 'AUKUS', focusAr: 'قدرات دفاعية', focusEn: 'Defence capabilities', members: AUKUS, tone: 'orange' },
  { id: 'asean', ar: 'آسيان', en: 'ASEAN', focusAr: 'تعاون إقليمي آسيوي', focusEn: 'Regional cooperation', members: ASEAN, tone: 'lime' },
  { id: 'opec', ar: 'أوبك', en: 'OPEC', focusAr: 'طاقة وأسعار النفط', focusEn: 'Energy & oil prices', members: OPEC, tone: 'yellow' },
  { id: 'saarc', ar: 'ساارك', en: 'SAARC', focusAr: 'تعاون جنوب آسيا', focusEn: 'South Asian cooperation', members: SAARC, tone: 'pink' },
  { id: 'maghreb', ar: 'اتحاد المغرب العربي', en: 'Maghreb Union', focusAr: 'تعاون مغاربي', focusEn: 'Maghreb cooperation', members: MAGHREB, tone: 'stone' },
  { id: 'ecowas', ar: 'إيكواس', en: 'ECOWAS', focusAr: 'تكامل غرب أفريقيا', focusEn: 'West African integration', members: ECOWAS, tone: 'fuchsia' },
  { id: 'csto', ar: 'منظمة معاهدة الأمن الجماعي', en: 'Collective Security Treaty Organization', focusAr: 'دفاع جماعي Eurasian', focusEn: 'Eurasian collective defence', members: CSTO, tone: 'red' },
  { id: 'oas', ar: 'منظمة الدول الأمريكية', en: 'Organization of American States', focusAr: 'أمريكتان', focusEn: 'Americas', members: OAS, tone: 'blue' },
  { id: 'arab-league', ar: 'جامعة الدول العربية', en: 'Arab League', focusAr: 'تنسيق عربي', focusEn: 'Arab coordination', members: ARAB_LEAGUE, tone: 'green' },
  { id: 'oic', ar: 'منظمة التعاون الإسلامي', en: 'Organisation of Islamic Cooperation', focusAr: 'تعاون إسلامي', focusEn: 'Islamic cooperation', members: OIC, tone: 'teal' },
  { id: 'nuclear', ar: 'الدول الذرية', en: 'Nuclear-armed states', focusAr: 'ردع نووي', focusEn: 'Nuclear deterrence', members: NUCLEAR, tone: 'orange' },
  { id: 'g7', ar: 'مجموعة السبع', en: 'G7', focusAr: 'اقتصاد متقدم', focusEn: 'Advanced economies', members: G7, tone: 'lime' },
  { id: 'g20', ar: 'مجموعة العشرين', en: 'G20', focusAr: 'حوكمة اقتصادية عالمية', focusEn: 'Global economic governance', members: G20, tone: 'pink' },
  { id: 'accords', ar: 'اتفاقيات أبراهام', en: 'Abraham Accords', focusAr: 'تطبيع دبلوماسي', focusEn: 'Diplomatic normalisation', members: ACCORDS, tone: 'violet' },
  { id: 'pif', ar: 'منتدى جزر المحيط الهادئ', en: 'Pacific Islands Forum', focusAr: 'أمن بحري في الهادئ', focusEn: 'Maritime security in the Pacific', members: PIF, tone: 'cyan' },
  { id: 'caricom', ar: 'الكاريبي (CARICOM)', en: 'Caribbean Community', focusAr: 'تعاون كاريبي', focusEn: 'Caribbean cooperation', members: CARICOM, tone: 'amber' },
  { id: 'mercosur', ar: 'السوق المشتركة لدول Mercosur', en: 'Mercosur', focusAr: 'اقتصاد أمريكا الجنوبية', focusEn: 'South American economy', members: MERCOSUR, tone: 'emerald' },
  { id: 'andean', ar: 'المجموعة الأنديية وتحالف الهادئ', en: 'Andean Community / Pacific Alliance', focusAr: 'تجارة الأنديين', focusEn: 'Andean trade', members: ANDEAN, tone: 'sky' },
  { id: 'sadc', ar: 'المجموعة الاقتصادية لجنوب أفريقيا (SADC)', en: 'Southern African Development Community', focusAr: 'تجمع جنوب أفريقيا', focusEn: 'Southern Africa bloc', members: SADC, tone: 'red' },
  { id: 'eac', ar: 'مجتمع شرق أفريقيا', en: 'East African Community', focusAr: 'تجمع شرق أفريقيا', focusEn: 'East Africa bloc', members: EAC, tone: 'indigo' },
  { id: 'eccas', ar: 'المجمع الاقتصادي لوسط أفريقيا', en: 'Economic Community of Central Africa', focusAr: 'وسط أفريقيا', focusEn: 'Central Africa', members: ECCAS, tone: 'stone' },
  { id: 'eu-neighbours', ar: 'الشراكة الشرقية', en: 'Eastern Partnership', focusAr: 'جوار الاتحاد الأوروبي', focusEn: 'EU neighbourhood', members: EU_NEIGHBOURS, tone: 'blue' },
  { id: 'western-balkans', ar: 'البلقان الغربية', en: 'Western Balkans', focusAr: 'مسار الانضمام للاتحاد الأوروبي', focusEn: 'EU accession track', members: WESTERN_BALKANS, tone: 'fuchsia' },
];

/** فهرس عكسي: الدولة → قائمة التحالفات */
const ALLIANCE_INDEX = ALLIANCES.reduce((acc, a) => {
  acc[a.id] = new Set(a.members);
  return acc;
}, {});

export function alliancesOf(id) {
  return ALLIANCES.filter((a) => ALLIANCE_INDEX[a.id].has(id));
}

/** أولوية القارة — بعض الدول القارية تُعاد تصنيفها */
const CONTINENT_OVERRIDE = { ru: 'europe', tr: 'asia', cy: 'asia', ge: 'asia', am: 'asia', az: 'asia' };

export function buildCountry(row, continentDefault) {
  const [id, flag, arName, enName, arCap, enCap, lat, lng, region, leader, titleKey, budget, regime, pop] = row;
  const regionMeta = REGIONS[region] ?? REGIONS['middle-east'];
  const continent = CONTINENT_OVERRIDE[id] ?? continentDefault ?? regionMeta.continent;

  return {
    id,
    flag,
    name: { ar: arName, en: enName },
    capital: { ar: arCap, en: enCap },
    coordinates: [lat, lng],
    region,
    continent,
    leader: { ar: LEADERS_AR[id] ?? leader, en: leader },
    titleKey,
    regime,
    militaryBudgetBn: budget,
    populationM: pop,
    allianceIds: ALLIANCES.filter((a) => ALLIANCE_INDEX[a.id].has(id)).map((a) => a.id),
  };
}
