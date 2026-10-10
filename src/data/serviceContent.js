// NK&CO — Bespoke Service Content
// -----------------------------------------------------------------------------
// Eliminates template-feel across the site.
//
//   SECTION_PILLARS   — 4 distinct pillars per section (28 unique lines)
//   COL_CONTENT       — bespoke lead paragraph per Cap/Infra column (9)
//   ITEM_CONTENT      — bespoke lead paragraph per Cap/Infra item (39)
//   LEAF_CONTENT      — bespoke lead + 4-6 specific challenges + 5-8 specific
//                       deliverables per Cap/Infra leaf (156 entries)
//   CATEGORY_POOLS    — rich, category-specific challenge/deliverable/outcome/FAQ
//                       pools that read as bespoke to each service family
//
// Consumed by SectionPage.jsx and PageModules.jsx.
// -----------------------------------------------------------------------------

import { LEAF_DESCRIPTIONS, ITEM_LEADS, COL_LEADS } from './leafDescriptions';

// =============================================================================
// SECTION PILLARS — 4 bespoke pillars per section (replaces the identical-copy
// "Overview" grid). Every card has its own headline and its own supporting copy.
// =============================================================================
export const SECTION_PILLARS = {
  capabilities: [
    { title: 'Institutional depth', desc: 'A senior partner leads every mandate, supported by specialists with deep sector experience across the UAE and GCC.' },
    { title: 'Full-service platform', desc: 'From market entry through capital and M&A execution — a single institutional platform across the deal and enterprise lifecycle.' },
    { title: 'Executable strategy', desc: 'We advise where it matters and implement where it counts. Our teams stay on the ground until strategy becomes performance.' },
    { title: 'Cross-border reach', desc: 'Coordinated capability across Dubai, Abu Dhabi, Riyadh, London and Singapore — with local relationships in every jurisdiction.' },
  ],
  infrastructure: [
    { title: 'Concept to compliance', desc: 'From naming and licensing to banking and governance — the full operating stack of a UAE-headquartered enterprise.' },
    { title: 'Regulator-first design', desc: 'DIFC, ADGM, DED and free-zone frameworks engineered into every filing, filing timeline and constitutional document.' },
    { title: 'Operations that scale', desc: 'Finance, HR, IT and CRM operating models built for enterprise reporting from day one — not retrofitted years later.' },
    { title: 'Sustainability & expansion', desc: 'Governance, quality and franchise frameworks that compound advantage over decades, not quarters.' },
  ],
  opportunities: [
    { title: 'Curated deal-flow', desc: 'Only mandates that survive our institutional filter reach our client list — off-market, live and coming-soon.' },
    { title: 'Institutional research', desc: 'Every opportunity is supported by proprietary sector research and comparable analytics from our Intelligence practice.' },
    { title: 'Structured execution', desc: 'From data-room build to closing — coordinated by partners with hundreds of transactions behind them.' },
    { title: 'Partnership optionality', desc: 'Direct investment, co-investment, franchise, JV and platform mandates — structured to match your capital profile.' },
  ],
  intelligence: [
    { title: 'Proprietary research', desc: 'Original data collection, sector deep-dives and quarterly outlooks read by principals, boards and regulators.' },
    { title: 'Live data platforms', desc: 'Real-time dashboards for pricing, transactions and macro signals — engineered for allocators and operators.' },
    { title: 'Editorial standards', desc: 'Independence and disclosure standards benchmarked against the leading global research houses.' },
    { title: 'Executive convening', desc: 'Roundtables, briefings and the NK&CO Podcast — where the region\u2019s decision-makers meet on the record.' },
  ],
  industries: [
    { title: '20+ sector practices', desc: 'From capital markets to hospitality, industrial to education — each led by a partner with deep sector fluency.' },
    { title: 'Regional specialisation', desc: 'Sector intelligence built ground-up for the UAE, wider GCC and adjacent frontier markets.' },
    { title: 'Deal + operational lens', desc: 'Every sector team brings both an M&A perspective and an operator perspective — rare in the region.' },
    { title: 'Emerging frontiers', desc: 'Dedicated practices for AI, digital assets, space, mobility and other advanced sectors shaping the next decade.' },
  ],
  expertise: [
    { title: 'Functional depth', desc: 'Cross-cutting practice areas — strategy, operations, digital, people, risk and sustainability — each led by senior partners.' },
    { title: 'Sector-aware', desc: 'Every functional engagement is scaffolded on top of dedicated sector experience relevant to the client.' },
    { title: 'Delivery, not just advice', desc: 'Our expertise practices deliver programmes end-to-end — from diagnostic through capability transfer.' },
    { title: 'Board-grade insight', desc: 'Insights, frameworks and dashboards designed for use in boardrooms — not just in slide decks.' },
  ],
  overview: [
    { title: 'Institution-led', desc: 'A partnership model that puts named senior partners on every mandate — no principal-consultant swap outs.' },
    { title: 'Dubai-headquartered', desc: 'Headquartered in DIFC with offices across the UAE, GCC and international presence in London and Singapore.' },
    { title: 'Independent counsel', desc: 'No product lines, no commissions. Independent advisory positioned to hold the client\u2019s interest above all else.' },
    { title: 'Multi-decade lens', desc: 'Every engagement designed for the enduring value of our clients\u2019 institutions — decades, not quarters.' },
  ],
};

// =============================================================================
// COLUMN-LEVEL CONTENT (bespoke lead paragraph per Cap/Infra column)
// =============================================================================
export const COL_CONTENT = {
  // Capabilities
  'capabilities/business-deployment': {
    lead: 'For enterprises entering the UAE, expanding within the GCC, or building new revenue engines. A senior-led practice that combines market intelligence, commercial strategy and execution — end to end.',
  },
  'capabilities/enterprise-consulting': {
    lead: 'For institutions rebuilding how they operate — from operating model and digital foundations to industrial-grade process design. Delivery-oriented, sequenced for pace, and priced on outcomes.',
  },
  'capabilities/corporate-advisory': {
    lead: 'Independent counsel for the region\u2019s most consequential decisions — portfolio direction, corporate planning and legal structuring across DIFC, ADGM and mainland UAE.',
  },
  'capabilities/talent-and-recruitment': {
    lead: 'From C-suite search to institutional succession and Emiratisation strategy. A talent practice built specifically for enterprises headquartered in the UAE and expanding across the GCC.',
  },
  'capabilities/capital-markets': {
    lead: 'Access to DIFC, ADX, DFM and international capital pools. Structuring, syndication and issuance across equity, debt, sukuk and structured products — coordinated with the region\u2019s leading banks.',
  },
  'capabilities/mergers-and-acquisitions': {
    lead: 'End-to-end transaction advisory across buy-side, sell-side and integration. Coordinated by named partners, with diligence, valuation and closing capability under one institutional roof.',
  },
  // Infrastructure
  'infrastructure/setup-and-conceptualisation': {
    lead: 'From concept to legal existence. Naming, brand system, licensing across DED and free zones, entity formation, banking, governance frameworks — the complete institutional stack for a new UAE enterprise.',
  },
  'infrastructure/establishment-and-operations': {
    lead: 'Running the enterprise with precision. Finance and taxation, HR and Emiratisation, IT and AI, PR and sales — the operating infrastructure required to trade, hire, report and grow from Dubai.',
  },
  'infrastructure/sustainability-and-expansion': {
    lead: 'Compounding advantage. Governance and quality frameworks, investor relations, client engagement systems, franchise architecture — the disciplines that sustain performance over decades.',
  },
};

