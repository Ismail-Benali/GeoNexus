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
