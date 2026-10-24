# v518: Privileges fully inside Intelligence; start-up crash fixed

## Fix: deploy "stuck" on the loading snapshot
`PRIV_FEATURED` (src/data/privileges.js) only had a hand-written card for the original categories. The three categories added from
src/data/intelOwn.js (Sector & Thematic Research, Data & Analytics, Publications) got `_: undefined`, and `megaFeatured.js`
destructured it at module load: `TypeError: r is not iterable`. React never mounted, so every page stayed on the prerender
snapshot. The Privileges featured-card path was dead code (the menu is Intelligence-only) and has been removed.

## Verified (scripts in the session, not shipped)
- 12 PRIV categories, 73 series, 413 pieces: every series sits in exactly one Intelligence collection; none unplaced, none duplicated.
- Every old /privileges, /privileges/<format>, /privileges/<format>/<series>[/<piece>] URL redirects (Navigate, replace) to its Intelligence page.
- 517 Intelligence URLs (section, 6 desks, 18 collections, series, 413 pieces) are prerendered and in the sitemap; none under /privileges.
- 2,026 rendered internal links on 156 pages checked: 0 broken.

## Changed
- SectionPage: series URL under the wrong desk/collection redirects to the real one; unknown piece goes to its series; piece breadcrumb now ends on the piece.
- intelLibrary.redirectFromPrivileges: /privileges/<format> goes to the desk holding that format's first series (was /intelligence).
- PrivilegePage (now the Intelligence series/piece template): removed the unreachable landing and format-level views and the /privileges links;
  "more" tiles on a series page list the other series in the same Intelligence collection; mail subjects say "NK&CO Intelligence".
- Flagship card (mock.js, MegaIntelligence.jsx) pointed at a page that did not exist; now the Q1 Edition of the NK&CO Quarterly.
- intelOwn.js copy: reworded strings that tripped src/lib/safeCopy.js ("award", "ranked", "Sovereign" in a title) or read as advice
  ("what to hedge", "actions to consider", "where caution is sensible"). Piece "Sovereign and Public Capital" is now "Public Capital".

## Removed
PRIVILEGES_MENU and S.privileges (mock.js), hidden Privileges footer column, PRIV_FEATURED / PRIV_LEAF_LEAD / PRIV_ITEM_LEAD / PRIV_COL_LEAD,
privileges branches in leafPhoto.js and FrameworkPanel.jsx.
