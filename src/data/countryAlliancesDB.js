/**
 * قاعدة البيانات الشاملة للتحالفات العسكرية والتكتلات الاقتصادية لجميع الدول
 * Comprehensive Sovereign Alliances, Treaties & Blocs Matrix (Military & Economic)
 */

export const GLOBAL_ALLIANCES_DB = {
  nato: {
    id: 'nato',
    code: 'NATO',
    nameAr: 'حلف شمال الأطلسي (الناتو)',
    nameEn: 'North Atlantic Treaty Organization',
    type: 'military',
    typeLabelAr: 'تحالف عسكري دفاعي مشترك',
    typeLabelEn: 'Collective Military Defense Alliance',
    badgeColor: 'border-blue-500/40 bg-blue-500/10 text-blue-400',
    treatyAr: 'معاهدة واشنطن لعام 1949 (المادة 5 للدفاع المشترك)',
    treatyEn: 'North Atlantic Treaty 1949 (Article 5 Collective Defense)',
    established: 1949,
    headquartersAr: 'بروكسل، بلجيكا',
    headquartersEn: 'Brussels, Belgium',
    secretaryGeneralAr: 'مارك روته (Mark Rutte)',
    secretaryGeneralEn: 'Mark Rutte',
    combinedMilitaryBudgetBn: 1340.0,
    combinedGdpBn: 48600.0,
    totalActivePersonnelK: 3520,
    nuclearStatesCount: 3,
    memberCount: 32,
    collectiveDefenseClauseAr:
      'المادة 5: يتفق الأطراف على أن أي هجوم مسلح ضد دولة أو أكثر منهم في أوروبا أو أمريكا الشمالية يُعد هجوماً ضد الجميع، ويستوجب تقديم الدعم العسكري الفوري.',
    collectiveDefenseClauseEn:
      'Article 5: An armed attack against one or more shall be considered an attack against them all, committing members to immediate military assistance.',
    strategicFocusAr: 'الردع النووي والتقليدي، الدفاع الجوي والصاروخي الباليستي المشترك، وتأمين شمال الأطلسي وبحر البلطيق.',
    strategicFocusEn: 'Nuclear and conventional deterrence, integrated missile defense, North Atlantic and Baltic security.',
    members: [
      { id: 'us', nameAr: 'الولايات المتحدة', nameEn: 'United States', flag: '🇺🇸', roleAr: 'القيادة العملياتية العليا والمظلة النووية الاستراتيجية', roleEn: 'Supreme Operational Command & Strategic Nuclear Umbrella', budgetBn: 886.0, troopsK: 1328 },
      { id: 'gb', nameAr: 'المملكة المتحدة', nameEn: 'United Kingdom', flag: '🇬🇧', roleAr: 'قوة ردع نووية بحرية (غواصات تريدنت) وقيادة الأسطول الشمالي', roleEn: 'Nuclear Submarine Deterrence (Trident) & Northern Fleet Lead', budgetBn: 68.5, troopsK: 185 },
      { id: 'de', nameAr: 'ألمانيا', nameEn: 'Germany', flag: '🇩🇪', roleAr: 'المركز اللوجستي الأوروبي وقيادة قوات الرد السريع في البلطيق', roleEn: 'Central European Logistics Hub & Baltic Rapid Reaction', budgetBn: 56.0, troopsK: 181 },
      { id: 'fr', nameAr: 'فرنسا', nameEn: 'France', flag: '🇫🇷', roleAr: 'الردع النووي المستقل والاستقلالية الاستراتيجية الأوروبية', roleEn: 'Independent Nuclear Deterrence & European Strategic Autonomy', budgetBn: 50.0, troopsK: 205 },
      { id: 'tr', nameAr: 'تركيا', nameEn: 'Turkey', flag: '🇹🇷', roleAr: 'ثاني أضخم جيش نظامي، حراسة المضائق البحرية (البوسفور والدردنيل) والجناح الجنوبي', roleEn: '2nd Largest Army, Straits Gatekeeper (Bosphorus) & Southern Flank', budgetBn: 25.0, troopsK: 355 },
      { id: 'pl', nameAr: 'بولندا', nameEn: 'Poland', flag: '🇵🇱', roleAr: 'درع الخاصرة الشرقية وأعلى نسبة إنفاق دفاعي (4.1% من الناتج)', roleEn: 'Eastern Flank Forward Shield & Highest Spender (% of GDP)', budgetBn: 35.0, troopsK: 216 },
      { id: 'it', nameAr: 'إيطاليا', nameEn: 'Italy', flag: '🇮🇹', roleAr: 'القيادة البحرية للعمليات المشتركة في البحر الأبيض المتوسط', roleEn: 'Mediterranean Joint Naval Command Lead', budgetBn: 32.0, troopsK: 165 },
      { id: 'ca', nameAr: 'كندا', nameEn: 'Canada', flag: '🇨🇦', roleAr: 'حماية الممرات القطبية الشمالية والمشاركة في نوراد', roleEn: 'Arctic Security & NORAD Joint Aerospace Defense', budgetBn: 27.0, troopsK: 68 },
      { id: 'es', nameAr: 'إسبانيا', nameEn: 'Spain', flag: '🇪🇸', roleAr: 'بوابة مضيق جبل طارق وقواعد الدفاع الصاروخي في روتا', roleEn: 'Gibraltar Strait Defense & Rota Aegis Ashore Base', budgetBn: 19.5, troopsK: 120 },
      { id: 'nl', nameAr: 'هولندا', nameEn: 'Netherlands', flag: '🇳🇱', roleAr: 'القدرات الجوية المتقدمة (F-35) واللوجستيات البحرية المشتركة', roleEn: 'Advanced 5th-Gen Air Assets (F-35) & Joint Logistics', budgetBn: 16.0, troopsK: 41 },
      { id: 'fi', nameAr: 'فنلندا', nameEn: 'Finland', flag: '🇫🇮', roleAr: 'تأمين 1340 كم من الحدود المباشرة مع روسيا وقوات مدفعية ثقيلة', roleEn: '1,340 km Direct Russian Border & Elite Heavy Artillery', budgetBn: 6.8, troopsK: 30 },
      { id: 'se', nameAr: 'السويد', nameEn: 'Sweden', flag: '🇸🇪', roleAr: 'السيطرة التكتيكية على بحر البلطيق وغواصات أرخبيل جزيرة غوتلاند', roleEn: 'Baltic Sea Dominance, Gotland Fortress & Stealth Subs', budgetBn: 10.2, troopsK: 24 },
    ],
  },

  brics: {
    id: 'brics',
    code: 'BRICS+',
    nameAr: 'تكتل بريكس بلس (BRICS+)',
    nameEn: 'BRICS+ Multipolar Strategic Bloc',
    type: 'economic',
    typeLabelAr: 'تكتل جيواقتصادي وتجاري متعدد الأقطاب',
    typeLabelEn: 'Multipolar Geoeconomic & Trade Bloc',
    badgeColor: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400',
    treatyAr: 'إعلان قازان 2024 وميثاق بنك التنمية الجديد (NDB)',
    treatyEn: 'Kazan Declaration 2024 & New Development Bank (NDB) Treaty',
    established: 2006,
    headquartersAr: 'شنغهاي، الصين (مقر NDB) / رئاسة سنوية دورية',
    headquartersEn: 'Shanghai, China (NDB) / Rotating Annual Presidency',
    secretaryGeneralAr: 'رئاسة دورية بين قادة الدول الأعضاء',
    secretaryGeneralEn: 'Rotating Presidency among Heads of State',
    combinedMilitaryBudgetBn: 520.0,
    combinedGdpBn: 30400.0,
    totalActivePersonnelK: 5600,
    nuclearStatesCount: 3,
    memberCount: 10,
    collectiveDefenseClauseAr:
      'ميثاق التعاون: تعزيز تسوية التجارة بالعملات المحلية، إرساء نظام مالي متعدد الأقطاب، ورفض العقوبات الأحادية والهيمنة المالية.',
    collectiveDefenseClauseEn:
      'Cooperation Charter: Local currency trade settlements, multipolar financial architecture, and resistance to unilateral coercive measures.',
    strategicFocusAr: 'السيطرة على 43% من إنتاج النفط العالمي، خفض الاعتماد على الدولار، والاستثمار في البنية التحتية عبر بنك التنمية.',
    strategicFocusEn: 'Controlling 43% of global crude output, de-dollarization in commodity trade, and infrastructure financing.',
    members: [
      { id: 'sa', nameAr: 'المملكة العربية السعودية', nameEn: 'Saudi Arabia', flag: '🇸🇦', roleAr: 'عملاق الطاقة العالمي وصاحبة أكبر صندوق ثروة سيادية عربي مشارك في التكتل', roleEn: 'Global Energy Pillar & Foremost Sovereign Wealth Inflows', budgetBn: 75.0, troopsK: 257 },
      { id: 'cn', nameAr: 'جمهورية الصين الشعبية', nameEn: 'China', flag: '🇨🇳', roleAr: 'القوة الصناعية والتجارية الأولى ومؤسس بنك التنمية الجديد ومبادرة الحزام والطريق', roleEn: 'Industrial & Trade Superpower, NDB Founder & Belt and Road Lead', budgetBn: 296.0, troopsK: 2035 },
      { id: 'ru', nameAr: 'روسيا الاتحادية', nameEn: 'Russia', flag: '🇷🇺', roleAr: 'القوة النووية الكبرى ومصدر الغاز والمعادن النادرة والسلع الاستراتيجية', roleEn: 'Premier Nuclear Arsenal & Strategic Resource Supplier', budgetBn: 140.0, troopsK: 1320 },
      { id: 'in', nameAr: 'جمهورية الهند', nameEn: 'India', flag: '🇮🇳', roleAr: 'أكبر كتلة سكانية في العالم وأسرع الاقتصادات الكبرى نمواً وجسر الجنوب العالمي', roleEn: 'Demographic Giant, Fastest Growing Major Economy & Global South Bridge', budgetBn: 81.4, troopsK: 1450 },
      { id: 'ae', nameAr: 'دولة الإمارات العربية المتحدة', nameEn: 'United Arab Emirates', flag: '🇦🇪', roleAr: 'المركز المالي واللوجستي العالمي لإعادة التصدير وتجارة الذهب والسلع في التكتل', roleEn: 'Global Financial & Logistics Re-Export Gateway for the Bloc', budgetBn: 23.0, troopsK: 65 },
      { id: 'eg', nameAr: 'جمهورية مصر العربية', nameEn: 'Egypt', flag: '🇪🇬', roleAr: 'التحكم في ممر قناة السويس الاستراتيجي والعمق البشري والعسكري العربي والأفريقي', roleEn: 'Suez Canal Chokepoint Gatekeeper & Arab-African Depth', budgetBn: 5.5, troopsK: 440 },
      { id: 'br', nameAr: 'جمهورية البرازيل الاتحادية', nameEn: 'Brazil', flag: '🇧🇷', roleAr: 'قوة أمريكا الجنوبية الرائدة والعملاق الزراعي والأمن الغذائي العالمي', roleEn: 'South American Anchor & Global Agricultural/Food Security Giant', budgetBn: 24.0, troopsK: 360 },
      { id: 'za', nameAr: 'جمهورية جنوب أفريقيا', nameEn: 'South Africa', flag: '🇿🇦', roleAr: 'بوابة القارة الأفريقية الدبلوماسية وأكبر منتج للمعادن الحيوية والبلاتين', roleEn: 'African Diplomatic Anchor & Critical Mineral Supply Base', budgetBn: 3.2, troopsK: 73 },
      { id: 'ir', nameAr: 'الجمهورية الإسلامية الإيرانية', nameEn: 'Iran', flag: '🇮🇷', roleAr: 'احتياطيات ضخمة من النفط والغاز والسيطرة على مضيق هرمز وممرات آسيا الوسطى', roleEn: 'Major Hydrocarbon Reserves, Strait of Hormuz Control & North-South Corridor', budgetBn: 9.8, troopsK: 610 },
      { id: 'et', nameAr: 'جمهورية إثيوبيا الفيدرالية', nameEn: 'Ethiopia', flag: '🇪🇹', roleAr: 'مقر الاتحاد الأفريقي وأكبر قوة ديموغرافية في القرن الأفريقي', roleEn: 'African Union Headquarters Host & Horn of Africa Demographic Hub', budgetBn: 1.2, troopsK: 160 },
    ],
  },

  gcc: {
    id: 'gcc',
    code: 'GCC',
    nameAr: 'مجلس التعاون لدول الخليج العربية',
    nameEn: 'Gulf Cooperation Council',
    type: 'geoeconomic',
    typeLabelAr: 'تكتل عسكري واقتصادي تكاملي (درع الجزيرة)',
    typeLabelEn: 'Integrated Military & Economic Bloc (Peninsula Shield)',
    badgeColor: 'border-amber-500/40 bg-amber-500/10 text-amber-400',
    treatyAr: 'النظام الأساسي للمجلس 1981 واتفاقية الدفاع المشترك لقوات درع الجزيرة',
    treatyEn: 'GCC Charter 1981 & Joint Defense Agreement (Peninsula Shield Force)',
    established: 1981,
    headquartersAr: 'الرياض، المملكة العربية السعودية',
    headquartersEn: 'Riyadh, Saudi Arabia',
    secretaryGeneralAr: 'جاسم محمد البديوي (الأمين العام)',
    secretaryGeneralEn: 'Jasem Mohamed Al-Budaiwi',
    combinedMilitaryBudgetBn: 125.0,
    combinedGdpBn: 2350.0,
    totalActivePersonnelK: 430,
    nuclearStatesCount: 0,
    memberCount: 6,
    collectiveDefenseClauseAr:
      'اتفاقية الدفاع المشترك: أي اعتداء على أي دولة من دول المجلس هو اعتداء عليها جميعاً، وأي خطر يتهدد إحداها يتهددها جميعاً.',
    collectiveDefenseClauseEn:
      'Joint Defense Agreement: Any aggression against any member state is deemed an aggression against all, obliging mutual military response.',
    strategicFocusAr: 'قوات درع الجزيرة، شبكة الدفاع الجوي الصاروخي الموحدة، وحماية ممرات الطاقة وصناديق ثروة سيادية تفوق 4.2 تريليون دولار.',
    strategicFocusEn: 'Peninsula Shield Force, integrated air & missile defense radar, and management of $4.2T+ sovereign assets.',
    members: [
      { id: 'sa', nameAr: 'المملكة العربية السعودية', nameEn: 'Saudi Arabia', flag: '🇸🇦', roleAr: 'الدولة القيادية الكبرى، مقر الأمانة العامة وقيادة منظومة الدفاع الجوي والصاروخي الموحد', roleEn: 'Anchor State, Secretariat Host & Integrated Air Defense Command', budgetBn: 75.0, troopsK: 257 },
      { id: 'ae', nameAr: 'دولة الإمارات العربية المتحدة', nameEn: 'United Arab Emirates', flag: '🇦🇪', roleAr: 'القوة التكنولوجية والاقتصادية وصناعات الدفاع الجوي المتقدمة (مجموعة EDGE)', roleEn: 'Tech & Economic Engine, Advanced Defense Manufacturing (EDGE)', budgetBn: 23.0, troopsK: 65 },
      { id: 'qa', nameAr: 'دولة قطر', nameEn: 'Qatar', flag: '🇶🇦', roleAr: 'العملاق العالمي للغاز الطبيعي المسال، مقر قاعدة العديد والوساطة الدبلوماسية الدولية', roleEn: 'Global LNG Superpower, Al-Udeid Host & Premier Diplomatic Mediator', budgetBn: 15.0, troopsK: 17 },
      { id: 'kw', nameAr: 'دولة الكويت', nameEn: 'Kuwait', flag: '🇰🇼', roleAr: 'احتياطيات نفطية ضخمة وصندوق سيادي هو الأقدم في العالم (KIA) والدور الإنساني', roleEn: 'Deep Oil Reserves & Oldest Sovereign Wealth Fund in the World (KIA)', budgetBn: 7.0, troopsK: 18 },
      { id: 'om', nameAr: 'سلطنة عمان', nameEn: 'Oman', flag: '🇴🇲', roleAr: 'حراسة مضيق هرمز الإقليمي، الحياد الإيجابي والتوازن الدبلوماسي الاستراتيجي', roleEn: 'Strait of Hormuz Sovereign Gatekeeper & Geopolitical Balancer', budgetBn: 6.5, troopsK: 43 },
      { id: 'bh', nameAr: 'مملكة البحرين', nameEn: 'Bahrain', flag: '🇧🇭', roleAr: 'مقر قيادة الأسطول الخامس الأمريكي والمركز المصرفي والمالي الإقليمي', roleEn: 'US 5th Fleet Naval Base Host & Regional Banking Hub', budgetBn: 1.5, troopsK: 10 },
    ],
  },

  eu: {
    id: 'eu',
    code: 'EU',
    nameAr: 'الاتحاد الأوروبي (European Union)',
    nameEn: 'European Union',
    type: 'geoeconomic',
    typeLabelAr: 'اتحاد اقتصادي وسياسي ودفاعي (PESCO)',
    typeLabelEn: 'Economic, Political & Security Union (PESCO)',
    badgeColor: 'border-indigo-500/40 bg-indigo-500/10 text-indigo-400',
    treatyAr: 'معاهدة ماستريخت ولشبونة (المادة 42-7 للدفاع المتبادل)',
    treatyEn: 'Maastricht & Lisbon Treaties (Article 42.7 Mutual Assistance)',
    established: 1993,
    headquartersAr: 'بروكسل، بلجيكا / ستراسبورغ، فرنسا',
    headquartersEn: 'Brussels, Belgium / Strasbourg, France',
    secretaryGeneralAr: 'أورسولا فون دير لاين (المفوضية الأوروبية)',
    secretaryGeneralEn: 'Ursula von der Leyen (European Commission)',
    combinedMilitaryBudgetBn: 320.0,
    combinedGdpBn: 19300.0,
    totalActivePersonnelK: 1450,
    nuclearStatesCount: 1,
    memberCount: 27,
    collectiveDefenseClauseAr:
      'المادة 42(7): إذا تعرضت دولة عضو لعدوان مسلح على أراضيها، تلتزم الدول الأعضاء الأخرى بتقديم العون والمساعدة بكافة الوسائل المتاحة.',
    collectiveDefenseClauseEn:
      'Article 42(7): If an EU country is a victim of armed aggression, other EU countries have an obligation to aid and assist it by all the means in their power.',
    strategicFocusAr: 'سوق موحدة لأكثر من 450 مليون نسمة، منطقة اليورو، ومبادرات التسليح الدفاعي الأوروبي المشترك (EDF).',
    strategicFocusEn: 'Single market of 450M consumers, Eurozone, and European Defence Fund joint procurement.',
    members: [
      { id: 'de', nameAr: 'ألمانيا', nameEn: 'Germany', flag: '🇩🇪', roleAr: 'المحرك الاقتصادي والصناعي الأول للاتحاد والممول الأكبر للميزانية المشتركة', roleEn: 'Top Economic & Industrial Powerhouse, Largest Budget Contributor', budgetBn: 56.0, troopsK: 181 },
      { id: 'fr', nameAr: 'فرنسا', nameEn: 'France', flag: '🇫🇷', roleAr: 'القوة النووية الوحيدة في الاتحاد ومقعد دائم في مجلس الأمن وقوة الردع الجوي-البحري', roleEn: 'Sole Nuclear Power in EU, Permanent UNSC Member & Blue-Water Navy', budgetBn: 50.0, troopsK: 205 },
      { id: 'it', nameAr: 'إيطاليا', nameEn: 'Italy', flag: '🇮🇹', roleAr: 'ثالث أضخم اقتصاد وقيادة أمن البحر الأبيض المتوسط والصناعات البحرية العسكرية', roleEn: '3rd Largest Economy & Mediterranean Naval Defense Lead', budgetBn: 32.0, troopsK: 165 },
      { id: 'es', nameAr: 'إسبانيا', nameEn: 'Spain', flag: '🇪🇸', roleAr: 'بوابة أوروبا الإيبيرية والأطلسية وجسر العلاقات مع أمريكا اللاتينية', roleEn: 'Iberian Atlantic Gateway & Latin American Strategic Bridge', budgetBn: 19.5, troopsK: 120 },
      { id: 'nl', nameAr: 'هولندا', nameEn: 'Netherlands', flag: '🇳🇱', roleAr: 'ميناء روتردام رئة التجارة ومركز التكنولوجيا الفائقة وتصنيع أشباه الموصلات (ASML)', roleEn: 'Trade Gateway (Rotterdam) & Semiconductor Tech Core (ASML)', budgetBn: 16.0, troopsK: 41 },
      { id: 'pl', nameAr: 'بولندا', nameEn: 'Poland', flag: '🇵🇱', roleAr: 'الدرع الدفاعي الشرقي للاتحاد والمركز اللوجستي لدعم أوكرانيا', roleEn: 'Eastern Defense Shield & Ukraine Logistics Gateway', budgetBn: 35.0, troopsK: 216 },
    ],
  },

  sco: {
    id: 'sco',
    code: 'SCO',
    nameAr: 'منظمة شنغهاي للتعاون (SCO)',
    nameEn: 'Shanghai Cooperation Organisation',
    type: 'military',
    typeLabelAr: 'منظمة أمنية ودفاعية أوراسية',
    typeLabelEn: 'Eurasian Security & Defense Coalition',
    badgeColor: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400',
    treatyAr: 'ميثاق سانت بطرسبرغ 2002 واتفاقية محاربة قوى الشر الثلاث',
    treatyEn: 'St. Petersburg Charter 2002 & Three Evils Security Accord',
    established: 2001,
    headquartersAr: 'بكين، الصين (الأمانة العامة) / طشقند (مكافحة الإرهاب RATS)',
    headquartersEn: 'Beijing, China (Secretariat) / Tashkent (RATS Anti-Terror)',
    secretaryGeneralAr: 'تشانغ مينغ (الأمين العام)',
    secretaryGeneralEn: 'Zhang Ming',
    combinedMilitaryBudgetBn: 525.0,
    combinedGdpBn: 24800.0,
    totalActivePersonnelK: 5200,
    nuclearStatesCount: 4, // China, Russia, India, Pakistan
    memberCount: 10,
    collectiveDefenseClauseAr:
      'اتفاقية الأمن المشترك: التنسيق العسكري لمكافحة قوى الشر الثلاث (الإرهاب، الانفصالية، والتطرف) وتأمين قلب أوراسيا.',
    collectiveDefenseClauseEn:
      'Joint Security Accord: Military and intelligence coordination combating terrorism, separatism, and extremism across Eurasia.',
    strategicFocusAr: 'تأمين قلب آسيا، تدريبات "مهمة السلام" العسكرية المشتركة، وربط ممرات الطاقة بين آسيا الوسطى وروسيا والصين.',
    strategicFocusEn: 'Heartland security, Peace Mission joint military drills, and Eurasian energy transit corridors.',
    members: [
      { id: 'cn', nameAr: 'الصين', nameEn: 'China', flag: '🇨🇳', roleAr: 'المحرك المالي والاستثماري والمؤسس لمنظمة شنغهاي ومبادرة الحزام والطريق', roleEn: 'Financial & Infrastructure Engine, SCO Co-Founder', budgetBn: 296.0, troopsK: 2035 },
      { id: 'ru', nameAr: 'روسيا', nameEn: 'Russia', flag: '🇷🇺', roleAr: 'الضامن العسكري والأمني الرئيسي في الفضاء الأوراسي وآسيا الوسطى', roleEn: 'Premier Military & Security Security Guarantor in Eurasia', budgetBn: 140.0, troopsK: 1320 },
      { id: 'in', nameAr: 'الهند', nameEn: 'India', flag: '🇮🇳', roleAr: 'موازنة استراتيجية والتنسيق الأمني لمكافحة الإرهاب في جنوب آسيا', roleEn: 'Strategic Balancer & Counter-Terrorism Intelligence Pillar', budgetBn: 81.4, troopsK: 1450 },
      { id: 'pk', nameAr: 'باكستان', nameEn: 'Pakistan', flag: '🇵🇰', roleAr: 'قوة نووية وممر بحري مباشر (ميناء جوادر) للمحيط الهندي', roleEn: 'Nuclear Armed Member & Gwadar Deepwater Maritime Access', budgetBn: 10.5, troopsK: 654 },
      { id: 'ir', nameAr: 'إيران', nameEn: 'Iran', flag: '🇮🇷', roleAr: 'عضوية كاملة تؤمن الربط بين آسيا الوسطى والخليج العربي ومضيق هرمز', roleEn: 'Full Member Linking Central Asia to Persian Gulf & Hormuz', budgetBn: 9.8, troopsK: 610 },
      { id: 'kz', nameAr: 'كازاخستان', nameEn: 'Kazakhstan', flag: '🇰🇿', roleAr: 'أكبر دولة غير ساحلية ومورد اليورانيوم والنفط في آسيا الوسطى', roleEn: 'Largest Landlocked Nation, Major Uranium & Oil Transit Hub', budgetBn: 2.8, troopsK: 70 },
      { id: 'by', nameAr: 'بيلاروسيا', nameEn: 'Belarus', flag: '🇧🇾', roleAr: 'عضو جديد (2024)، الموقع الاستراتيجي على التماس المباشر مع الناتو', roleEn: 'Joined 2024, Strategic Forward Position Bordering NATO', budgetBn: 1.8, troopsK: 65 },
    ],
  },

  aukus: {
    id: 'aukus',
    code: 'AUKUS',
    nameAr: 'تحالف أوكوس العسكري (AUKUS)',
    nameEn: 'AUKUS Security Partnership',
    type: 'military',
    typeLabelAr: 'تحالف أمني وعسكري نووي تكتيكي',
    typeLabelEn: 'Nuclear Submarine & Advanced Defense Alliance',
    badgeColor: 'border-violet-500/40 bg-violet-500/10 text-violet-400',
    treatyAr: 'اتفاقية كانبيرا-واشنطن-لندن للغواصات النووية والتكنولوجيا الفائقة (2021)',
    treatyEn: 'Trilateral Security Pact for SSN-AUKUS Submarines & Advanced Capabilities',
    established: 2021,
    headquartersAr: 'قيادة عملياتية مشتركة ثلاثية (واشنطن / لندن / كانبيرا)',
    headquartersEn: 'Trilateral Operations Taskforce (Washington / London / Canberra)',
    secretaryGeneralAr: 'مجلس وزراء الدفاع والخارجية الثلاثي',
    secretaryGeneralEn: 'Trilateral Defense & Foreign Ministers Council',
    combinedMilitaryBudgetBn: 985.0,
    combinedGdpBn: 31200.0,
    totalActivePersonnelK: 1570,
    nuclearStatesCount: 2, // US, UK
    memberCount: 3,
    collectiveDefenseClauseAr:
      'معاهدة الردع الاستراتيجي: تزويد أستراليا بغواصات هجومية تعمل بالدفع النووي وتطوير قدرات أسلحة فرط صوتية والذكاء الاصطناعي العسكري.',
    collectiveDefenseClauseEn:
      'Deterrence Pact: Equipping Australia with conventionally armed, nuclear-powered submarines (SSN) and hypersonic/quantum capabilities.',
    strategicFocusAr: 'احتواء التمدد البحري الصيني في المحيطين الهندي والهادئ، التفوق تحت السطحي، وحرب الأعماق.',
    strategicFocusEn: 'Countering Chinese naval dominance in Indo-Pacific, undersea superiority, and quantum cyber warfare.',
    members: [
      { id: 'us', nameAr: 'الولايات المتحدة', nameEn: 'United States', flag: '🇺🇸', roleAr: 'توفير تكنولوجيا المفاعلات النووية وغواصات طراز فيرجينيا والردع البحري', roleEn: 'Virginia-Class SSN Transfer, Nuclear Propulsion Tech & Deterrence', budgetBn: 886.0, troopsK: 1328 },
      { id: 'gb', nameAr: 'المملكة المتحدة', nameEn: 'United Kingdom', flag: '🇬🇧', roleAr: 'تصميم وبناء غواصات SSN-AUKUS في أحواض بارو-إن-فورنيس ونظم القتال المتقدمة', roleEn: 'SSN-AUKUS Hull Architecture & Barrow Shipyard Co-Production', budgetBn: 68.5, troopsK: 185 },
      { id: 'au', nameAr: 'أستراليا', nameEn: 'Australia', flag: '🇦🇺', roleAr: 'قاعدة الانطلاق الأمامية في المحيطين الهندي والهادئ وقاعدة HMAS ستيرلينغ الغربية', roleEn: 'Forward Indo-Pacific Naval Staging Hub & Submarine Base Stirling', budgetBn: 31.0, troopsK: 58 },
    ],
  },

  arab_league: {
    id: 'arab_league',
    code: 'LAS',
    nameAr: 'جامعة الدول العربية ومعاهدة الدفاع المشترك',
    nameEn: 'League of Arab States & Joint Defense',
    type: 'geoeconomic',
    typeLabelAr: 'منظمة إقليمية ومعاهدة دفاع عربي مشترك',
    typeLabelEn: 'Regional Organization & Joint Arab Defense Treaty',
    badgeColor: 'border-emerald-600/40 bg-emerald-600/10 text-emerald-300',
    treatyAr: 'ميثاق الجامعة 1945 ومعاهدة الدفاع المشترك والتعاون الاقتصادي 1950',
    treatyEn: 'Arab League Pact 1945 & Joint Defense and Economic Cooperation Treaty 1950',
    established: 1945,
    headquartersAr: 'القاهرة، جمهورية مصر العربية',
    headquartersEn: 'Cairo, Egypt',
    secretaryGeneralAr: 'أحمد أبو الغيط (الأمين العام)',
    secretaryGeneralEn: 'Ahmed Aboul Gheit',
    combinedMilitaryBudgetBn: 145.0,
    combinedGdpBn: 3600.0,
    totalActivePersonnelK: 2300,
    nuclearStatesCount: 0,
    memberCount: 22,
    collectiveDefenseClauseAr:
      'المادة 2 من معاهدة الدفاع المشترك: أي اعتداء مسلح يقع على أي دولة أو أكثر منها يعتبر اعتداء عليها جميعاً، وتلتزم بمبادرة العون العسكري.',
    collectiveDefenseClauseEn:
      'Article 2: Any armed aggression against one or more member states is considered an aggression against all, compelling joint defense.',
    strategicFocusAr: 'حماية الأمن القومي العربي، القضية الفلسطينية، أمن الممرات المائية (باب المندب، السويس، هرمز)، ومكافحة الإرهاب.',
    strategicFocusEn: 'Arab collective security, Palestinian cause, maritime corridors defense, and regional counter-terrorism.',
    members: [
      { id: 'sa', nameAr: 'المملكة العربية السعودية', nameEn: 'Saudi Arabia', flag: '🇸🇦', roleAr: 'العمق المالي والدبلوماسي الإسلامي الأكبر وقيادة المبادرات التنموية', roleEn: 'Financial & Diplomatic Pillar, Visionary Development Leader', budgetBn: 75.0, troopsK: 257 },
      { id: 'eg', nameAr: 'جمهورية مصر العربية', nameEn: 'Egypt', flag: '🇪🇬', roleAr: 'الدولة المؤسسة، مقر الأمانة العامة الدائم وأضخم قوة عسكرية برية وبحرية عربية', roleEn: 'Founding State, Permanent HQ Host & Largest Arab Armed Force', budgetBn: 5.5, troopsK: 440 },
      { id: 'ae', nameAr: 'دولة الإمارات العربية المتحدة', nameEn: 'United Arab Emirates', flag: '🇦🇪', roleAr: 'المركز الاقتصادي والتجاري الرائد ودعم الاستقرار الإقليمي', roleEn: 'Economic & Trade Engine, Regional Humanitarian Anchor', budgetBn: 23.0, troopsK: 65 },
      { id: 'dz', nameAr: 'جمهورية الجزائر', nameEn: 'Algeria', flag: '🇩🇿', roleAr: 'القوة العسكرية الكبرى في المغرب العربي وصاحبة المبادئ الدبلوماسية الثابتة', roleEn: 'Maghreb Strategic Pillar, Energy Supplier & Sovereign Non-Alignment', budgetBn: 21.6, troopsK: 312 },
      { id: 'iq', nameAr: 'جمهورية العراق', nameEn: 'Iraq', flag: '🇮🇶', roleAr: 'دولة مؤسسة، ثاني أكبر منتج للنفط في أوبك وركيزة التوازن المشرقي', roleEn: 'Founding Member, 2nd Largest OPEC Producer & Levantine Anchor', budgetBn: 5.2, troopsK: 210 },
      { id: 'ma', nameAr: 'المملكة المغربية', nameEn: 'Morocco', flag: '🇲🇦', roleAr: 'حراسة البوابة الغربية ومضيق جبل طارق والعمق الأفريقي العربي', roleEn: 'Western Gateway, Gibraltar Strait Guard & African Bridge', budgetBn: 5.4, troopsK: 195 },
      { id: 'jo', nameAr: 'المملكة الأردنية الهاشمية', nameEn: 'Jordan', flag: '🇯🇴', roleAr: 'الوصاية الهاشمية على المقدسات وركيزة الاستقرار الأمني الحدودي في المشرق', roleEn: 'Hashemite Custodianship of Holy Sites & Levantine Border Shield', budgetBn: 2.1, troopsK: 100 },
      { id: 'qa', nameAr: 'دولة قطر', nameEn: 'Qatar', flag: '🇶🇦', roleAr: 'الوساطة الدبلوماسية النشطة والاستثمارات الإنسانية والتنموية', roleEn: 'Active Diplomatic Mediation & Energy/Humanitarian Finance', budgetBn: 15.0, troopsK: 17 },
      { id: 'kw', nameAr: 'دولة الكويت', nameEn: 'Kuwait', flag: '🇰🇼', roleAr: 'الدبلوماسية الإنسانية والوساطات العربية والصناديق التنموية', roleEn: 'Humanitarian Diplomacy & Arab Development Funding Anchor', budgetBn: 7.0, troopsK: 18 },
      { id: 'om', nameAr: 'سلطنة عمان', nameEn: 'Oman', flag: '🇴🇲', roleAr: 'صانع السلام والوساطة الهادئة وحراسة مدخل الخليج العربي', roleEn: 'Peace Mediator, Quiet Diplomacy & Indian Ocean Gateway', budgetBn: 6.5, troopsK: 43 },
    ],
  },

  opec_plus: {
    id: 'opec_plus',
    code: 'OPEC+',
    nameAr: 'تحالف أوبك بلس للطاقة (OPEC+)',
    nameEn: 'OPEC+ Crude Oil Alliance',
    type: 'economic',
    typeLabelAr: 'تحالف اقتصادي لتنظيم أسواق الطاقة العالمية',
    typeLabelEn: 'Global Energy Market Regulatory Coalition',
    badgeColor: 'border-yellow-500/40 bg-yellow-500/10 text-yellow-400',
    treatyAr: 'إعلان التعاون التاريخي لعام 2016 (Declaration of Cooperation)',
    treatyEn: 'Historic 2016 Declaration of Cooperation (DoC)',
    established: 2016,
    headquartersAr: 'فيينا، النمسا',
    headquartersEn: 'Vienna, Austria',
    secretaryGeneralAr: 'هيثم الغيص (أمين عام أوبك - دولة الكويت)',
    secretaryGeneralEn: 'Haitham Al Ghais (Kuwait)',
    combinedMilitaryBudgetBn: 350.0,
    combinedGdpBn: 12500.0,
    totalActivePersonnelK: 3200,
    nuclearStatesCount: 1, // Russia
    memberCount: 22,
    collectiveDefenseClauseAr:
      'إدارة المعروض: اتفاق سيادي لتنسيق حصص إنتاج النفط الخام بنسبة تتجاوز 40% من الإنتاج العالمي لضمان استقرار الأسواق وعائدات الطاقة.',
    collectiveDefenseClauseEn:
      'Supply Management: Sovereign coordination of crude quotas controlling over 40% of global supply to balance commodity markets.',
    strategicFocusAr: 'حماية أسعار النفط، تنسيق الخفض الطوعي، ومواجهة ضغوط وكالة الطاقة الدولية والاحتياطيات الاستراتيجية الغربية.',
    strategicFocusEn: 'Crude price stabilization, voluntary output cuts, and balancing global hydrocarbon reserves.',
    members: [
      { id: 'sa', nameAr: 'المملكة العربية السعودية', nameEn: 'Saudi Arabia', flag: '🇸🇦', roleAr: 'الزعيم الفعلي للتحالف وأكبر مصدر للنفط عالمياً (المنتج المرجح Swing Producer)', roleEn: 'De-Facto Leader, Global Top Crude Exporter & Swing Producer', budgetBn: 75.0, troopsK: 257 },
      { id: 'ru', nameAr: 'روسيا الاتحادية', nameEn: 'Russia', flag: '🇷🇺', roleAr: 'قائد الدول غير الأعضاء في أوبك وثاني أكبر منتج للنفط في التحالف', roleEn: 'Non-OPEC Co-Leader & 2nd Largest Producer in the Alliance', budgetBn: 140.0, troopsK: 1320 },
      { id: 'ae', nameAr: 'دولة الإمارات العربية المتحدة', nameEn: 'United Arab Emirates', flag: '🇦🇪', roleAr: 'طاقة إنتاجية فائقة تتجاوز 4 ملايين برميل واستثمارات أدنوك العالمية', roleEn: '4M+ bpd Capacity & ADNOC Low-Carbon Hydrocarbon Investments', budgetBn: 23.0, troopsK: 65 },
      { id: 'iq', nameAr: 'جمهورية العراق', nameEn: 'Iraq', flag: '🇮🇶', roleAr: 'ثاني أكبر منتج داخل منظمة أوبك بإنتاج يفوق 4.2 مليون برميل يومياً', roleEn: '2nd Largest Producer within OPEC Core (~4.2M bpd)', budgetBn: 5.2, troopsK: 210 },
      { id: 'kw', nameAr: 'دولة الكويت', nameEn: 'Kuwait', flag: '🇰🇼', roleAr: 'دولة المقر لأمين عام المنظمة واحتياطيات نفطية مؤكدة تتجاوز 100 مليار برميل', roleEn: 'OPEC Secretary-General Home & 100B+ Barrels Reserves', budgetBn: 7.0, troopsK: 18 },
      { id: 'dz', nameAr: 'جمهورية الجزائر', nameEn: 'Algeria', flag: '🇩🇿', roleAr: 'أحد مؤسسي اتفاق الجزائر التاريخي ومورد الغاز والنفط الصحراوي الخفيف', roleEn: 'Algiers Accord Architect & Sahara Blend Quality Crude Supplier', budgetBn: 21.6, troopsK: 312 },
      { id: 'kz', nameAr: 'كازاخستان', nameEn: 'Kazakhstan', flag: '🇰🇿', roleAr: 'عملاق نفط حوض قزوين (حقول تنغيز وكاشاغان) وأحد أهم الشركاء المستقلين', roleEn: 'Caspian Oil Giant (Tengiz & Kashagan) & Key Non-OPEC Partner', budgetBn: 2.8, troopsK: 70 },
    ],
  },

  g7: {
    id: 'g7',
    code: 'G7',
    nameAr: 'مجموعة الدول السبع الصناعية (G7)',
    nameEn: 'Group of Seven Industrialized Democracies',
    type: 'economic',
    typeLabelAr: 'تكتل اقتصادي ومالي وسياسي متقدم',
    typeLabelEn: 'Advanced Economic, Financial & Political Coalition',
    badgeColor: 'border-sky-500/40 bg-sky-500/10 text-sky-400',
    treatyAr: 'إعلانات القمة السنوية المشتركة وتنسيق سياسات البنوك المركزية وسويفت',
    treatyEn: 'Annual Leaders Summit Communiqués & SWIFT / Central Bank Coordination',
    established: 1975,
    headquartersAr: 'رئاسة دورية سنوية بين الدول الأعضاء السبع',
    headquartersEn: 'Rotating Annual Presidency among Member Nations',
    secretaryGeneralAr: 'رئاسة دورية للمجموعة',
    secretaryGeneralEn: 'Rotating Presidency',
    combinedMilitaryBudgetBn: 1150.0,
    combinedGdpBn: 46200.0,
    totalActivePersonnelK: 2280,
    nuclearStatesCount: 3, // US, UK, France
    memberCount: 7,
    collectiveDefenseClauseAr:
      'التنسيق المالي والجيوسياسي: فرض العقوبات الاقتصادية المشتركة، وضع سقوف لأسعار النفط، وتأمين سلاسل إمداد الرقائق والتكنولوجيا.',
    collectiveDefenseClauseEn:
      'Economic Coordination: Joint financial sanctions enforcement, price caps on commodities, and semiconductor supply chain security.',
    strategicFocusAr: 'التحكم بنظام المعاملات المالية الدولية، قيادة سياسات الذكاء الاصطناعي، ومواجهة النفوذ الاقتصادي الصيني والروسي.',
    strategicFocusEn: 'Governing global financial architecture, AI regulatory frameworks, and balancing Sino-Russian influence.',
    members: [
      { id: 'us', nameAr: 'الولايات المتحدة', nameEn: 'United States', flag: '🇺🇸', roleAr: 'الاقتصاد الأضخم، عملة الاحتياط العالمية (الدولار) والقيادة الجيوسياسية للمجموعة', roleEn: 'Dominant Economy, Global Reserve Currency Issuer & Leadership', budgetBn: 886.0, troopsK: 1328 },
      { id: 'jp', nameAr: 'اليابان', nameEn: 'Japan', flag: '🇯🇵', roleAr: 'الممثل الآسيوي الوحيد في المجموعة، ريادة التكنولوجيا وأكبر دائن خارجي في العالم', roleEn: 'Sole Asian Member, High-Tech Core & World Top Net Creditor', budgetBn: 52.0, troopsK: 247 },
      { id: 'de', nameAr: 'ألمانيا', nameEn: 'Germany', flag: '🇩🇪', roleAr: 'أكبر اقتصاد في أوروبا، الصناعات الهندسية المتقدمة والتجارة الفائقة', roleEn: 'Europe Largest Economy & Advanced Precision Industrial Base', budgetBn: 56.0, troopsK: 181 },
      { id: 'gb', nameAr: 'المملكة المتحدة', nameEn: 'United Kingdom', flag: '🇬🇧', roleAr: 'المركز المالي العالمي في لندن والدبلوماسية الأطلسية والردع النووي', roleEn: 'City of London Financial Hub & Strategic Atlantic Partner', budgetBn: 68.5, troopsK: 185 },
      { id: 'fr', nameAr: 'فرنسا', nameEn: 'France', flag: '🇫🇷', roleAr: 'القوة النووية والدبلوماسية الأوروبية المستقلة ومشاريع الفضاء والطاقة', roleEn: 'European Nuclear Power, Sovereign Diplomacy & Aerospace Core', budgetBn: 50.0, troopsK: 205 },
      { id: 'it', nameAr: 'إيطاليا', nameEn: 'Italy', flag: '🇮🇹', roleAr: 'القوة التصنيعية المتوسطية وقيادة مبادرات التنمية عبر خطة ماتي', roleEn: 'Mediterranean Manufacturing Powerhouse & Mattei Africa Plan', budgetBn: 32.0, troopsK: 165 },
      { id: 'ca', nameAr: 'كندا', nameEn: 'Canada', flag: '🇨🇦', roleAr: 'المعادن الاستراتيجية الحيوية وموارد الطاقة والتكامل الاقتصادي الشمال أمريكي', roleEn: 'Critical Minerals, Energy Abundance & USMCA Integration', budgetBn: 27.0, troopsK: 68 },
    ],
  },

  quad: {
    id: 'quad',
    code: 'QUAD',
    nameAr: 'الحوار الأمني الرباعي (كواد - QUAD)',
    nameEn: 'Quadrilateral Security Dialogue',
    type: 'military',
    typeLabelAr: 'تحالف بحري وأمني في المحيطين الهندي والهادئ',
    typeLabelEn: 'Indo-Pacific Maritime & Security Coalition',
    badgeColor: 'border-teal-500/40 bg-teal-500/10 text-teal-400',
    treatyAr: 'مبادرة ممرات الملاحة الحرة والمفتوحة في المحيطين الهندي والهادئ (FOIP)',
    treatyEn: 'Free and Open Indo-Pacific (FOIP) Joint Security Framework',
    established: 2007,
    headquartersAr: 'قمم سنوية وتدريبات مالابار البحرية المشتركة (Malabar Exercises)',
    headquartersEn: 'Annual Leaders Summit & Malabar Joint Naval Exercises',
    secretaryGeneralAr: 'قيادة مشتركة بين قادة الدول الأربع',
    secretaryGeneralEn: 'Quad Leaders Steering Group',
    combinedMilitaryBudgetBn: 1050.0,
    combinedGdpBn: 36500.0,
    totalActivePersonnelK: 3080,
    nuclearStatesCount: 2, // US, India
    memberCount: 4,
    collectiveDefenseClauseAr:
      'الأمن البحري: تأمين حرية الملاحة البحرية والجوية، مراقبة المجال البحري (IPMDA)، ومواجهة الهيمنة في مضائق آسيا.',
    collectiveDefenseClauseEn:
      'Maritime Security: Freedom of navigation, IPMDA maritime domain awareness, and cyber resilience across the Indo-Pacific.',
    strategicFocusAr: 'ردع التوسع الصيني في بحر الصين الجنوبي والمحيط الهندي، وتأمين سلاسل توريد الرقائق والكابلات البحرية.',
    strategicFocusEn: 'Deterring South China Sea expansionism, securing subsea cables and critical technology chains.',
    members: [
      { id: 'us', nameAr: 'الولايات المتحدة', nameEn: 'United States', flag: '🇺🇸', roleAr: 'الأسطول السابع في المحيط الهادئ والمظلة الدفاعية والنووية المشتركة', roleEn: 'US 7th Fleet Naval Dominance & Nuclear Extended Deterrence', budgetBn: 886.0, troopsK: 1328 },
      { id: 'in', nameAr: 'جمهورية الهند', nameEn: 'India', flag: '🇮🇳', roleAr: 'السيطرة على ممرات المحيط الهندي وقاعدة جزر أندامان ونيكوبار الاستراتيجية', roleEn: 'Indian Ocean Sea Lines of Communication Dominance & Naval Fleet', budgetBn: 81.4, troopsK: 1450 },
      { id: 'jp', nameAr: 'اليابان', nameEn: 'Japan', flag: '🇯🇵', roleAr: 'قوات الدفاع الذاتي البحرية المتطورة ومراقبة بحر الصين الشرقي والردع الصاروخي', roleEn: 'Advanced JMSDF Destroyer Fleets, Aegis Destroyers & East China Sea Watch', budgetBn: 52.0, troopsK: 247 },
      { id: 'au', nameAr: 'أستراليا', nameEn: 'Australia', flag: '🇦🇺', roleAr: 'العمق الجغرافي الجنوبي وتأمين الممرات البحرية بين المحيطين الهندي والهادئ', roleEn: 'Southern Oceanic Anchor & Malacca/Sunda Strait Flank Security', budgetBn: 31.0, troopsK: 58 },
    ],
  },
};

