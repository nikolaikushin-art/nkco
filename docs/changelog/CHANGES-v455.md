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
