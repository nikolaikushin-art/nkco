# v188

- Mega menu panel now has a FIXED height: 612px (548px under 1360px width, never more than the window allows). It no longer grows or scrolls when a section has many services or many left-hand entries.
- Service rows share the free height: 2 rows become big panels, 4 rows are roomy, 8-12+ rows shrink automatically (photo, title and arrow scale down; descriptor hidden under ~72px per row). Rows go down to 24px each (about 15 rows) before anything is clipped.
- Left dark list: when a section has many entries (e.g. Expertise, 10) its rows shrink to fit instead of making the panel taller.
- Panel content no longer slides in with a vertical movement (fade only), so no scrollbar can flash while it opens.
- Footer bar is pinned to the bottom of the list (12px above the panel bottom, level with the preview card).
- Includes v186 and v187.
- Tested in a real browser: every section, category and tab (145 states) at 1440x900, 1366x768, 1280x720 and 1920x1080: constant panel height, no scroll, no overflow; plus 2 to 15 rows.
