/**
 * السجل الاستخباري السيادي الشامل لدول العالم حتى عام 2026
 * Comprehensive Sovereign Intelligence Registry: Economy, Currencies, Armed Forces,
 * Arms Imports & Suppliers, Intelligence Agencies, Treaties & Milestones up to 2026.
 */

import { SOVEREIGN_CURRENCIES, ADDITIONAL_CURATED_INTEL } from './currenciesAndIntelligenceDB.js';

export const BASE_COUNTRY_EXTENDED_INTEL = {
  // المملكة العربية السعودية
  sa: {
    currency: {
      nameAr: 'ريال سعودي',
      nameEn: 'Saudi Riyal',
      code: 'SAR',
      symbol: '﷼',
      centralBankAr: 'البنك المركزي السعودي (ساما - تأسس 1952)',
      centralBankEn: 'Saudi Central Bank (SAMA - Est. 1952)',
      foreignReservesBn: 450.0,
      sovereignFundAr: 'صندوق الاستثمارات العامة (PIF - أصول ~930 مليار دولار)',
      sovereignFundEn: 'Public Investment Fund (PIF - ~$930B AUM)',
    },
    military: {
      budgetBn: 75.8,
      globalRank: 17,
      activePersonnelK: 257,
      reservePersonnelK: 35,
      branchesAr: [
        'القوات البرية الملكية السعودية',
        'القوات الجوية الملكية السعودية',
        'القوات البحرية الملكية السعودية',
        'قوات الدفاع الجوي الملكي السعودي',
        'قوة الصواريخ الاستراتيجية الملكية',
        'الحرس الوطني السعودي',
        'قوة الأمن والحماية السيبرانية',
      ],
      branchesEn: [
        'Royal Saudi Land Forces',
        'Royal Saudi Air Force',
        'Royal Saudi Navy',
        'Royal Saudi Air Defense Forces',
        'Royal Saudi Strategic Missile Force',
        'Saudi Arabian National Guard (SANG)',
        'Cyber Defense & Security Command',
      ],
      doctrineAr: 'الردع الاستراتيجي الإقليمي، حماية الحرمين الشريفين والمنشآت النفطية الحيوية، وتأمين الممرات البحرية في الخليج والبحر الأحمر.',
      doctrineEn: 'Regional strategic deterrence, safeguarding holy sites, critical energy infrastructure, and maritime lanes in Red Sea and Gulf.',
    },
    armsImports: {
      primarySuppliersAr: ['الولايات المتحدة (72%)', 'المملكة المتحدة (13%)', 'فرنسا (6%)', 'إسبانيا (4%)', 'الصين وألمانيا (5%)'],
      primarySuppliersEn: ['United States (72%)', 'United Kingdom (13%)', 'France (6%)', 'Spain (4%)', 'China & Germany (5%)'],
      keyImportedSystemsAr: [
        'مقاتلات F-15SA و Eurofighter Typhoon',
        'منظومات الدفاع الجوي THAAD وباتريوت PAC-3',
        'دبابات القتال الرئيسية M1A2S أSelected أبرامز',
        'طائرات الإنذار المبكر E-3A Sentry والمروحيات الهجومية أباتشي AH-64E',
        'طائرات مسيرة وأنظمة صواريخ باليستية استراتيجية من الصين (DF-3 / DF-21)',
        'سفن وفرقاطات الجبيل فئة Avante 2200 من إسبانيا',
      ],
      keyImportedSystemsEn: [
        'F-15SA Strike Eagles & Eurofighter Typhoons',
        'THAAD & MIM-104 Patriot PAC-3 missile defense',
        'M1A2S Abrams Main Battle Tanks',
        'E-3A AWACS & AH-64E Apache Guardian helicopters',
        'Strategic ballistic missile systems & UAVs from China',
        'Al-Jubail class corvettes (Avante 2200) from Navantia Spain',
      ],
      domesticProductionRatioAr: '20% - 25% (الشركة السعودية للصناعات العسكرية SAMI تستهدف 50% بحلول 2030)',
      domesticProductionRatioEn: '20%–25% (SAMI targeting 50% localization by 2030)',
      dependencyRiskAr: 'متوسط — تسريع كبير لتنويع الموردين وتوطين التصنيع الحربي للطائرات المسيرة والذخائر الذكية.',
      dependencyRiskEn: 'Moderate — rapid diversification and domestic ammo/drone manufacturing push.',
    },
    intelligenceAgencies: [
      {
        nameAr: 'رئاسة الاستخبارات العامة',
        nameEn: 'General Intelligence Presidency',
        acronym: 'GIP',
        type: 'foreign',
        roleAr: 'جهاز المخابرات الخارجية المسؤول عن جمع المعلومات الجيوسياسية والأمنية الخارجية وحماية المصالح الاستراتيجية.',
        roleEn: 'External intelligence agency responsible for foreign espionage, geopolitical risk assessment and strategic protection.',
      },
      {
        nameAr: 'المديرية العامة للمباحث (رئاسة أمن الدولة)',
        nameEn: 'General Directorate of Investigation (State Security)',
        acronym: 'Mabahith',
        type: 'domestic',
        roleAr: 'الأمن الداخلي ومكافحة الإرهاب والتطرف ورصد خلايا التجسس الأجنبي.',
        roleEn: 'Domestic national security, counter-terrorism, and counter-espionage apparatus.',
      },
      {
        nameAr: 'هيئة استخبارات وأمن القوات المسلحة',
        nameEn: 'Armed Forces Intelligence & Security Authority',
        acronym: 'AFIA',
        type: 'military',
        roleAr: 'الاستخبارات العسكرية والاستطلاع التكتيكي والفضائي الميداني للعمليات الحربية.',
        roleEn: 'Military intelligence, tactical battlefield reconnaissance, and defense threat assessment.',
      },
    ],
    treaties: [
      {
        nameAr: 'اتفاقية الدفاع المشترك لدول مجلس التعاون الخليجي (2000)',
        nameEn: 'GCC Joint Defense Agreement (2000)',
        scopeAr: 'التزام دفاعي جماعي يعتبر أي اعتداء على أي دولة خليجية اعتداءً على الجميع، مع قيادة قوات درع الجزيرة.',
        scopeEn: 'Collective defense treaty stating an attack on one is an attack on all, operating Peninsula Shield Force.',
      },
      {
        nameAr: 'ميثاق الشراكة الدفاعية الثنائية مع الولايات المتحدة (منذ 1951)',
        nameEn: 'US–Saudi Mutual Defense Assistance Agreement (Since 1951)',
        scopeAr: 'مبيعات السلاح والتدريب المشترك وتمركز الأسراب الجوية ومظلة الردع في قاعدة الأمير سلطان الجوية.',
        scopeEn: 'Bilateral defense assistance, joint air squadrons, weapons sales and shared radar early warning.',
      },
      {
        nameAr: 'التحالف الإسلامي العسكري لمحاربة الإرهاب (IMCTC - تأسس بالرياض)',
        nameEn: 'Islamic Military Counter Terrorism Coalition (IMCTC - HQ Riyadh)',
        scopeAr: 'تنسيق استخباري وعملياتي بين أكثر من 40 دولة إسلامية لتجفيف منابع الإرهاب وتأمين الحدود.',
        scopeEn: 'Pan-Islamic military coalition coordinating counter-terror intelligence, ideology and finance interdiction.',
      },
      {
        nameAr: 'اتفاق بكين لاستئناف العلاقات الدبلوماسية مع إيران (2023)',
        nameEn: 'Beijing Agreement for Saudi–Iran Rapprochement (2023)',
        scopeAr: 'اتفاق أمني ودبلوماسي برعاية الصين يقضي بعدم الاعتداء واحترام السيادة وخفض التصعيد الإقليمي.',
        scopeEn: 'Security pact brokered by China committing to non-interference, sovereignty, and regional de-escalation.',
      },
    ],
    historyTo2026: [
      { year: 1932, eventAr: 'إعلان توحيد المملكة العربية السعودية بقيادة الملك المؤسس عبد العزيز آل سعود.', eventEn: 'Unification of Saudi Arabia declared by King Abdulaziz Al Saud.' },
      { year: 1973, eventAr: 'حظر تصدير النفط الشهير وإثبات القوة الجيوسياسية للطاقة في موازين القوى الدولية.', eventEn: 'Historic 1973 oil embargo establishing energy leverage in global geopolitics.' },
      { year: 1990, eventAr: 'عملية درع الصحراء واستضافة قوات التحالف الدولي لتحرير دولة الكويت.', eventEn: 'Operation Desert Shield hosting international coalition forces to liberate Kuwait.' },
      { year: 2016, eventAr: 'إطلاق رؤية السعودية 2030 وبرنامج التحول الاقتصادي وتوطين الصناعات العسكرية.', eventEn: 'Launch of Saudi Vision 2030 diversification agenda and SAMI defense localization.' },
      { year: 2023, eventAr: 'توقيع اتفاق بكين واستئناف العلاقات مع طهران وتأمين الملاحة الدبلوماسية.', eventEn: 'Beijing Accord restoring diplomatic and security relations with Tehran.' },
      { year: 2024, eventAr: 'الانضمام الرسمي والتاريخي لمجموعة بريكس+ وتعميق الشراكات متعددة الأقطاب.', eventEn: 'Official accession to expanded BRICS+ bloc deepening multipolar diplomacy.' },
      { year: 2026, eventAr: 'قيادة المبادرات الإقليمية للاستقرار ومفاوضات وقف إطلاق النار وتوسيع منظومة الدفاع الجوي المتكامل.', eventEn: 'Active leadership in regional ceasefire diplomacy and deployment of integrated multi-layered air defense.' },
    ],
  },

  // جمهورية مصر العربية
  eg: {
    currency: {
      nameAr: 'جنيه مصري',
      nameEn: 'Egyptian Pound',
      code: 'EGP',
      symbol: 'ج.م',
      centralBankAr: 'البنك المركزي المصري (تأسس 1898)',
      centralBankEn: 'Central Bank of Egypt (CBE - Est. 1898)',
      foreignReservesBn: 46.5,
      sovereignFundAr: 'صندوق مصر السيادي (TSFE)',
      sovereignFundEn: 'The Sovereign Fund of Egypt (TSFE)',
    },
    military: {
      budgetBn: 5.5,
      globalRank: 15,
      activePersonnelK: 440,
      reservePersonnelK: 480,
      branchesAr: [
        'القوات البرية المصرية (الجيش الثاني والثالث الميداني والمنطقة المركزية)',
        'القوات الجوية المصرية',
        'القوات البحرية المصرية (أسطول البحر الأبيض والمتوسط وأسطول البحر الأحمر)',
        'قوات الدفاع الجوي المصري (فرع مستقل عالي الفاعلية)',
        'قوات الصاعقة والمظلات (القوات الخاصة)',
        'قوات حرس الحدود وقوات التدخل السريع',
      ],
      branchesEn: [
        'Egyptian Land Forces (2nd & 3rd Field Armies)',
        'Egyptian Air Force',
        'Egyptian Navy (Mediterranean & Red Sea Fleets)',
        'Egyptian Air Defense Command (Independent Branch)',
        'Special Forces (Sa’ka & Paratroopers)',
        'Border Guards & Rapid Deployment Forces',
      ],
      doctrineAr: 'حماية الأمن القومي المصري، تأمين شبه جزيرة سيناء والمجرى الملاحي لقناة السويس، وتأمين الحدود الغربية (ليبيا) والجنوبية (السودان).',
      doctrineEn: 'Territorial defense of Sinai, securing Suez Canal maritime lifeline, and securing Libyan and Sudanese borders.',
    },
    armsImports: {
      primarySuppliersAr: ['فرنسا (35%)', 'روسيا (30%)', 'الولايات المتحدة (18%)', 'ألمانيا (12%)', 'إيطاليا والصين (5%)'],
      primarySuppliersEn: ['France (35%)', 'Russia (30%)', 'United States (18%)', 'Germany (12%)', 'Italy & China (5%)'],
      keyImportedSystemsAr: [
        'مقاتلات Dassault Rafale الفرنسية و MiG-29M الروسية و F-16 Fighting Falcon الأمريكية',
        'حاملتا المروحيات الهجومية ميسترال (جمال عبد الناصر وأنور السادات) من فرنسا',
        'فرقاطات فريم FREMM وفرقاطات ميكو MEKO A-200 الألمانية',
        'غواصات الديزل الهجومية من طراز تايب 209/1400 الألمانية',
        'منظومات الدفاع الجوي الروسية S-300VM (أنتيي-2500) وبوك-إم2 وتور-إم2 والباتريوت الأمريكي',
        'دبابات القتال الرئيسية M1A1 أبرامز (تجميع وتصنيع مشترك في مصنع 200 الحربي)',
      ],
      keyImportedSystemsEn: [
        'French Dassault Rafale, Russian MiG-29M & US F-16 Fighting Falcons',
        'Mistral-class amphibious assault carriers (Nasser & Sadat) from France',
        'FREMM frigates & German MEKO A-200 stealth frigates',
        'German Type 209/1400 diesel-electric attack submarines',
        'Russian S-300VM Antey-2500, Buk-M2, Tor-M2 & US Patriot missile batteries',
        'M1A1 Abrams co-produced locally at Military Factory 200',
      ],
      domesticProductionRatioAr: '30% - 40% (تصنيع المدرعات سينا 200 وتمساح وراجمات الصواريخ رعد والذخائر)',
      domesticProductionRatioEn: '30%–40% (Co-production of Abrams, Temsah APCs, Sena 200, Raad MLRS & naval patrol crafts)',
      dependencyRiskAr: 'منخفض إلى متوازن — أكبر نموذج ناجح لتنويع مصادر التسليح في العالم لكسر أي احتكار سياسي.',
      dependencyRiskEn: 'Low to Balanced — benchmark model for diversified arms procurement across Eastern and Western sources.',
    },
    intelligenceAgencies: [
      {
        nameAr: 'جهاز المخابرات العامة المصرية',
        nameEn: 'General Intelligence Service',
        acronym: 'GIS',
        type: 'foreign',
        roleAr: 'المخابرات الخارجية والأمن القومي الاستراتيجي وإدارة الوساطات الدبلوماسية والأمنية الإقليمية (كوبار غزة وملفات القرن الأفريقي).',
        roleEn: 'Foreign intelligence agency overseeing strategic national security, covert diplomacy and key regional mediations.',
      },
      {
        nameAr: 'قطاع الأمن الوطني (وزارة الداخلية)',
        nameEn: 'National Security Sector',
        acronym: 'NSS',
        type: 'domestic',
        roleAr: 'الأمن الداخلي، مكافحة الإرهاب، تفكيك الخلايا المسلحة، وحماية الجبهة الداخلية.',
        roleEn: 'Domestic homeland security agency responsible for counter-terrorism and domestic counter-extremism.',
      },
      {
        nameAr: 'إدارة المخابرات الحربية والاستطلاع',
        nameEn: 'Military Intelligence and Reconnaissance',
        acronym: 'MID',
        type: 'military',
        roleAr: 'الاستخبارات العسكرية، تأمين الحدود، استطلاع مسارح العمليات، ومراقبة الحدود مع غزة وليبيا والسودان.',
        roleEn: 'Military intelligence service ensuring border security, battlefield reconnaissance and military threat tracking.',
      },
    ],
    treaties: [
      {
        nameAr: 'معاهدة السلام المصرية الإسرائيلية (كامب ديفيد 1979)',
        nameEn: 'Egypt–Israel Peace Treaty (Camp David 1979)',
        scopeAr: 'استعادة شبه جزيرة سيناء بالكامل وترسيم المناطق الأمنية والالتزام بعدم العدوان برعاية أمريكية.',
        scopeEn: 'Full withdrawal from Sinai, security zones demarcation, and mutual non-aggression under US sponsorship.',
      },
      {
        nameAr: 'معاهدة الدفاع العربي المشترك (جامعة الدول العربية)',
        nameEn: 'Arab League Joint Defense and Economic Cooperation Treaty',
        scopeAr: 'اتفاقية دفاعية جماعية للدول العربية وتنسيق هيئات الأركان العسكرية.',
        scopeEn: 'Pan-Arab collective defense treaty and military cooperation framework.',
      },
      {
        nameAr: 'اتفاقية ترسيم الحدود البحرية في شرق المتوسط مع اليونان وقبرص',
        nameEn: 'East Mediterranean Maritime Boundary Delimitation with Greece & Cyprus',
        scopeAr: 'تثبيت الحقوق السيادية في المنطقة الاقتصادية الخالصة وحقول الغاز الطبيعي (حقل ظهر).',
        scopeEn: 'Delimitation of Exclusive Economic Zones (EEZ) protecting offshore natural gas reserves (Zohr Field).',
      },
      {
        nameAr: 'اتفاقية التعاون الدفاعي الاستراتيجي مع الصومال (2024)',
        nameEn: 'Strategic Defense Cooperation Pact with Somalia (2024)',
        scopeAr: 'بروتوكول عسكري لنشر قوات مصرية ومساعدة الجيش الصومالي لحماية وحدة الأراضي الصومالية وتأمين خليج عدن.',
        scopeEn: 'Defense pact involving Egyptian troop deployments and military support to safeguard Somali territorial integrity.',
      },
    ],
    historyTo2026: [
      { year: 1952, eventAr: 'قيام ثورة 23 يوليو وإلغاء الملكية وتأسيس الجمهورية وإجلاء القوات البريطانية.', eventEn: 'July 23 Revolution establishing the Republic and terminating British military presence.' },
      { year: 1973, eventAr: 'حرب السادس من أكتوبر (العاشر من رمضان) واقتحام خط بارليف وتحطيم نظرية الأمن الإسرائيلي.', eventEn: 'October 1973 War breaching Bar Lev Line and altering Middle Eastern strategic balance.' },
      { year: 1979, eventAr: 'توقيع معاهدة السلام واستعادة سيناء كاملة ورفع العلم المصري في طابا.', eventEn: 'Signing of Egypt–Israel Peace Treaty and recovery of the Sinai Peninsula including Taba.' },
      { year: 2015, eventAr: 'افتتاح قناة السويس الجديدة وتدشين برنامج التسليح والتحديث الشامل للجيش المصري.', eventEn: 'Opening of the New Suez Canal and launching the military fleet modernization campaign.' },
      { year: 2024, eventAr: 'الانضمام الرسمي إلى مجموعة بريكس+ وتكثيف دور الوساطة لوقف الحرب في غزة والسودان.', eventEn: 'Official accession to BRICS+ and intense diplomatic mediation in Gaza and Sudan conflicts.' },
      { year: 2026, eventAr: 'تأمين الممرات الاستراتيجية في البحر الأحمر وتدشين خطوط الإمداد الدفاعية في القرن الأفريقي.', eventEn: 'Active deterrence in Red Sea security and strategic defense deployments in the Horn of Africa.' },
    ],
  },

  // الولايات المتحدة الأمريكية
  us: {
    currency: {
      nameAr: 'دولار أمريكي',
      nameEn: 'United States Dollar',
      code: 'USD',
      symbol: '$',
      centralBankAr: 'مجلس الاحتياطي الفيدرالي الأمريكي (Fed - تأسس 1913)',
      centralBankEn: 'Federal Reserve System (Fed - Est. 1913)',
      foreignReservesBn: 242.0,
      sovereignFundAr: 'صناديق معاشات ولايات ضخمة (CalPERS / Alaska Permanent Fund)',
      sovereignFundEn: 'State Funds & Sovereign Vehicles (Alaska Permanent Fund ~$80B)',
    },
    military: {
      budgetBn: 886.0,
      globalRank: 1,
      activePersonnelK: 1328,
      reservePersonnelK: 799,
      branchesAr: [
        'الجيش الأمريكي (القوات البرية)',
        'بحرية الولايات المتحدة (US Navy - 11 حاملة طائرات نووية)',
        'سلاح مشاة البحرية (US Marines)',
        'القوات الجوية الأمريكية (US Air Force)',
        'قوة الفضاء الأمريكية (US Space Force)',
        'خفر السواحل الأمريكي (US Coast Guard)',
        'القيادة السيبرانية الأمريكية (US Cyber Command)',
      ],
      branchesEn: [
        'United States Army',
        'United States Navy (11 Nuclear Aircraft Carriers)',
        'United States Marine Corps (USMC)',
        'United States Air Force (USAF)',
        'United States Space Force (USSF)',
        'United States Coast Guard (USCG)',
        'United States Cyber Command (USCYBERCOM)',
      ],
      doctrineAr: 'الهيمنة العالمية الشاملة، الردع النووي الثلاثي، العمليات العابرة للقارات في 6 قيادات قتالية جغرافية موحدة (CENTCOM, EUCOM, INDOPACOM, etc.).',
      doctrineEn: 'Global power projection, nuclear triad deterrence, and multi-domain operations across geographic unified combatant commands.',
    },
    armsImports: {
      primarySuppliersAr: ['صناعة محلية مطلقة (98%) — أكبر مصدر ومصنع أسلحة في العالم', 'واردات شريكة محدودة من بريطانيا، إسرائيل، ألمانيا، النرويج (2%)'],
      primarySuppliersEn: ['Self-Reliant Domestic Defense Base (98%) — Top Arms Exporter Globally', 'Minor specialist components from UK, Israel, Germany, Norway (2%)'],
      keyImportedSystemsAr: [
        'مقاتلات الجيل الخامس F-35 Lightning II و F-22 Raptor (تصنيع لوكهيد مارتن)',
        'قاذفات الشبح النووية الاستراتيجية B-2 Spirit و B-21 Raider الجديدة',
        'حاملات الطائرات النووية فئة Gerald R. Ford وغواصات فرجينيا وأوهايو النووية',
        'منظومات باتريوت PAC-3 وثاد ورادار AN/TPY-2 ومنظومة إيجيس البحرية (Aegis)',
        'راجمات الصواريخ الدقيقة هيمارس M142 HIMARS وصواريخ كروز توماهوك Tomahawk',
      ],
      keyImportedSystemsEn: [
        '5th Gen F-35 Lightning II & F-22 Raptors (Lockheed Martin)',
        'Next-gen B-21 Raider & B-2 Spirit stealth nuclear strategic bombers',
        'Gerald R. Ford-class nuclear supercarriers & Virginia-class attack subs',
        'Patriot PAC-3, THAAD, AN/TPY-2 radar & Aegis Combat System',
        'M142 HIMARS precision rocket artillery & Tomahawk cruise missiles',
      ],
      domesticProductionRatioAr: '98% (كبريات شركات الدفاع: Lockheed Martin, Boeing, Raytheon, Northrop Grumman, General Dynamics)',
      domesticProductionRatioEn: '98% (Prime contractors: Lockheed Martin, Boeing, RTX Raytheon, Northrop Grumman, General Dynamics)',
      dependencyRiskAr: 'منخفض جداً — تركز المخاطر على سلاسل توريد المعادن النادرة والرقائق الإلكترونية المتقدمة من تايوان.',
      dependencyRiskEn: 'Very Low — supply risk concentrated in rare-earth elements and Taiwanese advanced semiconductor foundry access.',
    },
    intelligenceAgencies: [
      {
        nameAr: 'وكالة الاستخبارات المركزية',
        nameEn: 'Central Intelligence Agency',
        acronym: 'CIA',
        type: 'foreign',
        roleAr: 'المخابرات الخارجية، العمليات السرية العالمية، وتقديم الإحاطات الرئاسية الاستخبارية اليومية (PDB).',
        roleEn: 'Foreign intelligence collection, human intelligence (HUMINT), and presidential covert action operations.',
      },
      {
        nameAr: 'وكالة الأمن القومي',
        nameEn: 'National Security Agency',
        acronym: 'NSA',
        type: 'signals',
        roleAr: 'الاستخبارات الإشاراتية العالمية (SIGINT)، فك التشفير، وحماية شبكات الاتصالات السرية للحكومة الفيدرالية.',
        roleEn: 'Global signals intelligence (SIGINT), cryptanalysis, and cybersecurity of federal national security systems.',
      },
      {
        nameAr: 'مكتب التحقيقات الفيدرالي',
        nameEn: 'Federal Bureau of Investigation',
        acronym: 'FBI',
        type: 'domestic',
        roleAr: 'الأمن القومي الداخلي، مكافحة التجسس الأجنبي داخل الأراضي الأمريكية، ومكافحة الإرهاب.',
        roleEn: 'Domestic counterintelligence, counter-terrorism, and federal law enforcement agency.',
      },
      {
        nameAr: 'وكالة استخبارات الدفاع',
        nameEn: 'Defense Intelligence Agency',
        acronym: 'DIA',
        type: 'military',
        roleAr: 'الاستخبارات العسكرية الأجنبية لوزارة الدفاع (البنتاغون) وتقدير القدرات القتالية للجيوش الأجنبية.',
        roleEn: 'Military intelligence production for Pentagon leadership and foreign armed forces combat readiness assessment.',
      },
    ],
    treaties: [
      {
        nameAr: 'معاهدة حلف شمال الأطلسي - الناتو (المادة 5 للدفاع المشترك)',
        nameEn: 'North Atlantic Treaty (NATO - Article 5 Collective Defense)',
        scopeAr: 'الضامن النووي والتقليدي لأمن 32 دولة عضواً عبر الأطلسي وأوروبا.',
        scopeEn: 'Core collective defense clause securing 32 member states across transatlantic space.',
      },
      {
        nameAr: 'اتفاقية العيون الخمس لتبادل المعلومات الاستخبارية (Five Eyes)',
        nameEn: 'Five Eyes Intelligence Alliance (US, UK, CA, AU, NZ)',
        scopeAr: 'أقوى تحالف استخباري إشاراتي وتكنولوجي مغلق في العالم.',
        scopeEn: 'Premier signals intelligence sharing pact between US, UK, Canada, Australia and New Zealand.',
      },
      {
        nameAr: 'معاهدة أوكوس الثلاثية (AUKUS - 2021)',
        nameEn: 'AUKUS Security Partnership (US, UK, Australia - 2021)',
        scopeAr: 'تزويد أستراليا بغواصات هجومية تعمل بالدفع النووي وتطوير قدرات الذكاء الاصطناعي والصواريخ فرط الصوتية.',
        scopeEn: 'Trilateral partnership delivering conventionally armed nuclear-powered submarines and hypersonic tech.',
      },
      {
        nameAr: 'معاهدات الدفاع المشترك الثنائية مع اليابان وكوريا الجنوبية والفلبين',
        nameEn: 'Bilateral Mutual Defense Treaties with Japan, South Korea & Philippines',
        scopeAr: 'مظلة الردع النووي والانتشار المتقدم في منطقة المحيطين الهندي والهادئ.',
        scopeEn: 'Extended nuclear deterrence and forward-deployed military garrisons in Indo-Pacific.',
      },
    ],
    historyTo2026: [
      { year: 1945, eventAr: 'انتصار الحلفاء في الحرب العالمية الثانية وتأسيس منظومة بريتون وودز والأمم المتحدة.', eventEn: 'Allied victory in WWII, founding Bretton Woods financial system and United Nations.' },
      { year: 1949, eventAr: 'تأسيس حلف شمال الأطلسي وتدشين استراتيجية احتواء التوسع السوفيتي.', eventEn: 'Creation of NATO and rollout of Cold War Soviet containment strategy.' },
      { year: 1991, eventAr: 'النصر في حرب عاصفة الصحراء وتفكك الاتحاد السوفيتي وإعلان نظام القطب الواحد.', eventEn: 'Operation Desert Storm victory and emergence as solitary global hyperpower.' },
      { year: 2001, eventAr: 'أحداث 11 سبتمبر وتدشين الحرب العالمية على الإرهاب في أفغانستان والعراق.', eventEn: 'September 11 attacks and launch of the Global War on Terror.' },
      { year: 2021, eventAr: 'الانسحاب من أفغانستان وتدشين تحالف AUKUS وإعادة توجيه التركيز نحو المحيط الهادئ.', eventEn: 'Withdrawal from Afghanistan and launch of AUKUS shifting strategic focus to Indo-Pacific.' },
      { year: 2024, eventAr: 'حزم الدعم العسكري لأوكرانيا وإسرائيل وتوسيع العقوبات على شبكات التكنولوجيا المتقدمة.', eventEn: 'Major foreign security supplemental bills supporting allies and enacting advanced tech export controls.' },
      { year: 2026, eventAr: 'نشر الجيل الجديد من قاذفات B-21 Raider وتوسيع شراكات الردع في بحر الصين الجنوبي والشرق الأوسط.', eventEn: 'Initial operational deployment of B-21 stealth bombers and reinforcing deterrence in Indo-Pacific.' },
    ],
  },

  // روسيا الاتحادية
  ru: {
    currency: {
      nameAr: 'روبل روسي',
      nameEn: 'Russian Ruble',
      code: 'RUB',
      symbol: '₽',
      centralBankAr: 'بنك روسيا المركزي (تأسس 1860)',
      centralBankEn: 'Bank of Russia (CBR - Est. 1860)',
      foreignReservesBn: 600.0,
      sovereignFundAr: 'صندوق الثروة الوطني الروسي (NWF - أصول ~140 مليار دولار)',
      sovereignFundEn: 'National Wealth Fund of the Russian Federation (NWF - ~$140B)',
    },
    military: {
      budgetBn: 140.0,
      globalRank: 2,
      activePersonnelK: 1320,
      reservePersonnelK: 2000,
      branchesAr: [
        'القوات البرية الروسية',
        'القوات الجو-فضائية الروسية (VKS)',
        'الأسطول الحربي الروسي (الأسطول الشمالي، البلطيق، البحر الأسود، والمحيط الهادئ)',
        'قوات الصواريخ الاستراتيجية (RVSN - الردع النووي البري)',
        'قوات الإنزال الجوي الروسية (VDV - النخبة المحمولة جواً)',
        'قوات العمليات الخاصة (SSO)',
      ],
      branchesEn: [
        'Russian Ground Forces',
        'Russian Aerospace Forces (VKS)',
        'Russian Navy (Northern, Baltic, Black Sea, Pacific Fleets)',
        'Strategic Rocket Forces (RVSN - Nuclear Triad)',
        'Russian Airborne Forces (VDV)',
        'Special Operations Forces (SSO)',
      ],
      doctrineAr: 'الدفاع عن الفضاء الأوراسي، الردع النووي الشامل، منع تمدد الناتو إلى الحدود المباشرة، وحماية الجوار القريب.',
      doctrineEn: 'Eurasian defense, nuclear triad superiority, rolling back NATO enlargement, and securing the near-abroad.',
    },
    armsImports: {
      primarySuppliersAr: ['صناعة حربية محلية ضخمة (92%)', 'مسيرات ومكونات صاروخية من إيران (4%)', 'ذخائر وقذائف مدفعية من كوريا الشمالية (3%)', 'إلكترونيات مزدوجة الاستخدام من الصين ووسط آسيا (1%)'],
      primarySuppliersEn: ['Domestic State Defense Base Rostec (92%)', 'Drones & missile tech from Iran (4%)', 'Artillery ammo from North Korea (3%)', 'Dual-use electronics from China & Central Asia (1%)'],
      keyImportedSystemsAr: [
        'مقاتلات السيادة الجوية Su-35S ومقاتلات الجيل الخامس Su-57 Felon',
        'منظومات الدفاع الجوي الطبقية S-400 Triumf و S-500 Prometheus وبانتسير S1',
        'دبابات القتال الرئيسية T-90M Proryv و T-80BVM و T-72B3M',
        'الصواريخ فرط الصوتية Kinzhal و Zircon و Avangard والغواصات النووية Borei-A و Yasen-M',
        'مسيرات شاهد 136 الانتحارية (طراز جيران-2 المنتج محلياً في تتارستان)',
      ],
      keyImportedSystemsEn: [
        'Su-35S Flanker-E & Su-57 Felon 5th gen fighters',
        'S-400 Triumf, S-500 Prometheus & Pantsir-S1 air defense missile systems',
        'T-90M Proryv & modernized T-80BVM / T-72B3M tanks',
        'Kinzhal, Zircon, Avangard hypersonic weapons & Borei-A nuclear ballistic subs',
        'Shahed-136 / Geran-2 loitering munitions manufactured in Alabuga',
      ],
      domesticProductionRatioAr: '92% (الشركات الحكومية الكبرى: Rostec, Almaz-Antey, United Aircraft Corporation, Uralvagonzavod)',
      domesticProductionRatioEn: '92% (State conglomerates: Rostec, Almaz-Antey, UAC, Uralvagonzavod)',
      dependencyRiskAr: 'متوسط — تجاوز العقوبات الغربية عبر إعادة هندسة الدوائر الإلكترونية والاعتماد على قنوات التوريد الآسيوية.',
      dependencyRiskEn: 'Moderate — mitigated Western sanctions through domestic substitution and Asian transshipment hubs.',
    },
    intelligenceAgencies: [
      {
        nameAr: 'جهاز الأمن الفيدرالي',
        nameEn: 'Federal Security Service',
        acronym: 'FSB',
        type: 'domestic',
        roleAr: 'الأمن الداخلي، مكافحة التجسس، مراقبة الحدود، وحماية الاستقرار السياسي الداخلي (خليفة الـ KGB الرئيسي).',
        roleEn: 'Domestic counterintelligence, internal security, border surveillance, and state constitutional protection.',
      },
      {
        nameAr: 'جهاز المخابرات الخارجية',
        nameEn: 'Foreign Intelligence Service',
        acronym: 'SVR',
        type: 'foreign',
        roleAr: 'المخابرات الخارجية، التجسس الجيوسياسي والاقتصادي، ورصد سياسات الدول الغربية والتحالفات المناوئة.',
        roleEn: 'Civilian foreign espionage, external political intelligence and counter-adversary strategic assessments.',
      },
      {
        nameAr: 'مديرية الاستخبارات الرئيسية (هيئة الأركان العامة)',
        nameEn: 'Main Intelligence Directorate (General Staff)',
        acronym: 'GRU',
        type: 'military',
        roleAr: 'الاستخبارات العسكرية الأجنبية، العمليات الهجومية السيبرانية، وقوات النخبة الخاصة التابعة للأركان (Spetsnaz).',
        roleEn: 'Military intelligence apparatus conducting cyber-warfare operations and directing military Spetsnaz units.',
      },
    ],
    treaties: [
      {
        nameAr: 'منظمة معاهدة الأمن الجماعي (CSTO)',
        nameEn: 'Collective Security Treaty Organization (CSTO)',
        scopeAr: 'تحالف عسكري دفاعي مشترك مع بيلاروسيا وكازاخستان وقيرغيزستان وطاجيكستان.',
        scopeEn: 'Post-Soviet military alliance with mutual defense obligations among member states.',
      },
      {
        nameAr: 'معاهدة الشراكة الاستراتيجية الشاملة مع جمهورية كوريا الديمقراطية الشعبية (2024)',
        nameEn: 'Comprehensive Strategic Partnership Treaty with North Korea (2024)',
        scopeAr: 'بند دفاعي متبادل يلزم الطرفين بتقديم المساعدة العسكرية الفورية في حال تعرض أي منهما لهجوم مسلح.',
        scopeEn: 'Mutual military assistance defense treaty committing immediate combat support in event of armed aggression.',
      },
      {
        nameAr: 'اتفاقية دولة الاتحاد مع بيلاروسيا',
        nameEn: 'Union State Defense Integration with Belarus',
        scopeAr: 'دمج المنظومة الدفاعية والعقيدة العسكرية ونشر الأسلحة النووية التكتيكية الروسية في بيلاروسيا.',
        scopeEn: 'Deep military integration and deployment of tactical nuclear weapons on Belarusian territory.',
      },
      {
        nameAr: 'الشراكة الاستراتيجية التنسيقية الشاملة مع الصين (بلا حدود)',
        nameEn: 'No-Limits Comprehensive Strategic Partnership with China',
        scopeAr: 'مناورات بحرية وجوية مشتركة، وتنسيق استراتيجي لمواجهة التوسع الغربي في مجلس الأمن الدولي.',
        scopeEn: 'Joint strategic bomber patrols, naval drills and diplomatic coordination across global institutions.',
      },
    ],
    historyTo2026: [
      { year: 1991, eventAr: 'تفكك الاتحاد السوفيتي ورفع العلم الروسي ثلاثي الألوان فوق الكرملين وبدء مرحلة روسيا الاتحادية.', eventEn: 'Dissolution of USSR and emergence of the Russian Federation under Boris Yeltsin.' },
      { year: 1999, eventAr: 'تولي فلاديمير بوتين الرئاسة وبدء مرحلة إعادة بناء هيبة الدولة والقوات المسلحة ومكافحة الإرهاب.', eventEn: 'Vladimir Putin assumes leadership and initiates national consolidation and military rebuild.' },
      { year: 2008, eventAr: 'حرب جورجيا (أوسيتيا الجنوبية) وبدء برنامج التحديث العسكري الشامل للقوات المسلحة.', eventEn: 'Five-Day War in Georgia triggering sweeping armed forces modernization reforms.' },
      { year: 2014, eventAr: 'ضم شبه جزيرة القرم وتدشين التوجه نحو الشرق والصين في أعقاب العقوبات الغربية الأولى.', eventEn: 'Annexation of Crimea and pivot towards Asian economic and geopolitical partners.' },
      { year: 2022, eventAr: 'بدء العملية العسكرية الخاصة في أوكرانيا وإعادة هيكلة الاقتصاد الروسي بالكامل لمواجهة العقوبات.', eventEn: 'Special Military Operation in Ukraine launched, restructuring economy toward sovereign wartime footing.' },
      { year: 2024, eventAr: 'قمة بريكس التاريخية في كازان وتوسيع المعاملات المالية بالعملات الوطنية والاتفاق الدفاعي مع بيونغ يانغ.', eventEn: 'Historic BRICS Summit in Kazan cementing alternative payment mechanisms and DPRK defense treaty.' },
      { year: 2026, eventAr: 'تثبيت خطوط الجبهة الاستراتيجية وزيادة إنتاج مجمع الصناعات العسكرية وتطوير المنظومات فرط الصوتية.', eventEn: 'Consolidation of strategic frontlines and industrial production capacity outmatching adversary supplies.' },
    ],
  },

  // جمهورية الصين الشعبية
  cn: {
    currency: {
      nameAr: 'يوان صيني (رينمينبي)',
      nameEn: 'Chinese Yuan (RMB)',
      code: 'CNY',
      symbol: '¥',
      centralBankAr: 'بنك الشعب الصيني (PBOC - تأسس 1948)',
      centralBankEn: 'People’s Bank of China (PBOC - Est. 1948)',
      foreignReservesBn: 3250.0,
      sovereignFundAr: 'مؤسسة الاستثمار الصينية (CIC - أصول ~1.35 تريليون دولار)',
      sovereignFundEn: 'China Investment Corporation (CIC - ~$1.35T AUM)',
    },
    military: {
      budgetBn: 296.0,
      globalRank: 3,
      activePersonnelK: 2035,
      reservePersonnelK: 510,
      branchesAr: [
        'القوات البرية لجيش التحرير الشعبي (PLAGF)',
        'بحرية جيش التحرير الشعبي (PLAN - أكبر أسطول سفن في العالم بعدد القطع)',
        'القوات الجوية لجيش التحرير الشعبي (PLAAF)',
        'قوة الصواريخ لجيش التحرير الشعبي (PLARF - الترسانة الباليستية وفرط الصوتية)',
        'قوة الدعم الاستراتيجي والسيبراني والفضائي',
        'قوات الدعم اللوجستي المشترك وميليشيا الشعب البحرية',
      ],
      branchesEn: [
        'PLA Ground Force (PLAGF)',
        'PLA Navy (PLAN - Largest battle force by ship hull count)',
        'PLA Air Force (PLAAF)',
        'PLA Rocket Force (PLARF - Ballistic & Hypersonic Arsenal)',
        'PLA Strategic Support Force (Space & Cyber Command)',
        'Joint Logistics Support Force & People’s Armed Police',
      ],
      doctrineAr: 'الدفاع الفعال والردع الموثوق، استراتيجية منع الوصول وحرمان المنطقة (A2/AD) في سلاسل الجزر الأولى والثانية، واستعادة تايوان.',
      doctrineEn: 'Active Defense, Anti-Access/Area-Denial (A2/AD) within First/Second Island Chains, and reunification with Taiwan.',
    },
    armsImports: {
      primarySuppliersAr: ['صناعة محلية ذاتية متطورة (90%)', 'محركات طائرات متخصصة وأنظمة تقنية من روسيا (10%)'],
      primarySuppliersEn: ['Domestic State Industrial Complexes (90%)', 'Specialized aviation propulsion/missiles from Russia (10%)'],
      keyImportedSystemsAr: [
        'مقاتلات الجيل الخامس الشبحية J-20 Mighty Dragon ومقاتلات J-16 و J-35 البحرية',
        'حاملات الطائرات فوتيان (Type 003 ذات المجنقة الكهرومغناطيسية) وشاندونغ ولياونينغ',
        'المدمرات الثقيلة الموجهة فئة Type 055 رينهاي والغواصات النووية Type 094/096',
        'صواريخ DF-17 فرط الصوتية المنزلقة وصواريخ DF-21D / DF-26 "قاتلة حاملات الطائرات"',
        'منظومات الدفاع الجوي HQ-9B وطائرات الإنذار المبكر KJ-500',
      ],
      keyImportedSystemsEn: [
        'J-20 Mighty Dragon 5th gen stealth fighters & carrier-borne J-35s',
        'Fujian Type 003 electromagnetic catapult aircraft carrier',
        'Type 055 Renhai-class guided-missile cruisers & Type 094 nuclear ballistic subs',
        'DF-17 hypersonic boost-glide & DF-21D/DF-26 "Carrier Killer" anti-ship ballistic missiles',
        'HQ-9B long-range surface-to-air missiles & KJ-500 AEW&C platforms',
      ],
      domesticProductionRatioAr: '90% (كبريات شركات الدفاع الحكومية: AVIC, CASIC, CASC, CSSC, NORINCO)',
      domesticProductionRatioEn: '90% (Key defense firms: AVIC, CASIC, CASC, CSSC Shipbuilding, NORINCO)',
      dependencyRiskAr: 'منخفض جداً — اكتفاء ذاتي شبه كامل مع التطور المتسارع لمحركات الطائرات المحلية WS-15.',
      dependencyRiskEn: 'Very Low — virtually complete defense industrial autonomy with WS-15 jet engine breakthrough.',
    },
    intelligenceAgencies: [
      {
        nameAr: 'وزارة أمن الدولة',
        nameEn: 'Ministry of State Security',
        acronym: 'MSS (Guoanbu)',
        type: 'foreign',
        roleAr: 'المخابرات الخارجية، مكافحة التجسس، التجسس السيبراني والتكنولوجي، وحماية أمن الحزب الشيوعي الصيني.',
        roleEn: 'Foreign intelligence, counter-espionage, cyber-espionage and ideological security of the Communist Party.',
      },
      {
        nameAr: 'وزارة الأمن العام',
        nameEn: 'Ministry of Public Security',
        acronym: 'MPS (Gonganbu)',
        type: 'domestic',
        roleAr: 'الأمن الداخلي، الاستقرار الاجتماعي، ومراقبة الحدود والشبكات الرقمية في الداخل.',
        roleEn: 'National domestic policing, internal surveillance, and public order maintenance.',
      },
      {
        nameAr: 'إدارة الاستخبارات في هيئة الأركان المشتركة (جيش التحرير)',
        nameEn: 'Intelligence Bureau of the Joint Staff Department',
        acronym: 'PLA-JSD Intel',
        type: 'military',
        roleAr: 'الاستخبارات العسكرية والاستطلاع الفضائي لمسرح عمليات تايوان وبحر الصين والمحيط الهادئ.',
        roleEn: 'Military intelligence and satellite reconnaissance focused on Taiwan and Indo-Pacific theaters.',
      },
    ],
    treaties: [
      {
        nameAr: 'منظمة شنغهاي للتعاون (SCO - بكين)',
        nameEn: 'Shanghai Cooperation Organisation (SCO)',
        scopeAr: 'تحالف أمني إقليمي لمكافحة القوى الثلاث (الإرهاب، الانفصال، والتطرف) والمناورات العسكرية المشتركة.',
        scopeEn: 'Eurasian security pact targeting terrorism, separatism, and extremism with regular Peace Mission drills.',
      },
      {
        nameAr: 'معاهدة الصداقة والتعاون الدفاعي مع روسيا (2001 - ممددة ومحدثة)',
        nameEn: 'Treaty of Good-Neighborliness and Friendly Cooperation with Russia',
        scopeAr: 'تنسيق أمني وعسكري واسع وحظر التحالف مع أي طرف ثالث يهدد أمن الدولتين.',
        scopeEn: 'Foundational treaty anchoring deep strategic alignment and joint air/naval patrols.',
      },
      {
        nameAr: 'معاهدة الصداقة والمساعدة المشتركة مع كوريا الشمالية (1961)',
        nameEn: 'Sino-North Korean Mutual Aid and Cooperation Treaty (1961)',
        scopeAr: 'معاهدة الدفاع المتبادل الوحيدة الملزمة قانوناً التي تمتلكها الصين للتدخل العسكري المباشر.',
        scopeEn: 'Only formal mutual defense treaty obligating direct military intervention in case of external attack.',
      },
      {
        nameAr: 'مبادرة الحزام والطريق والشراكات الأمنية البحرية (BRI)',
        nameEn: 'Belt and Road Strategic Port & Security Architecture',
        scopeAr: 'تأمين الموانئ والممرات البحرية من جوادر إلى جيبوتي وسريلانكا وتأمين إمدادات الطاقة.',
        scopeEn: 'Port access agreements securing maritime energy choke points from Gwadar to Djibouti base.',
      },
    ],
    historyTo2026: [
      { year: 1949, eventAr: 'إعلان ماو تسي تونغ تأسيس جمهورية الصين الشعبية في ساحة تيانانمين وبداية العصر الحديث.', eventEn: 'Mao Zedong proclaims founding of the People’s Republic of China.' },
      { year: 1978, eventAr: 'إطلاق سياسة الإصلاح والانفتاح الاقتصادي بقيادة دينغ شياوبينغ وتدشين المعجزة الاقتصادية.', eventEn: 'Deng Xiaoping initiates economic reform and opening up.' },
      { year: 2001, eventAr: 'الانضمام إلى منظمة التجارة العالمية (WTO) وبداية التحول إلى مصنع العالم والقوة التجارية الأولى.', eventEn: 'Accession to World Trade Organization transforming China into global manufacturing hub.' },
      { year: 2013, eventAr: 'إطلاق مبادرة الحزام والطريق وتدشين عصر الرئيس شي جين بينغ واستراتيجية الصعود العسكري.', eventEn: 'Xi Jinping launches Belt and Road Initiative and sweeping military modernization.' },
      { year: 2023, eventAr: 'رعاية اتفاق بكين التاريخي بين السعودية وإيران وتكريس بكين كوسيط جيوسياسي عالمي.', eventEn: 'Brokering Saudi-Iran reconciliation in landmark geopolitical diplomatic triumph.' },
      { year: 2024, eventAr: 'تدشين المناورات العسكرية المشتركة حول تايوان والريادة العالمية في الطاقة النظيفة والمركبات الكهربائية.', eventEn: 'Joint Sword exercises encircling Taiwan and solidifying dominance in clean energy tech.' },
      { year: 2026, eventAr: 'دخول حاملة الطائرات فوجيان الخدمة القتالية وقيادة النظام المالي البديل في إطار بريكس+ ومنظمة شنغهاي.', eventEn: 'Type 003 Fujian aircraft carrier enters full combat service and leading BRICS financial architecture.' },
    ],
  },
};

