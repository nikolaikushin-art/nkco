import Logo from './brand/Logo';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../mock';
import MegaMenu from './MegaMenu';

export default function Header({ onOpenNav, onCloseNav, navOpen }) {
  const [active, setActive] = useState(null);
  // 'top' = opened from the top navigation (left rail shows just that section, no duplicate nav)
  // 'burger' = opened from the hamburger (left rail shows all sections; top links are hidden)
  const [via, setVia] = useState('top');
  const headerRef = useRef(null);

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
  }, [active]); // eslint-disable-line react-hooks/exhaustive-deps
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
    <header ref={headerRef} data-mega={active ? 'open' : undefined} className="fixed top-0 left-0 right-0 z-40 bg-[#1b1d21] text-white border-b border-white/10">
      <div className="nk-container flex items-center h-[64px] gap-8">
        <div className="nk-header-actions nk-header-actions-left flex items-center">
        <button
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
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
              <span>{item.label}</span>
              <ChevronDown size={12} className="nk-nav-caret" aria-hidden="true" />
            </button>
          ))}
        </nav>

        <div className="nk-header-actions flex items-center ml-auto lg:ml-0">
          <a
            href="mailto:info@nkco.ae?subject=NK%26CO%20Enquiry"
            className="nk-contact-btn hidden md:inline-flex"
          >
            Contact Us
          </a>
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
