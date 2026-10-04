import { useCallback, useEffect, useRef, useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { fetchGeoNews } from '../services/news.js';

const REFRESH_MS = 10 * 60 * 1000;

/**
 * Scrolling speed in px/second. Lower = slower and heavier to read.
 *
 * The keyframe travels translateX(-50%), so a fixed duration makes the apparent speed
 * depend on how many headlines loaded: fast with a full live feed, sluggish with the
 * 4-item fallback. Deriving the duration from the measured track width keeps the
 * perceived speed constant regardless of feed length.
 */
const SPEED_PX_PER_SEC = 80;
const MIN_DURATION_S = 45;
const MAX_DURATION_S = 260;

// نثبّت اللغة هنا صراحةً، وإلا عرض المتصفح العربي الوقت بأرقام هندية (٤:٠٧).
const TIME_LOCALE = 'en-GB';

export default function NewsTickerBar({ tickerItems, lang }) {
  const isAr = lang === 'ar';
  const [items, setItems] = useState(tickerItems);
  const [live, setLive] = useState(false);
  const [source, setSource] = useState(null);
  const [updatedAt, setUpdatedAt] = useState(null);
  const [paused, setPaused] = useState(false);
  const [busy, setBusy] = useState(false);
  const trackRef = useRef(null);
  const observerRef = useRef(null);
  const abortRef = useRef(null);

  const loadLiveFeed = useCallback(async () => {
    abortRef.current?.abort();
    const ac = new AbortController();
    abortRef.current = ac;
    setBusy(true);
    try {
      const { items: live, source: src } = await fetchGeoNews(lang, { signal: ac.signal });
      if (!live.length) throw new Error('empty feed');
      setItems(live);
      setSource(src);
      setLive(true);
      setUpdatedAt(new Date());
    } catch {
      setLive(false);
      setSource(null);
      setUpdatedAt(null);
    } finally {
      setBusy(false);
    }
  }, [lang]);

  useEffect(() => {
    loadLiveFeed();
    const id = setInterval(loadLiveFeed, REFRESH_MS);
    return () => {
      clearInterval(id);
      abortRef.current?.abort();
    };
  }, [loadLiveFeed]);

  const marqueeItems = items.map((item) =>
    typeof item === 'string' ? { key: item, text: item } : item,
  );

  const [durationS, setDurationS] = useState(MIN_DURATION_S);

  // Measured in a callback ref rather than an effect so it runs during the commit
  // phase (before paint) and never renders twice. ResizeObserver covers later changes:
  // the track is nowrap inline-block, so its width grows with the headline count.
  const measureTrack = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    // The list is rendered twice for a seamless loop, so one cycle is half the width.
    const cycleWidth = el.scrollWidth / 2;
    if (!cycleWidth) return;
    const next = cycleWidth / SPEED_PX_PER_SEC;
    setDurationS(Math.min(MAX_DURATION_S, Math.max(MIN_DURATION_S, next)));
  }, []);

  const attachTrack = useCallback(
    (el) => {
      trackRef.current = el;
      observerRef.current?.disconnect();
      observerRef.current = null;
      if (!el) return;
      measureTrack();
      observerRef.current = new ResizeObserver(measureTrack);
      observerRef.current.observe(el);
    },
    [measureTrack],
  );

  const sourceLabel = live
    ? `${source ?? 'live'} · ${updatedAt?.toLocaleTimeString(TIME_LOCALE, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })}`
    : isAr
      ? 'مصدر احتياطي'
      : 'fallback feed';

  return (
    <div
      className="flex items-center gap-3 border-b border-slate-800 bg-slate-950/70 px-4 py-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex shrink-0 items-center gap-2">
        <span className="nx-chip border border-red-500/30 bg-red-500/10 text-red-300">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-red-400" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
          </span>
          {isAr ? 'البث المباشر' : 'LIVE'}
        </span>

        <button
          onClick={loadLiveFeed}
          disabled={busy}
          title={isAr ? 'تحديث الآن' : 'Refresh now'}
          className="grid h-6 w-6 place-items-center rounded-md text-slate-500 transition hover:bg-slate-800 hover:text-sky-300 disabled:opacity-50"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${busy ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <div className="nx-marquee-track relative min-w-0 flex-1 overflow-hidden">
        <div
          ref={attachTrack}
          className="animate-marquee"
          style={{
            animationDuration: `${durationS}s`,
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {[0, 1].map((dup) => (
            <span key={dup} className="inline-block">
              {marqueeItems.map((item, i) => (
                <span
                  key={`${dup}-${item.key ?? i}`}
                  dir={isAr ? 'rtl' : 'ltr'}
                  className="inline-block"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.source || item.text}
                      className="px-4 text-[13px] text-slate-300 transition hover:text-sky-300"
                    >
                      {item.text}
                      {item.source ? <span className="text-slate-500"> · {item.source}</span> : null}
                    </a>
                  ) : (
                    <span className="px-4 text-[13px] text-slate-300">{item.text}</span>
                  )}
                  <span className="text-slate-700">|</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <span className="hidden shrink-0 text-[11px] text-slate-500 md:inline">{sourceLabel}</span>
    </div>
  );
}
