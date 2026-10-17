// Fails the build if the bar on the active mega-menu rail row goes missing (it has been lost in earlier edits).
// v374: the bar is thin (2px, --nk-nav-line-w) and its colour comes from --nk-nav-line (default white), so check for both layers by shape, not by literal colour.
import { readFileSync } from 'node:fs';
const css = readFileSync(new URL('../src/styles/megamenu-d.css', import.meta.url), 'utf8');
const GRAD = String.raw`linear-gradient\((?:[^()]|\([^)]*\))*\)\s*left top\s*\/\s*(?:var\(--nk-nav-line-w,\s*2px\)|\d+px) 100%`;
const SHADOW = String.raw`box-shadow:\s*inset (?:var\(--nk-nav-line-w,\s*2px\)|\d+px) 0 0 (?:var\(--nk-nav-line[^)]*\)|#fff)`;
const need = [
  new RegExp(String.raw`\.nk-md-cat\[data-active="true"\][^{]*\{[^}]*` + GRAD),
  new RegExp(String.raw`\.nk-md-secs--burger \.nk-md-cat\[data-active="true"\][^{]*\{[^}]*` + GRAD),
  new RegExp(String.raw`\.nk-md-cat\[data-active="true"\][^{]*\{[^}]*` + SHADOW),
  new RegExp(String.raw`\.nk-md-secs--burger \.nk-md-cat\[data-active="true"\][^{]*\{[^}]*` + SHADOW),
];
const bad = need.filter((r) => !r.test(css));
if (bad.length) { console.error('check-active-bar: bar missing on the active rail row in src/styles/megamenu-d.css (search "ACTIVE ROW BAR").'); process.exit(1); }
console.log('check-active-bar: ok');
