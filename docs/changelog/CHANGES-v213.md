# v213: hero 11 (centred plaque, e.g. UAE Market Entry Strategy) rebuilt like the other heroes
- Before: full-bleed photo mostly covered by a floating card plus a second tall portrait photo with a white frame; the photo itself was barely visible.
- Now: one photo with the page rail inside it (as in every hero). Text panel flush at one side (14px gutters, same as the rail), stretched down to the rail, accent line on top, stats pinned to the bottom. The related page is the small 4:3 tile from hero 8 at the opposite top corner. Flip logic unchanged (panel left/right).
- Files: `PageSystem.jsx` (hero 11 markup: related link now passed into `fig()` and uses `.pg-inset`), `fullwidth.css` (v213 block at the end). No other hero touched.
- NOT verified in a browser (none in the sandbox). Check at 1024 / 1280 / 1440 / 1920 and mobile; the bottom margin (74px) assumes a one-row rail, with a taller margin below 1180px.
