import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Play, Mic, FileText, Download, Clock, Star } from 'lucide-react';
import { toRoman } from '../lib/roman';
import { topicPlate } from '../lib/topicPlate';
import { PRIV, PRIV_ALL, PRIV_FORMATS, privHref, privArt } from '../data/privileges';
import { seriesOf, slug } from '../data/intelLibrary';
import { PageRail } from './PageSystem';

// Intelligence series and piece pages (the former Privileges templates). Same hero and section system as the rest of the site
// (pg-hero / pg-sec), with a few pp-* additions in src/styles/privileges.css. Content comes from src/data/privileges.js and src/data/intelOwn.js;
// the Intelligence structure and URLs come from src/data/intelLibrary.js. Rendered by SectionPage for:
//   /intelligence/<desk>/<collection>/<series>           a series, course or library
//   /intelligence/<desk>/<collection>/<series>/<piece>   one episode, lesson, guide, video, tool or report

const SEC = 'privileges'; // colour theme key for the drawn plates (src/lib/topicPlate.js)
const TONES = ['white', 'paper'];
const MAIL = (subject, body) => `mailto:info@nkco.ae?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
const lc = (x) => (/^[A-Z][A-Z]/.test(x) ? x : x.charAt(0).toLowerCase() + x.slice(1));
const covers = (p, f) => `${f.label}, ${p.minutes} ${f.unit}. It covers ${lc(p.points[0])}, ${lc(p.points[1])} and ${lc(p.points[2])}.`;
const hash = (str) => { let h = 7; for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0; return h; };
const mins = (n) => (n >= 60 ? `${Math.floor(n / 60)} h ${n % 60 ? `${n % 60} min` : ''}`.trim() : `${n} min`);
const photo = (cat, item, child) => { const a = privArt(cat && cat.title, item && item.label, child); return topicPlate(SEC, cat ? cat.title : '', item ? item.label : '', child || '', a.motif, a.accent); };
const plural = (cat) => ({ data: 'data notes', publication: 'editions', podcast: 'episodes', course: 'lessons', guide: 'guides', video: 'videos', tool: 'tools', report: 'reports', event: 'sessions', access: 'sessions' }[cat.format]);
const itemOne = (cat) => ({ data: 'collection', publication: 'publication', podcast: 'series', course: 'course', guide: 'collection', video: 'library', tool: 'toolkit', report: 'collection', event: 'programme', access: 'programme' }[cat.format]);
// invitation-based formats: the page asks for a place instead of playing or downloading
const invite = (cat) => cat.format === 'access' || cat.format === 'event';
const totalMins = (items) => items.reduce((a, it) => a + it.list.reduce((b, p) => b + p.minutes, 0), 0);

const Tiles = ({ rows, cls = '' }) => (
  <div className={`pg-tiles ${cls}`}>
    {rows.map((r, i) => (
      <Link key={r.to} to={r.to} className="pg-tile">
        {r.src && <img src={r.src} alt="" loading="lazy" />}
        <div>
          <span className="pg-rn">{toRoman(i + 1)}</span>
          <h3>{r.title}</h3>
          {r.text && <p>{r.text}</p>}
          <span className="pg-go">{r.go || 'Explore'} <ArrowRight size={14} aria-hidden="true" /></span>
        </div>
      </Link>
    ))}
  </div>
);

// one row of a list of pieces
const PieceRow = ({ rec, n, current, showSeries }) => {
  const p = rec.piece;
  const f = PRIV_FORMATS[rec.cat.format];
  return (
    <li className={`pp-row${current ? ' is-current' : ''}`}>
      <Link to={privHref(rec)} aria-current={current ? 'page' : undefined}>
        <span className="pp-n">{String(n).padStart(2, '0')}</span>
        <span className="pp-t">
          <b className="font-serif-display">{p.title}</b>
          <span>{p.description}</span>
          {showSeries && <i>{rec.item.label}</i>}
        </span>
        <span className="pp-m"><Clock size={13} aria-hidden="true" /> {p.minutes} {f.unit}</span>
        <ArrowRight size={18} className="pp-a" aria-hidden="true" />
      </Link>
    </li>
  );
};

const PieceCard = ({ rec }) => {
  const f = PRIV_FORMATS[rec.cat.format];
  return (
    <Link to={privHref(rec)} className="pp-card">
      <img src={photo(rec.cat, rec.item, rec.piece.title)} alt="" loading="lazy" />
      <div>
        <span className="pp-tag">{f.label} &middot; {rec.piece.minutes} {f.unit}</span>
        <h3>{rec.piece.title}</h3>
        <p>{rec.piece.description}</p>
        <span className="pg-go">{f.cta} <ArrowRight size={14} aria-hidden="true" /></span>
      </div>
    </Link>
  );
};

// What the person gets: the media panel at the top of a piece page. Nothing pretends to play: without a real file the panel offers it on request.
function Media({ rec }) {
  const { cat, item, piece: p } = rec;
  const f = PRIV_FORMATS[cat.format];
  const m = p.media;
  const isAccess = invite(cat);
  const ask = isAccess
    ? MAIL(`NK&CO Intelligence: invitation to ${p.title}`, `Hello,\n\nI would like to be invited to "${p.title}" (${item.label}).\n\nName:\nCompany:\nRole:\n`)
    : MAIL(`NK&CO Intelligence: ${p.title}`, `Hello,\n\nPlease send me the ${f.label.toLowerCase()} "${p.title}" (${item.label}).\n\nName:\nCompany:\n`);
  const poster = photo(cat, item, p.title);
  const isAV = cat.format === 'podcast' || cat.format === 'course' || cat.format === 'video';
  return (
    <div className={`pp-media pp-media-${cat.format}`}>
      <div className="pp-stage" style={cat.format !== 'podcast' ? { backgroundImage: `linear-gradient(rgba(18,19,22,.35),rgba(18,19,22,.6)),url("${poster}")` } : undefined}>
        {m && m.kind === 'video' ? (
          <video controls preload="metadata" poster={m.poster || undefined} src={m.src} aria-label={p.title} />
        ) : m && m.kind === 'audio' ? (
          <div className="pp-audio"><Mic size={30} aria-hidden="true" /><audio controls preload="none" src={m.src} aria-label={p.title} /></div>
        ) : (
          <div className="pp-pending">
            <span className="pp-bigicon" aria-hidden="true">{isAccess ? <Star size={28} /> : isAV ? <Play size={28} /> : <FileText size={28} />}</span>
            <b className="font-serif-display">{p.title}</b>
            <span>{f.label} &middot; {item.label} &middot; {p.minutes} {f.unit}</span>
          </div>
        )}
      </div>
      <div className="pp-actions">
        {m && m.kind === 'file' ? (
          <a className="pg-btn" href={m.src} download><Download size={16} aria-hidden="true" />&nbsp;{f.cta}</a>
        ) : m ? (
          <span className="pp-note">{f.verb === 'Listen' ? 'Press play above to listen.' : 'Press play above to watch.'}</span>
        ) : (
          <>
            <a className="pg-btn" href={ask}>{isAccess ? f.cta : isAV ? 'Request the recording' : f.cta}</a>
            <span className="pp-note">{isAccess ? 'By invitation, for clients and members of NK&CO. Tell us who you are and we will reply with dates.' : isAV ? 'The recording is released on request while the library is being published.' : 'Sent by email on request while the library is being published.'}</span>
          </>
        )}
        {p.briefing && (
          <Link className="pg-lnk" to={`/intelligence/nk-co-briefing/episode/${p.briefing}`}>Open on the NK&amp;CO Briefing <ArrowUpRight size={15} aria-hidden="true" /></Link>
        )}
      </div>
    </div>
  );
}

export default function PrivilegePage({ recOverride, crumbs }) {
  const rec = recOverride;
  const level = rec.level; // item | piece
  const { cat, item: itm, piece, home } = rec;
  const f = PRIV_FORMATS[cat.format];
  const cats = PRIV.categories;
  const base = `/intelligence/${home.cat.slug}/${home.coll.slug}`;
  const itemTo = (label) => `${base}/${slug(label)}`;

  // ---------- hero ----------
  let title; let lead; let img; let cta; let related; let relTitle; let metrics;
  if (level === 'item') {
    title = itm.label; lead = itm.lead; img = photo(cat, itm);
    cta = { label: `See all ${plural(cat)}`, href: '#pp-all' };
    relTitle = 'Start with'; related = itm.list.slice(0, 3).map((p) => ({ to: privHref({ path: p.path }), title: p.title }));
    metrics = [[String(itm.list.length), plural(cat)], [mins(totalMins([itm])), 'in total'], [f.label, `format \u00b7 ${itemOne(cat)}`]];
  } else {
    title = piece.title; lead = piece.description; img = photo(cat, itm, piece.title);
    cta = { label: f.cta, href: '#pp-media' };
    const sibs = itm.list.filter((p) => p !== piece);
    relTitle = `More in ${itm.label}`; related = sibs.slice(0, 3).map((p) => ({ to: privHref({ path: p.path }), title: p.title }));
    const pos = itm.list.indexOf(piece) + 1;
    metrics = [[String(piece.minutes), f.unit], [f.label, itm.label.length > 22 ? 'part of a ' + itemOne(cat) : itm.label], [`${pos} of ${itm.list.length}`, `in this ${itemOne(cat)}`]];
  }


  // ---------- sections ----------
  const secs = [];
  const add = (id, label, head, sub, body) => secs.push({ id, label, head, sub, body });


  if (level === 'item') {
    add('pp-all', 'All', `Every ${f.noun.toLowerCase()} in ${itm.label}.`, `${itm.list.length} ${plural(cat)}, ${mins(totalMins([itm]))} in total.`, (
      <ul className="pp-list">{itm.list.map((p, n) => <PieceRow key={p.path} rec={{ cat, item: itm, piece: p, path: p.path }} n={n + 1} />)}</ul>
    ));
    add('pp-about', 'About', `About ${itm.label}.`, itm.blurb, (
      <div className="pg-exec"><article><p className="pg-big">{itm.lead}</p></article>
        <aside className="pg-aside"><h3>Who it is for</h3><p>{itm.who}</p>
          <ul><li>{f.label} &middot; {itm.list.length} {plural(cat)}</li><li>{mins(totalMins([itm]))} in total</li></ul>
          <a className="pg-btn" href={MAIL(`NK&CO Intelligence: ${itm.label}`, `Hello,\n\nI would like to hear about new material in "${itm.label}".\n\nName:\nCompany:\n`)}>Tell me about new {plural(cat)}</a></aside></div>
    ));
    // siblings in the same Intelligence collection (falls back to the rest of the format when the collection has no other series)
    const sibs = home.coll.children.filter((l) => l !== itm.label && seriesOf(l));
    const others = sibs.length ? sibs.map((l) => seriesOf(l)) : cat.items.filter((i) => i !== itm).map((i) => ({ cat, item: i }));
    add('pp-more', 'More', `Other series in ${home.coll.label}.`, `More like ${itm.label}, from the same collection on the ${home.cat.title} desk.`, (
      <Tiles cls={others.length % 3 === 0 ? 'pg-t3' : 'pg-t2'} rows={others.map((o) => ({ to: sibs.length ? itemTo(o.item.label) : privHref({ path: `privileges/${slug(o.cat.title)}/${slug(o.item.label)}` }), title: o.item.label, text: o.item.blurb, src: photo(o.cat, o.item) }))} />
    ));
  }

  if (level === 'piece') {
    add('pp-media', f.label, invite(cat) ? 'Ask for your place.' : `${f.verb} ${piece.title}.`, `${itm.label}, ${f.noun.toLowerCase()} ${itm.list.indexOf(piece) + 1}: ${piece.minutes} ${f.unit}.`, <Media rec={rec} />);
    add('pp-points', 'Inside', `What you take from ${piece.title}.`, `The three points of \u201c${piece.title}\u201d, in the order it makes them.`, (
      <div className="pg-exec"><article><p className="pg-big">{covers(piece, f)}</p><p>Part {itm.list.indexOf(piece) + 1} of {itm.list.length} in {itm.label}. Who it is for: {itm.who}</p></article>
        <aside className="pg-aside"><h3>In this {f.noun.toLowerCase()}</h3>
          <ul>{piece.points.map((x) => <li key={x}>{x}</li>)}</ul>
          <a className="pg-btn" href={MAIL(`NK&CO Intelligence: a question on ${piece.title}`, `Hello,\n\nI have a question about "${piece.title}".\n\n`)}>Ask the team a question</a></aside></div>
    ));
    const idx = itm.list.indexOf(piece);
    const prev = itm.list[idx - 1]; const next = itm.list[idx + 1];
    add('pp-series', 'Sequence', `The rest of ${itm.label}.`, `${piece.title} is ${f.noun.toLowerCase()} ${idx + 1} of ${itm.list.length}.`, (
      <>
        <ul className="pp-list">{itm.list.map((p, n) => <PieceRow key={p.path} rec={{ cat, item: itm, piece: p, path: p.path }} n={n + 1} current={p === piece} />)}</ul>
        <div className="pp-pn">
          {prev ? <Link to={privHref({ path: prev.path })}><span>Previous</span><b className="font-serif-display">{prev.title}</b></Link> : <i />}
          {next ? <Link to={privHref({ path: next.path })} className="pp-pn-next"><span>Next</span><b className="font-serif-display">{next.title}</b></Link> : <i />}
        </div>
      </>
    ));
    // pieces from other formats, a stable pick for this page
    const others = cats.filter((c) => c !== cat);
    const picks = others.map((c) => {
      const pool = PRIV_ALL.filter((r) => r.cat === c);
      return pool[hash(piece.path + c.title) % pool.length];
    }).slice(0, 3);
    add('pp-more', 'Continue', `After ${piece.title}, try another format.`, `Other ways to take in the ideas behind ${itm.label}.`, (
      <div className="pp-cards">{picks.map((r) => <PieceCard key={r.path} rec={r} />)}</div>
    ));
  }

  const rail = secs.map((s) => ({ id: s.id, label: s.label }));

  return (
    <>
      <section aria-label={title} className="pg-hero pg-hv1 pg-hl pp-hero">
        <div className="pg-wrap">
          <div className="pg-split-hero pg-r1 pg-pan-plain">
            <figure className="pg-fig"><img src={img} alt="" /><PageRail items={rail} /></figure>
            <div className="pg-info">
              <nav className="pp-crumbs" aria-label="Breadcrumb">
                {crumbs.map((c, n) => (<React.Fragment key={`${n}-${c.label}`}>{n > 0 && ' / '}{c.to ? <Link to={c.to}>{c.label}</Link> : <span>{c.label}</span>}</React.Fragment>))}
              </nav>
              <h1>{title}</h1>
              <p className="pg-lead">{lead}</p>
              <div className="pg-acts"><a className="pg-btn" href={cta.href}>{cta.label}</a></div>
              {related.length > 0 && (
                <div className="pg-hrel">
                  <span className="pg-hrel-eyebrow">{relTitle}</span>
                  <ul>{related.map((o) => (<li key={o.to}><Link to={o.to}><span className="font-serif-display">{o.title}</span><ArrowRight size={15} aria-hidden="true" /></Link></li>))}</ul>
                </div>
              )}
              <div className="pg-metrics pg-m-table">{metrics.map(([b, s]) => (<div key={s}><b className={String(b).length > 9 ? 'long' : ''}>{b}</b><span>{s}</span></div>))}</div>
            </div>
          </div>
        </div>
      </section>

      {secs.map((s, i) => (
        <section id={s.id} key={s.id} className={`pg-sec pg-${TONES[i % 2]} pp-sec`}>
          <div className="pg-wrap">
            <div className="pg-head hv0" data-n={toRoman(i + 1)}>
              <span className="pg-eyebrow">{toRoman(i + 1)} &nbsp;/&nbsp; {s.label}</span>
              <h2>{s.head}</h2>
              <p className="pg-sub">{s.sub}</p>
            </div>
            {s.body}
          </div>
        </section>
      ))}
    </>
  );
}
