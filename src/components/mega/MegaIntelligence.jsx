// NK&CO — Intelligence mega menu
// Editorial magazine layout: featured flagship publication card + 4 clean
// category tiles with subtle icons. Restrained, calm, executive.
import React from 'react';
import { ArrowRight, FileText, LineChart, BookOpen, Radio } from 'lucide-react';
import { LeftPanel, leafHref } from './parts';

const CATEGORY_META = {
  'Research & Insights': {
    icon: FileText,
    desc: 'Sector reports, thematic whitepapers and executive briefings.',
  },
  'Data Platforms': {
    icon: LineChart,
    desc: 'Live market analytics, deal intelligence and real-asset dashboards.',
  },
  'Publications': {
    icon: BookOpen,
    desc: 'The NK&CO Quarterly, annual outlooks and special editions.',
  },
  'NK&CO Briefing': {
    icon: Radio,
    desc: 'Executive podcast — Dubai, UAE and the GCC in conversation.',
  },
};

function IntelligenceTile({ col, section }) {
  const meta = CATEGORY_META[col.title] || {};
  const Icon = meta.icon;
  return (
    <a
      href={leafHref(section, col.title)}
      className="group block py-6 pr-6 border-t border-[#d2d1cd] hover:border-[#2b2e35] transition-colors"
    >
      <div className="flex items-start gap-5">
        {Icon && (
          <div className="mt-1 w-10 h-10 border border-[#cfcecA] flex items-center justify-center text-[#1b1d21] group-hover:border-[#2b2e35] group-hover:text-[#2b2e35] transition-colors flex-shrink-0">
            <Icon size={16} strokeWidth={1.5} />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-serif-display text-[22px] leading-[1.15] text-[#1b1d21] group-hover:text-[#2b2e35] transition-colors">
              {col.title}
            </h3>
            <ArrowRight size={14} className="mt-1.5 text-[#686b70] group-hover:text-[#2b2e35] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
          </div>
          <p className="mt-2 text-[13px] leading-[1.6] text-[#686b70]">
            {meta.desc || ''}
          </p>
        </div>
      </div>
    </a>
  );
}

export default function MegaIntelligence({ data }) {
  const featuredPub = data.featuredPublications?.[0];
  return (
    <div className="nk-mega-grid">
      <LeftPanel data={data} />
      <div className="nk-mega-right">
        {/* Editorial header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <div className="nk-mark-aubergine">Institutional intelligence</div>
            <h2 className="font-serif-display text-[26px] leading-[1.15] text-[#1b1d21] mt-2">
              Proprietary research, data and executive perspective.
            </h2>
          </div>
        </div>

        {/* Grid: featured perspective card (left) + 4 category tiles (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured flagship publication — editorial hero card */}
          {featuredPub && (
            <a
              href="/intelligence/publications/uae-q1-2026"
              className="group lg:col-span-5 block relative overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#1b1d21]">
                <img
                  src={featuredPub.image}
                  alt={featuredPub.title}
                  className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b1d21] via-[#1b1d21]/60 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <div className="text-[10.5px] uppercase tracking-[0.22em] text-white/70">
                  {featuredPub.tag} · {featuredPub.date}
                </div>
                <h3 className="font-serif-display text-[24px] leading-[1.15] mt-3">
                  {featuredPub.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.55] text-white/80 line-clamp-2 max-w-[380px]">
                  {featuredPub.excerpt}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-[12.5px] text-white border-b border-white/50 group-hover:border-white pb-[2px] transition-colors">
                  <span>Read the report</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          )}

          {/* Category tiles */}
          <div className="lg:col-span-7 flex flex-col">
            {data.columns.map((c) => (
              <IntelligenceTile key={c.title} col={c} section={data.key} />
            ))}
            {/* Bottom border on last tile */}
            <div className="border-t border-[#d2d1cd]" />

            {/* Bottom row — recent perspectives strip */}
            {data.featuredPublications?.length > 1 && (
              <div className="mt-6 grid grid-cols-2 gap-4">
                {data.featuredPublications.slice(1, 3).map((p) => (
                  <a key={p.title} href="#" className="group flex items-start gap-3">
                    <div className="w-14 h-14 overflow-hidden bg-[#d2d1cd] flex-shrink-0">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-[#686b70]">{p.tag} · {p.date}</div>
                      <h4 className="mt-1 font-serif-display text-[14.5px] leading-[1.25] text-[#1b1d21] group-hover:text-[#2b2e35] transition-colors line-clamp-2">
                        {p.title}
                      </h4>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Slim architectural divider */}
        <div className="nk-divider-aubergine mt-8" />

        {/* Footer strip — subscribe CTA */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[12.5px] leading-[1.6] text-[#686b70] max-w-[560px]">
            The NK&amp;CO Intelligence Platform is available to principals, boards and institutional counterparties across the GCC.
          </p>
          <a
            href="/intelligence"
            className="inline-flex items-center gap-2 bg-[#2b2e35] hover:bg-[#14161a] text-white text-[12px] tracking-[0.02em] px-5 py-2.5 transition-colors group"
          >
            Enter the Intelligence Platform
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
