import React from 'react';

// v596 · device scenes for the home hero. Pure HTML/CSS (no images): every screen shows the NK&CO Infrastructure,
// the Operations Management System (OMS): CRM, workflow and management reporting.
const MODS = ['Dashboard', 'CRM', 'Workflow', 'Reporting', 'Documents', 'Finance'];
const BARS = [38, 52, 44, 63, 58, 74, 69, 88];
const ROWS = [
  ['Market entry · Retail group', 'Advisory', 'On track', 82],
  ['Enterprise reporting · Logistics', 'Management', 'Review', 64],
  ['Acquisition mandate · F&B', 'Brokerage', 'On track', 47],
  ['Operating model · Healthcare', 'Advisory', 'Scoping', 21],
  ['Governance set-up · Holding', 'Management', 'On track', 90],
  ['Sale process · Services firm', 'Brokerage', 'Review', 58],
  ['Group structure · Real estate', 'Advisory', 'On track', 73],
];

const Side = ({ on = 0 }) => (
  <aside className="oms-side">
    <b className="oms-logo"><i>OMS</i></b>
    {MODS.map((m, i) => <span key={m} className={i === on ? 'on' : undefined}><u />{m}</span>)}
    <em>Operations Management System</em>
  </aside>
);
const Top = ({ t }) => (<div className="oms-top"><b>{t}</b><span className="oms-search">Search mandates, contacts, documents</span><span className="oms-av">NK</span></div>);
const spark = (seed) => { const n = 9; let x = seed * 7 + 3; return Array.from({ length: n }, (_, i) => { x = (x * 37 + 11) % 97; return 30 + (x % 40) + i * 3; }); };
const smooth = (xs, ys) => {
  let d = `M${xs[0]},${ys[0]}`;
  for (let i = 0; i < xs.length - 1; i++) {
    const x0 = xs[i - 1] ?? xs[i], y0 = ys[i - 1] ?? ys[i], x1 = xs[i], y1 = ys[i], x2 = xs[i + 1], y2 = ys[i + 1], x3 = xs[i + 2] ?? x2, y3 = ys[i + 2] ?? y2;
    d += ` C${(x1 + (x2 - x0) / 6).toFixed(1)},${(y1 + (y2 - y0) / 6).toFixed(1)} ${(x2 - (x3 - x1) / 6).toFixed(1)},${(y2 - (y3 - y1) / 6).toFixed(1)} ${x2},${y2}`;
  }
  return d;
};
const Kpi = ({ l, v, d }) => {
  const vals = spark(String(l).length + String(v).length); const W = 60, H = 22;
  const xs = vals.map((_, i) => (i * W) / (vals.length - 1)); const ys = vals.map((q) => H - ((q - 25) / 70) * H);
  return (<div className="oms-kpi"><small>{l}</small><b>{v}</b><i>{d}</i><svg className="oms-spark" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true"><path d={smooth(xs, ys)} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" vectorEffect="non-scaling-stroke" /></svg></div>);
};
const Chart = ({ title }) => {
  const id = 'ag' + React.useId().replace(/:/g, '');
  const W = 200, H = 70; const xs = BARS.map((_, i) => (i * W) / (BARS.length - 1)); const ys = BARS.map((v) => H - (v / 100) * H * 0.88 - 3);
  const line = smooth(xs, ys);
  return (
    <div className="oms-card oms-chart"><small>{title}</small>
      <div className="oms-bars oms-area">
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
          <defs><linearGradient id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0b2b47" stopOpacity=".22" /><stop offset="1" stopColor="#0b2b47" stopOpacity="0" /></linearGradient></defs>
          <path d={`${line} L${W},${H} L0,${H} Z`} fill={`url(#${id})`} />
          <path d={line} fill="none" stroke="#0b2b47" strokeWidth="1.8" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        </svg>
        <em className="oms-dot" style={{ top: (ys[ys.length - 1] / H) * 100 + '%' }} />
      </div>
    </div>
  );
};
const Table = ({ n = 6, rows, title }) => (
  <div className="oms-card oms-table"><small>{title || 'Active mandates'}</small>
    {(rows || ROWS).slice(0, n).map((r) => (
      <div key={r[0]} className="oms-row"><b>{r[0]}</b><span>{r[1]}</span><em data-s={r[2]}>{r[2]}</em><i><s style={{ width: r[3] + '%' }} /></i></div>
    ))}
  </div>
);

