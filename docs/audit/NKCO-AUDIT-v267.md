# NK&CO Institutional Strategy Alignment Audit — v267 (read-only)

Date: 13 Oct 2026. Scope: source zip `nkco-institutional-v267` only. **The live site https://nkco.vercel.app was not accessed**; no source file was modified. Scores are audit judgement, not an external benchmark. Scale: 0 none, 1 minimal, 2 partial, 3 substantial, 4 strong, N/A not assessable.

## A. Executive assessment
The **homepage** (Hero → Insights → Services → Approach → Value Thesis → Lifecycle → Dimensions → Methodology → Toolkit → Philosophy → Operating Model → Engagements → Segments → Positioning → Standards → Privileges → The Firm → CTA) is strongly aligned with the strategy: correct descriptor, tagline (British "Capitalise", 7/7 uses), all 10 stages, 5 service lines, 7-step methodology, regulatory boundaries and a candid integrity section.
The **rest of the site is not.** The 8-item mega-menu (Capabilities, Infrastructure, Opportunities, Intelligence, Industries, Privileges, Expertise, Overview) and ~1.3 MB of linked content describe a different business: a Dubai/GCC real-estate, executive-search, deal-board and market-intelligence house with AED price lists. That content contradicts the homepage's integrity commitments. Overall: **homepage aligned; site-wide positioning materially misaligned.**

## B. Inventory (exact wording from source)
Routes (App.js): `/`; `/intelligence/nk-co-briefing`, `/episode/:slug`, `/series/:slug`; catch-all `/:section[/:category[/:item[/:child]]]` rendered by SectionPage from data files (no static page list; pages are data-generated).
Header nav (NAV_ITEMS): Capabilities · Infrastructure · Opportunities · Intelligence · Industries · Privileges · Expertise · Overview.
Hero rail: Promise · What We Do · Approach · Lifecycle · Engage · Privileges · The Firm · Briefing.
Hero: eyebrow "Management Consulting & Business Value Advisory"; title "Build. Structure. Grow. Capitalise."; CTA "Talk to a partner". Closing CTA: "Start with a clear view of your business." → `mailto:info@nkco.ae`.
Capabilities columns: Business Deployment · Enterprise Consulting · Corporate Advisory · Talent & Recruitment (+ more).
Utility links: Contact Us, Careers, Alumni, Media Enquiries, Client Portal. Social: LinkedIn, X, YouTube, Instagram.
Limitations: live site, mobile rendering, link crawl, contrast and Lighthouse were not tested; `src/data/copy/opportunities.json` (410 KB) and `leafDescriptions.js` (227 KB) were sampled, not read in full.

## C. Scorecard
| Area | Score | Evidence / gap |
|---|---|---|
| Brand identity & positioning | 3 | Homepage exact; `<title>` is only "NK&CO"; mega-menu copy ("unrivalled knowledge of Dubai", "institutions") drifts. |
| Institutional credibility | 2 | Standards/Positioning sections honest; fabricated-looking proof items elsewhere (G). |
| Business Lifecycle Framework | 4 | All 10 stages in 4 phases; STAGE_OUTPUTS; Dimensions. Stage 09 sits under Phase III while numbered after 08 — intentional but visually non-sequential. Not reflected in nav. |
| Five service lines | 3 | Exact names/subtitles on homepage; absent from nav, which uses a different taxonomy. |
| Engagement methodology | 4 | 7 steps present with substance. |
| Target-market clarity | 3 | 7 segments; initial focus stated as a hypothesis (good). Nav targets real-estate/institutional audiences instead. |
| Implementation orientation | 3 | Proposal structure, governance list, Operating Model. |
| Commercial & financial discipline | 2 | Engagements table states fee basis; but AED fixed price tiers across all services conflict with "scoped" model. |
| Professional integrity | 1 | See G; homepage 4, other sections 0–1. |
| Visual identity | 3 (unverified live) | Consistent system; stock imagery reuse likely (UNSPLASH/Pexels, `editorialPhoto` auto-assignment by headline). Not visually tested. |
| Usability / technical | 2 | 21+5 `href:'#'` placeholders; social links `#linkedin`, `#x`…; Client Portal/Careers/Alumni targets unverified. |

