# v202: inner-page hero + rail + heading colour
- Fixed: headings on dark bands were near-black (institutional.css colours all headings --nk-ink). Hero titles and dark-section headings are now forced light; light sections keep graphite.
- Hero image: wide, starts right under the header (top padding 5rem), taller (up to 640px), loaded at 2400px / q80 for Unsplash photos (was 940px).
- "On this page" is now the home rail (`nk2-rail`): equal tabs, lighter active tab with white underline, follows scroll, smooth-scrolls. No title line. Sits directly under the image.
