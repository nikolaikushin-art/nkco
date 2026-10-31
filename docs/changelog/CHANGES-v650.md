# v650 — Contact menu matched to the other menus
- Title is now "Contact us" at the same size as the other menu titles (was a two-line "Business Diagnostic"); "Business Diagnostic" is the descriptor line beneath it.
- Rail picture: fixed ratio with the teal top line, same as the other menus; no second picture inside the steps.
- "Contact the office" + e-mail moved to a full-width footer row under a hairline, as in the other menus.
- Step titles, practice names and review headings sized like the menu column headings; no capitals or letter-spacing anywhere (step caption, sub-headings, review headings, Continue / Submit buttons).
- Rows 38px / 15px text, fields 36px; the sheet is as tall as its content (no full-screen white area under the form).
- Files: src/components/mega/MegaContact.jsx, src/styles/contact-diagnostic-v650.css (replaces v642, imported in src/index.js).

## v651
- Footer row is a `div` now: the site's global `footer` rule painted it dark grey (unreadable text, clipped Continue button).
- Grid row is bounded, so the action bar can no longer slide under the footer.
- Step 1 is unique per practice (own heading, intro, questions, picture and text in the left column, link "Explore ..."); until a practice is chosen only the three practices are shown.
  Advisory: role + number of employees. Enterprise: role + sector. Brokerage: "enquiring as" (seller / buyer / investor / adviser) + sector, business name or code name, no website.
- New data: `PRACTICE_CONTACT`, `PRACTICE_RAIL` in src/data/diagnostic.js. New answers are added to the review and the sent enquiry.

## v652
- Removed the step header (caption, progress bars, title, intro); the questions start at the top, level with the left-column title. Step count moved into the action bar; title/intro kept for screen readers.

## v653
- Panel is a fixed height like the other menus (about 56% of the screen, 440-540px); long steps scroll inside it instead of stretching the sheet.
- Step 1: three-column contact grid.
- Step 3 is bespoke per practice: Advisory = business health check (rate six areas 1-5); Enterprise = management coverage (per function: not needed / oversee / run for us); Brokerage = confidentiality and approach (who may know, how the business is introduced, who to approach). Challenges and notes sit beside it. Step label is now "Profile".
- The "areas to strengthen" question was dropped from Objectives (the profile step covers it).
- Fixed: v651/v652 shipped with a block of MegaContact.jsx duplicated by a bad edit; repaired and checked with esbuild.
