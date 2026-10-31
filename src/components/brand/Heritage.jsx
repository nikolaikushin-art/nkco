import React from 'react';

// Engraved monogram seal: double ring, 48 tick marks, NK&CO set in the centre.
export function Seal({ size = 92, className = '' }) {
  const ticks = Array.from({ length: 48 }, (_, i) => {
    const a = (i / 48) * Math.PI * 2;
    const r1 = 53, r2 = i % 4 === 0 ? 49 : 51;
    return <line key={i} x1={60 + Math.cos(a) * r1} y1={60 + Math.sin(a) * r1} x2={60 + Math.cos(a) * r2} y2={60 + Math.sin(a) * r2} />;
  });
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} className={`om-seal ${className}`} role="img" aria-label="NK&CO seal">
      <g fill="none" stroke="currentColor" strokeWidth="0.8">
        <circle cx="60" cy="60" r="57" />
        <circle cx="60" cy="60" r="54" strokeWidth="0.4" />
        <g strokeWidth="0.5">{ticks}</g>
        <circle cx="60" cy="60" r="43" strokeWidth="0.5" />
        <circle cx="60" cy="60" r="40" strokeWidth="0.25" />
        <circle cx="60" cy="60" r="46.5" strokeWidth="0.25" strokeDasharray="1 2.2" />
      </g>
      <text x="60" y="66" textAnchor="middle" fill="currentColor" style={{ fontFamily: 'var(--om-serif)', fontSize: 20, letterSpacing: '.04em', fontWeight: 500 }}>NK&amp;CO</text>
    </svg>
  );
}

// Rule – lozenge – rule.
export function Ornament({ className = '' }) {
  return (
    <div className={`om-ornament ${className}`} aria-hidden="true">
      <span /><i /><span />
    </div>
  );
}

// Passe-partout: a mat around the picture, with a fine keyline inside it and an italic caption.
export function Plate({ src, alt = '', caption, className = '', ratio = '16 / 9' }) {
  return (
    <figure className={`om-plate-fig ${className}`}>
      <div className="om-mat">
        <div className="om-mat-in" style={{ aspectRatio: ratio }}>
          <img src={src} alt={alt} loading="lazy" />
        </div>
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

// ---------------------------------------------------------------------------
// Guilloché: the engraved rosette found on banknotes and share certificates.
// Hypotrochoid curves, stepped in offset, drawn as hairlines.
// ---------------------------------------------------------------------------
function curves(lines, R, r, turns, steps) {
  const k = (R - r) / r;
  const out = [];
  for (let n = 0; n < lines; n++) {
    const d = 14 + n * (58 / lines);
    let p = '';
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * Math.PI * 2 * turns;
      const x = (R - r) * Math.cos(t) + d * Math.cos(k * t);
      const y = (R - r) * Math.sin(t) - d * Math.sin(k * t);
      p += `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`;
    }
    out.push(p + 'Z');
  }
  return out;
}
const DEFS = {
  a: curves(16, 100, 40, 2, 340), // three-lobed rosette (ratio 3/2)
  b: curves(14, 100, 30, 3, 420), // finer seven-petal rosette (ratio 7/3)
};

// Rendered ONCE (see App.js): the geometry lives here and every <Rosette/> just references it.
export function RosetteDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        {Object.entries(DEFS).map(([id, paths]) => (
          <g key={id} id={`om-ros-${id}`} fill="none" stroke="currentColor" strokeWidth="0.28">
            {paths.map((d, i) => <path key={i} d={d} />)}
          </g>
        ))}
      </defs>
    </svg>
  );
}

export function Rosette({ className = '', variant = 'a' }) {
  return (
    <svg viewBox="-170 -170 340 340" className={`om-rosette ${className}`} aria-hidden="true" focusable="false">
      <use href={`#om-ros-${variant}`} />
      <g fill="none" stroke="currentColor" strokeWidth="0.45">
        <circle r="168" /><circle r="164" strokeWidth="0.25" />
      </g>
    </svg>
  );
}

// A woven band: two sine waves crossing, tiled horizontally.
export function GuillocheBand({ className = '' }) {
  return (
    <svg className={`om-band ${className}`} width="100%" height="22" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="om-weave" width="48" height="22" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="0.6">
            <path d="M0 11 C 6 -1, 18 -1, 24 11 S 42 23, 48 11" />
            <path d="M0 11 C 6 23, 18 23, 24 11 S 42 -1, 48 11" />
            <path d="M0 11 C 8 3, 16 3, 24 11 S 40 19, 48 11" strokeWidth="0.35" />
            <path d="M0 11 C 8 19, 16 19, 24 11 S 40 3, 48 11" strokeWidth="0.35" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="22" fill="url(#om-weave)" />
    </svg>
  );
}
