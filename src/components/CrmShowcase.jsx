import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Building2, BedDouble, Car, HeartPulse, Scale, Landmark, X, Phone, Check, Search, Bell, Send, LayoutDashboard, Table2, CalendarDays, Calculator, Building, Key, Gauge, Wallet, FileText, Users, Sparkles, Utensils, TrendingUp, Star, Wrench, Percent, Package, BarChart3, Stethoscope, ClipboardList, Pill, Receipt, Clock, Gavel, ShieldCheck, Briefcase, PieChart } from 'lucide-react';
import { Tab, Ph } from './HeroDevices';
import OmsGrid from './OmsGrid';
import { Seg as OmsTabs, Kpi2 } from './CrmUi';
import { INDUSTRIES } from './crmData';
import { TOOLS, num, fmt } from './CrmTools';
import { EXTRAS, SKINS } from './crmSkins';
import CrmExtra from './CrmExtra';

// v664 · home section 2: one tablet, six working industry CRMs. Each has a live pipeline (click or drag deals between
// stages, KPIs recalculate), searchable records, a diary with a funnel, global search, and one advanced industry tool.
// The tablet tours every CRM and view by itself and stops while the visitor hovers or interacts.
const ICONS = { Building2, BedDouble, Car, HeartPulse, Scale, Landmark, LayoutDashboard, Table2, CalendarDays, Calculator, Building, Key, Gauge, Wallet, FileText, Users, Sparkles, Utensils, TrendingUp, Star, Wrench, Percent, Package, BarChart3, Stethoscope, ClipboardList, Pill, Receipt, Clock, Gavel, ShieldCheck, Briefcase, PieChart };
const TOOL_ICON = { re: 'Calculator', ho: 'BedDouble', au: 'Car', hc: 'CalendarDays', lg: 'Receipt', wm: 'PieChart' };
const PROB = [0.15, 0.4, 0.7, 0.9];
const DWELL = 2800;
const HOLD = 16000;
// ten sidebar views per industry: the four working ones plus six industry-specific panes
const viewsOf = (ind) => [['Pipeline', 'LayoutDashboard'], [ind.rt, 'Table2'], ['Diary', 'CalendarDays'], [TOOLS[ind.id][0], TOOL_ICON[ind.id]], ...EXTRAS[ind.id].map((e) => [e[0], e[1]])];

const Bars = ({ title, data, labels }) => (
  <div className="oms-card oms-chart crm-chart"><small>{title}</small>
    <div className="oms-bars">{data.map((h, i) => <span key={i} title={labels ? `${labels[i]}: ${h}` : undefined} style={{ height: Math.max(6, h) + '%', '--i': i }} className={i === data.length - 1 ? 'hi' : undefined} />)}</div>
    {labels && <div className="crm-lbl">{labels.map((l) => <i key={l}>{l}</i>)}</div>}
  </div>
);

