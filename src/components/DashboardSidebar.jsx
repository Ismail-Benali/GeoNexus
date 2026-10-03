import { useMemo, useState } from 'react';
import { Search, ChevronLeft, Globe2 } from 'lucide-react';

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

  const list = useMemo(() => {
    const q = filter.trim().toLowerCase();
    return data.countries.filter((c) => {
      const byContinent = selectedContinent === 'all' || c.continent === selectedContinent;
      if (!byContinent) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.capital.toLowerCase().includes(q) ||
        c.leader.toLowerCase().includes(q) ||
        c.topCompanies.some((comp) => comp.name.toLowerCase().includes(q))
      );
    });
  }, [data.countries, filter, selectedContinent]);

  return (
    <aside className="nx-panel flex flex-col overflow-hidden">
      <div className="nx-panel-head">
        <h3 className="m-0 flex items-center gap-2 text-sm font-bold text-white">
          <Globe2 className="h-4 w-4 text-sky-400" />
          {isAr ? 'دول العالم' : 'Nations'}
        </h3>
        <span className="nx-chip border border-sky-500/25 bg-sky-500/10 text-sky-300">
          {list.length}
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

      {/* List */}
      <div className="mt-3 max-h-[380px] space-y-1 overflow-y-auto px-2 pb-3 lg:max-h-[520px]">
        {list.length === 0 && (
          <p className="px-3 py-8 text-center text-xs text-slate-500">
            {isAr ? 'لا توجد نتائج مطابقة' : 'No matching results'}
          </p>
        )}

        {list.map((country) => {
          const active = country.id === activeCountryId;
          return (
            <button
              key={country.id}
              onClick={() => onSelectCountry(country)}
              className={`flex w-full items-center gap-2.5 rounded-xl border px-2.5 py-2 text-start transition ${
                active
                  ? 'border-sky-500/50 bg-sky-500/10'
                  : 'border-transparent hover:border-slate-700 hover:bg-slate-800/60'
              }`}
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-slate-800 bg-slate-950/70 text-lg">
                {country.flag}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-xs font-bold text-slate-100">
                  {country.name}
                </span>
                <span className="block truncate text-[10px] text-slate-500">{country.capital}</span>
              </span>
              <span className="nx-chip shrink-0 border border-rose-500/25 bg-rose-500/10 text-rose-300">
                {country.militaryBudget}
              </span>
              <ChevronLeft className="h-3.5 w-3.5 shrink-0 text-slate-600 rtl:hidden ltr:block" />
            </button>
          );
        })}
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
