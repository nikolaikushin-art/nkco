// Main mega menu — institutional layout (v159).
//   Left rail: categories (dark pinstripe)   Main: tabs (items) + title + service rows + action bar
//   Right: curved photo + featured insight   Foot: partner in charge
// All styles live in src/megamenu-d.css under the .nk-md-* classes (no legacy .nk-mr-* rules apply).
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, ChevronRight, ChevronDown, ChevronLeft } from 'lucide-react';
import { leafHref } from './parts';
import { getFeatured } from '../../data/megaFeatured';
import { CHILD_DESCRIPTIONS as RAW_CHILD_DESCRIPTIONS } from '../../data/megaChildDescriptions';
import { cleanMap } from '../../lib/safeCopy';

const CHILD_DESCRIPTIONS = cleanMap(RAW_CHILD_DESCRIPTIONS);
import { getLeafContent } from '../../data/serviceContent';
import { slugify } from '../../mock';
import { leafPhoto, photoStyle } from '../../lib/leafPhoto';
import { relatedPages } from '../../lib/relatedPages';
import { menuKids, MENU_IMAGES, EXPERTISE_CTAS } from '../../data/menuDisplay';

// Row thumbnails: one local set of architectural close-ups, same crop / scale / grayscale everywhere.
// A stable pick per service; the 4-6 rows of one service never repeat. Swap the files in public/brand/thumbs to change them.
const THUMBS = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `${process.env.PUBLIC_URL || ''}/brand/thumbs/arch-${n}.svg`);
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const THUMB_STEP = (() => { let st = 3; while (gcd(st, THUMBS.length) !== 1) st += 1; return st; })();
const hashStr = (str) => { let h = 7; for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0; return h; };
const cardImage = (seedStr, n) => THUMBS[(hashStr(seedStr) + n * THUMB_STEP) % THUMBS.length];

// Large local photos for the featured card (used when the card's own photo cannot load). Replace the files in public/brand/thumbs to change them.
const FEAT_FALLBACKS = [1, 2, 3, 4].map((n) => `${process.env.PUBLIC_URL || ''}/brand/thumbs/feat-${n}.svg`);

// Same hero photo + lead paragraph the destination page (SectionPage) shows, so the preview matches the page it opens.
const PAGE_FALLBACK_IMG = 'https://images.unsplash.com/photo-1607414851776-f2fcc379fb48?auto=format&fit=crop&w=940&q=75';
const pageHeroImage = (data, col) =>
  (data.featured && data.featured.image) ||
  (Array.isArray(data.featuredDeals) && data.featuredDeals[0] && data.featuredDeals[0].image) ||
  (Array.isArray(data.featuredPublications) && data.featuredPublications[0] && data.featuredPublications[0].image) ||
  (col && col.image) ||
  PAGE_FALLBACK_IMG;
const pageLead = (section, col, item, child) =>
  getLeafContent(section, slugify(col.title), slugify(item.label), slugify(child)) ||
  `An in-depth NK&CO perspective on ${child}, set out in the context of NK&CO’s management consultancy and business brokerage practices.`;

const F_TITLE = { fontFamily: "'Cormorant Garamond','EB Garamond',Georgia,serif", fontWeight: 500 };
const F_CAT = { fontFamily: "'Newsreader',Georgia,'Times New Roman',serif", fontWeight: 400 };
const F_SANS = { fontFamily: "'Inter',system-ui,sans-serif", fontWeight: 400 };

// One-line phrase under each menu title (edit the text here)
// Short paragraph under the picture in the left column (Infrastructure only; edit the text here)
const LEADS = {
  infrastructure: 'Integrated CRM, workflow automation and business intelligence \u2014 one operating environment for the whole organisation.',
  expertise: 'Specialist advisory across the full real estate cycle, from agency and off-plan to management.',
};
const TAGLINES = { capabilities: 'Institutional Intelligence in Practice', infrastructure: 'Operations Management System (OMS)', opportunities: 'Business Disposals & Acquisitions', expertise: 'Real Estate Sector Specialisation' };

// v366 · Infrastructure menu as on the previous site: three columns, each with its own call to action, and the OMS picture.
// pick = the categories shown (by title); ctas = the link under each column; image = picture in the left column.
const CX_SETUP = {
  infrastructure: {
    // 6 stages (3 columns x 2 rows) x 3 categories, in journey order: Plan & Design -> ... -> Franchise & Expand. Each category is one dropdown row that opens to its service lines.
    groups: [
      { head: 'Plan & Design', cats: ['Strategy & Feasibility', 'Business Architecture', 'Governance & Risk'], cta: 'Explore Strategy' },
      { head: 'Set Up & Operate', cats: ['Setup & Conceptualisation', 'Establishment & Operations', 'Succession & Legacy'], cta: 'Start Business Setup' },
      { head: 'Grow & Sustain', cats: ['Growth & Capitalisation', 'Sustainability & Expansion', 'Review & Renewal'], cta: 'Begin Sustainability' },
      { head: 'Scale & Partner', cats: ['Multi-Market Expansion', 'Alliances & Joint Ventures', 'Diversification & New Ventures'], cta: 'Scale Your Business' },
      { head: 'Transform & Diversify', cats: ['Enterprise Systems & Automation', 'Transformation & Change', 'Mergers & Acquisitions'], cta: 'Transform the Enterprise' },
      { head: 'Franchise & Expand', cats: ['Franchise Model Design', 'Franchise Launch & Recruitment', 'Master Franchise & Rollout'], cta: 'Start Franchising' },
    ],
    image: `${process.env.PUBLIC_URL || ''}/brand/oms-infrastructure.jpg`,
  },
};

