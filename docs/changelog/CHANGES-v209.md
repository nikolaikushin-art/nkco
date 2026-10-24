# v209: hero compositions
Files changed: `src/pages/PageSystem.jsx`, `src/pagesystem.css` only. Home hero untouched.

## What changed
- Seven new compositions (`pg-hv6`..`pg-hv12`) beside the four from v208 (0, 1, 2, 4). 3 and 5 stay retired.
- Picker: weighted per-page pick (`HERO_MIX`, `pickHero`) from a mixed hash of the page path, stable between renders.
- Secondary variation from `seed`: crop (`--op`), photo side, metrics layout (inline / ruled table / column / vertical), button style (solid / underlined link), breadcrumb position.
- Rail stays inside the photo in every variant (top edge in 6 and 8, where the bottom is taken). Plate (7) keeps the rail inside the photo, not under it.
- Photo first in the DOM, so on phones the title never sits above the photo. Hero is still a `<section>`.
- hv0 (v208): taller photo at 961-1280px, because long titles overflowed the photo at 1024.
- No new photos, colours or italics.

## Share by composition (1,100 routes, 1440px)
| hv | Composition | Pages | Share |
|---|---|---|---|
| 0 | Title on photo (v208) | 119 | 10.8% |
| 1 | Photo left + card (v208) | 141 | 12.8% |
| 2 | Card left + photo (v208) | 111 | 10.1% |
| 4 | Tall photo + card (v208) | 135 | 12.3% |
| 6 | Overlap card (new) | 76 | 6.9% |
| 7 | Framed plate (new) | 99 | 9.0% |
| 8 | Two photos (new) | 74 | 6.7% |
| 9 | Roman numeral (new) | 84 | 7.6% |
| 10 | Narrow photo column (new) | 95 | 8.6% |
| 11 | Full-bleed + stats column (new) | 91 | 8.3% |
| 12 | Pinstripe/ruled panel (new) | 75 | 6.8% |

New compositions: 594 pages (54.0%). Largest single composition: 141 (12.8%).

## Checks (Playwright, all 1,100 routes at 1440, 1024 and 390)
0 pages with: any hero element outside `.pg-wrap`, text over the rail, rail outside the photo, clipped h1, block overflow, caption outside photo, overlap of second photo/card with text, or horizontal scroll.
Not done: pixel contrast check for titles over photos (the scrim is unchanged from v203 and the new on-photo hero, hv11, uses a stronger top-to-bottom scrim). Screenshots use stand-in photos because the real ones are remote.

## Known pre-existing bug (not fixed)
`rels` is empty on every page: `relatedPages(NAV_ITEMS, ...)` reads `sec.columns`, but NAV_ITEMS keeps them under `sec.data.columns`. So v208 hv4 never shows its related-photo cards, and the rels-based modules (mosaic, split, scorecard, click, news) are never picked. hv8 uses its own correctly shaped lookup (`heroRel`). Global fix: pass `NAV_ITEMS.map(n => ({key: n.key, columns: n.data.columns}))`; it will change section modules on all pages.
