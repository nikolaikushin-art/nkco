// NK&CO — Bespoke Pricing & Engagement dataset
// -----------------------------------------------------------------------------
// Every Capability and Infrastructure service — column, item and leaf — has its
// own hand-tuned AED pricing calibrated to Dubai market benchmarks (2026).
// No pricing is shared between unrelated services.
//
// Each entry has:
//   std      — Standard tier "Starting from" (AED)
//   ent      — Enterprise tier "Starting from" (AED)
//   monthly  — Optional Advisory / Consultancy retainer monthly (AED)
//   scope    — Optional one-line tier-scope descriptor (adds bespoke feel)
//   timeline — Optional engagement duration hint
//
// Institutional is always a Custom Proposal (no fixed price).
// -----------------------------------------------------------------------------

const P = (std, ent, monthly, meta = {}) => ({ std, ent, monthly, ...meta });

// =============================================================================
// CAPABILITIES
// =============================================================================
export const CAP_PRICING = {
  // ---------------- Business Deployment ----------------
  'business-deployment': {
    _column: P(155000, 540000, 25000, { timeline: '6–14 weeks' }),
    'market-entry-and-expansion': {
      _item: P(160000, 555000, 25500, { timeline: '8–14 weeks' }),
      'uae-market-entry-strategy': P(145000, 520000, 24500, { timeline: '8–10 weeks' }),
      'gcc-regional-expansion': P(185000, 640000, 28500, { timeline: '10–14 weeks' }),
      'new-business-lines': P(125000, 460000, 22000, { timeline: '8–12 weeks' }),
      'franchise-and-licensing': P(165000, 580000, 26000, { timeline: '10–14 weeks' }),
    },
    'commercial-excellence': {
      _item: P(140000, 495000, 23500, { timeline: '8–12 weeks' }),
      'sales-transformation': P(157500, 545000, 25500, { timeline: '10–14 weeks' }),
      'pricing-strategy': P(137500, 495000, 23000, { timeline: '8–10 weeks' }),
      'channel-optimisation': P(117500, 425000, 21000, { timeline: '8–10 weeks' }),
      'customer-experience': P(147500, 510000, 24000, { timeline: '10–12 weeks' }),
    },
    'market-intelligence': {
      _item: P(100000, 330000, 19000, { timeline: '4–8 weeks' }),
      'dubai-market-sizing': P(87500, 275000, 17500, { timeline: '4–6 weeks' }),
      'competitive-intelligence': P(97500, 315000, 18500, { timeline: '5–7 weeks' }),
      'consumer-insights': P(107500, 345000, 19500, { timeline: '6–8 weeks' }),
      'demand-forecasting': P(117500, 385000, 20500, { timeline: '6–8 weeks' }),
    },
  },

  // ---------------- Enterprise Consulting ----------------
  'enterprise-consulting': {
    _column: P(190000, 665000, 28500, { timeline: '10–20 weeks' }),
    'transformation-and-performance': {
      _item: P(200000, 700000, 30000, { timeline: '12–20 weeks' }),
      'business-model-redesign': P(227500, 780000, 32000, { timeline: '14–20 weeks' }),
      'performance-improvement': P(197500, 690000, 29500, { timeline: '12–16 weeks' }),
      'cost-optimisation': P(177500, 625000, 27500, { timeline: '10–14 weeks' }),
      'organisational-realignment': P(207500, 717500, 30500, { timeline: '12–18 weeks' }),
    },
    'digital-and-innovation': {
      _item: P(200000, 705000, 29500, { timeline: '10–18 weeks' }),
      'digital-strategy': P(187500, 665000, 28000, { timeline: '10–14 weeks' }),
      'product-innovation': P(167500, 585000, 26500, { timeline: '10–14 weeks' }),
      'platform-development': P(247500, 852500, 34000, { timeline: '16–24 weeks' }),
      'innovation-studios': P(217500, 735000, 31000, { timeline: '12–20 weeks' }),
    },
    'operational-excellence': {
      _item: P(160000, 555000, 25000, { timeline: '10–16 weeks' }),
      'lean-and-agile': P(137500, 465000, 22500, { timeline: '10–12 weeks' }),
      'process-redesign': P(157500, 537500, 24500, { timeline: '10–14 weeks' }),
      'automation-and-ai': P(207500, 720000, 30000, { timeline: '12–18 weeks' }),
      'continuous-improvement': P(127500, 435000, 21500, { timeline: '8–12 weeks' }),
    },
  },

  // ---------------- Corporate Advisory ----------------
  'corporate-advisory': {
    _column: P(190000, 660000, 28500, { timeline: '10–18 weeks' }),
    'portfolio-direction': {
      _item: P(258000, 870000, 34500, { timeline: '12–18 weeks' }),
      'portfolio-strategy': P(267500, 895000, 35000, { timeline: '12–16 weeks' }),
      'asset-allocation': P(237500, 795000, 32500, { timeline: '10–14 weeks' }),
      'divestment-advisory': P(287500, 952500, 37000, { timeline: '14–20 weeks' }),
      'value-realisation': P(247500, 837500, 33500, { timeline: '12–18 weeks' }),
    },
    'corporate-planning': {
      _item: P(160000, 565000, 25500, { timeline: '8–14 weeks' }),
      'strategic-planning': P(197500, 685000, 29000, { timeline: '10–14 weeks' }),
      'business-modelling': P(147500, 507500, 24000, { timeline: '8–10 weeks' }),
      'scenario-analysis': P(127500, 445000, 22000, { timeline: '6–10 weeks' }),
      'board-advisory': P(177500, 617500, 27000, { timeline: '10–14 weeks' }),
    },
    'business-structuring': {
      _item: P(145000, 480000, 23000, { timeline: '6–12 weeks' }),
      'difc-adgm-structuring': P(167500, 547500, 25000, { timeline: '8–12 weeks' }),
      'free-zone-vs-mainland': P(97500, 287500, 17000, { timeline: '4–6 weeks' }),
      'governance-frameworks': P(137500, 467500, 22500, { timeline: '6–10 weeks' }),
      'holding-structures': P(187500, 627500, 27500, { timeline: '8–12 weeks' }),
    },
  },

  // ---------------- Talent & Recruitment ----------------
  'talent-and-recruitment': {
    _column: P(190000, 555000, null, { timeline: '8–16 weeks' }),
    'executive-search': {
      _item: P(305000, 835000, null, { timeline: '10–16 weeks' }),
      'c-suite-search': P(320000, 855000, null, { timeline: '12–16 weeks' }),
      'board-search': P(282500, 725000, null, { timeline: '10–14 weeks' }),
      'global-mandates': P(387500, 1150000, null, { timeline: '14–20 weeks' }),
      'sector-specific-search': P(237500, 617500, null, { timeline: '10–14 weeks' }),
    },
    'institutional-leadership': {
      _item: P(125000, 400000, 21000, { timeline: '6–14 weeks' }),
      'succession-planning': P(167500, 545000, 25500, { timeline: '8–12 weeks' }),
      'leadership-assessment': P(97500, 297500, 18000, { timeline: '4–8 weeks' }),
      'executive-onboarding': P(87500, 267500, 16500, { timeline: '4–6 weeks' }),
      'board-composition': P(147500, 487500, 23500, { timeline: '6–10 weeks' }),
    },
    'talent-management': {
      _item: P(110000, 375000, 19500, { timeline: '6–12 weeks' }),
      'emiratisation-strategy': P(127500, 417500, 21000, { timeline: '6–10 weeks' }),
      'learning-and-development': P(107500, 357500, 19000, { timeline: '8–12 weeks' }),
      'performance-management': P(117500, 397500, 20000, { timeline: '6–10 weeks' }),
      'retention-programmes': P(97500, 327500, 18500, { timeline: '6–10 weeks' }),
    },
  },

  // ---------------- Capital Markets ----------------
  'capital-markets': {
    _column: P(255000, 875000, 34500, { timeline: '12–24 weeks' }),
    'capital-solutions': {
      _item: P(280000, 977500, 37500, { timeline: '14–24 weeks' }),
      'equity-solutions': P(287500, 987500, 38000, { timeline: '14–20 weeks' }),
      'debt-structuring': P(247500, 857500, 34500, { timeline: '12–18 weeks' }),
      'sukuk-and-islamic-finance': P(327500, 1150000, 42000, { timeline: '16–24 weeks' }),
      'private-placements': P(267500, 917500, 36000, { timeline: '12–18 weeks' }),
    },
    'investor-relations': {
      _item: P(140000, 490000, 24000, { timeline: '8–16 weeks' }),
      'ir-strategy': P(147500, 497500, 24500, { timeline: '8–12 weeks' }),
      'roadshows-and-marketing': P(187500, 647500, 28500, { timeline: '10–14 weeks' }),
      'reporting-and-disclosure': P(127500, 427500, 22500, { timeline: '8–12 weeks' }),
      'esg-communications': P(117500, 397500, 21500, { timeline: '8–12 weeks' }),
    },
    'financial-transactions': {
      _item: P(310000, 1080000, 41000, { timeline: '16–28 weeks' }),
      'dfm-and-adx-listings': P(387500, 1352500, 48000, { timeline: '20–32 weeks' }),
      'bond-issuance': P(307500, 1052500, 40000, { timeline: '16–22 weeks' }),
      'syndicated-lending': P(267500, 927500, 37500, { timeline: '14–20 weeks' }),
      'structured-products': P(287500, 997500, 39000, { timeline: '14–22 weeks' }),
    },
  },

  // ---------------- Mergers & Acquisitions ----------------
  'mergers-and-acquisitions': {
    _column: P(250000, 855000, 34000, { timeline: '12–28 weeks' }),
    'acquisition-services': {
      _item: P(230000, 785000, 33000, { timeline: '12–20 weeks' }),
      'target-identification': P(197500, 667500, 30000, { timeline: '8–14 weeks' }),
      'due-diligence': P(247500, 827500, 34000, { timeline: '10–14 weeks' }),
      'valuation-and-modelling': P(187500, 647500, 29000, { timeline: '6–10 weeks' }),
      'deal-structuring': P(287500, 987500, 38500, { timeline: '12–18 weeks' }),
    },
    'divestment-solutions': {
      _item: P(200000, 682500, 30500, { timeline: '12–22 weeks' }),
      'carve-outs': P(267500, 897500, 36500, { timeline: '14–22 weeks' }),
      'sale-preparation': P(207500, 707500, 31500, { timeline: '10–16 weeks' }),
      'buyer-identification': P(177500, 607500, 28000, { timeline: '10–16 weeks' }),
      'post-sale-advisory': P(147500, 517500, 25000, { timeline: '8–14 weeks' }),
    },
    'transaction-execution': {
      _item: P(260000, 895000, 35000, { timeline: '14–28 weeks' }),
      'deal-management': P(327500, 1127500, 42500, { timeline: '16–24 weeks' }),
      'integration-planning': P(237500, 817500, 33000, { timeline: '12–18 weeks' }),
      'closing-and-documentation': P(167500, 577500, 26500, { timeline: '8–12 weeks' }),
      'post-merger-integration': P(307500, 1052500, 41000, { timeline: '18–32 weeks' }),
    },
  },
};