// Expertise picture: smooth vertical colour band (sage - terracotta - gold - sage - terracotta)
const EXPERTISE_BAND = 'linear-gradient(90deg, #7f9d86 0%, #8d9b7c 3%, #c58a68 9%, #cc8d63 17%, #e3ad57 31%, #f0bb55 41%, #e9b857 49%, #b3a96c 56%, #7b9f86 63%, #78a08a 72%, #84a18a 79%, #a8a07c 87%, #c58f6c 94%, #cc916f 100%)';

// v447 · one link style for every call to action in the burger menu (same anatomy as the desktop menu's .nk-cx-go):
// [short line] Label  ->  on hover the line slides away and a line with an arrowhead draws out to the right of the label.
const GoLabel = ({ children }) => (
  <>
    <i aria-hidden="true" />
    <span>{children}</span>
    <b className="nk-md-ar" aria-hidden="true" />
  </>
);

// v447 · Hamburger menu theme. true = dark (same colour as the desktop mega menu, sidebar a shade darker); false = light content area.
const BURGER_DARK = true;

// v455 · Design D shows four service rows under the item title. Raise this number (or set it to Infinity) to list every row.
const BM_MAX_ROWS = 4;

const asItem = (it) => (typeof it === 'string' ? { label: it, children: [] } : it);

// ======================================================================================================
// v452 · ONE SOURCE OF TRUTH for the top navigation AND the hamburger menu.
// buildMenuGroups() decides which headings, rows and calls to action a section has. Both menus call it, so a change here
// (or in the menu data) shows up in both. Edit the tables below, never the two menus separately.
// ======================================================================================================
// Opportunities: one menu column per category; other sections split their categories into 3 groups
const PER = { opportunities: 1, expertise: 1 };
// Column headings shown in the menu. Page links still use the category's own title, so routes do not change.
const HEADS = { capabilities: ['Service Lines', 'Market Needs', 'Sector Expertise'], opportunities: ['Selling a Business', 'Buying a Business', 'Ownership Transitions'] };
// Expertise: only the first 4 items of each category are listed (the pages for the others still exist).
const MAX_ROWS = { expertise: 4 };
// Sections that show only the first N headings (Expertise: 8 = every category before Construction Firms and Real Estate Academy; Opportunities: 3)
const MAX_GROUPS = { opportunities: 3, expertise: 8 };
// Link under each heading; key = the heading. Missing -> "Explore <heading>".
const GROUP_CTAS = {
  capabilities: { 'Service Lines': 'Explore Service Lines', 'Market Needs': 'Review Market Needs', 'Sector Expertise': 'View Sector Expertise' },
  opportunities: { 'Selling a Business': 'Prepare a Sale', 'Buying a Business': 'Pursue an Acquisition', 'Ownership Transitions': 'Plan a Transition' },
  overview: { 'The Firm': 'Read the Firm Profile', 'How We Work': 'Understand Our Approach', 'Governance': 'Review Our Standards' },
};
const STACK_CTAS = { expertise: EXPERTISE_CTAS };

export function buildMenuGroups(key, cols = []) {
  const groups = [];
  const setup = CX_SETUP[key];
  if (setup) {
    setup.groups.forEach((g) => {
      const rows = [];
      g.cats.forEach((t) => {
        const i = cols.findIndex((c) => c.title === t);
        if (i < 0) return;
        const c = cols[i];
        rows.push({ c, i, j: 'cat', it: { label: c.title, cat: true, children: (c.items || []).map(asItem).map((x) => x.label) } });
      });
      if (rows.length) groups.push({ head: g.head, first: rows[0].c, cta: g.cta, rows });
    });
  } else {
    const per = PER[key] || Math.max(1, Math.ceil(cols.length / 3));
    const heads = HEADS[key] || [];
    cols.forEach((c, i) => {
      const g = Math.floor(i / per);
      const grp = (groups[g] = groups[g] || { head: heads[g] || c.title, first: c, rows: [] });
      (c.items || []).map(asItem).slice(0, MAX_ROWS[key] || undefined).forEach((it, j) => grp.rows.push({ c, i, it, j }));
    });
  }
  if (MAX_GROUPS[key] && groups.length > MAX_GROUPS[key]) groups.length = MAX_GROUPS[key];
  groups.forEach((g) => { g.cta = g.cta || (STACK_CTAS[key] && STACK_CTAS[key][g.head]) || (GROUP_CTAS[key] && GROUP_CTAS[key][g.head]) || `Explore ${g.head}`; });
  return groups;
}

// Hamburger view of the same groups: heading + the tabs (category index n, item index j) that belong to it.
const groupsOf = (key, columns) => buildMenuGroups(key, columns).map((g) => {
  const tabs = [];
  const seen = new Set();
  g.rows.forEach((r) => {
    const list = r.it && r.it.cat ? (r.c.items || []).map((_, j) => j) : [r.j];
    list.forEach((j) => { const k = `${r.i}-${j}`; if (!seen.has(k)) { seen.add(k); tabs.push({ n: r.i, j }); } });
  });
  return { head: g.head, idxs: [...new Set(g.rows.map((r) => r.i))], tabs, cta: g.cta, first: g.first };
});

