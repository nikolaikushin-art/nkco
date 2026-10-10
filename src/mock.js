// NK&CO — Dubai-focused enterprise advisory data (v3 - full architecture)
const mk = (label, children) => ({ label, children });

export const slugify = (s = '') =>
  String(s)
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

// Shared image assets
export const IMG = {
  hero: 'https://images.pexels.com/photos/19612315/pexels-photo-19612315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  dubai1: 'https://images.pexels.com/photos/18620036/pexels-photo-18620036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  dubai2: 'https://images.pexels.com/photos/34130500/pexels-photo-34130500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  palm: 'https://images.pexels.com/photos/21856248/pexels-photo-21856248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  marina: 'https://images.pexels.com/photos/30554306/pexels-photo-30554306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  office: 'https://images.pexels.com/photos/15399855/pexels-photo-15399855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  meeting: 'https://images.pexels.com/photos/31709062/pexels-photo-31709062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  curve: 'https://images.pexels.com/photos/31432559/pexels-photo-31432559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  build: 'https://images.pexels.com/photos/32231937/pexels-photo-32231937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  glass: 'https://images.pexels.com/photos/37320179/pexels-photo-37320179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  tower: 'https://images.pexels.com/photos/33410957/pexels-photo-33410957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  build2: 'https://images.pexels.com/photos/934350/pexels-photo-934350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  bay: 'https://images.pexels.com/photos/18341554/pexels-photo-18341554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  villa: 'https://images.unsplash.com/photo-1743819193200-2b292c31c0bc?crop=entropy&cs=srgb&fm=jpg&q=85&w=940',
  lobby: 'https://images.unsplash.com/photo-1578991624414-276ef23a534f?crop=entropy&cs=srgb&fm=jpg&q=85&w=940',
  meetingroom: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=srgb&fm=jpg&q=85&w=940',
  exec1: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&q=85&w=940',
  exec2: 'https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?crop=entropy&cs=srgb&fm=jpg&q=85&w=940',
  exec3: 'https://images.pexels.com/photos/30692588/pexels-photo-30692588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  construction: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?crop=entropy&cs=srgb&fm=jpg&q=85&w=940',
};

// Common supporting content variants per menu type
const S = {
  capabilities: [
    { tag: 'Case study', title: 'A GCC family conglomerate reorganises around three strategic verticals', href: '#', image: IMG.meetingroom },
    { tag: 'Insight', title: 'The private-credit playbook for Gulf mid-market growth', href: '#', image: IMG.tower },
    { tag: 'Report', title: 'The UAE C-Suite Compensation Study 2026', href: '#', image: IMG.lobby },
  ],
  infrastructure: [
    { tag: 'Playbook', title: 'The 30-day UAE incorporation blueprint for global businesses', href: '#', image: IMG.build },
    { tag: 'Perspective', title: 'DIFC vs ADGM vs Mainland \u2014 choosing the right jurisdiction', href: '#', image: IMG.glass },
    { tag: 'Guide', title: 'Corporate Tax & VAT: an operator\u2019s guide for 2026', href: '#', image: IMG.office },
  ],
  opportunities: [
    { tag: 'Off-market', title: 'Portfolio of Grade-A logistics assets \u2014 Dubai South', href: '#', image: IMG.marina },
    { tag: 'Live mandate', title: 'Boutique hospitality group seeking growth capital', href: '#', image: IMG.dubai2 },
    { tag: 'Research', title: 'The Institutional Deal Board \u2014 Q1 2026', href: '#', image: IMG.villa },
  ],
  intelligence: [
    { tag: 'Flagship', title: 'UAE Real Estate Market Review \u2014 Q1 2026', href: '#', image: IMG.hero },
    { tag: 'Outlook', title: 'Global Capital Flows Outlook 2026', href: '#', image: IMG.tower },
    { tag: 'Live data', title: 'The Dubai Grade-A Office Live Dashboard', href: '#', image: IMG.glass },
  ],
  industries: [
    { tag: 'Sector study', title: 'The Future of Real Estate & Living in the UAE', href: '#', image: IMG.bay },
    { tag: 'Deep-dive', title: 'DIFC at 20 \u2014 the region\u2019s financial capital, next chapter', href: '#', image: IMG.glass },
    { tag: 'Perspective', title: 'The industrial supercycle \u2014 UAE logistics & manufacturing', href: '#', image: IMG.construction },
  ],
  expertise: [
    { tag: 'Practice', title: 'AI, Data & Digital Transformation \u2014 the enterprise playbook', href: '#', image: IMG.office },
    { tag: 'Advisory', title: 'The next generation of Gulf family office governance', href: '#', image: IMG.exec2 },
    { tag: 'Research', title: 'ESG in the GCC: from disclosure to enterprise value', href: '#', image: IMG.curve },
  ],
  overview: [
    { tag: 'Firm', title: 'Building institutions that last \u2014 the NK&CO story', href: '#', image: IMG.build2 },
    { tag: 'Careers', title: 'Join a firm building the next generation of advisory', href: '#', image: IMG.meeting },
    { tag: 'Newsroom', title: 'NK&CO advises on landmark hospitality transaction in Dubai', href: '#', image: IMG.dubai1 },
  ],
};

