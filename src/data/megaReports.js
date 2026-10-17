// Featured reports shown at the foot of the mega menu's right-hand column.
// Section-specific supporting items (data.supporting) come first; these fill any remaining slots, de-duplicated by title.
// Add `date: '09 Oct 2026'` to any entry to show it after the tag.
export const FEATURED_REPORTS = [
  { tag: 'Insight', title: 'How owner-managed businesses build management visibility', href: '#' },
  { tag: 'Guide', title: 'Preparing a business for a capital discussion: a readiness checklist', href: '#' },
  { tag: 'Insight', title: 'What buyers examine before a sale: business readiness', href: '#' },
  { tag: 'Insight', title: 'Succession and leadership capacity in owner-managed firms', href: '#' },
  { tag: 'Insight', title: 'Choosing the few measures that matter: a management-reporting primer', href: '#' },
];

export const MAX_REPORTS = 5;

export function getReports(supporting = []) {
  const seen = new Set();
  return [...supporting, ...FEATURED_REPORTS]
    .filter((r) => r && r.title && !seen.has(r.title) && seen.add(r.title))
    .slice(0, MAX_REPORTS);
}
