# v526: Entry gate (loader, Enter button, cookie consent)
- public/index.html: splash rebuilt as a 3-step gate: wordmark + progress line, then the three panels, then an "Enter NK&CO" button (bottom centre). Click fades into the site.
- Shown on the home route once per session (sessionStorage nk_entered). Deep links, prerendered routes and no-JS visitors skip it.
- Site behind the gate is `inert` until entry. Reduced-motion respected.
- Cookie card bottom-left (full-width sheet on mobile): Accept all / Essential only / Preferences. Stored in localStorage `nk_consent_v1`.
- window.nkConsent.allowed('analytics') + `nk:consent` event: load analytics only after consent (see comment in index.html).
- Footer: "Cookies" now reopens the card (data-nk-cookies).
- Panels keep a gradient + bar-chart fallback behind the photos.
- TODO: /privacy page does not exist yet; the card links to it.
