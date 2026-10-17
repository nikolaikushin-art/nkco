# v241: Privileges menu: descriptions and headings no longer too long
- Problem: in the Privileges mega menu every row description was cut off with "..." and some titles/headings were too long for their row.
- Descriptions: all 246 menu lines are now written by hand, one short complete sentence each (longest 61 characters, none cut with an ellipsis). They live in the new file `src/data/privilegesMenuLines.js`, keyed by piece title. Edit them there.
- `src/data/privileges.js`: PRIV_CHILD_DESC reads from that file. A piece with no entry gets a clean automatic trim (at a comma or a word, never "..."), so new pieces still fit.
- Page copy is NOT changed: the longer descriptions still appear on each piece page, in the page lists and in search/SEO.
- Headings and row titles (`MegaRail.jsx`, `megamenu-d.css`, Privileges menu only): they stay on one line and step down in size when long (section headings over 30 characters, row titles over 38 and over 46). Ellipsis is only a last-resort safety net, and the full text is in the tooltip. A `data-section` attribute on `.nk-md` scopes the rules, so no other menu section changes.
- Checked: all 246 lines present, none over 62 characters, no ellipsis, edited files parse. Not run: production build and a browser check of the menu (no node_modules in this copy), please look at the Privileges menu at your usual widths.
