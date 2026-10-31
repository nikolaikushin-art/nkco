import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Plus } from 'lucide-react';
import { Top, Kpi, Chart, Tab, Ph } from './HeroDevices';
import OmsGrid, { OmsTabs, csvDownload } from './OmsGrid';
import { bespokeViews } from './BespokeViews';
import { HOME_METHOD, HOME_ENGAGEMENT, FEE_PARTS, DELIVERABLES } from '../data/homeRich';

// v628 · Rich body for Capabilities pages (landing, area, service and topic pages).
// Same visual language as the home page: short serif headers, big pictures, large OMS tablets and phones, teal only on lines.
// Everything shown comes from the page's own data (method, scope, deliverables, FAQs, menu structure); nothing is invented here.
// The device screens are an illustrative workspace view and say so. Styles: src/styles/cap-visual.css (prefix cv-).

const Img = ({ src, alt = '', eager, on }) => (src ? <img src={src} alt={alt} className={on ? 'is-on' : undefined} loading={eager ? 'eager' : 'lazy'} onError={(e) => { e.currentTarget.style.display = 'none'; }} /> : null);
const pad2 = (n) => String(n).padStart(2, '0');
const sentence = (s = '') => { const m = String(s).match(/^.*?[.!?](\s|$)/); return (m ? m[0] : String(s)).trim(); };
const cut = (s = '', n = 40) => { const t = String(s); if (t.length <= n) return t; const x = t.slice(0, n - 1); const i = x.lastIndexOf(' '); return `${(i > n * 0.5 ? x.slice(0, i) : x).replace(/[\s,;:–-]+$/, '')}…`; };
const STATUS = ['On track', 'Review', 'Scoping'];
const PROG = [92, 78, 64, 50, 38, 26];
const PRACT = ['Advisory', 'Management', 'Advisory', 'Management', 'Advisory', 'Management'];

const Head = ({ id, k, children, light }) => (
  <div className={`cv-head${light ? ' is-light' : ''}`}>
    {k ? <span className="cv-eyebrow">{k}</span> : null}
    <h2 id={id}>{children}</h2>
  </div>
);
const Go = ({ to, href, children, light }) => (
  href
    ? <a href={href} className={`cv-link${light ? ' is-light' : ''}`}>{children}<ArrowRight size={16} aria-hidden="true" /></a>
    : <Link to={to} className={`cv-link${light ? ' is-light' : ''}`}>{children}<ArrowRight size={16} aria-hidden="true" /></Link>
);

/* ------------------------------------------------------------------ data */
function prep({ C, rows, rels, nav, col, it, leaf }) {
  const stages = (C.meth && C.meth.length >= 3 ? C.meth.map((m) => ({ title: m.k, desc: m.v })) : HOME_METHOD.stages.map((s) => ({ title: s.title, desc: s.desc }))).slice(0, 5);
  const deliAll = C.deli && C.deli.length >= 3 ? C.deli : DELIVERABLES.items.map((x) => x[0]);
  const deli = deliAll.slice(0, 8);
  const scope = C.scope && C.scope.length >= 3 ? C.scope.slice(0, 6) : null;
  // workstream-like list used by the tablet when a page has no scope of its own
  const ws = scope || (rows && rows.length ? rows.slice(0, 6).map((r) => ({ t: r.title, d: r.text })) : (C.pillars || []).map((p) => ({ t: p.title, d: p.desc })));
  // numbers: the page's own figures first, then counts taken from the menu itself
  const sum = (cols) => cols.reduce((a, c) => a + (c.items || []).reduce((b, i) => b + ((typeof i === 'string' ? [] : i.children) || []).length, 0), 0);
  const items = (cols) => cols.reduce((a, c) => a + (c.items || []).length, 0);
  let counted;
  if (leaf) counted = [[stages.length, 'Stages in the method'], [ws.length, 'Workstreams'], [deli.length, 'Deliverables']];
  else if (it) counted = [[(it.children || []).length, 'Topics in this service'], [stages.length, 'Stages in the method'], [deli.length, 'Deliverables']];
  else if (col) counted = [[(col.items || []).length, 'Services in this area'], [sum([col]), 'Topics beneath them'], [stages.length, 'Stages in the method']];
  else counted = [[nav.columns.length, 'Practice areas'], [items(nav.columns), 'Services'], [sum(nav.columns), 'Topics']];
  const own = (C.stats || []).filter((s) => s && s.value && s.label);
  const stats = own.concat(counted.filter(([v]) => v).map(([v, l]) => ({ value: String(v), label: l, note: '' }))).slice(0, 4);
  const eng = (C.eng || []).filter((e) => e && e.name);
  const cases = (C.cases || []).filter((c) => c && c.title);
  return { stages: stages.map((s, i) => ({ ...s, out: deli[i] || deli[i % deli.length] })), deli, scope, ws, stats, eng, cases, dec: C.dec || [], faqs: C.faqs || [], outc: C.outc || [], rels: rels || [], rows };
}

