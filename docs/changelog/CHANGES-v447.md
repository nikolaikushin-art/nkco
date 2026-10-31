# v447 · Hamburger mega menu brought into the same family as the desktop mega menu

Sidebar (dark rail, selected-row bar, contact line) unchanged. Only the right-hand side and the rail's "Explore" link changed.

## What was off
Boxed 36px arrow buttons, a dark pinstripe action bar, an underlined "Read the insight" link and an uppercase letter-spaced rail link: four different button languages. The desktop menu uses none of them.

## What it is now
- **One call-to-action style** (`.nk-md-go`, same anatomy and timing as `.nk-cx-go`): `[2px line] Label`; on hover the line slides away and a line + arrowhead draws out to the right. Used for: the footer link under the rows ("Plan Your Market Entry"), "Read the insight", "Open the page" in the preview card, and "Explore all ..." in the rail.
- **Row arrow**: a bare 1.5px arrow, quiet at rest, nudges right and darkens on hover / selection. No box, no fill.
- **Row hover / selected**: same 2px guide line as the sidebar and top menus (`--nk-nav-line-light`), very light fill (`--fam-fill`).
- Tabs: active tab uses the same 2px line. Thumbnails: outline removed. Preview card: pinstripe removed.

## Files
- `src/components/mega/MegaRail.jsx`: new `GoLabel` helper; five spots use it (rail explore, footer link, preview CTA, featured CTA); row arrow stroke 1.5.
- `src/styles/megamenu-family-v447.css` (new, imported last in `src/index.js`). Tune `--fam-ink`, `--fam-line`, `--fam-fill` at the top.
- Old `.nk-md-bar`, `.nk-md-explore`, `.nk-md-feat-cta` rules in megamenu-d.css are now unused (left in place).
- The top-menu light accordion (`.nk-md--acc`, narrow screens) shares the featured / preview card, so it gets the same link style.

## v447b · dark theme (default)
- Hamburger menu content area now uses the desktop mega-menu colour (`--nk-hero-bg`); the sidebar is a shade darker (`--dk-rail` #1f2226) so the two halves stay distinct.
- Thumbnails and the featured photo are dimmed slightly on dark (`--dk-photo`); the hovered / selected row shows its photo at full brightness.
- Switch back to light: set `BURGER_DARK = false` at the top of `MegaRail.jsx`. The narrow-screen top accordion (`.nk-md--acc`) is unaffected.
