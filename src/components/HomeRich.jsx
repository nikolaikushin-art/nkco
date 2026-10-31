import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Play, Plus } from 'lucide-react';
import {
  EXPLORE, SITE_TOTALS, OMS, SPOTLIGHT, INSIGHTS, CODES, FEE_PARTS, SEPARATION, STRAPLINE, DELIVERABLES,
  HOME_PRACTICES, HOME_BOUNDARIES, HOME_METHOD, HOME_ENGAGEMENT, HOME_STANDARD, HOME_CONTACT, HOME_PROFILE, LICENCE_REGISTER,
} from '../data/homeRich';

// v573 · Rich home sections. Eleven sections, each with its own structure, square-edged, in the hero palette:
// pearl #fffffd · ink #16171a · slate #32353a · night #1d1f22 · tint #f5f5f7 · hairline #c4c8ce. Cormorant Garamond + Inter.
// Styles: src/styles/home-rich.css (every class is prefixed hx-). Copy and counts come from data/homeRich.js.

function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') { setOn(true); return undefined; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, on];
}

// Roving-tab keyboard handling shared by the tab sets.
function useTabs(n, active, setActive) {
  const refs = useRef([]);
  const onKeyDown = (e) => {
    let k = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') k = (active + 1) % n;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') k = (active + n - 1) % n;
    else if (e.key === 'Home') k = 0;
    else if (e.key === 'End') k = n - 1;
    if (k === null) return;
    e.preventDefault();
    setActive(k);
    if (refs.current[k]) refs.current[k].focus();
  };
  return { refs, onKeyDown };
}

const Go = ({ to, children, className = '' }) => (
  <Link to={to} className={`hx-go ${className}`}><span>{children}</span><ArrowRight size={16} aria-hidden="true" /></Link>
);

