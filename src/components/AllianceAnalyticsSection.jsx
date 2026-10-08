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
import { GLOBAL_ALLIANCES_DB } from '../data/countryAlliancesDB.js';

function AllianceChartTooltip({ active, payload, isAr }) {
  if (!active || !payload || !payload.length) return null;
  const d = payload[0].payload;

  return (
    <div
      className="rounded-xl border border-slate-700 bg-slate-950/95 p-3 shadow-2xl backdrop-blur text-xs"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center gap-2 font-bold text-white mb-1.5 border-b border-slate-800 pb-1">
        <span className="text-base">{d.flag}</span>
        <span>{isAr ? d.nameAr : d.nameEn}</span>
      </div>
      <div className="space-y-1 text-[11px] text-slate-300">
        <div className="flex justify-between gap-4">
          <span className="text-slate-400">{isAr ? 'ميزانية الدفاع:' : 'Military Budget:'}</span>
          <span className="font-mono font-bold text-emerald-400">${d.budgetBn}B</span>
        </div>
        {d.troopsK !== undefined && (
          <div className="flex justify-between gap-4">
            <span className="text-slate-400">{isAr ? 'القوات النشطة:' : 'Active Troops:'}</span>
            <span className="font-mono font-bold text-sky-400">{d.troopsK?.toLocaleString()}k</span>
          </div>
        )}
        {d.gdpSharePercent !== undefined && (
          <div className="flex justify-between gap-4">
            <span className="text-slate-400">{isAr ? 'نسبة من الناتج المحلي:' : '% of GDP:'}</span>
            <span className="font-mono font-bold text-amber-400">{d.gdpSharePercent}%</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AllianceAnalyticsSection({ lang = 'ar', onSelectCountry }) {
  const isAr = lang === 'ar';
  const [selectedBlocId, setSelectedBlocId] = useState('nato');
  const [allianceTypeFilter, setAllianceTypeFilter] = useState('all'); // 'all' | 'military' | 'economic' | 'geostrategic'
  const [chartMetric, setChartMetric] = useState('budget'); // 'budget' | 'troops'

  // دمج بيانات التحالفات الشاملة (13 تحالف وتكتل رئيسي)
  const allBlocsList = useMemo(() => {
    return Object.entries(GLOBAL_ALLIANCES_DB).map(([id, bloc]) => {
      const deepInfo = ALLIANCES_DEEP_DATA[id] || {};
      return {
        ...bloc,
        id,
        logoSvg: deepInfo.logoSvg || null,
        members: bloc.members || deepInfo.members || [],
        combinedMilitaryBudgetBn: bloc.combinedMilitaryBudgetBn || deepInfo.combinedMilitaryBudgetBn || 100,
        combinedGdpBn: bloc.combinedGdpBn || deepInfo.combinedGdpBn || 2000,
        totalActivePersonnelK: bloc.totalActivePersonnelK || deepInfo.totalActivePersonnelK || 500,
        nuclearStatesCount: bloc.nuclearStatesCount ?? deepInfo.nuclearStatesCount ?? 0,
        memberCount: bloc.memberCount || bloc.members?.length || deepInfo.memberCount || 5,
        collectiveDefenseClauseAr:
          bloc.collectiveDefenseClauseAr || deepInfo.article5TextAr || 'ميثاق التعاون المشترك والتنسيق الاستراتيجي.',
        collectiveDefenseClauseEn:
          bloc.collectiveDefenseClauseEn || deepInfo.article5TextEn || 'Mutual cooperation and security coordination agreement.',
      };
    });
  }, []);

  // تصفية حسب نوع التحالف
  const filteredBlocs = useMemo(() => {
    if (allianceTypeFilter === 'all') return allBlocsList;
    if (allianceTypeFilter === 'military') {
      return allBlocsList.filter((b) => b.type === 'military');
    }
    if (allianceTypeFilter === 'economic') {
      return allBlocsList.filter((b) => b.type === 'economic' || b.type === 'geoeconomic');
    }
    return allBlocsList;
  }, [allBlocsList, allianceTypeFilter]);

  // التحالف المختار حالياً
  const currentBloc = useMemo(() => {
    return allBlocsList.find((b) => b.id === selectedBlocId) || allBlocsList[0];
  }, [allBlocsList, selectedBlocId]);

  // إعداد بيانات المخطط البياني Recharts
  const chartData = useMemo(() => {
    if (!currentBloc?.members) return [];
    return currentBloc.members.map((m) => ({
      ...m,
      chartValue: chartMetric === 'budget' ? m.budgetBn || 10 : m.troopsK || 50,
    }));
  }, [currentBloc, chartMetric]);

  return (
    <div className="space-y-6" dir={isAr ? 'rtl' : 'ltr'}>
      {/* الترويسة القيادية لتحليل التحالفات */}
      <section className="nx-panel relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/40 p-5 sm:p-7 border-indigo-500/20">
        <div className="pointer-events-none absolute -end-24 -top-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/35 bg-indigo-500/15 px-3 py-1 text-xs font-black text-indigo-300">
              <Shield className="h-3.5 w-3.5" />
              <span>{isAr ? 'مصفوفة التحالفات والأحلاف الجيوسياسية الكبرى (13 تحالف وتكتل)' : 'Global Alliances, Defense Pacts & Economic Blocs Matrix'}</span>
            </span>

            <h2 className="m-0 text-xl font-black text-white sm:text-2xl lg:text-3xl flex items-center gap-2.5">
              <span>{isAr ? 'خريطة التحالفات العسكرية والتكتلات الاقتصادية العالمية' : 'Global Military Alliances & Sovereign Economic Coalitions'}</span>
            </h2>

            <p className="m-0 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isAr
                ? 'استعراض تفصيلي ومقارن لأهم التحالفات العسكرية (الناتو، أوكوس، شنغهاي، معاهدة الأمن الجماعي) والتكتلات الاقتصادية (بريكس بلس، الاتحاد الأوروبي، مجلس التعاون الخليجي، السبع الكبار، أوبك بلس) مع ميزانيات الدفاع، القوات، وبنود الدفاع المشترك.'
                : 'Detailed comparative intelligence across major defense pacts (NATO, AUKUS, SCO, CSTO) and geoeconomic blocs (BRICS+, EU, GCC, G7, OPEC+, Quad) including military budgets, troop levels, and mutual defense clauses.'}
            </p>
          </div>

          {/* فلاتر نوع التحالف */}
          <div className="flex flex-col gap-2 shrink-0">
            <div className="flex items-center gap-1 rounded-xl border border-slate-800 bg-slate-900/90 p-1 text-xs">
              <button
                onClick={() => setAllianceTypeFilter('all')}
                className={`rounded-lg px-2.5 py-1.5 font-bold transition ${
                  allianceTypeFilter === 'all'
                    ? 'bg-indigo-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isAr ? 'كافة التحالفات (13)' : 'All Blocs (13)'}
              </button>
              <button
                onClick={() => setAllianceTypeFilter('military')}
                className={`rounded-lg px-2.5 py-1.5 font-bold transition ${
                  allianceTypeFilter === 'military'
                    ? 'bg-indigo-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isAr ? 'عسكرية ودفاعية' : 'Military'}
              </button>
              <button
                onClick={() => setAllianceTypeFilter('economic')}
                className={`rounded-lg px-2.5 py-1.5 font-bold transition ${
                  allianceTypeFilter === 'economic'
                    ? 'bg-indigo-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isAr ? 'اقتصادية وتجارية' : 'Economic'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* شريط أزرار اختيار التحالفات مع الشعارات والرموز */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 shadow-lg">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {filteredBlocs.map((bloc) => {
            const isSelected = selectedBlocId === bloc.id;
            return (
              <button
                key={bloc.id}
                onClick={() => setSelectedBlocId(bloc.id)}
                className={`flex shrink-0 items-center gap-2.5 rounded-xl border p-2 sm:px-3 sm:py-2 transition ${
                  isSelected
                    ? 'border-indigo-500 bg-indigo-950/70 shadow-md ring-2 ring-indigo-500/40 text-white'
                    : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                {bloc.logoSvg ? (
                  <img
                    src={bloc.logoSvg}
                    alt=""
                    className="h-6 w-6 rounded-full object-cover shrink-0 shadow"
                  />
                ) : (
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-slate-800 font-mono text-[10px] font-black text-indigo-300 shrink-0">
                    {bloc.code?.slice(0, 2) || 'AL'}
                  </span>
                )}
                <div className="text-start leading-tight">
                  <span className="block font-black text-xs">{bloc.code || bloc.nameEn}</span>
                  <span className="block text-[10px] text-slate-400">
                    {bloc.memberCount} {isAr ? 'دولة' : 'nations'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* بطاقة معلومات التحالف المختار والشعار الرسمي ومؤشرات القوة */}
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950 p-5 space-y-5 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-2xl border-2 border-indigo-500/40 bg-slate-950 p-1.5 shadow-xl shrink-0 grid place-items-center">
              {currentBloc.logoSvg ? (
                <img src={currentBloc.logoSvg} alt="" className="h-full w-full object-contain" />
              ) : (
                <Shield className="h-8 w-8 text-indigo-400" />
              )}
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="rounded-full bg-indigo-500/20 border border-indigo-500/40 px-2.5 py-0.5 font-mono text-xs font-black text-indigo-300">
                  {currentBloc.code}
                </span>
                <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-slate-300">
                  {isAr ? currentBloc.typeLabelAr : currentBloc.typeLabelEn}
                </span>
                <span className="text-xs text-slate-400">
                  {isAr ? 'تأسس عام:' : 'Est:'} <b className="text-slate-200">{currentBloc.established}</b>
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-slate-400">
                  {isAr ? 'المقر:' : 'HQ:'}{' '}
                  <b className="text-slate-200">
                    {isAr ? currentBloc.headquartersAr : currentBloc.headquartersEn}
                  </b>
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

          <div className="text-start md:text-end">
            <span className="block text-[11px] font-bold text-slate-400">
              {isAr ? 'الأمانة العامة / القيادة:' : 'Leadership:'}
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
              ${currentBloc.combinedMilitaryBudgetBn?.toLocaleString()}B
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
            <span>{isAr ? 'بند ومبدأ الدفاع الجماعي أو ميثاق التعاون المشترك:' : 'Collective Defense & Mutual Charter Clause:'}</span>
          </span>
          <p className="m-0 text-xs sm:text-sm text-slate-200 leading-relaxed font-serif italic">
            "{isAr ? currentBloc.collectiveDefenseClauseAr : currentBloc.collectiveDefenseClauseEn}"
          </p>
        </div>

        {/* المخطط البياني التفاعلي Recharts لمقارنة مساهمات الدول */}
        {chartData.length > 0 && (
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="m-0 text-sm font-black text-white">
                  {isAr ? 'المقارنة البيانية لمساهمات الدول الأعضاء (Recharts)' : 'Comparative Member Contributions (Recharts)'}
                </h4>
                <span className="text-[11px] text-slate-400">
                  {isAr ? 'الميزانية العسكرية وحجم القوات لكل دولة في التحالف' : 'Military budget and active troops per member nation'}
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
                        fill={chartMetric === 'budget' ? '#10b981' : '#38bdf8'}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* تفاصيل أدوار كل دولة في التحالف مع الأيقونات والأعلام */}
        <div className="space-y-3">
          <h4 className="m-0 text-sm font-black text-white flex items-center gap-2">
            <Globe2 className="h-4 w-4 text-sky-400" />
            <span>{isAr ? 'الدور الجيوسياسي والعسكري المفصل لكل دولة عضو في التحالف:' : 'Detailed Strategic Roles of Member States:'}</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentBloc.members?.map((member) => (
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
                    {member.budgetBn !== undefined && (
                      <span className="text-emerald-400">${member.budgetBn}B</span>
                    )}
                    {member.troopsK !== undefined && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span className="text-sky-400">{member.troopsK}k {isAr ? 'جندي' : 'troops'}</span>
                      </>
                    )}
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
