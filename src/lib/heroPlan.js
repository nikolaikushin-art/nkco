// v210: which hero composition each page gets.
//
// Compositions (class pg-hv<n>):  0 on-photo caption · 1 split card · 6 overlap card · 7 framed plate · 8 inset (related) photo
//                                 9 chapter numeral · 10 narrow column · 11 centred plaque
// v209 had eleven; 1, 2, 4 (and 12) were the same "photo + card" and are now one (1, with photo side / ratio / panel texture as parameters),
// 11's stats column folded into 0 as a parameter, 6 and 8 were reworked so they stop reading as "photo + text block".
//
// The plan is a pure function of the navigation tree, so a page gets the same composition on every render and in every build.
// Pages are walked in list order (category, its items, each item's pages) and every page picks a weighted composition that is
//   - not one of the last K pages' compositions in that order (so neighbours never share one),
//   - not the previous sibling's composition (items are separated by their children in list order, so this is checked on its own),
//   - not the parent page's composition.
// Weights are corrected by a running "debt" so shares stay close to the targets inside every section.
import { NAV_ITEMS_ALL as NAV_ITEMS, slugify } from '../mock';

export const HERO_WEIGHTS = { 0: 0.14, 1: 0.14, 6: 0.12, 7: 0.12, 8: 0.12, 9: 0.12, 10: 0.12, 11: 0.12 };
const IDS = Object.keys(HERO_WEIGHTS).map(Number);
const K = 3;

const hash = (s) => { let h = 7; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; };
const mixU = (x) => { x = Math.imul(x ^ (x >>> 16), 0x85ebca6b); x = Math.imul(x ^ (x >>> 13), 0xc2b2ae35); return ((x ^ (x >>> 16)) >>> 0) / 4294967296; };

// list of { path, parent, level } in list order for one sequence
function walk(sec) {
  const out = [];
  (sec.data.columns || []).forEach((c) => {
    const cs = slugify(c.title); const cp = `${sec.key}/${cs}`;
    out.push({ path: cp, parent: sec.key, level: 'category' });
    (c.items || []).forEach((o) => {
      const it = typeof o === 'string' ? { label: o, children: [] } : o; const ip = `${cp}/${slugify(it.label)}`;
      out.push({ path: ip, parent: cp, level: 'item' });
      (it.children || []).forEach((ch) => out.push({ path: `${ip}/${slugify(ch)}`, parent: ip, level: 'leaf' }));
    });
  });
  return out;
}

function runSequence(list, plan, salt) {
  const counts = {}; IDS.forEach((k) => { counts[k] = 0; });
  const hist = []; const lastAt = {}; // lastAt[parent] = composition of the previous child of that parent
  list.forEach((p, n) => {
    const banned = new Set(hist.slice(-K));
    if (lastAt[p.parent] !== undefined) banned.add(lastAt[p.parent]);
    if (plan[p.parent] !== undefined) banned.add(plan[p.parent]);
    let cand = IDS.filter((k) => !banned.has(k));
    if (!cand.length) cand = IDS.filter((k) => k !== hist[hist.length - 1]);
    const eff = cand.map((k) => HERO_WEIGHTS[k] * Math.exp(-0.28 * (counts[k] - HERO_WEIGHTS[k] * n)));
    const tot = eff.reduce((a, b) => a + b, 0);
    let u = mixU(hash(p.path + salt) ^ 0x5bd1e995) * tot; let pick = cand[cand.length - 1];
    for (let i = 0; i < cand.length; i++) { if (u < eff[i]) { pick = cand[i]; break; } u -= eff[i]; }
    plan[p.path] = pick; counts[pick]++; hist.push(pick); lastAt[p.parent] = pick;
  });
}

let PLAN = null;
export function heroPlan() {
  if (PLAN) return PLAN;
  PLAN = {};
  // the seven top-level pages are siblings of each other
  runSequence(NAV_ITEMS.map((n) => ({ path: n.key, parent: '/', level: 'section' })), PLAN, '#s');
  NAV_ITEMS.forEach((sec) => runSequence(walk(sec), PLAN, '#p'));
  return PLAN;
}

// v214: institutional pages use ONE hero composition (the split card). The plan above is kept for reference but no longer drives the pages.
export const heroFor = () => 1;