/**
 * خريطة انتماءات الدول للتحالفات العسكرية والتكتلات الاقتصادية
 * Country-to-Alliances Membership Database
 */
export const COUNTRY_ALLIANCES_REGISTRY = {
  // المملكة العربية السعودية
  sa: {
    countryId: 'sa',
    nameAr: 'المملكة العربية السعودية',
    nameEn: 'Saudi Arabia',
    flag: '🇸🇦',
    alliances: ['gcc', 'brics', 'opec_plus', 'arab_league'],
    customRoles: {
      gcc: { ar: 'الدولة القائدة ومقر الأمانة العامة وقيادة منظومة درع الجزيرة والدفاع الجوي الموحد', en: 'Anchor State & Joint Peninsula Shield Air Defense Lead' },
      brics: { ar: 'عملاق الطاقة العالمي وأكبر اقتصاد عربي وصاحبة أضخم صندوق ثروة سيادي مشارك', en: 'Global Energy Anchor & Largest Arab Economy in the Bloc' },
      opec_plus: { ar: 'الزعيم الفعلي لتحالف أوبك بلس والمنتج المرجح (Swing Producer) الأكبر عالمياً', en: 'De-Facto Leader & World Premier Swing Oil Producer' },
      arab_league: { ar: 'العمق المالي والدبلوماسي العربي وقيادة المبادرات التنموية والاستثمارية', en: 'Foremost Arab Financial & Diplomatic Weight' },
    },
  },

  // جمهورية مصر العربية
  eg: {
    countryId: 'eg',
    nameAr: 'جمهورية مصر العربية',
    nameEn: 'Egypt',
    flag: '🇪🇬',
    alliances: ['arab_league', 'brics'],
    customRoles: {
      arab_league: { ar: 'الدولة المؤسسة، مقر الأمانة العامة الدائم وأكبر قوة بشرية وعسكرية مقاتلة في العالم العربي', en: 'Founding Nation, Permanent HQ Host & Largest Arab Military Force' },
      brics: { ar: 'حراسة شريان قناة السويس وبوابة التجارة بين آسيا وأفريقيا وأوروبا', en: 'Suez Canal Strategic Gateway & African-Arab Demographic Pillar' },
    },
  },

  // الولايات المتحدة الأمريكية
  us: {
    countryId: 'us',
    nameAr: 'الولايات المتحدة الأمريكية',
    nameEn: 'United States',
    flag: '🇺🇸',
    alliances: ['nato', 'aukus', 'g7', 'quad'],
    customRoles: {
      nato: { ar: 'القوة القائدة، القيادة العملياتية العليا (SACEUR) والمظلة النووية الاستراتيجية للحلف', en: 'Supreme Military Commander (SACEUR) & Strategic Nuclear Shield' },
      aukus: { ar: 'تزويد الحلفاء بتكنولوجيا مفاعلات الغواصات النووية وتفوق أسلحة الأعماق والفرط صوتية', en: 'SSN Submarine Nuclear Propulsion Tech & Hypersonic Lead' },
      g7: { ar: 'أكبر اقتصاد عالمي، مصدر عملة الاحتياط الدولية (الدولار) والتحكم بسويفت', en: 'World Foremost Economy & Reserve Currency Issuer' },
      quad: { ar: 'قيادة الأسطول السابع وتأمين استراتيجية المحيطين الهندي والهادئ الحرة والمفتوحة', en: '7th Fleet Dominance & Free and Open Indo-Pacific Defense' },
    },
  },

  // جمهورية الصين الشعبية
  cn: {
    countryId: 'cn',
    nameAr: 'جمهورية الصين الشعبية',
    nameEn: 'China',
    flag: '🇨🇳',
    alliances: ['brics', 'sco'],
    customRoles: {
      brics: { ar: 'المحرك الصناعي والمالي الأول، مؤسس بنك التنمية (NDB) ومبادرة الحزام والطريق', en: 'Primary Industrial Superpower, NDB Founder & Belt and Road Lead' },
      sco: { ar: 'مقر الأمانة العامة، الممول الأكبر لمشاريع الربط الأوراسي وقوة التصنيع الدفاعي', en: 'Secretariat Host, Eurasian Infrastructure Lead & Defense Giant' },
    },
  },

  // روسيا الاتحادية
  ru: {
    countryId: 'ru',
    nameAr: 'روسيا الاتحادية',
    nameEn: 'Russia',
    flag: '🇷🇺',
    alliances: ['brics', 'sco', 'opec_plus'],
    customRoles: {
      brics: { ar: 'أضخم ترسانة نووية استراتيجية ومورد الغاز والمعادن الحيوية والسلع الزراعية', en: 'Largest Nuclear Arsenal & Strategic Energy/Mineral Supplier' },
      sco: { ar: 'الضامن الأمني والعسكري الرئيسي في آسيا الوسطى وقوات حفظ السلام الأوراسية', en: 'Primary Security Guarantor in Central Asia & Peacekeeping Lead' },
      opec_plus: { ar: 'قائد التكتل المستقل غير الأعضاء في أوبك وثاني أكبر مصدر للنفط الخام', en: 'Co-Leader of Non-OPEC Producers & Global Energy Pillar' },
    },
  },

  // دولة الإمارات العربية المتحدة
  ae: {
    countryId: 'ae',
    nameAr: 'دولة الإمارات العربية المتحدة',
    nameEn: 'United Arab Emirates',
    flag: '🇦🇪',
    alliances: ['gcc', 'brics', 'opec_plus', 'arab_league'],
    customRoles: {
      gcc: { ar: 'القوة التكنولوجية والاستثمارية والصناعات الدفاعية المتقدمة (EDGE) وحماية الملاحة', en: 'Tech, Advanced Defense (EDGE) & Regional Trade Hub' },
      brics: { ar: 'المركز اللوجستي والمالي العالمي الأول لتجارة الذهب والسلع وإعادة التصدير', en: 'Global Logistics, Gold & Financial Trading Hub for the Bloc' },
      opec_plus: { ar: 'طاقة إنتاجية مستدامة تفوق 4 ملايين برميل واستثمارات عالمية رائدة للطاقة النظيفة', en: '4M+ bpd Sustainable Capacity & Global Energy Transition Lead' },
      arab_league: { ar: 'المركز الاقتصادي والتجاري العربي الأول والمساهم الأكبر في المبادرات الإنسانية', en: 'Top Arab Commercial Engine & Global Humanitarian Donor' },
    },
  },

  // المملكة المتحدة
  gb: {
    countryId: 'gb',
    nameAr: 'المملكة المتحدة',
    nameEn: 'United Kingdom',
    flag: '🇬🇧',
    alliances: ['nato', 'aukus', 'g7'],
    customRoles: {
      nato: { ar: 'قوة ردع نووية بحرية (غواصات فانغارد/تريدنت) وقيادة أسطول شمال الأطلسي', en: 'Nuclear Submarine Deterrence (Trident) & North Atlantic Lead' },
      aukus: { ar: 'المشاركة في تصميم وتطوير أحواض غواصات SSN-AUKUS وأنظمة القتال السيبرانية', en: 'SSN-AUKUS Hull Architecture & Joint Cyber Defense Systems' },
      g7: { ar: 'المركز المالي العالمي في مدينة لندن والتحالف المصرفي والاستخباراتي الدولي', en: 'City of London Global Finance & Strategic Intelligence' },
    },
  },

  // جمهورية ألمانيا الاتحادية
  de: {
    countryId: 'de',
    nameAr: 'جمهورية ألمانيا الاتحادية',
    nameEn: 'Germany',
    flag: '🇩🇪',
    alliances: ['nato', 'eu', 'g7'],
    customRoles: {
      nato: { ar: 'المركز اللوجستي الأوروبي المشترك وقيادة لواء الردع الأمامي الدائم في ليتوانيا', en: 'Central European Logistics Core & Permanent Lithuania Brigade' },
      eu: { ar: 'المحرك الاقتصادي والصناعي الأول للاتحاد الأوروبي والمساهم الأكبر في الميزانية', en: 'Economic & Industrial Engine, Largest Contributor to EU Budget' },
      g7: { ar: 'القوة الصناعية والتصديرية الرائدة في أوروبا والهندسة الدقيقة', en: 'Leading European Export Machine & Precision Engineering Core' },
    },
  },

  // الجمهورية الفرنسية
  fr: {
    countryId: 'fr',
    nameAr: 'الجمهورية الفرنسية',
    nameEn: 'France',
    flag: '🇫🇷',
    alliances: ['nato', 'eu', 'g7'],
    customRoles: {
      nato: { ar: 'الردع النووي المستقل (طائرات رافال وغواصات تريومفانت) والقوات البحرية للمحيطات', en: 'Independent Nuclear Strike Force (Rafale & Triomphant SSBN)' },
      eu: { ar: 'القوة النووية الوحيدة في الاتحاد، مقعد دائم بمجلس الأمن وقيادة السياسة الاستراتيجية', en: 'Sole EU Nuclear Power, Permanent UNSC Member & Strategic Autonomy Lead' },
      g7: { ar: 'الدبلوماسية العالمية المستقلة وصناعات الفضاء والطيران (إيرباص وداسو)', en: 'Independent Diplomacy, Aerospace & High-Tech Defense (Airbus)' },
    },
  },

  // اليابان
  jp: {
    countryId: 'jp',
    nameAr: 'اليابان',
    nameEn: 'Japan',
    flag: '🇯🇵',
    alliances: ['g7', 'quad'],
    customRoles: {
      g7: { ar: 'الممثل الآسيوي الوحيد في المجموعة، ريادة التكنولوجيا الفائقة وأكبر دائن خارجي عالمياً', en: 'Sole Asian G7 Power, High-Tech Core & World Top Net Creditor' },
      quad: { ar: 'قوات الدفاع الذاتي البحرية التكتيكية، رادارات إيجيس وحراسة بحر الصين الشرقي', en: 'JMSDF Advanced Destroyer Fleet & East China Sea Surveillance' },
    },
  },

  // جمهورية الهند
  in: {
    countryId: 'in',
    nameAr: 'جمهورية الهند',
    nameEn: 'India',
    flag: '🇮🇳',
    alliances: ['brics', 'sco', 'quad'],
    customRoles: {
      brics: { ar: 'أكبر كتلة سكانية في العالم، جسر الجنوب العالمي وأسرع الاقتصادات الكبرى نمواً', en: 'Demographic Giant, Fastest Growing Economy & Global South Anchor' },
      sco: { ar: 'الموازنة الاستراتيجية في أوراسيا ومكافحة الإرهاب وتبادل المعلومات الاستخبارية', en: 'Strategic Eurasian Balancer & Regional Counter-Terrorism' },
      quad: { ar: 'السيطرة التامة على ممرات الملاحة في المحيط الهندي وقاعدة جزر أندامان الحيوية', en: 'Indian Ocean Maritime Domain Lead & Andaman Islands Base' },
    },
  },

  // جمهورية البرازيل الاتحادية
  br: {
    countryId: 'br',
    nameAr: 'جمهورية البرازيل الاتحادية',
    nameEn: 'Brazil',
    flag: '🇧🇷',
    alliances: ['brics'],
    customRoles: {
      brics: { ar: 'قوة أمريكا الجنوبية الرائدة، العملاق الزراعي والأمن الغذائي العالمي وتجارة السلع', en: 'South American Leader, Agricultural Giant & Global Food Security' },
    },
  },

  // جمهورية جنوب أفريقيا
  za: {
    countryId: 'za',
    nameAr: 'جمهورية جنوب أفريقيا',
    nameEn: 'South Africa',
    flag: '🇿🇦',
    alliances: ['brics'],
    customRoles: {
      brics: { ar: 'بوابة القارة الأفريقية الدبلوماسية وأكبر قاعدة لتعدين البلاتين والمعادن الحرجة', en: 'African Diplomatic Gateway & Critical PGM Minerals Supply' },
    },
  },

  // الجمهورية التركية
  tr: {
    countryId: 'tr',
    nameAr: 'الجمهورية التركية',
    nameEn: 'Turkey',
    flag: '🇹🇷',
    alliances: ['nato'],
    customRoles: {
      nato: { ar: 'ثاني أكبر جيش نظامي في الحلف، حراسة مضائق البوسفور والدردنيل (مونترو) والجناح الجنوبي', roleEn: '2nd Largest Army in NATO, Montreux Straits Gatekeeper & Southern Flank' },
    },
  },

  // الجمهورية الإسلامية الإيرانية
  ir: {
    countryId: 'ir',
    nameAr: 'الجمهورية الإسلامية الإيرانية',
    nameEn: 'Iran',
    flag: '🇮🇷',
    alliances: ['brics', 'sco'],
    customRoles: {
      brics: { ar: 'احتياطيات غاز ونفط هائلة والسيطرة على مضيق هرمز وممرات التجارة بين الشمال والجنوب', en: 'Massive Gas/Oil Reserves & North-South International Transit Corridor' },
      sco: { ar: 'الربط الجيوسياسي بين آسيا الوسطى والشرق الأوسط والتنسيق الأمني الأوراسي', en: 'Geopolitical Link between Central Asia & Middle East' },
    },
  },

  // جمهورية الجزائر الديمقراطية الشعبية
  dz: {
    countryId: 'dz',
    nameAr: 'جمهورية الجزائر الديمقراطية الشعبية',
    nameEn: 'Algeria',
    flag: '🇩🇿',
    alliances: ['arab_league', 'opec_plus'],
    customRoles: {
      arab_league: { ar: 'القوة العسكرية الكبرى في المغرب العربي، حماية الحدود ودعم قضايا التحرر العربي', en: 'Maghreb Military Powerhouse & Sovereign Pan-Arab Anchor' },
      opec_plus: { ar: 'مهندس اتفاق الجزائر التاريخي ومورد الغاز والنفط الصحراوي الخفيف لأوروبا', en: 'Algiers Accord Architect & Sahara Blend European Gas Supplier' },
    },
  },

  // دولة قطر
  qa: {
    countryId: 'qa',
    nameAr: 'دولة قطر',
    nameEn: 'Qatar',
    flag: '🇶🇦',
    alliances: ['gcc', 'arab_league'],
    customRoles: {
      gcc: { ar: 'عملاق الغاز الطبيعي المسال، مقر قاعدة العديد الجوية ورائد الوساطات الدبلوماسية العالمية', en: 'Global LNG Superpower, Al-Udeid Host & Premier Diplomatic Mediator' },
      arab_league: { ar: 'الوساطة الدبلوماسية النشطة في النزاعات والاستثمارات الإنسانية والتنموية الكبرى', en: 'Active Conflict Mediation & High-Impact Humanitarian Investments' },
    },
  },

  // دولة الكويت
  kw: {
    countryId: 'kw',
    nameAr: 'دولة الكويت',
    nameEn: 'Kuwait',
    flag: '🇰🇼',
    alliances: ['gcc', 'opec_plus', 'arab_league'],
    customRoles: {
      gcc: { ar: 'احتياطيات نفطية ضخمة وصندوق سيادي هو الأقدم في العالم (KIA) والدور التوافقي', en: 'Deep Oil Wealth, Oldest Sovereign Fund (KIA) & Conciliatory Diplomacy' },
      opec_plus: { ar: 'دولة أمين عام المنظمة واحتياطيات تفوق 100 مليار برميل واستقرار أسواق الطاقة', en: 'OPEC Secretary-General Nation & 100B+ Barrels Reserve Anchor' },
      arab_league: { ar: 'الدبلوماسية التوافقية والإنسانية ومشاريع الصندوق الكويتي للتنمية العربية', en: 'Humanitarian Diplomacy & Kuwait Arab Development Fund Lead' },
    },
  },

  // المملكة المغربية
  ma: {
    countryId: 'ma',
    nameAr: 'المملكة المغربية',
    nameEn: 'Morocco',
    flag: '🇲🇦',
    alliances: ['arab_league'],
    customRoles: {
      arab_league: { ar: 'حراسة البوابة الغربية ومضيق جبل طارق، عملاق الفوسفات والأمن الغذائي العالمي', en: 'Western Gibraltar Gatekeeper & Global Phosphate Food Security Giant' },
    },
  },

  // جمهورية العراق
  iq: {
    countryId: 'iq',
    nameAr: 'جمهورية العراق',
    nameEn: 'Iraq',
    flag: '🇮🇶',
    alliances: ['arab_league', 'opec_plus'],
    customRoles: {
      arab_league: { ar: 'دولة مؤسسة، ثاني أكبر منتج نفطي عربي وركيزة التوازن المشرقي الإقليمي', en: 'Founding Member, 2nd Largest Arab Oil Producer & Regional Balancer' },
      opec_plus: { ar: 'ثاني أكبر منتج للنفط داخل منظمة أوبك بطاقة تتجاوز 4.5 مليون برميل يومياً', en: '2nd Largest OPEC Producer with 4.5M+ bpd Capacity' },
    },
  },

  // المملكة الأردنية الهاشمية
  jo: {
    countryId: 'jo',
    nameAr: 'المملكة الأردنية الهاشمية',
    nameEn: 'Jordan',
    flag: '🇯🇴',
    alliances: ['arab_league'],
    customRoles: {
      arab_league: { ar: 'الوصاية الهاشمية التاريخية على المقدسات وركيزة الاستقرار والأمن الإقليمي في المشرق', en: 'Hashemite Custodianship of Holy Sites & Levantine Security Anchor' },
    },
  },
};

