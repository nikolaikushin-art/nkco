// Framework s.19.1 and s.23.7: no unsubstantiated claims of performance, scale, rankings, returns or transactions.
// Copy that matches is not shown; pages fall back to the neutral, framework-based wording instead.
// Remove an entry from the pattern only once the claim can be evidenced.
const RISKY = new RegExp([
  'off-market', 'for sale', 'businesses for sale', '\\byields?\\b', 'bulge', '\\bawards?\\b', 'award-winning', 'guarantee',
  '\\d+(\\.\\d+)?\\s?(%|x\\b)', '\\b(AED|USD|US\\$|EUR|GBP)\\s?\\d', '\\$\\s?\\d', '\\b(billion|million|trillion|bn|mn)\\b',
  'ranked', '#1', '\\bleading\\b', '\\blargest\\b', '\\bunrivalled\\b', '\\bworld-class\\b', 'best-in-class', 'top-tier', 'tier-1',
  'live (deal|mandate)', 'deal flow', 'deal-flow', 'sovereign', 'family offices? (allocat|invest)', 'proprietary', 'exclusive (access|mandate)',
  'trusted by', 'decades of', 'years of experience', 'track record', 'on the ground', 'senior partners?', 'named partner',
].join('|'), 'i');

export const isSafe = (t) => typeof t === 'string' && t.trim() !== '' && !RISKY.test(t);
export const clean = (t) => (isSafe(t) ? t : null);
export const cleanMap = (m) => Object.fromEntries(Object.entries(m || {}).filter(([, v]) => isSafe(v)));
export const riskyJson = (o) => RISKY.test(JSON.stringify(o || ''));

// Removes list entries and strings that make unsubstantiated claims, recursively.
export function deepClean(v) {
  if (typeof v === 'string') return v;
  if (Array.isArray(v)) return v.filter((x) => !riskyJson(x)).map(deepClean);
  if (v && typeof v === 'object') {
    const o = {};
    Object.entries(v).forEach(([k, x]) => { if (typeof x === 'string' && !isSafe(x) && /^(d|v|a|desc|note|lead|body|text)$/.test(k)) return; o[k] = deepClean(x); });
    return o;
  }
  return v;
}
