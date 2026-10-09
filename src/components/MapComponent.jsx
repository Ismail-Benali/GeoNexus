import { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  Layers,
  Maximize2,
  Minimize2,
  Globe,
  Crown,
  BarChart2,
  BookOpen,
  Flame,
  Shield,
  Navigation,
  Crosshair,
  Compass,
  Clock,
  Radar,
  Radio,
  ExternalLink,
  ShieldAlert,
  Search,
  Sparkles,
  Anchor,
  Zap,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Target,
} from 'lucide-react';
import { getFlagUrl, getEmblemUrl } from '../utils/countrySymbols';
import { useLeadership } from '../context/useLeadership';
import { HOTSPOTS_DATA, HOTSPOT_CATEGORIES } from '../data/hotspotsData';
import {
  MILITARY_BASES_DATA,
  CHOKEPOINTS_DATA,
  ENERGY_AND_CABLE_CORRIDORS,
} from '../data/tacticalMapData';
import { translateText } from '../utils/translator';
import { getEraForYear } from '../data/historicalTimelineEras.js';
import { getTimelineEventsForYear, getDefconForYear } from '../data/timelineYearEventsDB.js';
import { BILATERAL_TREATIES_DB } from '../data/bilateralTreatiesAndAlliancesDB.js';
import CountryTrendChart from './CountryTrendChart';
import CountrySidePanel from './CountrySidePanel';

// طبقات الخرائط التكتيكية عالية الدقة ومفتوحة المصدر (مع اعتماد OpenStreetMap كأساس رئيسي)
const TILE_LAYERS = {
  osm: {
    labelAr: 'أوبن ستريت (OpenStreetMap)',
    labelEn: 'OpenStreetMap Standard',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    maxZoom: 19,
    icon: Globe,
  },
  osm_hot: {
    labelAr: 'أوبن ستريت التكتيكية',
    labelEn: 'OSM Humanitarian',
    url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    maxZoom: 19,
    icon: Navigation,
  },
  dark: {
    labelAr: 'تكتيكي داكن',
    labelEn: 'Tactical Dark',
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    maxZoom: 19,
    icon: Shield,
  },
  satellite: {
    labelAr: 'قمر صناعي فضاء',
    labelEn: 'Satellite Earth',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    maxZoom: 18,
    icon: Layers,
  },
};

// المسارح والدوائر الاستراتيجية الجيوسياسية العالمية مع أيقونات مفتوحة المصدر
const STRATEGIC_THEATERS = [
  { id: 'world', nameAr: 'العالم', nameEn: 'Global', center: [22, 12], zoom: 2, icon: Globe },
  { id: 'mideast', nameAr: 'الشرق الأوسط والخليج', nameEn: 'Middle East', center: [26, 45], zoom: 4.5, icon: Compass },
  { id: 'europe', nameAr: 'أوروبا وحلف الناتو', nameEn: 'Europe / NATO', center: [52, 20], zoom: 4.2, icon: Shield },
  { id: 'indopacific', nameAr: 'المحيطين الهندي والهادئ', nameEn: 'Indo-Pacific', center: [16, 108], zoom: 3.8, icon: Navigation },
  { id: 'africa', nameAr: 'أفريقيا والساحل', nameEn: 'Africa & Sahel', center: [8, 22], zoom: 3.8, icon: ShieldAlert },
  { id: 'americas', nameAr: 'الأمريكيتان', nameEn: 'Americas', center: [18, -75], zoom: 3.2, icon: Crosshair },
];

const WORLD_CENTER = [22, 12];

function createPinIcon(country, lang = 'ar') {
  const flagUrl = getFlagUrl(country.id);
  const countryName = translateText(country.name, lang);

  return L.divIcon({
    className: 'nx-map-marker-container',
    html: `
      <div class="nx-map-pin" title="${countryName}">
        <span class="nx-map-pin-ring"></span>
        <div class="nx-map-pin-content">
          <img src="${flagUrl}" alt="${countryName}" class="nx-map-pin-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
          <span class="nx-fallback-emoji" style="display:none;">${country.flag || '🌐'}</span>
        </div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -18],
  });
}

function createHotspotIcon(item, lang = 'ar') {
  const isAr = lang === 'ar';
  const isWar = item.category === 'war';
  const isAlliance = item.category === 'alliance';
  const isChokepoint = item.category === 'chokepoint';

  const pulseColor = isWar ? '#f43f5e' : isAlliance ? '#10b981' : isChokepoint ? '#f97316' : '#f59e0b';
  const title = isAr ? item.titleAr : item.titleEn;

  // SVG أيقونات مفتوحة المصدر عالية الدقة داخل الماركر
  let svgIcon = '';
  if (isWar) {
    svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`;
  } else if (isAlliance) {
    svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`;
  } else if (isChokepoint) {
    svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>`;
  } else {
    svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
  }

  return L.divIcon({
    className: 'nx-hotspot-pin',
    html: `
      <div style="position: relative; width: 36px; height: 36px; display: grid; place-items: center;" title="${title}">
        <span style="position: absolute; width: 100%; height: 100%; border-radius: 50%; background-color: ${pulseColor}; opacity: 0.5; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></span>
        <div style="position: relative; width: 30px; height: 30px; border-radius: 50%; background-color: #020617; border: 2px solid ${pulseColor}; display: grid; place-items: center; box-shadow: 0 0 14px ${pulseColor};">
          ${svgIcon}
        </div>
      </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -20],
  });
}

function createBaseIcon(base, lang = 'ar') {
  const isAr = lang === 'ar';
  const title = isAr ? base.nameAr : base.nameEn;
  const isAir = base.type === 'air';
  const isNaval = base.type === 'naval';
  const color = isAir ? '#38bdf8' : isNaval ? '#6366f1' : '#a855f7';

  // SVG أيقونة تكتيكية للقاعدة
  let iconSvg = '';
  if (isAir) {
    // طائرة مقاتلة / جناح جوي
    iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/></svg>`;
  } else if (isNaval) {
    // مرساة بحرية / أسطول
    iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>`;
  } else {
    // قاعدة عسكرية مشتركة
    iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  }

  return L.divIcon({
    className: 'nx-tactical-base-pin',
    html: `
      <div style="position: relative; width: 34px; height: 34px; display: grid; place-items: center;" title="${title}">
        <span style="position: absolute; width: 100%; height: 100%; border-radius: 8px; background-color: ${color}; opacity: 0.35; animation: pulse 2s infinite;"></span>
        <div style="position: relative; width: 28px; height: 28px; border-radius: 8px; background-color: #020617; border: 2px solid ${color}; display: grid; place-items: center; box-shadow: 0 0 12px ${color}80;">
          ${iconSvg}
        </div>
      </div>
    `,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -18],
  });
}

function createChokepointMarkerIcon(cp, lang = 'ar') {
  const isAr = lang === 'ar';
  const title = isAr ? cp.nameAr : cp.nameEn;
  const isHighRisk = cp.riskTone === 'rose';
  const color = isHighRisk ? '#f43f5e' : '#f59e0b';

  return L.divIcon({
    className: 'nx-chokepoint-pin',
    html: `
      <div style="position: relative; width: 36px; height: 36px; display: grid; place-items: center;" title="${title}">
        <span style="position: absolute; width: 100%; height: 100%; border-radius: 50%; background-color: ${color}; opacity: 0.45; animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;"></span>
        <div style="position: relative; width: 30px; height: 30px; border-radius: 50%; background-color: #020617; border: 2px solid ${color}; display: grid; place-items: center; box-shadow: 0 0 16px ${color};">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 20a6 6 0 0 0 12 0 6 6 0 0 0 10 0"/>
            <path d="M6 14l2-8h8l2 8"/>
            <path d="M12 3v3"/>
          </svg>
        </div>
      </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -20],
  });
}

function createCorridorIcon(item, lang = 'ar') {
  const isAr = lang === 'ar';
  const title = isAr ? item.nameAr : item.nameEn;
  const isCable = item.type === 'cable';
  const color = isCable ? '#06b6d4' : '#10b981';

  let iconSvg = isCable
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>`;

  return L.divIcon({
    className: 'nx-corridor-pin',
    html: `
      <div style="position: relative; width: 32px; height: 32px; display: grid; place-items: center;" title="${title}">
        <span style="position: absolute; width: 100%; height: 100%; border-radius: 50%; background-color: ${color}; opacity: 0.35; animation: pulse 2.2s infinite;"></span>
        <div style="position: relative; width: 26px; height: 26px; border-radius: 50%; background-color: #020617; border: 2px solid ${color}; display: grid; place-items: center; box-shadow: 0 0 12px ${color}80;">
          ${iconSvg}
        </div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -18],
  });
}

