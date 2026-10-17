import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HERO } from '../mock';

// Page rail: in-page navigation laid over the top of the hero image. Active item follows the scroll position.
const RAIL = [
  { id: 'profile', label: 'Profile' },
  { id: 'management-consultancy', label: 'Consultancy' },
  { id: 'enterprise-management', label: 'Services' },
  { id: 'business-brokerage', label: 'Brokerage' },
  { id: 'approach', label: 'Approach' },
  { id: 'the-firm', label: 'The Firm' },
  { id: 'briefing', label: 'Briefing', to: '/intelligence/nk-co-briefing' }, // the NK&CO Briefing podcast (Contact Us is already in the header)
];

function PageRail() {
  const [active, setActive] = useState(RAIL[0].id);
  const navigate = useNavigate();

  useEffect(() => {
    const els = RAIL.filter((r) => !r.to).map((r) => document.getElementById(r.id)).filter(Boolean);
    if (!els.length || typeof IntersectionObserver === 'undefined') return undefined;
    // the section that crosses the upper third of the viewport is the current one
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const go = (e, id, to) => {
    if (to) { e.preventDefault(); navigate(to); return; }
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActive(id);
  };

  return (
    <aside className="nk2-rail" aria-label="Page rail navigation">
      <nav>
        {RAIL.map((r) => (
          <a key={r.id} href={r.to || `#${r.id}`} onClick={(e) => go(e, r.id, r.to)} className={active === r.id ? 'is-active' : ''} aria-current={active === r.id ? 'true' : undefined}>
            {r.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

// v318: slide photos chosen by the client from the project photo library (src/data/photoLibrary.json). Swap an id here to change a slide's picture.
const LIB = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=75`;

// Featured-story hero (v282): a large image beside an eyebrow, a serif headline, one supporting line and one link.
// Four slides, each a real page of the site. Cross-fades; pauses on hover/focus and when the visitor prefers reduced motion.
const SLIDES = [
  {
    eyebrow: 'NK&CO \u00b7 Corporate Profile',
    title: 'An Independent|Advisory Firm for the|Enterprise as a Whole',
    sub: 'Strategy, organisation, performance and ownership,|considered together through clearly defined mandates.',
    cta: 'Read the corporate profile', to: '/overview/the-firm/corporate-profile',
    image: LIB('photo-1496307653780-42ee777d4833'), alt: 'Commercial office district with modern high-rise buildings',
  },
  {
    eyebrow: 'Management Consultancy',
    title: 'Strategy Aligned|with the Operating|Model of the Business',
    sub: 'Business strategy, organisation, operating models|and commercial performance within a defined scope.',
    cta: 'Explore the practice', to: '/overview/our-practices/management-consultancy',
    image: LIB('photo-1462396240927-52058a6a84ec'), alt: 'High-end office interior and conference room for strategy decisions',
  },
  {
    eyebrow: 'Enterprise Management',
    title: 'Discipline to Carry|Priorities Through to|Execution in Practice',
    sub: 'Implementation, performance control and reporting,|carried out within an agreed scope of work and mandate.',
    cta: 'Explore the practice', to: '/overview/our-practices/enterprise-management',
    image: LIB('photo-1556761175-b413da4baf72'), alt: 'Corporate & Commercial Real Estate',
  },
  {
    eyebrow: 'Business Brokerage',
    title: 'The Sale and|Acquisition of Eligible|Established Businesses',
    sub: 'Sell-side and buy-side assignments for established|businesses, conducted under a clear written mandate.',
    cta: 'Explore the practice', to: '/overview/our-practices/business-brokerage',
    image: LIB('photo-1460472178825-e5240623afd5'), alt: 'Architectural detail and structural lines reflecting analytical leadership assessment',
  },
  {
    eyebrow: 'Methodology',
    title: 'A Disciplined Path|from First Assessment|through to Review',
    sub: 'A structured method applied in proportion to the scope|of each assignment, the agreed services and mandate.',
    cta: 'Read the methodology', to: '/overview/how-we-work/our-methodology',
    image: LIB('photo-1554469384-e58fac16e23a'), alt: 'Sales agent meeting client in modern property setting',
  },
];

// Three teasers under the hero (CBRE-style band): the three practices.
const TEASERS = [
  { eyebrow: 'Management Consultancy', title: 'Strategy aligned with the operating model of the enterprise', to: '/overview/our-practices/management-consultancy' },
  { eyebrow: 'Enterprise Management', title: 'Discipline to carry priorities through to execution', to: '/overview/our-practices/enterprise-management' },
  { eyebrow: 'Business Brokerage', title: 'The sale and acquisition of established businesses', to: '/overview/our-practices/business-brokerage' },
];

export default function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = SLIDES[i];

  useEffect(() => {
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (paused || reduce) return undefined;
    const t = setTimeout(() => setI((n) => (n + 1) % SLIDES.length), 8000);
    return () => clearTimeout(t);
  }, [i, paused]);

  return (
    <section
      className="nk4-hero"
      aria-roledescription="carousel"
      aria-label="NK&CO featured pages"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="nk-container nk4-grid">
        <figure className="nk4-media">
          <div className="nk2-hero-frame nk4-frame">
            {SLIDES.map((sl, n) => (
              <img
                key={sl.eyebrow}
                src={sl.image}
                alt={n === i ? sl.alt : ''}
                aria-hidden={n === i ? undefined : 'true'}
                className={n === i ? 'is-on' : ''}
                loading={n === 0 ? 'eager' : 'lazy'}
              />
            ))}
            <PageRail />
          </div>
        </figure>
        <div className="nk4-copy" aria-live={paused ? 'polite' : 'off'}>
          <div key={i} className="nk4-slide">
            <div className="nk4-eyebrow">{slide.eyebrow}</div>
            <h1 className="nk4-h1" aria-label={slide.title.replace(/\|/g, ' ')}>{slide.title.split('|').map((ln, k) => <React.Fragment key={k}><span className="nk4-ln" aria-hidden="true">{ln}</span>{' '}</React.Fragment>)}</h1>
            <p className="nk4-sub" aria-label={slide.sub.replace(/\|/g, ' ')}>{slide.sub.split('|').map((ln, k) => <React.Fragment key={k}><span className="nk4-ln" aria-hidden="true">{ln}</span>{' '}</React.Fragment>)}</p>
            <div className="nk4-actions">
              <Link to={slide.to} className="nk4-read">{slide.cta}</Link>
              <a href="#contact" className="nk4-strap-btn">{HERO.cta} <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="nk4-dots" role="group" aria-label="Choose a featured page">
            {SLIDES.map((sl, n) => (
              <button key={sl.eyebrow} type="button" className={n === i ? 'is-on' : ''} aria-label={`${n + 1} of ${SLIDES.length}: ${sl.eyebrow}`} aria-current={n === i ? 'true' : undefined} onClick={() => setI(n)} />
            ))}
          </div>
        </div>
      </div>
      <div className="nk4-teasers">
        <div className="nk-container nk4-teasers-grid">
          {TEASERS.map((t) => (
            <Link key={t.to} to={t.to} className="nk4-teaser">
              <span className="nk4-teaser-eyebrow">{t.eyebrow}</span>
              <span className="nk4-teaser-title">{t.title}</span>
              <span className="nk4-teaser-link">Explore <ArrowRight size={11} aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
