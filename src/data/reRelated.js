// v232: "Related pages" for Real Estate Ventures are set by hand and never leave the Real Estate Ventures column.
// Pairs are [item label, page label]. Leaf-level entries win; item-level entries are the fallback for every other page.
const F = 'Business Formation', B = 'Business Foundation', R = 'Agent Recruitment', D = 'The Dubai Real Estate Case';
export const LEAF_REL = {
  [`${F}|Brand and Identity`]: [[B, 'Website and Listings Feed'], [B, 'Marketing Engine and Lead Sources'], [F, 'Company Incorporation']],
  [`${F}|Brokerage Licensing`]: [[F, 'Company Incorporation'], [B, 'Compliance and Procedure Manuals'], [R, 'Licence and Card Onboarding']],
  [`${F}|Company Incorporation`]: [[F, 'Free Zone or Mainland Choice'], [F, 'Bank and Escrow Accounts'], [B, 'Contracts and Paperwork']],
  [`${F}|Bank and Escrow Accounts`]: [[F, 'Company Incorporation'], [B, 'Contracts and Paperwork'], ['Development Start-Up', 'Escrow-Ready Structure']],
  [`${F}|Free Zone or Mainland Choice`]: [[F, 'Company Incorporation'], [F, 'Brokerage Licensing'], [D, 'Rules That Protect Founders']],
  [`${B}|Website and Listings Feed`]: [[F, 'Brand and Identity'], [B, 'CRM System Build'], [B, 'Marketing Engine and Lead Sources']],
  [`${B}|CRM System Build`]: [[B, 'Website and Listings Feed'], ['Resale Brokerage', 'Buyer Matching System'], [R, 'Training Launchpad']],
  [`${B}|Contracts and Paperwork`]: [[B, 'Compliance and Procedure Manuals'], [F, 'Company Incorporation'], [R, 'Commission Plan Design']],
  [`${B}|Compliance and Procedure Manuals`]: [[B, 'Contracts and Paperwork'], [F, 'Brokerage Licensing'], [R, 'Training Launchpad']],
  [`${B}|Marketing Engine and Lead Sources`]: [[B, 'Website and Listings Feed'], [F, 'Brand and Identity'], ['Resale Brokerage', 'Seller Lead Generation']],
  [`${R}|Agent Sourcing`]: [[R, 'Commission Plan Design'], [R, 'Licence and Card Onboarding'], [F, 'Brokerage Licensing']],
  [`${R}|Team Leader Hiring`]: [[R, 'Team Structures and Desk Design'], [R, 'Commission Plan Design'], [R, 'Agent Retention Plans']],
  [`${R}|Licence and Card Onboarding`]: [[F, 'Brokerage Licensing'], [R, 'Training Launchpad'], [B, 'Compliance and Procedure Manuals']],
  [`${R}|Commission Plan Design`]: [[R, 'Agent Retention Plans'], [B, 'Contracts and Paperwork'], [D, 'How Real Estate Firms Earn']],
  [`${R}|Training Launchpad`]: [[B, 'CRM System Build'], [B, 'Compliance and Procedure Manuals'], [R, 'Agent Retention Plans']],
  [`${R}|Agent Retention Plans`]: [[R, 'Commission Plan Design'], [R, 'Team Structures and Desk Design'], [R, 'Team Leader Hiring']],
  [`${R}|Team Structures and Desk Design`]: [[R, 'Team Leader Hiring'], [R, 'Commission Plan Design'], [B, 'CRM System Build']],
};
const FORM = [F, 'Brokerage Licensing'], FOUND = [B, 'CRM System Build'], PEOPLE = [R, 'Agent Sourcing'];
const INC = [F, 'Company Incorporation'], MAN = [B, 'Compliance and Procedure Manuals'];
export const ITEM_REL = {
  [D]: [FORM, ['Join or Acquire', 'Co-Founder Matching'], PEOPLE],
  'Join or Acquire': [INC, [D, 'Rules That Protect Founders'], PEOPLE],
  'Off-Plan Agency': [FORM, FOUND, ['Resale Brokerage', 'Resale Desk Launch']],
  'Resale Brokerage': [FORM, FOUND, ['Mortgage and Finance Brokerage', 'Developer and Agency Referral Deals']],
  'Commercial Agency': [FORM, FOUND, PEOPLE],
  'Holiday Home Operator': [INC, MAN, ['Property Management Firm', 'Owner Reporting Suite']],
  'Property Management Firm': [INC, FOUND, ['Holiday Home Operator', 'Owner Acquisition Engine']],
  'Co-Living and Serviced Living': [INC, MAN, ['Property Management Firm', 'Maintenance Network']],
  'Mortgage and Finance Brokerage': [['Business Formation', 'Company Incorporation'], MAN, ['Resale Brokerage', 'Transfer and Mortgage Desk']],
  'Valuation and Advisory Practice': [INC, MAN, ['Resale Brokerage', 'Valuation Credibility']],
  'Property Investment Company': [INC, ['Business Formation', 'Bank and Escrow Accounts'], ['Fractional and Syndicated Ownership', 'Structure Selection']],
  'Fractional and Syndicated Ownership': [INC, MAN, ['Property Investment Company', 'Investor Capital Raising']],
  'PropTech and Listings Platform': [INC, [B, 'Website and Listings Feed'], ['Resale Brokerage', 'Buyer Matching System']],
  'Development Start-Up': [INC, ['Business Formation', 'Bank and Escrow Accounts'], ['Off-Plan Agency', 'Developer Appointments']],
  [F]: [FOUND, PEOPLE, [D, 'Your First Twelve Months']],
  [B]: [FORM, PEOPLE, [D, 'Your First Twelve Months']],
  [R]: [FORM, FOUND, [D, 'How Real Estate Firms Earn']],
};
export const RE_COL = 'Real Estate Ventures';
// v249: the Real Estate Ventures category page itself (no item chosen) had no related pages; these three setup pages are its starting points.
export const COL_REL = [INC, FOUND, PEOPLE];

// v233: curated links from The Dubai Real Estate Case (Intelligence) to the ventures and the setup pages beneath Opportunities.
export const RE_CASE = D;
export const CASE_REL = {
  '*': [['Join or Acquire', 'Co-Founder Matching'], ['Resale Brokerage', 'Resale Desk Launch'], [F, 'Brokerage Licensing']],
  'A Market Built on Property': [['Resale Brokerage', 'Resale Desk Launch'], ['Property Management Firm', 'Landlord Mandate Building'], ['Property Investment Company', 'Deal Sourcing and Underwriting']],
  'Who Buys and Why': [['Off-Plan Agency', 'Overseas Investor Channels'], ['Resale Brokerage', 'Buyer Matching System'], ['Holiday Home Operator', 'Owner Acquisition Engine']],
  'How Real Estate Firms Earn': [['Off-Plan Agency', 'Commission Terms'], ['Property Management Firm', 'Landlord Mandate Building'], [R, 'Commission Plan Design']],
  'Rules That Protect Founders': [[F, 'Brokerage Licensing'], [F, 'Free Zone or Mainland Choice'], ['Development Start-Up', 'Escrow-Ready Structure']],
  'Your First Twelve Months': [[F, 'Company Incorporation'], [B, 'CRM System Build'], [R, 'Agent Sourcing']],
  'Market Cycles and Timing': [['Property Management Firm', 'Leasing and Renewal Desk'], ['Join or Acquire', 'Buy a Going Concern'], ['Property Investment Company', 'Buy-to-Let Portfolio Building']],
};