/* 1 · Profile --------------------------------------------------------------------------------------------- */
export function HxProfile() {
  const d = HOME_PROFILE;
  const [ref, on] = useReveal();
  return (
    <section id="profile" className="hx hx-profile" aria-labelledby="hx-profile-h">
      <div className="nk-container">
        <div className="hx-split">
          <div>
            <p className="hx-kicker">{d.label}</p>
            <h2 id="hx-profile-h" className="hx-h1">{d.title}</h2>
          </div>
          <div className="hx-split-side">
            <p className="hx-lede hx-ink">{d.lede}</p>
            <p className="hx-body">{d.body}</p>
            <Go to={d.to} className="hx-go-line">{d.linkLabel}</Go>
          </div>
        </div>

        <div className="hx-mosaic">
          <figure className="hx-m-img">
            <img src={d.banner.image} alt={d.banner.alt} loading="lazy" />
            <figcaption><p>{d.banner.caption}</p></figcaption>
          </figure>
          <div className="hx-m-strap">
            <p className="hx-m-title">Four things every engagement is read through</p>
            <ul>
              {STRAPLINE.map((w) => <li key={w}><span>{w}</span><ArrowUpRight size={22} aria-hidden="true" /></li>)}
            </ul>
          </div>
          <div ref={ref} className={`hx-m-chain${on ? ' is-in' : ''}`}>
            <p className="hx-m-title">{d.chainLead}</p>
            <ol>
              {d.chain.map((c, i) => (
                <li key={c.t} style={{ '--i': i }}>
                  <span className="hx-node" aria-hidden="true" />
                  <h3>{c.t}</h3>
                  <p>{c.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <ul className="hx-facts" aria-label="The firm in numbers">
          {d.banner.facts.map(([n, t]) => <li key={t}><b>{n}</b><span>{t}</span></li>)}
        </ul>
      </div>
    </section>
  );
}

/* 2 · Practices: a spotlight banner with tabs, then the services of the chosen practice --------------------- */
export function HxPractices() {
  const d = HOME_PRACTICES;
  const [a, setA] = useState(0);
  const { refs, onKeyDown } = useTabs(d.items.length, a, setA);
  const p = d.items[a];
  return (
    <section id="practices" className="hx hx-dark hx-prac" aria-labelledby="hx-prac-h">
      <div className="nk-container">
        <div className="hx-head">
          <h2 id="hx-prac-h" className="hx-h2">{d.title}</h2>
          <p className="hx-lede">{d.intro}</p>
        </div>
        <div className="hx-tabbar" role="tablist" aria-label="NK&CO practices" onKeyDown={onKeyDown}>
          {d.items.map((it, i) => (
            <button
              key={it.id} ref={(el) => { refs.current[i] = el; }} type="button" role="tab" id={`hx-ptab-${it.id}`}
              aria-selected={a === i} aria-controls="hx-ppane" tabIndex={a === i ? 0 : -1}
              className={`hx-tab${a === i ? ' is-on' : ''}`} onClick={() => setA(i)}
            >{it.name}</button>
          ))}
        </div>
        <div className="hx-banner" id="hx-ppane" role="tabpanel" aria-labelledby={`hx-ptab-${p.id}`}>
          {d.items.map((it, i) => <img key={it.id} src={it.image} alt="" loading={i === 0 ? 'eager' : 'lazy'} className={a === i ? 'is-on' : ''} />)}
          <div className="hx-banner-copy">
            <h3 className="hx-banner-title">{p.lines.map((l) => <span key={l}>{l}</span>)}</h3>
            <p>{p.lede}</p>
            <Link to={p.to} className="hx-btn hx-btn-light">Explore {p.name}<ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
          <dl className="hx-banner-facts">
            {p.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
        </div>
        <ul className="hx-svc" aria-label={`${p.name} services`}>
          {p.services.map(([label, to]) => (
            <li key={to}>
              <Link to={to}>
                <span className="hx-svc-k">{p.name}</span>
                <span className="hx-svc-t">{label}</span>
                <span className="hx-svc-go">Open service<ArrowRight size={15} aria-hidden="true" /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* 3 · Comparison: the seven rows that keep the practices apart -------------------------------------------- */
export function HxCompare() {
  const s = SEPARATION;
  return (
    <section id="separation" className="hx hx-tint hx-compare" aria-labelledby="hx-compare-h">
      <div className="nk-container">
        <div className="hx-head">
          <h2 id="hx-compare-h" className="hx-h2">{s.title}</h2>
          <p className="hx-lede">{s.intro}</p>
        </div>
        <div className="hx-table-wrap" tabIndex={0} role="region" aria-label="Comparison of the three practices">
          <table className="hx-table">
            <thead>
              <tr>
                <th scope="col"><span className="hx-vh">Question</span></th>
                {s.columns.map((c, i) => (
                  <th key={c} scope="col">
                    <span className="hx-th-name">{c}</span>
                    <Link to={HOME_PRACTICES.items[i].to} className="hx-th-link">Read the practice<ArrowRight size={14} aria-hidden="true" /></Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {s.rows.map(([label, ...cells]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  {cells.map((c, i) => <td key={i}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="hx-note hx-note-rule">{s.close}</p>
      </div>
    </section>
  );
}

/* 4 · Explore: the six sections of the site as six panels ------------------------------------------------- */
export function HxExplore() {
  return (
    <section id="explore" className="hx hx-explore" aria-labelledby="hx-explore-h">
      <div className="nk-container">
        <div className="hx-head">
          <h2 id="hx-explore-h" className="hx-h2">Everything the firm publishes, in six sections.</h2>
          <p className="hx-lede">{SITE_TOTALS.areas} subject areas and {SITE_TOTALS.topics.toLocaleString('en-GB')} topics, organised the way owners and executives look for them.</p>
        </div>
        <div className="hx-xgrid">
          {EXPLORE.map((e) => (
            <article key={e.key} className="hx-xcard">
              <Link to={e.to} className="hx-xmedia" tabIndex={-1} aria-hidden="true">
                {e.image ? <img src={e.image} alt="" loading="lazy" /> : null}
                <span className="hx-xtag">{e.areas} areas<i /> {e.topics} topics</span>
              </Link>
              <div className="hx-xbody">
                <h3><Link to={e.to}>{e.label}</Link></h3>
                <p>{e.text}</p>
                <ul>
                  {e.links.map(([t, to]) => <li key={to}><Link to={to}>{t}<ArrowRight size={14} aria-hidden="true" /></Link></li>)}
                </ul>
                <Go to={e.to} className="hx-go-line">Explore {e.label}</Go>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 5 · OMS: a product panel with an illustrative console ---------------------------------------------------- */
const BARS = [38, 54, 46, 70, 62, 84, 76, 92];
export function HxOMS() {
  return (
    <section id="oms" className="hx hx-night hx-oms" aria-labelledby="hx-oms-h">
      <div className="nk-container">
        <div className="hx-oms-grid">
          <div className="hx-oms-copy">
            <p className="hx-kicker">Infrastructure</p>
            <h2 id="hx-oms-h" className="hx-h2">{OMS.title}</h2>
            <p className="hx-lede">{OMS.text}</p>
            <ul className="hx-oms-mods">
              {OMS.modules.map(([t, x]) => <li key={t}><strong>{t}</strong><span>{x}</span></li>)}
            </ul>
            <div className="hx-actions">
              <Link to={OMS.to} className="hx-btn hx-btn-light">Explore OMS<ArrowRight size={17} aria-hidden="true" /></Link>
              <Link to={OMS.all} className="hx-btn hx-btn-ghost">All Infrastructure</Link>
            </div>
          </div>
          <figure className="hx-win" aria-label="Illustrative layout of the Operations Management System">
            <div className="hx-win-bar"><i /><i /><i /><span>Operations Management System</span></div>
            <div className="hx-win-body">
              <nav className="hx-win-side" aria-hidden="true">
                {['Overview', 'CRM', 'Workflow', 'Reporting', 'Mandates', 'Records'].map((x, i) => <span key={x} className={i === 0 ? 'is-on' : ''}>{x}</span>)}
              </nav>
              <div className="hx-win-main" aria-hidden="true">
                <div className="hx-win-kpis">
                  {['Pipeline', 'Open tasks', 'Reporting pack'].map((x, i) => (
                    <div key={x}><span>{x}</span><em style={{ '--w': `${[72, 48, 86][i]}%` }} /></div>
                  ))}
                </div>
                <div className="hx-win-chart">
                  <span>Management reporting</span>
                  <div>{BARS.map((h, i) => <b key={i} style={{ height: `${h}%` }} />)}</div>
                </div>
                <div className="hx-win-rows">
                  {[88, 64, 76, 52].map((w, i) => <div key={i}><i /><span style={{ width: `${w}%` }} /><em /></div>)}
                </div>
              </div>
            </div>
            <figcaption>Illustrative layout. Not client data.</figcaption>
          </figure>
        </div>
        <div className="hx-oms-areas">
          <p className="hx-oms-count"><b>{OMS.areaCount}</b> service areas and <b>{OMS.topicCount.toLocaleString('en-GB')}</b> topics across the enterprise lifecycle</p>
          <ul>
            {OMS.areas.map(([t, to]) => <li key={to}><Link to={to}>{t}</Link></li>)}
            <li className="is-more"><Link to={OMS.all}>+{OMS.areaCount - OMS.areas.length} more<ArrowRight size={14} aria-hidden="true" /></Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* 6 · Scope: three activity codes, eleven confirmations, twelve questions ---------------------------------- */
export function HxScope() {
  const d = HOME_BOUNDARIES;
  return (
    <section id="scope-of-practice" className="hx hx-scope" aria-labelledby="hx-scope-h">
      <div className="nk-container">
        <div className="hx-head">
          <h2 id="hx-scope-h" className="hx-h2">{d.title}</h2>
          <p className="hx-lede">{d.intro}</p>
        </div>
        <div className="hx-codes">
          {CODES.map((c) => (
            <article key={c.code} className="hx-code">
              <p className="hx-code-k">{d.basisLabel}</p>
              <p className="hx-code-n">{c.code}</p>
              <h3>{c.practice}</h3>
              <p className="hx-code-w">{c.wording}</p>
            </article>
          ))}
        </div>
        <p className="hx-note">{d.basisNote}</p>

        <h3 className="hx-h3 hx-sub">{d.registerLabel}</h3>
        <div className="hx-regs">
          {d.groups.map((g) => (
            <div key={g.t} className="hx-reg">
              <h4><span>{g.t}</span><b>{g.k.length}</b></h4>
              <ul>
                {g.k.map((k) => { const it = d.register.find((r) => r[0] === k); return <li key={k}><strong>{it[0]}</strong><span>{it[1]}</span></li>; })}
              </ul>
            </div>
          ))}
        </div>
        <p className="hx-note">{d.registerNote}</p>

        <h3 className="hx-h3 hx-sub">{LICENCE_REGISTER.title}</h3>
        <ul className="hx-qs">
          {LICENCE_REGISTER.rows.map(([label, text]) => {
            const [q, ...rest] = label.split(' ');
            return <li key={label}><b>{q}</b><strong>{rest.join(' ')}</strong><span>{text}</span></li>;
          })}
        </ul>
        <Go to="/overview/the-firm/scope-of-practice" className="hx-go-line">Read the scope of practice</Go>
      </div>
    </section>
  );
}

/* 7 · Method: five stages rising, each with its typical output --------------------------------------------- */
export function HxMethod() {
  const d = HOME_METHOD;
  const [ref, on] = useReveal(0.15);
  return (
    <section id="approach" className="hx hx-tint hx-method" aria-labelledby="hx-method-h">
      <div className="nk-container">
        <div className="hx-head">
          <h2 id="hx-method-h" className="hx-h2">{d.title}</h2>
          <p className="hx-lede">{d.intro}</p>
        </div>
        <figure className="hx-method-fig">
          <img src={d.image} alt={d.imageAlt} loading="lazy" />
          <figcaption>
            <ol>{d.stages.map((s) => <li key={s.n}>{s.title}</li>)}</ol>
          </figcaption>
        </figure>
        <ol ref={ref} className={`hx-steps${on ? ' is-in' : ''}`}>
          {d.stages.map((s, i) => (
            <li key={s.n} style={{ '--i': i }}>
              <span className="hx-step-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="hx-step-out"><i>Typical output</i>{s.out}</span>
            </li>
          ))}
        </ol>
        <div className="hx-foot">
          <p className="hx-note">{d.close}</p>
          <Go to={d.to} className="hx-go-line">{d.linkLabel}</Go>
        </div>
      </div>
    </section>
  );
}

/* 8 · Engagement: the letter, the fee structure and the documents ------------------------------------------- */
export function HxEngage() {
  const d = HOME_ENGAGEMENT;
  return (
    <section id="governance" className="hx hx-engage" aria-labelledby="hx-engage-h">
      <div className="nk-container">
        <div className="hx-engage-grid">
          <div className="hx-engage-copy">
            <h2 id="hx-engage-h" className="hx-h2">{d.title}</h2>
            <p className="hx-lede">{d.intro}</p>
            <p className="hx-promise">{d.promise}</p>
          </div>
          <div className="hx-sheet">
            <div className="hx-sheet-top"><h3>{d.sheetTitle}</h3><span>{d.sheetNote}</span></div>
            <ul className="hx-clauses">
              {d.clauses.map(([t, x]) => <li key={t}><strong>{t}</strong><span>{x}</span></li>)}
            </ul>
          </div>
        </div>

        <div className="hx-fees" aria-label="What each proposal separates">
          <p>Each proposal separates</p>
          <ul>{FEE_PARTS.map((f) => <li key={f}>{f}</li>)}</ul>
        </div>

        <div className="hx-docs-head">
          <h3 className="hx-h3">{d.deliverablesTitle}</h3>
          <p className="hx-note">{d.deliverablesNote}</p>
        </div>
        <ul className="hx-docs" aria-label="Deliverables">
          {DELIVERABLES.items.map(([t, x]) => (
            <li key={t}><b>{t}</b><span>{x}</span></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* 9 · Spotlight: one feature at a time, four to choose from ------------------------------------------------- */
export function HxSpotlight() {
  const [a, setA] = useState(0);
  const { refs, onKeyDown } = useTabs(SPOTLIGHT.length, a, setA);
  const s = SPOTLIGHT[a];
  return (
    <section id="perspectives" className="hx hx-night hx-spot" aria-labelledby="hx-spot-h">
      <div className="nk-container">
        <div className="hx-head">
          <h2 id="hx-spot-h" className="hx-h2">Perspectives from the firm.</h2>
          <p className="hx-lede">Briefings, reports and conversations on entering, running and selling a business in the UAE. Information only, not advice.</p>
        </div>
        <div className="hx-spot-stage" id="hx-spot-pane" role="tabpanel" aria-labelledby={`hx-stab-${a}`}>
          <div className="hx-spot-copy">
            <p className="hx-spot-meta">{s.kind}<i />{s.meta}</p>
            <h3><Link to={s.to}>{s.title}</Link></h3>
            <p>{s.text}</p>
            <Link to={s.to} className="hx-btn hx-btn-light">{s.cta}<ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
          <Link to={s.to} className="hx-spot-media" aria-label={s.title} tabIndex={-1}>
            {SPOTLIGHT.map((x, i) => <img key={x.id} src={x.image} alt="" loading={i === 0 ? 'eager' : 'lazy'} className={a === i ? 'is-on' : ''} />)}
            {s.player ? (
              <span className="hx-player" aria-hidden="true">
                <span className="hx-play"><Play size={26} fill="currentColor" /></span>
                <span className="hx-track"><i /></span>
                <span className="hx-time"><b>0:00</b><b>{s.meta}</b></span>
              </span>
            ) : null}
          </Link>
        </div>
        <div className="hx-spot-tabs" role="tablist" aria-label="Featured perspectives" onKeyDown={onKeyDown}>
          {SPOTLIGHT.map((x, i) => (
            <button key={x.id} ref={(el) => { refs.current[i] = el; }} type="button" role="tab" id={`hx-stab-${i}`} aria-selected={a === i} aria-controls="hx-spot-pane" tabIndex={a === i ? 0 : -1} className={`hx-spot-tab${a === i ? ' is-on' : ''}`} onClick={() => setA(i)}>
              <i aria-hidden="true" />
              <span>{x.kind}</span>
              <strong>{x.short}</strong>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 10 · Insights: a filterable grid of the latest pieces ------------------------------------------------------ */
export function HxInsights() {
  const tags = ['All', ...Array.from(new Set(INSIGHTS.map((i) => i.section)))];
  const [f, setF] = useState('All');
  const [all, setAll] = useState(false);
  const list = INSIGHTS.filter((i) => f === 'All' || i.tag === f);
  const shown = all ? list : list.slice(0, 8);
  return (
    <section id="insights" className="hx hx-insights" aria-labelledby="hx-ins-h">
      <div className="nk-container">
        <div className="hx-ins-top">
          <h2 id="hx-ins-h" className="hx-h2">Latest from the library.</h2>
          <div className="hx-filters" role="group" aria-label="Filter by type">
            {tags.map((t) => <button key={t} type="button" aria-pressed={f === t} className={f === t ? 'is-on' : ''} onClick={() => { setF(t); setAll(false); }}>{t}</button>)}
          </div>
        </div>
        <ul className="hx-igrid">
          {shown.map((i) => (
            <li key={i.title}>
              <Link to={i.to} className="hx-icard">
                <img src={i.image} alt="" loading="lazy" />
                <span className="hx-iplate">
                  <span className="hx-imeta">{i.tag}{i.date ? <><i />{i.date}</> : null}</span>
                  <span className="hx-ititle">{i.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="hx-ins-foot">
          {list.length > 8 && !all ? <button type="button" className="hx-btn hx-btn-dark" onClick={() => setAll(true)}>View more<Plus size={17} aria-hidden="true" /></button> : null}
          <Go to="/intelligence" className="hx-go-line">Open the Intelligence library</Go>
        </div>
      </div>
    </section>
  );
}

/* 11 · Governing standard ------------------------------------------------------------------------------------- */
export function HxStandard() {
  const d = HOME_STANDARD;
  return (
    <section id="governing-standard" className="hx hx-night hx-standard" aria-labelledby="hx-standard-h">
      <img className="hx-standard-bg" src={d.image} alt="" loading="lazy" />
      <div className="nk-container hx-standard-in">
        <p className="hx-kicker">{d.label}</p>
        <h2 id="hx-standard-h" className="hx-quote">{d.quote}</h2>
        <p className="hx-standard-body">{d.body}</p>
        <ul className="hx-princ">
          {d.principles.map((p) => <li key={p.t}><h3>{p.t}</h3><p>{p.d}</p></li>)}
        </ul>
      </div>
    </section>
  );
}

/* 12 · Contact and briefing ------------------------------------------------------------------------------------ */
export function HxContact() {
  const d = HOME_CONTACT;
  const [email, setEmail] = useState('');
  const send = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(`Please add this address to the NK&CO Briefing: ${email}`);
    window.location.href = `mailto:${d.email}?subject=${encodeURIComponent('NK&CO Briefing subscription')}&body=${body}`;
  };
  return (
    <section id="contact" className="hx hx-contact" aria-labelledby="hx-contact-h">
      <div className="nk-container">
        <div className="hx-contact-grid">
          <div className="hx-contact-copy">
            <h2 id="hx-contact-h" className="hx-h1">{d.title}</h2>
            <p className="hx-lede">{d.lede}</p>
            <ol className="hx-reqs">
              {d.steps.map((s) => <li key={s.t}><h3>{s.t}</h3><p>{s.d}</p></li>)}
            </ol>
          </div>
          <aside className="hx-card-dark" aria-label="Contact NK&CO">
            <img src={d.image} alt={d.alt} loading="lazy" />
            <div className="hx-card-dark-in">
              <p className="hx-kicker">Dubai, United Arab Emirates</p>
              <p className="hx-card-q">Tell us what the business needs to decide, change or transfer.</p>
              <a href={d.href} className="hx-btn hx-btn-light">{d.button}<ArrowRight size={17} aria-hidden="true" /></a>
              <p className="hx-mail"><a href={`mailto:${d.email}`}>{d.email}</a></p>
              <ul className="hx-contact-links">
                {HOME_PRACTICES.items.map((p) => <li key={p.id}><Link to={p.to}>{p.name}<ArrowUpRight size={15} aria-hidden="true" /></Link></li>)}
              </ul>
            </div>
          </aside>
        </div>
        <form className="hx-brief" onSubmit={send}>
          <div>
            <p className="hx-kicker">NK&amp;CO Briefing</p>
            <p className="hx-brief-t">The firm’s briefing for owners and executives, delivered to you.</p>
          </div>
          <label className="hx-field">
            <span className="hx-vh">Email address</span>
            <input type="email" required placeholder="Enter email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Subscribe<ArrowRight size={16} aria-hidden="true" /></button>
          </label>
        </form>
      </div>
    </section>
  );
}
