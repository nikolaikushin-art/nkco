# v200: inner pages rebuilt as a module library, like the employers page
- `src/pages/PageSystem.jsx` (rewrite) + `src/pagesystem.css` (rewrite). Replaces v199.
- 14 section modules: summary + aside, method spine (2 looks), architecture figure, engagement table, decision path, use-case cards, image click-cards, scope workstreams, timeline + proof strip, expandable questions, news cards, KPI grid, feature panels, closing band.
- Each page is seeded from its path: which 6-8 modules it gets, their order, surface tone, headline wording (3 variants each), verb rail, hero layout (3). Hero has metrics, a real photo with an "On this page" rail, and three related-page photo cards.
- Content: rich scope / method / stats / engagement / use cases (richContent.js), pools (serviceContent.js), leaf photos (photoManifest.json), related pages (relatedPages.js).
- Check run: all 1,100 inner routes server-render without error; each has a different module sequence.
