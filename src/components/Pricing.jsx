import { phrase } from '../lib/utils';
// NK&CO — Pricing & Engagement
// Every Capability and Infrastructure service resolves to a bespoke AED price
// tuple from /data/pricing.js. Other sections use a category-informed fallback.
import React from 'react';
import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react';
import { Rosette } from './brand/Heritage';
import { resolvePricing, hasPricing } from '../data/pricing';

const CONTACT_EMAIL = 'info@nkco.ae';

// --- Category-informed bullets ------------------------------------------------
// Small, hand-written bullet sets vary the tier copy by service category so
// the page never reads the same twice.
const BULLETS = {
  advisory: {
    standard: ['Senior partner as engagement lead', 'Weekly working sessions', 'Fortnightly executive briefings', 'Bespoke advisory memoranda'],
    enterprise: ['Named partner + cross-disciplinary team', 'Weekly executive checkpoints', 'Board-ready deliverables', 'Priority partner access line'],
  },
  consultancy: {
    standard: ['Diagnostic + bespoke recommendation set', 'Senior consultant lead + specialist bench', 'Executive stakeholder cadence', 'Documented implementation roadmap'],
    enterprise: ['Named partner + dedicated delivery pod', 'Executive steering committee', 'Board-ready documentation', 'Implementation hand-over playbook'],
  },
  capital: {
    standard: ['Funding-requirement and use-of-funds analysis', 'Integrated financial model with scenarios', 'Readiness gap assessment and improvement plan', 'Identification of legal, tax and regulatory questions for authorised advisers'],
    enterprise: ['Named partner + dedicated delivery team', 'Decision criteria for funding alternatives', 'Coordination with authorised professionals', 'Ongoing business-readiness reviews'],
  },
  ma: {
    standard: ['Business-readiness assessment', 'Management information and documentation review', 'Acquisition opportunity screening', 'Specialist coordination plan (valuation, legal, tax by authorised professionals)'],
    enterprise: ['Named partner + dedicated delivery team', 'Transaction workstream coordination', 'Key-person and dependency risk review', 'Post-transaction operating-model and integration planning'],
  },
  talent: {
    standard: ['Organisational design and role definition', 'Capability gap assessment', 'Coordination with recruitment specialists', 'Onboarding and 90-day plan'],
    enterprise: ['Named partner + dedicated delivery team', 'Management development planning', 'Governance and decision-rights design', 'Succession planning support'],
  },
  digital: {
    standard: ['Current-state and maturity diagnostic', 'Target architecture and roadmap', 'Pilot design and vendor selection', 'Executive-ready business case'],
    enterprise: ['Named partner + technology architects', 'End-to-end delivery pod', 'Data governance and AI risk framework', 'Programme MVP through scale'],
  },
  transformation: {
    standard: ['Value opportunity diagnostic', 'Operating model target design', 'Initiative portfolio and business case', 'Programme mobilisation plan'],
    enterprise: ['Named partner + PMO leadership', 'Executive value tracking', 'Enterprise change and communications', 'End-to-end programme delivery'],
  },
  infrastructure: {
    standard: ['Requirements briefing and jurisdiction map', 'Application, filing and coordination', 'Documentation and compliance pack', 'Handover to internal team'],
    enterprise: ['Named partner + regulatory desk', 'Multi-entity / multi-jurisdiction coordination', 'Government liaison and expediting', 'Ongoing renewal and compliance calendar'],
  },
  operations: {
    standard: ['Process baseline and heat map', 'Redesign and quick-win playbook', 'Pilot deployment on priority workflows', 'Handover documentation and KPIs'],
    enterprise: ['Named partner + industrial engineers', 'Enterprise operating cadence design', 'Automation and AI enablement', 'Value tracking and stabilisation'],
  },
  brand: {
    standard: ['Positioning workshop and brief', 'Verbal and visual identity system', 'Application across core touchpoints', 'Launch playbook and guidelines'],
    enterprise: ['Named partner + creative + strategy leads', 'Multi-market brand architecture', 'Executive stakeholder programme', 'Ongoing brand governance'],
  },
  tech: {
    standard: ['Reference architecture and vendor short-list', 'Implementation and integration plan', 'Pilot rollout on priority processes', 'Enablement and adoption toolkit'],
    enterprise: ['Named partner + solution architects', 'Enterprise-scale integration', 'Data platform and governance', 'Managed transition and hyper-care'],
  },
  default: {
    standard: ['Executive diagnostic and opportunity map', 'Senior consultant engagement lead', 'Structured deliverables and roadmap', 'Advisory-led delivery cadence'],
    enterprise: ['Named partner and specialist team', 'Priority executive stakeholder programme', 'Board-ready deliverables', 'Long-term partnership option'],
  },
};

