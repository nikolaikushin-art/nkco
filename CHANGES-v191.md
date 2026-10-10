# v191

- Mega menu / service pages: photos are now dealt out along one global order (menu, category, row) instead of a per-list hash. Result (tested on all 157 lists, 902 pages): no list repeats a photo, no two neighbouring lists meet on the same photo, and every page has a different rendering (photo + crop + zoom + mirror + tint). Row, preview and page hero still use the same photo.
- Limit: the project has 20 source photos (IMG in mock.js), so across 902 pages each photo appears many times, only with a different crop/tint. Add more entries to IMG and they are used automatically.
- Includes v190.
