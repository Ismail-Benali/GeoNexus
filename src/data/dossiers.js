/**
 * الملفات التفصيلية (dossiers)
 * 1) تُشتق 12 ملفاً تفصيلياً من ملف البيانات الأصلي (نصوص نظيفة معتمدة)
 * 2) تُضاف ملفات تك_country جديدة لـ 8 دول
 */

import { geopoliticalData as legacy } from './geopoliticalData.js';
import { EXTRA_DOSSIERS } from './dossiersExtra.js';

/** تحويل معرّفات البيانات القديمة إلى المعرّفات الموحدة */
const ID_MAP = {
  usa: 'us',
  china: 'cn',
  russia: 'ru',
  saudi: 'sa',
  uae: 'ae',
  uk: 'gb',
  germany: 'de',
  france: 'fr',
  japan: 'jp',
  india: 'in',
  brazil: 'br',
  southafrica: 'za',
};

function fromLegacy() {
  const out = {};

  legacy.ar.countries.forEach((arCountry, i) => {
    const id = ID_MAP[arCountry.id];
    if (!id) return;
    const enCountry = legacy.en.countries[i];

    out[id] = {
      parties: { ar: arCountry.parties, en: enCountry.parties },
      military: { ar: arCountry.militaryLeader, en: enCountry.militaryLeader },
      companies: arCountry.topCompanies.map((c, k) => ({
        name: c.name,
        ar: c.name,
        sector: c.sector,
        sectorEn: enCountry.topCompanies[k]?.sector ?? c.sector,
        pressure: c.pressure,
        pressureEn: enCountry.topCompanies[k]?.pressure ?? c.pressure,
      })),
      risk: {
        laundering: { ar: arCountry.corruptionLaundering.moneyLaunderingRisk, en: enCountry.corruptionLaundering.moneyLaunderingRisk },
        trafficking: { ar: arCountry.corruptionLaundering.humanTrafficking, en: enCountry.corruptionLaundering.humanTrafficking },
        terrorism: { ar: arCountry.corruptionLaundering.terrorismThreat, en: enCountry.corruptionLaundering.terrorismThreat },
      },
      events: { ar: arCountry.historicalEvents, en: enCountry.historicalEvents },
    };
  });

  return out;
}

export const DOSSIERS = { ...fromLegacy(), ...EXTRA_DOSSIERS };

export const DOSSIER_COUNT = Object.keys(DOSSIERS).length;