const INSTITUTIONAL_BULLETS = [
  'Custom engagement, scoped to the problem',
  'Multi-disciplinary partner-led team',
  'Executive sponsor and confidentiality arrangements',
  'Long-term strategic partnership option',
];

// --- Utilities ----------------------------------------------------------------
const fmt = (n) => `AED ${Number(n).toLocaleString('en-US')}`;
const hash = (s = '') => { let h = 0; for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0; return Math.abs(h); };

function inferCategory({ section, category, item, child } = {}) {
  const t = [section, category, item, child].filter(Boolean).join(' ').toLowerCase();
  if (/advisor/.test(t)) return 'advisory';
  if (/consult/.test(t)) return 'consultancy';
  if (/capital|invest|sukuk|listing|ipo|bond|equity|debt|syndicat/.test(t)) return 'capital';
  if (/merger|acquisit|m&a|divest|transaction|deal|carve|valuation|post-merger/.test(t)) return 'ma';
  if (/talent|recruit|executive.search|hr|human|onboard|succession/.test(t)) return 'talent';
  if (/digital|\bai\b|analyt|automation|platform|data-platform/.test(t)) return 'digital';
  if (/transform|performance|business.model|change.program/.test(t)) return 'transformation';
  if (/licens|incorporat|banking|setup|formation|jurisdict|regulatory|entity|constitution|ubo/.test(t)) return 'infrastructure';
  if (/operation|process|kpi|dashboard|continuity|scaling|capacity/.test(t)) return 'operations';
  if (/brand|market|creative|design|positioning|launch/.test(t)) return 'brand';
  if (/\bit\b|erp|crm|cloud|network|application|enterprise-app/.test(t)) return 'tech';
  return 'default';
}

// Fallback pricing for non Cap/Infra sections (expertise etc.)
const FALLBACK_BASES = {
  advisory: { std: 65000, ent: 220000, m: 18000 },
  consultancy: { std: 85000, ent: 320000, m: 24000 },
  capital: { std: 120000, ent: 480000, m: 32000 },
  ma: { std: 180000, ent: 650000, m: 34000 },
  talent: { std: 55000, ent: 180000, m: null },
  digital: { std: 95000, ent: 420000, m: 26000 },
  transformation: { std: 140000, ent: 560000, m: 27000 },
  infrastructure: { std: 45000, ent: 160000, m: null },
  operations: { std: 60000, ent: 240000, m: 15000 },
  brand: { std: 75000, ent: 260000, m: 16000 },
  tech: { std: 90000, ent: 380000, m: 21000 },
  default: { std: 70000, ent: 260000, m: 22000 },
};
const round5k = (n) => Math.round(n / 2500) * 2500;

export function getPricing(ctx) {
  const cat = inferCategory(ctx);
  const bespoke = resolvePricing(ctx);
  let std, ent, monthly, timeline, level;
  if (bespoke) {
    std = bespoke.std; ent = bespoke.ent; monthly = bespoke.monthly; timeline = bespoke.timeline; level = bespoke.level;
  } else {
    const base = FALLBACK_BASES[cat] || FALLBACK_BASES.default;
    const key = [ctx.section, ctx.category, ctx.item, ctx.child].filter(Boolean).join('/');
    const h = hash(key);
    const variance = 0.85 + (h % 30) / 100;
    std = round5k(base.std * variance);
    ent = round5k(base.ent * variance);
    monthly = base.m ? round5k(base.m * variance) : null;
    timeline = null;
    level = 'fallback';
  }

  const b = BULLETS[cat] || BULLETS.default;
  const isAdvisory = cat === 'advisory' || /advisor/.test([ctx.section, ctx.category, ctx.item, ctx.child].filter(Boolean).join('/').toLowerCase());
  const isConsult = ['consultancy', 'transformation', 'operations'].includes(cat);

  return {
    category: cat,
    level,
    tiers: {
      standard: {
        name: 'Standard',
        audience: 'Founders, growing businesses and focused engagements',
        price: std,
        timeline,
        bullets: b.standard,
      },
      enterprise: {
        name: 'Enterprise',
        audience: 'Established organisations requiring dedicated support',
        price: ent,
        timeline,
        bullets: b.enterprise,
      },
      institutional: {
        name: 'Institutional',
        audience: 'Larger or more complex organisations',
        price: null,
        timeline: null,
        bullets: INSTITUTIONAL_BULLETS,
      },
    },
    monthly,
    membership: monthly ? {
      quarterly: round5k(monthly * 2.7),
      sixMonth: round5k(monthly * 5.2),
      annual: round5k(monthly * 9.8),
    } : null,
    isAdvisory,
    isConsult,
  };
}

