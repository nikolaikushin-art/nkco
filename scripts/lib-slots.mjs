// Shared by fetch-photos.mjs and check-photos.mjs: every image slot on the site that needs its own photo.
import fs from 'fs';
import os from 'os';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { register } from 'node:module';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const MANIFEST_PATH = path.join(root, 'src/data/photoManifest.json');
export { root };

// v249: the loader used to copy mock.js into a temp folder, which broke once mock.js started importing other files under src/data.
// It now imports the real source files through a small Node hook that adds missing ".js" endings, reads src files as ES modules,
// and swaps the two browser-only modules (editorialPhoto, leafPhoto) for stubs.
export async function loadSlots() {
  const hook = `
    import fs from 'node:fs'; import { fileURLToPath, pathToFileURL } from 'node:url';
    const STUB = { editorialPhoto: 'export const editorialPhoto = (t) => t;', leafPhoto: 'export const featuredPhoto = () => ({ src: "" });' };
    export async function resolve(spec, ctx, next) {
      const m = /(?:^|\\/)(editorialPhoto|leafPhoto)$/.exec(spec);
      if (m && spec.startsWith('.')) return { url: 'stub:' + m[1], shortCircuit: true };
      if (spec.startsWith('.') && ctx.parentURL && ctx.parentURL.startsWith('file:') && !/\\.[a-z]+$/.test(spec)) {
        const base = fileURLToPath(new URL(spec, ctx.parentURL));
        for (const ext of ['.js', '.json']) if (fs.existsSync(base + ext)) return { url: pathToFileURL(base + ext).href, shortCircuit: true };
      }
      return next(spec, ctx);
    }
    export async function load(url, ctx, next) {
      if (url.startsWith('stub:')) return { format: 'module', source: STUB[url.slice(5)], shortCircuit: true };
      if (url.startsWith('file:') && url.includes('/src/') && url.endsWith('.js')) return { format: 'module', source: fs.readFileSync(fileURLToPath(url), 'utf8'), shortCircuit: true };
      return next(url, ctx);
    }`;
  register('data:text/javascript,' + encodeURIComponent(hook));
  const { NAV_ITEMS } = await import(pathToFileURL(path.join(root, 'src/mock.js')).href);
  const { FEATURED_SLOTS } = await import(pathToFileURL(path.join(root, 'src/data/megaFeatured.js')).href);
  const slots = [];
  const seen = new Set();
  NAV_ITEMS.forEach((nav) => ((nav.data && nav.data.columns) || []).forEach((col) => (col.items || []).forEach((it) => (it.children || []).forEach((c) => {
    if (typeof c !== 'string') return;
    const key = [nav.key, col.title, it.label, c].join('|');
    if (seen.has(key)) return; seen.add(key);
    slots.push({ key, kind: 'page', section: nav.key, category: col.title, item: it.label, child: c });
  }))));
  FEATURED_SLOTS.forEach((f) => {
    const [, section, category, item] = f.key.split('|');
    slots.push({ key: f.key, kind: 'card', section, category, item: item || category, child: f.title });
  });
  return slots;
}
