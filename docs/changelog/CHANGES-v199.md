# v199: inner pages rebuilt in the employers-page system, NK&CO colours
- `src/pages/PageSystem.jsx` + `src/pagesystem.css` replace the hero and body of every section, category, item and leaf page. Pricing and the enquiry form are unchanged.
- Each page is seeded from its own path: seed picks 1 of 3 hero layouts, 1 of 3 surface rhythms, 1 of 4 module orders and the presentation of challenges, deliverables and indexes. The section picks its hero motif (7), offset by the seed.
- Content is bespoke per page: leaf lead, challenges, deliverables, outcomes and FAQs come from `serviceContent.js` pools, seeded per page. Related practices come from `relatedPages.js`.
- Tokens: night #121316, graphite #1b1d21, parchment #e9e8e5, paper #f4f3f0, silver #c4c8ce, steel #2b4a6b. Cormorant Garamond + Inter.
- Not run: `npm run build` (syntax checked with esbuild only).
