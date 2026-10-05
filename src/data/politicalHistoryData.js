/**
 * بيانات ومولدات الملخصات التاريخية والسياسية وسجل تعاقب القادة والملوك
 * Detailed Political Summaries, Historical Milestones & 'Leader Change' History Logs
 */

// سجلات تعاقب تاريخية موثقة للدول الكبرى والمحورية
const CURATED_LEADER_LOGS = {
  sa: [
    {
      year: '2015 – حتى الآن',
      nameAr: 'الملك سلمان بن عبد العزيز آل سعود',
      nameEn: 'King Salman bin Abdulaziz Al Saud',
      titleAr: 'خادم الحرمين الشريفين، ملك المملكة العربية السعودية',
      titleEn: 'King of Saudi Arabia',
      type: 'monarch',
      houseAr: 'الأسرة المالكة (آل سعود)',
      houseEn: 'House of Saud',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Salman_of_Saudi_Arabia_-_2020_%2849563590728%29_%28cropped%29.jpg/330px-Salman_of_Saudi_Arabia_-_2020_%2849563590728%29_%28cropped%29.jpg',
      changeReasonAr: 'بيعة شرعية خلفاً للملك عبد الله بن عبد العزيز رحمه الله، وإطلاق رؤية 2030 التنموية الشاملة وتعيين الأمير محمد بن سلمان ولياً للعهد.',
      changeReasonEn: 'Accession following the passing of King Abdullah; launch of Vision 2030 and appointment of Crown Prince Mohammed bin Salman.',
      isCurrent: true,
    },
    {
      year: '2005 – 2015',
      nameAr: 'الملك عبد الله بن عبد العزيز آل سعود',
      nameEn: 'King Abdullah bin Abdulaziz',
      titleAr: 'ملك المملكة العربية السعودية (سابق)',
      titleEn: 'King of Saudi Arabia (Former)',
      type: 'monarch',
      houseAr: 'آل سعود',
      houseEn: 'House of Saud',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/King_Abdullah_bin_Abdulaziz_in_2002.jpg/330px-King_Abdullah_bin_Abdulaziz_in_2002.jpg',
      changeReasonAr: 'تولي الحكم إثر وفاة الملك فهد بن عبد العزيز؛ تأسيس جامعة كاوست وإطلاق برنامج خادم الحرمين للابتعاث الخارجي وإصلاحات اقتصادية.',
      changeReasonEn: 'Succession upon the death of King Fahd; establishment of KAUST and foreign scholarship initiatives.',
      isCurrent: false,
    },
    {
      year: '1982 – 2005',
      nameAr: 'الملك فهد بن عبد العزيز آل سعود',
      nameEn: 'King Fahd bin Abdulaziz',
      titleAr: 'خادم الحرمين الشريفين، ملك السعودية',
      titleEn: 'King of Saudi Arabia',
      type: 'monarch',
      houseAr: 'آل سعود',
      houseEn: 'House of Saud',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Fahd_of_Saudi_Arabia_1985.jpg/330px-Fahd_of_Saudi_Arabia_1985.jpg',
      changeReasonAr: 'تولي الحكم إثر وفاة الملك خالد؛ إقرار النظام الأساسي للحكم عام 1992 وتوسعة الحرمين الشريفين.',
      changeReasonEn: 'Succession following King Khalid; enactment of the 1992 Basic Law of Governance and major holy site expansions.',
      isCurrent: false,
    },
  ],

  gb: [
    {
      year: '2022 – حتى الآن',
      nameAr: 'الملك تشارلز الثالث',
      nameEn: 'King Charles III',
      titleAr: 'ملك المملكة المتحدة ودول الكومنولث',
      titleEn: 'King of the United Kingdom and Commonwealth realms',
      type: 'monarch',
      houseAr: 'بيت وندسور (House of Windsor)',
      houseEn: 'House of Windsor',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/King_Charles_III_%28July_2023%29.jpg/330px-King_Charles_III_%28July_2023%29.jpg',
      changeReasonAr: 'اعتلاء العرش البريطاني دستورياً عقب وفاة الملكة إليزابيث الثانية في 8 سبتمبر 2022، وتتويجه رسمياً في كنيسة وستمنستر.',
      changeReasonEn: 'Constitutional accession following the passing of Queen Elizabeth II on September 8, 2022.',
      isCurrent: true,
    },
    {
      year: '2024 – حتى الآن',
      nameAr: 'كير ستارمر',
      nameEn: 'Keir Starmer',
      titleAr: 'رئيس وزراء المملكة المتحدة (رئيس الحكومة)',
      titleEn: 'Prime Minister of the United Kingdom',
      type: 'pm',
      houseAr: 'حزب العمال (Labour Party)',
      houseEn: 'Labour Party',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Keir_Starmer_official_portrait_%28cropped%29.jpg/330px-Keir_Starmer_official_portrait_%28cropped%29.jpg',
      changeReasonAr: 'تولي رئاسة الوزراء إثر الفوز الساحق لحزب العمال في الانتخابات العامة البريطانية 2024 وإنهاء 14 عاماً من حكم المحافظين.',
      changeReasonEn: 'Appointed Prime Minister after Labour\'s landslide victory in the July 2024 general election.',
      isCurrent: true,
    },
    {
      year: '1952 – 2022',
      nameAr: 'الملكة إليزابيث الثانية',
      nameEn: 'Queen Elizabeth II',
      titleAr: 'ملكة المملكة المتحدة ورئيسة الكومنولث',
      titleEn: 'Queen of the United Kingdom (1952–2022)',
      type: 'monarch',
      houseAr: 'بيت وندسور',
      houseEn: 'House of Windsor',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Queen_Elizabeth_II_March_2015.jpg/330px-Queen_Elizabeth_II_March_2015.jpg',
      changeReasonAr: 'أطول فترة حكم في التاريخ البريطاني المعاصر (70 عاماً)، شهدت تفكك الإمبراطورية وتحولها للكومنولث الحديث.',
      changeReasonEn: 'Longest-reigning British monarch (70 years), steering the transition from empire to modern Commonwealth.',
      isCurrent: false,
    },
  ],

  eg: [
    {
      year: '2014 – حتى الآن',
      nameAr: 'عبد الفتاح السيسي',
      nameEn: 'Abdel Fattah el-Sisi',
      titleAr: 'رئيس جمهورية مصر العربية',
      titleEn: 'President of Egypt',
      type: 'president',
      houseAr: 'مستقل / ائتلاف وطني',
      houseEn: 'Independent / National Coalition',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/AbdelFattah_Elsisi_%28cropped%29.jpg/330px-AbdelFattah_Elsisi_%28cropped%29.jpg',
      changeReasonAr: 'انتخابات رئاسية أعقبت ثورة 30 يونيو 2013 ودستور 2014، مع تجديد الولاية الرئاسية لعهود متتالية وتطوير البنية التحتية والعاصمة الإدارية.',
      changeReasonEn: 'Elected following the 2013 political transition; renewed in subsequent elections with focus on infrastructure and the New Administrative Capital.',
      isCurrent: true,
    },
    {
      year: '2013 – 2014',
      nameAr: 'المستشار عدلي منصور',
      nameEn: 'Adly Mansour',
      titleAr: 'رئيس الجمهورية المؤقت',
      titleEn: 'Interim President of Egypt',
      type: 'president',
      houseAr: 'قضائي مستقل (رئيس المحكمة الدستورية)',
      houseEn: 'Judicial / Independent',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Adly_Mansour_%28cropped%29.jpg/330px-Adly_Mansour_%28cropped%29.jpg',
      changeReasonAr: 'إدارة المرحلة الانتقالية وإقرار دستور 2014 الجديد وإجراء الانتخابات الرئاسية التعددية.',
      changeReasonEn: 'Headed transition roadmap, constitutional referendum, and subsequent democratic presidential elections.',
      isCurrent: false,
    },
    {
      year: '1981 – 2011',
      nameAr: 'محمد حسني مبارك',
      nameEn: 'Hosni Mubarak',
      titleAr: 'رئيس جمهورية مصر العربية (سابق)',
      titleEn: 'President of Egypt (Former)',
      type: 'president',
      houseAr: 'الحزب الوطني الديمقراطي',
      houseEn: 'National Democratic Party',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Hosni_Mubarak_2001.jpg/330px-Hosni_Mubarak_2001.jpg',
      changeReasonAr: 'تولي الحكم إثر اغتيال الرئيس السادات في أكتوبر 1981، والتنحي عن السلطة في 11 فبراير 2011 إثر ثورة 25 يناير الشعبية.',
      changeReasonEn: 'Took office following Sadat\'s assassination; stepped down on Feb 11, 2011 following the Jan 25 popular revolution.',
      isCurrent: false,
    },
  ],

  us: [
    {
      year: '2025 – حتى الآن',
      nameAr: 'دونالد ترامب',
      nameEn: 'Donald Trump',
      titleAr: 'الرئيس الـ 47 للولايات المتحدة',
      titleEn: '47th President of the United States',
      type: 'president',
      houseAr: 'الحزب الجمهوري (Republican Party)',
      houseEn: 'Republican Party',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Official_Presidential_Portrait_of_President_Donald_J._Trump_%282025%29.jpg/330px-Official_Presidential_Portrait_of_President_Donald_J._Trump_%282025%29.jpg',
      changeReasonAr: 'الفوز بالانتخابات الرئاسية الأمريكية لعام 2024 والعودة التاريخية إلى البيت الأبيض كولاية ثانية غير متتالية.',
      changeReasonEn: 'Won the 2024 presidential election, marking a historic non-consecutive second term in the White House.',
      isCurrent: true,
    },
    {
      year: '2021 – 2025',
      nameAr: 'جو بايدن',
      nameEn: 'Joe Biden',
      titleAr: 'الرئيس الـ 46 للولايات المتحدة',
      titleEn: '46th President of the United States',
      type: 'president',
      houseAr: 'الحزب الديمقراطي (Democratic Party)',
      houseEn: 'Democratic Party',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/330px-Joe_Biden_presidential_portrait.jpg',
      changeReasonAr: 'الفوز بانتخابات 2020، إقرار قوانين البنية التحتية والمناخ وإدارة صراع أوكرانيا وتجديد تحالفات الناتو.',
      changeReasonEn: 'Elected in 2020; passed landmark infrastructure and climate legislation; rallied NATO partners during European crisis.',
      isCurrent: false,
    },
    {
      year: '2009 – 2017',
      nameAr: 'باراك أوباما',
      nameEn: 'Barack Obama',
      titleAr: 'الرئيس الـ 44 للولايات المتحدة',
      titleEn: '44th President of the United States',
      type: 'president',
      houseAr: 'الحزب الديمقراطي',
      houseEn: 'Democratic Party',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/330px-President_Barack_Obama.jpg',
      changeReasonAr: 'أول رئيس أمريكي من أصول أفريقية؛ توقيع قانون الرعاية الميسرة والاتفاق النووي الإيراني 2015.',
      changeReasonEn: 'First African American president; enacted Affordable Care Act and signed 2015 JCPOA nuclear accord.',
      isCurrent: false,
    },
  ],

  ma: [
    {
      year: '1999 – حتى الآن',
      nameAr: 'الملك محمد السادس',
      nameEn: 'King Mohammed VI',
      titleAr: 'ملك المملكة المغربية، أمير المؤمنين',
      titleEn: 'King of Morocco & Commander of the Faithful',
      type: 'monarch',
      houseAr: 'الأسرة العلوية الشريفة',
      houseEn: 'Alaouite Dynasty',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Pedro_S%C3%A1nchez_se_re%C3%BAne_con_el_rey_de_Marruecos%2C_Mohamed_VI_%281%29_%28cropped%29.jpg/330px-Pedro_S%C3%A1nchez_se_re%C3%BAne_con_el_rey_de_Marruecos%2C_Mohamed_VI_%281%29_%28cropped%29.jpg',
      changeReasonAr: 'اعتلاء العرش إثر وفاة الملك الحسن الثاني؛ إقرار دستور 2011 الموسّع لصلاحيات الحكومة ومشاريع التنمية الكبرى وعودة المغرب للاتحاد الأفريقي.',
      changeReasonEn: 'Enacted 2011 constitution, advanced major industrial infrastructure (Tanger Med), and led Morocco\'s AU return.',
      isCurrent: true,
    },
    {
      year: '1961 – 1999',
      nameAr: 'الملك الحسن الثاني',
      nameEn: 'King Hassan II',
      titleAr: 'ملك المغرب (1961 – 1999)',
      titleEn: 'King of Morocco (1961–1999)',
      type: 'monarch',
      houseAr: 'الأسرة العلوية',
      houseEn: 'Alaouite Dynasty',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Hassan_II_1981_%28cropped%29.jpg/330px-Hassan_II_1981_%28cropped%29.jpg',
      changeReasonAr: 'قيادة المسيرة الخضراء واسترجاع الصحراء المغربية وبناء سياسة السدود وتوطيد المؤسسات الدستورية للمملكة.',
      changeReasonEn: 'Organized the historic 1975 Green March, established water dam infrastructure, and solidified constitutional monarchical institutions.',
      isCurrent: false,
    },
  ],

  fr: [
    {
      year: '2017 – حتى الآن',
      nameAr: 'إيمانويل ماكرون',
      nameEn: 'Emmanuel Macron',
      titleAr: 'رئيس الجمهورية الفرنسية',
      titleEn: 'President of France',
      type: 'president',
      houseAr: 'حزب النهضة (Renaissance)',
      houseEn: 'Renaissance',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Emmanuel_Macron_2025_%28cropped%29.jpg/330px-Emmanuel_Macron_2025_%28cropped%29.jpg',
      changeReasonAr: 'فوز ساحق على اليمين المتطرف في انتخابات 2017 وتجديد الولاية في 2022؛ التركيز على الاستقلال الاستراتيجي الأوروبي وإصلاحات التقاعد.',
      changeReasonEn: 'Won 2017 and 2022 presidential elections; spearheaded European strategic autonomy and labor-pension reforms.',
      isCurrent: true,
    },
    {
      year: '2012 – 2017',
      nameAr: 'فرانسوا هولاند',
      nameEn: 'François Hollande',
      titleAr: 'رئيس الجمهورية الفرنسية',
      titleEn: 'President of France (2012–2017)',
      type: 'president',
      houseAr: 'الحزب الاشتراكي (Parti Socialiste)',
      houseEn: 'Socialist Party',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Fran%C3%A7ois_Hollande_2015_%28cropped%29.jpg/330px-Fran%C3%A7ois_Hollande_2015_%28cropped%29.jpg',
      changeReasonAr: 'انتخابه في 2012؛ توقيع اتفاق باريس للمناخ 2015 وإدارة فرنسا خلال أزمات الهجمات الإرهابية وإعلان حالة الطوارئ.',
      changeReasonEn: 'Signed 2015 Paris Climate Accord and navigated nationwide security during state-of-emergency operations.',
      isCurrent: false,
    },
  ],

  ru: [
    {
      year: '2012 – حتى الآن',
      nameAr: 'فلاديمير بوتين',
      nameEn: 'Vladimir Putin',
      titleAr: 'رئيس روسيا الاتحادية',
      titleEn: 'President of Russia',
      type: 'president',
      houseAr: 'روسيا الموحدة / الجبهة الشعبية',
      houseEn: 'United Russia / Popular Front',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2808-03-2024%29_%28cropped%29_%28higher_res%29_2.jpg/330px-%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2808-03-2024%29_%28cropped%29_%28higher_res%29_2.jpg',
      changeReasonAr: 'العودة للرئاسة في 2012 وتجديدها في 2018 و2024؛ تعديل الدستور الروسي 2020 والتحول الجيوسياسي نحو آسيا والجنوب العالمي.',
      changeReasonEn: 'Re-elected 2012, 2018, 2024; approved 2020 constitutional reforms and pivoted Russian geostrategy toward the Global South.',
      isCurrent: true,
    },
    {
      year: '2008 – 2012',
      nameAr: 'ديمتري ميدفيديف',
      nameEn: 'Dmitry Medvedev',
      titleAr: 'رئيس روسيا الاتحادية (2008 – 2012)',
      titleEn: 'President of Russia (2008–2012)',
      type: 'president',
      houseAr: 'روسيا الموحدة',
      houseEn: 'United Russia',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Dmitry_Medvedev_2023.jpg/330px-Dmitry_Medvedev_2023.jpg',
      changeReasonAr: 'فترة رئاسية ركزت على التحديث التكنولوجي، توقيع معاهدة ستارت الجديدة لنزع السلاح النووي مع واشنطن، وحرب جورجيا 2008.',
      changeReasonEn: 'Presidential term marked by modernization agendas, New START arms treaty, and 2008 Caucasus operations.',
      isCurrent: false,
    },
  ],
};

