// Featured reports shown at the foot of the mega menu's right-hand column.
// Section-specific supporting items (data.supporting) come first; these fill any remaining slots, de-duplicated by title.
// Add `date: '09 Oct 2026'` to any entry to show it after the tag.
export const FEATURED_REPORTS = [
  { tag: 'Flagship report', date: 'Q1 2026', title: 'UAE Real Estate Market Review \u2014 Q1 2026', href: '#' },
  { tag: 'Outlook', date: '2026', title: 'Global Capital Flows Outlook 2026', href: '#' },
  { tag: 'Research', date: 'Q1 2026', title: 'The Institutional Deal Board \u2014 Q1 2026', href: '#' },
  { tag: 'Report', date: '2026', title: 'The UAE C-Suite Compensation Study 2026', href: '#' },
  { tag: 'Live data', title: 'The Dubai Grade-A Office Live Dashboard', href: '#' },
];

export const MAX_REPORTS = 5;

export function getReports(supporting = []) {
  const seen = new Set();
  return [...supporting, ...FEATURED_REPORTS]
    .filter((r) => r && r.title && !seen.has(r.title) && seen.add(r.title))
    .slice(0, MAX_REPORTS);
}