function createYearEventIcon(item, lang = 'ar') {
  const isAr = lang === 'ar';
  const category = item.category || 'crisis';
  const title = isAr ? item.titleAr : item.titleEn;

  const colorMap = {
    war: '#f43f5e',
    treaty: '#10b981',
    revolution: '#f97316',
    crisis: '#eab308',
    monetary: '#06b6d4',
    milestone: '#a855f7',
  };
  const color = colorMap[category] || '#f59e0b';

  let svgIcon = '';
  if (category === 'war') {
    svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 17.5 3 6V3h3l11.5 11.5"/><path d="m13 19 6 2 2-6-2-2-6 2"/><path d="M9.5 6.5 18 15"/></svg>`;
  } else if (category === 'treaty') {
    svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`;
  } else if (category === 'revolution') {
    svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`;
  } else if (category === 'monetary') {
    svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="m7 6 5 5"/></svg>`;
  } else if (category === 'milestone') {
    svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>`;
  } else {
    svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
  }

  return L.divIcon({
    className: 'nx-timeline-event-pin',
    html: `
      <div style="position: relative; width: 44px; height: 44px; display: grid; place-items: center;" title="${title} (${item.year})">
        <span style="position: absolute; width: 100%; height: 100%; border-radius: 50%; background-color: ${color}; opacity: 0.45; animation: ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;"></span>
        <div style="position: relative; width: 34px; height: 34px; border-radius: 50%; background-color: #020617; border: 2.5px solid ${color}; display: grid; place-items: center; box-shadow: 0 0 18px ${color}; z-index: 2;">
          ${svgIcon}
        </div>
        <span style="position: absolute; bottom: -8px; background-color: #020617; border: 1px solid ${color}; color: #ffffff; font-size: 9px; font-weight: 800; font-family: monospace; padding: 0 4px; border-radius: 4px; white-space: nowrap; box-shadow: 0 2px 4px rgba(0,0,0,0.8); z-index: 3;">
          ${item.year}
        </span>
      </div>
    `,
    iconSize: [44, 44],
    iconAnchor: [22, 22],
    popupAnchor: [0, -22],
  });
}

function createBilateralTreatyIcon(treaty, lang = 'ar') {
  const isAr = lang === 'ar';
  const title = isAr ? treaty.titleAr : treaty.titleEn;
  const color = '#f59e0b';

  return L.divIcon({
    className: 'nx-treaty-pin',
    html: `
      <div style="position: relative; display: flex; align-items: center; gap: 4px; background: rgba(2, 6, 23, 0.95); border: 1.5px solid ${color}; padding: 3px 7px; border-radius: 9999px; box-shadow: 0 0 16px rgba(245, 158, 11, 0.5); font-size: 11px; white-space: nowrap; cursor: pointer;" title="${title}">
        <span>${treaty.country1.flag}</span>
        <span style="color: ${color}; font-weight: 900; font-size: 10px;">⚔️</span>
        <span>${treaty.country2.flag}</span>
      </div>
    `,
    iconSize: [56, 24],
    iconAnchor: [28, 12],
    popupAnchor: [0, -14],
  });
}

// متحكم الانتقال السلس إلى المسارح والدول وبؤر أحداث المحاكاة
function MapFocus({ country, theater, targetCoords }) {
  const map = useMap();

  useEffect(() => {
    if (targetCoords) {
      map.flyTo(targetCoords, Math.max(map.getZoom(), 4.8), { duration: 1.3 });
    }
  }, [targetCoords, map]);

  useEffect(() => {
    if (country?.coordinates) {
      map.flyTo(country.coordinates, Math.max(map.getZoom(), 4.8), { duration: 1.2 });
    }
  }, [country, map]);

  useEffect(() => {
    if (theater?.center) {
      map.flyTo(theater.center, theater.zoom || 3, { duration: 1.4 });
    }
  }, [theater, map]);

  return null;
}

// مراقب إحداثيات الخريطة المباشر للوحة الـ HUD
function MapHudWatcher({ onUpdate }) {
  const map = useMap();

  useEffect(() => {
    const handleMove = () => {
      const center = map.getCenter();
      onUpdate({
        lat: center.lat.toFixed(2),
        lng: center.lng.toFixed(2),
        zoom: map.getZoom(),
      });
    };

    map.on('move', handleMove);
    handleMove();
    return () => map.off('move', handleMove);
  }, [map, onUpdate]);

  return null;
}

