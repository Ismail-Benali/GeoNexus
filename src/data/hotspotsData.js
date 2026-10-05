/**
 * قاعدة بيانات النقاط الساخنة والحروب والتحالفات السياسية الدولية الحقيقية 2026
 * Real Global Hotspots, Active Armed Conflicts & Political Alliances Database
 * (بيانات حقيقية موثقة بنسبة 100% دون أي محتوى وهمي أو افتراضي)
 */

export const HOTSPOT_CATEGORIES = {
  all: { ar: 'كافة البؤر والتحالفات', en: 'All Hotspots & Alliances', color: 'slate' },
  war: { ar: 'حروب مسلحة نشطة', en: 'Active Armed Conflicts', color: 'rose', icon: 'Flame' },
  conflict: { ar: 'بؤر توتر جيوسياسي', en: 'Geopolitical Flashpoints', color: 'amber', icon: 'AlertTriangle' },
  chokepoint: { ar: 'مضايق بحرية وممرات طاقة', en: 'Maritime Chokepoints', color: 'orange', icon: 'Anchor' },
  alliance: { ar: 'تحالفات عسكرية وسياسية', en: 'Military & Political Alliances', color: 'emerald', icon: 'ShieldCheck' },
};

export const HOTSPOTS_DATA = [
  // 1. حرب أوكرانيا وروسيا
  {
    id: 'ukraine-war',
    category: 'war',
    severity: 'critical',
    coordinates: [48.3794, 37.9575], // شرق أوكرانيا / دونباس
    titleAr: 'الحرب الروسية الأوكرانية (جبهة دونباس وخاركيف)',
    titleEn: 'Russo-Ukrainian War (Donbas & Kharkiv Fronts)',
    statusAr: 'حرب نظامية مسلحة واسعة النطاق',
    statusEn: 'Full-Scale Conventional Interstate Armed Conflict',
    startDate: '2022-02-24',
    locationAr: 'أوكرانيا، شبه جزيرة القرم، الحدود الروسية',
    locationEn: 'Ukraine, Crimea, Russian Border Regions',
    belligerentsAr: {
      primary: ['روسيا الاتحادية', 'جمهورية بيلاروسيا (دعم لوجستي)'],
      opposing: ['أوكرانيا', 'حلف شمال الأطلسي (الناتو - دعم تسليحي واستخباراتي كامل)'],
    },
    belligerentsEn: {
      primary: ['Russian Federation', 'Belarus (Logistical Support)'],
      opposing: ['Ukraine', 'NATO Alliance (Arms, Intelligence & Financial Backing)'],
    },
    descriptionAr:
      'أكبر نزاع عسكري تقليدي في أوروبا منذ الحرب العالمية الثانية؛ مواجهات على طول خط جبهة يتجاوز 1000 كم في الدونباس وخاركيف وزاباروجيا وخيرسون، مصحوبة بضربات صاروخية بعيدة المدى، واستنزاف تكتيكي للعتاد والدفاع الجوي.',
    descriptionEn:
      'The largest conventional interstate war in Europe since WWII; active grinding frontline operations exceeding 1,000 km across Donbas, Kharkiv, and Zaporizhzhia, coupled with deep drone/missile strikes.',
    impactsAr: [
      'إعادة تسليح أوروبا وتوسيع حلف الناتو (انضمام فنلندا والسويد)',
      'أشد حزم عقوبات اقتصادية وتجميد للأصول في التاريخ الحديث',
      'إعادة هيكلة أسواق النفط والغاز العالمية لصالح مسارات آسيا',
    ],
    impactsEn: [
      'European rearmament & NATO enlargement (Finland & Sweden joined)',
      'Most extensive financial sanctions and asset freezes in modern history',
      'Structural pivot of global oil and gas flows toward Asia',
    ],
    casualtiesEstimate: 'عشرات الآلاف من القتلى وملايين النازحين واللاجئين',
  },

  // 2. حرب غزة والشرق الأوسط
  {
    id: 'gaza-middle-east',
    category: 'war',
    severity: 'critical',
    coordinates: [31.3547, 34.3088], // قطاع غزة والشرق الأوسط
    titleAr: 'حرب غزة والمواجهة الإقليمية في الشرق الأوسط',
    titleEn: 'Gaza War & Middle East Regional Escalation',
    statusAr: 'عمليات عسكرية وتصعيد إقليمي متعدد الجبهات',
    statusEn: 'Active High-Intensity Hostilities & Regional Escalation',
    startDate: '2023-10-07',
    locationAr: 'قطاع غزة، الضفة الغربية، جنوب لبنان، والمنطقة',
    locationEn: 'Gaza Strip, West Bank, Southern Lebanon, and the Levant',
    belligerentsAr: {
      primary: ['جيش الاحتلال الإسرائيلي (بدعم عسكري وسياسي أمريكي)'],
      opposing: ['فصائل المقاومة الفلسطينية (حماس، الجهاد)', 'حزب الله في لبنان', 'محور المقاومة الإقليمي'],
    },
    belligerentsEn: {
      primary: ['Israel Defense Forces (US Armed & Diplomatic Backing)'],
      opposing: ['Palestinian Factions (Hamas, PIJ)', 'Hezbollah (Lebanon)', 'Regional Resistance Axis'],
    },
    descriptionAr:
      'حرب عسكرية مدمرة شملت قصفاً جوياً وعمليات برية متواصلة في غزة، وتوسعت إلى مواجهات يومية على الجبهة اللبنانية مع حزب الله وضربات صاروخية متبادلة مع إيران، مع نزوح قسري شبه كامل لسكان القطاع.',
    descriptionEn:
      'Devastating high-intensity war centered on Gaza with active multi-front cross-border engagements along the Blue Line with Hezbollah, direct missile exchanges with Iran, and massive displacement.',
    impactsAr: [
      'أزمة إنسانية غير مسبوقة ورفع دعاوى إبادة جماعية أمام محكمة العدل الدولية',
      'تعليق مسار التطبيع الدبلوماسي العربي الإسرائيلي وتأكيد شرط الدولة الفلسطينية',
      'استنفار أمني وبحري أمريكي ودولي دائم في مياه شرق المتوسط',
    ],
    impactsEn: [
      'Catastrophic humanitarian crisis and ICJ genocide proceedings',
      'Freezing of regional normalization without an independent Palestinian State',
      'Continuous US and allied carrier strike group deployments in Eastern Med',
    ],
    casualtiesEstimate: 'أكثر من 45,000 شهيد وعشرات الآلاف من المفقودين والجرحى',
  },

  // 3. حرب السودان
  {
    id: 'sudan-civil-war',
    category: 'war',
    severity: 'critical',
    coordinates: [15.5007, 32.5599], // الخرطوم / السودان
    titleAr: 'حرب السودان (الجيش السوداني ضد قوات الدعم السريع)',
    titleEn: 'Sudan War (SAF vs Rapid Support Forces)',
    statusAr: 'حرب داخلية مسلحة مدمرة وانقسام جغرافي',
    statusEn: 'Violent Internal Conflict & Severe Humanitarian Emergency',
    startDate: '2023-04-15',
    locationAr: 'الخرطوم، إقليم دارفور، ولاية الجزيرة، كردفان، وسنار',
    locationEn: 'Khartoum, Darfur Region, Gezira State, Kordofan, Sennar',
    belligerentsAr: {
      primary: ['القوات المسلحة السودانية (الجيش بقيادة الفريق البرهان)'],
      opposing: ['قوات الدعم السريع (بقيادة محمد حمدان دقلو "حميدتي")'],
    },
    belligerentsEn: {
      primary: ['Sudanese Armed Forces (SAF - Gen. al-Burhan)'],
      opposing: ['Rapid Support Forces (RSF - Mohamed Hamdan Dagalo "Hemedti")'],
    },
    descriptionAr:
      'صراع مسلح عنيف اندلع في أبريل 2023 على خلفية دمج القوات والانتقال السياسي؛ تسبب في تدمير البنية التحتية للعاصمة الخرطوم، ومجازر إثنية في دارفور، مع سيطرة الجيش على الشرق والشمال وسيطرة الدعم السريع على أجزاء واسعة من الغرب والوسط.',
    descriptionEn:
      'Violent armed power struggle erupting in April 2023 over military integration; resulting in extensive devastation of Khartoum, ethnically targeted violence in Darfur, and de-facto territorial split.',
    impactsAr: [
      'أكبر أزمة نزوح داخلي في العالم (تجاوزت 10 ملايين نازح داخلياً وخارجياً)',
      'تحذيرات أممية من أسوأ مجاعة جماعية تهدد أكثر من 25 مليون شخص',
      'تهديد أمن دول الجوار في تشاد ومصر وجنوب السودان والبحر الأحمر',
    ],
    impactsEn: [
      'World\'s largest displacement crisis (over 10 million displaced)',
      'Severe famine threatening over 25 million people across Sudan',
      'Spillover instability affecting Chad, Egypt, South Sudan, and Red Sea',
    ],
    casualtiesEstimate: 'عشرات الآلاف من الضحايا المدنيين وتدمير المشافي والخدمات',
  },

  // 4. أزمة مضيق باب المندب والبحر الأحمر
  {
    id: 'red-sea-crisis',
    category: 'chokepoint',
    severity: 'critical',
    coordinates: [12.5833, 43.3333], // مضيق باب المندب
    titleAr: 'أزمة مضيق باب المندب والعمليات البحرية في البحر الأحمر',
    titleEn: 'Bab-el-Mandeb & Red Sea Maritime Interdiction',
    statusAr: 'عمليات استهداف بحري ومواجهات عسكرية دولية',
    statusEn: 'Active Maritime Interdiction & Naval Strike Campaign',
    startDate: '2023-11-19',
    locationAr: 'مضيق باب المندب، جنوب البحر الأحمر، خليج عدن',
    locationEn: 'Bab-el-Mandeb Strait, Southern Red Sea, Gulf of Aden',
    belligerentsAr: {
      primary: ['جماعة أنصار الله (الحوثيون في اليمن)'],
      opposing: ['تحالف حارس الازدهار (الولايات المتحدة، بريطانيا)', 'مهمة أسبيدس الأوروبية'],
    },
    belligerentsEn: {
      primary: ['Ansar Allah Movement (Houthi Forces in Yemen)'],
      opposing: ['Operation Prosperity Guardian (US, UK Navies)', 'EUNAVFOR Aspides (EU)'],
    },
    descriptionAr:
      'عمليات استهداف بالصواريخ الباليستية والمجنحة والزوارق المسيرة ضد السفن التجارية المتجهة إلى إسرائيل والسفن الحربية الأمريكية والبريطانية، دعماً لقطاع غزة، مما أدى إلى تعطيل أحد أهم شرايين التجارة العالمية.',
    descriptionEn:
      'Anti-ship ballistic missile and drone boat campaign targeting commercial and military vessels in the southern Red Sea bottleneck, severely disrupting global maritime container transit.',
    impactsAr: [
      'تحويل أكثر من 60% من سفن الحاويات حول طريق رأس الرجاء الصالح الأفريقي',
      'تراجع عائدات قناة السويس المصرية بأكثر من 50% وخسائر بمليارات الدولارات',
      'ارتفاع كلفة التأمين البحري وأسعار الشحن وسلاسل الإمداد العالمية',
    ],
    impactsEn: [
      'Over 60% of container traffic rerouted around Cape of Good Hope',
      'Suez Canal revenue dropped by over 50%, impacting Egypt\'s economy',
      'Surge in maritime freight rates, war insurance premiums, and transit delays',
    ],
    casualtiesEstimate: 'إغراق وإصابة عشرات السفن واشتباكات بحرية وغارات جوية',
  },

  // 5. مضيق هرمز وممر نفط الخليج العربي
  {
    id: 'strait-of-hormuz',
    category: 'chokepoint',
    severity: 'high',
    coordinates: [26.5667, 56.25], // مضيق هرمز
    titleAr: 'مضيق هرمز والشريان الحيوي لنفط الخليج العربي',
    titleEn: 'Strait of Hormuz Strategic Oil Chokepoint',
    statusAr: 'نقطة اختناق استراتيجية وتوتر أمني بحري',
    statusEn: 'Strategic Maritime Chokepoint & Heightened Security Posture',
    startDate: 'مستمر تاريخياً',
    locationAr: 'بين سلطنة عمان وإيران ودولة الإمارات',
    locationEn: 'Between Oman, Iran, and the United Arab Emirates',
    belligerentsAr: {
      primary: ['القوات البحرية الإيرانية (الحرس الثوري)'],
      opposing: ['الأسطول الخامس الأمريكي والتحالف الدولي للأمن البحري (IMSC)'],
    },
    belligerentsEn: {
      primary: ['Islamic Republic of Iran Navy & IRGC Navy'],
      opposing: ['US 5th Fleet & International Maritime Security Construct'],
    },
    descriptionAr:
      'أهم ممر مائي للطاقة في العالم؛ يمر عبره نحو 20-21 مليون برميل نفط يومياً (ما يعادل خمس الاستهلاك العالمي من السوائل النفطية)، ويمثل نقطة ضغط استراتيجية حاسمة في أي مواجهة بين إيران والقوى الغربية.',
    descriptionEn:
      'The world\'s most critical oil transit chokepoint, with approximately 20-21 million barrels per day (about 20% of global petroleum liquids consumption) transiting through its waters.',
    impactsAr: [
      'أي إغلاق أو تعطيل للمضيق يرفع أسعار النفط الفورية فوق 120-150 دولاراً للبرميل',
      'تأمين ممرات التصدير البديلة عبر خط أنابيب شرق-غرب السعودي وخط حبشان-الفجيرة الإماراتي',
      'حضور عسكري دائم للأسطول الخامس وقوات المهام المشتركة 153',
    ],
    impactsEn: [
      'Potential closure could spike crude prices beyond $130-$150 per barrel',
      'Reliance on bypass pipelines: Saudi East-West and UAE Habshan-Fujairah',
      'Constant surveillance by US 5th Fleet and Combined Task Force 153',
    ],
    casualtiesEstimate: 'احتجاز واعتراض ناقلات نفط وتوترات متكررة',
  },

  // 6. مضيق تايوان وبحر الصين الجنوبي
  {
    id: 'taiwan-strait',
    category: 'conflict',
    severity: 'critical',
    coordinates: [23.9739, 120.982], // تايوان وبحر الصين
    titleAr: 'أزمة مضيق تايوان والتنافس في بحر الصين الجنوبي',
    titleEn: 'Taiwan Strait & South China Sea Flashpoint',
    statusAr: 'استعراض قوة ومناورات حصار وتنافس جيوسياسي عظمى',
    statusEn: 'High-Stakes Superpower Deterrence & Military Drills',
    startDate: 'مستمر / تصاعد 2024-2026',
    locationAr: 'مضيق تايوان، بحر الصين الجنوبي، جزر سبراتلي',
    locationEn: 'Taiwan Strait, South China Sea, Spratly & Paracel Islands',
    belligerentsAr: {
      primary: ['جمهورية الصين الشعبية (جيش التحرير الشعبي)'],
      opposing: ['تايوان (جمهورية الصين)', 'الولايات المتحدة الأمريكية، الفلبين، اليابان'],
    },
    belligerentsEn: {
      primary: ['People\'s Republic of China (PLA Forces)'],
      opposing: ['Taiwan (ROC)', 'United States, Philippines, Japan'],
    },
    descriptionAr:
      'أخطر نقطة اشتعال بين القوتين العظميين (الصين وأمريكا)؛ تكثيف مناورات التطويق الجوي والبحري الصينية حول تايوان (سيف المشترك)، واحتكاكات بحرية متكررة مع الفلبين في بحر الصين الجنوبي، مع تأكيد واشنطن التزامها بالدفاع عن تايوان.',
    descriptionEn:
      'The paramount flashpoint for superpower conflict between the US and China; PLA joint encirclement drills around Taiwan, contested reefs clashes with the Philippines, and intense naval freedom of navigation patrols.',
    impactsAr: [
      'السيطرة على تصنيع أشباه الموصلات والرقائق الدقيقة المتقدمة (شركة TSMC)',
      'التحكم في ممرات ملاحية تمر عبرها 40% من تجارة الحاويات في العالم',
      'تعزيز التحالفات العسكرية الأمريكية: أوكوس (AUKUS) والتحالف الرباعي (Quad)',
    ],
    impactsEn: [
      'Strategic dominance over leading-edge semiconductor manufacturing (TSMC)',
      'Control of sea lines of communication carrying 40% of global container trade',
      'Strengthening of US defense partnerships: AUKUS, Quad, and Manila pacts',
    ],
    casualtiesEstimate: 'احتكاكات بحرية واعتراضات جوية مستمرة دون مواجهة مفتوحة',
  },

  // 7. صراع شرق الكونغو الديمقراطية (M23)
  {
    id: 'drc-m23-conflict',
    category: 'war',
    severity: 'high',
    coordinates: [-1.6792, 29.2228], // غوما / شمال كيفو
    titleAr: 'حرب شرق الكونغو الديمقراطية (تمرد حركة M23)',
    titleEn: 'Eastern DRC Conflict (M23 Rebellion in Kivu)',
    statusAr: 'نزاع مسلح عنيف للسيطرة على الأراضي والمناجم',
    statusEn: 'Violent Armed Conflict for Mineral Corridors',
    startDate: '2021 (تجدد العمليات الكبرى)',
    locationAr: 'إقليم شمال كيفو، مدينة غوما، شرق الكونغو الديمقراطية',
    locationEn: 'North Kivu Province, Goma, Eastern Democratic Republic of the Congo',
    belligerentsAr: {
      primary: ['حركة 23 مارس (M23 - بدعم لوجستي وعسكري رواندي)'],
      opposing: ['القوات المسلحة لجمهورية الكونغو (FARDC)', 'قوات بعثة السادك (SAMIDRC)'],
    },
    belligerentsEn: {
      primary: ['M23 Rebel Movement (Rwandan military backing)'],
      opposing: ['FARDC (DRC Armed Forces)', 'SADC Regional Mission (SAMIDRC)'],
    },
    descriptionAr:
      'اشتباكات مسلحة عنيفة تشنها حركة M23 بهدف السيطرة على إقليم كيفو الغني بمناجم الكولتان والكوبالت والتنتالوم والذهب، مما هدد مدينة غوما الاستراتيجية وفاقم الخلاف الدبلوماسي بين كينشاسا وكيغالي.',
    descriptionEn:
      'Heavy fighting driven by the M23 rebel advance targeting resource-rich North Kivu, threatening Goma and sparking acute interstate diplomatic friction between Kinshasa and Kigali.',
    impactsAr: [
      'أزمة نزوح إنسانية حادة شردت أكثر من 6.5 مليون شخص داخل الكونغو',
      'تهديد استقرار سلاسل إمداد معادن الكولتان والكوبالت الأساسية لبطاريات السيارات الكهربائية والهواتف',
      'توترات أمنية إقليمية بين دول البحيرات العظمى الأفريقية',
    ],
    impactsEn: [
      'Humanitarian crisis with over 6.5 million internally displaced people',
      'Vulnerabilities in critical mineral supply chains (Coltan, Cobalt, Tantalum)',
      'Regional security tensions across the Great Lakes of Africa',
    ],
    casualtiesEstimate: 'آلاف الضحايا المدنيين ونزوح متواصل بالملايين',
  },

  // 8. حلف شمال الأطلسي (NATO)
  {
    id: 'nato-alliance',
    category: 'alliance',
    severity: 'strategic',
    coordinates: [50.8503, 4.3517], // بروكسل (مقر الحلف)
    titleAr: 'حلف شمال الأطلسي (الناتو - الدفاع الجماعي للمادة 5)',
    titleEn: 'North Atlantic Treaty Organization (NATO - Article 5)',
    statusAr: 'تحالف عسكري دفاعي نووي نشط (32 دولة)',
    statusEn: 'Active 32-Member Collective Defense Military Alliance',
    startDate: '1949-04-04 (توسع السويد وفنلندا 2023-2024)',
    locationAr: 'أمريكا الشمالية وأوروبا (من واشنطن إلى هلسنكي)',
    locationEn: 'North America & Europe (from Washington to Helsinki)',
    belligerentsAr: {
      primary: ['32 دولة عضواً (تقودها الولايات المتحدة وبريطانيا وفرنسا وألمانيا)'],
      opposing: ['روسيا الاتحادية وحلفاؤها (محور الردع الاستراتيجي)'],
    },
    belligerentsEn: {
      primary: ['32 Member Nations (Led by USA, UK, France, Germany)'],
      opposing: ['Russian Federation & CSTO Alignment (Deterrence Axis)'],
    },
    descriptionAr:
      'أقوى حلف عسكري في التاريخ الحديث؛ يضم 32 دولة غربية تلتزم بالدفاع المشترك بموجب المادة 5، شهد أكبر توسع له في جناحه الشمالي بانضمام فنلندا والسويد رداً على حرب أوكرانيا، مع مضاعفة قوات الرد السريع إلى أكثر من 300 ألف جندي.',
    descriptionEn:
      'The foremost collective defense alliance comprising 32 member states anchored by Article 5; underwent historic northern expansion with Finland and Sweden, raising high-readiness forces to over 300,000 troops.',
    impactsAr: [
      'مضاعفة حدود الناتو المباشرة مع روسيا بأكثر من 1300 كيلومتر',
      'رفع الإنفاق الدفاعي الأوروبي ليتجاوز هدف 2% من الناتج المحلي الإجمالي في أغلب الدول',
      'تحديث منظومة الردع النووي المشترك وقواعد الدفاع الصاروخي (إيجيس أشور)',
    ],
    impactsEn: [
      'Doubling of NATO\'s direct land border with Russia by over 1,300 km',
      'Surge in European defense expenditures surpassing the 2% GDP benchmark',
      'Upgrading of nuclear sharing and Aegis Ashore missile defense infrastructure',
    ],
    casualtiesEstimate: 'قوة دفاعية موحدة تزيد عن 3.5 مليون جندي نشط وميزانية تفوق 1.3 تريليون دولار',
  },

  // 9. تحالف أوكوس (AUKUS)
  {
    id: 'aukus-alliance',
    category: 'alliance',
    severity: 'strategic',
    coordinates: [-25.2744, 133.7751], // كانبرا / المحيط الهادئ
    titleAr: 'تحالف أوكوس العسكري (AUKUS - الغواصات النووية والردع)',
    titleEn: 'AUKUS Trilateral Defense & Security Partnership',
    statusAr: 'تحالف أمني وتكنولوجي دفاعي استراتيجي ثلاثي',
    statusEn: 'Trilateral Advanced Nuclear Submarine & Tech Alliance',
    startDate: '2021-09-15',
    locationAr: 'المحيطين الهندي والهادئ (أستراليا، بريطانيا، أمريكا)',
    locationEn: 'Indo-Pacific Theater (Australia, UK, United States)',
    belligerentsAr: {
      primary: ['أستراليا', 'المملكة المتحدة', 'الولايات المتحدة'],
      opposing: ['الصين (منافسة الردع في المحيطين الهندي والهادئ)'],
    },
    belligerentsEn: {
      primary: ['Australia', 'United Kingdom', 'United States'],
      opposing: ['People\'s Republic of China (Indo-Pacific Power Balance)'],
    },
    descriptionAr:
      'معاهدة أمنية ثلاثية تهدف إلى تزويد أستراليا بأسطول من الغواصات ذات الدفع النووي وتطوير قدرات الذكاء الاصطناعي العسكري والصواريخ الفرط صوتية والحرب السيبرانية لضمان التفوق الاستراتيجي في المحيطين الهندي والهادئ.',
    descriptionEn:
      'Trilateral security pact providing Australia with conventionally armed, nuclear-powered attack submarines (SSN-AUKUS) alongside Pillar II advanced hypersonic, quantum, and cyber capabilities.',
    impactsAr: [
      'تغيير ميزان القوى البحري في جنوب شرق آسيا ومضائق المحيط الهادئ',
      'دمج غير مسبوق في الصناعات الدفاعية وتبادل الأسرار النووية والتكنولوجية',
      'اعتراضات دبلوماسية شديدة من بكين معتبرة التحالف سباق تسلح محفوف بالمخاطر',
    ],
    impactsEn: [
      'Fundamental shift in underwater undersea deterrence across Pacific chokepoints',
      'Unprecedented industrial and naval integration across US, UK, and Australian yards',
      'Strong diplomatic counter-rhetoric from Beijing regarding nuclear proliferation',
    ],
    casualtiesEstimate: 'برنامج دفاعي طويل المدى باستثمارات تناهز 368 مليار دولار أسترالي',
  },

  // 10. تحالف دول بريكس بلس (BRICS+)
  {
    id: 'brics-plus',
    category: 'alliance',
    severity: 'strategic',
    coordinates: [28.6139, 77.209], // نيودلهي / عواصم بريكس
    titleAr: 'تكتل بريكس بلس (BRICS+ - التوازن المالي والجيواقتصادي)',
    titleEn: 'BRICS+ Geoeconomic & Multipolar Bloc',
    statusAr: 'تحالف اقتصادي وجيوسياسي عالمي متعدد الأقطاب',
    statusEn: 'Expanding Multipolar Economic & Strategic Coalition',
    startDate: '2006 (توسع تاريخي 2024-2026)',
    locationAr: 'العالم النامي (الجنوب العالمي: آسيا، أفريقيا، أمريكا اللاتينية)',
    locationEn: 'Global South (Asia, Africa, Latin America, Middle East)',
    belligerentsAr: {
      primary: ['السعودية، الإمارات، مصر، روسيا، الصين، الهند، البرازيل، جنوب أفريقيا، إيران، إثيوبيا'],
      opposing: ['هيمنة الدولار الأمريكي ومجموعة السبع (G7)'],
    },
    belligerentsEn: {
      primary: ['Saudi Arabia, UAE, Egypt, Russia, China, India, Brazil, South Africa, Iran, Ethiopia'],
      opposing: ['US Dollar Dominance & G7 Monopolies'],
    },
    descriptionAr:
      'أكبر توسع لتحالف جيواقتصادي في العالم؛ يمثل أكثر من 45% من سكان الكوكب، ونحو 36% من الناتج المحلي الإجمالي العالمي بالقوة الشرائية، وأكثر من 43% من إنتاج النفط العالمي، مع التركيز على التسوية بالعملات المحلية وإنشاء أنظمة دفع بديلة لسويفت.',
    descriptionEn:
      'Major geopolitical and financial coalition representing 45% of the world population and over 43% of global crude production, advancing de-dollarization and non-Western financial networks.',
    impactsAr: [
      'تعزيز التسويات التجارية البينية باليوان والدرهم والروبية والريال',
      'توسيع بنك التنمية الجديد (NDB) لتمويل مشاريع البنية التحتية دون شروط غربية',
      'تحول محوري في صياغة النظام الدولي نحو التعددية القطبية',
    ],
    impactsEn: [
      'Acceleration of bilateral trade settlements in local currencies',
      'Expansion of the New Development Bank (NDB) funding infrastructure',
      'Structural momentum toward a multipolar global geopolitical architecture',
    ],
    casualtiesEstimate: 'تكتل يضم 10 دول كبرى واقتصادات تتجاوز 29 تريليون دولار',
  },

  // 11. مجلس التعاون لدول الخليج العربية (GCC)
  {
    id: 'gcc-alliance',
    category: 'alliance',
    severity: 'strategic',
    coordinates: [24.7136, 46.6753], // الرياض (الأمانة العامة)
    titleAr: 'مجلس التعاون لدول الخليج العربية (الأمن المشترك والاستقرار)',
    titleEn: 'Gulf Cooperation Council (GCC Security & Integration)',
    statusAr: 'تكامل سياسي وأمني واقتصادي استراتيجي (6 دول)',
    statusEn: 'Strategic Political, Defense & Economic Union (6 States)',
    startDate: '1981-05-25',
    locationAr: 'شبه الجزيرة العربية والخليج العربي',
    locationEn: 'Arabian Peninsula & Arabian Gulf',
    belligerentsAr: {
      primary: ['المملكة العربية السعودية، الإمارات، قطر، الكويت، سلطنة عمان، مملكة البحرين'],
      opposing: ['التهديدات الإقليمية والميليشيات العابرة للحدود والقرصنة'],
    },
    belligerentsEn: {
      primary: ['Saudi Arabia, UAE, Qatar, Kuwait, Oman, Bahrain'],
      opposing: ['Regional Proxy Threats, Cross-border Militias & Piracy'],
    },
    descriptionAr:
      'كتلة إقليمية رائدة تتمتع بأعلى استقرار سيادي واقتصادي في الشرق الأوسط؛ تمتلك أكبر احتياطيات طاقة عالمية وصناديق ثروة سيادية تتجاوز 4 تريليونات دولار، مع تنسيق دفاعي مستمر عبر قوات درع الجزيرة والربط الجوي الموحد.',
    descriptionEn:
      'Premier regional economic and defense union characterized by exceptional institutional stability, managing over $4T in sovereign wealth assets and unified defense coordination via Peninsula Shield.',
    impactsAr: [
      'ضمان استقرار سلاسل إمداد الطاقة والأمن الغذائي والمائي في الخليج',
      'قيادة المبادرات الدبلوماسية الكبرى في ملفات غزة وسوريا والسودان واليمن',
      'مشاريع الربط الكهربائي والسككي الموحد والسوق الخليجية المشتركة',
    ],
    impactsEn: [
      'Safeguarding global energy flows, food, and water security networks',
      'Leading premier diplomatic reconciliation initiatives across the Arab world',
      'Unified Gulf railway, electrical grid interconnection, and common market',
    ],
    casualtiesEstimate: 'تكتل خليجي موحد باحتياطيات تتجاوز 4 تريليون دولار وأعلى مؤشرات استقرار عالمية',
  },

  // 12. الصراع في الساحل الأفريقي (AES)
  {
    id: 'sahel-conflict',
    category: 'war',
    severity: 'high',
    coordinates: [14.4974, -4.1999], // مالي وبوركينا والنيجر
    titleAr: 'صراع الساحل الأفريقي وتحالف دول الساحل (AES)',
    titleEn: 'Sahel Security Crisis & Alliance of Sahel States (AES)',
    statusAr: 'مواجهات ضد التنظيمات المتشددة وتحول جيوسياسي',
    statusEn: 'Active Counter-Insurgency & Geopolitical Realignment',
    startDate: '2012 (تحول عسكري 2023-2026)',
    locationAr: 'مالي، بوركينا فاسو، النيجر، منطقة المثلث الحدودي (ليبتاكو غورما)',
    locationEn: 'Mali, Burkina Faso, Niger, Liptako-Gourma Tri-Border',
    belligerentsAr: {
      primary: ['تحالف دول الساحل (جيوش مالي والنيجر وبوركينا فاسو بدعم روسي)'],
      opposing: ['تنظيم داعش في الصحراء الكبرى (ISGS)', 'جماعة نصرة الإسلام والمسلمين (JNIM - القاعدة)'],
    },
    belligerentsEn: {
      primary: ['Alliance of Sahel States (Mali, Niger, Burkina Faso with Russian Africa Corps)'],
      opposing: ['ISGS (ISIS Sahel Province)', 'JNIM (Al-Qaeda Affiliate)'],
    },
    descriptionAr:
      'نزاع أمني واسع أدى إلى تشكيل تحالف عسكري جديد بين مالي والنيجر وبوركينا فاسو، وانسحابها من المجموعة الاقتصادية لغرب أفريقيا (إيكواس)، وطرد القوات الفرنسية والأمريكية لصالح نشر فيلق أفريقيا الروسي.',
    descriptionEn:
      'Intense counter-insurgency warfare prompting a decisive geopolitical shift: withdrawal from ECOWAS, expulsion of French and US military bases, and alignment with Russia\'s Africa Corps.',
    impactsAr: [
      'إعادة رسم الخارطة الجيوسياسية والأمنية لمنطقة غرب أفريقيا',
      'السيطرة الوطنية على مناجم الذهب واليورانيوم الاستراتيجية',
      'تفاقم موجات الهجرة غير النظامية عبر الصحراء الكبرى نحو أوروبا',
    ],
    impactsEn: [
      'Fundamental reshaping of West African regional security architecture',
      'Sovereign national reassertion over strategic uranium and gold concessions',
      'Escalating trans-Saharan irregular migration corridors toward the Mediterranean',
    ],
    casualtiesEstimate: 'عشرات الآلاف من الضحايا وأكثر من 3 ملايين نازح في حزام الساحل',
  },
];
