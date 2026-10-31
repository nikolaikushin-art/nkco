import React, { useMemo, useState } from 'react';
import { Search, ChevronUp, ChevronDown, ChevronsUpDown, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

// v658 · the working grid inside the OMS tablets. Sort (click a header), search, filter chips, page through,
// click a status pill to move it on (On track > Review > Scoping > Complete), click a row to select it,
// and an add button that really adds a row. Everything lives in memory for the session; nothing is stored or sent.
const STEPS = ['On track', 'Review', 'Scoping', 'Complete'];
const txt = (v) => String(v == null ? '' : (typeof v === 'object' ? v.t : v));
const numOf = (v) => { const s = txt(v); if (!/\d/.test(s) || /[^0-9.,\s%A-Za-z\-+]/.test(s)) return null; const n = parseFloat(s.replace(/,/g, '').replace(/[^0-9.\-]/g, '')); return Number.isNaN(n) ? null : n; };
const mult = (v) => (/\bM\b|M$/.test(txt(v)) ? 1e6 : /\bK\b|K$/.test(txt(v)) ? 1e3 : 1);
const cmp = (a, b) => { const x = numOf(a); const y = numOf(b); if (x !== null && y !== null) return x * mult(a) - y * mult(b); return txt(a).localeCompare(txt(b), undefined, { numeric: true, sensitivity: 'base' }); };

export default function OmsGrid({ title, columns, rows: init, filterKey, pageSize = 5, add, onAdd, searchable = true, className = '' }) {
  const [rows, setRows] = useState(init);
  const [q, setQ] = useState('');
  const [flt, setFlt] = useState('All');
  const [sort, setSort] = useState({ key: null, dir: 'asc' });
  const [page, setPage] = useState(0);
  const [sel, setSel] = useState(null);
  const [n, setN] = useState(0);
  const cols = columns.map((c) => c.width || '1fr').join(' ');

  const chips = useMemo(() => (filterKey ? ['All', ...Array.from(new Set(init.map((r) => txt(r[filterKey])).filter(Boolean)))] : []), [init, filterKey]);
  const view = useMemo(() => {
    const nd = q.trim().toLowerCase();
    let out = rows.filter((r) => (flt === 'All' || txt(r[filterKey]) === flt) && (!nd || columns.some((c) => txt(r[c.key]).toLowerCase().includes(nd))));
    if (sort.key) out = [...out].sort((a, b) => cmp(a[sort.key], b[sort.key]) * (sort.dir === 'asc' ? 1 : -1));
    return out;
  }, [rows, columns, q, flt, filterKey, sort]);
  const pages = Math.max(1, Math.ceil(view.length / pageSize));
  const cur = Math.min(page, pages - 1);
  const shown = view.slice(cur * pageSize, cur * pageSize + pageSize);

  const toggle = (k) => { setPage(0); setSort((s) => (s.key !== k ? { key: k, dir: 'asc' } : s.dir === 'asc' ? { key: k, dir: 'desc' } : { key: null, dir: 'asc' })); };
  const step = (row, key, st = STEPS) => { const i = st.indexOf(row[key]); if (i < 0) return; setRows((rs) => rs.map((r) => (r === row ? { ...r, [key]: st[(i + 1) % st.length] } : r))); };
  const addRow = () => { if (!add) return; const row = add.make(n); setN(n + 1); setRows((rs) => [row, ...rs]); setSort({ key: null, dir: 'asc' }); setFlt('All'); setQ(''); setPage(0); setSel(row); if (onAdd) onAdd(row); };

  return (
    <div className={`oms-card os-grid og ${className}`}>
      <div className="og-h">
        <small>{title}</small>
        <span className="og-tools">
          {searchable && (
            <label className="og-search"><Search size={11} aria-hidden="true" /><input type="search" aria-label={`Search ${title}`} placeholder="Search" value={q} onChange={(e) => { setQ(e.target.value); setPage(0); }} /></label>
          )}
          {add && <button type="button" className="os-btn dark og-add" onClick={addRow}><Plus size={11} aria-hidden="true" />{add.label}</button>}
        </span>
      </div>
      {chips.length > 2 && (
        <div className="og-chips" role="group" aria-label="Filter">
          {chips.map((c) => (<button type="button" key={c} className={c === flt ? 'on' : undefined} aria-pressed={c === flt} onClick={() => { setFlt(c); setPage(0); }}>{c}</button>))}
        </div>
      )}
      <div className="og-body" role="table" aria-label={title}>
        <div className="os-gr os-gh" role="row" style={{ gridTemplateColumns: cols }}>
          {columns.map((c) => {
            const on = sort.key === c.key;
            return (
              <span key={c.key} role="columnheader" aria-sort={on ? (sort.dir === 'asc' ? 'ascending' : 'descending') : 'none'}>
                <button type="button" className={`og-sort${on ? ' on' : ''}`} onClick={() => toggle(c.key)}>{c.label}{on ? (sort.dir === 'asc' ? <ChevronUp size={10} aria-hidden="true" /> : <ChevronDown size={10} aria-hidden="true" />) : <ChevronsUpDown size={10} aria-hidden="true" className="og-idle" />}</button>
              </span>
            );
          })}
        </div>
        {shown.map((r, ri) => (
          <div key={`${cur}-${ri}-${txt(r[columns[0].key])}`} role="row" aria-selected={sel === r} className={`os-gr og-row${sel === r ? ' is-sel' : ''}`} style={{ gridTemplateColumns: cols }} onClick={() => setSel(sel === r ? null : r)}>
            {columns.map((c, i) => {
              const v = r[c.key];
              if (c.pill) return (c.steps || STEPS).includes(v) ? <button key={c.key} type="button" role="cell" className="og-pill" data-s={v} title="Click to move on" onClick={(e) => { e.stopPropagation(); step(r, c.key, c.steps || STEPS); }}>{v}</button> : <em key={c.key} role="cell" data-s={txt(v)}>{txt(v)}</em>;
              return i === 0 ? <b key={c.key} role="cell">{txt(v)}</b> : <span key={c.key} role="cell">{txt(v)}</span>;
            })}
          </div>
        ))}
        {shown.length === 0 && <p className="og-none">No rows match. <button type="button" onClick={() => { setQ(''); setFlt('All'); }}>Clear</button></p>}
      </div>
      <div className="og-foot" aria-live="polite">
        <span>{view.length === rows.length ? rows.length : `${view.length} of ${rows.length}`} rows{sel ? ` · ${txt(sel[columns[0].key])} selected` : ''}</span>
        {pages > 1 && (<span className="og-pg"><button type="button" aria-label="Previous page" disabled={cur === 0} onClick={() => setPage(cur - 1)}><ChevronLeft size={11} aria-hidden="true" /></button>{cur + 1}/{pages}<button type="button" aria-label="Next page" disabled={cur >= pages - 1} onClick={() => setPage(cur + 1)}><ChevronRight size={11} aria-hidden="true" /></button></span>)}
      </div>
    </div>
  );
}

// small working chip bar for switching views inside a tablet
export function OmsTabs({ items, value, onChange, label = 'View' }) {
  return (<div className="os-chips og-tabs" role="group" aria-label={label}>{items.map((c) => (<button type="button" key={c} className={c === value ? 'on' : undefined} aria-pressed={c === value} onClick={() => onChange(c)}>{c}</button>))}</div>);
}
export function csvDownload(name, columns, rows) {
  try {
    const esc = (v) => `"${String(typeof v === 'object' && v ? v.t : v == null ? '' : v).replace(/"/g, '""')}"`;
    const body = [columns.map((c) => esc(c.label)).join(','), ...rows.map((r) => columns.map((c) => esc(r[c.key])).join(','))].join('\n');
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([body], { type: 'text/csv' })); a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 500);
  } catch (e) { /* ignore */ }
}