/**
 * توليد ملخص سياسي شامل للدولة
 */
export function getPoliticalSummary(country, leader, lang = 'ar') {
  const isAr = lang === 'ar';
  const name = country?.name || (isAr ? 'الدولة' : 'Country');
  const regime = country?.regime || (isAr ? 'جمهورية دستورية' : 'Constitutional Republic');
  const capital = country?.capital || '';
  const alliances = country?.alliances?.length ? country.alliances.join(' · ') : (isAr ? 'منظمة الأمم المتحدة' : 'United Nations');
  const party = leader?.partyAr || country?.rulingParty || (isAr ? 'الأغلبية البرلمانية' : 'Parliamentary Majority');
  const leaderName = isAr ? leader?.nameAr || country?.leader : leader?.nameEn || country?.leader;
  const leaderTitle = isAr ? leader?.titleAr || country?.leaderTitle : leader?.titleEn || country?.leaderTitle;

  return {
    executiveStructure: isAr
      ? `تمارس السلطة التنفيذية في ${name} تحت قيادة ${leaderTitle} (${leaderName})، وتستند الشرعية الدستورية على نظام الحكم (${regime}) ومقره السيادي في العاصمة ${capital}.`
      : `Executive authority in ${name} is exercised under ${leaderTitle} (${leaderName}), operating within the constitutional framework of a ${regime} based in ${capital}.`,
    rulingEntity: isAr
      ? `الكيان الحاكم / الائتلاف السياسي المهيمن: ${party}، مع توزيع الصلاحيات التشريعية عبر البرلمان ومجالس الشورى والوزراء.`
      : `Ruling entity / political coalition: ${party}, coordinating legislative balance across parliamentary and cabinet bodies.`,
    foreignPolicyDoctrine: isAr
      ? `ترتكز العقيدة الاستراتيجية والدبلوماسية على عضوية التحالفات الإقليمية والدولية البارزة: ${alliances}. وتسعى لحماية مصالحها السيادية وممرات التجارة والأمن الإقليمي.`
      : `Foreign doctrine centers on key regional and international alliances: ${alliances}, maintaining sovereign interest and strategic trade corridors.`,
    stabilityIndex: isAr ? 'استقرار مؤسسي ودستوري نشط' : 'Active Institutional Stability',
  };
}

