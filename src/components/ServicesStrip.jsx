import React from 'react';
import { SERVICES_STRIP } from '../mock';

// What we do: a big statement on the left, four plain columns of capability on the right.
export default function ServicesStrip() {
  return (
    <section className="nk2-sec nk2-sec-white">
      <div className="nk-container">
        <div className="nk2-split">
          <div>
            <div className="nk2-eyebrow">What we do</div>
            <h2 className="nk2-h2">Advisory that compounds across cycles, sectors and geographies.</h2>
          </div>
          <div className="nk2-cap-grid">
            {SERVICES_STRIP.map((s) => (
              <div key={s.number} className="nk2-cap">
                <h3 className="nk2-h3">{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
