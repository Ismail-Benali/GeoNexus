/**
 * خدمة التزامن الآلي لصور وبيانات الملوك ورؤساء الدول من ويكيبيديا الموسوعة الحرة
 * Auto-syncs official leader & monarch portraits and biographical profiles from Wikipedia REST API
 */

const CACHE_KEY = 'geonexus_wikipedia_leaders_cache_v3';
const CACHE_EXPIRY_MS = 1000 * 60 * 60 * 24 * 7; // 7 أيام

// فهرس عناوين صفحات ويكيبيديا الرسمية للملوك والرؤساء
export const WIKIPEDIA_LEADER_PAGES = {
  sa: { title: 'Salman_of_Saudi_Arabia', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Salman_of_Saudi_Arabia_-_2020_%2849563590728%29_%28cropped%29.jpg/330px-Salman_of_Saudi_Arabia_-_2020_%2849563590728%29_%28cropped%29.jpg' },
  gb: { title: 'Charles_III', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/King_Charles_III_%28July_2023%29.jpg/330px-King_Charles_III_%28July_2023%29.jpg' },
  eg: { title: 'Abdel_Fattah_el-Sisi', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/AbdelFattah_Elsisi_%28cropped%29.jpg/330px-AbdelFattah_Elsisi_%28cropped%29.jpg' },
  us: { title: 'Donald_Trump', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Official_Presidential_Portrait_of_President_Donald_J._Trump_%282025%29.jpg/330px-Official_Presidential_Portrait_of_President_Donald_J._Trump_%282025%29.jpg' },
  ma: { title: 'Mohammed_VI_of_Morocco', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Pedro_S%C3%A1nchez_se_re%C3%BAne_con_el_rey_de_Marruecos%2C_Mohamed_VI_%281%29_%28cropped%29.jpg/330px-Pedro_S%C3%A1nchez_se_re%C3%BAne_con_el_rey_de_Marruecos%2C_Mohamed_VI_%281%29_%28cropped%29.jpg' },
  jo: { title: 'Abdullah_II_of_Jordan', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Abdullah_II_portrait_crop_3_at_10_Downing_Street_June_2025.jpg/330px-Abdullah_II_portrait_crop_3_at_10_Downing_Street_June_2025.jpg' },
  qa: { title: 'Tamim_bin_Hamad_Al_Thani', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Emir_of_Qatar_on_February_19%2C_2025_%28cropped%29.jpg/330px-Emir_of_Qatar_on_February_19%2C_2025_%28cropped%29.jpg' },
  ae: { title: 'Mohamed_bin_Zayed_Al_Nahyan', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Mohamed_bin_Zayed_Al_Nahyan_-_2024_%28cropped%29.jpg/330px-Mohamed_bin_Zayed_Al_Nahyan_-_2024_%28cropped%29.jpg' },
  kw: { title: 'Mishal_Al-Ahmad_Al-Jaber_Al-Sabah', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Mishal_Al-Ahmad_Al-Jaber_Al-Sabah_in_2024.jpg/330px-Mishal_Al-Ahmad_Al-Jaber_Al-Sabah_in_2024.jpg' },
  om: { title: 'Haitham_bin_Tariq', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Haitham_bin_Tariq_Al_Said_%28cropped%29.jpg/330px-Haitham_bin_Tariq_Al_Said_%28cropped%29.jpg' },
  bh: { title: 'Hamad_bin_Isa_Al_Khalifa', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Hamad_bin_Isa_Al_Khalifa_%28cropped%29.jpg/330px-Hamad_bin_Isa_Al_Khalifa_%28cropped%29.jpg' },
  fr: { title: 'Emmanuel_Macron', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Emmanuel_Macron_2025_%28cropped%29.jpg/330px-Emmanuel_Macron_2025_%28cropped%29.jpg' },
  ru: { title: 'Vladimir_Putin', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2808-03-2024%29_%28cropped%29_%28higher_res%29_2.jpg/330px-%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2808-03-2024%29_%28cropped%29_%28higher_res%29_2.jpg' },
  cn: { title: 'Xi_Jinping', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Prime_Minister_Keir_Starmer_visits_China_%2855066713683%29_%28cropped%2Bangle%29.jpg/330px-Prime_Minister_Keir_Starmer_visits_China_%2855066713683%29_%28cropped%2Bangle%29.jpg' },
  de: { title: 'Friedrich_Merz', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/2024-08-21_Friedrich_Merz_in_Erfurt_2024_STP_3041_by_Stepro_%283x4_cropped%29.jpg/330px-2024-08-21_Friedrich_Merz_in_Erfurt_2024_STP_3041_by_Stepro_%283x4_cropped%29.jpg' },
  tr: { title: 'Recep_Tayyip_Erdo%C4%9Fan', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Turkish_President_Recep_Tayyip_Erdo%C4%9Fan_in_January_2024_%28cropped%29.jpg/330px-Turkish_President_Recep_Tayyip_Erdo%C4%9Fan_in_January_2024_%28cropped%29.jpg' },
  in: { title: 'Narendra_Modi', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Narendra_Modi_Portrait_2026.jpg/330px-Narendra_Modi_Portrait_2026.jpg' },
  jp: { title: 'Naruhito', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Emperor_Naruhito_%28cropped%29.jpg/330px-Emperor_Naruhito_%28cropped%29.jpg' },
  es: { title: 'Felipe_VI', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Felipe_VI_official_portrait_2020.jpg/330px-Felipe_VI_official_portrait_2020.jpg' },
  it: { title: 'Sergio_Mattarella', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Sergio_Mattarella_official_portrait_2022.jpg/330px-Sergio_Mattarella_official_portrait_2022.jpg' },
  br: { title: 'Luiz_In%C3%A1cio_Lula_da_Silva', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Foto_oficial_de_Luiz_In%C3%A1cio_Lula_da_Silva_%282023%29.jpg/330px-Foto_oficial_de_Luiz_In%C3%A1cio_Lula_da_Silva_%282023%29.jpg' },
  dz: { title: 'Abdelmadjid_Tebboune', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Abdelmadjid_Tebboune_2022_%28cropped%29.jpg/330px-Abdelmadjid_Tebboune_2022_%28cropped%29.jpg' },
  tn: { title: 'Kais_Saied', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Kais_Saied_2020_%28cropped%29.jpg/330px-Kais_Saied_2020_%28cropped%29.jpg' },
  iq: { title: 'Abdul_Latif_Rashid', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Abdul_Latif_Rashid_2022.jpg/330px-Abdul_Latif_Rashid_2022.jpg' },
  sy: { title: 'Ahmed_al-Sharaa', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Ahmed_al-Sharaa_2024.jpg/330px-Ahmed_al-Sharaa_2024.jpg' },
  lb: { title: 'Joseph_Aoun', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Joseph_Aoun_2021.jpg/330px-Joseph_Aoun_2021.jpg' },
  sd: { title: 'Abdel_Fattah_al-Burhan', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Abdel_Fattah_al-Burhan_in_2023.jpg/330px-Abdel_Fattah_al-Burhan_in_2023.jpg' },
  ir: { title: 'Ali_Khamenei', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Ali_Khamenei_in_2023.jpg/330px-Ali_Khamenei_in_2023.jpg' },
  za: { title: 'Cyril_Ramaphosa', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Cyril_Ramaphosa_in_2024.jpg/330px-Cyril_Ramaphosa_in_2024.jpg' },
  ng: { title: 'Bola_Tinubu', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Bola_Tinubu_official_portrait.jpg/330px-Bola_Tinubu_official_portrait.jpg' },
  mx: { title: 'Claudia_Sheinbaum', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Claudia_Sheinbaum_in_2025_%283x4_cropped%29.jpg/330px-Claudia_Sheinbaum_in_2025_%283x4_cropped%29.jpg' },
  ar: { title: 'Javier_Milei', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Javier_Milei_in_pull-aside_meeting_at_the_United_Nations_Headquarters_%283x4_cropped%29.jpg/330px-Javier_Milei_in_pull-aside_meeting_at_the_United_Nations_Headquarters_%283x4_cropped%29.jpg' },
  id: { title: 'Prabowo_Subianto', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Official_Portrait_of_President_Prabowo_Subianto.jpg/330px-Official_Portrait_of_President_Prabowo_Subianto.jpg' },
  pk: { title: 'Shehbaz_Sharif', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Prime_Minister_Shehbaz_Sharif.jpg/330px-Prime_Minister_Shehbaz_Sharif.jpg' },
  kr: { title: 'Lee_Jae-myung', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Lee_Jae-myung_in_2024.jpg/330px-Lee_Jae-myung_in_2024.jpg' },
  ua: { title: 'Volodymyr_Zelenskyy', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Volodymyr_Zelenskyy_in_2024.jpg/330px-Volodymyr_Zelenskyy_in_2024.jpg' },
  ca: { title: 'Charles_III', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/King_Charles_III_%28July_2023%29.jpg/330px-King_Charles_III_%28July_2023%29.jpg' },
  au: { title: 'Charles_III', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/King_Charles_III_%28July_2023%29.jpg/330px-King_Charles_III_%28July_2023%29.jpg' },
  nl: { title: 'Willem-Alexander_of_the_Netherlands', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/King_Willem-Alexander_official_portrait_2018.jpg/330px-King_Willem-Alexander_official_portrait_2018.jpg' },
  be: { title: 'Philippe_of_Belgium', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/King_Philippe_official_portrait_2019.jpg/330px-King_Philippe_official_portrait_2019.jpg' },
  se: { title: 'Carl_XVI_Gustaf', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Carl_XVI_Gustaf_in_2023.jpg/330px-Carl_XVI_Gustaf_in_2023.jpg' },
  no: { title: 'Harald_V_of_Norway', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/King_Harald_V_official_portrait.jpg/330px-King_Harald_V_official_portrait.jpg' },
  dk: { title: 'Frederik_X_of_Denmark', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/King_Frederik_X_official_portrait_2024.jpg/330px-King_Frederik_X_official_portrait_2024.jpg' },
  va: { title: 'Pope_Francis', fallbackThumb: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Pope_Francis_in_2023.jpg/330px-Pope_Francis_in_2023.jpg' },
};

function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeCache(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    // ignore
  }
}

/**
 * جلب الصورة الرسمية والبيانات المحدثة تلقائياً من ويكيبيديا
 */
export async function fetchWikipediaLeaderData(countryId, leaderNameFallback = '') {
  if (!countryId) return null;
  const cid = countryId.toLowerCase();
  const cache = readCache();
  const now = Date.now();

  // فحص الكاش المحلي إذا كان محدثاً
  if (cache[cid] && now - cache[cid].timestamp < CACHE_EXPIRY_MS) {
    return cache[cid].data;
  }

  const mapping = WIKIPEDIA_LEADER_PAGES[cid];
  const queryTitle = mapping?.title || leaderNameFallback.replace(/^(King|President|Emir|Sultan|Prime Minister)\s+/i, '').replace(/\s+/g, '_');

  if (!queryTitle) return null;

  try {
    const endpoint = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(queryTitle)}`;
    const response = await fetch(endpoint, {
      headers: {
        'User-Agent': 'GeoNexusGeopoliticalPlatform/2.0 (Official Wikipedia Synchronization)',
      },
    });

    if (!response.ok) {
      // استخدام الصورة البديلة الموثقة من ويكيميديا
      if (mapping?.fallbackThumb) {
        const fallbackData = {
          photo: mapping.fallbackThumb,
          wikiUrl: `https://en.wikipedia.org/wiki/${encodeURIComponent(queryTitle)}`,
          extract: '',
          title: queryTitle.replace(/_/g, ' '),
          isAutoSynced: true,
          source: 'Wikipedia / Wikimedia Commons',
        };
        cache[cid] = { timestamp: now, data: fallbackData };
        writeCache(cache);
        return fallbackData;
      }
      return null;
    }

    const json = await response.json();
    const result = {
      photo: json.thumbnail?.source || mapping?.fallbackThumb || null,
      wikiUrl: json.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${encodeURIComponent(queryTitle)}`,
      extract: json.extract || '',
      title: json.title || queryTitle.replace(/_/g, ' '),
      description: json.description || '',
      isAutoSynced: true,
      source: 'Wikipedia / Wikimedia Commons',
      lastFetched: new Date().toISOString(),
    };

    cache[cid] = { timestamp: now, data: result };
    writeCache(cache);
    return result;
  } catch {
    if (mapping?.fallbackThumb) {
      return {
        photo: mapping.fallbackThumb,
        wikiUrl: `https://en.wikipedia.org/wiki/${encodeURIComponent(queryTitle)}`,
        extract: '',
        title: queryTitle.replace(/_/g, ' '),
        isAutoSynced: true,
        source: 'Wikipedia / Wikimedia Commons',
      };
    }
    return null;
  }
}

/**
 * الحصول على الصورة المعتمدة والمباشرة من السجل المحلي/ويكيميديا فورياً بدون انتظار
 */
export function getImmediateWikipediaLeader(countryId) {
  if (!countryId) return null;
  const cid = countryId.toLowerCase();
  const cache = readCache();
  if (cache[cid]?.data) return cache[cid].data;

  const mapping = WIKIPEDIA_LEADER_PAGES[cid];
  if (mapping) {
    return {
      photo: mapping.fallbackThumb,
      wikiUrl: `https://en.wikipedia.org/wiki/${encodeURIComponent(mapping.title)}`,
      title: mapping.title.replace(/_/g, ' '),
      isAutoSynced: true,
      source: 'Wikipedia / Wikimedia Commons',
    };
  }
  return null;
}
