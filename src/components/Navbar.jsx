import { Globe, Search, Languages, BarChart3 } from 'lucide-react';

export default function Navbar({ lang, setLang, onOpenSearch, activeTab, setActiveTab }) {
  const isAr = lang === 'ar';

  const tabs = [
    { id: 'map', label: isAr ? 'الخريطة الحية' : 'Live Map', icon: Globe },
    { id: 'analytics', label: isAr ? 'التحليلات' : 'Analytics', icon: BarChart3 },
  ];

  return (
    <header className="sticky top-0 z-[900] border-b border-slate-800 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-4 py-3">
        {/* Brand */}
        <button
          onClick={() => setActiveTab('map')}
          className="group flex items-center gap-3 text-start"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20 transition group-hover:scale-105">
            <Globe className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="flex items-center gap-2">
              <span className="font-display text-xl font-black tracking-tight text-white">GeoNexus</span>
              <span className="nx-chip border border-sky-500/30 bg-sky-500/10 text-sky-300">2026</span>
            </span>
            <span className="block text-[11px] text-slate-400">
              {isAr ? 'المنصة الجيوسياسية الاستخباراتية' : 'Geopolitical Intelligence Platform'}
            </span>
          </span>
        </button>

        {/* Tabs */}
        <nav className="order-3 flex w-full items-center gap-1 rounded-xl border border-slate-800 bg-slate-900/80 p-1 sm:order-none sm:w-auto">
          {tabs.map(({ id, label, icon: Icon }) => {
            const active = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                aria-current={active ? 'page' : undefined}
                className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold transition sm:flex-none ${
                  active
                    ? 'bg-sky-600 text-white shadow shadow-sky-600/25'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSearch}
            className="group flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-300 transition hover:border-sky-500/40 hover:text-white"
          >
            <Search className="h-4 w-4 text-sky-400" />
            <span className="hidden sm:inline">{isAr ? 'بحث' : 'Search'}</span>
            <kbd className="hidden rounded border border-slate-700 bg-slate-950 px-1.5 py-0.5 text-[10px] text-slate-500 md:inline">
              Ctrl K
            </kbd>
          </button>

          <button
            onClick={() => setLang(isAr ? 'en' : 'ar')}
            className="flex items-center gap-1.5 rounded-xl bg-slate-900/80 px-3 py-2 text-sm font-semibold text-slate-200 ring-1 ring-slate-800 transition hover:ring-sky-500/40"
          >
            <Languages className="h-4 w-4 text-indigo-300" />
            {isAr ? 'EN' : 'ع'}
          </button>
        </div>
      </div>
    </header>
  );
}
