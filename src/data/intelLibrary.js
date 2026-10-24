// NK&CO Intelligence: the one structure behind the Intelligence menu, hub pages and every library page.
//   category (6, shown as 3 headed groups in the menu)  ->  collection (3 per category)  ->  series / course / library (PRIV item)  ->  piece
// Collections list PRIV item labels (src/data/privileges.js + src/data/intelOwn.js). The Privileges section now lives here:
// /privileges/... redirects to the matching Intelligence page. Edit this file to move things around.
import { PRIV, PRIV_ALL, PRIV_ROUTE, privArt } from './privileges';

export const slug = (s = '') => String(s).toLowerCase().trim().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const DUBAI_CASE = ['A Market Built on Property', 'Who Buys and Why', 'How Real Estate Firms Earn', 'Rules That Protect Founders', 'Your First Twelve Months', 'Market Cycles and Timing'];

export const INTEL = [
  {
    title: 'Research & Insights', head: 'Research & Data', motif: 'newspaper',
    description: 'Market research, sector reports, executive briefings and regulatory notes on the UAE and GCC. Information only, not advice.',
    viewAll: 'View all Research & Insights',
    collections: [
      { label: 'The Dubai Real Estate Case', own: true, children: DUBAI_CASE, blurb: 'Market commentary on Dubai property for business owners.', lead: 'Market commentary on Dubai property. Information only, not advice.' },
      { label: 'Market Reports & Outlooks', blurb: 'Market reports, sector outlooks, sector reports and whitepapers.', lead: 'Periodic reports on the main markets, forward views by sector, and long-form whitepapers on the forces reshaping business.', children: ['Market Reports', 'Sector Outlooks', 'Sector Reports', 'Thematic Whitepapers'] },
      { label: 'Briefings & Updates', blurb: 'Short notes for executives, plus data notes and regulatory updates.', lead: 'Decision-ready briefings for CEOs and boards, short notes built on one set of numbers, and plain-language updates when the rules change.', children: ['Executive Briefings', 'Data Notes', 'Regulatory Updates'] },
    ],
  },
  {
    title: 'Data & Publications', head: 'Research & Data', motif: 'chart',
    description: 'Market analytics, deal and real asset views, the NK&CO Quarterly, annual outlooks, handbooks and special editions.',
    viewAll: 'View all Data & Publications',
    collections: [
      { label: 'Data & Analytics', blurb: 'Market analytics, deal intelligence and real asset views.', lead: 'Guides to reading the numbers behind the market: pricing and volume, transactions and comparables, and one-page views of each real asset class.', children: ['Market Analytics', 'Deal Intelligence', 'Real Asset Dashboards'] },
      { label: 'Periodicals', blurb: 'The NK&CO Quarterly, annual outlooks and special editions.', lead: 'Our regular publications: a quarterly review, outlooks for the year ahead and special editions written for one audience.', children: ['NK&CO Quarterly', 'Annual Outlook', 'Special Editions'] },
      { label: 'Handbooks & Reference', blurb: 'Annual handbooks, regulation guides and the glossary.', lead: 'Reference material to keep on the desk: yearly handbooks, plain-English regulation guides and the terms of the market defined.', children: ['Annual Handbooks', 'Regulation Guides', 'Glossary'] },
    ],
  },
  {
    title: 'Resources & Learning', head: 'Resources & Events', motif: 'cap',
    description: 'Guides, playbooks, tools, templates, masterclasses and video from NK&CO partners, written to be used.',
    viewAll: 'View all Resources & Learning',
    collections: [
      { label: 'Guides & Playbooks', blurb: 'Guides for buyers, founders, investors and operators.', lead: 'Step-by-step reading with checklists: buyer and investor guides, founder and operator playbooks, sector guides and compliance routines.', children: ['Buyer and Investor Guides', 'Founder Playbooks', 'Sector Guides', 'Single-Sector Guides', 'Operator Playbooks', 'Compliance Playbooks'] },
      { label: 'Tools & Templates', blurb: 'Calculators, checklists, templates and toolkits.', lead: 'Working files you can open and adjust: calculators, one-page checklists, editable templates and toolkits for each sector.', children: ['Calculators', 'Checklists', 'Templates', 'Sector Toolkits', 'Operator Toolkits', 'Finance Toolkits'] },
      { label: 'Masterclasses & Video', blurb: 'Video courses, explainers, webinars and conversations.', lead: 'Learn at your own pace: masterclasses on property, setting up, capital, governance and the sectors, with short explainers and full webinars.', children: ['Dubai Real Estate Foundations', 'Setting Up in the UAE', 'Capital and Investing', 'Leadership and Governance', 'Banking, Insurance and Risk', 'Technology and AI for Leaders', 'Energy, Mobility and Sustainability', 'Hospitality and Retail Operations', 'Healthcare and Education Operations', 'Construction and Project Delivery', 'Sales, Marketing and Growth', 'Explainer Videos', 'Webinar Library', 'Fireside Conversations', 'Sector Briefings', 'Operator Briefings', 'Money and Markets Explained'] },
    ],
  },
  {
    title: 'Events & Programmes', head: 'Resources & Events', motif: 'calendar',
    description: 'Meetings, events, programmes, cohorts and members\u2019 access: sessions run by NK&CO partners, with places by request.',
    viewAll: 'View all Events & Programmes',
    collections: [
      { label: 'Meetings & Events', blurb: 'Breakfast briefings, summits, workshops, site visits and online sessions.', lead: 'Sessions run by NK&CO partners, from a one-hour breakfast to a full-day summit, with places by request.', children: ['Breakfast Briefings', 'Conferences and Summits', 'Workshops and Clinics', 'Site Visits and Tours', 'Virtual Sessions'] },
      { label: 'Programmes & Cohorts', blurb: 'Programmes for founders, executives and the next generation.', lead: 'Small cohorts with a clear curriculum and a named partner, built around real cases.', children: ['Founder Programme', 'Executive Learning', 'Next Generation'] },
      { label: 'Member Access', blurb: 'Private briefings, roundtables, circles and priority access.', lead: 'Sessions and services reserved for clients and members of NK&CO, by invitation.', children: ['Private Briefings', 'Closed Roundtables', 'Priority Access', 'Sector Circles', 'Leadership Circles'] },
    ],
  },
  {
    title: 'Privileges Desk', head: 'Privileges & Podcast', motif: 'scales',
    description: 'Research, frameworks, toolkits, advanced learning and services for committees, boards and investment teams.',
    viewAll: 'View the Privileges Desk',
    collections: [
      { label: 'Research & Frameworks', blurb: 'In-depth research, frameworks and toolkits for committees.', lead: 'In-depth research for allocators and committees, with the reference frameworks and templates investment teams use.', children: ['Allocator Research', 'Reference Frameworks', 'Committee Toolkits'] },
      { label: 'Advanced Learning', blurb: 'Committee briefings and advanced masterclasses.', lead: 'Short and long briefings for investment teams, and advanced lessons on private markets and fiduciary governance.', children: ['Committee Briefings', 'Advanced Private Markets and Alternatives', 'Advanced Fiduciary Governance and Stewardship'] },
      { label: 'Services & Conversations', blurb: 'Dedicated member services and allocator conversations.', lead: 'Dedicated support for members and audio conversations on how institutions build and govern portfolios.', children: ['Member Services', 'Allocator Conversations Episodes'] },
    ],
  },
  {
    title: 'Podcasts & Briefing', head: 'Privileges & Podcast', motif: 'mic', briefingHref: '/intelligence/nk-co-briefing',
    description: 'The NK&CO Briefing: Dubai, the UAE and the GCC in conversation, across eight audio series.',
    viewAll: 'Enter the Briefing',
    collections: [
      { label: 'Dubai & Gulf Series', blurb: 'The city, its capital and its real assets.', lead: 'The flagship series: the state of the city, where capital is moving and how property, infrastructure and logistics look from the inside.', children: ['Dubai Briefing Episodes', 'Capital Conversations Episodes', 'Real Assets Room Episodes'] },
      { label: 'Founders & Operators', blurb: 'Owning families and the people who run businesses.', lead: 'How principals build, govern and pass on what they own, and how hotels, shops, clinics, schools and building sites are run.', children: ['Founders & Family Offices Episodes', 'Operators Desk Episodes'] },
      { label: 'Sector & Policy Desks', blurb: 'Sector by sector, and the rules behind them.', lead: 'Banking, insurance, technology and energy one sector at a time, with the regulators and rule changes that matter.', children: ['Sector Desk Episodes', 'Policy Desk Episodes'] },
    ],
  },
];