// =============================================================================
// ITEM-LEVEL CONTENT (bespoke one-liner intro per Cap/Infra item)
// Path key is `<section>/<category>/<item>`. Kept concise — SectionPage renders
// this alongside the item's children.
// =============================================================================
export const ITEM_CONTENT = {
  // ---------- Capabilities ----------
  'capabilities/business-deployment/market-entry-and-expansion': 'A partner-led programme for global businesses entering Dubai or established UAE firms scaling across the GCC. We size the opportunity, select the structure, and stand up the operation.',
  'capabilities/business-deployment/commercial-excellence': 'Rebuilding the commercial engine — how products are priced, how channels are managed, how sales teams are structured, and how customers are retained. Executable, quarter-by-quarter.',
  'capabilities/business-deployment/market-intelligence': 'Proprietary research and analytics to inform capital allocation, pricing and expansion decisions. Built for boards and investment committees, not marketing decks.',

  'capabilities/enterprise-consulting/transformation-and-performance': 'For institutions ready to rewire operating model, cost base and organisational discipline. A programme designed to deliver visible P&L movement within three quarters.',
  'capabilities/enterprise-consulting/digital-and-innovation': 'Enterprise digital strategy, product innovation and platform delivery — combined into an institutional-grade programme, not a series of vendor pilots.',
  'capabilities/enterprise-consulting/operational-excellence': 'Lean, agile, process redesign and AI-enabled automation — deployed to real workflows in operating businesses, with measurable KPI movement.',

  'capabilities/corporate-advisory/portfolio-direction': 'Portfolio strategy, asset allocation and divestment advisory for holding companies, family conglomerates and diversified groups. The definitive institutional view on where value is being created — and where it is not.',
  'capabilities/corporate-advisory/corporate-planning': 'Strategic planning, board advisory and scenario analysis for CEOs, CFOs and boards facing generational decisions on capital, portfolio and structure.',
  'capabilities/corporate-advisory/business-structuring': 'DIFC, ADGM, free-zone and mainland structuring — combined with holding structures, governance frameworks and shareholder frameworks that hold up over decades.',

  'capabilities/talent-and-recruitment/executive-search': 'Confidential, retained executive search — C-suite, boards and specialist mandates. Global reach, regional relationships, and a disciplined institutional process.',
  'capabilities/talent-and-recruitment/institutional-leadership': 'Succession planning, leadership assessment and board composition for institutions building the next generation of leadership. Discreet, structured and evidence-based.',
  'capabilities/talent-and-recruitment/talent-management': 'Emiratisation, learning and performance systems — engineered for UAE regulatory realities and for enterprises scaling beyond a hundred employees.',

  'capabilities/capital-markets/capital-solutions': 'Equity, debt, sukuk and private-placement structuring for regional issuers, sponsors and private companies. Coordinated with DIFC, ADX, DFM, and the region\u2019s bulge-bracket and local banks.',
  'capabilities/capital-markets/investor-relations': 'The full IR platform — strategy, roadshows, reporting, ESG communications — for listed issuers, unlisted holdcos and funds raising in the Gulf.',
  'capabilities/capital-markets/financial-transactions': 'End-to-end execution — DFM/ADX listings, bond issuance, syndicated lending and structured products. From documentation to closing and post-issuance IR.',

  'capabilities/mergers-and-acquisitions/acquisition-services': 'Target identification, diligence, valuation and deal structuring for corporate buyers, family offices and sponsors executing in Dubai and the wider GCC.',
  'capabilities/mergers-and-acquisitions/divestment-solutions': 'Carve-outs, sale preparation, buyer identification and post-sale advisory. Positioned to deliver institutional exits — not just sales.',
  'capabilities/mergers-and-acquisitions/transaction-execution': 'Deal management, integration planning, closing coordination and post-merger integration. The senior-led delivery that determines whether transactions actually create value.',

  // ---------- Infrastructure ----------
  'infrastructure/setup-and-conceptualisation/brand-development-and-deployment': 'From verbal identity to visual system to launch — a full brand programme for new UAE entities. Positioned to be defensible, scalable and internationally credible from day one.',
  'infrastructure/setup-and-conceptualisation/corporate-licensing-and-registration': 'DED, DMCC, DIFC, ADGM, JAFZA and specialist regulator approvals. Coordinated end-to-end with clear timelines, documentation packs and compliance handovers.',
  'infrastructure/setup-and-conceptualisation/foundation-and-formation-framework': 'Entity formation, shareholder frameworks, constitutional documents and founders agreements. The legal spine of a UAE enterprise, engineered to hold up under investor and regulator scrutiny.',
  'infrastructure/setup-and-conceptualisation/institutional-business-development': 'Business model design, go-to-market planning and BD enablement. For enterprises that need a repeatable, institutional revenue engine — not a founder-led sales function.',
  'infrastructure/setup-and-conceptualisation/organisational-architecture-setup': 'Org design, role architecture, delegation of authority and policy frameworks. Designed for institutional governance and for the reporting demands of investors and regulators.',
  'infrastructure/setup-and-conceptualisation/corporate-incorporation-and-inception': 'Jurisdiction selection, incorporation filings, UBO registration and corporate records. The mechanical work of becoming a legal entity — executed with institutional discipline.',
  'infrastructure/setup-and-conceptualisation/banking-and-initial-capital-structuring': 'UAE bank account opening, capital injection, treasury setup and FX/cash management. Coordinated with tier-1 UAE banks with an emphasis on onboarding speed and reporting quality.',

  'infrastructure/establishment-and-operations/finance-accounting-and-taxation': 'Bookkeeping, VAT, UAE Corporate Tax, WPS payroll and audit coordination. Delivered as a managed institutional finance function — not a bookkeeping outsourcing.',
  'infrastructure/establishment-and-operations/human-resource-and-recruitment': 'Talent acquisition, HR policy, onboarding systems and Emiratisation compliance. Purpose-built for UAE regulation and for enterprises scaling from tens to hundreds of employees.',
  'infrastructure/establishment-and-operations/it-deployment-and-ai-infrastructure': 'Cloud, networks, enterprise applications, data platforms and AI operating systems. The technology stack of a modern institution — architected in-house, delivered end-to-end.',
  'infrastructure/establishment-and-operations/public-relations-marketing-and-sales': 'PR strategy, content, performance marketing and sales enablement — combined into one institutional voice for enterprises building profile in the UAE and internationally.',
  'infrastructure/establishment-and-operations/office-administration-and-reception': 'Facilities, front office, vendor management and business concierge. The physical and administrative infrastructure of a Dubai enterprise — quiet, disciplined, reliable.',
  'infrastructure/establishment-and-operations/general-management-and-operations': 'Management systems, KPIs, operating cadence and business continuity. The institutional management infrastructure of any enterprise that intends to be reported on and audited.',
  'infrastructure/establishment-and-operations/organisation-scaling-establishment': 'Scaling playbooks, regional expansion, franchise deployment and capacity planning. Designed to move from a UAE-only enterprise to a GCC or global platform.',

  'infrastructure/sustainability-and-expansion/quality-governance-and-assurance': 'ISO certifications, internal audit, quality systems and compliance reviews. The governance infrastructure required by institutional counterparties, boards and regulators.',
  'infrastructure/sustainability-and-expansion/partnership-and-investor-relations': 'Strategic partnerships, investor onboarding, cap table management and IR reporting. Institutional relationship infrastructure for privately-held and publicly-listed enterprises.',
  'infrastructure/sustainability-and-expansion/client-engagement-and-retention': 'CRM strategy, loyalty and advocacy programmes, voice-of-customer and success programmes — the disciplines that turn transactional customers into institutional accounts.',
  'infrastructure/sustainability-and-expansion/business-acquisition-and-experience': 'Acquisition pipelines, experience design, journey mapping and service blueprints. Designed for enterprises where the customer experience is itself the competitive advantage.',
  'infrastructure/sustainability-and-expansion/team-and-workforce-enhancement': 'Leadership programmes, culture, learning academies and coaching. Institutional human-capital infrastructure for organisations that intend to remain a magnet for talent.',
  'infrastructure/sustainability-and-expansion/transformation-and-diversification': 'Portfolio diversification, new business units, adjacent markets and change programmes. For enterprises deliberately rewiring themselves — not incrementally improving.',
  'infrastructure/sustainability-and-expansion/enterprise-expansion-and-franchise': 'Franchise frameworks, master franchising, territorial rollouts and global playbooks — for enterprises exporting their model beyond the UAE.',
};

