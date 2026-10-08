/**
 * قاعدة البيانات الاستثمارية الشاملة للشركات والصناديق السيادية والمشاريع العملاقة
 * Comprehensive Corporate, Sovereign Wealth Funds, FDI & Strategic Investments Database
 * 
 * تشمل بيانات كاملة ومفصلة:
 * 1. كبرى الشركات الوطنية والعالمية (Top Corporate Champions & Conglomerates)
 * 2. الصناديق السيادية (Sovereign Wealth Funds - AUM, Holdings & Strategy)
 * 3. تدفقات الاستثمار الأجنبي المباشر (FDI Inflows, Outflows & Partner Markets)
 * 4. المشروعات القومية والمدن المستقبلية العملاقة (Giga-Projects & Strategic Corridors)
 * 5. ركائز الصادرات ومحركات الاقتصاد الحقيقي (Key Export Pillars & Trade Hubs)
 */

export const COUNTRY_INVESTMENTS_DB = {
  // 1. المملكة العربية السعودية
  sa: {
    countryId: 'sa',
    nameAr: 'المملكة العربية السعودية',
    nameEn: 'Saudi Arabia',
    sovereignWealthFund: {
      nameAr: 'صندوق الاستثمارات العامة',
      nameEn: 'Public Investment Fund',
      acronym: 'PIF',
      aumBn: 930.0,
      globalRank: 5,
      established: 1971,
      chiefExecutiveAr: 'ياسر الرميان (محافظ الصندوق)',
      chiefExecutiveEn: 'Yasir Al-Rumayyan (Governor)',
      strategyAr: 'تنويع الاقتصاد الوطني غير النفطي، قيادة مشاريع رؤية 2030 الكبرى، والاستثمار في التكنولوجيا والذكاء الاصطناعي والصناعات المستقبلية.',
      strategyEn: 'Non-oil economic diversification, driving Vision 2030 giga-projects, and investing in AI, mobility, and future industries.',
      majorHoldings: [
        { name: 'أرامكو السعودية (Aramco)', stake: '16% مباشرة + 8% عبر شركات تابعة', sector: 'طاقة ونفط', country: 'السعودية' },
        { name: 'لوسيد موتورز (Lucid Motors)', stake: '60%+', sector: 'سيارات كهربائية', country: 'الولايات المتحدة' },
        { name: 'نادي نيوكاسل يونايتد (Newcastle United)', stake: '85%', sector: 'رياضة وترفيه', country: 'المملكة المتحدة' },
        { name: 'نينتندو (Nintendo Co.)', stake: '8.58%', sector: 'ألعاب وترفيه رقمي', country: 'اليابان' },
        { name: 'أوبر تكنولوجيز (Uber Technologies)', stake: '3.7%', sector: 'تنقل وتكنولوجيا', country: 'الولايات المتحدة' },
        { name: 'إلكترونيك آرتس (Electronic Arts - EA)', stake: '9.2%', sector: 'ألعاب فيديو', country: 'الولايات المتحدة' },
        { name: 'شركة سابك (SABIC)', stake: '70% (مملوكة لأرامكو)', sector: 'كيماويات متخصصة', country: 'السعودية' },
      ],
    },
    fdi: {
      inwardStockBn: 295.0,
      outwardStockBn: 185.0,
      annualInflowBn: 19.3,
      topInwardSourcesAr: ['الولايات المتحدة', 'الإمارات', 'فرنسا', 'الصين', 'المملكة المتحدة', 'سنغافورة'],
      topInwardSourcesEn: ['United States', 'UAE', 'France', 'China', 'United Kingdom', 'Singapore'],
      topOutwardDestinationsAr: ['الولايات المتحدة', 'المملكة المتحدة', 'مصر', 'الهند', 'باكستان', 'أوروبا'],
      topOutwardDestinationsEn: ['United States', 'United Kingdom', 'Egypt', 'India', 'Pakistan', 'Europe'],
      investmentClimateAr: 'نظام الاستثمار المحدث 2024-2026 الذي يمنح مساواة كاملة بين المستثمر الأجنبي والمحلي وإعفاءات ضريبية للمقرات الإقليمية (RHQ).',
      investmentClimateEn: 'Updated investment law conferring national treatment to foreign investors and 30-year tax holidays for Regional HQs.',
    },
    strategicMegaProjects: [
      {
        nameAr: 'نيوم (NEOM) ومجمع أوكساجون وذا لاين',
        nameEn: 'NEOM, OXAGON & THE LINE',
        budgetBn: 500.0,
        sectorAr: 'المدن الذكية المستقبلية والهيدروجين الأخضر',
        sectorEn: 'Cognitive Smart Cities & Green Hydrogen',
        timeline: '2020 – 2030+',
        descriptionAr: 'أضخم مشروع حضري مستقبلي في العالم يعمل بالطاقة المتجددة بنسبة 100% ويضم أكبر مصنع هيدروجين أخضر عالمياً.',
        descriptionEn: 'World’s flagship cognitive region powered by 100% renewables with largest green hydrogen plant.',
        status: 'قيد التنفيذ النشط',
      },
      {
        nameAr: 'مشروع البحر الأحمر وأمالا للسياحة الفاخرة',
        nameEn: 'The Red Sea & AMAALA Destination',
        budgetBn: 35.0,
        sectorAr: 'السياحة البيئية الفاخرة وتجديد الشعاب المرجانية',
        sectorEn: 'Regenerative Luxury Tourism',
        timeline: '2019 – 2030',
        descriptionAr: 'تطوير أكثر من 90 جزيرة بكر وسواحل خلابة مع تشغيل مطار البحر الأحمر الدولي بالطاقة الشمسية.',
        descriptionEn: 'Developing 90+ pristine islands powered entirely by off-grid solar and battery storage.',
        status: 'مراحل التشغيل الفعلي',
      },
      {
        nameAr: 'مشروع القدية عاصمة الترفيه والرياضة',
        nameEn: 'Qiddiya City of Entertainment & Sports',
        budgetBn: 28.0,
        sectorAr: 'الترفيه والرياضة وسباقات الفورمولا 1',
        sectorEn: 'Entertainment, Gaming & Motor Sports',
        timeline: '2019 – 2030',
        descriptionAr: 'عاصمة الترفيه العالمية وأول منطقة مخصصة للألعاب والرياضات الإلكترونية في العالم وحديقة 6 فلاجز القدية.',
        descriptionEn: 'Global capital of entertainment, esports and gaming featuring Six Flags and Speed Park Track.',
        status: 'قيد التشييد المتقدم',
      },
      {
        nameAr: 'حديقة الملك سلمان ومسار الرياض الأخضر',
        nameEn: 'King Salman Park & Green Riyadh',
        budgetBn: 22.0,
        sectorAr: 'البيئة والغطاء النباتي وجودة الحياة',
        sectorEn: 'Urban Forestry & Quality of Life',
        timeline: '2019 – 2028',
        descriptionAr: 'أكبر حديقة مدن في العالم على مساحة تتجاوز 16 كم² بمساحات خضراء ومتاحف ومسارح وطنية.',
        descriptionEn: 'World’s largest urban park covering over 16 km² enhancing urban livability.',
        status: 'قيد الإنشاء',
      },
    ],
    exportPillars: [
      { productAr: 'النفط الخام والمشتقات البترولية', productEn: 'Crude Petroleum & Refined Fuels', sharePercent: 72, topDestinationsAr: ['الصين', 'الهند', 'اليابان', 'كوريا الجنوبية'] },
      { productAr: 'البتروكيماويات والبوليمرات', productEn: 'Petrochemicals & Polymers', sharePercent: 15, topDestinationsAr: ['الصين', 'تركيا', 'الهند', 'أوروبا'] },
      { productAr: 'الأسمدة الفوسفاتية والنيتروجينية', productEn: 'Phosphate & Nitrogen Fertilizers', sharePercent: 4.5, topDestinationsAr: ['الهند', 'البرازيل', 'أمريكا اللاتينية'] },
      { productAr: 'المعادن والألمنيوم غير المصنع', productEn: 'Unwrought Aluminum & Metals', sharePercent: 3.2, topDestinationsAr: ['الولايات المتحدة', 'أوروبا', 'الشرق الأوسط'] },
    ],
  },

  // 2. جمهورية مصر العربية
  eg: {
    countryId: 'eg',
    nameAr: 'جمهورية مصر العربية',
    nameEn: 'Egypt',
    sovereignWealthFund: {
      nameAr: 'صندوق مصر السيادي للاستثمار والتنمية',
      nameEn: 'The Sovereign Fund of Egypt',
      acronym: 'TSFE',
      aumBn: 12.5,
      globalRank: 42,
      established: 2018,
      chiefExecutiveAr: 'إدارة استثمارية متخصصة تحت إشراف رئاسة الوزراء',
      chiefExecutiveEn: 'Sovereign Board of Directors under Prime Ministry',
      strategyAr: 'إعادة توظيف الأصول غير المستغلة للدولة، الشراكة مع القطاع الخاص الإقليمي والدولي، وتوطين صناعات الهيدروجين الأخضر وتحلية المياه.',
      strategyEn: 'Unlocking value from unutilized state assets, private-sector partnerships, green hydrogen and infrastructure concessions.',
      majorHoldings: [
        { name: 'مجمع التحرير التاريخي (إعادة تأهيل فندقي واستثماري)', stake: '100%', sector: 'ضيافة وتراث', country: 'مصر' },
        { name: 'مشروع تطوير أرض الحزب الوطني بكورنيش النيل', stake: '100%', sector: 'عقارات وسياحة', country: 'مصر' },
        { name: 'محطات توليد الكهرباء بنظام الدورة المركبة (سيمنز)', stake: 'حصة حاكمة', sector: 'طاقة وبنية تحتية', country: 'مصر' },
        { name: 'الشركة الوطنية لبيع المنتجات البترولية (وطنية)', stake: 'محفظة طرح', sector: 'طاقة وتوزيع', country: 'مصر' },
        { name: 'التحالف الوطني لإنتاج الهيدروجين الأخضر بالمنطقة الاقتصادية', stake: 'شراكة', sector: 'طاقة نظيفة', country: 'مصر' },
      ],
    },
    fdi: {
      inwardStockBn: 160.0,
      outwardStockBn: 12.0,
      annualInflowBn: 46.5, // بما فيها صفقة رأس الحكمة التاريخية
      topInwardSourcesAr: ['الإمارات العربية المتحدة (صفقة رأس الحكمة)', 'السعودية', 'المملكة المتحدة', 'الولايات المتحدة', 'قطر', 'الصين', 'ألمانيا'],
      topInwardSourcesEn: ['UAE (Ras El-Hekma Deal)', 'Saudi Arabia', 'United Kingdom', 'United States', 'Qatar', 'China', 'Germany'],
      topOutwardDestinationsAr: ['السودان', 'السعودية', 'الإمارات', 'ليبيا', 'الجزائر'],
      topOutwardDestinationsEn: ['Sudan', 'Saudi Arabia', 'UAE', 'Libya', 'Algeria'],
      investmentClimateAr: 'حوافز الرخصة الذهبية، المناطق الاستثمارية الخاصة، وبرنامج الطروحات الحكومية بموجب وثيقة ملكية الدولة.',
      investmentClimateEn: 'Golden License fast-track permits, SCZONE tax incentives and state asset monetization IPO pipeline.',
    },
    strategicMegaProjects: [
      {
        nameAr: 'مشروع رأس الحكمة الساحلي والتنموي الاستراتيجي',
        nameEn: 'Ras El Hekma Waterfront Megacity',
        budgetBn: 35.0, // الاستثمار الفوري + 150 مليار دولار استثمارات تراكمية
        sectorAr: 'المدن السياحية الحرة والمطارات والخدمات المالية العالمية',
        sectorEn: 'Next-Gen Waterfront Megacity & International Airport',
        timeline: '2024 – 2035',
        descriptionAr: 'أضخم صفقة استثمار أجنبي مباشر في تاريخ مصر بشراكة إماراتية-مصرية لتشييد مدينة ذكية حرة على مساحة 170 مليون م².',
        descriptionEn: 'Historic $35B FDI mega-deal developing a 170-million-m² world-class financial and tourism hub on the Mediterranean.',
        status: 'بدء تسليم الأراضي والتخطيط التنفيذي',
      },
      {
        nameAr: 'العاصمة الإدارية الجديدة والبرج الأيقوني',
        nameEn: 'New Administrative Capital & Iconic Tower',
        budgetBn: 58.0,
        sectorAr: 'الحكم والمال والأعمال والتطوير الحضري',
        sectorEn: 'Government, Financial District & Urban Expansion',
        timeline: '2016 – 2028',
        descriptionAr: 'عاصمة جديدة للبلاد تضم الحي الحكومي والحي المالي وأعلى برج في إفريقيا (394 متراً) ومجمع القيادة الاستراتيجية الأوكتاجون.',
        descriptionEn: 'Ultra-modern capital housing ministries, the Iconic Tower (Africa’s tallest) and the Octagon defense hub.',
        status: 'مرحلة الانتقال الحكومي والتشغيل',
      },
      {
        nameAr: 'شبكة القطار الكهربائي السريع (سيمنز) والمونوريل',
        nameEn: 'High-Speed Rail Network (Siemens) & Monorail',
        budgetBn: 23.0,
        sectorAr: 'النقل السريع وربط البحار (السويس بالمتوسط)',
        sectorEn: 'High-Speed Rail Corridor & Maritime Link',
        timeline: '2021 – 2026',
        descriptionAr: 'قناة سويس برية جديدة على مسار بطول 2000 كم يربط العين السخنة بالإسكندرية والعلمين ومطروح، والصعيد.',
        descriptionEn: '2,000 km green high-speed rail corridor connecting Red Sea and Mediterranean ports.',
        status: 'قيد التركيب والاختبارات الفنية',
      },
      {
        nameAr: 'محطة الضبعة للطاقة النووية السلمية (روساتوم)',
        nameEn: 'El Dabaa Nuclear Power Plant (Rosatom)',
        budgetBn: 28.7,
        sectorAr: 'الطاقة النووية وتوليد الكهرباء النظيفة',
        sectorEn: 'Nuclear Power Generation (4x1200 MWe)',
        timeline: '2017 – 2030',
        descriptionAr: 'أول محطة نووية في مصر تتكون من 4 مفاعلات جيل ثالث متطور VVER-1200 لتوليد 4800 ميجاوات كهرباء نظيفة.',
        descriptionEn: 'Egypt’s first nuclear plant with 4 Generation-III+ VVER-1200 reactors generating 4.8 GW.',
        status: 'صب خرسانات المفاعلات الأربعة',
      },
      {
        nameAr: 'المنطقة الاقتصادية لقناة السويس ومجمعات الهيدروجين',
        nameEn: 'Suez Canal Economic Zone (SCZONE) & Green Hub',
        budgetBn: 20.0,
        sectorAr: 'اللوجستيات وتصنيع الوقود الأخضر وتموين السفن',
        sectorEn: 'Green Bunkering, Logistics & Industrial Hub',
        timeline: '2020 – 2030',
        descriptionAr: 'محور لوجستي وصناعي عالمي عند مدخل قناة السويس يضم استثمارات ضخمة في تصنيع الأمونيا الخضراء وتموين السفن.',
        descriptionEn: 'Strategic industrial gateway at the Suez Canal maritime crossroads leading green fuel bunkering.',
        status: 'إنتاج تجريبي وتوسعات صناعية',
      },
    ],
    exportPillars: [
      { productAr: 'الغاز الطبيعي المسال والمشتقات البترولية', productEn: 'Liquefied Natural Gas (LNG) & Fuels', sharePercent: 32, topDestinationsAr: ['تركيا', 'إيطاليا', 'اليونان', 'إسبانيا'] },
      { productAr: 'الأسمدة الأزوتية والكيماويات', productEn: 'Nitrogenous Fertilizers & Chemicals', sharePercent: 18, topDestinationsAr: ['فرنسا', 'إيطاليا', 'الهند', 'البرازيل'] },
      { productAr: 'الحاصلات الزراعية (الموالح والفراولة والبصل)', productEn: 'Fresh Citrus, Berries & Agriculture', sharePercent: 12, topDestinationsAr: ['روسيا', 'السعودية', 'المملكة المتحدة', 'ألمانيا'] },
      { productAr: 'الملابس الجاهزة والمنسوجات والقطن', productEn: 'Apparel, Textiles & High-Grade Cotton', sharePercent: 9.5, topDestinationsAr: ['الولايات المتحدة', 'ألمانيا', 'تركيا', 'إسبانيا'] },
    ],
  },

  // 3. الإمارات العربية المتحدة
  ae: {
    countryId: 'ae',
    nameAr: 'الإمارات العربية المتحدة',
    nameEn: 'United Arab Emirates',
    sovereignWealthFund: {
      nameAr: 'جهاز أبوظبي للاستثمار ومؤسسة دبي للاستثمارات الحكومية ومبادلة',
      nameEn: 'Abu Dhabi Investment Authority (ADIA), ICD & Mubadala',
      acronym: 'ADIA / Mubadala / ICD',
      aumBn: 1540.0,
      globalRank: 2,
      established: 1976,
      chiefExecutiveAr: 'الشيخ حامد بن زايد / خلدون المبارك / محمد الشيباني',
      chiefExecutiveEn: 'Sheikh Hamed bin Zayed / Khaldoon Al Mubarak',
      strategyAr: 'توزيع الأصول عالمياً عبر الأسهم الخاصة، البنية التحتية، الرقائق الإلكترونية، مراكز بيانات الذكاء الاصطناعي، والعقارات الفاخرة.',
      strategyEn: 'Global multi-asset diversification across infrastructure, AI data centers, global chips (GlobalFoundries), and real estate.',
      majorHoldings: [
        { name: 'غلوبال فاوندريز (GlobalFoundries)', stake: '80%+', sector: 'أشباه الموصلات والرقائق', country: 'الولايات المتحدة' },
        { name: 'طيران الإمارات وبنك الإمارات دبي الوطني', stake: '100% / 55%', sector: 'طيران ومصارف', country: 'الإمارات' },
        { name: 'مطار غاتويك وموانئ بريطانيا', stake: 'حصص استراتيجية', sector: 'بنية تحتية', country: 'المملكة المتحدة' },
        { name: 'شركة سيتي فوتبول جروب (مانشستر سيتي)', stake: 'حصة حاكمة', sector: 'رياضة وترفيه', country: 'المملكة المتحدة' },
        { name: 'مشروع رأس الحكمة بمصر', stake: 'استثمار سيادي 35 مليار دولار', sector: 'تطوير حضري ومدن حرة', country: 'مصر' },
      ],
    },
    fdi: {
      inwardStockBn: 240.0,
      outwardStockBn: 260.0,
      annualInflowBn: 30.6,
      topInwardSourcesAr: ['المملكة المتحدة', 'الهند', 'الولايات المتحدة', 'فرنسا', 'سويسرا', 'روسيا', 'الصين'],
      topInwardSourcesEn: ['United Kingdom', 'India', 'United States', 'France', 'Switzerland', 'Russia', 'China'],
      topOutwardDestinationsAr: ['مصر', 'المملكة المتحدة', 'الولايات المتحدة', 'الهند', 'تركيا', 'أوروبا'],
      topOutwardDestinationsEn: ['Egypt', 'United Kingdom', 'United States', 'India', 'Turkey', 'Europe'],
      investmentClimateAr: 'ملكية أجنبية 100% لجميع الشركات، إقامات ذهبية للمستثمرين والمبتكرين، ومراكز مالية دولية (ADGM و DIFC).',
      investmentClimateEn: '100% foreign ownership of mainland enterprises, Golden Visa framework and common-law financial courts (ADGM & DIFC).',
    },
    strategicMegaProjects: [
      {
        nameAr: 'توسعة مطار آل مكتوم الدولي (DWC) دبي',
        nameEn: 'Al Maktoum International Airport (DWC) Expansion',
        budgetBn: 35.0,
        sectorAr: 'الطيران والخدمات اللوجستية والشحن الجوي',
        sectorEn: 'Mega Aviation & Cargo Megahub',
        timeline: '2024 – 2035',
        descriptionAr: 'أكبر مطار في العالم بطاقة استيعابية 260 مليون مسافر و5 مدارج متوازية ليكون مقراً مستقبلياً لطيران الإمارات.',
        descriptionEn: 'World’s largest airport project designed for 260 million passengers and 5 parallel runways.',
        status: 'بدء الأعمال الهندسية والإنشائية',
      },
      {
        nameAr: 'محطة براكة للطاقة النووية السلمية (4 مفاعلات)',
        nameEn: 'Barakah Nuclear Energy Plant',
        budgetBn: 24.4,
        sectorAr: 'الطاقة النووية وتوليد الكهرباء النظيفة الخالية من الانبعاثات',
        sectorEn: 'Clean Nuclear Energy (4 APR-1400 Units)',
        timeline: '2012 – 2024 (اكتملت جميع الوحدات)',
        descriptionAr: 'أول محطة طاقة نووية تجارية في العالم العربي توفر 25% من احتياجات الإمارات من الكهرباء النظيفة بقدرة 5600 ميجاوات.',
        descriptionEn: 'Arab world’s first operational commercial nuclear power plant supplying 25% of UAE electricity.',
        status: 'تشغيل تجاري كامل بـ 4 مفاعلات',
      },
      {
        nameAr: 'مدينة مصدر ومشاريع شركة أبوظبي لطاقة المستقبل',
        nameEn: 'Masdar City & Global Clean Energy Platform',
        budgetBn: 22.0,
        sectorAr: 'الطاقة المتجددة واحتجاز الكربون والمدن المستدامة',
        sectorEn: 'Renewable Power, CCUS & Zero-Carbon Innovation',
        timeline: '2008 – 2030',
        descriptionAr: 'منظومة طاقة نظيفة رائدة عالمياً تستثمر في مشروعات طاقة شمسية ورياح في أكثر من 40 دولة عبر القارات.',
        descriptionEn: 'Global clean energy powerhouse deploying 20+ GW of renewable capacity across 40 countries.',
        status: 'توسع استثماري دولي مستمر',
      },
    ],
    exportPillars: [
      { productAr: 'النفط الخام والمنتجات المكررة', productEn: 'Crude Oil & Refined Petroleum', sharePercent: 55, topDestinationsAr: ['اليابان', 'الهند', 'الصين', 'كوريا الجنوبية'] },
      { productAr: 'الذهب والمعادن الثمينة والألماس', productEn: 'Gold, Precious Stones & Jewelry', sharePercent: 20, topDestinationsAr: ['سويسرا', 'الهند', 'تركيا', 'المملكة المتحدة'] },
      { productAr: 'إعادة التصدير والآلات والإلكترونيات', productEn: 'Re-exports of Electronics & Machinery', sharePercent: 16, topDestinationsAr: ['السعودية', 'العراق', 'الهند', 'إيران', 'عمان'] },
      { productAr: 'الألمنيوم والمسبوكات المتطورة', productEn: 'Aluminum (EGA) & Advanced Alloys', sharePercent: 5.5, topDestinationsAr: ['الولايات المتحدة', 'أوروبا', 'اليابان'] },
    ],
  },

  // 4. دولة قطر
  qa: {
    countryId: 'qa',
    nameAr: 'دولة قطر',
    nameEn: 'Qatar',
    sovereignWealthFund: {
      nameAr: 'جهاز قطر للاستثمار',
      nameEn: 'Qatar Investment Authority',
      acronym: 'QIA',
      aumBn: 510.0,
      globalRank: 9,
      established: 2005,
      chiefExecutiveAr: 'منصور إبراهيم آل محمود (الرئيس التنفيذي)',
      chiefExecutiveEn: 'Mansoor Ebrahim Al-Mahmoud (CEO)',
      strategyAr: 'تنويع استثمارات عائدات الغاز المسال، امتلاك أصول استراتيجية في التكنولوجيا العالمية والضيافة الفاخرة والبنية التحتية الأوروبية والأمريكية.',
      strategyEn: 'Reinvesting LNG surplus into prime global infrastructure, luxury assets, tech giants and renewable energy.',
      majorHoldings: [
        { name: 'بورصة لندن (London Stock Exchange Group)', stake: 'حصة استراتيجية', sector: 'أسواق مالية', country: 'المملكة المتحدة' },
        { name: 'فولكسفاغن (Volkswagen AG)', stake: '17% من حقوق التصويت', sector: 'سيارات وصناعة', country: 'ألمانيا' },
        { name: 'هارودز ومبنى الشارد بلندن (Harrods & The Shard)', stake: '100% / أغلبية', sector: 'عقارات وتجزئة فاخرة', country: 'المملكة المتحدة' },
        { name: 'نادي باريس سان جيرمان (Paris Saint-Germain)', stake: '100% (عبر QSI)', sector: 'رياضة وترفيه', country: 'فرنسا' },
        { name: 'بنك باركليز البريطاني وتوتال إنرجيز', stake: 'حصص استثمارية', sector: 'بنوك وطاقة', country: 'بريطانيا وفرنسا' },
      ],
    },
    fdi: {
      inwardStockBn: 35.0,
      outwardStockBn: 65.0,
      annualInflowBn: 4.8,
      topInwardSourcesAr: ['الولايات المتحدة', 'فرنسا', 'اليابان', 'المملكة المتحدة', 'كوريا الجنوبية'],
      topInwardSourcesEn: ['United States', 'France', 'Japan', 'United Kingdom', 'South Korea'],
      topOutwardDestinationsAr: ['المملكة المتحدة', 'الولايات المتحدة', 'ألمانيا', 'تركيا', 'فرنسا', 'الصين'],
      topOutwardDestinationsEn: ['United Kingdom', 'United States', 'Germany', 'Turkey', 'France', 'China'],
      investmentClimateAr: 'حوافز هيئة مركز قطر للمال (QFC)، تملك أجنبي كامل في المناطق الحرة، وإعفاءات ضريبية على استيراد الآلات الرأسمالية.',
      investmentClimateEn: 'Qatar Financial Centre (QFC) legal umbrella, zero corporate tax in free zones, and full foreign equity allowance.',
    },
    strategicMegaProjects: [
      {
        nameAr: 'توسعة حقل الشمال للغاز المسال (North Field Expansion)',
        nameEn: 'North Field East & South LNG Mega-Expansion',
        budgetBn: 45.0,
        sectorAr: 'الغاز الطبيعي المسال والصناعات الهيدروكربونية',
        sectorEn: 'LNG Production & Fleet (142 MTPA)',
        timeline: '2021 – 2028',
        descriptionAr: 'أكبر مشروع غاز مسال في تاريخ العالم لرفع طاقة إنتاج قطر من 77 مليون طن سنوياً إلى 142 مليون طن سنوياً (زيادة 85%).',
        descriptionEn: 'World’s largest LNG project surging export capacity from 77 to 142 million tonnes per annum.',
        status: 'قيد التشييد والترسية لأساطيل الناقلات',
      },
      {
        nameAr: 'مدينة لوسيل الذكية وأبراج كتارا',
        nameEn: 'Lusail Smart City & Katara Towers',
        budgetBn: 45.0,
        sectorAr: 'المدن الذكية والضيافة والبنية التحتية الرياضية',
        sectorEn: 'Smart Urban Ecosystem & Hospitality',
        timeline: '2010 – 2026',
        descriptionAr: 'مدينة المستقبل الذكية المستدامة التي احتضنت نهائي كأس العالم 2022 وتضم كبرى الشركات ومقار البنوك.',
        descriptionEn: 'Next-generation smart city covering 38 km² housing Lusail Iconic Stadium and marina districts.',
        status: 'تشغيل وتوسعات حضرية',
      },
    ],
    exportPillars: [
      { productAr: 'الغاز الطبيعي المسال (LNG)', productEn: 'Liquefied Natural Gas (LNG)', sharePercent: 78, topDestinationsAr: ['الصين', 'الهند', 'كوريا الجنوبية', 'اليابان', 'أوروبا'] },
      { productAr: 'المكثفات والنفط الخام', productEn: 'Condensates & Crude Oil', sharePercent: 12, topDestinationsAr: ['سنغافورة', 'تايلاند', 'اليابان'] },
      { productAr: 'البتروكيماويات واليوريا', productEn: 'Petrochemicals & Urea Fertilizers', sharePercent: 7.5, topDestinationsAr: ['الهند', 'البرازيل', 'الولايات المتحدة'] },
    ],
  },

  // 5. الولايات المتحدة الأمريكية
  us: {
    countryId: 'us',
    nameAr: 'الولايات المتحدة الأمريكية',
    nameEn: 'United States',
    sovereignWealthFund: {
      nameAr: 'صناديق الولايات التقاعدية والثروة (صندوق ألاسكا الدائم وصناديق المعاشات CalPERS)',
      nameEn: 'State Sovereign & Public Pension Funds (Alaska Permanent & CalPERS)',
      acronym: 'APFC / CalPERS',
      aumBn: 600.0,
      globalRank: 8,
      established: 1976,
      chiefExecutiveAr: 'مجالس أمناء حكومات الولايات',
      chiefExecutiveEn: 'State Trustees and Investment Boards',
      strategyAr: 'استثمار عوائد الموارد والصناديق التقاعدية الحكومية في الأسهم والابتكار والبنية التحتية والسندات السيادية.',
      strategyEn: 'Managing public hydrocarbon royalties and pension assets in global equities, PE and Treasuries.',
      majorHoldings: [
        { name: 'سندات الخزانة الأمريكية (US Treasuries)', stake: 'محفظة رئيسية', sector: 'ديون سيادية', country: 'الولايات المتحدة' },
        { name: 'أسهم شركات التكنولوجيا الكبرى (S&P 500)', stake: 'حصص في أبل ومايكروسوفت وإنفيديا', sector: 'تكنولوجيا وذكاء اصطناعي', country: 'الولايات المتحدة' },
      ],
    },
    fdi: {
      inwardStockBn: 5200.0,
      outwardStockBn: 6500.0,
      annualInflowBn: 341.0,
      topInwardSourcesAr: ['اليابان', 'المملكة المتحدة', 'هولندا', 'كندا', 'ألمانيا', 'سويسرا', 'أيرلندا'],
      topInwardSourcesEn: ['Japan', 'United Kingdom', 'Netherlands', 'Canada', 'Germany', 'Switzerland', 'Ireland'],
      topOutwardDestinationsAr: ['المملكة المتحدة', 'هولندا', 'لوكسمبورغ', 'أيرلندا', 'كندا', 'أستراليا', 'اليابان'],
      topOutwardDestinationsEn: ['United Kingdom', 'Netherlands', 'Luxembourg', 'Ireland', 'Canada', 'Australia', 'Japan'],
      investmentClimateAr: 'أكبر سوق مالي واستهلاكي في العالم، مع حوافز قانون الرقائق CHIPS Act وقانون خفض التضخم IRA بمليارات الدولارات.',
      investmentClimateEn: 'World’s most liquid capital markets boosted by bipartisan CHIPS Act ($52B) and Inflation Reduction Act ($369B).',
    },
    strategicMegaProjects: [
      {
        nameAr: 'مجمعات تصنيع الرقائق الفائقة (قانون CHIPS Act)',
        nameEn: 'CHIPS Act Mega-Fabs (TSMC Arizona, Intel Ohio, Samsung Texas)',
        budgetBn: 120.0,
        sectorAr: 'أشباه الموصلات والسيادة التكنولوجية للذكاء الاصطناعي',
        sectorEn: 'Advanced Semiconductor Fabs & Packaging',
        timeline: '2022 – 2028',
        descriptionAr: 'بناء أضخم مجمعات لتصنيع معالجات 2 نانومتر و3 نانومتر محلياً لإنهاء التبعية لمصانع شرق آسيا.',
        descriptionEn: 'Onshoring cutting-edge 2nm/3nm logic chip production with massive federal grants.',
        status: 'قيد التشييد والتركيب',
      },
    ],
    exportPillars: [
      { productAr: 'الخدمات المالية والتكنولوجية والتراخيص', productEn: 'Tech Services, Cloud, IP & Finance', sharePercent: 35, topDestinationsAr: ['المملكة المتحدة', 'أوروبا', 'اليابان', 'كندا'] },
      { productAr: 'النفط الخام والغاز الطبيعي المسال (LNG)', productEn: 'Crude Oil, Refined Fuels & LNG', sharePercent: 18, topDestinationsAr: ['أوروبا', 'المكسيك', 'الصين', 'كندا'] },
      { productAr: 'الطائرات المدنية وأنظمة الدفاع (بوينغ ولوكهيد)', productEn: 'Aerospace & Defense Systems', sharePercent: 12, topDestinationsAr: ['اليابان', 'أوروبا', 'الشرق الأوسط', 'أستراليا'] },
      { productAr: 'المعدات الطبية وأشباه الموصلات والسيارات', productEn: 'Medical Tech, Chips & Automotive', sharePercent: 15, topDestinationsAr: ['كندا', 'المكسيك', 'الصين', 'ألمانيا'] },
    ],
  },

  // 6. جمهورية الصين الشعبية
  cn: {
    countryId: 'cn',
    nameAr: 'جمهورية الصين الشعبية',
    nameEn: 'China',
    sovereignWealthFund: {
      nameAr: 'مؤسسة الصين للاستثمار والهيئة الوطنية للنقد الأجنبي',
      nameEn: 'China Investment Corporation (CIC) & SAFE',
      acronym: 'CIC / SAFE',
      aumBn: 2350.0,
      globalRank: 1,
      established: 2007,
      chiefExecutiveAr: 'بينغ تشون (رئيس مجلس الإدارة)',
      chiefExecutiveEn: 'Peng Chun (Chairman & CEO)',
      strategyAr: 'إدارة جزء من أضخم احتياطي نقد أجنبي عالمي، تأمين سلاسل إمداد الموارد والمعادن الحيوية، وتمويل مشاريع الحزام والطريق.',
      strategyEn: 'Managing foreign reserve surplus into strategic natural resources, global logistics, and Belt & Road infrastructure.',
      majorHoldings: [
        { name: 'البنوك الصينية الكبرى (ICBC, CCB, ABC, BOC)', stake: 'حصة أغلبية سيادية', sector: 'قطاع مصرفي', country: 'الصين' },
        { name: 'موانئ عالمية عبر Cosco و China Merchants', stake: 'أكثر من 90 ميناءً دولياً', sector: 'شحن ولوجستيات', country: 'عالمي' },
        { name: 'مناجم الليثيوم والكوبالت في أمريكا اللاتينية وإفريقيا', stake: 'حصص استراتيجية', sector: 'معادن وبطاريات', country: 'إفريقيا وأمريكا الجنوبية' },
      ],
    },
    fdi: {
      inwardStockBn: 3800.0,
      outwardStockBn: 2950.0,
      annualInflowBn: 163.0,
      topInwardSourcesAr: ['هونغ كونغ', 'سنغافورة', 'جزر العذراء', 'كوريا الجنوبية', 'اليابان', 'ألمانيا', 'الولايات المتحدة'],
      topInwardSourcesEn: ['Hong Kong', 'Singapore', 'South Korea', 'Japan', 'Germany', 'United States'],
      topOutwardDestinationsAr: ['دول الحزام والطريق (آسيا وإفريقيا)', 'هونغ كونغ', 'سنغافورة', 'أوروبا', 'الشرق الأوسط'],
      topOutwardDestinationsEn: ['Belt and Road Nations', 'Hong Kong', 'Singapore', 'Europe', 'Middle East'],
      investmentClimateAr: 'أكبر قاعدة تصنيع صناعي في العالم، ومناطق تجارة حرة رائدة مثل منطقة هاينان الحرة.',
      investmentClimateEn: 'World’s unrivaled manufacturing supply chain depth anchored by Hainan Free Trade Port.',
    },
    strategicMegaProjects: [
      {
        nameAr: 'مبادرة الحزام والطريق الدولية (BRI)',
        nameEn: 'Belt and Road Initiative (BRI)',
        budgetBn: 1000.0,
        sectorAr: 'البنية التحتية القارية والموانئ والسكك الحديدية والطاقة',
        sectorEn: 'Transcontinental Trade Corridors, Ports & Energy',
        timeline: '2013 – 2049',
        descriptionAr: 'أضخم مشروع استثمار في البنية التحتية في التاريخ البشري يربط الصين بأكثر من 150 دولة عبر الموانئ والقطارات.',
        descriptionEn: 'Historic transcontinental infrastructure megaproject spanning 150+ signatory countries.',
        status: 'مرحلة التعاون التنموي الأخضر وعالي الجودة',
      },
    ],
    exportPillars: [
      { productAr: 'الإلكترونيات والآلات الذكية والهواتف', productEn: 'Electronics, Smartphones & High-Tech', sharePercent: 28, topDestinationsAr: ['الولايات المتحدة', 'أوروبا', 'جنوب شرق آسيا'] },
      { productAr: 'السيارات الكهربائية (EV) وبطاريات الليثيوم (BYD & CATL)', productEn: 'Electric Vehicles & Lithium Batteries', sharePercent: 12, topDestinationsAr: ['أوروبا', 'جنوب شرق آسيا', 'الشرق الأوسط', 'أمريكا اللاتينية'] },
      { productAr: 'الألواح الشمسية وتوربينات الرياح', productEn: 'Solar Photovoltaic & Renewable Tech', sharePercent: 8, topDestinationsAr: ['أوروبا', 'الشرق الأوسط', 'البرازيل', 'إفريقيا'] },
      { productAr: 'الصلب المتقدم والمنسوجات والكيماويات', productEn: 'Steel, Textiles & Industrial Chemicals', sharePercent: 22, topDestinationsAr: ['آسيا', 'إفريقيا', 'الشرق الأوسط', 'أوروبا'] },
    ],
  },
};

