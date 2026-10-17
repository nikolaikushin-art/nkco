# v160 — Top navigation stays dark while the mega menu is open

- `src/megamenu-d.css`: removed the light-header override. While a menu is open the header is now the same dark (#1b1d21) with the same pinstripe as the left rail. Logo, nav links and Contact button keep their normal dark-header styling.
- Right photo made taller (47% → 54% of the column); insight title 31px → 28px so the text still fits.

# v162
- Resting top navigation and right-hand slide panel now use the footer colour (--nk-night #121316 + pinstripe). Header turns the lighter #1b1d21 only while a mega menu is open.

# v163
- Removed the 'Partner in charge' strip from the mega menu.
- (Row thumbnails left at their original size.)

# v164
- Right-hand curved photo in the mega menu made taller (54% → 61% of the column), using the space freed by removing the partner strip.

# v165
- Left rail of the mega menu: smaller text (14.5px → 13px) and thinner rows (48px → 38px min height); no letter-spacing so 'Mergers & Acquisitions' stays on one line.

# v166
- Left rail rows thinner again (min height 38px → 32px).

# v167
- Compact left list now applies ONLY to the hamburger (burger) accordion (.nk-md-secs--burger). Top-menu rail is back to its original sizes.

# v168
- Only the dropdown items inside the burger accordion are compact; section buttons and 'Explore all' are original size.

# v169
- Top navigation is flat (no pinstripe) in both states: #121316 at rest, #1b1d21 while a mega menu is open.

# v170
- Burger accordion: dropdown block is a flat slate (#24272d, no pinstripe); items 13.5px / 36px rows, lighter inactive text, indented 30px, distinct hover and active states.

# v171
- Simplified: left rail is one flat dark (#1b1d21, same as the open header). Burger dropdown items are plain indented text (no slate block, no per-row lines, no chevrons); active = white + thin bar.

# v172
- Texture (pinstripe) only on the open hamburger dropdown block; rail, header and everything else flat.

# v173
- Reversed: header + left rail are textured (pinstripe) by default; ONLY the open hamburger dropdown block is flat (#25282e).

# v174
- Hamburger dropdown: no flat block. Same texture as the rail; only the selected item is lighter (white 7% overlay + white bar), identical to the top-menu rail.

# v175
- Right-hand featured photo is a plain rectangle again (curve removed).

# v176
- Small gap (12px) between the top navigation and the right-hand photo.
