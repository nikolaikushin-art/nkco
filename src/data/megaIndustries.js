// "Relevant industries" line under the third-column cards (capabilities menu only).
// Edit freely: key = category title, value = up to 4 industry names. Falls back to DEFAULT.
export const DEFAULT_INDUSTRIES = ['Banking & Finance', 'Real Estate', 'Energy', 'Hospitality'];
export const CATEGORY_INDUSTRIES = {
  'Business Deployment': ['Retail & Consumer', 'Real Estate', 'Hospitality', 'Technology'],
  'Enterprise Consulting': ['Banking & Finance', 'Energy', 'Logistics', 'Government'],
  'Corporate Advisory': ['Family Offices', 'Real Estate', 'Banking & Finance', 'Holding Groups'],
  'Talent & Recruitment': ['Banking & Finance', 'Technology', 'Government', 'Healthcare'],
  'Capital Markets': ['Banking & Finance', 'Real Estate', 'Energy', 'Infrastructure'],
  'Mergers & Acquisitions': ['Real Estate', 'Healthcare', 'Technology', 'Industrials'],
};
export const getIndustries = (cat) => CATEGORY_INDUSTRIES[cat] || DEFAULT_INDUSTRIES;