/* ------------------------------------------------------------------ tablet screens (illustrative workspace) */
const Chips = ({ items, on = 0 }) => (<div className="os-chips">{items.map((c, i) => <span key={c} className={i === on ? 'on' : undefined}>{c}</span>)}</div>);
const Flow = ({ title, rows }) => (
  <div className="oms-card oms-flow"><small>{title}</small>{rows.map(([s, w]) => <p key={s}><b>{cut(s, 26)}</b><i><s style={{ width: `${w}%` }} /></i></p>)}</div>
);
const KpiRow = ({ stats }) => (<div className="oms-kpis">{stats.filter((x) => String(x.value).length <= 8).slice(0, 4).map((s) => <Kpi key={s.label} l={cut(s.label, 24)} v={cut(s.value, 10)} d={s.note ? cut(sentence(s.note), 30) : 'This page'} />)}</div>);

const OWN = ['N. Karam', 'R. Haddad', 'L. Saeed', 'M. Farouk', 'S. Idris', 'T. Mansour'];
const hashOf = (str) => { let h = 11; for (let i = 0; i < String(str).length; i++) h = (h * 33 + String(str).charCodeAt(i)) >>> 0; return h; };
const ST4 = ['On track', 'Review', 'Scoping', 'Complete'];

// v658 · tablet views are working and different on every page: the seed (from the page title) rotates owners, practice order,
// statuses and dates, and every grid sorts, searches, filters and takes a new row. Board cards move on when clicked.
function PageBoard({ st, tasks, seed }) {
  const cols = st.slice(0, 4);
  const [list, setList] = useState(() => tasks.slice(0, Math.min(tasks.length, cols.length * 3)).map((t, i) => ({ t, c: i % cols.length, p: PRACT[(i + seed) % 6], d: 8 + ((seed + i * 3) % 20) })));
  const move = (x) => setList((l) => l.map((y) => (y === x ? { ...y, c: (y.c + 1) % cols.length } : y)));
  return (
    <>
      <div className="os-bar"><span className="og-hint">Click a card to move it to the next stage</span></div>
      <div className="oms-board">
        {cols.map((s, ci) => { const cs = list.filter((x) => x.c === ci); return (
          <div key={s.title} className="oms-col"><small>{cut(s.title, 16)} <em>{cs.length}</em></small>
            {cs.map((x) => (<div key={x.t} role="button" tabIndex={0} className="oms-task og-task" aria-label={`${x.t}: move to next stage`} onClick={() => move(x)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); move(x); } }}><b>{cut(x.t, 30)}</b><span>{x.p} · due {x.d} Nov</span><i><s style={{ width: `${Math.round(((ci + 1) / cols.length) * 92)}%` }} /></i></div>))}
          </div>); })}
      </div>
    </>
  );
}
function ReportingGrid({ P, seed }) {
  const [tab, setTab] = useState('This stage');
  const off = ['This stage', 'Previous stage', 'To date'].indexOf(tab);
  const cols = [{ key: 'a', label: 'Report', width: '2fr' }, { key: 'b', label: 'Prepared by' }, { key: 'c', label: 'Updated' }, { key: 's', label: 'Status', pill: true, width: '.9fr' }];
  const rows = (P.stats.length ? P.stats : [{ label: 'Delivery summary' }, { label: 'Stage report' }, { label: 'Handover note' }]).concat(P.stages.map((x) => ({ label: `${x.title} report` }))).slice(0, 7)
    .map((s, i) => ({ a: cut(s.label, 34), b: PRACT[(i + seed + off) % 6], c: off === 1 ? `${(seed + i * 2) % 27 + 1} Oct` : ['Today', 'Today', 'Tue', 'Wed', 'Fri', 'Mon', 'Fri'][(i + off) % 7], s: ST4[(i + seed + off * 2) % (off === 1 ? 4 : 3)] }));
  return (<>
    <div className="os-bar"><OmsTabs items={['This stage', 'Previous stage', 'To date']} value={tab} onChange={setTab} label="Period" /><button type="button" className="os-btn dark" onClick={() => csvDownload('board-pack.csv', cols, rows)}>Export CSV</button></div>
    <KpiRow stats={P.stats} />
    <div className="oms-two"><Chart title="Delivery by stage" /><Chart title="Progress by workstream" /></div>
    <OmsGrid key={tab} title="Board pack" pageSize={4} columns={cols} rows={rows} />
  </>);
}

