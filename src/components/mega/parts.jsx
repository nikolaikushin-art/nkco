// Shared mega menu building blocks — v3 with consistent featured + supporting
import React, { useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { slugify } from '../../mock';

export const leafHref = (section, category, item, child) => {
  const parts = ['/', section];
  if (category) parts.push('/', slugify(category));
  if (item) parts.push('/', slugify(item));
  if (child) parts.push('/', slugify(child));
  return parts.join('').replace(/\/+/g, '/');
};

export function AccordionItem({ item, section, category }) {
  const [open, setOpen] = useState(false);
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;
  return (
    <div className="nk-mega-acc">
      <button
        className="nk-mega-acc-trigger"
        data-open={open}
        onClick={() => hasChildren && setOpen((v) => !v)}
      >
        <span>{item.label}</span>
        <ChevronRight size={13} className="chev" />
      </button>
      {hasChildren && (
        <div className="nk-mega-acc-body" data-open={open}>
          <ul>
            {item.children.map((c) => (
              <li key={c}>
                <a href={leafHref(section, category, item.label, c)}>
                  <span>{c}</span>
                  <ArrowRight size={11} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function Column({ col, section, compact = false }) {
  return (
    <div className="min-w-0">
      <h3 className={`font-serif-display leading-tight text-[#1b1d21] ${compact ? 'text-[19px]' : 'text-[20px]'}`}>
        {col.title}
      </h3>
      {col.description && (
        <p className="mt-1.5 text-[12px] leading-[1.55] text-[#686b70] max-w-[260px]">
          {col.description}
        </p>
      )}
      <div className="mt-3">
        {col.items.map((it) => {
          const item = typeof it === 'string' ? { label: it, children: [] } : it;
          return <AccordionItem key={item.label} item={item} section={section} category={col.title} />;
        })}
      </div>
      {col.viewAll && (
        <a
          href={col.briefingHref || leafHref(section, col.title)}
          className="nk-view-all mt-3 inline-flex"
        >
          <span>{col.viewAll}</span>
          <ArrowRight size={13} />
        </a>
      )}
    </div>
  );
}

// Left panel: title, description, explore link, featured insight card w/ image at bottom.
// Every mega menu now uses this to guarantee visual + explore + featured content consistency.
export function LeftPanel({ data }) {
  return (
    <div className="nk-mega-left px-10 py-7 relative flex flex-col">
      <div className="relative z-10">
        <h2 className="font-serif-display text-[44px] leading-[0.98] text-[#1b1d21] tracking-[-0.005em]">{data.title}</h2>
        {data.subtitle && <div className="mt-3 text-[13px] font-medium text-[#1b1d21]">{data.subtitle}</div>}
        <div className="mt-5 w-16 h-px bg-[#c3c2be]" />
        <p className="mt-4 text-[14px] leading-[1.6] text-[#43474d] max-w-[280px]">{data.description}</p>
        {data.exploreLabel && (
          <a
            href={data.exploreHref || '#'}
            className="mt-5 inline-flex items-center gap-2 text-[#646a73] hover:text-[#4a4f57] transition-colors group text-[13.5px]"
          >
            <span className="border-b border-[#646a73] pb-[2px]">{data.exploreLabel}</span>
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </a>
        )}
      </div>

      {data.featured && (
        <div className="mt-7 relative z-10">
          <div className="h-px w-full bg-[#d3d2ce] mb-4" />
          {data.featured.image && (
            <div className="nk-feat-img aspect-[2/1] overflow-hidden mb-3">
              <img src={data.featured.image} alt={data.featured.title || ''} className="w-full h-full object-cover" />
            </div>
          )}
          {data.featured.tag && (
            <div className="text-[10.5px] uppercase tracking-[0.18em] text-[#686b70]">{data.featured.tag}</div>
          )}
          {data.featured.title && (
            <h4 className="font-serif-display text-[19px] leading-[1.2] text-[#1b1d21] mt-2">{data.featured.title}</h4>
          )}
          {data.featured.description && (
            <p className="nk-feat-desc mt-2 text-[13px] leading-[1.55] text-[#43474d] line-clamp-2">{data.featured.description}</p>
          )}
          {data.featured.ctaLabel && (
            <a href={data.featured.ctaHref || '#'} className="mt-3 inline-flex items-center gap-1.5 text-[#646a73] hover:text-[#4a4f57] transition-colors group text-[13px]">
              <span>{data.featured.ctaLabel}</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

