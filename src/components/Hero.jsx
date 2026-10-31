import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Pause } from 'lucide-react';
import { HERO } from '../mock';
import { openContact } from '../lib/openContact';

// v318: slide photos chosen by the client from the project photo library (src/data/photoLibrary.json). Swap an id here to change a slide's picture.
const LIB = (id, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

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
    eyebrow: 'Advisory & Consultancy',
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
    image: LIB('photo-1554224155-1696413565d3'), alt: 'Sales negotiator preparing a term sheet and closing strategy for the sale of a business',
  },
  {
    eyebrow: 'Methodology',
    title: 'A Disciplined Path|from First Assessment|through to Review',
    sub: 'A structured method applied in proportion to the scope|of each assignment, the agreed services and mandate.',
    cta: 'Read the methodology', to: '/overview/how-we-work/our-methodology',
    image: LIB('photo-1554469384-e58fac16e23a'), alt: 'Sales agent meeting client in modern property setting',
  },
];

// v546 · the hero picture is the three practices side by side (same three photos as the entry screen). Each panel opens its practice page.
const TRIPTYCH = [
  { name: 'Advisory & Consultancy', lines: ['Advisory &', 'Consultancy'], to: '/overview/our-practices/management-consultancy', image: LIB('photo-1460472178825-e5240623afd5', 1000), alt: 'Commercial office towers in a business district' },
  { name: 'Enterprise Management', lines: ['Enterprise', 'Management'], to: '/overview/our-practices/enterprise-management', image: LIB('photo-1603195827187-459ab02554a0', 1000), alt: 'Commercial Agency' },
  { name: 'Business Brokerage', lines: ['Business', 'Brokerage'], to: '/overview/our-practices/business-brokerage', image: LIB('photo-1589936009537-bda4341d578f', 1000), alt: 'Relocation Support · Recruitment Marketing' },
];

// v556 · band under the hero: the top services of each practice (the three photos above already name the practices), each linking to its own page.
const P = '/overview/our-practices/';
const TEASERS = [
  { eyebrow: 'Advisory & Consultancy', to: P + 'management-consultancy', services: [
    ['Strategy & Corporate Direction', P + 'management-consultancy/strategy-and-corporate-direction'],
    ['Operating Models & Processes', P + 'management-consultancy/operating-models-and-processes'],
    ['Transformation & Restructuring', P + 'management-consultancy/transformation-and-restructuring'],
  ] },
  { eyebrow: 'Enterprise Management', to: P + 'enterprise-management', services: [
    ['General Business Management', P + 'enterprise-management/general-business-management'],
    ['Financial Management & Control', P + 'enterprise-management/financial-management-and-control'],
    ['Executive Management & Reporting', P + 'enterprise-management/executive-management-and-owner-reporting'],
  ] },
  { eyebrow: 'Business Brokerage', to: P + 'business-brokerage', services: [
    ['Seller Representation', P + 'business-brokerage/seller-representation'],
    ['Buyer Identification', P + 'business-brokerage/buyer-identification'],
    ['Transaction Coordination', P + 'business-brokerage/transaction-coordination'],
  ] },
];


// Podcast player under the hero buttons. Latest NK&CO Perspectives episode.
// Set `audio` to a real file URL to make the player play in place; while it is empty the play button opens the episode page instead.
const PODCAST = {
  label: 'Podcast',
  series: 'NK&CO Perspectives',
  title: 'Entering the UAE in 90 days: the operator\u2019s blueprint',
  minutes: 42, // 42:08
  length: 42 * 60 + 8,
  resume: 9 * 60 + 12, // where the bar sits until real audio is attached
  audio: '',
  to: '/intelligence/nk-co-briefing',
  all: '/intelligence/podcasts-and-briefing',
};
const clock = (sec) => `${String(Math.floor(sec / 60)).padStart(2, '0')}:${String(Math.floor(sec % 60)).padStart(2, '0')}`;

// Cover: simple bar chart on a sky tone, same visual as the hero picture.
function PodcastCover() {
  const bars = [[2, 58], [20, 48], [38, 36], [56, 70], [74, 30], [92, 82], [110, 44], [128, 36], [146, 78], [164, 22]];
  return (
    <svg className="nk4-pod-cover" viewBox="0 0 182 150" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
      <rect width="182" height="150" fill="#9bbbe0" />
      <rect y="70" width="182" height="80" fill="#b4cce8" />
      {bars.map(([x, h], k) => <rect key={x} x={x} y={150 - h - 22} width="16" height={h + 22} fill={k % 3 === 0 ? '#464d55' : k % 3 === 1 ? '#7a828b' : '#5f666e'} />)}
    </svg>
  );
}

