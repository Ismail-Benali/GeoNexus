import { useCallback, useEffect, useRef, useState } from 'react';
import { RefreshCw } from 'lucide-react';

const GDELT_ENDPOINT = 'https://api.gdeltproject.org/api/v2/doc/doc';
const GDELT_QUERIES = {
  ar: '(geopolitics OR-war OR sanctions OR coalition) sourcelang:english',
  en: '(geopolitics OR war OR sanctions OR coalition) sourcelang:english',
};

export default function NewsTickerBar({ tickerItems, lang }) {
  const isAr = lang === 'ar';
  const [items, setItems] = useState(tickerItems);
  const [live, setLive] = useState(false);
  const [updatedAt, setUpdatedAt] = useState(null);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);

  const loadLiveFeed = useCallback(async () => {
    try {
      const params = new URLSearchParams({
        query: GDELT_QUERIES[lang] ?? GDELT_QUERIES.en,
        mode: 'ArtList',
        format: 'json',
        maxrecords: '30',
        sort: 'DateDesc',
        timespan: '6h',
      });
      const res = await fetch(`${GDELT_ENDPOINT}?${params}`, { mode: 'cors' });
      if (!res.ok) throw new Error(`GDELT ${res.status}`);
      const json = await res.json();
      const articles = (json.articles ?? [])
        .filter((a) => a.title && a.domain)
        .slice(0, 12)
        .map((a) => ({
          key: a.url,
          text: isAr
            ? `${a.title} — ${a.domain}`
            : `${a.title} — ${a.domain}`,
          href: a.url,
        }));
      if (!articles.length) throw new Error('empty feed');
      setItems(articles);
      setLive(true);
      setUpdatedAt(new Date());
    } catch {
      setLive(false);
      setUpdatedAt(null);
    }
  }, [lang, isAr]);

  useEffect(() => {
    const id = setInterval(loadLiveFeed, 10 * 60 * 1000);
    loadLiveFeed();
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const marqueeItems = items.map((item) =>
    typeof item === 'string' ? { key: item, text: item } : item,
  );

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
          title={isAr ? 'تحديث الآن' : 'Refresh now'}
          className="grid h-6 w-6 place-items-center rounded-md text-slate-500 transition hover:bg-slate-800 hover:text-sky-300"
        >
          <RefreshCw className="h-3.5 w-3.5" />
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
                      className="px-4 text-[13px] text-slate-300 transition hover:text-sky-300"
                    >
                      {item.text}
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

      <span className="hidden shrink-0 text-[11px] text-slate-500 md:inline">
        {live
          ? `GDELT · ${updatedAt?.toLocaleTimeString()}`
          : isAr
            ? 'مصدر احتياطي'
            : 'fallback feed'}
      </span>
    </div>
  );
}
