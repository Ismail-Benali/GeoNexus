import React from 'react';
import { ShieldAlert, TrendingUp, Award, AlertTriangle, Cpu } from 'lucide-react';

export default function IntelligenceBriefing({ lang }) {
  const isAr = lang === 'ar';

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-4 shadow-xl backdrop-blur-md">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-red-400" />
          <h3 className="font-bold text-white text-base m-0">
            {isAr ? 'الإحاطة الاستخباراتية التكتيكية' : 'Tactical Intelligence Briefing'}
          </h3>
        </div>
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400 block">{isAr ? 'الإنفاق العسكري العالمي' : 'Global Mil Spend'}</span>
          <span className="text-lg font-black text-white mt-1 block">$2.44 T</span>
          <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
            <TrendingUp className="w-3 h-3" /> +6.8% {isAr ? 'سنوياً' : 'YoY'}
          </span>
        </div>

        <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
          <span className="text-[11px] text-slate-400 block">{isAr ? 'مؤشر الصراعات النشطة' : 'Active Conflicts Index'}</span>
          <span className="text-lg font-black text-amber-400 mt-1 block">Level 4</span>
          <span className="text-[10px] text-slate-400 mt-0.5 block">{isAr ? 'مراقبة بالذكاء الاصطناعي' : 'AI Monitored'}</span>
        </div>
      </div>

      {/* Strategic Hotspots */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
          {isAr ? 'النقاط الساخنة الاستراتيجية (2026)' : 'Strategic Hotspots (2026)'}
        </h4>

        <div className="space-y-2 text-xs">
          <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80 flex items-start gap-2.5">
            <span className="bg-red-500/20 text-red-400 p-1 rounded-md mt-0.5">🔥</span>
            <div>
              <strong className="text-white block">{isAr ? 'شرق أوروبا وأوكرانيا' : 'Eastern Europe & Ukraine'}</strong>
              <span className="text-slate-400 text-[11px]">{isAr ? 'استمرار إعادة التموضع العسكري والعقوبات الاقتصادية.' : 'Ongoing military repositioning and economic sanctions.'}</span>
            </div>
          </div>

          <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80 flex items-start gap-2.5">
            <span className="bg-blue-500/20 text-blue-400 p-1 rounded-md mt-0.5">🌐</span>
            <div>
              <strong className="text-white block">{isAr ? 'توسع تكتل بريكس وتجارة العملات' : 'BRICS Expansion & Local Currencies'}</strong>
              <span className="text-slate-400 text-[11px]">{isAr ? 'تعزيز التبادل التجاري بالعملات المحلية وتقليل الاعتماد على الدولار.' : 'Boosting local currency trade and decoupling.'}</span>
            </div>
          </div>

          <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80 flex items-start gap-2.5">
            <span className="bg-amber-500/20 text-amber-400 p-1 rounded-md mt-0.5">⚡</span>
            <div>
              <strong className="text-white block">{isAr ? 'أمن الطاقة وسلاسل الإمداد الخليجية' : 'Gulf Energy Security & Supply Chains'}</strong>
              <span className="text-slate-400 text-[11px]">{isAr ? 'دور محور أرامكو وأدنوك ومشاريع البنية التحتية العالمية.' : 'Aramco, ADNOC role and global infrastructure.'}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