## D. Lifecycle mapping
| Stage | Evidence | Coverage | Priority |
|---|---|---|---|
| 01 Validate | LIFECYCLE, STAGE_OUTPUTS, Build service items | Strong | Low |
| 02 Build | Same + "Company-in-a-Box" flagship | Strong | Low (Company-in-a-Box has no explanatory content found) |
| 03 Structure | Lifecycle, Operating Model, service line B | Strong | Low |
| 04 Perform | Lifecycle, Toolkit | Substantial | Low |
| 05 Grow | Lifecycle, service line C | Strong | Low |
| 06 Scale | Lifecycle, service line C | Substantial | Low |
| 07 Capital Readiness | Strong disclaimers ("does not determine whether an external party will provide financing") | Strong | Low |
| 08 Capital Strategy | Boundary language present | Strong on homepage | **Critical elsewhere** (Opportunities "Live mandate… seeking growth capital") |
| 09 Expand | Lifecycle, line C | Substantial | Medium (not distinct from Grow & Scale in nav) |
| 10 Transact | Boundary language present | Strong on homepage | **Critical elsewhere** ("advises on landmark hospitality transaction") |

## E. Service lines
A Build — adequate; Company-in-a-Box named but not described. B Structure & Transform — adequate. C Grow & Scale — adequate; growth vs scale distinction present in items. D Capital Readiness & Strategy — exemplary wording ("Not a regulated investment service"). E Exit & Strategic Transactions — adequate on homepage. **None of the five is a navigation entry**; the nav's Business Deployment / Enterprise Consulting / Corporate Advisory / Talent & Recruitment taxonomy competes with them (adds Executive Search, Divestment Advisory, DIFC/ADGM structuring, Franchise & Licensing, JV entry, Portfolio Strategy, Asset Allocation — several imply regulated/legal/specialist services).

## F. Cross-page consistency
1. Two incompatible taxonomies (5 lines/10 stages vs 4 columns/8 nav items). Genuine inconsistency.
2. Positioning: homepage "owner-managed SMEs, initial focus a hypothesis" vs nav "institutions, family conglomerate, GCC mid-market, private credit".
3. Pricing: Engagements "scoped to the problem" vs `pricing.js` Standard/Enterprise "starting from" AED tiers (e.g., Business Deployment 155,000 / 540,000 / 25,000 monthly) "calibrated to Dubai market benchmarks".
4. Geography: homepage is jurisdiction-neutral; mock.js has 43 Dubai/GCC/DIFC/ADGM references.
5. Terminology: "NK&CO" 227× plain and 24× `&amp;` (HTML-encoded, harmless). Tagline spelling consistent.

## G. Integrity & credibility review
| # | Location | Item | Class | Evidence needed |
|---|---|---|---|---|
| 1 | mock.js S.overview, Newsroom card | "NK&CO advises on landmark hospitality transaction in Dubai" | Unsupported / potentially misleading | Client consent, mandate, regulatory status. Contradicts Standards: "case studies carry permission". |
| 2 | S.capabilities | "A GCC family conglomerate reorganises around three strategic verticals" (tag: Case study) | Unsupported | Real, permissioned case. |
| 3 | S.opportunities | "Off-market" portfolio; "Live mandate: boutique hospitality group seeking growth capital"; "Institutional Deal Board — Q1 2026" | Potentially misleading / professional review | Licence (e.g., broker, securities/arranging) and mandate proof. Conflicts with "Not a regulated investment service". |
| 4 | OPPORTUNITIES_MENU | "live investments, businesses for sale"; "Start a real estate company… ventures you can start, join or back" | Potentially misleading | Regulatory review (real-estate brokerage/RERA, investment promotion). |
| 5 | S.intelligence | "UAE Real Estate Market Review — Q1 2026", "Live Dashboard", "UAE C-Suite Compensation Study 2026" | Unsupported | Existence of reports/data. Links are `#`. |
| 6 | developers.js | Profiles of named developers (e.g., Topaz Developers) with "active sites / upcoming / delivered"; file comment itself says "Check them before publishing" | Unclear; third-party factual claims | Fact-check, fair-use/endorsement risk. |
| 7 | serviceContent / Capabilities | "from mandate award… revenue-generating activity begins"; Executive Search, Succession planning, Leadership assessment | Unclear role boundaries | Whether delivered in-house or via partners; recruitment licensing. |
| 8 | Pricing | AED price tiers, "calibrated to Dubai market benchmarks" | Unsupported benchmark claim | Source of benchmarks. |
| 9 | Footer/Privileges | "Awards & Recognition" taxonomy (Industry Awards, Best Places to Work) | Unsupported if populated | Actual awards. |
| 10 | Privileges podcasts | "Capital Conversations", Private-credit episode, dated Mar 2026, speakers/experts (MegaExperts) | Unclear provenance | Whether episodes/experts exist; permission for named people. |
| 11 | Hero/Standards | Hero "Talk to a partner"; Operating Model "managed specialist network" | Supported but unverified | Evidence the named specialist network exists. |
Positive: homepage disclaimers and Standards ("outcomes are never guaranteed") are exemplary; no outcome guarantees found in homepage copy. Keyword scan found no literal "guarantee" claims of results in the sampled homepage files.

