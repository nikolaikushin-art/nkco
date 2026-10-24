import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  HOME_PROFILE, HOME_PRACTICES, HOME_BOUNDARIES, HOME_METHOD, HOME_ENGAGEMENT, HOME_PERSPECTIVES, HOME_STANDARD, HOME_CONTACT,
} from '../data/homeData';

// v571 · Home sections. Seven sections replace the twenty-five stacked text blocks; each one has its own layout
// (chain, tabbed panel, ledger, path, sheet, statement band, steps). Palette and type are the hero's: pearl, ink, slate, Cormorant + Inter.
// All copy comes from data/institutional*.js through data/homeData.js.

// Adds .is-in once the element is on screen (or straight away for reduced motion / no IntersectionObserver).
function useReveal() {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') { setOn(true); return undefined; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, on];
}

function TextLink({ to, children, light }) {
  return (
    <Link to={to} className={`hm-link${light ? ' is-light' : ''}`}>
      <span>{children}</span>
      <ArrowRight size={15} aria-hidden="true" />
    </Link>
  );
}

/* 1 · Profile: a statement, then the four things every engagement is read through ------------------------- */
export function HomeProfile() {
  const d = HOME_PROFILE;
  const [ref, on] = useReveal();
  return (
    <section id="profile" className="hm hm-profile" aria-labelledby="hm-profile-h">
      <div className="nk-container">
        <div className="hm-profile-top">
          <div>
            <p className="hm-label">{d.label}</p>
            <h2 id="hm-profile-h" className="hm-display">{d.title}</h2>
          </div>
          <div className="hm-profile-side">
            <p className="hm-lede">{d.lede}</p>
            <p className="hm-body">{d.body}</p>
            <TextLink to={d.to}>{d.linkLabel}</TextLink>
          </div>
        </div>
        <figure className="hm-banner">
          <img src={d.banner.image} alt={d.banner.alt} loading="lazy" />
          <figcaption className="hm-banner-plate">
            <p>{d.banner.caption}</p>
            <ul>
              {d.banner.facts.map(([n, t]) => <li key={n}><b>{n}</b><span>{t}</span></li>)}
            </ul>
          </figcaption>
        </figure>
        <div ref={ref} className={`hm-chain${on ? ' is-in' : ''}`}>
          <p className="hm-chain-lead">{d.chainLead}</p>
          <ol className="hm-chain-list">
            {d.chain.map((c, i) => (
              <li key={c.t} className="hm-chain-node" style={{ '--i': i }}>
                <span className="hm-chain-dot" aria-hidden="true" />
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* 2 · Practices: one dark panel, three tabs ------------------------------------------------------------------ */
export function HomePractices() {
  const d = HOME_PRACTICES;
  const [a, setA] = useState(0);
  const tabs = useRef([]);
  const onKey = (e) => {
    const n = d.items.length;
    let k = null;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') k = (a + 1) % n;
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') k = (a + n - 1) % n;
    else if (e.key === 'Home') k = 0;
    else if (e.key === 'End') k = n - 1;
    if (k === null) return;
    e.preventDefault();
    setA(k);
    if (tabs.current[k]) tabs.current[k].focus();
  };
  return (
    <section id="practices" className="hm hm-practices" aria-labelledby="hm-practices-h">
      <div className="nk-container">
        <div className="hm-head">
          <h2 id="hm-practices-h" className="hm-display">{d.title}</h2>
          <p className="hm-lede">{d.intro}</p>
        </div>
        <div className="hm-panel">
          <div className="hm-tabs" role="tablist" aria-label="NK&CO practices" aria-orientation="vertical" onKeyDown={onKey}>
            {d.items.map((p, i) => (
              <button
                key={p.id}
                ref={(el) => { tabs.current[i] = el; }}
                type="button"
                role="tab"
                id={`hm-tab-${p.id}`}
                aria-selected={a === i}
                aria-controls={`hm-pane-${p.id}`}
                tabIndex={a === i ? 0 : -1}
                className={`hm-tab${a === i ? ' is-on' : ''}`}
                onClick={() => setA(i)}
              >
                <span className="hm-tab-name">{p.name}</span>
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            ))}
          </div>
          <div className="hm-media" aria-hidden="true">
            {d.items.map((p, i) => <img key={p.id} src={p.image} alt="" loading={i === 0 ? 'eager' : 'lazy'} className={a === i ? 'is-on' : ''} />)}
            <span className="hm-media-cap">{d.items[a].lines.map((l) => <span key={l}>{l}</span>)}</span>
          </div>
          <div className="hm-panes">
            {d.items.map((p, i) => (
              <div key={p.id} id={`hm-pane-${p.id}`} role="tabpanel" aria-labelledby={`hm-tab-${p.id}`} className={`hm-pane${a === i ? ' is-on' : ''}`}>
                <p className="hm-pane-lede">{p.lede}</p>
                <dl className="hm-facts">
                  {p.facts.map(([k, v]) => (
                    <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                  ))}
                </dl>
                <ul className="hm-services">
                  {p.services.map(([label, to]) => <li key={to}><Link to={to} tabIndex={a === i ? 0 : -1}>{label}</Link></li>)}
                </ul>
                <Link to={p.to} className="hm-pane-go" tabIndex={a === i ? 0 : -1}>Explore {p.name}<ArrowRight size={16} aria-hidden="true" /></Link>
              </div>
            ))}
          </div>
        </div>
        <p className="hm-note">{d.close}</p>
      </div>
    </section>
  );
}

/* 3 · Boundaries: licensed basis on the left, what is confirmed separately on the right ------------------------ */
export function HomeBoundaries() {
  const d = HOME_BOUNDARIES;
  return (
    <section id="scope-of-practice" className="hm hm-bounds" aria-labelledby="hm-bounds-h">
      <div className="nk-container">
        <div className="hm-head">
          <h2 id="hm-bounds-h" className="hm-display">{d.title}</h2>
          <p className="hm-lede">{d.intro}</p>
        </div>
        <div className="hm-ledger">
          <div className="hm-ledger-l">
            <h3 className="hm-col-title">{d.basisLabel}</h3>
            <ul className="hm-basis">
              {d.basis.map((b) => (
                <li key={b.code}>
                  <span className="hm-basis-name">{b.practice}</span>
                  <span className="hm-basis-code">{b.code}</span>
                  <span className="hm-basis-word">{b.wording}</span>
                </li>
              ))}
            </ul>
            <p className="hm-note">{d.basisNote}</p>
          </div>
          <div className="hm-ledger-r">
            <h3 className="hm-col-title">{d.registerLabel}</h3>
            <div className="hm-groups">
              {d.groups.map((g) => (
                <div key={g.t} className="hm-group">
                  <h4>{g.t}<span>{g.k.length}</span></h4>
                  <ul>
                    {g.k.map((k) => {
                      const it = d.register.find((r) => r[0] === k);
                      return <li key={k}><strong>{it[0]}</strong><span>{it[1]}</span></li>;
                    })}
                  </ul>
                </div>
              ))}
            </div>
            <p className="hm-note">{d.registerNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 4 · Method: a real sequence, so the numbering stays --------------------------------------------------------- */
export function HomeMethod() {
  const d = HOME_METHOD;
  const [ref, on] = useReveal();
  return (
    <section id="approach" className="hm hm-method" aria-labelledby="hm-method-h">
      <div className="nk-container">
        <div className="hm-head">
          <h2 id="hm-method-h" className="hm-display">{d.title}</h2>
          <p className="hm-lede">{d.intro}</p>
        </div>
        <figure className="hm-method-fig"><img src={d.image} alt={d.imageAlt} loading="lazy" /></figure>
        <ol ref={ref} className={`hm-path${on ? ' is-in' : ''}`}>
          {d.stages.map((s, i) => (
            <li key={s.n} className="hm-stage" style={{ '--i': i }}>
              <span className="hm-stage-n">{s.n}</span>
              <span className="hm-stage-dot" aria-hidden="true" />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="hm-stage-out"><i>Typical output</i>{s.out}</span>
            </li>
          ))}
        </ol>
        <div className="hm-method-foot">
          <p className="hm-note">{d.close}</p>
          <TextLink to={d.to}>{d.linkLabel}</TextLink>
        </div>
      </div>
    </section>
  );
}

/* 5 · Engagement letter: the twelve things recorded before work begins -------------------------------------- */
export function HomeEngagement() {
  const d = HOME_ENGAGEMENT;
  return (
    <section id="governance" className="hm hm-engage" aria-labelledby="hm-engage-h">
      <div className="nk-container hm-engage-grid">
        <div className="hm-engage-copy">
          <h2 id="hm-engage-h" className="hm-display hm-display-m">{d.title}</h2>
          <p className="hm-lede">{d.intro}</p>
          <p className="hm-promise">{d.promise}</p>
        </div>
        <div className="hm-sheet">
          <div className="hm-sheet-top">
            <h3>{d.sheetTitle}</h3>
            <span>{d.sheetNote}</span>
          </div>
          <ul className="hm-clauses">
            {d.clauses.map(([t, x]) => (
              <li key={t}><strong>{t}</strong><span>{x}</span></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="nk-container hm-docs">
        <div className="hm-docs-head">
          <h3 className="hm-display hm-display-s">{d.deliverablesTitle}</h3>
          <p className="hm-note">{d.deliverablesNote}</p>
        </div>
        <ul className="hm-docs-row" aria-label="Deliverables">
          {d.deliverables.map(([t, x], i) => (
            <li key={t} className="hm-doc" tabIndex={0}>
              <span className="hm-doc-top"><i>NK&amp;CO</i><i>{String(i + 1).padStart(2, '0')}</i></span>
              <b>{t}</b>
              <span>{x}</span>
              <em aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HomePerspectives() {
  const d = HOME_PERSPECTIVES;
  const f = d.feature;
  return (
    <section id="perspectives" className="hm hm-persp" aria-labelledby="hm-persp-h">
      <div className="nk-container">
        <div className="hm-head">
          <h2 id="hm-persp-h" className="hm-display">{d.title}</h2>
          <p className="hm-lede">{d.intro}</p>
        </div>
        <div className="hm-persp-grid">
          <Link to={f.to} className="hm-feature">
            <img src={f.image} alt={f.alt} loading="lazy" />
            <span className="hm-feature-body">
              <span className="hm-tag">{f.kind} · {f.series}</span>
              <span className="hm-feature-title">{f.title}</span>
              <span className="hm-feature-meta">{f.meta}<b>{f.cta}<ArrowRight size={16} aria-hidden="true" /></b></span>
            </span>
          </Link>
          {d.side.map((c) => (
            <Link key={c.title} to={c.to} className="hm-card">
              <img src={c.image} alt={c.alt} loading="lazy" />
              <span className="hm-tag">{c.kind}</span>
              <span className="hm-card-title">{c.title}</span>
              <span className="hm-card-text">{c.text}</span>
              <span className="hm-card-go">Open<ArrowRight size={15} aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 6 · Governing standard: one sentence, set large ---------------------------------------------------------- */
export function HomeStandard() {
  const d = HOME_STANDARD;
  return (
    <section id="governing-standard" className="hm hm-standard" aria-labelledby="hm-standard-h">
      <img className="hm-standard-bg" src={d.image} alt="" loading="lazy" />
      <div className="nk-container hm-standard-in">
        <p className="hm-label">{d.label}</p>
        <h2 id="hm-standard-h" className="hm-quote">{d.quote}</h2>
        <p className="hm-standard-body">{d.body}</p>
        <ul className="hm-principles">
          {d.principles.map((p) => (
            <li key={p.t}><h3>{p.t}</h3><p>{p.d}</p></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* 7 · Contact ----------------------------------------------------------------------------------------------- */
export function HomeContact() {
  const d = HOME_CONTACT;
  return (
    <section id="contact" className="hm hm-contact" aria-labelledby="hm-contact-h">
      <div className="nk-container hm-contact-grid">
        <div>
          <h2 id="hm-contact-h" className="hm-display">{d.title}</h2>
          <p className="hm-lede">{d.lede}</p>
          <a href={d.href} className="hm-btn">{d.button}<ArrowRight size={18} aria-hidden="true" /></a>
          <p className="hm-mail">{d.email}</p>
        </div>
        <div className="hm-contact-visual">
          <img src={d.image} alt={d.alt} loading="lazy" />
          <ol className="hm-steps">
          {d.steps.map((s, i) => (
            <li key={s.t}>
              <span className="hm-step-n">{String(i + 1).padStart(2, '0')}</span>
              <div><h3>{s.t}</h3><p>{s.d}</p></div>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
