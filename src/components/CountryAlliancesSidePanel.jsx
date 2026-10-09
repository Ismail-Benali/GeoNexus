import { useState, useMemo } from 'react';
import {
  Shield,
  Coins,
  Globe2,
  Users,
  Award,
  X,
  FileText,
  Target,
} from 'lucide-react';
import { CountryFlag, CountryEmblem } from './CountrySymbols';
import { getCountryAlliancesData } from '../data/countryAlliancesDB';
import { translateText } from '../utils/translator';

export default function CountryAlliancesSidePanel({
  country,
  lang = 'ar',
  onClose = null,
  onSelectCountry = null,
  compact = false,
}) {
  const isAr = lang === 'ar';
  const [filterType, setFilterType] = useState('all'); // 'all' | 'military' | 'economic' | 'bilateral'
  const [expandedTreatyId, setExpandedTreatyId] = useState(null);

  const countryName = translateText(country?.name, lang);
  const countryId = country?.id;
  const alliancesData = useMemo(() => {
    return countryId ? getCountryAlliancesData(countryId) : null;
  }, [countryId]);

  const filteredAlliances = useMemo(() => {
    if (!alliancesData) return [];
    if (filterType === 'military') return alliancesData.militaryAlliances;
    if (filterType === 'economic') return alliancesData.economicAlliances;
    return alliancesData.alliances;
  }, [alliancesData, filterType]);

  const bilateralTreaties = useMemo(() => {
    return alliancesData?.bilateralTreaties || [];
  }, [alliancesData]);

  if (!country || !alliancesData) return null;

  return (
    <div
      className={`relative flex h-full w-full flex-col overflow-hidden bg-slate-950/95 text-slate-100 ${
        compact ? '' : 'rounded-2xl border border-slate-800 shadow-2xl backdrop-blur-md'
      }`}
      dir={isAr ? 'rtl' : 'ltr'}
      aria-label={isAr ? 'لوحة التحالفات العسكرية والمعاهدات والبنود الاستراتيجية' : 'Alliances & Treaties Side Panel'}
    >
      {/* 1. الترويسة العليا للوحة التحالفات */}
      <div className="shrink-0 border-b border-slate-800/90 bg-gradient-to-l from-slate-900 via-slate-900 to-indigo-950/40 p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-indigo-500/40 bg-gradient-to-b from-indigo-500/20 via-slate-900 to-slate-950 p-1 shadow-md">
              <CountryEmblem country={country} className="h-full w-full" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <div className="h-4 w-6 overflow-hidden rounded border border-slate-700 bg-slate-900 shadow-sm shrink-0">
                  <CountryFlag country={country} className="h-full w-full object-cover" />
                </div>
                <h3 className="m-0 truncate text-base font-black text-white sm:text-lg">
                  {countryName}
                </h3>
              </div>
              <p className="m-0 mt-0.5 text-xs font-semibold text-indigo-300 flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5" />
                <span>{isAr ? 'سجل التحالفات، المعاهدات الثنائية والبنود الاستراتيجية' : 'Sovereign Alliances, Bilateral Treaties & Defense Clauses'}</span>
              </p>
            </div>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              aria-label={isAr ? 'إغلاق اللوحة' : 'Close panel'}
              className="grid h-8 w-8 place-items-center rounded-lg border border-slate-800 text-slate-400 hover:border-rose-500/50 hover:text-rose-300 transition"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* 2. شريط الإحصاءات السريعة (تحالفات عسكرية، تكتلات اقتصادية، معاهدات ثنائية، دول شريكة) */}
        <div className="mt-3.5 grid grid-cols-4 gap-1.5 sm:gap-2">
          {/* تحالفات عسكرية */}
          <div className="rounded-xl border border-blue-500/25 bg-blue-500/10 p-2 text-center">
            <span className="block text-[9px] sm:text-[10px] font-bold text-blue-300">
              {isAr ? 'تحالفات عسكرية' : 'Military'}
            </span>
            <span className="font-mono text-sm sm:text-base font-black text-white">
              {alliancesData.militaryAlliancesCount}
            </span>
          </div>

          {/* تكتلات اقتصادية */}
          <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-2 text-center">
            <span className="block text-[9px] sm:text-[10px] font-bold text-emerald-300">
              {isAr ? 'تكتلات اقتصادية' : 'Economic'}
            </span>
            <span className="font-mono text-sm sm:text-base font-black text-white">
              {alliancesData.economicAlliancesCount}
            </span>
          </div>

          {/* معاهدات وبنود ثنائية */}
          <div className="rounded-xl border border-amber-500/25 bg-amber-500/10 p-2 text-center">
            <span className="block text-[9px] sm:text-[10px] font-bold text-amber-300">
              {isAr ? 'معاهدات وبنود' : 'Treaties'}
            </span>
            <span className="font-mono text-sm sm:text-base font-black text-amber-300">
              {alliancesData.bilateralTreatiesCount || bilateralTreaties.length}
            </span>
          </div>

          {/* إجمالي الدول الحليفة والشريكة */}
          <div className="rounded-xl border border-indigo-500/25 bg-indigo-500/10 p-2 text-center">
            <span className="block text-[9px] sm:text-[10px] font-bold text-indigo-300">
              {isAr ? 'دول شريكة' : 'Partners'}
            </span>
            <span className="font-mono text-sm sm:text-base font-black text-white">
              {alliancesData.totalAlliedNationsCount}
            </span>
          </div>
        </div>

        {/* 3. أزرار تصفية التحالفات والمعاهدات (الكل / عسكرية / اقتصادية / معاهدات ثنائية وبنود) */}
        <div className="mt-3 grid grid-cols-4 gap-1">
          <button
            onClick={() => setFilterType('all')}
            className={`rounded-lg py-1.5 text-[11px] font-bold transition text-center ${
              filterType === 'all'
                ? 'bg-indigo-600 text-white shadow font-black'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            {isAr ? 'الكل' : 'All'}
          </button>
          <button
            onClick={() => setFilterType('military')}
            className={`flex items-center justify-center gap-1 rounded-lg py-1.5 text-[11px] font-bold transition text-center ${
              filterType === 'military'
                ? 'bg-blue-600 text-white shadow font-black'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            <Shield className="h-3 w-3" />
            <span>{isAr ? 'عسكرية' : 'Military'}</span>
          </button>
          <button
            onClick={() => setFilterType('economic')}
            className={`flex items-center justify-center gap-1 rounded-lg py-1.5 text-[11px] font-bold transition text-center ${
              filterType === 'economic'
                ? 'bg-emerald-600 text-white shadow font-black'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            <Coins className="h-3 w-3" />
            <span>{isAr ? 'اقتصادية' : 'Economic'}</span>
          </button>
          <button
            onClick={() => setFilterType('bilateral')}
            className={`flex items-center justify-center gap-1 rounded-lg py-1.5 text-[11px] font-bold transition text-center ${
              filterType === 'bilateral'
                ? 'bg-amber-600 text-white shadow font-black'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="h-3 w-3 text-amber-300" />
            <span>{isAr ? 'معاهدات وبنود' : 'Treaties'}</span>
          </button>
        </div>
      </div>

      {/* 4. قائمة التحالفات والتكتلات والمعاهدات التفاعلية */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* أ) قسم المعاهدات الثنائية والبنود الاستراتيجية بين دولة ودولة */}
        {(filterType === 'all' || filterType === 'bilateral') && bilateralTreaties.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-amber-500/30 pb-2">
              <span className="flex items-center gap-1.5 text-xs font-black text-amber-400">
                <Target className="h-4 w-4" />
                <span>{isAr ? 'المعاهدات الثنائية، غايات التحالف والبنود الملزمة:' : 'Bilateral Treaties, Strategic Aims & Binding Clauses:'}</span>
              </span>
              <span className="font-mono text-[10px] text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/30">
                {bilateralTreaties.length} {isAr ? 'معاهدات ملزمة' : 'Binding Pacts'}
              </span>
            </div>

            {bilateralTreaties.map((treaty) => {
              const isExpanded = expandedTreatyId === treaty.id;
              const isArLang = isAr;
              const title = isArLang ? treaty.titleAr : treaty.titleEn;
              const strategicPurpose = isArLang ? treaty.strategicPurposeAr : treaty.strategicPurposeEn;
              const commitment = isArLang ? treaty.commitmentLevelAr : treaty.commitmentLevelEn;

              return (
                <div
                  key={treaty.id}
                  className="rounded-2xl border border-amber-500/30 bg-gradient-to-b from-amber-500/5 via-slate-900/90 to-slate-950 p-4 transition shadow-lg space-y-3"
                >
                  {/* ترويسة المعاهدة والرايات الثنائية */}
                  <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-2.5">
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xl leading-none">
                          {treaty.country1.flag} ⟷ {treaty.country2.flag}
                        </span>
                        <span className="rounded-lg border border-amber-500/40 bg-amber-500/20 px-2 py-0.5 font-mono text-[10px] font-black text-amber-300">
                          {treaty.signedYear}
                        </span>
                        {treaty.upgradedYear && (
                          <span className="rounded-lg border border-sky-500/40 bg-sky-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-sky-300">
                            {isAr ? `تحديث ${treaty.upgradedYear}` : `Upgraded ${treaty.upgradedYear}`}
                          </span>
                        )}
                      </div>

                      <h4 className="m-0 text-sm font-black text-white sm:text-base leading-tight">
                        {title}
                      </h4>

                      <div className="text-[11px] text-amber-400 font-semibold flex items-center gap-1.5">
                        <Shield className="h-3 w-3 shrink-0" />
                        <span>{commitment}</span>
                      </div>
                    </div>
                  </div>

                  {/* 1. ما غاية هذا التحالف؟ (Strategic Purpose) */}
                  <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 font-black text-amber-300">
                      <Target className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                      <span>{isAr ? 'ما هي غاية هذا التحالف الاستراتيجي؟' : 'Strategic Purpose of this Alliance:'}</span>
                    </div>
                    <p className="m-0 text-[11px] text-slate-200 leading-relaxed font-semibold">
                      {strategicPurpose}
                    </p>
                  </div>

                  {/* 2. بنود ومواد المعاهدة الرسمية والسرية (Clauses & Articles) */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-black text-slate-200">
                      <span className="flex items-center gap-1.5 text-sky-400">
                        <FileText className="h-3.5 w-3.5" />
                        <span>{isAr ? 'البنود والاتفاقيات والمواد الإلزامية:' : 'Key Articles & Defense Clauses:'}</span>
                      </span>
                      <button
                        onClick={() => setExpandedTreatyId(isExpanded ? null : treaty.id)}
                        className="text-[10px] text-indigo-400 hover:text-indigo-300 underline font-bold"
                      >
                        {isExpanded ? (isAr ? 'طي البنود' : 'Collapse') : (isAr ? 'عرض كافة البنود' : 'Show All')}
                      </button>
                    </div>

                    <div className="space-y-2">
                      {treaty.keyClauses
                        .slice(0, isExpanded ? treaty.keyClauses.length : 2)
                        .map((clause, idx) => (
                          <div
                            key={`clause-${treaty.id}-${idx}`}
                            className="rounded-xl border border-slate-800 bg-slate-950/90 p-2.5 text-xs space-y-1"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-black text-amber-400 font-mono text-[10px] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                                {clause.articleNumber}
                              </span>
                              <span className="font-bold text-slate-200 text-[11px] truncate flex-1 ps-1">
                                {isAr ? clause.titleAr : clause.titleEn}
                              </span>
                            </div>

                            <p className="m-0 text-[11px] text-slate-300 leading-relaxed ps-1 border-s border-indigo-500/40 my-1">
                              {isAr ? clause.clauseTextAr : clause.clauseTextEn}
                            </p>

                            <div className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 rounded px-2 py-1 border border-emerald-500/20">
                              <span className="font-bold">{isAr ? 'الأثر الاستراتيجي والميداني: ' : 'Strategic Impact: '}</span>
                              <span>{isAr ? clause.significanceAr : clause.significanceEn}</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* 3. أنظمة التسليح المشتركة والقواعد */}
                  {treaty.sharedArsenal && (
                    <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-2.5 text-xs space-y-1.5">
                      <span className="block text-[10px] font-black text-slate-400">
                        {isAr ? 'الترسانة والمنظومات الدفاعية المشتركة:' : 'Shared Weapons & Defense Tech:'}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {treaty.sharedArsenal.map((weapon, wIdx) => (
                          <span
                            key={`w-${wIdx}`}
                            className="rounded-md border border-slate-700 bg-slate-900 px-2 py-0.5 font-mono text-[10px] text-slate-200"
                          >
                            {weapon}
                          </span>
                        ))}
                      </div>

                      {treaty.sharedBasesAr && (
                        <p className="m-0 text-[10px] text-slate-400 pt-1 border-t border-slate-800/80">
                          <span className="font-bold text-sky-400">{isAr ? 'القواعد المشتركة: ' : 'Joint Bases: '}</span>
                          <span>{isAr ? treaty.sharedBasesAr : treaty.sharedBasesAr}</span>
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ب) قائمة التحالفات والتكتلات الدولية الكبرى (الناتو، بريكس، مجلس التعاون، إلخ) */}
        {filterType !== 'bilateral' && (
          <div className="space-y-3">
            {filteredAlliances.length === 0 ? (
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 text-center text-slate-400 text-xs">
                {isAr ? 'لا توجد تحالفات مسجلة ضمن هذا التصنيف.' : 'No alliances recorded in this category.'}
              </div>
            ) : (
              filteredAlliances.map((alliance) => {
                const isMilitary = alliance.type === 'military';

                return (
                  <div
                    key={alliance.id}
                    className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-slate-700 shadow-md space-y-3.5"
                  >
                    {/* ترويسة التحالف والشارة */}
                    <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-3">
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="rounded-lg border border-slate-700 bg-slate-800 px-2 py-0.5 font-mono text-xs font-black text-amber-400">
                            {alliance.code}
                          </span>
                          <h4 className="m-0 text-sm font-black text-white sm:text-base leading-tight">
                            {isAr ? alliance.nameAr : alliance.nameEn}
                          </h4>
                        </div>

                        <div className="flex items-center gap-2 text-[11px] text-slate-400 flex-wrap">
                          <span
                            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.2 text-[10px] font-bold border ${alliance.badgeColor}`}
                          >
                            {isMilitary ? <Shield className="h-3 w-3" /> : <Coins className="h-3 w-3" />}
                            <span>{isAr ? alliance.typeLabelAr : alliance.typeLabelEn}</span>
                          </span>
                          <span>•</span>
                          <span>{isAr ? `تأسس: ${alliance.established}` : `Est: ${alliance.established}`}</span>
                        </div>
                      </div>

                      {alliance.memberCount && (
                        <span className="rounded-xl border border-slate-800 bg-slate-950 px-2.5 py-1 text-center shrink-0">
                          <span className="block font-mono text-sm font-black text-sky-400">
                            {alliance.memberCount}
                          </span>
                          <span className="text-[9px] text-slate-500 font-bold block">
                            {isAr ? 'دولة عضو' : 'Members'}
                          </span>
                        </span>
                      )}
                    </div>

                    {/* دور الدولة المختارة المحدد في هذا التحالف */}
                    <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs">
                      <div className="flex items-center gap-1.5 font-bold text-amber-300 mb-1">
                        <Award className="h-3.5 w-3.5 shrink-0" />
                        <span>{isAr ? `دور ${countryName} في هذا التحالف:` : `Role of ${countryName}:`}</span>
                      </div>
                      <p className="m-0 text-[11px] text-slate-200 leading-relaxed font-semibold">
                        {isAr ? alliance.countryRoleAr : alliance.countryRoleEn}
                      </p>
                    </div>

                    {/* المعاهدة وبند الدفاع المشترك / ميثاق التعاون */}
                    <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-xs space-y-1.5">
                      <div className="flex items-center justify-between gap-2 text-[11px] font-bold text-slate-300">
                        <span className="flex items-center gap-1.5">
                          {isMilitary ? (
                            <Shield className="h-3.5 w-3.5 text-blue-400" />
                          ) : (
                            <Globe2 className="h-3.5 w-3.5 text-emerald-400" />
                          )}
                          <span>{isAr ? alliance.treatyAr : alliance.treatyEn}</span>
                        </span>
                      </div>
                      <p className="m-0 text-[11px] leading-relaxed text-slate-400 border-s-2 border-indigo-500/60 ps-2.5 my-1 italic">
                        {isAr ? alliance.collectiveDefenseClauseAr : alliance.collectiveDefenseClauseEn}
                      </p>
                    </div>

                    {/* المؤشرات التجميعية الكلية للتحالف */}
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 rounded-xl border border-slate-800/80 bg-slate-950/60 p-2.5 text-center">
                      <div>
                        <span className="block text-[9px] text-slate-400">
                          {isAr ? 'الميزانية العسكرية' : 'Combined Budget'}
                        </span>
                        <span className="font-mono text-xs font-black text-emerald-400">
                          ${alliance.combinedMilitaryBudgetBn}B
                        </span>
                      </div>
                      <div>
                        <span className="block text-[9px] text-slate-400">
                          {isAr ? 'الناتج الإجمالي' : 'Combined GDP'}
                        </span>
                        <span className="font-mono text-xs font-black text-sky-400">
                          ${alliance.combinedGdpBn >= 1000 ? `${(alliance.combinedGdpBn / 1000).toFixed(1)}T` : `${alliance.combinedGdpBn}B`}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[9px] text-slate-400">
                          {isAr ? 'القوات النشطة' : 'Active Personnel'}
                        </span>
                        <span className="font-mono text-xs font-black text-amber-400">
                          {alliance.totalActivePersonnelK?.toLocaleString()}k
                        </span>
                      </div>
                      <div>
                        <span className="block text-[9px] text-slate-400">
                          {isAr ? 'قوى نووية' : 'Nuclear States'}
                        </span>
                        <span className="font-mono text-xs font-black text-rose-400">
                          {alliance.nuclearStatesCount}
                        </span>
                      </div>
                    </div>

                    {/* الدول الأعضاء في نفس التحالف */}
                    <div className="space-y-2 pt-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-black text-slate-200 flex items-center gap-1.5">
                          <Users className="h-3.5 w-3.5 text-sky-400" />
                          <span>{isAr ? 'الدول الأعضاء والأدوار الاستراتيجية:' : 'Member States & Strategic Roles:'}</span>
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {alliance.members.length} {isAr ? 'دولة' : 'States'}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                        {alliance.members.map((member) => {
                          const isSelectedMember = member.isSelected;

                          return (
                            <div
                              key={member.id}
                              onClick={() => {
                                if (onSelectCountry && !isSelectedMember) {
                                  onSelectCountry({ id: member.id, name: member.nameAr });
                                }
                              }}
                              className={`flex items-start gap-2 rounded-xl border p-2 text-xs transition ${
                                isSelectedMember
                                  ? 'border-amber-500/60 bg-gradient-to-r from-amber-500/15 to-slate-900 shadow-md ring-1 ring-amber-500/40'
                                  : 'border-slate-800/90 bg-slate-950/70 hover:border-slate-700 hover:bg-slate-900 cursor-pointer'
                              }`}
                            >
                              <div className="text-lg leading-none shrink-0 pt-0.5">
                                {member.flag}
                              </div>

                              <div className="min-w-0 flex-1 space-y-0.5">
                                <div className="flex items-center justify-between gap-1">
                                  <span className={`font-black truncate ${isSelectedMember ? 'text-amber-300' : 'text-white'}`}>
                                    {isAr ? member.nameAr : member.nameEn}
                                  </span>
                                  {isSelectedMember && (
                                    <span className="rounded bg-amber-500/30 px-1 py-0.2 text-[9px] font-bold text-amber-200 shrink-0">
                                      {isAr ? 'الدولة المختارة' : 'Selected'}
                                    </span>
                                  )}
                                </div>

                                <p className="m-0 text-[10px] text-slate-400 leading-snug line-clamp-2">
                                  {isAr ? member.roleAr : member.roleEn}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
}