function makeViews(P, title, where) {
  const T = cut(title, 30);
  const st = P.stages;
  const seed = hashOf(title);
  const progress = st.map((s, i) => [s.title, PROG[(i + seed) % PROG.length]]);
  const own = (i) => OWN[(i + seed) % OWN.length];
  const due = (i) => `${((seed >> 3) + i * 4) % 26 + 2} Nov`;
  const sts = (i) => ST4[(i + seed) % 3];
  const stg = (i) => (st[(i + seed) % st.length].title ? cut(st[(i + seed) % st.length].title, 18) : '');
  const docs = P.deli.slice(0, 8).map((d, i) => ({ d: cut(d, 38), st: stg(i), p: PRACT[(i + seed) % 6], o: own(i), due: due(i), s: sts(i) }));
  const tasks = P.deli.concat(P.ws.map((w) => w.t));
  const stageOf = (i) => (st[i % st.length] ? cut(st[i % st.length].title, 14) : '');
  return {
    ...bespokeViews(P, title, seed),
    Overview: () => (<>
      <Top t={T} />
      <Chips items={['Overview', ...where.slice(-2).map((w) => cut(w, 22))]} />
      <KpiRow stats={P.stats} />
      <div className="oms-two"><Chart title="Progress by stage" /><Flow title="Workflow status" rows={progress} /></div>
      <OmsGrid title="Deliverables" filterKey="p" pageSize={4} columns={[{ key: 'd', label: 'Document', width: '2.4fr' }, { key: 'st', label: 'Stage', width: '1.1fr' }, { key: 'p', label: 'Practice' }, { key: 's', label: 'Status', pill: true, width: '.9fr' }]} rows={docs}
        add={{ label: 'New document', make: (n) => ({ d: `New document ${n + 1}`, st: stg(0), p: PRACT[(n + seed) % 6], o: own(n), due: due(n), s: 'Scoping' }) }} />
    </>),
    Method: () => (<>
      <Top t="Workflow · Method" />
      <PageBoard st={st} tasks={tasks} seed={seed} />
      <OmsGrid title="Stage sign-off" filterKey="s" pageSize={3} columns={[{ key: 'a', label: 'Stage', width: '1.6fr' }, { key: 'b', label: 'Decision recorded', width: '2fr' }, { key: 'c', label: 'Owner' }, { key: 's', label: 'Status', pill: true, width: '.9fr' }]}
        rows={st.slice(0, 5).map((s, i) => ({ a: cut(s.title, 22), b: cut(s.out, 44), c: own(i), s: sts(i) }))} />
    </>),
    Scope: () => (<>
      <Top t="Scope · Workstreams" />
      <KpiRow stats={[{ value: String(P.ws.length), label: 'Workstreams', note: 'In scope' }, { value: String(st.length), label: 'Stages', note: 'Decision at each' }, { value: String(P.deli.length), label: 'Deliverables', note: 'Itemised' }, { value: '1', label: 'Written mandate', note: 'Before work starts' }]} />
      <div className="os-split">
        <OmsGrid title="Workstreams" filterKey="p" pageSize={5} columns={[{ key: 'w', label: 'Workstream', width: '2fr' }, { key: 'p', label: 'Practice' }, { key: 'st', label: 'Stage' }, { key: 's', label: 'Status', pill: true, width: '.9fr' }]}
          rows={P.ws.slice(0, 7).map((w, i) => ({ w: cut(w.t, 32), p: PRACT[(i + seed) % 6], st: stageOf(i + seed), s: sts(i) }))}
          add={{ label: 'Add', make: (n) => ({ w: `New workstream ${n + 1}`, p: PRACT[(n + seed) % 6], st: stageOf(0), s: 'Scoping' }) }} />
        <div className="oms-card os-feed"><small>Next documents</small>{P.deli.slice(0, 5).map((d, i) => <p key={d}><u /><span><b>{cut(d, 30)}</b>{stageOf(i + seed)}</span><em>{['Today', 'Today', 'Tue', 'Wed', 'Fri'][(i + seed) % 5]}</em></p>)}</div>
      </div>
    </>),
    Deliverables: () => (<>
      <Top t="Documents · Deliverables" />
      <KpiRow stats={[{ value: String(P.deli.length), label: 'Deliverables', note: 'On this page' }, { value: String(Math.max(1, Math.ceil(P.deli.length / 3))), label: 'In review', note: 'Awaiting sign-off' }, { value: String(st.length), label: 'Stage reports', note: 'One per stage' }, { value: '1', label: 'Final handover', note: 'Signed off' }]} />
      <OmsGrid title="Recent files" filterKey="st" pageSize={5} columns={[{ key: 'd', label: 'Name', width: '2.4fr' }, { key: 'st', label: 'Stage', width: '1.1fr' }, { key: 'o', label: 'Owner' }, { key: 'due', label: 'Due', width: '.7fr' }, { key: 's', label: 'Status', pill: true, width: '.9fr' }]} rows={docs}
        add={{ label: 'Upload', make: (n) => ({ d: `Upload ${n + 1}.pdf`, st: stg(n), p: PRACT[n % 6], o: own(n), due: due(n + 2), s: 'Scoping' }) }} />
    </>),
    Reporting: () => (<>
      <Top t="Management reporting" />
      <ReportingGrid P={P} seed={seed} />
    </>),
    Timeline: () => (<>
      <Top t="Timeline · Stages" />
      <div className="oms-card cv-gantt">
        <div className="cv-gh"><small>Start</small><small>Handover</small></div>
        {st.map((s, i) => (<div key={s.title} className="cv-gr"><b>{cut(s.title, 26)}</b><i><s style={{ left: `${i * 15}%`, width: `${100 - st.length * 15 + 15}%` }} /></i></div>))}
      </div>
      <OmsGrid title="Decisions to sign off" filterKey="s" pageSize={3} columns={[{ key: 'a', label: 'Stage', width: '1.6fr' }, { key: 'b', label: 'Output', width: '2fr' }, { key: 'c', label: 'By', width: '.9fr' }, { key: 's', label: 'Status', pill: true, width: '.9fr' }]}
        rows={st.slice(0, 5).map((s, i) => ({ a: cut(s.title, 22), b: cut(s.out, 46), c: due(i), s: sts(i + 1) }))} />
    </>),
  };
}
const MODS = ['Overview', 'Method', 'Scope', 'Deliverables', 'Reporting', 'Timeline'];
const POOL = ['Register', 'Matrix', 'Ledger', 'Calendar', 'Scorecard', 'Pipeline', 'Waterfall', 'Heatmap', 'Swimlane', 'Allocation', 'Tracker', 'Compare', 'Stocks', 'Inset', 'Rings', 'Inbox', 'Segment', 'Treemap', 'Radar', 'Burndown'];
const pick = (seed) => { const k = [1, 3, 7, 9][seed % 4]; return ['Console', ...MODS.slice(0, 5).map((_, i) => POOL[(seed + i * k) % POOL.length])]; };