export default function MegaRail({ data, sections = [], onSelectSection, mode = 'top' }) {
  const cols = data.columns || [];
  // opened from the top navigation -> don't repeat the section list on the left, just show this section's categories
  const solo = mode === 'top';
  // Burger mode: the rail is an accordion of the main sections (only the section whose key is stored here is open).
  const [openKey, setOpenKey] = useState(() => (mode === 'burger' ? data.key : null)); // v448: the burger opens with the current section already expanded
  const [ci, setCi] = useState(0);
  const [ii, setIi] = useState(0);
  // false = a category was just picked (show the category card); true = a tab was picked (show the item card)
  const [itemPicked, setItemPicked] = useState(false);
  // Service row picked by a click -> the right column previews that page (like tabs / sidebar items: click first, then open)
  const [hov, setHov] = useState(null);
  // Top-menu accordion: which category is expanded (null = all closed)
  const [openCat, setOpenCat] = useState(null);
  const [openItem, setOpenItem] = useState(null);
  // click once = preview; click the same row again (or "Open the page") = go to the page. Ctrl/Cmd/Shift-click and narrow screens (no right column) open directly.
  const pickRow = (e, c) => {
    if (e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 1180px)').matches) return;
    if (hov === c) return;
    e.preventDefault();
    setHov(c);
  };

  // The rail stays mounted while sections switch, so reset the picked category/item whenever the section changes.
  useEffect(() => {
    setCi(0); setIi(0); setItemPicked(false); setHov(null); setOpenCat(null); setOpenItem(null);
    setOpenKey((k) => (k && k !== data.key ? null : k));
  }, [data.key]);

  // Tabs are one scrollable row; show edge arrows only when some tabs are hidden.
  const tabsRef = useRef(null);
  const [edge, setEdge] = useState({ l: false, r: false });
  const measureTabs = () => {
    const el = tabsRef.current;
    if (!el) return;
    const l = el.scrollLeft > 2;
    const r = el.scrollLeft + el.clientWidth < el.scrollWidth - 2;
    setEdge((e) => (e.l === l && e.r === r ? e : { l, r }));
  };
  useLayoutEffect(() => {
    measureTabs();
    window.addEventListener('resize', measureTabs);
    return () => window.removeEventListener('resize', measureTabs);
  }, [ci, data.key]); // eslint-disable-line
  const nudgeTabs = (dir) => { if (tabsRef.current) tabsRef.current.scrollBy({ left: dir * 220, behavior: 'smooth' }); };

  // Desktop top menu = rich column layout (one column per category + featured panel). Narrow screens keep the accordion.
  const [wide, setWide] = useState(() => typeof window !== 'undefined' && window.matchMedia('(min-width: 1100px)').matches);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1100px)');
    const on = () => setWide(mq.matches);
    on();
    mq.addEventListener ? mq.addEventListener('change', on) : mq.addListener(on);
    return () => { mq.removeEventListener ? mq.removeEventListener('change', on) : mq.removeListener(on); };
  }, []);

  // Panel ends where the hero's dark part ends (just above the light teaser strip).
  const cxRef = useRef(null);
  useLayoutEffect(() => {
    if (!(solo && wide)) return undefined;
    const root = document.documentElement;
    const set = () => {
      const t = document.querySelector('.nk4-teasers');
      const hdr = parseFloat(getComputedStyle(root).getPropertyValue('--nk-header-h')) || 64;
      if (t) {
        const top = t.getBoundingClientRect().top + window.scrollY;
        if (top > hdr + 320) { root.style.setProperty('--cx-h', `${Math.round(top - hdr)}px`); return; }
      }
      root.style.removeProperty('--cx-h');
    };
    set();
    window.addEventListener('resize', set);
    return () => { window.removeEventListener('resize', set); root.style.removeProperty('--cx-h'); };
  }, [solo, wide]);

  // v454 · hamburger: the dark sidebar colour continues up behind the logo / close button, so there is no lighter strip above it (CSS reads --nk-rail-w).
  const railRef = useRef(null);
  useLayoutEffect(() => {
    if (solo) return undefined;
    const root = document.documentElement;
    const set = () => { const r = railRef.current; if (r) root.style.setProperty('--nk-rail-w', `${Math.round(r.getBoundingClientRect().width)}px`); };
    set();
    window.addEventListener('resize', set);
    return () => { window.removeEventListener('resize', set); root.style.removeProperty('--nk-rail-w'); };
  }, [solo]);

  const c0 = (i) => cols[i] || cols[0];
  const col = cols[ci] || cols[0];
  if (!col) return null;
  const items = (col.items || []).map(asItem);
  const item = items[ii] || items[0];
  const children = (item && item.children) || [];
  // v448 · tabs of the selected burger heading: the items of every category in the group (Service Lines = Business Deployment + Enterprise Consulting)
  const curGroup = groupsOf(data.key, cols).find((g) => g.idxs.includes(ci)) || { head: col.title, idxs: [ci], tabs: [], cta: null, first: col };
  const tabItems = curGroup.tabs.map(({ n, j }) => ({ it: asItem(cols[n].items[j]), n, j }));
  const section = data.key;
  // Featured card follows the selection: item -> category -> section default
  const feat =
    (itemPicked && item && getFeatured(section, col.title, item.label)) ||
    getFeatured(section, col.title) ||
    data.featured;
  const featKey = `${section}|${col.title}|${itemPicked && item ? item.label : ''}`;
  const art = feat && feat.art;

  // only a row of the item on screen can be previewed (guards against a stale hover after switching tabs)
  const hovChild = hov && children.includes(hov) ? hov : null;

  const pickCol = (i) => {
    if (i !== ci) {
      setCi(i);
      setIi(0);
      setItemPicked(false);
      setHov(null);
    }
  };

  if (solo && wide) {
    const f = data.featured || feat;
    const setup = CX_SETUP[data.key];
    const groups = buildMenuGroups(data.key, cols);
    // Expertise: two categories are stacked in each column with no call-to-action between them (column 1 = Agency + Commercial, column 2 = Primary + Holiday Homes, column 3 = Secondary + Property Management, column 4 = Leasing + Developers).
    // Numbers are the position of the category in the menu data. Other sections keep one block per grid cell.
    const STACK = { expertise: [[0, 4], [1, 5], [2, 6], [3, 7]] };
    // Expertise: one call-to-action under each of the 8 categories, specific to the category (verb + object, max ~24 characters so it stays on one line in the 4-column grid)
    const stacks = STACK[data.key] ? STACK[data.key].map((ix) => ix.map((n) => groups[n]).filter(Boolean)).filter((st) => st.length) : groups.map((g) => [g]);
    return (
      <div className="nk-cx" data-section={data.key} data-groups={groups.length} ref={cxRef}>
        <aside className="nk-cx-intro">
          <h2 className="nk-cx-h" style={F_TITLE}>{data.title}</h2>
          {(TAGLINES[data.key] || (f && f.title && f.title.split(':')[0].trim())) && <p className="nk-cx-tag">{TAGLINES[data.key] || f.title.split(':')[0].trim()}</p>}
          {data.key === 'expertise' ? <div className="nk-cx-img nk-cx-band" role="img" aria-hidden="true" style={{ backgroundImage: MENU_IMAGES.expertise ? `url("${MENU_IMAGES.expertise}"), ${EXPERTISE_BAND}` : EXPERTISE_BAND, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#b9936a', filter: 'none' }} /> : (f && f.image || MENU_IMAGES[data.key]) && <img className="nk-cx-img" src={(setup && setup.image) || MENU_IMAGES[data.key] || f.image} alt="" loading="lazy" onError={(e) => { const el = e.currentTarget; el.onerror = null; el.src = FEAT_FALLBACKS[hashStr(featKey) % FEAT_FALLBACKS.length]; }} />}
          {LEADS[data.key] && <p className="nk-cx-lead nk-cx-lead--show">{LEADS[data.key]}</p>}
          {data.exploreLabel && (
            <a href={data.exploreHref || '#'} className="nk-cx-go">
              <i aria-hidden="true" />
              <span>{data.exploreLabel}</span>
              <b className="nk-cx-ar" aria-hidden="true" />
            </a>
          )}
        </aside>
        <div className="nk-cx-acc">
          {stacks.map((stack, si) => (
            <div className={STACK[data.key] ? 'nk-cx-stack' : 'nk-cx-stack nk-cx-stack--flat'} key={si}>
            {stack.map((g, gi) => (
            <div className="nk-cx-colm" key={g.head || gi}>
              <h3 className="nk-cx-sh" style={F_TITLE}>{g.head}</h3>
              <div className="nk-cx-rows">
                {g.rows.map(({ c, i, it, j }) => {
                  const k = `${i}-${j}`;
                  const open = openItem === k;
                  const kids = it.children || [];
                  return (
                    <div className="nk-cx-row" key={k} data-open={open}>
                      <button type="button" className="nk-cx-btn" aria-expanded={open} onClick={() => setOpenItem(open ? null : k)}>
                        <span>{it.label}</span>
                        <ChevronDown size={20} aria-hidden="true" />
                      </button>
                      <div className="nk-cx-panel" inert={!open}>
                        <div className="nk-cx-panel-in">
                          <ul>
                            {menuKids(section, c.title, it.cat ? null : it.label, kids).map((kid) => (
                              <li key={kid.value}><a href={it.cat ? leafHref(section, c.title, kid.value) : leafHref(section, c.title, it.label, kid.value)} title={kid.label}>{kid.label}</a></li>
                            ))}
                            <li><a href={it.cat ? leafHref(section, c.title) : leafHref(section, c.title, it.label)} className="nk-cx-viewall">View {it.label}</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {(!STACK[data.key] || (STACK_CTAS[data.key] && STACK_CTAS[data.key][g.head])) && <a href={leafHref(section, g.first.title)} className="nk-cx-all"><i aria-hidden="true" /><span>{g.cta || (STACK_CTAS[data.key] && STACK_CTAS[data.key][g.head]) || (GROUP_CTAS[data.key] && GROUP_CTAS[data.key][g.head]) || `Explore ${g.head}`}</span><b className="nk-cx-ar" aria-hidden="true" /></a>}
            </div>
            ))}
            </div>
          ))}
        </div>
        {/* v456 · same contact line as the hamburger menu */}
        <div className="nk-cx-foot">
          <a href="mailto:info@nkco.ae?subject=NK%26CO%20Enquiry" className="nk-cx-contact">
            <span>Contact the office</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a href="mailto:info@nkco.ae" className="nk-cx-mail">info@nkco.ae</a>
        </div>
      </div>
    );
  }

  // ======================================================================================================
  // v455 · Hamburger menu = "Design D" (no sidebar).
  //   1. section tabs (Capabilities ... Overview) + "Explore all ..." on the right
  //   2. headings of the section as large serif tabs (Service Lines / Market Needs / Sector Expertise)
  //   3. items of the heading as small tabs, then the item title, the service rows (photo, name, line, arrow) and, on the right, the featured insight
  //   4. contact line
  // Same data as before (buildMenuGroups / groupsOf): only the layout changed. All styles: src/styles/megamenu-burger-v455.css (.nk-bm-*).
  // ======================================================================================================
  if (!solo) {
    const heads = groupsOf(data.key, cols);
    const secList = sections.length ? sections : [{ key: data.key, label: data.title }];
    const kids = menuKids(section, col.title, item ? item.label : '', children).slice(0, BM_MAX_ROWS);
    return (
      <div className="nk-bm" data-section={data.key}>
        <div className="nk-bm-top">
          <div className="nk-bm-secs" role="tablist" aria-label="Main navigation">
            {secList.map((sec) => {
              const cur = sec.key === data.key;
              return (
                <button
                  key={sec.key}
                  type="button"
                  role="tab"
                  className="nk-bm-sec"
                  aria-selected={cur}
                  data-active={cur}
                  onClick={() => { if (!cur && onSelectSection) onSelectSection(sec.key); }}
                >
                  {sec.label}
                </button>
              );
            })}
          </div>
          {data.exploreLabel && (
            <a href={data.exploreHref || '#'} className="nk-bm-go">
              <i aria-hidden="true" />
              <span>{data.exploreLabel}</span>
              <b aria-hidden="true" />
            </a>
          )}
        </div>

        <div className="nk-bm-heads" role="tablist" aria-label={`${data.title} groups`} data-n={heads.length}>
          {heads.map((g) => {
            const on = g.idxs.includes(ci);
            return (
              <button
                key={g.head}
                type="button"
                role="tab"
                className="nk-bm-head"
                aria-selected={on}
                data-active={on}
                onClick={() => { if (!on) pickCol(g.idxs[0]); }}
              >
                {g.head}
              </button>
            );
          })}
        </div>

        <div className="nk-bm-body">
          <div className="nk-bm-main">
            <div className="nk-bm-tabs-wrap" data-l={edge.l || undefined} data-r={edge.r || undefined} key={curGroup.head}>
              <div className="nk-bm-tabs" role="tablist" aria-label={`${col.title} sections`} ref={tabsRef} onScroll={measureTabs}>
                {tabItems.map(({ it, n, j }) => (
                  <button
                    key={`${n}-${it.label}`}
                    type="button"
                    role="tab"
                    className="nk-bm-tab"
                    aria-selected={n === ci && j === ii}
                    data-active={n === ci && j === ii}
                    onClick={(e) => {
                      setCi(n); setIi(j); setItemPicked(true); setHov(null);
                      const el = tabsRef.current;
                      if (el) el.scrollTo({ left: Math.max(0, e.currentTarget.offsetLeft - 48), behavior: 'smooth' });
                    }}
                  >
                    {it.label}
                  </button>
                ))}
              </div>
              {edge.l && <button type="button" className="nk-bm-tabs-nav nk-bm-tabs-nav--l" aria-label="Scroll tabs left" onClick={() => nudgeTabs(-1)}><ChevronLeft size={16} aria-hidden="true" /></button>}
              {edge.r && <button type="button" className="nk-bm-tabs-nav nk-bm-tabs-nav--r" aria-label="Scroll tabs right" onClick={() => nudgeTabs(1)}><ChevronRight size={16} aria-hidden="true" /></button>}
            </div>

            {item && (
              <div className="nk-bm-pane" key={`${ci}-${ii}`} role="tabpanel">
                <a href={leafHref(section, col.title, item.label)} className="nk-bm-title" data-len={item.label.length > 30 ? 'xl' : item.label.length > 22 ? 'l' : undefined} title={item.label}>
                  {item.label}
                </a>
                {kids.length > 0 && (
                  <div className="nk-bm-rows">
                    {kids.map(({ value: c, label }) => {
                      const n = children.indexOf(c);
                      const ph = leafPhoto(section, col.title, item.label, c, n);
                      return (
                        <a key={c} href={leafHref(section, col.title, item.label, c)} className="nk-bm-row" data-previewing={hovChild === c || undefined} onClick={(e) => pickRow(e, c)}>
                          <span className="nk-bm-row-img" aria-hidden="true">
                            <img
                              src={ph.src}
                              alt=""
                              loading="lazy"
                              style={photoStyle(ph)}
                              onError={(e) => { const el = e.currentTarget; el.onerror = null; el.removeAttribute('style'); el.src = cardImage(`${section}|${col.title}|${item.label}`, n); }}
                            />
                          </span>
                          <span className="nk-bm-row-text">
                            <span className="nk-bm-row-name" title={label}>{label}</span>
                            {CHILD_DESCRIPTIONS[c] && <span className="nk-bm-row-desc" title={CHILD_DESCRIPTIONS[c]}>{CHILD_DESCRIPTIONS[c]}</span>}
                          </span>
                          <span className="nk-bm-row-arrow" aria-hidden="true"><ArrowRight size={20} strokeWidth={1.5} /></span>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>

          {hovChild && (() => {
            const href = leafHref(section, col.title, item.label, hovChild);
            const photo = leafPhoto(section, col.title, item.label, hovChild, children.indexOf(hovChild));
            return (
              <aside className="nk-bm-feat nk-bm-prev" aria-label={`Preview: ${hovChild}`} key={hovChild}>
                <a href={href} className="nk-bm-feat-link">
                  <span className="nk-bm-feat-img" aria-hidden="true">
                    <img src={photo.src} alt="" style={photoStyle(photo)} onError={(e) => { const el = e.currentTarget; el.onerror = null; el.style.transform = ''; el.style.filter = ''; el.src = FEAT_FALLBACKS[hashStr(hovChild) % FEAT_FALLBACKS.length]; }} />
                  </span>
                  <span className="nk-bm-feat-tag">Page preview</span>
                  <span className="nk-bm-feat-title">{hovChild}</span>
                  <span className="nk-bm-feat-desc nk-bm-prev-lead">{pageLead(section, col, item, hovChild)}</span>
                  <span className="nk-bm-go nk-bm-go--static">
                    <i aria-hidden="true" />
                    <span>Open the page</span>
                    <b aria-hidden="true" />
                  </span>
                </a>
              </aside>
            );
          })()}
          {!hovChild && feat && (feat.title || feat.image) && (
            <aside className="nk-bm-feat" aria-label="Featured" key={featKey}>
              <a href={feat.ctaHref || '#'} className="nk-bm-feat-link">
                {feat.image && (
                  <span className="nk-bm-feat-img" aria-hidden="true">
                    <img
                      src={feat.image}
                      alt=""
                      loading="lazy"
                      onError={(e) => {
                        const el = e.currentTarget;
                        el.onerror = null;
                        el.style.objectPosition = '';
                        el.style.transform = '';
                        el.src = FEAT_FALLBACKS[hashStr(featKey) % FEAT_FALLBACKS.length];
                      }}
                      style={art ? { objectPosition: `${art.x}% ${art.y}%`, transform: art.zoom ? `scale(${art.zoom})` : undefined } : undefined}
                    />
                  </span>
                )}
                <span className="nk-bm-feat-tag">{feat.tag || 'Featured'}</span>
                {feat.title && <span className="nk-bm-feat-title">{feat.title}</span>}
                {feat.description && <span className="nk-bm-feat-desc">{feat.description}</span>}
                {feat.ctaLabel && (
                  <span className="nk-bm-go nk-bm-go--static">
                    <i aria-hidden="true" />
                    <span>{feat.ctaLabel}</span>
                    <b aria-hidden="true" />
                  </span>
                )}
              </a>
            </aside>
          )}
        </div>

        <div className="nk-bm-foot">
          <a href="mailto:info@nkco.ae?subject=NK%26CO%20Enquiry" className="nk-bm-contact">
            <span>Contact the office</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a href="mailto:info@nkco.ae" className="nk-bm-mail">info@nkco.ae</a>
        </div>
      </div>
    );
  }

  return (
    <div className={`nk-md${solo ? ' nk-md--acc' : BURGER_DARK ? ' nk-md--dark' : ''}`} data-section={data.key} data-feat={hovChild ? 'prev' : feat && feat.image ? 'img' : feat ? 'text' : 'none'} data-partner="false">
      {/* Top menu: clean accordion (category -> items). Burger menu keeps the dark section rail below. */}
      {solo && (
        <nav className="nk-acc" aria-label={`${data.title} navigation`}>
          <div className="nk-acc-head">
            <h2 className="nk-acc-title font-serif-display" style={F_TITLE}>{data.title}</h2>
            {data.description && <p className="nk-acc-desc">{data.description}</p>}
            {data.exploreLabel && (
              <a href={data.exploreHref || '#'} className="nk-acc-cta">
                <span>{data.exploreLabel}</span>
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            )}
          </div>
          <ul className="nk-acc-list">
            {cols.map((c, i) => {
              const open = openCat === i;
              const its = (c.items || []).map(asItem);
              return (
                <li key={c.title} className="nk-acc-cat" data-open={open} data-current={i === ci}>
                  <button
                    type="button"
                    className="nk-acc-btn"
                    aria-expanded={open}
                    onClick={() => {
                      if (open) { setOpenCat(null); return; }
                      setOpenCat(i);
                      pickCol(i);
                    }}
                  >
                    <span className="font-serif-display" style={F_CAT} title={c.title}>{c.title}</span>
                    <ChevronDown size={18} aria-hidden="true" className="nk-acc-chev" />
                  </button>
                  <div className={`nk-acc-panel${open ? ' is-open' : ''}`} inert={!open}>
                    <div className="nk-acc-panel-inner">
                      <ul className="nk-acc-items">
                        {its.map((it, j) => {
                          const k = `${i}-${j}`;
                          const iopen = openItem === k;
                          const kids = it.children || [];
                          return (
                            <li key={it.label} className="nk-acc-it" data-open={iopen}>
                              <button
                                type="button"
                                className="nk-acc-item"
                                aria-expanded={iopen}
                                data-active={i === ci && j === ii && itemPicked}
                                onClick={() => {
                                  setCi(i); setIi(j); setItemPicked(true); setHov(null);
                                  setOpenItem(iopen ? null : k);
                                }}
                              >
                                <span style={{ ...F_CAT, fontSize: 19 }}>{it.label}</span>
                                <ChevronDown size={15} aria-hidden="true" className="nk-acc-chev" />
                              </button>
                              <div className={`nk-acc-panel${iopen ? ' is-open' : ''}`} inert={!iopen}>
                                <div className="nk-acc-panel-inner">
                                  <ul className="nk-acc-kids">
                                    {menuKids(section, c0(i).title, it.label, kids).map(({ value: c, label }) => (
                                      <li key={c}>
                                        <a
                                          href={leafHref(section, c0(i).title, it.label, c)}
                                          className="nk-acc-kid"
                                          data-previewing={i === ci && j === ii && hov === c || undefined}
                                          onClick={(e) => { setCi(i); setIi(j); setItemPicked(true); pickRow(e, c); }}
                                        >
                                          <span style={F_SANS}>{label}</span>
                                          <ArrowRight size={14} aria-hidden="true" />
                                        </a>
                                      </li>
                                    ))}
                                    <li>
                                      <a href={leafHref(section, c0(i).title, it.label)} className="nk-acc-kid nk-acc-kid--all">
                                        <span>View {it.label}</span>
                                        <ArrowUpRight size={14} aria-hidden="true" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      {/* Burger menu — dark rail with main sections */}
      {!solo && (
      <nav className="nk-md-rail" aria-label="Main navigation" ref={railRef}>
        <ul className={`nk-md-secs${solo ? ' nk-md-secs--solo' : ' nk-md-secs--burger'}`}>
          {(sections.length ? sections : [{ key: data.key, label: data.title }]).filter((sec) => !solo || sec.key === data.key).map((sec) => {
            const isCur = sec.key === data.key;
            const expanded = solo ? isCur : openKey === sec.key;
            return (
              <li key={sec.key} className="nk-md-sec" data-open={expanded}>
                <button
                  type="button"
                  className="nk-md-sec-btn"
                  aria-expanded={expanded}
                  tabIndex={solo ? -1 : undefined}
                  onClick={() => {
                    if (solo) return;
                    if (expanded) { setOpenKey(null); return; }
                    setOpenKey(sec.key);
                    if (!isCur && onSelectSection) onSelectSection(sec.key);
                  }}
                >
                  <span>{sec.label}</span>
                  <ChevronDown size={15} aria-hidden="true" className="nk-md-sec-chev" />
                </button>
                {/* Always mounted; height animates 0fr -> 1fr. */}
                <div className={`nk-md-sub${expanded ? ' is-open' : ''}`} inert={!expanded}>
                  <div className="nk-md-sub-inner">
                    <ul className="nk-md-cats">
                      {groupsOf(sec.key, isCur ? cols : (sec.columns || [])).map((g) => (
                        <li key={g.head}>
                          <button
                            type="button"
                            className="nk-md-cat"
                            data-active={isCur && g.idxs.includes(ci)}
                            aria-current={isCur && g.idxs.includes(ci) ? 'true' : undefined}
                            onClick={() => isCur && !g.idxs.includes(ci) && pickCol(g.idxs[0])}
                          >
                            <span title={g.head}>{g.head}</span>
                            <ChevronRight size={15} aria-hidden="true" />
                          </button>
                        </li>
                      ))}
                      {isCur && data.exploreLabel && (
                        <li className="nk-md-explore-li">
                          <a href={data.exploreHref || '#'} className="nk-md-go nk-md-go--dark nk-md-go--rail">
                            <GoLabel>{data.exploreLabel}</GoLabel>
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <a href="mailto:info@nkco.ae?subject=NK%26CO%20Enquiry" className="nk-md-rail-contact">
          <span className="nk-md-rail-contact-label">
            <span>Contact the office</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </span>
          <span className="nk-md-rail-contact-mail">info@nkco.ae</span>
        </a>
      </nav>

      )}

      {/* Main — tabs (items of the category), title, service rows, action bar */}
      <div className="nk-md-main">
        {!solo && (<div className="nk-md-tabs-wrap" data-l={edge.l || undefined} data-r={edge.r || undefined} key={curGroup.head}>
          <div className="nk-md-tabs" role="tablist" aria-label={`${col.title} sections`} ref={tabsRef} onScroll={measureTabs}>
            {tabItems.map(({ it, n, j }) => (
              <button
                key={`${n}-${it.label}`}
                type="button"
                role="tab"
                className="nk-md-tab"
                aria-selected={n === ci && j === ii}
                data-active={n === ci && j === ii}
                onClick={(e) => {
                  setCi(n); setIi(j); setItemPicked(true); setHov(null);
                  const el = tabsRef.current;
                  if (el) el.scrollTo({ left: Math.max(0, e.currentTarget.offsetLeft - 48), behavior: 'smooth' });
                }}
              >
                {it.label}
              </button>
            ))}
          </div>
          {edge.l && <button type="button" className="nk-md-tabs-nav nk-md-tabs-nav--l" aria-label="Scroll tabs left" onClick={() => nudgeTabs(-1)}><ChevronLeft size={16} aria-hidden="true" /></button>}
          {edge.r && <button type="button" className="nk-md-tabs-nav nk-md-tabs-nav--r" aria-label="Scroll tabs right" onClick={() => nudgeTabs(1)}><ChevronRight size={16} aria-hidden="true" /></button>}
        </div>)}

        {item && (
          <div className="nk-md-body" key={`${ci}-${ii}`} role="tabpanel">
            <a href={leafHref(section, col.title, item.label)} className="nk-md-title font-serif-display" data-len={item.label.length > 30 ? 'xl' : item.label.length > 22 ? 'l' : undefined} title={item.label}>
              <span>{item.label}</span>
            </a>
            <i className="nk-md-rule" aria-hidden="true" />

            {children.length > 0 && (
              <div className="nk-md-lines">
                {menuKids(section, col.title, item.label, children).map(({ value: c, label }) => { const n = children.indexOf(c); return (
                  <a
                    key={c}
                    href={leafHref(section, col.title, item.label, c)}
                    className="nk-md-line"
                    data-previewing={hovChild === c || undefined}
                    onClick={(e) => pickRow(e, c)}
                  >
                    <span className="nk-md-line-img" aria-hidden="true">
                      {(() => {
                        // real photo, same pick as this page's preview and hero; the drawn set is only a fallback if the photo cannot load
                        const ph = leafPhoto(section, col.title, item.label, c, n);
                        return (
                          <img
                            src={ph.src}
                            alt=""
                            loading="lazy"
                            style={photoStyle(ph)}
                            onError={(e) => { const el = e.currentTarget; el.onerror = null; el.removeAttribute('style'); el.src = cardImage(`${section}|${col.title}|${item.label}`, n); }}
                          />
                        );
                      })()}
                    </span>
                    <span className="nk-md-line-text">
                      <span className="nk-md-line-name font-serif-display" data-len={c.length > 46 ? 'xl' : c.length > 38 ? 'l' : undefined} title={c}>{label}</span>
                      {CHILD_DESCRIPTIONS[c] && <span className="nk-md-line-desc" title={CHILD_DESCRIPTIONS[c]}>{CHILD_DESCRIPTIONS[c]}</span>}
                    </span>
                    <span className="nk-md-line-arrow" aria-hidden="true"><ArrowRight size={20} strokeWidth={1.5} /></span>
                  </a>
                ); })}
              </div>
            )}

            {curGroup.cta && (
              // v452 · same link, wording and destination as the heading's link in the top menu
              <a href={leafHref(section, curGroup.first.title)} className="nk-md-go nk-md-go--foot" title={curGroup.cta}>
                <GoLabel>{curGroup.cta}</GoLabel>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Right — preview of the page of the service row that was clicked (same hero as the page itself) */}
      {hovChild && (() => {
        const href = leafHref(section, col.title, item.label, hovChild);
        const photo = leafPhoto(section, col.title, item.label, hovChild, children.indexOf(hovChild));
        // always from other lists (never the rows on the left)
        const others = relatedPages(sections, section, col.title, item.label, hovChild);
        return (
          <aside className="nk-md-prev" aria-label={`Preview: ${hovChild}`}>
            <div className="nk-md-prev-card" key={hovChild}>
              <div className="nk-md-prev-bar">
                <span className="nk-md-eyebrow">Page preview</span>
              </div>
              <a href={href} className="nk-md-prev-hero" tabIndex={-1}>
                <span className="nk-md-prev-img" aria-hidden="true">
                  <img src={photo.src} alt="" style={photoStyle(photo)} onError={(e) => { const el = e.currentTarget; el.onerror = null; el.style.transform = ''; el.style.filter = ''; el.src = FEAT_FALLBACKS[hashStr(hovChild) % FEAT_FALLBACKS.length]; }} />
                </span>
                <span className="nk-md-prev-copy">
                  <img className="nk-md-prev-bg" src={photo.src} alt="" aria-hidden="true" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  <span className="nk-md-prev-shade" aria-hidden="true" />
                  <span className="nk-md-prev-title font-serif-display" data-len={hovChild.length > 26 ? 'l' : undefined}>{hovChild}</span>
                  <span className="nk-md-prev-lead">{pageLead(section, col, item, hovChild)}</span>
                  <span className="nk-md-prev-ctas">
                    <span className="nk-md-go nk-md-go--dark nk-md-go--static"><GoLabel>Open the page</GoLabel></span>
                    <span className="nk-md-prev-cta nk-md-prev-cta--quiet">Speak with our team</span>
                  </span>
                </span>
              </a>
              {others.length > 0 && (
                <div className="nk-md-prev-rel">
                  <span className="nk-md-eyebrow">Related pages</span>
                  <ul>
                    {others.map((o) => (
                      <li key={o.group + o.child}>
                        <a href={leafHref(o.section, o.category, o.item, o.child)}>
                          <span className="font-serif-display">{o.child}</span>
                          <ArrowRight size={14} aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        );
      })()}

      {/* Right — curved photo + featured insight */}
      {!hovChild && feat && (feat.title || feat.image) && (
        <aside className="nk-md-feat" aria-label="Featured" key={featKey}>
          <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute' }}>
            <defs>
              <clipPath id="nkMdCurve" clipPathUnits="objectBoundingBox">
                <path d="M0.2,0 L1,0 L1,1 L0,1 C0,0.62 0.05,0.24 0.2,0 Z" />
              </clipPath>
            </defs>
          </svg>
          {feat.image && (
            <div className="nk-md-feat-img" aria-hidden="true">
              <img
                src={feat.image}
                alt=""
                loading="lazy"
                onError={(e) => {
                  // Remote photo unavailable (offline / blocked): fall back to the local architectural set so the panel never shows an empty grey box.
                  const el = e.currentTarget;
                  el.onerror = null;
                  el.style.objectPosition = '';
                  el.style.transform = '';
                  el.src = FEAT_FALLBACKS[hashStr(featKey) % FEAT_FALLBACKS.length];
                }}
                style={art ? { objectPosition: `${art.x}% ${art.y}%`, transform: art.zoom ? `scale(${art.zoom})` : undefined } : undefined}
              />
            </div>
          )}
          <a href={feat.ctaHref || '#'} className="nk-md-feat-body">
            <span className="nk-md-eyebrow">{feat.tag || 'Featured'}</span>
            <i className="nk-md-rule nk-md-rule--short" aria-hidden="true" />
            {feat.title && <span className="nk-md-feat-title font-serif-display">{feat.title}</span>}
            {feat.description && <span className="nk-md-feat-desc">{feat.description}</span>}
            {feat.ctaLabel && (
              <span className="nk-md-go nk-md-go--static nk-md-go--feat">
                <GoLabel>{feat.ctaLabel}</GoLabel>
              </span>
            )}
          </a>
        </aside>
      )}

      {/* Foot (partner in charge) removed in v163 — the space goes to the service rows */}
    </div>
  );
}
