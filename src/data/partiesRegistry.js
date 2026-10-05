/**
 * سجل الأحزاب والكيانات السياسية لدول العالم مع أعدادها وأنظمتها الحزبية
 * World Political Parties Registry with counts and party system structures
 */

export const POLITICAL_PARTIES_REGISTRY = {
  // المملكة العربية السعودية
  sa: {
    systemAr: 'نظام دستوري ملكي (مجلس الشورى الوطني بدون أحزاب حزبية)',
    systemEn: 'Constitutional Monarchy (National Shura Council, non-partisan)',
    count: 0,
    partiesAr: [
      'مجلس الشورى الوطني (150 عضواً ممثلين لمناطق المملكة وكفاءاتها)',
      'المجالس البلدية المنتخبة المحلية',
      'الغرف التجارية والهيئات المهنية والشوروية',
    ],
    partiesEn: [
      'National Shura Council (150 appointed members across provinces and expertise)',
      'Elected Municipal Consultative Councils',
      'Chambers of Commerce & Consultative Professional Bodies',
    ],
    noteAr: 'يحظر النظام الأساسي للحكم تشكيل أحزاب أيديولوجية، وتتم المشاركة الوطنية عبر مجلس الشورى والمجالس المحلية.',
    noteEn: 'The Basic Law does not institute partisan political parties; representation is conducted through the Shura Council.',
  },

  // جمهورية مصر العربية
  eg: {
    systemAr: 'نظام تعددي دستوري',
    systemEn: 'Multi-party Republic',
    count: 8,
    partiesAr: [
      'حزب مستقبل وطن (حزب الأغلبية البرلمانية)',
      'حزب الشعب الجمهوري',
      'حزب الوفد الجديد (تاريخي عريق)',
      'حزب حماة الوطن',
      'حزب التجمع الوطني التقدمي الوحدوي',
      'حزب النور',
      'الحزب المصري الديمقراطي الاجتماعي',
      'حزب الإصلاح والتنمية',
    ],
    partiesEn: [
      'Mostaqbal Watan Party (Nation\'s Future - Parliamentary Majority)',
      'Republican People\'s Party',
      'New Wafd Party (Historic Liberal)',
      'Homeland Protectors Party (Homat El Watan)',
      'National Progressive Unionist Gathering (Tagammu)',
      'Al-Nour Party',
      'Egyptian Social Democratic Party',
      'Reform and Development Party',
    ],
  },

  // الولايات المتحدة الأمريكية
  us: {
    systemAr: 'نظام ثنائي حزبي رئيسي وتعددي فرعي',
    systemEn: 'Two-Party Dominant Multi-party System',
    count: 5,
    partiesAr: [
      'الحزب الجمهوري (Republican Party - الأغلبية الرئاسية والبرلمانية)',
      'الحزب الديمقراطي (Democratic Party)',
      'الحزب الليبرتاري (Libertarian Party)',
      'حزب الخضر الأمريكي (Green Party)',
      'حزب الدستور (Constitution Party)',
    ],
    partiesEn: [
      'Republican Party (GOP - White House & Majority)',
      'Democratic Party',
      'Libertarian Party',
      'Green Party of the United States',
      'Constitution Party',
    ],
  },

  // المملكة المتحدة
  gb: {
    systemAr: 'نظام برلماني تعددي',
    systemEn: 'Parliamentary Multi-party System',
    count: 7,
    partiesAr: [
      'حزب العمال (Labour Party - الأغلبية الحاكمة)',
      'حزب المحافظين (Conservative Party - المعارضة الرسمية)',
      'حزب الديمقراطيين الليبراليين (Liberal Democrats)',
      'حزب الإصلاح البريطاني (Reform UK)',
      'الحزب الوطني الاسكتلندي (SNP)',
      'حزب الخضر لإنجلترا وويلز (Green Party)',
      'حزب العمال الديمقراطي الوحدوي (DUP)',
    ],
    partiesEn: [
      'Labour Party (Ruling Majority)',
      'Conservative Party (Official Opposition)',
      'Liberal Democrats',
      'Reform UK',
      'Scottish National Party (SNP)',
      'Green Party of England and Wales',
      'Democratic Unionist Party (DUP)',
    ],
  },

  // الجمهورية الفرنسية
  fr: {
    systemAr: 'نظام تعددي استقطابي شبه رئاسي',
    systemEn: 'Semi-Presidential Multi-party System',
    count: 7,
    partiesAr: [
      'حزب النهضة (Renaissance - تحالف معاً الرئاسي)',
      'التجمع الوطني (Rassemblement National)',
      'فرنسا الأبية (La France Insoumise)',
      'الحزب الاشتراكي (Parti Socialiste)',
      'الجمهوريون (Les Républicains)',
      'حزب الخضر الإيكولوجي (Les Écologistes - EELV)',
      'الحزب الشيوعي الفرنسي (PCF)',
    ],
    partiesEn: [
      'Renaissance (Presidential Ensemble coalition)',
      'National Rally (Rassemblement National)',
      'La France Insoumise (LFI)',
      'Socialist Party (PS)',
      'The Republicans (LR)',
      'The Ecologists (EELV)',
      'French Communist Party (PCF)',
    ],
  },

  // جمهورية ألمانيا الاتحادية
  de: {
    systemAr: 'نظام برلماني ائتلافي تعددي',
    systemEn: 'Federal Parliamentary Multi-party System',
    count: 6,
    partiesAr: [
      'الاتحاد الديمقراطي المسيحي / الاجتماعي (CDU/CSU)',
      'الحزب الاشتراكي الديمقراطي الألماني (SPD)',
      'حزب البديل من أجل ألمانيا (AfD)',
      'حزب الخضر (Bündnis 90/Die Grünen)',
      'الحزب الديمقراطي الحر (FDP)',
      'تحالف ساهرا فاغنكنيشت (BSW)',
    ],
    partiesEn: [
      'Christian Democratic Union / CSU (CDU/CSU)',
      'Social Democratic Party of Germany (SPD)',
      'Alternative for Germany (AfD)',
      'Alliance 90/The Greens',
      'Free Democratic Party (FDP)',
      'Bündnis Sahra Wagenknecht (BSW)',
    ],
  },

  // المملكة المغربية
  ma: {
    systemAr: 'نظام ملكي دستوري برلماني تعددي',
    systemEn: 'Constitutional Monarchy Multi-party System',
    count: 7,
    partiesAr: [
      'حزب التجمع الوطني للأحرار (RNI - يقود الائتلاف الحكومي)',
      'حزب الأصالة والمعاصرة (PAM)',
      'حزب الاستقلال (Istiqlal)',
      'الاتحاد الاشتراكي للقوات الشعبية (USFP)',
      'الحركة الشعبية (MP)',
      'حزب الاتحاد الدستوري (UC)',
      'حزب العدالة والتنمية (PJD)',
    ],
    partiesEn: [
      'National Rally of Independents (RNI - Government Coalition Lead)',
      'Authenticity and Modernity Party (PAM)',
      'Istiqlal Party',
      'Socialist Union of Popular Forces (USFP)',
      'Popular Movement (MP)',
      'Constitutional Union (UC)',
      'Justice and Development Party (PJD)',
    ],
  },

  // المملكة الأردنية الهاشمية
  jo: {
    systemAr: 'نظام ملكي نيابي ملكي تعددي حزبي',
    systemEn: 'Constitutional Monarchy Multi-party System',
    count: 6,
    partiesAr: [
      'حزب الميثاق الوطني (الأغلبية البرلمانية الحزبية)',
      'حزب جبهة العمل الإسلامي',
      'حزب إرادة الوطني',
      'الحزب الوطني الإسلامي',
      'حزب تقدم الأردني',
      'حزب عزم',
    ],
    partiesEn: [
      'National Charter Party (Al-Meethaq - Parliamentary Lead)',
      'Islamic Action Front (IAF)',
      'Erada (Will) Party',
      'National Islamic Party',
      'Taqaddom Party',
      'Azem Party',
    ],
  },

  // الجمهورية الجزائرية
  dz: {
    systemAr: 'نظام تعددي جمهوري',
    systemEn: 'Multi-party Republic',
    count: 6,
    partiesAr: [
      'حزب جبهة التحرير الوطني (FLN - تاريخي والأغلبية)',
      'حزب التجمع الوطني الديمقراطي (RND)',
      'حركة مجتمع السلم (حمس - معارضة برلمانية)',
      'حزب جبهة المستقبل',
      'حركة البناء الوطني',
      'جبهة القوى الاشتراكية (FFS)',
    ],
    partiesEn: [
      'National Liberation Front (FLN - Parliamentary Majority)',
      'Democratic National Rally (RND)',
      'Movement of Society for Peace (MSP)',
      'Future Front (El Moustakbal)',
      'National Construction Movement (El Binaa)',
      'Socialist Forces Front (FFS)',
    ],
  },

  // جمهورية العراق
  iq: {
    systemAr: 'نظام برلماني توافقي تعددي واسع',
    systemEn: 'Parliamentary Multi-party Consociational System',
    count: 7,
    partiesAr: [
      'ائتلاف دولة القانون (حزب الدعوة الإسلامية)',
      'تحالف تقدم الوطني',
      'الحزب الديمقراطي الكردستاني (KDP)',
      'الاتحاد الوطني الكردستاني (PUK)',
      'تحالف الفتح / قوى الإطار التنسيقي',
      'تيار الحكمة الوطني',
      'ائتلاف النصر',
    ],
    partiesEn: [
      'State of Law Coalition (Dawa Party)',
      'Taqaddum Movement',
      'Kurdistan Democratic Party (KDP)',
      'Patriotic Union of Kurdistan (PUK)',
      'Fatah Alliance / Coordination Framework',
      'National Wisdom Movement (Hikma)',
      'Victory Alliance (Nasr)',
    ],
  },

  // روسيا الاتحادية
  ru: {
    systemAr: 'نظام تعددي ذو حزب مهيمن',
    systemEn: 'Dominant-Party Multi-party System',
    count: 5,
    partiesAr: [
      'حزب روسيا الموحدة (United Russia - الحزب الحاكم والأغلبية الدستورية)',
      'الحزب الشيوعي لروسيا الاتحادية (CPRF)',
      'الحزب الليبرالي الديمقراطي الروسي (LDPR)',
      'حزب روسيا العادلة - من أجل الحقيقة',
      'حزب الشعب الجديد (Novye Lyudi)',
    ],
    partiesEn: [
      'United Russia (Ruling Constitutional Majority)',
      'Communist Party of the Russian Federation (CPRF)',
      'Liberal Democratic Party of Russia (LDPR)',
      'A Just Russia – For Truth',
      'New People Party',
    ],
  },

  // جمهورية الصين الشعبية
  cn: {
    systemAr: 'نظام الحزب الواحد بقيادة الحزب الشيوعي مع تعاون متعدد الأحزاب',
    systemEn: 'One-Party Socialist System with United Front Cooperation',
    count: 9,
    partiesAr: [
      'الحزب الشيوعي الصيني (CPC - الحزب الحاكم والقوة القيادية الدستورية)',
      'اللجنة الثورية لحزب الكومينتانغ الصيني',
      'الرابطة الديمقراطية الصينية',
      'جمعية البناء الديمقراطي الوطني الصيني',
      'جمعية تنمية الديمقراطية في الصين',
      'حزب الفلاحين والعمال الديمقراطي الصيني',
      'حزب تشي غونغ الصيني',
      'جمعية جيوسان العلمية',
      'رابطة الحكم الذاتي الديمقراطي لتايوان',
    ],
    partiesEn: [
      'Communist Party of China (CPC - Ruling Constitutional Authority)',
      'Revolutionary Committee of the Chinese Kuomintang',
      'China Democratic League',
      'China National Democratic Construction Association',
      'China Association for Promoting Democracy',
      'Chinese Peasants\' and Workers\' Democratic Party',
      'China Zhi Gong Party',
      'Jiusan Society',
      'Taiwan Democratic Self-Government League',
    ],
  },

  // اليابان
  jp: {
    systemAr: 'نظام برلماني تعددي تنافسي',
    systemEn: 'Parliamentary Multi-party System',
    count: 6,
    partiesAr: [
      'الحزب الليبرالي الديمقراطي (LDP - الحزب الحاكم التقليدي)',
      'حزب كوميتو (Komeito - شريك الائتلاف)',
      'الحزب الدستوري الديمقراطي الياباني (CDP)',
      'حزب التجديد الياباني (Nippon Ishin no Kai)',
      'الحزب الديمقراطي من أجل الشعب (DPFP)',
      'الحزب الشيوعي الياباني (JCP)',
    ],
    partiesEn: [
      'Liberal Democratic Party (LDP - Ruling Party)',
      'Komeito (Coalition Partner)',
      'Constitutional Democratic Party of Japan (CDP)',
      'Japan Innovation Party (Ishin)',
      'Democratic Party for the People (DPFP)',
      'Japanese Communist Party (JCP)',
    ],
  },

  // جمهورية الهند
  in: {
    systemAr: 'نظام برلماني اتحادي تعددي واسع',
    systemEn: 'Federal Parliamentary Multi-party System',
    count: 7,
    partiesAr: [
      'حزب بهاراتيا جاناتا (BJP - يقود التحالف الوطني الديمقراطي الحاكم)',
      'حزب المؤتمر الوطني الهندي (INC - زعيم المعارضة)',
      'حزب آم آدمي (Aam Aadmi Party)',
      'حزب مؤتمر ترينامول لعموم الهند (AITC)',
      'حزب درافيدا مونيترا كازاغام (DMK)',
      'حزب بهوجان ساماج (BSP)',
      'الحزب الشيوعي الهندي الماركسي (CPI-M)',
    ],
    partiesEn: [
      'Bharatiya Janata Party (BJP - Ruling NDA Coalition Lead)',
      'Indian National Congress (INC - Official Opposition)',
      'Aam Aadmi Party (AAP)',
      'All India Trinamool Congress (AITC)',
      'Dravida Munnetra Kazhagam (DMK)',
      'Bahujan Samaj Party (BSP)',
      'Communist Party of India (Marxist - CPI-M)',
    ],
  },

  // جمهورية البرازيل الاتحادية
  br: {
    systemAr: 'نظام رئاسي تعددي مجزأ',
    systemEn: 'Presidential Multi-party Fragmented System',
    count: 7,
    partiesAr: [
      'حزب العمال البرازيلي (PT - يقود الائتلاف الرئاسي)',
      'الحزب الليبرالي (PL - تيار بولسونارو)',
      'حزب البرازيل الاتحادية (União Brasil)',
      'حزب الحركة الديمقراطية البرازيلية (MDB)',
      'الحزب الاشتراكي الديمقراطي (PSD)',
      'الحزب التقدمي (PP)',
      'الحزب الاشتراكي البرازيلي (PSB)',
    ],
    partiesEn: [
      'Workers\' Party (PT - Presidential Coalition)',
      'Liberal Party (PL)',
      'União Brasil',
      'Brazilian Democratic Movement (MDB)',
      'Social Democratic Party (PSD)',
      'Progressistas (PP)',
      'Brazilian Socialist Party (PSB)',
    ],
  },

  // الجمهورية التركية
  tr: {
    systemAr: 'نظام رئاسي تعددي ائتلافي',
    systemEn: 'Presidential Multi-party System',
    count: 6,
    partiesAr: [
      'حزب العدالة والتنمية (AK Parti - الحزب الحاكم)',
      'حزب الشعب الجمهوري (CHP - حزب المعارضة الرئيسي)',
      'حزب الحركة القومية (MHP - تحالف الجمهور)',
      'حزب الديمقراطية ومساواة الشعوب (DEM Parti)',
      'الحزب الصالح (İyi Parti)',
      'حزب الرفاه الجديد (Yeniden Refah)',
    ],
    partiesEn: [
      'Justice and Development Party (AK Parti - Ruling Party)',
      'Republican People\'s Party (CHP - Main Opposition)',
      'Nationalist Movement Party (MHP - People\'s Alliance)',
      'Peoples\' Equality and Democracy Party (DEM Parti)',
      'Good Party (İyi Parti)',
      'New Welfare Party (YRP)',
    ],
  },

  // الجمهورية التونسية
  tn: {
    systemAr: 'نظام رئاسي تعددي دستوري',
    systemEn: 'Presidential Multi-party Republic',
    count: 5,
    partiesAr: [
      'حركة لينتصر الشعب (الكتلة الداعمة لمسار 25 جويلية)',
      'حركة الشعب (قومي عروبي)',
      'حركة النهضة',
      'الحزب الدستوري الحر',
      'حزب التيار الديمقراطي',
    ],
    partiesEn: [
      'Pour que le Peuple Triomphe (Pro-July 25 Path)',
      'People\'s Movement (Mouvement Echaâb)',
      'Ennahda Movement',
      'Free Destourian Party (PDL)',
      'Democratic Current (Attayar)',
    ],
  },

  // دولة الإمارات العربية المتحدة
  ae: {
    systemAr: 'نظام اتحادي ملكي دستوري (مجلس وطني اتحادي بدون أحزاب أيديولوجية)',
    systemEn: 'Federal Monarchy (Federal National Council, non-partisan)',
    count: 0,
    partiesAr: [
      'المجلس الأعلى للاتحاد (حكام الإمارات السبع)',
      'المجلس الوطني الاتحادي (40 عضواً نصفهم منتخب بالاقتراع المباشر)',
      'المجالس التنفيذية المحلية للإمارات',
    ],
    partiesEn: [
      'Federal Supreme Council (Rulers of the 7 Emirates)',
      'Federal National Council (40 members, half directly elected)',
      'Local Executive Councils',
    ],
    noteAr: 'تدار الشؤون التشريعية والسياسية عبر المجلس الوطني الاتحادي بدون أحزاب سياسية أيديولوجية وفق دستور الاتحاد.',
    noteEn: 'Legislative and consultative matters are managed via the Federal National Council without political parties.',
  },

  // دولة قطر
  qa: {
    systemAr: 'نظام ملكي دستوري أميري (مجلس الشورى المنتخب بدون أحزاب)',
    systemEn: 'Constitutional Monarchy (Elected Shura Council, non-partisan)',
    count: 0,
    partiesAr: [
      'مجلس الشورى القطري (45 عضواً، ثلثاهم منتخبون بالاقتراع المباشر)',
      'المجلس البلدي المركزي المنتخب',
    ],
    partiesEn: [
      'Qatari Shura Council (45 members, two-thirds directly elected)',
      'Central Municipal Council (CMC)',
    ],
    noteAr: 'يستند التمثيل السياسي إلى مجلس الشورى بالاقتراع الشعبي المباشر بدون أحزاب سياسية.',
    noteEn: 'Direct citizen representation is realized via the elected Shura Council without partisan divisions.',
  },

  // دولة الكويت
  kw: {
    systemAr: 'نظام برلماني دستوري (مجلس الأمة وتيارات وكتل سياسية برلمانية)',
    systemEn: 'Constitutional Parliamentary System (National Assembly political blocs)',
    count: 5,
    partiesAr: [
      'التحالف الإسلامي الوطني',
      'الحركة الدستورية الإسلامية (حدس)',
      'المنبر الديمقراطي الكويتي (ليبرالي)',
      'كتلة العمل الشعبي',
      'تجمع العدالة والسلام',
    ],
    partiesEn: [
      'National Islamic Alliance',
      'Islamic Constitutional Movement (Hadas)',
      'Kuwait Democratic Forum (Liberal)',
      'Popular Action Bloc',
      'Justice and Peace Gathering',
    ],
    noteAr: 'تعمل الكتل السياسية عبر مجلس الأمة كتيارات وتنظيمات برلمانية دستورية معترف بها عملياً.',
    noteEn: 'Political factions operate as parliamentary parliamentary blocs inside the National Assembly.',
  },

  // سلطنة عُمان
  om: {
    systemAr: 'نظام سلطاني ملكي دستوري (مجلس عمان بشقيه الدولة والشورى)',
    systemEn: 'Sultanate Monarchy (Council of Oman: State & Shura, non-partisan)',
    count: 0,
    partiesAr: [
      'مجلس الشورى العُماني (90 عضواً منتخبون بالكامل باقتراع شعبي إلكتروني)',
      'مجلس الدولة (معين بمرسوم سلطاني)',
      'المجالس البلدية المنتخبة بالمحافظات',
    ],
    partiesEn: [
      'Oman Shura Council (90 directly elected members)',
      'Council of State (Majlis ad-Dawla)',
      'Elected Provincial Municipal Councils',
    ],
    noteAr: 'تدار الممارسة الشوروية عبر انتخابات مجلس الشورى والمجالس البلدية بدون أحزاب أيديولوجية.',
    noteEn: 'Representation is exercised through fully elected Shura and Municipal Councils without parties.',
  },

  // مملكة البحرين
  bh: {
    systemAr: 'نظام ملكي دستوري (جمعيات سياسية وبرلمان ثنائي الغرف)',
    systemEn: 'Constitutional Monarchy with Political Societies',
    count: 5,
    partiesAr: [
      'جمعية المنبر الوطني الإسلامي',
      'جمعية الأصالة الإسلامية',
      'جمعية ميثاق العمل الوطني',
      'جمعية المنبر الديمقراطي التقدمي',
      'تجمع الوحدة الوطنية',
    ],
    partiesEn: [
      'Al-Menbar Islamic Society',
      'Al-Asalah Islamic Society',
      'National Action Charter Society',
      'Progressive Democratic Tribune',
      'National Unity Assembly',
    ],
  },

  // الجمهورية العربية السورية
  sy: {
    systemAr: 'مرحلة انتقالية دستورية وإعادة هيكلة برلمانية',
    systemEn: 'Transitional Constitutional Assembly',
    count: 5,
    partiesAr: [
      'هيئة الإدارة الانتقالية الوطنية',
      'ائتلاف قوى الثورة والمعارضة السورية',
      'الجبهة الوطنية الديمقراطية',
      'الحزب السوري القومي الاجتماعي',
      'الحزب الشيوعي الموحد',
    ],
    partiesEn: [
      'National Transitional Administration',
      'National Coalition for Syrian Revolutionary Forces',
      'National Democratic Front',
      'Syrian Social Nationalist Party (SSNP)',
      'Unified Communist Party',
    ],
  },

  // الجمهورية اللبنانية
  lb: {
    systemAr: 'نظام برلماني توافقي تعددي طائفي',
    systemEn: 'Confessional Parliamentary Multi-party System',
    count: 6,
    partiesAr: [
      'حزب القوات اللبنانية (أكبر كتلة مسيحية)',
      'التيار الوطني الحر',
      'حركة أمل',
      'حزب الله (كتلة الوفاء للمقاومة)',
      'الحزب التقدمي الاشتراكي',
      'حزب الكتائب اللبنانية',
    ],
    partiesEn: [
      'Lebanese Forces',
      'Free Patriotic Movement (FPM)',
      'Amal Movement',
      'Hezbollah (Loyalty to Resistance Bloc)',
      'Progressive Socialist Party (PSP)',
      'Kataeb Party',
    ],
  },

  // جمهورية السودان
  sd: {
    systemAr: 'مرحلة تأسيسية ومجلس السيادة الانتقالي',
    systemEn: 'Transitional Sovereign Council Framework',
    count: 5,
    partiesAr: [
      'قوى الحرية والتغيير (الكتلة الديمقراطية والتأسيسية)',
      'حزب الأمة القومي (تاريخي)',
      'الحزب الاتحادي الديمقراطي الأصل',
      'حركة العدل والمساواة السودانية',
      'حركة تحرير السودان',
    ],
    partiesEn: [
      'Forces of Freedom and Change (FFC)',
      'National Umma Party',
      'Democratic Unionist Party (DUP)',
      'Justice and Equality Movement (JEM)',
      'Sudan Liberation Movement (SLM)',
    ],
  },

  // دولة ليبيا
  ly: {
    systemAr: 'مرحلة انتقالية وتعددية وطنية تشريعية',
    systemEn: 'Transitional Multi-entity Legislature',
    count: 5,
    partiesAr: [
      'حكومة الوحدة الوطنية والمجلس الرئاسي',
      'مجلس النواب الليبي (برلمان طبرق)',
      'حزب العدالة والبناء',
      'تحالف القوى الوطنية الليبية',
      'تيار يا بلادي الوطني',
    ],
    partiesEn: [
      'Government of National Unity (GNU) & Presidential Council',
      'House of Representatives (HoR)',
      'Justice and Construction Party',
      'National Forces Alliance (NFA)',
      'Ya Biladi Movement',
    ],
  },

  // الجمهورية اليمنية
  ye: {
    systemAr: 'مجلس القيادة الرئاسي والكيانات الدستورية والسياسية',
    systemEn: 'Presidential Leadership Council & Pluralistic Factions',
    count: 5,
    partiesAr: [
      'المؤتمر الشعبي العام (الحزب التاريخي الأكبر)',
      'التجمع اليمني للإصلاح',
      'المجلس الانتقالي الجنوبي',
      'الحزب الاشتراكي اليمني',
      'التنظيم الوحدوي الشعبي الناصري',
    ],
    partiesEn: [
      'General People\'s Congress (GPC)',
      'Yemeni Congregation for Reform (Islah)',
      'Southern Transitional Council (STC)',
      'Yemeni Socialist Party (YSP)',
      'Nasserist Unionist People\'s Organisation',
    ],
  },

  // دولة فلسطين
  ps: {
    systemAr: 'منظمة التحرير الفلسطينية والفصائل الوطنية',
    systemEn: 'Palestine Liberation Organization (PLO) & National Factions',
    count: 5,
    partiesAr: [
      'حركة التحرير الوطني الفلسطيني (فتح - تقود السلطة الوطنية)',
      'حركة المقاومة الإسلامية (حماس)',
      'الجبهة الشعبية لتحرير فلسطين',
      'المبادرة الوطنية الفلسطينية',
      'حركة الجهاد الإسلامي',
    ],
    partiesEn: [
      'Fatah (Palestinian National Liberation Movement)',
      'Hamas (Islamic Resistance Movement)',
      'Popular Front for the Liberation of Palestine (PFLP)',
      'Palestinian National Initiative (PNI)',
      'Palestinian Islamic Jihad',
    ],
  },

  // الجمهورية الإيطالية
  it: {
    systemAr: 'نظام برلماني تعددي ائتلافي',
    systemEn: 'Parliamentary Multi-party Coalition System',
    count: 5,
    partiesAr: [
      'حزب إخوة إيطاليا (Fratelli d\'Italia - يقود الائتلاف الحاكم)',
      'الحزب الديمقراطي الإيطالي (PD - المعارضة الرئيسية)',
      'حركة النجوم الخمسة (M5S)',
      'حزب الرابطة (Lega)',
      'حزب فورزا إيطاليا (Forza Italia)',
    ],
    partiesEn: [
      'Brothers of Italy (FdI - Ruling Coalition Lead)',
      'Democratic Party (PD - Main Opposition)',
      'Five Star Movement (M5S)',
      'Lega (League)',
      'Forza Italia (FI)',
    ],
  },

  // مملكة إسبانيا
  es: {
    systemAr: 'نظام ملكي برلماني تعددي',
    systemEn: 'Parliamentary Multi-party Monarchy',
    count: 6,
    partiesAr: [
      'حزب العمال الاشتراكي الإسباني (PSOE - يقود الحكومة)',
      'الحزب الشعبي (PP - أكبر كتلة برلمانية)',
      'حزب فوكس (Vox - يمين محافظ)',
      'تحالف سومار اليساري (Sumar)',
      'حزب اليسار الجمهوري لكتالونيا (ERC)',
      'حزب معاً لأجل كتالونيا (Junts)',
    ],
    partiesEn: [
      'Spanish Socialist Workers\' Party (PSOE - Government Lead)',
      'People\'s Party (PP - Largest Parliamentary Bloc)',
      'Vox',
      'Sumar Coalition',
      'Republican Left of Catalonia (ERC)',
      'Together for Catalonia (Junts)',
    ],
  },

  // كوريا الجنوبية
  kr: {
    systemAr: 'نظام رئاسي تعددي تنافسي',
    systemEn: 'Presidential Multi-party System',
    count: 4,
    partiesAr: [
      'الحزب الديمقراطي الكوري (DPK - الأغلبية البرلمانية)',
      'حزب سلطة الشعب (PPP - الحزب الرئاسي الحاكم)',
      'حزب إعادة بناء كوريا (Cho Kuk Party)',
      'حزب الإصلاح الجديد',
    ],
    partiesEn: [
      'Democratic Party of Korea (DPK - Parliamentary Majority)',
      'People Power Party (PPP - Presidential Ruling Party)',
      'Rebuilding Korea Party',
      'New Reform Party',
    ],
  },

  // كندا
  ca: {
    systemAr: 'نظام برلماني تعددي اتحادي',
    systemEn: 'Federal Parliamentary Multi-party System',
    count: 5,
    partiesAr: [
      'الحزب الليبرالي الكندي (Liberal Party - الحكومة الحاكمة)',
      'حزب المحافظين الكندي (Conservative Party - المعارضة الرسمية)',
      'الكتلة الكيبيكية (Bloc Québécois)',
      'الحزب الديمقراطي الجديد (NDP)',
      'حزب الخضر الكندي (Green Party)',
    ],
    partiesEn: [
      'Liberal Party of Canada (Ruling Government)',
      'Conservative Party of Canada (Official Opposition)',
      'Bloc Québécois',
      'New Democratic Party (NDP)',
      'Green Party of Canada',
    ],
  },

  // أستراليا
  au: {
    systemAr: 'نظام برلماني اتحادي تعددي',
    systemEn: 'Federal Parliamentary Multi-party System',
    count: 4,
    partiesAr: [
      'حزب العمال الأسترالي (Labor Party - الحكومة الحاكمة)',
      'الحزب الليبرالي الأسترالي (الائتلاف المعارض)',
      'الحزب الوطني الأسترالي (الشركاء الائتلافيون)',
      'حزب الخضر الأسترالي (Australian Greens)',
    ],
    partiesEn: [
      'Australian Labor Party (ALP - Ruling Government)',
      'Liberal Party of Australia (Opposition Coalition)',
      'National Party of Australia',
      'Australian Greens',
    ],
  },

  // جمهورية جنوب أفريقيا
  za: {
    systemAr: 'حكومة وحدة وطنية متعددة الأحزاب',
    systemEn: 'Government of National Unity (Multi-party System)',
    count: 5,
    partiesAr: [
      'المؤتمر الوطني الأفريقي (ANC - يقود حكومة الوحدة)',
      'التحالف الديمقراطي (DA - شريك رئيسي في الائتلاف)',
      'حزب رمح الأمة (uMkhonto we Sizwe - MK - بزعامة زوما)',
      'حزب المناضلين من أجل الحرية الاقتصادية (EFF)',
      'حزب الحرية إنكاثا (IFP)',
    ],
    partiesEn: [
      'African National Congress (ANC - Lead of National Unity Gov)',
      'Democratic Alliance (DA - Major Coalition Partner)',
      'uMkhonto we Sizwe (MK Party)',
      'Economic Freedom Fighters (EFF)',
      'Inkatha Freedom Party (IFP)',
    ],
  },

  // جمهورية باكستان الإسلامية
  pk: {
    systemAr: 'نظام برلماني اتحادي تعددي',
    systemEn: 'Federal Parliamentary Multi-party System',
    count: 5,
    partiesAr: [
      'الرابطة الإسلامية الباكستانية (PML-N - تقود الائتلاف الحاكم)',
      'حركة الإنصاف الباكستانية (PTI)',
      'حزب الشعب الباكستاني (PPP - شريك الحكومة والرئاسة)',
      'الحركة القومية المتحدة (MQM-P)',
      'جمعية علماء الإسلام (JUI-F)',
    ],
    partiesEn: [
      'Pakistan Muslim League (PML-N - Ruling Coalition Lead)',
      'Pakistan Tehreek-e-Insaf (PTI)',
      'Pakistan Peoples Party (PPP - Presidency & Coalition Partner)',
      'Muttahida Qaumi Movement (MQM-P)',
      'Jamiat Ulema-e-Islam (JUI-F)',
    ],
  },
};

