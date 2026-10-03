import React, { useState, useEffect } from 'react';
import { geopoliticalData } from './data/geopoliticalData';
import Navbar from './components/Navbar';
import NewsTickerBar from './components/NewsTickerBar';
import MapComponent from './components/MapComponent';
import AnalyticsPanel from './components/AnalyticsPanel';
import CountryDetailModal from './components/CountryDetailModal';
import SearchModal from './components/SearchModal';
import DashboardSidebar from './components/DashboardSidebar';
import IntelligenceBriefing from './components/IntelligenceBriefing';
import { Globe, ArrowRight, BookOpen, ShieldAlert, Cpu } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('ar');
  const [activeTab, setActiveTab] = useState('map'); // 'map' or 'analytics'
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState('all');

  const data = geopoliticalData[lang];
  const isAr = lang === 'ar';

  // Keyboard shortcut Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white`} dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenSearch={() => setIsSearchOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Live News Ticker */}
      <NewsTickerBar tickerItems={data.newsTicker} lang={lang} />

      {/* Main Dashboard Layout */}
      <main className="flex-1 max-w-[1600px] w-full mx-auto px-4 py-6 space-y-6">
        
        {/* Header Hero Section */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 border border-slate-800 p-6 md:p-8 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="space-y-3 z-10 text-right md:text-start" style={{ textAlign: isAr ? 'right' : 'left' }}>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-bold">
              <Cpu className="w-3.5 h-3.5" />
              <span>{isAr ? 'لوحة القيادة الجيوسياسية الاستخباراتية (2026)' : 'Tactical Geopolitical Command Dashboard (2026)'}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight m-0">
              {data.title}
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl m-0">
              {data.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 z-10">
            {data.continents.map(cont => (
              <div key={cont.id} className="bg-slate-800/80 border border-slate-700/80 px-4 py-2.5 rounded-xl text-center shadow-md">
                <span className="block text-xs text-slate-400">{cont.name}</span>
                <span className="block text-lg font-bold text-white">{cont.countriesCount} {isAr ? 'دولة' : 'States'}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard 12-Column Grid View */}
        {activeTab === 'map' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Sidebar: Country & Continent Selector (3 cols) */}
            <div className="lg:col-span-3">
              <DashboardSidebar
                data={data}
                lang={lang}
                onSelectCountry={setSelectedCountry}
                selectedContinent={selectedContinent}
                setSelectedContinent={setSelectedContinent}
              />
            </div>

            {/* Central Map Area (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <h3 className="text-sm font-bold text-white flex items-center gap-2 m-0">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>{isAr ? 'خريطة العمليات الجيوسياسية الحية (OpenStreetMap)' : 'Live Geopolitical Operations Map'}</span>
                </h3>
                <span className="text-xs text-slate-400">
                  {isAr ? 'انقر على أي دولة لعرض الملف' : 'Click any country for profile'}
                </span>
              </div>
              <MapComponent data={data} lang={lang} onSelectCountry={setSelectedCountry} />
            </div>

            {/* Right Sidebar: Intelligence Briefing (3 cols) */}
            <div className="lg:col-span-3">
              <IntelligenceBriefing lang={lang} />
            </div>

          </div>
        ) : (
          <AnalyticsPanel data={data} lang={lang} onSelectCountry={setSelectedCountry} />
        )}

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-6 text-center text-xs text-slate-500 mt-12">
        <p>GeoNexus Command Dashboard 2026 &copy; All Global Geopolitical & Intelligence Rights Reserved.</p>
        <p className="mt-1 text-slate-600">OpenStreetMap integration • Real-time GDELT/RSS synchronization • Bilingual AR/EN</p>
      </footer>

      {/* Country Detail Modal */}
      {selectedCountry && (
        <CountryDetailModal
          country={selectedCountry}
          lang={lang}
          onClose={() => setSelectedCountry(null)}
        />
      )}

      {/* Advanced Search Modal */}
      {isSearchOpen && (
        <SearchModal
          data={data}
          lang={lang}
          onClose={() => setIsSearchOpen(false)}
          onSelectCountry={setSelectedCountry}
        />
      )}

    </div>
  );
}