// ==================================================================
// CAPABILITIES
// ==================================================================
export const CAPABILITIES_MENU = {
  key: 'capabilities',
  layout: 'columns',
  title: 'Capabilities',
  description:
    'Deep functional expertise combined with unrivalled knowledge of Dubai and the wider GCC \u2014 engineered to help institutions solve their most consequential challenges.',
  exploreLabel: 'Explore all capabilities',
  exploreHref: '/capabilities',
  featured: {
    tag: 'Featured insight',
    title: 'Dubai 2040 Urban Master Plan \u2014 Institutional Playbook',
    description: 'How the 2040 vision is reshaping capital allocation across housing, mobility and mixed-use districts.',
    ctaLabel: 'Read the report',
    ctaHref: '/intelligence/publications/dubai-2040-playbook',
    image: IMG.curve,
  },
  supporting: S.capabilities,
  columns: [
    {
      title: 'Business Deployment',
      description: 'Enter the UAE market and build sustainable growth engines.',
      items: [
        mk('Market Entry & Expansion', ['UAE Market Entry Strategy', 'GCC Regional Expansion', 'New Business Lines', 'Franchise & Licensing', 'Joint Venture Entry']),
        mk('Commercial Excellence', ['Sales Transformation', 'Pricing Strategy', 'Channel Optimisation', 'Customer Experience', 'Key Account Management', 'Go-to-Market Design', 'Revenue Operations']),
        mk('Market Intelligence', ['Dubai Market Sizing', 'Competitive Intelligence', 'Consumer Insights', 'Demand Forecasting']),
      ],
      viewAll: 'View all in Business Deployment',
    },
    {
      title: 'Enterprise Consulting',
      description: 'Transform operations and unlock institutional performance.',
      items: [
        mk('Transformation & Performance', ['Business Model Redesign', 'Performance Improvement', 'Cost Optimisation', 'Organisational Realignment', 'Operating Model Design', 'Transformation Office']),
        mk('Digital & Innovation', ['Digital Strategy', 'Product Innovation', 'Platform Development', 'Innovation Studios', 'Venture Building', 'Customer Experience Design', 'Emerging Technology Scouting', 'Digital Capability Building']),
        mk('Operational Excellence', ['Lean & Agile', 'Process Redesign', 'Automation & AI', 'Continuous Improvement', 'Supply Chain Optimisation']),
      ],
      viewAll: 'View all in Enterprise Consulting',
    },
    {
      title: 'Corporate Advisory',
      description: 'Navigate complexity and build long-term institutional value.',
      items: [
        mk('Portfolio Direction', ['Portfolio Strategy', 'Asset Allocation', 'Divestment Advisory', 'Value Realisation']),
        mk('Corporate Planning', ['Strategic Planning', 'Business Modelling', 'Scenario Analysis', 'Board Advisory', 'Annual Budgeting', 'Performance Targets']),
        mk('Business Structuring', ['DIFC / ADGM Structuring', 'Free Zone vs Mainland', 'Governance Frameworks', 'Holding Structures', 'Family Business Structuring', 'Intercompany Frameworks', 'Cross-Border Structures']),
      ],
      viewAll: 'View all in Corporate Advisory',
    },
    {
      title: 'Talent & Recruitment',
      description: 'Attract, develop, and retain exceptional leadership.',
      items: [
        mk('Executive Search', ['C-Suite Search', 'Board Search', 'Global Mandates', 'Sector-Specific Search', 'Interim Executive Placement']),
        mk('Institutional Leadership', ['Succession Planning', 'Leadership Assessment', 'Executive Onboarding', 'Board Composition']),
        mk('Talent Management', ['Emiratisation Strategy', 'Learning & Development', 'Performance Management', 'Retention Programmes', 'Compensation & Benefits', 'Workforce Planning', 'Employer Branding', 'Succession Pipelines']),
      ],
      viewAll: 'View all in Talent & Recruitment',
    },
    {
      title: 'Capital Markets',
      description: 'Access DIFC and international capital pools that drive growth.',
      items: [
        mk('Capital Solutions', ['Equity Solutions', 'Debt Structuring', 'Sukuk & Islamic Finance', 'Private Placements', 'Growth Capital', 'Venture Debt']),
        mk('Investor Relations', ['IR Strategy', 'Roadshows & Marketing', 'Reporting & Disclosure', 'ESG Communications', 'Capital Markets Days']),
        mk('Financial Transactions', ['DFM & ADX Listings', 'Bond Issuance', 'Syndicated Lending', 'Structured Products', 'IPO Readiness', 'Rights Issues', 'Convertible Instruments']),
      ],
      viewAll: 'View all in Capital Markets',
    },
    {
      title: 'Mergers & Acquisitions',
      description: 'Execute strategic transactions and create lasting impact.',
      items: [
        mk('Acquisition Services', ['Target Identification', 'Due Diligence', 'Valuation & Modelling', 'Deal Structuring']),
        mk('Divestment Solutions', ['Carve-outs', 'Sale Preparation', 'Buyer Identification', 'Post-Sale Advisory', 'Management Buy-Outs', 'Vendor Due Diligence']),
        mk('Transaction Execution', ['Deal Management', 'Integration Planning', 'Closing & Documentation', 'Post-Merger Integration', 'Merger Clearance Filings']),
      ],
      viewAll: 'View all in Mergers & Acquisitions',
    },
  ],
};

