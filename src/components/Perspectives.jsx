import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FEATURED_PERSPECTIVES } from '../mock';

// One lead story, two supporting stories. Large image, short copy, clear hierarchy.
export default function Perspectives() {
  const [lead, ...rest] = FEATURED_PERSPECTIVES;
  return (
    <section className="nk2-sec nk2-sec-tint">
      <div className="nk-container">
        <div className="nk2-sec-head">
          <div>
            <div className="nk2-eyebrow">Featured perspectives</div>
            <h2 className="nk2-h2">Ideas shaping how capital, institutions and markets move next.</h2>
          </div>
          <a href="#" className="nk2-link">All perspectives <ArrowRight size={16} aria-hidden="true" /></a>
        </div>

        {lead && (
          <a href="#" className="nk2-lead">
            <div className="nk2-lead-img"><img src={lead.image} alt="" loading="lazy" /></div>
            <div className="nk2-lead-copy">
              <div className="nk2-meta"><span className="nk2-eyebrow">{lead.category}</span><span className="nk2-date">{lead.date}</span></div>
              <h3 className="nk2-lead-title">{lead.title}</h3>
              <p>{lead.excerpt}</p>
              <span className="nk2-link">Continue reading <ArrowRight size={16} aria-hidden="true" /></span>
            </div>
          </a>
        )}

        <div className="nk2-stories">
          {rest.map((p) => (
            <a key={p.title} href="#" className="nk2-story">
              <div className="nk2-story-img"><img src={p.image} alt="" loading="lazy" /></div>
              <div className="nk2-meta"><span className="nk2-eyebrow">{p.category}</span><span className="nk2-date">{p.date}</span></div>
              <h3 className="nk2-story-title">{p.title}</h3>
              <p>{p.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
