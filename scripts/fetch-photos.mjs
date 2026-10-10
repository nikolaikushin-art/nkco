// Builds src/data/photoManifest.json: one open-licence photo per service page, ONLY where the photo matches the page's title.
// Sources: Pexels (primary, same as the current images) + Unsplash (top-up). Both free API keys:
//   PEXELS_API_KEY=xxx  UNSPLASH_ACCESS_KEY=yyy  node scripts/fetch-photos.mjs
// Safe to re-run: API answers are cached in scripts/.photo-cache.json and already-assigned pages are kept.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CACHE = path.join(root, 'scripts/.photo-cache.json');
// Read keys from .env.local (gitignored) so `npm run photos` works with no extra typing.
const envFile = path.join(root, '.env.local');
if (fs.existsSync(envFile)) fs.readFileSync(envFile, 'utf8').split('\n').forEach((l) => { const m = l.match(/^\s*([A-Z_]+)\s*=\s*(.+?)\s*$/); if (m && !process.env[m[1]]) process.env[m[1]] = m[2]; });
const PEXELS = process.env.PEXELS_API_KEY;
const UNSPLASH = process.env.UNSPLASH_ACCESS_KEY;
if (!PEXELS && !UNSPLASH) { console.error('Set PEXELS_API_KEY and/or UNSPLASH_ACCESS_KEY (both are free).'); process.exit(1); }

import { loadSlots, MANIFEST_PATH as MANIFEST } from './lib-slots.mjs';
const leaves = await loadSlots(); // service pages + featured cards

const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, 'utf8')) : {};
const cache = fs.existsSync(CACHE) ? JSON.parse(fs.readFileSync(CACHE, 'utf8')) : {};
const used = new Set(Object.values(manifest).map((p) => p.id));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const STOP = /\b(and|the|of|for|in|to|a|an|services?|advisory|strategy|management)\b/gi;
const clean = (s) => s.replace(/&/g, ' ').replace(/[^A-Za-z0-9 ]/g, ' ').replace(STOP, ' ').replace(/\s+/g, ' ').trim().split(' ').slice(0, 5).join(' ');

async function pexels(q, page) {
  const k = `px|${q}|${page}`; if (cache[k]) return cache[k];
  if (!PEXELS) return [];
  const r = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(q)}&per_page=80&page=${page}&orientation=landscape`, { headers: { Authorization: PEXELS } });
  if (r.status === 429) { console.log('Pexels rate limit hit, waiting 10 min...'); await sleep(600000); return pexels(q, page); }
  if (!r.ok) { console.warn('Pexels', r.status, q); return []; }
  const j = await r.json();
  cache[k] = (j.photos || []).map((p) => ({ id: `px-${p.id}`, src: `${p.src.original}?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`, credit: p.photographer, page: p.url, alt: p.alt || '' }));
  fs.writeFileSync(CACHE, JSON.stringify(cache)); await sleep(400); return cache[k];
}
async function unsplash(q, page) {
  const k = `us|${q}|${page}`; if (cache[k]) return cache[k];
  if (!UNSPLASH) return [];
  const r = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(q)}&per_page=30&page=${page}&orientation=landscape&client_id=${UNSPLASH}`);
  if (r.status === 403 || r.status === 429) { console.log('Unsplash rate limit hit, waiting 60 min...'); await sleep(3600000); return unsplash(q, page); }
  if (!r.ok) { console.warn('Unsplash', r.status, q); return []; }
  const j = await r.json();
  cache[k] = (j.results || []).map((p) => ({ id: `us-${p.id}`, src: `${p.urls.raw}&crop=entropy&cs=srgb&fm=jpg&q=85&w=940`, credit: p.user.name, page: p.links.html, alt: p.alt_description || '' }));
  fs.writeFileSync(CACHE, JSON.stringify(cache)); await sleep(1200); return cache[k];
}

// RELEVANCE RULE: a photo is only accepted if its own description (alt text) contains a word from the page's title.
// No generic fallbacks ("abstract texture", "city skyline"...): a page with no matching photo keeps its topic plate
// (src/lib/topicPlate.js), which always matches the page. Photos are never reused across pages.
const ANCHOR = { capabilities: 'business', infrastructure: 'corporate', opportunities: 'investment', intelligence: 'analysis', industries: 'industry', expertise: 'professional', overview: 'business' };
const GENERIC = new Set(['dubai', 'uae', 'services', 'service', 'management', 'strategy', 'planning', 'advisory', 'design', 'programmes', 'programs', 'development', 'solutions', 'support', 'frameworks', 'systems', 'analysis', 'business', 'corporate', 'first', 'live']);
const stem = (w) => w.toLowerCase().replace(/(ing|ion|ions|ies|es|s)$/, '').slice(0, 6);
const keywords = (t) => clean(t).toLowerCase().split(' ').filter((w) => w.length > 3 && !GENERIC.has(w)).map(stem);
function relevantTo(p, l) {
  const alt = ` ${(p.alt || '').toLowerCase()} `;
  const own = keywords(l.child);
  const kws = own.length ? own : keywords(l.item);
  return kws.length > 0 && kws.some((k) => alt.includes(k));
}
function queries(l) {
  const a = ANCHOR[l.section] || 'business';
  return [`${clean(l.child)} ${a}`, clean(l.child), `${clean(l.item)} ${a}`].filter((q) => q.length > 3);
}

let done = 0; let skipped = 0;
for (const l of leaves) {
  if (manifest[l.key]) { done++; continue; }
  let pick = null;
  for (const q of queries(l)) {
    for (let page = 1; page <= 3 && !pick; page++) {
      for (const src of [pexels, unsplash]) {
        const hit = (await src(q, page)).find((p) => !used.has(p.id) && relevantTo(p, l));
        if (hit) { pick = hit; break; }
      }
    }
    if (pick) break;
  }
  if (!pick) { skipped++; continue; } // keeps its topic plate
  used.add(pick.id); manifest[l.key] = { ...pick, match: true }; done++;
  if (done % 25 === 0) { fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 1)); console.log(`${done}/${leaves.length}`); }
}
fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 1));
console.log(`Done: ${Object.keys(manifest).length} matched photos; ${skipped} pages have no relevant photo and keep their topic plate (this is intended).`);
