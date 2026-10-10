import { useState } from 'react';
import {
  Radar,
  Eye,
  Crosshair,
  Satellite,
  Terminal,
  History,
  ExternalLink,
} from 'lucide-react';
import { getCountryIntelligenceDossier } from '../data/countryIntelligenceDossierDB';

export default function CountryIntelligenceDossier({ country, lang = 'ar' }) {
  const isAr = lang === 'ar';
  const dossier = getCountryIntelligenceDossier(country, lang);
  const [activeAgencyTab, setActiveAgencyTab] = useState('all');

  const filteredAgencies = (dossier.agencies || []).filter((agency) => {
    if (activeAgencyTab === 'all') return true;
    if (activeAgencyTab === 'foreign') return agency.typeAr.includes('خارج') || agency.typeEn.toLowerCase().includes('foreign');
    if (activeAgencyTab === 'domestic') return agency.typeAr.includes('داخل') || agency.typeEn.toLowerCase().includes('domestic');
    if (activeAgencyTab === 'military') return agency.typeAr.includes('عسكر') || agency.typeEn.toLowerCase().includes('military');
    return true;
  });

  return (
    <div className="space-y-4" dir={isAr ? 'rtl' : 'ltr'}>
      {/* الترويسة السرية العسكرية للملف الاستخباري (Top Secret Dossier Stamp) */}
      <div className="relative overflow-hidden rounded-2xl border border-rose-500/40 bg-gradient-to-r from-slate-950 via-rose-950/20 to-slate-900 p-4 sm:p-5 shadow-2xl">
        <div className="pointer-events-none absolute -end-16 -top-16 h-48 w-48 rounded-full bg-rose-500/10 blur-2xl" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-rose-600 to-amber-700 text-white shadow-lg shadow-rose-950">
              <Eye className="h-7 w-7 animate-pulse text-amber-200" />
              <span className="absolute -top-1 -end-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-rose-500" />
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-mono text-[10px] font-black uppercase tracking-widest text-rose-400 border border-rose-500/40 bg-rose-950/70 px-2 py-0.5 rounded">
                  {dossier.clearanceLevel}
                </span>
                <span className="font-mono text-[10px] font-bold text-amber-400 bg-amber-950/50 border border-amber-500/30 px-2 py-0.5 rounded">
                  {dossier.codeName}
                </span>
              </div>
              <h3 className="m-0 mt-1 text-base sm:text-lg font-black text-white">
                {isAr ? `الملف الاستخباري السيادي: ${country?.name || dossier.nameAr}` : `Classified Intelligence Dossier: ${country?.name || dossier.nameEn}`}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="rounded-xl border border-rose-500/30 bg-rose-950/40 px-3 py-1.5 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                {isAr ? 'مؤشر التهديد الاستخباري 2026' : 'Threat Level'}
              </span>
              <span className="font-mono text-xs font-black text-rose-300">
                {dossier.threatPriorityIndex2026?.level}
              </span>
            </div>
          </div>
        </div>

        {/* عقيدة العمليات السرية وفلسفة التجسس */}
        <div className="mt-3.5 rounded-xl border border-rose-500/20 bg-slate-900/80 p-3 text-xs leading-relaxed text-slate-300">
          <span className="font-bold text-amber-400 block mb-1">
            {isAr ? 'العقيدة الاستخبارية وفلسفة الردع السيادي:' : 'Espionage Doctrine & Deterrence Philosophy:'}
          </span>
          <p className="m-0 leading-relaxed">
            {isAr ? dossier.espionagePhilosophyAr : (dossier.espionagePhilosophyEn || dossier.espionagePhilosophyAr)}
          </p>
        </div>
      </div>

      {/* أجهزة الاستخبارات الرئيسية */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <Radar className="h-4 w-4 text-sky-400" />
            <h4 className="m-0 text-sm font-black text-white">
              {isAr ? 'الأجهزة والوكالات الاستخباراتية والأمنية السيادية' : 'National Intelligence Apparatus & Spy Agencies'}
            </h4>
          </div>

          <div className="flex items-center gap-1 text-xs">
            {['all', 'foreign', 'domestic', 'military'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveAgencyTab(tab)}
                className={`px-2.5 py-1 rounded-lg font-bold transition text-[11px] ${
                  activeAgencyTab === tab
                    ? 'bg-sky-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {tab === 'all' && (isAr ? 'الكل' : 'All')}
                {tab === 'foreign' && (isAr ? 'خارجية' : 'Foreign')}
                {tab === 'domestic' && (isAr ? 'أمن داخلي' : 'Domestic')}
                {tab === 'military' && (isAr ? 'عسكرية' : 'Military')}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {filteredAgencies.map((agency, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5 space-y-2.5 hover:border-sky-500/40 transition"
            >
              <div className="flex items-start justify-between gap-2 border-b border-slate-800 pb-2">
                <div className="flex items-center gap-2.5">
                  <div className="relative h-11 w-11 shrink-0 grid place-items-center rounded-xl bg-slate-900/90 border border-slate-700/80 p-1 overflow-hidden shadow-md">
                    {agency.emblemUrl ? (
                      <img
                        src={agency.emblemUrl}
                        alt={agency.nameAr}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-contain filter drop-shadow"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.parentElement?.querySelector('.acronym-fallback');
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    <div
                      className={`acronym-fallback ${agency.emblemUrl ? 'hidden' : 'grid'} h-full w-full place-items-center bg-sky-500/10 text-sky-300 font-mono text-xs font-black`}
                    >
                      {agency.acronym ? agency.acronym.slice(0, 4) : 'INT'}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h5 className="m-0 text-xs font-black text-white">
                        {isAr ? agency.nameAr : agency.nameEn}
                      </h5>
                      {agency.wikipediaUrl && (
                        <a
                          href={agency.wikipediaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded border border-sky-500/30 bg-sky-950/40 px-1.5 py-0.2 text-[9px] font-bold text-sky-300 hover:border-sky-400 hover:bg-sky-900/60 transition"
                          title={isAr ? 'عرض صفحة الجهاز على ويكيبيديا' : 'View Wikipedia article'}
                        >
                          <span>{isAr ? 'ويكيبيديا' : 'Wikipedia'}</span>
                          <ExternalLink className="h-2.5 w-2.5" />
                        </a>
                      )}
                    </div>
                    <span className="text-[10px] text-sky-400 block mt-0.5">
                      {isAr ? agency.typeAr : agency.typeEn}
                    </span>
                  </div>
                </div>

                {agency.founded && (
                  <span className="font-mono text-[10px] text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 shrink-0">
                    {agency.founded}
                  </span>
                )}
              </div>

              <p className="m-0 text-xs text-slate-300 leading-relaxed">
                {isAr ? agency.mandateAr : (agency.mandateEn || agency.mandateAr)}
              </p>

              <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-400 pt-2 border-t border-slate-800/80">
                {agency.headquartersAr && (
                  <div>
                    <span className="text-slate-500 block mb-0.5">{isAr ? 'المقر العام:' : 'Headquarters:'}</span>
                    <span className="text-slate-200 font-medium truncate block">{agency.headquartersAr}</span>
                  </div>
                )}
                {agency.budgetLevel && (
                  <div>
                    <span className="text-slate-500 block mb-0.5">{isAr ? 'مستوى التمويل:' : 'Budget Scale:'}</span>
                    <span className="text-amber-300 font-bold truncate block">{agency.budgetLevel}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* القدرات السيبرانية واستخبارات الإشارات (SIGINT & Cyber Command) وأقمار التجسس */}
      <div className="grid gap-3 sm:grid-cols-2">
        {/* الحرب السيبرانية والرصد الرقمي */}
        {dossier.cyberAndSigint && (
          <div className="rounded-xl border border-indigo-500/30 bg-slate-950/70 p-3.5 space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold border-b border-slate-800 pb-2">
              <Terminal className="h-4 w-4" />
              <span>{isAr ? 'القيادة السيبرانية واستخبارات الإشارات (SIGINT)' : 'Cyber Command & SIGINT Infrastructure'}</span>
            </div>
            <div className="space-y-1.5 text-xs text-slate-300">
              <p className="m-0 leading-relaxed">
                <strong className="text-slate-400 me-1">{isAr ? 'القدرات الهجومية والدفاعية:' : 'Capabilities:'}</strong>
                {dossier.cyberAndSigint.offensiveCapabilitiesAr}
              </p>
              {dossier.cyberAndSigint.keyCyberUnitsAr && (
                <p className="m-0 leading-relaxed text-indigo-300 text-[11px]">
                  <strong>{isAr ? 'أبرز الوحدات السيبرانية:' : 'Key Units:'}</strong> {dossier.cyberAndSigint.keyCyberUnitsAr}
                </p>
              )}
              {dossier.cyberAndSigint.sigintBasesAr && (
                <p className="m-0 leading-relaxed text-slate-400 text-[11px]">
                  <strong>{isAr ? 'محطات الرصد والاستماع:' : 'Listening Posts:'}</strong> {dossier.cyberAndSigint.sigintBasesAr}
                </p>
              )}
            </div>
          </div>
        )}

        {/* شبكة أقمار التجسس والاستطلاع الفضائي */}
        {dossier.spySatellites && (
          <div className="rounded-xl border border-sky-500/30 bg-slate-950/70 p-3.5 space-y-2">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-bold border-b border-slate-800 pb-2">
              <Satellite className="h-4 w-4" />
              <span>{isAr ? 'منظومة أقمار التجسس والاستطلاع الفضائي' : 'Orbital Reconnaissance & Spy Constellations'}</span>
            </div>
            <div className="space-y-1.5 text-xs text-slate-300">
              <p className="m-0 leading-relaxed">
                <strong className="text-slate-400 me-1">{isAr ? 'الكوكبات والأقمار المدارية:' : 'Constellations:'}</strong>
                {dossier.spySatellites.constellationsAr}
              </p>
              {dossier.spySatellites.resolution && (
                <div className="mt-1 flex items-center justify-between text-[11px] bg-sky-950/50 p-2 rounded-lg border border-sky-500/20 text-sky-200">
                  <span>{isAr ? 'دقة الرصد المداري:' : 'Imaging Resolution:'}</span>
                  <span className="font-bold text-sky-300">{dossier.spySatellites.resolution}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* العمليات السرية التاريخية وتفكيك شبكات التجسس (Declassified Ops) */}
      {(dossier.historicalCovertOps || []).length > 0 && (
        <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5 space-y-2.5">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold border-b border-slate-800 pb-2">
            <History className="h-4 w-4" />
            <span>{isAr ? 'أبرز العمليات السرية وضربات مكافحة التجسس المنشورة' : 'Historic Covert Operations & Counter-Espionage Milestones'}</span>
          </div>

          <div className="space-y-2">
            {dossier.historicalCovertOps.map((op, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-slate-800/80 bg-slate-900/60 p-2.5 space-y-1.5 text-xs"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <Crosshair className="h-3 w-3 text-rose-400 shrink-0" />
                    <span>{op.codenamed}</span>
                  </span>
                  <span className="font-mono text-[10px] text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                    {op.year}
                  </span>
                </div>
                <p className="m-0 text-slate-300 text-[11px] leading-relaxed">
                  {op.summaryAr}
                </p>
                <div className="text-[10px] text-emerald-400 pt-1 border-t border-slate-800 font-semibold">
                  <span className="text-slate-500 me-1">{isAr ? 'النتيجة الاستراتيجية:' : 'Outcome:'}</span>
                  {op.outcomeAr}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* وحدات العمليات الخاصة التابعة للمخابرات والأمن السيادي (Black Ops) */}
      {(dossier.blackOpsUnits || []).length > 0 && (
        <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5 space-y-2">
          <div className="flex items-center gap-2 text-rose-400 text-xs font-bold border-b border-slate-800 pb-2">
            <Crosshair className="h-4 w-4" />
            <span>{isAr ? 'قوات النخبة والعمليات الخاصة التابعة للأجهزة الأمنية' : 'Covert Action & Paramilitary Units (Black Ops)'}</span>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {dossier.blackOpsUnits.map((unit, idx) => (
              <div key={idx} className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/50 text-xs space-y-1">
                <span className="font-bold text-white block">{unit.nameAr}</span>
                <span className="text-[11px] text-slate-400 block leading-snug">{unit.roleAr}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
