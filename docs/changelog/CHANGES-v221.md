# v221: search panel uses the hero ground
- White panel now carries the same diamond-lattice ground as the home hero (exact same SVG tile from oldmoney.css) plus the fine pinstripe at 8%.
- To use only one: delete the `url(...)` part (pinstripe only) or the `repeating-linear-gradient` part (lattice only) in `.nk-search-drop`, `src/fullwidth.css`.
- Not verified in a browser.
