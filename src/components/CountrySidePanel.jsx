import { useState, useMemo, useEffect } from 'react';
import {
  X,
  History,
  Landmark,
  Crown,
  TrendingUp,
  Maximize2,
  Building,
  Building2,
  Shield,
  Clock,
  Globe,
  ExternalLink,
  Activity,
  Network,
  Coins,
  Swords,
  Flame,
  Skull,
  AlertOctagon,
  Radio,
  CheckCircle2,
  Copy,
  Sparkles,
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
import { getCountryHistoricalEventsData } from '../data/countryHistoricalEventsDB';
import { getCountryAlliancesData } from '../data/countryAlliancesDB';
import { getCountryOfficialSources } from '../data/countryOfficialSourcesDB';
import { getCountryInvestmentsData } from '../data/countryInvestmentsAndCompaniesDB';
import { getCountryCompanies } from '../data/countryCompaniesDB';
import { fetchCountryLiveNews } from '../services/news';
import { translateText } from '../utils/translator';
import NetworkRelationsChart from './NetworkRelationsChart';
import MilitaryReadinessCard from './MilitaryReadinessCard';
import EconomicIndicatorsSection from './EconomicIndicatorsSection';
import CountryAlliancesSidePanel from './CountryAlliancesSidePanel';
import CountryCurrency10YearChart from './CountryCurrency10YearChart';

export default function CountrySidePanel({
  country,
  lang = 'ar',
  onClose,
  onOpenFullDossier,
  onOpenTrendChart,
  onOpenComparison,
}) {
  const isAr = lang === 'ar';
  const { getLeader } = useLeadership();
  const [activeTab, setActiveTab] = useState('military'); // 'military' | 'alliances' | 'economy' | 'network' | 'parties' | 'leaders' | 'history'

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
  const historicalEventsData = useMemo(() => getCountryHistoricalEventsData(country?.id), [country?.id]);
  const alliancesData = useMemo(() => getCountryAlliancesData(country?.id), [country?.id]);
  const officialSources = useMemo(() => getCountryOfficialSources(country?.id, lang), [country?.id, lang]);
  const investmentsData = useMemo(() => getCountryInvestmentsData(country?.id, lang), [country?.id, lang]);
  const companiesList = useMemo(() => getCountryCompanies(country, lang), [country, lang]);

  const [countryNews, setCountryNews] = useState([]);
  const [copiedUrl, setCopiedUrl] = useState(null);

  useEffect(() => {
    let unmounted = false;
    const fetchNews = async () => {
      try {
        const items = await fetchCountryLiveNews(country?.id, country?.name, lang);
        if (!unmounted && items) {
          setCountryNews(items);
        }
      } catch {
        // keep fallback
      }
    };
    fetchNews();
    return () => {
      unmounted = true;
    };
  }, [country?.id, country?.name, lang]);

  const handleCopyLink = (url) => {
    if (!url) return;
    navigator.clipboard?.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2500);
  };

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
            <button
              onClick={() => setActiveTab('alliances')}
              title={isAr ? 'عرض التحالفات العسكرية والاقتصادية للدولة' : 'View Military & Economic Alliances'}
              className={`grid h-8 w-8 place-items-center rounded-lg border transition ${
                activeTab === 'alliances'
                  ? 'border-indigo-500 bg-indigo-500/20 text-indigo-300'
                  : 'border-slate-800 text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/10'
              }`}
            >
              <Shield className="h-4 w-4" />
            </button>

            <button
              onClick={() => setActiveTab('economy')}
              title={isAr ? 'عرض مخطط تقلبات العملة لـ 10 سنوات' : 'View 10-Year Currency Volatility Chart'}
              className={`grid h-8 w-8 place-items-center rounded-lg border transition ${
                activeTab === 'economy'
                  ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300'
                  : 'border-slate-800 text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10'
              }`}
            >
              <Coins className="h-4 w-4" />
            </button>

            {onOpenComparison && (
              <button
                onClick={() => onOpenComparison(country)}
                title={isAr ? 'مقارنة هذه الدولة مع دولة أخرى' : 'Compare with another country'}
                className="grid h-8 w-8 place-items-center rounded-lg border border-slate-800 text-amber-400 hover:border-amber-500/50 hover:bg-amber-500/10 transition"
              >
                <Swords className="h-4 w-4" />
              </button>
            )}

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
          onClick={() => setActiveTab('alliances')}
          className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
            activeTab === 'alliances'
              ? 'bg-indigo-600 text-white shadow-md font-black'
              : 'text-slate-400 hover:bg-slate-900 hover:text-white'
          }`}
        >
          <Shield className="h-3.5 w-3.5 text-indigo-300" />
          <span>{isAr ? 'التحالفات والشراكات' : 'Alliances & Blocs'}</span>
          {(alliancesData?.totalAlliancesCount || 0) > 0 && (
            <span className="rounded bg-indigo-950/80 border border-indigo-500/40 px-1 py-0.2 text-[9px] font-mono text-indigo-300">
              {alliancesData.totalAlliancesCount}
            </span>
          )}
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
          <span>{isAr ? 'المؤشرات الاقتصادية والعملة' : 'Economy & Currency'}</span>
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

        <button
          onClick={() => setActiveTab('events')}
          className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
            activeTab === 'events'
              ? 'bg-rose-600 text-white shadow-md font-black'
              : 'text-slate-400 hover:bg-slate-900 hover:text-white'
          }`}
        >
          <Flame className="h-3.5 w-3.5" />
          <span>{isAr ? 'الأحداث السيادية' : 'Sovereign Events'}</span>
          {((historicalEventsData?.assassinations?.length || 0) +
            (historicalEventsData?.terrorEvents?.length || 0) +
            (historicalEventsData?.foreignEscalations?.length || 0)) > 0 && (
            <span className="rounded bg-rose-950/80 border border-rose-500/40 px-1 py-0.2 text-[9px] font-mono text-rose-300">
              {(historicalEventsData?.assassinations?.length || 0) +
                (historicalEventsData?.terrorEvents?.length || 0) +
                (historicalEventsData?.foreignEscalations?.length || 0)}
            </span>
          )}
        </button>

        {/* تبويب الشركات والاستثمارات السيادية */}
        <button
          onClick={() => setActiveTab('investments')}
          className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
            activeTab === 'investments'
              ? 'bg-amber-600 text-white shadow-md font-black'
              : 'text-slate-400 hover:bg-slate-900 hover:text-white'
          }`}
        >
          <Building2 className="h-3.5 w-3.5" />
          <span>{isAr ? 'الشركات والاستثمارات' : 'Investments & SWF'}</span>
        </button>

        {/* تبويب المصادر والمنصات الرسمية الموثقة */}
        <button
          onClick={() => setActiveTab('sources')}
          className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
            activeTab === 'sources'
              ? 'bg-sky-600 text-white shadow-md font-black'
              : 'text-slate-400 hover:bg-slate-900 hover:text-white'
          }`}
        >
          <Globe className="h-3.5 w-3.5" />
          <span>{isAr ? 'المصادر الرسمية' : 'Official Sources'}</span>
          <span className="rounded bg-sky-950/80 border border-sky-500/40 px-1 py-0.2 text-[9px] font-mono text-sky-300">
            {officialSources.length}
          </span>
        </button>

        {/* تبويب الأخبار المباشرة والروابط */}
        <button
          onClick={() => setActiveTab('news')}
          className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
            activeTab === 'news'
              ? 'bg-rose-500 text-white shadow-md font-black'
              : 'text-slate-400 hover:bg-slate-900 hover:text-white'
          }`}
        >
          <Radio className="h-3.5 w-3.5 text-rose-400 animate-pulse" />
          <span>{isAr ? 'أحدث الأخبار' : 'Live Wires'}</span>
          {countryNews.length > 0 && (
            <span className="rounded bg-rose-950/80 border border-rose-500/40 px-1 py-0.2 text-[9px] font-mono text-rose-300">
              {countryNews.length}
            </span>
          )}
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

        {/* التبويب الثاني: التحالفات العسكرية والتكتلات الاقتصادية والدول الأعضاء */}
        {activeTab === 'alliances' && (
          <div className="space-y-4">
            <CountryAlliancesSidePanel
              country={country}
              lang={lang}
              compact
              onSelectCountry={onOpenFullDossier}
            />
          </div>
        )}

        {/* التبويب الثالث: المؤشرات الاقتصادية وتقلبات العملة لـ 10 سنوات */}
        {activeTab === 'economy' && (
          <div className="space-y-4">
            {/* الرسم البياني التفاعلي لتقلبات العملة المحلية مقابل الدولار لـ 10 سنوات */}
            <CountryCurrency10YearChart country={country} lang={lang} compact />

            {/* بطاقة العملة وسعر الصرف الرسمي والموازي */}
            {historicalEventsData?.currencyEvolution && (
              <div className="rounded-xl border border-emerald-500/35 bg-gradient-to-l from-slate-900 via-slate-900 to-emerald-950/30 p-3.5 space-y-2.5 shadow-md">
                <div className="flex items-center justify-between gap-2 border-b border-emerald-500/20 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-mono text-sm font-black">
                      {historicalEventsData.currencyEvolution.symbol || '¤'}
                    </div>
                    <div>
                      <h5 className="m-0 text-xs font-black text-white">
                        {isAr ? historicalEventsData.currencyEvolution.nameAr : historicalEventsData.currencyEvolution.nameEn} ({historicalEventsData.currencyEvolution.code})
                      </h5>
                      <span className="text-[10px] text-slate-400 block">
                        {isAr ? historicalEventsData.currencyEvolution.centralBankAr : (historicalEventsData.currencyEvolution.centralBankEn || historicalEventsData.currencyEvolution.centralBankAr)}
                      </span>
                    </div>
                  </div>
                  <span className="rounded bg-emerald-950/60 border border-emerald-500/40 px-2 py-0.5 text-[10px] font-bold text-emerald-300 font-mono">
                    {historicalEventsData.currencyEvolution.code}
                  </span>
                </div>

                <div className="space-y-1 text-xs">
                  <span className="text-[10px] text-slate-400 block font-bold">
                    {isAr ? 'سعر الصرف الموثق / التثبيت:' : 'Exchange Rate / Peg:'}
                  </span>
                  <p className="m-0 font-mono text-xs font-black text-emerald-300">
                    {historicalEventsData.currencyEvolution.currentExchangeRateUsd}
                  </p>
                </div>

                <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-2 text-[11px] text-slate-300 leading-relaxed">
                  <b className="text-slate-400">{isAr ? 'نظام الصرف: ' : 'Regime: '}</b>
                  <span>{isAr ? historicalEventsData.currencyEvolution.pegStatusAr : (historicalEventsData.currencyEvolution.pegStatusEn || historicalEventsData.currencyEvolution.pegStatusAr)}</span>
                </div>
              </div>
            )}

            <EconomicIndicatorsSection country={country} lang={lang} />
          </div>
        )}

        {/* تبويب الأحداث السيادية: اغتيالات، إرهاب، تصاعدات أجنبية */}
        {activeTab === 'events' && (
          <div className="space-y-3.5">
            <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-3">
              <h4 className="m-0 text-xs font-black text-rose-300 flex items-center gap-1.5">
                <Flame className="h-4 w-4" />
                {isAr ? 'السجل السيادي: اغتيالات وإرهاب وتصاعدات' : 'Sovereign Events Registry'}
              </h4>
              <p className="m-0 mt-0.5 text-[11px] text-slate-400">
                {isAr
                  ? 'رصد استخباري للأحداث السيادية المفصلية والاغتيالات والنزاعات الدولية الكبرى'
                  : 'Documented assassinations, terror incidents, and foreign conflicts'}
              </p>
            </div>

            {/* بطاقة العملة السريعة */}
            {historicalEventsData?.currencyEvolution && (
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-xs flex items-center justify-between">
                <div>
                  <span className="text-slate-400 block text-[10px]">{isAr ? 'سعر صرف العملة الموثق:' : 'Currency Exchange Rate:'}</span>
                  <span className="font-mono font-bold text-emerald-400">{historicalEventsData.currencyEvolution.currentExchangeRateUsd}</span>
                </div>
                <Coins className="h-4 w-4 text-emerald-400" />
              </div>
            )}

            {/* 1. الاغتيالات السياسية */}
            {historicalEventsData?.assassinations?.length > 0 && (
              <div className="space-y-2">
                <h5 className="m-0 text-xs font-black text-rose-400 flex items-center gap-1.5">
                  <Skull className="h-3.5 w-3.5" />
                  <span>{isAr ? 'الاغتيالات السياسية الكبرى' : 'Political Assassinations'}</span>
                </h5>
                <div className="space-y-2">
                  {historicalEventsData.assassinations.map((item, idx) => (
                    <div key={idx} className="rounded-xl border border-rose-500/30 bg-slate-900/60 p-2.5 space-y-1 text-xs">
                      <div className="flex items-center justify-between gap-1.5">
                        <span className="font-bold text-white text-[11px]">{isAr ? item.targetAr : item.targetEn}</span>
                        <span className="font-mono text-[10px] text-rose-400 shrink-0">{item.year}</span>
                      </div>
                      <span className="text-[10px] text-rose-300/80 block">
                        {isAr ? 'المنفذ:' : 'Perpetrator:'} {isAr ? item.perpetratorAr : item.perpetratorEn}
                      </span>
                      <p className="m-0 text-[11px] text-slate-300 leading-relaxed pt-1 border-t border-slate-800/60">
                        {isAr ? item.detailsAr : item.detailsEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. العمليات الإرهابية */}
            {historicalEventsData?.terrorEvents?.length > 0 && (
              <div className="space-y-2">
                <h5 className="m-0 text-xs font-black text-amber-400 flex items-center gap-1.5">
                  <AlertOctagon className="h-3.5 w-3.5" />
                  <span>{isAr ? 'العمليات الإرهابية ومكافحة الإرهاب' : 'Terrorism Incidents'}</span>
                </h5>
                <div className="space-y-2">
                  {historicalEventsData.terrorEvents.map((item, idx) => (
                    <div key={idx} className="rounded-xl border border-amber-500/30 bg-slate-900/60 p-2.5 space-y-1 text-xs">
                      <div className="flex items-center justify-between gap-1.5">
                        <span className="font-bold text-white text-[11px]">{isAr ? item.titleAr : item.titleEn}</span>
                        <span className="font-mono text-[10px] text-amber-400 shrink-0">{item.year}</span>
                      </div>
                      <span className="text-[10px] text-amber-300/80 block">
                        {isAr ? 'الجهة:' : 'Group:'} {isAr ? item.groupAr : item.groupEn}
                      </span>
                      <p className="m-0 text-[11px] text-slate-300 leading-relaxed pt-1 border-t border-slate-800/60">
                        {isAr ? item.detailsAr : item.detailsEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. التصاعدات والحروب الخارجية */}
            {historicalEventsData?.foreignEscalations?.length > 0 && (
              <div className="space-y-2">
                <h5 className="m-0 text-xs font-black text-purple-400 flex items-center gap-1.5">
                  <Swords className="h-3.5 w-3.5" />
                  <span>{isAr ? 'التصاعدات والحروب مع دول أجنبية' : 'Foreign Escalations'}</span>
                </h5>
                <div className="space-y-2">
                  {historicalEventsData.foreignEscalations.map((item, idx) => (
                    <div key={idx} className="rounded-xl border border-purple-500/30 bg-slate-900/60 p-2.5 space-y-1 text-xs">
                      <div className="flex items-center justify-between gap-1.5">
                        <span className="font-bold text-white text-[11px]">{isAr ? item.titleAr : item.titleEn}</span>
                        <span className="font-mono text-[10px] text-purple-400 shrink-0">{item.year}</span>
                      </div>
                      <span className="text-[10px] text-purple-300/80 block">
                        {isAr ? 'الطرف الخصم:' : 'Opponent:'} {isAr ? item.opponentCountryAr : item.opponentCountryEn}
                      </span>
                      <p className="m-0 text-[11px] text-slate-300 leading-relaxed pt-1 border-t border-slate-800/60">
                        {isAr ? item.detailsAr : item.detailsEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* زر فتح الملف السيادي الكامل */}
            {onOpenFullDossier && (
              <button
                onClick={() => onOpenFullDossier(country)}
                className="w-full mt-2 flex items-center justify-center gap-2 rounded-xl border border-rose-500/40 bg-gradient-to-r from-rose-500/20 to-amber-500/20 p-2.5 text-xs font-bold text-rose-200 hover:bg-rose-500/30 transition shadow"
              >
                <Flame className="h-4 w-4 text-rose-400" />
                <span>{isAr ? 'فتح الملف السيادي والأحداث بالتفصيل الكامل' : 'Open Full Sovereign Dossier & Events'}</span>
              </button>
            )}
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

        {/* التبويب السابع: الشركات والاستثمارات والصناديق السيادية والمشاريع الكبرى */}
        {activeTab === 'investments' && (
          <div className="space-y-4">
            {/* بطاقة الصندوق السيادي */}
            {investmentsData?.sovereignWealthFund && (
              <div className="rounded-2xl border border-amber-500/35 bg-gradient-to-l from-slate-900 via-slate-900 to-amber-950/25 p-4 space-y-3 shadow-lg">
                <div className="flex items-center justify-between gap-2 border-b border-amber-500/20 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300">
                      <Coins className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="m-0 text-sm font-black text-white">
                        {isAr ? investmentsData.sovereignWealthFund.nameAr : investmentsData.sovereignWealthFund.nameEn}
                      </h4>
                      <span className="text-[11px] font-mono text-amber-400 font-bold">
                        {investmentsData.sovereignWealthFund.acronym} · {isAr ? `المرتبة #${investmentsData.sovereignWealthFund.globalRank} عالمياً` : `Rank #${investmentsData.sovereignWealthFund.globalRank} Globally`}
                      </span>
                    </div>
                  </div>

                  <div className="text-end shrink-0">
                    <span className="text-[10px] text-slate-400 block">{isAr ? 'حجم الأصول (AUM):' : 'Assets Under Mgmt:'}</span>
                    <span className="font-mono text-base font-black text-amber-300">
                      ${investmentsData.sovereignWealthFund.aumBn}B
                    </span>
                  </div>
                </div>

                <p className="m-0 text-xs leading-relaxed text-slate-300">
                  {isAr ? investmentsData.sovereignWealthFund.strategyAr : investmentsData.sovereignWealthFund.strategyEn}
                </p>

                {/* كبرى الحصص والأصول الدولية للصندوق */}
                {investmentsData.sovereignWealthFund.majorHoldings && investmentsData.sovereignWealthFund.majorHoldings.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold text-amber-300 flex items-center gap-1">
                      <Sparkles className="h-3 w-3 text-amber-400" />
                      <span>{isAr ? 'أبرز الاستثمارات والأصول السيادية الكبرى:' : 'Key Sovereign Holdings & Assets:'}</span>
                    </span>
                    <div className="grid gap-1.5 sm:grid-cols-2">
                      {investmentsData.sovereignWealthFund.majorHoldings.map((h, i) => (
                        <div key={i} className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 text-xs flex items-center justify-between gap-2">
                          <div className="min-w-0">
                            <span className="font-bold text-white block truncate">{h.name}</span>
                            <span className="text-[10px] text-slate-400">{h.sector} ({h.country})</span>
                          </div>
                          <span className="font-mono text-[10px] font-bold text-amber-400 bg-amber-950/50 border border-amber-500/30 px-1.5 py-0.5 rounded shrink-0">
                            {h.stake}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* المشاريع الاستراتيجية والمدن الكبرى */}
            {investmentsData?.strategicMegaProjects && investmentsData.strategicMegaProjects.length > 0 && (
              <div className="space-y-2">
                <h4 className="m-0 text-xs font-black text-slate-200 flex items-center gap-1.5">
                  <Building2 className="h-4 w-4 text-sky-400" />
                  <span>{isAr ? 'المشروعات القومية والمدن المستقبلية العملاقة' : 'Mega Giga-Projects & Strategic Corridors'}</span>
                </h4>
                <div className="space-y-2">
                  {investmentsData.strategicMegaProjects.map((proj, idx) => (
                    <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h5 className="m-0 text-xs font-bold text-white">
                            {isAr ? proj.nameAr : proj.nameEn}
                          </h5>
                          <span className="text-[10px] text-sky-400 block mt-0.5">
                            {isAr ? proj.sectorAr : proj.sectorEn}
                          </span>
                        </div>
                        <span className="font-mono text-xs font-black text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded shrink-0">
                          ${proj.budgetBn}B
                        </span>
                      </div>
                      <p className="m-0 text-[11px] text-slate-300 leading-snug">
                        {isAr ? proj.descriptionAr : proj.descriptionEn}
                      </p>
                      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800/80">
                        <span>{isAr ? 'الجدول الزمني:' : 'Timeline:'} {proj.timeline}</span>
                        <span className="text-amber-400 font-bold">{proj.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* كبرى الشركات الوطنية */}
            <div className="space-y-2">
              <h4 className="m-0 text-xs font-black text-slate-200 flex items-center gap-1.5">
                <Building className="h-4 w-4 text-emerald-400" />
                <span>{isAr ? `كبرى الشركات الوطنية والعالمية (${companiesList.length})` : `Leading Corporate Champions (${companiesList.length})`}</span>
              </h4>
              <div className="grid gap-2 sm:grid-cols-2">
                {companiesList.map((comp, i) => (
                  <div key={i} className="rounded-xl border border-slate-800 bg-slate-950/70 p-3 space-y-1 hover:border-slate-700 transition">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-xs text-white truncate">{comp.name}</span>
                      <span className="font-mono text-[10px] font-bold text-amber-300 bg-amber-950/40 border border-amber-500/30 px-1.5 py-0.2 rounded shrink-0">
                        {comp.valuation || 'Top'}
                      </span>
                    </div>
                    <span className="text-[10px] text-sky-400 block">{isAr ? comp.sectorAr : comp.sectorEn}</span>
                    <p className="m-0 text-[11px] text-slate-300 line-clamp-2 leading-relaxed">{isAr ? comp.roleAr : comp.roleEn}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* التبويب الثامن: المصادر والمنصات الرسمية للدولة */}
        {activeTab === 'sources' && (
          <div className="space-y-3">
            <div className="rounded-xl border border-sky-500/25 bg-gradient-to-r from-slate-900 to-sky-950/30 p-3 space-y-1">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-sky-400" />
                <h4 className="m-0 text-xs font-black text-white">
                  {isAr ? `المصادر والمنصات السيادية الموثقة لـ ${countryName}` : `Official Sovereign Portals of ${countryName}`}
                </h4>
              </div>
              <p className="m-0 text-[11px] text-slate-300 leading-relaxed">
                {isAr
                  ? 'بوابات رئاسة الدولة، وزارتي الخارجية والدفاع، البنك المركزي، الصندوق السيادي، ووكالة الأنباء الرسمية المعتمدة مع روابط مباشرة.'
                  : 'Direct, verified access to the executive presidency, foreign ministry, defense command, central bank, and official wire.'}
              </p>
            </div>

            <div className="space-y-2.5">
              {officialSources.map((source) => (
                <div
                  key={source.id}
                  className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 hover:border-sky-500/40 transition space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs font-black text-white">
                          {isAr ? source.titleAr : source.titleEn}
                        </span>
                        {source.badge && (
                          <span className="rounded bg-sky-500/20 border border-sky-500/40 px-1.5 py-0.2 text-[9px] font-bold text-sky-300">
                            {source.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-400 block mt-0.5">
                        {isAr ? source.categoryAr : source.categoryEn} · <b className="font-mono text-sky-400">{source.domain}</b>
                      </span>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => handleCopyLink(source.url)}
                        title={isAr ? 'نسخ الرابط الرسمي' : 'Copy link'}
                        className="grid h-7 w-7 place-items-center rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition"
                      >
                        {copiedUrl === source.url ? (
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="h-3.5 w-3.5 text-slate-400" />
                        )}
                      </button>

                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 rounded-lg border border-sky-500/40 bg-sky-500/15 px-2.5 py-1 text-xs font-bold text-sky-300 hover:bg-sky-500/25 transition"
                      >
                        <span>{isAr ? 'زيارة المنصة' : 'Visit'}</span>
                        <ExternalLink className="h-3 w-3 text-sky-300" />
                      </a>
                    </div>
                  </div>

                  <p className="m-0 text-[11px] text-slate-300 leading-snug">
                    {isAr ? source.descriptionAr : source.descriptionEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* التبويب التاسع: أحدث الأخبار المباشرة عن الدولة مع الروابط */}
        {activeTab === 'news' && (
          <div className="space-y-3">
            <div className="rounded-xl border border-rose-500/25 bg-gradient-to-r from-slate-900 to-rose-950/30 p-3 space-y-1">
              <div className="flex items-center gap-2">
                <Radio className="h-4 w-4 text-rose-400 animate-pulse" />
                <h4 className="m-0 text-xs font-black text-white">
                  {isAr ? `البث الإخباري اللحظي لـ ${countryName}` : `Live Intelligence Stream for ${countryName}`}
                </h4>
              </div>
              <p className="m-0 text-[11px] text-slate-300 leading-relaxed">
                {isAr
                  ? 'رصد فوري لآخر المستجدات الجيوسياسية والاقتصادية المتعلقة بالدولة من كبرى وكالات الأنباء مع روابط التقارير الأصلية.'
                  : 'Real-time wire monitoring covering geopolitical and economic developments with original publisher links.'}
              </p>
            </div>

            {countryNews.length === 0 ? (
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 text-center text-slate-400 text-xs">
                {isAr ? 'جارٍ تحديث الأخبار ومزامنة الروافد…' : 'Syncing live dispatches…'}
              </div>
            ) : (
              <div className="space-y-2.5">
                {countryNews.map((item, idx) => (
                  <article
                    key={item.key || idx}
                    className="rounded-xl border border-slate-800 bg-slate-900/70 p-3 space-y-2 hover:border-slate-700 transition"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded bg-slate-800 border border-slate-700 px-2 py-0.5 text-[10px] font-bold text-sky-300">
                        {isAr ? item.sourceNameAr || item.source : item.sourceNameEn || item.source}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {item.published
                          ? new Date(item.published).toLocaleTimeString(isAr ? 'ar-SA' : 'en-US', { hour: '2-digit', minute: '2-digit' })
                          : (isAr ? 'مباشر' : 'Live')}
                      </span>
                    </div>

                    <h5 className="m-0 text-xs font-bold text-white leading-snug">
                      {translateText(item.text, lang)}
                    </h5>

                    {item.href && (
                      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-end">
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-400 hover:text-sky-300 transition"
                        >
                          <span>{isAr ? 'قراءة التقرير في المصدر' : 'Read Source'}</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </aside>
  );
}
