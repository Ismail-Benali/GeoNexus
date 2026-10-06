import { useState, useMemo } from 'react';
import {
  Radar,
  Radio,
  Swords,
  Shield,
  Anchor,
  Compass,
  Search,
  Users,
  Calendar,
  MapPin,
  ExternalLink,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { OSINT_EXERCISES, OSINT_ARMS_DEALS, OSINT_FLEET_DEPLOYMENTS } from '../data/osintData';
import { translateText } from '../utils/translator';

export default function OsintLiveFeedPanel({ lang = 'ar', onFocusOnMap }) {
  const isAr = lang === 'ar';
  const [activeCategory, setActiveCategory] = useState('exercises'); // 'exercises' | 'deals' | 'fleets'
  const [regionFilter, setRegionFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredExercises = useMemo(() => {
    return OSINT_EXERCISES.filter((ex) => {
      const matchRegion = regionFilter === 'all' || ex.region === regionFilter;
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        !q ||
        ex.titleAr.toLowerCase().includes(q) ||
        ex.titleEn.toLowerCase().includes(q) ||
        ex.participants.some((p) => p.toLowerCase().includes(q));
      return matchRegion && matchSearch;
    });
  }, [regionFilter, searchQuery]);

  const filteredDeals = useMemo(() => {
    return OSINT_ARMS_DEALS.filter((d) => {
      const q = searchQuery.trim().toLowerCase();
      return (
        !q ||
        d.typeAr.toLowerCase().includes(q) ||
        d.typeEn.toLowerCase().includes(q) ||
        d.buyers.toLowerCase().includes(q) ||
        d.supplier.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  const filteredFleets = useMemo(() => {
    return OSINT_FLEET_DEPLOYMENTS.filter((fl) => {
      const q = searchQuery.trim().toLowerCase();
      return (
        !q ||
        fl.nameAr.toLowerCase().includes(q) ||
        fl.nameEn.toLowerCase().includes(q) ||
        fl.region.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  return (
    <div className="space-y-5" dir={isAr ? 'rtl' : 'ltr'}>
      {/* الترويسة الاستخبارية التكتيكية للمركز */}
      <div className="relative overflow-hidden rounded-2xl border border-sky-500/35 bg-gradient-to-r from-slate-900 via-sky-950/40 to-slate-950 p-5 sm:p-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20">
              <Radar className="h-6 w-6 animate-pulse" />
              <span className="absolute -top-1 -end-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-rose-500" />
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="m-0 text-xl sm:text-2xl font-black text-white">
                  {isAr ? 'مركز استخبارات المصادر المفتوحة (OSINT)' : 'OSINT Defense Intelligence Terminal'}
                </h2>
                <span className="rounded-md border border-sky-500/40 bg-sky-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-sky-300">
                  LIVE 2026
                </span>
              </div>
              <p className="m-0 mt-1 text-xs sm:text-sm text-slate-300">
                {isAr
                  ? 'رصد المناورات العسكرية الكبرى، صفقات التسليح الاستراتيجية، ومجموعات حاملات الطائرات في البحار'
                  : 'Multi-domain operational tracking of major war games, strategic defense contracts, and naval strike groups'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-950/40 px-3 py-1.5 text-xs font-bold text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{isAr ? 'رادار المسح الميداني متصل' : 'All Feeds Active'}</span>
            </span>
          </div>
        </div>

        {/* أشرطة التبويبات الثلاثية */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/80 pt-4">
          <div className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900/80 p-1">
            <button
              onClick={() => setActiveCategory('exercises')}
              className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                activeCategory === 'exercises'
                  ? 'bg-sky-600 text-white shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Swords className="h-4 w-4" />
              <span>{isAr ? 'المناورات والتدريبات الكبرى' : 'Military Exercises'}</span>
              <span className="rounded-full bg-slate-900 px-1.5 py-0.2 text-[10px] font-mono text-sky-300">
                {OSINT_EXERCISES.length}
              </span>
            </button>

            <button
              onClick={() => setActiveCategory('deals')}
              className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                activeCategory === 'deals'
                  ? 'bg-amber-600 text-white shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <TrendingUp className="h-4 w-4" />
              <span>{isAr ? 'صفقات التسلح ونقل التكنولوجيا' : 'Arms Deals'}</span>
              <span className="rounded-full bg-slate-900 px-1.5 py-0.2 text-[10px] font-mono text-amber-300">
                {OSINT_ARMS_DEALS.length}
              </span>
            </button>

            <button
              onClick={() => setActiveCategory('fleets')}
              className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                activeCategory === 'fleets'
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Anchor className="h-4 w-4" />
              <span>{isAr ? 'تحركات الأساطيل البحرية' : 'Naval Deployments'}</span>
              <span className="rounded-full bg-slate-900 px-1.5 py-0.2 text-[10px] font-mono text-indigo-300">
                {OSINT_FLEET_DEPLOYMENTS.length}
              </span>
            </button>
          </div>

          {/* محرك البحث السريع داخل الـ OSINT */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAr ? 'بحث في المناورات أو الصفقات…' : 'Search exercises or deals…'}
              className="w-full rounded-xl border border-slate-800 bg-slate-950/80 py-1.5 ps-9 pe-3 text-xs text-white placeholder-slate-500 outline-none focus:border-sky-500"
            />
          </div>
        </div>
      </div>

      {/* 1. قسم المناورات العسكرية الكبرى */}
      {activeCategory === 'exercises' && (
        <div className="space-y-4">
          {/* شريط تصفية الأقاليم */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-500 font-bold me-1 shrink-0">{isAr ? 'المسرح العملياتي:' : 'Theater:'}</span>
            {[
              { id: 'all', labelAr: 'كافة المسارح', labelEn: 'All Theaters' },
              { id: 'middle_east', labelAr: 'الشرق الأوسط والخليج', labelEn: 'Middle East' },
              { id: 'africa', labelAr: 'أفريقيا والساحل', labelEn: 'Africa' },
              { id: 'europe', labelAr: 'أوروبا والناتو', labelEn: 'Europe / NATO' },
              { id: 'indopacific', labelAr: 'المحيطين الهندي والهادئ', labelEn: 'Indo-Pacific' },
            ].map((reg) => (
              <button
                key={reg.id}
                onClick={() => setRegionFilter(reg.id)}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold transition whitespace-nowrap ${
                  regionFilter === reg.id
                    ? 'bg-sky-600 text-white'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {isAr ? reg.labelAr : reg.labelEn}
              </button>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredExercises.map((ex) => (
              <div
                key={ex.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/80 p-4 transition-all duration-300 hover:border-sky-500/50 hover:bg-slate-900/60 shadow-lg"
              >
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <span className="rounded-md border border-sky-500/30 bg-sky-500/10 px-2 py-0.5 text-[10px] font-mono font-bold text-sky-300">
                      {ex.dates}
                    </span>
                    <span className="rounded-md border border-emerald-500/30 bg-emerald-950/40 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                      {isAr ? ex.status : ex.statusEn}
                    </span>
                  </div>

                  <h3 className="m-0 text-base font-black text-white group-hover:text-sky-300 transition">
                    {isAr ? ex.titleAr : ex.titleEn}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="h-3.5 w-3.5 text-rose-400 shrink-0" />
                    <span>{isAr ? ex.locationAr : ex.locationEn}</span>
                  </div>

                  <p className="m-0 text-xs text-slate-300 leading-relaxed">
                    {isAr ? ex.scopeAr : ex.scopeEn}
                  </p>

                  <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-2 text-xs space-y-1">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3 text-amber-400" />
                        <span>{isAr ? 'حجم القوات:' : 'Force Size:'}</span>
                      </span>
                      <span className="font-bold text-slate-200">{ex.troopsCount}</span>
                    </div>

                    <div className="pt-1 border-t border-slate-800 text-[10px] text-slate-400">
                      <b className="text-slate-300 block mb-0.5">{isAr ? 'الدول المشاركة:' : 'Participants:'}</b>
                      <span>{ex.participants.join(' · ')}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-[10px] text-slate-500 font-mono">TACTICAL OSINT VERIFIED</span>
                  {onFocusOnMap && (
                    <button
                      onClick={onFocusOnMap}
                      className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-bold transition"
                    >
                      <span>{isAr ? 'رصد على الخريطة' : 'View on Map'}</span>
                      <ChevronRight className="h-3 w-3" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. قسم صفقات التسليح ونقل التكنولوجيا */}
      {activeCategory === 'deals' && (
        <div className="grid gap-4 sm:grid-cols-2">
          {filteredDeals.map((deal) => (
            <div
              key={deal.id}
              className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 space-y-3 hover:border-amber-500/40 transition shadow-lg"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="font-mono text-[10px] text-amber-400 bg-amber-950/50 border border-amber-500/30 px-2 py-0.5 rounded font-bold">
                    {deal.date}
                  </span>
                  <h3 className="m-0 text-sm sm:text-base font-black text-white mt-1">
                    {isAr ? deal.typeAr : deal.typeEn}
                  </h3>
                </div>
                <span className="font-mono text-base font-black text-emerald-400 shrink-0">
                  {deal.value}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 rounded-xl border border-slate-800 bg-slate-900/60 p-2.5 text-xs">
                <div>
                  <span className="text-slate-500 text-[10px] block">{isAr ? 'الدول المشترية:' : 'Buyer Nations:'}</span>
                  <span className="font-bold text-slate-200">{deal.buyers}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block">{isAr ? 'الشركة / الدولة الموردة:' : 'Prime Contractor:'}</span>
                  <span className="font-bold text-slate-200">{deal.supplier}</span>
                </div>
              </div>

              <p className="m-0 text-xs text-slate-300 leading-relaxed">
                {isAr ? deal.impactAr : deal.impactEn}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* 3. قسم تحركات الأساطيل البحرية */}
      {activeCategory === 'fleets' && (
        <div className="grid gap-4 sm:grid-cols-3">
          {filteredFleets.map((fleet) => (
            <div
              key={fleet.id}
              className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 space-y-3 hover:border-indigo-500/40 transition shadow-lg"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="rounded-md border border-indigo-500/30 bg-indigo-950/40 px-2 py-0.5 text-[10px] font-bold text-indigo-300">
                  {fleet.region}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                  fleet.statusTone === 'rose'
                    ? 'text-rose-400 bg-rose-950/60 border border-rose-500/30'
                    : 'text-sky-400 bg-sky-950/60 border border-sky-500/30'
                }`}>
                  {fleet.status}
                </span>
              </div>

              <h3 className="m-0 text-sm sm:text-base font-black text-white">
                {isAr ? fleet.nameAr : fleet.nameEn}
              </h3>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-2.5 text-xs space-y-1">
                <div className="text-[11px] text-slate-400">
                  <span className="text-slate-500">{isAr ? 'السفينة القائدة:' : 'Flagship:'} </span>
                  <span className="font-bold text-white">{fleet.flagship}</span>
                </div>
                <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800/80">
                  <span className="text-slate-500">{isAr ? 'التشكيل البحري:' : 'Task Force:'} </span>
                  <span className="text-slate-300">{isAr ? fleet.compositionAr : fleet.compositionEn}</span>
                </div>
              </div>

              <p className="m-0 text-xs text-slate-300 leading-relaxed">
                {isAr ? fleet.missionAr : fleet.missionEn}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