// ==================================================================
// INFRASTRUCTURE
// ==================================================================
export const INFRASTRUCTURE_MENU = {
  key: 'infrastructure',
  layout: 'oms',
  title: 'Infrastructure',
  subtitle: 'Operations Management System (OMS)',
  description: 'Integrated CRM, workflow automation and business intelligence \u2014 one operating environment engineered for enterprises headquartered in the UAE.',
  exploreLabel: 'Read more about OMS',
  exploreHref: '/infrastructure',
  featured: {
    tag: 'Featured platform',
    title: 'OMS 6.0 \u2014 the operating system for institutions',
    description: 'CRM, BI, automation and compliance on one enterprise platform.',
    ctaLabel: 'Explore OMS',
    ctaHref: '/infrastructure/oms',
    image: IMG.build,
  },
  supporting: S.infrastructure,
  columns: [
    {
      title: 'Setup & Conceptualisation',
      description: 'From concept to legal existence.',
      items: [
        mk('Brand Development & Deployment', ['Brand Identity', 'Naming & Positioning', 'Visual Systems', 'Brand Launch', 'Brand Architecture', 'Brand Guidelines', 'Corporate Communications', 'Brand Audits']),
        mk('Corporate Licensing & Registration', ['DED / Mainland Licensing', 'Free Zone Licensing (DMCC, DIFC, JAFZA)', 'Regulatory Approvals', 'Trade Name Reservation']),
        mk('Foundation & Formation Framework', ['Entity Formation', 'Shareholder Framework', 'Constitutional Documents', 'Founders Agreements', 'Articles of Association', 'Board & Committee Charters', 'Shareholder Agreements']),
        mk('Institutional Business Development', ['Business Model Design', 'Go-to-Market Plan', 'Partnership Strategy', 'BD Enablement', 'Pipeline Development', 'Pricing & Proposals']),
        mk('Organisational Architecture Setup', ['Org Design', 'Role Architecture', 'Delegation of Authority', 'Policy Frameworks', 'Committee Structures']),
        mk('Corporate Incorporation & Inception', ['Jurisdiction Selection', 'Incorporation Filings', 'Beneficial Ownership (UBO)', 'Corporate Records', 'Licence Activation']),
        mk('Banking & Initial Capital Structuring', ['UAE Bank Account Opening', 'Capital Injection', 'Treasury Setup', 'FX & Cash Management', 'Banking Relationship Management', 'Trade Finance Setup', 'Capital Structure Planning']),
      ],
      viewAll: 'Start business setup',
    },
    {
      title: 'Establishment & Operations',
      description: 'Run the enterprise with precision.',
      items: [
        mk('Finance, Accounting & Taxation', ['Bookkeeping & Reporting', 'VAT & UAE Corporate Tax', 'Payroll (WPS)', 'Audit Coordination']),
        mk('Human Resource & Recruitment', ['Talent Acquisition', 'HR Policy Design', 'Onboarding Systems', 'Emiratisation Compliance', 'Compensation Benchmarking', 'Visa & Labour Administration']),
        mk('IT Deployment & AI Infrastructure', ['Cloud & Networks', 'Enterprise Applications', 'Data Platforms', 'AI Operating Systems', 'Cybersecurity Frameworks', 'Digital Workplace', 'IT Governance', 'Managed IT Services']),
        mk('Public Relations, Marketing & Sales', ['PR Strategy', 'Content & Media', 'Performance Marketing', 'Sales Enablement', 'Brand Campaigns']),
        mk('Office Administration & Reception', ['Facilities Management', 'Front Office Setup', 'Vendor Management', 'Business Concierge']),
        mk('General Management & Operations', ['Management Systems', 'KPIs & Dashboards', 'Operating Cadence', 'Business Continuity', 'Executive Reporting', 'Programme Management Office']),
        mk('Organisation Scaling Establishment', ['Scaling Playbooks', 'Regional Expansion', 'Franchise Deployment', 'Capacity Planning', 'Shared Services Design', 'Systems Scalability', 'New Market Setup']),
      ],
      viewAll: 'Explore establishment',
    },
    {
      title: 'Sustainability & Expansion',
      description: 'Compound advantage over decades.',
      items: [
        mk('Quality Governance & Assurance', ['ISO Certifications', 'Internal Audit', 'Quality Systems', 'Compliance Reviews', 'Risk Management']),
        mk('Partnership & Investor Relations', ['Strategic Partnerships', 'Investor Onboarding', 'Cap Table Management', 'IR Reporting']),
        mk('Client Engagement & Retention', ['CRM Strategy', 'Loyalty & Advocacy', 'Voice of Customer', 'Success Programs', 'Customer Segmentation', 'Churn Reduction', 'Account Growth Planning', 'Service Level Design']),
        mk('Business Acquisition & Experience', ['Acquisition Pipelines', 'Client Experience Design', 'Journey Mapping', 'Service Blueprints', 'Lead Qualification', 'Onboarding Experience']),
        mk('Team & Workforce Enhancement', ['Leadership Programs', 'Culture Building', 'Learning Academies', 'Performance Coaching', 'Talent Mobility']),
        mk('Transformation & Diversification', ['Portfolio Diversification', 'New Business Units', 'Adjacent Markets', 'Change Programs', 'Strategic Acquisitions', 'Venture Incubation', 'Business Reinvention']),
        mk('Enterprise Expansion & Franchise', ['Franchise Frameworks', 'Master Franchising', 'Territorial Rollouts', 'Global Playbooks']),
      ],
      viewAll: 'Begin sustainability',
    },
  ],
};

// ==================================================================
// OPPORTUNITIES
// ==================================================================
export const OPPORTUNITIES_MENU = {
  key: 'opportunities',
  layout: 'deals',
  title: 'Opportunities',
  description: 'A curated deal-flow of live investments, businesses for sale and institutional partnerships across the UAE and GCC.',
  exploreLabel: 'Browse the full deal board',
  exploreHref: '/opportunities',
  featured: {
    tag: 'Featured mandate',
    title: 'Institutional Real Assets Fund \u2014 Series III',
    description: 'A curated fund investing across Dubai\u2019s Grade-A hospitality and living portfolios.',
    ctaLabel: 'View the mandate',
    ctaHref: '/opportunities/mandates/series-iii',
    image: IMG.marina,
  },
  supporting: S.opportunities,
  featuredDeals: [
    { status: 'Live', sector: 'Hospitality', title: '5-star boutique hotel \u2014 Downtown Dubai', metrics: [{ k: 'Ticket', v: 'AED 320M' }, { k: 'Yield', v: '7.2%' }], image: IMG.dubai2 },
    { status: 'Off-market', sector: 'Residential', title: 'Portfolio of 42 branded residences \u2014 Palm Jumeirah', metrics: [{ k: 'GAV', v: 'AED 1.2B' }, { k: 'Hold', v: '7\u201310 yrs' }], image: IMG.palm },
    { status: 'Coming soon', sector: 'Logistics', title: 'Grade-A warehousing platform \u2014 Jebel Ali', metrics: [{ k: 'GLA', v: '850k sqft' }, { k: 'WAULT', v: '6.4 yrs' }], image: IMG.marina },
  ],
  columns: [
    {
      title: 'Business Opportunities',
      description: 'Operating businesses for sale, spin-outs and platform plays.',
      items: [
        mk('Businesses For Sale', ['Established Operators', 'Cash-Generative SMEs', 'Founder-Led Exits', 'Distressed Assets', 'Franchise Businesses', 'Management Buy-In Targets']),
        mk('Spin-Outs & Carve-Outs', ['Divestment Perimeters', 'Standalone Diligence', 'TSA Structuring', 'Vendor-Assist Programmes', 'Employee Transfer Planning']),
        mk('Platform Plays', ['Roll-Up Theses', 'Buy-and-Build', 'Sector Consolidation', 'Portfolio Recapitalisation', 'Add-On Pipelines', 'Operational Integration', 'Exit Readiness', 'Sponsor-Backed Platforms']),
      ],
      viewAll: 'Explore Business Opportunities',
    },
    {
      title: 'Commercial Concepts',
      description: 'F&B, retail, wellness and lifestyle concepts ready to scale.',
      items: [
        mk('F&B Concepts', ['Fine Dining', 'Casual Dining', 'Coffee & Bakery', 'Cloud Kitchens']),
        mk('Retail & Lifestyle', ['Beauty & Wellness', 'Luxury Retail', 'Experiential Retail', 'Multi-Brand Platforms', 'Fashion & Accessories', 'Home & Interiors', 'Specialty Retail']),
        mk('Ready-to-Scale Brands', ['Regional Rollouts', 'International Master', 'Category Extensions', 'Digital-First Concepts', 'Regional Franchising', 'Licensing Programmes']),
      ],
      viewAll: 'Explore Commercial Concepts',
    },
    {
      title: 'Institutional Investment',
      description: 'Real assets, credit and platform opportunities for institutions.',
      items: [
        mk('Real Assets', ['Hospitality Portfolios', 'Grade-A Offices', 'Logistics & Industrial', 'Master-Planned Communities', 'Healthcare Facilities']),
        mk('Private Credit', ['Senior Direct Lending', 'Mezzanine & Unitranche', 'Special Situations', 'Trade & Working Capital', 'Asset-Backed Lending']),
        mk('Platform Mandates', ['Fund-of-Ones', 'Sovereign Co-Invest', 'Family Office Platforms', 'Cross-Border Vehicles', 'Co-Investment Platforms', 'Managed Accounts', 'Feeder Structures']),
      ],
      viewAll: 'Explore Investment Mandates',
    },
    {
      title: 'Partnership Participation',
      description: 'Joint ventures, franchise and co-investment mandates.',
      items: [
        mk('Joint Ventures', ['Sovereign JVs', 'Corporate JVs', 'Development JVs', 'Operating JVs']),
        mk('Franchise Opportunities', ['Master Franchise UAE', 'Regional Territories', 'Territorial Rollouts', 'Brand Partnerships', 'Single-Unit Franchises', 'Multi-Unit Development']),
        mk('Co-Investment', ['Real-Asset Co-Invest', 'Private-Equity Co-Invest', 'Direct Deal Co-Invest', 'Family-Office Co-Invest', 'Infrastructure Co-Invest', 'Growth Equity Co-Invest', 'Credit Co-Invest', 'Sponsor Co-Invest']),
      ],
      viewAll: 'Explore Partnership Mandates',
    },
  ],
};

