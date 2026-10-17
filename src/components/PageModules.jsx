import { phrase } from '../lib/utils';
// Expanded page modules — Challenges, Approach, Deliverables, FAQs, Contact form
// Uses bespoke per-service content when available, falls back to category pools.
import React, { useState } from 'react';
import { ArrowRight, Minus, Plus, Mail, MapPin } from 'lucide-react';
import { toRoman } from '../lib/roman';
import { Rosette } from './brand/Heritage';
import { getCategoryPool } from '../data/serviceContent';

const hash = (s = '') => { let h = 0; for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0; return Math.abs(h); };

// Approach phases — 12 category-specific 4-phase sequences so no two categories
// share the same approach copy.
const APPROACH_BY_CATEGORY = {
  capital: [
    { k: 'Assess', v: 'Institutional review of the balance sheet, capital plan and market window.' },
    { k: 'Structure', v: 'Term-sheet architecture, Shariah and legal coordination, ratings positioning.' },
    { k: 'Market', v: 'Investor and lender outreach, roadshow choreography, book-build discipline.' },
    { k: 'Close', v: 'Documentation, allocation, settlement and post-issuance IR handover.' },
  ],
  ma: [
    { k: 'Screen', v: 'Thesis-driven target screening, market mapping and initial engagement.' },
    { k: 'Diligence', v: 'Coordinated commercial, financial, operational and regulatory diligence.' },
    { k: 'Structure', v: 'Deal architecture, SPA negotiation and completion mechanics.' },
    { k: 'Integrate', v: 'Day-1 readiness, synergy programme and 100-day integration blueprint.' },
  ],
  talent: [
    { k: 'Brief', v: 'Confidential mandate design, success criteria and market positioning.' },
    { k: 'Search', v: 'Long-listing across regional and international networks.' },
    { k: 'Assess', v: 'Structured interviews, psychometrics and referencing.' },
    { k: 'Land', v: 'Offer, negotiation, onboarding and first-year retention.' },
  ],
  digital: [
    { k: 'Diagnose', v: 'Digital maturity, data quality and legacy architecture review.' },
    { k: 'Architect', v: 'Target stack, AI operating framework and governance design.' },
    { k: 'Build', v: 'MVP delivery, integration and enablement across operating teams.' },
    { k: 'Scale', v: 'Adoption, value tracking and enterprise-wide rollout.' },
  ],
  transformation: [
    { k: 'Diagnose', v: 'Value opportunity mapping, quantification and executive alignment.' },
    { k: 'Design', v: 'Target operating model, initiative portfolio and business cases.' },
    { k: 'Mobilise', v: 'PMO, cadence and change infrastructure stood up.' },
    { k: 'Deliver', v: 'Value tracked to the P&L, executive discipline sustained.' },
  ],
  advisory: [
    { k: 'Frame', v: 'Board and principal alignment on the question and the horizon.' },
    { k: 'Sense', v: 'Independent market and stakeholder listening at partner level.' },
    { k: 'Advise', v: 'Structured memoranda, options and recommendations.' },
    { k: 'Sustain', v: 'Ongoing counsel on live decisions, retained partner access.' },
  ],
  consultancy: [
    { k: 'Diagnose', v: 'Rapid, senior-led diagnostic to size the opportunity.' },
    { k: 'Design', v: 'Bespoke blueprint tailored to your mandate and market position.' },
    { k: 'Deliver', v: 'Programme execution with fortnightly checkpoints.' },
    { k: 'Sustain', v: 'Knowledge transfer, tooling and playbooks for the client team.' },
  ],
  infrastructure: [
    { k: 'Scope', v: 'Jurisdiction, activity and regulatory scope determined.' },
    { k: 'File', v: 'Applications, filings and documentation lodged and expedited.' },
    { k: 'Onboard', v: 'Bank, WPS, e-channels and initial policy pack activated.' },
    { k: 'Sustain', v: 'Renewals, compliance calendar and reporting handover.' },
  ],
  operations: [
    { k: 'Baseline', v: 'Process, data and control baseline established.' },
    { k: 'Redesign', v: 'Target operating model and automation opportunities.' },
    { k: 'Pilot', v: 'Priority workflow redesign piloted and stabilised.' },
    { k: 'Embed', v: 'Cadence, KPIs and adoption embedded across teams.' },
  ],
  brand: [
    { k: 'Position', v: 'Positioning workshop, competitive review and proposition.' },
    { k: 'System', v: 'Verbal and visual identity, applications and guidelines.' },
    { k: 'Launch', v: 'Internal, stakeholder and public activation coordinated.' },
    { k: 'Govern', v: 'Governance framework and brand health measurement.' },
  ],
  tech: [
    { k: 'Architect', v: 'Reference stack, vendor short-list and integration design.' },
    { k: 'Build', v: 'Implementation, data migration and integration.' },
    { k: 'Secure', v: 'Cyber, identity and governance controls activated.' },
    { k: 'Operate', v: 'Adoption, cost management and ongoing hyper-care.' },
  ],
  default: [
    { k: 'Diagnose', v: 'A rapid, senior-led diagnostic to size the opportunity and align stakeholders.' },
    { k: 'Design', v: 'A bespoke operating blueprint tailored to your mandate and market position.' },
    { k: 'Structure', v: 'Governance, legal and commercial structuring to protect long-term value.' },
    { k: 'Mobilise', v: 'A dedicated NK&CO team on the ground in Dubai, with executive sponsorship.' },
  ],
};

