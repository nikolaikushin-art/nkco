# v472
Desktop top menus (Capabilities, Infrastructure, Opportunities, Expertise, Overview): the panel now GROWS when an accordion row is opened, in all five.
Before: Capabilities / Opportunities / Overview were capped at the distance to the hero's teaser strip (--cx-h set in MegaRail.jsx), so on shorter
browser windows their rows scrolled inside the panel or the bottom links ("Explore ...", "Contact the office") were cut off.
Infrastructure and Expertise already had their own cap of (100dvh - header) and grew; now all five share that rule.
New file src/styles/menu-grow-v472.css (imported last), @media (min-width: 1100px):
  - .nk-mega:has(.nk-cx) max-height = calc(100dvh - var(--nk-header-h))   (grows down to the bottom of the screen)
  - .nk-cx-acc never scrolls on its own any more (overflow: visible)
  - last resort only: if the content is taller than the whole screen, the panel gets a thin scrollbar
Checked on the real build at 2560x1200, 1920x960, 1440x780 and 1366x680, closed / one row open / one row open in every column, all five menus:
no inner scrolling and nothing cut (Infrastructure at 1366x680 touches the screen bottom by about 4px, which is the last-resort case).
