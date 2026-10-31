import React from 'react';
import MegaColumns from './mega/MegaColumns';
import MegaOMS from './mega/MegaOMS';
import MegaDeals from './mega/MegaDeals';
import MegaPublications from './mega/MegaPublications';
import MegaIntelligence from './mega/MegaIntelligence';
import MegaIndustries from './mega/MegaIndustries';
import MegaExperts from './mega/MegaExperts';
import MegaFirm from './mega/MegaFirm';
import MegaRail from './mega/MegaRail';
import MegaContact from './mega/MegaContact';

const LAYOUTS = {
  columns: MegaColumns,
  oms: MegaOMS,
  deals: MegaDeals,
  publications: MegaIntelligence,
  intelligence: MegaIntelligence,
  industries: MegaIndustries,
  sectors: MegaIndustries, // backward-compat alias
  experts: MegaExperts,
  firm: MegaFirm,
};

// Set to false to go back to the previous per-section layouts.
const USE_RAIL_LAYOUT = true;

export default function MegaMenu({ data, sections, onSelectSection, onClose, closing, mode = 'top' }) {
  // Contact is not a content section: it opens the Business Diagnostic form inside the same sheet.
  if (data.key === 'contact') {
    return (
      <div className="nk-mega" data-closing={closing || undefined} data-contact="">
        <div className="nk-mega-content" key="contact"><MegaContact onClose={onClose} mode={mode} sections={sections} onSelectSection={onSelectSection} /></div>
      </div>
    );
  }
  const Component = USE_RAIL_LAYOUT ? MegaRail : LAYOUTS[data.layout] || MegaColumns;
  return (
    <div className="nk-mega" data-closing={closing || undefined}>
      {/* key = fade only the content when switching sections; the panel itself stays put */}
      <div className="nk-mega-content" key={USE_RAIL_LAYOUT ? 'rail' : data.key}>
        <Component data={data} sections={sections} onSelectSection={onSelectSection} mode={mode} />
      </div>
    </div>
  );
}
