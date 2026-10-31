import React, { useState, useEffect, useRef } from 'react';
import { Seg as OmsTabs } from './CrmUi';

// v664 · the advanced, industry-specific tool inside each CRM (all calculations are live; nothing is stored or sent).
export const num = (v, d = 0) => { const s = String(v); const m = /([\d.]+)\s*(M|K)?/.exec(s); if (!m || !/AED/.test(s)) return d; return parseFloat(m[1]) * (m[2] === 'M' ? 1e6 : m[2] === 'K' ? 1e3 : 1); };
export const fmt = (n) => (n >= 1e6 ? `AED ${(n / 1e6).toFixed(2)}M` : n >= 1e3 ? `AED ${Math.round(n / 1e3).toLocaleString('en')}K` : `AED ${Math.round(n)}`);
const aed = (n) => `AED ${Math.round(n).toLocaleString('en')}`;
const pay = (loan, apr, months) => { const r = apr / 1200; return r ? (loan * r) / (1 - Math.pow(1 + r, -months)) : loan / months; };

const Range = ({ label, value, onChange, min, max, step = 1, show }) => (
  <label className="crm-r"><span>{label}<b>{show ? show(value) : value}</b></span><input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(+e.target.value)} /></label>
);
const Sel = ({ label, value, onChange, opts }) => (
  <label className="crm-r"><span>{label}</span><select value={value} onChange={(e) => onChange(e.target.value)}>{opts.map(([v, t]) => <option key={v} value={v}>{t}</option>)}</select></label>
);
const Row = ({ k, v, big }) => <div className={`crm-kv${big ? ' big' : ''}`}><span>{k}</span><b>{v}</b></div>;

function Mortgage({ deals, record, notify }) {
  const [pid, setPid] = useState(deals[0] ? deals[0].id : 0);
  const [price, setPrice] = useState(deals[0] ? Math.round(num(deals[0].v, 2.4e6) / 5e4) * 5e4 : 2.4e6);
  const [down, setDown] = useState(25); const [rate, setRate] = useState(4.6); const [yrs, setYrs] = useState(25);
  const d = deals.find((x) => x.id === pid);
  const loan = price * (1 - down / 100); const m = pay(loan, rate, yrs * 12); const total = m * yrs * 12; const interest = total - loan;
  const dld = price * 0.04; const comm = price * 0.02; const cash = (price * down) / 100 + dld + comm;
  return (
    <div className="crm-tool">
      <div className="oms-card crm-ctl"><small>Mortgage and fees</small>
        <Sel label="Property" value={pid} onChange={(v) => { const x = deals.find((y) => y.id === +v); setPid(+v); if (x) setPrice(Math.min(2e7, Math.max(4e5, Math.round(num(x.v, 2.4e6) / 5e4) * 5e4))); }} opts={deals.map((x) => [x.id, x.t])} />
        <Range label="Price" value={price} onChange={setPrice} min={4e5} max={2e7} step={5e4} show={fmt} />
        <Range label="Down payment" value={down} onChange={setDown} min={10} max={60} show={(v) => `${v}%`} />
        <Range label="Rate" value={rate} onChange={setRate} min={3} max={8} step={0.1} show={(v) => `${v.toFixed(1)}%`} />
        <Range label="Term" value={yrs} onChange={setYrs} min={5} max={30} show={(v) => `${v} yrs`} />
      </div>
      <div className="oms-card crm-out"><small>Buyer summary</small>
        <Row big k="Monthly payment" v={aed(m)} /><Row k="Loan amount" v={aed(loan)} /><Row k="Total interest" v={aed(interest)} />
        <Row k="Land department fee (4%)" v={aed(dld)} /><Row k="Agency commission (2%)" v={aed(comm)} /><Row k="Cash needed upfront" v={aed(cash)} />
        <div className="crm-split" aria-hidden="true"><i style={{ width: `${(loan / total) * 100}%` }} /></div><em className="og-hint">Principal {Math.round((loan / total) * 100)}% · interest {Math.round((interest / total) * 100)}%</em>
        <button type="button" className="os-btn dark crm-go" onClick={() => { record('Mortgage quote shared', d ? d.t : 'Property', d ? d.id : null); notify(`Quote of ${aed(m)} a month saved`); }}>Share quote with buyer</button>
      </div>
    </div>
  );
}

