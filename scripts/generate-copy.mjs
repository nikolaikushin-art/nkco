// Writes bespoke copy for every inner page (section, category, item and leaf) with Claude.  Run: npm run copy
//   ANTHROPIC_API_KEY=sk-ant-...  npm run copy            (resumable: pages already in src/data/copy/*.json are skipped)
//   npm run copy -- --only capabilities --limit 20         (try a few first)   |   npm run check:copy  (coverage + duplicate report)
// Output: src/data/copy/<section>.json, keyed by page path (section/category/item/child). PageSystem.jsx prefers it over the shared pools.
import fs from 'fs'; import os from 'os'; import path from 'path';
import { root } from './lib-slots.mjs';

const arg = (n) => { const i = process.argv.indexOf('--' + n); return i < 0 ? null : (process.argv[i + 1] && !process.argv[i + 1].startsWith('--') ? process.argv[i + 1] : true); };
const MODEL = process.env.COPY_MODEL || 'claude-sonnet-5-5';
const BASE = process.env.ANTHROPIC_BASE_URL || 'https://api.anthropic.com';
const OUT = (s) => path.join(root, 'src/data/copy', s + '.json');

async function loadNav() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'nkco-copy-'));
  fs.writeFileSync(path.join(dir, 'editorialStub.mjs'), 'export const editorialPhoto = (t) => t;');
  fs.writeFileSync(path.join(dir, 'topicPlate.mjs'), fs.readFileSync(path.join(root, 'src/lib/topicPlate.js'), 'utf8'));
  fs.writeFileSync(path.join(dir, 'mock.mjs'), fs.readFileSync(path.join(root, 'src/mock.js'), 'utf8').replace("'./lib/editorialPhoto'", "'./editorialStub.mjs'"));
  const m = await import(path.join(dir, 'mock.mjs')); fs.rmSync(dir, { recursive: true, force: true });
  return m;
}
const { NAV_ITEMS, slugify } = await loadNav();
const lbl = (x) => (typeof x === 'string' ? x : x.label || x.title);
const pages = [];
NAV_ITEMS.forEach((n) => {
  const d = n.data; const cols = d.columns || [];
  pages.push({ section: n.key, title: d.title, level: 'section', path: n.key, sibs: cols.map((c) => c.title), up: '' });
  cols.forEach((c) => {
    const cs = slugify(c.title); const items = (c.items || []).map((i) => (typeof i === 'string' ? { label: i, children: [] } : i));
    pages.push({ section: n.key, title: c.title, level: 'category', path: `${n.key}/${cs}`, sibs: items.map((i) => i.label), up: d.title });
    items.forEach((i) => {
      const is = slugify(i.label); const kids = (i.children || []).filter((k) => typeof k === 'string');
      pages.push({ section: n.key, title: i.label, level: 'item', path: `${n.key}/${cs}/${is}`, sibs: kids, up: `${d.title} / ${c.title}` });
      kids.forEach((k) => pages.push({ section: n.key, title: k, level: 'leaf', path: `${n.key}/${cs}/${is}/${slugify(k)}`, sibs: kids.filter((x) => x !== k), up: `${d.title} / ${c.title} / ${i.label}` }));
    });
  });
});

const read = (s) => { try { return JSON.parse(fs.readFileSync(OUT(s), 'utf8')); } catch { return {}; } };
const shards = {}; NAV_ITEMS.forEach((n) => { shards[n.key] = read(n.key); });
const save = (s) => fs.writeFileSync(OUT(s), JSON.stringify(shards[s]));

const S = (a, n) => Array.isArray(a) && a.length >= n && a.every((x) => typeof x === 'string' && x.length > 15);
const O = (a, n, ks) => Array.isArray(a) && a.length >= n && a.every((x) => x && ks.every((k) => typeof x[k] === 'string' && x[k].length > 8));
const valid = (c) => c && typeof c.lead === 'string' && typeof c.summary === 'string' && O(c.pillars, 3, ['title', 'desc']) && S(c.challenges, 4) && S(c.deliverables, 6) && S(c.outcomes, 4) && O(c.method, 5, ['k', 'v']) && O(c.scope, 6, ['t', 'd']) && O(c.cases, 3, ['title', 'body']) && O(c.faqs, 4, ['q', 'a']) && O(c.decide, 3, ['if', 'first']) && O(c.engagement, 3, ['name', 'scope', 'suits']);
const strings = (o) => (typeof o === 'string' ? [o] : Array.isArray(o) ? o.flatMap(strings) : o && typeof o === 'object' ? Object.values(o).flatMap(strings) : []);
const grams = (c) => { const g = new Set(); strings(c).forEach((s) => { const w = s.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(/\s+/); for (let i = 0; i + 6 <= w.length; i++) g.add(w.slice(i, i + 6).join(' ')); }); return g; };