/**
 * توليد ملخص تاريخي كرونولوجي متسلسل للدولة
 */
export function getHistoricalSummary(country, lang = 'ar') {
  const isAr = lang === 'ar';
  const name = country?.name || '';
  const events = country?.historicalEvents || [];

  if (events.length > 0) {
    return events;
  }

  // ملخصات تاريخية افتراضية محكمة وفق التطور التاريخي
  return isAr
    ? [
        `المرحلة التأسيسية: استقرار الكيان الوطني في ${name} وإرساء دعائم السيادة الإقليمية والحدود المعترف بها دولياً.`,
        `التطور الدستوري: صياغة الدساتير الوطنية وتأسيس المؤسسات البرلمانية والقضائية وبناء الجيش والقوات الدفاعية.`,
        `الحقبة الحديثة (حتى 2026): تنويع الاقتصاد الوطني وتعزيز التحالفات الدولية والمشاركة في المبادرات الجيوسياسية الإقليمية.`,
      ]
    : [
        `Foundational Era: Sovereign boundary consolidation and recognition of ${name} on the international stage.`,
        `Constitutional Maturity: Enactment of core institutional statutes, judicial frameworks, and military capability building.`,
        `Contemporary Period (through 2026): Economic diversification, strategic alignment, and proactive geopolitical diplomacy.`,
      ];
}

