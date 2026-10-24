import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_ITEMS, slugify } from '../mock';
import { useLang, toggleLang, tr } from '../lib/lang';

// UAE flag, rounded, with the soft gloss from the reference icon.
function UaeFlag() {
  return (
    <svg width="42" height="30" viewBox="0 0 42 30" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="nk-flag-clip"><rect x="1" y="1" width="40" height="28" rx="4" /></clipPath>
        <linearGradient id="nk-flag-gloss" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".28" /><stop offset=".5" stopColor="#fff" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".18" />
        </linearGradient>
      </defs>
      <g clipPath="url(#nk-flag-clip)">
        <rect x="1" y="1" width="40" height="10" fill="#1f8a43" />
        <rect x="1" y="10" width="40" height="10" fill="#fff" />
        <rect x="1" y="19" width="40" height="10" fill="#262626" />
        <rect x="1" y="1" width="12.5" height="28" fill="#ff3347" />
        <rect x="1" y="1" width="40" height="28" fill="url(#nk-flag-gloss)" />
      </g>
    </svg>
  );
}

// British flag (Union Jack), same rounded shape and gloss as the UAE flag. Shown in Arabic mode to switch back to English.
function UkFlag() {
  return (
    <svg width="42" height="30" viewBox="0 0 42 30" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="nk-uk-clip"><rect x="1" y="1" width="40" height="28" rx="4" /></clipPath>
        <clipPath id="nk-uk-diag"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" /></clipPath>
        <linearGradient id="nk-uk-gloss" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".28" /><stop offset=".5" stopColor="#fff" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".18" />
        </linearGradient>
      </defs>
      <g clipPath="url(#nk-uk-clip)">
        <svg x="1" y="1" width="40" height="28" viewBox="0 0 60 30" preserveAspectRatio="none">
          <rect width="60" height="30" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#nk-uk-diag)" stroke="#c8102e" strokeWidth="4" />
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#c8102e" strokeWidth="6" />
        </svg>
        <rect x="1" y="1" width="40" height="28" fill="url(#nk-uk-gloss)" />
      </g>
    </svg>
  );
}

export function LangButton() {
  const lang = useLang();
  const label = lang === 'ar' ? tr('Switch to English', 'ar') : tr('Switch to Arabic', 'en');
  return (
    <button type="button" className="nk-tool nk-lang-btn" onClick={toggleLang} aria-label={label} title={label} lang={lang === 'ar' ? 'en' : 'ar'}>
      {lang === 'ar' ? <UkFlag /> : <UaeFlag />}
    </button>
  );
}

const SearchIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="butt" aria-hidden="true" focusable="false">
    <circle cx="13" cy="13" r="8.5" /><path d="M19.5 19.5L27 27" />
  </svg>
);

// Every page in the navigation tree: section > category > list > page.
function buildIndex() {
  const out = [];
  NAV_ITEMS.forEach((n) => {
    const s = n.key;
    out.push({ title: n.label, trail: '', path: `/${s}` });
    (n.data.columns || []).forEach((col) => {
      const c = slugify(col.title);
      out.push({ title: col.title, trail: n.label, path: `/${s}/${c}` });
      (col.items || []).forEach((x) => {
        const label = typeof x === 'string' ? x : x.label;
        const i = slugify(label);
        if (!i) return;
        out.push({ title: label, trail: `${n.label} / ${col.title}`, path: `/${s}/${c}/${i}` });
        (typeof x === 'string' ? [] : x.children || []).forEach((ch) => {
          const l = slugify(ch);
          if (l) out.push({ title: ch, trail: `${n.label} / ${col.title} / ${label}`, path: `/${s}/${c}/${i}/${l}` });
        });
      });
    });
  });
  const seen = new Set();
  return out.filter((e) => (seen.has(e.path) ? false : (seen.add(e.path), true)));
}

export function SearchButton() {
  const lang = useLang();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const index = useMemo(() => (open ? buildIndex() : []), [open]);

  const results = useMemo(() => {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return index
      .map((e) => {
        const t = e.title.toLowerCase();
        const hay = `${t} ${e.trail.toLowerCase()}`;
        if (!terms.every((w) => hay.includes(w))) return null;
        const score = (t.startsWith(terms[0]) ? 0 : t.includes(terms[0]) ? 1 : 2) * 10 + e.path.split('/').length;
        return { ...e, score };
      })
      .filter(Boolean)
      .sort((a, b) => a.score - b.score)
      .slice(0, 8);
  }, [q, index]);

  // Opening: reset, focus the field, lock page scroll. Esc closes.
  // Clicking the navigation, the burger or the header search icon also closes it (the header stays usable, like CBRE).
  useEffect(() => {
    if (!open) return undefined;
    setQ(''); setSel(0);
    const t = setTimeout(() => inputRef.current && inputRef.current.focus(), 30);
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onDown = (e) => { if (e.target.closest && e.target.closest('.nk-nav-link, .nk-square-hamburger')) setOpen(false); };
    window.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { clearTimeout(t); window.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onDown); document.body.style.overflow = prev; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const onKey = (e) => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setOpen((o) => !o); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const go = (path) => { setOpen(false); navigate(path); window.scrollTo(0, 0); };
  const onInputKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSel((s) => Math.min(s + 1, results.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
    else if (e.key === 'Enter' && results[sel]) go(results[sel].path);
  };
  const placeholder = tr('Search for Capabilities, Intelligence, Industries and More…', lang);
  const hasQ = !!q.trim();

  return (
    <>
      <button type="button" className="nk-tool nk-search-btn" data-open={open || undefined} onClick={() => setOpen((o) => !o)} aria-label={tr(open ? 'Close search' : 'Search', lang)} title={tr('Search', lang)} aria-haspopup="dialog" aria-expanded={open}>
        <SearchIcon />
      </button>
      {open && (
        <div className="nk-search" role="dialog" aria-modal="true" aria-label={tr('Search the site', lang)}>
          <div className="nk-search-drop">
            <div className="nk-search-inner">
              <div className="nk-search-bar">
                <div className="nk-search-field">
                  <input
                    ref={inputRef}
                    type="search"
                    value={q}
                    onChange={(e) => { setQ(e.target.value); setSel(0); }}
                    onKeyDown={onInputKey}
                    placeholder={placeholder}
                    aria-label={tr('Search the site', lang)}
                    autoComplete="off"
                    spellCheck="false"
                    enterKeyHint="search"
                  />
                  <button type="button" className="nk-search-go" onClick={() => results[sel] && go(results[sel].path)} aria-label={tr('Search', lang)} tabIndex={-1}>
                    <SearchIcon />
                  </button>
                </div>
                <button type="button" className="nk-search-x" onClick={() => setOpen(false)} aria-label={tr('Close search', lang)}>
                  <svg width="30" height="30" viewBox="0 0 30 30" stroke="currentColor" strokeWidth="3" fill="none" aria-hidden="true"><path d="M3 3l24 24M27 3L3 27" /></svg>
                </button>
              </div>
              {hasQ && (
                <ul className="nk-search-list">
                  {!results.length && <li className="nk-search-hint">{tr('No pages match', lang)}</li>}
                  {results.map((r, i) => (
                    <li key={r.path}>
                      <a href={r.path} data-sel={i === sel || undefined} onMouseEnter={() => setSel(i)} onClick={(e) => { e.preventDefault(); go(r.path); }}>
                        <span className="nk-search-t">{r.title}</span>
                        {r.trail && <span className="nk-search-c">{r.trail}</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="nk-search-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />
        </div>
      )}
    </>
  );
}
