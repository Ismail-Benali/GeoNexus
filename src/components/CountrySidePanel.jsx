import { useState, useMemo } from 'react';
import {
  X,
  History,
  Landmark,
  Crown,
  TrendingUp,
  Maximize2,
  Building,
  Shield,
  Clock,
  Globe,
  ExternalLink,
  Activity,
  Network,
  Coins,
} from 'lucide-react';
import { CountryFlag, CountryEmblem } from './CountrySymbols';
import { useLeadership } from '../context/useLeadership';
import {
  getPoliticalSummary,
  getHistoricalSummary,
  getLeaderChangeLog,
} from '../data/politicalHistoryData';
import { calculateStabilityIndex } from '../utils/stabilityIndex';
import { getMilitaryReadinessData } from '../data/militaryData';
import { getCountryEconomicData } from '../data/economicData';
import { translateText } from '../utils/translator';
import NetworkRelationsChart from './NetworkRelationsChart';
import MilitaryReadinessCard from './MilitaryReadinessCard';
import EconomicIndicatorsSection from './EconomicIndicatorsSection';

export default function CountrySidePanel({
  country,
  lang = 'ar',
  onClose,
  onOpenFullDossier,
  onOpenTrendChart,
}) {
  const isAr = lang === 'ar';
  const { getLeader } = useLeadership();
  const [activeTab, setActiveTab] = useState('military'); // 'military' | 'economy' | 'network' | 'parties' | 'leaders' | 'history'

  const currentLeader = getLeader(country);
  const rawLeaderName = isAr ? currentLeader?.nameAr || country?.leader : currentLeader?.nameEn || country?.leader;
  const rawLeaderTitle = isAr ? currentLeader?.titleAr || country?.leaderTitle : currentLeader?.titleEn || country?.leaderTitle;

  const countryName = translateText(country?.name, lang);
  const capital = translateText(country?.capital, lang);
  const regionLabel = translateText(country?.regionLabel, lang);
  const leaderName = translateText(rawLeaderName, lang);
  const leaderTitle = translateText(rawLeaderTitle, lang);

  const politicalSummary = useMemo(() => getPoliticalSummary(country, currentLeader, lang), [country, currentLeader, lang]);
  const historicalEvents = useMemo(() => getHistoricalSummary(country, lang), [country, lang]);
  const leaderChangeLogs = useMemo(() => getLeaderChangeLog(country, currentLeader, lang), [country, currentLeader, lang]);
  const stability = useMemo(() => calculateStabilityIndex(country, lang), [country, lang]);
  const militaryData = useMemo(() => getMilitaryReadinessData(country), [country]);
  const economicData = useMemo(() => getCountryEconomicData(country, lang), [country, lang]);

  if (!country) return null;

  return (
    <aside
      className="animate-fade-up relative flex h-full w-full flex-col overflow-hidden border border-slate-700/80 bg-slate-950/95 shadow-2xl backdrop-blur-md transition-all rounded-2xl"
      dir={isAr ? 'rtl' : 'ltr'}
      aria-label={isAr ? 'لوحة المعلومات الجيوسياسية الجانبية' : 'Geopolitical Side Panel'}
    >
      {/* الترويسة السيادية */}
      <div className="relative shrink-0 border-b border-slate-800 bg-gradient-to-l from-slate-900 via-slate-900 to-sky-950/40 p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            {/* شعار الدولة الرسمي */}
            <div
              className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-amber-500/35 bg-gradient-to-b from-amber-500/10 via-slate-900 to-slate-950 p-1.5 shadow-md"
              title={isAr ? `شعار ${countryName}` : `Coat of arms of ${countryName}`}
            >
              <CountryEmblem country={country} className="h-full w-full" />
            </div>

            {/* راية الدولة والاسم والعاصمة */}
            <div className="min-w-0 leading-tight">
              <div className="flex items-center gap-2">
                <div className="h-5 w-8 overflow-hidden rounded border border-slate-700 bg-slate-900 shadow-sm shrink-0">
                  <CountryFlag country={country} className="h-full w-full object-cover" />
                </div>
                <h3 className="m-0 truncate text-base font-black text-white sm:text-lg">
                  {countryName}
                </h3>
              </div>

              <div className="mt-1 flex items-center gap-2 text-xs text-slate-400 flex-wrap">
                <span>
                  {isAr ? 'العاصمة:' : 'Capital:'}{' '}
                  <span className="font-semibold text-slate-200">{capital}</span>
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-sky-400 font-medium">{regionLabel}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            {onOpenFullDossier && (
              <button
                onClick={onOpenFullDossier}
                title={isAr ? 'فتح الملف الاستخباراتي الكامل' : 'Open full dossier'}
                className="grid h-8 w-8 place-items-center rounded-lg border border-slate-800 text-slate-400 hover:border-sky-500/50 hover:text-sky-300 transition"
              >
                <Maximize2 className="h-4 w-4" />
              </button>
            )}

            <button
              onClick={onClose}
              aria-label={isAr ? 'إغلاق اللوحة الجانبية' : 'Close panel'}
              className="grid h-8 w-8 place-items-center rounded-lg border border-slate-800 text-slate-400 hover:border-rose-500/50 hover:text-rose-300 transition"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* المؤشرات السريعة في الترويسة (الاستقرار، الرتبة العسكرية، النمو، ويكيبيديا) */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {/* شارة مؤشر الاستقرار السياسي */}
          {stability && (
            <div
              className={`flex items-center gap-1.5 rounded-lg border ${stability.badgeBorder} ${stability.badgeBg} px-2.5 py-1 text-xs font-black ${stability.badgeText} shadow-sm`}
              title={isAr ? `مؤشر الاستقرار السياسي: ${stability.score} من 100` : `Political Stability Index: ${stability.score}/100`}
            >
              <Activity className="h-3.5 w-3.5" />
              <span>{isAr ? 'الاستقرار:' : 'Stability:'}</span>
              <span className="font-mono text-sm tracking-tight">{stability.score}/100</span>
            </div>
          )}

          {/* شارة الترتيب العسكري العالمي */}
          {militaryData && (
            <div
              className="flex items-center gap-1.5 rounded-lg border border-rose-500/35 bg-rose-500/10 px-2.5 py-1 text-xs font-black text-rose-300 shadow-sm"
              title={isAr ? `الترتيب العسكري العالمي: المرتبة #${militaryData.globalRank}` : `Global Military Rank: #${militaryData.globalRank}`}
            >
              <Shield className="h-3.5 w-3.5 text-rose-400" />
              <span>{isAr ? 'الجيش:' : 'Military:'}</span>
              <span className="font-mono text-sm tracking-tight">#{militaryData.globalRank}</span>
            </div>
          )}

          {/* شارة نمو الناتج المحلي */}
          {economicData && (
            <div
              className="flex items-center gap-1.5 rounded-lg border border-emerald-500/35 bg-emerald-500/10 px-2.5 py-1 text-xs font-black text-emerald-300 shadow-sm"
              title={isAr ? `نمو الناتج المحلي: +${economicData.gdpGrowth}%` : `GDP Growth: +${economicData.gdpGrowth}%`}
            >
              <Coins className="h-3.5 w-3.5 text-emerald-400" />
              <span>{isAr ? 'النمو:' : 'Growth:'}</span>
              <span className="font-mono text-sm tracking-tight">
                {economicData.gdpGrowth >= 0 ? `+${economicData.gdpGrowth}%` : `${economicData.gdpGrowth}%`}
              </span>
            </div>
          )}

          {onOpenTrendChart && (
            <button
              onClick={onOpenTrendChart}
              className="flex items-center gap-1.5 rounded-lg border border-sky-500/35 bg-sky-500/10 px-2.5 py-1 text-xs font-bold text-sky-300 hover:bg-sky-500/20 transition"
            >
              <TrendingUp className="h-3.5 w-3.5" />
              <span>{isAr ? 'مخطط النمو' : 'Trend'}</span>
            </button>
          )}

          {currentLeader?.wikiUrl && (
            <a
              href={currentLeader.wikiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/90 px-2.5 py-1 text-xs font-bold text-sky-300 hover:border-sky-500/50 hover:bg-slate-800 transition"
              title={isAr ? 'عرض الملف الموثق في ويكيبيديا' : 'Wikipedia entry'}
            >
              <Globe className="h-3.5 w-3.5 text-sky-400" />
              <span>{isAr ? 'ويكيبيديا' : 'Wikipedia'}</span>
              <ExternalLink className="h-3 w-3 text-slate-400" />
            </a>
          )}
        </div>
      </div>

      {/* شريط تبويبات اللوحة الجانبية */}
      <div className="flex shrink-0 border-b border-slate-800 bg-slate-950/70 p-1.5 gap-1 overflow-x-auto">
        <button
          onClick={() => setActiveTab('military')}
          className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
            activeTab === 'military'
              ? 'bg-rose-600 text-white shadow-md font-black'
              : 'text-slate-400 hover:bg-slate-900 hover:text-white'
          }`}
        >
          <Shield className="h-3.5 w-3.5" />
          <span>{isAr ? 'الجاهزية العسكرية' : 'Military Readiness'}</span>
        </button>

        <button
          onClick={() => setActiveTab('economy')}
          className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
            activeTab === 'economy'
              ? 'bg-emerald-600 text-white shadow-md font-black'
              : 'text-slate-400 hover:bg-slate-900 hover:text-white'
          }`}
        >
          <Coins className="h-3.5 w-3.5" />
          <span>{isAr ? 'المؤشرات الاقتصادية' : 'Economic Indicators'}</span>
        </button>

        <button
          onClick={() => setActiveTab('network')}
          className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
            activeTab === 'network'
              ? 'bg-sky-600 text-white shadow-md font-black'
              : 'text-slate-400 hover:bg-slate-900 hover:text-white'
          }`}
        >
          <Network className="h-3.5 w-3.5" />
          <span>{isAr ? 'الاستقرار والشبكة' : 'Stability & Network'}</span>
        </button>

        <button
          onClick={() => setActiveTab('parties')}
          className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
            activeTab === 'parties'
              ? 'bg-indigo-600 text-white shadow-md font-black'
              : 'text-slate-400 hover:bg-slate-900 hover:text-white'
          }`}
        >
          <Landmark className="h-3.5 w-3.5" />
          <span>{isAr ? 'الأحزاب والسياسة' : 'Parties & Politics'}</span>
        </button>

        <button
          onClick={() => setActiveTab('leaders')}
          className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
            activeTab === 'leaders'
              ? 'bg-amber-500 text-slate-950 shadow-md font-black'
              : 'text-slate-400 hover:bg-slate-900 hover:text-white'
          }`}
        >
          <Crown className="h-3.5 w-3.5" />
          <span>{isAr ? 'سجل القادة' : 'Leaders Log'}</span>
        </button>

        <button
          onClick={() => setActiveTab('history')}
          className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
            activeTab === 'history'
              ? 'bg-purple-600 text-white shadow-md font-black'
              : 'text-slate-400 hover:bg-slate-900 hover:text-white'
          }`}
        >
          <History className="h-3.5 w-3.5" />
          <span>{isAr ? 'التاريخ' : 'History'}</span>
        </button>
      </div>

      {/* محتوى اللوحة الجانبية القابل للتمرير */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* التبويب الأول: الجاهزية العسكرية ومخططات Recharts */}
        {activeTab === 'military' && (
          <div className="space-y-4">
            <MilitaryReadinessCard country={country} lang={lang} />
          </div>
        )}

        {/* التبويب الثاني: المؤشرات الاقتصادية والتجارة والتضخم */}
        {activeTab === 'economy' && (
          <div className="space-y-4">
            <EconomicIndicatorsSection country={country} lang={lang} />
          </div>
        )}

        {/* التبويب الثالث: مؤشر الاستقرار السياسي والشبكة الجيوسياسية */}
        {activeTab === 'network' && (
          <div className="space-y-4">
            {/* بطاقة قياس مؤشر الاستقرار السياسي (من 1 إلى 100) */}
            {stability && (
              <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-4 space-y-3.5 shadow-xl">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-sky-400" />
                      <h4 className="m-0 text-sm font-black text-white">
                        {isAr ? 'مؤشر الاستقرار السياسي والسيادي' : 'Political Stability Index'}
                      </h4>
                    </div>
                    <p className="m-0 text-[11px] text-slate-400 leading-relaxed">
                      {isAr
                        ? 'تحليل استخباري مركب يستند إلى بنية الحكم، المناعة الدستورية، المظلة الدفاعية، ومخاطر النزاعات.'
                        : 'Composite metric evaluating governance, constitutional resilience, defense alliances, and conflict risk.'}
                    </p>
                  </div>

                  <div className={`grid h-16 w-16 place-items-center rounded-2xl border-2 ${stability.badgeBorder} ${stability.badgeBg} shadow-lg shrink-0`}>
                    <div className="text-center">
                      <span className={`block font-mono text-xl font-black ${stability.badgeText}`}>
                        {stability.score}
                      </span>
                      <span className="block text-[9px] font-bold text-slate-400 -mt-1">
                        / 100
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className={`font-black ${stability.badgeText}`}>
                      {stability.status}
                    </span>
                    <span className="font-mono text-[11px] text-slate-400">
                      {stability.score}%
                    </span>
                  </div>

                  <div className="h-2.5 w-full rounded-full bg-slate-800 overflow-hidden p-0.5 border border-slate-700/60">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        stability.score >= 80
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                          : stability.score >= 65
                          ? 'bg-gradient-to-r from-sky-500 to-blue-400'
                          : stability.score >= 50
                          ? 'bg-gradient-to-r from-amber-500 to-yellow-400'
                          : 'bg-gradient-to-r from-rose-600 to-red-400'
                      }`}
                      style={{ width: `${stability.score}%` }}
                    />
                  </div>
                </div>

                {/* تفكيك الأبعاد الفرعية */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-slate-800/80">
                  {stability.subMetrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-800/90 bg-slate-950/60 p-2.5 space-y-1"
                    >
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-300 font-semibold truncate">{metric.name}</span>
                        <span className="font-mono font-bold text-sky-400">{metric.score}%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-sky-500"
                          style={{ width: `${metric.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* المخطط الشبكي التفاعلي بواسطة مكتبة Recharts للتحالفات والمنافسات */}
            <NetworkRelationsChart country={country} lang={lang} />
          </div>
        )}

        {/* التبويب الرابع: الأحزاب والكيانات السياسية ونظام الحكم */}
        {activeTab === 'parties' && (
          <div className="space-y-4">
            {/* الأحزاب والكيانات السياسية وعددها */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-3 shadow-xl">
              <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
                <h5 className="m-0 text-xs font-black text-white flex items-center gap-2">
                  <Landmark className="h-4 w-4 text-indigo-400" />
                  <span>{isAr ? 'الأحزاب والكيانات السياسية المعتمدة' : 'Official Political Parties & Entities'}</span>
                </h5>
                <span className="rounded-full bg-indigo-500/20 border border-indigo-500/35 px-2.5 py-0.5 text-xs font-black text-indigo-300 font-mono">
                  {isAr
                    ? `${country.partiesCount ?? country.parties?.length ?? 0} حزب`
                    : `${country.partiesCount ?? country.parties?.length ?? 0} Parties`}
                </span>
              </div>

              {country.partySystem && (
                <div className="text-xs text-slate-300">
                  <span className="font-bold text-slate-400">{isAr ? 'النظام الحزبي والدستوري:' : 'Constitutional System:'} </span>
                  <span className="text-sky-300 font-semibold">{translateText(country.partySystem, lang)}</span>
                </div>
              )}

              {country.partiesNote && (
                <p className="m-0 text-xs leading-relaxed text-indigo-200 bg-indigo-950/20 border border-indigo-500/20 rounded-xl p-3">
                  {translateText(country.partiesNote, lang)}
                </p>
              )}

              <div className="space-y-2 pt-1">
                <span className="text-[10px] font-bold text-slate-400 block">
                  {isAr ? 'الأحزاب السياسية وتشكيلات الأغلبية والمعارضة:' : 'Political Parties & Parliamentary Status:'}
                </span>
                <ul className="m-0 p-0 list-none space-y-1.5">
                  {country.parties?.map((p, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between gap-2 rounded-xl border border-slate-800/80 bg-slate-950/70 p-2.5 text-xs text-slate-200"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="grid h-5 w-5 place-items-center rounded-lg bg-slate-800 text-[10px] font-bold text-slate-300 shrink-0">
                          {idx + 1}
                        </span>
                        <span className="truncate text-xs font-medium text-slate-200">{translateText(p, lang)}</span>
                      </div>
                      {idx === 0 && (
                        <span className="shrink-0 rounded bg-sky-500/15 border border-sky-500/30 px-2 py-0.5 text-[9px] font-bold text-sky-300">
                          {isAr ? 'الائتلاف الحاكم' : 'Ruling'}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* بنية السلطة التنفيذية */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 space-y-1.5">
              <h5 className="m-0 text-xs font-bold text-sky-300 flex items-center gap-1.5">
                <Building className="h-4 w-4" />
                {isAr ? 'بنية السلطة التنفيذية والدستورية' : 'Executive & Constitutional Structure'}
              </h5>
              <p className="m-0 text-xs leading-relaxed text-slate-300">
                {translateText(politicalSummary.executiveStructure, lang)}
              </p>
            </div>

            {/* الكيان الحاكم والبرلمان */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 space-y-1.5">
              <h5 className="m-0 text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                <Landmark className="h-4 w-4" />
                {isAr ? 'الكيان الحاكم والتوزيع البرلماني' : 'Ruling Entity & Legislature'}
              </h5>
              <p className="m-0 text-xs leading-relaxed text-slate-300">
                {translateText(politicalSummary.rulingEntity, lang)}
              </p>
            </div>

            {/* العقيدة الدبلوماسية والتحالفات */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 space-y-1.5">
              <h5 className="m-0 text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                <Shield className="h-4 w-4" />
                {isAr ? 'العقيدة الدبلوماسية والتحالفات الدفاعية' : 'Foreign Policy & Defense Alliances'}
              </h5>
              <p className="m-0 text-xs leading-relaxed text-slate-300">
                {translateText(politicalSummary.foreignPolicyDoctrine, lang)}
              </p>

              <div className="pt-2 flex flex-wrap gap-1">
                {country.alliances.map((a, i) => (
                  <span
                    key={i}
                    className="rounded-md border border-slate-700 bg-slate-950 px-2 py-0.5 text-[10px] font-semibold text-sky-300"
                  >
                    {translateText(a, lang)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* التبويب الخامس: سجل تعاقب وتاريخ القادة والملوك */}
        {activeTab === 'leaders' && (
          <div className="space-y-3">
            {/* بطاقة الحاكم الفعلي الحالي */}
            <div className="rounded-xl border border-amber-500/30 bg-gradient-to-l from-slate-900 via-slate-900 to-amber-950/25 p-3 flex items-center justify-between gap-3 shadow-md">
              <div className="flex items-center gap-3 min-w-0">
                {currentLeader?.photo ? (
                  <img
                    src={currentLeader.photo}
                    alt={leaderName}
                    className="h-12 w-12 rounded-xl object-cover border-2 border-amber-500/40 shadow shrink-0"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-300 shrink-0">
                    <Crown className="h-6 w-6" />
                  </div>
                )}
                <div className="min-w-0">
                  <span className="block truncate text-[10px] font-bold text-amber-400">{leaderTitle}</span>
                  <h4 className="m-0 truncate text-sm font-black text-white">{leaderName}</h4>
                  <span className="text-[10px] text-slate-400">
                    {isAr ? 'في المنصب منذ:' : 'Since:'} {currentLeader?.since || 2020} · {currentLeader?.partyAr || country.rulingParty}
                  </span>
                </div>
              </div>

              {currentLeader?.wikiUrl && (
                <a
                  href={currentLeader.wikiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-900/90 px-2 py-1 text-[10px] font-bold text-sky-300 hover:border-sky-500/50 hover:bg-slate-800 transition shrink-0"
                  title={isAr ? 'عرض الملف الموثق في ويكيبيديا' : 'Wikipedia entry'}
                >
                  <Globe className="h-3 w-3 text-sky-400" />
                  <span>{isAr ? 'ويكيبيديا' : 'Wiki'}</span>
                </a>
              )}
            </div>

            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-3">
              <h4 className="m-0 text-xs font-black text-amber-300 flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {isAr ? 'سجل التعاقب السياسي والتاريخي المعتمد' : 'Official Historical Succession Log'}
              </h4>
              <p className="m-0 mt-0.5 text-[11px] text-slate-400">
                {isAr
                  ? 'تسلسل زمني موثق للملوك ورؤساء الدول مع صور البورتريه المعتمدة من ويكيبيديا ومصادر التاريخ الرسمية'
                  : 'Documented chronology of heads of state with verified Wikipedia portraits'}
              </p>
            </div>

            {/* خط زمني لسجل تغيير القادة */}
            <div className="relative space-y-3.5 border-s-2 border-amber-500/30 ps-4 pt-1">
              {leaderChangeLogs.map((log, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-xl border p-3 transition ${
                    log.isCurrent
                      ? 'border-amber-500/60 bg-gradient-to-l from-slate-900 via-slate-900 to-amber-950/20 shadow-lg'
                      : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                  }`}
                >
                  <span
                    className={`absolute -start-[23px] top-4.5 h-3 w-3 rounded-full border-2 ${
                      log.isCurrent
                        ? 'border-white bg-amber-400 ring-4 ring-amber-500/25'
                        : 'border-slate-950 bg-slate-600'
                    }`}
                  />

                  <div className="flex items-start justify-between gap-2.5">
                    <div className="flex items-center gap-2.5 min-w-0">
                      {log.photo ? (
                        <img
                          src={log.photo}
                          alt={isAr ? log.nameAr : log.nameEn}
                          className="h-11 w-11 rounded-xl object-cover border border-amber-500/40 shadow shrink-0"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fb = e.currentTarget.nextElementSibling;
                            if (fb) fb.style.display = 'grid';
                          }}
                        />
                      ) : null}
                      <div
                        style={{ display: log.photo ? 'none' : 'grid' }}
                        className="grid h-11 w-11 place-items-center rounded-xl border border-slate-700 bg-slate-800 text-amber-300 shrink-0"
                      >
                        <Crown className="h-5 w-5" />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h5 className="m-0 truncate text-xs font-black text-white">
                            {isAr ? log.nameAr : log.nameEn}
                          </h5>
                          {log.isCurrent && (
                            <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-1.5 py-0.2 text-[9px] font-bold text-emerald-300">
                              {isAr ? 'الحاكم الفعلي' : 'Current Leader'}
                            </span>
                          )}
                        </div>

                        <span className="block truncate text-[10px] text-amber-400/90 font-bold">
                          {isAr ? log.titleAr : log.titleEn}
                        </span>

                        <span className="block truncate text-[10px] text-slate-400">
                          {isAr ? log.houseAr : log.houseEn}
                        </span>
                      </div>
                    </div>

                    <span className="shrink-0 rounded-md border border-slate-700 bg-slate-950 px-2 py-0.5 text-[10px] font-mono font-bold text-slate-300">
                      {log.year}
                    </span>
                  </div>

                  <div className="mt-2.5 rounded-lg border border-slate-800/80 bg-slate-950/70 p-2 text-[11px] leading-relaxed text-slate-300">
                    <span className="font-bold text-slate-400 block mb-0.5 text-[10px]">
                      {isAr ? 'سياق انتقال وتولي السلطة:' : 'Transition & Context:'}
                    </span>
                    {isAr ? log.changeReasonAr : log.changeReasonEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* التبويب السادس: الملخص التاريخي والمحطات */}
        {activeTab === 'history' && (
          <div className="space-y-3">
            <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-3">
              <h4 className="m-0 text-xs font-black text-purple-300 flex items-center gap-1.5">
                <History className="h-4 w-4" />
                {isAr ? 'المسار التاريخي والتحولات الوطنية' : 'National Historical Trajectory'}
              </h4>
              <p className="m-0 mt-0.5 text-[11px] text-slate-400">
                {isAr
                  ? 'تسلسل زمني لأبرز المحطات الدستورية والسيادية الكبرى'
                  : 'Chronological timeline of constitutional and sovereign events'}
              </p>
            </div>

            <ol className="relative space-y-3 border-s-2 border-slate-800 ps-4 pt-1">
              {historicalEvents.map((event, i) => (
                <li key={i} className="relative rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                  <span className="absolute -start-[23px] top-3.5 h-3 w-3 rounded-full border-2 border-slate-950 bg-sky-500 ring-2 ring-sky-500/30" />
                  <p className="m-0 text-xs leading-relaxed text-slate-200">{event}</p>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </aside>
  );
}
