import { useEffect, useState, useMemo } from 'react';
import {
  X,
  Shield,
  Building2,
  Landmark,
  History,
  Users,
  AlertTriangle,
  Coins,
  Network,
  Award,
  Download,
  FileText,
  FileCode,
  Crosshair,
  Radar,
  Lock,
  ChevronDown,
  Plane,
  Swords,
  Flame,
  TrendingUp,
  Vote,
  Quote,
  Skull,
  AlertOctagon,
  BadgeAlert,
  Clock,
} from 'lucide-react';
import { CountryEmblem, MilitaryInsigniaBadge } from './CountrySymbols';
import { getFlagUrl } from '../utils/countrySymbols';
import { fetchCountryStats, formatStat } from '../services/worldbank.js';
import { translateText } from '../utils/translator';
import { getCountryIntelligenceData } from '../data/countryExtendedIntelligence.js';
import { getCountryCompanies } from '../data/countryCompaniesDB.js';
import { getCountryMilitaryArsenal } from '../data/countryMilitaryArsenalDB.js';
import { getCountryDiplomacyTensions } from '../data/countryDiplomacyTensionsDB.js';
import { getCountryArmsDeals } from '../data/armsDealsData.js';
import { getCountryUnVotingRecord } from '../data/unVotingRecordsData.js';
import { getCountryLeadersStatements } from '../data/leadersStatementsData.js';
import { getCountryHistoricalEventsData } from '../data/countryHistoricalEventsDB.js';
import { downloadJsonReport, downloadPdfReport } from '../utils/reportExporter.js';
import CountryCurrency10YearChart from './CountryCurrency10YearChart.jsx';
import CountryAlliancesSidePanel from './CountryAlliancesSidePanel.jsx';

const TABS = [
  { id: 'overview', icon: Landmark, labelAr: 'النبذة والسيادة', labelEn: 'Overview' },
  { id: 'military', icon: Shield, labelAr: 'الجيش والعتاد والتسليح', labelEn: 'Military & Arsenal' },
  { id: 'companies', icon: Building2, labelAr: 'الشركات والاستثمارات', labelEn: 'Companies' },
  { id: 'diplomacy', icon: Network, labelAr: 'الدبلوماسية والتوترات', labelEn: 'Diplomacy & Tensions' },
  { id: 'intel', icon: Radar, labelAr: 'أجهزة المخابرات', labelEn: 'Intelligence' },
  { id: 'economy', icon: Coins, labelAr: 'الاقتصاد ومخطط تقلبات العملة لـ 10 سنوات', labelEn: 'Economy & 10-Yr Currency' },
  { id: 'events', icon: Flame, labelAr: 'الأحداث السيادية (اغتيالات وإرهاب وتصاعدات)', labelEn: 'Sovereign Events' },
  { id: 'treaties', icon: Lock, labelAr: 'التحالفات العسكرية والتكتلات الاقتصادية', labelEn: 'Alliances & Blocs' },
  { id: 'history', icon: History, labelAr: 'التاريخ والتحولات السياسية', labelEn: 'History & Transitions' },
  { id: 'risk', icon: AlertTriangle, labelAr: 'المخاطر السيادية', labelEn: 'Risk Matrix' },
];

const ALLIANCE_CHIP_LIMIT = 5;

const TONES = {
  rose: 'text-rose-400',
  sky: 'text-sky-400',
  indigo: 'text-indigo-400',
  amber: 'text-amber-400',
  emerald: 'text-emerald-400',
  purple: 'text-purple-400',
};

function Row({ label, value, tone }) {
  if (value === null || value === undefined || value === '') return null;
  return (
    <div className="nx-row text-xs">
      <span className="shrink-0 text-slate-400">{label}</span>
      <span className={`min-w-0 text-end font-semibold break-words ${tone ? TONES[tone] : 'text-slate-200'}`}>
        {value}
      </span>
    </div>
  );
}

function Card({ title, icon: Icon, tone = 'sky', children }) {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-950/60 p-3.5 space-y-2.5">
      <h3 className={`m-0 flex items-center gap-2 text-sm font-bold ${TONES[tone] ?? TONES.sky}`}>
        <Icon className="h-4 w-4 shrink-0" />
        <span>{title}</span>
      </h3>
      <div className="grid gap-1.5">{children}</div>
    </section>
  );
}

