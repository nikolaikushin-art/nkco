// Assigns a real photo from src/data/photoLibrary.json to every page/card.  Run: npm run assign:photos
//
// The library is the set of labelled Unsplash photos from the BPR site (each photo's label is the search/topic it was picked for).
// A page's topic comes from the reviewed keyword rules in src/lib/topicPlate.js (motifFor). Each topic below lists the photo labels that
// fit it, best first. Rules while picking:
//   - a photo must match one of the topic's labels (no random fallback)
//   - plain labels ("Construction", "Holiday Homes") are preferred over "Role · Topic" article labels
//   - two pages in the same menu list never get the same photo; across the site a photo is reused as little as possible
// Output: src/data/photoManifest.json (pages + featured cards) and src/data/editorialPhotos.json (home/side cards by title).
import fs from 'fs';
import os from 'os';
import path from 'path';
import { loadSlots, MANIFEST_PATH, root } from './lib-slots.mjs';

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'nkco-assign-'));
fs.writeFileSync(path.join(tmp, 'topicPlate.mjs'), fs.readFileSync(path.join(root, 'src/lib/topicPlate.js'), 'utf8'));
const { motifFor, CARD_MOTIF } = await import(path.join(tmp, 'topicPlate.mjs'));
fs.rmSync(tmp, { recursive: true, force: true });

