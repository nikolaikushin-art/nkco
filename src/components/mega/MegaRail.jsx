// Main mega menu — institutional layout (v159).
//   Left rail: categories (dark pinstripe)   Main: tabs (items) + title + service rows + action bar
//   Right: curved photo + featured insight   Foot: partner in charge
// All styles live in src/megamenu-d.css under the .nk-md-* classes (no legacy .nk-mr-* rules apply).
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, ChevronRight, ChevronDown, ChevronLeft } from 'lucide-react';
import { leafHref } from './parts';
import { getFeatured } from '../../data/megaFeatured';
import { CHILD_DESCRIPTIONS } from '../../data/megaChildDescriptions';
import { getLeafContent } from '../../data/serviceContent';
import { slugify } from '../../mock';
import { leafPhoto, photoStyle } from '../../lib/leafPhoto';
import { relatedPages } from '../../lib/relatedPages';

// Row thumbnails: one local set of architectural close-ups, same crop / scale / grayscale everywhere.
// A stable pick per service; the 4-6 rows of one service never repeat. Swap the files in public/brand/thumbs to change them.
const THUMBS = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `${process.env.PUBLIC_URL || ''}/brand/thumbs/arch-${n}.svg`);
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const THUMB_STEP = (() => { let st = 3; while (gcd(st, THUMBS.length) !== 1) st += 1; return st; })();
const hashStr = (str) => { let h = 7; for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0; return h; };
const cardImage = (seedStr, n) => THUMBS[(hashStr(seedStr) + n * THUMB_STEP) % THUMBS.length];

// Large local photos for the featured card (used when the card's own photo cannot load). Replace the files in public/brand/thumbs to change them.
const FEAT_FALLBACKS = [1, 2, 3, 4].map((n) => `${process.env.PUBLIC_URL || ''}/brand/thumbs/feat-${n}.svg`);

// Same hero photo + lead paragraph the destination page (SectionPage) shows, so the preview matches the page it opens.
const PAGE_FALLBACK_IMG = 'https://images.pexels.com/photos/18620036/pexels-photo-18620036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
const pageHeroImage = (data, col) =>
  (data.featured && data.featured.image) ||
  (Array.isArray(data.featuredDeals) && data.featuredDeals[0] && data.featuredDeals[0].image) ||
  (Array.isArray(data.featuredPublications) && data.featuredPublications[0] && data.featuredPublications[0].image) ||
  (col && col.image) ||
  PAGE_FALLBACK_IMG;
const pageLead = (section, col, item, child) =>
  getLeafContent(section, slugify(col.title), slugify(item.label), slugify(child)) ||
  `An in-depth NK&CO perspective on ${child}, drawn from decades of experience advising institutions across the UAE and GCC.`;

const asItem = (it) => (typeof it === 'string' ? { label: it, children: [] } : it);

