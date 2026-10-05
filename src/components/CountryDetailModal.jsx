import { useEffect, useState } from 'react';
import {
  X,
  Shield,
  Building2,
  Landmark,
  History,
  Users,
  AlertTriangle,
  Coins,
  Network,
  Award,
} from 'lucide-react';
import { CountryEmblem } from './CountrySymbols';
import { getFlagUrl } from '../utils/countrySymbols';
import { fetchCountryStats, formatStat } from '../services/worldbank.js';
import { translateText } from '../utils/translator';

const TABS = [
  { id: 'overview', icon: Landmark },
  { id: 'military', icon: Shield },
  { id: 'economy', icon: Building2 },
  { id: 'risk', icon: AlertTriangle },
  { id: 'history', icon: History },
];

const ALLIANCE_CHIP_LIMIT = 4;

export default function CountryDetailModal({ country, lang, onClose }) {
  const [tabState, setTabState] = useState({ countryId: null, tab: 'overview' });
  // خريطة { [countryId]: data|null } — تحفظ نتيجة كل دولة بعد جلبها،
  // والاشتقاق منها يمنع عرض بيانات دولة أثناء الانتقال إلى أخرى.
  const [settled, setSettled] = useState({});
  const isAr = lang === 'ar';

  const tab = tabState.countryId === country?.id ? tabState.tab : 'overview';
  const setTab = (next) => setTabState({ countryId: country?.id ?? null, tab: next });

  const countryId = country?.id ?? null;
  const stats = countryId && countryId in settled ? settled[countryId] : null;
  const statsBusy = Boolean(countryId) && !(countryId in settled);

  // بيانات البنك الدولي: الجيش + الاقتصاد + مؤشرات المخاطر
  useEffect(() => {
    if (!countryId) return undefined;
    const ac = new AbortController();
    let alive = true;
    fetchCountryStats(countryId, { signal: ac.signal })
      .then((data) => {
        if (!alive) return;
        setSettled((prev) => ({ ...prev, [countryId]: data?.available ? data : null }));
      })
      .catch(() => {
        if (!alive) return;
        setSettled((prev) => ({ ...prev, [countryId]: null }));
      });
    return () => {
      alive = false;
      ac.abort();
    };
  }, [countryId]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!country) return null;

  const localizedCountryName = translateText(country.name, lang);
  const localizedCapital = translateText(country.capital, lang);
  const localizedLeader = translateText(country.leader, lang);
  const localizedRegion = translateText(country.regionLabel, lang);
  const localizedRegime = translateText(country.regime, lang);

  const labels = {
    overview: isAr ? 'النبذة' : 'Overview',
    military: isAr ? 'الجيش' : 'Military',
    economy: isAr ? 'الاقتصاد' : 'Economy',
    risk: isAr ? 'المخاطر' : 'Risk',
    history: isAr ? 'التاريخ' : 'History',
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden bg-slate-950/85 p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-up nx-panel my-auto flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden !rounded-2xl"
      >
        {/* Header */}
        <div className="relative shrink-0 overflow-hidden border-b border-slate-800 bg-gradient-to-l from-slate-900 via-slate-900 to-sky-950/60 px-5 py-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3.5 min-w-0">
              {/* شعار الدولة الرسمي */}
              <div
                className="relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-amber-500/35 bg-gradient-to-b from-amber-500/15 via-slate-900/90 to-slate-950 p-1.5 shadow-lg backdrop-blur"
                title={isAr ? `شعار ${localizedCountryName} الرسمي` : `Official Coat of Arms of ${localizedCountryName}`}
              >
                <CountryEmblem country={country} className="h-full w-full" />
              </div>

              {/* راية الدولة والاسم والعاصمة */}
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-8 overflow-hidden rounded border border-slate-700 shadow-sm bg-slate-900 shrink-0">
                    <img
                      src={getFlagUrl(country.id)}
                      alt={isAr ? `راية ${localizedCountryName}` : `Flag of ${localizedCountryName}`}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <span style={{ display: 'none' }} className="text-sm text-center leading-5">{country.flag}</span>
                  </div>
                  <h2 className="font-display m-0 truncate text-xl font-black text-white sm:text-2xl">
                    {localizedCountryName}
                  </h2>
                </div>
                <p className="m-0 mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
                  <span>
                    {isAr ? 'العاصمة' : 'Capital'}: <b className="text-slate-200">{localizedCapital}</b>
                  </span>
                  <span className="h-1 w-1 rounded-full bg-slate-600" />
                  <span>{localizedLeader}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-600" />
                  <span className="text-sky-400 font-medium">{localizedRegion}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-600" />
                  <span className="text-amber-300 font-medium">{localizedRegime}</span>
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label={isAr ? 'إغلاق' : 'Close'}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-slate-700 bg-slate-900/70 text-slate-400 transition hover:border-rose-500/50 hover:text-rose-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Alliances */}
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            <Network className="h-3.5 w-3.5 shrink-0 text-sky-400" />
            {country.alliances.slice(0, ALLIANCE_CHIP_LIMIT).map((a, i) => {
              const localizedAlliance = translateText(a, lang);
              return (
                <span
                  key={`${a}-${i}`}
                  className="nx-chip max-w-[16rem] border border-sky-500/25 bg-sky-500/10 text-sky-200"
                  title={localizedAlliance}
                >
                  <span className="truncate">{localizedAlliance}</span>
                </span>
              );
            })}
            {country.alliances.length > ALLIANCE_CHIP_LIMIT && (
              <span
                title={country.alliances.map(a => translateText(a, lang)).join(' · ')}
                className="nx-chip cursor-default border border-slate-700 bg-slate-900 text-slate-400"
              >
                +{country.alliances.length - ALLIANCE_CHIP_LIMIT}
              </span>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex shrink-0 gap-1 overflow-x-auto border-b border-slate-800 bg-slate-950/40 px-3 py-2">
          {TABS.map(({ id, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                tab === id
                  ? 'bg-sky-600 text-white'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {labels[id]}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-5">
          {tab === 'overview' && (
            <div className="grid gap-3 sm:grid-cols-2">
              {/* بطاقة الرموز السيادية والوطنية */}
              <Card title={isAr ? 'الرموز السيادية والوطنية' : 'Sovereign & National Symbols'} icon={Award} tone="amber">
                <div className="flex items-center justify-around gap-4 p-3 rounded-xl border border-slate-800/90 bg-slate-950/80">
                  {/* الشعار */}
                  <div className="flex flex-col items-center gap-1.5 text-center">
                    <div className="h-20 w-20 p-2 rounded-2xl border border-amber-500/35 bg-gradient-to-b from-amber-500/10 via-slate-900 to-slate-950 shadow-md flex items-center justify-center">
                      <CountryEmblem country={country} className="h-full w-full" />
                    </div>
                    <span className="text-[11px] font-bold text-amber-300">
                      {isAr ? 'شعار الدولة الرسمي' : 'Official State Coat of Arms'}
                    </span>
                  </div>

                  {/* الراية */}
                  <div className="flex flex-col items-center gap-1.5 text-center">
                    <div className="h-20 w-28 overflow-hidden rounded-xl border border-slate-700 shadow-md bg-slate-900 flex items-center justify-center">
                      <img
                        src={getFlagUrl(country.id)}
                        alt={isAr ? `راية ${country.name}` : `Flag of ${country.name}`}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fb = e.currentTarget.nextElementSibling;
                          if (fb) fb.style.display = 'block';
                        }}
                      />
                      <span style={{ display: 'none' }} className="text-3xl">{country.flag}</span>
                    </div>
                    <span className="text-[11px] font-bold text-sky-300">
                      {isAr ? 'الراية الوطنية الرسمية' : 'Official National Flag'}
                    </span>
                  </div>
                </div>

                <Row label={isAr ? 'رمز الدولة (ISO)' : 'ISO Code'} value={country.id.toUpperCase()} />
                <Row label={isAr ? 'نظام الحكم' : 'Government Type'} value={country.regime} />
              </Card>

              <Card title={isAr ? 'القيادة السياسية' : 'Political Leadership'} icon={Users} tone="sky">
                <Row label={isAr ? 'رئيس الدولة' : 'Head of State'} value={country.leader} />
                <Row label={isAr ? 'المنصب' : 'Office'} value={country.leaderTitle} />
                <Row label={isAr ? 'الحزب الحاكم' : 'Ruling Party'} value={country.rulingParty} />
                <Row label={isAr ? 'نظام الحكم' : 'Government Type'} value={country.regime} />
              </Card>

              <Card title={isAr ? 'الأحزاب السياسية' : 'Political Parties'} icon={Landmark} tone="indigo">
                <ul className="space-y-1.5">
                  {country.parties.map((p) => (
                    <li
                      key={p}
                      className="rounded-lg border border-slate-800 bg-slate-950/60 px-2.5 py-1.5 text-xs text-slate-300"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card title={isAr ? 'القدرات الدفاعية' : 'Defense Capabilities'} icon={Shield} tone="rose">
                <Row label={isAr ? 'ميزانية الجيش' : 'Military Budget'} value={country.militaryBudget} />
                <Row label={isAr ? 'قادة الجيش' : 'Military Chief'} value={country.militaryLeader} />
              </Card>

              <Card title={isAr ? 'الموقع والحضور' : 'Position & Reach'} icon={Coins} tone="emerald">
                <Row label={isAr ? 'القارة' : 'Continent'} value={country.continentLabel} />
                <Row label={isAr ? 'المنطقة' : 'Region'} value={country.regionLabel} />
                <Row
                  label={isAr ? 'عدد السكان' : 'Population'}
                  value={
                    country.populationM
                      ? `${country.populationM} ${isAr ? 'مليون نسمة' : 'M people'}`
                      : '—'
                  }
                />
                <Row
                  label={isAr ? 'التحالفات' : 'Alliances'}
                  value={`${country.alliances.length} ${isAr ? 'تحالف' : 'alliances'}`}
                />
              </Card>
            </div>
          )}

          {tab === 'military' && (
            <div className="space-y-3">
              <Card title={isAr ? 'القيادة العسكرية' : 'Command Structure'} icon={Shield} tone="rose">
                <Row label={isAr ? 'قائد الأركان' : 'Chief of Staff'} value={country.militaryLeader} />
                <Row label={isAr ? 'ميزانية الدفاع' : 'Defense Budget'} value={country.militaryBudget} />
                <Row label={isAr ? 'الحلف الدفاعي' : 'Defense Pact'} value={country.alliances[0]} />
              </Card>
              <Card title={isAr ? 'التحالفات الاستراتيجية' : 'Strategic Alliances'} icon={Network} tone="sky">
                <div className="grid gap-2 sm:grid-cols-2">
                  {country.alliances.map((a) => (
                    <div
                      key={a}
                      className="rounded-lg border border-sky-500/20 bg-sky-500/5 px-3 py-2 text-xs font-semibold text-sky-200"
                    >
                      {a}
                    </div>
                  ))}
                </div>
              </Card>
              <LiveStats
                title={isAr ? 'قوة الجيش (البنك الدولي)' : 'Military Strength (World Bank)'}
                icon={Shield}
                tone="rose"
                entries={stats?.military}
                lang={lang}
                busy={statsBusy}
              />
            </div>
          )}

          {tab === 'economy' && (
            <div className="space-y-3">
              <LiveStats
                title={isAr ? 'مؤشرات الاقتصاد (البنك الدولي)' : 'Economic Indicators (World Bank)'}
                icon={Coins}
                tone="emerald"
                entries={stats?.economy}
                lang={lang}
                busy={statsBusy}
              />
              <div className="grid gap-3 sm:grid-cols-2">
                {country.topCompanies.map((comp, idx) => (
                  <div
                    key={`${comp.name}-${idx}`}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-3.5 transition hover:border-emerald-500/30"
                  >
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <h4 className="m-0 text-sm font-bold text-white">{comp.name}</h4>
                      <span className="nx-chip border border-emerald-500/25 bg-emerald-500/10 text-emerald-300">
                        {comp.sector}
                      </span>
                    </div>
                    <p className="m-0 text-[11px] text-slate-400">
                      <b className="text-slate-200">{isAr ? 'نقاط الضغط' : 'Pressure'}:</b>{' '}
                      {comp.pressure}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === 'risk' && (
            <div className="space-y-2.5">
              {country.risk ? (
                <>
                  <RiskRow
                    tone="amber"
                    title={isAr ? 'غسيل الأموال' : 'Money Laundering'}
                    value={country.risk.laundering}
                  />
                  <RiskRow
                    tone="violet"
                    title={isAr ? 'الاتجار بالبشر' : 'Human Trafficking'}
                    value={country.risk.trafficking}
                  />
                  <RiskRow
                    tone="rose"
                    title={isAr ? 'التهديدات الإرهابية' : 'Terrorism Threats'}
                    value={country.risk.terrorism}
                  />
                </>
              ) : (
                <p className="m-0 rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-3 text-xs text-slate-400">
                  {isAr
                    ? 'لم يُنشر ملف المخاطر التفصيلي لهذه الدولة بعد — الملف الأساسي متاح.'
                    : 'No detailed risk dossier published for this country yet — basic profile available.'}
                </p>
              )}
              <p className="m-0 rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-2 text-[11px] text-amber-200/80">
                {isAr
                  ? 'تنبيه: هذه مؤشرات مستخلصة من مصادر مفتوحة وتقديرات، وليست أحكاماً قضائية. راجع التقارير الرسمية قبل الاستشهاد.'
                  : 'Note: indicators are compiled from open-source estimates, not legal findings. Verify with official reports before citing.'}
              </p>
              <LiveStats
                title={isAr ? 'مؤشرات موضوعية للمخاطر (البنك الدولي)' : 'Objective Risk Indicators (World Bank)'}
                icon={AlertTriangle}
                tone="amber"
                entries={stats?.risk}
                lang={lang}
                busy={statsBusy}
                note={
                  isAr
                    ? 'معدل القتل المتعمد ووفيات المعارك — مؤشرات بديلة لانعدام الأمن والنزاع، وليست تقييمات رسمية، وسنة القياس تختلف من دولة لأخرى. المصدر: البنك الدولي، قاعدة بيانات التنمية العالمية (WDI) — بترخيص CC BY 4.0.'
                    : 'Intentional homicide rate and battle-related deaths are proxies for insecurity and conflict, not official risk ratings; reference years vary by country. Source: The World Bank, World Development Indicators (WDI) — CC BY 4.0.'
                }
              />
            </div>
          )}

          {tab === 'history' && (
            <div className="space-y-3">
              {country.historicalEvents.length > 0 ? (
                <ol className="relative space-y-3 border-s-2 border-slate-800 ps-5">
                  {country.historicalEvents.map((event, i) => (
                    <li key={i} className="relative">
                      <span className="absolute -start-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-sky-500 ring-4 ring-slate-950" />
                      <p className="m-0 text-[13px] leading-relaxed text-slate-300">{event}</p>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="m-0 rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-3 text-xs text-slate-400">
                  {isAr
                    ? 'لم يُنشر الملف التاريخي لهذه الدولة بعد.'
                    : 'No historical timeline published for this country yet.'}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const TONES = {
  sky: 'text-sky-300',
  indigo: 'text-indigo-300',
  rose: 'text-rose-300',
  emerald: 'text-emerald-300',
  amber: 'text-amber-300',
  violet: 'text-violet-300',
};

function Card({ title, icon: Icon, tone = 'sky', children }) {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-950/50 p-3.5">
      <h3
        className={`m-0 mb-2.5 flex items-center gap-2 text-sm font-bold ${TONES[tone] ?? TONES.sky}`}
      >
        <Icon className="h-4 w-4 shrink-0" />
        {title}
      </h3>
      <div className="grid gap-1">{children}</div>
    </section>
  );
}

function Row({ label, value }) {
  return (
    <div className="nx-row text-xs">
      <span className="shrink-0 text-slate-500">{label}</span>
      <span className="min-w-0 text-end font-semibold break-words text-slate-200">{value}</span>
    </div>
  );
}

function RiskRow({ tone = 'amber', title, value }) {
  return (
    <div
      className={`rounded-xl border p-3.5 ${
        {
          amber: 'border-amber-500/25 bg-amber-500/5',
          violet: 'border-violet-500/25 bg-violet-500/5',
          rose: 'border-rose-500/25 bg-rose-500/5',
        }[tone]
      }`}
    >
      <h4 className={`m-0 mb-1 flex items-center gap-2 text-sm font-bold ${TONES[tone]}`}>
        <AlertTriangle className="h-4 w-4" />
        {title}
      </h4>
      <p className="m-0 text-xs leading-relaxed text-slate-300">{value}</p>
    </div>
  );
}

/**
 * بطاقة بيانات البنك الدولي الحية.
 * تعرض فقط المؤشرات المتوفرة لهذا الرقم، مع سنة المرجع بجانب كل قيمة
 * لأن هذه بيانات سنوية لا تتحدث لحظياً.
 */
function LiveStats({ title, icon: Icon, tone = 'sky', entries, lang, busy, note }) {
  const isAr = lang === 'ar';
  const rows = (entries ?? []).filter((e) => e && e.value != null);

  if (!rows.length) {
    if (!busy) return null;
    return (
      <section className="rounded-xl border border-slate-800 bg-slate-950/50 p-3.5">
        <p className="m-0 text-[11px] text-slate-500">
          {isAr ? 'جارٍ جلب بيانات البنك الدولي…' : 'Fetching World Bank data…'}
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-xl border border-slate-800 bg-slate-950/50 p-3.5">
      <h3
        className={`m-0 mb-2.5 flex items-center gap-2 text-sm font-bold ${TONES[tone] ?? TONES.sky}`}
      >
        <Icon className="h-4 w-4 shrink-0" />
        {title}
        <span className="nx-chip border border-emerald-500/25 bg-emerald-500/10 text-emerald-300">
          {isAr ? 'مباشر' : 'LIVE'}
        </span>
      </h3>
      <div className="grid gap-1">
        {rows.map((e) => (
          <div key={e.id} className="nx-row text-xs">
            <span className="shrink-0 text-slate-500">{isAr ? e.ar : e.en}</span>
            <span className="min-w-0 text-end font-semibold break-words text-slate-200">
              {formatStat(e, e.format)}
              {e.year ? (
                <span className="ms-1.5 text-[10px] font-normal text-slate-500">({e.year})</span>
              ) : null}
            </span>
          </div>
        ))}
      </div>
      <p className="m-0 mt-2 text-[10px] leading-relaxed text-slate-500">
        {note ??
          (isAr
            ? 'المصدر: البنك الدولي — قاعدة بيانات التنمية العالمية (WDI). بيانات سنوية؛ والسنة بين قوسين هي سنة القياس. يُستخدم بترخيص CC BY 4.0 الذي يشترط ذكر المصدر.'
            : 'Source: The World Bank, World Development Indicators (WDI). Annual data; the year in brackets is the reference year. Used under CC BY 4.0, which requires attribution.')}
      </p>
    </section>
  );
}

