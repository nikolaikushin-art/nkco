# v159 — Mega menu, institutional layout

- `src/components/mega/MegaRail.jsx` rewritten: dark pinstripe rail | tabs + big title + service rows + patterned action bar | curved photo + featured insight | partner strip.
- `src/megamenu-d.css` (new, imported in `src/index.js`): all styles for the new menu (`.nk-md-*`) and the light header while a menu is open.
- `src/components/Header.jsx`: header gets `data-mega="open"` while a mega menu is open.
- `src/data/megaChildDescriptions.js`: one-line descriptions for the service rows (sample wording, edit freely; rows without one show the title only).
- Removed from the menu: the "Featured reports" list and the "Relevant industries" line.
- Old `.nk-mr-*` styles are still in the CSS files but no longer used by the menu.
