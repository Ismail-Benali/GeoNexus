import { useEffect, useMemo, useState } from 'react';
import { Users, Shield, Search, X, CornerDownLeft } from 'lucide-react';
import { getFlagUrl, getEmblemUrl } from '../utils/countrySymbols';
import { translateText } from '../utils/translator';

const SORTS = [
  { id: 'name', ar: 'الاسم', en: 'Name' },
  { id: 'detail', ar: 'التفصيل', en: 'Detail' },
  { id: 'budget', ar: 'الميزانية', en: 'Budget' },
  { id: 'alliances', ar: 'التحالفات', en: 'Alliances' },
];

const RESULT_LIMIT = 80;

export default function SearchModal({ data, lang, onClose, onSelectCountry }) {
  const isAr = lang === 'ar';
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('name');

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const qAlt = translateText(q, isAr ? 'ar' : 'en').toLowerCase();
    let rows = data.countries;

    if (q) {
      rows = rows.filter((c) => {
        const fullText = [
          c.name,
          c.capital,
          c.leader,
          c.rulingParty,
          c.militaryLeader,
          c.militaryBudget,
          ...c.parties,
          ...c.alliances,
          ...c.topCompanies.map((t) => t.name),
          ...c.topCompanies.map((t) => t.sector),
        ]
          .join(' ')
          .toLowerCase();

        return fullText.includes(q) || (qAlt && fullText.includes(qAlt));
      });
    }

    const sorted = [...rows];
    if (sort === 'detail') sorted.sort((a, b) => Number(b.detailed) - Number(a.detailed));
    else if (sort === 'alliances') sorted.sort((a, b) => b.alliances.length - a.alliances.length);
    else if (sort === 'budget') sorted.sort((a, b) => b.militaryBudgetBn - a.militaryBudgetBn);
    else sorted.sort((a, b) => a.name.localeCompare(b.name, isAr ? 'ar' : 'en'));
    return sorted;
  }, [data.countries, query, sort, isAr]);

  const visible = results.slice(0, RESULT_LIMIT);

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950/85 p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-up nx-panel flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden !rounded-2xl"
      >
        {/* Input */}
        <div className="flex items-center gap-3 border-b border-slate-800 px-4 py-3">
          <Search className="h-5 w-5 shrink-0 text-sky-400" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              isAr
                ? 'ابحث عن دولة، رئيس، حزب، شركة، أو قائد عسكري...'
                : 'Search country, president, party, company or commander...'
            }
            className="min-w-0 flex-1 bg-transparent text-base text-white outline-none placeholder:text-slate-600"
          />
          <button
            onClick={onClose}
            aria-label={isAr ? 'إغلاق' : 'Close'}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-slate-700 text-slate-400 transition hover:border-rose-500/50 hover:text-rose-300"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Sorts */}
        <div className="flex flex-wrap items-center gap-1.5 border-b border-slate-800 bg-slate-950/40 px-4 py-2">
          <span className="text-[11px] text-slate-500">{isAr ? 'ترتيب:' : 'Sort:'}</span>
          {SORTS.map((s) => (
            <button
              key={s.id}
              onClick={() => setSort(s.id)}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold transition ${
                sort === s.id
                  ? 'bg-slate-700 text-white'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {isAr ? s.ar : s.en}
            </button>
          ))}
          <span className="ms-auto text-[11px] text-slate-500">
            {results.length} {isAr ? 'نتيجة' : 'results'}
          </span>
        </div>

        {/* Results */}
        <div className="min-h-0 flex-1 overflow-y-auto p-2">
          {results.length === 0 ? (
            <p className="py-16 text-center text-sm text-slate-500">
              {isAr ? 'لا توجد نتائج مطابقة لبحثك' : 'No results match your query'}
            </p>
          ) : (
            <ul className="m-0 list-none space-y-1 p-0">
              {visible.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => onSelectCountry(c)}
                    className="flex w-full items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-start transition hover:border-sky-500/40 hover:bg-slate-800/60"
                  >
                    <div className="flex items-center gap-1.5 shrink-0">
                      {/* الشعار */}
                      <div
                        className="h-9 w-9 rounded-xl border border-amber-500/25 bg-slate-900/90 p-1 shadow-sm flex items-center justify-center shrink-0"
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
                        <span style={{ display: 'none' }} className="text-sm text-center leading-6">{c.flag}</span>
                      </div>
                    </div>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-bold text-slate-100">
                        {c.name}
                      </span>
                      <span className="block truncate text-[11px] text-slate-500">
                        {c.leader}
                      </span>
                    </span>
                    <span className="hidden shrink-0 flex-wrap items-center justify-end gap-1 sm:flex">
                      {c.alliances.slice(0, 2).map((a, i) => (
                        <span
                          key={`${a}-${i}`}
                          className="nx-chip max-w-[12rem] border border-sky-500/25 bg-sky-500/10 text-sky-200"
                        >
                          <span className="truncate">{a}</span>
                        </span>
                      ))}
                    </span>
                    <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-slate-600" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {results.length > visible.length && (
            <p className="mt-2 px-3 py-2 text-center text-[11px] text-slate-500">
              {isAr
                ? `يُعرض أول ${visible.length} من ${results.length} — حدّد بحثك لتضييق النتائج`
                : `Showing first ${visible.length} of ${results.length} — refine your query`}
            </p>
          )}
        </div>

        <div className="flex shrink-0 items-center justify-between gap-3 border-t border-slate-800 px-4 py-2 text-[11px] text-slate-500">
          <span className="flex items-center gap-1.5">
            <Shield className="h-3.5 w-3.5" />
            {isAr ? 'بحث شامل في البيانات المخزنة' : 'Full-text search across stored data'}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" />
            {data.countries.length} {isAr ? 'دولة' : 'countries'}
          </span>
        </div>
      </div>
    </div>
  );
}
