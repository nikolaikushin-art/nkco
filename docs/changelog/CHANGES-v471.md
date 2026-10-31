# v471
Large screens (27" iMac 2560x1440, 4K, ultrawide): the header and the hero now scale with the screen.
Before, the top menu, headline, page rail and teasers stayed laptop-sized (13px menu, 54px headline, 64px bar) while the layout was full width,
so on 2560px and up the menu looked tiny and a big empty dark area was left under the hero text.

How: one scale unit --nk-u = max(1px, min(.0625vw, .11111vh)), i.e. 1px up to 1600x900, then growing with the screen
(follows the smaller of width/1600 and height/900, so a short ultrawide like 3440x1440 is not scaled by width alone).
  1440x900 1.00 | 1728x1117 1.08 | 1920x1080 1.20 | 2240x1260 1.40 | 2560x1440 1.60 | 3440x1440 1.60 | 3840x2160 2.40
New file src/styles/hero-scale-v471.css (imported last in src/index.js), all inside @media (min-width: 1600px):
header bar height (--nk-header-h), logo, hamburger, menu links, Contact Us, flag, search; side margin --nk-pad; hero gap; eyebrow, headline,
description, buttons, dots; page rail over the picture; the three teasers. Inner pages that hard-coded a 64px header (.nk2-hero) and anchor
scroll offsets follow the taller bar.
src/components/Header.jsx: the menu spacing limits (GAP_MIN / GAP_MAX / HERO_SHIFT_MAX) are multiplied by the same unit.

Unchanged: everything below 1600px wide (pixel-compared at 1512, 1440, 1366, 1280, 1180, 1024, 820, 768, 430, 393, 375, 360, 320 - identical), mobile / tablet layout, Arabic (RTL) rules.
Checked on the real build at 1600, 1728, 1920, 2240, 2560, 3440, 3840 and 2560x1080: all 5 slides fit their column, the hero is exactly one screen tall,
the first menu item sits on the picture's left edge, no sideways scroll.
To make it larger / smaller: change the two reference numbers in --nk-u (1600 -> .0625vw, 900 -> .11111vh).