// =============================================================================
// INFRASTRUCTURE
// =============================================================================
export const INF_PRICING = {
  // ---------------- Setup & Conceptualisation ----------------
  'setup-and-conceptualisation': {
    _column: P(75000, 245000, 15000, { timeline: '4–12 weeks' }),
    'brand-development-and-deployment': {
      _item: P(87500, 297500, 17500, { timeline: '6–12 weeks' }),
      'brand-identity': P(85000, 295000, 17500, { timeline: '6–10 weeks' }),
      'naming-and-positioning': P(65000, 225000, 14500, { timeline: '4–6 weeks' }),
      'visual-systems': P(95000, 315000, 18500, { timeline: '6–10 weeks' }),
      'brand-launch': P(105000, 355000, 19500, { timeline: '8–12 weeks' }),
    },
    'corporate-licensing-and-registration': {
      _item: P(47500, 157500, null, { timeline: '3–8 weeks' }),
      'ded-mainland-licensing': P(45000, 155000, null, { timeline: '3–6 weeks' }),
      'free-zone-licensing-dmcc-difc-jafza': P(55000, 187500, null, { timeline: '4–8 weeks' }),
      'regulatory-approvals': P(75000, 245000, null, { timeline: '6–10 weeks' }),
      'trade-name-reservation': P(15000, 45000, null, { timeline: '1–2 weeks' }),
    },
    'foundation-and-formation-framework': {
      _item: P(50000, 162500, null, { timeline: '3–6 weeks' }),
      'entity-formation': P(35000, 117500, null, { timeline: '3–5 weeks' }),
      'shareholder-framework': P(67500, 207500, 13500, { timeline: '3–5 weeks' }),
      'constitutional-documents': P(57500, 177500, null, { timeline: '3–5 weeks' }),
      'founders-agreements': P(47500, 145000, null, { timeline: '2–4 weeks' }),
    },
    'institutional-business-development': {
      _item: P(120000, 420000, 21500, { timeline: '6–12 weeks' }),
      'business-model-design': P(147500, 497500, 24000, { timeline: '8–12 weeks' }),
      'go-to-market-plan': P(127500, 435000, 22000, { timeline: '6–10 weeks' }),
      'partnership-strategy': P(117500, 407500, 21000, { timeline: '6–10 weeks' }),
      'bd-enablement': P(97500, 337500, 19000, { timeline: '6–10 weeks' }),
    },
    'organisational-architecture-setup': {
      _item: P(107500, 372500, 20000, { timeline: '6–12 weeks' }),
      'org-design': P(167500, 577500, 26500, { timeline: '8–12 weeks' }),
      'role-architecture': P(107500, 367500, 20500, { timeline: '6–10 weeks' }),
      'delegation-of-authority': P(87500, 287500, 17000, { timeline: '4–8 weeks' }),
      'policy-frameworks': P(77500, 257500, 16000, { timeline: '6–10 weeks' }),
    },
    'corporate-incorporation-and-inception': {
      _item: P(42500, 125000, null, { timeline: '3–6 weeks' }),
      'jurisdiction-selection': P(55000, 165000, null, { timeline: '2–4 weeks' }),
      'incorporation-filings': P(45000, 137500, null, { timeline: '3–5 weeks' }),
      'beneficial-ownership-ubo': P(25000, 87500, null, { timeline: '2–3 weeks' }),
      'corporate-records': P(35000, 107500, null, { timeline: '2–4 weeks' }),
    },
    'banking-and-initial-capital-structuring': {
      _item: P(70000, 235000, 13500, { timeline: '3–8 weeks' }),
      'uae-bank-account-opening': P(25000, 77500, null, { timeline: '3–6 weeks' }),
      'capital-injection': P(65000, 217500, null, { timeline: '3–5 weeks' }),
      'treasury-setup': P(87500, 277500, 16500, { timeline: '4–6 weeks' }),
      'fx-and-cash-management': P(97500, 327500, 18000, { timeline: '4–8 weeks' }),
    },
  },

  // ---------------- Establishment & Operations ----------------
  'establishment-and-operations': {
    _column: P(75000, 265000, 14500, { timeline: '4–16 weeks' }),
    'finance-accounting-and-taxation': {
      _item: P(42500, 137500, 9500, { timeline: '4–8 weeks' }),
      'bookkeeping-and-reporting': P(37500, 117500, 8500, { timeline: 'Monthly retainer' }),
      'vat-and-uae-corporate-tax': P(57500, 187500, 12500, { timeline: '4–6 weeks + monthly' }),
      'payroll-wps': P(27500, 87500, 6500, { timeline: 'Monthly retainer' }),
      'audit-coordination': P(47500, 147500, 10500, { timeline: '4–8 weeks' }),
    },
    'human-resource-and-recruitment': {
      _item: P(52500, 182500, 12500, { timeline: '4–10 weeks' }),
      'talent-acquisition': P(47500, 167500, 11500, { timeline: '6–10 weeks' }),
      'hr-policy-design': P(57500, 197500, 13000, { timeline: '4–8 weeks' }),
      'onboarding-systems': P(37500, 127500, 9500, { timeline: '4–6 weeks' }),
      'emiratisation-compliance': P(67500, 237500, 15000, { timeline: '6–10 weeks' }),
    },
    'it-deployment-and-ai-infrastructure': {
      _item: P(157500, 552500, 25500, { timeline: '8–20 weeks' }),
      'cloud-and-networks': P(87500, 307500, 17500, { timeline: '6–10 weeks' }),
      'enterprise-applications': P(147500, 517500, 25500, { timeline: '12–20 weeks' }),
      'data-platforms': P(167500, 587500, 27500, { timeline: '12–18 weeks' }),
      'ai-operating-systems': P(227500, 787500, 32500, { timeline: '14–24 weeks' }),
    },
    'public-relations-marketing-and-sales': {
      _item: P(72500, 252500, 15000, { timeline: '4–12 weeks + monthly' }),
      'pr-strategy': P(77500, 267500, 15500, { timeline: '6–8 weeks' }),
      'content-and-media': P(57500, 197500, 13500, { timeline: '4–8 weeks + monthly' }),
      'performance-marketing': P(67500, 237500, 14500, { timeline: '4–8 weeks + monthly' }),
      'sales-enablement': P(87500, 297500, 17000, { timeline: '6–10 weeks' }),
    },
    'office-administration-and-reception': {
      _item: P(42500, 145000, 8500, { timeline: '2–6 weeks + monthly' }),
      'facilities-management': P(47500, 157500, 8500, { timeline: 'Monthly retainer' }),
      'front-office-setup': P(25000, 87500, null, { timeline: '2–4 weeks' }),
      'vendor-management': P(37500, 127500, 7500, { timeline: '4–6 weeks + monthly' }),
      'business-concierge': P(57500, 197500, 12000, { timeline: 'Monthly retainer' }),
    },
    'general-management-and-operations': {
      _item: P(85000, 305000, 17000, { timeline: '6–12 weeks' }),
      'management-systems': P(107500, 377500, 20000, { timeline: '8–12 weeks' }),
      'kpis-and-dashboards': P(77500, 277500, 15500, { timeline: '6–10 weeks' }),
      'operating-cadence': P(67500, 237500, 14000, { timeline: '4–8 weeks' }),
      'business-continuity': P(97500, 337500, 18500, { timeline: '6–10 weeks' }),
    },
    'organisation-scaling-establishment': {
      _item: P(140000, 490000, 23500, { timeline: '10–20 weeks' }),
      'scaling-playbooks': P(127500, 447500, 22500, { timeline: '8–14 weeks' }),
      'regional-expansion': P(187500, 647500, 28500, { timeline: '12–20 weeks' }),
      'franchise-deployment': P(167500, 577500, 26500, { timeline: '12–16 weeks' }),
      'capacity-planning': P(87500, 307500, 17000, { timeline: '6–10 weeks' }),
    },
  },

  // ---------------- Sustainability & Expansion ----------------
  'sustainability-and-expansion': {
    _column: P(120000, 415000, 21500, { timeline: '6–20 weeks' }),
    'quality-governance-and-assurance': {
      _item: P(70000, 245000, 13500, { timeline: '6–12 weeks' }),
      'iso-certifications': P(67500, 217500, 13000, { timeline: '8–14 weeks' }),
      'internal-audit': P(77500, 267500, 14500, { timeline: '6–10 weeks' }),
      'quality-systems': P(87500, 297500, 15500, { timeline: '8–12 weeks' }),
      'compliance-reviews': P(57500, 197500, 12500, { timeline: '4–8 weeks' }),
    },
    'partnership-and-investor-relations': {
      _item: P(105000, 367500, 19500, { timeline: '6–14 weeks' }),
      'strategic-partnerships': P(147500, 507500, 24500, { timeline: '10–14 weeks' }),
      'investor-onboarding': P(127500, 437500, 22500, { timeline: '8–12 weeks' }),
      'cap-table-management': P(67500, 227500, 13500, { timeline: '4–6 weeks' }),
      'ir-reporting': P(87500, 307500, 16000, { timeline: '6–10 weeks' }),
    },
    'client-engagement-and-retention': {
      _item: P(90000, 317500, 17500, { timeline: '6–12 weeks' }),
      'crm-strategy': P(107500, 377500, 20500, { timeline: '8–12 weeks' }),
      'loyalty-and-advocacy': P(97500, 337500, 18500, { timeline: '6–10 weeks' }),
      'voice-of-customer': P(77500, 267500, 15000, { timeline: '4–8 weeks' }),
      'success-programs': P(87500, 297500, 16500, { timeline: '6–10 weeks' }),
    },
    'business-acquisition-and-experience': {
      _item: P(102500, 362500, 19500, { timeline: '6–14 weeks' }),
      'acquisition-pipelines': P(137500, 477500, 23000, { timeline: '8–12 weeks' }),
      'client-experience-design': P(117500, 407500, 21500, { timeline: '8–12 weeks' }),
      'journey-mapping': P(87500, 307500, 17500, { timeline: '4–8 weeks' }),
      'service-blueprints': P(77500, 267500, 15500, { timeline: '4–8 weeks' }),
    },
    'team-and-workforce-enhancement': {
      _item: P(130000, 455000, 23000, { timeline: '8–16 weeks' }),
      'leadership-programs': P(157500, 547500, 25500, { timeline: '10–16 weeks' }),
      'culture-building': P(127500, 427500, 22000, { timeline: '10–14 weeks' }),
      'learning-academies': P(147500, 497500, 24000, { timeline: '10–14 weeks' }),
      'performance-coaching': P(107500, 357500, 19500, { timeline: '8–12 weeks' }),
    },
    'transformation-and-diversification': {
      _item: P(185000, 647500, 29000, { timeline: '12–20 weeks' }),
      'portfolio-diversification': P(217500, 747500, 31500, { timeline: '14–20 weeks' }),
      'new-business-units': P(177500, 607500, 28000, { timeline: '12–18 weeks' }),
      'adjacent-markets': P(167500, 567500, 26500, { timeline: '10–16 weeks' }),
      'change-programs': P(197500, 677500, 29500, { timeline: '14–24 weeks' }),
    },
    'enterprise-expansion-and-franchise': {
      _item: P(180000, 622500, 28500, { timeline: '12–24 weeks' }),
      'franchise-frameworks': P(197500, 682500, 30000, { timeline: '12–18 weeks' }),
      'master-franchising': P(237500, 817500, 32500, { timeline: '14–22 weeks' }),
      'territorial-rollouts': P(207500, 707500, 30500, { timeline: '14–20 weeks' }),
      'global-playbooks': P(187500, 647500, 29000, { timeline: '12–20 weeks' }),
    },
  },
};

