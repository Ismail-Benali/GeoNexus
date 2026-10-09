import { useState, useEffect, useMemo, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Clock,
  Flame,
  Shield,
  ChevronLeft,
  ChevronRight,
  Crosshair,
  AlertTriangle,
} from 'lucide-react';
import { TIMELINE_ERAS, getEraForYear } from '../data/historicalTimelineEras.js';
import { getTimelineEventsForYear, getDefconForYear } from '../data/timelineYearEventsDB.js';

export default function TimelineSlider({
  lang = 'ar',
  selectedYear = 2026,
  onYearChange,
}) {
  const isAr = lang === 'ar';
  const [isPlaying, setIsPlaying] = useState(false);
  const [simSpeed, setSimSpeed] = useState(1); // 1x, 2x, 4x
  const playTimerRef = useRef(null);

  const currentEra = useMemo(() => getEraForYear(selectedYear), [selectedYear]);
  const yearEvents = useMemo(() => getTimelineEventsForYear(selectedYear), [selectedYear]);
  const defcon = useMemo(() => getDefconForYear(selectedYear), [selectedYear]);

  // تشغيل المحاكاة الزمنية التلقائية سنة بسنة أو عبر المحطات
  useEffect(() => {
    if (isPlaying) {
      const intervalMs = Math.round(2800 / simSpeed);
      playTimerRef.current = setInterval(() => {
        onYearChange?.((prevYear) => {
          // محاكاة تقفز بين السنوات البارزة أو تتقدم سنة تلو الأخرى
          const nextYear = prevYear >= 2026 ? 1914 : prevYear + 1;
          if (nextYear === 2026 && prevYear === 2026) {
            setIsPlaying(false);
            return 2026;
          }
          return nextYear;
        });
      }, intervalMs);
    } else {
      clearInterval(playTimerRef.current);
    }
    return () => clearInterval(playTimerRef.current);
  }, [isPlaying, simSpeed, onYearChange]);

  const handleSliderChange = (e) => {
    const val = Number(e.target.value);
    onYearChange?.(val);
  };

  const handleEraSelect = (yr) => {
    setIsPlaying(false);
    onYearChange?.(yr);
  };

  const handleStepYear = (delta) => {
    setIsPlaying(false);
    onYearChange?.((prev) => {
      const next = Math.min(2026, Math.max(1914, prev + delta));
      return next;
    });
  };

  return (
    <div
      className="nx-panel relative overflow-hidden border-slate-800 bg-slate-950/95 p-3 sm:p-4 shadow-2xl rounded-2xl"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* وميض زخرفي تكتيكي خفيف في الخلفية */}
      <div className="pointer-events-none absolute -top-12 -start-12 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -end-12 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />

      {/* الرأس التفاعلي للعصر التاريخي ومؤشر DEFCON */}
      <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-sky-500/40 bg-gradient-to-b from-sky-500/20 to-slate-950 text-sky-300 shadow-lg shadow-sky-950/40">
            <Clock className="h-5 w-5 animate-pulse" />
            <span className="absolute -bottom-1 -end-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
            </span>
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-mono text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-300">
                {selectedYear}
              </span>
              <span className="text-slate-600 text-xs font-semibold">/</span>
              <h3 className="m-0 text-sm sm:text-base font-black text-white truncate">
                {isAr ? currentEra.titleAr : currentEra.titleEn}
              </h3>
            </div>
            
            <div className="flex items-center gap-2 flex-wrap mt-0.5">
              <span className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${defcon.bg}`}>
                <AlertTriangle className="h-3 w-3 shrink-0" />
                <span>{isAr ? defcon.nameAr : defcon.nameEn}</span>
              </span>
              <span className="text-slate-500 text-xs font-bold">·</span>
              <span className="text-xs text-slate-400 truncate">
                {isAr ? currentEra.orderAr : currentEra.orderEn}
              </span>
            </div>
          </div>
        </div>

        {/* أزرار التحكم بالمحاكاة والتنقل والسرعة */}
        <div className="flex items-center gap-1.5 shrink-0 flex-wrap">
          {/* التنقل سنة بسنة للخلف وللأمام */}
          <div className="flex items-center rounded-xl border border-slate-800 bg-slate-900/80 p-0.5">
            <button
              onClick={() => handleStepYear(-1)}
              disabled={selectedYear <= 1914}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 disabled:opacity-30 transition"
              title={isAr ? 'سنة سابقة (-1)' : 'Previous Year (-1)'}
            >
              {isAr ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </button>
            <span className="px-2 font-mono text-xs font-bold text-sky-400">
              {selectedYear}
            </span>
            <button
              onClick={() => handleStepYear(1)}
              disabled={selectedYear >= 2026}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 disabled:opacity-30 transition"
              title={isAr ? 'سنة تالية (+1)' : 'Next Year (+1)'}
            >
              {isAr ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>
          </div>

          {/* محدد سرعة المحاكاة */}
          <div className="flex items-center rounded-xl border border-slate-800 bg-slate-900/80 p-0.5 text-[10px] font-mono">
            {[1, 2, 4].map((spd) => (
              <button
                key={spd}
                onClick={() => setSimSpeed(spd)}
                className={`px-2 py-1 rounded-md font-bold transition ${
                  simSpeed === spd
                    ? 'bg-sky-500 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {spd}x
              </button>
            ))}
          </div>

          {/* زر تشغيل / إيقاف المحاكاة */}
          <button
            onClick={() => setIsPlaying((p) => !p)}
            className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-black transition shadow-sm ${
              isPlaying
                ? 'border-amber-500 bg-amber-500/20 text-amber-300 ring-2 ring-amber-500/30 animate-pulse'
                : 'border-sky-500/40 bg-sky-500/10 text-sky-300 hover:bg-sky-500/20 hover:border-sky-400'
            }`}
            title={isPlaying ? (isAr ? 'إيقاف المحاكاة' : 'Pause Simulation') : (isAr ? 'تشغيل المحاكاة الزمنية التلقائية' : 'Start Simulation')}
          >
            {isPlaying ? (
              <>
                <Pause className="h-3.5 w-3.5 text-amber-300" />
                <span>{isAr ? 'إيقاف' : 'Pause'}</span>
              </>
            ) : (
              <>
                <Play className="h-3.5 w-3.5 text-sky-400" />
                <span>{isAr ? 'محاكاة زمنية' : 'Simulate'}</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              setIsPlaying(false);
              onYearChange?.(2026);
            }}
            className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900/90 px-2.5 py-1.5 text-xs font-bold text-slate-400 hover:text-white hover:border-slate-700 transition"
            title={isAr ? 'إعادة ضبط إلى 2026' : 'Reset to 2026'}
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{isAr ? 'الواقع الراهن' : 'Present'}</span>
          </button>
        </div>
      </div>

      {/* شريط السحب الزمني والمحطات */}
      <div className="my-3 space-y-2">
        <div className="relative flex items-center">
          <input
            type="range"
            min="1914"
            max="2026"
            step="1"
            value={selectedYear}
            onChange={handleSliderChange}
            aria-label={isAr ? 'مقياس الزمن الجيوسياسي' : 'Historical Timeline Slider'}
            className="w-full h-2 rounded-lg bg-slate-900 appearance-none cursor-pointer accent-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
          />
        </div>

        {/* نقاط المحطات التاريخية الكبرى للقفز المباشر */}
        <div className="flex items-center justify-between gap-1 overflow-x-auto pb-1 text-[11px] font-mono">
          {TIMELINE_ERAS.map((era) => {
            const isCurrent = era.year === selectedYear;
            const isNear = Math.abs(era.year - selectedYear) < 4;
            return (
              <button
                key={era.year}
                onClick={() => handleEraSelect(era.year)}
                className={`flex flex-col items-center gap-0.5 rounded-xl px-2.5 py-1 transition shrink-0 border ${
                  isCurrent
                    ? 'border-sky-500 bg-gradient-to-b from-sky-600 to-indigo-700 text-white font-black shadow-lg shadow-sky-950'
                    : isNear
                    ? 'border-sky-500/40 bg-slate-900 text-sky-300 font-bold'
                    : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <span>{era.year}</span>
                <span className="text-[9px] font-sans opacity-85 hidden md:inline">
                  {era.year === 1914
                    ? (isAr ? 'ح.ع 1' : 'WW1')
                    : era.year === 1939
                    ? (isAr ? 'ح.ع 2' : 'WW2')
                    : era.year === 1949
                    ? (isAr ? 'الناتو' : 'NATO')
                    : era.year === 1962
                    ? (isAr ? 'كوبا' : 'Cuba')
                    : era.year === 1991
                    ? (isAr ? 'الكويت' : 'Kuwait')
                    : era.year === 2001
                    ? (isAr ? '11 سبتمبر' : '9/11')
                    : era.year === 2014
                    ? (isAr ? 'القرم' : 'Crimea')
                    : era.year === 2022
                    ? (isAr ? 'أوكرانيا' : 'Ukraine')
                    : era.year === 2026
                    ? (isAr ? 'الراهن' : 'Now')
                    : ''}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ملخص الحدث الميداني المعروض حالياً على الخريطة لتلك السنة */}
      {yearEvents.length > 0 && (
        <div className="mb-2.5 rounded-xl border border-sky-500/30 bg-sky-950/20 p-2.5 flex items-start gap-2.5">
          <div className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-sky-500/20 border border-sky-500/40 text-sky-400 mt-0.5">
            <Crosshair className="h-4 w-4" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="text-[11px] font-black text-sky-300 flex items-center gap-1">
                <span>{isAr ? 'الحدث الميداني المعروض على الخريطة لعام' : 'Map-Linked Event for Year'}</span>
                <span className="font-mono text-white underline decoration-sky-400">{selectedYear}:</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                {yearEvents.length} {isAr ? 'أحداث موثقة على الخريطة' : 'events pinned on map'}
              </span>
            </div>
            <p className="m-0 mt-0.5 text-xs text-slate-200 font-bold leading-snug">
              {isAr ? yearEvents[0].titleAr : yearEvents[0].titleEn}
            </p>
            <p className="m-0 mt-0.5 text-[11px] text-slate-400 line-clamp-1">
              {isAr ? yearEvents[0].summaryAr : yearEvents[0].summaryEn}
            </p>
          </div>
        </div>
      )}

      {/* شريط الإحاطة السريعة للعصر: التحالفات والنزاعات */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-2 border-t border-slate-800/80 text-xs">
        {/* التحالفات المهيمنة في ذلك العصر */}
        <div className="flex items-start gap-2 bg-slate-900/70 rounded-xl p-2.5 border border-slate-800/70">
          <Shield className="h-4 w-4 shrink-0 text-sky-400 mt-0.5" />
          <div className="min-w-0">
            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
              {isAr ? 'التحالفات والكتل المهيمنة آنذاك:' : 'Dominant Era Blocs:'}
            </span>
            <div className="flex items-center gap-2 flex-wrap mt-1 text-slate-200 font-semibold">
              {(isAr ? currentEra.alliancesAr : currentEra.alliancesEn).map((all, idx) => (
                <span key={idx} className="flex items-center gap-1 text-[11px]">
                  <span>{all}</span>
                  {idx < currentEra.alliancesAr.length - 1 && <span className="text-slate-600">·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* بؤر النزاع ومسارح العمليات الكبرى */}
        <div className="flex items-start gap-2 bg-slate-900/70 rounded-xl p-2.5 border border-slate-800/70">
          <Flame className="h-4 w-4 shrink-0 text-rose-400 mt-0.5" />
          <div className="min-w-0">
            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
              {isAr ? 'أبرز بؤر ومسارح الصراع المسلحة:' : 'Key Active Flashpoints & Theaters:'}
            </span>
            <div className="flex items-center gap-2 flex-wrap mt-1 text-slate-200">
              {(isAr ? currentEra.activeConflictsAr : currentEra.activeConflictsEn).map((conf, idx) => (
                <span key={idx} className="flex items-center gap-1 text-[11px]">
                  <span>{conf}</span>
                  {idx < currentEra.activeConflictsAr.length - 1 && <span className="text-slate-600">·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
