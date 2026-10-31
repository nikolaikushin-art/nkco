import Logo from './brand/Logo';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../mock';
import MegaMenu from './MegaMenu';
import { SearchButton, LangButton } from './HeaderTools';
import { useLang, tr } from '../lib/lang';

export default function Header({ onOpenNav, onCloseNav, navOpen }) {
  const lang = useLang();
  const { pathname } = useLocation();
  // v590 · the top navigation is drawn inside the home hero (in place of the headline) when that slot exists.
  const slot = null;
  const [active, setActive] = useState(null);
  // 'top' = opened from the top navigation (left rail shows just that section, no duplicate nav)
  // 'burger' = opened from the hamburger (left rail shows all sections; top links are hidden)
  const [via, setVia] = useState('top');
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const actionsRef = useRef(null);

  // v588 · The navigation now sits in the normal header flow (hamburger, logo, links ... flag, search),
  // so the old measuring of nav / hero image alignment (v361 / v364) is no longer needed.

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

  // Any "Contact" call to action on the site can open the form: window.dispatchEvent(new Event('nk:open-contact'))
  useEffect(() => {
    const open = () => { if (onCloseNav) onCloseNav(); setVia('top'); setActive('contact'); };
    window.addEventListener('nk:open-contact', open);
    return () => window.removeEventListener('nk:open-contact', open);
  }, [onCloseNav]);

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
  // Contact sits after the content sections but is not one of them (no page routes, footer or side-panel entries): it opens the Business Diagnostic.
  const CONTACT = { key: 'contact', label: 'Contact us', data: { key: 'contact' } };
  const activeItem = shownKey === 'contact' ? CONTACT : NAV_ITEMS.find((n) => n.key === shownKey);

  // Desktop (>=1180px): the hamburger opens the full mega navigation, starting from Capabilities.
  // Smaller screens keep the slide-in panel.
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

  // v592 · the top navigation sits in the header bar itself (desktop), between the logo and the flag / search
  const navEl = (
    <nav ref={navRef} aria-label="Primary" className="nk-primary-nav">
      {NAV_ITEMS.map((n) => (
        <button
          key={n.key}
          type="button"
          className="nk-nav-link"
          data-active={active === n.key || undefined}
          aria-expanded={active === n.key}
          onClick={() => toggleMenu(n.key)}
        >
          <span>{tr(n.label, lang)}</span>
        </button>
      ))}
      <button
        type="button"
        className="nk-nav-link nk-nav-contact"
        data-active={active === 'contact' || undefined}
        aria-expanded={active === 'contact'}
        onClick={() => toggleMenu('contact')}
      >
        <span>{tr('Contact us', lang)}</span>
      </button>
    </nav>
  );

  // v591 · desktop: hamburger + flag/search sit at the navigation's level while the page is at the top, and rise into the bar once it scrolls
  useEffect(() => {
    const r = document.documentElement;
    const on = () => { if (window.scrollY > 24) r.setAttribute('data-nk-scrolled', ''); else r.removeAttribute('data-nk-scrolled'); };
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => { window.removeEventListener('scroll', on); r.removeAttribute('data-nk-scrolled'); };
  }, []);

  // flags on <html> so the page-level navigation row and the panel can react (see menu-light-v588.css)
  useEffect(() => {
    const r = document.documentElement;
    if (slot) r.setAttribute('data-nk-nav', 'slot'); else r.removeAttribute('data-nk-nav');
    if (active) r.setAttribute('data-nk-menu', via); else r.removeAttribute('data-nk-menu');
    return () => { r.removeAttribute('data-nk-nav'); r.removeAttribute('data-nk-menu'); };
  }, [slot, active, via]);

  return (
    <>
    <header ref={headerRef} data-bcg="" data-mega={active ? 'open' : undefined} data-via={active ? via : undefined} className="fixed top-0 left-0 right-0 z-40 bg-[#32353a] text-white">
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

        {/* v591 · logo alone in the middle of the top bar */}
        <div className="nk-logo-group">
          <Link to="/" className="nk-header-logo flex items-center gap-2 flex-shrink-0" aria-label="NK&CO home">
            <Logo />
          </Link>
        </div>

        {navEl}

        <div ref={actionsRef} className="nk-header-actions nk-header-actions-right flex items-center">
          <LangButton />
          <SearchButton />
        </div>
      </div>

      {activeItem && (
        <>
          <div className="nk-mega-backdrop" data-closing={closing || undefined} onClick={closeMenu} aria-hidden="true" />
          <MegaMenu closing={closing} mode={via} data={activeItem.data} sections={NAV_ITEMS.map((n) => ({ key: n.key, label: n.label, columns: n.data.columns || [] })).concat({ key: 'contact', label: tr('Contact us', lang), columns: [] })} onSelectSection={selectFromRail} onClose={closeMenu} />
        </>
      )}
    </header>
    </>
  );
}
