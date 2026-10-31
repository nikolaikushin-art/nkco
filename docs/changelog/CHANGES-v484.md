# v484 · Hero fills the window exactly (no strip of the next section under the three boxes)

**Cause.** v482 made the hero only as tall as its content. In any window taller than that, the next section showed under the three teaser boxes (30-100px on laptops, hundreds of px on tall screens and tablets).

**Fix.**
- `src/components/Hero.jsx` · `fitHero()` finds, by bisection on the real layout, the largest scale `--hf` at which hero + boxes fit the window height (never larger than the width allows). It re-runs on resize, rotation, font load and slide change. What is left over is written to `--hf-rem`.
- `src/styles/hero-fit.css` · hero is `min-height: 100dvh` again. The picture takes all of the leftover height; the text block shares up to a third of it between its gaps (capped at 40 * --hf), the rest is centred above and below. Below 1024px (stacked layout) the hero is at least one window tall and the picture takes the spare height.

Checked at 1280x600, 1280x720, 1366x768, 1440x900, 1536x864, 1680x1050, 1920x1080, 1920x1200, 2560x1440, 3440x1440, 3840x2160, iPad landscape/portrait, 1024x1366, phones: hero bottom = window bottom (0px gap) at every desktop/tablet-landscape size, no horizontal scroll.

**Tall, narrow windows (added in this build).** When more than 20% of the window height would be spare in the two-column layout (iPad Pro portrait 1024x1366, 1280x1024, 1366x1024, 1440x1200 ...), the text floated in dead space beside a very tall picture. `Hero.jsx` now adds `.is-stack` there: wide picture on top (takes all spare height), headline + player side by side below it, then the three boxes (`hero-fit.css`, last block). Normal laptop / desktop sizes keep the two columns.
