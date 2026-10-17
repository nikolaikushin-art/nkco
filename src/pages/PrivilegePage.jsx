import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Play, Mic, FileText, Download, Clock, Star } from 'lucide-react';
import { toRoman } from '../lib/roman';
import { topicPlate } from '../lib/topicPlate';
import { PRIV, PRIV_ALL, PRIV_FORMATS, privRecord, privHref, privArt } from '../data/privileges';
import { PageRail } from './PageSystem';

// Privileges pages (podcasts and instructional material). Same hero and section system as the rest of the site
// (pg-hero / pg-sec), with a few pp-* additions in src/privileges.css. All content comes from src/data/privileges.js.
//   /privileges                       landing
//   /privileges/<category>            a format (Podcasts, Masterclasses, ...)
//   /privileges/<category>/<item>     a series, course or library
//   /privileges/<category>/<item>/<piece>   one episode, lesson, guide, video or tool

const SEC = 'privileges';
const TONES = ['white', 'paper'];
const MAIL = (subject, body) => `mailto:info@nkco.ae?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
const lc = (x) => (/^[A-Z][A-Z]/.test(x) ? x : x.charAt(0).toLowerCase() + x.slice(1));
const covers = (p, f) => `${f.label}, ${p.minutes} ${f.unit}. It covers ${lc(p.points[0])}, ${lc(p.points[1])} and ${lc(p.points[2])}.`;
const hash = (str) => { let h = 7; for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0; return h; };
const mins = (n) => (n >= 60 ? `${Math.floor(n / 60)} h ${n % 60 ? `${n % 60} min` : ''}`.trim() : `${n} min`);
const photo = (cat, item, child) => { const a = privArt(cat && cat.title, item && item.label, child); return topicPlate(SEC, cat ? cat.title : '', item ? item.label : '', child || '', a.motif, a.accent); };
const plural = (cat) => ({ podcast: 'episodes', course: 'lessons', guide: 'guides', video: 'videos', tool: 'tools', report: 'reports', event: 'sessions', access: 'sessions' }[cat.format]);
const itemKind = (cat) => ({ podcast: 'series', course: 'courses', guide: 'collections', video: 'libraries', tool: 'toolkits', report: 'collections', event: 'programmes', access: 'programmes' }[cat.format]);
const itemOne = (cat) => ({ podcast: 'series', course: 'course', guide: 'collection', video: 'library', tool: 'toolkit', report: 'collection', event: 'programme', access: 'programme' }[cat.format]);
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
    ? MAIL(`NK&CO Privileges: invitation to ${p.title}`, `Hello,\n\nI would like to be invited to "${p.title}" (${item.label}).\n\nName:\nCompany:\nRole:\n`)
    : MAIL(`NK&CO Privileges: ${p.title}`, `Hello,\n\nPlease send me the ${f.label.toLowerCase()} "${p.title}" (${item.label}).\n\nName:\nCompany:\n`);
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

export default function PrivilegePage({ category, item, child }) {
  const rec = category ? privRecord(SEC, category, item, child) : null;

  // ---------- not found ----------
  if (category && !rec) {
    return (
      <section className="pg-sec pg-white"><div className="pg-wrap">
        <div className="pg-head hv0"><span className="pg-eyebrow">Privileges</span><h2>This page is not in the library.</h2><p className="pg-sub">It may have moved. Start again from the Privileges home.</p></div>
        <Link className="pg-btn" to="/privileges">Go to Privileges</Link>
      </div></section>
    );
  }

  const level = !rec ? 'section' : rec.level; // section | category | item | piece
  const cat = rec && rec.cat;
  const itm = rec && rec.item;
  const piece = rec && rec.piece;
  const f = cat && PRIV_FORMATS[cat.format];

  // ---------- hero ----------
  let title; let lead; let img; let cta; let related; let relTitle; let metrics;
  const cats = PRIV.categories;
  const catHref = (c) => '/' + PRIV_ALL.find((r) => r.cat === c).path.split('/').slice(0, 2).join('/');
  const itemHref = (c, i) => '/' + PRIV_ALL.find((r) => r.item === i).path.split('/').slice(0, 3).join('/');
  const allPieces = PRIV_ALL.length;

  if (level === 'section') {
    title = PRIV.title; lead = PRIV.description; img = photo(null);
    cta = { label: 'Browse the library', href: '#pp-formats' };
    relTitle = 'Start with'; related = cats.slice(0, 3).map((c) => ({ to: catHref(c), title: c.title }));
    metrics = [[String(allPieces), 'pieces to listen to, watch, read, use or join'], [String(cats.length), 'formats, from podcasts to private sessions'], [mins(totalMins(cats.flatMap((c) => c.items))), 'of audio, video, reading and live sessions']];
  } else if (level === 'category') {
    title = cat.title; lead = cat.description; img = photo(cat);
    cta = { label: `See all ${plural(cat)}`, href: '#pp-all' };
    relTitle = `Our ${itemKind(cat)}`; related = cat.items.slice(0, 3).map((i) => ({ to: itemHref(cat, i), title: i.label }));
    metrics = [[String(cat.items.length), itemKind(cat)], [String(cat.items.reduce((a, i) => a + i.list.length, 0)), plural(cat)], [mins(totalMins(cat.items)), 'in total']];
  } else if (level === 'item') {
    title = itm.label; lead = itm.lead; img = photo(cat, itm);
    cta = { label: `See all ${plural(cat)}`, href: '#pp-all' };
    relTitle = `Start with`; related = itm.list.slice(0, 3).map((p) => ({ to: privHref({ path: p.path }), title: p.title }));
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

  if (level === 'section') {
    add('pp-formats', 'Formats', `${['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'][cats.length] || cats.length} ways to learn and connect with NK&CO.`, 'Choose how you want to take it in: listen on the move, follow a course, read a guide or report, watch a video, open a working file, join a meeting or programme, or ask for a place at a private session.', (
      <Tiles cls="pg-t3" rows={cats.map((c) => ({ to: catHref(c), title: c.title, text: c.description, src: photo(c), go: `Open ${c.title}` }))} />
    ));
    const starts = cats.map((c) => PRIV_ALL.find((r) => r.cat === c));
    add('pp-start', 'Start here', 'A good first piece from every format.', 'One place to begin in each part of the library.', (
      <div className="pp-cards">{starts.map((r) => <PieceCard key={r.path} rec={r} />)}</div>
    ));
    add('pp-library', 'Library', 'What is in the library.', 'Counts update as pieces are added.', (
      <div className="pg-kpi pp-kpi">{cats.map((c) => {
        const n = c.items.reduce((a, i) => a + i.list.length, 0);
        return (<div key={c.title}><b>{n}</b><h3>{c.title}</h3><p>{n} {plural(c)} across {c.items.length} {itemKind(c)}.</p></div>);
      })}</div>
    ));
    add('pp-subscribe', 'Subscribe', 'Be told when something new is published.', 'Tell us what you want to hear about and we will write when it is ready.', (
      <div className="pp-sub"><p className="pg-big">New episodes, lessons, guides and tools are added regularly. Ask to be on the list and tell us which formats you want.</p>
        <a className="pg-btn" href={MAIL('Subscribe to NK&CO Privileges', 'Hello,\n\nPlease add me to the Privileges list.\n\nName:\nCompany:\nFormats I want (podcasts, masterclasses, guides, video, tools, research, meetings and events, programmes, member access):\n')}>Join the list</a></div>
    ));
  }

  if (level === 'category') {
    add('pp-items', 'Browse', `The ${itemKind(cat)} inside ${cat.title}.`, `${cat.items.length} ${itemKind(cat)}. Open one to see everything in it.`, (
      <Tiles cls={cat.items.length % 3 === 0 || cat.items.length > 4 ? 'pg-t3' : 'pg-t2'} rows={cat.items.map((i) => ({ to: itemHref(cat, i), title: i.label, text: `${i.blurb} ${i.list.length} ${plural(cat)}.`, src: photo(cat, i), go: `Open ${itemOne(cat)}` }))} />
    ));
    add('pp-all', 'All', `Every ${f.noun.toLowerCase()} in ${cat.title}.`, `${cat.items.reduce((a, i) => a + i.list.length, 0)} ${plural(cat)}, grouped by ${itemOne(cat)}.`, (
      <div>{cat.items.map((i) => (
        <div key={i.label} className="pp-group">
          <h3><Link to={itemHref(cat, i)}>{i.label}</Link></h3>
          <ul className="pp-list">{i.list.map((p, n) => <PieceRow key={p.path} rec={{ cat, item: i, piece: p, path: p.path }} n={n + 1} />)}</ul>
        </div>
      ))}</div>
    ));
    const HOW = {
      podcast: [['Listen on any page', 'Each episode has its own page with a summary, key points and the length at a glance.'], ['Follow a series', 'Pick a series and move through its episodes in order, or start with the newest.'], ['Go further', 'Episodes point to related guides, masterclasses and tools elsewhere in Privileges.']],
      course: [['Take it in order', 'Each masterclass is a short sequence of lessons that build on the one before.'], ['Notes with every lesson', 'Every lesson page lists what you will take away before you start.'], ['Ask a partner', 'Questions on a lesson can go straight to the team that teaches it.']],
      guide: [['Written to be used', 'Each guide sets out steps, checks and examples rather than general commentary.'], ['Read or request', 'Open the page for the summary, then ask for the full guide by email.'], ['Kept current', 'Handbooks and regulation guides are reviewed and reissued as rules change.']],
      video: [['Short or full length', 'Explainers take minutes; webinars and conversations run to a full session.'], ['See what is covered', 'Every video page lists the main points before you press play.'], ['Questions answered', 'Webinar pages carry the questions the audience asked on the day.']],
      report: [['Written for decisions', 'Each report sets out what is happening, why it matters and what to do about it.'], ['Read or request', 'Open the page for the summary, then ask for the full report by email.'], ['Reissued regularly', 'Market reports and updates are refreshed as conditions and rules change.']],
      event: [['By request', 'Places are limited. Ask for a place and the team will confirm dates, venue and details.'], ['Small enough to talk', 'Groups are kept to a size where everyone can take part, with time for questions.'], ['Followed up in writing', 'Each session ends with a short note of what was covered and what comes next.']],
      access: [['By invitation', 'Sessions are for clients and members of NK&CO. Ask for a place and we will confirm dates.'], ['Small and private', 'Groups are kept small and run under agreed ground rules, so conversations stay candid.'], ['Followed up in writing', 'Each session ends with a short note of what was covered and what comes next.']],
      tool: [['Open and adjust', 'Calculators and templates show every assumption so you can change it.'], ['Print and tick', 'Checklists are one page long and built to be kept with the file.'], ['Ask for a review', 'Send us your completed file and a partner can look it over.']],
    }[cat.format];
    add('pp-about', 'How it works', (invite(cat) ? 'How member access works.' : `How ${cat.title.toLowerCase()} work.`), `Three things to know before you open ${cat.title}.`, (
      <>
        <div className="pg-cards">{HOW.map(([t, d]) => <article key={t} className="pg-card"><h3>{t}</h3><p>{d}</p></article>)}</div>
        {cat.format === 'podcast' && (
          <div className="pp-banner"><div><b className="font-serif-display">The NK&amp;CO Briefing</b><span>The full podcast platform, with every series, topic and guest voice.</span></div>
            <Link className="pg-btn" to="/intelligence/nk-co-briefing">Enter the Briefing</Link></div>
        )}
      </>
    ));
    const others = cats.filter((c) => c !== cat);
    add('pp-more', 'More', 'More from Privileges.', (invite(cat) ? 'If a private session is not what you need, try another format.' : `If ${cat.title.toLowerCase()} are not what you need, try another format.`), (
      <Tiles cls="pg-t2" rows={others.slice(0, 4).map((c) => ({ to: catHref(c), title: c.title, text: c.description, src: photo(c) }))} />
    ));
  }

  if (level === 'item') {
    add('pp-all', 'All', `Every ${f.noun.toLowerCase()} in ${itm.label}.`, `${itm.list.length} ${plural(cat)}, ${mins(totalMins([itm]))} in total.`, (
      <ul className="pp-list">{itm.list.map((p, n) => <PieceRow key={p.path} rec={{ cat, item: itm, piece: p, path: p.path }} n={n + 1} />)}</ul>
    ));
    add('pp-about', 'About', `About ${itm.label}.`, itm.blurb, (
      <div className="pg-exec"><article><p className="pg-big">{itm.lead}</p></article>
        <aside className="pg-aside"><h3>Who it is for</h3><p>{itm.who}</p>
          <ul><li>{f.label} &middot; {itm.list.length} {plural(cat)}</li><li>{mins(totalMins([itm]))} in total</li></ul>
          <a className="pg-btn" href={MAIL(`NK&CO Privileges: ${itm.label}`, `Hello,\n\nI would like to hear about new material in "${itm.label}".\n\nName:\nCompany:\n`)}>Tell me about new {plural(cat)}</a></aside></div>
    ));
    const others = cat.items.filter((i) => i !== itm);
    add('pp-more', 'More', `Other ${itemKind(cat)} in ${cat.title}.`, `More like ${itm.label}, from the rest of ${cat.title}.`, (
      <Tiles cls={others.length % 3 === 0 ? 'pg-t3' : 'pg-t2'} rows={others.map((i) => ({ to: itemHref(cat, i), title: i.label, text: i.blurb, src: photo(cat, i) }))} />
    ));
  }

  if (level === 'piece') {
    add('pp-media', f.label, invite(cat) ? 'Ask for your place.' : `${f.verb} ${piece.title}.`, `${itm.label}, ${f.noun.toLowerCase()} ${itm.list.indexOf(piece) + 1}: ${piece.minutes} ${f.unit}.`, <Media rec={rec} />);
    add('pp-points', 'Inside', `What you take from ${piece.title}.`, `The three points of \u201c${piece.title}\u201d, in the order it makes them.`, (
      <div className="pg-exec"><article><p className="pg-big">{covers(piece, f)}</p><p>Part {itm.list.indexOf(piece) + 1} of {itm.list.length} in {itm.label}. Who it is for: {itm.who}</p></article>
        <aside className="pg-aside"><h3>In this {f.noun.toLowerCase()}</h3>
          <ul>{piece.points.map((x) => <li key={x}>{x}</li>)}</ul>
          <a className="pg-btn" href={MAIL(`NK&CO Privileges: a question on ${piece.title}`, `Hello,\n\nI have a question about "${piece.title}".\n\n`)}>Ask the team a question</a></aside></div>
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
              {level !== 'section' && (
                <nav className="pp-crumbs" aria-label="Breadcrumb">
                  <Link to="/privileges">Privileges</Link>
                  {cat && <>{' / '}{level === 'category' ? <span>{cat.title}</span> : <Link to={catHref(cat)}>{cat.title}</Link>}</>}
                  {itm && <>{' / '}{level === 'item' ? <span>{itm.label}</span> : <Link to={itemHref(cat, itm)}>{itm.label}</Link>}</>}
                </nav>
              )}
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
