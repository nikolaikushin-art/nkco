import { phrase } from '../lib/utils';
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
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
import IntelHub from './IntelHub';
import { findCat, findColl, intelRecord, HOME, COLLECTION_HOME, redirectFromPrivileges, slug as islug } from '../data/intelLibrary';
import { getLeafContent, getItemContent, getColumnContent } from '../data/serviceContent';

function findBySlug(items, slug) {
  return items?.find((it) => slugify(typeof it === 'string' ? it : it.title || it.label) === slug);
}

export default function SectionPage() {
  const [navOpen, setNavOpen] = React.useState(false);
  const { section, category, item, child, piece } = useParams();
  const nav = NAV_ITEMS.find((n) => n.key === section);

  // The old Privileges section now lives inside Intelligence: every /privileges/... URL is redirected to its Intelligence page
  if (section === 'privileges') return <Navigate to={redirectFromPrivileges(category, item, child)} replace />;
  // Intelligence: old links (Data Platforms, Publications, Developers, ...) are sent to the nearest new page
  let intelView = null;
  if (section === 'intelligence') {
    const icat = category ? findCat(category) : null;
    if (category && !icat) {
      const h = HOME[item] || HOME[category] || HOME[child];
      const target = h ? `/intelligence/${h.cat.slug}/${h.coll.slug}/${islug(h.label)}` : COLLECTION_HOME[category] ? `/intelligence/${COLLECTION_HOME[category].slug}/${category}` : '/intelligence';
      return <Navigate to={target} replace />;
    }
    const icoll = icat && item ? findColl(icat, item) : null;
    if (item && !icoll) return <Navigate to={`/intelligence/${icat.slug}`} replace />;
    if (!category) intelView = <IntelHub level="section" />;
    else if (!item) intelView = <IntelHub level="category" cat={icat} />;
    else if (!child) intelView = icoll.own ? null : <IntelHub level="collection" cat={icat} coll={icoll} />;
    else if (!icoll.own) {
      const rec = intelRecord(child, piece);
      const home = HOME[child];
      // a series always lives in one collection: send a mismatched URL to its real one
      if (home && (home.cat !== icat || home.coll !== icoll)) return <Navigate to={`/intelligence/${home.cat.slug}/${home.coll.slug}/${child}${piece ? '/' + piece : ''}`} replace />;
      const series = { label: rec ? rec.item.label : '', to: `/intelligence/${icat.slug}/${icoll.slug}/${child}` };
      intelView = rec
        ? <PrivilegePage recOverride={rec} crumbs={[{ label: 'Intelligence', to: '/intelligence' }, { label: icat.title, to: `/intelligence/${icat.slug}` }, { label: icoll.label, to: `/intelligence/${icat.slug}/${icoll.slug}` }, ...(piece ? [{ label: series.label, to: series.to }, { label: rec.piece.title }] : [{ label: series.label }])]} />
        : <Navigate to={home ? `/intelligence/${icat.slug}/${icoll.slug}/${child}` : `/intelligence/${icat.slug}/${icoll.slug}`} replace />;
    }
  }

  if (!nav) {
    return (
      <div className="min-h-screen bg-[#f5f5f7]">
        <Header onOpenNav={() => setNavOpen(true)} />
        <div className="pt-[160px] nk-container pb-40">
          <h1 className="font-serif-display text-[56px] text-[#16171a]">Page not found</h1>
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
      ? `An in-depth NK&CO perspective on ${leaf}, set out in the context of NK&CO’s advisory, consultancy and business brokerage practices.`
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
    <div className="min-h-screen bg-[#f5f5f7]">
      <Header onOpenNav={() => setNavOpen(true)} />

      {intelView ? intelView : <PageSystem section={section} category={category} item={item} child={child} nav={data} col={col} it={it} leaf={leaf} title={title} description={description} crumbs={crumbs} />}

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
        <section id="contact" className="bg-[#32353a] text-white">
          <div className="nk-container py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
            <h2 className="font-serif-display text-[46px] leading-[1.05]">Ready to talk with a partner about {phrase(title)}?</h2>
            <div className="md:text-right">
              <a href="mailto:info@nkco.ae?subject=NK%26CO%20Enquiry" className="inline-flex items-center gap-3 bg-white text-[#16171a] px-9 py-4 hover:bg-[#d2d1cd] transition-colors group">
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
