import React, { useState } from 'react';

// v667 · pane for the six extra sidebar views: the main content fills the card, a side column fills the rest (no dead areas).
export default function CrmExtra({ x, record, ind, log }) {
  const [, , title, d] = x;
  const mx = Math.max(1, ...ind.bars);
  const [rows, setRows] = useState(d.kind === 'table' ? d.rows : []);
  const [sort, setSort] = useState({ i: -1, dir: 1 });
  const [flt, setFlt] = useState('');
  const [done, setDone] = useState({});
  const [sel, setSel] = useState(null);
  const [hov, setHov] = useState(null);
  const sts = d.kind === 'table' ? Array.from(new Set(d.rows.map((r) => r[r.length - 1]))) : [];
  const cycle = (ri, e) => { e.stopPropagation(); const row = rows[ri]; const nx = sts[(sts.indexOf(row[row.length - 1]) + 1) % sts.length]; setRows((rs) => rs.map((r, j) => (j === ri ? [...r.slice(0, -1), nx] : r))); record(`${row[0]} → ${nx}`, title); };
  const shown = rows.map((r, ri) => ({ r, ri })).filter(({ r }) => r.join(' ').toLowerCase().includes(flt.toLowerCase())).sort((a, b) => (sort.i < 0 ? 0 : String(a.r[sort.i]).localeCompare(String(b.r[sort.i]), 'en', { numeric: true }) * sort.dir));
  return (
    <div className={`crm-xw k-${d.kind}`}>
      <div className="crm-xp oms-card">
        <div className="crm-xhd"><small>{title}</small>{d.kind === 'table' && <input type="search" aria-label={`Filter ${title}`} placeholder="Filter" value={flt} onChange={(e) => setFlt(e.target.value)} />}</div>
        {d.kind === 'table' && (
          <div className="crm-xt" role="table" style={{ '--n': d.cols.length }}>
            <div className="crm-xr crm-xh" role="row">{d.cols.map((c, ci) => <button type="button" key={c} role="columnheader" className={sort.i === ci ? 'on' : undefined} onClick={() => setSort((o) => ({ i: ci, dir: o.i === ci ? -o.dir : 1 }))}>{c}{sort.i === ci ? (sort.dir > 0 ? ' ↑' : ' ↓') : ''}</button>)}</div>
            {shown.map(({ r, ri }) => (
              <div key={ri} className={`crm-xr${sel === ri ? ' is-sel' : ''}`} role="row" tabIndex={0} onClick={() => setSel(ri)} onKeyDown={(e) => { if (e.key === 'Enter') setSel(ri); }}>
                {r.map((c, j) => (j === r.length - 1 ? <span key={j}><button type="button" className="og-pill" data-s={c} title="Click to move to the next status" onClick={(e) => cycle(ri, e)}>{c}</button></span> : <span key={j} className={j === 0 ? 'b' : undefined}>{c}</span>))}
              </div>))}
            {shown.length === 0 && <p className="crm-hint">No rows match.</p>}
          </div>)}
        {d.kind === 'cards' && (
          <div className="crm-xc">{d.items.map(([a, b, c, t]) => (
            <button type="button" key={a} className={`crm-xcard${sel === a ? ' is-sel' : ''}`} aria-pressed={sel === a} onClick={() => { setSel(a); record('Opened', a); }}><em className="og-pill" data-s={t}>{t}</em><b>{a}</b><span>{b}</span><i>{c}</i></button>))}</div>)}
        {d.kind === 'chart' && (
          <div className="crm-xg">
            <div className="crm-xbars"><div className="oms-bars">{d.bars.map((h, i) => <span key={i} tabIndex={0} onMouseEnter={() => setHov(i)} onFocus={() => setHov(i)} onMouseLeave={() => setHov(null)} title={`${d.labels[i]}: ${h}`} style={{ height: Math.max(6, h) + '%', '--i': i }} className={i === (hov == null ? d.bars.length - 1 : hov) ? 'hi' : undefined}>{hov === i && <b className="crm-tip">{h}</b>}</span>)}</div>
              <div className="crm-lbl">{d.labels.map((l) => <i key={l}>{l}</i>)}</div></div>
            <div className="crm-xkv">{d.kv.map(([k, v]) => <div key={k} className="crm-kv"><span>{k}</span><b>{v}</b></div>)}</div>
          </div>)}
        {d.kind === 'feed' && (
          <div className="crm-xf">{d.items.map(([t, a, b]) => (
            <button type="button" key={a + t} className={done[a + t] ? 'on' : undefined} aria-pressed={!!done[a + t]} onClick={() => { setDone((o) => ({ ...o, [a + t]: !o[a + t] })); if (!done[a + t]) record('Done', a); }}><em>{t}</em><span><b>{a}</b>{b}</span></button>))}</div>)}
      </div>
      <div className="crm-xs">
        {d.kind === 'chart'
          ? <div className="oms-card crm-xlist"><small>{ind.rt}</small>{ind.recs.slice(0, 5).map((r) => <div key={r[0]} className="crm-kv"><span>{r[0]}</span><b>{r[4]}</b></div>)}</div>
          : <div className="oms-card oms-chart"><small>{ind.ct}</small><div className="oms-bars">{ind.bars.map((h, i) => <span key={i} style={{ height: Math.max(6, (h / mx) * 100) + '%', '--i': i }} className={i === ind.bars.length - 1 ? 'hi' : undefined} />)}</div></div>}
        <div className="oms-card os-feed crm-xact"><small>Recent activity</small>{log.slice(0, 4).map(([a, b, c], i) => <p key={a + b + i}><u /><span><b>{a}</b>{b}</span><em>{c}</em></p>)}</div>
      </div>
    </div>
  );
}
