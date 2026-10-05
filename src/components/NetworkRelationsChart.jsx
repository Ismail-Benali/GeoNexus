import { useState, useMemo } from 'react';
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
} from 'recharts';
import { Network } from 'lucide-react';
import { getCountryRelations } from '../data/geopoliticalRelations';
import { translateText } from '../utils/translator';

/**
 * مخصص أشكال العقد والروابط في المخطط الشبكي باستخدام Recharts
 */
function NetworkNodeShape(props) {
  const { cx, cy, payload } = props;
  if (typeof cx !== 'number' || typeof cy !== 'number') return null;

  const isCenter = payload?.isCenter;
  const isAlly = payload?.type === 'ally';
  const isRival = payload?.type === 'rival';

  // خط الرابط من المركز إلى العقدة
  const lineStroke = isAlly ? '#10b981' : isRival ? '#f43f5e' : 'transparent';
  const strokeDash = isRival ? '4 3' : undefined;

  return (
    <g className="cursor-pointer transition-all duration-200">
      {/* رسم الرابط الشبكي إذا لم تكن العقدة هي المركز */}
      {!isCenter && (
        <line
          x1={props.centerX ?? 150}
          y1={props.centerY ?? 130}
          x2={cx}
          y2={cy}
          stroke={lineStroke}
          strokeWidth={isAlly ? 1.8 : 1.5}
          strokeDasharray={strokeDash}
          opacity={0.65}
        />
      )}

      {/* العقدة المركزية للدولة المختارة */}
      {isCenter ? (
        <g>
          <circle cx={cx} cy={cy} r={24} fill="#0284c7" fillOpacity={0.2} stroke="#38bdf8" strokeWidth={2} className="animate-pulse" />
          <circle cx={cx} cy={cy} r={18} fill="#0f172a" stroke="#0284c7" strokeWidth={2} />
          <text x={cx} y={cy + 5} textAnchor="middle" fontSize={15} className="select-none pointer-events-none">
            {payload.flag || '🌐'}
          </text>
          <text x={cx} y={cy + 30} textAnchor="middle" fontSize={10} fontWeight="bold" fill="#ffffff" className="select-none pointer-events-none">
            {payload.name}
          </text>
        </g>
      ) : (
        /* العقد المحيطة (حلفاء ومنافسون) */
        <g>
          <circle
            cx={cx}
            cy={cy}
            r={15}
            fill={isAlly ? '#064e3b' : '#881337'}
            fillOpacity={0.8}
            stroke={isAlly ? '#10b981' : '#f43f5e'}
            strokeWidth={1.8}
          />
          <text x={cx} y={cy + 4} textAnchor="middle" fontSize={11} className="select-none pointer-events-none">
            {payload.flag || '•'}
          </text>
          <text
            x={cx}
            y={cy > (props.centerY ?? 130) ? cy + 18 : cy - 14}
            textAnchor="middle"
            fontSize={9}
            fontWeight="bold"
            fill={isAlly ? '#6ee7b7' : '#fda4af'}
            className="select-none pointer-events-none"
          >
            {payload.name}
          </text>
        </g>
      )}
    </g>
  );
}

/**
 * نافذة التلميح التفاعلية عند التحويم فوق أي عقدة في الشبكة
 */
function NetworkTooltip({ active, payload, isAr }) {
  if (!active || !payload || !payload.length) return null;
  const node = payload[0].payload;
  if (!node) return null;

  if (node.isCenter) {
    return (
      <div className="rounded-xl border border-sky-500/40 bg-slate-950/95 p-2.5 shadow-2xl backdrop-blur text-xs" dir={isAr ? 'rtl' : 'ltr'}>
        <div className="flex items-center gap-1.5 font-bold text-white mb-1">
          <span className="text-base">{node.flag}</span>
          <span>{node.name}</span>
          <span className="rounded bg-sky-500/20 px-1 py-0.2 text-[9px] text-sky-300">{isAr ? 'الدولة المركزية' : 'Focal State'}</span>
        </div>
        <p className="m-0 text-[10px] text-slate-400">
          {isAr ? 'مركز شبكة التحالفات والمنافسات الجيوسياسية' : 'Center of geopolitical network'}
        </p>
      </div>
    );
  }

  const isAlly = node.type === 'ally';

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-950/95 p-2.5 shadow-2xl backdrop-blur max-w-[230px] text-xs" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5 mb-1.5">
        <div className="flex items-center gap-1.5 font-bold text-white">
          <span className="text-base">{node.flag}</span>
          <span>{node.name}</span>
        </div>
        <span
          className={`rounded-full px-2 py-0.5 text-[9px] font-black ${
            isAlly
              ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300'
              : 'bg-rose-500/20 border border-rose-500/40 text-rose-300'
          }`}
        >
          {isAlly ? (isAr ? 'حليف استراتيجي' : 'Ally') : (isAr ? 'منافس جيوسياسي' : 'Rival')}
        </span>
      </div>

      <div className="space-y-1">
        <p className="m-0 text-[11px] leading-relaxed text-slate-300">
          <span className="font-semibold text-slate-400">{isAr ? 'طبيعة العلاقة: ' : 'Relation: '}</span>
          {translateText(node.relation, lang)}
        </p>
        {node.alliance && (
          <p className="m-0 text-[10px] text-emerald-400">
            <span className="text-slate-400">{isAr ? 'الإطار: ' : 'Framework: '}</span>
            {translateText(node.alliance, lang)}
          </p>
        )}
        {node.conflict && (
          <p className="m-0 text-[10px] text-rose-400">
            <span className="text-slate-400">{isAr ? 'ملف النزاع: ' : 'Dispute: '}</span>
            {translateText(node.conflict, lang)}
          </p>
        )}
      </div>
    </div>
  );
}

