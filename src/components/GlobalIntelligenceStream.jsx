import { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Radio,
  RefreshCw,
  Search,
  ExternalLink,
  Globe2,
  Sparkles,
} from 'lucide-react';
import { fetchIntelligenceStream, NEWS_SOURCES_META } from '../services/news.js';
import { translateText } from '../utils/translator.js';

export default function GlobalIntelligenceStream({ lang = 'ar' }) {
  const isAr = lang === 'ar';
  const [news, setNews] = useState([]);
  const [sourceStatus, setSourceStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedSource, setSelectedSource] = useState('all');
  const [selectedSentiment, setSelectedSentiment] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [lastUpdated, setLastUpdated] = useState(null);

  const loadStream = useCallback(async () => {
    setLoading(true);
    try {
      const { items, source } = await fetchIntelligenceStream(lang);
      setNews(items);
      setSourceStatus(source);
      setLastUpdated(new Date());
    } catch {
      // Keep existing or fallback
    } finally {
      setLoading(false);
    }
  }, [lang]);

  useEffect(() => {
    let unmounted = false;
    const execute = async () => {
      try {
        const { items, source } = await fetchIntelligenceStream(lang);
        if (!unmounted) {
          setNews(items);
          setSourceStatus(source);
          setLastUpdated(new Date());
        }
      } catch {
        // keep fallback
      }
    };
    execute();
    const interval = setInterval(execute, 90 * 1000);
    return () => {
      unmounted = true;
      clearInterval(interval);
    };
  }, [lang]);

  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      const matchesSource = selectedSource === 'all' || item.sourceCode === selectedSource;
      const matchesSentiment = selectedSentiment === 'all' || item.sentiment === selectedSentiment;
      const matchesSearch =
        !searchQuery ||
        item.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.sourceNameAr && item.sourceNameAr.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.sourceNameEn && item.sourceNameEn.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesSource && matchesSentiment && matchesSearch;
    });
  }, [news, selectedSource, selectedSentiment, searchQuery]);

  const stats = useMemo(() => {
    return {
      total: news.length,
      escalation: news.filter((n) => n.sentiment === 'ESCALATION').length,
      crisis: news.filter((n) => n.sentiment === 'CRISIS').length,
      diplomacy: news.filter((n) => n.sentiment === 'DIPLOMACY').length,
      sanctions: news.filter((n) => n.sentiment === 'ECONOMIC_PRESSURE').length,
      alliance: news.filter((n) => n.sentiment === 'STRATEGIC_ALLIANCE').length,
    };
  }, [news]);

  return (
    <div className="space-y-5" dir={isAr ? 'rtl' : 'ltr'}>
      {/* الترويسة الاستخباراتية للبث المباشر */}
      <section className="nx-panel relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950/40 p-5 sm:p-7 border-sky-500/20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/35 bg-rose-500/15 px-3 py-1 text-xs font-black text-rose-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
                </span>
                {isAr ? 'بث استخباري مباشر (LIVE INTELLIGENCE)' : 'LIVE INTELLIGENCE STREAM'}
              </span>

              <span className="inline-flex items-center gap-1 rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 text-xs font-bold text-sky-300">
                <Sparkles className="h-3 w-3 text-sky-400" />
                <span>{isAr ? 'تحليل المشاعر الجيوسياسي (Gemini AI)' : 'Gemini AI Sentiment Tagging'}</span>
              </span>
            </div>

            <h2 className="m-0 text-xl font-black text-white sm:text-2xl flex items-center gap-2.5">
              <Radio className="h-6 w-6 text-rose-500 animate-pulse" />
              <span>{isAr ? 'البث المباشر للأحداث العالمية — الجزيرة، BBC، وDW' : 'Global Intelligence Stream — BBC, DW & Al Jazeera'}</span>
            </h2>

            <p className="m-0 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isAr
                ? 'رصد ومزامنة فورية على مدار الساعة لجميع الأحداث الجيوسياسية المباشرة من كبرى الشبكات الدولية، مع تحليل ذكاء اصطناعي فوري لدرجة التصعيد ومؤشر المشاعر لكل عنوان.'
                : 'Real-time aggregated intelligence updates from BBC, DW, and Al Jazeera with AI-powered sentiment analysis and threat classification.'}
            </p>
          </div>

          {/* حالة المصادر والتحديث اليدوي */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-xs space-y-1">
              <div className="flex items-center gap-2 text-slate-400">
                <Globe2 className="h-3.5 w-3.5 text-sky-400" />
                <span>{isAr ? 'المصادر المتصلة:' : 'Feeds Active:'}</span>
                <span className="font-bold text-slate-200">{sourceStatus || 'BBC + DW + Al Jazeera'}</span>
              </div>
              {lastUpdated && (
                <div className="text-[10px] text-slate-500 font-mono">
                  {isAr ? 'آخر تحديث:' : 'Updated:'} {lastUpdated.toLocaleTimeString()}
                </div>
              )}
            </div>

            <button
              onClick={loadStream}
              disabled={loading}
              className="flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-sky-600/25 transition hover:bg-sky-500 disabled:opacity-50"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              <span>{isAr ? 'تحديث البث الآن' : 'Refresh Feed'}</span>
            </button>
          </div>
        </div>

        {/* شريط الإحصائيات المصنفة */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-4 mt-4 border-t border-slate-800/80">
          <div className="rounded-xl border border-rose-500/25 bg-rose-950/15 p-2 text-center">
            <span className="text-[10px] font-bold text-rose-300 block">{isAr ? 'تصعيد عسكري' : 'Escalation'}</span>
            <span className="font-mono text-base font-black text-white">{stats.escalation}</span>
          </div>
          <div className="rounded-xl border border-orange-500/25 bg-orange-950/15 p-2 text-center">
            <span className="text-[10px] font-bold text-orange-300 block">{isAr ? 'أزمات طوارئ' : 'Crises'}</span>
            <span className="font-mono text-base font-black text-white">{stats.crisis}</span>
          </div>
          <div className="rounded-xl border border-sky-500/25 bg-sky-950/15 p-2 text-center">
            <span className="text-[10px] font-bold text-sky-300 block">{isAr ? 'دبلوماسية' : 'Diplomacy'}</span>
            <span className="font-mono text-base font-black text-white">{stats.diplomacy}</span>
          </div>
          <div className="rounded-xl border border-amber-500/25 bg-amber-950/15 p-2 text-center">
            <span className="text-[10px] font-bold text-amber-300 block">{isAr ? 'عقوبات واقتصاد' : 'Sanctions'}</span>
            <span className="font-mono text-base font-black text-white">{stats.sanctions}</span>
          </div>
          <div className="rounded-xl border border-indigo-500/25 bg-indigo-950/15 p-2 text-center col-span-2 sm:col-span-1">
            <span className="text-[10px] font-bold text-indigo-300 block">{isAr ? 'شراكات وتحالفات' : 'Alliances'}</span>
            <span className="font-mono text-base font-black text-white">{stats.alliance}</span>
          </div>
        </div>
      </section>

      {/* شريط الفلاتر للمصادر والمشاعر */}
      <div className="space-y-2.5">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* فلاتر المصادر */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            <span className="text-xs font-bold text-slate-400 shrink-0 me-1">
              {isAr ? 'المصدر:' : 'Source:'}
            </span>
            {[
              { id: 'all', label: isAr ? 'الكل' : 'All' },
              { id: 'aljazeera', label: isAr ? 'الجزيرة' : 'Al Jazeera' },
              { id: 'bbc', label: 'BBC' },
              { id: 'dw', label: 'DW' },
              { id: 'france24', label: isAr ? 'فرانس 24' : 'France 24' },
            ].map((src) => (
              <button
                key={src.id}
                onClick={() => setSelectedSource(src.id)}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition whitespace-nowrap ${
                  selectedSource === src.id
                    ? 'bg-sky-600 text-white shadow'
                    : 'border border-slate-800 bg-slate-900/80 text-slate-300 hover:border-slate-700 hover:text-white'
                }`}
              >
                {src.label}
              </button>
            ))}
          </div>

          {/* حقل البحث */}
          <div className="relative min-w-[260px]">
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAr ? 'ابحث في العناوين الحية...' : 'Search live stream...'}
              className="w-full rounded-xl border border-slate-800 bg-slate-900/90 py-2 ps-9 pe-3 text-xs text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
            />
          </div>
        </div>

        {/* فلاتر تصنيف المشاعر الجيوسياسية */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          <span className="text-xs font-bold text-slate-400 shrink-0 me-1">
            {isAr ? 'نوع الحدث / المشاعر:' : 'Sentiment Tag:'}
          </span>
          {[
            { id: 'all', label: isAr ? 'كافة المشاعر' : 'All Tags' },
            { id: 'ESCALATION', label: isAr ? 'تصعيد عسكري' : 'Escalation' },
            { id: 'CRISIS', label: isAr ? 'أزمة طارئة' : 'Crisis' },
            { id: 'DIPLOMACY', label: isAr ? 'دبلوماسية وسلام' : 'Diplomacy' },
            { id: 'ECONOMIC_PRESSURE', label: isAr ? 'عقوبات واقتصاد' : 'Sanctions' },
            { id: 'STRATEGIC_ALLIANCE', label: isAr ? 'تحالف استراتيجي' : 'Strategic Alliance' },
          ].map((tag) => (
            <button
              key={tag.id}
              onClick={() => setSelectedSentiment(tag.id)}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition whitespace-nowrap ${
                selectedSentiment === tag.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>

      {/* قائمة البث الإخباري الاستخباري الحي */}
      <div className="space-y-3">
        {loading && news.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 text-center text-slate-400 space-y-3">
            <RefreshCw className="h-8 w-8 animate-spin text-sky-400 mx-auto" />
            <p className="m-0 text-sm font-semibold">{isAr ? 'جارٍ الاتصال بروافد الأخبار العالمية وتحليل المشاعر…' : 'Connecting to global intelligence feeds…'}</p>
          </div>
        ) : filteredNews.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 text-center text-slate-400">
            <p className="m-0 text-sm">{isAr ? 'لا توجد نتائج تطابق معايير التصفية الحالية.' : 'No headlines match the selected filters.'}</p>
          </div>
        ) : (
          filteredNews.map((item, idx) => {
            const sentiment = item.sentimentMeta;
            return (
              <article
                key={item.key || idx}
                className="group relative rounded-2xl border border-slate-800/90 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-950 p-4 transition-all hover:border-sky-500/40 hover:shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* شارة القناة الإخبارية */}
                    <span
                      className={`rounded-md border px-2.5 py-0.5 text-[11px] font-black tracking-wide ${
                        NEWS_SOURCES_META[item.sourceCode]?.badge || 'bg-slate-800 text-slate-200 border-slate-700'
                      }`}
                    >
                      {isAr ? item.sourceNameAr || item.source : item.sourceNameEn || item.source}
                    </span>

                    {/* وسم تحليل المشاعر المتطور */}
                    {sentiment && (
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${sentiment.badgeClass}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${sentiment.dotClass}`} />
                        <span>{isAr ? sentiment.ar : sentiment.en}</span>
                        {typeof item.sentimentScore === 'number' && (
                          <span className="font-mono text-[9px] opacity-80">
                            ({item.sentimentScore > 0 ? `+${item.sentimentScore}` : item.sentimentScore})
                          </span>
                        )}
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] text-slate-500 font-mono">
                    {new Date(item.published).toLocaleTimeString(isAr ? 'ar-SA' : 'en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>

                {/* نص العنوان المترجم لغوياً بالكامل */}
                <h3 className="m-0 text-sm sm:text-base font-bold text-white group-hover:text-sky-200 transition leading-snug">
                  {translateText(item.text, lang)}
                </h3>

                {/* التذييل والرابط المباشر للمقال الأصلي */}
                <div className="mt-3 flex items-center justify-between gap-3 border-t border-slate-800/80 pt-2 text-xs">
                  <span className="text-[10px] text-slate-500">
                    {item.analyzedBy && (
                      <span>
                        {isAr ? 'التحليل:' : 'Engine:'} <b className="text-slate-400">{item.analyzedBy}</b>
                      </span>
                    )}
                  </span>

                  {item.href && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-sky-400 hover:text-sky-300 transition text-[11px]"
                    >
                      <span>{isAr ? 'قراءة التقرير في المصدر' : 'Read original report'}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </article>
            );
          })
        )}
      </div>
    </div>
  );
}
