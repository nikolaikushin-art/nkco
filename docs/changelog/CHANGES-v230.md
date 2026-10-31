# v230: new "Real Estate Ventures" entry under Opportunities
- Opportunities now opens with **Real Estate Ventures** as the first item on the left rail: a section for people who want to start, own or join a real estate company (not buy a property).
- 11 tabs, 55 pages: The Dubai Case, Join or Acquire, Off-Plan Agency, Resale Brokerage, Commercial Agency, Holiday Home Operator, Property Management Firm, Development Start-Up, Business Formation (brand, licensing, incorporation, bank and escrow accounts), Business Foundation (website, CRM, contracts, manuals), Agent Recruitment.
- Files: `src/mock.js` (column added first; section description mentions real estate ventures), `src/data/megaItemDescriptions.js`, `megaChildDescriptions.js`, `leafDescriptions.js` (page copy, item and column leads), `megaFeatured.js` (featured cards, button reads "Read the guide").
- Checked: all 55 pages have their own copy, no label clashes, production build compiles, menu and a page opened in a browser at 1440x900.
- Note: `scripts/prerender.js` still falls back to the plain SPA build here ("Unsupported import/export syntax" in `src/lib/editorialPhoto.js`, which imports JSON). This was already the case in v229 and is unrelated to this change.
- Photos: the new pages use the drawn topic plates until `npm run photos` is run for them.
