# v657 — A different working table on every page
- `src/lib/pageRegister.js`: builds a register unique to each section page from its own content and seed. Six kinds (Deliverables register, Workstream tracker, Decision log, Risk and control register, Milestone calendar, Outcomes tracker), each with its own columns, owners, timings (weeks), statuses and filter. Pages with little data fall back to the next kind that has enough.
- PageSystem: new "Register" section after Scope on every section page (also on the Capabilities rich pages, before Contact).
- Intelligence hubs (desk, category, collection): an Index table with linked rows, counts, sort/search/filter.
- Series and piece pages: the piece list is now a sortable table (number, title, length, status; "Reading now" marks the current piece).
- DataGrid cells can now be links: `{ t: 'Label', to: '/path' }`.
- Not changed: the Briefing podcast pages, the home page, and the decorative OMS tablet screens.