const PhoneApprovals = ({ P }) => (
  <div className="scr scr-ph"><div className="oms-top"><b>Approvals</b><span className="oms-av">NK</span></div>
    {P.deli.slice(0, 5).map((d, i) => <div key={d} className="oms-card oms-appr"><b>{cut(d, 30)}</b><span>Submitted {i + 1}h ago</span><div><em>Approve</em><em className="g">Review</em></div></div>)}
  </div>
);
const PhoneSteps = ({ P }) => (
  <div className="scr scr-ph"><div className="oms-top"><b>Workflow</b><span className="oms-av">NK</span></div>
    {P.stages.map((s, i) => <div key={s.title} className="oms-card oms-step"><b>{i + 1} · {cut(s.title, 22)}</b><i><s style={{ width: `${PROG[i]}%` }} /></i></div>)}
  </div>
);

/* ------------------------------------------------------------------ sections */
/* 1 · Inside: tabs over one big picture (areas / services / topics beneath this page) */
function Inside({ P, t }) {
  const rows = P.rows;
  const [a, setA] = useState(0);
  const tabs = rows.slice(0, 6);
  const r = tabs[a];
  return (
    <section id="pg-index" className="cv cv-dark cv-inside" aria-labelledby="cv-inside-h">
      <Head id="cv-inside-h" k={`${rows.length} pages`} light>Inside {t}</Head>
      <div className="cv-tabs" role="tablist" aria-label="Pages beneath this one">
        {tabs.map((x, i) => (<button key={x.to} type="button" role="tab" aria-selected={a === i} className={a === i ? 'is-on' : ''} onClick={() => setA(i)}><i>{pad2(i + 1)}</i>{cut(x.title, 26)}</button>))}
      </div>
      <div className="cv-stage" role="tabpanel">
        {tabs.map((x, i) => <Img key={x.to} src={x.src} eager={i === 0} on={a === i} />)}
        <div className="cv-shade" />
        <h3 className="cv-stage-t" key={r.to}>{r.title}</h3>
        <p className="cv-stage-p">{cut(sentence(r.text) || r.text, 190)}</p>
        <Link to={r.to} className="cv-btn">Explore<ArrowRight size={17} aria-hidden="true" /></Link>
      </div>
      <ul className="cv-chips">{rows.map((x) => <li key={x.to}><Link to={x.to}>{cut(x.title, 34)}<ArrowUpRight size={14} aria-hidden="true" /></Link></li>)}</ul>
    </section>
  );
}

