import React, { useState, useEffect } from 'react';
import { Radio, AlertCircle } from 'lucide-react';

export default function NewsTickerBar({ tickerItems, lang }) {
  const isAr = lang === 'ar';
  const [liveNews, setLiveNews] = useState(tickerItems);

  // Simulate automated live updates fetching from GDELT / RSS every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const timestamp = new Date().toLocaleTimeString();
      const extraNews = isAr
        ? `[تحديث حي تلقائي ${timestamp}]: رصد تحركات عسكرية جديدة وتحالفات اقتصادية في قمة بريكس وزيادة تدفقات الاستثمار الأجنبي.`
        : `[Live Auto-Update ${timestamp}]: Detected new strategic maneuvers, economic alignments at BRICS summit, and shifting FDI flows.`;
      
      setLiveNews(prev => [extraNews, ...prev.slice(0, 3)]);
    }, 45000);

    return () => clearInterval(interval);
  }, [isAr]);

  return (
    <div className="bg-slate-950 text-slate-300 border-b border-slate-800 px-4 py-2 flex items-center gap-3 overflow-hidden text-sm">
      <div className="flex items-center gap-1.5 bg-red-600/20 text-red-400 border border-red-500/30 px-2.5 py-1 rounded-md shrink-0 font-bold text-xs animate-pulse">
        <Radio className="w-3.5 h-3.5" />
        <span>{isAr ? 'البث الحي الجيوسياسي (GDELT / RSS)' : 'Live Geopolitical Feed'}</span>
      </div>
      <div className="whitespace-nowrap overflow-hidden text-ellipsis flex-1 text-slate-200">
        <span className="inline-block animate-marquee">
          {liveNews.join(' ✦ ')}
        </span>
      </div>
    </div>
  );
}