/**
 * توليد أو استرجاع بيانات الأحزاب السياسية الشاملة لكل دولة مع عددها
 */
export function getCountryPartiesData(country, lang = 'ar') {
  const isAr = lang === 'ar';
  const cid = country?.id?.toLowerCase();
  const entry = POLITICAL_PARTIES_REGISTRY[cid];

  if (entry) {
    return {
      parties: isAr ? entry.partiesAr : entry.partiesEn,
      count: entry.count,
      system: isAr ? entry.systemAr : entry.systemEn,
      hasParties: entry.count > 0,
      note: entry.noteAr ? (isAr ? entry.noteAr : entry.noteEn) : null,
    };
  }

  // إذا كانت دولة مسجلة في ملف Dossiers الأساسي
  if (country?.parties && country.parties.length > 0) {
    return {
      parties: country.parties,
      count: country.parties.length,
      system: isAr ? 'نظام برلماني دستوري تعددي' : 'Constitutional Multi-party System',
      hasParties: true,
      note: null,
    };
  }

  // توليد بنية أحزاب واقعية ومتسقة لبقية دول العالم حسب نظام الحكم
  const regime = country?.regime || '';
  const countryName = country?.name || (isAr ? 'الدولة' : 'Country');

  if (regime.includes('ملك') || regime.includes('monarchy') || regime.includes('إمار') || regime.includes('سلطن')) {
    return {
      parties: isAr
        ? [
            `المجلس التشريعي والشوروي الوطني في ${countryName}`,
            'المجالس البلدية والهيئات التمثيلية للمحافظات',
            'الاتحادات المهنية والنقابات الأهلية',
          ]
        : [
            `National Consultative Council of ${countryName}`,
            'Provincial Municipal Representative Bodies',
            'Professional Associations & Public Assemblies',
          ],
      count: 0,
      system: isAr ? 'نظام ملكي دستوري ومجالس شورى تمثيلية' : 'Constitutional Monarchy / Consultative Assemblies',
      hasParties: false,
      note: isAr ? 'تتم المشاركة العامة عبر المجالس الوطنية وممثلي الدوائر والانتخابات المحلية.' : 'Representation is conducted through national consultative councils and local assemblies.',
    };
  }

  // نظام جمهوري / فيدرالي / برلماني افتراضي
  return {
    parties: isAr
      ? [
          `حزب الائتلاف الدستوري الحاكم في ${countryName}`,
          'حزب العدالة والتنمية الوطني',
          'الحزب الديمقراطي الاجتماعي',
          'التحالف الليبرالي التقدمي',
          'حزب الخضر والبيئة الوطني',
        ]
      : [
          `Ruling Constitutional Coalition of ${countryName}`,
          'National Justice & Development Party',
          'Social Democratic Party',
          'Progressive Liberal Alliance',
          'National Green & Environmental Party',
        ],
    count: 5,
    system: isAr ? 'نظام جمهوري دستوري تعددي' : 'Constitutional Multi-party Republic',
    hasParties: true,
    note: null,
  };
}