/* 2 · Workspace: a big working tablet (click a module or let it cycle) with two phones */
function Workspace({ P, title, where }) {
  const [mod, setMod] = useState(0);
  const [manual, setManual] = useState(false);
  const order = React.useMemo(() => pick(hashOf(title)), [title]);
  useEffect(() => {
    if (manual) return undefined;
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const x = setTimeout(() => setMod((m) => (m + 1) % MODS.length), 5200);
    return () => clearTimeout(x);
  }, [mod, manual]);
  const views = React.useMemo(() => makeViews(P, title, where), [P, title, where]);
  const View = views[order[mod]];
  return (
    <section id="pg-workspace" data-skin={hashOf(title) % 12} data-nav={(hashOf(title) >> 4) % 3} data-dense={(hashOf(title) >> 7) % 2} className="oms-show cv cv-cream cv-work" aria-labelledby="cv-work-h">
      <div className="oms-show-head">
        <span className="oms-show-eyebrow">Engagement workspace</span>
        <h2 id="cv-work-h">{cut(title, 44)}, in one workspace.</h2>
      </div>
      <div className="oms-show-points">
        <div><b>{P.stages.length} stages</b><span>Each closes with a decision your leadership signs off before the next begins.</span></div>
        <div><b>{P.ws.length} workstreams</b><span>Commissioned together or one at a time.</span></div>
        <div><b>{P.deli.length} deliverables</b><span>Concrete documents and decisions, not a general report.</span></div>
      </div>
      <div className="oms-show-stage">
        <Tab cls="os-tab">
          <div className="scr scr-l">
            <aside className="oms-side">
              <b className="oms-logo"><i>OMS</i></b>
              {order.map((m, i) => (<button key={m} type="button" className={i === mod ? 'on' : undefined} aria-pressed={i === mod} onClick={() => { setManual(true); setMod(i); }}><u />{m}</button>))}
              <em>Operations Management System</em>
            </aside>
            <div className="oms-main os-fade" key={mod} onPointerDownCapture={() => setManual(true)} onFocusCapture={() => setManual(true)}><View /></div>
          </div>
        </Tab>
        <div aria-hidden="true"><Ph cls="os-ph os-ph-l"><PhoneSteps P={P} /></Ph><Ph cls="os-ph os-ph-r"><PhoneApprovals P={P} /></Ph></div>
      </div>
      <p className="cv-note">Illustrative workspace view, built from this page’s method, scope and deliverables. It does not show client data.</p>
      <div className="oms-show-foot"><Link to="/infrastructure/oms" className="oms-show-link">Explore the Infrastructure <ArrowRight size={16} aria-hidden="true" /></Link></div>
    </section>
  );
}

