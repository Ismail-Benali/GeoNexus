import { Users, Shield, Building2, ArrowUpLeft } from 'lucide-react';

export default function AnalyticsPanel({ data, lang, onSelectCountry }) {
  const isAr = lang === 'ar';

  return (
    <div className="space-y-5">
      {/* Alliances */}
      <section>
        <h2 className="font-display mb-3 flex items-center gap-2 text-base font-black text-white">
          <Users className="h-4 w-4 text-sky-400" />
          {isAr ? 'التحالفات الاستراتيجية الكبرى' : 'Major strategic alliances'}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data.alliancesList.map((a) => (
            <article key={a.name} className="nx-panel p-4">
              <h3 className="font-display m-0 text-sm font-bold text-white">{a.name}</h3>
              <p className="m-0 mt-1 text-[11px] text-sky-300">{a.focus}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {a.members.map((m) => (
                  <span
                    key={m}
                    className="nx-chip border border-slate-700 bg-slate-900 text-slate-300"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Country comparison */}
      <section>
        <h2 className="font-display mb-3 flex items-center gap-2 text-base font-black text-white">
          <Shield className="h-4 w-4 text-rose-400" />
          {isAr ? 'مقارنة القادة والميزانيات' : 'Commanders & budget comparison'}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data.countries.map((c) => (
            <button
              key={c.id}
              onClick={() => onSelectCountry(c)}
              className="nx-panel group p-4 text-start transition hover:border-sky-500/40"
            >
              <div className="mb-2 flex items-start justify-between gap-2">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-slate-800 bg-slate-950/70 text-2xl">
                  {c.flag}
                </span>
                <span className="nx-chip border border-rose-500/25 bg-rose-500/10 text-rose-300">
                  {c.militaryBudget}
                </span>
              </div>
              <h3 className="font-display m-0 text-sm font-bold text-white">{c.name}</h3>
              <p className="m-0 mt-1 line-clamp-2 text-[11px] leading-relaxed text-slate-400">
                {c.militaryLeader}
              </p>
              <div className="mt-3 flex items-center justify-between border-t border-slate-800 pt-2.5">
                <span className="flex items-center gap-1 text-[11px] text-slate-500">
                  <Building2 className="h-3.5 w-3.5" />
                  {c.topCompanies.length} {isAr ? 'شركات' : 'companies'}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-sky-400">
                  {isAr ? 'الملف' : 'Profile'}
                  <ArrowUpLeft className="h-3.5 w-3.5 rtl:rotate-180" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
