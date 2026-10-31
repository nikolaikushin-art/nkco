# v271: Part XI master copy applied (new brand framework document)
- Hero: s.32 headline/lede/support and tagline "Advancing enterprise performance. Developing organisational capability. Creating enduring business value." (mock.js HERO).
- Build/Structure/Grow/Capitalise pillars: s.32 wording (mock.js PILLARS).
- Our Approach: s.33 wording in full (data/framework.js APPROACH).
- About / philosophy: s.34 and s.44 wording (mock.js PHILOSOPHY).
- Services: s.35 institutional introduction added above the five service lines (Services.jsx).
- Brand statement: s.44 definitive statement; closing line now the s.43 professional standard (mock.js BRAND_STATEMENT).
- index.html meta description aligned.
Not built with the full toolchain (npm install failed in sandbox); data files syntax-checked with node; Services.jsx change is plain JSX.

# v272: further framework sections added to the homepage
- s.32 narrative blocks "Strategy connected to execution" / "Developing the enterprise for what comes next" (before Services).
- s.20-22 financial visibility, scenario discipline, benefits measurement, risk, systems/data, AI (Disciplines section).
- s.39 outcome measures and attribution (Measures section).
- s.28 editorial themes and integrity (Perspectives section).
- Hero actions per s.32: Discuss your business / Explore our services / Discover our approach.
Not built with the full toolchain; run npm run build before deploying.

# v273: framework audit (s.19, 23.7, 26) applied across service pages
- StatBand now renders only stats flagged `verified: true`; ~40 unsubstantiated figures in richContent.js (EBITDA uplift, retention, uptime, "10K+ network", bank relationships etc.) are hidden until evidenced.
- "Unrivalled knowledge" superiority claims removed (mock.js, routeMeta.js, SectionPage.jsx).
- "Bulge-bracket" claims and placement "guarantee" FAQ replaced with scope/authorisation wording.
Still open (needs owner decision): ~1.3 MB of Dubai real-estate leaf copy (off-market, for-sale, yields, investors), navigation taxonomy, `#` links, podcast/expert provenance.

# v274: cut unsubstantiated content; menu and header names unchanged
- New src/lib/safeCopy.js: page copy making unsupported claims (off-market, for sale, yields, awards, rankings, %/x/AED/$ figures, "leading", "unrivalled", "senior partners", guarantees etc.) is not shown; pages fall back to the neutral framework wording. Applied to leaf/item/column leads (serviceContent.js), rich page modules (richContent.js, list entries and text), mega-menu row descriptions (MegaRail.jsx) and featured cards (megaFeatured.js, falls back to the section default).
- NK&CO Briefing: fabricated episodes, guests, "1.2M downloads", durations removed; the page now states no episodes are published yet. Podcast landing/episode pages deleted.
- Homepage: invented "Privileges" editorial cards removed.
- Footer: dead `#` links to non-existent publications removed.
- Navigation labels (Capabilities ... Overview) and all menu/column/item names unchanged.
- Prerender checked with the build script (2,356 pages); full webpack build not run in the sandbox.

# v276: hero actions cut to two — "Discuss your business" button plus one "Explore our services" link; "Discover our approach" removed (reachable via the Approach tab and menu). Hero spacing tightened.

# v277: white sections no longer flat/empty; sidebar white bar hardened
- Page sections (src/pages/PageSystem.jsx, src/styles/institutional-pages.css "v277" block): every second section (the white ones: Summary, Method, Scope, Questions) was white cards on a white page. They now use paper-filled surfaces with a steel top line (spine strip, workstream cards, question cards, summary aside), large steel numerals on Method, and the Summary gets a "What you receive" three-card row under the lede (from the page's deliverables) so the left column is no longer empty. Section headings are allowed 30ch so they take two lines instead of three.
- Mega-menu rail (src/styles/megamenu-d.css, "ACTIVE ROW BAR"): the white bar on the selected row is now 4px, drawn twice (gradient layer + inset box-shadow) so a later `background:` reset cannot remove it, and it stays on hover/focus. scripts/check-active-bar.mjs updated to require both layers (prebuild still fails if missing).
- Checked in headless Chromium at 2x: the bar is pure white from x=0 to x=4px on the active row (top-menu rail and burger accordion, also while hovered). Full webpack build not run in the sandbox (no network for npm install); CSS rendered with the real stylesheets, JSX transpile-checked.
