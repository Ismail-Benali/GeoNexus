import { useEffect, useMemo, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Layers, Maximize2, Shield, Landmark, Globe } from 'lucide-react';
import { getFlagUrl, getEmblemUrl } from '../utils/countrySymbols';

const TILE_LAYERS = {
  osm: {
    labelAr: 'OpenStreetMap (الافتراضية)',
    labelEn: 'OpenStreetMap (Standard)',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    maxZoom: 19,
  },
  dark: {
    labelAr: 'OSM داكن تكتيكي',
    labelEn: 'Tactical Dark (OSM)',
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    maxZoom: 19,
  },
  topo: {
    labelAr: 'OSM تضاريس',
    labelEn: 'OSM Topo',
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    maxZoom: 17,
  },
};

const WORLD_CENTER = [22, 12];

function createPinIcon(country) {
  const flagUrl = getFlagUrl(country.id);
  return L.divIcon({
    className: 'nx-map-marker-container',
    html: `
      <div class="nx-map-pin" title="${country.name}">
        <span class="nx-map-pin-ring"></span>
        <div class="nx-map-pin-content">
          <img src="${flagUrl}" alt="${country.name}" class="nx-map-pin-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
          <span class="nx-fallback-emoji" style="display:none;">${country.flag}</span>
        </div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -18],
  });
}

function MapFocus({ country }) {
  const map = useMap();
  useEffect(() => {
    if (!country?.coordinates) return;
    map.flyTo(country.coordinates, Math.max(map.getZoom(), 4), { duration: 1.1 });
  }, [country, map]);
  return null;
}

export default function MapComponent({ data, lang, onSelectCountry, onClearSelection, focusCountry }) {
  const isAr = lang === 'ar';
  // OpenStreetMap هي الخريطة الافتراضية بدون أي شعار أو علامة مائية
  const [baseLayer, setBaseLayer] = useState('osm');

  const icons = useMemo(
    () => Object.fromEntries(data.countries.map((c) => [c.id, createPinIcon(c)])),
    [data.countries],
  );

  return (
    <div className="nx-panel relative overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 px-4 py-2.5">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-400">
            <Globe className="h-3.5 w-3.5 text-sky-400" />
            {isAr ? 'الطبقة:' : 'Layer:'}
          </span>
          <div className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-950/70 p-0.5">
            {Object.entries(TILE_LAYERS).map(([key, layer]) => (
              <button
                key={key}
                onClick={() => setBaseLayer(key)}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold transition ${
                  baseLayer === key
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {isAr ? layer.labelAr : layer.labelEn}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={onClearSelection}
          className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-sky-500/40 hover:text-white"
        >
          <Maximize2 className="h-3.5 w-3.5" />
          {isAr ? 'إعادة ضبط الخريطة' : 'Reset view'}
        </button>
      </div>

      {/* Map */}
      <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[620px]">
        <MapContainer
          center={WORLD_CENTER}
          zoom={2}
          minZoom={2}
          maxZoom={18}
          scrollWheelZoom
          worldCopyJump
          attributionControl={false}
          className="h-full w-full"
        >
          <TileLayer
            key={baseLayer}
            url={TILE_LAYERS[baseLayer].url}
            maxZoom={TILE_LAYERS[baseLayer].maxZoom}
          />

          {data.countries.map((country) => {
            const flagUrl = getFlagUrl(country.id);
            const emblemUrl = getEmblemUrl(country.id);

            return (
              <Marker
                key={country.id}
                position={country.coordinates}
                icon={icons[country.id]}
                eventHandlers={{ click: () => onSelectCountry(country) }}
              >
                <Popup className="nx-custom-popup">
                  <div className="w-[260px] p-2" dir={isAr ? 'rtl' : 'ltr'}>
                    {/* رأس النافذة: الشعار والراية والاسم */}
                    <div className="mb-2.5 flex items-start justify-between gap-2.5 border-b border-slate-800 pb-2.5">
                      <div className="flex items-center gap-2.5 min-w-0">
                        {/* شعار الدولة الرسمي */}
                        <div
                          className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-amber-500/30 bg-gradient-to-b from-amber-500/10 via-slate-900 to-slate-950 p-1 shadow"
                          title={isAr ? `شعار ${country.name}` : `Coat of arms of ${country.name}`}
                        >
                          <img
                            src={emblemUrl}
                            alt={isAr ? `شعار ${country.name}` : `Coat of arms of ${country.name}`}
                            className="h-full w-full object-contain filter drop-shadow"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const fallback = e.currentTarget.nextElementSibling;
                              if (fallback) fallback.style.display = 'block';
                            }}
                          />
                          <span style={{ display: 'none' }} className="text-xl">
                            {country.flag}
                          </span>
                        </div>

                        {/* اسم الدولة والعاصمة */}
                        <div className="min-w-0 leading-tight">
                          <h4 className="m-0 truncate text-sm font-black text-white">
                            {country.name}
                          </h4>
                          <p className="m-0 mt-0.5 truncate text-[11px] text-slate-400">
                            {isAr ? 'العاصمة:' : 'Capital:'}{' '}
                            <span className="font-semibold text-slate-200">{country.capital}</span>
                          </p>
                          <span className="mt-1 inline-block text-[10px] text-sky-400">
                            {country.regionLabel}
                          </span>
                        </div>
                      </div>

                      {/* راية الدولة الوطنية */}
                      <div className="flex flex-col items-center gap-0.5 shrink-0">
                        <div className="h-6 w-9 overflow-hidden rounded border border-slate-700 shadow-sm bg-slate-900">
                          <img
                            src={flagUrl}
                            alt={isAr ? `راية ${country.name}` : `Flag of ${country.name}`}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const fallback = e.currentTarget.nextElementSibling;
                              if (fallback) fallback.style.display = 'block';
                            }}
                          />
                          <span style={{ display: 'none' }} className="text-base text-center leading-6">
                            {country.flag}
                          </span>
                        </div>
                        <span className="text-[9px] font-bold text-slate-500">
                          {isAr ? 'الراية' : 'Flag'}
                        </span>
                      </div>
                    </div>

                    {/* بيانات سريعة */}
                    <dl className="m-0 space-y-1.5 text-[11px] text-slate-300">
                      <div className="flex justify-between gap-2">
                        <dt className="flex items-center gap-1 text-slate-500">
                          <Landmark className="h-3 w-3" />
                          {isAr ? 'القيادة:' : 'Leader:'}
                        </dt>
                        <dd className="m-0 max-w-[150px] truncate text-end font-semibold text-slate-200">
                          {country.leader}
                        </dd>
                      </div>

                      <div className="flex justify-between gap-2">
                        <dt className="flex items-center gap-1 text-slate-500">
                          <Shield className="h-3 w-3" />
                          {isAr ? 'ميزانية الجيش:' : 'Defense:'}
                        </dt>
                        <dd className="m-0 font-bold text-rose-300">
                          {country.militaryBudget}
                        </dd>
                      </div>

                      <div className="flex justify-between gap-2">
                        <dt className="text-slate-500">
                          {isAr ? 'نظام الحكم:' : 'Regime:'}
                        </dt>
                        <dd className="m-0 truncate text-end text-slate-300">
                          {country.regime}
                        </dd>
                      </div>
                    </dl>

                    {/* زر فتح الملف التفصيلي */}
                    <button
                      onClick={() => onSelectCountry(country)}
                      className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-bold text-white shadow-sm transition hover:bg-sky-500 active:scale-[0.98]"
                    >
                      {isAr ? 'فتح الملف والشعار الكامل' : 'Open dossier & insignia'}
                    </button>
                  </div>
                </Popup>
              </Marker>
            );
          })}

          <MapFocus country={focusCountry} />
        </MapContainer>

        {/* شارة الخريطة النظيفة بدون علامة مائية */}
        <div className="pointer-events-none absolute bottom-3 start-3 z-[500] flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/90 px-3 py-1.5 text-[11px] text-slate-300 backdrop-blur shadow-md">
          <Layers className="h-3.5 w-3.5 text-sky-400" />
          <span>
            {isAr
              ? `OpenStreetMap (خالية من العلامات) · ${data.countries.length} دولة مع الشعار والراية`
              : `OpenStreetMap (Unbranded) · ${data.countries.length} nations with flag & emblem`}
          </span>
        </div>
      </div>
    </div>
  );
}
