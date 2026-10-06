import { useState, useEffect, useMemo, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Clock,
  Flame,
  Shield,
} from 'lucide-react';
import { TIMELINE_ERAS, getEraForYear } from '../data/historicalTimelineEras.js';

export default function TimelineSlider({
  lang = 'ar',
  selectedYear = 2026,
  onYearChange,
}) {
  const isAr = lang === 'ar';
  const [isPlaying, setIsPlaying] = useState(false);
  const playTimerRef = useRef(null);

  const currentEra = useMemo(() => getEraForYear(selectedYear), [selectedYear]);

  // تشغيل المحاكاة الزمنية التلقائية عبر العصور
  useEffect(() => {
    if (isPlaying) {
      playTimerRef.current = setInterval(() => {
        onYearChange?.((prevYear) => {
          const currentIndex = TIMELINE_ERAS.findIndex((e) => e.year === prevYear);
          if (currentIndex === -1 || currentIndex >= TIMELINE_ERAS.length - 1) {
            setIsPlaying(false);
            return 2026;
          }
          return TIMELINE_ERAS[currentIndex + 1].year;
        });
      }, 3200);
    } else {
      clearInterval(playTimerRef.current);
    }
    return () => clearInterval(playTimerRef.current);
  }, [isPlaying, onYearChange]);

  const handleSliderChange = (e) => {
    const val = Number(e.target.value);
    onYearChange?.(val);
  };

  const handleEraSelect = (yr) => {
    setIsPlaying(false);
    onYearChange?.(yr);
  };

  return (
    <div
      className="nx-panel relative overflow-hidden border-slate-800 bg-slate-950/90 p-3 sm:p-4 shadow-xl"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* الرأس التفاعلي للعصر التاريخي */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-sky-500/35 bg-sky-950/40 text-sky-400 shadow-md">
            <Clock className="h-5 w-5" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-mono text-xl sm:text-2xl font-black text-sky-400">
                {selectedYear}
              </span>
              <span className="text-slate-500 text-xs font-semibold">·</span>
              <h3 className="m-0 text-sm sm:text-base font-black text-white truncate">
                {isAr ? currentEra.titleAr : currentEra.titleEn}
              </h3>
            </div>
            <p className="m-0 mt-0.5 text-xs text-slate-400 truncate">
              {isAr ? currentEra.orderAr : currentEra.orderEn}
            </p>
          </div>
        </div>

        {/* أزرار التحكم بالمحاكاة والتنقل */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsPlaying((p) => !p)}
            className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition shadow-sm ${
              isPlaying
                ? 'border-amber-500/60 bg-amber-500/20 text-amber-300'
                : 'border-slate-800 bg-slate-900/90 text-slate-200 hover:border-sky-500/50 hover:text-white'
            }`}
            title={isPlaying ? (isAr ? 'إيقاف مؤقت' : 'Pause Simulation') : (isAr ? 'تشغيل المحاكاة التلقائية' : 'Play Simulation')}
          >
            {isPlaying ? (
              <>
                <Pause className="h-3.5 w-3.5" />
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

      {/* شريط السحب الزمني (Scrubber Slider) */}
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
            const isNear = Math.abs(era.year - selectedYear) < 5;
            return (
              <button
                key={era.year}
                onClick={() => handleEraSelect(era.year)}
                className={`flex flex-col items-center gap-0.5 rounded-lg px-2 py-1 transition shrink-0 ${
                  isCurrent
                    ? 'bg-sky-600 text-white font-bold shadow-md'
                    : isNear
                    ? 'bg-slate-900 text-sky-300 font-semibold border border-sky-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <span>{era.year}</span>
                <span className="text-[9px] font-sans opacity-80 hidden md:inline">
                  {era.year === 1914
                    ? (isAr ? 'ح.ع 1' : 'WW1')
                    : era.year === 1939
                    ? (isAr ? 'ح.ع 2' : 'WW2')
                    : era.year === 1949
                    ? (isAr ? 'الناتو' : 'NATO')
                    : era.year === 1991
                    ? (isAr ? 'السوفيت' : 'USSR')
                    : era.year === 2026
                    ? (isAr ? 'الآن' : 'Now')
                    : ''}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* شريط الإحاطة السريعة للعصر: التحالفات المهيمنة والنزاعات */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-2 border-t border-slate-800/80 text-xs">
        {/* التحالفات المهيمنة في ذلك العصر */}
        <div className="flex items-start gap-2 bg-slate-900/60 rounded-xl p-2.5 border border-slate-800/60">
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
        <div className="flex items-start gap-2 bg-slate-900/60 rounded-xl p-2.5 border border-slate-800/60">
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
