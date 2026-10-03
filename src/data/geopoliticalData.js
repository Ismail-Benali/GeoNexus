export const geopoliticalData = {
  ar: {
    title: "منصة GeoNexus الجيوسياسية",
    subtitle: "النظام الشامل لتحليل الدول، التحالفات، الصراعات، والاقتصاد العالمي حتى 2026",
    searchPlaceholder: "ابحث عن دولة، رئيس، شركة، حزب، أو قائد عسكري...",
    continents: [
      { id: "asia", name: "آسيا", countriesCount: 48 },
      { id: "europe", name: "أوروبا", countriesCount: 44 },
      { id: "africa", name: "أفريقيا", countriesCount: 54 },
      { id: "na", name: "أمريكا الشمالية", countriesCount: 23 },
      { id: "sa", name: "أمريكا الجنوبية", countriesCount: 12 },
      { id: "oceania", name: "أوقيانوسيا", countriesCount: 14 }
    ],
    countries: [
      {
        id: "usa",
        name: "الولايات المتحدة الأمريكية",
        continent: "na",
        capital: "واشنطن العاصمة",
        flag: "🇺🇸",
        coordinates: [38.8951, -77.0364],
        leader: "الرئيس (إدارة 2026)",
        rulingParty: "الحزب الديمقراطي / الجمهوري",
        parties: ["الحزب الديمقراطي", "الحزب الجمهوري", "حزب التحرر"],
        militaryBudget: "916 مليار دولار",
        militaryLeader: "جنرال تشارلز براون (رئيس هيئة الأركان المشتركة)",
        alliances: ["حلف الناتو (NATO)", "أوكوس (AUKUS)", "الخمس عيون (Five Eyes)", "مجموعة السبع (G7)"],
        topCompanies: [
          { name: "آبل (Apple)", sector: "تكنولوجيا", investment: "3.2 تريليون دولار", pressure: "سيطرة تقنية وحوسبة سحابية" },
          { name: "مايكروسوفت (Microsoft)", sector: "برمجيات وأمن سيبراني", investment: "3 تريليون دولار", pressure: "هيمنة الذكاء الاصطناعي والبنية التحتية" },
          { name: "لوكهيد مارتن (Lockheed Martin)", sector: "صناعات دفاعية", investment: "70 مليار دولار", pressure: "مبيعات سلاح عالمية وتوريد للناتو" },
          { name: "جيه بي مورغان (JPMorgan Chase)", sector: "مالية وبنوك", investment: "4.1 تريليون دولار أصول", pressure: "التحكم بالنظام المالي العالمي وسويفت" }
        ],
        corruptionLaundering: {
          moneyLaunderingRisk: "متوسط-منخفض (مع ذلك محطة رئيسية للأموال العابرة للحدود عبر العقارات والملاذات الضريبية مثل ديلاوير)",
          humanTrafficking: "تقديرات بنسخة وزارة الخارجية الأمريكية: وجهة رئيسية وعبور للعمل الجبري والاتجار الجنسي (سنوياً عشرات الآلاف من الضحايا)",
          terrorismThreat: "تهديدات داخلية (أقصى اليمين/اليسار المتطرف ومجموعات الذئاب المنفردة) وتهديدات خارجية مستمرة"
        },
        historicalEvents: [
          "1945: تأسيس النظام الدولي الحديث ونظام بريتون وودز.",
          "1991: تفكك الاتحاد السوفيتي وهيمنة القطب الواحد.",
          "2001: أحداث 11 سبتمبر وإعلان الحرب على الإرهاب.",
          "2024-2026: التنافس الاستراتيجي العالي مع الصين وإدارة صراعات الشرق الأوسط وأوكرانيا."
        ]
      },
      {
        id: "china",
        name: "جمهورية الصين الشعبية",
        continent: "asia",
        capital: "بكين",
        flag: "🇨🇳",
        coordinates: [39.9042, 116.4074],
        leader: "شي جين بينغ (رئيس الدولة والأمين العام)",
        rulingParty: "الحزب الشيوعي الصيني",
        parties: ["الحزب الشيوعي الصيني (الحاكم الوحيد مع 8 أحزاب تابعة صوياً)"],
        militaryBudget: "296 مليار دولار",
        militaryLeader: "تشانغ يوشيا (نائب رئيس اللجنة العسكرية المركزية)",
        alliances: ["منظمة شانغهاي للتعاون (SCO)", "تجمع بريكس (BRICS)", "الشراكة الاقتصادية الإقليمية الشاملة (RCEP)"],
        topCompanies: [
          { name: "تينسنت (Tencent)", sector: "تقنية وألعاب واتصالات", investment: "450 مليار دولار", pressure: "هيمنة رقمية آسيوية وسيطرة على البيانات" },
          { name: "علي بابا (Alibaba)", sector: "تجارة إلكترونية وسحابية", investment: "300 مليار دولار", pressure: "سلاسل الإمداد العالمية" },
          { name: "هواوي (Huawei)", sector: "اتصالات وبنية تحتية 5G/6G", investment: "تغلغل عالمي", pressure: "عقوبات غربية وصراع التقنية السيادية" },
          { name: "مجموعة سي إن بي سي (CNPC)", sector: "طاقة ونفط", investment: "أصول ضخمة", pressure: "أمن الطاقة وطرق الحرير الجديد" }
        ],
        corruptionLaundering: {
          moneyLaunderingRisk: "متوسط (رقابة صارمة على خروج الأموال، لكن توجد شبكات غسيل أموال عبر هونغ كونغ والعملات المشفرة)",
          humanTrafficking: "تحسينات مستمرة في مكافحة الاتجار الداخلي بالبشر، مع تحديات متعلقة بالعمالة الوافدة والزواج القسري",
          terrorismThreat: "حركات انفصالية (تركستان الشرقية / إيغور) وتحديات حدودية إقليمية"
        },
        historicalEvents: [
          "1949: تأسيس جمهورية الصين الشعبية بقيادة ماو تسي تونغ.",
          "1978: سياسة الإصلاح والانفتاح بقيادة دينغ شياوبينغ.",
          "2013: إطلاق مبادرة الحزام والطريق (طريق الحرير الجديد).",
          "2024-2026: تصاعد التوتر حول تايوان والتكامل الاقتصادي لكتلة بريكس."
        ]
      },
      {
        id: "russia",
        name: "روسيا الاتحادية",
        continent: "europe",
        capital: "موسكو",
        flag: "🇷🇺",
        coordinates: [55.7558, 37.6173],
        leader: "فلاديمير بوتين (رئيس الجمهورية)",
        rulingParty: "حزب روسيا الموحدة",
        parties: ["روسيا الموحدة", "الحزب الشيوعي الروسي", "الحزب الليبرالي الديمقراطي"],
        militaryBudget: "حوالي 120-140 مليار دولار (ميزانية معلنة وغير معلنة لعمليات الدفاع)",
        militaryLeader: "فاليري غيراسيموف (رئيس هيئة الأركان العامة)",
        alliances: ["منظمة معاهدة الأمن الجماعي (CSTO)", "بريكس (BRICS)", "رابطة الدول المستقلة (CIS)"],
        topCompanies: [
          { name: "غازبروم (Gazprom)", sector: "طاقة وغاز طبيعي", investment: "سيطرة على شبكة إمدادات أوروبا وأسيا", pressure: "سلاح الطاقة والغاز" },
          { name: "روسنفت (Rosneft)", sector: "نفط وبتروكيماويات", investment: "استثمارات آسيوية ومحلية", pressure: "عمود الاقتصاد الروسي" },
          { name: "روستيخ (Rostec)", sector: "صناعات عسكرية وتكنولوجية", investment: "مجمع صناعي عسكري ضخم", pressure: "تصنيع الأسلحة وسلاسل التوريد الحربية" }
        ],
        corruptionLaundering: {
          moneyLaunderingRisk: "مرتفع (استغلال الأثرياء والمقربين للنظام للملاذات المالية الغربية سابقاً وتحولها لأسواق بديلة)",
          humanTrafficking: "وجهة للعمالة الوافدة من آسيا الوسطى مع وجود مخاطر استغلال وعمل قسري",
          terrorismThreat: "نشاط إرهابي محتمل من خلايا متطرفة في القوقاز ومخاطر أمنية مرتبطة بالصراع الأوكراني"
        },
        historicalEvents: [
          "1991: تفكك الاتحاد السوفيتي وإعلان الاتحاد الروسي.",
          "2000: تولي فلاديمير بوتين السلطة واستعادة نفوذ الدولة.",
          "2022-2026: الأزمة الأوكرانية الكبرى وعزل الاقتصاد الروسي عن المنظومة الغربية وتوجهه نحو الشرق."
        ]
      },
      {
        id: "saudi",
        name: "المملكة العربية السعودية",
        continent: "asia",
        capital: "الرياض",
        flag: "🇸🇦",
        coordinates: [24.7136, 46.6753],
        leader: "الملك سلمان بن عبد العزيز / الأمير محمد بن سلمان (ولي العهد رئيس مجلس الوزراء)",
        rulingParty: "الملكية المطلقة الدستورية (بدون أحزاب سياسية)",
        parties: ["لا توجد أحزاب سياسية رسمية"],
        militaryBudget: "75 مليار دولار",
        militaryLeader: "فريق أول ركن فياض بن حامد الرويلي (رئيس هيئة الأركان العامة)",
        alliances: ["جامعة الدول العربية", "مجلس التعاون الخليجي (GCC)", "أوبك بلس (OPEC+)", "بريكس (منذ 2024)"],
        topCompanies: [
          { name: "أرامكو السعودية (Saudi Aramco)", sector: "طاقة ونفط وبتروكيماويات", investment: "أكبر شركة نفط في العالم (تقييم تريليوني)", pressure: "التحكم بأسواق الطاقة العالمية وسلاسل الإمداد" },
          { name: "سابك (SABIC)", sector: "بتروكيماويات", investment: "استثمارات عالمية ومحلية", pressure: "هيمنة في صناعة البلاستيك والكيماويات" },
          { name: "صندوق الاستثمارات العامة (PIF)", sector: "استثمار سيادي", investment: "أكثر من 900 مليار دولار", pressure: "إعادة هيكلة الاقتصاد المحلي والعالمي (رؤية 2030)" }
        ],
        corruptionLaundering: {
          moneyLaunderingRisk: "منخفض-متوسط (رقابة صارمة من البنك المركزي وهيئة مكافحة الفساد 'نزاهة')",
          humanTrafficking: "جهود مكثفة عبر نظام حماية الواردات والعمالة وقوانين الإقامة الصارمة",
          terrorismThreat: "استهدافات حدودية إقليمية سابقة وتم تصدي لها بنجاح عبر منظومات دفاعية متطورة وأمن استباقي"
        },
        historicalEvents: [
          "1932: توحيد المملكة العربية السعودية على يد الملك عبد العزيز.",
          "1938: اكتشاف النفط وبداية التحول الاقتصادي الهائل.",
          "2016: إطلاق رؤية السعودية 2030 الطموحة.",
          "2024-2026: قيادة التحول الدبلوماسي الإقليمي وانضمامها لمجموعة بريكس وتطوير قطاعات التقنية والذكاء الاصطناعي."
        ]
      },
      {
        id: "uae",
        name: "الإمارات العربية المتحدة",
        continent: "asia",
        capital: "أبوظبي",
        flag: "🇦🇪",
        coordinates: [24.4539, 54.3773],
        leader: "الشيخ محمد بن زايد آل نهيان (رئيس الدولة)",
        rulingParty: "الاتحاد الفيدرالي للإمارات",
        parties: ["لا توجد أحزاب سياسية"],
        militaryBudget: "25 مليار دولار",
        militaryLeader: "فريق قيادة العمليات المشتركة ووزارة الدفاع",
        alliances: ["مجلس التعاون الخليجي", "جامعة الدول العربية", "اتفاقيات أبراهام"],
        topCompanies: [
          { name: "مجموعة أدنوك (ADNOC)", sector: "طاقة وطتروكيماويات", investment: "توسعات عالمية ضخمة", pressure: "إمدادات الطاقة العالمية" },
          { name: "مجموعة موانئ دبي العالمية (DP World)", sector: "لوجستيات وموانئ", investment: "تشغيل عشرات الموانئ حول العالم", pressure: "التحكم بمفاصل التجارة البحرية الدولية" }
        ],
        corruptionLaundering: {
          moneyLaunderingRisk: "متوسط (تم اتخاذ إصلاحات قانونية واسعة وتحديثات تنظيمية للقطاع المالي والعقاري)",
          humanTrafficking: "قوانين صارمة لمكافحة الاتجار بالبشر وحماية حقوق العمالة",
          terrorismThreat: "منظومة أمنية وعبر الحدود عالية الكفاءة"
        },
        historicalEvents: [
          "1971: تأسيس دولة الإمارات العربية المتحدة.",
          "2020: إطلاق مسبار الأمل إلى المريخ وتوقيع اتفاقيات أبراهام والسلام الإقليمي.",
          "2024-2026: التحول لمركز مالي وتكنولوجي عالمي رائد للذكاء الاصطناعي."
        ]
      },
      {
        id: "uk",
        name: "المملكة المتحدة",
        continent: "europe",
        capital: "لندن",
        flag: "🇬🇧",
        coordinates: [51.5074, -0.1278],
        leader: "رئيس الوزراء (إدارة 2026)",
        rulingParty: "حزب العمال / المحافظين",
        parties: ["حزب العمال", "حزب المحافظين", "الديمقراطيون الأحرار"],
        militaryBudget: "74 مليار دولار",
        militaryLeader: "الأدميرال سر توني راداكين (رئيس أركان الدفاع)",
        alliances: ["حلف الناتو (NATO)", "الكومنولث", "الخمس عيون (Five Eyes)"],
        topCompanies: [
          { name: "شل (Shell)", sector: "طاقة ونفط", investment: "عالمية", pressure: "أسواق الطاقة الأوروبية والعالمية" },
          { name: "باي إيه سيستمز (BAE Systems)", sector: "دفاع وصناعات جوية", investment: "عقود عسكرية كبرى", pressure: "توريد الأسلحة للناتو" }
        ],
        corruptionLaundering: {
          moneyLaunderingRisk: "متوسط (لندن تعتبر مركزاً تاريخياً للخدمات المالية والأموال العابرة، مع فرض قوانين عقابية متصاعدة)",
          humanTrafficking: "تحديات الهجرة غير الشرعية والاتجار بالبشر عبر المانش",
          terrorismThreat: "تهديدات إرهابية منخفضة إلى متوسطة (تحت الرقابة الأمنية المشددة MI5/MI6)"
        },
        historicalEvents: [
          "1922: ذروة الإمبراطورية البريطانية.",
          "2020: خروج بريطانيا رسمياً من الاتحاد الأوروبي (بريكست).",
          "2024-2026: إعادة التموضع الجيوسياسي وتوطيد التحالفات الأمنية."
        ]
      },
      {
        id: "germany",
        name: "جمهورية ألمانيا الاتحادية",
        continent: "europe",
        capital: "برلين",
        flag: "🇩🇪",
        coordinates: [52.5200, 13.4050],
        leader: "المستشار الألماني (إدارة 2026)",
        rulingParty: "الحزب الديمقراطي الاجتماعي / التحالف المسيحي",
        parties: ["الحزب الديمقراطي الاجتماعي (SPD)", "التحالف الديمقراطي المسيحي (CDU)", "حزب الخضر"],
        militaryBudget: "68 مليار دولار",
        militaryLeader: "الفريق كارستن بروير (المفتش العام للجيش الألماني)",
        alliances: ["الاتحاد الأوروبي", "حلف الناتو (NATO)", "مجموعة السبع (G7)"],
        topCompanies: [
          { name: "فولكس فاجن (Volkswagen)", sector: "سيارات وصناعة ثقيلة", investment: "عالمية", pressure: "قوة تصنيعية كبرى وصناعة السيارات" },
          { name: "سيمنز (Siemens)", sector: "هندسة وتقنية وبنية تحتية", investment: "عالمية", pressure: "التكنولوجيا الصناعية والقطارات والطاقة" }
        ],
        corruptionLaundering: {
          moneyLaunderingRisk: "منخفض (تشريعات مالية دقيقة وصارمة جداً ضمن الاتحاد الأوروبي)",
          humanTrafficking: "محطة رئيسية للاتجار بالبشر داخل منطقة شنجن، ومكافحة مستمرة من الشرطة الفيدرالية",
          terrorismThreat: "تهديدات إرهابية من أطياف متطرفة مختلفة"
        },
        historicalEvents: [
          "1990: إعادة توحيد ألمانيا الشرقية والغربية.",
          "2002: إطلاق اليورو كعملة رسمية.",
          "2022-2026: إعادة تسليح كبرى (Zeitenwende) وتحول استراتيجي في سياسة الأمن والدفاع."
        ]
      },
      {
        id: "france",
        name: "الجمهورية الفرنسية",
        continent: "europe",
        capital: "باريس",
        flag: "🇫🇷",
        coordinates: [48.8566, 2.3522],
        leader: "إيمانويل ماكرون (رئيس الجمهورية)",
        rulingParty: "النهضة (Renaissance) / ائتلاف الوسط",
        parties: ["النهضة", "التجمع الوطني", "فرنسا الأبية الحزب الاشتراكي"],
        militaryBudget: "53 مليار دولار",
        militaryLeader: "الجنرال تييري بوركارد (رئيس أركان القوات المسلحة)",
        alliances: ["الاتحاد الأوروبي", "حلف الناتو (NATO)", "مجلس الأمن الدولي (عضو دائم)"],
        topCompanies: [
          { name: "إيرباص (Airbus)", sector: "صناعات فضائية وجوية عسكرية ومدنية", investment: "عالمية", pressure: "منافسةبوينغ والسيطرة على سوق الطيران" },
          { name: "توتال إنرجيز (TotalEnergies)", sector: "طاقة ونفط وغاز", investment: "مشاريع عالمية وأفريقية", pressure: "هيمنة طاقوية ونفوذ أفريقي" }
        ],
        corruptionLaundering: {
          moneyLaunderingRisk: "متوسط (تدقيق مالي رفيع المستوى عبر ترفك ضد غسيل الأموال)",
          humanTrafficking: "جهود مكثفة لمكافحة استغلال المهاجرين غير الشرعيين",
          terrorismThreat: "مخاطر إرهابية أمنية داخلية تتعامل معها أجهزة الاستخبارات الفرنسية (DGSI)"
        },
        historicalEvents: [
          "1958: تأسيس الجمهورية الخامسة على يد شارل ديغول.",
          "1960: امتلاك الردع النووي المستقل (قوة الضربة).",
          "2024-2026: قيادة الاستقلال الاستراتيجي الأوروبي والدفاع عن السيادة الصناعية."
        ]
      },
      {
        id: "japan",
        name: "اليابان",
        continent: "asia",
        capital: "طوكيو",
        flag: "🇯🇵",
        coordinates: [35.6762, 139.6503],
        leader: "رئيس الوزراء (إدارة 2026)",
        rulingParty: "الحزب الديمقراطي الليبرالي (LDP)",
        parties: ["الحزب الديمقراطي الليبرالي (LDP)", "حزب كوميتو", "حزب الإصلاح"],
        militaryBudget: "55 مليار دولار",
        militaryLeader: "جنرال يوشيهيدي يوشيدا (رئيس أركان قوات الدفاع الذاتي)",
        alliances: ["تحالف أمني مع الولايات المتحدة", "مجموعة السبع (G7)", "الحوار الأمن الرباعي (Quad)"],
        topCompanies: [
          { name: "تويوتا (Toyota)", sector: "صناعة السيارات", investment: "الأولى عالمياً في الإنتاج", pressure: "سلاسل توريد السيارات وتقنيات الهجين والهيدروجين" },
          { name: "سوني (Sony)", sector: "إلكترونيات وترفيه وتقنية", investment: "عالمية", pressure: "ريادة التكنولوجيا والترفيه الرقمي" }
        ],
        corruptionLaundering: {
          moneyLaunderingRisk: "منخفض جداً (أنظمة مصرفية بالغة الصرامة ورقابة مالية مشددة)",
          humanTrafficking: "جهود مكافحة صارمة مع حماية قانونية مشددة",
          terrorismThreat: "مستويات أمن داخلي مستقرة ومنخفضة المخاطر الإرهابية"
        },
        historicalEvents: [
          "1947: إقرار الدستور السلمي بعد الحرب العالمية الثانية.",
          "1980s: المعجزة الاقتصادية الكبرى وصعود التكنولوجيا اليابانية.",
          "2024-2026: التحول التاريخي نحو تعزيز الإنفاق العسكري والدفاع عن الأمن الآسيوي."
        ]
      },
      {
        id: "india",
        name: "جمهورية الهند",
        continent: "asia",
        capital: "نيودلهي",
        flag: "🇮🇳",
        coordinates: [28.6139, 77.2090],
        leader: "ناريندرا مودي (رئيس الوزراء)",
        rulingParty: "حزب بهاراتيا جاناتا (BJP)",
        parties: ["بهاراتيا جاناتا (BJP)", "المؤتمر الوطني الهندي (INC)", "حزب عام آادمي"],
        militaryBudget: "81 مليار دولار",
        militaryLeader: "جنرال أنيل تشوهان (رئيس أركان الدفاع)",
        alliances: ["تجمع بريكس (BRICS)", "منظمة شانغهاي للتعاون (SCO)", "الحوار الأمني الرباعي (Quad)"],
        topCompanies: [
          { name: "مجموعة ريلاينس (Reliance Industries)", sector: "طاقة واتصالات وتجزئة", investment: "أكبر شركة خاصة في الهند", pressure: "هيمنة اقتصادية واستهلاكية داخلية وعالمية" },
          { name: "مجموعة تاتا (Tata Group)", sector: "تقنية، سيارات، فولاذ، طيران", investment: "إمبراطورية تجارية عالمية (تستحوذ على جاكوار ولاندروفر وغيرها)", pressure: "قوة اقتصادية صناعية عابرة للقارات" }
        ],
        corruptionLaundering: {
          moneyLaunderingRisk: "متوسط-مرتفع (تطبيق قوانين صارمة حديثة مثل PMLA لملاحقة الفساد وغسيل الأموال)",
          humanTrafficking: "تحديات هائلة في مكافحة الاستغلال والعمل القسري بسبب الكثافة السكانية",
          terrorismThreat: "تهديدات إقليمية عابرة للحدود وتطرف محلي"
        },
        historicalEvents: [
          "1947: استقلال الهند وبداية أكبر ديمقراطية في العالم.",
          "1998: إجراء تجارب نووية وإعلانها قوة نووية.",
          "2023-2026: التفوق الديموغرافي كأكبر دولة سكاناً والصعود الاقتصادي لتصبح خامس اقتصاد عالمي ثم ثالث اقتصاد متوقع."
        ]
      },
      {
        id: "brazil",
        name: "جمهورية البرازيل الاتحادية",
        continent: "sa",
        capital: "برازيليا",
        flag: "🇧🇷",
        coordinates: [-15.7975, -47.8919],
        leader: "لويس إيناسيو لولا دا سيلفا (رئيس الجمهورية)",
        rulingParty: "حزب العمال (PT)",
        parties: ["حزب العمال (PT)", "الحزب الليبرالي (PL)", "حزب الحركة الديمقراطية البرازيلية"],
        militaryBudget: "23 مليار دولار",
        militaryLeader: "تومس مينيجوتي ريبييرو (قائد القوات المسلحة)",
        alliances: ["تجمع بريكس (BRICS)", "السوق المشتركة لمخاسر أمريكا الجنوبية (Mercosur)"],
        topCompanies: [
          { name: "بتروبراس (Petrobras)", sector: "طاقة ونفط", investment: "استخراج المياه العميقة", pressure: "عملاق النفط اللاتيني وأمن الطاقة" },
          { name: "فالي (Vale)", sector: "تعدين وحديد", investment: "أكبر منتج للحديد الخام عالمياً", pressure: "التحكم بسلاسل المعادن الأساسية للصناعة" }
        ],
        corruptionLaundering: {
          moneyLaunderingRisk: "مرتفع (وجود شبكات غسيل أموال مرتبطة بتجارة المخدرات والاقتصاد غير الرسمي)",
          humanTrafficking: "مكافحة مستمرة للعمل القسري في المناطق النائية وتجارة البشر",
          terrorismThreat: "منخفض نسبياً خارج إطار الجريمة المنظمة"
        },
        historicalEvents: [
          "1985: العودة للحكم الديمقراطي.",
          "2010s: استضافة كأس العالم وأولمبياد ريو والصعود ضمن مجموعة بريكس.",
          "2024-2026: استضافة قمة المناخ وانتعاش الدبلوماسية المستقلة."
        ]
      },
      {
        id: "southafrica",
        name: "جمهورية جنوب أفريقيا",
        continent: "africa",
        capital: "بريتوريا / كيب تاون",
        flag: "🇿🇦",
        coordinates: [-25.7479, 28.2293],
        leader: "سيريل رامافوزا (رئيس الجمهورية)",
        rulingParty: "المؤتمر الوطني الأفريقي (ANC)",
        parties: ["المؤتمر الوطني الأفريقي (ANC)", "تحالف الديمقراطية (DA)", "المناضلون من أجل الحرية الاقتصادية (EFF)"],
        militaryBudget: "3.5 مليار دولار",
        militaryLeader: "الفريق راندزياني مابوها (رئيس أركان الدفاع)",
        alliances: ["تجمع بريكس (BRICS)", "الاتحاد الأفريقي (AU)", "مجموعة السادسة عشر"],
        topCompanies: [
          { name: "ساسول (Sasol)", sector: "طاقة وكيماويات اصطناعية", investment: "تكنولوجيا تحويل الفحم/الغاز إلى سوائل", pressure: "ريادة تكنولوجية طاقوية في أفريقيا" },
          { name: "مجموعة أنجلو أمريكان (Anglo American)", sector: "تعدين ومعادن ثمينة", investment: "عالمية", pressure: "السيطرة على مناجم الذهب والماس والبلاتين" }
        ],
        corruptionLaundering: {
          moneyLaunderingRisk: "مرتفع (تحديات في الرقابة المالية أدت لإدراجها سابقاً في القوائم الرمادية مع إصلاحات مستمرة)",
          humanTrafficking: "وجهة وعبور للاتجار بالبشر في جنوب وشرق أفريقيا",
          terrorismThreat: "مخاطر أمنية محلية وجريمة منظمة عابرة للحدود"
        },
        historicalEvents: [
          "1994: نهاية نظام الفصل العنصري (Apartheid) وانتخاب نيلسون مانديلا.",
          "2010: أول مونديال في القارة السمراء.",
          "2024-2026: قيادة الدعاوى القانونية الدولية والصعود الدبلوماسي الأفريقي."
        ]
      }
    ],
    alliancesList: [
      { name: "حلف الناتو (NATO)", members: ["الولايات المتحدة", "المملكة المتحدة", "ألمانيا", "فرنسا", "تركيا", "وآخرون"], focus: "دفاعي عسكري أطلسي" },
      { name: "تجمع بريكس (BRICS)", members: ["البرازيل", "روسيا", "الهند", "الصين", "جنوب أفريقيا", "السعودية", "الإمارات", "وآخرون"], focus: "اقتصادي مالي استراتيجي متعدد الأقطاب" },
      { name: "منظمة شانغهاي للتعاون (SCO)", members: ["الصين", "روسيا", "الهند", "باكستان", "إيران", "وآخرون"], focus: "أمن إقليمي وعكس النفوذ الغربي" }
    ],
    newsTicker: [
      "عاجل [2026]: قمة بريكس تناقش تعزيز العملات المحلية في التبادل التجاري وتوسيع التحالفات الاقتصادية.",
      "تقرير جيوسياسي: نمو ميزانيات الدفاع العالمية بنسبة 6.8% وسط توترات إقليمية متصاعدة.",
      "تحديث أمني: تعزيز اتفاقيات الأمن السيبراني بين دول الخليج والشركاء الدوليين.",
      "اقتصاد الطاقة: أوبك بلس تؤكد التزامها باستقرار أسواق النفط وسط تقلبات الطلب العالمي."
    ]
  },
  en: {
    title: "GeoNexus Geopolitical Platform",
    subtitle: "The Comprehensive System for Analyzing Nations, Alliances, Conflicts, and Global Economy up to 2026",
    searchPlaceholder: "Search country, president, company, political party, or military commander...",
    continents: [
      { id: "asia", name: "Asia", countriesCount: 48 },
      { id: "europe", name: "Europe", countriesCount: 44 },
      { id: "africa", name: "Africa", countriesCount: 54 },
      { id: "na", name: "North America", countriesCount: 23 },
      { id: "sa", name: "South America", countriesCount: 12 },
      { id: "oceania", name: "Oceania", countriesCount: 14 }
    ],
    countries: [
      {
        id: "usa",
        name: "United States of America",
        continent: "na",
        capital: "Washington D.C.",
        flag: "🇺🇸",
        coordinates: [38.8951, -77.0364],
        leader: "President (2026 Administration)",
        rulingParty: "Democratic / Republican Party",
        parties: ["Democratic Party", "Republican Party", "Libertarian Party"],
        militaryBudget: "$916 Billion",
        militaryLeader: "Gen. Charles Q. Brown Jr. (Chairman of the Joint Chiefs of Staff)",
        alliances: ["NATO", "AUKUS", "Five Eyes", "G7"],
        topCompanies: [
          { name: "Apple", sector: "Technology", investment: "$3.2 Trillion", pressure: "Tech dominance and cloud infrastructure" },
          { name: "Microsoft", sector: "Software & Cybersecurity", investment: "$3.0 Trillion", pressure: "AI leadership and enterprise infrastructure" },
          { name: "Lockheed Martin", sector: "Defense & Aerospace", investment: "$70 Billion", pressure: "Global arms sales and NATO supply" },
          { name: "JPMorgan Chase", sector: "Banking & Finance", investment: "$4.1 Trillion Assets", pressure: "Global financial system and SWIFT dominance" }
        ],
        corruptionLaundering: {
          moneyLaunderingRisk: "Medium-Low (Major hub for cross-border capital via real estate and tax havens like Delaware)",
          humanTrafficking: "State Dept estimates: Major destination and transit for forced labor and sex trafficking (tens of thousands annually)",
          terrorismThreat: "Domestic threats (extremism/lone wolves) and ongoing international counter-terrorism focus"
        },
        historicalEvents: [
          "1945: Creation of the modern international order and Bretton Woods system.",
          "1991: Collapse of the Soviet Union and Unipolar moment.",
          "2001: 9/11 attacks and declaration of the War on Terror.",
          "2024-2026: Strategic competition with China and management of Middle East & Ukraine crises."
        ]
      },
      {
        id: "china",
        name: "People's Republic of China",
        continent: "asia",
        capital: "Beijing",
        flag: "🇨🇳",
        coordinates: [39.9042, 116.4074],
        leader: "Xi Jinping (President & General Secretary)",
        rulingParty: "Chinese Communist Party (CCP)",
        parties: ["Chinese Communist Party (Sole ruling party with 8 compliant satellite parties)"],
        militaryBudget: "$296 Billion",
        militaryLeader: "Zhang Youxia (Vice Chairman of the Central Military Commission)",
        alliances: ["Shanghai Cooperation Organisation (SCO)", "BRICS", "Regional Comprehensive Economic Partnership (RCEP)"],
        topCompanies: [
          { name: "Tencent", sector: "Tech, Gaming & Communications", investment: "$450 Billion", pressure: "Asian digital dominance and data control" },
          { name: "Alibaba", sector: "E-Commerce & Cloud", investment: "$300 Billion", pressure: "Global supply chains" },
          { name: "Huawei", sector: "Telecom & 5G/6G Infrastructure", investment: "Global reach", pressure: "Western sanctions and sovereign tech rivalry" },
          { name: "CNPC", sector: "Energy & Oil", investment: "Massive assets", pressure: "Energy security and New Silk Road" }
        ],
        corruptionLaundering: {
          moneyLaunderingRisk: "Medium (Strict capital controls, though laundering networks exist through Hong Kong and crypto)",
          humanTrafficking: "Continuous improvement in internal trafficking combat, challenges in migrant labor",
          terrorismThreat: "Separatist movements (East Turkistan/Uyghur) and regional border challenges"
        },
        historicalEvents: [
          "1949: Establishment of the PRC under Mao Zedong.",
          "1978: Reform and Opening-up policy under Deng Xiaoping.",
          "2013: Launch of the Belt and Road Initiative (New Silk Road).",
          "2024-2026: Escalating tensions around Taiwan and BRICS economic integration."
        ]
      },
      {
        id: "russia",
        name: "Russian Federation",
        continent: "europe",
        capital: "Moscow",
        flag: "🇷🇺",
        coordinates: [55.7558, 37.6173],
        leader: "Vladimir Putin (President)",
        rulingParty: "United Russia",
        parties: ["United Russia", "Communist Party of the Russian Federation", "Liberal Democratic Party"],
        militaryBudget: "Approx. $120-$140 Billion (declared and defense-linked outlays)",
        militaryLeader: "Valery Gerasimov (Chief of the General Staff)",
        alliances: ["Collective Security Treaty Organization (CSTO)", "BRICS", "Commonwealth of Independent States (CIS)"],
        topCompanies: [
          { name: "Gazprom", sector: "Energy & Natural Gas", investment: "Control over European/Asian pipeline networks", pressure: "Energy and gas weaponization" },
          { name: "Rosneft", sector: "Oil & Petrochemicals", investment: "Asian and domestic investments", pressure: "Backbone of Russian economy" },
          { name: "Rostec", sector: "Defense & Technology", investment: "Massive military-industrial complex", pressure: "Arms manufacturing and war supply chains" }
        ],
        corruptionLaundering: {
          moneyLaunderingRisk: "High (Historical exploitation of Western financial havens by elites, now shifting to alternative markets)",
          humanTrafficking: "Destination for migrant labor from Central Asia with risks of exploitation and forced labor",
          terrorismThreat: "Potential extremist cells in the Caucasus and security risks linked to the Ukraine conflict"
        },
        historicalEvents: [
          "1991: Dissolution of the Soviet Union and declaration of the Russian Federation.",
          "2000: Vladimir Putin takes office and restores state power.",
          "2022-2026: Major Ukraine crisis, decoupling of Russian economy from the West and pivot to the East."
        ]
      },
      {
        id: "saudi",
        name: "Kingdom of Saudi Arabia",
        continent: "asia",
        capital: "Riyadh",
        flag: "🇸🇦",
        coordinates: [24.7136, 46.6753],
        leader: "King Salman bin Abdulaziz / Prince Mohammed bin Salman (Crown Prince & Prime Minister)",
        rulingParty: "Absolute Monarchy (No political parties)",
        parties: ["No official political parties"],
        militaryBudget: "$75 Billion",
        militaryLeader: "Gen. Fayyad bin Hamed Al-Ruwaili (Chief of the General Staff)",
        alliances: ["Arab League", "Gulf Cooperation Council (GCC)", "OPEC+", "BRICS (since 2024)"],
        topCompanies: [
          { name: "Saudi Aramco", sector: "Energy, Oil & Petrochemicals", investment: "Worlds largest oil company (Trillion-dollar valuation)", pressure: "Global energy market and supply chain control" },
          { name: "SABIC", sector: "Petrochemicals", investment: "Global and domestic investments", pressure: "Dominance in plastics and chemical manufacturing" },
          { name: "Public Investment Fund (PIF)", sector: "Sovereign Wealth", investment: "Over $900 Billion", pressure: "Domestic and global economic restructuring (Vision 2030)" }
        ],
        corruptionLaundering: {
          moneyLaunderingRisk: "Low-Medium (Rigorous oversight by Central Bank and Nazaha anti-corruption authority)",
          humanTrafficking: "Intensive efforts via import protection, labor laws, and strict residency regulations",
          terrorismThreat: "Prior regional border threats successfully neutralized via advanced defense systems and proactive security"
        },
        historicalEvents: [
          "1932: Unification of the Kingdom of Saudi Arabia by King Abdulaziz.",
          "1938: Discovery of oil and start of massive economic transformation.",
          "2016: Launch of the ambitious Saudi Vision 2030.",
          "2024-2026: Leading regional diplomatic shifts, joining BRICS, and advancing AI and tech sectors."
        ]
      },
      {
        id: "uae",
        name: "United Arab Emirates",
        continent: "asia",
        capital: "Abu Dhabi",
        flag: "🇦🇪",
        coordinates: [24.4539, 54.3773],
        leader: "Sheikh Mohamed bin Zayed Al Nahyan (President)",
        rulingParty: "Federal Emirate Union",
        parties: ["No political parties"],
        militaryBudget: "$25 Billion",
        militaryLeader: "Joint Operations Command & Ministry of Defense",
        alliances: ["Gulf Cooperation Council", "Arab League", "Abraham Accords"],
        topCompanies: [
          { name: "ADNOC Group", sector: "Energy & Petrochemicals", investment: "Massive global expansions", pressure: "Global energy supplies" },
          { name: "DP World", sector: "Logistics & Ports", investment: "Operating dozens of global ports", pressure: "Control over international maritime trade chokepoints" }
        ],
        corruptionLaundering: {
          moneyLaunderingRisk: "Medium (Extensive legal reforms and financial/real estate regulatory updates)",
          humanTrafficking: "Strict anti-trafficking laws and worker rights protections",
          terrorismThreat: "High-efficiency domestic and cross-border security framework"
        },
        historicalEvents: [
          "1971: Establishment of the United Arab Emirates.",
          "2020: Hope Probe launch to Mars and signing of the Abraham Accords.",
          "2024-2026: Transition into a leading global financial and AI technology hub."
        ]
      },
      {
        id: "uk",
        name: "United Kingdom",
        continent: "europe",
        capital: "London",
        flag: "🇬🇧",
        coordinates: [51.5074, -0.1278],
        leader: "Prime Minister (2026 Administration)",
        rulingParty: "Labour / Conservative Party",
        parties: ["Labour Party", "Conservative Party", "Liberal Democrats"],
        militaryBudget: "$74 Billion",
        militaryLeader: "Adm. Sir Tony Radakin (Chief of the Defence Staff)",
        alliances: ["NATO", "Commonwealth", "Five Eyes"],
        topCompanies: [
          { name: "Shell", sector: "Energy & Oil", investment: "Global", pressure: "European and global energy markets" },
          { name: "BAE Systems", sector: "Defense & Aerospace", investment: "Major military contracts", pressure: "NATO arms supply" }
        ],
        corruptionLaundering: {
          moneyLaunderingRisk: "Medium (London remains a historical financial services and cross-border capital hub with escalating punitive laws)",
          humanTrafficking: "Illegal migration and cross-Channel trafficking challenges",
          terrorismThreat: "Low-to-medium terrorist threats (under rigorous MI5/MI6 security watch)"
        },
        historicalEvents: [
          "1922: Peak of the British Empire.",
          "2020: Official exit from the European Union (Brexit).",
          "2024-2026: Geopolitical repositioning and strengthening of security alliances."
        ]
      },
      {
        id: "germany",
        name: "Federal Republic of Germany",
        continent: "europe",
        capital: "Berlin",
        flag: "🇩🇪",
        coordinates: [52.5200, 13.4050],
        leader: "Chancellor (2026 Administration)",
        rulingParty: "SPD / Christian Democratic Alliance",
        parties: ["Social Democratic Party (SPD)", "Christian Democratic Union (CDU)", "Alliance 90/The Greens"],
        militaryBudget: "$68 Billion",
        militaryLeader: "Gen. Carsten Breuer (Inspector General of the Bundeswehr)",
        alliances: ["European Union", "NATO", "G7"],
        topCompanies: [
          { name: "Volkswagen", sector: "Automotive & Heavy Industry", investment: "Global", pressure: "Major manufacturing power and automotive sector" },
          { name: "Siemens", sector: "Engineering, Tech & Infrastructure", investment: "Global", pressure: "Industrial tech, trains, and energy systems" }
        ],
        corruptionLaundering: {
          moneyLaunderingRisk: "Low (Precise and extremely strict EU financial regulations)",
          humanTrafficking: "Major Schengen hub for human trafficking with continuous federal police enforcement",
          terrorismThreat: "Threats from diverse extremist spectrums"
        },
        historicalEvents: [
          "1990: Reunification of East and West Germany.",
          "2002: Introduction of the Euro as official currency.",
          "2022-2026: Major re-arming (Zeitenwende) and strategic security/defense policy shift."
        ]
      },
      {
        id: "france",
        name: "French Republic",
        continent: "europe",
        capital: "Paris",
        flag: "🇫🇷",
        coordinates: [48.8566, 2.3522],
        leader: "Emmanuel Macron (President)",
        rulingParty: "Renaissance / Centrist Coalition",
        parties: ["Renaissance", "National Rally", "La France Insoumise", "Socialist Party"],
        militaryBudget: "$53 Billion",
        militaryLeader: "Gen. Thierry Burkhard (Chief of the Defence Staff)",
        alliances: ["European Union", "NATO", "UN Security Council (Permanent Member)"],
        topCompanies: [
          { name: "Airbus", sector: "Aerospace & Defense", investment: "Global", pressure: "Boeing rivalry and aviation market control" },
          { name: "TotalEnergies", sector: "Energy, Oil & Gas", investment: "Global & African projects", pressure: "Energy dominance and African influence" }
        ],
        corruptionLaundering: {
          moneyLaunderingRisk: "Medium (High-level financial vetting via TRACFIN anti-money laundering agency)",
          humanTrafficking: "Intensive efforts to combat illegal migrant exploitation",
          terrorismThreat: "Internal security terrorism risks managed by French intelligence (DGSI)"
        },
        historicalEvents: [
          "1958: Establishment of the Fifth Republic under Charles de Gaulle.",
          "1960: Acquisition of independent nuclear deterrence (Force de Frappe).",
          "2024-2026: Leading European strategic autonomy and defending industrial sovereignty."
        ]
      },
      {
        id: "japan",
        name: "Japan",
        continent: "asia",
        capital: "Tokyo",
        flag: "🇯🇵",
        coordinates: [35.6762, 139.6503],
        leader: "Prime Minister (2026 Administration)",
        rulingParty: "Liberal Democratic Party (LDP)",
        parties: ["Liberal Democratic Party (LDP)", "Komeito", "Innovation Party"],
        militaryBudget: "$55 Billion",
        militaryLeader: "Gen. Yoshihide Yoshida (Chief of Staff, Joint Staff)",
        alliances: ["US Security Alliance", "G7", "Quadrilateral Security Dialogue (Quad)"],
        topCompanies: [
          { name: "Toyota", sector: "Automotive", investment: "World's largest producer", pressure: "Automotive supply chains, hybrid & hydrogen tech" },
          { name: "Sony", sector: "Electronics, Entertainment & Tech", investment: "Global", pressure: "Tech and digital entertainment leadership" }
        ],
        corruptionLaundering: {
          moneyLaunderingRisk: "Very Low (Extremely strict banking systems and tight financial controls)",
          humanTrafficking: "Strict counter-efforts with robust legal protection",
          terrorismThreat: "Stable internal security and very low terrorist risk"
        },
        historicalEvents: [
          "1947: Adoption of the pacifist postwar Constitution.",
          "1980s: Economic miracle and rise of Japanese technology.",
          "2024-2026: Historical pivot towards enhanced military spending and Asian security defense."
        ]
      },
      {
        id: "india",
        name: "Republic of India",
        continent: "asia",
        capital: "New Delhi",
        flag: "🇮🇳",
        coordinates: [28.6139, 77.2090],
        leader: "Narendra Modi (Prime Minister)",
        rulingParty: "Bharatiya Janata Party (BJP)",
        parties: ["Bharatiya Janata Party (BJP)", "Indian National Congress (INC)", "Aam Aadmi Party"],
        militaryBudget: "$81 Billion",
        militaryLeader: "Gen. Anil Chauhan (Chief of Defence Staff)",
        alliances: ["BRICS", "Shanghai Cooperation Organisation (SCO)", "Quad"],
        topCompanies: [
          { name: "Reliance Industries", sector: "Energy, Telecom & Retail", investment: "India's largest private corporation", pressure: "Domestic and global consumer/economic dominance" },
          { name: "Tata Group", sector: "Tech, Automotive, Steel, Aviation", investment: "Global conglomerate (owns Jaguar Land Rover, etc.)", pressure: "Cross-continental industrial economic power" }
        ],
        corruptionLaundering: {
          moneyLaunderingRisk: "Medium-High (Implementation of modern rigorous laws like PMLA to target corruption and money laundering)",
          humanTrafficking: "Massive challenges in combatting exploitation and forced labor due to population density",
          terrorismThreat: "Cross-border regional threats and domestic extremism"
        },
        historicalEvents: [
          "1947: Indian Independence, beginning of the world's largest democracy.",
          "1998: Nuclear tests, declaring India a nuclear-armed state.",
          "2023-2026: Demographic peak as world's most populous nation and economic ascent to 5th/3rd global economy."
        ]
      },
      {
        id: "brazil",
        name: "Federative Republic of Brazil",
        continent: "sa",
        capital: "Brasília",
        flag: "🇧🇷",
        coordinates: [-15.7975, -47.8919],
        leader: "Luiz Inácio Lula da Silva (President)",
        rulingParty: "Workers' Party (PT)",
        parties: ["Workers' Party (PT)", "Liberal Party (PL)", "Brazilian Democratic Movement"],
        militaryBudget: "$23 Billion",
        militaryLeader: "Tomás Miguel Miné Ribeiro (Armed Forces Commander)",
        alliances: ["BRICS", "Mercosur"],
        topCompanies: [
          { name: "Petrobras", sector: "Energy & Oil", investment: "Deepwater extraction", pressure: "Latin American oil giant and energy security" },
          { name: "Vale", sector: "Mining & Iron", investment: "Worlds largest iron ore producer", pressure: "Control over fundamental industrial metal supply chains" }
        ],
        corruptionLaundering: {
          moneyLaunderingRisk: "High (Existence of money laundering networks linked to drug trafficking and informal economy)",
          humanTrafficking: "Ongoing combat against forced labor in remote regions and human trafficking",
          terrorismThreat: "Relatively low outside organized crime contexts"
        },
        historicalEvents: [
          "1985: Return to democratic rule.",
          "2010s: Hosting World Cup & Rio Olympics and rise within BRICS.",
          "2024-2026: Hosting climate summits and resurgence of independent diplomacy."
        ]
      },
      {
        id: "southafrica",
        name: "Republic of South Africa",
        continent: "africa",
        capital: "Pretoria / Cape Town",
        flag: "🇿🇦",
        coordinates: [-25.7479, 28.2293],
        leader: "Cyril Ramaphosa (President)",
        rulingParty: "African National Congress (ANC)",
        parties: ["African National Congress (ANC)", "Democratic Alliance (DA)", "Economic Freedom Fighters (EFF)"],
        militaryBudget: "$3.5 Billion",
        militaryLeader: "Lt. Gen. Rudzani Maphwanya (Chief of Defence Force)",
        alliances: ["BRICS", "African Union (AU)"],
        topCompanies: [
          { name: "Sasol", sector: "Energy & Synthetic Chemicals", investment: "Coal-to-liquids/gas-to-liquids tech", pressure: "Energy technology leadership in Africa" },
          { name: "Anglo American", sector: "Mining & Precious Metals", investment: "Global", pressure: "Control over gold, diamond, and platinum mines" }
        ],
        corruptionLaundering: {
          moneyLaunderingRisk: "High (Financial oversight challenges leading to prior grey-listing with ongoing structural reforms)",
          humanTrafficking: "Destination and transit for human trafficking in Southern and Eastern Africa",
          terrorismThreat: "Domestic security risks and cross-border organized crime"
        },
        historicalEvents: [
          "1994: End of Apartheid system and election of Nelson Mandela.",
          "2010: First FIFA World Cup hosted on the African continent.",
          "2024-2026: Leading international legal proceedings and African diplomatic ascent."
        ]
      }
    ],
    alliancesList: [
      { name: "NATO", members: ["United States", "United Kingdom", "Germany", "France", "Turkey", "and others"], focus: "Atlantic military defense" },
      { name: "BRICS", members: ["Brazil", "Russia", "India", "China", "South Africa", "Saudi Arabia", "UAE", "and others"], focus: "Multipolar economic, financial & strategic cooperation" },
      { name: "Shanghai Cooperation Organisation (SCO)", members: ["China", "Russia", "India", "Pakistan", "Iran", "and others"], focus: "Regional security and balancing Western influence" }
    ],
    newsTicker: [
      "Breaking [2026]: BRICS summit discusses boosting local currencies in trade and expanding economic alliances.",
      "Geopolitical Report: Global defense budgets grow by 6.8% amid escalating regional tensions.",
      "Security Update: Strengthening cybersecurity agreements between Gulf nations and international partners.",
      "Energy Economy: OPEC+ reaffirms commitment to oil market stability amid global demand fluctuations."
    ]
  }
};
