import { useMemo, useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  CartesianGrid,
} from 'recharts';
import { Shield } from 'lucide-react';
import { getMilitaryReadinessData } from '../data/militaryData';
import { translateText } from '../utils/translator';

function ReadinessTooltip({ active, payload, isAr }) {
  if (!active || !payload || !payload.length) return null;
  const data = payload[0].payload;

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-950/95 p-2.5 shadow-2xl backdrop-blur text-xs" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="flex items-center gap-1.5 font-bold text-white mb-1">
        <span>{data.flag || '⚔️'}</span>
        <span>{isAr ? data.nameAr : data.nameEn}</span>
        {data.rank && (
          <span className="rounded bg-sky-500/20 px-1 py-0.2 text-[9px] text-sky-300 font-mono">
            #{data.rank}
          </span>
        )}
      </div>
      <div className="space-y-1 text-[11px] text-slate-300">
        {typeof data.budget === 'number' && (
          <div className="flex justify-between gap-3">
            <span className="text-slate-400">{isAr ? 'ميزانية الدفاع:' : 'Budget:'}</span>
            <span className="font-bold text-emerald-400">${data.budget}B</span>
          </div>
        )}
        {typeof data.value === 'number' && data.unit && (
          <div className="flex justify-between gap-3">
            <span className="text-slate-400">{data.metricName}:</span>
            <span className="font-bold text-sky-400">{data.value.toLocaleString()} {data.unit}</span>
          </div>
        )}
        {typeof data.score === 'number' && (
          <div className="flex justify-between gap-3">
            <span className="text-slate-400">{isAr ? 'نقاط الجاهزية:' : 'Readiness:'}</span>
            <span className="font-bold text-amber-400">{data.score}/100</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function MilitaryReadinessCard({ country, lang = 'ar' }) {
  const isAr = lang === 'ar';
  const [chartView, setChartView] = useState('budget_personnel'); // 'budget_personnel' | 'ranking'

  const militaryData = useMemo(() => getMilitaryReadinessData(country), [country]);

  if (!militaryData) return null;

  // بيانات مخطط مقارنة الميزانية والكوادر العسكرية
  const budgetPersonnelData = [
    {
      metric: isAr ? 'ميزانية الدفاع' : 'Defense Budget',
      value: militaryData.budgetBn,
      unit: isAr ? 'مليار دولار' : '$Bn',
      metricName: isAr ? 'الميزانية السنوية' : 'Annual Budget',
      color: '#10b981', // emerald
      displayValue: `$${militaryData.budgetBn}B`,
    },
    {
      metric: isAr ? 'الجيش النشط' : 'Active Personnel',
      value: militaryData.activePersonnelK,
      unit: isAr ? 'ألف مقاتل' : 'k Troops',
      metricName: isAr ? 'القوات العاملة' : 'Active Duty',
      color: '#38bdf8', // sky
      displayValue: `${militaryData.activePersonnelK}k`,
    },
    {
      metric: isAr ? 'قوات الاحتياط' : 'Reserve Forces',
      value: militaryData.reservePersonnelK,
      unit: isAr ? 'ألف مقاتل' : 'k Reserves',
      metricName: isAr ? 'الاحتياط الجاهز' : 'Reserves',
      color: '#f59e0b', // amber
      displayValue: `${militaryData.reservePersonnelK}k`,
    },
  ];

  // بيانات مخطط التصنيف العالمي المقارن
  const rankingComparisonData = (militaryData.comparisonList || []).map((item) => {
    const isTarget = item.id === country.id?.toLowerCase() || item.isCurrent;
    return {
      id: item.id,
      nameAr: isTarget ? `${translateText(country.name, 'ar')} (المحددة)` : item.nameAr,
      nameEn: isTarget ? `${translateText(country.name, 'en')} (Target)` : item.nameEn,
      flag: isTarget ? country.flag : item.flag,
      rank: item.rank,
      budget: item.budget,
      score: item.score,
      isTarget,
    };
  });

  return (
    <div
      className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950 p-4 space-y-3.5 shadow-xl"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* الترويسة والتحكم بالمخطط */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-xl border border-rose-500/35 bg-rose-500/15 text-rose-300">
            <Shield className="h-4 w-4" />
          </div>
          <div>
            <h4 className="m-0 text-xs font-black text-white flex items-center gap-1.5">
              <span>{isAr ? 'الجاهزية العسكرية والقدرات الدفاعية' : 'Military Readiness & Defense'}</span>
            </h4>
            <span className="text-[10px] text-slate-400">
              {isAr ? 'تحليل القوة والتسليح ومؤشر Global Firepower' : 'Armed Forces Power Index & Firepower'}
            </span>
          </div>
        </div>

        {/* أزرار التبديل بين المخططات */}
        <div className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-950 p-0.5 text-[10px]">
          <button
            onClick={() => setChartView('budget_personnel')}
            className={`rounded px-2 py-0.5 font-bold transition ${
              chartView === 'budget_personnel' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            {isAr ? 'الميزانية والكوادر' : 'Budget vs Troops'}
          </button>
          <button
            onClick={() => setChartView('ranking')}
            className={`rounded px-2 py-0.5 font-bold transition ${
              chartView === 'ranking' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            {isAr ? 'التصنيف العالمي' : 'Global Ranking'}
          </button>
        </div>
      </div>

      {/* المؤشرات الرئيسية الثلاثة (الترتيب، الجاهزية، القوات) */}
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-2.5 text-center">
          <span className="text-[10px] font-bold text-slate-400 block mb-0.5">
            {isAr ? 'الترتيب العالمي' : 'Global Rank'}
          </span>
          <span className="font-mono text-base font-black text-amber-400">
            #{militaryData.globalRank}
          </span>
          <span className="block text-[9px] text-slate-500 font-medium">
            {isAr ? 'من 145 دولة' : 'of 145 nations'}
          </span>
        </div>

        <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-2.5 text-center">
          <span className="text-[10px] font-bold text-slate-400 block mb-0.5">
            {isAr ? 'مؤشر الجاهزية' : 'Readiness Score'}
          </span>
          <span className="font-mono text-base font-black text-emerald-400">
            {militaryData.readinessScore}%
          </span>
          <span className="block text-[9px] text-slate-500 font-medium">
            {isAr ? 'كفاءة قتالية' : 'Operational'}
          </span>
        </div>

        <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-2.5 text-center">
          <span className="text-[10px] font-bold text-slate-400 block mb-0.5">
            {isAr ? 'ميزانية الدفاع' : 'Defense Budget'}
          </span>
          <span className="font-mono text-base font-black text-sky-400">
            ${militaryData.budgetBn}B
          </span>
          <span className="block text-[9px] text-slate-500 font-medium">
            {isAr ? 'سنوياً' : 'Annual'}
          </span>
        </div>
      </div>

      {/* مخطط Recharts التفاعلي */}
      <div className="h-48 w-full rounded-xl border border-slate-800/80 bg-slate-950/70 p-2">
        {chartView === 'budget_personnel' ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={budgetPersonnelData} margin={{ top: 12, right: 12, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" opacity={0.6} />
              <XAxis dataKey="metric" tick={{ fill: '#94a3b8', fontSize: 10 }} axisLine={{ stroke: '#334155' }} />
              <YAxis tick={{ fill: '#64748b', fontSize: 9 }} axisLine={{ stroke: '#334155' }} />
              <Tooltip content={<ReadinessTooltip isAr={isAr} />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                {budgetPersonnelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={rankingComparisonData}
              layout="vertical"
              margin={{ top: 8, right: 20, left: 35, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" opacity={0.6} />
              <XAxis type="number" tick={{ fill: '#64748b', fontSize: 9 }} domain={[0, 100]} />
              <YAxis
                type="category"
                dataKey={isAr ? 'nameAr' : 'nameEn'}
                tick={{ fill: '#cbd5e1', fontSize: 9, fontWeight: 600 }}
                axisLine={{ stroke: '#334155' }}
              />
              <Tooltip content={<ReadinessTooltip isAr={isAr} />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
              <Bar dataKey="score" radius={[0, 6, 6, 0]}>
                {rankingComparisonData.map((entry, index) => (
                  <Cell
                    key={`rank-cell-${index}`}
                    fill={entry.isTarget ? '#f43f5e' : '#3b82f6'}
                    stroke={entry.isTarget ? '#fda4af' : undefined}
                    strokeWidth={entry.isTarget ? 1.5 : 0}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* الأفرع والتشكيلات العسكرية الرسمية */}
      <div className="space-y-1.5 pt-1 border-t border-slate-800/80">
        <span className="text-[10px] font-bold text-slate-400 block">
          {isAr ? 'أفرع القوات المسلحة وتشكيلات الدفاع الرئيسية:' : 'Key Military Branches & Commands:'}
        </span>
        <div className="flex flex-wrap gap-1.5">
          {(isAr ? militaryData.branchesAr : militaryData.branchesEn)?.map((branch, i) => (
            <span
              key={i}
              className="rounded-md border border-slate-800 bg-slate-950/70 px-2 py-0.5 text-[10px] font-medium text-slate-300"
            >
              {branch}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