/* 3 · Method: five numbered stages, one open at a time beside the picture */
function Method({ P, photo, t }) {
  const [a, setA] = useState(0);
  const s = P.stages[a];
  return (
    <section id="pg-method" className="cv cv-white cv-meth" aria-labelledby="cv-meth-h">
      <Head id="cv-meth-h" k={`${P.stages.length} stages`}>How {t} moves from brief to result</Head>
      <ol className="cv-steps" aria-label="Method stages">
        {P.stages.map((x, i) => (<li key={x.title}><button type="button" aria-pressed={a === i} className={a === i ? 'is-on' : ''} onClick={() => setA(i)}><i>{pad2(i + 1)}</i><span>{cut(x.title, 30)}</span></button></li>))}
      </ol>
      <div className="cv-meth-grid">
        <figure><Img src={photo} /></figure>
        <div className="cv-meth-card" key={a}>
          <b>{pad2(a + 1)}</b>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
          {s.out ? <span><i>Typical output</i>{s.out}</span> : null}
        </div>
      </div>
    </section>
  );
}

/* 4 · Deliverables: the engagement sheet beside a portrait tablet and a phone */
function Deliver({ P, title, t }) {
  const st = P.stages;
  return (
    <section id="pg-deliver" className="cv cv-dark cv-del" aria-labelledby="cv-del-h">
      <Head id="cv-del-h" k="What you receive" light>{cut(title, 40)}: the handover, itemised</Head>
      <div className="cv-del-grid">
        <div className="cv-paper" role="img" aria-label={`Deliverables for ${t}`}>
          <h3>Deliverables</h3>
          <ol>{P.deli.map((d) => <li key={d}>{d}</li>)}</ol>
        </div>
        <div className="cv-del-dev" aria-hidden="true">
          <Tab cls="cv-tab-p">
            <div className="scr scr-p">
              <div className="oms-top"><b>Documents</b><span className="oms-av">NK</span></div>
              <div className="oms-kpis oms-kpis-2"><Kpi l="Deliverables" v={String(P.deli.length)} d="Itemised" /><Kpi l="Stages" v={String(st.length)} d="Decision at each" /></div>
              <div className="oms-card oms-list"><small>Recent files</small>{P.deli.slice(0, 6).map((d, i) => <p key={d}><u>{String(d).slice(0, 1)}</u><b>{cut(d, 30)}</b><span>{STATUS[i % 3]}</span></p>)}</div>
              <Chart title="Delivery by stage" />
            </div>
          </Tab>
          <Ph cls="cv-ph"><PhoneApprovals P={P} /></Ph>
        </div>
      </div>
      <div className="cv-foot"><Go href="#contact" light>Request the deliverables list for your mandate</Go></div>
    </section>
  );
}

