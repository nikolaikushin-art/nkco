# v455 · Hamburger menu rebuilt to match "Design D"

The left sidebar is gone. Desktop (>= 1180px) hamburger layout, top to bottom:
1. Section tabs (Capabilities ... Overview) with "Explore all <section>" on the right
2. Headings of the section as large serif tabs (Service Lines / Market Needs / Sector Expertise)
3. Items of the heading as small tabs, then the item title, service rows (photo, name, one line, arrow) and the featured insight on the right
4. Contact line (Contact the office / info@nkco.ae)

## Files
- `src/components/mega/MegaRail.jsx`: new burger branch (`if (!solo) { ... }`, classes `.nk-bm-*`). Same data as before (`groupsOf`, `menuKids`, `getFeatured`).
  The old sidebar markup further down is now unused (the narrow-screen top accordion still uses the rest of the file).
- `src/styles/megamenu-burger-v455.css` (new, imported last in `src/index.js`). Variables on `.nk-bm`.

## Behaviour changes
- Service rows open their page directly (no click-to-preview step).
- Rows are capped at 4 as in the design: `BM_MAX_ROWS` at the top of MegaRail.jsx (set to `Infinity` to show all).
- The section-level "Explore ..." link moved from the sidebar to the top-right; the per-heading link under the rows is not shown (not in the design).

## v456 · contact line in the top navigation
The line + "Contact the office ↗ / info@nkco.ae" now also closes the desktop top-navigation menus (Capabilities, Infrastructure, Opportunities, Expertise, Overview).
- `MegaRail.jsx`: `.nk-cx-foot` after `.nk-cx-acc` in the desktop top menu.
- `megamenu-burger-v455.css`: v456 block at the end.

## v457 · page preview restored in the hamburger menu
Click a service row once: the right column swaps the featured card for that page's preview (photo, title, lead, "Open the page"); click again to open it. Related pages list is not shown (not in Design D).

## v458 · preview card = boxed (option B)
Square corners, 1px hairline, darker fill, 3-line lead, "Back to featured" button (returns to the featured insight).

## v459 · preview card = text-led editorial card (option 5)
White top rule, serif title, 2-line lead, two related pages, Open the page + Back to featured. Selected row: white bar, no browser focus box on click.

## v460 · preview card now has a photo (3:1, white top rule) above the text; panel height unchanged between featured and preview.

## v461 · 2px white rule across the top of the featured photo (hamburger) and the intro photo (top nav).

## v462 · hamburger contact line always visible
On short browser windows (e.g. 561px high) the panel scrolls inside itself and the contact line used to fall below the visible area. It is now pinned to the bottom edge of the panel, and spacing is tighter under 760px window height.

## v463 · Expertise top-nav colour band now has the same 2px white top rule (its own CSS rule set border:0, so it needed a matching-specificity override).

## v464 · the white rule across the top of every menu image is now 1px (was 2px), one variable: --nk-img-rule at the end of megamenu-burger-v455.css. Applies to the hamburger featured + preview photos, the top-nav intro photo and the Expertise band.
