/**
 * قاعدة بيانات العلاقات الدبلوماسية، التوترات الدولية، تحولات التحالفات، والتحولات الداخلية السياسية حتى 2026
 * Bilateral Diplomacy, Geopolitical Tensions, Alliance Evolutions & Internal Political Transitions
 */

export const COUNTRY_DIPLOMACY_TENSIONS_DB = {
  // المملكة العربية السعودية
  sa: {
    tensions: [
      {
        countryAr: 'إيران (تطبيع حذر بعد عقود تنافس)',
        countryEn: 'Iran (Cautious detente post-Beijing Accord)',
        flag: '🇮🇷',
        riskLevel: 'متوسط تحت المراقبة',
        riskTone: 'amber',
        issueAr: 'التنافس الإقليمي التاريخي على النفوذ في الخليج واليمن وسوريا، مع استمرار العمل باتفاق بكين 2023 لخفض التصعيد وحماية أمن الملاحة.',
        issueEn: 'Historical regional influence rivalry; active Beijing-brokered non-aggression and diplomatic channels maintain de-escalation.',
      },
      {
        countryAr: 'إسرائيل (المسار الدبلوماسي المشروط)',
        countryEn: 'Israel (Conditional Diplomacy)',
        flag: '🇮🇱',
        riskLevel: 'توتر دبلوماسي وسياسي',
        riskTone: 'rose',
        issueAr: 'التمسك السعودي الحاسم بشرط إقامة الدولة الفلسطينية المستقلة على حدود 1967 وعاصمتها القدس الشرقية كشرط مسبق لأي تطبيع، ورفض الحرب في غزة.',
        issueEn: 'Firm insistence on sovereign Palestinian statehood prior to normalization, vocally condemning military campaigns in Gaza.',
      },
      {
        countryAr: 'جماعة أنصار الله الحوثيين (اليمن)',
        countryEn: 'Houthi Movement (Yemen)',
        flag: '🇾🇪',
        riskLevel: 'حذر أمني استراتيجي',
        riskTone: 'amber',
        issueAr: 'تثبيت مسار الهدنة والمفاوضات السياسية اليمنية الشاملة مع الحفاظ على جاهزية الدفاع الجوي لحماية المنشآت النفطية والممرات البحرية في البحر الأحمر.',
        issueEn: 'Consolidating Yemeni political peace roadmap while maintaining multi-tier air defense over southern energy hubs.',
      },
    ],
    allianceEvolution: [
      { year: 1945, titleAr: 'لقاء الملك عبد العزيز والرئيس روزفلت على متن كوينسي', titleEn: 'Quincy Agreement with President Roosevelt', descAr: 'تدشين المعادلة التاريخية الاستراتيجية: النفط مقابل الأمن بين الرياض وواشنطن.', descEn: 'Historic strategic foundation: security cooperation in exchange for stable energy supply.' },
      { year: 1981, titleAr: 'تأسيس مجلس التعاون لدول الخليج العربية (الرياض)', titleEn: 'Founding of the Gulf Cooperation Council (GCC)', descAr: 'إنشاء التكتل الخليجي الأمني والاقتصادي الموحد لمواجهة تداعيات الثورة الإيرانية وحرب الخليج.', descEn: 'Establishing unified GCC collective defense and economic integration framework.' },
      { year: 2015, titleAr: 'إطلاق التحالف الإسلامي العسكري لمحاربة الإرهاب', titleEn: 'Launch of Islamic Military Counter Terrorism Coalition', descAr: 'قيادة تكتل إسلامي يضم أكثر من 40 دولة للتنسيق الاستخباري ومكافحة التطرف.', descEn: 'Pan-Islamic 40+ nation defense coalition coordinated from Riyadh.' },
      { year: 2023, titleAr: 'اتفاق بكين ورعاية التوازن الدبلوماسي مع الصين', titleEn: 'Beijing Trilateral Rapprochement', descAr: 'استعادة العلاقات الدبلوماسية مع طهران برعاية صينية وبناء سياسة خارجية متعددة الأقطاب.', descEn: 'Restoring diplomatic ties with Tehran, demonstrating strategic multipolar balance.' },
      { year: 2024, titleAr: 'الانضمام التاريخي لمجموعة بريكس+ (BRICS+)', titleEn: 'Official Accession to BRICS+', descAr: 'توسيع الشراكات مع القوى الصاعدة في آسيا وأفريقيا وأمريكا اللاتينية دون التخلي عن الشراكة الغربية.', descEn: 'Formal entry into expanded BRICS+ cementing status as pivotal global bridge power.' },
      { year: 2026, titleAr: 'قيادة التهدئة الإقليمية وشراكات الدفاع المتطورة', titleEn: 'Regional Ceasefire Leadership & Advanced Defense Accords', descAr: 'ترسيخ المبادرات الدبلوماسية لوقف إطلاق النار وتوقيع معاهدات دفاعية تقنية ثنائية جديدة.', descEn: 'Leading diplomatic stabilization efforts and next-generation defense technology accords.' },
    ],
    internalPoliticalShifts: [
      { year: 1932, eventAr: 'إعلان توحيد المملكة العربية السعودية تحت راية الملك عبد العزيز بن عبد الرحمن آل سعود.', eventEn: 'Formal proclamation of the unified Kingdom of Saudi Arabia under King Abdulaziz.' },
      { year: 1992, eventAr: 'إصدار النظام الأساسي للحكم ونظام مجلس الشورى ونظام المناطق كوثائق دستورية رئيسية.', eventEn: 'Promulgation of the Basic Law of Governance and Consultative Assembly Law.' },
      { year: 2015, eventAr: 'تولي خادم الحرمين الشريفين الملك سلمان بن عبد العزيز مقاليد الحكم وبداية حقبة التحول الكبرى.', eventEn: 'Accession of King Salman bin Abdulaziz inaugurating comprehensive modernization.' },
      { year: 2016, eventAr: 'إطلاق "رؤية السعودية 2030" بقيادة ولي العهد الأمير محمد بن سلمان لتنويع الاقتصاد وتمكين الشباب والمرأة.', eventEn: 'Crown Prince Mohammed bin Salman launches Saudi Vision 2030 economic and societal blueprint.' },
      { year: 2017, eventAr: 'إعادة هيكلة جهاز أمن الدولة ومكافحة الفساد وإصلاحات اجتماعية وثقافية جذرية.', eventEn: 'Restructuring of State Security Presidency and anti-corruption drive.' },
      { year: 2026, eventAr: 'اكتمال المراحل الحيوية لمشاريع رؤية 2030 وتسجيل قفزات تاريخية في مساهمة القطاع غير النفطي وصناعة السياحة والترفيه.', eventEn: 'Milestone completion of major giga-projects with non-oil revenue hitting historic highs.' },
    ],
  },

  // جمهورية مصر العربية
  eg: {
    tensions: [
      {
        countryAr: 'إثيوبيا (أزمة سد النهضة والأمن المائي)',
        countryEn: 'Ethiopia (Grand Ethiopian Renaissance Dam - GERD)',
        flag: '🇪🇹',
        riskLevel: 'توتر استراتيجي دائم',
        riskTone: 'rose',
        issueAr: 'النزاع الوجودي حول ملء وتشغيل سد النهضة الإثيوبي دون اتفاق قانوني ملزم يحمي حصة مصر التاريخية من مياه النيل (55.5 مليار م³)، مع توترات إضافية في الصومال والقرن الأفريقي.',
        issueEn: 'Existential dispute over unilateral filling of GERD without legally binding pact protecting Nile water share, compounded by Horn of Africa friction.',
      },
      {
        countryAr: 'إسرائيل (محور فيلادلفيا والأمن القومي لسيناء)',
        countryEn: 'Israel (Philadelphi Corridor & Gaza Frontier)',
        flag: '🇮🇱',
        riskLevel: 'احتقان أمني حدودي حاد',
        riskTone: 'rose',
        issueAr: 'الرفض القاطع لأي تواجد عسكري إسرائيلي في ممر فيلادلفيا الحدودي، وإحباط أي مخطط لتهجير الفلسطينيين قسرياً إلى شبه جزيرة سيناء مع التمسك بمعاهدة السلام.',
        issueEn: 'Fierce rejection of IDF deployment in Philadelphi Corridor and any displacement of Gazans into Sinai, stressing sovereignty.',
      },
      {
        countryAr: 'ليبيا (الحدود الغربية وحالة عدم الاستقرار)',
        countryEn: 'Libya (Western Border Security)',
        flag: '🇱🇾',
        riskLevel: 'تأهب عسكري واستخباراتي دائم',
        riskTone: 'amber',
        issueAr: 'تأمين أكثر من 1,100 كم من الحدود الصحراوية المشتركة ضد محاولات تهريب السلاح والعناصر المسلحة، ومساندة قيام دولة ليبية موحدة وجيش نظامي واحد.',
        issueEn: 'Guarding 1,100km porous border against weapons smuggling and supporting Libyan institutional unification.',
      },
      {
        countryAr: 'السودان (تداعيات الحرب الأهلية والحدود الجنوبية)',
        countryEn: 'Sudan (Civil War Spillover & Southern Border)',
        flag: '🇸🇩',
        riskLevel: 'أزمة إنسانية وأمنية',
        riskTone: 'amber',
        issueAr: 'دعم مؤسسات الدولة والجيش السوداني النظامي، استضافة ملايين النازحين السودانيين، وتأمين الحدود المائية والبرية الجنوبية.',
        issueEn: 'Backing Sudanese state institutions, hosting millions of refugees, and securing southern borderline.',
      },
    ],
    allianceEvolution: [
      { year: 1945, titleAr: 'تأسيس جامعة الدول العربية في القاهرة', titleEn: 'Founding Arab League HQ in Cairo', descAr: 'مصر الدولة المؤسسة والمقر الدائم للجامعة العربية لتعزيز العمل العربي المشترك.', descEn: 'Egypt co-founds and hosts permanent headquarters of Arab League.' },
      { year: 1955, titleAr: 'مؤتمر باندونغ وتأسيس حركة عدم الانحياز', titleEn: 'Bandung Conference & Non-Aligned Movement', descAr: 'الزعيم جمال عبد الناصر يقود دول العالم الثالث لرفض الاستقطاب بين المعسكرين الشرقي والغربي.', descEn: 'Gamal Abdel Nasser pioneers Non-Aligned Movement rejecting Cold War polarization.' },
      { year: 1979, titleAr: 'معاهدة السلام المصرية الإسرائيلية', titleEn: 'Egypt–Israel Peace Treaty', descAr: 'أول دولة عربية تبرم معاهدة سلام وتستعيد كامل شبه جزيرة سيناء بالسيادة الوطنية.', descEn: 'First Arab nation to sign peace treaty, recovering full sovereignty over Sinai.' },
      { year: 1989, titleAr: 'تصنيف مصر كحليف رئيسي خارج الناتو (MNNA)', titleEn: 'Major Non-NATO Ally Designation', descAr: 'شراكة أمنية واستراتيجية متقدمة مع واشنطن وبرامج تدريب عسكري مشتركة (مناورات النجم الساطع).', descEn: 'Formal MNNA status with regular Bright Star military exercise series.' },
      { year: 2019, titleAr: 'تأسيس منتدى غاز شرق المتوسط (EMGF)', titleEn: 'East Mediterranean Gas Forum (EMGF)', descAr: 'تحالف طاقة استراتيجي مع اليونان، قبرص، وإيطاليا لتحويل مصر إلى مركز إقليمي لتصدير الغاز المسال.', descEn: 'Establishing Cairo-headquartered energy alliance transforming Egypt into LNG hub.' },
      { year: 2024, titleAr: 'الانضمام الرسمي لمجموعة بريكس+ (BRICS+)', titleEn: 'Official Accession to BRICS+', descAr: 'الانضمام للتكتل الاقتصادي الأوراسي لتقليل الاعتماد على الدولار في التبادل التجاري وتوسيع الاستثمارات.', descEn: 'Accession to expanded BRICS+ boosting local currency trade settlement.' },
      { year: 2026, titleAr: 'اتفاقية الدفاع المشترك والتعاون العسكري مع الصومال', titleEn: 'Somalia Strategic Defense Pact & Horn of Africa Deployment', descAr: 'نشر قوات عسكرية مصرية في الصومال وحماية أمن البحر الأحمر وخليج عدن.', descEn: 'Egyptian military deployments to Somalia securing Gulf of Aden and Red Sea access.' },
    ],
    internalPoliticalShifts: [
      { year: 1952, eventAr: 'قيام ثورة 23 يوليو وإلغاء الملكية وإعلان الجمهورية برئاسة محمد نجيب ثم جمال عبد الناصر.', eventEn: 'July 23 Revolution overthrowing monarchy and establishing modern Egyptian Republic.' },
      { year: 1971, eventAr: 'إصدار دستور 1971 الدائم في عهد الرئيس أنور السادات وبدء سياسة الانفتاح الاقتصادي.', eventEn: 'Ratification of 1971 Constitution under Anwar Sadat and Infitah economic opening.' },
      { year: 2011, eventAr: 'قيام ثورة 25 يناير وتنحي الرئيس حسني مبارك بعد ثلاثة عقود في الحكم.', eventEn: 'January 25 Revolution leading to resignation of President Hosni Mubarak.' },
      { year: 2013, eventAr: 'خروج الملايين في ثورة 30 يونيو وتدخل القوات المسلحة لحماية خارطة الطريق الدستورية.', eventEn: 'June 30 popular uprising leading to removal of Muslim Brotherhood administration.' },
      { year: 2014, eventAr: 'إقرار دستور 2014 المعدل وانتخاب الرئيس عبد الفتاح السيسي وبداية بناء "الجمهورية الجديدة".', eventEn: 'Adoption of 2014 Constitution and election of President Abdel Fattah el-Sisi.' },
      { year: 2026, eventAr: 'افتتاح ونقل المقار الحكومية للعاصمة الإدارية الجديدة، وتدشين شبكات القطار السريع وتطوير قناة السويس.', eventEn: 'Full government operations transition to New Administrative Capital and high-speed rail completion.' },
    ],
  },

  // الولايات المتحدة الأمريكية
  us: {
    tensions: [
      {
        countryAr: 'الصين (مضيق تايوان، الحرب التكنولوجية، وبحر الصين الجنوبي)',
        countryEn: 'China (Taiwan Strait, Tech War & South China Sea)',
        flag: '🇨🇳',
        riskLevel: 'أعلى مستوى تنافس استراتيجي عالمي',
        riskTone: 'rose',
        issueAr: 'السباق المحتدم على تصنيع الرقائق الفائقة والذكاء الاصطناعي، والالتزام الأمريكي بالدفاع عن تايوان، وعسكرة الجزر في بحر الصين الجنوبي.',
        issueEn: 'Decisive geopolitical clash over cutting-edge semiconductor export controls, Taiwan security, and Indo-Pacific naval supremacy.',
      },
      {
        countryAr: 'روسيا (حرب أوكرانيا والمواجهة النووية)',
        countryEn: 'Russia (Ukraine War & Nuclear Brinkmanship)',
        flag: '🇷🇺',
        riskLevel: 'مواجهة حادة وحرب بالوكالة وعقوبات',
        riskTone: 'rose',
        issueAr: 'المواجهة المباشرة الأقوى منذ الحرب الباردة، فرض عقوبات اقتصادية شاملة، تسليح أوكرانيا بأسلحة متقدمة، وتصاعد التهديدات النووية.',
        issueEn: 'Most acute standoff since Cuban Missile Crisis: comprehensive sanctions, heavy weapon transfers to Ukraine, and nuclear posturing.',
      },
      {
        countryAr: 'إيران (البرنامج النووي وأمن الشرق الأوسط)',
        countryEn: 'Iran (Nuclear Enrichment & Regional Deterrence)',
        flag: '🇮🇷',
        riskLevel: 'توتر عسكري ومواجهات بالوكالة',
        riskTone: 'amber',
        issueAr: 'اقتراب طهران من نسبة تخصيب اليورانيوم العسكري (90%)، استهداف القواعد الأمريكية في العراق وسوريا، وحماية أمن الملاحة في البحر الأحمر.',
        issueEn: 'Near-weapons grade uranium enrichment levels, drone strikes on US bases in Levant, and Red Sea naval operations.',
      },
    ],
    allianceEvolution: [
      { year: 1949, titleAr: 'تأسيس حلف شمال الأطلسي (الناتو - واشنطن)', titleEn: 'Founding of NATO in Washington', descAr: 'قيادة الحلف الدفاعي الأكبر في التاريخ للتصدي للاتحاد السوفيتي وتطبيق مبدأ الدفاع المشترك (المادة 5).', descEn: 'Establishing NATO collective defense treaty anchoring Western military superiority.' },
      { year: 1951, titleAr: 'معاهدات الدفاع المشترك في آسيا (اليابان، كوريا، الفلبين)', titleEn: 'Bilateral San Francisco Defense Architecture', descAr: 'بناء نظام "المحور والأسلاك" (Hub and Spokes) للأمن الجماعي في المحيط الهادئ.', descEn: 'Constructing Pacific hub-and-spoke alliance network deterring communism.' },
      { year: 2021, titleAr: 'إطلاق تحالف أوكوس العسكري (AUKUS)', titleEn: 'AUKUS Trilateral Defense Partnership', descAr: 'تحالف استراتيجي مع بريطانيا وأستراليا لتزويد كانبيرا بغواصات نووية وردع الصعود الصيني.', descEn: 'Submarine propulsion and quantum/AI tech alliance with Australia and UK.' },
      { year: 2023, titleAr: 'قمة كامب ديفيد الثلاثية مع اليابان وكوريا الجنوبية', titleEn: 'Camp David Trilateral Summit', descAr: 'تدشين إطار أمني ثلاثي تاريخي يربط سيول وطوكيو وواشنطن برادار إنذار صاروخي فوري.', descEn: 'Historic trilateral security pact aligning Seoul and Tokyo under US umbrella.' },
      { year: 2026, titleAr: 'توسيع الناتو شمالاً (انضمام فنلندا والسويد) وتحديث الردع', titleEn: 'Nordic NATO Expansion & Deterrence Modernization', descAr: 'تحويل بحر البلطيق إلى بحيرة للناتو وتعزيز المظلة النووية والسيبرانية في مواجهة موسكو وبكين.', descEn: 'Fully integrating Sweden & Finland into NATO posture and deploying Next-Gen Sentinel ICBMs.' },
    ],
    internalPoliticalShifts: [
      { year: 1776, eventAr: 'إعلان الاستقلال وإقرار الدستور الفيدرالي لعام 1787 وتأسيس أول جمهورية دستورية حديثة.', eventEn: 'Declaration of Independence and drafting of United States Constitution.' },
      { year: 1865, eventAr: 'انتهاء الحرب الأهلية الأمريكية والحفاظ على الاتحاد وإلغاء الرق بالتعديل الثالث عشر.', eventEn: 'End of Civil War, preservation of the Union, and abolition of slavery.' },
      { year: 1945, eventAr: 'نهاية الحرب العالمية الثانية وصعود أمريكا كقوة عظمى وقائدة للنظام المالي العالمي (بريتون وودز).', eventEn: 'Post-WWII emergence as global superpower anchoring Bretton Woods system.' },
      { year: 2001, eventAr: 'هجمات 11 سبتمبر وتدشين "الحرب العالمية على الإرهاب" وقانون باتريوت وتأسيس وزارة الأمن الداخلي.', eventEn: 'September 11 attacks sparking Global War on Terror and Homeland Security apparatus.' },
      { year: 2024, eventAr: 'انتخابات رئاسية تاريخية، استقطاب سياسي حاد، وتنافس تشريعي محتدم على الميزانيات والهجرة.', eventEn: 'Historic presidential election testing institutional resilience amidst political polarization.' },
      { year: 2026, eventAr: 'الاحتفال بالذكرى الـ 250 لتأسيس الولايات المتحدة (Semiquincentennial 1776-2026) وتحديث التشريعات التكنولوجية الفيدرالية.', eventEn: 'Nationwide Semiquincentennial (250th Anniversary) celebration and sweeping AI regulatory frameworks.' },
    ],
  },

  // روسيا الاتحادية
  ru: {
    tensions: [
      {
        countryAr: 'أوكرانيا وحلف الناتو (الحرب المباشرة والحدود الغربية)',
        countryEn: 'Ukraine & NATO (Direct Conflict & Western Border)',
        flag: '🇺🇦',
        riskLevel: 'حرب نظامية شاملة وتأهب نووي',
        riskTone: 'rose',
        issueAr: 'النزاع المسلح الأكبر في أوروبا منذ الحرب العالمية الثانية، ضم الأقاليم الأربعة وشبه جزيرة القرم، ورفض توسع الناتو على الحدود الروسية.',
        issueEn: 'Full-scale conventional war, annexation of eastern regions, and blocking NATO expansion to Russian borders.',
      },
      {
        countryAr: 'الولايات المتحدة والدول الأوروبية (حرب العقوبات وتجميد الأصول)',
        countryEn: 'USA & EU (Sanctions & Frozen Reserves)',
        flag: '🇺🇸',
        riskLevel: 'حصار اقتصادي وتوتر جيوسياسي حاد',
        riskTone: 'rose',
        issueAr: 'تجميد أكثر من 300 مليار دولار من الاحتياطيات الروسية، وحظر واردات التكنولوجيا الفائقة، وتصاعد سباق التسلح الصاروخي في البلطيق.',
        issueEn: '$300B+ frozen central bank reserves, high-tech export embargoes, and medium-range missile deployment race.',
      },
      {
        countryAr: 'اليابان (جزر الكوريل ومعاهدة السلام المؤجلة)',
        countryEn: 'Japan (Kuril Islands Sovereignty Dispute)',
        flag: '🇯🇵',
        riskLevel: 'جمود دبلوماسي وعسكرة جزر',
        riskTone: 'amber',
        issueAr: 'استمرار الخلاف التاريخي على جزر الكوريل الجنوبية وتوقف محادثات معاهدة السلام الثنائية إثر العقوبات اليابانية.',
        issueEn: 'Suspended peace treaty talks over southern Kurils following Tokyo sanctions and missile deployments.',
      },
    ],
    allianceEvolution: [
      { year: 1955, titleAr: 'تأسيس حلف وارسو (الكتلة الشرقية)', titleEn: 'Founding of Warsaw Pact', descAr: 'قيادة الاتحاد السوفيتي للحلف العسكري المعارض للناتو في الحرب الباردة.', descEn: 'Soviet-led eastern bloc collective military pact balancing NATO.' },
      { year: 1992, titleAr: 'معاهدة الأمن الجماعي (CSTO)', titleEn: 'Collective Security Treaty Organization', descAr: 'إنشاء التكتل الأمني الأوراسي لحماية المجال السوفيتي السابق ومكافحة الإرهاب.', descEn: 'Post-Soviet Eurasian collective defense pact centered on Moscow.' },
      { year: 2001, titleAr: 'تأسيس منظمة شنغهاي للتعاون (SCO)', titleEn: 'Shanghai Cooperation Organisation', descAr: 'شراكة أمنية واستراتيجية كبرى مع الصين ودول آسيا الوسطى لمنع الهيمنة الغربية.', descEn: 'Sino-Russian Eurasian security and counter-terrorism pillar.' },
      { year: 2006, titleAr: 'إطلاق تكتل بريكس (BRICS)', titleEn: 'Founding of BRICS Alliance', descAr: 'بناء نظام مالي دولي متعدد الأقطاب والتبادل التجاري بالعملات الوطنية.', descEn: 'Pioneering multipolar economic block countering dollar hegemony.' },
      { year: 2024, titleAr: 'معاهدة الشراكة الاستراتيجية الشاملة مع كوريا الشمالية وتوسيع بريكس+', titleEn: 'Comprehensive Strategic Partnership with DPRK & BRICS+ Expansion', descAr: 'توقيع بند الدفاع المشترك مع بيونغ يانغ واستضافة قمة قازان التاريخية لبريكس+.', descEn: 'Mutual defense clause with Pyongyang and landmark Kazan BRICS+ summit.' },
      { year: 2026, titleAr: 'ترسيخ التحالف الأوراسي وممرات التجارة بين الشمال والجنوب (INSTC)', titleEn: 'Consolidating INSTC & Eurasian Security Architecture', descAr: 'ربط روسيا بالهند وإيران عبر ممر النقل الدولي وبناء أنظمة مدفوعات رقمية بديلة لسويفت.', descEn: 'North-South Transport Corridor linking Russia to Persian Gulf & non-SWIFT financial rail.' },
    ],
    internalPoliticalShifts: [
      { year: 1917, eventAr: 'قيام الثورة البلشفية وتأسيس الاتحاد السوفيتي كقوة شيوعية عظمى.', eventEn: 'October Revolution establishing Soviet Union as global communist superpower.' },
      { year: 1991, eventAr: 'تفكك الاتحاد السوفيتي وإعلان قيام روسيا الاتحادية والانتقال لنظام التعددية واقتصاد السوق.', eventEn: 'Dissolution of USSR and birth of modern Russian Federation under Boris Yeltsin.' },
      { year: 1993, eventAr: 'إقرار الدستور الروسي الحالي بعد الأزمة الدستورية وصراع الرئاسة مع البرلمان.', eventEn: 'Adoption of Russian Constitution following 1993 parliamentary crisis.' },
      { year: 2000, eventAr: 'تولي فلاديمير بوتين الرئاسة وبدء مسار استعادة هيبة الدولة المركزية ومكافحة الانفصال.', eventEn: 'Vladimir Putin ascends to presidency, consolidating federal authority.' },
      { year: 2020, eventAr: 'إقرار التعديلات الدستورية الشاملة التي تكرس السيادة الوطنية الروسية على القانون الدولي.', eventEn: 'Sweeping constitutional amendments cementing national sovereignty and resetting presidential terms.' },
      { year: 2026, eventAr: 'تحول الاقتصاد الروسي بالكامل إلى نموذج اقتصاد الحرب السيادي مع تحقيق استقلال تقني وصناعي واسع.', eventEn: 'Transition to resilient sovereign defense-driven economic model with domestic substitution.' },
    ],
  },

  // جمهورية الصين الشعبية
  cn: {
    tensions: [
      {
        countryAr: 'تايوان والولايات المتحدة (مضيق تايوان وسلاسل التوريد)',
        countryEn: 'Taiwan & USA (Cross-Strait Friction)',
        flag: '🇹🇼',
        riskLevel: 'نقطة الاشتعال العسكري الأعلى عالمياً',
        riskTone: 'rose',
        issueAr: 'التمسك الصيني بمبدأ "الصين الواحدة" وحتمية إعادة التوحيد، مع استمرار المناورات العسكرية الجوية والبحرية حول الجزيرة.',
        issueEn: 'Beijing’s commitment to reunification, opposed by US arms sales and naval transits in Taiwan Strait.',
      },
      {
        countryAr: 'الفلبين وحلفاؤها (نزاع بحر الصين الجنوبي)',
        countryEn: 'Philippines (Second Thomas Shoal & South China Sea)',
        flag: '🇵🇭',
        riskLevel: 'احتكاكات بحرية ومدافع مياه متكررة',
        riskTone: 'amber',
        issueAr: 'النزاع على خط التسعة فواصل والجزر المرجانية، مع تعزيز مانيلا لاتفاقيات الدفاع المشترك والقواعد مع واشنطن.',
        issueEn: 'Clashes between coast guards over disputed reefs and Manila’s expanded US base access under EDCA.',
      },
      {
        countryAr: 'الهند (خط السيطرة الفعلية في جبال الهيمالايا)',
        countryEn: 'India (Line of Actual Control - LAC)',
        flag: '🇮🇳',
        riskLevel: 'تأهب جبلي وتفاهمات فك اشتباك هشة',
        riskTone: 'amber',
        issueAr: 'الخلاف على الحدود في لداخ وأروناتشال براديش، مع التوصل إلى اتفاقيات دوريات حدودية وتطوير القواعد الجوية المرتفعة.',
        issueEn: 'High-altitude border standoffs in Ladakh managed through fragile military disengagement pacts.',
      },
    ],
    allianceEvolution: [
      { year: 1950, titleAr: 'معاهدة الصداقة والتحالف مع الاتحاد السوفيتي', titleEn: 'Sino-Soviet Treaty of Friendship', descAr: 'التحالف الأولي مع المعسكر الشرقي قبل حدوث الانشقاق الصيني السوفيتي الشهير في الستينيات.', descEn: 'Initial eastern bloc treaty before the historic ideological split.' },
      { year: 1971, titleAr: 'استعادة المقعد الدائم في الأمم المتحدة ومجلس الأمن', titleEn: 'Restoration of UN & Security Council Seat', descAr: 'الاعتراف الدولي بجمهورية الصين الشعبية كممثل شرعي وحيد للصين.', descEn: 'UN General Assembly Resolution 2758 restoring Beijing sovereign seat.' },
      { year: 2001, titleAr: 'الانضمام لمنظمة التجارة العالمية وتأسيس شنغهاي (SCO)', titleEn: 'WTO Accession & SCO Founding', descAr: 'دخول منظومة التجارة العالمية وتأسيس المنظمة الأمنية الأوراسية مع روسيا.', descEn: 'Entering global trade system and cementing Eurasian security bloc.' },
      { year: 2013, titleAr: 'إطلاق مبادرة الحزام والطريق (BRI)', titleEn: 'Belt and Road Initiative (BRI)', descAr: 'أكبر مشروع بنية تحتية واستثمار جيواقتصادي في التاريخ يربط أكثر من 150 دولة ببكين.', descEn: 'Trillion-dollar infrastructure and trade connectivity master-plan.' },
      { year: 2024, titleAr: 'قيادة التوسع التاريخي لبريكس+ وتدشين مبادرة الأمن العالمي (GSI)', titleEn: 'BRICS+ Expansion Leadership & Global Security Initiative', descAr: 'ضم قوى إقليمية كبرى مثل السعودية والإمارات ومصر وإيران لبناء نظام دولي عادل.', descEn: 'Spearheading BRICS expansion to build an equitable multipolar order.' },
      { year: 2026, titleAr: 'ترسيخ شبكات الشراكة الاستراتيجية الشاملة وتجارة اليوان النفطي', titleEn: 'Consolidating Petroyuan & Global South Leadership', descAr: 'توسيع تسوية عقود الطاقة والتجارة باليوان الرقمي الصيني (mBridge) وتقليل هيمنة الدولار.', descEn: 'Expanding mBridge central bank digital currency platform and non-dollar trade corridors.' },
    ],
    internalPoliticalShifts: [
      { year: 1949, eventAr: 'إعلان الزعيم ماو تسي تونغ تأسيس جمهورية الصين الشعبية في ساحة تيانانمن.', eventEn: 'Mao Zedong proclaims founding of the People’s Republic of China.' },
      { year: 1978, eventAr: 'إطلاق الزعيم دينغ شياوبينغ سياسة "الإصلاح والانفتاح" وتدشين الاشتراكية ذات الخصائص الصينية.', eventEn: 'Deng Xiaoping initiates Reform and Opening-Up economic miracle.' },
      { year: 1997, eventAr: 'استعادة السيادة الوطنية على هونغ كونغ من بريطانيا وتطبيق مبدأ "بلد واحد ونظامان".', eventEn: 'Handover of Hong Kong restoring sovereign territorial integrity.' },
      { year: 2012, eventAr: 'انتخاب شي جين بينغ أميناً عاماً للحزب الشيوعي وبدء حملة مكافحة الفساد الكبرى وحلم "النهضة الصينية".', eventEn: 'Xi Jinping becomes General Secretary, launching national rejuvenation drive.' },
      { year: 2018, eventAr: 'تعديل الدستور لإلغاء الحد الأقصى لفترات الرئاسة وتثبيت "فكر شي جين بينغ" كمرجعية وطنية.', eventEn: 'Constitutional amendment removing presidential term limits.' },
      { year: 2026, eventAr: 'بدء تنفيذ الخطة الخمسية الخامسة عشرة وتحقيق الاستقلال التام في تصنيع الرقائق الفائقة وتطبيقات الذكاء الاصطناعي.', eventEn: 'Launch of 15th Five-Year Plan cementing domestic technological autarky and AI supremacy.' },
    ],
  },

  // المملكة المتحدة (بريطانيا)
  gb: {
    tensions: [
      {
        countryAr: 'روسيا (المواجهة البحرية والاستخباراتية وحرب أوكرانيا)',
        countryEn: 'Russia (Maritime & Intelligence Standoff)',
        flag: '🇷🇺',
        riskLevel: 'عداء استراتيجي وتأهب دفاعي',
        riskTone: 'rose',
        issueAr: 'الدعم العسكري البريطاني الحاسم لكييف بصواريخ Storm Shadow، والتصدي للغواصات الروسية في شمال الأطلسي وبحر الشمال.',
        issueEn: 'Supplying Storm Shadow missiles to Ukraine and tracking Russian attack subs in North Atlantic GIUK gap.',
      },
      {
        countryAr: 'الأرجنتين (السيادة على جزر فوكلاند / المالوين)',
        countryEn: 'Argentina (Falkland Islands Sovereignty)',
        flag: '🇦🇷',
        riskLevel: 'نزاع سيادي دبلوماسي تاريخي',
        riskTone: 'amber',
        issueAr: 'التمسك البريطاني بحق تقرير المصير لسكان الجزر ورفض المطالب الأرجنتينية، مع حامية عسكرية جوية وبحرية دائمة.',
        issueEn: 'Upholding Falklanders’ self-determination with permanent RAF/Royal Navy defense garrison.',
      },
      {
        countryAr: 'إيران (أمن الملاحة واحتجاز السفن في الخليج)',
        countryEn: 'Iran (Gulf Maritime Security & Sanctions)',
        flag: '🇮🇷',
        riskLevel: 'احتكاكات بحرية متكررة',
        riskTone: 'amber',
        issueAr: 'نشر مدمرات البحرية الملكية لحماية السفن التجارية في مضيق هرمز ومواجهة مسيرات الحوثيين في البحر الأحمر.',
        issueEn: 'Royal Navy destroyer patrols securing Bab el-Mandeb and Strait of Hormuz shipping lanes.',
      },
    ],
    allianceEvolution: [
      { year: 1949, titleAr: 'تأسيس حلف شمال الأطلسي (الناتو)', titleEn: 'Founding Member of NATO', descAr: 'المملكة المتحدة ركن الدفاع الأوروبي الأول والقوة النووية الغربية الثانية في الحلف.', descEn: 'Foundational member and foremost European nuclear power in NATO.' },
      { year: 2020, titleAr: 'الخروج الرسمي من الاتحاد الأوروبي (بريكست)', titleEn: 'Official Departure from the EU (Brexit)', descAr: 'استعادة السيادة التشريعية والتجارية وإطلاق استراتيجية "بريطانيا العالمية" (Global Britain).', descEn: 'Restoring legislative sovereignty and pivoting to Global Britain posture.' },
      { year: 2021, titleAr: 'إبرام تحالف أوكوس العسكري (AUKUS)', titleEn: 'Signing of AUKUS Partnership', descAr: 'شراكة نووية وتقنية ثلاثية مع الولايات المتحدة وأستراليا لبناء غواصات الجيل القادم (SSN-AUKUS).', descEn: 'Trilateral nuclear submarine design and AI/quantum military sharing pact.' },
      { year: 2023, titleAr: 'الانضمام لاتفاقية التجارة الشاملة عبر الهادئ (CPTPP)', titleEn: 'Accession to CPTPP Trade Bloc', descAr: 'أول دولة أوروبية تنضم للتكتل التجاري الأسرع نمواً في حوض آسيا والمحيط الهادئ.', descEn: 'First European economy entering dynamic trans-Pacific free trade zone.' },
      { year: 2026, titleAr: 'قيادة اتفاقية الدفاع الأوروبية البريطانية وتطوير مقاتلة الجيل السادس GCAP', titleEn: 'GCAP 6th-Gen Fighter Partnership with Japan & Italy', descAr: 'تطوير مقاتلة المستقبل الجوية Tempest بالشراكة مع طوكيو وروما لضمان التفوق الجوي.', descEn: 'Tri-nation Global Combat Air Programme delivering 6th-Gen stealth fighter.' },
    ],
    internalPoliticalShifts: [
      { year: 1688, eventAr: 'الثورة المجيدة وإقرار وثيقة الحقوق وتأسيس الملكية الدستورية البرلمانية.', eventEn: 'Glorious Revolution and Bill of Rights establishing parliamentary monarchy.' },
      { year: 1945, eventAr: 'انتخاب حكومة العمال بعد الحرب العالمية وتأسيس هيئة الخدمات الصحية الوطنية (NHS).', eventEn: 'Post-WWII welfare state creation including National Health Service (NHS).' },
      { year: 1997, eventAr: 'تفويض السلطات وإنشاء برلمان اسكتلندا وجمعية ويلز، وتوقيع اتفاق الجمعة العظيمة في أيرلندا الشمالية.', eventEn: 'Devolution of powers and 1998 Good Friday Peace Agreement in Northern Ireland.' },
      { year: 2020, eventAr: 'إتمام خروج المملكة المتحدة من السوق الأوروبية الموحدة بعد سنوات من الاستقطاب السياسي.', eventEn: 'Formal exit from EU single market and customs union.' },
      { year: 2024, eventAr: 'انتخابات برلمانية تاريخية تعيد حزب العمال بقيادة كير ستارمر بعد 14 عاماً من حكم المحافظين.', eventEn: 'Landmark general election bringing Labour government into office.' },
      { year: 2026, eventAr: 'تنفيذ استراتيجيات إعادة التصنيع الأخضر، تحديث الخدمة المدنية، وضبط قوانين الهجرة والاستقرار المالي.', eventEn: 'Green re-industrialization agenda and fiscal stability consolidation.' },
    ],
  },

  // الجمهورية التركية
  tr: {
    tensions: [
      {
        countryAr: 'اليونان وقبرص (الحدود البحرية والوطن الأزرق Mavi Vatan)',
        countryEn: 'Greece & Cyprus (Aegean & Eastern Med Delimitation)',
        flag: '🇬🇷',
        riskLevel: 'تنافس جيوسياسي دائم مع تهدئة دبلوماسية',
        riskTone: 'amber',
        issueAr: 'النزاع على الجرف القاري في بحر إيجة، التنقيب عن الغاز شرق المتوسط، والتمسك بحل الدولتين في جزيرة قبرص.',
        issueEn: 'Aegean continental shelf disputes, energy exploration rights, and two-state policy for Cyprus.'
      },
      {
        countryAr: 'إسرائيل (القطيعة الدبلوماسية والتجارية بسبب غزة)',
        countryEn: 'Israel (Diplomatic & Trade Severance over Gaza)',
        flag: '🇮🇱',
        riskLevel: 'توتر دبلوماسي وسياسي حاد',
        riskTone: 'rose',
        issueAr: 'الوقف الكامل للتبادل التجاري مع إسرائيل، المطالبة بمحاكمة قادتها دولياً، ودعم الحقوق الفلسطينية الكاملة.',
        issueEn: 'Full suspension of bilateral trade, active legal support at ICJ, and vocal defense of Palestinian statehood.'
      },
      {
        countryAr: 'الميليشيات المسلحة في شمال سوريا والعراق (PKK / YPG)',
        countryEn: 'Northern Syria & Iraq Border Incursions (PKK / YPG)',
        flag: '⚡',
        riskLevel: 'عمليات عسكرية مستمرة ومكافحة إرهاب',
        riskTone: 'rose',
        issueAr: 'إنشاء حزام أمني بعمق 30-40 كم على الحدود الجنوبية وتنفيذ ضربات جوية بالمسيرات لمنع قيام كيان انفصالي.',
        issueEn: 'Sustained cross-border military operations (Claw-Lock) securing 30-40km buffer zone against terror threats.'
      },
    ],
    allianceEvolution: [
      { year: 1952, titleAr: 'الانضمام لحلف شمال الأطلسي (الناتو)', titleEn: 'Accession to NATO', descAr: 'تركيا تشكل ثاني أكبر جيش في الناتو وحارس مضائق البوسفور والدردنيل (اتفاقية مونترو).', descEn: 'Second largest army in NATO guarding vital Black Sea straits under Montreux Convention.' },
      { year: 1996, titleAr: 'اتفاقية الاتحاد الجمركي مع الاتحاد الأوروبي', titleEn: 'EU Customs Union Agreement', descAr: 'دمج الاقتصاد الصناعي التركي بسلاسل الإمداد الأوروبية والتصنيع المشترك.', descEn: 'Integrating Turkish manufacturing and automotive base with European markets.' },
      { year: 2009, titleAr: 'تأسيس منظمة الدول التركية (OTS)', titleEn: 'Organization of Turkic States', descAr: 'قيادة تكتل جيوسياسي يضم أذربيجان، كازاخستان، أوزبكستان، وقيرغيزستان للتكامل الاقتصادي والعسكري.', descEn: 'Leading pan-Turkic economic, defense and cultural integration alliance.' },
      { year: 2020, titleAr: 'إعلان شوشا والتحالف الدفاعي الشامل مع أذربيجان', titleEn: 'Shusha Declaration with Azerbaijan', descAr: 'تطبيق مبدأ "أمة واحدة في دولتين" ومعاهدة دفاع عسكري مشترك كامل.', descEn: 'Formal military mutual defense pact enshrining "One Nation, Two States".' },
      { year: 2024, titleAr: 'التقدم بطلب رسمي للانضمام لمجموعة بريكس+ (BRICS+)', titleEn: 'Formal Application to Join BRICS+', descAr: 'أول دولة عضو في الناتو تطلب الانضمام لبريكس+ لبناء سياسة خارجية متعددة المحاور.', descEn: 'First NATO member applying to BRICS+ signaling independent multipolar diplomacy.' },
      { year: 2026, titleAr: 'مركز الغاز الإقليمي وممر التنمية الإقليمي (تركيا - العراق - الخليج)', titleEn: 'Development Road Strategic Transit Corridor', descAr: 'تدشين خط السكك الحديدية والموانئ لربط الخليج العربي بأوروبا عبر الأراضي التركية.', descEn: 'Major multimodal trade corridor connecting Gulf to Europe via Iraq and Turkey.' },
    ],
    internalPoliticalShifts: [
      { year: 1923, eventAr: 'إعلان مصطفى كمال أتاتورك تأسيس الجمهورية التركية الحديثة ونقل العاصمة إلى أنقرة.', eventEn: 'Mustafa Kemal Atatürk proclaims modern secular Republic with Ankara as capital.' },
      { year: 1950, eventAr: 'الانتقال إلى التعددية الحزبية وفوز الحزب الديمقراطي في أول انتخابات ديمقراطية حرة.', eventEn: 'Democratic transition to multi-party elections ending one-party era.' },
      { year: 2002, eventAr: 'صعود حزب العدالة والتنمية بقيادة رجب طيب أردوغان للحكم وبدء حقبة التنمية الاقتصادية الشاملة.', eventEn: 'Justice and Development Party (AKP) comes to power inaugurating mega-infrastructure era.' },
      { year: 2017, eventAr: 'الاستفتاء الدستوري التاريخي والتحول من النظام البرلماني إلى النظام الرئاسي التنفيذي.', eventEn: 'Constitutional referendum transitioning Turkey to an executive presidential system.' },
      { year: 2023, eventAr: 'الاحتفال بمئوية تأسيس الجمهورية وإطلاق رؤية "قرن تركيا" للريادة التكنولوجية والصناعية.', eventEn: 'Centenary of the Republic and launch of "Century of Turkey" technological vision.' },
      { year: 2026, eventAr: 'اكتمال الإنتاج التسلسلي لمقاتلات KAAN ودبابات Altay ومحطات الطاقة النووية في أكويو.', eventEn: 'Commissioning of Akkuyu nuclear plant and mass serial production of indigenous stealth jets.' },
    ],
  },

  // الجمهورية الإسلامية الإيرانية
  ir: {
    tensions: [
      {
        countryAr: 'إسرائيل (المواجهة العسكرية المباشرة وحرب الظلال)',
        countryEn: 'Israel (Direct Military Strikes & Shadow War)',
        flag: '🇮🇱',
        riskLevel: 'مواجهة صاروخية مباشرة وضربات متبادلة',
        riskTone: 'rose',
        issueAr: 'انتقال الصراع من حرب بالوكالة إلى تبادل ضربات صاروخية باليستية ومسيرات ضخمة بين تل أبيب وطهران، واغتيال القادة العسكريين والعلماء النوويين.',
        issueEn: 'Shift from shadow conflict to direct ballistic missile exchanges and strikes on high-value military installations.',
      },
      {
        countryAr: 'الولايات المتحدة (العقوبات القصوى ومضيق هرمز)',
        countryEn: 'USA (Maximum Pressure & Strait of Hormuz)',
        flag: '🇺🇸',
        riskLevel: 'حصار اقتصادي وتوتر عسكري مستمر',
        riskTone: 'rose',
        issueAr: 'العقوبات الاقتصادية الصارمة على صادرات النفط، وتهديدات إغلاق مضيق هرمز، واحتكاكات زوارق الحرس الثوري مع الأسطول الخامس الأمريكي.',
        issueEn: 'Severe sanctions on oil exports, naval friction in Strait of Hormuz, and proxy clashes across Middle East.',
      },
      {
        countryAr: 'الوكالة الدولية للطاقة الذرية والدول الغربية (تخصيب اليورانيوم)',
        countryEn: 'IAEA & Western Powers (Nuclear Enrichment)',
        flag: '⚛️',
        riskLevel: 'أزمة دبلوماسية ورقابية نووية',
        riskTone: 'amber',
        issueAr: 'تجاوز نسبة تخصيب اليورانيوم 60% في منشآت فوردو ونطنز والاقتراب من العتبة النووية العسكرية، وسط ضغوط غربية لإعادة تفعيل آلية الزناد (Snapback).',
        issueEn: 'Uranium enrichment up to 60% at Fordow/Natanz reaching threshold breakout capacity under Western scrutiny.',
      },
    ],
    allianceEvolution: [
      { year: 1979, titleAr: 'سقوط حلف السنتو وإعلان مبدأ "لا شرقية ولا غربية"', titleEn: 'Collapse of CENTO & Non-Aligned Islamic Republic', descAr: 'إلغاء التحالف العسكري مع واشنطن وتبني سياسة دعم حركات التحرر وبناء "محور المقاومة".', descEn: 'Overthrowing Western-aligned monarchy and establishing independent anti-imperialist posture.' },
      { year: 2000, titleAr: 'بناء شبكة التحالفات الإقليمية (محور المقاومة)', titleEn: 'Consolidating the Axis of Resistance', descAr: 'تنسيق أمني وعسكري واسع مع حزب الله في لبنان، الفصائل في العراق، سوريا، وأنصار الله في اليمن.', descEn: 'Creating multi-front strategic deterrence network across the Levant and Arabian Peninsula.' },
      { year: 2021, titleAr: 'اتفاقية الشراكة الاستراتيجية الشاملة مع الصين لـ 25 عاماً', titleEn: '25-Year Strategic Cooperation Agreement with China', descAr: 'استثمارات صينية ضخمة بقيمة 400 مليار دولار في الطاقة والبنية التحتية مقابل إمدادات نفطية مستقرة.', descEn: '$400B economic and energy pact integrating Iran into Belt and Road Initiative.' },
      { year: 2023, titleAr: 'الانضمام الكامل لمنظمة شنغهاي للتعاون (SCO)', titleEn: 'Full Accession to Shanghai Cooperation Organisation', descAr: 'الاندماج في التكتل الأمني الأوراسي وبناء علاقات استراتيجية وثيقة مع موسكو وبكين.', descEn: 'Formal membership in Eurasian security architecture.' },
      { year: 2024, titleAr: 'الانضمام الرسمي لمجموعة بريكس+ (BRICS+)', titleEn: 'Official Accession to BRICS+', descAr: 'كسر العزلة الاقتصادية وتوسيع التجارة بالعملات المحلية مع القوى الصاعدة.', descEn: 'Accession to BRICS+ accelerating non-dollar bilateral trade mechanisms.' },
      { year: 2026, titleAr: 'معاهدة الشراكة الاستراتيجية الروسية الإيرانية الكبرى', titleEn: 'Comprehensive Strategic Treaty with Russia', descAr: 'توقيع معاهدة أمنية ودفاعية تاريخية تشمل التسليح المتطور (سو-35 ودفاع جوي) وممر الشمال والجنوب.', descEn: 'Historic bilateral pact securing advanced air defense, fighter acquisitions, and transit rail.' },
    ],
    internalPoliticalShifts: [
      { year: 1979, eventAr: 'انتصار الثورة الإسلامية بقيادة آية الله الخميني واستفتاء إعلان الجمهورية الإسلامية الدستورية.', eventEn: 'Islamic Revolution overthrows Pahlavi monarchy, establishing the Islamic Republic.' },
      { year: 1989, eventAr: 'تعديل الدستور وتولي آية الله علي خامنئي منصب المرشد الأعلى للجمهورية الإسلامية.', eventEn: 'Constitutional referendum and Ayatollah Ali Khamenei becomes Supreme Leader.' },
      { year: 2015, eventAr: 'توقيع الاتفاق النووي التاريخي (JCPOA) في عهد الرئيس حسن روحاني قبل انسحاب واشنطن منه في 2018.', eventEn: 'Signing of Joint Comprehensive Plan of Action (JCPOA) nuclear agreement.' },
      { year: 2022, eventAr: 'احتجاجات شعبية واسعة أدت إلى مراجعة داخلية لسياسات الحريات الاجتماعية وتعزيز الحوار الوطني.', eventEn: 'Nationwide demonstrations prompting domestic social debates and economic reforms.' },
      { year: 2024, eventAr: 'استشهاد الرئيس إبراهيم رئيسي في حادث مروحية، وانتخاب مسعود بزشكيان رئيساً بنهج إصلاحي وانفتاحي.', eventEn: 'Tragic loss of President Raisi and subsequent election of reformist President Masoud Pezeshkian.' },
      { year: 2026, eventAr: 'تنفيذ خطط التوازن الدبلوماسي بين الشرق والغرب، وتحديث البنية التحتية للطاقة والاقتصاد الرقمي.', eventEn: 'Executing balanced diplomatic engagement while modernizing domestic industrial and energy grid.' },
    ],
  },

  // إسرائيل
  il: {
    tensions: [
      {
        countryAr: 'إيران ومحور المقاومة (حرب متعددة الجبهات)',
        countryEn: 'Iran & Multi-Front Regional Escalation',
        flag: '🇮🇷',
        riskLevel: 'حرب إقليمية مباشرة ومستمرة',
        riskTone: 'rose',
        issueAr: 'المواجهة المباشرة الأشد في تاريخ إسرائيل مع صواريخ باليستية إيرانية، ومعارك في غزة ولبنان، واستهداف الحوثيين للموانئ الجنوبية (إيلات).',
        issueEn: 'Direct multi-front war involving Gaza, Hezbollah in Lebanon, Houthi ballistic missiles from Yemen, and Iranian direct strikes.',
      },
      {
        countryAr: 'محكمة العدل الدولية والجنائية الدولية (مذكرات الاعتقال والمحاكمات)',
        countryEn: 'ICJ & ICC (War Crimes Investigations & Warrants)',
        flag: '⚖️',
        riskLevel: 'عزلة قانونية ودبلوماسية دولية حادة',
        riskTone: 'rose',
        issueAr: 'مواجهة دعوى الإبادة الجماعية أمام محكمة العدل الدولية (ICJ) ومذكرات الاعتقال الصادرة عن المحكمة الجنائية الدولية ضد كبار القادة السياسيين والعسكريين.',
        issueEn: 'Genocide case proceedings at ICJ and ICC arrest warrants issued against political and military leadership.',
      },
      {
        countryAr: 'تركيا (القطيعة الدبلوماسية والتجارية الكاملة)',
        countryEn: 'Turkey (Complete Diplomatic & Trade Breakdown)',
        flag: '🇹🇷',
        riskLevel: 'أزمة دبلوماسية غير مسبوقة',
        riskTone: 'amber',
        issueAr: 'الوقف التركي الشامل لجميع الصادرات والواردات، وسحب السفراء، والمواقف الحادة في المحافل الدولية.',
        issueEn: 'Total trade boycott imposed by Ankara and complete severance of high-level diplomatic contacts.',
      },
    ],
    allianceEvolution: [
      { year: 1948, titleAr: 'إعلان قيام دولة إسرائيل والاعتراف الأمريكي الفوري', titleEn: 'Declaration of Independence & US Recognition', descAr: 'وضع حجر الأساس للتحالف الاستراتيجي الأمني الوثيق والدائم مع واشنطن.', descEn: 'Immediate US recognition establishing core strategic patron-client defense alliance.' },
      { year: 1979, titleAr: 'معاهدة السلام مع مصر (كامب ديفيد)', titleEn: 'Camp David Accords & Peace with Egypt', descAr: 'أول معاهدة سلام مع دولة عربية حيدت أكبر جيش عربي عن الصراع العسكري المباشر.', descEn: 'Historic breakthrough neutralizing Israel’s southern front.' },
      { year: 1994, titleAr: 'معاهدة وادي عربة للسلام مع الأردن', titleEn: 'Israel–Jordan Peace Treaty', descAr: 'تثبيت أطول حدود برية شرقية مستقرة وتعزيز التنسيق الأمني والاستخباراتي.', descEn: 'Formalizing eastern border security and intelligence coordination.' },
      { year: 2020, titleAr: 'اتفاقيات إبراهام (الإمارات، البحرين، المغرب، السودان)', titleEn: 'Abraham Accords Normalization', descAr: 'تطبيع دبلوماسي واقتصادي وأمني تاريخي مع أربع دول عربية برعاية أمريكية.', descEn: 'Breakthrough normalization pacts integrating Israel into regional economic and defense systems.' },
      { year: 2024, titleAr: 'التحالف الدفاعي الجوي الإقليمي بقيادة القيادة المركزية الأمريكية (CENTCOM)', titleEn: 'CENTCOM Integrated Air & Missile Defense Architecture', descAr: 'تنسيق عملياتي مباشر مع الولايات المتحدة وبريطانيا وفرنسا لصد الهجمات الصاروخية والمسيرات.', descEn: 'Operational multi-nation coalition intercepting massive ballistic missile and drone salvos.' },
      { year: 2026, titleAr: 'إعادة صياغة استراتيجية الدفاع الذاتي وتحديث الاتفاقيات الأمنية', titleEn: 'Post-War Defense Doctrine Restructuring', descAr: 'مضاعفة ميزانيات الدفاع، توسيع التجنيد العسكري، وتعزيز استقلالية إنتاج الذخائر محلياً.', descEn: 'Overhauling military doctrine to ensure self-reliant domestic munitions manufacturing.' },
    ],
    internalPoliticalShifts: [
      { year: 1948, eventAr: 'إعلان وثيقة الاستقلال وتأسيس الكنيست والنظام البرلماني التعددي.', eventEn: 'Declaration of Statehood and establishment of Knesset parliamentary democracy.' },
      { year: 1977, eventAr: 'صعود اليمين بزعامة حزب الليكود (انقلاب الماهباخ) وإنهاء هيمنة حزب العمل التاريخية.', eventEn: 'Likud election victory ("Mahapach") ending three decades of Labor dominance.' },
      { year: 1993, eventAr: 'توقيع اتفاقات أوسلو مع منظمة التحرير الفلسطينية وإنشاء السلطة الوطنية الفلسطينية.', eventEn: 'Oslo Accords signed with PLO establishing Palestinian National Authority.' },
      { year: 2018, eventAr: 'إقرار "قانون أساس: إسرائيل الدولة القومية للشعب اليهودي".', eventEn: 'Knesset passes controversial Basic Law: Israel as Nation-State of the Jewish People.' },
      { year: 2023, eventAr: 'أزمة التعديلات القضائية العاصفة، احتجاجات الشارع الحاشدة، تلتها حرب 7 أكتوبر وحكومة الطوارئ.', eventEn: 'Severe constitutional crisis over judicial reforms followed by Oct 7 war and emergency cabinet.' },
      { year: 2026, eventAr: 'إعادة تشكيل الخارطة الحزبية، لجان التحقيق الرسمية في إخفاقات 7 أكتوبر، وتحديث عقيدة الأمن القومي.', eventEn: 'State Commission of Inquiry on security failures and profound reconfiguration of political coalitions.' },
    ],
  },

  // الجمهورية الجزائرية الديمقراطية الشعبية
  dz: {
    tensions: [
      {
        countryAr: 'المغرب (قضية الصحراء الغربية وقطع العلاقات)',
        countryEn: 'Morocco (Western Sahara & Severed Ties)',
        flag: '🇲🇦',
        riskLevel: 'توتر حاد وحدود مغلقة',
        riskTone: 'rose',
        issueAr: 'النزاع المستمر حول دعم جبهة البوليساريو، قطع العلاقات الدبلوماسية وغلق الأجواء والحدود البرية منذ عقود، والسباق العسكري الإقليمي.',
        issueEn: 'Support for Polisario Front, severed diplomatic ties, closed airspace and land borders, and ongoing regional arms competition.',
      },
      {
        countryAr: 'فرنسا (ملف الذاكرة الاستعمارية والأزمات الدبلوماسية)',
        countryEn: 'France (Colonial Memory & Diplomatic Friction)',
        flag: '🇫🇷',
        riskLevel: 'تقلبات دبلوماسية متكررة',
        riskTone: 'amber',
        issueAr: 'الخلافات العميقة حول ملف الذاكرة الوطنية وجرائم الاستعمار، والتأشيرات، والموقف الفرنسي من قضية الصحراء الغربية.',
        issueEn: 'Disputes over colonial archives, visas, and French alignment with Moroccan autonomy plan.',
      },
      {
        countryAr: 'منطقة الساحل الأفريقي (مالي والنيجر وتراجع الاستقرار)',
        countryEn: 'Sahel Security (Mali, Niger & Insurgent Threat)',
        flag: '⚠️',
        riskLevel: 'استنفار وتأمين للحدود الجنوبية الصحراوية',
        riskTone: 'amber',
        issueAr: 'تداعيات انهيار اتفاق الجزائر للسلام في مالي، وتواجد المرتزقة الأجانب والجماعات المسلحة قرب الحدود الجنوبية الطويلة.',
        issueEn: 'Collapse of Algiers peace accord in northern Mali and monitoring porous desert borders against armed factions.',
      },
    ],
    allianceEvolution: [
      { year: 1962, titleAr: 'الاستقلال وقيادة حركة عدم الانحياز (NAM)', titleEn: 'Independence & Non-Aligned Movement Leadership', descAr: 'الجزائر "مكة الثوار" وقبلة حركات التحرر الوطني في أفريقيا والعالم العربي وأمريكا اللاتينية.', descEn: 'Pioneering beacon of national liberation and host of historic 1973 NAM Algiers Summit.' },
      { year: 1963, titleAr: 'تأسيس منظمة الوحدة الأفريقية (الاتحاد الأفريقي حالياً)', titleEn: 'Founding of OAU (Now African Union)', descAr: 'دور محوري في حماية سيادة الدول الأفريقية ومكافحة الاستعمار والفصل العنصري.', descEn: 'Foundational pillar for African decolonization and continental sovereignty.' },
      { year: 2001, titleAr: 'اتفاقية الشراكة مع الاتحاد الأوروبي وتصدير الغاز', titleEn: 'EU Association Agreement & Gas Diplomacy', descAr: 'ترسيخ مكانة الجزائر كمورد طاقة موثوق لجنوب أوروبا (إيطاليا وإسبانيا) عبر خطوط الأنابيب البحرية.', descEn: 'Key strategic natural gas supplier to Southern Europe via subsea pipelines.' },
      { year: 2023, titleAr: 'إعلان الشراكة الاستراتيجية المعمقة مع روسيا والصين', titleEn: 'Deepened Strategic Partnerships with Russia & China', descAr: 'توقيع معاهدات تعاون عسكري وتعدين وتجاري بمليارات الدولارات وتحديث منظومات التسلح.', descEn: 'Signing multi-billion dollar strategic agreements for mining, rail, and defense modernization.' },
      { year: 2024, titleAr: 'العضوية غير الدائمة في مجلس الأمن الدولي ومجموعة بريكس', titleEn: 'UN Security Council Non-Permanent Seat & BRICS Bank Accession', descAr: 'قيادة المبادرات الدبلوماسية لصالح فلسطين ولبنان في مجلس الأمن، والانضمام لبنك التنمية الجديد لبريكس.', descEn: 'Vocal advocacy for Palestine at UN Security Council and accession to BRICS New Development Bank.' },
      { year: 2026, titleAr: 'مشروع أنبوب الغاز العابر للصحراء (TSGP: نيجيريا - النيجر - الجزائر)', titleEn: 'Trans-Saharan Gas Pipeline (TSGP) Infrastructure', descAr: 'ربط حقول غاز نيجيريا بأوروبا عبر الأراضي الجزائرية كأكبر ممر طاقة استراتيجي أفريقي.', descEn: 'Flagship transcontinental pipeline linking Gulf of Guinea gas reserves to European grid.' },
    ],
    internalPoliticalShifts: [
      { year: 1962, eventAr: 'انتصار ثورة التحرير المظفرة بعد استشهاد مليون ونصف مليون شهيد وإعلان استقلال الجزائر.', eventEn: 'Independence won following epic national liberation war against French colonization.' },
      { year: 1989, eventAr: 'إقرار الدستور التعددي وإنهاء نظام الحزب الواحد والانفتاح الديمقراطي والإعلامي.', eventEn: 'Constitutional reform ending one-party system and opening multi-party politics.' },
      { year: 1999, eventAr: 'إقرار ميثاق الوئام المدني والمصالحة الوطنية لإنهاء مأساة "العشرية السوداء" واستعادة الأمن.', eventEn: 'Civil Concord and National Reconciliation laws restoring stability.' },
      { year: 2019, eventAr: 'انطلاق الحراك الشعبي السلمي وتنحي الرئيس عبد العزيز بوتفليقة وبدء مرحلة التغيير المؤسسي.', eventEn: 'Historic peaceful Hirak protest movement leading to resignation of Abdelaziz Bouteflika.' },
      { year: 2020, eventAr: 'إقرار الدستور المعدل وانتخاب الرئيس عبد المجيد تبون وبناء مسار "الجزائر الجديدة".', eventEn: 'Adoption of revised Constitution launching the "New Algeria" institutional agenda.' },
      { year: 2026, eventAr: 'إعادة انتخاب الرئيس تبون لعهدة ثانية، وتحقيق قفزات كبرى في الصادرات غير النفطية والأمن الغذائي وتطوير منجم غار جبيلات.', eventEn: 'Second-term mandate consolidating megaprojects like Gara Djebilet iron mine and food self-sufficiency.' },
    ],
  },

  // المملكة المغربية
  ma: {
    tensions: [
      {
        countryAr: 'الجزائر (نزاع الصحراء والقطيعة الدبلوماسية الشاملة)',
        countryEn: 'Algeria (Western Sahara Dispute & Severed Relations)',
        flag: '🇩🇿',
        riskLevel: 'احتقان جيوسياسي وحدود برية مغلقة',
        riskTone: 'rose',
        issueAr: 'النزاع التاريخي حول الصحراء المغربية ودعم الجزائر لجبهة البوليساريو، وقطع العلاقات، وإغلاق المجال الجوي، والسباق التسلحي المكثف.',
        issueEn: 'Rivalry over Western Sahara, Algerian support for Polisario, severed ties, and closed land border and airspace.',
      },
      {
        countryAr: 'جبهة البوليساريو (الاشتباكات المتقطعة عبر الجدار الأمني)',
        countryEn: 'Polisario Front (Buffer Zone Drone Strikes & Clashes)',
        flag: '⚡',
        riskLevel: 'عمليات عسكرية مستمرة ومسيرات دقيقة',
        riskTone: 'amber',
        issueAr: 'إحباط أي تسلل عبر الجدار الأمني العازل وتأمين معبر الكركرات الحدودي الحيوي مع موريتانيا باستخدام الطائرات المسيرة المسلحة.',
        issueEn: 'Drone-enforced deterrence along the defensive sand berm securing the Guerguerat border crossing to Mauritania.',
      },
      {
        countryAr: 'إسبانيا (مدينتا سبتة ومليلية والجزر الجعفرية)',
        countryEn: 'Spain (Ceuta, Melilla & Maritime Demarcation)',
        flag: '🇪🇸',
        riskLevel: 'تعاون استراتيجي وثيق مع ملفات سيادية معلقة',
        riskTone: 'sky',
        issueAr: 'التمسك بالسيادة التاريخية على الثغور الشمالية مع إقامة شراكة استراتيجية ممتازة بعد اعتراف مدريد بمبادرة الحكم الذاتي وتنظيم مونديال 2030 المشترك.',
        issueEn: 'Excellent strategic cooperation post-2022 Spanish support for Autonomy Plan, alongside 2030 World Cup co-hosting.',
      },
    ],
    allianceEvolution: [
      { year: 1777, titleAr: 'أول دولة تعترف باستقلال الولايات المتحدة الأمريكية', titleEn: 'First Nation to Recognize United States', descAr: 'المملكة المغربية أقدم حليف استراتيجي للولايات المتحدة بمعاهدة سلام وصداقة مستمرة منذ عهد السلطان سيدي محمد بن عبد الله.', descEn: 'Historic foundational 1786 Moroccan-American Treaty of Peace and Friendship.' },
      { year: 1984, titleAr: 'الانسحاب من منظمة الوحدة الأفريقية والعودة المظفرة للاتحاد الأفريقي 2017', titleEn: 'Return to African Union (2017)', descAr: 'استعادة المقعد الأفريقي وتدشين استراتيجية دبلوماسية واستثمارية كبرى جعلت المغرب المستثمر الأول في غرب أفريقيا.', descEn: 'Triumphant return to African Union cementing status as top investor in West Africa.' },
      { year: 2004, titleAr: 'تصنيف المغرب كحليف رئيسي خارج الناتو (MNNA)', titleEn: 'Major Non-NATO Ally (MNNA) Status', descAr: 'استضافة أضخم مناورات عسكرية في أفريقيا سنوياً ("الأسد الأفريقي" African Lion) بالشراكة مع القوات الأمريكية.', descEn: 'Designation unlocking advanced defense tech and hosting annual African Lion military drills.' },
      { year: 2020, titleAr: 'الاعتراف الأمريكي بمغربية الصحراء وتوقيع الاتفاق الثلاثي', titleEn: 'US Recognition of Western Sahara & Trilateral Accord', descAr: 'اعتراف رئاسي أمريكي تاريخي بسيادة المغرب الكاملة على صحرائه، وتطبيع العلاقات مع إسرائيل واستئناف التعاون الدبلوماسي.', descEn: 'Historic US recognition of Moroccan sovereignty over Sahara alongside Israel normalization.' },
      { year: 2024, titleAr: 'مبادرة الملك محمد السادس الأطلسية لدول الساحل الأفريقي', titleEn: 'Royal Atlantic Initiative for Sahel States', descAr: 'فتح الموانئ والبنية التحتية المغربية لدول الساحل الحبيسة (مالي، النيجر، بوركينا فاسو، وتشاد) للوصول للمحيط الأطلسي.', descEn: 'Strategic initiative granting landlocked Sahel nations access to Moroccan Atlantic ports.' },
      { year: 2026, titleAr: 'مشروع خط أنبوب الغاز المغربي النيجيري وبنية مونديال 2030', titleEn: 'Nigeria-Morocco Gas Pipeline (NMGP) & 2030 World Cup Megaprojects', descAr: 'تطوير أكبر بنية تحتية للربط القاري يمر عبر 13 دولة أفريقية، وتشييد ملعب الحسن الثاني الأكبر عالمياً في الدار البيضاء.', descEn: '5,600km mega-pipeline project and construction of world-record Grand Stade Hassan II stadium.' },
    ],
    internalPoliticalShifts: [
      { year: 1956, eventAr: 'استقلال المملكة المغربية وعودة الملك محمد الخامس وإلغاء معاهدة الحماية الفرنسية والإسبانية.', eventEn: 'Independence of Morocco and restoration of sovereign monarchy under Mohammed V.' },
      { year: 1962, eventAr: 'إقرار أول دستور للبلاد في عهد الملك الحسن الثاني وتثبيت أسس الملكية الدستورية الديمقراطية.', eventEn: 'Promulgation of first national constitution under King Hassan II.' },
      { year: 1975, eventAr: 'انطلاق "المسيرة الخضراء" التاريخية بمشاركة 350 ألف مواطن لاسترجاع الأقاليم الصحراوية سلمياً.', eventEn: 'Historic Green March recovering Western Sahara territories from Spain.' },
      { year: 1999, eventAr: 'اعتلاء الملك محمد السادس العرش وإطلاق عهد الإصلاحات الحقوقية (هيئة الإنصاف والمصالحة) والنهضة الصناعية الكبرى.', eventEn: 'Accession of King Mohammed VI launching modern industrial and human rights reforms.' },
      { year: 2011, eventAr: 'إقرار الدستور المتقدم لعام 2011 الذي كرس الأمازيغية لغة رسمية ووسع صلاحيات رئيس الحكومة والبرلمان.', eventEn: 'Landmark 2011 Constitution recognizing Tamazight and expanding Prime Minister’s executive powers.' },
      { year: 2026, eventAr: 'اكتمال تعميم الحماية الاجتماعية، تدشين ميناء الناظور غرب المتوسط، وتحديث نموذج التنمية الصناعي والسيارات الكهربائية.', eventEn: 'Universal healthcare rollout, Nador West Med port opening, and electric vehicle gigafactories expansion.' },
    ],
  },
};

