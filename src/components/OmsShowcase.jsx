import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Top, Kpi, Chart, Tab, Ph, PhoneA, PhoneB } from './HeroDevices';
import OmsGrid, { OmsTabs, csvDownload } from './OmsGrid';

// v599 · section below the home hero: a large working OMS tablet (click a module, or let it cycle) with two phones.
const MODS = ['Dashboard', 'CRM', 'Workflow', 'Reporting', 'Documents', 'Finance'];
const POINTS = [
  { k: 'CRM', t: 'Every client, mandate and contact in one record.' },
  { k: 'Workflow', t: 'Defined steps, named owners, clear due dates.' },
  { k: 'Reporting', t: 'Current, consistent and board-ready.' },
];

const PR = ['Advisory', 'Management', 'Brokerage'];
const Bar = ({ children }) => <div className="os-bar">{children}</div>;
const Feed = ({ items }) => (<div className="oms-card os-feed"><small>Recent activity</small>{items.slice(0, 6).map(([a, b, c], i) => <p key={a + b + i}><u /><span><b>{a}</b>{b}</span><em>{c}</em></p>)}</div>);

const MANDATES = [
  { m: 'Market entry · Retail group', p: 'Advisory', s: 'On track', pr: '82%', v: 'AED 2.4M' }, { m: 'Enterprise reporting · Logistics', p: 'Management', s: 'Review', pr: '64%', v: 'AED 1.1M' },
  { m: 'Acquisition mandate · F&B', p: 'Brokerage', s: 'On track', pr: '47%', v: 'AED 3.8M' }, { m: 'Operating model · Healthcare', p: 'Advisory', s: 'Scoping', pr: '21%', v: 'AED 0.9M' },
  { m: 'Governance set-up · Holding', p: 'Management', s: 'On track', pr: '90%', v: 'AED 1.6M' }, { m: 'Sale process · Services firm', p: 'Brokerage', s: 'Review', pr: '58%', v: 'AED 2.0M' },
  { m: 'Group structure · Real estate', p: 'Advisory', s: 'On track', pr: '73%', v: 'AED 5.2M' },
];
const CLIENTS = [
  { c: 'Al Noor Holdings', sec: 'Real estate', o: 'N. Karam', s: 'On track', v: '2.4M', p: 'Advisory' }, { c: 'Gulf Retail Group', sec: 'Retail', o: 'R. Haddad', s: 'Review', v: '1.1M', p: 'Management' },
  { c: 'Meridian Foods', sec: 'F&B', o: 'N. Karam', s: 'On track', v: '3.8M', p: 'Brokerage' }, { c: 'Crescent Logistics', sec: 'Logistics', o: 'L. Saeed', s: 'Scoping', v: '0.9M', p: 'Management' },
  { c: 'Harbour Healthcare', sec: 'Healthcare', o: 'R. Haddad', s: 'On track', v: '1.6M', p: 'Advisory' }, { c: 'Falcon Services', sec: 'Services', o: 'L. Saeed', s: 'Review', v: '2.0M', p: 'Brokerage' },
  { c: 'Oasis Real Estate', sec: 'Real estate', o: 'N. Karam', s: 'On track', v: '5.2M', p: 'Advisory' },
];
const TASKS0 = [
  { t: 'Client intake', c: 0, p: 'Advisory', d: 10 }, { t: 'Baseline review', c: 0, p: 'Management', d: 13 }, { t: 'Data room check', c: 0, p: 'Brokerage', d: 16 }, { t: 'Stakeholder map', c: 0, p: 'Advisory', d: 19 },
  { t: 'Mandate letter', c: 1, p: 'Advisory', d: 11 }, { t: 'Work plan', c: 1, p: 'Management', d: 14 }, { t: 'Fee schedule', c: 1, p: 'Brokerage', d: 18 },
  { t: 'Operating model', c: 2, p: 'Advisory', d: 15 }, { t: 'Reporting pack', c: 2, p: 'Management', d: 12 }, { t: 'Controls design', c: 2, p: 'Brokerage', d: 20 }, { t: 'Weekly review', c: 2, p: 'Advisory', d: 22 },
  { t: 'Quality check', c: 3, p: 'Management', d: 24 }, { t: 'Client sign-off', c: 3, p: 'Advisory', d: 26 }, { t: 'Lessons learned', c: 3, p: 'Brokerage', d: 28 },
];
const STAGES = ['Assess', 'Scope', 'Deliver', 'Review'];
const FILES = [
  { f: 'Mandate letter.pdf', cl: 'Al Noor', o: 'N. Karam', m: 'Today', s: 'On track', k: 'Mandates' }, { f: 'Operating model.pdf', cl: 'Harbour', o: 'L. Saeed', m: 'Today', s: 'Review', k: 'Mandates' },
  { f: 'Board pack Q3.pdf', cl: 'Gulf Retail', o: 'R. Haddad', m: 'Yesterday', s: 'On track', k: 'Board packs' }, { f: 'Due diligence index.xlsx', cl: 'Meridian', o: 'N. Karam', m: 'Yesterday', s: 'Review', k: 'Due diligence' },
  { f: 'Reporting calendar.xlsx', cl: 'Crescent', o: 'L. Saeed', m: 'Mon', s: 'On track', k: 'Board packs' }, { f: 'Governance charter.pdf', cl: 'Oasis', o: 'R. Haddad', m: 'Mon', s: 'On track', k: 'Mandates' },
  { f: 'Data room register.xlsx', cl: 'Falcon', o: 'N. Karam', m: 'Fri', s: 'Scoping', k: 'Due diligence' }, { f: 'Fee schedule.pdf', cl: 'Falcon', o: 'N. Karam', m: 'Fri', s: 'Scoping', k: 'Mandates' },
];
const REPORTS = {
  'Q3 2026': { k: [['Revenue', 'AED 18.4M', '+6.2%'], ['Margin', '31%', '+2.1 pts'], ['Utilisation', '78%', 'Target 75%'], ['Collections', '94%', '+3 pts']], r: [['Performance summary', 'Finance', 'Today', 'On track'], ['Pipeline and forecast', 'Advisory', 'Today', 'On track'], ['Delivery and quality', 'Management', 'Yesterday', 'Review'], ['Risk and controls', 'Governance', 'Mon', 'On track'], ['Fee recognition', 'Finance', 'Mon', 'Scoping']] },
  'Q2 2026': { k: [['Revenue', 'AED 17.3M', '+4.8%'], ['Margin', '29%', '+0.9 pts'], ['Utilisation', '74%', 'Target 75%'], ['Collections', '91%', '+1 pt']], r: [['Performance summary', 'Finance', '30 Jun', 'Complete'], ['Pipeline and forecast', 'Advisory', '30 Jun', 'Complete'], ['Delivery and quality', 'Management', '28 Jun', 'Complete'], ['Risk and controls', 'Governance', '27 Jun', 'Complete']] },
  'Year to date': { k: [['Revenue', 'AED 52.9M', '+7.4%'], ['Margin', '30%', '+1.6 pts'], ['Utilisation', '76%', 'Target 75%'], ['Collections', '93%', '+2 pts']], r: [['Year performance', 'Finance', 'Today', 'On track'], ['Mandate pipeline', 'Advisory', 'Today', 'On track'], ['Practice margins', 'Management', 'Yesterday', 'Review'], ['Governance report', 'Governance', 'Mon', 'On track'], ['Client concentration', 'Finance', 'Fri', 'Scoping'], ['Licence position', 'Governance', 'Fri', 'On track']] },
};
const FIN = {
  Invoices: { cols: [{ key: 'a', label: 'No.', width: '.9fr' }, { key: 'b', label: 'Client', width: '1.7fr' }, { key: 'c', label: 'Amount' }, { key: 'd', label: 'Due' }, { key: 's', label: 'Status', pill: true, width: '.9fr' }], filter: 'p', add: '+ New invoice',
    rows: [['INV-2041', 'Al Noor Holdings', 'AED 420K', '30 Nov', 'On track', 'Advisory'], ['INV-2040', 'Gulf Retail Group', 'AED 215K', '24 Nov', 'Review', 'Management'], ['INV-2039', 'Meridian Foods', 'AED 640K', '18 Nov', 'On track', 'Brokerage'], ['INV-2038', 'Crescent Logistics', 'AED 130K', '12 Nov', 'Scoping', 'Management'], ['INV-2037', 'Harbour Healthcare', 'AED 310K', '08 Nov', 'On track', 'Advisory'], ['INV-2036', 'Falcon Services', 'AED 275K', '05 Nov', 'Review', 'Brokerage']] },
  Payments: { cols: [{ key: 'a', label: 'Ref.', width: '.9fr' }, { key: 'b', label: 'Received from', width: '1.7fr' }, { key: 'c', label: 'Amount' }, { key: 'd', label: 'Received' }, { key: 's', label: 'Status', pill: true, width: '.9fr' }], filter: 'p', add: '+ Record payment',
    rows: [['PAY-8812', 'Oasis Real Estate', 'AED 900K', '27 Oct', 'Complete', 'Advisory'], ['PAY-8811', 'Meridian Foods', 'AED 480K', '24 Oct', 'Complete', 'Brokerage'], ['PAY-8810', 'Al Noor Holdings', 'AED 350K', '21 Oct', 'Complete', 'Advisory'], ['PAY-8809', 'Gulf Retail Group', 'AED 190K', '19 Oct', 'Review', 'Management'], ['PAY-8808', 'Harbour Healthcare', 'AED 260K', '15 Oct', 'Complete', 'Advisory']] },
  Forecast: { cols: [{ key: 'a', label: 'Line', width: '1.6fr' }, { key: 'b', label: 'Practice', width: '1fr' }, { key: 'c', label: 'Expected' }, { key: 'd', label: 'Month' }, { key: 's', label: 'Status', pill: true, width: '.9fr' }], filter: 'p', add: '+ Add line',
    rows: [['Retainers', 'Advisory', 'AED 1.9M', 'Nov', 'On track', 'Advisory'], ['Management fees', 'Management', 'AED 2.2M', 'Nov', 'On track', 'Management'], ['Transaction fees', 'Brokerage', 'AED 1.4M', 'Dec', 'Review', 'Brokerage'], ['Project fees', 'Advisory', 'AED 1.1M', 'Dec', 'Scoping', 'Advisory'], ['Success fees', 'Brokerage', 'AED 1.5M', 'Jan', 'Scoping', 'Brokerage']] },
};
const finRows = (d) => d.rows.map(([a, b, c, dd, st, p]) => ({ a, b, c, d: dd, s: st, p }));

