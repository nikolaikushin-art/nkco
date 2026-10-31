// Data for the redesigned home sections (v571).
// Everything here is drawn from the existing institutional copy (data/institutional*.js); nothing new is claimed.
import { PROFILE, PRACTICES, POSITIONING_COPY, SEPARATION, SCOPE_COPY, CONTROL_REGISTER, LICENCE_REGISTER, APPROACH_COPY, GOVERNANCE } from './institutional';
import { FINAL_PRINCIPLE, DELIVERABLES } from './institutional2';

const LIB = (id, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;
const P = '/overview/our-practices/';

/* 1 · Profile ---------------------------------------------------------------------------------------------- */
export const HOME_PROFILE = {
  label: PROFILE.eyebrow,
  title: PROFILE.title,
  lede: PROFILE.paragraphs[0],
  body: 'The firm advises business owners, shareholders and executive leadership on the strategic, organisational and commercial considerations that shape an enterprise\u2019s direction, performance and future ownership. Its work is organised in three practices, which may be commissioned independently or in combination.',
  to: '/overview/the-firm/corporate-profile',
  linkLabel: 'Read the corporate profile',
  banner: {
    image: LIB('photo-1496307653780-42ee777d4833', 2000),
    alt: 'Commercial office district with modern high-rise buildings',
    caption: 'Independent advice, management and transaction services for owners, shareholders and private enterprises.',
    facts: [['3', 'practices, commissioned independently or in combination'], ['5', 'stages in the method, applied in proportion'], ['12', 'terms recorded before an engagement is accepted'], ['11', 'activity areas confirmed separately before they are offered']],
  },
  chainLead: 'Each engagement is read in the context of the enterprise as a whole.',
  chain: [
    { t: 'Strategic intent', d: 'Where the owners want the enterprise to go.' },
    { t: 'Management capability', d: 'The people, authority and structures that carry it.' },
    { t: 'Operational execution', d: 'How priorities become day-to-day work.' },
    { t: 'Commercial outcomes', d: 'Performance, value and future ownership.' },
  ],
};

/* 2 · Practices -------------------------------------------------------------------------------------------- */
const PICK = ['Primary purpose', 'Principal output', 'Typical engagement', 'Authority to act', 'Client decisions'];
const rowFor = (label, col) => SEPARATION.rows.find((r) => r[0] === label)[col + 1];

const ENGAGED = [
  'Diagnostic, advisory project, strategy assignment or recurring advisory retainer.',
  'Functional-management mandate, implementation assignment or continuing management engagement, subject to confirmed licensing scope.',
  'A defined intermediary mandate with transparent remuneration terms.',
];

const MEDIA = [
  { image: LIB('photo-1460472178825-e5240623afd5'), alt: 'Commercial office towers in a business district' },
  { image: LIB('photo-1603195827187-459ab02554a0'), alt: 'Colleagues reviewing a business plan together' },
  { image: LIB('photo-1589936009537-bda4341d578f'), alt: 'Glass facade of a commercial building' },
];

const SERVICES = [
  [['Strategy & Corporate Direction', 'management-consultancy/strategy-and-corporate-direction'], ['Operating Models & Processes', 'management-consultancy/operating-models-and-processes'], ['Transformation & Restructuring', 'management-consultancy/transformation-and-restructuring']],
  [['General Business Management', 'enterprise-management/general-business-management'], ['Financial Management & Control', 'enterprise-management/financial-management-and-control'], ['Executive Management & Reporting', 'enterprise-management/executive-management-and-owner-reporting']],
  [['Seller Representation', 'business-brokerage/seller-representation'], ['Buyer Identification', 'business-brokerage/buyer-identification'], ['Transaction Coordination', 'business-brokerage/transaction-coordination']],
];

export const HOME_PRACTICES = {
  title: POSITIONING_COPY.title,
  intro: POSITIONING_COPY.paragraphs[1],
  close: SEPARATION.close,
  items: PRACTICES.map((p, i) => ({
    id: p.id,
    name: p.name,
    lines: p.name.split(' & ').length > 1 ? [`${p.name.split(' & ')[0]} &`, p.name.split(' & ')[1]] : p.name.split(' '),
    to: P + p.id,
    lede: p.paragraphs[0],
    ...MEDIA[i],
    facts: [...PICK.map((l) => [l, rowFor(l, i)]), ['Engaged as', ENGAGED[i]]],
    services: SERVICES[i].map(([label, path]) => [label, P + path]),
  })),
};

/* 3 · Scope and licence boundaries ------------------------------------------------------------------------- */
export const HOME_BOUNDARIES = {
  title: SCOPE_COPY.title,
  intro: SCOPE_COPY.paragraphs[1],
  basisLabel: 'Proposed licensed basis',
  basis: LICENCE_REGISTER.activities.map(([practice, code, wording]) => ({ practice, code, wording })),
  basisNote: LICENCE_REGISTER.intro,
  registerLabel: 'Confirmed separately before it is offered',
  register: CONTROL_REGISTER.items,
  groups: [
    { t: 'Professional services', k: ['Legal services', 'Accounting, audit and tax'] },
    { t: 'Finance and ownership', k: ['Financial services', 'Business ownership transactions', 'Client funds and payment activity'] },
    { t: 'Property, people and corporate', k: ['Real estate', 'Recruitment and employment', 'Corporate and immigration services'] },
    { t: 'Operations and appointments', k: ['Sector-specific operations', 'Statutory appointments', 'Technical and specialist delivery'] },
  ],
  registerNote: CONTROL_REGISTER.close,
};

/* 4 · Method ----------------------------------------------------------------------------------------------- */
export const HOME_METHOD = {
  title: APPROACH_COPY.title,
  intro: APPROACH_COPY.intro[0],
  stages: APPROACH_COPY.stages.map((st, i) => ({ ...st, out: ['Business diagnostic report', 'Strategic assessment and recommendation paper', 'Business plan and operating-model documentation', 'Implementation plan and governance structure', 'Periodic progress or review report'][i] })),
  image: LIB('photo-1462396240927-52058a6a84ec', 1600),
  imageAlt: 'Meeting room set for a management review',
  close: APPROACH_COPY.close,
  to: '/overview/how-we-work/our-methodology',
  linkLabel: 'Read the methodology',
};

/* 5 · Engagement letter ------------------------------------------------------------------------------------ */
export const HOME_ENGAGEMENT = {
  title: 'One framework across all three practices.',
  intro: 'Before accepting an engagement, NK&CO documents the terms below. Fees follow the responsibility undertaken: each proposal separates included services, exclusions, deliverables, fees and any contingent remuneration.',
  sheetTitle: 'Engagement letter',
  sheetNote: 'Recorded before acceptance',
  clauses: GOVERNANCE.items,
  deliverablesTitle: 'What an advisory engagement can deliver',
  deliverablesNote: DELIVERABLES.close,
  deliverables: DELIVERABLES.items,
  promise: 'NK&CO does not promise a sale, acquisition, funding outcome, growth result or financial return that depends on factors outside its control.',
};

/* 5b · Intelligence ----------------------------------------------------------------------------------------- */
export const HOME_PERSPECTIVES = {
  title: 'Perspectives from the firm.',
  intro: 'Briefings and conversations on entering, running and selling a business in the UAE.',
  feature: { kind: 'Podcast', series: 'NK&CO Perspectives', title: 'Entering the UAE in 90 days: the operator\u2019s blueprint', meta: '42 min', to: '/intelligence/nk-co-briefing', image: LIB('photo-1554469384-e58fac16e23a', 1400), alt: 'Advisers reviewing a plan at a table', cta: 'Listen and read the transcript' },
  side: [
    { kind: 'Publication', title: 'NK&CO Briefing', text: 'The firm\u2019s regular briefing for owners and executives.', to: '/intelligence/nk-co-briefing', image: LIB('photo-1554224155-1696413565d3', 900), alt: 'Business owner reviewing a term sheet' },
    { kind: 'Library', title: 'All Intelligence', text: 'Podcasts, briefings and research across every practice.', to: '/intelligence', image: LIB('photo-1556761175-b413da4baf72', 900), alt: 'Colleagues in a commercial office' },
  ],
};

/* 6 · Governing standard ----------------------------------------------------------------------------------- */
export const HOME_STANDARD = {
  label: FINAL_PRINCIPLE.eyebrow,
  quote: FINAL_PRINCIPLE.quote,
  body: FINAL_PRINCIPLE.body,
  image: LIB('photo-1589936009537-bda4341d578f', 2000),
  principles: [
    { t: 'Analytical rigour', d: 'Recommendations are distinguished from established facts, and limitations are stated.' },
    { t: 'Commercial objectivity', d: 'Advice follows the client\u2019s stated objectives and the assumptions behind the assignment.' },
    { t: 'Clarity of responsibility', d: 'Deliverables, reporting lines and decision rights are agreed before work starts.' },
    { t: 'Confidentiality', d: 'Confidentiality arrangements are recorded in every mandate.' },
    { t: 'Disciplined execution', d: 'Work proceeds against agreed milestones, reporting and review.' },
  ],
};

/* 7 · Contact ---------------------------------------------------------------------------------------------- */
export const HOME_CONTACT = {
  title: 'Begin with a defined requirement.',
  lede: 'Engagements are established on the basis of a defined commercial requirement, an agreed scope of work and a clear understanding of the responsibilities of each party.',
  steps: [
    { t: 'A defined requirement', d: 'What the business needs to decide, change or transfer.' },
    { t: 'An agreed scope', d: 'Services, deliverables and exclusions, set against the licensed basis.' },
    { t: 'Clear responsibilities', d: 'What each party decides, delivers and retains, recorded in the mandate.' },
  ],
  image: LIB('photo-1460472178825-e5240623afd5', 1600),
  alt: 'Commercial office towers in a business district',
  email: 'info@nkco.ae',
  button: 'Contact NK&CO',
  href: 'mailto:info@nkco.ae?subject=NK%26CO%20Enquiry',
};
