// Checks every page/card has an image that matches it. Run: npm run check:photos (or npm run build:strict).
//  - every slot resolves to a topic motif or a manifest photo
//  - every manifest photo carries `match: true` (set only by fetch-photos.mjs after its relevance check) and is used once
//  - slots that only reached their section's generic default motif are listed so the rules can be extended
import fs from 'fs';
import os from 'os';
import path from 'path';
import { loadSlots, MANIFEST_PATH, root } from './lib-slots.mjs';

const slots = await loadSlots();
const m = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'nkco-plate-'));
fs.writeFileSync(path.join(tmp, 'topicPlate.mjs'), fs.readFileSync(path.join(root, 'src/lib/topicPlate.js'), 'utf8'));
const { motifFor, MOTIF_NAMES } = await import(path.join(tmp, 'topicPlate.mjs'));
fs.rmSync(tmp, { recursive: true, force: true });

const problems = [];
const seen = new Map();
let photos = 0; let plates = 0;
slots.forEach((s) => {
  const real = m[s.key];
  if (real) {
    photos++;
    if (!real.match) problems.push(`photo without relevance check: ${s.key}`);
    if (seen.has(real.id)) problems.push(`photo reused: ${s.key} == ${seen.get(real.id)}`); else seen.set(real.id, s.key);
  } else {
    plates++;
    const mo = motifFor(s.section, s.category, s.item, s.kind === 'card' ? '' : s.child);
    if (!MOTIF_NAMES.includes(mo)) problems.push(`no motif: ${s.key}`);
  }
});
console.log(`slots: ${slots.length}  matched photos: ${photos}  topic plates: ${plates}  problems: ${problems.length}`);
if (problems.length) { problems.slice(0, 20).forEach((p) => console.log('  ' + p)); process.exit(1); }
