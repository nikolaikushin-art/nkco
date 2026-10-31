# v655 — Contact: one Capabilities-style menu before the form, no dead areas
- New gateway shown first when Contact us opens: three columns (Advisory & Consultancy, Enterprise Management, Business Brokerage), serif heading, six hairline rows that open (chevron), teal-line link at the foot. Same measures as the Capabilities menu.
  - A row opens to one line and "Begin with this": the form starts with the practice AND the situation already chosen (the "Your business" step is pre-answered).
  - "Start with ..." at the foot of a column opens the form with the practice only. "Not Sure Where to Start" does the same.
- Removed the dashed "Select a practice above" placeholder and the empty area under the stepper. The old three-practice picker is replaced by the chosen practice (serif title, teal hairline) with a "Change" link back to the gateway; answers are kept unless a different practice is chosen.
- Filled the remaining empty cells: website spans the free cells beside Country; an odd last option spans the row; Objectives shows "Your enquiry so far" under the objectives; the outcome box is taller; Review columns are balanced (Contact | Business + Scope | Profile + Objectives).
- Radio options are round, checkboxes stay square.
- Files: src/components/mega/MegaContact.jsx (Gateway, enter/leave), src/data/diagnostic.js (GATE: wording of the rows), src/styles/contact-gate-v655.css (imported in src/index.js).
