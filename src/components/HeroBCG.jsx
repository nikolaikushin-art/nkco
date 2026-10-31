import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Scene from './HeroDevices';

// BCG-style hero with an expanding panel row: the active activity opens wide (title + "Diagnose your Business"),
// the others fold into slim vertical strips. Hover, focus or tap a strip to open it.
const IMG = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=75`;
const P = '/overview/our-practices/';
const PANELS = [
  { tag: 'Methodology', desc: 'How every engagement runs: a structured assessment, a defined scope, a clear plan and a disciplined review, so decisions rest on evidence and delivery stays accountable.', title: 'A disciplined path from first assessment to review', to: '/overview/how-we-work/our-methodology', tone: 'a', image: IMG('photo-1554469384-e58fac16e23a'), alt: 'Client meeting' },
  { tag: 'Enterprise Management', desc: 'Day-to-day performance, governance, controls and reporting for your business, carried through to execution with a single accountable team.', title: 'Performance, control and reporting carried through to execution', to: P + 'enterprise-management', tone: 'b', image: IMG('photo-1603195827187-459ab02554a0'), alt: 'Business operations' },
  { tag: 'Advisory & Consultancy', desc: 'Business strategy, organisation, operating models and commercial performance, defined within a clear scope and delivered with independent judgement.', title: 'Strategy aligned with the operating model of the business', to: P + 'management-consultancy', tone: 'c', image: IMG('photo-1460472178825-e5240623afd5'), alt: 'Commercial office towers' },
  { tag: 'Business Brokerage', desc: 'Confidential sale and acquisition of established businesses, from valuation and preparation to buyer introductions, negotiation and completion.', title: 'The sale and acquisition of established businesses', to: P + 'business-brokerage', tone: 'd', image: IMG('photo-1589936009537-bda4341d578f'), alt: 'Deal negotiation' },
  { tag: 'Intelligence', desc: 'The NK&CO Briefing and Perspectives: market analysis, regulatory updates and practical insight for owners, investors and management teams.', title: 'NK&CO Briefing and Perspectives', to: '/intelligence/nk-co-briefing', tone: 'e', image: IMG('photo-1462396240927-52058a6a84ec'), alt: 'Briefing room' },
];

export default function HeroBCG() {
  const [active, setActive] = useState(2);
  const [paused, setPaused] = useState(false);
  // v595 · the slides change by themselves every 3 seconds; hovering / focusing the row pauses them
  useEffect(() => {
    if (paused) return undefined;
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const t = setTimeout(() => setActive((a) => (a + 1) % PANELS.length), 3000);
    return () => clearTimeout(t);
  }, [active, paused]);
  return (
    <section className="bcg-hero" aria-label="NK&CO activities">
      <h1 className="bcg-h1">Where Strategic Clarity Meets Practice</h1>
      <div className="bcg-row" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
        {PANELS.map((p, n) => (
          <article
            key={p.to}
            className={`bcg-panel${n === active ? ' is-active' : ''}`}
            data-tone={p.tone}
            onMouseEnter={() => setActive(n)}
            onFocus={() => setActive(n)}
            onClick={() => setActive(n)}
          >
            <img src={p.image} alt={p.alt} loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <Link to={p.to} className="bcg-stretch" aria-label={`${p.tag}: ${p.title}`} />
            <span className="bcg-vt" aria-hidden="true">{p.tag}</span>
            <Scene index={n} />
            <div className="bcg-cap">
              <span className="bcg-num">{String(n + 1).padStart(2, '0')} &nbsp;/&nbsp; {p.tag}</span>
              <strong>{p.title}</strong>
              <a href="#contact" className="bcg-diagnose">Diagnose your Business <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