function Pipeline({ ind, deals, open, setOpen, closed, ev, act }) {
  const [over, setOver] = useState(null);
  const [note, setNote] = useState('');
  const last = ind.stages.length - 1;
  const lay = SKINS[ind.id].lay;
  const d = deals.find((x) => x.id === open);
  const keep = useRef(null); if (d) keep.current = d; const dd = d || keep.current;
  const board = useRef(null); const prev = useRef({}); const init = useRef(false);
  const sheet = useRef(null); const drag = useRef(null);
  // FLIP: cards glide to their new stage instead of jumping
  useLayoutEffect(() => {
    const b = board.current; if (!b) return; const br = b.getBoundingClientRect(); const next = {};
    b.querySelectorAll('[data-id]').forEach((el) => {
      const r = el.getBoundingClientRect(); const id = el.dataset.id; const n = { x: r.left - br.left + b.scrollLeft, y: r.top - br.top + b.scrollTop }; next[id] = n; const o = prev.current[id];
      if (!el.animate || !init.current) return;
      if (o && (Math.abs(o.x - n.x) > 1 || Math.abs(o.y - n.y) > 1)) el.animate([{ transform: `translate(${o.x - n.x}px, ${o.y - n.y}px)`, zIndex: 3 }, { transform: 'none', zIndex: 3 }], { duration: 560, easing: 'cubic-bezier(.32,.72,0,1)' });
      else if (!o) el.animate([{ opacity: 0, transform: 'scale(.88) translateY(.6em)' }, { opacity: 1, transform: 'none' }], { duration: 480, easing: 'cubic-bezier(.34,1.56,.64,1)' });
    });
    prev.current = next; init.current = true;
  });
  useEffect(() => { if (d && sheet.current) { sheet.current.style.transform = ''; sheet.current.style.opacity = ''; } }, [open]);
  const down = (e) => { if (e.target.closest('button,select,input,form,option')) return; drag.current = { x: e.clientX, dx: 0 }; sheet.current.style.transition = 'none'; e.currentTarget.setPointerCapture(e.pointerId); };
  const move = (e) => { if (!drag.current) return; const dx = Math.max(0, e.clientX - drag.current.x); drag.current.dx = dx; sheet.current.style.transform = `translateX(${dx}px)`; sheet.current.style.opacity = String(1 - Math.min(dx / 320, 0.55)); };
  const up = () => { if (!drag.current) return; const dx = drag.current.dx; drag.current = null; const el = sheet.current; el.style.transition = ''; if (dx > 90) { el.style.transform = 'translateX(110%)'; el.style.opacity = '0'; setOpen(null); } else { el.style.transform = ''; el.style.opacity = ''; } };
  const owners = Array.from(new Set(ind.deals.map((x) => x[3])));
  const saveNote = (e) => { e.preventDefault(); if (!note.trim() || !dd) return; act.note(dd, note.trim()); setNote(''); };
  return (
    <div className="crm-pipe" onKeyDown={(e) => { if (e.key === 'Escape') setOpen(null); }}>
      <div className="os-bar"><span className="og-hint">Drag a card to another stage, or select one to open it</span><span className="os-btns"><span className="og-hint">{closed ? `${closed} closed this session` : ''}</span><button type="button" className="os-btn dark" onClick={act.add}>+ New {ind.noun}</button></span></div>
      <div className="oms-board crm-board" ref={board} data-lay={lay} style={lay === 'cards' || lay === 'rack' ? { gridTemplateColumns: `repeat(${ind.stages.length}, minmax(0, 1fr))` } : undefined}>
        {ind.stages.map((h, ci) => { const cs = deals.filter((x) => x.s === ci); return (
          <div key={h} className={`oms-col${over === ci ? ' is-over' : ''}`} onDragOver={(e) => { e.preventDefault(); setOver(ci); }} onDragLeave={() => setOver(null)} onDrop={(e) => { e.preventDefault(); setOver(null); act.moveTo(+e.dataTransfer.getData('text/plain'), ci); }}>
            <small>{h} <em>{cs.length}</em></small>
            {cs.map((x) => (
              <button type="button" key={x.id} data-id={x.id} draggable onDragStart={(e) => { const el = e.currentTarget; e.dataTransfer.setData('text/plain', String(x.id)); e.dataTransfer.effectAllowed = 'move'; setTimeout(() => el.classList.add('is-drag'), 0); }} onDragEnd={(e) => e.currentTarget.classList.remove('is-drag')} className={`oms-task og-task${open === x.id ? ' is-open' : ''}`} onClick={() => setOpen(open === x.id ? null : x.id)}><b>{x.t}</b><span>{x.who} · {x.v}</span></button>))}
          </div>); })}
      </div>
      <div className={`crm-scrim${d ? ' on' : ''}`} onClick={() => setOpen(null)} aria-hidden="true" />
      {dd && (
        <aside className={`crm-drawer${d ? ' on' : ''}`} ref={sheet} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} aria-label={`${dd.t} details`} aria-hidden={!d}>
          <span className="crm-grab" aria-hidden="true" />
          <button type="button" className="crm-x" aria-label="Close details" onClick={() => setOpen(null)}><X size={12} aria-hidden="true" /></button>
          <small>{ind.stages[dd.s]} · {dd.age} days in stage</small><h4>{dd.t}</h4>
          <div className="crm-prob" aria-label={`Win probability ${Math.round(PROB[dd.s] * 100)} percent`}><i style={{ width: `${PROB[dd.s] * 100}%` }} /><span>{Math.round(PROB[dd.s] * 100)}% likely</span></div>
          <dl><div><dt>Contact</dt><dd>{dd.who}</dd></div><div><dt>Value</dt><dd>{dd.v}</dd></div>
            <div><dt>Owner</dt><dd><select aria-label="Owner" value={dd.o} onChange={(e) => act.owner(dd, e.target.value)}>{owners.map((o) => <option key={o}>{o}</option>)}</select></dd></div></dl>
          <ol className="crm-steps" aria-label="Stage">{ind.stages.map((s, i) => <li key={s} className={i < dd.s ? 'done' : i === dd.s ? 'now' : undefined}>{i < dd.s ? <Check size={8} aria-hidden="true" /> : null}{s}</li>)}</ol>
          <button type="button" className="os-btn dark crm-go" onClick={() => act.advance(dd)}>{ind.nextLabel[dd.s]}{dd.s === last ? ' and close' : ''}</button>
          <div className="os-btns"><button type="button" className="os-btn crm-go" onClick={() => act.call(dd)}><Phone size={10} aria-hidden="true" /> Log call</button><button type="button" className="os-btn crm-go" onClick={() => act.lost(dd)}>Mark lost</button></div>
          <form onSubmit={saveNote} className="crm-note"><input aria-label="Add a note" placeholder="Add a note" value={note} onChange={(e) => setNote(e.target.value)} /><button type="submit">Save</button></form>
          <ul className="crm-tl">{(ev[dd.id] || []).slice(0, 4).map(([a, b], i) => <li key={i}><b>{a}</b><span>{b}</span></li>)}</ul>
        </aside>
      )}
    </div>
  );
}

