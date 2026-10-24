# v232: Related pages on Real Estate Ventures are now directly related
- Problem: the Related picker preferred other categories of the same section, so Business Formation, Business Foundation (and every real estate page) showed pages from Business Opportunities, Commercial Concepts and other unrelated lists.
- Fix: pages in Real Estate Ventures now only relate to other Real Estate Ventures pages, set by hand in `src/data/reRelated.js` and applied in `src/lib/relatedPages.js` (the page hero and the mega-menu preview both use it).
- Leaf-level relations for all Business Formation, Business Foundation and Agent Recruitment pages (e.g. Brokerage Licensing -> Company Incorporation, Compliance and Procedure Manuals, Licence and Card Onboarding). Every other model points to Formation, Foundation or Recruitment plus one sibling model (e.g. Resale Brokerage -> Mortgage and Finance Brokerage).
- Checked by script: all 109 pages get three related pages, none outside the column, none pointing at themselves. Not opened in a browser; production build not re-run after this small change (syntax checked).
- Other sections are unchanged.