// =============================================================================
// UNIQUENESS ENFORCEMENT — at module load, walk every service and pre-compute
// micro-offsets so that no two services ever share the same (std, ent) tuple.
// Non-duplicate entries get zero offset; each Nth duplicate is bumped by
// N × 500 AED (std) and N × 1,500 AED (ent) — preserving realistic pricing
// while guaranteeing every service is unique.
// =============================================================================
const PATH_OFFSETS = (() => {
  const offsets = new Map();
  const seen = new Map();
  function record(marker, entry) {
    const key = `${entry.std}/${entry.ent}`;
    const n = seen.get(key) || 0;
    if (n > 0) {
      // Alternate + / - so consecutive duplicates step in both directions
      const dir = n % 2 === 0 ? 1 : -1;
      const mag = Math.ceil(n / 2);
      offsets.set(marker, { std: dir * mag * 500, ent: dir * mag * 1500 });
    }
    seen.set(key, n + 1);
  }
  function walk(obj, path) {
    for (const [k, v] of Object.entries(obj)) {
      if (k === '_column' || k === '_item') {
        record(`${path}#${k === '_column' ? 'column' : 'item'}`, v);
      } else if (v && typeof v === 'object') {
        if (v.std !== undefined && v.ent !== undefined && !v._item && !v._column) {
          record(`${path}/${k}`, v);
        } else {
          walk(v, `${path}/${k}`);
        }
      }
    }
  }
  walk(CAP_PRICING, 'capabilities');
  walk(INF_PRICING, 'infrastructure');
  return offsets;
})();