// v673 · full institutional workspaces. One engine, eight industries. Every tablet: main sidebar (or icon rail in portrait),
// module sidebar, frosted top bar, section tabs, KPI row, charts and tables that fill the whole screen. No brand names on screen.
const IND = {
  trade: {
    label: 'Trade Desk', group: 'Trade Desk', on: 'Deal Desk', title: 'Deal Desk', primary: 'New deal', view: 'board',
    nav: [['Overview', ['Dashboard', 'Reports']], ['Contacts', ['Contacts', 'Markets']], ['Trade Desk', ['Pricing', 'Requests', 'Deal Desk', 'Stock']], ['Communications', ['Email', 'WhatsApp', 'Campaigns']], ['Compliance', ['KYC', 'Documents', 'Residency']], ['Finance', ['Accounting', 'Cash Flow']]],
    mod: [['All deals', 31], ['Orders', 14], ['Invoices', 9, 1], ['Shipments', 6], ['Payments', 4], ['Escrow', 3]], tabs: ['Overview', 'Orders', 'Invoices', 'Shipments', 'Payments', 'Documents'],
    kpis: [['Net margin received', 'AED 1.82M', '+6.2% vs last'], ['Held in escrow', 'AED 4.6M', '3 releases due'], ['Live deals', '24', '3 need attention'], ['Overdue invoices', '3', 'AED 212K']],
    chart: 'Net margin by month', side: ['Deal stages', [['Offer', 92], ['Quoted', 78], ['Under bond', 64], ['Shipped', 48], ['Paid', 35]]],
    board: [['Offer', ['Scotch 12yo · 600 cs', 'Cognac VS · 400 cs', 'Gin · 1,200 cs', 'Vodka · 900 cs']], ['Quoted', ['Rum · 500 cs', 'Whisky · 300 cs', 'Brandy · 250 cs', 'Liqueur · 480 cs']], ['Under bond', ['Tequila · 700 cs', 'Bourbon · 360 cs', 'Gin · 640 cs', 'Rye · 220 cs']], ['Paid', ['Whisky · 800 cs', 'Vodka · 540 cs', 'Rum · 410 cs']]],
    tbl: ['Live deals', [['Scotch 12yo · Al Noor', 'T1', 'On track', 82], ['Cognac VS · Gulf Retail', 'T2', 'Review', 64], ['Vodka · Meridian', 'T1', 'On track', 47], ['Rum · Crescent', 'T2', 'Scoping', 21], ['Tequila · Harbour', 'T1', 'On track', 90], ['Brandy · Falcon', 'T2', 'Review', 58], ['Gin · Oasis', 'T1', 'On track', 73], ['Bourbon · Delta', 'T2', 'At risk', 33]]],
  },
  realestate: {
    label: 'Portfolio', group: 'Portfolio', on: 'Leasing', title: 'Leasing', primary: 'New lease',
    nav: [['Overview', ['Dashboard', 'Reports']], ['Portfolio', ['Assets', 'Leasing', 'Tenants', 'Valuations']], ['Operations', ['Maintenance', 'Vendors', 'Work orders']], ['Finance', ['Rent roll', 'Service charge', 'Budgets']], ['Compliance', ['Documents', 'Insurance']]],
    mod: [['All leases', 128], ['Expiring 90d', 14, 1], ['Renewals', 9], ['Arrears', 6, 1], ['Vacant', 11]], tabs: ['Overview', 'Leases', 'Tenants', 'Arrears', 'Renewals'],
    kpis: [['Occupancy', '94.2%', '+1.4 pts'], ['Rent roll', 'AED 38.7M', '+3.1% YoY'], ['Expiring 90d', '14', 'AED 4.2M'], ['Arrears', '6', 'AED 0.9M']],
    chart: 'Net operating income', side: ['Lease expiry', [['Q4 2026', 88], ['Q1 2027', 62], ['Q2 2027', 45], ['Q3 2027', 38], ['2028+', 24]]],
    tbl: ['Leases', [['Marina Tower · 1204', 'Office', 'On track', 82], ['Gate Avenue · R12', 'Retail', 'Review', 64], ['Harbour Point · 08', 'Residential', 'On track', 47], ['Park Place · L3', 'Office', 'At risk', 21], ['Creek Plaza · 502', 'Office', 'On track', 90], ['Meydan Row · U4', 'Retail', 'Review', 58], ['Bay Central · 1701', 'Residential', 'On track', 73], ['Index Tower · 22', 'Office', 'Scoping', 33]]],
  },
  healthcare: {
    label: 'Clinic Group', group: 'Patients', on: 'Appointments', title: 'Appointments', primary: 'New visit',
    nav: [['Overview', ['Dashboard', 'Reports']], ['Patients', ['Directory', 'Appointments', 'Referrals']], ['Clinical', ['Care plans', 'Labs', 'Pharmacy']], ['Revenue', ['Claims', 'Billing', 'Insurers']], ['Compliance', ['Credentials', 'Audit']]],
    mod: [['Today', 46], ['Waiting', 7, 1], ['Follow-ups', 18], ['No-shows', 3, 1], ['Referrals', 12]], tabs: ['Overview', 'Schedule', 'Waiting', 'Follow-ups', 'Referrals'],
    kpis: [['Appointments today', '46', '92% utilisation'], ['Average wait', '11 min', '−2 min'], ['Claims pending', 'AED 1.1M', '38 claims'], ['Satisfaction', '4.8', '+0.1']],
    chart: 'Patient visits', side: ['Clinic load', [['Cardiology', 94], ['Orthopaedics', 81], ['Paediatrics', 72], ['Dermatology', 58], ['Radiology', 44]]],
    tbl: ['Appointments', [['A. Rahman · 09:00', 'Cardiology', 'On track', 90], ['L. Haddad · 09:20', 'Orthopaedics', 'On track', 74], ['M. Farouk · 09:40', 'Paediatrics', 'Review', 52], ['S. Qureshi · 10:00', 'Dermatology', 'On track', 66], ['N. Saleh · 10:20', 'Radiology', 'Scoping', 28], ['T. Mansour · 10:40', 'Cardiology', 'On track', 81], ['R. Khalil · 11:00', 'Orthopaedics', 'At risk', 35], ['H. Aziz · 11:20', 'Paediatrics', 'On track', 70]]],
  },
  logistics: {
    label: 'Freight Ops', group: 'Shipments', on: 'Tracking', title: 'Tracking', primary: 'New booking',
    nav: [['Overview', ['Dashboard', 'Reports']], ['Shipments', ['Bookings', 'Tracking', 'Customs']], ['Fleet', ['Vehicles', 'Drivers', 'Maintenance']], ['Warehouse', ['Inventory', 'Inbound', 'Outbound']], ['Finance', ['Invoicing', 'Rates']]],
    mod: [['In transit', 83], ['Delayed', 5, 1], ['Customs hold', 4, 1], ['Delivered today', 27], ['Exceptions', 6]], tabs: ['Overview', 'Live map', 'Customs', 'Exceptions', 'Proof of delivery'],
    kpis: [['In transit', '83', '+9 today'], ['On-time delivery', '96.4%', 'Target 95%'], ['Customs holds', '4', '2 cleared today'], ['Freight revenue', 'AED 6.8M', '+4.7%']],
    chart: 'Shipments per week', side: ['Lane performance', [['Jebel Ali → Riyadh', 96], ['Jebel Ali → Doha', 91], ['Khalifa → Muscat', 84], ['Dubai → Kuwait', 73], ['Sharjah → Manama', 66]]],
    tbl: ['Shipments', [['SHP-20418 · Riyadh', 'Road', 'On track', 78], ['SHP-20421 · Doha', 'Road', 'On track', 55], ['SHP-20425 · Rotterdam', 'Sea', 'Review', 36], ['SHP-20430 · Muscat', 'Road', 'On track', 92], ['SHP-20433 · Hamburg', 'Sea', 'At risk', 24], ['SHP-20437 · Kuwait', 'Road', 'On track', 68], ['SHP-20441 · Mumbai', 'Air', 'On track', 84], ['SHP-20446 · Manama', 'Road', 'Scoping', 12]]],
  },
  wealth: {
    label: 'Family Office', group: 'Portfolio', on: 'Allocation', title: 'Allocation', primary: 'New mandate',
    nav: [['Overview', ['Dashboard', 'Reports']], ['Portfolio', ['Holdings', 'Allocation', 'Performance']], ['Entities', ['Structures', 'Trusts', 'Companies']], ['Treasury', ['Cash', 'FX', 'Liquidity']], ['Compliance', ['KYC', 'Reporting', 'Audit']]],
    mod: [['All mandates', 24], ['Reviews due', 6, 1], ['Rebalances', 3], ['Reports', 9], ['Alerts', 2, 1]], tabs: ['Overview', 'Holdings', 'Allocation', 'Performance', 'Risk'],
    kpis: [['Assets under mgmt', 'AED 2.14B', '+1.8% MTD'], ['Return YTD', '7.9%', 'vs 6.1% benchmark'], ['Liquidity', 'AED 312M', '14.6% of AUM'], ['Open actions', '11', '2 overdue']],
    chart: 'Portfolio value', side: ['Allocation', [['Equities', 46], ['Fixed income', 28], ['Private markets', 14], ['Real assets', 8], ['Cash', 4]]],
    tbl: ['Mandates', [['Al Noor Family Trust', 'Discretionary', 'On track', 84], ['Harbour Holdings', 'Advisory', 'Review', 62], ['Falcon Foundation', 'Discretionary', 'On track', 71], ['Meridian Estate', 'Advisory', 'On track', 55], ['Crescent Partners', 'Execution', 'At risk', 30], ['Oasis Endowment', 'Discretionary', 'On track', 88], ['Delta Family Office', 'Advisory', 'Review', 47], ['Gulf Legacy Trust', 'Discretionary', 'On track', 76]]],
  },
  legal: {
    label: 'Legal & Compliance', group: 'Matters', on: 'Contracts', title: 'Contracts', primary: 'New matter',
    nav: [['Overview', ['Dashboard', 'Reports']], ['Matters', ['Matters', 'Contracts', 'Disputes']], ['Compliance', ['Policies', 'Registers', 'Filings']], ['Corporate', ['Entities', 'Board packs', 'Minutes']], ['Documents', ['Library', 'Templates']]],
    mod: [['Active', 58], ['In review', 12], ['Expiring', 8, 1], ['Signatures', 5], ['Obligations', 21, 1]], tabs: ['Overview', 'Contracts', 'Obligations', 'Renewals', 'Signatures'],
    kpis: [['Open matters', '58', '6 opened this week'], ['Under review', '12', 'Avg 3.2 days'], ['Renewals due', '8', 'Next 30 days'], ['Filings due', '4', '1 overdue']],
    chart: 'Matters opened', side: ['Matter stages', [['Intake', 90], ['Drafting', 74], ['Review', 61], ['Signature', 40], ['Closed', 28]]],
    tbl: ['Contracts', [['Master services · Al Noor', 'Commercial', 'On track', 80], ['Distribution · Gulf Retail', 'Commercial', 'Review', 58], ['Lease · Marina Tower', 'Property', 'On track', 72], ['Shareholders · Meridian', 'Corporate', 'At risk', 26], ['NDA · Crescent', 'Commercial', 'On track', 94], ['Supply · Harbour', 'Commercial', 'Review', 45], ['Employment · Group', 'People', 'On track', 66], ['Licence · Falcon', 'Regulatory', 'Scoping', 18]]],
  },
  hospitality: {
    label: 'Hospitality Group', group: 'Operations', on: 'Reservations', title: 'Reservations', primary: 'New booking',
    nav: [['Overview', ['Dashboard', 'Reports']], ['Operations', ['Reservations', 'Rooms', 'Events']], ['Guests', ['Guest profiles', 'Loyalty', 'Feedback']], ['Revenue', ['Rates', 'Channels', 'Forecast']], ['Back office', ['Procurement', 'Staffing']]],
    mod: [['Today', 64], ['Arrivals', 28], ['Departures', 22], ['VIP', 6], ['Requests', 9, 1]], tabs: ['Overview', 'Arrivals', 'In house', 'Departures', 'Groups'],
    kpis: [['Occupancy', '87%', '+3 pts'], ['ADR', 'AED 912', '+5.1%'], ['RevPAR', 'AED 794', '+8.4%'], ['Guest score', '71', 'NPS +4']],
    chart: 'Revenue by day', side: ['Channel mix', [['Direct', 88], ['Corporate', 64], ['Online agents', 52], ['Wholesale', 36], ['Groups', 24]]],
    tbl: ['Arrivals', [['Al Mansoori · Suite 1802', 'Direct', 'On track', 90], ['K. Brandt · Deluxe 612', 'Corporate', 'On track', 70], ['Nakamura party · 4 rooms', 'Groups', 'Review', 44], ['E. Duval · Suite 2201', 'Direct', 'On track', 82], ['R. Singh · Deluxe 418', 'Online', 'Scoping', 22], ['Hassan family · 2 rooms', 'Direct', 'On track', 66], ['M. Rossi · Deluxe 530', 'Corporate', 'At risk', 30], ['Al Zaabi · Villa 3', 'Direct', 'On track', 76]]],
  },
  industrial: {
    label: 'Industrial Ops', group: 'Production', on: 'Schedule', title: 'Schedule', primary: 'New work order',
    nav: [['Overview', ['Dashboard', 'Reports']], ['Production', ['Orders', 'Schedule', 'Quality']], ['Supply', ['Suppliers', 'Purchasing', 'Inventory']], ['Assets', ['Machines', 'Maintenance']], ['Compliance', ['Audits', 'Certificates']]],
    mod: [['Open orders', 112], ['Late', 9, 1], ['QC holds', 4, 1], ['Maintenance', 7], ['Shortages', 3, 1]], tabs: ['Overview', 'Orders', 'Schedule', 'Quality', 'Maintenance'],
    kpis: [['OEE', '82.4%', '+1.9 pts'], ['On-time orders', '94%', 'Target 93%'], ['Scrap rate', '1.3%', '−0.2 pts'], ['Inventory value', 'AED 7.4M', '12 shortages']],
    chart: 'Output per shift', side: ['Line utilisation', [['Line 1', 94], ['Line 2', 86], ['Line 3', 71], ['Line 4', 63], ['Line 5', 40]]],
    tbl: ['Work orders', [['WO-5521 · Valve housing', 'Line 1', 'On track', 84], ['WO-5524 · Gear set', 'Line 2', 'On track', 62], ['WO-5530 · Panel assembly', 'Line 3', 'Review', 48], ['WO-5533 · Pump body', 'Line 1', 'On track', 90], ['WO-5538 · Bracket kit', 'Line 4', 'At risk', 22], ['WO-5541 · Shaft', 'Line 2', 'On track', 70], ['WO-5545 · Housing cap', 'Line 5', 'Scoping', 14], ['WO-5549 · Coupling', 'Line 3', 'On track', 58]]],
  },
};

