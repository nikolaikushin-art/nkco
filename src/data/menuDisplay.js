// v446 · Mega-menu display rules (menu only; page routes, copy and photo keys keep the ORIGINAL labels).
//
// Why this file exists: the accordion panels were uneven (2 to 11 rows, labels from 6 to 43 characters,
// "and" mixed with "&"). Everything that controls how a panel LOOKS is here, in one place:
//
//   MENU_MAX_KIDS  rows shown per panel before "View ...". Pages beyond this still exist and are reached via "View ...".
//   MENU_KEEP      the rows to show for a panel when the first MENU_MAX_KIDS are not the best five.
//   MENU_LABELS    shorter wording for the menu only (target: 14-28 characters, one line, same grammar).
//
// Panel key: "section|Category" for a category panel (Infrastructure),
//            "section|Category|Item" for an item panel (everything else).

export const MENU_MAX_KIDS = 5;

export const MENU_KEEP = {
  'capabilities|Business Deployment|Commercial Excellence': ['Sales Transformation', 'Pricing Strategy', 'Channel Optimisation', 'Key Account Management', 'Go-to-Market Design'],
  'capabilities|Talent & Recruitment|Talent Management': ['Emiratisation Strategy', 'Workforce Planning', 'Learning & Development', 'Performance Management', 'Compensation & Benefits'],
  'infrastructure|Setup & Conceptualisation': ['Corporate Licensing & Registration', 'Corporate Incorporation & Inception', 'Foundation & Formation Framework', 'Banking & Initial Capital Structuring', 'Brand Development & Deployment'],
  'infrastructure|Establishment & Operations': ['General Management & Operations', 'Finance, Accounting & Taxation', 'Human Resource & Recruitment', 'IT Deployment & AI Infrastructure', 'Public Relations, Marketing & Sales'],
  'infrastructure|Governance & Risk': ['Corporate Governance Frameworks', 'Regulatory & Legal Compliance', 'Enterprise Risk & Internal Control', 'Contracts & Legal Operations', 'Cyber & Data Security'],
  'infrastructure|Sustainability & Expansion': ['Quality Governance & Assurance', 'Partnership & Investor Relations', 'Client Engagement & Retention', 'Team & Workforce Enhancement', 'Enterprise Expansion & Franchise'],
  'expertise|Property Developers|Launch Coordination': ['Launch Events', 'Broker Onboarding', 'Sales Gallery Design', 'Launch Day Operations', 'Show Unit Delivery'],
};

export const MENU_LABELS = {
  'Business Development & Commercial Strategy': 'Commercial Growth Strategy',
  'Investment and Capital-Raising Transactions': 'Investment & Capital Raising',
  'Dependencies and Customer Concentration': 'Customer Concentration Risk',
  'Banking & Initial Capital Structuring': 'Banking & Initial Capital',
  'Performance Management & Information': 'Performance & Information',
  'Franchise Marketing & Launch Support': 'Franchise Marketing & Launch',
  'Marketing & Opportunity Presentation': 'Opportunity Presentation',
  'Corporate Incorporation & Inception': 'Incorporation & Inception',
  'Organisation & Management Structure': 'Organisation & Management',
  'Public Relations, Marketing & Sales': 'PR, Marketing & Sales',
  'Legal, Accounting and Tax Specialists': 'Legal, Tax & Accounting',
  'Corporate Licensing & Registration': 'Licensing & Registration',
  'Family Office & Wealth Structuring': 'Family Office & Wealth',
  'Enterprise Risk & Internal Control': 'Risk & Internal Control',
  'Franchisee Profiling & Recruitment': 'Franchisee Recruitment',
  'People & Organisational Management': 'People & Organisation',
  'Exclusivity and Permitted Marketing': 'Exclusivity & Marketing',
  'Handover to Post-Acquisition Work': 'Post-Acquisition Handover',
  'Alliance Governance & Performance': 'Governance & Performance',
  'Succession & Ownership Transition': 'Succession & Ownership',
  'IT Deployment & AI Infrastructure': 'IT & AI Infrastructure',
  'Supplier and Operating Requirements': 'Supplier & Operating Needs',
  'Continuous Improvement Programme': 'Continuous Improvement',
  'Foundation & Formation Framework': 'Foundation & Formation',
  'Referral to Legal and Tax Advisers': 'Legal & Tax Referrals',
  'Franchisee Onboarding & Training': 'Franchisee Onboarding',
  'Real Estate-Related Transactions': 'Real Estate Transactions',
  'Preliminary Information Requests': 'Initial Information Requests',
  'Enterprise Expansion & Franchise': 'Expansion & Franchising',
  'Partnership & Investor Relations': 'Partner & Investor Relations',
  'Preliminary Commercial Screening': 'Initial Commercial Screening',
  'Commercial Succession Solutions': 'Commercial Succession',
  'Transformation Programme Office': 'Transformation Office',
  'Ownership-Interest Transactions': 'Ownership-Interest Deals',
  'Competitor & Landscape Analysis': 'Competitor Landscape',
  'Data-Room Index and Request Lists': 'Data-Room Index & Requests',
  'Independent Valuer Coordination': 'Valuer Coordination',
  'Corporate Governance Frameworks': 'Corporate Governance',
  'General Management & Operations': 'Management & Operations',
  'Business Plan & Operating Model': 'Plan & Operating Model',
  'Location & Jurisdiction Scoping': 'Location & Jurisdiction',
  'Holding & Foundation Structures': 'Holding & Foundation',
};