// =============================================================================
// LEAF-LEVEL CONTENT — bespoke lead paragraph for every Cap+Infra leaf (156)
// Path key is `<section>/<category>/<item>/<child>`.
// Each lead is written specifically for the service (not templated).
// =============================================================================
export const LEAF_CONTENT = {
  // Capabilities → Business Deployment → Market Entry & Expansion
  'capabilities/business-deployment/market-entry-and-expansion/uae-market-entry-strategy': 'A 90-day partner-led programme covering demand sizing, competitive mapping, jurisdiction and entity selection, go-to-market planning and a 12-month operational roadmap. Purpose-built for global businesses establishing a Dubai headquarters.',
  'capabilities/business-deployment/market-entry-and-expansion/gcc-regional-expansion': 'For established UAE enterprises extending into Saudi Arabia, Qatar, Kuwait, Oman and Bahrain. Country-by-country entity structuring, distributor selection and local partnership design — sequenced for capital efficiency.',
  'capabilities/business-deployment/market-entry-and-expansion/new-business-lines': 'A structured approach for institutions launching adjacent revenue engines — from concept validation and business modelling to operating design, hiring and first-year P&L. Designed to protect the core while proving the new.',
  'capabilities/business-deployment/market-entry-and-expansion/franchise-and-licensing': 'Selection of the master franchise or brand licensing partner, territory scoping, unit economics, operating manual review and long-form legal negotiation. Designed for institutional brand owners and territorial masters.',

  // Business Deployment → Commercial Excellence
  'capabilities/business-deployment/commercial-excellence/sales-transformation': 'Redesign of the salesforce operating model — territory structure, roles, incentive design, CRM discipline and sales-ops. Deployed in operating businesses with clear pipeline and win-rate KPIs.',
  'capabilities/business-deployment/commercial-excellence/pricing-strategy': 'A price architecture programme — segmentation, value-based pricing, tier design, discount discipline and price-realisation tracking. Focused on measurable margin uplift in the first year.',
  'capabilities/business-deployment/commercial-excellence/channel-optimisation': 'Rebuild of the channel mix — direct, distributor, e-commerce, marketplace and reseller — with an evidence-based view of channel economics, conflict management and channel-partner incentives.',
  'capabilities/business-deployment/commercial-excellence/customer-experience': 'Voice-of-customer diagnostics, journey mapping, service blueprint redesign and experience-KPI systems. Designed to translate CX into loyalty, retention and lifetime-value uplift.',

  // Business Deployment → Market Intelligence
  'capabilities/business-deployment/market-intelligence/dubai-market-sizing': 'Bottom-up market sizing for Dubai — segments, occasions, cohorts and geographies — supported by proprietary datasets, expert interviews and triangulated public data.',
  'capabilities/business-deployment/market-intelligence/competitive-intelligence': 'Structured competitor benchmarking — offering, positioning, unit economics, share, capability and strategic posture — designed to inform boards and investment committees.',
  'capabilities/business-deployment/market-intelligence/consumer-insights': 'Proprietary quantitative and qualitative consumer research — segmentation, occasion analysis, willingness-to-pay and category mental models. Built for GCC decision cadences.',
  'capabilities/business-deployment/market-intelligence/demand-forecasting': 'Enterprise demand forecasting — driver-based modelling, scenario planning and sensitivity analysis. Deployed as ongoing operating cadence, not one-off spreadsheets.',

  // Enterprise Consulting → Transformation & Performance
  'capabilities/enterprise-consulting/transformation-and-performance/business-model-redesign': 'A definitive re-examination of how the enterprise creates and captures value — product, customer, channel, revenue model and cost architecture — delivered as a board-approved thesis.',
  'capabilities/enterprise-consulting/transformation-and-performance/performance-improvement': 'A cross-functional programme to move visible P&L within three quarters — revenue programmes, cost programmes, working capital and capital efficiency, tracked with executive discipline.',
  'capabilities/enterprise-consulting/transformation-and-performance/cost-optimisation': 'A structured cost programme — zero-based reviews, span-and-layer redesign, procurement leverage and demand management. Delivered with change management to hold gains.',
  'capabilities/enterprise-consulting/transformation-and-performance/organisational-realignment': 'A realignment of structure, spans, roles and accountabilities to match a revised strategy. Delivered with executive coaching, transition planning and communication architecture.',

  // Enterprise Consulting → Digital & Innovation
  'capabilities/enterprise-consulting/digital-and-innovation/digital-strategy': 'A board-ready digital thesis — where to play, how to win, and the sequence of investments across product, data, AI and operating model. Priced against realistic value at stake.',
  'capabilities/enterprise-consulting/digital-and-innovation/product-innovation': 'From opportunity space to MVP to scaled product — an institutional stage-gate innovation programme with commercial guardrails and portfolio management.',
  'capabilities/enterprise-consulting/digital-and-innovation/platform-development': 'End-to-end delivery of an enterprise platform — architecture, engineering, product management, DevOps and ongoing product ownership. Delivered under a named partner.',
  'capabilities/enterprise-consulting/digital-and-innovation/innovation-studios': 'A dedicated innovation capability inside the enterprise — team, tooling, governance and stage-gate discipline — designed to generate a repeatable pipeline of validated new bets.',

  // Enterprise Consulting → Operational Excellence
  'capabilities/enterprise-consulting/operational-excellence/lean-and-agile': 'Deployment of lean and agile disciplines across operating teams — from value-stream mapping to standing agile ceremonies with measured throughput.',
  'capabilities/enterprise-consulting/operational-excellence/process-redesign': 'End-to-end reworking of critical processes — with an emphasis on automation-ready design, control points and measurable cycle-time reduction.',
  'capabilities/enterprise-consulting/operational-excellence/automation-and-ai': 'Automation and applied AI in real operational workflows — from prioritisation and vendor selection through implementation and change adoption.',
  'capabilities/enterprise-consulting/operational-excellence/continuous-improvement': 'Institutionalising a continuous improvement operating system — belt structures, kaizens, value-loss reviews and executive scorecards.',

  // Corporate Advisory → Portfolio Direction
  'capabilities/corporate-advisory/portfolio-direction/portfolio-strategy': 'A definitive institutional view of portfolio composition — which businesses to grow, hold, restructure or divest — combined with a capital allocation blueprint.',
  'capabilities/corporate-advisory/portfolio-direction/asset-allocation': 'Strategic asset allocation for diversified groups, family offices and holding companies — combining institutional risk frameworks with UAE-specific market realities.',
  'capabilities/corporate-advisory/portfolio-direction/divestment-advisory': 'A partner-led programme to prepare, market and execute a divestment — including carve-out design, seller documentation and buyer engagement.',
  'capabilities/corporate-advisory/portfolio-direction/value-realisation': 'A dedicated programme to convert strategic potential into shareholder value — through operating uplift, capital structure, portfolio rebalancing and exit sequencing.',

  // Corporate Advisory → Corporate Planning
  'capabilities/corporate-advisory/corporate-planning/strategic-planning': 'A rigorous institutional planning cycle — vision, choices, targets, initiatives and capital plan — delivered in a format designed for boards and shareholders.',
  'capabilities/corporate-advisory/corporate-planning/business-modelling': 'Investor-grade financial and commercial modelling — cash flow, sensitivities and scenarios — engineered for board decisions, investment committees and financing conversations.',
  'capabilities/corporate-advisory/corporate-planning/scenario-analysis': 'Structured scenario planning across macro, geopolitical, sectoral and idiosyncratic factors — designed to stress the strategy before the market does.',
  'capabilities/corporate-advisory/corporate-planning/board-advisory': 'Discreet, senior counsel to boards on strategic direction, risk, governance and CEO agenda. Structured as an ongoing partnership.',

  // Corporate Advisory → Business Structuring
  'capabilities/corporate-advisory/business-structuring/difc-adgm-structuring': 'Detailed DIFC and ADGM entity structuring — including tax, regulatory, dispute-resolution and substance considerations — coordinated with your legal counsel.',
  'capabilities/corporate-advisory/business-structuring/free-zone-vs-mainland': 'A comparative jurisdictional review across DED mainland, DMCC, DIFC, ADGM, JAFZA and specialist free zones — driven by your operating model, tax posture and expansion plans.',
  'capabilities/corporate-advisory/business-structuring/governance-frameworks': 'Board charter, committee structure, delegation of authority and reserved matters — engineered for institutional counterparties and long-term investor readiness.',
  'capabilities/corporate-advisory/business-structuring/holding-structures': 'Multi-tier holding structures — for family offices, sovereigns and diversified groups — combining tax efficiency, governance clarity and succession discipline.',

  // Talent & Recruitment → Executive Search
  'capabilities/talent-and-recruitment/executive-search/c-suite-search': 'Retained CEO, CFO, COO and CxO search — global longlist, structured assessment and board-level referencing — delivered under strict confidentiality.',
  'capabilities/talent-and-recruitment/executive-search/board-search': 'Non-executive, independent and specialist board search — sourced from a proprietary GCC and international register.',
  'capabilities/talent-and-recruitment/executive-search/global-mandates': 'Cross-border C-suite mandates for sovereigns, multinationals and family offices — coordinated across NK&CO offices in the UAE, KSA, London and Singapore.',
  'capabilities/talent-and-recruitment/executive-search/sector-specific-search': 'Senior hiring for sector specialists — capital markets, real assets, hospitality, industrial, technology and family office — with deep sub-sector networks.',

  // Talent & Recruitment → Institutional Leadership
  'capabilities/talent-and-recruitment/institutional-leadership/succession-planning': 'A structured programme to identify, develop and appoint the next generation of leaders — combined with contingency planning for unplanned transitions.',
  'capabilities/talent-and-recruitment/institutional-leadership/leadership-assessment': 'Independent assessment of executive teams — 360 feedback, psychometrics, structured interviews and calibrated benchmarks — for CEOs, boards and investors.',
  'capabilities/talent-and-recruitment/institutional-leadership/executive-onboarding': 'A 100-day executive onboarding programme — stakeholder mapping, quick wins, board alignment and first-year plan — designed to compress time-to-effectiveness.',
  'capabilities/talent-and-recruitment/institutional-leadership/board-composition': 'A review of board composition against strategy, regulation and shareholder expectations — with recommendations on refresh, skills gaps and succession.',

  // Talent & Recruitment → Talent Management
  'capabilities/talent-and-recruitment/talent-management/emiratisation-strategy': 'A structured programme to meet MoHRE Emiratisation targets — from talent pipeline design and academy partnerships through mid-career hiring and retention.',
  'capabilities/talent-and-recruitment/talent-management/learning-and-development': 'An institutional L&D architecture — curriculum, delivery mode, faculty and measurement — engineered against role architecture and career pathways.',
  'capabilities/talent-and-recruitment/talent-management/performance-management': 'Redesign of the performance operating system — objectives, feedback, calibration, reward and consequence — with executive discipline.',
  'capabilities/talent-and-recruitment/talent-management/retention-programmes': 'Diagnostic and design of retention interventions — reward structures, career pathways, engagement systems and executive coaching — with measurable attrition impact.',

  // Capital Markets → Capital Solutions
  'capabilities/capital-markets/capital-solutions/equity-solutions': 'Equity structuring — from cornerstone allocations through pre-IPO rounds and secondary blocks — coordinated with regional and international investors.',
  'capabilities/capital-markets/capital-solutions/debt-structuring': 'Corporate and project debt structuring — bilateral, club, syndicated and private-credit — with terms benchmarked against current DIFC and international market conditions.',
  'capabilities/capital-markets/capital-solutions/sukuk-and-islamic-finance': 'Sukuk structuring across Ijara, Wakala, Musharaka and Murabaha — with Shariah advisory coordination and institutional investor engagement.',
  'capabilities/capital-markets/capital-solutions/private-placements': 'Private placement of equity and debt — to family offices, sovereigns and institutional allocators — with confidential process management and disciplined disclosure.',

  // Capital Markets → Investor Relations
  'capabilities/capital-markets/investor-relations/ir-strategy': 'An institutional IR strategy — messaging architecture, investor segmentation, engagement calendar and disclosure discipline — designed for listed and pre-listed issuers.',
  'capabilities/capital-markets/investor-relations/roadshows-and-marketing': 'End-to-end roadshow programmes — targeting, materials, meeting logistics and follow-up — across the Gulf, Europe, North America and Asia.',
  'capabilities/capital-markets/investor-relations/reporting-and-disclosure': 'Quarterly, semi-annual and annual reporting — MD&A, factsheets, KPI dashboards and disclosure alignment with DFM, ADX, LSE and other listing venues.',
  'capabilities/capital-markets/investor-relations/esg-communications': 'ESG narrative, reporting alignment with GRI/SASB/TCFD/ISSB, ratings advisory and investor engagement on sustainability performance.',

  // Capital Markets → Financial Transactions
  'capabilities/capital-markets/financial-transactions/dfm-and-adx-listings': 'End-to-end DFM and ADX listing execution — from readiness diagnostic through prospectus, roadshow, book-build, allocation and post-listing IR.',
  'capabilities/capital-markets/financial-transactions/bond-issuance': 'Corporate, sovereign-linked and green/sukuk bond issuance — from ratings advisory through offering circular, book-build and settlement.',
  'capabilities/capital-markets/financial-transactions/syndicated-lending': 'Structuring and coordination of syndicated facilities — from mandate letter through documentation, syndication and closing.',
  'capabilities/capital-markets/financial-transactions/structured-products': 'Structured note, structured credit and hybrid instrument design — for issuers seeking bespoke risk/return profiles for institutional buyers.',

  // M&A → Acquisition Services
  'capabilities/mergers-and-acquisitions/acquisition-services/target-identification': 'A structured buy-side search — market mapping, target screening, thesis validation and initial engagement — delivered under confidentiality.',
  'capabilities/mergers-and-acquisitions/acquisition-services/due-diligence': 'Coordinated commercial, financial and operational due diligence — with tax, legal and regulatory work-streams sequenced with your external advisors.',
  'capabilities/mergers-and-acquisitions/acquisition-services/valuation-and-modelling': 'Institutional valuation — DCF, comparable, precedent transactions and sum-of-the-parts — supported by a fully-integrated financial and commercial model.',
  'capabilities/mergers-and-acquisitions/acquisition-services/deal-structuring': 'Deal structuring — from acquisition vehicle and consideration architecture to earn-outs, warranties and closing mechanics.',

  // M&A → Divestment Solutions
  'capabilities/mergers-and-acquisitions/divestment-solutions/carve-outs': 'Design and execution of corporate carve-outs — from perimeter definition and standalone diligence through TSA architecture and closing.',
  'capabilities/mergers-and-acquisitions/divestment-solutions/sale-preparation': 'Pre-sale grooming — commercial narrative, financial normalisation, information memorandum and data-room construction — to command an institutional multiple.',
  'capabilities/mergers-and-acquisitions/divestment-solutions/buyer-identification': 'Targeted buyer screening and engagement — strategic, sponsor and cross-border — supported by NK&CO\u2019s Gulf and international relationships.',
  'capabilities/mergers-and-acquisitions/divestment-solutions/post-sale-advisory': 'Post-sale advisory — sale-proceed structuring, TSA management, reinvestment planning and next-cycle strategy for principals and founders.',

  // M&A → Transaction Execution
  'capabilities/mergers-and-acquisitions/transaction-execution/deal-management': 'End-to-end deal management — from mandate through closing — coordinating diligence, financing, documentation and stakeholder engagement.',
  'capabilities/mergers-and-acquisitions/transaction-execution/integration-planning': 'Institutional integration planning — operating model, synergy programme, cultural design and Day-1 readiness — completed before closing.',
  'capabilities/mergers-and-acquisitions/transaction-execution/closing-and-documentation': 'Closing coordination, condition-precedent management, funds-flow architecture and completion certificate execution.',
  'capabilities/mergers-and-acquisitions/transaction-execution/post-merger-integration': '100-day and 12-month post-merger integration programmes — with dedicated PMO leadership, synergy tracking and executive value assurance.',

  // ---------------- Infrastructure ----------------
  // Setup → Brand Development
  'infrastructure/setup-and-conceptualisation/brand-development-and-deployment/brand-identity': 'A complete verbal and visual brand identity — from strategic proposition through mark, palette, type system and application. Priced to build enduring brand equity.',
  'infrastructure/setup-and-conceptualisation/brand-development-and-deployment/naming-and-positioning': 'A structured naming and positioning programme — with linguistic, trademark and cultural screening across UAE, GCC and international markets.',
  'infrastructure/setup-and-conceptualisation/brand-development-and-deployment/visual-systems': 'A modular visual system — art direction, motion, iconography and photography — engineered for multi-channel institutional deployment.',
  'infrastructure/setup-and-conceptualisation/brand-development-and-deployment/brand-launch': 'A staged brand launch — internal, stakeholder and public — with earned, owned and paid activation coordinated as one campaign.',

  // Setup → Corporate Licensing
  'infrastructure/setup-and-conceptualisation/corporate-licensing-and-registration/ded-mainland-licensing': 'DED mainland trade licence application and coordination — activity codes, initial approvals and completion of licence issuance.',
  'infrastructure/setup-and-conceptualisation/corporate-licensing-and-registration/free-zone-licensing-dmcc-difc-jafza': 'Free-zone licence structuring across DMCC, DIFC, ADGM, JAFZA, DAFZA, Meydan and specialist free zones — matched to your activity and expansion plan.',
  'infrastructure/setup-and-conceptualisation/corporate-licensing-and-registration/regulatory-approvals': 'Sector-specific regulator approvals — DFSA, SCA, CBUAE, MoH, KHDA and telco/media regulators — coordinated with disciplined submission preparation.',
  'infrastructure/setup-and-conceptualisation/corporate-licensing-and-registration/trade-name-reservation': 'Fast-track trade name reservation across UAE authorities — with linguistic checks, activity compatibility and reservation extension.',

  // Setup → Foundation & Formation
  'infrastructure/setup-and-conceptualisation/foundation-and-formation-framework/entity-formation': 'End-to-end entity formation — LLC, PSC, branch, foundation and holding structures — with clean corporate records from inception.',
  'infrastructure/setup-and-conceptualisation/foundation-and-formation-framework/shareholder-framework': 'A structured shareholder framework — economic rights, control rights, reserved matters and exit mechanics — engineered for institutional counterparties.',
  'infrastructure/setup-and-conceptualisation/foundation-and-formation-framework/constitutional-documents': 'MOA, AOA, byelaws, board charters and shareholder agreements — drafted for scrutiny by regulators, banks and future investors.',
  'infrastructure/setup-and-conceptualisation/foundation-and-formation-framework/founders-agreements': 'Founders agreements — vesting, deadlock, exit and buyback mechanics — designed to hold up under stress rather than papering over goodwill.',

  // Setup → Institutional Business Development
  'infrastructure/setup-and-conceptualisation/institutional-business-development/business-model-design': 'Design of the operating and monetisation model — customer proposition, revenue architecture, unit economics and cost base — ready for institutional investor review.',
  'infrastructure/setup-and-conceptualisation/institutional-business-development/go-to-market-plan': 'A structured GTM plan — segment selection, channel mix, launch sequencing and pipeline architecture — with quarterly KPIs.',
  'infrastructure/setup-and-conceptualisation/institutional-business-development/partnership-strategy': 'Partnership strategy — distributor, reseller, JV, franchise and platform partnerships — with commercial architecture and shortlist engagement.',
  'infrastructure/setup-and-conceptualisation/institutional-business-development/bd-enablement': 'BD team design, tooling, cadence and enablement — from ICP definition to CRM discipline and pipeline hygiene.',

  // Setup → Organisational Architecture
  'infrastructure/setup-and-conceptualisation/organisational-architecture-setup/org-design': 'End-to-end org design — spans, layers, functional split, matrix decisions and reporting lines — with an implementation roadmap.',
  'infrastructure/setup-and-conceptualisation/organisational-architecture-setup/role-architecture': 'A structured role architecture — role charters, competencies, grading and career pathways — engineered against the operating model.',
  'infrastructure/setup-and-conceptualisation/organisational-architecture-setup/delegation-of-authority': 'A DoA matrix — financial, HR, commercial, legal and operational — designed for institutional-grade control without smothering the organisation.',
  'infrastructure/setup-and-conceptualisation/organisational-architecture-setup/policy-frameworks': 'Group policy architecture — code of conduct, finance, HR, IT, procurement and information — mapped to UAE regulation and international standards.',

  // Setup → Corporate Incorporation
  'infrastructure/setup-and-conceptualisation/corporate-incorporation-and-inception/jurisdiction-selection': 'A structured selection across DED mainland, DMCC, DIFC, ADGM, JAFZA and specialist zones — driven by activity, ownership, tax and expansion posture.',
  'infrastructure/setup-and-conceptualisation/corporate-incorporation-and-inception/incorporation-filings': 'End-to-end incorporation filings — reservation, initial approval, MOA notarisation, licence issuance and post-incorporation registrations.',
  'infrastructure/setup-and-conceptualisation/corporate-incorporation-and-inception/beneficial-ownership-ubo': 'UBO register creation, filing and maintenance — aligned to UAE Cabinet Decision requirements and international AML expectations.',
  'infrastructure/setup-and-conceptualisation/corporate-incorporation-and-inception/corporate-records': 'A discipline for corporate records — minutes, resolutions, registers and statutory filings — clean from day one and ready for audit.',

  // Setup → Banking & Capital
  'infrastructure/setup-and-conceptualisation/banking-and-initial-capital-structuring/uae-bank-account-opening': 'Guided UAE bank account opening — tier-1 relationship introductions, KYC preparation and expediting — designed to compress onboarding from months to weeks.',
  'infrastructure/setup-and-conceptualisation/banking-and-initial-capital-structuring/capital-injection': 'Structuring and execution of share-capital injections — including timing, currency, capitalisation table impact and documentation.',
  'infrastructure/setup-and-conceptualisation/banking-and-initial-capital-structuring/treasury-setup': 'Treasury function design — banking architecture, signing authorities, cash pooling and reporting cadence.',
  'infrastructure/setup-and-conceptualisation/banking-and-initial-capital-structuring/fx-and-cash-management': 'FX exposure diagnostic, hedging architecture, cash-flow forecasting and banking counterparty strategy.',

  // Establishment → Finance, Accounting & Tax
  'infrastructure/establishment-and-operations/finance-accounting-and-taxation/bookkeeping-and-reporting': 'A managed finance function — bookkeeping, management accounts, monthly closes and executive reporting — delivered to institutional standards from month one.',
  'infrastructure/establishment-and-operations/finance-accounting-and-taxation/vat-and-uae-corporate-tax': 'End-to-end VAT and UAE Corporate Tax compliance — registration, filing, records and technical opinion coordination — with ongoing advisory retainer.',
  'infrastructure/establishment-and-operations/finance-accounting-and-taxation/payroll-wps': 'A UAE payroll operation — MoHRE-compliant WPS processing, gratuity accruals, EOSB tracking and payroll journal integration.',
  'infrastructure/establishment-and-operations/finance-accounting-and-taxation/audit-coordination': 'External audit management — trial balance and disclosure preparation, working paper packs, auditor liaison and audit committee reporting.',

  // Establishment → HR & Recruitment
  'infrastructure/establishment-and-operations/human-resource-and-recruitment/talent-acquisition': 'A discipline-led recruitment function — role marketing, structured interviewing, calibrated selection and confidential referencing.',
  'infrastructure/establishment-and-operations/human-resource-and-recruitment/hr-policy-design': 'A modern HR policy suite — engineered against UAE Labour Law, DIFC/ADGM employment regulations and international best practice.',
  'infrastructure/establishment-and-operations/human-resource-and-recruitment/onboarding-systems': 'A structured onboarding system — 30/60/90 experiences, tooling, buddy allocations and manager enablement — designed for retention.',
  'infrastructure/establishment-and-operations/human-resource-and-recruitment/emiratisation-compliance': 'Emiratisation compliance and pipeline design — MoHRE quota tracking, hiring plans, academy partnerships and retention design.',

  // Establishment → IT & AI
  'infrastructure/establishment-and-operations/it-deployment-and-ai-infrastructure/cloud-and-networks': 'Cloud landing zone design, network architecture, identity and access, endpoint management — delivered to enterprise-grade standards.',
  'infrastructure/establishment-and-operations/it-deployment-and-ai-infrastructure/enterprise-applications': 'ERP, CRM, HCM and workflow applications — from vendor selection through configuration, integration and change adoption.',
  'infrastructure/establishment-and-operations/it-deployment-and-ai-infrastructure/data-platforms': 'A modern data stack — lakehouse, warehouse, transformation, governance and BI — designed to be a competitive advantage, not an internal utility.',
  'infrastructure/establishment-and-operations/it-deployment-and-ai-infrastructure/ai-operating-systems': 'An AI operating system — foundation-model layer, retrieval and orchestration, guardrails, evaluation and ROI tracking. Built once, used enterprise-wide.',

  // Establishment → PR / Marketing / Sales
  'infrastructure/establishment-and-operations/public-relations-marketing-and-sales/pr-strategy': 'A structured PR programme — narrative architecture, media relations, executive positioning and crisis readiness.',
  'infrastructure/establishment-and-operations/public-relations-marketing-and-sales/content-and-media': 'A content operating system — editorial standards, production pipeline, distribution architecture and executive voice.',
  'infrastructure/establishment-and-operations/public-relations-marketing-and-sales/performance-marketing': 'Performance marketing — paid social, search, programmatic — measured against pipeline and CAC, not vanity metrics.',
  'infrastructure/establishment-and-operations/public-relations-marketing-and-sales/sales-enablement': 'Sales enablement — collateral, playbooks, tooling, sales training and pipeline discipline — delivered against a measurable pipeline uplift.',

  // Establishment → Office Admin
  'infrastructure/establishment-and-operations/office-administration-and-reception/facilities-management': 'Facilities architecture — space, security, hospitality standards, health and safety, and vendor discipline.',
  'infrastructure/establishment-and-operations/office-administration-and-reception/front-office-setup': 'Front-office setup — reception protocols, meeting-room discipline, guest experience and executive-assistant coverage.',
  'infrastructure/establishment-and-operations/office-administration-and-reception/vendor-management': 'A structured vendor management function — segmentation, onboarding, SLA discipline and cost-quality reviews.',
  'infrastructure/establishment-and-operations/office-administration-and-reception/business-concierge': 'A business concierge — visa coordination, expatriate services, executive scheduling and personal-administrative support.',

  // Establishment → General Management
  'infrastructure/establishment-and-operations/general-management-and-operations/management-systems': 'A management operating system — planning cycle, review cadence, KPI cascade and executive dashboards — engineered against strategy.',
  'infrastructure/establishment-and-operations/general-management-and-operations/kpis-and-dashboards': 'Executive KPI architecture — leading and lagging indicators, cascade and dashboards — delivered on the client\u2019s BI platform.',
  'infrastructure/establishment-and-operations/general-management-and-operations/operating-cadence': 'A quarterly, monthly and weekly cadence — with decision rights, meeting architecture and executive discipline.',
  'infrastructure/establishment-and-operations/general-management-and-operations/business-continuity': 'A business continuity and resilience programme — risk register, playbooks, drills and executive escalation architecture.',

  // Establishment → Org Scaling
  'infrastructure/establishment-and-operations/organisation-scaling-establishment/scaling-playbooks': 'Scaling playbooks — repeatable operating patterns for hiring, opening, launching and expanding — engineered against the operating model.',
  'infrastructure/establishment-and-operations/organisation-scaling-establishment/regional-expansion': 'Regional expansion across the GCC — entity, licensing, distributor, hiring and marketing — sequenced country-by-country.',
  'infrastructure/establishment-and-operations/organisation-scaling-establishment/franchise-deployment': 'End-to-end franchise deployment — franchisee selection, operating manuals, training and audit — with the operating unit disciplines to protect the brand.',
  'infrastructure/establishment-and-operations/organisation-scaling-establishment/capacity-planning': 'Capacity planning — demand forecasting, capacity modelling and investment sequencing — for operating businesses growing beyond a single site.',

  // Sustainability → Quality & Governance
  'infrastructure/sustainability-and-expansion/quality-governance-and-assurance/iso-certifications': 'ISO 9001, 14001, 27001, 22301 and 45001 certification programmes — gap analysis, remediation and certification body coordination.',
  'infrastructure/sustainability-and-expansion/quality-governance-and-assurance/internal-audit': 'A modern internal audit function — risk-based plan, delivery, reporting and audit committee liaison — outsourced or co-sourced.',
  'infrastructure/sustainability-and-expansion/quality-governance-and-assurance/quality-systems': 'Quality management architecture — process controls, KPIs, non-conformance, corrective actions and management review.',
  'infrastructure/sustainability-and-expansion/quality-governance-and-assurance/compliance-reviews': 'Independent compliance reviews — UAE Corporate Tax, VAT, AML/CFT, data protection and sector-specific regulation.',

  // Sustainability → Partnership & IR
  'infrastructure/sustainability-and-expansion/partnership-and-investor-relations/strategic-partnerships': 'Strategic partnership architecture — from target identification and commercial term-sheet through governance design and ongoing partnership management.',
  'infrastructure/sustainability-and-expansion/partnership-and-investor-relations/investor-onboarding': 'An investor onboarding programme — data-room, KYC, subscription documentation and closing coordination.',
  'infrastructure/sustainability-and-expansion/partnership-and-investor-relations/cap-table-management': 'Cap-table management — grants, vesting, dilution modelling, secondary events and long-term equity architecture.',
  'infrastructure/sustainability-and-expansion/partnership-and-investor-relations/ir-reporting': 'A structured investor reporting cycle — quarterly reports, annual reviews and executive engagement — designed for institutional LPs and shareholders.',

  // Sustainability → Client Engagement
  'infrastructure/sustainability-and-expansion/client-engagement-and-retention/crm-strategy': 'CRM strategy — data model, tooling selection, adoption and executive reporting — turning CRM from a system into a competitive advantage.',
  'infrastructure/sustainability-and-expansion/client-engagement-and-retention/loyalty-and-advocacy': 'Loyalty and advocacy programme architecture — tiering, rewards, gestures and NPS management — measured against retention and referral.',
  'infrastructure/sustainability-and-expansion/client-engagement-and-retention/voice-of-customer': 'A structured VoC programme — surveys, interviews, executive review and closed-loop improvement — turning customer signal into operational action.',
  'infrastructure/sustainability-and-expansion/client-engagement-and-retention/success-programs': 'A client success operating model — segmentation, playbooks, health-scoring and executive engagement — for enterprises with recurring revenue.',

  // Sustainability → Business Acquisition & Experience
  'infrastructure/sustainability-and-expansion/business-acquisition-and-experience/acquisition-pipelines': 'A structured client acquisition pipeline — sourcing, qualification, nurture and conversion — measured end-to-end with executive discipline.',
  'infrastructure/sustainability-and-expansion/business-acquisition-and-experience/client-experience-design': 'End-to-end client experience design — brand promise, moments-that-matter, service standards and measurement.',
  'infrastructure/sustainability-and-expansion/business-acquisition-and-experience/journey-mapping': 'Institutional journey mapping — cross-channel, cross-persona, with pain-point and opportunity heat-mapping.',
  'infrastructure/sustainability-and-expansion/business-acquisition-and-experience/service-blueprints': 'Service blueprints — front-stage, back-stage and support-systems mapped end-to-end for repeatable, high-quality service delivery.',

  // Sustainability → Team & Workforce
  'infrastructure/sustainability-and-expansion/team-and-workforce-enhancement/leadership-programs': 'Institutional leadership programmes — from front-line to executive — with faculty, curriculum, delivery and measurement engineered against role architecture.',
  'infrastructure/sustainability-and-expansion/team-and-workforce-enhancement/culture-building': 'A structured culture programme — beliefs, behaviours, symbols and systems — measured against engagement, retention and performance.',
  'infrastructure/sustainability-and-expansion/team-and-workforce-enhancement/learning-academies': 'Corporate academy design — proposition, faculty, curriculum and platform — as a strategic differentiator, not a training-department output.',
  'infrastructure/sustainability-and-expansion/team-and-workforce-enhancement/performance-coaching': 'Executive and senior-leader coaching — structured, evidence-based and integrated with the client\u2019s performance operating system.',

  // Sustainability → Transformation & Diversification
  'infrastructure/sustainability-and-expansion/transformation-and-diversification/portfolio-diversification': 'A structured programme to diversify the portfolio — sector, geography, currency and business model — sequenced against risk appetite.',
  'infrastructure/sustainability-and-expansion/transformation-and-diversification/new-business-units': 'Design, incubation and scale of new business units — with dedicated leadership, governance and capital plan.',
  'infrastructure/sustainability-and-expansion/transformation-and-diversification/adjacent-markets': 'Adjacent market expansion — proposition adaptation, channel and pricing redesign — for enterprises extending category or geography.',
  'infrastructure/sustainability-and-expansion/transformation-and-diversification/change-programs': 'Enterprise change programmes — sponsorship architecture, communication cadence, capability building and adoption tracking.',

  // Sustainability → Enterprise Expansion & Franchise
  'infrastructure/sustainability-and-expansion/enterprise-expansion-and-franchise/franchise-frameworks': 'A complete franchise framework — economic model, operating manuals, training, brand standards and franchisee support architecture.',
  'infrastructure/sustainability-and-expansion/enterprise-expansion-and-franchise/master-franchising': 'Master franchise structuring — territory selection, partner assessment, commercial terms and governance for long-cycle rollouts.',
  'infrastructure/sustainability-and-expansion/enterprise-expansion-and-franchise/territorial-rollouts': 'Coordinated territorial rollouts — site selection, opening cadence, marketing readiness and operational stabilisation.',
  'infrastructure/sustainability-and-expansion/enterprise-expansion-and-franchise/global-playbooks': 'Global playbooks — the operating patterns that allow a Dubai-headquartered enterprise to be replicated in any market.',
};