const ROOMS = [['101', 'Deluxe', 620], ['102', 'Deluxe', 620], ['204', 'Executive', 880], ['305', 'Executive', 880], ['412', 'Club', 1150], ['1204', 'Suite', 2100], ['1801', 'Suite', 2400], ['Villa 4', 'Villa', 4200]];
const DAYS = ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
const ini = (n) => n.replace(/^(Mr\.|Dr\.|Ms\.)\s*/, '').split(/\s+/).map((w) => w[0]).join('').slice(0, 2);
function RoomRack({ ind, record, notify }) {
  const guests = ind.recs.map((r) => r[0]);
  const [g, setG] = useState(guests[0]); const [mode, setMode] = useState('Book');
  const [grid, setGrid] = useState(() => { const o = {}; ROOMS.forEach((r, i) => DAYS.forEach((_, j) => { const k = (i * 7 + j * 3 + (i % 3)) % 9; if (k < 3) o[`${i}-${j}`] = { s: 'booked', g: ini(guests[(i + j) % guests.length]) }; else if (k === 5 && j > 3) o[`${i}-${j}`] = { s: 'hold', g: 'Hold' }; })); return o; });
  const cells = Object.values(grid); const booked = cells.filter((c) => c.s === 'booked').length; const holds = cells.filter((c) => c.s === 'hold').length;
  const rev = Object.entries(grid).reduce((a, [k, c]) => a + (c.s === 'booked' ? ROOMS[+k.split('-')[0]][2] : 0), 0);
  const click = (i, j) => { const k = `${i}-${j}`; const c = grid[k]; setGrid((o) => { const n = { ...o }; if (mode === 'Release') delete n[k]; else if (!c) n[k] = mode === 'Book' ? { s: 'booked', g: ini(g) } : { s: 'hold', g: 'Hold' }; else if (mode === 'Book' && c.s === 'hold') n[k] = { s: 'booked', g: ini(g) }; return n; }); if (!c && mode === 'Book') record('Room booked', `${g} · ${ROOMS[i][0]} · ${DAYS[j]}`, null); };
  return (
    <div className="crm-rack oms-card">
      <div className="crm-rack-h"><OmsTabs items={['Book', 'Hold', 'Release']} value={mode} onChange={setMode} label="Rack mode" />
        <Sel label="Guest" value={g} onChange={setG} opts={guests.map((x) => [x, x])} />
        <button type="button" className="os-btn" disabled={!holds} onClick={() => { setGrid((o) => Object.fromEntries(Object.entries(o).map(([k, c]) => [k, c.s === 'hold' ? { s: 'booked', g: ini(g) } : c]))); notify(`${holds} holds confirmed`); record('Holds confirmed', `${holds} nights`, null); }}>Confirm {holds} holds</button></div>
      <div className="crm-rack-g" role="grid" aria-label="Room availability" style={{ gridTemplateColumns: `5.2em repeat(${DAYS.length}, minmax(0, 1fr))` }}>
        <span />{DAYS.map((d) => <span key={d} className="crm-dh">{d}</span>)}
        {ROOMS.map((r, i) => (<React.Fragment key={r[0]}><span className="crm-rh"><b>{r[0]}</b>{r[1]}</span>{DAYS.map((d, j) => { const c = grid[`${i}-${j}`]; return <button key={d} type="button" className="crm-cell" data-s={c ? c.s : 'free'} aria-label={`${r[0]} ${d} ${c ? c.s : 'free'}`} onClick={() => click(i, j)}>{c ? c.g : ''}</button>; })}</React.Fragment>))}
      </div>
      <div className="crm-rack-f"><span>Occupancy <b>{Math.round((booked / (ROOMS.length * DAYS.length)) * 100)}%</b></span><span>Room revenue <b>{aed(rev)}</b></span><span>On hold <b>{holds}</b></span><span>Available <b>{ROOMS.length * DAYS.length - booked - holds}</b></span></div>
    </div>
  );
}

