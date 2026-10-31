# v177 — Menu polish (all six review items)

1. **Panel height follows content.** The mega menu is no longer a fixed 720px. It has a minimum (612px; 548px under 1360px wide) and a maximum (720px or the viewport), so short tabs no longer leave ~190px of blank white. The right-hand column no longer stretches the panel (`contain: size`); the photo gives way if the insight text is long, so the height stays steady while switching tabs. (`src/megamenu-d.css`)
2. **Consistent row images.** Service rows now use one local set of eight architectural close-ups (`public/brand/thumbs/arch-1..8.svg`), same crop, scale and grayscale, picked per service so the rows of one service never repeat. The remote Pexels/Unsplash pool is no longer used for rows. Replace the files (keep the names) with real photography when ready. (`MegaRail.jsx`)
3. **Left rail bottom.** A quiet "Contact the office" link plus info@nkco.ae sits at the foot of the rail, in both the top menu and the hamburger version. (`MegaRail.jsx`, `megamenu-d.css`)
4. **One type size.** Rail section buttons and category items are 14px in both menus (was 13.5px burger / 14.5px top).
5. **Calmer repeated headline.** The active tab is now regular weight with a 1px line in the body colour; inactive tabs are lighter. The large title carries the emphasis.
6. **Polish.** Row arrows appear on hover / keyboard focus only (always visible on touch screens). "Explore all capabilities" 10.5px → 11px. Pinstripe stronger: rail and open header .05 → .07, resting header .03 → .055.

# v178
- Right-hand featured column moved 24px to the left (same 24px margin as the left sidebar) and its vertical hairline removed.
- Featured photo: if the remote image cannot load, it falls back to the local architectural set (no more empty grey box).