const Glyph = () => (<i className="rn-glyph" />);
const MainNav = ({ c }) => {
  const open = (c.nav.find(([, it]) => it.includes(c.on)) || c.nav[0])[0];
  return (
    <aside className="rn-main">
      <div className="rn-head"><Glyph /><b>{c.label}</b><span className="rn-collapse" /></div>
      {c.nav.map(([g, items]) => (
        <div key={g} className={g === open ? 'rn-grp open' : 'rn-grp'}>
          <small>{g}<u /></small>
          {g === open && items.map((m) => <span key={m} className={m === c.on ? 'rn-it on' : 'rn-it'}><i /><span>{m}</span></span>)}
        </div>
      ))}
      <div className="rn-foot"><span className="rn-it"><i /><span>Appearance</span></span><span className="rn-user"><em>NK</em><b>Nikolai K.<small>Administrator</small></b></span></div>
    </aside>
  );
};
const MainRail = ({ c }) => (
  <aside className="rn-rail">
    <Glyph />
    {c.nav.map(([g, items]) => <span key={g} className={items.includes(c.on) ? 'on' : undefined}><i /></span>)}
    <span className="rn-rail-set"><i /></span>
  </aside>
);
const ModSide = ({ c }) => (
  <nav className="rn-mod">
    <button type="button" className="rn-new" tabIndex={-1}>+ {c.primary}</button>
    <small className="rn-mod-h">{c.title}</small>
    {c.mod.map(([label, n, warn], i) => (
      <span key={label} className={i === 0 ? 'rn-mi on' : 'rn-mi'}><i /><span>{label}</span>{n != null && <em className={warn ? 'warn' : undefined}>{n}</em>}</span>
    ))}
    <small className="rn-mod-h">Saved views</small>
    <span className="rn-mi"><i /><span>My queue</span></span><span className="rn-mi"><i /><span>Needs review</span></span>
    <span className="rn-set"><i /><span>Settings</span></span>
  </nav>
);
const Audit = () => (<div className="rn-audit"><i />Synced 09:41<span>·</span>Audit log on<span>·</span>Encrypted<em>Confidential · Internal</em></div>);
const RenTop = ({ q = 'Search records, contacts, documents' }) => (
  <div className="rn-top">
    <span className="rn-search"><i />{q}<kbd>⌘K</kbd></span>
    <span className="rn-ico bell"><i /><em /></span><span className="rn-ico ai"><i />AI</span><span className="rn-ico th"><i /></span>
    <span className="rn-me"><em>NK</em></span>
  </div>
);
const Tabs = ({ c }) => (<div className="rn-tabs">{c.tabs.map((t, i) => <span key={t} className={i === 0 ? 'on' : undefined}>{t}</span>)}</div>);
const Head = ({ c }) => (
  <>
    <div className="rn-crumb">{c.group}<u>›</u>{c.title}</div>
    <div className="oms-top"><b>{c.title}</b><span className="rn-acts"><span className="rn-seg"><u>Day</u><u>Week</u><u>Month</u><u className="on">Quarter</u></span><span className="rn-btn">Export</span></span></div>
    <Tabs c={c} />
  </>
);
const SideCard = ({ c }) => (<div className="oms-card oms-flow"><small>{c.side[0]}</small>{c.side[1].map(([n, v]) => <p key={n}><b>{n}<em>{v}%</em></b><i><s style={{ width: v + '%' }} /></i></p>)}</div>);
const Board = ({ c }) => (
  <div className="oms-board">
    {c.board.map(([h, cs]) => (
      <div key={h} className="oms-col"><small>{h} <em>{cs.length}</em></small>{cs.map((x, i) => <div key={x} className="oms-task"><b>{x}</b><span>{['T1', 'T2'][i % 2]} · escrow AED {120 + i * 45}K</span><i><s style={{ width: 25 + ((i * 29) % 70) + '%' }} /></i></div>)}</div>
    ))}
  </div>
);
const Dash = ({ k, view }) => {
  const c = IND[k]; const v = view || c.view || 'dash';
  return (
    <div className="scr scr-l rn"><MainNav c={c} /><ModSide c={c} />
      <div className="rn-body"><RenTop />
        <div className="oms-main rn-work"><Head c={c} />
          <div className="oms-kpis">{c.kpis.map(([l, val, d]) => <Kpi key={l} l={l} v={val} d={d} />)}</div>
          {v === 'board' && c.board ? <Board c={c} /> : <div className="oms-two oms-grow"><Chart title={c.chart} /><SideCard c={c} /></div>}
          <Table n={8} rows={c.tbl[1]} title={c.tbl[0]} />
        </div>
        <Audit />
      </div>
    </div>
  );
};
const DashP = ({ k }) => {
  const c = IND[k];
  return (
    <div className="scr scr-p rn"><MainRail c={c} />
      <div className="rn-body"><RenTop q="Search" />
        <div className="oms-main rn-work"><Head c={c} />
          <div className="oms-kpis oms-kpis-2">{c.kpis.map(([l, val, d]) => <Kpi key={l} l={l} v={val} d={d} />)}</div>
          <Chart title={c.chart} />
          <Table n={8} rows={c.tbl[1]} title={c.tbl[0]} />
        </div>
        <Audit />
      </div>
    </div>
  );
};
const DashL = () => <Dash k="trade" view="dash" />;
const FlowL = () => <Dash k="trade" />;
const CrmP = () => <DashP k="hospitality" />;
const ReportP = () => <DashP k="wealth" />;

