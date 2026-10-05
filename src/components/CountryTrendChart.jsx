import { useMemo, useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { Users, DollarSign, BarChart3, LineChart, X } from 'lucide-react';
import { getCountryTrendSeries } from '../utils/economicTrends';
import { CountryFlag } from './CountrySymbols';

function CustomTooltip({ active, payload, _label, mode, isAr, country }) {
  if (!active || !payload || !payload.length) return null;
  const data = payload[0].payload;

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-950/95 p-3 shadow-2xl backdrop-blur min-w-[180px]" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5 mb-2">
        <span className="text-xs font-black text-white">{data.year}</span>
        <span className="text-[10px] font-bold text-sky-400">
          {data.year === 2026 ? (isAr ? 'العام الحالي' : 'Current') : data.year > 2026 ? (isAr ? 'توقعات' : 'Projected') : (isAr ? 'تاريخي' : 'Historical')}
        </span>
      </div>

      {mode === 'gdp' ? (
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-3 text-xs">
            <span className="text-slate-400">{isAr ? 'الناتج المحلي:' : 'GDP:'}</span>
            <span className="font-black text-emerald-400">{data.gdpDisplay}</span>
          </div>
          <div className="flex items-center justify-between gap-3 text-xs">
            <span className="text-slate-400">{isAr ? 'النمو السنوي:' : 'Annual Growth:'}</span>
            <span className={`font-bold ${data.gdpGrowth >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              {data.gdpGrowth >= 0 ? `+${data.gdpGrowth}%` : `${data.gdpGrowth}%`}
            </span>
          </div>
          <div className="flex items-center justify-between gap-3 text-[10px] pt-1 text-slate-500 border-t border-slate-800/80">
            <span>{isAr ? 'نصيب الفرد:' : 'Per capita:'}</span>
            <span className="text-slate-300 font-semibold">${data.gdpPerCapita?.toLocaleString()}</span>
          </div>
        </div>
      ) : (
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-3 text-xs">
            <span className="text-slate-400">{isAr ? 'عدد السكان:' : 'Population:'}</span>
            <span className="font-black text-sky-400">{data.popDisplay}</span>
          </div>
          <div className="flex items-center justify-between gap-3 text-[10px] pt-1 text-slate-500 border-t border-slate-800/80">
            <span>{isAr ? 'التصنيف:' : 'Category:'}</span>
            <span className="text-slate-300 font-semibold">{country?.regionLabel || (isAr ? 'دولي' : 'Global')}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CountryTrendChart({ country, lang = 'ar', onClose = null, compact = false }) {
  const isAr = lang === 'ar';
  const [metric, setMetric] = useState('gdp'); // 'gdp' | 'pop'
  const [chartType, setChartType] = useState('area'); // 'area' | 'bar'

  const series = useMemo(() => {
    if (!country) return [];
    return getCountryTrendSeries(country);
  }, [country]);

  if (!country || !series.length) return null;

  const current2026 = series.find((s) => s.year === 2026) || series[series.length - 1];
  const first2018 = series[0];
  const totalGdpChange = (((current2026.gdp - first2018.gdp) / first2018.gdp) * 100).toFixed(1);
  const totalPopChange = (((current2026.pop - first2018.pop) / first2018.pop) * 100).toFixed(1);

  return (
    <div className={`nx-panel relative flex flex-col overflow-hidden bg-slate-950/95 border border-slate-800 shadow-2xl backdrop-blur ${compact ? 'p-3' : 'p-4 sm:p-5'}`} dir={isAr ? 'rtl' : 'ltr'}>
      {/* الترويسة وأزرار التحكم */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/90 pb-3 mb-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="h-8 w-11 overflow-hidden rounded border border-slate-700 bg-slate-900 shadow-sm shrink-0">
            <CountryFlag country={country} className="h-full w-full object-cover" />
          </div>
          <div className="min-w-0">
            <h3 className="m-0 truncate text-sm font-black text-white flex items-center gap-1.5">
              <span>{country.name}</span>
              <span className="text-[10px] font-bold text-sky-400 border border-sky-500/30 px-1.5 py-0.2 rounded bg-sky-500/10">
                {isAr ? 'مؤشرات Recharts' : 'Recharts Telemetry'}
              </span>
            </h3>
            <p className="m-0 text-[10px] text-slate-400">
              {metric === 'gdp'
                ? (isAr ? 'مسار نمو الناتج المحلي الإجمالي (2018 - 2027)' : 'GDP Growth Timeline (2018 - 2027)')
                : (isAr ? 'الاتجاهات الديموغرافية والنمو السكاني (2018 - 2027)' : 'Demographic & Population Trends (2018 - 2027)')}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {/* تبديل المقياس (GDP vs Population) */}
          <div className="flex items-center rounded-lg border border-slate-800 bg-slate-900 p-0.5">
            <button
              onClick={() => setMetric('gdp')}
              className={`flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-bold transition ${
                metric === 'gdp'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <DollarSign className="h-3 w-3" />
              {isAr ? 'الناتج المحلي' : 'GDP'}
            </button>
            <button
              onClick={() => setMetric('pop')}
              className={`flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-bold transition ${
                metric === 'pop'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Users className="h-3 w-3" />
              {isAr ? 'السكان' : 'Population'}
            </button>
          </div>

          {/* تبديل نوع الرسم (مساحة / أعمدة) */}
          <div className="hidden sm:flex items-center rounded-lg border border-slate-800 bg-slate-900 p-0.5">
            <button
              onClick={() => setChartType('area')}
              title={isAr ? 'مخطط مساحي' : 'Area chart'}
              className={`rounded p-1 text-xs transition ${
                chartType === 'area' ? 'bg-slate-700 text-white' : 'text-slate-500 hover:text-white'
              }`}
            >
              <LineChart className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setChartType('bar')}
              title={isAr ? 'مخطط أعمدة' : 'Bar chart'}
              className={`rounded p-1 text-xs transition ${
                chartType === 'bar' ? 'bg-slate-700 text-white' : 'text-slate-500 hover:text-white'
              }`}
            >
              <BarChart3 className="h-3.5 w-3.5" />
            </button>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              aria-label={isAr ? 'إغلاق المخطط' : 'Close chart'}
              className="grid h-7 w-7 place-items-center rounded-lg border border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white transition"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* شريط الإحصائيات السريعة */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
        {metric === 'gdp' ? (
          <>
            <div className="rounded-lg border border-slate-800/80 bg-slate-900/60 px-3 py-2">
              <span className="block text-[10px] text-slate-400">{isAr ? 'الناتج الاسمي (2026)' : 'Nominal GDP (2026)'}</span>
              <span className="text-sm font-black text-emerald-400">{current2026.gdpDisplay}</span>
            </div>
            <div className="rounded-lg border border-slate-800/80 bg-slate-900/60 px-3 py-2">
              <span className="block text-[10px] text-slate-400">{isAr ? 'معدل النمو المتوقع' : 'Projected Growth'}</span>
              <span className="text-sm font-black text-emerald-300">+{current2026.gdpGrowth}%</span>
            </div>
            <div className="col-span-2 sm:col-span-1 rounded-lg border border-slate-800/80 bg-slate-900/60 px-3 py-2">
              <span className="block text-[10px] text-slate-400">{isAr ? 'النمو التراكمي منذ 2018' : 'Growth since 2018'}</span>
              <span className="text-sm font-black text-sky-400">+{totalGdpChange}%</span>
            </div>
          </>
        ) : (
          <>
            <div className="rounded-lg border border-slate-800/80 bg-slate-900/60 px-3 py-2">
              <span className="block text-[10px] text-slate-400">{isAr ? 'التعداد السكاني (2026)' : 'Population (2026)'}</span>
              <span className="text-sm font-black text-sky-400">{current2026.popDisplay}</span>
            </div>
            <div className="rounded-lg border border-slate-800/80 bg-slate-900/60 px-3 py-2">
              <span className="block text-[10px] text-slate-400">{isAr ? 'نصيب الفرد من الناتج' : 'GDP Per Capita'}</span>
              <span className="text-sm font-black text-amber-300">${current2026.gdpPerCapita?.toLocaleString()}</span>
            </div>
            <div className="col-span-2 sm:col-span-1 rounded-lg border border-slate-800/80 bg-slate-900/60 px-3 py-2">
              <span className="block text-[10px] text-slate-400">{isAr ? 'الزيادة السكانية منذ 2018' : 'Growth since 2018'}</span>
              <span className="text-sm font-black text-emerald-400">+{totalPopChange}%</span>
            </div>
          </>
        )}
      </div>

      {/* مساحة رسم Recharts التفاعلي */}
      <div className={`w-full ${compact ? 'h-[190px]' : 'h-[240px] sm:h-[280px]'}`}>
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'area' ? (
            <AreaChart data={series} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
              <defs>
                <linearGradient id="gdpGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.45} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="popGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0284c7" stopOpacity={0.45} />
                  <stop offset="95%" stopColor="#0284c7" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" opacity={0.6} />
              <XAxis dataKey="year" stroke="#64748b" tick={{ fontSize: 10 }} />
              <YAxis stroke="#64748b" tick={{ fontSize: 10 }} />
              <Tooltip content={<CustomTooltip mode={metric} isAr={isAr} country={country} />} />
              {metric === 'gdp' ? (
                <Area
                  type="monotone"
                  dataKey="gdp"
                  stroke="#10b981"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#gdpGrad)"
                  activeDot={{ r: 5, stroke: '#ffffff', strokeWidth: 2, fill: '#10b981' }}
                />
              ) : (
                <Area
                  type="monotone"
                  dataKey="pop"
                  stroke="#38bdf8"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#popGrad)"
                  activeDot={{ r: 5, stroke: '#ffffff', strokeWidth: 2, fill: '#38bdf8' }}
                />
              )}
            </AreaChart>
          ) : (
            <BarChart data={series} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" opacity={0.6} />
              <XAxis dataKey="year" stroke="#64748b" tick={{ fontSize: 10 }} />
              <YAxis stroke="#64748b" tick={{ fontSize: 10 }} />
              <Tooltip content={<CustomTooltip mode={metric} isAr={isAr} country={country} />} />
              {metric === 'gdp' ? (
                <Bar dataKey="gdp" fill="#10b981" radius={[4, 4, 0, 0]} />
              ) : (
                <Bar dataKey="pop" fill="#38bdf8" radius={[4, 4, 0, 0]} />
              )}
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
