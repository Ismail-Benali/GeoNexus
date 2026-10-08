import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import {
  Radio,
  RefreshCw,
  Search,
  ExternalLink,
  Globe2,
  Sparkles,
  Play,
  Pause,
  Clock,
  Flame,
  CheckCircle2,
  Copy,
  Share2,
} from 'lucide-react';
import { fetchIntelligenceStream, NEWS_SOURCES_META } from '../services/news.js';
import { translateText } from '../utils/translator.js';

export default function GlobalIntelligenceStream({ lang = 'ar' }) {
  const isAr = lang === 'ar';
  const [news, setNews] = useState([]);
  const [sourceStatus, setSourceStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedSource, setSelectedSource] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedSentiment, setSelectedSentiment] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [lastUpdated, setLastUpdated] = useState(null);

  // حالة التحديث التلقائي اللحظي ومؤقت العد التنازلي
  const [refreshIntervalSec, setRefreshIntervalSec] = useState(60); // 30 | 60 | 120
  const [secondsRemaining, setSecondsRemaining] = useState(60);
  const [isAutoRefreshActive, setIsAutoRefreshActive] = useState(true);
  const [copiedKey, setCopiedKey] = useState(null);

  const timerRef = useRef(null);

  const loadStream = useCallback(async () => {
    setLoading(true);
    try {
      const { items, source } = await fetchIntelligenceStream(lang);
      if (items && items.length > 0) {
        setNews(items);
        setSourceStatus(source);
        setLastUpdated(new Date());
      }
    } catch {
      // keep fallback
    } finally {
      setLoading(false);
      setSecondsRemaining(refreshIntervalSec);
    }
  }, [lang, refreshIntervalSec]);

  // إدارة التحديث التلقائي الدوري مع مؤقت الثواني
  useEffect(() => {
    loadStream();
  }, [loadStream]);

  useEffect(() => {
    if (!isAutoRefreshActive) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          loadStream();
          return refreshIntervalSec;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoRefreshActive, refreshIntervalSec, loadStream]);

  const handleCopyLink = (url, key) => {
    if (!url) return;
    navigator.clipboard?.writeText(url);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const countriesFilterList = [
    { id: 'all', labelAr: 'كافة الدول', labelEn: 'All Countries' },
    { id: 'sa', labelAr: 'المملكة العربية السعودية', labelEn: 'Saudi Arabia' },
    { id: 'eg', labelAr: 'جمهورية مصر العربية', labelEn: 'Egypt' },
    { id: 'ae', labelAr: 'الإمارات العربية المتحدة', labelEn: 'UAE' },
    { id: 'qa', labelAr: 'دولة قطر', labelEn: 'Qatar' },
    { id: 'us', labelAr: 'الولايات المتحدة', labelEn: 'United States' },
    { id: 'cn', labelAr: 'الصين', labelEn: 'China' },
    { id: 'ru', labelAr: 'روسيا', labelEn: 'Russia' },
    { id: 'tr', labelAr: 'تركيا', labelEn: 'Turkey' },
    { id: 'ir', labelAr: 'إيران', labelEn: 'Iran' },
    { id: 'gb', labelAr: 'المملكة المتحدة', labelEn: 'United Kingdom' },
    { id: 'fr', labelAr: 'فرنسا', labelEn: 'France' },
    { id: 'de', labelAr: 'ألمانيا', labelEn: 'Germany' },
  ];

  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      const matchesSource = selectedSource === 'all' || item.sourceCode === selectedSource;
      const matchesSentiment = selectedSentiment === 'all' || item.sentiment === selectedSentiment;

      // تصفية حسب الدولة
      let matchesCountry = true;
      if (selectedCountry !== 'all') {
        const textLower = (item.text || '').toLowerCase();
        const cid = selectedCountry;
        matchesCountry =
          item.countryKey === cid ||
          (cid === 'sa' && (textLower.includes('سعود') || textLower.includes('saudi') || textLower.includes('الرياض'))) ||
          (cid === 'eg' && (textLower.includes('مصر') || textLower.includes('egypt') || textLower.includes('القاهرة'))) ||
          (cid === 'ae' && (textLower.includes('إمارات') || textLower.includes('uae') || textLower.includes('دبي') || textLower.includes('أبوظبي'))) ||
          (cid === 'qa' && (textLower.includes('قطر') || textLower.includes('qatar') || textLower.includes('الدوحة'))) ||
          (cid === 'us' && (textLower.includes('أمريك') || textLower.includes('واشنطن') || textLower.includes('us ') || textLower.includes('بيدن') || textLower.includes('ترامب'))) ||
          (cid === 'cn' && (textLower.includes('صين') || textLower.includes('china') || textLower.includes('بكين'))) ||
          (cid === 'ru' && (textLower.includes('روسي') || textLower.includes('russia') || textLower.includes('موسكو') || textLower.includes('بوتين'))) ||
          (cid === 'tr' && (textLower.includes('تركي') || textLower.includes('turkey') || textLower.includes('أنقرة') || textLower.includes('أردوغان'))) ||
          (cid === 'ir' && (textLower.includes('إيران') || textLower.includes('iran') || textLower.includes('طهران'))) ||
          (cid === 'gb' && (textLower.includes('بريطاني') || textLower.includes('uk') || textLower.includes('لندن'))) ||
          (cid === 'fr' && (textLower.includes('فرنس') || textLower.includes('france') || textLower.includes('باريس'))) ||
          (cid === 'de' && (textLower.includes('ألمان') || textLower.includes('germany') || textLower.includes('برلين')));
      }

      const matchesSearch =
        !searchQuery ||
        item.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.sourceNameAr && item.sourceNameAr.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.sourceNameEn && item.sourceNameEn.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesSource && matchesSentiment && matchesCountry && matchesSearch;
    });
  }, [news, selectedSource, selectedSentiment, selectedCountry, searchQuery]);

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

  const progressPercent = Math.max(0, Math.min(100, ((refreshIntervalSec - secondsRemaining) / refreshIntervalSec) * 100));

  return (
    <div className="space-y-5" dir={isAr ? 'rtl' : 'ltr'}>
      {/* الترويسة الاستخباراتية للبث الإخباري الحي والأوتوماتيكي */}
      <section className="nx-panel relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950/40 p-5 sm:p-7 border-sky-500/20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/35 bg-rose-500/15 px-3 py-1 text-xs font-black text-rose-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
                </span>
                {isAr ? 'بث استخباري مباشر وتلقائي (AUTO-FETCH LIVE)' : 'AUTO-REFRESHING INTELLIGENCE FEED'}
              </span>

              <span className="inline-flex items-center gap-1 rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 text-xs font-bold text-sky-300">
                <Sparkles className="h-3 w-3 text-sky-400" />
                <span>{isAr ? 'روابط المصادر الرسمية موثقة' : 'Verified Direct Publisher Links'}</span>
              </span>
            </div>

            <h2 className="m-0 text-xl font-black text-white sm:text-2xl flex items-center gap-2.5">
              <Radio className="h-6 w-6 text-rose-500 animate-pulse" />
              <span>
                {isAr
                  ? 'مركز الرصد الإخباري الاستخباراتي التلقائي والروابط الرسمية'
                  : 'Automated Global Intelligence Wire with Direct Verified Links'}
              </span>
            </h2>

            <p className="m-0 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isAr
                ? 'جلب وتحديث تلقائي على مدار الساعة لآخر الأنباء والتقارير الجيوسياسية من كبرى الشبكات العالمية مع روابط المصادر الأصلية المباشرة وتحليل المشاعر وتصنيف الدول.'
                : 'Automated, interval-driven ingestion of world-wide geopolitical wires with direct source links, sentiment tags, and country filters.'}
            </p>
          </div>

          {/* لوحة التحكم بالمؤقت التلقائي والتحديث اللحظي */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            {/* بطاقة المؤقت التلقائي التفاعلية */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3 text-xs space-y-2 shadow-inner">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Clock className="h-3.5 w-3.5 text-sky-400" />
                  <span className="font-bold">
                    {isAr ? 'التحديث التلقائي:' : 'Auto Sync:'}
                  </span>
                  <span className={`font-mono font-bold ${isAutoRefreshActive ? 'text-emerald-400' : 'text-slate-500'}`}>
                    {isAutoRefreshActive ? `${secondsRemaining}s` : (isAr ? 'موقوف' : 'Paused')}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setIsAutoRefreshActive(!isAutoRefreshActive)}
                    title={isAutoRefreshActive ? (isAr ? 'إيقاف التحديث التلقائي مؤقتاً' : 'Pause Auto-Sync') : (isAr ? 'استئناف التحديث التلقائي' : 'Resume Auto-Sync')}
                    className="grid h-6 w-6 place-items-center rounded-lg border border-slate-700 bg-slate-900 text-slate-300 hover:text-white hover:border-sky-500 transition"
                  >
                    {isAutoRefreshActive ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3 text-emerald-400" />}
                  </button>

                  <select
                    value={refreshIntervalSec}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setRefreshIntervalSec(val);
                      setSecondsRemaining(val);
                    }}
                    className="rounded-lg border border-slate-700 bg-slate-900 px-2 py-0.5 text-[10px] font-mono font-bold text-slate-300 focus:outline-none focus:border-sky-500"
                  >
                    <option value={30}>30s</option>
                    <option value={60}>60s</option>
                    <option value={120}>120s</option>
                  </select>
                </div>
              </div>

              {/* شريط التقدم المرئي للثواني */}
              {isAutoRefreshActive && (
                <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 transition-all duration-1000 ease-linear rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              )}

              <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono pt-0.5">
                <span>{sourceStatus || 'Multi-feed Wires'}</span>
                {lastUpdated && <span>{lastUpdated.toLocaleTimeString()}</span>}
              </div>
            </div>

            <button
              onClick={loadStream}
              disabled={loading}
              className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 px-4 py-3 text-xs font-black text-white shadow-lg shadow-sky-600/30 transition hover:from-sky-500 hover:to-indigo-500 disabled:opacity-50"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              <span>{isAr ? 'تحديث الآن' : 'Refresh Now'}</span>
            </button>
          </div>
        </div>

        {/* شريط الإحصائيات المصنفة للأخبار الحية */}
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

      {/* شريط الفلاتر للمصادر والدول والبحث */}
      <div className="space-y-3">
        {/* صف الفلاتر الأول: المصادر الإخبارية وحقل البحث */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* فلاتر المصادر */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            <span className="text-xs font-bold text-slate-400 shrink-0 me-1">
              {isAr ? 'المصدر:' : 'Source:'}
            </span>
            {[
              { id: 'all', label: isAr ? 'الكل' : 'All' },
              { id: 'aljazeera', label: isAr ? 'الجزيرة' : 'Al Jazeera' },
              { id: 'reuters', label: isAr ? 'رويترز' : 'Reuters' },
              { id: 'bbc', label: 'BBC' },
              { id: 'dw', label: 'DW' },
              { id: 'france24', label: isAr ? 'فرانس 24' : 'France 24' },
              { id: 'bloomberg', label: isAr ? 'بلومبرغ' : 'Bloomberg' },
              { id: 'spa', label: isAr ? 'واس' : 'SPA' },
              { id: 'wam', label: isAr ? 'وام' : 'WAM' },
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

          {/* حقل البحث اللحظي */}
          <div className="relative min-w-[260px]">
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAr ? 'ابحث في العناوين والتقارير الحية...' : 'Search live stream headlines...'}
              className="w-full rounded-xl border border-slate-800 bg-slate-900/90 py-2 ps-9 pe-3 text-xs text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
            />
          </div>
        </div>

        {/* صف الفلاتر الثاني: تصفية الدولة المستهدفة */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          <span className="text-xs font-bold text-slate-400 shrink-0 me-1">
            {isAr ? 'الدولة:' : 'Country:'}
          </span>
          {countriesFilterList.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCountry(c.id)}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition whitespace-nowrap ${
                selectedCountry === c.id
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {isAr ? c.labelAr : c.labelEn}
            </button>
          ))}
        </div>

        {/* صف الفلاتر الثالث: المشاعر الجيوسياسية */}
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

      {/* قائمة البث الإخباري الاستخباري الحي مع الروابط المباشرة */}
      <div className="space-y-3">
        {loading && news.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 text-center text-slate-400 space-y-3">
            <RefreshCw className="h-8 w-8 animate-spin text-sky-400 mx-auto" />
            <p className="m-0 text-sm font-semibold">
              {isAr ? 'جارٍ الاتصال بروافد الأخبار العالمية وتحليل المشاعر التلقائي…' : 'Connecting to global intelligence feeds…'}
            </p>
          </div>
        ) : filteredNews.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 text-center text-slate-400">
            <p className="m-0 text-sm">
              {isAr ? 'لا توجد عناوين تطابق معايير التصفية الحالية.' : 'No headlines match the selected filters.'}
            </p>
          </div>
        ) : (
          filteredNews.map((item, idx) => {
            const sentiment = item.sentimentMeta;
            const itemKey = item.key || item.href || idx;
            const isCopied = copiedKey === itemKey;

            return (
              <article
                key={itemKey}
                className="group relative rounded-2xl border border-slate-800/90 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-950 p-4 transition-all hover:border-sky-500/40 hover:shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-2.5">
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
                    {item.published
                      ? new Date(item.published).toLocaleTimeString(isAr ? 'ar-SA' : 'en-US', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })
                      : (isAr ? 'مباشر الآن' : 'Just Now')}
                  </span>
                </div>

                {/* نص العنوان المترجم لغوياً بالكامل */}
                <h3 className="m-0 text-sm sm:text-base font-bold text-white group-hover:text-sky-200 transition leading-snug">
                  {translateText(item.text, lang)}
                </h3>

                {/* التذييل والأزرار المباشرة لفتح الرابط في المصدر الأصلي ونسخه */}
                <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800/80 pt-2.5 text-xs">
                  <div className="flex items-center gap-2 text-[10px] text-slate-500">
                    <Globe2 className="h-3 w-3 text-slate-400" />
                    <span>{item.source || 'Verified Wire'}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.href && (
                      <button
                        onClick={() => handleCopyLink(item.href, itemKey)}
                        title={isAr ? 'نسخ رابط الخبر' : 'Copy article URL'}
                        className="inline-flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-900/80 px-2 py-1 text-[11px] text-slate-300 hover:text-white hover:border-slate-600 transition"
                      >
                        {isCopied ? (
                          <>
                            <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                            <span className="text-emerald-400">{isAr ? 'تم النسخ' : 'Copied'}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3 text-slate-400" />
                            <span>{isAr ? 'نسخ الرابط' : 'Copy'}</span>
                          </>
                        )}
                      </button>
                    )}

                    {item.href && (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-sky-500/40 bg-sky-500/15 px-3 py-1 font-bold text-sky-300 hover:bg-sky-500/25 hover:border-sky-400 transition text-[11px] shadow-sm"
                      >
                        <span>{isAr ? 'قراءة الخبر في المصدر الأصلي' : 'Open Direct Source Link'}</span>
                        <ExternalLink className="h-3 w-3 text-sky-300" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>
    </div>
  );
}