const SYSTEM = `You write website copy for NK&CO, an independent, partner-led advisory, acquisitions, capital and partnerships firm headquartered in Dubai (DIFC), serving the UAE and GCC. Every page of the site must read as written for that exact service by someone who does the work. Rules: be specific to the page's own subject (its mechanics, decisions, documents, counterparties, UAE/GCC context where it genuinely applies); never reuse phrasing across fields; no statistics, percentages, prices, timeframes you cannot know, client names or guarantees; do not claim NK&CO is a regulated financial or legal adviser; British spelling; plain, confident sentences; no filler such as "holistic", "leverage", "synergy", "best-in-class", "tailored solutions". Illustrative engagements (cases) describe a type of client and situation, never a real client. Return ONLY JSON.`;
const SHAPE = `{"lead":"hero line, 1-2 sentences, max 40 words","summary":"2-3 sentences, max 65 words: what the work is, for whom, what it settles","pillars":[3 x {"title":"3-5 words","desc":"max 25 words"}],"challenges":[4 strings, max 22 words, real problems clients bring],"deliverables":[6 strings, max 12 words, concrete documents or decisions],"outcomes":[4 strings, max 24 words],"method":[5 x {"k":"stage name, 1-2 words, specific to this work","v":"max 22 words"}],"scope":[6 x {"t":"workstream, 2-5 words","d":"max 24 words"}],"cases":[3 x {"title":"max 8 words","body":"max 30 words, illustrative, no names or figures"}],"faqs":[4 x {"q":"a real buyer question","a":"max 45 words"}],"decide":[3 x {"if":"a situation the reader may be in, max 20 words","first":"the first move NK&CO would make, max 20 words"}],"engagement":[3 x {"name":"engagement type, 2-4 words","scope":"max 22 words","suits":"max 18 words"}]}`;

async function ask(p, note) {
  const user = `Page: ${p.title}\nLevel: ${p.level} page\nSits under: ${p.up || 'top level'}\nOther pages in the same group (do not overlap with them): ${p.sibs.slice(0, 14).join('; ') || 'none'}\n${note ? note + '\n' : ''}Write the copy as JSON in exactly this shape:\n${SHAPE}`;
  for (let a = 0; a < 6; a++) {
    const res = await fetch(`${BASE}/v1/messages`, { method: 'POST', headers: { 'content-type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY || '', 'anthropic-version': '2023-06-01' }, body: JSON.stringify({ model: MODEL, max_tokens: 3500, system: SYSTEM, messages: [{ role: 'user', content: user }] }) });
    if (res.status === 429 || res.status >= 500) { await new Promise((r) => setTimeout(r, 2000 * (a + 1))); continue; }
    if (!res.ok) throw new Error(`API ${res.status}: ${(await res.text()).slice(0, 200)}`);
    const j = await res.json(); const txt = (j.content || []).map((b) => b.text || '').join('').replace(/^```json|```$/gm, '').trim();
    return JSON.parse(txt.slice(txt.indexOf('{'), txt.lastIndexOf('}') + 1));
  }
  throw new Error('API busy');
}

if (arg('check')) {
  let have = 0, dup = 0, tot = 0; const seen = new Map(); const missing = [];
  pages.forEach((p) => { const c = shards[p.section][p.path]; if (valid(c)) { have++; strings(c).forEach((s) => seen.set(s, (seen.get(s) || 0) + 1)); } else missing.push(p.path); });
  seen.forEach((n) => { tot += n; if (n > 1) dup += n; });
  console.log(`pages ${pages.length}, with valid copy ${have}, missing ${missing.length}; strings shared between pages: ${tot ? Math.round((100 * dup) / tot) : 0}%`);
  if (missing.length) console.log('first missing:', missing.slice(0, 8).join('\n  '));
  process.exit(missing.length ? 1 : 0);
}

if (!process.env.ANTHROPIC_API_KEY) { console.error('Set ANTHROPIC_API_KEY first.'); process.exit(1); }
const only = arg('only'); const limit = Number(arg('limit')) || Infinity;
const todo = pages.filter((p) => (!only || p.section === only) && !valid(shards[p.section][p.path])).slice(0, limit);
const used = new Set(); Object.values(shards).forEach((s) => Object.values(s).forEach((c) => grams(c).forEach((g) => used.add(g))));
console.log(`${todo.length} pages to write with ${MODEL}`);
let done = 0, flagged = 0;
async function work(p) {
  let c, note = '';
  for (let t = 0; t < 3; t++) {
    try { c = await ask(p, note); } catch (e) { note = 'Previous reply was not valid JSON. Return only the JSON object.'; if (t === 2) { console.warn('FAILED', p.path, e.message); return; } continue; }
    if (!valid(c)) { note = 'Previous reply missed required fields or lengths. Follow the shape exactly.'; continue; }
    const g = grams(c); let hit = 0; g.forEach((x) => { if (used.has(x)) hit++; });
    if (hit / Math.max(1, g.size) < 0.12) break;
    note = 'Previous attempt reused wording from other pages. Rewrite every field with different wording and different specifics.';
  }
  if (!valid(c)) { console.warn('SKIPPED', p.path); return; }
  grams(c).forEach((x) => used.add(x));
  shards[p.section][p.path] = c; save(p.section); done++;
  if (!(done % 10)) console.log(`${done}/${todo.length}`);
}
const queue = [...todo]; await Promise.all(Array.from({ length: Number(arg('workers')) || 5 }, async () => { while (queue.length) await work(queue.shift()); }));
console.log(`done ${done}/${todo.length}. Run: npm run check:copy`);