// Wording shown in the menu for one label: curated short form, otherwise "and" -> "&" so the style is the same everywhere.
export const menuLabel = (label = '') => MENU_LABELS[label] || String(label).replace(/ and /g, ' & ');

// Rows to show for a panel: [{ value, label }], value = the original label (used for links), label = the menu wording.
export const menuKids = (section, category, item, kids = []) => {
  const key = [section, category, item].filter(Boolean).join('|');
  const keep = MENU_KEEP[key];
  const pick = keep ? keep.filter((k) => kids.includes(k)) : kids;
  return pick.slice(0, MENU_MAX_KIDS).map((value) => ({ value, label: menuLabel(value) }));
};

// v446 · Picture in the left column of each top mega menu (Infrastructure keeps its own OMS picture, set in MegaRail CX_SETUP).
// Each is a photo from src/data/photoLibrary.json chosen by its label. To change one, replace the photo id (the text after unsplash.com/).
const PHOTO = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=75`;
export const MENU_IMAGES = {
  capabilities: PHOTO('photo-1531297484001-80022131f5a1'), // "Executive discussing strategy in boardroom overlooking city"
  opportunities: PHOTO('photo-1554224155-1696413565d3'), // "Sales negotiator preparing term sheet and close strategy"
  expertise: PHOTO('photo-1486406146926-c627a92ad1ab'), // "Modern commercial towers: scale, platforms, and urban property"
  overview: PHOTO('photo-1607414851776-f2fcc379fb48'), // "Dubai skyline across the water at sunset"
};

// v446 · One call-to-action per category (verb + object). Used by the Expertise grid and by the burger menu's bottom bar.
// Infrastructure is not listed: its CTAs belong to its six groups (CX_SETUP in MegaRail.jsx).
export const EXPERTISE_CTAS = {
  'Agency & Brokerage': 'Structure a Mandate',
  'Primary & Off-Plan': 'Plan an Off-Plan Launch',
  'Secondary & Resale': 'Prepare a Resale',
  'Commercial & Retail': 'Source Commercial Space',
  'Holiday Homes': 'Run a Holiday Home',
  'Property Management': 'Manage a Property',
  'Property Developers': 'Launch a Development',
  'Leasing & Lettings': 'Let a Property',
};
export const CATEGORY_CTAS = {
  ...EXPERTISE_CTAS,
  // Capabilities
  'Business Deployment': 'Plan Your Market Entry',
  'Enterprise Consulting': 'Improve Performance',
  'Corporate Advisory': 'Structure Your Group',
  'Talent & Recruitment': 'Build Your Team',
  'Capital Markets': 'Raise Capital',
  'Mergers & Acquisitions': 'Prepare a Transaction',
  // Opportunities
  'Selling a Business': 'Prepare a Sale',
  'Acquiring a Business': 'Pursue an Acquisition',
  'Ownership Transitions': 'Plan a Transition',
  'Venture Planning': 'Plan a Venture',
  'Transaction Scope and Classification': 'Review Transaction Scope',
  // Overview
  'The Firm': 'Read the Firm Profile',
  'Our Practices': 'Explore Our Practices',
  'How We Work': 'Understand Our Approach',
  'Careers': 'Explore Careers',
  'Governance': 'Review Our Standards',
};