export default function MapComponent({
  data,
  lang,
  onSelectCountry,
  onClearSelection,
  focusCountry,
  selectedYear = 2026,
  onYearChange,
  onOpenComparison,
}) {
  const isAr = lang === 'ar';
  const { getLeader } = useLeadership();
  const mapContainerRef = useRef(null);

  // الطبقة الافتراضية المعتمدة هي أوبن ستريت (OpenStreetMap)
  const [baseLayer, setBaseLayer] = useState('osm');
  const [showHotspots, setShowHotspots] = useState(true);
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [showBases, setShowBases] = useState(true);
  const [showChokepoints, setShowChokepoints] = useState(true);
  const [showCorridors, setShowCorridors] = useState(true);
  const [showTimelineEvents, setShowTimelineEvents] = useState(true);
  const [showEraBlocs, setShowEraBlocs] = useState(true);
  const [showBilateralTreaties, setShowBilateralTreaties] = useState(true);
  const [autoTrackEpicenter, setAutoTrackEpicenter] = useState(true);
  const [targetFlyCoords, setTargetFlyCoords] = useState(null);
  const [isSimHudCollapsed, setIsSimHudCollapsed] = useState(false);
  const [isSimPlaying, setIsSimPlaying] = useState(false);
  const [heatIntensity, setHeatIntensity] = useState('high'); // 'standard' | 'high' | 'ultra'
  const [activeTheater, setActiveTheater] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [quickSearchQuery, setQuickSearchQuery] = useState('');

  const currentEra = useMemo(() => getEraForYear(selectedYear), [selectedYear]);
  const timelineEvents = useMemo(() => getTimelineEventsForYear(selectedYear), [selectedYear]);
  const defcon = useMemo(() => getDefconForYear(selectedYear), [selectedYear]);

  // تشغيل المحاكاة التلقائية المباشرة من لوحة الخريطة
  useEffect(() => {
    if (isSimPlaying && onYearChange) {
      const timer = setInterval(() => {
        onYearChange((prev) => (prev >= 2026 ? 1914 : prev + 1));
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isSimPlaying, onYearChange]);

  // تتبع بؤرة الحدث الميداني تلقائياً عند تغيير السنة
  const prevYearRef = useRef(selectedYear);
  useEffect(() => {
    if (prevYearRef.current !== selectedYear) {
      prevYearRef.current = selectedYear;
      if (autoTrackEpicenter && timelineEvents && timelineEvents.length > 0) {
        setTargetFlyCoords(timelineEvents[0].coordinates);
      }
    }
  }, [selectedYear, autoTrackEpicenter, timelineEvents]);

  // إحداثيات الـ HUD الحية
  const [hudCoords, setHudCoords] = useState({ lat: '22.00', lng: '12.00', zoom: 2 });

  // الدولة المحددة بالنقر على الماركر لعرض اللوحة الجانبية
  const [clickedCountry, setClickedCountry] = useState(null);
  const sidePanelCountry = clickedCountry ?? focusCountry ?? null;

  // الدولة المحددة لعرض مخطط Recharts للنمو السكاني والاقتصادي
  const [chartCountry, setChartCountry] = useState(null);

  const icons = useMemo(
    () => Object.fromEntries(data.countries.map((c) => [c.id, createPinIcon(c, lang)])),
    [data.countries, lang],
  );

  const hotspotIcons = useMemo(
    () => Object.fromEntries(HOTSPOTS_DATA.map((h) => [h.id, createHotspotIcon(h, lang)])),
    [lang],
  );

  const baseIcons = useMemo(
    () => Object.fromEntries(MILITARY_BASES_DATA.map((b) => [b.id, createBaseIcon(b, lang)])),
    [lang],
  );

  const chokepointMarkerIcons = useMemo(
    () => Object.fromEntries(CHOKEPOINTS_DATA.map((cp) => [cp.id, createChokepointMarkerIcon(cp, lang)])),
    [lang],
  );

  const corridorIcons = useMemo(
    () => Object.fromEntries(ENERGY_AND_CABLE_CORRIDORS.map((cor) => [cor.id, createCorridorIcon(cor, lang)])),
    [lang],
  );

  const yearEventIcons = useMemo(
    () => Object.fromEntries(timelineEvents.map((ev) => [ev.id, createYearEventIcon(ev, lang)])),
    [timelineEvents, lang],
  );

  const treatyIcons = useMemo(
    () => Object.fromEntries(BILATERAL_TREATIES_DB.map((t) => [t.id, createBilateralTreatyIcon(t, lang)])),
    [lang],
  );

  const handleMarkerClick = useCallback((country) => {
    setClickedCountry(country);
  }, []);

  const handleCloseSidePanel = useCallback(() => {
    setClickedCountry(null);
    if (focusCountry) {
      onClearSelection();
    }
  }, [focusCountry, onClearSelection]);

  const handleSelectTheater = (th) => {
    setActiveTheater(th);
  };

  const toggleFullscreen = () => {
    if (!mapContainerRef.current) return;
    if (!document.fullscreenElement) {
      mapContainerRef.current.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // قائمة الدول المفلترة للبحث السريع المباشر على الخريطة
  const quickFilteredCountries = useMemo(() => {
    const q = quickSearchQuery.trim().toLowerCase();
    if (!q) return [];
    return data.countries
      .filter((c) => {
        const name = translateText(c.name, lang).toLowerCase();
        const cap = translateText(c.capital, lang).toLowerCase();
        return name.includes(q) || cap.includes(q);
      })
      .slice(0, 5);
  }, [quickSearchQuery, data.countries, lang]);

  return (
    <div
      ref={mapContainerRef}
      className={`nx-panel relative overflow-hidden transition-all duration-300 ${
        isFullscreen ? 'fixed inset-0 z-[2000] !rounded-none !h-screen !w-screen' : ''
      }`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* شريط الأدوات والتحكم التكتيكي بالخريطة المحسن */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 px-4 py-2.5 bg-slate-950/95">
        <div className="flex flex-wrap items-center gap-2">
          {/* محدد طبقات الخريطة الاحترافية */}
          <div className="flex items-center gap-1.5">
            <span className="flex items-center gap-1 text-[11px] font-bold text-slate-400">
              <Layers className="h-3.5 w-3.5 text-sky-400" />
              <span>{isAr ? 'الطبقة:' : 'Basemap:'}</span>
            </span>
            <div className="flex items-center gap-1 rounded-xl border border-slate-800 bg-slate-950/80 p-0.5">
              {Object.entries(TILE_LAYERS).map(([key, layer]) => {
                const IconComp = layer.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setBaseLayer(key)}
                    className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                      baseLayer === key
                        ? 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-md'
                        : 'text-slate-400 hover:bg-slate-800/80 hover:text-white'
                    }`}
                  >
                    <IconComp className="h-3.5 w-3.5" />
                    <span>{isAr ? layer.labelAr : layer.labelEn}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* تبديل علامات أحداث السنة المحددة من المحاكاة */}
          <button
            onClick={() => setShowTimelineEvents((v) => !v)}
            className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition shadow-sm ${
              showTimelineEvents
                ? 'border-sky-500/60 bg-sky-500/20 text-sky-300 shadow-sky-950/50'
                : 'border-slate-800 bg-slate-950/70 text-slate-400 hover:text-white'
            }`}
            title={isAr ? `عرض بؤر وأحداث عام ${selectedYear} على الخريطة` : `Toggle ${selectedYear} Events on Map`}
          >
            <Clock className="h-3.5 w-3.5 text-sky-400 animate-pulse" />
            <span>{isAr ? `أحداث عام ${selectedYear}` : `Events in ${selectedYear}`}</span>
            <span className="rounded-full bg-slate-900 border border-slate-700 px-1.5 py-0.2 text-[10px] font-mono text-sky-300">
              {timelineEvents.length}
            </span>
          </button>

          {/* تبديل كتل وتحالفات العصر */}
          <button
            onClick={() => setShowEraBlocs((v) => !v)}
            className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition shadow-sm ${
              showEraBlocs
                ? 'border-indigo-500/60 bg-indigo-500/20 text-indigo-300 shadow-indigo-950/50'
                : 'border-slate-800 bg-slate-950/70 text-slate-400 hover:text-white'
            }`}
            title={isAr ? 'عرض تكتلات وتحالفات هذا العصر التاريخي' : 'Toggle Era Blocs'}
          >
            <Shield className="h-3.5 w-3.5 text-indigo-400" />
            <span>{isAr ? 'تكتلات العصر' : 'Era Blocs'}</span>
          </button>

          {/* تبديل المعاهدات الثنائية والبنود الدفاعية الاستراتيجية */}
          <button
            onClick={() => setShowBilateralTreaties((v) => !v)}
            className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition shadow-sm ${
              showBilateralTreaties
                ? 'border-amber-500/60 bg-amber-500/20 text-amber-300 shadow-amber-950/50'
                : 'border-slate-800 bg-slate-950/70 text-slate-400 hover:text-white'
            }`}
            title={isAr ? 'عرض روابط المعاهدات الثنائية وبنود الدفاع المشترك على الخريطة' : 'Toggle Bilateral Defense Pacts on Map'}
          >
            <Target className="h-3.5 w-3.5 text-amber-400" />
            <span>{isAr ? 'المعاهدات الثنائية' : 'Bilateral Pacts'}</span>
            <span className="rounded-full bg-slate-900 border border-slate-700 px-1.5 py-0.2 text-[10px] font-mono text-amber-300">
              {BILATERAL_TREATIES_DB.length}
            </span>
          </button>

          {/* تبديل بؤر النزاع مع أيقونة اللهب والتعداد المباشر */}
          <button
            onClick={() => setShowHotspots((v) => !v)}
            className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition shadow-sm ${
              showHotspots
                ? 'border-rose-500/60 bg-rose-500/20 text-rose-300 shadow-rose-950/50'
                : 'border-slate-800 bg-slate-950/70 text-slate-400 hover:text-white'
            }`}
          >
            <Flame className="h-3.5 w-3.5 text-rose-400 animate-pulse" />
            <span>{isAr ? 'بؤر النزاع والحروب' : 'Hotspots & Wars'}</span>
            <span className="rounded-full bg-slate-900 border border-slate-700 px-1.5 py-0.2 text-[10px] font-mono text-rose-300">
              {HOTSPOTS_DATA.length}
            </span>
          </button>

          {/* تبديل خريطة الحرارة للنزاعات مع مؤشر الكثافة */}
          <div className="flex items-center gap-1 rounded-xl border border-slate-800 bg-slate-950/80 p-0.5">
            <button
              onClick={() => setShowHeatmap((v) => !v)}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-bold transition shadow-sm ${
                showHeatmap
                  ? 'bg-gradient-to-r from-amber-600/30 to-rose-600/30 border border-amber-500/50 text-amber-300'
                  : 'text-slate-400 hover:bg-slate-800/80 hover:text-white'
              }`}
              title={isAr ? 'عرض خريطة الحرارة للنزاعات وبؤر التوتر' : 'Toggle Conflict Heatmap'}
            >
              <Radar className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
              <span>{isAr ? 'خريطة الحرارة' : 'Heatmap Overlay'}</span>
            </button>

            {showHeatmap && (
              <div className="flex items-center gap-0.5 pe-1">
                {['standard', 'high', 'ultra'].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setHeatIntensity(lvl)}
                    className={`rounded px-1.5 py-0.5 text-[10px] font-mono font-bold transition ${
                      heatIntensity === lvl
                        ? 'bg-amber-500 text-slate-950'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                    title={isAr ? `مستوى الكثافة: ${lvl}` : `Intensity: ${lvl}`}
                  >
                    {lvl === 'standard' ? '1x' : lvl === 'high' ? '2x' : '3x'}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* تبديل طبقة القواعد العسكرية الاستراتيجية الكبرى */}
          <button
            onClick={() => setShowBases((v) => !v)}
            className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition shadow-sm ${
              showBases
                ? 'border-sky-500/60 bg-sky-500/20 text-sky-300 shadow-sky-950/50'
                : 'border-slate-800 bg-slate-950/70 text-slate-400 hover:text-white'
            }`}
            title={isAr ? 'عرض القواعد العسكرية الجوية والبحرية الاستراتيجية' : 'Toggle Strategic Military Bases'}
          >
            <Shield className="h-3.5 w-3.5 text-sky-400 animate-pulse" />
            <span>{isAr ? 'القواعد العسكرية' : 'Military Bases'}</span>
            <span className="rounded-full bg-slate-900 border border-slate-700 px-1.5 py-0.2 text-[10px] font-mono text-sky-300">
              {MILITARY_BASES_DATA.length}
            </span>
          </button>

          {/* تبديل طبقة المضايق البحرية والممرات الاستراتيجية */}
          <button
            onClick={() => setShowChokepoints((v) => !v)}
            className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition shadow-sm ${
              showChokepoints
                ? 'border-amber-500/60 bg-amber-500/20 text-amber-300 shadow-amber-950/50'
                : 'border-slate-800 bg-slate-950/70 text-slate-400 hover:text-white'
            }`}
            title={isAr ? 'عرض المضايق البحرية وممرات تدفق النفط والتجارة العالمية' : 'Toggle Maritime Chokepoints'}
          >
            <Anchor className="h-3.5 w-3.5 text-amber-400" />
            <span>{isAr ? 'المضايق والممرات' : 'Chokepoints'}</span>
            <span className="rounded-full bg-slate-900 border border-slate-700 px-1.5 py-0.2 text-[10px] font-mono text-amber-300">
              {CHOKEPOINTS_DATA.length}
            </span>
          </button>

          {/* تبديل طبقة خطوط أنابيب الطاقة وكابلات الإنترنت البحرية */}
          <button
            onClick={() => setShowCorridors((v) => !v)}
            className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition shadow-sm ${
              showCorridors
                ? 'border-emerald-500/60 bg-emerald-500/20 text-emerald-300 shadow-emerald-950/50'
                : 'border-slate-800 bg-slate-950/70 text-slate-400 hover:text-white'
            }`}
            title={isAr ? 'عرض خطوط أنابيب النفط والغاز وكابلات الاتصالات البحرية' : 'Toggle Energy Pipelines & Subsea Cables'}
          >
            <Zap className="h-3.5 w-3.5 text-emerald-400" />
            <span>{isAr ? 'أنابيب وكابلات الطاقة' : 'Energy & Cables'}</span>
            <span className="rounded-full bg-slate-900 border border-slate-700 px-1.5 py-0.2 text-[10px] font-mono text-emerald-300">
              {ENERGY_AND_CABLE_CORRIDORS.length}
            </span>
          </button>
        </div>

        {/* أدوات البحث السريع وإعادة الضبط والشاشة الكاملة */}
        <div className="flex items-center gap-2">
          {/* حقل البحث السريع المباشر على الخريطة */}
          <div className="relative hidden md:block">
            <div className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900/90 px-2.5 py-1 text-xs text-slate-300 focus-within:border-sky-500/60">
              <Search className="h-3.5 w-3.5 text-sky-400" />
              <input
                type="text"
                placeholder={isAr ? 'انتقال سريع لدولة...' : 'Quick jump to country...'}
                value={quickSearchQuery}
                onChange={(e) => setQuickSearchQuery(e.target.value)}
                className="w-28 sm:w-36 bg-transparent text-xs text-white placeholder-slate-500 focus:outline-none"
              />
            </div>

            {quickFilteredCountries.length > 0 && (
              <div className="absolute top-full mt-1.5 z-[1000] w-48 rounded-xl border border-slate-800 bg-slate-950/95 p-1 shadow-2xl backdrop-blur">
                {quickFilteredCountries.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setClickedCountry(c);
                      setQuickSearchQuery('');
                    }}
                    className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-start text-xs text-slate-200 hover:bg-slate-850 hover:text-white transition"
                  >
                    <span className="text-base">{c.flag}</span>
                    <span className="truncate font-semibold">{translateText(c.name, lang)}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {sidePanelCountry && (
            <button
              onClick={handleCloseSidePanel}
              className="flex items-center gap-1.5 rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-3 py-1.5 text-xs font-bold text-indigo-300 transition hover:bg-indigo-500/20"
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>{isAr ? 'إغلاق اللوحة الجانبية' : 'Close Side Panel'}</span>
            </button>
          )}

          {chartCountry && (
            <button
              onClick={() => setChartCountry(null)}
              className="flex items-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-300 transition hover:bg-emerald-500/20"
            >
              <BarChart2 className="h-3.5 w-3.5" />
              <span>{isAr ? 'إخفاء المخطط' : 'Hide Chart'}</span>
            </button>
          )}

          <button
            onClick={() => {
              handleCloseSidePanel();
              setChartCountry(null);
              setActiveTheater(STRATEGIC_THEATERS[0]);
            }}
            className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-1.5 text-xs font-bold text-slate-300 transition hover:border-sky-500/40 hover:text-white"
            title={isAr ? 'إعادة ضبط المنظور للرؤية العالمية الكاملة' : 'Reset view to global'}
          >
            <Sparkles className="h-3.5 w-3.5 text-sky-400" />
            <span>{isAr ? 'إعادة الضبط' : 'Reset View'}</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950/70 px-2.5 py-1.5 text-xs font-bold text-slate-300 transition hover:border-sky-500/40 hover:text-white"
            title={isFullscreen ? (isAr ? 'تصغير' : 'Exit Fullscreen') : (isAr ? 'تكبير كامل الشاشة' : 'Fullscreen')}
          >
            {isFullscreen ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>

      {/* شريط الانتقال المباشر للمسارح الاستراتيجية الكبرى مع أيقونات مفتوحة المصدر */}
      <div className="flex items-center gap-1.5 overflow-x-auto border-b border-slate-800/80 bg-slate-950/70 px-4 py-2 text-xs">
        <span className="flex items-center gap-1 font-bold text-slate-400 shrink-0 me-1">
          <Compass className="h-3.5 w-3.5 text-sky-400" />
          <span>{isAr ? 'المسارح الاستراتيجية:' : 'Strategic Theaters:'}</span>
        </span>
        {STRATEGIC_THEATERS.map((th) => {
          const IconComp = th.icon;
          const isActive = activeTheater?.id === th.id;
          return (
            <button
              key={th.id}
              onClick={() => handleSelectTheater(th)}
              className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11px] font-bold whitespace-nowrap shadow-sm transition ${
                isActive
                  ? 'border-sky-500 bg-sky-500/20 text-sky-300'
                  : 'border-slate-800 bg-slate-900/80 text-slate-300 hover:border-sky-500/50 hover:text-white'
              }`}
            >
              <IconComp className="h-3 w-3 text-sky-400" />
              <span>{isAr ? th.nameAr : th.nameEn}</span>
            </button>
          );
        })}
      </div>

      {/* مساحة الخريطة واللوحة الجانبية */}
      <div className={`relative flex flex-col lg:flex-row w-full overflow-hidden ${
        isFullscreen ? 'h-[calc(100vh-85px)]' : 'h-[480px] sm:h-[580px] lg:h-[700px]'
      }`}>
        {/* الخريطة */}
        <div className={`relative h-full transition-all duration-300 ${sidePanelCountry ? 'w-full lg:w-7/12 xl:w-3/5' : 'w-full'}`}>
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

            {/* علامات الدول ومواقعها */}
            {data.countries.map((country) => {
              const flagUrl = getFlagUrl(country.id);
              const emblemUrl = getEmblemUrl(country.id);
              const leader = getLeader(country);

              const rawLeaderName = isAr ? leader?.nameAr || country.leader : leader?.nameEn || country.leader;
              const rawLeaderTitle = isAr ? leader?.titleAr || country.leaderTitle : leader?.titleEn || country.leaderTitle;

              // تطبيق المترجم الصارم لمنع التداخلات اللغوية
              const localizedCountryName = translateText(country.name, lang);
              const localizedCapital = translateText(country.capital, lang);
              const localizedRegion = translateText(country.regionLabel, lang);
              const localizedRegime = translateText(country.regime, lang);
              const localizedLeaderName = translateText(rawLeaderName, lang);
              const localizedLeaderTitle = translateText(rawLeaderTitle, lang);

              return (
                <Marker
                  key={country.id}
                  position={country.coordinates}
                  icon={icons[country.id]}
                  eventHandlers={{
                    click: () => handleMarkerClick(country),
                  }}
                >
                  <Popup className="nx-custom-popup">
                    <div className="w-[290px] p-2.5 text-slate-100" dir={isAr ? 'rtl' : 'ltr'}>
                      {/* رأس نافذة الدولة */}
                      <div className="mb-2.5 flex items-start justify-between gap-2.5 border-b border-slate-800 pb-2.5">
                        <div className="flex items-center gap-2.5 min-w-0">
                          {/* شعار الدولة */}
                          <div
                            className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-amber-500/35 bg-gradient-to-b from-amber-500/15 via-slate-900 to-slate-950 p-1 shadow"
                            title={isAr ? `شعار ${localizedCountryName}` : `Coat of arms of ${localizedCountryName}`}
                          >
                            <img
                              src={emblemUrl}
                              alt={localizedCountryName}
                              className="h-full w-full object-contain filter drop-shadow"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                const fallback = e.currentTarget.nextElementSibling;
                                if (fallback) fallback.style.display = 'block';
                              }}
                            />
                            <span style={{ display: 'none' }} className="text-xl">
                              {country.flag || '🌐'}
                            </span>
                          </div>

                          <div className="min-w-0 leading-tight">
                            <h4 className="m-0 truncate text-sm font-black text-white">
                              {localizedCountryName}
                            </h4>
                            <p className="m-0 mt-0.5 truncate text-[11px] text-slate-400">
                              {isAr ? 'العاصمة:' : 'Capital:'}{' '}
                              <span className="font-semibold text-slate-200">{localizedCapital}</span>
                            </p>
                            <span className="mt-1 inline-block text-[10px] text-sky-400 font-bold">
                              {localizedRegion}
                            </span>
                          </div>
                        </div>

                        {/* الراية الوطنية */}
                        <div className="flex flex-col items-center gap-0.5 shrink-0">
                          <div className="h-6 w-9 overflow-hidden rounded border border-slate-700 shadow-sm bg-slate-900">
                            <img
                              src={flagUrl}
                              alt={localizedCountryName}
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                const fallback = e.currentTarget.nextElementSibling;
                                if (fallback) fallback.style.display = 'block';
                              }}
                            />
                            <span style={{ display: 'none' }} className="text-base text-center leading-6">
                              {country.flag || '🚩'}
                            </span>
                          </div>
                          <span className="text-[9px] font-bold text-slate-500">
                            {isAr ? 'الراية' : 'Flag'}
                          </span>
                        </div>
                      </div>

                      {/* بطاقة الحاكم الفعلي المعتمد */}
                      <div className="mb-2.5 rounded-xl border border-slate-800 bg-slate-900/90 p-2 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          {leader?.photo ? (
                            <img
                              src={leader.photo}
                              alt={localizedLeaderName}
                              className="h-10 w-10 rounded-xl object-cover border-2 border-amber-500/40 shadow shrink-0"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                const fb = e.currentTarget.nextElementSibling;
                                if (fb) fb.style.display = 'grid';
                              }}
                            />
                          ) : null}
                          <div
                            style={{ display: leader?.photo ? 'none' : 'grid' }}
                            className="grid h-10 w-10 place-items-center rounded-xl border-2 border-amber-500/30 bg-amber-500/10 text-amber-300 shrink-0"
                          >
                            <Crown className="h-5 w-5" />
                          </div>

                          <div className="min-w-0">
                            <span className="block truncate text-[10px] font-bold text-amber-400">
                              {localizedLeaderTitle}
                            </span>
                            <span className="block truncate text-xs font-black text-white">
                              {localizedLeaderName}
                            </span>
                            <span className="text-[9px] font-semibold text-emerald-400">
                              {isAr ? '● توثيق رسمي' : '● Verified Official'}
                            </span>
                          </div>
                        </div>

                        {leader?.wikiUrl && (
                          <a
                            href={leader.wikiUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-900/90 px-2 py-1 text-[10px] font-bold text-sky-300 hover:border-sky-500/50 hover:bg-slate-800 transition shrink-0"
                            title={isAr ? 'عرض الوثيقة الرسمية' : 'Wikipedia profile'}
                          >
                            <Globe className="h-3 w-3 text-sky-400" />
                            <span>{isAr ? 'ويكي' : 'Wiki'}</span>
                            <ExternalLink className="h-2.5 w-2.5" />
                          </a>
                        )}
                      </div>

                      {/* مؤشرات سياسية سريعة */}
                      <dl className="my-2 space-y-1 text-[11px] text-slate-300 border-t border-slate-800/80 pt-1.5">
                        <div className="flex justify-between gap-2">
                          <dt className="text-slate-400">{isAr ? 'نظام الحكم:' : 'Regime:'}</dt>
                          <dd className="m-0 truncate font-bold text-slate-200">{localizedRegime}</dd>
                        </div>
                        <div className="flex justify-between gap-2">
                          <dt className="text-slate-400">{isAr ? 'الأحزاب المسجلة:' : 'Parties:'}</dt>
                          <dd className="m-0 font-bold text-amber-300 font-mono">
                            {country.partiesCount ?? country.parties?.length ?? 0} {isAr ? 'حزب' : 'parties'}
                          </dd>
                        </div>
                      </dl>

                      {/* أزرار الإجراءات التكتيكية */}
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setClickedCountry(country)}
                          className="flex items-center justify-center gap-1 rounded-xl border border-indigo-500/40 bg-indigo-500/20 px-2 py-1.5 text-xs font-bold text-indigo-300 hover:bg-indigo-500/30 transition shadow-sm"
                        >
                          <BookOpen className="h-3.5 w-3.5" />
                          <span>{isAr ? 'اللوحة الجانبية' : 'Side Panel'}</span>
                        </button>

                        <button
                          onClick={() => onSelectCountry(country)}
                          className="flex items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 px-2 py-1.5 text-xs font-bold text-white shadow-md hover:from-sky-500 hover:to-indigo-500 transition"
                        >
                          <span>{isAr ? 'الملف الكامل' : 'Full Dossier'}</span>
                        </button>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              );
            })}

            {/* تمييز وتأطير أعضاء الكتل والتحالفات التاريخية السائدة في هذا العصر */}
            {showEraBlocs &&
              currentEra.blocs &&
              currentEra.blocs.map((bloc) =>
                data.countries
                  .filter((c) => bloc.members && bloc.members.includes(c.id))
                  .map((c) => (
                    <Circle
                      key={`era-bloc-${bloc.id}-${c.id}`}
                      center={c.coordinates}
                      radius={320000}
                      pathOptions={{
                        stroke: true,
                        color: bloc.color,
                        weight: 2,
                        dashArray: '4, 4',
                        fillColor: bloc.color,
                        fillOpacity: 0.15,
                      }}
                    />
                  ))
              )}

            {/* علامات وأطواق محاكاة أحداث السنة المحددة المربوطة بالخريطة */}
            {showTimelineEvents &&
              timelineEvents.map((event) => {
                const icon = yearEventIcons[event.id];
                const category = event.category || 'crisis';
                const color =
                  category === 'war'
                    ? '#f43f5e'
                    : category === 'treaty'
                    ? '#10b981'
                    : category === 'revolution'
                    ? '#f97316'
                    : category === 'monetary'
                    ? '#06b6d4'
                    : category === 'milestone'
                    ? '#a855f7'
                    : '#eab308';
                const localizedTitle = isAr ? event.titleAr : event.titleEn;
                const localizedSummary = isAr ? event.summaryAr : event.summaryEn;
                const localizedImpact = isAr ? event.impactAr : event.impactEn;
                const localizedBelligerents = isAr ? event.belligerentsAr : event.belligerentsEn;
                const country = data.countries.find((c) => c.id === event.countryId);

                return (
                  <div key={`timeline-event-${event.id}`}>
                    {/* طوق راداري متوهج حول بؤرة الحدث الميداني */}
                    <Circle
                      center={event.coordinates}
                      radius={480000}
                      pathOptions={{
                        stroke: true,
                        color: color,
                        weight: 2,
                        dashArray: '6, 6',
                        fillColor: color,
                        fillOpacity: 0.2,
                      }}
                    />
                    <Circle
                      center={event.coordinates}
                      radius={200000}
                      pathOptions={{
                        stroke: false,
                        fillColor: color,
                        fillOpacity: 0.38,
                      }}
                    />

                    <Marker position={event.coordinates} icon={icon}>
                      <Popup className="nx-custom-popup" maxWidth={360}>
                        <div className="p-1 space-y-2.5 text-slate-100" dir={isAr ? 'rtl' : 'ltr'}>
                          {/* الرأس: شارة السنة والتصنيف ومؤشر التهديد */}
                          <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2">
                            <div className="flex items-center gap-1.5">
                              <span
                                className="font-mono text-xs font-black px-2 py-0.5 rounded-md text-white border"
                                style={{ backgroundColor: `${color}30`, borderColor: `${color}80` }}
                              >
                                {isAr ? `عام ${event.year}` : `Year ${event.year}`}
                              </span>
                              <span
                                className="rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-wider"
                                style={{ backgroundColor: `${color}20`, color: color }}
                              >
                                {category === 'war'
                                  ? (isAr ? 'صراع مسلح / حرب' : 'War / Conflict')
                                  : category === 'treaty'
                                  ? (isAr ? 'معاهدة / تحالف' : 'Treaty / Alliance')
                                  : category === 'revolution'
                                  ? (isAr ? 'ثورة / تحول حكم' : 'Revolution / Transition')
                                  : category === 'monetary'
                                  ? (isAr ? 'تحول نقدي / طاقة' : 'Monetary / Energy')
                                  : category === 'milestone'
                                  ? (isAr ? 'محطة سيادية / تأسيس' : 'Sovereign Milestone')
                                  : (isAr ? 'أزمة استراتيجية' : 'Strategic Crisis')}
                              </span>
                            </div>
                            <span className="font-mono text-[9px] text-slate-400">
                              {event.severity === 'critical' ? 'CRITICAL' : 'HIGH PRIORITY'}
                            </span>
                          </div>

                          {/* عنوان الحدث */}
                          <h4 className="m-0 text-xs sm:text-sm font-black text-white leading-snug">
                            {localizedTitle}
                          </h4>

                          {/* الملخص الاستخباري */}
                          <p className="m-0 text-[11px] leading-relaxed text-slate-300">
                            {localizedSummary}
                          </p>

                          {/* الأطراف المشاركة / المتحاربة والأثر الاستراتيجي */}
                          <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-2 text-[10px] space-y-1.5">
                            {localizedBelligerents && (
                              <div>
                                <span className="font-bold text-slate-400">{isAr ? 'الأطراف والدول المتأثرة:' : 'Parties / Affected:'} </span>
                                <span className="text-slate-200">{localizedBelligerents}</span>
                              </div>
                            )}
                            {localizedImpact && (
                              <div className="pt-1 border-t border-slate-800/80">
                                <span className="font-bold text-amber-400">{isAr ? 'الأثر الجيوسياسي:' : 'Strategic Impact:'} </span>
                                <span className="text-slate-300">{localizedImpact}</span>
                              </div>
                            )}
                          </div>

                          {/* أزرار الإجراء السريع */}
                          <div className="grid grid-cols-2 gap-2 pt-1">
                            {country && (
                              <button
                                onClick={() => {
                                  setClickedCountry(country);
                                }}
                                className="flex items-center justify-center gap-1 rounded-xl border border-sky-500/40 bg-sky-500/20 px-2 py-1.5 text-xs font-bold text-sky-300 hover:bg-sky-500/30 transition shadow-sm"
                              >
                                <BookOpen className="h-3.5 w-3.5" />
                                <span>{isAr ? 'الملف السيادي للدولة' : 'Country Dossier'}</span>
                              </button>
                            )}
                            <button
                              onClick={() => {
                                setTargetFlyCoords(event.coordinates);
                              }}
                              className="flex items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-amber-600 to-rose-600 px-2 py-1.5 text-xs font-bold text-white shadow hover:from-amber-500 hover:to-rose-500 transition"
                            >
                              <Crosshair className="h-3.5 w-3.5" />
                              <span>{isAr ? 'تكبير البؤرة' : 'Focus Hotspot'}</span>
                            </button>
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  </div>
                );
              })}

            {/* علامات رصد النقاط الساخنة والحروب والتحالفات */}
            {showHotspots &&
              HOTSPOTS_DATA.map((hotspot) => {
                const isWar = hotspot.category === 'war';
                const isAlliance = hotspot.category === 'alliance';
                const isChokepoint = hotspot.category === 'chokepoint';
                const icon = hotspotIcons[hotspot.id];

                const localizedTitle = isAr ? hotspot.titleAr : hotspot.titleEn;
                const localizedDesc = isAr ? hotspot.descriptionAr : hotspot.descriptionEn;
                const belligerents = isAr ? hotspot.belligerentsAr.primary.join(' · ') : hotspot.belligerentsEn.primary.join(' · ');
                const localizedCasualties = translateText(hotspot.casualtiesEstimate, lang);

                return (
                  <Marker
                    key={`hotspot-${hotspot.id}`}
                    position={hotspot.coordinates}
                    icon={icon}
                  >
                    <Popup className="nx-custom-popup" maxWidth={310}>
                      <div className="p-1 space-y-2 text-slate-100" dir={isAr ? 'rtl' : 'ltr'}>
                        <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5">
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider ${
                              isWar
                                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                                : isAlliance
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                : isChokepoint
                                ? 'bg-orange-500/20 text-orange-300 border border-orange-500/40'
                                : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                            }`}
                          >
                            {isAr ? HOTSPOT_CATEGORIES[hotspot.category]?.ar : HOTSPOT_CATEGORIES[hotspot.category]?.en}
                          </span>
                          <span className="font-mono text-[9px] text-slate-400">
                            {hotspot.startDate}
                          </span>
                        </div>

                        <h4 className="m-0 text-xs font-black text-white leading-tight">
                          {localizedTitle}
                        </h4>

                        <p className="m-0 text-[11px] leading-relaxed text-slate-300">
                          {localizedDesc}
                        </p>

                        <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-2 text-[10px] space-y-1">
                          <div className="font-bold text-rose-300">
                            <span>{isAlliance ? (isAr ? 'أعضاء التحالف:' : 'Members:') : (isAr ? 'الأطراف المتحاربة:' : 'Belligerents:')} </span>
                            <span className="text-slate-200 font-normal">{belligerents}</span>
                          </div>
                          <div className="font-semibold text-amber-300">
                            {localizedCasualties}
                          </div>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}

            {/* خريطة الحرارة للنزاعات والحروب العالمية (Global Conflict Heatmap) مع دعم درجات الكثافة */}
            {showHeatmap &&
              HOTSPOTS_DATA.filter((h) => h.category === 'war' || h.category === 'conflict' || h.category === 'chokepoint').map((spot) => {
                const isWar = spot.category === 'war';
                const isChokepoint = spot.category === 'chokepoint';
                const multiplier = heatIntensity === 'ultra' ? 1.4 : heatIntensity === 'standard' ? 0.8 : 1.0;
                const baseRadius = (isWar ? 380000 : isChokepoint ? 240000 : 300000) * multiplier;

                return (
                  <div key={`heat-group-${spot.id}`}>
                    <Circle
                      center={spot.coordinates}
                      radius={baseRadius * 1.6}
                      pathOptions={{
                        stroke: false,
                        fillColor: isWar ? '#dc2626' : '#ea580c',
                        fillOpacity: 0.16,
                      }}
                    />
                    <Circle
                      center={spot.coordinates}
                      radius={baseRadius}
                      pathOptions={{
                        stroke: false,
                        fillColor: isWar ? '#ef4444' : '#f59e0b',
                        fillOpacity: 0.35,
                      }}
                    />
                    <Circle
                      center={spot.coordinates}
                      radius={baseRadius * 0.45}
                      pathOptions={{
                        stroke: true,
                        color: isWar ? '#f43f5e' : '#fbbf24',
                        weight: 2,
                        fillColor: isWar ? '#ff0055' : '#f97316',
                        fillOpacity: 0.75,
                      }}
                    />
                  </div>
                );
              })}

            {/* علامات القواعد العسكرية الاستراتيجية الكبرى */}
            {showBases &&
              MILITARY_BASES_DATA.map((base) => {
                const icon = baseIcons[base.id];
                const localizedTitle = isAr ? base.nameAr : base.nameEn;
                const localizedSignificance = isAr ? base.significanceAr : base.significanceEn;
                const typeLabel =
                  base.type === 'air'
                    ? isAr
                      ? 'قاعدة جوية استراتيجية'
                      : 'Strategic Air Base'
                    : base.type === 'naval'
                    ? isAr
                      ? 'قاعدة بحرية ومقر أسطول'
                      : 'Naval Homeport / Base'
                    : isAr
                    ? 'مجمع عسكري مشترك متعدد الفروع'
                    : 'Joint Military Hub';

                return (
                  <Marker
                    key={`base-${base.id}`}
                    position={base.coordinates}
                    icon={icon}
                  >
                    <Popup className="nx-custom-popup" maxWidth={320}>
                      <div className="p-1 space-y-2 text-slate-100" dir={isAr ? 'rtl' : 'ltr'}>
                        <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5">
                          <span className="rounded-full bg-sky-500/20 border border-sky-500/40 px-2.5 py-0.5 text-[9px] font-black uppercase text-sky-300">
                            {typeLabel}
                          </span>
                          <span className="flex items-center gap-1 font-mono text-[10px] text-slate-300">
                            <span>{base.operatorFlag}</span>
                            <span>{base.country}</span>
                          </span>
                        </div>

                        <h4 className="m-0 text-xs font-black text-white leading-tight">
                          {localizedTitle}
                        </h4>

                        <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-2 text-[10px] space-y-1">
                          <div>
                            <span className="font-bold text-sky-400">{isAr ? 'المشغّل:' : 'Operator:'} </span>
                            <span className="text-slate-200">{base.operator}</span>
                          </div>
                          <div>
                            <span className="font-bold text-amber-400">{isAr ? 'القدرات والعتاد:' : 'Capacity:'} </span>
                            <span className="text-slate-300">{base.capacity}</span>
                          </div>
                        </div>

                        <p className="m-0 text-[11px] leading-relaxed text-slate-300">
                          {localizedSignificance}
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}

            {/* علامات المضايق والممرات البحرية الاستراتيجية */}
            {showChokepoints &&
              CHOKEPOINTS_DATA.map((cp) => {
                const icon = chokepointMarkerIcons[cp.id];
                const localizedTitle = isAr ? cp.nameAr : cp.nameEn;
                const localizedFlowLabel = isAr ? cp.flowLabelAr : cp.flowLabelEn;
                const localizedPatrolled = isAr ? cp.patrolledByAr : cp.patrolledByEn;
                const localizedDetails = isAr ? cp.detailsAr : cp.detailsEn;
                const isHighRisk = cp.riskTone === 'rose';

                return (
                  <Marker
                    key={`chokepoint-${cp.id}`}
                    position={cp.coordinates}
                    icon={icon}
                  >
                    <Popup className="nx-custom-popup" maxWidth={330}>
                      <div className="p-1 space-y-2 text-slate-100" dir={isAr ? 'rtl' : 'ltr'}>
                        <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5">
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[9px] font-black uppercase ${
                              isHighRisk
                                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                                : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                            }`}
                          >
                            {cp.riskLevel}
                          </span>
                          <span className="rounded-md bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-300">
                            {cp.flow}
                          </span>
                        </div>

                        <h4 className="m-0 text-xs font-black text-white leading-tight">
                          {localizedTitle}
                        </h4>

                        <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-2 text-[10px] space-y-1">
                          <p className="m-0 font-semibold text-amber-300">
                            {localizedFlowLabel}
                          </p>
                          <div className="text-slate-400 pt-1 border-t border-slate-800">
                            <span className="font-bold text-slate-300">{isAr ? 'الدوريات والحماية:' : 'Patrolled by:'} </span>
                            <span>{localizedPatrolled}</span>
                          </div>
                        </div>

                        <p className="m-0 text-[11px] leading-relaxed text-slate-300">
                          {localizedDetails}
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}

            {/* علامات خطوط الطاقة وكابلات الاتصالات البحرية */}
            {showCorridors &&
              ENERGY_AND_CABLE_CORRIDORS.map((cor) => {
                const icon = corridorIcons[cor.id];
                const localizedTitle = isAr ? cor.nameAr : cor.nameEn;
                const localizedDesc = isAr ? cor.descAr : cor.descEn;
                const localizedOperator = isAr ? cor.operatorAr : cor.operatorEn;
                const isCable = cor.type === 'cable';

                return (
                  <Marker
                    key={`corridor-${cor.id}`}
                    position={cor.coordinates}
                    icon={icon}
                  >
                    <Popup className="nx-custom-popup" maxWidth={320}>
                      <div className="p-1 space-y-2 text-slate-100" dir={isAr ? 'rtl' : 'ltr'}>
                        <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5">
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[9px] font-black uppercase ${
                              isCable
                                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            }`}
                          >
                            {isCable
                              ? isAr
                                ? 'كابلات بيانات بحرية فائقة'
                                : 'Subsea Data Cable'
                              : isAr
                              ? 'خط أنابيب طاقة استراتيجي'
                              : 'Energy Pipeline'}
                          </span>
                        </div>

                        <h4 className="m-0 text-xs font-black text-white leading-tight">
                          {localizedTitle}
                        </h4>

                        <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-2 text-[10px] space-y-1">
                          <div className="font-bold text-emerald-400">
                            <span>{isAr ? 'السعة / التدفق:' : 'Capacity:'} </span>
                            <span className="text-slate-200 font-normal">{cor.capacity}</span>
                          </div>
                          <div className="text-slate-400">
                            <span className="font-bold text-slate-300">{isAr ? 'المشغّل:' : 'Operators:'} </span>
                            <span>{localizedOperator}</span>
                          </div>
                        </div>

                        <p className="m-0 text-[11px] leading-relaxed text-slate-300">
                          {localizedDesc}
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}

            {/* شبكة خطوط المعاهدات والتحالفات الدفاعية الثنائية بين الدول (Bilateral Treaties Arcs) */}
            {showBilateralTreaties &&
              BILATERAL_TREATIES_DB.map((treaty) => {
                const coords1 = treaty.coordinates1;
                const coords2 = treaty.coordinates2;
                if (!coords1 || !coords2) return null;

                const midLat = (coords1[0] + coords2[0]) / 2;
                const midLng = (coords1[1] + coords2[1]) / 2;
                const icon = treatyIcons[treaty.id];

                return (
                  <div key={`bilateral-group-${treaty.id}`}>
                    {/* خط التحالف المتوهج المربوط بين البلدين */}
                    <Polyline
                      positions={[coords1, coords2]}
                      pathOptions={{
                        color: '#f59e0b',
                        weight: 2.5,
                        dashArray: '6, 6',
                        opacity: 0.85,
                      }}
                    />

                    {/* علامة منتصف الرابط للمعاهدة مع إمكانية النقر لقراءة الغاية والبنود */}
                    <Marker position={[midLat, midLng]} icon={icon}>
                      <Popup className="nx-custom-popup" maxWidth={360}>
                        <div className="p-1 space-y-2.5 text-slate-100" dir={isAr ? 'rtl' : 'ltr'}>
                          <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5">
                            <span className="font-mono text-[10px] font-black text-amber-300 bg-amber-500/20 border border-amber-500/40 px-2 py-0.5 rounded">
                              {treaty.signedYear}
                            </span>
                            <span className="text-[10px] font-bold text-slate-300">
                              {treaty.country1.flag} ⟷ {treaty.country2.flag}
                            </span>
                          </div>

                          <h4 className="m-0 text-xs font-black text-white leading-tight">
                            {isAr ? treaty.titleAr : treaty.titleEn}
                          </h4>

                          {/* ما غاية هذا التحالف؟ */}
                          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-2 text-[11px] space-y-1">
                            <div className="font-black text-amber-300 flex items-center gap-1">
                              <Target className="h-3 w-3" />
                              <span>{isAr ? 'غاية هذا التحالف:' : 'Strategic Purpose:'}</span>
                            </div>
                            <p className="m-0 text-slate-200 leading-snug">
                              {isAr ? treaty.strategicPurposeAr : treaty.strategicPurposeEn}
                            </p>
                          </div>

                          {/* عينة من البنود والمواد */}
                          <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-2 text-[10px] space-y-1">
                            <span className="font-black text-sky-400 block">
                              {isAr ? 'أبرز المواد والبنود الملزمة:' : 'Key Binding Articles:'}
                            </span>
                            {treaty.keyClauses.slice(0, 2).map((c, i) => (
                              <div key={i} className="text-slate-300 ps-1 border-s border-indigo-500/40">
                                <span className="font-bold text-amber-300">{c.articleNumber}: </span>
                                <span>{isAr ? c.titleAr : c.titleEn}</span>
                              </div>
                            ))}
                          </div>

                          {treaty.sharedArsenal && (
                            <div className="text-[10px] text-slate-400">
                              <span className="font-bold text-slate-300">{isAr ? 'الترسانة المشتركة: ' : 'Arsenal: '}</span>
                              <span className="text-amber-400 font-mono">{treaty.sharedArsenal.slice(0, 3).join(', ')}</span>
                            </div>
                          )}
                        </div>
                      </Popup>
                    </Marker>
                  </div>
                );
              })}

            <MapFocus country={focusCountry} theater={activeTheater} targetCoords={targetFlyCoords} />
            <MapHudWatcher onUpdate={setHudCoords} />
          </MapContainer>

          {/* لوحة الرادار والإحداثيات التكتيكية التفاعلية في الزاوية (HUD Coordinates & Radar) */}
          <div className="pointer-events-none absolute bottom-3 end-3 z-[500] flex items-center gap-3 rounded-2xl border border-sky-500/35 bg-slate-950/90 p-2.5 shadow-2xl backdrop-blur">
            {/* رادار متحرك مصغر مع أشعة مسح */}
            <div className="relative h-8 w-8 shrink-0">
              <svg className="h-full w-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" fill="#020617" stroke="#0ea5e9" strokeWidth="2" opacity="0.8" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="#0284c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                <circle cx="50" cy="50" r="14" fill="none" stroke="#0284c7" strokeWidth="1" opacity="0.6" />
                <line x1="50" y1="4" x2="50" y2="96" stroke="#0369a1" strokeWidth="1" opacity="0.4" />
                <line x1="4" y1="50" x2="96" y2="50" stroke="#0369a1" strokeWidth="1" opacity="0.4" />
                <g className="nx-radar-beam">
                  <path d="M50 50 L96 50 A46 46 0 0 0 82 17 Z" fill="#38bdf8" fillOpacity="0.4" />
                </g>
              </svg>
            </div>

            <div className="space-y-0.5 font-mono text-[10px] leading-tight text-slate-300">
              <div className="flex items-center gap-1.5 font-bold text-sky-400">
                <Crosshair className="h-3 w-3 animate-spin" style={{ animationDuration: '8s' }} />
                <span>LAT: {hudCoords.lat}° | LNG: {hudCoords.lng}°</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-[9px]">
                <span>ZOOM: {hudCoords.zoom}x</span>
                <span>•</span>
                <span className="text-rose-400 font-bold">{HOTSPOTS_DATA.length} {isAr ? 'نزاع نشط' : 'Active Conflicts'}</span>
              </div>
            </div>
          </div>

          {/* دليل خريطة الحرارة للنزاعات */}
          {showHeatmap && (
            <div className="pointer-events-none absolute top-3 end-3 z-[500] rounded-xl border border-rose-500/35 bg-slate-950/90 p-2.5 shadow-2xl backdrop-blur text-xs space-y-1.5 hidden sm:block">
              <span className="font-bold text-[11px] text-white flex items-center gap-1.5">
                <Flame className="h-3.5 w-3.5 text-rose-400 animate-pulse" />
                <span>{isAr ? 'خريطة حرارة النزاعات الحية' : 'Live Conflict Heatmap'}</span>
              </span>
              <div className="flex items-center gap-2 text-[10px]">
                <span className="h-2 w-2 rounded-full bg-rose-500" />
                <span className="text-slate-300">{isAr ? 'حروب نشطة (حرارة قصوى)' : 'Active Wars (Critical)'}</span>
              </div>
              <div className="flex items-center gap-2 text-[10px]">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                <span className="text-slate-300">{isAr ? 'بؤر توتر ومضايق (حرارة مرتفعة)' : 'Flashpoints & Chokepoints'}</span>
              </div>
            </div>
          )}

          {/* المرصد التكتيكي للمحاكاة والتحكم الزمني المباشر على الخريطة */}
          <div className="absolute top-3 start-3 z-[600] w-[310px] sm:w-[360px] rounded-2xl border border-sky-500/40 bg-slate-950/95 p-3 shadow-2xl backdrop-blur text-xs space-y-2.5 transition-all">
            {/* الرأس: السنة ومؤشر التأهب والتصغير */}
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </div>
                <div className="font-mono text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
                  {selectedYear}
                </div>
                <span className={`inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${defcon.bg}`}>
                  <span>{defcon.level === 1 ? 'DEFCON 1' : defcon.level === 2 ? 'DEFCON 2' : defcon.level === 3 ? 'DEFCON 3' : 'DEFCON 4'}</span>
                </span>
              </div>

              {/* أزرار التحكم بالمحاكاة والتصغير */}
              <div className="flex items-center gap-1">
                {onYearChange && (
                  <>
                    <button
                      onClick={() => onYearChange((y) => Math.max(1914, y - 1))}
                      className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition"
                      title={isAr ? 'سنة سابقة (-1)' : 'Prev Year'}
                    >
                      {isAr ? <ChevronRight className="h-3.5 w-3.5" /> : <ChevronLeft className="h-3.5 w-3.5" />}
                    </button>
                    <button
                      onClick={() => setIsSimPlaying((p) => !p)}
                      className={`p-1 rounded-md transition ${
                        isSimPlaying
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'text-sky-400 hover:bg-slate-800'
                      }`}
                      title={isSimPlaying ? (isAr ? 'إيقاف مؤقت' : 'Pause') : (isAr ? 'تشغيل المحاكاة' : 'Play')}
                    >
                      {isSimPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                    </button>
                    <button
                      onClick={() => onYearChange((y) => Math.min(2026, y + 1))}
                      className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition"
                      title={isAr ? 'سنة تالية (+1)' : 'Next Year'}
                    >
                      {isAr ? <ChevronLeft className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
                    </button>
                  </>
                )}
                <button
                  onClick={() => setIsSimHudCollapsed((c) => !c)}
                  className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition"
                  title={isSimHudCollapsed ? (isAr ? 'توسيع اللوحة' : 'Expand') : (isAr ? 'تصغير' : 'Collapse')}
                >
                  {isSimHudCollapsed ? <Maximize2 className="h-3.5 w-3.5" /> : <Minimize2 className="h-3.5 w-3.5" />}
                </button>
              </div>
            </div>

            {!isSimHudCollapsed && (
              <>
                <div className="space-y-0.5">
                  <h4 className="m-0 text-xs font-black text-white">
                    {isAr ? currentEra.titleAr : currentEra.titleEn}
                  </h4>
                  <p className="m-0 text-[10px] text-slate-400 leading-tight">
                    {isAr ? currentEra.orderAr : currentEra.orderEn}
                  </p>
                </div>

                {/* قائمة أحداث هذه السنة المربوطة بالخريطة مع إمكانية القفز السريع */}
                <div className="space-y-1.5 pt-1 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
                    <span className="flex items-center gap-1 text-sky-400">
                      <Crosshair className="h-3 w-3" />
                      <span>{isAr ? 'الأحداث المعروضة بالخريطة:' : 'Events on Map:'}</span>
                    </span>
                    <span className="font-mono text-white">
                      {timelineEvents.length} {isAr ? 'أحداث' : 'events'}
                    </span>
                  </div>

                  <div className="max-h-32 overflow-y-auto space-y-1 pe-0.5">
                    {timelineEvents.map((ev) => (
                      <button
                        key={ev.id}
                        onClick={() => {
                          setTargetFlyCoords(ev.coordinates);
                        }}
                        className="w-full text-start flex items-center justify-between gap-1.5 p-1.5 rounded-lg border border-slate-800/80 bg-slate-900/80 hover:border-sky-500/50 hover:bg-slate-800/80 transition group"
                      >
                        <div className="min-w-0 flex-1">
                          <span className="block font-bold text-[11px] text-slate-200 group-hover:text-sky-300 truncate">
                            {isAr ? ev.titleAr : ev.titleEn}
                          </span>
                          <span className="block text-[9px] text-slate-400 truncate">
                            {isAr ? ev.belligerentsAr : ev.belligerentsEn}
                          </span>
                        </div>
                        <span className="shrink-0 font-mono text-[9px] text-sky-400 border border-sky-500/30 rounded px-1.5 py-0.5">
                          {isAr ? 'تركيز' : 'Focus'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* تبديل وضع التتبع التلقائي للبؤرة أثناء المحاكاة */}
                <div className="flex items-center justify-between pt-1 border-t border-slate-800/80 text-[10px]">
                  <label className="flex items-center gap-1.5 cursor-pointer text-slate-300 select-none">
                    <input
                      type="checkbox"
                      checked={autoTrackEpicenter}
                      onChange={(e) => setAutoTrackEpicenter(e.target.checked)}
                      className="rounded border-slate-700 bg-slate-900 text-sky-500 focus:ring-0"
                    />
                    <span>{isAr ? 'تتبع تلقائي لمسرح الحدث' : 'Auto-pan to epicenter'}</span>
                  </label>
                  <span className="font-mono text-slate-500 text-[9px]">
                    [CHRONO-SIM]
                  </span>
                </div>
              </>
            )}
          </div>

          {/* شارة الخريطة النظيفة بدون علامة مائية */}
          <div className="pointer-events-none absolute bottom-3 start-3 z-[500] flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/90 px-3 py-1.5 text-[11px] text-slate-300 backdrop-blur shadow-md">
            <Radio className="h-3.5 w-3.5 text-sky-400 animate-pulse" />
            <span>
              {isAr
                ? 'رصد سيادي حي · انقر على أي دولة لفتح اللوحة الاستخباراتية الشاملة'
                : 'Live Geopolitical Radar · Click any country for full intelligence'}
            </span>
          </div>

          {/* مخطط Recharts العائم عند اختيار عرض المخطط */}
          {chartCountry && (
            <div className="animate-fade-up absolute bottom-3 end-3 z-[600] w-full max-w-[380px] sm:max-w-[420px] max-h-[90%] overflow-y-auto">
              <CountryTrendChart
                country={chartCountry}
                lang={lang}
                compact
                onClose={() => setChartCountry(null)}
              />
            </div>
          )}
        </div>

        {/* المكون الجانبي: لوحة الملخصات التاريخية والسياسية وسجل تغيير القادة */}
        {sidePanelCountry && (
          <div className="absolute inset-y-0 end-0 z-[600] w-full max-w-[440px] lg:relative lg:max-w-none lg:w-5/12 xl:w-2/5 h-full overflow-hidden border-s border-slate-800 bg-slate-950/95 shadow-2xl">
            <CountrySidePanel
              country={sidePanelCountry}
              lang={lang}
              onClose={handleCloseSidePanel}
              onOpenFullDossier={() => onSelectCountry(sidePanelCountry)}
              onOpenTrendChart={() => setChartCountry(sidePanelCountry)}
              onOpenComparison={onOpenComparison}
            />
          </div>
        )}
      </div>
    </div>
  );
}