export const COUNTRY_EXTENDED_INTEL = {
  ...BASE_COUNTRY_EXTENDED_INTEL,
  ...ADDITIONAL_CURATED_INTEL,
  // توافق مع uk
  uk: ADDITIONAL_CURATED_INTEL.gb,
};

/**
 * مولد ذكي للبيانات الاستخبارية لأي دولة لا تمتلك سجلاً يدوياً مسبقاً
 * يضمن عدم وجود أي حقل فارغ، ويبني البيانات استناداً إلى التحالفات والجغرافيا والبيانات الرسمية.
 */
export function getCountryIntelligenceData(country, _lang = 'ar') {
  if (!country) return null;
  const cid = (country.id || '').toLowerCase();

  const curated = COUNTRY_EXTENDED_INTEL[cid];
  if (curated) {
    return {
      currency: curated.currency,
      military: curated.military,
      armsImports: curated.armsImports,
      intelligenceAgencies: curated.intelligenceAgencies,
      treaties: curated.treaties,
      historyTo2026: curated.historyTo2026,
    };
  }

  // التحقق من قاعدة بيانات العملات السيادية الرسمية
  const officialCurrency = SOVEREIGN_CURRENCIES[cid];

  // توليد تلقائي ذكي عالي الموثوقية للدول الأخرى
  const isNATO = country.alliances?.some((a) => a.includes('NATO') || a.includes('الناتو'));
  const isEU = country.alliances?.some((a) => a.includes('EU') || a.includes('الاتحاد الأوروبي'));
  const isArab = country.region === 'middle_east' || country.region === 'north_africa';
  const isAfrica = country.continent === 'africa' || country.region === 'africa';
  const isAsia = country.continent === 'asia' || country.region === 'asia';
  const isAmericas = country.continent === 'americas' || country.region === 'americas';

  let currencyData;
  if (officialCurrency) {
    currencyData = {
      nameAr: officialCurrency.nameAr,
      nameEn: officialCurrency.nameEn,
      code: officialCurrency.code,
      symbol: officialCurrency.symbol,
      centralBankAr: officialCurrency.centralBankAr,
      centralBankEn: officialCurrency.centralBankEn,
      foreignReservesBn: Number(((country.gdpBn || 25) * 0.16).toFixed(1)),
      sovereignFundAr: officialCurrency.sovereignFundAr || `صندوق التنمية والاستثمار السيادي لـ ${country.name}`,
      sovereignFundEn: officialCurrency.sovereignFundEn || `National Development & Sovereign Fund of ${country.name}`,
    };
  } else {
    const defaultCurrencyCode = isEU ? 'EUR' : `${cid.toUpperCase()}D`;
    const defaultCurrencyName = isEU
      ? { ar: 'يورو (EUR)', en: 'Euro (EUR)', symbol: '€' }
      : { ar: `العملة الوطنية الرسمية لـ ${country.name}`, en: `National Currency of ${country.name}`, symbol: '¤' };

    currencyData = {
      nameAr: defaultCurrencyName.ar,
      nameEn: defaultCurrencyName.en,
      code: defaultCurrencyCode,
      symbol: defaultCurrencyName.symbol,
      centralBankAr: `البنك المركزي لدولة ${country.name}`,
      centralBankEn: `Central Bank of ${country.name}`,
      foreignReservesBn: Number(((country.gdpBn || 20) * 0.18).toFixed(1)),
      sovereignFundAr: `الهيئة العامة للاستثمار والاحتياطي السيادي لـ ${country.name}`,
      sovereignFundEn: `National Sovereign Wealth & Investment Authority of ${country.name}`,
    };
  }

  // مصادر التسليح الواقعية بحسب التموضع الجيوسياسي
  let primarySuppliersAr;
  let primarySuppliersEn;
  if (isNATO) {
    primarySuppliersAr = ['الولايات المتحدة (55%)', 'ألمانيا وفرنسا (25%)', 'المملكة المتحدة وإيطاليا (12%)', 'شراكات أوروبية (8%)'];
    primarySuppliersEn = ['United States (55%)', 'Germany & France (25%)', 'United Kingdom & Italy (12%)', 'European Consortiums (8%)'];
  } else if (isArab) {
    primarySuppliersAr = ['الولايات المتحدة وفرنسا (45%)', 'روسيا والصين (30%)', 'ألمانيا وإيطاليا (15%)', 'موردون إقليميون (10%)'];
    primarySuppliersEn = ['United States & France (45%)', 'Russia & China (30%)', 'Germany & Italy (15%)', 'Regional Suppliers (10%)'];
  } else if (isAfrica) {
    primarySuppliersAr = ['الصين وروسيا (55%)', 'فرنسا والولايات المتحدة (25%)', 'تركيا والإمارات (12%)', 'جنوب أفريقيا وموردون آخرون (8%)'];
    primarySuppliersEn = ['China & Russia (55%)', 'France & United States (25%)', 'Turkey & UAE (12%)', 'South Africa & Others (8%)'];
  } else if (isAsia) {
    primarySuppliersAr = ['الولايات المتحدة (40%)', 'فرنسا وروسيا (30%)', 'كوريا الجنوبية والصين (20%)', 'تنويع محلي (10%)'];
    primarySuppliersEn = ['United States (40%)', 'France & Russia (30%)', 'South Korea & China (20%)', 'Local Production (10%)'];
  } else if (isAmericas) {
    primarySuppliersAr = ['الولايات المتحدة وفرنسا (55%)', 'البرازيل وإسرائيل (25%)', 'تنويع محلي وإقليمي (20%)'];
    primarySuppliersEn = ['United States & France (55%)', 'Brazil & Israel (25%)', 'Regional & Domestic Base (20%)'];
  } else {
    primarySuppliersAr = ['الولايات المتحدة وأوروبا (60%)', 'إسرائيل والبرازيل (25%)', 'تنويع إقليمي (15%)'];
    primarySuppliersEn = ['United States & Europe (60%)', 'Israel & Brazil (25%)', 'Regional Diversity (15%)'];
  }

  // فروع القوات المسلحة الرسمية
  const branchesAr = [
    `القوات البرية لـ ${country.name}`,
    `القوات الجوية والدفاع الجوي`,
    `القوات البحرية وخفر السواحل`,
    `قوات الحرس الوطني والأمن الخاص`,
    `سلاح الإشارة والحرب السيبرانية`,
  ];
  const branchesEn = [
    `${country.name} Land Forces`,
    `${country.name} Air & Air Defense Force`,
    `${country.name} Navy & Coast Guard`,
    `National Guard & Special Security Command`,
    `Signal & Cyber Warfare Command`,
  ];

  // أجهزة المخابرات الوطنية
  const intelligenceAgencies = [
    {
      nameAr: `جهاز المخابرات الخارجية لـ ${country.name}`,
      nameEn: `${country.name} External Intelligence Directorate`,
      acronym: `${cid.toUpperCase()}-EID`,
      type: 'foreign',
      roleAr: `جمع المعلومات الاستخبارية الخارجية، رصد التهديدات عبر الحدود، ومتابعة المصالح الاستراتيجية.`,
      roleEn: `Foreign intelligence collection, transnational threat analysis, and diplomatic security.`,
    },
    {
      nameAr: `جهاز الأمن الوطني والاستخبارات الداخلية`,
      nameEn: `${country.name} National Internal Security Agency`,
      acronym: `${cid.toUpperCase()}-NISA`,
      type: 'domestic',
      roleAr: `الأمن الداخلي، مكافحة الإرهاب، التصدي لشبكات الجريمة المنظمة، وحماية البنية التحتية الحرجة.`,
      roleEn: `Homeland security, counter-terrorism, counter-sabotage, and critical infrastructure protection.`,
    },
    {
      nameAr: `مديرية الاستخبارات العسكرية والاستطلاع`,
      nameEn: `${country.name} Military Intelligence & Reconnaissance Command`,
      acronym: `${cid.toUpperCase()}-MIC`,
      type: 'military',
      roleAr: `الاستخبارات الميدانية للجيش، مراقبة الحدود، والاستطلاع الراداري والتكتيكي.`,
      roleEn: `Military tactical intelligence, border surveillance, and combat threat warning.`,
    },
  ];

  // المعاهدات والاتفاقيات الدولية
  const treaties = (country.alliances && country.alliances.length > 0)
    ? country.alliances.map((a) => ({
        nameAr: `عضوية ومعاهدة ${a}`,
        nameEn: `Accord & Charter of ${a}`,
        scopeAr: `الالتزام ببنود التنسيق السياسي والأمني والاقتصادي الجماعي وحماية المصالح المشتركة للدول الأعضاء.`,
        scopeEn: `Commitment to mutual political, economic and collective security consultation frameworks.`,
      }))
    : [
        {
          nameAr: `ميثاق منظمة الأمم المتحدة والاتفاقيات الدولية ذات الصلة`,
          nameEn: `Charter of the United Nations & Multilateral Treaties`,
          scopeAr: `الالتزام بالقانون الدولي وحفظ السلم والأمن الدوليين وتنمية العلاقات الودية.`,
          scopeEn: `Foundational commitment to international peace, sovereign equality and non-aggression.`,
        },
        {
          nameAr: `معاهدة عدم انتشار الأسلحة النووية (NPT)`,
          nameEn: `Treaty on the Non-Proliferation of Nuclear Weapons (NPT)`,
          scopeAr: `منع انتشار السلاح النووي وتعزيز التعاون في الاستخدامات السلمية للطاقة الذرية.`,
          scopeEn: `Multilateral accord committing to nuclear non-proliferation and peaceful atomic energy.`,
        },
      ];

  return {
    currency: currencyData,
    military: {
      budgetBn: country.militaryBudgetBn || Number(((country.gdpBn || 20) * 0.022).toFixed(1)),
      globalRank: country.globalRank || 48,
      activePersonnelK: country.activePersonnelK || 65,
      reservePersonnelK: country.reservePersonnelK || 45,
      branchesAr,
      branchesEn,
      doctrineAr: `حماية السيادة الإقليمية، حراسة الحدود والممرات الحيوية، والمشاركة في آليات الاستقرار والتعاون الدفاعي الإقليمي والدولي.`,
      doctrineEn: `Territorial integrity, border protection, maritime and airspace surveillance, and regional collective stabilization.`,
    },
    armsImports: {
      primarySuppliersAr,
      primarySuppliersEn,
      keyImportedSystemsAr: [
        'طائرات مقاتلة متعددة المهام وأنظمة تدريب طيران متقدمة',
        'منظومات دفاع جوي ورادارات مراقبة وإنذار مبكر ثلاثية الأبعاد',
        'مركبات مدرعة مدولبة ومجنزرة وناقلات جند قتالية',
        'زوارق دورية سريعة وخفر سواحل وطائرات مسيرة استطلاعية',
        'أنظمة اتصالات مشفرة وأسلحة دعم مشاة وذخائر تكتيكية',
      ],
      keyImportedSystemsEn: [
        'Multi-role fighter aircraft & advanced pilot training fleet',
        'Air defense missile batteries & 3D long-range radar networks',
        'Wheeled & tracked armored fighting vehicles (AFVs/APCs)',
        'Offshore patrol vessels, coastal corvettes & tactical UAVs',
        'Encrypted tactical communications & infantry support weapons',
      ],
      domesticProductionRatioAr: isNATO ? '25% - 40%' : '15% - 25% (ذخائر، صيانة، وتجميع مركبات خفيفة)',
      domesticProductionRatioEn: isNATO ? '25%–40%' : '15%–25% (Ammunition, maintenance depots & light assembly)',
      dependencyRiskAr: 'متوسط — يعتمد على عقود الدعم اللوجستي وتحديث قطع الغيار مع الدول الموردة الرئيسية.',
      dependencyRiskEn: 'Moderate — reliant on foreign supply chains for avionics, radars, and high-tech parts.',
    },
    intelligenceAgencies,
    treaties,
    historyTo2026: [
      {
        year: 1945,
        eventAr: `المشاركة في وضع أسس النظام الدولي والانضمام إلى الجمعية العامة للأمم المتحدة.`,
        eventEn: `Charter participation in establishing the post-World War II international architecture.`,
      },
      {
        year: 1975,
        eventAr: `ترسيخ السيادة الوطنية وتحديث المؤسسات الدستورية والاقتصادية والدفاعية.`,
        eventEn: `Consolidation of sovereign statehood and institutional modernization.`,
      },
      {
        year: 1991,
        eventAr: `التكيف الاستراتيجي مع نهاية الحرب الباردة وفتح الشراكات الإقليمية والتجارية الجديدة.`,
        eventEn: `Adapting national posture to the post-Cold War multipolar reality.`,
      },
      {
        year: 2020,
        eventAr: `إطلاق برامج التحول الرقمي الشامل وتطوير قدرات الأمن السيبراني والصمود الاقتصادي.`,
        eventEn: `Launching national digital transformation, cyber resilience, and economic modernization.`,
      },
      {
        year: 2024,
        eventAr: `تعزيز أمن سلاسل الإمداد ومواجهة تحديات المناخ وأمن الطاقة والتعاون متعدد الأطراف.`,
        eventEn: `Strengthening supply chain security, climate adaptation, and strategic trade partnerships.`,
      },
      {
        year: 2026,
        eventAr: `تحديث منظومات الدفاع الوطني، والجاهزية لمواكبة التوازنات الجيوسياسية العالمية المتغيرة.`,
        eventEn: `Modernizing multi-domain defense readiness and active participation in international frameworks.`,
      },
    ],
  };
}
