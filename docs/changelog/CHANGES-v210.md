# v210: hero compositions, sibling-aware
Files changed: `src/pages/PageSystem.jsx`, `src/pagesystem.css`, new `src/lib/heroPlan.js`. Home hero untouched.

## What changed
- 11 compositions -> 8: 0 on-photo caption (stats band or column), 1 split card (absorbs 2, 4, 12), 6 overlap card (now sideways), 7 framed plate, 8 photo with inset related photo, 9 chapter numeral ("07 / 12"), 10 narrow column, 11 centred plaque.
- Picker (`heroPlan.js`): walks the nav tree in list order; each page excludes the last 3 pages' compositions, the previous sibling's and its parent's. Weighted with a running correction. Stable between renders.
- Parameters from seed: crop, zoom, photo side, ratio, panel texture, button style, breadcrumb position, plate word, metrics layout.
- Text on photos: stronger scrim (hv0) or solid plaque (hv11). Rail wraps instead of clipping; phones scroll it with a fade. Rail stays inside the photo.
- `rels` bug NOT fixed (needs your decision). `heroRel` still feeds hv8.

## Simulated shares (from the nav tree, 1,100 pages; not measured on renders)
hv0 13.9%, hv1 13.5%, hv6 11.6%, hv7 12.4%, hv8 12.3%, hv9 11.9%, hv10 12.4%, hv11 12.1%. Old pair (0+1) 27.4%.
Longest sibling run: 1 (v209: 3). Adjacent equal sibling pairs 0/901 (v209: 78/901).

## v209 baseline (measured, 1440, stand-in photos)
Old four 46.2%; 154 title/crumb/lead contrast fails, all hv0; 39 hv8 box overflows.

## NOT verified
- No v210 audit at 1440/1024/390 (placement, overflow, hscroll), no pixel contrast run, no deliberate-break control.
- Only hv0, 1, 6, 7 viewed rendered; hv8-11 not viewed. hv0 scrim may be heavier than needed.
- No before/after contact sheets. Real photos never tested (stand-ins only).
- Build compiled (`craco build`); nothing else checked.
