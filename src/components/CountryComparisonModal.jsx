import { useState, useMemo } from 'react';
import {
  X,
  Swords,
  Shield,
  Plane,
  Building2,
  Coins,
  ChevronDown,
  Award,
  Zap,
  TrendingUp,
  FileText,
  FileCode,
  Download,
} from 'lucide-react';
import { CountryEmblem, MilitaryInsigniaBadge } from './CountrySymbols';
import { getFlagUrl } from '../utils/countrySymbols';
import { translateText } from '../utils/translator';
import { getCountryIntelligenceData } from '../data/countryExtendedIntelligence.js';
import { getCountryMilitaryArsenal } from '../data/countryMilitaryArsenalDB.js';
import { getCountryCompanies } from '../data/countryCompaniesDB.js';
import { getCountryDiplomacyTensions } from '../data/countryDiplomacyTensionsDB.js';

const COMPARISON_PRESETS = [
  { id: 'sa_ir', nameAr: 'السعودية vs إيران (التوازن الإقليمي)', nameEn: 'Saudi Arabia vs Iran', c1: 'sa', c2: 'ir' },
  { id: 'eg_et', nameAr: 'مصر vs إثيوبيا (أزمة مياه النيل)', nameEn: 'Egypt vs Ethiopia', c1: 'eg', c2: 'et' },
  { id: 'us_cn', nameAr: 'أمريكا vs الصين (التنافس العالمي)', nameEn: 'USA vs China', c1: 'us', c2: 'cn' },
  { id: 'ru_ua', nameAr: 'روسيا vs أوكرانيا (المسرح الأوروبي)', nameEn: 'Russia vs Ukraine', c1: 'ru', c2: 'ua' },
  { id: 'dz_ma', nameAr: 'الجزائر vs المغرب (المغرب العربي)', nameEn: 'Algeria vs Morocco', c1: 'dz', c2: 'ma' },
  { id: 'in_pk', nameAr: 'الهند vs باكستان (الردع النووي)', nameEn: 'India vs Pakistan', c1: 'in', c2: 'pk' },
  { id: 'tr_gr', nameAr: 'تركيا vs اليونان (بحر إيجة والمتوسط)', nameEn: 'Turkey vs Greece', c1: 'tr', c2: 'gr' },
];

