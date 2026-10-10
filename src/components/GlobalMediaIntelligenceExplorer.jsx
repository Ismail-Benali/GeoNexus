import { useState, useMemo } from 'react';
import {
  Radio,
  Search,
  ExternalLink,
  TrendingUp,
  Globe2,
  Clock,
  CheckCircle2,
  Eye,
} from 'lucide-react';
import { COUNTRY_MEDIA_CHANNELS_DB, getCountryMediaIntelligence } from '../data/countryMediaIntelligenceDB';
import { CountryEmblem } from './CountrySymbols';

const FEATURED_COUNTRIES = [
  { id: 'sa', nameAr: 'السعودية', nameEn: 'Saudi Arabia', flag: '🇸🇦' },
  { id: 'eg', nameAr: 'مصر', nameEn: 'Egypt', flag: '🇪🇬' },
  { id: 'dz', nameAr: 'الجزائر', nameEn: 'Algeria', flag: '🇩🇿' },
  { id: 'ma', nameAr: 'المغرب', nameEn: 'Morocco', flag: '🇲🇦' },
  { id: 'us', nameAr: 'الولايات المتحدة', nameEn: 'United States', flag: '🇺🇸' },
  { id: 'ru', nameAr: 'روسيا', nameEn: 'Russia', flag: '🇷🇺' },
  { id: 'cn', nameAr: 'الصين', nameEn: 'China', flag: '🇨🇳' },
];

