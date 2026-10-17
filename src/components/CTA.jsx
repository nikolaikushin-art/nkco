import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="nk2-sec nk2-sec-white nk2-cta">
      <div className="nk-container nk2-cta-grid">
        <div>
          <h2 className="nk2-h2">Begin with a defined requirement.</h2>
          <p className="nk2-lede">
            Engagements are established on the basis of a defined commercial requirement, an agreed scope of work and a clear understanding of the responsibilities of each party.
          </p>
        </div>
        <a href="mailto:info@nkco.ae?subject=NK%26CO%20Enquiry" className="nk2-btn">
          <span>Contact NK&amp;CO</span>
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
