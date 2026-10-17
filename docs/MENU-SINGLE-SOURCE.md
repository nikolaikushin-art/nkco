# Top navigation and hamburger menu: one source

Both menus read the same data (`src/mock.js` -> NAV_ITEMS) and the same grouping rules.

**Where to change what**

| You want to change | Edit this | Updates |
|---|---|---|
| A menu title, category, item or page | `src/mock.js` (menu data) | top nav + hamburger + page preview |
| Headings per section (Service Lines, Market Needs...) | `HEADS`, `PER`, `CX_SETUP` in `src/components/mega/MegaRail.jsx` | top nav + hamburger |
| How many rows / headings are shown | `MAX_ROWS`, `MAX_GROUPS` (same file) | top nav + hamburger |
| Link under each heading (wording) | `GROUP_CTAS`, `EXPERTISE_CTAS` (`src/data/menuDisplay.js`) | top nav + hamburger |
| Row descriptions / child pages | `src/data/menuDisplay.js`, CHILD_DESCRIPTIONS | top nav + hamburger rows + preview |
| Page preview photo / text | `src/lib/leafPhoto.js`, `pageLead` | hamburger preview (top nav has none, by design) |

`buildMenuGroups()` in MegaRail.jsx is the only place that decides headings, rows and links. The top nav draws its columns from it,
and the hamburger draws its sidebar headings, tabs and footer link from it.

Parity check: open the top nav and the hamburger for each section; headings, links and call-to-action wording must be identical.
