import { useState, useMemo } from 'react';
import {
  Coins,
  Activity,
  Search,
  Calendar,
  Lock,
  Unlock,
  Building2,
  Globe2,
  Filter,
} from 'lucide-react';
import {
  CURRENCY_10YEAR_HISTORY_DB,
} from '../data/currency10YearHistoryDB';
import CountryCurrency10YearChart from './CountryCurrency10YearChart';
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

export default function CurrencyVolatilityDashboard({
  lang = 'ar',
  onSelectCountry,
  initialCountryId = 'sa',
}) {
  const isAr = lang === 'ar';
  const [selectedCountryId, setSelectedCountryId] = useState(initialCountryId);
  const [searchQuery, setSearchQuery] = useState('');
  const [regimeFilter, setRegimeFilter] = useState('all'); // 'all' | 'pegged' | 'floating' | 'arab'

  // قائمة جميع الدول المتاحة في قاعدة بيانات الـ 10 سنوات
  const allCountriesList = useMemo(() => {
    return Object.entries(CURRENCY_10YEAR_HISTORY_DB).map(([id, item]) => {
      const history = item.history || [];
      const firstRate = history[0]?.rate || 1;
      const latestRate = history[history.length - 1]?.rate || 1;
      const change10y =
        firstRate > 0
          ? parseFloat((((latestRate - firstRate) / firstRate) * 100).toFixed(1))
          : 0;

      const isArab = [
        'sa', 'eg', 'ae', 'qa', 'kw', 'om', 'bh', 'tr', 'sy', 'lb', 'jo', 'iq', 'dz', 'ma', 'tn', 'sd', 'ye', 'ly'
      ].includes(id);

      return {
        id,
        countryNameAr: item.countryNameAr,
        countryNameEn: item.countryNameEn,
        flag: item.flag,
        currencyNameAr: item.currencyNameAr,
        currencyNameEn: item.currencyNameEn,
        currencyCode: item.currencyCode,
        pegStatusAr: item.pegStatusAr,
        pegStatusEn: item.pegStatusEn,
        isPegged: item.isPegged,
        centralBankAr: item.centralBankAr,
        centralBankEn: item.centralBankEn,
        latestRate,
        firstRate,
        change10y,
        isArab,
        history,
      };
    });
  }, []);

  // تصفية الدول حسب البحث والنظام
  const filteredCountries = useMemo(() => {
    return allCountriesList.filter((c) => {
      const matchSearch =
        !searchQuery.trim() ||
        c.countryNameAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.countryNameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.currencyCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.currencyNameAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.currencyNameEn.toLowerCase().includes(searchQuery.toLowerCase());

      let matchRegime = true;
      if (regimeFilter === 'pegged') matchRegime = c.isPegged;
      else if (regimeFilter === 'floating') matchRegime = !c.isPegged;
      else if (regimeFilter === 'arab') matchRegime = c.isArab;

      return matchSearch && matchRegime;
    });
  }, [allCountriesList, searchQuery, regimeFilter]);

  // الدولة النشطة المختارة حالياً
  const selectedData = useMemo(() => {
    return (
      allCountriesList.find((c) => c.id === selectedCountryId) ||
      allCountriesList[0]
    );
  }, [allCountriesList, selectedCountryId]);

  // بيانات المخطط المقارن للتقلبات بين الدول
  const comparisonChartData = useMemo(() => {
    return allCountriesList
      .filter((c) => c.id !== 'us' && c.id !== 'sy' && c.id !== 'lb' && c.id !== 'ir') // استثناء الحالات التضخمية الفائقة من الرسم البياني العام حتى لا تكسر المقياس
      .map((c) => ({
        id: c.id,
        name: isAr ? c.countryNameAr : c.countryNameEn,
        flag: c.flag,
        code: c.currencyCode,
        change: c.change10y,
        isPegged: c.isPegged,
      }))
      .sort((a, b) => b.change - a.change);
  }, [allCountriesList, isAr]);

  return (
    <div className="space-y-6" dir={isAr ? 'rtl' : 'ltr'}>
      {/* الترويسة الرئيسية لرادار العملات */}
      <section className="nx-panel relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950/30 p-5 sm:p-7 border-emerald-500/20">
        <div className="pointer-events-none absolute -end-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/35 bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-300">
                <Coins className="h-3.5 w-3.5 text-emerald-400" />
                <span>{isAr ? 'مرصد السياسة النقدية والتضخم العالمي' : 'Global Monetary Policy & FX Volatility Tracker'}</span>
              </span>
              <span className="rounded border border-slate-700 bg-slate-900 px-2 py-0.5 font-mono text-[11px] text-slate-300">
                2016 – 2026
              </span>
            </div>

            <h2 className="m-0 text-xl font-black text-white sm:text-2xl lg:text-3xl flex items-center gap-2.5">
              <span>{isAr ? 'تقلبات أسعار صرف العملات مقابل الدولار (10 سنوات)' : '10-Year Sovereign Currency Volatility vs USD'}</span>
            </h2>

            <p className="m-0 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isAr
                ? 'رسم بياني تفاعلي دقيق لتوثيق تاريخ أسعار الصرف خلال العقد الأخير (2016 - 2026)، مع رصد موجات التعويم، التضخم الجامح، سياسات التثبيت النقدي، وتأثير الصدمات الجيوسياسية.'
                : 'Interactive data visualization of sovereign currency exchange rates over the past decade (2016–2026), tracking devaluation waves, hyperinflation, currency pegs, and geopolitical shocks.'}
            </p>
          </div>

          {/* بطاقات الإحصاءات العامة */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 shrink-0">
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3 text-center">
              <span className="text-[10px] font-bold text-emerald-300 block">{isAr ? 'الدول المغطاة' : 'Currencies'}</span>
              <span className="font-mono text-xl font-black text-white">{allCountriesList.length}</span>
              <span className="text-[9px] text-slate-400 block">{isAr ? 'بيانات مؤكدة' : 'Verified DB'}</span>
            </div>

            <div className="rounded-xl border border-sky-500/30 bg-sky-950/20 p-3 text-center">
              <span className="text-[10px] font-bold text-sky-300 block">{isAr ? 'مثبتة بالدولار' : 'Pegged to USD'}</span>
              <span className="font-mono text-xl font-black text-white">
                {allCountriesList.filter((c) => c.isPegged).length}
              </span>
              <span className="text-[9px] text-slate-400 block">{isAr ? 'استقرار نقدي' : 'Fixed parity'}</span>
            </div>

            <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-3 text-center">
              <span className="text-[10px] font-bold text-amber-300 block">{isAr ? 'عائمة ومرنة' : 'Floating'}</span>
              <span className="font-mono text-xl font-black text-white">
                {allCountriesList.filter((c) => !c.isPegged && c.id !== 'us').length}
              </span>
              <span className="text-[9px] text-slate-400 block">{isAr ? 'قوى السوق' : 'Market driven'}</span>
            </div>

            <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-3 text-center">
              <span className="text-[10px] font-bold text-rose-300 block">{isAr ? 'نطاق التاريخ' : 'History Span'}</span>
              <span className="font-mono text-xl font-black text-white">10 {isAr ? 'سنوات' : 'Years'}</span>
              <span className="text-[9px] text-slate-400 block">2016 → 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* شريط اختيار الدولة والتصفية */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 space-y-3.5 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-emerald-400" />
            <span className="text-xs font-bold text-white">
              {isAr ? 'اختر الدولة لاستعراض الرسم البياني ومحطاتها النقدية:' : 'Select Country to Explore 10-Year Volatility & Monetary History:'}
            </span>
          </div>

          {/* حقل البحث والفلاتر السريعة */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative min-w-[200px]">
              <Search className="pointer-events-none absolute start-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isAr ? 'ابحث عن دولة أو عملة (SAR, EGP...)' : 'Search country or code (SAR, EGP...)'}
                className="w-full rounded-xl border border-slate-700 bg-slate-950/80 py-1.5 pe-3 ps-8 text-xs text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-1 rounded-xl border border-slate-700 bg-slate-950 p-1 text-xs">
              <button
                onClick={() => setRegimeFilter('all')}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                  regimeFilter === 'all'
                    ? 'bg-emerald-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isAr ? 'الكل' : 'All'}
              </button>
              <button
                onClick={() => setRegimeFilter('arab')}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                  regimeFilter === 'arab'
                    ? 'bg-emerald-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isAr ? 'العربية والخليج' : 'Arab & GCC'}
              </button>
              <button
                onClick={() => setRegimeFilter('pegged')}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                  regimeFilter === 'pegged'
                    ? 'bg-emerald-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isAr ? 'المثبتة' : 'Pegged'}
              </button>
              <button
                onClick={() => setRegimeFilter('floating')}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                  regimeFilter === 'floating'
                    ? 'bg-emerald-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isAr ? 'العائمة' : 'Floating'}
              </button>
            </div>
          </div>
        </div>

        {/* شبكة أزرار الدول المتجاوبة مع الشعارات والأعلام */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 max-h-48 overflow-y-auto pe-1">
          {filteredCountries.map((c) => {
            const isSelected = c.id === selectedCountryId;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCountryId(c.id)}
                className={`group flex items-center gap-2 rounded-xl border p-2 text-start transition ${
                  isSelected
                    ? 'border-emerald-500 bg-emerald-950/60 ring-2 ring-emerald-500/40 shadow-md'
                    : 'border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <span className="text-xl shrink-0 group-hover:scale-110 transition">{c.flag}</span>
                <div className="min-w-0 leading-tight">
                  <span className="block truncate text-xs font-bold text-white">
                    {isAr ? c.countryNameAr : c.countryNameEn}
                  </span>
                  <span className="block font-mono text-[10px] text-slate-400">
                    {c.currencyCode}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* عرض تفصيلي للدولة النشطة مع الرسم البياني التفاعلي للـ 10 سنوات */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* العمود الرئيسي: الرسم البياني والمحطات النقدية */}
        <div className="lg:col-span-8 space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 sm:p-5 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{selectedData.flag}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="m-0 text-lg sm:text-xl font-black text-white">
                      {isAr ? selectedData.countryNameAr : selectedData.countryNameEn}
                    </h3>
                    <span className="rounded border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 font-mono text-xs font-bold text-emerald-300">
                      {selectedData.currencyCode}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">
                    {isAr ? selectedData.currencyNameAr : selectedData.currencyNameEn}
                  </span>
                </div>
              </div>

              {/* بطاقة السعر المباشر ومقدار التغير */}
              <div className="flex items-center gap-3 bg-slate-900/90 border border-slate-800 rounded-xl px-3.5 py-2">
                <div>
                  <span className="block text-[10px] text-slate-400">
                    {isAr ? 'سعر 2026 مقابل 1 دولار:' : '2026 Rate per 1 USD:'}
                  </span>
                  <span className="font-mono text-lg font-black text-emerald-400">
                    {typeof selectedData.latestRate === 'number'
                      ? selectedData.latestRate.toLocaleString()
                      : selectedData.latestRate}{' '}
                    <span className="text-xs font-normal text-slate-400">{selectedData.currencyCode}</span>
                  </span>
                </div>
                <div className="text-end border-s border-slate-800 ps-3">
                  <span className="block text-[10px] text-slate-400">
                    {isAr ? 'تغير الـ 10 سنوات:' : '10-Year Change:'}
                  </span>
                  <span
                    className={`font-mono text-sm font-black ${
                      selectedData.change10y > 0
                        ? 'text-rose-400'
                        : selectedData.change10y < 0
                        ? 'text-emerald-400'
                        : 'text-sky-400'
                    }`}
                  >
                    {selectedData.change10y > 0 ? `+${selectedData.change10y}%` : `${selectedData.change10y}%`}
                  </span>
                </div>
              </div>
            </div>

            {/* تضمين المخطط البياني التفاعلي Recharts */}
            <CountryCurrency10YearChart
              country={{ id: selectedData.id, name: isAr ? selectedData.countryNameAr : selectedData.countryNameEn }}
              lang={lang}
            />
          </div>
        </div>

        {/* العمود الجانبي: الملف النقدي، البنك المركزي، وجدول السنوات التفصيلي */}
        <div className="lg:col-span-4 space-y-4">
          {/* بطاقة النظام النقدي والبنك المركزي */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 space-y-3.5 shadow-lg">
            <h4 className="m-0 text-sm font-black text-white flex items-center gap-2">
              <Building2 className="h-4 w-4 text-emerald-400" />
              <span>{isAr ? 'الهيكل النقدي والبنك المركزي' : 'Monetary Architecture & Central Bank'}</span>
            </h4>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between rounded-xl bg-slate-950 p-2.5 border border-slate-800">
                <span className="text-slate-400">{isAr ? 'السلطة النقدية:' : 'Central Bank:'}</span>
                <span className="font-bold text-slate-200">
                  {isAr ? selectedData.centralBankAr : selectedData.centralBankEn}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-slate-950 p-2.5 border border-slate-800">
                <span className="text-slate-400">{isAr ? 'نظام سعر الصرف:' : 'Exchange Regime:'}</span>
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold ${
                    selectedData.isPegged
                      ? 'border border-sky-500/40 bg-sky-500/15 text-sky-300'
                      : 'border border-amber-500/40 bg-amber-500/15 text-amber-300'
                  }`}
                >
                  {selectedData.isPegged ? <Lock className="h-3 w-3" /> : <Unlock className="h-3 w-3" />}
                  <span>{isAr ? selectedData.pegStatusAr : selectedData.pegStatusEn}</span>
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-slate-950 p-2.5 border border-slate-800">
                <span className="text-slate-400">{isAr ? 'سعر الأساس (2016):' : 'Base Rate (2016):'}</span>
                <span className="font-mono font-bold text-slate-200">
                  {selectedData.firstRate} {selectedData.currencyCode}
                </span>
              </div>
            </div>

            {onSelectCountry && (
              <button
                onClick={() =>
                  onSelectCountry({
                    id: selectedData.id,
                    name: isAr ? selectedData.countryNameAr : selectedData.countryNameEn,
                  })
                }
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/15 py-2 text-xs font-black text-emerald-300 hover:bg-emerald-500/25 transition"
              >
                <Globe2 className="h-3.5 w-3.5" />
                <span>{isAr ? 'فتح الملف الجيوسياسي الشامل للدولة' : 'Open Comprehensive Sovereign Dossier'}</span>
              </button>
            )}
          </div>

          {/* جدول السنوات الـ 10 التفصيلي مع الملاحظات النقدية */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 space-y-3 shadow-lg">
            <h4 className="m-0 text-sm font-black text-white flex items-center gap-2">
              <Calendar className="h-4 w-4 text-sky-400" />
              <span>{isAr ? 'سجل السنوات العشر مع المحطات النقدية:' : '10-Year Exchange Rate History & Events:'}</span>
            </h4>

            <div className="space-y-2 max-h-72 overflow-y-auto pe-1 text-xs">
              {selectedData.history?.map((h) => (
                <div
                  key={h.year}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-2.5 hover:border-emerald-500/40 transition"
                >
                  <div className="flex items-center justify-between font-mono">
                    <span className="font-bold text-emerald-400">{h.year}</span>
                    <span className="font-black text-white">
                      {typeof h.rate === 'number' ? h.rate.toLocaleString() : h.rate}{' '}
                      <span className="text-[10px] text-slate-400">{selectedData.currencyCode}</span>
                    </span>
                  </div>
                  {(h.noteAr || h.noteEn) && (
                    <p className="m-0 mt-1 text-[11px] text-slate-300 leading-tight">
                      {isAr ? h.noteAr : h.noteEn}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* المخطط المقارن الشامل لنسب التقلب بين الدول */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div>
            <h3 className="m-0 text-base font-black text-white flex items-center gap-2">
              <Activity className="h-4 w-4 text-emerald-400" />
              <span>{isAr ? 'مقارنة نسبة ارتفاع سعر الصرف (تراجع العملة المحلية) خلال 10 سنوات' : '10-Year Devaluation / Depreciation Comparison Across Nations'}</span>
            </h3>
            <span className="text-xs text-slate-400">
              {isAr ? 'مقارنة نسبة الزيادة في سعر الدولار بين 2016 و2026 للدول ذات البيانات المستقرة' : 'Comparing USD exchange rate increase percentage from 2016 to 2026'}
            </span>
          </div>
        </div>

        <div className="h-72 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={comparisonChartData} margin={{ top: 10, right: 10, left: 0, bottom: 25 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" opacity={0.6} />
              <XAxis
                dataKey="name"
                tick={{ fill: '#cbd5e1', fontSize: 10, fontWeight: 600 }}
                interval={0}
                angle={-30}
                textAnchor="end"
                height={50}
                axisLine={{ stroke: '#334155' }}
              />
              <YAxis
                tick={{ fill: '#64748b', fontSize: 10 }}
                axisLine={{ stroke: '#334155' }}
                unit="%"
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null;
                  const item = payload[0].payload;
                  return (
                    <div className="rounded-xl border border-slate-700 bg-slate-950 p-2.5 text-xs shadow-xl" dir={isAr ? 'rtl' : 'ltr'}>
                      <div className="flex items-center gap-2 font-bold text-white mb-1">
                        <span>{item.flag}</span>
                        <span>{item.name} ({item.code})</span>
                      </div>
                      <div className="text-slate-300">
                        {isAr ? 'نسبة التغير (10 سنوات):' : '10-Year Change:'}{' '}
                        <b className={item.change > 0 ? 'text-rose-400' : 'text-emerald-400'}>
                          {item.change > 0 ? `+${item.change}%` : `${item.change}%`}
                        </b>
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        {item.isPegged ? (isAr ? 'نظام تثبيت بالدولار' : 'Pegged to USD') : (isAr ? 'سعر صرف مرن/عائم' : 'Floating exchange rate')}
                      </div>
                    </div>
                  );
                }}
              />
              <Bar dataKey="change" radius={[6, 6, 0, 0]}>
                {comparisonChartData.map((entry, idx) => (
                  <Cell
                    key={`bar-${idx}`}
                    fill={entry.change > 100 ? '#f43f5e' : entry.change > 20 ? '#f59e0b' : entry.change === 0 ? '#38bdf8' : '#10b981'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}