const ADDONS = [['Extended warranty', 6000], ['Paint protection film', 8000], ['Service plan · 5 years', 4000]];
function Quote({ ind, record, notify }) {
  const [vi, setVi] = useState(0); const [trade, setTrade] = useState(40000); const [down, setDown] = useState(20); const [term, setTerm] = useState(48); const [apr, setApr] = useState(3.9); const [add, setAdd] = useState([true, false, false]);
  const v = ind.recs[vi]; const price = num(v[2], 300000); const extra = ADDONS.reduce((a, x, i) => a + (add[i] ? x[1] : 0), 0);
  const total = (price + extra) * 1.05 - trade; const dp = (Math.max(total, 0) * down) / 100; const fin = Math.max(total - dp, 0); const m = pay(fin, apr, term);
  return (
    <div className="crm-tool">
      <div className="oms-card crm-ctl"><small>Finance quote</small>
        <Sel label="Vehicle" value={vi} onChange={(x) => setVi(+x)} opts={ind.recs.map((r, i) => [i, `${r[0]} · ${r[2]}`])} />
        <Range label="Trade-in value" value={trade} onChange={setTrade} min={0} max={200000} step={5000} show={aed} />
        <Range label="Down payment" value={down} onChange={setDown} min={0} max={50} show={(x) => `${x}%`} />
        <Range label="Term" value={term} onChange={setTerm} min={12} max={72} step={12} show={(x) => `${x} months`} />
        <Range label="APR" value={apr} onChange={setApr} min={0} max={9} step={0.1} show={(x) => `${x.toFixed(1)}%`} />
        <div className="crm-checks">{ADDONS.map(([n, p], i) => <label key={n}><input type="checkbox" checked={add[i]} onChange={() => setAdd((a) => a.map((y, j) => (j === i ? !y : y)))} />{n}<em>{aed(p)}</em></label>)}</div>
      </div>
      <div className="oms-card crm-out"><small>Customer quote</small>
        <Row big k="Monthly payment" v={aed(m)} /><Row k="Vehicle + options" v={aed(price + extra)} /><Row k="VAT (5%)" v={aed((price + extra) * 0.05)} /><Row k="Trade-in credit" v={`-${aed(trade)}`} /><Row k="Down payment" v={aed(dp)} /><Row k="Amount financed" v={aed(fin)} /><Row k="Total cost of credit" v={aed(m * term - fin)} />
        <button type="button" className="os-btn dark crm-go" onClick={() => { record('Finance quote sent', v[0], null); notify(`Quote for ${v[0]} sent`); }}>Send quote to customer</button>
      </div>
    </div>
  );
}

const CLIN = ['Dr. Aziz', 'Dr. Weber', 'Dr. Costa']; const SLOTS = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30'];
function Schedule({ ind, record, notify }) {
  const pts = ind.recs.map((r) => r[0]); const [p, setP] = useState(pts[0]);
  const [bk, setBk] = useState({ '0-0': 'S. Al Mansoori', '0-2': 'M. Petrova', '0-5': 'A. Rahman', '1-1': 'K. Al Falasi', '1-3': 'The Okonkwos', '2-2': 'E. Larsen', '2-6': 'Mr. A. Sheikh' });
  const click = (c, s) => { const k = `${c}-${s}`; if (bk[k]) { setBk((o) => { const n = { ...o }; delete n[k]; return n; }); notify(`${bk[k]} cancelled · slot freed`); record('Appointment cancelled', bk[k], null); return; }
    if (CLIN.some((_, c2) => bk[`${c2}-${s}`] === p)) { notify(`${p} already has a ${SLOTS[s]} appointment`); return; }
    setBk((o) => ({ ...o, [k]: p })); record('Appointment booked', `${p} · ${CLIN[c]} · ${SLOTS[s]}`, null); notify(`${p} booked with ${CLIN[c]} at ${SLOTS[s]}`); };
  const n = Object.keys(bk).length;
  return (
    <div className="crm-rack oms-card">
      <div className="crm-rack-h"><Sel label="Patient" value={p} onChange={setP} opts={pts.map((x) => [x, x])} />
        <button type="button" className="os-btn dark" onClick={() => { notify(`${n} SMS reminders sent`); record('Reminders sent', `${n} patients`, null); }}>Send {n} reminders</button></div>
      <div className="crm-rack-g" role="grid" aria-label="Clinic schedule" style={{ gridTemplateColumns: '4em repeat(3, minmax(0, 1fr))' }}>
        <span />{CLIN.map((c, ci) => <span key={c} className="crm-dh">{c}<i><s style={{ width: `${(SLOTS.filter((_, s) => bk[`${ci}-${s}`]).length / SLOTS.length) * 100}%` }} /></i></span>)}
        {SLOTS.map((t, s) => (<React.Fragment key={t}><span className="crm-rh"><b>{t}</b></span>{CLIN.map((c, ci) => <button key={c} type="button" className="crm-cell wide" data-s={bk[`${ci}-${s}`] ? 'booked' : 'free'} onClick={() => click(ci, s)}>{bk[`${ci}-${s}`] || 'Free'}</button>)}</React.Fragment>))}
      </div>
      <div className="crm-rack-f"><span>Booked <b>{n} / {SLOTS.length * 3}</b></span><span>Utilisation <b>{Math.round((n / (SLOTS.length * 3)) * 100)}%</b></span><span>Click a free slot to book, a booked slot to cancel</span></div>
    </div>
  );
}

