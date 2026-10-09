import { useState, useMemo } from 'react';
import {
  Shield,
  FileText,
  Target,
  Search,
  X,
  Compass,
  Award,
  ChevronDown,
  ChevronUp,
  MapPin,
  Globe2,
} from 'lucide-react';
import { BILATERAL_TREATIES_DB } from '../data/bilateralTreatiesAndAlliancesDB';

export default function BilateralAlliancesExplorer({
  lang = 'ar',
  isOpen = false,
  onClose = () => {},
  onFocusTreatyOnMap = null,
}) {
  const isAr = lang === 'ar';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCommitment, setSelectedCommitment] = useState('all');
  const [expandedTreatyId, setExpandedTreatyId] = useState(null);

  const filteredTreaties = useMemo(() => {
    return BILATERAL_TREATIES_DB.filter((treaty) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        treaty.titleAr.toLowerCase().includes(q) ||
        treaty.titleEn.toLowerCase().includes(q) ||
        treaty.country1.nameAr.toLowerCase().includes(q) ||
        treaty.country2.nameAr.toLowerCase().includes(q) ||
        treaty.country1.nameEn.toLowerCase().includes(q) ||
        treaty.country2.nameEn.toLowerCase().includes(q) ||
        treaty.strategicPurposeAr.toLowerCase().includes(q) ||
        treaty.sharedArsenal?.some((w) => w.toLowerCase().includes(q));

      const matchesCommitment =
        selectedCommitment === 'all' ||
        (selectedCommitment === 'binding_defense' &&
          (treaty.commitmentLevelAr.includes('دفاع') || treaty.commitmentLevelAr.includes('ملزم'))) ||
        (selectedCommitment === 'strategic_tech' &&
          (treaty.commitmentLevelAr.includes('تسليحي') || treaty.commitmentLevelAr.includes('تكنولوجي')));

      return matchesSearch && matchesCommitment;
    });
  }, [searchQuery, selectedCommitment]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950/85 p-3 backdrop-blur-md animate-fade-in"
      dir={isAr ? 'rtl' : 'ltr'}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative flex flex-col w-full max-w-5xl max-h-[92vh] rounded-2xl border border-amber-500/30 bg-slate-950/95 shadow-2xl text-slate-100 overflow-hidden ring-1 ring-amber-500/20">
        {/* 1. ترويسة المركز الاستخباراتي للمعاهدات */}
        <div className="shrink-0 border-b border-slate-800 bg-gradient-to-r from-amber-950/40 via-slate-900 to-indigo-950/40 p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-xl border border-amber-500/40 bg-amber-500/20 text-amber-300 shadow">
                  <Shield className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="m-0 text-lg sm:text-xl font-black text-white flex items-center gap-2">
                    <span>{isAr ? 'مركز المعاهدات الثنائية والبنود الاستراتيجية بين الدول' : 'Bilateral Treaties & Strategic Defense Clauses Hub'}</span>
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300">
                      LIVE INTEL
                    </span>
                  </h2>
                  <p className="m-0 text-xs text-slate-400 font-semibold">
                    {isAr
                      ? 'رصد غاية التحالفات العسكرية بين الدول، المواد والبنود الدفاعية المعلنة والسرية، ومنظومات التسليح والقواعد المشتركة'
                      : 'Comprehensive analysis of bilateral strategic alliances, mutual defense articles, classified clauses & shared arsenals'}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-slate-800 text-slate-400 hover:border-rose-500/50 hover:text-rose-300 transition"
              aria-label={isAr ? 'إغلاق النافذة' : 'Close modal'}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* 2. شريط البحث والتصفية */}
          <div className="mt-4 flex flex-col sm:flex-row items-center gap-2">
            <div className="relative flex-1 w-full">
              <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isAr
                    ? 'ابحث باسم الدولة أو المعاهدة (مثال: السعودية، مصر، روسيا، أمريكا، الدفاع المشترك)...'
                    : 'Search by nation or treaty keyword...'
                }
                className="w-full rounded-xl border border-slate-800 bg-slate-900/90 py-2 ps-9 pe-3 text-xs text-slate-100 placeholder:text-slate-500 focus:border-amber-500/60 focus:outline-none focus:ring-1 focus:ring-amber-500/40"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* أزرار الفلترة حسب طبيعة الالتزام */}
            <div className="flex items-center gap-1.5 w-full sm:w-auto">
              <button
                onClick={() => setSelectedCommitment('all')}
                className={`flex-1 sm:flex-initial rounded-xl px-3 py-2 text-xs font-bold transition text-center ${
                  selectedCommitment === 'all'
                    ? 'bg-amber-600 text-white shadow font-black'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {isAr ? `كافة المعاهدات (${BILATERAL_TREATIES_DB.length})` : `All (${BILATERAL_TREATIES_DB.length})`}
              </button>
              <button
                onClick={() => setSelectedCommitment('binding_defense')}
                className={`flex-1 sm:flex-initial rounded-xl px-3 py-2 text-xs font-bold transition text-center ${
                  selectedCommitment === 'binding_defense'
                    ? 'bg-rose-600 text-white shadow font-black'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {isAr ? 'دفاع مشترك ملزم' : 'Mutual Defense'}
              </button>
              <button
                onClick={() => setSelectedCommitment('strategic_tech')}
                className={`flex-1 sm:flex-initial rounded-xl px-3 py-2 text-xs font-bold transition text-center ${
                  selectedCommitment === 'strategic_tech'
                    ? 'bg-sky-600 text-white shadow font-black'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {isAr ? 'تسليح وتكنولوجيا' : 'Tech & Arsenal'}
              </button>
            </div>
          </div>
        </div>

        {/* 3. شبكة عرض المعاهدات وبنودها */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {filteredTreaties.length === 0 ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-12 text-center space-y-2">
              <Globe2 className="mx-auto h-8 w-8 text-slate-500" />
              <p className="text-sm font-bold text-slate-400">
                {isAr ? 'لا توجد معاهدات تطابق معايير البحث الحالية.' : 'No treaties match current filters.'}
              </p>
            </div>
          ) : (
            filteredTreaties.map((treaty) => {
              const isExpanded = expandedTreatyId === treaty.id;
              const title = isAr ? treaty.titleAr : treaty.titleEn;
              const purpose = isAr ? treaty.strategicPurposeAr : treaty.strategicPurposeEn;
              const commitment = isAr ? treaty.commitmentLevelAr : treaty.commitmentLevelEn;

              return (
                <div
                  key={treaty.id}
                  className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950 p-4 sm:p-5 transition hover:border-amber-500/40 shadow-lg space-y-4"
                >
                  {/* ترويسة المعاهدة والبلدان المتعاقدة */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/90 pb-3">
                    <div className="space-y-1.5 min-w-0">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        {/* رايات وأسماء الدولتين */}
                        <div className="flex items-center gap-2 rounded-xl bg-slate-950 px-3 py-1 border border-slate-800">
                          <span className="text-lg">{treaty.country1.flag}</span>
                          <span className="font-black text-xs text-white">
                            {isAr ? treaty.country1.nameAr : treaty.country1.nameEn}
                          </span>
                          <span className="text-amber-400 font-bold px-1">⟷</span>
                          <span className="text-lg">{treaty.country2.flag}</span>
                          <span className="font-black text-xs text-white">
                            {isAr ? treaty.country2.nameAr : treaty.country2.nameEn}
                          </span>
                        </div>

                        <span className="font-mono text-xs font-bold text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded-lg">
                          {treaty.signedYear}
                        </span>

                        {treaty.upgradedYear && (
                          <span className="font-mono text-xs font-bold text-sky-300 bg-sky-500/15 border border-sky-500/30 px-2 py-0.5 rounded-lg">
                            {isAr ? `تحديث ${treaty.upgradedYear}` : `Updated ${treaty.upgradedYear}`}
                          </span>
                        )}
                      </div>

                      <h3 className="m-0 text-base sm:text-lg font-black text-white leading-tight">
                        {title}
                      </h3>

                      <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                        <Award className="h-3.5 w-3.5 shrink-0" />
                        <span>{commitment}</span>
                      </div>
                    </div>

                    {/* زر التركيز على الخريطة */}
                    {onFocusTreatyOnMap && (
                      <button
                        onClick={() => {
                          onFocusTreatyOnMap(treaty.coordinates2 || treaty.coordinates1);
                          onClose();
                        }}
                        className="flex items-center gap-1.5 rounded-xl border border-sky-500/40 bg-sky-500/10 hover:bg-sky-500/20 px-3 py-1.5 text-xs font-bold text-sky-300 transition shrink-0"
                      >
                        <Compass className="h-3.5 w-3.5" />
                        <span>{isAr ? 'التركيز بالخريطة' : 'Focus on Map'}</span>
                      </button>
                    )}
                  </div>

                  {/* 1. ما غاية هذا التحالف؟ (Strategic Purpose) */}
                  <div className="rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-slate-900 p-3.5 text-xs space-y-1.5 shadow-sm">
                    <div className="flex items-center gap-2 font-black text-amber-300 text-xs sm:text-sm">
                      <Target className="h-4 w-4 text-amber-400 shrink-0" />
                      <span>{isAr ? 'ما هي غاية هذا التحالف الجيوسياسي والعسكري؟' : 'Strategic Geopolitical Purpose:'}</span>
                    </div>
                    <p className="m-0 text-xs text-slate-100 leading-relaxed font-semibold">
                      {purpose}
                    </p>
                  </div>

                  {/* 2. بنود ومواد المعاهدة والتزامات الدفاع المشترك */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-slate-200 flex items-center gap-1.5">
                        <FileText className="h-4 w-4 text-sky-400" />
                        <span>{isAr ? 'البنود، المواد الرسمية والتزامات الدفاع المشترك:' : 'Key Articles & Mutual Defense Commitments:'}</span>
                      </span>

                      <button
                        onClick={() => setExpandedTreatyId(isExpanded ? null : treaty.id)}
                        className="flex items-center gap-1 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition"
                      >
                        <span>{isExpanded ? (isAr ? 'إخفاء التفاصيل' : 'Less') : (isAr ? `عرض كافة البنود (${treaty.keyClauses.length})` : `Show All (${treaty.keyClauses.length})`)}</span>
                        {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {treaty.keyClauses
                        .slice(0, isExpanded ? treaty.keyClauses.length : 2)
                        .map((clause, cIdx) => (
                          <div
                            key={`cl-${treaty.id}-${cIdx}`}
                            className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-xs space-y-1.5 flex flex-col justify-between"
                          >
                            <div className="space-y-1">
                              <div className="flex items-center justify-between gap-2">
                                <span className="font-mono text-[10px] font-black text-amber-300 bg-amber-500/20 border border-amber-500/30 px-2 py-0.5 rounded">
                                  {clause.articleNumber}
                                </span>
                                <span className="font-bold text-slate-200 text-xs truncate flex-1 ps-1">
                                  {isAr ? clause.titleAr : clause.titleEn}
                                </span>
                              </div>

                              <p className="m-0 text-[11px] text-slate-300 leading-relaxed ps-1 border-s border-indigo-500/50 my-1.5">
                                {isAr ? clause.clauseTextAr : clause.clauseTextEn}
                              </p>
                            </div>

                            <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-[10px] text-emerald-300 font-semibold">
                              <span className="font-bold text-emerald-400">
                                {isAr ? 'الأثر الاستراتيجي: ' : 'Impact: '}
                              </span>
                              <span>{isAr ? clause.significanceAr : clause.significanceEn}</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* 3. العتاد العسكري والقواعد المشتركة */}
                  {treaty.sharedArsenal && (
                    <div className="rounded-xl border border-slate-800 bg-slate-950/90 p-3 text-xs space-y-2">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="font-black text-slate-400 text-[10px]">
                          {isAr ? 'الترسانة والمنظومات الدفاعية المشتركة:' : 'Shared Arsenal & Technologies:'}
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {treaty.sharedArsenal.map((w, wIdx) => (
                            <span
                              key={`weap-${wIdx}`}
                              className="rounded-md border border-slate-700 bg-slate-900 px-2 py-0.5 font-mono text-[10px] text-slate-200"
                            >
                              {w}
                            </span>
                          ))}
                        </div>
                      </div>

                      {treaty.sharedBasesAr && (
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-400 pt-1.5 border-t border-slate-800/80">
                          <MapPin className="h-3.5 w-3.5 text-rose-400 shrink-0" />
                          <span className="font-bold text-rose-300">{isAr ? 'القواعد والتسهيلات: ' : 'Bases: '}</span>
                          <span className="text-slate-300">{treaty.sharedBasesAr}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* 4. تذييل اللوحة */}
        <div className="shrink-0 border-t border-slate-800 bg-slate-900/60 p-3 px-5 flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono text-[11px]">
            {isAr
              ? `تم توثيق ${filteredTreaties.length} معاهدة استراتيجية ملزمة بالبنود والمواد`
              : `${filteredTreaties.length} binding treaties codified with full articles`}
          </span>
          <button
            onClick={onClose}
            className="rounded-lg bg-slate-800 hover:bg-slate-700 px-3 py-1 font-bold text-white transition text-xs"
          >
            {isAr ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
