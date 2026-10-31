import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Play, Plus } from 'lucide-react';
import {
  EXPLORE, OMS, SPOTLIGHT, INSIGHTS, FEE_PARTS, SEPARATION, STRAPLINE, DELIVERABLES,
  HOME_PRACTICES, HOME_BOUNDARIES, HOME_METHOD, HOME_ENGAGEMENT, HOME_STANDARD, HOME_PROFILE,
} from '../data/homeRich';

// v601 · the eleven home sections restyled to match the OMS showcase: short serif header, big visuals, little text.
// Copy, links and counts still come from data/homeRich.js (nothing is invented here). Styles: src/styles/home-visual.css (prefix hv-).
const Img = ({ src, alt = '', eager }) => (src ? <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} onError={(e) => { e.currentTarget.style.display = 'none'; }} /> : null);
const Head = ({ id, k, children, light, below }) => (
  <div className={`hv-head${light ? ' is-light' : ''}${below ? ' is-below' : ''}`}>
    {k && !below ? <span className="hv-eyebrow">{k}</span> : null}
    <h2 id={id}>{children}</h2>
    {k && below ? <span className="hv-eyebrow">{k}</span> : null}
  </div>
);
const Go = ({ to, children, light }) => (<Link to={to} className={`hv-link${light ? ' is-light' : ''}`}>{children}<ArrowRight size={16} aria-hidden="true" /></Link>);
const short = (t) => String(t).split(',')[0];

/* 1 · Profile: one huge picture, the four facts across it */
export function HvProfile() {
  const d = HOME_PROFILE;
  return (
    <section id="profile" className="hv hv-cream hv-profile" aria-labelledby="hv-profile-h">
      <Head id="hv-profile-h" k={d.label}>The firm</Head>
      <figure className="hv-big">
        <Img src={d.banner.image} alt={d.banner.alt} eager />
        <ul className="hv-facts" aria-label="The firm in numbers">
          {d.banner.facts.map(([n, t]) => <li key={t}><b>{n}</b><span>{short(t)}</span></li>)}
        </ul>
      </figure>
      <ul className="hv-pills">{STRAPLINE.map((w) => <li key={w}>{w}</li>)}</ul>
      <div className="hv-foot"><Go to={d.to}>{d.linkLabel}</Go></div>
    </section>
  );
}

