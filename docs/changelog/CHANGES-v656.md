# v656 — Working tables on the content pages
- New `src/components/DataGrid.jsx` (+ `src/styles/data-grid-v656.css`): the OMS grid look (white card, hairline rows, status pills) as a real table. Click a header to sort (asc / desc / off), search box (auto when more than 5 rows), optional filter chips (`filterKey`), pagination (`pageSize`, default 8), empty state with "Clear filters", keyboard and screen-reader friendly (`aria-sort`, live row count), stacked cards on phones.
- `gridFrom(head, rows)` converts the existing array data to grid props, so no data files changed.
- Switched to DataGrid: Engagement table on every section page (PageSystem), Separation of practices, Scope of activities, Written confirmation questions, Accountability and the other SimpleTable sections (Institutional.jsx), and the Practice Scope tables (PracticeScope.jsx).
- Left as they were: the single-row Scope and Authority panel, the Service Architecture layout, the home comparison table, and the illustrative OMS tablet grids.
- Optional: pass `filterKey` and `pill: true` on a column (e.g. a Status column) to get filter chips and OMS-style status pills.
