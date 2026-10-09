import { useState, useMemo } from 'react';
import {
  Calendar,
  Search,
  Clock,
  MapPin,
  Flame,
  Skull,
  AlertOctagon,
  Coins,
  Swords,
  Globe,
  BadgeAlert,
  Crosshair,
} from 'lucide-react';
import { HISTORICAL_ARCHIVE_DATA, HISTORICAL_REGIONS } from '../data/historicalArchiveData.js';
import { COUNTRY_HISTORICAL_EVENTS_DB } from '../data/countryHistoricalEventsDB.js';
import { TIMELINE_YEAR_EVENTS } from '../data/timelineYearEventsDB.js';

export default function HistoricalArchivePanel({ lang = 'ar', onFocusOnMap }) {
  const isAr = lang === 'ar';
  const [activeMode, setActiveMode] = useState('conflicts'); // 'conflicts' | 'sovereign_events'
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // حالة سجل الأحداث السيادية للدول
  const [selectedCountryKey, setSelectedCountryKey] = useState('all');
  const [sovereignCategory, setSovereignCategory] = useState('all'); // 'all' | 'assassinations' | 'terror' | 'escalations' | 'currency'

  const countryKeysList = useMemo(() => {
    return Object.keys(COUNTRY_HISTORICAL_EVENTS_DB);
  }, []);

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

  // تصفية وتجميع الأحداث السيادية للدول
  const filteredSovereignEntries = useMemo(() => {
    const entries = [];
    const targetKeys = selectedCountryKey === 'all' ? countryKeysList : [selectedCountryKey];

    targetKeys.forEach((cKey) => {
      const cData = COUNTRY_HISTORICAL_EVENTS_DB[cKey];
      if (!cData) return;

      // 1. اغتيالات
      if (sovereignCategory === 'all' || sovereignCategory === 'assassinations') {
        (cData.assassinations || []).forEach((item) => {
          entries.push({
            type: 'assassination',
            countryKey: cKey,
            countryNameAr: cData.nameAr,
            countryNameEn: cData.nameEn,
            titleAr: item.targetAr,
            titleEn: item.targetEn,
            subAr: item.perpetratorAr,
            subEn: item.perpetratorEn,
            year: item.year,
            detailsAr: item.detailsAr,
            detailsEn: item.detailsEn,
            impactAr: item.impactAr,
            impactEn: item.impactEn,
          });
        });
      }

      // 2. إرهاب
      if (sovereignCategory === 'all' || sovereignCategory === 'terror') {
        (cData.terrorEvents || []).forEach((item) => {
          entries.push({
            type: 'terror',
            countryKey: cKey,
            countryNameAr: cData.nameAr,
            countryNameEn: cData.nameEn,
            titleAr: item.titleAr,
            titleEn: item.titleEn,
            subAr: item.groupAr,
            subEn: item.groupEn,
            year: item.year,
            casualties: item.casualties,
            detailsAr: item.detailsAr,
            detailsEn: item.detailsEn,
            counterAr: item.counterMeasureAr,
            counterEn: item.counterMeasureEn,
          });
        });
      }

      // 3. تصاعدات أجنبية
      if (sovereignCategory === 'all' || sovereignCategory === 'escalations') {
        (cData.foreignEscalations || []).forEach((item) => {
          entries.push({
            type: 'escalation',
            countryKey: cKey,
            countryNameAr: cData.nameAr,
            countryNameEn: cData.nameEn,
            titleAr: item.titleAr,
            titleEn: item.titleEn,
            subAr: item.opponentCountryAr,
            subEn: item.opponentCountryEn,
            year: item.year,
            nature: item.nature,
            detailsAr: item.detailsAr,
            detailsEn: item.detailsEn,
            causeAr: item.causeAr,
            causeEn: item.causeEn,
            outcomeAr: item.outcomeAr,
            outcomeEn: item.outcomeEn,
          });
        });
      }

      // 4. العملة والتحولات النقدية
      if (sovereignCategory === 'all' || sovereignCategory === 'currency') {
        if (cData.currencyEvolution) {
          (cData.currencyEvolution.currencyHistoryTimeline || []).forEach((item) => {
            entries.push({
              type: 'currency',
              countryKey: cKey,
              countryNameAr: cData.nameAr,
              countryNameEn: cData.nameEn,
              currencyNameAr: cData.currencyEvolution.nameAr,
              currencyCode: cData.currencyEvolution.code,
              rateCurrent: cData.currencyEvolution.currentExchangeRateUsd,
              titleAr: item.eventAr,
              titleEn: item.eventEn,
              year: item.year,
              rateAtTime: item.rateAtTime,
              detailsAr: item.detailsAr,
              detailsEn: item.detailsEn,
            });
          });
        }
      }
    });

    if (!searchQuery.trim()) return entries;
    const q = searchQuery.toLowerCase().trim();
    return entries.filter(
      (e) =>
        (e.countryNameAr && e.countryNameAr.toLowerCase().includes(q)) ||
        (e.countryNameEn && e.countryNameEn.toLowerCase().includes(q)) ||
        (e.titleAr && e.titleAr.toLowerCase().includes(q)) ||
        (e.titleEn && e.titleEn.toLowerCase().includes(q)) ||
        (e.detailsAr && e.detailsAr.toLowerCase().includes(q)) ||
        (e.detailsEn && e.detailsEn.toLowerCase().includes(q))
    );
  }, [selectedCountryKey, sovereignCategory, countryKeysList, searchQuery]);

  // تصفية أحداث المحاكاة الزمنية
  const filteredTimelineEvents = useMemo(() => {
    if (!searchQuery.trim()) return TIMELINE_YEAR_EVENTS;
    const q = searchQuery.toLowerCase().trim();
    return TIMELINE_YEAR_EVENTS.filter((ev) =>
      (ev.titleAr && ev.titleAr.toLowerCase().includes(q)) ||
      (ev.titleEn && ev.titleEn.toLowerCase().includes(q)) ||
      (ev.summaryAr && ev.summaryAr.toLowerCase().includes(q)) ||
      (ev.summaryEn && ev.summaryEn.toLowerCase().includes(q)) ||
      (ev.belligerentsAr && ev.belligerentsAr.toLowerCase().includes(q)) ||
      String(ev.year).includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="space-y-5" dir={isAr ? 'rtl' : 'ltr'}>
      {/* الترويسة القيادية للأرشيف مع أزرار التحويل */}
      <section className="nx-panel relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/40 p-5 sm:p-7 border-indigo-500/20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/35 bg-indigo-500/15 px-3 py-1 text-xs font-black text-indigo-300">
                <Clock className="h-3.5 w-3.5" />
                <span>{isAr ? 'الأرشيف الجيوسياسي والسيادي الشامل' : 'Comprehensive Geopolitical & Sovereign Archive'}</span>
              </span>
            </div>

            <h2 className="m-0 text-xl font-black text-white sm:text-2xl flex items-center gap-2.5">
              <Calendar className="h-6 w-6 text-indigo-400" />
              <span>{isAr ? 'الأرشيف التاريخي للحروب والأحداث السيادية والعملات' : 'Archive of Conflicts, Sovereign Events & Currencies'}</span>
            </h2>

            <p className="m-0 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isAr
                ? 'مرصد تاريخي موثق يجمع أحداث الحروب الدولية الكبرى وسجل الأحداث السيادية لكل دولة (اغتيالات، إرهاب، تصاعدات مع دول أجنبية، وتاريخ وقيمة العملة).'
                : 'Searchable intelligence archive of major global wars, sovereign assassinations, terror milestones, foreign escalations, and currency history.'}
            </p>
          </div>

          {/* تبديل النمط: الأرشيف العام vs أحداث الدول السيادية */}
          <div className="flex flex-col gap-2 shrink-0">
            <div className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950 p-1">
              <button
                onClick={() => setActiveMode('conflicts')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-black transition ${
                  activeMode === 'conflicts'
                    ? 'bg-indigo-600 text-white shadow'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Calendar className="h-4 w-4" />
                <span>{isAr ? 'الأرشيف الجيوسياسي' : 'Geopolitical Conflicts'}</span>
              </button>

              <button
                onClick={() => setActiveMode('timeline')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-black transition ${
                  activeMode === 'timeline'
                    ? 'bg-sky-600 text-white shadow'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Clock className="h-4 w-4" />
                <span>{isAr ? 'محاكاة الخريطة (1914 - 2026)' : 'Map Timeline (1914-2026)'}</span>
                <span className="rounded bg-sky-950/80 border border-sky-500/40 px-1 py-0.2 text-[9px] font-mono text-sky-300">
                  {TIMELINE_YEAR_EVENTS.length}
                </span>
              </button>

              <button
                onClick={() => setActiveMode('sovereign_events')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-black transition ${
                  activeMode === 'sovereign_events'
                    ? 'bg-rose-600 text-white shadow'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Flame className="h-4 w-4" />
                <span>{isAr ? 'أحداث الدول والعملات' : 'Sovereign Events & Currencies'}</span>
                <span className="rounded bg-rose-950/80 border border-rose-500/40 px-1 py-0.2 text-[9px] font-mono text-rose-300">
                  {countryKeysList.length} دول
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* المحتوى بحسب النمط المحدد */}
      {activeMode === 'conflicts' ? (
        <>
          {/* شريط أدوات البحث والتصفية للأرشيف الجيوسياسي */}
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
        </>
      ) : activeMode === 'timeline' ? (
        /* النمط الثالث: محاكاة الخريطة والأحداث الميدانية (1914 - 2026) */
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
            <div className="relative flex-1">
              <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isAr ? 'البحث في أحداث المحاكاة، الحروب، المعاهدات، الدول...' : 'Search simulation events, wars, treaties, nations...'}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 py-2 ps-9 pe-3 text-xs text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-sky-400 font-bold">
                {filteredTimelineEvents.length} {isAr ? 'محطة مسجلة' : 'milestones'}
              </span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTimelineEvents.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950 p-4 space-y-3 shadow-lg hover:border-sky-500/50 transition flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2">
                    <span className="font-mono text-xs font-black px-2.5 py-0.5 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-500/40">
                      {item.year}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400 uppercase font-bold">
                      {item.category}
                    </span>
                  </div>

                  <h4 className="m-0 text-sm font-black text-white leading-snug">
                    {isAr ? item.titleAr : item.titleEn}
                  </h4>

                  <p className="m-0 text-xs text-slate-300 leading-relaxed">
                    {isAr ? item.summaryAr : item.summaryEn}
                  </p>

                  {item.belligerentsAr && (
                    <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800/60">
                      <b className="text-slate-300">{isAr ? 'الأطراف والدول المتأثرة:' : 'Parties / Actors:'} </b>
                      <span>{isAr ? item.belligerentsAr : item.belligerentsEn}</span>
                    </div>
                  )}

                  {item.impactAr && (
                    <div className="text-[11px] text-amber-300/90 bg-amber-950/20 p-2 rounded-xl border border-amber-500/20">
                      <b className="text-amber-400">{isAr ? 'الأثر الاستراتيجي:' : 'Strategic Impact:'} </b>
                      <span>{isAr ? item.impactAr : item.impactEn}</span>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => onFocusOnMap?.(item.year, item.countryId)}
                  className="w-full mt-2 flex items-center justify-center gap-1.5 rounded-xl border border-sky-500/40 bg-sky-500/15 py-2 px-3 text-xs font-black text-sky-300 hover:bg-sky-500/25 hover:border-sky-400 transition shadow"
                >
                  <Crosshair className="h-4 w-4" />
                  <span>{isAr ? `عرض على الخريطة ومحاكاة عام ${item.year}` : `Focus on Map & Simulate ${item.year}`}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* النمط الثاني: سجل الأحداث السيادية والعملات لكل دولة */
        <div className="space-y-4">
          {/* شريط اختيار الدولة والتصنيف والبحث */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
            {/* اختيار الدولة */}
            <div className="sm:col-span-4">
              <label className="block text-[11px] font-bold text-slate-400 mb-1">
                {isAr ? 'اختر الدولة المحددة:' : 'Select Country:'}
              </label>
              <select
                value={selectedCountryKey}
                onChange={(e) => setSelectedCountryKey(e.target.value)}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 py-2 px-3 text-xs font-bold text-white focus:border-rose-500 focus:outline-none"
              >
                <option value="all">{isAr ? 'كافة الدول المدرجة (جميع السجلات)' : 'All Sovereign Countries'}</option>
                {countryKeysList.map((key) => {
                  const c = COUNTRY_HISTORICAL_EVENTS_DB[key];
                  return (
                    <option key={key} value={key}>
                      {isAr ? c.nameAr : c.nameEn} ({key.toUpperCase()})
                    </option>
                  );
                })}
              </select>
            </div>

            {/* تصنيف الوقائع */}
            <div className="sm:col-span-4">
              <label className="block text-[11px] font-bold text-slate-400 mb-1">
                {isAr ? 'نوع الحدث السيادي:' : 'Incident Type:'}
              </label>
              <select
                value={sovereignCategory}
                onChange={(e) => setSovereignCategory(e.target.value)}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 py-2 px-3 text-xs font-bold text-white focus:border-rose-500 focus:outline-none"
              >
                <option value="all">{isAr ? 'الكل (اغتيالات، إرهاب، تصاعدات، عملات)' : 'All Incidents & Currency'}</option>
                <option value="assassinations">{isAr ? 'اغتيالات سياسية كبرى' : 'Political Assassinations'}</option>
                <option value="terror">{isAr ? 'عمليات إرهابية ومكافحة الإرهاب' : 'Terror Incidents'}</option>
                <option value="escalations">{isAr ? 'تصاعدات وحروب مع دول أجنبية' : 'Foreign Escalations'}</option>
                <option value="currency">{isAr ? 'تطور قيمة العملة والنظام النقدي' : 'Currency History & Value'}</option>
              </select>
            </div>

            {/* البحث */}
            <div className="sm:col-span-4">
              <label className="block text-[11px] font-bold text-slate-400 mb-1">
                {isAr ? 'البحث بالنص أو الهدف:' : 'Search Target / Event:'}
              </label>
              <div className="relative">
                <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isAr ? 'ابحث عن شخصية، عملية، عملة...' : 'Search person, deal, currency...'}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 py-2 ps-9 pe-3 text-xs text-white placeholder-slate-500 focus:border-rose-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* بطاقات الوقائع السيادية المستخرجة */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <span>{isAr ? `إجمالي الوقائع المعروضة: ${filteredSovereignEntries.length}` : `Total Displayed Incidents: ${filteredSovereignEntries.length}`}</span>
            </div>

            {filteredSovereignEntries.length === 0 ? (
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 text-center text-slate-400">
                <p className="m-0 text-sm">{isAr ? 'لا توجد وقائع تطابق الفلتر والبحث المحددين.' : 'No sovereign incidents match criteria.'}</p>
              </div>
            ) : (
              <div className="grid gap-3">
                {filteredSovereignEntries.map((item, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl border p-4 space-y-2.5 transition shadow-lg ${
                      item.type === 'assassination'
                        ? 'border-rose-500/35 bg-gradient-to-l from-slate-950 via-slate-900 to-rose-950/20'
                        : item.type === 'terror'
                        ? 'border-amber-500/35 bg-gradient-to-l from-slate-950 via-slate-900 to-amber-950/20'
                        : item.type === 'escalation'
                        ? 'border-purple-500/35 bg-gradient-to-l from-slate-950 via-slate-900 to-purple-950/20'
                        : 'border-emerald-500/35 bg-gradient-to-l from-slate-950 via-slate-900 to-emerald-950/20'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2.5 flex-wrap border-b border-slate-800/80 pb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`rounded-lg px-2 py-0.5 text-[10px] font-black uppercase flex items-center gap-1 ${
                            item.type === 'assassination'
                              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                              : item.type === 'terror'
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                              : item.type === 'escalation'
                              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                              : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          }`}
                        >
                          {item.type === 'assassination' && <Skull className="h-3 w-3" />}
                          {item.type === 'terror' && <AlertOctagon className="h-3 w-3" />}
                          {item.type === 'escalation' && <Swords className="h-3 w-3" />}
                          {item.type === 'currency' && <Coins className="h-3 w-3" />}
                          <span>
                            {item.type === 'assassination'
                              ? (isAr ? 'اغتيال سياسي' : 'Assassination')
                              : item.type === 'terror'
                              ? (isAr ? 'عملية إرهابية' : 'Terror Incident')
                              : item.type === 'escalation'
                              ? (isAr ? 'تصعيد خارجي' : 'Foreign Escalation')
                              : (isAr ? 'محطة نقدية / عملة' : 'Monetary Event')}
                          </span>
                        </span>

                        <span className="text-xs font-black text-white flex items-center gap-1.5">
                          <Globe className="h-3.5 w-3.5 text-sky-400" />
                          <span>{isAr ? item.countryNameAr : item.countryNameEn}</span>
                        </span>
                      </div>

                      <span className="font-mono text-xs font-bold text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {item.year}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="m-0 text-sm font-black text-white">
                        {isAr ? item.titleAr : (item.titleEn || item.titleAr)}
                      </h4>
                      {item.subAr && (
                        <span className="text-xs text-slate-400 block font-semibold">
                          {isAr ? 'الطرف / الجهة:' : 'Entity:'} {isAr ? item.subAr : (item.subEn || item.subAr)}
                        </span>
                      )}
                      {item.rateAtTime && (
                        <div className="text-xs font-mono font-bold text-emerald-400">
                          {isAr ? 'سعر الصرف آنذاك:' : 'Rate at time:'} {item.rateAtTime}
                        </div>
                      )}
                    </div>

                    {item.casualties && (
                      <div className="inline-flex items-center gap-1.5 rounded-md border border-rose-500/30 bg-rose-950/40 px-2 py-0.5 text-[11px] font-bold text-rose-300">
                        <BadgeAlert className="h-3 w-3" />
                        <span>{isAr ? 'الخسائر والضحايا:' : 'Casualties:'} {item.casualties}</span>
                      </div>
                    )}

                    <p className="m-0 text-xs text-slate-300 leading-relaxed bg-slate-950/50 p-2.5 rounded-xl border border-slate-800/80">
                      {isAr ? item.detailsAr : (item.detailsEn || item.detailsAr)}
                    </p>

                    {(item.impactAr || item.counterAr || item.outcomeAr) && (
                      <div className="text-xs text-amber-200/90 bg-amber-950/20 p-2 rounded-lg border border-amber-500/20 leading-relaxed">
                        <b className="text-amber-400">{isAr ? 'الأثر والنتائج / إجراءات الدولة: ' : 'Impact / State Response: '}</b>
                        <span>
                          {isAr
                            ? item.impactAr || item.counterAr || item.outcomeAr
                            : item.impactEn || item.counterEn || item.outcomeEn || item.impactAr}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