function Records({ ind, record }) {
  const cols = [{ key: 'a', label: ind.rcols[0], width: '1.8fr' }, { key: 'b', label: ind.rcols[1] }, { key: 'c', label: ind.rcols[2], width: '.9fr' }, { key: 'd', label: ind.rcols[3] }, { key: 's', label: ind.rcols[4], pill: true, width: '.95fr', steps: ind.rsteps }];
  const rows = ind.recs.map(([a, b, c, d, s]) => ({ a, b, c, d, s }));
  const [lbl, tpl] = ind.radd;
  return <OmsGrid title={ind.rt} filterKey="b" pageSize={7} columns={cols} rows={rows} add={{ label: lbl, make: (n) => ({ a: `${tpl[0]} ${n + 1}`, b: tpl[1], c: tpl[2], d: tpl[3], s: tpl[4] }) }} onAdd={(r) => record(lbl, r.a)} />;
}

function Today({ ind, deals, log, record }) {
  const [items, setItems] = useState(() => ind.agenda.map(([t, a, b]) => ({ t, a, b, done: false })));
  const [per, setPer] = useState('Trend');
  const [txt, setTxt] = useState('');
  const add = (e) => { e.preventDefault(); if (!txt.trim()) return; setItems((x) => [...x, { t: 'Now', a: txt.trim(), b: 'Added by you', done: false }]); record('Task added', txt.trim()); setTxt(''); };
  const cnt = ind.stages.map((_, i) => deals.filter((x) => x.s === i).length); const mx = Math.max(1, ...cnt);
  const left = items.filter((x) => !x.done).length;
  return (
    <div className="os-split crm-today">
      <div className="oms-card crm-agenda"><small>{ind.at} · {left} open</small>
        <div className="crm-ag">{items.map((x, i) => (
          <button type="button" key={i} className={x.done ? 'on' : undefined} aria-pressed={x.done} onClick={() => setItems((a) => a.map((y, j) => (j === i ? { ...y, done: !y.done } : y)))}>
            <u>{x.done ? <Check size={9} aria-hidden="true" /> : null}</u><em>{x.t}</em><span><b>{x.a}</b>{x.b}</span>
          </button>))}</div>
        <form className="crm-note" onSubmit={add}><input aria-label="Add a task" placeholder="Add a task" value={txt} onChange={(e) => setTxt(e.target.value)} /><button type="submit">Add</button></form>
      </div>
      <div className="crm-side">
        <div className="os-bar"><OmsTabs items={['Trend', 'Funnel']} value={per} onChange={setPer} label="Chart" /></div>
        {per === 'Trend' ? <Bars title={ind.ct} data={ind.bars} /> : <Bars title="Open deals by stage" data={cnt.map((c) => (c / mx) * 100)} labels={ind.stages.map((s, i) => `${s.split(' ')[0]} ${cnt[i]}`)} />}
        <div className="oms-card os-feed"><small>Recent activity</small>{log.slice(0, 3).map(([a, b, c], i) => <p key={a + b + i}><u /><span><b>{a}</b>{b}</span><em>{c}</em></p>)}</div>
      </div>
    </div>
  );
}