// --- UI ----------------------------------------------------------------------
function Tier({ tier, highlight = false, tierKey }) {
  const isCustom = tier.price == null;
  return (
    <div className={`om-frame relative p-8 flex flex-col ${highlight ? 'om-frame-strong' : ''}`}>
      {highlight && <div className="absolute -top-px left-0 right-0 h-[3px] bg-[#32353a]" />}
      <div className="flex items-center justify-between">
        <div className="text-[10.5px] uppercase tracking-[0.22em] text-[#686b70]">{tier.name}</div>
        {highlight && <div className="text-[10px] uppercase tracking-[0.18em] text-[#646a73]">Most engaged</div>}
      </div>
      <h4 className="font-serif-display text-[22px] leading-[1.2] text-[#16171a] mt-3">{tier.audience}</h4>
      <div className="mt-6 border-t border-[#d2d1cd] pt-5">
        <div className="text-[10.5px] uppercase tracking-[0.18em] text-[#686b70]">Engagement</div>
        <div className="mt-1.5 font-serif-display text-[26px] leading-tight text-[#16171a]">{isCustom ? 'Custom proposal' : 'Scoped proposal'}</div>
        <div className="mt-2 text-[11.5px] text-[#686b70]">{isCustom ? 'Scoped against your objectives' : 'Fee agreed after scoping'}</div>
      </div>
      <ul className="mt-5 space-y-2.5 flex-1">
        {tier.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-[13px] leading-[1.55] text-[#43474d]">
            <span className="om-lozenge mt-[9px]" aria-hidden="true" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <a
        href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`NK&CO Engagement — ${tier.name}`)}`}
        className={`mt-7 inline-flex items-center justify-between gap-2 px-5 py-3 text-[13px] transition-colors group ${highlight ? 'bg-[#32353a] text-white hover:bg-[#2f3338]' : 'border border-[#16171a] text-[#16171a] hover:bg-[#1b1d21] hover:text-white'}`}
      >
        <span>{isCustom ? 'Contact us for proposal' : 'Request a proposal'}</span>
        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
}

export default function Pricing({ context, title }) {
  const p = getPricing(context);
  const { tiers } = p;
  const t = title || 'this engagement';

  return (
    <section className="om-sec om-sec-vellum relative">
      <Rosette variant="a" className="om-rosette-bg om-rosette-corner om-rosette-l" />
      <div className="nk-container py-24">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#646a73] inline-flex items-center gap-2">
              <span className="w-6 h-px bg-[#646a73]" /> Pricing &amp; Engagement
            </div>
            <h2 className="font-serif-display text-[44px] leading-[1.05] text-[#16171a] mt-4">
              How we would engage on {phrase(t)}.
            </h2>
            <p className="mt-5 text-[15px] leading-[1.75] text-[#4b5057] max-w-[620px]">
              Every engagement is scoped to the problem and confirmed in a written proposal. Fees reflect complexity,
              required expertise, delivery effort, risk and duration, and may be a fixed fee, a staged project fee or a monthly
              retainer. Third-party and specialist costs are identified separately in the proposal.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="border-l-2 border-[#16171a] pl-6 py-2">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#686b70]">A note on our engagement model</div>
              <p className="mt-3 text-[13.5px] leading-[1.7] text-[#4b5057]">
                NK&amp;CO operates as an enterprise advisory, consultancy and implementation firm. We advise, structure,
                design and deliver — we do not undertake regulated activities that require third-party licences.
                Specialist legal, tax, valuation and regulated work is performed by appropriately authorised professionals.
              </p>
            </div>
          </div>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Tier tier={tiers.standard} tierKey="standard" />
          <Tier tier={tiers.enterprise} tierKey="enterprise" highlight />
          <Tier tier={tiers.institutional} tierKey="institutional" />
        </div>

        {/* Advisory monthly retainer (only shown when service is advisory in nature) */}
        {false && p.isAdvisory && p.monthly && (
          <div className="om-frame mt-12 p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <div className="text-[10.5px] uppercase tracking-[0.22em] text-[#646a73]">Monthly Advisory Subscription</div>
              <h4 className="font-serif-display text-[26px] leading-[1.15] text-[#16171a] mt-2">Fractional executive advisory retainer</h4>
              <p className="mt-3 text-[13.5px] leading-[1.7] text-[#4b5057]">
                Positioned as a strategic partnership. Ongoing partner-level access, monthly working sessions and on-demand
                counsel — specifically tuned to this practice area.
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="text-[10.5px] uppercase tracking-[0.18em] text-[#686b70]">Starting from</div>
              <div className="mt-1.5 font-serif-display text-[36px] leading-none text-[#16171a]">{fmt(p.monthly)}<span className="text-[15px] text-[#686b70] ml-2">/ month</span></div>
              <ul className="mt-4 space-y-1.5 text-[13px] text-[#43474d]">
                <li className="flex items-center gap-3"><span className="om-lozenge" aria-hidden="true" /> Monthly working sessions</li>
                <li className="flex items-center gap-3"><span className="om-lozenge" aria-hidden="true" /> Direct partner line</li>
                <li className="flex items-center gap-3"><span className="om-lozenge" aria-hidden="true" /> Quarterly strategy review</li>
              </ul>
            </div>
            <div className="md:col-span-3 md:text-right">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`NK&CO Advisory Subscription — ${t}`)}`}
                className="inline-flex items-center justify-between gap-2 bg-[#32353a] hover:bg-[#2f3338] text-white px-5 py-3 text-[13px] transition-colors group"
              >
                Enquire about the retainer <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        )}

        {/* Consultancy membership models (for consulting/transformation services) */}
        {false && p.isConsult && !p.isAdvisory && p.membership && (
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6 items-end">
              <div className="md:col-span-7">
                <div className="text-[10.5px] uppercase tracking-[0.22em] text-[#646a73]">Consultancy Memberships</div>
                <h4 className="font-serif-display text-[30px] leading-[1.15] text-[#16171a] mt-3">
                  Long-term strategic partnerships, priced as memberships.
                </h4>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-[#4b5057] max-w-[620px]">
                  For ongoing consulting relationships. Discounted against equivalent monthly engagement and structured
                  as a single billing cycle with dedicated team continuity.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: 'Quarterly Membership', price: p.membership.quarterly, note: '3 months · monthly working sessions · quarterly review' },
                { label: '6-Month Membership', price: p.membership.sixMonth, note: '6 months · dedicated team · mid-cycle review' },
                { label: 'Annual Membership', price: p.membership.annual, note: '12 months · executive oversight · quarterly reviews' },
              ].map((m, i) => (
                <div key={m.label} className={`om-frame ${i === 2 ? 'om-frame-strong' : ''} p-6 flex flex-col relative`}>
                  {i === 2 && <div className="absolute -top-px left-0 right-0 h-[2px] bg-[#32353a]" />}
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[#686b70]">{m.label}</div>
                  <div className="mt-3 font-serif-display text-[30px] leading-none text-[#16171a]">{fmt(m.price)}</div>
                  <p className="mt-3 text-[12.5px] leading-[1.5] text-[#686b70]">{m.note}</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`NK&CO ${m.label} — ${t}`)}`}
                    className="mt-auto inline-flex items-center gap-1.5 text-[#646a73] hover:text-[#4a4f57] text-[12.5px] pt-5"
                  >
                    Enquire <ArrowRight size={12} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer contact strip */}
        <div className="mt-14 pt-8 border-t border-[#c3c2be] flex flex-wrap items-center justify-between gap-4 text-[13px] text-[#686b70]">
          <div className="flex items-center gap-3">
            <Mail size={14} className="text-[#646a73]" />
            <span>Speak with a partner about {phrase(t)}:</span>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#16171a] hover:text-[#646a73] transition-colors">{CONTACT_EMAIL}</a>
          </div>
          <div className="text-[12.5px] text-[#686b70]">
            Fees are agreed in a written proposal after scoping
          </div>
        </div>
      </div>
    </section>
  );
}

// Keep exported symbol for legacy imports
export { hasPricing };
