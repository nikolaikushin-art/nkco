import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';

// v665 · motion primitives for the CRM tablet: iOS-style segmented control with a sliding thumb, and count-up numbers.
const reduced = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function Seg({ items, value, onChange, label = 'View' }) {
  const ref = useRef(null);
  const [p, setP] = useState({ l: 0, w: 0 });
  const [ready, setReady] = useState(false);
  const measure = () => { const r = ref.current; const b = r && r.querySelector('button.on'); if (b) setP((o) => (o.l === b.offsetLeft && o.w === b.offsetWidth ? o : { l: b.offsetLeft, w: b.offsetWidth })); };
  useLayoutEffect(measure, [value, items.join('|')]);
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    const r = ref.current; let ro;
    if (r && typeof ResizeObserver !== 'undefined') { ro = new ResizeObserver(measure); ro.observe(r); }
    return () => { cancelAnimationFrame(id); if (ro) ro.disconnect(); };
  }, []);
  return (
    <div className="crm-seg" ref={ref} role="group" aria-label={label}>
      <i className={`crm-thumb${ready ? ' ready' : ''}`} style={{ width: p.w, transform: `translateX(${p.l}px)` }} />
      {items.map((c) => <button type="button" key={c} className={c === value ? 'on' : undefined} aria-pressed={c === value} onClick={() => onChange(c)}>{c}</button>)}
    </div>
  );
}

export function AnimVal({ value, run }) {
  const s = String(value);
  const m = /^(\D*?)(\d[\d,]*\.?\d*)(.*)$/.exec(s);
  const [txt, setTxt] = useState(s);
  const cur = useRef(0); const was = useRef(false); const raf = useRef(0);
  useEffect(() => {
    if (!m) { setTxt(s); return undefined; }
    const target = parseFloat(m[2].replace(/,/g, '')); const dec = (m[2].split('.')[1] || '').length; const comma = m[2].includes(',');
    const out = (n) => `${m[1]}${n.toLocaleString('en', { minimumFractionDigits: dec, maximumFractionDigits: dec, useGrouping: comma })}${m[3]}`;
    if (!run || reduced()) { cur.current = target; setTxt(s); was.current = run; return undefined; }
    const from = was.current ? cur.current : 0; was.current = true; const t0 = performance.now(); const dur = 900;
    const tick = (t) => { const k = Math.min(1, (t - t0) / dur); const e = 1 - Math.pow(1 - k, 4); cur.current = from + (target - from) * e; setTxt(k < 1 ? out(cur.current) : s); if (k < 1) raf.current = requestAnimationFrame(tick); };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [s, run]);
  useEffect(() => { if (!run) was.current = false; }, [run]);
  return <>{txt}</>;
}

const spark = (seed) => { let h = 7; for (const c of seed) h = (h * 31 + c.charCodeAt(0)) >>> 0; const pts = []; let y = 11; for (let i = 0; i < 12; i++) { h = (h * 1103515245 + 12345) >>> 0; y = Math.max(2, Math.min(14, y - 0.9 + ((h >> 8) % 100) / 100 * 1.6)); pts.push(`${(i * 60) / 11},${y.toFixed(1)}`); } return pts.join(' '); };
export const Kpi2 = ({ l, v, d, run }) => (<div className="oms-kpi"><small>{l}</small><b><AnimVal value={v} run={run} /></b><i>{d}</i><svg className="crm-spark" viewBox="0 0 60 16" preserveAspectRatio="none" aria-hidden="true"><polyline points={spark(l + v)} /></svg></div>);
