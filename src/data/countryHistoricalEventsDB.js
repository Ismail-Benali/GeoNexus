/**
 * قاعدة البيانات الاستخبارية الموسعة للأحداث السيادية والتحولات النقدية
 * Comprehensive Registry of Sovereign Incidents, Assassinations, Terror Events,
 * Foreign Escalations, and Currency Historical Evolution
 * 
 * تشمل:
 * 1. الاغتيالات السياسية الكبرى (Political Assassinations)
 * 2. العمليات الإرهابية ومحطات مكافحة الإرهاب (Terrorism Incidents & Counter-Terrorism)
 * 3. التصاعدات والحروب والأزمات مع الدول الأجنبية (Foreign Escalations & Conflicts)
 * 4. قيمة العملة ونظام الصرف ومحطات التحول النقدي التاريخية (Currency Value & Monetary Evolution)
 */

export const COUNTRY_HISTORICAL_EVENTS_DB = {
  // 1. المملكة العربية السعودية
  sa: {
    countryId: 'sa',
    nameAr: 'المملكة العربية السعودية',
    nameEn: 'Saudi Arabia',
    assassinations: [
      {
        year: '1975 (25 مارس)',
        targetAr: 'الملك فيصل بن عبد العزيز آل سعود',
        targetEn: 'King Faisal bin Abdulaziz Al Saud',
        perpetratorAr: 'الأمير فيصل بن مساعد بن عبد العزيز',
        perpetratorEn: 'Faisal bin Musaid',
        detailsAr:
          'اغتيل الملك فيصل أثناء استقباله وزير النفط الكويتي عبد المطلب الكاظمي في الديوان الملكي بالرياض. عُرف الملك فيصل بقيادته التاريخية لحظر النفط عام 1973 دعماً لمصر وسوريا في حرب أكتوبر وإصراره على استعادة القدس.',
        detailsEn:
          'Assassinated during an official audience at the Royal Court in Riyadh. King Faisal was globally renowned for leading the 1973 oil embargo.',
        impactAr:
          'انتقال سلس وفوري للحكم بمبايعة الملك خالد بن عبد العزيز ملكاً والأمير فهد ولياً للعهد، ومواصلة برامج التنمية الاقتصادية الشاملة والسياسة الخارجية المتوازنة.',
        impactEn:
          'Smooth constitutional transition with accession of King Khalid and Crown Prince Fahd, sustaining economic momentum.',
      },
    ],
    terrorEvents: [
      {
        year: '1979 (نوفمبر - ديسمبر)',
        titleAr: 'حادثة اقتحام الحرم المكي الشريف (فتنة جهيمان العتيبي)',
        titleEn: 'Grand Mosque Seizure (Juhayman al-Otaybi)',
        groupAr: 'جماعة "الجماعة السلفية المحتسبة" المتطرفة بقيادة جهيمان العتيبي ومحمد القحطاني',
        groupEn: 'Extremist faction led by Juhayman al-Otaybi',
        casualties: 'استشهاد 127 من رجال الأمن و26 مدنياً، ومقتل 117 مسلحاً والقبض على 68 وإعدامهم شرعاً',
        detailsAr:
          'اقتحمت مجموعة مسلحة مكونة من مئات المتطرفين المسجد الحرام في مكة المكرمة مع صلاة فجر غرة محرم 1400هـ واحتجزت المصلين، مدعية مبايعة "المهدي المنتظر". حاصرت القوات السعودية الحرم وخاضت معارك تطهير استمرت أسبوعين.',
        detailsEn:
          'Armed militants seized the Grand Mosque in Mecca holding worshipers hostage. Saudi special forces liberated the sanctuary after two weeks.',
        counterMeasureAr:
          'تطهير الحرم المكي الشريف، تنفيذ أحكام القصاص الشرعية، وإعادة تنظيم وهيكلة الحرس الوطني وقوات الأمن الخاصة وأجهزة المخابرات.',
        counterMeasureEn:
          'Complete liberation of the sanctuary, prosecution of perpetrators, and extensive security modernization.',
      },
      {
        year: '1996 (25 يونيو)',
        titleAr: 'تفجير أبراج الخبر',
        titleEn: 'Khobar Towers Bombing',
        groupAr: 'تنظيم "حزب الله الحجاز" بدعم وتوجيه استخباري خارجي',
        groupEn: 'Hezbollah Al-Hejaz with foreign support',
        casualties: 'مقتل 19 عسكرياً أمريكياً ومواطن سعودي وإصابة أكثر من 370',
        detailsAr:
          'استهداف مجمع سكني لقوات التحالف الدولي في الخبر بشاحنة صهريج محملة بـ 2,500 كجم من مادة TNT شديدة الانفجار.',
        detailsEn:
          'A fuel truck packed with 2,500 kg of explosives targeted housing facilities for coalition forces in Khobar.',
        counterMeasureAr:
          'تعقب الخلايا المنفذة دولياً ومحلياً، وتحديث منظومات حماية المنشآت الحيوية والقواعد العسكرية.',
        counterMeasureEn:
          'Global and domestic counter-terror pursuit and reinforced physical perimeter defense across vital bases.',
      },
      {
        year: '2003 – 2006',
        titleAr: 'مواجهة الحملة الإرهابية لتنظيم القاعدة في السعودية',
        titleEn: 'Al-Qaeda Insurgency Campaign in Saudi Arabia',
        groupAr: 'تنظيم القاعدة في جزيرة العرب (خلايا المجمع السكني والحمراء وينبع والقنصلية بجدة ومصفاة بقيق)',
        groupEn: 'Al-Qaeda in the Arabian Peninsula (AQAP)',
        casualties: 'عشرات الشهداء من رجال الأمن والمواطنين والمقيمين',
        detailsAr:
          'سلسلة هجمات انتحارية استهدفت مجمعات سكنية في الرياض ومقرات أمنية والمنشآت النفطية في بقيق عام 2006 بهدف زعزعة الاستقرار وتدمير الاقتصاد الوطني.',
        detailsEn:
          'Campaign of coordinated bombings targeting residential compounds, security headquarters, and the Abqaiq petroleum hub.',
        counterMeasureAr:
          'إطلاق استراتيجية أمنية واستخبارية شاملة بقيادة الأمير محمد بن نايف نجحت في تفكيك خلايا التنظيم بالكامل، وتأسيس "مركز محمد بن نايف للمناصحة والرعاية" الرائد عالمياً في مكافحة التطرف الفكري.',
        counterMeasureEn:
          'Pioneering counter-terror doctrine decimating AQAP cells coupled with the globally recognized Mohammed bin Naif Counseling Center.',
      },
      {
        year: '2019 (14 سبتمبر)',
        titleAr: 'الهجوم الإرهابي على منشأتي بقيق وخريص لإنتاج النفط',
        titleEn: 'Abqaiq–Khurais Drone & Cruise Missile Attack',
        groupAr: 'طائرات مسيرة وصواريخ كروز انطلقت بدعم وتسليح إيراني',
        groupEn: 'State-sponsored drone & cruise missile attack',
        casualties: 'أضرار مادية وتوقف مؤقت لنحو 5.7 مليون برميل يومياً (نصف إنتاج المملكة)',
        detailsAr:
          'استهداف أكبر مجمع لمعالجة النفط في العالم (بقيق) وحقل خريص بـ 25 طائرة مسيرة وصاروخ كروز في عمل تخريبي غير مسبوق استهدف أمن الطاقة العالمي.',
        detailsEn:
          'Coordinated attack on the world largest crude oil processing facility temporarily halting 5.7 million bpd of production.',
        counterMeasureAr:
          'استعادة كامل الطاقة الإنتاجية في زمن قياسي أذهل الأسواق العالمية، ونشر شبكات رادار منخفض ودرع دفاع جوي متطور وتعزيز الردع الوطني.',
        counterMeasureEn:
          'Record-breaking full technical restoration within days, deploying layered low-altitude radar shields.',
      },
    ],
    foreignEscalations: [
      {
        year: '1973',
        opponentCountryAr: 'الولايات المتحدة وحلفاؤها الغربيون',
        opponentCountryEn: 'United States & Western Allies',
        titleAr: 'حظر النفط العربي 1973 (صدمة النفط الأولى)',
        titleEn: '1973 Arab Oil Embargo',
        causeAr: 'الجسر الجوي الأمريكي المباشر لنقل السلاح لإسرائيل خلال حرب أكتوبر 1973.',
        causeEn: 'US military resupply airlift to Israel during the October War.',
        nature: 'economic_escalation',
        detailsAr:
          'قاد الملك فيصل قرار خفض الإنتاج وحظر تصدير النفط للدول الداعمة لإسرائيل، ما أدى لارتفاع أسعار النفط العالمية أربعة أضعاف وفرض معادلة جديدة لموازين القوى الدولية.',
        detailsEn:
          'King Faisal spearheaded production cuts and export bans, quadrupling world oil prices and reshaping geopolitics.',
        outcomeAr:
          'اعتراف دولي بالحقوق العربية وبدء مفاوضات فض الاشتباك في سيناء والجولان، وترسيخ الرياض كمركز ثقل عالمي.',
        outcomeEn:
          'Recognition of Arab bargaining power, initiating diplomatic disengagement accords.',
      },
      {
        year: '1990 – 1991',
        opponentCountryAr: 'العراق (نظام صدام حسين)',
        opponentCountryEn: 'Iraq (Saddam Hussein Regime)',
        titleAr: 'حرب الخليج الثانية وحشد التحالف الدولي (درع وعاصفة الصحراء)',
        titleEn: 'Gulf War / Desert Shield & Desert Storm',
        causeAr: 'غزو القوات العراقية لدولة الكويت وتهديد الحدود الشمالية للمملكة العربية السعودية.',
        causeEn: 'Iraqi invasion of Kuwait and direct military threat to Saudi borders.',
        nature: 'military_conflict',
        detailsAr:
          'استضافت المملكة قوات تحالف دولي ضم 34 دولة، وتصدت القوات السعودية لمحاولة احتلال مدينة الخفجي الحدودية (معركة الخفجي 1991)، وقادت العمليات حتى تحرير الكويت بالكامل.',
        detailsEn:
          'Hosted a 34-nation coalition, defeated Iraqi forces at the Battle of Khafji, and spearheaded the liberation of Kuwait.',
        outcomeAr:
          'تحرير دولة الكويت، تدمير قدرات الهجوم العراقي، وإرساء منظومة أمنية إقليمية جديدة في الخليج العربي.',
        outcomeEn:
          'Complete restoration of Kuwait sovereignty and destruction of aggressive military potential.',
      },
      {
        year: '2015 – 2023',
        opponentCountryAr: 'جماعة الحوثي وإيران',
        opponentCountryEn: 'Houthi Militias & Iran',
        titleAr: 'عمليات عاصفة الحزم وإعادة الأمل في اليمن',
        titleEn: 'Operation Decisive Storm & Restoring Hope',
        causeAr: 'انقلاب جماعة الحوثي على الحكومة الشرعية في صنعاء وتهديد الملاحة في باب المندب.',
        causeEn: 'Houthi armed coup against the internationally recognized Yemeni government.',
        nature: 'military_conflict',
        detailsAr:
          'قيادة تحالف عربي لحماية المدن السعودية من الصواريخ الباليستية والمسيرات واعتراض مئات المقذوفات، وتأمين مضيق باب المندب ودعم المسار السياسي.',
        detailsEn:
          'Arab Coalition operations shielding Saudi territory via multi-tier Patriot missile interceptions and securing maritime straits.',
        outcomeAr:
          'توقيع اتفاق بكين 2023 مع إيران لخفض التصعيد، وتثبيت التهدئة في اليمن ورعاية خريطة طريق للأمم المتحدة.',
        outcomeEn:
          'Beijing 2023 normalization accord with Tehran, prolonged truce, and UN peace roadmap.',
      },
    ],
    currencyEvolution: {
      code: 'SAR',
      symbol: '﷼',
      nameAr: 'ريال سعودي',
      nameEn: 'Saudi Riyal',
      currentExchangeRateUsd: '1 USD = 3.7500 SAR',
      rateValueNumber: 3.75,
      pegStatusAr: 'سعر صرف ثابت مربوط بالدولار الأمريكي رسمياً (Fixed Peg منذ 1986)',
      pegStatusEn: 'Official Fixed Peg to the US Dollar at 3.75 since 1986',
      centralBankAr: 'البنك المركزي السعودي (ساما - SAMA)',
      foreignReservesUsd: '~$450 مليار دولار (إضافة لأصول PIF البالغة ~930B$)',
      currencyHistoryTimeline: [
        {
          year: 1928,
          eventAr: 'إصدار الريال العربي السعودي الفضي في عهد الملك عبد العزيز',
          eventEn: 'First Saudi silver riyal minted',
          rateAtTime: 'معيار الفضة والذهب',
          detailsAr: 'تداول الريال الفضي وقرش مكة والجنيه الإنجليزي الفيكتوري لتسهيل التجارة والحج.',
          detailsEn: 'Silver riyals and gold sovereigns circulating prior to central monetary institutionalization.',
        },
        {
          year: 1952,
          eventAr: 'تأسيس مؤسسة النقد العربي السعودي (ساما) وإصدار إيصالات الحجاج',
          eventEn: 'Founding of SAMA & Haj receipts',
          rateAtTime: '1 USD ≈ 3.75 - 4.5 SAR',
          detailsAr: 'إصدار إيصالات الحجاج الورقية التي تحولت لاحقاً إلى أول عملة ورقية نظامية للمملكة.',
          detailsEn: 'Establishment of the central bank and issuance of pilgrim receipt notes.',
        },
        {
          year: 1986,
          eventAr: 'تثبيت سعر صرف الريال رسمياً عند 3.75 ريال لكل دولار أمريكي',
          eventEn: 'Official Pegging of the Riyal at 3.75 per USD',
          rateAtTime: '1 USD = 3.75 SAR',
          detailsAr:
            'قرار استراتيجي لربط العملة بالدولار لحماية إيرادات النفط واستقرار الأسعار المحلية ومنع المضاربات في الأسواق المالية.',
          detailsEn:
            'Strategic anchor linking the currency directly to the USD, eliminating FX volatility for energy revenues.',
        },
        {
          year: 2026,
          eventAr: 'استقرار نقدي متين مدعوم بأصول صندوق الاستثمارات العامة وتريليون دولار احتياطيات',
          eventEn: 'Rock-solid monetary stability bolstered by PIF giga-assets',
          rateAtTime: '1 USD = 3.7500 SAR (سوق الصرف الآجل مستقر تماماً)',
          detailsAr:
            'نجاح سياسة الربط على مدى أربعة عقود بفضل الاحتياطيات الضخمة وانخفاض الدين العام ومرونة الاقتصاد غير النفطي.',
          detailsEn:
            'Four decades of unbroken exchange stability backed by sovereign buffers and non-oil fiscal growth.',
        },
      ],
    },
  },

  // 2. جمهورية مصر العربية
  eg: {
    countryId: 'eg',
    nameAr: 'جمهورية مصر العربية',
    nameEn: 'Egypt',
    assassinations: [
      {
        year: '1948 (28 ديسمبر)',
        targetAr: 'محمود فهمي النقراشي باشا',
        targetEn: 'Mahmoud Fahmi al-Nuqrashi Pasha',
        perpetratorAr: 'عبد المجيد حسن (النظام الخاص لجماعة الإخوان المسلمين)',
        perpetratorEn: 'Abdel Meguid Hassan (Muslim Brotherhood Secret Apparatus)',
        detailsAr:
          'اغتيل رئيس وزراء مصر داخل مقر وزارة الداخلية بالقاهرة بعد قراره التاريخي بحل جماعة الإخوان المسلمين ومصادرة أسلحتها بعد أعمال عنف وتفجيرات في القاهرة.',
        detailsEn:
          'Assassinated inside the Ministry of Interior following his official order to dissolve the Muslim Brotherhood.',
        impactAr:
          'تصاعد الصراع بين الدولة والتنظيمات السرية واغتيال حسن البنا مرشد الجماعة في فبراير 1949.',
        impactEn:
          'Severe escalation between the monarchist government and clandestine underground factions.',
      },
      {
        year: '1981 (6 أكتوبر)',
        targetAr: 'الرئيس محمد أنور السادات (بطل الحرب والسلام)',
        targetEn: 'President Anwar Sadat',
        perpetratorAr: 'تنظيم الجهاد (خالد الإسلامبولي وعبود الزمر)',
        perpetratorEn: 'Egyptian Islamic Jihad (Khaled al-Islambouli)',
        detailsAr:
          'اغتيل الرئيس السادات خلال العرض العسكري السنوي في مدينة نصر احتفالاً بذكرى نصر أكتوبر 1973، بعد إبرامه معاهدة السلام المصرية الإسرائيلية في كامب ديفيد واعتقالات سبتمبر 1981.',
        detailsEn:
          'Assassinated during the annual October victory military parade in Cairo following the Camp David Peace Treaty.',
        impactAr:
          'تولي الرئيس حسني مبارك رئاسة الجمهورية، إعلان حالة الطوارئ، واستعادة كامل أراضي سيناء عام 1982.',
        impactEn:
          'Accession of President Hosni Mubarak, state of emergency, and completion of Sinai withdrawal in 1982.',
      },
      {
        year: '1990 (12 أكتوبر)',
        targetAr: 'الدكتور رفعت المحجوب',
        targetEn: 'Dr. Rifaat al-Mahgoub',
        perpetratorAr: 'عناصر مسلحة من تنظيم "الجماعة الإسلامية"',
        perpetratorEn: 'Al-Gama\'a al-Islamiyya armed cell',
        detailsAr:
          'اغتيل رئيس مجلس الشعب المصري بالرصاص بالقرب من فندق سميراميس على كورنيش النيل بالقاهرة أثناء موكبه الرسمي.',
        detailsEn:
          'Speaker of the Egyptian Parliament assassinated in an armed ambush near Semiramis Hotel on the Nile Corniche.',
        impactAr:
          'إطلاق أجهزة الأمن المصرية لأكبر حملة استئصال للبؤر الإرهابية في الصعيد والقاهرة في التسعينيات.',
        impactEn:
          'Launch of intensive nation-wide security counter-insurgency operations throughout the 1990s.',
      },
      {
        year: '2015 (29 يونيو)',
        targetAr: 'المستشار هشام بركات (النائب العام المصري)',
        targetEn: 'Hisham Barakat (Prosecutor General of Egypt)',
        perpetratorAr: 'خلايا مسلحة تابعة لتنظيم أنصار بيت المقدس ولواء الثورة',
        perpetratorEn: 'Ansar Bait al-Maqdis / Lewaa al-Thawra',
        detailsAr:
          'استُهدف موكب النائب العام بسيارة مفخخة في مصر الجديدة أثناء توجهه إلى مكتبه، ليكون أرفع مسؤول قضائي يُغتال في تاريخ مصر الحديث.',
        detailsEn:
          'Targeted by a massive car bomb in Heliopolis, becoming the highest judicial official assassinated in modern Egypt.',
        impactAr:
          'إصدار قانون مكافحة الإرهاب الجديد وتصعيد الضربات العسكرية ضد التنظيمات المسلحة في شمال سيناء.',
        impactEn:
          'Enactment of the comprehensive Anti-Terrorism Law and intensified military operations in North Sinai.',
      },
    ],
    terrorEvents: [
      {
        year: '1997 (17 نوفمبر)',
        titleAr: 'مذبحة الأقصر (معبد حتشبسوت في الدير البحري)',
        titleEn: 'Luxor Massacre (Hatshepsut Temple)',
        groupAr: 'تنظيم الجماعة الإسلامية',
        groupEn: 'Al-Gama\'a al-Islamiyya',
        casualties: 'مقتل 62 شخصاً (58 سائحاً أجنبياً و4 مصريين)',
        detailsAr:
          'هجوم مسلح مروع استهدف السياح الأجانب في معبد الدير البحري بالأقصر، مما سبب صدمة دولية وتدميراً مؤقتاً لقطاع السياحة.',
        detailsEn:
          'Militants massacred tourists at the temple of Hatshepsut, severely impacting international tourism.',
        counterMeasureAr:
          'إقالة وزير الداخلية، تأسيس شرطة السياحة المتقدمة، وإعلان قادة الجماعة الإسلامية "مبادرة وقف العنف" ومراجعات فكرية نبذت الإرهاب.',
        counterMeasureEn:
          'Total overhaul of security leadership and subsequent ideological recantation by militant leaders renouncing violence.',
      },
      {
        year: '2004 – 2006',
        titleAr: 'سلسلة تفجيرات منتجعات سيناء (طابا، شرم الشيخ، دهب)',
        titleEn: 'Sinai Resort Bombings (Taba, Sharm el-Sheikh, Dahab)',
        groupAr: 'جماعة التوحيد والجهاد في سيناء',
        groupEn: 'Tawhid wal-Jihad in Sinai',
        casualties: 'مقتل نحو 150 شخصاً في طابا (2004) وشرم الشيخ (2005) ودهب (2006)',
        detailsAr:
          'هجمات انتحارية متزامنة استهدفت الفنادق والأسواق السياحية المزدحمة في جنوب سيناء بواسطة سيارات ملغومة وانتحاريين.',
        detailsEn:
          'Coordinated suicide bombings targeting tourist resorts and markets in South Sinai.',
        counterMeasureAr:
          'تطوير التنسيق الأمني والقبائلي في شبه جزيرة سيناء وتشديد الرقابة على الطرق والمعابر.',
        counterMeasureEn:
          'Strengthening tribal intelligence alliances and securing Sinai transport corridors.',
      },
      {
        year: '2013 – 2018',
        titleAr: 'معركة دحر الإرهاب في شمال سيناء وهجوم مسجد الروضة',
        titleEn: 'Sinai Counter-Insurgency & Al-Rawda Mosque Attack',
        groupAr: 'تنظيم "ولاية سيناء" (الموالي لداعش)',
        groupEn: 'Wilayat Sinai (ISIS affiliate)',
        casualties: 'استشهاد أكثر من 305 مصلين في مسجد الروضة ببئر العبد (نوفمبر 2017)، ومئات الشهداء من القوات المسلحة والشرطة',
        detailsAr:
          'أبشع هجوم إرهابي في تاريخ مصر استهدف المصلين في صلاة الجمعة بمسجد الروضة بالأسلحة الرشاشة والعبوات الناسفة.',
        detailsEn:
          'Terrorists opened fire on Friday worshipers at Al-Rawda Mosque, killing 305 civilians.',
        counterMeasureAr:
          'إطلاق "العملية الشاملة سيناء 2018" بمشاركة الجيش الثاني والثالث والقوات الجوية والبحرية، واجتثاث معاقل التنظيم بالكامل وإعادة إعمار وتنمية سيناء.',
        counterMeasureEn:
          'Comprehensive Operation Sinai 2018 completely eradicating insurgent sanctuaries and launching massive reconstruction.',
      },
    ],
    foreignEscalations: [
      {
        year: '1956',
        opponentCountryAr: 'بريطانيا وفرنسا وإسرائيل (العدوان الثلاثي)',
        opponentCountryEn: 'UK, France & Israel (Tripartite Aggression)',
        titleAr: 'أزمة السويس والعدوان الثلاثي على مصر',
        titleEn: 'Suez Crisis / Tripartite Aggression',
        causeAr: 'تأميم الرئيس جمال عبد الناصر لشركة قناة السويس البحرية في 26 يوليو 1956.',
        causeEn: 'President Nasser nationalization of the Suez Canal Company.',
        nature: 'military_conflict',
        detailsAr:
          'غزو إسرائيلي لسيناء تلاه إنزال بريطاني-فرنسي في بورسعيد واحتلال القناة ومقاومة شعبية باسلة في مدن القناة.',
        detailsEn:
          'Coordinated Anglo-French and Israeli invasion met by fierce Egyptian popular resistance in Port Said.',
        outcomeAr:
          'إنذار سوفيتي وضغط أمريكي أجبر المعتدين على الانسحاب غير المشروط، ما رسخ السيادة المصرية ونهاية النفوذ الاستعماري الأوروبي.',
        outcomeEn:
          'Total diplomatic victory forcing invader withdrawal, ending British-French global imperial dominance.',
      },
      {
        year: '1967',
        opponentCountryAr: 'إسرائيل',
        opponentCountryEn: 'Israel',
        titleAr: 'حرب يونيو 1967 (النكسة)',
        titleEn: 'Six-Day War (June 1967)',
        causeAr: 'التوتر العسكري، إغلاق مضائق تيران، والضربة الجوية الإسرائيلية المباغتة.',
        causeEn: 'Preemptive Israeli airstrikes destroying airfields following closure of Tiran Straits.',
        nature: 'military_conflict',
        detailsAr:
          'تدمير سلاح الجو المصري على الأرض واحتلال شبه جزيرة سيناء والضفة الغربية وغزة والجولان.',
        detailsEn:
          'Destruction of Egyptian air fleet on the ground and subsequent Israeli occupation of Sinai Peninsula.',
        outcomeAr:
          'صدور قرار مجلس الأمن 242 وبدء حرب الاستنزاف (1967-1970) لإعادة بناء القوات المسلحة وإسقاط نظرية الأمن الإسرائيلي.',
        outcomeEn:
          'UN Resolution 242 and launch of the War of Attrition to rebuild Egyptian armed forces.',
      },
      {
        year: '1973',
        opponentCountryAr: 'إسرائيل',
        opponentCountryEn: 'Israel',
        titleAr: 'حرب العاشر من رمضان / أكتوبر 1973 المجيدة',
        titleEn: 'October War / Yom Kippur War 1973',
        causeAr: 'تحرير الأراضي المحتلة وإنهاء الاحتلال الإسرائيلي لسيناء.',
        causeEn: 'Liberating Egyptian sovereign territories in Sinai.',
        nature: 'military_conflict',
        detailsAr:
          'اقتحام خط بارليف الحصين، عبور قناة السويس، وتدمير أسطورة "الجيش الذي لا يقهر" في أكبر معركة أسلحة مشتركة في تاريخ المنطقة.',
        detailsEn:
          'Historic crossing of the Suez Canal and shattering the Bar Lev Line in massive combined-arms maneuvers.',
        outcomeAr:
          'استعادة السيادة على قناة السويس ثم انسحاب إسرائيل الكامل من سيناء بموجب معاهدة السلام 1979 واسترداد طابا 1989.',
        outcomeEn:
          'Restoration of Sinai and full return of sovereign territory including Taba in 1989.',
      },
      {
        year: '2011 – 2026',
        opponentCountryAr: 'إثيوبيا',
        opponentCountryEn: 'Ethiopia',
        titleAr: 'أزمة سد النهضة الإثيوبي والأمن المائي لنهر النيل',
        titleEn: 'Grand Ethiopian Renaissance Dam (GERD) Crisis',
        causeAr: 'الملء والتشغيل الأحادي لسد النهضة دون اتفاق قانوني ملزم يحمي حصة مصر التاريخية من مياه النيل.',
        causeEn: 'Unilateral filling and operation of GERD threatening Egypt downstream Nile water quota.',
        nature: 'diplomatic_crisis',
        detailsAr:
          'مفاوضات شاقة استمرت أكثر من عقد، وتحذيرات رئاسية مصرية بأن "مياه النيل خط أحمر والأمن المائي مسألة وجودية".',
        detailsEn:
          'Decade of diplomatic deadlock with Egypt declaring Nile water security an existential national redline.',
        outcomeAr:
          'تعزيز التحالفات العسكرية المصرية مع دول حوض النيل والقرن الأفريقي (الصومال، إريتريا، جيبوتي، كينيا) لفرض توازن ردع استراتيجي.',
        outcomeEn:
          'Strengthening Egyptian defense alliances across the Horn of Africa (Somalia, Eritrea) for deterrence balance.',
      },
    ],
    currencyEvolution: {
      code: 'EGP',
      symbol: 'ج.م',
      nameAr: 'جنيه مصري',
      nameEn: 'Egyptian Pound',
      currentExchangeRateUsd: '1 USD ≈ 48.50 EGP',
      rateValueNumber: 48.50,
      pegStatusAr: 'سعر صرف مرن موحد (تعويم مدار خاضع لآليات العرض والطلب منذ مارس 2024)',
      pegStatusEn: 'Unified flexible exchange rate regime post-March 2024 IMF agreement',
      centralBankAr: 'البنك المركزي المصري (CBE - تأسس 1960)',
      foreignReservesUsd: '~$46.5 مليار دولار (أعلى مستوى في تاريخ مصر)',
      currencyHistoryTimeline: [
        {
          year: 1834,
          eventAr: 'إصدار الجنيه المصري الذهبي بفرمان من محمد علي باشا',
          eventEn: 'Creation of Egyptian Gold Pound',
          rateAtTime: 'معيار الذهب (الجنيه = 7.43 جرام ذهب)',
          detailsAr: 'استبدال القرش العثماني بالجنيه كوحدة نقدية أساسية قائمة على قاعدة الذهب والفضة.',
          detailsEn: 'Establishment of the Egyptian pound as base unit under Muhammad Ali Pasha.',
        },
        {
          year: 1899,
          eventAr: 'إصدار أول جنيه ورقي عبر البنك الأهلي المصري والربط بالإسترليني',
          eventEn: 'First paper banknote & Sterling peg',
          rateAtTime: '1 جنيه مصري = 1.025 جنيه إسترليني',
          detailsAr: 'تغطية العملة الورقية بسندات بريطانية والذهب حتى خروج مصر من منطقة الإسترليني عام 1947.',
          detailsEn: 'Direct parity with British Sterling until Egypt left the sterling area in 1947.',
        },
        {
          year: 1962,
          eventAr: 'ربط الجنيه المصري بالدولار الأمريكي رسمياً',
          eventEn: 'Pegging to the US Dollar',
          rateAtTime: '1 USD = 0.43 EGP (الدولار بـ 43 قرشاً)',
          detailsAr: 'تثبيت السعر في عهد عبد الناصر في إطار النظام الاشتراكي والتجارة المركزية.',
          detailsEn: 'Fixed dollar parity during the socialist state-planning era.',
        },
        {
          year: 2003,
          eventAr: 'قرار تحرير سعر صرف الجنيه المصري الأول (التعويم الأول)',
          eventEn: 'First Free Float Declaration (2003)',
          rateAtTime: 'ارتفاع الدولار من 3.70 إلى 6.15 ج.م',
          detailsAr: 'إلغاء نظام السعرين والربط الثابت وبدء التعويم المنظم بقيادة الدكتور فاروق العقدة.',
          detailsEn: 'Initial liberalization dismantling dual-exchange rate system under Farouk El-Okdah.',
        },
        {
          year: 2016,
          eventAr: 'التعويم الشامل للجنيه المصري (3 نوفمبر 2016)',
          eventEn: 'Historic Macroeconomic Float (Nov 2016)',
          rateAtTime: 'انتقال الدولار من 8.88 ج.م إلى 18.00 ج.م',
          detailsAr: 'إجراء إصلاحي حاسم بالقضاء على السوق السوداء والحصول على قرض صندوق النقد الدولي بقيمة 12 مليار دولار.',
          detailsEn: 'Full float terminating black market dollar premiums alongside $12B IMF program.',
        },
        {
          year: 2024,
          eventAr: 'صفقة رأس الحكمة الكبرى (35$ مليار) وتوحيد سعر الصرف المرن (مارس 2024)',
          eventEn: 'Ras El-Hekma Megadeal & Unified Float (March 2024)',
          rateAtTime: 'توحيد السعر عند 48 - 49 ج.م للدولار والقضاء التام على السوق الموازية',
          detailsAr:
            'أضخم استثمار مباشر في تاريخ مصر مع دولة الإمارات واستعادة الاحتياطي النقدي وتدفق مليارات الأموال الساخنة وتحويلات المغتربين.',
          detailsEn:
            'Historic $35B UAE FDI injection facilitating seamless currency unification and record FX reserves.',
        },
      ],
    },
  },

  // 3. الولايات المتحدة الأمريكية
  us: {
    countryId: 'us',
    nameAr: 'الولايات المتحدة الأمريكية',
    nameEn: 'United States',
    assassinations: [
      {
        year: '1865 (14 أبريل)',
        targetAr: 'الرئيس أبراهام لينكولن',
        targetEn: 'President Abraham Lincoln',
        perpetratorAr: 'جون ويلكس بوث (متعاطف مع الولايات الكونفدرالية الجنوبية)',
        perpetratorEn: 'John Wilkes Booth',
        detailsAr:
          'أطلق النار عليه في مسرح فورد بواشنطن بعد أيام من انتهاء الحرب الأهلية الأمريكية وإلغاء العبودية.',
        detailsEn:
          'Shot at Ford Theatre in Washington days after the Confederate surrender ending the Civil War.',
        impactAr:
          'تعقيد مرحلة إعادة الإعمار وصعود التوترات العرقية في الولايات الجنوبية.',
        impactEn:
          'Severely fractured the post-war Reconstruction process in the American South.',
      },
      {
        year: '1963 (22 نوفمبر)',
        targetAr: 'الرئيس جون إف. كينيدي (JFK)',
        targetEn: 'President John F. Kennedy',
        perpetratorAr: 'لي هارفي أوزوالد (حسب تقرير لجنة وارن الرسمي)',
        perpetratorEn: 'Lee Harvey Oswald (Warren Commission findings)',
        detailsAr:
          'اغتيل بالرصاص أثناء موكبه في سيارة مكشوفة في ديلي بلازا بمدينة دالاس، تكساس، في أكثر عمليات الاغتيال إثارة للجدل ونظريات المؤامرة في التاريخ المعاصر.',
        detailsEn:
          'Assassinated in an open motorcade in Dealey Plaza, Dallas, sparking decades of global inquiry.',
        impactAr:
          'تولي ليندون جونسون الرئاسة، تمرير قانون الحقوق المدنية 1964، وتصعيد حرب فيتنام.',
        impactEn:
          'Accession of Lyndon B. Johnson, passing of Civil Rights Act 1964, and massive Vietnam War escalation.',
      },
      {
        year: '1968 (4 أبريل)',
        targetAr: 'الدكتور مارتن لوثر كينغ الابن',
        targetEn: 'Dr. Martin Luther King Jr.',
        perpetratorAr: 'جيمس إيرل راي',
        perpetratorEn: 'James Earl Ray',
        detailsAr:
          'اغتيل زعيم حركة الحقوق المدنية الأمريكية برصاص قناص على شرفة فندق لورين في ممفيس، تينيسي.',
        detailsEn:
          'Civil rights icon shot on the balcony of the Lorraine Motel in Memphis, Tennessee.',
        impactAr:
          'اندلاع اضطرابات وأعمال شغب في أكثر من 100 مدينة أمريكية وتسريع إقرار قانون الإسكان العادل.',
        impactEn:
          'Triggered nationwide uprisings and accelerated the passage of the Fair Housing Act.',
      },
      {
        year: '1968 (5 يونيو)',
        targetAr: 'السيناتور روبرت إف. كينيدي (RFK)',
        targetEn: 'Senator Robert F. Kennedy',
        perpetratorAr: 'سرحان سرحان',
        perpetratorEn: 'Sirhan Sirhan',
        detailsAr:
          'اغتيل المرشح الديمقراطي للرئاسة وشقيق الرئيس جون كينيدي في فندق أمباسادور بلوس أنجلوس عقب فوزه بالانتخابات التمهيدية في كاليفورنيا.',
        detailsEn:
          'Democratic presidential candidate assassinated in Los Angeles following California primary victory.',
        impactAr:
          'صعود ريتشارد نيكسون وفوزه بانتخابات الرئاسة 1968 وتوسيع صلاحيات جهاز الحماية الرئاسي (Secret Service).',
        impactEn:
          'Paved the way for Richard Nixon 1968 victory and expanded Secret Service protection.',
      },
    ],
    terrorEvents: [
      {
        year: '1995 (19 أبريل)',
        titleAr: 'تفجير أوكلاهوما سيتي (مبنى ألفريد مورا الفيدرالي)',
        titleEn: 'Oklahoma City Bombing',
        groupAr: 'تيموثي مكفاي وتيري نيكولز (التطرف اليميني المحلي المناهض للحكومة الفيدرالية)',
        groupEn: 'Timothy McVeigh & Terry Nichols (Domestic antigovernment extremism)',
        casualties: 'مقتل 168 شخصاً (بينهم 19 طفلاً) وإصابة أكثر من 680',
        detailsAr:
          'تفجير شاحنة مستأجرة محملة بـ 2,200 كجم من نترات الأمونيوم أمام المبنى الفيدرالي، وهو أسوأ عمل إرهابي محلي في تاريخ أمريكا.',
        detailsEn:
          'Deadliest act of domestic terrorism in US history using an ammonium nitrate truck bomb.',
        counterMeasureAr:
          'إقرار قانون مكافحة الإرهاب وعقوبة الإعدام الفعالة 1996 وتشديد أمن المنشآت الفيدرالية في أنحاء البلاد.',
        counterMeasureEn:
          'Passing of the Antiterrorism and Effective Death Penalty Act of 1996 and federal building hardening.',
      },
      {
        year: '2001 (11 سبتمبر)',
        titleAr: 'هجمات الحادي عشر من سبتمبر الإرهابية',
        titleEn: 'September 11 Terrorist Attacks',
        groupAr: 'تنظيم القاعدة بزعامة أسامة بن لادن',
        groupEn: 'Al-Qaeda (19 hijackers)',
        casualties: 'مقتل 2,977 ضحية وإصابة أكثر من 25,000 وتدمير برجي مركز التجارة العالمي وجزء من البنتاغون',
        detailsAr:
          'اختطاف أربع طائرات ركاب تجارية وصدم برجي التجارة في نيويورك ومقر البنتاغون في فرجينيا وسقوط الرابعة في بنسلفانيا. الحدث الذي غيّر مجرى التاريخ العالمي المعاصر.',
        detailsEn:
          'Four hijacked airliners destroyed the Twin Towers and struck the Pentagon, transforming modern world order.',
        counterMeasureAr:
          'إعلان "الحرب العالمية على الإرهاب"، غزو أفغانستان (2001) وإسقاط طالبان، إنشاء وزارة الأمن الداخلي (DHS)، إقرار قانون باتريوت (Patriot Act)، وإنشاء وكالة TSA.',
        counterMeasureEn:
          'Launch of Global War on Terror, invasion of Afghanistan, creation of DHS and enactment of USA PATRIOT Act.',
      },
    ],
    foreignEscalations: [
      {
        year: '1941 – 1945',
        opponentCountryAr: 'إمبراطورية اليابان وألمانيا النازية (دول المحور)',
        opponentCountryEn: 'Imperial Japan & Nazi Germany (Axis Powers)',
        titleAr: 'دخول الحرب العالمية الثانية بعد هجوم بيرل هاربر',
        titleEn: 'World War II & Pearl Harbor Attack',
        causeAr: 'الهجوم الياباني المفاجئ على الأسطول الأمريكي في بيرل هاربر (7 ديسمبر 1941).',
        causeEn: 'Surprise Japanese carrier strike on US Pacific Fleet at Pearl Harbor.',
        nature: 'military_conflict',
        detailsAr:
          'تعبئة صناعية وعسكرية شاملة، إنزال نورماندي في أوروبا، وإلقاء القنبلتين الذريتين على هيروشيما وناجازاكي لإجبار اليابان على الاستسلام غير المشروط.',
        detailsEn:
          'Total war mobilization culminating in Normandy invasion and atomic bombings of Hiroshima and Nagasaki.',
        outcomeAr:
          'انتصار الحلفاء، تأسيس الأمم المتحدة، وترسيخ الولايات المتحدة كزعيمة للعالم الغربي والنظام المالي الدولي (بريتون وودز).',
        outcomeEn:
          'Allied victory, creation of the UN, and emergence of the US as preeminent global superpower.',
      },
      {
        year: '1962',
        opponentCountryAr: 'الاتحاد السوفيتي وكوبا',
        opponentCountryEn: 'Soviet Union & Cuba',
        titleAr: 'أزمة الصواريخ الكوبية (13 يوماً على حافة المحرقة النووية)',
        titleEn: 'Cuban Missile Crisis',
        causeAr: 'النشر السري لصواريخ نووية سوفيتية في كوبا على بعد 90 ميلاً من سواحل فلوريدا.',
        causeEn: 'Clandestine deployment of Soviet nuclear missiles in Cuba.',
        nature: 'military_conflict',
        detailsAr:
          'فرض الرئيس كينيدي حصاراً بحرياً (Quarantine) على كوبا وتأهب القوات النووية الأمريكية (DEFCON 2) والمفاوضات العاجلة مع نيكيتا خروتشوف.',
        detailsEn:
          'Naval quarantine of Cuba and DEFCON 2 nuclear alert during intense negotiations with Khrushchev.',
        outcomeAr:
          'سحب الصواريخ السوفيتية مقابل تعهد واشنطن بعدم غزو كوبا وسحب صواريخ جوبيتر من تركيا سراً وإنشاء الخط الساخن.',
        outcomeEn:
          'Soviet missile withdrawal in exchange for US non-invasion pledge and secret Turkey missile pullout.',
      },
      {
        year: '2022 – 2026',
        opponentCountryAr: 'روسيا والصين',
        opponentCountryEn: 'Russia & China',
        titleAr: 'المواجهة الجيوسياسية الشاملة وحرب التكنولوجيا والرقائق',
        titleEn: 'Multipolar Great Power Rivalry & Semiconductor Tech War',
        causeAr: 'الحرب الروسية الأوكرانية والتوترات المتصاعدة حول تايوان ومضيق ملقا والتنافس التكنولوجي والذكاء الاصطناعي.',
        causeEn: 'Invasion of Ukraine, Taiwan sovereignty deterrence, and strategic tech decoupling.',
        nature: 'diplomatic_crisis',
        detailsAr:
          'فرض آلاف العقوبات الاقتصادية على موسكو، تزويد أوكرانيا بأسلحة متطورة (HIMARS, ATACMS, F-16)، وتقييد تصدير الرقائق المتقدمة إلى الصين (CHIPS Act).',
        detailsEn:
          'Sanctions regimes against Russia, advanced weapons supplies to Ukraine, and export controls on advanced AI chips.',
        outcomeAr:
          'إعادة إحياء وتوسيع حلف الناتو، بناء تحالفات جديدة في المحيطين الهندي والهادئ (AUKUS, Quad)، وصعود النظام متعدد الأقطاب.',
        outcomeEn:
          'Revitalized NATO, new Indo-Pacific alliances (AUKUS, Quad), and shifting multipolar dynamics.',
      },
    ],
    currencyEvolution: {
      code: 'USD',
      symbol: '$',
      nameAr: 'دولار أمريكي',
      nameEn: 'United States Dollar',
      currentExchangeRateUsd: '1.00 USD (عملة الاحتياط العالمي الأولى)',
      rateValueNumber: 1.0,
      pegStatusAr: 'تعويم حر كامل والعملة المرجعية الأساسية للنظام النقدي الدولي (حصة ~58% من احتياطيات العالم)',
      pegStatusEn: 'Primary global reserve currency (~58% of global central bank reserves)',
      centralBankAr: 'نظام الاحتياطي الفيدرالي الأمريكي (Federal Reserve - تأسس 1913)',
      foreignReservesUsd: 'الاحتياطي الذهبي الأكبر في العالم (~8,133 طناً في فورت نوكس)',
      currencyHistoryTimeline: [
        {
          year: 1792,
          eventAr: 'إقرار قانون سك العملة (Coinage Act) وتأسيس الدولار الأمريكي',
          eventEn: 'Coinage Act of 1792',
          rateAtTime: 'معيار الفضة والذهب الثنائي',
          detailsAr: 'تأسيس دار سك العملة الأمريكية وربط الدولار بوزن محدد من الفضة والذهب.',
          detailsEn: 'Creation of the US Mint and establishing the bimetallic monetary standard.',
        },
        {
          year: 1944,
          eventAr: 'اتفاقية بريتون وودز وتتويج الدولار عملة للعالم (Bretton Woods)',
          eventEn: 'Bretton Woods Conference',
          rateAtTime: '1 أونصة ذهب = 35 دولار أمريكي',
          detailsAr: 'ربط عملات 44 دولة بالدولار الأمريكي وربط الدولار بالذهب وتأسيس صندوق النقد والبنك الدوليين.',
          detailsEn: 'Dollar anchored to gold at $35/oz, with global currencies pegged to the dollar.',
        },
        {
          year: 1971,
          eventAr: 'صدمة نيكسون وفك ارتباط الدولار بالذهب (Nixon Shock)',
          eventEn: 'The Nixon Shock (August 15, 1971)',
          rateAtTime: 'إنهاء التحويل الحر إلى الذهب',
          detailsAr:
            'إعلان الرئيس نيكسون تعليق قابلية تحويل الدولار إلى ذهب من جانب واحد، وبدء عصر العملات الإلزامية الورقية (Fiat Money) والتعويم الحر.',
          detailsEn:
            'Nixon unilaterally terminated the convertibility of the US dollar to gold, birthing the fiat floating era.',
        },
        {
          year: 1974,
          eventAr: 'اتفاقية البترودولار مع السعودية لتعزيز هيمنة الدولار عالمياً',
          eventEn: 'Petrodollar System Inception',
          rateAtTime: 'تسعير النفط حصرياً بالدولار',
          detailsAr: 'تسعير كافة مبيعات النفط بالدولار مقابل الاستقرار والأمن واستثمار الفوائض في السندات الأمريكية.',
          detailsEn: 'Pricing global crude in USD in exchange for security and recycling revenues into US Treasuries.',
        },
        {
          year: 2022,
          eventAr: 'دورة التشديد النقدي الأسرع منذ عقود ورفع الفائدة إلى 5.50%',
          eventEn: 'Aggressive Fed Rate Hikes (2022–2024)',
          rateAtTime: 'مؤشر الدولار DXY يصل لأعلى مستوى في 20 عاماً',
          detailsAr: 'رفع أسعار الفائدة لمكافحة التضخم ما تسبب في ضغوط هائلة على عملات الأسواق الناشئة واقتصادات العالم.',
          detailsEn: 'Rapid interest rate hikes to curb inflation, strengthening USD against global currencies.',
        },
      ],
    },
  },

  // 4. روسيا الاتحادية
  ru: {
    countryId: 'ru',
    nameAr: 'روسيا الاتحادية',
    nameEn: 'Russian Federation',
    assassinations: [
      {
        year: '2006 (23 نوفمبر)',
        targetAr: 'ألكسندر ليتفينينكو',
        targetEn: 'Alexander Litvinenko',
        perpetratorAr: 'عملاء استخباريون بمادة البولونيوم-210 المشعة في لندن',
        perpetratorEn: 'Radioactive Polonium-210 poisoning in London',
        detailsAr:
          'اغتيل ضابط الاستخبارات الروسي المنشق في فندق بلندن بعد تسميم الشاي بمادة البولونيوم-210، في عملية استخبارية أثارت أزمة دبلوماسية كبرى مع بريطانيا.',
        detailsEn:
          'Former FSB officer poisoned with radioactive Polonium-210 in London, sparking severe diplomatic crisis.',
        impactAr:
          'تدهور العلاقات الروسية البريطانية وطرد دبلوماسيين متبادل.',
        impactEn:
          'Severe chill in Anglo-Russian relations with mutual expulsions of diplomats.',
      },
      {
        year: '2015 (27 فبراير)',
        targetAr: 'بوريس نيمتسوف (نائب رئيس وزراء روسيا الأسبق)',
        targetEn: 'Boris Nemtsov',
        perpetratorAr: 'مسلحون على جسر بولشوي موسكفوريتسكي قرب الكرملين',
        perpetratorEn: 'Gunmen on Bolshoy Moskvoretsky Bridge near Kremlin',
        detailsAr:
          'اغتيل بالرصاص في ظهره أثناء سيره على جسر محاذٍ لأسوار الكرملين بموسكو، وكان أحد أبرز قادة المعارضة السياسية لفلاديمير بوتين.',
        detailsEn:
          'Prominent opposition leader shot dead on a bridge within sight of the Kremlin.',
        impactAr:
          'مظاهرات حاشدة في موسكو ومحاكمة خمسة منفذين وتصاعد الضغوط الدولية على موسكو.',
        impactEn:
          'Mass protests in Moscow and conviction of five suspects, escalating Western condemnation.',
      },
      {
        year: '2022 (20 أغسطس)',
        targetAr: 'داريا دوغينا (ابنة المفكر الاستراتيجي ألكسندر دوغين)',
        targetEn: 'Darya Dugina',
        perpetratorAr: 'سيارة مفخخة في ضواحي موسكو (نسبتها المخابرات الروسية للعمليات الخاصة الأوكرانية)',
        perpetratorEn: 'Car bombing attributed by FSB to Ukrainian special services',
        detailsAr:
          'انفجرت سيارتها على طريق سريع قرب موسكو بعد حضور مهرجان وطني، ورجحت التحقيقات أن والدها صاحب نظرية "العالم الروسي" كان هو المستهدف.',
        detailsEn:
          'Car bomb assassination near Moscow; Russian security services blamed Ukrainian intelligence.',
        impactAr:
          'تصعيد الخطاب الروسي في حرب أوكرانيا وتشديد الإجراءات الأمنية في العاصمة موسكو.',
        impactEn:
          'Escalation of Russian war rhetoric and heightened domestic intelligence surveillance.',
      },
    ],
    terrorEvents: [
      {
        year: '2002 (23 – 26 أكتوبر)',
        titleAr: 'أزمة احتجاز رهائن مسرح دوبرافكا (نورد-أوست في موسكو)',
        titleEn: 'Moscow Theater Hostage Crisis (Nord-Ost)',
        groupAr: 'مسلحون شيشان بقيادة موفسار باراييف',
        groupEn: 'Chechen rebels led by Movsar Barayev',
        casualties: 'مقتل 130 من الرهائن المدنيين و40 مسلحاً',
        detailsAr:
          'اقتحم 40 مسلحاً شيشانياً مسرحاً مكتظاً بـ 850 متفرجاً في قلب موسكو وزرعوا المتفجرات. أنهت القوات الروسية الخاصة الأزمة بضخ غاز مخدر عبر نظام التهوية واقتحام المسرح.',
        detailsEn:
          'Chechen militants seized 850 theatergoers; Russian Spetsnaz pumped chemical agent ending siege.',
        counterMeasureAr:
          'تشديد قبضة الكرملين وإلغاء انتخاب حكام الأقاليم المباشر وتصعيد العمليات العسكرية في شمال القوقاز.',
        counterMeasureEn:
          'Centralization of federal power, abolishing regional governor direct elections, and relentless Caucasus campaigns.',
      },
      {
        year: '2004 (1 – 3 سبتمبر)',
        titleAr: 'مذبحة مدرسة بسلان في أوسيتيا الشمالية',
        titleEn: 'Beslan School Siege',
        groupAr: 'كتيبة رياض الصالحين الشيشانية المسلحة (شامل باساييف)',
        groupEn: 'Riyad-us Saliheen Brigade (Shamil Basayev)',
        casualties: 'مقتل 334 شخصاً (بينهم 186 طفلاً) وإصابة أكثر من 780',
        detailsAr:
          'أبشع حادث إرهابي في تاريخ روسيا باحتجاز أكثر من 1,100 طالب ومعلم كرهائن في صالة ألعاب المدرسة في اليوم الأول للدراسة، وانتهى بانفجارات دموية واقتحام عنيف.',
        detailsEn:
          'Over 1,100 hostages held in a school gymnasium; ended in tragic explosions killing 334, including 186 children.',
        counterMeasureAr:
          'إعادة هيكلة جهاز الأمن الفيدرالي (FSB)، تصفية شاملة لقادة التمرد الشيشاني (بما في ذلك باساييف عام 2006)، وتعيين رمضان قديروف في الشيشان.',
        counterMeasureEn:
          'Overhaul of FSB counter-terror operations, elimination of rebel commanders (including Basayev), and Chechen pacification.',
      },
      {
        year: '2024 (22 مارس)',
        titleAr: 'الهجوم الإرهابي على مجمع كروكوس سيتي هول في موسكو',
        titleEn: 'Crocus City Hall Terrorist Attack',
        groupAr: 'تنظيم داعش - ولاية خراسان (ISIS-K)',
        groupEn: 'ISIS-Khorasan (ISIS-K)',
        casualties: 'مقتل 145 شخصاً وإصابة أكثر من 550 وإحراق قاعة الحفلات الكبرى بالكامل',
        detailsAr:
          'اقتحم أربعة مسلحين قاعة الحفلات الموسيقية في كراسنوغورسك بضواحي موسكو وفتحوا نيران بنادق كلاشينكوف عشوائياً على المدنيين وأشعلوا النيران في المبنى قبل محاولة الهروب نحو الحدود.',
        detailsEn:
          'Four gunmen slaughtered concertgoers with automatic rifles and set the auditorium ablaze in the worst attack on Moscow in 20 years.',
        counterMeasureAr:
          'القبض على المنفذين الأربعة في مقاطعة بريانسك وتشديد الرقابة على العمالة الوافدة من آسيا الوسطى وتوسيع التعاون الأمني مع دول شنغهاي.',
        counterMeasureEn:
          'Apprehension of all shooters near the border, sweeping migration checks, and deepened SCO counter-terror coordination.',
      },
    ],
    foreignEscalations: [
      {
        year: '2008 (أغسطس)',
        opponentCountryAr: 'جورجيا',
        opponentCountryEn: 'Georgia',
        titleAr: 'حرب الأيام الخمسة في أوسيتيا الجنوبية',
        titleEn: 'Russo-Georgian Five-Day War',
        causeAr: 'الهجوم العسكري الجورجي على تسخينفالي عاصمة أوسيتيا الجنوبية وقوات حفظ السلام الروسية.',
        causeEn: 'Georgian military offensive against Tskhinvali and Russian peacekeepers.',
        nature: 'military_conflict',
        detailsAr:
          'تدخل الجيش التاسع والخمسون الروسي ودحر القوات الجورجية والتقدم حتى محارف تبليسي وتدمير القواعد العسكرية الجورجية.',
        detailsEn:
          'Decisive Russian military counter-offensive routing Georgian forces within five days.',
        outcomeAr:
          'اعتراف روسيا الرسمي باستقلال أوسيتيا الجنوبية وأبخازيا، وتجميد مسار انضمام جورجيا للناتو.',
        outcomeEn:
          'Russian formal recognition of South Ossetia and Abkhazia independence, derailing Georgia NATO path.',
      },
      {
        year: '2014',
        opponentCountryAr: 'أوكرانيا والغرب',
        opponentCountryEn: 'Ukraine & The West',
        titleAr: 'ضم شبه جزيرة القرم وأزمة دونباس',
        titleEn: 'Annexation of Crimea & Donbas War',
        causeAr: 'الإطاحة بالرئيس الأوكراني الموالي لروسيا فيكتور يانوكوفيتش في ثورة الميدان بكييف.',
        causeEn: 'Euromaidan revolution ousting pro-Russian President Viktor Yanukovych in Kyiv.',
        nature: 'military_conflict',
        detailsAr:
          'انتشار "الرجال الخضر" (القوات الخاصة الروسية) في القرم وإجراء استفتاء أفضى إلى إعلان انضمام القرم وسيفاستوبول لروسيا واندلاع حرب دونباس.',
        detailsEn:
          'Special forces secured Crimea followed by referendum formalizing annexation and Donbas conflict.',
        outcomeAr:
          'فرض أول حزمة عقوبات غربية كبرى على روسيا وتجميد عضويتها في مجموعة الثماني (G8).',
        outcomeEn:
          'Major Western sanctions wave and suspension of Russia from the G8.',
      },
      {
        year: '2022 – 2026',
        opponentCountryAr: 'أوكرانيا وحلف الناتو',
        opponentCountryEn: 'Ukraine & NATO',
        titleAr: 'الحرب الروسية الأوكرانية (العملية العسكرية الخاصة)',
        titleEn: 'Full-Scale Russo-Ukrainian War',
        causeAr: 'توسع الناتو، رفض الضمانات الأمنية الروسية، ومسألة دونباس والحياد الأوكراني.',
        causeEn: 'NATO enlargement, deadlock over Minsk agreements, and Ukrainian neutrality disputes.',
        nature: 'military_conflict',
        detailsAr:
          'أكبر حرب برية في القارة الأوروبية منذ 1945، سيطرت روسيا خلالها على نحو 20% من أراضي أوكرانيا (لوغانسك ودونيتسك وزابوروجيا وخيرسون) وفرض الغرب أكثر من 18,000 عقوبة.',
        detailsEn:
          'Largest land conflict in Europe since 1945, resulting in Russian incorporation of four eastern regions and historic Western sanctions.',
        outcomeAr:
          'إعادة تشكيل موازين القوى العالمية، تحول تجارة الطاقة الروسية بالكامل نحو الصين والهند، وتسريع نظام الدفع متعدد الأقطاب وبريكس.',
        outcomeEn:
          'Global geopolitical bifurcation, rerouting of Russian energy to Asia, and accelerated BRICS dedollarization.',
      },
    ],
    currencyEvolution: {
      code: 'RUB',
      symbol: '₽',
      nameAr: 'روبل روسي',
      nameEn: 'Russian Ruble',
      currentExchangeRateUsd: '1 USD ≈ 92.50 RUB',
      rateValueNumber: 92.50,
      pegStatusAr: 'تعويم مدار تحت قيود رؤوس الأموال والعقوبات المشددة (Capital Controls)',
      pegStatusEn: 'Managed float under strict capital controls and sanctions regimes',
      centralBankAr: 'بنك روسيا المركزي (Bank of Russia - برئاسة إلفيرا نابيولينا)',
      foreignReservesUsd: '~$600 مليار دولار (منها ~300$ مليار مجمدة في مصارف الغرب)',
      currencyHistoryTimeline: [
        {
          year: 1991,
          eventAr: 'انهيار الاتحاد السوفيتي والروبل السوفيتي والتضخم الجامح',
          eventEn: 'Soviet collapse & hyperinflation',
          rateAtTime: 'انهيار السعر الرسمي (من 0.60 روبل إلى آلاف الروبلات)',
          detailsAr: 'تحرير الأسعار وصدمة الانتقال لاقتصاد السوق أطلقت موجة تضخم جامحة فاقت 2,500%.',
          detailsEn: 'Shock therapy economic reforms triggered hyperinflation exceeding 2,500%.',
        },
        {
          year: 1998,
          eventAr: 'إعادة تسمية الروبل وأزمة التخلف عن سداد الديون (1998 Russian Financial Crisis)',
          eventEn: 'Ruble Redenomination & 1998 Default',
          rateAtTime: 'حذف ثلاثة أصفار (1 روبل جديد = 1000 قديم)',
          detailsAr: 'تخلفت الحكومة عن سداد سندات GKO وانهارت العملة من 6 إلى 20 روبل للدولار.',
          detailsEn: 'Sovereign default on domestic debt and severe devaluation from 6 to 20 RUB/USD.',
        },
        {
          year: 2014,
          eventAr: 'صدمة عقوبات القرم وانهيار أسعار النفط والانتقال للتعويم الحر',
          eventEn: 'Crimea Sanctions & Float Transition',
          rateAtTime: 'هبوط الروبل من 33 إلى 65 روبل للدولار',
          detailsAr: 'تبنى بنك روسيا سياسة استهداف التضخم والتعويم الحر وتأسيس نظام الدفع الوطني "مير" (Mir).',
          detailsEn: 'Adoption of free-floating inflation targeting and birth of domestic Mir card system.',
        },
        {
          year: 2022,
          eventAr: 'فصل البنوك عن سويفت وقرار "الروبل مقابل الغاز" والقيود الصارمة',
          eventEn: 'SWIFT Disconnection & "Ruble for Gas"',
          rateAtTime: 'تقلب تاريخي من 135 روبل إلى 55 روبل للدولار ثم الاستقرار عند ~92',
          detailsAr:
            'فرض قيود استثنائية على خروج العملات الأجنبية وإلزام المصدرين ببيع عائداتهم، والتحول للتسوية باليوان والعملات الوطنية.',
          detailsEn:
            'Strict capital controls, mandatory export currency conversion, and transitioning bilateral settlements to Chinese Yuan.',
        },
      ],
    },
  },

  // 5. جمهورية الصين الشعبية
  cn: {
    countryId: 'cn',
    nameAr: 'جمهورية الصين الشعبية',
    nameEn: 'China',
    assassinations: [
      {
        year: '1971 (13 سبتمبر)',
        targetAr: 'المارشال لين بياو (الخليفة المعين لماو تسي تونغ)',
        targetEn: 'Marshal Lin Biao',
        perpetratorAr: 'حادث تحطم طائرته في منغوليا عقب فشل ما سُمي بانقلاب "المشروع 571"',
        perpetratorEn: 'Plane crash in Mongolia following alleged failed coup Project 571',
        detailsAr:
          'لقي نائب رئيس الحزب ووزير الدفاع ووريث ماو حتفه مع أسرته في تحطم طائرة ترايدنت أثناء محاولته الفرار نحو الاتحاد السوفيتي بعد خلافات عاصفة مع ماو والقيادة الصينية.',
        detailsEn:
          'Defense Minister and designated successor to Mao died in a mysterious plane crash in Mongolia fleeing toward USSR.',
        impactAr:
          'إنهاء نفوذ الجناح العسكري الراديكالي وفتح الباب أمام تشوان لاي لإعادة الدبلوماسية مع أمريكا وتطبيع العلاقات وزيارة نيكسون 1972.',
        impactEn:
          'Purge of military hardliners, paving the way for Zhou Enlai to facilitate historic Nixon 1972 visit.',
      },
    ],
    terrorEvents: [
      {
        year: '2014 (1 مارس)',
        titleAr: 'هجوم محطة قطارات كونمينغ بالأسلحة البيضاء',
        titleEn: 'Kunming Railway Station Attack',
        groupAr: 'عناصر انفصالية من حركة تركستان الشرقية (ETIM)',
        groupEn: 'East Turkestan Islamic Movement (ETIM) separatists',
        casualties: 'مقتل 31 مدنياً وإصابة أكثر من 140',
        detailsAr:
          'هجوم مسلح بالسكاكين والسيوف شنه ثمانية مهاجمين على المسافرين في صالة محطة القطارات بمدينة كونمينغ جنوب غرب الصين، ووُصف في الإعلام الصيني بـ "11 سبتمبر الصيني".',
        detailsEn:
          'Knife-wielding assailants slashed passengers at Kunming train station, dubbed "China 9/11".',
        counterMeasureAr:
          'إطلاق "حملة الضربة الصارمة ضد الإرهاب العنيف" وإقرار قانون مكافحة الإرهاب الشامل عام 2015 وتكثيف المراقبة الرقمية بالذكاء الاصطناعي.',
        counterMeasureEn:
          'Strike Hard Campaign Against Violent Terrorism, landmark 2015 Anti-Terrorism Law, and AI facial surveillance.',
      },
    ],
    foreignEscalations: [
      {
        year: '1950 – 1953',
        opponentCountryAr: 'الولايات المتحدة وقوات الأمم المتحدة',
        opponentCountryEn: 'United States & UN Forces',
        titleAr: 'حرب كوريا ودخول "جيش متطوعي الشعب الصيني"',
        titleEn: 'Korean War Intervention',
        causeAr: 'اقتراب القوات الأمريكية بقيادة ماك آرثر من نهر يالو والحدود الصينية.',
        causeEn: 'UN forces advancing to the Yalu River on the Chinese border.',
        nature: 'military_conflict',
        detailsAr:
          'أمر ماو تسي تونغ بمشاركة مئات الآلاف من الجنود الصينيين في هجوم مفاجئ صد القوات الأمريكية إلى جنوب خط عرض 38.',
        detailsEn:
          'Hundreds of thousands of Chinese troops intervened, pushing UN forces back to the 38th parallel.',
        outcomeAr:
          'توقيع الهدنة 1953 وتقسيم شبه الجزيرة الكورية وتكريس الصين كقوة عسكرية إقليمية عظمى.',
        outcomeEn:
          '1953 armistice cementing division of Korea and proving Chinese military superpower status.',
      },
      {
        year: '1962 (أكتوبر - نوفمبر)',
        opponentCountryAr: 'الهند',
        opponentCountryEn: 'India',
        titleAr: 'الحرب الحدودية الصينية الهندية في الهيمالايا',
        titleEn: 'Sino-Indian War',
        causeAr: 'النزاع على خط ماكماهون ومنطقة أكساي تشين في لاداخ ولجوء الدالاي لاما للهند.',
        causeEn: 'Disputed Himalayan borders (McMahon Line & Aksai Chin) and Dalai Lama exile.',
        nature: 'military_conflict',
        detailsAr:
          'هجوم عسكري صيني كاسح عبر جبال الهيمالايا على جبهتين، ألحق هزيمة سريعة بالقوات الهندية قبل إعلان بكين وقف إطلاق النار من جانب واحد.',
        detailsEn:
          'Swift Chinese mountain offensive securing Aksai Chin before declaring a unilateral ceasefire.',
        outcomeAr:
          'بسط السيطرة الصينية على أكساي تشين الاستراتيجية لربط التبت بشينجيانغ، واستمرار النزاع الحدودي حتى اشتباكات وادي غالوان 2020.',
        outcomeEn:
          'China secured control over Aksai Chin corridor linking Tibet to Xinjiang.',
      },
      {
        year: '1979',
        opponentCountryAr: 'فيتنام',
        opponentCountryEn: 'Vietnam',
        titleAr: 'الحرب الصينية الفيتنامية (حرب تأديبية)',
        titleEn: 'Sino-Vietnamese War',
        causeAr: 'الغزو الفيتنامي لكمبوديا والإطاحة بنظام الخمير الحمر المتحالف مع بكين.',
        causeEn: 'Vietnamese invasion of Cambodia ousting the Beijing-backed Khmer Rouge.',
        nature: 'military_conflict',
        detailsAr:
          'شن دنج شياوبينج هجوماً عسكرياً استمر شهراً عبر الحدود الشمالية لفيتنام لتدمير المنشآت العسكرية قبل الانسحاب.',
        detailsEn:
          'Month-long punitive border incursion launched by Deng Xiaoping before declaring victory and withdrawing.',
        outcomeAr:
          'إثبات عدم قدرة الاتحاد السوفيتي على حماية حلفائه، وتسريع خطط تحديث جيش التحرير الشعبي الصيني.',
        outcomeEn:
          'Demonstrated limits of Soviet mutual assistance and accelerated PLA defense modernization.',
      },
      {
        year: '2020 – 2026',
        opponentCountryAr: 'الولايات المتحدة وتايوان',
        opponentCountryEn: 'United States & Taiwan',
        titleAr: 'أزمات مضيق تايوان والمناورات العسكرية الحية الشاملة',
        titleEn: 'Taiwan Strait Tensions & Joint Sword Drills',
        causeAr: 'زيارة رئيسة مجلس النواب الأمريكي نانسي بيلوسي (2022) والصفقات العسكرية واستقلال تايوان الفعلي.',
        causeEn: 'High-level US congressional visits, weapons sales, and pro-independence governance in Taipei.',
        nature: 'diplomatic_crisis',
        detailsAr:
          'إطلاق مناورات "السيف المشترك" بمحاصرة جزيرة تايوان بالذخيرة الحية وإطلاق صواريخ باليستية فوق الجزيرة ونشر حاملات الطائرات في غرب الهادئ.',
        detailsEn:
          'Joint Sword blockading maneuvers, ballistic missile test-firings over Taipei, and dual-carrier deployments.',
        outcomeAr:
          'إلغاء الخط الوهمي الفاصل في مضيق تايوان، وتطبيع الوجود العسكري الصيني اليومي حول الجزيرة.',
        outcomeEn:
          'Dismantling the traditional median line in the strait and normalizing permanent PLA encircling patrols.',
      },
    ],
    currencyEvolution: {
      code: 'CNY',
      symbol: '¥',
      nameAr: 'يوان صيني (رنمينبي)',
      nameEn: 'Chinese Yuan (Renminbi)',
      currentExchangeRateUsd: '1 USD ≈ 7.23 CNY',
      rateValueNumber: 7.23,
      pegStatusAr: 'سعر صرف مدار مقابل سلة عملات أجنبية مع نطاق تذبذب يومي (±2% Daily Band)',
      pegStatusEn: 'Managed floating regime based on market supply and currency basket (CFETS)',
      centralBankAr: 'بنك الشعب الصيني (People’s Bank of China - PBOC)',
      foreignReservesUsd: '~$3,250 مليار دولار (أضخم احتياطي نقد أجنبي في تاريخ الكوكب)',
      currencyHistoryTimeline: [
        {
          year: 1948,
          eventAr: 'إصدار "عملة الشعب" (الرنمينبي) وتأسيس بنك الشعب الصيني',
          eventEn: 'Birth of Renminbi (People Currency)',
          rateAtTime: 'توحيد العملات الإقليمية ومكافحة التضخم',
          detailsAr: 'إصدار العملة قبيل إعلان جمهورية الصين الشعبية وتوحيد النظام النقدي بعد حروب طويلة.',
          detailsEn: 'Unified currency issued ahead of PRC proclamation to halt Nationalist hyperinflation.',
        },
        {
          year: 1994,
          eventAr: 'توحيد نظام الصرف وإلغاء كوبونات العملة الأجنبية والربط بالدولار',
          eventEn: '1994 Exchange Rate Unification',
          rateAtTime: 'تثبيت السعر عند 8.28 يوان للدولار حتى 2005',
          detailsAr: 'قرار حاسم لدعم الصادرات الصينية وتحويل البلاد إلى "مصنع العالم".',
          detailsEn: 'Pegging at 8.28 CNY/USD, laying groundwork for China WTO accession and export boom.',
        },
        {
          year: 2005,
          eventAr: 'إلغاء الربط الثابت بالدولار والانتقال لنظام سلة العملات',
          eventEn: 'De-pegging & Managed Basket Float (2005)',
          rateAtTime: 'ارتفاع اليوان تدريجياً من 8.28 إلى 6.05 يوان للدولار',
          detailsAr: 'السماح لليوان بالارتفاع بنسبة تزيد عن 30% استجابة للضغوط الدولية ونمو الاقتصاد الصيني.',
          detailsEn: 'Gradual appreciation policy strengthening the Yuan by over 30% against USD.',
        },
        {
          year: 2016,
          eventAr: 'انضمام اليوان إلى سلة حقوق السحب الخاصة (SDR) لصندوق النقد الدولي',
          eventEn: 'IMF Special Drawing Rights (SDR) Inclusion',
          rateAtTime: 'اليوان يصبح عملة احتياط دولية رسمية بحصة 10.92%',
          detailsAr: 'اعتراف تاريخي بريادة اليوان بجانب الدولار واليورو والجنيه الإسترليني والين.',
          detailsEn: 'Landmark IMF recognition alongside the USD, Euro, Yen, and British Pound.',
        },
        {
          year: 2024,
          eventAr: 'إطلاق نظام CIPS للدفع الدولي واليوان الرقمي (e-CNY)',
          eventEn: 'Global Cross-Border Yuan Expansion (CIPS & e-CNY)',
          rateAtTime: 'تسوية أكثر من 50% من تجارة الصين الخارجية باليوان الصيني لأول مرة',
          detailsAr:
            'تجاوز اليوان للدولار في المعاملات العابرة للحدود للصين، واستخدامه لتسوية النفط الروسي والخليجي وتجارة بريكس.',
          detailsEn:
            'Yuan surpassing USD in China cross-border trade settlements, boosted by BRICS energy trade.',
        },
      ],
    },
  },

  // 6. الجمهورية الإسلامية الإيرانية
  ir: {
    countryId: 'ir',
    nameAr: 'الجمهورية الإسلامية الإيرانية',
    nameEn: 'Iran',
    assassinations: [
      {
        year: '1981 (30 أغسطس)',
        targetAr: 'الرئيس محمد علي رجائي ورئيس الوزراء محمد جواد باهنر',
        targetEn: 'President Mohammad-Ali Rajai & PM Mohammad-Javad Bahonar',
        perpetratorAr: 'منظمة مجاهدي خلق (MEK) بقنبلة داخل حقيبة في مكتب رئيس الوزراء',
        perpetratorEn: 'Mojahedin-e-Khalq (MEK) briefcase bomb',
        detailsAr:
          'اغتيل الرئيس الإيراني ورئيس وزرائه في تفجير استهدف اجتماعاً أمنياً رفيع المستوى في طهران عقب الثورة الإسلامية وعزل بني صدر.',
        detailsEn:
          'Assassinated in a devastating bomb explosion during a security meeting in Tehran following the 1979 Revolution.',
        impactAr:
          'انتخاب علي خامنئي رئيساً للجمهورية وتصفية قيادات المعارضة وتثبيت قبضة النظام الثوري.',
        impactEn:
          'Election of Ali Khamenei as president and consolidation of Islamic Republic governance.',
      },
      {
        year: '2020 (3 يناير)',
        targetAr: 'اللواء قاسم سليماني (قائد فيلق القدس بالحرس الثوري)',
        targetEn: 'Major General Qasem Soleimani (IRGC Quds Force Commander)',
        perpetratorAr: 'غارة أمريكية بطائرة مسيرة (MQ-9 Reaper) بأمر مباشر من الرئيس دونالد ترامب قرب مطار بغداد',
        perpetratorEn: 'US MQ-9 Reaper drone strike ordered by President Donald Trump near Baghdad Airport',
        detailsAr:
          'أهم عملية تصفية عسكرية استهدفت مهندس النفوذ الإقليمي الإيراني وقائد "محور المقاومة" أثناء وصوله إلى بغداد، وقُتل معه أبو مهدي المهندس نائب رئيس الحشد الشعبي.',
        detailsEn:
          'High-stakes US drone assassination targeting the architect of Iranian regional proxy networks.',
        impactAr:
          'قصف صاروخي إيراني لقاعدة "عين الأسد" الأمريكية في العراق وتصاعد المواجهة الإقليمية.',
        impactEn:
          'Iranian retaliatory ballistic missile strikes on Ain al-Asad base and heightened Middle East escalation.',
      },
      {
        year: '2020 (27 نوفمبر)',
        targetAr: 'الدكتور محسن فخري زاده (أبو البرنامج النووي العسكري الإيراني)',
        targetEn: 'Mohsen Fakhrizadeh (Chief Nuclear Scientist)',
        perpetratorAr: 'عملية استخبارية معقدة باستخدام رشاش آلي موجه بالأقمار الصناعية والذكاء الاصطناعي (الموساد الإسرائيلي)',
        perpetratorEn: 'Satellite & AI-controlled remote robotic gun ambush attributed to Israeli Mossad',
        detailsAr:
          'اغتيل رئيس منظمة الأبحاث والتطوير الدفاعي بوزارة الدفاع الإيرانية في كمين استهدف موكبه قرب مدينة آبسرد بمحافظة طهران.',
        detailsEn:
          'Head of defense research organization assassinated via satellite-controlled robotic ambush near Tehran.',
        impactAr:
          'تصويت البرلمان الإيراني على قانون تسريع التخصيب النووي إلى 60% وتقييد عمل مفتشي الوكالة الدولية.',
        impactEn:
          'Iranian parliament enacted Strategic Action Plan accelerating uranium enrichment to 60%.',
      },
      {
        year: '2024 (31 يوليو)',
        targetAr: 'إسماعيل هنية (رئيس المكتب السياسي لحركة حماس)',
        targetEn: 'Ismail Haniyeh (Hamas Political Bureau Chief)',
        perpetratorAr: 'عبوة ناسفة مزروعة مسبقاً داخل مقر إقامته التابع للحرس الثوري في شمال طهران (الموساد الإسرائيلي)',
        perpetratorEn: 'Explosive device planted in an IRGC guest house in Tehran attributed to Mossad',
        detailsAr:
          'اغتيل هنية في قلب العاصمة طهران بعد ساعات من مشاركته في مراسم تنصيب الرئيس الإيراني مسعود بزشكيان، في خرق أمني واستخباري مدوٍ.',
        detailsEn:
          'Assassinated in an IRGC guest house in Tehran hours after attending the presidential inauguration.',
        impactAr:
          'إطلاق إيران لعملية "الوعد الصادق 2" بـ 200 صاروخ باليستي وفرط صوتي على القواعد العسكرية الإسرائيلية في أكتوبر 2024.',
        impactEn:
          'Triggered massive Iranian ballistic missile retaliation (Operation True Promise II) targeting Israeli bases.',
      },
    ],
    terrorEvents: [
      {
        year: '1981 (28 يونيو)',
        titleAr: 'تفجير مقر حزب الجمهورية الإسلامية (كارثة هفت تير)',
        titleEn: 'Haft-e Tir Bombing',
        groupAr: 'منظمة مجاهدي خلق (MEK)',
        groupEn: 'Mojahedin-e-Khalq (MEK)',
        casualties: 'مقتل 73 من قادة الثورة، بينهم آية الله محمد بهشتي (رئيس السلطة القضائية) و4 وزراء و27 نائباً',
        detailsAr:
          'انفجار قنبلة ضخمة أثناء اجتماع لقيادة الحزب في طهران أدى إلى مقتل الرجل الثاني في النظام بعد الخميني وعشرات المسؤولين.',
        detailsEn:
          'Catastrophic bombing of the Islamic Republican Party headquarters killing 73 top officials.',
        counterMeasureAr:
          'حملة تطهير واسعة النطاق وقمع شامل للتنظيمات المعارضة وتأسيس وزارة الاستخبارات والأمن الوطني (إطلاعات 1984).',
        counterMeasureEn:
          'Massive security purges and creation of the Ministry of Intelligence (VAJA/Ettela\'at in 1984).',
      },
      {
        year: '2024 (3 يناير)',
        titleAr: 'تفجيرا كرمان الإرهابيان في الذكرى الرابعة لمقتل سليماني',
        titleEn: 'Kerman Memorial Twin Bombings',
        groupAr: 'تنظيم داعش - ولاية خراسان (ISIS-K)',
        groupEn: 'ISIS-Khorasan (ISIS-K)',
        casualties: 'مقتل 96 شخصاً وإصابة أكثر من 284 من المشاركين في إحياء الذكرى',
        detailsAr:
          'فجر انتحاريان يرتديان أحزمة ناسفة نفسيهما وسط حشود الزائرين بالقرب من مرقد قاسم سليماني في مدينة كرمان، وهو الهجوم الأكثر دموية في إيران منذ 1979.',
        detailsEn:
          'Twin suicide bombings targeted the anniversary procession for Soleimani in Kerman, killing 96.',
        counterMeasureAr:
          'ضربات صاروخية باليستية إيرانية عابرة للحدود استهدفت مقار للجماعات التكفيرية في إدلب بسوريا ومقرات في بلوشستان الباكستانية.',
        counterMeasureEn:
          'Cross-border ballistic missile strikes against militant camps in Syria and Pakistani Baluchistan.',
      },
    ],
    foreignEscalations: [
      {
        year: '1979 – 1981',
        opponentCountryAr: 'الولايات المتحدة الأمريكية',
        opponentCountryEn: 'United States',
        titleAr: 'أزمة احتجاز الرهائن في السفارة الأمريكية بطهران (444 يوماً)',
        titleEn: 'Iran Hostage Crisis (444 Days)',
        causeAr: 'اقتحام الطلاب الثوريين للسفارة الأمريكية عقب لجوء الشاه المخلوع إلى نيويورك لتلقي العلاج.',
        causeEn: 'Storming of the US Embassy following admission of the exiled Shah to a US hospital.',
        nature: 'diplomatic_crisis',
        detailsAr:
          'احتجاز 52 دبلوماسياً ومواطناً أمريكياً، وفشل عملية الإنقاذ العسكرية الأمريكية "مخلب النسر" (Operation Eagle Claw) في صحراء طبس 1980.',
        detailsEn:
          '52 Americans held hostage for 444 days, and catastrophic failure of Operation Eagle Claw rescue mission.',
        outcomeAr:
          'قطع العلاقات الدبلوماسية الأمريكية الإيرانية وتجميد الأصول الإيرانية والإفراج عن الرهائن في يوم تنصيب ريغان 1981 بموجب اتفاقيات الجزائر.',
        outcomeEn:
          'Severing of US-Iran diplomatic ties, freezing of assets, and release under the 1981 Algiers Accords.',
      },
      {
        year: '1980 – 1988',
        opponentCountryAr: 'العراق (بدعم إقليمي ودولي)',
        opponentCountryEn: 'Iraq (with international backing)',
        titleAr: 'حرب الخليج الأولى (الحرب الإيرانية العراقية / الدفاع المقدس)',
        titleEn: 'Iran-Iraq War (Eight Years War)',
        causeAr: 'النزاع على شط العرب والحدود ومخاوف تصدير الثورة الإسلامية الإيرانية.',
        causeEn: 'Disputed Shatt al-Arab waterway and fears of regional revolutionary spillover.',
        nature: 'military_conflict',
        detailsAr:
          'أطول حرب تقليدية في القرن العشرين، شهدت هجمات الموجات البشرية واستخدام السلاح الكيماوي وحرب الناقلات وإسقاط الطائرة الإيرانية 655 بصاروخ أمريكي.',
        detailsEn:
          'Longest conventional war of the 20th century with human wave assaults, chemical warfare, and the Tanker War.',
        outcomeAr:
          'قبول قرار مجلس الأمن 598، ووصف الخميني للقرار بـ "تجرع كأس السم"، وخسائر بشرية تجاوزت المليون دون تغيير في الحدود.',
        outcomeEn:
          'Acceptance of UN Resolution 598 restoring pre-war status quo ante with over one million casualties.',
      },
      {
        year: '2024 (أبريل وأكتوبر)',
        opponentCountryAr: 'إسرائيل',
        opponentCountryEn: 'Israel',
        titleAr: 'المواجهة العسكرية المباشرة (عمليات الوعد الصادق والرد الإسرائيلي)',
        titleEn: 'Direct Iran-Israel Military Confrontations (2024)',
        causeAr: 'قصف القنصلية الإيرانية في دمشق واغتيال إسماعيل هنية في طهران وحسن نصر الله في بيروت.',
        causeEn: 'Israeli strike on Iranian consulate in Damascus and assassinations of Haniyeh & Nasrallah.',
        nature: 'military_conflict',
        detailsAr:
          'أول استهداف عسكري مباشر من الأراضي الإيرانية لإسرائيل بأكثر من 300 مسيرة وصاروخ (أبريل 2024) و200 صاروخ باليستي (أكتوبر 2024)، وشن إسرائيل غارات جوية على رادارات ودفاعات جوية ومصانع صواريخ داخل إيران.',
        detailsEn:
          'First direct state-on-state military strikes exchanging hundreds of ballistic missiles and airstrikes.',
        outcomeAr:
          'كسر قواعد الاشتباك التقليدية (حرب الظل) والانتقال إلى مرحلة الردع الصاروخي المباشر.',
        outcomeEn:
          'Shattering of shadow-war boundaries, ushering in direct ballistic missile deterrence exchanges.',
      },
    ],
    currencyEvolution: {
      code: 'IRR',
      symbol: '﷼',
      nameAr: 'ريال إيراني (وتداول التومان شعبياً)',
      nameEn: 'Iranian Rial (Toman in public usage)',
      currentExchangeRateUsd: 'السعر الرسمي: 42,000 ريال / السوق الحرة الموازية: ~590,000 - 610,000 ريال للدولار',
      rateValueNumber: 595000,
      pegStatusAr: 'نظام أسعار صرف متعددة مشوه تحت وطأة العقوبات وحصار التحويلات المصرفية (SWIFT)',
      pegStatusEn: 'Multi-tier distorted exchange rate under comprehensive SWIFT financial sanctions',
      centralBankAr: 'البنك المركزي للجمهورية الإسلامية الإيرانية (CBI - تأسس 1960)',
      foreignReservesUsd: 'محجوزة ومقيدة خارجياً بفعل العقوبات الأمريكية والأوروبية',
      currencyHistoryTimeline: [
        {
          year: 1932,
          eventAr: 'استبدال التومان القاجاري بالريال كعملة رسمية في عهد رضا شاه',
          eventEn: 'Replacement of Qajar Toman with Rial',
          rateAtTime: '1 تومان = 10 ريالات',
          detailsAr: 'إصدار أول عملة ورقية نظامية عبر البنك الوطني الإيراني (بانك ملي).',
          detailsEn: 'Formal adoption of the Rial with one Toman equalling 10 Rials.',
        },
        {
          year: 1979,
          eventAr: 'الثورة الإسلامية وتجميد الأصول وبداية تراجع الريال',
          eventEn: 'Islamic Revolution & Capital Flight',
          rateAtTime: 'تراجع من 70 ريال للدولار إلى مئات الريالات',
          detailsAr: 'هروب رؤوس الأموال واندلاع الحرب مع العراق وبدء نظام السعرين (الرسمي والسوق الحرة).',
          detailsEn: 'Mass capital flight and war expenditures prompting dual-exchange rate system.',
        },
        {
          year: 2018,
          eventAr: 'انسحاب ترامب من الاتفاق النووي وفرض "أقصى ضغط" وانهيار الريال',
          eventEn: 'Trump JCPOA Withdrawal & "Maximum Pressure"',
          rateAtTime: 'هبوط الريال من 42,000 إلى أكثر من 300,000 ثم 600,000 للدولار',
          detailsAr: 'حظر تصدير النفط الإيراني وقطع البنوك الإيرانية عن نظام سويفت العالمي وتضخم تجاوز 50%.',
          detailsEn: 'Oil export embargo and total SWIFT disconnection causing catastrophic currency depreciation.',
        },
        {
          year: 2020,
          eventAr: 'مشروع قانون البرلمان لحذف أربعة أصفار والعودة رسمياً للتومان',
          eventEn: 'Parliamentary Bill to Drop Four Zeros and Adopt Toman',
          rateAtTime: '1 تومان جديد = 10,000 ريال قديم',
          detailsAr: 'خطة إصلاح نقدي تدريجية لتسهيل الحسابات والمعاملات اليومية للمواطنين في ظل التضخم المزمن.',
          detailsEn: 'Monetary reform plan to redenominate the currency and drop four zeros.',
        },
      ],
    },
  },

  // 7. دولة إسرائيل
  il: {
    countryId: 'il',
    nameAr: 'إسرائيل',
    nameEn: 'Israel',
    assassinations: [
      {
        year: '1948 (17 سبتمبر)',
        targetAr: 'الكونت فولك برنادوت (وسيط الأمم المتحدة للسلام في فلسطين)',
        targetEn: 'Count Folke Bernadotte (UN Mediator in Palestine)',
        perpetratorAr: 'منظمة "ليحي" الصهيونية المتطرفة (عصابة شتيرن) بقيادة إسحاق شامير',
        perpetratorEn: 'Lehi / Stern Gang extremist Zionist underground',
        detailsAr:
          'اغتيل الدبلوماسي السويدي في القدس بسبب مقترحاته التي طالبت بعودة اللاجئين الفلسطينيين إلى ديارهم ووضع القدس تحت إدارة دولية.',
        detailsEn:
          'UN mediator assassinated in Jerusalem for proposing Palestinian refugee return and Jerusalem internationalization.',
        impactAr:
          'حظر المنظمات الصهيونية المسلحة غير النظامية ودمجها في الجيش الإسرائيلي، وإصدار قرار الأمم المتحدة 194.',
        impactEn:
          'Dissolution of underground militias into IDF and passing of UN Resolution 194.',
      },
      {
        year: '1995 (4 نوفمبر)',
        targetAr: 'إسحاق رابين (رئيس وزراء إسرائيل وموقع اتفاق أوسلو)',
        targetEn: 'Yitzhak Rabin (Prime Minister of Israel)',
        perpetratorAr: 'إيغال عامير (متطرف يميني ديني يهودي)',
        perpetratorEn: 'Yigal Amir (Right-wing religious Jewish extremist)',
        detailsAr:
          'أطلق النار عليه في مهرجان للسلام في ساحة ملوك إسرائيل بتل أبيب لمعارضة المستوطنين واليمين المتطرف لاتفاقات أوسلو مع ياسر عرفات.',
        detailsEn:
          'Assassinated following a peace rally in Tel Aviv by an extremist opposed to Oslo Accords.',
        impactAr:
          'شلل عملية السلام الإسرائيلية الفلسطينية، وصعود بنيامين نتنياهو لزعامة الليكود ورئاسة الحكومة عام 1996.',
        impactEn:
          'Severe derailment of the Oslo peace process, facilitating Benjamin Netanyahu rise to power in 1996.',
      },
      {
        year: '2001 (17 أكتوبر)',
        targetAr: 'رحبعام زئيفي (وزير السياحة الإسرائيلي وزعيم حزب موليدت)',
        targetEn: 'Rehavam Ze\'evi (Minister of Tourism)',
        perpetratorAr: 'الجبهة الشعبية لتحرير فلسطين (PFLP)',
        perpetratorEn: 'Popular Front for the Liberation of Palestine (PFLP)',
        detailsAr:
          'اغتيل بالرصاص داخل فندق حياة ريجنسي في القدس الشرقية رداً على اغتيال إسرائيل للأمين العام للجبهة أبو علي مصطفى قبلها بشهرين.',
        detailsEn:
          'Assassinated in a Jerusalem hotel in retaliation for the targeted killing of PFLP chief Abu Ali Mustafa.',
        impactAr:
          'حصار المقاطعة بمقر الرئيس ياسر عرفات في رام الله وانطلاق عملية "السور الواقي" 2002.',
        impactEn:
          'Siege of Yasser Arafat headquarters in Ramallah and launch of Operation Defensive Shield.',
      },
    ],
    terrorEvents: [
      {
        year: '2001 – 2003',
        titleAr: 'موجة العمليات الاستشهادية خلال الانتفاضة الفلسطينية الثانية',
        titleEn: 'Second Intifada Suicide Bombing Campaign',
        groupAr: 'كتائب القسام (حماس)، سرايا القدس (الجهاد الإسلامي)، وكتائب شهداء الأقصى',
        groupEn: 'Hamas, Palestinian Islamic Jihad & Al-Aqsa Martyrs Brigades',
        casualties: 'مقتل أكثر من 1,000 إسرائيلي في حافلات ومطاعم القدس وتل أبيب ونتانيا',
        detailsAr:
          'عشرات العمليات الاستشهادية أبرزها تفجير فندق بارك في نتانيا ليلة عيد الفصح (مارس 2002 - 30 قتيلاً) ودولفيناريوم تل أبيب ومطعم سبارو.',
        detailsEn:
          'Wave of suicide bombings targeting buses and restaurants, including the 2002 Passover massacre.',
        counterMeasureAr:
          'إعادة احتلال مدن الضفة الغربية (عملية السور الواقي)، وبناء جدار الفصل العنصري الإسمنتي في الضفة الغربية، وتكثيف الاغتيالات بالمسيرات.',
        counterMeasureEn:
          'Construction of the West Bank separation barrier and massive targeted assassination campaigns.',
      },
      {
        year: '2023 (7 أكتوبر)',
        titleAr: 'عملية طوفان الأقصى واجتياح غلاف غزة',
        titleEn: 'October 7 Infiltration / Operation Al-Aqsa Flood',
        groupAr: 'كتائب عز الدين القسام (حماس) وفصائل المقاومة الفلسطينية',
        groupEn: 'Izz ad-Din al-Qassam Brigades (Hamas)',
        casualties: 'مقتل نحو 1,200 إسرائيلي وأسر أكثر من 250 واجتياز الجدار الأمني الإلكتروني',
        detailsAr:
          'أكبر فشل استخباري وعسكري في تاريخ إسرائيل؛ هجوم مباغت بري وبحري وجوي عبر الطائرات الشراعية وتدمير فرقة غزة واحتجاز الرهائن.',
        detailsEn:
          'Unprecedented multi-domain surprise attack breaching the Gaza border barrier, resulting in 1,200 deaths.',
        counterMeasureAr:
          'إعلان حالة الحرب لأول مرة منذ 1973، وتدمير قطاع غزة بحملة جوية وبرية غير مسبوقة وتصعيد المواجهة الإقليمية مع حزب الله وإيران.',
        counterMeasureEn:
          'Formal declaration of war, catastrophic assault on Gaza, and regional multi-front escalation.',
      },
    ],
    foreignEscalations: [
      {
        year: '1982',
        opponentCountryAr: 'لبنان ومنظمة التحرير الفلسطينية وسوريا',
        opponentCountryEn: 'Lebanon, PLO & Syria',
        titleAr: 'حرب لبنان الأولى (عملية سلامة الجليل وحصار بيروت)',
        titleEn: '1982 Lebanon War',
        causeAr: 'محاولة اغتيال السفير الإسرائيلي شلومو أرجوف في لندن وقصف بلدات الشمال.',
        causeEn: 'Assassination attempt on Israeli ambassador in London and cross-border rocket fire.',
        nature: 'military_conflict',
        detailsAr:
          'اجتياح القوات الإسرائيلية للبنان بقيادة أرئيل شارون والوصول لبيروت ومحاصرتها، وخروج منظمة التحرير الفلسطينية إلى تونس، ومجزرة صبرا وشاتيلا.',
        detailsEn:
          'Invasion reaching Beirut, expulsion of the PLO leadership to Tunisia, and Sabra and Shatila massacre.',
        outcomeAr:
          'تأسيس حزب الله اللبناني، واستمرار الاحتلال للشريط الحدودي الجنوبي حتى الانسحاب الأحادي عام 2000.',
        outcomeEn:
          'Birth of Lebanese Hezbollah and prolonged occupation of southern security zone until 2000 withdrawal.',
      },
      {
        year: '2006 (يوليو - أغسطس)',
        opponentCountryAr: 'حزب الله (لبنان)',
        opponentCountryEn: 'Hezbollah (Lebanon)',
        titleAr: 'حرب تموز / حرب لبنان الثانية (34 يوماً)',
        titleEn: '2006 Lebanon War (July War)',
        causeAr: 'أسر حزب الله لجنديين إسرائيليين ومقتل آخرين في عملية عسكرية عبر الحدود.',
        causeEn: 'Hezbollah cross-border raid capturing two Israeli soldiers.',
        nature: 'military_conflict',
        detailsAr:
          'قصف جوي ومدفعي واسع النطاق دمر البنية التحتية للبنان وقصف حيفا وشمال إسرائيل بآلاف الصواريخ وفشل الهجوم البري في وادي الحجير.',
        detailsEn:
          '34 days of intense bombardment and fierce ground battles with thousands of rockets hitting northern Israel.',
        outcomeAr:
          'صدور قرار مجلس الأمن 1701 ونشر قوات اليونيفيل والجيش اللبناني، واستخلاصات لجنة فينوغراد حول إخفاق القيادة الإسرائيلية.',
        outcomeEn:
          'UN Resolution 1701 expanding UNIFIL and Winograd Commission report citing Israeli strategic shortcomings.',
      },
      {
        year: '2023 – 2026',
        opponentCountryAr: 'حزب الله، إيران، الحوثيين في اليمن، وفصائل المقاومة',
        opponentCountryEn: 'Axis of Resistance (Hezbollah, Iran, Houthis)',
        titleAr: 'حرب الجبهات المتعددة بعد 7 أكتوبر والاشتباك المباشر مع إيران',
        titleEn: 'Multi-Front Regional War (2023–2026)',
        causeAr: 'حرب غزة وفتح جبهات إسناد في جنوب لبنان والبحر الأحمر والعراق.',
        causeEn: 'War on Gaza and subsequent coordinated multi-front escalation.',
        nature: 'military_conflict',
        detailsAr:
          'عملية تفجير أجهزة البيجر واللاسلكي واغتيال حسن نصر الله واجتياح جنوب لبنان وتبادل ضربات صاروخية باليستية مباشرة مع إيران وإغلاق الحوثيين للملاحة في البحر الأحمر.',
        detailsEn:
          'Pager detonations, assassination of Nasrallah, ground incursion into Lebanon, direct strikes with Iran, and Red Sea blockade.',
        outcomeAr:
          'أكبر أزمة استراتيجية واقتصادية واجتماعية في تاريخ إسرائيل واستنزاف غير مسبوق لمنظومات القبة الحديدية وآرو ومقاطعة دولية متنامية.',
        outcomeEn:
          'Historic strategic, economic and diplomatic strain with growing global isolation and ICC warrants.',
      },
    ],
    currencyEvolution: {
      code: 'ILS',
      symbol: '₪',
      nameAr: 'شيكل إسرائيلي جديد (NIS)',
      nameEn: 'Israeli New Shekel (NIS)',
      currentExchangeRateUsd: '1 USD ≈ 3.75 ILS',
      rateValueNumber: 3.75,
      pegStatusAr: 'تعويم حر كامل وقابلية تحويل دولية كاملة (Free Floating)',
      pegStatusEn: 'Fully convertible free-floating currency managed by Bank of Israel',
      centralBankAr: 'بنك إسرائيل المركزي (Bank of Israel - تأسس 1954)',
      foreignReservesUsd: '~$210 مليار دولار',
      currencyHistoryTimeline: [
        {
          year: 1952,
          eventAr: 'إصدار الليرة الإسرائيلية واستبدال الجنيه الفلسطيني',
          eventEn: 'Creation of the Israeli Lira',
          rateAtTime: 'ربط بالجنيه الإسترليني ثم الدولار',
          detailsAr: 'استبدال عملة الانتداب بالليرة وربطها بالدولار بمستويات متغيرة.',
          detailsEn: 'Transitioning from Mandatory Palestine Pound to the Israeli Lira.',
        },
        {
          year: 1980,
          eventAr: 'استبدال الليرة بالشيكل القديم وتفشي التضخم الجامح',
          eventEn: 'Old Shekel & 400% Hyperinflation',
          rateAtTime: 'انهيار قيمة العملة ووصول التضخم لـ 445%',
          detailsAr: 'تدهور نقدي غير مسبوق واضطرار المتاجر لتسعير البضائع بالدولار الأمريكي.',
          detailsEn: 'Catastrophic hyperinflation reaching 445% annually under heavy fiscal deficits.',
        },
        {
          year: 1985,
          eventAr: 'خطة التثبيت الاقتصادي وإصدار "الشيكل الجديد" (NIS)',
          eventEn: '1985 Economic Stabilization Plan & New Shekel',
          rateAtTime: 'حذف ثلاثة أصفار (1 شيكل جديد = 1000 شيكل قديم)',
          detailsAr: 'خطة إصلاح تاريخية شملت تجميد الأسعار واستقلالية البنك المركزي وخصخصة القطاع العام.',
          detailsEn: 'Landmark reform ending hyperinflation, anchoring central bank autonomy, and launching NIS.',
        },
        {
          year: 2008,
          eventAr: 'إعلان الشيكل عملة قابلة للتحويل الحر عالمياً (CLS System)',
          eventEn: 'Global CLS Settlement Convertibility',
          rateAtTime: 'الشيكل من أقوى العملات في العالم بفضل قطاع التكنولوجيا المتقدمة',
          detailsAr: 'انضمام الشيكل لنظام التسوية الدولية CLS وتدفق استثمارات التكنولوجيا الفائقة.',
          detailsEn: 'Joining continuous linked settlement (CLS) driven by massive tech venture capital flows.',
        },
        {
          year: 2023,
          eventAr: 'ضخ 30$ مليار دولار من الاحتياطي لدعم الشيكل بعد حرب 7 أكتوبر',
          eventEn: 'Emergency $30B FX Intervention (Post-Oct 7)',
          rateAtTime: 'هبوط الشيكل مؤقتاً إلى 4.08 ثم التعافي إلى ~3.75',
          detailsAr: 'أول تدخل مباشر لبنك إسرائيل لبيع العملات الأجنبية في تاريخه لحماية استقرار الأسواق.',
          detailsEn: 'First direct FX reserve sale by Bank of Israel injecting $30B to counter wartime capital flight.',
        },
      ],
    },
  },

  // 8. الجمهورية الجزائرية الديمقراطية الشعبية
  dz: {
    countryId: 'dz',
    nameAr: 'الجمهورية الجزائرية الديمقراطية الشعبية',
    nameEn: 'Algeria',
    assassinations: [
      {
        year: '1992 (29 يونيو)',
        targetAr: 'الرئيس محمد بوضياف (أحد القادة الستة التاريخيين للثورة التحريرية)',
        targetEn: 'President Mohamed Boudiaf',
        perpetratorAr: 'الملازم لمبارك بومعرافي (ضابط في مجموعة التدخل الخاص GIS)',
        perpetratorEn: 'Lembarek Boumaarafi (Special Intervention Group GIS officer)',
        detailsAr:
          'اغتيل الرئيس الجزائري على الهواء مباشرة برصاص من الخلف أثناء إلقائه خطاباً في دار الثقافة بمدينة عنابة، بعد أشهر من استدعائه من منفاه في المغرب لرئاسة المجلس الأعلى للدولة إثر إلغاء الانتخابات البرلمانية 1991.',
        detailsEn:
          'Assassinated live on television while delivering a speech in Annaba shortly after returning from exile.',
        impactAr:
          'دخول الجزائر في أتون "العشرية السوداء" وتصاعد الاقتتال الأهلي بين الجيش والجماعات الإسلامية المسلحة.',
        impactEn:
          'Plunged Algeria into the devastating "Black Decade" civil war against armed Islamist groups.',
      },
      {
        year: '1970 (18 أكتوبر)',
        targetAr: 'كريم بلقاسم (قائد المنطقة الثالثة وموقع اتفاقيات إيفيان)',
        targetEn: 'Krim Belkacem',
        perpetratorAr: 'اغتيل خنقاً في غرفة فندق بفرانكفورت بألمانيا في عملية منسوبة للمخابرات الجزائرية آنذاك',
        perpetratorEn: 'Assassinated in Frankfurt, Germany',
        detailsAr:
          'أحد أبرز مهندسي الثورة التحريرية وموقع استقلال الجزائر، تحول للمعارضة في عهد هواري بومدين وصدر بحقه حكم بالإعدام غيابياً.',
        detailsEn:
          'Historic liberation hero and signatory of Evian Accords assassinated in exile in Germany.',
        impactAr:
          'ترسيخ قبضة النظام الأحادي وحزب جبهة التحرير الوطني حتى دستور 1989.',
        impactEn:
          'Consolidated single-party rule under Houari Boumédiène until the late 1980s.',
      },
    ],
    terrorEvents: [
      {
        year: '1992 – 2002',
        titleAr: 'مأساة العشرية السوداء ومجازر بن طلحة وبن رايس',
        titleEn: 'The Black Decade (Civil Conflict & Massacres)',
        groupAr: 'الجماعة الإسلامية المسلحة (GIA) والجيش الإسلامي للإنقاذ (AIS)',
        groupEn: 'Armed Islamic Group (GIA)',
        casualties: 'حصيلة مأساوية تراوحت بين 100,000 إلى 200,000 قتيل وخسائر اقتصادية بعشرات المليارات',
        detailsAr:
          'موجة عنف وتفجيرات واغتيال للصحفيين والمثقفين ومجازر جماعية لقرى بأكملها في سهل متيجة وعين الدفلى وغليزان بهدف إسقاط الدولة.',
        detailsEn:
          'Decade of brutal civil strife with village massacres and insurgent warfare claiming over 150,000 lives.',
        counterMeasureAr:
          'إقرار "قانون الوئام المدني" 1999 ثم "ميثاق السلم والمصالحة الوطنية" 2005 بقيادة الرئيس عبد العزيز بوتفليقة، وتفكيك الخلايا الإرهابية عسكرياً وتنمية المناطق الريفية.',
        counterMeasureEn:
          'Civil Concord Law (1999) and Charter for Peace and National Reconciliation (2005) stabilizing the nation.',
      },
      {
        year: '2013 (16 – 19 يناير)',
        titleAr: 'اعتداء تقنتورين الإرهابي في إن أميناس (حقل الغاز)',
        titleEn: 'In Aménas Gas Plant Hostage Crisis (Tiguentourine)',
        groupAr: 'كتيبة "الموقعون بالدماء" بقيادة مختار بلمختار',
        groupEn: 'Signatories in Blood brigade (Mokhtar Belmokhtar)',
        casualties: 'مقتل 39 رهينة أجنبياً وجندي جزائري و29 مسلحاً',
        detailsAr:
          'اقتحام مجمع استخراج الغاز الطبيعي المشترك في عمق الصحراء واحتجاز مئات العمال الأجانب والجزائريين كورقة ضغط ضد التدخل الفرنسي في مالي.',
        detailsEn:
          'Mass hostage siege at a major desert natural gas extraction facility operated with BP and Equinor.',
        counterMeasureAr:
          'اقتحام عسكري صاعق للجيش الجزائري دون الخضوع للابتزاز، وتحصين المنشآت الطاقوية الصح thematically وتأمين الحدود الجنوبية.',
        counterMeasureEn:
          'Decisive Algerian special forces assault refusing ransom negotiations and hardening energy facilities.',
      },
    ],
    foreignEscalations: [
      {
        year: '1954 – 1962',
        opponentCountryAr: 'فرنسا الاستعمارية',
        opponentCountryEn: 'Colonial France',
        titleAr: 'ثورة أول نوفمبر التحريرية (حرب المليون ونصف مليون شهيد)',
        titleEn: 'Algerian War of Independence',
        causeAr: 'إنهاء الاستعمار الفرنسي الاستيطاني المستمر منذ 1830 واستعادة السيادة الوطنية الكاملة.',
        causeEn: 'Ending 132 years of French colonial occupation and recovering full sovereignty.',
        nature: 'military_conflict',
        detailsAr:
          'أعظم حرب تحرير شعبية في القرن العشرين، قادها جيش التحرير الوطني، وشهدت معركة الجزائر العاصمة وأسقطت 6 رؤساء وزراء فرنسيين وأنهت الجمهورية الفرنسية الرابعة.',
        detailsEn:
          'Epic war of liberation ending the French Fourth Republic and yielding independence in the 1962 Evian Accords.',
        outcomeAr:
          'استقلال الجزائر في 5 يوليو 1962 وتأسيس الجمهورية، وترسيخ الجزائر كـ "قبلة الثوار" في حركة عدم الانحياز والعالم الثالث.',
        outcomeEn:
          'Sovereign independence in 1962 and cementing Algeria as a leader of the Non-Aligned Movement.',
      },
      {
        year: '1963 (أكتوبر)',
        opponentCountryAr: 'المملكة المغربية',
        opponentCountryEn: 'Kingdom of Morocco',
        titleAr: 'حرب الرمال الحدودية',
        titleEn: 'Sand War (Guerre des Sables)',
        causeAr: 'النزاع على ترسيم الحدود في تندوف وحاسي بيضاء وفكيك عقب استقلال الجزائر.',
        causeEn: 'Border disputes over Tindouf and Hassi Beida following Algerian independence.',
        nature: 'military_conflict',
        detailsAr:
          'اشتباكات عسكرية عنيفة في الصحراء استمرت عدة أسابيع وتدخلت جامعة الدول العربية ومنظمة الوحدة الأفريقية لوقف إطلاق النار.',
        detailsEn:
          'Brief military border clash in the Sahara mediated by the OAU and Arab League.',
        outcomeAr:
          'تثبيت خط الحدود وترسيمه رسمياً في معاهدة إفران 1972، مع استمرار الحساسيات والتنافس الجيوسياسي الإقليمي.',
        outcomeEn:
          'Ceasefire and eventual boundary demarcation in 1972, leaving enduring geopolitical rivalry.',
      },
      {
        year: '2021 – 2026',
        opponentCountryAr: 'المغرب وإسبانيا (توتر دبلوماسي وطاقوي)',
        opponentCountryEn: 'Morocco & Spain (Diplomatic & Energy Standoff)',
        titleAr: 'قطع العلاقات الدبلوماسية مع المغرب وتجميد معاهدة الصداقة مع إسبانيا',
        titleEn: 'Severing Diplomatic Ties with Morocco & Spain Gas Crisis',
        causeAr: 'نزاع الصحراء الغربية، التطبيع المغربي الإسرائيلي، وتغيير مدريد لموقفها من الحكم الذاتي.',
        causeEn: 'Western Sahara standoff, Morocco-Israel accords, and Spain policy shift.',
        nature: 'diplomatic_crisis',
        detailsAr:
          'قطع العلاقات الدبلوماسية وغلق المجال الجوي، إيقاف ضخ الغاز عبر أنبوب المغرب العربي-أوروبا (GME) وتحويل الإمدادات بالكامل عبر أنبوب ميدغاز (Medgaz) البحري.',
        detailsEn:
          'Severed diplomatic ties, closed airspace, and halted gas transit through Maghreb-Europe pipeline.',
        outcomeAr:
          'ترسيخ الجزائر لمكانتها كمورد غاز لا غنى عنه لإيطاليا وأوروبا، وتكثيف التحالفات العسكرية مع موسكو وبكين.',
        outcomeEn:
          'Strengthened gas leadership for southern Europe (Italy) and consolidated military posture.',
      },
    ],
    currencyEvolution: {
      code: 'DZD',
      symbol: 'د.ج',
      nameAr: 'دينار جزائري',
      nameEn: 'Algerian Dinar',
      currentExchangeRateUsd: 'السعر الرسمي لدى بنك الجزائر: 1 USD ≈ 134.50 د.ج / السوق الموازية (سكوار بورسعيد): ~240 د.ج',
      rateValueNumber: 134.5,
      pegStatusAr: 'تعويم مدار مرتبط بسلة عملات خاضع لرقابة صارمة على الصرف وسوق موازية واسعة',
      pegStatusEn: 'Managed floating regime with extensive parallel market gap (Square Port-Said)',
      centralBankAr: 'بنك الجزائر (Bank of Algeria - تأسس 1962)',
      foreignReservesUsd: '~$70 مليار دولار (مدعومة بارتفاع إيرادات تصدير الغاز والنفط)',
      currencyHistoryTimeline: [
        {
          year: 1964,
          eventAr: 'إصدار الدينار الجزائري واستبدال الفرنك الفرنسي',
          eventEn: 'Creation of the Algerian Dinar (1964)',
          rateAtTime: '1 دينار = 1 فرنك فرنسي جديد',
          detailsAr: 'تأسيس السيادة النقدية الوطنية بعد الاستقلال وإلغاء التبعية لمنطقة الفرنك.',
          detailsEn: 'National monetary sovereignty replacing the colonial French Franc at par.',
        },
        {
          year: 1994,
          eventAr: 'اتفاق التعديل الهيكلي مع صندوق النقد الدولي وتخفيض الدينار 40%',
          eventEn: '1994 IMF Structural Adjustment Devaluation',
          rateAtTime: 'انخفاض الدينار من 24 إلى 40 د.ج للدولار',
          detailsAr: 'إصلاحات قاسية فرضها انهيار أسعار النفط وعجز الموازنة في ذروة الأزمة الأمنية.',
          detailsEn: 'Severe 40% devaluation under IMF program amid hydrocarbon collapse.',
        },
        {
          year: 2023,
          eventAr: 'قانون النقد والمصرفية الجديد وتطوير "الدينار الرقمي الجزائري"',
          eventEn: 'New Monetary and Banking Law & Digital Dinar',
          rateAtTime: 'استقرار نسبي لسعر الصرف الرسمي عند ~134 د.ج',
          detailsAr: 'تحديث الحوكمة المصرفية وتجريم التعامل غير النظامي بالعملات وتشجيع الصيرفة الإسلامية.',
          detailsEn: 'Modernizing central bank governance and formalizing Islamic banking frameworks.',
        },
      ],
    },
  },

  // 9. المملكة المغربية
  ma: {
    countryId: 'ma',
    nameAr: 'المملكة المغربية',
    nameEn: 'Morocco',
    assassinations: [
      {
        year: '1971 (10 يوليو)',
        targetAr: 'محاولة انقلاب الصخيرات العسكري الفاشلة ضد الملك الحسن الثاني',
        targetEn: 'Skhirat Palace Coup Attempt against King Hassan II',
        perpetratorAr: 'العقيد أمحمد أعبابو والجنرال محمد المدبوح وطلبة مدرسة أهرمومو العسكرية',
        perpetratorEn: 'Colonel M\'hamed Aababbou & General Mohamed Medbouh',
        detailsAr:
          'اقتحام مسلح للقصر الملكي بالصخيرات أثناء الاحتفال بعيد ميلاد الملك الحسن الثاني الثاني والأربعين، أسفر عن مقتل نحو 100 شخصية بارزة قبل أن ينجو الملك ويستعيد السيطرة.',
        detailsEn:
          'Armed assault on the royal palace in Skhirat during King Hassan II birthday celebration; the King survived and quelled the rebellion.',
        impactAr:
          'محاكمة وإعدام قادة الانقلاب العسكري وإعادة هيكلة الجيش الملكي وتصفية القيادات المشتبه بها.',
        impactEn:
          'Execution of coup leaders and fundamental restructuring of Royal Armed Forces.',
      },
      {
        year: '1972 (16 أغسطس)',
        targetAr: 'محاولة انقلاب الطيارين (انقلاب أوفقير / الهجوم على طائرة البوينغ الملكية)',
        targetEn: '1972 Moroccan Coup Attempt (Oufkir / Royal Boeing Attack)',
        perpetratorAr: 'الجنرال محمد أوفقير (وزير الدفاع) والرائد محمد قويريرة والمقدم أمقران',
        perpetratorEn: 'General Mohamed Oufkir & dissident air force pilots',
        detailsAr:
          'هاجمت مقاتلات إف-5 تابعة لسلاح الجو الملكي طائرة البوينغ 727 التي تقل الملك الحسن الثاني في الجو عائدة من فرنسا وأمطرتها بالرصاص، ونجت الطائرة وهبطت اضطرارياً في مطار الرباط سلا.',
        detailsEn:
          'Rebel F-5 fighter jets strafed King Hassan II Boeing 727 in mid-air returning from France; the damaged plane landed safely.',
        impactAr:
          'إعلان انتحار الجنرال أوفقير وإحكام الملك السيطرة المطلقة على قيادة القوات المسلحة وإلغاء منصب وزير الدفاع.',
        impactEn:
          'Abolition of the Defense Minister post with King assuming direct supreme military command.',
      },
    ],
    terrorEvents: [
      {
        year: '2003 (16 مايو)',
        titleAr: 'تفجيرات الدار البيضاء المنسقة',
        titleEn: 'Casablanca Coordinated Suicide Bombings',
        groupAr: 'تنظيم "السلفية الجهادية" وخلايا جماعة "صراط المستقيم"',
        groupEn: 'Salafia Jihadia terrorist network',
        casualties: 'مقتل 45 شخصاً (بينهم 12 انتحارياً) وإصابة أكثر من 100',
        detailsAr:
          'خمسة تفجيرات انتحارية متزامنة استهدفت فندق فرح ونادياً يهودياً ومطعماً إسبانياً والقنصلية البلجيكية بالدار البيضاء.',
        detailsEn:
          'Five coordinated suicide bombings targeting hotels, restaurants, and Jewish community centers in Casablanca.',
        counterMeasureAr:
          'إقرار قانون مكافحة الإرهاب 2003، إطلاق استراتيجية إعادة هيكلة الحقل الديني لمواجهة التطرف، وتأسيس المكتب المركزي للأبحاث القضائية (BCIJ - البسيج).',
        counterMeasureEn:
          'Passing 2003 Anti-Terror Law, state religious field reform, and creation of elite BCIJ security agency.',
      },
      {
        year: '2011 (28 أبريل)',
        titleAr: 'تفجير مقهى أركانة في ساحة جامع الفنا بمراكش',
        titleEn: 'Marrakech Argana Café Bombing',
        groupAr: 'عناصر متطرفة موالية لتنظيم القاعدة ببلاد المغرب الإسلامي (عادل العثماني)',
        groupEn: 'Al-Qaeda in the Islamic Maghreb (AQIM) sympathizers',
        casualties: 'مقتل 17 شخصاً (معظمهم سياح فرنسيون وسويسريون) وإصابة 25',
        detailsAr:
          'تفجير حقيبتين ملغومتين بمادة TATP بالتحكم عن بعد داخل مقهى أركانة التاريخي بقلب ساحة جامع الفنا التراثية بمراكش.',
        detailsEn:
          'Remote-detonated TATP explosive bags devastated Argana café in the iconic Jemaa el-Fnaa square.',
        counterMeasureAr:
          'القبض على الخلية خلال أيام، واستحداث منظومة "حذر" (Hadar) للانتشار المشترك للجيش والشرطة لحماية المواقع الحيوية.',
        counterMeasureEn:
          'Swift arrest of perpetrators and launch of the joint military-police "Hadar" security umbrella.',
      },
    ],
    foreignEscalations: [
      {
        year: '1975 (نوفمبر)',
        opponentCountryAr: 'إسبانيا وجبهة البوليساريو',
        opponentCountryEn: 'Spain & Polisario Front',
        titleAr: 'المسيرة الخضراء واسترجاع الصحراء المغربية',
        titleEn: 'The Green March (La Marcha Verde)',
        causeAr: 'إنهاء الاستعمار الإسباني للصحراء واسترجاع الأقاليم الجنوبية للمملكة.',
        causeEn: 'Ending Spanish colonization of Western Sahara and restoring territorial integrity.',
        nature: 'military_conflict',
        detailsAr:
          'مسيرة سلمية تاريخية شارك فيها 350,000 مواطن مغربي رافعين المصاحف والأعلام الوطنية عبروا الحدود لإنهاء الوجود الإسباني، تلاها اتفاق مدريد الثلاثي.',
        detailsEn:
          '350,000 unarmed Moroccan civilians marched across the border, leading to Spanish withdrawal under the Madrid Accords.',
        outcomeAr:
          'انسحاب إسبانيا وبسط السيادة المغربية واندلاع حرب الصحراء ضد جبهة البوليساريو حتى وقف إطلاق النار 1991 وبناء الجدار الأمني الدفاعي (الجدار الرملي).',
        outcomeEn:
          'Spanish departure, construction of the defensive sand berm, and UN ceasefire in 1991.',
      },
      {
        year: '2002 (يوليو)',
        opponentCountryAr: 'إسبانيا',
        opponentCountryEn: 'Spain',
        titleAr: 'أزمة جزيرة تورة / ليلى (Perejil Island Crisis)',
        titleEn: 'Perejil Island Military Standoff',
        causeAr: 'نزول عناصر من الدرك الملكي المغربي على جزيرة ليلى الصخرية غير المأهولة قبالة سواحل سبتة.',
        causeEn: 'Moroccan gendarmes stationed a monitoring post on the uninhabited islet of Perejil.',
        nature: 'military_conflict',
        detailsAr:
          'إنزال عسكري لقوات الكوماندوز الإسبانية مدعومة بالبوارج والمروحيات لاحتلال الجزيرة وأسر الجنود المغاربة.',
        detailsEn:
          'Spanish special forces operation backed by warships recapturing the islet without casualties.',
        outcomeAr:
          'وساطة أمريكية عاجلة بقيادة كولن باول أفضت إلى انسحاب القوات الإسبانية وإعادة الوضع لما كان عليه (منطقة منزوعة السلاح).',
        outcomeEn:
          'US diplomatic mediation restoring pre-crisis demilitarized status quo ante.',
      },
      {
        year: '2020 – 2026',
        opponentCountryAr: 'جبهة البوليساريو والجزائر',
        opponentCountryEn: 'Polisario Front & Algeria',
        titleAr: 'تأمين معبر الكركرات والاعتراف الأمريكي بالسيادة المغربية على الصحراء',
        titleEn: 'Guerguerat Operation & US Recognition of Moroccan Sahara',
        causeAr: 'عرقلة مليشيات البوليساريو لحركة المرور التجارية بين المغرب وموريتانيا في المنطقة العازلة بالكركرات.',
        causeEn: 'Polisario blockade of international commercial traffic to Mauritania at Guerguerat buffer zone.',
        nature: 'military_conflict',
        detailsAr:
          'عملية عسكرية غير هجومية للقوات المسلحة الملكية أمّنت المعبر وأقامت جداراً أمنياً، تلاها إعلان رئاسي أمريكي تاريخي في ديسمبر 2020 بالاعتراف بمغربية الصحراء وتوقيع الاتفاق الثلاثي (المغرب-أمريكا-إسرائيل).',
        detailsEn:
          'Royal Armed Forces secured the Guerguerat corridor, followed by historic US presidential recognition of Moroccan sovereignty.',
        outcomeAr:
          'اعتراف واشنطن ودول أوروبية كبرى (فرنسا، إسبانيا، ألمانيا) بمبادرة الحكم الذاتي المغربية كحل وحيد واقعي للنزاع.',
        outcomeEn:
          'Broad international backing for Moroccan Autonomy Initiative, consolidating diplomatic gains.',
      },
    ],
    currencyEvolution: {
      code: 'MAD',
      symbol: 'د.م',
      nameAr: 'درهم مغربي',
      nameEn: 'Moroccan Dirham',
      currentExchangeRateUsd: '1 USD ≈ 9.85 MAD (واليورو ≈ 10.75 MAD)',
      rateValueNumber: 9.85,
      pegStatusAr: 'سعر صرف مربوط بسلة عملات (60% يورو و 40% دولار) مع نطاق تذبذب مرن (±5%)',
      pegStatusEn: 'Currency basket peg (60% Euro, 40% USD) with a ±5% flexibility fluctuation band',
      centralBankAr: 'بنك المغرب (Bank Al-Maghrib - برئاسة عبد اللطيف الجواهري منذ 2003)',
      foreignReservesUsd: '~$36 مليار دولار (تغطي أكثر من 5 أشهر ونصف من الواردات)',
      currencyHistoryTimeline: [
        {
          year: 1959,
          eventAr: 'إصدار الدرهم المغربي كعملة وطنية واستبدال الفرنك المغربي',
          eventEn: 'Reintroduction of the Moroccan Dirham',
          rateAtTime: '1 درهم = 100 فرنك مغربي',
          detailsAr: 'استعادة السيادة النقدية في عهد الملك محمد الخامس وتأسيس بنك المغرب.',
          detailsEn: 'Creation of Bank Al-Maghrib and national currency after French protectorate.',
        },
        {
          year: 1973,
          eventAr: 'إلغاء الربط بالفرنك الفرنسي وربط الدرهم بسلة عملات دولية',
          eventEn: 'De-pegging from French Franc to Currency Basket',
          rateAtTime: 'سلة متعددة الشركاء التجاريين',
          detailsAr: 'تخفيف مخاطر تقلبات العملات الأوروبية وربط الدرهم بأوزان تجارة المغرب الخارجية.',
          detailsEn: 'Transitioning to trade-weighted basket to cushion against European exchange volatility.',
        },
        {
          year: 2018,
          eventAr: 'بدء مسار تحرير وسعر الصرف المرن للدرهم المغربي (التعويم التدريجي)',
          eventEn: 'Launch of Flexible Exchange Rate Transition (2018)',
          rateAtTime: 'توسيع نطاق التذبذب من ±0.3% إلى ±2.5%',
          detailsAr: 'إصلاح هيكلي لدعم تنافسية الصادرات وتخفيف الضغط على احتياطيات النقد الأجنبي.',
          detailsEn: 'Widening fluctuation band from ±0.3% to ±2.5% to boost export competitiveness.',
        },
        {
          year: 2020,
          eventAr: 'توسيع نطاق تذبذب الدرهم إلى ±5% ونجاح اختبار الصدمات الاقتصادية',
          eventEn: 'Expansion of Fluctuation Band to ±5%',
          rateAtTime: 'الدرهم يتداول داخل النطاق دون صدمات أو استنزاف للاحتياطي',
          detailsAr: 'صمود الدرهم رغم أزمة كوفيد والجفاف بفضل تحويلات مغاربة العالم وصادرات الفوسفات وصناعة السيارات.',
          detailsEn: 'Dirham resilience bolstered by automotive exports, phosphate revenues, and diaspora remittances.',
        },
      ],
    },
  },

  // 10. الجمهورية التركية
  tr: {
    countryId: 'tr',
    nameAr: 'الجمهورية التركية',
    nameEn: 'Turkey',
    assassinations: [
      {
        year: '1980 (19 يوليو)',
        targetAr: 'نهاد إريم (رئيس وزراء تركيا الأسبق)',
        targetEn: 'Nihat Erim (Former Prime Minister of Turkey)',
        perpetratorAr: 'منظمة "اليسار الثوري" المسلحة (Dev-Sol)',
        perpetratorEn: 'Revolutionary Left (Dev-Sol) Marxist militants',
        detailsAr:
          'اغتيل في إسطنبول وسط فوضى الاقتتال السياسي بين اليمين واليسار التي سبقت انقلاب الجنرال كنعان إيفرين العسكري بشهرين.',
        detailsEn:
          'Assassinated in Istanbul amid violent left-right street clashes paving the way for the 1980 military coup.',
        impactAr:
          'تسريع وقوع انقلاب 12 سبتمبر العسكري 1980 وفرض الأحكام العرفية وإلغاء الأحزاب.',
        impactEn:
          'Precipitated the 1980 military coup by General Kenan Evren dissolving parliament.',
      },
      {
        year: '2016 (19 ديسمبر)',
        targetAr: 'أندريه كارلوف (سفير روسيا الاتحادية في تركيا)',
        targetEn: 'Andrei Karlov (Russian Ambassador to Turkey)',
        perpetratorAr: 'مولود ميرت ألتنطاش (ضابط شرطة تركي في مكافحة الشغب)',
        perpetratorEn: 'Mevlüt Mert Altıntaş (Off-duty Turkish police officer)',
        detailsAr:
          'أطلق النار على السفير الروسي من الخلف أثناء إلقائه كلمة في معرض فني في أنقرة وهو يهتف نصرة لحلب وسوريا، في محاولة لتخريب العلاقات الروسية التركية.',
        detailsEn:
          'Assassinated at an art exhibition opening in Ankara by an off-duty officer shouting about Aleppo.',
        impactAr:
          'اتفاق بوتين وأردوغان على عدم السماح بتخريب التقارب بين البلدين، وتدشين مسار أستانا الثلاثي حول سوريا.',
        impactEn:
          'Strengthened Moscow-Ankara strategic coordination, birthing the Astana peace format for Syria.',
      },
    ],
    terrorEvents: [
      {
        year: '1984 – 2026',
        titleAr: 'النزاع المسلح مع حزب العمال الكردستاني (PKK)',
        titleEn: 'PKK Insurgency & Counter-Terror Campaign',
        groupAr: 'حزب العمال الكردستاني (PKK) بزعامة عبد الله أوجلان (حتى اعتقاله 1999)',
        groupEn: 'Kurdistan Workers\' Party (PKK)',
        casualties: 'أكثر من 40,000 قتيل على مدى أربعة عقود من المواجهات والتفجيرات',
        detailsAr:
          'حملة تمرد مسلح وتفجيرات استهدفت مراكز الجيش والشرطة والمدن التركية بهدف إنشاء دولة كردية مستقلة في جنوب شرق الأناضول.',
        detailsEn:
          'Four-decade insurgency marked by rural guerrilla warfare and urban bombing campaigns.',
        counterMeasureAr:
          'اعتقال عبد الله أوجلان في كينيا 1999، تطوير طائرات بيرقدار المسيرة التي حسمت المعارك، والعمليات العسكرية عبر الحدود في شمال العراق وسوريا (المخلب والقفل).',
        counterMeasureEn:
          'Capture of Öcalan in 1999, drone technological revolution (Bayraktar), and cross-border operations in Iraq.',
      },
      {
        year: '2015 (10 أكتوبر)',
        titleAr: 'تفجيرا محطة قطارات أنقرة (الهجوم الأكثر دموية في تاريخ تركيا)',
        titleEn: 'Ankara Train Station Twin Suicide Bombings',
        groupAr: 'تنظيم داعش (خلايا أديامان الإرهابية)',
        groupEn: 'ISIS / Daesh sleeper network',
        casualties: 'مقتل 109 مدنيين وإصابة أكثر من 500',
        detailsAr:
          'فجر انتحاريان نفسيهما وسط تجمع حاشد لنقابات العمال والمنظمات الحقوقية المطالبة بالسلام خارج محطة القطارات المركزية في أنقرة.',
        detailsEn:
          'Twin suicide bombers struck a peace rally outside Ankara central railway station, killing 109.',
        counterMeasureAr:
          'إطلاق عمليات "درع الفرات" العسكرية لطرد داعش من الحدود التركية السورية وتفكيك شبكات التجنيد في البلاد.',
        counterMeasureEn:
          'Operation Euphrates Shield clearing ISIS from the border and dismantling domestic terrorist nodes.',
      },
    ],
    foreignEscalations: [
      {
        year: '1974 (يوليو - أغسطس)',
        opponentCountryAr: 'اليونان وقبرص',
        opponentCountryEn: 'Greece & Cyprus',
        titleAr: 'عملية السلام في قبرص (حرب قبرص 1974)',
        titleEn: 'Cyprus Peace Operation (Turkish Invasion of Cyprus)',
        causeAr: 'انقلاب عسكري مدعوم من المجلس العسكري الحاكم في أثينا لضم قبرص لليونان (إينوسيس).',
        causeEn: 'Greek military junta-backed coup in Nicosia aiming for Enosis (annexation).',
        nature: 'military_conflict',
        detailsAr:
          'إنزال برمائي وجوي تركي في شمال قبرص بقيادة بولنت أجاويد لحماية القبارصة الأتراك والسيطرة على 36% من الجزيرة.',
        detailsEn:
          'Amphibious and airborne invasion securing the northern third of Cyprus for Turkish Cypriots.',
        outcomeAr:
          'تقسيم الجزيرة إلى شطرين، إعلان جمهورية شمال قبرص التركية (TRNC)، وفرض الكونغرس الأمريكي حظراً عسكرياً على تركيا استمر 4 سنوات.',
        outcomeEn:
          'Partition of the island, creation of TRNC, and a four-year US arms embargo on Turkey.',
      },
      {
        year: '2015 (24 نوفمبر)',
        opponentCountryAr: 'روسيا الاتحادية',
        opponentCountryEn: 'Russian Federation',
        titleAr: 'أزمة إسقاط المقاتلة الروسية سوخوي-24',
        titleEn: 'Downing of Russian Su-24 by Turkish F-16',
        causeAr: 'اختراق الطائرة الحربية الروسية للمجال الجوي التركي قرب الحدود السورية لمدة ثوانٍ.',
        causeEn: 'Russian warplane airspace incursion on the Syrian border.',
        nature: 'military_conflict',
        detailsAr:
          'أسقطت مقاتلة إف-16 تركية طائرة السوخوي الروسية ومقتل قائدها، ما فجر أخطر أزمة بين روسيا ودولة في الناتو منذ الحرب الباردة.',
        detailsEn:
          'Turkish F-16 shot down Russian bomber, triggering sanctions, flight bans, and intense crisis.',
        outcomeAr:
          'اعتذار رئاسي تركي عام 2016، وشراء تركيا لمنظومة الدفاع الجوي الصاروخي الروسية S-400 وتعميق العلاقات الاقتصادية والغازية (ترك ستريم).',
        outcomeEn:
          'Rapprochement in 2016 leading to Turkish purchase of Russian S-400 missiles and TurkStream pipeline.',
      },
      {
        year: '2019 – 2026',
        opponentCountryAr: 'الولايات المتحدة الأمريكية (عقوبات CAATSA)',
        opponentCountryEn: 'United States (CAATSA Sanctions & F-35 Expulsion)',
        titleAr: 'أزمة شراء منظومة S-400 الروسية وطرد تركيا من برنامج إف-35',
        titleEn: 'S-400 Air Defense Dispute & F-35 Program Expulsion',
        causeAr: 'استلام تركيا منظومة الدفاع الجوي الروسية إس-400 ورفض الشروط الأمريكية.',
        causeEn: 'Acquisition of Russian S-400 strategic air defense missiles.',
        nature: 'diplomatic_crisis',
        detailsAr:
          'طرد واشنطن لتركيا من برنامج مقاتلات الشبح إف-35 رغم تصنيعها لمئات القطع ودفعها مليارات الدولارات، وفرض عقوبات على هيئة الصناعات الدفاعية (SSB).',
        detailsEn:
          'US expulsion of Turkey from the F-35 Joint Strike Fighter consortium and imposition of CAATSA sanctions.',
        outcomeAr:
          'تسريع تركيا لصناعاتها الدفاعية المحلية وتطوير مقاتلة الجيل الخامس "قآن" (KAAN) ومسيرات "قزل إلما" وتحديث أسطول F-16 لاحقاً.',
        outcomeEn:
          'Catalyzed Turkish indigenous defense breakthrough, developing the 5th-gen KAAN stealth jet.',
      },
    ],
    currencyEvolution: {
      code: 'TRY',
      symbol: '₺',
      nameAr: 'ليرة تركية',
      nameEn: 'Turkish Lira',
      currentExchangeRateUsd: '1 USD ≈ 34.30 TRY',
      rateValueNumber: 34.3,
      pegStatusAr: 'تعويم حر كامل يمر بمرحلة تشديد نقدي كلاسيكي لمكافحة التضخم (رفع الفائدة لـ 50%)',
      pegStatusEn: 'Free floating currency undergoing orthodox monetary policy tightening (50% policy rate)',
      centralBankAr: 'بنك جمهورية تركيا المركزي (TCMB - تأسس 1930)',
      foreignReservesUsd: '~$150 مليار دولار (إجمالي الأصول بعد انتعاش مبادلات السواب)',
      currencyHistoryTimeline: [
        {
          year: 1923,
          eventAr: 'إصدار الليرة التركية في عهد مصطفى كمال أتاتورك',
          eventEn: 'Founding of the Turkish Lira',
          rateAtTime: 'ربط بالذهب ثم الجنيه الإسترليني والدولار',
          detailsAr: 'استبدال الليرة العثمانية وتأسيس النظام النقدي الجمهوري الحديث.',
          detailsEn: 'Replacing the Ottoman Lira with the Republican national currency.',
        },
        {
          year: 2005,
          eventAr: 'حذف ستة أصفار من الليرة وإصدار "الليرة التركية الجديدة" (YTL)',
          eventEn: 'Dropping Six Zeros & Launching New Lira (2005)',
          rateAtTime: '1 ليرة تركية جديدة = 1,000,000 ليرة قديمة (1 USD ≈ 1.35 TRY)',
          detailsAr: 'إصلاح نقدي تاريخي بقيادة علي باباجان أنهى عقوداً من التضخم المفرط في التسعينيات.',
          detailsEn: 'Historic macroeconomic reform dropping six zeros following IMF stabilization program.',
        },
        {
          year: 2018,
          eventAr: 'أزمة العملة التركية الأولى وقضية القس برانسون',
          eventEn: '2018 Lira Crisis & Geopolitical Shock',
          rateAtTime: 'هبوط الليرة من 4.5 إلى 7 ليرات للدولار',
          detailsAr: 'عقوبات وتغريدات ترامب أطلقت شرارة اضطراب نقدي واسع ومخاوف ديون الشركات بالعملات الأجنبية.',
          detailsEn: 'US tariff threats sparked massive currency depreciation and corporate debt stress.',
        },
        {
          year: 2021,
          eventAr: 'تطبيق "النموذج الاقتصادي التركي الجديد" وخفض الفائدة والتضخم القياسي',
          eventEn: 'Unorthodox "Low-Interest" Monetary Experiment',
          rateAtTime: 'انهيار الليرة من 8 إلى 18 ثم 28 ليرة للدولار وتضخم قارب 85%',
          detailsAr: 'تطبيق نظرية خفض الفائدة لتحفيز النمو والصادرات، وتأسيس حسابات الودائع المحمية بالليرة (KKM).',
          detailsEn: 'Unorthodox interest rate cuts driving inflation to 85% and launching FX-protected deposits.',
        },
        {
          year: 2024,
          eventAr: 'العودة للسياسة التقليدية ورفع أسعار الفائدة إلى 50% واستقرار نسبي لليرة',
          eventEn: 'Orthodox Policy Pivot (Raising Rates to 50%)',
          rateAtTime: '1 USD ≈ 34.30 TRY',
          detailsAr:
            'قيادة الفريق الاقتصادي الجديد لبرنامج استقرار نقدي جذب مليارات الدولارات من الصناديق العالمية ورفع التصنيف الائتماني لتركيا.',
          detailsEn:
            'Aggressive monetary tightening restoring institutional credibility and foreign portfolio inflows.',
        },
      ],
    },
  },

  // 11. جمهورية العراق
  iq: {
    countryId: 'iq',
    nameAr: 'جمهورية العراق',
    nameEn: 'Iraq',
    assassinations: [
      {
        year: '1958 (14 يوليو)',
        targetAr: 'الملك فيصل الثاني وولي العهد عبد الإله ورئيس الوزراء نوري السعيد',
        targetEn: 'King Faisal II, Crown Prince Abd al-Ilah & Nuri al-Said',
        perpetratorAr: 'الضباط الأحرار بقيادة عبد الكريم قاسم وعبد السلام عارف (انقلاب 14 تموز)',
        perpetratorEn: 'Free Officers coup led by Abd al-Karim Qasim',
        detailsAr:
          'مجزرة قصر الرحاب في بغداد التي أطاحت بالملكية الهاشمية في العراق وتصفية العائلة المالكة في الفناء وإعلان الجمهورية.',
        detailsEn:
          'Massacre at Rihab Palace overthrowing the Hashemite monarchy and executing the royal family.',
        impactAr:
          'إلغاء الملكية، انسحاب العراق من حلف بغداد، وبدء حقبة الانقلابات العسكرية الدموية في تاريخ العراق.',
        impactEn:
          'Abolished the monarchy and ushered in decades of military coups and political instability.',
      },
      {
        year: '2003 (29 أغسطس)',
        targetAr: 'آية الله محمد باقر الحكيم (رئيس المجلس الأعلى للثورة الإسلامية)',
        targetEn: 'Ayatollah Mohammad Baqir al-Hakim',
        perpetratorAr: 'تنظيم قاعدة الجهاد في بلاد الرافدين (أبو مصعب الزرقاوي) بسيارة مفخخة',
        perpetratorEn: 'Al-Qaeda in Iraq car bomb (Abu Musab al-Zarqawi)',
        detailsAr:
          'انفجار سيارة ملغومة بـ 500 كجم من المتفجرات استهدف موكبه فور خروجه من صلاة الجمعة عند الصحن الحيدري بالنجف الأشرف، وأسفر عن مقتل 85 مصلياً.',
        detailsEn:
          'Massive car bombing outside Imam Ali Shrine in Najaf after Friday prayers killing 85 people.',
        impactAr:
          'تصاعد الاستقطاب الطائفي في مرحلة ما بعد الغزو الأمريكي وتأسيس فيلق بدر والأجهزة الأمنية الجديدة.',
        impactEn:
          'Catalyzed sectarian tensions in post-invasion Iraq and galvanized Shiite political factions.',
      },
    ],
    terrorEvents: [
      {
        year: '2006 (22 فبراير)',
        titleAr: 'تفجير ضريح العسكريين في سامراء واندلاع الحرب الأهلية الطائفية',
        titleEn: 'Al-Askari Mosque Bombing in Samarra',
        groupAr: 'تنظيم القاعدة في العراق',
        groupEn: 'Al-Qaeda in Iraq',
        casualties: 'تدمير قبة الضريح الذهبية، ومقتل عشرات الآلاف في موجة الاقتتال الطائفي اللاحقة (2006-2008)',
        detailsAr:
          'تفجير إرهابي نوعي نسف القبة الذهبية لأحد أقدس مزارات الشيعة، مما فجر أسوأ موجة تطهير طائفي واقتتال أهلي وفرق موت في بغداد والمدن المختلطة.',
        detailsEn:
          'Iconic bombing destroying the golden dome of holy shrine, unleashing sectarian civil war.',
        counterMeasureAr:
          'خطة فرض القانون العسكرية الأمريكية العراقية (The Surge 2007) وتأسيس قوات "صحوة العشائر" السنية التي طردت القاعدة من الأنبار.',
        counterMeasureEn:
          'The Surge military buildup and tribal Sahwa (Awakening) councils routing Al-Qaeda from Anbar.',
      },
      {
        year: '2014 – 2017',
        titleAr: 'اجتياح تنظيم داعش لثلث مساحة العراق وسقوط الموصل ومجزرة سبايكر',
        titleEn: 'ISIS Infiltration, Fall of Mosul & Speicher Massacre',
        groupAr: 'تنظيم داعش الإرهابي (أبو بكر البغدادي)',
        groupEn: 'ISIS / Daesh caliphate forces',
        casualties: 'إعدام 1,700 طالب عسكري في مجزرة سبايكر، ونزوح ملايين المواطنين، ومقتل عشرات الآلاف',
        detailsAr:
          'اجتياح كاسح سيطر فيه داعش على الموصل وتكريت والأنبار وأعلن "الخلافة" وارتكب إبادة جماعية بحق الإيزيديين في سنجار.',
        detailsEn:
          'Blitzkrieg seizing Mosul, Tikrit, and Anbar, committing the Speicher massacre and Yazidi genocide.',
        counterMeasureAr:
          'إصدار فتوى "الجهاد الكفائي" لآية الله السيستاني وتأسيس الحشد الشعبي، وتحالف دولي بقيادة أمريكا ودعم عسكري من إيران، وتحرير كامل المدن العراقية في معركة الموصل التاريخية 2017.',
        counterMeasureEn:
          'Sistani fatwa forming PMF, US-led Global Coalition, and epic Battle of Mosul liberating Iraq in 2017.',
      },
    ],
    foreignEscalations: [
      {
        year: '1990 – 1991',
        opponentCountryAr: 'الكويت والتحالف الدولي بقيادة الولايات المتحدة',
        opponentCountryEn: 'Kuwait & 34-Nation International Coalition',
        titleAr: 'غزو الكويت وعملية عاصفة الصحراء (حرب الخليج)',
        titleEn: 'Invasion of Kuwait & Operation Desert Storm',
        causeAr: 'أزمة الديون النفطية ومطالب صدام حسين الإقليمية وغزو واحتلال دولة الكويت في 2 أغسطس 1990.',
        causeEn: 'Oil quotas, war debt disputes, and Saddam Hussein invasion of Kuwait.',
        nature: 'military_conflict',
        detailsAr:
          'إعلان ضم الكويت "المحافظة 19"، وتشكيل تحالف دولي قاد أكبر حملة قصف جوي وبري لتحرير الكويت وتدمير البنية التحتية والجيش العراقي.',
        detailsEn:
          'Annexation of Kuwait met by massive aerial and armored liberation offensive (Desert Storm).',
        outcomeAr:
          'تحرير الكويت، فرض أقسى نظام عقوبات وحصار اقتصادي للأمم المتحدة في التاريخ (النفط مقابل الغذاء)، وفرض مناطق حظر الطيران شمالاً وجنوباً.',
        outcomeEn:
          'Crushing UN economic sanctions, no-fly zones, and complete strategic isolation.',
      },
      {
        year: '2003',
        opponentCountryAr: 'الولايات المتحدة الأمريكية وبريطانيا',
        opponentCountryEn: 'United States & United Kingdom (Coalition of the Willing)',
        titleAr: 'غزو العراق 2003 وإسقاط نظام صدام حسين (حرية العراق)',
        titleEn: '2003 Invasion of Iraq / Fall of Baghdad',
        causeAr: 'مزاعم امتلاك أسلحة دمار شامل وعلاقة بالنظام بتنظيم القاعدة (ثبت بطلانها لاحقاً).',
        causeEn: 'Claims of weapons of mass destruction (WMD) and regime ties to Al-Qaeda.',
        nature: 'military_conflict',
        detailsAr:
          'عملية "الصدمة والترويع" (Shock and Awe) وسقوط بغداد في 9 أبريل 2003 وإسقاط تمثال ساحة الفردوس، وحل الجيش العراقي واجتثاث البعث بقرارات بول بريمر.',
        detailsEn:
          'Shock and Awe campaign capturing Baghdad and dissolving the Iraqi Army under Paul Bremer.',
        outcomeAr:
          'انهيار الدولة المركزية، صعود النظام السياسي التوافقي الطائفي (المحاصصة)، ونمو النفوذ الإيراني الواسع في العراق.',
        outcomeEn:
          'Complete collapse of state institutions, sectarian power-sharing, and ascendancy of Iranian influence.',
      },
    ],
    currencyEvolution: {
      code: 'IQD',
      symbol: 'ع.د',
      nameAr: 'دينار عراقي',
      nameEn: 'Iraqi Dinar',
      currentExchangeRateUsd: 'السعر الرسمي لدى البنك المركزي: 1 USD = 1,310 IQD / السوق الموازية: ~1,500 IQD',
      rateValueNumber: 1310,
      pegStatusAr: 'سعر صرف مثبت رسمياً عبر نافذة بيع العملة للبنك المركزي مع فجوة في السوق الموازية',
      pegStatusEn: 'Official central bank auction rate with a persistent parallel market spread',
      centralBankAr: 'البنك المركزي العراقي (CBI - تأسس 1947)',
      foreignReservesUsd: '~$105 مليار دولار (مدعومة بارتفاع صادرات النفط لـ 3.4 مليون برميل يومياً)',
      currencyHistoryTimeline: [
        {
          year: 1932,
          eventAr: 'إصدار الدينار العراقي كعملة رسمية واستبدال الروبية الهندية',
          eventEn: 'Creation of the Iraqi Dinar (1932)',
          rateAtTime: '1 دينار = 1 جنيه إسترليني',
          detailsAr: 'تأسيس مجلس العملة العراقي في لندن وربط الدينار بالذهب والإسترليني.',
          detailsEn: 'Replacing the Indian Rupee with the Dinar at par with the British Pound.',
        },
        {
          year: 1959,
          eventAr: 'فك الارتباط بالإسترليني وربط الدينار بالدولار الأمريكي (عصر القوة)',
          eventEn: 'Pegging to the US Dollar at $2.80',
          rateAtTime: '1 دينار عراقي = 2.80 دولار أمريكي (ثم 3.22 دولار في السبعينيات)',
          detailsAr: 'كان الدينار العراقي أحد أقوى وأغلى العملات في العالم قبل الحروب والمغامرات العسكرية.',
          detailsEn: 'One of the world highest valued currencies during the 1970s oil boom.',
        },
        {
          year: 1991,
          eventAr: 'حصار التسعينيات وإصدار "الدينار الصدامي" والانهيار التاريخي والتضخم',
          eventEn: '1990s UN Embargo & "Saddam Dinar" Collapse',
          rateAtTime: 'انهيار السعر من 3 دولارات إلى 3,000 دينار لكل دولار واحد',
          detailsAr: 'طباعة الدينار محلياً على ورق رديء دون أي غطاء نقدي أو احتياطي بعد الحصار الدولي.',
          detailsEn: 'Printing unbacked local notes collapsing value from $3.20 to 3,000 IQD per USD.',
        },
        {
          year: 2004,
          eventAr: 'إصدار الدينار العراقي الجديد واستبدال كافة العملات القديمة بعد الغزو',
          eventEn: 'New Post-Saddam Dinar Currency Swap (2004)',
          rateAtTime: 'استقرار السعر حول 1,470 ثم 1,182 دينار للدولار',
          detailsAr: 'طباعة عملة جديدة متطورة بمواصفات أمنية واستبدال صور صدام حسين بمواقع تراثية وطبيعية.',
          detailsEn: 'De La Rue printed new banknotes replacing Saddam imagery with cultural heritage.',
        },
        {
          year: 2023,
          eventAr: 'تعديل السعر الرسمي لـ 1,310 دينار وفرض قيود الامتثال لمنع تهريب الدولار',
          eventEn: 'Revaluation to 1,310 & Fed Compliance System',
          rateAtTime: 'السعر الرسمي 1,310 / الموازي ~1,500 دينار',
          detailsAr:
            'فرض البنك الفيدرالي الأمريكي منصة إلكترونية صارمة للحوالات لمنع تهريب الدولار لإيران وسوريا، ما خلق فجوة السوق الموازية.',
          detailsEn:
            'US Federal Reserve compliance platform curbing illicit dollar outflows, creating parallel spread.',
        },
      ],
    },
  },

  // 12. الجمهورية اللبنانية
  lb: {
    countryId: 'lb',
    nameAr: 'الجمهورية اللبنانية',
    nameEn: 'Lebanon',
    assassinations: [
      {
        year: '1982 (14 سبتمبر)',
        targetAr: 'بشير الجميل (رئيس الجمهورية اللبنانية المنتخب)',
        targetEn: 'Bachir Gemayel (President-elect of Lebanon)',
        perpetratorAr: 'حبيب الشرتوني (الحزب السوري القومي الاجتماعي) بعبوة ناسفة ضخمة',
        perpetratorEn: 'Habib Shartouni (Syrian Social Nationalist Party) bomb',
        detailsAr:
          'اغتيل الرئيس المنتخب قبل تسلمه مقاليد الحكم بأيام في تفجير مقر حزب الكتائب في الأشرفية ببيروت بـ 200 كجم من المتفجرات.',
        detailsEn:
          'Assassinated before inauguration in a massive explosion at the Phalangist headquarters in Beirut.',
        impactAr:
          'اندلاع مجزرة صبرا وشاتيلا المروعة في مخيمات اللاجئين الفلسطينيين، وانتخاب شقيقه أمين الجميل رئيساً.',
        impactEn:
          'Triggered Sabra and Shatila massacre and election of his brother Amine Gemayel.',
      },
      {
        year: '2005 (14 فبراير)',
        targetAr: 'رفيق الحريري (رئيس وزراء لبنان الأسبق ومهندس إعادة إعمار بيروت)',
        targetEn: 'Rafik Hariri (Former Prime Minister & Reconstruction Architect)',
        perpetratorAr: 'شاحنة ميتسوبيشي ملغومة بـ 1,800 كجم من مادة RDX شديدة الانفجار أمام فندق السان جورج ببيروت (أدانت المحكمة الدولية عناصر من حزب الله)',
        perpetratorEn: '1,800 kg RDX suicide truck bomb; Special Tribunal for Lebanon convicted Hezbollah operatives',
        detailsAr:
          'الزلزال السياسي الأكبر في تاريخ لبنان الحديث، موكب الحريري تم نسفه بالكامل وأسفر الانفجار عن مقتل 22 شخصاً بينهم الوزير باسل فليحان.',
        detailsEn:
          'Massive bomb assassination devastating Beirut seafront, killing Hariri and 21 others, altering Lebanese history.',
        impactAr:
          'اندلاع "ثورة الأرز" وخروج مليون متظاهر في ساحة الشهداء، وانسحاب الجيش السوري الكامل من لبنان في أبريل 2005 بعد 29 عاماً من الوجود العسكري.',
        impactEn:
          'Sparked the Cedar Revolution, forcing complete Syrian military withdrawal after a 29-year presence.',
      },
      {
        year: '2024 (27 سبتمبر)',
        targetAr: 'السيد حسن نصر الله (الأمين العام لحزب الله اللبناني)',
        targetEn: 'Sayyed Hassan Nasrallah (Hezbollah Secretary-General)',
        perpetratorAr: 'غارة جوية إسرائيلية ضخمة بـ 80 قنبلة خارقة للتحصينات على المقر المركزي تحت الأرض في حارة حريك بالضاحية الجنوبية لبيروت',
        perpetratorEn: 'Israeli strike using 80 bunker-buster bombs on underground headquarters in Dahiyeh, Beirut',
        detailsAr:
          'تصفية الزعيم التاريخي لحزب الله الذي قاد الحزب لأكثر من 32 عاماً، في ضربة عسكرية واستخبارية غير مسبوقة قتلت معه قائد الجبهة الجنوبية علي كركي والجنرال الإيراني عباس نيلفروشان.',
        detailsEn:
          'Cataclysmic bunker-buster airstrike eliminating Hezbollah 32-year leader alongside top military commanders.',
        impactAr:
          'زلزال عسكري وسياسي في موازين القوى اللبنانية والإقليمية، وتكثيف الهجوم الإسرائيلي البري على جنوب لبنان.',
        impactEn:
          'Historic power vacuum in Lebanon, devastating Hezbollah command structure, and reshaping regional deterrence.',
      },
    ],
    terrorEvents: [
      {
        year: '1983 (23 أكتوبر)',
        titleAr: 'تفجير مقري المارينز والمظليين الفرنسيين في بيروت',
        titleEn: '1983 Beirut Barracks Bombings',
        groupAr: 'تنظيم "الجهاد الإسلامي" (النواة التأسيسية لحزب الله)',
        groupEn: 'Islamic Jihad Organization',
        casualties: 'مقتل 241 عسكرياً أمريكياً و58 مظلياً فرنسياً و6 مدنيين',
        detailsAr:
          'شاحنتان مفخختان قادهما انتحاريان اقتحمتا مقري القوات متعددة الجنسيات في بيروت وفجرتا المباني بالكامل، وهو أكبر خسارة للجيش الأمريكي في يوم واحد منذ الحرب العالمية الثانية.',
        detailsEn:
          'Twin suicide truck bombs destroyed barracks, killing 241 US Marines and 58 French troops in single deadliest day since WWII.',
        counterMeasureAr:
          'انسحاب القوات الأمريكية والفرنسية المتعددة الجنسيات بالكامل من لبنان عام 1984.',
        counterMeasureEn:
          'Total withdrawal of US and French multinational peacekeepers from Lebanon in 1984.',
      },
      {
        year: '2020 (4 أغسطس)',
        titleAr: 'كارثة انفجار مرفأ بيروت (أحد أضخم الانفجارات غير النووية في التاريخ)',
        titleEn: 'Beirut Port Catastrophic Ammonium Nitrate Explosion',
        groupAr: 'إهمال وتخزين غير قانوني لـ 2,750 طناً من مادة نترات الأمونيوم شديدة الانفجار في العنبر رقم 12',
        groupEn: 'Illegal storage of 2,750 tons of ammonium nitrate in Hangar 12',
        casualties: 'مقتل أكثر من 220 شخصاً وإصابة أكثر من 7,000 وتدمير نصف العاصمة بيروت وتشريد 300,000 مواطن',
        detailsAr:
          'حريق تلاه انفجار هائل يعادل قوة زلزال 3.3 ريختر، دمر المرفأ وصوامع القمح وأحياء الجميزة ومار مخايل والأشرفية في كارثة وطنية وإنسانية غير مسبوقة.',
        detailsEn:
          'Massive blast equivalent to a 3.3 earthquake leveling Beirut port, destroying grain silos, and devastating neighborhoods.',
        counterMeasureAr:
          'استقالة حكومة حسان دياب، تعطل التحقيق القضائي بسبب التدخلات السياسية، وتعميق الانهيار الاقتصادي والمالي للدولة.',
        counterMeasureEn:
          'Cabinet resignation and complete paralysis of judicial probes amid acute financial meltdown.',
      },
    ],
    foreignEscalations: [
      {
        year: '1975 – 1990',
        opponentCountryAr: 'الحرب الأهلية اللبنانية والتدخلات الإقليمية (سوريا وإسرائيل ومنظمة التحرير)',
        opponentCountryEn: 'Lebanese Civil War & Regional Interventions',
        titleAr: 'الحرب الأهلية اللبنانية (15 عاماً من الدمار والتقسيم)',
        titleEn: '15-Year Lebanese Civil War',
        causeAr: 'التناحر الطائفي، الوجود المسلح الفلسطيني (اتفاق القاهرة 1969)، والتدخلات الخارجية.',
        causeEn: 'Sectarian divides, armed Palestinian presence, and competing foreign proxy interventions.',
        nature: 'military_conflict',
        detailsAr:
          'حروب ميليشيات طائفية، دخول قوات الردع السورية 1976، حرب الجبل، حرب المخيمات، وحرب الإلغاء والتحرير لميشال عون.',
        detailsEn:
          'Devastating sectarian militia warfare, Syrian military intervention, and multiple Israeli invasions.',
        outcomeAr:
          'توقيع "وثيقة الوفاق الوطني" (اتفاق الطائف 1989) في السعودية، وتعديل الدستور اللبناني وتوزيع الصلاحيات مناصفة ونزع سلاح الميليشيات باستثناء حزب الله.',
        outcomeEn:
          'Taif Agreement in Saudi Arabia ending the war, establishing parity governance, and disarming militias.',
      },
      {
        year: '2006',
        opponentCountryAr: 'إسرائيل',
        opponentCountryEn: 'Israel',
        titleAr: 'حرب تموز 2006 والدمار الشامل للجسور والبنية التحتية',
        titleEn: 'July 2006 War & Infrastructure Devastation',
        causeAr: 'عملية أسر جنديين إسرائيليين خلف الخط الأزرق.',
        causeEn: 'Cross-border raid capturing two Israeli soldiers.',
        nature: 'military_conflict',
        detailsAr:
          'حصار جوي وبحري إسرائيلي شامل، تدمير مدرجات مطار بيروت وأكثر من 100 جسر ومحطات الكهرباء والضاحية الجنوبية.',
        detailsEn:
          '34 days of total aerial blockade destroying Beirut airport, power stations, and over 100 bridges.',
        outcomeAr:
          'قرار 1701، وإعادة إعمار لبنان بدعم مالي خليجي هائل قادته السعودية والكويت وقطر.',
        outcomeEn:
          'UN Resolution 1701 and multi-billion dollar reconstruction funded primarily by Gulf Arab states.',
      },
      {
        year: '2024 – 2026',
        opponentCountryAr: 'إسرائيل',
        opponentCountryEn: 'Israel',
        titleAr: 'الاجتياح الإسرائيلي لجنوب لبنان وتدمير القرى الحدودية',
        titleEn: '2024–2026 Israeli Invasion & Devastation of Southern Lebanon',
        causeAr: 'فتح حزب الله "جبهة إسناد لغزة" من جنوب لبنان وتبادل القصف لأكثر من عام.',
        causeEn: 'Hezbollah border support front for Gaza escalating into full-scale war.',
        nature: 'military_conflict',
        detailsAr:
          'غارات مكثفة دمرت قرى بأكملها في الجنوب والبقاع والضاحية، ونزوح أكثر من 1.2 مليون مواطن، وتدمير منهجي للأحياء السكنية والقطاع الصحي.',
        detailsEn:
          'Relentless air campaigns and ground incursion displacing 1.2 million citizens and flattening border towns.',
        outcomeAr:
          'أخطر أزمة إنسانية ووجودية في تاريخ لبنان المعاصر، ومطالبات بتطبيق القرار 1701 وحصر السلاح بيد الجيش اللبناني.',
        outcomeEn:
          'Existential humanitarian crisis and calls for deploying the Lebanese Army along the border under 1701.',
      },
    ],
    currencyEvolution: {
      code: 'LBP',
      symbol: 'ل.ل',
      nameAr: 'ليرة لبنانية',
      nameEn: 'Lebanese Pound',
      currentExchangeRateUsd: 'السعر الرسمي الموحد: 1 USD = 89,500 LBP (بعد انهيار سعر التثبيت التاريخي 1,507.5 ليرة)',
      rateValueNumber: 89500,
      pegStatusAr: 'انهيار نظام التثبيت النقدي في خريف 2019 وفقدان أكثر من 98% من قيمة العملة وتثبيت مؤقت عند 89,500 ليرة',
      pegStatusEn: 'Catastrophic post-2019 collapse from 1,507 to 89,500 LBP/USD, wiping 98% of purchasing power',
      centralBankAr: 'مصرف لبنان (BDL - تأسس 1963)',
      foreignReservesUsd: 'انخفضت من 38$ مليار قبل الأزمة إلى أقل من ~10$ مليارات دولار مع شلل مصرفي تام',
      currencyHistoryTimeline: [
        {
          year: 1939,
          eventAr: 'انفصال الليرة اللبنانية عن الليرة السورية وإصدار عملة وطنية خاصة',
          eventEn: 'Separation of Lebanese and Syrian currencies',
          rateAtTime: 'ربط بالفرنك الفرنسي ثم الجنيه الإسترليني',
          detailsAr: 'تأسيس بنك سوريا ولبنان لإصدار الأوراق النقدية اللبنانية المستقلة.',
          detailsEn: 'Formal separation of monetary issues under French mandate.',
        },
        {
          year: 1997,
          eventAr: 'تثبيت سعر صرف الليرة اللبنانية عند 1,507.5 ليرة للدولار (هندسة رياض سلامة)',
          eventEn: 'Historic 1,507.5 LBP Peg Establishment (1997)',
          rateAtTime: '1 USD = 1,507.50 LBP',
          detailsAr: 'سياسة تثبيت استمرت 22 عاماً دعمت الاستهلاك والواردات على حساب القطاعات الإنتاجية عبر أسعار فوائد مرتفعة.',
          detailsEn: '22-year artificial peg under Riad Salameh sustained via high-interest financial engineering.',
        },
        {
          year: 2019,
          eventAr: 'اندلاع ثورة 17 تشرين والإفلاس المالي وإغلاق البنوك وانهيار الليرة (Ponzi Scheme Collapse)',
          eventEn: 'Financial Meltdown & Banking Freeze (Oct 2019)',
          rateAtTime: 'انهيار تاريخي من 1,507 إلى 15,000 ثم 40,000 و100,000 ليرة للدولار',
          detailsAr: 'احتجاز ودائع المودعين في المصارف بالدولار، وفقدان الليرة 98% من قيمتها في أسوأ أزمة مصرفية في تاريخ الشرق الأوسط.',
          detailsEn: 'Collapse of the banking system freezing $100B in deposits; World Bank called it a top 3 worst crisis since 1850.',
        },
        {
          year: 2024,
          eventAr: 'توحيد سعر الصرف الرسمي عند 89,500 ليرة ودولرة الاقتصاد بنسبة 90%',
          eventEn: 'Official Peg Reset to 89,500 & Near-Total Dollarization',
          rateAtTime: '1 USD = 89,500 LBP',
          detailsAr:
            'تحول الاقتصاد اللبناني إلى اقتصاد يتعامل نقداً بالدولار الورقي (Cash Economy) واحتجاز مدخرات أجيال من اللبنانيين.',
          detailsEn:
            'Near-complete dollarization of daily commerce with the country transitioning to a cash-dollar economy.',
        },
      ],
    },
  },

  // 13. الجمهورية العربية السورية
  sy: {
    countryId: 'sy',
    nameAr: 'الجمهورية العربية السورية',
    nameEn: 'Syrian Arab Republic',
    assassinations: [
      {
        year: '2008 (12 فبراير)',
        targetAr: 'عماد مغنية (الحاج رضوان - القائد العسكري لحزب الله)',
        targetEn: 'Imad Mughniyeh (Hezbollah Military Chief)',
        perpetratorAr: 'عملية استخبارية مشتركة بين الموساد الإسرائيلي ووكالة الاستخبارات المركزية الأمريكية (CIA)',
        perpetratorEn: 'Joint Mossad and CIA covert operation',
        detailsAr:
          'اغتيال بعبوة ناسفة زُرعت في الإطار الاحتياطي لسيارة باجيرو في حي كفرسوسة المحصن أمنياً بدمشق، استهدفت مهندس العمليات الخارجية لحزب الله وأحد أبرز المطلوبين دولياً.',
        detailsEn:
          'Car bomb assassination in the heavily fortified Kafr Sousa district of Damascus by joint CIA-Mossad operation.',
        impactAr:
          'ضربة قاصمة للجناح العسكري لحزب الله ومحور المقاومة، واختراق استخباري كبير للأجهزة الأمنية السورية في قلب العاصمة.',
        impactEn:
          'Major intelligence breach inside Damascus and seismic blow to Hezbollah military command.',
      },
      {
        year: '2008 (1 أغسطس)',
        targetAr: 'اللواء محمد سليمان (المستشار الأمني والعسكري للرئيس السوري ومسؤول الملف النووي)',
        targetEn: 'General Muhammad Suleiman (Presidential Military Advisor)',
        perpetratorAr: 'وحدة كوماندوز بحرية إسرائيلية (شايطيت 13) قبالة شاطئ طرطوس',
        perpetratorEn: 'Israeli Shayetet 13 naval commando snipers',
        detailsAr:
          'اغتيل برصاص قناصة أثناء تواجده في شاليه خاص على شاطئ الرمال الذهبية في طرطوس. كان سليمان حلقة الوصل الاستراتيجية مع إيران وحزب الله والمشرف على مفاعل الكبر النووي السري في دير الزور الذي دمرته إسرائيل عام 2007.',
        detailsEn:
          'Sniper assassination from the sea in Tartus; Suleiman was the architect of the Al-Kibar nuclear facility.',
        impactAr:
          'قطع حلقة الوصل الأخطر في تسليح حزب الله وإدارة البرنامج النووي السوري.',
        impactEn:
          'Eliminated the key liaison officer managing Syrian-Iranian weapons transfer corridors.',
      },
      {
        year: '2012 (18 يوليو)',
        targetAr: 'تفجير مبنى الأمن القومي السوري بدمشق (تصفية "خلية إدارة الأزمة")',
        targetEn: 'Damascus National Security Bureau Bombing (Crisis Cell Elimination)',
        perpetratorAr: 'لواء الإسلام بالاشتراك مع اختراق داخلي',
        perpetratorEn: 'Liwa al-Islam with internal security infiltration',
        detailsAr:
          'تفجير عبوة ناسفة داخل قاعة اجتماعات القيادة المشتركة، أسفر عن مقتل وزير الدفاع العماد داود راجحة، ونائب وزير الدفاع وصهر الرئيس العماد آصف شوكت، ورئيس مكتب الأمن القومي هشام بختيار، والعماد حسن تركماني.',
        detailsEn:
          'Inside bombing decimating Syrian crisis cell including Defense Minister Rajiha and brother-in-law Assef Shawkat.',
        impactAr:
          'أكبر ضربة تعرضت لها بنية النظام السوري العسكرية والأمنية منذ بدء الثورة السورية عام 2011، ودفعت الجيش السوري لتكثيف الضربات الجوية والاستعانة المباشرة بإيران وروسيا.',
        impactEn:
          'Decapitation strike on Damascus military brass hastening Russian and Iranian military interventions.',
      },
    ],
    terrorEvents: [
      {
        year: '2014 – 2019',
        titleAr: 'إعلان تنظيم داعش "الخلافة" واتخاذ الرقة عاصمة له وارتكاب المجازر',
        titleEn: 'ISIS Caliphate Occupation of Raqqa & Massacres',
        groupAr: 'تنظيم الدولة الإسلامية في العراق والشام (داعش)',
        groupEn: 'Islamic State of Iraq and the Levant (ISIL/ISIS)',
        casualties: 'عشرات الآلاف من القتلى وملايين النازحين والمهجرين',
        detailsAr:
          'اجتياح مساحات شاسعة من سوريا والسيطرة على حقول النفط في دير الزور والآثار التاريخية في تدمر وارتكاب إعدامات جماعية وجرائم ضد الإنسانية.',
        detailsEn:
          'ISIS captured over a third of Syrian territory making Raqqa its de facto capital before its territorial defeat.',
        counterMeasureAr:
          'تحالف دولي بقيادة أمريكا، وتدخل عسكري روسي 2015، وعمليات متوازية للجيش السوري وقوات قسد حتى القضاء على التنظيم جغرافياً في الباغوز 2019.',
        counterMeasureEn:
          'Global coalition airstrikes, Russian aerospace campaign, and territorial liberation at Baghouz in 2019.',
      },
    ],
    foreignEscalations: [
      {
        year: '1973 (أكتوبر)',
        opponentCountryAr: 'إسرائيل',
        opponentCountryEn: 'Israel',
        titleAr: 'حرب تشرين التحريرية (حرب أكتوبر 1973)',
        titleEn: 'October 1973 War (Yom Kippur War)',
        causeAr: 'استعادة هضبة الجولان المحتلة بالتنسيق العسكري مع مصر على الجبهة الجنوبية.',
        causeEn: 'Liberating occupied Golan Heights in coordinated offensive with Egypt.',
        nature: 'military_conflict',
        detailsAr:
          'معارك دبابات ضارية في هضبة الجولان (معركة وادي الدموع)، تدمير خطوط الدفاع الإسرائيلية، ثم هجوم مضاد إسرائيلي انتهى باتفاقية فك الاشتباك عام 1974 واستعادة مدينة القنيطرة المحررة.',
        detailsEn:
          'Massive armored tank battles across the Golan Heights culminating in 1974 disengagement accords.',
        outcomeAr:
          'استعادة القنيطرة ووضع خط فك الاشتباك وقوات المراقبة الدولية (UNDOF)، وثبات خط الهدنة لعقود.',
        outcomeEn:
          'Return of Quneitra to Syrian sovereignty and deployment of UN UNDOF peacekeeper force.',
      },
      {
        year: '2011 – 2026',
        opponentCountryAr: 'تدخلات أجنبية متعددة (إسرائيل، تركيا، الولايات المتحدة، روسيا، إيران)',
        opponentCountryEn: 'Multi-front Foreign Military Interventions & Standoffs',
        titleAr: 'الحرب الدولية بالوكالة وتقسيم مناطق النفوذ في سوريا',
        titleEn: 'Syrian Multi-Actor Proxy War & Zone Partitioning',
        causeAr: 'قمع الاحتجاجات وتحول الثورة إلى نزاع مسلح وتدخل القوى الإقليمية والدولية.',
        causeEn: 'Armed uprising mutating into geopolitical multi-state theater.',
        nature: 'military_conflict',
        detailsAr:
          'عمليات عسكرية تركية في الشمال (درع الفرات، غصن الزيتون، نبع السلام)، قواعد أمريكية في التنف وشمال شرق سوريا، قواعد روسية في حميميم وطرطوس، ومئات الغارات الجوية الإسرائيلية التي تستهدف البنية العسكرية الإيرانية.',
        detailsEn:
          'Turkish incursions in the north, US presence in Al-Tanf, Russian naval/air bases, and hundreds of Israeli airstrikes.',
        outcomeAr:
          'تفتت السيطرة الجغرافية، تدمير البنية التحتية، تهجير نصف الشعب السوري داخلياً وخارجياً، وبقاء سوريا ساحة صراع استخباري وعسكري مفتوح.',
        outcomeEn:
          'Severe fragmentation of state sovereignty and displacement of over half the population.',
      },
    ],
    currencyEvolution: {
      code: 'SYP',
      symbol: 'ل.س',
      nameAr: 'ليرة سورية',
      nameEn: 'Syrian Pound',
      currentExchangeRateUsd: 'السعر الرسمي لدى مصرف سورية المركزي: 1 USD = 13,000 ل.س / السوق الموازية (السوداء): ~14,800 - 15,200 ل.س',
      rateValueNumber: 14800,
      pegStatusAr: 'انهيار نقدي غير مسبوق، تعويم جزئي تحت وطأة العقوبات (قانون قيصر) وخروج حقول النفط عن سيطرة الدولة',
      pegStatusEn: 'Severe hyper-depreciation from 47 SYP/USD in 2011 to ~15,000 SYP/USD under sanctions and loss of oil revenue',
      centralBankAr: 'مصرف سورية المركزي (تأسس 1953)',
      foreignReservesUsd: 'تآكلت من ~$18 مليار دولار في 2010 إلى أقل من ~$200 مليون دولار',
      currencyHistoryTimeline: [
        {
          year: 1947,
          eventAr: 'انفصال الليرة السورية عن الفرنك الفرنسي وربطها بالدولار بموجب اتفاقية بريتون وودز',
          eventEn: 'Bretton Woods Syrian Pound Dollar Peg (1947)',
          rateAtTime: '1 USD = 2.19 ليرة سورية',
          detailsAr: 'تثبيت نقدي تاريخي تمتع فيه الاقتصاد السوري باستقرار مالي واحتياطيات ذهبية واعدة.',
          detailsEn: 'Post-independence stable monetary regime pegged at 2.19 SYP per USD.',
        },
        {
          year: 2011,
          eventAr: 'بداية الأزمة السورية وثبات سعر الصرف الأولي',
          eventEn: 'Pre-War Baseline Exchange Rate (2011)',
          rateAtTime: '1 USD = 47.00 ليرة سورية',
          detailsAr: 'استقرار نسبي بفضل احتياطي نقدي بلغ 18 مليار دولار قبل اندلاع النزاع المسلح.',
          detailsEn: 'Stable 47 SYP/USD rate backed by $18B in foreign exchange reserves.',
        },
        {
          year: 2020,
          eventAr: 'دخول قانون قيصر الأمريكي حيز التنفيذ وانهيار النظام المصرفي اللبناني (رئة سوريا المالية)',
          eventEn: 'Caesar Act & Lebanese Banking Crash Fallout (2020)',
          rateAtTime: 'تراجع الليرة السورية إلى 3,000 ثم 6,000 ل.س للدولار',
          detailsAr: 'فقدان أموال المودعين والتجار السوريين المحتجزة في بنوك بيروت وتطبيق عقوبات قيصر خانقة.',
          detailsEn: 'Syrian commercial capital frozen in collapsed Lebanese banks combined with Caesar sanctions.',
        },
        {
          year: 2024,
          eventAr: 'تراجع الليرة السورية إلى عتبة 15,000 للدولار وتعديل نشرة الحوالات والصرافة رسمياً',
          eventEn: 'Central Bank Devaluation & 15,000 SYP Milestone',
          rateAtTime: '1 USD = 13,000 إلى 15,000 ل.س',
          detailsAr: 'تآكل القوة الشرائية للمواطنين بنسبة 99% وانتشار اقتصاد الحوالات الخارجية لدعم الأسر.',
          detailsEn: 'Over 99% purchasing power decline making remittance flows the dominant lifeblood.',
        },
      ],
    },
  },

  // 14. المملكة الأردنية الهاشمية
  jo: {
    countryId: 'jo',
    nameAr: 'المملكة الأردنية الهاشمية',
    nameEn: 'Hashemite Kingdom of Jordan',
    assassinations: [
      {
        year: '1951 (20 يوليو)',
        targetAr: 'الملك عبد الله الأول بن الحسين (مؤسس المملكة الأردنية الهاشمية)',
        targetEn: 'King Abdullah I (Founder of the Hashemite Kingdom)',
        perpetratorAr: 'مصطفى شكري عشو (بتدبير وتوجيه سياسي متطرف)',
        perpetratorEn: 'Mustafa Ashu (Palestinian militant)',
        detailsAr:
          'اغتيل الملك المؤسس أثناء دخوله المسجد الأقصى المبارك في القدس لأداء صلاة الجمعة، وكان برفقته حفيده الأمير الحسين بن طلال (الملك الحسين لاحقاً) الذي نجا بمعجزة بعد أن ارتدت رصاصة عن ميدالية علقت على صدره.',
        detailsEn:
          'Assassinated at the entrance of Al-Aqsa Mosque in Jerusalem; his grandson young Hussein survived miraculously.',
        impactAr:
          'مرحلة انتقالية دستورية دقيقة قادت لتولي الملك طلال ثم تتويج الملك الحسين بن طلال الذي قاد المملكة لـ 47 عاماً.',
        impactEn:
          'Paved the way for King Hussein long sovereign reign steering Jordan through the Cold War.',
      },
      {
        year: '1960 (29 أغسطس)',
        targetAr: 'هزاع المجالي (رئيس وزراء الأردن)',
        targetEn: 'Hazza al-Majali (Prime Minister of Jordan)',
        perpetratorAr: 'تفجير عبوة ناسفة مزدوجة في دار رئاسة الوزراء',
        perpetratorEn: 'Dual time-bomb detonation inside Prime Ministry',
        detailsAr:
          'انفجار استهدف مكتب رئيس الوزراء أثناء استقباله المواطنين، أدى لاستشهاده مع 11 موظفاً ومراجعاً، في ذروة الصراع الأيديولوجي العربي.',
        detailsEn:
          'Bombing of the Prime Ministry office killing Prime Minister Majali and 11 others during regional proxy tensions.',
        impactAr:
          'إعلان الأحكام العرفية وتعزيز الحماية الأمنية لمؤسسات الدولة السيادية.',
        impactEn:
          'State of emergency declared and permanent hardening of ministerial infrastructure.',
      },
      {
        year: '1971 (28 نوفمبر)',
        targetAr: 'وصفي التل (رئيس وزراء الأردن الأسبق)',
        targetEn: 'Wasfi Tal (Prime Minister of Jordan)',
        perpetratorAr: 'منظمة "أيلول الأسود" الفلسطينية المسلحة',
        perpetratorEn: 'Black September Organization',
        detailsAr:
          'اغتيل وصفي التل في بهو فندق شيراتون القاهرة أثناء مشاركته في اجتماع مجلس الدفاع العربي المشترك، انتقاماً لدوره في أحداث أيلول 1970 وإنهاء الوجود المسلح للفصائل داخل المدن الأردنية.',
        detailsEn:
          'Assassinated in the lobby of Cairo Sheraton Hotel during Arab League summit in retaliation for 1970 events.',
        impactAr:
          'تحول وصفي التل إلى رمز وطني أردني للسيادة وهيبة الدولة والتمسك بالدستور.',
        impactEn:
          'Wasfi Tal became an enduring icon of Jordanian national sovereignty and state resilience.',
      },
    ],
    terrorEvents: [
      {
        year: '2005 (9 نوفمبر)',
        titleAr: 'تفجيرات فنادق عمان الثلاثة (الأربعاء الأسود)',
        titleEn: '2005 Amman Hotel Bombings (Black Wednesday)',
        groupAr: 'تنظيم "القاعدة في بلاد الرافدين" بقيادة أبو مصعب الزرقاوي',
        groupEn: 'Al-Qaeda in Iraq led by Abu Musab al-Zarqawi',
        casualties: 'استشهد 60 شخصاً وأصيب أكثر من 115، بينهم المخرج السوري العالمي مصطفى العقاد',
        detailsAr:
          'هجمات انتحارية متزامنة بأحزمة ناسفة استهدفت ثلاثة فنادق (غراند حياة، راديسون ساس، وديز إن) أثناء حفل زفاف.',
        detailsEn:
          'Triple coordinated suicide bombings targeting hotels in Amman including a crowded wedding hall.',
        counterMeasureAr:
          'إحباط الخلايا التابعة، والقبض على الانتحارية ساجدة الريشاوي، وتكثيف جهود دائرة المخابرات العامة التي ساهمت في تحديد موقع الزرقاوي وتصفيته عام 2006.',
        counterMeasureEn:
          'Massive intelligence overhaul culminating in the pinpointing and elimination of Zarqawi in 2006.',
      },
    ],
    foreignEscalations: [
      {
        year: '1968 (21 مارس)',
        opponentCountryAr: 'إسرائيل',
        opponentCountryEn: 'Israel',
        titleAr: 'معركة الكرامة التاريخية (أول نصر عسكري عربي بعد نكسة 1967)',
        titleEn: 'Battle of Karameh (Historic Victory)',
        causeAr: 'محاولة الجيش الإسرائيلي شن هجوم بري واسع لعبور نهر الأردن واحتلال مرتفعات البلقاء وتدمير قواعد الفدائيين.',
        causeEn: 'Israeli mechanized offensive across the Jordan River to crush fedayeen and occupy Balqa heights.',
        nature: 'military_conflict',
        detailsAr:
          'تصدت القوات المسلحة الأردنية (الجيش العربي) بقيادة مشهور حديثة الجازي ببسالة للهجوم الإسرائيلي المدرع والمدعوم بالطيران، وخاضت معارك سلاح مدفعية ودروع متلاحمة أجبرت إسرائيل على طلب وقف إطلاق النار لأول مرة.',
        detailsEn:
          'Jordanian Armed Forces artillery and armor decimated advancing Israeli tanks, forcing Israel to request ceasefire.',
        outcomeAr:
          'انسحاب إسرائيلي كامل وترك آلياته المحطمة في الميدان، وإعادة الثقة ورفع معنويات الجيوش العربية بعد نكسة 1967.',
        outcomeEn:
          'Decisive Arab military victory restoring morale and shattering the myth of Israeli invincibility.',
      },
    ],
    currencyEvolution: {
      code: 'JOD',
      symbol: 'د.أ',
      nameAr: 'دينار أردني',
      nameEn: 'Jordanian Dinar',
      currentExchangeRateUsd: 'سعر الصرف الثابت الصارم: 1 USD = 0.709 JOD (يعادل: 1 JOD = 1.41 USD)',
      rateValueNumber: 0.709,
      pegStatusAr: 'ربط رسمي صارم بالدولار الأمريكي منذ 1995، محمي باحتياطيات تاريخية تفوق 19 مليار دولار في البنك المركزي',
      pegStatusEn: 'Hard dollar peg since 1995 (1 JOD = $1.41 USD) backed by record $19B central bank reserves',
      centralBankAr: 'البنك المركزي الأردني (CBJ - تأسس 1964)',
      foreignReservesUsd: '~$19.2 مليار دولار (مستوى تاريخي غير مسبوق يكفي تغطية مستوردات المملكة لأكثر من 9 أشهر)',
      currencyHistoryTimeline: [
        {
          year: 1949,
          eventAr: 'إصدار الدينار الأردني واستبدال الجنيه الفلسطيني',
          eventEn: 'Introduction of the Jordanian Dinar replacing Palestinian Pound',
          rateAtTime: '1 دينار = 1 جنيه إسترليني',
          detailsAr: 'تأسيس مجلس النقد الأردني وإصدار الأوراق النقدية الأردنية المستقلة.',
          detailsEn: 'National monetary council founded issuing independent banknotes.',
        },
        {
          year: 1989,
          eventAr: 'أزمة الدينار الأردني عام 1989 وتراجع سعر الصرف بمقدار النصف',
          eventEn: '1989 Financial Crisis & Devaluation',
          rateAtTime: 'انخفاض الدينار من 3.00 USD إلى 1.40 USD',
          detailsAr: 'أزمة مديونية خارجية حادة أدت إلى اتفاق تصحيح هيكلي مع صندوق النقد وتأسيس السياسة النقدية الدفاعية.',
          detailsEn: 'Severe sovereign debt crunch leading to IMF restructuring and reformed monetary defenses.',
        },
        {
          year: 1995,
          eventAr: 'تثبيت الدينار الأردني بالدولار الأمريكي عند 0.709 دينار للدولار',
          eventEn: 'Official Dollar Peg at 0.709 JOD (1995)',
          rateAtTime: '1 USD = 0.709 JOD (1 JOD = 1.41044 USD)',
          detailsAr: 'سياسة نقدية صلبة مستمرة لأكثر من 30 عاماً وفرت ملاذاً استثمارياً واستقراراً تاماً للمدفوعات.',
          detailsEn: 'Three-decade uninterrupted monetary peg ensuring regional financial stability.',
        },
      ],
    },
  },

  // 15. دولة الكويت
  kw: {
    countryId: 'kw',
    nameAr: 'دولة الكويت',
    nameEn: 'State of Kuwait',
    assassinations: [
      {
        year: '1985 (25 مايو)',
        targetAr: 'محاولة اغتيال أمير الكويت الشيخ جابر الأحمد الجابر الصباح',
        targetEn: 'Assassination Attempt on Emir Sheikh Jaber Al-Ahmad Al-Sabah',
        perpetratorAr: 'حزب الدعوة / منظمة الجهاد الإسلامي بتوجيه خارجي',
        perpetratorEn: 'Islamic Jihad Organization car bomb',
        detailsAr:
          'سيارة مفخخة اقتحمت الموكب الأميري على شارع الخليج العربي أثناء توجه الأمير إلى قصر السيف، وأسفر الانفجار عن استشهاد اثنين من حرس الموكب ومواطن، ونجاة الأمير بإصابات طفيفة.',
        detailsEn:
          'Suicide car bomb rammed the Emir motorcade on Arabian Gulf Street; Emir survived with minor injuries.',
        impactAr:
          'تعزيز الإجراءات الأمنية في حماية قيادة الدولة وتصلب الموقف الكويتي في مواجهة التهديدات الخارجية.',
        impactEn:
          'Hardened sovereign security apparatus and enhanced protection for state leadership.',
      },
    ],
    terrorEvents: [
      {
        year: '1983 (12 ديسمبر)',
        titleAr: 'سلسلة تفجيرات الكويت 1983 (استهداف السفارتين الأمريكية والفرنسية ومطار الكويت)',
        titleEn: '1983 Kuwait Bombings (US & French Embassies)',
        groupAr: 'جماعات متطرفة مدعومة إقليمياً',
        groupEn: 'Regional proxy bombing campaign',
        casualties: 'استشهاد 6 أشخاص وإصابة 86 وتدمير أجزاء من مبنى السفارة الأمريكية',
        detailsAr:
          'ست هجمات منسقة بسيارات مفخخة استهدفت السفارتين الأمريكية والفرنسية، ومحطة الكهرباء الرئيسية، ومطار الكويت الدولي.',
        detailsEn:
          'Coordinated series of truck bombings targeting diplomatic missions and key infrastructure.',
        counterMeasureAr:
          'إلقاء القبض على المتورطين ومحاكمتهم (مجموعة الـ 17)، ورفض الكويت المطلق للابتزاز أو إطلاق سراحهم.',
        counterMeasureEn:
          'Perpetrators captured and prosecuted; state firmly refused hostage-taking extortion.',
      },
      {
        year: '2015 (26 يونيو)',
        titleAr: 'تفجير مسجد الإمام الصادق الإرهابي في الصوابر',
        titleEn: 'Imam Sadiq Mosque Terrorist Bombing',
        groupAr: 'تنظيم داعش (خلية ولاية نجد)',
        groupEn: 'ISIS / Wilayat Najd branch',
        casualties: 'استشهاد 27 مصلياً صائماً وإصابة 227 في صلاة الجمعة بشهر رمضان المبارك',
        detailsAr:
          'انتحاري فجر حزامه الناسف بين المصلين في الركعة الثانية بهدف إشعال فتنة طائفية في البلاد.',
        detailsEn:
          'Suicide bombing during Friday Ramadan prayers aimed at inciting sectarian strife in Kuwait.',
        counterMeasureAr:
          'حضور أمير البلاد الشيخ صباح الأحمد فوراً لموقع الانفجار وإطلاقه مقولته التاريخية: "هذولا عيالي"، والتفاف شعبي موحد أحبط مخطط الفتنة بالكامل.',
        counterMeasureEn:
          'Historic intervention by Emir Sabah declaring "These are my children", consolidating national unity.',
      },
    ],
    foreignEscalations: [
      {
        year: '1990 – 1991',
        opponentCountryAr: 'النظام العراقي السابق (صدام حسين)',
        opponentCountryEn: 'Iraqi Regime under Saddam Hussein',
        titleAr: 'الغزو العراقي الغاشم للكويت وحرب عاصفة الصحراء لتحريرها',
        titleEn: '1990 Iraqi Invasion & Operation Desert Storm Liberation',
        causeAr: 'أطماع صدام حسين في ضم الكويت وإلغاء ديون الحرب العراقية الإيرانية والسيطرة على آبار النفط.',
        causeEn: 'Saddam Hussein expansionist invasion attempting total annexation of Kuwait.',
        nature: 'military_conflict',
        detailsAr:
          'اجتياح القوات العراقية للكويت في 2 أغسطس 1990 وإعلان ضمها قسراً، وتشكيل تحالف دولي غير مسبوق من 34 دولة بقيادة الولايات المتحدة والمملكة العربية السعودية، وتحرير الكويت في 26 فبراير 1991 بعد إشعال القوات المنسحبة النيران في أكثر من 700 بئر نفط.',
        detailsEn:
          'Full-scale annexation halted by 34-nation coalition liberating Kuwait in 100-hour ground offensive.',
        outcomeAr:
          'تحرير الكويت بالكامل، استعادة السيادة الدستورية، إطفاء آبار النفط بزمن قياسي، وترسيم الحدود الدولية بقرارات ملزمة لمجلس الأمن.',
        outcomeEn:
          'Complete liberation, restoration of legitimate government, and UN-guaranteed border demarcation.',
      },
    ],
    currencyEvolution: {
      code: 'KWD',
      symbol: 'د.ك',
      nameAr: 'دينار كويتي',
      nameEn: 'Kuwaiti Dinar',
      currentExchangeRateUsd: 'أعلى عملة قيمة وسعر صرف في العالم: 1 KWD ≈ 3.26 USD (يعادل: 1 USD ≈ 0.307 KWD)',
      rateValueNumber: 0.307,
      pegStatusAr: 'ربط بسلة عملات دولية غير معلنة تهيمن عليها عملات الشركاء التجاريين الرئيسيين والدولار الأمريكي',
      pegStatusEn: 'World highest valued currency; pegged to an undisclosed weighted basket dominated by the USD',
      centralBankAr: 'بنك الكويت المركزي (CBK - تأسس 1968)',
      foreignReservesUsd: 'احتياطيات البنك المركزي ~$48B + أصول الهيئة العامة للاستثمار (KIA) التي تتجاوز 980 مليار دولار',
      currencyHistoryTimeline: [
        {
          year: 1961,
          eventAr: 'إصدار الدينار الكويتي واستبدال روبية الخليج بالتزامن مع إعلان الاستقلال',
          eventEn: 'Launch of the Kuwaiti Dinar replacing Gulf Rupee (1961)',
          rateAtTime: '1 دينار = 1 جنيه إسترليني',
          detailsAr: 'تأسيس مجلس النقد الكويتي وإصدار العملة الوطنية المتفوقة عالمياً.',
          detailsEn: 'National monetary council established issuing the landmark high-value currency.',
        },
        {
          year: 1990,
          eventAr: 'فترة الغزو العراقي وسرقة الاحتياطيات النقدية وإلغاء الإصدار الثالث',
          eventEn: '1990 Invasion & Banknote Theft Nullification',
          rateAtTime: 'محاولة استبدال الدينار الكويتي بالدينار العراقي بالقوة',
          detailsAr: 'الحكومة الشرعية في المنفى أعلنت إلغاء صلاحية الأوراق النقدية المسروقة، واستعادت العملة قيمتها بالكامل فور التحرير 1991.',
          detailsEn: 'Exile government cancelled stolen banknotes, reinstating full parity upon liberation.',
        },
        {
          year: 2007,
          eventAr: 'فك الارتباط المنفرد بالدولار والعودة لنظام سلة العملات لكبح التضخم المستورد',
          eventEn: 'Switch from Pure Dollar Peg to Currency Basket (2007)',
          rateAtTime: '1 KWD ≈ 3.50 USD',
          detailsAr: 'قرار تاريخي لبنك الكويت المركزي حمى القوة الشرائية للدينار من تراجعات الدولار.',
          detailsEn: 'Prudent central bank policy shift curbing imported inflation via diversified currency basket.',
        },
      ],
    },
  },

  // 16. الإمارات العربية المتحدة
  ae: {
    countryId: 'ae',
    nameAr: 'الإمارات العربية المتحدة',
    nameEn: 'United Arab Emirates',
    assassinations: [
      {
        year: '2010 (19 يناير)',
        targetAr: 'محمود المبحوح (القيادي العسكري البارز في كتائب القسام)',
        targetEn: 'Mahmoud al-Mabhouh (Hamas Military Commander)',
        perpetratorAr: 'فريق اغتيال تابع لجهاز الموساد الإسرائيلي دخل بجوازات سفر أوروبية مزورة',
        perpetratorEn: 'Israeli Mossad hit-squad with forged European passports',
        detailsAr:
          'اغتيل المبحوح داخل غرفته في فندق البستان روتانا بدبي عبر حقنه بمادة مسببة للشلل العضلي. نجحت شرطة دبي بقيادة ضاحي خلفان في كشف هويات وتفاصيل وجوه وتحركات جميع عناصر الموساد (26 شخصاً) عبر كاميرات المراقبة وتحليل بيانات الاتصالات بدقة أذهلت أجهزة الاستخبارات العالمية.',
        detailsEn:
          'Targeted assassination in Dubai hotel; Dubai Police forensic investigation exposed all 26 Mossad operatives.',
        impactAr:
          'فضيحة دبلوماسية دولية لإسرائيل مع بريطانيا وأيرلندا وأستراليا لاستخدام جوازاتها المزورة، وترسيخ سمعة أجهزة أمن الإمارات كأحد أحدث أجهزة التحقيق الرقمي في العالم.',
        impactEn:
          'Diplomatic fallout for Israel over forged Western passports and global acclaim for Dubai Police forensic capability.',
      },
    ],
    terrorEvents: [
      {
        year: '2022 (17 يناير)',
        titleAr: 'الهجوم الإرهابي الحوثي على منطقة مصفح ومطار أبوظبي الدولي',
        titleEn: 'Houthi Drone & Missile Attack on Abu Dhabi (Musaffah)',
        groupAr: 'ميليشيا الحوثي بدعم وتزويد تسليحي إيراني',
        groupEn: 'Yemeni Houthi movement via Iranian-supplied UAVs & missiles',
        casualties: 'استشهد 3 مدنيين وأصيب 6 في انفجار صهاريج وقود تابعة لشركة أدنوك',
        detailsAr:
          'إطلاق طائرات مسيرة وصواريخ كروز وباليستية استهدفت منطقة الإنشاءات في مطار أبوظبي ومستودعات أدنوك في المصفح.',
        detailsEn:
          'Coordinated drone and cruise missile strike on ADNOC fuel storage tanks near Abu Dhabi airport.',
        counterMeasureAr:
          'اعتراض المنظومات الدفاعية (ثاد وباتريوت) لبقية الصواريخ، وتصنيف الحوثيين منظمة إرهابية، وتكثيف التحالف العربي لضربات الردع الجوي، وتعزيز نشر منظومات الدرع الصاروخي.',
        counterMeasureEn:
          'First operational combat interception by THAAD system; US and UAE strengthened air defense umbrella.',
      },
    ],
    foreignEscalations: [
      {
        year: '1971 – 2026',
        opponentCountryAr: 'إيران',
        opponentCountryEn: 'Iran',
        titleAr: 'قضية احتلال الجزر الإماراتية الثلاث (طنب الكبرى، طنب الصغرى، وأبو موسى)',
        titleEn: 'Occupation of the Three UAE Islands (Greater & Lesser Tunbs, Abu Musa)',
        causeAr: 'إنزال عسكري لقوات البحرية الإيرانية (في عهد الشاه) لاحتلال الجزر عشية إعلان استقلال الاتحاد عام 1971.',
        causeEn: 'Imperial Iranian military occupation on the eve of UAE independence in November 1971.',
        nature: 'border_escalation',
        detailsAr:
          'نزاع سيادي وسياسي مستمر تؤكد فيه دولة الإمارات حقها الشرعي والقانوني غير القابل للتصرف في الجزر، وتدعو إيران لحل القضية عبر المفاوضات الثنائية أو اللجوء لمحكمة العدل الدولية وسط دعم عربي ودولي متواصل.',
        detailsEn:
          'Enduring territorial dispute with the UAE consistently demanding peaceful negotiations or ICJ arbitration.',
        outcomeAr:
          'تمسك إماراتي بالسيادة الوطنية ودعم دولي واسع لعدالة القضية في كل المحافل والمؤتمرات الدولية.',
        outcomeEn:
          'Broad international diplomatic backing affirming UAE sovereignty over the occupied islands.',
      },
    ],
    currencyEvolution: {
      code: 'AED',
      symbol: 'د.إ',
      nameAr: 'درهم إماراتي',
      nameEn: 'UAE Dirham',
      currentExchangeRateUsd: 'سعر التثبيت الصارم المعتمد: 1 USD = 3.6725 AED (يعادل: 1 AED ≈ 0.272 USD)',
      rateValueNumber: 3.6725,
      pegStatusAr: 'ربط رسمي صارم بالدولار الأمريكي منذ 1997، مدعوم باحتياطيات مصرفية وأصول سيادية تريليونية تتجاوز 1.5 تريليون دولار',
      pegStatusEn: 'Hard dollar peg at 3.6725 AED/USD since 1997, fortified by >$1.5 trillion in sovereign wealth (ADIA, Mubadala, ADQ)',
      centralBankAr: 'مصرف الإمارات العربية المتحدة المركزي (CBUAE - تأسس 1980)',
      foreignReservesUsd: 'احتياطيات المصرف المركزي تفوق 190 مليار دولار + الصناديق السيادية الضخمة',
      currencyHistoryTimeline: [
        {
          year: 1973,
          eventAr: 'إصدار الدرهم الإماراتي وتوحيد النقد عقب تأسيس دولة الاتحاد',
          eventEn: 'Creation of the UAE Dirham (1973)',
          rateAtTime: 'استبدال دينار البحرين وريال قطر ودبي',
          detailsAr: 'تأسيس مجلس النقد الإماراتي وإصدار الدرهم الموحد رمزاً للوحدة الوطنية والسيادة.',
          detailsEn: 'Replacing Bahrain Dinar and Qatar-Dubai Riyal with the united national currency.',
        },
        {
          year: 1997,
          eventAr: 'التثبيت الرسمي للدرهم عند 3.6725 مقابل الدولار الأمريكي',
          eventEn: 'Official Peg Fixed at 3.6725 AED/USD (1997)',
          rateAtTime: '1 USD = 3.6725 AED',
          detailsAr: 'تثبيت نقدي مستقر رسخ دبي وأبوظبي كمركزين ماليين وتجاريين وسياحيين رائدين عالمياً.',
          detailsEn: 'Unbroken monetary peg anchoring the UAE as the premier global trade and financial capital.',
        },
        {
          year: 2024,
          eventAr: 'إطلاق الدرهم الرقمي وإتمام معاملات الدفع العابرة للحدود عبر منصة mBridge',
          eventEn: 'Digital Dirham & Project mBridge Cross-Border Settlements',
          rateAtTime: 'استقرار نقدي تام وريادة في العملات الرقمية للبنوك المركزية (CBDC)',
          detailsAr: 'ريادة عالمية في تسوية المدفوعات النفطية والتجارية الرقمية اللحظية مع الصين والهند ودول الخليج.',
          detailsEn: 'Pioneering multicountry central bank digital currency operations bypassing legacy rails.',
        },
      ],
    },
  },

  // 17. دولة قطر
  qa: {
    countryId: 'qa',
    nameAr: 'دولة قطر',
    nameEn: 'State of Qatar',
    assassinations: [
      {
        year: '2004 (13 فبراير)',
        targetAr: 'سليم خان ياندرباييف (الرئيس الشيشاني الأسبق)',
        targetEn: 'Zelimkhan Yandarbiyev (Former Chechen President)',
        perpetratorAr: 'عملاء من جهاز المخابرات العسكرية الروسية (GRU)',
        perpetratorEn: 'Russian military intelligence (GRU) operatives',
        detailsAr:
          'اغتيل في الدوحة بعبوة ناسفة دمرت سيارته عقب مغادرته مسجد الحي الدبلوماسي. تمكنت الأجهزة الأمنية القطرية من القبض على الضابطين الروسيين أناتولي بيلاشكوف وفاسيلي بوغوتشيف ومحاكمتهما بالسجن المؤبد قبل تسليمهما لاحقاً لموسكو وفق ترتيبات دبلوماسية.',
        detailsEn:
          'Car bomb in Doha diplomatic quarter; Qatari security captured the two GRU assassins and tried them in court.',
        impactAr:
          'إظهار يقظة واحترافية الأجهزة الأمنية والقضائية القطرية وتأكيد سيادة الدولة.',
        impactEn:
          'Demonstrated Qatari sovereign judicial and security assertiveness against foreign covert operations.',
      },
    ],
    terrorEvents: [
      {
        year: '2005 (19 مارس)',
        titleAr: 'تفجير مسرح الدوحة للدراما (قرب المدرسة البريطانية)',
        titleEn: '2005 Doha Players Theatre Bombing',
        groupAr: 'عنصر متطرف منفرد (عمر أحمد عبد الله علي)',
        groupEn: 'Lone wolf extremist',
        casualties: 'مقتل مدني بريطاني وإصابة 12 شخصاً ومقتل المنفذ',
        detailsAr:
          'سيارة مفخخة استهدفت مسرحاً محلياً غرب الدوحة، وهو الحادث الإرهابي الوحيد من نوعه في تاريخ قطر الحديث.',
        detailsEn:
          'Isolated car bomb attack outside a community theatre in Doha; the only incident of its kind in modern Qatar.',
        counterMeasureAr:
          'تعزيز حماية المنشآت الحيوية والتجمعات والمجمعات الدبلوماسية وتشديد الرقابة الأمنية الاستباقية.',
        counterMeasureEn:
          'Hardening diplomatic zones and strengthening proactive intelligence surveillance.',
      },
    ],
    foreignEscalations: [
      {
        year: '2017 – 2021',
        opponentCountryAr: 'الرباعي العربي (السعودية، الإمارات، البحرين، ومصر)',
        opponentCountryEn: 'Arab Quartet (Saudi Arabia, UAE, Bahrain, Egypt)',
        titleAr: 'الأزمة الخليجية والحصار الدبلوماسي والاقتصادي',
        titleEn: '2017–2021 Gulf Diplomatic Crisis & Blockade',
        causeAr: 'خلافات سياسية عميقة حول السياسة الخارجية، ملف الإخوان المسلمين، العلاقات مع إيران، وتغطية قناة الجزيرة.',
        causeEn: 'Geopolitical rift over foreign policy orientations and regional ideological alliances.',
        nature: 'diplomatic_crisis',
        detailsAr:
          'قطع العلاقات وإغلاق المنفذ البري الوحيد (سلوى) والمجالات الجوية والبحرية. لجأت قطر لتوسيع خطوط الإمداد الجوي والبحري عبر تركيا وإيران، وتوسيع ميناء حمد وتأمين الأمن الغذائي الذاتي.',
        detailsEn:
          'Total airspace, sea, and land border closure; Qatar redirected logistics via Hamad Port and Turkish airbridges.',
        outcomeAr:
          'توقيع "بيان قمة العلا" التاريخي في السعودية في يناير 2021، واستئناف كامل العلاقات الأخوية والتعاون المشترك.',
        outcomeEn:
          'Historic Al-Ula Summit Accord in 2021 restoring diplomatic fraternity and strategic reconciliation.',
      },
    ],
    currencyEvolution: {
      code: 'QAR',
      symbol: 'ر.ق',
      nameAr: 'ريال قطري',
      nameEn: 'Qatari Riyal',
      currentExchangeRateUsd: 'سعر الصرف الثابت المعتمد: 1 USD = 3.64 QAR (يعادل: 1 QAR ≈ 0.2747 USD)',
      rateValueNumber: 3.64,
      pegStatusAr: 'ربط رسمي ثابت بالدولار الأمريكي بموجب المرسوم الأميري رقم 34 لسنة 2001، محمي بأكبر صادرات غاز طبيعي مسال (LNG) وأصول صندوق QIA (~510B$)',
      pegStatusEn: 'Official decree peg at 3.64 QAR/USD since 2001 backed by world LNG dominance and $510B QIA portfolio',
      centralBankAr: 'مصرف قطر المركزي (QCB - تأسس 1973)',
      foreignReservesUsd: '~$68 مليار دولار + أصول جهاز قطر للاستثمار التي تتجاوز 510 مليار دولار',
      currencyHistoryTimeline: [
        {
          year: 1966,
          eventAr: 'إصدار ريال قطر ودبي المشترك عقب إلغاء روبية الخليج',
          eventEn: 'Qatar and Dubai Currency Board Riyal (1966)',
          rateAtTime: 'ربط بالذهب والإسترليني',
          detailsAr: 'مجلس نقد مشترك جمع قطر ودبي قبل تأسيس دولة الإمارات المستقلة.',
          detailsEn: 'Joint monetary board issuing currency prior to 1971 federal formation.',
        },
        {
          year: 1973,
          eventAr: 'إصدار الريال القطري المستقل وتأسيس مؤسسة النقد القطري',
          eventEn: 'Introduction of Independent Qatari Riyal (1973)',
          rateAtTime: '1 USD = 3.878 QAR',
          detailsAr: 'تثبيت السيادة النقدية الكاملة للدولة عقب الاستقلال.',
          detailsEn: 'Full national monetary sovereignty under independent monetary agency.',
        },
        {
          year: 2001,
          eventAr: 'المرسوم الأميري بتثبيت سعر الصرف نهائياً عند 3.64 ريال للدولار',
          eventEn: 'Emiri Decree 34/2001 Fixing Peg at 3.64 QAR/USD',
          rateAtTime: '1 USD = 3.64 QAR',
          detailsAr: 'ركيزة مالية صلبة مستمرة دون أي تغيير واكبت الطفرة الهائلة في صادرات الغاز واستضافة كأس العالم 2022.',
          detailsEn: 'Cornerstone policy anchoring astronomical LNG expansion and infrastructure transformation.',
        },
      ],
    },
  },

  // 18. الجمهورية اليمنية
  ye: {
    countryId: 'ye',
    nameAr: 'الجمهورية اليمنية',
    nameEn: 'Republic of Yemen',
    assassinations: [
      {
        year: '1977 (11 أكتوبر)',
        targetAr: 'إبراهيم الحمدي (رئيس الجمهورية العربية اليمنية الأسبق - اليمن الشمالي)',
        targetEn: 'Ibrahim al-Hamdi (President of North Yemen)',
        perpetratorAr: 'مؤامرة سياسية داخلية بتواطؤ قيادات أمنية وقبلية',
        perpetratorEn: 'Internal political and military coup plotters',
        detailsAr:
          'اغتيل الحمدي مع شقيقه عبد الله عشية زيارة تاريخية كان يعتزم القيام بها إلى عدن لتحقيق الوحدة اليمنية. عُرف الحمدي بنزاهته وبناء الدولة وتأسيس التعاونيات وتحديث الجيش.',
        detailsEn:
          'Assassinated alongside his brother on the eve of a historic trip to Aden to negotiate reunification.',
        impactAr:
          'انتكاسة مشروع الدولة المدنية في الشمال، وتولى أحمد الغشمي الرئاسة قبل أن يغتال هو الآخر بعد 8 أشهر بحقيبة مفخخة.',
        impactEn:
          'Major setback to institutional state-building and prompt assassination of his successor Ghashmi 8 months later.',
      },
      {
        year: '2017 (4 ديسمبر)',
        targetAr: 'علي عبد الله صالح (رئيس اليمن الأسبق لحوالي 33 عاماً)',
        targetEn: 'Ali Abdullah Saleh (Former Yemeni President)',
        perpetratorAr: 'مسلحو جماعة أنصار الله (الحوثيون)',
        perpetratorEn: 'Houthi armed militants',
        detailsAr:
          'تصفية صالح في منزله بحي حدة أو أثناء مغادرته صنعاء، بعد يومين من إعلانه فك التحالف مع الحوثيين ودعوته لفتح "صفحة جديدة" مع دول الجوار والتحالف العربي.',
        detailsEn:
          'Assassinated in Sanaa two days after breaking alliance with Houthis and calling for a general uprising.',
        impactAr:
          'انفراد الحوثيين بالسيطرة العسكرية والسياسية التامة على صنعاء ومحافظات الشمال اليمني.',
        impactEn:
          'Total consolidation of Houthi unilateral control over northern Yemen and state institutions.',
      },
    ],
    terrorEvents: [
      {
        year: '2000 (12 أكتوبر)',
        titleAr: 'تفجير المدمرة الأمريكية يو إس إس كول (USS Cole) في ميناء عدن',
        titleEn: 'USS Cole Bombing in Port of Aden',
        groupAr: 'تنظيم القاعدة في جزيرة العرب',
        groupEn: 'Al-Qaeda in the Arabian Peninsula (AQAP)',
        casualties: 'مقتل 17 بحاراً أمريكياً وإصابة 39 وتدمير جزء كبير من بدن المدمرة',
        detailsAr:
          'قارب انتحاري صغير محمل بمتفجرات C-4 اقترب من المدمرة أثناء تزويدها بالوقود في ميناء عدن وفجر نفسه، في واحدة من أشهر العمليات البحرية للقاعدة.',
        detailsEn:
          'Small boat packed with explosives rammed the guided-missile destroyer during a refueling stop.',
        counterMeasureAr:
          'إطلاق برنامج مكافحة الإرهاب المشترك مع واشنطن، وملاحقة وتصفية قادة التنظيم (مثل أنور العولقي 2011).',
        counterMeasureEn:
          'Extensive joint counter-terrorism drone and interdiction program with Washington.',
      },
    ],
    foreignEscalations: [
      {
        year: '2015 – 2026',
        opponentCountryAr: 'التحالف العربي بقيادة السعودية والإمارات / والتحالف البحري الدولي (حارس الازدهار)',
        opponentCountryEn: 'Arab Coalition & Operation Prosperity Guardian',
        titleAr: 'حرب اليمن وعملية عاصفة الحزم وأزمة الملاحة في البحر الأحمر وباب المندب',
        titleEn: 'Yemeni War & Red Sea / Bab al-Mandab Maritime Standoff',
        causeAr: 'انقلاب جماعة الحوثي على الحكومة الشرعية 2014، واستهداف السفن التجارية الدولية منذ 2023.',
        causeEn: 'Houthi armed takeover of capital in 2014 and 2023–2026 Red Sea missile/drone commercial shipping attacks.',
        nature: 'military_conflict',
        detailsAr:
          'عمليات عسكرية شاملة برية وجوية وبحرية، تدمير البنية التحتية، انقسام الدولة بين سلطة معترف بها دولياً في عدن وسلطة الحوثيين في صنعاء، واستهداف الحوثيين لحركة الشحن في مضيق باب المندب مما استدعى ضربات جوية أمريكية وبريطانية مكثفة.',
        detailsEn:
          'Prolonged conflict splitting state power between Aden and Sanaa, evolving into global naval showdown.',
        outcomeAr:
          'أسوأ أزمة إنسانية في العالم بحسب الأمم المتحدة، وتوقف تصدير النفط والغاز، وانقسام الجهاز المصرفي والعملة الوطنية.',
        outcomeEn:
          'Severe humanitarian crisis, partition of monetary system, and paralyzed oil export infrastructure.',
      },
    ],
    currencyEvolution: {
      code: 'YER',
      symbol: 'ر.ي',
      nameAr: 'ريال يمني',
      nameEn: 'Yemeni Rial',
      currentExchangeRateUsd: 'انقسام نقدي حاد: في صنعاء (الحوثيون): 1 USD ≈ 530 ر.ي / في عدن (الحكومة الشرعية): 1 USD ≈ 1,900 - 2,050 ر.ي',
      rateValueNumber: 1950,
      pegStatusAr: 'انقسام نقدي كارثي بين بنكين مركزيين في صنعاء وعدن، ومنع الحوثيين لتداول الطبعة الجديدة للريال، وتضخم هائل في المحافظات الجنوبية',
      pegStatusEn: 'Catastrophic monetary bifurcation: 530 YER/USD in Sanaa vs ~2,000 YER/USD in Aden with dual central banks',
      centralBankAr: 'البنك المركزي اليمني (منقسم: المقر القانوني بعدن برئاسة أحمد المعبقي / وفرع صنعاء تحت إدارة الحوثيين)',
      foreignReservesUsd: 'شبه معدومة في صنعاء، وتعتمد عدن على الودائع المالية السعودية والإماراتية لدعم الصرف',
      currencyHistoryTimeline: [
        {
          year: 1990,
          eventAr: 'توحيد النقد اليمني عقب إعلان الوحدة (دمج ريال الشمال ودينار الجنوب)',
          eventEn: 'Monetary Unification Post-Reunification (1990)',
          rateAtTime: '1 دينار جنوبي = 26 ريال شمالي',
          detailsAr: 'إصدار الريال اليمني الموحد وإلغاء الدينار الجنوبي رسمياً.',
          detailsEn: 'Integration of South Yemen Dinar and North Yemen Rial into unified currency.',
        },
        {
          year: 2014,
          eventAr: 'سقوط صنعاء وبداية التدهور النقدي',
          eventEn: 'Pre-War Baseline Rate (2014)',
          rateAtTime: '1 USD = 215 ر.ي',
          detailsAr: 'استقرار نسبي قبل استنزاف الاحتياطي النقدي البالغ 4.5 مليار دولار في صنعاء.',
          detailsEn: 'Stable 215 YER/USD rate prior to the exhaustion of $4.5B sovereign reserves.',
        },
        {
          year: 2019,
          eventAr: 'قرار صنعاء حظر تداول الطبعة النقدية الجديدة وبدء الانقسام السعري الفعلي',
          eventEn: 'Houthi Ban on New Banknote Prints & Severe Currency Schism',
          rateAtTime: 'اتساع الفجوة: 600 في صنعاء مقابل 1,000 ثم 1,900 في عدن',
          detailsAr: 'انقسام اقتصادي أدى لفرض رسوم تحويل داخلي بين الشمال والجنوب تجاوزت 100% في بعض الفترات.',
          detailsEn: 'Arbitrage gap and internal transfer fees exceeding 100% between Sanaa and Aden.',
        },
      ],
    },
  },

  // 19. جمهورية السودان
  sd: {
    countryId: 'sd',
    nameAr: 'جمهورية السودان',
    nameEn: 'Republic of the Sudan',
    assassinations: [
      {
        year: '1973 (1 مارس)',
        targetAr: 'كليو نويل (السفير الأمريكي في الخرطوم) وجورج مور (نائب السفير)',
        targetEn: 'Cleo Noel (US Ambassador to Sudan) & George Moore',
        perpetratorAr: 'منظمة "أيلول الأسود" الفلسطينية (اقتحام السفارة السعودية بالخرطوم)',
        perpetratorEn: 'Black September Organization',
        detailsAr:
          'اقتحام حفل دبلوماسي في السفارة السعودية بالخرطوم واحتجاز السفراء والمطالبة بالإفراج عن معتقلين، ثم إعدام السفير الأمريكي ونائبه والدبلوماسي البلجيكي غي إيد.',
        detailsEn:
          'Storming of the Saudi embassy in Khartoum holding diplomats hostage and executing the US Ambassador.',
        impactAr:
          'أزمة دبلوماسية دولية كبرى للسودان وعزل الخرطوم لسنوات قبل محاكمة المنفذين.',
        impactEn:
          'Acute diplomatic crisis isolating Sudan under Jaafar Nimeiry.',
      },
      {
        year: '2008 (1 يناير)',
        targetAr: 'جون غرانفيل (دبلوماسي الوكالة الأمريكية للتنمية الدولية USAID)',
        targetEn: 'John Granville (USAID Diplomat)',
        perpetratorAr: 'جماعة "أنصار التوحيد" المتطرفة في الخرطوم',
        perpetratorEn: 'Ansar al-Tawhid militant cell',
        detailsAr:
          'إطلاق النار على سيارته في شارع النيل بالخرطوم أثناء عودته من احتفال رأس السنة، مما أسفر عن مقتله وسائقه السوداني.',
        detailsEn:
          'Drive-by assassination of American diplomat along Nile Street in Khartoum.',
        impactAr:
          'تشديد العقوبات الأمريكية والملاحقات الاستخبارية للخلايا الإرهابية.',
        impactEn:
          'Heightened US security pressure on Sudanese intelligence apparatus.',
      },
    ],
    terrorEvents: [
      {
        year: '1998 (20 أغسطس)',
        titleAr: 'قصف مصنع الشفاء للأدوية بالخرطوم بحري بصواريخ كروز الأمريكية',
        titleEn: 'Operation Infinite Reach Cruise Missile Strike on Al-Shifa Plant',
        groupAr: 'ضربة عسكرية أمريكية انتقامية عقب تفجير سفارتي واشنطن في نيروبي ودار السلام',
        groupEn: 'US retaliatory strike following East Africa embassy bombings',
        casualties: 'تدمير المصنع الدوائي الأكبر في السودان واستشهاد حارس وإصابة موظفين',
        detailsAr:
          'أطلقت البحرية الأمريكية 13 صاروخ توماهوك بزعم تصنيع المصنع لغاز الأعصاب (VX) وارتباطه بأسامة بن لادن الذي أقام في السودان (1991-1996).',
        detailsEn:
          'US launched 13 Tomahawk cruise missiles leveling the pharmaceutical plant alleging VX nerve agent production.',
        counterMeasureAr:
          'نفي سوداني وتنديد دولي بالمبررات الاستخبارية الخاطئة، وتعميق العقوبات الاقتصادية الأمريكية.',
        counterMeasureEn:
          'Sudan strongly denied chemical weapons claims; intensified two decades of US economic embargo.',
      },
    ],
    foreignEscalations: [
      {
        year: '2011',
        opponentCountryAr: 'جمهورية جنوب السودان',
        opponentCountryEn: 'Republic of South Sudan',
        titleAr: 'انفصال جنوب السودان وفقدان 75% من الثروة النفطية',
        titleEn: 'Secession of South Sudan & Loss of 75% of Oil Wealth',
        causeAr: 'عقود من الحرب الأهلية (1983-2005) وتطبيق اتفاقية نيفاشا للسلام والاستفتاء الشعبي على تقرير المصير.',
        causeEn: 'Comprehensive Peace Agreement (Naivasha) culminating in self-determination referendum.',
        nature: 'border_escalation',
        detailsAr:
          'استقلال الجنوب رسمياً في يوليو 2011 وانقسام أكبر دولة عربية وأفريقية مساحة، تلاه نزاع مسلح حدودي حول منطقة هجليج النفطية ومنطقة أبيي المتنازع عليها.',
        detailsEn:
          'Formal partition of Africa largest country cutting Khartoum off from 75% of fiscal hydrocarbon income.',
        outcomeAr:
          'صدمة اقتصادية ونقدية قاصمة للخرطوم، واندلاع حروب أهلية متوازية في كل من الشمال والجنوب.',
        outcomeEn:
          'Permanent fiscal shock triggering deep hyperinflation and macroeconomic instability.',
      },
      {
        year: '2023 – 2026',
        opponentCountryAr: 'الصراع الداخلي والتدخلات الإقليمية (الجيش السوداني SAF ضد قوات الدعم السريع RSF)',
        opponentCountryEn: 'SAF vs RSF Civil War & Foreign Proxy Involvements',
        titleAr: 'حرب 15 أبريل الكبرى وتدمير العاصمة والمدن السودانية',
        titleEn: 'April 15 War & Devastation of Sudanese State Infrastructure',
        causeAr: 'الصراع على دمج قوات الدعم السريع في الجيش والسيطرة على السلطة السياسية بعد الإطاحة بعمر البشير 2019.',
        causeEn: 'Power struggle between General Burhan and Hemedti over military integration and state dominance.',
        nature: 'military_conflict',
        detailsAr:
          'معارك حضرية مدمرة في الخرطوم ودارفور والجزيرة وسنار، تدمير البنية الصناعية والمصرفية والمطارات، ونزوح أكثر من 11 مليون سوداني في أكبر أزمة نزوح في العالم.',
        detailsEn:
          'Full-scale warfare leveling Khartoum, triggering mass civilian displacement of over 11 million people.',
        outcomeAr:
          'شلل تام للدولة السودانية، مجاعة واسعة النطاق، وانهيار شامل للعملة والنظام الصحي والتعليمي.',
        outcomeEn:
          'Catastrophic state breakdown, acute famine threat, and collapse of national currency.',
      },
    ],
    currencyEvolution: {
      code: 'SDG',
      symbol: 'ج.س',
      nameAr: 'جنيه سوداني',
      nameEn: 'Sudanese Pound',
      currentExchangeRateUsd: 'السعر الرسمي لدى بنك السودان: ~1,980 ج.س / السوق الموازية: تفوق 2,700 - 3,000 ج.س للدولار',
      rateValueNumber: 2750,
      pegStatusAr: 'انهيار نقدي متسارع وفقدان السيطرة على المعروض النقدي تحت وطأة الحرب المستمرة وتوقف الصادرات والمساعدات الدولية',
      pegStatusEn: 'Hyper-depreciation from 55 SDG/USD in 2020 to >2,800 SDG/USD in 2026 amid wartime economic destruction',
      centralBankAr: 'بنك السودان المركزي (تأسس 1960 - نُقلت عملياته إلى بورتسودان عقب تدمير مقره بالخرطوم)',
      foreignReservesUsd: 'تآكلت بالكامل وتعتمد على تدفقات الذهب وتبرعات المغتربين',
      currencyHistoryTimeline: [
        {
          year: 1956,
          eventAr: 'إصدار الجنيه السوداني المستقل عند الاستقلال بديلاً للجنيه المصري',
          eventEn: 'Creation of Sudanese Pound Post-Independence (1956)',
          rateAtTime: '1 جنيه سوداني = 2.87 دولار أمريكي',
          detailsAr: 'فترة ذهبية كان فيها الجنيه السوداني أعلى قيمة من الدولار الأمريكي.',
          detailsEn: 'Historic era when the Sudanese Pound held a value higher than the US Dollar.',
        },
        {
          year: 2011,
          eventAr: 'انفصال جنوب السودان وفقدان 75% من إيرادات النقد الأجنبي',
          eventEn: 'Secession Shock & Devaluation Crisis (2011)',
          rateAtTime: 'تراجع الجنيه من 2.5 إلى 6 ثم 18 ج.س للدولار',
          detailsAr: 'توقف تدفقات النفط وإطلاق دوامة العجز المالي والتضخم.',
          detailsEn: 'Loss of hydrocarbon revenue triggering systemic currency depreciation.',
        },
        {
          year: 2023,
          eventAr: 'اندلاع حرب 15 أبريل ونهب فروع البنوك وانهيار الجنيه وتجاوزه 2,500 للدولار',
          eventEn: 'Wartime Banking System Collapse (2023–2026)',
          rateAtTime: '1 USD تفوق 2,800 جنيه سوداني',
          detailsAr: 'تدمير البنية المصرفية المركزية بالخرطوم وطباعة نقد اضطراري وتآكل شبه تام للمدخرات.',
          detailsEn: 'Physical looting and destruction of banks driving the pound to historical record lows.',
        },
      ],
    },
  },

  // 20. المملكة المتحدة (بريطانيا)
  gb: {
    countryId: 'gb',
    nameAr: 'المملكة المتحدة لبريطانيا العظمى وأيرلندا الشمالية',
    nameEn: 'United Kingdom',
    assassinations: [
      {
        year: '1979 (27 أغسطس)',
        targetAr: 'اللورد لويس ماونتباتن (آخر نائب للملك في الهند والعم الأكبر للملك تشارلز الثالث)',
        targetEn: 'Lord Louis Mountbatten (Former Viceroy of India)',
        perpetratorAr: 'الجيش الجمهوري الأيرلندي المؤقت (Provisional IRA)',
        perpetratorEn: 'Provisional Irish Republican Army (IRA)',
        detailsAr:
          'اغتيل بتفجير عبوة ناسفة بوزن 50 رطلاً تم التحكم بها عن بعد وضعت في قارب صيده "Shadow V" قبالة ساحل سليجو في أيرلندا، مما أسفر عن مقتله وحفيده وفتى محلي.',
        detailsEn:
          'Remote-controlled bomb detonated on his fishing boat off the coast of County Sligo, Ireland.',
        impactAr:
          'صدمة وطنية عميقة للملكية البريطانية، وتصلب حكومة مارغريت تاتشر في ملاحقة خلايا الجيش الجمهوري الأيرلندي.',
        impactEn:
          'Profound shock to British royal family and hardening of Margaret Thatcher security policy.',
      },
      {
        year: '2016 (16 يونيو)',
        targetAr: 'جو كوكس (عضو البرلمان البريطاني عن حزب العمال)',
        targetEn: 'Jo Cox MP (Labour Member of Parliament)',
        perpetratorAr: 'توماس مير (يميني متطرف ونازي جديد)',
        perpetratorEn: 'Thomas Mair (Far-right neo-Nazi extremist)',
        detailsAr:
          'اغتيلت بإطلاق نار وطعن في بلدة بريستول أثناء توجهها للقاء ناخبيها قبل أسبوع واحد فقط من استفتاء الخروج من الاتحاد الأوروبي (Brexit)، وكان القاتل يهتف "بريطانيا أولاً".',
        detailsEn:
          'Shot and stabbed outside her constituency surgery a week before the Brexit referendum.',
        impactAr:
          'أول اغتيال لنائب بريطاني أثناء أداء مهامه منذ 1990، وتصنيف جماعات اليمين المتطرف منظمات إرهابية محظورة.',
        impactEn:
          'Led to the formal proscription of far-right group National Action as a terrorist organization.',
      },
    ],
    terrorEvents: [
      {
        year: '2005 (7 يوليو)',
        titleAr: 'تفجيرات لندن 7/7 (استهداف شبكة مترو الأنفاق والحافلات)',
        titleEn: '7/7 London Bombings (Tube & Bus Coordinated Attacks)',
        groupAr: 'خلية إرهابية محلية تابعة لتنظيم القاعدة',
        groupEn: 'Al-Qaeda inspired domestic terrorist cell',
        casualties: 'استشهد 52 مدنياً وأصيب أكثر من 700 في أسوأ هجوم إرهابي تشهده لندن في تاريخها الحديث',
        detailsAr:
          'أربعة انتحاريين بريطانيين فجروا عبوات ناسفة موضوعة في حقائب ظهر في ثلاثة قطارات أنفاق وحافلة ركاب ذات طابقين في ميدان تافيستوك خلال ساعة الذروة الصباحية.',
        detailsEn:
          'Four coordinated suicide bombings on three London Underground trains and a double-decker bus.',
        counterMeasureAr:
          'تحديث شامل لمنظومة مكافحة الإرهاب البريطانية (استراتيجية كونتيست CONTEST)، وتوسيع صلاحيات جهاز المخابرات الداخلي MI5 والشرطة الحضرية.',
        counterMeasureEn:
          'Overhaul of the UK CONTEST counter-terrorism doctrine and massive expansion of MI5 capabilities.',
      },
      {
        year: '2017 (22 مايو)',
        titleAr: 'تفجير مانشستر أرينا الإرهابي',
        titleEn: 'Manchester Arena Bombing',
        groupAr: 'تنظيم داعش (الانتحاري سلمان العبيدي)',
        groupEn: 'Islamic State (ISIS) directed operative Salman Abedi',
        casualties: 'مقتل 22 شخصاً بينهم أطفال ومراهقون وإصابة أكثر من 1,000 في ختام حفل للمغنية أريانا غراندي',
        detailsAr:
          'تفجير عبوة ناسفة محشوة بالمسامير والصواميل المعدنية في بهو الصالة أثناء خروج العائلات والأطفال من الحفل الموسيقي.',
        detailsEn:
          'Shrapnel-packed suicide bomb detonated in the foyer as attendees exited pop concert.',
        counterMeasureAr:
          'إعلان أعلى درجات التأهب الأمني (حرج Critical)، ونشر الجيش البريطاني في المواقع الحيوية (عملية تيمبريراك Temperer).',
        counterMeasureEn:
          'Operation Temperer triggered deploying British military to protect vital public sites.',
      },
    ],
    foreignEscalations: [
      {
        year: '1982 (أبريل – يونيو)',
        opponentCountryAr: 'جمهورية الأرجنتين',
        opponentCountryEn: 'Argentine Republic',
        titleAr: 'حرب جزر الفوكلاند (Falklands War)',
        titleEn: 'Falklands War (1982)',
        causeAr: 'غزو القوات الأرجنتينية لجزر الفوكلاند (مالفيناس) الخاضعة للسيادة البريطانية في جنوب المحيط الأطلسي.',
        causeEn: 'Argentine military junta surprise invasion of British Falkland Islands.',
        nature: 'military_conflict',
        detailsAr:
          'أرسلت مارغريت تاتشر قوة مهام بحرية عسكرية قطعت 8,000 ميل، وخاضت معارك بحرية وجوية ضارية (إغراق المدمرة شيفيلد بصاروخ إكسوسيت، وإغراق البارجة جنرال بلغرانو)، وانتهت باستعادة الجزر واستسلام القوات الأرجنتينية بعد 74 يوماً.',
        detailsEn:
          'Task force sailed 8,000 miles to recapture the islands in intense naval and amphibious air-land combat.',
        outcomeAr:
          'استعادة السيادة البريطانية التامة، سقوط المجلس العسكري الأرجنتيني، وترسيخ تاتشر كـ "المرأة الحديدية" سياسياً.',
        outcomeEn:
          'Decisive British victory, collapse of Argentine junta, and massive political boost for Thatcher.',
      },
    ],
    currencyEvolution: {
      code: 'GBP',
      symbol: '£',
      nameAr: 'جنيه إسترليني',
      nameEn: 'Pound Sterling',
      currentExchangeRateUsd: 'سعر الصرف العائم الحر: 1 GBP ≈ 1.28 - 1.32 USD',
      rateValueNumber: 0.77,
      pegStatusAr: 'تعويم حر كامل ورابع أكبر عملة احتياطية وتداولية في العالم، تديرها لجنة السياسة النقدية (MPC) في بنك إنجلترا',
      pegStatusEn: 'Freely floating major reserve currency managed by the Bank of England Monetary Policy Committee',
      centralBankAr: 'بنك إنجلترا (Bank of England - تأسس 1694 وهو ثاني أقدم بنك مركزي في العالم)',
      foreignReservesUsd: '~$180 مليار دولار (إجمالي الاحتياطيات الرسمية والذهب والعملات الأجنبية)',
      currencyHistoryTimeline: [
        {
          year: 1944,
          eventAr: 'اتفاقية بريتون وودز والتراجع التدريجي عن مركز الصدارة لصالح الدولار الأمريكي',
          eventEn: 'Bretton Woods Post-WWII Sterling Adjustment (1944)',
          rateAtTime: '1 جنيه إسترليني = 4.03 دولار أمريكي',
          detailsAr: 'تأثير ديون الحرب العالمية الثانية الباهظة وبدء تفكك الإمبراطورية البريطانية.',
          detailsEn: 'Post-war debt burdens eroding sterling status as the world dominant currency.',
        },
        {
          year: 1992,
          eventAr: 'كارثة الأربعاء الأسود (Black Wednesday) والخروج من آلية الصرف الأوروبية ERM',
          eventEn: 'Black Wednesday & George Soros Speculative Attack (1992)',
          rateAtTime: 'انهيار الجنيه وفقدان مليارات الجنيهات من الاحتياطي في يوم واحد',
          detailsAr: 'مضاربة الملياردير جورج سوروس ضد الجنيه مما أجبر بريطانيا على تعويم عملتها والخروج من آلية الربط الأوروبية.',
          detailsEn: 'Speculative attack forcing the UK out of the European Exchange Rate Mechanism.',
        },
        {
          year: 2016,
          eventAr: 'استفتاء بريكست (Brexit) وتراجع الجنيه إلى أدنى مستوياته في أكثر من ثلاثة عقود',
          eventEn: 'Brexit Referendum Shock (June 2016)',
          rateAtTime: 'انخفاض الجنيه من 1.50 إلى 1.20 دولار',
          detailsAr: 'صدمة التصويت على مغادرة الاتحاد الأوروبي وإعادة تشكيل العلاقات التجارية والمالية الدولية للمملكة.',
          detailsEn: 'Historic devaluation following the shock vote to leave the European Union.',
        },
      ],
    },
  },

  // 21. جمهورية فرنسا
  fr: {
    countryId: 'fr',
    nameAr: 'الجمهورية الفرنسية',
    nameEn: 'French Republic',
    assassinations: [
      {
        year: '1962 (22 أغسطس)',
        targetAr: 'محاولة اغتيال الرئيس شارل ديغول (كمين بتي كلامار Petit-Clamart)',
        targetEn: 'Assassination Attempt on President Charles de Gaulle',
        perpetratorAr: 'منظمة الجيش السري (OAS) بقيادة المقدم جان باستيان تيري',
        perpetratorEn: 'Organisation Armée Secrète (OAS) military extremists',
        detailsAr:
          'كمين مسلح أمطر سيارة الرئاسة من طراز سيتروين DS بـ 187 طلقة رشاشة احتجاجاً على توقيع ديغول اتفاقيات إيفيان ومنح الجزائر استقلالها. نجا ديغول وزوجته بأعجوبة بفضل متانة نظام التعليق الهيدروليكي للسيارة.',
        detailsEn:
          'Machine-gun ambush firing 187 rounds at De Gaulle car over Algerian independence accords; survived unharmed.',
        impactAr:
          'إعدام باستيان تيري رمياً بالرصاص، وتنظيم استفتاء شعبي أقر الانتخاب المباشر لرئيس الجمهورية بالجمهورية الخامسة.',
        impactEn:
          'Prompted constitutional referendum establishing direct popular election of French presidents.',
      },
    ],
    terrorEvents: [
      {
        year: '2015 (13 نوفمبر)',
        titleAr: 'هجمات باريس الدامية (مسرح باتاكلان واستاد فرنسا)',
        titleEn: 'November 2015 Paris Attacks (Bataclan & Stade de France)',
        groupAr: 'تنظيم داعش (خلايا كوماندوز منسقة انطلقت من بروكسل وفرنسا)',
        groupEn: 'ISIS coordinated multi-site assault teams',
        casualties: 'استشهد 130 شخصاً وأصيب أكثر من 416 في أسوأ هجوم في فرنسا منذ الحرب العالمية الثانية',
        detailsAr:
          'تفجيرات انتحارية خارج استاد فرنسا، وإطلاق نار جماعي واحتجاز رهائن في مسرح باتاكلان والمقاهي الباريسية.',
        detailsEn:
          'Simultaneous suicide bombings and mass shootings targeting concert halls, restaurants, and stadium.',
        counterMeasureAr:
          'إعلان حالة الطوارئ الوطنية، وتكثيف الضربات الجوية على داعش في الرقة، وإطلاق عملية سنتينيل (Sentinelle) العسكرية الدائمة.',
        counterMeasureEn:
          'National state of emergency and continuous domestic military deployment Operation Sentinelle.',
      },
      {
        year: '2016 (14 يوليو)',
        titleAr: 'اعتداء نيس الإرهابي بشاحنة الدهس (يوم الباستيل)',
        titleEn: '2016 Nice Bastille Day Truck Attack',
        groupAr: 'متطرف موالٍ لتنظيم داعش (محمد لحويج بوهلال)',
        groupEn: 'ISIS inspired truck ramming attacker',
        casualties: 'مقتل 86 شخصاً وإصابة أكثر من 450 على كورنيش بروميناد ديزانيغليه',
        detailsAr:
          'شاحنة بضائع تزن 19 طناً اقتحمت حشود المحتفلين بالألعاب النارية ودهست المواطنين لمسافة 2 كم قبل تصفية السائق.',
        detailsEn:
          '19-ton cargo truck intentionally driven into crowds celebrating Bastille Day along Promenade des Anglais.',
        counterMeasureAr:
          'إغلاق الطرق بحواجز خرسانية مصفحة وتشديد الإجراءات الوقائية في جميع الاحتفالات العامة بفرنسا.',
        counterMeasureEn:
          'Permanent physical security bollards installed across French major public thoroughfares.',
      },
    ],
    foreignEscalations: [
      {
        year: '1956',
        opponentCountryAr: 'جمهورية مصر العربية',
        opponentCountryEn: 'Republic of Egypt',
        titleAr: 'العدوان الثلاثي على مصر (أزمة السويس)',
        titleEn: '1956 Suez Crisis Tripartite Aggression',
        causeAr: 'تأميم الرئيس جمال عبد الناصر لقناة السويس ودعم مصر لثورة التحرير الجزائرية.',
        causeEn: 'Nasser nationalization of Suez Canal and Egyptian military support to Algerian FLN.',
        nature: 'military_conflict',
        detailsAr:
          'عملية إنزال عسكري فرنسي بريطاني في بورسعيد بالتزامن مع هجوم إسرائيلي في سيناء، أحبطها الإنذار السوفيتي والرفض الأمريكي الحاسم.',
        detailsEn:
          'Anglo-French airborne assault on Port Said aborted under joint US-Soviet diplomatic ultimatum.',
        outcomeAr:
          'انسحاب مذل للقوات الفرنسية والبريطانية، ونهاية حقبة الهيمنة الاستعمارية الأوروبية التقليدية.',
        outcomeEn:
          'Historic humiliation signaling the end of traditional Anglo-French imperial global dominance.',
      },
    ],
    currencyEvolution: {
      code: 'EUR',
      symbol: '€',
      nameAr: 'اليورو (سابقاً: الفرنك الفرنسي FRF)',
      nameEn: 'Euro (formerly French Franc - FRF)',
      currentExchangeRateUsd: 'سعر الصرف العائم في منطقة اليورو: 1 EUR ≈ 1.08 - 1.10 USD',
      rateValueNumber: 0.92,
      pegStatusAr: 'عضو مؤسس في البنك المركزي الأوروبي (ECB) ومنطقة العملة الموحدة اليورو منذ 1999',
      pegStatusEn: 'Core founder of European Central Bank and the Eurozone single currency bloc since 1999',
      centralBankAr: 'بنك فرنسا (Banque de France - تأسس 1800) والبنك المركزي الأوروبي (ECB في فرانكفورت)',
      foreignReservesUsd: '~$250 مليار دولار (بما فيها رابع أكبر احتياطي ذهب رسمي في العالم: 2,437 طناً)',
      currencyHistoryTimeline: [
        {
          year: 1960,
          eventAr: 'إصدار "الفرنك الجديد" (Nouveau Franc) بقيادة الجنرال ديغول',
          eventEn: 'De Gaulle New Franc Monetary Reform (1960)',
          rateAtTime: '1 فرنك جديد = 100 فرنك قديم',
          detailsAr: 'إصلاح نقدي شامل لاستعادة هيبة الاقتصاد الفرنسي وقوته التنافسية في أوروبا.',
          detailsEn: 'Major currency redenomination restoring prestige and financial stabilization.',
        },
        {
          year: 1999,
          eventAr: 'إطلاق اليورو وإلغاء التعامل بالفرنك الفرنسي نهائياً عام 2002',
          eventEn: 'Adoption of the Euro (1999) & Franc Phase-Out',
          rateAtTime: '1 EUR = 6.55957 فرنك فرنسي (FRF)',
          detailsAr: 'تاريخ مفصلي تنازلت فيه باريس عن سيادتها النقدية المنفردة لصالح البنك المركزي الأوروبي.',
          detailsEn: 'Fixed conversion rate cementing irreversible European economic and monetary integration.',
        },
      ],
    },
  },

  // 22. جمهورية ألمانيا الاتحادية
  de: {
    countryId: 'de',
    nameAr: 'جمهورية ألمانيا الاتحادية',
    nameEn: 'Federal Republic of Germany',
    assassinations: [
      {
        year: '1989 (30 نوفمبر)',
        targetAr: 'ألفريد هيرهاوزن (رئيس مجلس إدارة دويتشه بنك Deutsche Bank ومستشار هيلموت كول)',
        targetEn: 'Alfred Herrhausen (Chairman of Deutsche Bank)',
        perpetratorAr: 'جماعة الجيش الأحمر الألمانية المتطرفة (RAF - بادر ماينهوف)',
        perpetratorEn: 'Red Army Faction (RAF - Third Generation)',
        detailsAr:
          'اغتيل في مدينة باد هومبورغ بتفجير عبوة ناسفة خارقة للدروع متطورة للغاية تعمل بالأشعة تحت الحمراء استهدفت سيارته المرسيدس المصفحة، وكان هيرهاوزن يدعو لإلغاء ديون دول العالم الثالث وتوحيد ألمانيا.',
        detailsEn:
          'High-tech infrared explosive plate blast destroying his armored Mercedes in Bad Homburg.',
        impactAr:
          'صدمة للنخبة المالية والسياسية الألمانية عشية سقوط جدار برلين وتوحيد شطري ألمانيا.',
        impactEn:
          'Stunned the political establishment during the delicate opening of the Berlin Wall.',
      },
      {
        year: '1991 (1 أبريل)',
        targetAr: 'ديتليف روفيدر (رئيس وكالة الخصخصة ترويهاند Treuhand المسؤولة عن دمج اقتصاد ألمانيا الشرقية)',
        targetEn: 'Detlev Rohwedder (Head of Treuhandanstalt)',
        perpetratorAr: 'جماعة الجيش الأحمر (RAF)',
        perpetratorEn: 'Red Army Faction (RAF)',
        detailsAr:
          'اغتيل برصاص قناص اخترق نافذة الطابق الأول لمنزله في دوسلدورف من مسافة 60 متراً بسبب دوره في خصخصة شركات القطاع العام في ألمانيا الشرقية السابقة.',
        detailsEn:
          'Sniper assassination through his villa window in Düsseldorf by RAF gunmen.',
        impactAr:
          'أحد آخر وأخطر اغتيالات الحرب الباردة، وشدد حراسة مسؤولي توحيد الاقتصاد الألماني.',
        impactEn:
          'Final high-profile RAF political assassination before the group formal disbandment.',
      },
    ],
    terrorEvents: [
      {
        year: '1972 (5 سبتمبر)',
        titleAr: 'مذبحة أولمبياد ميونيخ 1972',
        titleEn: '1972 Munich Olympics Massacre',
        groupAr: 'منظمة "أيلول الأسود" الفلسطينية',
        groupEn: 'Black September Organization',
        casualties: 'مقتل 11 رياضياً إسرائيلياً وضابط شرطة ألماني و5 من المنفذين',
        detailsAr:
          'اقتحام مقر البعثة الإسرائيلية في القرية الأولمبية واحتجاز الرياضيين رهائن، وفشل عملية التحرير الألمانية في مطار فورستنفلدبروك العسكري.',
        detailsEn:
          'Hostage crisis at the Olympic village ending in disastrous botched rescue shootout at military airfield.',
        counterMeasureAr:
          'تأسيس قوات النخبة الألمانية لمكافحة الإرهاب GSG 9 التي أصبحت من أشهر وأكفأ الوحدات التكتيكية في العالم.',
        counterMeasureEn:
          'Creation of the elite Federal Police counter-terror tactical unit GSG 9.',
      },
      {
        year: '2016 (19 ديسمبر)',
        titleAr: 'اعتداء سوق عيد الميلاد في برلين (ميدان برايتشايدبلاتز)',
        titleEn: '2016 Berlin Christmas Market Truck Attack',
        groupAr: 'تنظيم داعش (أنيس العامري)',
        groupEn: 'ISIS terrorist operative Anis Amri',
        casualties: 'استشهد 12 شخصاً وأصيب 56 بجروح خطيرة في دهس متعمد',
        detailsAr:
          'شاحنة بولندية اختطفها المهاجم واقتحم بها حشود المحتفلين بسوق عيد الميلاد بجوار كنيسة القيصر فيلهلم التذكارية.',
        detailsEn:
          'Hijacked semi-trailer truck deliberately driven into crowded Christmas market.',
        counterMeasureAr:
          'ملاحقة المنفذ وتصفيته في إيطاليا، وتشديد الرقابة على شبكات المتطرفين، وتأمين الساحات العامة بمصدات وحواجز أمنية دائمة.',
        counterMeasureEn:
          'Overhaul of federal asylum and intelligence data-sharing mechanisms across German Länder.',
      },
    ],
    foreignEscalations: [
      {
        year: '1948 – 1989',
        opponentCountryAr: 'الاتحاد السوفيتي وحلف وارسو',
        opponentCountryEn: 'Soviet Union & Warsaw Pact',
        titleAr: 'حصار برلين، جدار برلين (1961)، وجبهة الحرب الباردة المركزية',
        titleEn: 'Berlin Airlift (1948) & Berlin Wall Confrontation (1961–1989)',
        causeAr: 'تقسيم ألمانيا بعد الحرب العالمية الثانية والتنافس بين المعسكرين الغربي والشرقي.',
        causeEn: 'Post-WWII division of Germany into competing capitalist and communist states.',
        nature: 'border_escalation',
        detailsAr:
          'الجسر الجوي الأمريكي البريطاني لكسر حصار برلين 1948، وبناء جدار برلين الخرساني 1961 لمنع الهروب، والمواجهة العسكرية المباشرة بين الدبابات الأمريكية والسوفيتية عند نقطة تفتيش تشارلي (Checkpoint Charlie).',
        detailsEn:
          'Historic 1948 airlift, tank standoffs at Checkpoint Charlie, and iron curtain bifurcation.',
        outcomeAr:
          'سقوط جدار برلين في 9 نوفمبر 1989 وتوحيد ألمانيا رسمياً في 3 أكتوبر 1990 لتصبح القاطرة الاقتصادية للاتحاد الأوروبي.',
        outcomeEn:
          'Fall of the Berlin Wall in 1989 and official German Reunification in 1990.',
      },
    ],
    currencyEvolution: {
      code: 'EUR',
      symbol: '€',
      nameAr: 'اليورو (سابقاً: المارك الألماني Deutsche Mark - DEM)',
      nameEn: 'Euro (formerly Deutsche Mark - DEM)',
      currentExchangeRateUsd: 'سعر الصرف العائم في منطقة اليورو: 1 EUR ≈ 1.08 - 1.10 USD',
      rateValueNumber: 0.92,
      pegStatusAr: 'القوة النقدية والاقتصادية الأولى في أوروبا، والمارك الألماني كان أساس تأسيس اليورو وقواعد معاهدة ماستريخت',
      pegStatusEn: 'Dominant European economy; the historical Deutsche Mark served as the structural template for the Euro',
      centralBankAr: 'البنك الاتحادي الألماني (Deutsche Bundesbank في فرانكفورت) والبنك المركزي الأوروبي (ECB)',
      foreignReservesUsd: '~$310 مليار دولار (بما فيها ثاني أضخم احتياطي ذهب عالمي: 3,355 طناً)',
      currencyHistoryTimeline: [
        {
          year: 1948,
          eventAr: 'إصلاح النقد التاريخي وولادة المارك الألماني (D-Mark)',
          eventEn: '1948 Currency Reform Introducing the Deutsche Mark',
          rateAtTime: 'استبدال الرايخسمارك المنهار بالمارك الألماني الجديد',
          detailsAr: 'مهندس المعجزة الاقتصادية (Wirtschaftswunder) لودفيغ إرهارد الذي أطلق نهضة ألمانيا بعد دمار الحرب.',
          detailsEn: 'Ludwig Erhard monetary miracle sparking post-war industrial resurgence.',
        },
        {
          year: 1990,
          eventAr: 'الوحدة النقدية الألمانية واستبدال مارك ألمانيا الشرقية 1:1',
          eventEn: 'German Monetary Union (July 1990)',
          rateAtTime: 'تحويل الأجور والمدخرات بسعر متكافئ 1:1',
          detailsAr: 'قرار سياسي شجاع من المستشار هيلموت كول حقق الدمج الفوري لاقتصاد الشطرين.',
          detailsEn: 'Generous 1:1 conversion parity integrating East German citizens into the Federal Republic.',
        },
        {
          year: 1999,
          eventAr: 'استبدال المارك الألماني باليورو بمعدل تحويل ثابت',
          eventEn: 'Euro Transition (1999–2002)',
          rateAtTime: '1 EUR = 1.95583 مارك ألماني (DEM)',
          detailsAr: 'تثبيت البوندسبنك للنموذج الاستقراري لليورو ومواصلة قبول استبدال المارك بلا نهاية زمنية.',
          detailsEn: 'Uncapped timeline for redeeming legacy Deutsche Mark banknotes at the Bundesbank.',
        },
      ],
    },
  },

  // 23. جمهورية الهند
  in: {
    countryId: 'in',
    nameAr: 'جمهورية الهند',
    nameEn: 'Republic of India',
    assassinations: [
      {
        year: '1948 (30 يناير)',
        targetAr: 'المهاتما غاندي (أبو الأمة وقائد حركة الاستقلال باللاعنف)',
        targetEn: 'Mahatma Gandhi (Father of the Nation)',
        perpetratorAr: 'ناثورام غودسي (هندوسي متطرف متعصب)',
        perpetratorEn: 'Nathuram Godse (Hindu nationalist extremist)',
        detailsAr:
          'أطلق النار عليه من مسافة قريبة بثلاث رصاصات في صدره أثناء توجهه لصلاة المساء في نيودلهي، بسبب دعوات غاندي للسلام مع المسلمين وباكستان ودفع مستحقات مالية لإسلام أباد.',
        detailsEn:
          'Shot point-blank during evening prayers by a Hindu extremist opposing Gandhi reconciliatory stance.',
        impactAr:
          'صدمة عالمية، وحظر منظمة راشتريا سوايامسيفاك سانغ (RSS) مؤقتاً، وتثبيت الطابع العلماني للدستور الهندي برئاسة جواهر لال نهرو.',
        impactEn:
          'Galvanized India founding secular constitutional commitments under Jawaharlal Nehru.',
      },
      {
        year: '1984 (31 أكتوبر)',
        targetAr: 'أنديرا غاندي (رئيسة وزراء الهند)',
        targetEn: 'Indira Gandhi (Prime Minister of India)',
        perpetratorAr: 'حارساها الشخصيان من طائفة السيخ (ساتوانت سينغ وبينت سينغ)',
        perpetratorEn: 'Satwant Singh & Beant Singh (Sikh bodyguards)',
        detailsAr:
          'أطلق حراسها النار عليها بـ 33 رصاصة في حديقة مقر رئاسة الوزراء في نيودلهي، انتقاماً لعملية "النجم الأزرق" العسكرية التي أمرت بها لاقتحام المعبد الذهبي في أمريتسار وتطهيره من المسلحين السيخ.',
        detailsEn:
          'Assassinated by her own bodyguards in retaliation for Operation Blue Star assault on the Golden Temple.',
        impactAr:
          'اندلاع أعمال عنف دموية ضد السيخ أسفرت عن مقتل آلاف المدنيين، وتولي نجلها راجيف غاندي رئاسة الوزراء.',
        impactEn:
          'Triggered severe anti-Sikh riots across North India and accession of Rajiv Gandhi.',
      },
      {
        year: '1991 (21 مايو)',
        targetAr: 'راجيف غاندي (رئيس وزراء الهند الأسبق)',
        targetEn: 'Rajiv Gandhi (Former Prime Minister)',
        perpetratorAr: 'انتحارية من حركة "نمور تحرير تاميل إيلام" (LTTE) السريلانكية',
        perpetratorEn: 'Thenmozhi Rajaratnam (LTTE Tamil Tigers suicide bomber)',
        detailsAr:
          'فجرت انتحارية ترتدي حزاماً ناسفاً نفسها أثناء انحنائها لتحية راجيف غاندي بإكليل من الزهور في تجمع انتخابي في تاميل نادو، انتقاماً لتدخل الجيش الهندي كقوات حفظ سلام في سريلانكا.',
        detailsEn:
          'Suicide belt explosion during an election campaign rally in Sriperumbudur, Tamil Nadu.',
        impactAr:
          'صدمة سياسية أدت لتصنيف نمور التاميل كمنظمة إرهابية وإصلاحات اقتصادية تاريخية بقيادة ناراسيمها راو ومانموهان سينغ.',
        impactEn:
          'Paved the way for historic 1991 economic liberalization reforms under Narasimha Rao and Manmohan Singh.',
      },
    ],
    terrorEvents: [
      {
        year: '2008 (26 – 29 نوفمبر)',
        titleAr: 'هجمات مومباي الإرهابية 26/11 (فندق تاج محل ومحطة فكتوريا)',
        titleEn: '26/11 Mumbai Terror Attacks (Taj Mahal Palace & CST Station)',
        groupAr: 'تنظيم "لشكر طيبة" (Lashkar-e-Taiba) القادم عبر البحر',
        groupEn: 'Lashkar-e-Taiba 10-man seaborne commando unit',
        casualties: 'استشهد 166 مدنياً وأصيب أكثر من 300 في حصار واقتحام استمر أربعة أيام',
        detailsAr:
          'عشرة مسلحين تسللوا بقوارب مطاطية ونفذوا 12 هجوماً منسقاً بالأسلحة الرشاشة والقنابل شملت فندق تاج محل الفاخر، فندق أوبروي، محطة القطارات المركزية، ومقهى ليوبولد والمركز اليهودي.',
        detailsEn:
          'Coordinated commando strikes across Mumbai holding luxury hotels and transit hubs under four-day siege.',
        counterMeasureAr:
          'تصفية 9 مسلحين وأسر أجمل كساب وإعدامه لاحقاً، وتأسيس وكالة التحقيقات الوطنية (NIA) وتعزيز القوات البحرية وخفر السواحل.',
        counterMeasureEn:
          'Creation of the National Investigation Agency (NIA) and total coastal radar surveillance upgrade.',
      },
    ],
    foreignEscalations: [
      {
        year: '1947, 1965, 1971, 1999',
        opponentCountryAr: 'جمهورية باكستان الإسلامية',
        opponentCountryEn: 'Islamic Republic of Pakistan',
        titleAr: 'حروب الهند وباكستان وحرب كارجيل ونزاع كشمير النووي',
        titleEn: 'Indo-Pakistani Wars & 1999 Kargil High-Altitude Conflict',
        causeAr: 'النزاع على إقليم كشمير وتداعيات تقسيم شبه القارة الهندية عام 1947.',
        causeEn: 'Kashmir territorial dispute and territorial integrity standoffs.',
        nature: 'military_conflict',
        detailsAr:
          'حرب 1971 التاريخية التي أدت لتدخل الهند وفصل باكستان الشرقية وتأسيس دولة بنغلاديش المستقلة، وحرب كارجيل 1999 على مرتفعات الهيمالايا الجليدية كأول مواجهة عسكرية مباشرة بين قوتين نوويتين.',
        detailsEn:
          '1971 war leading to liberation of Bangladesh and 1999 Kargil high-altitude conflict between nuclear powers.',
        outcomeAr:
          'ترسيخ التفوق العسكري التقليدي الهندي في جنوب آسيا، وبقاء كشمير خط مواجهة نووي محمي باتفاقيات فك اشتباك هشة.',
        outcomeEn:
          'Cemented Indian regional primacy in South Asia and high-readiness nuclear deterrence.',
      },
      {
        year: '2020 – 2026',
        opponentCountryAr: 'جمهورية الصين الشعبية',
        opponentCountryEn: 'People’s Republic of China',
        titleAr: 'اشتباكات وادي غالوان الحدودية في لاداخ',
        titleEn: 'Galwan Valley Border Clashes in Eastern Ladakh',
        causeAr: 'نزاع ترسيم خط السيطرة الفعلية (LAC) في مرتفعات الهيمالايا والتنافس على البنية العسكرية الحدودية.',
        causeEn: 'Disputes along the Line of Actual Control (LAC) and infrastructure build-up in high altitudes.',
        nature: 'border_escalation',
        detailsAr:
          'اشتباكات بالأيدي والهراوات والحجارة دون إطلاق نار (وفق بروتوكولات الحدود) أسفرت عن مقتل 20 جندياً هندياً وعدة جنود صينيين، وتمركز عشرات الآلاف من الجنود والمدرعات على جانبي الحدود.',
        detailsEn:
          'Hand-to-hand combat without firearms resulting in fatalities and massive military mobilization.',
        outcomeAr:
          'حظر الهند لمئات التطبيقات الرقمية الصينية (بما فيها تيك توك)، وتكثيف التحالف الاستراتيجي مع كتلة كواد (QUAD) والغرب.',
        outcomeEn:
          'India banned Chinese tech apps and deepened Indo-Pacific QUAD defense partnerships.',
      },
    ],
    currencyEvolution: {
      code: 'INR',
      symbol: '₹',
      nameAr: 'روبية هندية',
      nameEn: 'Indian Rupee',
      currentExchangeRateUsd: 'سعر الصرف المدار: 1 USD ≈ 83.5 - 84.5 INR',
      rateValueNumber: 84.0,
      pegStatusAr: 'تعويم مدار بإشراف بنك الاحتياطي الهندي (RBI) مع احتياطيات قياسية تتجاوز 700 مليار دولار',
      pegStatusEn: 'Managed floating regime guided by Reserve Bank of India with record FX reserves exceeding $700 billion',
      centralBankAr: 'بنك الاحتياطي الهندي (Reserve Bank of India - RBI تأسس 1935 في مومباي)',
      foreignReservesUsd: '~$705 مليار دولار (رابع أضخم احتياطي نقد أجنبي في العالم)',
      currencyHistoryTimeline: [
        {
          year: 1947,
          eventAr: 'استقلال الهند وتحديد سعر الروبية مع الجنيه الإسترليني',
          eventEn: 'Post-Independence Rupee Parity (1947)',
          rateAtTime: '1 USD = 3.30 روبية هندية (1 جنيه إسترليني = 13.33 روبية)',
          detailsAr: 'ربط أولي بالإسترليني قبل التحول إلى سلة عملات موسعة.',
          detailsEn: 'Initial sterling linkage prior to dynamic central bank basket management.',
        },
        {
          year: 1991,
          eventAr: 'أزمة ميزان المدفوعات ورهن الذهب والتحول لتعويم الروبية',
          eventEn: '1991 Balance of Payments Crisis & Devaluation',
          rateAtTime: 'انخفاض الروبية من 18 إلى 26 ثم 31 روبية للدولار',
          detailsAr: 'نقل أطنان الذهب جواً إلى لندن كضمان لقروض صندوق النقد، وبداية الإصلاحات الهيكلية الكبرى.',
          detailsEn: 'Airlifting central bank gold reserves to London securing emergency credit before historic market reforms.',
        },
        {
          year: 2016,
          eventAr: 'قرار إبطال العملة المفاجئ (Demonetisation) لرئيس الوزراء ناريندرا مودي',
          eventEn: '2016 Demonetisation Shock by Narendra Modi',
          rateAtTime: 'إلغاء أوراق فئة 500 و 1,000 روبية خلال ساعات (86% من النقد المتداول)',
          detailsAr: 'قرار صادم لمكافحة الأموال السوداء والفساد سرّع التحول الهائل للهند نحو الدفع الرقمي ونظام UPI الرائد عالمياً.',
          detailsEn: 'Abruptly invalidated 86% of cash in circulation, accelerating the world fastest digital payments revolution (UPI).',
        },
      ],
    },
  },

  // 24. جمهورية باكستان الإسلامية
  pk: {
    countryId: 'pk',
    nameAr: 'جمهورية باكستان الإسلامية',
    nameEn: 'Islamic Republic of Pakistan',
    assassinations: [
      {
        year: '1951 (16 أكتوبر)',
        targetAr: 'لياقت علي خان (أول رئيس وزراء لباكستان ورفيق محمد علي جناح)',
        targetEn: 'Liaquat Ali Khan (First Prime Minister of Pakistan)',
        perpetratorAr: 'سيد أكبر (مهاجم أفغاني متعصب)',
        perpetratorEn: 'Said Akbar (Afghan assassin)',
        detailsAr:
          'اغتيل برصاصتين في صدره أثناء إلقائه خطاباً أمام 100 ألف مواطن في حديقة كامبني في روالبندي (المعروفة اليوم بحديقة لياقت باغ)، وقُتل المهاجم فوراً برصاص الشرطة.',
        detailsEn:
          'Shot twice while addressing a rally in Rawalpindi; declared "Quaid-e-Millat" (Leader of the Nation).',
        impactAr:
          'فراغ دستوري وسياسي مبكر ساهم في صعود نفوذ المؤسسة العسكرية وتأخير إقرار أول دستور حتى عام 1956.',
        impactEn:
          'Early constitutional vacuum facilitating the military subsequent central political role.',
      },
      {
        year: '1988 (17 أغسطس)',
        targetAr: 'الجنرال محمد ضياء الحق (رئيس جمهورية باكستان وقائد الجيش)',
        targetEn: 'General Muhammad Zia-ul-Haq (President of Pakistan)',
        perpetratorAr: 'انفجار غامض أو تخريب طائرة هرقل C-130 الرئاسية (باك 1)',
        perpetratorEn: 'Mysterious mid-air sabotage of presidential C-130 Hercules',
        detailsAr:
          'تحطمت الطائرة بعد إقلاعها بدقائق من مطار باهاوالبور عقب مشاهدة تجارب دبابات أمريكية، مما أسفر عن مقتل الرئيس، والسفير الأمريكي أرنولد رافيل، والجنرال هربرت واسوم، و28 من كبار قادة الجيش.',
        detailsEn:
          'Catastrophic mid-air crash of presidential aircraft killing Zia-ul-Haq and US Ambassador Arnold Raphel.',
        impactAr:
          'نهاية حقبة الحكم العسكري التي استمرت 11 عاماً، وتنظيم انتخابات حرة قادت بينظير بوتو لرئاسة الوزراء.',
        impactEn:
          'Ended 11 years of military regime leading to elections won by Benazir Bhutto.',
      },
      {
        year: '2007 (27 ديسمبر)',
        targetAr: 'بينظير بوتو (رئيسة وزراء باكستان لولايتين وزعيمة حزب الشعب)',
        targetEn: 'Benazir Bhutto (Former Prime Minister)',
        perpetratorAr: 'مسلح وانتحاري من تنظيم "حركة طالبان باكستان" (TTP)',
        perpetratorEn: 'Tehrik-i-Taliban Pakistan (TTP) suicide and gunfire attack',
        detailsAr:
          'اغتيلت أثناء مغادرتها تجمعاً انتخابياً حاشداً في حديقة لياقت باغ بروالبندي (نفس الموقع الذي اغتيل فيه لياقت علي خان)، حيث أطلق المهاجم النار عليها قبل أن يفجر نفسه قرب موكبها.',
        detailsEn:
          'Gun and suicide bomb attack as she stood waving to supporters through her vehicle sunroof in Rawalpindi.',
        impactAr:
          'صدمة عارمة وفوضى في البلاد، ووصول حزب الشعب للسلطة وتولي زوجها آصف علي زرداري رئاسة الجمهورية.',
        impactEn:
          'Worldwide outrage, postponement of general elections, and accession of Asif Ali Zardari.',
      },
    ],
    terrorEvents: [
      {
        year: '2014 (16 ديسمبر)',
        titleAr: 'مجزرة مدرسة الجيش العامة في بيشاور (APS Peshawar Massacre)',
        titleEn: 'Army Public School Peshawar Massacre',
        groupAr: 'حركة طالبان باكستان (TTP)',
        groupEn: 'Tehrik-i-Taliban Pakistan (TTP)',
        casualties: 'استشهد 149 شخصاً بينهم 132 طفلاً وطالباً مدرسياً في أبشع جريمة في تاريخ باكستان',
        detailsAr:
          'اقتحم ستة مسلحين يرتدون أحزمة ناسفة فصول المدرسة وفتحوا النار عشوائياً على الأطفال والمعلمين انتقاماً لعملية "ضرب عضب" العسكرية في وزيرستان.',
        detailsEn:
          'Six heavily armed militants stormed the school methodically shooting children in classrooms.',
        counterMeasureAr:
          'إجماع وطني غير مسبوق، إقرار "خطة العمل الوطنية لمكافحة الإرهاب"، رفع الحظر عن عقوبة الإعدام، وتكثيف ملاحقة الجماعات المتطرفة.',
        counterMeasureEn:
          'Enactment of the 20-point National Action Plan and establishment of military anti-terror courts.',
      },
    ],
    foreignEscalations: [
      {
        year: '1998 (مايو)',
        opponentCountryAr: 'جمهورية الهند والولايات المتحدة',
        opponentCountryEn: 'Republic of India & United States',
        titleAr: 'التجارب النووية الباكستانية (عملية شاغاي Chagai-I) وتوازن الردع',
        titleEn: 'Chagai-I Nuclear Tests & Nuclear Deterrence Parity (1998)',
        causeAr: 'رد باكستان المباشر على التجارب النووية الهندية (بوخران-2) لتأكيد الردع العسكري.',
        causeEn: 'Direct response to Indian nuclear tests establishing mutual assured destruction.',
        nature: 'military_conflict',
        detailsAr:
          'أجرت باكستان برئاسة نواز شريف 6 تفجيرات نووية تحت الأرض في تلال راس كوه بإقليم بلوشستان، لتصبح أول دولة في العالم الإسلامي وسابع دولة عالمياً تمتلك السلاح النووي رسمياً رغم التهديدات بالعقوبات الاقتصادية الدولية.',
        detailsEn:
          'Pakistan detonated six underground nuclear tests becoming the first Muslim-majority nuclear power.',
        outcomeAr:
          'فرض عقوبات غربية، وترسيخ توازن الرعب والردع الاستراتيجي الدائم مع الهند في جنوب آسيا.',
        outcomeEn:
          'Established permanent nuclear deterrence equilibrium preventing full-scale conventional wars.',
      },
    ],
    currencyEvolution: {
      code: 'PKR',
      symbol: '₨',
      nameAr: 'روبية باكستانية',
      nameEn: 'Pakistani Rupee',
      currentExchangeRateUsd: 'السعر الحر المدار: 1 USD ≈ 277 - 280 PKR',
      rateValueNumber: 278.5,
      pegStatusAr: 'تعويم مدار مرتبط ببرامج تسهيل الصندوق الممدد (EFF) لصندوق النقد الدولي، مع رقابة مشددة لمنع المضاربات',
      pegStatusEn: 'Market-determined floating exchange rate conditioned by IMF standby and extended credit programs',
      centralBankAr: 'بنك دولة باكستان (State Bank of Pakistan - SBP تأسس 1948 في كراتشي)',
      foreignReservesUsd: '~$14.5 مليار دولار (مدعومة بالودائع الصديقة السعودية والإماراتية والصينية وقروض IMF)',
      currencyHistoryTimeline: [
        {
          year: 1948,
          eventAr: 'إصدار الروبية الباكستانية المستقلة وتأسيس بنك دولة باكستان',
          eventEn: 'Inauguration of State Bank of Pakistan & Pakistani Rupee',
          rateAtTime: '1 USD = 3.31 روبية باكستانية',
          detailsAr: 'افتتح القائد محمد علي جناح بنك الدولة قبل وفاته بأسابيع لتأكيد السيادة الاقتصادية.',
          detailsEn: 'Muhammad Ali Jinnah personally inaugurated the central bank cementing sovereignty.',
        },
        {
          year: 2018,
          eventAr: 'سلسلة التخفيضات الكبرى لقيمة الروبية والتفاوض على برامج صندوق النقد',
          eventEn: 'Multi-stage Currency Devaluations (2018–2022)',
          rateAtTime: 'انخفاض الروبية من 105 إلى 160 ثم 225 للدولار',
          detailsAr: 'استنزاف الاحتياطيات النقدية وتراكم مدفوعات خدمة الدين الخارجي وارتفاع فواتير استيراد الطاقة.',
          detailsEn: 'Severe balance of payments stress and mounting external debt repayment schedules.',
        },
        {
          year: 2023,
          eventAr: 'تحرير سعر الصرف وتجاوز الروبية عتبة 300 قبل الاستقرار النسبي عند ~278',
          eventEn: 'Market-Clearing Exchange Rate Reform (2023–2024)',
          rateAtTime: '1 USD = 278 PKR',
          detailsAr: 'تطبيق شروط صندوق النقد بالقضاء على الفجوة بين السعر الرسمي وسوق الصرافة ومحاربة التهريب.',
          detailsEn: 'Elimination of artificial exchange rate controls and cracking down on informal Hawala channels.',
        },
      ],
    },
  },

  // 25. أوكرانيا
  ua: {
    countryId: 'ua',
    nameAr: 'أوكرانيا',
    nameEn: 'Ukraine',
    assassinations: [
      {
        year: '2016 (20 يوليو)',
        targetAr: 'بافل شيريميت (صحفي استقصائي بيلاروسي-أوكراني بارز)',
        targetEn: 'Pavel Sheremet (Investigative Journalist)',
        perpetratorAr: 'اغتيال بعبوة ناسفة لاصقة تحت السيارة وسط كييف',
        perpetratorEn: 'Car bomb detonation in central Kyiv',
        detailsAr:
          'انفجرت عبوة ناسفة تم التحكم بها عن بعد في سيارته عند تقاطع شارعي إيفان فرانكو وبوهدان خملنيتسكي في قلب العاصمة كييف أثناء توجهه لتقديم برنامجه الصباحي في راديو فيستي.',
        detailsEn:
          'Remote-detonated car bomb in downtown Kyiv while driving to host his morning radio broadcast.',
        impactAr:
          'إثارة قلق دولي حول حرية الصحافة وسلامة الإعلاميين والنشطاء في أوكرانيا في أعقاب ثورة الميدان.',
        impactEn:
          'Major domestic scandal intensifying focus on internal security and political assassinations.',
      },
    ],
    terrorEvents: [
      {
        year: '2022 – 2026',
        titleAr: 'الهجمات الصاروخية والمسيرة الشاملة على البنية التحتية للطاقة والمدن',
        titleEn: 'Infrastructure Bombardment & Civilian Center Strikes',
        groupAr: 'القوات المسلحة الروسية وصواريخ كروز وباليستية ومسيرات شاهد-136',
        groupEn: 'Mass Russian missile and Shahed-136 drone barrages',
        casualties: 'عشرات الآلاف من الضحايا المدنيين والعسكريين وتدمير أكثر من 50% من شبكة الكهرباء الأوكرانية',
        detailsAr:
          'ضربات منتظمة استهدفت محطات التوليد الكهرومائية والحرارية ومحطات التحويل وسدود المياه في دنيبرو وخاركيف وكييف وأوديسا، متسببة في انقطاع التيار الكهربائي عن ملايين المواطنين.',
        detailsEn:
          'Systemic targeting of power grid, civilian heating infrastructure, and grain export ports.',
        counterMeasureAr:
          'نشر منظومات باتريوت الأمريكية وإيريس تي IRIS-T الألمانية وسامب/تي SAMP/T، وإصلاح شبكات الطاقة بدعم غربي متواصل.',
        counterMeasureEn:
          'Deployment of Western air defenses (Patriot, IRIS-T, NASAMS) to defend critical national infrastructure.',
      },
    ],
    foreignEscalations: [
      {
        year: '2014',
        opponentCountryAr: 'الاتحاد الروسي',
        opponentCountryEn: 'Russian Federation',
        titleAr: 'ضم شبه جزيرة القرم واندلاع حرب الدونباس',
        titleEn: 'Annexation of Crimea & War in Donbas (2014)',
        causeAr: 'عزل الرئيس فيكتور يانوكوفيتش بعد ثورة الميدان الأوروبي وتوجه أوكرانيا نحو الاتحاد الأوروبي وحلف الناتو.',
        causeEn: 'Euromaidan revolution ousting Yanukovych triggering Russian covert intervention.',
        nature: 'military_conflict',
        detailsAr:
          'انتشار "الرجال الخضر الصغار" (قوات روسية بلا شارات) في القرم وتنظيم استفتاء ضمها، بالتزامن مع اندلاع تمرد مسلح موالٍ لروسيا في دونيتسك ولوغانسك.',
        detailsEn:
          'Bloodless seizure of Crimea followed by intense proxy conflict in the industrial Donbas region.',
        outcomeAr:
          'توقيع اتفاقيات مينسك الهشة، وبدء إعادة هيكلة الجيش الأوكراني وتدريبه وفق معايير الناتو.',
        outcomeEn:
          'Minsk agreements ceasefire failures setting the stage for full-scale military conflict.',
      },
      {
        year: '2022 – 2026',
        opponentCountryAr: 'الاتحاد الروسي',
        opponentCountryEn: 'Russian Federation',
        titleAr: 'الغزو الروسي الشامل لأوكرانيا (أكبر حرب في أوروبا منذ الحرب العالمية الثانية)',
        titleEn: 'Full-Scale Russian Invasion of Ukraine (2022–2026)',
        causeAr: 'مطالب روسيا بوقف توسع الناتو شرقاً وتجريد أوكرانيا من السلاح، وتمسك كييف بسيادتها ووحدة أراضيها.',
        causeEn: 'Russian strategic objectives to halt NATO expansion and subjugate Kyiv sovereignty.',
        nature: 'military_conflict',
        detailsAr:
          'هجوم واسع من ثلاثة محاور استهدف كييف وخاركيف وخيرسون، صمود أوكراني في معركة كييف، استعادة خيرسون وخاركيف في هجوم مضاد، ثم حرب استنزاف وخنادق ومعارك مسيرات ضارية على طول جبهة تتجاوز 1,200 كم في زابوريجيا ودونيتسك وكورسك.',
        detailsEn:
          'High-intensity industrialized war involving hypersonic missiles, trench warfare, and autonomous drones.',
        outcomeAr:
          'تدمير هائل للمدن، نزوح 8 ملايين لاجئ، حصول أوكرانيا على وضع مرشح لعضوية الاتحاد الأوروبي ومساعدات عسكرية غربية تفوق 200 مليار دولار.',
        outcomeEn:
          'Radical geopolitical realignment, EU candidate status, and unprecedented Western defense integration.',
      },
    ],
    currencyEvolution: {
      code: 'UAH',
      symbol: '₴',
      nameAr: 'هريفنيا أوكرانية',
      nameEn: 'Ukrainian Hryvnia',
      currentExchangeRateUsd: 'السعر المدار بإشراف البنك الوطني: 1 USD ≈ 41.2 - 41.8 UAH',
      rateValueNumber: 41.5,
      pegStatusAr: 'نظام ربط مدار تدريجي تحت ظروف الأحكام العرفية واقتصاد الحرب، مدعوم بحزم المساعدات المالية المباشرة من الاتحاد الأوروبي والولايات المتحدة',
      pegStatusEn: 'Managed flex exchange rate under wartime martial law supported by international direct budget subsidies',
      centralBankAr: 'البنك الوطني الأوكراني (National Bank of Ukraine - NBU في كييف)',
      foreignReservesUsd: '~$42 مليار دولار (مستوى تاريخي صامد بفضل المنح والقروض الغربية وتماسك الجهاز المصرفي الرقمي)',
      currencyHistoryTimeline: [
        {
          year: 1996,
          eventAr: 'إصدار الهريفنيا الأوكرانية واستبدال الكاربوفانتس (Karbovanets) المؤقت',
          eventEn: 'Introduction of the Hryvnia Replacing Karbovanets (1996)',
          rateAtTime: '1 USD = 1.76 هريفنيا (UAH)',
          detailsAr: 'إصلاح نقدي ناجح برئاسة فيكتور يوشينكو قضى على التضخم المفرط في الحقبة السوفيتية.',
          detailsEn: 'Landmark stabilization reform under Viktor Yushchenko ending post-Soviet hyperinflation.',
        },
        {
          year: 2014,
          eventAr: 'صدمة ضم القرم وحرب الدونباس وتراجع الهريفنيا بمقدار الثلثين',
          eventEn: '2014 War Crisis & Currency Plunge',
          rateAtTime: 'انخفاض الهريفنيا من 8.0 إلى 16 ثم 25 UAH للدولار',
          detailsAr: 'فقدان 20% من القاعدة الصناعية في الدونباس واستنزاف الاحتياطيات النقدية.',
          detailsEn: 'Severe economic contraction following loss of industrial capacity in Donbas.',
        },
        {
          year: 2022,
          eventAr: 'الغزو الروسي الشامل وتثبيت سعر الصرف الطارئ عند 36.56 ثم الانتقال للتعويم المدار عند ~41.5',
          eventEn: 'Wartime Emergency Peg & Controlled Float Transition',
          rateAtTime: '1 USD = 41.5 UAH',
          detailsAr: 'إدارة نقدية استثنائية منعت انهيار العملة وحافظت على عمل المنظومة المصرفية الإلكترونية تحت القصف.',
          detailsEn: 'Remarkable institutional resilience keeping retail banking fully operational amid total war.',
        },
      ],
    },
  },

  // 26. اليابان
  jp: {
    countryId: 'jp',
    nameAr: 'اليابان',
    nameEn: 'Japan',
    assassinations: [
      {
        year: '1960 (12 أكتوبر)',
        targetAr: 'إينجيرو أسانوما (زعيم الحزب الاشتراكي الياباني)',
        targetEn: 'Inejiro Asanuma (Leader of the Japan Socialist Party)',
        perpetratorAr: 'أوتويا ياماغوتشي (قومي يميني ياباني متطرف يبلغ 17 عاماً)',
        perpetratorEn: 'Otoya Yamaguchi (17-year-old ultra-nationalist)',
        detailsAr:
          'اغتيل بسيف ساموراي تقليدي (واكيزاشي) على منصة مناظرة سياسية متلفزة على الهواء مباشرة في قاعة هيبيا بطوكيو، بسبب مواقفه المؤيدة للصين الشعبية وانتقاده للمعاهدة الأمنية الأمريكية اليابانية.',
        detailsEn:
          'Assassinated with a traditional samurai short sword during a live televised political debate in Tokyo.',
        impactAr:
          'صدمة عارمة للمجتمع الياباني بعد مشاهدة الجريمة على التلفزيون، وحظر المظاهرات العنيفة وسكاكين الساموراي في الأماكن العامة.',
        impactEn:
          'Iconic historic tragedy leading to strict knife possession legislation across Japan.',
      },
      {
        year: '2022 (8 يوليو)',
        targetAr: 'شينزو آبي (رئيس وزراء اليابان الأطول خدمة في التاريخ الحديث)',
        targetEn: 'Shinzo Abe (Former Prime Minister of Japan)',
        perpetratorAr: 'تيتسويا ياماغامي (عسكري سابق في قوات الدفاع الذاتي البحرية)',
        perpetratorEn: 'Tetsuya Yamagami (Former Maritime Self-Defense Force veteran)',
        detailsAr:
          'اغتيل بسلاح ناري يدوي الصنع أطلقه المهاجم من الخلف أثناء إلقاء آبي كلمة انتخابية في شوارع مدينة نارا لدعم مرشح لحزبه. برر المهاجم جريمته بنقمته على "كنيسة التوحيد" (طائفة مون) التي تبرعت لها والدته بكل ثروتها وارتباط الحزب الليبرالي الحاكم بها.',
        detailsEn:
          'Shot from behind with a homemade double-barrel firearm during a street campaign speech in Nara.',
        impactAr:
          'أكبر زلزال سياسي في اليابان ما بعد الحرب العالمية الثانية، استقالة قائد الشرطة الوطنية، والتدقيق الشامل في تمويل المنظمات الدينية.',
        impactEn:
          'National police chief resignation and profound overhaul of VIP protection protocols in Japan.',
      },
    ],
    terrorEvents: [
      {
        year: '1995 (20 مارس)',
        titleAr: 'هجوم غاز السارين في مترو أنفاق طوكيو',
        titleEn: 'Tokyo Subway Sarin Gas Attack',
        groupAr: 'جماعة "أوم شينريكيو" (Aum Shinrikyo) الدينية المتطرفة بقيادة شوكو أساهارا',
        groupEn: 'Aum Shinrikyo doomsday cult',
        casualties: 'مقتل 14 شخصاً وإصابة أكثر من 5,500 آخرين بتسمم بالغاز وأضرار في الرؤية',
        detailsAr:
          'أطلق خمسة من عناصر الجماعة غاز السارين الكيميائي السائل المغلف في أكياس بلاستيكية ثقبوها برؤوس المظلات في خمسة قطارات مختلفة لشبكة مترو طوكيو في ساعة الذروة.',
        detailsEn:
          'Deadly sarin nerve agent released on five coordinated subway trains converging on government quarter Kasumigaseki.',
        counterMeasureAr:
          'مداهمة مجمعات الجماعة ومصادرة أسلحتها الكيميائية والبيولوجية، وإعدام شوكو أساهارا و12 من قادة الجماعة شنقاً في 2018.',
        counterMeasureEn:
          'Total dismantling of the cult and execution of founder Shoko Asahara and 12 disciples in 2018.',
      },
    ],
    foreignEscalations: [
      {
        year: '1945 – 2026',
        opponentCountryAr: 'روسيا والصين وكوريا الشمالية',
        opponentCountryEn: 'Russia, China & North Korea',
        titleAr: 'نزاع جزر الكوريل / الأراضي الشمالية ونزاع جزر سينكاكو والتجارب الباليستية',
        titleEn: 'Northern Territories / Senkaku Islands & North Korean Missile Overflights',
        causeAr: 'نزاع السيادة على الجزر بعد الحرب العالمية الثانية، والتجارب الصاروخية لكوريا الشمالية فوق الأجواء اليابانية.',
        causeEn: 'Post-WWII territorial disputes and regional ballistic/naval perimeter challenges.',
        nature: 'border_escalation',
        detailsAr:
          'عدم توقيع معاهدة سلام رسمية مع موسكو حتى اليوم بسبب جزر الكوريل الجنوبية الأربع، تحليق صواريخ كوريا الشمالية الباليستية فوق جزيرة هوكايدو وتفعيل صافرات الإنذار (J-Alert)، والتوترات المستمرة مع السفن الصينية حول جزر سينكاكو.',
        detailsEn:
          'Absence of formal peace treaty with Russia, North Korean missile overflights triggering J-Alert sirens.',
        outcomeAr:
          'تحول تاريخي في العقيدة العسكرية السلمية لليابان، ومضاعفة الميزانية الدفاعية لتصل إلى 2% من الناتج المحلي، وشراء صواريخ توماهوك الأمريكية وصياغة قدرات "الضربة المضادة".',
        outcomeEn:
          'Historic doubling of defense spending to 2% of GDP and acquisition of counterstrike missile systems.',
      },
    ],
    currencyEvolution: {
      code: 'JPY',
      symbol: '¥',
      nameAr: 'ين ياباني',
      nameEn: 'Japanese Yen',
      currentExchangeRateUsd: 'سعر الصرف العائم: 1 USD ≈ 148 - 155 JPY (بعد تجاوز حاجز الـ 160 ين للدولار تاريخياً)',
      rateValueNumber: 151.0,
      pegStatusAr: 'ثالث أكثر عملة تداولاً واحتياطياً في العالم، تعويم حر بإدارة بنك اليابان (BOJ) الذي أنهى سياسة أسعار الفائدة السالبة عام 2024',
      pegStatusEn: 'Third most traded global reserve currency; ended historic negative interest rate policy in 2024',
      centralBankAr: 'بنك اليابان (Bank of Japan - BOJ تأسس 1882 في نيهونباشي بطوكيو)',
      foreignReservesUsd: '~$1.25 تريليون دولار (ثاني أكبر احتياطي نقد أجنبي في العالم بعد الصين)',
      currencyHistoryTimeline: [
        {
          year: 1949,
          eventAr: 'خطة دود (Dodge Line) وتثبيت الين عند 360 ين للدولار في عهد الاحتلال الأمريكي',
          eventEn: '1949 Dodge Line & Historic 360 JPY/USD Peg',
          rateAtTime: '1 USD = 360 JPY',
          detailsAr: 'تثبيت نقدي استمر حتى عام 1971 قاد المعجزة الصناعية اليابانية وغزو المنتجات اليابانية للأسواق العالمية.',
          detailsEn: 'Fixed exchange rate engine powering post-war Japanese high-growth industrial expansion.',
        },
        {
          year: 1985,
          eventAr: 'اتفاقية فندق بلازا (Plaza Accord) والارتفاع الصاروخي لقيمة الين',
          eventEn: '1985 Plaza Accord & Unprecedented Yen Appreciation',
          rateAtTime: 'ارتفاع الين من 240 إلى 120 ين للدولار خلال عامين',
          detailsAr: 'اتفاق بين القوى الكبرى لخفض الدولار الأمريكي، أدى لتضخم أصول الاقتصاد الياباني وانفجار فقاعة العقارات ودخول "العقود الضائعة".',
          detailsEn: 'G5 accord doubling the yen value, inadvertently inflating the asset bubble and subsequent "Lost Decades".',
        },
        {
          year: 2024,
          eventAr: 'تراجع الين إلى أدنى مستوى منذ 34 عاماً (161 ين للدولار) وتدخل بنك اليابان التاريخي لدعمه',
          eventEn: '34-Year Low at 161 JPY/USD & Historic BOJ FX Interventions',
          rateAtTime: '1 USD = 155 - 161 JPY',
          detailsAr: 'إنهاء سياسة الفائدة السالبة، وضخ أكثر من 60 مليار دولار في أسواق العملات لضبط وتيرة انخفاض الين.',
          detailsEn: 'Ending negative interest rates and executing record multi-billion dollar market defense interventions.',
        },
      ],
    },
  },

  // 27. سلطنة عمان
  om: {
    countryId: 'om',
    nameAr: 'سلطنة عمان',
    nameEn: 'Oman',
    assassinations: [],
    terrorEvents: [
      {
        year: '2024 (15 يوليو)',
        titleAr: 'اعتداء وادي الكبير الإرهابي بمحافظة مسقط',
        titleEn: 'Wadi Kabir Mosque Terrorist Attack',
        groupAr: 'تنظيم داعش الإرهابي (ثلاثة عناصر متطرفة تم تحييدهم جميعاً)',
        groupEn: 'ISIS affiliated extremist cell',
        casualties: 'استشهاد رجل أمن ومقتل 5 مدنيين وإصابة 28، والقضاء على الإرهابيين الثلاثة',
        detailsAr: 'إطلاق نار استهدف مسجداً في منطقة الوادي الكبير بمسقط. تصدت شرطة عمان السلطانية والأجهزة الأمنية للمهاجمين وأنهت العملية بسرعة وحزم.',
        detailsEn: 'Gun attack targeting a religious gathering in Wadi Kabir, promptly neutralized by Royal Oman Police special forces.',
        counterMeasureAr: 'تحييد الإرهابيين فورياً، إحكام الطوق الأمني، وملاحقة وتفكيك أية خلايا مشبوهة، مع إشادة دولية بيقظة الأجهزة الأمنية العمانية.',
        counterMeasureEn: 'Rapid tactical containment, elimination of shooters and reinforcement of counter-radicalization monitoring.',
      },
    ],
    foreignEscalations: [
      {
        year: '1965 – 1975',
        titleAr: 'حرب ظفار ودحر التمرد المسلح وتوحيد السلطنة',
        titleEn: 'Dhofar War & Restoration of Territorial Integrity',
        adversaryAr: 'جبهة تحرير ظفار المدعومة من قوى يسارية إقليمية',
        adversaryEn: 'Dhofar Liberation Front supported by regional leftist blocs',
        detailsAr: 'نزاع مسلح طويل خاضته القوات المسلحة العمانية بقيادة جلالة السلطان قابوس بن سعيد رحمه الله بدعم من حلفاء إقليميين، انتهى بالقضاء على التمرد وإطلاق نهضة التنمية الشاملة.',
        detailsEn: 'Counter-insurgency campaign led by Sultan Qaboos concluding with decisive peace and nationwide modernization.',
        outcomeAr: 'تحقيق الاستقرار التام، مد شبكات الطرق والمدارس والخدمات لظفار، وإرساء الدولة العمانية الحديثة المستقرة.',
        outcomeEn: 'Complete pacification, socio-economic integration of southern provinces and founding modern Oman.',
      },
      {
        year: '2020 (11 يناير)',
        titleAr: 'الانتقال الدستوري التاريخي السلس للحكم لجلالة السلطان هيثم بن طارق',
        titleEn: 'Historic Constitutional Succession of Sultan Haitham bin Tarik',
        adversaryAr: 'تحدي استقرار سياسي تاريخي بعد 50 عاماً من حكم السلطان قابوس',
        adversaryEn: 'Constitutional succession following 50-year legacy of Sultan Qaboos',
        detailsAr: 'فتح وصية السلطان الراحل قابوس بن سعيد أمام مجلس العائلة ومجلس الدفاع الوطني ومبايعة جلالة السلطان هيثم بن طارق سلطاناً لعمان في انتقال سيادي بهر العالم بهدوئه وانضباطه.',
        detailsEn: 'Smooth sovereign succession fulfilling the late Sultan’s sealed testament before the Defense Council.',
        outcomeAr: 'إطلاق رؤية عمان 2040 وإعادة هيكلة الجهاز الإداري للدولة وتحقيق فائض مالي وسداد قياسي للدين العام.',
        outcomeEn: 'Launch of Oman Vision 2040, fiscal restructuring and extensive public debt reduction.',
      },
    ],
    currencyEvolution: {
      code: 'OMR',
      symbol: 'ر.ع',
      nameAr: 'ريال عماني',
      nameEn: 'Omani Rial',
      currentExchangeRateUsd: '1 OMR = 2.60 USD (أو 1 USD = 0.3845 OMR)',
      rateValueNumber: 0.3845,
      pegStatusAr: 'مربوط رسمياً ومحكم بالدولار الأمريكي منذ 1973 (ثالث أغلى عملة في العالم)',
      pegStatusEn: 'Officially pegged to USD since 1973; 3rd highest valued currency globally',
      centralBankAr: 'البنك المركزي العماني (CBO - تأسس 1974)',
      foreignReservesUsd: '~$18.5 مليار دولار + أصول جهاز الاستثمار العماني (~$45 مليار دولار)',
      currencyHistoryTimeline: [
        {
          year: 1970,
          eventAr: 'إصدار الريال السعيدي كأول عملة وطنية موحدة بعد الروبية الخليجية',
          eventEn: 'Introduction of Saidi Rial replacing Gulf Rupee',
          rateAtTime: '1 ر.س = 1 جنيه إسترليني',
          detailsAr: 'توحيد النظام النقدي مع فجر النهضة المباركة وتأسيس مجلس النقد العماني.',
          detailsEn: 'Monetary unification under the nascent modern sultanate.',
        },
        {
          year: 1973,
          eventAr: 'استبدال الريال السعيدي بالريال العماني وتثبيته بالدولار الأمريكي',
          eventEn: 'Adoption of Omani Rial and Official USD Peg',
          rateAtTime: '1 OMR = 2.895 USD ثم عُدل إلى 2.60 USD عام 1986',
          detailsAr: 'تثبيت نقدي استراتيجي حمى القوة الشرائية وجعل الريال العماني من أقوى العملات في العالم.',
          detailsEn: 'Strategic currency peg anchoring macroeconomic stability and low inflation.',
        },
      ],
    },
  },

  // 28. مملكة البحرين
  bh: {
    countryId: 'bh',
    nameAr: 'مملكة البحرين',
    nameEn: 'Bahrain',
    assassinations: [],
    terrorEvents: [
      {
        year: '2011 – 2017',
        titleAr: 'إحباط العمليات الإرهابية وخلايا تهريب المتفجرات التابعة لسرايا الأشتر',
        titleEn: 'Counter-Terror Operations Against Al-Ashtar Militant Cells',
        groupAr: 'سرايا الأشتر وسرايا المختار بتوجيه وتسليح استخباري إيراني',
        groupEn: 'IRGC-backed militant cells including Al-Ashtar Brigades',
        casualties: 'استشهاد العشرات من رجال الشرطة والمواطنين',
        detailsAr: 'سلسلة من التفجيرات بالعبوات الناسفة استهدفت دوريات الشرطة وأنابيب النفط، أحبطت الأجهزة الأمنية محاولات تهريب متفجرات C4 وأسلحة عبر السواحل.',
        detailsEn: 'Coordinated bombing and weapons-smuggling attempts intercepted by Bahraini maritime and interior forces.',
        counterMeasureAr: 'تصنيف الخلايا كتنظيمات إرهابية دولية، تفعيل منظومات حماية المنشآت، وتجفيف شبكات التمويل والتجنيد.',
        counterMeasureEn: 'Global terror designations, coastal radar expansion, and dismantling extremist financial pipelines.',
      },
    ],
    foreignEscalations: [
      {
        year: '2011 (14 مارس)',
        titleAr: 'دخول قوات درع الجزيرة الخليجية لحماية المنشآت الحيوية في البحرين',
        titleEn: 'Peninsula Shield Deployment to Safeguard Strategic Assets',
        adversaryAr: 'أزمة أمنية ومحاولات شل المرافق الحيوية وإسقاط النظام الدستوري',
        adversaryEn: 'Acute internal unrest and threats against constitutional order',
        detailsAr: 'بطلب سيادي رسمي من مملكة البحرين، انتشرت وحدات من قوات درع الجزيرة المشتركة لتأمين المنشآت النفطية والحيوية والحيوية بموجب اتفاقية الدفاع الخليجي المشترك.',
        detailsEn: 'Sovereign deployment of GCC Peninsula Shield forces protecting vital infrastructure under the Mutual Defense Pact.',
        outcomeAr: 'استعادة النظام العام، حماية الاستقرار الدستوري، وإطلاق حوار التوافق الوطني.',
        outcomeEn: 'Restoration of public security, safeguarding constitutional governance and economic continuity.',
      },
    ],
    currencyEvolution: {
      code: 'BHD',
      symbol: '.د.ب',
      nameAr: 'دينار بحريني',
      nameEn: 'Bahraini Dinar',
      currentExchangeRateUsd: '1 BHD = 2.659 USD (أو 1 USD = 0.376 BHD)',
      rateValueNumber: 0.376,
      pegStatusAr: 'مربوط رسمياً ومحكم بالدولار الأمريكي منذ عام 1980 (ثاني أعلى عملة قيمة في العالم)',
      pegStatusEn: 'Officially pegged to USD; 2nd highest valued currency globally',
      centralBankAr: 'مصرف البحرين المركزي (CBB - تأسس 1973 كمؤسسة نقد ثم مصرف مركزي)',
      foreignReservesUsd: '~$5.5 مليار دولار + دعم استقرار الصندوق الخليجي المالي',
      currencyHistoryTimeline: [
        {
          year: 1965,
          eventAr: 'إصدار الدينار البحريني ليحل محل روبية الخليج',
          eventEn: 'Creation of Bahraini Dinar replacing Gulf Rupee',
          rateAtTime: '1 BHD = 10 روبيات خليجية',
          detailsAr: 'تأسيس مجلس نقد البحرين وإصدار أول عملة ورقية سيادية خاصة.',
          detailsEn: 'First sovereign paper currency issuance under Bahrain Currency Board.',
        },
        {
          year: 1980,
          eventAr: 'تثبيت الدينار البحريني رسمياً عند 0.376 دينار للدولار الأمريكي',
          eventEn: 'Official Peg to US Dollar at 0.376 BHD/USD',
          rateAtTime: '1 USD = 0.376 BHD (1 BHD = 2.659 USD)',
          detailsAr: 'تثبيت سعر الصرف الصارم لحماية المركز المالي للمنامة كعاصمة للمصارف الإسلامية والتمويل الدولي.',
          detailsEn: 'Fixed dollar peg anchoring Bahrain’s stature as the premier Islamic banking hub in the Gulf.',
        },
      ],
    },
  },

  // 29. الجمهورية التونسية
  tn: {
    countryId: 'tn',
    nameAr: 'الجمهورية التونسية',
    nameEn: 'Tunisia',
    assassinations: [
      {
        year: '2013 (6 فبراير و25 يوليو)',
        titleAr: 'اغتيال شكري بلعيد ومحمد البراهمي',
        titleEn: 'Assassination of Chokri Belaid and Mohamed Brahmi',
        targetAr: 'شكري بلعيد ومحمد البراهمي (قادة المعارضة اليسارية والقومية)',
        targetEn: 'Chokri Belaid & Mohamed Brahmi (Opposition Leaders)',
        perpetratorAr: 'تنظيم أنصار الشريعة الإرهابي',
        perpetratorEn: 'Ansar al-Sharia terrorist organization',
        detailsAr: 'اغتيال سياسي هز الشارع التونسي وأدخل البلاد في أزمة سياسية حادة كادت تطيح بالمسار الديمقراطي.',
        detailsEn: 'High-profile political assassinations triggering widespread protests and the National Dialogue.',
        impactAr: 'تشكيل الرباعي الراعي للحوار الوطني (نال جائزة نوبل للسلام 2015) وصياغة دستور 2014.',
        impactEn: 'Formation of the Nobel Peace Prize-winning National Dialogue Quartet and adoption of the 2014 Constitution.',
      },
    ],
    terrorEvents: [
      {
        year: '2015 (18 مارس و26 يونيو)',
        titleAr: 'هجوما متحف باردو ومنتجع سوسة الإرهابيان',
        titleEn: 'Bardo National Museum and Sousse Beach Terrorist Attacks',
        groupAr: 'تنظيم داعش الإرهابي (خلايا تسللت عبر الحدود الليبية)',
        groupEn: 'ISIS terrorist network infiltrating via Libyan borders',
        casualties: 'مقتل 60 شخصاً معظمهم من السياح الأجانب وإصابة العشرات',
        detailsAr: 'هجومان داميان استهدفا السياحة التونسية؛ الأول بمتحف باردو في العاصمة والثاني بفندق إمبريال مرحبا بسوسة.',
        detailsEn: 'Deadly mass shootings targeting international tourism at the Bardo Museum and Sousse beach.',
        counterMeasureAr: 'تشييد جدار أمني ومنظومة مراقبة إلكترونية على طول الحدود مع ليبيا، وتعزيز القوات الخاصة للحرس والجيش.',
        counterMeasureEn: 'Construction of an electronic border security barrier with Libya and elite counter-terror restructuring.',
      },
    ],
    foreignEscalations: [],
    currencyEvolution: {
      code: 'TND',
      symbol: 'د.ت',
      nameAr: 'دينار تونسي',
      nameEn: 'Tunisian Dinar',
      currentExchangeRateUsd: '1 USD = 3.10 TND (أو 1 TND = 0.32 USD)',
      rateValueNumber: 3.10,
      pegStatusAr: 'تعويم موجه ومرن مقابل سلة عملات يقودها اليورو والدولار',
      pegStatusEn: 'Managed floating exchange rate tracked against EUR and USD trade basket',
      centralBankAr: 'البنك المركزي التونسي (BCT - تأسس 1958)',
      foreignReservesUsd: '~$8.2 مليار دولار (تغطي نحو 115 يوماً من الواردات)',
      currencyHistoryTimeline: [
        {
          year: 1958,
          eventAr: 'إنشاء الدينار التونسي وفك الارتباط بالفرنك الفرنسي',
          eventEn: 'Creation of Tunisian Dinar Replacing French Franc',
          rateAtTime: '1 TND = 1000 فرنك قديم',
          detailsAr: 'إعلان السيادة النقدية الوطنية بعد الاستقلال وتأسيس البنك المركزي التونسي.',
          detailsEn: 'Post-independence monetary sovereignty decree.',
        },
        {
          year: 2024,
          eventAr: 'صمود الدينار التونسي في وجه الضغوط بفضل عوائد السياحة وتحويلات المغتربين',
          eventEn: 'Dinar Resilience via Remittances and Tourism Inflows',
          rateAtTime: 'استقرار حول 3.08 - 3.12 دينار للدولار',
          detailsAr: 'الحفاظ على مستويات مقبولة من الاحتياطي النقدي وتجنب الاقتراض الخارجي المفرط.',
          detailsEn: 'Monetary stability anchored by record tourism revenues and expatriate remittances.',
        },
      ],
    },
  },

  // 30. دولة ليبيا
  ly: {
    countryId: 'ly',
    nameAr: 'دولة ليبيا',
    nameEn: 'Libya',
    assassinations: [
      {
        year: '2012 (11 سبتمبر)',
        titleAr: 'الهجوم على المجمع الدبلوماسي الأمريكي واغتيال السفير كريستوفر ستيفنز في بنغازي',
        titleEn: 'Benghazi Attack & Assassination of US Ambassador J. Christopher Stevens',
        targetAr: 'السفير الأمريكي كريس ستيفنز و3 دبلوماسيين وعناصر أمن',
        targetEn: 'US Ambassador J. Christopher Stevens and 3 American personnel',
        perpetratorAr: 'جماعة أنصار الشريعة الإرهابية',
        perpetratorEn: 'Ansar al-Sharia militant group in Benghazi',
        detailsAr: 'اقتحام مسلح وحرق للمجمع الدبلوماسي الأمريكي ومقر وكالة المخابرات المركزية في بنغازي.',
        detailsEn: 'Armed assault on the US diplomatic mission compound in Benghazi resulting in the ambassador’s death.',
        impactAr: 'انسحاب البعثات الدبلوماسية الغربية، تصعيد العمليات الأمريكية لمكافحة الإرهاب، وتداعيات سياسية عاصفة في واشنطن.',
        impactEn: 'Full Western diplomatic evacuation and intensified US global counter-terror posture.',
      },
    ],
    terrorEvents: [
      {
        year: '2015 – 2016',
        titleAr: 'سيطرة تنظيم داعش على مدينة سرت وعملية "البنيان المرصوص" لتحريرها',
        titleEn: 'ISIS Seizure of Sirte and Operation Al-Bunyan Al-Marsous',
        groupAr: 'تنظيم داعش في شمال إفريقيا (ولاية طرابلس وسرت)',
        groupEn: 'Islamic State (ISIS) North African branch',
        casualties: 'مئات الشهداء من القوات الليبية ومقتل أكثر من 1,500 عنصر داعشي',
        detailsAr: 'حاول التنظيم إقامة معقل رئيسي له على سواحل البحر المتوسط في سرت. شنت القوات الليبية بدعم جوي دولي عملية كاسحة طهرت المدينة بالكامل.',
        detailsEn: 'Major counter-offensive liberating the central coastal city of Sirte from ISIS control.',
        counterMeasureAr: 'تحرير كامل سرت وتأمين الهلال النفطي وإحباط مشروع التمدد الإرهابي في شمال إفريقيا.',
        counterMeasureEn: 'Decisive destruction of ISIS coastal proto-state and reclaiming oil crescent facilities.',
      },
    ],
    foreignEscalations: [
      {
        year: '2011 (مارس - أكتوبر)',
        titleAr: 'ثورة 17 فبراير وتدخل حلف شمال الأطلسي (الناتو - قرار مجلس الأمن 1973)',
        titleEn: '2011 Libyan Civil War and NATO Military Intervention (UNSCR 1973)',
        adversaryAr: 'نظام معمر القذافي وقوات حلف الناتو (عملية الحامي الموحد)',
        adversaryEn: 'Gaddafi regime forces versus NATO Operation Unified Protector',
        detailsAr: 'انتفاضة مسلحة ضد حكم القذافي أعقبها تدخل جوي مكثف من حلف الناتو استمر 7 أشهر وانتهى بمقتل القذافي وسقوط نظامه.',
        detailsEn: 'Armed revolution culminating in a 7-month NATO aerial campaign and the collapse of the Gaddafi regime.',
        outcomeAr: 'سقوط النظام ودخول ليبيا في مرحلة انتقالية معقدة من التنافس السياسي والعسكري على الشرعية والموارد النفطية.',
        outcomeEn: 'Regime overthrow followed by fragmented transitional governance and contest over hydrocarbon resources.',
      },
    ],
    currencyEvolution: {
      code: 'LYD',
      symbol: 'د.ل',
      nameAr: 'دينار ليبي',
      nameEn: 'Libyan Dinar',
      currentExchangeRateUsd: '1 USD = 4.85 LYD (السعر الرسمي لدى مصرف ليبيا المركزي)',
      rateValueNumber: 4.85,
      pegStatusAr: 'مربوط بسلة حقوق السحب الخاصة (SDR) لدى صندوق النقد الدولي',
      pegStatusEn: 'Pegged to IMF Special Drawing Rights (SDR) basket',
      centralBankAr: 'مصرف ليبيا المركزي (تأسس 1956 في طرابلس وبنغازي)',
      foreignReservesUsd: '~$82 مليار دولار (أكبر احتياطي نقد أجنبي في إفريقيا نسبة لعدد السكان)',
      currencyHistoryTimeline: [
        {
          year: 1971,
          eventAr: 'إصدار الدينار الليبي ليحل محل الجنيه الليبي',
          eventEn: 'Adoption of Libyan Dinar replacing Libyan Pound',
          rateAtTime: '1 دينار = 1 جنيه = 2.80 دولار',
          detailsAr: 'تأميم القطاع المصرفي وإطلاق الدينار الليبي بقيمة مرتفعة مدعومة بعائدات النفط.',
          detailsEn: 'Nationalization of banking sector and petrodollar-backed currency parity.',
        },
        {
          year: 2021,
          eventAr: 'توحيد سعر الصرف الرسمي في ليبيا عند 4.48 دينار للدولار وإنهاء ازدواجية السعر',
          eventEn: 'Historic Exchange Rate Unification at 4.48 LYD/USD',
          rateAtTime: '1 USD = 4.48 LYD (خُفض تدريجياً لامتصاص السوق الموازية)',
          detailsAr: 'اتفاق محافظي مصرف ليبيا المركزي لتوحيد السياسة النقدية وإنهاء التفاوت الحاد بين الشرق والغرب.',
          detailsEn: 'Central bank consensus establishing a unified national exchange rate.',
        },
      ],
    },
  },

  // 31. جمهورية كوريا الجنوبية
  kr: {
    countryId: 'kr',
    nameAr: 'جمهورية كوريا الجنوبية',
    nameEn: 'South Korea',
    assassinations: [
      {
        year: '1979 (26 أكتوبر)',
        titleAr: 'اغتيال الرئيس بارك تشونغ هي في سيول',
        titleEn: 'Assassination of President Park Chung-hee',
        targetAr: 'الرئيس الكوري الجنوبي بارك تشونغ هي',
        targetEn: 'President Park Chung-hee (Architect of the Miracle on the Han River)',
        perpetratorAr: 'كيم جاي كيو (مدير وكالة المخابرات المركزية الكورية KCIA)',
        perpetratorEn: 'Kim Jae-gyu (Director of Korean Central Intelligence Agency)',
        detailsAr: 'أطلق مدير المخابرات النار على الرئيس أثناء مأدبة عشاء خاصة داخل المجمع الرئاسي، معللاً ذلك بالخلاف حول التعامل مع الاحتجاجات الديمقراطية.',
        detailsEn: 'Assassinated during a private dinner by his own intelligence chief, precipitating military martial law.',
        impactAr: 'إعلان الأحكام العرفية وصعود اللواء تشون دو هوان وانطلاق انتفاضة غوانغجو التاريخية من أجل الديمقراطية.',
        impactEn: 'Declaration of martial law leading to the Chun Doo-hwan coup and the Gwangju Democratization Movement.',
      },
    ],
    terrorEvents: [
      {
        year: '1987 (29 نوفمبر)',
        titleAr: 'تفجير طائرة الخطوط الجوية الكورية (الرحلة 858)',
        titleEn: 'Korean Air Flight 858 Bombing',
        groupAr: 'عملاء استخبارات كوريا الشمالية (تفجير بقنبلة موقوتة فوق بحر أندامان)',
        groupEn: 'North Korean state intelligence operatives',
        casualties: 'مقتل جميع الركاب وطاقم الطائرة البالغ عددهم 115 شخصاً',
        detailsAr: 'زرع عملاء لكوريا الشمالية قنبلة على متن طائرة ركاب كورية متجهة من بغداد إلى سيول لزعزعة استقرار كوريا قبل أولمبياد سيول 1988.',
        detailsEn: 'Mid-air bombing of a civilian airliner planned to disrupt the upcoming 1988 Seoul Olympic Games.',
        counterMeasureAr: 'إدراج كوريا الشمالية على قائمة الدول الراعية للإرهاب وتشديد منظومات الأمن الجوي العالمية.',
        counterMeasureEn: 'Designation of North Korea on the US State Sponsors of Terrorism list and tightening aviation protocols.',
      },
    ],
    foreignEscalations: [
      {
        year: '1950 – 1953',
        titleAr: 'الحرب الكورية واتفاق الهدنة وتقسيم شبه الجزيرة (خط العرض 38)',
        titleEn: 'The Korean War & 1953 Armistice Agreement (DMZ)',
        adversaryAr: 'كوريا الشمالية والصين الشعبية مدعومة من الاتحاد السوفيتي',
        adversaryEn: 'North Korea & China backed by USSR versus UN Coalition',
        detailsAr: 'غزو مفاجئ شنته كوريا الشمالية تحول لحرب دولية دموية شارك فيها تحالف الأمم المتحدة بقيادة الولايات المتحدة. انتهت بتوقيع هدنة (دون معاهدة سلام دائمة) وتأسيس المنطقة منزوعة السلاح DMZ.',
        detailsEn: 'Devastating conflict concluding with the 1953 Armistice establishing the heavily fortified Demilitarized Zone.',
        outcomeAr: 'توقيع معاهدة الدفاع المشترك مع الولايات المتحدة ووجود 28,500 جندي أمريكي في كوريا حتى اليوم كدرع ردع نووي وتقليدي.',
        outcomeEn: 'US–ROK Mutual Defense Treaty and permanent stationing of 28,500 US troops deterring northern aggression.',
      },
      {
        year: '2010 (مارس ونوفمبر)',
        titleAr: 'إغراق الفرقاطة تشونان وقصف جزيرة يونبيونغ',
        titleEn: 'Sinking of ROKS Cheonan and Bombardment of Yeonpyeong Island',
        adversaryAr: 'القوات البحرية والمدفعية لجيش كوريا الشمالية',
        adversaryEn: 'North Korean military forces',
        detailsAr: 'استهداف الفرقاطة البحرية الكورية الجنوبية بطوربيد شمالي أسفر عن غرقها واستشهاد 46 بحاراً، تلاه قصف مدفعي لجزيرة يونبيونغ.',
        detailsEn: 'Torpedo attack sinking a South Korean corvette followed by artillery strikes on Yeonpyeong Island.',
        outcomeAr: 'تطبيق عقوبات 24 مايو الصارمة، إعادة تنظيم منظومات الردع المدفعي السريع، وتعزيز منظومة THAAD للدفاع الصاروخي.',
        outcomeEn: 'Imposition of May 24 sanctions and deployment of THAAD anti-missile interceptors.',
      },
    ],
    currencyEvolution: {
      code: 'KRW',
      symbol: '₩',
      nameAr: 'وون كوري جنوبي',
      nameEn: 'South Korean Won',
      currentExchangeRateUsd: '1 USD = 1,360 KRW',
      rateValueNumber: 1360.0,
      pegStatusAr: 'سعر صرف عائم بالكامل في الأسواق المالية العالمية',
      pegStatusEn: 'Fully floating currency operating in free global capital markets',
      centralBankAr: 'بنك كوريا (Bank of Korea - BOK تأسس 1950)',
      foreignReservesUsd: '~$415 مليار دولار (بين أكبر 10 احتياطيات نقد أجنبي في العالم)',
      currencyHistoryTimeline: [
        {
          year: 1962,
          eventAr: 'إعادة تقديم الوون كعملة وطنية بديلة للهوان بعد الإصلاح النقدي',
          eventEn: 'Re-introduction of the Won Replacing Hwan',
          rateAtTime: '1 وون = 10 هوان',
          detailsAr: 'إصلاح نقدي أطلقه الرئيس بارك تشونغ هي لتمويل خطط التصنيع الخمسية وتأسيس شركات التشيبول الكبرى.',
          detailsEn: 'Monetary reform mobilizing domestic capital for Chaebol export-led industrialization.',
        },
        {
          year: 1997,
          eventAr: 'الأزمة المالية الآسيوية وحزمة إنقاذ صندوق النقد الدولي وحملة تبرع الذهب الوطنية',
          eventEn: '1997 Asian Financial Crisis & National Gold Collection Campaign',
          rateAtTime: 'انهيار الوون مؤقتاً إلى 1,900 وون للدولار',
          detailsAr: 'أزمة ديون حادة استدعت إنقاذ صندوق النقد الدولي، واشتهر الشعب الكوري بحملة وطنية للتبرع بالذهب لإنقاذ احتياطي الدولة وسداد الديون قبل موعدها.',
          detailsEn: 'Historic crisis prompting citizens to donate personal gold to repay IMF debts years ahead of schedule.',
        },
      ],
    },
  },
};