// ==================================================================
// INTELLIGENCE
// ==================================================================
export const INTELLIGENCE_MENU = {
  key: 'intelligence',
  layout: 'publications',
  title: 'Intelligence',
  description: 'Proprietary research, data platforms, and market intelligence \u2014 the definitive institutional view on the UAE and GCC economy.',
  exploreLabel: 'Explore all intelligence',
  exploreHref: '/intelligence',
  featured: {
    tag: 'Flagship report',
    title: 'UAE Real Estate Market Review \u2014 Q1 2026',
    description: 'The definitive quarterly view on housing, commercial and hospitality assets across the Emirates.',
    ctaLabel: 'Read the report',
    ctaHref: '/intelligence/publications/uae-q1-2026',
    image: IMG.hero,
  },
  supporting: S.intelligence,
  featuredPublications: [
    { tag: 'Flagship report', date: 'Q1 2026', title: 'UAE Real Estate Market Review \u2014 Q1 2026', excerpt: 'The definitive quarterly view on housing, commercial and hospitality assets across the Emirates.', image: IMG.hero },
    { tag: 'Outlook', date: '2026', title: 'Global Capital Flows Outlook 2026', excerpt: 'Capital movement, allocation trends and emerging market signals \u2014 with a GCC lens.', image: IMG.tower },
    { tag: 'Perspective', date: 'Mar 2026', title: 'DIFC at 20 \u2014 the next chapter of the region\u2019s financial capital', excerpt: 'Institutional perspectives on the maturation of DIFC and Dubai\u2019s capital markets.', image: IMG.glass },
  ],
  columns: [
    {
      title: 'Research & Insights',
      items: [
        mk('Sector Reports', ['Real Estate UAE', 'Financial Services', 'Energy & Sustainability', 'Technology & Media', 'Healthcare & Life Sciences']),
        mk('Thematic Whitepapers', ['AI & Enterprise', 'Sustainability', 'Geopolitics', 'Demographics']),
        mk('Executive Briefings', ['CEO Insights', 'Board Perspectives', 'Investor Notes', 'Policy Briefs', 'Regulatory Updates', 'Market Flash Notes']),
      ],
      viewAll: 'View all Research',
    },
    {
      title: 'Data Platforms',
      items: [
        mk('Market Analytics', ['Dubai Pricing Indices', 'Volume Trends', 'Geographic Heatmaps', 'Sentiment Signals', 'Rental Yield Trackers', 'Supply Pipelines', 'Affordability Indices']),
        mk('Deal Intelligence', ['Transaction Feeds', 'Investor Trackers', 'Comparable Analytics', 'Pipeline Scans', 'Buyer Profiles']),
        mk('Real Asset Dashboards', ['Real Estate Live', 'Infrastructure Live', 'Logistics Live', 'Energy Live']),
      ],
      viewAll: 'View all Data Platforms',
    },
    {
      title: 'Publications',
      items: [
        mk('NK&CO Quarterly', ['Q1 Edition', 'Q2 Edition', 'Q3 Edition', 'Q4 Edition', 'Executive Summary', 'Data Appendix', 'Quarterly Forecasts', 'Regional Spotlights']),
        mk('Annual Outlook', ['Global Outlook', 'GCC Outlook', 'Sector Editions', 'Investor Editions', 'Risk Outlook', 'Capital Flows Outlook']),
        mk('Special Editions', ['Family Office', 'Sovereign Wealth', 'Institutional Investors', 'Founders Series', 'Women in Leadership']),
      ],
      viewAll: 'View all Publications',
    },
    {
      title: 'NK&CO Briefing',
      description: 'Executive podcast \u2014 Dubai, UAE & GCC in conversation.',
      briefingHref: '/intelligence/nk-co-briefing',
      items: [
        mk('Latest Episodes', ['Newest Releases', 'This Week', 'This Month', 'Editor’s Picks', 'Most Listened', 'Trending Now', 'Short Takes']),
        mk('Series', ['The Dubai Briefing', 'Capital Conversations', 'The Real Assets Room', 'Founders & Family Offices']),
        mk('Topics', ['Real Estate & Living', 'Capital Markets', 'Sovereign & Family Office', 'Policy & Regulation', 'Technology & AI', 'Energy Transition']),
        mk('Guest Voices', ['Executive Interviews', 'Industry Roundtables', 'Policy Perspectives', 'Investor Notes', 'Investor Perspectives']),
      ],
      viewAll: 'Enter the Briefing',
    },
  ],
};