export default function MegaRail({ data, sections = [], onSelectSection, mode = 'top' }) {
  const cols = data.columns || [];
  // opened from the top navigation -> don't repeat the section list on the left, just show this section's categories
  const solo = mode === 'top';
  // Burger mode: the rail is an accordion of the main sections (only the section whose key is stored here is open).
  const [openKey, setOpenKey] = useState(null);
  const [ci, setCi] = useState(0);
  const [ii, setIi] = useState(0);
  // false = a category was just picked (show the category card); true = a tab was picked (show the item card)
  const [itemPicked, setItemPicked] = useState(false);
  // Service row picked by a click -> the right column previews that page (like tabs / sidebar items: click first, then open)
  const [hov, setHov] = useState(null);
  // click once = preview; click the same row again (or "Open the page") = go to the page. Ctrl/Cmd/Shift-click and narrow screens (no right column) open directly.
  const pickRow = (e, c) => {
    if (e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 1180px)').matches) return;
    if (hov === c) return;
    e.preventDefault();
    setHov(c);
  };

  // The rail stays mounted while sections switch, so reset the picked category/item whenever the section changes.
  useEffect(() => {
    setCi(0); setIi(0); setItemPicked(false); setHov(null);
    setOpenKey((k) => (k && k !== data.key ? null : k));
  }, [data.key]);

  // Tabs are one scrollable row; show edge arrows only when some tabs are hidden.
  const tabsRef = useRef(null);
  const [edge, setEdge] = useState({ l: false, r: false });
  const measureTabs = () => {
    const el = tabsRef.current;
    if (!el) return;
    const l = el.scrollLeft > 2;
    const r = el.scrollLeft + el.clientWidth < el.scrollWidth - 2;
    setEdge((e) => (e.l === l && e.r === r ? e : { l, r }));
  };
  useLayoutEffect(() => {
    measureTabs();
    window.addEventListener('resize', measureTabs);
    return () => window.removeEventListener('resize', measureTabs);
  }, [ci, data.key]); // eslint-disable-line react-hooks/exhaustive-deps
  const nudgeTabs = (dir) => { if (tabsRef.current) tabsRef.current.scrollBy({ left: dir * 220, behavior: 'smooth' }); };

  const col = cols[ci] || cols[0];
  if (!col) return null;
  const items = (col.items || []).map(asItem);
  const item = items[ii] || items[0];
  const children = (item && item.children) || [];
  const section = data.key;
  // Featured card follows the selection: item -> category -> section default
  const feat =
    (itemPicked && item && getFeatured(section, col.title, item.label)) ||
    getFeatured(section, col.title) ||
    data.featured;
  const featKey = `${section}|${col.title}|${itemPicked && item ? item.label : ''}`;
  const art = feat && feat.art;

  // only a row of the item on screen can be previewed (guards against a stale hover after switching tabs)
  const hovChild = hov && children.includes(hov) ? hov : null;

  const pickCol = (i) => {
    if (i !== ci) {
      setCi(i);
      setIi(0);
      setItemPicked(false);
      setHov(null);
    }
  };

  return (
    <div className="nk-md" data-feat={hovChild ? 'prev' : feat && feat.image ? 'img' : feat ? 'text' : 'none'} data-partner="false">
      {/* Left rail — categories */}
      <nav className="nk-md-rail" aria-label="Main navigation">
        <ul className={`nk-md-secs${solo ? ' nk-md-secs--solo' : ' nk-md-secs--burger'}`}>
          {(sections.length ? sections : [{ key: data.key, label: data.title }]).filter((sec) => !solo || sec.key === data.key).map((sec) => {
            const isCur = sec.key === data.key;
            const expanded = solo ? isCur : openKey === sec.key;
            return (
              <li key={sec.key} className="nk-md-sec" data-open={expanded}>
                <button
                  type="button"
                  className="nk-md-sec-btn"
                  aria-expanded={expanded}
                  tabIndex={solo ? -1 : undefined}
                  onClick={() => {
                    if (solo) return;
                    if (expanded) { setOpenKey(null); return; }
                    setOpenKey(sec.key);
                    if (!isCur && onSelectSection) onSelectSection(sec.key);
                  }}
                >
                  <span>{sec.label}</span>
                  <ChevronDown size={15} aria-hidden="true" className="nk-md-sec-chev" />
                </button>
                {/* Always mounted; height animates 0fr -> 1fr. */}
                <div className={`nk-md-sub${expanded ? ' is-open' : ''}`} inert={!expanded}>
                  <div className="nk-md-sub-inner">
                    <ul className="nk-md-cats">
                      {(isCur ? cols : (sec.columns || [])).map((c, i) => (
                        <li key={c.title}>
                          <button
                            type="button"
                            className="nk-md-cat"
                            data-active={isCur && i === ci}
                            aria-current={isCur && i === ci ? 'true' : undefined}
                            onClick={() => isCur && pickCol(i)}
                          >
                            <span title={c.title}>{c.title}</span>
                            <ChevronRight size={15} aria-hidden="true" />
                          </button>
                        </li>
                      ))}
                      {isCur && data.exploreLabel && (
                        <li className="nk-md-explore-li">
                          <a href={data.exploreHref || '#'} className="nk-md-explore">
                            <span>{data.exploreLabel}</span>
                            <ArrowRight size={14} aria-hidden="true" />
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <a href="mailto:info@nkco.ae?subject=NK%26CO%20Enquiry" className="nk-md-rail-contact">
          <span className="nk-md-rail-contact-label">
            <span>Contact the office</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </span>
          <span className="nk-md-rail-contact-mail">info@nkco.ae</span>
        </a>
      </nav>

      {/* Main — tabs (items of the category), title, service rows, action bar */}
      <div className="nk-md-main">
        <div className="nk-md-tabs-wrap" data-l={edge.l || undefined} data-r={edge.r || undefined} key={col.title}>
          <div className="nk-md-tabs" role="tablist" aria-label={`${col.title} sections`} ref={tabsRef} onScroll={measureTabs}>
            {items.map((it, i) => (
              <button
                key={it.label}
                type="button"
                role="tab"
                className="nk-md-tab"
                aria-selected={i === ii}
                data-active={i === ii}
                onClick={(e) => {
                  setIi(i); setItemPicked(true); setHov(null);
                  const el = tabsRef.current;
                  if (el) el.scrollTo({ left: Math.max(0, e.currentTarget.offsetLeft - 48), behavior: 'smooth' });
                }}
              >
                {it.label}
              </button>
            ))}
          </div>
          {edge.l && <button type="button" className="nk-md-tabs-nav nk-md-tabs-nav--l" aria-label="Scroll tabs left" onClick={() => nudgeTabs(-1)}><ChevronLeft size={16} aria-hidden="true" /></button>}
          {edge.r && <button type="button" className="nk-md-tabs-nav nk-md-tabs-nav--r" aria-label="Scroll tabs right" onClick={() => nudgeTabs(1)}><ChevronRight size={16} aria-hidden="true" /></button>}
        </div>

        {item && (
          <div className="nk-md-body" key={`${ci}-${ii}`} role="tabpanel">
            <a href={leafHref(section, col.title, item.label)} className="nk-md-title font-serif-display" data-len={item.label.length > 34 ? 'xl' : item.label.length > 22 ? 'l' : undefined}>
              <span>{item.label}</span>
            </a>
            <i className="nk-md-rule" aria-hidden="true" />

            {children.length > 0 && (
              <div className="nk-md-lines">
                {children.map((c, n) => (
                  <a
                    key={c}
                    href={leafHref(section, col.title, item.label, c)}
                    className="nk-md-line"
                    data-previewing={hovChild === c || undefined}
                    onClick={(e) => pickRow(e, c)}
                  >
                    <span className="nk-md-line-img" aria-hidden="true">
                      {(() => {
                        // real photo, same pick as this page's preview and hero; the drawn set is only a fallback if the photo cannot load
                        const ph = leafPhoto(section, col.title, item.label, c, n);
                        return (
                          <img
                            src={ph.src}
                            alt=""
                            loading="lazy"
                            style={photoStyle(ph)}
                            onError={(e) => { const el = e.currentTarget; el.onerror = null; el.removeAttribute('style'); el.src = cardImage(`${section}|${col.title}|${item.label}`, n); }}
                          />
                        );
                      })()}
                    </span>
                    <span className="nk-md-line-text">
                      <span className="nk-md-line-name font-serif-display">{c}</span>
                      {CHILD_DESCRIPTIONS[c] && <span className="nk-md-line-desc">{CHILD_DESCRIPTIONS[c]}</span>}
                    </span>
                    <span className="nk-md-line-arrow" aria-hidden="true"><ArrowRight size={18} /></span>
                  </a>
                ))}
              </div>
            )}

            {col.viewAll && (
              <a href={col.briefingHref || leafHref(section, col.title)} className="nk-md-bar">
                <span className="font-serif-display">{col.viewAll}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Right — preview of the page of the service row that was clicked (same hero as the page itself) */}
      {hovChild && (() => {
        const href = leafHref(section, col.title, item.label, hovChild);
        const photo = leafPhoto(section, col.title, item.label, hovChild, children.indexOf(hovChild));
        // always from other lists (never the rows on the left)
        const others = relatedPages(sections, section, col.title, item.label, hovChild);
        return (
          <aside className="nk-md-prev" aria-label={`Preview: ${hovChild}`}>
            <div className="nk-md-prev-card" key={hovChild}>
              <div className="nk-md-prev-bar">
                <span className="nk-md-eyebrow">Page preview</span>
              </div>
              <a href={href} className="nk-md-prev-hero" tabIndex={-1}>
                <span className="nk-md-prev-img" aria-hidden="true">
                  <img src={photo.src} alt="" style={photoStyle(photo)} onError={(e) => { const el = e.currentTarget; el.onerror = null; el.style.transform = ''; el.style.filter = ''; el.src = FEAT_FALLBACKS[hashStr(hovChild) % FEAT_FALLBACKS.length]; }} />
                </span>
                <span className="nk-md-prev-copy">
                  <img className="nk-md-prev-bg" src={photo.src} alt="" aria-hidden="true" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  <span className="nk-md-prev-shade" aria-hidden="true" />
                  <span className="nk-md-prev-title font-serif-display" data-len={hovChild.length > 26 ? 'l' : undefined}>{hovChild}</span>
                  <span className="nk-md-prev-lead">{pageLead(section, col, item, hovChild)}</span>
                  <span className="nk-md-prev-ctas">
                    <span className="nk-md-prev-cta">Open the page <ArrowUpRight size={14} aria-hidden="true" /></span>
                    <span className="nk-md-prev-cta nk-md-prev-cta--quiet">Speak with our team</span>
                  </span>
                </span>
              </a>
              {others.length > 0 && (
                <div className="nk-md-prev-rel">
                  <span className="nk-md-eyebrow">Related pages</span>
                  <ul>
                    {others.map((o) => (
                      <li key={o.group + o.child}>
                        <a href={leafHref(o.section, o.category, o.item, o.child)}>
                          <span className="font-serif-display">{o.child}</span>
                          <ArrowRight size={14} aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        );
      })()}

      {/* Right — curved photo + featured insight */}
      {!hovChild && feat && (feat.title || feat.image) && (
        <aside className="nk-md-feat" aria-label="Featured" key={featKey}>
          <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute' }}>
            <defs>
              <clipPath id="nkMdCurve" clipPathUnits="objectBoundingBox">
                <path d="M0.2,0 L1,0 L1,1 L0,1 C0,0.62 0.05,0.24 0.2,0 Z" />
              </clipPath>
            </defs>
          </svg>
          {feat.image && (
            <div className="nk-md-feat-img" aria-hidden="true">
              <img
                src={feat.image}
                alt=""
                loading="lazy"
                onError={(e) => {
                  // Remote photo unavailable (offline / blocked): fall back to the local architectural set so the panel never shows an empty grey box.
                  const el = e.currentTarget;
                  el.onerror = null;
                  el.style.objectPosition = '';
                  el.style.transform = '';
                  el.src = FEAT_FALLBACKS[hashStr(featKey) % FEAT_FALLBACKS.length];
                }}
                style={art ? { objectPosition: `${art.x}% ${art.y}%`, transform: art.zoom ? `scale(${art.zoom})` : undefined } : undefined}
              />
            </div>
          )}
          <a href={feat.ctaHref || '#'} className="nk-md-feat-body">
            <span className="nk-md-eyebrow">{feat.tag || 'Featured'}</span>
            <i className="nk-md-rule nk-md-rule--short" aria-hidden="true" />
            {feat.title && <span className="nk-md-feat-title font-serif-display">{feat.title}</span>}
            {feat.description && <span className="nk-md-feat-desc">{feat.description}</span>}
            {feat.ctaLabel && (
              <span className="nk-md-feat-cta">
                <span>{feat.ctaLabel}</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </span>
            )}
          </a>
        </aside>
      )}

      {/* Foot (partner in charge) removed in v163 — the space goes to the service rows */}
    </div>
  );
}
