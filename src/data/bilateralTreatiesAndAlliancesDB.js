/**
 * قاعدة البيانات الشاملة للتحالفات الثنائية والمعاهدات الدفاعية وبنودها الاستراتيجية بين الدول
 * Comprehensive Bilateral Treaties, Defense Pacts, Strategic Clauses & Articles Matrix
 * 
 * تجيب بدقة تفصيلية استخباراتية على:
 * 1. ما غاية هذه التحالفات الجيوسياسية والعسكرية؟ (Strategic Purpose & Geopolitical Aims)
 * 2. ما هي البنود والمواد الرسمية والسرية والتزامات الدفاع المشترك؟ (Key Articles, Defense Clauses & Legal Pacts)
 * 3. ما هي منظومات التسليح والقواعد المشتركة؟ (Shared Arsenal, Interoperability & Bases)
 */

export const BILATERAL_TREATIES_DB = [
  // 1. الولايات المتحدة - إسرائيل
  {
    id: 'us_il_strategic_mou',
    titleAr: 'مذكرة التفاهم الاستراتيجية الأمريكية الإسرائيلية ومظلة التفوق النوعي (QME)',
    titleEn: 'US-Israel Strategic MoU & Qualitative Military Edge (QME) Framework',
    country1: { id: 'us', nameAr: 'الولايات المتحدة', nameEn: 'United States', flag: '🇺🇸' },
    country2: { id: 'il', nameAr: 'إسرائيل', nameEn: 'Israel', flag: '🇮🇱' },
    signedYear: 1981,
    upgradedYear: 2016,
    status: 'active_binding',
    commitmentLevelAr: 'شراكة عسكرية استراتيجية وتفوق نوعي مضمون بقانون الكونغرس',
    commitmentLevelEn: 'Strategic Military Assistance & Statutory QME Guarantee',
    strategicPurposeAr: 'ضمان التفوق العسكري النوعي (QME) لإسرائيل على أي تحالف إقليمي معادٍ، وتأمين حماية المنظومات الصاروخية والدفاع الجوي المشترك في الشرق الأوسط، والتعاون الاستخباري والسيبراني العميق ضد التهديدات الإيرانية ومحور المقاومة.',
    strategicPurposeEn: 'Guarantee Israel’s Qualitative Military Edge (QME) over any regional adversary, co-develop multi-tier missile defenses, and secure deep cyber-intelligence alignment against regional adversaries.',
    keyClauses: [
      {
        articleNumber: 'المادة 1',
        titleAr: 'التمويل العسكري الأجنبي الإلزامي (FMF)',
        titleEn: 'Statutory Foreign Military Financing (FMF)',
        clauseTextAr: 'تلتزم واشنطن بتقديم حزمة مساعدات عسكرية بقيمة 38 مليار دولار (3.8 مليار سنوياً تشمل 500 مليون دولار لبرامج الدفاع الصاروخي) للفترة 2019-2028 دون شروط سياسية مسبقة.',
        clauseTextEn: 'Guarantees $38 billion in military aid across 2019-2028, with $500M annually dedicated to missile defense.',
        significanceAr: 'توفير التمويل المستدام لشراء مقاتلات F-35 وصواريخ القبة الحديدية ومقلاع داوود وأرو 3.',
      },
      {
        articleNumber: 'المادة 2',
        titleAr: 'ميثاق التفوق العسكري النوعي (QME Statutory Requirement)',
        titleEn: 'Qualitative Military Edge Guarantee',
        clauseTextAr: 'ملزم بقانون أقره الكونغرس الأمريكي لعام 2008 يقضي بتقييم أي مبيعات سلاح أمريكية لأي دولة في الشرق الأوسط للتأكد من عدم إخلالها بقدرة إسرائيل على هزيمة أي تهديد تقليدي منفرد أو جماعي.',
        clauseTextEn: 'US legally bound to assess all regional arms sales ensuring Israel retains military superiority.',
        significanceAr: 'منع تزويد دول الجوار بأنظمة تسليح تكافئ أو تتفوق على التكنولوجيا الممنوحة للجيش الإسرائيلي.',
      },
      {
        articleNumber: 'المادة 3',
        titleAr: 'التنسيق الاستخباري ومستودعات الطوارئ الأمريكية (WRSA-I)',
        titleEn: 'Intelligence Sharing & US War Reserve Stockpile in Israel',
        clauseTextAr: 'الوصول المباشر إلى مخازن الذخيرة الاستراتيجية للجيش الأمريكي المتمركزة داخل إسرائيل في حالات الطوارئ والحروب الكبرى، مع تبادل فوري لإشارات الأقمار الصناعية ورمز التشفير.',
        clauseTextEn: 'Direct access to US pre-positioned munitions stockpiles (WRSA-I) during wartime, coupled with real-time satellite telemetry sharing.',
        significanceAr: 'سد النقص الحاد في القذائف الموجهة والذخائر الاستراتيجية فور اندلاع أي صراع إقليمي شامل.',
      },
      {
        articleNumber: 'المادة 4',
        titleAr: 'التطوير التكنولوجي المشترك للدرع الصاروخي والسيبراني',
        titleEn: 'Co-development of Missile Defense & Cyber Warfare',
        clauseTextAr: 'الإنتاج المشترك لمنظومات حيتس (Arrow 3) ومقلاع داوود ونظام الليزر الدفاعي (Iron Beam) وتقاسم براءات الاختراع بين البنتاغون ووزارة الدفاع الإسرائيلية.',
        clauseTextEn: 'Joint manufacturing and patent sharing for Arrow-3, David’s Sling, and Iron Beam laser defense.',
        significanceAr: 'بناء درع صاروخي باليستي متعدد الطبقات متوافق مع منظومات القيادة والسيطرة لحلف الناتو وسنتكوم.',
      },
    ],
    sharedArsenal: ['F-35 Adir', 'Iron Dome', 'David’s Sling', 'Arrow-3', 'JDAM Bombs', 'AN/TPY-2 Radar'],
    sharedBasesAr: 'منشأة رادار ديمونا (Site 512)، مستودعات الطوارئ WRSA-I، ومكتب التنسيق المشترك في تل أبيب',
    coordinates1: [38.8951, -77.0364], // Washington
    coordinates2: [31.7683, 35.2137], // Jerusalem
  },

  // 2. روسيا - كوريا الشمالية
  {
    id: 'ru_kp_strategic_partnership_2024',
    titleAr: 'معاهدة الشراكة الاستراتيجية الشاملة والمساعدة العسكرية المتبادلة بين روسيا وكوريا الشمالية',
    titleEn: 'Russia-North Korea Comprehensive Strategic Partnership Treaty (Mutual Military Defense)',
    country1: { id: 'ru', nameAr: 'روسيا الاتحادية', nameEn: 'Russia', flag: '🇷🇺' },
    country2: { id: 'kp', nameAr: 'كوريا الشمالية', nameEn: 'North Korea', flag: '🇰🇵' },
    signedYear: 2024,
    ratifiedYear: 2024,
    status: 'ratified_active',
    commitmentLevelAr: 'معاهدة دفاع عسكري مشترك ملزمة قانونياً (المادة 4)',
    commitmentLevelEn: 'Legally Binding Mutual Military Defense Treaty (Article 4)',
    strategicPurposeAr: 'تأسيس حلف دفاعي عسكري متبادل يكسر العزلة الدولية المفروضة على بيونغ يانغ، ويوفر للجيش الروسي إمدادات ضخمة من الذخائر والصواريخ والكوادر العسكرية في حربه مع أوكرانيا، مقابل نقل تكنولوجيا الصواريخ الفضائية، الغواصات النووية، وأنظمة الدفاع الجوي المتقدمة لكوريا الشمالية.',
    strategicPurposeEn: 'Establish a mutual defense alliance providing Russian armed forces with artillery shells and missile stocks, while transferring Russian space, nuclear submarine and air defense technology to Pyongyang.',
    keyClauses: [
      {
        articleNumber: 'المادة 4 (بند الدفاع المشترك)',
        titleAr: 'تقديم المساعدة العسكرية الفورية بكافة الوسائل عند التعرض لعدوان',
        titleEn: 'Immediate Military Assistance by All Means in Case of Aggression',
        clauseTextAr: 'إذا تعرض أحد الطرفين لهجوم مسلح من دولة أو عدة دول ووجد نفسه في حالة حرب، يقوم الطرف الآخر فوراً بتقديم المساعدة العسكرية وكافة وسائل الدعم وفقاً للمادة 51 من ميثاق الأمم المتحدة وتشريعات الطرفين.',
        clauseTextEn: 'In case either party is subjected to an armed attack and put in a state of war, the other party shall immediately provide military and other assistance by all means.',
        significanceAr: 'إحياء المادة الدفاعية التي كانت سارية إبان الاتحاد السوفيتي عام 1961، وتوفير غطاء نووي روسي لبيونغ يانغ وإمكانية نشر قوات كورية نظامية في مسارح العمليات الروسية.',
      },
      {
        articleNumber: 'المادة 3',
        titleAr: 'آلية التشاور الأمني الفوري والتنسيق العسكري المشترك',
        titleEn: 'Immediate Bilateral Crisis Consultation Mechanism',
        clauseTextAr: 'تفعيل قنوات تشاور طارئة بين القيادتين العسكريتين بمجرد ظهور تهديد مباشر بالعدوان على أراضي أي من البلدين لتنسيق الرد المشترك.',
        clauseTextEn: 'Activate emergency channels between general staffs when a direct threat of aggression emerges to coordinate a joint response.',
        significanceAr: 'دمج غرف القيادة والسيطرة الاستخبارية وتبادل بيانات الاستطلاع بالأقمار الصناعية.',
      },
      {
        articleNumber: 'المادة 8',
        titleAr: 'تطوير آليات التدريب والمناورات العسكرية المشتركة',
        titleEn: 'Joint Military Drills and Operational Exercises',
        clauseTextAr: 'إقامة مناورات بحرية وجوية وبرية مشتركة لتعزيز القدرات الدفاعية وردع التهديدات القادمة من الولايات المتحدة وحلفائها في شرق آسيا وأوروبا.',
        clauseTextEn: 'Conduct joint naval, air and ground exercises to deter US and allied deployments in East Asia and Europe.',
        significanceAr: 'كسر الحظر المفروض بموجب عقوبات مجلس الأمن وبدء نشر قوات ميدانية مشتركة.',
      },
      {
        articleNumber: 'المادة 10',
        titleAr: 'التعاون في العلوم النووية والفضائية والتكنولوجيات الحساسة',
        titleEn: 'Space Exploration, Nuclear Science & Advanced Dual-Use Tech',
        clauseTextAr: 'التعاون في الفضاء الخارجي، إطلاق الأقمار الصناعية الاستطلاعية، والأبحاث النووية السلمية ومواجهة الحصار الاقتصادي الغربي.',
        clauseTextEn: 'Joint research in space telemetry, reconnaissance satellite launches, and circumventing unilateral Western sanctions.',
        significanceAr: 'تسريع البرنامج الصاروخي والفضائي الكوري الشمالي بالخبرات الهندسية الروسية.',
      },
    ],
    sharedArsenal: ['KN-23 (Hwasong-11) Missiles', '152mm & 122mm Artillery Shells', 'S-400 Tech', 'Space Launch Vehicle Telemetry', 'Bulsae-4 Anti-Tank Systems'],
    sharedBasesAr: 'ميناء راجين (Rason)، منشآت فلاديفوستوك، ومحطة فوستوتشني الفضائية',
    coordinates1: [55.7558, 37.6173], // Moscow
    coordinates2: [39.0392, 125.7625], // Pyongyang
  },

  // 3. الولايات المتحدة - اليابان
  {
    id: 'us_jp_security_treaty',
    titleAr: 'معاهدة التعاون والأمن المشترك بين الولايات المتحدة واليابان',
    titleEn: 'Treaty of Mutual Cooperation and Security Between the United States and Japan',
    country1: { id: 'us', nameAr: 'الولايات المتحدة', nameEn: 'United States', flag: '🇺🇸' },
    country2: { id: 'jp', nameAr: 'اليابان', nameEn: 'Japan', flag: '🇯🇵' },
    signedYear: 1951,
    upgradedYear: 2024,
    status: 'active_binding',
    commitmentLevelAr: 'حلف دفاع مشترك ملزم مع حق استضافة القواعد العسكرية الأمريكية',
    commitmentLevelEn: 'Mutual Defense Treaty with Full US Forward Base Rights',
    strategicPurposeAr: 'توفير المظلة النووية والتقليدية الأمريكية للدفاع عن اليابان وأرخبيل جزرها (بما في ذلك جزر سينكاكو المتنازع عليها مع الصين)، واحتواء القوة البحرية الصينية في سلسلة الجزر الأولى، وردع البرامج النووية لكوريا الشمالية، وضمان أمن مضيق تايوان وممرات التجارة البحرية.',
    strategicPurposeEn: 'Extend US nuclear and conventional umbrella over Japanese territory (including Senkaku Islands), counter Chinese expansion in the First Island Chain, and secure the Taiwan Strait.',
    keyClauses: [
      {
        articleNumber: 'المادة 5 (بند الدفاع المشترك)',
        titleAr: 'الدفاع الإلزامي المشترك عن كافة الأراضي الخاضعة للإدارة اليابانية',
        titleEn: 'Mutual Defense of Territories Under Japanese Administration',
        clauseTextAr: 'يعتبر كل طرف أن أي هجوم مسلح ضد أي منهما في الأراضي الخاضعة للإدارة اليابانية يشكل خطراً على سلامه وأمنه، ويعلن أنه سيعمل على مواجهة الخطر المشترك بموجب أحكامه الدستورية.',
        clauseTextEn: 'Each party recognizes that an armed attack against either party in territories under Japanese administration would be dangerous to its peace and safety and acts to meet the common danger.',
        significanceAr: 'تأكيد واشنطن الرسمي بأن المادة 5 تشمل صراحة جزر سينكاكو غير المأهولة المتنازع عليها مع بكين.',
      },
      {
        articleNumber: 'المادة 6 (حق القواعد والتمركز العسكري)',
        titleAr: 'منح القوات المسلحة الأمريكية حق التمركز واستخدام القواعد والموانئ',
        titleEn: 'US Base Facilities & Port Access Rights in Japan',
        clauseTextAr: 'للمساهمة في أمن اليابان والحفاظ على السلام الدولي في الشرق الأقصى، يُمنح الجيش الأمريكي استخدام التسهيلات والمناطق في اليابان.',
        clauseTextEn: 'For the security of Japan and the Far East, US land, air and naval forces are granted the use of bases and facilities.',
        significanceAr: 'استضافة أكبر تجمع لقوات أمريكية في الخارج (أكثر من 54 ألف جندي، حاملة طائرات في يوكوسوكا، وقواعد كادينا وميساوا).',
      },
      {
        articleNumber: 'ترقية 2024',
        titleAr: 'تأسيس القيادة المشتركة المدمجة وتحديث عقيدة الضربة المضادة اليابانية',
        titleEn: '2024 Upgraded Joint Operational Command Architecture',
        clauseTextAr: 'إعادة هيكلة القيادة العسكرية الأمريكية في اليابان لتصبح قيادة عملياتية مشتركة موازية للقيادة اليابانية الموحدة (JJOC)، وتزويد اليابان بصواريخ توماهوك للضربات العميقة.',
        clauseTextEn: 'Restructuring US Forces Japan into a warfighting operational command, integrating with Japan’s Joint Operations Command and Tomahawk missile acquisitions.',
        significanceAr: 'تحول اليابان من الدفاع السلبي المحض إلى امتلاك قدرات الضربة الاستباقية المضادة بالتنسيق المباشر مع واشنطن.',
      },
    ],
    sharedArsenal: ['F-35A/B Lightning II', 'Aegis Destroyers (SM-3 Block IIA)', 'Tomahawk Cruise Missiles', 'Patriot PAC-3 MSE', 'RQ-4 Global Hawk'],
    sharedBasesAr: 'قاعدة يوكوسوكا البحرية (مقر الأسطول السابع)، قاعدة كادينا الجوية بأوكيناوا، وقاعدة إيواكوني لمشاة البحرية',
    coordinates1: [38.8951, -77.0364],
    coordinates2: [35.6762, 139.6503], // Tokyo
  },

  // 4. روسيا - الصين
  {
    id: 'ru_cn_no_limits_partnership',
    titleAr: 'الشراكة الاستراتيجية الشاملة بلا حدود والتنسيق العسكري الروسي الصيني',
    titleEn: 'Russia-China "No-Limits" Comprehensive Strategic Partnership of Coordination',
    country1: { id: 'ru', nameAr: 'روسيا الاتحادية', nameEn: 'Russia', flag: '🇷🇺' },
    country2: { id: 'cn', nameAr: 'جمهورية الصين الشعبية', nameEn: 'China', flag: '🇨🇳' },
    signedYear: 2001,
    upgradedYear: 2022,
    status: 'active_strategic',
    commitmentLevelAr: 'شراكة استراتيجية أوراسية شاملة وتنسيق عسكري تكتيكي متقدم يتجاوز التحالفات التقليدية',
    commitmentLevelEn: 'Comprehensive Eurasian Strategic Partnership Surpassing Traditional Alliances',
    strategicPurposeAr: 'تحدي الهيمنة الأحادية للولايات المتحدة وحلف الناتو، بناء نظام دولي متعدد الأقطاب، تأمين العمق الاستراتيجي البري لأوراسيا (طول الحدود 4200 كم)، توفير إمدادات الطاقة الروسية الآمنة للصين عبر خطوط الأنابيب البرية تحسباً لأي حصار بحري أمريكي في مضيق ملقا، والتعاون العسكري في تقنيات الرادار والإنذار المبكر بالهجمات الصاروخية الباليستية.',
    strategicPurposeEn: 'Challenge US/NATO hegemony, establish a multipolar world order, secure Eurasian terrestrial depth, ensure overland Russian oil/gas flows to China immune to maritime blockades, and integrate early-warning missile defense radars.',
    keyClauses: [
      {
        articleNumber: 'البند 1 (إعلان بكين 2022)',
        titleAr: 'شراكة الصداقة بلا حدود ولا مجالات محظورة للتعاون',
        titleEn: 'Friendship with No Limits and No Forbidden Zones',
        clauseTextAr: 'تعلن الدولتان أن الصداقة بينهما لا تعرف حدوداً، ولا توجد مناطق محظورة في التعاون الثنائي، مع رفض مشترك لتوسع حلف الناتو وإنشاء تكتلات مغلقة مثل أوكوس في آسيا.',
        clauseTextEn: 'The two states declare that friendship between them has no limits, there are no forbidden areas of cooperation, and jointly oppose NATO expansion and AUKUS.',
        significanceAr: 'التنسيق الجيوسياسي التام واستخدام حق النقض (الفيتو) المزدوج في مجلس الأمن الدولي لحماية المصالح المشتركة.',
      },
      {
        articleNumber: 'البند 2 (معاهدة 2001 - المادة 9)',
        titleAr: 'التشاور الإلزامي الفوري عند تعرض أي طرف لتهديد أمني',
        titleEn: 'Mandatory Immediate Security Consultation Mechanism',
        clauseTextAr: 'في حال ظهور وضع يرى فيه أحد الطرفين خطراً يهدد السلام أو يمس مصالحه الأمنية، يدخل الطرفان فوراً في اتصالات للتشاور حول إزالة التهديد.',
        clauseTextEn: 'When a situation arises threatening peace or security interests of either party, both sides immediately enter into contact to eliminate the threat.',
        significanceAr: 'توفير غطاء حماية متبادل دون إلزام شكلي بالانخراط في حرب مفتوحة، مما يمنح الطرفين مرونة استراتيجية عظمى.',
      },
      {
        articleNumber: 'البند 3',
        titleAr: 'الدوريات الجوية والبحرية الاستراتيجية المشتركة ونقل التكنولوجيا الحساسة',
        titleEn: 'Joint Strategic Bomber Patrols & Advanced Defense Tech Transfer',
        clauseTextAr: 'تنفيذ دوريات منتظمة لقاذفات القنابل النووية (Tu-95 و H-6K) فوق بحر اليابان وبحر الصين الشرقي، ومساعدة روسيا للصين في بناء شبكة الإنذار الصاروخي المبكر (SPRN).',
        clauseTextEn: 'Routine nuclear-capable bomber joint patrols over the Sea of Japan, along with Russian assistance in developing China’s national missile early-warning radar network.',
        significanceAr: 'دمج شبكات الاستشعار الصاروخي الروسية والصينية لحماية الفضاء الأوراسي من الضربات الباليستية الأمريكية.',
      },
      {
        articleNumber: 'البند 4',
        titleAr: 'التحصين المالي وتسوية التجارة بالعملات الوطنية (اليوان والروبل)',
        titleEn: 'De-dollarization & National Currencies Trade Settlement',
        clauseTextAr: 'إلغاء استخدام الدولار واليورو في المبادلات التجارية الثنائية (تجاوزت 95% باليوان والروبل) والربط المباشر بين نظامي المدفوعات SPFS و CIPS.',
        clauseTextEn: 'Over 95% of bilateral trade conducted in Rubles and Yuan, linking alternative financial messaging systems to neutralize SWIFT sanctions.',
        significanceAr: 'تحصين الاقتصادين من أي عقوبات مصرفية غربية وضمان استمرار تجارة النفط والغاز والمعادن.',
      },
    ],
    sharedArsenal: ['Su-35 Flanker-E', 'S-400 Triumf', 'Power of Siberia 1 & 2', 'Joint Early-Warning Radar Network', 'CIPS-SPFS Financial Bridge'],
    sharedBasesAr: 'الموانئ الروسية في فلاديفوستوك، ومراكز التدريب المشتركة في نينغشيا ومضيق تاتار',
    coordinates1: [55.7558, 37.6173], // Moscow
    coordinates2: [39.9042, 116.4074], // Beijing
  },

  // 5. الولايات المتحدة - كوريا الجنوبية
  {
    id: 'us_kr_defense_treaty',
    titleAr: 'معاهدة الدفاع المشترك بين الولايات المتحدة وجمهورية كوريا (إعلان واشنطن ومجموعة التشاور النووي)',
    titleEn: 'US-Republic of Korea Mutual Defense Treaty & Washington Declaration (NCG)',
    country1: { id: 'us', nameAr: 'الولايات المتحدة', nameEn: 'United States', flag: '🇺🇸' },
    country2: { id: 'kr', nameAr: 'كوريا الجنوبية', nameEn: 'South Korea', flag: '🇰🇷' },
    signedYear: 1953,
    upgradedYear: 2023,
    status: 'active_binding',
    commitmentLevelAr: 'معاهدة دفاع عسكري مشترك ملزمة مع قيادة قوات مشتركة مدمجة (CFC) ومظلة ردع نووي موسع',
    commitmentLevelEn: 'Combined Forces Command (CFC) & Extended Nuclear Deterrence Guarantee',
    strategicPurposeAr: 'ردع أي هجوم مسلح أو غزو باليستي نووي من قبل كوريا الشمالية، توفير الحماية النووية الأمريكية لسيول لمنعها من تطوير سلاح نووي مستقل، تأمين منطقة المحيطين الهندي والهادئ، ودمج الصناعات الدفاعية الدقيقة.',
    strategicPurposeEn: 'Deter North Korean aggression, extend US nuclear umbrella preventing domestic South Korean nuclear proliferation, and maintain Combined Forces Command forward posture.',
    keyClauses: [
      {
        articleNumber: 'المادة 3',
        titleAr: 'التدخل العسكري المشترك لردع العدوان الخارجي',
        titleEn: 'Mutual Action in Response to Armed Attack',
        clauseTextAr: 'يعترف كل طرف بأن أي هجوم مسلح في منطقة المحيط الهادئ على أي من الطرفين يهدد سلامه، ويتعهد باتخاذ الإجراءات العسكرية لمواجهة الخطر المشترك.',
        clauseTextEn: 'Parties will act to meet the common danger in accordance with constitutional processes.',
        significanceAr: 'التزام البنتاغون بالدفاع عن شبه الجزيرة الكورية ونشر أكثر من 28,500 جندي أمريكي مرابط بشكل دائم.',
      },
      {
        articleNumber: 'إعلان واشنطن 2023',
        titleAr: 'تأسيس مجموعة الاستشارات النووية (NCG) وإرساء غواصات الصواريخ الباليستية',
        titleEn: 'Nuclear Consultative Group (NCG) & SSBN Port Visits',
        clauseTextAr: 'منح سيول دوراً استشارياً تشاركياً مباشراً في خطط التخطيط النووي الطارئ للولايات المتحدة في شبه الجزيرة، مع رسو دوري لغواصات الصواريخ الباليستية النووية الأمريكية (أوهايو) في الموانئ الكورية.',
        clauseTextEn: 'Establishment of bilateral Nuclear Consultative Group and regular deployments of US strategic nuclear submarines to Korean ports.',
        significanceAr: 'التأكيد القاطع على أن أي هجوم نووي كوري شمالي سيواجه برد حاسم وسريع يؤدي لنهاية النظام في بيونغ يانغ.',
      },
      {
        articleNumber: 'بند قيادة العمليات (CFC)',
        titleAr: 'قيادة القوات المشتركة (Combined Forces Command)',
        titleEn: 'Wartime Operational Control (OPCON) Framework',
        clauseTextAr: 'في حالة الحرب الشاملة، تنضوي القوات الكورية والأمريكية تحت قيادة موحدة يرأسها جنرال أمريكي بأربعة نجوم لضمان أعلى مستوى من الكفاءة التكتيكية.',
        clauseTextEn: 'Integration of Korean and American armed forces under unified operational control during war.',
        significanceAr: 'أعمق هيكل قيادة عسكرية مدمجة ثنائية في العالم خارج إطار حلف الناتو.',
      },
    ],
    sharedArsenal: ['THAAD Battery', 'F-35A', 'KF-21 Boramae (US Engine Tech)', 'Patriot PAC-3', 'Ohio-class Nuclear Submarines'],
    sharedBasesAr: 'معسكر همفريز في بيونغتيك (أضخم قاعدة عسكرية أمريكية في الخارج)، وقاعدة أوسان الجوية',
    coordinates1: [38.8951, -77.0364],
    coordinates2: [37.5665, 126.9780], // Seoul
  },

  // 6. تركيا - أذربيجان
  {
    id: 'tr_az_shusha_declaration',
    titleAr: 'إعلان شوشا للتحالف الاستراتيجي والدفاع العسكري المتبادل بين تركيا وأذربيجان',
    titleEn: 'Shusha Declaration on Allied Relations Between Turkey and Azerbaijan',
    country1: { id: 'tr', nameAr: 'الجمهورية التركية', nameEn: 'Turkey', flag: '🇹🇷' },
    country2: { id: 'az', nameAr: 'جمهورية أذربيجان', nameEn: 'Azerbaijan', flag: '🇦🇿' },
    signedYear: 2021,
    ratifiedYear: 2022,
    status: 'ratified_active',
    commitmentLevelAr: 'حلف دفاع عسكري متبادل وعقيدة عسكرية موحدة (أمة واحدة في دولتين)',
    commitmentLevelEn: 'Mutual Military Defense Alliance & Unified Operational Doctrine',
    strategicPurposeAr: 'تثبيت الانتصار العسكري في إقليم قره باغ، إرساء حلف عسكري موحد يحمي سيادة أذربيجان وأمن تركيا القومي في القوقاز، تأمين ممر زانغيزور اللوجستي لربط العالم التركي من إسطنبول إلى آسيا الوسطى، وتوحيد تسليح الجيشين وفق معايير الناتو والتقنيات التركية المتقدمة.',
    strategicPurposeEn: 'Consolidate victory in Karabakh, establish mutual military defense, secure the Zangezur corridor linking Turkey with Central Asia, and modernize Azerbaijani forces along NATO/Turkish standards.',
    keyClauses: [
      {
        articleNumber: 'البند العسكري الدفاعي',
        titleAr: 'المساعدة العسكرية المتبادلة في حال تعرض أي طرف لعدوان خارجي',
        titleEn: 'Mutual Military Assistance Against External Aggression',
        clauseTextAr: 'إذا تعرض استقلال أو سلامة أراضي أي من الطرفين لتهديد أو عدوان من قبل دولة ثالثة، يتخذ الطرفان إجراءات مشتركة ويقدمان المساعدة العسكرية الضرورية لردع العدوان وفقاً لميثاق الأمم المتحدة.',
        clauseTextEn: 'In case of a threat or aggression from a third state, the parties will take joint action and provide necessary military assistance.',
        significanceAr: 'إلزام الجيش التركي (ثاني أضخم جيوش الناتو) بالتدخل العسكري المباشر لحماية باكو عند تعرضها لأي اعتداء خارجي.',
      },
      {
        articleNumber: 'البند اللوجستي',
        titleAr: 'تأمين ممر زانغيزور والربط الترانزيتي الاستراتيجي',
        titleEn: 'Zangezur Corridor & Strategic Transport Security',
        clauseTextAr: 'العمل المشترك على فتح وتأمين ممر زانغيزور الرابط بين جمهورية نخجوان ذات الحكم الذاتي والبر الرئيسي الأذربيجاني، وربطه بالشبكة التركية.',
        clauseTextEn: 'Joint efforts to open and secure the Zangezur transit corridor connecting Nakhchivan to mainland Azerbaijan and Turkey.',
        significanceAr: 'توفير ممر بري مباشر وغير منقطع بين تركيا وبحر قزوين متجاوزاً الحدود الإيرانية والأرمينية.',
      },
      {
        articleNumber: 'بند التصنيع الحربي',
        titleAr: 'الإنتاج المشترك للأسلحة الذكية والمسيرات وتوحيد القيادة',
        titleEn: 'Joint Defense Manufacturing & Drone Technology',
        clauseTextAr: 'إنشاء مصانع مشتركة لإنتاج الطائرات بدون طيار (بيرقدار TB2 وأكينجي) والذخائر الذكية، وإعادة هيكلة الجيش الأذربيجاني بالكامل وفق النموذج التركي.',
        clauseTextEn: 'Joint manufacturing plants for armed UAVs (Bayraktar) and precision munitions, adopting unified doctrine.',
        significanceAr: 'التفوق النوعي الحاسم في مسارح القوقاز وبناء جيش حديث مشترك.',
      },
    ],
    sharedArsenal: ['Bayraktar TB2 & Akinci UAVs', 'TRG-300 Kasirga Missiles', 'Som Cruise Missiles', 'F-16 Forward Deployments'],
    sharedBasesAr: 'قاعدة كوردامير الجوية في أذربيجان، ومطار غانجا العسكري',
    coordinates1: [39.9334, 32.8597], // Ankara
    coordinates2: [40.4093, 49.8671], // Baku
  },

  // 7. تحالف أوكوس (الولايات المتحدة، أستراليا، بريطانيا)
  {
    id: 'aukus_defense_pact',
    titleAr: 'ميثاق أوكوس الأمني للدفاع الاستراتيجي والتكنولوجيا الفائقة (AUKUS)',
    titleEn: 'AUKUS Trilateral Security Partnership (Submarines & Advanced Capabilities)',
    country1: { id: 'us', nameAr: 'الولايات المتحدة', nameEn: 'United States', flag: '🇺🇸' },
    country2: { id: 'au', nameAr: 'أستراليا', nameEn: 'Australia', flag: '🇦🇺' },
    additionalMembers: [{ id: 'gb', nameAr: 'المملكة المتحدة', nameEn: 'United Kingdom', flag: '🇬🇧' }],
    signedYear: 2021,
    status: 'active_binding',
    commitmentLevelAr: 'تحالف أمني استراتيجي ثلاثي لنقل التكنولوجيا العسكرية الأكثر سرية (الغواصات النووية)',
    commitmentLevelEn: 'Trilateral Strategic Pact Transferring Top-Tier Nuclear Propulsion & Hypersonics',
    strategicPurposeAr: 'احتواء الصعود البحري العسكري السريع للصين في منطقتي المحيطين الهندي والهادئ، تزويد أستراليا بأسطول غواصات هجومية تعمل بالدفع النووي لكسر هيمنة بكين في بحر الصين الجنوبي ومضائق جنوب شرق آسيا، وتطوير أسلحة فرط صوتية وأنظمة ذكاء اصطناعي قتالية مشتركة.',
    strategicPurposeEn: 'Deter Chinese naval hegemony in the Indo-Pacific, equip Australia with nuclear-powered attack submarines (SSN-AUKUS), and co-develop hypersonic, quantum and autonomous systems.',
    keyClauses: [
      {
        articleNumber: 'الركيزة الأولى (Pillar 1)',
        titleAr: 'تزويد أستراليا بغواصات هجومية تعمل بالدفع النووي (SSN-AUKUS)',
        titleEn: 'Pillar 1: Nuclear-Powered Attack Submarines for Australia',
        clauseTextAr: 'بيع ما بين 3 إلى 5 غواصات هجومية أمريكية من طراز فيرجينيا لأستراليا في ثلاثينيات القرن الحالي، وتطوير غواصة جيل جديد مشتركة بريطانية-أسترالية (SSN-AUKUS) بمفاعلات دفع نووي أمريكية.',
        clauseTextEn: 'Transfer of 3 to 5 US Virginia-class nuclear attack submarines to Australia, followed by building the new SSN-AUKUS class.',
        significanceAr: 'أول مرة تشارك فيها واشنطن تكنولوجيا الدفع النووي البحري منذ اتفاقها مع بريطانيا عام 1958.',
      },
      {
        articleNumber: 'الركيزة الثانية (Pillar 2)',
        titleAr: 'تطوير الأسلحة فرط الصوتية والحرب الإلكترونية والذكاء الاصطناعي',
        titleEn: 'Pillar 2: Advanced Capabilities, Hypersonics & Cyber Warfare',
        clauseTextAr: 'الإنتاج المشترك للصواريخ فرط الصوتية، منظومات الدفاع المضادة للصواريخ، تقنيات الكم، المسيرات الغاطسة والجوية ذاتية القيادة، والتفوق السيبراني.',
        clauseTextEn: 'Joint development of hypersonic strike systems, quantum encryption, autonomous undersea vehicles and cyber defense.',
        significanceAr: 'بناء تفوق تقني عسكري ساحق قادر على اختراق منظومات منع الوصول وحرمان المنطقة (A2/AD) الصينية.',
      },
      {
        articleNumber: 'بند التمركز والانتشار (SRF-West)',
        titleAr: 'تناوب انتشار الغواصات النووية الأمريكية والبريطانية في قاعدة ستيرلينغ الأسترالية',
        titleEn: 'Submarine Rotational Force - West (SRF-West)',
        clauseTextAr: 'بدء نشر وتناوب ما يصل إلى 4 غواصات نووية أمريكية وغواصة بريطانية في قاعدة HMAS Stirling قرب بيرث بغرب أستراليا بحلول عام 2027.',
        clauseTextEn: 'Rotational presence of up to four US Virginia-class and one UK Astute-class submarine at HMAS Stirling by 2027.',
        significanceAr: 'تقريب الغواصات النووية الغربية من بحر الصين الجنوبي ومضيق ملقا والمحيط الهندي بآلاف الكيلومترات.',
      },
    ],
    sharedArsenal: ['Virginia-class SSN', 'SSN-AUKUS', 'Hypersonic Glide Vehicles', 'P-8A Poseidon', 'B-52 Deployments at Tindal'],
    sharedBasesAr: 'قاعدة HMAS Stirling البحرية (بيرث)، قاعدة باين غاب الاستخباراتية (Pine Gap)، وقاعدة تيندال الجوية',
    coordinates1: [38.8951, -77.0364],
    coordinates2: [-35.2809, 149.1300], // Canberra
  },

  // 8. الصين - باكستان
  {
    id: 'cn_pk_iron_brothers',
    titleAr: 'الشراكة الاستراتيجية التعاونية في جميع الظروف بين الصين وباكستان (الإخوة الحديديون وممر CPEC)',
    titleEn: 'China-Pakistan All-Weather Strategic Cooperative Partnership & CPEC Framework',
    country1: { id: 'cn', nameAr: 'جمهورية الصين الشعبية', nameEn: 'China', flag: '🇨🇳' },
    country2: { id: 'pk', nameAr: 'جمهورية باكستان الإسلامية', nameEn: 'Pakistan', flag: '🇵🇰' },
    signedYear: 1963,
    upgradedYear: 2015,
    status: 'active_strategic',
    commitmentLevelAr: 'تحالف استراتيجي عسكري واقتصادي غير قابل للكسر وتطوير تسليحي مشترك',
    commitmentLevelEn: 'All-Weather Ironclad Strategic Alliance, Joint Defense Manufacturing & CPEC Gateway',
    strategicPurposeAr: 'تطويق المنافس الهندي وتشتيت تركيزه العسكري على جبهتين، تأمين ممر الصين-باكستان الاقتصادي (CPEC) وميناء جوادر على بحر العرب لنقل نفط الخليج برياً إلى غرب الصين متجاوزاً مضيق ملقا، ونقل أحدث التكنولوجيات القتالية الصينية (مقاتلات J-10C، غواصات Hangor، وصواريخ باليستية) للجيش الباكستاني.',
    strategicPurposeEn: 'Maintain two-front pressure on India, secure direct overland pipeline and port access to the Arabian Sea (Gwadar) bypassing the Malacca Strait, and equip Pakistan with high-end Chinese weapon systems.',
    keyClauses: [
      {
        articleNumber: 'البند الاستراتيجي الأول',
        titleAr: 'الإنتاج والتطوير الحربي المشترك للمنظومات القتالية الرئيسية',
        titleEn: 'Joint Defense Co-Development & Manufacturing',
        clauseTextAr: 'الإنتاج المشترك لمقاتلات JF-17 ثاندر، دبابات الخالد، تزويد البحرية الباكستانية بـ 8 غواصات هجومية من طراز Hangor، ونقل تكنولوجيا المقاتلات الشبحية J-31.',
        clauseTextEn: 'Co-manufacturing of JF-17 Block III fighters, Al-Khalid tanks, delivery of 8 Hangor-class stealth submarines, and J-31 stealth jet access.',
        significanceAr: 'تحديث الترسانة الباكستانية لتضاهي وتتفوق على المنظومات الهندية المستوردة من الغرب وروسيا.',
      },
      {
        articleNumber: 'بند ممر CPEC وميناء جوادر',
        titleAr: 'تأمين الممر الاقتصادي وحقوق الاستخدام البحري لميناء جوادر',
        titleEn: 'CPEC Security Framework & Gwadar Port Sovereign Access',
        clauseTextAr: 'استثمار ما يزيد عن 62 مليار دولار في خطوط السكك الحديدية والطاقة والموانئ، وتوفير فرقة عسكرية باكستانية خاصة لتأمين المشاريع الصينية، مع منح البحرية الصينية تسهيلات لوجستية في ميناء جوادر.',
        clauseTextEn: '$62B+ investment in energy, rail and deep-sea port at Gwadar, with Pakistani Army dedicated security divisions and Chinese naval logistics access.',
        significanceAr: 'ربط إقليم شينجيانغ الصيني بالمحيط الهندي وبحر العرب مباشرة على بعد 400 كم من مضيق هرمز.',
      },
      {
        articleNumber: 'بند التنسيق النووي والاستخباري',
        titleAr: 'التعاون في الطاقة النووية وتبادل المعلومات التكتيكية عن الجبهة الهندية',
        titleEn: 'Civil Nuclear Energy & Real-Time Border Intelligence Sharing',
        clauseTextAr: 'بناء المفاعلات النووية الصينية (Chashma و K-3) في باكستان وتزويد الجيش الباكستاني ببيانات الأقمار الصناعية BeiDou لرصد التحركات العسكرية الهندية في كشمير.',
        clauseTextEn: 'Building Chinese nuclear reactors (Chashma) and providing BeiDou satellite positioning data for targeting and surveillance along the Line of Control.',
        significanceAr: 'ضمان التوازن الاستراتيجي والردع النووي في جنوب آسيا.',
      },
    ],
    sharedArsenal: ['JF-17 Thunder Block III', 'J-10CE Vigorous Dragon', 'Hangor-class Submarines', 'HQ-9P Air Defense', 'VT-4 Main Battle Tanks'],
    sharedBasesAr: 'ميناء جوادر الاستراتيجي في بلوشستان، وقاعدة منهاس الجوية في كامرا',
    coordinates1: [39.9042, 116.4074],
    coordinates2: [33.6844, 73.0479], // Islamabad
  },

  // 9. فرنسا - دولة الإمارات
  {
    id: 'fr_ae_defense_agreement',
    titleAr: 'اتفاقية الدفاع المشترك والوجود العسكري الفرنسي الدائم في دولة الإمارات',
    titleEn: 'France-UAE Strategic Defense Cooperation Agreement & Permanent Base (Camp de la Paix)',
    country1: { id: 'fr', nameAr: 'الجمهورية الفرنسية', nameEn: 'France', flag: '🇫🇷' },
    country2: { id: 'ae', nameAr: 'دولة الإمارات العربية المتحدة', nameEn: 'UAE', flag: '🇦🇪' },
    signedYear: 1995,
    upgradedYear: 2009,
    status: 'active_binding',
    commitmentLevelAr: 'معاهدة أمنية استراتيجية مع قاعدة عسكرية فرنسية دائمة متعددة الفروع وصفقة رافال القياسية',
    commitmentLevelEn: 'Binding Strategic Defense Pact with Permanent French Tri-Service Base & 80 Rafale Fleet',
    strategicPurposeAr: 'تأمين أمن واستقرار دولة الإمارات وحماية الممرات البحرية في الخليج العربي ومضيق هرمز وخليج عمان، تعزيز الاستقلالية الدفاعية الإماراتية بتنويع مصادر السلاح الاستراتيجي عبر شراء 80 مقاتلة رافال إف4 (أكبر صفقة تصدير في تاريخ الدفاع الفرنسي بقيمة 19 مليار دولار)، وتوفير قاعدة انتشار عسكرية فرنسية دائمة في الشرق الأوسط.',
    strategicPurposeEn: 'Secure UAE sovereignty and Hormuz strait maritime security, advance UAE defense diversification with record 80 Rafale F4 fighter jet acquisition ($19B), and anchor France’s permanent military outpost in the Gulf.',
    keyClauses: [
      {
        articleNumber: 'المادة الدفاعية الأولى',
        titleAr: 'الالتزام الفرنسي بالدفاع عن سيادة وأمن دولة الإمارات',
        titleEn: 'French Commitment to UAE Sovereignty & Territorial Defense',
        clauseTextAr: 'تلتزم باريس بالمشاركة في الدفاع عن سيادة وأراضي دولة الإمارات العربية المتحدة في حال تعرضها لأي اعتداء خارجي وفق بروتوكولات التنسيق المشترك المقرة.',
        clauseTextEn: 'France commits to contributing to the defense of UAE sovereignty and territory in case of foreign aggression under agreed operational protocols.',
        significanceAr: 'إرساء مظلة ردع نووية وتقليدية أوروبية مستقلة في منطقة الخليج العربي.',
      },
      {
        articleNumber: 'بند القاعدة العسكرية الدائمة',
        titleAr: 'معسكر السلام (Camp de la Paix) للجيش الفرنسي في أبوظبي',
        titleEn: 'Permanent Tri-Service French Military Base in Abu Dhabi',
        clauseTextAr: 'استضافة قاعدة فرنسية دائمة تشمل القاعدة الجوية 104 في الظفرة (مقاتلات رافال)، القاعدة البحرية في ميناء زايد (دعم الأسطول الفرنسي في المحيط الهندي)، وموقع التدريب البري المدرع.',
        clauseTextEn: 'Hosting France’s permanent overseas military facility: Base Aérienne 104 at Al-Dhafra, Naval Base at Port Zayed, and Army combat training camp.',
        significanceAr: 'القاعدة العسكرية الفرنسية الدائمة الأولى والوحيدة في منطقة الخليج العربي منذ أكثر من نصف قرن.',
      },
      {
        articleNumber: 'بند التسلح النوعي',
        titleAr: 'صفقة الـ 80 طائرة رافال F4 وشراكة الفضاء والأقمار الصناعية (Falcon Eye)',
        titleEn: '80 Rafale F4 Fleet, Caracal Helicopters & Falcon Eye Reconnaissance Satellites',
        clauseTextAr: 'تزويد القوات الجوية الإماراتية بـ 80 طائرة رافال بأحدث معيار F4 مع صواريخ ميتيور وبلاك شاهين، إلى جانب أقمار الاستطلاع الكهروضوئية عالية الدقة عين الصقر (Falcon Eye).',
        clauseTextEn: 'Delivering 80 Rafale F4 multirole jets with Meteor and SCALP/Black Shaheen missiles, alongside sovereign Falcon Eye high-resolution reconnaissance satellites.',
        significanceAr: 'جعل سلاح الجو الإماراتي ثاني أضخم وأحدث مشغّل لمقاتلات رافال في العالم بعد القوات الجوية الفرنسية.',
      },
    ],
    sharedArsenal: ['Rafale F4 Multirole Fighters', 'Falcon Eye High-Res Satellites', 'Leclerc Main Battle Tanks', 'Caracal H225M Helicopters', 'Meteor Long-Range AAM'],
    sharedBasesAr: 'معسكر السلام في ميناء زايد، والقاعدة الجوية 104 في الظفرة (أبوظبي)',
    coordinates1: [48.8566, 2.3522], // Paris
    coordinates2: [24.4539, 54.3773], // Abu Dhabi
  },

  // 10. روسيا - بيلاروسيا
  {
    id: 'ru_by_union_state',
    titleAr: 'معاهدة دولة الاتحاد والعقيدة العسكرية المشتركة بين روسيا وبيلاروسيا (الدرع النووي والجيش الموحد)',
    titleEn: 'Russia-Belarus Union State Joint Military Doctrine & Tactical Nuclear Deployment',
    country1: { id: 'ru', nameAr: 'روسيا الاتحادية', nameEn: 'Russia', flag: '🇷🇺' },
    country2: { id: 'by', nameAr: 'جمهورية بيلاروسيا', nameEn: 'Belarus', flag: '🇧🇾' },
    signedYear: 1999,
    upgradedYear: 2023,
    status: 'active_binding',
    commitmentLevelAr: 'اندماج عسكري ودفاعي كامل تحت قيادة إقليمية موحدة ونشر أسلحة نووية تكتيكية',
    commitmentLevelEn: 'Complete Military Integration, Joint Regional Force Grouping & Tactical Nuclear Deployment',
    strategicPurposeAr: 'تأمين الخاصرة الغربية لروسيا وممر سوالكي الاستراتيجي الفاصل بين كالينينغراد وبيلاروسيا، منع سقوط مينسك في المدار الغربي، ونشر رؤوس نووية تكتيكية وصواريخ إسكندر الروسية داخل بيلاروسيا لردع حلف الناتو وبولندا في شرق أوروبا.',
    strategicPurposeEn: 'Secure Russia’s western flank and the Suwalki Gap, prevent Western-aligned regime change in Minsk, and station Russian tactical nuclear warheads and Iskander missiles in Belarus to deter NATO/Poland.',
    keyClauses: [
      {
        articleNumber: 'البند الأول (الردع النووي المشترك)',
        titleAr: 'نشر الأسلحة النووية التكتيكية الروسية في بيلاروسيا',
        titleEn: 'Stationing of Russian Non-Strategic Nuclear Weapons in Belarus',
        clauseTextAr: 'نشر شحنات نووية تكتيكية روسية في منشآت تخزين خاصة في بيلاروسيا تحت السيطرة العملياتية لموسكو، وتعديل طائرات Su-25 البيلاروسية ومنظومات إسكندر-M لحمل رؤوس نووية.',
        clauseTextEn: 'Deployment of Russian tactical nuclear warheads to specialized storage in Belarus under Russian control, qualifying Belarusian Su-25 jets and Iskander-M systems for nuclear delivery.',
        significanceAr: 'أول نشر لأسلحة نووية روسية خارج أراضيها منذ انهيار الاتحاد السوفيتي عام 1991.',
      },
      {
        articleNumber: 'بند القوات الإقليمية المشتركة',
        titleAr: 'تشكيل التجمع الإقليمي الموحد للقوات المسلحة',
        titleEn: 'Regional Grouping of Forces (RGV)',
        clauseTextAr: 'دمج شبكات الدفاع الجوي والبصري والاستخباري في نظام دفاع جوي مشترك موحد، ووضع القوات البيلاروسية ووحدات من الجيش الروسي تحت قيادة عملياتية مشتركة عند إعلان حالة الطوارئ الحربية.',
        clauseTextEn: 'Integration of air defense, radar and command systems into a Unified Regional Air Defense System with joint operational battle management.',
        significanceAr: 'تحويل الأراضي البيلاروسية إلى عمق دفاعي وعسكري متقدم للقوات المسلحة الروسية على حدود بولندا وليتوانيا وأوكرانيا.',
      },
      {
        articleNumber: 'بند الدفاع المشترك',
        titleAr: 'أي هجوم على بيلاروسيا يُعد هجوماً على روسيا يستوجب الرد النووي',
        titleEn: 'Armed Attack on Belarus Triggers Full Russian Nuclear Response',
        clauseTextAr: 'تنص العقيدة النووية الروسية المحدثة لعام 2024 صراحة على أن أي عدوان مسلح ضد جمهورية بيلاروسيا باستخدام أسلحة تقليدية يشكل تهديداً خطيراً لسيادتها يُجيز لموسكو الرد باستخدام الأسلحة النووية.',
        clauseTextEn: 'Updated 2024 Russian nuclear doctrine stipulates that any aggression against Belarus threatening its sovereignty authorizes a Russian nuclear retaliatory response.',
        significanceAr: 'توفير أعلى درجات الردع الاستراتيجي وحماية مينسك من أي تدخل عسكري غربي.',
      },
    ],
    sharedArsenal: ['Iskander-M Tactical Nuclear Missiles', 'S-400 Triumf Batteries', 'Su-30SM Fighters', 'Polonez-M MLRS', 'Unified Radar Early Warning'],
    sharedBasesAr: 'محطة بارانوفيتشي للرادار الاستراتيجي (Volga)، محطة فيليكا للاتصالات البحرية، وقاعدة ليدا الجوية',
    coordinates1: [55.7558, 37.6173],
    coordinates2: [53.9045, 27.5615], // Minsk
  },

  // 11. روسيا - إيران
  {
    id: 'ru_ir_strategic_pact',
    titleAr: 'الشراكة الاستراتيجية الشاملة والتعاون العسكري التسليحي بين روسيا وإيران',
    titleEn: 'Russia-Iran Comprehensive Strategic Partnership & Military-Technical Cooperation',
    country1: { id: 'ru', nameAr: 'روسيا الاتحادية', nameEn: 'Russia', flag: '🇷🇺' },
    country2: { id: 'ir', nameAr: 'الجمهورية الإسلامية الإيرانية', nameEn: 'Iran', flag: '🇮🇷' },
    signedYear: 2001,
    upgradedYear: 2024,
    status: 'active_strategic',
    commitmentLevelAr: 'شراكة عسكرية تسليحية وتكنولوجية متقدمة وتأمين ممر النقل الدولي شمال-جنوب (INSTC)',
    commitmentLevelEn: 'Deep Military-Industrial Synergy, Drone/Missile Transfer & INSTC Transit Security',
    strategicPurposeAr: 'تحدي الحصار والعقوبات الاقتصادية الغربية المفروضة على البلدين، تزويد روسيا بمسيرات شاهد الانتحارية وتقنيات الطائرات بدون طيار ومقذوفات المدفعية في حرب أوكرانيا، مقابل تزويد إيران بمقاتلات سوخوي Su-35 المتطورة ومروحيات Mi-28 ومنظومات الدفاع الجوي والدعم التكنولوجي في البرامج الفضائية، وتأمين ممر التجارة الدولي شمال-جنوب عبر بحر قزوين.',
    strategicPurposeEn: 'Bypass Western sanctions, supply Russia with Shahed kamikaze drones and ballistic missile tech in Ukraine, while equipping Iran with modern Su-35 fighters, air defense systems and space launch assistance via INSTC.',
    keyClauses: [
      {
        articleNumber: 'البند التسليحي الأول',
        titleAr: 'توطين إنتاج مسيرات شاهد (غيبران) ونقل تكنولوجيا المقذوفات',
        titleEn: 'Shahed Drone Tech Transfer & Alabuga Manufacturing Complex',
        clauseTextAr: 'نقل تكنولوجيا وتصاميم طائرات شاهد-136/131 المسيرة إلى مجمع ألابوغا الصناعي الروسي في تتارستان لإنتاج آلاف المسيرات محلياً، مع تزويد روسيا بذخائر وصواريخ باليستية قصيرة المدى.',
        clauseTextEn: 'Transfer of Shahed-136 kamikaze drone intellectual property to the Alabuga manufacturing facility in Russia, along with artillery shells and missile guidance units.',
        significanceAr: 'إحداث تحول ميداني تكتيكي واسع في حرب أوكرانيا بالاعتماد على التكنولوجيا الإيرانية المنخفضة التكلفة.',
      },
      {
        articleNumber: 'بند التحديث الجوي والدفاعي',
        titleAr: 'تزويد إيران بمقاتلات Su-35 ومنظومات الدفاع الجوي والفضائي',
        titleEn: 'Su-35 Flanker-E Fighter Jets & Advanced Radar/Space Tech Delivery to Iran',
        clauseTextAr: 'توريد أسراب من مقاتلات السيادة الجوية الروسية سوخوي Su-35، مروحيات هجومية Mi-28، طائرات تدريب متقدمة Yak-130، ومساعدة طهران في إطلاق أقمار استشعار فضائية عالية الدقة (خيام وبارس).',
        clauseTextEn: 'Supplying Iran with Sukhoi Su-35 air superiority fighters, Mi-28 attack helicopters, Yak-130 trainers, and Russian satellite launches (Khayyam) into orbit.',
        significanceAr: 'كسر الحظر الجوي على القوات الجوية الإيرانية وإعادة بناء سلاح الجو بعد عقود من الحصار التسليحي.',
      },
      {
        articleNumber: 'بند ممر التجارة والمصارف',
        titleAr: 'ممر النقل الدولي شمال-جنوب (INSTC) والربط المصرفي الثنائي',
        titleEn: 'INSTC Transport Corridor & Mir-Shetab Interbank Messaging',
        clauseTextAr: 'تطوير خطوط السكك الحديدية والموانئ لربط سانت بطرسبرغ بموانئ إيران على الخليج العربي (بندر عباس وميناء تشابهار) لنقل البضائع إلى الهند دون المرور بأوروبا أو قناة السويس، وربط شبكتي الدفع مير وشتاب.',
        clauseTextEn: 'Developing 7,200 km multi-modal transit network connecting Russia to Arabian Sea/Indian Ocean via Caspian Sea and Iranian ports, linking Mir and Shetab payment systems.',
        significanceAr: 'خلق شريان تجاري استراتيجي محصن كلياً ضد أي سيطرة أو اعتراض بحري غربي.',
      },
    ],
    sharedArsenal: ['Shahed-136 / Geran-2 Drones', 'Su-35 Flanker-E Jets', 'S-300PMU2 & S-400 Tech', 'Yak-130 Trainers', 'Khayyam Spy Satellite'],
    sharedBasesAr: 'ميناء أنزلي وبندر عباس في إيران، وميناء أستراخان الروسي على بحر قزوين',
    coordinates1: [55.7558, 37.6173],
    coordinates2: [35.6892, 51.3890], // Tehran
  },

  // 12. بريطانيا - أوكرانيا
  {
    id: 'gb_ua_security_agreement',
    titleAr: 'اتفاقية التعاون الأمني والدعم الدفاعي الاستراتيجي طويلة الأمد بين بريطانيا وأوكرانيا (10 سنوات)',
    titleEn: 'UK-Ukraine Agreement on Security Cooperation (10-Year Defense Commitment)',
    country1: { id: 'gb', nameAr: 'المملكة المتحدة', nameEn: 'United Kingdom', flag: '🇬🇧' },
    country2: { id: 'ua', nameAr: 'أوكرانيا', nameEn: 'Ukraine', flag: '🇺🇦' },
    signedYear: 2024,
    status: 'active_binding',
    commitmentLevelAr: 'التزام أمني استراتيجي ملزم لمدة 10 سنوات يشمل الردع والتسليح والمساعدة الفورية في حال تجدد العدوان',
    commitmentLevelEn: '10-Year Legally Binding Security Commitment with Rapid Response Mechanism',
    strategicPurposeAr: 'توفير ضمانات أمنية مستدامة وطويلة الأمد لأوكرانيا حتى انضمامها لحلف الناتو، تزويد الجيش الأوكراني بصواريخ ستورم شادو بعيدة المدى، قيادة تحالف القدرات البحرية لتأمين ممر الحبوب في البحر الأسود، ومساعدة كييف في بناء صناعة دفاعية محلية لردع أي غزو روسي مستقبلي.',
    strategicPurposeEn: 'Provide sustainable security guarantees until Ukraine achieves full NATO membership, supply Storm Shadow cruise missiles, lead Maritime Capability Coalition securing Black Sea grain corridor, and co-produce drones and defense materiel.',
    keyClauses: [
      {
        articleNumber: 'بند التشاور والرد السريع (Part 2)',
        titleAr: 'التشاور الإلزامي خلال 24 ساعة وتقديم المساعدة العسكرية الفورية',
        titleEn: 'Mandatory 24-Hour Consultation & Immediate Military Assistance',
        clauseTextAr: 'في حال وقوع أي هجوم عسكري روسي مستقبلي ضد أوكرانيا، تلتزم لندن بالتشاور مع كييف خلال 24 ساعة لتحديد الاحتياجات، وتقديم مساعدة أمنية سريعة ومعدات عسكرية حديثة وفرض عقوبات اقتصادية فورية على المعتدي.',
        clauseTextEn: 'In event of future Russian armed attack against Ukraine, consultations within 24 hours to determine needs, providing swift military equipment, training, and imposing severe economic sanctions.',
        significanceAr: 'أول اتفاقية أمنية ثنائية يتم توقيعها تنفيذاً لإعلان قمة مجموعة السبع في فيلنيوس 2023، ممهدة لاتفاقيات مماثلة مع فرنسا وألمانيا والولايات المتحدة.',
      },
      {
        articleNumber: 'بند التحالف البحري',
        titleAr: 'قيادة تحالف القدرات البحرية لحماية البحر الأسود وإزالة الألغام',
        titleEn: 'Maritime Capability Coalition for Black Sea Security',
        clauseTextAr: 'تزويد البحرية الأوكرانية بسفن كاسحة للألغام، زوارق دورية سريعة، ومسيرات بحرية انتحارية لكسر الحصار الروسي على موانئ أوديسا.',
        clauseTextEn: 'Supplying mine countermeasures vessels, offshore patrol boats, and sea drones to neutralize Russian Black Sea Fleet blockades.',
        significanceAr: 'تمكين أوكرانيا من استعادة الممر التجاري لتصدير الحبوب رغم تفوق الأسطول الروسي.',
      },
      {
        articleNumber: 'بند التصنيع والتدريب',
        titleAr: 'الإنتاج المشترك للأسلحة والتدريب العسكري (عملية إنترفاكس)',
        titleEn: 'Joint Defense Production & Operation Interflex Troop Training',
        clauseTextAr: 'تدريب أكثر من 40 ألف جندي أوكراني على الأراضي البريطانية، وتأسيس منشآت صيانة وتصنيع لشركة BAE Systems البريطانية داخل أوكرانيا لإنتاج مدافع L119 وقطع الغيار.',
        clauseTextEn: 'Training 40,000+ Ukrainian troops via Operation Interflex, establishing BAE Systems repair and manufacturing facilities on Ukrainian soil.',
        significanceAr: 'توطين صيانة السلاح الغربي داخل أوكرانيا دون الحاجة لشحنه إلى بولندا أو رومانيا.',
      },
    ],
    sharedArsenal: ['Storm Shadow Cruise Missiles', 'Challenger 2 Tanks', 'Brimstone Guided Missiles', 'Sea Ceptor Air Defense', 'Autonomous Sea Drones'],
    sharedBasesAr: 'مراكز التدريب في سالزبوري بلين ببريطانيا، ومواقع الدعم اللوجستي في موانئ أوديسا وإقليم لفيف',
    coordinates1: [51.5074, -0.1278], // London
    coordinates2: [50.4501, 30.5234], // Kyiv
  },

  // 13. الجزائر - روسيا
  {
    id: 'dz_ru_strategic_partnership',
    titleAr: 'إعلان الشراكة الاستراتيجية المعمقة والتعاون العسكري والأمني بين الجزائر وروسيا',
    titleEn: 'Declaration on Deep Strategic Partnership Between Algeria and the Russian Federation',
    country1: { id: 'dz', nameAr: 'الجمهورية الجزائرية الديمقراطية الشعبية', nameEn: 'Algeria', flag: '🇩🇿' },
    country2: { id: 'ru', nameAr: 'روسيا الاتحادية', nameEn: 'Russia', flag: '🇷🇺' },
    signedYear: 2001,
    upgradedYear: 2023,
    status: 'active_strategic',
    commitmentLevelAr: 'شراكة عسكرية تسليحية تاريخية عميقة وتنسيق أمني وبحري استراتيجي في غرب البحر المتوسط وشمال أفريقيا',
    commitmentLevelEn: 'Deep Historic Military-Technical Partnership & Western Mediterranean Naval Coordination',
    strategicPurposeAr: 'تأمين التفوق العسكري للجيش الوطني الشعبي الجزائري في المغرب العربي والساحل الأفريقي بالاعتماد على أحدث المنظومات العسكرية الروسية (مقاتلات سوخوي، غواصات كليو الشبحية بصواريخ كاليبر، ومنظومات S-400 وS-300PMU2)، تنسيق سياسات أسواق الطاقة والغاز عبر أوبك بلس ومنتدى الدول المصدرة للغاز (GECF)، وتنفيذ مناورات عسكرية مشتركة لحماية الأمن الإقليمي.',
    strategicPurposeEn: 'Secure Algerian military primacy in the Maghreb and Sahel via advanced Russian defense systems (Su-30MKA, Kilo submarines with Kalibr missiles, S-400), coordinate energy policies in OPEC+ and GECF, and conduct joint naval exercises in the Western Mediterranean.',
    keyClauses: [
      {
        articleNumber: 'البند العسكري الأول',
        titleAr: 'التوريد الحصري للمنظومات الدفاعية المتقدمة ونقل التكنولوجيا',
        titleEn: 'Advanced Defense Systems Supply & Arms Modernization',
        clauseTextAr: 'تزويد القوات المسلحة الجزائرية بأحدث منظومات الدفاع الجوي بعيدة المدى، مقاتلات Su-30MKA وSu-35، دبابات T-90SA، وغواصات كلاس كليو 636 المسلحة بصواريخ كاليبر المجنحة لضرب الأهداف البرية.',
        clauseTextEn: 'Equipping Algerian Armed Forces with S-400/S-300PMU2, Su-30MKA fighters, T-90SA battle tanks, and Kilo-class Project 636 submarines armed with land-attack Kalibr cruise missiles.',
        significanceAr: 'جعل الجزائر القوة البحرية الوحيدة في جنوب البحر الأبيض المتوسط التي تمتلك قدرة توجيه ضربات بصواريخ كروز المجنحة من تحت سطح الماء إلى عمق البر.',
      },
      {
        articleNumber: 'بند المناورات البحرية المشتركة',
        titleAr: 'المناورات التكتيكية المشتركة في البحر الأبيض المتوسط ومكافحة الإرهاب',
        titleEn: 'Joint Naval Maneuvers in Western Mediterranean & Counter-Terrorism',
        clauseTextAr: 'تنفيذ تدريبات بحرية منتظمة بين الأسطول الروسي والقوات البحرية الجزائرية، ورسو السفن الحربية الروسية في ميناء الجزائر وميناء وهران، مع تبادل معلومات الرادار والاستخبارات حول حركة الملاحة.',
        clauseTextEn: 'Routine joint naval maneuvers between Russian fleet and Algerian Navy, Russian port visits in Algiers and Oran, and intelligence sharing over maritime movements.',
        significanceAr: 'توفير موطئ قدم وتسهيلات لوجستية آمنة للأسطول الروسي في الحوض الغربي للبحر المتوسط بمواجهة قواعد الناتو في روتا وجبل طارق.',
      },
      {
        articleNumber: 'بند استقرار أسواق الطاقة',
        titleAr: 'التنسيق الاستراتيجي في منتدى الغاز (GECF) وتحالف أوبك بلس',
        titleEn: 'Strategic Gas & Oil Coordination (GECF & OPEC+)',
        clauseTextAr: 'تنسيق سياسات تسعير وحصص تصدير الغاز الطبيعي والنفط الخام للحفاظ على استقرار الأسواق العالمية ومنع الإضرار بمداخيل الدول المنتجة ذات السيادة.',
        clauseTextEn: 'Close alignment inside Gas Exporting Countries Forum (headquartered during 2024 summit in Algiers) and OPEC+ to safeguard sovereign resource valuation.',
        significanceAr: 'امتلاك النفوذ والتأثير المشترك على إمدادات الطاقة الحيوية للقارة الأوروبية.',
      },
    ],
    sharedArsenal: ['Su-30MKA Flanker', 'Kilo-class 636 Subs with Kalibr', 'S-400 Triumf & Pantsir-S1', 'T-90SA Tanks', 'Iskander-E Ballistic Missiles'],
    sharedBasesAr: 'القاعدة البحرية الرئيسية في المرسى الكبير (وهران)، وقاعدة عين وسارة الجوية',
    coordinates1: [36.7538, 3.0588], // Algiers
    coordinates2: [55.7558, 37.6173], // Moscow
  },

  // 14. السعودية - الولايات المتحدة
  {
    id: 'sa_us_defense_framework',
    titleAr: 'اتفاقية التعاون الدفاعي الاستراتيجي ومظلة الردع الصاروخي الموحد بين السعودية والولايات المتحدة',
    titleEn: 'Saudi Arabia-US Strategic Defense Framework & Integrated Air/Missile Defense',
    country1: { id: 'sa', nameAr: 'المملكة العربية السعودية', nameEn: 'Saudi Arabia', flag: '🇸🇦' },
    country2: { id: 'us', nameAr: 'الولايات المتحدة', nameEn: 'United States', flag: '🇺🇸' },
    signedYear: 1951,
    upgradedYear: 2024,
    status: 'active_strategic',
    commitmentLevelAr: 'شراكة أمنية وعسكرية استراتيجية تاريخية ومظلة تكامل صاروخي مع القيادة المركزية الأمريكية (CENTCOM)',
    commitmentLevelEn: 'Major Strategic Defense Partnership & Integrated Air/Missile Defense with CENTCOM',
    strategicPurposeAr: 'تأمين أمن واستقرار المملكة والمنشآت النفطية الحيوية وممرات الملاحة في البحر الأحمر والخليج العربي، ردع الهجمات الصاروخية والمسيرات الإيرانية والحوثية، تعزيز التفوق الجوي للقوات الجوية الملكية السعودية بمقاتلات F-15 ومنظومات ثاد الدفاعية، ومفاوضات إبرام معاهدة دفاع أمني ملزمة مماثلة لليابان في إطار إعادة هندسة أمن الشرق الأوسط.',
    strategicPurposeEn: 'Secure Saudi territory, vital energy infrastructure and Red Sea/Gulf shipping, deter missile/drone threats from regional proxies, supply advanced THAAD missile defense and F-15 fleet, and advance negotiations for a formal binding mutual defense treaty.',
    keyClauses: [
      {
        articleNumber: 'البند الدفاعي الأول',
        titleAr: 'تكامل الدفاع الجوي والصاروخي الإقليمي الموحد (MEAD)',
        titleEn: 'Middle East Integrated Air & Missile Defense Architecture',
        clauseTextAr: 'دمج رادارات الإنذار المبكر السعودية الأمريكية ومنظومات باتريوت وثاد في شبكة قيادة وسيطرة مشتركة تحت إشراف القيادة المركزية الأمريكية (CENTCOM) لرصد واعتراض الصواريخ الباليستية والمسيرات.',
        clauseTextEn: 'Integration of Saudi and US early-warning radars, Patriot PAC-3 and THAAD batteries into a unified CENTCOM regional air defense architecture.',
        significanceAr: 'اعتراض مئات الصواريخ الباليستية والطائرات بدون طيار التي استهدفت الأراضي السعودية والمنشآت الحيوية بكفاءة قياسية.',
      },
      {
        articleNumber: 'بند توريد السلاح الاستراتيجي',
        titleAr: 'التسلح النوعي المتقدم ومنظومة ثاد (THAAD) ومقاتلات F-15EX',
        titleEn: 'Strategic Weapons Acquisition: THAAD Missile Defense & F-15 Modernization',
        clauseTextAr: 'صفقة شراء منظومة الدفاع الصاروخي للارتفاعات العالية (ثاد) بقيمة 15 مليار دولار، وتحديث أسطول مقاتلات F-15SA وبحث تزويد المملكة بمقاتلات F-15EX ومقاتلات الجيل الخامس.',
        clauseTextEn: '$15B procurement of THAAD terminal high-altitude missile defense batteries, modernization of F-15SA fleet, and next-gen strike capabilities.',
        significanceAr: 'بناء أضخم وأحدث ترسانة دفاع جوي باليستي في العالم العربي قادرة على إسقاط الصواريخ الباليستية خارج الغلاف الجوي.',
      },
      {
        articleNumber: 'بند الشراكة الأمنية المقترحة 2024',
        titleAr: 'مشروع معاهدة الدفاع المشترك والتعاون النووي المدني والذكاء الاصطناعي',
        titleEn: 'Proposed Binding Mutual Defense Pact & Civil Nuclear/AI Partnership',
        clauseTextAr: 'مفاوضات لإبرام معاهدة دفاع مشترك رسمية تتطلب مصادقة مجلس الشيوخ الأمريكي تعتبر أي هجوم على الأراضي السعودية تهديداً للأمن القومي الأمريكي، مع توفير التكنولوجيا النووية المدنية والرقائق المتقدمة.',
        clauseTextEn: 'High-level negotiations for a legally binding mutual defense treaty approved by US Senate, granting non-proliferation civil nuclear tech and advanced AI compute chips.',
        significanceAr: 'إعادة صياغة الهيكل الأمني للشرق الأوسط لعقود قادمة وربط أمن المملكة باتفاقيات دفاعية ملزمة بأعلى تصنيف حليف.',
      },
    ],
    sharedArsenal: ['THAAD Missile Defense', 'Patriot PAC-3 MSE', 'F-15SA Strike Eagle Fleet', 'E-3A Sentry AWACS', 'M1A2S Abrams Tanks'],
    sharedBasesAr: 'قاعدة الأمير سلطان الجوية في الخرج (استضافة القوات الأمريكية)، وقاعدة الملك عبد العزيز البحرية في الجبيل',
    coordinates1: [24.7136, 46.6753], // Riyadh
    coordinates2: [38.8951, -77.0364], // Washington
  },

  // 15. فرنسا - ألمانيا
  {
    id: 'fr_de_aachen_treaty',
    titleAr: 'معاهدة آخن للتعاون والتكامل والدفاع المشترك الفرنسي الألماني',
    titleEn: 'Treaty of Aachen on Franco-German Cooperation and Integration (Mutual Defense Clause)',
    country1: { id: 'fr', nameAr: 'الجمهورية الفرنسية', nameEn: 'France', flag: '🇫🇷' },
    country2: { id: 'de', nameAr: 'جمهورية ألمانيا الاتحادية', nameEn: 'Germany', flag: '🇩🇪' },
    signedYear: 2019,
    status: 'active_binding',
    commitmentLevelAr: 'بند دفاع عسكري مشترك ملزم ومشروع نظام القتال الجوي المستقبلي للجيل السادس (FCAS)',
    commitmentLevelEn: 'Binding Mutual Defense Assistance Clause & 6th-Gen Future Combat Air System (FCAS)',
    strategicPurposeAr: 'تثبيت القيادة المشتركة للاتحاد الأوروبي (المحرك الفرنسي-الألماني)، النص الصريح على واجب الدفاع العسكري المتبادل في حال الاعتداء المسلح، تطوير مقاتلة الجيل السادس الأوروبية المشتركة (FCAS) ودبابة القتال الرئيسية المستقبلية (MGCS) لتحقيق الاستقلالية الاستراتيجية الأوروبية عن الصناعات الدفاعية الأمريكية.',
    strategicPurposeEn: 'Anchor the Franco-German motor of the EU, formalize mutual military defense commitment, and develop sovereign European 6th-generation fighter (FCAS) and main ground combat tank (MGCS).',
    keyClauses: [
      {
        articleNumber: 'المادة 4 (بند الدفاع المشترك)',
        titleAr: 'التضامن العسكري الإلزامي وتقديم كافة وسائل الدعم والقوات عند الاعتداء المسلح',
        titleEn: 'Mutual Military Defense Clause (Article 4)',
        clauseTextAr: 'يقدم الطرفان لبعضهما البعض المساعدة والدعم بكافة الوسائل المتاحة لهما، بما في ذلك القوات المسلحة، في حال حدوث اعتداء مسلح على أراضيهما، وفقاً للمادة 51 من ميثاق الأمم المتحدة والمادة 42(7) من معاهدة الاتحاد الأوروبي.',
        clauseTextEn: 'The two parties shall render each other aid and assistance by all means at their disposal, including armed forces, in the event of an armed attack on their territories.',
        significanceAr: 'إرساء تحالف دفاعي ثنائي صريح ومباشر بين القوتين العظميين في الاتحاد الأوروبي موازٍ لميثاق حلف الناتو.',
      },
      {
        articleNumber: 'بند مجلس الدفاع المشترك',
        titleAr: 'مجلس الدفاع والأمن الفرنسي الألماني المشترك (CFADS)',
        titleEn: 'Franco-German Defense and Security Council',
        clauseTextAr: 'عقد اجتماعات قمة وزارية وعسكرية دورية لتنسيق انتشار القوات، برامج التسلح، وتسيير اللواء الفرنسي الألماني المشترك متعدد الجنسيات.',
        clauseTextEn: 'Regular strategic summits coordinating foreign policy, troop deployments, and steering the joint Franco-German Brigade.',
        significanceAr: 'توحيد الرؤى والسياسات الدفاعية الاستراتيجية لأكبر اقتصادين وقوتين عسكريتين في القارة الأوروبية.',
      },
      {
        articleNumber: 'بند المشاريع التسليحية العملاقة',
        titleAr: 'نظام القتال الجوي المستقبلي (FCAS) والدبابة الأوروبية الرئيسية (MGCS)',
        titleEn: 'FCAS 6th-Gen Fighter Jet & MGCS Main Ground Combat System',
        clauseTextAr: 'تمويل وبناء مقاتلة الجيل السادس الشبحية الموجهة بسرب من الطائرات المسيرة (NGF/FCAS) بقيادة داسو وإيرباص، وتطوير دبابة المستقبل الأوروبية لتحل محل لوكلير وليوبارد 2.',
        clauseTextEn: 'Developing 6th-generation stealth combat aircraft accompanied by remote carrier drones (FCAS/SCAF) and next-generation main battle tank (MGCS).',
        significanceAr: 'حماية السيادة التكنولوجية الأوروبية ومنع الهيمنة المطلقة لمقاتلات F-35 الأمريكية على الأجواء الأوروبية.',
      },
    ],
    sharedArsenal: ['FCAS 6th-Gen Platform (In Development)', 'Eurofighter & Rafale Interoperability', 'Franco-German Brigade', 'A400M Atlas Transports', 'Tiger Attack Helicopters'],
    sharedBasesAr: 'مقر اللواء الفرنسي الألماني في مولهايم (ألمانيا)، ومطار ستراسبورغ العسكري',
    coordinates1: [48.8566, 2.3522], // Paris
    coordinates2: [52.5200, 13.4050], // Berlin
  },

  // 16. مصر - السعودية
  {
    id: 'eg_sa_joint_defense',
    titleAr: 'التحالف الأمني والاستراتيجي واتفاقية التنسيق العسكري المشترك بين مصر والمملكة العربية السعودية',
    titleEn: 'Egypt-Saudi Arabia Strategic Alliance, Joint Defense Coordination & Red Sea Security',
    country1: { id: 'eg', nameAr: 'جمهورية مصر العربية', nameEn: 'Egypt', flag: '🇪🇬' },
    country2: { id: 'sa', nameAr: 'المملكة العربية السعودية', nameEn: 'Saudi Arabia', flag: '🇸🇦' },
    signedYear: 1955,
    upgradedYear: 2016,
    status: 'active_strategic',
    commitmentLevelAr: 'تحالف أمني استراتيجي عربي عضوي وتنسيق عسكري لحماية البحر الأحمر وأمن الخليج (مسافة السكة)',
    commitmentLevelEn: 'Organic Arab Strategic Defense Alliance & Red Sea Maritime Security Coordination',
    strategicPurposeAr: 'تأمين العمق الاستراتيجي العربي، حماية الملاحة والمنافذ البحرية في البحر الأحمر ومضيق باب المندب وقناة السويس، ترسيخ مبدأ أن أمن الخليج جزء لا يتجزأ من الأمن القومي المصري والعكس، إجراء أضخم المناورات العسكرية المشتركة (رعد الشمال، تبوك، وفيصل)، وتنسيق مكافحة الإرهاب وتأمين الحدود المائية والبرية.',
    strategicPurposeEn: 'Safeguard Arab strategic depth, secure Red Sea chokepoints (Bab el-Mandeb & Suez Canal), establish mutual doctrine that Gulf security is indivisible from Egyptian national security, and conduct largest joint military exercises (Tabuk, Faisal, Raad al-Shamal).',
    keyClauses: [
      {
        articleNumber: 'البند الدفاعي الأول',
        titleAr: 'عقيدة الدفاع المشترك ومبدأ أمن الخليج من أمن مصر',
        titleEn: 'Mutual Defense Doctrine: Gulf Security as Egyptian National Security',
        clauseTextAr: 'التزام مصر الصريح بالتدخل العسكري المباشر لحماية أمن واستقرار المملكة ودول الخليج عند تعرضها لأي تهديد عسكري خارجي مباشر (عقيدة مسافة السكة)، مقابل الدعم الاقتصادي والاستثماري واللوجستي الاستراتيجي السعودي.',
        clauseTextEn: 'Explicit commitment of Egyptian military forces to protect Saudi and Gulf security against external aggression, backed by Saudi financial and strategic logistics support.',
        significanceAr: 'تشكيل ركيزة التوازن العسكري الأضخم في العالم العربي بمواجهة التهديدات الإقليمية الإيرانية وغيرها.',
      },
      {
        articleNumber: 'بند أمن البحر الأحمر',
        titleAr: 'مجلس الدول العربية والأفريقية المطلة على البحر الأحمر وخليج عدن',
        titleEn: 'Council of Arab & African Coastal States of the Red Sea & Gulf of Aden',
        clauseTextAr: 'تأسيس مجلس الدول المشاطئة للبحر الأحمر برئاسة الرياض والقاهرة لحماية الممر الملاحي ومنع التدخلات الأجنبية وتسيير دوريات بحرية مشتركة لمكافحة القرصنة وتهريب السلاح.',
        clauseTextEn: 'Establishing the Red Sea littoral council securing maritime lanes between Suez and Bab el-Mandeb, preventing non-regional hostile interference.',
        significanceAr: 'ضمان السيطرة العربية المشتركة الكاملة على أحد أهم شرايين التجارة والطاقة في العالم.',
      },
      {
        articleNumber: 'بند المناورات المشتركة',
        titleAr: 'مناورات تبوك ورعد الشمال وتكامل القوات البرية والجوية والبحرية',
        titleEn: 'Tabuk, Faisal & Sea Breeze Joint Military Maneuvers',
        clauseTextAr: 'تنفيذ تدريبات دورية للقوات البرية (تبوك)، والقوات الجوية (فيصل)، والقوات البحرية (الموج الأحمر) لمحاكاة صد الهجمات الصاروخية والإنزال البحري وحرب المدن.',
        clauseTextEn: 'Periodic joint land, air and naval drills testing inter-operability, coastal defense, air superiority and missile interception.',
        significanceAr: 'أعلى مستوى من التناغم والجاهزية القتالية بين أضخم جيش نظامي عربي (مصر) وأكبر قوة تسليحية مجهزة في الخليج (السعودية).',
      },
    ],
    sharedArsenal: ['Mistral Helicopter Carriers (Egypt)', 'F-15 & Rafale Air Drills', 'Gowind Corvettes', 'Air Defense Interoperability', 'Red Sea Naval Fleet'],
    sharedBasesAr: 'قاعدة برنيس العسكرية على البحر الأحمر (مصر)، وقاعدة الملك فهد الجوية (السعودية)',
    coordinates1: [30.0444, 31.2357], // Cairo
    coordinates2: [24.7136, 46.6753], // Riyadh
  },

  // 17. إسرائيل - الإمارات (الاتفاق الإبراهيمي)
  {
    id: 'il_ae_abraham_accords',
    titleAr: 'الاتفاق الإبراهيمي للسلام والشراكة الاستراتيجية والتنسيق السيبراني بين إسرائيل والإمارات',
    titleEn: 'Abraham Accords Peace Agreement, Strategic Security & Cyber Defense Coordination',
    country1: { id: 'il', nameAr: 'إسرائيل', nameEn: 'Israel', flag: '🇮🇱' },
    country2: { id: 'ae', nameAr: 'دولة الإمارات العربية المتحدة', nameEn: 'UAE', flag: '🇦🇪' },
    signedYear: 2020,
    status: 'active_treaty',
    commitmentLevelAr: 'معاهدة سلام ثنائية وتنسيق أمني سيبراني وتجاري واستثماري واسع النطاق',
    commitmentLevelEn: 'Full Bilateral Peace Treaty, Security Intelligence & Cyber Defense Coordination',
    strategicPurposeAr: 'تطبيع العلاقات الدبلوماسية الكاملة، بناء جبهة تكنولوجية وأمنية مشتركة لمواجهة تهديدات المسيرات والقرصنة السيبرانية في المنطقة، تبادل تكنولوجيا الدفاع الجوي والإنذار المبكر (منظومات باراك ومقلاع داوود ورادارات إيلتا)، وفتح التجارة الثنائية الحرة والاستثمارات المتبادلة في الطاقة والتكنولوجيا الفائقة.',
    strategicPurposeEn: 'Full diplomatic normalization, joint cyber-defense and radar early-warning architecture against regional drone/missile threats, defense procurement (Barak-8), and bilateral free trade.',
    keyClauses: [
      {
        articleNumber: 'المادة 3',
        titleAr: 'التعاون الأمني والاستخباري ومكافحة الإرهاب',
        titleEn: 'Security Coordination, Intelligence & Counter-Terrorism',
        clauseTextAr: 'يتعهد الطرفان بمنع أي أنشطة إرهابية أو معادية تنطلق من أراضيهما ضد الطرف الآخر، وتبادل المعلومات الاستخبارية لمنع التهديدات المشتركة.',
        clauseTextEn: 'Parties commit to preventing hostile or terrorist acts from their soil against each other and share intelligence to eliminate threats.',
        significanceAr: 'إرساء قنوات اتصال وتنسيق أمني واستخباري مباشر بين الأجهزة الأمنية في البلدين.',
      },
      {
        articleNumber: 'بند الدفاع الجوي والسيبراني',
        titleAr: 'تزويد الإمارات بمنظومات الدفاع الصاروخي باراك (Barak-8) ورادارات الإنذار',
        titleEn: 'Air Defense Sales (Barak MX) & Cyber Security Integration',
        clauseTextAr: 'صفقة تزويد دولة الإمارات بمنظومة الدفاع الجوي الإسرائيلية المتقدمة باراك إم إكس (Barak MX) للتصدي للطائرات المسيرة وصواريخ كروز، وتنسيق مباشر بين هيئتي الأمن السيبراني في البلدين.',
        clauseTextEn: 'Procurement of Israeli Barak MX air defense systems by UAE to counter UAVs and cruise missiles, coupled with cyber-defense data exchange.',
        significanceAr: 'أول نشر لمنظومات دفاع جوي إسرائيلية متطورة على أراضي دولة خليجية لمراقبة وتأمين الأجواء الإقليمية.',
      },
      {
        articleNumber: 'المادة 7',
        titleAr: 'اتفاقية الشراكة الاقتصادية الشاملة والتجارة الحرة (CEPA)',
        titleEn: 'Comprehensive Economic Partnership Agreement (CEPA Free Trade)',
        clauseTextAr: 'إلغاء وتخفيض الرسوم الجمركية على 96% من السلع المتبادلة، مما رفع حجم التجارة البينية إلى أكثر من 3 مليارات دولار سنوياً وتدشين استثمارات مشتركة في موانئ دبي وأنابيب النفط والتكنولوجيا الطبية.',
        clauseTextEn: 'Elimination of tariffs on 96% of bilateral goods, driving trade over $3B annually and fostering high-tech joint ventures.',
        significanceAr: 'أسرع نمو تجاري واقتصادي بين إسرائيل وأي دولة عربية في التاريخ الحديث.',
      },
    ],
    sharedArsenal: ['Barak MX Air Defense', 'Elta Early Warning Radars', 'Cyber Intelligence Solutions', 'C-UAS Anti-Drone Systems'],
    sharedBasesAr: 'غرف التنسيق السيبراني المشتركة في أبوظبي وتل أبيب، وموانئ التجارة الحرة',
    coordinates1: [31.7683, 35.2137], // Jerusalem
    coordinates2: [24.4539, 54.3773], // Abu Dhabi
  },
];

