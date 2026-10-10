// NK&CO — Rich page content: scope-of-work, methodology, stats, engagement models
// -----------------------------------------------------------------------------
// This file drives the "comprehensive service page" experience on Cap+Infra
// item and leaf pages. Each entry adds:
//   scope         — array of sub-service categories (each with title + 6-12 items)
//   methodology   — array of 5-6 numbered phases with detail
//   stats         — 3-4 executive-summary statistics
//   engagement    — 3 engagement model options with distinct scope
//   useCases      — 3 real-world scenarios
//   framework     — 2x2 or 3x3 matrix positioning content
// -----------------------------------------------------------------------------

// =============================================================================
// FLAGSHIP: Public Relations, Marketing & Sales — comprehensive expansion
// per user directive (all three disciplines fully enumerated).
// =============================================================================
const PR_MKT_SALES = {
  stats: [
    { value: '3', label: 'Integrated disciplines', note: 'PR, Marketing and Sales run as one institutional operating system.' },
    { value: '80+', label: 'Sub-service capabilities', note: 'From press office management to pipeline forecasting — fully in-house.' },
    { value: '6–14', label: 'Weeks to institutional-grade capability', note: 'From mandate award to operating cadence live.' },
    { value: '360°', label: 'Reputation-to-revenue coverage', note: 'One narrative from press coverage through booked revenue.' },
  ],
  scope: [
    {
      title: 'Public Relations',
      lead: 'A modern institutional press office — corporate narrative, media relations, executive positioning, crisis readiness and stakeholder engagement — engineered to protect and compound reputation.',
      items: [
        { t: 'Corporate communications strategy', d: 'Institutional narrative architecture, message hierarchy, spokesperson doctrine and disclosure standards — the foundation every other communication is built on.' },
        { t: 'Media relations & press office', d: 'Ongoing engagement with tier-1 UAE, GCC and international press — Reuters, Bloomberg, FT, Gulf News, The National, CNBC Arabia — with proactive story pipeline and reactive management.' },
        { t: 'Press release drafting & syndication', d: 'Investor-grade press releases, wire-service syndication, exchange-of-listing disclosures and coordinated international release timing.' },
        { t: 'Crisis communications & readiness', d: 'Crisis playbooks, dark-site infrastructure, executive coaching, war-gaming and 24/7 escalation retainer for reputational events.' },
        { t: 'Reputation management & monitoring', d: 'Continuous digital and print monitoring, sentiment analysis, coverage benchmarking and executive dashboards — mapped against strategic KPIs.' },
        { t: 'Executive profiling & thought leadership', d: 'CEO and executive positioning — bylined articles, keynote pipelines, LinkedIn strategy, book/podcast appearances and long-form point-of-view papers.' },
        { t: 'Stakeholder engagement', d: 'Structured engagement programmes for regulators, communities, industry bodies, associations and public sector counterparts.' },
        { t: 'Government relations & public affairs', d: 'Institutional-grade coordination with UAE federal and emirate-level authorities, sovereign entities and international counterparts — advocacy positions, policy submissions and briefing packs.' },
        { t: 'Investor communications', d: 'IR-grade earnings communications, investor Q&A architecture and shareholder-facing narrative, coordinated with the IR practice.' },
        { t: 'Internal communications', d: 'Enterprise-wide employee communications — CEO letters, town-hall architecture, change communications and cultural narrative alignment.' },
        { t: 'Event communications', d: 'Communications architecture for launches, milestones, capital events and executive convenings — from invite through post-event coverage.' },
        { t: 'CSR & sustainability communications', d: 'Purpose narrative, ESG reporting alignment, community initiative visibility and philanthropy positioning — measured against reputational uplift.' },
        { t: 'Media monitoring & intelligence', d: 'Real-time coverage tracking, competitor share-of-voice, executive sentiment and issue radar — reported to the executive committee monthly.' },
        { t: 'PR retainer & ongoing management', d: 'A named senior partner and ongoing press office team — with quarterly reviews against reputation KPIs and coverage targets.' },
      ],
    },
    {
      title: 'Marketing',
      lead: 'The marketing function of a modern institution — strategy, brand, campaigns, digital, analytics and marketing operations — designed and stood up as a repeatable, measurable engine.',
      items: [
        { t: 'Marketing strategy & positioning', d: 'A market-facing strategy — segmentation, positioning, value proposition, pricing envelope and go-to-market architecture — aligned to enterprise strategy.' },
        { t: 'Marketing department establishment', d: 'End-to-end stand-up of the marketing function — org design, hiring, tooling, budget architecture and vendor ecosystem.' },
        { t: 'Marketing operating model', d: 'Cadence, decision rights, campaign governance, brief architecture, creative approvals and hand-offs with sales — institutional-grade.' },
        { t: 'Brand strategy & positioning', d: 'Brand promise, personality, voice, positioning and equity architecture — as the anchor of every downstream campaign.' },
        { t: 'Market research & consumer insight', d: 'Proprietary quantitative and qualitative research — segmentation, occasion, willingness-to-pay, brand health and category deep-dives.' },
        { t: 'Competitor & category intelligence', d: 'Structured competitor benchmarking, share-of-market tracking, capability audit and category evolution scenarios.' },
        { t: 'Customer segmentation & personas', d: 'Behavioural, needs-based and value-based segmentation — with detailed personas and jobs-to-be-done frameworks.' },
        { t: 'Go-to-market strategy', d: 'Segment prioritisation, channel mix, launch sequencing, partner selection and pricing architecture — with quarterly milestones.' },
        { t: 'Campaign planning & execution', d: 'Annual and quarterly campaign calendar, brief development, creative production, media planning and post-campaign measurement.' },
        { t: 'Brand campaigns & creative', d: 'Brand-building campaigns — 360° creative, TVC, OOH, editorial, digital — designed to build category equity, not just clicks.' },
        { t: 'Digital marketing & performance', d: 'Paid search, paid social, programmatic, display, retargeting and affiliate — measured against CAC, LTV and pipeline contribution.' },
        { t: 'SEO & organic strategy', d: 'Technical, on-page and content SEO — with a semantic content plan, backlink strategy and executive dashboard measurement.' },
        { t: 'Content marketing & editorial', d: 'Content pillars, editorial calendar, production pipeline, distribution architecture and executive-voice content.' },
        { t: 'Social media strategy & management', d: 'Platform strategy, community management, influencer partnerships and executive social — coordinated with PR and thought leadership.' },
        { t: 'Email & marketing automation', d: 'Lifecycle campaigns, nurture flows, transactional email design and marketing-automation platform selection and deployment.' },
        { t: 'CRM strategy & integration', d: 'CRM platform selection, data model, integration with marketing automation and sales enablement — as the enterprise single view of the customer.' },
        { t: 'Marketing analytics & attribution', d: 'Data platform, KPI architecture, attribution models and executive dashboards — turning marketing from cost centre to accountable engine.' },
        { t: 'Lead generation & demand', d: 'Multi-channel demand generation — content offers, webinars, events, syndication and account-based marketing — feeding qualified pipeline into sales.' },
        { t: 'Conversion rate optimisation', d: 'Systematic A/B testing, funnel diagnostics, checkout and lead-form optimisation — with a testing calendar and executive reporting.' },
        { t: 'Product marketing', d: 'Positioning, messaging, launch, competitive intelligence and sales enablement collateral — for enterprises with a product-led revenue engine.' },
        { t: 'Partnership & co-marketing', d: 'Partnership marketing programmes — joint campaigns, co-branded content, distribution partnerships and event partnerships.' },
        { t: 'Marketing governance & compliance', d: 'Legal review, brand compliance, ASA/UAE Media Council alignment, data-privacy and consent architecture.' },
      ],
    },
    {
      title: 'Sales',
      lead: 'The institutional sales function — from strategy through pipeline to closed revenue — established as a repeatable, forecastable, executive-owned engine.',
      items: [
        { t: 'Sales strategy & GTM alignment', d: 'Institutional sales strategy — segments, offers, channels, pricing envelope and revenue targets — aligned with GTM and marketing.' },
        { t: 'Sales department establishment', d: 'End-to-end sales function build — hiring, org design, comp architecture, tooling, playbooks and cadence.' },
        { t: 'Sales operating model', d: 'Territory, roles, quotas, cadence, forecast discipline and hand-offs with marketing and success — designed for scale.' },
        { t: 'Business development function', d: 'BD function design — ICP, outbound cadence, partnership channels, tooling and executive-account discipline.' },
        { t: 'Lead generation & qualification', d: 'Inbound and outbound lead engines, MQL/SQL definitions, qualification frameworks (BANT, MEDDIC, MEDDPICC) and enablement.' },
        { t: 'Pipeline management discipline', d: 'Weekly pipeline reviews, stage gates, deal desk architecture, forecast accuracy and executive discipline — priced against forecast risk.' },
        { t: 'CRM implementation & adoption', d: 'CRM selection (Salesforce, HubSpot, Dynamics), data model, workflow, integration and adoption programme — with executive reporting.' },
        { t: 'Account management & farming', d: 'Named-account programmes — account plans, executive sponsorship, cross-sell and upsell architecture — for enterprises with material customer concentration.' },
        { t: 'Enterprise & complex sales', d: 'Complex sales enablement — deal strategy, executive engagement, procurement navigation and mutual close plans — for six- to eight-figure deals.' },
        { t: 'B2B sales operations', d: 'Sales-ops function — territory, quota, comp administration, tooling, reporting, forecasting and enablement.' },
        { t: 'Proposal & tender support', d: 'Bid management office, proposal libraries, response templates, tender response coordination and win-rate analytics — for enterprises with material tender revenue.' },
        { t: 'Pricing strategy & discount discipline', d: 'Pricing architecture, discount authority, deal desk protocols and price-realisation tracking — coordinated with marketing pricing.' },
        { t: 'Sales enablement & playbooks', d: 'Sales playbooks, battle cards, competitive intelligence, product training and certification programmes.' },
        { t: 'Sales forecasting & analytics', d: 'Forecast methodology (bottoms-up, weighted pipeline, AI-assisted), forecast accuracy measurement and executive dashboard architecture.' },
        { t: 'KPI framework & dashboards', d: 'Sales KPI architecture — pipeline, velocity, win-rate, ACV, CAC-payback — cascaded and dashboarded on the client BI stack.' },
        { t: 'Customer retention & renewals', d: 'Retention motion — renewal management, expansion campaigns, churn early-warning and customer success alignment.' },
        { t: 'Upsell & cross-sell architecture', d: 'Structured cross-sell and upsell — offer packaging, playbooks, incentives and executive dashboards.' },
        { t: 'Sales training & certification', d: 'Onboarding curriculum, ongoing training, certification pathways and executive coaching for senior sales leaders.' },
        { t: 'Sales performance management', d: 'Performance operating system — objectives, coaching, PIP architecture, top-performer programmes and executive discipline.' },
      ],
    },
  ],
  methodology: [
    { n: '01', k: 'Executive diagnostic', v: 'A 3-4 week partner-led diagnostic — audit of current PR/Marketing/Sales function, benchmarking against comparable institutions, and identification of value opportunities across brand, demand and conversion.' },
    { n: '02', k: 'Operating model design', v: 'Design of the target operating model — org, roles, tooling, budget, cadence and hand-offs across all three functions. Formal executive sign-off before build.' },
    { n: '03', k: 'Function stand-up', v: 'Hiring, tooling deployment, playbook authoring, initial campaigns and pipeline load. Named NK&CO partner and delivery team on the ground.' },
    { n: '04', k: 'Programme delivery', v: 'First 90 days of active PR, marketing and sales operations — with weekly executive checkpoints and monthly board-grade reporting.' },
    { n: '05', k: 'Institutionalisation', v: 'Capability transfer, executive dashboards, sustainment playbooks — the function operates without daily NK&CO intervention.' },
    { n: '06', k: 'Ongoing strategic partnership', v: 'Retainer model — partner-level oversight, quarterly strategy reviews, executive briefings and on-demand counsel.' },
  ],
  engagement: [
    { name: 'PR-only retainer', scope: 'Named partner + press office team, ongoing media relations and reputation management. From AED 25,000/month.', suits: 'Established enterprises seeking institutional press-office coverage.' },
    { name: 'Marketing establishment', scope: 'Full marketing function stand-up — strategy, org, tooling and first-90-days campaigns. AED 285,000+ starting engagement.', suits: 'Growing enterprises needing an institutional marketing engine.' },
    { name: 'PR + Marketing + Sales', scope: 'Integrated stand-up across all three disciplines. AED 850,000+ over 6-8 months, then ongoing retainer.', suits: 'Enterprises rebuilding the entire revenue-and-reputation stack.' },
  ],
  useCases: [
    { title: 'Regional bank IPO comms', body: 'Coordinated PR, IR and marketing programme through DFM listing — from prospectus roadshow through post-listing IR cadence and analyst day.' },
    { title: 'Enterprise SaaS market entry', body: 'Full GTM stack for a European SaaS entering the UAE — brand localisation, PR launch, ABM programme and B2B sales team stood up in 5 months.' },
    { title: 'Family conglomerate rebranding', body: 'Multi-brand family group reputation overhaul — narrative architecture, executive positioning, digital rebuild and stakeholder programme.' },
  ],
};