// ==================================================================
// INDUSTRIES (restructured per reference screenshot)
// ==================================================================
export const INDUSTRIES_MENU = {
  key: 'industries',
  layout: 'industries',
  title: 'Industries',
  subtitle: 'Building Businesses Beyond Boundaries',
  description: 'Industry intelligence, market research, and strategic insights across diverse key sectors, enabling informed decisions and sustainable growth.',
  exploreLabel: 'Discover Acquisitions',
  exploreHref: '/industries',
  featured: {
    tag: 'Featured sector',
    title: 'The Future of Real Estate & Living in the UAE',
    description: 'Institutional perspectives on residential, commercial and hospitality real assets across the Emirates.',
    ctaLabel: 'Read the sector view',
    ctaHref: '/industries/real-assets-and-infrastructure/real-estate-and-property',
    image: IMG.marina,
  },
  supporting: S.industries,
  columns: [
    {
      title: 'Corporate & Commercial',
      items: [
        mk('Banking & Investment', ['Retail Banking', 'Corporate Banking', 'Private Banking', 'Digital Banking', 'Islamic Banking', 'Wealth Management', 'Asset Management', 'Payments & Cards']),
        mk('Capital Markets & M&A', ['DFM & ADX Listings', 'Sukuk & Bonds', 'Cross-Border M&A', 'Advisory']),
        mk('Insurance & Risk', ['General Insurance', 'Life & Health', 'Reinsurance', 'Risk Advisory', 'Takaful', 'Insurance Brokerage', 'Claims & Loss Adjusting']),
        mk('Technology & Digital', ['SaaS', 'Fintech', 'AI & Data', 'Digital Products', 'Cybersecurity', 'Cloud & Infrastructure']),
        mk('Professional Services', ['Legal', 'Audit & Tax', 'Consulting', 'Advisory', 'Engineering Consultancy']),
        mk('Media & Communications', ['Broadcast', 'Digital Media', 'Publishing', 'Advertising', 'Public Relations']),
        mk('Commerce & Distribution', ['Wholesale', 'Trading', 'E-commerce', 'Omnichannel', 'Retail Distribution', 'Import & Export', 'Marketplaces']),
        mk('Education & Learning', ['K-12', 'Higher Education', 'EdTech', 'Corporate Learning']),
        mk('Innovation & Emerging', ['Deep-tech', 'Web3 & Digital Assets', 'Space & Advanced Mobility', 'Frontier Ventures', 'Clean Energy Ventures', 'Biotechnology']),
        mk('Training & Academy', ['Executive Programs', 'Certifications', 'Academies', 'Corporate Training', 'Leadership Institutes', 'Vocational Training', 'Language Academies', 'Digital Skills Bootcamps']),
      ],
      viewAll: 'Discover Acquisitions',
    },
    {
      title: 'Real Assets & Infrastructure',
      items: [
        mk('Real Estate & Property', ['Residential', 'Commercial', 'Retail', 'Mixed-Use', 'Hospitality Real Estate']),
        mk('Construction & Development', ['General Contracting', 'Project Management', 'MEP', 'Interiors']),
        mk('Automotive & Mobility', ['Dealerships', 'EV & Charging', 'Fleet & Leasing', 'Urban Mobility', 'Automotive Retail', 'Aftersales & Parts']),
        mk('Architecture & Design', ['Master-Planning', 'Architecture', 'Landscape', 'Interior Design', 'Urban Design', 'Heritage & Conservation', 'Sustainable Design']),
        mk('Hospitality & Tourism', ['Hotels & Resorts', 'F&B', 'Attractions', 'Tour Operators', 'Serviced Apartments']),
        mk('Entertainment & Leisure', ['Live Events', 'Themed Attractions', 'Sports', 'Gaming']),
        mk('Engineering & Design', ['Civil Engineering', 'Structural', 'MEP', 'Sustainability Engineering', 'Environmental Engineering', 'Geotechnical', 'Transport Engineering', 'Building Services']),
        mk('Lifestyle & Concierge', ['Luxury Concierge', 'Private Aviation', 'Marine & Yachting', 'Members’ Clubs', 'Luxury Real Estate', 'Wellness & Spa']),
      ],
      viewAll: 'Discover Acquisitions',
    },
    {
      title: 'Industrial & Manufacturing',
      items: [
        mk('Industrial & Special Assets', ['Data Centres', 'Cold Storage', 'Free Zone Assets', 'Special Economic Zones', 'Renewable Assets']),
        mk('Materials & Production', ['Steel & Aluminium', 'Cement & Aggregates', 'Chemicals', 'Composites', 'Plastics & Polymers', 'Glass & Ceramics', 'Textiles']),
        mk('Supply Chain & Operations', ['Logistics Platforms', '3PL / 4PL', 'Ports & Terminals', 'Warehousing']),
        mk('Engineering & Automation', ['Industrial Automation', 'Robotics', 'IoT & Smart Factory', 'Advanced Manufacturing', 'Machine Vision', 'Additive Manufacturing']),
        mk('Packaging & Materials', ['Rigid Packaging', 'Flexible Packaging', 'Sustainable Packaging', 'Industrial Materials', 'Labels & Printing']),
        mk('Food & Life Sciences', ['Food Processing', 'Beverages', 'Nutraceuticals', 'Pharma Manufacturing', 'Agri-Tech', 'Dairy & Eggs', 'Medical Devices', 'Cosmetics Manufacturing']),
      ],
      viewAll: 'Discover Acquisitions',
    },
  ],
};

