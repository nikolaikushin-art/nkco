import { phrase } from '../lib/utils';
// NK&CO — Rich visual modules for Cap+Infra service pages.
// Executive-summary stats, scope-of-work grid, methodology timeline, engagement
// matrix, use-cases, architectural section transitions.
import React from 'react';
import { Compass } from 'lucide-react';
import { toRoman } from '../lib/roman';
import { Rosette } from './brand/Heritage';

// ---------------------------------------------------------------------------
// Architectural corner / grid accent used across sections
// ---------------------------------------------------------------------------
export function ArchGrid({ className = '' }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <defs>
        <pattern id="agrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#agrid)" opacity="0.5" />
      <path d="M0 200 L200 0 L400 200 L200 400 Z" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// StatBand — executive-summary statistics band
// ---------------------------------------------------------------------------
export function StatBand({ stats, kicker = 'At a glance' }) {
  if (!stats?.length) return null;
  return (
    <section className="bg-nk-aubergine text-white relative overflow-hidden nk-stat-band-aubergine">
      <div className="absolute -right-40 -top-40 w-[500px] h-[500px] text-white/[0.05]"><ArchGrid className="w-full h-full" /></div>
      <div className="nk-container py-20 relative">
        <div className="text-[11px] uppercase tracking-[0.22em] text-white/70 inline-flex items-center gap-2">
          <span className="w-6 h-px bg-white/70" /> {kicker}
        </div>
        <div className={`mt-10 grid grid-cols-2 md:grid-cols-${Math.min(stats.length, 4)} gap-8 md:gap-4`}>
          {stats.map((s) => (
            <div key={s.label} className="border-t border-white/15 pt-6">
              <div className="font-serif-display text-[52px] leading-[0.95] text-white">{s.value}</div>
              <div className="mt-2 text-[13px] font-medium text-white/85">{s.label}</div>
              {s.note && <p className="mt-2 text-[12.5px] leading-[1.55] text-white/60 max-w-[280px]">{s.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// ScopeOfWork — grid of sub-service categories with expandable items
// ---------------------------------------------------------------------------
export function ScopeOfWork({ scope, title }) {
  if (!scope?.length) return null;
  return (
    <section id="scope" className="om-sec om-sec-paper relative">
      <Rosette variant="a" className="om-rosette-bg om-rosette-corner om-rosette-r" />
      <div className="nk-container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#646a73] inline-flex items-center gap-2">
              <span className="w-6 h-px bg-[#646a73]" /> Scope of engagement
            </div>
            <h2 className="font-serif-display text-[44px] leading-[1.05] text-[#1b1d21] mt-4">
              Every discipline required for {phrase(title)}.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[15px] leading-[1.7] text-[#4b5057] max-w-[620px]">
              A comprehensive, senior-led capability across every dimension of this practice. Engagements are scoped to your mandate, but the platform beneath is uniform: institutional, integrated and delivered under a named partner.
            </p>
          </div>
        </div>
        <div className={`grid grid-cols-1 ${scope.length > 1 ? 'lg:grid-cols-' + Math.min(scope.length, 3) : ''} gap-8 lg:gap-12`}>
          {scope.map((group, idx) => (
            <div key={group.title} className="om-scope-col pt-2 lg:px-8 first:lg:pl-0 last:lg:pr-0">
              <div className="om-roman">{toRoman(idx + 1)}</div>
              <h3 className="font-serif-display text-[28px] leading-[1.1] text-[#1b1d21] mt-3">{group.title}</h3>
              {group.lead && <p className="mt-4 text-[13.5px] leading-[1.7] text-[#4b5057]">{group.lead}</p>}
              <ul className="mt-6 space-y-4">
                {group.items.map((it) => (
                  <li key={it.t} className="om-rule pt-3.5">
                    <div className="flex items-start gap-3">
                      <span className="om-lozenge mt-[9px]" aria-hidden="true" />
                      <div>
                        <div className="text-[14px] font-medium text-[#1b1d21] leading-snug">{it.t}</div>
                        {it.d && <p className="mt-1 text-[13px] leading-[1.6] text-[#686b70]">{it.d}</p>}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// MethodologyTimeline — vertical/horizontal methodology
// ---------------------------------------------------------------------------
export function MethodologyTimeline({ methodology, title }) {
  if (!methodology?.length) return null;
  return (
    <section id="methodology" className="om-sec om-sec-vellum relative">
      <Rosette variant="a" className="om-rosette-bg om-rosette-corner om-rosette-l" />
      <div className="nk-container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#646a73] inline-flex items-center gap-2">
              <span className="w-6 h-px bg-[#646a73]" /> Methodology
            </div>
            <h2 className="font-serif-display text-[42px] leading-[1.05] text-[#1b1d21] mt-4">
              How a {phrase(title)} mandate is sequenced.
            </h2>
            <p className="mt-6 text-[14.5px] leading-[1.7] text-[#4b5057] max-w-[420px]">
              Every {phrase(title)} mandate follows a sequenced, institutional methodology. Executive checkpoints at every gate. No phase begins without written sign-off from the previous.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="relative pl-8 border-l border-[#c3c2be]">
              {methodology.map((phase, i) => (
                <div key={phase.n} className="relative pb-10 last:pb-0">
                  <span className="om-plate">{toRoman(Number(phase.n) || i + 1)}</span>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-[#646a73]">Stage {toRoman(Number(phase.n) || i + 1)}</div>
                  <h4 className="font-serif-display text-[22px] leading-[1.2] text-[#1b1d21] mt-2">{phase.k}</h4>
                  <p className="mt-2 text-[13.5px] leading-[1.65] text-[#4b5057] max-w-[560px]">{phase.v}</p>
                  {i < methodology.length - 1 && <div className="absolute -left-[30px] top-[26px] bottom-0 w-px" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// EngagementMatrix — comparison of engagement models
// ---------------------------------------------------------------------------
export function EngagementMatrix({ engagement, title }) {
  if (!engagement?.length) return null;
  return (
    <section id="engagement" className="om-sec om-sec-ink text-white relative overflow-hidden">
      <Rosette variant="b" className="om-rosette-bg om-rosette-corner om-rosette-r" />
      <div className="absolute -left-40 -bottom-40 w-[500px] h-[500px] text-white/[0.04]"><ArchGrid className="w-full h-full" /></div>
      <div className="nk-container py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-6">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#c4c8ce] inline-flex items-center gap-2">
              <span className="w-6 h-px bg-[#c4c8ce]" /> Engagement models
            </div>
            <h2 className="font-serif-display text-[42px] leading-[1.05] mt-4">
              How organisations engage us on {phrase(title)}.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pl-8 lg:border-l border-white/15">
            <p className="text-[14.5px] leading-[1.7] text-white/75 max-w-[560px]">
              Every engagement is scoped and priced individually. The models below indicate the shape of the most common mandates. Institutional programmes are always designed against a bespoke proposal.
            </p>
          </div>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-${Math.min(engagement.length, 3)} gap-0 om-split`}>
          {engagement.map((e, i) => (
            <div key={e.name} className="om-split-cell px-8 py-4 flex flex-col">
              <div className="om-roman om-roman-light">{toRoman(i + 1)}</div>
              <h4 className="font-serif-display text-[22px] leading-[1.2] mt-3">{e.name}</h4>
              <p className="mt-4 text-[13.5px] leading-[1.65] text-white/80 flex-1">{e.scope}</p>
              {e.suits && <p className="mt-4 text-[12.5px] leading-[1.55] text-white/55 pt-4 border-t border-white/10">Suits: {e.suits}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// UseCases — anonymised engagement examples
// ---------------------------------------------------------------------------
export function UseCases({ useCases, title }) {
  if (!useCases?.length) return null;
  return (
    <section className="om-sec om-sec-paper relative">
      <Rosette variant="a" className="om-rosette-bg om-rosette-corner om-rosette-l" />
      <div className="nk-container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#646a73] inline-flex items-center gap-2">
              <span className="w-6 h-px bg-[#646a73]" /> Selected engagements
            </div>
            <h2 className="font-serif-display text-[40px] leading-[1.05] text-[#1b1d21] mt-4">
              Where our {phrase(title)} practice has been engaged.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[14.5px] leading-[1.7] text-[#4b5057] max-w-[560px]">
              Anonymised for confidentiality. Each engagement below reflects the caliber and complexity of mandates we typically execute across this practice. Detailed references are available under NDA.
            </p>
          </div>
        </div>
        <div className="om-ledger">
          {useCases.map((u, i) => (
            <div key={u.title} className="om-ledger-row group">
              <div className="om-roman om-ledger-no">{toRoman(i + 1)}</div>
              <h4 className="font-serif-display text-[26px] leading-[1.15] text-[#1b1d21]">{u.title}</h4>
              <p className="text-[14px] leading-[1.7] text-[#4b5057]">{u.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// PositioningFramework — 2x2 matrix positioning the practice
// (Used only on flagship pages that pass framework prop)
// ---------------------------------------------------------------------------
export function PositioningFramework({ title }) {
  return (
    <section className="bg-[#f1f0ed] relative">
      <div className="nk-container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#646a73] inline-flex items-center gap-2">
              <span className="w-6 h-px bg-[#646a73]" /> How we position
            </div>
            <h2 className="font-serif-display text-[40px] leading-[1.05] text-[#1b1d21] mt-4">
              Institutional discipline meets executable delivery.
            </h2>
            <p className="mt-6 text-[14.5px] leading-[1.7] text-[#4b5057] max-w-[420px]">
              NK&amp;CO occupies a specific position across the advisory market — combining the institutional discipline of a global consultancy with the delivery orientation of an operator. Neither pure advisory nor pure implementation.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-1 aspect-square max-w-[520px] bg-[#c3c2be]">
              <div className="bg-white p-5 flex flex-col justify-between">
                <Compass size={16} className="text-[#686b70]" />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[#686b70]">Advisory</div>
                  <div className="text-[13.5px] text-[#1b1d21] mt-1">Global consultancies</div>
                </div>
              </div>
              <div className="bg-[#1b1d21] text-white p-5 flex flex-col justify-between">
                <Compass size={16} className="text-[#c4c8ce]" />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[#c4c8ce]">Advisory + Delivery</div>
                  <div className="text-[13.5px] mt-1">NK&amp;CO</div>
                </div>
              </div>
              <div className="bg-white p-5 flex flex-col justify-between">
                <Compass size={16} className="text-[#686b70]" />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[#686b70]">Boutique</div>
                  <div className="text-[13.5px] text-[#1b1d21] mt-1">Regional specialists</div>
                </div>
              </div>
              <div className="bg-white p-5 flex flex-col justify-between">
                <Compass size={16} className="text-[#686b70]" />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[#686b70]">Delivery</div>
                  <div className="text-[13.5px] text-[#1b1d21] mt-1">Systems integrators</div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between text-[11px] uppercase tracking-[0.18em] text-[#686b70] max-w-[520px]">
              <span>← Strategy</span>
              <span>Execution →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Wrapper — renders the full rich content in the correct order.
// ---------------------------------------------------------------------------
export default function RichService({ rich, title, flagship = false }) {
  if (!rich) return null;
  return (
    <>
      {rich.stats && <StatBand stats={rich.stats} />}
      {rich.scope && <ScopeOfWork scope={rich.scope} title={title} />}
      {rich.methodology && <MethodologyTimeline methodology={rich.methodology} title={title} />}
      {flagship && <PositioningFramework title={title} />}
      {rich.engagement && <EngagementMatrix engagement={rich.engagement} title={title} />}
      {rich.useCases && <UseCases useCases={rich.useCases} title={title} />}
    </>
  );
}