/**
 * دالة ذكية لتوفير التوترات والتحولات السياسية والتاريخية لأي دولة
 */
export function getCountryDiplomacyTensions(country, _lang = 'ar') {
  if (!country) return null;
  const cid = (country.id || '').toLowerCase();

  if (COUNTRY_DIPLOMACY_TENSIONS_DB[cid]) {
    return COUNTRY_DIPLOMACY_TENSIONS_DB[cid];
  }

  // دعم المعرف uk كمرادف لـ gb
  if (cid === 'uk' && COUNTRY_DIPLOMACY_TENSIONS_DB.gb) {
    return COUNTRY_DIPLOMACY_TENSIONS_DB.gb;
  }

  const isNATO = country.alliances?.some((a) => a.includes('NATO') || a.includes('الناتو'));
  const isArab = country.region === 'middle_east' || country.region === 'north_africa';
  const isAfrica = country.continent === 'africa' || country.region === 'africa';

  // توليد توترات واقعية
  const tensions = isNATO
    ? [
        {
          countryAr: 'روسيا (التنافس الأمني الشرقي وحرب أوكرانيا)',
          countryEn: 'Russia (Eastern Flank Security & Ukraine Crisis)',
          flag: '🇷🇺',
          riskLevel: 'استنفار وتأهب دفاعي',
          riskTone: 'rose',
          issueAr: 'حماية الحدود الشرقية لحلف الناتو وتطبيق بنود الردع الجماعي والعقوبات الاقتصادية الصارمة.',
          issueEn: 'Eastern flank readiness, collective deterrence postures, and enforcement of sanctions.',
        },
        {
          countryAr: 'التهديدات السيبرانية الهجينة',
          countryEn: 'Hybrid & Cyber Threats',
          flag: '🌐',
          riskLevel: 'نشط مستمر',
          riskTone: 'amber',
          issueAr: 'التصدي للهجمات السيبرانية على البنية التحتية للطاقة والانتخابات وشبكات الاتصالات الحيوية.',
          issueEn: 'Countering advanced persistent cyber threats targeting energy grids and communications.',
        },
      ]
    : isArab
    ? [
        {
          countryAr: 'بؤر التوتر الإقليمي والأزمات الحدودية',
          countryEn: 'Regional Conflict Flashpoints',
          flag: '⚡',
          riskLevel: 'مراقبة أمنية مشددة',
          riskTone: 'amber',
          issueAr: 'تأمين الممرات البحرية والمنافذ التجارية ومكافحة تهريب السلاح والمخدرات عبر الحدود الإقليمية.',
          issueEn: 'Securing maritime trade chokepoints and combating illicit cross-border smuggling networks.',
        },
        {
          countryAr: 'النزاع مع الكيان الإسرائيلي',
          countryEn: 'Israel Conflict Dynamics',
          flag: '🇮🇱',
          riskLevel: 'توتر سياسي ودبلوماسي',
          riskTone: 'rose',
          issueAr: 'التمسك بالحقوق الفلسطينية المشروعة ومبادرة السلام العربية وإدانة العمليات العسكرية في الأراضي المحتلة.',
          issueEn: 'Upholding Arab Peace Initiative and demanding Palestinian legitimate sovereignty.',
        },
      ]
    : isAfrica
    ? [
        {
          countryAr: 'تهديدات الجماعات المسلحة في منطقة الساحل والقرن الأفريقي',
          countryEn: 'Sahel & Horn of Africa Insurgent Threats',
          flag: '⚠️',
          riskLevel: 'تأهب حدودي وأمني',
          riskTone: 'amber',
          issueAr: 'حماية الحدود البرية والتنسيق الأمني لمكافحة الإرهاب والتهريب وتداعيات الانقلابات العسكرية المجاورة.',
          issueEn: 'Border defense coordination combating extremist insurgencies and cross-border instability.',
        },
      ]
    : [
        {
          countryAr: 'النزاعات الحدودية والمنافسات الجيواقتصادية',
          countryEn: 'Border & Geo-economic Frictions',
          flag: '🌐',
          riskLevel: 'متوسط تحت الدبلوماسية',
          riskTone: 'amber',
          issueAr: 'إدارة الخلافات على المياه والموارد الطبيعية وترسيم الحدود وفق القانون الدولي.',
          issueEn: 'Managing resource sharing and territorial boundary demarcations through diplomatic channels.',
        },
      ];

  // تحولات التحالفات التاريخية
  const allianceEvolution = [
    {
      year: 1945,
      titleAr: 'الانضمام لمنظومة الأمم المتحدة وتثبيت السيادة',
      titleEn: 'Accession to the United Nations',
      descAr: 'المشاركة في ميثاق سان فرانسيسكو وترسيخ الاعتراف الدولي بحدود وسيادة الدولة الوطنية.',
      descEn: 'Foundational accession to the UN charter codifying post-WWII sovereign recognition.',
    },
    {
      year: 1975,
      titleAr: 'تأسيس المنظمات الإقليمية والشراكات الاقتصادية',
      titleEn: 'Regional Organizational Alignment',
      descAr: 'توقيع معاهدات التجارة الحرة والتعاون الأمني والجمركي مع الدول المجاورة.',
      descEn: 'Entering regional economic, free-trade, and mutual defense cooperation frameworks.',
    },
    {
      year: 1991,
      titleAr: 'إعادة التموضع بعد انتهاء الحرب الباردة',
      titleEn: 'Post-Cold War Strategic Rebalancing',
      descAr: 'التكيف مع صعود الأحادية القطبية، وتنويع الشركاء التجاريين والأمنيين مع الغرب والشرق.',
      descEn: 'Adapting defense doctrine to the post-Soviet landscape and diversifying strategic partners.',
    },
    {
      year: 2026,
      titleAr: 'الانخراط في التكتلات متعددة الأقطاب والأمن الرقمي',
      titleEn: 'Multipolar Engagement & Digital Security',
      descAr: 'المشاركة في مبادرات أمن الممرات المائية، الطاقة النظيفة، ومكافحة الجرائم السيبرانية الدولية.',
      descEn: 'Active participation in multipolar trade corridors, green energy, and cyber resilience compacts.',
    },
  ];

  // التحولات السياسية والداخلية
  const internalPoliticalShifts = [
    {
      year: 1960,
      eventAr: `إقرار الدستور الوطني وبناء المؤسسات الحكومية والقضائية والتشريعية المستقلة.`,
      eventEn: `Adoption of national constitution and establishment of modern governing institutions.`,
    },
    {
      year: 1990,
      eventAr: `إطلاق حزم الإصلاح الاقتصادي والتحول نحو اقتصاد السوق والشراكة مع القطاع الخاص.`,
      eventEn: `Economic liberalization reforms, structural adjustments, and market opening.`,
    },
    {
      year: 2011,
      eventAr: `الاستجابة للتحولات الشعبية وتحديث القوانين الانتخابية وتوسيع المشاركة السياسية.`,
      eventEn: `Constitutional amendments expanding civic participation and electoral reforms.`,
    },
    {
      year: 2026,
      eventAr: `ترسيخ الحوكمة الرقمية، الاستقرار المؤسسي، وتحديث استراتيجيات التنمية المستدامة والأمن الغذائي.`,
      eventEn: `Consolidating digital governance, institutional resilience, and food/energy security agendas.`,
    },
  ];

  return {
    tensions,
    allianceEvolution,
    internalPoliticalShifts,
  };
}
