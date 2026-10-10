// Single source of truth for per-page SEO metadata.
// Used by:
//   - scripts/prerender.js (build time: writes one static HTML file per route)
//   - components/RouteSeo.jsx (runtime: keeps <title>/meta in sync on client navigation)
// Keep this file free of JSX, default exports and non-relative imports so the
// build-time script can load it without a bundler.
import { NAV_ITEMS, slugify } from '../mock';
import { getLeafContent, getItemContent, getColumnContent } from '../data/serviceContent';
import { BRIEFING } from '../data/briefing';

export const SITE_NAME = 'NK&CO';
export const SITE_TAGLINE = 'Advisory, Acquisitions, Capital and Partnerships';
export const DEFAULT_DESCRIPTION =
  'NK&CO \u2014 Advisory, Acquisitions, Capital and Partnerships. Enterprise advisory, consultancy and implementation across Dubai, the UAE and the wider GCC.';

const PODCAST_BASE = '/intelligence/nk-co-briefing';

const labelOf = (x) => (typeof x === 'string' ? x : x.label || x.title || '');

export function trimDescription(text, max = 158) {
  const clean = String(text || '').replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 80 ? cut.slice(0, lastSpace) : cut).replace(/[,;:\u2014-]\s*$/, '') + '\u2026';
}

function makeTitle(primary, context) {
  return context ? `${primary} \u00b7 ${context} | ${SITE_NAME}` : `${primary} | ${SITE_NAME}`;
}

function podcastMeta(path) {
  const segs = path.split('/').filter(Boolean); // intelligence, nk-co-briefing, [episode|series, slug]
  const crumbs = [
    { label: 'Intelligence', path: '/intelligence' },
    { label: BRIEFING.name, path: PODCAST_BASE },
  ];
  if (segs.length === 2) {
    return {
      kind: 'podcast',
      path: PODCAST_BASE,
      title: makeTitle(`${BRIEFING.name} \u2014 ${BRIEFING.tagline.replace(/\.$/, '')}`),
      description: trimDescription(BRIEFING.description),
      h1: BRIEFING.name,
      lead: BRIEFING.description,
      crumbs,
      links: [
        ...BRIEFING.series.map((s) => ({ label: s.title, path: `${PODCAST_BASE}/series/${s.slug}` })),
        ...BRIEFING.episodes.map((e) => ({ label: e.title, path: `${PODCAST_BASE}/episode/${e.slug}` })),
      ],
      priority: 0.7,
    };
  }
  if (segs.length === 4 && segs[2] === 'episode') {
    const ep = BRIEFING.episodes.find((e) => e.slug === segs[3]);
    if (!ep) return null;
    return {
      kind: 'episode',
      path,
      title: `${ep.title} | ${BRIEFING.name}`,
      description: trimDescription(`${ep.summary} ${ep.series} \u2014 with ${ep.guest}. ${ep.duration}.`),
      h1: ep.title,
      lead: `${ep.summary} Featuring ${ep.guest}. ${ep.series}, ${ep.date} (${ep.duration}).`,
      crumbs: [...crumbs, { label: ep.title, path }],
      links: [],
      priority: 0.6,
    };
  }
  if (segs.length === 4 && segs[2] === 'series') {
    const s = BRIEFING.series.find((x) => x.slug === segs[3]);
    if (!s) return null;
    return {
      kind: 'series',
      path,
      title: makeTitle(s.title, BRIEFING.name),
      description: trimDescription(s.desc),
      h1: s.title,
      lead: s.desc,
      crumbs: [...crumbs, { label: s.title, path }],
      links: BRIEFING.episodes
        .filter((e) => e.series === s.title)
        .map((e) => ({ label: e.title, path: `${PODCAST_BASE}/episode/${e.slug}` })),
      priority: 0.6,
    };
  }
  return null;
}

