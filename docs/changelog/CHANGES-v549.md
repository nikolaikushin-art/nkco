# v549 (+ two-line names): new photos for Enterprise Management and Business Brokerage
- Entry page (public/index.html: preload links + cards) and hero triptych (src/components/Hero.jsx) use two new photos from the site's photo library:
  - Enterprise Management: photo-1545239351-1141bd82e8a6 (office with performance dashboards and reporting screens)
  - Business Brokerage: photo-1517248135467-4c7edcad34c4 (executives reviewing documents around a table)
- Layout, crop, titles and links unchanged. Advisory & Consultancy photo unchanged.
- Hero three-practice band: every practice name now sits on two lines (Advisory & / Consultancy, Enterprise / Management, Business / Brokerage) at all widths (Hero.jsx `lines`, .nk4-tri-ln in hero-feature.css).
- Entry page (mobile): "&" stays on the same line as Advisory (one span: Advisory & / Consultancy).
- v552: entry page + hero columns 2 and 3 now both architecture photos (no documents or forms, no readable building signage): Enterprise Management photo-1486406146926-c627a92ad1ab (modern commercial towers), Business Brokerage photo-1488972685288-c3fd157d7c7a (mixed-use district with towers).
- v553: hero "Explore the practice" button uses the top-navigation colour (var(--nk-menu-top) = #1f2328), hover = menu body dark (colors-v499.css).
- v554: removed the in-page rail (Profile / Consultancy / Services / Brokerage / Approach / The Firm / Briefing) from the hero picture (Hero.jsx).
- v555: hero "View all podcasts" now uses the same CTA design as the mega-menu Explore links (2px line before the label; on hover the line slides away and an arrow draws out to the right).
- v556: band under the hero no longer repeats the three practice headlines. Each column now shows the practice name, its top three services (each links to its own page) and an Explore link to the practice.
  Advisory & Consultancy: Strategy & Corporate Direction; Operating Models & Processes; Transformation & Restructuring.
  Enterprise Management: General Business Management; Financial Management & Control; Executive Management & Reporting.
  Business Brokerage: Seller Representation; Buyer Identification; Transaction Coordination.
  Edit the TEASERS list at the top of src/components/Hero.jsx to change them.
- v557: band label shortened to "Executive Management & Reporting" (link unchanged).
- v558: entry page (public/index.html, site/public/index.html): the three dark practice panels (Practice / title / description / "Explore the practice") now stay open by default on desktop and tablet landscape (hover/tap behaviour unchanged on phones); the white "Explore the practice →" row under the photos is removed on all sizes; a dark services band like the hero's (practice name, three services, Explore) sits under the panels, aligned to the three columns. Links open the page after the cookie choice, like the panel links. Short windows (<= 820px tall) drop the grey one-line subtitle above each photo so the open panels fit. The site's own hero is unchanged.
- v559: hero band under the three panels: service names smaller (clamp 15-19px, was 17-23px), tighter row padding and band padding, Explore kept; entry page unchanged (colors-v499.css, end of file).
- v560: entry page: band label "Key services" (no repeated practice name), services same size as the hero band (15-19px), open panels back to half the photo height (auto only on windows <= 820px tall).
- v561: entry page: band label removed (names already shown above); band is just the three service lists + Explore.
- v562: hero photo-panel names a little smaller (clamp 17-26px, was 20-31px).
- v563: photos 2 and 3 changed on the entry page (public/index.html: preloads + cards) and the hero triptych (Hero.jsx): Enterprise Management photo-1511818966892-d7d671e672a2 (geometric glass tower), Business Brokerage photo-1486325212027-8081e485255e (glass and steel towers, aerial); both from the photo library (tier 1).
- v564: photos 2 and 3 chosen by the client from the library: Enterprise Management photo-1480714378408-67cf0d13bc1b, Business Brokerage photo-1666145256133-20d479501baf (entry page + hero triptych).
- v565: entry page only (hero unchanged): photos 1/2/3 = photo-1531586024505-b040066c2d5b, photo-1522202176988-66273c2fd55f, photo-1562595410-4859d718375e (public/index.html: preloads + cards).
