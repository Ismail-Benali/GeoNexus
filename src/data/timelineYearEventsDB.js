/**
 * محرك وقاعدة بيانات الأحداث الجيوسياسية السنوية المربوطة بالخريطة التكتيكية (1914 - 2026)
 * Timeline Simulation & Map-Linked Geopolitical Historical Events Database
 * 
 * يربط كل سنة بأحداثها الميدانية الحقيقية وإحداثيات الدول المتأثرة لعرضها فورياً على الخريطة.
 */

export const TIMELINE_YEAR_EVENTS = [
  // 1914
  {
    id: 'ww1-outbreak-1914',
    year: 1914,
    countryId: 'ba', // البوسنة والهرسك / النمسا-المجر
    affectedCountries: ['at', 'rs', 'de', 'ru', 'fr', 'gb'],
    coordinates: [43.8563, 18.4131], // سراييفو
    category: 'war',
    severity: 'critical',
    defconLevel: 1,
    titleAr: 'اغتيال الأرشيدوق فرانتس فرديناند واندلاع الحرب العالمية الأولى',
    titleEn: 'Assassination of Archduke Franz Ferdinand & WWI Outbreak',
    summaryAr: 'اغتيال ولي عهد النمسا في سراييفو على يد غافريلو برينسيب، مما أشعل شبكة التحالفات العسكرية وأدى لدخول القوى العظمى في حرب عالمية شاملة.',
    summaryEn: 'Assassination of Austro-Hungarian heir in Sarajevo ignites alliance cascades, launching World War I across Europe and the globe.',
    belligerentsAr: 'دول المركز (ألمانيا، النمسا-المجر) ضد دول الوفاق (بريطانيا، فرنسا، روسيا)',
    belligerentsEn: 'Central Powers vs Triple Entente',
    impactAr: 'سقوط 4 إمبراطوريات كبرى وإعادة تخطيط خرائط الشرق الأوسط وأوروبا.',
    impactEn: 'Collapse of four empires and radical redrawing of global borders.',
  },
  {
    id: 'ww1-middle-east-1914',
    year: 1914,
    countryId: 'tr',
    affectedCountries: ['tr', 'ru', 'gb'],
    coordinates: [41.0082, 28.9784], // إسطنبول
    category: 'war',
    severity: 'high',
    defconLevel: 1,
    titleAr: 'دخول الدولة العثمانية الحرب العالمية الأولى وإغلاق المضايق',
    titleEn: 'Ottoman Empire Enters WWI & Closes Turkish Straits',
    summaryAr: 'قصف الموانئ الروسية في البحر الأسود ودخول السلطنة العثمانية رسمياً إلى جانب دول المركز، وإعلان النفير العام في بلاد الشام والحجاز والعراق.',
    summaryEn: 'Ottoman fleet shells Russian Black Sea ports, formally entering WWI alongside Central Powers.',
    belligerentsAr: 'الدولة العثمانية ضد روسيا القيصرية والإمبراطورية البريطانية',
    belligerentsEn: 'Ottoman Empire vs Russian Empire & UK',
    impactAr: 'فتح جبهات القوقاز وسيناء وبلاد الرافدين والتمهيد لسقوط الخلافة.',
    impactEn: 'Opened multi-theater warfare across Levant, Mesopotamia, and Caucasus.',
  },

  // 1916
  {
    id: 'arab-revolt-1916',
    year: 1916,
    countryId: 'sa',
    affectedCountries: ['sa', 'tr', 'gb'],
    coordinates: [21.3891, 39.8579], // مكة المكرمة
    category: 'revolution',
    severity: 'critical',
    defconLevel: 2,
    titleAr: 'إطلاق الثورة العربية الكبرى وتوقيع اتفاقية سايكس بيكو',
    titleEn: 'Great Arab Revolt Launch & Sykes-Picot Agreement',
    summaryAr: 'إطلاق الشريف حسين بن علي رصاصة الثورة من مكة المكرمة ضد الحكم الاتحادي العثماني، تزامناً مع المعاهدة السرية الفرنسية البريطانية لتقاسم المشرق العربي.',
    summaryEn: 'Sharif Hussein launches the Arab Revolt from Mecca, alongside secret Franco-British partition pact.',
    belligerentsAr: 'الجيش العربي والثوار ضد القوات العثمانية',
    belligerentsEn: 'Arab Forces vs Ottoman Imperial Garrisons',
    impactAr: 'تأسيس الكيانات السياسية الحديثة في الحجاز والأردن والعراق وسوريا.',
    impactEn: 'Foundational genesis of modern Levantine and Iraqi state borders.',
  },

  // 1917
  {
    id: 'balfour-declaration-1917',
    year: 1917,
    countryId: 'ps',
    affectedCountries: ['ps', 'gb'],
    coordinates: [31.7683, 35.2137], // القدس
    category: 'treaty',
    severity: 'critical',
    defconLevel: 2,
    titleAr: 'وعد بلفور ودخول القوات البريطانية القدس وسقوط القيصرية الروسية',
    titleEn: 'Balfour Declaration, Fall of Jerusalem & Bolshevik Revolution',
    summaryAr: 'صدور رسالة آرثر بلفور بإنشاء وطن قومي لليهود في فلسطين، وسقوط القدس بيد الجنرال ألنبي، واندلاع الثورة البلشفية في روسيا وانسحابها من الحرب.',
    summaryEn: 'British issuance of the Balfour Declaration, capture of Jerusalem, and Bolshevik Revolution in Russia.',
    belligerentsAr: 'بريطانيا والحركة الصهيونية، وروسيا البلشفية',
    belligerentsEn: 'British Empire, Zionist Organization, Bolsheviks',
    impactAr: 'بدء الانتداب البريطاني وغرس بذور أطول صراع جيوسياسي في الشرق الأوسط.',
    impactEn: 'British Mandate establishment and origins of the Arab-Israeli conflict.',
  },

  // 1918
  {
    id: 'ww1-armistice-1918',
    year: 1918,
    countryId: 'fr',
    affectedCountries: ['fr', 'de', 'gb', 'us'],
    coordinates: [49.4295, 2.8260], // كومبيين - فرنسا
    category: 'treaty',
    severity: 'high',
    defconLevel: 3,
    titleAr: 'هدنة كومبيين ونهاية الحرب العالمية الأولى وتفكك الإمبراطوريات',
    titleEn: 'Armistice of Compiègne & End of World War I',
    summaryAr: 'توقيع الهدنة في عربة قطار بغابة كومبيين واستسلام ألمانيا، وانهيار إمبراطوريات النمسا-المجر والقيصرية الروسية وبدء تفكك العثمانيين.',
    summaryEn: 'Signing of the Armistice in Compiègne wagon ending WWI military operations.',
    belligerentsAr: 'الحلفاء وألمانيا',
    belligerentsEn: 'Allied Powers and German Empire',
    impactAr: 'إعلان مبادئ وودرو ويلسون الأربعة عشر وتأسيس عصبة الأمم.',
    impactEn: 'Wilsonian 14 points doctrine and founding of League of Nations.',
  },

  // 1923
  {
    id: 'lausanne-treaty-1923',
    year: 1923,
    countryId: 'tr',
    affectedCountries: ['tr', 'gr', 'gb', 'fr'],
    coordinates: [39.9334, 32.8597], // أنقرة
    category: 'milestone',
    severity: 'high',
    defconLevel: 3,
    titleAr: 'معاهدة لوزان وإعلان قيام الجمهورية التركية الحديثة',
    titleEn: 'Treaty of Lausanne & Proclamation of Republic of Turkey',
    summaryAr: 'إلغاء معاهدة سيفر المجحفة، واعتراف القوى الدولية بحدود تركيا الجديدة بقيادة مصطفى كمال أتاتورك ونقل العاصمة إلى أنقرة.',
    summaryEn: 'Recognition of modern Turkish borders replacing Treaty of Sèvres, proclamation of Turkish Republic under Atatürk.',
    belligerentsAr: 'حكومة أنقرة ضد قوات الحلفاء واليونان',
    belligerentsEn: 'Government of Grand National Assembly vs Allies',
    impactAr: 'ترسيم الحدود الشمالية لسوريا والعراق وإلغاء الخلافة العثمانية رسمياً.',
    impactEn: 'Definitive borders of modern Middle East and abolition of Ottoman Caliphate.',
  },

  // 1932
  {
    id: 'saudi-unification-1932',
    year: 1932,
    countryId: 'sa',
    affectedCountries: ['sa'],
    coordinates: [24.7136, 46.6753], // الرياض
    category: 'milestone',
    severity: 'medium',
    defconLevel: 4,
    titleAr: 'إعلان توحيد المملكة العربية السعودية بقيادة الملك عبد العزيز',
    titleEn: 'Proclamation of the Kingdom of Saudi Arabia under King Abdulaziz',
    summaryAr: 'صدور المرسوم الملكي التاريخي بتحويل اسم مملكة الحجاز ونجد وملحقاتها إلى المملكة العربية السعودية وتوحيد أرجائها تحت راية التوحيد.',
    summaryEn: 'Royal decree unifying the Kingdom of Hejaz and Nejd into the Kingdom of Saudi Arabia under King Abdulaziz Al Saud.',
    belligerentsAr: 'توحيد سيادي داخلي',
    belligerentsEn: 'Sovereign state unification',
    impactAr: 'تأسيس أكبر قوة سياسية واقتصادية ومصدر للطاقة في شبه الجزيرة العربية.',
    impactEn: 'Birth of the dominant geopolitical and energy powerhouse in the Arabian Peninsula.',
  },

  // 1939
  {
    id: 'ww2-outbreak-1939',
    year: 1939,
    countryId: 'pl',
    affectedCountries: ['pl', 'de', 'ru', 'gb', 'fr'],
    coordinates: [52.2297, 21.0122], // وارسو
    category: 'war',
    severity: 'critical',
    defconLevel: 1,
    titleAr: 'غزو بولندا واندلاع الحرب العالمية الثانية',
    titleEn: 'Invasion of Poland & Outbreak of World War II',
    summaryAr: 'اجتياح القوات الألمانية الأراضي البولندية عبر تكتيك حرب البرق (Blitzkrieg)، وإعلان بريطانيا وفرنسا الحرب على ألمانيا، متبوعاً بدخول السوفيت شرق بولندا.',
    summaryEn: 'German forces invade Poland triggering British and French declarations of war, igniting World War II.',
    belligerentsAr: 'ألمانيا النازية ضد بولندا وبريطانيا وفرنسا والاتحاد السوفيتي',
    belligerentsEn: 'Nazi Germany vs Poland, UK, France and USSR',
    impactAr: 'أكبر حرب دمارية في تاريخ البشرية تجاوز ضحاياها 70 مليون قتيل.',
    impactEn: 'Deadliest armed conflict in human history with over 70 million casualties.',
  },

  // 1945
  {
    id: 'ww2-end-un-1945',
    year: 1945,
    countryId: 'us',
    affectedCountries: ['us', 'ru', 'gb', 'fr', 'cn', 'de', 'jp'],
    coordinates: [37.7749, -122.4194], // سان فرانسيسكو
    category: 'milestone',
    severity: 'critical',
    defconLevel: 2,
    titleAr: 'انتهاء الحرب العالمية الثانية واستخدام السلاح النووي وتأسيس الأمم المتحدة',
    titleEn: 'End of WWII, Hiroshima Bombing & Charter of the United Nations',
    summaryAr: 'استسلام ألمانيا ثم اليابان إثر القصف الذري على هيروشيما وناغازاكي، وتوقيع ميثاق الأمم المتحدة في سان فرانسيسكو لتدشين النظام الدولي الجديد.',
    summaryEn: 'Surrender of Axis powers following atomic strikes on Japan, signing of the UN Charter in San Francisco.',
    belligerentsAr: 'قوات الحلفاء ضد دول المحور',
    belligerentsEn: 'Allied Powers vs Axis Powers',
    impactAr: 'انقسام العالم إلى قطبين نوويين (واشنطن وموسكو) وتأسيس مجلس الأمن.',
    impactEn: 'Dawn of the Atomic Age, UN Security Council veto architecture, and Bipolar Cold War.',
  },

  // 1947
  {
    id: 'partition-india-palestine-1947',
    year: 1947,
    countryId: 'in',
    affectedCountries: ['in', 'pk', 'gb', 'ps'],
    coordinates: [28.6139, 77.2090], // نيودلهي
    category: 'milestone',
    severity: 'critical',
    defconLevel: 2,
    titleAr: 'تقسيم شبه القارة الهندية وقرار تقسيم فلسطين 181',
    titleEn: 'Partition of British India (India & Pakistan) & UN Palestine Partition Resolution 181',
    summaryAr: 'استقلال الهند وباكستان كدولتين مستقلتين بعد مجازر تهجير كبرى، وإصدار الجمعية العامة للأمم المتحدة قرار تقسيم فلسطين رقم 181 وسط رفض عربي وإسلامي شامل.',
    summaryEn: 'End of British Raj creating India and Pakistan; UN General Assembly Resolution 181 partition of Palestine.',
    belligerentsAr: 'الهند، باكستان، بريطانيا، والبلدان العربية',
    belligerentsEn: 'India, Pakistan, UK, Arab League, Zionist bodies',
    impactAr: 'اشتعال صراع كشمير المستمر وغرس النواة المباشرة لحرب 1948 في فلسطين.',
    impactEn: 'Instigation of Kashmir conflict and trigger for 1948 Arab-Israeli War.',
  },

  // 1948
  {
    id: 'palestine-nakba-1948',
    year: 1948,
    countryId: 'ps',
    affectedCountries: ['ps', 'eg', 'sy', 'jo', 'iq', 'lb', 'il'],
    coordinates: [31.7683, 35.2137], // فلسطين
    category: 'war',
    severity: 'critical',
    defconLevel: 1,
    titleAr: 'النكبة الفلسطينية واندلاع الحرب العربية الإسرائيلية الأولى',
    titleEn: 'The Palestinian Nakba & 1948 Arab-Israeli War',
    summaryAr: 'إعلان قيام دولة إسرائيل عقب انسحاب القوات البريطانية، ودخول الجيوش العربية (مصر، الأردن، سوريا، العراق، لبنان) للدفاع عن فلسطين، وتهجير أكثر من 750 ألف فلسطيني من ديارهم.',
    summaryEn: 'Proclamation of the State of Israel following British withdrawal, military entry of Arab armies, and displacement of 750,000 Palestinians.',
    belligerentsAr: 'الجيوش العربية وفصائل المقاومة الفلسطينية ضد الميليشيات الصهيونية وجيش الاحتلال',
    belligerentsEn: 'Arab Coalition armies vs Israeli Armed Forces',
    impactAr: 'ترسيخ الوجود الاستيطاني الصهيوني، وتقسيم القدس، وتحول القضية الفلسطينية لقضية العرب المركزية.',
    impactEn: 'Division of Jerusalem, mass refugee crisis, and cementing Arab-Israeli struggle.',
  },

  // 1949
  {
    id: 'nato-founding-1949',
    year: 1949,
    countryId: 'us',
    affectedCountries: ['us', 'gb', 'fr', 'ca', 'it', 'ru'],
    coordinates: [38.9072, -77.0369], // واشنطن
    category: 'treaty',
    severity: 'high',
    defconLevel: 2,
    titleAr: 'تأسيس حلف شمال الأطلسي (الناتو) وتفجير القنبلة الذرية السوفيتية',
    titleEn: 'Founding of NATO & Soviet First Atomic Bomb Test',
    summaryAr: 'توقيع معاهدة واشنطن الدفاعية بين 12 دولة غربية وتفعيل المادة الخامسة للدفاع المشترك، واختبار الاتحاد السوفيتي أول سلاح نووي (RDS-1) لكسر الاحتكار الأمريكي.',
    summaryEn: 'Signing of North Atlantic Treaty by 12 Western nations and Soviet Union successfully detonates its first atomic bomb.',
    belligerentsAr: 'الكتلة الغربية بقيادة أمريكا ضد الاتحاد السوفيتي',
    belligerentsEn: 'Western Bloc vs Soviet Union',
    impactAr: 'تدشين سباق التسلح النووي وتثبيت الستار الحديدي عبر أوروبا.',
    impactEn: 'Institutionalization of Cold War defense architecture and nuclear parity race.',
  },

  // 1950
  {
    id: 'korean-war-1950',
    year: 1950,
    countryId: 'kr',
    affectedCountries: ['kr', 'kp', 'us', 'cn', 'ru'],
    coordinates: [38.0000, 127.0000], // خط عرض 38 - كوريا
    category: 'war',
    severity: 'critical',
    defconLevel: 1,
    titleAr: 'اندلاع الحرب الكورية وتدخل الصين والولايات المتحدة',
    titleEn: 'Outbreak of Korean War & Direct US-China Military Clash',
    summaryAr: 'اجتياح القوات الكورية الشمالية للجنوب، وتدخل قوات الأمم المتحدة بقيادة الولايات المتحدة، ثم دخول الجيش الصيني (متطوعو الشعب) لدعم بيونغ يانغ.',
    summaryEn: 'North Korean troops cross the 38th parallel invading South Korea, prompting US-led UN response and massive Chinese counter-offensive.',
    belligerentsAr: 'كوريا الجنوبية وأمريكا وقوات الأمم المتحدة ضد كوريا الشمالية والصين والاتحاد السوفيتي',
    belligerentsEn: 'South Korea & UN coalition vs North Korea & China',
    impactAr: 'تثبيت تقسيم شبه الجزيرة الكورية عند خط الهدنة المستمر حتى اليوم.',
    impactEn: 'Permanent militarized division along the Demilitarized Zone (DMZ).',
  },

  // 1952
  {
    id: 'egypt-revolution-1952',
    year: 1952,
    countryId: 'eg',
    affectedCountries: ['eg', 'gb'],
    coordinates: [30.0444, 31.2357], // القاهرة
    category: 'revolution',
    severity: 'critical',
    defconLevel: 3,
    titleAr: 'ثورة 23 يوليو في مصر وإسقاط الملكية وصعود جمال عبد الناصر',
    titleEn: 'Egyptian Free Officers Revolution & Fall of Monarchy',
    summaryAr: 'تحرك تنظيم الضباط الأحرار بقيادة اللواء محمد نجيب والبكباشي جمال عبد الناصر، عزل الملك فاروق، وإعلان الجمهورية وإنهاء النفوذ الاستعماري البريطاني.',
    summaryEn: 'Egyptian Free Officers overthrow King Farouk, abolish the monarchy, and inaugurate republican era under Nasser.',
    belligerentsAr: 'تنظيم الضباط الأحرار والشعب المصري ضد القصر الملكي والاحتلال البريطاني',
    belligerentsEn: 'Egyptian Free Officers vs Royal Palace & British presence',
    impactAr: 'صعود القومية العربية ودعم حركات التحرر الوطني في أفريقيا والعالم العربي.',
    impactEn: 'Catalyzed pan-Arab nationalism and anti-colonial movements across Africa and Asia.',
  },

  // 1954
  {
    id: 'algeria-liberation-war-1954',
    year: 1954,
    countryId: 'dz',
    affectedCountries: ['dz', 'fr'],
    coordinates: [36.7538, 3.0588], // الجزائر
    category: 'war',
    severity: 'critical',
    defconLevel: 2,
    titleAr: 'اندلاع ثورة التحرير الجزائرية المظفرة ضد الاستعمار الفرنسي',
    titleEn: 'Outbreak of Algerian War of National Liberation',
    summaryAr: 'إطلاق جبهة التحرير الوطني الجزائرية أولى العمليات العسكرية في الفاتح من نوفمبر، وبدء حرب شعبية استمرت 8 سنوات وقدمت مليوناً ونصف مليون شهيد حتى نيل الاستقلال.',
    summaryEn: 'National Liberation Front (FLN) launches armed insurrection on November 1st, igniting an 8-year liberation war against French colonial rule.',
    belligerentsAr: 'جيش التحرير الوطني الجزائري ضد الجيش الاستعماري الفرنسي',
    belligerentsEn: 'Algerian FLN/ALN vs French Colonial Armed Forces',
    impactAr: 'إسقاط الجمهورية الفرنسية الرابعة وعودة ديغول واستقلال الجزائر عام 1962.',
    impactEn: 'Collapse of French Fourth Republic, return of De Gaulle, and Algerian independence in 1962.',
  },

  // 1956
  {
    id: 'suez-crisis-1956',
    year: 1956,
    countryId: 'eg',
    affectedCountries: ['eg', 'gb', 'fr', 'il', 'ru', 'us'],
    coordinates: [30.5852, 32.2654], // قناة السويس
    category: 'war',
    severity: 'critical',
    defconLevel: 1,
    titleAr: 'تأميم قناة السويس والعدوان الثلاثي على مصر',
    titleEn: 'Nationalization of Suez Canal & Tripartite Aggression against Egypt',
    summaryAr: 'قرار الرئيس جمال عبد الناصر التاريخي بتأميم شركة قناة السويس، وتواطؤ بريطانيا وفرنسا وإسرائيل في عدوان عسكري، انتهى بإنذار سوفيتي أمريكي مشترك وانسحاب المعتدين.',
    summaryEn: 'Nasser nationalizes the Suez Canal Company; Britain, France, and Israel launch tripartite invasion halted by US-Soviet diplomatic ultimatum.',
    belligerentsAr: 'مصر ضد بريطانيا وفرنسا وإسرائيل',
    belligerentsEn: 'Egypt vs Britain, France, and Israel',
    impactAr: 'نهاية مكانة بريطانيا وفرنسا كإمبراطوريتين عظميين، وترسيخ الزعامة الناصرية عالمياً.',
    impactEn: 'Definitive eclipse of British and French imperial hegemony; ascension of US-Soviet dominance.',
  },

  // 1962
  {
    id: 'cuban-missile-crisis-1962',
    year: 1962,
    countryId: 'cu',
    affectedCountries: ['cu', 'us', 'ru'],
    coordinates: [23.1136, -82.3666], // هافانا - كوبا
    category: 'crisis',
    severity: 'critical',
    defconLevel: 1,
    titleAr: 'أزمة الصواريخ الكوبية (حافة الحرب النووية العالمية)',
    titleEn: 'Cuban Missile Crisis & Nuclear Brinkmanship',
    summaryAr: 'نشر الاتحاد السوفيتي صواريخ باليستية نووية في كوبا، وفرض واشنطن حصاراً بحرياً، وحبس العالم أنفاسه لـ 13 يوماً في أقرب لحظة لنهاية الحضارة البشرية بحرب ذرية.',
    summaryEn: 'Soviet ballistic missile deployment in Cuba triggers US naval blockade, bringing superpowers to the threshold of full-scale thermonuclear war.',
    belligerentsAr: 'الولايات المتحدة (جون كينيدي) ضد الاتحاد السوفيتي (نيكيتا خروتشوف) وكوبا (فيدل كاسترو)',
    belligerentsEn: 'USA (Kennedy) vs USSR (Khrushchev) & Cuba (Castro)',
    impactAr: 'سحب الصواريخ مقابل تعهد أمريكي بعدم غزو كوبا وسحب صواريخ جوبيتر من تركيا، وتأسيس الخط الساخن.',
    impactEn: 'Secret deal dismantling Soviet missiles in Cuba and US missiles in Turkey; creation of Moscow-Washington Hotline.',
  },

  // 1967
  {
    id: 'six-day-war-1967',
    year: 1967,
    countryId: 'eg',
    affectedCountries: ['eg', 'sy', 'jo', 'ps', 'il'],
    coordinates: [30.0444, 31.2357], // مصر / سيناء
    category: 'war',
    severity: 'critical',
    defconLevel: 1,
    titleAr: 'حرب 5 يونيو 1967 (النكسة) واحتلال سيناء والجولان والضفة والقدس',
    titleEn: 'Six-Day War: Israeli Occupation of Sinai, Golan, West Bank & Jerusalem',
    summaryAr: 'هجوم جوي إسرائيلي مباغت دمّر سلاح الجو المصري على مدرجاته، واحتلال شبه جزيرة سيناء وقطاع غزة وهضبة الجولان السورية والضفة الغربية والقدس الشرقية بالكامل.',
    summaryEn: 'Preemptive Israeli airstrikes destroy Arab air forces, resulting in occupation of Sinai, Golan Heights, West Bank, Gaza, and East Jerusalem.',
    belligerentsAr: 'مصر وسوريا والأردن ضد جيش الاحتلال الإسرائيلي بدعم غربي',
    belligerentsEn: 'Egypt, Syria, Jordan vs Israeli Armed Forces',
    impactAr: 'صدور قرار مجلس الأمن 242 وبدء حرب الاستنزاف وإعادة بناء القوات المسلحة العربية.',
    impactEn: 'UN Security Council Resolution 242, War of Attrition, and total disruption of Middle Eastern geopolitics.',
  },

  // 1969
  {
    id: 'moon-landing-1969',
    year: 1969,
    countryId: 'us',
    affectedCountries: ['us', 'ru'],
    coordinates: [28.5729, -80.6490], // كينيدي للفضاء
    category: 'milestone',
    severity: 'medium',
    defconLevel: 4,
    titleAr: 'هبوط أبوللو 11 على سطح القمر وحسم سباق الفضاء لصالح أمريكا',
    titleEn: 'Apollo 11 Moon Landing & US Victory in Cold War Space Race',
    summaryAr: 'رواد الفضاء نيل أرمسترونغ وباز ألدرين يطؤون سطح القمر لأول مرة في تاريخ البشرية، محققين هدف الرئيس كينيدي ومتفوقين على البرنامج الفضائي السوفيتي.',
    summaryEn: 'Neil Armstrong and Buzz Aldrin become the first humans to walk on the Moon, concluding the Cold War space race.',
    belligerentsAr: 'سباق الفضاء التكنولوجي والعسكري',
    belligerentsEn: 'US NASA vs Soviet Space Program',
    impactAr: 'قفزة تاريخية في تكنولوجيا الصواريخ الباليستية والأقمار الصناعية والردع الرقمي.',
    impactEn: 'Revolution in satellite reconnaissance, rocketry, and global telecommunications dominance.',
  },

  // 1971
  {
    id: 'uae-federation-1971',
    year: 1971,
    countryId: 'ae',
    affectedCountries: ['ae', 'gb', 'sa'],
    coordinates: [25.2048, 55.2708], // دبي / أبوظبي
    category: 'milestone',
    severity: 'medium',
    defconLevel: 4,
    titleAr: 'تأسيس دولة الإمارات العربية المتحدة بقيادة الشيخ زايد بن سلطان آل نهيان',
    titleEn: 'Founding of the United Arab Emirates Federation under Sheikh Zayed',
    summaryAr: 'إعلان قيام دولة الاتحاد في دار الاتحاد بدبي باتفاق حكام الإمارات السبع عقب انسحاب بريطانيا من شرق السويس، وتولي الشيخ زايد بن سلطان رئاسة الدولة.',
    summaryEn: 'Formal establishment of the UAE federal union following British withdrawal east of Suez, with Sheikh Zayed as founding president.',
    belligerentsAr: 'إعلان اتحادي سيادي سلمي',
    belligerentsEn: 'Peaceful federal state-building',
    impactAr: 'نشوء أكثر النماذج الاقتصادية والاستثمارية والتكنولوجية ديناميكية في الخليج والعالم العربي.',
    impactEn: 'Creation of a premier global trade, logistical, and diplomatic hub in the Arabian Gulf.',
  },

  // 1973
  {
    id: 'october-war-1973',
    year: 1973,
    countryId: 'eg',
    affectedCountries: ['eg', 'sy', 'sa', 'il', 'us', 'ru'],
    coordinates: [30.6852, 32.3254], // خط بارليف / القناة
    category: 'war',
    severity: 'critical',
    defconLevel: 1,
    titleAr: 'حرب العاشر من رمضان / أكتوبر المجيدة وسلاح حظر النفط العربي',
    titleEn: 'October 1973 Yom Kippur War & King Faisal Oil Embargo',
    summaryAr: 'اقتحام القوات المصرية لخط بارليف وتدمير تحصيناته وعبور القناة، وهجوم القوات السورية في الجولان، وتنسيق الملك فيصل لحظر تصدير النفط العربي لدعم المعركة وإجبار واشنطن على التحرك.',
    summaryEn: 'Egyptian forces breach the Bar Lev Line across the Suez Canal while Syria assaults Golan; Saudi King Faisal orchestrates Arab oil embargo reshaping global economics.',
    belligerentsAr: 'الجيشان المصري والسوري مدعومين بقوات عربية ضد الجيش الإسرائيلي وجسره الجوي الأمريكي',
    belligerentsEn: 'Egypt & Syria with Arab coalition support vs Israel backed by US Operation Nickel Grass',
    impactAr: 'تحطيم أسطورة "الجيش الذي لا يقهر"، وقفز أسعار النفط العالمية 4 أضعاف وإجبار إسرائيل على التفاوض للانسحاب من سيناء.',
    impactEn: 'Shattered Israeli myth of invincibility, quadrupled oil prices, and forced Sinai diplomatic disengagement.',
  },

  // 1979
  {
    id: 'iran-revolution-1979',
    year: 1979,
    countryId: 'ir',
    affectedCountries: ['ir', 'us', 'iq', 'sa'],
    coordinates: [35.6892, 51.3890], // طهران
    category: 'revolution',
    severity: 'critical',
    defconLevel: 1,
    titleAr: 'الثورة الإيرانية وسقوط الشاه واحتجاز الرهائن الأمريكيين',
    titleEn: 'Iranian Islamic Revolution, Fall of the Shah & US Hostage Crisis',
    summaryAr: 'سقوط نظام الشاه محمد رضا بهلوي وعودة آية الله الخميني وإعلان الجمهورية الإسلامية، واقتحام السفارة الأمريكية في طهران واحتجاز الدبلوماسيين لـ 444 يوماً.',
    summaryEn: 'Overthrow of the Pahlavi monarchy, return of Ayatollah Khomeini declaring an Islamic Republic, and storming of the US Embassy in Tehran.',
    belligerentsAr: 'قوى الثورة الإيرانية ضد نظام الشاه والولايات المتحدة',
    belligerentsEn: 'Iranian Revolutionaries vs Imperial State of Iran & US Interests',
    impactAr: 'تحول جيوسياسي راديكالي في ميزان قوى الخليج وصعود محور المقاومة والحرب الباردة الإقليمية.',
    impactEn: 'Radical tectonic shift in Middle Eastern security architecture and rupture of US-Iran ties.',
  },
  {
    id: 'soviet-afghan-invasion-1979',
    year: 1979,
    countryId: 'af',
    affectedCountries: ['af', 'ru', 'us', 'pk', 'sa'],
    coordinates: [34.5553, 69.2075], // كابول
    category: 'war',
    severity: 'critical',
    defconLevel: 1,
    titleAr: 'الغزو السوفيتي لأفغانستان وتدشين عصر المجاهدين',
    titleEn: 'Soviet Military Invasion of Afghanistan & Rise of Afghan Mujahideen',
    summaryAr: 'دخول القوات السوفيتية كابول لدعم النظام الشيوعي، وإطلاق وكالة المخابرات المركزية وباكستان والمملكة العربية السعودية أوسع برنامج دعم للمجاهدين الأفغان.',
    summaryEn: 'Soviet Red Army invades Afghanistan, sparking massive US-Saudi-Pakistani covert support program for Afghan Mujahideen.',
    belligerentsAr: 'الاتحاد السوفيتي والحكومة الأفغانية الشيوعية ضد المجاهدين الأفغان',
    belligerentsEn: 'USSR & DRA forces vs Afghan Mujahideen Coalition',
    impactAr: 'استنزاف اقتصادي وعسكري للاتحاد السوفيتي قاد مباشرة لانهياره عام 1991.',
    impactEn: 'Mortal strategic drain accelerating the economic bankruptcy and dissolution of the USSR.',
  },

  // 1980
  {
    id: 'iran-iraq-war-1980',
    year: 1980,
    countryId: 'iq',
    affectedCountries: ['iq', 'ir', 'kw', 'sa'],
    coordinates: [33.3152, 44.3661], // بغداد / شط العرب
    category: 'war',
    severity: 'critical',
    defconLevel: 1,
    titleAr: 'اندلاع الحرب العراقية الإيرانية (حرب الخليج الأولى - قادسية صدام)',
    titleEn: 'Outbreak of Iran-Iraq War (First Gulf War)',
    summaryAr: 'اجتياح القوات العراقية للحدود الإيرانية على خلفية نزاع شط العرب والتهديدات الثورية، لتندلع أطول حرب تقليدية في القرن العشرين استمرت 8 سنوات مخلفة مليون ضحية.',
    summaryEn: 'Iraqi armed forces cross Iranian frontier over Shatt al-Arab waterway and revolutionary threats, launching an 8-year war of attrition.',
    belligerentsAr: 'العراق (صدام حسين) ضد إيران (الخميني)',
    belligerentsEn: 'Republic of Iraq vs Islamic Republic of Iran',
    impactAr: 'حرب الناقلات في الخليج، استنزاف مقدرات البلدين، ومقدمة لأزمة غزو الكويت.',
    impactEn: 'Tanker War in the Persian Gulf, regional militarization, and direct prelude to the 1990 Kuwait crisis.',
  },

  // 1981
  {
    id: 'gcc-founding-1981',
    year: 1981,
    countryId: 'ae',
    affectedCountries: ['sa', 'ae', 'kw', 'qa', 'om', 'bh'],
    coordinates: [24.4539, 54.3773], // أبوظبي
    category: 'treaty',
    severity: 'high',
    defconLevel: 3,
    titleAr: 'تأسيس مجلس التعاون لدول الخليج العربية في قمة أبوظبي',
    titleEn: 'Establishment of the Gulf Cooperation Council (GCC) in Abu Dhabi',
    summaryAr: 'اتفاق قادة السعودية والإمارات والكويت وقطر وعمان والبحرين على إنشاء منظومة إقليمية أمنية واقتصادية متكاملة لمواجهة تداعيات الحرب العراقية الإيرانية وحماية المكتسبات.',
    summaryEn: 'Six Gulf monarchies sign the GCC Charter in Abu Dhabi establishing collective security and economic integration body amidst regional turmoil.',
    belligerentsAr: 'تكتل دفاعي وسياسي ودبلوماسي إقليمي',
    belligerentsEn: 'Regional diplomatic and security alliance',
    impactAr: 'تشكيل قوة درع الجزيرة، وتنسيق أسواق الطاقة، وتحقيق أطول تكتل عربي مستقر.',
    impactEn: 'Peninsula Shield Force creation, OPEC energy coordination, and enduring Arab multilateral stability.',
  },

  // 1982
  {
    id: 'israel-invasion-lebanon-1982',
    year: 1982,
    countryId: 'lb',
    affectedCountries: ['lb', 'ps', 'sy', 'il'],
    coordinates: [33.8938, 35.5018], // بيروت
    category: 'war',
    severity: 'critical',
    defconLevel: 1,
    titleAr: 'الاجتياح الإسرائيلي للبنان وحصار بيروت وخروج منظمة التحرير',
    titleEn: 'Israeli Invasion of Lebanon, Siege of Beirut & PLO Departure',
    summaryAr: 'عملية "سلامة الجليل" الإسرائيلية واجتياح لبنان وصولاً إلى أول عاصمة عربية تُحاصر، وارتكاب مجزرة صبرا وشاتيلا، وخروج الفدائيين الفلسطينيين إلى تونس، وبروز حزب الله.',
    summaryEn: 'Full Israeli military invasion of Lebanon besieging Beirut; Sabra and Shatila massacre, evacuation of PLO to Tunis, and emergence of Hezbollah.',
    belligerentsAr: 'جيش الاحتلال الإسرائيلي ضد الفصائل الفلسطينية والجيش السوري والمقاومة اللبنانية',
    belligerentsEn: 'Israeli Armed Forces vs PLO, Syrian Forces, and Lebanese Resistance',
    impactAr: 'تغيير الخارطة السياسية اللبنانية، صعود المقاومة المسلحة، وتثبيت النفوذ السوري.',
    impactEn: 'Transformation of Lebanese civil dynamics and birth of Hezbollah armed movement.',
  },

  // 1987
  {
    id: 'first-intifada-1987',
    year: 1987,
    countryId: 'ps',
    affectedCountries: ['ps', 'il'],
    coordinates: [31.5000, 34.4667], // غزة والضفة
    category: 'revolution',
    severity: 'critical',
    defconLevel: 2,
    titleAr: 'اندلاع الانتفاضة الفلسطينية الأولى (انتفاضة الحجارة)',
    titleEn: 'Outbreak of the First Palestinian Intifada (Stone Intifada)',
    summaryAr: 'انتفاضة شعبية فلسطينية عارمة انطلقت من مخيم جباليا بغزة وعمّت كافة مدن الضفة والقدس رفضاً للاحتلال الإسرائيلي، وإعلان تأسيس حركة حماس.',
    summaryEn: 'Mass grassroots civil uprising igniting in Jabalia refugee camp in Gaza and spreading across West Bank and Jerusalem; founding of Hamas.',
    belligerentsAr: 'الشعب الفلسطيني وفصائله ضد قوات الاحتلال الإسرائيلي',
    belligerentsEn: 'Palestinian civilian population vs Israeli Military Forces',
    impactAr: 'إعلان وثيقة الاستقلال الفلسطيني في الجزائر 1988، وتدويل القضية نحو مؤتمر مدريد.',
    impactEn: '1988 Algiers Palestinian Declaration of Independence and path to Madrid Peace Conference.',
  },

  // 1990
  {
    id: 'kuwait-invasion-1990',
    year: 1990,
    countryId: 'kw',
    affectedCountries: ['kw', 'iq', 'sa', 'us', 'gb', 'eg', 'sy'],
    coordinates: [29.3759, 47.9774], // الكويت
    category: 'war',
    severity: 'critical',
    defconLevel: 1,
    titleAr: 'الغزو العراقي لدولة الكويت وحشد قوات التحالف الدولي (درع الصحراء)',
    titleEn: 'Iraqi Invasion of Kuwait & Operation Desert Shield Deployment',
    summaryAr: 'اجتياح القوات العراقية بقيادة صدام حسين دولة الكويت فجر 2 أغسطس وإعلان ضمها قسراً، وحشد المملكة العربية السعودية والولايات المتحدة تحالفاً دولياً من 35 دولة لتحريرها.',
    summaryEn: 'Iraqi military invades and annexes Kuwait; Saudi Arabia and US assemble a 35-nation military coalition in Operation Desert Shield.',
    belligerentsAr: 'النظام العراقي ضد دولة الكويت والتحالف الدولي بقيادة واشنطن والرياض',
    belligerentsEn: 'Baathist Iraq vs State of Kuwait and UN Coalition led by US & Saudi Arabia',
    impactAr: 'أكبر زلزال جيوسياسي عربي مزّق التضامن الإقليمي وفرض حصاراً خانقاً على العراق.',
    impactEn: 'Profound fracture of Arab collective security and imposition of historic UN sanctions.',
  },

  // 1991
  {
    id: 'desert-storm-liberation-1991',
    year: 1991,
    countryId: 'kw',
    affectedCountries: ['kw', 'iq', 'sa', 'us', 'gb', 'eg', 'sy', 'fr'],
    coordinates: [29.3759, 47.9774], // الكويت
    category: 'war',
    severity: 'critical',
    defconLevel: 1,
    titleAr: 'عاصفة الصحراء وتحرير الكويت وسقوط الاتحاد السوفيتي',
    titleEn: 'Operation Desert Storm: Liberation of Kuwait & Soviet Union Dissolution',
    summaryAr: 'انطلاق العمليات العسكرية الجوية والبرية لتحرير الكويت ودحر القوات العراقية في 100 ساعة، وتفكك الاتحاد السوفيتي رسمياً في ديسمبر لتبدأ حقبة القطب الواحد الأمريكي.',
    summaryEn: 'Allied forces liberate Kuwait in 100-hour ground offensive; Soviet Union officially dissolves in December, ushering in the unipolar Pax Americana.',
    belligerentsAr: 'قوات التحالف الدولي (35 دولة) ضد الجيش العراقي',
    belligerentsEn: 'Coalition of 35 nations vs Armed Forces of Iraq',
    impactAr: 'تحرير الكويت، فرض مناطق حظر الطيران على العراق، وهيمنة عسكرية أمريكية كاملة.',
    impactEn: 'Full restoration of Kuwaiti sovereignty, Iraqi no-fly zones, and uncontested US global hegemony.',
  },

  // 1993
  {
    id: 'oslo-accords-1993',
    year: 1993,
    countryId: 'ps',
    affectedCountries: ['ps', 'il', 'us', 'no'],
    coordinates: [38.8977, -77.0365], // البيت الأبيض / واشنطن
    category: 'treaty',
    severity: 'high',
    defconLevel: 3,
    titleAr: 'توقيع اتفاقيات أوسلو وتأسيس السلطة الوطنية الفلسطينية',
    titleEn: 'Signing of Oslo Accords & Creation of Palestinian National Authority',
    summaryAr: 'مصافحة تاريخية بين ياسر عرفات وإسحاق رابين بحديقة البيت الأبيض برعاية بيل كلينتون، وإقرار الحكم الذاتي الانتقالي في غزة وأريحا أولاً.',
    summaryEn: 'Historic handshake between Yasser Arafat and Yitzhak Rabin on White House lawn establishing transitional Palestinian self-rule.',
    belligerentsAr: 'منظمة التحرير الفلسطينية وحكومة إسرائيل برعاية أمريكية نرويجية',
    belligerentsEn: 'PLO and Government of Israel brokered by US and Norway',
    impactAr: 'عودة قيادة المنظمة إلى الداخل الفلسطيني، وبدء مسار السلام المتعثر.',
    impactEn: 'Return of Palestinian leadership from exile and establishment of the Palestinian Authority.',
  },

  // 2001
  {
    id: 'sept-11-attacks-2001',
    year: 2001,
    countryId: 'us',
    affectedCountries: ['us', 'af', 'sa', 'gb'],
    coordinates: [40.7128, -74.0060], // نيويورك - مانهاتن
    category: 'crisis',
    severity: 'critical',
    defconLevel: 1,
    titleAr: 'هجمات 11 سبتمبر الإرهابية وإعلان الحرب الدولية على الإرهاب',
    titleEn: 'September 11 Terrorist Attacks & Launch of Global War on Terror',
    summaryAr: 'اختطاف 4 طائرات مدنية واستهداف برجي التجارة العالمي بنيويورك والبنتاغون بواشنطن مما أوقع نحو 3000 قتيل، وتفعيل المادة الخامسة للناتو وغزو أفغانستان.',
    summaryEn: 'Al-Qaeda terrorists hijack four airliners striking World Trade Center and Pentagon; NATO triggers Article 5 launching invasion of Afghanistan.',
    belligerentsAr: 'تنظيم القاعدة ضد الولايات المتحدة والمجتمع الدولي',
    belligerentsEn: 'Al-Qaeda vs United States and Western Allies',
    impactAr: 'إعادة هيكلة الأمن القومي العالمي، احتلال أفغانستان، وإطلاق القوانين الأمنية الصارمة.',
    impactEn: 'Transformation of global airport/cyber security architectures and 20-year Afghan War.',
  },

  // 2003
  {
    id: 'iraq-invasion-2003',
    year: 2003,
    countryId: 'iq',
    affectedCountries: ['iq', 'us', 'gb', 'ir'],
    coordinates: [33.3152, 44.3661], // بغداد - الفردوس
    category: 'war',
    severity: 'critical',
    defconLevel: 1,
    titleAr: 'غزو العراق وإسقاط نظام صدام حسين وحل مؤسسات الدولة',
    titleEn: 'US-led Invasion of Iraq, Fall of Baghdad & Regime Collapse',
    summaryAr: 'شن الولايات المتحدة وبريطانيا حرب "الصدمة والترويع" واجتياح بغداد دون تفويض أممي، إسقاط تمثال صدام في ساحة الفردوس، وقرار بول بريمر بحل الجيش العراقي.',
    summaryEn: 'US and British military coalition invades Iraq without UN mandate; fall of Baghdad, capture of Saddam Hussein, and dissolution of Iraqi army.',
    belligerentsAr: 'قوات التحالف الأمريكي البريطاني ضد الجيش العراقي',
    belligerentsEn: 'US-UK Coalition vs Armed Forces of Baathist Iraq',
    impactAr: 'تفكك الدولة العراقية، اندلاع العنف الطائفي، صعود النفوذ الإيراني، وتمهيد الطريق لظهور تنظيم داعش.',
    impactEn: 'State failure in Iraq, rise of sectarian insurgency, Iranian strategic ascendancy, and precursor to ISIS.',
  },

  // 2006
  {
    id: 'lebanon-war-2006',
    year: 2006,
    countryId: 'lb',
    affectedCountries: ['lb', 'il', 'ir', 'sy'],
    coordinates: [33.2721, 35.2038], // جنوب لبنان
    category: 'war',
    severity: 'critical',
    defconLevel: 1,
    titleAr: 'حرب تموز / يوليو 2006 في لبنان وصدور قرار مجلس الأمن 1701',
    titleEn: '2006 Lebanon War & UN Security Council Resolution 1701',
    summaryAr: 'اندلاع حرب استمرت 34 يوماً بين حزب الله والجيش الإسرائيلي إثر عملية أسر جنديين، شملت قصفاً مدمراً للبنية التحتية اللبنانية وإطلاق آلاف الصواريخ على شمال إسرائيل.',
    summaryEn: '34-day armed conflict between Hezbollah and Israeli military following border raid; widespread airstrikes and rocket artillery barrages.',
    belligerentsAr: 'حزب الله والمقاومة اللبنانية ضد الجيش الإسرائيلي',
    belligerentsEn: 'Hezbollah vs Israel Defense Forces',
    impactAr: 'تثبيت قواعد الاشتباك والردع، ونشر قوات اليونيفيل المعززة والجيش اللبناني جنوب الليطاني.',
    impactEn: 'UNIFIL expansion under Resolution 1701 and cementing mutual deterrence doctrine.',
  },

  // 2011
  {
    id: 'arab-spring-2011',
    year: 2011,
    countryId: 'tn',
    affectedCountries: ['tn', 'eg', 'ly', 'sy', 'ye', 'bh'],
    coordinates: [36.8065, 10.1815], // تونس
    category: 'revolution',
    severity: 'critical',
    defconLevel: 1,
    titleAr: 'اندلاع ثورات الربيع العربي وسقوط أنظمة تونس ومصر وليبيا واليمن',
    titleEn: 'Arab Spring Revolutions & Regime Topples in Tunisia, Egypt, Libya & Yemen',
    summaryAr: 'انطلاق موجة احتجاجات عارمة من تونس بعد حرق البوعزيزي لنفسه، امتدت لميدان التحرير بمصر وسقوط حسني مبارك، وتدخل الناتو في ليبيا ومقتل القذافي، واندلاع الحرب في سوريا واليمن.',
    summaryEn: 'Wave of mass revolutionary demonstrations sweeps Middle East and North Africa, toppling long-standing regimes in Tunisia, Egypt, Libya, and Yemen, triggering wars in Syria and Libya.',
    belligerentsAr: 'الشعوب والمحتجون ضد الأنظمة الحاكمة والفصائل المسلحة',
    belligerentsEn: 'Protest movements vs State Regimes and Militias',
    impactAr: 'أكبر إعادة تشكيل للسياسة العربية منذ الحرب العالمية الأولى، وصعود حروب الوكالة.',
    impactEn: 'Profound realignment of Arab governance, rise of civil proxy conflicts, and refugee crises.',
  },

  // 2014
  {
    id: 'crimea-isis-2014',
    year: 2014,
    countryId: 'ua',
    affectedCountries: ['ua', 'ru', 'iq', 'sy', 'us'],
    coordinates: [44.9521, 34.1024], // القرم / سيفاستوبول
    category: 'war',
    severity: 'critical',
    defconLevel: 1,
    titleAr: 'ضم روسيا للقرم واجتياح داعش للموصل والرقة وتشكيل التحالف الدولي',
    titleEn: 'Russian Annexation of Crimea & ISIS Blitz across Mosul and Raqqa',
    summaryAr: 'سيطرة روسيا على شبه جزيرة القرم واستفتاء ضمها، تزامناً مع انهيار الجيش العراقي في الموصل وسيطرة تنظيم داعش على ثلث أراضي العراق وسوريا وإعلان "الخلافة".',
    summaryEn: 'Russia seizes Crimea following Ukrainian revolution; ISIS conquers Mosul declaring a caliphate across Iraq and Syria, prompting global coalition.',
    belligerentsAr: 'روسيا ضد أوكرانيا والغرب، والتحالف الدولي (80 دولة) ضد تنظيم داعش',
    belligerentsEn: 'Russia vs Ukraine/West; Global Coalition vs ISIS',
    impactAr: 'بدء فرض العقوبات الغربية على روسيا، وتدشين عصر الحرب الهجينة وتحرير الموصل.',
    impactEn: 'Sanctions era against Moscow, massive counter-terror campaign, and regional military re-entry.',
  },

  // 2015
  {
    id: 'yemen-decisive-storm-2015',
    year: 2015,
    countryId: 'ye',
    affectedCountries: ['ye', 'sa', 'ae', 'ir'],
    coordinates: [15.3694, 44.1910], // صنعاء / عدن
    category: 'war',
    severity: 'critical',
    defconLevel: 1,
    titleAr: 'انطلاق عاصفة الحزم لدعم الشرعية في اليمن والاتفاق النووي الإيراني (JCPOA)',
    titleEn: 'Operation Decisive Storm in Yemen & Iran Nuclear Joint Comprehensive Plan (JCPOA)',
    summaryAr: 'قيادة المملكة العربية السعودية تحالفاً عربياً لمنع سقوط عدن واستعادة الشرعية ضد الحوثيين، تزامناً مع توقيع مجموعة 5+1 الاتفاق النووي التاريخي مع إيران بفيينا.',
    summaryEn: 'Saudi-led Arab coalition launches Decisive Storm in Yemen; P5+1 powers sign landmark nuclear pact (JCPOA) with Iran in Vienna.',
    belligerentsAr: 'التحالف العربي والجيش اليمني ضد جماعة الحوثي المدعومة من طهران',
    belligerentsEn: 'Arab Coalition & Yemeni Government vs Houthi Movement',
    impactAr: 'تأمين الملاحة في باب المندب، واشتداد الصراع الإقليمي حول الصواريخ الباليستية والمسيّرات.',
    impactEn: 'Securing Bab el-Mandeb strait and transformation of drone/missile warfare doctrines.',
  },

  // 2020
  {
    id: 'covid-abraham-accords-2020',
    year: 2020,
    countryId: 'us',
    affectedCountries: ['ae', 'bh', 'sd', 'ma', 'il', 'us', 'cn'],
    coordinates: [38.8977, -77.0365], // واشنطن / كوفيد العالمي
    category: 'milestone',
    severity: 'critical',
    defconLevel: 2,
    titleAr: 'جائحة كوفيد-19 العالمية وتوقيع الاتفاقيات الإبراهيمية للسلام',
    titleEn: 'Global COVID-19 Pandemic Lockdown & Signing of Abraham Accords',
    summaryAr: 'شلل اقتصادي عالمي وإغلاق الحدود بسبب تفشي فيروس كورونا، ورعاية واشنطن توقيع الاتفاقيات الإبراهيمية بين إسرائيل والإمارات والبحرين والمغرب والسودان.',
    summaryEn: 'Worldwide economic shutdown from coronavirus; diplomatic normalization accords signed between Israel, UAE, Bahrain, Morocco, and Sudan.',
    belligerentsAr: 'تحدي صحي واقتصادي دولي وتطبيع دبلوماسي',
    belligerentsEn: 'Global biological crisis and Middle East normalization pacts',
    impactAr: 'انهيار أسعار النفط اللحظي إلى ما دون الصفر، وإعادة هندسة سلاسل الإمداد الطبية واللوجستية.',
    impactEn: 'Historic negative oil price shock and strategic realignment of Gulf diplomatic relationships.',
  },

  // 2022
  {
    id: 'ukraine-war-2022',
    year: 2022,
    countryId: 'ua',
    affectedCountries: ['ua', 'ru', 'us', 'eu', 'by'],
    coordinates: [50.4501, 30.5234], // كييف
    category: 'war',
    severity: 'critical',
    defconLevel: 1,
    titleAr: 'اندلاع الحرب الروسية الأوكرانية الشاملة وزلزال الطاقة العالمي',
    titleEn: 'Full-Scale Russian Invasion of Ukraine & Global Energy Sanctions Crisis',
    summaryAr: 'شن القوات الروسية أكبر هجوم عسكري بري وجوي في أوروبا منذ 1945، تجميد 300 مليار دولار من أصول البنك المركزي الروسي، وقطع إمدادات الغاز نورد ستريم، وإعادة تسليح الناتو.',
    summaryEn: 'Russia launches full-scale invasion of Ukraine; West imposes unprecedented sanctions freezing $300B in Russian foreign reserves.',
    belligerentsAr: 'روسيا الاتحادية وبيلاروسيا ضد أوكرانيا بدعم حلف الناتو',
    belligerentsEn: 'Russian Federation vs Ukraine backed by NATO Alliance',
    impactAr: 'تفكك أمن الطاقة الأوروبي، تضخم قياسي عالمي، وطلب انضمام فنلندا والسويد للناتو.',
    impactEn: 'Fracturing of European security architecture, global energy shocks, and end of Nordic neutrality.',
  },

  // 2023
  {
    id: 'gaza-war-sudan-2023',
    year: 2023,
    countryId: 'ps',
    affectedCountries: ['ps', 'il', 'lb', 'ye', 'sd', 'us', 'ir'],
    coordinates: [31.5000, 34.4667], // قطاع غزة
    category: 'war',
    severity: 'critical',
    defconLevel: 1,
    titleAr: 'معركة طوفان الأقصى وحرب غزة واندلاع صراع السودان',
    titleEn: 'Operation Al-Aqsa Flood, Gaza War Escalation & Sudan Civil Conflict',
    summaryAr: 'اقتحام فصائل المقاومة الفلسطينية غلاف غزة في 7 أكتوبر، وشن الاحتلال الإسرائيلي حرب إبادة وتدمير شامل على القطاع، واشتعال جبهات الإسناد في لبنان والبحر الأحمر وسوريا والعراق، متزامناً مع انفجار حرب السودان بين الجيش والدعم السريع.',
    summaryEn: 'Hamas launches October 7 assault; Israel initiates catastrophic bombardment and ground invasion of Gaza; regional escalations ignite in Red Sea and Lebanon; Sudan civil war explodes.',
    belligerentsAr: 'المقاومة الفلسطينية ومحور الإسناد ضد جيش الاحتلال الإسرائيلي والتحالف الأمريكي؛ والجيش السوداني ضد الدعم السريع',
    belligerentsEn: 'Palestinian resistance & regional axis vs Israel & US Navy; Sudanese Armed Forces vs Rapid Support Forces',
    impactAr: 'إغلاق فعلي لمضيق باب المندب أمام سفن إسرائيل، ورفع دعوى الإبادة الجماعية أمام محكمة العدل الدولية، وتشريد 12 مليون سوداني.',
    impactEn: 'Red Sea maritime transit halted, South Africa ICJ genocide indictment, and world largest displacement crisis in Sudan.',
  },

  // 2024
  {
    id: 'red-sea-brics-2024',
    year: 2024,
    countryId: 'ye',
    affectedCountries: ['ye', 'us', 'gb', 'sa', 'ae', 'eg', 'ir', 'il', 'ru'],
    coordinates: [12.5898, 43.3361], // مضيق باب المندب
    category: 'war',
    severity: 'critical',
    defconLevel: 1,
    titleAr: 'أزمة الملاحة في البحر الأحمر وتوسع بريكس+ التاريخي',
    titleEn: 'Red Sea Chokepoint Missile Strikes & Historic BRICS+ Expansion',
    summaryAr: 'استهداف جماعة الحوثي للسفن التجارية والبوارج الغربية في البحر الأحمر وباب المندب، وتحويل التجارة الدولية لطريق رأس الرجاء الصالح، وتوسع تجمع بريكس رسمياً ليضم السعودية والإمارات ومصر وإيران وإثيوبيا.',
    summaryEn: 'Houthi missile and drone strikes against maritime trade force global rerouting around Cape of Good Hope; BRICS formally admits Saudi Arabia, UAE, Egypt, Iran, and Ethiopia.',
    belligerentsAr: 'الحوثيون ضد تحالف حارس الازدهار الأمريكي البريطاني؛ وتكتل بريكس+ الاقتصادي',
    belligerentsEn: 'Ansar Allah (Houthis) vs Operation Prosperity Guardian US-UK coalition; BRICS+ Global South bloc',
    impactAr: 'انخفاض إيرادات قناة السويس 60%، وصعود مدفوعات التجارة بالعملات المحلية للالتفاف على الدولار.',
    impactEn: '60% drop in Suez Canal transit revenue and surge in de-dollarized bilateral settlements.',
  },

  // 2025
  {
    id: 'multipolar-escalation-2025',
    year: 2025,
    countryId: 'cn',
    affectedCountries: ['cn', 'tw', 'us', 'ph', 'jp', 'ru', 'ua'],
    coordinates: [23.6978, 120.9605], // مضيق تايوان
    category: 'crisis',
    severity: 'critical',
    defconLevel: 2,
    titleAr: 'مناورات إغلاق مضيق تايوان وسباق التفوق في الذكاء الاصطناعي السيادي',
    titleEn: 'Taiwan Strait Full Blockade Drills & Sovereign AI Hypersonic Race',
    summaryAr: 'تنفيذ الجيش الصيني أوسع مناورات عسكرية مشتركة لحصار جزيرة تايوان، وتسارع سباق الذكاء الاصطناعي العسكري والصواريخ الفرط صوتية بين واشنطن وبكين وموسكو.',
    summaryEn: 'Chinese PLA conducts unprecedented joint encirclement drills around Taiwan; intensifying strategic competition in military AI and hypersonic arsenals.',
    belligerentsAr: 'الصين ضد تايوان والتحالف الأمريكي الياباني الفلبيني',
    belligerentsEn: 'China vs Taiwan, US, Japan & Philippines alliance',
    impactAr: 'إعادة توطين صناعة الرقائق الدقيقة في الغرب وتعزيز الدفاعات الجوية في بحر الصين.',
    impactEn: 'Semiconductor supply chain decoupling and militarization of Indo-Pacific chokepoints.',
  },

  // 2026 (الواقع الراهن)
  {
    id: 'present-world-order-2026',
    year: 2026,
    countryId: 'sa',
    affectedCountries: ['sa', 'ae', 'qa', 'kw', 'om', 'bh', 'eg', 'us', 'cn', 'ru', 'ir'],
    coordinates: [24.7136, 46.6753], // الرياض / الشرق الأوسط
    category: 'milestone',
    severity: 'critical',
    defconLevel: 2,
    titleAr: 'عصر التعددية القطبية، الذكاء الاصطناعي السيادي، ومشاريع القرن الاستثمارية',
    titleEn: '2026 Multipolar Reality: Sovereign AI, Megaprojects & Defense Dominance',
    summaryAr: 'ترسيخ عالم متعدد الأقطاب بقيادة الرياض وبكين وموسكو وواشنطن، إطلاق أكبر مشاريع الاستثمار السيادي (نيوم، خطوط الربط القاري)، وتحقيق ميزانيات دفاعية عالمية قياسية تتجاوز 2.48 تريليون دولار.',
    summaryEn: 'Full multipolar consolidation with strategic middle powers leading; record global defense expenditure surpassing $2.48T alongside sovereign AI compute deployments.',
    belligerentsAr: 'تعددية أقطاب استراتيجية وتنافس تكنولوجي ونقدي شامل',
    belligerentsEn: 'Global multipolar balancing: Western Bloc vs BRICS+ and sovereign energy corridors',
    impactAr: 'إعادة كتابة قواعد التجارة العالمية، أمن الممرات المائية الحيوية، والتحول للطاقة النظيفة والرقائق.',
    impactEn: 'Structural re-engineering of trade routes, chokepoint defense grids, and green-tech hegemony.',
  },
];

