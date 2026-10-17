# v234: Developers added to Intelligence
- **New left-rail row "Developers"** in the Intelligence mega menu, above NK&CO Briefing.
- **Top tab strip = developers** (scrolls sideways like the other tabs): Topaz Developers (first), Emaar, DAMAC, Nakheel, Sobha Realty, Meraas, Dubai Properties, Danube Properties, Azizi Developments, Binghatti, Ellington Properties, Omniyat, Select Group, Aldar.
- **Rows under each developer** (where "A Market Built on Property" sits for the Dubai Case): Company Profile, Current Projects, Upcoming Launches, Delivered Projects, Latest News, Buyer and Investor Notes. Bar at the bottom: "View all Developers".
- Pages open at `/intelligence/developers/<developer>/<row>`. They use the generic page layout until real copy is written per developer (`src/data/copy/intelligence.json`).
- Files: `src/mock.js`, `src/data/megaChildDescriptions.js`, `src/data/megaItemDescriptions.js`, `src/data/megaFeatured.js`.
- NOT checked in a browser or built (no npm install here). Developer list, names and spelling are a first draft; edit the `mk('...')` lines in `INTELLIGENCE_MENU`.
