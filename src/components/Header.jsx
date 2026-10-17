import Logo from './brand/Logo';
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../mock';
import MegaMenu from './MegaMenu';
import { LangButton, SearchButton } from './HeaderTools';
import { useLang, tr } from '../lib/lang';

export default function Header({ onOpenNav, onCloseNav, navOpen }) {
  const lang = useLang();
  const [active, setActive] = useState(null);
  // 'top' = opened from the top navigation (left rail shows just that section, no duplicate nav)
  // 'burger' = opened from the hamburger (left rail shows all sections; top links are hidden)
  const [via, setVia] = useState('top');
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const actionsRef = useRef(null);

  // v364 · The first nav item ("Capabilities") starts exactly where the hero image starts (see nav-align-v361.css).
  // The bar has 7 spaces: between the 5 menu items (4), menu -> Contact Us (1), Contact Us -> flag (1), flag -> search (1).
  // They are all given the SAME size: the free width between the image edge and the right edge is divided equally (limited to GAP_MIN..GAP_MAX).
  // Only if even GAP_MIN does not fit does the nav move left (and the hero image grows by the same amount, up to HERO_SHIFT_MAX).
  // Mobile / tablet (< 1180px) and Arabic (RTL) are untouched.
  useLayoutEffect(() => {
    const root = document.documentElement;
    const GAP_MIN = 18;        // never tighter than this
    const GAP_MAX = 44;        // on very wide screens the spaces stop growing (the menu stays on the image edge, the tools on the right edge)
    const HERO_SHIFT_MAX = 56; // last resort: nav + image move left together, never more than this
    const VARS = ['--nk-nav-shift', '--nk-nav-inset', '--nk-hero-shift', '--nk-nav-gap'];
    const clear = () => { VARS.forEach((v) => root.style.removeProperty(v)); root.removeAttribute('data-nk-tight'); };
    const sync = () => {
      const nav = navRef.current;
      const actions = actionsRef.current;
      const first = nav && nav.querySelector('.nk-nav-link > span');
      if (!nav || !actions || !first || root.dir === 'rtl' || !window.matchMedia('(min-width: 1180px)').matches) { clear(); return; }
      // start from the natural layout (no shift, default spacing)
      root.removeAttribute('data-nk-tight');
      root.style.removeProperty('--nk-nav-gap');
      root.style.setProperty('--nk-nav-shift', '0px');
      root.style.setProperty('--nk-hero-shift', '0px');
      const nr = nav.getBoundingClientRect();
      const inset = Math.round((first.getBoundingClientRect().left - nr.left) * 10) / 10;
      root.style.setProperty('--nk-nav-inset', `${inset}px`);
      const n = nav.getBoundingClientRect();
      const a = actions.getBoundingClientRect();
      const items = nav.querySelectorAll('.nk-nav-link').length;
      const g0 = parseFloat(getComputedStyle(nav).columnGap) || 28;
      const spaces = items + 2;                                  // 4 + 1 + 2 for five items
      const fixed = n.width + a.width - (items - 1 + 2) * g0;    // widths of the items and the tools, without any space
      const free = (a.right - n.left) - fixed;                   // all the room left for the 7 spaces
      const g = Math.min(GAP_MAX, Math.max(GAP_MIN, Math.floor((free / spaces) * 10) / 10));
      root.setAttribute('data-nk-tight', '');
      root.style.setProperty('--nk-nav-gap', `${g}px`);
      // last resort: even the smallest spacing does not fit -> nav (and image) move a little to the left
      const miss = Math.ceil(nav.getBoundingClientRect().right + g - actions.getBoundingClientRect().left);
      if (miss > 0) {
        root.style.setProperty('--nk-nav-shift', `${miss}px`);
        root.style.setProperty('--nk-hero-shift', `${Math.min(miss, HERO_SHIFT_MAX)}px`);
      }
    };
    sync();
    window.addEventListener('resize', sync);
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(sync) : null;
    if (ro && headerRef.current) ro.observe(headerRef.current);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(sync);
    return () => { window.removeEventListener('resize', sync); if (ro) ro.disconnect(); clear(); };
  }, [lang]);

  // Menus change ONLY on click: click opens, click on another item switches,
  // click on the same item (or outside / Esc) closes. Hover never changes anything.
  const toggleMenu = (key) => {
    if (navOpen && onCloseNav) onCloseNav();
    setVia('top');
    setActive((cur) => (cur === key ? null : key));
  };
  const selectFromRail = (key) => setActive(key);
  const closeMenu = () => setActive(null);

  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && setActive(null);
    // Click anywhere in the header that is not a nav item or the open panel closes it
    const onDown = (e) => {
      if (!headerRef.current || !headerRef.current.contains(e.target)) return;
      if (e.target.closest('.nk-nav-link') || e.target.closest('.nk-mega') || e.target.closest('.nk-square-hamburger')) return;
      setActive(null);
    };
    window.addEventListener('keydown', onEsc);
    document.addEventListener('mousedown', onDown);
    return () => {
      window.removeEventListener('keydown', onEsc);
      document.removeEventListener('mousedown', onDown);
    };
  }, []);

  // Keep the panel mounted for a moment after closing so it can animate out (CRM-style: nothing just vanishes).
  const [shownKey, setShownKey] = useState(null);
  const [closing, setClosing] = useState(false);
  useEffect(() => {
    if (active) { setShownKey(active); setClosing(false); return undefined; }
    if (!shownKey) return undefined;
    setClosing(true);
    const t = setTimeout(() => { setShownKey(null); setClosing(false); }, 180);
    return () => clearTimeout(t);
  }, [active]); // eslint-disable-line
  const activeItem = NAV_ITEMS.find((n) => n.key === shownKey);

  // Desktop (>=1180px, where the full navigation bar is visible): the hamburger opens the same big
  // desktop navigation, starting from Capabilities. Smaller screens keep the slide-in panel.
  const isDesktop = () => typeof window !== 'undefined' && window.matchMedia('(min-width: 1180px)').matches;
  const onHamburger = () => {
    if (isDesktop()) {
      setVia('burger');
      setActive((cur) => (cur ? null : NAV_ITEMS[0].key));
    } else {
      setActive(null);
      navOpen && onCloseNav ? onCloseNav() : onOpenNav();
    }
  };
  const menuOpen = !!navOpen || !!active;

  return (
    <header ref={headerRef} data-mega={active ? 'open' : undefined} className="fixed top-0 left-0 right-0 z-40 bg-[#1b1d21] text-white">
      <div className="nk-container flex items-center h-[64px] gap-8">
        <div className="nk-header-actions nk-header-actions-left flex items-center">
        <button
          aria-label={tr(menuOpen ? 'Close navigation' : 'Open navigation', lang)}
          aria-expanded={menuOpen}
          className="nk-square-hamburger"
          onClick={onHamburger}
        >
          <svg width="40" height="25.5" viewBox="0 0 40 25.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="butt" aria-hidden="true">
            {menuOpen
              ? <path d="M8 2l24 22M32 2L8 24" />
              : <path d="M0 1h40M0 12.75h40M0 24.5h40" />}
          </svg>
        </button>
        </div>

        <Link to="/" className="flex items-center gap-2 flex-shrink-0" aria-label="NK&CO home">
          <Logo />
        </Link>

        <nav
          ref={navRef}
          className="hidden lg:flex items-center gap-7 ml-auto"
          aria-label="Primary"
          style={(navOpen || (active && via === 'burger')) ? { visibility: 'hidden', pointerEvents: 'none' } : undefined}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              type="button"
              className="nk-nav-link"
              data-active={active === item.key}
              aria-haspopup="true"
              aria-expanded={active === item.key}
              onClick={() => toggleMenu(item.key)}
            >
              <span>{tr(item.label, lang)}</span>
              <ChevronDown size={12} className="nk-nav-caret" aria-hidden="true" />
            </button>
          ))}
        </nav>

        <div ref={actionsRef} className="nk-header-actions flex items-center ml-auto lg:ml-0">
          <a
            href="mailto:info@nkco.ae?subject=NK%26CO%20Enquiry"
            className="nk-contact-btn hidden md:inline-flex"
          >
            {tr('Contact Us', lang)}
          </a>
          <LangButton />
          <SearchButton />
        </div>
      </div>

      {activeItem && (
        <>
          <div className="nk-mega-backdrop" data-closing={closing || undefined} onClick={closeMenu} aria-hidden="true" />
          <MegaMenu closing={closing} mode={via} data={activeItem.data} sections={NAV_ITEMS.map((n) => ({ key: n.key, label: n.label, columns: n.data.columns || [] }))} onSelectSection={selectFromRail} />
        </>
      )}
    </header>
  );
}
