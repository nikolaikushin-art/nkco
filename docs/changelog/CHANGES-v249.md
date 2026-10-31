# v249: Related pages always show three
- Problem: on windows shorter than 700px (laptops with browser bars) a CSS rule hid the 3rd related page, so pages showed 2. The picker itself returns 3 for all 1703 pages (checked by script).
- Fix: removed both `.pg-hrel li:nth-child(...)  display:none` rules in `src/institutional-pages.css`; on short windows the rows get tighter instead. Not checked in a browser.
- Bug check (v249): plain `craco build` failed ("Definition for rule 'react-hooks/exhaustive-deps' was not found" in Header.jsx and MegaRail.jsx). The two `eslint-disable-line` comments no longer name the rule; build now passes with the lint step on.
- Checked by script: 1703 pages, no route clashes, no empty labels, every page has 3 distinct related pages, none pointing at itself, all related links point to real pages. Prerender writes 2075 static pages.
- Known, not changed: `npm run check:photos` stops with ERR_MODULE_NOT_FOUND (its temp copy of mock.js imports `lib/topicPlate` without an extension under Node ESM). Dev tooling only; does not affect the site.
- Follow-up (v249b): the Real Estate Ventures category page (/opportunities/real-estate-ventures) had no related pages. It now shows Company Incorporation, CRM System Build and Agent Sourcing (`COL_REL` in `src/data/reRelated.js`, used in `src/lib/relatedPages.js`).
- Follow-up (v249c): `npm run check:photos` / `build:strict` crashed (stale loader). `scripts/lib-slots.mjs` now imports the real src files through a Node hook; check reports 2025 slots, 0 problems.
- Browser-checked (Chromium, 1440x900, 1280x650, 820x1100, 390x844): all section/category/item pages and a sample of service pages show 3 related pages, no JS errors, no sideways scroll, no overlap.

# v250: white vertical line on the active menu row
- The line on the left of the active rail row (e.g. "Setup & Conceptualisation") was an inset box-shadow on the button, which some browsers do not paint. It is now a real 3px white bar (`::before`) on the row. Rule at the end of `src/megamenu-d.css`. Checked in Chromium on Infrastructure, Industries, Expertise.

# v251: Related pages on the page hero: taller rows
- Rows are taller and the text a little larger: title 1.12rem to 1.2rem, row padding .6rem to .75rem (`.pg-hrel` rules in `src/institutional-pages.css`). On short windows the spacing scales down with the window height so all three rows still fit. The menu preview (`.nk-md-prev-rel`) is unchanged.

# v254: figures strip in the page hero card ("5-14 / 10+ / 100%")
- Cells touched their divider lines and captions wrapped unevenly. Now: short ink rule on the top hairline, first cell flush with the card text, later cells padded from their divider, serif figure, even balanced captions, equal-height dividers. Rule at the end of `src/pagesystem.css` (screens 961px and wider; smaller screens unchanged).

# v255: Related pages in the hero card: thinner rows, moved down to the figures strip
- Row padding .75rem to .58rem (short windows scale down the same way). The block now sits at the bottom of the card just above the figures strip, with a small gap (`src/pagesystem.css`, end; screens 961px and wider). Menu preview unchanged.
