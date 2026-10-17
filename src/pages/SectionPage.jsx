import { phrase } from '../lib/utils';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS_ALL as NAV_ITEMS, slugify } from '../mock';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNav from '../components/SideNav';
import Pricing from '../components/Pricing';
import { ContactForm } from '../components/PageModules';
import PageSystem from './PageSystem';
import FrameworkPanel from '../components/FrameworkPanel';
import PracticeScope from '../components/PracticeScope';
import PrivilegePage from './PrivilegePage';
import { getLeafContent, getItemContent, getColumnContent } from '../data/serviceContent';

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
      ? `An in-depth NK&CO perspective on ${leaf}, set out in the context of NK&CO’s management consultancy and business brokerage practices.`
      : itemBespoke
      ? itemBespoke
      : it
      ? `Our approach to ${it.label} — applying analytical rigour and commercial judgement to the business in question.`
      : colBespoke?.lead
      ? colBespoke.lead
      : col
      ? col.description ||
        `Explore our work in ${col.title}, delivered by senior practitioners on the ground in the UAE.`
      : data.description;

  const crumbs = [];
  crumbs.push({ label: data.title, to: `/${section}` });
  if (col) crumbs.push({ label: col.title, to: `/${section}/${category}` });
  if (it) crumbs.push({ label: it.label, to: `/${section}/${category}/${item}` });
  if (leaf) crumbs.push({ label: leaf });

  return (
    <div className="min-h-screen bg-[#e9e8e5]">
      <Header onOpenNav={() => setNavOpen(true)} />

      {section === 'privileges'
        ? <PrivilegePage category={category} item={item} child={child} />
        : <PageSystem section={section} category={category} item={item} child={child} nav={data} col={col} it={it} leaf={leaf} title={title} description={description} crumbs={crumbs} />}

      {section === 'overview' && category === 'our-practices' && item ? <PracticeScope item={item} child={child} /> : null}

      <FrameworkPanel section={section} category={category} item={item} />

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
