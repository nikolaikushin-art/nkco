# v264 — homepage and meta aligned to the NK&CO Advanced Brand & Business Architecture

Brand
- Positioning is now "Management Consulting & Business Value Advisory"; hero headline "Build. Structure. Grow. Capitalize."; promise "We help businesses become stronger, more scalable and better prepared for their future." (src/mock.js HERO, Hero.jsx)
- Hero button fixed (it pointed at a missing #report anchor): now "Talk to a partner" -> #contact, plus a "How we work" link -> #lifecycle. Page rail: Thesis · What We Do · Lifecycle · Privileges · The Firm · Briefing.
- Footer line, CTA copy, <title>/meta description (index.html, src/lib/routeMeta.js) updated to the new positioning.

New homepage sections (data in src/mock.js, styles in src/nkbrand.css, imported last in src/index.js)
- Thesis strip (InsightsBar.jsx): Build the business / Engineer its performance / Unlock its potential. Replaces the three real-estate insight cards.
- What we do (ServicesStrip.jsx): the five pillars — Build, Transform, Grow & Scale, Capital Readiness, Exit & Strategic Transactions. Replaces Advisory / Capital / Intelligence / Execution.
- Lifecycle.jsx: four phases x three stages (Formation & Validation · Structure & Performance · Growth & Replication · Strategic Value & Ownership).
- Philosophy.jsx: "Value creation before capitalisation", Company A vs Company B.
- OperatingModel.jsx: NK&CO as the coordinating centre with six specialist capabilities.
- Stats.jsx: heading and facts reworded (Partner-led · DIFC · Execution-oriented · Discreet).

Regulatory discipline
- Removed "Access to institutional capital, structured and syndicated across DIFC" and the "capital formation and complex transactions" CTA line from the homepage.
- Footer notice: management consulting scope, regulated work only via licensed partners, no guarantees of growth, funding, valuations or transactions. HAVE LEGAL REVIEW THIS WORDING.

Not changed
- The eight mega menus and all section/service pages (src/data/*). Several still describe capital-markets activity (DFM/ADX listings, bond issuance, syndicated lending, structured products, IPO, private placement) and the nav is still Capabilities / Infrastructure / Opportunities / ...
- Not build-tested here: no node_modules and no network in this environment. Changed files pass a syntax parse; run `npm install --legacy-peer-deps && npm run build` before deploying.