function pickApproach(section, category, item, child) {
  const t = [section, category, item, child].filter(Boolean).join(' ').toLowerCase();
  if (/pr-strategy|public.relations|marketing|sales|advertising|campaign|media/.test(t)) return APPROACH_BY_CATEGORY.brand;
  if (/advisor/.test(t)) return APPROACH_BY_CATEGORY.advisory;
  if (/capital|sukuk|listing|ipo|bond|equity|debt|syndicat|placement/.test(t)) return APPROACH_BY_CATEGORY.capital;
  if (/merger|acquisit|m&a|divest|transaction|deal|carve|valuation|post-merger/.test(t)) return APPROACH_BY_CATEGORY.ma;
  if (/talent|recruit|executive.search|human.resource|onboard|succession|emiratisation|leadership|workforce/.test(t)) return APPROACH_BY_CATEGORY.talent;
  if (/digital|\bai\b|analyt|automation|platform|data/.test(t)) return APPROACH_BY_CATEGORY.digital;
  if (/transform|performance|business.model|change.program|realignment/.test(t)) return APPROACH_BY_CATEGORY.transformation;
  if (/licens|incorporat|banking|setup|formation|jurisdict|regulatory|entity|constitution|ubo|foundation|structuring/.test(t)) return APPROACH_BY_CATEGORY.infrastructure;
  if (/brand|creative|design|positioning|launch/.test(t)) return APPROACH_BY_CATEGORY.brand;
  if (/erp|crm|cloud|network|application|enterprise-app|it-deployment/.test(t)) return APPROACH_BY_CATEGORY.tech;
  if (/operation|process|kpi|dashboard|continuity|scaling|capacity|quality|iso|audit|governance/.test(t)) return APPROACH_BY_CATEGORY.operations;
  if (/consult/.test(t)) return APPROACH_BY_CATEGORY.consultancy;
  return APPROACH_BY_CATEGORY.default;
}

function pick(pool, n, seed) {
  const out = [];
  const used = new Set();
  let i = 0;
  while (out.length < n && i < pool.length * 2) {
    const idx = (seed + i * 7) % pool.length;
    if (!used.has(idx)) { used.add(idx); out.push(pool[idx]); }
    i++;
  }
  return out;
}

