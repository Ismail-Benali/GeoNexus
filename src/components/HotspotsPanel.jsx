import { useState, useMemo } from 'react';
import {
  Search,
  MapPin,
  Calendar,
  Users,
  ShieldAlert,
} from 'lucide-react';
import { HOTSPOTS_DATA, HOTSPOT_CATEGORIES } from '../data/hotspotsData';

export default function HotspotsPanel({ lang = 'ar', onFocusOnMap }) {
  const isAr = lang === 'ar';
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredHotspots = useMemo(() => {
    return HOTSPOTS_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const textToSearch = `${item.titleAr} ${item.titleEn} ${item.descriptionAr} ${item.descriptionEn} ${item.locationAr} ${item.locationEn}`.toLowerCase();
      const matchesSearch = !searchQuery || textToSearch.includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const stats = useMemo(() => {
    return {
      wars: HOTSPOTS_DATA.filter((h) => h.category === 'war').length,
      flashpoints: HOTSPOTS_DATA.filter((h) => h.category === 'conflict').length,
      chokepoints: HOTSPOTS_DATA.filter((h) => h.category === 'chokepoint').length,
      alliances: HOTSPOTS_DATA.filter((h) => h.category === 'alliance').length,
    };
  }, []);

  return (
    <div className="space-y-6" dir={isAr ? 'rtl' : 'ltr'}>
      {/* الترويسة القيادية لغرفة رصد النزاعات */}
      <section className="nx-panel relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-rose-950/30 p-5 sm:p-7 border-rose-500/20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/35 bg-rose-500/15 px-2.5 py-0.5 text-xs font-bold text-rose-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
                </span>
                {isAr ? 'رصد استخباري حي وحقيقي 2026' : 'Real-World Crisis Intelligence 2026'}
              </span>
            </div>

            <h2 className="m-0 text-xl font-black text-white sm:text-2xl flex items-center gap-2.5">
              <ShieldAlert className="h-6 w-6 text-rose-400" />
              <span>{isAr ? 'النقاط الساخنة، مسارح الحروب، والتحالفات السياسية' : 'Global Hotspots, Armed Wars & Strategic Alliances'}</span>
            </h2>

            <p className="m-0 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isAr
                ? 'توثيق استخباري شامل للحروب المسلحة النشطة، بؤر التوتر النووي والبحري، مضايق الطاقة العالمية، ومعاهدات الدفاع والتحالفات الكبرى ببيانات حقيقية مؤكدة 100%.'
                : 'Comprehensive intelligence tracking of active armed conflicts, nuclear flashpoints, maritime energy corridors, and major collective defense treaties with verified data.'}
            </p>
          </div>

          {/* عدادات التصنيف السريعة */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 shrink-0">
            <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-3 text-center">
              <span className="text-[10px] font-bold text-rose-300 block">{isAr ? 'حروب نشطة' : 'Active Wars'}</span>
              <span className="font-mono text-xl font-black text-white">{stats.wars}</span>
              <span className="text-[9px] text-slate-400 block">{isAr ? 'نزاع مسلح' : 'Conflicts'}</span>
            </div>

            <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-3 text-center">
              <span className="text-[10px] font-bold text-amber-300 block">{isAr ? 'بؤر توتر' : 'Flashpoints'}</span>
              <span className="font-mono text-xl font-black text-white">{stats.flashpoints}</span>
              <span className="text-[9px] text-slate-400 block">{isAr ? 'استعراض قوة' : 'Tension zones'}</span>
            </div>

            <div className="rounded-xl border border-orange-500/30 bg-orange-950/20 p-3 text-center">
              <span className="text-[10px] font-bold text-orange-300 block">{isAr ? 'مضايق حيوية' : 'Chokepoints'}</span>
              <span className="font-mono text-xl font-black text-white">{stats.chokepoints}</span>
              <span className="text-[9px] text-slate-400 block">{isAr ? 'ممرات طاقة' : 'Strategic straits'}</span>
            </div>

            <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3 text-center">
              <span className="text-[10px] font-bold text-emerald-300 block">{isAr ? 'تحالفات كبرى' : 'Key Alliances'}</span>
              <span className="font-mono text-xl font-black text-white">{stats.alliances}</span>
              <span className="text-[9px] text-slate-400 block">{isAr ? 'معاهدات نشطة' : 'Active pacts'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* شريط البحث وتصفية الفئات */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {Object.entries(HOTSPOT_CATEGORIES).map(([key, cat]) => {
            const isActive = selectedCategory === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition ${
                  isActive
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/25'
                    : 'border border-slate-800 bg-slate-900/80 text-slate-300 hover:border-slate-700 hover:text-white'
                }`}
              >
                <span>{isAr ? cat.ar : cat.en}</span>
              </button>
            );
          })}
        </div>

        {/* حقل البحث السريع */}
        <div className="relative min-w-[240px]">
          <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isAr ? 'ابحث عن حرب، مضيق، أو تحالف...' : 'Search wars, straits, or alliances...'}
            className="w-full rounded-xl border border-slate-800 bg-slate-900/90 py-2 ps-9 pe-3 text-xs text-white placeholder-slate-500 focus:border-rose-500 focus:outline-none"
          />
        </div>
      </div>

      {/* بطاقات النقاط الساخنة والحروب */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredHotspots.map((item) => {
          const isWar = item.category === 'war';
          const isAlliance = item.category === 'alliance';
          const isChokepoint = item.category === 'chokepoint';

          const badgeColor = isWar
            ? 'border-rose-500/40 bg-rose-500/15 text-rose-300'
            : isAlliance
            ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-300'
            : isChokepoint
            ? 'border-orange-500/40 bg-orange-500/15 text-orange-300'
            : 'border-amber-500/40 bg-amber-500/15 text-amber-300';

          return (
            <article
              key={item.id}
              className={`rounded-2xl border bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950 p-4 sm:p-5 space-y-4 shadow-xl transition-all ${
                isWar
                  ? 'border-rose-500/30 hover:border-rose-500/50'
                  : isAlliance
                  ? 'border-emerald-500/30 hover:border-emerald-500/50'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* الترويسة: اسم الصراع، التصنيف، وزر التموضع على الخريطة */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`rounded-full border px-2 py-0.5 text-[10px] font-black uppercase tracking-wider ${badgeColor}`}>
                      {isAr ? HOTSPOT_CATEGORIES[item.category]?.ar : HOTSPOT_CATEGORIES[item.category]?.en}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {isAr ? item.statusAr : item.statusEn}
                    </span>
                  </div>

                  <h3 className="m-0 text-base font-black text-white">
                    {isAr ? item.titleAr : item.titleEn}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <MapPin className="h-3.5 w-3.5 text-rose-400 shrink-0" />
                    <span className="truncate">{isAr ? item.locationAr : item.locationEn}</span>
                  </div>
                </div>

                {onFocusOnMap && (
                  <button
                    onClick={() => onFocusOnMap(item.coordinates, item)}
                    className="flex shrink-0 items-center gap-1 rounded-xl border border-sky-500/35 bg-sky-500/10 px-2.5 py-1.5 text-xs font-bold text-sky-300 hover:bg-sky-500/20 transition shadow-sm"
                    title={isAr ? 'عرض الموقع الدقيق على الخريطة الحية' : 'View coordinates on live map'}
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{isAr ? 'الخريطة' : 'Map'}</span>
                  </button>
                )}
              </div>

              {/* الوصف الاستخباري */}
              <p className="m-0 text-xs text-slate-300 leading-relaxed">
                {isAr ? item.descriptionAr : item.descriptionEn}
              </p>

              {/* الأطراف المتحاربة أو أعضاء التحالف */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3 space-y-2">
                <div className="flex items-center justify-between text-xs border-b border-slate-800/80 pb-1.5">
                  <span className="font-bold text-slate-300 flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-sky-400" />
                    <span>{isAlliance ? (isAr ? 'أعضاء التحالف والدول الرئيسية:' : 'Member States:') : (isAr ? 'الأطراف المتحاربة والداعمة:' : 'Belligerents & Backers:')}</span>
                  </span>
                </div>

                <div className="space-y-1.5 text-[11px]">
                  <div>
                    <span className="font-semibold text-rose-400">
                      {isAlliance ? (isAr ? 'الدول الرائدة: ' : 'Lead Nations: ') : (isAr ? 'الطرف الأول: ' : 'Side A: ')}
                    </span>
                    <span className="text-slate-200">
                      {(isAr ? item.belligerentsAr.primary : item.belligerentsEn.primary).join(' · ')}
                    </span>
                  </div>

                  <div>
                    <span className="font-semibold text-sky-400">
                      {isAlliance ? (isAr ? 'محور الردع المقابل: ' : 'Opposing Counterbalance: ') : (isAr ? 'الطرف المقابل: ' : 'Side B: ')}
                    </span>
                    <span className="text-slate-200">
                      {(isAr ? item.belligerentsAr.opposing : item.belligerentsEn.opposing).join(' · ')}
                    </span>
                  </div>
                </div>
              </div>

              {/* التداعيات الاستراتيجية الكبرى */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-slate-400 block">
                  {isAr ? 'التداعيات الجيوسياسية والاقتصادية المباشرة:' : 'Direct Strategic Impacts:'}
                </span>
                <ul className="m-0 p-0 list-none space-y-1">
                  {(isAr ? item.impactsAr : item.impactsEn).map((impact, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* شريط الإحصاءات الميدانية المقدرة */}
              <div className="flex items-center justify-between gap-2 border-t border-slate-800/80 pt-2.5 text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-slate-500" />
                  <span>{isAr ? 'بداية الصراع: ' : 'Initiated: '}</span>
                  <span className="font-mono text-slate-200">{item.startDate}</span>
                </div>

                <div className="font-semibold text-amber-300 truncate max-w-[250px]">
                  {item.casualtiesEstimate}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