function Dashboard() {
  return (<>
    <Top t="Management dashboard" />
    <div className="oms-kpis"><Kpi l="Active mandates" v="24" d="+3 this quarter" /><Kpi l="Open workflows" v="138" d="12 awaiting review" /><Kpi l="Pipeline" v="AED 42.6M" d="+8.4%" /><Kpi l="On-time delivery" v="96%" d="Target 95%" /></div>
    <div className="oms-two"><Chart title="Performance by quarter" /><div className="oms-card oms-flow"><small>Workflow status</small>{['Assessment', 'Scope', 'Plan', 'Review', 'Delivery'].map((x, i) => <p key={x}><b>{x}</b><i><s style={{ width: [92, 78, 64, 48, 35][i] + '%' }} /></i></p>)}</div></div>
    <OmsGrid title="Active mandates" filterKey="p" pageSize={4} columns={[{ key: 'm', label: 'Mandate', width: '2.1fr' }, { key: 'p', label: 'Practice' }, { key: 'v', label: 'Value' }, { key: 'pr', label: 'Progress', width: '.8fr' }, { key: 's', label: 'Status', pill: true, width: '.9fr' }]} rows={MANDATES}
      add={{ label: 'New mandate', make: (n) => ({ m: `New mandate ${n + 1} · Draft`, p: PR[n % 3], v: 'AED 0.0M', pr: '0%', s: 'Scoping' }) }} />
  </>);
}
function Crm() {
  const [log, setLog] = useState([['Proposal sent', 'Meridian Foods', '09:40'], ['Meeting logged', 'Al Noor Holdings', '08:15'], ['Contract signed', 'Harbour Healthcare', 'Yesterday'], ['Follow-up due', 'Gulf Retail Group', 'Yesterday'], ['Note added', 'Falcon Services', 'Mon'], ['New contact', 'Crescent Logistics', 'Mon']]);
  return (<>
    <Top t="CRM · Clients" />
    <div className="oms-kpis"><Kpi l="Active clients" v="86" d="+5 this month" /><Kpi l="Open proposals" v="14" d="AED 9.2M" /><Kpi l="Win rate" v="62%" d="+4 pts" /><Kpi l="Average cycle" v="41 days" d="-6 days" /></div>
    <div className="os-split">
      <OmsGrid title="Client records" filterKey="p" pageSize={5} columns={[{ key: 'c', label: 'Client', width: '1.7fr' }, { key: 'sec', label: 'Sector' }, { key: 'o', label: 'Owner' }, { key: 's', label: 'Stage', pill: true, width: '.9fr' }, { key: 'v', label: 'Value', width: '.7fr' }]} rows={CLIENTS}
        add={{ label: 'New client', make: (n) => ({ c: `New client ${n + 1}`, sec: 'To confirm', o: 'N. Karam', s: 'Scoping', v: '0.0M', p: PR[n % 3] }) }} onAdd={(r) => setLog((l) => [['Client added', r.c, 'Just now'], ...l])} />
      <Feed items={log} />
    </div>
  </>);
}
function Workflow() {
  const [view, setView] = useState('Board');
  const [tasks, setTasks] = useState(TASKS0);
  const move = (t) => setTasks((ts) => ts.map((x) => (x === t ? { ...x, c: (x.c + 1) % STAGES.length } : x)));
  const list = tasks.map((x) => ({ t: x.t, st: STAGES[x.c], p: x.p, d: `${x.d} Nov`, s: ['On track', 'Review', 'Scoping', 'Complete'][x.c === 0 ? 2 : x.c === 3 ? 3 : x.c === 2 ? 0 : 1] }));
  return (<>
    <Top t="Workflow · Methodology" />
    <Bar><OmsTabs items={['Board', 'List']} value={view} onChange={setView} /><span className="og-hint">{view === 'Board' ? 'Click a task to move it to the next stage' : 'Click a status to move it on'}</span></Bar>
    {view === 'Board' ? (
      <div className="oms-board">
        {STAGES.map((h, ci) => { const cs = tasks.filter((x) => x.c === ci); return (
          <div key={h} className="oms-col"><small>{h} <em>{cs.length}</em></small>{cs.map((x) => (
            <div key={x.t} role="button" tabIndex={0} className="oms-task og-task" aria-label={`${x.t}: move to next stage`} onClick={() => move(x)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); move(x); } }}><b>{x.t}</b><span>{x.p} · due {x.d} Nov</span><i><s style={{ width: [18, 42, 70, 96][ci] + '%' }} /></i></div>))}</div>); })}
      </div>
    ) : (
      <OmsGrid key="list" title="All tasks" filterKey="st" pageSize={6} columns={[{ key: 't', label: 'Task', width: '2fr' }, { key: 'st', label: 'Stage' }, { key: 'p', label: 'Practice' }, { key: 'd', label: 'Due', width: '.7fr' }, { key: 's', label: 'Status', pill: true, width: '.9fr' }]} rows={list}
        add={{ label: 'New task', make: (n) => ({ t: `New task ${n + 1}`, st: 'Assess', p: PR[n % 3], d: '30 Nov', s: 'Scoping' }) }} />
    )}
  </>);
}
function Reporting() {
  const [q, setQ] = useState('Q3 2026');
  const [sched, setSched] = useState(false);
  const d = REPORTS[q];
  const cols = [{ key: 'a', label: 'Report', width: '2fr' }, { key: 'b', label: 'Prepared by' }, { key: 'c', label: 'Updated' }, { key: 's', label: 'Status', pill: true, width: '.9fr' }];
  const rows = d.r.map(([a, b, c, s]) => ({ a, b, c, s }));
  return (<>
    <Top t="Management reporting" />
    <Bar><OmsTabs items={['Q3 2026', 'Q2 2026', 'Year to date']} value={q} onChange={setQ} label="Period" />
      <span className="os-btns"><button type="button" className="os-btn" aria-pressed={sched} onClick={() => setSched(!sched)}>{sched ? 'Scheduled ✓' : 'Schedule'}</button><button type="button" className="os-btn dark" onClick={() => csvDownload(`board-pack-${q.replace(/\s/g, '-')}.csv`, cols, rows)}>Export CSV</button></span></Bar>
    <div className="oms-kpis">{d.k.map(([l, v, x]) => <Kpi key={l} l={l} v={v} d={x} />)}</div>
    <div className="oms-two"><Chart title="Revenue by quarter" /><Chart title="Margin by practice" /></div>
    <OmsGrid key={q} title="Board pack" pageSize={4} columns={cols} rows={rows} />
  </>);
}
function Documents() {
  return (<>
    <Top t="Documents" />
    <div className="oms-kpis"><Kpi l="Files" v="1,284" d="+42 this week" /><Kpi l="Awaiting signature" v="9" d="3 overdue" /><Kpi l="Shared externally" v="37" d="With access log" /><Kpi l="Storage" v="64%" d="Of allocation" /></div>
    <OmsGrid title="Recent files" filterKey="k" pageSize={5} columns={[{ key: 'f', label: 'Name', width: '2.2fr' }, { key: 'cl', label: 'Client' }, { key: 'o', label: 'Owner' }, { key: 'm', label: 'Modified', width: '.8fr' }, { key: 's', label: 'Status', pill: true, width: '.9fr' }]} rows={FILES}
      add={{ label: 'Upload', make: (n) => ({ f: `Upload ${n + 1}.pdf`, cl: 'To assign', o: 'N. Karam', m: 'Just now', s: 'Scoping', k: 'Mandates' }) }} />
  </>);
}
function Finance() {
  const [tab, setTab] = useState('Invoices');
  const d = FIN[tab];
  return (<>
    <Top t="Finance" />
    <Bar><OmsTabs items={['Invoices', 'Payments', 'Forecast']} value={tab} onChange={setTab} label="Finance view" /></Bar>
    <div className="oms-kpis"><Kpi l="Invoiced" v="AED 6.8M" d="This quarter" /><Kpi l="Outstanding" v="AED 1.9M" d="7 invoices" /><Kpi l="Collected" v="AED 4.9M" d="+12%" /><Kpi l="Forecast" v="AED 8.1M" d="Next quarter" /></div>
    <div className="oms-two"><Chart title="Cash flow by month" /><div className="oms-card oms-flow"><small>Collections by practice</small>{PR.map((x, i) => <p key={x}><b>{x}</b><i><s style={{ width: [88, 72, 61][i] + '%' }} /></i></p>)}</div></div>
    <OmsGrid key={tab} title={tab} filterKey={d.filter} pageSize={4} columns={d.cols} rows={finRows(d)}
      add={{ label: d.add.replace('+ ', ''), make: (n) => ({ a: `NEW-${n + 1}`, b: 'To confirm', c: 'AED 0K', d: 'TBC', s: 'Scoping', p: PR[n % 3] }) }} />
  </>);
}
const S = { Dashboard, CRM: Crm, Workflow, Reporting, Documents, Finance };

