/**
 * سجل الشركات العالمية والمحلية الكبرى لدول العالم
 * Comprehensive Global & Local Corporate Registry by Country
 */

export const COUNTRY_COMPANIES_DB = {
  // المملكة العربية السعودية
  sa: [
    { name: 'أرامكو السعودية (Saudi Aramco)', sectorAr: 'النفط والطاقة والبتروكيماويات', sectorEn: 'Oil, Gas & Energy', type: 'global', valuation: '$1,900B', roleAr: 'أكبر شركة طاقة متكاملة في العالم والعمود الفقري للاقتصاد الوطني.', roleEn: 'World’s most valuable energy enterprise.' },
    { name: 'سابك (SABIC)', sectorAr: 'البتروكيماويات والكيماويات المتخصصة', sectorEn: 'Chemicals & Petrochemicals', type: 'global', valuation: '$65B', roleAr: 'رائدة عالمية في تصنيع الكيماويات والبوليمرات وتعمل في أكثر من 50 دولة.', roleEn: 'Global leader in diversified chemicals operating in 50+ nations.' },
    { name: 'شركة الاتصالات السعودية (stc)', sectorAr: 'الاتصالات والتحول الرقمي', sectorEn: 'Telecom & Digital Infrastructure', type: 'global', valuation: '$52B', roleAr: 'أكبر مزود اتصالات وتقنيات سحابية في الشرق الأوسط.', roleEn: 'Largest telecom and cloud operator across MENA.' },
    { name: 'معادن (Ma\'aden)', sectorAr: 'التعدين والمعادن والأسمدة', sectorEn: 'Mining & Phosphates', type: 'global', valuation: '$38B', roleAr: 'عملاق التعدين الوطني وواحدة من أكبر منتجي الفوسفات والألمنيوم عالمياً.', roleEn: 'National mining champion and global fertilizer powerhouse.' },
    { name: 'الشركة السعودية للصناعات العسكرية (SAMI)', sectorAr: 'الصناعات الحربية والدفاعية', sectorEn: 'Defense & Aerospace', type: 'local', valuation: '$15B', roleAr: 'الكيان السيادي لتوطين 50% من الإنفاق العسكري وصناعة الرادارات والمسيرات.', roleEn: 'Sovereign defense industrial localization champion.' },
    { name: 'البنك الأهلي السعودي (SNB)', sectorAr: 'الخدمات المصرفية والاستثمار', sectorEn: 'Banking & Financial Services', type: 'local', valuation: '$62B', roleAr: 'أكبر بنك تجاري في المملكة وممول رئيسي لمشاريع رؤية 2030.', roleEn: 'Largest commercial lender financing mega giga-projects.' },
    { name: 'شركة نيوم (NEOM Company)', sectorAr: 'التطوير الحضري المستقبلي والطاقة النظيفة', sectorEn: 'Smart Cities & Clean Energy', type: 'local', valuation: '$500B Planned', roleAr: 'المشروع الحضري السيادي الأكبر لتطوير مدن المستقبل والهيدروجين الأخضر.', roleEn: 'Flagship sovereign mega-project developer.' },
    { name: 'أكوا باور (ACWA Power)', sectorAr: 'تحلية المياه والطاقة المتجددة', sectorEn: 'Renewable Energy & Desalination', type: 'global', valuation: '$35B', roleAr: 'أكبر شركة خاصة لتحلية المياه في العالم ورائدة الطاقة الشمسية وطاقة الرياح.', roleEn: 'Global leader in water desalination and green hydrogen.' },
  ],

  // جمهورية مصر العربية
  eg: [
    { name: 'الشركة الشرقية - إيسترن كومباني', sectorAr: 'الصناعات الاستهلاكية', sectorEn: 'Consumer Goods & Manufacturing', type: 'local', valuation: '$4.2B', roleAr: 'واحدة من أقدم وأكبر القلاع الصناعية الاستهلاكية في مصر.', roleEn: 'One of Egypt’s largest industrial conglomerates.' },
    { name: 'البنك التجاري الدولي (CIB)', sectorAr: 'القطاع المصرفي والمالي', sectorEn: 'Banking & Financial Services', type: 'global', valuation: '$6.5B', roleAr: 'أكبر بنك قطاع خاص في مصر مع تواجد في أفريقيا وبورصة لندن.', roleEn: 'Egypt’s premier private sector lender with African expansion.' },
    { name: 'أوراسكوم للإنشاءات (Orascom Construction)', sectorAr: 'الهندسة والبنية التحتية والمقاولات', sectorEn: 'Engineering & Construction', type: 'global', valuation: '$5.0B', roleAr: 'مجموعة هندسية متعددة الجنسيات تنفذ مشروعات المونوريل والقطار السريع ومحطات الطاقة.', roleEn: 'Global engineering contractor operating across MENA and USA.' },
    { name: 'المصرية للاتصالات (Telecom Egypt - WE)', sectorAr: 'الاتصالات والكابلات البحرية', sectorEn: 'Telecom & Submarine Cables', type: 'local', valuation: '$4.8B', roleAr: 'مشغل الاتصالات الوطني ومحور عبور أكثر من 17 كابلاً بحرياً للإنترنت العالمي.', roleEn: 'National operator controlling key strategic global internet undersea cables.' },
    { name: 'السويدي إليكتريك (Elsewedy Electric)', sectorAr: 'الكابلات ومحطات الطاقة والمحولات', sectorEn: 'Energy Solutions & Cables', type: 'global', valuation: '$3.8B', roleAr: 'رائدة حلول الطاقة والبنية التحتية في أفريقيا والشرق الأوسط والخليج.', roleEn: 'Multi-national energy solutions provider across Africa & Gulf.' },
    { name: 'مجموعة طلعت مصطفى (TMG Holding)', sectorAr: 'التطوير العقاري والمدن الذكية', sectorEn: 'Real Estate & Mega-Cities', type: 'local', valuation: '$5.5B', roleAr: 'أكبر مطور عقاري حضري في مصر ومطور مشروع "بنان" بالرياض ومدينتي.', roleEn: 'Leading mega-community developer in Egypt and GCC.' },
    { name: 'الهيئة العربية للتصنيع (AOI)', sectorAr: 'الصناعات الدفاعية والمدنية المتطورة', sectorEn: 'Defense & Aerospace Systems', type: 'local', valuation: '$8.0B', roleAr: 'صرح التصنيع العسكري المصري للمدرعات وعمرة الطائرات وتجميع الصواريخ.', roleEn: 'Sovereign defense manufacturing conglomerate.' },
  ],

  // الولايات المتحدة الأمريكية
  us: [
    { name: 'أبل (Apple Inc.)', sectorAr: 'التكنولوجيا الاستهلاكية والحواسيب', sectorEn: 'Consumer Electronics & Software', type: 'global', valuation: '$3,400B', roleAr: 'أكبر شركة تكنولوجية في العالم ومصنعة هواتف آيفون وأنظمة التشغيل.', roleEn: 'World’s most valuable consumer technology company.' },
    { name: 'مايكروسوفت (Microsoft)', sectorAr: 'الحوسبة السحابية والذكاء الاصطناعي', sectorEn: 'Cloud & Enterprise AI', type: 'global', valuation: '$3,100B', roleAr: 'عملاق البرمجيات وخدمات السحابة Azure والشريك الرئيسي لـ OpenAI.', roleEn: 'Global enterprise software, Azure cloud & AI leader.' },
    { name: 'إنفيديا (NVIDIA)', sectorAr: 'أشباه الموصلات ومعالجات الذكاء الاصطناعي', sectorEn: 'AI Semiconductors & GPUs', type: 'global', valuation: '$2,900B', roleAr: 'المحتكر العالمي للرقائق الفائقة المشغلة لنماذج الذكاء الاصطناعي التوليدي.', roleEn: 'Undisputed global leader in accelerated AI computing hardware.' },
    { name: 'لوكهيد مارتن (Lockheed Martin)', sectorAr: 'الصناعات الدفاعية والفضائية', sectorEn: 'Defense & Aerospace', type: 'global', valuation: '$115B', roleAr: 'أكبر مقاول دفاعي في العالم ومصنعة مقاتلات F-35 وصواريخ HIMARS.', roleEn: 'World’s top defense contractor, maker of F-35 & HIMARS.' },
    { name: 'إكسون موبيل (ExxonMobil)', sectorAr: 'النفط والطاقة الصخرية', sectorEn: 'Energy & Oil Supermajor', type: 'global', valuation: '$480B', roleAr: 'أكبر شركة نفط أمريكية وغاز طبيعي مسال.', roleEn: 'Largest Western multinational oil and gas supermajor.' },
    { name: 'سبيس إكس (SpaceX)', sectorAr: 'الفضاء والأقمار الصناعية (Starlink)', sectorEn: 'Aerospace & Satellite Constellations', type: 'global', valuation: '$210B', roleAr: 'رائدة رحلات الفضاء القابلة لإعادة الاستخدام وشبكة الإنترنت الفضائي العسكري والمدني.', roleEn: 'Dominant global orbital launch provider & Starlink operator.' },
    { name: 'جي بي مورغان تشيس (JPMorgan Chase)', sectorAr: 'القطاع المصرفي والاستثماري', sectorEn: 'Banking & Financial Giant', type: 'global', valuation: '$590B', roleAr: 'أكبر بنك تجاري واستثماري في الولايات المتحدة والعالم.', roleEn: 'Largest bank in the United States and systemically vital institution.' },
  ],

  // جمهورية الصين الشعبية
  cn: [
    { name: 'سينوبك (Sinopec Group)', sectorAr: 'النفط والتكرير والبتروكيماويات', sectorEn: 'Oil Refining & Petrochemicals', type: 'global', valuation: '$450B Rev', roleAr: 'أكبر شركة تكرير نفط وبتروكيماويات في آسيا والعالم.', roleEn: 'World’s largest oil refining and petrochemical conglomerate.' },
    { name: 'شركة بي واي دي (BYD Auto)', sectorAr: 'السيارات الكهربائية وبطاريات الليثيوم', sectorEn: 'Electric Vehicles & Batteries', type: 'global', valuation: '$95B', roleAr: 'أكبر منتج للمركبات الكهربائية في العالم متجاوزة تيسلا في حجم الإنتاج.', roleEn: 'World’s largest electric vehicle manufacturer by volume.' },
    { name: 'هواوي (Huawei Technologies)', sectorAr: 'شبكات 5G والاتصالات والرقائق', sectorEn: 'Telecom, 5G & Advanced Chips', type: 'global', valuation: '$100B Rev', roleAr: 'رائدة الاتصالات الصينية التي طورت معالجات سيادية مستقلة رغم العقوبات.', roleEn: 'Global telecom giant with sovereign Kirin silicon architecture.' },
    { name: 'تينسنت (Tencent Holdings)', sectorAr: 'الإنترنت والألعاب والمدفوعات (WeChat)', sectorEn: 'Internet, Gaming & Fintech', type: 'global', valuation: '$450B', roleAr: 'مطور تطبيق WeChat المظلي وأكبر شركة ألعاب رقمية في العالم.', roleEn: 'Tech giant operating WeChat digital ecosystem and gaming empire.' },
    { name: 'شركة الطيران والصناعات الفضائية (AVIC)', sectorAr: 'صناعة الطائرات المقاتلة والمدنية', sectorEn: 'Aviation & Military Aircraft', type: 'local', valuation: '$85B', roleAr: 'المصنع العسكري لمقاتلات الجيل الخامس J-20 وطائرات C919 المدنية.', roleEn: 'State aerospace conglomerate building J-20 stealth fighters.' },
    { name: 'بنك الصين الصناعي والتجاري (ICBC)', sectorAr: 'القطاع المصرفي السيادي', sectorEn: 'Sovereign Commercial Banking', type: 'global', valuation: '$5,500B Assets', roleAr: 'أكبر بنك في العالم من حيث إجمالي الأصول ورأس المال الأساسي.', roleEn: 'World’s largest bank by total assets and tier 1 capital.' },
  ],

  // روسيا الاتحادية
  ru: [
    { name: 'غازبروم (Gazprom)', sectorAr: 'الغاز الطبيعي وخطوط الأنابيب', sectorEn: 'Natural Gas & Energy Pipelines', type: 'global', valuation: '$75B', roleAr: 'أكبر شركة استخراج وتصدير غاز طبيعي في أوراسيا.', roleEn: 'World’s largest natural gas extractor and pipeline operator.' },
    { name: 'روسنفت (Rosneft)', sectorAr: 'استخراج وتصدير النفط الخام', sectorEn: 'Oil Extraction & Exploration', type: 'global', valuation: '$70B', roleAr: 'عملاق النفط الحكومي الروسي المنتج لأكثر من 4 ملايين برميل يومياً.', roleEn: 'Russia’s largest crude oil extraction and refining corporation.' },
    { name: 'روستيخ (Rostec)', sectorAr: 'التصنيع الدفاعي والتكنولوجيا الفائقة', sectorEn: 'Defense Conglomerate & Tech', type: 'local', valuation: '$35B', roleAr: 'المظلة السيادية لكبرى مصانع السلاح الروسية (سوخوي، ميغ، كلاشينكوف، وكلاش).', roleEn: 'Sovereign defense umbrella overseeing Sukhoi, Kalashnikov & Uralvagonzavod.' },
    { name: 'روساتوم (Rosatom)', sectorAr: 'الطاقة النووية والمفاعلات الذرية', sectorEn: 'Nuclear Energy & Power Plants', type: 'global', valuation: '$25B Rev', roleAr: 'الشركة الأولى عالمياً في تصدير وتشييد المفاعلات النووية (مثل الضبعة بمصر وأكويو بتركيا).', roleEn: 'World’s dominant nuclear power plant exporter and fuel enricher.' },
    { name: 'سبيربنك (Sberbank)', sectorAr: 'الخدمات المصرفية والذكاء الاصطناعي', sectorEn: 'Banking, Fintech & AI Ecosystem', type: 'local', valuation: '$65B', roleAr: 'أكبر بنك ومؤسسة مالية رقمية في روسيا وشرق أوروبا.', roleEn: 'Russia’s dominant financial institution and AI developer.' },
  ],

  // الإمارات العربية المتحدة
  ae: [
    { name: 'أدنوك (ADNOC)', sectorAr: 'النفط والغاز والطاقة النظيفة', sectorEn: 'Oil, Gas & Low-Carbon Energy', type: 'global', valuation: '$150B+', roleAr: 'عملاق الطاقة الإماراتي الذي يقود استثمارات بمليارات الدولارات في الهيدروجين والغاز المسال.', roleEn: 'One of the world’s leading energy producers and chemical investors.' },
    { name: 'مجموعة إيدج للدفاع (EDGE Group)', sectorAr: 'الصناعات الدفاعية المتقدمة والمسيرات', sectorEn: 'Advanced Defense & Autonomous Systems', type: 'global', valuation: '$7.5B Rev', roleAr: 'أكبر تكتل دفاعي في الشرق الأوسط ومصنّع للدرونات والذخائر الموجهة والأنظمة السيبرانية.', roleEn: 'Fastest-growing defense conglomerate specializing in UAVs & electronic warfare.' },
    { name: 'طيران الإمارات (Emirates Airline)', sectorAr: 'الطيران والنقل الجوي الدولي', sectorEn: 'Global Aviation & Logistics', type: 'global', valuation: '$35B', roleAr: 'أكبر ناقل جوي دولي يربط قارات العالم عبر مطار دبي الدولي.', roleEn: 'World’s premier international long-haul airline.' },
    { name: 'موانئ دبي العالمية (DP World)', sectorAr: 'الموانئ وسلاسل الإمداد العالمية', sectorEn: 'Ports, Logistics & Maritime Trade', type: 'global', valuation: '$30B', roleAr: 'تدير أكثر من 80 ميناءً ومحطة بحرية في القارات الست.', roleEn: 'Global logistics operator handling 10% of world container traffic.' },
    { name: 'إعمار العقارية (Emaar Properties)', sectorAr: 'التطوير العقاري والأيقونات المعمارية', sectorEn: 'Real Estate & Urban Development', type: 'global', valuation: '$22B', roleAr: 'مطورة برج خليفة ودبي مول ومشاريع الاستثمار العقاري الكبرى إقليمياً.', roleEn: 'World-renowned master-planner behind Burj Khalifa and Dubai Mall.' },
    { name: 'بنك أبوظبي الأول (FAB)', sectorAr: 'الخدمات المصرفية السيادية والاستثمارية', sectorEn: 'Banking & Financial Markets', type: 'local', valuation: '$45B', roleAr: 'أكبر بنك في دولة الإمارات ومحرك الصفقات الاستثمارية السيادية.', roleEn: 'UAE’s largest bank and primary arranger of sovereign bond issuances.' },
  ],

  // المملكة المتحدة
  gb: [
    { name: 'بي بي (BP plc)', sectorAr: 'النفط والغاز والطاقة المتكاملة', sectorEn: 'Oil, Gas & Energy', type: 'global', valuation: '$105B', roleAr: 'واحدة من عمالقة النفط الستة الكبار في العالم.', roleEn: 'One of the global supermajors in oil and gas.' },
    { name: 'بي إيه إي سيستمز (BAE Systems)', sectorAr: 'الصناعات الدفاعية والفضائية', sectorEn: 'Defense & Aerospace', type: 'global', valuation: '$48B', roleAr: 'أكبر مقاول دفاعي في أوروبا ومصنعة مقاتلات تايفون والغواصات النووية.', roleEn: 'Europe’s largest defense contractor, maker of Typhoon & Astute subs.' },
    { name: 'أسترازينيكا (AstraZeneca)', sectorAr: 'الأدوية الحيوية واللقاحات', sectorEn: 'Pharmaceuticals & Biotechnology', type: 'global', valuation: '$220B', roleAr: 'رائدة ابتكار العلاجات الطبية ومصنعة لقاحات كوفيد-19 العالمية.', roleEn: 'Global biopharmaceutical champion.' },
    { name: 'رولز رويس (Rolls-Royce SMR & Aerospace)', sectorAr: 'محركات الطائرات والمفاعلات النووية', sectorEn: 'Aero Engines & Nuclear Tech', type: 'global', valuation: '$45B', roleAr: 'مصنعة محركات المقاتلات والطائرات المدنية والمفاعلات النووية المصغرة.', roleEn: 'Premier manufacturer of aircraft engines and naval nuclear reactors.' },
    { name: 'بنك باركليز (Barclays)', sectorAr: 'الخدمات المصرفية والاستثمارية العالمية', sectorEn: 'Global Banking & Markets', type: 'local', valuation: '$42B', roleAr: 'مؤسسة مالية بريطانية تاريخية تدير عمليات التمويل في لندن ونيويورك.', roleEn: 'Major multinational investment bank based in London.' },
  ],

  // فرنسا
  fr: [
    { name: 'توتال إنرجيز (TotalEnergies)', sectorAr: 'النفط والغاز الطبيعي المسال', sectorEn: 'Energy & LNG Supermajor', type: 'global', valuation: '$165B', roleAr: 'رائدة تصدير الغاز المسال والاستثمار في الطاقة الشمسية عالمياً.', roleEn: 'French multinational energy supermajor leading in LNG.' },
    { name: 'إيرباص (Airbus SE)', sectorAr: 'صناعة الطائرات المدنية والعسكرية والفضاء', sectorEn: 'Aerospace & Aviation', type: 'global', valuation: '$130B', roleAr: 'المنافس الأكبر لبوينغ في صناعة طائرات الركاب والناقلات العسكرية A400M.', roleEn: 'World’s largest airliner manufacturer and defense contractor.' },
    { name: 'داسو للطيران (Dassault Aviation)', sectorAr: 'المقاتلات الحربية وطائرات رجال الأعمال', sectorEn: 'Fighter Aircraft & Defense', type: 'global', valuation: '$22B', roleAr: 'المصنعة الوطنية لمقاتلات الرافال (Rafale) وطائرات فالكون.', roleEn: 'Maker of the Rafale omnirole combat aircraft.' },
    { name: 'تاليس (Thales Group)', sectorAr: 'إلكترونيات الدفاع والرادارات والأقمار الصناعية', sectorEn: 'Defense Electronics & Radars', type: 'global', valuation: '$32B', roleAr: 'رائدة الرادارات الممسوحة إلكترونياً (AESA) وأنظمة الأمن السيبراني.', roleEn: 'Global leader in aerospace avionics and radar sensors.' },
    { name: 'بي إن بي باريبا (BNP Paribas)', sectorAr: 'القطاع المصرفي الأوروبي', sectorEn: 'Banking & Financial Giant', type: 'local', valuation: '$82B', roleAr: 'أكبر بنك تجاري في الاتحاد الأوروبي من حيث حجم الأصول.', roleEn: 'Eurozone’s largest banking group by total assets.' },
  ],

  // ألمانيا
  de: [
    { name: 'مجموعة راينميتال (Rheinmetall AG)', sectorAr: 'الصناعات الدفاعية والذخائر والدبابات', sectorEn: 'Defense Technology & Munitions', type: 'global', valuation: '$28B', roleAr: 'كبرى مصانع السلاح في أوروبا ومصنعة مدافع دبابات ليوبارد وراجمات الصواريخ.', roleEn: 'Germany’s leading defense contractor, supplier of artillery & armor.' },
    { name: 'سيمنز (Siemens AG)', sectorAr: 'الأتمتة الصناعية والتكنولوجيا الفائقة', sectorEn: 'Industrial Automation & Tech', type: 'global', valuation: '$150B', roleAr: 'رائدة التحول الرقمي للقطاع الصناعي وتقنيات الطاقة المتجددة.', roleEn: 'Europe’s largest industrial manufacturing company.' },
    { name: 'إس إيه بي (SAP SE)', sectorAr: 'برمجيات إدارة المؤسسات وقواعد البيانات', sectorEn: 'Enterprise Software & Cloud', type: 'global', valuation: '$240B', roleAr: 'أكبر شركة تكنولوجيا وبرمجيات سحابية في القارة الأوروبية.', roleEn: 'World’s leading enterprise application software vendor.' },
    { name: 'فولكسفاغن (Volkswagen Group)', sectorAr: 'صناعة السيارات والشاحنات', sectorEn: 'Automotive Conglomerate', type: 'global', valuation: '$65B', roleAr: 'أكبر صانع سيارات في أوروبا ومن رواد الانتقال نحو المركبات الكهربائية.', roleEn: 'World’s second-largest automaker by sales.' },
    { name: 'باسف (BASF SE)', sectorAr: 'الصناعات الكيميائية والبوليمرات', sectorEn: 'Chemicals & Materials', type: 'local', valuation: '$48B', roleAr: 'أكبر شركة كيماويات في العالم ومحرك سلاسل التوريد الصناعية.', roleEn: 'Largest chemical producer in the world.' },
  ],

  // الجمهورية التركية
  tr: [
    { name: 'بايكار للتكنولوجيا (Baykar Tech)', sectorAr: 'الطائرات المسيرة والذكاء الاصطناعي العسكري', sectorEn: 'UAVs & Autonomous Defense', type: 'global', valuation: '$8.5B', roleAr: 'المصنعة الشهيرة لمسيرات بيرقدار TB2 وأكينجي وقزل إلما المصدرة لأكثر من 30 دولة.', roleEn: 'World’s premier armed drone exporter (Bayraktar TB2 & Akıncı).' },
    { name: 'أسيلسان (Aselsan)', sectorAr: 'إلكترونيات الدفاع والرادارات والحروب الإلكترونية', sectorEn: 'Defense Electronics & Avionics', type: 'global', valuation: '$7.5B', roleAr: 'العملاق الإلكتروني التركي الذي يزود المقاتلات والدبابات برادارات AESA.', roleEn: 'Turkey’s premier defense electronics and radar powerhouse.' },
    { name: 'توساش / تاي (TAI - Turkish Aerospace)', sectorAr: 'صناعة المقاتلات والمروحيات والأقمار الصناعية', sectorEn: 'Aerospace & Combat Aircraft', type: 'local', valuation: '$6.0B', roleAr: 'مطورة مقاتلة الجيل الخامس التركية (KAAN) ومروحيات أتاك التكتيكية.', roleEn: 'National aerospace manufacturer developing TF Kaan 5th-Gen fighter.' },
    { name: 'الخطوط الجوية التركية (Turkish Airlines)', sectorAr: 'الطيران والنقل الجوي القاري', sectorEn: 'Aviation & Global Air Travel', type: 'global', valuation: '$14B', roleAr: 'الناقل الجوي الذي يصل إلى أكبر عدد من الدول والوجهات في العالم.', roleEn: 'Airline flying to more international countries than any other.' },
    { name: 'كوتش القابضة (Koç Holding)', sectorAr: 'تكتل صناعي وطاقة وسيارات', sectorEn: 'Industrial Conglomerate', type: 'local', valuation: '$16B', roleAr: 'أكبر تكتل شركات عائلي في تركيا يساهم بنسبة 8% من الناتج القومي.', roleEn: 'Turkey’s largest industrial and investment group.' },
  ],

  // اليابان
  jp: [
    { name: 'تويوتا موتور (Toyota Motor Corp)', sectorAr: 'السيارات وتكنولوجيا الهيدروجين', sectorEn: 'Automotive & Mobility', type: 'global', valuation: '$290B', roleAr: 'أكبر صانع سيارات في العالم من حيث حجم المبيعات والموثوقية.', roleEn: 'World’s top automotive manufacturer.' },
    { name: 'ميتسوبيشي للصناعات الثقيلة (MHI)', sectorAr: 'الصناعات الدفاعية والفضائية والتوربينات', sectorEn: 'Defense, Aerospace & Machinery', type: 'global', valuation: '$42B', roleAr: 'المقاول الدفاعي الأول في اليابان ومطور مقاتلة الجيل السادس GCAP.', roleEn: 'Japan’s leading defense contractor developing GCAP next-gen fighter.' },
    { name: 'سوني (Sony Group)', sectorAr: 'التكنولوجيا والترفيه ومستشعرات الكاميرات', sectorEn: 'Consumer Electronics & Entertainment', type: 'global', valuation: '$115B', roleAr: 'المحتكر العالمي لمستشعرات الصور CMOS المستخدمة في الهواتف والأقمار.', roleEn: 'Global entertainment and CMOS image sensor leader.' },
  ],

  // الهند
  in: [
    { name: 'ريلاينس إندستريز (Reliance Industries)', sectorAr: 'الطاقة والبتروكيماويات والاتصالات (Jio)', sectorEn: 'Energy, Petrochemicals & Telecom', type: 'global', valuation: '$230B', roleAr: 'أكبر شركة في الهند تدير أكبر مجمع تكرير نفط في العالم (جامناجار).', roleEn: 'India’s largest conglomerate operating Jamnagar refinery.' },
    { name: 'تاتا للخدمات الاستشارية (TCS)', sectorAr: 'تكنولوجيا المعلومات والبرمجيات', sectorEn: 'IT Services & Digital Transformation', type: 'global', valuation: '$160B', roleAr: 'عملاق التعهيد البرمجي واستشارات التحول الرقمي عالمياً.', roleEn: 'Global IT consulting powerhouse.' },
    { name: 'هندوستان للملاحة الجوية (HAL)', sectorAr: 'الصناعات الجوية والدفاعية', sectorEn: 'Aerospace & Combat Aircraft', type: 'local', valuation: '$26B', roleAr: 'المصنعة الوطنية لمقاتلات Tejas ومروحيات Prachand القتالية.', roleEn: 'State aerospace company building Tejas fighters and combat helis.' },
  ],

  // الجمهورية الإسلامية الإيرانية
  ir: [
    { name: 'الشركة الوطنية الإيرانية للنفط (NIOC)', sectorAr: 'النفط والغاز الطبيعي', sectorEn: 'State Oil & Gas Corporation', type: 'global', valuation: '$100B+', roleAr: 'الجهة السيادية التي تدير ثاني أكبر احتياطي غاز ورابع أكبر احتياطي نفط في العالم.', roleEn: 'State enterprise managing vast sovereign hydrocarbons.' },
    { name: 'مجمع الصناعات الدفاعية (DIO & Qods Aviation)', sectorAr: 'الصناعات العسكرية والصواريخ والمسيرات', sectorEn: 'Defense Industries & Drones', type: 'local', valuation: '$12B Est', roleAr: 'الصانع الرئيسي لصواريخ فاتح الباليستية ومسيرات شاهد 136 الانتحارية.', roleEn: 'Manufacturer of Fateh ballistic missiles and Shahed loitering drones.' },
    { name: 'إيران خودرو (Iran Khodro - IKCO)', sectorAr: 'صناعة السيارات والمحركات', sectorEn: 'Automotive Manufacturing', type: 'local', valuation: '$6.5B', roleAr: 'أكبر مصنع سيارات في الشرق الأوسط ووسط آسيا.', roleEn: 'Largest vehicle manufacturer in Middle East and Central Asia.' },
  ],

  // إسرائيل
  il: [
    { name: 'إلبيت سيستمز (Elbit Systems)', sectorAr: 'الصناعات الدفاعية والمسيرات والحرب السيبرانية', sectorEn: 'Defense Electronics & C4ISR', type: 'global', valuation: '$10B', roleAr: 'مصنعة مسيرات هيرميس وخوذات مقاتلات F-35 وأنظمة الاستطلاع الجوي.', roleEn: 'Developer of Hermes drones and F-35 helmet display systems.' },
    { name: 'صناعات الفضاء الإسرائيلية (IAI)', sectorAr: 'الدفاع الجوي والصواريخ والأقمار التجسسية', sectorEn: 'Aerospace, Missiles & Satellites', type: 'global', valuation: '$7.5B Rev', roleAr: 'مطورة صواريخ باراك (Barak MX) ومنظومة حيتس (Arrow) الباليستية.', roleEn: 'Developer of Arrow ballistic missile interceptor and Barak-8.' },
    { name: 'رافائيل لأنظمة الدفاع المتقدمة (Rafael)', sectorAr: 'الصواريخ والدروع النشطة وأنظمة الليزر', sectorEn: 'Missiles, Armor & Laser Weapons', type: 'local', valuation: '$6.0B Rev', roleAr: 'مطورة القبة الحديدية (Iron Dome) ومقلاع داود ونظام الحماية النشطة Trophy.', roleEn: 'Creator of Iron Dome, David’s Sling, and Trophy APS.' },
  ],

  // الجمهورية الجزائرية الديمقراطية الشعبية
  dz: [
    { name: 'سوناطراك (Sonatrach)', sectorAr: 'النفط والغاز الطبيعي المسال', sectorEn: 'National Hydrocarbons Giant', type: 'global', valuation: '$85B Rev', roleAr: 'أكبر شركة في القارة الأفريقية والمورد الرئيسي للغاز الطبيعي لجنوب أوروبا.', roleEn: 'Africa’s largest corporation and premier gas exporter to Europe.' },
    { name: 'سونلغاز (Sonelgaz)', sectorAr: 'توليد ونقل الكهرباء وتوزيع الغاز', sectorEn: 'Electricity & Gas Grid', type: 'local', valuation: '$14B', roleAr: 'المؤسسة الوطنية المسؤولة عن شبكات الكهرباء ومشاريع الربط مع أوروبا.', roleEn: 'National public utility managing power generation and distribution.' },
    { name: 'مجمع صيدال (Saidal Group)', sectorAr: 'صناعة الأدوية والبيوتكنولوجيا', sectorEn: 'Pharmaceuticals & Biotechnology', type: 'local', valuation: '$2.2B', roleAr: 'رائدة الصناعات الدوائية الجزائرية وإنتاج اللقاحات والأنسولين محلياً.', roleEn: 'Leading Algerian pharmaceutical group.' },
  ],

  // المملكة المغربية
  ma: [
    { name: 'مجموعة المكتب الشريف للفوسفاط (OCP Group)', sectorAr: 'الفوسفاط والأسمدة والمغذيات النباتية', sectorEn: 'Phosphates & Plant Nutrition', type: 'global', valuation: '$24B', roleAr: 'المحتكر العالمي لأكبر احتياطي فوسفاط في العالم ورائدة الأمن الغذائي العالمي.', roleEn: 'World’s largest phosphate rock exporter and fertilizer manufacturer.' },
    { name: 'التجاري وفا بنك (Attijariwafa Bank)', sectorAr: 'الخدمات المصرفية والاستثمارية الإفريقية', sectorEn: 'Pan-African Banking Group', type: 'global', valuation: '$15B', roleAr: 'أكبر بنك في المغرب وشمال إفريقيا مع تواجد في أكثر من 25 دولة إفريقية وأوروبية.', roleEn: 'Largest banking institution in North Africa with extensive African network.' },
    { name: 'مجموعة مناجم (Managem Group)', sectorAr: 'التعدين والمعادن الاستراتيجية والذهب والفضة', sectorEn: 'Mining & Critical Minerals', type: 'local', valuation: '$3.5B', roleAr: 'شركة تعدين رائدة في استخراج الكوبالت والليثيوم والذهب في أفريقيا.', roleEn: 'Leading mining conglomerate producing cobalt, gold and base metals.' },
  ],
};