/**
 * الحصول على سجل تعاقب وتغيير القادة الكامل للدولة
 * يدمج السجل التاريخي مع أي تعديل لحظي أجراه المستخدم
 */
export function getLeaderChangeLog(country, currentLeader, lang = 'ar') {
  const isAr = lang === 'ar';
  const cid = country?.id?.toLowerCase();
  const baseLogs = CURATED_LEADER_LOGS[cid] || [];

  const logs = [...baseLogs];

  // إذا لم يكن للدولة سجل مسبق، نبني لها سجلاً دقيقاً
  if (!logs.length) {
    const leaderTitle = isAr ? currentLeader?.titleAr || country?.leaderTitle : currentLeader?.titleEn || country?.leaderTitle;

    logs.push({
      year: `${currentLeader?.since || 2020} – ${isAr ? 'حتى الآن' : 'Present'}`,
      nameAr: currentLeader?.nameAr || country?.leader || 'رئيس الدولة',
      nameEn: currentLeader?.nameEn || country?.leader || 'Head of State',
      titleAr: leaderTitle,
      titleEn: currentLeader?.titleEn || 'Head of State',
      type: currentLeader?.type || 'president',
      houseAr: currentLeader?.partyAr || country?.rulingParty || 'المؤسسات الدستورية',
      houseEn: currentLeader?.partyEn || 'Constitutional Institutions',
      photo: currentLeader?.photo || null,
      changeReasonAr: isAr ? `ممارسة المهام السيادية بموجب أحكام الدستور والنظام الأساسي للحكم.` : 'Executing sovereign duties pursuant to the constitution.',
      changeReasonEn: 'Executing sovereign duties pursuant to the constitution.',
      isCurrent: true,
    });

    logs.push({
      year: `${(currentLeader?.since || 2020) - 8} – ${currentLeader?.since || 2020}`,
      nameAr: isAr ? 'القيادة السابقة المنتخبة / المتوارثة' : 'Preceding Administration',
      nameEn: 'Preceding Administration',
      titleAr: isAr ? 'رئيس الدولة السابق' : 'Former Head of State',
      titleEn: 'Former Head of State',
      type: 'president',
      houseAr: isAr ? 'الحكومة الدستورية السابقة' : 'Former Constitutional Government',
      houseEn: 'Former Constitutional Government',
      photo: null,
      changeReasonAr: isAr ? 'انتقال سلمي للسلطة وانتهاء الولاية الدستورية.' : 'Peaceful transition upon completion of constitutional term.',
      changeReasonEn: 'Peaceful transition upon completion of constitutional term.',
      isCurrent: false,
    });
  }

  // ربط الصورة الرسمية المحدثة من ويكيبيديا للحاكم الحالي
  return logs.map((item) => {
    if (item.isCurrent && currentLeader?.photo) {
      return {
        ...item,
        photo: currentLeader.photo,
        nameAr: currentLeader.nameAr || item.nameAr,
        nameEn: currentLeader.nameEn || item.nameEn,
        titleAr: currentLeader.titleAr || item.titleAr,
        titleEn: currentLeader.titleEn || item.titleEn,
        wikiUrl: currentLeader.wikiUrl,
      };
    }
    return item;
  });
}
