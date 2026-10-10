import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Lower-case a title for use mid-sentence WITHOUT destroying acronyms or proper nouns
// ("DED / Mainland Licensing" -> "DED / mainland licensing", "M&A Advisory" -> "M&A advisory").
const KEEP = new Set(['Dubai', 'Abu', 'Dhabi', 'Emirati', 'Emiratisation', 'Sharjah', 'Gulf', 'Saudi', 'Middle', 'East', 'Africa', 'Europe', 'Asia', 'NK&CO']);
export function phrase(s = '') {
  return String(s)
    .split(' ')
    .map((w) => {
      const core = w.replace(/[^A-Za-z&]/g, '');
      if (KEEP.has(core)) return w;
      if (!/[a-z]/.test(w) && (w.match(/[A-Z]/g) || []).length >= 2) return w; // acronym
      if (/\d/.test(w)) return w;                                              // Q1, 2040, 6.0
      return w.toLowerCase();
    })
    .join(' ');
}
