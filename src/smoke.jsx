import { renderToStaticMarkup } from 'react-dom/server';
import { geopoliticalData } from './data/index.js';
import Navbar from './components/Navbar.jsx';
import DashboardSidebar from './components/DashboardSidebar.jsx';
import AnalyticsPanel from './components/AnalyticsPanel.jsx';
import IntelligenceBriefing from './components/IntelligenceBriefing.jsx';
import SearchModal from './components/SearchModal.jsx';
import CountryDetailModal from './components/CountryDetailModal.jsx';
import CountryTrendChart from './components/CountryTrendChart.jsx';
import NetworkRelationsChart from './components/NetworkRelationsChart.jsx';
import MilitaryReadinessCard from './components/MilitaryReadinessCard.jsx';
import EconomicIndicatorsSection from './components/EconomicIndicatorsSection.jsx';
import HotspotsPanel from './components/HotspotsPanel.jsx';
import CountrySidePanel from './components/CountrySidePanel.jsx';
import GlobalIntelligenceStream from './components/GlobalIntelligenceStream.jsx';
import AllianceAnalyticsSection from './components/AllianceAnalyticsSection.jsx';
import HistoricalArchivePanel from './components/HistoricalArchivePanel.jsx';
import NewsTickerBar from './components/NewsTickerBar.jsx';
import { LeadershipProvider } from './context/LeadershipContext.jsx';

const ar = geopoliticalData.ar;
const en = geopoliticalData.en;
const noop = () => {};

/** اختبارات العرض — تُبنى ديناميكياً لتفادي تحذير مفاتيح JSX */
const checks = [];
const add = (name, node) => checks.push({ name, node });

add('Navbar', <Navbar lang="ar" setLang={noop} onOpenSearch={noop} activeTab="map" setActiveTab={noop} />);
add('Sidebar(all)', <DashboardSidebar data={ar} lang="ar" onSelectCountry={noop} selectedContinent="all" setSelectedContinent={noop} />);
add('Sidebar(africa)', <DashboardSidebar data={ar} lang="ar" onSelectCountry={noop} selectedContinent="africa" setSelectedContinent={noop} />);
add('Sidebar(europe/en)', <DashboardSidebar data={en} lang="en" onSelectCountry={noop} selectedContinent="europe" setSelectedContinent={noop} />);
add('AnalyticsPanel(ar)', <AnalyticsPanel data={ar} lang="ar" onSelectCountry={noop} />);
add('AnalyticsPanel(en)', <AnalyticsPanel data={en} lang="en" onSelectCountry={noop} />);
add('Briefing(ar)', <IntelligenceBriefing lang="ar" countries={ar.countries} />);
add('Briefing(en)', <IntelligenceBriefing lang="en" countries={en.countries} />);
add('SearchModal(ar)', <SearchModal data={ar} lang="ar" onClose={noop} onSelectCountry={noop} />);
add('SearchModal(en)', <SearchModal data={en} lang="en" onClose={noop} onSelectCountry={noop} />);
add('NewsTickerBar', <NewsTickerBar tickerItems={ar.newsTicker} lang="ar" />);

const detailed = ar.countries.filter((c) => c.detailed);
const basic = ar.countries.filter((c) => !c.detailed);

add('CountryTrendChart(gdp)', <CountryTrendChart country={detailed[0]} lang="ar" />);
add('CountryTrendChart(pop)', <CountryTrendChart country={detailed[0]} lang="en" />);
add('NetworkRelationsChart(ar)', <NetworkRelationsChart country={detailed[0]} lang="ar" />);
add('NetworkRelationsChart(en)', <NetworkRelationsChart country={detailed[1]} lang="en" />);
add('MilitaryReadinessCard(ar)', <MilitaryReadinessCard country={detailed[0]} lang="ar" />);
add('MilitaryReadinessCard(en)', <MilitaryReadinessCard country={detailed[1]} lang="en" />);
add('EconomicIndicatorsSection(ar)', <EconomicIndicatorsSection country={detailed[0]} lang="ar" />);
add('EconomicIndicatorsSection(en)', <EconomicIndicatorsSection country={detailed[1]} lang="en" />);
add('HotspotsPanel(ar)', <HotspotsPanel lang="ar" onFocusOnMap={noop} />);
add('HotspotsPanel(en)', <HotspotsPanel lang="en" onFocusOnMap={noop} />);
add('GlobalStream(ar)', <GlobalIntelligenceStream lang="ar" />);
add('GlobalStream(en)', <GlobalIntelligenceStream lang="en" />);
add('AllianceAnalytics(ar)', <AllianceAnalyticsSection lang="ar" onSelectCountry={noop} />);
add('AllianceAnalytics(en)', <AllianceAnalyticsSection lang="en" onSelectCountry={noop} />);
add('HistoricalArchive(ar)', <HistoricalArchivePanel lang="ar" onFocusOnMap={noop} />);
add('HistoricalArchive(en)', <HistoricalArchivePanel lang="en" onFocusOnMap={noop} />);
add(
  'CountrySidePanel(ar)',
  <LeadershipProvider>
    <CountrySidePanel country={detailed[0]} lang="ar" onClose={noop} onOpenFullDossier={noop} onOpenTrendChart={noop} />
  </LeadershipProvider>,
);
add(
  'CountrySidePanel(en)',
  <LeadershipProvider>
    <CountrySidePanel country={detailed[1]} lang="en" onClose={noop} onOpenFullDossier={noop} onOpenTrendChart={noop} />
  </LeadershipProvider>,
);

for (const c of [...detailed.slice(0, 3), ...basic.slice(0, 3)]) {
  add(
    `CountryModal:${c.id}:${c.detailed ? 'full' : 'basic'}`,
    <LeadershipProvider>
      <CountryDetailModal country={c} lang="ar" onClose={noop} />
    </LeadershipProvider>,
  );
}

let failed = 0;
for (const { name, node } of checks) {
  try {
    const html = renderToStaticMarkup(node);
    if (html.length < 100) throw new Error(`suspiciously small output (${html.length})`);
    console.log(`  OK   ${name.padEnd(28)} ${html.length} chars`);
  } catch (e) {
    failed += 1;
    console.log(`  FAIL ${name.padEnd(28)} ${e.message}`);
  }
}

console.log(failed === 0 ? `\nAll ${checks.length} components rendered.` : `\n${failed} FAILED`);
if (failed) process.exit(1);