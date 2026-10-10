import { useState } from 'react';
import { getFlagUrl, getEmblemUrl } from '../utils/countrySymbols';
import { getCountryMilitaryInsigniaData } from '../data/countryMilitaryInsigniaDB';
import { Shield, Plane, Anchor, Award, ExternalLink } from 'lucide-react';

/**
 * مكون راية الدولة (Flag) بدقة عالية مع معالجة الأخطاء والرجوع للإيموجي
 */
export function CountryFlag({ country, className = 'h-5 w-7', rounded = true }) {
  const [failed, setFailed] = useState(false);

  if (!country) return null;
  if (failed || !country.id) {
    return <span className="text-base leading-none select-none">{country.flag}</span>;
  }

  return (
    <img
      src={getFlagUrl(country.id)}
      alt={typeof country.name === 'string' ? country.name : country.name?.ar ?? 'Flag'}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover shadow-sm inline-block shrink-0 ${rounded ? 'rounded' : ''} ${className}`}
    />
  );
}

/**
 * مكون شعار الدولة الرسمي (Coat of Arms / National Emblem)
 */
export function CountryEmblem({ country, className = 'h-10 w-10', alt = '' }) {
  const [failed, setFailed] = useState(false);

  if (!country) return null;
  const label = alt || (typeof country.name === 'string' ? country.name : country.name?.ar ?? '');

  if (failed || !country.id) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center rounded-xl border border-amber-500/30 bg-gradient-to-b from-amber-500/15 via-slate-900/60 to-slate-950 p-1 text-center shadow-inner ${className}`}
        title={`شعار ${label}`}
      >
        <span className="text-xl filter drop-shadow">{country.flag}</span>
      </div>
    );
  }

  return (
    <div className={`relative flex shrink-0 items-center justify-center overflow-hidden ${className}`}>
      <img
        src={getEmblemUrl(country.id)}
        alt={`شعار ${label}`}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-full w-full object-contain filter drop-shadow transition-transform duration-300 hover:scale-110"
      />
    </div>
  );
}

/**
 * شارات القوات الجوية والرموز العسكرية الرسمية (Military Air Force Roundel & Cockade)
 * يدعم التحميل المباشر للشارات العسكرية من الإنترنت (Wikimedia Commons / CDN) مع الرجوع للرسومات المتجهة SVG
 */
