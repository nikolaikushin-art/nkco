// Shared by fetch-photos.mjs and check-photos.mjs: every image slot on the site that needs its own photo.
import fs from 'fs';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const MANIFEST_PATH = path.join(root, 'src/data/photoManifest.json');
export { root };

export async function loadSlots() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'nkco-'));
  fs.writeFileSync(path.join(dir, 'mock.mjs'), fs.readFileSync(path.join(root, 'src/mock.js'), 'utf8'));
  fs.writeFileSync(path.join(dir, 'leafPhoto.mjs'), 'export const featuredPhoto = () => ({ src: "" });');
  const feat = fs.readFileSync(path.join(root, 'src/data/megaFeatured.js'), 'utf8')
    .replace("'../mock'", "'./mock.mjs'").replace("'../lib/leafPhoto'", "'./leafPhoto.mjs'");
  fs.writeFileSync(path.join(dir, 'megaFeatured.mjs'), feat);
  const { NAV_ITEMS } = await import(path.join(dir, 'mock.mjs'));
  const { FEATURED_SLOTS } = await import(path.join(dir, 'megaFeatured.mjs'));
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
  fs.rmSync(dir, { recursive: true, force: true });
  return slots;
}
