import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { toRoman } from '../lib/roman';
import { phrase } from '../lib/utils';
import { NAV_ITEMS_ALL as NAV_ITEMS, slugify } from '../mock';
import { relatedPages } from '../lib/relatedPages';
import { leafPhoto } from '../lib/leafPhoto';
import { heroFor } from '../lib/heroPlan';
import { getRichContent } from '../data/richContent';
import { CATEGORY_POOLS, getCategoryPool, getPillars, getLeafContent } from '../data/serviceContent';
import CapBody, { capPrep, capRail, CapWorkspace } from '../components/CapVisual';

// v628 · sections whose page body is the rich visual version (tablets, big panels; see components/CapVisual.jsx). Add a section key here to switch it on.
const RICH_SECTIONS = ['capabilities'];

// v200. Built like the employers page: a library of 14 section modules (summary + aside, method spine, architecture figure,
// comparison table, decision tree, use-case cards, image click-cards, scope models, timeline + proof strip, expandable
// questions, news cards, KPI grid, feature panels, closing band) composed per page. Each page's path seeds which modules
// it gets, in which order, on which surface, with which headline wording and which verb rail.
const hash = (s) => { let h = 7; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; };
const rng = (a) => () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const shuf = (a, r) => { const o = [...a]; for (let i = o.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [o[i], o[j]] = [o[j], o[i]]; } return o; };
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
// Bespoke copy written per page by `npm run copy` (src/data/copy/<section>.json). Loaded per section, so it is not in the main bundle.
const SHARDS = {};
function useCopy(section, path, given) {
  const [c, setC] = React.useState(given || (SHARDS[section] && SHARDS[section].data && SHARDS[section].data[path]));
  React.useEffect(() => {
    if (given) return undefined; let live = true;
    if (!SHARDS[section]) SHARDS[section] = { p: import(`../data/copy/${section}.json`).then((m) => { SHARDS[section].data = m.default || m; return SHARDS[section].data; }).catch(() => ({})) };
    SHARDS[section].p.then((d) => { if (live) setC(d[path]); });
    return () => { live = false; };
  }, [section, path, given]);
  return c;
}
// Same rail as the home hero (nk2-rail): equal tabs, lighter active tab with a white underline that follows the scroll.
const hi = (u) => (/images\.unsplash\.com/.test(u || '') ? u.replace(/([?&])w=\d+/, '$1w=2400').replace(/q=\d+/, 'q=80') : u);
export function PageRail({ items }) {
  const [on, setOn] = React.useState(items[0].id);
  React.useEffect(() => {
    const els = items.map((x) => document.getElementById(x.id)).filter(Boolean);
    if (!els.length || typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) setOn(e.target.id); }), { rootMargin: '-30% 0px -60% 0px' });
    els.forEach((el) => io.observe(el)); return () => io.disconnect();
  }, [items]);
  const go = (e, id) => { const el = document.getElementById(id); if (!el) return; e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); setOn(id); };
  return (
    <aside className="nk2-rail pg-rail" aria-label="On this page"><nav>
      {items.map((x) => (<a key={x.id} href={`#${x.id}`} onClick={(e) => go(e, x.id)} className={on === x.id ? 'is-active' : ''} aria-current={on === x.id ? 'true' : undefined}>{x.label}</a>))}
    </nav></aside>
  );
}
// Inline brief form (like the reference page's quote tool): composes an email to NK&CO, nothing is stored.
function Brief({ title }) {
  const [f, setF] = React.useState({ name: '', email: '', need: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const href = `mailto:info@nkco.ae?subject=${encodeURIComponent('NK&CO enquiry: ' + title)}&body=${encodeURIComponent(`Name: ${f.name}\nEmail: ${f.email}\n\n${f.need}`)}`;
  return (
    <div className="pg-brief">
      <h3>Brief a partner</h3>
      <label>Your name<input value={f.name} onChange={set('name')} autoComplete="name" /></label>
      <label>Work email<input type="email" value={f.email} onChange={set('email')} autoComplete="email" /></label>
      <label>What are you deciding?<textarea rows={3} value={f.need} onChange={set('need')} /></label>
      <a className="pg-btn" href={href}>Send brief</a>
    </div>
  );
}
const TONES = ['white', 'paper']; // v214: sections alternate white / paper, nothing else
const VERBS = ['Assess', 'Structure', 'Negotiate', 'Benchmark', 'Align', 'Mobilise', 'Govern', 'Price', 'Model', 'Secure', 'Sequence', 'Validate', 'Deploy', 'Scale', 'Underwrite', 'Brief', 'Prioritise', 'Resource', 'Measure', 'Embed', 'Review', 'Stress-test', 'Decide', 'Hand over'];
const LABEL = { exec: 'Summary', spine: 'Method', arch: 'Architecture', compare: 'Engagement', decide: 'Decision path', cases: 'Use cases', click: 'Related', models: 'Scope', timeline: 'Timeline', expand: 'Questions', news: 'Reading', kpi: 'Signals', feature: 'Outcomes', quote: 'Contact' };
const HEAD = {
  exec: [(t) => `What a ${t} mandate settles.`, (t) => `${cap(t)}, in brief.`, (t) => `The case for a considered approach to ${t}.`],
  spine: [(t) => `One sequence for every ${t} mandate.`, (t) => `How ${t} moves from brief to result.`, (t) => `The working method behind ${t}.`],
  arch: [(t) => `The architecture of ${t}.`, (t) => `Where ${t} sits in the wider picture.`, (t) => `${cap(t)}: structure before activity.`],
  compare: [(t) => `Which ${t} engagement fits your position.`, (t) => `Three ways to commission ${t}.`, (t) => `Scope, price and fit for ${t}.`],
  decide: [(t) => `Choose the right starting point for ${t}.`, (t) => `Three situations, three first moves on ${t}.`, (t) => `Where your ${t} decision begins.`],
  cases: [(t) => `${cap(t)} in practice.`, (t) => `Where ${t} has been put to work.`, (t) => `Engagements that show ${t} at work.`],
  click: [(t) => `Pages that sit beside ${t}.`, (t) => `Continue from ${t}.`, (t) => `Other practices clients pair with ${t}.`],
  models: [(t) => `What ${t} covers.`, (t) => `The scope of a ${t} engagement.`, (t) => `Six workstreams inside ${t}.`],
  timeline: [(t) => `${cap(t)}, stage by stage.`, (t) => `The ${t} timeline.`, (t) => `From first meeting to handover on ${t}.`],
  expand: [(t) => `Questions we hear on ${t}.`, (t) => `Before you commission ${t}.`, (t) => `Open questions on ${t}, answered.`],
  news: [(t) => `Further reading around ${t}.`, (t) => `Related thinking for ${t} decisions.`, (t) => `From the wider ${t} conversation.`],
  kpi: [(t) => `The standards behind our ${t} work.`, (t) => `What you can hold us to on ${t}.`, (t) => `Commitments on every ${t} mandate.`],
  feature: [(t) => `The value ${t} clients realise.`, (t) => `What changes after ${t}.`, (t) => `Results to expect from ${t}.`],
  quote: [(t) => `Tell us about ${t}.`, (t) => `Start the ${t} conversation.`, (t) => `Share the brief for ${t}.`],
};

const Tiles = ({ rows, cls = '' }) => (
  <div className={`pg-tiles ${cls}`}>
    {rows.map((r, i) => (
      <Link key={r.to} to={r.to} className="pg-tile">
        {r.src && <img src={r.src} alt="" loading="lazy" />}
        <div><span className="pg-rn">{toRoman(i + 1)}</span><h3>{r.title}</h3>{r.text && <p>{r.text}</p>}<span className="pg-go">Explore <ArrowRight size={14} aria-hidden="true" /></span></div>
      </Link>
    ))}
  </div>
);
const Cards = ({ rows }) => (<div className="pg-cards">{rows.map((c) => (<article className={`pg-card${c.src ? ' has-img' : ''}`} key={c.title}>{c.src && <img src={c.src} alt="" loading="lazy" />}<h3>{c.title}</h3><p>{c.body}</p></article>))}</div>);

const MOD = {
  exec: (C) => (<div className="pg-exec"><article><p className="pg-big">{C.desc}</p><p>{C.pillars[0].desc}</p>
      {C.deli.length >= 3 && (<div className="pg-glance"><span className="pg-glance-label">What you receive</span><ol>{C.deli.slice(0, 3).map((d, i) => (<li key={d}><span className="pg-rn">{toRoman(i + 1)}</span><p>{d}</p></li>))}</ol></div>)}</article>
    <aside className="pg-aside"><h3>{C.pillars[1].title}</h3><p>{C.pillars[1].desc}</p><ul>{C.chal.slice(0, 3).map((c) => <li key={c}>{c}</li>)}</ul><a className="pg-btn" href={C.mail}>Request a conversation</a></aside></div>),
  spine: (C) => (<div className={`pg-spine pg-spine-0`}>{C.meth.map((m, i) => (<article key={m.k}><span className="pg-rn">{toRoman(i + 1)}</span><h3>{m.k}</h3><p>{m.v}</p></article>))}</div>),
  arch: (C) => (<div className="pg-arch"><figure><img src={hi(C.photo)} alt="" loading="lazy" /><figcaption>{C.where}</figcaption></figure>
    <div>{C.pillars.slice(1, 3).map((p) => (<article className="pg-card" key={p.title}><h3>{p.title}</h3><p>{p.desc}</p></article>))}</div></div>),
  compare: (C) => (<div className="pg-table" role="region" aria-label="Engagement options" tabIndex={0}><table><thead><tr><th scope="col">Engagement</th><th scope="col">Scope</th><th scope="col">Best suited to</th></tr></thead>
    <tbody>{C.eng.map((e) => (<tr key={e.name}><td>{e.name}</td><td>{e.scope}</td><td>{e.suits}</td></tr>))}</tbody></table></div>),
  decide: (C) => (<div className="pg-decide"><div className="pg-start"><h3>Where are you starting from?</h3><p>Pick the line that sounds most like your position.</p></div>
    <div className="pg-branches">{C.dec.slice(0, 3).map((d, i) => (<article key={d.if}><span className="pg-rn">{toRoman(i + 1)}</span><p className="pg-if">{d.if}</p><p>{d.first}</p></article>))}</div></div>),
  cases: (C) => <Cards rows={C.cases.map((c, i) => ({ ...c, src: C.rels[i] && C.rels[i].src }))} />,
  click: (C) => <Tiles rows={C.rels.slice(0, 3)} cls="pg-t3" />,
  models: (C) => (<div className="pg-models">{C.scope.map((s, i) => (<article key={s.t} style={{ '--ac': ['#2b4a6b', '#646a73', '#3d5a78', '#7d838c', '#16171a', '#4f6f93'][i % 6] }}><span className="pg-tag">Workstream {toRoman(i + 1)}</span><h3>{s.t}</h3><p>{s.d}</p></article>))}</div>),
  timeline: (C) => (<><div className="pg-split"><aside className="pg-aside"><h3>You will receive</h3><ul>{C.deli.slice(0, 3).map((d) => <li key={d}>{d}</li>)}</ul><a className="pg-btn" href="#contact">Speak with our team</a></aside>
    <ol className="pg-tl">{C.meth.map((m) => (<li key={m.k}><h3>{m.k}</h3><p>{m.v}</p></li>))}</ol></div>
    <div className="pg-proof">{C.stats.map((s) => (<div key={s.label}><b>{s.value}</b><span>{s.label}</span></div>))}</div></>),
  expand: (C) => (<div className={"pg-expand"}>{C.faqs.map((f, i) => (<details key={f.q} open={i === 0}><summary>{f.q}</summary><p>{f.a}</p></details>))}</div>),
  news: (C) => (<div className="pg-news">{C.rels.slice(3, 6).map((r) => (<Link key={r.to} to={r.to} className="pg-ncard"><img src={r.src} alt="" loading="lazy" /><div><span className="pg-tag">Related reading</span><h3>{r.title}</h3></div></Link>))}</div>),
  kpi: (C) => (<div className="pg-kpi">{C.stats.map((x) => (<div key={x.label}><b>{x.value}</b><h3>{x.label}</h3><p>{x.note}</p></div>))}</div>),
  feature: (C) => (<div className="pg-feature"><article style={C.rels[2] ? { backgroundImage: `linear-gradient(rgba(18,19,22,.74),rgba(18,19,22,.74)),url(${C.rels[2].src})` } : undefined}><p className="pg-big">{C.outc[0]}</p></article><article><ul>{C.outc.slice(1).map((o) => <li key={o}>{o}</li>)}</ul></article></div>),
  quote: (C) => (<div className="pg-quote"><div><p className="pg-big">{C.pillars[2].desc}</p><p>Prefer to write directly? <a className="pg-lnk" href={C.mail}>Email NK&amp;CO</a></p></div><Brief title={C.title} /></div>),
};
MOD.mosaic = (C) => (<div className="pg-mosaic">{C.rels.slice(0, 4).map((r, i) => (<Link key={r.to} to={r.to} className={`pg-m${i}`}><img src={r.src} alt="" loading="lazy" /><span>{r.title}</span></Link>))}</div>);
MOD.type = (C) => (<div className="pg-type">{(C.scope.length >= 4 ? C.scope.slice(0, 5) : C.deli.slice(0, 5).map((d) => ({ t: d, d: '' }))).map((x, i) => (<div key={x.t} className="pg-trow"><span className="pg-rn">{toRoman(i + 1)}</span><h3>{x.t}</h3><p>{x.d}</p></div>))}</div>);
MOD.split = (C) => (<div className="pg-splitp"><figure><img src={hi(C.rels[1].src)} alt="" loading="lazy" /></figure><div><ul>{C.deli.slice(0, 5).map((d) => <li key={d}>{d}</li>)}</ul><a className="pg-btn" href={C.mail}>Request a conversation</a></div></div>);
HEAD.mosaic = [(t) => `The wider work around ${t}.`, (t) => `Practices that sit close to ${t}.`, (t) => `Seen alongside ${t}.`];
HEAD.type = [(t) => `The services inside ${t}.`, (t) => `${cap(t)}, service by service.`, (t) => `What you can commission under ${t}.`];
HEAD.split = [(t) => `What ${t} puts in your hands.`, (t) => `Leave a ${t} mandate with these.`, (t) => `The ${t} handover, itemised.`];
Object.assign(LABEL, { mosaic: 'Gallery', type: 'Services', split: 'Deliverables' });
const SUB = {
  exec: (C) => C.pillars[2].desc, spine: (C) => `${C.meth.length} stages. Each closes with a decision your leadership signs off before the next begins.`, arch: (C) => C.where,
  compare: () => 'Scope and fit side by side, so you can commission the right size of engagement.', decide: () => 'Choose the line that sounds most like your position. The first move follows.',
  cases: () => 'Illustrative situations where this kind of work is put to use.', click: () => 'Practices clients commonly pair with this work.', models: (C) => `${C.scope.length} workstreams, commissioned together or one at a time.`,
  timeline: () => 'From first meeting to handover, with a decision at every stage.', expand: () => 'Short answers to what buyers ask before they commission.', news: () => 'Related thinking from across the firm.',
  kpi: () => 'What you can hold NK&CO to on every mandate.', feature: () => 'What changes for your organisation once the work is done.', quote: () => 'Share the brief by email or the enquiry form below.',
  mosaic: () => 'Related work from across the firm.', type: () => 'Each service can be commissioned on its own or as part of a wider mandate.', split: () => 'Concrete documents and decisions, not a general report.',
};
MOD.scorecard = (C) => (<div className="pg-score"><ul>{C.deli.slice(0, 6).map((d) => (<li key={d}><Check size={18} aria-hidden="true" /><span>{d}</span></li>))}</ul><figure><img src={hi(C.rels[0].src)} alt="" loading="lazy" /><figcaption>{C.where}</figcaption></figure></div>);
HEAD.scorecard = [(t) => `What we check before ${t} is signed off.`, (t) => `The ${t} checklist.`, (t) => `Held to account: ${t}.`];
LABEL.scorecard = 'Checklist'; SUB.scorecard = () => 'Each item is reviewed with you before the mandate closes.';
const POOL_MODS = ['scorecard', 'mosaic', 'type', 'split', 'spine', 'arch', 'compare', 'decide', 'cases', 'click', 'models', 'timeline', 'expand', 'news', 'kpi', 'feature'];

// v210 hero parameters. Which composition a page gets is decided in src/lib/heroPlan.js (sibling-aware); everything below only varies how it looks.
const OPS = ['center', 'center 25%', 'center 70%', '30% center', '70% center', '25% 35%', '75% 65%'];
const ZOOMS = [1, 1, 1.07, 1.14];
const PLATE_WORDS = ['Plate', 'Folio', 'Exhibit', 'Study', 'Index', 'Brief'];
export default function PageSystem({ section, category, item, child, nav, col, it, leaf, title, description, crumbs, copy: given }) {
  const path = [section, category, item, child].filter(Boolean).join('/');
  const seed = hash(path);
  const cp = useCopy(section, path, given);
  const r = rng(seed);
  const t = phrase(title);
  const key = getCategoryPool(section, category, item, child);
  const raw = typeof key === 'string' ? CATEGORY_POOLS[key] : key;
  const pool = raw && raw.challenges ? raw : CATEGORY_POOLS.default;
  const rich = getRichContent(section, category, item, child) || {};
  const take = (a, n, o = 0) => { const x = a || []; return x.length ? Array.from({ length: Math.min(n, x.length) }, (_, i) => x[(seed + o + i * 5) % x.length]) : []; };
  const uniq = (a) => a.filter((x, i) => a.indexOf(x) === i);
  const first = (o) => leafPhoto(section, (col || nav.columns[0]).title, o.label, (o.children || [])[0] || '').src;
  const photoOf = leaf ? leafPhoto(section, col.title, it.label, leaf).src : it ? first(it) : col ? first(typeof col.items[0] === 'string' ? { label: col.items[0] } : col.items[0]) : first({ label: (nav.columns[0].items[0].label || nav.columns[0].items[0]), children: [] });
  const rels = relatedPages(NAV_ITEMS, section, col ? col.title : '', it ? it.label : '', leaf || '', 6).map((x) => ({
    to: `/${x.section}/${slugify(x.category)}/${slugify(x.item)}/${slugify(x.child)}`, title: x.child,
    text: getLeafContent(x.section, slugify(x.category), slugify(x.item), slugify(x.child)), src: leafPhoto(x.section, x.category, x.item, x.child).src,
  }));
  // v209 NOTE: `rels` above is empty on every page, because relatedPages() reads `sec.columns` while NAV_ITEMS keeps them under `sec.data.columns`.
  // Left as it is (fixing it would switch on the rels-based section modules on all pages). The two-photo hero asks for its one related photo with the right shape.
  const heroRel = (rels[0] || relatedPages(NAV_ITEMS.map((n) => ({ key: n.key, columns: (n.data && n.data.columns) || [] })), section, col ? col.title : '', it ? it.label : '', leaf || '', 1).map((x) => ({
    to: `/${x.section}/${slugify(x.category)}/${slugify(x.item)}/${slugify(x.child)}`, title: x.child, src: leafPhoto(x.section, x.category, x.item, x.child).src,
  }))[0]) || null;
  // v224: three related pages for the hero card (fills the empty area between the button and the figures). Uses the same picker as the menu preview.
  const heroRels = relatedPages(NAV_ITEMS.map((n) => ({ key: n.key, columns: (n.data && n.data.columns) || [] })), section, col ? col.title : '', it ? it.label : '', leaf || '', 3).map((x) => ({
    to: `/${x.section}/${slugify(x.category)}/${slugify(x.item)}/${slugify(x.child)}`, title: x.child,
  }));
  const C = {
    seed, t, title, lead: (cp && cp.lead) || description, desc: (cp && cp.summary) || description, photo: photoOf, rels, mail: `mailto:info@nkco.ae?subject=${encodeURIComponent('NK&CO enquiry: ' + title)}`,
    where: [nav.title, col && col.title, it && it.label].filter(Boolean).join(' / '),
    pillars: take(getPillars(section), 3), chal: uniq(take(pool.challenges, 4)), deli: uniq(take(pool.deliverables, 6, 3)), outc: uniq(take(pool.outcomes, 4, 5)), faqs: uniq(take(pool.faqs, 4, 9)),
    meth: (rich.methodology || []).slice(0, 5), stats: (rich.stats || []).slice(0, 3), eng: (rich.engagement || []).slice(0, 3), cases: (rich.useCases || []).slice(0, 3),
    scope: ((rich.scope && rich.scope[0] && rich.scope[0].items) || []).slice(0, 6),
  };
  if (cp) {
    C.pillars = cp.pillars.map((x) => ({ title: x.title, desc: x.desc })); C.chal = cp.challenges; C.deli = cp.deliverables; C.outc = cp.outcomes; C.faqs = cp.faqs;
    C.meth = cp.method; C.scope = cp.scope.map((x) => ({ t: x.t, d: x.d })); C.cases = cp.cases; C.eng = cp.engagement; C.dec = cp.decide;
  }
  C.dec = C.dec || C.chal.slice(0, 3).map((c, i) => ({ if: c, first: `First move: ${C.deli[i]}.` }));
  const ok = { scorecard: rels.length >= 1 && C.deli.length >= 4, mosaic: rels.length >= 4, type: C.scope.length >= 4 || C.deli.length >= 4, split: rels.length >= 2 && C.deli.length >= 4, spine: C.meth.length, compare: C.eng.length, cases: C.cases.length, models: C.scope.length, timeline: C.meth.length && C.stats.length, kpi: C.stats.length, click: rels.length >= 3, news: rels.length >= 6, decide: C.dec.length >= 3, feature: C.outc.length >= 3, expand: C.faqs.length, arch: true };
  // v214: institutional page: the same sequence on every page (Summary, Services, Method, Use cases, Scope, Engagement, Questions, Signals, Contact); a module is skipped only when the page has no data for it.
  const FIXED = ['type', 'spine', 'cases', 'models', 'compare', 'expand', 'kpi'];
  const picks = FIXED.filter((k) => POOL_MODS.includes(k) && ok[k]);
  const order = ['exec', ...picks, 'quote'];

  // index of what sits beneath (section, category and item pages)
  let rows = null;
  if (!leaf) {
    rows = (!col ? nav.columns.map((c) => ({ to: `/${section}/${slugify(c.title)}`, title: c.title, text: c.description, src: first(typeof c.items[0] === 'string' ? { label: c.items[0] } : c.items[0]) }))
      : !it ? col.items.map((o) => { const x = typeof o === 'string' ? { label: o, children: [] } : o; return { to: `/${section}/${category}/${slugify(x.label)}`, title: x.label, text: (x.children || []).slice(0, 4).join(', '), src: first(x) }; })
      : (it.children || []).map((c) => ({ to: `/${section}/${category}/${item}/${slugify(c)}`, title: c, text: getLeafContent(section, category, item, slugify(c)), src: leafPhoto(section, col.title, it.label, c).src })));
  }
  const sections = order.map((k, i) => ({ k, id: `pg-${k}`, tone: TONES[i % 2], verbs: shuf(VERBS, r).slice(0, 4), head: HEAD[k][Math.floor(r() * 3)](t) }));
  const isRich = RICH_SECTIONS.includes(section);
  // v628 · related pages for the rich body (the older `rels` above stays empty on purpose, see the v209 note)
  const capRels = isRich ? relatedPages(NAV_ITEMS.map((n) => ({ key: n.key, columns: (n.data && n.data.columns) || [] })), section, col ? col.title : '', it ? it.label : '', leaf || '', 6).map((x) => ({
    to: `/${x.section}/${slugify(x.category)}/${slugify(x.item)}/${slugify(x.child)}`, title: x.child, from: x.item, src: leafPhoto(x.section, x.category, x.item, x.child).src,
  })) : [];
  const P = capPrep({ C, rows, rels: capRels, nav, col, it, leaf }); // v659: every page gets the working OMS tablet scene
  const rail = isRich ? capRail(!!rows, P) : [...(rows ? [{ id: 'pg-index', label: 'Index' }] : []), ...sections.map((s) => ({ id: s.id, label: LABEL[s.k] }))].slice(0, 9);

  // v213: 11 is now the photo + flush panel + small related tile (same inset as 8, same 14px gutters as the rail).
  // v210: eight hero compositions (0 on-photo caption, 1 split card, 6 overlap card, 7 framed plate, 8 photo with inset related photo,
  // 9 chapter numeral, 10 narrow photo column, 11 centred plaque). Which one a page gets comes from heroFor(path) (sibling-aware, see lib/heroPlan.js);
  // everything below is a parameter drawn from `seed`, so a page looks the same on every render.
  let hv = heroFor(path);
  if ((hv === 8 || hv === 11) && !heroRel) hv = 6;
  if (hv === 10) hv = 1; // v211: narrow-column hero retired (dead space); it renders as the split card
  const rh = rng(seed ^ 0x9e3779b9);
  const op = OPS[0]; rh(); // v214: photo always centred, never zoomed
  const zm = ZOOMS[0]; rh();
  const flip = false; rh(); // v214: no mirrored layouts
  const lnkBtn = false; rh();
  const crFoot = false; rh();
  const panKind = 'plain'; rh();
  rh(); const ratio = 1; // v211: photo about 60%, card about 40% (as in the approved design)
  const plWord = PLATE_WORDS[Math.floor(rh() * PLATE_WORDS.length)];
  const vstat = hv === 0 && rh() < 0.45;
  const mkOpts = { 1: ['table'], 6: ['inline', 'table'], 7: ['table', 'inline'], 8: ['col', 'inline'], 9: ['table', 'col'], 10: ['table'], 11: ['inline'] }[hv] || ['col'];
  const mkind = mkOpts[Math.floor(rh() * mkOpts.length)];
  // position of this page among its siblings (numerals / plate labels)
  const lbl = (o) => (typeof o === 'string' ? o : o && o.label);
  const sibs = leaf ? ((it && it.children) || []) : it ? (col.items || []) : col ? nav.columns : NAV_ITEMS;
  const ord = leaf ? sibs.indexOf(leaf) + 1 : it ? sibs.findIndex((o) => lbl(o) === it.label) + 1 : col ? sibs.findIndex((c) => c.title === col.title) + 1 : NAV_ITEMS.findIndex((n) => n.key === section) + 1;
  const total = Math.max(sibs.length, ord, 1);
  const num = toRoman(ord > 0 && ord < 40 ? ord : ((seed >>> 4) % 12) + 1);
  const num2 = String(ord > 0 ? ord : 1).padStart(2, '0');
  const crumbsEl = null; // v227: breadcrumb line removed from every hero (it took too much height)
  const h1 = <h1>{title}</h1>;
  const cta = lnkBtn ? (<a className="pg-lnk pg-lnk-cta" href="#contact">Speak with our team <ArrowRight size={15} aria-hidden="true" /></a>) : (<a className="pg-btn" href="#contact">Speak with our team</a>);
  const leadP = <p className="pg-lead">{C.lead}</p>;
  const acts = <div className="pg-acts">{cta}</div>;
  const relEl = heroRels.length > 0 && (
    <div className="pg-hrel">
      <span className="pg-hrel-eyebrow">Related pages</span>
      <ul>{heroRels.map((o) => (<li key={o.to}><Link to={o.to}><span className="font-serif-display">{o.title}</span><ArrowRight size={15} aria-hidden="true" /></Link></li>))}</ul>
    </div>
  );
  const statEls = (x) => (<div key={x.label}><b className={String(x.value).length > 9 ? 'long' : ''}>{x.value}</b><span>{x.label}</span></div>);
  const metBy = (kind) => C.stats.length > 0 && (<div className={`pg-metrics pg-m-${kind}`}>{C.stats.map(statEls)}</div>);
  const metBand = C.stats.length > 0 && (<div className="pg-metrics pg-metrics-band">{C.stats.map(statEls)}<a className="pg-mcta" href="#contact">Start the conversation <ArrowRight size={16} aria-hidden="true" /></a></div>);
  const crf = (c) => (<div className="pg-crf">{c}</div>);
  const fig = (extra) => (<figure className="pg-fig"><img src={hi(photoOf)} alt="" />{extra}<PageRail items={rail} /></figure>);
  const fl = flip ? ' pg-flip' : '';
  const txt = (m) => (<>{!crFoot && crumbsEl}{h1}{leadP}{acts}{relEl}{m}{crFoot && crf(crumbsEl)}</>);
  let heroBody;
  if (hv === 0) heroBody = (<div className={`pg-on${vstat && C.stats.length > 0 ? ' pg-on-v' : ''}`}>{fig(null)}<div className="pg-ocap">{crumbsEl}{h1}{leadP}{acts}{relEl}</div>{vstat && C.stats.length > 0 ? <div className="pg-mvw">{metBy('vert')}</div> : <div className="pg-band pg-band-1">{metBand}</div>}</div>);
  else if (hv === 6) heroBody = (<div className={`pg-ov${fl}`}>{fig(null)}<div className="pg-ovcard">{txt(metBy(mkind))}</div></div>);
  else if (hv === 7) heroBody = (<div className={`pg-plate${fl}`}>{fig(null)}<div className="pg-plate-txt"><span className="pg-plno" aria-hidden="true">{plWord} {num}</span>{txt(metBy(mkind))}</div></div>);
  else if (hv === 8) heroBody = (<div className={`pg-two${fl}`}>{fig(null)}<div className="pg-two-txt">{txt(metBy(mkind))}</div></div>);
  else if (hv === 9) heroBody = (<div className={`pg-num${fl}`}>{fig(null)}<div className="pg-num-txt"><div className="pg-bignum" aria-hidden="true"><b>{num2}</b><span>/ {String(total).padStart(2, '0')}</span></div>{!crFoot && crumbsEl}{h1}{leadP}{acts}{relEl}{metBy(mkind)}{crFoot && crf(crumbsEl)}</div></div>);
  else if (hv === 10) heroBody = (<div className={`pg-col${fl}`}>{fig(null)}<div className="pg-col-txt">{!crFoot && crumbsEl}{h1}<div className="pg-col-ld">{leadP}{acts}</div>{metBy(mkind)}{crFoot && crf(crumbsEl)}</div></div>);
  else if (hv === 11) heroBody = (<div className={`pg-ct${fl}`}>{fig(null)}<div className="pg-plaque">{crumbsEl}{h1}{leadP}{acts}{relEl}{metBy('inline')}</div></div>);
  else heroBody = (<div className={`pg-split-hero pg-r${ratio} pg-pan-${panKind}${fl}`}>{fig(null)}<div className="pg-info">{!crFoot && crumbsEl}{h1}{leadP}{acts}{relEl}{metBy(mkind)}{crFoot && crf(crumbsEl)}</div></div>);

  return (
    <>
      <section aria-label={title} style={{ '--op': op, '--zm': zm }} className={`pg-hero pg-hv${hv} ${'pg-hl'}`}><div className="pg-wrap">{heroBody}</div></section>
      {isRich ? (
        <>
          <CapBody P={P} C={C} hasRows={!!rows} t={t} title={title} where={[nav.title, col && col.title, it && it.label].filter(Boolean)} />
          {sections.filter((s) => s.k === 'quote').map((s) => (
            <section id={s.id} key={s.k} className={`pg-sec pg-${s.tone} pg-s-${s.k}`} style={{ backgroundImage: `linear-gradient(rgba(18,19,22,.84),rgba(18,19,22,.84)),url(${hi(photoOf)})` }}>
              <div className="pg-wrap">
                <div className="pg-head hv0" data-n="•"><span className="pg-eyebrow">{LABEL[s.k]}</span><h2>{s.head}</h2><p className="pg-sub">{SUB[s.k](C)}</p></div>
                {MOD[s.k](C)}
              </div>
            </section>
          ))}
        </>
      ) : (
        <>
        {rows && (<section id="pg-index" className="pg-sec pg-paper"><div className="pg-wrap"><div className="pg-head hv0"><h2>Inside {t}.</h2><p className="pg-sub">{rows.length} pages sit directly beneath this one.</p></div><Tiles rows={rows} cls={rows.length % 3 === 1 || rows.length > 6 ? 'pg-t3' : 'pg-t2'} /></div></section>)}
        {sections.map((s, i) => (
          <React.Fragment key={s.k}>
          <section id={s.id} className={`pg-sec pg-${s.tone} pg-s-${s.k}`} style={s.k === 'quote' ? { backgroundImage: `linear-gradient(rgba(18,19,22,.84),rgba(18,19,22,.84)),url(${hi(photoOf)})` } : undefined}>
            <div className="pg-wrap">
              <div className="pg-head hv0" data-n={toRoman(i + 1)}><span className="pg-eyebrow">{toRoman(i + 1)} &nbsp;/&nbsp; {LABEL[s.k]}</span><h2>{s.head}</h2><p className="pg-sub">{SUB[s.k](C)}</p></div>
              {MOD[s.k](C)}
            </div>
          </section>
          {i === 0 && <CapWorkspace P={P} title={title} where={[nav.title, col && col.title, it && it.label].filter(Boolean)} />}
          </React.Fragment>
        ))}
        </>
      )}
    </>
  );
}