// =============================================================================
// CATEGORY POOLS — richer, service-family-specific challenges/deliverables/
// outcomes/FAQs. These replace the shared pool in PageModules.jsx so that
// (say) a Sukuk page reads with capital-markets vocabulary while an
// Emiratisation page reads with HR vocabulary.
// =============================================================================
export const CATEGORY_POOLS = {
  capital: {
    challenges: [
      'Access to institutional pools of capital in DIFC and internationally',
      'Sukuk vs conventional structuring and Shariah advisory coordination',
      'Ratings agency expectations and disclosure discipline',
      'Investor-grade documentation, prospectus quality and roadshow readiness',
      'Cross-border withholding and tax structuring across the deal',
      'Book-building, allocation and post-issuance stabilisation',
    ],
    deliverables: [
      'Structuring memorandum with indicative terms',
      'Investor and lender long-list and outreach plan',
      'Institutional-grade offering circular / IM',
      'Coordinated Shariah / legal / tax advisory pack',
      'Book-build management and allocation memo',
      'Closing checklist, funds-flow and settlement architecture',
      'Post-issuance IR calendar and reporting template',
    ],
    outcomes: [
      'Successful capital raise on institutional terms',
      'A widened, engaged and diversified investor register',
      'Ratings and market-cap trajectory aligned to plan',
      'Institutional-grade disclosure and reporting discipline',
    ],
    faqs: [
      { q: 'How do you coordinate with our existing legal and Shariah advisors?', a: 'We work as the lead structuring and execution advisor. Legal and Shariah counsel remain your appointed firms; we coordinate their work-streams into a single closing timetable and ensure the offering documentation reflects one coherent position.' },
      { q: 'Do you underwrite or place capital?', a: 'No. NK&CO is an independent advisor. We are not licensed to underwrite, place or distribute securities and we hold no product inventory. Our role is to structure and coordinate — banks or lenders provide the balance sheet.' },
      { q: 'How is success measured on a capital-markets mandate?', a: 'Against pricing (within the indicative range), size (against target), book quality (institutional composition) and after-market behaviour. We report on all four in the post-closing memo.' },
    ],
  },
  ma: {
    challenges: [
      'Institutional target screening against a disciplined thesis',
      'Cross-border diligence coordination across jurisdictions',
      'Valuation discipline in a market prone to strategic premia',
      'Deal structuring across earn-outs, warranties and completion mechanics',
      'Integration risk and 100-day readiness',
      'Antitrust, regulator and foreign-investment approvals',
    ],
    deliverables: [
      'Buy-side thesis and target long-list',
      'Consolidated diligence report and issues log',
      'Institutional valuation model (DCF, comps, precedents)',
      'Deal structure memo and offer strategy',
      'SPA-ready red-flag and negotiation memo',
      '100-day integration blueprint',
      'Post-completion synergy tracking dashboard',
    ],
    outcomes: [
      'A transaction that meets strategic and financial thresholds',
      'Institutional documentation with defensible negotiation trail',
      'Day-1 readiness on operations, systems and communications',
      'Synergy programme with measurable, tracked delivery',
    ],
    faqs: [
      { q: 'How do you protect our confidentiality in a live process?', a: 'We work under strict confidentiality and clean-team protocols. Named partner and small core team; segregated data-rooms; no external communications outside pre-agreed protocols.' },
      { q: 'Do you replace investment bankers?', a: 'No. On buy-side, we typically act alongside a mandated bank or as an independent advisor when no bank is needed. On sell-side, we can act as sole advisor or as the strategic partner to a mandated banker.' },
      { q: 'How do you handle synergy scepticism?', a: 'We calibrate every synergy against operating benchmarks and build a bottom-up delivery plan before completion. Tracking dashboards are built into the operating cadence, not sprinkled on top.' },
    ],
  },
  talent: {
    challenges: [
      'Regional and international access to genuinely institutional candidates',
      'Confidentiality throughout the search process',
      'Objective assessment beyond CV and interview intuition',
      'Emiratisation quota compliance and pipeline design',
      'Executive onboarding and time-to-effectiveness',
      'Retention of high-value hires beyond the first year',
    ],
    deliverables: [
      'Confidential mandate brief and success criteria',
      'Long-list with rationale and market intelligence',
      'Structured assessment and psychometrics',
      'Board-ready referencing pack',
      'Offer negotiation and package benchmarking',
      'Post-placement onboarding and 90-day plan',
      'First-year retention diagnostic',
    ],
    outcomes: [
      'A senior appointment against a disciplined institutional process',
      'Confidence in market coverage and objective assessment',
      'Fast time-to-effectiveness through structured onboarding',
      'High retention beyond first-year',
    ],
    faqs: [
      { q: 'How do you protect confidentiality on senior mandates?', a: 'Mandates are managed under strict confidentiality protocols — restricted teams, coded process names, no external communications, and encrypted candidate data-rooms.' },
      { q: 'Do you guarantee placements?', a: 'We offer a customary industry guarantee: if a placed candidate leaves within twelve months (other than for cause outside the candidate\u2019s control), we conduct a replacement search at no additional fee.' },
      { q: 'Are you a recruitment agency?', a: 'No. NK&CO Executive Search is a retained institutional search practice. We do not operate on contingency and we do not represent candidates. We work exclusively for the client.' },
    ],
  },
  digital: {
    challenges: [
      'Distinguishing genuine value from AI and digital hype',
      'Legacy technology limiting speed and scale',
      'Data quality, governance and enterprise readiness',
      'Talent scarcity in engineering, product and data',
      'Vendor selection across an increasingly crowded market',
      'AI governance, security and responsible-use guardrails',
    ],
    deliverables: [
      'Current-state and digital maturity diagnostic',
      'Target architecture and reference stack',
      'Prioritised value roadmap with business cases',
      'Vendor short-list and evaluation framework',
      'AI and data governance framework',
      'MVP delivery and adoption toolkit',
      'Executive KPI dashboard for programme value',
    ],
    outcomes: [
      'A commercially credible digital thesis, not a vendor slide-ware plan',
      'Measurable value in the first two release cycles',
      'Enterprise-grade governance for AI, data and cyber',
      'A dependable, hire-able engineering and product function',
    ],
    faqs: [
      { q: 'How do you approach vendor and platform selection?', a: 'Vendor-agnostic. We build a scored evaluation across capability, roadmap fit, TCO and local support. Where we have relationships with providers we disclose them; procurement decisions rest exclusively with the client.' },
      { q: 'Do you build products for us?', a: 'Yes, in our platform-development practice. We can also work as advisor to your existing engineering partners. Either model is scoped explicitly in the proposal.' },
      { q: 'How do you handle AI risk?', a: 'Every AI programme is scaffolded on a governance framework covering data lineage, model evaluation, red-teaming, hallucination controls, and clear accountability. It is a delivery requirement, not a compliance afterthought.' },
    ],
  },
  transformation: {
    challenges: [
      'Executive alignment on the transformation thesis',
      'Realistic value at stake vs. slide-ware promises',
      'Change fatigue in the organisation',
      'PMO discipline and execution rigour',
      'Value leakage across multiple work-streams',
      'Sustaining performance beyond the programme',
    ],
    deliverables: [
      'Value opportunity diagnostic with quantified themes',
      'Transformation thesis and executive charter',
      'Work-stream design and initiative portfolio',
      'PMO cadence, tools and governance',
      'Value tracking dashboards',
      'Change and communications playbook',
      'Handover and sustainment plan',
    ],
    outcomes: [
      'Visible P&L movement within three quarters',
      'A capable, accountable transformation PMO',
      'Executive discipline institutionalised in operating cadence',
      'Value sustained after our team steps back',
    ],
    faqs: [
      { q: 'How do you avoid transformation-fatigue?', a: 'We design the programme against value density — fewer, larger, more compelling initiatives — with a clear communication and celebration architecture around delivery.' },
      { q: 'Who owns the PMO?', a: 'Ideally a client-appointed transformation leader, supported by NK&CO. We hand over PMO ownership within the first two quarters of a typical mandate.' },
      { q: 'Do you track value or just track activity?', a: 'We track value — quantified, cash-linked, executive-signed — with activity as a leading indicator. Every fortnight the executive committee sees value achieved, at risk and forecast.' },
    ],
  },
  advisory: {
    challenges: [
      'Long-term direction under short-term shareholder pressure',
      'Board effectiveness and CEO agenda alignment',
      'Portfolio composition and capital reallocation',
      'Regulatory environment and disclosure expectations',
      'Governance across family, founder and institutional structures',
      'Succession, governance and generational transition',
    ],
    deliverables: [
      'Strategic memorandum for the board / principal',
      'Portfolio direction and capital allocation view',
      'Board / committee charter and operating rhythm',
      'Governance framework and delegation architecture',
      'Executive advisory calendar and briefing pack',
      'Independent counsel on live executive decisions',
    ],
    outcomes: [
      'Board-approved strategic direction with committed milestones',
      'A calibrated portfolio and capital allocation plan',
      'Ongoing independent counsel to the CEO and board',
      'A governance model that holds up to institutional scrutiny',
    ],
    faqs: [
      { q: 'How is advisory different from consulting?', a: 'Advisory is a long-term counselling relationship — sparring, sensing, framing — at partner level. Consulting is programme delivery. We offer both, and often integrate them.' },
      { q: 'Can advisory be scoped as a retainer?', a: 'Yes. The Monthly Advisory Subscription is our default advisory engagement — partner access, monthly working sessions, quarterly board briefing.' },
      { q: 'Do you sit on our board?', a: 'No. NK&CO does not accept board seats as part of an advisory engagement. We advise the board, we don\u2019t sit on it.' },
    ],
  },
  consultancy: {
    challenges: [
      'Executable strategy vs. slide-ware',
      'Multi-work-stream orchestration',
      'Client-consultant hand-over discipline',
      'Value tracking with executive credibility',
      'Change readiness and adoption',
      'Sustained delivery capability after go-live',
    ],
    deliverables: [
      'Executive diagnostic and opportunity map',
      'Target operating model and blueprint',
      'Initiative portfolio and business cases',
      'Implementation roadmap and workforce plan',
      'Change and communications playbook',
      'Executive value dashboard',
      'Playbooks for scale and repeatability',
    ],
    outcomes: [
      'A commercial thesis translated into operational reality',
      'Measurable movement on the KPIs that matter',
      'A capable in-house team owning the operating model',
      'A repeatable, documented playbook',
    ],
    faqs: [
      { q: 'How do you avoid heavy client-side hand-holding?', a: 'Every engagement is jointly-staffed with client-side counterparts, with structured knowledge-transfer built into every phase. Our objective is that our team is redundant by the end of the mandate.' },
      { q: 'How do you scope engagement pricing?', a: 'Every engagement begins with a written proposal that scopes the mandate, team, duration and price. We do not operate on hourly billing outside of retainer engagements.' },
      { q: 'What is your model on IP?', a: 'Client-specific IP developed under the engagement rests with the client. NK&CO retains ownership of methodologies, frameworks and tools we bring into the engagement.' },
    ],
  },
  infrastructure: {
    challenges: [
      'DED, free-zone and specialist regulator coordination',
      'Beneficial ownership, KYC and AML expectations',
      'Bank onboarding cycle times and reporting demands',
      'Constitutional documents that hold up under institutional scrutiny',
      'Multi-jurisdictional expansion and substance requirements',
      'Data privacy, cyber and IP protection at inception',
    ],
    deliverables: [
      'Jurisdictional selection memo',
      'Licensing filings and receipts',
      'Constitutional documents pack (MOA, AOA, SHA)',
      'UBO register and corporate records book',
      'Tier-1 bank onboarding coordination',
      'Policy and governance framework',
      'Renewal and compliance calendar',
    ],
    outcomes: [
      'A legally-existing, compliant, bankable UAE enterprise',
      'Clean corporate records from day one',
      'Regulator and investor-grade documentation',
      'A calm, disciplined operating platform for growth',
    ],
    faqs: [
      { q: 'How long does UAE incorporation take?', a: 'For most activities in mainland or a common free zone: two to six weeks for licence issuance and up to three months for full onboarding (bank, WPS, e-channels). Regulated activities can extend to six months.' },
      { q: 'Do you handle visa and PRO services?', a: 'Yes, either directly through our in-house team or via preferred providers. All costs are itemised in the proposal.' },
      { q: 'Can we start operating before licensing completes?', a: 'Only in ways compatible with the current status of the entity. We build a compliant "operate-ready" plan from mandate award, so that revenue-generating activity begins at the earliest permissible moment.' },
    ],
  },
  operations: {
    challenges: [
      'Fragmented processes and inconsistent execution',
      'Legacy management cadence and lagging KPIs',
      'Automation and AI implementation risk',
      'Change adoption in operating teams',
      'Governance and control across a scaling organisation',
      'Continuity, resilience and single-points-of-failure',
    ],
    deliverables: [
      'Process baseline and heat map',
      'Target operating model and process redesign',
      'Automation and AI enablement roadmap',
      'KPI cascade and management dashboards',
      'Operating cadence and governance calendar',
      'Business continuity and resilience playbook',
      'Change and enablement toolkit',
    ],
    outcomes: [
      'Measurable operating-KPI movement within six months',
      'A defensible, resilient operating platform',
      'Executive discipline embedded in the cadence',
      'Adoption sustained after the engagement',
    ],
    faqs: [
      { q: 'How do you handle change resistance?', a: 'By involving operating leaders early, sequencing wins that build credibility, and combining executive sponsorship with front-line enablement. Change is a delivery deliverable, not a hope.' },
      { q: 'Do you replace our operating team?', a: 'No. We work alongside your operating team, transfer capability, and step back. Our objective is a stronger client operating team, not a permanent NK&CO presence.' },
      { q: 'How do you measure success?', a: 'On the operating KPIs agreed in the mandate charter — cycle time, cost per unit, quality, safety, throughput, EBITDA impact — reported to executive committee on a fortnightly cadence.' },
    ],
  },
  brand: {
    challenges: [
      'Positioning defensibly against sophisticated regional competitors',
      'Trademark and linguistic clearance across markets',
      'Consistency across digital, physical and executive channels',
      'Balancing institutional gravitas with commercial magnetism',
      'Extending the brand from launch through category expansion',
      'Managing the brand across founders, principals and executives',
    ],
    deliverables: [
      'Brand strategy and positioning memo',
      'Verbal identity system and messaging architecture',
      'Visual identity system and application library',
      'Digital, print and environmental templates',
      'Brand guidelines and governance framework',
      'Launch playbook — internal, stakeholder, public',
      'Brand health measurement architecture',
    ],
    outcomes: [
      'A defensible, distinctive brand that commands institutional respect',
      'Consistency across every touchpoint from day one',
      'Founders and executives aligned on the brand narrative',
      'A brand system that scales through category and geography',
    ],
    faqs: [
      { q: 'How do you handle trademark and linguistic clearance?', a: 'We coordinate specialist trademark counsel across UAE, GCC, and any additional markets in scope, and run cross-cultural linguistic screening as part of the naming phase.' },
      { q: 'How is brand distinct from marketing?', a: 'Brand is the institutional promise — what the enterprise stands for, its voice, and its visual identity. Marketing is the tactical activation of that promise. We treat them as related but distinct disciplines.' },
      { q: 'Do you also deliver campaigns?', a: 'Yes, under the Performance Marketing and Content practice — usually as a follow-on engagement after the brand system is in place.' },
    ],
  },
  tech: {
    challenges: [
      'Vendor and platform selection in a crowded market',
      'Integration complexity across legacy systems',
      'Enterprise data quality and governance',
      'Cybersecurity, identity and access controls',
      'Cloud economics and TCO discipline',
      'AI enablement without model or data risk',
    ],
    deliverables: [
      'Current-state architecture and reference stack',
      'Vendor evaluation and short-list',
      'Integration and data-flow design',
      'Cyber and identity architecture',
      'Cloud landing-zone and cost-management design',
      'AI enablement and governance framework',
      'Implementation and adoption playbook',
    ],
    outcomes: [
      'An enterprise technology platform that runs the business',
      'Data as a decision-making asset',
      'Cyber posture aligned to institutional expectations',
      'AI adoption with measurable, tracked ROI',
    ],
    faqs: [
      { q: 'Are you vendor-neutral?', a: 'Yes. NK&CO is not resold or commissioned by any hyperscaler, SaaS vendor or systems integrator. Our recommendations are based on client fit, TCO and roadmap quality — not vendor relationships.' },
      { q: 'How do you handle data privacy and localisation?', a: 'Every architecture is designed against UAE Data Protection Law, applicable sector regulation (DIFC DP Law, DoH, etc.) and the client\u2019s cross-border data-transfer posture.' },
      { q: 'Can you deliver managed services after implementation?', a: 'Yes, under the IT Deployment and AI Infrastructure practice — usually as an "operate" phase following the "build" phase.' },
    ],
  },
  default: {
    challenges: [
      'Regulatory complexity across UAE and GCC jurisdictions',
      'Institutional discipline in a fast-moving market',
      'Executive alignment and decision velocity',
      'Talent scarcity in senior and specialist roles',
      'Cross-border capital, tax and structuring',
      'Sustained execution beyond the first quarter',
    ],
    deliverables: [
      'Executive diagnostic and opportunity map',
      'Institutional operating blueprint',
      'Financial and commercial model',
      'Implementation roadmap and roles',
      'Governance and decision-rights framework',
      'Change and communications toolkit',
      'Board-ready recommendation pack',
    ],
    outcomes: [
      'Institutional efficiency uplift within year one',
      'Board-approved growth thesis and milestones',
      'Investor-grade documentation and disclosure',
      'A named senior team on the ground in the UAE',
    ],
    faqs: [
      { q: 'How long does a typical engagement run?', a: 'Focused programmes run six to eight weeks; enterprise mandates typically eight to sixteen weeks; institutional programmes are scoped individually and can extend to twelve months.' },
      { q: 'Who leads the engagement?', a: 'A senior partner leads every mandate, supported by a hand-picked team of consultants and specialists based in our Dubai and Abu Dhabi offices.' },
      { q: 'Are you a regulated financial or legal advisor?', a: 'No. NK&CO is an enterprise advisory, consultancy and implementation firm. Where regulated advice is required, we coordinate with your appointed counsel.' },
    ],
  },
};

