import { useEffect, useMemo, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Layers, Maximize2 } from 'lucide-react';

const TILE_LAYERS = {
  dark: {
    label: 'داكن',
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
  },
  light: {
    label: 'قياسي',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
};

const WORLD_CENTER = [22, 12];

function createFlagIcon(flag) {
  return L.divIcon({
    className: '',
    html: `<span class="nx-marker">${flag}</span>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -16],
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
  const [baseLayer, setBaseLayer] = useState('dark');
  const icons = useMemo(
    () => Object.fromEntries(data.countries.map((c) => [c.id, createFlagIcon(c.flag)])),
    [data.countries],
  );

  return (
    <div className="nx-panel relative overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 px-4 py-2.5">
        <div className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-950/60 p-1">
          {Object.entries(TILE_LAYERS).map(([key, layer]) => (
            <button
              key={key}
              onClick={() => setBaseLayer(key)}
              className={`rounded-md px-3 py-1 text-xs font-semibold transition ${
                baseLayer === key
                  ? 'bg-sky-600 text-white'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {isAr ? layer.label : key === 'dark' ? 'Dark' : 'Street'}
            </button>
          ))}
        </div>

        <button
          onClick={onClearSelection}
          className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-sky-500/40 hover:text-white"
        >
          <Maximize2 className="h-3.5 w-3.5" />
          {isAr ? 'إغلاق الملف' : 'Close profile'}
        </button>
      </div>

      {/* Map */}
      <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[600px]">
        <MapContainer
          center={WORLD_CENTER}
          zoom={2}
          minZoom={2}
          maxZoom={10}
          scrollWheelZoom
          worldCopyJump
          className="h-full w-full"
        >
          <TileLayer
            key={baseLayer}
            url={TILE_LAYERS[baseLayer].url}
            attribution={TILE_LAYERS[baseLayer].attribution}
          />

          {data.countries.map((country) => (
            <Marker
              key={country.id}
              position={country.coordinates}
              icon={icons[country.id]}
              eventHandlers={{ click: () => onSelectCountry(country) }}
            >
              <Popup>
                <div className="min-w-[190px]" dir={isAr ? 'rtl' : 'ltr'}>
                  <div className="mb-2 flex items-center gap-2 border-b border-slate-700/70 pb-2">
                    <span className="text-2xl leading-none">{country.flag}</span>
                    <div className="leading-tight">
                      <p className="m-0 text-sm font-bold text-white">{country.name}</p>
                      <p className="m-0 text-[11px] text-slate-400">
                        {isAr ? 'العاصمة' : 'Capital'}: {country.capital}
                      </p>
                    </div>
                  </div>

                  <dl className="m-0 space-y-1 text-[11px] text-slate-300">
                    <div className="flex justify-between gap-3">
                      <dt className="text-slate-500">{isAr ? 'القيادة' : 'Leader'}</dt>
                      <dd className="m-0 max-w-[140px] truncate text-end">{country.leader}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-slate-500">{isAr ? 'ميزانية الجيش' : 'Defense budget'}</dt>
                      <dd className="m-0 font-semibold text-rose-300">{country.militaryBudget}</dd>
                    </div>
                  </dl>

                  <button
                    onClick={() => onSelectCountry(country)}
                    className="mt-3 w-full rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-sky-500"
                  >
                    {isAr ? 'فتح الملف الكامل' : 'Open full profile'}
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}

          <MapFocus country={focusCountry} />
        </MapContainer>

        {/* Legend */}
        <div className="pointer-events-none absolute bottom-3 start-3 z-[500] flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/85 px-3 py-1.5 text-[11px] text-slate-400 backdrop-blur">
          <Layers className="h-3.5 w-3.5 text-sky-400" />
          <span className="nx-marker !h-4 !w-4 !text-[10px]">●</span>
          {isAr ? `${data.countries.length} دولة مرساة على الخريطة` : `${data.countries.length} mapped nations`}
        </div>
      </div>
    </div>
  );
}
