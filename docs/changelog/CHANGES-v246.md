# v246: three commercial columns replace Defence, Transition Fuels and Life Sciences
- Follow-up: "Marketing & Customer Growth" wrapped to two lines in the rail, so it is now "Marketing & Growth" (address /industries/marketing-and-growth).
- New file `src/data/industriesCommercial.js`. `industriesAdvanced.js` places its three columns in the same menu positions as the ones they replace, so the menu, side panel, descriptions, featured cards, page leads and pictures pick them up with no other change.
- Removed: Defence & Security, Transition Fuels & Minerals, Life Sciences & Agri-Food (and every industry and sub-sector page under them).
- Added (3 industries each, sub-sector counts vary 4 / 6 / 8):
  - **SMEs & Growth Companies**: Growth Capital & Funding (6), Owner-Managed Business Strategy (4), Expansion & Market Entry (8).
  - **Marketing & Growth**: Brand & Positioning (4), Performance & Digital Marketing (8), Sales & Customer Growth (6).
  - **Leasing & Asset Finance**: Equipment & Vehicle Leasing (6), Asset-Backed & Specialist Finance (4), Lessors, Portfolios & Residual Value (6).
- 9 industries, 52 sub-sector pages. Column names are 27 characters or fewer, so each should sit on one line in the rail.
- Checked: no label clashes across the whole menu (one clash, "Key Account Management", renamed "Strategic Account Growth"); production build succeeds; the new names are in the bundle and the removed ones are gone. Not checked: a visual browser pass (no browser available in this session).
- All copy is draft. No firms, figures or regulators are named. Leasing and funding pages describe sectors only and are not financial, legal or tax advice.
- Note: the v245 zip supplied for this round did not contain the earlier "4 / 6 / 8 sub-sectors plus 10 extra industries" work (`industriesExtra.js`), so this version is built on the plain v245 base.
- Follow-up (v246c): the Industries rail (13 categories) squeezed its rows to about 31px. Rows are now never smaller than the Expertise rows (10 categories); for lists of 11 or more the "Contact the office" line at the foot of the rail is hidden to make room, and the panel height stays fixed. Rule at the end of `src/megamenu-d.css`. Not checked in a browser.
- Follow-up (v246d): Industries rail made 48px wider (only lists of 11 or more categories) so "Real Assets & Infrastructure" and "Family Business & Holdings" fit on one line. Rule at the end of `src/megamenu-d.css`. Not checked in a browser.
- Follow-up (v246e): removed the Energy & Utilities column (Oil, Gas & Petrochemicals; Power & Renewables; Water & Environment; Energy Transition: 4 industries, 16 sub-sector pages). Industries rail now has 12 categories. Checked: no label clashes, production build succeeds, old names gone from the bundle.

# v247: every industry has 4, 6 or 8 sub-sectors
- Before: 30 of 55 industries had 4, and 10 had 5 or 7. Now all 55 are 4, 6 or 8: **18 have 4, 19 have 6, 18 have 8** (50 new sub-sector pages).
- The 10 originals with 5 or 7 got one more (5 to 6, 7 to 8). 12 of the 4-page industries were grown: 8 to 8 pages and 4 to 6 pages. The rest stay at 4.
  - To 8: Capital Markets & M&A, Construction & Development, Hospitals & Clinics, Digital Health, Staffing & Workforce Solutions, Retail & Shopping Destinations, AI Compute & Data Centres, Private Capital & Credit.
  - To 6: Supply Chain & Operations, Pharma & Medical Supply, Food & Beverage Brands, Project & Structured Finance.
- New copy is in `src/data/industriesGrow.js` (labels, one-line description and page lead for each page). `mock.js` adds the rows to the original industries; `industriesMore.js` adds them to the newer ones and registers the page leads.
- Checked: counts per industry, no label clashes across the whole menu, production build succeeds, new names are in the bundle. Not checked in a browser. New pages show the icon placeholder picture (like the other v244 to v246 pages) until photos are assigned.
- Follow-up (v247b): Industries rail narrowed a little: 284px to 296px (was 284px to 320px), never narrower than the longest names need so none wrap. Rule at the end of `src/megamenu-d.css`. Not checked in a browser.
- Follow-up (v247c): the Industries rail was still 232px on screens up to 1360px wide (an older breakpoint rule fixed it) so names wrapped to two lines there. It is now 284px at every screen size, with the right-hand column widths unchanged. Rule at the end of `src/megamenu-d.css`. Not checked in a browser.
- Follow-up (v247d): Industries rail trimmed from 284px to 262px (the names left about 45px of spare room); still one width at every screen size. Not checked in a browser; if any name wraps, raise the 262px values in the last rule block of `src/megamenu-d.css` (e.g. 268px).

# v248: stats strip under page heroes ("Named partner / UAE / Independent")
- Problem: on shorter screens a generic rule (`.pg-hero .pg-info .pg-metrics>div`, padding with 0 at the sides) removed the side padding, so the 2nd and 3rd figures sat against the divider lines.
- Fix (end of `src/pagesystem.css`, applies to `.pg-metrics-band`): first cell flush with the content edge, later cells padded from their divider, a short ink rule on the top hairline, figure in the serif, caption as a small tracked uppercase line. On screens up to 960px the strip stacks with horizontal rules instead of dividers.
- Preview image: `stats-strip-before-after.png`. It is drawn from the CSS values with the site fonts (Cormorant Garamond, Inter), not a browser screenshot. Not checked in a browser.
