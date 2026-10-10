import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="nk2-sec nk2-sec-white nk2-cta">
      <div className="nk-container nk2-cta-grid">
        <div>
          <h2 className="nk2-h2">Talk with a partner about your most consequential decisions.</h2>
          <p className="nk2-lede">
            From market entry to capital formation and complex transactions, we partner with clients where the stakes are highest.
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