/**
 * جلب كافة المعاهدات الثنائية المسجلة
 */
export function getAllBilateralTreaties() {
  return BILATERAL_TREATIES_DB;
}

/**
 * جلب المعاهدات والتحالفات الثنائية الخاصة بدولة معينة
 */
export function getBilateralTreatiesForCountry(countryId) {
  if (!countryId) return [];
  const cid = countryId.toLowerCase().trim();
  const ALIASES = {
    usa: 'us',
    unitedstates: 'us',
    saudi: 'sa',
    ksa: 'sa',
    egypt: 'eg',
    uae: 'ae',
    emirates: 'ae',
    turkey: 'tr',
    turkiye: 'tr',
    russia: 'ru',
    china: 'cn',
    germany: 'de',
    france: 'fr',
    uk: 'gb',
    britain: 'gb',
    japan: 'jp',
    korea: 'kr',
    southkorea: 'kr',
    northkorea: 'kp',
    dprk: 'kp',
    azerbaijan: 'az',
    israel: 'il',
    palestine: 'ps',
    algeria: 'dz',
    pakistan: 'pk',
    ukraine: 'ua',
    belarus: 'by',
    australia: 'au',
  };
  const key = ALIASES[cid] || cid;

  return BILATERAL_TREATIES_DB.filter(
    (t) =>
      t.country1.id === key ||
      t.country2.id === key ||
      (t.additionalMembers && t.additionalMembers.some((m) => m.id === key))
  );
}

/**
 * البحث عن معاهدة بين دولتين محددتين
 */
export function getBilateralTreatyBetween(countryA, countryB) {
  if (!countryA || !countryB) return null;
  const a = countryA.toLowerCase().trim();
  const b = countryB.toLowerCase().trim();
  return (
    BILATERAL_TREATIES_DB.find(
      (t) =>
        (t.country1.id === a && t.country2.id === b) ||
        (t.country1.id === b && t.country2.id === a)
    ) || null
  );
}
