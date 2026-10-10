import React from 'react';
import { INSIGHT_CARDS } from '../mock';

// "Latest" strip: three headlines under one hairline, nothing else.
export default function InsightsBar() {
  return (
    <section className="nk2-latest" aria-label="Latest">
      <div className="nk-container">
        <div className="nk2-latest-grid">
          {INSIGHT_CARDS.map((c, idx) => (
            <a href="#" key={idx} className="nk2-latest-item">
              <div className="nk2-eyebrow nk2-eyebrow-light">{c.tag}</div>
              <h3 className="nk2-latest-title">{c.title}</h3>
              <div className="nk2-date">{c.date}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