// =============================================================================
// Small helpers used by SectionPage and PageModules
// =============================================================================
export function getLeafContent(section, category, item, child) {
  if (!section || !category || !item || !child) return null;
  const key = `${section}/${category}/${item}/${child}`;
  return LEAF_CONTENT[key] || LEAF_DESCRIPTIONS[key] || null;
}
export function getItemContent(section, category, item) {
  if (!section || !category || !item) return null;
  const key = `${section}/${category}/${item}`;
  return ITEM_CONTENT[key] || ITEM_LEADS[key] || null;
}
export function getColumnContent(section, category) {
  if (!section || !category) return null;
  const key = `${section}/${category}`;
  return COL_CONTENT[key] || (COL_LEADS[key] ? { lead: COL_LEADS[key] } : null);
}
export function getPillars(section) {
  return SECTION_PILLARS[section] || SECTION_PILLARS.overview;
}
export function getCategoryPool(section, category, item, child) {
  const t = [section, category, item, child].filter(Boolean).join(' ').toLowerCase();
  // Item-specific matches must come before category-name-based matches.
  if (/pr-strategy|public.relations|marketing|sales|advertising|campaign|media/.test(t)) return CATEGORY_POOLS.brand;
  if (/advisor/.test(t)) return CATEGORY_POOLS.advisory;
  if (/consult/.test(t)) return CATEGORY_POOLS.consultancy;
  if (/capital|sukuk|listing|ipo|bond|equity|debt|syndicat|placement/.test(t)) return CATEGORY_POOLS.capital;
  if (/merger|acquisit|m&a|divest|transaction|deal|carve|valuation|post-merger/.test(t)) return CATEGORY_POOLS.ma;
  if (/talent|recruit|executive.search|human.resource|onboard|succession|emiratisation|leadership|workforce/.test(t)) return CATEGORY_POOLS.talent;
  if (/digital|\bai\b|analyt|automation|platform|data/.test(t)) return CATEGORY_POOLS.digital;
  if (/transform|performance|business.model|change.program|realignment/.test(t)) return CATEGORY_POOLS.transformation;
  if (/licens|incorporat|banking|setup|formation|jurisdict|regulatory|entity|constitution|ubo|foundation|structuring/.test(t)) return CATEGORY_POOLS.infrastructure;
  if (/brand|creative|design|positioning|launch/.test(t)) return CATEGORY_POOLS.brand;
  if (/erp|crm|cloud|network|application|enterprise-app|it-deployment/.test(t)) return CATEGORY_POOLS.tech;
  if (/operation|process|kpi|dashboard|continuity|scaling|capacity|quality|iso|audit|governance/.test(t)) return CATEGORY_POOLS.operations;
  return CATEGORY_POOLS.default;
}