function Industry({ ind, vi, setVi, active, touch }) {
  const [deals, setDeals] = useState(() => ind.deals.map(([t, who, v, o, s], i) => ({ id: i + 1, t, who, v, o, s, age: ((i * 3) % 9) + 1 })));
  const [log, setLog] = useState(ind.feed);
  const [open, setOpen] = useState(null);
  const [closed, setClosed] = useState(0);
  const [ev, setEv] = useState({});
  const [toast, setToast] = useState('');
  const [q, setQ] = useState('');
  const tm = useRef(null);
  const [pop, setPop] = useState(null); const [msgs, setMsgs] = useState([]); const [ask, setAsk] = useState(''); const [unread, setUnread] = useState(0);
  const liveN = useRef(0); const aiT = useRef(null);
  useEffect(() => () => { clearTimeout(tm.current); clearTimeout(aiT.current); }, []);
  useEffect(() => {
    if (!active) return undefined;
    const id = setInterval(() => {
      if (document.hidden || liveN.current >= SKINS[ind.id].live.length) return;
      const [t, who, v] = SKINS[ind.id].live[liveN.current++]; const nid = Date.now();
      setDeals((ds) => [{ id: nid, t, who, v, o: ind.deals[0][3], s: 0, age: 0 }, ...ds]);
      setLog((l) => [[`New ${ind.noun} from ${who}`, t, 'Just now'], ...l]); setUnread((u) => u + 1);
      setToast(`Live · new ${ind.noun}: ${t}`); clearTimeout(tm.current); tm.current = setTimeout(() => setToast(''), 3200);
    }, 9000);
    return () => clearInterval(id);
  }, [active, ind]);
  const notify = (m) => { setToast(m); clearTimeout(tm.current); tm.current = setTimeout(() => setToast(''), 2800); };
  const record = (a, b, id) => { touch(); setLog((l) => [[a, b, 'Just now'], ...l]); if (id != null) setEv((e) => ({ ...e, [id]: [[a, 'Just now'], ...(e[id] || [])] })); };
  const last = ind.stages.length - 1;
  const act = {
    add: () => { const id = Date.now(); setDeals((ds) => [{ id, t: `New ${ind.noun} · ${ind.stages[0]}`, who: 'To confirm', v: 'TBC', o: ind.deals[0][3], s: 0, age: 0 }, ...ds]); setOpen(id); record(`New ${ind.noun} added`, ind.stages[0], id); },
    moveTo: (id, s) => { const x = deals.find((y) => y.id === id); if (!x || x.s === s) return; setDeals((ds) => ds.map((y) => (y.id === id ? { ...y, s, age: 0 } : y))); record(`Moved to ${ind.stages[s]}`, x.t, id); notify(`${x.t} moved to ${ind.stages[s]}`); },
    advance: (x) => { if (x.s >= last) { setDeals((ds) => ds.filter((y) => y.id !== x.id)); setClosed((c) => c + 1); setOpen(null); record(`${ind.nextLabel[last]} done`, x.t, x.id); notify(`${x.t} closed · ${x.v}`); return; } setDeals((ds) => ds.map((y) => (y.id === x.id ? { ...y, s: y.s + 1, age: 0 } : y))); record(ind.nextLabel[x.s], x.t, x.id); notify(`${ind.nextLabel[x.s]} · ${x.t}`); },
    lost: (x) => { setDeals((ds) => ds.filter((y) => y.id !== x.id)); setOpen(null); record('Marked lost', x.t, null); notify(`${x.t} marked lost`); },
    call: (x) => { record('Call logged', x.t, x.id); notify(`Call with ${x.who} logged`); },
    note: (x, t) => { record('Note added', x.t, x.id); setEv((e) => ({ ...e, [x.id]: [[`Note: ${t}`, 'Just now'], ...(e[x.id] || [])] })); },
    owner: (x, o) => { setDeals((ds) => ds.map((y) => (y.id === x.id ? { ...y, o } : y))); record('Reassigned', `${x.t} → ${o}`, x.id); },
  };
  const dv = ind.id === 'hc' ? 450 : 0;
  const tot = deals.reduce((a, x) => a + num(x.v, dv), 0); const wt = deals.reduce((a, x) => a + num(x.v, dv) * PROB[x.s], 0);
  const kp = [ind.kpis[0], ind.kpis[1], ['Open pipeline', fmt(tot), `${deals.length} open`], ['Weighted forecast', fmt(wt), `${closed} closed`]];
  const reply = (qq) => {
    const t = qq.toLowerCase(); const cnt = ind.stages.map((n, i) => `${n} ${deals.filter((x) => x.s === i).length}`).join(' · ');
    const top = [...deals].sort((a, b) => PROB[b.s] * num(b.v, dv) - PROB[a.s] * num(a.v, dv))[0];
    if (/forecast|revenue|worth|value|money/.test(t)) return `Open pipeline is ${fmt(tot)} across ${deals.length} ${ind.noun}s. Weighted by stage probability the forecast is ${fmt(wt)}. ${closed} closed this session.`;
    if (/attention|stuck|risk|overdue|priority|slow/.test(t)) { const old = [...deals].sort((a, b) => b.age - a.age).slice(0, 3); return `Needs attention: ${old.map((x) => `${x.t} (${x.age} days in ${ind.stages[x.s]})`).join('; ')}. First on the diary: ${ind.agenda[0][0]} ${ind.agenda[0][1]}.`; }
    if (/draft|email|follow|message|write/.test(t) && top) return `Draft to ${top.who}: "Hi ${top.who.split(' ').slice(-1)[0]}, following up on ${top.t}. The next step is to ${ind.nextLabel[top.s].toLowerCase()}. Could we fit that in this week? Best, Nikolai"`;
    const hit = deals.find((x) => t.split(/\s+/).some((w) => w.length > 3 && `${x.t} ${x.who}`.toLowerCase().includes(w)));
    if (hit) return `${hit.t}: ${ind.stages[hit.s]}, ${hit.v}, owner ${hit.o}, ${hit.age} days in stage, ${Math.round(PROB[hit.s] * 100)}% likely.`;
    return `${deals.length} open ${ind.noun}s: ${cnt}. Biggest opportunity: ${top ? `${top.t} (${top.v})` : 'none'}.`;
  };
  const send = (qq) => { const text = qq.trim(); if (!text) return; touch(); const id = Date.now(); setMsgs((m) => [...m, { id, q: text, a: null }].slice(-4)); setAsk(''); clearTimeout(aiT.current); aiT.current = setTimeout(() => setMsgs((m) => m.map((x) => (x.id === id ? { ...x, a: reply(text) } : x))), 650); };
  const nd = q.trim().toLowerCase();
  const hits = nd ? [...deals.filter((x) => `${x.t} ${x.who} ${x.o}`.toLowerCase().includes(nd)).map((x) => ({ k: 'd', x })), ...ind.recs.filter((r) => r.join(' ').toLowerCase().includes(nd)).map((r) => ({ k: 'r', r }))].slice(0, 6) : [];
  const tool = TOOLS[ind.id]; const Tool = tool[1]; const xs = EXTRAS[ind.id];
  const pane = (n) => `crm-pane ${n === vi ? 'is-on' : n < vi ? 'is-before' : 'is-after'}`;
  const pick = (h) => { touch(); setQ(''); if (h.k === 'd') { setVi(0); setOpen(h.x.id); } else { setVi(1); notify(`${h.r[0]} · ${h.r[4]}`); } };
  return (
    <div className="crm-ind is-active" data-lay={SKINS[ind.id].lay}>
      <div className="oms-top"><b>{ind.title}</b>
        <div className="crm-search"><Search size={11} aria-hidden="true" /><input type="search" aria-label={`Search ${ind.name} CRM`} placeholder={`Search ${ind.rt.toLowerCase()}, deals, contacts`} value={q} onChange={(e) => setQ(e.target.value)} />
          {hits.length > 0 && <div className="crm-hits" role="listbox">{hits.map((h, i) => <button type="button" key={i} role="option" onClick={() => pick(h)}><b>{h.k === 'd' ? h.x.t : h.r[0]}</b><span>{h.k === 'd' ? `${ind.stages[h.x.s]} · ${h.x.who}` : `${ind.rt} · ${h.r[4]}`}</span></button>)}</div>}
          {nd && !hits.length && <div className="crm-hits"><p>No matches</p></div>}</div>
        <button type="button" className="crm-ib" aria-label="Notifications" aria-expanded={pop === 'bell'} onClick={() => { touch(); setPop(pop === 'bell' ? null : 'bell'); setUnread(0); }}><Bell size={13} aria-hidden="true" />{unread > 0 && <i>{unread}</i>}</button>
        <button type="button" className="crm-ai" aria-expanded={pop === 'ai'} onClick={() => { touch(); setPop(pop === 'ai' ? null : 'ai'); }}><Sparkles size={12} aria-hidden="true" />Ask NK</button>
        <span className="oms-av">NK</span></div>
      {pop && (
        <div className={`crm-pop ${pop}`} role="dialog" aria-label={pop === 'ai' ? 'Ask NK' : 'Notifications'}>
          <button type="button" className="crm-x" aria-label="Close" onClick={() => setPop(null)}><X size={12} aria-hidden="true" /></button>
          {pop === 'bell' ? (<><small>Notifications</small>{log.slice(0, 6).map(([a, b, c], i) => <p key={a + b + i}><u /><span><b>{a}</b>{b}</span><em>{c}</em></p>)}</>) : (<>
            <small>Ask NK · answers from your live data</small>
            <div className="crm-chat">{msgs.length === 0 && <p className="crm-hint">Try a suggestion, or ask about a {ind.noun}, the forecast, or what needs attention.</p>}
              {msgs.map((m) => (<div key={m.id}><span className="q">{m.q}</span><span className="a">{m.a || <><i /><i /><i /></>}</span></div>))}</div>
            <div className="crm-sug">{['Summarise my pipeline', 'What needs attention?', 'Forecast this month', 'Draft a follow-up'].map((t) => <button type="button" key={t} onClick={() => send(t)}>{t}</button>)}</div>
            <form className="crm-ask" onSubmit={(e) => { e.preventDefault(); send(ask); }}><input aria-label="Ask NK" placeholder="Ask anything about this CRM" value={ask} onChange={(e) => setAsk(e.target.value)} /><button type="submit" aria-label="Send"><Send size={12} aria-hidden="true" /></button></form></>)}
        </div>)}
      <div className={`crm-collapse${vi > 2 ? ' is-shut' : ''}`}><div><div className="oms-kpis">{kp.map(([l, v, d]) => <Kpi2 key={l} l={l} v={v} d={d} run={active} />)}</div></div></div>
      <div className="crm-view">
        <div className={pane(0)}><Pipeline ind={ind} deals={deals} open={open} setOpen={setOpen} closed={closed} ev={ev} act={act} /></div>
        <div className={pane(1)}><Records ind={ind} record={record} /></div>
        <div className={pane(2)}><Today ind={ind} deals={deals} log={log} record={record} /></div>
        <div className={pane(3)}><Tool ind={ind} deals={deals} record={record} notify={notify} /></div>
        {xs.map((x, n) => <div key={x[0]} className={pane(n + 4)}><CrmExtra x={x} record={record} ind={ind} log={log} /></div>)}
      </div>
      <div className={`crm-toast${toast ? ' on' : ''}`} role="status" aria-live="polite">{toast}</div>
    </div>
  );
}

