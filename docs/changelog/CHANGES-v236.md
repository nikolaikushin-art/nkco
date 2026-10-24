# v237
- Page heroes now fit the window height like the mega menu does (src/institutional-pages.css, end of file). Photo, tab rail and info card fill window minus header; text, spacing and related list scale with height; short windows hide extra related rows. Not built or opened in a browser here: please check once.

# v236: every developer in Intelligence > Developers is now unique
- Before: all 26 developers shared the same six rows (Company Profile, Current Projects, ...), the same descriptions and the same icons.
- Now each developer has its own six rows: own titles, own one-line description, own drawn icon (6 different icons per developer, a different icon set for each of the 26) and its own plate colour. 156 rows, 156 unique titles, 156 unique descriptions. The tab line under each developer name is unique too.
- Row order is still: profile, current projects, upcoming launches, delivered, news, buyer notes. Page addresses change because titles changed: `/intelligence/developers/<developer>/<new-row-slug>`. Nothing in the code or `public/` pointed at the old shared slugs.
- All content lives in one new file, `src/data/developers.js` (name, tab line, colour, six rows of [title, description, icon]). Edit that file to change anything; the menu, descriptions and icons all read from it.
- Other files: `src/mock.js` (menu now built from developers.js), `megaChildDescriptions.js`, `megaItemDescriptions.js`, `src/lib/leafPhoto.js` and `src/lib/topicPlate.js` (per-row icon and colour).
- Facts: only well-known public ones are used (project names such as Downtown, Palm Jumeirah, Town Square, Aljada; parent groups; DFM or ADX listing; brand tie-ups). CHECK them before publishing. For Topaz, Imtiaz, Tiger, Object 1, Reportage, Mered, Samana, Wasl and MAG the copy is deliberately light because I did not want to state unverified facts.
- Page body copy under each row is still generic, only the menu and icons are unique so far.
- NOT checked: no npm install or build was possible here, and nothing was opened in a browser. Files parse and the data was tested (156 rows, all unique, all described, longest description 79 characters). Please look at the menu once.
