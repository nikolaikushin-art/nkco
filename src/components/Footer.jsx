import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS, SOCIAL_LINKS, slugify } from '../mock';
import Logo from './brand/Logo';
import { Ornament } from './brand/Heritage';

const INSIGHTS_LINKS = [
  { label: 'UAE Real Estate Review', href: '#' },
  { label: 'Global Capital Flows', href: '#' },
  { label: 'NK&CO Quarterly', href: '#' },
  { label: 'NK&CO Briefing', href: '/intelligence/nk-co-briefing' },
  { label: 'Case Studies', href: '#' },
];

function FooterCol({ title, items, renderItem }) {
  return (
    <div className="nk-foot-col">
      <div className="nk-foot-title">{title}</div>
      <ul>
        {items.map((it, i) => (
          <li key={i}>{renderItem(it)}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const link = 'nk-foot-link';
  const sectionLink = (i, c) => `/${NAV_ITEMS[i].data.key}/${slugify(c.title)}`;
  return (
    <footer className="bg-[#16181b] text-white/80 relative overflow-hidden">
      <div className="relative nk-container py-20">
        <div className="om-center mb-14">
          <Link to="/" aria-label="NK&CO home" className="inline-flex items-center justify-center"><Logo /></Link>
          <p className="om-lede om-lede-light mt-6">A global advisory firm building institutions that outlast cycles.</p>
          <Ornament className="mt-8 om-ornament-light" />
        </div>
        <div className="nk-foot-grid om-footcols">
          <FooterCol
            title="Capabilities"
            items={NAV_ITEMS[0].data.columns.slice(0, 4)}
            renderItem={(c) => <Link to={sectionLink(0, c)} className={link}>{c.title}</Link>}
          />
          <FooterCol
            title="Infrastructure"
            items={NAV_ITEMS[1].data.columns.slice(0, 4)}
            renderItem={(c) => <Link to={sectionLink(1, c)} className={link}>{c.title}</Link>}
          />
          <FooterCol
            title="Opportunities"
            items={NAV_ITEMS[2].data.columns.slice(0, 4)}
            renderItem={(c) => <Link to={sectionLink(2, c)} className={link}>{c.title}</Link>}
          />
          <FooterCol
            title="Intelligence"
            items={NAV_ITEMS[3].data.columns.slice(0, 4)}
            renderItem={(c) => <Link to={sectionLink(3, c)} className={link}>{c.title}</Link>}
          />
          <FooterCol
            title="Insights"
            items={INSIGHTS_LINKS}
            renderItem={(l) => <Link to={l.href} className={link}>{l.label}</Link>}
          />
        </div>

        <div className="nk-foot-base om-center">
          <div className="text-[12.5px] text-white/50">
            © {new Date().getFullYear()} NK&amp;CO. All rights reserved. · Privacy · Terms · Cookies
          </div>
          <ul className="nk-foot-social">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="text-[12.5px] text-white/80 hover:text-white transition-colors">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