function PhoneL({ ind }) { return (<div className="scr scr-ph crm-swap" key={ind.id}><div className="oms-top"><b>Today</b><span className="oms-av">NK</span></div>{ind.agenda.slice(0, 4).map(([t, a]) => <div key={a} className="oms-card oms-appr"><b>{a}</b><span>{t}</span><div><em>Done</em><em className="g">Move</em></div></div>)}</div>); }
function PhoneR({ ind }) { return (<div className="scr scr-ph crm-swap" key={ind.id}><div className="oms-top"><b>{ind.name}</b><span className="oms-av">NK</span></div><div className="oms-kpis oms-kpis-2">{ind.kpis.slice(0, 2).map(([l, v, d]) => <Kpi2 key={l} l={l} v={v} d={d} run />)}</div><Bars title={ind.ct} data={ind.bars} /><div className="oms-card oms-table"><small>{ind.rt}</small>{ind.recs.slice(0, 4).map((r) => <div key={r[0]} className="oms-row"><b>{r[0]}</b><span>{r[1]}</span><em>{r[4]}</em></div>)}</div></div>); }

// Apple-style sidebar glyph: rounded frame with a divider after the first third (same icon open and closed)
const SideIcon = () => (<svg viewBox="0 0 24 24" width="1.4em" height="1.4em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><rect x="3" y="4.5" width="18" height="15" rx="3.4" /><path d="M9.4 4.8v14.4" /></svg>);

function Slide({ ind, rel, seen, vi, setVi, touch, navs, setNavs, go, cur }) {
  const sk = SKINS[ind.id]; const vs = viewsOf(ind); const on = rel === 'is-active';
  const flip = (key) => { touch(); setNavs({ ...navs, [key]: !navs[key] }); };
  return (
    <div className={`crm-slide ${rel}`} data-sk={ind.id} data-nav="side" style={sk.vars} aria-hidden={!on}>
      <Tab cls="os-tab">
        <div className={`scr scr-l crm-two${navs.a ? '' : ' a-shut'}${navs.b ? '' : ' b-shut'}`} onPointerDownCapture={touch} onKeyDownCapture={touch}>
          <aside className="crm-wk" aria-label="Workspaces">
            <div className="crm-wk-h"><i className="rn-glyph" /><b>Workspaces</b>
              <button type="button" className="crm-tog" aria-expanded={navs.a} aria-label={navs.a ? 'Collapse workspaces' : 'Expand workspaces'} tabIndex={on ? 0 : -1} onClick={() => flip('a')}><SideIcon /></button>
            </div>
            <small className="crm-wk-g">Industries</small>
            {INDUSTRIES.map((n, k) => { const Ic = ICONS[n.icon]; return (
              <button key={n.id} type="button" className={k === cur ? 'on' : undefined} aria-pressed={k === cur} title={n.name} tabIndex={on ? 0 : -1} onClick={() => { if (k !== cur) go(k); }}><i><Ic size="1.1em" aria-hidden="true" /></i><span>{n.name}</span></button>); })}
            <div className="crm-wk-foot"><span className="oms-av">NK</span><b>Nikolai K.<small>{sk.role}</small></b></div>
          </aside>
          <aside className="oms-side" aria-label={`${ind.name} navigation`}>
            <div className="crm-md-h"><b className="oms-logo"><i>{ind.name}</i></b>
              <button type="button" className="crm-tog" aria-expanded={navs.b} aria-label={navs.b ? 'Collapse menu' : 'Expand menu'} tabIndex={on ? 0 : -1} onClick={() => flip('b')}><SideIcon /></button>
            </div>
            {vs.map(([label, ic], n) => { const Ic = ICONS[ic]; return (
              <button key={label} type="button" title={label} className={n === vi ? 'on' : undefined} aria-pressed={n === vi} tabIndex={on ? 0 : -1} onClick={() => { touch(); setVi(n); }}><Ic size="1.1em" aria-hidden="true" /><span>{label}</span></button>); })}
          </aside>
          <div className="oms-main crm-main"><Industry ind={ind} active={on} vi={vi} setVi={setVi} touch={touch} /></div>
        </div>
      </Tab>
      <div aria-hidden="true"><Ph cls="os-ph os-ph-l"><PhoneL ind={ind} /></Ph><Ph cls="os-ph os-ph-r"><PhoneR ind={ind} /></Ph></div>
    </div>
  );
}

export default function CrmShowcase() {
  const N = INDUSTRIES.length;
  const [i, setI] = useState(0);
  const [views, setViews] = useState(() => INDUSTRIES.map(() => 0));
  const [paused, setPaused] = useState(false);
  const [navs, setNavs] = useState({ a: true, b: true });
  const [seen, setSeen] = useState(false);
  const stage = useRef(null);
  const hold = useRef(0);
  const hover = useRef(false);
  const touch = () => { hold.current = Date.now() + HOLD; };
  useEffect(() => {
    const el = stage.current; if (!el || typeof IntersectionObserver === 'undefined') { setSeen(true); return undefined; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.2 });
    io.observe(el); return () => io.disconnect();
  }, []);
  const setVi = (k) => (v) => setViews((a) => a.map((x, j) => (j === k ? v : x)));
  const go = (k) => { touch(); setViews((a) => a.map((x, j) => (j === k ? 0 : x))); setI((k + N) % N); };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const t = setInterval(() => {
      if (hover.current || Date.now() < hold.current || document.hidden) return;
      setI((cur) => {
        const last = viewsOf(INDUSTRIES[cur]).length - 1;
        if (views[cur] < last) { setViews((a) => a.map((x, j) => (j === cur ? x + 1 : x))); return cur; }
        const nx = (cur + 1) % N;
        setViews((a) => a.map((x, j) => (j === nx ? 0 : x)));
        return nx;
      });
    }, DWELL);
    return () => clearInterval(t);
  }, [views, N]);

  return (
    <section className="oms-show crm-show" aria-labelledby="oms-show-h">
      <div className="oms-show-head">
        <span className="oms-show-eyebrow">Operations Management System</span>
        <h2 id="oms-show-h">Six industries. One platform.</h2>
      </div>
      <div className="oms-show-points">
        <div><b>Built for the trade</b><span>Each industry has its own tablet, look and ten workspaces, in the language of the business.</span></div>
        <div><b>Work, not screenshots</b><span>Drag deals, search, book rooms, quote finance, bill time. Everything on the tablet responds.</span></div>
        <div><b>Always in step</b><span>The same pipeline, records and diary on tablet and phone.</span></div>
      </div>
      <div className={`oms-show-stage${seen ? ' is-seen' : ''}`} ref={stage} onPointerEnter={() => { hover.current = true; setPaused(true); }} onPointerLeave={() => { hover.current = false; hold.current = Date.now() + 4000; setPaused(false); }}>
        <div className="crm-track">
          {INDUSTRIES.map((n, k) => { const r = (k - i + N) % N; return <Slide key={n.id} ind={n} rel={r === 0 ? 'is-active' : r === N - 1 ? 'is-before' : 'is-after'} seen={seen} vi={views[k]} setVi={setVi(k)} touch={touch} navs={navs} setNavs={setNavs} go={go} cur={i} />; })}
        </div>
      </div>
      <div className="crm-pick" role="group" aria-label="Choose an industry">
        <button type="button" className="crm-arrow" aria-label="Previous industry" onClick={() => go(i - 1)}><ArrowLeft size={14} aria-hidden="true" /></button>
        {INDUSTRIES.map((n, k) => { const Ic = ICONS[n.icon]; return <button key={n.id} type="button" className={k === i ? 'on' : undefined} aria-pressed={k === i} onClick={() => go(k)}><Ic size={13} aria-hidden="true" />{n.name}</button>; })}
        <button type="button" className="crm-arrow" aria-label="Next industry" onClick={() => go(i + 1)}><ArrowRight size={14} aria-hidden="true" /></button>
      </div>
      <p className="crm-tour"><span className="crm-prog" aria-hidden="true"><i key={`${i}-${views[i]}`} style={{ animationDuration: `${DWELL}ms`, animationPlayState: paused ? 'paused' : 'running' }} /></span>{paused ? 'Tour paused while you explore' : 'Auto tour running'} · sample data</p>
      <div className="oms-show-foot">
        <Link to="/infrastructure/oms" className="oms-show-link">Explore the Infrastructure <ArrowRight size={16} aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
