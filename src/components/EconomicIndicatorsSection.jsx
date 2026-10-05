import { useMemo } from 'react';
import {
  TrendingUp,
  Percent,
  Coins,
  Globe2,
  Building2,
  ArrowUpRight,
  ArrowDownRight,
  Landmark,
} from 'lucide-react';
import { getCountryEconomicData } from '../data/economicData';

export default function EconomicIndicatorsSection({ country, lang = 'ar' }) {
  const isAr = lang === 'ar';
  const ecoData = useMemo(() => getCountryEconomicData(country, lang), [country, lang]);

  if (!ecoData) return null;

  const isGrowthPositive = ecoData.gdpGrowth >= 0;
  const isHighInflation = ecoData.inflationRate >= 6.0;

  return (
    <div
      className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950 p-4 space-y-4 shadow-xl"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* الترويسة */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-xl border border-emerald-500/35 bg-emerald-500/15 text-emerald-300">
            <Coins className="h-4 w-4" />
          </div>
          <div>
            <h4 className="m-0 text-xs font-black text-white">
              {isAr ? 'المؤشرات الاقتصادية والتجارة الدولية' : 'Economic Indicators & Trade'}
            </h4>
            <span className="text-[10px] text-slate-400">
              {isAr ? 'النمو والتضخم وأهم الشركاء التجاريين' : 'GDP Growth, Inflation & Trade Partners'}
            </span>
          </div>
        </div>

        <span className="rounded-md border border-slate-700 bg-slate-950 px-2 py-0.5 font-mono text-[10px] font-bold text-slate-300">
          {ecoData.currency}
        </span>
      </div>

      {/* المؤشرات الثلاثة الرئيسية: نمو الناتج المحلي، معدل التضخم، والناتج الاسمي */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        {/* نمو الناتج المحلي الإجمالي */}
        <div className="rounded-xl border border-emerald-500/25 bg-emerald-950/15 p-3 space-y-1">
          <div className="flex items-center justify-between text-slate-400 text-[10px] font-bold">
            <span>{isAr ? 'نمو الناتج (GDP)' : 'GDP Growth'}</span>
            <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-mono text-lg font-black text-emerald-300">
              {isGrowthPositive ? `+${ecoData.gdpGrowth}%` : `${ecoData.gdpGrowth}%`}
            </span>
            {isGrowthPositive ? (
              <ArrowUpRight className="h-3.5 w-3.5 text-emerald-400" />
            ) : (
              <ArrowDownRight className="h-3.5 w-3.5 text-rose-400" />
            )}
          </div>
          <span className="block text-[9px] text-slate-500">
            {isAr ? 'معدل سنوي مركب' : 'Annual rate'}
          </span>
        </div>

        {/* معدل التضخم الحالي */}
        <div className={`rounded-xl border p-3 space-y-1 ${
          isHighInflation
            ? 'border-rose-500/25 bg-rose-950/15'
            : 'border-sky-500/25 bg-sky-950/15'
        }`}>
          <div className="flex items-center justify-between text-slate-400 text-[10px] font-bold">
            <span>{isAr ? 'معدل التضخم' : 'Inflation Rate'}</span>
            <Percent className={`h-3.5 w-3.5 ${isHighInflation ? 'text-rose-400' : 'text-sky-400'}`} />
          </div>
          <div className="flex items-baseline gap-1">
            <span className={`font-mono text-lg font-black ${isHighInflation ? 'text-rose-300' : 'text-sky-300'}`}>
              {ecoData.inflationRate}%
            </span>
          </div>
          <span className="block text-[9px] text-slate-500">
            {isAr
              ? isHighInflation ? 'ضغوط تضخمية مرتفعة' : 'تضخم منضبط ومستقر'
              : isHighInflation ? 'High inflationary pressure' : 'Controlled & stable'}
          </span>
        </div>

        {/* حجم الناتج المحلي الاسمي */}
        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 space-y-1 col-span-2 sm:col-span-1">
          <div className="flex items-center justify-between text-slate-400 text-[10px] font-bold">
            <span>{isAr ? 'حجم الناتج الاسمي' : 'Nominal GDP'}</span>
            <Building2 className="h-3.5 w-3.5 text-amber-400" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-mono text-lg font-black text-amber-300">
              ${ecoData.gdpNominalBn.toLocaleString()}B
            </span>
          </div>
          <span className="block text-[9px] text-slate-500">
            {isAr ? 'القيمة السوقية الكلية' : 'Total annual value'}
          </span>
        </div>
      </div>

      {/* الشركاء التجاريون الرئيسيون (Main Trade Partners) */}
      <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3.5 space-y-2.5">
        <div className="flex items-center justify-between">
          <h5 className="m-0 text-xs font-bold text-white flex items-center gap-1.5">
            <Globe2 className="h-3.5 w-3.5 text-sky-400" />
            <span>{isAr ? 'أهم الشركاء التجاريين (حصة التبادل %)' : 'Main Trade Partners (% Share)'}</span>
          </h5>
          <span className="text-[10px] text-slate-500 font-mono">
            {isAr ? 'صادرات وواردات' : 'Exports & Imports'}
          </span>
        </div>

        <div className="space-y-2 pt-1">
          {ecoData.tradePartners.map((partner, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                  <span>{partner.flag || '🌐'}</span>
                  <span>{partner.name}</span>
                </div>
                <span className="font-mono font-bold text-sky-400">{partner.share}%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-sky-500 to-emerald-400"
                  style={{ width: `${Math.min(100, partner.share * 3.5)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* صندوق الثروة السيادية والاحتياطيات */}
      {ecoData.sovereignFund && (
        <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-2.5 flex items-center gap-2.5">
          <div className="grid h-7 w-7 place-items-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-300 shrink-0">
            <Landmark className="h-3.5 w-3.5" />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] font-bold text-slate-400 block">
              {isAr ? 'صندوق الثروة السيادية والاحتياطي المالي:' : 'Sovereign Wealth Fund & Reserves:'}
            </span>
            <span className="text-xs font-semibold text-slate-200 truncate block">
              {ecoData.sovereignFund}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
