# v469
Mobile / tablet slide panel (< 1180px): page links under each service (e.g. Market Signals, Buyer Demand, Pricing Comps)
now match the desktop menu: 2px left guide line on every page, light-grey text, white line + soft fill on hover / tap / current.
CSS only: src/styles/mobile-pages-v469.css (imported last in src/index.js).

Capabilities menus: 3 pages per service (18 curated picks in src/data/menuDisplay.js, MENU_KEEP; limit = CAPABILITIES_MAX_KIDS).
Desktop menus get it through menuKids(); the mobile SideNav now uses menuKids() for Capabilities and ends each service with "View <service>"
so the other pages stay reachable. Other sections are unchanged.
Mobile page links: the line is now white (border + inset shadow) on tap / hover / current page, and the page you are on is marked (aria-current) like the selected row on desktop.

Infrastructure menus: 3 services per category (18 categories, picks in src/data/menuDisplay.js MENU_KEEP).
Desktop gets it via menuKids(); mobile SideNav shows the same 3 services per category, each opening to its first 3 pages plus "View <service>".

Opportunities menus: 3 pages per service (19 services, picks in src/data/menuDisplay.js MENU_KEEP; sections listed in TOP3_SECTIONS).
Desktop via menuKids(); mobile SideNav uses the same list plus "View <service>".

Expertise menus: 4 pages per service (42 curated). Overview menus: 3 pages per service (15 curated).
Limits per section now live in SECTION_MAX_KIDS in src/data/menuDisplay.js (capabilities 3, infrastructure 3, opportunities 3, expertise 4, overview 3);
picks are the 'expertise|...' and 'overview|...' lines of MENU_KEEP. Mobile SideNav uses the same lists plus "View <service>".

Full audit (all 5 sections, 215 services, run against the real menu data): every service shows exactly its limit
(3 / 3 / 3 / 4 / 3), no duplicates, no page missing from the data, every pick is curated (no "first N" fallbacks).
Infrastructure: the 3 pages of all 106 services are now hand-picked too (they were the first 3 before).
Label shortened in the menu only: "Free Zone Licensing (DMCC, DIFC, JAFZA)" -> "Free Zone Licensing".

Opportunities service names (menu wording only; links and page copy keep the original names):
"and" -> "&" on every row and nine names shortened so the rows line up (13-27 characters, parallel noun phrases).
serviceLabel() in src/data/menuDisplay.js is used by the desktop menu, the hamburger menu and the mobile panel; edit the new lines at the top of MENU_LABELS to rename.

Visual alignment pass (real build, headless browser, 95 desktop rows + 163 mobile services at 360/390/768px: all rows same left edge, width and height):
mobile page links forced to one line; mobile "View <service>" link now reads "View all" (full name kept for screen readers);
"Visa & Establishment Card Renewal" -> "Visa & Card Renewal" in menus; mobile page text 16px (15px below 350px).

Overview (desktop menu + hamburger): three even columns of 5 with matching headings (it was 7 / 5 / 3 with "Our Practices" under "The Firm" and "Careers" under "How We Work").
  The Firm: Corporate Profile, Professional Principles, Scope of Practice, Experienced Hires, Life at NK&CO
  Our Practices: Management Consultancy, Enterprise Management, Business Brokerage, Engagement Types, Our Methodology
  How We Work: Client Engagement, Working Arrangements, Professional Standards, Confidentiality, Regulatory Boundaries
Edit CUSTOM_GROUPS in src/components/mega/MegaRail.jsx to move a service. The mobile panel still lists the five original groups.

Capabilities keeps its original headings (Service Lines / Market Needs / Sector Expertise) and links.
Capabilities, Opportunities, Overview (desktop): the bottom link of every column (and "Explore all ...") stays on one line when a row is opened
(src/styles/menu-align-v470.css, imported after the v469 file).

Capabilities page names (menu wording only): all pages now 14-23 characters (were 10-27), e.g. "Interim Executive Placement" -> "Interim Executives",
"UAE Market Entry Strategy" -> "UAE Market Entry", "Carve-outs" -> "Carve-out Execution". Edit the top lines of MENU_LABELS in src/data/menuDisplay.js to change.

Even page names in every menu (menu wording only): all page names now 13-26 characters (were 8-30) and long service names 13-30 (were up to 39).
65 labels reworded at the top of MENU_LABELS in src/data/menuDisplay.js (e.g. "Responsibilities of Each Party" -> "Party Responsibilities", "Retainer" -> "Retainer Mandates").
Final visual audit on the real build: desktop 95 rows, hamburger 183 states, mobile 163 services at 320/360/390/768px: same left edge, width and height everywhere, nothing cut off.
