import { useState, useMemo } from 'react';
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
import {
  Shield,
  ShieldAlert,
  Users,
  Coins,
  Globe2,
  Award,
} from 'lucide-react';
import { ALLIANCES_DEEP_DATA } from '../data/alliancesDeepData.js';

function AllianceChartTooltip({ active, payload, isAr }) {
  if (!active || !payload || !payload.length) return null;
  const d = payload[0].payload;

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-950/95 p-3 shadow-2xl backdrop-blur text-xs" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="flex items-center gap-2 font-bold text-white mb-1.5 border-b border-slate-800 pb-1">
        <span className="text-base">{d.flag}</span>
        <span>{isAr ? d.nameAr : d.nameEn}</span>
      </div>
      <div className="space-y-1 text-[11px] text-slate-300">
        <div className="flex justify-between gap-4">
          <span className="text-slate-400">{isAr ? 'ميزانية الدفاع:' : 'Military Budget:'}</span>
          <span className="font-mono font-bold text-emerald-400">${d.budgetBn}B</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-slate-400">{isAr ? 'نسبة من الناتج المحلي:' : '% of GDP:'}</span>
          <span className="font-mono font-bold text-amber-400">{d.gdpSharePercent}%</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-slate-400">{isAr ? 'القوات النشطة:' : 'Active Troops:'}</span>
          <span className="font-mono font-bold text-sky-400">{d.troopsK?.toLocaleString()}k</span>
        </div>
      </div>
    </div>
  );
}

