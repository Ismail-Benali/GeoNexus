/**
 * قاعدة بيانات العلاقات والتحالفات الدولية والمنافسات الجيوسياسية لدول العالم
 * International Alliances and Geopolitical Rivalries Matrix
 */

export const RELATIONS_DATABASE = {
  // المملكة العربية السعودية
  sa: {
    allies: [
      { id: 'ae', nameAr: 'الإمارات', nameEn: 'UAE', flag: '🇦🇪', relationAr: 'تحالف استراتيجي ومجلس التنسيق المشترك', relationEn: 'Strategic Alliance & Joint Coordination', alliance: 'مجلس التعاون الخليجي' },
      { id: 'kw', nameAr: 'الكويت', nameEn: 'Kuwait', flag: '🇰🇼', relationAr: 'شراكة خليجية وأمنية عضوية', relationEn: 'Gulf & Organic Security Partnership', alliance: 'مجلس التعاون الخليجي' },
      { id: 'eg', nameAr: 'مصر', nameEn: 'Egypt', flag: '🇪🇬', relationAr: 'عمق استراتيجي عربي وتنسيق دفاعي', relationEn: 'Arab Strategic Depth & Defense Ties', alliance: 'جامعة الدول العربية' },
      { id: 'us', nameAr: 'الولايات المتحدة', nameEn: 'USA', flag: '🇺🇸', relationAr: 'شراكة أمنية وتكنولوجية دفاعية متقدمة', relationEn: 'Major Security & Tech Defense Partnership', alliance: 'شراكة استراتيجية' },
      { id: 'jo', nameAr: 'الأردن', nameEn: 'Jordan', flag: '🇯🇴', relationAr: 'تحالف أمني إقليمي واستقرار الحدود', relationEn: 'Regional Security & Border Stability', alliance: 'جامعة الدول العربية' },
      { id: 'cn', nameAr: 'الصين', nameEn: 'China', flag: '🇨🇳', relationAr: 'شراكة استراتيجية شاملة وتجارة الطاقة', relationEn: 'Comprehensive Strategic Energy & Economic Partner', alliance: 'طريق الحرير والتعاون العربي الصيني' },
    ],
    rivals: [
      { id: 'ir', nameAr: 'إيران', nameEn: 'Iran', flag: '🇮🇷', relationAr: 'تنافس جيوسياسي إقليمي ومنافسة نفوذ', relationEn: 'Regional Geopolitical Influence Rivalry', conflict: 'تنافس النفوذ الإقليمي' },
      { id: 'il', nameAr: 'إسرائيل', nameEn: 'Israel', flag: '🇮🇱', relationAr: 'تعليق مسار التطبيع لشرط قيام الدولة الفلسطينية', relationEn: 'Conditional diplomacy tied to Palestinian Statehood', conflict: 'القضية الفلسطينية' },
      { id: 'ye', nameAr: 'الحوثيون (اليمن)', nameEn: 'Houthi Militias', flag: '🇾🇪', relationAr: 'تهديد أمني ومنافسة السيطرة على البحر الأحمر', relationEn: 'Cross-border Security & Red Sea Friction', conflict: 'أمن الملاحة والمنافذ البحرية' },
    ],
  },

  // جمهورية مصر العربية
  eg: {
    allies: [
      { id: 'sa', nameAr: 'السعودية', nameEn: 'Saudi Arabia', flag: '🇸🇦', relationAr: 'تحالف أمني استراتيجي وعمق عربي', relationEn: 'Strategic Defense & Arab Security Pillar', alliance: 'جامعة الدول العربية' },
      { id: 'ae', nameAr: 'الإمارات', nameEn: 'UAE', flag: '🇦🇪', relationAr: 'شراكة استثمارية وأمنية رفيعة المستوى', relationEn: 'High-Level Investment & Security Alliance', alliance: 'شراكة استراتيجية' },
      { id: 'jo', nameAr: 'الأردن', nameEn: 'Jordan', flag: '🇯🇴', relationAr: 'تنسيق سياسي ثلاثي ومصالح مشتركة', relationEn: 'Trilateral Coordination & Security Ties', alliance: 'التحالف الثلاثي' },
      { id: 'gr', nameAr: 'اليونان', nameEn: 'Greece', flag: '🇬🇷', relationAr: 'تحالف ترسيم الحدود البحرية وغاز شرق المتوسط', relationEn: 'Maritime Demarcation & EastMed Gas Forum', alliance: 'منتدى غاز المتوسط' },
      { id: 'cy', nameAr: 'قبرص', nameEn: 'Cyprus', flag: '🇨🇾', relationAr: 'شراكة الطاقة وأمن البحر المتوسط', relationEn: 'Energy & Mediterranean Security Partnership', alliance: 'منتدى غاز المتوسط' },
    ],
    rivals: [
      { id: 'et', nameAr: 'إثيوبيا', nameEn: 'Ethiopia', flag: '🇪🇹', relationAr: 'خلاف استراتيجي حول سد النهضة والأمن المائي', relationEn: 'GERD Dam & Nile Water Security Dispute', conflict: 'الأمن المائي وحصص النيل' },
      { id: 'il', nameAr: 'إسرائيل', nameEn: 'Israel', flag: '🇮🇱', relationAr: 'توترات حدودية شديدة بسبب غزة ومحور فيلادلفيا', relationEn: 'Border Tensions, Philadelphi Corridor & Gaza Crisis', conflict: 'أمن سيناء والحدود الشرقية' },
    ],
  },

  // الولايات المتحدة الأمريكية
  us: {
    allies: [
      { id: 'gb', nameAr: 'المملكة المتحدة', nameEn: 'UK', flag: '🇬🇧', relationAr: 'العلاقة الخاصة، تبادل استخباراتي وحلف الناتو', relationEn: 'Special Relationship, Five Eyes & NATO', alliance: 'الناتو / أوكوس' },
      { id: 'jp', nameAr: 'اليابان', nameEn: 'Japan', flag: '🇯🇵', relationAr: 'معاهدة الدفاع المشترك والردع النووي', relationEn: 'Mutual Defense Treaty & Quad Alliance', alliance: 'التحالف الرباعي (كواد)' },
      { id: 'de', nameAr: 'ألمانيا', nameEn: 'Germany', flag: '🇩🇪', relationAr: 'العمود الفقري للناتو في أوروبا الوسطى', relationEn: 'Core NATO Ally in Central Europe', alliance: 'حلف الناتو' },
      { id: 'kr', nameAr: 'كوريا الجنوبية', nameEn: 'South Korea', flag: '🇰🇷', relationAr: 'تحالف عسكري وثيق ضد تهديدات الشمال', relationEn: 'Mutual Defense Treaty against DPRK', alliance: 'معاهدة الدفاع المشترك' },
      { id: 'au', nameAr: 'أستراليا', nameEn: 'Australia', flag: '🇦🇺', relationAr: 'تحالف أوكوس وتفوق المحيطين الهندي والهادئ', relationEn: 'AUKUS Submarine Pact & Pacific Security', alliance: 'أوكوس / كواد' },
      { id: 'ca', nameAr: 'كندا', nameEn: 'Canada', flag: '🇨🇦', relationAr: 'قيادة نوراد والتحالف الأمني الشمالي', relationEn: 'NORAD & North American Continental Defense', alliance: 'نوراد / الناتو' },
    ],
    rivals: [
      { id: 'cn', nameAr: 'الصين', nameEn: 'China', flag: '🇨🇳', relationAr: 'تنافس تكنولوجي واقتصادي وجيوسياسي على تايوان', relationEn: 'Global Tech, Trade & Taiwan Straits Rivalry', conflict: 'الهيمنة التكنولوجية ومضيق تايوان' },
      { id: 'ru', nameAr: 'روسيا', nameEn: 'Russia', flag: '🇷🇺', relationAr: 'صراع استراتيجي مفتوح، عقوبات وحرب بالوكالة', relationEn: 'Strategic Adversary, Sanctions & Proxy Conflict', conflict: 'أوكرانيا والنظام الأمني الأوروبي' },
      { id: 'ir', nameAr: 'إيران', nameEn: 'Iran', flag: '🇮🇷', relationAr: 'مواجهة في الشرق الأوسط والبرنامج النووي', relationEn: 'Middle East Confrontation & Nuclear Impasse', conflict: 'الأمن الإقليمي والردع النووي' },
      { id: 'kp', nameAr: 'كوريا الشمالية', nameEn: 'North Korea', flag: '🇰🇵', relationAr: 'سباق التسلح الصاروخي والتهديد النووي', relationEn: 'Nuclear & ICBM Ballistic Missile Threat', conflict: 'الردع النووي في المحيط الهادئ' },
    ],
  },

  // جمهورية الصين الشعبية
  cn: {
    allies: [
      { id: 'ru', nameAr: 'روسيا', nameEn: 'Russia', flag: '🇷🇺', relationAr: 'شراكة استراتيجية بلا حدود وتنسيق متعدد الأقطاب', relationEn: 'No-Limits Strategic Partnership & Multipolarity', alliance: 'منظمة شنغهاي / بريكس' },
      { id: 'pk', nameAr: 'باكستان', nameEn: 'Pakistan', flag: '🇵🇰', relationAr: 'شراكة حديدية وممر الصين-باكستان الاقتصادي', relationEn: 'All-Weather Strategic CPEC Corridor', alliance: 'منظمة شنغهاي للتعاون' },
      { id: 'ir', nameAr: 'إيران', nameEn: 'Iran', flag: '🇮🇷', relationAr: 'اتفاقية تعاون استراتيجي شامل لـ 25 عاماً', relationEn: '25-Year Comprehensive Strategic Accord', alliance: 'بريكس / منظمة شنغهاي' },
      { id: 'kp', nameAr: 'كوريا الشمالية', nameEn: 'North Korea', flag: '🇰🇵', relationAr: 'معاهدة الصداقة والتعاون والمساعدة المتبادلة', relationEn: 'Mutual Defense & Friendship Treaty', alliance: 'معاهدة التعاون الثنائي' },
    ],
    rivals: [
      { id: 'us', nameAr: 'الولايات المتحدة', nameEn: 'USA', flag: '🇺🇸', relationAr: 'منافسة شاملة على صدارة النظام العالمي والرقائق', relationEn: 'Superpower Hegemony, Semi-conductors & Indo-Pacific', conflict: 'تايوان والتجارة الاستراتيجية' },
      { id: 'in', nameAr: 'الهند', nameEn: 'India', flag: '🇮🇳', relationAr: 'نزاع حدودي غير مستقر وتنافس على قيادة الجنوب', relationEn: 'Himalayan Border Friction & Global South Leadership', conflict: 'الحدود ونفوذ المحيط الهندي' },
      { id: 'jp', nameAr: 'اليابان', nameEn: 'Japan', flag: '🇯🇵', relationAr: 'نزاع جزر دياويو/سينكاكو والتوسع البحري', relationEn: 'Senkaku Islands & Maritime Hegemony Rivalry', conflict: 'السيادة البحرية' },
      { id: 'ph', nameAr: 'الفلبين', nameEn: 'Philippines', flag: '🇵🇭', relationAr: 'احتكاكات بحر الصين الجنوبي والشعاب المرجانية', relationEn: 'South China Sea Territorial Clashes', conflict: 'السيادة على خط النقاط التسع' },
    ],
  },

  // روسيا الاتحادية
  ru: {
    allies: [
      { id: 'by', nameAr: 'بيلاروسيا', nameEn: 'Belarus', flag: '🇧🇾', relationAr: 'دولة الاتحاد والانتشار النووي التكتيكي المشترك', relationEn: 'Union State & Joint Tactical Nuclear Deployment', alliance: 'منظمة معاهدة الأمن الجماعي' },
      { id: 'cn', nameAr: 'الصين', nameEn: 'China', flag: '🇨🇳', relationAr: 'تنسيق جيوسياسي واقتصادي لمواجهة الهيمنة الغربية', relationEn: 'Geopolitical & Energy Alignment against Western Sanctions', alliance: 'بريكس / شنغهاي' },
      { id: 'ir', nameAr: 'إيران', nameEn: 'Iran', flag: '🇮🇷', relationAr: 'شراكة دفاعية وصفقات طائرات مسيرة وصواريخ', relationEn: 'Strategic Drone & Air Defense Cooperation', alliance: 'بريكس' },
      { id: 'kp', nameAr: 'كوريا الشمالية', nameEn: 'North Korea', flag: '🇰🇵', relationAr: 'معاهدة الدفاع المتبادل والدعم اللوجستي والعسكري', relationEn: 'Comprehensive Strategic Partnership & Defense Treaty', alliance: 'معاهدة الدفاع المشترك 2024' },
    ],
    rivals: [
      { id: 'ua', nameAr: 'أوكرانيا', nameEn: 'Ukraine', flag: '🇺🇦', relationAr: 'حرب وجودية ونزاع عسكري مسلح مفتوح', relationEn: 'Direct Armed Conflict & Sovereign Territorial War', conflict: 'الحرب الروسية الأوكرانية' },
      { id: 'us', nameAr: 'الولايات المتحدة', nameEn: 'USA', flag: '🇺🇸', relationAr: 'مواجهة جيوسياسية شاملة وسباق تسلح استراتيجي', relationEn: 'Global Confrontation, Sanctions & NATO Proxy War', conflict: 'أمن أوروبا والردع النووي' },
      { id: 'gb', nameAr: 'بريطانيا', nameEn: 'UK', flag: '🇬🇧', relationAr: 'أشد حلفاء أوكرانيا تسليحاً وتوتر أمني ودبلوماسي', relationEn: 'Foremost European Arms Supplier to Kyiv & Espionage Friction', conflict: 'الأمن الأوروبي' },
    ],
  },

  // المملكة المغربية
  ma: {
    allies: [
      { id: 'sa', nameAr: 'السعودية', nameEn: 'Saudi Arabia', flag: '🇸🇦', relationAr: 'دعم كامل لمغربية الصحراء وشراكة تاريخية', relationEn: 'Total Sovereignty Support & Historic Ties', alliance: 'جامعة الدول العربية' },
      { id: 'ae', nameAr: 'الإمارات', nameEn: 'UAE', flag: '🇦🇪', relationAr: 'استثمارات استراتيجية وقنصلية بالصحراء المغربية', relationEn: 'Strategic Investments & Diplomatic Support', alliance: 'شراكة استراتيجية' },
      { id: 'us', nameAr: 'الولايات المتحدة', nameEn: 'USA', flag: '🇺🇸', relationAr: 'اعتراف أمريكي بالسيادة وتدريبات الأسد الأفريقي', relationEn: 'US Sovereignty Recognition & African Lion War Games', alliance: 'حليف رئيسي خارج الناتو' },
      { id: 'es', nameAr: 'إسبانيا', nameEn: 'Spain', flag: '🇪🇸', relationAr: 'شراكة استراتيجية وتأييد مبادرة الحكم الذاتي', relationEn: 'Autonomy Plan Endorsement & Border Security', alliance: 'شراكة استراتيجية أورومتوسطية' },
      { id: 'fr', nameAr: 'فرنسا', nameEn: 'France', flag: '🇫🇷', relationAr: 'اعتراف فرنسي صريح بمغربية الصحراء وعقود دفاعية', relationEn: 'Explicit French Recognition & Strategic Defense Accord', alliance: 'شراكة فرنسية مغربية مميزة' },
    ],
    rivals: [
      { id: 'dz', nameAr: 'الجزائر', nameEn: 'Algeria', flag: '🇩🇿', relationAr: 'قطع العلاقات الدبلوماسية ونزاع الصحراء الغربية', relationEn: 'Severed Diplomatic Ties & Western Sahara Dispute', conflict: 'النزاع الإقليمي والصحراء' },
    ],
  },

  // الجمهورية الجزائرية
  dz: {
    allies: [
      { id: 'ru', nameAr: 'روسيا', nameEn: 'Russia', flag: '🇷🇺', relationAr: 'المورد الرئيسي لمنظومات الدفاع والأسلحة الاستراتيجية', relationEn: 'Primary Weapons & Defense Systems Supplier', alliance: 'شراكة استراتيجية عميقة' },
      { id: 'cn', nameAr: 'الصين', nameEn: 'China', flag: '🇨🇳', relationAr: 'مشاريع البنية التحتية الكبرى والاستثمار التعديني', relationEn: 'Major Infrastructure & Belt and Road Partner', alliance: 'طريق الحرير والتعاون الصيني' },
      { id: 'za', nameAr: 'جنوب أفريقيا', nameEn: 'South Africa', flag: '🇿🇦', relationAr: 'تنسيق سياسي أفريقي ودعم جبهة البوليساريو', relationEn: 'African Union Alignment & Shared Foreign Policy', alliance: 'الاتحاد الأفريقي' },
      { id: 'tn', nameAr: 'تونس', nameEn: 'Tunisia', flag: '🇹🇳', relationAr: 'تنسيق أمني حدودي وطاقي وثيق', relationEn: 'Close Border Security & Energy Interconnection', alliance: 'شراكة مغاربية ثنائية' },
    ],
    rivals: [
      { id: 'ma', nameAr: 'المغرب', nameEn: 'Morocco', flag: '🇲🇦', relationAr: 'تنافس النفوذ الإقليمي وإغلاق الحدود الدبلوماسية', relationEn: 'Regional Hegemony Rivalry & Severed Relations', conflict: 'ملف الصحراء والحدود الغربية' },
      { id: 'il', nameAr: 'إسرائيل', nameEn: 'Israel', flag: '🇮🇱', relationAr: 'عداء سياسي ودبلوماسي ومقاومة التطبيع', relationEn: 'Anti-normalization Stance & Palestinian Support', conflict: 'القضية الفلسطينية والأمن المغاربي' },
    ],
  },
};

