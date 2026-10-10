import { useState, useMemo } from 'react';
import {
  Shield,
  Plane,
  Anchor,
  Award,
  ExternalLink,
  Search,
  Eye,
  X,
  Calendar,
  Users,
  MapPin,
  Crosshair,
  Sparkles,
  BookOpen,
  Building,
  CheckCircle2,
  Maximize2,
  Compass,
} from 'lucide-react';
import {
  COUNTRY_MILITARY_INSIGNIAS,
  getCountryMilitaryInsigniaData,
  getMilitaryBranchList,
} from '../data/countryMilitaryInsigniaDB';
import { CountryFlag } from './CountrySymbols';

/**
 * نافذة منبثقة تفاعلية لعرض السجل والتفاصيل الكاملة للوحدة العسكرية عند النقر على الشعار
 */
function MilitaryUnitDetailModal({ unit, lang = 'ar', onClose }) {
  const isAr = lang === 'ar';
  const [imgZoomed, setImgZoomed] = useState(false);

  if (!unit) return null;

  const branchColor =
    unit.branchType === 'air_force'
      ? 'from-sky-600 to-cyan-800'
      : unit.branchType === 'navy'
      ? 'from-blue-700 to-indigo-900'
      : unit.branchType === 'army'
      ? 'from-emerald-700 to-teal-900'
      : 'from-amber-700 to-orange-900';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fadeIn"
      dir={isAr ? 'rtl' : 'ltr'}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl border border-slate-700/80 bg-gradient-to-b from-slate-900 via-slate-950 to-black p-5 sm:p-7 shadow-2xl text-slate-100 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* زر الإغلاق */}
        <button
          onClick={onClose}
          className="absolute top-4 end-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-slate-700 bg-slate-800/80 text-slate-300 hover:border-rose-500 hover:bg-rose-500/20 hover:text-white transition"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* الترويسة الرئيسية للوحدة مع الشعار */}
        <div className={`relative overflow-hidden rounded-2xl border border-slate-700/80 bg-gradient-to-r ${branchColor} p-5 sm:p-6 shadow-xl`}>
          <div className="absolute -top-12 -end-12 h-44 w-44 rounded-full bg-white/10 blur-2xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center gap-5 relative z-10">
            {/* الشعار العسكري الرسمي مع تأثير التكبير */}
            <div className="relative group shrink-0">
              <div
                onClick={() => setImgZoomed(!imgZoomed)}
                className={`relative grid place-items-center rounded-2xl bg-slate-950/80 p-2.5 border border-white/20 shadow-2xl transition cursor-zoom-in ${
                  imgZoomed ? 'h-36 w-36 sm:h-44 sm:w-44' : 'h-24 w-24 sm:h-28 sm:w-28'
                }`}
                title={isAr ? 'اضغط للتكبير' : 'Click to enlarge'}
              >
                <img
                  src={unit.emblemUrl || unit.roundelUrl || unit.ensignUrl}
                  alt={unit.nameAr}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-contain filter drop-shadow-md group-hover:scale-105 transition duration-300"
                  onError={(e) => {
                    if (unit.fallbackEmblemUrl && e.currentTarget.src !== unit.fallbackEmblemUrl) {
                      e.currentTarget.src = unit.fallbackEmblemUrl;
                    }
                  }}
                />
                <span className="absolute bottom-1 end-1 rounded bg-black/60 p-1 text-[9px] text-white opacity-0 group-hover:opacity-100 transition">
                  <Maximize2 className="h-3 w-3" />
                </span>
              </div>
            </div>

            {/* تفاصيل العنوان والشارة */}
            <div className="text-center sm:text-start space-y-1.5 flex-1 min-w-0">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-3 py-0.5 text-xs font-mono font-bold text-white border border-white/20">
                  {unit.badgeLabel}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-950/70 px-2.5 py-0.5 text-[11px] font-bold text-emerald-300 border border-emerald-500/30">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>{isAr ? 'سجل عسكري موثق' : 'Verified Record'}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-white/90">
                  <CountryFlag countryId={unit.countryId} className="h-3.5 w-5 rounded-xs" />
                  <span>{unit.countryName}</span>
                </span>
              </div>

              <h2 className="m-0 text-lg sm:text-2xl font-black text-white tracking-wide">
                {isAr ? unit.nameAr : unit.nameEn}
              </h2>
              <p className="m-0 text-xs sm:text-sm text-white/80 font-mono">
                {unit.nameEn}
              </p>

              {unit.mottoAr && (
                <div className="pt-1">
                  <span className="inline-block rounded-lg bg-black/35 px-3 py-1 text-xs font-bold text-amber-200 border border-amber-400/30">
                    "{unit.mottoAr}"
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* الروابط السيادية الرسمية الموثقة (ويكيبيديا والموقع الرسمي) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* رابط ويكيبيديا الموسوعي المباشر */}
          <a
            href={unit.wikipediaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-3.5 rounded-2xl border border-sky-500/40 bg-gradient-to-r from-sky-950/40 via-slate-900 to-slate-900/80 hover:border-sky-400 hover:from-sky-950/70 transition shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30 group-hover:scale-105 transition">
                <BookOpen className="h-5 w-5" />
              </div>
              <div className="text-start">
                <span className="text-[10px] uppercase font-bold text-sky-400 block tracking-wider">
                  {isAr ? 'موسوعة ويكيبيديا الرسمية' : 'Wikipedia Official Article'}
                </span>
                <span className="text-xs font-black text-white group-hover:text-sky-300 transition block">
                  {isAr ? 'قراءة مقالة الوحدة على ويكيبيديا' : 'Explore Branch on Wikipedia'}
                </span>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 text-sky-400 group-hover:translate-x-0.5 transition" />
          </a>

          {/* البوابة السيادية الرسمية لوزارة الدفاع / القوات المسلحة */}
          <a
            href={unit.officialWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-3.5 rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900/80 hover:border-amber-400 hover:from-amber-950/70 transition shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 group-hover:scale-105 transition">
                <Building className="h-5 w-5" />
              </div>
              <div className="text-start">
                <span className="text-[10px] uppercase font-bold text-amber-400 block tracking-wider">
                  {isAr ? 'الموقع الرسمي للجيش / وزارة الدفاع' : 'Official Defense Portal'}
                </span>
                <span className="text-xs font-black text-white group-hover:text-amber-300 transition block">
                  {isAr ? 'البوابة الرسمية للقوات المسلحة' : 'Visit Official Portal'}
                </span>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 text-amber-400 group-hover:translate-x-0.5 transition" />
          </a>
        </div>

        {/* شبكة المواصفات والجاهزية القتالية */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* تاريخ التأسيس */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 space-y-1">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
              <Calendar className="h-3.5 w-3.5 text-amber-400" />
              <span>{isAr ? 'تاريخ التأسيس والنشأة:' : 'Date Founded & Heritage:'}</span>
            </div>
            <p className="m-0 text-xs sm:text-sm font-semibold text-white ps-5">
              {unit.founded}
            </p>
          </div>

          {/* القيادة ورئاسة الأركان */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 space-y-1">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
              <Award className="h-3.5 w-3.5 text-rose-400" />
              <span>{isAr ? 'القيادة ورئاسة الأركان:' : 'Command & Leadership:'}</span>
            </div>
            <p className="m-0 text-xs sm:text-sm font-semibold text-white ps-5">
              {unit.commander}
            </p>
          </div>

          {/* التعداد البشري والجاهزية */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 space-y-1">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
              <Users className="h-3.5 w-3.5 text-sky-400" />
              <span>{isAr ? 'التعداد والقوة البشرية العاملة:' : 'Active Troops & Personnel:'}</span>
            </div>
            <p className="m-0 text-xs sm:text-sm font-semibold text-emerald-400 font-mono ps-5">
              {unit.activePersonnel}
            </p>
          </div>

          {/* المقر العام */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 space-y-1">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
              <MapPin className="h-3.5 w-3.5 text-indigo-400" />
              <span>{isAr ? 'المقر العام والقيادة المركزية:' : 'Headquarters & Command:'}</span>
            </div>
            <p className="m-0 text-xs sm:text-sm font-semibold text-white ps-5">
              {unit.headquarters}
            </p>
          </div>
        </div>

        {/* الدور التكتيكي والاستراتيجي */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-2">
          <div className="flex items-center gap-2 text-amber-300 text-xs font-bold">
            <Compass className="h-4 w-4 text-amber-400" />
            <span>{isAr ? 'العقيدة القتالية والمهام الاستراتيجية' : 'Strategic Mission & Combat Doctrine'}</span>
          </div>
          <p className="m-0 text-xs sm:text-sm text-slate-300 leading-relaxed">
            {unit.strategicRole}
          </p>
        </div>

        {/* العتاد والتسليح والمنظومات القتالية */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-xs font-bold text-sky-300">
              <Crosshair className="h-4 w-4 text-sky-400" />
              <span>{isAr ? 'العتاد والأسلحة والمنظومات الرئيسية' : 'Primary Equipment & Weapon Platforms'}</span>
            </span>
            <span className="font-mono text-[10px] text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/30">
              COMBAT ASSETS
            </span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {(Array.isArray(unit.primaryEquipment) ? unit.primaryEquipment : [unit.primaryEquipment]).map((eq, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-950/80 px-2.5 py-1 text-xs text-slate-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>{eq}</span>
              </span>
            ))}
          </div>
        </div>

        {/* القواعد العسكرية والانتشار */}
        {(unit.keyBases || []).length > 0 && (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-2">
            <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold">
              <MapPin className="h-4 w-4 text-emerald-400" />
              <span>{isAr ? 'القواعد والمناطق العسكرية التابعة' : 'Major Military Bases & Deployments'}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {unit.keyBases.map((base, idx) => (
                <span
                  key={idx}
                  className="rounded-lg border border-emerald-500/20 bg-emerald-950/30 px-2.5 py-1 text-[11px] font-semibold text-emerald-300"
                >
                  {base}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* تذييل النافذة */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[11px] text-slate-500">
          <span>{isAr ? 'مصدر البيانات: موسوعة ويكيبيديا والمواقع الرسمية لوزارات الدفاع' : 'Data Sourced from Wikipedia & Official Defense Portals'}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl border border-slate-700 bg-slate-800 text-white font-bold hover:bg-slate-700 transition"
          >
            {isAr ? 'إغلاق السجل' : 'Close Dossier'}
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * المكوّن الرئيسي المطلوب: MilitaryInsigniaGallery
 * يعرض شارات القوات البرية والجوية والبحرية لكل دولة
 * مع إمكانية الضغط على الشعار لفتح تفاصيل الوحدة العسكرية ومصادر ويكيبيديا والمواقع الرسمية
 */
export default function MilitaryInsigniaGallery({
  country = null,
  lang = 'ar',
  onSelectCountry,
  initialBranchFilter = 'all',
}) {
  const isAr = lang === 'ar';

  // حالة الدولة المختارة (إذا تم تمرير دولة مبدئية أو تفعيل التحديد الحر)
  const [userSelectedCountryId, setUserSelectedCountryId] = useState(null);
  const currentCountryId = (userSelectedCountryId || country?.id || 'ma').toLowerCase();
  const setCurrentCountryId = setUserSelectedCountryId;
  const [selectedBranchFilter, setSelectedBranchFilter] = useState(initialBranchFilter);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUnitForDetail, setSelectedUnitForDetail] = useState(null);

  // قائمة الدول المتاحة
  const countries = useMemo(() => {
    return Object.values(COUNTRY_MILITARY_INSIGNIAS);
  }, []);

  const activeCountryData = useMemo(() => {
    return getCountryMilitaryInsigniaData(currentCountryId);
  }, [currentCountryId]);

  // قائمة أفرع الدولة النشطة (برية، جوية، بحرية، حرس، خاصة)
  const branchList = useMemo(() => {
    return getMilitaryBranchList(currentCountryId, lang);
  }, [currentCountryId, lang]);

  // تصفية الأفرع حسب التصنيف والبحث
  const filteredBranches = useMemo(() => {
    let result = branchList;

    if (selectedBranchFilter !== 'all') {
      result = result.filter((b) => {
        if (selectedBranchFilter === 'army') return b.branchType === 'army';
        if (selectedBranchFilter === 'air_force') return b.branchType === 'air_force';
        if (selectedBranchFilter === 'navy') return b.branchType === 'navy';
        if (selectedBranchFilter === 'guard') return b.branchType === 'guard' || b.branchType === 'special_forces';
        return true;
      });
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (b) =>
          b.nameAr?.toLowerCase().includes(q) ||
          b.nameEn?.toLowerCase().includes(q) ||
          b.badgeLabel?.toLowerCase().includes(q) ||
          b.commander?.toLowerCase().includes(q) ||
          (Array.isArray(b.primaryEquipment) && b.primaryEquipment.some((eq) => eq.toLowerCase().includes(q)))
      );
    }

    return result;
  }, [branchList, selectedBranchFilter, searchQuery]);

  return (
    <div className="space-y-5" dir={isAr ? 'rtl' : 'ltr'}>
      {/* الترويسة الرئيسية لمعرض الشارات العسكرية */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/35 bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-950 p-5 sm:p-6 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-amber-500 via-rose-600 to-indigo-700 text-white shadow-xl shadow-amber-500/20">
              <Award className="h-7 w-7" />
              <span className="absolute -top-1 -end-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-500" />
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="m-0 text-xl sm:text-2xl font-black text-white">
                  {isAr
                    ? 'معرض الشارات العسكرية الرسمية (Military Insignia Gallery)'
                    : 'Official Military Insignia & Arms Gallery'}
                </h2>
                <span className="rounded-md border border-amber-500/40 bg-amber-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-300">
                  WIKIPEDIA & DEFENSE WEBSITES
                </span>
              </div>
              <p className="m-0 mt-1 text-xs sm:text-sm text-slate-300">
                {isAr
                  ? 'استعراض الشارات والرايات الرسمية للقوات البرية، الجوية، والبحرية. اضغط على أي شعار لفتح بطاقة تفاصيل الوحدة العسكرية وروابط ويكيبيديا ومواقعها الرسمية.'
                  : 'Official heraldry for Army, Air Force, and Navy. Click any insignia to open military unit details, Wikipedia records, and official government portals.'}
              </p>
            </div>
          </div>

          {/* محدد الدولة السريع إذا لم تكن مقيدة */}
          <div className="flex items-center gap-2 flex-wrap shrink-0">
            <div className="relative">
              <select
                value={currentCountryId}
                onChange={(e) => {
                  setCurrentCountryId(e.target.value);
                  onSelectCountry?.({ id: e.target.value });
                }}
                className="appearance-none rounded-xl border border-amber-500/40 bg-slate-900/90 ps-3 pe-8 py-2 text-xs font-bold text-amber-300 focus:border-amber-400 focus:outline-none cursor-pointer"
              >
                {countries.map((c) => (
                  <option key={c.countryId} value={c.countryId} className="bg-slate-900 text-white">
                    {isAr ? c.nameAr : c.nameEn} ({c.countryId.toUpperCase()})
                  </option>
                ))}
              </select>
            </div>

            {activeCountryData.wikipediaUrl && (
              <a
                href={activeCountryData.wikipediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-xl border border-sky-500/30 bg-sky-950/40 px-3 py-2 text-xs font-bold text-sky-300 hover:border-sky-400 hover:bg-sky-900/60 transition"
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>{isAr ? 'ويكيبيديا' : 'Wikipedia'}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            )}

            {activeCountryData.officialWebsiteUrl && (
              <a
                href={activeCountryData.officialWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-xl border border-amber-500/30 bg-amber-950/40 px-3 py-2 text-xs font-bold text-amber-300 hover:border-amber-400 hover:bg-amber-900/60 transition"
              >
                <Building className="h-3.5 w-3.5" />
                <span>{isAr ? 'الموقع الرسمي' : 'Official Portal'}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* شريط الفلاتر والبحث في الأفرع */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-950/80 p-3 rounded-2xl border border-slate-800">
        {/* أزرار الفلترة حسب فرع الجيش */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          <button
            onClick={() => setSelectedBranchFilter('all')}
            className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition whitespace-nowrap ${
              selectedBranchFilter === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Award className="h-3.5 w-3.5" />
            <span>{isAr ? 'كافة الأفرع والتشكيلات' : 'All Branches'}</span>
            <span className="ms-1 rounded bg-black/30 px-1.5 py-0.2 text-[10px] font-mono">
              {branchList.length}
            </span>
          </button>

          <button
            onClick={() => setSelectedBranchFilter('army')}
            className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition whitespace-nowrap ${
              selectedBranchFilter === 'army'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Shield className="h-3.5 w-3.5 text-emerald-400" />
            <span>{isAr ? 'القوات البرية' : 'Land Forces'}</span>
          </button>

          <button
            onClick={() => setSelectedBranchFilter('air_force')}
            className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition whitespace-nowrap ${
              selectedBranchFilter === 'air_force'
                ? 'bg-sky-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Plane className="h-3.5 w-3.5 text-sky-400" />
            <span>{isAr ? 'القوات الجوية (Roundels)' : 'Air Force'}</span>
          </button>

          <button
            onClick={() => setSelectedBranchFilter('navy')}
            className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition whitespace-nowrap ${
              selectedBranchFilter === 'navy'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Anchor className="h-3.5 w-3.5 text-blue-400" />
            <span>{isAr ? 'القوات البحرية (Ensigns)' : 'Navy'}</span>
          </button>

          <button
            onClick={() => setSelectedBranchFilter('guard')}
            className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition whitespace-nowrap ${
              selectedBranchFilter === 'guard'
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Crosshair className="h-3.5 w-3.5 text-purple-400" />
            <span>{isAr ? 'الحرس والعمليات الخاصة' : 'Guards & Special'}</span>
          </button>
        </div>

        {/* مربع البحث */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute start-3 top-2.5 h-3.5 w-3.5 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isAr ? 'بحث في الأفرع والعتاد...' : 'Search units, weapons...'}
            className="w-full rounded-xl border border-slate-800 bg-slate-900 ps-9 pe-3 py-1.5 text-xs text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute end-2.5 top-2.5 text-slate-500 hover:text-white"
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>

      {/* تنبيه تفاعلي يوضح للمستخدم إمكانية النقر على الشعار */}
      <div className="flex items-center justify-between rounded-xl border border-amber-500/25 bg-amber-950/20 px-3.5 py-2 text-xs text-amber-200">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-amber-400 shrink-0" />
          <span>
            {isAr
              ? 'ميزة تفاعلية: انقر على أي شعار عسكري أدناه لفتح بطاقة السجل العسكري الشامل والعتاد وروابط ويكيبيديا والمواقع الرسمية.'
              : 'Interactive Feature: Click on any insignia badge below to inspect full military unit specs, weaponry, Wikipedia entry and official websites.'}
          </span>
        </div>
        <span className="hidden sm:inline font-mono text-[10px] text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
          CLICK TO INSPECT
        </span>
      </div>

      {/* شبكة بطاقات الشارات العسكرية (الأفرع) */}
      {filteredBranches.length === 0 ? (
        <div className="p-10 text-center rounded-2xl border border-slate-800 bg-slate-950/40 text-slate-400">
          <Award className="h-10 w-10 mx-auto text-slate-600 mb-2" />
          <p className="text-sm font-bold">
            {isAr ? 'لم يتم العثور على أفرع عسكرية تطابق هذا البحث' : 'No military branches match this filter'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBranches.map((unit) => {
            const isArmy = unit.branchType === 'army';
            const isAir = unit.branchType === 'air_force';
            const isNavy = unit.branchType === 'navy';

            const cardBorder = isAir
              ? 'border-sky-500/30 hover:border-sky-400 group-hover:shadow-sky-500/20'
              : isNavy
              ? 'border-blue-500/30 hover:border-blue-400 group-hover:shadow-blue-500/20'
              : isArmy
              ? 'border-emerald-500/30 hover:border-emerald-400 group-hover:shadow-emerald-500/20'
              : 'border-purple-500/30 hover:border-purple-400 group-hover:shadow-purple-500/20';

            const badgeBg = isAir
              ? 'bg-sky-950/60 text-sky-300 border-sky-500/30'
              : isNavy
              ? 'bg-blue-950/60 text-blue-300 border-blue-500/30'
              : isArmy
              ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30'
              : 'bg-purple-950/60 text-purple-300 border-purple-500/30';

            const icon = isAir ? (
              <Plane className="h-4 w-4 text-sky-400" />
            ) : isNavy ? (
              <Anchor className="h-4 w-4 text-blue-400" />
            ) : isArmy ? (
              <Shield className="h-4 w-4 text-emerald-400" />
            ) : (
              <Award className="h-4 w-4 text-purple-400" />
            );

            return (
              <div
                key={unit.id}
                onClick={() => setSelectedUnitForDetail(unit)}
                className={`group relative rounded-2xl border ${cardBorder} bg-gradient-to-b from-slate-900/90 to-slate-950 p-4 transition duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer flex flex-col justify-between space-y-4`}
              >
                <div className="space-y-3">
                  {/* رأس البطاقة */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
                    <span className="flex items-center gap-2 text-xs font-bold text-white">
                      {icon}
                      <span>{unit.badgeLabel}</span>
                    </span>
                    <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${badgeBg}`}>
                      {unit.key.toUpperCase()}
                    </span>
                  </div>

                  {/* الشعار والنصوص */}
                  <div className="flex items-center gap-3.5">
                    {/* الشعار العسكري التفاعلي */}
                    <div className="relative shrink-0 h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-slate-950 p-2 border border-slate-800 grid place-items-center group-hover:border-amber-500/50 group-hover:scale-105 transition duration-300 shadow-md">
                      <img
                        src={unit.emblemUrl || unit.roundelUrl || unit.ensignUrl}
                        alt={unit.nameAr}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-contain filter drop-shadow transition"
                        onError={(e) => {
                          if (unit.fallbackEmblemUrl && e.currentTarget.src !== unit.fallbackEmblemUrl) {
                            e.currentTarget.src = unit.fallbackEmblemUrl;
                          }
                        }}
                      />
                      <span className="absolute -top-1.5 -end-1.5 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60" />
                        <span className="relative inline-flex h-4 w-4 rounded-full bg-amber-500 text-[9px] font-bold text-black items-center justify-center">
                          +
                        </span>
                      </span>
                    </div>

                    <div className="min-w-0 flex-1 space-y-1">
                      <h3 className="m-0 text-sm font-black text-white group-hover:text-amber-300 transition truncate">
                        {isAr ? unit.nameAr : unit.nameEn}
                      </h3>
                      <p className="m-0 text-[11px] text-slate-400 font-mono truncate">
                        {unit.nameEn}
                      </p>

                      {unit.mottoAr && (
                        <span className="inline-block text-[10px] font-semibold text-amber-300/90 italic truncate max-w-full">
                          "{unit.mottoAr}"
                        </span>
                      )}
                    </div>
                  </div>

                  {/* بيانات سريعة (التعداد والقائد) */}
                  <div className="bg-slate-950/70 rounded-xl p-2.5 border border-slate-850 space-y-1 text-[11px]">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>{isAr ? 'التعداد:' : 'Personnel:'}</span>
                      <span className="font-mono text-emerald-400 font-bold">{unit.activePersonnel}</span>
                    </div>
                    {unit.commander && (
                      <div className="flex items-center justify-between text-slate-400">
                        <span>{isAr ? 'القيادة:' : 'Command:'}</span>
                        <span className="text-white truncate max-w-[140px]">{unit.commander}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* أزرار الإجراءات وروابط ويكيبيديا والموقع الرسمي */}
                <div className="pt-2 border-t border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    {/* زر ويكيبيديا */}
                    <a
                      href={unit.wikipediaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/90 py-1.5 px-2 text-[11px] font-bold text-sky-400 hover:border-sky-500 hover:text-white transition"
                    >
                      <span>{isAr ? 'ويكيبيديا' : 'Wiki'}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>

                    {/* زر الموقع الرسمي */}
                    <a
                      href={unit.officialWebsiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/90 py-1.5 px-2 text-[11px] font-bold text-amber-400 hover:border-amber-500 hover:text-white transition"
                    >
                      <span>{isAr ? 'الموقع الرسمي' : 'Official'}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  {/* زر فحص تفاصيل الوحدة الكاملة */}
                  <button
                    type="button"
                    onClick={() => setSelectedUnitForDetail(unit)}
                    className="w-full flex items-center justify-center gap-1.5 rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-500/20 via-slate-900 to-amber-500/20 py-1.5 px-3 text-xs font-black text-amber-300 hover:border-amber-400 hover:from-amber-500/30 hover:to-amber-500/30 hover:text-white transition shadow-sm"
                  >
                    <Eye className="h-3.5 w-3.5 text-amber-400" />
                    <span>{isAr ? 'استعراض السجل العسكري والعتاد الكامل' : 'Inspect Full Military Dossier'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* نافذة تفاصيل الوحدة العسكرية المنبثقة عند الضغط على الشعار */}
      {selectedUnitForDetail && (
        <MilitaryUnitDetailModal
          unit={selectedUnitForDetail}
          lang={lang}
          onClose={() => setSelectedUnitForDetail(null)}
        />
      )}
    </div>
  );
}