// ==================================================================
// EXPERTISE
// ==================================================================
export const EXPERTISE_MENU = {
  key: 'expertise',
  layout: 'experts',
  title: 'Expertise',
  description: 'Cross-cutting practice areas that combine functional depth with sector experience \u2014 led by senior partners on the ground in the UAE.',
  exploreLabel: 'Meet our experts',
  exploreHref: '/expertise',
  featured: {
    tag: 'Featured practice',
    title: 'AI, Data & Digital Transformation',
    description: 'Reinventing enterprise operating models through data, AI, and next-generation technology.',
    ctaLabel: 'Explore the practice',
    ctaHref: '/expertise/digital-ai-and-analytics',
    image: IMG.office,
  },
  supporting: S.expertise,
  featuredExperts: [
    { name: 'Rashid Al Mansouri', role: 'Managing Partner \u2014 Real Assets', image: IMG.exec1 },
    { name: 'Amira Kassem', role: 'Partner \u2014 Capital Markets & DIFC', image: IMG.exec2 },
    { name: 'David Whitmore', role: 'Partner \u2014 Corporate Advisory', image: IMG.exec3 },
  ],
  columns: [
    {
      title: 'Agency & Brokerage',
      items: [
        mk('Lead Intelligence', ['Market Signals', 'Buyer Demand', 'Pricing Comps', 'Off-Market Sourcing']),
        mk('Client Origination', ['HNWI Channels', 'Institutional Referrals', 'Digital Origination', 'Family Office Networks', 'Developer Partnerships', 'Corporate Relocation Desks', 'Private Banking Alliances']),
        mk('Mandate Structuring', ['Exclusive Mandates', 'Retainer Frameworks', 'Success Fee Design', 'Confidentiality Protocols', 'Mandate Scoping', 'Reporting Cadence']),
        mk('Buyer Qualification', ['KYC & Source of Funds', 'Financing Verification', 'Intent Assessment', 'Escrow Coordination', 'Cash Buyer Assessment']),
        mk('Listing Management', ['Marketing Collateral', 'MLS & Portal Strategy', 'Photography & Media', 'Positioning Statements', 'Brochure Production']),
        mk('Closing Procedures', ['DLD Coordination', 'NOC Handling', 'Title Transfer', 'Post-Closing Handover', 'Utility Transfers', 'Settlement Statements', 'Snagging Coordination']),
      ],
      viewAll: 'View all in Agency & Brokerage',
    },
    {
      title: 'Primary & Off-Plan',
      items: [
        mk('Developer Alignment', ['Master Agent Structures', 'Sub-Agent Networks', 'Commission Architecture', 'Territory Rights']),
        mk('Project Positioning', ['Concept Marketing', 'Buyer Persona Mapping', 'Launch Narratives', 'Renderings & Visuals', 'Pricing Architecture', 'Amenity Strategy']),
        mk('Sales Architecture', ['Sales Cadence Design', 'Roadshow Choreography', 'Broker Enablement', 'Event Activation', 'Pre-Launch Registrations', 'Inventory Release Planning', 'Sales Team Structuring', 'Reservation Management']),
        mk('Off-Plan Compliance', ['RERA Requirements', 'Escrow Frameworks', 'Oqood Registration', 'Disclosure Standards', 'Handover Compliance']),
        mk('Investor Conversion', ['ROI Modelling', 'Payment Plan Design', 'Yield Presentations', 'Financing Introductions']),
        mk('Payment Structuring', ['Post-Handover Plans', 'Milestone Schedules', 'Currency Hedging', 'Cross-Border Payments', 'Instalment Tracking', 'Late-Payment Protocols']),
      ],
      viewAll: 'View all in Primary & Off-Plan',
    },
    {
      title: 'Secondary & Resale',
      items: [
        mk('Market Appraisals', ['Comparative Valuations', 'Yield Assessments', 'Repositioning Potential', 'Investment Grade Rating', 'Rental Appraisals', 'Capital Growth Outlook', 'Price Positioning Reports']),
        mk('Seller Acquisition', ['Owner Outreach', 'Portfolio Consolidation', 'Distress Sourcing', 'Off-Market Access', 'Developer Inventory Access']),
        mk('Property Positioning', ['Repositioning Strategy', 'Cosmetic Enhancements', 'Staging Direction', 'Story Development']),
        mk('Viewing Management', ['Private Viewings', 'Institutional Site Visits', 'Video Walkthroughs', 'Buyer Journey Design', 'Open House Programmes', 'Virtual Staging', 'Viewing Feedback Analysis', 'Remote Viewing Support']),
        mk('Resale Negotiation', ['Offer Strategy', 'Counter-Offer Playbooks', 'Multi-Bid Management', 'Deal Structuring', 'Price Reduction Strategy', 'Closing Terms']),
        mk('Transfer Procedures', ['DLD Transfer Slots', 'Mortgage Discharge', 'NOC Chains', 'Handover Protocols', 'Clearance Certificates']),
      ],
      viewAll: 'View all in Secondary & Resale',
    },
    {
      title: 'Commercial & Retail',
      items: [
        mk('Commercial Leasing', ['Grade-A Office', 'Flexible Workspace', 'HQ Consolidation', 'Occupier Advisory', 'Co-Working Space', 'Business Park Leasing', 'Showroom & Studio Space']),
        mk('Retail Acquisition', ['High-Street Retail', 'Mall Positions', 'Waterfront Retail', 'Experiential Concepts']),
        mk('Tenant Relations', ['Anchor Tenant Programmes', 'Renewal Strategy', 'Tenant Mix Curation', 'Occupancy Optimisation', 'Tenant Engagement Events', 'Lease Expiry Planning']),
        mk('Asset Positioning', ['Repositioning Roadmaps', 'Capex Planning', 'ESG Retrofit', 'Grade Uplift Programmes', 'Amenity Enhancement']),
        mk('Investment Analysis', ['Cashflow Modelling', 'Cap-Rate Benchmarking', 'Scenario Testing', 'IC-Grade Memos', 'Debt Capacity Analysis', 'Market Rent Studies', 'Hold-Sell Analysis', 'Due Diligence Support']),
        mk('Corporate Transactions', ['Sale & Leaseback', 'Portfolio Transactions', 'Strata Assemblies', 'Institutional Exits']),
      ],
      viewAll: 'View all in Commercial & Retail',
    },
    {
      title: 'Leasing & Lettings',
      items: [
        mk('Landlord Acquisition', ['Portfolio Onboarding', 'Institutional Landlords', 'Sole Agent Mandates', 'Retainer Structures', 'Landlord Outreach', 'Mandate Proposals', 'Owner Reporting']),
        mk('Tenant Qualification', ['Corporate Tenants', 'Expat Placement', 'Institutional Occupiers', 'Credit Screening', 'Employer Housing Programmes', 'Tenant Affordability Checks']),
        mk('Leasing Negotiation', ['Rent Reviews', 'Incentive Structuring', 'Break Clauses', 'Fit-Out Contributions', 'Lease Drafting']),
        mk('Property Marketing', ['Portal Strategy', 'Photography & Media', 'Virtual Tours', 'Community Marketing', 'Listing Copywriting']),
        mk('Tenancy Administration', ['Ejari Registration', 'Renewals & Notices', 'Deposit Management', 'Dispute Handling', 'Rent Collection', 'Cheque & Payment Tracking', 'Handback Inspections']),
        mk('Renewal Management', ['Retention Strategy', 'Rent Optimisation', 'Occupancy Continuity', 'Tenant Relationship']),
      ],
      viewAll: 'View all in Leasing & Lettings',
    },
    {
      title: 'Holiday Homes',
      items: [
        mk('Tenant Management', ['Guest Vetting', 'Booking Coordination', 'Group & Corporate', 'VIP Concierge', 'Owner Onboarding', 'Inventory & Furnishing']),
        mk('Maintenance Operations', ['Turnaround Cleaning', 'Preventive Maintenance', 'Emergency Response', 'Supply Management', 'Deep Cleaning Programmes', 'Pest & Hygiene Control', 'Appliance Servicing', 'Pool & Common Area Care']),
        mk('Service Coordination', ['Housekeeping', 'Linen & Amenities', 'Guest Support', 'Third-Party Vendors', 'Key & Access Management']),
        mk('Financial Reporting', ['Owner Statements', 'Yield Analytics', 'Cost Allocation', 'Tax Documentation']),
        mk('Lease Administration', ['Short-Term Contracts', 'DTCM Compliance', 'Deposit Handling', 'Extensions & Cancellations', 'Registration Renewals', 'Owner Agreements']),
        mk('Compliance Procedures', ['DTCM Permits', 'Tourism Dirham', 'Fire & Safety', 'Community Rules', 'Insurance Requirements', 'Noise & Neighbour Policies', 'Data & Privacy Compliance']),
      ],
      viewAll: 'View all in Holiday Homes',
    },
    {
      title: 'Property Management',
      items: [
        mk('Short-Term Leasing', ['Nightly Pricing', 'Dynamic Rates', 'Channel Management', 'Occupancy Optimisation', 'Minimum Stay Rules']),
        mk('Guest Management', ['Check-In / Check-Out', 'VIP Programmes', 'Guest Experience', 'Review Management']),
        mk('Occupancy Architecture', ['Multi-Channel Distribution', 'Yield Management', 'Length-of-Stay Strategy', 'Seasonal Plans', 'Event-Driven Pricing', 'Booking Outlooks', 'Direct Booking Strategy', 'Corporate Lease Programmes']),
        mk('Revenue Optimisation', ['Pricing Algorithms', 'Package Design', 'Upsell & Cross-Sell', 'Ancillary Revenue', 'Dynamic Packaging', 'Loyalty Incentives']),
        mk('Platform Integration', ['Airbnb & Booking.com', 'PMS Systems', 'Payment Gateways', 'Analytics Dashboards', 'Channel Managers']),
        mk('Hospitality Standards', ['Brand Standards', 'Service Blueprints', 'Quality Audits', 'Guest Satisfaction', 'Housekeeping Standards', 'Staff Training', 'Mystery Guest Reviews']),
      ],
      viewAll: 'View all in Property Management',
    },
    {
      title: 'Property Developers',
      items: [
        mk('Project Origination', ['Land Sourcing', 'JV Structuring', 'Feasibility Studies', 'Concept Development']),
        mk('Project Positioning', ['Master Brand', 'Product Segmentation', 'Buyer Targeting', 'Pricing Strategy', 'Competitive Benchmarking', 'Sales Narrative']),
        mk('Market Deployment', ['Regional Rollouts', 'International Marketing', 'Cross-Border Sales', 'Roadshow Programmes', 'Pre-Registration Campaigns']),
        mk('Launch Coordination', ['Launch Events', 'Media & PR', 'Broker Onboarding', 'Sales Gallery Design', 'Press Launch Packs', 'Influencer & Partner Briefings', 'Launch Day Operations', 'Show Unit Delivery']),
        mk('Channel Distribution', ['Master Agents', 'Sub-Agent Networks', 'International Channels', 'Digital Channels']),
        mk('Transaction Closure', ['SPA Coordination', 'Oqood Registration', 'Payment Collection', 'Post-Sales Support', 'Registration & Title', 'Snagging & Handover', 'Customer Care']),
      ],
      viewAll: 'View all in Property Developers',
    },
    {
      title: 'Construction Firms',
      items: [
        mk('Project Origination', ['Tender Pipeline', 'JV Formation', 'Pre-Qualification', 'Bid Strategy', 'Early Contractor Involvement', 'Tender Documentation']),
        mk('Project Positioning', ['Capability Statements', 'Track Record Packs', 'Institutional Referrals', 'Client Positioning', 'Case Study Development']),
        mk('Market Deployment', ['Segment Selection', 'Sector Expansion', 'International Expansion', 'Government Contracts', 'Public-Private Partnerships']),
        mk('Launch Coordination', ['Kick-Off Programmes', 'Stakeholder Engagement', 'Communications', 'Media Relations', 'Site Introductions', 'Community Relations', 'Reporting Frameworks']),
        mk('Channel Distribution', ['Consultant Networks', 'Developer Relationships', 'Government Bodies', 'International Partners']),
        mk('Transaction Closure', ['Contract Award', 'Bond & Insurance', 'Mobilisation', 'Handover Protocols', 'Performance Guarantees', 'Handover Documentation']),
      ],
      viewAll: 'View all in Construction Firms',
    },
    {
      title: 'Real Estate Academy',
      items: [
        mk('Enterprise Learning Institute', ['Certified Programmes', 'RERA Certifications', 'Executive Education', 'Faculty & Curriculum', 'Online Learning Platform', 'Accreditation Partnerships', 'Custom Corporate Programmes', 'Assessment & Testing']),
        mk('Broker Development', ['Foundation Track', 'Advanced Track', 'Leadership Track', 'Mentorship Programmes', 'Sales Skills Lab']),
        mk('Institutional Training', ['Developer Academies', 'Investor Masterclasses', 'Corporate Real Estate', 'Government Programmes']),
      ],
      viewAll: 'Discover Academy',
    },
  ],
};

