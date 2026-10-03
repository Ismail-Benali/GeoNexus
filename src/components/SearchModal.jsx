import React, { useState } from 'react';
import { Search, X, Globe, User, Building, Shield } from 'lucide-react';

export default function SearchModal({ data, lang, onClose, onSelectCountry }) {
  const [query, setQuery] = useState('');
  const isAr = lang === 'ar';

  const results = data.countries.filter(c => {
    const q = query.toLowerCase();
    return (
      c.name.toLowerCase().includes(q) ||
      c.capital.toLowerCase().includes(q) ||
      c.leader.toLowerCase().includes(q) ||
      c.rulingParty.toLowerCase().includes(q) ||
      c.militaryLeader.toLowerCase().includes(q) ||
      c.topCompanies.some(comp => comp.name.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center p-4 pt-20">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden text-slate-100 flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3 bg-slate-800/80">
          <Search className="w-5 h-5 text-blue-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={isAr ? 'ابحث عن دولة، رئيس، شركة، حزب، أو قائد عسكري...' : 'Search country, president, company, party...'}
            className="w-full bg-transparent border-none outline-none text-white text-lg placeholder-slate-500"
          />
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-2 flex-1">
          {query.trim() === '' ? (
            <div className="text-center py-10 text-slate-500">
              {isAr ? 'اكتب كلمة للبحث في قاعدة بيانات GeoNexus الشاملة...' : 'Type to search GeoNexus comprehensive database...'}
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-10 text-slate-400">
              {isAr ? 'لا توجد نتائج مطابقة لبحثك' : 'No matching results found'}
            </div>
          ) : (
            results.map(country => (
              <div
                key={country.id}
                onClick={() => {
                  onSelectCountry(country);
                  onClose();
                }}
                className="bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 p-3.5 rounded-xl cursor-pointer transition flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{country.flag}</span>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-blue-400 transition m-0">{country.name}</h3>
                    <p className="text-xs text-slate-400 m-0">{isAr ? `العاصمة: ${country.capital}` : `Capital: ${country.capital}`} | {country.leader}</p>
                  </div>
                </div>
                <div className="text-xs bg-blue-600/20 text-blue-300 border border-blue-500/30 px-2.5 py-1 rounded-lg">
                  {isAr ? 'عرض الملف الشامل' : 'View Profile'}
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