/**
 * مولد ذكي للشركات المحلية والعالمية لأي دولة
 */
export function getCountryCompanies(country, _lang = 'ar') {
  if (!country) return [];
  const cid = (country.id || '').toLowerCase();

  if (COUNTRY_COMPANIES_DB[cid]) {
    return COUNTRY_COMPANIES_DB[cid];
  }

  if (cid === 'uk' && COUNTRY_COMPANIES_DB.gb) {
    return COUNTRY_COMPANIES_DB.gb;
  }

  // إذا كانت مسجلة في بيانات الدولة الأساسية
  if (country.topCompanies && Array.isArray(country.topCompanies) && country.topCompanies.length > 0) {
    return country.topCompanies.map((c, i) => ({
      name: c.name,
      sectorAr: c.sector || 'الصناعة والتجارة العامة',
      sectorEn: c.sector || 'General Commerce & Industry',
      type: i % 2 === 0 ? 'global' : 'local',
      valuation: c.valuation || `$${Number((((country.gdpBn || 20) * (0.05 + i * 0.03))).toFixed(1))}B`,
      roleAr: `مؤسسة استراتيجية رائدة في قطاع ${c.sector || 'التجارة الوطنية'}.`,
      roleEn: `Strategic corporate leader in national ${c.sector || 'industry'}.`,
    }));
  }

  // توليد تلقائي واقعي بحسب إقليم الدولة
  return [
    {
      name: `الشركة الوطنية للطاقة والتعدين لـ ${country.name}`,
      sectorAr: 'الموارد الطبيعية والطاقة والتعدين',
      sectorEn: 'Natural Resources & Energy',
      type: 'local',
      valuation: `$${Number(((country.gdpBn || 20) * 0.12).toFixed(1))}B`,
      roleAr: 'المؤسسة الوطنية المسؤولة عن استكشاف واستغلال الموارد الطبيعية والبنية التحتية للطاقة.',
      roleEn: 'State enterprise managing energy extraction, distribution and infrastructure.',
    },
    {
      name: `مجموعة الاتصالات والخدمات الرقمية الوطنية`,
      sectorAr: 'الاتصالات والتحول الرقمي',
      sectorEn: 'Telecommunications & ICT',
      type: 'local',
      valuation: `$${Number(((country.gdpBn || 20) * 0.06).toFixed(1))}B`,
      roleAr: 'المشغل الوطني الأول لشبكات الهاتف المحمول والألياف الضوئية وخدمات البيانات.',
      roleEn: 'Leading national telecommunication carrier and data network provider.',
    },
    {
      name: `بنك التنمية والتجارة السيادي لـ ${country.name}`,
      sectorAr: 'الخدمات المصرفية والتمويل التجاري',
      sectorEn: 'Banking & Trade Finance',
      type: 'local',
      valuation: `$${Number(((country.gdpBn || 20) * 0.08).toFixed(1))}B`,
      roleAr: 'أكبر مؤسسة ائتمانية وتمويلية لدعم المشاريع التنموية والتجارة الخارجية.',
      roleEn: 'Primary banking institution financing foreign trade and domestic industrialization.',
    },
    {
      name: `الشركة التجارية الدولية للواردات والتصدير`,
      sectorAr: 'الخدمات اللوجستية والشحن والتجارة الدولية',
      sectorEn: 'Global Logistics & Supply Chain',
      type: 'global',
      valuation: `$${Number(((country.gdpBn || 20) * 0.04).toFixed(1))}B`,
      roleAr: 'الذراع اللوجستية التي تدير خطوط الشحن البحري والجوي وتأمين سلاسل الإمداد.',
      roleEn: 'Logistics and trade operator integrating the nation into world supply routes.',
    },
  ];
}
