// Business Diagnostic · all copy and options for the Contact menu live here (src/components/mega/MegaContact.jsx only renders them).
// Edit wording, options and the per-stage questions in this file; the form picks the changes up without any other change.

export const STEPS = [
  { key: 'contact', label: 'Contact' },
  { key: 'business', label: 'Your business' },
  { key: 'challenges', label: 'Profile' },
  { key: 'objectives', label: 'Objectives' },
  { key: 'scope', label: 'Scope' },
  { key: 'review', label: 'Review' },
];

// Step 1 · the three practices (same names as Overview > Our Practices in the menus). The first choice in the form.
export const PRACTICE_CHOICES = [
  { id: 'advisory', label: 'Advisory & Consultancy', line: 'Speak to us about strategy, operating models or restructuring your business.' },
  { id: 'enterprise', label: 'Enterprise Management', line: 'Speak to us about running, controlling and reporting on your business.' },
  { id: 'brokerage', label: 'Business Brokerage', line: 'Speak to us about selling a business, buying one, or a transaction.' },
];

export const OFFICE_EMAIL = 'info@nkco.ae';

export const COUNTRIES = ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua & Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo - Brazzaville","Congo - Kinshasa","Costa Rica","Côte d’Ivoire","Croatia","Cuba","Cyprus","Czechia","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hong Kong SAR China","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao SAR China","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar (Burma)","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Palestinian Territories","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Samoa","San Marino","São Tomé & Príncipe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St. Kitts & Nevis","St. Lucia","St. Vincent & Grenadines","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad & Tobago","Tunisia","Türkiye","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];

// Country of operation -> default dial code (only used until the person picks a code themselves)
export const DIAL_CODES = [
  ['+971', 'United Arab Emirates'], ['+966', 'Saudi Arabia'], ['+974', 'Qatar'], ['+965', 'Kuwait'], ['+973', 'Bahrain'], ['+968', 'Oman'],
  ['+962', 'Jordan'], ['+961', 'Lebanon'], ['+20', 'Egypt'], ['+90', 'Turkey'], ['+91', 'India'], ['+92', 'Pakistan'],
  ['+44', 'United Kingdom'], ['+353', 'Ireland'], ['+33', 'France'], ['+49', 'Germany'], ['+41', 'Switzerland'], ['+39', 'Italy'], ['+34', 'Spain'],
  ['+7', 'Russia'], ['+86', 'China'], ['+65', 'Singapore'], ['+61', 'Australia'], ['+1', 'United States'], ['+27', 'South Africa'],
];

export const CONTACT_METHODS = ['Email', 'Telephone', 'WhatsApp'];

export const STAGES = [
  // practices = which practice(s) offer this situation; labels = wording per practice where it differs
  { id: 'idea', label: 'I am developing a new business idea.', group: 'The business idea', practices: ['advisory'] },
  { id: 'launch', label: 'I am preparing to launch a business.', group: 'The launch', practices: ['advisory'] },
  { id: 'established', label: 'I operate an established business.', group: 'The business', practices: ['advisory'] },
  { id: 'restructure', label: 'I want to restructure or improve an existing business.', group: 'The business', practices: ['advisory'] },
  { id: 'expand', label: 'I want to expand into a new market.', group: 'The expansion', practices: ['advisory'] },
  { id: 'em_launch', label: 'I am launching a business and need it managed from day one.', group: 'The launch', practices: ['enterprise'] },
  { id: 'em_turnaround', label: 'I need to stabilise or turn around an existing business.', group: 'The turnaround', practices: ['enterprise'] },
  { id: 'em_expand', label: 'I am opening a new operation and need it run on the ground.', group: 'The new operation', practices: ['enterprise'] },
  { id: 'em_run', label: 'I want NK&CO to manage my business on my behalf.', group: 'The business', practices: ['enterprise'] },
  { id: 'em_interim', label: 'I need interim or executive management cover.', group: 'The role to be covered', practices: ['enterprise'] },
  { id: 'em_finance', label: 'I need financial management, control and reporting.', group: 'The finance function', practices: ['enterprise'] },
  { id: 'sell', label: 'I am considering selling my business.', group: 'The proposed sale', practices: ['brokerage'] },
  { id: 'value', label: 'I want to know what my business is worth.', group: 'The valuation', practices: ['brokerage'] },
  { id: 'acquire', label: 'I am looking to acquire a business.', group: 'The proposed acquisition', practices: ['brokerage'] },
  { id: 'invest', label: 'I am exploring an investment or strategic partnership.', group: 'The investment or partnership', practices: ['brokerage'] },
];
export const stagesFor = (practice) => STAGES.filter((s) => !practice || s.practices.includes(practice)).map((s) => ({ ...s, label: (s.labels && s.labels[practice]) || s.label }));

