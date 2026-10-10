// Industries layout matching the CBRE-style reference screenshot:
// left panel with title, subtitle, image and description — right panel is a 3-column list
// of arrow-linked category items (no accordion) that link to their sector detail pages.
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LeftPanel, Column } from './parts';

export default function MegaIndustries({ data }) {
  // Use the standard LeftPanel for consistency, then a 3-col grid of columns.
  return (
    <div className="nk-mega-grid">
      <LeftPanel data={data} />
      <div className="nk-mega-right">
        <div className="grid grid-cols-3 gap-x-10 gap-y-8">
          {data.columns.map((c) => (
            <Column key={c.title} col={c} section={data.key} />
          ))}
        </div>
      </div>
    </div>
  );
}
