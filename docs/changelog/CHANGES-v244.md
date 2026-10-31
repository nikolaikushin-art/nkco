# v244: Industries: five more industries
- New file `src/data/industriesMore.js`. Edit the copy there; it is merged into the menu (`mock.js`), item and row descriptions, featured cards (`megaFeatured.js`) and page lead text (`leafDescriptions.js`).
- Industries menu now has 8 columns (was 3). New: Energy & Utilities, Healthcare & Wellness, Government & Public Sector, Consumer & Lifestyle, Transport, Aviation & Maritime.
- 20 new sub-sectors (4 per industry) and 80 new pages (4 per sub-sector). Each has a menu line, a page lead and a featured card (columns and sub-sectors). Pictures use topic plates until `npm run photos` is run.
- Checked (node): files parse, 80 unique child labels, none clash with existing menu labels. Not run: production build and browser check (no node_modules in this copy).
- All copy is draft. No firms, figures or dates are named.