// ==================================================================
// OVERVIEW
// ==================================================================
export const OVERVIEW_MENU = {
  key: 'overview',
  layout: 'firm',
  title: 'Overview',
  description: 'About NK&CO \u2014 the people, philosophy, and partnership model behind one of the region\u2019s most trusted advisory firms.',
  exploreLabel: 'About the firm',
  exploreHref: '/overview',
  featured: {
    tag: 'Our story',
    title: 'Building institutions that last',
    description: 'How NK&CO partners with founders, families and enterprises to build enduring value.',
    ctaLabel: 'Read our story',
    ctaHref: '/overview/about-nkandco/our-story',
    image: IMG.build2,
  },
  supporting: S.overview,
  locations: [
    { city: 'Dubai', region: 'Headquarters' },
    { city: 'Abu Dhabi', region: 'UAE' },
    { city: 'Riyadh', region: 'KSA' },
    { city: 'London', region: 'Europe' },
    { city: 'Singapore', region: 'APAC' },
  ],
  columns: [
    {
      title: 'About NK&CO',
      items: [
        mk('Our Story', ['Origins', 'Milestones', 'Philosophy', 'Firm Values', 'Offices & Presence', 'Our Impact']),
        mk('Leadership', ['Managing Partners', 'Senior Partners', 'Advisory Board', 'Global Council', 'Practice Heads', 'Regional Leadership', 'Thought Leaders']),
        mk('Governance', ['Firm Governance', 'Ethics & Independence', 'Risk & Compliance', 'Confidentiality', 'Quality Assurance']),
      ],
      viewAll: 'View all in About',
    },
    {
      title: 'How We Work',
      items: [
        mk('Client Engagement', ['Discovery', 'Diagnosis', 'Design', 'Delivery']),
        mk('Our Methodology', ['Insight-Led', 'Data-Driven', 'Human-Centred', 'Outcome-Focused', 'Evidence-Based', 'Collaborative', 'Practical Delivery', 'Long-Term Value']),
        mk('Partnership Model', ['Retainers', 'Project Advisory', 'Interim Leadership', 'On-Demand Expertise', 'Embedded Teams', 'Advisory Boards']),
      ],
      viewAll: 'View all in How We Work',
    },
    {
      title: 'Careers',
      items: [
        mk('Experienced Hires', ['Partners & Principals', 'Consultants', 'Specialists', 'Support Functions', 'Industry Experts']),
        mk('Graduate Programme', ['Analyst Programme', 'Associate Programme', 'Internships', 'Campus Events', 'Graduate Rotations', 'Mentoring & Training', 'Early Careers Insights']),
        mk('Life at NK&CO', ['Learning & Development', 'Diversity & Inclusion', 'Wellbeing', 'Purpose & Community']),
      ],
      viewAll: 'View all Careers',
    },
    {
      title: 'Newsroom',
      items: [
        mk('Press Releases', ['Firm News', 'Transactions', 'Appointments', 'Awards', 'Partnership Announcements', 'Publications Launches']),
        mk('In the News', ['Global Coverage', 'Regional Coverage', 'Sector Coverage', 'Op-Eds', 'Interviews & Features']),
        mk('Awards & Recognition', ['Industry Awards', 'Best Places to Work', 'Innovation Awards', 'ESG Recognition', 'Client Recognition', 'Leadership Awards', 'Thought Leadership Awards', 'Regional Rankings']),
      ],
      viewAll: 'View all Newsroom',
    },
  ],
};

