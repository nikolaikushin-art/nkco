import React from 'react';
import { LeftPanel, Column } from './parts';

export default function MegaColumns({ data }) {
  const cols = data.columns || [];
  const gridCols = cols.length === 4 ? 'grid-cols-2' : 'grid-cols-3';
  return (
    <div className="nk-mega-grid">
      <LeftPanel data={data} />
      <div className="nk-mega-right">
        <div className={`grid ${gridCols} gap-x-8 gap-y-8`}>
          {cols.map((c) => (
            <Column key={c.title} col={c} section={data.key} />
          ))}
        </div>
      </div>
    </div>
  );
}