function HeroPlayer() {
  const audioRef = React.useRef(null);
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(PODCAST.audio ? 0 : PODCAST.resume);
  const [dur, setDur] = useState(PODCAST.length);
  const live = Boolean(PODCAST.audio);
  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) { a.play().catch(() => {}); } else { a.pause(); }
  };
  const seek = (e) => {
    const a = audioRef.current;
    if (!a || !dur) return;
    const r = e.currentTarget.getBoundingClientRect();
    a.currentTime = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * dur;
  };
  const pct = dur ? Math.min(100, (t / dur) * 100) : 0;

  return (
    <div className="nk4-pod" role="group" aria-label="Latest podcast episode">
      <div className="nk4-pod-top">
        <Link to={PODCAST.to} className="nk4-pod-thumb" aria-label={`Open: ${PODCAST.title}`} tabIndex={-1}><PodcastCover /></Link>
        <div className="nk4-pod-body">
          <div className="nk4-pod-kicker"><span>{PODCAST.label}</span><i aria-hidden="true">&middot;</i><span>{PODCAST.series}</span></div>
          <Link to={PODCAST.to} className="nk4-pod-title">{PODCAST.title}</Link>
          <div className="nk4-pod-meta">
            <span>{PODCAST.minutes} min</span><i aria-hidden="true">&middot;</i>
            <Link to={PODCAST.to}>Listen</Link><i aria-hidden="true">&middot;</i>
            <Link to={PODCAST.to}>Transcript</Link>
            <Link to={PODCAST.all} className="nk4-pod-all"><i className="nk4-pod-ln" aria-hidden="true" /><span>View all podcasts</span><b className="nk4-pod-ar" aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
      <div className="nk4-pod-bar">
        {live ? (
          <button type="button" className="nk4-pod-play" onClick={toggle} aria-label={playing ? 'Pause episode' : 'Play episode'}>
            {playing ? <Pause size={14} fill="currentColor" aria-hidden="true" /> : <Play size={14} fill="currentColor" aria-hidden="true" />}
          </button>
        ) : (
          <Link to={PODCAST.to} className="nk4-pod-play" aria-label="Play episode"><Play size={14} fill="currentColor" aria-hidden="true" /></Link>
        )}
        <span className="nk4-pod-time">{clock(t)}</span>
        <div className="nk4-pod-track" onClick={live ? seek : undefined} role={live ? 'slider' : undefined} aria-label={live ? 'Seek' : undefined} aria-valuemin={live ? 0 : undefined} aria-valuemax={live ? Math.round(dur) : undefined} aria-valuenow={live ? Math.round(t) : undefined}>
          <span className="nk4-pod-fill" style={{ width: `${pct}%` }} />
          <span className="nk4-pod-knob" style={{ left: `${pct}%` }} />
        </div>
        <span className="nk4-pod-time">{clock(dur)}</span>
        {live && (
          <audio ref={audioRef} src={PODCAST.audio} preload="none"
            onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
            onTimeUpdate={(e) => setT(e.currentTarget.currentTime)}
            onLoadedMetadata={(e) => setDur(e.currentTarget.duration || PODCAST.length)} />
        )}
      </div>
    </div>
  );
}

