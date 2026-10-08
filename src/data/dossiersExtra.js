/**
 * قاعدة البيانات الموسعة للملفات الاستخباراتية التفصيلية للدول
 * Comprehensive Sovereign Dossiers Extension (Corporate Champions, Risks, Military Leadership & Events)
 */

export const EXTRA_DOSSIERS = {
  // مصر
  eg: {
    parties: {
      ar: ['حزب مستقبل وطن (الأغلبية)', 'حزب الشعب الجمهوري', 'حزب الوفد الجديد', 'حزب حماة الوطن'],
      en: ['Nation\'s Future Party (Majority)', 'Republican People\'s Party', 'New Wafd Party', 'Homeland Protectors'],
    },
    military: { ar: 'الفريق أول عبد المجيد صقر (وزير الدفاع) ورئيس أركان حرب القوات المسلحة', en: 'Gen. Abdel Megeed Saqr (Minister of Defence) & Armed Forces Chief of Staff' },
    companies: [
      { name: 'Suez Canal Authority', ar: 'هيئة قناة السويس', sector: 'ممرات ولوجستيات', sectorEn: 'Maritime Logistics', pressure: 'أهم شريان ملاحي يربط آسيا بأوروبا ويتحكم بـ 12% من التجارة العالمية', pressureEn: 'Critical chokepoint controlling ~12% of global seaborne trade' },
      { name: 'EGPC', ar: 'الهيئة المصرية العامة للبترول', sector: 'طاقة وهيدروكربونات', sectorEn: 'Energy & Hydrocarbons', pressure: 'اكتشافات حقل ظهر وحقول الغاز بالبحر المتوسط ومنتدى غاز شرق المتوسط', pressureEn: 'Zohr gas field operator and East Med Gas Forum anchor' },
      { name: 'Orascom Construction', ar: 'أوراسكوم للإنشاءات', sector: 'بنية تحتية ودفاع مدني', sectorEn: 'Infrastructure & Engineering', pressure: 'تنفيذ المشروعات القومية الكبرى والقطار الكهربائي السريع والموانئ', pressureEn: 'Mega-infrastructure execution including high-speed rail and ports' },
      { name: 'Telecom Egypt', ar: 'المصرية للاتصالات (WE)', sector: 'كابلات بيانات واتصالات', sectorEn: 'Submarine Data Cables', pressure: 'نقطة الربط المحورية لـ 17 كابلاً بحرياً عابراً للقارات لنقل الإنترنت', pressureEn: 'Strategic hub for 17 transcontinental internet submarine cables' },
    ],
    risk: {
      laundering: { ar: 'متوسط — جهود تنظيمية صارمة عبر وحدة مكافحة غسل الأموال وتمويل الإرهاب', en: 'Medium — robust regulatory oversight via the AML/CTF Financial Intelligence Unit' },
      trafficking: { ar: 'متوسط — ضبط حازم للهجرة غير الشرعية نحو المتوسط منذ 2016', en: 'Medium — strict border enforcement stopping illegal maritime crossings since 2016' },
      terrorism: { ar: 'منخفض إلى متوسط — تحييد شامل لبؤر شمال سيناء واستقرار أمني عام', en: 'Low to Medium — comprehensive neutralization of Sinai insurgency & internal stability' },
    },
    events: {
      ar: ['1952: ثورة 23 يوليو وتأسيس الجمهورية', '1973: حرب أكتوبر واستعادة سيناء', '1979: معاهدة السلام التاريخية', '2015: افتتاح تفريعة قناة السويس الجديدة', '2023–2026: استضافة مفاوضات الهدنة الإقليمية وملف سد النهضة'],
      en: ['1952: 23 July Revolution & Republic', '1973: October War & Sinai liberation', '1979: Historic Peace Treaty', '2015: New Suez Canal expansion opened', '2023–2026: Regional ceasefire mediation & Nile dam diplomacy'],
    },
  },

  // تركيا
  tr: {
    parties: {
      ar: ['حزب العدالة والتنمية (AKP)', 'حزب الشعب الجمهوري (CHP)', 'حزب الحركة القومية (MHP)', 'حزب الجيد (İYİ)'],
      en: ['Justice and Development Party (AKP)', 'Republican People\'s Party (CHP)', 'Nationalist Movement Party (MHP)', 'Good Party (İYİ)'],
    },
    military: { ar: 'الجنرال متين غوراك (رئيس هيئة الأركان العامة التركية)', en: 'Gen. Metin Gürak (Chief of the Turkish General Staff)' },
    companies: [
      { name: 'Baykar Technologies', ar: 'بايكار للصناعات الدفاعية', sector: 'مسيّرات وأنظمة ذكاء عسكري', sectorEn: 'UAVs & Autonomous Defense', pressure: 'مُصنّع مسيرات بيرقدار TB2 وقزل إلما النفاثة الأكثر انتشاراً عالمياً', pressureEn: 'Manufacturer of Bayraktar TB2 and Kızılelma stealth unmanned fighters' },
      { name: 'Turkish Aerospace (TUSAŞ)', ar: 'شركة الصناعات الجوية التركية', sector: 'طيران مقاتل وأقمار صناعية', sectorEn: 'Aerospace & 5th-Gen Fighters', pressure: 'تطوير مقاتلة الجيل الخامس الشبحية KAAN ومروحيات أتاك', pressureEn: 'Developer of KAAN 5th-gen fighter jet and T929 heavy attack helicopters' },
      { name: 'BOTAŞ', ar: 'بوتاش لخطوط أنابيب النفط والغاز', sector: 'أمن طاقة وممرات غاز', sectorEn: 'Energy Transit Pipelines', pressure: 'إدارة شبكة أنابيب تاناب وترك ستريم لنقل الغاز إلى أوروبا', pressureEn: 'Operating TANAP and TurkStream transit pipelines to Europe' },
      { name: 'Aselsan', ar: 'أسيلسان للإلكترونيات العسكرية', sector: 'رادارات وحرب إلكترونية', sectorEn: 'Radars & Electronic Warfare', pressure: 'أنظمة رادار القبة الفولاذية (Çelik Kubbe) والتشويش التكتيكي', pressureEn: 'Steel Dome air defense radars and tactical EW systems' },
    ],
    risk: {
      laundering: { ar: 'منخفض إلى متوسط — الخروج الرسمي من القائمة الرمادية لفاتف (FATF) في 2024', en: 'Low to Medium — officially removed from FATF Grey List in 2024 following reforms' },
      trafficking: { ar: 'متوسط — عبء استضافة ملايين اللاجئين ومكافحة شبكات العبور عبر إيجه', en: 'Medium — managing millions of refugees and Aegean sea transit containment' },
      terrorism: { ar: 'متوسط — عمليات مكافحة الإرهاب عبر الحدود في شمال العراق وسوريا', en: 'Medium — ongoing counter-terrorism operations across Iraq and Syria borders' },
    },
    events: {
      ar: ['1923: إعلان الجمهورية التركية بقيادة أتاتورك', '1952: الانضمام لحلف الناتو', '1974: عملية السلام في قبرص', '2016: إحباط محاولة الانقلاب العسكري', '2023–2026: تحليق المقاتلة الشبحية قاآن ومبادرة ممر التنمية العراقي التركي'],
      en: ['1923: Republic founded by Atatürk', '1952: Joined NATO alliance', '1974: Cyprus Peace Operation', '2016: Defeated military coup attempt', '2023–2026: Maiden flight of KAAN 5th-gen jet & Iraq-Turkey Development Road'],
    },
  },

  // إيران
  ir: {
    parties: {
      ar: ['جبهة الاستقرار الإسلامي (المحافظون)', 'مجمع علماء الدين المجاهدين', 'حزب كوادر البناء (الإصلاحيون)'],
      en: ['Front of Islamic Stability (Hardliners)', 'Combatant Clergy Association', 'Executives of Construction (Reformists)'],
    },
    military: { ar: 'اللواء محمد باقري (رئيس الأركان) واللواء حسين سلامي (قائد الحرس الثوري IRGC)', en: 'Maj-Gen. Mohammad Bagheri (Chief of Staff) & Maj-Gen. Hossein Salami (IRGC Commander)' },
    companies: [
      { name: 'NIOC', ar: 'شركة النفط الوطنية الإيرانية', sector: 'نفط وغاز وبتروكيماويات', sectorEn: 'National Hydrocarbons', pressure: 'تصدير أكثر من 1.5 مليون برميل يومياً عبر شبكات أسطول الظل إلى آسيا', pressureEn: 'Exporting 1.5M+ bpd via shadow tanker fleet to Asian refineries' },
      { name: 'AIO', ar: 'منظمة صناعات الجو-فضاء الإيرانية', sector: 'صواريخ باليستية ومسيرات', sectorEn: 'Ballistic Missiles & Drones', pressure: 'تطوير ترسانة صواريخ خيبر وفتاح الفرط صوتية ومسيرات شاهد-136', pressureEn: 'Developing hypersonic Fattah, Kheibar ballistic missiles & Shahed drones' },
      { name: 'MAPNA Group', ar: 'مجموعة مابنا الصناعية', sector: 'طاقة ومحطات كهرباء وبنية تحتية', sectorEn: 'Power Generation & Industry', pressure: 'توطين تكنولوجيا التوربينات الغازية ومحطات الطاقة النووية الإقليمية', pressureEn: 'Localizing heavy gas turbines and nuclear power infrastructure' },
    ],
    risk: {
      laundering: { ar: 'مرتفع — إدراج في القائمة السوداء لـ FATF وقنوات مالية موازية للالتفاف على العقوبات', en: 'High — FATF Blacklist status and parallel alternative financial rails' },
      trafficking: { ar: 'متوسط إلى مرتفع — ممرات تهريب ممتدة عبر حدود أفغانستان وباكستان', en: 'Medium to High — transit corridors across Afghan and Pakistani borders' },
      terrorism: { ar: 'مرتفع — تصنيفات أمنية دولية لدعم الفصائل الإقليمية وحوادث داعش خراسان', en: 'High — international designation regarding regional axis and ISIS-K domestic strikes' },
    },
    events: {
      ar: ['1979: انتصار الثورة الإسلامية وسقوط الشاه', '1980–1988: حرب الخليج الأولى مع العراق', '2015: توقيع الاتفاق النووي (JCPOA)', '2020: اغتيال قاسم سليماني', '2024–2026: المواجهة الصاروخية المباشرة مع إسرائيل وتخصيب اليورانيوم بـ 60%'],
      en: ['1979: Islamic Revolution', '1980–1988: Iran–Iraq War', '2015: JCPOA Nuclear Accord signed', '2020: Assassination of Qasem Soleimani', '2024–2026: Direct missile exchanges with Israel & 60% uranium enrichment'],
    },
  },

  // قطر
  qa: {
    parties: {
      ar: ['مجلس الشورى القطري المنتخب (بدون أحزاب أيديولوجية بموجب الدستور)'],
      en: ['Elected Advisory Shura Council (Partisan parties prohibited by constitution)'],
    },
    military: { ar: 'الفريق الركن طيار سالم بن حمد النابت (رئيس أركان القوات المسلحة القطرية)', en: 'Lt-Gen. Salem bin Hamad Al-Nabit (Chief of Staff of Armed Forces)' },
    companies: [
      { name: 'QatarEnergy', ar: 'قطر للطاقة', sector: 'غاز طبيعي مسال LNG', sectorEn: 'Liquefied Natural Gas (LNG)', pressure: 'مشروع توسعة حقل الشمال العملاق لرفع الإنتاج إلى 142 مليون طن سنوياً بحلول 2030', pressureEn: 'North Field mega-expansion scaling global LNG output to 142M tons/yr by 2030' },
      { name: 'QIA', ar: 'جهاز قطر للاستثمار', sector: 'صندوق ثروة سيادية', sectorEn: 'Sovereign Wealth Fund', pressure: 'إدارة أصول سيادية عالمية تفوق 510 مليارات دولار في كبرى عواصم العالم', pressureEn: 'Managing $510B+ sovereign assets across blue-chip global markets' },
      { name: 'QNB Group', ar: 'مجموعة بنك قطر الوطني', sector: 'خدمات مصرفية دولية', sectorEn: 'International Banking', pressure: 'أكبر مؤسسة مالية وبنكية في الشرق الأوسط وأفريقيا بأصول تفوق 330 مليار دولار', pressureEn: 'Largest financial institution in MEA with assets exceeding $330B' },
      { name: 'Barzan Holdings', ar: 'برزان القابضة للصناعات العسكرية', sector: 'توطين التقنيات الدفاعية', sectorEn: 'Defense Technology Localizer', pressure: 'شراكات استراتيجية لإنتاج العربات المدرعة والأنظمة البصرية والدفاع السيبراني', pressureEn: 'Strategic partnerships for armored vehicles, electro-optics and cyber defense' },
    ],
    risk: {
      laundering: { ar: 'منخفض جداً — تقييمات إيجابية متقدمة من مجموعة العمل المالي (FATF) في 2023/2024', en: 'Very Low — highly positive 2023/2024 mutual evaluations from FATF' },
      trafficking: { ar: 'منخفض — معايير حماية عمالية متطورة وإلغاء نظام الكفالة وفق معايير منظمة العمل الدولية', en: 'Low — labor protection reforms and abolition of Kafala with ILO certification' },
      terrorism: { ar: 'منخفض جداً — دور دبلوماسي محوري واستضافة قاعدة العديد الجوية الأمريكية الاستراتيجية', en: 'Very Low — premier diplomatic mediation hub and Al Udeid US strategic air base host' },
    },
    events: {
      ar: ['1971: إعلان الاستقلال وتأسيس الدولة الحديثة', '1995: انطلاق طفرة الغاز الطبيعي المسال وبناء راس لفان', '2017–2021: تجاوز الأزمة الخليجية عبر قمة العلا', '2022: استضافة بطولة كأس العالم FIFA التاريخية', '2023–2026: الوساطة الدبلوماسية الدولية الرئيسية في ملفات الشرق الأوسط'],
      en: ['1971: Independence declared', '1995: LNG industrial launch & Ras Laffan city', '2017–2021: Gulf crisis resolved at Al-Ula Summit', '2022: Historic FIFA World Cup hosting', '2023–2026: Foremost international ceasefire & hostage diplomatic mediator'],
    },
  },

  // الكويت
  kw: {
    parties: {
      ar: ['مجلس الأمة (الكتل البرلمانية: الحركة الدستورية الإسلامية، الائتلاف الإسلامي، التيار الليبرالي)'],
      en: ['National Assembly Blocs (ICM, Islamic Coalition, National Democratic Gathering)'],
    },
    military: { ar: 'الفريق الركن طيار بندر المزين (رئيس الأركان العامة للجيش الكويتي)', en: 'Lt-Gen. Bandar Al-Muzain (Chief of General Staff of Kuwait Army)' },
    companies: [
      { name: 'KPC', ar: 'مؤسسة البترول الكويتية', sector: 'طاقة ومصافي عالمية', sectorEn: 'Integrated Oil & Refining', pressure: 'إنتاج 2.8 مليون برميل نفط يومياً ومجمع مصفاة الزور العملاقة (615 ألف برميل/يوم)', pressureEn: 'Output of 2.8M bpd and Al-Zour mega-refinery complex (615k bpd capacity)' },
      { name: 'KIA', ar: 'الهيئة العامة للاستثمار الكويتية', sector: 'صندوق أجيال قادمة سيادي', sectorEn: 'Oldest Sovereign Wealth Fund', pressure: 'أقدم صندوق ثروة سيادي في العالم (1953) بأصول تفوق 980 مليار دولار', pressureEn: 'World oldest sovereign fund (est. 1953) managing $980B+ assets' },
      { name: 'NBK', ar: 'بنك الكويت الوطني', sector: 'خدمات مصرفية واستثمارية', sectorEn: 'Premier Banking Group', pressure: 'أقدم وأعرق بنك وطني في الخليج العربي بتصنيفات ائتمانية سيادية مرتفعة', pressureEn: 'Historic bank founded in 1952 with pristine high credit ratings' },
      { name: 'Zain Group', ar: 'مجموعة زين للاتصالات', sector: 'اتصالات وتقنية رقمية', sectorEn: 'Telecommunications & Fintech', pressure: 'حضور في 7 دول بالشرق الأوسط وأفريقيا بأكثر من 50 مليون عميل نشط', pressureEn: 'Footprint across 7 MEA nations serving over 50M subscribers' },
    ],
    risk: {
      laundering: { ar: 'منخفض إلى متوسط — رقابة مصرفية صارمة من بنك الكويت المركزي ووحدة التحريات المالية', en: 'Low to Medium — stringent Central Bank of Kuwait banking supervision & FIU controls' },
      trafficking: { ar: 'منخفض إلى متوسط — تشريعات صارمة لحماية العمالة وتحديث مراكز الإيواء', en: 'Low to Medium — labor protection laws and modernized shelter infrastructure' },
      terrorism: { ar: 'منخفض جداً — استقرار أمني داخلي متين ومنظومة درع الوطن الدفاعية', en: 'Very Low — solid internal security stability and regional mediator diplomacy' },
    },
    events: {
      ar: ['1961: إعلان الاستقلال وتأسيس أول دستور برلماني في الخليج (1962)', '1990–1991: الغزو العراقي وحرب تحرير الكويت وعاصفة الصحراء', '2003: إطلاق مشاريع الرؤية التنموية', '2024: تولي الشيخ مشعل الأحمد الجابر الصباح مقاليد الحكم', '2024–2026: إصلاحات اقتصادية وهيكلية واستثمار حقل الدرة للغاز المشترك'],
      en: ['1961: Independence & 1962 first Gulf parliament constitution', '1990–1991: Iraqi invasion & Desert Storm liberation', '2003: Long-term Vision blueprint launch', '2024: Accession of Emir Sheikh Meshal Al-Ahmad Al-Sabah', '2024–2026: Economic restructuring & joint Durra offshore gas field dev'],
    },
  },

  // سلطنة عمان
  om: {
    parties: {
      ar: ['مجلس الشورى العماني المنتخب ومجلس الدولة المعين (مجلس عمان بدون أحزاب أيديولوجية)'],
      en: ['Elected Shura Council & Appointed Council of State (Council of Oman, non-partisan)'],
    },
    military: { ar: 'الفريق الركن بحري عبد الله بن خميس الرئيسي (رئيس أركان قوات السلطان المسلحة)', en: 'Vice-Admiral Abdullah bin Khamis Al-Raisi (Chief of Staff of Sultan Armed Forces)' },
    companies: [
      { name: 'OQ Group', ar: 'مجموعة أوكيو العالمية للطاقة', sector: 'طاقة مدمجة وبتروكيماويات', sectorEn: 'Energy & Petrochemicals', pressure: 'مصفاة الدقم الاستراتيجية ومشاريع الهيدروجين الأخضر الكبرى', pressureEn: 'Duqm strategic refinery and green hydrogen mega-concessions' },
      { name: 'PDO', ar: 'شركة تنمية نفط عمان', sector: 'استكشاف وإنتاج النفط والغاز', sectorEn: 'Exploration & Production', pressure: 'إنتاج أكثر من 70% من النفط الخام العماني وتطوير تقنيات الاستخلاص المعزز', pressureEn: 'Producing over 70% of Oman crude oil and pioneering enhanced oil recovery' },
      { name: 'OIA', ar: 'جهاز الاستثمار العماني', sector: 'صندوق ثروة سيادي', sectorEn: 'Sovereign Investment Authority', pressure: 'إدارة أصول سيادية تتجاوز 50 مليار دولار وتقسيم المحافظ الوطنية والدولية', pressureEn: 'Managing $50B+ sovereign assets across domestic development and global funds' },
      { name: 'Asyad Group', ar: 'مجموعة أسياد اللوجستية', sector: 'موانئ وملاحة بحرية', sectorEn: 'Ports & Global Logistics', pressure: 'إدارة ميناء صلالة وميناء الدقم وميناء صحار خارج مضيق هرمز', pressureEn: 'Operating deep-water ports outside Hormuz (Salalah, Duqm, Sohar)' },
    ],
    risk: {
      laundering: { ar: 'منخفض — التزام كامل بمعايير مكافحة غسل الأموال وتنسيق مع مينافاتف', en: 'Low — robust compliance with MENAFATF standards & Central Bank oversight' },
      trafficking: { ar: 'منخفض — تدابير وقائية وقوانين عمل حديثة للرقابة على عقود الاستقدام', en: 'Low — preventative labor inspection and transparent recruitment regulations' },
      terrorism: { ar: 'منعدم تقريباً (مستوى صفري) — أكثر دول المنطقة استقراراً وأماناً وفق مؤشرات السلام العالمية', en: 'Negligible/Zero — ranked among world safest countries in Global Terrorism Index' },
    },
    events: {
      ar: ['1970: بدء مسيرة النهضة العمانية الحديثة بقيادة السلطان قابوس', '1981: تأسيس مجلس التعاون الخليجي في الرياض', '2020: تولي السلطان هيثم بن طارق المعظم مقاليد الحكم', '2021: إطلاق النظام الأساسي الجديد وتعيين ولي العهد ورؤية عمان 2040', '2023–2026: الوساطة الدبلوماسية الإقليمية الهادئة وشراكات الهيدروجين العالمي'],
      en: ['1970: Modern Omani Renaissance begins under Sultan Qaboos', '1981: GCC co-founding member in Riyadh', '2020: Sultan Haitham bin Tarik ascends throne', '2021: New Basic Law, Crown Prince appointed & Vision 2040 launch', '2023–2026: Quiet geopolitical balance diplomacy & global green hydrogen hub'],
    },
  },

  // البحرين
  bh: {
    parties: {
      ar: ['مجلس النواب المنتخب (الجمعيات السياسية: المنبر الوطني الإسلامي، ميثاق العمل الوطني، الأصالة)'],
      en: ['Elected Council of Representatives (Political Societies: Al-Menbar, Mithaq, Al-Asalah)'],
    },
    military: { ar: 'الفريق الركن ذياب بن صقر النعيمي (رئيس هيئة الأركان لقوة دفاع البحرين)', en: 'Lt-Gen. Theyab bin Saqr Al-Noaimi (Chief of Staff of BDF)' },
    companies: [
      { name: 'BAPCO Energies', ar: 'بابكو إنرجيز', sector: 'طاقة وتكرير', sectorEn: 'Integrated Energy & Refining', pressure: 'مشروع تحديث مصفاة سترة لرفع الطاقة التكريرية لـ 400 ألف برميل/يوم', pressureEn: 'Bapco Modernization Program upgrading Sitra refinery to 400k bpd' },
      { name: 'ALBA', ar: 'شركة ألمنيوم البحرين', sector: 'صهر الألمنيوم الثقيل', sectorEn: 'Aluminium Smelting Superpower', pressure: 'أكبر مصهر ألمنيوم في العالم بموقع واحد بإنتاج سنوي يفوق 1.6 مليون طن', pressureEn: 'World largest single-site aluminium smelter producing 1.6M+ tonnes/yr' },
      { name: 'Mumtalakat', ar: 'شركة ممتلكات البحرين القابضة', sector: 'صندوق ثروة سيادي', sectorEn: 'Sovereign Wealth Fund', pressure: 'إدارة أصول سيادية استراتيجية بما فيها طيران الخليج ومجموعة ماكلارين', pressureEn: 'Managing sovereign strategic assets including Gulf Air and McLaren Group' },
    ],
    risk: {
      laundering: { ar: 'منخفض — مركز مصرفي إقليمي عريق تحت إشراف مصرف البحرين المركزي ومقر مينافاتف', en: 'Low — long-standing regional banking hub, host of MENAFATF secretariat' },
      trafficking: { ar: 'منخفض — الحفاظ على تصنيف المستوى الأول (Tier 1) لمكافحة الاتجار بالبشر لعدة سنوات متتالية', en: 'Low — Tier 1 status maintained in US Trafficking in Persons Report consecutively' },
      terrorism: { ar: 'منخفض — استقرار أمني واستضافة الأسطول الخامس الأمريكي والتحالفات البحرية', en: 'Low — domestic security control & host of US 5th Fleet naval headquarters' },
    },
    events: {
      ar: ['1971: إعلان الاستقلال وتوقيع اتفاقية الصداقة', '2001: التصويت التاريخي على ميثاق العمل الوطني بنسبة 98.4%', '2002: إعلان مملكة البحرين الدستورية وعودة البرلمان', '2020: توقيع الاتفاقيات الإبراهيمية', '2024–2026: استضافة القمة العربية الـ 33 في المنامة ومبادرة الأمن الإقليمي'],
      en: ['1971: Independence declared', '2001: National Action Charter approved by 98.4%', '2002: Kingdom of Bahrain declared & parliament restored', '2020: Abraham Accords signed', '2024–2026: Host of 33rd Arab Summit in Manama & regional security dialogues'],
    },
  },

  // الجزائر
  dz: {
    parties: {
      ar: ['جبهة التحرير الوطني (FLN)', 'التجمع الوطني الديمقراطي (RND)', 'حركة مجتمع السلم (حمس)', 'جبهة القوى الاشتراكية (FFS)'],
      en: ['National Liberation Front (FLN)', 'Democratic National Rally (RND)', 'Movement of Society for Peace (MSP)', 'Front of Socialist Forces (FFS)'],
    },
    military: { ar: 'الفريق أول السعيد شنقريحة (رئيس أركان الجيش الوطني الشعبي)', en: 'Gen. Saïd Chengriha (Chief of Staff of People\'s National Army)' },
    companies: [
      { name: 'Sonatrach', ar: 'سوناطراك للنفط والغاز', sector: 'طاقة ومحروقات وطنية', sectorEn: 'Hydrocarbon Superpower', pressure: 'أكبر شركة في أفريقيا ومورد غاز حيوي لإيطاليا وإسبانيا عبر خطوط ميدغاز وترانسميد', pressureEn: 'Largest company in Africa, critical gas supplier to Italy via Transmed' },
      { name: 'Sonelgaz', ar: 'سونلغاز للكهرباء والغاز', sector: 'طاقة متجددة وشبكات كهرباء', sectorEn: 'Power Generation & Renewables', pressure: 'مشروعات الربط الكهربائي القاري مع أوروبا وتصدير الطاقة النظيفة', pressureEn: 'Continental power interconnection projects with Europe & clean energy' },
      { name: 'Cevital', ar: 'مجمع سيفيتال للصناعات الغذائية', sector: 'صناعات تحويلية وسكر وزيوت', sectorEn: 'Agri-food & Industrial Conglomerate', pressure: 'أكبر مجمع صناعي خاص ومصدر للسلع الغذائية والأجهزة الكهرومنزلية', pressureEn: 'Largest private industrial exporter of agri-commodities and appliances' },
    ],
    risk: {
      laundering: { ar: 'متوسط — إصلاحات تشريعية لتعزيز الشفافية المصرفية ومكافحة تبييض الأموال', en: 'Medium — ongoing financial transparency legislative reforms' },
      trafficking: { ar: 'متوسط — مراقبة آلاف الكيلومترات من الحدود الصحراوية في الساحل الأفريقي', en: 'Medium — managing thousands of km of Sahel desert borders against trafficking' },
      terrorism: { ar: 'منخفض إلى متوسط — تفكيك حاسم للجماعات المسلحة وعقيدة مكافحة إرهاب عسكرية صلبة', en: 'Low to Medium — historic defeat of armed groups & robust military doctrine' },
    },
    events: {
      ar: ['1954–1962: ثورة التحرير الجزائرية المظفرة ونيل الاستقلال بعد تضحية مليون ونصف شهيد', '1971: تأميم قطاع المحروقات التاريخي', '1990s: العشرية السوداء ومصالحة الوئام المدني', '2019: الحراك الشعبي السلمي وانتخاب عبد المجيد تبون', '2024–2026: عضوية مجلس الأمن الدولي (2024–2025) وريادة أمن الطاقة في المتوسط'],
      en: ['1954–1962: War of Independence & victory after 1.5M martyrs', '1971: Historic nationalization of hydrocarbons', '1990s: Civil strife & Civil Concord reconciliation', '2019: Peaceful Hirak movement & Abdelmadjid Tebboune elected', '2024–2026: UNSC seat (2024–2025) & premier Mediterranean gas pivot'],
    },
  },

  // المغرب
  ma: {
    parties: {
      ar: ['حزب التجمع الوطني للأحرار (RNI - الأغلبية)', 'حزب الأصالة والمعاصرة (PAM)', 'حزب الاستقلال (عريق)', 'حزب العدالة والتنمية (PJD)'],
      en: ['National Rally of Independents (RNI)', 'Authenticity and Modernity (PAM)', 'Istiqlal Party', 'Justice and Development (PJD)'],
    },
    military: { ar: 'الفريق أول محمد بريظ (المفتش العام للقوات المسلحة الملكية وقائد المنطقة الجنوبية)', en: 'Lt-Gen. Mohammed Berrid (Inspector General of Royal Armed Forces)' },
    companies: [
      { name: 'OCP Group', ar: 'المكتب الشريف للفوسفاط', sector: 'فوسفاط وأسمدة وأمن غذائي', sectorEn: 'Phosphate & Global Fertilizer Giant', pressure: 'التحكم بأكبر احتياطي فوسفاط في العالم (70%) ودعامة الأمن الغذائي العالمي', pressureEn: 'Controlling ~70% of world phosphate reserves, vital for global food security' },
      { name: 'Attijariwafa Bank', ar: 'التجاري وفا بنك', sector: 'خدمات مصرفية عابرة للقارات', sectorEn: 'Pan-African Banking Superpower', pressure: 'أكبر بنك في المغرب وشمال أفريقيا بحضور مصرفي في أكثر من 25 دولة', pressureEn: 'Largest banking group in North Africa operating across 25+ countries' },
      { name: 'Tanger Med Special Agency', ar: 'الوكالة الخاصة لطنجة المتوسط', sector: 'موانئ ومناطق صناعية حرة', sectorEn: 'Mega-Port & Automotive Logistics', pressure: 'أكبر ميناء حاويات في البحر الأبيض المتوسط وأفريقيا ومجمع تصنيع السيارات (Renault/Stellantis)', pressureEn: 'Largest container port in Mediterranean/Africa and top automotive export hub' },
      { name: 'Maroc Telecom', ar: 'اتصالات المغرب', sector: 'بنية تحتية رقمية وكابلات غرب أفريقيا', sectorEn: 'Telecom & Fiber Infrastructure', pressure: 'مشغل الاتصالات الرائد في المغرب وأكثر من 11 دولة في غرب أفريقيا', pressureEn: 'Leading telecom group serving millions across Morocco and West Africa' },
    ],
    risk: {
      laundering: { ar: 'منخفض — الخروج الرسمي من القائمة الرمادية لـ FATF منذ 2023 مع إشادة دولية', en: 'Low — officially exited FATF Grey List in 2023 with international praise' },
      trafficking: { ar: 'متوسط — جهود أمنية ضخمة لتفكيك شبكات الهجرة غير الشرعية عبر مضيق جبل طارق', en: 'Medium — extensive security operations intercepting trafficking across Gibraltar' },
      terrorism: { ar: 'منخفض جداً — المكتب المركزي للأبحاث القضائية (BCIJ) نموذج عالمي في الاستباق الأمني', en: 'Very Low — BCIJ intelligence unit recognized as global leader in pre-emptive strikes' },
    },
    events: {
      ar: ['1956: استرجاع الاستقلال وإنهاء الحماية', '1975: المسيرة الخضراء واسترجاع الصحراء المغربية', '1999: اعتلاء الملك محمد السادس العرش وإطلاق الأوراش الكبرى', '2020: الاعتراف الأمريكي بمغربية الصحراء واستئناف العلاقات مع إسرائيل', '2023–2026: فوز ملف استضافة كأس العالم 2030 (المغرب/إسبانيا/البرتغال) ومشروع خط أنبوب الغاز الأطلسي نيجيريا-المغرب'],
      en: ['1956: Independence restored', '1975: Green March & retrieval of Moroccan Sahara', '1999: King Mohammed VI ascends throne & modernization', '2020: US recognition of Moroccan Sahara sovereignty', '2023–2026: FIFA World Cup 2030 co-host & Nigeria–Morocco Atlantic Gas Pipeline'],
    },
  },

  // العراق
  iq: {
    parties: {
      ar: ['ائتلاف إدارة الدولة', 'الإطار التنسيقي', 'التيار الصدري', 'تحالف تقدم (السني)', 'الحزب الديمقراطي الكردستاني (KDP)'],
      en: ['State Administration Coalition', 'Coordination Framework', 'Sadrist Movement', 'Taqadum', 'Kurdistan Democratic Party'],
    },
    military: { ar: 'الفريق أول الركن عبد الأمير يار الله (رئيس أركان الجيش العراقي)', en: 'Gen. Abdel Emir Yarallah (Chief of Staff of Iraqi Army)' },
    companies: [
      { name: 'SOMO', ar: 'شركة تسويق النفط العراقية', sector: 'تسويق النفط الخام', sectorEn: 'Crude Marketing Monopolist', pressure: 'تصدير أكثر من 3.4 مليون برميل نفط يومياً وثاني أكبر منتج في أوبك', pressureEn: 'Exporting 3.4M+ bpd as OPEC second-largest crude producer' },
      { name: 'Basra Oil Company', ar: 'شركة نفط البصرة', sector: 'استخراج الهيدروكربونات', sectorEn: 'Mega-Field Extraction (Rumaila)', pressure: 'إدارة أضخم الحقول النفطية (الرميلة ومجنون وغرب القرنة)', pressureEn: 'Operating world giant fields (Rumaila, Majnoon, West Qurna)' },
      { name: 'Trade Bank of Iraq', ar: 'المصرف العراقي للتجارة', sector: 'تمويل التجارة الخارجية', sectorEn: 'Trade Finance & Reconstruction', pressure: 'تمويل أكثر من 80% من واردات السلع الاستراتيجية ومشاريع إعادة الإعمار', pressureEn: 'Financing 80%+ of national strategic imports and infrastructure rebuild' },
    ],
    risk: {
      laundering: { ar: 'مرتفع — إجراءات البنك المركزي العراقي ومنصة بيع الدولار لمكافحة التهريب', en: 'High — strict Central Bank electronic dollar platform curtails illicit outflows' },
      trafficking: { ar: 'متوسط إلى مرتفع — تحديات أمن الحدود ومكافحة شبكات تهريب المخدرات (الكبتاغون)', en: 'Medium to High — border security challenges & countering Captagon smuggling' },
      terrorism: { ar: 'متوسط — تحييد فلول تنظيم داعش وجاهزية جهاز مكافحة الإرهاب', en: 'Medium — active containment of ISIS remnants by elite Counter-Terrorism Service' },
    },
    events: {
      ar: ['1958: ثورة 14 تموز وإعلان الجمهورية', '1980–1988: حرب الخليج الأولى', '2003: الغزو الأمريكي وسقوط النظام السابق', '2017: النصر الكامل على تنظيم داعش واستعادة الموصل', '2023–2026: استقرار سياسي وإطلاق مشروع "طريق التنمية" الرابط بين الفاو وتركيا'],
      en: ['1958: 14 July Revolution & Republic', '1980–1988: Gulf War I', '2003: US-led invasion & regime collapse', '2017: Liberation of Mosul & total defeat of ISIS', '2023–2026: Political stability & launching $17B Grand Faw Development Road to Europe'],
    },
  },

  // الأردن
  jo: {
    parties: {
      ar: ['حزب جبهة العمل الإسلامي', 'حزب الميثاق الوطني', 'حزب إرادة', 'حزب تقدم'],
      en: ['Islamic Action Front (IAF)', 'National Charter Party', 'Erada Party', 'Taqadom Party'],
    },
    military: { ar: 'اللواء الركن يوسف أحمد الحنيطي (رئيس هيئة الأركان المشتركة)', en: 'Maj-Gen. Yousef Huneiti (Chairman of Joint Chiefs of Staff)' },
    companies: [
      { name: 'Arab Bank', ar: 'البنك العربي', sector: 'مؤسسة مصرفية عالمية', sectorEn: 'Global Banking Network', pressure: 'أعرق وأكبر بنك أردني برأسمال يفوق 60 مليار دولار بحضور في 5 قارات', pressureEn: 'Historic banking giant operating in 30+ countries with $60B+ assets' },
      { name: 'JPMC', ar: 'شركة مناجم الفوسفات الأردنية', sector: 'تعدين وأسمدة كيميائية', sectorEn: 'Phosphate Mining & Chemicals', pressure: 'ثاني أكبر مصدر للفوسفات في العالم ومشاريع تصنيع الأسمدة المتقدمة', pressureEn: 'World 2nd largest phosphate exporter and industrial fertilizer partner' },
      { name: 'Arab Potash Company', ar: 'شركة البوتاس العربية', sector: 'تعدين أملاح البحر الميت', sectorEn: 'Dead Sea Potash Extraction', pressure: 'مُنتج البوتاس الوحيد في العالم العربي وثامن أكبر مورد بوتاس زراعي دولياً', pressureEn: 'Sole potash producer in Arab world & 8th largest global fertilizer supplier' },
    ],
    risk: {
      laundering: { ar: 'منخفض — الخروج من القائمة الرمادية لـ FATF في 2023 والامتثال الكامل للمعايير الدولية', en: 'Low — officially exited FATF Grey List in 2023 with full compliance certification' },
      trafficking: { ar: 'منخفض إلى متوسط — استضافة أكثر من 1.3 مليون لاجئ سوري والتصدي لشبكات العبور', en: 'Low to Medium — hosting 1.3M+ Syrian refugees while stopping cross-border networks' },
      terrorism: { ar: 'منخفض — كفاءة جهاز المخابرات العامة الأردني وإحباط مخططات التسلل عبر الحدود', en: 'Low — elite General Intelligence Directorate (GID) preventing cross-border attacks' },
    },
    events: {
      ar: ['1946: إعلان استقلال المملكة الأردنية الهاشمية', '1994: توقيع معاهدة السلام (وادي عربة)', '1999: تولي الملك عبد الله الثاني ابن الحسين سلطاته الدستورية', '2022: إطلاق منظومة التحديث السياسي والاقتصادي', '2024–2026: إجراء الانتخابات النيابية الحزبية بموجب القانون الجديد وعمليات الإنزال الجوي الإنساني في غزة'],
      en: ['1946: Independence of Hashemite Kingdom', '1994: Wadi Araba Peace Treaty', '1999: King Abdullah II ascends throne', '2022: Modernization of Political & Economic System blueprint', '2024–2026: First multi-party parliament elections & historic Gaza humanitarian airdrops'],
    },
  },

  // إيطاليا
  it: {
    parties: {
      ar: ['إخوة إيطاليا (FdI - الأغلبية)', 'الرابطة (Lega)', 'فورزا إيطاليا (FI)', 'الحزب الديمقراطي (PD)', 'حركة 5 نجوم (M5S)'],
      en: ['Brothers of Italy (FdI)', 'Lega', 'Forza Italia (FI)', 'Democratic Party (PD)', 'Five Star Movement (M5S)'],
    },
    military: { ar: 'الأدميرال جوزيبي كافو دراغوني (رئيس هيئة الأركان المشتركة ورئيس اللجنة العسكرية للناتو)', en: 'Adm. Giuseppe Cavo Dragone (Chief of Defence Staff & NATO Military Committee Chair)' },
    companies: [
      { name: 'Eni S.p.A.', ar: 'إيني الإيطالية للطاقة', sector: 'هيدروكربونات وغاز طبيعي', sectorEn: 'Integrated Supermajor Energy', pressure: 'أكبر مشغل للغاز في المتوسط وأفريقيا ومكتشف حقل ظهر في مصر وحقول ليبيا', pressureEn: 'Top gas producer in Africa/Med, discoverer of Egypt Zohr super-field' },
      { name: 'Leonardo S.p.A.', ar: 'ليوناردو للصناعات الدفاعية', sector: 'طائرات مقاتلة ورادارات', sectorEn: 'Aerospace, Defense & Security', pressure: 'شريك برنامج مقاتلة الجيل السادس GCAP وتصنيع مروحيات AW وأنظمة الدفاع', pressureEn: 'Global 6th-gen fighter (GCAP) partner and AW helicopter manufacturer' },
      { name: 'Fincantieri', ar: 'فينكانتييري لبناء السفن الحربية', sector: 'فرقاطات وغواصات بحرية', sectorEn: 'Naval Shipbuilding Giant', pressure: 'أكبر حوض بناء سفن حربية في أوروبا ومُصنع فرقاطات FREMM للبحرية الأمريكية والإيطالية', pressureEn: 'Largest European warship builder, constructor of FREMM multi-mission frigates' },
      { name: 'Intesa Sanpaolo', ar: 'إنتيسا سان باولو المصرفية', sector: 'خدمات بنكية وتمويل سيادي', sectorEn: 'Banking & Financial Group', pressure: 'أكبر مجموعة بنكية في إيطاليا بأصول تتجاوز 1 تريليون يورو', pressureEn: 'Leading Italian banking group with over €1T in total assets' },
    ],
    risk: {
      laundering: { ar: 'متوسط — مكافحة مافيات كالابريا وصقلية (نادرانغيتا) عبر قوانين مكافحة المافيا الصارمة', en: 'Medium — aggressive antimafia legislation targeting \'Ndrangheta illicit flows' },
      trafficking: { ar: 'متوسط إلى مرتفع — المقصد البحري الأوروبي الأول لمسار الهجرة عبر وسط المتوسط (لامبيدوزا)', en: 'Medium to High — primary European frontline for Central Med migration route' },
      terrorism: { ar: 'منخفض — منظومة أمنية استخباراتية إيطالية متقدمة خالية من الهجمات الكبرى', en: 'Low — robust Digos intelligence network preventing major terror incidents' },
    },
    events: {
      ar: ['1946: الاستفتاء على تأسيس الجمهورية الإيطالية', '1949: تأسيس حلف الناتو في واشنطن', '1957: توقيع معاهدة روما المؤسسة للاتحاد الأوروبي', '2022: انتخاب جورجيا ميلوني كأول رئيسة وزراء في تاريخ إيطاليا', '2024–2026: رئاسة مجموعة السبع (G7) وإطلاق خطة ماتي (Piano Mattei) للشراكة مع أفريقيا'],
      en: ['1946: Republic established via referendum', '1949: Founding NATO member', '1957: Treaty of Rome founding EU', '2022: Giorgia Meloni elected first female Prime Minister', '2024–2026: G7 Presidency & launching Mattei Plan for strategic energy alliance with Africa'],
    },
  },

  // إسبانيا
  es: {
    parties: {
      ar: ['حزب العمال الاشتراكي (PSOE - الحكومة)', 'الحزب الشعبي (PP - المعارضة)', 'فوكس (Vox)', 'سومار (Sumar)'],
      en: ['Spanish Socialist Workers\' Party (PSOE)', 'People\'s Party (PP)', 'Vox', 'Sumar Coalition'],
    },
    military: { ar: 'الأدميرال تيودورو لوبيز كالديرون (رئيس هيئة أركان الدفاع الإسباني JEMAD)', en: 'Adm. Teodoro López Calderón (Chief of the Defence Staff - JEMAD)' },
    companies: [
      { name: 'Iberdrola', ar: 'إيبردرولا للطاقة المتجددة', sector: 'طاقة رياح وشبكات كهرباء', sectorEn: 'Clean Energy & Utilities Giant', pressure: 'ثاني أضخم شركة طاقة كهربائية في العالم ورائدة طاقة الرياح البحرية', pressureEn: 'World #2 utility company and global leader in offshore wind assets' },
      { name: 'Banco Santander', ar: 'بنك سانتاندير', sector: 'خدمات مصرفية عابرة للقارات', sectorEn: 'Transatlantic Banking Leader', pressure: 'أكبر بنك في منطقة اليورو من حيث القيمة السوقية بحضور هائل في أمريكا اللاتينية والمملكة المتحدة', pressureEn: 'Largest bank in Eurozone by market cap with deep Latin American reach' },
      { name: 'Indra Sistemas', ar: 'إندرا سيستيماس للأنظمة الدفاعية', sector: 'رادارات ودفاع جوي ورقمي', sectorEn: 'Defense Radar, Avionics & IT', pressure: 'المطور الإسباني لبرنامج الطائرة المقاتلة الأوروبية المستقبلية FCAS', pressureEn: 'National coordinator for Europe Future Combat Air System (FCAS)' },
      { name: 'Navantia', ar: 'نافانتيا للصناعات البحرية', sector: 'سفن حربية وغواصات S-80', sectorEn: 'Naval Shipbuilder (S-80 Submarines)', pressure: 'بناء غواصات الفئة S-80 ذات الدفع المستقل عن الهواء وسفن الإنزال الاستراتيجي', pressureEn: 'Building S-80 AIP anaerobic stealth submarines and amphibious carriers' },
    ],
    risk: {
      laundering: { ar: 'منخفض إلى متوسط — رقابة من هيئة SEPBLAC ومكافحة شبكات غسيل أموال المخدرات في كوستا ديل سول', en: 'Low to Medium — stringent SEPBLAC oversight targeting Costa del Sol real estate' },
      trafficking: { ar: 'متوسط — مراقبة ممرات مضيق جبل طارق وقوارب الهجرة نحو جزر الكناري', en: 'Medium — active maritime surveillance along Gibraltar and Canary Islands routes' },
      terrorism: { ar: 'منخفض — يقظة أمنية مشددة (المستوى 4 لمكافحة الإرهاب) مع تفكيك الخلايا العابرة', en: 'Low — Alert Level 4 counter-terror readiness and pre-emptive cell crackdowns' },
    },
    events: {
      ar: ['1975: الانتقال الديمقراطي بعد نهاية حكم فرانكو', '1978: إقرار الدستور الإسباني الديمقراطي الملكي', '1982: الانضمام لحلف شمال الأطلسي (الناتو)', '1986: الانضمام للمجموعة الاقتصادية الأوروبية (الاتحاد الأوروبي)', '2024–2026: الاعتراف الدبلوماسي الرسمي بدولة فلسطين واستضافة قمة المتوسط'],
      en: ['1975: Democratic Transition post-Franco', '1978: Constitutional Monarchy ratified', '1982: Joined NATO alliance', '1986: Joined European Economic Community (EU)', '2024–2026: Official recognition of State of Palestine & leading EU solar-hydrogen transition'],
    },
  },

  // هولندا
  nl: {
    parties: {
      ar: ['حزب الحرية (PVV)', 'حزب الشعب للحرية والديمقراطية (VVD)', 'حزب العقد الاجتماعي الجديد (NSC)', 'حزب حركة المزارعين (BBB)'],
      en: ['Party for Freedom (PVV)', 'People\'s Party for Freedom (VVD)', 'New Social Contract (NSC)', 'Farmer-Citizen Movement (BBB)'],
    },
    military: { ar: 'الجنرال أونو آيشيلسهايم (قائد القوات المسلحة الملكية الهولندية)', en: 'Gen. Onno Eichelsheim (Chief of Defence of Netherlands Armed Forces)' },
    companies: [
      { name: 'ASML Holding', ar: 'إيه إس إم إل (ASML)', sector: 'أشباه الموصلات والطباعة الحجرية الضوئية', sectorEn: 'Lithography Semiconductor Monopoly', pressure: 'المحتكر العالمي الوحيد لآلات الطباعة الحجرية بالأشعة فوق البنفسجية المتطرفة (EUV) لصناعة الرقائق', pressureEn: 'Sole global manufacturer of Extreme Ultraviolet (EUV) photolithography machines' },
      { name: 'Port of Rotterdam', ar: 'ميناء روتردام', sector: 'موانئ وبنية تحتية لوجستية', sectorEn: 'Largest Seaport in Europe', pressure: 'أكبر ميناء بحري في أوروبا وبوابة دخول الطاقة والسلع لقلب القارة الصناعية', pressureEn: 'Largest maritime seaport in Europe handling 440M tonnes of cargo annually' },
      { name: 'ING Group', ar: 'مجموعة بنك آي إن جي', sector: 'خدمات مصرفية دولية', sectorEn: 'Global Banking & Financial Services', pressure: 'أكبر بنك هولندي بأصول تتجاوز 1 تريليون دولار وشبكة مصرفية في 40 دولة', pressureEn: 'Leading Dutch bank with $1T+ assets operating across 40 countries' },
    ],
    risk: {
      laundering: { ar: 'منخفض إلى متوسط — تحقيقات مالية متقدمة لمكافحة شبكات تهريب المخدرات المنظمة عبر الموانئ', en: 'Low to Medium — FIU and customs task forces targeting port narcotic financing' },
      trafficking: { ar: 'منخفض — رقابة حدودية إلكترونية متطورة ضمن فضاء شنغن', en: 'Low — advanced biometrics & automated borders within Schengen zone' },
      terrorism: { ar: 'منخفض — كفاءة جهاز المخابرات والأمن العام الهولندي (AIVD)', en: 'Low — high-readiness AIVD intelligence agency monitoring extremist threats' },
    },
    events: {
      ar: ['1949: تأسيس حلف الناتو وتوقيع معاهدة واشنطن', '1992: توقيع معاهدة ماستريخت وتأسيس الاتحاد الأوروبي واليورو', '2014: إسقاط رحلة MH17 والتحقيقات الدولية في لاهاي', '2024: تشكيل حكومة ائتلافية جديدة برئاسة ديك شوف', '2024–2026: فرض ضوابط استراتيجية عالمية على تصدير آلات الرقائق المتقدمة ودعم الدفاع الأوروبي'],
      en: ['1949: NATO co-founding member', '1992: Maastricht Treaty signed establishing European Union & Euro', '2014: Downed flight MH17 & historic Hague trials', '2024: Formation of Dick Schoof coalition cabinet', '2024–2026: Strategic microchip export controls & leading European F-35 fighter coalition'],
    },
  },

  // كندا
  ca: {
    parties: {
      ar: ['الحزب الليبرالي (LPC - الحكومة)', 'حزب المحافظين (CPC - المعارضة)', 'الحزب الديمقراطي الجديد (NDP)', 'كتلة كيبيك (BQ)'],
      en: ['Liberal Party of Canada (LPC)', 'Conservative Party of Canada (CPC)', 'New Democratic Party (NDP)', 'Bloc Québécois (BQ)'],
    },
    military: { ar: 'الفريق أول جيني كارينيان (رئيسة هيئة أركان الدفاع الكندية)', en: 'Gen. Jennie Carignan (Chief of the Defence Staff of Canadian Armed Forces)' },
    companies: [
      { name: 'Enbridge Inc.', ar: 'إنبريدج للطاقة وخطوط الأنابيب', sector: 'نقل النفط والغاز في أمريكا الشمالية', sectorEn: 'Energy Pipeline Infrastructure', pressure: 'أطول شبكة لنقل السوائل الهيدروكربونية والغاز الطبيعي في العالم تربط كندا بالولايات المتحدة', pressureEn: 'World longest crude and gas pipeline network connecting Canada to US refineries' },
      { name: 'RBC (Royal Bank of Canada)', ar: 'رويال بنك أوف كندا', sector: 'خدمات مصرفية وثروات سيادية', sectorEn: 'Diversified Financial Services', pressure: 'أكبر بنك ومؤسسة مالية في كندا وواحد من أكبر 10 بنوك في العالم بالقيمة السوقية', pressureEn: 'Canada largest bank and top 10 globally by market capitalization ($1.5T assets)' },
      { name: 'Nutrien Ltd.', ar: 'نوتريين للأسمدة الزراعية', sector: 'بوتاس ونيتروجين وأمن غذائي', sectorEn: 'World Largest Potash Producer', pressure: 'أكبر مُنتج للبوتاس وثالث أكبر منتج للأسمدة النيتروجينية في العالم', pressureEn: 'World largest producer of potash and agricultural crop inputs' },
      { name: 'Bombardier Inc.', ar: 'بومباردييه للطائرات النفاثة', sector: 'طيران خاص ودفاعي متقدم', sectorEn: 'Business & Special Mission Aircraft', pressure: 'صناعة طائرات غلوبال وتشالنجر المستخدمة في الرادار والمراقبة التكتيكية', pressureEn: 'Building Global & Challenger jets adapted for airborne tactical radar surveillance' },
    ],
    risk: {
      laundering: { ar: 'منخفض إلى متوسط — تشريعات FINTRAC الصارمة لمكافحة الاستثمارات العقارية المشبوهة', en: 'Low to Medium — robust FINTRAC surveillance targeting real estate money laundering' },
      trafficking: { ar: 'منخفض — إدارة مشتركة للحدود الشمالية مع الولايات المتحدة وقوانين لجوء منظمة', en: 'Low — integrated border management with US and structured legal immigration' },
      terrorism: { ar: 'منخفض جداً — جهاز المخابرات والأمن الكندي (CSIS) وشراكة تحالف العيون الخمس (Five Eyes)', en: 'Very Low — CSIS high capability & integrated Five Eyes intelligence sharing' },
    },
    events: {
      ar: ['1867: إعلان الاتحاد الفيدرالي الكندي', '1949: المشاركة في تأسيس حلف الناتو', '1957: تأسيس قيادة نوراد (NORAD) المشتركة للدفاع الجوي مع واشنطن', '1994: دخول اتفاقية التجارة الحرة لأمريكا الشمالية (NAFTA/USMCA)', '2024–2026: تحديث شامل لردع القطب الشمالي وزيادة الإنفاق العسكري نحو هدف الـ 2% للناتو'],
      en: ['1867: Canadian Confederation', '1949: NATO co-founding member', '1957: NORAD joint North American aerospace defence established', '1994: NAFTA/USMCA free trade entry', '2024–2026: Modernizing Arctic defence radar & path to NATO 2% defense target'],
    },
  },

  // أستراليا
  au: {
    parties: {
      ar: ['حزب العمال الأسترالي (Labor - الحكومة)', 'التحالف الليبرالي-الوطني (Coalition - المعارضة)', 'حزب الخضر (Greens)'],
      en: ['Australian Labor Party (Labor)', 'Liberal-National Coalition (Opposition)', 'Australian Greens'],
    },
    military: { ar: 'الأدميرال ديفيد جونستون (قائد قوات الدفاع الأسترالية ADF)', en: 'Adm. David Johnston (Chief of the Defence Force - ADF)' },
    companies: [
      { name: 'BHP Group', ar: 'بي إتش بي للتعدين والمعادن', sector: 'خام الحديد والنحاس واليورانيوم', sectorEn: 'Mining & Critical Resources Superpower', pressure: 'أكبر شركة تعدين وموارد طبيعية في العالم ومورد أول للحديد والنحاس لصناعات العالم', pressureEn: 'World largest mining conglomerate supplying global copper, iron ore and uranium' },
      { name: 'Rio Tinto', ar: 'ريو تينتو', sector: 'معادن نادرة وألمنيوم', sectorEn: 'Diversified Metals & Minerals', pressure: 'شريان رئيسي في سلاسل توريد الأتربة النادرة ومعادن التحول الطاقي النظيف', pressureEn: 'Pivotal supplier of energy-transition metals and lithium development' },
      { name: 'Commonwealth Bank of Australia', ar: 'بنك الكومنولث الأسترالي', sector: 'خدمات مصرفية كبرى', sectorEn: 'Banking & Financial Giant', pressure: 'أكبر بنك في أوقيانوسيا بقيمة سوقية تتجاوز 200 مليار دولار', pressureEn: 'Largest bank in Oceania with market capitalization exceeding $200B' },
      { name: 'Woodside Energy', ar: 'وودسايد إنرجيز', sector: 'غاز طبيعي مسال وهيدروجين', sectorEn: 'Liquefied Natural Gas (LNG)', pressure: 'مورد غاز مسال حيوي لليابان وكوريا الجنوبية وتايوان في المحيطين الهندي والهادئ', pressureEn: 'Vital LNG supplier to Japan, South Korea and Indo-Pacific markets' },
    ],
    risk: {
      laundering: { ar: 'منخفض — إشراف صارم من هيئة AUSTRAC لمكافحة الجرائم المالية', en: 'Low — rigorous regulatory enforcement by AUSTRAC financial intelligence agency' },
      trafficking: { ar: 'منخفض جداً — حماية بحرية صارمة لسيادة الحدود عبر عملية Sovereign Borders', en: 'Very Low — strict maritime border enforcement under Operation Sovereign Borders' },
      terrorism: { ar: 'منخفض — جهاز المخابرات الأسترالي (ASIO) وتحالف العيون الخمس وأوكوس', en: 'Low — ASIO intelligence agency and Five Eyes / AUKUS trilateral pillar' },
    },
    events: {
      ar: ['1901: إعلان تأسيس الكومنولث الأسترالي الفيدرالي', '1951: توقيع معاهدة أنزوس (ANZUS) الأمنية المشتركة', '2021: الإعلان عن تحالف أوكوس (AUKUS) للغواصات النووية مع واشنطن ولندن', '2022: انتخاب أنتوني ألبانيز رئيساً للوزراء', '2024–2026: ترقية الترسانة البحرية بصفقات صواريخ توماهوك وتوسيع الشراكة الدفاعية في الإندوباسيفيك'],
      en: ['1901: Federation of Australia', '1951: ANZUS security treaty signed', '2021: Historic AUKUS nuclear-powered submarine pact with US and UK', '2022: Anthony Albanese elected Prime Minister', '2024–2026: Deploying Tomahawk cruise missiles & leading Indo-Pacific deterrence architecture'],
    },
  },

  // كوريا الجنوبية
  kr: {
    parties: {
      ar: ['حزب قوة الشعب (PPP - الحزب الحاكم)', 'الحزب الديمقراطي الكوري (DPK - المعارضة)', 'حزب إعادة بناء كوريا'],
      en: ['People Power Party (PPP)', 'Democratic Party of Korea (DPK)', 'Rebuilding Korea Party'],
    },
    military: { ar: 'الجنرال كيم ميونغ-سو (رئيس هيئة الأركان المشتركة لجمهورية كوريا)', en: 'Gen. Kim Myung-soo (Chairman of Joint Chiefs of Staff of ROK)' },
    companies: [
      { name: 'Samsung Electronics', ar: 'سامسونغ للإلكترونيات', sector: 'أشباه الموصلات وشرائح الذاكرة والهواتف', sectorEn: 'Global Tech & Semiconductor Superpower', pressure: 'أكبر مُصنع لرقائق الذاكرة (DRAM/NAND) وشاشات العرض المتقدمة في العالم', pressureEn: 'World #1 producer of memory chips (DRAM/NAND) and consumer electronics' },
      { name: 'Hanwha Aerospace', ar: 'هانوا للصناعات الفضائية والدفاعية', sector: 'مدافع كيه-9 ومحركات صواريخ', sectorEn: 'Defense & Aerospace Exporter', pressure: 'صانع مدفع الهاوتزر K9 الرائد عالمياً ومنظومات راجمات الصواريخ تشونمو', pressureEn: 'Manufacturer of world-leading K9 Thunder self-propelled howitzers' },
      { name: 'Hyundai Motor Group', ar: 'مجموعة هيونداي موتور', sector: 'صناعة السيارات والروبوتات والصلب', sectorEn: 'Automotive & Robotics Giant', pressure: 'ثالث أضخم صانع سيارات في العالم ومطور الروبوتات المتقدمة (Boston Dynamics)', pressureEn: 'World #3 automaker and advanced autonomous robotics pioneer' },
      { name: 'HD Hyundai Heavy Industries', ar: 'إتش دي هيونداي للصناعات الثقيلة', sector: 'بناء المدمرات وسفن الغاز المسال', sectorEn: 'Naval Warships & LNG Carriers', pressure: 'أكبر حوض لبناء السفن في العالم ومُصنع مدمرات إيجيس KDX-III وناقلات الغاز', pressureEn: 'World largest shipyard building Aegis guided-missile destroyers & LNG carriers' },
    ],
    risk: {
      laundering: { ar: 'منخفض — رقابة متقدمة من وحدة التحريات المالية الكورية (KoFIU) على الأصول الرقمية', en: 'Low — KoFIU stringent tracking of digital assets and cross-border capital flows' },
      trafficking: { ar: 'منخفض جداً — تشريعات حمائية ورقابة عمالية وإلكترونية محكمة', en: 'Very Low — comprehensive legal protection frameworks and labor standards' },
      terrorism: { ar: 'منخفض (تهديد عسكري إقليمي مرتفع) — جاهزية قصوى للردع الاستراتيجي ضد الترسانة الكورية الشمالية', en: 'Low terrorism, high strategic defense alert against North Korea nuclear assets' },
    },
    events: {
      ar: ['1948: تأسيس جمهورية كوريا', '1950–1953: الحرب الكورية واتفاق الهدنة والمنطقة منزوعة السلاح (DMZ)', '1988: أولمبياد سيول وتحقيق معجزة نهر الهان الاقتصادية', '2022: انتخاب يون سوك يول رئيساً للجمهورية', '2024–2026: التحول لرابع أكبر مصدر للسلاح في العالم وتوسيع التحالف الثلاثي مع واشنطن وطوكيو'],
      en: ['1948: Republic of Korea founded', '1950–1953: Korean War & Armistice at 38th parallel', '1988: Seoul Olympics & Miracle on the Han River economic leap', '2022: Yoon Suk Yeol elected President', '2024–2026: Rising to top-4 global arms exporter & historic Camp David trilateral security pact'],
    },
  },

  // باكستان
  pk: {
    parties: {
      ar: ['حزب الرابطة الإسلامية الباكستانية (نواز - PML-N)', 'حزب الشعب الباكستاني (PPP)', 'حركة الإنصاف الباكستانية (PTI)'],
      en: ['Pakistan Muslim League (Nawaz)', 'Pakistan People\'s Party (PPP)', 'Pakistan Tehreek-e-Insaf (PTI)'],
    },
    military: { ar: 'الفريق أول عاصم منير (رئيس أركان الجيش الباكستاني)', en: 'Gen. Asim Munir (Chief of Army Staff of Pakistan Army)' },
    companies: [
      { name: 'NESCOM', ar: 'الهيئة الوطنية للهندسة والعلوم', sector: 'صواريخ استراتيجية وردع نووي', sectorEn: 'Strategic Defense & Ballistic Missiles', pressure: 'تطوير صواريخ شاهين ونصر الباليستية التكتيكية والأنظمة الصاروخية الاستراتيجية', pressureEn: 'Developer of Shaheen, Nasr ballistic systems and strategic nuclear deterrent' },
      { name: 'PSO', ar: 'شركة النفط الباكستانية المحدودة', sector: 'طاقة ومستودعات تخزين استراتيجية', sectorEn: 'National Fuel & Energy Supply', pressure: 'أكبر شركة في باكستان لتأمين احتياجات البلاد من المحروقات واستيراد الغاز', pressureEn: 'Largest commercial entity securing national fuel distribution & LNG import' },
      { name: 'Fauji Foundation', ar: 'مؤسسة فوجي الاستثمارية', sector: 'صناعات كيميائية وغذائية وأسمدة', sectorEn: 'Defense-Industrial Conglomerate', pressure: 'أكبر مجمع صناعي وزراعي في باكستان تديره القوات المسلحة', pressureEn: 'Major industrial conglomerate operating fertilizer, food and power projects' },
    ],
    risk: {
      laundering: { ar: 'متوسط — الخروج الناجح من القائمة الرمادية لـ FATF بعد إصلاحات تشريعية واسعة', en: 'Medium — successful exit from FATF Grey List following 34-point reforms' },
      trafficking: { ar: 'متوسط إلى مرتفع — مكافحة شبكات العبور والتهريب عبر الحدود الغربية', en: 'Medium to High — ongoing border enforcement against illegal transit networks' },
      terrorism: { ar: 'مرتفع — مواجهة الجماعات المسلحة على الحدود الأفغانية (تحريك طالبان باكستان TTP)', en: 'High — active kinetic counter-terrorism operations against TTP border insurgencies' },
    },
    events: {
      ar: ['1947: استقلال باكستان وانفصالها وتأسيس الدولة الإسلامية المستقلة', '1971: حرب استقلال بنغلاديش', '1998: التجارب النووية التاريخية وإعلان القوة النووية المسلمة الأولى', '2015: إطلاق الممر الاقتصادي الصيني الباكستاني (CPEC) وميناء جوادر', '2024–2026: انتخاب شهباز شريف وتأمين استقرار خطط صندوق النقد الدولي والحدود'],
      en: ['1947: Independence & Partition', '1971: Bangladesh Liberation War', '1998: Historic nuclear tests establishing first Muslim nuclear state', '2015: $62B China–Pakistan Economic Corridor (CPEC) & Gwadar port launch', '2024–2026: Shehbaz Sharif coalition elected, IMF stability packages & border security'],
    },
  },

  // سوريا
  sy: {
    parties: {
      ar: ['حزب البعث العربي الاشتراكي', 'أحزاب الجبهة الوطنية التقدمية', 'الهيئات واللجان الانتقالية المستقلة'],
      en: ['Arab Socialist Ba\'ath Party', 'National Progressive Front', 'Independent Transitional Councils'],
    },
    military: { ar: 'رئيس هيئة الأركان العامة وقيادة القوات المسلحة', en: 'Chief of the General Staff & Armed Forces Command' },
    companies: [
      { name: 'SPC', ar: 'الشركة السورية للنفط', sector: 'استكشاف واستخراج النفط والغاز', sectorEn: 'Petroleum & Gas Extraction', pressure: 'إدارة حقول النفط والغاز في البادية والفرات', pressureEn: 'Managing hydrocarbon fields across Syrian Badia and Euphrates' },
      { name: 'Syrian Telecom', ar: 'الشركة السورية للاتصالات', sector: 'اتصالات وشبكات إنترنت', sectorEn: 'National Telecom Infrastructure', pressure: 'إعادة تأهيل شبكات الألياف البصرية والبنية التحتية المتضررة', pressureEn: 'Rehabilitation of fiber optic communications infrastructure' },
      { name: 'Tartus Port Authority', ar: 'هيئة ميناء طرطوس', sector: 'موانئ ولوجستيات بحرية', sectorEn: 'Maritime Port Logistics', pressure: 'المنفذ البحري الاستراتيجي على شرق المتوسط وقواعد الملاحة الحيوية', pressureEn: 'Strategic Mediterranean naval transit and commercial gate' },
    ],
    risk: {
      laundering: { ar: 'مرتفع — عقوبات دولية شاملة (قانون قيصر) واقتصاد نقدي غير رسمي واسع', en: 'High — comprehensive Caesar Act sanctions and informal cash-based economy' },
      trafficking: { ar: 'مرتفع — شبكات إنتاج وتهريب مخدرات الكبتاغون وتحديات ضبط الحدود', en: 'High — illicit Captagon manufacturing networks & regional cross-border challenges' },
      terrorism: { ar: 'مرتفع — بؤر تنظيم داعش في البادية والانتشار الفصائلي المسلح المعقد', en: 'High — active ISIS desert pockets and complex armed militia fragmentation' },
    },
    events: {
      ar: ['1946: جلاء المستعمر الفرنسي واستقلال سوريا', '1973: حرب تشرين التحريرية', '2011: اندلاع الأزمة السورية والحرب المعقدة', '2023: العودة لجامعة الدول العربية في قمة جدة', '2024–2026: التحولات السياسية الكبرى وإعادة هندسة التوازن الإقليمي ومشاريع الإعمار'],
      en: ['1946: Evacuation of French forces & independence', '1973: October Liberation War', '2011: Outbreak of Syrian crisis & conflict', '2023: Re-admitted to Arab League at Jeddah Summit', '2024–2026: Major geopolitical transitions, reconstruction dialogues & regional re-engagement'],
    },
  },

  // لبنان
  lb: {
    parties: {
      ar: ['حزب الله', 'التيار الوطني الحر', 'حزب القوات اللبنانية', 'حركة أمل', 'تيار المستقبل', 'الحزب التقدمي الاشتراكي'],
      en: ['Hezbollah', 'Free Patriotic Movement', 'Lebanese Forces', 'Amal Movement', 'Future Movement', 'Progressive Socialist Party'],
    },
    military: { ar: 'العماد جوزيف عون (قائد الجيش اللبناني - اليرزة)', en: 'Gen. Joseph Aoun (Commander of Lebanese Armed Forces)' },
    companies: [
      { name: 'Banque du Liban', ar: 'مصرف لبنان المركزي', sector: 'سلطة نقدية واحتياطي الذهب', sectorEn: 'Central Monetary Authority & Gold Reserve', pressure: 'حيازة ثاني أكبر احتياطي ذهب في المنطقة (286 طناً) وإدارة خطط التعافي المالي', pressureEn: 'Holding region 2nd largest gold reserve (286 tonnes) & financial recovery' },
      { name: 'Middle East Airlines (MEA)', ar: 'طيران الشرق الأوسط', sector: 'طيران وطني استراتيجي', sectorEn: 'National Flag Carrier', pressure: 'شريان الوصل الجوي الأساسي الوحيد للبنان مع العالم في كافة الأزمات', pressureEn: 'Critical national aviation bridge connecting Lebanon globally through crises' },
      { name: 'Port of Beirut', ar: 'إدارة واستثمار مرفأ بيروت', sector: 'موانئ وتجارة بحرية', sectorEn: 'Maritime Gateway', pressure: 'بوابة استيراد أكثر من 70% من السلع الغذائية وإعادة إعمار الصوامع', pressureEn: 'Handling 70%+ of national import cargo and ongoing grain silo rebuild' },
    ],
    risk: {
      laundering: { ar: 'مرتفع — شلل مصرفي منذ 2019 واقتصاد الكاش الموازي وضغوط إدراج FATF', en: 'High — systemic banking crisis, cash economy dominance and FATF scrutiny' },
      trafficking: { ar: 'متوسط إلى مرتفع — محاولات قوارب الهجرة غير الشرعية نحو قبرص وأوروبا', en: 'Medium to High — irregular maritime departure attempts toward Cyprus' },
      terrorism: { ar: 'مرتفع — مسرح مواجهات عسكرية واسعة على الحدود الجنوبية ومخيمات اللجوء', en: 'High — intense military confrontation along southern border and proxy tensions' },
    },
    events: {
      ar: ['1943: استقلال لبنان وإرساء الميثاق الوطني', '1975–1990: الحرب الأهلية اللبنانية واتفاق الطائف', '2000: تحرير الجنوب اللبناني', '2020: انفجار مرفأ بيروت المأساوي', '2023–2026: حرب الإسناد وتصعيد المواجهات مع إسرائيل ومفاوضات تطبيق القرار 1701'],
      en: ['1943: Independence & National Pact', '1975–1990: Civil War & Taif Agreement', '2000: Israeli withdrawal from South Lebanon', '2020: Tragic Beirut Port explosion', '2023–2026: Devastating escalation with Israel, ceasefire & UNSC 1701 enforcement talks'],
    },
  },

  // اليمن
  ye: {
    parties: {
      ar: ['المؤتمر الشعبي العام', 'التجمع اليمني للإصلاح', 'أنصار الله (الحوثيون)', 'المجلس الانتقالي الجنوبي'],
      en: ['General People\'s Congress (GPC)', 'Yemeni Congregation for Reform (Islah)', 'Ansar Allah (Houthis)', 'Southern Transitional Council (STC)'],
    },
    military: { ar: 'الفريق الركن صغير بن عزيز (رئيس هيئة الأركان العامة لقوات الشرعية)', en: 'Lt-Gen. Sagheer bin Aziz (Chief of Staff of Armed Forces)' },
    companies: [
      { name: 'Safer E&P', ar: 'شركة صافر لعمليات الاستكشاف والإنتاج', sector: 'إنتاج النفط والغاز المسال', sectorEn: 'Strategic Hydrocarbons Operator', pressure: 'تشغيل قطاع مأرب 18 وتأمين الغاز المنزلي لكافة المحافظات اليمنية', pressureEn: 'Operating Marib Block 18 and supplying cooking gas nationally' },
      { name: 'Yemen LNG', ar: 'الشركة اليمنية للغاز الطبيعي المسال', sector: 'محطة بلحاف لتصدير الغاز', sectorEn: 'Balhaf LNG Export Terminal', pressure: 'مشروع الغاز الاستراتيجي في بلحاف بطاقة تصدير 6.7 مليون طن سنوياً', pressureEn: 'Balhaf strategic $4B liquefaction facility designed for 6.7M tonnes/yr' },
      { name: 'Yemen Ports Authority', ar: 'مؤسسة موانئ خليج عدن والحديدة', sector: 'موانئ وباب المندب', sectorEn: 'Strait of Bab el-Mandeb Gateway', pressure: 'الإشراف على موانئ خليج عدن والممرات الملاصقة لمضيق باب المندب الحيوي', pressureEn: 'Operating ports overlooking critical Bab el-Mandeb energy chokepoint' },
    ],
    risk: {
      laundering: { ar: 'مرتفع — انقسام النظام المصرفي والبنك المركزي بين عدن وصنعاء', en: 'High — bifurcated banking system and rival central banks in Aden and Sana\'a' },
      trafficking: { ar: 'مرتفع — تدفق المهاجرين من القرن الأفريقي وشبكات التهريب البحرية', en: 'High — heavy migrant influx from Horn of Africa & maritime smuggling' },
      terrorism: { ar: 'مرتفع جداً — هجمات استهداف الملاحة الدولية في البحر الأحمر ونشاط القاعدة في جزيرة العرب (AQAP)', en: 'Very High — Red Sea maritime missile attacks & AQAP insurgency pockets' },
    },
    events: {
      ar: ['1962: ثورة 26 سبتمبر في الشمال و1963 ثورة 14 أكتوبر في الجنوب', '1990: تحقيق الوحدة اليمنية التاريخية وإعلان الجمهورية', '2014: سيطرة الحوثيين على العاصمة صنعاء', '2015: انطلاق عمليات عاصفة الحزم', '2023–2026: معركة البحر الأحمر ومضيق باب المندب وضربات التحالف الدولي وحوار السلام الأممي'],
      en: ['1962/1963: Revolutions in North and South', '1990: Historic Yemeni unification into Republic of Yemen', '2014: Houthi takeover of capital Sana\'a', '2015: Coalition Operation Decisive Storm', '2023–2026: Red Sea international shipping strikes, US/UK strikes & UN peace roadmaps'],
    },
  },

  // فلسطين
  ps: {
    parties: {
      ar: ['حركة التحرير الوطني الفلسطيني (فتح)', 'حركة المقاومة الإسلامية (حماس)', 'حركة الجهاد الإسلامي', 'الجبهة الشعبية لتحرير فلسطين (PFLP)'],
      en: ['Fatah (Palestinian National Liberation)', 'Hamas (Islamic Resistance Movement)', 'Palestinian Islamic Jihad (PIJ)', 'Popular Front (PFLP)'],
    },
    military: { ar: 'قوات الأمن الوطني الفلسطيني والتشكيلات المقاومة', en: 'Palestinian National Security Forces & Factional Units' },
    companies: [
      { name: 'Paltel Group', ar: 'مجموعة الاتصالات الفلسطينية (بالتل)', sector: 'اتصالات وشبكات وبنية تحتية', sectorEn: 'Telecom & Fiber Infrastructure', pressure: 'شريان الاتصال الرقمي الوحيد في الضفة الغربية وقطاع غزة تحت أقسى الظروف', pressureEn: 'Sole national telecommunications provider serving West Bank and Gaza' },
      { name: 'Bank of Palestine', ar: 'بنك فلسطين', sector: 'خدمات مصرفية وشمول مالي', sectorEn: 'Leading National Banking Group', pressure: 'أكبر مؤسسة مالية وبنكية فلسطينية بأصول تفوق 6.5 مليار دولار وشبكة فروع شاملة', pressureEn: 'Largest Palestinian financial institution with $6.5B+ assets' },
      { name: 'PADICO Holding', ar: 'شركة فلسطين للتنمية والاستثمار (باديكو)', sector: 'استثمارات صناعية وسياحية وعقارية', sectorEn: 'Diversified Industrial & Real Estate', pressure: 'محرك الاستثمار الخاص في البنية التحتية والمدن الصناعية والكهرباء', pressureEn: 'Premier private investment vehicle in industrial parks and energy' },
    ],
    risk: {
      laundering: { ar: 'متوسط — رقابة صارمة من سلطة النقد الفلسطينية (PMA) وفق معايير بازل وفاتف', en: 'Medium — strict Palestinian Monetary Authority (PMA) oversight under Basel rules' },
      trafficking: { ar: 'منخفض إلى متوسط — قيود الحركة والحواجز العسكرية وعزل المعابر الحدودية', en: 'Low to Medium — movement restrictions and tight border/crossing controls' },
      terrorism: { ar: 'مرتفع — مسرح نزاع دائم مع الاحتلال الإسرائيلي وتصنيفات دولية للفصائل المقاومة', en: 'High — perpetual armed conflict theater and international political designations' },
    },
    events: {
      ar: ['1948: النكبة الفلسطينية وتهجير الشعب الفلسطيني', '1964: تأسيس منظمة التحرير الفلسطينية (PLO)', '1993: توقيع اتفاقيات أوسلو وتأسيس السلطة الوطنية', '2012: تصويت الجمعية العامة للأمم المتحدة للاعتراف بدولة فلسطين كعضو مراقب', '2023–2026: حرب غزة الكبرى وموجة اعترافات دولية جديدة (إسبانيا، إيرلندا، النرويج) ومحكمة العدل الدولية'],
      en: ['1948: Nakba & mass displacement of Palestinians', '1964: Palestine Liberation Organization (PLO) founded', '1993: Oslo Accords & Palestinian National Authority established', '2012: UN General Assembly grants Non-Member Observer State status', '2023–2026: Catastrophic Gaza war, ICJ historic rulings & new European wave of recognitions'],
    },
  },

  // السودان
  sd: {
    parties: {
      ar: ['القوات المسلحة السودانية', 'قوى الحرية والتغيير (قحت)', 'حزب الأمة القومي', 'الحزب الاتحادي الديمقراطي'],
      en: ['Sudanese Armed Forces (SAF)', 'Forces of Freedom and Change (FFC)', 'National Umma Party', 'Democratic Unionist Party'],
    },
    military: { ar: 'الفريق أول ركن عبد الفتاح البرهان (القائد العام للقوات المسلحة ورئيس مجلس السيادة)', en: 'Gen. Abdel Fattah al-Burhan (Commander-in-Chief of SAF)' },
    companies: [
      { name: 'Sudapet', ar: 'المؤسسة الوطنية السودانية للنفط (سودابت)', sector: 'هيدروكربونات وخطوط أنابيب تصدير', sectorEn: 'National Hydrocarbons & Pipeline', pressure: 'إدارة خط أنابيب نقل نفط دولة جنوب السودان إلى ميناء بورتسودان على البحر الأحمر', pressureEn: 'Operating export pipelines for South Sudan crude to Port Sudan terminal' },
      { name: 'Kenana Sugar', ar: 'شركة سكر كنانة المحدودة', sector: 'صناعة السكر والزراعة المروية', sectorEn: 'Agro-Industrial Sugar Giant', pressure: 'واحدة من أكبر مجمعات إنتاج السكر المتكاملة في العالم بمساحات زراعية هائلة', pressureEn: 'World largest integrated white sugar complex and biofuel pioneer' },
      { name: 'Sea Ports Corporation', ar: 'هيئة الموانئ البحرية السودانية', sector: 'موانئ البحر الأحمر وبورتسودان', sectorEn: 'Port Sudan Maritime Gate', pressure: 'المنفذ البحري الاستراتيجي الوحيد للبلاد ومركز استقرار المقرات الحكومية المؤقتة', pressureEn: 'Sole strategic maritime outlet and wartime administrative capital hub' },
    ],
    risk: {
      laundering: { ar: 'مرتفع — تهريب الذهب عبر منافذ غير رسمية وتحديات انهيار العملة المحلية', en: 'High — widespread artisanal gold smuggling and currency depreciation' },
      trafficking: { ar: 'مرتفع جداً — أزمة نزوح تجاوزت 10 ملايين شخص وشبكات استغلال عابرة للحدود', en: 'Very High — world largest displacement crisis (10M+) & vulnerable trafficking' },
      terrorism: { ar: 'مرتفع — صراع عسكري مسلح شامل بين الجيش وقوات الدعم السريع (RSF)', en: 'High — full-scale armed war between regular Armed Forces and RSF paramilitary' },
    },
    events: {
      ar: ['1956: إعلان الاستقلال الوطني عن الاستعمار الثنائي', '2011: انفصال جنوب السودان بعد استفتاء شعبي', '2019: الإطاحة بنظام عمر البشير وتوقيع الوثيقة الدستورية', '2023: اندلاع الحرب الدامية بين الجيش والدعم السريع في الخرطوم', '2024–2026: انتقال العاصمة المؤقتة إلى بورتسودان ومساعي المبادرات الإقليمية (منبر جدة) لإنهاء الحرب'],
      en: ['1956: National Independence declared', '2011: Separation of South Sudan via historic referendum', '2019: Ouster of Omar al-Bashir & constitutional charter', '2023: War erupted in Khartoum between SAF and RSF', '2024–2026: Government relocation to Port Sudan & Jeddah/Manama peace initiatives'],
    },
  },

  // ليبيا
  ly: {
    parties: {
      ar: ['مجلس النواب الليبي (طبرق/بنغازي)', 'المجلس الأعلى للدولة (طرابلس)', 'حكومة الوحدة الوطنية', 'الحكومة الليبية المكلفة'],
      en: ['House of Representatives (Tobruk)', 'High Council of State (Tripoli)', 'Government of National Unity (GNU)', 'Government of National Stability'],
    },
    military: { ar: 'رئاسة الأركان العامة للجيش الليبي (غرباً) والقيادة العامة للقوات المسلحة (شرقاً)', en: 'General Staff of Libyan Army (West) & General Command of Armed Forces (East)' },
    companies: [
      { name: 'NOC Libya', ar: 'المؤسسة الوطنية للنفط', sector: 'نفط خام وغاز طبيعي', sectorEn: 'National Oil Corporation', pressure: 'إنتاج أكثر من 1.25 مليون برميل يومياً والتحكم بأكبر احتياطي نفطي مؤكد في أفريقيا (48 مليار برميل)', pressureEn: 'Output of 1.25M+ bpd controlling Africa largest proven crude reserves (48B bbl)' },
      { name: 'LIA', ar: 'المؤسسة الليبية للاستثمار', sector: 'صندوق ثروة سيادية', sectorEn: 'Sovereign Wealth Fund', pressure: 'إدارة أصول سيادية مجمدة جزئياً تفوق 68 مليار دولار في بنوك وشركات العالم', pressureEn: 'Managing $68B+ sovereign portfolio across global equities and real estate' },
      { name: 'LISCO', ar: 'الشركة الليبية للحديد والصلب', sector: 'صناعة الصلب الثقيل والحديد الإسفنجي', sectorEn: 'Iron & Steel Manufacturing', pressure: 'أكبر مجمع صناعي للصلب في شمال أفريقيا بطاقة إنتاجية تتجاوز 1.6 مليون طن سنوياً', pressureEn: 'North Africa premier steel manufacturing complex based in Misrata' },
    ],
    risk: {
      laundering: { ar: 'مرتفع — تهريب الوقود المدعوم وانقسام المؤسسات المالية والمصرفية', en: 'High — illicit subsidized fuel smuggling and fragmented banking rails' },
      trafficking: { ar: 'مرتفع جداً — النقطة الرئيسية لانطلاق قوارب الهجرة غير الشرعية عبر وسط المتوسط', en: 'Very High — primary African transit launchpad for Central Med boat journeys' },
      terrorism: { ar: 'متوسط — تحييد تنظيم داعش في سرت مع بقاء مخاطر الجماعات المسلحة المتنقلة في الجنوب', en: 'Medium — defeat of ISIS in Sirte while desert borders remain porous' },
    },
    events: {
      ar: ['1951: إعلان استقلال المملكة الليبية المتحدة', '1969: ثورة الفاتح ووصول معمر القذافي للحكم', '2011: ثورة 17 فبراير وتدخل الناتو وسقوط النظام السابق', '2020: توقيع اتفاق وقف إطلاق النار الدائم في جنيف', '2024–2026: استئناف إنتاج النفط بكامل طاقته ومساعي توحيد المصرف المركزي وإجراء الانتخابات الرئاسية'],
      en: ['1951: United Kingdom of Libya declared independent', '1969: September Revolution brings Gaddafi to power', '2011: 17 February Revolution & NATO intervention', '2020: Permanent nationwide ceasefire signed in Geneva', '2024–2026: Crude production rebound to 1.3M bpd & Central Bank unification efforts'],
    },
  },

  // تونس
  tn: {
    parties: {
      ar: ['حركة الشعب', 'حركة النهضة', 'الحزب الدستوري الحر', 'التيار الديمقراطي'],
      en: ['People\'s Movement (Echaâb)', 'Ennahda Movement', 'Free Destourian Party (PDL)', 'Democratic Current'],
    },
    military: { ar: 'الفريق أول رئيس أركان جيش البر التونسي وقيادة الدفاع الوطني', en: 'Chief of Staff of Tunisian Land Army' },
    companies: [
      { name: 'STEG', ar: 'الشركة التونسية للكهرباء والغاز', sector: 'طاقة ومحطات ربط متوسطية', sectorEn: 'Power Utility & ELMED Subsea Cable', pressure: 'مشروع الربط الكهربائي البحري القاري (ELMED) مع إيطاليا بقدرة 600 ميغاوات', pressureEn: 'ELMED 600 MW undersea electricity interconnector linking Tunisia to Italy' },
      { name: 'CPG', ar: 'شركة فوسفاط قفصة', sector: 'تعدين وتصدير الفوسفاط', sectorEn: 'Phosphate Mining Conglomerate', pressure: 'خامس أكبر احتياطي فوسفاط تاريخي وشريان الصناعات الكيميائية التونسية', pressureEn: 'Strategic phosphate producer and supplier of Tunisian chemical industries' },
      { name: 'Poulina Group', ar: 'مجموعة بولينا القابضة', sector: 'صناعات غذائية وتقنية ومواد بناء', sectorEn: 'Diversified Private Conglomerate', pressure: 'أكبر مجمع أعمال خاص في تونس يضم أكثر من 100 شركة تابعة ومصدر دولي', pressureEn: 'Largest private industrial conglomerate in Tunisia with 100+ subsidiaries' },
    ],
    risk: {
      laundering: { ar: 'منخفض إلى متوسط — الامتثال التام لمعايير مجموعة العمل المالي (FATF) بدون عقوبات', en: 'Low to Medium — full FATF compliance status with robust central bank rules' },
      trafficking: { ar: 'متوسط إلى مرتفع — جهود أمنية وخفر سواحل مكثف على سواحل صفاقس لمنع عبور القوارب نحو إيطاليا', en: 'Medium to High — intensive maritime coast guard policing along Sfax coast' },
      terrorism: { ar: 'منخفض — استقرار أمني مشدد وتحييد تام لكتائب الشعانبي المسلحة منذ سنوات', en: 'Low — tight security grip and complete neutralization of mountain insurgencies' },
    },
    events: {
      ar: ['1956: استقلال تونس وإعلان الجمهورية في 1957 بقيادة الحبيب بورقيبة', '2011: ثورة الياسمين وسقوط نظام بن علي وانطلاق الربيع العربي', '2014: إقرار الدستور الديمقراطي', '2021: إجراءات 25 يوليو الاستثنائية للرئيس قيس سعيد وإقرار دستور جديد (2022)', '2024–2026: إعادة انتخاب قيس سعيد لولاية رئاسية جديدة وتوقيع مذكرة الشراكة الاستراتيجية مع الاتحاد الأوروبي'],
      en: ['1956: Independence & 1957 Republic declared under Bourguiba', '2011: Jasmine Revolution ousts Ben Ali', '2014: Democratic Constitution adopted', '2021: 25 July measures by President Kais Saied & 2022 new constitution', '2024–2026: Kais Saied re-elected & EU-Tunisia comprehensive strategic partnership pact'],
    },
  },

  // أوكرانيا
  ua: {
    parties: {
      ar: ['حزب خادم الشعب (الحاكم)', 'التضامن الأوروبي (المعارضة)', 'حزب باتكيفشينا (الوطن)'],
      en: ['Servant of the People (Ruling)', 'European Solidarity', 'Batkivshchyna (Fatherland)'],
    },
    military: { ar: 'الجنرال أولكسندر سيرسكي (القائد العام للقوات المسلحة الأوكرانية)', en: 'Gen. Oleksandr Syrskyi (Commander-in-Chief of Armed Forces of Ukraine)' },
    companies: [
      { name: 'Naftogaz Group', ar: 'مجموعة نفط وغاز أوكرانيا', sector: 'غاز طبيعي وخزانات استراتيجية', sectorEn: 'Natural Gas & Underground Storage', pressure: 'أكبر خزانات غاز طبيعي جوفية في أوروبا بسعة تفوق 31 مليار متر مكعب', pressureEn: 'Europe largest underground gas storage capacity exceeding 31B cubic meters' },
      { name: 'Ukroboronprom (UDI)', ar: 'الصناعات الدفاعية الأوكرانية', sector: 'صناعة مسيّرات ومدرعات ومدفعية', sectorEn: 'Domestic Defense Manufacturing', pressure: 'تطوير مسيّرات بعيدة المدى (Liutyi) وصواريخ نبتون المضادة للسفن ومسيرات ماغورا البحرية', pressureEn: 'Producing Magura naval drones, Neptune cruise missiles & long-range strike UAVs' },
      { name: 'Ukrzaliznytsia', ar: 'سكك حديد أوكرانيا', sector: 'نقل لوجستي وشبكات قطارات', sectorEn: 'State Rail Logistics Artery', pressure: 'العمود الفقري لحركة الإمداد العسكري والإنساني وتصدير الحبوب أثناء الحرب', pressureEn: 'Strategic lifeline transporting troop deployments, refugees and grain exports' },
    ],
    risk: {
      laundering: { ar: 'متوسط — رقابة دولية مشددة وشروط صارمة من الاتحاد الأوروبي وصندوق النقد لمكافحة الفساد', en: 'Medium — strict EU/IMF conditionalities & specialized anti-corruption bureau (NABU)' },
      trafficking: { ar: 'متوسط — تحديات نزوح ملايين المواطنين خارج وداخل البلاد بسبب الحرب', en: 'Medium — displacement of millions across Europe with EU temporary protection' },
      terrorism: { ar: 'مرتفع — مسرح حرب شاملة كبرى بالصواريخ الباليستية والمسيّرات والقتال البري', en: 'High — premier high-intensity interstate warfare with hypersonic/cruise missile strikes' },
    },
    events: {
      ar: ['1991: إعلان الاستقلال عن الاتحاد السوفيتي باستفتاء تاريخي بنسبة 92%', '1994: توقيع مذكرة بودابست والتخلي عن الترسانة النووية', '2014: ثورة الكرامة وضم روسيا لشبه جزيرة القرم', '2022: اندلاع الحرب الروسية الأوكرانية الشاملة', '2024–2026: فتح مفاوضات الانضمام للاتحاد الأوروبي وتوقيع اتفاقيات أمنية ثنائية مع دول الناتو'],
      en: ['1991: Independence from USSR approved by 92% referendum', '1994: Budapest Memorandum surrendering nuclear arsenal', '2014: Revolution of Dignity & Russian annexation of Crimea', '2022: Full-scale Russian invasion begins', '2024–2026: Formal EU accession negotiations opened & bilateral security pacts with NATO allies'],
    },
  },
};

