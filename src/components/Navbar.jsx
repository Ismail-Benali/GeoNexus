import React from 'react';
import { Globe, Search, ShieldAlert, Languages, BarChart2 } from 'lucide-react';

export default function Navbar({ lang, setLang, onOpenSearch, activeTab, setActiveTab }) {
  const isAr = lang === 'ar';

  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo & Title */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('map')}>
          <div className="bg-blue-600 p-2 rounded-xl text-white shadow-md flex items-center justify-center">
            <Globe className="w-7 h-7 animate-pulse" />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-wider bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent m-0">
              GeoNexus <span className="text-xs bg-indigo-500/30 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-500/40">2026</span>
            </h1>
            <p className="text-xs text-slate-400 m-0">
              {isAr ? 'المنصة الجيوسياسية والاستخباراتية الشاملة' : 'Global Geopolitical & Intelligence Platform'}
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-2 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700">
          <button
            onClick={() => setActiveTab('map')}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition ${
              activeTab === 'map' ? 'bg-blue-600 text-white shadow' : 'text-slate-300 hover:text-white hover:bg-slate-700'
            }`}
          >
            {isAr ? '🗺️ الخريطة التفاعلية' : '🗺️ Interactive Map'}
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition flex items-center gap-1.5 ${
              activeTab === 'analytics' ? 'bg-blue-600 text-white shadow' : 'text-slate-300 hover:text-white hover:bg-slate-700'
            }`}
          >
            <BarChart2 className="w-4 h-4" />
            {isAr ? '📊 التحليلات والجيوش' : '📊 Analytics & Militaries'}
          </button>
        </nav>

        {/* Actions (Search & Lang) */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-xl border border-slate-700 text-sm transition shadow-inner"
          >
            <Search className="w-4 h-4 text-blue-400" />
            <span>{isAr ? 'بحث متقدم...' : 'Advanced Search...'}</span>
            <kbd className="bg-slate-900 px-1.5 py-0.5 rounded text-xs text-slate-400 border border-slate-700">Ctrl+K</kbd>
          </button>

          <button
            onClick={() => setLang(isAr ? 'en' : 'ar')}
            className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white px-3.5 py-2 rounded-xl text-sm font-medium transition shadow-md"
          >
            <Languages className="w-4 h-4" />
            <span>{isAr ? 'English' : 'العربية'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
