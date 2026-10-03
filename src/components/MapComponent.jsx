import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet marker icon issue in Vite
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function MapComponent({ data, lang, onSelectCountry }) {
  const isAr = lang === 'ar';

  return (
    <div className="w-full h-[650px] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative z-0">
      <MapContainer center={[30, 20]} zoom={3} scrollWheelZoom={true} className="w-full h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.countries.map(country => (
          <Marker
            key={country.id}
            position={country.coordinates}
            eventHandlers={{
              click: () => onSelectCountry(country),
            }}
          >
            <Popup>
              <div className="text-right p-1" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{country.flag}</span>
                  <strong className="text-base text-slate-900">{country.name}</strong>
                </div>
                <p className="text-xs text-slate-700 m-0 mb-1"><strong>{isAr ? 'العاصمة:' : 'Capital:'}</strong> {country.capital}</p>
                <p className="text-xs text-slate-700 m-0 mb-1"><strong>{isAr ? 'الرئيس:' : 'Leader:'}</strong> {country.leader}</p>
                <p className="text-xs text-slate-700 m-0 mb-2"><strong>{isAr ? 'ميزانية الجيش:' : 'Military Budget:'}</strong> {country.militaryBudget}</p>
                <button
                  onClick={() => onSelectCountry(country)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-2 rounded font-bold transition"
                >
                  {isAr ? 'فتح الملف الجيوسياسي الكامل' : 'Open Full Geopolitical Profile'}
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