// v484 · The hero always fills the window exactly (no strip of the next section under the three boxes).
// Desktop / laptop (>= 1024px): the text, player and boxes are scaled (--hf) as large as the height allows (never wider than the width allows), found by a short
// bisection on the real layout, so it works at any window size or zoom. What is left over (a few px, or more in a tall narrow window) is written to --hf-rem:
// the picture takes all of it and the text block shares up to a third of it between the gaps (hero-fit.css). Below 1024px the stacked layout is left to CSS.
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
function fitHero(el) {
  el.style.removeProperty('--hf');
  el.style.removeProperty('--hf-rem');
  el.classList.remove('is-stack');
  if (window.innerWidth < 1024) return;
  const target = window.innerHeight;
  el.classList.add('is-fitting');
  const natural = (s) => { el.style.setProperty('--hf', `${s}px`); return el.getBoundingClientRect().height; };
  const best = () => {
    let lo = 0.4;
    let hi = Math.min(window.innerWidth / 1440, 4);
    let s;
    if (natural(hi) <= target) s = hi;
    else if (natural(lo) > target) s = lo;
    else {
      for (let n = 0; n < 24; n += 1) {
        const mid = (lo + hi) / 2;
        if (natural(mid) <= target) lo = mid; else hi = mid;
      }
      s = lo;
    }
    return { s, used: natural(s) };
  };
  let { s, used } = best();
  // Tall, narrow windows (iPad Pro portrait, 1280x1024 ...): two columns would leave the text floating in dead space beside a very tall picture,
  // so above 20% spare height the hero uses the stacked layout instead (picture on top taking the spare height, text + player below).
  if ((target - used) / target > 0.2) {
    el.classList.add('is-stack');
    ({ s, used } = best());
  }
  el.classList.remove('is-fitting');
  el.style.setProperty('--hf-rem', el.classList.contains('is-stack') ? '0px' : `${Math.max(0, Math.floor(target - used))}px`);
}

export default function Hero() {
  const heroRef = useRef(null);
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = SLIDES[i];

  useEffect(() => {
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (paused || reduce) return undefined;
    const t = setTimeout(() => setI((n) => (n + 1) % SLIDES.length), 8000);
    return () => clearTimeout(t);
  }, [i, paused]);

  useIsoLayoutEffect(() => {
    const el = heroRef.current;
    if (!el) return undefined;
    let raf = 0;
    const run = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => fitHero(el)); };
    fitHero(el);
    window.addEventListener('resize', run);
    window.addEventListener('orientationchange', run);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(run);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', run); window.removeEventListener('orientationchange', run); };
  }, []);
  useIsoLayoutEffect(() => { if (heroRef.current) fitHero(heroRef.current); }, [i]);

  return (
    <section
      ref={heroRef}
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
          <div className="nk2-hero-frame nk4-frame nk4-frame-tri">
            <div className="nk4-tri">
              {TRIPTYCH.map((t, n) => (
                <Link key={t.to} to={t.to} className="nk4-tri-p">
                  <img src={t.image} alt={t.alt} loading={n < 2 ? 'eager' : 'lazy'} />
                  <span className="nk4-tri-cap">
                    <span className="nk4-tri-name" aria-label={t.name}>{t.lines.map((ln) => <span key={ln} className="nk4-tri-ln" aria-hidden="true">{ln}</span>)}</span>
                    <span className="nk4-tri-go">Explore <ArrowRight size={12} aria-hidden="true" /></span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </figure>
        <div className="nk4-copy" aria-live={paused ? 'polite' : 'off'}>
          <div key={i} className="nk4-slide">
            <div className="nk4-eyebrow">{slide.eyebrow}</div>
            <h1 className="nk4-h1" aria-label={slide.title.replace(/\|/g, ' ')}>{slide.title.split('|').map((ln, k) => <React.Fragment key={k}><span className="nk4-ln" aria-hidden="true">{ln}</span>{' '}</React.Fragment>)}</h1>
            <p className="nk4-sub" aria-label={slide.sub.replace(/\|/g, ' ')}>{slide.sub.split('|').map((ln, k) => <React.Fragment key={k}><span className="nk4-ln" aria-hidden="true">{ln}</span>{' '}</React.Fragment>)}</p>
            <div className="nk4-actions">
              <Link to={slide.to} className="nk4-read">{slide.cta}</Link>
              <a href="mailto:info@nkco.ae?subject=NK%26CO%20Enquiry" onClick={openContact} className="nk4-strap-btn">{HERO.cta} <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
          <HeroPlayer />
        </div>
      </div>
      <div className="nk4-teasers">
        <div className="nk-container nk4-teasers-grid">
          {TEASERS.map((t) => (
            <div key={t.to} className="nk4-teaser">
              <span className="nk4-teaser-eyebrow">{t.eyebrow}</span>
              <ul className="nk4-teaser-list">
                {t.services.map(([label, href]) => (
                  <li key={href}><Link to={href} className="nk4-teaser-svc">{label}</Link></li>
                ))}
              </ul>
              <Link to={t.to} className="nk4-teaser-link" aria-label={`Explore ${t.eyebrow}`}>Explore <ArrowRight size={11} aria-hidden="true" /></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

