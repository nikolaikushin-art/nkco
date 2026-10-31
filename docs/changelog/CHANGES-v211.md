# v211: near full-width, tighter heroes, language + search
Files: new `src/fullwidth.css` (loaded last), `src/lib/lang.js`, `src/components/HeaderTools.jsx`; edited `Header.jsx`, `src/index.js`, `public/index.html` (Arabic fonts).
- Width: header and every page use a 12-24px side margin (was 1560px max header / 1360px at 92% pages). Set by `--nk-pad` in fullwidth.css.
- Heroes: reverted to the exact v210 design (no hero rules in v211).
- Header: UAE-flag button (toggles English / Arabic: sets lang + dir=rtl, remembered) and magnifier button (site search over all nav pages, Ctrl/Cmd+K) after Contact Us.
- NOT done: Arabic translation of page copy. Header, nav labels, Contact Us and search UI are Arabic; page text stays English (add to `AR` in lang.js or a per-page dictionary).
- NOT verified: compiled (`DISABLE_ESLINT_PLUGIN=true craco build`; the existing eslint config errors on react-hooks rule, not from this change). No browser check of hero heights, RTL layout or mobile.
- v211b: header tools tightened (flag and search closer, nav+Contact shifted right); search verified in a browser at 1180/1240/1440 (opens, finds pages, Enter navigates).
- v211c reverted: flag 42x30 and search 30px are back at the original size.
- v211d: Cash-Generative SMEs (and every page that drew the narrow-column hero) now shows the split card: photo left about 60%, card right with crumbs, title, lead, button, stat rows. Narrow-column hero (hv10) retired; all split cards use the 60/40 ratio. Flag/search stay at the smaller size.
- v211f: page hero back to its original width (92%/1360px) and the 1.5:1 photo/card split from the approved screenshot; only section bodies use the near-full-width margin.
- v211g: centred-plaque hero (hv11) redesigned: background photo kept, text card left (right when flipped), related-page photo on the opposite side; pages with no related page fall back to the overlap card.
- v211h: page-hero titles use Newsreader (CBRE-like serif), regular weight; nav labels bold (600). Fonts load from Google Fonts (could not preview in the sandbox).
