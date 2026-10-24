# v201: bespoke copy for every page (generator + wiring)
Measured on v200: 85% of the text blocks on inner pages were shared with at least one other page (copy came from 11 category pools). Layout was already unique per page; wording was not.
- `scripts/generate-copy.mjs` writes unique copy for all 1,100 pages (section, category, item, leaf) with Claude: lead, summary, 3 pillars, 4 challenges, 6 deliverables, 4 outcomes, 5 method stages, 6 scope workstreams, 3 illustrative cases, 4 FAQs, 3 decision paths, 3 engagement types (no prices).
  - `ANTHROPIC_API_KEY=... npm run copy -- --only capabilities --limit 20` to try a few; `npm run copy` for everything. Resumable. `COPY_MODEL` picks the model.
  - Each page is written knowing its sibling pages, and is regenerated if it reuses wording already used elsewhere.
  - `npm run check:copy` reports coverage and the share of strings repeated between pages.
- Output goes to `src/data/copy/<section>.json` (empty `{}` files are included). `PageSystem.jsx` loads the section file on demand and uses a page's copy when present; otherwise it falls back to the shared pools.
- Checked: all 1,100 routes render with and without copy. The generator was tested against a local stub API only; it has not been run against the real API.