/**
 * توليد أو استرجاع شبكة العلاقات والتحالفات والمنافسات لدولة محددة
 */
export function getCountryRelations(country, lang = 'ar') {
  if (!country) return { allies: [], rivals: [], nodes: [], links: [] };
  const cid = country.id?.toLowerCase();
  const isAr = lang === 'ar';

  const entry = RELATIONS_DATABASE[cid];

  let allies = [];
  let rivals = [];

  if (entry) {
    allies = entry.allies.map((a) => ({
      ...a,
      name: isAr ? a.nameAr : a.nameEn,
      relation: isAr ? a.relationAr : a.relationEn,
      type: 'ally',
    }));

    rivals = entry.rivals.map((r) => ({
      ...r,
      name: isAr ? r.nameAr : r.nameEn,
      relation: isAr ? r.relationAr : r.relationEn,
      type: 'rival',
    }));
  } else {
    // توليد شبكة ديناميكية منطقية بناءً على القارة والتحالفات
    const continent = country.continent || 'asia';
    if (continent === 'europe') {
      allies = [
        { id: 'de', name: isAr ? 'ألمانيا' : 'Germany', flag: '🇩🇪', relation: isAr ? 'شراكة الاتحاد الأوروبي' : 'EU Core Partner', type: 'ally' },
        { id: 'fr', name: isAr ? 'فرنسا' : 'France', flag: '🇫🇷', relation: isAr ? 'دفاع أوروبي مشترك' : 'EU Joint Defense', type: 'ally' },
        { id: 'us', name: isAr ? 'أمريكا' : 'USA', flag: '🇺🇸', relation: isAr ? 'حلف شمال الأطلسي (الناتو)' : 'NATO Alliance', type: 'ally' },
      ];
      rivals = [
        { id: 'ru', name: isAr ? 'روسيا' : 'Russia', flag: '🇷🇺', relation: isAr ? 'مخاوف الأمن الجيوسياسي' : 'Geopolitical Security Tension', type: 'rival' },
      ];
    } else if (continent === 'africa') {
      allies = [
        { id: 'eg', name: isAr ? 'مصر' : 'Egypt', flag: '🇪🇬', relation: isAr ? 'التعاون الأمني الأفريقي' : 'African Security Framework', type: 'ally' },
        { id: 'sa', name: isAr ? 'السعودية' : 'Saudi Arabia', flag: '🇸🇦', relation: isAr ? 'شراكة اقتصادية واستثمارية' : 'Economic & Investment Partner', type: 'ally' },
        { id: 'cn', name: isAr ? 'الصين' : 'China', flag: '🇨🇳', relation: isAr ? 'تمويل البنية التحتية' : 'Infrastructure Partner', type: 'ally' },
      ];
      rivals = [
        { id: 'fr', name: isAr ? 'النفوذ الفرنسي' : 'French Influence', flag: '🇫🇷', relation: isAr ? 'خلافات السيادة والسياسة النقدية' : 'Monetary & Sovereignty Friction', type: 'rival' },
      ];
    } else {
      allies = [
        { id: 'sa', name: isAr ? 'السعودية' : 'Saudi Arabia', flag: '🇸🇦', relation: isAr ? 'شراكة استراتيجية' : 'Strategic Partner', type: 'ally' },
        { id: 'us', name: isAr ? 'أمريكا' : 'USA', flag: '🇺🇸', relation: isAr ? 'تعاون أمني ودبلوماسي' : 'Security Cooperation', type: 'ally' },
        { id: 'cn', name: isAr ? 'الصين' : 'China', flag: '🇨🇳', relation: isAr ? 'تجارة دولية' : 'Global Trade Partner', type: 'ally' },
      ];
      rivals = [
        { id: 'ir', name: isAr ? 'إيران' : 'Iran', flag: '🇮🇷', relation: isAr ? 'تنافس إقليمي' : 'Regional Rivalry', type: 'rival' },
      ];
    }
  }

  // بناء الإحداثيات الدائرية للشبكة حول العقدة المركزية (0, 0)
  const focalNode = {
    x: 0,
    y: 0,
    id: country.id,
    name: country.name,
    flag: country.flag,
    isCenter: true,
    type: 'center',
    size: 28,
  };

  const allRelated = [
    ...allies.map((a, i) => ({ ...a, group: 'ally', index: i, total: allies.length })),
    ...rivals.map((r, i) => ({ ...r, group: 'rival', index: i, total: rivals.length })),
  ];

  const totalItems = allRelated.length;
  const nodes = [focalNode];
  const links = [];

  allRelated.forEach((item, idx) => {
    // توزيع زاوي متناسق
    const angle = (idx / totalItems) * 2 * Math.PI - Math.PI / 2;
    // الحلفاء في حلقة أقرب نسبياً والمنافسون في حلقة أبعد قليلاً
    const radius = item.group === 'ally' ? 62 : 78;
    const x = Math.round(radius * Math.cos(angle));
    const y = Math.round(radius * Math.sin(angle));

    const node = {
      x,
      y,
      id: item.id,
      name: item.name,
      flag: item.flag,
      relation: item.relation,
      alliance: item.alliance,
      conflict: item.conflict,
      type: item.type,
      isCenter: false,
      size: item.type === 'ally' ? 16 : 14,
    };

    nodes.push(node);

    links.push({
      fromX: 0,
      fromY: 0,
      toX: x,
      toY: y,
      type: item.type,
      name: item.name,
    });
  });

  return {
    allies,
    rivals,
    nodes,
    links,
  };
}
