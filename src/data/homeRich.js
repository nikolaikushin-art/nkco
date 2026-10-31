// v573 · Data for the rich home sections.
// Nothing is invented here: counts are computed from the site's own menus (mock.js), and all copy comes from data/institutional*.js
// and data/homeData.js. Pictures are the photo-library ids already used by the hero and the v572 sections.
import { NAV_ITEMS_ALL, slugify } from '../mock';
import { SEPARATION, PRACTICES, APPROACH_COPY, GOVERNANCE, LICENCE_REGISTER, CONTROL_REGISTER, PROFILE, STRAPLINE, POSITIONING_COPY } from './institutional';
import { DELIVERABLES, FINAL_PRINCIPLE } from './institutional2';
import { HOME_PRACTICES, HOME_BOUNDARIES, HOME_METHOD, HOME_ENGAGEMENT, HOME_STANDARD, HOME_CONTACT, HOME_PROFILE } from './homeData';

export const LIB = (id, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export { SEPARATION, PRACTICES, APPROACH_COPY, GOVERNANCE, LICENCE_REGISTER, CONTROL_REGISTER, PROFILE, STRAPLINE, POSITIONING_COPY, DELIVERABLES, FINAL_PRINCIPLE };
export { HOME_PRACTICES, HOME_BOUNDARIES, HOME_METHOD, HOME_ENGAGEMENT, HOME_STANDARD, HOME_CONTACT, HOME_PROFILE };

const POOL = ['photo-1496307653780-42ee777d4833', 'photo-1460472178825-e5240623afd5', 'photo-1603195827187-459ab02554a0', 'photo-1589936009537-bda4341d578f', 'photo-1462396240927-52058a6a84ec', 'photo-1554224155-1696413565d3', 'photo-1556761175-b413da4baf72', 'photo-1480714378408-67cf0d13bc1b', 'photo-1666145256133-20d479501baf', 'photo-1486325212027-8081e485255e', 'photo-1531586024505-b040066c2d5b', 'photo-1522202176988-66273c2fd55f', 'photo-1562595410-4859d718375e', 'photo-1511818966892-d7d671e672a2'];
const PHOTO_FOR = { capabilities: 'photo-1603195827187-459ab02554a0', infrastructure: 'photo-1511818966892-d7d671e672a2', opportunities: 'photo-1666145256133-20d479501baf', intelligence: 'photo-1554469384-e58fac16e23a', expertise: 'photo-1480714378408-67cf0d13bc1b', overview: 'photo-1496307653780-42ee777d4833' };

/* ---------- menu-derived facts ---------- */
const nav = (key) => NAV_ITEMS_ALL.find((n) => n.key === key);
const cols = (key) => (nav(key)?.data.columns || []);
const leafCount = (key) => cols(key).reduce((a, c) => a + (c.items || []).reduce((b, i) => b + (i.children || []).length, 0), 0);
// Menu areas kept out of the home and footer previews because the firm's own scope note treats them as separately confirmed
// (recruitment, real estate). They stay in the menus. Edit this list to show or hide more.
const HOLD_BACK = ['Talent & Recruitment', 'Agency & Brokerage', 'Primary & Off-Plan', 'Secondary & Resale', 'Leasing & Lettings', 'Commercial & Retail', 'Holiday Homes', 'Property Management', 'Property Developers', 'Construction Firms', 'Real Estate Academy'];
const shown = (key) => cols(key).filter((c) => !HOLD_BACK.includes(c.title));
const colHref = (key, c) => `/${key}/${slugify(c.title)}`;

const EXPLORE_ORDER = ['capabilities', 'infrastructure', 'opportunities', 'intelligence', 'expertise', 'overview'];
const EXPLORE_TAG = {
  capabilities: 'Advisory and consultancy for planning, organisation, performance and readiness.',
  infrastructure: 'Operations Management System: CRM, workflow and management reporting.',
  opportunities: 'Selling, acquiring and transferring a business through a defined mandate.',
  intelligence: 'Research, data, publications, guides, events and podcasts. Information only.',
  expertise: 'Cross-cutting practice areas applied through the three practices.',
  overview: 'The firm, its practices, its method and its governance.',
};
export const EXPLORE = EXPLORE_ORDER.map((key) => {
  const n = nav(key);
  const c = cols(key);
  return {
    key,
    label: n.label,
    to: n.data.exploreHref || `/${key}`,
    text: EXPLORE_TAG[key],
    image: LIB(PHOTO_FOR[key], 1000),
    featuredTitle: n.data.featured?.title,
    areas: c.length,
    topics: leafCount(key),
    links: shown(key).slice(0, 4).map((x) => [x.title, colHref(key, x)]),
  };
});

export const SITE_TOTALS = {
  sections: EXPLORE.length,
  areas: EXPLORE.reduce((a, e) => a + e.areas, 0),
  topics: EXPLORE.reduce((a, e) => a + e.topics, 0),
};

/* ---------- the OMS feature ---------- */
const infraCols = cols('infrastructure');
export const OMS = {
  title: 'OMS 6.0: management systems for defined mandates.',
  text: 'CRM, workflow and management reporting for enterprises in the UAE. NK&CO coordinates the business requirements; technical build and security are delivered by appointed specialists.',
  to: '/infrastructure/oms',
  all: '/infrastructure',
  modules: [
    ['CRM', 'Contacts, counterparties and pipeline held in one record.'],
    ['Workflow', 'Approvals, tasks and handovers that follow the mandate.'],
    ['Management reporting', 'The few measures owners review each period.'],
  ],
  areas: infraCols.slice(0, 10).map((c) => [c.title, colHref('infrastructure', c)]),
  areaCount: infraCols.length,
  topicCount: leafCount('infrastructure'),
};

/* ---------- spotlight (podcast, flagship, outlook) ---------- */
const pubs = nav('intelligence').data.featuredPublications || [];
export const SPOTLIGHT = [
  { id: 'podcast', kind: 'Podcast', meta: '42 min', title: 'Entering the UAE in 90 days: the operator\u2019s blueprint', text: 'A practical sequence for setting up and starting to trade in the UAE, with the transcript alongside the audio.', to: '/intelligence/nk-co-briefing', image: LIB('photo-1554469384-e58fac16e23a', 1600), cta: 'Listen and read the transcript', player: true, short: 'Entering the UAE in 90 days' },
  ...pubs.slice(0, 3).map((p, i) => ({
    id: `pub-${i}`, kind: p.tag, meta: p.date, title: p.title, text: p.excerpt,
    to: p.href && p.href !== '#' ? p.href : '/intelligence', image: p.image, cta: 'Read the publication', short: p.title.replace(/\s+\u2014\s+/, ': '),
  })),
];

/* ---------- insights grid ---------- */
const INS_KEYS = ['intelligence', 'overview', 'opportunities', 'infrastructure', 'capabilities'];
const seen = new Set();
export const INSIGHTS = INS_KEYS.flatMap((k) => (nav(k).data.supporting || []).map((s) => ({ ...s, section: k })))
  .concat(pubs.map((p) => ({ ...p, section: 'intelligence' })))
  .filter((s) => (seen.has(s.title) ? false : (seen.add(s.title), true)))
  .map((s, i) => ({ tag: s.tag, date: s.date || '', section: nav(s.section).label, title: s.title, image: LIB(POOL[(i * 5 + 3) % POOL.length], 900), to: s.href && s.href !== '#' ? s.href : `/${s.section}` }));

/* ---------- jurisdictional scope: three activity codes ---------- */
export const CODES = LICENCE_REGISTER.activities.map(([practice, code, wording]) => ({ practice, code, wording }));

/* ---------- fee structure line from the engagement intro ---------- */
export const FEE_PARTS = ['Included services', 'Exclusions', 'Deliverables', 'Fees', 'Contingent remuneration'];

/* ---------- sitemap for the footer ---------- */
export const SITEMAP = EXPLORE_ORDER.map((key) => {
  const n = nav(key);
  // v605 · Expertise: every area in its menu is on the hold-back list, so the footer column listed one fallback link and a gap.
  // The Expertise mega menu already shows all ten areas publicly, so its footer column now mirrors the menu (first five + "All expertise (+5)").
  const kept = key === 'expertise' ? cols(key) : shown(key);
  // Fallback (only if a section ever has nothing to list): the menu's own featured practice and the section page.
  const f = n.data.featured;
  const fallback = [];
  if (!kept.length) {
    if (f && f.title && f.ctaHref && f.ctaHref !== '#') fallback.push([f.title, f.ctaHref]);
    if (n.data.exploreHref) fallback.push([n.data.exploreLabel || `All ${n.label.toLowerCase()}`, n.data.exploreHref]);
  }
  return { key, label: n.label, to: n.data.exploreHref || `/${key}`, links: kept.length ? kept.slice(0, 6).map((c) => [c.title, colHref(key, c)]) : fallback, more: Math.max(0, kept.length - 6) };
});
