# v615 · old hero restored
- Home hero is the original featured-story hero again: serif headline, "Read the corporate profile" / "Discuss your business", podcast player, three photo tiles (Advisory & Consultancy, Enterprise Management, Business Brokerage) and the practice link bar below.
- The phone / tablet mockups are no longer inside the hero images. The OMS tablet + phones still appear halfway down the home page (OmsShowcase) and a tablet closes the footer.
- Change: src/components/Hero.jsx now exports the original hero (previously a re-export of HeroBCG). HeroBCG.jsx and HeroDevices.jsx are untouched and kept for the OMS showcase and footer.
- src/styles/hero-old-fit-v615.css (imported last in src/index.js): the old hero is fitted for a 64px header, the bar is now 72px (--nk-bar-h). The hero now reads --nk-bar-h, so it is exactly one window tall and the next section never shows under the three link boxes. Bigger windows scale the hero up (up to 4x).
- Hero side edges now line up with the top navigation: the hero content starts exactly under the hamburger button and ends exactly under the search button (25px from each window edge, was 43px).
