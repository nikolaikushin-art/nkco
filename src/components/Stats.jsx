import React from 'react';
import { STATS } from '../mock';

// The firm in four lines: large display type on ink, separated by hairlines only.
export default function Stats() {
  return (
    <section className="nk2-sec nk2-sec-ink">
      <div className="nk-container">
        <div className="nk2-eyebrow nk2-eyebrow-light">The firm</div>
        <h2 className="nk2-h2 nk2-on-ink">A partnership built to serve institutions that plan in decades, not quarters.</h2>
        <dl className="nk2-facts">
          {STATS.map((s) => (
            <div key={s.label} className="nk2-fact">
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
