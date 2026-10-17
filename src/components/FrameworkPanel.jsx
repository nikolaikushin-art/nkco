// v285 — scope and authority panel shown on every mega-menu page.
// Source: NK&CO Institutional Corporate Architecture & Professional Services Framework.
import React from 'react';
import { Link } from 'react-router-dom';

const P = {
  consultancy: {
    practice: 'Management Consultancy',
    ref: 'Advisory, analytical and organisational mandates (proposed catalogue reference 7020.04).',
    authority: 'Recommend, and where agreed, coordinate. Decisions remain with the client.',
    excluded: 'Company incorporation, corporate-secretarial and legal structuring, licensing processing, statutory accounting, audit, tax and other separately regulated services.',
  },
  enterprise: {
    practice: 'Enterprise Management',
    ref: 'Defined operational and management mandates (proposed catalogue reference 7010.96, Management Services).',
    authority: 'Coordinate or execute within a written responsibility schedule. Delegated decisions only by express delegation.',
    excluded: 'Holding client money, acting as statutory director, binding the client beyond written delegation, technical software engineering, cybersecurity, recruitment and employee leasing. Interim or outsourced management is offered only once the licensing authority confirms scope.',
  },
  brokerage: {
    practice: 'Business Brokerage',
    ref: 'Business-sale and acquisition intermediation (proposed catalogue reference 7490.02).',
    authority: 'Introduce, coordinate and administer the process within the mandate. No binding authority.',
    excluded: 'Real estate brokerage, securities and investment advice, capital raising, legal representation, valuation, tax advice and audit. Each transaction is classified before acceptance.',
  },
  information: {
    practice: 'Information, not advice',
    ref: 'Research, commentary and member material published by NK&CO.',
    authority: 'None. Nothing here is a mandate, a recommendation to transact or a regulated opinion.',
    excluded: 'Legal, tax, investment, valuation and statutory accounting advice. Information is not represented as independently verified unless stated.',
  },
};

const MAP = {
  capabilities: ['consultancy', 'Delivered through the Management Consultancy practice; execution of agreed functions moves to a separate Enterprise Management mandate.'],
  infrastructure: ['enterprise', 'Business-side coordination of CRM, ERP and workflow requirements; technical build is delivered by appointed specialists.'],
  opportunities: ['brokerage', 'Venture planning is consultancy; ownership transitions are brokerage. Real estate-related and investment transactions are not assumed to fall within the brokerage permission.'],
  intelligence: ['information', 'Published for general understanding.'],
  industries: ['consultancy', 'Sector context for consultancy and brokerage mandates. Real estate brokerage is not part of NK&CO\u2019s proposed business-brokerage activity.'],
  privileges: ['information', 'Member programmes and content are educational.'],
  expertise: ['consultancy', 'Practice areas are applied through the three NK&CO practices under a written mandate.'],
};

function pick(section, category, item) {
  if (section === 'overview') {
    const k = `${category || ''}/${item || ''}`;
    if (/enterprise-management/.test(k)) return ['enterprise', ''];
    if (/business-brokerage/.test(k)) return ['brokerage', ''];
    if (/management-consultancy/.test(k)) return ['consultancy', ''];
    return ['consultancy', 'Three practices, each with its own mandate, authority and boundary.'];
  }
  return MAP[section] || ['consultancy', ''];
}

export default function FrameworkPanel({ section, category, item }) {
  const [key, note] = pick(section, category, item);
  const d = P[key];
  return (
    <section id="scope-authority" className="nk2-sec nk2-sec-tint" aria-label="Scope and authority">
      <div className="nk-container">
        <div className="nk2-eyebrow">Practice, authority and scope</div>
        <div className="nk4-table-wrap" style={{ marginTop: 18 }}>
          <table className="nk4-table">
            <thead><tr><th scope="col">Practice</th><th scope="col">Authority</th><th scope="col">Not included</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>{d.practice}</strong><br />{d.ref}</td>
                <td>{d.authority}</td>
                <td>{d.excluded}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {note ? <p className="nk2-lede" style={{ marginTop: 18 }}>{note}</p> : null}
        <p className="nk3-close" style={{ marginTop: 14 }}>
          Services are delivered only within the approved licence scope and a written mandate. Enterprise Management and the precise scope of Business Brokerage remain proposed until confirmed in writing by the licensing authority.{' '}
          <Link to="/#accountability">Authority levels</Link> · <Link to="/#lifecycle">Engagement lifecycle</Link> · <Link to="/#scope-of-activities">Scope of activities</Link> · <Link to="/#licensing-register">Licensing questions</Link>
        </p>
      </div>
    </section>
  );
}
