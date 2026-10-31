// Signature brand visual language — abstract architectural SVG elements.
// Used across the site as bespoke graphic accents (McKinsey editorial + CBRE architectural).
import React from 'react';

// Thin blueprint grid overlay
export function GridOverlay({ className = '', opacity = 0.06 }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="nkGrid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#nkGrid)" opacity={opacity} />
    </svg>
  );
}

// Abstract skyline silhouette (thin lines)
export function SkylineLines({ className = '', color = '#c4c8ce', opacity = 0.35 }) {
  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 800 200"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g fill="none" stroke={color} strokeWidth="1" opacity={opacity}>
        <path d="M0 190 L60 190 L60 140 L100 140 L100 110 L140 110 L140 90 L180 90 L180 130 L220 130 L220 60 L240 60 L240 190" />
        <path d="M240 190 L280 190 L280 100 L320 100 L320 80 L350 80 L350 40 L370 40 L370 20 L390 20 L390 190" />
        <path d="M390 190 L430 190 L430 120 L470 120 L470 90 L500 90 L500 150 L540 150 L540 60 L570 60 L570 190" />
        <path d="M570 190 L610 190 L610 130 L650 130 L650 80 L690 80 L690 100 L730 100 L730 50 L760 50 L760 190 L800 190" />
      </g>
      <g fill="none" stroke={color} strokeWidth="0.5" opacity={opacity * 0.5}>
        <line x1="0" y1="190" x2="800" y2="190" />
        <line x1="0" y1="170" x2="800" y2="170" strokeDasharray="2 6" />
      </g>
    </svg>
  );
}

// Elegant blue light wave (radial gradient blob)
export function BlueLightWave({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <div
        className="w-full h-full"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 40%, rgba(196, 200, 206,0.28) 0%, rgba(100, 106, 115,0.08) 40%, transparent 72%)',
          filter: 'blur(6px)',
        }}
      />
    </div>
  );
}

// Diagonal directional lines (technical drawing feel)
export function DiagonalLines({ className = '', color = 'currentColor', opacity = 0.08 }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="nkDiag" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="18" stroke={color} strokeWidth="0.7" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#nkDiag)" opacity={opacity} />
    </svg>
  );
}

// Isometric structural mark (accent for cards / hero corners)
export function StructuralMark({ className = '', size = 88 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="0.8">
        <path d="M50 6 L92 30 L92 70 L50 94 L8 70 L8 30 Z" opacity="0.35" />
        <path d="M50 6 L50 94" opacity="0.25" />
        <path d="M8 30 L92 30" opacity="0.25" />
        <path d="M8 70 L92 70" opacity="0.25" />
        <circle cx="50" cy="50" r="3.5" fill="currentColor" opacity="0.6" />
      </g>
    </svg>
  );
}

// Thin directional connector line (used between sections)
export function ConnectorLine({ className = '' }) {
  return (
    <div className={`relative h-px ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#646a73]/40 to-transparent" />
      <span className="absolute right-0 -top-[3px] w-1.5 h-1.5 rotate-45 bg-[#646a73]/70" />
    </div>
  );
}

// Architectural corner mark — for section framings
export function CornerMark({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <span className="absolute top-0 left-0 w-6 h-px bg-[#646a73]" />
      <span className="absolute top-0 left-0 w-px h-6 bg-[#646a73]" />
    </div>
  );
}

// Number badge with elegant framing (for statistics)
export function NumberMark({ n, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span className="w-6 h-px bg-[#646a73]" />
      <span className="text-[11px] tracking-[0.24em] uppercase text-[#646a73]">{n}</span>
    </div>
  );
}
