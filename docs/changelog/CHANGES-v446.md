# v446 · Mega-menu accordion rows made uniform

Menu display only. Routes, page copy, photos and descriptions still use the original labels.

- New `src/data/menuDisplay.js`: `MENU_MAX_KIDS` (5), `MENU_KEEP` (curated five where the first five were not the best), `MENU_LABELS` (42 shortened labels, 14-28 chars), automatic "and" -> "&".
- `MegaRail.jsx` (top wide accordion + burger accordion) and `mega/parts.jsx` (column accordion) read rows through `menuKids()`.
- `mega-intro-v362.css`: one line per row (ellipsis safety net, full text in tooltip).
- Rows per panel before: 2-11. After: 5 (75 panels), 4 (23 panels), 2-3 (4 Overview panels with too little content).
- Longest label before: 43 chars. After: 30.
- Accordion row text a little larger: clamp(13px, .93vw, 15px), line-height 1.3, 7px row padding (expertise 6px).
- Expertise: the 8 identical 'View all' links are now category-specific (Structure a Mandate, Plan an Off-Plan Launch, Prepare a Resale, Source Commercial Space, Run a Holiday Home, Optimise Rental Income, Launch a Development, Let a Property). Edit in STACK_CTAS in MegaRail.jsx.
- Overview: the 4 thin panels (2-3 rows) now have 4-5 rows, reusing existing pages/wording only (Life at NK&CO, Professional Standards, Confidentiality, Regulatory Boundaries). Please confirm the wording with the firm's compliance lead.
- Left-column pictures: Capabilities, Opportunities, Expertise (replaces the colour band; band stays as fallback) and Overview now use labelled library photos (MENU_IMAGES in menuDisplay.js). Infrastructure keeps its OMS image.
- Second row closer to the first: Expertise --cx-exp-stack 38px -> 18px; Infrastructure row-gap 28px -> 14px.
- Burger menu (sidebars unchanged): service rows use the same 5-row cap and short labels (photos/descriptions still follow the original page); the bottom bar shows the category's specific CTA (CATEGORY_CTAS in menuDisplay.js, Infrastructure from its group CTA) instead of 'View all in ...'. Expertise CTAs now live in one shared map (EXPERTISE_CTAS).
- Expertise order: Leasing & Lettings now comes before Commercial & Retail (menu data order in mock.js). Grid: row 1 = Agency, Primary, Secondary, Leasing; row 2 = Commercial, Holiday Homes, Property Management, Property Developers (STACK in MegaRail.jsx).
- Expertise: the item sets of Holiday Homes and Property Management are swapped (Holiday Homes = Short-Term Leasing, Guest Management, Occupancy Architecture, Revenue Optimisation, Platform Integration, Hospitality Standards; Property Management = Tenant Management, Maintenance Operations, Service Coordination, Financial Reporting, Lease Administration, Compliance Procedures). Photos, descriptions and featured cards were re-keyed with them. Page URLs for these 12 items change category (e.g. /expertise/holiday-homes/tenant-management -> /expertise/property-management/tenant-management); add redirects if old links are public. Property Management CTA is now 'Manage a Property'.
