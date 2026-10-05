/**
 * مُجمّع البيانات: يحوّل الصفوف الأساسية + الملفات التفصيلية إلى بنية
 * { ar: {...}, en: {...} } كما تحتاجه الواجهة.
 */

import { AFRICA } from './core/africa.js';
import { ASIA } from './core/asia.js';
import { EUROPE } from './core/europe.js';
import { AMERICAS, OCEANIA } from './core/americas.js';
import { buildCountry, TITLES, REGIMES, REGIONS, ALLIANCES as ALLIANCES_BASE } from './schema.js';
import { DOSSIERS } from './dossiers.js';
import { getCountryPartiesData } from './partiesRegistry.js';

const RAW = [
  ...AFRICA.map((r) => buildCountry(r, 'africa')),
  ...ASIA.map((r) => buildCountry(r, 'asia')),
  ...EUROPE.map((r) => buildCountry(r, 'europe')),
  ...AMERICAS.map((r) => buildCountry(r, null)),
  ...OCEANIA.map((r) => buildCountry(r, 'oceania')),
];

/** منع التكرار (معرّف مكرر) */
const CORE = RAW.filter((c, i) => RAW.findIndex((x) => x.id === c.id) === i);

const CONTINENTS = [
  { id: 'africa', ar: 'أفريقيا', en: 'Africa' },
  { id: 'asia', ar: 'آسيا', en: 'Asia' },
  { id: 'europe', ar: 'أوروبا', en: 'Europe' },
  { id: 'north-america', ar: 'أمريكا الشمالية', en: 'North America' },
  { id: 'south-america', ar: 'أمريكا الجنوبية', en: 'South America' },
  { id: 'oceania', ar: 'أوقيانوسيا', en: 'Oceania' },
];

const UN_ALLIANCE = {
  id: 'un',
  ar: 'الأمم المتحدة',
  en: 'United Nations',
  focusAr: 'إطار أمني ودبلوماسي عالمي',
  focusEn: 'Global security and diplomatic framework',
  tone: 'blue',
};

const ALLIANCES = [...ALLIANCES_BASE, { ...UN_ALLIANCE, members: CORE.map((c) => c.id) }];

/** reanaccount allergies from the full alliance list (includes UN) */
function allianceIdsFor(id) {
  return ALLIANCES.filter((a) => a.members.includes(id)).map((a) => a.id);
}

function budgetLabel(bn) {
  if (!bn) return '—';
  if (bn >= 1000) return `$${(bn / 1000).toFixed(2)}T`;
  if (bn >= 1) return `$${bn.toFixed(1)}B`;
  return `$${(bn * 1000).toFixed(0)}M`;
}

function buildLang(lang) {
  const t = (obj) => (obj ? obj[lang] : '');

  const countries = CORE.map((c) => {
    const d = DOSSIERS[c.id];
    const ids = allianceIdsFor(c.id);
    const alliances = ALLIANCES.filter((a) => ids.includes(a.id));
    const cont = CONTINENTS.find((x) => x.id === c.continent);

    const rawParties = d ? t(d.parties) : [];
    const partyInfo = getCountryPartiesData(
      {
        id: c.id,
        name: t(c.name),
        regime: t(REGIMES[c.regime]),
        parties: rawParties,
      },
      lang,
    );

    return {
      id: c.id,
      flag: c.flag,
      name: t(c.name),
      capital: t(c.capital),
      coordinates: c.coordinates,
      continent: c.continent,
      continentLabel: t(cont),
      region: c.region,
      regionLabel: t(REGIONS[c.region]),
      leader: t(c.leader),
      leaderTitle: t(TITLES[c.titleKey]),
      regime: t(REGIMES[c.regime]),
      populationM: c.populationM,
      militaryBudget: budgetLabel(c.militaryBudgetBn),
      militaryBudgetBn: c.militaryBudgetBn,
      alliances: alliances.map((a) => t(a)),
      allianceIds: ids,
      detailed: Boolean(d),
      parties: partyInfo.parties,
      partiesCount: partyInfo.count,
      partySystem: partyInfo.system,
      partiesNote: partyInfo.note,
      rulingParty: partyInfo.parties[0] ?? '—',
      militaryLeader: d ? t(d.military) : t(TITLES[c.titleKey]),
      topCompanies: d
        ? d.companies.map((co) => ({
            name: lang === 'ar' ? co.ar : co.name,
            sector: lang === 'ar' ? co.sector : co.sectorEn,
            pressure: lang === 'ar' ? co.pressure : co.pressureEn,
          }))
        : [],
      risk: d
        ? {
            laundering: t(d.risk.laundering),
            trafficking: t(d.risk.trafficking),
            terrorism: t(d.risk.terrorism),
          }
        : null,
      historicalEvents: d ? t(d.events) : [],
    };
  });

  const continents = CONTINENTS.map((c) => ({
    id: c.id,
    name: t(c),
    countriesCount: countries.filter((x) => x.continent === c.id).length,
  }));

  const regions = [...new Set(CORE.map((c) => c.region))].map((r) => ({
    id: r,
    name: t(REGIONS[r]),
    continent: REGIONS[r].continent,
  }));

  return {
    title: lang === 'ar' ? 'منصة GeoNexus الجيوسياسية' : 'GeoNexus Geopolitical Platform',
    subtitle:
      lang === 'ar'
        ? 'قاعدة بيانات استخباراتية تغطي دول العالم وقاراتها وتحالفاتها واقتصاداتها وجيوشها — من الماضي حتى 2026.'
        : 'An intelligence database covering the world’s nations, continents, alliances, economies and militaries — from history through 2026.',
    continents,
    regions,
    countries,
    alliancesList: ALLIANCES.map((a) => ({
      id: a.id,
      name: t(a),
      focus: lang === 'ar' ? a.focusAr : a.focusEn,
      tone: a.tone,
      members: a.members.length,
      memberIds: a.members,
    })),
    coverage: {
      total: countries.length,
      detailed: countries.filter((c) => c.detailed).length,
      alliances: ALLIANCES.length,
    },
    newsTicker: lang === 'ar' ? NEWS_AR : NEWS_EN,
  };
}

const NEWS_AR = [
  'GeoNexus 2026: قاعدة بيانات تغطي دول العالم مع ملفات تفصيلية تُحدَّث دورياً.',
  'تحديث تلقائي: شريط الأخبار يجلب آخر المستجدات من GDELT كل 10 دقائق.',
  'مؤشرات غسيل الأموال والاتجار بالبشر تقديرية من مصادر مفتوحة وليست أحكاماً قضائية.',
  'بيانات ميزانيات الجيوش تقديرية ومبنية على تقارير SIPRI وIIMR.',
];

const NEWS_EN = [
  'GeoNexus 2026: a database covering every nation with dossiers updated periodically.',
  'Auto-sync: the news bar pulls the latest developments from GDELT every 10 minutes.',
  'Money-laundering and trafficking indicators are open-source estimates, not legal findings.',
  'Defence-budget figures are estimates based on SIPRI and IIMR reporting.',
];

export const geopoliticalData = {
  ar: buildLang('ar'),
  en: buildLang('en'),
};