export default function GlobalMediaIntelligenceExplorer({
  lang = 'ar',
  onSelectCountry,
}) {
  const isAr = lang === 'ar';
  const [selectedCountryId, setSelectedCountryId] = useState('sa');
  const [activeType, setActiveType] = useState('all'); // 'all' | 'agency' | 'tv' | 'defense_press'
  const [searchQuery, setSearchQuery] = useState('');

  const activeMediaData = useMemo(() => {
    return getCountryMediaIntelligence(selectedCountryId, lang);
  }, [selectedCountryId, lang]);

  const filteredChannels = useMemo(() => {
    return (activeMediaData.channels || []).filter((ch) => {
      const matchType = activeType === 'all' || ch.type === activeType;
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        !q ||
        ch.nameAr?.toLowerCase().includes(q) ||
        ch.nameEn?.toLowerCase().includes(q) ||
        ch.coverageFocusAr?.toLowerCase().includes(q);
      return matchType && matchSearch;
    });
  }, [activeMediaData.channels, activeType, searchQuery]);

  const allDispatchesAcrossCountries = useMemo(() => {
    const list = [];
    Object.entries(COUNTRY_MEDIA_CHANNELS_DB).forEach(([cid, data]) => {
      (data.monitoredDispatches || []).forEach((disp) => {
        list.push({ ...disp, countryId: cid, countryNameAr: data.nameAr, countryNameEn: data.nameEn });
      });
    });
    return list;
  }, []);

  const filteredGlobalDispatches = useMemo(() => {
    return allDispatchesAcrossCountries.filter((disp) => {
      const q = searchQuery.trim().toLowerCase();
      const matchCountry = selectedCountryId === 'all' || disp.countryId === selectedCountryId;
      const matchSearch =
        !q ||
        disp.headlineAr?.toLowerCase().includes(q) ||
        disp.headlineEn?.toLowerCase().includes(q) ||
        disp.strategicInsightAr?.toLowerCase().includes(q) ||
        disp.sourceName?.toLowerCase().includes(q);
      return matchCountry && matchSearch;
    });
  }, [allDispatchesAcrossCountries, selectedCountryId, searchQuery]);

  return (
    <div className="space-y-6" dir={isAr ? 'rtl' : 'ltr'}>
      {/* ترويسة المركز الاستخباري للرصد الإعلامي */}
      <div className="relative overflow-hidden rounded-2xl border border-sky-500/35 bg-gradient-to-r from-slate-900 via-sky-950/40 to-slate-950 p-5 sm:p-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20">
              <Radio className="h-7 w-7 animate-pulse text-sky-200" />
              <span className="absolute -top-1 -end-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="m-0 text-xl sm:text-2xl font-black text-white">
                  {isAr ? 'مركز جمع المعلومات والرصد من القنوات الإعلامية الرسمية للدول' : 'State Media Intelligence & Broadcast Monitor Terminal'}
                </h2>
                <span className="rounded-md border border-emerald-500/40 bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
                  LIVE OSINT
                </span>
              </div>
              <p className="m-0 mt-1 text-xs sm:text-sm text-slate-300">
                {isAr
                  ? 'رصد وتحليل فوري للخطاب الرسمي لوكالات الأنباء، التلفزيونات السيادية، والمنصات العسكرية واستخلاص الأجندات والرسائل الاستراتيجية.'
                  : 'Real-time multi-country monitoring of state television wires, national news agencies, and military press platforms.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-xl border border-sky-500/30 bg-sky-950/40 px-3.5 py-1.5 text-xs font-bold text-sky-300 flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>{isAr ? 'منظومة رصد سيادية نشطة' : 'Active Sovereign Wire'}</span>
            </span>
          </div>
        </div>

        {/* أزرار اختيار الدولة السريعة */}
        <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto pb-1">
          <span className="text-xs font-bold text-slate-400 shrink-0 me-1">
            {isAr ? 'اختر الدولة للرصد:' : 'Select Country:'}
          </span>
          <button
            onClick={() => setSelectedCountryId('all')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition shrink-0 ${
              selectedCountryId === 'all'
                ? 'bg-sky-600 text-white shadow'
                : 'border border-slate-800 bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Globe2 className="h-3.5 w-3.5" />
            <span>{isAr ? 'كافة الدول (نشرات عالمية)' : 'All Countries'}</span>
          </button>

          {FEATURED_COUNTRIES.map((c) => {
            const isSelected = selectedCountryId === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCountryId(c.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition shrink-0 ${
                  isSelected
                    ? 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-md ring-1 ring-sky-400'
                    : 'border border-slate-800 bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span>{c.flag}</span>
                <span>{isAr ? c.nameAr : c.nameEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* بطاقة العقيدة الإعلامية للدولة المختارة */}
      {selectedCountryId !== 'all' && activeMediaData && (
        <div className="rounded-2xl border border-sky-500/25 bg-slate-950/70 p-4 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <CountryEmblem country={{ id: selectedCountryId, name: activeMediaData.nameAr }} className="h-10 w-10" />
              <div>
                <h3 className="m-0 text-base font-black text-white">
                  {isAr ? `العقيدة الإعلامية الرسمية لـ ${activeMediaData.nameAr}` : `Official Media Strategy of ${activeMediaData.nameEn}`}
                </h3>
                <span className="text-[11px] text-sky-400 block mt-0.5">
                  {isAr ? 'السياسة الاتصالية والخطاب المعتمد أمام الرأي العام الدولي' : 'Strategic Communications & Public Diplomacy'}
                </span>
              </div>
            </div>

            <button
              onClick={() => onSelectCountry?.({ id: selectedCountryId, name: activeMediaData.nameAr })}
              className="flex items-center gap-1.5 rounded-xl border border-amber-500/40 bg-amber-500/10 px-3 py-1.5 text-xs font-bold text-amber-300 hover:bg-amber-500/20 transition shrink-0"
            >
              <Eye className="h-3.5 w-3.5" />
              <span>{isAr ? 'فتح الملف الاستخباري الشامل للدولة' : 'Open Full Dossier'}</span>
            </button>
          </div>

          <p className="m-0 text-xs text-slate-300 leading-relaxed">
            {isAr ? activeMediaData.mediaDoctrineAr : (activeMediaData.mediaDoctrineEn || activeMediaData.mediaDoctrineAr)}
          </p>

          {/* القنوات والوكالات المربوطة للدولة */}
          <div className="pt-2 space-y-2.5">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <h4 className="m-0 text-xs font-black text-slate-400 uppercase tracking-wider">
                {isAr ? 'المنصات والوكالات والقنوات الرسمية المعتمدة للدولة:' : 'Verified Official Networks & State Agencies:'}
              </h4>

              <div className="flex items-center gap-1 text-[11px]">
                {[
                  { id: 'all', labelAr: 'الكل', labelEn: 'All' },
                  { id: 'agency', labelAr: 'وكالات أنباء', labelEn: 'Agencies' },
                  { id: 'tv', labelAr: 'تلفزيون', labelEn: 'TV' },
                  { id: 'defense_press', labelAr: 'إعلام عسكري', labelEn: 'Defense' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveType(t.id)}
                    className={`px-2 py-0.5 rounded-md font-bold transition ${
                      activeType === t.id
                        ? 'bg-sky-600 text-white'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {isAr ? t.labelAr : t.labelEn}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filteredChannels.map((ch, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1.5 mb-1.5">
                      <span className="font-mono text-[9px] font-bold text-sky-400 bg-sky-950/60 px-1.5 py-0.5 rounded border border-sky-500/30">
                        {isAr ? ch.typeAr : ch.typeEn}
                      </span>
                      {ch.established && (
                        <span className="text-[10px] text-slate-500 font-mono">
                          {ch.established}
                        </span>
                      )}
                    </div>
                    <h5 className="m-0 text-xs font-black text-white">
                      {isAr ? ch.nameAr : ch.nameEn}
                    </h5>
                    <p className="m-0 mt-1 text-[11px] text-slate-300 leading-snug">
                      {ch.coverageFocusAr}
                    </p>
                  </div>

                  {ch.url && (
                    <a
                      href={ch.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-950 px-2 py-1 text-[11px] font-bold text-sky-400 hover:border-sky-500 transition"
                    >
                      <span>{isAr ? 'زيارة المنصة الرسمية' : 'Visit Official Portal'}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* نشرات الرصد المباشرة للخطاب الرسمي الملتقط (OSINT Media Wire) */}
      <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-emerald-400" />
            <div>
              <h3 className="m-0 text-sm sm:text-base font-black text-white">
                {isAr ? 'نشرات الرصد الإعلامي والاستخباري والتحليلات السيادية' : 'Live Monitored Broadcast Dispatches & Narrative Extractions'}
              </h3>
              <span className="text-[11px] text-slate-400 block mt-0.5">
                {isAr ? 'رصد فوري لبيانات الدفاع، السياسة الخارجية، والمؤتمرات السيادية' : 'Real-time intercept of official statements & defense communiqués'}
              </span>
            </div>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute start-2.5 top-2.5 h-3.5 w-3.5 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAr ? 'بحث في النشرات والخطابات...' : 'Search dispatches & headlines...'}
              className="w-full rounded-lg border border-slate-800 bg-slate-900 ps-8 pe-3 py-1.5 text-xs text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-3">
          {filteredGlobalDispatches.map((disp, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-3.5 space-y-2 hover:border-sky-500/40 transition"
            >
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-base">{FEATURED_COUNTRIES.find(c => c.id === disp.countryId)?.flag || '🌐'}</span>
                  <span className="font-bold text-white text-xs">{isAr ? disp.countryNameAr : disp.countryNameEn}</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-sky-400 font-semibold text-xs">{disp.sourceName}</span>
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

              <h4 className="m-0 text-xs sm:text-sm font-black text-white leading-snug">
                {isAr ? disp.headlineAr : (disp.headlineEn || disp.headlineAr)}
              </h4>

              {disp.strategicInsightAr && (
                <div className="rounded-lg border border-emerald-500/20 bg-emerald-950/20 p-2.5 text-[11px] text-emerald-200 leading-relaxed">
                  <strong className="text-emerald-400 me-1">
                    {isAr ? 'الاستخلاص الاستخباري للأجندة والرسالة الرادعة:' : 'Strategic OSINT Insight:'}
                  </strong>
                  {disp.strategicInsightAr}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