// =============================================================================
// SCOPE dictionary — indexed by section/category/item path
// Every Cap+Infra item gets a scope entry. When not specified, a category-level
// fallback is used (defined below in FALLBACK_SCOPE).
// =============================================================================
export const RICH_ITEM_CONTENT = {
  'infrastructure/establishment-and-operations/public-relations-marketing-and-sales': PR_MKT_SALES,
};

// =============================================================================
// CATEGORY-LEVEL FALLBACK SCOPE — when an item doesn't have a bespoke entry.
// Each category gets a rich scope-of-work list with 6-10 sub-services and
// category-specific methodology + stats + engagement + useCases.
// =============================================================================
const CAT = (scope, methodology, stats, engagement, useCases) => ({ scope, methodology, stats, engagement, useCases });

const METHOD_5 = (labels) => labels.map((l, i) => ({ n: `0${i + 1}`, k: l.k, v: l.v }));

export const CATEGORY_RICH = {
  capital: CAT(
    [{
      title: 'Capital markets scope',
      lead: 'A full institutional capital markets capability — structuring, execution and post-issuance.',
      items: [
        { t: 'Equity capital markets', d: 'Pre-IPO, IPO, secondary offerings and block placements across DFM, ADX and international venues.' },
        { t: 'Debt capital markets', d: 'Bilateral, club, syndicated and public debt — including sukuk, green and sustainability-linked instruments.' },
        { t: 'Islamic finance & Shariah advisory', d: 'Ijara, Wakala, Musharaka, Murabaha structures and Shariah board coordination.' },
        { t: 'Private placements & PIPE', d: 'Confidential private issuances to family offices, sovereigns and institutional investors.' },
        { t: 'Ratings advisory', d: 'Ratings positioning, presentation, and ongoing agency engagement across Fitch, Moody\u2019s and S&P.' },
        { t: 'Investor targeting & roadshows', d: 'Bulge-bracket and specialist buy-side targeting across GCC, Europe, North America and Asia.' },
        { t: 'Institutional documentation', d: 'Offering circulars, prospectuses, information memoranda drafted to institutional standards.' },
        { t: 'Post-issuance IR', d: 'Ongoing investor relations, disclosure discipline and analyst engagement.' },
      ],
    }],
    METHOD_5([
      { k: 'Assess', v: 'Institutional review of balance sheet, capital plan and target investor base.' },
      { k: 'Structure', v: 'Term-sheet architecture, Shariah/legal coordination and rating agency positioning.' },
      { k: 'Document', v: 'Offering documentation prepared to bulge-bracket institutional standards.' },
      { k: 'Market', v: 'Investor outreach, roadshow choreography and book-build management.' },
      { k: 'Close & IR', v: 'Allocation, settlement and post-issuance investor relations handover.' },
    ]),
    [
      { value: '20+', label: 'Recent regional issuances', note: 'Coordinated across sukuk, bonds and equity.' },
      { value: '4', label: 'Institutional bank relationships', note: 'Bulge-bracket, regional and specialist debt houses.' },
      { value: '16–32', label: 'Weeks to close', note: 'Depending on structure and market window.' },
    ],
    [
      { name: 'Structuring only', scope: 'Advisory through to term-sheet execution. From AED 265,000.', suits: 'Issuers with existing bank relationships.' },
      { name: 'Full execution', scope: 'End-to-end from mandate to closing. From AED 950,000.', suits: 'First-time issuers requiring end-to-end institutional coverage.' },
      { name: 'Ongoing IR retainer', scope: 'Post-issuance IR partnership. From AED 40,000/month.', suits: 'Listed issuers institutionalising IR discipline.' },
    ],
    [
      { title: 'Debut sukuk issuance', body: 'AED 1.5B inaugural sukuk for a regional corporate — structured, marketed and closed in 22 weeks.' },
      { title: 'DFM IPO readiness', body: 'End-to-end readiness diagnostic and roadmap for a family-owned real-estate company targeting DFM listing.' },
      { title: 'Cross-border USD notes', body: 'USD 500M investment-grade notes coordinated across NY, London and Dubai.' },
    ],
  ),
  ma: CAT(
    [{
      title: 'M&A scope',
      lead: 'End-to-end transaction advisory — from thesis through 100-day integration.',
      items: [
        { t: 'Buy-side advisory', d: 'Target identification, thesis validation and buy-side execution.' },
        { t: 'Sell-side advisory', d: 'Sale preparation, buyer identification, process management and closing.' },
        { t: 'Financial & commercial due diligence', d: 'Institutional-grade diligence coordinated with tax, legal and specialist advisors.' },
        { t: 'Valuation & modelling', d: 'DCF, comparables, precedents and sum-of-the-parts.' },
        { t: 'Deal structuring & negotiation', d: 'Acquisition vehicle, consideration architecture, earn-outs and warranties.' },
        { t: 'Carve-outs & divestitures', d: 'Perimeter definition, standalone diligence, TSA architecture and closing.' },
        { t: 'Post-merger integration', d: '100-day and 12-month integration programmes with synergy tracking.' },
        { t: 'JV & alliance structuring', d: 'JV design, governance, capital and exit mechanics.' },
      ],
    }],
    METHOD_5([
      { k: 'Screen', v: 'Thesis-driven target screening and initial engagement.' },
      { k: 'Diligence', v: 'Commercial, financial, operational and regulatory diligence coordination.' },
      { k: 'Structure', v: 'Deal architecture, SPA negotiation and completion mechanics.' },
      { k: 'Close', v: 'Documentation execution, funds flow and Day-1 readiness.' },
      { k: 'Integrate', v: 'PMI programme, synergy delivery and value assurance.' },
    ]),
    [
      { value: '100+', label: 'Deal team-years of experience', note: 'Senior partners with regional and international deal history.' },
      { value: '3', label: 'Continents of coverage', note: 'GCC, Europe and Asia deal execution.' },
      { value: '85%', label: 'Post-deal synergy delivery rate', note: 'Against pre-close synergy plan targets.' },
    ],
    [
      { name: 'Diligence only', scope: 'Commercial and financial diligence. From AED 195,000.', suits: 'Corporates with existing M&A advisors.' },
      { name: 'End-to-end sell-side', scope: 'From preparation to closing. From AED 750,000.', suits: 'Owners exiting founder-led businesses.' },
      { name: 'PMI programme', scope: '100-day + 12-month integration. From AED 550,000.', suits: 'Buyers institutionalising synergy delivery.' },
    ],
    [
      { title: 'Regional consolidation', body: 'Coordinated three-target roll-up in industrial services across UAE, KSA and Oman.' },
      { title: 'Cross-border carve-out', body: 'European carve-out sale of a specialty division to a UAE strategic acquirer.' },
      { title: 'Family succession sale', body: 'Confidential sale of a second-generation family enterprise to a regional sponsor.' },
    ],
  ),
  talent: CAT(
    [{
      title: 'Talent & recruitment scope',
      lead: 'Retained executive search and institutional talent capability across leadership levels.',
      items: [
        { t: 'C-suite retained search', d: 'CEO, CFO, COO and CxO search under strict confidentiality.' },
        { t: 'Board & non-executive search', d: 'Independent and specialist board appointments.' },
        { t: 'Global mandates', d: 'Cross-border executive search coordinated with international offices.' },
        { t: 'Sector-specific search', d: 'Deep networks in financial services, real assets, industrial, technology and family office.' },
        { t: 'Emiratisation strategy', d: 'MoHRE-compliant Emiratisation pipeline design and academy partnerships.' },
        { t: 'Executive assessment', d: 'Independent psychometric and structured interview assessment.' },
        { t: 'Succession planning', d: 'Structured succession pipelines and contingency planning.' },
        { t: 'Executive onboarding & 100-day', d: 'Structured onboarding for time-to-effectiveness compression.' },
      ],
    }],
    METHOD_5([
      { k: 'Brief', v: 'Confidential mandate design and success criteria.' },
      { k: 'Search', v: 'Long-listing across regional and international networks.' },
      { k: 'Assess', v: 'Structured interviews, psychometrics and referencing.' },
      { k: 'Land', v: 'Offer, negotiation and 100-day onboarding.' },
      { k: 'Retain', v: 'First-year retention diagnostic and executive coaching.' },
    ]),
    [
      { value: '90%+', label: 'First-year retention', note: 'Against a customary 12-month guarantee.' },
      { value: '10K+', label: 'Executive network', note: 'Proprietary GCC + international register.' },
      { value: '4–12', label: 'Weeks to shortlist', note: 'Depending on mandate confidentiality and seniority.' },
    ],
    [
      { name: 'Single retained mandate', scope: 'One senior appointment. From AED 235,000.', suits: 'Individual leadership hires.' },
      { name: 'Executive team build', scope: 'Multi-mandate coordinated team build. From AED 850,000.', suits: 'Enterprises building new functions or business units.' },
      { name: 'Retainer partnership', scope: 'Ongoing executive search partnership. From AED 35,000/month.', suits: 'Groups with continuous senior hiring needs.' },
    ],
    [
      { title: 'Bank CEO succession', body: 'Confidential CEO search for a mid-sized UAE bank — successful appointment with board and regulator alignment.' },
      { title: 'Family office CIO', body: 'International search for a chief investment officer at a Gulf family office managing multi-asset portfolios.' },
      { title: 'Emiratisation pipeline', body: 'Multi-year Emiratisation programme for a listed conglomerate, including academy partnerships.' },
    ],
  ),
  digital: CAT(
    [{
      title: 'Digital, data & AI scope',
      lead: 'The full stack — from executive digital strategy through platform delivery and enterprise-wide AI enablement.',
      items: [
        { t: 'Digital strategy & roadmap', d: 'Board-ready digital thesis, value-at-stake and sequenced investment plan.' },
        { t: 'Product innovation & MVP', d: 'Idea to MVP to scaled product with institutional stage gates.' },
        { t: 'Platform engineering', d: 'End-to-end product development — architecture, engineering, DevOps.' },
        { t: 'Data platform design', d: 'Lakehouse, warehouse, governance and BI stack.' },
        { t: 'AI operating system', d: 'Foundation-model layer, RAG, orchestration, evaluation and ROI tracking.' },
        { t: 'Cloud & infrastructure', d: 'Cloud landing zones, network architecture, identity and cost management.' },
        { t: 'Cybersecurity architecture', d: 'Identity, endpoint, data protection and security operations.' },
        { t: 'Digital operating model', d: 'Product, engineering and data operating model — hiring and cadence.' },
      ],
    }],
    METHOD_5([
      { k: 'Diagnose', v: 'Digital maturity and legacy architecture review.' },
      { k: 'Architect', v: 'Target stack, AI operating framework and governance design.' },
      { k: 'Build', v: 'MVP delivery, integration and enablement.' },
      { k: 'Scale', v: 'Adoption, value tracking and enterprise-wide rollout.' },
      { k: 'Operate', v: 'Managed hyper-care and ongoing product ownership.' },
    ]),
    [
      { value: '3–7x', label: 'Value multiple on programme cost', note: 'Measured on board-signed value achieved.' },
      { value: '12–24', label: 'Weeks to MVP', note: 'For most enterprise digital products.' },
      { value: '100%', label: 'Vendor-neutrality', note: 'No hyperscaler or SaaS commission relationships.' },
    ],
    [
      { name: 'Strategy engagement', scope: 'Digital strategy through executive roadmap. From AED 187,500.', suits: 'Executives seeking board-ready digital thesis.' },
      { name: 'MVP delivery', scope: 'End-to-end platform build. From AED 665,000.', suits: 'Enterprises delivering a strategic product or platform.' },
      { name: 'Enterprise AI programme', scope: 'AI operating system across the enterprise. From AED 787,500.', suits: 'Large groups institutionalising AI.' },
    ],
    [
      { title: 'Enterprise AI operating system', body: 'AI stack for a Gulf conglomerate — foundation-model layer, RAG, evaluation and enterprise adoption.' },
      { title: 'Banking data platform', body: 'Modern data platform for a regional bank — lakehouse, governance and BI.' },
      { title: 'Digital product for insurer', body: 'Direct-to-consumer digital insurance platform — architecture through go-live in 6 months.' },
    ],
  ),
  transformation: CAT(
    [{
      title: 'Transformation & performance scope',
      lead: 'A disciplined programme to deliver visible P&L movement — sequenced value, executive discipline, sustained after our team steps back.',
      items: [
        { t: 'Value opportunity diagnostic', d: 'Quantified value themes across revenue, cost, working capital and capital.' },
        { t: 'Target operating model design', d: 'Structure, cadence, decision rights and role architecture.' },
        { t: 'Cost & procurement programmes', d: 'Zero-based reviews, span-and-layer and procurement leverage.' },
        { t: 'Revenue transformation', d: 'Commercial engine redesign — pricing, channels, customer.' },
        { t: 'PMO stand-up & discipline', d: 'PMO, cadence, tools and executive scorecards.' },
        { t: 'Change management', d: 'Sponsorship, communications and adoption architecture.' },
        { t: 'Value assurance', d: 'Fortnightly value tracking and executive discipline.' },
        { t: 'Sustainment', d: 'Playbooks, tools and capability transfer to the client team.' },
      ],
    }],
    METHOD_5([
      { k: 'Diagnose', v: 'Executive value mapping and opportunity quantification.' },
      { k: 'Design', v: 'Target model, initiative portfolio and business cases.' },
      { k: 'Mobilise', v: 'PMO and cadence infrastructure activated.' },
      { k: 'Deliver', v: 'Value tracked to the P&L, executive discipline sustained.' },
      { k: 'Embed', v: 'Handover and sustainment plan operational.' },
    ]),
    [
      { value: '5–15%', label: 'EBITDA uplift in year one', note: 'Typical range across delivered programmes.' },
      { value: '90%', label: 'Value tracked to the P&L', note: 'Executive-signed value achievement.' },
      { value: '18–52', label: 'Weeks of active PMO', note: 'Depending on scope and pace.' },
    ],
    [
      { name: 'Diagnostic engagement', scope: 'Executive diagnostic and roadmap. From AED 197,500.', suits: 'Boards commissioning independent value review.' },
      { name: 'Programme delivery', scope: '18–36 week programme with PMO. From AED 690,000.', suits: 'Enterprises seeking visible P&L movement.' },
      { name: 'Ongoing transformation retainer', scope: 'Multi-year transformation partnership. From AED 32,000/month.', suits: 'Groups undertaking long-cycle enterprise transformation.' },
    ],
    [
      { title: 'Industrial performance programme', body: 'Zero-based review + operating model redesign for a UAE industrial group — 11% EBITDA uplift in year one.' },
      { title: 'Retail commercial reset', body: 'Pricing, channel and CX transformation for a regional retail chain.' },
      { title: 'Post-merger integration', body: 'Full PMI for a cross-border acquisition, delivering synergy on plan.' },
    ],
  ),
  infrastructure: CAT(
    [{
      title: 'Institutional infrastructure scope',
      lead: 'The end-to-end operating stack of a UAE enterprise — legally existing, compliant, bankable and audit-ready.',
      items: [
        { t: 'Jurisdiction & structuring', d: 'DED, DMCC, DIFC, ADGM and specialist free-zone selection.' },
        { t: 'Licensing & regulatory approvals', d: 'Trade licence, sector approvals and expediting.' },
        { t: 'Entity formation & records', d: 'Incorporation, MOA/AOA, UBO and corporate records.' },
        { t: 'Governance & policy framework', d: 'Board charter, DoA and group policy suite.' },
        { t: 'Banking & treasury', d: 'Tier-1 bank onboarding, treasury architecture and FX management.' },
        { t: 'Tax & VAT registration', d: 'UAE Corporate Tax, VAT, WPS payroll and audit coordination.' },
        { t: 'HR & Emiratisation', d: 'MoHRE-compliant HR policy suite and Emiratisation plan.' },
        { t: 'IT & operations', d: 'Cloud, network, applications and operating cadence.' },
      ],
    }],
    METHOD_5([
      { k: 'Scope', v: 'Jurisdiction, activity and regulatory scope determined.' },
      { k: 'File', v: 'Applications lodged and expedited across authorities.' },
      { k: 'Onboard', v: 'Bank, WPS, e-channels and initial policy pack activated.' },
      { k: 'Operationalise', v: 'Finance, HR, IT and management systems live.' },
      { k: 'Sustain', v: 'Renewals, compliance calendar and reporting handover.' },
    ]),
    [
      { value: '5–14', label: 'Weeks from mandate to trade licence', note: 'Depending on activity and free-zone selection.' },
      { value: '10+', label: 'UAE bank relationships', note: 'Tier-1 UAE and international onboarding.' },
      { value: '100%', label: 'Compliance & records quality', note: 'Regulator-ready from day one.' },
    ],
    [
      { name: 'Setup only', scope: 'Licensing and formation. From AED 45,000.', suits: 'Founders with existing operations elsewhere.' },
      { name: 'Full institutional stack', scope: 'End-to-end setup + operations. From AED 285,000.', suits: 'Enterprises establishing a UAE headquarters.' },
      { name: 'Group scale-up mandate', scope: 'Multi-entity structuring and expansion. Custom proposal.', suits: 'Groups with regional expansion plans.' },
    ],
    [
      { title: 'European fintech UAE HQ', body: 'DIFC entity, regulatory approvals and bank onboarding in 11 weeks.' },
      { title: 'Family office restructure', body: 'ADGM foundation and holding structure with succession framework.' },
      { title: 'Sovereign JV formation', body: 'Multi-shareholder JV structuring across DIFC and offshore holding jurisdictions.' },
    ],
  ),
  brand: CAT(
    [{
      title: 'Brand development scope',
      lead: 'From institutional positioning through visual identity, activation and long-term governance.',
      items: [
        { t: 'Brand strategy & architecture', d: 'Positioning, brand promise and multi-brand architecture.' },
        { t: 'Naming & trademark clearance', d: 'Naming, linguistic screening and trademark clearance.' },
        { t: 'Verbal identity & voice', d: 'Voice, tone, tagline and messaging framework.' },
        { t: 'Visual identity system', d: 'Mark, palette, typography, iconography and motion.' },
        { t: 'Application design', d: 'Digital, print, environmental and product application.' },
        { t: 'Guidelines & governance', d: 'Comprehensive brand guidelines and governance rhythm.' },
        { t: 'Brand launch programme', d: 'Internal, stakeholder and public activation.' },
        { t: 'Brand health measurement', d: 'Awareness, association and preference measurement.' },
      ],
    }],
    METHOD_5([
      { k: 'Discover', v: 'Institutional and market discovery, executive alignment.' },
      { k: 'Position', v: 'Positioning workshops, competitive review, proposition.' },
      { k: 'Design', v: 'Verbal and visual identity system creation.' },
      { k: 'Launch', v: 'Internal, stakeholder and public activation coordinated.' },
      { k: 'Govern', v: 'Guidelines, governance and brand-health measurement.' },
    ]),
    [
      { value: '6–14', label: 'Weeks to launch-ready brand', note: 'Depending on scope and stakeholder cadence.' },
      { value: '3', label: 'Institutional design leads', note: 'Named senior creative on every mandate.' },
      { value: '30+', label: 'Institutional brand launches', note: 'Across UAE, GCC and international.' },
    ],
    [
      { name: 'Brand refresh', scope: 'Positioning through visual system. From AED 85,000.', suits: 'Established enterprises repositioning.' },
      { name: 'Full brand build', scope: 'End-to-end brand creation and launch. From AED 355,000.', suits: 'New enterprises establishing a category-defining brand.' },
      { name: 'Multi-brand architecture', scope: 'Group brand architecture and governance. Custom proposal.', suits: 'Groups with a multi-brand portfolio.' },
    ],
    [
      { title: 'Family office brand', body: 'Institutional brand for a next-generation Gulf family office.' },
      { title: 'Fintech brand launch', body: 'Category-defining brand for a UAE fintech scale-up.' },
      { title: 'Sovereign entity refresh', body: 'Refreshed institutional brand for a sovereign-linked platform.' },
    ],
  ),
  operations: CAT(
    [{
      title: 'Operations & governance scope',
      lead: 'The disciplines that turn strategy into repeatable execution — process, KPI cadence, quality and resilience.',
      items: [
        { t: 'Management operating system', d: 'Planning cycle, review cadence and executive discipline.' },
        { t: 'KPI cascade & dashboards', d: 'Leading and lagging indicators, BI platform integration.' },
        { t: 'Process redesign', d: 'End-to-end process rework with automation-ready design.' },
        { t: 'Operations excellence', d: 'Lean, six sigma and continuous improvement operating systems.' },
        { t: 'Quality & ISO systems', d: 'ISO 9001/14001/27001/45001 systems and certification.' },
        { t: 'Internal audit & controls', d: 'Risk-based internal audit and control framework.' },
        { t: 'Business continuity', d: 'BCM, resilience planning and executive escalation.' },
        { t: 'Vendor & supplier management', d: 'Segmentation, SLA discipline and cost-quality reviews.' },
      ],
    }],
    METHOD_5([
      { k: 'Baseline', v: 'Process, data and control baseline established.' },
      { k: 'Redesign', v: 'Target operating model and automation opportunities.' },
      { k: 'Pilot', v: 'Priority workflow redesign piloted and stabilised.' },
      { k: 'Scale', v: 'Enterprise rollout and adoption.' },
      { k: 'Embed', v: 'Cadence, KPIs and adoption embedded across teams.' },
    ]),
    [
      { value: '20–35%', label: 'Cycle-time reduction', note: 'Typical range on redesigned workflows.' },
      { value: '4', label: 'ISO systems implemented per year', note: 'Across quality, environment, security and health & safety.' },
      { value: '99.5%', label: 'Uptime on critical processes', note: 'Post-continuity programme.' },
    ],
    [
      { name: 'Operations diagnostic', scope: 'Process and cadence diagnostic. From AED 77,500.', suits: 'Executives seeking operating baseline.' },
      { name: 'Full operating model', scope: 'Redesign and implementation. From AED 337,500.', suits: 'Enterprises institutionalising operations.' },
      { name: 'Operations retainer', scope: 'Ongoing operations and quality partnership. From AED 15,000/month.', suits: 'Groups sustaining continuous improvement.' },
    ],
    [
      { title: 'Manufacturing turnaround', body: 'Process, KPI and quality overhaul for a UAE manufacturer — 28% cycle-time reduction.' },
      { title: 'ISO certification programme', body: 'Coordinated ISO 9001 + 27001 + 45001 certification for a Gulf professional-services firm.' },
      { title: 'Business continuity programme', body: 'Enterprise-wide BCM stand-up including tabletop exercises and executive drills.' },
    ],
  ),
  advisory: CAT(
    [{
      title: 'Advisory scope',
      lead: 'Ongoing counsel at partner level — for boards, principals and executives navigating consequential decisions.',
      items: [
        { t: 'Board advisory', d: 'Discreet, senior counsel on board agenda, effectiveness and succession.' },
        { t: 'Portfolio & capital advisory', d: 'Portfolio composition, capital allocation and value realisation.' },
        { t: 'Strategic planning advisory', d: 'Institutional planning cycles and executive strategy.' },
        { t: 'Corporate governance', d: 'Board charter, committees and reserved matters.' },
        { t: 'Business structuring', d: 'DIFC/ADGM/free-zone and holding-structure design.' },
        { t: 'Family & principal advisory', d: 'Governance, succession and generational transition.' },
        { t: 'CEO advisory', d: 'Independent counsel to CEOs on portfolio, agenda and risk.' },
        { t: 'Interim leadership', d: 'Senior interim advisory during transitions.' },
      ],
    }],
    METHOD_5([
      { k: 'Frame', v: 'Board and principal alignment on the question and horizon.' },
      { k: 'Sense', v: 'Independent listening at partner level.' },
      { k: 'Advise', v: 'Structured memoranda, options and recommendations.' },
      { k: 'Retain', v: 'Ongoing counsel through executive committee cadence.' },
      { k: 'Sustain', v: 'Long-cycle partnership across generational decisions.' },
    ]),
    [
      { value: 'Partner-led', label: 'Every engagement', note: 'No principal-consultant swap outs.' },
      { value: '5-year', label: 'Median advisory tenure', note: 'Multi-year strategic partnership.' },
      { value: 'Independent', label: 'Position on every mandate', note: 'No product lines or commissions.' },
    ],
    [
      { name: 'Monthly advisory subscription', scope: 'Partner-level retainer with monthly working sessions. From AED 27,000/month.', suits: 'Principals and boards requiring ongoing counsel.' },
      { name: 'Board advisory mandate', scope: 'Ongoing board partnership. Custom scope.', suits: 'Boards requiring dedicated advisory.' },
      { name: 'Strategic partnership', scope: 'Multi-year strategic advisory. Custom proposal.', suits: 'Sovereigns, groups and diversified holdings.' },
    ],
    [
      { title: 'Family office board advisory', body: 'Multi-year board advisory to a Gulf family office managing multi-generational transition.' },
      { title: 'Sovereign portfolio review', body: 'Independent portfolio review and capital allocation memo for a sovereign platform.' },
      { title: 'CEO advisory', body: 'Ongoing CEO advisory for a listed regional group across a 3-year strategic cycle.' },
    ],
  ),
  consultancy: CAT(
    [{
      title: 'Consultancy scope',
      lead: 'Programme-led delivery — from executive diagnostic through implementation and capability transfer.',
      items: [
        { t: 'Executive diagnostic', d: 'Rapid, partner-led diagnostic and opportunity map.' },
        { t: 'Operating model design', d: 'Target operating model and business case.' },
        { t: 'Programme delivery', d: 'PMO, cadence, tooling and executive discipline.' },
        { t: 'Change management', d: 'Sponsorship, communications and adoption.' },
        { t: 'Value tracking', d: 'Value assurance and executive dashboards.' },
        { t: 'Capability transfer', d: 'Playbooks, training and hand-over to client team.' },
        { t: 'Sustainment', d: 'Ongoing playbook maintenance and steering.' },
        { t: 'Consultancy memberships', d: 'Quarterly, 6-month and annual membership models.' },
      ],
    }],
    METHOD_5([
      { k: 'Diagnose', v: 'Rapid senior-led diagnostic.' },
      { k: 'Design', v: 'Bespoke blueprint tailored to the mandate.' },
      { k: 'Deliver', v: 'Programme execution with executive discipline.' },
      { k: 'Embed', v: 'Adoption, tooling and cadence embedded.' },
      { k: 'Sustain', v: 'Playbooks and capability transfer complete.' },
    ]),
    [
      { value: 'Named partner', label: 'On every engagement', note: 'Senior partner accountable end-to-end.' },
      { value: '80%', label: 'Value tracked to the P&L', note: 'Executive-signed value achievement.' },
      { value: '10–24', label: 'Weeks per typical engagement', note: 'Focused programmes; enterprise mandates run longer.' },
    ],
    [
      { name: 'Focused engagement', scope: 'Diagnostic + roadmap. From AED 137,500.', suits: 'Executives commissioning targeted programmes.' },
      { name: 'Enterprise programme', scope: 'End-to-end programme delivery. From AED 465,000.', suits: 'Enterprises undertaking major operational shifts.' },
      { name: 'Consultancy membership', scope: 'Annual consultancy retainer. From AED 235,000/year.', suits: 'Groups with continuous consulting needs.' },
    ],
    [
      { title: 'Cost programme', body: 'Zero-based cost programme delivered in 16 weeks with sustained EBITDA impact.' },
      { title: 'Operating model reset', body: 'Enterprise-wide operating model redesign for a listed group.' },
      { title: 'Digital delivery', body: 'End-to-end product delivery for a financial services platform.' },
    ],
  ),
  tech: CAT(
    [{
      title: 'IT & AI infrastructure scope',
      lead: 'Enterprise-grade cloud, applications, data and AI infrastructure — architected, delivered and operated.',
      items: [
        { t: 'Cloud landing zones', d: 'AWS, Azure, GCP landing zone design and cost management.' },
        { t: 'Network & connectivity', d: 'Enterprise networking, SD-WAN and secure remote access.' },
        { t: 'Enterprise applications', d: 'ERP, CRM, HCM, PSA implementation and integration.' },
        { t: 'Data platforms', d: 'Lakehouse, warehouse, ETL, governance and BI.' },
        { t: 'AI operating system', d: 'Foundation-model layer, RAG, orchestration and governance.' },
        { t: 'Cybersecurity', d: 'Identity, endpoint, data protection and SOC.' },
        { t: 'DevOps & platform engineering', d: 'CI/CD, observability and platform engineering.' },
        { t: 'Managed services', d: 'Ongoing hyper-care and managed operations.' },
      ],
    }],
    METHOD_5([
      { k: 'Architect', v: 'Reference stack and integration design.' },
      { k: 'Build', v: 'Implementation, data migration and integration.' },
      { k: 'Secure', v: 'Cyber, identity and governance controls.' },
      { k: 'Operate', v: 'Adoption, cost management and ongoing hyper-care.' },
      { k: 'Evolve', v: 'AI enablement and continuous platform evolution.' },
    ]),
    [
      { value: '25–40%', label: 'Cloud cost efficiency uplift', note: 'Through landing-zone and workload optimisation.' },
      { value: '99.9%', label: 'Availability on production', note: 'Post-platform stabilisation.' },
      { value: '3', label: 'Hyperscaler partnerships', note: 'AWS, Azure and GCP — vendor-neutral.' },
    ],
    [
      { name: 'Cloud landing zone', scope: 'Cloud + network + security foundation. From AED 307,500.', suits: 'Enterprises establishing modern cloud posture.' },
      { name: 'Enterprise applications', scope: 'ERP/CRM/HCM implementation. From AED 517,500.', suits: 'Groups replacing legacy application landscape.' },
      { name: 'AI operating system', scope: 'Enterprise AI stack. From AED 787,500.', suits: 'Large groups institutionalising AI.' },
    ],
    [
      { title: 'Financial services cloud', body: 'DIFC-based cloud landing zone and application platform for a wealth management firm.' },
      { title: 'Regulatory data platform', body: 'Modern data platform for a listed group\u2019s regulatory reporting.' },
      { title: 'Enterprise AI stack', body: 'AI operating system across a conglomerate\u2019s ten business units.' },
    ],
  ),
  default: CAT(
    [{
      title: 'Institutional advisory scope',
      lead: 'A senior-led offering across strategy, structuring and execution — coordinated with your board, executive team and regulators.',
      items: [
        { t: 'Executive diagnostic', d: 'Structured diagnostic of the current position.' },
        { t: 'Institutional blueprint', d: 'Target operating model or programme design.' },
        { t: 'Governance & control', d: 'Governance and decision-rights architecture.' },
        { t: 'Programme delivery', d: 'PMO and executive delivery discipline.' },
        { t: 'Change enablement', d: 'Sponsorship, adoption and communications.' },
        { t: 'Reporting & dashboards', d: 'Executive dashboards and reporting cadence.' },
        { t: 'Ongoing advisory', d: 'Retained partner-level counsel.' },
        { t: 'Capability transfer', d: 'Playbooks and hand-over to client teams.' },
      ],
    }],
    METHOD_5([
      { k: 'Diagnose', v: 'Rapid diagnostic and opportunity map.' },
      { k: 'Design', v: 'Blueprint tailored to the mandate.' },
      { k: 'Structure', v: 'Governance and commercial structuring.' },
      { k: 'Deliver', v: 'Programme execution with executive discipline.' },
      { k: 'Sustain', v: 'Capability transfer and playbooks.' },
    ]),
    [
      { value: 'Named partner', label: 'On every engagement', note: 'Senior accountability end-to-end.' },
      { value: 'UAE', label: 'Headquartered', note: 'Partners on the ground in DIFC.' },
      { value: 'Independent', label: 'On every mandate', note: 'No product lines or commissions.' },
    ],
    [
      { name: 'Focused engagement', scope: 'Diagnostic + roadmap. From AED 100,000.', suits: 'Executives commissioning focused programmes.' },
      { name: 'Enterprise programme', scope: 'End-to-end programme delivery. From AED 400,000.', suits: 'Enterprises institutionalising a capability.' },
      { name: 'Institutional partnership', scope: 'Custom multi-year mandate.', suits: 'Sovereigns, groups and diversified holdings.' },
    ],
    [
      { title: 'Regional strategy programme', body: 'Institutional strategy programme for a listed regional group.' },
      { title: 'Governance overhaul', body: 'Board and committee architecture for a family conglomerate.' },
      { title: 'Cross-border expansion', body: 'GCC expansion programme with entity, licensing and hiring across three countries.' },
    ],
  ),
};

