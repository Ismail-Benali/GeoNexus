import { TrendingUp, Flame, Zap, ShieldAlert, Users } from 'lucide-react';
import { getFlagUrl } from '../utils/countrySymbols';

export default function IntelligenceBriefing({ lang, countries }) {
  const isAr = lang === 'ar';

  const totalSpend = countries.reduce((sum, c) => sum + (c.militaryBudgetBn || 0), 0);
  const withBudget = countries.filter((c) => c.militaryBudgetBn > 0).length;
  const detailed = countries.filter((c) => c.detailed).length;

  const topSpenders = [...countries]
    .filter((c) => c.militaryBudgetBn > 0)
    .sort((a, b) => b.militaryBudgetBn - a.militaryBudgetBn)
    .slice(0, 6);

  const stats = [
    {
      label: isAr ? 'الإنفاق العسكري العالمي' : 'Global military spend',
      value: `$${(totalSpend / 1000).toFixed(2)}T`,
      delta: isAr ? `مجموع ${withBudget} دولة` : `${withBudget} countries`,
      tone: 'emerald',
    },
    {
      label: isAr ? 'نسبة التغطية التفصيلية' : 'Detailed coverage',
      value: `${Math.round((detailed / countries.length) * 100)}%`,
      delta: `${detailed}/${countries.length}`,
      tone: 'amber',
    },
  ];

  const hotspots = [
    {
      icon: Flame,
      tone: 'rose',
      title: isAr ? 'شرق أوروبا وأوكرانيا' : 'Eastern Europe & Ukraine',
      body: isAr
        ? 'استمرار إعادة التموضع العسكري وتدفقات العقوبات الاقتصادية.'
        : 'Ongoing force repositioning and sanctions flows.',
    },
    {
      icon: Users,
      tone: 'sky',
      title: isAr ? 'توسع بريكس وتوازن التجارة' : 'BRICS expansion & trade rebalancing',
      body: isAr
        ? 'تعزيز التجارة بالعملات المحلية وتقليل الاعتماد على الدولار.'
        : 'Local-currency settlement and reduced dollar reliance.',
    },
    {
      icon: Zap,
      tone: 'amber',
      title: isAr ? 'أمن الطاقة في الخليج' : 'Gulf energy security',
      body: isAr
        ? 'أرامكو وأدنوك وربط الاستثمارات بالسلاسل اللوجستية.'
        : 'Aramco, ADNOC and supply-chain-backed investment.',
    },
  ];

  return (
    <div className="nx-brief space-y-4">
      {/* Stats */}
      <div className="nx-brief-stats">
        {stats.map((s) => (
          <div
            key={s.label}
            className="nx-card"
          >
            <p className="m-0 text-[11px] leading-tight text-slate-400">{s.label}</p>
            <p
              className={`m-0 font-display text-lg font-black leading-none ${
                s.tone === 'emerald' ? 'text-emerald-300' : 'text-amber-300'
              }`}
            >
              {s.value}
            </p>
            <p
              className={`m-0 flex items-center gap-1 text-[10px] leading-none ${
                s.tone === 'emerald' ? 'text-emerald-400' : 'text-slate-500'
              }`}
            >
              {s.tone === 'emerald' && <TrendingUp className="h-3 w-3" />}
              {s.delta}
            </p>
          </div>
        ))}
      </div>

      {/* Hotspots */}
      <section className="nx-panel overflow-hidden">
        <div className="nx-panel-head">
          <h3 className="m-0 flex items-center gap-2 text-sm font-bold text-white">
            <ShieldAlert className="h-4 w-4 text-rose-400" />
            {isAr ? 'النقاط الساخنة 2026' : 'Strategic hotspots 2026'}
          </h3>
        </div>
        <div className="space-y-2 p-3">
          {hotspots.map(({ icon: Icon, tone, title, body }) => (
            <article
              key={title}
              className={`flex gap-2.5 rounded-xl border p-2.5 ${
                {
                  rose: 'border-rose-500/20 bg-rose-500/5',
                  sky: 'border-sky-500/20 bg-sky-500/5',
                  amber: 'border-amber-500/20 bg-amber-500/5',
                }[tone]
              }`}
            >
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg ${
                  {
                    rose: 'bg-rose-500/15 text-rose-300',
                    sky: 'bg-sky-500/15 text-sky-300',
                    amber: 'bg-amber-500/15 text-amber-300',
                  }[tone]
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
              <div className="min-w-0">
                <h4 className="m-0 text-xs font-bold text-slate-100">{title}</h4>
                <p className="m-0 mt-0.5 text-[11px] leading-relaxed text-slate-400">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Top spenders */}
      <section className="nx-panel overflow-hidden">
        <div className="nx-panel-head">
          <h3 className="m-0 flex items-center gap-2 text-sm font-bold text-white">
            <TrendingUp className="h-4 w-4 text-emerald-400" />
            {isAr ? 'أعلى الميزانيات' : 'Top defense budgets'}
          </h3>
        </div>
        <ul className="m-0 space-y-1 p-3">
          {topSpenders.map((c, i) => (
            <li
              key={c.id}
              className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-xs transition hover:bg-slate-800/60"
            >
              <span className="w-4 shrink-0 text-center font-black text-slate-600">{i + 1}</span>
              <div className="h-4 w-6 overflow-hidden rounded border border-slate-700 bg-slate-900 shadow-sm shrink-0">
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
                <span style={{ display: 'none' }} className="text-xs text-center leading-4">{c.flag}</span>
              </div>
              <span className="min-w-0 flex-1 truncate text-slate-300 font-medium">{c.name}</span>
              <span className="nx-chip border border-emerald-500/25 bg-emerald-500/10 text-emerald-300">
                {c.militaryBudget}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
