import { useMemo, useState } from 'react';
import { Users, Building2, Globe2, ChevronDown } from 'lucide-react';
import { getFlagUrl, getEmblemUrl } from '../utils/countrySymbols';
import AllianceAnalyticsSection from './AllianceAnalyticsSection';

export default function AnalyticsPanel({ data, lang, onSelectCountry }) {
  const isAr = lang === 'ar';

  const byId = useMemo(
    () => Object.fromEntries(data.countries.map((c) => [c.id, c])),
    [data.countries],
  );

  const grouped = useMemo(
    () =>
      data.continents
        .map((cont) => ({
          ...cont,
          items: data.countries.filter((c) => c.continent === cont.id),
        }))
        .filter((g) => g.items.length > 0),
    [data.continents, data.countries],
  );

  const [open, setOpen] = useState(() => new Set(grouped.length ? [grouped[0].id] : []));
  const toggle = (id) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className="space-y-6">
      {/* مصفوفة التحالفات المعمقة مع المخططات والشعارات */}
      <AllianceAnalyticsSection lang={lang} onSelectCountry={onSelectCountry} />

      {/* Alliances */}
      <section>
        <h2 className="font-display mb-3 flex items-center gap-2 text-base font-black text-white">
          <Users className="h-4 w-4 text-sky-400" />
          {isAr ? 'التحالفات والمنظمات الدولية' : 'Alliances & international bodies'}
          <span className="nx-chip border border-sky-500/25 bg-sky-500/10 text-sky-300">
            {data.alliancesList.length}
          </span>
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data.alliancesList.map((a) => (
            <AllianceCard key={a.id} alliance={a} byId={byId} isAr={isAr} />
          ))}
        </div>
      </section>

      {/* Country comparison grouped by continent */}
      {grouped.map((group) => {
        const isOpen = open.has(group.id);
        const full = group.items.filter((c) => c.detailed).length;
        return (
          <section key={group.id} className="nx-panel overflow-hidden">
            <button
              onClick={() => toggle(group.id)}
              aria-expanded={isOpen}
              className="nx-panel-head w-full transition hover:bg-slate-900/60"
            >
              <h2 className="font-display m-0 flex items-center gap-2 text-sm font-black text-white">
                <Globe2 className="h-4 w-4 text-emerald-400" />
                {group.name}
              </h2>
              <span className="flex items-center gap-2">
                <span className="text-[11px] text-slate-500">
                  {isAr ? `${full}/${group.countriesCount} تفصيلي` : `${full}/${group.countriesCount} full`}
                </span>
                <span className="nx-chip border border-emerald-500/25 bg-emerald-500/10 text-emerald-300">
                  {group.countriesCount}
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </span>
            </button>

            {isOpen && (
              <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.items.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => onSelectCountry(c)}
                    className="rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-start transition hover:border-sky-500/40 hover:bg-slate-900/40"
                  >
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {/* الشعار */}
                        <div
                          className="h-10 w-10 rounded-xl border border-amber-500/25 bg-slate-900/90 p-1 shadow flex items-center justify-center shrink-0"
                          title={isAr ? `شعار ${c.name}` : `Coat of arms of ${c.name}`}
                        >
                          <img
                            src={getEmblemUrl(c.id)}
                            alt=""
                            className="h-full w-full object-contain filter drop-shadow"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const fb = e.currentTarget.nextElementSibling;
                              if (fb) fb.style.display = 'block';
                            }}
                          />
                          <span style={{ display: 'none' }} className="text-sm">{c.flag}</span>
                        </div>

                        {/* الراية */}
                        <div className="h-6 w-9 overflow-hidden rounded border border-slate-700 bg-slate-900 shadow-sm shrink-0">
                          <img
                            src={getFlagUrl(c.id)}
                            alt={c.name}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const fb = e.currentTarget.nextElementSibling;
                              if (fb) fb.style.display = 'block';
                            }}
                          />
                          <span style={{ display: 'none' }} className="text-base text-center leading-6">{c.flag}</span>
                        </div>
                      </div>

                      <span className="nx-chip border border-rose-500/25 bg-rose-500/10 text-rose-300">
                        {c.militaryBudget}
                      </span>
                    </div>
                    <h3 className="font-display m-0 text-sm font-bold text-white">{c.name}</h3>
                    <p className="m-0 mt-0.5 text-[10px] text-slate-500">
                      {c.regionLabel} · {c.leaderTitle}
                    </p>
                    <p className="m-0 mt-1 line-clamp-2 text-[11px] leading-relaxed text-slate-400">
                      {c.leader}
                    </p>
                    <div className="mt-3 flex items-center justify-between border-t border-slate-800 pt-2.5">
                      <span className="flex items-center gap-1 text-[11px] text-slate-500">
                        <Building2 className="h-3.5 w-3.5" />
                        {c.detailed
                          ? `${c.topCompanies.length} ${isAr ? 'شركة' : 'companies'}`
                          : isAr
                            ? 'ملف أساسي'
                            : 'Basic profile'}
                      </span>
                      <span
                        className={`text-[10px] font-bold ${c.detailed ? 'text-emerald-400' : 'text-slate-600'}`}
                      >
                        {c.detailed ? (isAr ? 'تفصيلي' : 'Full') : (isAr ? 'أساسي' : 'Basic')}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}

const CHIP_LIMIT = 12;

function AllianceCard({ alliance, byId, isAr }) {
  const [expanded, setExpanded] = useState(false);

  const ids = alliance.memberIds ?? [];
  const shown = expanded ? ids : ids.slice(0, CHIP_LIMIT);
  const hidden = ids.length - shown.length;

  return (
    <article className="nx-panel flex flex-col p-4">
      <h3 className="font-display m-0 text-sm font-bold text-white">{alliance.name}</h3>
      <p className="m-0 mt-1 text-[11px] text-sky-300">{alliance.focus}</p>
      <p className="m-0 mt-1 text-[11px] font-semibold text-slate-500">
        {isAr ? 'الأعضاء' : 'Members'}: {alliance.members}
      </p>

      <div className="mt-3 flex flex-1 flex-wrap content-start gap-1.5">
        {shown.map((id) => {
          const c = byId[id];
          return (
            <span
              key={id}
              title={c?.name ?? id}
              className="nx-chip max-w-[10rem] border border-slate-700 bg-slate-900 text-slate-300"
            >
              <span className="truncate">
                {c?.flag ?? '🏳️'} {c?.name ?? id}
              </span>
            </span>
          );
        })}

        {hidden > 0 && (
          <button
            onClick={() => setExpanded(true)}
            className="nx-chip border border-sky-500/30 bg-sky-500/10 text-sky-300 transition hover:bg-sky-500/20"
          >
            +{hidden}
          </button>
        )}
      </div>

      {expanded && ids.length > CHIP_LIMIT && (
        <button
          onClick={() => setExpanded(false)}
          className="mt-2 self-start text-[10px] font-semibold text-slate-500 transition hover:text-slate-300"
        >
          {isAr ? 'إظهار أقل' : 'Show less'}
        </button>
      )}
    </article>
  );
}