export default function NetworkRelationsChart({ country, lang = 'ar' }) {
  const isAr = lang === 'ar';
  const [filterMode, setFilterMode] = useState('all'); // 'all' | 'allies' | 'rivals'

  const relations = useMemo(() => getCountryRelations(country, lang), [country, lang]);

  const filteredNodes = useMemo(() => {
    if (filterMode === 'all') return relations.nodes;
    if (filterMode === 'allies') {
      return relations.nodes.filter((n) => n.isCenter || n.type === 'ally');
    }
    return relations.nodes.filter((n) => n.isCenter || n.type === 'rival');
  }, [relations.nodes, filterMode]);

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 space-y-3" dir={isAr ? 'rtl' : 'ltr'}>
      {/* الترويسة والأزرار الانتقائية */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-1.5">
          <Network className="h-4 w-4 text-sky-400" />
          <h5 className="m-0 text-xs font-black text-white">
            {isAr ? 'مخطط الشبكة الجيوسياسية (Recharts Network)' : 'Geopolitical Network Chart'}
          </h5>
        </div>

        <div className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-950 p-0.5 text-[10px]">
          <button
            onClick={() => setFilterMode('all')}
            className={`rounded px-2 py-0.5 font-bold transition ${
              filterMode === 'all' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            {isAr ? 'الكل' : 'All'} ({relations.allies.length + relations.rivals.length})
          </button>
          <button
            onClick={() => setFilterMode('allies')}
            className={`rounded px-2 py-0.5 font-bold transition ${
              filterMode === 'allies' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            {isAr ? 'التحالفات' : 'Allies'} ({relations.allies.length})
          </button>
          <button
            onClick={() => setFilterMode('rivals')}
            className={`rounded px-2 py-0.5 font-bold transition ${
              filterMode === 'rivals' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            {isAr ? 'المنافسات' : 'Rivals'} ({relations.rivals.length})
          </button>
        </div>
      </div>

      {/* المخطط الشبكي الفعلي المبني بواسطة مكتبة Recharts */}
      <div className="relative h-64 w-full rounded-xl border border-slate-800/80 bg-slate-950/80 overflow-hidden">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 25, right: 35, bottom: 25, left: 35 }}>
            <XAxis type="number" dataKey="x" domain={[-100, 100]} hide />
            <YAxis type="number" dataKey="y" domain={[-100, 100]} hide />
            <ZAxis type="number" dataKey="size" range={[60, 200]} />
            <Tooltip content={<NetworkTooltip isAr={isAr} />} cursor={{ strokeDasharray: '3 3' }} />
            <Scatter
              data={filteredNodes}
              shape={(props) => (
                <NetworkNodeShape
                  {...props}
                  centerX={180}
                  centerY={128}
                />
              )}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* دليل الشبكة والألوان */}
      <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-800/80 pt-2 flex-wrap gap-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-slate-300 font-medium">{isAr ? 'تحالفات ومعاهدات دفاعية' : 'Defense Alliances'}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-rose-400" />
          <span className="text-slate-300 font-medium">{isAr ? 'منافسات ونزاعات جيوسياسية' : 'Rivalries & Disputes'}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          <span className="text-slate-300 font-medium">{isAr ? 'المركز: الدولة' : 'Center: Target'}</span>
        </div>
      </div>
    </div>
  );
}
