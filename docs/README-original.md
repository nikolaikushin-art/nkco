# NK&CO website

React (CRA + craco + Tailwind). Deploys to Vercel as a plain Create React App project from the repo root.

- Build: `npm run build` (runs `scripts/prerender.js` afterwards: one static HTML page per route, sitemap.xml, robots.txt)
- Vercel: Framework Preset = Create React App (also set in vercel.json). Root Directory = `./`
- Env var (recommended): `SITE_URL` = your production domain, e.g. https://www.yourdomain.com (used for canonicals + sitemap)
- Page metadata lives in `src/lib/routeMeta.js`

## Deploy checklist
- Push to `main` on GitHub; Vercel builds automatically.
- Vercel Project Settings -> Node.js Version: set to 22.x (matches `engines`).
- No lockfile is committed: run `npm install --legacy-peer-deps` once locally and commit `package-lock.json` for reproducible builds.

## v153 — mega menu right two sections: all-serif Cormorant Garamond restored, headers bold (end of src/final.css)

## v21 — ultra old money
- `src/oldmoney.css` is the final style layer (imported last in `src/index.js`). Delete it and its import to return to v19.
- Buttons are matte and a shade darker (no gradients, no shine); the left rail of the main menu is plain serif rows with a darker active row.
- Page modules use different layouts (columns, ledger, index, engraved frames, split panels) with roman numerals instead of 01/02/03.
- v26: hero seal removed (two interlaced rosettes instead); rosettes added to every content section; header nav and Contact button resized to fit at all widths.
- v25: second mega-menu sidebar restyled like the left rail, in light grey.
- v24: guilloché rosettes, woven bands, lattice/chevron grounds, certificate corner brackets; logo 27px; contact calls to action enlarged.
- v23: buttons and active rows lifted to a mid graphite (#2e3237 / #2c3035); focus frame removed from the left rail.
- v22: home page rebuilt as centred heritage layout (seal, ornament rules, mat-framed plates, cross-ruled quadrants); header nav, footer, pricing, forms, mega menu detail, hero of inner pages all restyled.
- v21: one shared `Logo` (header, footer, panel) sized by `--nk-logo-h`; the right-hand slide-in panel is dark serif like the left rail.
