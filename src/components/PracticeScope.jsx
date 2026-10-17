// v288 — document-derived scope on every Overview > Our Practices page.
import React from 'react';
import { SCOPE_DETAIL, LEAF_GROUPS, PRACTICE_MEANING, PRACTICE_REF } from '../data/scopeDetail';
import { TXN_SCOPE, NOT_ASSUMED } from '../data/institutional3';

function Table({ d }) {
  return (
    <div className="nk4-table-wrap" style={{ margin: '14px 0 26px' }}>
      <table className="nk4-table">
        <thead><tr>{d.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
        <tbody>{d.rows.map((r) => <tr key={r[0]}><th scope="row">{r[0]}</th><td>{r[1]}</td></tr>)}</tbody>
      </table>
    </div>
  );
}

function Group({ g, open }) {
  return (
    <details open={open} style={{ borderTop: '1px solid rgba(0,0,0,.14)', padding: '14px 0' }}>
      <summary style={{ cursor: 'pointer', fontWeight: 600, fontSize: 17 }}>{g.t}</summary>
      <ul style={{ margin: '14px 0 0', paddingLeft: 20, columns: '2 320px', columnGap: 40 }}>
        {g.b.map((x) => <li key={x} style={{ marginBottom: 6, breakInside: 'avoid' }}>{x}</li>)}
      </ul>
      {g.n ? <p className="nk3-close" style={{ marginTop: 14 }}>{g.n}</p> : null}
    </details>
  );
}

export default function PracticeScope({ item, child }) {
  const ref = PRACTICE_REF[item];
  if (!ref) return null;
  const practice = SCOPE_DETAIL.find((p) => p.id === ref[0]);
  const leafGroups = child ? (LEAF_GROUPS[item] || {})[child] : null;
  const isLeaf = !!child && leafGroups !== undefined;
  const groups = isLeaf ? leafGroups : practice.groups;
  const meaning = PRACTICE_MEANING[item];
  const brokerBoundary = item === 'business-brokerage' && (!child || child === 'regulatory-boundaries');
  return (
    <section id="practice-scope" className="nk2-sec nk2-sec-white" aria-label="Scope of services">
      <div className="nk-container">
        <div className="nk2-eyebrow">{practice.name} · proposed reference {ref[1]}</div>
        <h2 className="nk2-h2">{isLeaf ? 'Scope of services' : 'Full scope of services'}</h2>
        <p className="nk2-lede" style={{ margin: '14px 0 24px' }}>
          {isLeaf ? 'Potential services within this area, subject to the approved activity scope and the written mandate of each engagement.' : practice.blurb}
        </p>
        {groups.map((g) => <Group key={g.t} g={g} open={isLeaf} />)}
        {brokerBoundary ? (
          <>
            <h3 style={{ fontWeight: 600, fontSize: 17, margin: '28px 0 0' }}>I. Transaction types that require particular care</h3>
            <Table d={TXN_SCOPE} />
            <p className="nk3-close">{TXN_SCOPE.intro}</p>
            <h3 style={{ fontWeight: 600, fontSize: 17, margin: '28px 0 0' }}>Services that should not be assumed to be included</h3>
            <Table d={NOT_ASSUMED} />
          </>
        ) : null}
        {!child && meaning ? (
          <div style={{ marginTop: 36 }}>
            <h3 style={{ fontWeight: 600, fontSize: 19 }}>{meaning.head}</h3>
            <p className="nk2-lede" style={{ margin: '10px 0' }}>{meaning.lead}</p>
            {meaning.list.length ? <ul style={{ paddingLeft: 20 }}>{meaning.list.map((q) => <li key={q} style={{ marginBottom: 4 }}>{q}</li>)}</ul> : null}
            <p className="nk3-close" style={{ marginTop: 12 }}>{meaning.close}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