export default function OmsShowcase() {
  const [mod, setMod] = useState(0);
  const [manual, setManual] = useState(false);
  // cycles through the modules by itself until the visitor picks one
  useEffect(() => {
    if (manual) return undefined;
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const t = setTimeout(() => setMod((m) => (m + 1) % MODS.length), 4500);
    return () => clearTimeout(t);
  }, [mod, manual]);
  const View = S[MODS[mod]];
  return (
    <section className="oms-show" aria-labelledby="oms-show-h">
      <div className="oms-show-head">
        <span className="oms-show-eyebrow">Operations Management System</span>
        <h2 id="oms-show-h">One system. One team.</h2>
      </div>
      <div className="oms-show-points">
        {POINTS.map((p) => (<div key={p.k}><b>{p.k}</b><span>{p.t}</span></div>))}
      </div>
      <div className="oms-show-stage">
        <Tab cls="os-tab">
          <div className="scr scr-l">
            <aside className="oms-side">
              <b className="oms-logo"><i>OMS</i></b>
              {MODS.map((m, i) => (
                <button key={m} type="button" className={i === mod ? 'on' : undefined} aria-pressed={i === mod} onClick={() => { setManual(true); setMod(i); }}><u />{m}</button>
              ))}
              <em>Operations Management System</em>
            </aside>
            <div className="oms-main os-fade" key={mod} onPointerDownCapture={() => setManual(true)} onFocusCapture={() => setManual(true)}><View /></div>
          </div>
        </Tab>
        <div aria-hidden="true"><Ph cls="os-ph os-ph-l"><PhoneB /></Ph><Ph cls="os-ph os-ph-r"><PhoneA /></Ph></div>
      </div>
      <div className="oms-show-foot">
        <Link to="/infrastructure/oms" className="oms-show-link">Explore the Infrastructure <ArrowRight size={16} aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