// =============================================================================
// Resolver — returns the rich content for a given path, preferring the most
// specific entry, falling back to category-level.
// =============================================================================
function inferCategoryKey(section, category, item, child) {
  const t = [section, category, item, child].filter(Boolean).join(' ').toLowerCase();
  if (/pr-strategy|public.relations|marketing|sales|advertising|campaign|media/.test(t)) return 'brand';
  if (/advisor/.test(t)) return 'advisory';
  if (/consult/.test(t)) return 'consultancy';
  if (/capital|sukuk|listing|ipo|bond|equity|debt|syndicat|placement/.test(t)) return 'capital';
  if (/merger|acquisit|m&a|divest|transaction|deal|carve|valuation|post-merger/.test(t)) return 'ma';
  if (/talent|recruit|executive.search|human.resource|onboard|succession|emiratisation|leadership|workforce/.test(t)) return 'talent';
  if (/digital|\bai\b|analyt|automation|platform|data/.test(t)) return 'digital';
  if (/transform|performance|business.model|change.program|realignment/.test(t)) return 'transformation';
  if (/licens|incorporat|banking|setup|formation|jurisdict|regulatory|entity|constitution|ubo|foundation|structuring/.test(t)) return 'infrastructure';
  if (/brand|creative|design|positioning|launch/.test(t)) return 'brand';
  if (/erp|crm|cloud|network|application|enterprise-app|it-deployment/.test(t)) return 'tech';
  if (/operation|process|kpi|dashboard|continuity|scaling|capacity|quality|iso|audit|governance/.test(t)) return 'operations';
  return 'default';
}

export function getRichContent(section, category, item, child) {
  // For leaf, look up parent item's rich content
  if (section && category && item) {
    const itemPath = `${section}/${category}/${item}`;
    if (RICH_ITEM_CONTENT[itemPath]) return RICH_ITEM_CONTENT[itemPath];
  }
  const key = inferCategoryKey(section, category, item, child);
  return CATEGORY_RICH[key] || CATEGORY_RICH.default;
}

export function isFlagshipItem(section, category, item) {
  return Boolean(RICH_ITEM_CONTENT[`${section}/${category}/${item}`]);
}