// ---- lookups -------------------------------------------------------------------------------------------------------
const SERIES = {}; // series label -> { cat, item }
PRIV.categories.forEach((cat) => cat.items.forEach((item) => { SERIES[item.label] = { cat, item }; }));
export const HOME = {}; // series slug -> { cat, coll, label }
INTEL.forEach((c) => {
  c.slug = slug(c.title);
  c.collections.forEach((k) => {
    k.slug = slug(k.label);
    k.cat = c;
    if (!k.own) k.children.forEach((l) => {
      if (!SERIES[l]) { if (typeof console !== 'undefined') console.warn('[intel] missing series', l); return; }
      HOME[slug(l)] = { cat: c, coll: k, label: l };
    });
  });
});
export const COLLECTION_HOME = {}; // collection slug -> category (for old links)
INTEL.forEach((c) => c.collections.forEach((k) => { COLLECTION_HOME[k.slug] = c; }));

export const findCat = (s) => INTEL.find((c) => c.slug === s) || null;
export const findColl = (c, s) => (c ? c.collections.find((k) => k.slug === s) || null : null);
export const seriesOf = (label) => SERIES[label] || null;

// record for a series page (item level) or piece page, as PrivilegePage expects
export function intelRecord(seriesSlug, pieceSlug) {
  const h = HOME[seriesSlug];
  if (!h) return null;
  const { cat, item } = SERIES[h.label];
  const base = `privileges/${slug(cat.title)}/${slug(item.label)}`;
  if (!pieceSlug) return { level: 'item', cat, item, path: base, home: h };
  const piece = (item.list || []).find((p) => slug(p.title) === pieceSlug);
  return piece ? { level: 'piece', cat, item, piece, path: piece.path, home: h } : null;
}

