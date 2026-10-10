import { useState, useMemo } from 'react';
import {
  Radio,
  Tv,
  FileText,
  Shield,
  Search,
  ExternalLink,
  TrendingUp,
  CheckCircle2,
  Clock,
  BookOpen,
} from 'lucide-react';
import { getCountryMediaIntelligence } from '../data/countryMediaIntelligenceDB';

export default function CountryMediaIntelligenceHub({ country, lang = 'ar' }) {
  const isAr = lang === 'ar';
  const mediaData = getCountryMediaIntelligence(country, lang);
  const [activeType, setActiveType] = useState('all'); // 'all' | 'agency' | 'tv' | 'defense_press'
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChannels = useMemo(() => {
    return (mediaData.channels || []).filter((ch) => {
      const matchType = activeType === 'all' || ch.type === activeType;
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        !q ||
        ch.nameAr?.toLowerCase().includes(q) ||
        ch.nameEn?.toLowerCase().includes(q) ||
        ch.coverageFocusAr?.toLowerCase().includes(q);
      return matchType && matchSearch;
    });
  }, [mediaData.channels, activeType, searchQuery]);

  const filteredDispatches = useMemo(() => {
    return (mediaData.monitoredDispatches || []).filter((disp) => {
      const q = searchQuery.trim().toLowerCase();
      return (
        !q ||
        disp.headlineAr?.toLowerCase().includes(q) ||
        disp.headlineEn?.toLowerCase().includes(q) ||
        disp.strategicInsightAr?.toLowerCase().includes(q) ||
        disp.sourceName?.toLowerCase().includes(q)
      );
    });
  }, [mediaData.monitoredDispatches, searchQuery]);

  return (
    <div className="space-y-4" dir={isAr ? 'rtl' : 'ltr'}>
      {/* الترويسة الرئيسية لمركز الرصد الإعلامي والاستخباري */}
      <div className="relative overflow-hidden rounded-2xl border border-sky-500/35 bg-gradient-to-r from-slate-900 via-sky-950/30 to-slate-950 p-4 sm:p-5 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20">
              <Radio className="h-6 w-6 animate-pulse" />
              <span className="absolute -top-1 -end-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="m-0 text-base sm:text-lg font-black text-white">
                  {isAr
                    ? `رادار الرصد وجمع المعلومات من القنوات الإعلامية لـ ${country?.name || mediaData.nameAr}`
                    : `State Media Intelligence & Broadcast Monitor: ${country?.name || mediaData.nameEn}`}
                </h3>
                <span className="rounded-md border border-emerald-500/40 bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
                  LIVE OSINT
                </span>
              </div>
              <p className="m-0 mt-1 text-xs text-slate-300">
                {isAr
                  ? 'رصد متواصل للوكالات الإخبارية الرسمية، شبكات التلفزة السيادية، والمنصات العسكرية لتحليل نبرة الخطاب والأجندة الاستراتيجية.'
                  : 'Real-time monitoring of official news agencies, state broadcast networks, and defense press to analyze narrative trends.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-xl border border-sky-500/30 bg-sky-950/40 px-3 py-1.5 text-xs font-bold text-sky-300">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              <span>{mediaData.channels?.length || 0} {isAr ? 'منصة سيادية مربوطة' : 'Verified Feeds'}</span>
            </span>
          </div>
        </div>

        {/* العقيدة الإعلامية للدولة */}
        {mediaData.mediaDoctrineAr && (
          <div className="mt-3.5 rounded-xl border border-sky-500/20 bg-slate-900/80 p-3 text-xs leading-relaxed text-slate-300">
            <span className="font-bold text-sky-400 block mb-1">
              {isAr ? 'العقيدة الإعلامية واستراتيجية الاتصال السيادي للدولة:' : 'State Media Doctrine & Strategic Communications Policy:'}
            </span>
            <p className="m-0 leading-relaxed">
              {isAr ? mediaData.mediaDoctrineAr : (mediaData.mediaDoctrineEn || mediaData.mediaDoctrineAr)}
            </p>
          </div>
        )}
      </div>

      {/* شريط البحث وتصفية القنوات */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
        <div className="flex items-center gap-1.5 flex-wrap">
          {[
            { id: 'all', labelAr: 'كافة المنصات', labelEn: 'All Feeds', icon: Radio },
            { id: 'agency', labelAr: 'وكالات الأنباء', labelEn: 'News Agencies', icon: FileText },
            { id: 'tv', labelAr: 'التلفزيون الرسمي', labelEn: 'State TV', icon: Tv },
            { id: 'defense_press', labelAr: 'الصحافة العسكرية', labelEn: 'Defense Press', icon: Shield },
          ].map(({ id, labelAr, labelEn, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveType(id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeType === id
                  ? 'bg-sky-600 text-white shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{isAr ? labelAr : labelEn}</span>
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="absolute start-2.5 top-2.5 h-3.5 w-3.5 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isAr ? 'بحث في القنوات والنشرات...' : 'Search media feeds & wires...'}
            className="w-full rounded-lg border border-slate-800 bg-slate-950/80 ps-8 pe-3 py-1.5 text-xs text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
          />
        </div>
      </div>

      {/* شبكة بطاقات القنوات الإعلامية الرسمية */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredChannels.map((channel, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5 space-y-2.5 hover:border-sky-500/40 transition flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-2.5 border-b border-slate-800 pb-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="relative h-11 w-11 shrink-0 grid place-items-center rounded-xl bg-slate-900 border border-slate-700/80 p-1 overflow-hidden shadow-md">
                    {channel.logoUrl ? (
                      <img
                        src={channel.logoUrl}
                        alt={channel.nameAr}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-contain filter drop-shadow"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.parentElement?.querySelector('.channel-icon-fallback');
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    <div
                      className={`channel-icon-fallback ${channel.logoUrl ? 'hidden' : 'grid'} h-full w-full place-items-center text-sky-400`}
                    >
                      {channel.type === 'tv' ? (
                        <Tv className="h-5 w-5" />
                      ) : channel.type === 'agency' ? (
                        <FileText className="h-5 w-5" />
                      ) : (
                        <Shield className="h-5 w-5" />
                      )}
                    </div>
                  </div>

                  <div className="min-w-0">
                    <span className="font-mono text-[9px] uppercase font-bold text-sky-400 bg-sky-950/60 px-1.5 py-0.5 rounded border border-sky-500/30">
                      {isAr ? channel.typeAr : channel.typeEn}
                    </span>
                    <h4 className="m-0 mt-1 text-xs sm:text-sm font-black text-white truncate">
                      {isAr ? channel.nameAr : channel.nameEn}
                    </h4>
                  </div>
                </div>

                {channel.established && (
                  <span className="font-mono text-[10px] text-slate-500 shrink-0">
                    تأسس {channel.established}
                  </span>
                )}
              </div>

              {channel.coverageFocusAr && (
                <p className="m-0 text-xs text-slate-300 leading-relaxed">
                  {channel.coverageFocusAr}
                </p>
              )}

              <div className="space-y-1 text-[11px] text-slate-400 pt-1">
                {channel.credibilityRating && (
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold">
                    <CheckCircle2 className="h-3 w-3 shrink-0" />
                    <span>{channel.credibilityRating}</span>
                  </div>
                )}
                {channel.languages && (
                  <div className="text-[10px] text-slate-500 truncate">
                    <span>{isAr ? 'لغات البث:' : 'Languages:'} </span>
                    <span className="text-slate-300">{channel.languages.join(' · ')}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-2 flex items-center gap-2 pt-2 border-t border-slate-800/80">
              {channel.url && (
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/80 px-2.5 py-1.5 text-xs font-bold text-sky-400 hover:border-sky-500 hover:text-white transition"
                >
                  <span>{isAr ? 'البث والمنصة' : 'Official Feed'}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}

              {channel.wikipediaUrl && (
                <a
                  href={channel.wikipediaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 rounded-lg border border-sky-500/30 bg-sky-950/40 px-2 py-1.5 text-xs font-bold text-sky-300 hover:border-sky-400 hover:bg-sky-900/60 transition"
                  title={isAr ? 'عرض ويكيبيديا' : 'View Wikipedia'}
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">{isAr ? 'ويكيبيديا' : 'Wiki'}</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* نشرات الرصد الاستخباري للخطاب الإعلامي الرسمي (Intelligence Dispatches Wire) */}
      {filteredDispatches.length > 0 && (
        <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 space-y-3">
          <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-emerald-400" />
              <h4 className="m-0 text-sm font-black text-white">
                {isAr ? 'نشرات الرصد الاستخباري المباشر والخطاب الرسمي الملتقط' : 'Monitored Broadcast Dispatches & Official Narrative Analysis'}
              </h4>
            </div>

            <span className="font-mono text-xs text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
              {filteredDispatches.length} {isAr ? 'نشرة مرصودة' : 'Intercepts'}
            </span>
          </div>

          <div className="space-y-2.5">
            {filteredDispatches.map((disp, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-800/90 bg-slate-900/60 p-3 space-y-2 text-xs hover:border-slate-700 transition"
              >
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sky-400">{disp.sourceName}</span>
                    <span className="text-slate-500 text-[10px] flex items-center gap-1 font-mono">
                      <Clock className="h-3 w-3" />
                      <span>{disp.timestamp}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {disp.tagAr && (
                      <span className="text-[10px] font-bold text-sky-300 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/30">
                        {disp.tagAr}
                      </span>
                    )}
                    {disp.biasIndicator && (
                      <span className="text-[10px] font-bold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                        {disp.biasIndicator}
                      </span>
                    )}
                  </div>
                </div>

                <h5 className="m-0 text-xs sm:text-sm font-black text-white leading-snug">
                  {isAr ? disp.headlineAr : (disp.headlineEn || disp.headlineAr)}
                </h5>

                {disp.strategicInsightAr && (
                  <div className="rounded-lg border border-emerald-500/20 bg-emerald-950/30 p-2 text-[11px] text-emerald-200 leading-relaxed">
                    <strong className="text-emerald-400 me-1">
                      {isAr ? 'التحليل والاستخلاص الاستخباري للأجندة:' : 'OSINT Extraction & Strategic Insight:'}
                    </strong>
                    {disp.strategicInsightAr}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
