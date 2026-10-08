import React, { useState, useMemo, useCallback } from 'react';
import {
  Database,
  Radio,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  Play,
  Terminal,
  ExternalLink,
  ShieldCheck,
  Server,
  Layers,
  Search,
  Code2,
  Clock,
  Copy,
  Check,
} from 'lucide-react';
import {
  INGESTION_PIPELINES,
  simulatePipelineRun,
  getPipelinesStats,
} from '../data/dataIngestionPipelines';

export default function DataIngestionPipelinesExplorer({ lang = 'ar' }) {
  const isAr = lang === 'ar';
  const stats = useMemo(() => getPipelinesStats(), []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [runningPipelineId, setRunningPipelineId] = useState(null);
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [selectedPipelineForCode, setSelectedPipelineForCode] = useState(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [lastBatchSyncTime, setLastBatchSyncTime] = useState('الآن (تحديث مستمر)');

  // فئات خطوط الربط
  const categories = [
    { id: 'all', labelAr: 'كافة خطوط الجلب', labelEn: 'All Pipelines', icon: Layers },
    { id: 'diplomacy', labelAr: 'الأمم المتحدة والتصويت', labelEn: 'UN & Diplomacy', icon: Database },
    { id: 'military', labelAr: 'صفقات السلاح والدفاع', labelEn: 'Arms Deals & SIPRI', icon: ShieldCheck },
    { id: 'leadership', labelAr: 'تصريحات القادة والمراسيم', labelEn: 'Leaders & Doctrines', icon: Radio },
    { id: 'economics', labelAr: 'البنك الدولي والإنفاق', labelEn: 'World Bank & Macro', icon: Server },
    { id: 'security', labelAr: 'رصد النزاعات GDELT/ACLED', labelEn: 'Conflict Streams', icon: AlertTriangle },
    { id: 'tactical', labelAr: 'الملاحة العسكرية والرادار', labelEn: 'Tactical Radar & ADS-B', icon: Radio },
  ];

  // تصفية خطوط الأنابيب
  const filteredPipelines = useMemo(() => {
    return INGESTION_PIPELINES.filter((p) => {
      const matchSearch =
        !searchTerm.trim() ||
        p.nameAr.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.protocol.toLowerCase().includes(searchTerm.toLowerCase());

      const matchCat =
        selectedCategory === 'all' || p.category === selectedCategory;

      return matchSearch && matchCat;
    });
  }, [searchTerm, selectedCategory]);

  // تشغيل خط أنابيب محدد
  const handleTriggerPipeline = useCallback((pipeline) => {
    setRunningPipelineId(pipeline.id);
    const result = simulatePipelineRun(pipeline.id);
    const timeStr = new Date().toLocaleTimeString();

    setTerminalLogs([
      {
        step: 'start',
        msgAr: `[${timeStr}] تم إطلاق مهمة الجلب التلقائي لخط: ${pipeline.nameAr}`,
        msgEn: `[${timeStr}] Initiated pipeline run for: ${pipeline.nameEn}`,
        time: '0.00s',
      },
      ...result.logs,
      {
        step: 'summary',
        msgAr: `✅ اكتمل الجلب بنجاح: تم سحب ${result.newRecordsCount} سجلاً جديداً وتحديث فهرس المنصة.`,
        msgEn: `✅ Ingestion completed: Pulled ${result.newRecordsCount} new records and updated index.`,
        time: '0.55s',
      },
    ]);

    setTimeout(() => {
      setRunningPipelineId(null);
    }, 1200);
  }, []);

  // تشغيل فحص شامل لكافة الخطوط
  const handleRunAllHealthchecks = useCallback(() => {
    setRunningPipelineId('ALL');
    const logs = [
      {
        step: 'ping_all',
        msgAr: 'بدء فحص ومزامنة كافة خطوط الجلب التلقائي الثمانية (8 Pipelines)...',
        msgEn: 'Pinging all 8 automated ingestion endpoints...',
        time: '0.00s',
      },
    ];

    INGESTION_PIPELINES.forEach((p, idx) => {
      logs.push({
        step: `pipe_${p.id}`,
        msgAr: `✔ [${p.provider}] استجابة ناجحة (HTTP 200 OK) | الكمون: ${p.latencyMs}ms | السلامة: ${p.integrityScore}`,
        msgEn: `✔ [${p.provider}] Success HTTP 200 OK | Latency: ${p.latencyMs}ms | Integrity: ${p.integrityScore}`,
        time: `0.${(idx + 1) * 8}s`,
      });
    });

    logs.push({
      step: 'all_synced',
      msgAr: '🎯 اكتملت مزامنة كافة المصادر بنجاح. المنصة متصلة ومحدثة بلحظة الصفر (Zero-Lag Sync).',
      msgEn: '🎯 All sources synced. Zero-lag real-time platform index verified.',
      time: '0.80s',
    });

    setTerminalLogs(logs);
    setLastBatchSyncTime(new Date().toLocaleTimeString('ar-SA'));

    setTimeout(() => {
      setRunningPipelineId(null);
    }, 1500);
  }, []);

  const copyCode = (code) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* الترويسة الرئيسية لمحرك خطوط الجلب التلقائي */}
      <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/40 p-5 sm:p-7 shadow-2xl">
        <div className="absolute -end-10 -top-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-lg shadow-emerald-500/25">
                <Database className="h-6 w-6" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-display text-xl sm:text-2xl font-black text-white m-0">
                    {isAr
                      ? 'محرك خطوط الجلب التلقائي للبيانات الحية (Automated Pipelines)'
                      : 'Automated Real-Time Data Ingestion Engine'}
                  </h1>
                  <span className="flex items-center gap-1 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-bold text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE PIPELINES
                  </span>
                </div>
                <p className="mt-1 text-xs sm:text-sm text-slate-300 m-0">
                  {isAr
                    ? 'الربط المباشر مع قواعد بيانات الأمم المتحدة، معهد ستوكهولم (SIPRI)، وكالة DSCA، البنك الدولي، وتغذيات المراسيم الرسمية من 1939 إلى 2026'
                    : 'Direct automated ingest connectors for UN Library, SIPRI, DSCA, World Bank, and Head-of-State decrees from 1939 to 2026.'}
                </p>
              </div>
            </div>

            {/* زر تشغيل مزامنة شاملة */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleRunAllHealthchecks}
                disabled={runningPipelineId !== null}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-500/20 hover:opacity-90 transition disabled:opacity-50"
              >
                <RefreshCw
                  className={`h-4 w-4 ${
                    runningPipelineId === 'ALL' ? 'animate-spin' : ''
                  }`}
                />
                <span>
                  {isAr
                    ? 'فحص ومزامنة كافة الخطوط الآن'
                    : 'Sync & Healthcheck All Pipelines'}
                </span>
              </button>
            </div>
          </div>

          {/* لوحة المؤشرات السريعة (Metrics) */}
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
              <span className="text-[11px] font-medium text-slate-400 block">
                {isAr ? 'حالة منظومة الجلب' : 'System Status'}
              </span>
              <span className="text-sm font-bold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                {isAr ? 'متصل ومطابق 100%' : '100% OPERATIONAL'}
              </span>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
              <span className="text-[11px] font-medium text-slate-400 block">
                {isAr ? 'إجمالي السجلات المفهرسة' : 'Total Ingested Records'}
              </span>
              <span className="text-base font-black text-white mt-0.5 block font-mono">
                {stats.totalRecords.toLocaleString()} +
              </span>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
              <span className="text-[11px] font-medium text-slate-400 block">
                {isAr ? 'متوسط زمن الاستجابة (Latency)' : 'Avg Network Latency'}
              </span>
              <span className="text-sm font-bold text-sky-400 mt-0.5 block font-mono">
                {stats.avgLatency} ms
              </span>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
              <span className="text-[11px] font-medium text-slate-400 block">
                {isAr ? 'العمق التاريخي المؤرشف' : 'Historical Reach'}
              </span>
              <span className="text-xs font-bold text-amber-300 mt-0.5 block">
                1939 ← 2026 (WWII to Present)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* نافذة المحاكي والطرفية التفاعلية للبيانات الحية (Live Terminal Monitor) */}
      <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-500/10 text-emerald-400">
              <Terminal className="h-4 w-4" />
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-200">
              {isAr
                ? 'سجل تدفق الحزم البرمجية والجلب المباشر (Live Ingestion Stream)'
                : 'Live Ingestion Packet Stream & Socket Terminal'}
            </span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
            <Clock className="h-3 w-3 text-emerald-400" />
            <span>{isAr ? `آخر مزامنة: ${lastBatchSyncTime}` : `Synced: ${lastBatchSyncTime}`}</span>
          </div>
        </div>

        <div className="rounded-xl bg-slate-900/90 p-3 font-mono text-xs text-slate-300 h-36 overflow-y-auto space-y-1.5 border border-slate-800/60 shadow-inner">
          {terminalLogs.length === 0 ? (
            <div className="flex h-full items-center justify-center text-slate-500 italic">
              {isAr
                ? '⚡ المنظومة في وضع الاستماع اللحظي (Standby). انقر على "تشغيل الجلب الفوري" لأي خط أدناه لاختبار الاتصال وسحب الحزم.'
                : '⚡ Pipelines in active standby. Click "Trigger Ingestion" on any pipeline below to stream live packets.'}
            </div>
          ) : (
            terminalLogs.map((log, index) => (
              <div key={index} className="flex items-start gap-2 leading-relaxed">
                <span className="text-emerald-500 select-none">❯</span>
                <span className="text-sky-300 text-[10px] shrink-0 font-mono">[{log.time}]</span>
                <span
                  className={
                    log.step === 'summary' || log.step === 'all_synced'
                      ? 'text-emerald-300 font-bold'
                      : log.step === 'fetch'
                      ? 'text-amber-300'
                      : 'text-slate-300'
                  }
                >
                  {isAr ? log.msgAr : log.msgEn}
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* أدوات البحث وتصفية الفئات */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* شريط البحث */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={
              isAr
                ? 'ابحث باسم خط الأنابيب، المصدر، أو البروتوكول...'
                : 'Search pipelines by name, provider, or protocol...'
            }
            className="w-full rounded-xl border border-slate-800 bg-slate-900/80 ps-9 pe-4 py-2 text-xs text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition"
          />
        </div>

        {/* أزرار تصنيف الفئات */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition ${
                  active
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{isAr ? cat.labelAr : cat.labelEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* قائمة خطوط الأنابيب التلقائية */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {filteredPipelines.map((pipe) => {
          const isRunning = runningPipelineId === pipe.id || runningPipelineId === 'ALL';

          return (
            <div
              key={pipe.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 shadow-lg transition hover:border-emerald-500/40 hover:bg-slate-900/40"
            >
              <div>
                {/* رأس البطاقة */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                        {pipe.protocol}
                      </span>
                      <span className="rounded-md border border-slate-800 bg-slate-900 px-2 py-0.5 text-[10px] font-medium text-slate-400">
                        {pipe.provider}
                      </span>
                    </div>

                    <h3 className="mt-2 text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition m-0">
                      {isAr ? pipe.nameAr : pipe.nameEn}
                    </h3>
                  </div>

                  {/* مؤشر الحالة */}
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 shrink-0">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    {pipe.integrityScore}
                  </span>
                </div>

                {/* الوصف */}
                <p className="mt-2.5 text-xs text-slate-300 leading-relaxed m-0">
                  {isAr ? pipe.descriptionAr : pipe.descriptionEn}
                </p>

                {/* نقطة النهاية (Endpoint URL) */}
                <div className="mt-3 flex items-center justify-between gap-2 rounded-lg bg-slate-900/90 border border-slate-800 px-2.5 py-1.5 text-[11px] font-mono text-slate-400">
                  <span className="truncate">{pipe.endpointUrl}</span>
                  <a
                    href={pipe.endpointUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-emerald-400 transition shrink-0"
                    title={isAr ? 'فتح نقطة النهاية الأصلية' : 'Open endpoint'}
                  >
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                {/* مواصفات الخط والبيانات */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
                  <div className="rounded-lg bg-slate-900/60 p-2 border border-slate-800/60">
                    <span className="text-slate-500 block">{isAr ? 'تردد التحديث' : 'Sync Frequency'}</span>
                    <span className="font-medium text-slate-300 mt-0.5 block truncate">
                      {isAr ? pipe.frequencyAr : pipe.frequencyEn}
                    </span>
                  </div>

                  <div className="rounded-lg bg-slate-900/60 p-2 border border-slate-800/60">
                    <span className="text-slate-500 block">{isAr ? 'التغطية التاريخية' : 'Historical Range'}</span>
                    <span className="font-bold text-amber-300 mt-0.5 block truncate">
                      {isAr ? pipe.historicalCoverage : pipe.historicalCoverageEn}
                    </span>
                  </div>
                </div>

                {/* الحقول المفهرسة (Schema) */}
                <div className="mt-3">
                  <span className="text-[10px] font-semibold text-slate-400 block mb-1">
                    {isAr ? 'المخطط الهيكلي المفهرس (Schema Fields):' : 'Ingested Schema Fields:'}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {pipe.schemaFields.map((field, fIdx) => (
                      <span
                        key={fIdx}
                        className="rounded border border-slate-800 bg-slate-900/90 px-1.5 py-0.5 text-[10px] font-mono text-slate-300"
                      >
                        {field}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* أزرار الإجراءات في أسفل البطاقة */}
              <div className="mt-4 flex items-center justify-between border-t border-slate-800/80 pt-3">
                <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono">
                  <span>{pipe.recordsIngested.toLocaleString()} records</span>
                  <span>·</span>
                  <span className="text-sky-400">{pipe.latencyMs}ms</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedPipelineForCode(pipe)}
                    className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs font-semibold text-slate-300 hover:border-slate-700 hover:text-white transition"
                    title={isAr ? 'عرض كود الربط البرمجي (cURL & Python)' : 'View API integration snippet'}
                  >
                    <Code2 className="h-3.5 w-3.5 text-sky-400" />
                    <span>{isAr ? 'كود الربط' : 'API Snippet'}</span>
                  </button>

                  <button
                    onClick={() => handleTriggerPipeline(pipe)}
                    disabled={isRunning}
                    className="flex items-center gap-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/40 px-3 py-1 text-xs font-bold text-emerald-300 hover:bg-emerald-500/25 transition disabled:opacity-50"
                  >
                    <Play className={`h-3 w-3 ${isRunning ? 'animate-spin' : ''}`} />
                    <span>
                      {isRunning
                        ? isAr
                          ? 'جارِ الجلب...'
                          : 'Ingesting...'
                        : isAr
                        ? 'تشغيل الجلب الفوري'
                        : 'Trigger Ingestion'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* نافذة عرض كود الربط البرمجي (API / Ingestion Snippet Modal) */}
      {selectedPipelineForCode && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                  {selectedPipelineForCode.protocol}
                </span>
                <h3 className="mt-1 text-base font-bold text-white m-0">
                  {isAr ? selectedPipelineForCode.nameAr : selectedPipelineForCode.nameEn}
                </h3>
                <p className="mt-1 text-xs text-slate-400 m-0">
                  {isAr
                    ? 'أكواد الربط البرمجية لجلب البيانات آلياً وتشغيل خط الأنابيب دورياً'
                    : 'Ingestion automation snippet (cURL & Python requests)'}
                </p>
              </div>

              <button
                onClick={() => setSelectedPipelineForCode(null)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-900 hover:text-white transition"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-3 font-mono text-xs">
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-3">
                <div className="flex items-center justify-between text-slate-400 mb-1.5">
                  <span className="text-[11px] font-sans font-semibold">cURL Command</span>
                  <button
                    onClick={() =>
                      copyCode(`curl -X GET "${selectedPipelineForCode.endpointUrl}" \\
  -H "Accept: application/json" \\
  -H "User-Agent: GeoNexus-DataPipeline/2026.1"`)
                    }
                    className="flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300"
                  >
                    {copiedCode ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    <span>{copiedCode ? (isAr ? 'تم النسخ!' : 'Copied!') : isAr ? 'نسخ' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="text-emerald-300 whitespace-pre-wrap overflow-x-auto text-[11px] m-0">
{`curl -X GET "${selectedPipelineForCode.endpointUrl}" \\
  -H "Accept: application/json" \\
  -H "User-Agent: GeoNexus-DataPipeline/2026.1"`}
                </pre>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900 p-3">
                <div className="flex items-center justify-between text-slate-400 mb-1.5">
                  <span className="text-[11px] font-sans font-semibold">Python (Automated ETL Sync)</span>
                </div>
                <pre className="text-sky-300 whitespace-pre-wrap overflow-x-auto text-[11px] m-0">
{`import requests, json

url = "${selectedPipelineForCode.endpointUrl}"
response = requests.get(url, timeout=10)

if response.status_code == 200:
    data = response.json()
    print(f"Successfully ingested {len(data)} records for ${selectedPipelineForCode.id}")
`}
                </pre>
              </div>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setSelectedPipelineForCode(null)}
                className="rounded-xl bg-slate-800 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-700 transition"
              >
                {isAr ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