// phone screens
const PhoneA = () => (<div className="scr scr-ph"><div className="oms-top"><b>Dashboard</b><span className="oms-av">NK</span></div><div className="oms-kpis oms-kpis-2"><Kpi l="Mandates" v="24" d="+3" /><Kpi l="Pipeline" v="42.6M" d="+8.4%" /></div><Chart title="Quarterly performance" /><Table n={4} /></div>);
const PhoneB = () => (
  <div className="scr scr-ph"><div className="oms-top"><b>Approvals</b><span className="oms-av">NK</span></div>
    {['Mandate letter · Al Noor', 'Reporting pack · Gulf Retail', 'Fee schedule · Meridian', 'Controls design · Crescent', 'Data room · Falcon'].map((t, i) => <div key={t} className="oms-card oms-appr"><b>{t}</b><span>Submitted {i + 1}h ago</span><div><em>Approve</em><em className="g">Review</em></div></div>)}
  </div>
);
const PhoneC = () => (<div className="scr scr-ph"><div className="oms-top"><b>Reporting</b><span className="oms-av">NK</span></div><Chart title="Revenue by practice" /><div className="oms-kpis oms-kpis-2"><Kpi l="Delivery" v="96%" d="On time" /><Kpi l="Margin" v="31%" d="+2.1 pts" /></div><Table n={5} /></div>);
const PhoneD = () => (<div className="scr scr-ph"><div className="oms-top"><b>Workflow</b><span className="oms-av">NK</span></div>{['Assess', 'Scope', 'Plan', 'Deliver', 'Review'].map((s, i) => <div key={s} className="oms-card oms-step"><b>{i + 1} · {s}</b><i><s style={{ width: [100, 86, 60, 38, 12][i] + '%' }} /></i></div>)}<Table n={3} /></div>);
const PhoneE = () => (<div className="scr scr-ph"><div className="oms-top"><b>Documents</b><span className="oms-av">NK</span></div>{['Mandate letter.pdf', 'Operating model.pdf', 'Board pack Q3.pdf', 'Due diligence index.xlsx', 'Reporting calendar.xlsx', 'Governance charter.pdf', 'Fee schedule.pdf'].map((d) => <div key={d} className="oms-card oms-doc"><u />{d}</div>)}</div>);

