import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { toRoman } from '../lib/roman';
import { topicPlate } from '../lib/topicPlate';
import { PRIV_ALL, PRIV_FORMATS } from '../data/privileges';
import { INTEL, seriesOf, countPieces, artForSeries } from '../data/intelLibrary';
import { PageRail } from './PageSystem';

// Intelligence hub pages: the section, a category and a collection. Series and piece pages are PrivilegePage (same template, Intelligence routes).
const TONES = ['white', 'paper'];
const slug = (s) => String(s).toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const plate = (c, k, s) => { const a = s ? artForSeries(s) : null; return topicPlate('intelligence', c ? c.title : '', k ? k.label : '', s || '', a ? a.motif : (c && c.motif) || 'search', a ? a.accent : undefined); };
const Tiles = ({ rows, cls = 'pg-t3' }) => (
  <div className={`pg-tiles ${cls}`}>
    {rows.map((r, i) => (
      <Link key={r.to} to={r.to} className="pg-tile">
        {r.src && <img src={r.src} alt="" loading="lazy" />}
        <div><span className="pg-rn">{toRoman(i + 1)}</span><h3>{r.title}</h3>{r.text && <p>{r.text}</p>}<span className="pg-go">{r.go || 'Open'} <ArrowRight size={14} aria-hidden="true" /></span></div>
      </Link>
    ))}
  </div>
);
const collLabels = (k) => (k.own ? [] : k.children);
const catPieces = (c) => c.collections.reduce((n, k) => n + (k.own ? k.children.length : countPieces(k.children)), 0);
const catSeries = (c) => c.collections.reduce((n, k) => n + k.children.length, 0);
const first = (label) => { const s = seriesOf(label); return s && s.item.list && s.item.list[0]; };
const MAIL = (t) => `mailto:info@nkco.ae?subject=${encodeURIComponent('NK&CO Intelligence: ' + t)}`;

