import React, { useState, useMemo } from 'react';
import {
  Vote,
  Search,
  CheckCircle2,
  XCircle,
  MinusCircle,
  HelpCircle,
  ExternalLink,
  Calendar,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import {
  UN_RESOLUTIONS_DATABASE,
  getCountryUnVotingRecord,
} from '../data/unVotingRecordsData';
import { getFlagUrl } from '../utils/countrySymbols';

export default function UnVotingExplorer({ lang = 'ar', onSelectCountry }) {
  const isAr = lang === 'ar';

  const [activeMode, setActiveMode] = useState('resolutions'); // 'resolutions' | 'country'
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEra, setSelectedEra] = useState('all');
  const [sortOrder, setSortOrder] = useState('desc'); // 'desc' (2026 -> 1947) or 'asc' (1947 -> 2026)
  const [expandedResId, setExpandedResId] = useState(UN_RESOLUTIONS_DATABASE[0]?.id || null);
  const [selectedProfileCountry, setSelectedProfileCountry] = useState('sa'); // for country profile mode

  // الحقب التاريخية لقرارات الأمم المتحدة
  const eras = [
    { id: 'all', labelAr: 'كافة القرارات (1947 - 2026)', labelEn: 'All Resolutions (1947–2026)' },
    { id: 'contemporary', labelAr: 'القرارات المعاصرة (2020 - 2026)', labelEn: 'Contemporary (2020–2026)' },
    { id: 'modern', labelAr: 'الألفية وعاصفة الصحراء (1990 - 2019)', labelEn: '1990–2019 Era' },
    { id: 'cold_war', labelAr: 'الحرب الباردة والحروب العربية (1950 - 1989)', labelEn: 'Cold War (1950–1989)' },
    { id: 'ww2_post', labelAr: 'تأسيس الأمم المتحدة والتقسيم (1945 - 1949)', labelEn: 'Foundational (1945–1949)' },
  ];

  // قائمة الدول المتاحة لملف الدولة
  const COUNTRIES_LIST = [
    { id: 'sa', nameAr: 'المملكة العربية السعودية', nameEn: 'Saudi Arabia' },
    { id: 'eg', nameAr: 'جمهورية مصر العربية', nameEn: 'Egypt' },
    { id: 'dz', nameAr: 'الجمهورية الجزائرية', nameEn: 'Algeria' },
    { id: 'ma', nameAr: 'المملكة المغربية', nameEn: 'Morocco' },
    { id: 'jo', nameAr: 'المملكة الأردنية الهاشمية', nameEn: 'Jordan' },
    { id: 'ae', nameAr: 'دولة الإمارات العربية المتحدة', nameEn: 'United Arab Emirates' },
    { id: 'qa', nameAr: 'دولة قطر', nameEn: 'Qatar' },
    { id: 'kw', nameAr: 'دولة الكويت', nameEn: 'Kuwait' },
    { id: 'us', nameAr: 'الولايات المتحدة الأمريكية', nameEn: 'United States' },
    { id: 'ru', nameAr: 'روسيا الاتحادية', nameEn: 'Russian Federation' },
    { id: 'cn', nameAr: 'جمهورية الصين الشعبية', nameEn: 'China' },
    { id: 'fr', nameAr: 'الجمهورية الفرنسية', nameEn: 'France' },
    { id: 'gb', nameAr: 'المملكة المتحدة', nameEn: 'United Kingdom' },
    { id: 'de', nameAr: 'جمهورية ألمانيا الاتحادية', nameEn: 'Germany' },
    { id: 'tr', nameAr: 'الجمهورية التركية', nameEn: 'Turkey' },
    { id: 'ir', nameAr: 'الجمهورية الإسلامية الإيرانية', nameEn: 'Iran' },
    { id: 'in', nameAr: 'جمهورية الهند', nameEn: 'India' },
    { id: 'br', nameAr: 'جمهورية البرازيل الاتحادية', nameEn: 'Brazil' },
    { id: 'za', nameAr: 'جمهورية جنوب إفريقيا', nameEn: 'South Africa' },
    { id: 'ua', nameAr: 'أوكرانيا', nameEn: 'Ukraine' },
    { id: 'il', nameAr: 'إسرائيل', nameEn: 'Israel' },
  ];

  // تصفية وترتيب القرارات زمنياً
  const filteredResolutions = useMemo(() => {
    const list = UN_RESOLUTIONS_DATABASE.filter((res) => {
      const matchSearch =
        !searchTerm.trim() ||
        res.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
        res.titleAr.toLowerCase().includes(searchTerm.toLowerCase()) ||
        res.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (res.officialSummaryAr && res.officialSummaryAr.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchCategory =
        selectedCategory === 'all' || res.category === selectedCategory;

      let matchEra = true;
      const resYear = res.year || new Date(res.date).getFullYear();
      if (selectedEra === 'contemporary') matchEra = resYear >= 2020;
      else if (selectedEra === 'modern') matchEra = resYear >= 1990 && resYear < 2020;
      else if (selectedEra === 'cold_war') matchEra = resYear >= 1950 && resYear < 1990;
      else if (selectedEra === 'ww2_post') matchEra = resYear <= 1949;

      return matchSearch && matchCategory && matchEra;
    });

    return list.sort((a, b) => {
      const yearA = a.year || new Date(a.date).getFullYear() || 2020;
      const yearB = b.year || new Date(b.date).getFullYear() || 2020;
      return sortOrder === 'desc' ? yearB - yearA : yearA - yearB;
    });
  }, [searchTerm, selectedCategory, selectedEra, sortOrder]);

  // سجل تصويت الدولة المختارة في وضع ملف الدولة
  const selectedCountryRecord = useMemo(() => {
    return getCountryUnVotingRecord(selectedProfileCountry);
  }, [selectedProfileCountry]);

  // إحصائيات تصويت الدولة المختارة
  const selectedCountryStats = useMemo(() => {
    let inFavor = 0;
    let against = 0;
    let abstain = 0;
    selectedCountryRecord.forEach((r) => {
      if (r.userCountryVote === 'in_favor') inFavor++;
      else if (r.userCountryVote === 'against') against++;
      else if (r.userCountryVote === 'abstain') abstain++;
    });
    return { inFavor, against, abstain, total: selectedCountryRecord.length };
  }, [selectedCountryRecord]);

  const getVoteBadge = (vote) => {
    switch (vote) {
      case 'in_favor':
        return {
          bg: 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300',
          icon: CheckCircle2,
          label: isAr ? 'مع (مؤيد)' : 'In Favor',
        };
      case 'against':
        return {
          bg: 'bg-rose-500/15 border-rose-500/40 text-rose-300',
          icon: XCircle,
          label: isAr ? 'ضد (معارض)' : 'Against',
        };
      case 'abstain':
        return {
          bg: 'bg-amber-500/15 border-amber-500/40 text-amber-300',
          icon: MinusCircle,
          label: isAr ? 'امتناع' : 'Abstain',
        };
      case 'absent':
        return {
          bg: 'bg-slate-700/20 border-slate-700 text-slate-400',
          icon: HelpCircle,
          label: isAr ? 'غائب / لم يصوت' : 'Absent',
        };
      default:
        return {
          bg: 'bg-slate-800 border-slate-700 text-slate-400',
          icon: HelpCircle,
          label: isAr ? 'غير مسجل' : 'Not recorded',
        };
    }
  };

  return (
    <div className="space-y-6">
      {/* الترويسة الرئيسية */}
      <div className="relative overflow-hidden rounded-2xl border border-sky-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950/40 p-5 sm:p-7 shadow-2xl">
        <div className="absolute -end-10 -top-10 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25">
                <Vote className="h-6 w-6" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-display text-xl sm:text-2xl font-black text-white m-0">
                    {isAr
                      ? 'سجل تصويت دول العالم في الأمم المتحدة (UNGA · UNSC)'
                      : 'UN General Assembly & Security Council Voting Matrix'}
                  </h1>
                  <span className="rounded-full border border-sky-400/40 bg-sky-500/15 px-2.5 py-0.5 text-[11px] font-bold text-sky-300">
                    UN Digital Library
                  </span>
                </div>
                <p className="mt-1 text-xs sm:text-sm text-slate-300 m-0">
                  {isAr
                    ? 'سجلات التصويت الرسمية لكافة الدول على القرارات التاريخية والحديثة في مجلس الأمن والجمعية العامة، مع شروح المواقف الدبلوماسية الرسمية.'
                    : 'Institutional UN voting records for all member states on landmark peace, sovereignty, Palestine, and disarmament resolutions.'}
                </p>
              </div>
            </div>

            {/* محول النمط: حسب القرار / حسب الدولة */}
            <div className="flex items-center gap-1 rounded-xl border border-slate-800 bg-slate-950/80 p-1">
              <button
                onClick={() => setActiveMode('resolutions')}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                  activeMode === 'resolutions'
                    ? 'bg-sky-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isAr ? 'القرارات الأممية' : 'By Resolutions'}
              </button>
              <button
                onClick={() => setActiveMode('country')}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                  activeMode === 'country'
                    ? 'bg-sky-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isAr ? 'سجل دولة محددة' : 'Country Voting Profile'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* المحتوى حسب النمط المختار */}
      {activeMode === 'resolutions' ? (
        /* 1. نمط استعراض القرارات والشبكة التفاعلية */
        <div className="space-y-5">
          {/* شريط البحث وتصفية الفئات */}
          <div className="flex flex-col sm:flex-row items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/85 p-3.5 backdrop-blur">
            <div className="relative w-full sm:flex-1">
              <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={
                  isAr
                    ? 'ابحث برمز القرار (ES-10/22, 2728...) أو الكلمات المفتاحية (غزة، أوكرانيا، كوبا، الذكاء الاصطناعي)...'
                    : 'Search by symbol (ES-10/22, 2728...) or keywords...'
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-950/80 py-2.5 ps-9 pe-4 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full sm:w-auto rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs font-semibold text-slate-200 focus:border-sky-500 focus:outline-none"
              >
                <option value="all">{isAr ? 'كافة المواضيع والقضايا' : 'All Topics'}</option>
                <option value="palestine_middle_east">{isAr ? 'فلسطين والشرق الأوسط' : 'Palestine & Mideast'}</option>
                <option value="sovereignty_borders">{isAr ? 'السيادة والحدود والسلام' : 'Sovereignty & Borders'}</option>
                <option value="sanctions_embargoes">{isAr ? 'العقوبات والحصار الأحادي' : 'Sanctions & Embargoes'}</option>
                <option value="disarmament_ai_tech">{isAr ? 'نزع السلاح والذكاء الاصطناعي' : 'Disarmament & AI'}</option>
              </select>

              {/* زر الترتيب الزمني */}
              <button
                onClick={() => setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'))}
                className="flex items-center gap-1.5 rounded-xl border border-sky-500/30 bg-sky-500/10 px-3 py-2 text-xs font-bold text-sky-300 hover:bg-sky-500/20 transition shrink-0"
                title={isAr ? 'تغيير الترتيب الزمني' : 'Toggle chronological sorting'}
              >
                <Calendar className="h-3.5 w-3.5" />
                <span>
                  {sortOrder === 'desc'
                    ? isAr
                      ? 'الأحدث أولاً (2026 ← 1947)'
                      : 'Newest First (2026 → 1947)'
                    : isAr
                    ? 'الأقدم أولاً (1947 → 2026)'
                    : 'Oldest First (1947 → 2026)'}
                </span>
              </button>
            </div>
          </div>

          {/* شريط الحقب التاريخية */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
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
                      ? 'bg-sky-500 text-white font-bold shadow-sm'
                      : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  <span>{isAr ? era.labelAr : era.labelEn}</span>
                </button>
              );
            })}
          </div>

          {/* قائمة القرارات */}
          <div className="space-y-4">
            {filteredResolutions.map((res) => {
              const isExpanded = expandedResId === res.id;
              const totalVotes =
                res.tally.inFavor + res.tally.against + res.tally.abstain + (res.tally.absent || 0);

              const favorPercent = Math.round((res.tally.inFavor / totalVotes) * 100);
              const againstPercent = Math.round((res.tally.against / totalVotes) * 100);
              const abstainPercent = Math.round((res.tally.abstain / totalVotes) * 100);

              return (
                <div
                  key={res.id}
                  className={`rounded-2xl border transition-all shadow-xl ${
                    isExpanded
                      ? 'border-sky-500/60 bg-slate-900/95 ring-1 ring-sky-500/30'
                      : 'border-slate-800/90 bg-slate-950/70 hover:border-slate-700'
                  }`}
                >
                  {/* رأس بطاقة القرار */}
                  <div
                    onClick={() => setExpandedResId(isExpanded ? null : res.id)}
                    className="p-4 sm:p-5 cursor-pointer flex flex-col gap-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="rounded-lg border border-sky-500/40 bg-sky-500/10 px-2.5 py-1 text-xs font-mono font-black text-sky-300">
                          {res.symbol}
                        </span>
                        <span className="text-xs text-slate-400 font-semibold">
                          {isAr ? res.bodyAr : res.bodyEn}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Calendar className="h-3.5 w-3.5 text-slate-500" />
                        <span>{res.date}</span>
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4 text-slate-400 ms-1" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-slate-400 ms-1" />
                        )}
                      </div>
                    </div>

                    <div>
                      <h2 className="font-display text-base sm:text-lg font-black text-white m-0">
                        {isAr ? res.titleAr : res.titleEn}
                      </h2>
                      <p className="mt-1 text-xs sm:text-sm text-slate-300 m-0 line-clamp-2 leading-relaxed">
                        {isAr ? res.summaryAr : res.summaryEn}
                      </p>
                    </div>

                    {/* شريط نتيجة التصويت الإجمالية */}
                    <div className="mt-1 space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <div className="flex items-center gap-3">
                          <span className="text-emerald-400 flex items-center gap-1">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block" />
                            {isAr ? `مع: ${res.tally.inFavor}` : `In Favor: ${res.tally.inFavor}`}
                          </span>
                          <span className="text-rose-400 flex items-center gap-1">
                            <span className="h-2 w-2 rounded-full bg-rose-400 inline-block" />
                            {isAr ? `ضد: ${res.tally.against}` : `Against: ${res.tally.against}`}
                          </span>
                          <span className="text-amber-400 flex items-center gap-1">
                            <span className="h-2 w-2 rounded-full bg-amber-400 inline-block" />
                            {isAr ? `امتناع: ${res.tally.abstain}` : `Abstain: ${res.tally.abstain}`}
                          </span>
                        </div>

                        <span className="text-[11px] font-mono text-slate-400">
                          {isAr ? `الأغلبية: ${favorPercent}%` : `Majority: ${favorPercent}%`}
                        </span>
                      </div>

                      {/* شريط بياني ملون للتصويت */}
                      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800 flex">
                        <div
                          style={{ width: `${favorPercent}%` }}
                          className="bg-emerald-500 transition-all"
                          title={`مع: ${res.tally.inFavor}`}
                        />
                        <div
                          style={{ width: `${againstPercent}%` }}
                          className="bg-rose-500 transition-all"
                          title={`ضد: ${res.tally.against}`}
                        />
                        <div
                          style={{ width: `${abstainPercent}%` }}
                          className="bg-amber-500 transition-all"
                          title={`امتناع: ${res.tally.abstain}`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* الجزء الموسع: سجل تصويت كل دولة بالتفصيل الموثق */}
                  {isExpanded && (
                    <div className="border-t border-slate-800 p-4 sm:p-5 space-y-4 bg-slate-950/60">
                      {/* الدلالة الاستراتيجية */}
                      <div className="rounded-xl border border-sky-500/20 bg-sky-950/20 p-3">
                        <span className="font-bold text-sky-300 text-xs block mb-1">
                          {isAr ? 'الأهمية الدبلوماسية والتأثير الجيوسياسي:' : 'Geopolitical Significance:'}
                        </span>
                        <p className="m-0 text-slate-300 text-xs leading-relaxed">
                          {isAr ? res.keySignificanceAr : res.keySignificanceEn}
                        </p>
                      </div>

                      {/* جدول تصويت الدول التفاعلي */}
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="text-xs font-bold text-slate-200">
                            {isAr
                              ? 'سجل تصويت الدول الكبرى والدول الإقليمية بالتفصيل الممل:'
                              : 'Granular Recorded Votes & Diplomatic Positions by Nation:'}
                          </span>

                          <span className="text-[11px] text-slate-400 font-mono">
                            {isAr ? 'وثيقة رسمية: ' + res.unLibraryCode : 'UN Record: ' + res.unLibraryCode}
                          </span>
                        </div>

                        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                          {Object.entries(res.countryVotes).map(([countryId, voteInfo]) => {
                            const badge = getVoteBadge(voteInfo.vote);
                            const BadgeIcon = badge.icon;
                            const countryObj = COUNTRIES_LIST.find((c) => c.id === countryId);
                            const countryName = countryObj
                              ? isAr
                                ? countryObj.nameAr
                                : countryObj.nameEn
                              : countryId.toUpperCase();

                            return (
                              <div
                                key={countryId}
                                className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-2.5 flex flex-col justify-between gap-2"
                              >
                                <div className="flex items-center justify-between gap-2">
                                  <button
                                    onClick={() => onSelectCountry?.(countryId)}
                                    title={isAr ? 'فتح ملف الدولة' : 'View Country'}
                                    className="flex items-center gap-1.5 min-w-0 text-start hover:opacity-80 transition"
                                  >
                                    <img
                                      src={getFlagUrl(countryId)}
                                      alt={countryId}
                                      className="h-3.5 w-5 rounded object-cover shadow-sm shrink-0"
                                    />
                                    <span className="text-xs font-bold text-white truncate">
                                      {countryName}
                                    </span>
                                  </button>

                                  <span
                                    className={`flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-bold shrink-0 ${badge.bg}`}
                                  >
                                    <BadgeIcon className="h-3 w-3" />
                                    <span>{voteInfo.voteAr || badge.label}</span>
                                  </span>
                                </div>

                                {voteInfo.noteAr && (
                                  <p className="m-0 text-[11px] text-slate-400 border-t border-slate-800/60 pt-1.5 leading-relaxed">
                                    {voteInfo.noteAr}
                                  </p>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* رابط الوثيقة الأصلية */}
                      <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">
                        <span className="text-slate-500 text-[11px]">
                          {isAr ? 'مصدر الوثيقة: الأمم المتحدة نيويورك' : 'Official Source: UN Digital Library NY'}
                        </span>
                        {res.sourceUrl && (
                          <a
                            href={res.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-bold"
                          >
                            <span>{isAr ? 'الاطلاع على الوثيقة في مكتبة الأمم المتحدة' : 'View in UN Digital Library'}</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* 2. نمط ملف الدولة وتاريخ تصويتها الكامل */
        <div className="space-y-5">
          {/* محدد الدولة */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/85 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <img
                src={getFlagUrl(selectedProfileCountry)}
                alt={selectedProfileCountry}
                className="h-9 w-12 rounded-lg border border-slate-700 object-cover shadow"
              />
              <div>
                <span className="text-xs text-slate-400 block font-semibold">
                  {isAr ? 'اختر الدولة لاستعراض سجل تصويتها بالكامل:' : 'Select Country to View Complete UN Record:'}
                </span>
                <select
                  value={selectedProfileCountry}
                  onChange={(e) => setSelectedProfileCountry(e.target.value)}
                  className="mt-1 rounded-xl border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm font-bold text-white focus:border-sky-500 focus:outline-none"
                >
                  {COUNTRIES_LIST.map((c) => (
                    <option key={c.id} value={c.id}>
                      {isAr ? c.nameAr : c.nameEn}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* إحصائيات تصويت الدولة */}
            <div className="flex items-center gap-2">
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-center">
                <span className="text-[10px] text-emerald-400 font-bold block">{isAr ? 'مع (مؤيد)' : 'In Favor'}</span>
                <span className="font-mono text-base font-black text-emerald-300">{selectedCountryStats.inFavor}</span>
              </div>
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-3 py-1.5 text-center">
                <span className="text-[10px] text-rose-400 font-bold block">{isAr ? 'ضد (معارض)' : 'Against'}</span>
                <span className="font-mono text-base font-black text-rose-300">{selectedCountryStats.against}</span>
              </div>
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-center">
                <span className="text-[10px] text-amber-400 font-bold block">{isAr ? 'امتناع' : 'Abstain'}</span>
                <span className="font-mono text-base font-black text-amber-300">{selectedCountryStats.abstain}</span>
              </div>
            </div>
          </div>

          {/* سجل القرارات للدولة المختارة */}
          <div className="space-y-3">
            {selectedCountryRecord.map((item) => {
              const badge = getVoteBadge(item.userCountryVote);
              const BadgeIcon = badge.icon;

              return (
                <div
                  key={item.resolutionId}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 transition hover:border-slate-700 space-y-2.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-sky-500/20 border border-sky-500/40 px-2 py-0.5 text-xs font-mono font-bold text-sky-300">
                        {item.symbol}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">{item.date}</span>
                    </div>

                    {/* موقف تصويت الدولة */}
                    <div className={`flex items-center gap-1.5 rounded-lg border px-3 py-1 text-xs font-bold ${badge.bg}`}>
                      <BadgeIcon className="h-4 w-4" />
                      <span>{item.userCountryVoteAr || badge.label}</span>
                    </div>
                  </div>

                  <h3 className="font-display text-base font-bold text-white m-0">
                    {isAr ? item.titleAr : item.titleEn}
                  </h3>

                  {item.userCountryNoteAr && (
                    <div className="rounded-lg bg-slate-900/80 p-2.5 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                      <span className="font-bold text-sky-400 me-1">
                        {isAr ? 'الموقف الدبلوماسي الرسمي المسجل:' : 'Official Stated Diplomatic Position:'}
                      </span>
                      {item.userCountryNoteAr}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
