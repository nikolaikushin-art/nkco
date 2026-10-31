# v227: breadcrumb line removed from the hero on every page
- The 'HOME / SECTION / ...' line above the title is gone from all heroes, so the hero is shorter and the title, text, button and related pages sit higher.
- `src/pages/PageSystem.jsx` (`crumbsEl = null`); related block spacing trimmed slightly in `src/institutional-pages.css`. Checked on all 1,100 pages: hero ends above the fold on every page at 1440x900 and 1440x800.
