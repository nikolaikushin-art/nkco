# v187

- Mega menu service list now fills the full panel height: rows share the free space equally, and the dark footer bar (e.g. "Explore Business Opportunities") is pinned to the bottom, level with the bottom of the right-hand card.
- With few rows (4) the rows get taller, with a bigger photo, title and arrow; with 5, 6, 8+ rows they shrink automatically. Under about 72px per row the descriptor line is hidden. Rows never go below 42px; beyond that the column scrolls as before.
- Includes v186 (line under title, plate numbers removed; pinstripe on filled arrow).
- Tested in a real browser with 2, 4, 8 and 9 rows at 1440x900, 1366x768 and 1280x720: the footer bar bottom always matches the right card bottom; panel height stays constant up to 8 rows (9+ rows grow it slightly, then the column scrolls past the max height). 2 rows become large panels (photo up to 150px high, title up to 38px).