const RATES = { 'A. Hamdan': 2200, 'C. Dubois': 1800, 'S. Qureshi': 1500 }; const WORK = ['Drafting', 'Client call', 'Research', 'Court filing', 'Document review'];
function Billing({ ind, record, notify }) {
  const [mi, setMi] = useState(0); const [w, setW] = useState(WORK[0]); const [run, setRun] = useState(false); const [sec, setSec] = useState(0);
  const [ent, setEnt] = useState([{ m: 0, w: 'Client call', h: 0.5 }, { m: 3, w: 'Document review', h: 2.4 }]); const [inv, setInv] = useState([]);
  useEffect(() => { if (!run) return undefined; const t = setInterval(() => setSec((s) => s + 1), 1000); return () => clearInterval(t); }, [run]);
  const rate = (i) => RATES[ind.recs[i][2]] || 1500; const amt = (e) => e.h * rate(e.m);
  const add = (h) => { setEnt((e) => [{ m: mi, w, h }, ...e]); record('Time recorded', `${ind.recs[mi][0]} · ${h.toFixed(1)}h`, null); };
  const stop = () => { setRun(false); add(Math.max(0.1, Math.ceil(sec / 360) / 10)); setSec(0); };
  const mine = ent.filter((e) => e.m === mi); const un = mine.reduce((a, e) => a + amt(e), 0);
  const mm = String(Math.floor(sec / 60)).padStart(2, '0'); const ss = String(sec % 60).padStart(2, '0');
  return (
    <div className="crm-tool">
      <div className="oms-card crm-ctl"><small>Time capture</small>
        <Sel label="Matter" value={mi} onChange={(x) => { setMi(+x); setRun(false); setSec(0); }} opts={ind.recs.map((r, i) => [i, `${r[0]} · ${r[1]}`])} />
        <Sel label="Work type" value={w} onChange={setW} opts={WORK.map((x) => [x, x])} />
        <div className="crm-timer" aria-live="off"><b>{mm}:{ss}</b><span>{aed(rate(mi))} per hour · {ind.recs[mi][2]}</span></div>
        <div className="os-btns">{run ? <button type="button" className="os-btn dark" onClick={stop}>Stop and save</button> : <button type="button" className="os-btn dark" onClick={() => setRun(true)}>Start timer</button>}
          <button type="button" className="os-btn" onClick={() => add(0.5)}>+0.5h</button><button type="button" className="os-btn" onClick={() => add(1)}>+1.0h</button></div>
      </div>
      <div className="oms-card crm-out"><small>Unbilled · {ind.recs[mi][0]}</small>
        <div className="crm-list">{mine.slice(0, 4).map((e, i) => <Row key={i} k={`${e.w} · ${e.h.toFixed(1)}h`} v={aed(amt(e))} />)}{!mine.length && <p className="og-none">No time recorded yet.</p>}</div>
        <Row big k="Ready to invoice" v={aed(un)} />
        <button type="button" className="os-btn dark crm-go" disabled={!mine.length} onClick={() => { const no = `INV-${3100 + inv.length + 1}`; setInv((v) => [{ no, c: ind.recs[mi][1], t: un }, ...v]); setEnt((e) => e.filter((x) => x.m !== mi)); record('Invoice issued', `${no} · ${aed(un)}`, null); notify(`${no} issued to ${ind.recs[mi][1]}`); }}>Generate invoice</button>
        {inv.slice(0, 2).map((v) => <p key={v.no} className="crm-saved"><b>{v.no}</b> · {v.c} · {aed(v.t)}</p>)}
      </div>
    </div>
  );
}