export function MilitaryInsigniaBadge({ country, className = 'h-12 w-12', showTitle = false }) {
  const [imgFailed, setImgFailed] = useState(false);
  const cid = (country?.id || '').toLowerCase();
  const insigniaData = getCountryMilitaryInsigniaData(country);
  const onlineUrl = insigniaData?.branches?.airForce?.roundelUrl || insigniaData?.generalStaffBadgeUrl;

  // SVG مخصص وعالي الدقة لشارات الطيران وسلاح الجو كنسخة احتياطية فائقة النقاء
  let roundelSvg = null;

  if (cid === 'sa') {
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#006c35" stroke="#ffffff" strokeWidth="3" />
        <circle cx="50" cy="50" r="34" fill="#ffffff" />
        <circle cx="50" cy="50" r="22" fill="#006c35" />
        <path d="M50 35 v18 M44 48 l12 -6 M44 42 l12 6" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="50" cy="50" r="5" fill="#f59e0b" />
      </svg>
    );
  } else if (cid === 'eg') {
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#ce1126" stroke="#1e293b" strokeWidth="1" />
        <circle cx="50" cy="50" r="32" fill="#ffffff" />
        <circle cx="50" cy="50" r="16" fill="#000000" />
        <polygon points="50,38 53,46 61,46 55,51 57,59 50,54 43,59 45,51 39,46 47,46" fill="#eab308" />
      </svg>
    );
  } else if (cid === 'us') {
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <rect x="5" y="42" width="90" height="16" rx="2" fill="#ffffff" stroke="#002868" strokeWidth="2" />
        <rect x="5" y="47" width="90" height="6" fill="#bf0a30" />
        <circle cx="50" cy="50" r="34" fill="#002868" stroke="#ffffff" strokeWidth="3" />
        <polygon points="50,22 58,38 75,38 61,49 67,65 50,55 33,65 39,49 25,38 42,38" fill="#ffffff" />
      </svg>
    );
  } else if (cid === 'ru') {
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <polygon points="50,6 63,35 95,35 69,54 79,84 50,66 21,84 31,54 5,35 37,35" fill="#d52b1e" stroke="#0039a6" strokeWidth="5" />
        <polygon points="50,14 60,37 86,37 65,52 73,76 50,62 27,76 35,52 14,37 40,37" fill="#d52b1e" stroke="#ffffff" strokeWidth="3" />
      </svg>
    );
  } else if (cid === 'cn') {
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <polygon points="50,8 62,36 93,36 68,54 77,82 50,65 23,82 32,54 7,36 38,36" fill="#de2910" stroke="#ffde00" strokeWidth="4" />
        <circle cx="50" cy="50" r="14" fill="#ffde00" opacity="0.3" />
        <text x="50" y="55" fontSize="13" fontWeight="900" textAnchor="middle" fill="#ffde00">八一</text>
      </svg>
    );
  } else if (cid === 'gb' || cid === 'uk') {
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#012169" />
        <circle cx="50" cy="50" r="32" fill="#ffffff" />
        <circle cx="50" cy="50" r="16" fill="#c8102e" />
      </svg>
    );
  } else if (cid === 'fr') {
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#ed2939" />
        <circle cx="50" cy="50" r="32" fill="#ffffff" />
        <circle cx="50" cy="50" r="16" fill="#002395" />
      </svg>
    );
  } else if (cid === 'de') {
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
        <path d="M40,15 L60,15 L56,40 L85,36 L85,64 L56,60 L60,85 L40,85 L44,60 L15,64 L15,36 L44,40 Z" fill="#ffffff" stroke="#0f172a" strokeWidth="3" />
        <path d="M42,20 L58,20 L54,42 L80,38 L80,62 L54,58 L58,80 L42,80 L46,58 L20,62 L20,38 L46,42 Z" fill="#0f172a" />
      </svg>
    );
  } else if (cid === 'tr') {
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#e30a17" />
        <circle cx="50" cy="50" r="32" fill="#ffffff" />
        <circle cx="50" cy="50" r="16" fill="#e30a17" />
      </svg>
    );
  } else if (cid === 'ae') {
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#ff0000" />
        <circle cx="50" cy="50" r="36" fill="#00732f" />
        <circle cx="50" cy="50" r="24" fill="#ffffff" />
        <circle cx="50" cy="50" r="12" fill="#000000" />
      </svg>
    );
  } else if (cid === 'il') {
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#0038b8" strokeWidth="4" />
        <circle cx="50" cy="50" r="40" fill="#ffffff" />
        <polygon points="50,18 78,66 22,66" fill="none" stroke="#0038b8" strokeWidth="5" strokeLinejoin="round" />
        <polygon points="50,78 78,30 22,30" fill="none" stroke="#0038b8" strokeWidth="5" strokeLinejoin="round" />
      </svg>
    );
  } else if (cid === 'ir') {
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#da0000" />
        <circle cx="50" cy="50" r="32" fill="#ffffff" />
        <circle cx="50" cy="50" r="16" fill="#239f40" />
        <circle cx="50" cy="50" r="5" fill="#ffffff" />
      </svg>
    );
  } else if (cid === 'in') {
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#ff9933" />
        <circle cx="50" cy="50" r="32" fill="#ffffff" />
        <circle cx="50" cy="50" r="16" fill="#138808" />
        <circle cx="50" cy="50" r="4" fill="#000080" />
      </svg>
    );
  } else if (cid === 'jp') {
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#bc002d" strokeWidth="3" />
        <circle cx="50" cy="50" r="34" fill="#bc002d" />
      </svg>
    );
  } else if (cid === 'dz') {
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#006633" stroke="#ffffff" strokeWidth="2" />
        <path d="M50,2 A48,48 0 0,1 50,98 Z" fill="#ffffff" />
        <circle cx="48" cy="50" r="22" fill="#d21034" />
        <circle cx="53" cy="50" r="18" fill="#ffffff" />
        <polygon points="58,50 51,52 54,45 49,49 53,55" fill="#d21034" />
      </svg>
    );
  } else if (cid === 'ma') {
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#c1272d" stroke="#f59e0b" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="40" fill="#c1272d" />
        <polygon points="50,22 58,46 84,46 63,60 71,84 50,70 29,84 37,60 16,46 42,46" fill="none" stroke="#006233" strokeWidth="4.5" strokeLinejoin="round" />
        <path d="M42 20 L50 14 L58 20 L55 24 L45 24 Z" fill="#f59e0b" />
      </svg>
    );
  } else if (cid === 'ua') {
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#0057b7" stroke="#ffd700" strokeWidth="3" />
        <circle cx="50" cy="50" r="32" fill="#ffd700" />
        <path d="M50 30 v25 M42 36 v12 c0 4 8 4 8 0 M58 36 v12 c0 4 -8 4 -8 0" stroke="#0057b7" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      </svg>
    );
  } else {
    // الشارة العسكرية التكتيكية العامة المستوحاة من راية وشعار الدولة
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="47" fill="#090d16" stroke="#f59e0b" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="40" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 2" />
        <path d="M12 50 C24 38, 38 46, 50 50 C62 46, 76 38, 88 50 C76 56, 62 52, 50 50 C38 52, 24 56, 12 50 Z" fill="#38bdf8" opacity="0.4" />
        <polygon points="50,26 56,38 70,38 59,47 63,60 50,52 37,60 41,47 30,38 44,38" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
      </svg>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div
        className={`relative grid place-items-center rounded-2xl border border-sky-500/30 bg-gradient-to-b from-sky-500/10 via-slate-900 to-slate-950 p-1.5 shadow-lg backdrop-blur overflow-hidden ${className}`}
        title={`شارة القوات العسكرية لـ ${country?.name || ''}`}
      >
        {!imgFailed && onlineUrl ? (
          <img
            src={onlineUrl}
            alt="Military Roundel"
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-contain filter drop-shadow hover:scale-110 transition duration-300"
          />
        ) : (
          roundelSvg
        )}
      </div>
      {showTitle && (
        <div className="min-w-0">
          <span className="text-[10px] uppercase font-bold tracking-wider text-sky-400 block">
            شارة القوات المسلحة الرسمية
          </span>
          <span className="text-xs font-black text-white truncate block">
            {country?.name} Military Insignia
          </span>
        </div>
      )}
    </div>
  );
}

