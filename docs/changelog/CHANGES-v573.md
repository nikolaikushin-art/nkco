# v573 · Rich home page (everything under the hero) and institutional footer
- Hero, header and menus unchanged. New files: src/components/HomeRich.jsx, src/data/homeRich.js, src/styles/home-rich.css (imported last in src/index.js).
- App.js Home now renders: HxProfile, HxPractices, HxCompare, HxExplore, HxOMS, HxScope, HxMethod, HxEngage, HxSpotlight, HxInsights, HxStandard, then CTA (HxContact). Old HomeSections.jsx / home-sections.css are kept but no longer used on the home page.
- Footer.jsx rewritten: closing band, six-section sitemap from the menu data, proposed licence references, regulatory note, legal line. Cookies button (data-nk-cookies) kept.
- All counts (areas, topics) are computed from the menus; no new claims. Square edges everywhere; palette and fonts are the hero's.
- src/data/homeRich.js HOLD_BACK lists menu areas (recruitment, real estate) kept out of the home/footer previews because the footer note says they are separately confirmed. Edit to change.
- Mailto form in the contact section sends the briefing request to info@nkco.ae; wire a real endpoint when available.
