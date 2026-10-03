import React, { useState } from 'react';
import { Globe, Shield, Search, ChevronRight, Filter } from 'lucide-react';

export default function DashboardSidebar({ data, lang, onSelectCountry, selectedContinent, setSelectedContinent }) {
  const isAr = lang === 'ar';
  const [searchFilter, setSearchFilter] = useState('');

  const filteredCountries = data.countries.filter(c => {
    const matchesContinent = selectedContinent === 'all' || c.continent === selectedContinent;
    const matchesSearch = c.name.toLowerCase().includes(searchFilter.toLowerCase()) || c.capital.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesContinent && matchesSearch;
  });

  return (
    <aside className="w-full lg:w-80 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col gap-4 shadow-xl backdrop-blur-md">
      
      {/* Sidebar Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-blue-400" />
          <h3 className="font-bold text-white text-base m-0">
            {isAr ? 'الدول والقارات' : 'Nations & Continents'}
          </h3>
        </div>
        <span className="text-xs bg-blue-500/20 text-blue-300 px-2.5 py-0.5 rounded-full border border-blue-500/30">
          {filteredCountries.length} {isAr ? 'دولة' : 'States'}
        </span>
      </div>

      {/* Continent Filter */}
      <div className="flex flex-wrap gap-1.5">
        <button
          onClick={() => setSelectedContinent('all')}
          className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
            selectedContinent === 'all' ? 'bg-blue-600 text-white shadow' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          {isAr ? 'الكل' : 'All'}
        </button>
        {data.continents.map(cont => (
          <button
            key={cont.id}
            onClick={() => setSelectedContinent(cont.id)}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
              selectedContinent === cont.id ? 'bg-blue-600 text-white shadow' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {cont.name}
          </button>
        ))}
      </div>

      {/* Quick Search inside Sidebar */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
        <input
          type="text"
          value={searchFilter}
          onChange={e => setSearchFilter(e.target.value)}
          placeholder={isAr ? 'تصفية سريعة للدول...' : 'Quick filter countries...'}
          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-blue-500 transition"
        />
      </div>

      {/* Country List */}
      <div className="space-y-1.5 overflow-y-auto max-h-[420px] pr-1">
        {filteredCountries.map(country => (
          <div
            key={country.id}
            onClick={() => onSelectCountry(country)}
            className="bg-slate-800/40 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/50 p-2.5 rounded-xl cursor-pointer transition flex items-center justify-between group"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">{country.flag}</span>
              <div>
                <h4 className="font-bold text-white text-xs group-hover:text-blue-400 transition m-0">{country.name}</h4>
                <p className="text-[10px] text-slate-400 m-0">{country.capital}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-blue-400 bg-blue-500/10 px-2 py-1 rounded-md border border-blue-500/20">
              <span>{country.militaryBudget}</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </div>
        ))}
      </div>

    </aside>
  );
}