export function ChallengesApproach({ title, context = {} }) {
  const seed = hash(title);
  const pool = getCategoryPool(context.section, context.category, context.item, context.child);
  const challenges = pick(pool.challenges, 4, seed);
  const steps = pickApproach(context.section, context.category, context.item, context.child);
  return (
    <section className="om-sec om-sec-paper">
      <Rosette variant="a" className="om-rosette-bg om-rosette-corner om-rosette-l" />
      <div className="nk-container py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#646a73] inline-flex items-center gap-2"><span className="w-6 h-px bg-[#646a73]" /> The context</div>
          <h2 className="font-serif-display text-[40px] leading-[1.05] text-[#1b1d21] mt-4 mb-6">Where {phrase(title)} mandates get complicated.</h2>
          <ul className="space-y-4">
            {challenges.map((c, i) => (
              <li key={c} className="flex items-start gap-4 border-t border-[#d2d1cd] pt-4">
                <span className="om-roman om-roman-inline">{toRoman(i + 1)}</span>
                <span className="text-[14.5px] leading-[1.6] text-[#43474d]">{c}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7 lg:pl-8 lg:border-l border-[#d2d1cd]">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#646a73] inline-flex items-center gap-2"><span className="w-6 h-px bg-[#646a73]" /> How we work</div>
          <h2 className="font-serif-display text-[40px] leading-[1.05] text-[#1b1d21] mt-4 mb-6">How NK&amp;CO delivers {phrase(title)}.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {steps.map((s) => (
              <div key={s.k} className="border-t border-[#d2d1cd] pt-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#686b70]">{s.k}</div>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#43474d]">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DeliverablesOutcomes({ title, context = {} }) {
  const seed = hash(title + 'del');
  const pool = getCategoryPool(context.section, context.category, context.item, context.child);
  const deliv = pick(pool.deliverables, 6, seed);
  const outc = pick(pool.outcomes, 4, seed + 5);
  return (
    <section className="om-sec om-sec-ink text-white">
      <Rosette variant="a" className="om-rosette-bg om-rosette-corner om-rosette-r" />
      <div className="nk-container py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#c4c8ce] inline-flex items-center gap-2"><span className="w-6 h-px bg-[#c4c8ce]" /> Deliverables</div>
          <h2 className="font-serif-display text-[38px] leading-[1.05] mt-4 mb-8">What you receive from a {phrase(title)} mandate.</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {deliv.map((d) => (
              <li key={d} className="flex items-start gap-2 text-[13.5px] text-white/85"><span className="om-lozenge om-lozenge-light mt-[9px]" aria-hidden="true" /> {d}</li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6 lg:pl-10 lg:border-l border-white/15">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#c4c8ce] inline-flex items-center gap-2"><span className="w-6 h-px bg-[#c4c8ce]" /> Outcomes</div>
          <h2 className="font-serif-display text-[38px] leading-[1.05] mt-4 mb-8">The value {phrase(title)} clients realise.</h2>
          <div className="space-y-5">
            {outc.map((o, i) => (
              <div key={o} className="border-t border-white/15 pt-4">
                <div className="om-roman om-roman-light">{toRoman(i + 1)}</div>
                <p className="mt-1 text-[14.5px] leading-[1.55] text-white/90">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="om-faq-item">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left py-5">
        <span className="font-serif-display text-[20px] leading-[1.25] text-[#1b1d21] pr-8">{q}</span>
        <span className="om-faq-mark flex items-center justify-center flex-shrink-0 text-[#1b1d21]">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <div className="overflow-hidden transition-[max-height] duration-300" style={{ maxHeight: open ? 400 : 0 }}>
        <p className="pb-5 text-[14.5px] leading-[1.65] text-[#4b5057] max-w-[820px]">{a}</p>
      </div>
    </div>
  );
}

export function FAQ({ title, context = {} }) {
  const seed = hash(title + 'faq');
  const pool = getCategoryPool(context.section, context.category, context.item, context.child);
  const items = pick(pool.faqs, Math.min(5, pool.faqs.length), seed);
  return (
    <section className="om-sec om-sec-vellum">
      <Rosette variant="b" className="om-rosette-bg om-rosette-corner om-rosette-l" />
      <div className="nk-container py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#646a73] inline-flex items-center gap-2"><span className="w-6 h-px bg-[#646a73]" /> FAQs</div>
          <h2 className="font-serif-display text-[38px] leading-[1.05] text-[#1b1d21] mt-4">Questions we hear on {phrase(title)}.</h2>
          <p className="mt-4 text-[14px] leading-[1.65] text-[#4b5057] max-w-[320px]">Common questions from executives, boards and principals evaluating an engagement with NK&amp;CO.</p>
        </div>
        <div className="lg:col-span-8">
          {items.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </div>
    </section>
  );
}

export function ContactForm({ title }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const subject = `NK&CO enquiry — ${title}`;
    const body = `Name: ${form.name}%0D%0ACompany: ${form.company}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${encodeURIComponent(form.message)}`;
    window.location.href = `mailto:info@nkco.ae?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSent(true);
  };

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <section className="om-sec om-sec-paper">
      <Rosette variant="a" className="om-rosette-bg om-rosette-corner om-rosette-r" />
      <div className="nk-container py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#646a73] inline-flex items-center gap-2"><span className="w-6 h-px bg-[#646a73]" /> Get in touch</div>
          <h2 className="font-serif-display text-[40px] leading-[1.05] text-[#1b1d21] mt-4">Speak with a partner about {phrase(title)}.</h2>
          <p className="mt-4 text-[14.5px] leading-[1.7] text-[#4b5057] max-w-[420px]">Every enquiry is reviewed by a senior partner in Dubai. We respond within one working day.</p>
          <ul className="mt-8 space-y-3 text-[14px] text-[#43474d]">
            <li className="flex items-center gap-3"><Mail size={14} className="text-[#646a73]" /> <a href="mailto:info@nkco.ae" className="hover:text-[#646a73]">info@nkco.ae</a></li>
            <li className="flex items-center gap-3"><MapPin size={14} className="text-[#646a73]" /> One Central, DIFC, Dubai, UAE</li>
          </ul>
        </div>
        <form onSubmit={submit} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-[11px] uppercase tracking-[0.16em] text-[#686b70]">Name</span>
            <input required value={form.name} onChange={set('name')} className="border border-[#d2d1cd] px-4 py-3 text-[14px] text-[#1b1d21] focus:outline-none focus:border-[#646a73] transition-colors" />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-[11px] uppercase tracking-[0.16em] text-[#686b70]">Company</span>
            <input required value={form.company} onChange={set('company')} className="border border-[#d2d1cd] px-4 py-3 text-[14px] text-[#1b1d21] focus:outline-none focus:border-[#646a73] transition-colors" />
          </label>
          <label className="sm:col-span-2 flex flex-col gap-1.5">
            <span className="text-[11px] uppercase tracking-[0.16em] text-[#686b70]">Work email</span>
            <input required type="email" value={form.email} onChange={set('email')} className="border border-[#d2d1cd] px-4 py-3 text-[14px] text-[#1b1d21] focus:outline-none focus:border-[#646a73] transition-colors" />
          </label>
          <label className="sm:col-span-2 flex flex-col gap-1.5">
            <span className="text-[11px] uppercase tracking-[0.16em] text-[#686b70]">Your enquiry</span>
            <textarea required rows={5} value={form.message} onChange={set('message')} className="border border-[#d2d1cd] px-4 py-3 text-[14px] text-[#1b1d21] focus:outline-none focus:border-[#646a73] transition-colors resize-none" />
          </label>
          <div className="sm:col-span-2 flex items-center justify-between mt-2">
            <p className="text-[12px] text-[#686b70]">By submitting you agree to our privacy policy.</p>
            <button type="submit" className="inline-flex items-center gap-2 bg-[#1b1d21] hover:bg-[#2f3338] text-white px-7 py-3 text-[13.5px] transition-colors group">
              {sent ? 'Opening your email…' : 'Send enquiry'} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