/**
 * دالة استرجاع الأحداث السيادية والتاريخية والتحولات النقدية لأي دولة مع تسوية المعرفات
 */
const COUNTRY_ID_ALIASES = {
  saudi: 'sa',
  ksa: 'sa',
  usa: 'us',
  unitedstates: 'us',
  russia: 'ru',
  china: 'cn',
  uae: 'ae',
  emirates: 'ae',
  britain: 'gb',
  uk: 'gb',
  unitedkingdom: 'gb',
  germany: 'de',
  deutschland: 'de',
  france: 'fr',
  japan: 'jp',
  nippon: 'jp',
  india: 'in',
  bharat: 'in',
  pakistan: 'pk',
  turkey: 'tr',
  turkiye: 'tr',
  syria: 'sy',
  jordan: 'jo',
  kuwait: 'kw',
  qatar: 'qa',
  yemen: 'ye',
  sudan: 'sd',
  libya: 'ly',
  tunisia: 'tn',
  algeria: 'dz',
  morocco: 'ma',
  iraq: 'iq',
  lebanon: 'lb',
  israel: 'il',
  iran: 'ir',
  ukraine: 'ua',
  southkorea: 'kr',
  korea: 'kr',
  brazil: 'br',
  southafrica: 'za',
};

import { getCountryTimelineYearEvents } from './timelineYearEventsDB.js';

