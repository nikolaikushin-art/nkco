// Intelligence — Navigation FIRST, latest Publications editorial section moved to the bottom.
import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { LeftPanel, Column } from './parts';

export default function MegaPublications({ data }) {
  const pubs = data.featuredPublications || [];
  return (
    <div className="nk-mega-grid">
      <LeftPanel data={data} />
      <div className="nk-mega-right">
        {/* Primary navigation first */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-8">
          {data.columns.map((c) => (
            <Column key={c.title} col={c} section={data.key} />
          ))}
        </div>

        {/* Latest publications — editorial section at the bottom */}
        {pubs.length > 0 && (
          <div className="mt-8 pt-6 border-t border-[#d2d1cd]">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-[10.5px] uppercase tracking-[0.16em] text-[#686b70] inline-flex items-center gap-2"><BookOpen size={12} /> Publications</div>
                <div className="font-serif-display text-[18px] text-[#1b1d21]">Latest from NK&amp;CO Research</div>
              </div>
              <a href="/intelligence" className="inline-flex items-center gap-1.5 text-[#646a73] hover:text-[#4a4f57] text-[12.5px]">
                Browse the library <ArrowRight size={13} />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-5">
              {pubs.map((p) => (
                <a key={p.title} href="#" className="group block">
                  <div className="aspect-[16/10] overflow-hidden bg-[#d2d1cd] relative">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                    <div className="absolute top-2.5 left-2.5 bg-white text-[#1b1d21] text-[9.5px] uppercase tracking-[0.12em] px-1.5 py-0.5">{p.tag}</div>
                  </div>
                  <div className="mt-2 text-[11px] text-[#686b70]">{p.date}</div>
                  <h5 className="mt-0.5 font-serif-display text-[15px] leading-[1.2] text-[#1b1d21] group-hover:text-[#646a73] transition-colors">{p.title}</h5>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
