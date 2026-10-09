import {
  Globe,
  Search,
  Languages,
  BarChart3,
  Flame,
  Radio,
  Shield,
  Clock,
  Radar,
  Swords,
  Crosshair,
  Vote,
  Crown,
  Database,
  Coins,
  Target,
} from 'lucide-react';

export default function Navbar({
  lang,
  setLang,
  onOpenSearch,
  activeTab,
  setActiveTab,
  onOpenComparison,
  onOpenBilateralTreaties,
}) {
  const isAr = lang === 'ar';

  const tabs = [
    { id: 'map', label: isAr ? 'الخريطة الحية' : 'Live Map', icon: Globe },
    { id: 'alliances', label: isAr ? 'التحالفات والتكتلات' : 'Alliances Matrix', icon: Shield, badge: '13' },
    { id: 'bilateral-treaties', label: isAr ? 'المعاهدات والبنود الثنائية' : 'Bilateral Pacts & Clauses', icon: Target, badge: 'NEW' },
    { id: 'currency', label: isAr ? 'تقلبات العملات (10 سنوات)' : 'Currency 10Y FX', icon: Coins, badge: 'FX' },
    { id: 'arms', label: isAr ? 'صفقات السلاح (SIPRI)' : 'Arms Deals', icon: Crosshair, badge: 'SIPRI' },
    { id: 'un-votes', label: isAr ? 'تصويت الأمم المتحدة' : 'UN Voting Matrix', icon: Vote, badge: 'UN' },
    { id: 'statements', label: isAr ? 'عقائد وقادة' : 'Leaders Doctrines', icon: Crown },
    { id: 'hotspots', label: isAr ? 'بؤر النزاع والحروب' : 'Hotspots & Wars', icon: Flame },
    { id: 'osint', label: isAr ? 'رادار OSINT' : 'OSINT Radar', icon: Radar, badge: 'LIVE' },
    { id: 'stream', label: isAr ? 'البث المباشر' : 'Live Stream', icon: Radio, badge: 'LIVE' },
    { id: 'archive', label: isAr ? 'الأرشيف التاريخي' : 'Historical Archive', icon: Clock },
    { id: 'pipelines', label: isAr ? 'خطوط البيانات' : 'Data Pipelines', icon: Database, badge: 'SYNC' },
    { id: 'analytics', label: isAr ? 'التحليلات المقارنة' : 'Analytics', icon: BarChart3 },
  ];

  return (
    <header className="sticky top-0 z-[900] border-b border-slate-800 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto max-w-[1600px] px-3 sm:px-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 py-3">
          {/* Brand */}
          <button
            onClick={() => setActiveTab('map')}
            className="group order-1 flex min-w-0 flex-1 items-center gap-3 text-start"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20 transition group-hover:scale-105">
              <Globe className="h-5 w-5" />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="flex items-center gap-2">
                <span className="font-display text-lg font-black tracking-tight text-white sm:text-xl">
                  GeoNexus
                </span>
                <span className="nx-chip border border-sky-500/30 bg-sky-500/10 text-sky-300">2026</span>
              </span>
              <span className="block truncate text-[11px] text-slate-400">
                {isAr ? 'المنصة الجيوسياسية الاستخباراتية' : 'Geopolitical Intelligence Platform'}
              </span>
            </span>
          </button>

          {/* Actions */}
          <div className="order-2 flex shrink-0 items-center gap-2">
            {/* زر المقارنة العسكرية المباشرة */}
            <button
              onClick={() => onOpenComparison?.()}
              aria-label={isAr ? 'مقارنة الدول' : 'Compare Countries'}
              title={isAr ? 'المقارنة العسكرية والجيوسياسية المباشرة بين دولتين' : 'Head-to-Head Military & Geopolitical Comparison'}
              className="group flex items-center gap-1.5 rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-500/15 to-rose-500/15 px-3 py-1.5 text-xs font-bold text-amber-300 shadow-sm transition hover:border-amber-400 hover:bg-amber-500/25"
            >
              <Swords className="h-4 w-4 text-amber-400 transition group-hover:rotate-12" />
              <span className="hidden sm:inline">{isAr ? 'مقارنة عسكرية' : 'Compare'}</span>
              <span className="rounded bg-amber-500/20 border border-amber-500/40 px-1 py-0.2 text-[9px] font-mono text-amber-200">VS</span>
            </button>

            {/* زر المعاهدات الثنائية والبنود الاستراتيجية */}
            <button
              onClick={() => onOpenBilateralTreaties?.()}
              aria-label={isAr ? 'المعاهدات الثنائية والبنود' : 'Bilateral Treaties'}
              title={isAr ? 'مركز المعاهدات الثنائية والبنود الاستراتيجية وغايات التحالف' : 'Bilateral Treaties & Strategic Clauses Hub'}
              className="group flex items-center gap-1.5 rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-500/20 to-indigo-500/15 px-3 py-1.5 text-xs font-bold text-amber-300 shadow-sm transition hover:border-amber-400 hover:bg-amber-500/30"
            >
              <Target className="h-4 w-4 text-amber-400 transition group-hover:rotate-45" />
              <span className="hidden md:inline">{isAr ? 'معاهدات وبنود' : 'Treaties'}</span>
              <span className="rounded bg-amber-500/25 border border-amber-500/40 px-1 py-0.2 text-[9px] font-mono text-amber-200">PACT</span>
            </button>

            <button
              onClick={onOpenSearch}
              aria-label={isAr ? 'بحث' : 'Search'}
              className="group flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-300 transition hover:border-sky-500/40 hover:text-white"
            >
              <Search className="h-4 w-4 shrink-0 text-sky-400" />
              <span className="hidden sm:inline">{isAr ? 'بحث' : 'Search'}</span>
              <kbd className="hidden rounded border border-slate-700 bg-slate-950 px-1.5 py-0.5 text-[10px] text-slate-500 lg:inline">
                Ctrl K
              </kbd>
            </button>

            <button
              onClick={() => setLang(isAr ? 'en' : 'ar')}
              aria-label={isAr ? 'Switch to English' : 'التحويل إلى العربية'}
              title={isAr ? 'التحويل الفوري إلى الإنجليزية (بدون تداخل لغوي)' : 'Switch to Arabic (Instant Bi-directional)'}
              className="group flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900/90 px-3 py-1.5 text-xs font-bold text-slate-200 shadow-sm transition hover:border-sky-500/50 hover:bg-slate-850"
            >
              <Languages className="h-4 w-4 shrink-0 text-sky-400 transition group-hover:rotate-12" />
              <div className="flex items-center gap-1 font-mono text-[11px]">
                <span className={`rounded px-1.5 py-0.5 transition ${isAr ? 'bg-sky-600 text-white font-black' : 'text-slate-400'}`}>ع</span>
                <span className="text-slate-600">/</span>
                <span className={`rounded px-1.5 py-0.5 transition ${!isAr ? 'bg-sky-600 text-white font-black' : 'text-slate-400'}`}>EN</span>
              </div>
            </button>
          </div>

          {/* Tabs */}
          <nav
            aria-label={isAr ? 'أقسام الموقع' : 'Sections'}
            className="order-3 flex w-full items-center gap-1 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/80 p-1 sm:w-auto lg:order-2 lg:w-auto lg:flex-1 lg:justify-center"
          >
            {tabs.map(({ id, label, icon: Icon, badge }) => {
              const active = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  aria-current={active ? 'page' : undefined}
                  className={`flex shrink-0 items-center justify-center gap-2 rounded-lg px-3 py-1.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition ${
                    active
                      ? 'bg-sky-600 text-white shadow shadow-sky-600/25'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{label}</span>
                  {badge && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