const ASSETS = [['Equities', 8.2, 16], ['Fixed income', 4.1, 4], ['Sukuk', 5, 5], ['Real assets', 6.5, 9], ['Cash', 2, 0.5]];
const PROF = { Conservative: [15, 40, 25, 10, 10], Balanced: [40, 25, 15, 12, 8], Growth: [65, 10, 8, 12, 5] };
function Portfolio({ ind, record, notify }) {
  const [pf, setPf] = useState('Balanced'); const [ci, setCi] = useState(0); const [w, setW] = useState([46, 21, 15, 12, 6]);
  const tgt = PROF[pf]; const tot = w.reduce((a, b) => a + b, 0);
  const ret = w.reduce((a, x, i) => a + (x * ASSETS[i][1]) / 100, 0); const vol = w.reduce((a, x, i) => a + (x * ASSETS[i][2]) / 100, 0) * 0.85;
  const risk = Math.min(10, Math.max(1, Math.round(vol * 0.6)));
  return (
    <div className="crm-tool">
      <div className="oms-card crm-ctl"><small>Allocation</small>
        <Sel label="Client" value={ci} onChange={(x) => setCi(+x)} opts={ind.recs.map((r, i) => [i, `${r[0]} · ${r[2]}`])} />
        <OmsTabs items={Object.keys(PROF)} value={pf} onChange={setPf} label="Target profile" />
        {ASSETS.map(([n], i) => <Range key={n} label={n} value={w[i]} min={0} max={100} onChange={(v) => setW((a) => a.map((y, j) => (j === i ? v : y)))} show={(v) => `${v}% (${v - tgt[i] >= 0 ? '+' : ''}${v - tgt[i]})`} />)}
      </div>
      <div className="oms-card crm-out"><small>Portfolio analysis</small>
        <div className="crm-alloc" aria-hidden="true">{w.map((x, i) => <i key={i} style={{ width: `${(x / Math.max(tot, 1)) * 100}%`, opacity: 1 - i * 0.17 }} />)}</div>
        <Row big k="Expected return" v={`${ret.toFixed(1)}% a year`} /><Row k="Volatility" v={`${vol.toFixed(1)}%`} /><Row k="Risk score" v={`${risk} / 10`} />
        <Row k="Total allocated" v={<span className={tot === 100 ? 'ok' : 'bad'}>{tot}%</span>} />
        <Row k="Largest drift" v={`${ASSETS[w.reduce((m, x, i) => (Math.abs(x - tgt[i]) > Math.abs(w[m] - tgt[m]) ? i : m), 0)][0]}`} />
        <div className="os-btns"><button type="button" className="os-btn" onClick={() => { setW(tgt); notify('Rebalanced to target'); }}>Rebalance to target</button>
          <button type="button" className="os-btn" disabled={tot === 100 || !tot} onClick={() => setW((a) => { const n = a.map((x) => Math.round((x / tot) * 100)); n[0] += 100 - n.reduce((p, q) => p + q, 0); return n; })}>Normalise to 100%</button></div>
        <button type="button" className="os-btn dark crm-go" disabled={tot !== 100} onClick={() => { record('Mandate saved', `${ind.recs[ci][0]} · ${pf}`, null); notify(`${pf} mandate saved for ${ind.recs[ci][0]}`); }}>Save mandate</button>
      </div>
    </div>
  );
}

export const TOOLS = { re: ['Mortgage', Mortgage], ho: ['Room rack', RoomRack], au: ['Quote', Quote], hc: ['Schedule', Schedule], lg: ['Billing', Billing], wm: ['Portfolio', Portfolio] };
