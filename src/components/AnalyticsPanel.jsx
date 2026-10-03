import React from 'react';
import { Shield, Users, TrendingUp, Building2 } from 'lucide-react';

export default function AnalyticsPanel({ data, lang, onSelectCountry }) {
  const isAr = lang === 'ar';

  return (
    <div className="space-y-6 text-slate-100 text-right" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 border border-blue-500/30 p-6 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-black text-white mb-2">
          {isAr ? '📊 لوحة التحليلات الجيوسياسية والاستخباراتية (2026)' : '📊 Geopolitical & Intelligence Analytics Dashboard (2026)'}
        </h2>
        <p className="text-slate-300 text-sm">
          {isAr
            ? 'نظرة شاملة ومقارنة لميزانيات الجيوش، التحالفات الاستراتيجية الكبرى، ومؤشرات النفوذ الاقتصادي والشركات العابرة للقارات.'
            : 'Comprehensive comparison of military budgets, major strategic alliances, and economic influence of global corporations.'}
        </p>
      </div>

      {/* Alliances Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.alliancesList.map((alliance, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-lg">
            <div className="flex items-center gap-2 text-blue-400 font-bold mb-2">
              <Users className="w-5 h-5" />
              <h3 className="text-lg text-white m-0">{alliance.name}</h3>
            </div>
            <p className="text-xs text-slate-400 mb-3"><strong>{isAr ? 'التركيز:' : 'Focus:'}</strong> {alliance.focus}</p>
            <div className="text-xs text-slate-300">
              <strong>{isAr ? 'الأعضاء الرئيسيون:' : 'Key Members:'}</strong> {alliance.members.join(', ')}
            </div>
          </div>
        ))}
      </div>

      {/* Countries Quick Cards */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-indigo-400" />
          <span>{isAr ? 'مقارنة ميزانيات الجيوش والقيادات' : 'Military Budgets & Command Comparison'}</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.countries.map(country => (
            <div
              key={country.id}
              onClick={() => onSelectCountry(country)}
              className="bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 p-4 rounded-xl cursor-pointer transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{country.flag}</span>
                  <span className="text-xs bg-red-600/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded font-bold">
                    {country.militaryBudget}
                  </span>
                </div>
                <h4 className="font-bold text-white text-base mb-1">{country.name}</h4>
                <p className="text-xs text-slate-400 mb-2"><strong>{isAr ? 'قائد الجيش:' : 'Mil. Chief:'}</strong> {country.militaryLeader}</p>
              </div>
              <div className="text-xs text-blue-400 font-semibold mt-2 pt-2 border-t border-slate-700/60 flex items-center justify-between">
                <span>{isAr ? 'استعراض البيانات الكاملة' : 'View Full Data'}</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