/* 5 · Scope: big workstream panels, the first one is a picture */
function ScopePanels({ P, photo, t }) {
  const ws = P.scope;
  return (
    <section id="pg-scope" className="cv cv-cream cv-scope" aria-labelledby="cv-scope-h">
      <Head id="cv-scope-h" k={`${ws.length} workstreams`}>What {t} covers</Head>
      <div className="cv-panels" data-n={ws.length}>
        <article className="cv-panel is-pic">
          <Img src={photo} />
          <div className="cv-shade" />
          <div className="cv-panel-in"><small>Scope</small><h3>{ws.length} workstreams, commissioned together or one at a time</h3></div>
        </article>
        {ws.map((w, i) => (
          <article key={w.t} className={`cv-panel is-${['ink', 'paper', 'blue', 'paper', 'ink', 'sand'][i % 6]}`}>
            <i>{pad2(i + 1)}</i>
            <div><h3>{w.t}</h3>{w.d ? <p>{cut(w.d, 150)}</p> : null}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* 6 · Engagement: pick a way to commission, or see how a mandate is documented */
function Engage({ P, t }) {
  const [a, setA] = useState(0);
  if (P.eng.length >= 2) {
    const e = P.eng[a];
    return (
      <section id="pg-engage" className="cv cv-white cv-eng" aria-labelledby="cv-eng-h">
        <Head id="cv-eng-h" k="Engagement">Three ways to commission {t}</Head>
        <div className="cv-eng-grid">
          <ul className="cv-qlist" aria-label="Choose an engagement">
            {P.eng.map((x, i) => (<li key={x.name}><button type="button" aria-pressed={a === i} className={a === i ? 'is-on' : ''} onClick={() => setA(i)}><i>{pad2(i + 1)}</i>{x.name}</button></li>))}
          </ul>
          <div className="cv-eng-card" key={a}>
            <article><small>Scope</small><p>{e.scope}</p></article>
            <article><small>Best suited to</small><p>{e.suits}</p></article>
            <a href="#contact" className="cv-btn is-dark">Speak with our team<ArrowRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="pg-engage" className="cv cv-white cv-eng" aria-labelledby="cv-eng-h">
      <Head id="cv-eng-h" k="Engagement">How a mandate is documented</Head>
      <p className="cv-lede">{HOME_ENGAGEMENT.intro}</p>
      <ul className="cv-fee">{FEE_PARTS.map((f, i) => <li key={f}><i>{pad2(i + 1)}</i><strong>{f}</strong></li>)}</ul>
    </section>
  );
}

/* 7 · In practice: big picture tiles */
function Practice({ P, t }) {
  const list = P.cases.length ? P.cases.slice(0, 3).map((c, i) => ({ title: c.title, text: c.body, src: P.rels[i] && P.rels[i].src, to: P.rels[i] && P.rels[i].to })) : [];
  if (!list.length) return null;
  return (
    <section id="pg-cases" className="cv cv-cream cv-cases" aria-labelledby="cv-cases-h">
      <Head id="cv-cases-h" k="In practice">Where {t} has been put to work</Head>
      <div className="cv-tiles">
        {list.map((c, i) => (
          <article key={c.title} className="cv-tile">
            <Img src={c.src} />
            <div className="cv-shade" />
            <div className="cv-tile-in"><small>Illustrative situation {pad2(i + 1)}</small><h3>{c.title}</h3><p>{cut(c.text, 170)}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* 8 · Signals: big numbers */
function Signals({ P, t }) {
  return (
    <section id="pg-signals" className="cv cv-dark cv-sig" aria-labelledby="cv-sig-h">
      <Head id="cv-sig-h" k="Signals" light>What you can hold us to on {t}</Head>
      <ul className="cv-nums">
        {P.stats.map((s) => (<li key={s.label}><b className={String(s.value).length > 8 ? 'is-long' : undefined}>{s.value}</b><span>{s.label}</span>{s.note ? <p>{s.note}</p> : null}</li>))}
      </ul>
    </section>
  );
}

/* 9 · Decision path: three starting positions, three first moves */
function Decide({ P, t }) {
  const d = P.dec.slice(0, 3);
  if (d.length < 2) return null;
  return (
    <section id="pg-decide" className="cv cv-white cv-dec" aria-labelledby="cv-dec-h">
      <Head id="cv-dec-h" k="Decision path">Where your {t} decision begins</Head>
      <div className="cv-dec-grid">
        {d.map((x, i) => (
          <article key={x.if}>
            <i>{pad2(i + 1)}</i>
            <small>If</small>
            <h3>{x.if}</h3>
            <p>{x.first}</p>
            <a href="#contact" className="cv-link">Start here<ArrowRight size={15} aria-hidden="true" /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

/* 10 · Outcome band: one full-bleed picture with the result statement */
function Outcome({ P, photo, t }) {
  if (!P.outc.length) return null;
  return (
    <section id="pg-outcome" className="cv cv-dark cv-out" aria-labelledby="cv-out-h">
      <Img src={photo} />
      <div className="cv-out-shade" />
      <div className="cv-out-in">
        <span className="cv-eyebrow is-light">What changes after {t}</span>
        <h2 id="cv-out-h">{P.outc[0]}</h2>
        {P.outc.length > 1 ? <ul>{P.outc.slice(1, 4).map((o) => <li key={o}>{o}</li>)}</ul> : null}
      </div>
    </section>
  );
}

/* 11 · Related: a big picture mosaic */
function Related({ P, t }) {
  const r = P.rels.slice(0, 6);
  if (r.length < 3) return null;
  return (
    <section id="pg-related" className="cv cv-cream cv-rel" aria-labelledby="cv-rel-h">
      <Head id="cv-rel-h" k="Continue">Pages that sit beside {t}</Head>
      <ul className="cv-mag">
        {r.map((x) => (
          <li key={x.to}>
            <Link to={x.to} className="cv-mcard">
              <Img src={x.src} />
              <span className="cv-shade" />
              <span className="cv-mtxt"><small>{x.from || 'Related'}</small><strong>{x.title}</strong></span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* 12 · Questions: big expandable answers */
function Questions({ P, t }) {
  const [open, setOpen] = useState(0);
  if (!P.faqs.length) return null;
  return (
    <section id="pg-expand" className="cv cv-white cv-faq" aria-labelledby="cv-faq-h">
      <Head id="cv-faq-h" k="Questions">Before you commission {t}</Head>
      <ul className="cv-faqs">
        {P.faqs.map((f, i) => (
          <li key={f.q} className={open === i ? 'is-open' : ''}>
            <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}><i>{pad2(i + 1)}</i><span>{f.q}</span><Plus size={22} aria-hidden="true" /></button>
            {open === i ? <p>{f.a}</p> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* rail labels (the hero rail shows the first nine) */
export function capRail(hasRows, P) {
  return [
    ...(hasRows ? [{ id: 'pg-index', label: 'Inside' }] : []),
    { id: 'pg-workspace', label: 'Workspace' },
    { id: 'pg-method', label: 'Method' },
    { id: 'pg-deliver', label: 'Deliverables' },
    ...(P.scope ? [{ id: 'pg-scope', label: 'Scope' }] : []),
    { id: 'pg-engage', label: 'Engagement' },
    ...(P.cases.length ? [{ id: 'pg-cases', label: 'In practice' }] : []),
    { id: 'pg-signals', label: 'Signals' },
    { id: 'pg-expand', label: 'Questions' },
  ].slice(0, 9);
}
export { prep as capPrep, Workspace as CapWorkspace };

export default function CapBody({ P, C, hasRows, t, title, where }) {
  return (
    <>
      {hasRows ? <Inside P={P} t={t} /> : null}
      <Workspace P={P} title={title} where={where} />
      <Method P={P} photo={C.photo} t={t} />
      <Deliver P={P} title={title} t={t} />
      {P.scope ? <ScopePanels P={P} photo={C.photo} t={t} /> : null}
      <Engage P={P} t={t} />
      <Practice P={P} t={t} />
      <Signals P={P} t={t} />
      <Decide P={P} t={t} />
      <Outcome P={P} photo={C.photo} t={t} />
      <Related P={P} t={t} />
      <Questions P={P} t={t} />
    </>
  );
}
