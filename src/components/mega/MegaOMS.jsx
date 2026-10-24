// Infrastructure — clean layout without top metrics banner (per user request).
import React from 'react';
import { LeftPanel, Column } from './parts';

export default function MegaOMS({ data }) {
  return (
    <div className="nk-mega-grid">
      <LeftPanel data={data} />
      <div className="nk-mega-right">
        <div className="grid grid-cols-3 gap-x-8 gap-y-8">
          {data.columns.map((c) => (
            <Column key={c.title} col={c} section={data.key} />
          ))}
        </div>
      </div>
    </div>
  );
}