/* 2 · Practices: numbered tabs over one big picture */
export function HvPractices() {
  const d = HOME_PRACTICES;
  const [a, setA] = useState(0);
  const p = d.items[a];
  return (
    <section id="practices" className="hv hv-dark hv-prac" aria-labelledby="hv-prac-h">
      <Head id="hv-prac-h" k="NK&CO" light>Three practices</Head>
      <div className="hv-tabs" role="tablist" aria-label="NK&CO practices">
        {d.items.map((it, i) => (
          <button key={it.id} type="button" role="tab" aria-selected={a === i} className={a === i ? 'is-on' : ''} onClick={() => setA(i)}><i>{String(i + 1).padStart(2, '0')}</i>{it.name}</button>
        ))}
      </div>
      <div className="hv-stage" role="tabpanel">
        {d.items.map((it, i) => <Img key={it.id} src={it.image} eager={i === 0} />)}
        <div className="hv-stage-shade" />
        <h3 className="hv-stage-t">{p.lines.map((l) => <span key={l}>{l}</span>)}</h3>
        <dl className="hv-stage-f">{p.facts.slice(0, 3).map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
        <Link to={p.to} className="hv-btn">Explore {p.name}<ArrowRight size={17} aria-hidden="true" /></Link>
      </div>
      <ul className="hv-chips">{p.services.map(([label, to]) => <li key={to}><Link to={to}>{label}<ArrowUpRight size={14} aria-hidden="true" /></Link></li>)}</ul>
    </section>
  );
}

/* 3 · Compare: pick a question, see the three answers side by side */
export function HvCompare() {
  const s = SEPARATION;
  const [r, setR] = useState(0);
  const row = s.rows[r];
  return (
    <section id="separation" className="hv hv-white hv-cmp" aria-labelledby="hv-cmp-h">
      <Head id="hv-cmp-h">How they differ</Head>
      <div className="hv-cmp-grid">
        <ul className="hv-qlist" aria-label="Choose a question">
          {s.rows.map((x, i) => <li key={x[0]}><button type="button" aria-pressed={r === i} className={r === i ? 'is-on' : ''} onClick={() => setR(i)}><i>{String(i + 1).padStart(2, '0')}</i>{x[0]}</button></li>)}
        </ul>
        <div className="hv-cards3" key={r}>
          {s.columns.map((c, i) => (
            <article key={c} className="hv-card3">
              <small>{row[0]}</small>
              <p>{row[i + 1]}</p>
              <Link to={HOME_PRACTICES.items[i].to}>{c}<ArrowUpRight size={15} aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 4 · Explore: six big picture tiles */
export function HvExplore() {
  return (
    <section id="explore" className="hv hv-cream hv-exp" aria-labelledby="hv-exp-h">
      <Head id="hv-exp-h">Six sections</Head>
      <div className="hv-tiles">
        {EXPLORE.map((e) => (
          <article key={e.key} className="hv-tile">
            <Img src={e.image} />
            <div className="hv-tile-shade" />
            <Link to={e.to} className="hv-tile-hit" aria-label={`Explore ${e.label}`} />
            <div className="hv-tile-in">
              <small>{e.areas} areas · {e.topics} topics</small>
              <h3>{e.label}</h3>
              {e.links.length ? <ul>{e.links.slice(0, 3).map(([t, to]) => <li key={to}><Link to={to}>{t}</Link></li>)}</ul> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* 5 · OMS and infrastructure: two big numbers and the three modules */
export function HvOMS() {
  return (
    <section id="oms" className="hv hv-dark hv-oms" aria-labelledby="hv-oms-h">
      <Head id="hv-oms-h" k="Operations Management System" light below>Infrastructure</Head>
      <div className="hv-nums">
        <div><b>{OMS.areaCount}</b><span>service areas</span></div>
        <div><b>{OMS.topicCount.toLocaleString('en-GB')}</b><span>topics</span></div>
      </div>
      <ul className="hv-mods">{OMS.modules.map(([t], i) => <li key={t}><i>{String(i + 1).padStart(2, '0')}</i><strong>{t}</strong></li>)}</ul>
      <ul className="hv-chips is-light">{OMS.areas.map(([t, to]) => <li key={to}><Link to={to}>{t}</Link></li>)}<li><Link to={OMS.all}>+{OMS.areaCount - OMS.areas.length} more<ArrowRight size={14} aria-hidden="true" /></Link></li></ul>
      <div className="hv-actions"><Link to={OMS.to} className="hv-btn">Explore OMS<ArrowRight size={17} aria-hidden="true" /></Link><Link to={OMS.all} className="hv-btn is-ghost">All Infrastructure</Link></div>
    </section>
  );
}

/* 6 · Scope: three big activity codes, then the confirmations one group at a time */
export function HvScope() {
  const d = HOME_BOUNDARIES;
  const [g, setG] = useState(0);
  const grp = d.groups[g];
  return (
    <section id="scope-of-practice" className="hv hv-white hv-scope" aria-labelledby="hv-scope-h">
      <Head id="hv-scope-h">Scope of practice</Head>
      <div className="hv-seg" role="group" aria-label="Confirmed separately">
        {d.groups.map((x, i) => <button key={x.t} type="button" aria-pressed={g === i} className={g === i ? 'is-on' : ''} onClick={() => setG(i)}>{x.t}<em>{x.k.length}</em></button>)}
      </div>
      <ul className="hv-reg" key={g}>
        {grp.k.map((k) => { const it = d.register.find((r) => r[0] === k); return <li key={k}><strong>{it[0]}</strong><span>{it[1]}</span></li>; })}
      </ul>
      <div className="hv-foot"><Go to="/overview/the-firm/scope-of-practice">Read the scope of practice</Go></div>
    </section>
  );
}

/* 7 · Method: five numbered steps, one open at a time beside the picture */
export function HvMethod() {
  const d = HOME_METHOD;
  const [a, setA] = useState(0);
  const s = d.stages[a];
  return (
    <section id="approach" className="hv hv-cream hv-meth" aria-labelledby="hv-meth-h">
      <Head id="hv-meth-h">Five stages</Head>
      <ol className="hv-steps" aria-label="Method stages">
        {d.stages.map((x, i) => <li key={x.n}><button type="button" aria-pressed={a === i} className={a === i ? 'is-on' : ''} onClick={() => setA(i)}><i>{x.n}</i><span>{x.title}</span></button></li>)}
      </ol>
      <div className="hv-meth-grid">
        <figure><Img src={d.image} alt={d.imageAlt} /></figure>
        <div className="hv-meth-card" key={a}>
          <b>{s.n}</b>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
          <span><i>Typical output</i>{s.out}</span>
        </div>
      </div>
      <div className="hv-foot"><Go to={d.to}>{d.linkLabel}</Go></div>
    </section>
  );
}

/* 8 · Engagement: the letter as a big sheet, the deliverables as document cards */
export function HvEngage() {
  const d = HOME_ENGAGEMENT;
  return (
    <section id="governance" className="hv hv-dark hv-eng" aria-labelledby="hv-eng-h">
      <Head id="hv-eng-h" light>One framework</Head>
      <div className="hv-eng-grid">
        <div className="hv-paper" role="img" aria-label={d.sheetTitle}>
          <h3>{d.sheetTitle}</h3>
          <ol>{d.clauses.map(([t]) => <li key={t}>{t}</li>)}</ol>
        </div>
        <div className="hv-eng-side">
          <p className="hv-eng-k">Each proposal separates</p>
          <ul className="hv-chips is-light">{FEE_PARTS.map((f) => <li key={f}><span>{f}</span></li>)}</ul>
          <p className="hv-eng-k">Deliverables</p>
          <ul className="hv-docs">{DELIVERABLES.items.slice(0, 8).map(([t]) => <li key={t}><u />{t}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

/* 9 · Spotlight: one huge feature, four to choose from */
export function HvSpotlight() {
  const [a, setA] = useState(0);
  const s = SPOTLIGHT[a];
  return (
    <section id="perspectives" className="hv hv-cream hv-spot" aria-labelledby="hv-spot-h">
      <Head id="hv-spot-h">Perspectives</Head>
      <div className="hv-feature" role="tabpanel">
        {SPOTLIGHT.map((x, i) => <Img key={x.id} src={x.image} eager={i === 0} />)}
        <div className="hv-stage-shade" />
        {s.player ? <span className="hv-playbtn" aria-hidden="true"><Play size={28} fill="currentColor" /></span> : null}
        <div className="hv-feature-in">
          <small>{s.kind}{s.meta ? ` · ${s.meta}` : ''}</small>
          <h3><Link to={s.to}>{s.title}</Link></h3>
          <Link to={s.to} className="hv-btn">{s.cta}<ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </div>
      <div className="hv-thumbs" role="tablist" aria-label="Featured perspectives">
        {SPOTLIGHT.map((x, i) => <button key={x.id} type="button" role="tab" aria-selected={a === i} className={a === i ? 'is-on' : ''} onClick={() => setA(i)}><small>{x.kind}</small><span>{x.short}</span></button>)}
      </div>
    </section>
  );
}

/* 10 · Insights: a magazine grid with one large lead tile */
export function HvInsights() {
  const tags = ['All', ...Array.from(new Set(INSIGHTS.map((i) => i.section)))];
  const [f, setF] = useState('All');
  const [all, setAll] = useState(false);
  const list = INSIGHTS.filter((i) => f === 'All' || i.section === f);
  const shown = all ? list : list.slice(0, 9);
  return (
    <section id="insights" className="hv hv-white hv-ins" aria-labelledby="hv-ins-h">
      <Head id="hv-ins-h">Latest</Head>
      <div className="hv-filters" role="group" aria-label="Filter by section">
        {tags.map((t) => <button key={t} type="button" aria-pressed={f === t} className={f === t ? 'is-on' : ''} onClick={() => { setF(t); setAll(false); }}>{t}</button>)}
      </div>
      <ul className="hv-mag">
        {shown.map((i) => (
          <li key={i.title}>
            <Link to={i.to} className="hv-mcard">
              <Img src={i.image} />
              <span className="hv-mshade" />
              <span className="hv-mtxt"><small>{i.tag}{i.date ? ` · ${i.date}` : ''}</small><strong>{i.title}</strong></span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="hv-foot">
        {list.length > 9 && !all ? <button type="button" className="hv-btn is-dark" onClick={() => setAll(true)}>View more<Plus size={17} aria-hidden="true" /></button> : null}
        <Go to="/intelligence">Open the Intelligence library</Go>
      </div>
    </section>
  );
}

/* 11 · Governing standard: full-bleed picture and the quote */
export function HvStandard() {
  const d = HOME_STANDARD;
  return (
    <section id="governing-standard" className="hv hv-dark hv-std" aria-labelledby="hv-std-h">
      <Img src={d.image} />
      <div className="hv-std-shade" />
      <div className="hv-std-in">
        <span className="hv-eyebrow is-light">{d.label}</span>
        <h2 id="hv-std-h">{d.quote}</h2>
        <ul>{d.principles.map((p) => <li key={p.t}>{p.t}</li>)}</ul>
      </div>
    </section>
  );
}