## H. Technical & visual
Confirmed in source: placeholder `#` links (mock.js 21, megaReports.js 5); social links are fragment stubs; `<title>` static "NK&CO" (RouteSeo exists per route — not verified live); external hot-linked stock images (Pexels/Unsplash) — availability and licence dependency; skip-link and aria-label present (good); 79 changelog files and 11 CSS files suggest style layering (maintenance risk). Needs testing: mobile layout, mega-menu keyboard access, contrast, image/headline relevance, Client Portal/Careers targets, Vercel route 404 fallback (vercel.json not examined in depth), the prerender script output.

## I. Findings register
| ID | Location | Evidence | Requirement | Issue | Sev | Future consideration | Conf |
|---|---|---|---|---|---|---|---|
| F1 | mock.js `S.overview` | Newsroom "advises on landmark hospitality transaction" | Responsible representation | Unsupported transaction claim | Critical | Verify or retire via authorised phase | High |
| F2 | mock.js `S.opportunities`, OPPORTUNITIES_MENU | Off-market, live mandate, businesses for sale, deal board | Regulatory boundaries; Stage 08/10 | Implies brokerage/capital-arranging | Critical | Legal review | High |
| F3 | mock.js `S.capabilities` | "Case study" with no provenance | Case studies carry permission | Unverified proof | Critical | Evidence file | High |
| F4 | Nav (NAV_ITEMS) | 8 items unrelated to 5 lines/10 stages | Core service architecture | Competing taxonomy | High | Decide governing architecture | High |
| F5 | pricing.js | AED tier prices site-wide | Scoped engagements; Engagements note | Contradicts model; unsupported benchmark | High | Decide pricing display policy | High |
| F6 | Capabilities / Talent & Recruitment, Executive Search | Services outside framework | Positioning | Dilutes identity; recruitment licensing | High | Strategic decision | Med |
| F7 | developers.js, Industries real-estate | Third-party developer profiles | Positioning, credibility | Off-strategy; unverified facts | High | Fact-check or defer | Med |
| F8 | Intelligence menu | Named reports/dashboards with `#` links | Credibility | Non-existent assets promised | High | Verify existence | High |
| F9 | Footer/Header utilities | Social `#` stubs; Client Portal | Usability | Dead/placeholder links | Medium | Link audit | High |
| F10 | `public/index.html` | `<title>NK&CO</title>` | Descriptor consistency | Title omits descriptor (descriptor in meta only) | Low | Consider | Med |
| F11 | Lifecycle | Stage 09 placed in Phase III | Lifecycle clarity | Non-sequential numbering | Low | Explain on page | Med |
| F12 | SERVICES | Company-in-a-Box flagship un-described | Service line A | Thin substantiation | Medium | Define scope | Med |
| F13 | Hot-linked stock images | External dependency | Visual/technical | Availability, relevance unverified | Medium | Live test | Med |

## J. Conclusion
1. Reflects strategy? Homepage yes; site as a whole partly. 2. Coherent institution? Homepage yes; nav and sub-pages project a different firm. 3. Lifecycle represented? Yes, strongly (homepage only). 4. Service lines aligned? Content yes, navigation no. 5. Differentiated/credible? Differentiated tone on homepage; credibility undermined by F1–F3. 6. Integrity concerns? Yes, F1–F3 and F2 especially (regulatory boundary). 7. Top five: F2, F1, F3, F4, F5. 8. Preserve: Hero/descriptor/tagline, Lifecycle, Methodology, Toolkit, Engagements note, Segments focus hypothesis, Standards, Stage outputs and capital disclaimers. 9. Unverified: live site, specialist network, any real client work, licences, all named reports/episodes/experts, image licensing, mobile/accessibility. 10. Future phase (separate authorisation): decide which taxonomy governs; legal review of Opportunities/Transact claims; evidence file for every proof item; decide whether pricing and real-estate/developer content belong; link audit.

## K. Preservation register (unchanged in this audit)
All source files in this zip, including route patterns, page names, nav labels (above), section headings (Section B / homepage order), titles, visual identity (11 CSS files), layouts, data files, images, and functionality. This audit only adds `docs/audit/NKCO-AUDIT-v267.md`.
