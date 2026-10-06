import { useState } from 'react';
import { getFlagUrl, getEmblemUrl } from '../utils/countrySymbols';

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
 */
export function MilitaryInsigniaBadge({ country, className = 'h-12 w-12', showTitle = false }) {
  const cid = (country?.id || '').toLowerCase();

  // SVG مخصص وعالي الدقة لشارات الطيران وسلاح الجو
  let roundelSvg = null;

  if (cid === 'sa') {
    // شارة القوات الجوية الملكية السعودية
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#006c35" stroke="#ffffff" strokeWidth="3" />
        <circle cx="50" cy="50" r="34" fill="#ffffff" />
        <circle cx="50" cy="50" r="22" fill="#006c35" />
        {/* نخلة وسيفان رمز المملكة */}
        <path d="M50 35 v18 M44 48 l12 -6 M44 42 l12 6" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="50" cy="50" r="5" fill="#f59e0b" />
      </svg>
    );
  } else if (cid === 'eg') {
    // شارة القوات الجوية المصرية (ثلاث دوائر متحدة المركز مع النسر الذهبي)
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#ce1126" stroke="#1e293b" strokeWidth="1" />
        <circle cx="50" cy="50" r="32" fill="#ffffff" />
        <circle cx="50" cy="50" r="16" fill="#000000" />
        {/* نسر صلاح الدين الذهبي */}
        <polygon points="50,38 53,46 61,46 55,51 57,59 50,54 43,59 45,51 39,46 47,46" fill="#eab308" />
      </svg>
    );
  } else if (cid === 'us') {
    // شارة النجمة والأجنحة للقوات الجوية الأمريكية
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        {/* أجنحة الشارة */}
        <rect x="5" y="42" width="90" height="16" rx="2" fill="#ffffff" stroke="#002868" strokeWidth="2" />
        <rect x="5" y="47" width="90" height="6" fill="#bf0a30" />
        {/* الدائرة الزرقاء والنجمة */}
        <circle cx="50" cy="50" r="34" fill="#002868" stroke="#ffffff" strokeWidth="3" />
        <polygon points="50,22 58,38 75,38 61,49 67,65 50,55 33,65 39,49 25,38 42,38" fill="#ffffff" />
      </svg>
    );
  } else if (cid === 'ru') {
    // النجمة الحمراء لسلاح الجو الروسي
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <polygon points="50,6 63,35 95,35 69,54 79,84 50,66 21,84 31,54 5,35 37,35" fill="#d52b1e" stroke="#0039a6" strokeWidth="5" />
        <polygon points="50,14 60,37 86,37 65,52 73,76 50,62 27,76 35,52 14,37 40,37" fill="#d52b1e" stroke="#ffffff" strokeWidth="3" />
      </svg>
    );
  } else if (cid === 'cn') {
    // شارة جيش التحرير الشعبي الصيني (نجمة حمراء بأطراف ذهبية ورمز 8-1)
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <polygon points="50,8 62,36 93,36 68,54 77,82 50,65 23,82 32,54 7,36 38,36" fill="#de2910" stroke="#ffde00" strokeWidth="4" />
        <circle cx="50" cy="50" r="14" fill="#ffde00" opacity="0.3" />
        <text x="50" y="55" fontSize="13" fontWeight="900" textAnchor="middle" fill="#ffde00">八一</text>
      </svg>
    );
  } else if (cid === 'gb' || cid === 'uk') {
    // Royal Air Force (RAF) Roundel
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#012169" />
        <circle cx="50" cy="50" r="32" fill="#ffffff" />
        <circle cx="50" cy="50" r="16" fill="#c8102e" />
      </svg>
    );
  } else if (cid === 'fr') {
    // French Air Force Cocarde
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#ed2939" />
        <circle cx="50" cy="50" r="32" fill="#ffffff" />
        <circle cx="50" cy="50" r="16" fill="#002395" />
      </svg>
    );
  } else if (cid === 'de') {
    // Bundeswehr Iron Cross (Balkenkreuz)
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
        <path d="M40,15 L60,15 L56,40 L85,36 L85,64 L56,60 L60,85 L40,85 L44,60 L15,64 L15,36 L44,40 Z" fill="#ffffff" stroke="#0f172a" strokeWidth="3" />
        <path d="M42,20 L58,20 L54,42 L80,38 L80,62 L54,58 L58,80 L42,80 L46,58 L20,62 L20,38 L46,42 Z" fill="#0f172a" />
      </svg>
    );
  } else if (cid === 'tr') {
    // Turkish Air Force Roundel
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#e30a17" />
        <circle cx="50" cy="50" r="32" fill="#ffffff" />
        <circle cx="50" cy="50" r="16" fill="#e30a17" />
      </svg>
    );
  } else if (cid === 'ae') {
    // UAE Air Force Roundel
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#ff0000" />
        <circle cx="50" cy="50" r="36" fill="#00732f" />
        <circle cx="50" cy="50" r="24" fill="#ffffff" />
        <circle cx="50" cy="50" r="12" fill="#000000" />
      </svg>
    );
  } else if (cid === 'il') {
    // Israeli Air Force Roundel (Blue Magen David)
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#0038b8" strokeWidth="4" />
        <circle cx="50" cy="50" r="40" fill="#ffffff" />
        <polygon points="50,18 78,66 22,66" fill="none" stroke="#0038b8" strokeWidth="5" strokeLinejoin="round" />
        <polygon points="50,78 78,30 22,30" fill="none" stroke="#0038b8" strokeWidth="5" strokeLinejoin="round" />
      </svg>
    );
  } else if (cid === 'ir') {
    // Islamic Republic of Iran Air Force Roundel
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#da0000" />
        <circle cx="50" cy="50" r="32" fill="#ffffff" />
        <circle cx="50" cy="50" r="16" fill="#239f40" />
        {/* شارة السيف والشعار في المركز */}
        <circle cx="50" cy="50" r="5" fill="#ffffff" />
      </svg>
    );
  } else if (cid === 'in') {
    // Indian Air Force Roundel (Tricolour Chakra)
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#ff9933" />
        <circle cx="50" cy="50" r="32" fill="#ffffff" />
        <circle cx="50" cy="50" r="16" fill="#138808" />
        <circle cx="50" cy="50" r="4" fill="#000080" />
      </svg>
    );
  } else if (cid === 'jp') {
    // Japan Air Self-Defense Force Hinomaru
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#bc002d" strokeWidth="3" />
        <circle cx="50" cy="50" r="34" fill="#bc002d" />
      </svg>
    );
  } else if (cid === 'dz') {
    // شارة القوات الجوية الجزائرية (الهلال والنجمة باللون الأحمر)
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
    // شارة القوات الجوية الملكية المغربية (نجمة خماسية خضراء على قرص أحمر بتاج ذهبي)
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#c1272d" stroke="#f59e0b" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="40" fill="#c1272d" />
        <polygon points="50,22 58,46 84,46 63,60 71,84 50,70 29,84 37,60 16,46 42,46" fill="none" stroke="#006233" strokeWidth="4.5" strokeLinejoin="round" />
        {/* التاج الملكي الصغير */}
        <path d="M42 20 L50 14 L58 20 L55 24 L45 24 Z" fill="#f59e0b" />
      </svg>
    );
  } else if (cid === 'ua') {
    // Ukrainian Air Force Roundel (Yellow-Blue with Trident)
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#0057b7" stroke="#ffd700" strokeWidth="3" />
        <circle cx="50" cy="50" r="32" fill="#ffd700" />
        {/* شعار الترايزوب الأوكراني */}
        <path d="M50 30 v25 M42 36 v12 c0 4 8 4 8 0 M58 36 v12 c0 4 -8 4 -8 0" stroke="#0057b7" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      </svg>
    );
  } else if (cid === 'br') {
    // Brazilian Air Force Star Roundel
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="48" fill="#009b3a" stroke="#fedf01" strokeWidth="2" />
        <polygon points="50,15 85,50 50,85 15,50" fill="#fedf01" />
        <circle cx="50" cy="50" r="22" fill="#002776" />
        <polygon points="50,34 54,44 65,44 56,51 60,61 50,55 40,61 44,51 35,44 46,44" fill="#ffffff" />
      </svg>
    );
  } else {
    // الشارة العسكرية التكتيكية العامة المستوحاة من راية وشعار الدولة
    roundelSvg = (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        {/* درع عسكري محاط بأجنحة */}
        <circle cx="50" cy="50" r="47" fill="#090d16" stroke="#f59e0b" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="40" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 2" />
        {/* أجنحة الطيران العسكري */}
        <path d="M12 50 C24 38, 38 46, 50 50 C62 46, 76 38, 88 50 C76 56, 62 52, 50 50 C38 52, 24 56, 12 50 Z" fill="#38bdf8" opacity="0.4" />
        {/* نجمة عسكرية ذهبية */}
        <polygon points="50,26 56,38 70,38 59,47 63,60 50,52 37,60 41,47 30,38 44,38" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
      </svg>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div
        className={`relative grid place-items-center rounded-2xl border border-sky-500/30 bg-gradient-to-b from-sky-500/10 via-slate-900 to-slate-950 p-1.5 shadow-lg backdrop-blur ${className}`}
        title={`شارة القوات العسكرية لـ ${country?.name || ''}`}
      >
        {roundelSvg}
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
