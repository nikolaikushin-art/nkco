# v196 — unique photo per service page

- Problem: 902 service pages shared a pool of 20 photos (repeats hidden with crop/zoom/tint).
- New `scripts/fetch-photos.mjs` (`npm run photos`): fetches open-licence photos from Pexels (+ Unsplash top-up), matched to each page's title, and writes `src/data/photoManifest.json`. One photo per page; a photo id is never used twice. Resumable, cached, rate-limit aware. Needs free keys: `PEXELS_API_KEY`, `UNSPLASH_ACCESS_KEY`.
- `src/lib/leafPhoto.js` now reads the manifest (no crop/tint tricks needed). Pages with no manifest entry fall back to the old pool and log a dev warning.
- `npm run check:photos` / `npm run build:strict` fail if any page lacks a photo or two pages share one (by id or URL).
- Photo credit (photographer, source page) is stored per photo in the manifest.
- Keys are read from `.env.local` (gitignored); just run `npm run photos`.
- Interim photos (no keys needed): until `npm run photos` fills `photoManifest.json`, each of the 902 service pages gets its own Lorem Picsum photo (open Unsplash-licensed library), id = the page's slot, so none repeat (verified: 902 slots, 902 unique URLs). A global error handler in `src/index.js` swaps any unused Picsum id (404) for a seeded photo. Manifest photos take priority automatically once generated.
- Featured mega-menu cards (190) now also get their own photo (no more shared pool + crop/tint). Interim: next unused Picsum photo after the 902 service pages; verified 1,092 slots = 1,092 unique URLs.
- `scripts/lib-slots.mjs` lists every slot (pages + cards); `npm run photos` and `npm run check:photos` cover all 1,092.
- Not yet covered: ~45 hand-placed editorial cards in `src/mock.js` / `briefing.js` (home, menu side cards, speakers) still use the 20 curated Dubai photos.
