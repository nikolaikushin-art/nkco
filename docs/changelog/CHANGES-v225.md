# v225: related pages in the hero, checked on every page
- Every page uses the split-card hero (`heroFor` returns 1 since v214), and v224 already put the "Related pages" list in it. The extra hero layouts (on-photo caption, plaque) are not used by any page; v225 also gave them the list, harmless and unused.
- Verified in a real browser (production build, headless Chromium) on all 1,100 pages (sections, categories, lists, pages) at 1440, 1100 and 390 px wide: 3 related links on every page, no overflow, no clipped card, no overlapping blocks, no sideways scroll. 0 problems.
- Screenshots checked: tallest card (cybersecurity-frameworks), shortest card (business-opportunities), mobile, and the dark search bar open + typing.
