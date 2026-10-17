# v215: institutional page system (hero + every section)
Applies to every capability page (category, item and leaf pages built by `PageSystem.jsx`).
- ONE hero: the approved split card (photo about 60%, white card about 40% with steel top line, page rail inside the photo, three ruled stats). Always light, never mirrored, never zoomed, no second photo. The other seven compositions (caption, overlap, plate, inset, numeral, column, plaque) are no longer used.
- ONE section grammar: hairline rule, small-caps "I / Summary" label, Newsreader heading left, standfirst right. Replaces five random heading styles.
- Fixed order on every page: Summary, Services, Method, Use cases, Scope, Engagement, Questions, Signals, Contact. A module is skipped only if the page has no data for it. (Was: random modules in random order.)
- Sections alternate white / paper only (was six tones incl. dark, graphite, blueprint). Contact band keeps its dark photo.
- No random variants: one spine, one FAQ, one KPI layout; sticky headings and the verb strip are gone. One serif for all headings; flat cards with a uniform 2px steel line.
- Files: `PageSystem.jsx`, `lib/heroPlan.js` (`heroFor` now returns 1), `index.js` (imports new `institutional-pages.css`, loaded last). Old CSS is left in place and overridden.
- NOT verified in a browser (syntax-checked only). Check a category page, an item page and a leaf page at 1280/1440 and on mobile; the page rail now shows up to 9 tabs.
