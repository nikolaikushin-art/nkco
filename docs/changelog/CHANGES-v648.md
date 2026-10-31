# v648 — Contact: choose a practice first; "Contact us" in both hamburgers
- Contact form: new first step "How can we help?" with the three practices (Advisory & Consultancy, Enterprise Management, Business Brokerage), drawn like the menu headings. Required. The form is now 7 steps; the choice appears in the review and in the emailed enquiry, and leads the Scope step.
- Top navigation: "Contact" renamed "Contact us" (Arabic string added).
- Desktop hamburger: "Contact us" added as the last section tab (after Overview); the form keeps the tab row so you can switch back to any section.
- Mobile hamburger: "Contact us" row added after Overview; it opens the same form.
- Files: data/diagnostic.js, mega/MegaContact.jsx, MegaMenu.jsx, Header.jsx, SideNav.jsx, lib/lang.js, styles/contact-diagnostic-v642.css (v648 block at the end).
- v648b: practice step has no empty area (services always shown under "We can help with"); descriptions reworded as contact lines ("Speak to us about ...").
- v648c: practice choice moved to the top of the Contact step (compact), service lists removed; back to 6 steps.
- v648d: form tailored per practice: situations, questions, objectives, services and ways to start differ for Advisory & Consultancy, Enterprise Management and Business Brokerage (data/diagnostic.js PRACTICE_TEXT, SCOPE_BY, ENGAGEMENT_BY, stagesFor). Changing practice clears dependent answers.
- v648e: every practice has its own situations, fields, challenges, objectives, focus areas, leadership, timeframes, services and starts (audited: no list shared between practices).