export const INDUSTRIES = [
  'Real estate and construction', 'Hospitality and tourism', 'Retail and consumer goods', 'Food and beverage', 'Professional services',
  'Financial services', 'Technology and software', 'Healthcare and wellness', 'Education and training', 'Logistics and trading',
  'Manufacturing and industrial', 'Energy and utilities', 'Media and marketing', 'Other',
];
export const YEARS = ['Less than 1 year', '1 – 3 years', '3 – 5 years', '5 – 10 years', 'More than 10 years'];
export const EMPLOYEES = ['Just me', '2 – 10', '11 – 50', '51 – 200', '201 – 500', 'More than 500'];
export const REVENUE = ['Pre-revenue', 'Under AED 1 million', 'AED 1 – 5 million', 'AED 5 – 25 million', 'AED 25 – 100 million', 'More than AED 100 million'];
export const OWNERSHIP = ['Sole owner', 'Partners or co-founders', 'Family-owned', 'Investor-backed', 'Listed or institutional'];
export const SALE_OBJECTIVE = ['Full sale', 'Partial sale or minority stake', 'Merger or strategic partner', 'Not yet decided'];
export const BUDGET = ['Under AED 5 million', 'AED 5 – 25 million', 'AED 25 – 100 million', 'More than AED 100 million', 'Not yet defined'];
export const BUYER_TYPE = ['Individual investor', 'Operating company', 'Investment fund or family office', 'Management buy-out'];
export const FUNDING = ['Self-funded', 'Seeking investment', 'Already funded'];
export const LAUNCH_WINDOW = ['Within 3 months', 'Within 6 months', 'Within 12 months', 'Not yet decided'];
export const INVEST_ROLE = ['Seeking an investor', 'Looking to invest', 'Seeking a strategic partner', 'Open to either'];
export const LEADERSHIP = ['Owner-managed', 'Founder with a management team', 'Professional management in place', 'Leadership gap or transition', 'Not applicable yet'];

// Question blocks of step 2. type: select | text | area. required fields carry req: true.
const F = {
  industry: { id: 'industry', label: 'Industry', type: 'select', options: INDUSTRIES, req: true },
  location: { id: 'location', label: 'Business location', type: 'text', placeholder: 'City, country', req: true },
  years: { id: 'years', label: 'Years in operation', type: 'select', options: YEARS },
  employees: { id: 'employees', label: 'Number of employees', type: 'select', options: EMPLOYEES },
  revenue: { id: 'revenue', label: 'Approximate annual revenue', type: 'select', options: REVENUE },
  model: { id: 'model', label: 'Current business model and principal services', type: 'area', placeholder: 'What the business sells, to whom, and how', wide: true },
  ownership: { id: 'ownership', label: 'Ownership', type: 'select', options: OWNERSHIP },
};

const MGMT_SCOPE = ['The whole business', 'Finance and administration', 'Operations', 'Sales and marketing', 'A single site or branch'];
const INTERIM_ROLE = ['Managing director or CEO', 'Chief financial officer', 'Operations director', 'Commercial director', 'Another senior role'];
const DURATION = ['Under 3 months', '3 – 6 months', '6 – 12 months', 'Not yet decided'];
const FIN_SCOPE = ['Bookkeeping and accounts', 'Management reporting', 'Budgeting and cash flow', 'Full finance function', 'Not yet defined'];
const VALUE_PURPOSE = ['Considering a sale', 'Shareholder or partner exit', 'Raising investment', 'Planning and reference only'];
F.mgmtScope = { id: 'mgmtScope', label: 'Management required', type: 'select', options: MGMT_SCOPE, req: true };

