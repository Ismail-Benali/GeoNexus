import { useMemo, useState } from 'react';
import { Search, ChevronLeft, ChevronRight, Globe2 } from 'lucide-react';
import { getFlagUrl, getEmblemUrl } from '../utils/countrySymbols';

export default function DashboardSidebar({
  data,
  lang,
  onSelectCountry,
  selectedContinent,
  setSelectedContinent,
  activeCountryId,
}) {
  const isAr = lang === 'ar';
  const [filter, setFilter] = useState('');
  const [region, setRegion] = useState('all');
  const [sort, setSort] = useState('name');

  const regions = useMemo(() => {
    const set = new Set(
      data.countries.filter((c) => selectedContinent === 'all' || c.continent === selectedContinent).map((c) => c.region),
    );
    return [...set].sort();
  }, [data.countries, selectedContinent]);

  const list = useMemo(() => {
    const q = filter.trim().toLowerCase();
    const rows = data.countries.filter((c) => {
      const byContinent = selectedContinent === 'all' || c.continent === selectedContinent;
      if (!byContinent) return false;
      const byRegion = region === 'all' || c.region === region;
      if (!byRegion) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.capital.toLowerCase().includes(q) ||
        c.leader.toLowerCase().includes(q) ||
        c.regionLabel.toLowerCase().includes(q) ||
        c.topCompanies.some((comp) => comp.name.toLowerCase().includes(q))
      );
    });

    const sorted = [...rows];
    if (sort === 'name') sorted.sort((a, b) => a.name.localeCompare(b.name, isAr ? 'ar' : 'en'));
    if (sort === 'budget') sorted.sort((a, b) => b.militaryBudgetBn - a.militaryBudgetBn);
    if (sort === 'population') sorted.sort((a, b) => b.populationM - a.populationM);
    if (sort === 'alliances') sorted.sort((a, b) => b.alliances.length - a.alliances.length);
    if (sort === 'detail') sorted.sort((a, b) => Number(b.detailed) - Number(a.detailed));

    const groupMap = new Map();
    for (const c of sorted) {
      if (!groupMap.has(c.region)) {
        groupMap.set(c.region, { region: c.region, label: c.regionLabel, items: [] });
      }
      groupMap.get(c.region).items.push(c);
    }
    const groups = Array.from(groupMap.values());
    return { rows: sorted, groups };
  }, [data.countries, filter, selectedContinent, region, sort, isAr]);

  const { rows, groups } = list;

  return (
    <aside className="nx-panel flex flex-col overflow-hidden">
      <div className="nx-panel-head">
        <h3 className="m-0 flex items-center gap-2 text-sm font-bold text-white">
          <Globe2 className="h-4 w-4 text-sky-400" />
          {isAr ? 'دول العالم' : 'Nations'}
        </h3>
        <span className="nx-chip border border-sky-500/25 bg-sky-500/10 text-sky-300">
          {rows.length}
        </span>
      </div>

      {/* Continent filters */}
      <div className="flex flex-wrap gap-1.5 px-4 pt-3">
        <FilterChip active={selectedContinent === 'all'} onClick={() => setSelectedContinent('all')}>
          {isAr ? 'الكل' : 'All'}
        </FilterChip>
        {data.continents.map((c) => (
          <FilterChip
            key={c.id}
            active={selectedContinent === c.id}
            onClick={() => setSelectedContinent(c.id)}
          >
            {c.name}
          </FilterChip>
        ))}
      </div>

      {/* Region + sort controls */}
      <div className="grid grid-cols-2 gap-2 px-4 pt-3">
        <label className="block">
          <span className="mb-1 block text-[10px] font-semibold text-slate-500">
            {isAr ? 'المنطقة' : 'Region'}
          </span>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full rounded-lg border border-slate-800 bg-slate-950/70 px-2 py-1.5 text-[11px] text-slate-200 outline-none focus:border-sky-500/50"
          >
            <option value="all">{isAr ? 'كل المناطق' : 'All regions'}</option>
            {regions.map((r) => {
              const meta = data.regions.find((x) => x.id === r);
              return (
                <option key={r} value={r}>
                  {meta?.name ?? r}
                </option>
              );
            })}
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-[10px] font-semibold text-slate-500">
            {isAr ? 'الترتيب' : 'Sort by'}
          </span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full rounded-lg border border-slate-800 bg-slate-950/70 px-2 py-1.5 text-[11px] text-slate-200 outline-none focus:border-sky-500/50"
          >
            <option value="name">{isAr ? 'الاسم' : 'Name'}</option>
            <option value="detail">{isAr ? 'التفصيل' : 'Detail level'}</option>
            <option value="budget">{isAr ? 'ميزانية الجيش' : 'Defence budget'}</option>
            <option value="population">{isAr ? 'عدد السكان' : 'Population'}</option>
            <option value="alliances">{isAr ? 'التحالفات' : 'Alliances'}</option>
          </select>
        </label>
      </div>

      {/* Search */}
      <div className="relative px-4 pt-3">
        <Search className="pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 ltr:left-3 rtl:right-3" />
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder={isAr ? 'ابحث عن دولة أو رئيس أو شركة...' : 'Search nation, leader, company...'}
          className="w-full rounded-xl border border-slate-800 bg-slate-950/70 py-2 pe-9 ps-3 text-xs text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-sky-500/50"
        />
      </div>

      {/* List — grouped by region */}
      <div className="mt-3 max-h-[420px] min-h-0 flex-1 space-y-3 overflow-y-auto px-2 pb-3 xl:max-h-[560px]">
        {rows.length === 0 && (
          <p className="px-3 py-8 text-center text-xs text-slate-500">
            {isAr ? 'لا توجد نتائج مطابقة' : 'No matching results'}
          </p>
        )}

        {groups.map((g) => (
          <section key={g.region}>
            <h4 className="sticky top-0 z-10 mb-1.5 flex items-center justify-between gap-2 border-b border-slate-800/80 bg-slate-950/95 px-1 pb-1 text-[10px] font-bold tracking-wide text-slate-400 backdrop-blur">
              <span className="truncate">{g.label}</span>
              <span className="shrink-0 text-slate-600">{g.items.length}</span>
            </h4>
            <ul className="m-0 list-none space-y-1 p-0">
              {g.items.map((country) => {
                const active = country.id === activeCountryId;
                return (
                  <li key={country.id}>
                    <button
                      onClick={() => onSelectCountry(country)}
                      className={`flex w-full items-center gap-2.5 rounded-xl border px-2.5 py-2 text-start transition ${
                        active
                          ? 'border-sky-500/50 bg-sky-500/10'
                          : 'border-transparent hover:border-slate-700 hover:bg-slate-800/60'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 shrink-0">
                        {/* الشعار */}
                        <div
                          className="h-8 w-8 rounded-lg border border-amber-500/25 bg-slate-900/90 p-1 shadow-sm flex items-center justify-center shrink-0"
                          title={isAr ? `شعار ${country.name}` : `Coat of arms of ${country.name}`}
                        >
                          <img
                            src={getEmblemUrl(country.id)}
                            alt=""
                            className="h-full w-full object-contain filter drop-shadow"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const fb = e.currentTarget.nextElementSibling;
                              if (fb) fb.style.display = 'block';
                            }}
                          />
                          <span style={{ display: 'none' }} className="text-xs">{country.flag}</span>
                        </div>

                        {/* الراية */}
                        <div className="h-5 w-7 overflow-hidden rounded border border-slate-700 bg-slate-900 shadow-sm shrink-0">
                          <img
                            src={getFlagUrl(country.id)}
                            alt={country.name}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const fb = e.currentTarget.nextElementSibling;
                              if (fb) fb.style.display = 'block';
                            }}
                          />
                          <span style={{ display: 'none' }} className="text-xs text-center leading-5">{country.flag}</span>
                        </div>
                      </div>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-xs font-bold text-slate-100">
                          {country.name}
                        </span>
                        <span className="block truncate text-[10px] text-slate-500">
                          {country.capital}
                        </span>
                      </span>
                      <span
                        className={`shrink-0 text-[9px] font-bold ${
                          country.detailed ? 'text-emerald-400' : 'text-slate-600'
                        }`}
                        title={
                          country.detailed
                            ? isAr
                              ? 'ملف تفصيلي'
                              : 'Detailed dossier'
                            : isAr
                              ? 'ملف أساسي'
                              : 'Basic profile'
                        }
                      >
                        {country.detailed ? '●' : '○'}
                      </span>
                      <span className="nx-chip shrink-0 border border-rose-500/25 bg-rose-500/10 text-rose-300">
                        {country.militaryBudget}
                      </span>
                      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-600 ltr:block rtl:hidden" />
                      <ChevronLeft className="h-3.5 w-3.5 shrink-0 text-slate-600 ltr:hidden rtl:block" />
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </aside>
  );
}

function FilterChip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold transition ${
        active
          ? 'bg-sky-600 text-white'
          : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
}
