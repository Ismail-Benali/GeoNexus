import { useState, useMemo } from 'react';
import {
  Calendar,
  Search,
  Clock,
  MapPin,
} from 'lucide-react';
import { HISTORICAL_ARCHIVE_DATA, HISTORICAL_REGIONS } from '../data/historicalArchiveData.js';

export default function HistoricalArchivePanel({ lang = 'ar', onFocusOnMap }) {
  const isAr = lang === 'ar';
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const years = useMemo(() => {
    const set = new Set(HISTORICAL_ARCHIVE_DATA.map((item) => item.year));
    return ['all', ...Array.from(set).sort((a, b) => b - a)];
  }, []);

  const filteredEvents = useMemo(() => {
    return HISTORICAL_ARCHIVE_DATA.filter((item) => {
      const matchesRegion = selectedRegion === 'all' || item.region === selectedRegion;
      const matchesYear = selectedYear === 'all' || String(item.year) === String(selectedYear);
      const searchTarget = `${item.titleAr} ${item.titleEn} ${item.summaryAr} ${item.summaryEn} ${item.belligerentsAr} ${item.belligerentsEn}`.toLowerCase();
      const matchesSearch = !searchQuery || searchTarget.includes(searchQuery.toLowerCase());
      return matchesRegion && matchesYear && matchesSearch;
    });
  }, [selectedRegion, selectedYear, searchQuery]);

  return (
    <div className="space-y-5" dir={isAr ? 'rtl' : 'ltr'}>
      {/* الترويسة القيادية للأرشيف */}
      <section className="nx-panel relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/40 p-5 sm:p-7 border-indigo-500/20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/35 bg-indigo-500/15 px-3 py-1 text-xs font-black text-indigo-300">
                <Clock className="h-3.5 w-3.5" />
                <span>{isAr ? 'أرشيف التحولات الجيوسياسية الكبرى (2020 - 2026)' : 'Geopolitical Timeline Archive (2020 - 2026)'}</span>
              </span>
            </div>

            <h2 className="m-0 text-xl font-black text-white sm:text-2xl flex items-center gap-2.5">
              <Calendar className="h-6 w-6 text-indigo-400" />
              <span>{isAr ? 'الأرشيف التاريخي للحروب والتحالفات والأزمات' : 'Historical Archive of Conflicts, Treaties & Crises'}</span>
            </h2>

            <p className="m-0 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isAr
                ? 'واجهة تفاعلية موثقة تتيح البحث والتصفية الزمنية والإقليمية في سجل الأحداث الجيوسياسية والحروب والاتفاقيات الدولية المفصلية.'
                : 'Searchable historical archive filtering past geopolitical events, wars, and alliances by date range, region, or keywords.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-indigo-500/30 bg-indigo-950/20 p-3 text-center">
              <span className="text-[10px] font-bold text-indigo-300 block">{isAr ? 'الأحداث الموثقة' : 'Archived Events'}</span>
              <span className="font-mono text-xl font-black text-white">{HISTORICAL_ARCHIVE_DATA.length}</span>
              <span className="text-[9px] text-slate-400 block">{isAr ? 'محطة مفصلية' : 'Milestones'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* شريط أدوات البحث والتصفية */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
        {/* اختيار الإقليم الجغرافي */}
        <div className="sm:col-span-5">
          <label className="block text-[11px] font-bold text-slate-400 mb-1">
            {isAr ? 'الإقليم الجغرافي:' : 'Geographic Region:'}
          </label>
          <div className="flex gap-1 overflow-x-auto pb-1">
            {HISTORICAL_REGIONS.map((reg) => (
              <button
                key={reg.id}
                onClick={() => setSelectedRegion(reg.id)}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold whitespace-nowrap transition ${
                  selectedRegion === reg.id
                    ? 'bg-indigo-600 text-white shadow'
                    : 'border border-slate-800 bg-slate-900/80 text-slate-300 hover:border-slate-700'
                }`}
              >
                {isAr ? reg.ar : reg.en}
              </button>
            ))}
          </div>
        </div>

        {/* اختيار السنة */}
        <div className="sm:col-span-3">
          <label className="block text-[11px] font-bold text-slate-400 mb-1">
            {isAr ? 'السنة / الفترة الزمنية:' : 'Year / Era:'}
          </label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-full rounded-xl border border-slate-800 bg-slate-900/90 py-2 px-3 text-xs font-bold text-white focus:border-indigo-500 focus:outline-none"
          >
            {years.map((yr) => (
              <option key={yr} value={yr}>
                {yr === 'all' ? (isAr ? 'كافة السنوات (2022 - 2026)' : 'All Years') : yr}
              </option>
            ))}
          </select>
        </div>

        {/* حقل البحث بالكلمات المفتاحية */}
        <div className="sm:col-span-4">
          <label className="block text-[11px] font-bold text-slate-400 mb-1">
            {isAr ? 'البحث بالكلمات أو الأطراف:' : 'Keyword / Actor Search:'}
          </label>
          <div className="relative">
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAr ? 'ابحث عن حرب، عقوبات، الناتو، غزة...' : 'Search wars, sanctions, NATO...'}
              className="w-full rounded-xl border border-slate-800 bg-slate-900/90 py-2 ps-9 pe-3 text-xs text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* قائمة بطاقات الأرشيف */}
      <div className="space-y-3.5">
        {filteredEvents.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 text-center text-slate-400">
            <p className="m-0 text-sm">{isAr ? 'لا توجد أحداث تاريخية تطابق معايير التصفية الحالية.' : 'No archived events match your filters.'}</p>
          </div>
        ) : (
          filteredEvents.map((event) => (
            <article
              key={event.id}
              className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-950 p-4 sm:p-5 space-y-3 transition-all hover:border-indigo-500/40 shadow-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-2.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono font-bold text-xs text-indigo-400 bg-indigo-950/60 border border-indigo-500/30 px-2.5 py-0.5 rounded-lg">
                    {event.date}
                  </span>

                  <span className="rounded-full border border-slate-700 bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-slate-300">
                    {HISTORICAL_REGIONS.find((r) => r.id === event.region)?.[isAr ? 'ar' : 'en'] || event.region}
                  </span>
                </div>

                <div className="text-[11px] text-slate-400 font-semibold">
                  {isAr ? event.belligerentsAr : event.belligerentsEn}
                </div>
              </div>

              <h3 className="m-0 text-base font-black text-white">
                {isAr ? event.titleAr : event.titleEn}
              </h3>

              <p className="m-0 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {isAr ? event.summaryAr : event.summaryEn}
              </p>

              {/* التداعيات والآثار الاستراتيجية */}
              <div className="rounded-xl border border-slate-800/80 bg-slate-950/70 p-3 text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-400 block text-[11px]">
                    {isAr ? 'الأثر والتداعيات الاستراتيجية العالمية:' : 'Global Strategic Impact:'}
                  </span>
                  {onFocusOnMap && (
                    <button
                      onClick={() => onFocusOnMap(event)}
                      className="flex items-center gap-1 text-[10px] font-bold text-indigo-400 hover:text-indigo-300 transition"
                    >
                      <MapPin className="h-3 w-3" />
                      <span>{isAr ? 'عرض على الخريطة' : 'View on Map'}</span>
                    </button>
                  )}
                </div>
                <p className="m-0 text-slate-300 leading-relaxed">
                  {isAr ? event.impactAr : event.impactEn}
                </p>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