const STARTUP = ['Within 1 month', 'Within 3 months', 'Within 6 months', 'Not yet decided'];
const SITES = ['One site', '2 – 3 sites', '4 – 10 sites', 'More than 10 sites'];
export const STAGE_FIELDS = {
  em_launch: [F.industry, { ...F.location, label: 'Business location' }, { id: 'startDate', label: 'Planned opening', type: 'select', options: STARTUP, req: true }, { id: 'teamSize', label: 'Team to be hired', type: 'select', options: ['Under 5', '5 – 20', '21 – 50', 'More than 50'] }, { id: 'licence', label: 'Licence and set-up status', type: 'select', options: ['Not started', 'In progress', 'Complete'] }, { ...F.model, label: 'The business to be run', placeholder: 'What it will sell, to whom, and the standard you expect' }],
  em_turnaround: [F.industry, F.location, F.years, F.employees, { id: 'trend', label: 'Recent performance', type: 'select', options: ['Declining slowly', 'Declining sharply', 'Flat', 'Profitable but uncontrolled'], req: true }, { id: 'cashPos', label: 'Cash position', type: 'select', options: ['Comfortable', 'Tight', 'Critical', 'Not sure'] }, { ...F.model, label: 'What has gone wrong', placeholder: 'What changed, and what has already been tried' }],
  em_expand: [F.industry, { ...F.location, label: 'Head office location' }, { id: 'targetMarket', label: 'Location of the new operation', type: 'text', placeholder: 'City, country', req: true }, { id: 'sites', label: 'Operations to be run', type: 'select', options: SITES }, { id: 'opening', label: 'Planned opening', type: 'select', options: STARTUP }, { ...F.model, label: 'The operation to be run', placeholder: 'What it does and how it connects to the main business' }],
  em_run: [F.industry, F.location, F.years, F.employees, F.revenue, F.ownership, F.mgmtScope, { ...F.model, label: 'The business to be managed', placeholder: 'What it does, how it runs today and what you want handed over' }],
  em_interim: [F.industry, F.location, F.employees, { id: 'interimRole', label: 'Role to be covered', type: 'select', options: INTERIM_ROLE, req: true }, { id: 'duration', label: 'Expected duration', type: 'select', options: DURATION }, { ...F.model, label: 'The situation', placeholder: 'Why cover is needed and what the role must deliver' }],
  em_finance: [F.industry, F.location, F.employees, F.revenue, { id: 'finScope', label: 'Finance support needed', type: 'select', options: FIN_SCOPE, req: true }, { ...F.model, label: 'The current finance set-up', placeholder: 'Who does it today, which systems, and what is not working' }],
  value: [F.industry, F.location, F.years, F.employees, F.revenue, F.ownership, { id: 'valuePurpose', label: 'Purpose of the valuation', type: 'select', options: VALUE_PURPOSE }, F.model],
  idea: [F.industry, { ...F.location, label: 'Planned location' }, { id: 'funding', label: 'Funding approach', type: 'select', options: FUNDING }, { ...F.model, label: 'The idea in brief', placeholder: 'What it is, who it serves, and what makes it different' }],
  launch: [F.industry, { ...F.location, label: 'Planned location' }, { id: 'launchWindow', label: 'Planned launch', type: 'select', options: LAUNCH_WINDOW }, { id: 'funding', label: 'Funding approach', type: 'select', options: FUNDING }, { ...F.model, label: 'The business you are launching', placeholder: 'Products or services, customers and operating model' }],
  established: [F.industry, F.location, F.years, F.employees, F.revenue, F.ownership, F.model],
  restructure: [F.industry, F.location, F.years, F.employees, F.revenue, F.ownership, F.model],
  expand: [F.industry, { ...F.location, label: 'Current location' }, { id: 'targetMarket', label: 'Target market or country', type: 'text', placeholder: 'Where you want to expand', req: true }, F.years, F.employees, F.revenue, F.model],
  sell: [F.industry, F.location, F.years, F.employees, F.revenue, F.model, F.ownership, { id: 'saleObjective', label: 'Sale objective', type: 'select', options: SALE_OBJECTIVE }],
  acquire: [{ ...F.industry, label: 'Target industry' }, { ...F.location, label: 'Target location' }, { id: 'budget', label: 'Approximate budget', type: 'select', options: BUDGET }, { id: 'buyerType', label: 'Buyer type', type: 'select', options: BUYER_TYPE }, { ...F.model, label: 'The business you are looking for', placeholder: 'Size, model, customers and anything it must have' }],
  invest: [F.industry, F.location, { id: 'role', label: 'Your position', type: 'select', options: INVEST_ROLE }, { id: 'ticket', label: 'Approximate amount', type: 'select', options: BUDGET }, { ...F.model, label: 'The opportunity in brief', placeholder: 'What the investment or partnership would involve' }],
};

