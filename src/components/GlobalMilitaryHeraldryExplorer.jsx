import { useState, useMemo } from 'react';
import {
  Award,
  Search,
  Eye,
  ChevronRight,
} from 'lucide-react';
import { COUNTRY_MILITARY_INSIGNIAS } from '../data/countryMilitaryInsigniaDB';
import { MilitaryInsigniaBadge } from './CountrySymbols';
import MilitaryInsigniaGallery from './MilitaryInsigniaGallery';
import CountryIntelligenceDossier from './CountryIntelligenceDossier';

export default function GlobalMilitaryHeraldryExplorer({
  lang = 'ar',
  onSelectCountry,
}) {
  const isAr = lang === 'ar';
  const [selectedCountryId, setSelectedCountryId] = useState('sa');
  const [activeViewMode, setActiveViewMode] = useState('heraldry'); // 'heraldry' | 'dossier'
  const [searchQuery, setSearchQuery] = useState('');

  const countriesList = useMemo(() => {
    return Object.values(COUNTRY_MILITARY_INSIGNIAS);
  }, []);

  const filteredCountries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return countriesList;
    return countriesList.filter(
      (c) =>
        c.nameAr?.toLowerCase().includes(q) ||
        c.nameEn?.toLowerCase().includes(q) ||
        c.countryId?.toLowerCase().includes(q)
    );
  }, [countriesList, searchQuery]);

  const activeCountry = useMemo(() => {
    return filteredCountries.find((c) => c.countryId === selectedCountryId) || countriesList[0];
  }, [filteredCountries, selectedCountryId, countriesList]);

  return (
    <div className="space-y-6" dir={isAr ? 'rtl' : 'ltr'}>
      {/* الترويسة الرئيسية */}
      <div className="relative overflow-hidden rounded-2xl border border-amber-500/35 bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-950 p-5 sm:p-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-amber-500 to-rose-600 text-white shadow-lg shadow-amber-500/20">
              <Award className="h-7 w-7" />
              <span className="absolute -top-1 -end-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-500" />
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="m-0 text-xl sm:text-2xl font-black text-white">
                  {isAr
                    ? 'مركز الشارات العسكرية الرسمية والملفات الاستخباراتية للدول'
                    : 'Global Military Heraldry, Official Insignias & Classified Dossiers'}
                </h2>
                <span className="rounded-md border border-amber-500/40 bg-amber-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-300">
                  ONLINE HERALDRY
                </span>
              </div>
              <p className="m-0 mt-1 text-xs sm:text-sm text-slate-300">
                {isAr
                  ? 'استعراض الشارات الرسمية الموثقة من الإنترنت (شارات الطيران، شعارات القوات البرية، الرايات البحرية) والملفات الاستخبارية السرية لكل دولة.'
                  : 'Official military roundels, air force cockades, naval ensigns from verified online repositories, paired with sovereign intelligence dossiers.'}
              </p>
            </div>
          </div>

          {/* تبديل وضع العرض */}
          <div className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900/80 p-1">
            <button
              onClick={() => setActiveViewMode('heraldry')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeViewMode === 'heraldry'
                  ? 'bg-amber-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Award className="h-3.5 w-3.5" />
              <span>{isAr ? 'الشارات والأوسمة' : 'Military Insignias'}</span>
            </button>
            <button
              onClick={() => setActiveViewMode('dossier')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeViewMode === 'dossier'
                  ? 'bg-rose-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Eye className="h-3.5 w-3.5" />
              <span>{isAr ? 'الملف الاستخباري السري' : 'Intelligence Dossier'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* شريط اختيار وتصفية الدول */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* القائمة الجانبية للدول */}
        <div className="lg:col-span-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 space-y-3">
          <div className="relative">
            <Search className="absolute start-2.5 top-2.5 h-3.5 w-3.5 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAr ? 'بحث عن دولة...' : 'Search countries...'}
              className="w-full rounded-lg border border-slate-800 bg-slate-900 ps-8 pe-3 py-1.5 text-xs text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div className="max-h-[600px] overflow-y-auto space-y-1.5 pe-1">
            {filteredCountries.map((c) => {
              const isSelected = activeCountry.countryId === c.countryId;
              return (
                <button
                  key={c.countryId}
                  onClick={() => setSelectedCountryId(c.countryId)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl border transition text-start ${
                    isSelected
                      ? 'border-amber-500 bg-amber-500/15 text-white shadow-md ring-1 ring-amber-500/40'
                      : 'border-slate-800/80 bg-slate-900/40 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <MilitaryInsigniaBadge country={{ id: c.countryId, name: c.nameAr }} className="h-8 w-8" />
                    <div className="min-w-0">
                      <span className="font-bold text-xs block truncate">
                        {isAr ? c.nameAr : c.nameEn}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono block uppercase">
                        {c.countryId}
                      </span>
                    </div>
                  </div>

                  <ChevronRight className={`h-4 w-4 shrink-0 transition ${isSelected ? 'text-amber-400 rotate-90 sm:rotate-0' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* عرض المحتوى التفصيلي للدولة النشطة */}
        <div className="lg:col-span-8 space-y-4">
          {activeCountry && (
            <>
              <div className="flex items-center justify-between gap-3 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                <span className="text-xs font-bold text-slate-300">
                  {isAr ? `الدولة النشطة: ${activeCountry.nameAr}` : `Active State: ${activeCountry.nameEn}`}
                </span>
                <button
                  type="button"
                  onClick={() => onSelectCountry?.({ id: activeCountry.countryId, name: activeCountry.nameAr })}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold hover:bg-amber-500/30 transition cursor-pointer"
                >
                  <Eye className="h-3.5 w-3.5" />
                  <span>{isAr ? 'فتح كامل بيانات الدولة' : 'Open Country Modal'}</span>
                </button>
              </div>

              {activeViewMode === 'heraldry' ? (
                <MilitaryInsigniaGallery
                  country={{ id: activeCountry.countryId, name: activeCountry.nameAr }}
                  lang={lang}
                  onSelectCountry={onSelectCountry}
                />
              ) : (
                <CountryIntelligenceDossier
                  country={{ id: activeCountry.countryId, name: activeCountry.nameAr }}
                  lang={lang}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