/**
 * دالة استرجاع تحالفات وتكتلات الدولة المختارة (العسكرية والاقتصادية)
 */
export function getCountryAlliancesData(countryId) {
  if (!countryId) return null;
  const normalized = countryId.toLowerCase().trim();

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
    syria: 'sy',
    lebanon: 'lb',
    kuwait: 'kw',
    jordan: 'jo',
    russia: 'ru',
    china: 'cn',
    germany: 'de',
    france: 'fr',
    italy: 'it',
    spain: 'es',
    uk: 'gb',
    britain: 'gb',
    japan: 'jp',
    india: 'in',
    brazil: 'br',
    southafrica: 'za',
    algeria: 'dz',
    morocco: 'ma',
    iraq: 'iq',
    iran: 'ir',
    qatar: 'qa',
  };

  const key = ALIASES[normalized] || normalized;
  const registryEntry = COUNTRY_ALLIANCES_REGISTRY[key];

  // إذا كانت الدولة مسجلة رسمياً في السجل
  if (registryEntry) {
    const populatedAlliances = registryEntry.alliances
      .map((allianceId) => {
        const alliance = GLOBAL_ALLIANCES_DB[allianceId];
        if (!alliance) return null;

        const customRole = registryEntry.customRoles?.[allianceId];

        // تعيين أعضاء التحالف مع توضيح الدولة المختارة
        const membersWithHighlight = alliance.members.map((m) => {
          const isSelected = m.id === key;
          return {
            ...m,
            isSelected,
            roleAr: isSelected && customRole?.ar ? customRole.ar : m.roleAr,
            roleEn: isSelected && customRole?.en ? customRole.en : m.roleEn,
          };
        });

        return {
          ...alliance,
          countryRoleAr: customRole?.ar || 'دولة عضو فاعل ومشارك في القرارات السيادية للتحالف',
          countryRoleEn: customRole?.en || 'Active participating member state with full voting rights',
          members: membersWithHighlight,
        };
      })
      .filter(Boolean);

    const militaryAlliances = populatedAlliances.filter((a) => a.type === 'military' || a.type === 'geoeconomic');
    const economicAlliances = populatedAlliances.filter((a) => a.type === 'economic' || a.type === 'geoeconomic');

    // تجميع إجمالي الدول الشريكة الفريدة
    const uniqueAlliedCountries = new Set();
    populatedAlliances.forEach((a) => {
      a.members.forEach((m) => {
        if (m.id !== key) uniqueAlliedCountries.add(m.id);
      });
    });

    return {
      countryId: key,
      countryNameAr: registryEntry.nameAr,
      countryNameEn: registryEntry.nameEn,
      flag: registryEntry.flag,
      totalAlliancesCount: populatedAlliances.length,
      militaryAlliancesCount: militaryAlliances.length,
      economicAlliancesCount: economicAlliances.length,
      totalAlliedNationsCount: uniqueAlliedCountries.size,
      alliances: populatedAlliances,
      militaryAlliances,
      economicAlliances,
    };
  }

  // في حال كانت دولة أخرى غير مسجلة في الفهرس المباشر، توليد شراكات دبلوماسية إقليمية واقعية
  const defaultAlliance = {
    id: 'bilateral_partnerships',
    code: 'DIPLOMATIC',
    nameAr: 'معاهدات التعاون والشراكات الإقليمية والدولية',
    nameEn: 'Regional & International Strategic Partnerships',
    type: 'geoeconomic',
    typeLabelAr: 'شراكات واتفاقيات تعاون ثنائية',
    typeLabelEn: 'Bilateral & Regional Cooperation Agreements',
    badgeColor: 'border-slate-500/40 bg-slate-500/10 text-slate-300',
    treatyAr: 'مواثيق الصداقة والتعاون التجاري والأمني تحت مظلة الأمم المتحدة',
    treatyEn: 'Bilateral Trade, Security & UN Framework Agreements',
    established: 1945,
    headquartersAr: 'العواصم الشريكة والأمم المتحدة',
    headquartersEn: 'Partner Capitals & United Nations',
    secretaryGeneralAr: 'لجان وزارية مشتركة',
    secretaryGeneralEn: 'Joint Ministerial Bilateral Commissions',
    combinedMilitaryBudgetBn: 85.0,
    combinedGdpBn: 1200.0,
    totalActivePersonnelK: 350,
    nuclearStatesCount: 0,
    memberCount: 5,
    collectiveDefenseClauseAr:
      'معاهدات التعاون: بروتوكولات التنسيق الأمني ومكافحة الإرهاب، التبادل التجاري وتسهيل الاستثمارات الثنائية.',
    collectiveDefenseClauseEn:
      'Cooperation Treaties: Security coordination protocols, trade facilitation and cross-border investment agreements.',
    strategicFocusAr: 'تعزيز الأمن الحدودي، جذب الاستثمارات الأجنبية، وتنسيق السياسات الجمركية.',
    strategicFocusEn: 'Border security, foreign direct investment, and trade facilitation.',
    countryRoleAr: 'دولة ذات سيادة ترتبط باتفاقيات تعاون إقليمي وتجاري متوازنة',
    countryRoleEn: 'Sovereign nation with balanced regional cooperation and trade treaties',
    members: [
      { id: key, nameAr: 'الدولة المختارة', nameEn: 'Selected Nation', flag: '🌐', roleAr: 'الدولة محور الرصد والتحليل', roleEn: 'Focal Member State', isSelected: true },
      { id: 'partner_1', nameAr: 'شركاء الجوار الإقليمي', nameEn: 'Regional Neighbors', flag: '🤝', roleAr: 'تنسيق أمني حدودي وتبادل تجاري', roleEn: 'Border Security & Commercial Trade' },
      { id: 'partner_2', nameAr: 'الشركاء الاقتصاديون الدوليون', nameEn: 'Global Trade Partners', flag: '🌍', roleAr: 'استثمارات تنموية ومشاريع طاقة وبنية تحتية', roleEn: 'Infrastructure & Energy Investment' },
    ],
  };

  return {
    countryId: key,
    countryNameAr: 'الدولة المختارة',
    countryNameEn: 'Selected Nation',
    flag: '🌐',
    totalAlliancesCount: 1,
    militaryAlliancesCount: 1,
    economicAlliancesCount: 1,
    totalAlliedNationsCount: 2,
    alliances: [defaultAlliance],
    militaryAlliances: [defaultAlliance],
    economicAlliances: [defaultAlliance],
  };
}
