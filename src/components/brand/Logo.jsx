import React from 'react';

// One logo, one size: header, footer and the slide-in panel all render this,
// so they can never drift apart. Size is --nk-logo-h in src/oldmoney.css.
export default function Logo() {
  return (
    <>
      <img
        src="/brand/logo.png"
        alt="NK&CO"
        className="nk-logo-img brightness-0 invert"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          const s = e.currentTarget.nextElementSibling;
          if (s) s.style.display = 'inline';
        }}
      />
      <span className="nk-logo-fallback font-serif-display text-white" style={{ display: 'none' }}>
        NK<span className="text-white/85">&amp;</span>CO
      </span>
    </>
  );
}