export default function AllianceAnalyticsSection({ lang = 'ar', onSelectCountry }) {
  const isAr = lang === 'ar';
  const [selectedBlocId, setSelectedBlocId] = useState('nato');
  const [chartMetric, setChartMetric] = useState('budget'); // 'budget' | 'troops' | 'gdpShare'

  const currentBloc = ALLIANCES_DEEP_DATA[selectedBlocId] || ALLIANCES_DEEP_DATA.nato;

  const chartData = useMemo(() => {
    return currentBloc.members.map((m) => ({
      ...m,
      chartValue:
        chartMetric === 'budget'
          ? m.budgetBn
          : chartMetric === 'troops'
          ? m.troopsK
          : m.gdpSharePercent,
    }));
  }, [currentBloc, chartMetric]);

  return (
    <div className="space-y-6" dir={isAr ? 'rtl' : 'ltr'}>
      {/* الترويسة القيادية لتحليل التحالفات */}
      <section className="nx-panel relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/40 p-5 sm:p-7 border-indigo-500/20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/35 bg-indigo-500/15 px-3 py-1 text-xs font-black text-indigo-300">
              <Shield className="h-3.5 w-3.5" />
              <span>{isAr ? 'تحليل معمق للأحلاف والتكتلات الجيوسياسية' : 'Deep Geopolitical Alliance Intelligence'}</span>
            </span>

            <h2 className="m-0 text-xl font-black text-white sm:text-2xl flex items-center gap-2.5">
              <span>{isAr ? 'مصفوفة التحالفات الدولية، الميزانيات، والأدوار الاستراتيجية' : 'Global Alliances, Defense Budgets & Member Roles'}</span>
            </h2>

            <p className="m-0 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isAr
                ? 'استعراض تفصيلي ومقارن لحلف الناتو، الاتحاد الأوروبي، بريكس بلس، ومجلس التعاون الخليجي، مع الشعارات الرسمية وميزانيات الدفاع وأدوار الدول الأعضاء ومعاهدات الدفاع المشترك.'
                : 'Interactive strategic breakdown of NATO, EU, BRICS+, and GCC with official emblems, defense budgets, troop strength, and member roles.'}
            </p>
          </div>

          {/* أزرار اختيار التحالف مع الشعارات */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 shrink-0">
            {Object.values(ALLIANCES_DEEP_DATA).map((bloc) => (
              <button
                key={bloc.id}
                onClick={() => setSelectedBlocId(bloc.id)}
                className={`flex items-center gap-2.5 rounded-2xl border p-2.5 sm:px-4 sm:py-3 transition ${
                  selectedBlocId === bloc.id
                    ? 'border-indigo-500 bg-indigo-950/60 shadow-lg shadow-indigo-500/25 ring-2 ring-indigo-500/40'
                    : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
                }`}
              >
                <img
                  src={bloc.logoSvg}
                  alt={bloc.nameEn}
                  className="h-7 w-7 rounded-full object-cover shrink-0 shadow"
                />
                <div className="text-start leading-tight">
                  <span className="block font-black text-xs text-white">{bloc.code}</span>
                  <span className="block text-[10px] text-slate-400 hidden sm:inline">
                    {bloc.memberCount} {isAr ? 'دولة' : 'members'}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* بطاقة معلومات التحالف المختار والشعار الرسمي ومؤشرات القوة */}
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950 p-5 space-y-5 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-2xl border-2 border-indigo-500/40 bg-slate-950 p-1.5 shadow-xl shrink-0 grid place-items-center">
              <img src={currentBloc.logoSvg} alt="" className="h-full w-full object-contain" />
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="rounded-full bg-indigo-500/20 border border-indigo-500/40 px-2.5 py-0.5 font-mono text-xs font-black text-indigo-300">
                  {currentBloc.code}
                </span>
                <span className="text-xs text-slate-400">
                  {isAr ? 'تأسس عام:' : 'Est:'} <b className="text-slate-200">{currentBloc.established}</b>
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-slate-400">
                  {isAr ? 'المقر:' : 'HQ:'} <b className="text-slate-200">{isAr ? currentBloc.headquartersAr : currentBloc.headquartersEn}</b>
                </span>
              </div>

              <h3 className="m-0 mt-1 text-lg sm:text-xl font-black text-white">
                {isAr ? currentBloc.nameAr : currentBloc.nameEn}
              </h3>
              <p className="m-0 text-xs text-indigo-300 font-semibold">
                {isAr ? currentBloc.treatyAr : currentBloc.treatyEn}
              </p>
            </div>
          </div>

          <div className="text-end">
            <span className="block text-[11px] font-bold text-slate-400">
              {isAr ? 'الأمين العام / القيادة:' : 'Leadership:'}
            </span>
            <span className="font-bold text-sm text-slate-100">
              {isAr ? currentBloc.secretaryGeneralAr : currentBloc.secretaryGeneralEn}
            </span>
          </div>
        </div>

        {/* المؤشرات الأربعة الكبرى للتحالف (الميزانية، الناتج، القوات، الترسانة) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3.5 space-y-1">
            <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
              <Shield className="h-4 w-4" />
              <span>{isAr ? 'ميزانية الدفاع المجمعة' : 'Combined Defense'}</span>
            </span>
            <span className="font-mono text-xl font-black text-white block">
              ${currentBloc.combinedMilitaryBudgetBn.toLocaleString()}B
            </span>
            <span className="text-[10px] text-slate-400 block">{isAr ? 'سنوياً' : 'Annually'}</span>
          </div>

          <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-3.5 space-y-1">
            <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
              <Coins className="h-4 w-4" />
              <span>{isAr ? 'الناتج المحلي المجمع' : 'Combined GDP'}</span>
            </span>
            <span className="font-mono text-xl font-black text-white block">
              ${(currentBloc.combinedGdpBn / 1000).toFixed(1)}T
            </span>
            <span className="text-[10px] text-slate-400 block">{isAr ? 'القيمة السوقية الكلية' : 'Total value'}</span>
          </div>

          <div className="rounded-xl border border-sky-500/30 bg-sky-950/20 p-3.5 space-y-1">
            <span className="text-xs font-bold text-sky-300 flex items-center gap-1.5">
              <Users className="h-4 w-4" />
              <span>{isAr ? 'إجمالي القوات النشطة' : 'Active Military Force'}</span>
            </span>
            <span className="font-mono text-xl font-black text-white block">
              {(currentBloc.totalActivePersonnelK / 1000).toFixed(2)}M
            </span>
            <span className="text-[10px] text-slate-400 block">{isAr ? 'مقاتل في الخدمة' : 'Active personnel'}</span>
          </div>

          <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-3.5 space-y-1">
            <span className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
              <ShieldAlert className="h-4 w-4" />
              <span>{isAr ? 'القوى النووية والردع' : 'Nuclear States'}</span>
            </span>
            <span className="font-mono text-xl font-black text-white block">
              {currentBloc.nuclearStatesCount} {isAr ? 'دول نووية' : 'Nuclear powers'}
            </span>
            <span className="text-[10px] text-slate-400 block">{isAr ? 'مظلة ردع استراتيجي' : 'Strategic deterrent'}</span>
          </div>
        </div>

        {/* بند الدفاع المشترك */}
        <div className="rounded-xl border border-indigo-500/30 bg-indigo-950/20 p-4 space-y-1.5">
          <span className="text-xs font-black text-indigo-300 flex items-center gap-1.5">
            <Award className="h-4 w-4" />
            <span>{isAr ? 'بند ومبدأ الدفاع الجماعي المشترك:' : 'Collective Defense Clause:'}</span>
          </span>
          <p className="m-0 text-xs sm:text-sm text-slate-200 leading-relaxed font-serif italic">
            "{isAr ? currentBloc.article5TextAr : currentBloc.article5TextEn}"
          </p>
        </div>

        {/* المخطط البياني التفاعلي Recharts لمقارنة مساهمات الدول */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h4 className="m-0 text-sm font-black text-white">
                {isAr ? 'المقارنة البيانية لمساهمات الدول الأعضاء (Recharts)' : 'Comparative Member Contributions (Recharts)'}
              </h4>
              <span className="text-[11px] text-slate-400">
                {isAr ? 'الميزانية العسكرية، حجم القوات، والنسبة المئوية من الناتج المحلي' : 'Military budget, active troops, and defense % of GDP'}
              </span>
            </div>

            <div className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 p-0.5 text-xs">
              <button
                onClick={() => setChartMetric('budget')}
                className={`rounded px-2.5 py-1 font-bold transition ${
                  chartMetric === 'budget' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isAr ? 'الميزانية ($B)' : 'Budget ($B)'}
              </button>
              <button
                onClick={() => setChartMetric('troops')}
                className={`rounded px-2.5 py-1 font-bold transition ${
                  chartMetric === 'troops' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isAr ? 'القوات (ألف)' : 'Troops (k)'}
              </button>
              <button
                onClick={() => setChartMetric('gdpShare')}
                className={`rounded px-2.5 py-1 font-bold transition ${
                  chartMetric === 'gdpShare' ? 'bg-amber-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isAr ? 'نسبة الناتج (%)' : '% of GDP'}
              </button>
            </div>
          </div>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 15, right: 15, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" opacity={0.6} />
                <XAxis
                  dataKey={isAr ? 'nameAr' : 'nameEn'}
                  tick={{ fill: '#cbd5e1', fontSize: 10, fontWeight: 600 }}
                  interval={0}
                  angle={-20}
                  textAnchor="end"
                  height={45}
                  axisLine={{ stroke: '#334155' }}
                />
                <YAxis tick={{ fill: '#64748b', fontSize: 10 }} axisLine={{ stroke: '#334155' }} />
                <Tooltip content={<AllianceChartTooltip isAr={isAr} />} />
                <Bar dataKey="chartValue" radius={[6, 6, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        chartMetric === 'budget'
                          ? '#10b981'
                          : chartMetric === 'troops'
                          ? '#38bdf8'
                          : '#f59e0b'
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* تفاصيل أدوار كل دولة في التحالف بالتفصيل الدقيق */}
        <div className="space-y-3">
          <h4 className="m-0 text-sm font-black text-white flex items-center gap-2">
            <Globe2 className="h-4 w-4 text-sky-400" />
            <span>{isAr ? 'الدور الجيوسياسي والعسكري المفصل لكل دولة عضو:' : 'Detailed Strategic Roles of Key Member States:'}</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentBloc.members.map((member) => (
              <div
                key={member.id}
                className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5 space-y-2 hover:border-indigo-500/40 transition"
              >
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{member.flag}</span>
                    <span className="font-black text-sm text-white">
                      {isAr ? member.nameAr : member.nameEn}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono font-bold">
                    <span className="text-emerald-400">${member.budgetBn}B</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-amber-400">{member.gdpSharePercent}% GDP</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <p className="m-0 text-xs text-slate-300 leading-relaxed flex-1">
                    <b className="text-indigo-400">{isAr ? 'الدور والمهام: ' : 'Strategic Role: '}</b>
                    {isAr ? member.roleAr : member.roleEn}
                  </p>
                  {onSelectCountry && (
                    <button
                      onClick={() => onSelectCountry({ id: member.id, name: isAr ? member.nameAr : member.nameEn })}
                      className="ms-3 shrink-0 rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-1 text-[11px] font-bold text-indigo-300 hover:bg-indigo-500/20 transition"
                    >
                      {isAr ? 'الملف الكامل' : 'Dossier'}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
