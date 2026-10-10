// "Related pages" for the mega-menu preview: always pages from OTHER lists, never the rows already shown on the left.
// Picks three pages, each from a different list (item), preferring other categories of the same section, then other sections.
// Deterministic (same page -> same three), no title repeats, nothing from the current list.
const hash = (str) => { let h = 7; for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0; return h; };

export function relatedPages(sections, section, colTitle, itemLabel, child, count = 3) {
  const here = [section, colTitle, itemLabel].join('|');
  const seed = [here, child].join('|');
  const blocked = new Set();
  const groups = [];
  (sections || []).forEach((sec) => {
    (sec.columns || []).forEach((col) => {
      (col.items || []).forEach((raw) => {
        const it = typeof raw === 'string' ? { label: raw, children: [] } : raw;
        const kids = it.children || [];
        const key = [sec.key, col.title, it.label].join('|');
        if (!kids.length) return;
        if (key === here) { kids.forEach((k) => blocked.add(k)); return; }
        const tier = sec.key === section ? (col.title !== colTitle ? 0 : 2) : 1;
        groups.push({ key, sec: sec.key, col: col.title, item: it.label, kids, tier, rank: hash(seed + '#' + key) });
      });
    });
  });
  blocked.add(child);
  groups.sort((a, b) => a.tier - b.tier || a.rank - b.rank);
  const out = [];
  const usedTitles = new Set();
  const usedCats = new Set();
  // first pass: one page per category; second pass: fill up if there are not enough categories
  [true, false].forEach((distinctCats) => {
    groups.forEach((g) => {
      if (out.length >= count) return;
      if (out.some((o) => o.group === g.key)) return;
      if (distinctCats && usedCats.has(g.sec + '|' + g.col)) return;
      const pool = g.kids.filter((k) => !blocked.has(k) && !usedTitles.has(k));
      if (!pool.length) return;
      const pick = pool[hash(seed + '@' + g.key) % pool.length];
      usedTitles.add(pick); usedCats.add(g.sec + '|' + g.col);
      out.push({ group: g.key, section: g.sec, category: g.col, item: g.item, child: pick });
    });
  });
  return out;
}
