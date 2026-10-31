import React, { useState } from 'react';
import { Top } from './HeroDevices';
import { Search, Plus, Check, Clock, Flame, Copy, Gem, Timer, Hourglass, CalendarClock, UserX, User, Layers, ChevronDown } from 'lucide-react';

// v661 · Console: the working-records screen on every page tablet. Saved views with live counts, focus filters,
// List / Board / Tasks / Insights, search + source / owner / sort, grouped list (today, this week, earlier),
// bulk select with assign, advance and archive. Records come from the page's own deliverables; in memory only.
const SRC = ['Website', 'Referral', 'Event', 'Partner'];
const age = (h) => (h < 1 ? 'just now' : h < 24 ? `${h} h` : `${Math.round(h / 24)} d`);
const ini = (n) => n.split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

export default function makeConsole({ items, V, stg, seed, T, cut, money, OWN, rnd }) {
  const stages = (V || (stg.length >= 4 ? stg : ['Brief', 'Draft', 'Review', 'Issue', 'Close'])).slice(0, 5).map((s) => cut(s, 14));
  const ME = OWN[seed % 6];
  const mk = (d, i) => { const st = rnd(seed, i, stages.length - 1); return { id: i, name: d, dup: i % 3 === 1, st, src: SRC[rnd(seed, i + 3, 4)], score: 25 + rnd(seed, i + 5, 70), own: i % 4 === 3 ? null : OWN[(seed + i) % 6], age: [0, 1, 3, 26, 30, 50, 120, 200, 2, 70][i % 10], next: i % 3 === 0 ? null : `${stages[(st + 1) % stages.length]} · ${2 + ((seed + i * 3) % 26)} Nov`, val: 60 + rnd(seed, i + 11, 500), sel: false, done: false }; };
  const BASE = [['All', Layers, () => true], ['Mine', User, (r) => r.own === ME], ['Unassigned', UserX, (r) => !r.own]];
  const FOCUS = [['Hot', Flame, (r) => r.score >= 70], ['Overdue', Timer, (r) => r.age >= 48 && !r.done], ['Today', CalendarClock, (r) => r.age < 24], ['Stuck', Hourglass, (r) => r.age >= 100], ['Duplicates', Copy, (r) => r.dup], ['Large', Gem, (r) => r.val >= 400]];
  const ALL = [...BASE, ...FOCUS];

  return function Console() {
    const [rows, setRows] = useState(() => items.slice(0, 10).map(mk));
    const [view, setView] = useState('All');
    const [tab, setTab] = useState('List');
    const [q, setQ] = useState('');
    const [src, setSrc] = useState('All sources');
    const [own, setOwn] = useState('All owners');
    const [sort, setSort] = useState('Newest first');
    const [n, setN] = useState(0);
    const set = (ids, f) => setRows((rs) => rs.map((r) => (ids.includes(r.id) ? f(r) : r)));
    const pred = ALL.find((v) => v[0] === view)[2];
    const f = rows.filter((r) => pred(r) && (src === 'All sources' || r.src === src) && (own === 'All owners' || r.own === own) && (!q || `${r.name} ${r.src} ${r.own || ''}`.toLowerCase().includes(q.toLowerCase())))
      .sort((a, b) => (sort === 'Highest score' ? b.score - a.score : sort === 'Name A–Z' ? a.name.localeCompare(b.name) : a.age - b.age));
    const sel = rows.filter((r) => r.sel);
    const groups = [['Today', f.filter((r) => r.age < 24)], ['This week', f.filter((r) => r.age >= 24 && r.age < 168)], ['Earlier', f.filter((r) => r.age >= 168)]].filter((g) => g[1].length);
    const adv = (ids) => set(ids, (r) => ({ ...r, st: (r.st + 1) % stages.length, age: 0 }));
    const add = () => { setRows([{ ...mk(`New ${cut(T, 18)} record ${n + 1}`, 100 + n), own: null, next: null, age: 0, score: 40, dup: false, st: 0 }, ...rows]); setN(n + 1); setView('All'); };
    const row = (r) => (
      <div key={r.id} className={`cn-r${r.sel ? ' on' : ''}`}>
        <button type="button" className="cn-ck" aria-pressed={r.sel} aria-label={`Select ${r.name}`} onClick={() => set([r.id], (x) => ({ ...x, sel: !x.sel }))}>{r.sel && <Check size={10} aria-hidden="true" />}</button>
        <i className="cn-av">{ini(r.name)}</i>
        <span className="cn-nm"><b><span>{cut(r.name, 30)}</span>{r.dup && <em>Duplicate</em>}</b><small><Clock size={10} aria-hidden="true" /> {r.next || 'Next step not set'}</small></span>
        <button type="button" className="cn-st" title="Move to next stage" onClick={() => adv([r.id])}>{stages[r.st]}</button>
        <span className="cn-sr">{r.src}</span>
        <span className="cn-sc"><b>{r.score}</b><i><s style={{ width: `${r.score}%` }} /></i></span>
        <button type="button" className={`cn-ow${r.own ? '' : ' none'}`} onClick={() => !r.own && set([r.id], (x) => ({ ...x, own: ME }))}>{r.own || 'Assign to me'}</button>
        <time>{age(r.age)}</time>
      </div>);
    return (<>
      <Top t={`Console · ${cut(T, 24)}`} />
      <div className="cn">
        <aside className="cn-side" aria-label="Views">
          <button type="button" className="cn-new" onClick={add}><Plus size={12} aria-hidden="true" />New record</button>
          {BASE.map(([k, I, p]) => (<button key={k} type="button" aria-pressed={view === k} className={view === k ? 'on' : ''} onClick={() => setView(k)}><I size={12} aria-hidden="true" /><span>{k}</span><em>{rows.filter(p).length}</em></button>))}
          <h6>Focus</h6>
          {FOCUS.map(([k, I, p]) => { const c = rows.filter(p).length; return (<button key={k} type="button" aria-pressed={view === k} className={view === k ? 'on' : ''} onClick={() => setView(k)}><I size={12} aria-hidden="true" /><span>{k}</span><em className={c && /Overdue|Stuck/.test(k) ? 'hot' : ''}>{c}</em></button>); })}
        </aside>
        <section className="cn-main">
          <header><div><h4>{view === 'All' ? 'All records' : view}</h4><small>Showing {f.length} of {rows.length} · pipeline {money(f.reduce((a, r) => a + r.val, 0))}</small></div>
            <div className="cn-tabs" role="group" aria-label="Layout">{['List', 'Board', 'Tasks', 'Insights'].map((t) => <button key={t} type="button" aria-pressed={tab === t} className={tab === t ? 'on' : ''} onClick={() => setTab(t)}>{t}</button>)}</div></header>
          <div className="cn-tools">
            <label className="cn-q"><Search size={12} aria-hidden="true" /><input type="search" aria-label="Search records" placeholder="Name, owner, source…" value={q} onChange={(e) => setQ(e.target.value)} /></label>
            {[[src, setSrc, ['All sources', ...SRC]], [own, setOwn, ['All owners', ...OWN]], [sort, setSort, ['Newest first', 'Highest score', 'Name A–Z']]].map(([v, fn, o], i) => (<label key={i} className="cn-sel"><select value={v} aria-label={['Source', 'Owner', 'Sort'][i]} onChange={(e) => fn(e.target.value)}>{o.map((x) => <option key={x}>{x}</option>)}</select><ChevronDown size={11} aria-hidden="true" /></label>))}
          </div>
          {sel.length > 0 && (<div className="cn-bulk" role="toolbar" aria-label="Bulk actions"><b>{sel.length} selected</b><button type="button" onClick={() => set(sel.map((r) => r.id), (r) => ({ ...r, own: r.own || ME, sel: false }))}>Assign to me</button><button type="button" onClick={() => { adv(sel.map((r) => r.id)); set(sel.map((r) => r.id), (r) => ({ ...r, sel: false })); }}>Advance stage</button><button type="button" className="dk" onClick={() => setRows(rows.filter((r) => !r.sel))}>Archive</button><button type="button" onClick={() => set(sel.map((r) => r.id), (r) => ({ ...r, sel: false }))}>Clear</button></div>)}
          <div className="cn-body">
            {tab === 'List' && (groups.length ? groups.map(([g, l]) => (<div key={g}><h5>{g}<em>{l.length}</em></h5>{l.map(row)}</div>)) : <p className="og-none">No records match this view.</p>)}
            {tab === 'Board' && (<div className="cn-bd">{stages.map((s, si) => { const c = f.filter((r) => r.st === si); return (<div key={s}><h5>{s}<em>{c.length}</em></h5>{c.map((r) => (<button key={r.id} type="button" onClick={() => adv([r.id])} aria-label={`${r.name}: move to next stage`}><b>{cut(r.name, 26)}</b><small>{r.own || 'Unassigned'} · {r.score}</small><i><s style={{ width: `${r.score}%` }} /></i></button>))}</div>); })}</div>)}
            {tab === 'Tasks' && (f.filter((r) => r.next).length ? <div className="cn-tks">{f.filter((r) => r.next).map((r) => (<label key={r.id} className={`cn-tk${r.done ? ' dn' : ''}`}><input type="checkbox" checked={r.done} onChange={() => set([r.id], (x) => ({ ...x, done: !x.done }))} /><span><b>{cut(r.name, 34)}</b><small>{r.next}</small></span><em>{r.own || 'Unassigned'}</em></label>))}</div> : <p className="og-none">No next steps in this view.</p>)}
            {tab === 'Insights' && (<div className="cn-in">{[['By source', SRC.map((s) => [s, f.filter((r) => r.src === s).length])], ['By stage', stages.map((s, i) => [s, f.filter((r) => r.st === i).length])], ['Owner load', OWN.slice(0, 4).map((o) => [o.split(' ')[1], f.filter((r) => r.own === o).length])]].map(([h, d]) => { const m = Math.max(1, ...d.map((x) => x[1])); return (<div key={h}><h5>{h}</h5>{d.map(([k, v]) => <p key={k}><span>{k}</span><i><s style={{ width: `${v / m * 100}%` }} /></i><b>{v}</b></p>)}</div>); })}<div className="cn-top"><h5>Top scoring</h5>{[...f].sort((a, b) => b.score - a.score).slice(0, 3).map((r) => <p key={r.id}><b>{cut(r.name, 34)}</b><span>{stages[r.st]}</span><em>{r.score}</em></p>)}</div></div>)}
          </div>
          <footer className="cn-foot"><span>{f.length} records</span><span>Average score {f.length ? Math.round(f.reduce((a, r) => a + r.score, 0) / f.length) : 0}</span><span>{f.filter((r) => !r.own).length} unassigned</span><span>Pipeline {money(f.reduce((a, r) => a + r.val, 0))}</span></footer>
        </section>
      </div>
    </>);
  };
}