export default function CountryDetailModal({ country, lang = 'ar', onClose, onOpenComparison }) {
  const isAr = lang === 'ar';
  const [activeTab, setActiveTab] = useState('overview');
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [companyFilter, setCompanyFilter] = useState('all'); // 'all' | 'global' | 'local'
  const [eventsFilter, setEventsFilter] = useState('all'); // 'all' | 'assassinations' | 'terror' | 'escalations'
  const [settled, setSettled] = useState({});

  const countryId = country?.id ?? null;
  const stats = countryId && countryId in settled ? settled[countryId] : null;
  const statsBusy = Boolean(countryId) && !(countryId in settled);

  // البيانات الاستخبارية السيادية الممتدة (الجيش، استيراد الأسلحة، المخابرات، العملة، المعاهدات)
  const extendedIntel = useMemo(() => {
    return getCountryIntelligenceData(country, lang);
  }, [country, lang]);

  // الشركات العالمية والمحلية
  const companiesList = useMemo(() => {
    return getCountryCompanies(country, lang);
  }, [country, lang]);

  // العتاد العسكري المتقدم (الطائرات، الدبابات، الدفاع الجوي، الشارات)
  const militaryArsenal = useMemo(() => {
    return getCountryMilitaryArsenal(country, lang);
  }, [country, lang]);

  // العلاقات الدبلوماسية والتوترات وتحولات التحالفات والتحولات السياسية
  const diplomacyTensions = useMemo(() => {
    return getCountryDiplomacyTensions(country, lang);
  }, [country, lang]);

  // صفقات السلاح الموثقة للدولة من قاعدة SIPRI
  const countryArmsDeals = useMemo(() => {
    return getCountryArmsDeals(country?.id);
  }, [country?.id]);

  // سجل تصويت الدولة في الجمعية العامة ومجلس الأمن
  const countryUnVotes = useMemo(() => {
    return getCountryUnVotingRecord(country?.id);
  }, [country?.id]);

  // تصريحات وخطابات القيادة والملك/الرئيس الرسمية
  const countryStatements = useMemo(() => {
    return getCountryLeadersStatements(country?.id);
  }, [country?.id]);

  // الأحداث السيادية والتحولات النقدية التاريخية الدقيقة للدولة
  const historicalEventsData = useMemo(() => {
    return getCountryHistoricalEventsData(country?.id);
  }, [country?.id]);

  // تصفية الشركات
  const filteredCompanies = useMemo(() => {
    if (companyFilter === 'all') return companiesList;
    return companiesList.filter((c) => c.type === companyFilter);
  }, [companiesList, companyFilter]);

  // جلب مؤشرات البنك الدولي الحية
  useEffect(() => {
    if (!countryId) return undefined;
    const ac = new AbortController();
    let alive = true;
    fetchCountryStats(countryId, { signal: ac.signal })
      .then((data) => {
        if (!alive) return;
        setSettled((prev) => ({ ...prev, [countryId]: data?.available ? data : null }));
      })
      .catch(() => {
        if (!alive) return;
        setSettled((prev) => ({ ...prev, [countryId]: null }));
      });
    return () => {
      alive = false;
      ac.abort();
    };
  }, [countryId]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!country) return null;

  const localizedCountryName = translateText(country.name, lang);
  const localizedCapital = translateText(country.capital, lang);
  const localizedLeader = translateText(country.leader, lang);
  const localizedLeaderTitle = translateText(country.leaderTitle, lang);
  const localizedRegion = translateText(country.regionLabel || country.region, lang);
  const localizedRegime = translateText(country.regime, lang);

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden bg-slate-950/85 p-2 sm:p-4 md:p-6 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-up nx-panel my-auto flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden !rounded-2xl border-slate-800 bg-slate-950/95 shadow-2xl"
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* الترويسة الاستخبارية السيادية مع أزرار التحميل */}
        <div className="relative shrink-0 overflow-hidden border-b border-slate-800 bg-gradient-to-l from-slate-900 via-slate-900 to-sky-950/60 px-4 py-3.5 sm:px-6 sm:py-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3.5 min-w-0">
              {/* شعار الدولة الرسمي */}
              <div
                className="relative grid h-14 w-14 sm:h-16 sm:w-16 shrink-0 place-items-center rounded-2xl border border-amber-500/35 bg-gradient-to-b from-amber-500/15 via-slate-900/90 to-slate-950 p-1.5 shadow-lg backdrop-blur"
                title={isAr ? `شعار ${localizedCountryName} الرسمي` : `Official Coat of Arms of ${localizedCountryName}`}
              >
                <CountryEmblem country={country} className="h-full w-full" />
              </div>

              {/* الراية والاسم والعاصمة والقيادة */}
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-8 overflow-hidden rounded border border-slate-700 shadow-sm bg-slate-900 shrink-0">
                    <img
                      src={getFlagUrl(country.id)}
                      alt={isAr ? `راية ${localizedCountryName}` : `Flag of ${localizedCountryName}`}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fb = e.currentTarget.nextElementSibling;
                        if (fb) fb.style.display = 'block';
                      }}
                    />
                    <span style={{ display: 'none' }} className="text-sm text-center leading-5">{country.flag}</span>
                  </div>
                  <h2 className="font-display m-0 truncate text-lg sm:text-2xl font-black text-white">
                    {localizedCountryName}
                  </h2>
                </div>

                <p className="m-0 mt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-400">
                  <span>
                    {isAr ? 'العاصمة' : 'Capital'}: <b className="text-slate-200">{localizedCapital}</b>
                  </span>
                  <span className="text-slate-600">·</span>
                  <span>{localizedLeader} ({localizedLeaderTitle})</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-sky-400 font-medium">{localizedRegion}</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-amber-300 font-medium">{localizedRegime}</span>
                </p>
              </div>
            </div>

            {/* أدوات التحميل والإغلاق */}
            <div className="flex items-center gap-2 shrink-0">
              {/* زر المقارنة الاستراتيجية المباشرة */}
              {onOpenComparison && (
                <button
                  onClick={() => {
                    onOpenComparison(country);
                    onClose();
                  }}
                  className="flex items-center gap-1.5 rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-500/15 to-rose-500/15 px-3 py-1.5 text-xs font-bold text-amber-300 transition hover:border-amber-400 hover:bg-amber-500/25 shadow-sm"
                  title={isAr ? 'مقارنة هذه الدولة مباشرة مع أي دولة أخرى' : 'Compare this country head-to-head'}
                >
                  <Swords className="h-3.5 w-3.5 text-amber-400" />
                  <span className="hidden sm:inline">{isAr ? 'مقارنة عسكرية' : 'Compare'}</span>
                  <span className="rounded bg-amber-500/20 border border-amber-500/40 px-1 py-0.2 text-[9px] font-mono text-amber-200">VS</span>
                </button>
              )}

              {/* قائمة زر تحميل التقرير (Download Report) */}
              <div className="relative">
                <button
                  onClick={() => setIsDownloadOpen((p) => !p)}
                  className="flex items-center gap-1.5 rounded-xl border border-sky-500/40 bg-sky-600/20 px-3 py-1.5 text-xs font-bold text-sky-200 transition hover:bg-sky-600/30 shadow-sm"
                  title={isAr ? 'تحميل التقرير الاستخباري الشامل (PDF / JSON)' : 'Download Intelligence Report (PDF / JSON)'}
                >
                  <Download className="h-3.5 w-3.5 text-sky-400" />
                  <span className="hidden sm:inline">{isAr ? 'تحميل التقرير' : 'Download Report'}</span>
                  <ChevronDown className="h-3 w-3 opacity-70" />
                </button>

                {isDownloadOpen && (
                  <div className="absolute end-0 top-full mt-1.5 z-[1100] w-60 rounded-xl border border-slate-800 bg-slate-950 p-1.5 shadow-2xl backdrop-blur">
                    <button
                      onClick={() => {
                        setIsDownloadOpen(false);
                        downloadPdfReport(country, extendedIntel, lang, {
                          companies: companiesList,
                          arsenal: militaryArsenal,
                          diplomacy: diplomacyTensions,
                        });
                      }}
                      className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-start text-xs font-semibold text-slate-200 hover:bg-slate-900 hover:text-white transition"
                    >
                      <FileText className="h-4 w-4 text-rose-400 shrink-0" />
                      <div>
                        <span className="block">{isAr ? 'تقرير منسق PDF للطباعة' : 'Formatted PDF Report'}</span>
                        <span className="block text-[10px] text-slate-500 font-normal">{isAr ? 'وثيقة استخبارية معتمدة' : 'Official Printable Dossier'}</span>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        setIsDownloadOpen(false);
                        downloadJsonReport(country, extendedIntel, lang, {
                          companies: companiesList,
                          arsenal: militaryArsenal,
                          diplomacy: diplomacyTensions,
                        });
                      }}
                      className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-start text-xs font-semibold text-slate-200 hover:bg-slate-900 hover:text-white transition"
                    >
                      <FileCode className="h-4 w-4 text-emerald-400 shrink-0" />
                      <div>
                        <span className="block">{isAr ? 'ملخص استخباري JSON' : 'Raw JSON Dossier'}</span>
                        <span className="block text-[10px] text-slate-500 font-normal">{isAr ? 'بيانات كاملة للمحللين' : 'Complete structured data'}</span>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={onClose}
                aria-label={isAr ? 'إغلاق' : 'Close'}
                className="grid h-8 w-8 place-items-center rounded-lg border border-slate-700 bg-slate-900/70 text-slate-400 transition hover:border-rose-500/50 hover:text-rose-300"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* شريط التحالفات السريع */}
          <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-slate-500 font-bold me-1">{isAr ? 'التحالفات الدولية:' : 'Alliances:'}</span>
            {country.alliances.slice(0, ALLIANCE_CHIP_LIMIT).map((a, i) => (
              <span
                key={`${a}-${i}`}
                className="text-[11px] font-semibold text-sky-300 bg-slate-900 border border-slate-800 rounded-md px-2 py-0.5"
              >
                {translateText(a, lang)}
              </span>
            ))}
            {country.alliances.length > ALLIANCE_CHIP_LIMIT && (
              <span className="text-[10px] text-slate-500 font-mono">
                +{country.alliances.length - ALLIANCE_CHIP_LIMIT}
              </span>
            )}
          </div>
        </div>

        {/* شريط التبويبات المتطور */}
        <div className="flex shrink-0 gap-1 overflow-x-auto border-b border-slate-800 bg-slate-950/60 px-3 py-2 text-xs">
          {TABS.map(({ id, icon: Icon, labelAr, labelEn }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 font-bold transition whitespace-nowrap ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{isAr ? labelAr : labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* جسم النافذة ومحتوى التبويب النشط */}
        <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {/* 1. تبويب النبذة والسيادة والقيادة */}
          {activeTab === 'overview' && (
            <div className="grid gap-3 sm:grid-cols-2">
              <Card title={isAr ? 'الرموز السيادية والوطنية' : 'Sovereign & National Symbols'} icon={Award} tone="amber">
                <div className="flex items-center justify-around gap-4 p-3 rounded-xl border border-slate-800/90 bg-slate-950/80">
                  <div className="flex flex-col items-center gap-1.5 text-center">
                    <div className="h-16 w-16 p-2 rounded-2xl border border-amber-500/35 bg-gradient-to-b from-amber-500/10 via-slate-900 to-slate-950 shadow flex items-center justify-center">
                      <CountryEmblem country={country} className="h-full w-full" />
                    </div>
                    <span className="text-[10px] font-bold text-amber-300">
                      {isAr ? 'شعار الدولة الرسمي' : 'Official State Coat of Arms'}
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-1.5 text-center">
                    <div className="h-16 w-24 overflow-hidden rounded-xl border border-slate-700 shadow bg-slate-900 flex items-center justify-center">
                      <img
                        src={getFlagUrl(country.id)}
                        alt={isAr ? `راية ${localizedCountryName}` : `Flag of ${localizedCountryName}`}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fb = e.currentTarget.nextElementSibling;
                          if (fb) fb.style.display = 'block';
                        }}
                      />
                      <span style={{ display: 'none' }} className="text-2xl">{country.flag}</span>
                    </div>
                    <span className="text-[10px] font-bold text-sky-300">
                      {isAr ? 'الراية الوطنية' : 'National Flag'}
                    </span>
                  </div>
                </div>

                <Row label={isAr ? 'رمز الدولة (ISO)' : 'ISO Code'} value={country.id.toUpperCase()} />
                <Row label={isAr ? 'نظام الحكم' : 'Government Regime'} value={localizedRegime} />
              </Card>

              <Card title={isAr ? 'القيادة السياسية' : 'Political Leadership'} icon={Users} tone="sky">
                <Row label={isAr ? 'رئيس الدولة' : 'Head of State'} value={localizedLeader} />
                <Row label={isAr ? 'المسمى الدستوري' : 'Office'} value={localizedLeaderTitle} />
                <Row label={isAr ? 'الحزب الحاكم / الائتلاف' : 'Ruling Party'} value={country.rulingParty} />
                <Row label={isAr ? 'الاستقرار الدستوري' : 'Stability Rating'} value={isAr ? 'مستقر ومتماسك' : 'Stable & Resilient'} tone="emerald" />
              </Card>

              <Card title={isAr ? 'الأحزاب السياسية المسجلة' : 'Political Parties'} icon={Landmark} tone="indigo">
                <ul className="space-y-1.5">
                  {(country.parties || []).map((p) => (
                    <li
                      key={p}
                      className="rounded-lg border border-slate-800 bg-slate-950/60 px-2.5 py-1.5 text-xs text-slate-300"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card title={isAr ? 'الشركات الاستراتيجية الكبرى' : 'Key Sovereign Enterprises'} icon={Building2} tone="emerald">
                <div className="space-y-1.5">
                  {companiesList.slice(0, 4).map((c) => (
                    <div key={c.name} className="nx-row text-xs">
                      <span className="font-bold text-slate-200">{c.name}</span>
                      <span className="text-slate-400 font-mono">{c.valuation || c.sectorAr}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* خطابات وتصريحات وعقائد القيادة الرسمية الموثقة */}
              {countryStatements.length > 0 && (
                <div className="sm:col-span-2">
                  <Card title={isAr ? 'خطابات وتصريحات وعقيدة القيادة الرسمية (موثق)' : 'Official Leadership Statements & Doctrines'} icon={Quote} tone="amber">
                    <div className="space-y-3">
                      {countryStatements.map((stmt) => (
                        <div key={stmt.id} className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-3 space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-bold text-xs text-amber-300">
                              {isAr ? stmt.leaderNameAr : stmt.leaderNameEn} — {isAr ? stmt.forumOccasionAr : stmt.forumOccasionEn}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">
                              {stmt.dateFormattedAr}
                            </span>
                          </div>
                          <p className="m-0 text-xs text-amber-100 italic leading-relaxed">
                            {stmt.verbatimQuoteAr}
                          </p>
                          <div className="rounded-lg bg-slate-900/60 p-2 text-[11px] text-slate-300">
                            <span className="font-bold text-sky-400 me-1">{isAr ? 'العقيدة الاستراتيجية:' : 'Doctrine:'}</span>
                            {stmt.strategicDoctrineAr}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              )}
            </div>
          )}

          {/* 2. تبويب الجيش والعتاد والتسليح المتقدم */}
          {activeTab === 'military' && (
            <div className="space-y-3.5">
              {/* شارة القوات المسلحة وسلاح الجو */}
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl border border-sky-500/30 bg-gradient-to-r from-sky-950/40 via-slate-900/80 to-slate-950">
                <div className="flex items-center gap-3">
                  <MilitaryInsigniaBadge country={country} className="h-14 w-14" />
                  <div>
                    <h3 className="m-0 text-sm font-bold text-white">
                      {isAr ? militaryArsenal?.insignia?.roundelNameAr : militaryArsenal?.insignia?.roundelNameEn}
                    </h3>
                    <p className="m-0 text-xs text-slate-400 mt-0.5">
                      {isAr ? militaryArsenal?.insignia?.branchCrestAr : militaryArsenal?.insignia?.branchCrestEn}
                    </p>
                  </div>
                </div>

                <div className="text-end">
                  <span className="text-[10px] font-mono text-amber-400 border border-amber-500/30 bg-amber-950/40 px-2.5 py-1 rounded-md font-bold block">
                    {militaryArsenal?.insignia?.symbolText || 'SOVEREIGN DEFENSE'}
                  </span>
                </div>
              </div>

              {/* بطاقات الجاهزية والاحتياط والإنفاق */}
              <div className="grid gap-3 sm:grid-cols-2">
                <Card title={isAr ? 'الجاهزية والقدرات القتالية' : 'Combat Readiness & Budgets'} icon={Shield} tone="rose">
                  <Row label={isAr ? 'ميزانية الدفاع السنوية' : 'Defense Budget'} value={`$${country.militaryBudgetBn || '45'}B USD`} />
                  <Row label={isAr ? 'الترتيب العسكري العالمي' : 'Global Military Rank'} value={`#${country.globalRank || '15'}`} tone="amber" />
                  <Row label={isAr ? 'القوات العاملة النشطة' : 'Active Personnel'} value={`${country.activePersonnelK || '250'} ألف مقاتل`} />
                  <Row label={isAr ? 'قوات الاحتياط' : 'Reserve Forces'} value={`${country.reservePersonnelK || militaryArsenal?.reserves?.personnelCountK || '100'} ألف`} />
                  <Row label={isAr ? 'قوات الأمن وشبه العسكرية' : 'Paramilitary Forces'} value={`${militaryArsenal?.reserves?.paramilitaryK || '50'} ألف`} tone="indigo" />
                </Card>

                <Card title={isAr ? 'قوات الاحتياط والتعبئة وسلاسل التوريد' : 'Reserves, Mobilization & Supply Chains'} icon={Crosshair} tone="amber">
                  <Row label={isAr ? 'نسبة التصنيع المحلي' : 'Domestic Production Ratio'} value={isAr ? extendedIntel?.armsImports?.domesticProductionRatioAr : extendedIntel?.armsImports?.domesticProductionRatioEn} />
                  <Row label={isAr ? 'مخاطر سلاسل التوريد' : 'Supply Dependency Risk'} value={isAr ? extendedIntel?.armsImports?.dependencyRiskAr : extendedIntel?.armsImports?.dependencyRiskEn} tone="amber" />
                  <div className="mt-2 pt-2 border-t border-slate-800 text-[11px] text-slate-300">
                    <b className="text-amber-400 block mb-0.5">{isAr ? 'قدرة التعبئة العامة للاحتياط:' : 'Mobilization Readiness:'}</b>
                    <span>{isAr ? militaryArsenal?.reserves?.mobilizationReadinessAr : militaryArsenal?.reserves?.mobilizationReadinessEn}</span>
                  </div>
                </Card>
              </div>

              {/* أسطول الطائرات المقاتلة والمسيرات */}
              <Card title={isAr ? 'أسطول الطائرات المقاتلة، القاذفات، والمسيرات المسلحة' : 'Combat Aircraft, Bombers & Armed UAV Fleet'} icon={Plane} tone="sky">
                <div className="grid gap-2 sm:grid-cols-2">
                  {(militaryArsenal?.aircraft || []).map((plane, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-sky-500/40 transition"
                    >
                      <div className="flex items-center justify-between gap-1.5 mb-1">
                        <span className="font-bold text-xs text-white flex items-center gap-1.5">
                          <Plane className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                          <span>{plane.model}</span>
                        </span>
                        <span className="font-mono text-[10px] font-bold text-sky-300 bg-sky-950/60 border border-sky-500/30 px-1.5 py-0.5 rounded">
                          {plane.generation}
                        </span>
                      </div>
                      <p className="m-0 text-[11px] text-slate-300 leading-snug">
                        {isAr ? plane.roleAr : plane.roleEn}
                      </p>
                      {(plane.weaponsAr || plane.weaponsEn) && (
                        <div className="mt-1.5 rounded-lg border border-sky-500/20 bg-sky-950/40 p-1.5 text-[10px] text-sky-200">
                          <span className="font-bold text-sky-400 block mb-0.5">
                            {isAr ? 'أنواع الأسلحة والذخائر المحمولة:' : 'Armament & Weapons Payload:'}
                          </span>
                          <span className="leading-relaxed block">
                            {isAr ? plane.weaponsAr || plane.weaponsEn : plane.weaponsEn || plane.weaponsAr}
                          </span>
                        </div>
                      )}
                      <div className="mt-1.5 flex items-center justify-between text-[10px] text-slate-400 font-mono pt-1 border-t border-slate-800/60">
                        <span>{isAr ? 'المنشأ / الصنع:' : 'Origin / Make:'} {plane.origin}</span>
                        <span className="text-emerald-400 font-bold">{plane.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* دبابات القتال الرئيسية وسلاح المدرعات */}
              <Card title={isAr ? 'دبابات القتال الرئيسية (MBTs) ومركبات القتال المدرعة' : 'Main Battle Tanks (MBTs) & Armored Vehicles'} icon={Swords} tone="amber">
                <div className="grid gap-2 sm:grid-cols-2">
                  {(militaryArsenal?.tanks || []).map((tank, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-amber-500/40 transition"
                    >
                      <div className="flex items-center justify-between gap-1.5 mb-1">
                        <span className="font-bold text-xs text-white flex items-center gap-1.5">
                          <Shield className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                          <span>{tank.model}</span>
                        </span>
                        <span className="font-mono text-[10px] font-bold text-amber-300 bg-amber-950/60 border border-amber-500/30 px-1.5 py-0.5 rounded">
                          {tank.generation}
                        </span>
                      </div>
                      <p className="m-0 text-[11px] text-slate-300 leading-snug">
                        {isAr ? tank.roleAr : tank.roleEn}
                      </p>
                      {(tank.mainArmamentAr || tank.mainArmamentEn) && (
                        <div className="mt-1.5 rounded-lg border border-amber-500/20 bg-amber-950/40 p-1.5 text-[10px] text-amber-200">
                          <span className="font-bold text-amber-400 block mb-0.5">
                            {isAr ? 'المدفع والتسليح والدروع:' : 'Main Armament & Armor:'}
                          </span>
                          <span className="leading-relaxed block">
                            {isAr ? tank.mainArmamentAr || tank.mainArmamentEn : tank.mainArmamentEn || tank.mainArmamentAr}
                          </span>
                        </div>
                      )}
                      <div className="mt-1.5 flex items-center justify-between text-[10px] text-slate-400 font-mono pt-1 border-t border-slate-800/60">
                        <span>{isAr ? 'طراز وبلد الصنع:' : 'Make & Origin:'} {tank.origin}</span>
                        <span className="text-amber-400 font-bold">{tank.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* منظومات الدفاع الجوي والصواريخ */}
              <Card title={isAr ? 'منظومات الدفاع الجوي الصاروخي والدرع الباليستي' : 'Air Defense & Ballistic Missile Shield'} icon={Radar} tone="purple">
                <div className="grid gap-2 sm:grid-cols-2">
                  {(militaryArsenal?.airDefense || []).map((ad, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-purple-500/40 transition"
                    >
                      <div className="flex items-center justify-between gap-1.5 mb-1">
                        <span className="font-bold text-xs text-white">
                          {ad.system}
                        </span>
                        <span className="font-mono text-[10px] text-purple-300 bg-purple-950/60 border border-purple-500/30 px-1.5 py-0.5 rounded">
                          {ad.range}
                        </span>
                      </div>
                      <p className="m-0 text-[11px] text-slate-300 leading-snug">
                        {isAr ? ad.roleAr : ad.roleEn}
                      </p>
                      <span className="block mt-1 text-[10px] text-slate-500">
                        {isAr ? 'المطور/المورد:' : 'Manufacturer:'} {ad.origin}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* فروع القوات المسلحة الرسمية والعقيدة القتالية */}
              <Card title={isAr ? 'فروع القوات المسلحة الرسمية والعقيدة العسكرية' : 'Armed Forces Branches & Doctrine'} icon={Shield} tone="sky">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(isAr ? extendedIntel?.military?.branchesAr : extendedIntel?.military?.branchesEn)?.map((branch, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 p-2 text-xs font-semibold text-slate-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span>{branch}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-2 pt-2 border-t border-slate-800/80 text-xs text-slate-400">
                  <b className="text-slate-300">{isAr ? 'العقيدة العسكرية:' : 'Military Doctrine:'} </b>
                  <span>{isAr ? extendedIntel?.military?.doctrineAr : extendedIntel?.military?.doctrineEn}</span>
                </div>
              </Card>

              {/* مصادر استيراد الأسلحة والدول الموردة */}
              <div className="grid gap-3 sm:grid-cols-2">
                <Card title={isAr ? 'أين يستورد الجيش أسلحته (الدول الموردة)' : 'Where Arms Are Imported From (Suppliers)'} icon={Radar} tone="purple">
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {(isAr ? extendedIntel?.armsImports?.primarySuppliersAr : extendedIntel?.armsImports?.primarySuppliersEn)?.map((sup, i) => (
                      <li key={i} className="flex items-center gap-2 rounded-lg border border-slate-800/80 bg-slate-900/40 p-2">
                        <span className="font-mono text-purple-400 font-bold">0{i + 1}.</span>
                        <span>{sup}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card title={isAr ? 'أهم المنظومات والأسلحة الحربية المستوردة' : 'Key Imported Weapon Systems'} icon={Crosshair} tone="rose">
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {(isAr ? extendedIntel?.armsImports?.keyImportedSystemsAr : extendedIntel?.armsImports?.keyImportedSystemsEn)?.map((sys, i) => (
                      <li key={i} className="flex items-center gap-2 rounded-lg border border-slate-800/80 bg-slate-900/40 p-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                        <span>{sys}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* بيانات البنك الدولي العسكرية الحية */}
              <LiveStats
                title={isAr ? 'مؤشرات الإنفاق الدفاعي (البنك الدولي WDI)' : 'Military Expenditure (World Bank)'}
                icon={Shield}
                tone="rose"
                entries={stats?.military}
                lang={lang}
                busy={statsBusy}
              />

              {/* صفقات السلاح وعقود التسليح الموثقة للدولة (SIPRI / DSCA) */}
              {countryArmsDeals.length > 0 && (
                <Card
                  title={isAr ? `صفقات السلاح الكبرى الموثقة للدولة (SIPRI / DSCA - ${countryArmsDeals.length} صفقات)` : `Verified Arms Deals & Transfers (SIPRI - ${countryArmsDeals.length} Contracts)`}
                  icon={Crosshair}
                  tone="emerald"
                >
                  <div className="space-y-2.5">
                    {countryArmsDeals.map((deal) => (
                      <div
                        key={deal.id}
                        className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 space-y-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-bold text-xs text-white">
                            {isAr ? deal.systemNameAr : deal.systemNameEn}
                          </span>
                          <span className="font-mono text-xs font-black text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                            {deal.contractValue}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-300">
                          <span className="text-slate-400 me-1">{isAr ? 'الكمية والعتاد:' : 'Quantity:'}</span>
                          {deal.quantity}
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800">
                          <span>{isAr ? 'المصنع:' : 'Maker:'} {isAr ? deal.manufacturerAr : deal.manufacturerEn}</span>
                          <span className="text-amber-300 font-medium">{deal.deliveryTimeline}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          )}

          {/* 3. تبويب الشركات الكبرى (العالمية والمحلية) */}
          {activeTab === 'companies' && (
            <div className="space-y-3">
              {/* شريط تصفية الشركات */}
              <div className="flex items-center justify-between gap-3 flex-wrap bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400 font-bold">{isAr ? 'تصفية الشركات:' : 'Filter:'}</span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setCompanyFilter('all')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                        companyFilter === 'all'
                          ? 'bg-sky-600 text-white'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {isAr ? 'الكل' : 'All'} ({companiesList.length})
                    </button>
                    <button
                      onClick={() => setCompanyFilter('global')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                        companyFilter === 'global'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {isAr ? 'شركات عالمية' : 'Global Multinationals'}
                    </button>
                    <button
                      onClick={() => setCompanyFilter('local')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                        companyFilter === 'local'
                          ? 'bg-emerald-600 text-white'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {isAr ? 'شركات محلية وسيادية' : 'Local Strategic'}
                    </button>
                  </div>
                </div>

                <span className="text-[11px] text-slate-500 font-mono">
                  {filteredCompanies.length} {isAr ? 'كيان استثماري مسجل' : 'Entities Listed'}
                </span>
              </div>

              {/* شبكة بطاقات الشركات */}
              <div className="grid gap-3 sm:grid-cols-2">
                {filteredCompanies.map((comp, idx) => {
                  const isGlobal = comp.type === 'global';
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/70 hover:border-slate-700 transition space-y-2"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="m-0 text-sm font-bold text-white">
                            {comp.name}
                          </h4>
                          <span className="text-xs text-sky-400 block mt-0.5">
                            {isAr ? comp.sectorAr : comp.sectorEn}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md border shrink-0 ${
                            isGlobal
                              ? 'text-blue-300 border-blue-500/30 bg-blue-950/50'
                              : 'text-emerald-300 border-emerald-500/30 bg-emerald-950/50'
                          }`}
                        >
                          {isGlobal ? (isAr ? 'عالمية' : 'Global') : (isAr ? 'محلية' : 'Local')}
                        </span>
                      </div>

                      <p className="m-0 text-xs text-slate-300 leading-relaxed">
                        {isAr ? comp.roleAr : comp.roleEn}
                      </p>

                      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                        <span className="text-slate-500 text-[11px]">{isAr ? 'القيمة / العائد السنوي:' : 'Valuation / Revenue:'}</span>
                        <span className="font-mono font-bold text-amber-300">{comp.valuation || 'N/A'}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 4. تبويب العلاقات الدبلوماسية والتوترات والتحالفات */}
          {activeTab === 'diplomacy' && (
            <div className="space-y-3.5">
              {/* التوترات والنزاعات الجيوسياسية */}
              <Card title={isAr ? 'التوترات والنزاعات الجيوسياسية المباشرة' : 'Geopolitical Tensions & Conflict Hotspots'} icon={Flame} tone="rose">
                <div className="grid gap-2.5">
                  {(diplomacyTensions?.tensions || []).map((tens, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl border border-rose-950/80 bg-rose-950/20 space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{tens.flag || '⚠️'}</span>
                          <h4 className="m-0 text-xs font-bold text-rose-300">
                            {isAr ? tens.countryAr : tens.countryEn}
                          </h4>
                        </div>
                        <span className="text-[10px] font-bold text-rose-400 bg-rose-950/80 border border-rose-500/40 px-2 py-0.5 rounded">
                          {tens.riskLevel}
                        </span>
                      </div>
                      <p className="m-0 text-xs text-slate-300 leading-relaxed">
                        {isAr ? tens.issueAr : tens.issueEn}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* تاريخ وتحولات التحالفات الدولية */}
              <Card title={isAr ? 'تاريخ وتحولات التحالفات الدولية عبر العقود' : 'Evolution of International Alliances'} icon={Network} tone="sky">
                <ol className="relative border-s border-slate-800 ms-3 space-y-3.5">
                  {(diplomacyTensions?.allianceEvolution || []).map((ae, idx) => (
                    <li key={idx} className="ms-4">
                      <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-sky-400 bg-slate-950" />
                      <div className="flex items-center gap-2 flex-wrap">
                        <time className="font-mono text-xs font-bold text-sky-400">
                          {ae.year}
                        </time>
                        <span className="text-xs font-bold text-white">
                          {isAr ? ae.titleAr : ae.titleEn}
                        </span>
                      </div>
                      <p className="m-0 mt-0.5 text-xs text-slate-300 leading-relaxed">
                        {isAr ? ae.descAr : ae.descEn}
                      </p>
                    </li>
                  ))}
                </ol>
              </Card>

              {/* سجل تصويت الدولة في الجمعية العامة ومجلس الأمن للأمم المتحدة */}
              {countryUnVotes.length > 0 && (
                <Card
                  title={isAr ? `سجل تصويت الدولة في الأمم المتحدة (UNGA / UNSC - ${countryUnVotes.length} قرارات)` : `UN Voting Record & International Stances (${countryUnVotes.length} Resolutions)`}
                  icon={Vote}
                  tone="sky"
                >
                  <div className="space-y-2">
                    {countryUnVotes.map((v) => (
                      <div
                        key={v.resolutionId}
                        className="rounded-xl border border-slate-800 bg-slate-900/60 p-2.5 space-y-1.5"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span className="font-mono text-[10px] font-bold text-sky-400 bg-sky-950 px-1.5 py-0.5 rounded border border-sky-800 shrink-0">
                              {v.symbol}
                            </span>
                            <span className="font-bold text-xs text-white truncate">
                              {isAr ? v.titleAr : v.titleEn}
                            </span>
                          </div>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded border shrink-0 ${
                              v.userCountryVote === 'in_favor'
                                ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                                : v.userCountryVote === 'against'
                                ? 'bg-rose-950/60 border-rose-500/40 text-rose-300'
                                : 'bg-amber-950/60 border-amber-500/40 text-amber-300'
                            }`}
                          >
                            {v.userCountryVoteAr}
                          </span>
                        </div>
                        {v.userCountryNoteAr && (
                          <p className="m-0 text-[11px] text-slate-300 border-t border-slate-800 pt-1 leading-relaxed">
                            {v.userCountryNoteAr}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          )}

          {/* 5. تبويب أجهزة المخابرات والأمن القومي */}
          {activeTab === 'intel' && (
            <div className="space-y-3">
              <div className="rounded-xl border border-sky-500/30 bg-sky-950/20 p-3.5 text-xs text-slate-300 leading-relaxed">
                <p className="m-0 font-bold text-sky-300 mb-1">
                  {isAr ? 'منظومة الاستخبارات والأمن القومي والعمليات السرية:' : 'Intelligence Community & Covert Operations Architecture:'}
                </p>
                <p className="m-0">
                  {isAr
                    ? 'هيكل أجهزة الاستخبارات الخارجية والأمن الداخلي والاستخبارات العسكرية المسؤولة عن حماية الأمن القومي ومكافحة التجسس والتهديدات الإقليمية.'
                    : 'Overview of external foreign intelligence, domestic security apparatus, and military reconnaissance services.'}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {(extendedIntel?.intelligenceAgencies || []).map((agency, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5 space-y-2 hover:border-sky-500/40 transition"
                  >
                    <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-2">
                      <div className="flex items-center gap-2">
                        <div className="grid h-7 w-7 place-items-center rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono text-xs font-black">
                          {agency.acronym}
                        </div>
                        <h4 className="m-0 text-xs font-bold text-white">
                          {isAr ? agency.nameAr : agency.nameEn}
                        </h4>
                      </div>
                      <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-900 px-2 py-0.5 rounded">
                        {agency.type}
                      </span>
                    </div>

                    <p className="m-0 text-xs text-slate-300 leading-relaxed">
                      {isAr ? agency.roleAr : agency.roleEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. تبويب الاقتصاد والعملة والتحول النقدي التاريخي */}
          {activeTab === 'economy' && (
            <div className="space-y-4">
              {/* الرسم البياني التفاعلي لتقلبات العملة المحلية مقابل الدولار خلال السنوات العشر الأخيرة */}
              <CountryCurrency10YearChart country={country} lang={lang} />

              {/* بطاقة سعر الصرف المباشر ونظام التثبيت النقدي */}
              {historicalEventsData?.currencyEvolution && (
                <div className="rounded-xl border border-emerald-500/40 bg-gradient-to-l from-slate-900 via-slate-950 to-emerald-950/30 p-4 shadow-lg space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-500/20 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-mono text-base font-black">
                        {historicalEventsData.currencyEvolution.symbol || '¤'}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="m-0 text-sm font-black text-white">
                            {isAr ? historicalEventsData.currencyEvolution.nameAr : historicalEventsData.currencyEvolution.nameEn}
                          </h4>
                          <span className="font-mono text-xs font-black text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded">
                            {historicalEventsData.currencyEvolution.code}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400 block mt-0.5">
                          {isAr ? historicalEventsData.currencyEvolution.centralBankAr : (historicalEventsData.currencyEvolution.centralBankEn || historicalEventsData.currencyEvolution.centralBankAr)}
                        </span>
                      </div>
                    </div>

                    <div className="text-start sm:text-end bg-slate-900/90 sm:bg-transparent p-2.5 sm:p-0 rounded-lg border border-slate-800 sm:border-0">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                        {isAr ? 'سعر الصرف الموثق / التثبيت الرسمي:' : 'Verified Exchange Rate / Official Peg:'}
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-black text-emerald-300">
                        {historicalEventsData.currencyEvolution.currentExchangeRateUsd}
                      </span>
                    </div>
                  </div>

                  {/* تفاصيل نظام الصرف والاحتياطيات */}
                  <div className="grid gap-2 sm:grid-cols-2 text-xs">
                    <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-2.5">
                      <span className="font-bold text-slate-400 block mb-1">
                        {isAr ? 'نظام الصرف المعتمد (Exchange Regime):' : 'Exchange Rate Regime:'}
                      </span>
                      <p className="m-0 text-slate-200 text-[11px] leading-relaxed">
                        {isAr ? historicalEventsData.currencyEvolution.pegStatusAr : (historicalEventsData.currencyEvolution.pegStatusEn || historicalEventsData.currencyEvolution.pegStatusAr)}
                      </p>
                    </div>

                    <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-2.5">
                      <span className="font-bold text-slate-400 block mb-1">
                        {isAr ? 'الاحتياطي النقدي الأجنبي السيادي:' : 'Sovereign FX Reserves Status:'}
                      </span>
                      <p className="m-0 text-slate-200 text-[11px] leading-relaxed font-mono">
                        {historicalEventsData.currencyEvolution.foreignReservesUsd || `~$${extendedIntel?.currency?.foreignReservesBn || '120'}B USD`}
                      </p>
                    </div>
                  </div>

                  {/* الخط الزمني لتطور العملة والأزمات النقدية التاريخية */}
                  {historicalEventsData.currencyEvolution.currencyHistoryTimeline?.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-slate-800/80">
                      <h5 className="m-0 text-xs font-black text-emerald-400 flex items-center gap-1.5 mb-2.5">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{isAr ? 'المحطات التاريخية لتطور قيمة العملة والتحولات النقدية:' : 'Monetary History & Currency Devaluation Timeline:'}</span>
                      </h5>

                      <ol className="relative border-s border-emerald-500/30 ms-3 space-y-3">
                        {historicalEventsData.currencyEvolution.currencyHistoryTimeline.map((item, idx) => (
                          <li key={idx} className="ms-4">
                            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-emerald-400 bg-slate-950" />
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-mono text-xs font-black text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.2 rounded">
                                {item.year}
                              </span>
                              <span className="font-bold text-xs text-white">
                                {isAr ? item.eventAr : (item.eventEn || item.eventAr)}
                              </span>
                              {item.rateAtTime && (
                                <span className="font-mono text-[10px] text-amber-300 bg-amber-950/60 border border-amber-500/30 px-1.5 py-0.2 rounded">
                                  {item.rateAtTime}
                                </span>
                              )}
                            </div>
                            <p className="m-0 mt-1 text-[11px] text-slate-300 leading-relaxed">
                              {isAr ? item.detailsAr : (item.detailsEn || item.detailsAr)}
                            </p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              )}

              <div className="grid gap-3 sm:grid-cols-2">
                <Card title={isAr ? 'العملة الوطنية والبنك المركزي' : 'National Currency & Central Bank'} icon={Coins} tone="emerald">
                  <Row label={isAr ? 'اسم العملة' : 'Currency Name'} value={`${extendedIntel?.currency?.nameAr || country.currency} (${extendedIntel?.currency?.code})`} />
                  <Row label={isAr ? 'رمز العملة' : 'Symbol'} value={extendedIntel?.currency?.symbol || '¤'} tone="emerald" />
                  <Row label={isAr ? 'البنك المركزي' : 'Central Bank'} value={isAr ? extendedIntel?.currency?.centralBankAr : extendedIntel?.currency?.centralBankEn} />
                  <Row label={isAr ? 'الاحتياطي النقدي الأجنبي' : 'FX Reserves'} value={`~$${extendedIntel?.currency?.foreignReservesBn || '120'}B USD`} />
                </Card>

                <Card title={isAr ? 'المؤشرات الاقتصادية السيادية' : 'Sovereign Macro Indicators'} icon={Building2} tone="sky">
                  <Row label={isAr ? 'الناتج المحلي الإجمالي (GDP)' : 'Nominal GDP'} value={`$${country.gdpBn || country.gdpNominalBn || '400'}B USD`} />
                  <Row label={isAr ? 'معدل نمو الناتج' : 'GDP Growth Rate'} value={`+${country.gdpGrowth || 3.5}%`} tone="emerald" />
                  <Row label={isAr ? 'معدل التضخم' : 'Inflation Rate'} value={`${country.inflationRate || 2.1}%`} />
                  <Row label={isAr ? 'الصندوق السيادي' : 'Sovereign Wealth Fund'} value={isAr ? extendedIntel?.currency?.sovereignFundAr : extendedIntel?.currency?.sovereignFundEn} />
                </Card>
              </div>

              {/* بيانات البنك الدولي الاقتصادية الحية */}
              <LiveStats
                title={isAr ? 'مؤشرات التنمية الاقتصادية الحية (WDI)' : 'Macroeconomic Indicators (World Bank WDI)'}
                icon={Building2}
                tone="emerald"
                entries={stats?.economy}
                lang={lang}
                busy={statsBusy}
              />
            </div>
          )}

          {/* 7. تبويب الأحداث السيادية (اغتيالات، إرهاب، تصاعدات مع دول أجنبية) */}
          {activeTab === 'events' && (
            <div className="space-y-4">
              {/* شريط الإحصائيات السريعة للأحداث السيادية */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-2.5 text-center">
                  <span className="text-[10px] font-bold text-rose-300 block">{isAr ? 'اغتيالات سياسية كبرى' : 'Assassinations'}</span>
                  <span className="font-mono text-lg font-black text-white">{historicalEventsData?.assassinations?.length || 0}</span>
                </div>
                <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-2.5 text-center">
                  <span className="text-[10px] font-bold text-amber-300 block">{isAr ? 'أحداث إرهاب ومكافحة' : 'Terror Incidents'}</span>
                  <span className="font-mono text-lg font-black text-white">{historicalEventsData?.terrorEvents?.length || 0}</span>
                </div>
                <div className="rounded-xl border border-purple-500/30 bg-purple-950/20 p-2.5 text-center">
                  <span className="text-[10px] font-bold text-purple-300 block">{isAr ? 'تصاعدات وحروب خارجية' : 'Foreign Escalations'}</span>
                  <span className="font-mono text-lg font-black text-white">{historicalEventsData?.foreignEscalations?.length || 0}</span>
                </div>
                <div className="rounded-xl border border-sky-500/30 bg-sky-950/20 p-2.5 text-center">
                  <span className="text-[10px] font-bold text-sky-300 block">{isAr ? 'إجمالي الوقائع الموثقة' : 'Total Incidents'}</span>
                  <span className="font-mono text-lg font-black text-emerald-400">
                    {(historicalEventsData?.assassinations?.length || 0) +
                      (historicalEventsData?.terrorEvents?.length || 0) +
                      (historicalEventsData?.foreignEscalations?.length || 0)}
                  </span>
                </div>
              </div>

              {/* أزرار تصفية الوقائع */}
              <div className="flex items-center gap-1.5 flex-wrap bg-slate-900/60 p-2 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 font-bold me-1">{isAr ? 'تصفية الوقائع:' : 'Filter:'}</span>
                <button
                  onClick={() => setEventsFilter('all')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                    eventsFilter === 'all'
                      ? 'bg-sky-600 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {isAr ? 'الكل' : 'All'}
                </button>
                <button
                  onClick={() => setEventsFilter('assassinations')}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                    eventsFilter === 'assassinations'
                      ? 'bg-rose-600 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Skull className="h-3 w-3" />
                  <span>{isAr ? 'اغتيالات سياسية' : 'Assassinations'}</span>
                  <span className="font-mono text-[10px] opacity-80">({historicalEventsData?.assassinations?.length || 0})</span>
                </button>
                <button
                  onClick={() => setEventsFilter('terror')}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                    eventsFilter === 'terror'
                      ? 'bg-amber-600 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <AlertOctagon className="h-3 w-3" />
                  <span>{isAr ? 'إرهاب ومكافحة' : 'Terrorism'}</span>
                  <span className="font-mono text-[10px] opacity-80">({historicalEventsData?.terrorEvents?.length || 0})</span>
                </button>
                <button
                  onClick={() => setEventsFilter('escalations')}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                    eventsFilter === 'escalations'
                      ? 'bg-purple-600 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Swords className="h-3 w-3" />
                  <span>{isAr ? 'تصاعدات مع دول أجنبية' : 'Foreign Escalations'}</span>
                  <span className="font-mono text-[10px] opacity-80">({historicalEventsData?.foreignEscalations?.length || 0})</span>
                </button>
              </div>

              {/* 1. قسم الاغتيالات السياسية الكبرى */}
              {(eventsFilter === 'all' || eventsFilter === 'assassinations') && (
                <div className="space-y-3">
                  <h3 className="m-0 text-sm font-black text-rose-400 flex items-center gap-2 border-b border-rose-500/20 pb-2">
                    <Skull className="h-4 w-4" />
                    <span>{isAr ? 'الاغتيالات السياسية ومحاولات التصفية الكبرى' : 'Major Political Assassinations & Targetings'}</span>
                  </h3>

                  {(!historicalEventsData?.assassinations || historicalEventsData.assassinations.length === 0) ? (
                    <p className="text-xs text-slate-500 italic p-3 rounded-xl border border-slate-800 bg-slate-900/40">
                      {isAr ? 'لم تسجل اغتيالات سياسية كبرى معلنة في قاعدة البيانات الرسمية لهذه الدولة.' : 'No major political assassinations recorded in current database.'}
                    </p>
                  ) : (
                    <div className="grid gap-3">
                      {historicalEventsData.assassinations.map((assassin, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl border border-rose-500/30 bg-slate-950/80 p-3.5 space-y-2 hover:border-rose-500/50 transition"
                        >
                          <div className="flex items-start justify-between gap-2.5 flex-wrap">
                            <div className="flex items-center gap-2">
                              <span className="grid h-7 w-7 place-items-center rounded-lg bg-rose-500/15 border border-rose-500/40 text-rose-400 font-mono text-xs font-black">
                                0{idx + 1}
                              </span>
                              <div>
                                <h4 className="m-0 text-xs sm:text-sm font-black text-white">
                                  {isAr ? assassin.targetAr : (assassin.targetEn || assassin.targetAr)}
                                </h4>
                                <span className="text-[10px] text-rose-300 font-bold block mt-0.5">
                                  {isAr ? 'الجهة المنفذة:' : 'Perpetrator:'} {isAr ? assassin.perpetratorAr : (assassin.perpetratorEn || assassin.perpetratorAr)}
                                </span>
                              </div>
                            </div>
                            <span className="font-mono text-xs font-bold text-rose-300 bg-rose-950/60 border border-rose-500/30 px-2 py-0.5 rounded shrink-0">
                              {assassin.year}
                            </span>
                          </div>

                          <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-2.5 text-xs text-slate-200 leading-relaxed">
                            <span className="font-bold text-slate-400 block mb-0.5">
                              {isAr ? 'تفاصيل الواقعة ومسرح الحدث:' : 'Operational Details:'}
                            </span>
                            {isAr ? assassin.detailsAr : (assassin.detailsEn || assassin.detailsAr)}
                          </div>

                          {(assassin.impactAr || assassin.impactEn) && (
                            <div className="rounded-lg border border-amber-500/20 bg-amber-950/20 p-2 text-xs text-amber-200 leading-relaxed">
                              <span className="font-bold text-amber-400 block mb-0.5">
                                {isAr ? 'التداعيات السيادية والسياسية:' : 'Sovereign Political Impact:'}
                              </span>
                              {isAr ? assassin.impactAr : (assassin.impactEn || assassin.impactAr)}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* 2. قسم العمليات الإرهابية ومكافحة الإرهاب */}
              {(eventsFilter === 'all' || eventsFilter === 'terror') && (
                <div className="space-y-3">
                  <h3 className="m-0 text-sm font-black text-amber-400 flex items-center gap-2 border-b border-amber-500/20 pb-2">
                    <AlertOctagon className="h-4 w-4" />
                    <span>{isAr ? 'العمليات الإرهابية ومحطات مكافحة الإرهاب' : 'Terrorist Incidents & Counter-Terrorism Operations'}</span>
                  </h3>

                  {(!historicalEventsData?.terrorEvents || historicalEventsData.terrorEvents.length === 0) ? (
                    <p className="text-xs text-slate-500 italic p-3 rounded-xl border border-slate-800 bg-slate-900/40">
                      {isAr ? 'لا توجد حوادث إرهابية كبرى مسجلة في هذا السجل.' : 'No major terrorist incidents recorded in current database.'}
                    </p>
                  ) : (
                    <div className="grid gap-3">
                      {historicalEventsData.terrorEvents.map((terror, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl border border-amber-500/30 bg-slate-950/80 p-3.5 space-y-2 hover:border-amber-500/50 transition"
                        >
                          <div className="flex items-start justify-between gap-2.5 flex-wrap">
                            <div className="min-w-0">
                              <h4 className="m-0 text-xs sm:text-sm font-black text-white">
                                {isAr ? terror.titleAr : (terror.titleEn || terror.titleAr)}
                              </h4>
                              <span className="text-[10px] text-amber-300 font-bold block mt-0.5">
                                {isAr ? 'التنظيم / الجهة المسؤولة:' : 'Perpetrator Group:'} {isAr ? terror.groupAr : (terror.groupEn || terror.groupAr)}
                              </span>
                            </div>
                            <span className="font-mono text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded shrink-0">
                              {terror.year}
                            </span>
                          </div>

                          {terror.casualties && (
                            <div className="inline-flex items-center gap-1.5 rounded-md border border-rose-500/30 bg-rose-950/40 px-2 py-0.5 text-[11px] font-bold text-rose-300">
                              <BadgeAlert className="h-3 w-3" />
                              <span>{isAr ? 'الضحايا والخسائر:' : 'Casualties:'} {terror.casualties}</span>
                            </div>
                          )}

                          <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-2.5 text-xs text-slate-200 leading-relaxed">
                            <span className="font-bold text-slate-400 block mb-0.5">
                              {isAr ? 'تفاصيل وملابسات الهجوم:' : 'Incident Details:'}
                            </span>
                            {isAr ? terror.detailsAr : (terror.detailsEn || terror.detailsAr)}
                          </div>

                          {(terror.counterMeasureAr || terror.counterMeasureEn) && (
                            <div className="rounded-lg border border-emerald-500/20 bg-emerald-950/20 p-2 text-xs text-emerald-200 leading-relaxed">
                              <span className="font-bold text-emerald-400 block mb-0.5">
                                {isAr ? 'إجراءات الدولة والردع الأمني:' : 'State Countermeasures & Security Response:'}
                              </span>
                              {isAr ? terror.counterMeasureAr : (terror.counterMeasureEn || terror.counterMeasureAr)}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* 3. قسم التصاعدات والحروب والأزمات مع الدول الأجنبية */}
              {(eventsFilter === 'all' || eventsFilter === 'escalations') && (
                <div className="space-y-3">
                  <h3 className="m-0 text-sm font-black text-purple-400 flex items-center gap-2 border-b border-purple-500/20 pb-2">
                    <Swords className="h-4 w-4" />
                    <span>{isAr ? 'التصاعدات والحروب والأزمات مع الدول الأجنبية' : 'Foreign Escalations, Conflicts & International Standoffs'}</span>
                  </h3>

                  {(!historicalEventsData?.foreignEscalations || historicalEventsData.foreignEscalations.length === 0) ? (
                    <p className="text-xs text-slate-500 italic p-3 rounded-xl border border-slate-800 bg-slate-900/40">
                      {isAr ? 'لم تسجل تصاعدات عسكرية أو حروب خارجية مباشرة في هذا السجل.' : 'No major foreign escalations recorded in current database.'}
                    </p>
                  ) : (
                    <div className="grid gap-3">
                      {historicalEventsData.foreignEscalations.map((esc, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl border border-purple-500/30 bg-slate-950/80 p-3.5 space-y-2 hover:border-purple-500/50 transition"
                        >
                          <div className="flex items-start justify-between gap-2.5 flex-wrap">
                            <div className="min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h4 className="m-0 text-xs sm:text-sm font-black text-white">
                                  {isAr ? esc.titleAr : (esc.titleEn || esc.titleAr)}
                                </h4>
                                <span
                                  className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${
                                    esc.nature === 'military_conflict'
                                      ? 'bg-rose-950/70 border-rose-500/40 text-rose-300'
                                      : esc.nature === 'border_escalation'
                                      ? 'bg-amber-950/70 border-amber-500/40 text-amber-300'
                                      : 'bg-indigo-950/70 border-indigo-500/40 text-indigo-300'
                                  }`}
                                >
                                  {esc.nature === 'military_conflict'
                                    ? (isAr ? 'نزاع عسكري / حرب' : 'War / Armed Conflict')
                                    : esc.nature === 'border_escalation'
                                    ? (isAr ? 'تصعيد حدودي' : 'Border Escalation')
                                    : (isAr ? 'أزمة دبلوماسية' : 'Diplomatic Crisis')}
                                </span>
                              </div>
                              <span className="text-[10px] text-purple-300 font-bold block mt-0.5">
                                {isAr ? 'الدولة الخصم / الطرف المقابل:' : 'Opponent State / Belligerents:'} {isAr ? esc.opponentCountryAr : (esc.opponentCountryEn || esc.opponentCountryAr)}
                              </span>
                            </div>
                            <span className="font-mono text-xs font-bold text-purple-300 bg-purple-950/60 border border-purple-500/30 px-2 py-0.5 rounded shrink-0">
                              {esc.year}
                            </span>
                          </div>

                          {(esc.causeAr || esc.causeEn) && (
                            <div className="rounded-lg border border-slate-800/80 bg-slate-900/50 p-2 text-xs text-slate-300">
                              <b className="text-slate-400">{isAr ? 'أسباب التصاعد:' : 'Underlying Cause:'} </b>
                              <span>{isAr ? esc.causeAr : (esc.causeEn || esc.causeAr)}</span>
                            </div>
                          )}

                          <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-2.5 text-xs text-slate-200 leading-relaxed">
                            <span className="font-bold text-slate-400 block mb-0.5">
                              {isAr ? 'مجريات وتفاصيل المواجهة:' : 'Conflict Narrative & Evolution:'}
                            </span>
                            {isAr ? esc.detailsAr : (esc.detailsEn || esc.detailsAr)}
                          </div>

                          {(esc.outcomeAr || esc.outcomeEn) && (
                            <div className="rounded-lg border border-indigo-500/20 bg-indigo-950/20 p-2 text-xs text-indigo-200 leading-relaxed">
                              <span className="font-bold text-indigo-400 block mb-0.5">
                                {isAr ? 'النتائج واتفاقيات وقف إطلاق النار / السلام:' : 'Strategic Outcome & Accords:'}
                              </span>
                              {isAr ? esc.outcomeAr : (esc.outcomeEn || esc.outcomeAr)}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* 8. تبويب المعاهدات والتحالفات العسكرية والتكتلات الاقتصادية */}
          {activeTab === 'treaties' && (
            <div className="space-y-4">
              {/* لوحة التحالفات العسكرية والتكتلات الاقتصادية والدول الأعضاء */}
              <CountryAlliancesSidePanel
                country={country}
                lang={lang}
                compact
              />

              {/* المعاهدات والاتفاقيات الدولية الإضافية */}
              {(extendedIntel?.treaties && extendedIntel.treaties.length > 0) && (
                <div className="space-y-2.5 pt-2 border-t border-slate-800">
                  <h4 className="m-0 text-xs font-black text-slate-300 flex items-center gap-1.5">
                    <Lock className="h-3.5 w-3.5 text-indigo-400" />
                    <span>{isAr ? 'المعاهدات الثنائية والترتيبات الأمنية الإضافية:' : 'Additional Bilateral Security Treaties:'}</span>
                  </h4>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {extendedIntel.treaties.map((treaty, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-slate-800 bg-slate-950/70 p-3 space-y-1"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <h5 className="m-0 text-xs font-bold text-white flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                            <span>{isAr ? treaty.nameAr : treaty.nameEn}</span>
                          </h5>
                          {treaty.year && <span className="font-mono text-[10px] text-slate-500">{treaty.year}</span>}
                        </div>
                        <p className="m-0 text-[11px] text-slate-300 leading-relaxed">
                          {isAr ? treaty.scopeAr : treaty.scopeEn}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 8. تبويب التاريخ والتحولات السياسية الداخلية حتى 2026 */}
          {activeTab === 'history' && (
            <div className="space-y-3.5">
              {/* التحولات السياسية والداخلية ونظام الحكم */}
              <Card title={isAr ? 'التحولات الداخلية والسياسية ونظام الحكم' : 'Internal Political Transformations & Governance Shifts'} icon={TrendingUp} tone="purple">
                <ol className="relative border-s border-purple-800/80 ms-3 space-y-3.5">
                  {(diplomacyTensions?.internalPoliticalShifts || []).map((shift, idx) => (
                    <li key={idx} className="ms-4">
                      <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-purple-400 bg-slate-950" />
                      <time className="mb-0.5 font-mono text-xs font-bold text-purple-400 block">
                        {shift.year}
                      </time>
                      <p className="m-0 text-xs text-slate-200 leading-relaxed">
                        {isAr ? shift.eventAr : shift.eventEn}
                      </p>
                    </li>
                  ))}
                </ol>
              </Card>

              {/* التسلسل الزمني والمحطات الجيوسياسية */}
              <Card title={isAr ? 'التسلسل الزمني التاريخي والمحطات الجيوسياسية حتى 2026' : 'Historical Chronology up to 2026'} icon={History} tone="sky">
                <ol className="relative border-s border-slate-800 ms-3 space-y-3.5">
                  {(extendedIntel?.historyTo2026 || []).map((item, idx) => (
                    <li key={idx} className="ms-4">
                      <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-sky-400 bg-slate-950" />
                      <time className="mb-0.5 font-mono text-xs font-bold text-sky-400 block">
                        {item.year}
                      </time>
                      <p className="m-0 text-xs text-slate-200 leading-relaxed">
                        {isAr ? item.eventAr : item.eventEn}
                      </p>
                    </li>
                  ))}
                </ol>
              </Card>
            </div>
          )}

          {/* 9. تبويب المخاطر السيادية */}
          {activeTab === 'risk' && (
            <div className="space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <Card title={isAr ? 'تقييم المخاطر السيادية والإقليمية' : 'Sovereign Risk Assessment'} icon={AlertTriangle} tone="rose">
                  <Row label={isAr ? 'مخاطر غسل الأموال والجرائم المالية' : 'Money Laundering Risk'} value={isAr ? 'متوسط مع رقابة مصرفية مشددة' : 'Moderate with tight oversight'} />
                  <Row label={isAr ? 'مخاطر أمن الحدود والتهريب' : 'Border Security Risk'} value={isAr ? 'مراقبة إلكترونية ورادارية كاملة' : 'Electronic & Radar Monitored'} />
                  <Row label={isAr ? 'مستوى التهديد الإرهابي' : 'Terror Threat Level'} value={isAr ? 'منخفض بفضل الأجهزة الأمنية' : 'Low due to intelligence interdiction'} tone="emerald" />
                </Card>

                <Card title={isAr ? 'مؤشر الاستقرار المؤسسي 2026' : 'Institutional Resilience 2026'} icon={Shield} tone="emerald">
                  <Row label={isAr ? 'تصنيف الاستقرار السيادي' : 'Sovereign Stability'} value={isAr ? 'متماسك ومستقر' : 'Stable & Resilient'} tone="emerald" />
                  <Row label={isAr ? 'مؤشر الحوكمة الدولية' : 'Governance Index'} value="78 / 100" />
                  <Row label={isAr ? 'القدرة على امتصاص الصدمات' : 'Shock Absorption'} value={isAr ? 'مرتفع' : 'High'} tone="emerald" />
                </Card>
              </div>

              {/* مؤشرات المخاطر من البنك الدولي */}
              <LiveStats
                title={isAr ? 'مؤشرات المخاطر والحوكمة (البنك الدولي WDI)' : 'Governance & Risk Indicators (World Bank)'}
                icon={AlertTriangle}
                tone="amber"
                entries={stats?.risk}
                lang={lang}
                busy={statsBusy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function LiveStats({ title, icon: Icon, tone = 'sky', entries, lang, busy, note }) {
  const isAr = lang === 'ar';
  const rows = (entries ?? []).filter((e) => e && e.value != null);

  if (!rows.length) {
    if (!busy) return null;
    return (
      <section className="rounded-xl border border-slate-800 bg-slate-950/50 p-3.5">
        <p className="m-0 text-[11px] text-slate-500">
          {isAr ? 'جارٍ جلب بيانات البنك الدولي…' : 'Fetching World Bank data…'}
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-xl border border-slate-800 bg-slate-950/50 p-3.5">
      <h3 className={`m-0 mb-2.5 flex items-center gap-2 text-sm font-bold ${TONES[tone] ?? TONES.sky}`}>
        <Icon className="h-4 w-4 shrink-0" />
        {title}
        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-1.5 py-0.2 rounded">
          {isAr ? 'البنك الدولي' : 'World Bank'}
        </span>
      </h3>
      <div className="grid gap-1">
        {rows.map((e) => (
          <div key={e.id} className="nx-row text-xs">
            <span className="shrink-0 text-slate-500">{isAr ? e.ar : e.en}</span>
            <span className="min-w-0 text-end font-semibold break-words text-slate-200">
              {formatStat(e, e.format)}
              {e.year ? (
                <span className="ms-1.5 text-[10px] font-normal text-slate-500">({e.year})</span>
              ) : null}
            </span>
          </div>
        ))}
      </div>
      <p className="m-0 mt-2 text-[10px] leading-relaxed text-slate-500">
        {note ??
          (isAr
            ? 'المصدر: البنك الدولي — قاعدة بيانات التنمية العالمية (WDI). بيانات سنوية؛ والسنة بين قوسين هي سنة القياس.'
            : 'Source: The World Bank, World Development Indicators (WDI). Annual data; reference year in brackets.')}
      </p>
    </section>
  );
}
