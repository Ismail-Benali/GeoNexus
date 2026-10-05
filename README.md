# GeoNexus 2026

**Global Geopolitical & Intelligence Platform**
**منصة جيوسياسية واستخباراتية عالمية**
<img width="720" height="470" alt="GeoNexus-Logo" src="https://github.com/user-attachments/assets/81ac7a64-a110-494d-91ad-b72ece5d2f54" />


[![Live Demo](https://img.shields.io/badge/live-ismail--benali.github.io-2ea44f)](https://ismail-benali.github.io/GeoNexus/)
[![React](https://img.shields.io/badge/React-19-61dafb)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646cff)](https://vite.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-10b981.svg)](LICENSE)

[English](#about) | [العربية](#عن-المشروع)

---

## About

**GeoNexus 2026** is a browser-based geopolitical intelligence platform that turns raw
open data into a navigable picture of the world: every sovereign state on an interactive
map, the alliances they belong to, who currently leads them, and what is happening right
now.

It is built around three ideas:

1. **Coverage over guesswork.** All **196** countries carry a structured profile — capital,
   population, government regime, military budget, region, and alliance memberships.
2. **Live where it matters.** Static facts stay static; anything that changes (news,
   officeholders, portraits) is fetched at runtime from free, key-less sources and cached
   locally so repeat visits are instant.
3. **No keys, no paywall, no tracking.** Every upstream source is a public endpoint. There
   are no API keys, no accounts, and no telemetry. Clone it and it runs.

Deep-dive **dossiers** — political parties, top corporations, money-laundering /
human-trafficking / terrorism indicators, and historical timelines — are currently authored
for **16** priority countries (see [Coverage](#coverage)). The remaining countries have
full base profiles and automatically pick up live leader data.

### عن المشروع

**GeoNexus 2026** هي منصة استخبارات جيوسياسية تعمل داخل المتصفح، تحوّل البيانات المفتوحة
إلى صورة متكاملة عن العالم: كل دولة ذات سيادة على خريطة تفاعلية، التحالفات التي تنتمي إليها،
من يقودها حالياً، وما الذي يحدث في هذه اللحظة.

بُنيت المنصة على ثلاثة مبادئ:

1. **التغطية قبل التخمين.** كل الدول الـ **196** تملك ملفاً منظماً: العاصمة، عدد السكان،
   نظام الحكم، الميزانية العسكرية، المنطقة، والتحالفات.
2. **البيانات الحيّة حيث تهم.** المعلومات الثابتة تبقى ثابتة، وأي شيء يتغيّر (الأخبار،
   القادة، الصور) يُجلب وقت التشغيل من مصادر مجانية بلا مفاتيح، ويُحفظ محلياً لتسريع
   الزيارات التالية.
3. **بلا مفاتيح، بلا اشتراكات، بلا تتبّع.** كل المصادر المستخدمة نقاط عامة. لا مفاتيح API،
   ولا حسابات، ولا تتبع. انسخ المشروع وشغّله.

الملفات التفصيلية — الأحزاب، الشركات الكبرى، مؤشرات غسيل الأموال والاتجار بالبشر
والإرهاب، والخطوط الزمنية التاريخية — مكتوبة حالياً لـ **16** دولة ذات أولوية. بقية الدول
لديها ملفات أساسية كاملة وتستفيد تلقائياً من بيانات القادة الحيّة.

---

## Features

| Feature | English | العربية |
| --- | --- | --- |
| Interactive map | Leaflet map with a marker per country, 3 tile styles: OpenStreetMap, CARTO Dark, OpenTopo | خريطة تفاعلية بعلامة لكل دولة و3 أنماط للخرائط |
| Country profiles | Capital, population, regime, military budget, region, alliances | ملفات كاملة لكل دولة |
| Live news bar | Multi-source ticker, Arabic + English, refreshes every 10 min | شريط أخبار حيّ متعدد المصادر يتحدّث كل 10 دقائق |
| Live leader data | Head of state + head of government, official portraits, straight from Wikidata | القادة والصور الرسمية مباشرة من Wikidata |
| Alliance explorer | 33 alliances incl. UN, NATO, BRICS, SCO with member lists | 33 تحالفاً مع قوائم الأعضاء |
| Deep dossiers | 16 countries: parties, corporations, risk indicators, history | 16 دولة بملفات تفصيلية |
| Search | `Ctrl+K` / `⌘K` fuzzy search over countries, leaders, parties, companies | بحث فوري عن الدول والقادة والأحزاب والشركات |
| Flags & emblems | Official SVG flags via FlagCDN + coat of arms | أعلام رسمية وشعارات |
| Bilingual | Arabic (default, full RTL) and English | العربية افتراضية مع RTL كامل |

---

## Data sources

All sources are free and public. Nothing here requires an API key.

| What | Source |
| --- | --- |
| Country reference data (196 states) | Built-in dataset, `src/data/core/*` |
| Leaders, portraits, parties | [Wikidata](https://www.wikidata.org) via SPARQL (`P35`, `P6`, `P17`, `P31`) |
| ISO code → Wikidata QID map | Generated from Wikidata `P297` |
| News (primary) | [FreeNewsApi](https://freenewsapi.ai) |
| News (RSS bridge) | [RSS2JSON](https://rss2json.com) — BBC Arabic/English, DW Arabic, France24 Arabic, Al Jazeera, The Guardian |
| News (fallback) | [GDELT Project](https://www.gdeltproject.org) |
| Base maps | [OpenStreetMap](https://www.openstreetmap.org/copyright), [CARTO](https://carto.com/basemaps/), [OpenTopoMap](https://opentopomap.org) |
| Flags | [FlagCDN](https://flagcdn.com) |
| Coat of arms | [coat-of-arms](https://github.com/scripta/coat-of-arms) via jsDelivr |

**How Wikidata mapping works:** each ISO 3166-1 alpha-2 code is resolved to a Wikidata QID
ahead of time (`src/data/wikidataMap.js`). At runtime the app queries current
`P35` (head of state) and `P6` (head of government) statements, discards any that carry an
end date (`P582`), and counts political parties via `P17` + `P31/Q7278`. Results are cached
in memory and in `localStorage` for **7 days**.

---

## Tech stack

- **React 19** + **Vite 8**
- **Tailwind CSS 4** (via `@tailwindcss/vite`)
- **Leaflet 1.9** + **react-leaflet 5**
- **lucide-react** icons
- **oxlint** for linting
- No backend, no database, no server

---

## Getting started

```bash
# Clone
git clone https://github.com/Ismail-Benali/GeoNexus.git
cd GeoNexus

# Install (Node 20+ recommended; CI uses Node 22)
npm install

# Dev server on http://localhost:3000
npm run dev

# Production build
npm run build
```

No environment variables are required — see `.env.example`.

> **Note:** use `npm install`, not `npm ci`. The committed lock file does not include
> Tailwind's platform-specific optional binaries, so `npm ci` will refuse to run.

### Scripts

| Script | Does |
| --- | --- |
| `npm run dev` | Dev server, host `0.0.0.0`, port `3000` |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | oxlint |
| `npm run smoke` | SSR-builds every component and asserts each one renders |

---

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which installs, builds, and
publishes `dist/` to GitHub Pages.

**Live site:** https://ismail-benali.github.io/GeoNexus/

For a fork, update the Pages source to your own repository in
**Settings → Pages**.

---

## Coverage

| Region | Countries |
| --- | --- |
| Africa | 54 |
| Asia | 48 |
| Europe | 45 |
| North America | 23 |
| South America | 12 |
| Oceania | 14 |
| **Total** | **196** |

Alliances tracked: **33** (including the UN as a 196-member bloc).

---

## Data accuracy & limitations

Please read this before citing anything from the platform.

- **Dossier depth is uneven.** All 196 countries have base profiles, but the detailed
  dossiers (parties, corporations, risk indicators, historical events) exist for 16
  countries only.
- **Risk indicators are open-source estimates,** not legal or regulatory findings.
- **Military budgets are estimates** derived from reporting such as SIPRI and IIMR, not
  audited figures.
- **"Number of parties" is not a headcount of major parties.** It counts political parties
  *documented in Wikidata* for that country, which includes regional, historical, and
  local parties. France and Germany both return several hundred. Treat it as a rough
  indicator of political-party density, not as a precise figure.
- **Live data depends on third-party free endpoints.** FreeNewsApi and RSS2JSON are
  community services and may rate-limit or go down; GDELT rate-limits aggressively. If all
  sources fail, the ticker falls back to bundled static headlines rather than showing
  nothing.
- **Wikidata is incomplete and occasionally wrong.** Leaders are shown as Wikidata records
  them, with end-dated statements filtered out.
- **Leader UI is opt-in per country** and depends on that country being present in the QID
  map (196 of 196 are).

---

## Credits

Map data © OpenStreetMap contributors. Flags via FlagCDN, coats of arms via the
`coat-of-arms` project. Country facts from Wikidata (CC0). News headlines remain the
property of their respective publishers and are fetched by reference, not redistributed.

---

## Contributing

Issues and pull requests are welcome. If you add a country dossier, keep both `ar` and `en`
strings — the app renders Arabic by default and RTL layout depends on the Arabic fields
being present.

---

## License

Released under the [MIT License](LICENSE).

The code is MIT-licensed. The **data** it displays is not, and carries its own terms:

| Layer | Terms |
| --- | --- |
| Source code | MIT (this repo) |
| Country facts | [Wikidata](https://www.wikidata.org) — CC0 |
| Economic / military indicators | The World Bank, World Development Indicators — [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), attribution required |
| Base map tiles | © OpenStreetMap contributors ([ODbL](https://www.openstreetmap.org/copyright)) |
| Flags | [FlagCDN](https://flagcdn.com) — flags are public-domain government works, but FlagCDN itself is a third-party service |
| Coat of arms | [coat-of-arms](https://github.com/scripta/coat-of-arms) project |
| News headlines | Property of their respective publishers; fetched by reference, never redistributed |

MIT requires the copyright notice to be preserved when redistributing the code.