const COMMON_CHALLENGES = ['Sales and revenue performance', 'Financial reporting and control', 'Operations and processes', 'Management and leadership capacity', 'Systems and technology', 'Legal, licensing and structure'];
export const STAGE_CHALLENGES = {
  em_launch: ['Recruiting the first team', 'Opening on time', 'Setting up systems and controls', 'Suppliers and operating contracts', 'Budget control in the first year', 'Reporting to the owner or investors'],
  em_turnaround: ['Cash running short', 'Costs out of control', 'Key staff leaving', 'Customers or contracts lost', 'No reliable figures', 'Creditors and suppliers under pressure'],
  em_expand: ['Hiring local management', 'Licences and approvals', 'Controlling a remote site', 'Aligning with head office', 'Local suppliers and partners', 'Reporting across locations'],
  em_run: ['No dedicated manager in place', 'Owner is too involved day to day', 'Inconsistent results or control', 'Financial reporting and cash flow', 'Staff and organisation', 'Suppliers, licences and compliance'],
  em_interim: ['A senior leader has left', 'A leader is on extended leave', 'Growth needs a stronger executive', 'Turnaround needs hands-on leadership', 'Preparing a permanent hire', 'Reporting to investors or the board'],
  em_finance: ['Late or inaccurate accounts', 'No management reporting', 'Weak cash-flow visibility', 'Budgets not tracked', 'Systems and controls', 'Audit, VAT and compliance readiness'],
  value: ['Not sure what drives value', 'Financial records not ready', 'Dependence on the owner', 'Different views among owners', 'Choosing a valuation approach', 'Timing of a sale or exit'],
  idea: ['Testing the idea and the market', 'Business model and pricing', 'Feasibility and budget', 'Legal structure and licensing', 'Finding a partner or co-founder', 'Funding the start-up phase'],
  launch: ['Business plan and financial model', 'Licensing and set-up', 'Hiring the first team', 'Operating model and systems', 'Go-to-market and first customers', 'Funding the launch'],
  established: COMMON_CHALLENGES.concat(['Growth has stalled', 'Cash flow and margins']),
  restructure: ['Declining performance', 'Cash flow and debt', 'Cost base and margins', 'Organisation and roles', 'Operations and processes', 'Systems and technology', 'Governance and reporting', 'Legal, licensing and structure'],
  expand: ['Market entry strategy', 'Partners and distribution', 'Licensing and set-up in the new market', 'Funding the expansion', 'Operating model across markets', 'Hiring and local management'],
  sell: ['Business valuation and sale preparation', 'Finding the right buyer', 'Confidentiality during the process', 'Financial records and reporting', 'Dependence on the owner', 'Sales and revenue performance', 'Legal and deal structure', 'Timing of the sale'],
  acquire: ['Identifying suitable targets', 'Valuing a target', 'Due diligence', 'Financing the acquisition', 'Deal structure and negotiation', 'Integration after completion'],
  invest: ['Finding the right counterparty', 'Valuation and terms', 'Due diligence', 'Governance and shareholder rights', 'Structuring the partnership', 'Reporting and oversight'],
};

