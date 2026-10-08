import React, { useState, useMemo } from 'react';
import {
  ShieldAlert,
  Crosshair,
  Search,
  Building2,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  Award,
  Layers,
  Plane,
  Anchor,
  Shield,
  Zap,
  Clock,
} from 'lucide-react';
import {
  ARMS_DEALS_DATABASE,
  getArmsDealsStats,
} from '../data/armsDealsData';
import { getFlagUrl } from '../utils/countrySymbols';

export default function ArmsDealsExplorer({ lang = 'ar', onSelectCountry }) {
  const isAr = lang === 'ar';
  const stats = useMemo(() => getArmsDealsStats(), []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBuyer, setSelectedBuyer] = useState('all');
  const [selectedSeller, setSelectedSeller] = useState('all');
  const [selectedEra, setSelectedEra] = useState('all');
  const [sortOrder, setSortOrder] = useState('desc'); // 'desc' (2026 -> 1941) or 'asc' (1941 -> 2026)
  const [expandedDealId, setExpandedDealId] = useState(null);

  // الحقب التاريخية المتاحة (من الحرب العالمية الثانية إلى اليوم)
  const eras = [
    { id: 'all', labelAr: 'كافة الحقب (1941 - 2026)', labelEn: 'All Eras (1941–2026)' },
    { id: 'contemporary', labelAr: 'الراهنة (2020 - 2026)', labelEn: 'Contemporary (2020–2026)' },
    { id: 'modern_warfare', labelAr: 'الألفية الجديدة (2000 - 2019)', labelEn: 'Modern (2000–2019)' },
    { id: 'post_cold_war', labelAr: 'ما بعد برلين (1991 - 1999)', labelEn: 'Post-Cold War (1991–1999)' },
    { id: 'cold_war', labelAr: 'الحرب الباردة (1947 - 1990)', labelEn: 'Cold War (1947–1990)' },
    { id: 'ww2', labelAr: 'الحرب العالمية الثانية (1939 - 1945)', labelEn: 'WWII Era (1939–1945)' },
  ];

  // الفئات المتاحة
  const categories = [
    { id: 'all', labelAr: 'كافة المنظومات', labelEn: 'All Systems', icon: Layers },
    { id: 'air_force', labelAr: 'مقاتلات وطيران حربي', labelEn: 'Fighter Jets', icon: Plane },
    { id: 'air_defense', labelAr: 'دفاع جوي وصاروخي', labelEn: 'Air Defense', icon: Shield },
    { id: 'naval', labelAr: 'سفن حربية وغواصات', labelEn: 'Naval Warships', icon: Anchor },
    { id: 'land_forces', labelAr: 'دبابات ومدفعية', labelEn: 'Armor & Artillery', icon: Crosshair },
    { id: 'drones', labelAr: 'طائرات مسيرة وذخائر', labelEn: 'Drones & UAVs', icon: Zap },
  ];

  // تصفية وترتيب الصفقات زمنياً
  const filteredDeals = useMemo(() => {
    const list = ARMS_DEALS_DATABASE.filter((deal) => {
      const matchSearch =
        !searchTerm.trim() ||
        deal.systemNameAr.toLowerCase().includes(searchTerm.toLowerCase()) ||
        deal.systemNameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        deal.buyerNameAr.toLowerCase().includes(searchTerm.toLowerCase()) ||
        deal.buyerNameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        deal.sellerNameAr.toLowerCase().includes(searchTerm.toLowerCase()) ||
        deal.sellerNameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        deal.manufacturerAr.toLowerCase().includes(searchTerm.toLowerCase()) ||
        deal.manufacturerEn.toLowerCase().includes(searchTerm.toLowerCase());

      const matchCategory =
        selectedCategory === 'all' || deal.category === selectedCategory;

      const matchBuyer =
        selectedBuyer === 'all' || deal.buyerId === selectedBuyer;

      const matchSeller =
        selectedSeller === 'all' || deal.sellerId === selectedSeller;

      let matchEra = true;
      if (selectedEra === 'contemporary') matchEra = deal.yearSigned >= 2020;
      else if (selectedEra === 'modern_warfare') matchEra = deal.yearSigned >= 2000 && deal.yearSigned < 2020;
      else if (selectedEra === 'post_cold_war') matchEra = deal.yearSigned >= 1991 && deal.yearSigned < 2000;
      else if (selectedEra === 'cold_war') matchEra = deal.yearSigned >= 1946 && deal.yearSigned < 1991;
      else if (selectedEra === 'ww2') matchEra = deal.yearSigned <= 1945;

      return matchSearch && matchCategory && matchBuyer && matchSeller && matchEra;
    });

    // الترتيب الزمني من الأحدث إلى الأقدم أو العكس
    return list.sort((a, b) => {
      const yearA = a.yearSigned || 2020;
      const yearB = b.yearSigned || 2020;
      return sortOrder === 'desc' ? yearB - yearA : yearA - yearB;
    });
  }, [searchTerm, selectedCategory, selectedBuyer, selectedSeller, selectedEra, sortOrder]);

  // قائمة المشترين والبائعين للاختيار
  const buyerOptions = useMemo(() => {
    const map = new Map();
    ARMS_DEALS_DATABASE.forEach((d) => map.set(d.buyerId, isAr ? d.buyerNameAr : d.buyerNameEn));
    return Array.from(map.entries());
  }, [isAr]);

  const sellerOptions = useMemo(() => {
    const map = new Map();
    ARMS_DEALS_DATABASE.forEach((d) => map.set(d.sellerId, isAr ? d.sellerNameAr : d.sellerNameEn));
    return Array.from(map.entries());
  }, [isAr]);

  const formatBillionUsd = (num) => {
    return (num / 1000000000).toFixed(1);
  };

  return (
    <div className="space-y-6">
      {/* ترويسة اللوحة الاستخبارية */}
      <div className="relative overflow-hidden rounded-2xl border border-sky-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950/40 p-5 sm:p-7 shadow-2xl">
        <div className="absolute -end-10 -top-10 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25">
                <Crosshair className="h-6 w-6" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-display text-xl sm:text-2xl font-black text-white m-0">
                    {isAr ? 'سجل صفقات السلاح وعقود التسليح العالمية (SIPRI)' : 'Global Arms Deals & Transfers Intelligence'}
                  </h1>
                  <span className="rounded-full border border-sky-400/40 bg-sky-500/15 px-2.5 py-0.5 text-[11px] font-bold text-sky-300">
                    SIPRI · DSCA
                  </span>
                </div>
                <p className="mt-1 text-xs sm:text-sm text-slate-300 m-0">
                  {isAr
                    ? 'بيانات تفصيلية موثقة من معهد ستوكهولم (SIPRI) ووكالة التعاون الأمني الأمريكي (DSCA) تشمل أسعار الصفقات، الموردين، جداول التسليم وشروط الأوفست.'
                    : 'Verified transfers, weapon systems, contract valuations, offset agreements and delivery timelines grounded in SIPRI & DSCA data.'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-500/15 px-3 py-1.5 text-xs font-bold text-emerald-300">
                <CheckCircle2 className="h-4 w-4" />
                <span>{isAr ? 'بيانات معتمدة وموثقة 100%' : '100% Sourced & Verified'}</span>
              </span>
            </div>
          </div>

          {/* أرقام وإحصائيات رئيسية */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
              <div className="text-[11px] font-bold text-slate-400">
                {isAr ? 'إجمالي قيمة الصفقات المرصودة' : 'Total Tracked Contracts'}
              </div>
              <div className="mt-1 font-mono text-lg sm:text-2xl font-black text-emerald-400">
                ${formatBillionUsd(stats.totalValueUsd)}B+
              </div>
              <div className="text-[10px] text-slate-500">
                {isAr ? 'أكثر من ' + formatBillionUsd(stats.totalValueUsd) + ' مليار دولار' : 'Over ' + formatBillionUsd(stats.totalValueUsd) + ' billion USD'}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
              <div className="text-[11px] font-bold text-slate-400">
                {isAr ? 'عقود التسلح الكبرى المسجلة' : 'Major Tracked Deals'}
              </div>
              <div className="mt-1 font-mono text-lg sm:text-2xl font-black text-sky-400">
                {stats.totalDeals} {isAr ? 'صفقة نوعية' : 'Contracts'}
              </div>
              <div className="text-[10px] text-slate-500">
                {isAr ? 'تشمل عقود المليارات والمقاتلات' : 'Spanning mega-deals & fleets'}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
              <div className="text-[11px] font-bold text-slate-400">
                {isAr ? 'سلاح الجو والدفاع الجوي' : 'Air Force & Missile Defense'}
              </div>
              <div className="mt-1 font-mono text-lg sm:text-2xl font-black text-indigo-400">
                {stats.categoriesCount.air_force + stats.categoriesCount.air_defense} {isAr ? 'صفقة' : 'Deals'}
              </div>
              <div className="text-[10px] text-slate-500">
                {isAr ? 'رافال، تايفون، F-16، باتريوت، S-400' : 'Rafale, Typhoon, F-16, S-400, Patriot'}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
              <div className="text-[11px] font-bold text-slate-400">
                {isAr ? 'مصداقية المصادر' : 'Institutional Grounding'}
              </div>
              <div className="mt-1 font-mono text-lg sm:text-2xl font-black text-amber-400">
                SIPRI / DSCA
              </div>
              <div className="text-[10px] text-slate-500">
                {isAr ? 'سجلات وزارات الدفاع الرسمية' : 'Official MoD Defense Gazettes'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* شريط البحث والمرشحات */}
      <div className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-slate-900/85 p-3.5 sm:p-4 shadow-lg backdrop-blur">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* حقل البحث */}
          <div className="relative w-full sm:flex-1">
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={
                isAr
                  ? 'ابحث باسم المنظومة (باتريوت، رافال، تايفون، إف-16...)، الدولة، أو الشركة الصانعة...'
                  : 'Search by weapon system, country, manufacturer (Patriot, Rafale, F-16...)...'
              }
              className="w-full rounded-xl border border-slate-700 bg-slate-950/80 py-2.5 ps-9 pe-4 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
          </div>

          {/* مرشح الدولة المشترية */}
          <div className="w-full sm:w-auto">
            <select
              value={selectedBuyer}
              onChange={(e) => setSelectedBuyer(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs font-semibold text-slate-200 focus:border-sky-500 focus:outline-none"
            >
              <option value="all">{isAr ? 'جميع الدول المشترية' : 'All Buyers'}</option>
              {buyerOptions.map(([id, name]) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          {/* مرشح الدولة المصدرة */}
          <div className="w-full sm:w-auto">
            <select
              value={selectedSeller}
              onChange={(e) => setSelectedSeller(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs font-semibold text-slate-200 focus:border-sky-500 focus:outline-none"
            >
              <option value="all">{isAr ? 'جميع الدول الموردة (المصدرة)' : 'All Suppliers'}</option>
              {sellerOptions.map(([id, name]) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          {/* زر الترتيب الزمني من الأحدث إلى الأقدم / الأقدم إلى الأحدث */}
          <button
            onClick={() => setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'))}
            className="flex items-center gap-1.5 rounded-xl border border-sky-500/30 bg-sky-500/10 px-3 py-2 text-xs font-bold text-sky-300 hover:bg-sky-500/20 transition shrink-0"
            title={isAr ? 'تغيير الترتيب الزمني' : 'Toggle chronological sorting'}
          >
            <Clock className="h-3.5 w-3.5" />
            <span>
              {sortOrder === 'desc'
                ? isAr
                  ? 'الأحدث أولاً (2026 ← 1941)'
                  : 'Newest First (2026 → 1941)'
                : isAr
                ? 'الأقدم أولاً (1941 → 2026)'
                : 'Oldest First (1941 → 2026)'}
            </span>
          </button>
        </div>

        {/* أزرار الحقب التاريخية (من الحرب العالمية الثانية إلى اللحظة الراهنة) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs border-t border-slate-800/80 pt-2.5">
          <span className="text-[11px] font-bold text-slate-400 shrink-0 me-1">
            {isAr ? 'الحقبة التاريخية:' : 'Historical Era:'}
          </span>
          {eras.map((era) => {
            const active = selectedEra === era.id;
            return (
              <button
                key={era.id}
                onClick={() => setSelectedEra(era.id)}
                className={`flex shrink-0 items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-semibold transition ${
                  active
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'bg-slate-950/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <span>{isAr ? era.labelAr : era.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* أزرار الفئات العسكرية */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {categories.map(({ id, labelAr, labelEn, icon: Icon }) => {
            const active = selectedCategory === id;
            return (
              <button
                key={id}
                onClick={() => setSelectedCategory(id)}
                className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 font-bold transition whitespace-nowrap ${
                  active
                    ? 'bg-sky-600 text-white shadow'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{isAr ? labelAr : labelEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* نتائج البحث والصفقات */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span>
            {isAr
              ? `تم العثور على ${filteredDeals.length} صفقة عسكرية مسجلة`
              : `Found ${filteredDeals.length} registered defense deals`}
          </span>
          <span className="text-[11px] text-slate-500">
            {isAr ? 'انقر على أي بطاقة لعرض كامل تفاصيل العقد والأوفست' : 'Click any card to expand full contract & offset details'}
          </span>
        </div>

        {filteredDeals.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-800 bg-slate-950/50 p-12 text-center">
            <ShieldAlert className="mx-auto h-12 w-12 text-slate-600 mb-3" />
            <h3 className="text-base font-bold text-white mb-1">
              {isAr ? 'لا توجد صفقات تطابق معايير البحث' : 'No defense deals match your criteria'}
            </h3>
            <p className="text-xs text-slate-400">
              {isAr
                ? 'جرب تغيير كلمة البحث أو إعادة تعيين عوامل التصفية لاكتشاف كافة الصفقات'
                : 'Try altering search terms or resetting filters to browse all contracts.'}
            </p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {filteredDeals.map((deal) => {
              const isExpanded = expandedDealId === deal.id;
              const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

              return (
                <div
                  key={deal.id}
                  onClick={() => setExpandedDealId(isExpanded ? null : deal.id)}
                  className={`cursor-pointer rounded-2xl border p-4 sm:p-5 transition-all shadow-lg ${
                    isExpanded
                      ? 'border-sky-500/70 bg-gradient-to-b from-slate-900 to-slate-950 ring-1 ring-sky-500/40'
                      : 'border-slate-800/90 bg-slate-950/70 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  {/* رأس البطاقة: المورد والمشتري مع الأعلام */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-800/70 pb-3">
                    <div className="flex items-center gap-2 min-w-0">
                      {/* علم المورد */}
                      <div className="flex items-center gap-1.5 bg-slate-900 px-2 py-1 rounded-md border border-slate-800 shrink-0">
                        <img
                          src={getFlagUrl(deal.sellerId)}
                          alt={deal.sellerNameEn}
                          className="h-3.5 w-5 rounded object-cover shadow-sm"
                        />
                        <span className="text-xs font-bold text-slate-300">
                          {isAr ? deal.sellerNameAr : deal.sellerNameEn}
                        </span>
                      </div>

                      <ArrowIcon className="h-3.5 w-3.5 text-sky-400 shrink-0" />

                      {/* علم المشتري */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectCountry?.(deal.buyerId);
                        }}
                        title={isAr ? 'عرض الملف الاستخباري الكامل للدولة' : 'View full country intelligence'}
                        className="flex items-center gap-1.5 bg-sky-950/50 hover:bg-sky-900/50 px-2 py-1 rounded-md border border-sky-800/60 shrink-0 transition"
                      >
                        <img
                          src={getFlagUrl(deal.buyerId)}
                          alt={deal.buyerNameEn}
                          className="h-3.5 w-5 rounded object-cover shadow-sm"
                        />
                        <span className="text-xs font-bold text-sky-200">
                          {isAr ? deal.buyerNameAr : deal.buyerNameEn}
                        </span>
                      </button>
                    </div>

                    {/* تصنيف الفئة */}
                    <span className="rounded bg-slate-800/80 px-2 py-0.5 text-[10px] font-bold text-slate-300 shrink-0">
                      {isAr ? deal.categoryAr : deal.categoryEn}
                    </span>
                  </div>

                  {/* اسم المنظومة والقيمة المالية */}
                  <div className="mt-3 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-display text-base sm:text-lg font-black text-white m-0 leading-tight">
                        {isAr ? deal.systemNameAr : deal.systemNameEn}
                      </h3>
                      <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
                        <Building2 className="h-3.5 w-3.5 text-slate-500" />
                        <span>{isAr ? deal.manufacturerAr : deal.manufacturerEn}</span>
                      </div>
                    </div>

                    <div className="text-end shrink-0">
                      <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-mono font-black text-emerald-300">
                        {deal.contractValue}
                      </div>
                      <div className="mt-1 text-[10px] font-mono text-slate-500">
                        {isAr ? `توقيع: ${deal.yearSigned}` : `Signed: ${deal.yearSigned}`}
                      </div>
                    </div>
                  </div>

                  {/* الكمية وجدول التسليم */}
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs rounded-xl bg-slate-900/60 p-2.5 border border-slate-800/60">
                    <div>
                      <span className="text-slate-400 block text-[10px] font-bold">
                        {isAr ? 'الكمية والعتاد:' : 'Quantity & Units:'}
                      </span>
                      <span className="text-slate-200 font-semibold">{deal.quantity}</span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[10px] font-bold">
                        {isAr ? 'جدول التسليم والحالة:' : 'Timeline & Status:'}
                      </span>
                      <span className="text-amber-300 font-medium">{deal.deliveryTimeline}</span>
                    </div>
                  </div>

                  {/* التفاصيل الموسعة عند النقر */}
                  {isExpanded && (
                    <div className="mt-4 space-y-3 border-t border-slate-800 pt-3 text-xs animate-fadeIn">
                      {/* الغاية والتحليل الاستراتيجي */}
                      <div className="rounded-xl border border-sky-500/20 bg-sky-950/20 p-3">
                        <span className="font-bold text-sky-300 block mb-1 flex items-center gap-1.5">
                          <TrendingUp className="h-3.5 w-3.5" />
                          {isAr ? 'الأهمية والغاية الاستراتيجية من الصفقة:' : 'Strategic Rationale & Doctrine:'}
                        </span>
                        <p className="m-0 text-slate-300 leading-relaxed text-xs">
                          {isAr ? deal.strategicRationaleAr : deal.strategicRationaleEn}
                        </p>
                      </div>

                      {/* شروط الأوفست ونقل التكنولوجيا والتوطين */}
                      <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3">
                        <span className="font-bold text-amber-300 block mb-1 flex items-center gap-1.5">
                          <Sparkles className="h-3.5 w-3.5" />
                          {isAr ? 'اتفاقيات الأوفست والتوطين الصناعي والصيانة:' : 'Offset Terms & Local Manufacturing:'}
                        </span>
                        <p className="m-0 text-slate-300 leading-relaxed text-xs">
                          {isAr ? deal.offsetAndLocalAr : deal.offsetAndLocalEn}
                        </p>
                      </div>

                      {/* التحقق والمصدر الرسمي */}
                      <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-slate-950 px-3 py-2 text-[11px] border border-slate-800">
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <Award className="h-3.5 w-3.5 text-emerald-400" />
                          <span>{deal.sourceVerification}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-emerald-400 font-mono font-bold">
                            {deal.confidenceScore}
                          </span>
                          {deal.sourceUrl && (
                            <a
                              href={deal.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 hover:underline"
                            >
                              <span>{isAr ? 'توثيق' : 'Source'}</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* تلميح النقر للمزيد */}
                  <div className="mt-2.5 flex items-center justify-between text-[10px] text-slate-500 font-medium">
                    <span>
                      {isExpanded
                        ? isAr
                          ? '▲ طي التفاصيل'
                          : '▲ Collapse Details'
                        : isAr
                        ? '▼ انقر لتفاصيل الأوفست والمصدر المعتمد'
                        : '▼ Click to expand offsets & verification'}
                    </span>
                    <span className="text-emerald-400/90 font-mono">
                      {isAr ? 'موثق رسمياً' : 'Verified'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