// Mirrors the resolution logic in pages/SectionPage.jsx
export function getRouteMeta(pathname) {
  const path = '/' + String(pathname || '/').split(/[?#]/)[0].split('/').filter(Boolean).join('/');

  if (path === '/') {
    return {
      kind: 'home',
      path: '/',
      title: `${SITE_NAME} \u2014 ${SITE_TAGLINE}`,
      description: DEFAULT_DESCRIPTION,
      h1: `${SITE_NAME} \u2014 ${SITE_TAGLINE}`,
      lead: DEFAULT_DESCRIPTION,
      crumbs: [],
      links: NAV_ITEMS.map((n) => ({ label: n.data.title, path: `/${n.key}` })),
      priority: 1.0,
    };
  }

  if (path === PODCAST_BASE || path.startsWith(PODCAST_BASE + '/')) {
    const p = podcastMeta(path);
    if (p) return p;
  }

  const [section, category, item, child] = path.split('/').filter(Boolean);
  const nav = NAV_ITEMS.find((n) => n.key === section);
  if (!nav) return null;

  const data = nav.data;
  const find = (items, slug) => (items || []).find((x) => slugify(labelOf(x)) === slug);
  const col = category ? find(data.columns, category) : null;
  const it = item && col ? find(col.items, item) : null;
  const leaf = child && it ? (it.children || []).find((c) => slugify(c) === child) : null;

  const colTitle = col ? col.title : '';
  const itLabel = it ? labelOf(it) : '';

  let description;
  if (leaf) {
    description =
      getLeafContent(section, category, item, child) ||
      `An in-depth NK&CO perspective on ${leaf}, drawn from decades of experience advising institutions across the UAE and GCC.`;
  } else if (it) {
    description =
      getItemContent(section, category, item) ||
      `Our approach to ${itLabel} \u2014 combining deep functional expertise with unrivalled knowledge of Dubai and the wider region.`;
  } else if (col) {
    const bespoke = getColumnContent(section, category);
    description =
      (bespoke && bespoke.lead) ||
      col.description ||
      `Explore our work in ${colTitle}, delivered by senior practitioners on the ground in the UAE.`;
  } else {
    description = data.description;
  }

  const crumbs = [{ label: data.title, path: `/${section}` }];
  if (col) crumbs.push({ label: colTitle, path: `/${section}/${category}` });
  if (it) crumbs.push({ label: itLabel, path: `/${section}/${category}/${item}` });
  if (leaf) crumbs.push({ label: leaf, path: `/${section}/${category}/${item}/${child}` });

  let links = [];
  if (leaf) {
    links = (it.children || [])
      .filter((c) => c !== leaf)
      .map((c) => ({ label: c, path: `/${section}/${category}/${item}/${slugify(c)}` }));
  } else if (it) {
    links = (it.children || []).map((c) => ({ label: c, path: `/${section}/${category}/${item}/${slugify(c)}` }));
  } else if (col) {
    links = (col.items || []).map((x) => ({ label: labelOf(x), path: `/${section}/${category}/${slugify(labelOf(x))}` }));
  } else {
    links = (data.columns || []).map((c) => ({ label: c.title, path: `/${section}/${slugify(c.title)}` }));
  }

  const resolvedPath = '/' + [section, col && category, it && item, leaf && child].filter(Boolean).join('/');
  const level = leaf ? 3 : it ? 2 : col ? 1 : 0;
  const primary = leaf || itLabel || colTitle || data.title;
  const context = leaf ? itLabel : it ? colTitle : col ? data.title : '';

  return {
    kind: ['section', 'category', 'item', 'leaf'][level],
    path: resolvedPath, // canonical path (deepest level that actually resolves)
    title: makeTitle(primary, context),
    description: trimDescription(description),
    h1: primary,
    lead: description,
    crumbs,
    links,
    priority: [0.9, 0.8, 0.7, 0.6][level],
  };
}

// Every statically knowable route in the site.
export function getAllRoutes() {
  const paths = new Set(['/']);
  NAV_ITEMS.forEach((n) => {
    const s = n.key;
    paths.add(`/${s}`);
    (n.data.columns || []).forEach((col) => {
      const c = slugify(col.title);
      paths.add(`/${s}/${c}`);
      (col.items || []).forEach((x) => {
        const i = slugify(labelOf(x));
        if (!i) return;
        paths.add(`/${s}/${c}/${i}`);
        (typeof x === 'string' ? [] : x.children || []).forEach((ch) => {
          const l = slugify(ch);
          if (l) paths.add(`/${s}/${c}/${i}/${l}`);
        });
      });
    });
  });
  paths.add(PODCAST_BASE);
  BRIEFING.series.forEach((x) => paths.add(`${PODCAST_BASE}/series/${x.slug}`));
  BRIEFING.episodes.forEach((x) => paths.add(`${PODCAST_BASE}/episode/${x.slug}`));
  return Array.from(paths);
}
