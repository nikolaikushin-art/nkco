# v198 — images now come from the BPR HTML photo library

**Latest change (supersedes the drawn plates below):** the line-drawing plates are no longer shown. All 1,092 pages/cards, 43 editorial cards, the home hero and the fallbacks now use real photos taken from `2 Best TEST BPR-Full BEST...EDGE-R2-KOKORO.html` (365 Unsplash photos, saved with their labels in `src/data/photoLibrary.json`).
- `npm run assign:photos` (`scripts/assign-photos.mjs`) matches each page to photos whose label fits its topic (topics come from the reviewed rules in `src/lib/topicPlate.js`), never repeats a photo inside one menu list, and writes `src/data/photoManifest.json` + `src/data/editorialPhotos.json`.
- Hero = "Dubai skyline across the water at sunset"; Amira Kassem's portrait = "Professional woman in business attire". London-only photos are excluded.
- `photo-assignments.csv` lists every page with the label of the photo it received, for review.
- The topic plates stay in the code only as a last-resort fallback if a photo URL is missing from the manifest.

**Hero + page rail:** the home hero image is now the white high-rise photo from the employers page (same 4:3 size as before). A "Page Rail" navigation sits over the top of the image (Latest, What We Do, Perspectives, The Firm, Contact) in NK&CO's ink colours with a white active underline; it scrolls smoothly to each section and highlights the one you are in. The 26 other new photos from that page were added to the library (391 total); the hero photo is reserved for the hero only. Photo use is now spread wider: 279 distinct photos, none repeated within a menu list.

**Rail colour:** the page rail is now solid #212327, the exact colour of the menu's Related Pages panel (it was a translucent dark that the light sky made look lighter). Added 10 more photos from the talent-placement page (401 total, 281 used).

**Full colour:** all grayscale / desaturate / sepia filters on photos are switched off (override at the end of `src/megamenu-d.css`), so menu thumbnails, previews, cards and the hero show true colours. One photo that rendered as a flat grey gradient (`photo-1579546928937`) is excluded from the library.

**Thinner rail:** the "Page Rail" label is removed and the bar is a single slim row (about 44px tall instead of 72px).

**Rail items:** the last tab "Contact" is replaced by "Briefing" (opens the NK&CO Briefing podcast page), since Contact Us is already in the header. To change it, edit the `RAIL` list at the top of `src/components/Hero.jsx`.

**Rail tuning:** rail is a touch taller (about 52px) and its background is back to the original lighter translucent dark (rgba(18,19,22,.86) with blur).

---
# v198 — every image matches its page (no more random photos)

- Problem: the interim images were random Lorem Picsum photos (leaf, dark cave, honey jar for "Dubai Pricing Indices", "Volume Trends", "Sentiment Signals" ...), and the photo fetcher ended its search with generic fallbacks ("abstract texture", "city skyline"), so unrelated pictures could still be picked.
- New `src/lib/topicPlate.js`: each page and featured card gets a drawn plate whose motif is chosen from the page's own words (title first, then item, category, section). Examples: Sales Transformation = funnel, Pricing Strategy = price tag, Channel Optimisation = branching channels, Customer Experience = heart, Key Account Management = star, Dubai Pricing Indices / Volume Trends = bar chart, Geographic Heatmaps = grid heatmap, Sentiment Signals = gauge, Rental Yield Trackers = rising line, Supply Pipelines = timeline, Cybersecurity = padlock, Warehousing = warehouse, Private Aviation = aircraft. ~60 motifs, ~150 keyword rules, all 1,092 slots covered. Deterministic, no network.
- `src/lib/leafPhoto.js`: Picsum removed. Order is now (1) a photo from `photoManifest.json` that passed the relevance check, else (2) the topic plate. The Picsum 404 handler in `src/index.js` is gone.
- `scripts/fetch-photos.mjs` (`npm run photos`): a photo is accepted only if its own description (alt text) contains a word from the page title. Generic fallback queries removed. Pages with no relevant photo keep their plate. Manifest entries carry `match: true`.
- `scripts/check-photos.mjs` (`npm run check:photos`, `npm run build:strict`): now checks that every slot has a motif or a relevance-checked photo, and that no photo is reused. Current result: 1,092 slots, 0 problems.
- Second pass, every other image on the site:
  - 47 hand-placed editorial cards in `src/mock.js` and `src/data/briefing.js` (menu side cards, deal cards, publications, home perspectives, podcast series and episodes) now use a plate chosen from the card's own headline via `plate(title)`. They used to share ~20 stock photos regardless of topic (e.g. a marina photo on "logistics assets", a portrait on "family office governance").
  - Featured mega-menu cards use their item's topic, with exact-title overrides (`CARD_MOTIF`) where the headline is more specific.
  - Kept as photos: the home hero (Dubai skyline, headline is the UAE real-estate review) and the three partner portraits (`exec1-3`, they are people cards).
  - Unchanged fallbacks (only shown if nothing else loads): the Dubai skyline in `SectionPage`/`MegaRail`, and the thumbs in `public/brand/thumbs`.
- Not verified: `npm run photos` could not be run here (no access to Pexels/Unsplash from the build sandbox), so the relevance filter is untested against the live APIs.
- To tune a page's picture, edit the keyword rules (`RULES`) in `src/lib/topicPlate.js`; to add a motif, add one entry to `M`.