// photos that render as a flat gradient / no usable picture on the live site
const EXCLUDE = new Set(['photo-1579546928937-641f7ac9bced']);
const LIB = JSON.parse(fs.readFileSync(path.join(root, 'src/data/photoLibrary.json'), 'utf8')).filter((p) => !EXCLUDE.has(p.id)).map((p) => ({ ...p, low: p.alt.toLowerCase() }));
const url = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=940&q=75`;

// topic (motif) -> photo labels that fit it, best first
const T = {
  growth: ['sustainable development', 'rapid expansion', 'investment strategy', 'portfolio strategy', 'market outlook', 'investment professionals', 'capital markets'],
  bars: ['compensation committee', 'conversion metrics', 'industry benchmarks', 'performance metrics', 'talent analytics', 'recruitment metrics', 'market dynamics', 'compensation benchmarks'],
  pie: ['industry benchmarks', 'performance metrics', 'talent analytics', 'recruitment metrics'],
  gauge: ['performance metrics', 'industry benchmarks', 'recruitment metrics', 'skills gap analysis'],
  tower: ['aerial perspective of glass', 'geometric glass tower', 'commercial office district', 'commercial district', 'large mixed-use district', 'commercial real estate team', 'commercial real estate broker', 'commercial assets', 'modern commercial towers', 'corporate real estate', 'office reimagined', 'commercial developers', 'corporate portfolio'],
  house: ['dubai skyline with residential', 'sales agent meeting', 'residential trends', 'primary market', 'luxury residential', 'secondary market', 'property management', 'real estate brokerages', 'luxury real estate'],
  key: ['property management team', 'tenant strategy', 'property management', 'holiday homes', 'residential trends', 'commercial agenc'],
  rings: ['strategic partnerships', 'success stories', 'team building', 'professional networks'],
  document: ['executives meeting around a table', 'term sheet', 'regulatory & compliance guides', 'regulatory environment', 'reference strategies', 'background checks', 'compliance'],
  scales: ['regulatory & compliance guides', 'regulatory environment', 'risk management', 'compliance'],
  shield: ['risk management', 'regulatory environment', 'background checks', 'absolute discretion'],
  globe: ['global network map', 'international market map', 'rapid expansion', 'international markets', 'market entry strategies', 'global mobility', 'emerging markets', 'dubai, united arab emirates', 'international brokerage'],
  map: ['dubai skyline with residential', 'international market map', 'global network map', 'large mixed-use district', 'urban development', 'dubai, united arab emirates', 'dubai skyline', 'international markets'],
  heat: ['market intelligence', 'urban development', 'industry insights', 'market dynamics'],
  coins: ['investment strategy', 'wealth management', 'portfolio strategy', 'capital markets', 'investment vehicles', 'investment & asset management'],
  tag: ['compensation committee', 'compensation', 'benefits packages', 'investment strategy', 'negotiation skills', 'industry benchmarks'],
  people: ['board composition', 'managing team leadership', 'executive search', 'talent acquisition', 'team building', 'workforce diversity', 'leadership', 'senior specialist consultants', 'access to elite professionals'],
  org: ['executives meeting around a table', 'board composition', 'board-level succession', 'leadership development', 'organizational culture', 'developer & project leadership', 'construction leadership', 'professional networks'],
  gears: ['performance recovery', 'performance review', 'operational excellence', 'performance metrics', 'change management', 'programme controls'],
  network: ['proptech startup office', 'office interior with digital dashboards', 'proptech', 'property technology', 'talent acquisition tech', 'hiring technology', 'talent analytics', 'digital transformation'],
  screen: ['proptech', 'property technology', 'hiring technology', 'digital transformation'],
  lock: ['absolute discretion', 'regulatory', 'background checks', 'risk management'],
  crane: ['construction cranes', 'construction', 'urban development', 'construction leaders', 'construction firms', 'construction group'],
  factory: ['industrial expansion', 'industrial & warehouses', 'industrial & logistics', 'logistics operator'],
  warehouse: ['industrial & warehouses', 'industrial & logistics', 'logistics operator', 'industrial expansion'],
  truck: ['transport lines', 'logistics operator', 'industrial & logistics', 'industrial & warehouses', 'industrial expansion'],
  store: ['retail evolution', 'commercial agenc', 'luxury real estate', 'commercial assets'],
  bag: ['retail evolution', 'commercial assets', 'commercial agenc'],
  hotel: ['hospitality sector', 'holiday homes', 'luxury real estate'],
  bed: ['holiday homes', 'hospitality sector', 'luxury residential'],
  search: ['office interior with digital dashboards', 'evidence review', 'architectural detail', 'market intelligence', 'industry insights', 'market outlook', 'assessment', 'talent analytics'],
  calendar: ['first-quarter planning', 'onboarding', 'career progression', 'strategic hiring', 'career pathways'],
  timeline: ['transport lines', 'career pathways', 'market outlook', 'future trends', 'urban development'],
  megaphone: ['lead generation', 'recruitment marketing', 'employer branding', 'candidate engagement', 'professional networks'],
  cap: ['sales leaders coaching', 'professional development', 'mentorship', 'leadership development', 'industry certifications', 'executive coaching'],
  mic: ['q&a session', 'expert opinions', 'professional networks', 'executive coaching', 'market intelligence briefings'],
  leaf: ['sustainable development', 'future trends', 'innovation leaders', 'work-life balance', 'urban development'],
  blueprint: ['aerial perspective of glass', 'geometric glass tower', 'architectural detail', 'minimal boardroom architecture', 'large mixed-use district', 'high-end residential architecture', 'luxury developer', 'developer group', 'primary market', 'commercial developers', 'property developers', 'urban development'],
  compass: ['strategic consultancy', 'market entry strategies', 'strategic hiring'],
  target: ['executive discussing strategy', 'high-end office interior', 'rapid expansion', 'strategic consultancy', 'strategic hiring', 'investment strategy', 'tailored recruitment strategies'],
  briefcase: ['executive discussing strategy', 'high-end office interior', 'commercial real estate broker', 'strategic consultancy', 'senior specialist consultants', 'executive placement', 'permanent hiring', 'career consultation', 'confidential conversation'],
  trophy: ['best employers', 'success stories', 'proven impact record', 'elite placements'],
  checklist: ['leadership onboarding', 'evidence review', 'onboarding', 'screening', 'assessment', 'reference strategies'],
  bank: ['capital markets', 'wealth management', 'investment & asset management', 'investment professionals'],
  bulb: ['proptech startup office', 'innovation leaders', 'future trends', 'proptech', 'digital transformation'],
  star: ['luxury real estate', 'luxury residential', 'elite', 'best employers'],
  heart: ['sales agent meeting', 'client relationships', 'candidate experience', 'employee retention', 'empowering organisations'],
  channel: ['client acquisition', 'strategic partnerships', 'international brokerage', 'brokerage talent', 'professional networks'],
  swap: ['secondary market', 'negotiation skills', 'offer management'],
  handshake: ['executives meeting around a table', 'sales negotiator preparing', 'sales agent meeting', 'negotiation skills', 'offer management', 'strategic partnerships', 'success stories', 'international brokerage'],
  envelope: ['career consultation', 'register your profile', 'confidential conversation'],
  seal: ['executive discussing strategy', 'minimal boardroom', 'high-end office interior', 'absolute discretion', 'proven impact', 'strategic consultancy', 'boardroom'],
  pen: ['career development guides', 'market intelligence reports'],
  newspaper: ['q&a session', 'market intelligence reports', 'industry insights', 'market outlook', 'expert opinions'],
  funnel: ['sales negotiator and team leader', 'sales agent meeting', 'lead generation', 'sales leaders coaching', 'elite brokerage', 'negotiation skills', 'client relationships', 'tailored recruitment'],
  vault: ['wealth management', 'investment vehicles', 'investment & asset management'],
  wrench: ['property management team', 'property management', 'operational excellence', 'construction'],
  sofa: ['luxury residential', 'high-end residential architecture', 'luxury real estate'],
  cross: ['workforce diversity', 'specialised roles', 'professional development'],
  flask: ['specialised roles', 'innovation leaders', 'assessment'],
  eye: ['video interviewing', 'market intelligence', 'luxury real estate'],
  plane: ['global mobility', 'relocation', 'dubai skyline'],
  pin: ['dubai, united arab emirates', 'relocation', 'urban development'],
  ladder: ['career progression', 'career pathways'],
  repeat: ['onboarding', 'employee retention'],
  chair: ['luxury residential', 'luxury real estate'],
  puzzle: ['team building', 'strategic partnerships'],
  mic2: ['expert opinions', 'professional networks'],
};

const use = new Map(); // photo id -> times used overall
// Halves of "Role · Topic" labels that are safe for any real-estate / market content
const NEUTRAL = ['market intelligence', 'luxury real estate', 'property management', 'investment professionals', 'market outlook', 'industry insights', 'urban development',
  'residential trends', 'retail evolution', 'office reimagined', 'industrial expansion', 'hospitality sector', 'market dynamics', 'strategic partnerships', 'future trends',
  'innovation leaders', 'digital transformation', 'regulatory environment', 'international markets', 'emerging markets', 'capital markets', 'portfolio strategy',
  'investment vehicles', 'risk management', 'operational excellence', 'success stories', 'final perspectives', 'industry benchmarks', 'performance metrics', 'specialized property types'];
const pick = (motif, groupUsed, seed) => {
  const terms = T[motif] || T.briefcase;
  const hit = (txt) => terms.findIndex((t) => txt.includes(t));
  let best = null;
  for (const p of LIB) {
    let base;
    let penalty = 0;
    if (p.tier === 1) {
      base = hit(p.low);
      if (base < 0) continue;
    } else {
      const [role, topic] = p.low.split(' \u00b7 ');
      const hr = hit(role); const ht = hit(topic);
      if (hr < 0 && ht < 0) continue;
      base = Math.min(...[hr, ht].filter((x) => x >= 0)) + 2;
      // the half that did not match must at least be neutral, otherwise the photo was picked for an unrelated query
      if (hr < 0 && !NEUTRAL.some((n) => role.includes(n))) penalty += 40;
      if (ht < 0 && !NEUTRAL.some((n) => topic.includes(n))) penalty += 40;
      if (hr >= 0 && ht >= 0) base -= 2; // both halves fit
    }
    const cost = base * 3 + (p.tier - 1) * 4 + penalty + (use.get(p.id) || 0) * 9 + (groupUsed.has(p.id) ? 1000 : 0) + (((seed + p.id.length * 7 + p.id.charCodeAt(8)) % 7) / 10);
    if (!best || cost < best.cost) best = { p, cost };
  }
  if (!best) return pick('briefcase', groupUsed, seed);
  use.set(best.p.id, (use.get(best.p.id) || 0) + 1);
  groupUsed.add(best.p.id);
  return best.p;
};
const hash = (s) => { let h = 7; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; };

const slots = await loadSlots();
const groups = new Map();
const manifest = {};
for (const s of slots) {
  const gk = s.kind === 'card' ? `c|${s.section}|${s.category}` : `p|${s.section}|${s.category}|${s.item}`;
  if (!groups.has(gk)) groups.set(gk, new Set());
  const motif = (s.kind === 'card' && CARD_MOTIF[s.child]) || motifFor(s.section, s.category, s.item, s.kind === 'card' ? '' : s.child);
  const p = pick(motif, groups.get(gk), hash(s.key));
  manifest[s.key] = { src: url(p.id), id: p.id, credit: 'Unsplash', match: true, alt: p.alt, topic: motif };
}
fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 1));

// home / side-card editorial images, keyed by headline
const editorial = {};
const re = /plate\('((?:[^'\\]|\\.)*)'\)/g;
const unesc = (t) => t.replace(/\\u2014/g, '\u2014').replace(/\\u2019/g, '\u2019').replace(/\\'/g, "'");
const eg = new Set();
for (const f of ['src/mock.js', 'src/data/briefing.js']) {
  const src = fs.readFileSync(path.join(root, f), 'utf8');
  let m;
  while ((m = re.exec(src))) {
    const raw = m[1];
    if (editorial[raw]) continue;
    const motif = motifFor('', '', '', unesc(raw));
    const p = pick(motif, eg, hash(raw));
    editorial[raw] = { src: url(p.id), alt: p.alt, topic: motif };
  }
}
fs.writeFileSync(path.join(root, 'src/data/editorialPhotos.json'), JSON.stringify(editorial, null, 1));

const used = [...use.values()];
console.log(`assigned ${Object.keys(manifest).length} pages/cards + ${Object.keys(editorial).length} editorial cards from ${LIB.length} photos`);
console.log(`distinct photos used: ${use.size}; max reuse: ${Math.max(...used)}; avg: ${(used.reduce((a, b) => a + b, 0) / used.length).toFixed(1)}`);
