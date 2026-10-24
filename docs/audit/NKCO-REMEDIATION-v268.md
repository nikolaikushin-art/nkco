# NK&CO v268 — Remediation of v267 audit findings (13 Oct 2026)

Scope: source only. Not built with the full toolchain (syntax-checked with esbuild); live site not tested.

| ID | Change |
|---|---|
| F1 | Newsroom "advises on landmark hospitality transaction" replaced by "Introducing the NK&CO Business Lifecycle Framework" (mock.js, megaFeatured.js); "transactions/awards" removed from Press Releases blurb. |
| F2 | "Off-market", "Live mandate", "Deal Board" cards replaced by readiness-focused insight items; fabricated `featuredDeals` (AED tickets, yields) removed; Opportunities menu copy now states "Not a regulated investment service"; serviceContent "off-market, live and coming-soon" replaced. |
| F3 | Unsupported "Case study" card replaced by a clearly labelled Perspective item. |
| F5 | Pricing section no longer shows AED tiers, retainers or memberships; copy now "scoped to the problem", fee basis per Engagements table. `pricing.js` retained as internal reference only. |
| F8 | Non-existent reports/dashboards/studies (Q1 2026 Review, Live Dashboard, Compensation Study, Capital Flows Outlook) replaced by insight titles. Links remain `#` until articles exist. |
| F9 | Social stub links (`#linkedin` etc.) hidden until real URLs are supplied. |
| F10 | `<title>` now includes the descriptor. |

## Not changed (needs owner decision)
- F4/F6/F7: 8-item navigation taxonomy, Talent & Recruitment/Executive Search, developer profiles (`developers.js`) and the wider Dubai real-estate content (~1.3 MB in leafDescriptions, megaItemDescriptions etc., which still contain "off-market"/"businesses for sale" wording in leaf pages).
- F11–F13, remaining `#` content links, podcast/expert provenance, Client Portal/Careers targets.
- Legal/regulatory review of any remaining Opportunities and Transact wording.

## Addendum (v270)
Pricing tier bullets rewritten to match the strategy's boundaries: removed "investor/lender long-list", "data room", "bulge-bracket liaison", "syndication coordination", "Named MD", "vendor/buyer negotiation lead", "escrow architecture", recruitment "long-list"/"mandate" wording and "Sovereigns, family offices" audience. Replaced with readiness, modelling, coordination-with-authorised-professionals and operating-model wording drawn from Parts III and IV of the strategy document.
