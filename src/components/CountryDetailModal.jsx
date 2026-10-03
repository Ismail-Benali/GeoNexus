import React from 'react';
import { X, Shield, Building2, Users, Landmark, AlertTriangle, TrendingUp, History, Award } from 'lucide-react';

export default function CountryDetailModal({ country, lang, onClose }) {
  if (!country) return null;
  const isAr = lang === 'ar';

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden text-slate-100 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-slate-800 px-6 py-4 border-b border-slate-700 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{country.flag}</span>
            <div>
              <h2 className="text-2xl font-black text-white m-0 flex items-center gap-2">
                {country.name}
              </h2>
              <p className="text-sm text-slate-400 m-0">
                {isAr ? `العاصمة: ${country.capital}` : `Capital: ${country.capital}`}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="bg-slate-700 hover:bg-slate-600 p-2 rounded-xl text-slate-300 hover:text-white transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Leadership & Political Structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold mb-2">
                <Users className="w-5 h-5" />
                <span>{isAr ? 'القيادة والأحزاب السياسية' : 'Leadership & Political Parties'}</span>
              </div>
              <p className="text-sm text-slate-300 mb-1">
                <strong>{isAr ? 'القائد / الرئيس:' : 'Leader:'}</strong> {country.leader}
              </p>
              <p className="text-sm text-slate-300 mb-1">
                <strong>{isAr ? 'الحزب الحاكم:' : 'Ruling Party:'}</strong> {country.rulingParty}
              </p>
              <div className="mt-2 text-xs text-slate-400">
                <strong>{isAr ? 'الأحزاب الرئيسية:' : 'Key Parties:'}</strong> {country.parties.join(', ')}
              </div>
            </div>

            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
              <div className="flex items-center gap-2 text-red-400 font-bold mb-2">
                <Shield className="w-5 h-5" />
                <span>{isAr ? 'الجيش والتحالفات الاستراتيجية' : 'Military & Alliances'}</span>
              </div>
              <p className="text-sm text-slate-300 mb-1">
                <strong>{isAr ? 'ميزانية الجيش:' : 'Military Budget:'}</strong> {country.militaryBudget}
              </p>
              <p className="text-sm text-slate-300 mb-1">
                <strong>{isAr ? 'قائد الجيش / الأركان:' : 'Military Chief:'}</strong> {country.militaryLeader}
              </p>
              <div className="mt-2 text-xs text-slate-300 flex flex-wrap gap-1">
                {country.alliances.map((all, i) => (
                  <span key={i} className="bg-blue-600/20 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded-md">
                    {all}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Corporations & Investments */}
          <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
            <div className="flex items-center gap-2 text-emerald-400 font-bold mb-3">
              <Building2 className="w-5 h-5" />
              <span>{isAr ? 'الشركات الكبرى، الاستثمارات ومؤشرات الضغط' : 'Top Corporations, Investments & Pressure Points'}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {country.topCompanies.map((comp, idx) => (
                <div key={idx} className="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-white text-sm">{comp.name}</span>
                    <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">{comp.sector}</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-1"><strong>{isAr ? 'الاستثمار/التقييم:' : 'Investment:'}</strong> {comp.investment}</p>
                  <p className="text-xs text-slate-400"><strong>{isAr ? 'نقاط الضغط والتاثير:' : 'Pressure Impact:'}</strong> {comp.pressure}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Corruption, Money Laundering, Human Trafficking & Terrorism */}
          <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
            <div className="flex items-center gap-2 text-amber-400 font-bold mb-3">
              <AlertTriangle className="w-5 h-5" />
              <span>{isAr ? 'غسيل الأموال، الاتجار بالبشر ومؤشرات المخاطر الأمنية' : 'Money Laundering, Human Trafficking & Security Risks'}</span>
            </div>
            <div className="space-y-2 text-sm text-slate-300">
              <p><strong>{isAr ? 'مخاطر غسيل الأموال:' : 'Money Laundering Risk:'}</strong> {country.corruptionLaundering.moneyLaunderingRisk}</p>
              <p><strong>{isAr ? 'الاتجار بالبشر والعمل القسري:' : 'Human Trafficking:'}</strong> {country.corruptionLaundering.humanTrafficking}</p>
              <p><strong>{isAr ? 'التهديدات الإرهابية والأمنية:' : 'Terrorism & Security Threats:'}</strong> {country.corruptionLaundering.terrorismThreat}</p>
            </div>
          </div>

          {/* Historical Events */}
          <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
            <div className="flex items-center gap-2 text-indigo-400 font-bold mb-3">
              <History className="w-5 h-5" />
              <span>{isAr ? 'أهم الاحداث والوقائع التاريخية (حتى 2026)' : 'Key Historical Events & Facts (up to 2026)'}</span>
            </div>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-300">
              {country.historicalEvents.map((event, i) => (
                <li key={i}>{event}</li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