export default function IntelHub({ level, cat, coll }) {
  const base = '/intelligence';
  const cHref = (c) => `${base}/${c.slug}`;
  const kHref = (c, k) => `${base}/${c.slug}/${k.slug}`;
  const sHref = (c, k, l) => `${base}/${c.slug}/${k.slug}/${slug(l)}`;
  const secs = [];
  const add = (id, label, head, sub, body) => secs.push({ id, label, head, sub, body });
  let title; let lead; let img; let metrics; let related; let relTitle; let cta;
  const allPieces = PRIV_ALL.length;

  if (level === 'section') {
    title = 'Intelligence'; lead = 'Research, data, publications, guides, tools, masterclasses, events and podcasts on the UAE and the GCC, for business owners and decision-makers. Information only, not advice.';
    img = plate(null); cta = { label: 'Browse the six desks', href: '#ih-desks' };
    related = INTEL.slice(0, 3).map((c) => ({ to: cHref(c), title: c.title })); relTitle = 'Start with';
    metrics = [[String(INTEL.length), 'desks, from research to podcasts'], [String(INTEL.reduce((n, c) => n + catSeries(c), 0)), 'series, courses and libraries'], [String(allPieces), 'pieces to read, watch, use or join']];
    add('ih-desks', 'Desks', 'Six desks, one library.', 'Each desk groups what belongs together. Open one to see every collection inside it.', <Tiles rows={INTEL.map((c) => ({ to: cHref(c), title: c.title, text: c.description, src: plate(c), go: `Open ${c.title}` }))} />);
    add('ih-start', 'Start here', 'A good first piece from every desk.', 'One place to begin in each part of the library.', (
      <Tiles rows={INTEL.map((c) => { const k = c.collections.find((x) => !x.own) || c.collections[0]; const l = k.children[0]; const p = first(l); return p ? { to: `${sHref(c, k, l)}/${slug(p.title)}`, title: p.title, text: p.description, src: plate(c, k, l), go: PRIV_FORMATS[seriesOf(l).cat.format].cta } : null; }).filter(Boolean)} />
    ));
    add('ih-count', 'In the library', 'What is in the library.', 'Counts update as pieces are added.', (
      <div className="pg-kpi pp-kpi">{INTEL.map((c) => (<div key={c.title}><b>{catPieces(c)}</b><h3>{c.title}</h3><p>{catPieces(c)} pieces across {c.collections.length} collections.</p></div>))}</div>
    ));
    add('ih-brief', 'Podcast', 'The NK&CO Briefing.', 'The full podcast platform, with every series, topic and guest voice.', (
      <div className="pp-banner"><div><b className="font-serif-display">The NK&amp;CO Briefing</b><span>Dubai, the UAE and the GCC in conversation.</span></div><Link className="pg-btn" to="/intelligence/nk-co-briefing">Enter the Briefing</Link></div>
    ));
  } else if (level === 'category') {
    title = cat.title; lead = cat.description; img = plate(cat); cta = { label: 'See the collections', href: '#ih-coll' };
    related = cat.collections.map((k) => ({ to: kHref(cat, k), title: k.label })); relTitle = 'Collections';
    metrics = [[String(cat.collections.length), 'collections'], [String(catSeries(cat)), 'series, courses and libraries'], [String(catPieces(cat)), 'pieces in total']];
    add('ih-coll', 'Collections', `The collections inside ${cat.title}.`, 'Open one to see the series, courses and libraries it holds.', <Tiles rows={cat.collections.map((k) => ({ to: kHref(cat, k), title: k.label, text: `${k.blurb} ${k.children.length} ${k.own ? 'chapters' : 'series and libraries'}.`, src: plate(cat, k, k.children[0]), go: 'Open collection' }))} />);
    cat.collections.filter((k) => !k.own).forEach((k) => add(`ih-${k.slug}`, k.label.split(' & ')[0], `${k.label}.`, k.lead, <Tiles rows={k.children.map((l) => ({ to: sHref(cat, k, l), title: l, text: seriesOf(l).item.blurb, src: plate(cat, k, l), go: 'Open' }))} />));
    add('ih-more', 'More', 'More from Intelligence.', 'Other desks in the library.', <Tiles cls="pg-t2" rows={INTEL.filter((c) => c !== cat).slice(0, 4).map((c) => ({ to: cHref(c), title: c.title, text: c.description, src: plate(c) }))} />);
  } else {
    const c = cat; const k = coll;
    title = k.label; lead = k.lead; img = plate(c, k, k.children[0]); cta = { label: 'See what is inside', href: '#ih-in' };
    related = k.children.slice(0, 3).map((l) => ({ to: sHref(c, k, l), title: l })); relTitle = 'Start with';
    metrics = [[String(k.children.length), k.own ? 'chapters' : 'series and libraries'], [String(k.own ? k.children.length : countPieces(k.children)), 'pieces'], [c.title, 'desk']];
    add('ih-in', 'Inside', `Inside ${k.label}.`, `${k.children.length} ${k.own ? 'chapters' : 'series and libraries'}. Open one to see everything in it.`, <Tiles rows={k.children.map((l) => { const s = seriesOf(l); return { to: sHref(c, k, l), title: l, text: s ? `${s.item.blurb} ${s.item.pieces.length} ${PRIV_FORMATS[s.cat.format].noun.toLowerCase()}s.` : '', src: plate(c, k, l), go: 'Open' }; })} />);
    add('ih-more', 'More', `Other collections in ${c.title}.`, 'Keep going on the same desk.', <Tiles cls="pg-t2" rows={c.collections.filter((x) => x !== k).map((x) => ({ to: kHref(c, x), title: x.label, text: x.blurb, src: plate(c, x, x.children[0]) }))} />);
    add('ih-ask', 'Ask', 'Tell us what you need.', 'If something you need is not here yet, write to us and a partner will reply.', <div className="pp-sub"><p className="pg-big">Tell us the topic, the decision in front of you and who it is for.</p><a className="pg-btn" href={MAIL(k.label)}>Write to the team</a></div>);
  }
  const rail = secs.map((s) => ({ id: s.id, label: s.label }));
  return (
    <>
      <section aria-label={title} className="pg-hero pg-hv1 pg-hl pp-hero"><div className="pg-wrap"><div className="pg-split-hero pg-r1 pg-pan-plain">
        <figure className="pg-fig"><img src={img} alt="" /><PageRail items={rail} /></figure>
        <div className="pg-info">
          {level !== 'section' && (<nav className="pp-crumbs" aria-label="Breadcrumb"><Link to="/intelligence">Intelligence</Link>{cat && <>{' / '}{level === 'category' ? <span>{cat.title}</span> : <Link to={cHref(cat)}>{cat.title}</Link>}</>}{coll && <>{' / '}<span>{coll.label}</span></>}</nav>)}
          <h1>{title}</h1><p className="pg-lead">{lead}</p>
          <div className="pg-acts"><a className="pg-btn" href={cta.href}>{cta.label}</a></div>
          {related.length > 0 && (<div className="pg-hrel"><span className="pg-hrel-eyebrow">{relTitle}</span><ul>{related.map((o) => (<li key={o.to}><Link to={o.to}><span className="font-serif-display">{o.title}</span><ArrowRight size={15} aria-hidden="true" /></Link></li>))}</ul></div>)}
          <div className="pg-metrics pg-m-table">{metrics.map(([b, s]) => (<div key={s}><b className={String(b).length > 9 ? 'long' : ''}>{b}</b><span>{s}</span></div>))}</div>
        </div></div></div></section>
      {secs.map((s, i) => (
        <section id={s.id} key={s.id} className={`pg-sec pg-${TONES[i % 2]} pp-sec`}><div className="pg-wrap">
          <div className="pg-head hv0" data-n={toRoman(i + 1)}><span className="pg-eyebrow">{toRoman(i + 1)} &nbsp;/&nbsp; {s.label}</span><h2>{s.head}</h2><p className="pg-sub">{s.sub}</p></div>{s.body}
        </div></section>
      ))}
    </>
  );
}
