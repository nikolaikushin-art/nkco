# v642 — Contact menu: Business Diagnostic
- Header: new "Contact" item (after Overview) opens the six-step Business Diagnostic inside the mega sheet (`MegaContact.jsx`, `contact-diagnostic-v642.css`, `data/diagnostic.js`).
- Footer, side panel and hero "Discuss your business" open the same form (`lib/openContact.js`, event `nk:open-contact`); mailto links remain as fallback.
- `api/enquiry.js` (Vercel function) emails the office + acknowledgement. Set RESEND_API_KEY (and optionally ENQUIRY_FROM / ENQUIRY_TO) in Vercel. Without it the form shows the send-failed state.
- vercel.json: SPA rewrite no longer captures /api.