export const NAV_ITEMS = [
  { key: 'capabilities', label: 'Capabilities', data: CAPABILITIES_MENU },
  { key: 'infrastructure', label: 'Infrastructure', data: INFRASTRUCTURE_MENU },
  { key: 'opportunities', label: 'Opportunities', data: OPPORTUNITIES_MENU },
  { key: 'intelligence', label: 'Intelligence', data: INTELLIGENCE_MENU },
  { key: 'industries', label: 'Industries', data: INDUSTRIES_MENU },
  { key: 'expertise', label: 'Expertise', data: EXPERTISE_MENU },
  { key: 'overview', label: 'Overview', data: OVERVIEW_MENU },
];

// Homepage content
export const HERO = {
  eyebrow: 'UAE Real Estate Market Review Q1 2026',
  title: 'UAE Real Estate Market Remains Resilient Despite Regional Disruptions',
  description: "UAE Housing Market Dubai's living demand remains structurally intact, but affordability constraints and a contracting private rented sector are reshaping how and where that demand is being expressed.",
  cta: 'Read the Report',
  image: IMG.hero,
};

export const INSIGHT_CARDS = [
  { tag: 'Insight', title: 'Institutional Capital Complementary Zones \u2014 The Evolving Story of the UAE Industrial Market', date: 'March 2026' },
  { tag: 'Report', title: 'Dubai Grade-A Office: rents, take-up and the new occupier map', date: 'February 2026' },
  { tag: 'Perspective', title: 'Real estate markets sustain ascent, despite slight softening of macro landscape', date: 'February 2026' },
];

export const SERVICES_STRIP = [
  { number: '01', title: 'Advisory', desc: 'Independent counsel for the region\u2019s most complex decisions.' },
  { number: '02', title: 'Capital', desc: 'Access to institutional capital, structured and syndicated across DIFC and beyond.' },
  { number: '03', title: 'Intelligence', desc: 'Proprietary research and data platforms on the UAE and GCC.' },
  { number: '04', title: 'Execution', desc: 'End-to-end transaction and transformation execution.' },
];

export const FEATURED_PERSPECTIVES = [
  { category: 'Real Estate', date: 'Mar 12, 2026', title: 'Repricing risk: how the next Dubai cycle rewards discipline over scale', excerpt: 'A revised risk framework for real asset investors navigating a higher-for-longer capital environment.', image: IMG.bay },
  { category: 'Capital Markets', date: 'Mar 05, 2026', title: 'Private credit reaches an inflection point in the Gulf', excerpt: 'Institutional allocators are re-engineering their fixed-income playbooks \u2014 with private credit now central.', image: IMG.glass },
  { category: 'Corporate Advisory', date: 'Feb 27, 2026', title: 'The quiet reinvention of the Gulf family office', excerpt: 'How next-generation principals are professionalising governance, investment and impact.', image: IMG.tower },
];

export const STATS = [
  { value: 'Partner-led', label: 'On every engagement' },
  { value: 'DIFC', label: 'Headquartered' },
  { value: 'Independent', label: 'Advisory model' },
  { value: 'Long-horizon', label: 'Institutional counsel' },
];

export const QUICK_LINKS = ['Contact Us', 'Careers', 'Alumni', 'Media Enquiries', 'Client Portal'];
export const SOCIAL_LINKS = [{ label: 'LinkedIn', href: '#linkedin' }, { label: 'X', href: '#x' }, { label: 'YouTube', href: '#youtube' }, { label: 'Instagram', href: '#instagram' }];
export const getMenuByKey = (key) => NAV_ITEMS.find((n) => n.key === key)?.data || null;