// v670 · iPad Pro style: uniform thin bezel, hardware buttons, iPadOS status bar, home indicator and a glass sheen.
const StatusBar = () => (
  <div className="sb" aria-hidden="true">
    <span className="sb-l"><b>9:41</b><em>Sat 31 Oct</em></span>
    <span className="sb-r">
      <svg className="sb-wifi" viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M1 4.2a11 11 0 0 1 16 0M3.5 7a7.3 7.3 0 0 1 11 0M6 9.7a3.6 3.6 0 0 1 6 0" /><circle cx="9" cy="11" r=".6" fill="currentColor" /></svg>
      <b>100%</b><i className="sb-bat"><s /></i>
    </span>
  </div>
);
const Tab = ({ cls, children }) => (
  <div className={`dev tab ${cls}`}>
    <i className="hw hw-pw" /><i className="hw hw-v1" /><i className="hw hw-v2" />
    <span className="cam" />
    <div className="glass"><StatusBar />{children}<span className="home-bar" /></div>
    <span className="sheen" />
  </div>
);
const Ph = ({ cls, children }) => (<div className={`dev ph ${cls}`}><span className="notch" /><div className="glass">{children}</div></div>);

const SCENES = [
  // 01 Methodology · three tablets: portfolio, trade desk (hero), clinic
  () => (<><Tab cls="t-side t-l"><Dash k="realestate" /></Tab><Tab cls="t-main"><Dash k="trade" /></Tab><Tab cls="t-side t-r"><Dash k="healthcare" /></Tab></>),
  // 02 Enterprise Management · portrait family office + freight control + phone
  () => (<><Tab cls="t-por t-por-l"><DashP k="wealth" /></Tab><Tab cls="t-main t-main-b"><Dash k="logistics" /></Tab><Ph cls="p-front p-front-r"><PhoneB /></Ph></>),
  // 03 Advisory & Consultancy · legal desk + portrait hospitality + phone
  () => (<><Tab cls="t-mid t-mid-l"><Dash k="legal" /></Tab><Tab cls="t-por t-por-r"><DashP k="hospitality" /></Tab><Ph cls="p-one"><PhoneD /></Ph></>),
  // 04 Business Brokerage · trade dashboard + industrial + phone in front
  () => (<><Tab cls="t-main"><Dash k="trade" view="dash" /></Tab><Tab cls="t-side t-r2"><Dash k="industrial" /></Tab><Ph cls="p-front"><PhoneE /></Ph></>),
  // 05 Intelligence · phone, portrait wealth, clinic, phone
  () => (<><Ph cls="p-side"><PhoneE /></Ph><Tab cls="t-por"><DashP k="wealth" /></Tab><Tab cls="t-mid"><Dash k="healthcare" view="dash" /></Tab><Ph cls="p-side"><PhoneC /></Ph></>),
];

export { Dash, DashP, Top, Kpi, Chart, Table, Tab, Ph, DashL, FlowL, CrmP, ReportP, PhoneA, PhoneB, PhoneC };

export default function Scene({ index }) {
  const S = SCENES[index % SCENES.length];
  return <div className="bcg-stage" aria-hidden="true"><div className="bcg-scene" data-scene={index}><S /></div></div>;
}
