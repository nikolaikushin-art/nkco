// Opportunities — navigation columns only (no extra lower layer).
import React from 'react';
import { LeftPanel, Column } from './parts';

export default function MegaDeals({ data }) {
  return (
    <div className="nk-mega-grid">
      <LeftPanel data={data} />
      <div className="nk-mega-right">
        {/* Primary navigation first */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          {data.columns.map((c) => (
            <Column key={c.title} col={c} section={data.key} compact />
          ))}
        </div>

      </div>
    </div>
  );
}
