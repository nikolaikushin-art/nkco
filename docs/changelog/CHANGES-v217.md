# v217: search rebuilt in the CBRE style
- Search no longer opens as a dark floating box in the middle of the page. It now drops down from under the header like cbre.com: the dark header stays visible, a full-width white panel opens below it, with a large light-grey field, a dark underline, the search icon inside the field on the right and a big X outside it. The rest of the page is dimmed.
- Placeholder: "Search for Capabilities, Intelligence, Industries and More..." (Arabic added).
- Results appear under the field only once you type (up to 8, with the section trail). Arrow keys + Enter, Esc, click on the dimmed area, the X, or the header search icon (now a toggle) all work. Cmd/Ctrl+K toggles. Opening the navigation or the burger, or changing page, closes it.
- RTL supported. Same page index as before.
- Files: `src/components/HeaderTools.jsx`, `src/fullwidth.css`, `src/lib/lang.js`.
- Not verified in a browser (no build run).