export const STAGE_OBJECTIVES = {
  em_launch: ['Open on schedule', 'Have a trained team in place', 'Run to a clear budget and reporting rhythm'],
  em_turnaround: ['Stabilise cash and costs', 'Restore control and reporting', 'Return the business to the owner in good order'],
  em_expand: ['Open the new operation', 'Run it to head-office standards', 'Report on it alongside the main business'],
  em_run: ['Hand day-to-day management to NK&CO', 'Free the owner from daily operations', 'Put regular reporting in place'],
  em_interim: ['Cover the role quickly', 'Stabilise the team and the business', 'Hand over to a permanent leader'],
  em_finance: ['Reliable monthly accounts and reporting', 'Control of cash flow and budgets', 'Be ready for audit or investors'],
  value: ['Understand the value of the business', 'Know what to improve before a sale', 'Support a negotiation or exit'],
  idea: ['Test and shape the idea', 'Build the business plan and model', 'Prepare to raise funding'],
  launch: ['Launch on time and on budget', 'Set up the operating model', 'Put management in place'],
  established: ['Improve overall performance', 'Strengthen management and reporting', 'Prepare for growth'],
  restructure: ['Restore performance', 'Reorganise operations and the cost base', 'Put management and reporting in place'],
  expand: ['Enter a new market', 'Find local partners', 'Set up and run the new operation'],
  sell: ['Explore a business sale or acquisition', 'Support business execution through management services', 'Prepare the business for sale', 'Find and approach buyers'],
  acquire: ['Identify and approach targets', 'Value and negotiate a deal', 'Run the transaction to completion', 'Integrate the business after completion'],
  invest: ['Find an investor or partner', 'Structure and negotiate the arrangement', 'Support oversight after closing'],
};

export const FOCUS_BY = {
  advisory: ['Strategy and direction', 'Operating model', 'Finance and funding', 'Sales and marketing', 'Organisation and people', 'Technology and systems'],
  enterprise: ['Finance and accounting', 'Day-to-day operations', 'Sales and customers', 'Staff and administration', 'Suppliers and procurement', 'Reporting and governance'],
  brokerage: [],
};
export const LEADERSHIP_BY = {
  advisory: ['Owner-managed', 'Founder with a management team', 'Professional management in place', 'Leadership gap or transition', 'Not applicable yet'],
  enterprise: ['No manager in place', 'Owner runs it day to day', 'A manager who needs support', 'A team that needs oversight', 'Not applicable yet'],
  brokerage: [],
};
export const TIMEFRAMES_BY = {
  advisory: ['Immediately', 'Within 30 days', 'Within 3 months', 'Within 6 months', 'Longer-term planning'],
  enterprise: ['Immediately', 'Within 2 weeks', 'Within 30 days', 'After a handover period', 'To be agreed'],
  brokerage: ['As soon as possible', 'Within 3 months', 'Within 6 months', 'Within 12 months', 'No fixed timeline'],
};
export const NOTE_HINT = {
  advisory: ['Anything else we should know about the situation', 'What a good result looks like for you'],
  enterprise: ['Anything else we should know about the business and its people', 'What the business should look like after 12 months'],
  brokerage: ['Anything else we should know about the business or the deal', 'The outcome you want from the transaction, and any price expectation'],
};
export const FOCUS_AREAS = ['General management', 'Finance and control', 'Operations', 'Sales and marketing', 'People and organisation', 'Technology and systems'];
export const TIMEFRAMES = ['Immediately', 'Within 30 days', 'Within 3 months', 'Within 6 months', 'Longer-term planning'];

