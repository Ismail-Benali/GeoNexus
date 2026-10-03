import { useCallback, useEffect, useRef, useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { fetchGeoNews } from '../services/news.js';

const REFRESH_MS = 10 * 60 * 1000;

export default function NewsTickerBar({ tickerItems, lang }) {
  const isAr = lang === 'ar';
  const [items, setItems] = useState(tickerItems);
  const [live, setLive] = useState(false);
  const [source, setSource] = useState(null);
  const [updatedAt, setUpdatedAt] = useState(null);
  const [paused, setPaused] = useState(false);
  const [busy, setBusy] = useState(false);
  const trackRef = useRef(null);
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

  const sourceLabel = live
    ? `${source ?? 'live'} · ${updatedAt?.toLocaleTimeString()}`
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
          ref={trackRef}
          className="animate-marquee"
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
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