/**
 * الحصول على كافة أحداث سنة معينة، أو الأحداث الأكثر ارتباطاً بالحقبة إذا كانت السنة بين محطتين
 */
export function getTimelineEventsForYear(targetYear) {
  const yr = Number(targetYear) || 2026;
  
  // 1. فحص وجود أحداث مطابقة تماماً لهذه السنة
  const exactMatches = TIMELINE_YEAR_EVENTS.filter((e) => e.year === yr);
  if (exactMatches.length > 0) {
    return exactMatches;
  }

  // 2. إذا لم تتطابق السنة مباشرة، البحث عن أقرب أحداث نشطة في تلك الحقبة (ضمن نافذة ± 3 سنوات)
  const nearbyEvents = TIMELINE_YEAR_EVENTS.filter((e) => Math.abs(e.year - yr) <= 3);
  if (nearbyEvents.length > 0) {
    return nearbyEvents;
  }

  // 3. كحل مرن دقيق، إرجاع أقرب حدث زمني مع وسمه بسياق الحقبة
  let closest = TIMELINE_YEAR_EVENTS[0];
  let minDiff = Math.abs(TIMELINE_YEAR_EVENTS[0].year - yr);
  for (const ev of TIMELINE_YEAR_EVENTS) {
    const diff = Math.abs(ev.year - yr);
    if (diff < minDiff) {
      minDiff = diff;
      closest = ev;
    }
  }

  return [{
    ...closest,
    yearContext: yr,
    summaryAr: `${closest.summaryAr} (أقرب مسرح نشط لحقبة عام ${yr}).`,
    summaryEn: `${closest.summaryEn} (Active epicenter for era around ${yr}).`,
  }];
}

