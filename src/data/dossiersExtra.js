export const EXTRA_DOSSIERS = {
  eg: {
    parties: { ar: ['الحزب الوطني الديمقراطي'], en: ['National Democratic Party'] },
    military: { ar: 'الفريق أول الركن عبد الرحمن صديقي (قائد القوات المسلحة)', en: 'Lt-Gen. Abdel Rahman Sedky (Chief of Staff)' },
    companies: [
      { name: 'Suez Canal', ar: 'قناة السويس', sector: 'لوجستيات', sectorEn: 'Logistics', pressure: 'ممر تجاري حاسم للأمن العالمي', pressureEn: 'Critical trade artery and chokepoint' },
      { name: 'EGYP', ar: 'النفط المصرية', sector: 'غاز', sectorEn: 'Gas', pressure: 'اكتشافات غاز ضخمة في المتوسط', pressureEn: 'Major Mediterranean gas discoveries' },
      { name: 'Orascom', ar: 'أوراسكوم', sector: 'إنشاءات واتصالات', sectorEn: 'Construction & Telecom', pressure: 'مشاريع بنية تحتية إقليمية', pressureEn: 'Regional infrastructure projects' },
    ],
    risk: {
      laundering: { ar: 'متوسط إلى مرتفع — ملاذ تاريخي لأموال المنطقة مع إصلاحات متسارعة', en: 'Medium to high — historically a regional refuge, with accelerating reforms' },
      trafficking: { ar: 'مقصد رئيسي للاتجار بالبشر عبر ضفاف المتوسط', en: 'Major trafficking destination across the Mediterranean' },
      terrorism: { ar: 'تهديد في شمال سيناء وتسرّب للحركات المسلحة', en: 'Threats in North Sinai and armed-group spillover' },
    },
    events: {
      ar: ['1952: ثورة 23 يوليو', '1979: معاهدة السلام', '2011: ثورة يناير', '2023–2026: مفاوضات سد GERD والدور الإقليمي'],
      en: ['1952: 23 July Revolution', '1979: Peace treaty', '2011: January revolution', '2023–2026: GERD talks and regional mediation'],
    },
  },

  tr: {
    parties: { ar: ['حزب العدالة والتنمية', 'حزب الشعب الجمهوري', 'حزب الحركة الوطنية'], en: ['AKP', 'CHP', 'MHP'] },
    military: { ar: 'قائد الجيش التركي', en: 'Commander of the Turkish Land Forces' },
    companies: [
      { name: 'Turk Telekom', ar: 'ترك تيليكوم', sector: 'اتصالات', sectorEn: 'Telecom', pressure: 'نفوذ شبكي إقليمي', pressureEn: 'Regional network influence' },
      { name: 'Roketsan', ar: 'روكيتسان', sector: 'دفاع', sectorEn: 'Defence', pressure: 'صناعة دفاعية متوسعة سريعاً', pressureEn: 'Rapidly expanding defence industry' },
      { name: 'Koc Holding', ar: 'مجموعة كوتش', sector: 'طاقة وصناعة', sectorEn: 'Energy & Industry', pressure: 'من أكبر التكتلات الصناعية', pressureEn: 'One of the largest industrial groups' },
    ],
    risk: {
      laundering: { ar: 'متوسط — إصلاحات مستهدفة لمكافحة غسل الأموال', en: 'Medium — targeted anti-money-laundering reforms' },
      trafficking: { ar: 'محور رئيسي للاتجار بالبشر عبر البر والبحر', en: 'Key transit hub for trafficking by land and sea' },
      terrorism: { ar: 'نزاعات وكالات وجماعات مسلحة عابرة للحدود', en: 'Proxy conflicts and cross-border armed groups' },
    },
    events: {
      ar: ['1923: تأسيس الجمهورية', '1952: انقلاب 29 أكتوبر', '2002: بدء الحكم المدني', '2016: محاولة الانقلاب والإصلاح الدستوري'],
      en: ['1923: Republic founded', '1952: 29 October coup', '2002: Start of civilian rule', '2016: Coup attempt and constitutional reform'],
    },
  },

  ir: {
    parties: { ar: ['المجلس الأعلى للأمن', 'التيار الإصلاحي', 'التيار المحافظ'], en: ['Supreme Council', 'Reformists', 'Hardliners'] },
    military: { ar: 'الحرس الثوري الإسلامي — القائد العام', en: 'IRGC — Commander-in-Chief' },
    companies: [
      { name: 'NIOC', ar: 'شركة النفط الوطنية', sector: 'طاقة', sectorEn: 'Energy', pressure: 'حصة أوبك عبر وسطاء آسيويين', pressureEn: 'OPEC share via Asian buyers' },
      { name: 'MAPNA', ar: 'مابنا', sector: 'صناعة', sectorEn: 'Manufacturing', pressure: 'صناعة دفاعية محلية', pressureEn: 'Local defence manufacturing' },
    ],
    risk: {
      laundering: { ar: 'مرتفع — شبكات وسطاء في الخليج وتركيا وآسيا الوسطى', en: 'High — networks via the Gulf, Turkey and Central Asia' },
      trafficking: { ar: 'مصدر أحياناً لشبكات التهريب', en: 'Occasionally a source country in smuggling networks' },
      terrorism: { ar: 'تهديد داخلي وضغوط إقليمية', en: 'Domestic threat and regional pressure' },
    },
    events: {
      ar: ['1979: الثورة الإسلامية', '1980–1988: حرب إيران والعراق', '1995–2015: الملف النووي', '2020s: التصعيد مع إسرائيل ونزاعات الوكلاء'],
      en: ['1979: Islamic Revolution', '1980–1988: Iran–Iraq War', '1995–2015: Nuclear file', '2020s: Israel escalation and proxy conflicts'],
    },
  },

  il: {
    parties: { ar: ['الليكود', 'حزب العمل', 'شاس'], en: ['Likud', 'Labor', 'Shas'] },
    military: { ar: 'رئيس أركان الجيش', en: 'Chief of the General Staff' },
    companies: [
      { name: 'IAI', ar: 'الصناعات الجوية الإسرائيلية', sector: 'دفاع', sectorEn: 'Defence', pressure: 'تصدير الأسلحة والتقنية العسكرية', pressureEn: 'Arms exports and military technology' },
      { name: 'Mobileye', ar: 'موبيلاي', sector: 'ذكاء اصطناعي', sectorEn: 'AI', pressure: 'رؤية حاسوبية للقيادة الذاتية', pressureEn: 'Computer vision for autonomous driving' },
      { name: 'ZIM', ar: 'زيم', sector: 'شحن', sectorEn: 'Shipping', pressure: 'مسارات بحرية حرجة', pressureEn: 'Critical shipping routes' },
    ],
    risk: {
      laundering: { ar: 'منخفض إلى متوسط — نظام بنكي متقدم مع إصلاحات', en: 'Low to medium — advanced banking with reforms' },
      trafficking: { ar: 'مؤشرات موثقة من هيئات الرصد', en: 'Documented indicators by monitoring bodies' },
      terrorism: { ar: 'تهديدات من التسرّب الإقليمي والتوتر الداخلي', en: 'Threats from regional spillover and internal tension' },
    },
    events: {
      ar: ['1948: تأسيس الدولة', '1973: حرب أكتوبر', '1993: اتفاقيات أوسلو', '2023–2026: حرب غزة وأثرها الإقليمي'],
      en: ['1948: State founded', '1973: October War', '1993: Oslo Accords', '2023–2026: Gaza war and regional impact'],
    },
  },
};
