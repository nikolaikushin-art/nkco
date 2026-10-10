import { phrase } from '../lib/utils';
import { toRoman } from '../lib/roman';
import { Rosette } from '../components/brand/Heritage';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ChevronRight, Home } from 'lucide-react';
import { NAV_ITEMS, slugify } from '../mock';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNav from '../components/SideNav';
import Pricing from '../components/Pricing';
import { ChallengesApproach, DeliverablesOutcomes, FAQ, ContactForm } from '../components/PageModules';
import RichService from '../components/RichModules';
import { getLeafContent, getItemContent, getColumnContent } from '../data/serviceContent';
import { getRichContent, isFlagshipItem } from '../data/richContent';
import { leafPhoto } from '../lib/leafPhoto';

const FALLBACK_IMG = 'https://images.pexels.com/photos/18620036/pexels-photo-18620036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

function Breadcrumb({ crumbs }) {
  return (
    <nav className="flex items-center gap-2 text-[12.5px] text-white/70">
      <Link to="/" className="inline-flex items-center gap-1 hover:text-white"><Home size={12} /></Link>
      {crumbs.map((c, i) => (
        <React.Fragment key={c.label}>
          <ChevronRight size={12} className="opacity-60" />
          {c.to ? (
            <Link to={c.to} className="hover:text-white">{c.label}</Link>
          ) : (
            <span className="text-white">{c.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

function findBySlug(items, slug) {
  return items?.find((it) => slugify(typeof it === 'string' ? it : it.title || it.label) === slug);
}

export default function SectionPage() {
  const [navOpen, setNavOpen] = React.useState(false);
  const { section, category, item, child } = useParams();
  const nav = NAV_ITEMS.find((n) => n.key === section);

  if (!nav) {
    return (
      <div className="min-h-screen bg-[#e9e8e5]">
        <Header onOpenNav={() => setNavOpen(true)} />
        <div className="pt-[160px] nk-container pb-40">
          <h1 className="font-serif-display text-[56px] text-[#1b1d21]">Page not found</h1>
          <Link to="/" className="mt-4 inline-flex items-center gap-2 text-[#646a73]">Go home <ArrowRight size={14} /></Link>
        </div>
        <Footer />
        <SideNav open={navOpen} onClose={() => setNavOpen(false)} />
      </div>
    );
  }

  const data = nav.data;
  const col = category ? findBySlug(data.columns, category) : null;
  const it = item && col ? findBySlug(col.items, item) : null;
  const leaf = child && it ? it.children?.find((c) => slugify(c) === child) : null;

  const title = leaf || (it && it.label) || (col && col.title) || data.title;
  const eyebrow = leaf
    ? `${data.title} / ${col.title} / ${it.label}`
    : it
    ? `${data.title} / ${col.title}`
    : col
    ? data.title
    : 'Section';

  // Bespoke content dictionary lookups
  const leafBespoke = leaf ? getLeafContent(section, category, item, child) : null;
  const itemBespoke = it && !leaf ? getItemContent(section, category, item) : null;
  const colBespoke = col && !it && !leaf ? getColumnContent(section, category) : null;

  const description =
    leafBespoke
      ? leafBespoke
      : leaf
      ? `An in-depth NK&CO perspective on ${leaf}, drawn from decades of experience advising institutions across the UAE and GCC.`
      : itemBespoke
      ? itemBespoke
      : it
      ? `Our approach to ${it.label} — combining deep functional expertise with unrivalled knowledge of Dubai and the wider region.`
      : colBespoke?.lead
      ? colBespoke.lead
      : col
      ? col.description ||
        `Explore our work in ${col.title}, delivered by senior practitioners on the ground in the UAE.`
      : data.description;

  const heroImage =
    (leaf && col && it && leafPhoto(section, col.title, it.label, leaf, it.children.indexOf(leaf)).src) ||
    data.featured?.image ||
    (Array.isArray(data.featuredDeals) && data.featuredDeals[0]?.image) ||
    (Array.isArray(data.featuredPublications) && data.featuredPublications[0]?.image) ||
    (col && col.image) ||
    FALLBACK_IMG;

  const crumbs = [];
  crumbs.push({ label: data.title, to: `/${section}` });
  if (col) crumbs.push({ label: col.title, to: `/${section}/${category}` });
  if (it) crumbs.push({ label: it.label, to: `/${section}/${category}/${item}` });
  if (leaf) crumbs.push({ label: leaf });

  // Related items to display
  const relatedChildren = it?.children?.filter((c) => c !== leaf).slice(0, 6) || [];

  return (
    <div className="min-h-screen bg-[#e9e8e5]">
      <Header onOpenNav={() => setNavOpen(true)} />

      {/* HERO — restrained editorial composition. Typography + subtle imagery do the work. */}
      <section className="pt-[64px] bg-[#1b1d21] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.22]">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b1d21] via-[#1b1d21]/90 to-[#1b1d21]/55" />
        </div>
        <Rosette className="om-rosette-bg om-rosette-page" />
        <div className="relative nk-container pt-10 lg:pt-14 pb-20 lg:pb-24">
          <Breadcrumb crumbs={crumbs} />
          <div className="mt-10">
            <div className="text-[11px] uppercase tracking-[0.24em] text-white/55">{eyebrow}</div>
          </div>
          <h1 className="font-serif-display nk-display-1 mt-5 max-w-[960px]">
            {title}
          </h1>
          <p className="mt-8 max-w-[680px] text-[16px] leading-[1.75] text-white/80">
            {description}
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a href="#contact" className="inline-flex items-center gap-3 text-white text-[14px] group border-b border-white/40 hover:border-white pb-1 transition-colors">
              <span>Speak with our team</span>
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#overview" className="inline-flex items-center gap-3 text-white/70 hover:text-white text-[14px] transition-colors">
              <span>Explore the practice</span>
            </a>
          </div>
        </div>
      </section>

      {/* RELATED CHILDREN (for leaf page) */}
      {leaf && relatedChildren.length > 0 && (
        <section className="om-sec om-sec-vellum">
          <div className="nk-container py-20">
            <div className="text-[12px] uppercase tracking-[0.18em] text-[#686b70] mb-4">Related within {it.label}</div>
            <h3 className="font-serif-display text-[36px] text-[#1b1d21] mb-10 max-w-[720px]">
              Explore the rest of our {it.label} practice.
            </h3>
            <div className="om-index">
              {relatedChildren.map((c, n) => (
                <Link key={c} to={`/${section}/${category}/${item}/${slugify(c)}`} className="om-index-row group">
                  <span className="om-roman om-roman-inline">{toRoman(n + 1)}</span>
                  <h4 className="font-serif-display text-[24px] leading-[1.2] text-[#1b1d21]">{c}</h4>
                  <ArrowRight size={14} className="om-index-arrow" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CATEGORY VIEW: item cards */}
      {!leaf && col && !it && (
        <section className="om-sec om-sec-paper">
          <div className="nk-container py-24">
            <div className="text-[12px] uppercase tracking-[0.18em] text-[#686b70] mb-4">Practice areas</div>
            <h3 className="font-serif-display text-[40px] text-[#1b1d21] max-w-[720px] mb-12">
              Our {col.title} practice.
            </h3>
            <div className="om-split om-split-light grid grid-cols-1 md:grid-cols-3">
              {col.items.map((raw, n) => {
                const i = typeof raw === 'string' ? { label: raw, children: [] } : raw;
                return (
                  <Link to={`/${section}/${category}/${slugify(i.label)}`} key={i.label} className="om-split-cell group block px-8 py-4">
                    <div className="om-roman">{toRoman(n + 1)}</div>
                    <h4 className="font-serif-display text-[24px] leading-[1.2] text-[#1b1d21] mt-3">{i.label}</h4>
                    <ul className="mt-4 space-y-2 text-[13.5px] text-[#5a6068]">
                      {(i.children || []).slice(0, 4).map((c) => (
                        <li key={c} className="flex items-center gap-2"><ArrowRight size={11} className="text-[#646a73]" /> {c}</li>
                      ))}
                    </ul>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ITEM VIEW: children as cards — each with leaf-specific bespoke lead */}
      {!leaf && it && (
        <section className="om-sec om-sec-vellum">
          <div className="nk-container py-24">
            <div className="text-[12px] uppercase tracking-[0.18em] text-[#686b70] mb-4">What we do</div>
            <h3 className="font-serif-display text-[40px] text-[#1b1d21] max-w-[720px] mb-12">
              Inside our {it.label} offering.
            </h3>
            <div className="om-ledger">
              {it.children?.map((c, n) => {
                const childSlug = slugify(c);
                const bespoke = getLeafContent(section, category, item, childSlug);
                return (
                  <Link to={`/${section}/${category}/${item}/${childSlug}`} key={c} className="om-ledger-row group">
                    <div className="om-roman om-ledger-no">{toRoman(n + 1)}</div>
                    <h4 className="font-serif-display text-[26px] leading-[1.15] text-[#1b1d21]">{c}</h4>
                    <p className="text-[14.5px] leading-[1.7] text-[#4b5057]">
                      {bespoke || `A senior-led ${phrase(it.label)} capability, delivered under a named partner across the UAE and GCC.`}
                    </p>
                    </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* SECTION LANDING: columns */}
      {!col && (
        <section className="om-sec om-sec-paper">
          <div className="nk-container py-24">
            <div className="nk-sec-head" data-no={String(data.columns.length).padStart(2, "0")}>
              <div className="nk-eyebrow"><span className="nk-eyebrow-no">I</span>Practice areas</div>
              <h3 className="font-serif-display nk-sec-title">The full breadth of our {phrase(data.title)} work.</h3>
              <div className="nk-sec-count">{data.columns.length} practice areas</div>
            </div>
            <div className={`nk-frames nk-frames-${[0,1,2,3,4,3,3,4,4][Math.min(data.columns.length,8)] || 3}`}>
              {data.columns.map((c, n) => (
                <Link to={`/${section}/${slugify(c.title)}`} key={c.title} className="nk-frame group">
                  <span className="nk-frame-no" aria-hidden="true">{['I','II','III','IV','V','VI','VII','VIII'][n]}</span>
                  <h4 className="font-serif-display nk-frame-title">{c.title}</h4>
                  {c.description && <p className="nk-frame-desc">{c.description}</p>}
                  <span className="nk-frame-cta">Explore <ArrowRight size={14} aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Deep content modules — Challenges, Approach, Deliverables/Outcomes, FAQs on service pages */}

      {/* Pricing & Engagement — every Cap/Infra/Expertise page (column/item/leaf/landing) */}
      {['capabilities', 'infrastructure', 'expertise'].includes(section) && (
        <div id="pricing"><Pricing context={{ section, category, item, child }} title={title} /></div>
      )}

      {/* In-page enquiry form (posts via mailto until backend is wired) */}
      {['capabilities', 'infrastructure', 'expertise'].includes(section) && (col || it || leaf) && (
        <div id="contact"><ContactForm title={title} /></div>
      )}

      {/* Lean CTA — only for sections without inline ContactForm */}
      {!(['capabilities', 'infrastructure', 'expertise'].includes(section) && (col || it || leaf)) && (
        <section id="contact" className="bg-[#1b1d21] text-white">
          <div className="nk-container py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
            <h2 className="font-serif-display text-[46px] leading-[1.05]">Ready to talk with a partner about {phrase(title)}?</h2>
            <div className="md:text-right">
              <a href="mailto:info@nkco.ae?subject=NK%26CO%20Enquiry" className="inline-flex items-center gap-3 bg-white text-[#1b1d21] px-9 py-4 hover:bg-[#d2d1cd] transition-colors group">
                Contact NK&amp;CO <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </section>
      )}

      <Footer />
      <SideNav open={navOpen} onClose={() => setNavOpen(false)} />
    </div>
  );
}
