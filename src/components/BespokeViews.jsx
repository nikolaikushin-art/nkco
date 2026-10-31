import React, { useState, useMemo } from 'react';
import { Top, Kpi } from './HeroDevices';
import { OmsTabs, csvDownload } from './OmsGrid';
import makeConsole from './ConsoleView';
import '../styles/bespoke-v660.css';
import '../styles/console-v661.css';

// v660 · six more working tablet modules, each a different kind of table (not another list):
// Register (master-detail + checklist), Matrix (RACI heat-grid), Ledger (running balance), Calendar (week agenda),
// Scorecard (weighted options, live sliders), Pipeline (stage funnel that filters a table). Seeded per page.
const cut = (s = '', n = 30) => { const t = String(s); return t.length <= n ? t : `${t.slice(0, n - 1).replace(/[\s,;:–-]+$/, '')}…`; };
const OWN = ['N. Karam', 'R. Haddad', 'L. Saeed', 'M. Farouk', 'S. Idris', 'T. Mansour'];
const rnd = (seed, i, m) => ((seed * 31 + i * 17 + (seed >> 3) * (i + 1)) >>> 0) % m;
const money = (n) => (n >= 1000 ? `AED ${(n / 1000).toFixed(2)}M` : `AED ${n}K`);

export function bespokeViews(P, title, seed) {
  const T = cut(title, 30);
  const items = P.deli.length ? P.deli : [title];
  const K = (a) => (<div className="oms-kpis">{a.map(([l, v, d]) => <Kpi key={l} l={l} v={String(v)} d={d} />)}</div>);
  const stg = P.stages.map((s) => s.title);
  const VOC = [[/noc|minimum|stay|rule/i, ['Application filed', 'Developer reply', 'Fee paid', 'NOC issued', 'Filed with registry']], [/sukuk|bond|issu|ipo|equity/i, ['Mandate signed', 'Docs drafted', 'Rating received', 'Book built', 'Priced']], [/port|terminal|logist|freight/i, ['Scope agreed', 'Site visit', 'Berth plan', 'Tariff set', 'Handover']], [/data room|request|index|diligence/i, ['List issued', 'Uploaded', 'Indexed', 'Q&A closed', 'Cleared']], [/system|erp|crm|digital|data|ai\b/i, ['Requirements', 'Vendor shortlist', 'Demo scored', 'Contract', 'Go-live']], [/revenue|report|kpi|finance|fee/i, ['Data pulled', 'Reconciled', 'Variance explained', 'Partner review', 'Published']], [/decision|governance|rights|board/i, ['Question framed', 'Options drafted', 'Board paper', 'Decision recorded', 'Actions assigned']], [/transaction|coordinat|deal|acqui|sale/i, ['Teaser out', 'NDA signed', 'Offers in', 'SPA agreed', 'Completion']], [/research|insight|intelligence|publication|briefing/i, ['Question set', 'Sources read', 'Draft note', 'Peer review', 'Published']]];
  const V = (VOC.find(([r]) => r.test(title)) || [])[1] || null;

  const Register = () => {
    const [a, setA] = useState(0);
    const [chk, setChk] = useState({});
    const steps = V || ['Brief agreed', 'Inputs received', 'Draft reviewed', 'Partner sign-off', 'Issued'];
    const done = (i) => steps.filter((_, k) => (chk[`${i}-${k}`] ?? k < rnd(seed, i, 4))).length;
    const it = items[a];
    return (<>
      <Top t={`Register · ${T}`} />
      <div className="oms-kpis"><Kpi l="Items" v={String(items.length)} d="In the register" /><Kpi l="Issued" v={String(items.filter((_, i) => done(i) === 5).length)} d="Signed off" /><Kpi l="Open checks" v={String(items.reduce((s, _, i) => s + 5 - done(i), 0))} d="Across items" /><Kpi l="Owner" v={OWN[seed % 6].split(' ')[1]} d="Lead partner" /></div>
      <div className="bk-md">
        <div className="oms-card bk-list" role="listbox" aria-label="Register items">{items.slice(0, 8).map((d, i) => (
          <button key={d} type="button" role="option" aria-selected={a === i} className={a === i ? 'on' : ''} onClick={() => setA(i)}><b>{cut(d, 34)}</b><i><s style={{ width: `${done(i) * 20}%` }} /></i><em>{done(i)}/5</em></button>))}</div>
        <div className="oms-card bk-det"><small>{stg[a % stg.length]} · {OWN[(seed + a) % 6]}</small><h4>{cut(it, 60)}</h4>
          <input className="bk-note" aria-label="Note" placeholder="Add a note" value={chk[`n${a}`] || ''} onChange={(e) => setChk({ ...chk, [`n${a}`]: e.target.value })} />
          {steps.map((s, k) => { const on = chk[`${a}-${k}`] ?? k < rnd(seed, a, 4); return (<label key={s}><input type="checkbox" checked={on} onChange={() => setChk({ ...chk, [`${a}-${k}`]: !on })} /><span>{s}</span></label>); })}
        </div>
      </div>
    </>);
  };

  const Matrix = () => {
    const roles = ['Partner', 'Lead', 'Analyst', 'Client'];
    const seq = ['R', 'A', 'C', 'I', '–'];
    const [g, setG] = useState(() => items.slice(0, 7).map((_, r) => roles.map((_, c) => seq[rnd(seed, r * 4 + c, 5)])));
    const bump = (r, c) => setG((x) => x.map((row, i) => (i === r ? row.map((v, j) => (j === c ? seq[(seq.indexOf(v) + 1) % 5] : v)) : row)));
    const noA = g.filter((r) => !r.includes('A')).length;
    return (<>
      <Top t={`Responsibility matrix · ${T}`} />
      {K([['Deliverables', g.length, 'In the matrix'], ['Accountable', g.filter((r) => r.includes('A')).length, 'Rows with an owner'], ['Responsible', g.flat().filter((v) => v === 'R').length, 'Doing the work'], ['Gaps', noA, noA ? 'Need an A' : 'None open']])}
      <div className="os-bar"><span className="og-hint">Click a cell to change R, A, C or I. Every row needs one A.</span><span className={`bk-flag${noA ? ' warn' : ''}`}>{noA ? `${noA} rows without an owner` : 'Every row has an owner'}</span></div>
      <div className="oms-card bk-mx"><div className="bk-mr bk-mh"><span>Deliverable</span>{roles.map((r) => <span key={r}>{r}</span>)}</div>
        {g.map((row, r) => (<div className="bk-mr" key={items[r]}><b>{cut(items[r], 36)}</b>{row.map((v, c) => <button key={c} type="button" data-v={v} aria-label={`${roles[c]}: ${v}`} onClick={() => bump(r, c)}>{v}</button>)}</div>))}</div>
    </>);
  };

  const Ledger = () => {
    const [desc, setDesc] = useState(false);
    const rows = useMemo(() => { let run = 0; return items.slice(0, 8).map((d, i) => { const v = 90 + rnd(seed, i, 400); const out = i % 4 === 3; run += out ? -v / 2 : v; return { d, v: out ? -Math.round(v / 2) : v, run: Math.round(run), t: `${2 + ((seed + i * 3) % 26)} Nov` }; }); }, []);
    const view = desc ? [...rows].reverse() : rows;
    const max = Math.max(...rows.map((r) => Math.abs(r.run)));
    const csv = [{ key: 'd', label: 'Entry' }, { key: 'v', label: 'AED K' }, { key: 'run', label: 'Balance' }];
    return (<>
      <Top t={`Fee ledger · ${T}`} />
      {K([['Entries', rows.length, 'This period'], ['Billed', money(rows.filter((r) => r.v > 0).reduce((a, r) => a + r.v, 0)), 'Gross'], ['Credits', money(Math.abs(rows.filter((r) => r.v < 0).reduce((a, r) => a + r.v, 0))), 'Netted off'], ['Balance', money(rows[rows.length - 1].run), 'Running']])}
      <div className="os-bar"><OmsTabs items={['Oldest first', 'Newest first']} value={desc ? 'Newest first' : 'Oldest first'} onChange={(v) => setDesc(v === 'Newest first')} /><button type="button" className="os-btn dark" onClick={() => csvDownload('ledger.csv', csv, rows)}>Export CSV</button></div>
      <div className="oms-card bk-lg">{view.map((r) => (<div className="bk-lr" key={r.d}><span>{r.t}</span><b>{cut(r.d, 32)}</b><em className={r.v < 0 ? 'neg' : ''}>{r.v < 0 ? '−' : '+'}{Math.abs(r.v)}K</em><i><s style={{ width: `${Math.abs(r.run) / max * 100}%` }} /></i><u>{money(Math.abs(r.run))}</u></div>))}
        <div className="bk-lt"><span>Balance</span><b>{money(rows[rows.length - 1].run)}</b></div></div>
    </>);
  };

  const Calendar = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    const slots = ['09:00', '11:00', '14:00', '16:00'];
    const [done, setDone] = useState({});
    const at = (d, s) => ((d * 5 + s * 3 + seed) % 3 === 0 ? null : items[(d + s * 2 + seed) % items.length]);
    return (<>
      <Top t={`Week ahead · ${T}`} />
      {K([['Booked', days.length * slots.length - days.flatMap((_, d) => slots.map((__, q) => at(d, q))).filter((x) => !x).length, 'Slots this week'], ['Done', Object.values(done).filter(Boolean).length, 'Marked off'], ['Free', days.flatMap((_, d) => slots.map((__, q) => at(d, q))).filter((x) => !x).length, 'Open slots'], ['Owners', 6, 'On the rota']])}
      <div className="os-bar"><span className="og-hint">Click an entry to mark it done</span><span className="bk-flag">{Object.values(done).filter(Boolean).length} done this week</span></div>
      <div className="oms-card bk-cal"><span />{days.map((d) => <b key={d}>{d}</b>)}
        {slots.map((s, si) => (<React.Fragment key={s}><em>{s}</em>{days.map((d, di) => { const x = at(di, si); const k = `${di}${si}`; return x ? <button key={k} type="button" className={done[k] ? 'is-done' : ''} onClick={() => setDone({ ...done, [k]: !done[k] })}>{cut(x, 20)}<small>{OWN[(di + si + seed) % 6]}</small></button> : <i key={k} />; })}</React.Fragment>))}
      </div>
    </>);
  };

  const Scorecard = () => {
    const crit = ['Fit', 'Cost', 'Speed', 'Risk'];
    const [w, setW] = useState([4, 3, 2, 3]);
    const opts = items.slice(0, 5).map((d, i) => ({ d, s: crit.map((_, c) => 2 + rnd(seed, i * 4 + c, 9) / 2) }));
    const tot = (o) => o.s.reduce((a, v, c) => a + v * w[c], 0) / w.reduce((a, b) => a + b, 0);
    const ranked = [...opts].sort((a, b) => tot(b) - tot(a));
    return (<>
      <Top t={`Options scorecard · ${T}`} />
      {K([['Leader', cut(ranked[0].d, 12), 'Top ranked'], ['Score', tot(ranked[0]).toFixed(1), 'Out of 5'], ['Lead', (tot(ranked[0]) - tot(ranked[1] || ranked[0])).toFixed(2), 'Over second'], ['Weights', w.reduce((a, b) => a + b, 0), 'Points in play']])}
      <div className="oms-card bk-w">{crit.map((c, i) => (<label key={c}><span>{c}</span><input type="range" min="0" max="5" value={w[i]} aria-label={`Weight for ${c}`} onChange={(e) => setW(w.map((x, k) => (k === i ? +e.target.value : x)))} /><em>{w[i]}</em></label>))}</div>
      <div className="oms-card bk-sc">{ranked.map((o, r) => (<div key={o.d} className={r === 0 ? 'top' : ''}><i>{r + 1}</i><b>{cut(o.d, 34)}</b><span>{o.s.map((v, c) => <s key={c} style={{ height: `${v * 20}%` }} title={`${crit[c]} ${v.toFixed(1)}`} />)}</span><u>{tot(o).toFixed(1)}</u></div>))}</div>
    </>);
  };

  const Pipeline = () => {
    const [f, setF] = useState(0);
    const n = Math.max(stg.length, 4);
    const names = stg.length >= 4 ? stg : ['Brief', 'Draft', 'Review', 'Issue'];
    const cnt = names.map((_, i) => Math.max(2, 20 - i * 3 - rnd(seed, i, 3)));
    const rows = items.map((d, i) => ({ d, s: i % n, o: OWN[(i + seed) % 6], v: 80 + rnd(seed, i, 300) }));
    const shown = rows.filter((r) => r.s === f);
    return (<>
      <Top t={`Pipeline · ${T}`} />
      {K([['In flight', rows.length, 'Items'], ['At stage', shown.length, cut(names[f], 14)], ['Value here', money(shown.reduce((a, r) => a + r.v, 0)), 'This stage'], ['Stages', n, 'In the method']])}
      <div className="bk-fn">{names.slice(0, n).map((s, i) => (<button key={s} type="button" aria-pressed={f === i} className={f === i ? 'on' : ''} onClick={() => setF(i)} style={{ flexGrow: cnt[i] }}><b>{cnt[i]}</b><span>{cut(s, 14)}</span></button>))}</div>
      <div className="oms-card bk-pl"><small>{names[f]} · {shown.length || 'no'} items here</small>{shown.length ? shown.map((r) => <p key={r.d}><b>{cut(r.d, 38)}</b><span>{r.o}</span><em>{money(r.v)}</em></p>) : <p className="og-none">Nothing at this stage.</p>}</div>
    </>);
  };


  const Waterfall = () => {
    const [on, setOn] = useState(null);
    const parts = items.slice(0, 6).map((d, i) => ({ d, v: (i % 3 === 2 ? -1 : 1) * (60 + rnd(seed, i, 220)) }));
    let run = 0; const bars = parts.map((x) => { const a = run; run += x.v; return { ...x, a, b: run }; });
    const hi = Math.max(...bars.map((b) => Math.max(b.a, b.b)), 1);
    return (<><Top t={`Fee bridge · ${T}`} />
      {K([['Steps', bars.length, 'In the bridge'], ['Added', money(bars.filter((b) => b.v > 0).reduce((a, b) => a + b.v, 0)), 'Gross'], ['Reduced', money(Math.abs(bars.filter((b) => b.v < 0).reduce((a, b) => a + b.v, 0))), 'Credits'], ['Closing', money(run), 'Net']])}
      <div className="oms-card bk-wf" aria-label="Fee bridge">{bars.map((b, i) => (<button key={b.d} type="button" aria-pressed={on === i} className={b.v < 0 ? 'neg' : ''} onClick={() => setOn(on === i ? null : i)}><s style={{ bottom: `${Math.min(b.a, b.b) / hi * 80}%`, height: `${Math.abs(b.v) / hi * 80}%` }} /><span>{cut(b.d, 12)}</span></button>))}</div>
      <div className="bk-flag">{on === null ? `Closing position ${money(run)}` : `${cut(bars[on].d, 40)}: ${bars[on].v > 0 ? '+' : '−'}${Math.abs(bars[on].v)}K`}</div></>);
  };
  const Heatmap = () => {
    const wk = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6'];
    const [g, setG] = useState(() => items.slice(0, 6).map((_, r) => wk.map((_, c) => rnd(seed, r * 6 + c, 5))));
    return (<><Top t={`Workload heat-map · ${T}`} />
      {K([['Peak week', wk[[0, 1, 2, 3, 4, 5].map((c) => g.reduce((a, r) => a + r[c], 0)).reduce((m, v, i, A) => (v > A[m] ? i : m), 0)], 'Highest load'], ['Average', (g.flat().reduce((a, b) => a + b, 0) / g.flat().length).toFixed(1), 'Out of 4'], ['At capacity', g.flat().filter((v) => v === 4).length, 'Cells at 4'], ['Free', g.flat().filter((v) => v === 0).length, 'Cells at 0']])}
      <div className="os-bar"><span className="og-hint">Click a week to raise its load; at the top it resets</span></div>
      <div className="oms-card bk-hm"><span />{wk.map((w) => <b key={w}>{w}</b>)}<b>Total</b>{g.map((row, r) => (<React.Fragment key={r}><em>{cut(items[r], 22)}</em>{row.map((v, c) => <button key={c} type="button" data-l={v} aria-label={`Load ${v} of 4`} onClick={() => setG(g.map((x, i) => (i === r ? x.map((y, j) => (j === c ? (y + 1) % 5 : y)) : x)))}>{v}</button>)}<u>{row.reduce((a, b) => a + b, 0)}</u></React.Fragment>))}<span className="bk-lbl">Week load</span>{wk.map((w, c) => <u key={w}>{g.reduce((a, r) => a + r[c], 0)}</u>)}<u className="bk-sum">{g.flat().reduce((a, b) => a + b, 0)}</u></div>
      <div className="bk-key"><span>Load</span>{[0, 1, 2, 3, 4].map((l) => <i key={l} data-l={l}>{l}</i>)}<span>0 free · 4 at capacity</span></div></>);
  };
  const Swimlane = () => {
    const [hot, setHot] = useState(null);
    const lanes = [0, 1, 2, 3].map((l) => ({ o: OWN[(seed + l) % 6], b: items.filter((_, i) => i % 4 === l).slice(0, 3) }));
    return (<><Top t={`Swimlanes · ${T}`} />
      {K([['Lanes', lanes.length, 'Owners'], ['Tasks', lanes.reduce((a, l) => a + l.b.length, 0), 'Scheduled'], ['Busiest', lanes.reduce((m, l) => (l.b.length > m.b.length ? l : m)).o.split(' ')[1], 'Most tasks'], ['Selected', hot ? 1 : 0, 'Click a bar']])}
      <div className="oms-card bk-sw">{lanes.map((l, li) => (<div key={l.o}><b>{l.o}</b><i>{l.b.map((d, k) => <button key={d} type="button" className={hot === d ? 'on' : ''} style={{ left: `${k * 31 + li * 4}%`, width: '28%' }} onClick={() => setHot(hot === d ? null : d)}>{cut(d, 18)}</button>)}</i></div>))}</div>
      <div className="bk-flag">{hot ? `Selected: ${cut(hot, 50)}` : 'Click a bar to pick a task'}</div></>);
  };
  const Allocation = () => {
    const [a, setA] = useState(() => items.slice(0, 5).map((_, i) => 8 + rnd(seed, i, 18)));
    const tot = a.reduce((x, y) => x + y, 0);
    const adj = (i, d) => setA(a.map((v, k) => (k === i ? Math.max(0, v + d) : v)));
    return (<><Top t={`Allocation · ${T}`} />
      {K([['Lines', a.length, 'Allocated'], ['Points', tot, 'In total'], ['Largest', `${(Math.max(...a) / tot * 100).toFixed(0)}%`, cut(items[a.indexOf(Math.max(...a))], 14)], ['Smallest', `${(Math.min(...a) / tot * 100).toFixed(0)}%`, cut(items[a.indexOf(Math.min(...a))], 14)]])}
      <div className="bk-bar">{a.map((v, i) => <s key={i} style={{ flexGrow: v || 0.01 }} data-i={i} />)}</div>
      <div className="oms-card bk-al">{a.map((v, i) => (<p key={i}><b>{cut(items[i], 30)}</b><button type="button" aria-label="Decrease" onClick={() => adj(i, -2)}>−</button><em>{(v / tot * 100).toFixed(1)}%</em><button type="button" aria-label="Increase" onClick={() => adj(i, 2)}>+</button></p>))}</div></>);
  };
  const Tracker = () => {
    const [o, setO] = useState(0);
    return (<><Top t={`Tracker · ${T}`} />
      {K([['Items', Math.min(items.length, 6), 'Tracked'], ['Open', o >= 0 ? 1 : 0, 'Expanded'], ['Owners', 6, 'Named'], ['Next due', `${2 + ((seed + Math.max(o, 0) * 5) % 26)} Nov`, 'Selected item']])}
      <div className="oms-card bk-tr">{items.slice(0, 6).map((d, i) => (<div key={d} className={o === i ? 'open' : ''}><button type="button" aria-expanded={o === i} onClick={() => setO(o === i ? -1 : i)}><b>{cut(d, 40)}</b><span>{OWN[(seed + i) % 6]}</span><em>{(V || ['Brief', 'Draft', 'Review', 'Issue', 'Close'])[rnd(seed, i, 5)]}</em></button>{o === i && <p>Next step: {(V || ['Confirm the brief', 'Circulate the draft', 'Book the review', 'Issue to the client', 'Close the file'])[(rnd(seed, i, 5) + 1) % 5]}. Due {2 + ((seed + i * 5) % 26)} Nov.</p>}</div>))}</div></>);
  };
  const Compare = () => {
    const [pick, setPick] = useState([0, 1, 2]);
    const rows = ['Lead time', 'Fee', 'Effort', 'Risk'];
    return (<><Top t={`Compare · ${T}`} />
      {K([['Comparing', 3, 'Columns'], ['Lowest fee', money(Math.min(...pick.map((p) => 90 + rnd(seed, p * 4 + 1, 300)))), 'Of the three'], ['Fastest', `${Math.min(...pick.map((p) => 2 + rnd(seed, p * 4, 10)))} wks`, 'Lead time'], ['Options', items.length, 'Available']])}
      <div className="os-bar"><span className="og-hint">Click an item to swap it into the next column</span></div>
      <div className="oms-card bk-cp"><span />{pick.map((p, c) => <b key={c}>{cut(items[p % items.length], 20)}</b>)}{rows.map((r, ri) => (<React.Fragment key={r}><em>{r}</em>{pick.map((p, c) => <span key={c}>{ri === 1 ? money(90 + rnd(seed, p * 4 + ri, 300)) : ri === 0 ? `${2 + rnd(seed, p * 4 + ri, 10)} wks` : ['Low', 'Medium', 'High'][rnd(seed, p * 4 + ri, 3)]}</span>)}</React.Fragment>))}</div>
      <div className="bk-chips">{items.slice(0, 6).map((d, i) => <button key={d} type="button" onClick={() => setPick([...pick.slice(1), i])}>{cut(d, 16)}</button>)}</div></>);
  };

  const spark = (pts, w, h) => pts.map((y, x) => `${(x * w / (pts.length - 1)).toFixed(1)},${(h - (y - 20) * h / 80).toFixed(1)}`).join(' ');
  const Stocks = () => {
    const [a, setA] = useState(0);
    const rows = items.slice(0, 7).map((d, i) => { const pts = Array.from({ length: 14 }, (_, k) => 30 + rnd(seed, i * 14 + k, 60)); return { d, pts, v: 80 + rnd(seed, i, 400), dl: pts[13] - pts[0] }; });
    const r = rows[a];
    return (<><Top t={`Watchlist · ${T}`} />
      {K([['Watching', rows.length, 'Items'], ['Rising', rows.filter((x) => x.dl >= 0).length, 'Up on the period'], ['Falling', rows.filter((x) => x.dl < 0).length, 'Down'], ['Selected', money(r.v), cut(r.d, 14)]])}
      <div className="oms-card ap-hero"><small>{cut(r.d, 44)}</small><b>{money(r.v)}</b><em className={r.dl < 0 ? 'dn' : 'up'}>{r.dl < 0 ? '▼' : '▲'} {Math.abs(r.dl)} pts</em>
        <svg viewBox="0 0 400 100" preserveAspectRatio="none" aria-hidden="true"><polyline points={spark(r.pts, 400, 100)} fill="none" stroke="var(--ac)" strokeWidth="3" strokeLinejoin="round" vectorEffect="non-scaling-stroke" /></svg></div>
      <div className="oms-card ap-rows">{rows.map((x, i) => (<button key={x.d} type="button" aria-pressed={a === i} className={a === i ? 'on' : ''} onClick={() => setA(i)}><b>{cut(x.d, 30)}</b><svg viewBox="0 0 80 24" aria-hidden="true"><polyline points={spark(x.pts, 80, 24)} fill="none" stroke={x.dl < 0 ? '#4d5966' : 'var(--ac)'} strokeWidth="1.6" vectorEffect="non-scaling-stroke" /></svg><span>{money(x.v)}</span><u className={x.dl < 0 ? 'dn' : 'up'}>{x.dl < 0 ? '−' : '+'}{Math.abs(x.dl)}</u></button>))}</div></>);
  };
  const Inset = () => {
    const [on, setOn] = useState({});
    const [n, setN] = useState({});
    const groups = [['Delivery', items.slice(0, 3)], ['Review', items.slice(3, 6)], ['Handover', items.slice(6, 8)]].filter((g) => g[1].length);
    return (<><Top t={`Settings · ${T}`} />
      {K([['Groups', groups.length, 'Sections'], ['Switched on', Object.values(on).filter(Boolean).length, 'Items'], ['Reminders', Object.values(n).reduce((a, b) => a + b, 0), 'Set'], ['Owner', OWN[seed % 6].split(' ')[1], 'Lead']])}
      <div className="ap-in">{groups.map(([g, list]) => (<section key={g}><h5>{g}</h5><div className="oms-card">{list.map((d) => (<div key={d}><span><b>{cut(d, 34)}</b><small>{OWN[rnd(seed, d.length, 6)]}</small></span>
        <span className="st"><button type="button" aria-label="Fewer reminders" onClick={() => setN({ ...n, [d]: Math.max(0, (n[d] || 0) - 1) })}>−</button><em>{n[d] || 0}</em><button type="button" aria-label="More reminders" onClick={() => setN({ ...n, [d]: (n[d] || 0) + 1 })}>+</button></span>
        <button type="button" role="switch" aria-checked={!!on[d]} aria-label={`Track ${d}`} className="sw" onClick={() => setOn({ ...on, [d]: !on[d] })}><i /></button></div>))}</div></section>))}</div></>);
  };
  const Rings = () => {
    const [o, setO] = useState(0);
    const people = [0, 1, 2, 3].map((i) => ({ n: OWN[(seed + i) % 6], r: [0, 1, 2].map((k) => 25 + rnd(seed, i * 3 + k, 75)) }));
    const mine = items.filter((_, i) => i % 4 === o);
    const ring = (r, i) => [38, 29, 20].map((rad, k) => { const c = 2 * Math.PI * rad; return <g key={k}><circle cx="50" cy="50" r={rad} fill="none" stroke="#e9ecf0" strokeWidth="7" /><circle cx="50" cy="50" r={rad} fill="none" stroke={['var(--ac)', 'var(--sb)', '#c8a24a'][k]} strokeWidth="7" strokeLinecap="round" strokeDasharray={`${c * r[k] / 100} ${c}`} transform="rotate(-90 50 50)" /></g>; });
    return (<><Top t={`Team rings · ${T}`} />
      <div className="ap-rg">{people.map((p, i) => (<button key={p.n} type="button" aria-pressed={o === i} className={o === i ? 'on' : ''} onClick={() => setO(i)}><svg viewBox="0 0 100 100" aria-hidden="true">{ring(p.r, i)}</svg><b>{p.n}</b><small>{p.r.map((v) => `${v}%`).join(' · ')}</small></button>))}</div>
      <div className="oms-card ap-rows"><small>{people[o].n} · {mine.length} items</small>{mine.map((d, i) => (<p key={d}><b>{cut(d, 40)}</b><span>{(V || stg)[i % (V || stg).length]}</span><em>{people[o].r[i % 3]}%</em></p>))}</div></>);
  };
  const Inbox = () => {
    const [m, setM] = useState(() => items.slice(0, 7).map((d, i) => ({ d, un: i % 2 === 0, fl: false, ar: false, w: OWN[(seed + i) % 6] })));
    const [a, setA] = useState(0);
    const live = m.filter((x) => !x.ar);
    const cur = live[Math.min(a, live.length - 1)];
    const upd = (f) => setM(m.map((x) => (x === cur ? f(x) : x)));
    return (<><Top t={`Inbox · ${T}`} />
      {K([['Unread', live.filter((x) => x.un).length, 'Waiting'], ['Flagged', live.filter((x) => x.fl).length, 'For follow-up'], ['Archived', m.filter((x) => x.ar).length, 'Cleared'], ['Total', m.length, 'Items']])}
      <div className="ap-mail"><div className="oms-card" role="listbox" aria-label="Inbox">{live.map((x, i) => (<button key={x.d} type="button" role="option" aria-selected={cur === x} className={cur === x ? 'on' : ''} onClick={() => { setA(i); setM(m.map((y) => (y === x ? { ...y, un: false } : y))); }}>{x.un ? <i /> : <i className="r" />}<span><b>{cut(x.d, 30)}</b><small>{x.w} · {x.fl ? 'Flagged' : 'Needs a reply'}</small></span></button>))}{!live.length && <p className="og-none">Inbox clear.</p>}</div>
        <div className="oms-card ap-read">{cur ? (<><small>{cur.w}</small><h4>{cut(cur.d, 60)}</h4><p>Ready for your review. Open the item, check the figures, then reply or move it on.</p><div><button type="button" onClick={() => upd((x) => ({ ...x, fl: !x.fl }))}>{cur.fl ? 'Unflag' : 'Flag'}</button><button type="button" className="dk" onClick={() => upd((x) => ({ ...x, ar: true }))}>Archive</button></div></>) : <p className="og-none">Nothing selected.</p>}</div></div></>);
  };
  const Segment = () => {
    const [p, setP] = useState('Month');
    const f = { Week: 0.25, Month: 1, Quarter: 3 }[p];
    const rows = items.slice(0, 6).map((d, i) => { const pl = Math.round((60 + rnd(seed, i, 240)) * f); const ac = Math.round(pl * (0.8 + rnd(seed, i + 9, 40) / 100)); return { d, pl, ac, v: ac - pl }; });
    const tp = rows.reduce((a, r) => a + r.pl, 0); const ta = rows.reduce((a, r) => a + r.ac, 0);
    return (<><Top t={`Plan vs actual · ${T}`} />
      <div className="os-bar"><OmsTabs items={['Week', 'Month', 'Quarter']} value={p} onChange={setP} label="Period" /><button type="button" className="os-btn dark" onClick={() => csvDownload('plan-vs-actual.csv', [{ key: 'd', label: 'Item' }, { key: 'pl', label: 'Plan' }, { key: 'ac', label: 'Actual' }], rows)}>Export CSV</button></div>
      {K([['Plan', money(tp), p], ['Actual', money(ta), p], ['Variance', `${ta - tp < 0 ? '−' : '+'}${Math.abs(ta - tp)}K`, 'Actual less plan'], ['Delivered', `${Math.round(ta / tp * 100)}%`, 'Of plan']])}
      <div className="oms-card ap-seg"><div className="h"><span /><b>Plan</b><b>Actual</b><b>Variance</b></div>{rows.map((r) => (<div key={r.d}><span>{cut(r.d, 32)}</span><em>{r.pl}K</em><em>{r.ac}K</em><u className={r.v < 0 ? 'dn' : 'up'}>{r.v < 0 ? '−' : '+'}{Math.abs(r.v)}K</u></div>))}</div></>);
  };

  const Treemap = () => {
    const [a, setA] = useState(0);
    const L = items.slice(0, 8).map((d, i) => ({ d, v: 40 + rnd(seed, i, 200) }));
    const mx = Math.max(...L.map((x) => x.v)); const sum = L.reduce((x, y) => x + y.v, 0);
    return (<><Top t={`Size map · ${T}`} />
      {K([['Blocks', L.length, 'Items'], ['Total', money(sum), 'Combined'], ['Largest', `${Math.round(mx / sum * 100)}%`, cut(L.reduce((m, x) => (x.v > m.v ? x : m)).d, 14)], ['Selected', money(L[a].v), cut(L[a].d, 14)]])}
      <div className="oms-card bk-tm">{L.map((x, i) => (<button key={x.d} type="button" aria-pressed={a === i} style={{ flexGrow: x.v, '--t': Math.round(x.v / mx * 70) }} onClick={() => setA(i)}><b>{cut(x.d, 22)}</b><small>{money(x.v)} · {Math.round(x.v / sum * 100)}%</small></button>))}</div></>);
  };
  const Radar = () => {
    const ax = ['Scope', 'Cost', 'Speed', 'Quality', 'Risk'];
    const [v, setV] = useState(() => ax.map((_, i) => 2 + rnd(seed, i, 3)));
    const tg = ax.map((_, i) => 3 + rnd(seed, i + 7, 2));
    const pt = (r, i) => { const an = -Math.PI / 2 + i * 2 * Math.PI / 5; return `${(50 + r * 9 * Math.cos(an)).toFixed(1)},${(50 + r * 9 * Math.sin(an)).toFixed(1)}`; };
    return (<><Top t={`Position radar · ${T}`} />
      {K([['Average', (v.reduce((a, b) => a + b, 0) / 5).toFixed(1), 'Out of 5'], ['Target', (tg.reduce((a, b) => a + b, 0) / 5).toFixed(1), 'Out of 5'], ['Gaps', v.filter((x, i) => x < tg[i]).length, 'Below target'], ['Strongest', ax[v.indexOf(Math.max(...v))], 'Axis']])}
      <div className="oms-card bk-rd"><svg viewBox="-12 -4 124 112" aria-hidden="true">{[1, 2, 3, 4, 5].map((r) => <polygon key={r} points={ax.map((_, i) => pt(r, i)).join(' ')} fill="none" stroke="#dfe3e8" strokeWidth=".4" />)}<polygon points={ax.map((_, i) => pt(tg[i], i)).join(' ')} fill="none" stroke="#4d5966" strokeDasharray="2 1.5" strokeWidth=".7" /><polygon points={ax.map((_, i) => pt(v[i], i)).join(' ')} fill="var(--ac)" fillOpacity=".25" stroke="var(--ac)" strokeWidth="1" />{ax.map((a, i) => <text key={a} x={pt(5.9, i).split(',')[0]} y={pt(5.9, i).split(',')[1]} fontSize="3.4" textAnchor="middle" fill="#4d5966">{a}</text>)}</svg>
        <div>{ax.map((a, i) => (<label key={a}><span>{a}</span><input type="range" min="0" max="5" value={v[i]} aria-label={a} onChange={(e) => setV(v.map((x, k) => (k === i ? +e.target.value : x)))} /><em>{v[i]}</em></label>))}</div></div></>);
  };
  const Burndown = () => {
    const [sc, setSc] = useState('Plan');
    const rate = { Plan: 1, Fast: 1.3, Slow: 0.7 }[sc];
    const tot = 20 + (seed % 12);
    const act = Array.from({ length: 11 }, (_, d) => Math.max(0, Math.round(tot - d * (tot / 10) * rate + (rnd(seed, d, 5) - 2))));
    const y = (n) => (100 - n / tot * 90).toFixed(1);
    return (<><Top t={`Burndown · ${T}`} />
      <div className="os-bar"><OmsTabs items={['Plan', 'Fast', 'Slow']} value={sc} onChange={setSc} label="Scenario" /></div>
      {K([['Scope', tot, 'Tasks'], ['Left', act[10], 'Day 10'], ['Pace', `${(tot / 10 * rate).toFixed(1)}/day`, sc], ['Finish', act[10] === 0 ? 'On time' : `+${Math.ceil(act[10] / (tot / 10 * rate))}d`, 'Forecast']])}
      <div className="oms-card bk-bd"><svg viewBox="0 0 110 105" preserveAspectRatio="none" aria-label="Burndown chart"><polyline points={[0, 10].map((d) => `${d * 10},${y(d === 0 ? tot : 0)}`).join(' ')} fill="none" stroke="#c4c8ce" strokeDasharray="3 2" strokeWidth="1" vectorEffect="non-scaling-stroke" /><polyline points={act.map((n, d) => `${d * 10},${y(n)}`).join(' ')} fill="none" stroke="var(--ac)" strokeWidth="2.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" /></svg></div></>);
  };
  const Console = makeConsole({ items, V, stg, seed, T, cut, money, OWN, rnd });
  return { Console, Treemap, Radar, Burndown, Stocks, Inset, Rings, Inbox, Segment, Register, Matrix, Ledger, Calendar, Scorecard, Pipeline, Waterfall, Heatmap, Swimlane, Allocation, Tracker, Compare };
}