// Privileges paths now resolve to Intelligence pages.
PRIV_ROUTE.fn = (rec) => {
  const parts = rec.path.split('/'); // privileges, cat, item, piece
  if (parts.length < 3) return '/intelligence';
  const h = HOME[parts[2]];
  if (!h) return '/intelligence';
  return `/intelligence/${h.cat.slug}/${h.coll.slug}/${parts[2]}${parts[3] ? '/' + parts[3] : ''}`;
};
// Old /privileges, /privileges/<format>, /privileges/<format>/<series> and /privileges/<format>/<series>/<piece> -> the matching Intelligence page.
// A format with no series in the URL goes to the desk that holds its first series.
export const redirectFromPrivileges = (category, item, child) => {
  if (item) return PRIV_ROUTE.fn({ path: ['privileges', category, item, child].filter(Boolean).join('/') });
  const cat = category ? PRIV.categories.find((c) => slug(c.title) === category) : null;
  const h = cat && cat.items[0] ? HOME[slug(cat.items[0].label)] : null;
  return h ? `/intelligence/${h.cat.slug}` : '/intelligence';
};

// piece paths for the sitemap
export const INTEL_PIECE_PATHS = () => PRIV_ALL.map((r) => PRIV_ROUTE.fn(r)).filter((p) => p !== '/intelligence');

export const artForSeries = (label, piece) => { const s = SERIES[label]; return s ? privArt(s.cat.title, s.item.label, piece) : null; };
export const countPieces = (labels) => labels.reduce((n, l) => n + (SERIES[l] ? SERIES[l].item.pieces.length : 0), 0);

// ---- menu data (consumed by src/mock.js and the mega menu) -------------------------------------------------------------
export const INTEL_COLUMNS = INTEL.map((c) => ({
  title: c.title,
  description: c.description,
  items: c.collections.map((k) => ({ label: k.label, children: k.children })),
  viewAll: c.viewAll,
  ...(c.briefingHref ? { briefingHref: c.briefingHref } : {}),
}));
export const INTEL_ITEM_DESC = {};
export const INTEL_CHILD_DESC = {};
export const INTEL_LEAF_LEAD = {};
export const INTEL_ITEM_LEAD = {};
export const INTEL_COL_LEAD = {};
export const INTEL_FEATURED = {};
INTEL.forEach((c) => {
  INTEL_COL_LEAD[`intelligence/${c.slug}`] = c.description;
  INTEL_FEATURED[c.title] = { _: [`${c.title}: ${c.collections.map((k) => k.label).join(', ')}`, c.description] };
  c.collections.forEach((k) => {
    INTEL_ITEM_DESC[`intelligence|${c.title}|${k.label}`] = k.blurb;
    INTEL_ITEM_LEAD[`intelligence/${c.slug}/${k.slug}`] = k.lead;
    INTEL_FEATURED[c.title][k.label] = [`${k.label}: ${k.blurb.replace(/\.$/, '')}`, k.lead];
    if (!k.own) k.children.forEach((l) => {
      const s = SERIES[l]; if (!s) return;
      INTEL_CHILD_DESC[l] = s.item.blurb;
      INTEL_LEAF_LEAD[`intelligence/${c.slug}/${k.slug}/${slug(l)}`] = s.item.lead;
    });
  });
});
