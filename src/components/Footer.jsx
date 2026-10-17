import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS_ALL as NAV_ITEMS, SOCIAL_LINKS, slugify } from '../mock';
import Logo from './brand/Logo';
import { Ornament } from './brand/Heritage';
import { DESCRIPTOR, FOOTER_NOTE } from '../data/institutional';

const INSIGHTS_LINKS = [
  { label: 'NK&CO Briefing', href: '/intelligence/nk-co-briefing' },
  { label: 'All Privileges', href: '/privileges' },
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
  const navData = (key) => NAV_ITEMS.find((n) => n.key === key).data; // looked up by key, so the nav order can change
  const sectionLink = (key, c) => `/${key}/${slugify(c.title)}`;
  return (
    <footer className="bg-[#16181b] text-white/80 relative overflow-hidden">
      <div className="relative nk-container py-20">
        <div className="om-center mb-14">
          <Link to="/" aria-label="NK&CO home" className="inline-flex items-center justify-center"><Logo /></Link>
          <p className="om-lede om-lede-light mt-6">{DESCRIPTOR}</p>
          <Ornament className="mt-8 om-ornament-light" />
        </div>
        <div className="nk-foot-grid om-footcols">
          <FooterCol
            title="Capabilities"
            items={navData('capabilities').columns.slice(0, 4)}
            renderItem={(c) => <Link to={sectionLink('capabilities', c)} className={link}>{c.title}</Link>}
          />
          <FooterCol
            title="Infrastructure"
            items={navData('infrastructure').columns.slice(0, 4)}
            renderItem={(c) => <Link to={sectionLink('infrastructure', c)} className={link}>{c.title}</Link>}
          />
          <FooterCol
            title="Opportunities"
            items={navData('opportunities').columns.slice(0, 4)}
            renderItem={(c) => <Link to={sectionLink('opportunities', c)} className={link}>{c.title}</Link>}
          />
          {/* hidden for now: Intelligence */}
          {false && (
          <FooterCol
            title="Intelligence"
            items={navData('intelligence').columns.slice(0, 4)}
            renderItem={(c) => <Link to={sectionLink('intelligence', c)} className={link}>{c.title}</Link>}
          />
          )}
          {/* hidden for now: Privileges */}
          {false && (
          <FooterCol
            title="Privileges"
            items={navData('privileges').columns.slice(0, 6)}
            renderItem={(c) => <Link to={sectionLink('privileges', c)} className={link}>{c.title}</Link>}
          />
          )}
          <FooterCol
            title="Insights"
            items={INSIGHTS_LINKS}
            renderItem={(l) => <Link to={l.href} className={link}>{l.label}</Link>}
          />
        </div>

        <p className="nk3-reg-note">{FOOTER_NOTE}</p>

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