export default function CountryComparisonModal({
  countries = [],
  initialCountry1 = null,
  initialCountry2 = null,
  lang = 'ar',
  onClose,
  onOpenFullCountry,
}) {
  const isAr = lang === 'ar';

  const defaultC1 = initialCountry1?.id || 'sa';
  const defaultC2 = initialCountry2?.id || (defaultC1 === 'eg' ? 'et' : defaultC1 === 'sa' ? 'ir' : 'cn');

  const [countryId1, setCountryId1] = useState(defaultC1);
  const [countryId2, setCountryId2] = useState(defaultC2);
  const [activeSection, setActiveSection] = useState('military'); // 'military' | 'economy' | 'companies' | 'diplomacy'

  const country1 = useMemo(() => countries.find((c) => c.id.toLowerCase() === countryId1.toLowerCase()) || countries[0], [countries, countryId1]);
  const country2 = useMemo(() => countries.find((c) => c.id.toLowerCase() === countryId2.toLowerCase()) || countries[1] || countries[0], [countries, countryId2]);

  // استخراج البيانات الاستخبارية السيادية للدولتين
  const intel1 = useMemo(() => getCountryIntelligenceData(country1, lang), [country1, lang]);
  const intel2 = useMemo(() => getCountryIntelligenceData(country2, lang), [country2, lang]);

  const arsenal1 = useMemo(() => getCountryMilitaryArsenal(country1, lang), [country1, lang]);
  const arsenal2 = useMemo(() => getCountryMilitaryArsenal(country2, lang), [country2, lang]);

  const companies1 = useMemo(() => getCountryCompanies(country1, lang), [country1, lang]);
  const companies2 = useMemo(() => getCountryCompanies(country2, lang), [country2, lang]);

  const diplomacy1 = useMemo(() => getCountryDiplomacyTensions(country1, lang), [country1, lang]);
  const diplomacy2 = useMemo(() => getCountryDiplomacyTensions(country2, lang), [country2, lang]);

  // حساب نسب التفوق والمقارنة التكتيكية
  const budget1 = Number(country1?.militaryBudgetBn || 30);
  const budget2 = Number(country2?.militaryBudgetBn || 30);

  const activeTroops1 = Number(country1?.activePersonnelK || 200);
  const activeTroops2 = Number(country2?.activePersonnelK || 200);

  const reserves1 = Number(country1?.reservePersonnelK || arsenal1?.reserves?.personnelCountK || 100);
  const reserves2 = Number(country2?.reservePersonnelK || arsenal2?.reserves?.personnelCountK || 100);

  const gdp1 = Number(country1?.gdpBn || country1?.gdpNominalBn || 400);
  const gdp2 = Number(country2?.gdpBn || country2?.gdpNominalBn || 400);

  const fx1 = Number(intel1?.currency?.foreignReservesBn || 80);
  const fx2 = Number(intel2?.currency?.foreignReservesBn || 80);

  const aircraftCount1 = arsenal1?.aircraft?.length || 4;
  const aircraftCount2 = arsenal2?.aircraft?.length || 4;

  const handleApplyPreset = (preset) => {
    setCountryId1(preset.c1);
    setCountryId2(preset.c2);
  };

  const handleDownloadComparisonJson = () => {
    const data = {
      comparisonTitle: `${country1?.name} VS ${country2?.name} Geopolitical & Military Assessment 2026`,
      generatedAt: new Date().toISOString(),
      countryA: {
        meta: country1,
        arsenal: arsenal1,
        companies: companies1,
        diplomacy: diplomacy1,
      },
      countryB: {
        meta: country2,
        arsenal: arsenal2,
        companies: companies2,
        diplomacy: diplomacy2,
      },
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `VS_${country1?.id.toUpperCase()}_vs_${country2?.id.toUpperCase()}_2026.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden bg-slate-950/85 p-2 sm:p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-up nx-panel my-auto flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden !rounded-2xl border-slate-800 bg-slate-950 shadow-2xl"
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* الترويسة الرئيسية لنافذة المقارنة */}
        <div className="relative shrink-0 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-sky-950/40 to-slate-900 px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-amber-500 to-rose-600 text-white shadow-lg shadow-rose-950">
                <Swords className="h-5 w-5" />
              </div>
              <div>
                <h2 className="m-0 text-lg sm:text-xl font-black text-white flex items-center gap-2">
                  <span>{isAr ? 'المقارنة الاستراتيجية والعسكرية المباشرة' : 'Strategic & Military Comparison Matrix'}</span>
                  <span className="rounded-md bg-rose-500/20 border border-rose-500/40 px-2 py-0.5 text-[10px] text-rose-300 font-mono">VS MODE</span>
                </h2>
                <p className="m-0 text-xs text-slate-400 mt-0.5">
                  {isAr
                    ? 'تحليل موازين القوى الدفاعية، الترسانة العسكرية، القوة الاقتصادية، والتحالفات الإقليمية'
                    : 'Bilateral balance of forces, defense arsenals, macroeconomic heft, and treaty frameworks'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownloadComparisonJson}
                className="flex items-center gap-1.5 rounded-xl border border-sky-500/40 bg-sky-600/20 px-3 py-1.5 text-xs font-bold text-sky-200 transition hover:bg-sky-600/30"
                title={isAr ? 'تنزيل ملخص المقارنة JSON' : 'Export Comparison JSON'}
              >
                <Download className="h-3.5 w-3.5 text-sky-400" />
                <span className="hidden sm:inline">{isAr ? 'تصدير الملخص' : 'Export Brief'}</span>
              </button>

              <button
                onClick={onClose}
                className="grid h-8 w-8 place-items-center rounded-lg border border-slate-700 bg-slate-900 text-slate-400 hover:text-rose-300 hover:border-rose-500/50 transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* شريط المقارنات السريعة الجاهزة (Presets) */}
          <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <span className="shrink-0 text-slate-500 font-bold me-1 flex items-center gap-1">
              <Zap className="h-3.5 w-3.5 text-amber-400" />
              <span>{isAr ? 'سيناريوهات مقارنة شائعة:' : 'Quick Presets:'}</span>
            </span>
            {COMPARISON_PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => handleApplyPreset(preset)}
                className={`shrink-0 rounded-lg border px-2.5 py-1 text-xs font-bold transition whitespace-nowrap ${
                  countryId1 === preset.c1 && countryId2 === preset.c2
                    ? 'border-amber-500/60 bg-amber-500/20 text-amber-200'
                    : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-white'
                }`}
              >
                {isAr ? preset.nameAr : preset.nameEn}
              </button>
            ))}
          </div>
        </div>

        {/* لوحة اختيار الدولتين مع الرايات والشعارات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse border-b border-slate-800 bg-slate-950/80 p-3 sm:p-4 gap-3">
          {/* الدولة الأولى (A) */}
          <div className="flex items-center justify-between gap-3 p-2 rounded-xl bg-slate-900/40 border border-slate-800">
            <div className="flex items-center gap-3 min-w-0">
              <div className="h-12 w-12 rounded-xl border border-sky-500/30 bg-slate-900 p-1 shrink-0 flex items-center justify-center">
                <CountryEmblem country={country1} className="h-full w-full" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <img src={getFlagUrl(country1?.id)} alt="" className="h-4 w-6 rounded object-cover border border-slate-700" />
                  <span className="font-black text-sm text-white truncate">{translateText(country1?.name, lang)}</span>
                </div>
                <span className="text-[11px] text-sky-400 font-mono block mt-0.5">
                  {country1?.leader} · {country1?.capital}
                </span>
              </div>
            </div>

            <div className="shrink-0">
              <select
                value={countryId1}
                onChange={(e) => setCountryId1(e.target.value)}
                className="rounded-lg border border-slate-700 bg-slate-900 px-2 py-1 text-xs font-bold text-white outline-none focus:border-sky-500"
              >
                {countries.map((c) => (
                  <option key={c.id} value={c.id}>
                    {translateText(c.name, lang)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* الدولة الثانية (B) */}
          <div className="flex items-center justify-between gap-3 p-2 rounded-xl bg-slate-900/40 border border-slate-800">
            <div className="flex items-center gap-3 min-w-0">
              <div className="h-12 w-12 rounded-xl border border-rose-500/30 bg-slate-900 p-1 shrink-0 flex items-center justify-center">
                <CountryEmblem country={country2} className="h-full w-full" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <img src={getFlagUrl(country2?.id)} alt="" className="h-4 w-6 rounded object-cover border border-slate-700" />
                  <span className="font-black text-sm text-white truncate">{translateText(country2?.name, lang)}</span>
                </div>
                <span className="text-[11px] text-rose-400 font-mono block mt-0.5">
                  {country2?.leader} · {country2?.capital}
                </span>
              </div>
            </div>

            <div className="shrink-0">
              <select
                value={countryId2}
                onChange={(e) => setCountryId2(e.target.value)}
                className="rounded-lg border border-slate-700 bg-slate-900 px-2 py-1 text-xs font-bold text-white outline-none focus:border-rose-500"
              >
                {countries.map((c) => (
                  <option key={c.id} value={c.id}>
                    {translateText(c.name, lang)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* أشرطة التبويبات للمقارنة */}
        <div className="flex shrink-0 gap-1 overflow-x-auto border-b border-slate-800 bg-slate-950/60 px-4 py-2 text-xs">
          {[
            { id: 'military', icon: Shield, labelAr: 'الميزان العسكري والترسانة', labelEn: 'Military Arsenal' },
            { id: 'economy', icon: Coins, labelAr: 'المؤشرات الاقتصادية والمالية', labelEn: 'Macro & Reserves' },
            { id: 'companies', icon: Building2, labelAr: 'الشركات والاستثمارات', labelEn: 'Corporate Giants' },
            { id: 'diplomacy', icon: TrendingUp, labelAr: 'التحالفات والتوترات', labelEn: 'Alliances & Tensions' },
          ].map((tab) => {
            const active = activeSection === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 font-bold transition whitespace-nowrap ${
                  active ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{isAr ? tab.labelAr : tab.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* جسم المقارنة التفاعلي */}
        <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {/* مؤشرات المقارنة التكتيكية المباشرة (Head-to-Head Comparison Bars) */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 space-y-3">
            <h3 className="m-0 text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Award className="h-4 w-4" />
              <span>{isAr ? 'ميزان التفوق التكتيكي الرقمي' : 'Tactical Advantage Scorecard'}</span>
            </h3>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {/* ميزانية الدفاع */}
              <ComparisonMetricBar
                label={isAr ? 'ميزانية الدفاع السنوية' : 'Defense Budget'}
                val1={budget1}
                val2={budget2}
                unit="$B"
                name1={translateText(country1?.name, lang)}
                name2={translateText(country2?.name, lang)}
              />

              {/* القوات النشطة */}
              <ComparisonMetricBar
                label={isAr ? 'القوات النشطة العاملة' : 'Active Military Personnel'}
                val1={activeTroops1}
                val2={activeTroops2}
                unit="k"
                name1={translateText(country1?.name, lang)}
                name2={translateText(country2?.name, lang)}
              />

              {/* قوات الاحتياط */}
              <ComparisonMetricBar
                label={isAr ? 'قوات الاحتياط والتعبئة' : 'Reserve Forces'}
                val1={reserves1}
                val2={reserves2}
                unit="k"
                name1={translateText(country1?.name, lang)}
                name2={translateText(country2?.name, lang)}
              />

              {/* الناتج المحلي الإجمالي */}
              <ComparisonMetricBar
                label={isAr ? 'الناتج المحلي الإجمالي (GDP)' : 'Nominal GDP'}
                val1={gdp1}
                val2={gdp2}
                unit="$B"
                name1={translateText(country1?.name, lang)}
                name2={translateText(country2?.name, lang)}
              />

              {/* الاحتياطي النقدي الأجنبي */}
              <ComparisonMetricBar
                label={isAr ? 'الاحتياطي النقدي الأجنبي' : 'FX Foreign Reserves'}
                val1={fx1}
                val2={fx2}
                unit="$B"
                name1={translateText(country1?.name, lang)}
                name2={translateText(country2?.name, lang)}
              />

              {/* أسراب المقاتلات */}
              <ComparisonMetricBar
                label={isAr ? 'تنوع أسراب المقاتلات والمسيرات' : 'Aircraft & Drone Types'}
                val1={aircraftCount1}
                val2={aircraftCount2}
                unit=""
                name1={translateText(country1?.name, lang)}
                name2={translateText(country2?.name, lang)}
              />
            </div>
          </div>

          {/* 1. قسم الميزان العسكري والترسانة */}
          {activeSection === 'military' && (
            <div className="space-y-4">
              {/* شارات القوات المسلحة للطرفين */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 rounded-xl border border-sky-500/30 bg-sky-950/20">
                  <MilitaryInsigniaBadge country={country1} className="h-12 w-12" />
                  <div>
                    <span className="text-[10px] text-sky-400 font-bold block">{translateText(country1?.name, lang)}</span>
                    <span className="text-xs font-bold text-white block">
                      {isAr ? arsenal1?.insignia?.roundelNameAr : arsenal1?.insignia?.roundelNameEn}
                    </span>
                    <span className="text-[10px] text-slate-400 block">{arsenal1?.insignia?.symbolText}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl border border-rose-500/30 bg-rose-950/20">
                  <MilitaryInsigniaBadge country={country2} className="h-12 w-12" />
                  <div>
                    <span className="text-[10px] text-rose-400 font-bold block">{translateText(country2?.name, lang)}</span>
                    <span className="text-xs font-bold text-white block">
                      {isAr ? arsenal2?.insignia?.roundelNameAr : arsenal2?.insignia?.roundelNameEn}
                    </span>
                    <span className="text-[10px] text-slate-400 block">{arsenal2?.insignia?.symbolText}</span>
                  </div>
                </div>
              </div>

              {/* أسطول الطائرات المقاتلة جنباً إلى جنب */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <ArsenalColumn
                  title={isAr ? `طائرات ومسيرات ${translateText(country1?.name, lang)}` : `${country1?.name} Air Arsenal`}
                  icon={Plane}
                  tone="sky"
                  items={arsenal1?.aircraft}
                  isAr={isAr}
                />

                <ArsenalColumn
                  title={isAr ? `طائرات ومسيرات ${translateText(country2?.name, lang)}` : `${country2?.name} Air Arsenal`}
                  icon={Plane}
                  tone="rose"
                  items={arsenal2?.aircraft}
                  isAr={isAr}
                />
              </div>

              {/* دبابات القتال الرئيسية والمدرعات */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <TanksColumn
                  title={isAr ? `دروع ومدرعات ${translateText(country1?.name, lang)}` : `${country1?.name} Armor & Tanks`}
                  tone="amber"
                  items={arsenal1?.tanks}
                  isAr={isAr}
                />

                <TanksColumn
                  title={isAr ? `دروع ومدرعات ${translateText(country2?.name, lang)}` : `${country2?.name} Armor & Tanks`}
                  tone="rose"
                  items={arsenal2?.tanks}
                  isAr={isAr}
                />
              </div>
            </div>
          )}

          {/* 2. قسم الاقتصاد والعملة */}
          {activeSection === 'economy' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <EconomyCard country={country1} intel={intel1} isAr={isAr} tone="sky" />
              <EconomyCard country={country2} intel={intel2} isAr={isAr} tone="rose" />
            </div>
          )}

          {/* 3. قسم الشركات الكبرى */}
          {activeSection === 'companies' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <CompaniesColumn country={country1} companies={companies1} isAr={isAr} tone="sky" />
              <CompaniesColumn country={country2} companies={companies2} isAr={isAr} tone="rose" />
            </div>
          )}

          {/* 4. قسم التحالفات والتوترات */}
          {activeSection === 'diplomacy' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <DiplomacyColumn country={country1} diplomacy={diplomacy1} isAr={isAr} tone="sky" />
              <DiplomacyColumn country={country2} diplomacy={diplomacy2} isAr={isAr} tone="rose" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ComparisonMetricBar({ label, val1, val2, unit, name1, name2 }) {
  const sum = (val1 || 0) + (val2 || 0) || 1;
  const pct1 = Math.round(((val1 || 0) / sum) * 100);
  const pct2 = 100 - pct1;
  const lead1 = val1 > val2;
  const lead2 = val2 > val1;

  return (
    <div className="rounded-lg border border-slate-800/80 bg-slate-950/70 p-2.5 space-y-1.5">
      <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold">
        <span>{label}</span>
      </div>

      <div className="flex items-center justify-between text-xs font-mono font-bold">
        <span className={lead1 ? 'text-sky-300 font-black' : 'text-slate-400'}>
          {val1} {unit}
        </span>
        <span className={lead2 ? 'text-rose-300 font-black' : 'text-slate-400'}>
          {val2} {unit}
        </span>
      </div>

      {/* شريط المقارنة المزدوج */}
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800 flex">
        <div style={{ width: `${pct1}%` }} className="bg-sky-500 transition-all duration-500" title={`${name1}: ${pct1}%`} />
        <div style={{ width: `${pct2}%` }} className="bg-rose-500 transition-all duration-500" title={`${name2}: ${pct2}%`} />
      </div>
    </div>
  );
}

function ArsenalColumn({ title, icon: Icon, tone, items = [], isAr }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3 space-y-2">
      <h4 className={`m-0 text-xs font-bold flex items-center gap-1.5 ${tone === 'sky' ? 'text-sky-300' : 'text-rose-300'}`}>
        <Icon className="h-4 w-4" />
        <span>{title}</span>
      </h4>

      <div className="space-y-2">
        {items.map((item, idx) => (
          <div key={idx} className="rounded-lg border border-slate-800/80 bg-slate-900/60 p-2 text-xs space-y-1">
            <div className="flex items-center justify-between gap-1">
              <span className="font-bold text-white">{item.model}</span>
              <span className="font-mono text-[10px] text-slate-400">{item.count}</span>
            </div>
            <p className="m-0 text-[11px] text-slate-400 leading-snug">{isAr ? item.roleAr : item.roleEn}</p>
            {(item.weaponsAr || item.weaponsEn) && (
              <div className="text-[10px] text-amber-300/90 pt-1 border-t border-slate-800/60">
                <b>{isAr ? 'الأسلحة:' : 'Weapons:'}</b> {isAr ? item.weaponsAr || item.weaponsEn : item.weaponsEn || item.weaponsAr}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function TanksColumn({ title, tone, items = [], isAr }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3 space-y-2">
      <h4 className={`m-0 text-xs font-bold flex items-center gap-1.5 ${tone === 'amber' ? 'text-amber-300' : 'text-rose-300'}`}>
        <Shield className="h-4 w-4" />
        <span>{title}</span>
      </h4>

      <div className="space-y-2">
        {items.map((item, idx) => (
          <div key={idx} className="rounded-lg border border-slate-800/80 bg-slate-900/60 p-2 text-xs space-y-1">
            <div className="flex items-center justify-between gap-1">
              <span className="font-bold text-white">{item.model}</span>
              <span className="font-mono text-[10px] text-slate-400">{item.count}</span>
            </div>
            <p className="m-0 text-[11px] text-slate-400 leading-snug">{isAr ? item.roleAr : item.roleEn}</p>
            {(item.mainArmamentAr || item.mainArmamentEn) && (
              <div className="text-[10px] text-amber-300/90 pt-1 border-t border-slate-800/60">
                <b>{isAr ? 'المدفع والدروع:' : 'Armament:'}</b> {isAr ? item.mainArmamentAr || item.mainArmamentEn : item.mainArmamentEn || item.mainArmamentAr}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function EconomyCard({ country, intel, isAr, tone }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5 space-y-2.5">
      <h4 className={`m-0 text-sm font-bold ${tone === 'sky' ? 'text-sky-300' : 'text-rose-300'}`}>
        {isAr ? `اقتصاد وعملة ${translateText(country?.name, isAr ? 'ar' : 'en')}` : `${country?.name} Economy`}
      </h4>

      <div className="grid gap-1.5 text-xs">
        <div className="flex justify-between border-b border-slate-800/60 pb-1">
          <span className="text-slate-400">{isAr ? 'العملة والرمز' : 'Currency'}</span>
          <span className="font-bold text-white">{intel?.currency?.nameAr} ({intel?.currency?.code}) {intel?.currency?.symbol}</span>
        </div>
        <div className="flex justify-between border-b border-slate-800/60 pb-1">
          <span className="text-slate-400">{isAr ? 'البنك المركزي' : 'Central Bank'}</span>
          <span className="font-bold text-slate-200">{isAr ? intel?.currency?.centralBankAr : intel?.currency?.centralBankEn}</span>
        </div>
        <div className="flex justify-between border-b border-slate-800/60 pb-1">
          <span className="text-slate-400">{isAr ? 'الناتج المحلي' : 'Nominal GDP'}</span>
          <span className="font-bold text-emerald-400">${country?.gdpBn || country?.gdpNominalBn}B USD</span>
        </div>
        <div className="flex justify-between border-b border-slate-800/60 pb-1">
          <span className="text-slate-400">{isAr ? 'الاحتياطي النقدي' : 'FX Reserves'}</span>
          <span className="font-bold text-amber-300">~${intel?.currency?.foreignReservesBn || '80'}B USD</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">{isAr ? 'الصندوق السيادي' : 'Sovereign Fund'}</span>
          <span className="font-bold text-slate-200">{isAr ? intel?.currency?.sovereignFundAr : intel?.currency?.sovereignFundEn}</span>
        </div>
      </div>
    </div>
  );
}

function CompaniesColumn({ country, companies = [], isAr, tone }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5 space-y-2.5">
      <h4 className={`m-0 text-sm font-bold ${tone === 'sky' ? 'text-sky-300' : 'text-rose-300'}`}>
        {isAr ? `كبرى شركات ${translateText(country?.name, isAr ? 'ar' : 'en')}` : `${country?.name} Major Enterprises`}
      </h4>

      <div className="space-y-2">
        {companies.slice(0, 5).map((c, idx) => (
          <div key={idx} className="rounded-lg border border-slate-800/80 bg-slate-900/60 p-2 text-xs space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white">{c.name}</span>
              <span className="font-mono text-[10px] text-amber-300 font-bold">{c.valuation}</span>
            </div>
            <p className="m-0 text-[11px] text-slate-400">{isAr ? c.sectorAr : c.sectorEn}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DiplomacyColumn({ country, diplomacy, isAr, tone }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5 space-y-2.5">
      <h4 className={`m-0 text-sm font-bold ${tone === 'sky' ? 'text-sky-300' : 'text-rose-300'}`}>
        {isAr ? `بؤر التوتر والتحالفات لـ ${translateText(country?.name, isAr ? 'ar' : 'en')}` : `${country?.name} Tensions`}
      </h4>

      <div className="space-y-2">
        {(diplomacy?.tensions || []).map((t, idx) => (
          <div key={idx} className="rounded-lg border border-rose-950/80 bg-rose-950/20 p-2 text-xs space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-rose-300">{isAr ? t.countryAr : t.countryEn}</span>
              <span className="text-[10px] font-bold text-rose-400 bg-rose-950/80 border border-rose-500/30 px-1.5 py-0.2 rounded">
                {t.riskLevel}
              </span>
            </div>
            <p className="m-0 text-[11px] text-slate-300 leading-snug">{isAr ? t.issueAr : t.issueEn}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
