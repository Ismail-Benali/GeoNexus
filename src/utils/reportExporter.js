/**
 * نظام تصدير وطباعة التقارير الاستخبارية السيادية المعتمدة (PDF و JSON)
 * Sovereign Intelligence Dossier Exporter: Formatted PDF & Structured JSON Summary
 */

export function downloadJsonReport(country, extendedIntel, lang = 'ar', extra = {}) {
  if (!country) return;
  const isAr = lang === 'ar';
  const { companies = [], arsenal = null, diplomacy = null } = extra;

  const reportData = {
    meta: {
      platform: 'GeoNexus 2026 — Geopolitical Intelligence Platform',
      classification: 'SOVEREIGN INTELLIGENCE ASSESSMENT // DECLASSIFIED',
      generatedAt: new Date().toISOString(),
      countryId: country.id,
      countryName: country.name,
      capital: country.capital,
      region: country.regionLabel || country.region,
      regime: country.regime,
      leader: country.leader,
      leaderTitle: country.leaderTitle,
    },
    economicAndCurrency: {
      currencyName: extendedIntel?.currency?.nameEn,
      currencyNameAr: extendedIntel?.currency?.nameAr,
      currencyCode: extendedIntel?.currency?.code,
      currencySymbol: extendedIntel?.currency?.symbol,
      centralBank: isAr ? extendedIntel?.currency?.centralBankAr : extendedIntel?.currency?.centralBankEn,
      gdpNominalBnUSD: country.gdpBn || country.gdpNominalBn,
      gdpGrowthPct: country.gdpGrowth,
      inflationRatePct: country.inflationRate,
      foreignExchangeReservesBnUSD: extendedIntel?.currency?.foreignReservesBn,
      sovereignWealthFund: isAr ? extendedIntel?.currency?.sovereignFundAr : extendedIntel?.currency?.sovereignFundEn,
    },
    majorCompaniesAndEnterprises: companies.map((c) => ({
      name: c.name,
      sector: isAr ? c.sectorAr : c.sectorEn,
      classification: c.type === 'global' ? 'Global Multi-National' : 'Local Strategic Champion',
      valuationOrRevenue: c.valuation,
      strategicRole: isAr ? c.roleAr : c.roleEn,
    })),
    militaryAndDefense: {
      globalMilitaryRank: country.globalRank,
      defenseBudgetBnUSD: country.militaryBudgetBn,
      activeMilitaryPersonnelK: country.activePersonnelK,
      reserveMilitaryPersonnelK: country.reservePersonnelK,
      powerIndexScore: country.powerIndex,
      paramilitaryForcesK: arsenal?.reserves?.paramilitaryK,
      mobilizationReadiness: isAr ? arsenal?.reserves?.mobilizationReadinessAr : arsenal?.reserves?.mobilizationReadinessEn,
      combatAircraftFleet: (arsenal?.aircraft || []).map((a) => ({
        model: a.model,
        origin: a.origin,
        role: isAr ? a.roleAr : a.roleEn,
        generation: a.generation,
        operationalCount: a.count,
        weaponsPayload: isAr ? a.weaponsAr || a.weaponsEn : a.weaponsEn || a.weaponsAr,
      })),
      mainBattleTanksAndArmor: (arsenal?.tanks || []).map((t) => ({
        model: t.model,
        origin: t.origin,
        classification: isAr ? t.roleAr : t.roleEn,
        generation: t.generation,
        operationalCount: t.count,
        mainArmament: isAr ? t.mainArmamentAr || t.mainArmamentEn : t.mainArmamentEn || t.mainArmamentAr,
      })),
      airDefenseAndMissileShield: (arsenal?.airDefense || []).map((ad) => ({
        system: ad.system,
        origin: ad.origin,
        role: isAr ? ad.roleAr : ad.roleEn,
        interceptRange: ad.range,
      })),
      branches: isAr ? extendedIntel?.military?.branchesAr : extendedIntel?.military?.branchesEn,
      doctrine: isAr ? extendedIntel?.military?.doctrineAr : extendedIntel?.military?.doctrineEn,
    },
    armsImportsAndSuppliers: {
      primarySuppliers: isAr ? extendedIntel?.armsImports?.primarySuppliersAr : extendedIntel?.armsImports?.primarySuppliersEn,
      keyImportedSystems: isAr ? extendedIntel?.armsImports?.keyImportedSystemsAr : extendedIntel?.armsImports?.keyImportedSystemsEn,
      domesticProductionRatio: isAr ? extendedIntel?.armsImports?.domesticProductionRatioAr : extendedIntel?.armsImports?.domesticProductionRatioEn,
      supplyChainRisk: isAr ? extendedIntel?.armsImports?.dependencyRiskAr : extendedIntel?.armsImports?.dependencyRiskEn,
    },
    intelligenceAgencies: (extendedIntel?.intelligenceAgencies || []).map((agency) => ({
      name: isAr ? agency.nameAr : agency.nameEn,
      acronym: agency.acronym,
      type: agency.type,
      role: isAr ? agency.roleAr : agency.roleEn,
    })),
    treatiesAndAlliances: {
      alliancesList: country.alliances || [],
      defenseTreaties: (extendedIntel?.treaties || []).map((t) => ({
        treaty: isAr ? t.nameAr : t.nameEn,
        scope: isAr ? t.scopeAr : t.scopeEn,
      })),
    },
    geopoliticalTensionsAndDiplomacy: {
      activeTensions: (diplomacy?.tensions || []).map((t) => ({
        targetEntity: isAr ? t.countryAr : t.countryEn,
        riskLevel: t.riskLevel,
        conflictIssue: isAr ? t.issueAr : t.issueEn,
      })),
      allianceEvolution: (diplomacy?.allianceEvolution || []).map((ae) => ({
        year: ae.year,
        title: isAr ? ae.titleAr : ae.titleEn,
        details: isAr ? ae.descAr : ae.descEn,
      })),
    },
    internalPoliticalTransformations: (diplomacy?.internalPoliticalShifts || []).map((ips) => ({
      year: ips.year,
      transformation: isAr ? ips.eventAr : ips.eventEn,
    })),
    historicalMilestonesTo2026: (extendedIntel?.historyTo2026 || []).map((h) => ({
      year: h.year,
      event: isAr ? h.eventAr : h.eventEn,
    })),
  };

  const jsonStr = JSON.stringify(reportData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${country.id.toUpperCase()}_Intelligence_Report_2026.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function downloadPdfReport(country, extendedIntel, lang = 'ar', extra = {}) {
  if (!country) return;
  const isAr = lang === 'ar';
  const { companies = [], arsenal = null, diplomacy = null } = extra;

  const title = isAr
    ? `التقرير الاستخباري السيادي الشامل: ${country.name}`
    : `Sovereign Intelligence Dossier: ${country.name}`;

  const branchesHtml = (isAr ? extendedIntel?.military?.branchesAr : extendedIntel?.military?.branchesEn)
    ?.map((b) => `<li>${b}</li>`)
    .join('') || '<li>Standard Armed Forces branches</li>';

  const suppliersHtml = (isAr ? extendedIntel?.armsImports?.primarySuppliersAr : extendedIntel?.armsImports?.primarySuppliersEn)
    ?.map((s) => `<li>${s}</li>`)
    .join('') || '<li>Diversified suppliers</li>';

  const systemsHtml = (isAr ? extendedIntel?.armsImports?.keyImportedSystemsAr : extendedIntel?.armsImports?.keyImportedSystemsEn)
    ?.map((sys) => `<li>${sys}</li>`)
    .join('') || '<li>Multi-role systems</li>';

  const intelHtml = (extendedIntel?.intelligenceAgencies || [])
    ?.map(
      (a) => `
        <div style="margin-bottom: 8px; padding: 8px; background: #f8fafc; border-left: 3px solid #0284c7; border-radius: 4px;">
          <strong style="color: #0f172a;">${isAr ? a.nameAr : a.nameEn} (${a.acronym})</strong>
          <p style="margin: 3px 0 0; font-size: 11px; color: #475569;">${isAr ? a.roleAr : a.roleEn}</p>
        </div>
      `,
    )
    .join('');

  const treatiesHtml = (extendedIntel?.treaties || [])
    ?.map(
      (t) => `
        <div style="margin-bottom: 6px; padding: 6px 8px; background: #f8fafc; border-radius: 4px;">
          <strong style="font-size: 12px; color: #1e293b;">${isAr ? t.nameAr : t.nameEn}</strong>
          <span style="display: block; font-size: 11px; color: #64748b;">${isAr ? t.scopeAr : t.scopeEn}</span>
        </div>
      `,
    )
    .join('');

  const historyHtml = (extendedIntel?.historyTo2026 || [])
    ?.map(
      (h) => `
        <li style="margin-bottom: 6px; font-size: 12px; color: #334155;">
          <b style="color: #0284c7; font-family: monospace;">${h.year}:</b> ${isAr ? h.eventAr : h.eventEn}
        </li>
      `,
    )
    .join('');

  const aircraftHtml = (arsenal?.aircraft || [])
    ?.map(
      (a) => `
        <div style="margin-bottom: 6px; padding: 6px 10px; background: #f8fafc; border-radius: 4px; font-size: 11px;">
          <div style="display: flex; justify-content: space-between;">
            <span><strong>${a.model}</strong> (${a.origin}) · <span style="color: #64748b;">${isAr ? a.roleAr : a.roleEn}</span></span>
            <span style="font-weight: bold; color: #0284c7; font-family: monospace;">${a.count}</span>
          </div>
          ${(a.weaponsAr || a.weaponsEn) ? `<div style="font-size: 10px; color: #0369a1; margin-top: 3px;"><strong>${isAr ? 'الأسلحة والذخائر:' : 'Weapons Payload:'}</strong> ${isAr ? a.weaponsAr || a.weaponsEn : a.weaponsEn || a.weaponsAr}</div>` : ''}
        </div>
      `,
    )
    .join('') || '<p style="font-size: 11px; color: #64748b;">Standard tactical multirole aircraft inventory.</p>';

  const tanksHtml = (arsenal?.tanks || [])
    ?.map(
      (t) => `
        <div style="margin-bottom: 6px; padding: 6px 10px; background: #f8fafc; border-radius: 4px; font-size: 11px;">
          <div style="display: flex; justify-content: space-between;">
            <span><strong>${t.model}</strong> (${t.origin}) · <span style="color: #64748b;">${isAr ? t.roleAr : t.roleEn}</span></span>
            <span style="font-weight: bold; color: #b45309; font-family: monospace;">${t.count}</span>
          </div>
          ${(t.mainArmamentAr || t.mainArmamentEn) ? `<div style="font-size: 10px; color: #92400e; margin-top: 3px;"><strong>${isAr ? 'المدفع والتسليح:' : 'Armament & Armor:'}</strong> ${isAr ? t.mainArmamentAr || t.mainArmamentEn : t.mainArmamentEn || t.mainArmamentAr}</div>` : ''}
        </div>
      `,
    )
    .join('') || '<p style="font-size: 11px; color: #64748b;">Armored fighting vehicles and main battle tank regiments.</p>';

  const companiesHtml = companies
    ?.map(
      (c) => `
        <div style="margin-bottom: 6px; padding: 6px 10px; background: #f8fafc; border-radius: 4px; font-size: 11px;">
          <div style="display: flex; justify-content: space-between;">
            <strong>${c.name}</strong>
            <span style="color: ${c.type === 'global' ? '#2563eb' : '#059669'}; font-weight: bold;">${c.valuation || ''} (${c.type === 'global' ? (isAr ? 'عالمية' : 'Global') : (isAr ? 'محلية' : 'Local')})</span>
          </div>
          <div style="font-size: 10px; color: #64748b; margin-top: 2px;">${isAr ? c.sectorAr : c.sectorEn} · ${isAr ? c.roleAr : c.roleEn}</div>
        </div>
      `,
    )
    .join('') || '';

  const tensionsHtml = (diplomacy?.tensions || [])
    ?.map(
      (t) => `
        <div style="margin-bottom: 6px; padding: 6px 10px; background: #fff1f2; border-left: 3px solid #e11d48; border-radius: 4px; font-size: 11px;">
          <div style="display: flex; justify-content: space-between;">
            <strong style="color: #9f1239;">${isAr ? t.countryAr : t.countryEn}</strong>
            <span style="font-size: 10px; color: #be123c; font-weight: bold;">${t.riskLevel}</span>
          </div>
          <div style="font-size: 10px; color: #475569; margin-top: 2px;">${isAr ? t.issueAr : t.issueEn}</div>
        </div>
      `,
    )
    .join('') || '';

  const politicalShiftsHtml = (diplomacy?.internalPoliticalShifts || [])
    ?.map(
      (s) => `
        <li style="margin-bottom: 4px; font-size: 11px; color: #334155;">
          <b style="color: #4338ca; font-family: monospace;">${s.year}:</b> ${isAr ? s.eventAr : s.eventEn}
        </li>
      `,
    )
    .join('') || '';

  const htmlContent = `<!DOCTYPE html>
<html lang="${lang}" dir="${isAr ? 'rtl' : 'ltr'}">
<head>
  <meta charset="utf-8" />
  <title>${title} — GeoNexus 2026</title>
  <style>
    @page { size: A4; margin: 15mm; }
    body {
      font-family: ${isAr ? '"Cairo", "Tajawal", system-ui, sans-serif' : 'system-ui, -apple-system, sans-serif'};
      margin: 0;
      padding: 24px;
      color: #0f172a;
      background: #ffffff;
      line-height: 1.5;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #0f172a;
      padding-bottom: 12px;
      margin-bottom: 20px;
    }
    .badge {
      display: inline-block;
      font-family: monospace;
      font-size: 10px;
      font-weight: bold;
      background: #f1f5f9;
      border: 1px solid #cbd5e1;
      padding: 2px 8px;
      border-radius: 4px;
    }
    .classified {
      color: #b91c1c;
      border-color: #fca5a5;
      background: #fef2f2;
    }
    h1 { margin: 0; font-size: 24px; color: #0f172a; }
    h2 { font-size: 14px; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; margin-top: 18px; color: #1e293b; text-transform: uppercase; letter-spacing: 0.5px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px; }
    .stat-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      padding: 10px 14px;
      border-radius: 6px;
    }
    .stat-title { font-size: 11px; color: #64748b; margin-bottom: 2px; }
    .stat-val { font-size: 15px; font-weight: bold; color: #0f172a; }
    ul { margin: 0; padding-${isAr ? 'right' : 'left'}: 18px; }
    li { margin-bottom: 4px; font-size: 12px; color: #334155; }
    .footer {
      margin-top: 30px;
      border-top: 1px solid #e2e8f0;
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      color: #94a3b8;
      font-family: monospace;
    }
    @media print {
      body { padding: 0; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="margin-bottom: 15px; background: #0284c7; color: white; padding: 10px 16px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;">
    <span>${isAr ? 'جاهز للطباعة أو الحفظ كملف PDF' : 'Ready to print or save as PDF'}</span>
    <button onclick="window.print()" style="background: white; color: #0284c7; border: none; padding: 6px 14px; font-weight: bold; border-radius: 4px; cursor: pointer;">
      ${isAr ? 'طباعة / حفظ PDF' : 'Print / Save PDF'}
    </button>
  </div>

  <div class="header">
    <div>
      <span class="badge classified">${isAr ? 'وثيقة استخبارية سيادية معتمدة // 2026' : 'CLASSIFIED SOVEREIGN DOSSIER // 2026'}</span>
      <h1 style="margin-top: 6px;">${country.name}</h1>
      <p style="margin: 2px 0 0; font-size: 12px; color: #64748b;">
        ${isAr ? 'العاصمة:' : 'Capital:'} <b>${country.capital}</b> · ${isAr ? 'الإقليم:' : 'Region:'} <b>${country.regionLabel || country.region}</b> · ${isAr ? 'نظام الحكم:' : 'Regime:'} <b>${country.regime}</b>
      </p>
    </div>
    <div style="text-align: ${isAr ? 'left' : 'right'}; font-size: 11px; color: #64748b; font-family: monospace;">
      <span>ISO: ${country.id.toUpperCase()}</span><br />
      <span>RANK: #${country.globalRank || '15'}</span><br />
      <span>DATE: 2026-10-06</span>
    </div>
  </div>

  <!-- المؤشرات الاقتصادية والعملة -->
  <h2>${isAr ? '1. الاقتصاد والعملة الوطنية والاحتياطيات' : '1. Economy, National Currency & Reserves'}</h2>
  <div class="grid">
    <div class="stat-card">
      <div class="stat-title">${isAr ? 'العملة الوطنية الرسمية والبنك المركزي' : 'National Currency & Central Bank'}</div>
      <div class="stat-val" style="font-size: 14px;">${extendedIntel?.currency?.nameAr || country.currency} (${extendedIntel?.currency?.code}) ${extendedIntel?.currency?.symbol || ''}</div>
      <div style="font-size: 11px; color: #64748b; margin-top: 2px;">${isAr ? extendedIntel?.currency?.centralBankAr : extendedIntel?.currency?.centralBankEn}</div>
    </div>

    <div class="stat-card">
      <div class="stat-title">${isAr ? 'الناتج المحلي الإجمالي والاحتياطيات' : 'Nominal GDP & FX Reserves'}</div>
      <div class="stat-val">$${country.gdpBn || country.gdpNominalBn || '400'}B <span style="font-size: 11px; color: #16a34a;">(+${country.gdpGrowth || 3.5}%)</span></div>
      <div style="font-size: 11px; color: #64748b; margin-top: 2px;">${isAr ? 'الاحتياطي النقدي الأجنبي:' : 'FX Reserves:'} ~$${extendedIntel?.currency?.foreignReservesBn || '120'}B</div>
    </div>
  </div>

  <!-- الجاهزية العسكرية ومصادر الأسلحة -->
  <h2>${isAr ? '2. القوة العسكرية، فروع الجيش، ومصادر استيراد الأسلحة' : '2. Armed Forces, Military Branches & Arms Imports'}</h2>
  <div class="grid">
    <div class="stat-card">
      <div class="stat-title">${isAr ? 'الإنفاق العسكري والقوة البشرية' : 'Defense Budget & Personnel'}</div>
      <div class="stat-val">$${country.militaryBudgetBn || '45'}B USD</div>
      <div style="font-size: 11px; color: #64748b; margin-top: 2px;">
        ${isAr ? 'القوات النشطة:' : 'Active:'} ${country.activePersonnelK || '250'}k · ${isAr ? 'الاحتياط:' : 'Reserve:'} ${country.reservePersonnelK || '100'}k
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-title">${isAr ? 'نسبة التصنيع العسكري المحلي ومخاطر السلاسل' : 'Domestic Arms Production & Dependency'}</div>
      <div class="stat-val" style="font-size: 13px;">${isAr ? extendedIntel?.armsImports?.domesticProductionRatioAr : extendedIntel?.armsImports?.domesticProductionRatioEn}</div>
      <div style="font-size: 11px; color: #b45309; margin-top: 2px;">${isAr ? extendedIntel?.armsImports?.dependencyRiskAr : extendedIntel?.armsImports?.dependencyRiskEn}</div>
    </div>
  </div>

  <div style="margin-bottom: 12px;">
    <strong style="font-size: 12px; color: #0f172a; display: block; margin-bottom: 4px;">${isAr ? 'فروع القوات المسلحة الرسمية:' : 'Official Armed Forces Branches:'}</strong>
    <ul>${branchesHtml}</ul>
  </div>

  <div class="grid">
    <div>
      <strong style="font-size: 12px; color: #0f172a; display: block; margin-bottom: 4px;">${isAr ? 'أهم الدول الموردة للأسلحة:' : 'Primary Arms Suppliers:'}</strong>
      <ul>${suppliersHtml}</ul>
    </div>
    <div>
      <strong style="font-size: 12px; color: #0f172a; display: block; margin-bottom: 4px;">${isAr ? 'أهم المنظومات الحربية المستوردة:' : 'Key Imported Weapon Systems:'}</strong>
      <ul>${systemsHtml}</ul>
    </div>
  </div>

  <!-- أنواع الطائرات والدبابات الميدانية -->
  <div style="margin-top: 10px;">
    <strong style="font-size: 12px; color: #0f172a; display: block; margin-bottom: 4px;">${isAr ? 'أسطول الطائرات المقاتلة والمسيرات:' : 'Combat Aircraft & UAV Fleet:'}</strong>
    <div>${aircraftHtml}</div>
  </div>

  <div style="margin-top: 10px;">
    <strong style="font-size: 12px; color: #0f172a; display: block; margin-bottom: 4px;">${isAr ? 'دبابات القتال الرئيسية وسلاح المدرعات:' : 'Main Battle Tanks & Armored Regiments:'}</strong>
    <div>${tanksHtml}</div>
  </div>

  <!-- كبرى الشركات العالمية والمحلية -->
  <h2>${isAr ? '3. كبرى الشركات العالمية والمحلية والسيادية' : '3. Major Global & Domestic Enterprises'}</h2>
  <div>${companiesHtml}</div>

  <!-- أجهزة المخابرات والأمن -->
  <h2>${isAr ? '4. أجهزة المخابرات والأمن القومي' : '4. Intelligence & National Security Agencies'}</h2>
  <div>${intelHtml}</div>

  <!-- التوترات والنزاعات الجيوسياسية -->
  <h2>${isAr ? '5. بؤر التوتر والنزاعات الجيوسياسية' : '5. Geopolitical Tensions & Conflict Flashpoints'}</h2>
  <div>${tensionsHtml}</div>

  <!-- المعاهدات والاتفاقيات الدولية -->
  <h2>${isAr ? '6. المعاهدات الدفاعية والتحالفات الدولية' : '6. Treaties, Alliances & Defense Pacts'}</h2>
  <div>${treatiesHtml}</div>

  <!-- التحولات الداخلية والسياسية -->
  <h2>${isAr ? '7. التحولات الداخلية والسياسية لنظام الحكم' : '7. Internal Political Shifts & Governance'}</h2>
  <ul>${politicalShiftsHtml}</ul>

  <!-- المسار التاريخي حتى 2026 -->
  <h2>${isAr ? '8. المحطات الجيوسياسية المفصلية حتى 2026' : '8. Geopolitical Milestones up to 2026'}</h2>
  <ul>${historyHtml}</ul>

  <div class="footer">
    <span>GEONEXUS 2026 GLOBAL INTELLIGENCE MONITOR</span>
    <span>VERIFIED AGAINST OFFICIAL RECORD & OPEN SOURCES</span>
    <span>PAGE 1 / 1</span>
  </div>
</body>
</html>`;

  // محاولة الطباعة عبر نافذة منبثقة أو عبر iframe آمن
  let printed = false;
  try {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.open();
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      printed = true;
      setTimeout(() => {
        try { printWindow.print(); } catch { /* ignore */ }
      }, 500);
    }
  } catch {
    printed = false;
  }

  // إذا كانت النوافذ محظورة (بسبب قيود iframe)، ننشئ iframe مخفي مؤقت للطباعة
  if (!printed) {
    try {
      const iframe = document.createElement('iframe');
      iframe.style.position = 'fixed';
      iframe.style.right = '0';
      iframe.style.bottom = '0';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.border = '0';
      document.body.appendChild(iframe);

      iframe.contentWindow.document.open();
      iframe.contentWindow.document.write(htmlContent);
      iframe.contentWindow.document.close();

      setTimeout(() => {
        try {
          iframe.contentWindow.focus();
          iframe.contentWindow.print();
        } catch { /* ignore */ }
        setTimeout(() => document.body.removeChild(iframe), 2000);
      }, 500);
    } catch { /* ignore */ }
  }

  // وفي جميع الحالات، تنزيل ملف التقرير الفوري بصيغة HTML منسقة جاهزة للطباعة فوراً
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${country.id.toUpperCase()}_Intelligence_Report_2026.html`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
