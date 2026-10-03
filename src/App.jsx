import { useCallback, useEffect, useState } from 'react';
import { geopoliticalData } from './data/geopoliticalData';
import Navbar from './components/Navbar';
import NewsTickerBar from './components/NewsTickerBar';
import MapComponent from './components/MapComponent';
import AnalyticsPanel from './components/AnalyticsPanel';
import CountryDetailModal from './components/CountryDetailModal';
import SearchModal from './components/SearchModal';
import DashboardSidebar from './components/DashboardSidebar';
import IntelligenceBriefing from './components/IntelligenceBriefing';
import { Activity, Globe2, Radio } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('ar');
  const [activeTab, setActiveTab] = useState('map');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState('all');

  const data = geopoliticalData[lang];
  const isAr = lang === 'ar';

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
    setSelectedCountry((prev) => (prev?.id === country?.id ? null : country));
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
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenSearch={() => setIsSearchOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <NewsTickerBar tickerItems={data.newsTicker} lang={lang} />

      <main className="mx-auto w-full max-w-[1600px] flex-1 px-3 py-4 sm:px-4 sm:py-6">
        {/* Hero */}
        <section className="nx-grid-lines nx-panel relative mb-5 overflow-hidden">
          <div className="pointer-events-none absolute -end-24 -top-24 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="relative flex flex-col gap-5 p-5 lg:flex-row lg:items-center lg:justify-between lg:p-7">
            <div className="max-w-2xl">
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

              <div className="mt-4 flex flex-wrap gap-2">
                {stats.map(({ icon: Icon, label, value, tone }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2"
                  >
                    <Icon className={`h-4 w-4 ${tone}`} />
                    <span className="text-[11px] text-slate-500">{label}</span>
                    <span className="font-display text-sm font-black text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Continent grid */}
            <div className="grid shrink-0 grid-cols-3 gap-2 lg:w-80">
              {data.continents.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setSelectedContinent(c.id);
                    setActiveTab('map');
                  }}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 px-2 py-2.5 text-center transition hover:border-sky-500/40 hover:bg-slate-900"
                >
                  <span className="block text-[11px] text-slate-400">{c.name}</span>
                  <span className="font-display block text-base font-black text-white">
                    {c.countriesCount}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Views */}
        {activeTab === 'map' ? (
          <div className="grid gap-4 xl:grid-cols-12">
            <div className="xl:col-span-3">
              <DashboardSidebar
                data={data}
                lang={lang}
                onSelectCountry={handleSelectCountry}
                selectedContinent={selectedContinent}
                setSelectedContinent={setSelectedContinent}
                activeCountryId={selectedCountry?.id}
              />
            </div>

            <div className="space-y-4 xl:col-span-6">
              <MapComponent
                data={data}
                lang={lang}
                onSelectCountry={handleSelectCountry}
                onClearSelection={() => setSelectedCountry(null)}
                focusCountry={selectedCountry}
              />
            </div>

            <div className="xl:col-span-3">
              <IntelligenceBriefing lang={lang} countries={data.countries} />
            </div>
          </div>
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
            ? 'البيانات للاستخدام التحليلي العام — تحقّق من المصادر الرسمية قبل Citations.'
            : 'Data for public analysis — verify against official sources before citing.'}{' '}
          OpenStreetMap · CARTO · GDELT
        </p>
      </footer>

      {selectedCountry && (
        <CountryDetailModal
          country={selectedCountry}
          lang={lang}
          onClose={() => setSelectedCountry(null)}
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
    </div>
  );
}