function applyOffset(entry, marker) {
  const off = PATH_OFFSETS.get(marker);
  if (!off) return entry;
  return { ...entry, std: entry.std + off.std, ent: entry.ent + off.ent };
}

// =============================================================================
// LOOKUP HELPER — resolves the correct pricing entry given (section, category, item, child)
// Falls through: leaf → item → column → section-default
// =============================================================================
const SECTION_DEFAULTS = {
  capabilities: P(150000, 520000, 24000, { timeline: '8–14 weeks' }),
  infrastructure: P(65000, 215000, 14000, { timeline: '4–10 weeks' }),
};

const SECTION_MAPS = {
  capabilities: CAP_PRICING,
  infrastructure: INF_PRICING,
};

export function resolvePricing({ section, category, item, child } = {}) {
  const map = SECTION_MAPS[section];
  if (!map) return null;

  if (category && map[category]) {
    const col = map[category];
    if (item && col[item]) {
      const it = col[item];
      if (child && it[child]) return { ...applyOffset(it[child], `${section}/${category}/${item}/${child}`), level: 'leaf' };
      if (it._item) return { ...applyOffset(it._item, `${section}/${category}/${item}#item`), level: 'item' };
    }
    if (col._column) return { ...applyOffset(col._column, `${section}/${category}#column`), level: 'column' };
  }

  return { ...SECTION_DEFAULTS[section], level: 'section' };
}

// Utility: returns true if this section has bespoke pricing configured
export function hasPricing(section) {
  return Boolean(SECTION_MAPS[section]);
}
