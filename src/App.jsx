import { useCallback, useEffect, useMemo, useState } from 'react';
import { geopoliticalData } from './data';
import Navbar from './components/Navbar';
import NewsTickerBar from './components/NewsTickerBar';
import MapComponent from './components/MapComponent';
import AnalyticsPanel from './components/AnalyticsPanel';
import CountryDetailModal from './components/CountryDetailModal';
import SearchModal from './components/SearchModal';
import DashboardSidebar from './components/DashboardSidebar';
import IntelligenceBriefing from './components/IntelligenceBriefing';
import HotspotsPanel from './components/HotspotsPanel';
import GlobalIntelligenceStream from './components/GlobalIntelligenceStream';
import AllianceAnalyticsSection from './components/AllianceAnalyticsSection';
import HistoricalArchivePanel from './components/HistoricalArchivePanel';
import TimelineSlider from './components/TimelineSlider';
import CountryComparisonModal from './components/CountryComparisonModal';
import OsintLiveFeedPanel from './components/OsintLiveFeedPanel';
import ArmsDealsExplorer from './components/ArmsDealsExplorer';
import UnVotingExplorer from './components/UnVotingExplorer';
import LeadersStatementsExplorer from './components/LeadersStatementsExplorer';
import DataIngestionPipelinesExplorer from './components/DataIngestionPipelinesExplorer';
import CurrencyVolatilityDashboard from './components/CurrencyVolatilityDashboard';
import BilateralAlliancesExplorer from './components/BilateralAlliancesExplorer';
import GlobalMilitaryHeraldryExplorer from './components/GlobalMilitaryHeraldryExplorer';
import GlobalMediaIntelligenceExplorer from './components/GlobalMediaIntelligenceExplorer';
import { LeadershipProvider } from './context/LeadershipContext';
import { Activity, FileText, Globe2, Radio, Coins, Shield, Crosshair, Clock, Target, Award, Tv } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('ar');
  const [activeTab, setActiveTab] = useState('map');
  const [selectedCountryId, setSelectedCountryId] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState('all');
  const [selectedYear, setSelectedYear] = useState(2026);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [comparisonCountry1, setComparisonCountry1] = useState(null);
  const [comparisonCountry2, setComparisonCountry2] = useState(null);
  const [isBilateralTreatiesModalOpen, setIsBilateralTreatiesModalOpen] = useState(false);

  const data = geopoliticalData[lang];
  const isAr = lang === 'ar';

  const handleOpenComparison = useCallback((c1 = null, c2 = null) => {
    setComparisonCountry1(c1);
    setComparisonCountry2(c2);
    setIsComparisonOpen(true);
  }, []);

  // اشتقاق كائن الدولة النشطة تلقائياً حسب اللغة الحالية لمنع التداخلات اللغوية
  const activeCountry = useMemo(() => {
    if (!selectedCountryId) return null;
    return data.countries.find((c) => c.id === selectedCountryId) || null;
  }, [selectedCountryId, data.countries]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    document.title = isAr
      ? 'GeoNexus 2026 — المنصة الجيوسياسية'
      : 'GeoNexus 2026 — Geopolitical Intelligence Platform';
  }, [lang, isAr]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((v) => !v);
      }
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleSelectCountry = useCallback((country) => {
    setSelectedCountryId((prevId) => (prevId === country?.id ? null : country?.id ?? null));
  }, []);

  const stats = [
    {
      icon: Globe2,
      label: isAr ? 'الدول المدرجة' : 'Countries tracked',
      value: data.countries.length,
      tone: 'text-sky-300',
    },
    {
      icon: Radio,
      label: isAr ? 'التحالفات النشطة' : 'Active alliances',
      value: data.alliancesList.length,
      tone: 'text-indigo-300',
    },
    {
      icon: Activity,
      label: isAr ? 'قارات مغطاة' : 'Continents covered',
      value: data.continents.length,
      tone: 'text-emerald-300',
    },
    {
      icon: FileText,
      label: isAr ? 'ملفات تفصيلية كاملة' : 'Full dossiers',
      value: `${data.coverage.detailed}/${data.coverage.total} (100%)`,
      tone: 'text-emerald-400',
    },
  ];

  return (
    <LeadershipProvider>
      <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenSearch={() => setIsSearchOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenComparison={handleOpenComparison}
        onOpenBilateralTreaties={() => setIsBilateralTreatiesModalOpen(true)}
      />

      <NewsTickerBar tickerItems={data.newsTicker} lang={lang} />

      <main className="mx-auto w-full max-w-[1600px] flex-1 px-3 py-4 sm:px-4 sm:py-6">
        {/* Hero */}
        <section className="nx-grid-lines nx-panel relative mb-5 overflow-hidden">
          <div className="pointer-events-none absolute -end-24 -top-24 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="relative flex flex-col gap-5 p-5 lg:flex-row lg:items-center lg:justify-between lg:p-7">
            <div className="min-w-0 flex-1 max-w-2xl">
              <span className="nx-chip mb-3 border border-sky-500/25 bg-sky-500/10 text-sky-300">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-sky-400" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" />
                </span>
                {isAr ? 'تحديث آلي من GDELT كل 10 دقائق' : 'Auto-synced from GDELT every 10 min'}
              </span>

              <h1 className="font-display m-0 text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
                {data.title}
              </h1>
              <p className="m-0 mt-2 text-sm leading-relaxed text-slate-400">{data.subtitle}</p>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {stats.map(({ icon: Icon, label, value, tone }) => (
                  <div key={label} className="nx-card">
                    <span className="flex items-center gap-1.5">
                      <Icon className={`h-3.5 w-3.5 shrink-0 ${tone}`} />
                      <span className="truncate text-[11px] text-slate-400">{label}</span>
                    </span>
                    <span className="font-display text-lg font-black leading-none text-white">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quick Launch Bar */}
              <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-bold text-slate-400 me-1">
                  {isAr ? 'المسارات الاستخباراتية:' : 'Quick Navigation:'}
                </span>
                <button
                  onClick={() => setActiveTab('military-heraldry')}
                  className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11px] font-bold transition ${
                    activeTab === 'military-heraldry'
                      ? 'border-amber-500 bg-amber-500/20 text-amber-300 shadow'
                      : 'border-slate-800 bg-slate-900/80 text-slate-300 hover:border-amber-500/40 hover:text-amber-300'
                  }`}
                >
                  <Award className="h-3 w-3 text-amber-400" />
                  <span>{isAr ? 'الشارات والملفات السرية' : 'Heraldry & Dossiers'}</span>
                </button>
                <button
                  onClick={() => setActiveTab('media-monitor')}
                  className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11px] font-bold transition ${
                    activeTab === 'media-monitor'
                      ? 'border-sky-500 bg-sky-500/20 text-sky-300 shadow'
                      : 'border-slate-800 bg-slate-900/80 text-slate-300 hover:border-sky-500/40 hover:text-sky-300'
                  }`}
                >
                  <Tv className="h-3 w-3 text-sky-400" />
                  <span>{isAr ? 'رصد القنوات الرسمية' : 'Media OSINT'}</span>
                </button>
                <button
                  onClick={() => setActiveTab('currency')}
                  className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11px] font-bold transition ${
                    activeTab === 'currency'
                      ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300 shadow'
                      : 'border-slate-800 bg-slate-900/80 text-slate-300 hover:border-emerald-500/40 hover:text-emerald-300'
                  }`}
                >
                  <Coins className="h-3 w-3 text-emerald-400" />
                  <span>{isAr ? 'تقلبات العملات (10 سنوات)' : '10Y FX Volatility'}</span>
                </button>
                <button
                  onClick={() => setActiveTab('alliances')}
                  className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11px] font-bold transition ${
                    activeTab === 'alliances'
                      ? 'border-indigo-500 bg-indigo-500/20 text-indigo-300 shadow'
                      : 'border-slate-800 bg-slate-900/80 text-slate-300 hover:border-indigo-500/40 hover:text-indigo-300'
                  }`}
                >
                  <Shield className="h-3 w-3 text-indigo-400" />
                  <span>{isAr ? 'مصفوفة التحالفات (13 تكتل)' : 'Alliances Matrix (13)'}</span>
                </button>
                <button
                  onClick={() => setActiveTab('bilateral-treaties')}
                  className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11px] font-bold transition ${
                    activeTab === 'bilateral-treaties'
                      ? 'border-amber-500 bg-amber-500/20 text-amber-300 shadow'
                      : 'border-slate-800 bg-slate-900/80 text-slate-300 hover:border-amber-500/40 hover:text-amber-300'
                  }`}
                >
                  <Target className="h-3 w-3 text-amber-400" />
                  <span>{isAr ? 'المعاهدات والبنود الثنائية' : 'Bilateral Pacts & Clauses'}</span>
                </button>
                <button
                  onClick={() => setActiveTab('arms')}
                  className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11px] font-bold transition ${
                    activeTab === 'arms'
                      ? 'border-rose-500 bg-rose-500/20 text-rose-300 shadow'
                      : 'border-slate-800 bg-slate-900/80 text-slate-300 hover:border-rose-500/40 hover:text-rose-300'
                  }`}
                >
                  <Crosshair className="h-3 w-3 text-rose-400" />
                  <span>{isAr ? 'صفقات السلاح SIPRI' : 'Arms Deals'}</span>
                </button>
                <button
                  onClick={() => setActiveTab('military-heraldry')}
                  className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11px] font-bold transition ${
                    activeTab === 'military-heraldry'
                      ? 'border-amber-500 bg-amber-500/20 text-amber-300 shadow'
                      : 'border-slate-800 bg-slate-900/80 text-slate-300 hover:border-amber-500/40 hover:text-amber-300'
                  }`}
                >
                  <Award className="h-3 w-3 text-amber-400" />
                  <span>{isAr ? 'شارات الجيوش من ويكيبيديا' : 'Military Insignias & Wiki'}</span>
                </button>
                <button
                  onClick={() => setActiveTab('media-monitor')}
                  className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11px] font-bold transition ${
                    activeTab === 'media-monitor'
                      ? 'border-cyan-500 bg-cyan-500/20 text-cyan-300 shadow'
                      : 'border-slate-800 bg-slate-900/80 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300'
                  }`}
                >
                  <Tv className="h-3 w-3 text-cyan-400" />
                  <span>{isAr ? 'رصد القنوات والإعلام السيادي' : 'State Media Intelligence'}</span>
                </button>
                <button
                  onClick={() => setActiveTab('archive')}
                  className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11px] font-bold transition ${
                    activeTab === 'archive'
                      ? 'border-sky-500 bg-sky-500/20 text-sky-300 shadow'
                      : 'border-slate-800 bg-slate-900/80 text-slate-300 hover:border-sky-500/40 hover:text-sky-300'
                  }`}
                >
                  <Clock className="h-3 w-3 text-sky-400" />
                  <span>{isAr ? 'أرشيف المحاكاة (1914 - 2026)' : 'Chrono Archive (1914-2026)'}</span>
                </button>
              </div>
            </div>

            {/* Continent cards */}
            <div className="grid shrink-0 grid-cols-2 gap-2 sm:grid-cols-3 lg:w-[21rem]">
              {data.continents.map((c) => {
                const isSelected = selectedContinent === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => {
                      setSelectedContinent(prev => prev === c.id ? 'all' : c.id);
                      setActiveTab('map');
                    }}
                    className={`group rounded-xl border px-3 py-2.5 text-start transition ${
                      isSelected
                        ? 'border-sky-500 bg-sky-950/70 shadow-md ring-1 ring-sky-500/50'
                        : 'border-slate-800 bg-slate-950/60 hover:border-sky-500/40 hover:bg-slate-900'
                    }`}
                  >
                    <span className={`block text-[11px] font-semibold leading-tight break-words ${isSelected ? 'text-sky-300 font-bold' : 'text-slate-400'}`}>
                      {c.name}
                    </span>
                    <span className="mt-1.5 flex items-baseline gap-1.5">
                      <span className="font-display text-xl font-black leading-none text-white">
                        {c.countriesCount}
                      </span>
                      <span className="text-[10px] leading-none text-slate-500">
                        {isAr ? 'دولة' : 'nations'}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Views */}
        {activeTab === 'map' ? (
          <div className="grid items-start gap-4 xl:grid-cols-12">
            <div className="min-w-0 xl:col-span-3">
              <DashboardSidebar
                data={data}
                lang={lang}
                onSelectCountry={handleSelectCountry}
                selectedContinent={selectedContinent}
                setSelectedContinent={setSelectedContinent}
                activeCountryId={activeCountry?.id}
              />
            </div>

            <div className="min-w-0 space-y-4 xl:col-span-6">
              <TimelineSlider
                lang={lang}
                selectedYear={selectedYear}
                onYearChange={setSelectedYear}
              />

              <MapComponent
                data={data}
                lang={lang}
                onSelectCountry={handleSelectCountry}
                onClearSelection={() => setSelectedCountryId(null)}
                focusCountry={activeCountry}
                selectedYear={selectedYear}
                onYearChange={setSelectedYear}
                onOpenComparison={handleOpenComparison}
              />
            </div>

            <div className="min-w-0 xl:col-span-3">
              <IntelligenceBriefing
                lang={lang}
                countries={data.countries}
                onOpenStream={() => setActiveTab('stream')}
                onOpenArchive={() => setActiveTab('archive')}
              />
            </div>
          </div>
        ) : activeTab === 'military-heraldry' ? (
          <GlobalMilitaryHeraldryExplorer
            lang={lang}
            onSelectCountry={(country) => {
              handleSelectCountry(country);
            }}
          />
        ) : activeTab === 'media-monitor' ? (
          <GlobalMediaIntelligenceExplorer
            lang={lang}
            onSelectCountry={(country) => {
              handleSelectCountry(country);
            }}
          />
        ) : activeTab === 'currency' ? (
          <CurrencyVolatilityDashboard lang={lang} onSelectCountry={handleSelectCountry} />
        ) : activeTab === 'alliances' ? (
          <AllianceAnalyticsSection lang={lang} onSelectCountry={handleSelectCountry} />
        ) : activeTab === 'bilateral-treaties' ? (
          <BilateralAlliancesExplorer
            lang={lang}
            isOpen={true}
            onClose={() => setActiveTab('map')}
            onFocusTreatyOnMap={() => {
              setActiveTab('map');
            }}
          />
        ) : activeTab === 'arms' ? (
          <ArmsDealsExplorer lang={lang} onSelectCountry={handleSelectCountry} />
        ) : activeTab === 'un-votes' ? (
          <UnVotingExplorer lang={lang} onSelectCountry={handleSelectCountry} />
        ) : activeTab === 'statements' ? (
          <LeadersStatementsExplorer lang={lang} onSelectCountry={handleSelectCountry} />
        ) : activeTab === 'pipelines' ? (
          <DataIngestionPipelinesExplorer lang={lang} />
        ) : activeTab === 'osint' ? (
          <OsintLiveFeedPanel
            lang={lang}
            onFocusOnMap={() => {
              setActiveTab('map');
            }}
          />
        ) : activeTab === 'hotspots' ? (
          <HotspotsPanel
            lang={lang}
            onFocusOnMap={() => {
              setActiveTab('map');
            }}
          />
        ) : activeTab === 'stream' ? (
          <GlobalIntelligenceStream lang={lang} />
        ) : activeTab === 'archive' ? (
          <HistoricalArchivePanel
            lang={lang}
            onFocusOnMap={(targetYear, countryId) => {
              if (targetYear) setSelectedYear(Number(targetYear));
              if (countryId) setSelectedCountryId(countryId);
              setActiveTab('map');
            }}
          />
        ) : (
          <AnalyticsPanel data={data} lang={lang} onSelectCountry={handleSelectCountry} />
        )}
      </main>

      <footer className="mt-8 border-t border-slate-800 bg-slate-950/60 px-4 py-5 text-center">
        <p className="m-0 text-xs font-semibold text-slate-400">
          GeoNexus 2026 — {isAr ? 'منصة تحليل جيوسياسي' : 'Geopolitical Intelligence Platform'}
        </p>
        <p className="m-0 mt-1 text-[11px] text-slate-600">
          {isAr
            ? 'البيانات للاستخدام التحليلي العام — تحقّق من المصادر الرسمية قبل الاستشهاد.'
            : 'Data for public analysis — verify against official sources before citing.'}{' '}
          OpenStreetMap · CARTO · GDELT
        </p>
      </footer>

      {activeCountry && (
        <CountryDetailModal
          country={activeCountry}
          lang={lang}
          onClose={() => setSelectedCountryId(null)}
          onOpenComparison={(c) => {
            handleOpenComparison(c);
          }}
        />
      )}

      {isComparisonOpen && (
        <CountryComparisonModal
          countries={data.countries}
          initialCountry1={comparisonCountry1}
          initialCountry2={comparisonCountry2}
          lang={lang}
          onClose={() => setIsComparisonOpen(false)}
          onOpenFullCountry={(c) => {
            setIsComparisonOpen(false);
            setSelectedCountryId(c?.id);
          }}
        />
      )}

      {isSearchOpen && (
        <SearchModal
          data={data}
          lang={lang}
          onClose={() => setIsSearchOpen(false)}
          onSelectCountry={(c) => {
            handleSelectCountry(c);
            setIsSearchOpen(false);
          }}
        />
      )}

      <BilateralAlliancesExplorer
        lang={lang}
        isOpen={isBilateralTreatiesModalOpen}
        onClose={() => setIsBilateralTreatiesModalOpen(false)}
        onFocusTreatyOnMap={(_coords) => {
          setIsBilateralTreatiesModalOpen(false);
          setActiveTab('map');
        }}
      />
      </div>
    </LeadershipProvider>
  );
}
