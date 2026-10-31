# v212: hero aligned with navigation
- Page hero wrapper (`.pg-hero .pg-wrap`) now uses the same side margin as the header and sections (`--nk-pad`, 12-24px; 14px on mobile). It was 92% / max 1360px, which left the hero inset from the logo and the right-hand tools.
- One-line change in `src/fullwidth.css`. Hero designs, photo/card ratios and fonts unchanged.
- NOT verified in a browser (no build run); check the split-card hero at 1280 / 1440 / 1920 widths.