export function getCountryHistoricalEventsData(countryId) {
  if (!countryId) return null;
  const normalized = countryId.toLowerCase().trim();
  const resolvedId = COUNTRY_ID_ALIASES[normalized] || normalized;
  
  const timelineEvents = getCountryTimelineYearEvents(resolvedId);

  if (COUNTRY_HISTORICAL_EVENTS_DB[resolvedId]) {
    return {
      ...COUNTRY_HISTORICAL_EVENTS_DB[resolvedId],
      timelineEvents,
    };
  }

  // في حال لم تكن الدولة مدرجة تفصيلاً، إنشاء ملف دقيق قياسي استناداً للرموز والعملة والأحداث الميدانية
  return {
    countryId: resolvedId,
    nameAr: 'سجل الدولة السيادي',
    nameEn: 'Sovereign Country Record',
    assassinations: [],
    terrorEvents: [],
    foreignEscalations: [],
    timelineEvents,
    currencyEvolution: {
      code: 'LOCAL',
      symbol: '¤',
      nameAr: 'العملة الوطنية',
      nameEn: 'National Currency',
      currentExchangeRateUsd: 'متاح عبر الربط المباشر مع البنك المركزي',
      rateValueNumber: 1.0,
      pegStatusAr: 'نظام الصرف المعتمد لدى البنك المركزي',
      pegStatusEn: 'Official central bank exchange regime',
      centralBankAr: 'البنك المركزي الوطني',
      foreignReservesUsd: 'احتياطيات موثقة لدى صندوق النقد الدولي',
      currencyHistoryTimeline: [
        {
          year: 1960,
          eventAr: 'تأسيس النظام النقدي الوطني والبنك المركزي',
          eventEn: 'Establishment of national central banking',
          rateAtTime: 'السعر التأسيسي',
          detailsAr: 'تنظيم تداول الأوراق النقدية والاحتياطي القانوني.',
          detailsEn: 'Statutory banknote issuance and foreign reserves mandate.',
        },
        {
          year: 2026,
          eventAr: 'تطبيق معايير الامتثال المالي الدولي والتحول الرقمي',
          eventEn: 'Digital banking compliance & modern monetary framework',
          rateAtTime: 'مستقر وفق المؤشرات الاقتصادية الكلية',
          detailsAr: 'تطوير المدفوعات اللحظية ومكافحة غسل الأموال.',
          detailsEn: 'Integration with real-time settlement and macro prudential standards.',
        },
      ],
    },
  };
}