/**
 * قسم الشارات العسكرية والأوسمة الحربية المتقدمة لجميع أفرع القوات المسلحة
 */
export function CountryMilitaryHeraldry({ country, lang = 'ar' }) {
  const isAr = lang === 'ar';
  const insignia = getCountryMilitaryInsigniaData(country);
  const branches = insignia?.branches || {};

  return (
    <div className="space-y-4">
      {/* الترويسة الرئيسية مع شارة رئاسة الأركان / القوات المسلحة */}
      <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-r from-slate-900 via-amber-950/20 to-slate-950 p-4 shadow-xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <MilitaryInsigniaBadge country={country} className="h-16 w-16" />
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="m-0 text-base font-black text-white">
                  {isAr ? 'الشارات والأوسمة العسكرية الرسمية الموثقة' : 'Official Military Insignia & Heraldry Registry'}
                </h3>
                <span className="rounded bg-amber-500/20 border border-amber-500/40 px-2 py-0.5 text-[10px] font-mono font-bold text-amber-300">
                  {isAr ? 'المصدر: موسوعة ويكيبيديا ومستودع كومنز' : 'SOURCE: WIKIPEDIA & COMMONS'}
                </span>
              </div>
              <p className="m-0 mt-1 text-xs text-slate-300">
                {isAr
                  ? `شارات وأعلام أفرع القوات المسلحة لـ ${country?.name || insignia?.nameAr}: سلاح الجو، القوات البرية، الأسطول البحري، والدفاع الجوي مأخوذة مباشرة من صفحات ويكيبيديا.`
                  : `Official roundels, fin flashes, and service branch emblems for ${country?.name || insignia?.nameEn} sourced from Wikipedia.`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap shrink-0">
            {insignia?.wikipediaUrl && (
              <a
                href={insignia.wikipediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900/90 px-3 py-1.5 text-xs font-bold text-sky-400 hover:border-sky-500 hover:text-white transition"
              >
                <span>{isAr ? 'مقالة القوات المسلحة (ويكيبيديا)' : 'Armed Forces (Wikipedia)'}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
            {insignia?.nationalEmblemUrl && (
              <a
                href={insignia.nationalEmblemUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs text-amber-400 hover:border-amber-500 transition"
              >
                <span>{isAr ? 'تحميل الشعار الأصلي' : 'View Full Vector'}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* بطاقات أفرع القوات المسلحة */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {/* 1. القوات الجوية */}
        {branches.airForce && (
          <div className="rounded-xl border border-sky-500/30 bg-slate-950/70 p-3.5 space-y-2 hover:border-sky-500/60 transition flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2">
                <span className="flex items-center gap-2 text-xs font-bold text-sky-300">
                  <Plane className="h-4 w-4 text-sky-400" />
                  <span>{isAr ? 'شارة القوات الجوية (Roundel)' : 'Air Force Roundel'}</span>
                </span>
                <span className="font-mono text-[10px] text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/30">
                  {branches.airForce.aircraftPrefix || 'AIR'}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-16 w-16 shrink-0 rounded-xl bg-slate-900 p-1 border border-slate-800 grid place-items-center">
                  <img
                    src={branches.airForce.roundelUrl || `https://flagcdn.com/${country?.id}.svg`}
                    alt="Roundel"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      if (branches.airForce.fallbackRoundelUrl && e.currentTarget.src !== branches.airForce.fallbackRoundelUrl) {
                        e.currentTarget.src = branches.airForce.fallbackRoundelUrl;
                      } else {
                        e.currentTarget.src = `https://flagcdn.com/${country?.id}.svg`;
                      }
                    }}
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="m-0 text-xs font-black text-white truncate">
                    {isAr ? branches.airForce.nameAr : branches.airForce.nameEn}
                  </h4>
                  {branches.airForce.headquarters && (
                    <span className="text-[11px] text-slate-400 block mt-0.5 truncate">
                      {branches.airForce.headquarters}
                    </span>
                  )}
                  {branches.airForce.mottoAr && (
                    <span className="text-[10px] italic text-amber-300/90 block mt-1">
                      "{isAr ? branches.airForce.mottoAr : (branches.airForce.mottoEn || branches.airForce.mottoAr)}"
                    </span>
                  )}
                </div>
              </div>
            </div>

            {branches.airForce.wikipediaUrl && (
              <a
                href={branches.airForce.wikipediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/90 px-2.5 py-1 text-[11px] font-bold text-sky-400 hover:border-sky-500 hover:text-white transition w-full"
              >
                <span>{isAr ? 'صفحة القوات الجوية على ويكيبيديا' : 'Wikipedia Air Force Article'}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        )}

        {/* 2. القوات البرية */}
        {(branches.landForces || branches.army || branches.groundForces || branches.groundForce) && (
          <div className="rounded-xl border border-emerald-500/30 bg-slate-950/70 p-3.5 space-y-2 hover:border-emerald-500/60 transition flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2">
                <span className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                  <Shield className="h-4 w-4 text-emerald-400" />
                  <span>{isAr ? 'شعار القوات البرية (Army)' : 'Land Forces Insignia'}</span>
                </span>
                <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  ARMY
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-16 w-16 shrink-0 rounded-xl bg-slate-900 p-1 border border-slate-800 grid place-items-center">
                  <img
                    src={
                      branches.landForces?.emblemUrl ||
                      branches.army?.emblemUrl ||
                      branches.groundForces?.emblemUrl ||
                      insignia?.nationalEmblemUrl ||
                      `https://flagcdn.com/${country?.id}.svg`
                    }
                    alt="Army Emblem"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      if (branches.landForces?.fallbackEmblemUrl && e.currentTarget.src !== branches.landForces.fallbackEmblemUrl) {
                        e.currentTarget.src = branches.landForces.fallbackEmblemUrl;
                      } else {
                        e.currentTarget.src = getEmblemUrl(country?.id);
                      }
                    }}
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="m-0 text-xs font-black text-white truncate">
                    {isAr
                      ? (branches.landForces?.nameAr || branches.army?.nameAr || branches.groundForces?.nameAr || 'القوات البرية')
                      : (branches.landForces?.nameEn || branches.army?.nameEn || branches.groundForces?.nameEn || 'Land Forces')}
                  </h4>
                  {(branches.landForces?.mottoAr || branches.army?.mottoAr) && (
                    <span className="text-[10px] italic text-amber-300/90 block mt-1">
                      "{isAr ? (branches.landForces?.mottoAr || branches.army?.mottoAr) : (branches.landForces?.mottoEn || branches.army?.mottoEn)}"
                    </span>
                  )}
                  {branches.landForces?.headquarters && (
                    <span className="text-[11px] text-slate-400 block mt-0.5 truncate">
                      {branches.landForces.headquarters}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {(branches.landForces?.wikipediaUrl || branches.army?.wikipediaUrl) && (
              <a
                href={branches.landForces?.wikipediaUrl || branches.army?.wikipediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/90 px-2.5 py-1 text-[11px] font-bold text-emerald-400 hover:border-emerald-500 hover:text-white transition w-full"
              >
                <span>{isAr ? 'صفحة القوات البرية على ويكيبيديا' : 'Wikipedia Army Article'}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        )}

        {/* 3. القوات البحرية */}
        {(branches.navy || branches.maritimeForce) && (
          <div className="rounded-xl border border-blue-500/30 bg-slate-950/70 p-3.5 space-y-2 hover:border-blue-500/60 transition flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2">
                <span className="flex items-center gap-2 text-xs font-bold text-blue-300">
                  <Anchor className="h-4 w-4 text-blue-400" />
                  <span>{isAr ? 'الراية البحرية والأسطول (Navy)' : 'Naval Ensign & Navy'}</span>
                </span>
                <span className="font-mono text-[10px] text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30">
                  NAVY
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-16 w-16 shrink-0 rounded-xl bg-slate-900 p-1 border border-slate-800 grid place-items-center">
                  <img
                    src={
                      branches.navy?.emblemUrl ||
                      branches.navy?.ensignUrl ||
                      branches.maritimeForce?.ensignUrl ||
                      `https://flagcdn.com/${country?.id}.svg`
                    }
                    alt="Navy Ensign"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      if (branches.navy?.fallbackEmblemUrl && e.currentTarget.src !== branches.navy.fallbackEmblemUrl) {
                        e.currentTarget.src = branches.navy.fallbackEmblemUrl;
                      } else {
                        e.currentTarget.src = `https://flagcdn.com/${country?.id}.svg`;
                      }
                    }}
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="m-0 text-xs font-black text-white truncate">
                    {isAr ? (branches.navy?.nameAr || branches.maritimeForce?.nameAr) : (branches.navy?.nameEn || branches.maritimeForce?.nameEn)}
                  </h4>
                  {(branches.navy?.fleets || []).length > 0 && (
                    <span className="text-[10px] text-slate-400 block mt-0.5 truncate">
                      {branches.navy.fleets[0]}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {branches.navy?.wikipediaUrl && (
              <a
                href={branches.navy.wikipediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/90 px-2.5 py-1 text-[11px] font-bold text-blue-400 hover:border-blue-500 hover:text-white transition w-full"
              >
                <span>{isAr ? 'صفحة القوات البحرية على ويكيبيديا' : 'Wikipedia Navy Article'}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        )}

        {/* 4. الحرس الوطني / الدفاع الجوي / الدرك / القوات الخاصة */}
        {(branches.airDefense || branches.nationalGuard || branches.strategicMissile || branches.specialForces || branches.gendarmerie || branches.royalGuard) && (
          <div className="rounded-xl border border-purple-500/30 bg-slate-950/70 p-3.5 space-y-2 hover:border-purple-500/60 transition flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2">
                <span className="flex items-center gap-2 text-xs font-bold text-purple-300">
                  <Award className="h-4 w-4 text-purple-400" />
                  <span>{isAr ? 'القيادات الاستراتيجية والحرس' : 'Special & Strategic Commands'}</span>
                </span>
                <span className="font-mono text-[10px] text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
                  GUARD
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-16 w-16 shrink-0 rounded-xl bg-slate-900 p-1 border border-slate-800 grid place-items-center">
                  <img
                    src={
                      branches.gendarmerie?.emblemUrl ||
                      branches.royalGuard?.emblemUrl ||
                      branches.airDefense?.emblemUrl ||
                      branches.strategicMissile?.emblemUrl ||
                      branches.nationalGuard?.emblemUrl ||
                      branches.specialForces?.emblemUrl ||
                      insignia?.nationalEmblemUrl
                    }
                    alt="Special Command"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = getEmblemUrl(country?.id);
                    }}
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="m-0 text-xs font-black text-white truncate">
                    {isAr
                      ? (branches.gendarmerie?.nameAr || branches.royalGuard?.nameAr || branches.airDefense?.nameAr || branches.strategicMissile?.nameAr || branches.nationalGuard?.nameAr || branches.specialForces?.nameAr)
                      : (branches.gendarmerie?.nameEn || branches.royalGuard?.nameEn || branches.airDefense?.nameEn || branches.strategicMissile?.nameEn || branches.nationalGuard?.nameEn || branches.specialForces?.nameEn)}
                  </h4>
                  <span className="text-[10px] text-purple-300 font-semibold block mt-1">
                    {isAr ? 'العمليات الخاصة وحماية السيادة' : 'Special Operations & Sovereign Security'}
                  </span>
                </div>
              </div>
            </div>

            {(branches.gendarmerie?.wikipediaUrl || branches.royalGuard?.wikipediaUrl || branches.airDefense?.wikipediaUrl || branches.nationalGuard?.wikipediaUrl) && (
              <a
                href={branches.gendarmerie?.wikipediaUrl || branches.royalGuard?.wikipediaUrl || branches.airDefense?.wikipediaUrl || branches.nationalGuard?.wikipediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/90 px-2.5 py-1 text-[11px] font-bold text-purple-400 hover:border-purple-500 hover:text-white transition w-full"
              >
                <span>{isAr ? 'المقالة الرسمية على ويكيبيديا' : 'Wikipedia Special Article'}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
