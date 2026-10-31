import React from 'react';
import { CapWorkspace } from './CapVisual';

// v659 · the same working OMS tablet scene as the section pages, for Intelligence hub, series and piece pages.
// Built from the page's own list of items (desks, collections, series or pieces) and its figures.
export default function IntelTablet({ title, items, metrics, where }) {
  const list = (items || []).map(String).filter(Boolean);
  const P = React.useMemo(() => {
    const L = list.length ? list : [title];
    const at = (i) => L[i % L.length];
    const stages = [['Browse', 'Find what is in the library for your question.'], ['Read', 'Take the piece in, at your own pace.'], ['Apply', 'Use the guide, tool or template on your own case.'], ['Review', 'Bring it to a partner for a view on your position.']]
      .map(([t, d], i) => ({ title: t, desc: d, out: at(i) }));
    const deli = L.slice(0, 8);
    const ws = L.slice(0, 6).map((t) => ({ t, d: '' }));
    const stats = (metrics || []).map(([v, l]) => ({ value: String(v), label: String(l), note: '' }));
    return { stages, deli, scope: ws, ws, stats, eng: [], cases: [], dec: [], faqs: [], outc: [], rels: [], rows: [] };
  }, [list.join('|'), title, metrics]);
  return <CapWorkspace P={P} title={title} where={where || ['Intelligence']} />;
}