// Step 5 · the three practices as shown on the home page
export const PRACTICES = [
  { id: 'advisory', title: 'Advisory & Consultancy', items: ['Strategy & Corporate Direction', 'Operating Models & Processes', 'Transformation & Restructuring'] },
  { id: 'enterprise', title: 'Enterprise Management', items: ['General Business Management', 'Financial Management & Control', 'Executive Management & Reporting'] },
  { id: 'brokerage', title: 'Business Brokerage', items: ['Seller Representation', 'Buyer Identification', 'Transaction Coordination'] },
];
export const ENGAGEMENT_BY = {
  advisory: ['A first conversation', 'A defined project', 'Ongoing advisory support', 'Not sure yet'],
  enterprise: ['A first conversation', 'A management review', 'An ongoing management mandate', 'Not sure yet'],
  brokerage: ['A confidential conversation', 'A valuation', 'A mandate to sell or buy', 'Not sure yet'],
};
export const CONFIDENTIALITY = ['Fully confidential, my name is not disclosed', 'Name disclosed only after an NDA', 'Not a concern'];
export const SCOPE_BY = {
  advisory: ['Strategy & Corporate Direction', 'Operating Models & Processes', 'Transformation & Restructuring', 'Market Entry & Expansion', 'Business Planning & Feasibility', 'Governance & Risk'],
  enterprise: ['General Business Management', 'Financial Management & Control', 'Executive Management & Reporting', 'Interim Management', 'Operations Oversight', 'People & Organisation'],
  brokerage: ['Seller Representation', 'Buyer Identification', 'Transaction Coordination', 'Business Valuation', 'Due Diligence Support', 'Deal Structuring & Negotiation'],
};
// Wording that changes with the practice (headings, leads, labels)
// v651 · Step 1 is different for each practice: its own heading, its own questions, its own picture and text in the left column.
const ROLES_ADVISORY = ['Owner or founder', 'CEO or managing director', 'CFO or finance lead', 'Board member or chair', 'Other senior role'];
const ROLES_ENTERPRISE = ['Owner or founder', 'Director or general manager', 'Investor or shareholder', 'Family office representative', 'Other senior role'];
const PHOTO = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=75`;
export const PRACTICE_CONTACT = {
  advisory: {
    sub: 'About you and your company', title: 'Speak to our advisory team',
    lead: 'Tell us who you are and what you run. A partner reads every advisory enquiry before we reply.',
    company: 'Company name', website: true,
    fields: [
      { id: 'role', label: 'Your role', options: ROLES_ADVISORY, req: true },
      { id: 'employees', label: 'Number of employees', options: EMPLOYEES },
    ],
  },
  enterprise: {
    sub: 'About you and the business to be managed', title: 'Tell us about the business',
    lead: 'We take on management mandates. Start with who you are and the sector the business operates in.',
    company: 'Business name', website: true,
    fields: [
      { id: 'role', label: 'Your role', options: ROLES_ENTERPRISE, req: true },
      { id: 'industry', label: 'Sector of the business', options: INDUSTRIES, req: true },
    ],
  },
  brokerage: {
    sub: 'About you and the business', title: 'Start a confidential conversation',
    lead: 'Sales, acquisitions and partnerships are handled in confidence. Tell us your position first; the business can be named later.',
    company: 'Business name or code name', website: false,
    capacity: { label: 'I am enquiring as', options: ['A seller', 'A buyer', 'An investor or partner', 'An adviser acting for a client'] },
    fields: [
      { id: 'industry', label: 'Sector of the business', options: INDUSTRIES },
    ],
  },
};

// Left column of the Contact menu: picture, short text and a link, per practice (same anatomy as Infrastructure).
export const PRACTICE_RAIL = {
  none: { image: PHOTO('photo-1531297484001-80022131f5a1'), lead: 'A structured first assessment of your business. Choose a practice to begin.', cta: 'Explore Our Practices', to: '/overview' },
  advisory: { image: PHOTO('photo-1460472178825-e5240623afd5'), lead: 'Strategy, operating models and restructuring, led by a partner from the first conversation.', cta: 'Explore Advisory', to: '/overview/our-practices/management-consultancy' },
  enterprise: { image: PHOTO('photo-1603195827187-459ab02554a0'), lead: 'Running, controlling and reporting on your business, with NK&CO accountable for the result.', cta: 'Explore Enterprise Management', to: '/overview/our-practices/enterprise-management' },
  brokerage: { image: PHOTO('photo-1589936009537-bda4341d578f'), lead: 'Selling, buying and partnering, handled in confidence from first introduction to completion.', cta: 'Explore Brokerage', to: '/overview/our-practices/business-brokerage' },
};

// v653 · Step 3 is a bespoke profile for each practice (not the same list three times).
//   Advisory: a business health check (rate six areas).  Enterprise: a management coverage matrix (what NK&CO oversees or runs, per function).
//   Brokerage: confidentiality and approach (who may know, how the business is introduced, who we approach).
export const HEALTH_AREAS = FOCUS_BY.advisory;
export const HEALTH_SCALE = ['1', '2', '3', '4', '5'];
export const COVERAGE_FUNCTIONS = FOCUS_BY.enterprise;
export const COVERAGE_LEVELS = ['Not needed', 'Oversee', 'Run for us'];
export const WHO_KNOWS = ['Owner only', 'Partners or shareholders', 'Senior management', 'Legal and accounting advisers'];
export const DISCLOSURE = ['Anonymous summary first', 'Name after a signed NDA', 'Openly, from the start'];
export const APPROACH_BY = {
  sell: ['Trade buyers in the same sector', 'Financial investors and funds', 'Individual buyers', 'Management or employees', 'Not competitors'],
  value: ['Trade buyers in the same sector', 'Financial investors and funds', 'Individual buyers', 'Management or employees', 'Not competitors'],
  acquire: ['Owners open to a sale', 'Shareholders seeking an exit', 'Businesses under pressure', 'Family-owned businesses', 'Not listed companies'],
  invest: ['Owners seeking capital', 'Operators seeking a partner', 'Funds and family offices', 'Founders planning succession', 'Not competitors'],
};
export const PRACTICE_PROFILE = {
  advisory: { title: 'Business health check', lead: 'Rate each area as it stands today.', legend: 'How strong is each area today?', hint: '1 weak, 5 strong', right: 'What is getting in the way?' },
  enterprise: { title: 'Management coverage', lead: 'Tell us what NK&CO should oversee and what it should run.', legend: 'What should NK&CO do in each function?', hint: '', right: 'Where does the business need stronger management?' },
  brokerage: { title: 'Confidentiality and approach', lead: 'Tell us how discreet the process must be and who we should approach.', legend: 'Who may know about this?', hint: '', right: 'What matters most?' },
};

export const PRACTICE_TEXT = {
  advisory: {
    stage: ['About your business', 'Select the situation that best describes where you are. We then ask only what is relevant to it.', 'Your situation'],
    challenges: ['Challenges and priorities', 'Tell us what is getting in the way today.'],
    objectives: ['Objectives and desired outcomes', 'Tell us what you want the engagement to deliver and when.'],
    scope: ['Scope of engagement', 'Tell us where NK&CO could advise and how you would like to start.', 'Advisory areas of interest'],
    focus: 'Areas to strengthen', lead: 'Current leadership',
  },
  enterprise: {
    stage: ['About the business to be managed', 'Select what you need NK&CO to take on. We then ask only what is relevant to it.', 'Your requirement'],
    challenges: ['Management needs', 'Tell us where the business needs stronger management today.'],
    objectives: ['The mandate and outcomes', 'Tell us what the management mandate should deliver and when it should start.'],
    scope: ['Scope of the mandate', 'Tell us which management functions NK&CO should cover and how you would like to start.', 'Management functions of interest'],
    focus: 'Functions to be managed', lead: 'Current management set-up',
  },
  brokerage: {
    stage: ['About the transaction', 'Select the transaction you have in mind. We then ask only what is relevant to it.', 'Your transaction'],
    challenges: ['Concerns and priorities', 'Tell us what matters most to you in this transaction.'],
    objectives: ['Deal objectives and timing', 'Tell us what you want from the transaction and when.'],
    scope: ['Scope of brokerage', 'Tell us which brokerage services you need and how you would like to start.', 'Brokerage services of interest'],
    focus: '', lead: '',
  },
};
export const ENGAGEMENT = ['A first conversation', 'A defined project', 'Ongoing support', 'Not sure yet'];

// v654 · richer steps: one-line notes under each situation, what-we-ask panel, what-happens-next panel, rail line per step.
export const STAGE_NOTE = {
  idea: 'Test the concept, the market and the model before you commit.',
  launch: 'Plan, structure and sequence the opening.',
  established: 'Sharpen strategy, performance and direction.',
  restructure: 'Reset the structure, costs and operating model.',
  expand: 'Enter and win a new market with a clear plan.',
  em_launch: 'A management team to build and run it from the start.',
  em_turnaround: 'Stabilise cash, people and operations, then rebuild.',
  em_expand: 'Management on the ground for a new site or market.',
  em_run: 'Day-to-day management carried out on your behalf.',
  em_interim: 'A senior executive in post while you plan the next step.',
  em_finance: 'Budgeting, control and reporting you can rely on.',
  sell: 'A confidential process to find the right buyer.',
  value: 'An independent view of value before any decision.',
  acquire: 'Identify, approach and evaluate suitable targets.',
  invest: 'Match investors and partners to the right business.',
};
export const STAGE_EMPTY = {
  advisory: ['What we will ask next', ['The business, where it operates and how it is owned', 'Size, funding and the current position', 'What you would like to change or achieve']],
  enterprise: ['What we will ask next', ['The business to be managed and where it operates', 'Size, ownership and the current management set-up', 'What the mandate should cover and when it starts']],
  brokerage: ['What we will ask next', ['The business or the target profile, kept anonymous if you prefer', 'Size, sector and the outline of the transaction', 'Your objective and how discreet the process must be']],
};
export const NEXT_STEPS = {
  advisory: ['What happens next', [['A partner reads your answers', 'Your enquiry is reviewed by a senior member of the advisory team.'], ['We contact you', 'By your preferred method, to confirm the scope and any questions.'], ['We agree the next step', 'A first conversation, a defined project or ongoing advisory support.']]],
  enterprise: ['What happens next', [['A partner reads your answers', 'Your enquiry is reviewed by a senior member of the management team.'], ['We contact you', 'By your preferred method, to confirm the scope and any questions.'], ['We agree the next step', 'A management review or an ongoing management mandate.']]],
  brokerage: ['What happens next', [['A partner reads your answers', 'Your enquiry is reviewed by a senior member of the brokerage team.'], ['We contact you', 'By your preferred method, in line with the confidentiality you chose.'], ['We agree the next step', 'A confidential conversation, a valuation or a mandate.']]],
};
export const RAIL_STEP = {
  advisory: [null, 'Your situation decides which questions follow, so we ask only what is relevant.', 'A short health check shows a partner where to focus before the first call.', 'Tell us the outcome you want and the timing, so the first call starts from there.', 'Choose the areas of interest and how you would like to begin.', 'Check your answers. You can return to any step to change them.'],
  enterprise: [null, 'Tell us what you need run, and the questions that follow stay specific to it.', 'Show us which functions NK&CO should oversee and which it should run for you.', 'Set out the mandate, the outcomes it should deliver and when it should start.', 'Choose the management functions to cover and how you would like to begin.', 'Check your answers. You can return to any step to change them.'],
  brokerage: [null, 'Describe the transaction. The business can stay unnamed until you are ready.', 'Say who may know, how the business is introduced and who we may approach.', 'Set out your objectives, the timing and how confidential the process must be.', 'Choose the services you need and how you would like to begin.', 'Check your answers. You can return to any step to change them.'],
};

// v655 · The gateway shown before the form (same anatomy as the Capabilities menu: serif column heading, hairline rows that open, teal link at the foot).
//   Each row is a situation. Opening it shows one line and a link that enters the form with the practice and that situation already chosen.
//   id '' means "practice only": the form opens at the first question and the situation is chosen later.
export const GATE = [
  { id: 'advisory', cta: 'Start with Advisory', rows: [
    { id: 'idea', title: 'New Business Idea' },
    { id: 'launch', title: 'Business Launch' },
    { id: 'established', title: 'Established Business' },
    { id: 'restructure', title: 'Restructuring & Improvement' },
    { id: 'expand', title: 'Market Expansion' },
    { id: '', title: 'Not Sure Where to Start', note: 'Speak to a partner first. We will shape the questions with you.' },
  ] },
  { id: 'enterprise', cta: 'Start with Enterprise Management', rows: [
    { id: 'em_launch', title: 'Launch & Manage' },
    { id: 'em_turnaround', title: 'Turnaround & Stabilisation' },
    { id: 'em_expand', title: 'New Operation on the Ground' },
    { id: 'em_run', title: 'Outsourced Management' },
    { id: 'em_interim', title: 'Interim Executive Cover' },
    { id: 'em_finance', title: 'Financial Management & Control' },
  ] },
  { id: 'brokerage', cta: 'Start with Brokerage', rows: [
    { id: 'sell', title: 'Sell a Business' },
    { id: 'value', title: 'Business Valuation' },
    { id: 'acquire', title: 'Acquire a Business' },
    { id: 'invest', title: 'Investment & Partnership' },
    { id: '', title: 'A Confidential First Conversation', note: 'Tell us your position only. The business can stay unnamed until you are ready.' },
    { id: '', title: 'Not Sure Where to Start', note: 'Speak to a partner first. We will shape the questions with you.' },
  ] },
];
