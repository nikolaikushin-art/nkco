// Expertise mega — REDESIGNED for institutional clarity
// Clean tile grid — no dense row lists. Each tile shows a category with a short
// description and "View all" link. Users click through to the detail page.
// Mobile-menu-clean aesthetic on desktop.
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { LeftPanel, leafHref } from './parts';

// Short category descriptions — keep the mega menu editorial, not a directory
const CATEGORY_DESC = {
  'Agency & Brokerage': 'Residential and institutional brokerage — origination through closing.',
  'Primary & Off-Plan': 'Developer partnerships, launch strategy and off-plan compliance.',
  'Secondary & Resale': 'Resale market intelligence, valuation and transaction execution.',
  'Commercial & Retail': 'Occupier, investor and corporate real-estate advisory.',
  'Leasing & Lettings': 'Landlord representation, tenant placement and tenancy administration.',
  'Holiday Homes': 'Short-stay operations under DTCM licensing and hospitality standards.',
  'Property Management': 'Institutional property and revenue management for owners.',
  'Property Developers': 'Origination, positioning and market deployment for developers.',
  'Construction Firms': 'Pipeline strategy and institutional positioning for contractors.',
  'Real Estate Academy': 'Certified education, RERA training and executive development.',
};

function Tile({ col, section }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={leafHref(section, col.title)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group block py-3 border-t border-[#d2d1cd] hover:border-[#2b2e35] transition-colors min-h-[120px]"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <h3 className="font-serif-display leading-[1.15] text-[#1b1d21] text-[17px] group-hover:text-[#2b2e35] transition-colors">
            {col.title}
          </h3>
          <p className="mt-1.5 text-[12px] leading-[1.45] text-[#686b70]">
            {CATEGORY_DESC[col.title] || ''}
          </p>
        </div>
        <ArrowRight
          size={13}
          className={`mt-1 text-[#686b70] group-hover:text-[#2b2e35] transition-all flex-shrink-0 ${hover ? 'translate-x-0.5' : ''}`}
        />
      </div>
    </a>
  );
}

export default function MegaExperts({ data }) {
  return (
    <div className="nk-mega-grid">
      <LeftPanel data={data} />
      <div className="nk-mega-right">
        {/* Editorial header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <div className="nk-mark-aubergine">Practice areas</div>
            <h2 className="font-serif-display text-[26px] leading-[1.15] text-[#1b1d21] mt-2">
              Ten institutional real-estate practices.
            </h2>
          </div>
          <div className="text-right hidden md:block">
            <div className="text-[10.5px] uppercase tracking-[0.16em] text-[#686b70]">Select a practice</div>
            <div className="text-[12.5px] text-[#1b1d21] mt-1">to explore its full scope</div>
          </div>
        </div>

        {/* Clean responsive grid: 2 cols mobile → 3 cols small → 5 cols large */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 lg:gap-x-6 gap-y-0">
          {data.columns.map((c) => (
            <Tile key={c.title} col={c} section={data.key} />
          ))}
        </div>

        {/* Slim architectural divider */}
        <div className="nk-divider-aubergine mt-8" />

        {/* Bottom strip — one editorial line + Discover Academy CTA */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[12.5px] leading-[1.6] text-[#686b70] max-w-[560px]">
            Each practice is led by senior partners on the ground in the UAE — combining sector experience with the discipline of a global consultancy.
          </p>
          <a
            href="/expertise/real-estate-academy"
            className="inline-flex items-center gap-2 bg-[#2b2e35] hover:bg-[#14161a] text-white text-[12px] tracking-[0.02em] px-5 py-2.5 transition-colors group"
          >
            Discover the Real Estate Academy
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
