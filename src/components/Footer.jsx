import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUp, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../mock';
import Logo from './brand/Logo';
import { Tab, DashL } from './HeroDevices';
import { DESCRIPTOR, FOOTER_NOTE } from '../data/institutional';
import { SITEMAP, HOME_PRACTICES } from '../data/homeRich';
import { openContact } from '../lib/openContact';

// v573 · Institutional footer: a closing band, a sitemap of all six sections, the practice and licence references,
// the regulatory note and the legal line. Sitemap links come from the same menu data as the header (data/homeRich.js).
export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft-band">
        <div className="nk-container ft-band-in">
          <h2>Start with a defined requirement and an agreed scope.</h2>
          <div className="ft-band-act">
            <a href="mailto:info@nkco.ae?subject=NK%26CO%20Enquiry" onClick={openContact} className="ft-btn ft-btn-l">Contact NK&amp;CO<ArrowRight size={17} aria-hidden="true" /></a>
            <Link to="/overview/the-firm/corporate-profile" className="ft-btn ft-btn-g">Corporate profile</Link>
          </div>
        </div>
      </div>

      <div className="nk-container">
        <div className="ft-main">
          <div className="ft-brand">
            <Link to="/" aria-label="NK&CO home"><Logo /></Link>
            <p>{DESCRIPTOR}. An independent business advisory firm working through clearly defined mandates.</p>
            <div className="ft-dubai">
              <b>Dubai</b>
              <span>United Arab Emirates</span>
              <a href="mailto:info@nkco.ae">info@nkco.ae</a>
            </div>
            <Link to="/infrastructure/oms" className="ft-oms" aria-label="Explore the Operations Management System">
              <span aria-hidden="true"><Tab cls="ft-tab"><DashL /></Tab></span>
              <b>Operations Management System</b>
              <small>CRM, workflow and management reporting</small>
              <i>Explore<ArrowRight size={14} aria-hidden="true" /></i>
            </Link>
          </div>
          <nav className="ft-map" aria-label="Site sections">
            {SITEMAP.map((s) => {
              // v604 · every column: the same five rows plus one closing "All ..." row, so all six line up
              const all = s.links.filter(([, to]) => to !== s.to);
              const rest = s.more + Math.max(0, all.length - 5);
              return (
                <div key={s.key} className="ft-col">
                  <h3><Link to={s.to}>{s.label}</Link></h3>
                  <ul>
                    {all.slice(0, 5).map(([t, to]) => <li key={to}><Link to={to}>{t}</Link></li>)}
                    <li className="ft-more"><Link to={s.to}>All {s.label.toLowerCase()}{rest > 0 ? ` (+${rest})` : ''}</Link></li>
                  </ul>
                </div>
              );
            })}
          </nav>
        </div>

        <div className="ft-prac" aria-label="The three practices">
          {HOME_PRACTICES.items.map((x, i) => {
            const fact = (l) => (x.facts.find((f) => f[0] === l) || [])[1];
            return (
              <article key={x.id} className="ft-prac-c">
                <small>Practice {['one', 'two', 'three'][i]}</small>
                <h3><Link to={x.to}>{x.name}</Link></h3>
                <dl>
                  <div><dt>Purpose</dt><dd>{fact('Primary purpose')}</dd></div>
                  <div><dt>Output</dt><dd>{fact('Principal output')}</dd></div>
                  <div><dt>Engaged as</dt><dd>{fact('Typical engagement')}</dd></div>
                </dl>
                <ul>{x.services.map(([t, to]) => <li key={to}><Link to={to}>{t}</Link></li>)}</ul>
                <Link to={x.to} className="ft-prac-go">About this practice<ArrowRight size={14} aria-hidden="true" /></Link>
              </article>
            );
          })}
        </div>

        {(() => {
          // the regulatory note, designed as a lead statement plus five boundary tiles (wording unchanged, split by sentence)
          const parts = FOOTER_NOTE.split(/(?<=\.)\s+/);
          const labels = ['Enterprise management', 'Appointments and funds', 'Business brokerage', 'Regulated work', 'Transactions'];
          return (
            <div className="ft-reg ft-bound" aria-label="Regulatory note">
              <div className="ft-bound-lead">
                <small>Regulatory note</small>
                <p>{parts[0]}</p>
              </div>
              <div className="ft-bound-grid">
                {parts.slice(1).map((t, i) => (
                  <article key={i} className="ft-bound-t">
                    <b>{String(i + 1).padStart(2, '0')}</b>
                    <h4>{labels[i]}</h4>
                    <p>{t}</p>
                  </article>
                ))}
              </div>
            </div>
          );
        })()}

      </div>

      <section className="ft-last" aria-label="Next step">
        <div className="nk-container ft-last-in">
          <div className="ft-last-t">
            <p className="ft-last-k"><i aria-hidden="true" />Next step / NK&amp;CO</p>
            <h2>Make the next business decision clearer.</h2>
            <p className="ft-last-d">Explore NK&amp;CO perspectives, practices and engagement terms built for the work between strategy and results.</p>
          </div>
          <ul className="ft-last-l">
            <li><Link to="/intelligence">Explore insights<ArrowUpRight size={20} aria-hidden="true" /></Link></li>
            <li><a href="mailto:info@nkco.ae?subject=NK%26CO%20Enquiry" onClick={openContact}>Contact NK&amp;CO<ArrowRight size={20} aria-hidden="true" /></a></li>
          </ul>
        </div>
      </section>

      <div className="ft-legal">
        <div className="nk-container ft-legal-in">
          <span>© {new Date().getFullYear()} NK&amp;CO. All rights reserved.</span>
          <nav aria-label="Legal">
            <span>Privacy</span>
            <span>Terms</span>
            <button type="button" data-nk-cookies>Cookies</button>
            {SOCIAL_LINKS.map((x) => <a key={x.label} href={x.href}>{x.label}</a>)}
            <a href="#main" className="ft-top">Back to top<ArrowUp size={15} aria-hidden="true" /></a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
