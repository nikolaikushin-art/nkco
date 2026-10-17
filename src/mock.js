// NK&CO — Dubai-focused enterprise advisory data (v3 - full architecture)
import { editorialPhoto } from './lib/editorialPhoto';
import { topicPlate } from './lib/topicPlate';

// Photo for an editorial card, chosen from the card's own headline (see scripts/assign-photos.mjs).
export const plate = editorialPhoto;

// Photos from the BPR library (labels: 'Dubai skyline across the water at sunset', 'Professional woman in business attire')
const UNSPLASH = (id, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

import { DEVELOPERS } from './data/developers';
import { PRIV } from './data/privileges';
import { MORE_INDUSTRIES } from './data/industriesMore';
import { GROW_ORIG } from './data/industriesGrow';
import { INFRA_NEW } from './data/infrastructureAdvanced';
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
    { tag: 'Perspective', title: 'Reorganising a family-owned group: questions to settle before the structure', href: '#', image: plate('Reorganising a family-owned group: questions to settle before the structure') },
    { tag: 'Insight', title: 'The private-credit playbook for Gulf mid-market growth', href: '#', image: plate('The private-credit playbook for Gulf mid-market growth') },
    { tag: 'Insight', title: 'Succession and leadership capacity in owner-managed firms', href: '#', image: plate('Succession and leadership capacity in owner-managed firms') },
  ],
  privileges: [
    { tag: 'Podcast', title: 'DIFC at Twenty: the financial centre\u2019s next chapter', href: '/privileges/podcasts/capital-conversations-episodes/difc-at-twenty', image: plate('DIFC at Twenty: the financial centre\u2019s next chapter') },
    { tag: 'Guide', title: 'The 30-Day Incorporation Blueprint', href: '/privileges/guides-and-playbooks/founder-playbooks/the-30-day-incorporation-blueprint', image: plate('The 30-Day Incorporation Blueprint') },
    { tag: 'Masterclass', title: 'How the Dubai Market Works', href: '/privileges/masterclasses/dubai-real-estate-foundations/how-the-dubai-market-works', image: plate('How the Dubai Market Works') },
  ],
  infrastructure: [
    { tag: 'Playbook', title: 'The 30-day UAE incorporation blueprint for global businesses', href: '#', image: plate('The 30-day UAE incorporation blueprint for global businesses') },
    { tag: 'Perspective', title: 'DIFC vs ADGM vs Mainland \u2014 choosing the right jurisdiction', href: '#', image: plate('DIFC vs ADGM vs Mainland \u2014 choosing the right jurisdiction') },
    { tag: 'Guide', title: 'Corporate Tax & VAT: an operator\u2019s guide for 2026', href: '#', image: plate('Corporate Tax & VAT: an operator\u2019s guide for 2026') },
  ],
  opportunities: [
    { tag: 'Guide', title: 'Preparing a business for a capital discussion: a readiness checklist', href: '#', image: plate('Preparing a business for a capital discussion: a readiness checklist') },
    { tag: 'Perspective', title: 'Capital readiness: the information funders usually ask for first', href: '#', image: plate('Capital readiness: the information funders usually ask for first') },
    { tag: 'Insight', title: 'What buyers examine before a sale: business readiness', href: '#', image: plate('What buyers examine before a sale: business readiness') },
  ],
  intelligence: [
    { tag: 'Insight', title: 'How owner-managed businesses build management visibility', href: '#', image: plate('How owner-managed businesses build management visibility') },
    { tag: 'Outlook', title: 'Global Capital Flows Outlook 2026', href: '#', image: plate('Global Capital Flows Outlook 2026') },
    { tag: 'Insight', title: 'Choosing the few measures that matter: a management-reporting primer', href: '#', image: plate('Choosing the few measures that matter: a management-reporting primer') },
  ],
  industries: [
    { tag: 'Sector study', title: 'The Future of Real Estate & Living in the UAE', href: '#', image: plate('Sector context for consultancy and brokerage mandates') },
    { tag: 'Deep-dive', title: 'DIFC at 20 \u2014 the region\u2019s financial capital, next chapter', href: '#', image: plate('DIFC at 20 \u2014 the region\u2019s financial capital, next chapter') },
    { tag: 'Perspective', title: 'The industrial supercycle \u2014 UAE logistics & manufacturing', href: '#', image: plate('The industrial supercycle \u2014 UAE logistics & manufacturing') },
  ],
  expertise: [
    { tag: 'Practice', title: 'AI, Data & Digital Transformation \u2014 the enterprise playbook', href: '#', image: plate('AI, Data & Digital Transformation \u2014 the enterprise playbook') },
    { tag: 'Advisory', title: 'The next generation of Gulf family office governance', href: '#', image: plate('The next generation of Gulf family office governance') },
    { tag: 'Research', title: 'ESG in the GCC: from disclosure to enterprise value', href: '#', image: plate('ESG in the GCC: from disclosure to enterprise value') },
  ],
  overview: [
    { tag: 'Firm', title: 'Management Consultancy & Business Brokerage: the corporate profile', href: '/overview/the-firm/corporate-profile', image: plate('Management Consultancy & Business Brokerage: the corporate profile') },
    { tag: 'Approach', title: 'A disciplined approach to engagements', href: '/overview/how-we-work/our-methodology', image: plate('A disciplined approach to engagements') },
    { tag: 'Scope', title: 'Scope of practice: positioning is not permission', href: '/overview/the-firm/scope-of-practice', image: plate('Scope of practice: positioning is not permission') },
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
    'Management consultancy for the planning, organisation, performance and readiness of enterprises in Dubai and the wider GCC.',
  exploreLabel: 'Explore all Capabilities',
  exploreHref: '/capabilities',
  featured: {
    tag: 'Featured insight',
    title: 'Management Consultancy: advice with a defined scope',
    description: 'Strategy, organisational design, diagnostics and management information, delivered under a written mandate. Advisory unless a separate management engagement is agreed.',
    ctaLabel: 'Read the practice',
    ctaHref: '/overview/our-practices/management-consultancy',
    image: plate('Management Consultancy: advice with a defined scope'),
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
  description: 'CRM, workflow and management reporting for enterprises in the UAE. NK&CO coordinates business requirements; technical build and security are delivered by appointed specialists.',
  exploreLabel: 'Explore all Infrastructure',
  exploreHref: '/infrastructure',
  featured: {
    tag: 'Featured platform',
    title: 'OMS 6.0: management systems for defined mandates',
    description: 'CRM, workflow and management reporting for enterprises in the UAE. Business-side coordination; technical build by appointed specialists.',
    ctaLabel: 'Explore OMS',
    ctaHref: '/infrastructure/oms',
    image: plate('OMS 6.0: management systems for defined mandates'),
  },
  supporting: S.infrastructure,
  columns: [
    {
      title: 'Strategy & Feasibility',
      description: 'Prove the venture before capital is committed.',
      items: [
        mk('Business Idea Validation', ['Concept Screening', 'Problem & Solution Fit', 'Founder Readiness', 'Opportunity Assessment', 'Risk Screening']),
        mk('Feasibility & Business Case', ['Feasibility Study', 'Financial Projections', 'Break-Even Analysis', 'Investment Case', 'Scenario Planning']),
        mk('Market & Demand Research', ['Market Sizing', 'Customer Research', 'Demand Forecasting', 'Sector Reports', 'Pricing Research']),
        mk('Competitor & Landscape Analysis', ['Competitor Benchmarking', 'Pricing Landscape', 'Positioning Gaps', 'Regulatory Landscape', 'Partner Mapping']),
        mk('Location & Jurisdiction Scoping', ['Mainland vs Free Zone', 'Emirate Comparison', 'Cost Benchmarking', 'Sector Fit', 'Office Requirements']),
        mk('Partner & Supplier Discovery', ['Local Partner Search', 'Supplier Vetting', 'Distributor Screening', 'Sponsor & Agent Review', 'Partner Due Diligence']),
        mk('Customer & Proposition Testing', ['Pilot Programmes', 'Prototype Testing', 'Customer Interviews', 'Offer Refinement', 'Pre-Sales Validation']),
      ],
      viewAll: 'Test your venture',
    },
    {
      title: 'Business Architecture',
      description: 'Design the model, structure and plan to build on.',
      items: [
        mk('Business Plan & Operating Model', ['Business Plan', 'Operating Model', 'Revenue Model', 'Organisation Plan', 'Launch Roadmap']),
        mk('Legal & Ownership Structuring', ['Ownership Structure', 'Holding Structures', 'Shareholder Terms', 'IP Ownership', 'Nominee & Trust Options']),
        mk('Funding & Budget Planning', ['Start-Up Budget', 'Funding Requirements', 'Capital Sources', 'Cash Runway Plan', 'Milestone Funding']),
        mk('Product & Service Architecture', ['Service Catalogue', 'Pricing Architecture', 'Delivery Model', 'Quality Standards', 'Packaging & Tiers']),
        mk('Process & Systems Blueprint', ['Process Mapping', 'Systems Landscape', 'Workflow Design', 'Tool Selection', 'Integration Plan']),
        mk('Launch & Implementation Planning', ['Launch Timeline', 'Project Management Office', 'Vendor Selection', 'Risk & Dependencies', 'Day-One Readiness']),
        mk('Compliance & Licensing Roadmap', ['Licence Requirements', 'Approval Sequencing', 'Regulatory Calendar', 'Policy Requirements', 'Audit Readiness']),
      ],
      viewAll: 'Design your business',
    },
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
      title: 'Growth & Capitalisation',
      description: 'Fund and accelerate the next stage of growth.',
      items: [
        mk('Growth Strategy & Market Entry', ['Growth Roadmap', 'GCC Market Entry', 'Channel Strategy', 'Strategic Alliances', 'Revenue Diversification']),
        mk('Funding & Capital Raising', ['Investor Readiness', 'Pitch & Data Room', 'Equity Raising', 'Debt & Credit Facilities', 'Government & Grant Funding']),
        mk('Financial Planning & Treasury', ['Financial Modelling', 'Budgeting & Forecasting', 'Working Capital Optimisation', 'Cash Flow Management', 'Treasury Policy']),
        mk('Technology & Digital Scaling', ['Platform Architecture', 'Process Automation', 'Data & Analytics', 'CRM Rollout', 'AI Adoption']),
        mk('Sales & Revenue Operations', ['Sales Process Design', 'Pipeline Management', 'Pricing & Discounting', 'Revenue Reporting', 'Partner & Channel Sales']),
        mk('Supply Chain & Procurement', ['Procurement Policy', 'Supplier Contracts', 'Logistics Setup', 'Inventory Planning', 'Cost Optimisation']),
        mk('Investor & Lender Reporting', ['Management Accounts', 'Board Packs', 'Covenant Tracking', 'KPI Dashboards', 'Investor Updates']),
      ],
      viewAll: 'Explore growth funding',
    },
    {
      title: 'Governance & Risk',
      description: 'Stay compliant and in control as the company grows.',
      items: [
        mk('Corporate Governance Frameworks', ['Board Charters', 'Committee Terms of Reference', 'Delegation Matrices', 'Governance Reviews', 'Family Governance']),
        mk('Regulatory & Legal Compliance', ['Regulatory Mapping', 'AML & KYC Programmes', 'Economic Substance & UBO', 'Data Protection', 'Licence Renewals']),
        mk('Enterprise Risk & Internal Control', ['Risk Registers', 'Internal Controls', 'Fraud Prevention', 'Insurance Strategy', 'Third-Party Risk']),
        mk('Tax & Transfer Pricing Structuring', ['Corporate Tax Planning', 'Transfer Pricing Policy', 'Group Structuring', 'Tax Residency', 'Cross-Border Tax']),
        mk('Contracts & Legal Operations', ['Contract Templates', 'Approval Workflows', 'Dispute Avoidance', 'Legal Entity Management', 'Company Secretarial']),
        mk('Cyber & Data Security', ['Security Policies', 'Access Controls', 'Incident Response', 'Security Awareness', 'Vulnerability Assessment']),
        mk('Health, Safety & Environment', ['HSE Policy', 'Site Audits', 'Incident Reporting', 'Environmental Compliance', 'Emergency Planning']),
      ],
      viewAll: 'Strengthen governance',
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
    {
      title: 'Succession & Legacy',
      description: 'Transfer value and keep the institution going.',
      items: [
        mk('Succession & Ownership Transition', ['Succession Planning', 'Family Business Transition', 'Management Buy-Outs', 'Shareholder Buy-Sell Terms', 'Next-Generation Readiness']),
        mk('Exit Readiness & Valuation', ['Exit Strategy', 'Business Valuation', 'Vendor Due Diligence', 'Value Enhancement', 'Data Room Preparation']),
        mk('Sale, Merger & IPO Execution', ['Trade Sale Process', 'Merger Structuring', 'IPO Preparation', 'Buyer & Investor Outreach', 'Deal Negotiation']),
        mk('Family Office & Wealth Structuring', ['Family Office Setup', 'Wealth Structuring', 'Family Constitution', 'Philanthropic Vehicles', 'Asset Protection']),
        mk('Holding & Foundation Structures', ['Holding Company Design', 'DIFC & ADGM Foundations', 'Trust Arrangements', 'Intra-Group Structuring']),
        mk('Business Continuity & Crisis Management', ['Continuity Planning', 'Crisis Playbooks', 'Reputation Management', 'Leadership Pipelines', 'Disaster Recovery']),
        mk('Restructuring & Orderly Wind-Down', ['Business Restructuring', 'Debt Reorganisation', 'Entity Liquidation', 'Licence Cancellation', 'Employee Settlement']),
      ],
      viewAll: 'Plan succession',
    },
    {
      title: 'Review & Renewal',
      description: 'Close the loop: review results, renew approvals and reset the plan.',
      items: [
        mk('Annual Business Review', ['Performance Scorecards', 'Board Review Pack', 'Variance Analysis', 'Priorities for the Year Ahead']),
        mk('Licence & Compliance Renewal', ['Trade Licence Renewal', 'Visa & Establishment Card Renewal', 'Regulatory Filings Calendar', 'Lease & Contract Renewals']),
        mk('Operating Model Refresh', ['Process Health Check', 'Systems Review', 'Organisation Review', 'Cost & Efficiency Reset']),
        mk('Strategy Refresh & Re-Planning', ['Market Reassessment', 'Three-Year Plan Update', 'Budget Reset', 'Portfolio Review']),
        mk('Continuous Improvement Programme', ['Quality Reviews', 'KPI Recalibration', 'Lessons Learned', 'Improvement Roadmap']),
      ],
      viewAll: 'Review and renew',
    },
    // ---- v370 · stages 4-6 of the journey (Plan & Design -> ... -> Franchise & Expand): 9 more categories ----
    {
      title: 'Multi-Market Expansion',
      description: 'Take a proven model into new markets.',
      items: [
        mk('GCC & MENA Rollout', ['Market Prioritisation', 'Entry Mode Selection', 'Country Launch Plans', 'Regulatory Mapping', 'Regional Hiring']),
        mk('International Market Entry', ['Market Entry Strategy', 'Representative Offices', 'Branch & Subsidiary Setup', 'Local Partner Models', 'Entry Risk Review']),
        mk('Regional Hub Strategy', ['Hub Location Analysis', 'Regional HQ Design', 'Shared Services Model', 'Treasury Centres', 'Governance Across Markets']),
        mk('Cross-Border Structuring', ['Group Structure Design', 'Intercompany Agreements', 'Transfer Pricing Policy', 'Repatriation Planning', 'Tax Treaty Review']),
        mk('Market Launch Playbooks', ['Launch Roadmaps', 'Go-to-Market Playbooks', 'Pricing by Market', 'Channel Activation', 'Launch Performance Reviews']),
      ],
      viewAll: 'Expand into new markets',
    },
    {
      title: 'Alliances & Joint Ventures',
      description: 'Grow faster through the right partners.',
      items: [
        mk('Joint Venture Structuring', ['JV Feasibility', 'Equity & Control Terms', 'Contribution Planning', 'Exit & Deadlock Terms', 'JV Entity Setup']),
        mk('Alliance Strategy', ['Alliance Objectives', 'Partner Fit Criteria', 'Alliance Models', 'Value Sharing', 'Alliance Roadmap']),
        mk('Partner Selection & Vetting', ['Partner Longlist', 'Capability Assessment', 'Reputation Checks', 'Financial Standing Review', 'Partner Shortlisting']),
        mk('Shareholder & JV Agreements', ['Heads of Terms', 'Shareholder Agreements', 'Reserved Matters', 'Non-Compete Terms', 'Dispute Mechanisms']),
        mk('Alliance Governance & Performance', ['Steering Committees', 'Joint KPIs', 'Alliance Reporting', 'Conflict Resolution', 'Alliance Reviews']),
      ],
      viewAll: 'Build alliances',
    },
    {
      title: 'Diversification & New Ventures',
      description: 'Add new engines of growth.',
      items: [
        mk('New Business Units', ['Unit Business Cases', 'Operating Model Design', 'Seed Funding Plans', 'Leadership Appointments', 'Unit Launch Planning']),
        mk('Adjacent Market Screening', ['Adjacency Mapping', 'Opportunity Scoring', 'Capability Gap Review', 'Entry Cost Estimates', 'Go/No-Go Criteria']),
        mk('Venture Incubation', ['Incubation Frameworks', 'Idea Pipelines', 'Pilot Governance', 'Funding Gates', 'Spin-Out Options']),
        mk('Portfolio Strategy', ['Portfolio Review', 'Capital Allocation', 'Core vs Non-Core', 'Disposal Planning', 'Portfolio Reporting']),
        mk('Pilot & Scale-Up Programmes', ['Pilot Design', 'Success Metrics', 'Scale-Up Readiness', 'Resource Planning', 'Rollout Governance']),
      ],
      viewAll: 'Diversify the business',
    },
    {
      title: 'Enterprise Systems & Automation',
      description: 'Systems that let the business run without the founder.',
      items: [
        mk('ERP & CRM Rollout', ['Requirements Definition', 'System Selection', 'Implementation Planning', 'Data Migration', 'User Adoption']),
        mk('Workflow Automation', ['Process Selection', 'Approval Workflows', 'Document Automation', 'Integration Design', 'Automation Benefits Tracking']),
        mk('Data & Management Dashboards', ['KPI Frameworks', 'Executive Dashboards', 'Data Quality', 'Reporting Calendar', 'Self-Service Reporting']),
        mk('AI Enablement', ['AI Use-Case Screening', 'Knowledge Assistants', 'Data Readiness', 'Responsible AI Policy', 'AI Pilot Programmes']),
        mk('Cyber & IT Governance', ['IT Policies', 'Access Controls', 'Security Assessments', 'Vendor Risk', 'IT Continuity']),
      ],
      viewAll: 'Automate the enterprise',
    },
    {
      title: 'Transformation & Change',
      description: 'Lead programmes that reshape the business.',
      items: [
        mk('Transformation Programme Office', ['Programme Governance', 'Roadmap Management', 'Stage Gates', 'Steering Committees', 'Benefits Tracking']),
        mk('Change Management', ['Change Impact Assessment', 'Stakeholder Engagement', 'Communication Plans', 'Training Rollout', 'Adoption Tracking']),
        mk('Operating Model Redesign', ['Target Operating Model', 'Organisation Redesign', 'Process Simplification', 'Shared Services', 'Transition Planning']),
        mk('Performance Turnaround', ['Cost Baselines', 'Turnaround Plans', 'Working Capital Release', '100-Day Plans', 'Lender Engagement']),
        mk('Culture & Leadership Alignment', ['Culture Assessment', 'Leadership Alignment', 'Values & Behaviours', 'Engagement Surveys', 'Retention Planning']),
      ],
      viewAll: 'Lead transformation',
    },
    {
      title: 'Mergers & Acquisitions',
      description: 'Buy, merge and integrate with discipline.',
      items: [
        mk('Acquisition Strategy', ['Target Criteria', 'Target Screening', 'Approach Planning', 'Valuation Ranges', 'Acquisition Roadmap']),
        mk('Due Diligence Coordination', ['Commercial Due Diligence', 'Financial Due Diligence', 'Legal Due Diligence', 'Red-Flag Reports', 'Data Room Management']),
        mk('Deal Structuring & Negotiation', ['Structure Options', 'Term Sheets', 'Negotiation Support', 'Funding Structures', 'Completion Mechanics']),
        mk('Day-One & Integration Planning', ['Day-One Readiness', 'Integration Playbooks', 'Systems Integration', 'People Integration', 'Brand Integration']),
        mk('Synergy Capture & Tracking', ['Synergy Baselines', 'Synergy Plans', 'Tracking Dashboards', 'Cost Synergies', 'Revenue Synergies']),
      ],
      viewAll: 'Plan your next deal',
    },
    {
      title: 'Franchise Model Design',
      description: 'Turn a proven business into a repeatable model.',
      items: [
        mk('Franchise Feasibility', ['Replicability Assessment', 'Market Appetite', 'Franchise vs Own-Operate', 'Legal Landscape', 'Investment Case']),
        mk('Unit Economics & Fee Structure', ['Unit Economics', 'Franchise Fee Design', 'Royalty Models', 'Franchisee Returns', 'Pricing Benchmarks']),
        mk('Operations Manual & Standards', ['Operations Manual', 'Brand Standards', 'Quality Controls', 'Supplier Standards', 'Training Curriculum']),
        mk('Brand & IP Protection', ['Trade Mark Registration', 'IP Licensing Terms', 'Brand Guidelines', 'Territory Rights', 'Enforcement Policy']),
        mk('Franchise Legal Framework', ['Franchise Agreements', 'Disclosure Documents', 'Master Agreements', 'Compliance Review', 'Dispute Mechanisms']),
      ],
      viewAll: 'Design a franchise',
    },
    {
      title: 'Franchise Launch & Recruitment',
      description: 'Open the first outlets and recruit the right franchisees.',
      items: [
        mk('Pilot Outlet Launch', ['Pilot Site Selection', 'Pilot Operating Plan', 'Pilot Metrics', 'Lessons Learned', 'Pilot-to-Franchise Readiness']),
        mk('Franchisee Profiling & Recruitment', ['Ideal Franchisee Profile', 'Recruitment Campaigns', 'Candidate Screening', 'Selection Panels', 'Franchise Sales Process']),
        mk('Franchisee Onboarding & Training', ['Onboarding Programmes', 'Initial Training', 'Site Opening Support', 'Launch Checklists', 'Mentoring']),
        mk('Site Selection & Fit-Out', ['Site Criteria', 'Lease Negotiation Support', 'Fit-Out Standards', 'Contractor Management', 'Opening Readiness']),
        mk('Franchise Marketing & Launch Support', ['Franchise Brochure', 'Franchise Expos', 'Local Launch Campaigns', 'Digital Lead Generation', 'Brand Fund Design']),
      ],
      viewAll: 'Launch your franchise',
    },
    {
      title: 'Master Franchise & Rollout',
      description: 'Scale the network across regions and countries.',
      items: [
        mk('Master Franchise Structuring', ['Master Franchise Terms', 'Sub-Franchising Rules', 'Development Schedules', 'Master Fees & Royalties', 'Master Franchisee Selection']),
        mk('Territory & Area Development', ['Territory Mapping', 'Area Development Plans', 'Exclusivity Terms', 'Performance Targets', 'Territory Reviews']),
        mk('International Rollout', ['Country Prioritisation', 'Localisation Requirements', 'Regulatory Review', 'Supply Chain Setup', 'International Launch Plans']),
        mk('Network Operations & Support', ['Field Support Model', 'Franchisee Portals', 'Supply & Procurement', 'Network Reporting', 'Franchise Advisory Councils']),
        mk('Network Performance & Renewal', ['Network Scorecards', 'Compliance Audits', 'Franchise Renewals', 'Underperformer Plans', 'Network Evolution']),
      ],
      viewAll: 'Scale the network',
    },
  ],
};

// v262: advanced sub-services, so every Infrastructure item has 4, 6 or 8 pages (src/data/infrastructureAdvanced.js)
INFRASTRUCTURE_MENU.columns.forEach((col) => (col.items || []).forEach((it) => {
  const extra = INFRA_NEW[`${col.title}|${it.label}`];
  if (extra) it.children = [...it.children, ...extra.map((r) => r[0])];
}));

// ==================================================================
// OPPORTUNITIES
// ==================================================================
export const OPPORTUNITIES_MENU = {
  key: 'opportunities',
  layout: 'deals',
  title: 'Opportunities',
  description: 'Business-development pathways first: venture planning, ownership transitions and strategic partnerships, assessed through the NK&CO engagement lifecycle. Not a regulated investment service, and not real estate brokerage.',
  exploreLabel: 'Explore Opportunities',
  exploreHref: '/opportunities',
  featured: {
    tag: 'Featured route',
    title: 'Business Brokerage: selling or acquiring a business',
    description: 'Counterparty identification, introductions and process coordination within a defined mandate. Transactions are classified before acceptance; real estate brokerage and investment activity are not included.',
    ctaLabel: 'Read the practice',
    ctaHref: '/overview/our-practices/business-brokerage',
    image: plate('Business Brokerage: selling or acquiring a business'),
  },
  supporting: S.opportunities,
  columns: [
    {
      title: "Selling a Business",
      description: "Seller-side brokerage mandates for owners of small and medium-sized businesses: mandate, opportunity preparation, buyer identification and process coordination, within the authorised brokerage scope.",
      items: [
        mk("Sale Mandate Set-Up", ["Owner Objectives", "Mandate Scope and Authority", "Exclusivity and Permitted Marketing", "Confidentiality and Disclosure", "Conflicts and Capacity"]),
        mk("Opportunity Preparation", ["Business Profile", "Anonymised Teaser", "Information Organisation", "Data-Room Index and Request Lists", "Questions for Advisers"]),
        mk("Buyer Identification and Approach", ["Buyer Categories", "Buyer-Identification Strategy", "Approaches Where Authorised", "Expressions of Interest", "Buyer Enquiry Register"]),
        mk("Sale Process Coordination", ["Introductory Meetings", "Indicative Proposals", "Transaction Timetable", "Adviser Coordination", "Milestones to Completion"]),
      ],
      viewAll: "Explore Selling a Business",
    },
    {
      title: "Acquiring a Business",
      description: "Buyer-side mandates for those who want to acquire an existing business: criteria, screening, introductions and coordination, within the authorised brokerage scope.",
      items: [
        mk("Acquisition Criteria", ["Target Sectors", "Geographies and Sizes", "Commercial Parameters", "Buyer Qualification", "Authority and Capacity"]),
        mk("Target Identification and Screening", ["Eligible Businesses", "Preliminary Commercial Screening", "Opportunity Comparison", "Target Pipeline", "Enquiry Records"]),
        mk("Introductions and Discussions", ["Owner Introductions", "Preliminary Information Requests", "Non-Binding Discussions", "Indicative Offers", "Status Reporting"]),
        mk("Completion Coordination", ["Buyer’s Advisers", "Open Conditions", "Completion Timetable", "Post-Agreement Steps", "Handover to Post-Acquisition Work"]),
      ],
      viewAll: "Explore Acquiring a Business",
    },
    {
      title: "Ownership Transitions",
      description: "Sales that follow from a change in ownership: succession, founder exits and disposals of a business unit, with legal, tax and family matters referred to the right professionals.",
      items: [
        mk("Succession-Led Sales", ["Retiring Owners", "Family Businesses", "Commercial Succession Solutions", "Referral to Legal and Tax Advisers"]),
        mk("Founder Exits", ["Entire Operating Business", "Sale to a Strategic Competitor", "Exit Readiness", "Management Continuity"]),
        mk("Subsidiary and Business-Unit Disposals", ["Perimeter Definition", "Scope Check", "Information Packs", "Disposal Process"]),
        mk("Preliminary Commercial Assessment", ["Commercial Profile Review", "Dependencies and Customer Concentration", "Indicative Pricing Discussions", "Independent Valuer Coordination"]),
      ],
      viewAll: "Explore Ownership Transitions",
    },
    {
      title: "Venture Planning",
      description: "Management Consultancy for people starting or expanding a business: concept, feasibility, operating model and launch readiness. Incorporation, licensing and legal work stay with authorised providers.",
      items: [
        mk("Concept and Feasibility", ["Business Concept Assessment", "Commercial Feasibility", "Market and Competitor Analysis", "Revenue and Cost Assumptions"]),
        mk("Operating Model and Launch", ["Initial Operating Model", "Organisational Structure", "Supplier and Operating Requirements", "Launch Plan and Milestones", "Launch Readiness Review"]),
        mk("Expansion Planning", ["Geographic Expansion", "New Product or Service Launch", "Multi-Location Operating Model", "Expansion Feasibility"]),
        mk("Specialist Coordination", ["Legal, Accounting and Tax Specialists", "Incorporation and Licensing", "Technical Specialists", "Coordination Plans"]),
      ],
      viewAll: "Explore Venture Planning",
    },
    {
      title: "Transaction Scope and Classification",
      description: "How each transaction is classified, priced and referred before a brokerage engagement is accepted, and which transactions fall outside the proposed activity.",
      items: [
        mk("Transaction Classification", ["Business Asset Transactions", "Ownership-Interest Transactions", "Real Estate-Related Transactions", "Investment and Capital-Raising Transactions"]),
        mk("Mandates and Fees", ["Fixed Fee", "Retainer", "Success Fee", "Dual Representation"]),
        mk("Referral to Authorised Providers", ["Legal Advice and Documentation", "Tax and Accounting", "Regulated Financial Services", "Real Estate Brokers"]),
      ],
      viewAll: "Explore Transaction Scope",
    },
  ],
};

// ==================================================================
// PRIVILEGES: members' access, podcasts and instructional material. Everything is generated from src/data/privileges.js
// ==================================================================
export const PRIVILEGES_MENU = {
  key: 'privileges',
  layout: 'columns',
  title: PRIV.title,
  description: PRIV.description,
  exploreLabel: PRIV.exploreLabel,
  exploreHref: '/privileges',
  featured: {
    tag: 'Featured series',
    title: 'The NK&CO Briefing: Dubai and Gulf capital in conversation',
    description: 'Eight audio series from NK&CO partners and their guests, alongside masterclasses, guides, videos, working tools, research, events, programmes and private sessions for members.',
    ctaLabel: 'Start listening',
    ctaHref: '/privileges/podcasts',
    image: topicPlate('privileges', 'Podcasts', '', '', 'mic', '#4d6b57'),
  },
  supporting: S.privileges,
  columns: PRIV.categories.map((cat) => ({
    title: cat.title,
    description: cat.description,
    items: cat.items.map((it) => mk(it.label, it.pieces.map((p) => p[0]))),
    viewAll: cat.viewAll,
    ...(cat.format === 'podcast' ? { briefingHref: '/intelligence/nk-co-briefing' } : {}),
  })),
};

// ==================================================================
// INTELLIGENCE
// ==================================================================
export const INTELLIGENCE_MENU = {
  key: 'intelligence',
  layout: 'publications',
  title: 'Intelligence',
  description: 'Research and market commentary on the UAE and GCC for business owners and decision-makers. Information only, not advice.',
  exploreLabel: 'Explore all intelligence',
  exploreHref: '/intelligence',
  featured: {
    tag: 'Flagship report',
    title: 'UAE Market Review \u2014 Q1 2026',
    description: 'Quarterly commentary on UAE market conditions for business owners and decision-makers. Information only, not advice.',
    ctaLabel: 'Read the report',
    ctaHref: '/intelligence/publications/uae-q1-2026',
    image: plate('UAE Market Review \u2014 Q1 2026'),
  },
  supporting: S.intelligence,
  featuredPublications: [
    { tag: 'Flagship report', date: 'Q1 2026', title: 'UAE Market Review \u2014 Q1 2026', excerpt: 'Quarterly commentary on UAE market conditions for business owners and decision-makers. Information only, not advice.', image: plate('UAE Market Review \u2014 Q1 2026') },
    { tag: 'Outlook', date: '2026', title: 'Global Capital Flows Outlook 2026', excerpt: 'Capital movement, allocation trends and emerging market signals \u2014 with a GCC lens.', image: plate('Global Capital Flows Outlook 2026') },
    { tag: 'Perspective', date: 'Mar 2026', title: 'DIFC at 20 \u2014 the next chapter of the region\u2019s financial capital', excerpt: 'Institutional perspectives on the maturation of DIFC and Dubai\u2019s capital markets.', image: plate('DIFC at 20 \u2014 the next chapter of the region\u2019s financial capital') },
  ],
  columns: [
    {
      title: 'Research & Insights',
      items: [
        mk('The Dubai Real Estate Case', ["A Market Built on Property", "Who Buys and Why", "How Real Estate Firms Earn", "Rules That Protect Founders", "Your First Twelve Months", "Market Cycles and Timing"]),
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
      title: 'Developers',
      description: 'Dubai\u2019s leading property developers: profile, projects, launches and latest news.',
      items: [
        ...DEVELOPERS.map((d) => mk(d.name, d.rows.map((r) => r[0]))),
      ],
      viewAll: 'View all Developers',
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
  description: 'Sector context for NK&CO\u2019s consultancy, management and brokerage mandates. Information to support decisions, not advice.',
  exploreLabel: 'Discover Acquisitions',
  exploreHref: '/industries',
  featured: {
    tag: 'Featured sector',
    title: 'Sector context for consultancy and brokerage mandates',
    description: 'How NK&CO applies its three practices to businesses in each sector. Real estate brokerage is not part of the proposed business-brokerage activity.',
    ctaLabel: 'Read the sector view',
    ctaHref: '/industries/real-assets-and-infrastructure/real-estate-and-property',
    image: plate('The Future of Real Estate & Living in the UAE'),
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
    // v244: five more industries (src/data/industriesMore.js)
    ...MORE_INDUSTRIES,
  ],
};

// v247: extra sub-sectors on the original industries, so every industry has 4, 6 or 8 (src/data/industriesGrow.js)
INDUSTRIES_MENU.columns.forEach((col) => (col.items || []).forEach((it) => {
  const extra = GROW_ORIG[`${col.title}|${it.label}`];
  if (extra) it.children = [...it.children, ...extra.map((r) => r[0])];
}));

// ==================================================================
// EXPERTISE
// ==================================================================
export const EXPERTISE_MENU = {
  key: 'expertise',
  layout: 'experts',
  title: 'Expertise',
  description: 'Cross-cutting practice areas applied through NK&CO\u2019s three practices, under a written mandate and within the approved licence scope.',
  exploreLabel: 'Meet our experts',
  exploreHref: '/expertise',
  featured: {
    tag: 'Featured practice',
    title: 'AI, Data & Digital Transformation',
    description: 'Reinventing enterprise operating models through data, AI, and next-generation technology.',
    ctaLabel: 'Explore the practice',
    ctaHref: '/expertise/digital-ai-and-analytics',
    image: plate('AI, Data & Digital Transformation'),
  },
  supporting: S.expertise,
  featuredExperts: [
    { name: 'Rashid Al Mansouri', role: 'Managing Partner \u2014 Real Assets', image: IMG.exec1 },
    { name: 'Amira Kassem', role: 'Partner \u2014 Capital Markets & DIFC', image: UNSPLASH('photo-1573496359142-b8d87734a5a2', 800) },
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
      title: 'Holiday Homes',
      items: [
        mk('Short-Term Leasing', ['Nightly Pricing', 'Dynamic Rates', 'Channel Management', 'Occupancy Optimisation', 'Minimum Stay Rules']),
        mk('Guest Management', ['Check-In / Check-Out', 'VIP Programmes', 'Guest Experience', 'Review Management']),
        mk('Occupancy Architecture', ['Multi-Channel Distribution', 'Yield Management', 'Length-of-Stay Strategy', 'Seasonal Plans', 'Event-Driven Pricing', 'Booking Outlooks', 'Direct Booking Strategy', 'Corporate Lease Programmes']),
        mk('Revenue Optimisation', ['Pricing Algorithms', 'Package Design', 'Upsell & Cross-Sell', 'Ancillary Revenue', 'Dynamic Packaging', 'Loyalty Incentives']),
        mk('Platform Integration', ['Airbnb & Booking.com', 'PMS Systems', 'Payment Gateways', 'Analytics Dashboards', 'Channel Managers']),
        mk('Hospitality Standards', ['Brand Standards', 'Service Blueprints', 'Quality Audits', 'Guest Satisfaction', 'Housekeeping Standards', 'Staff Training', 'Mystery Guest Reviews']),
      ],
      viewAll: 'View all in Holiday Homes',
    },
    {
      title: 'Property Management',
      items: [
        mk('Tenant Management', ['Guest Vetting', 'Booking Coordination', 'Group & Corporate', 'VIP Concierge', 'Owner Onboarding', 'Inventory & Furnishing']),
        mk('Maintenance Operations', ['Turnaround Cleaning', 'Preventive Maintenance', 'Emergency Response', 'Supply Management', 'Deep Cleaning Programmes', 'Pest & Hygiene Control', 'Appliance Servicing', 'Pool & Common Area Care']),
        mk('Service Coordination', ['Housekeeping', 'Linen & Amenities', 'Guest Support', 'Third-Party Vendors', 'Key & Access Management']),
        mk('Financial Reporting', ['Owner Statements', 'Yield Analytics', 'Cost Allocation', 'Tax Documentation']),
        mk('Lease Administration', ['Short-Term Contracts', 'DTCM Compliance', 'Deposit Handling', 'Extensions & Cancellations', 'Registration Renewals', 'Owner Agreements']),
        mk('Compliance Procedures', ['DTCM Permits', 'Tourism Dirham', 'Fire & Safety', 'Community Rules', 'Insurance Requirements', 'Noise & Neighbour Policies', 'Data & Privacy Compliance']),
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
  description: 'About NK&CO \u2014 an independent business advisory firm in management consultancy and business brokerage, working through clearly defined mandates.',
  exploreLabel: 'About the firm',
  exploreHref: '/overview',
  featured: {
    tag: 'Corporate profile',
    title: 'An independent business advisory firm',
    description: 'Management consultancy and business brokerage, defined by clear mandates and a professional standard of execution.',
    ctaLabel: 'Read the profile',
    ctaHref: '/overview/the-firm/corporate-profile',
    image: plate('An independent business advisory firm'),
  },
  supporting: S.overview,
  locations: [
    { city: 'Dubai', region: 'United Arab Emirates' },
  ],
  columns: [
    {
      title: 'The Firm',
      description: 'NK&CO is an independent business advisory firm operating at the intersection of management consultancy, enterprise management and business brokerage.',
      items: [
        mk('Corporate Profile', ['Independent Advisory', 'Enterprise Context', 'Intent to Outcomes', 'Scope of Each Engagement']),
        mk('Professional Principles', ['Analytical Rigour', 'Commercial Objectivity', 'Clarity of Responsibility', 'Confidentiality', 'Disciplined Execution']),
        mk('Scope of Practice', ['Approved Activities', 'Licensing & Authorisations', 'What Brokerage Is Not', 'Working with Specialists', 'Separation of Practices', 'Activities Requiring Confirmation']),
      ],
      viewAll: 'View all in The Firm',
    },
    {
      title: 'Our Practices',
      description: 'NK&CO’s three practices are Management Consultancy, Enterprise Management and Business Brokerage. Each engagement is defined by its own scope, deliverables and the responsibilities formally accepted by the firm.',
      items: [
        mk('Management Consultancy', ['Strategy & Corporate Direction', 'Business Development & Commercial Strategy', 'Organisation & Management Structure', 'Operating Models & Processes', 'Performance Management & Information', 'Transformation & Restructuring', 'Expansion & Market Development', 'Business Planning & Financial Frameworks']),
        mk('Enterprise Management', ['General Business Management', 'Commercial Management', 'Operational Management', 'Financial Management & Control', 'People & Organisational Management', 'Systems & Digital Operations', 'Procurement & Supplier Management', 'Executive Management & Owner Reporting', 'Programme & Implementation Management', 'Interim & Outsourced Management', 'Management Mandate & Control Framework']),
        mk('Business Brokerage', ['Seller Representation', 'Buyer Identification', 'Marketing & Opportunity Presentation', 'Transaction Coordination', 'Engagements & Fees', 'Regulatory Boundaries']),
        mk('Engagement Types', ['Advisory Engagements', 'Ongoing Management Support', 'Business-Sale Mandates', 'Integrated Engagements']),
      ],
      viewAll: 'View all in Our Practices',
    },
    {
      title: 'How We Work',
      description: 'Engagements are established on the basis of a defined commercial requirement, an agreed scope of work and a clear understanding of the responsibilities of each party.',
      items: [
        mk('Our Methodology', ['Assessment', 'Analysis', 'Formulation', 'Implementation Coordination', 'Review']),
        mk('Client Engagement', ['Initial Discussion', 'Scope & Written Mandate', 'Engagement Set-Up', 'Delivery & Reporting', 'Review & Close']),
        mk('Working Arrangements', ['Deliverables', 'Reporting & Decision Rights', 'Access to Information', 'Responsibilities of Each Party', 'Engagement Governance', 'Authority Levels', 'Engagement Lifecycle', 'Transaction Classification', 'Acceptance Controls']),
      ],
      viewAll: 'View all in How We Work',
    },
    {
      title: 'Careers',
      description: 'Roles across management consultancy, enterprise management, business brokerage and the functions that support them.',
      items: [
        mk('Experienced Hires', ['Consultants', 'Management Professionals', 'Brokerage Professionals', 'Specialists', 'Support Functions']),
        mk('Life at NK&CO', ['Skills Development', 'Professional Standards', 'Disciplined Execution', 'Clarity of Responsibility']),
      ],
      viewAll: 'View all Careers',
    },
    {
      // v444 · third section of the Overview menu (3 items). Wording reuses the firm's existing governance / standards language;
      // names are placeholders: rename them here and the pages and links follow.
      title: 'Governance',
      description: 'The standards, controls and regulatory boundaries within which NK&CO accepts and carries out each engagement.',
      items: [
        mk('Professional Standards', ['Analytical Rigour', 'Commercial Objectivity', 'Clarity of Responsibility', 'Disciplined Execution', 'Confidentiality']),
        mk('Confidentiality', ['Client Information', 'Access to Information', 'Responsibilities of Each Party', 'Working with Specialists']),
        mk('Regulatory Boundaries', ['Approved Activities', 'Licensing & Authorisations', 'What Brokerage Is Not', 'Working with Specialists']),
      ],
      viewAll: 'View all Governance',
    },
  ],
};

// Items flagged hidden: true are kept (data, routes, pages) but not shown in the header, side panel or footer.
// To bring them back, delete the flag (or set it to false).
export const NAV_ITEMS_ALL = [
  { key: 'capabilities', label: 'Capabilities', data: CAPABILITIES_MENU },
  { key: 'infrastructure', label: 'Infrastructure', data: INFRASTRUCTURE_MENU },
  { key: 'opportunities', label: 'Opportunities', data: OPPORTUNITIES_MENU },
  { key: 'intelligence', label: 'Intelligence', data: INTELLIGENCE_MENU, hidden: true },
  { key: 'industries', label: 'Industries', data: INDUSTRIES_MENU, hidden: true },
  { key: 'privileges', label: 'Privileges', data: PRIVILEGES_MENU, hidden: true },
  { key: 'expertise', label: 'Expertise', data: EXPERTISE_MENU },
  { key: 'overview', label: 'Overview', data: OVERVIEW_MENU },
];
export const NAV_ITEMS = NAV_ITEMS_ALL.filter((n) => !n.hidden);

// Homepage content
export const HERO = {
  eyebrow: 'Management Consultancy & Business Brokerage',
  title: 'NK&CO',
  description: 'An independent business advisory firm operating at the intersection of management consultancy, organisational and operational development, and business brokerage.',
  support: 'Strategy \u00b7 Organisation \u00b7 Performance \u00b7 Transactions',
  cta: 'Discuss your business',
  image: UNSPLASH('photo-1479839672679-a46483c0e7c8'), // white high-rise against clear sky: architectural, restrained
  caption: 'Management consultancy. Business brokerage. Clearly defined mandates.',
};

// The strategic thesis: four lines, shown as the dark strip under the hero.
export const THESIS = [
  { tag: 'I', title: 'Build.', desc: 'Establish the foundations for a viable enterprise.' },
  { tag: 'II', title: 'Structure.', desc: 'Create the systems that support disciplined performance.' },
  { tag: 'III', title: 'Grow.', desc: 'Improve performance and develop scalable opportunities.' },
  { tag: 'IV', title: 'Capitalise.', desc: 'Translate business maturity into strategic opportunity.' },
];

// The four-part promise.
export const PILLARS = [
  { number: '01', name: 'Build.', title: 'Establish the foundations for a viable enterprise.', desc: 'Establish commercially grounded business models and the foundations for successful operations.' },
  { number: '02', name: 'Structure.', title: 'Create the systems that support disciplined performance.', desc: 'Develop the management systems, processes and organisational capabilities required for effective execution.' },
  { number: '03', name: 'Grow.', title: 'Improve performance and develop scalable opportunities.', desc: 'Improve commercial performance and establish the capacity for sustainable expansion.' },
  { number: '04', name: 'Capitalise.', title: 'Translate business maturity into strategic opportunity.', desc: 'Prepare the enterprise for appropriate strategic, capital and ownership-related opportunities, supported by stronger financial visibility, management capability and organisational readiness.', note: 'Regulated arranging, investment advice or other restricted activities are handled only by appropriately qualified and authorised professionals.' },
];

// The NK&CO Business Lifecycle Framework.
export const LIFECYCLE = [
  { phase: 'Phase I', title: 'Build', lead: 'Create the foundations.', stages: [
    ['01 Validate', 'Establish commercial viability.'],
    ['02 Build', 'Develop the enterprise.'],
  ] },
  { phase: 'Phase II', title: 'Structure', lead: 'Develop organisational capability.', stages: [
    ['03 Structure', 'Establish operating discipline.'],
    ['04 Perform', 'Improve business performance.'],
  ] },
  { phase: 'Phase III', title: 'Grow', lead: 'Improve performance and expand capability.', stages: [
    ['05 Grow', 'Strengthen commercial outcomes.'],
    ['06 Scale', 'Develop repeatable capacity.'],
    ['09 Expand', 'Develop new markets and opportunities.'],
  ] },
  { phase: 'Phase IV', title: 'Capitalise', lead: 'Develop strategic opportunities.', stages: [
    ['07 Capital Readiness', 'Strengthen financial and organisational preparedness.'],
    ['08 Capital Strategy', 'Evaluate appropriate strategic pathways.'],
    ['10 Transact', 'Prepare for ownership or strategic change.'],
  ] },
];

// The NK&CO engagement methodology: seven stages.
export const METHODOLOGY = [
  { n: '01', activity: 'We Structure', title: 'Understand', desc: 'Establish the business context, objectives, stakeholders, constraints and relevant evidence.' },
  { n: '02', activity: 'We Structure', title: 'Diagnose', desc: 'Identify root causes, performance gaps, dependencies and opportunities for improvement.' },
  { n: '03', activity: 'We Structure', title: 'Prioritise', desc: 'Evaluate initiatives by value, feasibility, risk, cost and timing.' },
  { n: '04', activity: 'We Structure', title: 'Design', desc: 'Define the target state, interventions, business case, responsibilities and success measures.' },
  { n: '05', activity: 'We Manage', title: 'Implement', desc: 'Coordinate workstreams, support decisions, manage dependencies and address execution challenges.' },
  { n: '06', activity: 'We Manage', title: 'Measure', desc: 'Compare actual progress with baselines, milestones, targets and agreed benefits.' },
  { n: '07', activity: 'We Manage', title: 'Institutionalise', desc: 'Embed the processes, ownership and management routines that sustain improvements.' },
];

// Service lines: three complementary capabilities within one firm.
export const SERVICES = [
  { name: 'We Structure', sub: 'Management Consultancy', desc: 'Establish a clear understanding of the business, determine its strategic direction and design the commercial, organisational and operational framework needed to achieve its objectives.', items: ['Strategic & commercial assessment', 'Organisational & governance design', 'Operating model & process architecture', 'Financial & performance architecture', 'Growth & transformation strategy'], outcome: 'Clarity of direction, a defined operating model, improved management visibility and a prioritised plan for strengthening the business.', model: 'Project fee or advisory retainer.' },
  { name: 'We Manage', sub: 'Enterprise Management', desc: 'Support the implementation of agreed priorities and establish the management discipline to monitor progress, address underperformance and sustain improvement.', items: ['Implementation management', 'Management information & performance control', 'Operational improvement', 'Management & owner reporting', 'Growth execution support'], outcome: 'Stronger management discipline, more reliable reporting, clearer accountability and consistent execution of agreed priorities.', model: 'Monthly or fixed-term service fee for an agreed scope, defined in a statement of work.' },
  { name: 'We Sell', sub: 'Business Brokerage', desc: 'Facilitate the sale and purchase of eligible established businesses, connecting owners with prospective acquirers and coordinating the commercial process under an agreed brokerage mandate.', items: ['Seller mandate & exit objectives', 'Business presentation & marketing', 'Buyer identification & matching', 'Commercial negotiation coordination', 'Due diligence & completion coordination'], outcome: 'A structured sale process, access to relevant prospective buyers and coordinated progression towards a potential transaction.', model: 'Brokerage fee agreed in a written mandate, subject to applicable law.', note: 'Limited to eligible operating businesses within our authorised scope. Real estate brokerage, regulated securities transactions and capital raising are excluded.' },
];

// Institutional principles.
export const PRINCIPLES = ['Commercial substance', 'Analytical rigour', 'Strategic coherence', 'Implementation discipline', 'Professional integrity', 'Client alignment', 'Proportionate governance', 'Continuous development', 'Institutional consistency', 'Long-term perspective'];

// Value creation before capitalisation.
export const PHILOSOPHY = {
  principle: 'A considered approach to enterprise development.',
  intro: 'NK&CO is a management consulting and business value advisory firm focused on the development, transformation and long-term advancement of enterprises.',
  paragraphs: [
    'We believe that sustainable business progress is built through the alignment of commercial opportunity, financial performance, operational effectiveness and organisational capability. Our work reflects this perspective. We help clients examine the factors that shape their performance, establish clear priorities and develop the structures and capabilities required to pursue their objectives.',
    'Through a connected business lifecycle methodology, we support enterprises at different stages of development, from initial business formation to operational transformation, expansion and preparation for significant strategic decisions.',
    'Our approach combines analytical rigour, commercial judgement and practical implementation. We place importance on clear responsibilities, transparent assumptions, appropriate governance and the assessment of progress against agreed objectives.',
    'We work with relevant professional specialists where additional expertise is required, maintaining clear boundaries between strategic advisory, programme coordination and specialist execution.',
    'As enterprises evolve, their requirements change. The capabilities needed to establish a business differ from those required to manage increasing complexity, sustain profitable growth, expand into new markets or prepare for significant strategic decisions. The NK&CO Business Lifecycle Framework provides a consistent approach to these changing requirements.',
  ],
  close: 'Our objective is to help businesses develop stronger foundations, operate with greater effectiveness and become better prepared for the opportunities ahead.',
};

export const BRAND_STATEMENT = {
  lead: 'We help build businesses with stronger foundations, clearer direction, greater operational capability and a more considered path towards long-term value creation.',
  paragraphs: [
    'We work with business owners, founders and leadership teams across the enterprise lifecycle, from business formation and organisational structuring to operational transformation, commercial expansion and strategic development. Our approach brings together business strategy, commercial analysis, financial performance, operating-model design and organisational capability within a coherent framework for enterprise development.',
    'We begin by understanding the business: its market, economics, operating arrangements, management capabilities and strategic objectives. We then work with clients to translate priorities into practical programmes of action, supported by clear responsibilities, defined deliverables and appropriate measures of progress. Where additional expertise is required, we coordinate relevant specialists within an agreed framework of professional responsibilities and accountability.',
    'Every business is different. We begin by understanding your objectives, current challenges and desired outcome, then recommend the appropriate scope of work rather than a standard package. Structure, management and sale are separate services, not compulsory stages: you can engage NK&CO for one, two or all three.',
    'Our work is guided by analytical rigour, commercial judgement and professional integrity. Our long-term ambition is to develop a recognised approach to enterprise development that combines strategic clarity with implementation discipline and measurable business progress.',
  ],
  purpose: 'Evidence-led analysis, commercial judgement, disciplined execution, transparent assumptions and professional integrity.',
};

// Operating model: one accountable centre, specialist capabilities around it.
export const OPERATING_MODEL = {
  centre: 'Business diagnosis \u00b7 Strategy \u00b7 Programme coordination \u00b7 Performance oversight',
  capabilities: [
    { title: 'Finance & Accounting', desc: 'Reporting, budgets and controls' },
    { title: 'Legal & Compliance', desc: 'Appropriately qualified specialists' },
    { title: 'Technology & Systems', desc: 'CRM, ERP and data infrastructure' },
    { title: 'People & Operations', desc: 'Organisation, recruitment and processes' },
    { title: 'Commercial Growth', desc: 'Sales, marketing and expansion' },
    { title: 'Capital & Transactions', desc: 'Authorised partners where required' },
  ],
};

export const FEATURED_PRIVILEGES = [
  { category: 'Capital Markets', date: 'Mar 12, 2026', to: '/privileges/podcasts/capital-conversations-episodes/the-private-credit-turn', title: 'Private credit reaches an inflection point in the Gulf', excerpt: 'Institutional allocators are re-engineering their fixed-income playbooks \u2014 with private credit now central.', image: plate('Private credit reaches an inflection point in the Gulf') },
  { category: 'Technology & AI', date: 'Mar 05, 2026', to: '/privileges/podcasts/dubai-briefing-episodes/ai-in-the-enterprise', title: 'AI in the enterprise: from pilot to everyday use', excerpt: 'Where UAE institutions are moving from experiments to routine use of AI, and what separates the pilots that stick from the ones that stall.', image: plate('AI in the enterprise: from pilot to everyday use') },
  { category: 'Real Estate', date: 'Feb 27, 2026', to: '/privileges/podcasts/real-assets-room-episodes/residential-supply-and-what-buyers-do-next', title: 'Repricing risk: how the next Dubai cycle rewards discipline over scale', excerpt: 'A revised risk framework for real asset investors navigating a higher-for-longer capital environment.', image: plate('Repricing risk: how the next Dubai cycle rewards discipline over scale') },
];

export const STATS = [
  { value: '10 stages', label: 'One lifecycle framework' },
  { value: '7 steps', label: 'Understand to Institutionalise' },
  { value: 'Evidence-led', label: 'Assumptions made explicit' },
  { value: 'Proportionate', label: 'Governance matched to risk' },
];

export const QUICK_LINKS = ['Contact Us', 'Careers', 'Alumni', 'Media Enquiries', 'Client Portal'];
export const SOCIAL_LINKS = [{ label: 'LinkedIn', href: '#linkedin' }, { label: 'X', href: '#x' }, { label: 'YouTube', href: '#youtube' }, { label: 'Instagram', href: '#instagram' }].filter((l) => !l.href.startsWith('#')); // placeholder stubs hidden until real profile URLs exist
export const getMenuByKey = (key) => NAV_ITEMS.find((n) => n.key === key)?.data || null;
