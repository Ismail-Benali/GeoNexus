/**
 * سجل قادة وملوك ورؤساء دول العالم
 * يتضمن الصور الرسمية المعتمدة، الألقاب، وسجل التعاقب السياسي (الملوك والرؤساء السابقين والمحتملين)
 */

export const LEADERS_REGISTRY = {
  // المملكة العربية السعودية
  sa: {
    current: {
      nameAr: 'الملك سلمان بن عبد العزيز آل سعود',
      nameEn: 'King Salman bin Abdulaziz Al Saud',
      titleAr: 'خادم الحرمين الشريفين، ملك المملكة العربية السعودية',
      titleEn: 'Custodian of the Two Holy Mosques, King of Saudi Arabia',
      officeAr: 'الملك والقائد الأعلى للقوات العسكرية',
      officeEn: 'King & Supreme Commander of the Armed Forces',
      since: 2015,
      type: 'monarch',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Salman_of_Saudi_Arabia_-_2020_%2849563590728%29_%28cropped%29.jpg/330px-Salman_of_Saudi_Arabia_-_2020_%2849563590728%29_%28cropped%29.jpg',
      partyAr: 'الأسرة المالكة (آل سعود)',
      partyEn: 'House of Saud',
    },
    succession: [
      {
        nameAr: 'الأمير محمد بن سلمان آل سعود',
        nameEn: 'Crown Prince Mohammed bin Salman',
        titleAr: 'ولي العهد، رئيس مجلس الوزراء',
        titleEn: 'Crown Prince & Prime Minister',
        since: 2017,
        type: 'crown_prince',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/%D8%A7%D9%84%D8%B5%D9%88%D8%B1%D8%A9_%D8%A7%D9%84%D8%B1%D8%B3%D9%85%D9%8A%D8%A9_%D9%84%D9%84%D8%A3%D9%85%D9%8A%D8%B1_%D9%85%D8%AD%D9%85%D8%AF_%D8%A8%D9%86_%D8%B3%D9%84%D9%85%D8%A7%D9%86_%D8%A8%D9%86_%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2_%D8%A2%D9%84_%D8%B3%D8%B9%D9%88%D8%AF_%28%D9%85%D9%82%D8%B5%D9%88%D8%B5%D8%A9%29.jpg/330px-%D8%A7%D9%84%D8%B5%D9%88%D8%B1%D8%A9_%D8%A7%D9%84%D8%B1%D8%B3%D9%85%D9%8A%D8%A9_%D9%84%D9%84%D8%A3%D9%85%D9%8A%D8%B1_%D9%85%D8%AD%D9%85%D8%AF_%D8%A8%D9%86_%D8%B3%D9%84%D9%85%D8%A7%D9%86_%D8%A8%D9%86_%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2_%D8%A2%D9%84_%D8%B3%D8%B9%D9%88%D8%AF_%28%D9%85%D9%82%D8%B5%D9%88%D8%B5%D8%A9%29.jpg',
      },
      {
        nameAr: 'الملك عبد الله بن عبد العزيز (تاريخي)',
        nameEn: 'King Abdullah bin Abdulaziz (Historical)',
        titleAr: 'ملك المملكة العربية السعودية (2005 - 2015)',
        titleEn: 'King of Saudi Arabia (2005 - 2015)',
        since: 2005,
        type: 'monarch',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/King_Abdullah_bin_Abdulaziz_in_2002.jpg/330px-King_Abdullah_bin_Abdulaziz_in_2002.jpg',
      },
    ],
  },

  // المملكة المتحدة
  gb: {
    current: {
      nameAr: 'الملك تشارلز الثالث',
      nameEn: 'King Charles III',
      titleAr: 'ملك المملكة المتحدة ودول الكومنولث',
      titleEn: 'King of the United Kingdom and Commonwealth realms',
      officeAr: 'العاهل البريطاني ورئيس الدولة',
      officeEn: 'British Monarch & Head of State',
      since: 2022,
      type: 'monarch',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/King_Charles_III_%28July_2023%29.jpg/330px-King_Charles_III_%28July_2023%29.jpg',
      partyAr: 'الأسرة المالكة (بيت وندسور)',
      partyEn: 'House of Windsor',
    },
    succession: [
      {
        nameAr: 'كير ستارمر',
        nameEn: 'Keir Starmer',
        titleAr: 'رئيس وزراء المملكة المتحدة',
        titleEn: 'Prime Minister of the United Kingdom',
        since: 2024,
        type: 'pm',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Keir_Starmer_official_portrait_%28cropped%29.jpg/330px-Keir_Starmer_official_portrait_%28cropped%29.jpg',
      },
      {
        nameAr: 'الأمير ويليام',
        nameEn: 'Prince William, Prince of Wales',
        titleAr: 'أمير ويلز وولي العهد',
        titleEn: 'Prince of Wales & Heir Apparent',
        since: 2022,
        type: 'crown_prince',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Prince_William_in_October_2023.jpg/330px-Prince_William_in_October_2023.jpg',
      },
      {
        nameAr: 'الملكة إليزابيث الثانية (تاريخية)',
        nameEn: 'Queen Elizabeth II (Historical)',
        titleAr: 'ملكة المملكة المتحدة (1952 - 2022)',
        titleEn: 'Queen of the United Kingdom (1952 - 2022)',
        since: 1952,
        type: 'monarch',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Queen_Elizabeth_II_March_2015.jpg/330px-Queen_Elizabeth_II_March_2015.jpg',
      },
    ],
  },

  // جمهورية مصر العربية
  eg: {
    current: {
      nameAr: 'عبد الفتاح السيسي',
      nameEn: 'Abdel Fattah el-Sisi',
      titleAr: 'رئيس جمهورية مصر العربية',
      titleEn: 'President of the Arab Republic of Egypt',
      officeAr: 'رئيس الجمهورية والقائد الأعلى للقوات المسلحة',
      officeEn: 'President & Supreme Commander of the Armed Forces',
      since: 2014,
      type: 'president',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/AbdelFattah_Elsisi_%28cropped%29.jpg/330px-AbdelFattah_Elsisi_%28cropped%29.jpg',
      partyAr: 'مستقل (تحالف الأغلبية الوطنية)',
      partyEn: 'Independent (National Majority Coalition)',
    },
    succession: [
      {
        nameAr: 'مصطفى مدبولي',
        nameEn: 'Moustafa Madbouly',
        titleAr: 'رئيس مجلس الوزراء المصري',
        titleEn: 'Prime Minister of Egypt',
        since: 2018,
        type: 'pm',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Mostafa_Madbouly_2023.jpg/330px-Mostafa_Madbouly_2023.jpg',
      },
      {
        nameAr: 'محمد أنور السادات (تاريخي)',
        nameEn: 'Anwar Sadat (Historical)',
        titleAr: 'رئيس جمهورية مصر العربية (1970 - 1981)',
        titleEn: 'President of Egypt (1970 - 1981)',
        since: 1970,
        type: 'president',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Anwar_Sadat_1980_%28cropped%29.jpg/330px-Anwar_Sadat_1980_%28cropped%29.jpg',
      },
    ],
  },

  // الولايات المتحدة الأمريكية
  us: {
    current: {
      nameAr: 'دونالد ترامب',
      nameEn: 'Donald Trump',
      titleAr: 'رئيس الولايات المتحدة الأمريكية',
      titleEn: 'President of the United States',
      officeAr: 'الرئيس والقائد الأعلى للقوات المسلحة الأمريكية',
      officeEn: 'President & Commander-in-Chief',
      since: 2025,
      type: 'president',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Official_Presidential_Portrait_of_President_Donald_J._Trump_%282025%29.jpg/330px-Official_Presidential_Portrait_of_President_Donald_J._Trump_%282025%29.jpg',
      partyAr: 'الحزب الجمهوري',
      partyEn: 'Republican Party',
    },
    succession: [
      {
        nameAr: 'جيه دي فانس',
        nameEn: 'JD Vance',
        titleAr: 'نائب رئيس الولايات المتحدة',
        titleEn: 'Vice President of the United States',
        since: 2025,
        type: 'vp',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/JD_Vance_official_portrait_118th_Congress.jpg/330px-JD_Vance_official_portrait_118th_Congress.jpg',
      },
      {
        nameAr: 'جو بايدن',
        nameEn: 'Joe Biden',
        titleAr: 'الرئيس الـ 46 للولايات المتحدة (2021 - 2025)',
        titleEn: '46th President of the United States (2021 - 2025)',
        since: 2021,
        type: 'president',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/330px-Joe_Biden_presidential_portrait.jpg',
      },
      {
        nameAr: 'باراك أوباما (تاريخي)',
        nameEn: 'Barack Obama (Historical)',
        titleAr: 'الرئيس الـ 44 للولايات المتحدة (2009 - 2017)',
        titleEn: '44th President of the United States (2009 - 2017)',
        since: 2009,
        type: 'president',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/330px-President_Barack_Obama.jpg',
      },
    ],
  },

  // المملكة المغربية
  ma: {
    current: {
      nameAr: 'الملك محمد السادس',
      nameEn: 'King Mohammed VI',
      titleAr: 'ملك المملكة المغربية وأمير المؤمنين',
      titleEn: 'King of Morocco & Commander of the Faithful',
      officeAr: 'الملك ورئيس الدولة والقائد الأعلى للقوات المسلحة الملكية',
      officeEn: 'King, Head of State & Supreme Commander',
      since: 1999,
      type: 'monarch',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Pedro_S%C3%A1nchez_se_re%C3%BAne_con_el_rey_de_Marruecos%2C_Mohamed_VI_%281%29_%28cropped%29.jpg/330px-Pedro_S%C3%A1nchez_se_re%C3%BAne_con_el_rey_de_Marruecos%2C_Mohamed_VI_%281%29_%28cropped%29.jpg',
      partyAr: 'الأسرة العلوية الشريفة',
      partyEn: 'Alaouite Dynasty',
    },
    succession: [
      {
        nameAr: 'الأمير مولاي الحسن',
        nameEn: 'Crown Prince Moulay Hassan',
        titleAr: 'ولي عهد المملكة المغربية',
        titleEn: 'Crown Prince of Morocco',
        since: 2003,
        type: 'crown_prince',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Crown_Prince_Moulay_Hassan_of_Morocco.jpg/330px-Crown_Prince_Moulay_Hassan_of_Morocco.jpg',
      },
      {
        nameAr: 'عزيز أخنوش',
        nameEn: 'Aziz Akhannouch',
        titleAr: 'رئيس الحكومة المغربية',
        titleEn: 'Head of Government of Morocco',
        since: 2021,
        type: 'pm',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Aziz_Akhannouch_2022.jpg/330px-Aziz_Akhannouch_2022.jpg',
      },
    ],
  },

  // المملكة الأردنية الهاشمية
  jo: {
    current: {
      nameAr: 'الملك عبد الله الثاني بن الحسين',
      nameEn: 'King Abdullah II of Jordan',
      titleAr: 'ملك المملكة الأردنية الهاشمية',
      titleEn: 'King of the Hashemite Kingdom of Jordan',
      officeAr: 'الملك والقائد الأعلى للقوات المسلحة الأردنية',
      officeEn: 'King & Supreme Commander of Jordan Armed Forces',
      since: 1999,
      type: 'monarch',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Abdullah_II_portrait_crop_3_at_10_Downing_Street_June_2025.jpg/330px-Abdullah_II_portrait_crop_3_at_10_Downing_Street_June_2025.jpg',
      partyAr: 'الأسرة الهاشمية',
      partyEn: 'Hashemite Dynasty',
    },
    succession: [
      {
        nameAr: 'الأمير الحسين بن عبد الله الثاني',
        nameEn: 'Crown Prince Hussein of Jordan',
        titleAr: 'ولي عهد المملكة الأردنية الهاشمية',
        titleEn: 'Crown Prince of Jordan',
        since: 2009,
        type: 'crown_prince',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Crown_Prince_Hussein_of_Jordan_%282023%29.jpg/330px-Crown_Prince_Hussein_of_Jordan_%282023%29.jpg',
      },
    ],
  },

  // دولة قطر
  qa: {
    current: {
      nameAr: 'الشيخ تميم بن حمد آل ثاني',
      nameEn: 'Sheikh Tamim bin Hamad Al Thani',
      titleAr: 'أمير دولة قطر',
      titleEn: 'Amir of the State of Qatar',
      officeAr: 'أمير البلاد والقائد العام للقوات المسلحة',
      officeEn: 'Amir & Commander-in-Chief',
      since: 2013,
      type: 'monarch',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Emir_of_Qatar_on_February_19%2C_2025_%28cropped%29.jpg/330px-Emir_of_Qatar_on_February_19%2C_2025_%28cropped%29.jpg',
      partyAr: 'أسرة آل ثاني',
      partyEn: 'House of Thani',
    },
    succession: [
      {
        nameAr: 'الشيخ محمد بن عبد الرحمن آل ثاني',
        nameEn: 'Sheikh Mohammed bin Abdulrahman Al Thani',
        titleAr: 'رئيس مجلس الوزراء ووزير الخارجية',
        titleEn: 'Prime Minister & Minister of Foreign Affairs',
        since: 2023,
        type: 'pm',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Mohammed_bin_Abdulrahman_Al_Thani_2023.jpg/330px-Mohammed_bin_Abdulrahman_Al_Thani_2023.jpg',
      },
      {
        nameAr: 'الشيخ حمد بن خليفة آل ثاني (الأمير الوالد)',
        nameEn: 'Sheikh Hamad bin Khalifa Al Thani (Father Amir)',
        titleAr: 'أمير دولة قطر السابق (1995 - 2013)',
        titleEn: 'Former Amir of Qatar (1995 - 2013)',
        since: 1995,
        type: 'monarch',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Hamad_bin_Khalifa_Al_Thani_2012.jpg/330px-Hamad_bin_Khalifa_Al_Thani_2012.jpg',
      },
    ],
  },

  // دولة الإمارات العربية المتحدة
  ae: {
    current: {
      nameAr: 'الشيخ محمد بن زايد آل نهيان',
      nameEn: 'Sheikh Mohamed bin Zayed Al Nahyan',
      titleAr: 'رئيس دولة الإمارات العربية المتحدة',
      titleEn: 'President of the United Arab Emirates',
      officeAr: 'رئيس الدولة، حاكم أبوظبي والقائد الأعلى للقوات المسلحة',
      officeEn: 'President, Ruler of Abu Dhabi & Supreme Commander',
      since: 2022,
      type: 'president',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Mohamed_bin_Zayed_Al_Nahyan_-_2024_%28cropped%29.jpg/330px-Mohamed_bin_Zayed_Al_Nahyan_-_2024_%28cropped%29.jpg',
      partyAr: 'المجلس الأعلى للاتحاد (آل نهيان)',
      partyEn: 'Federal Supreme Council (Al Nahyan)',
    },
    succession: [
      {
        nameAr: 'الشيخ محمد بن راشد آل مكتوم',
        nameEn: 'Sheikh Mohammed bin Rashid Al Maktoum',
        titleAr: 'نائب رئيس الدولة، رئيس مجلس الوزراء، حاكم دبي',
        titleEn: 'Vice President, Prime Minister, Ruler of Dubai',
        since: 2006,
        type: 'vp',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Sheikh_Mohammed_bin_Rashid_Al_Maktoum_2019.jpg/330px-Sheikh_Mohammed_bin_Rashid_Al_Maktoum_2019.jpg',
      },
      {
        nameAr: 'الشيخ خالد بن محمد بن زايد آل نهيان',
        nameEn: 'Sheikh Khaled bin Mohamed bin Zayed',
        titleAr: 'ولي عهد أبوظبي',
        titleEn: 'Crown Prince of Abu Dhabi',
        since: 2023,
        type: 'crown_prince',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Khaled_bin_Mohamed_Al_Nahyan.jpg/330px-Khaled_bin_Mohamed_Al_Nahyan.jpg',
      },
    ],
  },

  // الجمهورية الفرنسية
  fr: {
    current: {
      nameAr: 'إيمانويل ماكرون',
      nameEn: 'Emmanuel Macron',
      titleAr: 'رئيس الجمهورية الفرنسية',
      titleEn: 'President of the French Republic',
      officeAr: 'رئيس الدولة والقائد العام للقوات المسلحة',
      officeEn: 'President & Commander of the Armed Forces',
      since: 2017,
      type: 'president',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Emmanuel_Macron_2025_%28cropped%29.jpg/330px-Emmanuel_Macron_2025_%28cropped%29.jpg',
      partyAr: 'حزب النهضة (Renaissance)',
      partyEn: 'Renaissance Party',
    },
    succession: [
      {
        nameAr: 'ميشيل بارنييه',
        nameEn: 'Michel Barnier',
        titleAr: 'رئيس الوزراء الفرنسي',
        titleEn: 'Prime Minister of France',
        since: 2024,
        type: 'pm',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Michel_Barnier_2024.jpg/330px-Michel_Barnier_2024.jpg',
      },
      {
        nameAr: 'مارين لوبان',
        nameEn: 'Marine Le Pen',
        titleAr: 'زعيمة التجمع الوطني (مرشحة رئاسية)',
        titleEn: 'National Rally Leader (Presidential Candidate)',
        since: 2022,
        type: 'candidate',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Marine_Le_Pen_2022.jpg/330px-Marine_Le_Pen_2022.jpg',
      },
    ],
  },

  // روسيا الاتحادية
  ru: {
    current: {
      nameAr: 'فلاديمير بوتين',
      nameEn: 'Vladimir Putin',
      titleAr: 'رئيس روسيا الاتحادية',
      titleEn: 'President of the Russian Federation',
      officeAr: 'الرئيس والقائد العام للقوات المسلحة لروسيا الاتحادية',
      officeEn: 'President & Supreme Commander-in-Chief',
      since: 2012,
      type: 'president',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2808-03-2024%29_%28cropped%29_%28higher_res%29_2.jpg/330px-%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2808-03-2024%29_%28cropped%29_%28higher_res%29_2.jpg',
      partyAr: 'روسيا الموحدة',
      partyEn: 'United Russia',
    },
    succession: [
      {
        nameAr: 'ميخائيل ميشوستين',
        nameEn: 'Mikhail Mishustin',
        titleAr: 'رئيس وزراء روسيا الاتحادية',
        titleEn: 'Prime Minister of the Russian Federation',
        since: 2020,
        type: 'pm',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Mikhail_Mishustin_%282024-05-10%29_%28cropped%29.jpg/330px-Mikhail_Mishustin_%282024-05-10%29_%28cropped%29.jpg',
      },
      {
        nameAr: 'ديمتري ميدفيديف',
        nameEn: 'Dmitry Medvedev',
        titleAr: 'نائب رئيس مجلس الأمن الروسي / الرئيس السابق',
        titleEn: 'Deputy Chairman of Security Council / Former President',
        since: 2020,
        type: 'president',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Dmitry_Medvedev_2023.jpg/330px-Dmitry_Medvedev_2023.jpg',
      },
    ],
  },

  // جمهورية الصين الشعبية
  cn: {
    current: {
      nameAr: 'شي جين بينغ',
      nameEn: 'Xi Jinping',
      titleAr: 'رئيس جمهورية الصين الشعبية والأمين العام',
      titleEn: 'President of China & General Secretary of CCP',
      officeAr: 'رئيس الدولة، الأمين العام للحزب الشيوعي، ورئيس اللجنة العسكرية المركزية',
      officeEn: 'President, General Secretary & CMC Chairman',
      since: 2013,
      type: 'president',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Prime_Minister_Keir_Starmer_visits_China_%2855066713683%29_%28cropped%2Bangle%29.jpg/330px-Prime_Minister_Keir_Starmer_visits_China_%2855066713683%29_%28cropped%2Bangle%29.jpg',
      partyAr: 'الحزب الشيوعي الصيني',
      partyEn: 'Communist Party of China',
    },
    succession: [
      {
        nameAr: 'لي تشيانغ',
        nameEn: 'Li Qiang',
        titleAr: 'رئيس مجلس الدولة الصيني (رئيس الوزراء)',
        titleEn: 'Premier of the People\'s Republic of China',
        since: 2023,
        type: 'pm',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Li_Qiang_2023.jpg/330px-Li_Qiang_2023.jpg',
      },
    ],
  },

  // جمهورية ألمانيا الاتحادية
  de: {
    current: {
      nameAr: 'فريدريش ميرتز',
      nameEn: 'Friedrich Merz',
      titleAr: 'المستشار الاتحادي لجمهورية ألمانيا',
      titleEn: 'Federal Chancellor of Germany',
      officeAr: 'المستشار ورئيس الحكومة الاتحادية',
      officeEn: 'Federal Chancellor & Head of Government',
      since: 2025,
      type: 'chancellor',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/2024-08-21_Friedrich_Merz_in_Erfurt_2024_STP_3041_by_Stepro_%283x4_cropped%29.jpg/330px-2024-08-21_Friedrich_Merz_in_Erfurt_2024_STP_3041_by_Stepro_%283x4_cropped%29.jpg',
      partyAr: 'الاتحاد الديمقراطي المسيحي (CDU)',
      partyEn: 'Christian Democratic Union (CDU)',
    },
    succession: [
      {
        nameAr: 'أولاف شولتس',
        nameEn: 'Olaf Scholz',
        titleAr: 'المستشار الاتحادي السابق (2021 - 2025)',
        titleEn: 'Former Federal Chancellor (2021 - 2025)',
        since: 2021,
        type: 'chancellor',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Olaf_Scholz_2023_%28cropped%29.jpg/330px-Olaf_Scholz_2023_%28cropped%29.jpg',
      },
      {
        nameAr: 'فرانك-فالتر شتاينماير',
        nameEn: 'Frank-Walter Steinmeier',
        titleAr: 'الرئيس الاتحادي لألمانيا',
        titleEn: 'Federal President of Germany',
        since: 2017,
        type: 'president',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Frank-Walter_Steinmeier_2022.jpg/330px-Frank-Walter_Steinmeier_2022.jpg',
      },
    ],
  },

  // الجمهورية التركية
  tr: {
    current: {
      nameAr: 'رجب طيب أردوغان',
      nameEn: 'Recep Tayyip Erdoğan',
      titleAr: 'رئيس الجمهورية التركية',
      titleEn: 'President of the Republic of Turkey',
      officeAr: 'رئيس الجمهورية ورئيس السلطة التنفيذية',
      officeEn: 'President & Head of Executive Branch',
      since: 2014,
      type: 'president',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Turkish_President_Recep_Tayyip_Erdo%C4%9Fan_in_January_2024_%28cropped%29.jpg/330px-Turkish_President_Recep_Tayyip_Erdo%C4%9Fan_in_January_2024_%28cropped%29.jpg',
      partyAr: 'حزب العدالة والتنمية (AKP)',
      partyEn: 'Justice and Development Party (AKP)',
    },
    succession: [
      {
        nameAr: 'جودت يلماز',
        nameEn: 'Cevdet Yılmaz',
        titleAr: 'نائب رئيس الجمهورية التركية',
        titleEn: 'Vice President of Turkey',
        since: 2023,
        type: 'vp',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Cevdet_Y%C4%B1lmaz_2023.jpg/330px-Cevdet_Y%C4%B1lmaz_2023.jpg',
      },
      {
        nameAr: 'أكرم إمام أوغلو',
        nameEn: 'Ekrem İmamoğlu',
        titleAr: 'رئيس بلدية إسطنبول (مرشح معارضة بارز)',
        titleEn: 'Mayor of Istanbul (Opposition Figure)',
        since: 2019,
        type: 'candidate',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Ekrem_%C4%B0mamo%C4%9Flu_2023.jpg/330px-Ekrem_%C4%B0mamo%C4%9Flu_2023.jpg',
      },
    ],
  },

  // الهند
  in: {
    current: {
      nameAr: 'ناريندرا مودي',
      nameEn: 'Narendra Modi',
      titleAr: 'رئيس وزراء جمهورية الهند',
      titleEn: 'Prime Minister of India',
      officeAr: 'رئيس الوزراء وزعيم الحكومة التنفيذية',
      officeEn: 'Prime Minister & Executive Head',
      since: 2014,
      type: 'pm',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Narendra_Modi_Portrait_2026.jpg/330px-Narendra_Modi_Portrait_2026.jpg',
      partyAr: 'حزب بهاراتيا جاناتا (BJP)',
      partyEn: 'Bharatiya Janata Party (BJP)',
    },
    succession: [
      {
        nameAr: 'دروبادي مورمو',
        nameEn: 'Droupadi Murmu',
        titleAr: 'رئيسة جمهورية الهند',
        titleEn: 'President of India',
        since: 2022,
        type: 'president',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Droupadi_Murmu_official_portrait.jpg/330px-Droupadi_Murmu_official_portrait.jpg',
      },
      {
        nameAr: 'أميت شاه',
        nameEn: 'Amit Shah',
        titleAr: 'وزير الشؤون الداخلية (مرشح قيادي)',
        titleEn: 'Minister of Home Affairs (Key Leader)',
        since: 2019,
        type: 'candidate',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Amit_Shah_2023.jpg/330px-Amit_Shah_2023.jpg',
      },
    ],
  },

  // اليابان
  jp: {
    current: {
      nameAr: 'الإمبراطور ناروهيتو',
      nameEn: 'Emperor Naruhito',
      titleAr: 'إمبراطور اليابان (عصر ريوا)',
      titleEn: 'Emperor of Japan (Reiwa era)',
      officeAr: 'رمز الدولة ووحدة الشعب',
      officeEn: 'Symbol of the State and Unity of the People',
      since: 2019,
      type: 'monarch',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Emperor_Naruhito_%28cropped%29.jpg/330px-Emperor_Naruhito_%28cropped%29.jpg',
      partyAr: 'الأسرة الإمبراطورية اليابانية',
      partyEn: 'Imperial House of Japan',
    },
    succession: [
      {
        nameAr: 'شيغيرو إيشيبا',
        nameEn: 'Shigeru Ishiba',
        titleAr: 'رئيس وزراء اليابان',
        titleEn: 'Prime Minister of Japan',
        since: 2024,
        type: 'pm',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Shigeru_Ishiba_2024.jpg/330px-Shigeru_Ishiba_2024.jpg',
      },
      {
        nameAr: 'فوميو كيشيدا',
        nameEn: 'Fumio Kishida',
        titleAr: 'رئيس وزراء اليابان السابق (2021 - 2024)',
        titleEn: 'Former Prime Minister of Japan (2021 - 2024)',
        since: 2021,
        type: 'pm',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Fumio_Kishida_2023.jpg/330px-Fumio_Kishida_2023.jpg',
      },
    ],
  },

  // دولة الكويت
  kw: {
    current: {
      nameAr: 'الشيخ مشعل الأحمد الجابر الصباح',
      nameEn: 'Sheikh Mishal Al-Ahmad Al-Jaber Al-Sabah',
      titleAr: 'أمير دولة الكويت',
      titleEn: 'Emir of the State of Kuwait',
      officeAr: 'أمير البلاد والقائد الأعلى للقوات المسلحة',
      officeEn: 'Emir & Commander-in-Chief',
      since: 2023,
      type: 'monarch',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Mishal_Al-Ahmad_Al-Jaber_Al-Sabah_in_2024.jpg/330px-Mishal_Al-Ahmad_Al-Jaber_Al-Sabah_in_2024.jpg',
      partyAr: 'أسرة آل الصباح',
      partyEn: 'House of Sabah',
    },
    succession: [
      {
        nameAr: 'الشيخ صباح الأحمد الجابر الصباح (تاريخي)',
        nameEn: 'Sheikh Sabah Al-Ahmad (Historical)',
        titleAr: 'أمير دولة الكويت (2006 - 2020)',
        titleEn: 'Former Emir of Kuwait',
        since: 2006,
        type: 'monarch',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Sabah_Al-Ahmad_Al-Jaber_Al-Sabah_in_2017.jpg/330px-Sabah_Al-Ahmad_Al-Jaber_Al-Sabah_in_2017.jpg',
      },
    ],
  },

  // سلطنة عُمان
  om: {
    current: {
      nameAr: 'السلطان هيثم بن طارق آل سعيد',
      nameEn: 'Sultan Haitham bin Tariq',
      titleAr: 'سلطان عمان ورئيس مجلس الوزراء',
      titleEn: 'Sultan of Oman & Prime Minister',
      officeAr: 'السلطان والقائد الأعلى للقوات المسلحة',
      officeEn: 'Sultan & Supreme Commander',
      since: 2020,
      type: 'monarch',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Haitham_bin_Tariq_Al_Said_%28cropped%29.jpg/330px-Haitham_bin_Tariq_Al_Said_%28cropped%29.jpg',
      partyAr: 'الأسرة البوسعيدية (آل سعيد)',
      partyEn: 'House of Busaid',
    },
    succession: [
      {
        nameAr: 'السلطان قابوس بن سعيد (تاريخي)',
        nameEn: 'Sultan Qaboos bin Said (Historical)',
        titleAr: 'سلطان عمان ومؤسس النهضة الحديثة (1970 - 2020)',
        titleEn: 'Former Sultan of Oman',
        since: 1970,
        type: 'monarch',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Sultan_Qaboos_2004.jpg/330px-Sultan_Qaboos_2004.jpg',
      },
    ],
  },

  // مملكة البحرين
  bh: {
    current: {
      nameAr: 'الملك حمد بن عيسى آل خليفة',
      nameEn: 'King Hamad bin Isa Al Khalifa',
      titleAr: 'ملك مملكة البحرين',
      titleEn: 'King of the Kingdom of Bahrain',
      officeAr: 'الملك ورأس الدولة والقائد الأعلى لقوة دفاع البحرين',
      officeEn: 'King & Supreme Commander of BDF',
      since: 1999,
      type: 'monarch',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Hamad_bin_Isa_Al_Khalifa_%28cropped%29.jpg/330px-Hamad_bin_Isa_Al_Khalifa_%28cropped%29.jpg',
      partyAr: 'أسرة آل خليفة',
      partyEn: 'House of Khalifa',
    },
    succession: [
      {
        nameAr: 'الأمير سلمان بن حمد آل خليفة',
        nameEn: 'Crown Prince Salman bin Hamad',
        titleAr: 'ولي العهد رئيس مجلس الوزراء',
        titleEn: 'Crown Prince & Prime Minister',
        since: 2020,
        type: 'crown_prince',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/Crown_Prince_Salman_bin_Hamad_Al_Khalifa_2022.jpg/330px-Crown_Prince_Salman_bin_Hamad_Al_Khalifa_2022.jpg',
      },
    ],
  },

  // الجمهورية الجزائرية
  dz: {
    current: {
      nameAr: 'عبد المجيد تبون',
      nameEn: 'Abdelmadjid Tebboune',
      titleAr: 'رئيس الجمهورية الجزائرية الديمقراطية الشعبية',
      titleEn: 'President of Algeria',
      officeAr: 'رئيس الجمهورية والقائد الأعلى للقوات المسلحة ووزير الدفاع',
      officeEn: 'President & Supreme Commander',
      since: 2019,
      type: 'president',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Abdelmadjid_Tebboune_2022_%28cropped%29.jpg/330px-Abdelmadjid_Tebboune_2022_%28cropped%29.jpg',
      partyAr: 'جبهة التحرير الوطني / ائتلاف رئاسي',
      partyEn: 'FLN / Presidential Coalition',
    },
    succession: [
      {
        nameAr: 'عبد العزيز بوتفليقة (تاريخي)',
        nameEn: 'Abdelaziz Bouteflika (Historical)',
        titleAr: 'رئيس الجمهورية الجزائرية (1999 - 2019)',
        titleEn: 'Former President of Algeria',
        since: 1999,
        type: 'president',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Abdelaziz_Bouteflika_2004.jpg/330px-Abdelaziz_Bouteflika_2004.jpg',
      },
    ],
  },

  // الجمهورية التونسية
  tn: {
    current: {
      nameAr: 'قيس سعيّد',
      nameEn: 'Kais Saied',
      titleAr: 'رئيس الجمهورية التونسية',
      titleEn: 'President of Tunisia',
      officeAr: 'رئيس الدولة والقائد الأعلى للقوات المسلحة',
      officeEn: 'President & Supreme Commander',
      since: 2019,
      type: 'president',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Kais_Saied_2020_%28cropped%29.jpg/330px-Kais_Saied_2020_%28cropped%29.jpg',
      partyAr: 'مستقل (مسار 25 جويلية)',
      partyEn: 'Independent',
    },
    succession: [],
  },

  // جمهورية العراق
  iq: {
    current: {
      nameAr: 'عبد اللطيف رشيد',
      nameEn: 'Abdul Latif Rashid',
      titleAr: 'رئيس جمهورية العراق',
      titleEn: 'President of Iraq',
      officeAr: 'رئيس الجمهورية ورمز وحدة الوطن',
      officeEn: 'President of the Republic',
      since: 2022,
      type: 'president',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Abdul_Latif_Rashid_2022.jpg/330px-Abdul_Latif_Rashid_2022.jpg',
      partyAr: 'الاتحاد الوطني الكردستاني',
      partyEn: 'Patriotic Union of Kurdistan',
    },
    succession: [
      {
        nameAr: 'محمد شياع السوداني',
        nameEn: 'Mohammed Shia\' Al Sudani',
        titleAr: 'رئيس مجلس الوزراء العراقي',
        titleEn: 'Prime Minister of Iraq',
        since: 2022,
        type: 'pm',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Mohammed_Shia_al-Sudani_in_2023.jpg/330px-Mohammed_Shia_al-Sudani_in_2023.jpg',
      },
    ],
  },

  // الجمهورية العربية السورية
  sy: {
    current: {
      nameAr: 'أحمد الشرع',
      nameEn: 'Ahmed al-Sharaa',
      titleAr: 'رئيس الجمهورية السورية (المرحلة الانتقالية)',
      titleEn: 'President of the Syrian Republic (Transitional)',
      officeAr: 'رئيس الدولة والقائد العام للقوات العسكرية',
      officeEn: 'Head of State & Commander',
      since: 2024,
      type: 'president',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Ahmed_al-Sharaa_2024.jpg/330px-Ahmed_al-Sharaa_2024.jpg',
      partyAr: 'هيئة الإدارة الانتقالية الوطنية',
      partyEn: 'National Transitional Administration',
    },
    succession: [],
  },

  // الجمهورية اللبنانية
  lb: {
    current: {
      nameAr: 'العماد جوزيف عون',
      nameEn: 'General Joseph Aoun',
      titleAr: 'رئيس الجمهورية اللبنانية',
      titleEn: 'President of the Lebanese Republic',
      officeAr: 'رئيس الدولة والقائد الأعلى للقوات المسلحة',
      officeEn: 'President & Supreme Commander',
      since: 2025,
      type: 'president',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Joseph_Aoun_2021.jpg/330px-Joseph_Aoun_2021.jpg',
      partyAr: 'وفاق وطني مستقل',
      partyEn: 'National Accord',
    },
    succession: [],
  },

  // البرازيل
  br: {
    current: {
      nameAr: 'لولا دا سيلفا',
      nameEn: 'Luiz Inácio Lula da Silva',
      titleAr: 'رئيس جمهورية البرازيل الاتحادية',
      titleEn: 'President of Brazil',
      officeAr: 'رئيس الدولة ورئيس الحكومة والقائد العام',
      officeEn: 'President & Head of Government',
      since: 2023,
      type: 'president',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Foto_oficial_de_Luiz_In%C3%A1cio_Lula_da_Silva_%282023%29.jpg/330px-Foto_oficial_de_Luiz_In%C3%A1cio_Lula_da_Silva_%282023%29.jpg',
      partyAr: 'حزب العمال البرازيلي (PT)',
      partyEn: 'Workers\' Party (PT)',
    },
    succession: [
      {
        nameAr: 'جاير بولسونارو',
        nameEn: 'Jair Bolsonaro',
        titleAr: 'رئيس جمهورية البرازيل السابق (2019 - 2022)',
        titleEn: 'Former President of Brazil',
        since: 2019,
        type: 'president',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Jair_Bolsonaro_2021.jpg/330px-Jair_Bolsonaro_2021.jpg',
      },
    ],
  },

  // إسبانيا
  es: {
    current: {
      nameAr: 'الملك فيليب السادس',
      nameEn: 'King Felipe VI of Spain',
      titleAr: 'ملك مملكة إسبانيا ورأس الدولة',
      titleEn: 'King of Spain & Head of State',
      officeAr: 'عاهل إسبانيا والقائد العام للقوات المسلحة الملكية',
      officeEn: 'King & Captain General of Armed Forces',
      since: 2014,
      type: 'monarch',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Felipe_VI_official_portrait_2020.jpg/330px-Felipe_VI_official_portrait_2020.jpg',
      partyAr: 'أسرة بوربون (Casa de Borbón)',
      partyEn: 'House of Bourbon',
    },
    succession: [
      {
        nameAr: 'بيدرو سانشيز',
        nameEn: 'Pedro Sánchez',
        titleAr: 'رئيس حكومة إسبانيا (رئيس الوزراء)',
        titleEn: 'Prime Minister of Spain',
        since: 2018,
        type: 'pm',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Pedro_S%C3%A1nchez_2023_%28cropped%29.jpg/330px-Pedro_S%C3%A1nchez_2023_%28cropped%29.jpg',
      },
    ],
  },

  // إيطاليا
  it: {
    current: {
      nameAr: 'سيرجيو ماتاريلا',
      nameEn: 'Sergio Mattarella',
      titleAr: 'رئيس الجمهورية الإيطالية',
      titleEn: 'President of Italy',
      officeAr: 'رئيس الدولة وضامن الدستور',
      officeEn: 'President & Guardian of the Constitution',
      since: 2015,
      type: 'president',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Sergio_Mattarella_official_portrait_2022.jpg/330px-Sergio_Mattarella_official_portrait_2022.jpg',
      partyAr: 'مستقل / تحالف دستوري',
      partyEn: 'Independent',
    },
    succession: [
      {
        nameAr: 'جورجيا ميلوني',
        nameEn: 'Giorgia Meloni',
        titleAr: 'رئيسة مجلس وزراء إيطاليا',
        titleEn: 'Prime Minister of Italy',
        since: 2022,
        type: 'pm',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Giorgia_Meloni_2023.jpg/330px-Giorgia_Meloni_2023.jpg',
      },
    ],
  },

  // الفاتيكان
  va: {
    current: {
      nameAr: 'البابا فرنسيس',
      nameEn: 'Pope Francis',
      titleAr: 'حاكم دولة حاضرة الفاتيكان، أسقف روما',
      titleEn: 'Sovereign of Vatican City, Bishop of Rome',
      officeAr: 'رأس الكنيسة الكاثوليكية وحاكم دولة الفاتيكان',
      officeEn: 'Head of Catholic Church & Vatican Sovereign',
      since: 2013,
      type: 'pope',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Pope_Francis_in_2023.jpg/330px-Pope_Francis_in_2023.jpg',
      partyAr: 'الكرسي الرسولي (Holy See)',
      partyEn: 'Holy See',
    },
    succession: [],
  },

  // الأرجنتين
  ar: {
    current: {
      nameAr: 'خافيير مايلي',
      nameEn: 'Javier Milei',
      titleAr: 'رئيس جمهورية الأرجنتين',
      titleEn: 'President of Argentina',
      officeAr: 'رئيس الدولة ورئيس الحكومة الاتحادية',
      officeEn: 'President & Head of Government',
      since: 2023,
      type: 'president',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Javier_Milei_in_pull-aside_meeting_at_the_United_Nations_Headquarters_%283x4_cropped%29.jpg/330px-Javier_Milei_in_pull-aside_meeting_at_the_United_Nations_Headquarters_%283x4_cropped%29.jpg',
      partyAr: 'حزب لا ليبرتاد أبانزا (حرية تتقدم)',
      partyEn: 'La Libertad Avanza',
    },
    succession: [],
  },

  // المكسيك
  mx: {
    current: {
      nameAr: 'كلاوديا شينباوم',
      nameEn: 'Claudia Sheinbaum',
      titleAr: 'رئيسة الولايات المكسيكية المتحدة',
      titleEn: 'President of Mexico',
      officeAr: 'رئيسة الدولة والقائدة العامة للقوات المسلحة',
      officeEn: 'President & Supreme Commander',
      since: 2024,
      type: 'president',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Claudia_Sheinbaum_in_2025_%283x4_cropped%29.jpg/330px-Claudia_Sheinbaum_in_2025_%283x4_cropped%29.jpg',
      partyAr: 'حزب مورينا (حركة التجديد الوطني)',
      partyEn: 'MORENA',
    },
    succession: [],
  },

  // جنوب أفريقيا
  za: {
    current: {
      nameAr: 'سيريل رامافوزا',
      nameEn: 'Cyril Ramaphosa',
      titleAr: 'رئيس جمهورية جنوب أفريقيا',
      titleEn: 'President of South Africa',
      officeAr: 'رئيس الدولة ورئيس الحكومة الوطنية',
      officeEn: 'President & Head of State',
      since: 2018,
      type: 'president',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Cyril_Ramaphosa_in_2024.jpg/330px-Cyril_Ramaphosa_in_2024.jpg',
      partyAr: 'حكومة الوحدة الوطنية / المؤتمر الوطني الأفريقي (ANC)',
      partyEn: 'Government of National Unity (ANC)',
    },
    succession: [],
  },

  // إندونيسيا
  id: {
    current: {
      nameAr: 'برابوو سوبيانتو',
      nameEn: 'Prabowo Subianto',
      titleAr: 'رئيس جمهورية إندونيسيا',
      titleEn: 'President of Indonesia',
      officeAr: 'رئيس الدولة ورئيس الحكومة والقائد العام',
      officeEn: 'President & Commander-in-Chief',
      since: 2024,
      type: 'president',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Official_Portrait_of_President_Prabowo_Subianto.jpg/330px-Official_Portrait_of_President_Prabowo_Subianto.jpg',
      partyAr: 'حزب حركة إندونيسيا العظيمة (Gerindra)',
      partyEn: 'Gerindra Party',
    },
    succession: [
      {
        nameAr: 'جوكو ويدودو',
        nameEn: 'Joko Widodo',
        titleAr: 'رئيس إندونيسيا السابق (2014 - 2024)',
        titleEn: 'Former President of Indonesia',
        since: 2014,
        type: 'president',
        photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Joko_Widodo_2019_official_portrait.jpg/330px-Joko_Widodo_2019_official_portrait.jpg',
      },
    ],
  },

  // أوكرانيا
  ua: {
    current: {
      nameAr: 'فولوديمير زيلينسكي',
      nameEn: 'Volodymyr Zelenskyy',
      titleAr: 'رئيس أوكرانيا',
      titleEn: 'President of Ukraine',
      officeAr: 'رئيس الدولة والقائد الأعلى للقوات المسلحة الأوكرانية',
      officeEn: 'President & Supreme Commander',
      since: 2019,
      type: 'president',
      photo: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Volodymyr_Zelenskyy_in_2024.jpg/330px-Volodymyr_Zelenskyy_in_2024.jpg',
      partyAr: 'حزب خادم الشعب',
      partyEn: 'Servant of the People',
    },
    succession: [],
  },
};

/**
 * دالة استرجاع بيانات الحاكم الرسمية الافتراضية
 */
export function getDefaultLeader(countryId) {
  const reg = LEADERS_REGISTRY[countryId?.toLowerCase()];
  if (reg?.current) {
    return { ...reg.current, id: countryId.toLowerCase(), isCustom: false };
  }

  return {
    nameAr: 'رئيس الدولة',
    nameEn: 'Head of State',
    titleAr: 'رئيس الدولة',
    titleEn: 'Head of State',
    officeAr: 'القيادة السياسية العليا',
    officeEn: 'Supreme Political Leadership',
    since: 2020,
    type: 'president',
    photo: null,
    partyAr: 'مستقل / ائتلاف حكومي',
    partyEn: 'Independent / Coalition',
    isCustom: false,
  };
}
