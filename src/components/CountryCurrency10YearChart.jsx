import { useState, useMemo } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import {
  TrendingUp,
  TrendingDown,
  Activity,
  Calendar,
  Lock,
  Unlock,
  Building,
  Info,
  ArrowUpDown,
  BarChart3,
  LineChart as LineChartIcon,
} from 'lucide-react';
import { getCountry10YearCurrencyHistory } from '../data/currency10YearHistoryDB';

function CurrencyTooltip({ active, payload, isAr, currencyCode }) {
  if (!active || !payload || !payload.length) return null;
  const d = payload[0].payload;

  return (
    <div
      className="min-w-[240px] max-w-[300px] rounded-2xl border border-emerald-500/40 bg-slate-950/95 p-3.5 shadow-2xl backdrop-blur text-xs"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2 mb-2">
        <div className="flex items-center gap-1.5 font-black text-white text-sm">
          <Calendar className="h-4 w-4 text-emerald-400" />
          <span>{isAr ? `سنة ${d.year}` : `Year ${d.year}`}</span>
        </div>
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-mono font-bold ${
            d.changeFromPrev >= 0
              ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
              : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
          }`}
        >
          {d.changeFromPrev !== null
            ? `${d.changeFromPrev > 0 ? '+' : ''}${d.changeFromPrev}%`
            : isAr
            ? 'سنة الأساس'
            : 'Base Year'}
        </span>
      </div>

      <div className="space-y-1.5 text-slate-200">
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-slate-400 text-[11px]">
            {isAr ? 'سعر الصرف (1 دولار):' : 'Exchange Rate (1 USD):'}
          </span>
          <span className="font-mono font-black text-base text-emerald-400">
            {typeof d.rate === 'number' ? d.rate.toLocaleString() : d.rate}{' '}
            <span className="text-xs font-normal text-slate-400">{currencyCode}</span>
          </span>
        </div>

        {d.inverseRate && (
          <div className="flex items-center justify-between gap-3 text-[11px] text-slate-400">
            <span>{isAr ? 'قيمة 1 وحدة بالدولار:' : '1 Unit in USD:'}</span>
            <span className="font-mono text-slate-300 font-semibold">${d.inverseRate}</span>
          </div>
        )}

        <div className="rounded-xl border border-slate-800/80 bg-slate-900/80 p-2 mt-2 text-[11px] leading-relaxed text-slate-300">
          <div className="flex items-center gap-1 text-[10px] font-bold text-amber-400 mb-0.5">
            <Info className="h-3 w-3" />
            <span>{isAr ? 'المحطة النقدية المفصلية:' : 'Monetary Event:'}</span>
          </div>
          <p className="m-0 text-[11px] text-slate-200">{isAr ? d.noteAr : d.noteEn}</p>
        </div>
      </div>
    </div>
  );
}

export default function CountryCurrency10YearChart({
  country,
  lang = 'ar',
  compact = false,
  className = '',
}) {
  const isAr = lang === 'ar';
  const [chartType, setChartType] = useState('area'); // 'area' | 'bar'
  const [timeRange, setTimeRange] = useState('10y'); // '10y' | '5y' | '3y'
  const [invertRate, setInvertRate] = useState(false);
  const [selectedYearNote, setSelectedYearNote] = useState(null);

  const countryId = country?.id;
  const currencyData = useMemo(() => {
    return getCountry10YearCurrencyHistory(countryId);
  }, [countryId]);

  // تجهيز سلسلة البيانات للرسم البياني مع حساب نسب التغير السنوية
  const chartData = useMemo(() => {
    if (!currencyData?.history) return [];

    let historyList = [...currencyData.history];
    if (timeRange === '5y') {
      historyList = historyList.filter((item) => item.year >= 2021);
    } else if (timeRange === '3y') {
      historyList = historyList.filter((item) => item.year >= 2023);
    }

    return historyList.map((item, index) => {
      const prevItem = index > 0 ? historyList[index - 1] : null;
      let changeFromPrev = null;
      if (prevItem && prevItem.rate > 0) {
        changeFromPrev = parseFloat((((item.rate - prevItem.rate) / prevItem.rate) * 100).toFixed(1));
      }

      const inv = item.rate > 0 ? parseFloat((1 / item.rate).toFixed(4)) : 0;
      const displayValue = invertRate ? inv : item.rate;

      return {
        ...item,
        displayValue,
        inverseRate: inv,
        changeFromPrev,
      };
    });
  }, [currencyData, timeRange, invertRate]);

  if (!currencyData) return null;

  const currentYearItem = chartData.find((d) => d.year === 2026) || chartData[chartData.length - 1];
  const activeNote = selectedYearNote || currentYearItem;

  const isPegged = currencyData.pegType === 'hard_peg';
  const isHighVolatility = currencyData.tenYearChangePercent > 50;

  return (
    <div
      className={`rounded-2xl border border-slate-800 bg-slate-950/95 shadow-2xl backdrop-blur transition-all ${
        compact ? 'p-3.5 sm:p-4' : 'p-5 sm:p-6'
      } ${className}`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* 1. الترويسة العلوية والمؤشرات السيادية */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/90 pb-4 mb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="grid h-8 w-8 place-items-center rounded-xl border border-emerald-500/40 bg-emerald-500/15 font-mono text-sm font-black text-emerald-400">
              {currencyData.currencySymbol || '¤'}
            </span>
            <h4 className="m-0 text-base font-black text-white sm:text-lg flex items-center gap-2">
              <span>{isAr ? currencyData.currencyNameAr : currencyData.currencyNameEn}</span>
              <span className="rounded-lg border border-slate-700 bg-slate-900 px-2 py-0.5 font-mono text-xs font-bold text-sky-400">
                {currencyData.currencyCode}
              </span>
            </h4>

            {/* شارة نظام التثبيت */}
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                isPegged
                  ? 'border border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                  : isHighVolatility
                  ? 'border border-rose-500/40 bg-rose-500/10 text-rose-300'
                  : 'border border-sky-500/40 bg-sky-500/10 text-sky-300'
              }`}
            >
              {isPegged ? <Lock className="h-3 w-3" /> : <Unlock className="h-3 w-3" />}
              <span>
                {isPegged
                  ? isAr
                    ? 'تثبيت رسمي صارم بالدولار'
                    : 'Hard Dollar Peg'
                  : isHighVolatility
                  ? isAr
                    ? 'تقلب سعري حاد'
                    : 'High Volatility'
                  : isAr
                  ? 'تعويم مدار مرن'
                  : 'Managed Flexible Float'}
              </span>
            </span>
          </div>

          <p className="m-0 text-xs text-slate-400 leading-relaxed">
            {isAr ? currencyData.regimeAr : currencyData.regimeEn}
          </p>
        </div>

        {/* أزرار التحكم بالمخطط والنطاق الزمني */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto flex-wrap">
          {/* نطاق السنوات */}
          <div className="inline-flex rounded-xl border border-slate-800 bg-slate-900 p-0.5 text-xs">
            <button
              onClick={() => setTimeRange('10y')}
              className={`rounded-lg px-2.5 py-1 font-bold transition ${
                timeRange === '10y'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isAr ? '10 سنوات' : '10 Yrs'}
            </button>
            <button
              onClick={() => setTimeRange('5y')}
              className={`rounded-lg px-2.5 py-1 font-bold transition ${
                timeRange === '5y'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isAr ? '5 سنوات' : '5 Yrs'}
            </button>
            <button
              onClick={() => setTimeRange('3y')}
              className={`rounded-lg px-2.5 py-1 font-bold transition ${
                timeRange === '3y'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isAr ? '3 سنوات' : '3 Yrs'}
            </button>
          </div>

          {/* نوع المخطط (مساحي / أعمدة) */}
          <div className="inline-flex rounded-xl border border-slate-800 bg-slate-900 p-0.5 text-xs">
            <button
              onClick={() => setChartType('area')}
              title={isAr ? 'مخطط مساحي انسيابي' : 'Area Chart'}
              className={`rounded-lg p-1.5 transition ${
                chartType === 'area' ? 'bg-slate-800 text-emerald-400' : 'text-slate-400 hover:text-white'
              }`}
            >
              <LineChartIcon className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setChartType('bar')}
              title={isAr ? 'مخطط أعمدة بيانية' : 'Bar Chart'}
              className={`rounded-lg p-1.5 transition ${
                chartType === 'bar' ? 'bg-slate-800 text-emerald-400' : 'text-slate-400 hover:text-white'
              }`}
            >
              <BarChart3 className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* عكس العملة (1 دولار = X أو 1 عملة = $X) */}
          <button
            onClick={() => setInvertRate(!invertRate)}
            title={isAr ? 'عكس مقياس القوة الشرائية' : 'Invert Currency Parity'}
            className={`rounded-xl border border-slate-800 bg-slate-900 p-1.5 text-xs transition ${
              invertRate ? 'border-sky-500/50 bg-sky-500/20 text-sky-300' : 'text-slate-400 hover:text-white'
            }`}
          >
            <ArrowUpDown className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* 2. بطاقات الإحصاءات الأربع الرئيسية */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 mb-4">
        {/* السعر الحالي 2026 */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-2.5 sm:p-3">
          <span className="block text-[11px] font-semibold text-slate-400">
            {isAr ? 'سعر الصرف (2026)' : 'Current Rate (2026)'}
          </span>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="font-mono text-base font-black text-emerald-400 sm:text-lg">
              {currencyData.currentRate.toLocaleString()}
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              {currencyData.currencyCode}
            </span>
          </div>
          <span className="text-[9px] text-slate-500 block mt-0.5">
            {isAr ? 'لكل 1 دولار أمريكي' : 'per 1 USD'}
          </span>
        </div>

        {/* أعلى سعر في 10 سنوات */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-2.5 sm:p-3">
          <span className="block text-[11px] font-semibold text-slate-400">
            {isAr ? 'أعلى سعر (10 سنوات)' : '10-Yr High Rate'}
          </span>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="font-mono text-base font-black text-amber-400 sm:text-lg">
              {currencyData.tenYearHigh?.toLocaleString()}
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              {currencyData.currencyCode}
            </span>
          </div>
          <span className="text-[9px] text-amber-500/80 block mt-0.5">
            {isAr ? 'أقصى انخفاض للعملة' : 'Weakest local currency point'}
          </span>
        </div>

        {/* أدنى سعر في 10 سنوات */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-2.5 sm:p-3">
          <span className="block text-[11px] font-semibold text-slate-400">
            {isAr ? 'أدنى سعر (10 سنوات)' : '10-Yr Low Rate'}
          </span>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="font-mono text-base font-black text-sky-400 sm:text-lg">
              {currencyData.tenYearLow?.toLocaleString()}
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              {currencyData.currencyCode}
            </span>
          </div>
          <span className="text-[9px] text-sky-500/80 block mt-0.5">
            {isAr ? 'أقوى قيمة تاريخية للعملة' : 'Strongest local valuation'}
          </span>
        </div>

        {/* نسبة التقلب الصافي خلال 10 سنوات */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-2.5 sm:p-3">
          <span className="block text-[11px] font-semibold text-slate-400">
            {isAr ? 'نسبة تغير السعر (10 سنوات)' : '10-Yr Net Volatility'}
          </span>
          <div className="mt-1 flex items-center gap-1.5">
            <span
              className={`font-mono text-base font-black sm:text-lg ${
                currencyData.tenYearChangePercent === 0
                  ? 'text-emerald-400'
                  : currencyData.tenYearChangePercent > 50
                  ? 'text-rose-400'
                  : 'text-amber-400'
              }`}
            >
              {currencyData.tenYearChangePercent === 0
                ? '0.0%'
                : `+${currencyData.tenYearChangePercent}%`}
            </span>
            {currencyData.tenYearChangePercent > 0 ? (
              <TrendingDown className="h-3.5 w-3.5 text-rose-400" />
            ) : (
              <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
            )}
          </div>
          <span className="text-[9px] text-slate-500 block mt-0.5">
            {currencyData.tenYearChangePercent === 0
              ? isAr
                ? 'استقرار نقدي تام 100%'
                : '100% Stability Benchmark'
              : isAr
              ? 'تغير سعر الدولار الإجمالي'
              : 'Cumulative USD Gain'}
          </span>
        </div>
      </div>

      {/* 3. حاوية الرسم البياني التفاعلي Recharts */}
      <div className="relative h-64 sm:h-72 w-full pt-2">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'area' ? (
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
              <defs>
                <linearGradient id="currencyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={isHighVolatility ? '#f43f5e' : isPegged ? '#10b981' : '#0ea5e9'}
                    stopOpacity={0.4}
                  />
                  <stop
                    offset="95%"
                    stopColor={isHighVolatility ? '#f43f5e' : isPegged ? '#10b981' : '#0ea5e9'}
                    stopOpacity={0.0}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis
                dataKey="year"
                stroke="#64748b"
                tick={{ fill: '#94a3b8', fontSize: 11, fontFamily: 'monospace' }}
                tickLine={false}
              />
              <YAxis
                stroke="#64748b"
                tick={{ fill: '#94a3b8', fontSize: 10, fontFamily: 'monospace' }}
                tickLine={false}
                domain={['dataMin - 5%', 'dataMax + 5%']}
                tickFormatter={(val) => (val >= 1000 ? `${(val / 1000).toFixed(0)}k` : val)}
              />
              <Tooltip
                content={
                  <CurrencyTooltip
                    isAr={isAr}
                    currencyCode={currencyData.currencyCode}
                  />
                }
              />
              <Area
                type="monotone"
                dataKey="displayValue"
                stroke={isHighVolatility ? '#f43f5e' : isPegged ? '#10b981' : '#0ea5e9'}
                strokeWidth={2.5}
                fillOpacity={1}
                fill="url(#currencyGradient)"
                activeDot={{
                  r: 6,
                  fill: '#ffffff',
                  stroke: isHighVolatility ? '#f43f5e' : isPegged ? '#10b981' : '#0ea5e9',
                  strokeWidth: 2,
                }}
              />
            </AreaChart>
          ) : (
            <BarChart data={chartData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis
                dataKey="year"
                stroke="#64748b"
                tick={{ fill: '#94a3b8', fontSize: 11, fontFamily: 'monospace' }}
                tickLine={false}
              />
              <YAxis
                stroke="#64748b"
                tick={{ fill: '#94a3b8', fontSize: 10, fontFamily: 'monospace' }}
                tickLine={false}
                tickFormatter={(val) => (val >= 1000 ? `${(val / 1000).toFixed(0)}k` : val)}
              />
              <Tooltip
                content={
                  <CurrencyTooltip
                    isAr={isAr}
                    currencyCode={currencyData.currencyCode}
                  />
                }
              />
              <Bar
                dataKey="displayValue"
                fill={isHighVolatility ? '#f43f5e' : isPegged ? '#10b981' : '#0ea5e9'}
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* 4. شريط السنوات التفاعلي للاستكشاف الزمني السريع (2016 - 2026) */}
      <div className="mt-4 pt-3 border-t border-slate-800/80">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
            <Activity className="h-3.5 w-3.5 text-emerald-400" />
            <span>{isAr ? 'استعراض المحطات النقدية السنوية (انقر على السنة):' : 'Explore Annual Monetary Milestones (Click Year):'}</span>
          </span>
          <span className="text-[10px] text-slate-500 font-mono">2016 → 2026</span>
        </div>

        <div className="flex gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-slate-800">
          {currencyData.history.map((h) => {
            const isSelected = activeNote?.year === h.year;
            return (
              <button
                key={h.year}
                onClick={() => setSelectedYearNote(h)}
                className={`flex shrink-0 flex-col items-center rounded-xl px-2.5 py-1.5 transition border ${
                  isSelected
                    ? 'border-emerald-500/60 bg-emerald-500/20 text-white shadow-md'
                    : 'border-slate-800/80 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <span className="font-mono text-xs font-black">{h.year}</span>
                <span className="font-mono text-[10px] text-emerald-400">
                  {typeof h.rate === 'number' ? h.rate.toLocaleString() : h.rate}
                </span>
              </button>
            );
          })}
        </div>

        {/* بطاقة عرض تفاصيل السنة المحددة */}
        {activeNote && (
          <div className="mt-2.5 rounded-xl border border-slate-800 bg-slate-900/90 p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono font-black text-amber-400 text-sm">{activeNote.year}</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-200 font-semibold">
                  1 USD = {activeNote.rate?.toLocaleString()} {currencyData.currencyCode}
                </span>
              </div>
              <p className="m-0 text-[11px] leading-relaxed text-slate-300">
                {isAr ? activeNote.noteAr : activeNote.noteEn}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-1.5 text-[10px] text-slate-400">
              <Building className="h-3.5 w-3.5 text-sky-400" />
              <span>{isAr ? 'بيانات معتمدة وموثقة' : 'Verified Central Bank Records'}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