/**
 * جلب مؤشر التوتر العالمي (DEFCON Index) للسنة المختارة
 */
export function getDefconForYear(year) {
  const yr = Number(year) || 2026;
  if ([1914, 1915, 1916, 1917, 1918, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1962, 1973, 2022, 2023, 2024].includes(yr)) {
    return {
      level: 1,
      nameAr: 'DEFCON 1 — أقصى درجات التأهب (حرب عالمية / نووية)',
      nameEn: 'DEFCON 1 — Maximum Readiness (Global Conflict)',
      color: '#ef4444',
      bg: 'bg-rose-500/20 text-rose-300 border-rose-500/50',
    };
  }
  if ([1948, 1950, 1956, 1967, 1979, 1980, 1982, 1990, 1991, 2001, 2003, 2011, 2014, 2025, 2026].includes(yr)) {
    return {
      level: 2,
      nameAr: 'DEFCON 2 — استنفار حربي إقليمي حرج',
      nameEn: 'DEFCON 2 — Critical Armed Hostilities',
      color: '#f97316',
      bg: 'bg-orange-500/20 text-orange-300 border-orange-500/50',
    };
  }
  if (yr < 1990 || [1993, 2006, 2015, 2020].includes(yr)) {
    return {
      level: 3,
      nameAr: 'DEFCON 3 — تعبئة عسكرية وحروب بالوكالة',
      nameEn: 'DEFCON 3 — High Mobilization & Proxy Wars',
      color: '#f59e0b',
      bg: 'bg-amber-500/20 text-amber-300 border-amber-500/50',
    };
  }
  return {
    level: 4,
    nameAr: 'DEFCON 4 — توتر استخباري وتنافس اقتصادي',
    nameEn: 'DEFCON 4 — Heightened Intelligence Watch',
    color: '#0ea5e9',
    bg: 'bg-sky-500/20 text-sky-300 border-sky-500/50',
  };
}

/**
 * الحصول على كافة الأحداث التاريخية الميدانية لدولة معينة عبر التاريخ
 */
export function getCountryTimelineYearEvents(countryId) {
  if (!countryId) return [];
  const cid = countryId.toLowerCase().trim();
  return TIMELINE_YEAR_EVENTS.filter(
    (e) => e.countryId === cid || (e.affectedCountries && e.affectedCountries.includes(cid))
  ).sort((a, b) => a.year - b.year);
}
