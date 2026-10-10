// "Partner in charge" line shown under each mega-menu service.
// Fill in real names to override the default. Lookup order: PARTNERS[section][category] -> DEFAULT_PARTNER.
// Set a value to null to hide the line for that category. Fields: name, title, email, phone (phone optional).
export const DEFAULT_PARTNER = {
  name: 'Office of the Managing Partner',
  title: 'NK&CO',
  email: 'info@nkco.ae',
};

export const PARTNERS = {
  // example:
  // capabilities: {
  //   'Business Deployment': { name: 'Full Name', title: 'Managing Partner', email: 'name@nkco.ae', phone: '+971 4 000 0000' },
  // },
};

export function getPartner(section, category) {
  const bySection = PARTNERS[section];
  if (bySection && Object.prototype.hasOwnProperty.call(bySection, category)) return bySection[category];
  return DEFAULT_PARTNER;
}
