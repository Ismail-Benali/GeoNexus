import React, { useState, useMemo } from 'react';
import {
  Quote,
  Search,
  Crown,
  Building2,
  Calendar,
  ExternalLink,
  Award,
  Globe,
  TrendingUp,
  Languages,
} from 'lucide-react';
import {
  LEADERS_STATEMENTS_DATABASE,
  getLeadersStatementsStats,
} from '../data/leadersStatementsData';
import { getFlagUrl } from '../utils/countrySymbols';

export default function LeadersStatementsExplorer({ lang = 'ar', onSelectCountry }) {
  const isAr = lang === 'ar';
  const stats = useMemo(() => getLeadersStatementsStats(), []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all'); // 'all' | 'monarchs' | 'presidents' | 'premiers'
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedEra, setSelectedEra] = useState('all');
  const [sortOrder, setSortOrder] = useState('desc'); // 'desc' (2026 -> 1945) or 'asc' (1945 -> 2026)
  const [showOriginalLanguage, setShowOriginalLanguage] = useState({}); // map of id -> boolean

  // الحقب التاريخية المتاحة (من الحرب العالمية الثانية حتى اليوم)
  const eras = [
    { id: 'all', labelAr: 'كافة الحقب (1945 - 2026)', labelEn: 'All Eras (1945–2026)' },
    { id: 'contemporary', labelAr: 'العهد المعاصر (2020 - 2026)', labelEn: 'Contemporary (2020–2026)' },
    { id: 'post_cold_war', labelAr: 'الألفية وما بعد السوفيت (1991 - 2019)', labelEn: '1991–2019 Era' },
    { id: 'cold_war', labelAr: 'الحرب الباردة وحظر النفط (1950 - 1990)', labelEn: 'Cold War (1950–1990)' },
    { id: 'ww2', labelAr: 'الحرب العالمية الثانية وكوينسي (1945 - 1949)', labelEn: 'WWII & Quincy (1945–1949)' },
  ];

  // قائمة الدول المتاحة
  const countryOptions = useMemo(() => {
    const map = new Map();
    LEADERS_STATEMENTS_DATABASE.forEach((s) => {
      map.set(s.countryId, isAr ? s.countryNameAr : s.countryNameEn);
    });
    return Array.from(map.entries());
  }, [isAr]);

  // تصفية وترتيب التصريحات
  const filteredStatements = useMemo(() => {
    const list = LEADERS_STATEMENTS_DATABASE.filter((stmt) => {
      const matchSearch =
        !searchTerm.trim() ||
        stmt.leaderNameAr.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stmt.leaderNameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stmt.verbatimQuoteAr.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stmt.verbatimQuoteOriginal.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stmt.forumOccasionAr.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stmt.strategicDoctrineAr.toLowerCase().includes(searchTerm.toLowerCase());

      const matchType =
        selectedType === 'all' ||
        (selectedType === 'monarchs' && (stmt.leaderType === 'king' || stmt.leaderType === 'crown_prince')) ||
        (selectedType === 'presidents' && stmt.leaderType === 'president') ||
        (selectedType === 'premiers' && stmt.leaderType === 'prime_minister');

      const matchCountry =
        selectedCountry === 'all' || stmt.countryId === selectedCountry;

      let matchEra = true;
      const stmtYear = stmt.year || new Date(stmt.date).getFullYear();
      if (selectedEra === 'contemporary') matchEra = stmtYear >= 2020;
      else if (selectedEra === 'post_cold_war') matchEra = stmtYear >= 1991 && stmtYear < 2020;
      else if (selectedEra === 'cold_war') matchEra = stmtYear >= 1950 && stmtYear < 1991;
      else if (selectedEra === 'ww2') matchEra = stmtYear <= 1949;

      return matchSearch && matchType && matchCountry && matchEra;
    });

    return list.sort((a, b) => {
      const yearA = a.year || new Date(a.date).getFullYear() || 2020;
      const yearB = b.year || new Date(b.date).getFullYear() || 2020;
      return sortOrder === 'desc' ? yearB - yearA : yearA - yearB;
    });
  }, [searchTerm, selectedType, selectedCountry, selectedEra, sortOrder]);

  const toggleLanguage = (id) => {
    setShowOriginalLanguage((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-6">
      {/* الترويسة الرئيسية */}
      <div className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/30 p-5 sm:p-7 shadow-2xl">
        <div className="absolute -end-10 -top-10 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-amber-500 to-rose-600 text-white shadow-lg shadow-amber-500/25">
                <Crown className="h-6 w-6" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-display text-xl sm:text-2xl font-black text-white m-0">
                    {isAr
                      ? 'أرشيف تصريحات وخطابات الملوك ورؤساء الدول الرسمية'
                      : 'World Monarchs & Presidents Official Doctrines & Statements Archive'}
                  </h1>
                  <span className="rounded-full border border-amber-400/40 bg-amber-500/15 px-2.5 py-0.5 text-[11px] font-bold text-amber-300">
                    Official Transcripts
                  </span>
                </div>
                <p className="mt-1 text-xs sm:text-sm text-slate-300 m-0">
                  {isAr
                    ? 'نصوص حرفية وموثقة من خطابات الملوك والرؤساء في المحافل الدولية والقمم والخطابات الملكية، مع تحليل العقائد الاستراتيجية والارتدادات العالمية.'
                    : 'Verbatim official transcripts, doctrines, royal addresses, and strategic stances of heads of state with institutional verification.'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-xl border border-amber-500/40 bg-amber-500/15 px-3 py-1.5 text-xs font-bold text-amber-300">
                <Award className="h-4 w-4" />
                <span>{isAr ? 'نصوص حرفية من السجلات الرسمية' : 'Verbatim Government Records'}</span>
              </span>
            </div>
          </div>

          {/* إحصائيات الترويسة */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
              <div className="text-[11px] font-bold text-slate-400">
                {isAr ? 'خطابات الملوك والأمراء' : 'Monarchs & Royals'}
              </div>
              <div className="mt-1 font-mono text-xl sm:text-2xl font-black text-amber-400">
                {stats.kingsCount} {isAr ? 'خطابات ملكية' : 'Royal Speeches'}
              </div>
              <div className="text-[10px] text-slate-500">
                {isAr ? 'السعودية، الأردن، المغرب...' : 'Saudi, Jordan, Morocco...'}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
              <div className="text-[11px] font-bold text-slate-400">
                {isAr ? 'خطابات رؤساء الدول' : 'Presidents'}
              </div>
              <div className="mt-1 font-mono text-xl sm:text-2xl font-black text-sky-400">
                {stats.presidentsCount} {isAr ? 'خطابات رئاسية' : 'Presidents'}
              </div>
              <div className="text-[10px] text-slate-500">
                {isAr ? 'أمريكا، روسيا، الصين، فرنسا، مصر...' : 'US, Russia, China, France, Egypt...'}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
              <div className="text-[11px] font-bold text-slate-400">
                {isAr ? 'الدقة والاقتباس' : 'Verbatim Authenticity'}
              </div>
              <div className="mt-1 font-mono text-xl sm:text-2xl font-black text-emerald-400">
                100% {isAr ? 'حرفي' : 'Verbatim'}
              </div>
              <div className="text-[10px] text-slate-500">
                {isAr ? 'بالنص العربي والأصلي' : 'Arabic & Original Transcripts'}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
              <div className="text-[11px] font-bold text-slate-400">
                {isAr ? 'التوثيق الحكومي' : 'Verified Sources'}
              </div>
              <div className="mt-1 font-mono text-xl sm:text-2xl font-black text-indigo-400">
                {isAr ? 'وكالات الأنباء' : 'Official News Agencies'}
              </div>
              <div className="text-[10px] text-slate-500">
                {isAr ? 'واس، الكرملين، البيت الأبيض، واج...' : 'SPA, Kremlin, White House, APS...'}
              </div>
            </div>
          </div>
        </div>
      </div>

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
                ? 'ابحث باسم القائد (الملك سلمان، بايدن، بوتين، السيسي، أردوغان...) أو نص الاقتباس أو العقيدة...'
                : 'Search by leader name, quote text, doctrine or forum...'
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950/80 py-2.5 ps-9 pe-4 text-sm text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>

        {/* تصفية صفة القائد */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs w-full sm:w-auto">
          {[
            { id: 'all', labelAr: 'الكل', labelEn: 'All' },
            { id: 'monarchs', labelAr: 'الملوك والأمراء', labelEn: 'Monarchs' },
            { id: 'presidents', labelAr: 'الرؤساء', labelEn: 'Presidents' },
            { id: 'premiers', labelAr: 'رؤساء الوزراء', labelEn: 'Prime Ministers' },
          ].map(({ id, labelAr, labelEn }) => (
            <button
              key={id}
              onClick={() => setSelectedType(id)}
              className={`rounded-lg px-3 py-1.5 font-bold transition whitespace-nowrap ${
                selectedType === id
                  ? 'bg-amber-600 text-white shadow'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {isAr ? labelAr : labelEn}
            </button>
          ))}
        </div>

        {/* تصفية الدولة وزر الترتيب الزمني */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full sm:w-auto rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs font-semibold text-slate-200 focus:border-amber-500 focus:outline-none"
          >
            <option value="all">{isAr ? 'جميع الدول' : 'All Countries'}</option>
            {countryOptions.map(([id, name]) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>

          {/* زر الترتيب الزمني من الأحدث إلى الأقدم / الأقدم إلى الأحدث */}
          <button
            onClick={() => setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'))}
            className="flex items-center gap-1.5 rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-xs font-bold text-amber-300 hover:bg-amber-500/20 transition shrink-0"
            title={isAr ? 'تغيير الترتيب الزمني' : 'Toggle chronological sorting'}
          >
            <Calendar className="h-3.5 w-3.5" />
            <span>
              {sortOrder === 'desc'
                ? isAr
                  ? 'الأحدث أولاً (2026 ← 1945)'
                  : 'Newest First (2026 → 1945)'
                : isAr
                ? 'الأقدم أولاً (1945 → 2026)'
                : 'Oldest First (1945 → 2026)'}
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
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'
              }`}
            >
              <span>{isAr ? era.labelAr : era.labelEn}</span>
            </button>
          );
        })}
      </div>

      {/* قائمة بطاقات التصريحات والخطابات */}
      <div className="space-y-5">
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span>
            {isAr
              ? `تم العثور على ${filteredStatements.length} تصريحاً وخطاباً رسمياً معتمداً`
              : `Found ${filteredStatements.length} verified official statements`}
          </span>
          <span className="text-[11px] text-amber-300 font-mono">
            {isAr ? 'موثقة من وكالات الأنباء والسجلات الرئاسية' : 'Archived from Government Gazettes'}
          </span>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {filteredStatements.map((stmt) => {
            const isOriginal = showOriginalLanguage[stmt.id];

            return (
              <div
                key={stmt.id}
                className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-xl transition-all hover:border-slate-700 space-y-4 flex flex-col justify-between"
              >
                {/* رأس البطاقة: صورة القائد، الاسم، واللقب الرسمي */}
                <div className="flex items-start justify-between gap-3 border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative shrink-0">
                      <img
                        src={stmt.photoUrl}
                        alt={stmt.leaderNameEn}
                        className="h-14 w-14 rounded-2xl border-2 border-amber-500/40 object-cover shadow-md"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <img
                        src={getFlagUrl(stmt.countryId)}
                        alt={stmt.countryNameEn}
                        className="absolute -bottom-1 -end-1 h-5 w-6 rounded border border-slate-800 object-cover shadow"
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onSelectCountry?.(stmt.countryId)}
                          className="font-display text-base font-black text-white hover:text-amber-300 transition truncate text-start m-0"
                        >
                          {isAr ? stmt.leaderNameAr : stmt.leaderNameEn}
                        </button>
                      </div>
                      <p className="m-0 mt-0.5 text-xs text-amber-300 font-medium truncate">
                        {isAr ? stmt.officialTitleAr : stmt.officialTitleEn}
                      </p>
                      <span className="text-[11px] text-slate-400 font-semibold">
                        {isAr ? stmt.countryNameAr : stmt.countryNameEn}
                      </span>
                    </div>
                  </div>

                  {/* نوع القائد */}
                  <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-bold text-amber-300 shrink-0">
                    {isAr ? stmt.leaderTypeAr : stmt.leaderTypeEn}
                  </span>
                </div>

                {/* المناسبة والمنبر والتاريخ */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 rounded-xl bg-slate-900/60 p-2.5 border border-slate-800/60">
                  <div className="flex items-center gap-1.5 text-slate-200 font-medium">
                    <Building2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                    <span>{isAr ? stmt.forumOccasionAr : stmt.forumOccasionEn}</span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono shrink-0">
                    <Calendar className="h-3 w-3 text-slate-500" />
                    <span>{stmt.dateFormattedAr}</span>
                  </div>
                </div>

                {/* الاقتباس الحرفي الموثق */}
                <div className="relative rounded-xl border border-amber-500/20 bg-amber-950/15 p-4">
                  <Quote className="absolute start-3 top-3 h-6 w-6 text-amber-500/25 pointer-events-none" />
                  <p className="relative z-10 m-0 text-sm leading-relaxed text-amber-100 font-medium italic ps-4">
                    {isOriginal ? stmt.verbatimQuoteOriginal : stmt.verbatimQuoteAr}
                  </p>

                  <div className="mt-3 flex items-center justify-between pt-2 border-t border-amber-500/15 text-[11px]">
                    <button
                      onClick={() => toggleLanguage(stmt.id)}
                      className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-bold transition"
                    >
                      <Languages className="h-3.5 w-3.5" />
                      <span>
                        {isOriginal
                          ? isAr
                            ? 'عرض الترجمة العربية الرسمية'
                            : 'Show Arabic Translation'
                          : isAr
                          ? 'عرض النص الحرفي الأصلي'
                          : 'Show Original Language'}
                      </span>
                    </button>

                    <span className="text-[10px] text-amber-400/80 font-mono">
                      {isAr ? 'اقتباس حرفي دقيق' : 'Verbatim Quote'}
                    </span>
                  </div>
                </div>

                {/* التحليل الاستراتيجي والعقيدة السياسية */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-sky-400">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>{isAr ? 'التحليل والعقيدة الاستراتيجية:' : 'Strategic Doctrine & Takeaway:'}</span>
                  </div>
                  <p className="m-0 text-xs text-slate-300 leading-relaxed">
                    {stmt.strategicDoctrineAr}
                  </p>
                </div>

                {/* الارتدادات والتأثير الدولي */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400">
                    <Globe className="h-3.5 w-3.5" />
                    <span>{isAr ? 'الارتدادات والتأثير على الساحة الدولية:' : 'Global Impact & Repercussions:'}</span>
                  </div>
                  <p className="m-0 text-xs text-slate-300 leading-relaxed">
                    {stmt.globalImpactAr}
                  </p>
                </div>

                {/* التوثيق والمصدر الحكومي */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-800/80 pt-3 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Award className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span className="text-[11px]">{stmt.verifiedSourceAr}</span>
                  </div>

                  {stmt.sourceUrl && (
                    <a
                      href={stmt.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 font-bold text-[11px]"
                    >
                      <span>{isAr ? 'المصدر الحكومي' : 'Official Portal'}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
