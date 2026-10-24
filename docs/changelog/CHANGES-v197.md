# v197 — unique description for every card and page

- Problem: 746 service pages showed the same sentence ("An in-depth NK&CO perspective on X, drawn from decades of experience advising institutions across the UAE and GCC."), 118 item pages and 20 category pages showed similar generic templates. The mega-menu "Page preview" card, the page hero and the SEO meta all use this text.
- New `src/data/leafDescriptions.js`: hand-written, topic-specific lead paragraph for each of those pages (`LEAF_DESCRIPTIONS` 746, `ITEM_LEADS` 118, `COL_LEADS` 20), keyed by route path.
- `src/data/serviceContent.js`: `getLeafContent`, `getItemContent`, `getColumnContent` fall back to the new data after the existing bespoke content, so MegaRail, SectionPage and routeMeta pick it up with no other code changes.
- Verified across all 1,093 leaf, item and category pages: none missing, none generic, none duplicated (including the 156 existing bespoke leaf texts). The generic fallback strings remain in code only as a safety net and are no longer reachable.
- Pages that share a label in different places (e.g. "MEP", "Regional Rollouts", "Investor Notes", "Oqood Registration", "Handover Protocols") each have their own text written for their own context.
