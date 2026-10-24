import React, { useEffect, useState } from 'react';
import { ArrowRight, MapPin, Mail, Globe, ChevronRight, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS, QUICK_LINKS, SOCIAL_LINKS, slugify } from '../mock';
import Logo from './brand/Logo';
import { menuKids, serviceLabel, LIMITED_SECTIONS } from '../data/menuDisplay';

// v469 · the page you are on gets the white guide line, like the selected row in the desktop menu
const isHere = (href) => typeof window !== 'undefined' && window.location.pathname.replace(/\/$/, '') === href;

function SubAccordion({ item, section, category }) {
  const [open, setOpen] = useState(false);
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;
  // Capabilities, Infrastructure, Opportunities, Expertise (4) and Overview: the most important pages (same rule as the desktop menu); other sections list every page.
  const kids = LIMITED_SECTIONS.includes(section)
    ? menuKids(section, category, item.label, item.children)
    : (item.children || []).map((value) => ({ value, label: value }));
  return (
    <div className="nk-side-sub">
      <button
        className="nk-side-sub-trigger"
        data-open={open}
        onClick={() => hasChildren && setOpen((v) => !v)}
      >
        <span title={serviceLabel(section, item.label)}>{serviceLabel(section, item.label)}</span>
        <ChevronRight size={14} className="chev" />
      </button>
      {hasChildren && (
        <div className="nk-side-sub-body" data-open={open} inert={!open}>
          <div className="nk-side-sub-inner">
          <ul>
            {kids.map(({ value: c, label }) => (
              <li key={c}>
                <a href={`/${section}/${slugify(category)}/${slugify(item.label)}/${slugify(c)}`} {...(isHere(`/${section}/${slugify(category)}/${slugify(item.label)}/${slugify(c)}`) ? { 'aria-current': 'page' } : {})}>{label}</a>
              </li>
            ))}
            {LIMITED_SECTIONS.includes(section) && (
              <li>
                <a href={`/${section}/${slugify(category)}/${slugify(item.label)}`} className="nk-side-viewall" aria-label={`View ${serviceLabel(section, item.label)}`}>View all</a>
              </li>
            )}
          </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionFeature({ data }) {
  // Pick a nice image + title depending on menu layout
  let img = data.featured?.image;
  let tag = data.featured?.tag || 'Featured';
  let title = data.featured?.title || data.title;
  let cta = data.featured?.ctaLabel || 'Explore section';
  let href = data.featured?.ctaHref || data.exploreHref || `/${data.key}`;

  if (!img && Array.isArray(data.featuredDeals) && data.featuredDeals[0]) {
    img = data.featuredDeals[0].image;
    tag = 'Live deal';
    title = data.featuredDeals[0].title;
    cta = 'View the deal';
  } else if (!img && Array.isArray(data.featuredPublications) && data.featuredPublications[0]) {
    img = data.featuredPublications[0].image;
    tag = data.featuredPublications[0].tag || 'Publication';
    title = data.featuredPublications[0].title;
    cta = 'Read the report';
  } else if (!img && Array.isArray(data.columns) && data.columns[0]?.image) {
    img = data.columns[0].image;
    tag = 'Featured sector';
    title = data.columns[0].title;
  }

  if (!img) return null;

  return (
    <a href={href} className="nk-sidefeat group block relative overflow-hidden mt-4 mb-6">
      <div className="aspect-[16/9] overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
        <div className="nk-sidefeat-scrim absolute inset-0" aria-hidden="true" />
      </div>
      <div className="nk-sidefeat-text absolute inset-0 p-4 flex flex-col justify-end text-white">
        <div className="text-[10.5px] uppercase tracking-[0.14em]">{tag}</div>
        <div className="font-serif-display text-[18px] leading-[1.2] mt-1 max-w-[85%]">{title}</div>
        <div className="mt-2 inline-flex items-center gap-2 text-[12.5px]">
          {cta} <ArrowRight size={12} />
        </div>
      </div>
    </a>
  );
}

function TopAccordion({ item, open, onToggle }) {
  const data = item.data;
  return (
    <div>
      <button
        className="nk-acc-trigger"
        data-open={open}
        onClick={onToggle}
        aria-expanded={open}
      >
        <span title={item.label}>{item.label}</span>
        <span className="plus" />
      </button>
      <div className="nk-acc-body" data-open={open} inert={!open}>
        <div className="nk-acc-inner">
        <div className="pt-2 pb-6 pl-1">
          <SectionFeature data={data} />

          {data.columns.map((col) => (
            <div key={col.title} className="mb-5">
              {/* v470 · baseline-aligned so the group name and its "View" link sit on one line */}
              <div className="flex items-baseline justify-between mb-2">
                <div className="nk-panel-label">
                  {col.title}
                </div>
                <a
                  href={`/${data.key}/${slugify(col.title)}`}
                  className="text-[11.5px] text-[var(--nk-red)] inline-flex items-center gap-1 hover:text-[var(--nk-red-dark)]"
                >
                  View <ArrowUpRight size={11} />
                </a>
              </div>
              <div>
                {(() => {
                  const subs = col.items.map((it) => (typeof it === 'string' ? { label: it, children: [] } : it));
                  // Infrastructure: only the 3 most important services per category (the others are one tap away via "View ...")
                  const shown = data.key === 'infrastructure'
                    ? menuKids(data.key, col.title, null, subs.map((x) => x.label)).map(({ value }) => subs.find((x) => x.label === value))
                    : subs;
                  return shown.map((sub) => <SubAccordion key={sub.label} item={sub} section={data.key} category={col.title} />);
                })()}
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default function SideNav({ open, onClose }) {
  // One top-level section open at a time (same accordion rule as the CRM sidebar).
  const [openKey, setOpenKey] = useState(null);
  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    document.body.classList.toggle('nk-nav-open', open);
    return () => { document.body.style.overflow = ''; document.body.classList.remove('nk-nav-open'); };
  }, [open]);

  return (
    <>
      <div className="nk-backdrop" data-open={open} onClick={onClose} />

      <aside className="nk-slide-panel" data-open={open} aria-hidden={!open}>
        <div className="nk-slide-body">
          <div className="nk-panel-nav">
            <div className="nk-panel-label mb-3">Navigate</div>
            {NAV_ITEMS.map((item) => (
              <TopAccordion key={item.key} item={item} open={openKey === item.key} onToggle={() => setOpenKey((k) => (k === item.key ? null : item.key))} />
            ))}
          </div>

          <div className="nk-panel-sec">
            <div className="nk-panel-label mb-4">
              Quick links
            </div>
            <ul className="grid grid-cols-2 gap-3">
              {QUICK_LINKS.map((q) => (
                <li key={q}>
                  <a href="#" className="text-[14.5px] text-[#16171a] hover:text-[var(--nk-red)] transition-colors">
                    {q}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="nk-panel-sec nk-panel-contact">
            <div className="nk-panel-label mb-2">Contact</div>
            <div className="nk-contact-row"><MapPin size={16} strokeWidth={1.4} aria-hidden="true" /><span>One Central, DIFC, Dubai, UAE</span></div>
            <a href="mailto:info@nkco.ae" className="nk-contact-row"><Mail size={16} strokeWidth={1.4} aria-hidden="true" /><span>info@nkco.ae</span></a>
            <a href="https://nkco.ae" className="nk-contact-row"><Globe size={16} strokeWidth={1.4} aria-hidden="true" /><span>nkco.ae</span></a>
          </div>

          <div className="nk-panel-sec nk-panel-follow">
            <div className="nk-panel-label mb-4">Follow</div>
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-2">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-[14px] text-[#16171a] hover:text-[var(--nk-red)] transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="nk-slide-foot">
          <a href="mailto:info@nkco.ae?subject=NK%26CO%20Enquiry" className="nk-panel-cta">
            Contact us <ArrowRight size={16} />
          </a>
        </div>
      </aside>
    </>
  );
}