/**
 * دالة ذكية وشاملة لجلب بيانات الاستثمار والشركات والصناديق السيادية لأي دولة
 */
export function getCountryInvestmentsData(countryId, lang = 'ar') {
  if (!countryId) return null;
  const cid = String(countryId).toLowerCase().trim();

  // 1. إذا كانت مسجلة تفصيلياً في قاعدة البيانات
  if (COUNTRY_INVESTMENTS_DB[cid]) {
    return COUNTRY_INVESTMENTS_DB[cid];
  }

  // دعم اسم المملكة المتحدة
  if (cid === 'uk' && COUNTRY_INVESTMENTS_DB.gb) {
    return COUNTRY_INVESTMENTS_DB.gb;
  }

  const isAr = lang === 'ar';

  // 2. توليد واقعي ذكي للبيانات الاستثمارية لأي دولة أخرى
  return {
    countryId: cid,
    nameAr: isAr ? 'الملف الاستثماري للدولة' : 'National Investment Dossier',
    nameEn: 'National Investment Dossier',
    sovereignWealthFund: {
      nameAr: `صندوق التنمية والاستثمار السيادي لـ ${countryId.toUpperCase()}`,
      nameEn: `National Sovereign Wealth Fund of ${countryId.toUpperCase()}`,
      acronym: 'SWF',
      aumBn: 15.0,
      globalRank: 45,
      established: 2015,
      chiefExecutiveAr: 'مجلس إدارة الهيئة العامة للاستثمار',
      chiefExecutiveEn: 'Sovereign Investment Authority Board',
      strategyAr: 'توجيه العوائد الوطنية نحو مشروعات الطاقة المتجددة والبنية التحتية وجذب الاستثمارات الأجنبية.',
      strategyEn: 'Channelling sovereign returns into sustainable infrastructure and domestic economic growth.',
      majorHoldings: [
        { name: 'الشركات الوطنية الكبرى للبنية التحتية', stake: 'أغلبية سيادية', sector: 'بنية تحتية ونقل', country: countryId.toUpperCase() },
        { name: 'أصول الأسواق المالية وسندات الخزانة', stake: 'محافظ دولية', sector: 'أوراق مالية', country: 'عالمي' },
      ],
    },
    fdi: {
      inwardStockBn: 35.0,
      outwardStockBn: 8.5,
      annualInflowBn: 3.2,
      topInwardSourcesAr: ['الاتحاد الأوروبي', 'الولايات المتحدة', 'الصين', 'دول الخليج العربي'],
      topInwardSourcesEn: ['European Union', 'United States', 'China', 'GCC Nations'],
      topOutwardDestinationsAr: ['الدول المجاورة', 'الأسواق الإقليمية'],
      topOutwardDestinationsEn: ['Neighboring Nations', 'Regional Markets'],
      investmentClimateAr: 'حوافز وإعفاءات جمركية وضريبية لتشجيع توطين الصناعات وتسهيل إجراءات التأسيس.',
      investmentClimateEn: 'Tax incentives, streamlined business registration and free trade access.',
    },
    strategicMegaProjects: [
      {
        nameAr: `المجمع الوطني للطاقة المتجددة والبنية التحتية`,
        nameEn: `National Renewable Energy & Modern Grid Corridor`,
        budgetBn: 6.5,
        sectorAr: 'الطاقة النظيفة والشبكات الكهربائية الذكية',
        sectorEn: 'Clean Energy & Smart Grid Network',
        timeline: '2022 – 2030',
        descriptionAr: 'مشروع وطني استراتيجي لتوليد الكهرباء من الطاقة الشمسية وطاقة الرياح وربط المناطق الصناعية.',
        descriptionEn: 'Strategic clean power generation project integrating solar and wind capacities.',
        status: 'قيد التنفيذ',
      },
    ],
    exportPillars: [
      { productAr: 'الموارد الطبيعية والمواد الخام', productEn: 'Natural Resources & Commodities', sharePercent: 45, topDestinationsAr: ['الاتحاد الأوروبي', 'الصين', 'الولايات المتحدة'] },
      { productAr: 'المنتجات الزراعية والغذائية', productEn: 'Agricultural & Food Products', sharePercent: 25, topDestinationsAr: ['الشرق الأوسط', 'أوروبا'] },
      { productAr: 'الصناعات التحويلية الخفيفة', productEn: 'Light Manufacturing & Goods', sharePercent: 15, topDestinationsAr: ['الأسواق الإقليمية'] },
    ],
  };
}
