import React from 'react';
import { SCOPE_DETAIL } from '../data/scopeDetail';
import {
  SCOPE_INTRO, CONSULT_SCOPE, MGMT_SCOPE, NOT_ASSUMED_MGMT, BROKER_SCOPE, TXN_SCOPE, FEES, JOURNEYS, NOT_ASSUMED, CHECKLIST,
} from '../data/institutional3';
import {
  PROFILE, PRACTICES, APPROACH_COPY, PRINCIPLES_COPY, SCOPE_COPY, FIRM_COPY,
  POSITIONING_COPY, ARCHITECTURE, SEPARATION, CONTROL_REGISTER, GOVERNANCE, LICENCE_REGISTER,
} from '../data/institutional';
import {
  SERVICE_ARCH, DELIVERABLES, ACCOUNTABILITY, MANDATE_SCHEDULE, TXN_CLASS, LIFECYCLE, TRANSITION, ACCEPTANCE, COMMERCIAL, FINAL_PRINCIPLE,
} from '../data/institutional2';

// Homepage sections for the NK&CO corporate narrative.

export function Profile() {
  return (
    <section id="profile" className="nk2-sec nk2-sec-white">
      <div className="nk-container">
        <div className="nk2-split">
          <div>
            <div className="nk2-eyebrow">{PROFILE.eyebrow}</div>
            <h2 className="nk2-h2">{PROFILE.title}</h2>
          </div>
          <div>
            {PROFILE.paragraphs.map((t) => (
              <p key={t.slice(0, 24)} className="nk2-lede" style={{ marginBottom: 18 }}>{t}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Practices() {
  return (
    <section id="practices" className="nk2-sec nk2-sec-tint">
      <div className="nk-container">
        {PRACTICES.map((p, i) => (
          <div key={p.id} id={p.id} className="nk2-split" style={i ? { marginTop: 72 } : undefined}>
            <div>
              <div className="nk2-eyebrow">{p.eyebrow}</div>
              <h2 className="nk2-h2">{p.name}</h2>
            </div>
            <div>
              {p.paragraphs.map((t) => (
                <p key={t.slice(0, 24)} className="nk2-lede" style={{ marginBottom: 18 }}>{t}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Approach() {
  return (
    <section id="approach" className="nk2-sec nk2-sec-white">
      <div className="nk-container">
        <div className="nk2-sec-head">
          <div>
            <div className="nk2-eyebrow">{APPROACH_COPY.eyebrow}</div>
            <h2 className="nk2-h2">{APPROACH_COPY.title}</h2>
          </div>
        </div>
        {APPROACH_COPY.intro.map((t) => (
          <p key={t.slice(0, 24)} className="nk2-lede" style={{ marginBottom: 14 }}>{t}</p>
        ))}
        <ol className="nk3-pillars" style={{ marginTop: 28 }}>
          {APPROACH_COPY.stages.map((s) => (
            <li key={s.n} className="nk3-pillar">
              <span className="nk3-pillar-num">{s.n}</span>
              <div>
                <h3 className="nk3-pillar-title">{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="nk3-close" style={{ marginTop: 28 }}>{APPROACH_COPY.close}</p>
      </div>
    </section>
  );
}

export function Principles() {
  return (
    <section id="principles" className="nk2-sec nk2-sec-tint">
      <div className="nk-container">
        <div className="nk2-split">
          <div>
            <div className="nk2-eyebrow">{PRINCIPLES_COPY.eyebrow}</div>
            <h2 className="nk2-h2">{PRINCIPLES_COPY.title}</h2>
          </div>
          <div>
            <p className="nk2-lede" style={{ marginBottom: 18 }}>{PRINCIPLES_COPY.intro}</p>
            {PRINCIPLES_COPY.paragraphs.map((t) => (
              <p key={t.slice(0, 24)} className="nk2-lede" style={{ marginBottom: 18 }}>{t}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Scope() {
  return (
    <section id="scope" className="nk2-sec nk2-sec-white">
      <div className="nk-container">
        <div className="nk2-split">
          <div>
            <div className="nk2-eyebrow">{SCOPE_COPY.eyebrow}</div>
            <h2 className="nk2-h2">{SCOPE_COPY.title}</h2>
          </div>
          <div>
            {SCOPE_COPY.paragraphs.map((t) => (
              <p key={t.slice(0, 24)} className="nk2-lede" style={{ marginBottom: 18 }}>{t}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TheFirm() {
  return (
    <section id="the-firm" className="nk2-sec nk2-sec-tint">
      <div className="nk-container">
        <div className="nk2-split">
          <div>
            <div className="nk2-eyebrow">{FIRM_COPY.eyebrow}</div>
            <h2 className="nk2-h2">{FIRM_COPY.title}</h2>
          </div>
          <div>
            <blockquote className="nk3-principle">{FIRM_COPY.paragraph}</blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

function Head({ d }) {
  return (
    <div className="nk2-sec-head">
      <div>
        <div className="nk2-eyebrow">{d.eyebrow}</div>
        <h2 className="nk2-h2">{d.title}</h2>
      </div>
    </div>
  );
}

export function Positioning() {
  return (
    <section id="positioning" className="nk2-sec nk2-sec-tint">
      <div className="nk-container">
        <div className="nk2-split">
          <div>
            <div className="nk2-eyebrow">{POSITIONING_COPY.eyebrow}</div>
            <h2 className="nk2-h2">{POSITIONING_COPY.title}</h2>
          </div>
          <div>
            {POSITIONING_COPY.paragraphs.map((t) => (
              <p key={t.slice(0, 24)} className="nk2-lede" style={{ marginBottom: 18 }}>{t}</p>
            ))}
          </div>
        </div>
        <ol className="nk3-pillars" style={{ marginTop: 40 }}>
          {ARCHITECTURE.map((a, i) => (
            <li key={a.name} className="nk3-pillar">
              <span className="nk3-pillar-num">0{i + 1}</span>
              <div>
                <h3 className="nk3-pillar-title">{a.name}</h3>
                <p>{a.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Separation() {
  const d = SEPARATION;
  return (
    <section id="separation" className="nk2-sec nk2-sec-white">
      <div className="nk-container">
        <Head d={d} />
        <p className="nk2-lede" style={{ marginBottom: 24 }}>{d.intro}</p>
        <div className="nk4-table-wrap">
          <table className="nk4-table">
            <thead>
              <tr><th scope="col">Dimension</th>{d.columns.map((c) => <th key={c} scope="col">{c}</th>)}</tr>
            </thead>
            <tbody>
              {d.rows.map((r) => (
                <tr key={r[0]}>
                  <th scope="row">{r[0]}</th>
                  {r.slice(1).map((c) => <td key={c}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="nk3-close" style={{ marginTop: 24 }}>{d.close}</p>
      </div>
    </section>
  );
}

function DefList({ id, d, tint }) {
  return (
    <section id={id} className={`nk2-sec ${tint ? 'nk2-sec-tint' : 'nk2-sec-white'}`}>
      <div className="nk-container">
        <Head d={d} />
        <p className="nk2-lede" style={{ marginBottom: 24 }}>{d.intro}</p>
        <dl className="nk4-deflist">
          {d.items.map((it, i) => (
            <div key={it[0]} className="nk4-def">
              <dt><span className="nk4-def-n">{String(i + 1).padStart(2, '0')}</span>{it[0]}</dt>
              <dd>{it[1]}</dd>
            </div>
          ))}
        </dl>
        <p className="nk3-close" style={{ marginTop: 24 }}>{d.close}</p>
      </div>
    </section>
  );
}

export function ControlRegister() { return <DefList id="control-register" d={CONTROL_REGISTER} tint />; }
export function Governance() { return <DefList id="governance" d={GOVERNANCE} />; }

export function LicenceRegister() {
  const d = LICENCE_REGISTER;
  return (
    <section id="licensing-register" className="nk2-sec nk2-sec-tint">
      <div className="nk-container">
        <Head d={d} />
        <p className="nk2-lede" style={{ marginBottom: 24 }}>{d.intro}</p>
        <div className="nk4-table-wrap">
          <table className="nk4-table">
            <thead><tr>{d.activityHead.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
            <tbody>
              {d.activities.map((r) => (
                <tr key={r[1]}><th scope="row">{r[0]}</th><td>{r[1]}</td><td>{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="nk4-table-wrap" style={{ marginTop: 28 }}>
          <table className="nk4-table">
            <thead><tr><th scope="col">Reference</th><th scope="col">Question requiring written confirmation</th></tr></thead>
            <tbody>
              {d.rows.map((r) => (
                <tr key={r[0]}><th scope="row">{r[0]}</th><td>{r[1]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="nk3-close" style={{ marginTop: 24 }}>{d.close}</p>
      </div>
    </section>
  );
}

// ---- v284 additions -------------------------------------------------------
export function ServiceArchitecture() {
  const d = SERVICE_ARCH;
  return (
    <section id="service-architecture" className="nk2-sec nk2-sec-white">
      <div className="nk-container">
        <Head d={d} />
        <p className="nk2-lede" style={{ marginBottom: 28 }}>{d.intro}</p>
        <div className="nk4-table-wrap">
          <table className="nk4-table">
            <thead><tr>{d.columns.map((c) => <th key={c.name} scope="col">{c.name}</th>)}</tr></thead>
            <tbody>
              <tr>{d.columns.map((c) => <td key={c.name}><em>{c.ref}</em></td>)}</tr>
              <tr>
                {d.columns.map((c) => (
                  <td key={c.name}>
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      {c.items.map((it) => <li key={it} style={{ marginBottom: 6 }}>{it}</li>)}
                    </ul>
                  </td>
                ))}
              </tr>
              <tr>{d.columns.map((c) => <td key={c.name}>{c.note}</td>)}</tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function Deliverables() { return <DefList id="deliverables" d={DELIVERABLES} tint />; }

function SimpleTable({ id, d, tint }) {
  return (
    <section id={id} className={`nk2-sec ${tint ? 'nk2-sec-tint' : 'nk2-sec-white'}`}>
      <div className="nk-container">
        <Head d={d} />
        <p className="nk2-lede" style={{ marginBottom: 24 }}>{d.intro}</p>
        <div className="nk4-table-wrap">
          <table className="nk4-table">
            <thead><tr>{d.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
            <tbody>
              {d.rows.map((r) => (
                <tr key={r[0]}><th scope="row">{r[0]}</th>{r.slice(1).map((c) => <td key={c}>{c}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
        {d.close ? <p className="nk3-close" style={{ marginTop: 24 }}>{d.close}</p> : null}
      </div>
    </section>
  );
}

export function Accountability() { return <SimpleTable id="accountability" d={ACCOUNTABILITY} tint />; }
export function MandateSchedule() { return <DefList id="mandate-schedule" d={MANDATE_SCHEDULE} />; }
export function TransactionClassification() { return <DefList id="transaction-classification" d={TXN_CLASS} tint />; }
export function Transition() { return <SimpleTable id="transition" d={TRANSITION} />; }
export function Acceptance() { return <DefList id="acceptance" d={ACCEPTANCE} tint />; }

export function Lifecycle() {
  const d = LIFECYCLE;
  return (
    <section id="lifecycle" className="nk2-sec nk2-sec-white">
      <div className="nk-container">
        <Head d={d} />
        <p className="nk2-lede" style={{ marginBottom: 14 }}>{d.intro}</p>
        <ol className="nk3-pillars" style={{ marginTop: 28 }}>
          {d.stages.map((s) => (
            <li key={s.n} className="nk3-pillar">
              <span className="nk3-pillar-num">{s.n}</span>
              <div><h3 className="nk3-pillar-title">{s.title}</h3><p>{s.desc}</p></div>
            </li>
          ))}
        </ol>
        <p className="nk3-close" style={{ marginTop: 28 }}>{d.close}</p>
      </div>
    </section>
  );
}

export function Commercial() {
  const d = COMMERCIAL;
  return (
    <section id="commercial-model" className="nk2-sec nk2-sec-tint">
      <div className="nk-container">
        <div className="nk2-split">
          <div>
            <div className="nk2-eyebrow">{d.eyebrow}</div>
            <h2 className="nk2-h2">{d.title}</h2>
          </div>
          <div>
            {d.paragraphs.map((t) => <p key={t.slice(0, 24)} className="nk2-lede" style={{ marginBottom: 18 }}>{t}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function GoverningStandard() {
  const d = FINAL_PRINCIPLE;
  return (
    <section id="governing-standard" className="nk2-sec nk2-sec-white">
      <div className="nk-container">
        <div className="nk2-split">
          <div>
            <div className="nk2-eyebrow">{d.eyebrow}</div>
            <h2 className="nk2-h2">{d.title}</h2>
          </div>
          <div>
            <blockquote className="nk3-principle">{d.quote}</blockquote>
            <p className="nk2-lede" style={{ marginTop: 18 }}>{d.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- v286 additions: Comprehensive Scope of Activities ----------------------

export function ScopeMap() {
  return (
    <>
      <DefList id="scope-of-activities" d={SCOPE_INTRO} />
      <DefList id="scope-consultancy" d={CONSULT_SCOPE} tint />
      <DefList id="scope-management" d={MGMT_SCOPE} />
      <DefList id="scope-management-limits" d={NOT_ASSUMED_MGMT} tint />
      <DefList id="scope-brokerage" d={BROKER_SCOPE} />
      <SimpleTable id="scope-transactions" d={TXN_SCOPE} tint />
      <DefList id="brokerage-fees" d={FEES} />
      <DefList id="client-journeys" d={JOURNEYS} tint />
      <SimpleTable id="not-assumed" d={NOT_ASSUMED} />
      <DefList id="licensing-checklist" d={CHECKLIST} tint />
    </>
  );
}

// ---- v287: full service lists -------------------------------------------------
export function ScopeDetailFull() {
  return (
    <>
      {SCOPE_DETAIL.map((p, i) => (
        <section key={p.id} id={`scope-full-${p.id}`} className={`nk2-sec ${i % 2 ? 'nk2-sec-tint' : 'nk2-sec-white'}`}>
          <div className="nk-container">
            <div className="nk2-eyebrow">Full scope map · proposed reference {p.ref}</div>
            <h2 className="nk2-h2">{p.name}</h2>
            <p className="nk2-lede" style={{ margin: '14px 0 28px' }}>{p.blurb}</p>
            {p.groups.map((g) => (
              <details key={g.t} className="nk5-detail" style={{ borderTop: '1px solid rgba(0,0,0,.14)', padding: '14px 0' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 600, fontSize: 17 }}>{g.t}</summary>
                <ul style={{ margin: '14px 0 0', paddingLeft: 20, columns: '2 320px', columnGap: 40 }}>
                  {g.b.map((x) => <li key={x} style={{ marginBottom: 6, breakInside: 'avoid' }}>{x}</li>)}
                </ul>
                {g.n ? <p className="nk3-close" style={{ marginTop: 14 }}>{g.n}</p> : null}
              </details>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
