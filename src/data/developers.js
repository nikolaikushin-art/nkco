// Intelligence > Developers: every developer has its own six rows (own labels, own one-line description, own drawn icon)
// and its own tab line and plate colour. Nothing is shared between developers.
// Row order is always: profile, current, upcoming, delivered, news, buyer notes.
// Descriptions stay under ~78 characters so they do not truncate in the menu.
// Only widely known public facts are used (project names, listings, parent groups). Check them before publishing.
// Row = [label, description, icon]. Icons are names from src/lib/topicPlate.js.

export const DEVELOPERS = [
  { name: 'Topaz Developers', accent: '#3d5a80', tab: 'Topaz Developers: who is behind it, what is on sale and what comes next.', rows: [
    ['The Topaz Story', 'Where Topaz Developers came from, who leads it and how it builds.', 'seal'],
    ['Topaz Active Sites', 'Topaz projects selling or in build, with unit types and status.', 'crane'],
    ['Topaz Next Releases', 'Launches Topaz has announced or hinted at, and what to expect.', 'calendar'],
    ['Topaz Handed Over', 'Topaz buildings completed and handed to owners.', 'key'],
    ['Topaz in the Press', 'Recent Topaz announcements and market coverage.', 'newspaper'],
    ['Buying from Topaz', 'Payment plans and points to check before you buy.', 'tag'],
  ] },
  { name: 'Emaar', accent: '#8a6d2f', tab: 'Emaar: the Downtown Dubai builder, its districts, launches and results.', rows: [
    ['Emaar at a Glance', 'The Downtown Dubai master developer: leadership, listing and approach.', 'tower'],
    ['Downtown and Dubai Hills', 'Emaar flagship districts and the homes now on sale there.', 'map'],
    ['Emaar Launch Calendar', 'Forthcoming Emaar releases, timing and what happens when one opens.', 'calendar'],
    ['Burj Khalifa to Creek Harbour', 'Landmarks and communities Emaar has finished and how they trade.', 'star'],
    ['Emaar Newsroom', 'Results, launches, awards and coverage from Emaar.', 'megaphone'],
    ['Emaar Buyer Guide', 'Payment plans, service charges and resale points for Emaar homes.', 'coins'],
  ] },
  { name: 'DAMAC', accent: '#7a2e2e', tab: 'DAMAC: branded towers, large communities and what to weigh before buying.', rows: [
    ['DAMAC Overview', 'Who runs DAMAC, how it is organised and its branded-living approach.', 'people'],
    ['Lagoons and Hills Today', 'DAMAC Lagoons, DAMAC Hills and other communities on sale or in build.', 'sofa'],
    ['DAMAC Brand Partnerships', 'Fashion, auto and hotel tie-ups behind DAMAC towers, and how they launch.', 'rings'],
    ['DAMAC Handover Record', 'Completed DAMAC towers and communities and how they have performed.', 'checklist'],
    ['DAMAC Headlines', 'Recent DAMAC launches, deals and market coverage.', 'newspaper'],
    ['Investing in DAMAC', 'Payment plans, yields and exit points for DAMAC buyers.', 'growth'],
  ] },
  { name: 'Nakheel', accent: '#2f6f6b', tab: 'Nakheel: the waterfront master developer, from the Palm to Dubai Islands.', rows: [
    ['Nakheel and the Palm', 'The master developer behind Palm Jumeirah: ownership and role.', 'compass'],
    ['Waterfront Projects Now', 'Palm Jebel Ali, Dubai Islands and other Nakheel projects on sale.', 'pin'],
    ['Nakheel Launch Pipeline', 'Announced Nakheel phases and what to expect from each release.', 'timeline'],
    ['Palm and Islands Delivered', 'Palm Jumeirah, Jumeirah Islands and other finished Nakheel communities.', 'house'],
    ['Nakheel News Desk', 'Recent Nakheel announcements, awards and coverage.', 'pen'],
    ['Nakheel Buyer Checks', 'Ownership terms, service charges and resale points to check.', 'scales'],
  ] },
  { name: 'Sobha Realty', accent: '#6b4a2a', tab: 'Sobha Realty: in-house construction, Sobha Hartland and the launches ahead.', rows: [
    ['Sobha Realty Profile', 'The Hartland developer: leadership, in-house construction and approach.', 'factory'],
    ['Sobha Now Selling', 'Sobha Hartland and other projects on sale or in build.', 'blueprint'],
    ['Sobha Coming Soon', 'Announced Sobha launches, timing and what to expect.', 'eye'],
    ['Sobha Completed Homes', 'Finished Sobha communities and how the build quality holds up.', 'wrench'],
    ['Sobha Latest', 'Recent Sobha announcements, awards and coverage.', 'envelope'],
    ['Before You Buy Sobha', 'Payment plans, yields and resale record to check first.', 'vault'],
  ] },
  { name: 'Meraas', accent: '#3a5f4a', tab: 'Meraas: Dubai Holding\u2019s place-making arm, from Bluewaters to City Walk.', rows: [
    ['Meraas Profile', 'Dubai Holding\u2019s lifestyle developer: leadership and approach to places.', 'heart'],
    ['Bluewaters to City Walk', 'Meraas destinations and residences now selling or in build.', 'store'],
    ['Meraas Next Districts', 'Forthcoming Meraas districts and launches, with timing.', 'plane'],
    ['Meraas Finished Places', 'Completed Meraas destinations and how they perform for owners.', 'bag'],
    ['Meraas Dispatches', 'Recent Meraas openings, announcements and coverage.', 'mic'],
    ['Owning in Meraas Districts', 'Payment plans, rental demand and resale points to check.', 'gauge'],
  ] },
  { name: 'Dubai Properties', accent: '#4a4f7a', tab: 'Dubai Properties: the Dubai Holding developer behind JBR and Business Bay.', rows: [
    ['DP Corporate Profile', 'The Dubai Holding developer behind JBR and Business Bay: who leads it.', 'briefcase'],
    ['Business Bay and Villanova', 'Current Dubai Properties projects, with unit types and status.', 'hotel'],
    ['Dubai Properties Forthcoming', 'Announced launches and when they are expected.', 'ladder'],
    ['JBR and Mudon Delivered', 'Completed communities and how they have aged.', 'bed'],
    ['Dubai Properties Bulletin', 'Recent announcements and coverage.', 'document'],
    ['Dubai Properties Buyer Brief', 'Payment plans, service charges and what JBR and Business Bay resale looks like.', 'swap'],
  ] },
  { name: 'Danube Properties', accent: '#9b5a2f', tab: 'Danube Properties: the gem-named towers and the monthly payment plan.', rows: [
    ['Danube Properties Profile', 'The Danube Group\u2019s property arm: leadership and value-led approach.', 'bank'],
    ['Jewelz, Gemz and Bayz Today', 'Danube\u2019s current towers: location, unit types and status.', 'tower'],
    ['Danube Launch Watch', 'Forthcoming Danube towers and payment terms at launch.', 'funnel'],
    ['Danube Handovers', 'Danube towers completed and how handover went.', 'key'],
    ['Danube Updates', 'Recent Danube announcements and coverage.', 'megaphone'],
    ['Danube Payment Plan Explained', 'How the monthly payment plans work and what to check.', 'tag'],
  ] },
  { name: 'Azizi Developments', accent: '#2a6a8a', tab: 'Azizi Developments: founder-led, from Riviera to Milan and Venice.', rows: [
    ['Azizi Company Profile', 'The founder-led developer: leadership and approach.', 'seal'],
    ['Riviera, Milan and Venice', 'Azizi projects now selling or in build, with unit types.', 'map'],
    ['Azizi Upcoming Phases', 'Announced Azizi phases and what to expect from each.', 'timeline'],
    ['Azizi Completed Towers', 'Finished Azizi towers and how handover has gone.', 'checklist'],
    ['Azizi Headlines', 'Recent Azizi launches, awards and coverage.', 'newspaper'],
    ['Azizi Buyer Primer', 'Payment plans, rental returns and resale points to check.', 'coins'],
  ] },
  { name: 'Binghatti', accent: '#5a5a5a', tab: 'Binghatti: sculpted facades and branded collaborations.', rows: [
    ['Binghatti Profile', 'The design-led developer known for sculpted facades: leadership and approach.', 'blueprint'],
    ['Binghatti Towers Now', 'Binghatti towers on sale or in build, with unit types.', 'crane'],
    ['Binghatti Collaborations', 'Mercedes-Benz, Bugatti and Jacob & Co projects and their timing.', 'rings'],
    ['Binghatti Delivered', 'Binghatti buildings completed and how they have held up.', 'house'],
    ['Binghatti in Print', 'Recent Binghatti launches and market coverage.', 'pen'],
    ['Binghatti Buyer Notes', 'Payment plans, yields and how design-led units resell.', 'gauge'],
  ] },
  { name: 'Ellington Properties', accent: '#7a6a3c', tab: 'Ellington Properties: design-led boutique buildings.', rows: [
    ['Ellington Profile', 'The design-led boutique developer: leadership and approach.', 'chair'],
    ['Ellington Collections Now', 'Ellington collections on sale or in build, with unit types.', 'sofa'],
    ['Ellington Next Collection', 'The next Ellington release and what to expect.', 'calendar'],
    ['Ellington Delivered Homes', 'Completed Ellington buildings and finish quality in use.', 'key'],
    ['Ellington Journal', 'Recent Ellington announcements and coverage.', 'newspaper'],
    ['Ellington Buyer Primer', 'Payment plans and what boutique buildings mean for rents and resale.', 'tag'],
  ] },
  { name: 'Omniyat', accent: '#6a2f5a', tab: 'Omniyat: ultra-prime towers and design-led landmarks.', rows: [
    ['Omniyat Profile', 'The ultra-prime developer behind The Opus: leadership and approach.', 'star'],
    ['Omniyat Landmarks Now', 'Omniyat towers on sale or in build, with unit types.', 'tower'],
    ['Omniyat Private Releases', 'Forthcoming Omniyat launches and how access works.', 'lock'],
    ['The Opus and Delivered Icons', 'Completed Omniyat landmarks and how they have performed.', 'trophy'],
    ['Omniyat in the Media', 'Recent Omniyat announcements and coverage.', 'eye'],
    ['Prime Ownership Notes', 'Payment plans, service costs and resale points for prime buyers.', 'vault'],
  ] },
  { name: 'Select Group', accent: '#2f4f6a', tab: 'Select Group: Marina and Business Bay towers.', rows: [
    ['Select Group Profile', 'The Dubai Marina and Business Bay developer: leadership and approach.', 'org'],
    ['Marina and Business Bay Now', 'Select Group towers on sale or in build, with unit types.', 'hotel'],
    ['Select Group Pipeline', 'Announced Select Group launches and timing.', 'ladder'],
    ['Select Delivered Towers', 'Completed Select Group towers and how they have performed.', 'checklist'],
    ['Select Group Updates', 'Recent Select Group announcements and coverage.', 'envelope'],
    ['Select Buyer Primer', 'Payment plans, marina-area yields and resale record.', 'scales'],
  ] },
  { name: 'Aldar', accent: '#3a6a5a', tab: 'Aldar: Abu Dhabi\u2019s listed developer, from Yas to Saadiyat.', rows: [
    ['Aldar Corporate Profile', 'Abu Dhabi\u2019s listed developer: leadership, divisions and approach.', 'bank'],
    ['Yas, Saadiyat and Beyond', 'Aldar communities on sale or in build, with unit types.', 'compass'],
    ['Aldar Launch Outlook', 'Announced Aldar launches, timing and what to expect.', 'globe'],
    ['Aldar Delivered Communities', 'Completed Aldar communities and how they have performed.', 'leaf'],
    ['Aldar Newsroom', 'Results, launches and coverage from Aldar.', 'mic2'],
    ['Aldar Buyer Notes', 'Payment terms, yields and resale points for Abu Dhabi buyers.', 'growth'],
  ] },
  { name: 'Nshama', accent: '#8a5a6a', tab: 'Nshama: Town Square and family-scale communities.', rows: [
    ['Nshama Profile', 'The developer behind Town Square Dubai: leadership and approach.', 'house'],
    ['Town Square Today', 'Town Square projects now selling or in build.', 'pin'],
    ['Nshama Next Phases', 'Announced Nshama phases and what to expect.', 'timeline'],
    ['Town Square Completed', 'Finished Nshama homes and how the community has settled.', 'heart'],
    ['Nshama Press Room', 'Recent Nshama announcements and coverage.', 'pen'],
    ['Town Square Buyer Primer', 'Payment plans, rents and resale points to check.', 'key'],
  ] },
  { name: 'Deyaar', accent: '#5a4a7a', tab: 'Deyaar: DFM-listed developer, from Midtown to Studio City.', rows: [
    ['Deyaar Profile', 'The DFM-listed developer: leadership, ownership and approach.', 'briefcase'],
    ['Midtown and Studio City', 'Deyaar projects on sale or in build, with unit types.', 'blueprint'],
    ['Deyaar Next Launches', 'Announced Deyaar launches and timing.', 'calendar'],
    ['Deyaar Delivered Homes', 'Completed Deyaar buildings and how they have performed.', 'bed'],
    ['Deyaar Disclosures', 'Results, announcements and coverage from Deyaar.', 'document'],
    ['Deyaar Buyer Checks', 'Payment plans, yields and what a listed developer owes buyers.', 'tag'],
  ] },
  { name: 'Wasl Properties', accent: '#4a6a3a', tab: 'Wasl Properties: Dubai\u2019s government-linked landlord and developer.', rows: [
    ['Wasl Group Profile', 'Dubai\u2019s government-linked landlord and developer: role and approach.', 'org'],
    ['Wasl Projects in Build', 'Wasl projects on sale or in build, with unit types.', 'crane'],
    ['Wasl Launch Preview', 'Announced Wasl launches and timing.', 'eye'],
    ['Wasl Completed Portfolio', 'Finished Wasl buildings and how they have performed.', 'warehouse'],
    ['Wasl Announcements', 'Recent Wasl news and coverage.', 'megaphone'],
    ['Wasl Tenant and Buyer Notes', 'Lease terms, payment plans and points to check.', 'checklist'],
  ] },
  { name: 'Union Properties', accent: '#7a4a2a', tab: 'Union Properties: Motor City and Falcon City of Wonders.', rows: [
    ['Union Properties Profile', 'The DFM-listed developer behind Motor City: leadership and approach.', 'seal'],
    ['Motor City and Falcon City', 'Union Properties projects on sale or in build.', 'map'],
    ['Union Properties Ahead', 'Announced launches and timing.', 'plane'],
    ['Union Delivered Communities', 'Completed Union Properties communities and how they trade.', 'house'],
    ['Union Properties Wire', 'Results, announcements and coverage.', 'newspaper'],
    ['Union Buyer Brief', 'Payment plans, service charges and how Motor City homes resell.', 'coins'],
  ] },
  { name: 'Imtiaz Developments', accent: '#2f5a7a', tab: 'Imtiaz Developments: profile, projects and what to check.', rows: [
    ['Imtiaz Developments Profile', 'Who Imtiaz is, who leads it and how it builds.', 'people'],
    ['Imtiaz Live Projects', 'Imtiaz projects now selling or in build, with unit types.', 'tower'],
    ['Imtiaz Launch Horizon', 'Announced Imtiaz launches and what to expect.', 'timeline'],
    ['Imtiaz Finished Work', 'Imtiaz buildings completed and handed over.', 'key'],
    ['Imtiaz Media Watch', 'Recent Imtiaz announcements and coverage.', 'mic'],
    ['Imtiaz Buyer Questions', 'Questions to put to Imtiaz on payment plans, returns and resale.', 'search'],
  ] },
  { name: 'Tiger Properties', accent: '#8a4a1a', tab: 'Tiger Properties: profile, towers and what to check.', rows: [
    ['Tiger Properties Profile', 'The Tiger Group\u2019s property arm: leadership and approach.', 'briefcase'],
    ['Tiger Towers Under Way', 'Tiger projects on sale or in build, with unit types.', 'hotel'],
    ['Tiger Launch Alert', 'Announced Tiger launches and timing.', 'megaphone'],
    ['Tiger Completed Buildings', 'Finished Tiger buildings and how they have performed.', 'checklist'],
    ['Tiger Headlines', 'Recent Tiger announcements and coverage.', 'pen'],
    ['Tiger Buyer Basics', 'Payment plan terms and return figures to confirm with Tiger.', 'gauge'],
  ] },
  { name: 'Arada', accent: '#3a7a7a', tab: 'Arada: the Sharjah developer behind Aljada and Masaar.', rows: [
    ['Arada Profile', 'The Sharjah developer behind Aljada and Masaar: leadership and approach.', 'globe'],
    ['Aljada and Masaar Now', 'Arada communities on sale or in build, with unit types.', 'sofa'],
    ['Arada Next Neighbourhoods', 'Announced Arada phases and what to expect.', 'compass'],
    ['Arada Completed Homes', 'Finished Arada homes and how the communities have settled.', 'heart'],
    ['Arada Newsroom', 'Recent Arada launches, awards and coverage.', 'mic2'],
    ['Arada Buyer Notes', 'Payment plans, Sharjah ownership rules and resale points.', 'swap'],
  ] },
  { name: 'Samana Developers', accent: '#6a3a4a', tab: 'Samana Developers: flexible payment plan launches.', rows: [
    ['Samana Profile', 'Who Samana is, who leads it and how it builds.', 'people'],
    ['Samana Current Launches', 'Samana projects on sale or in build, with unit types.', 'blueprint'],
    ['Samana What\u2019s Next', 'Announced Samana launches and what to expect.', 'calendar'],
    ['Samana Handed Over', 'Samana buildings completed and handed over.', 'bed'],
    ['Samana Press Corner', 'Recent Samana announcements and coverage.', 'newspaper'],
    ['Samana Payment Plans', 'How the payment plans are structured and what to check.', 'tag'],
  ] },
  { name: 'Object 1', accent: '#4a4a6a', tab: 'Object 1: profile, projects and what to check.', rows: [
    ['Object 1 Profile', 'Who Object 1 is, who leads it and how it builds.', 'seal'],
    ['Object 1 Projects Now', 'Object 1 projects on sale or in build, with unit types.', 'crane'],
    ['Object 1 Launch Notes', 'Announced Object 1 launches and what to expect.', 'timeline'],
    ['Object 1 Delivered', 'Object 1 buildings completed and handed over.', 'key'],
    ['Object 1 Coverage', 'Recent Object 1 announcements and coverage.', 'eye'],
    ['Object 1 Buyer Guide', 'Payment schedule, expected returns and exit options to confirm.', 'scales'],
  ] },
  { name: 'Reportage Properties', accent: '#7a5a3a', tab: 'Reportage Properties: profile, projects and what to check.', rows: [
    ['Reportage Profile', 'Who Reportage is, who leads it and how it builds.', 'org'],
    ['Reportage Current Sites', 'Reportage projects on sale or in build, with unit types.', 'tower'],
    ['Reportage Launch Pipeline', 'Announced Reportage launches and timing.', 'funnel'],
    ['Reportage Completed Work', 'Reportage buildings completed and handed over.', 'house'],
    ['Reportage Bulletin', 'Recent Reportage announcements and coverage.', 'document'],
    ['Reportage Buyer Brief', 'Instalment terms, returns and resale evidence to ask for.', 'vault'],
  ] },
  { name: 'MAG', accent: '#3a5a8a', tab: 'MAG: MAG Lifestyle Development, MAG City and beyond.', rows: [
    ['MAG Group Profile', 'MAG Lifestyle Development: leadership and approach.', 'star'],
    ['MAG City and Beyond', 'MAG projects on sale or in build, with unit types.', 'map'],
    ['MAG Coming Next', 'Announced MAG launches and timing.', 'plane'],
    ['MAG Delivered Projects', 'Finished MAG buildings and how they have performed.', 'checklist'],
    ['MAG Updates', 'Recent MAG announcements and coverage.', 'megaphone'],
    ['MAG Buyer Checks', 'Payment plans, yields and community resale points.', 'coins'],
  ] },
  { name: 'Mered', accent: '#5a7a4a', tab: 'Mered: profile, projects and what to check.', rows: [
    ['Mered Profile', 'Who Mered is, who leads it and how it builds.', 'heart'],
    ['Mered Active Projects', 'Mered projects on sale or in build, with unit types.', 'blueprint'],
    ['Mered Release Outlook', 'Announced Mered launches and what to expect.', 'ladder'],
    ['Mered Finished Homes', 'Mered buildings completed and handed over.', 'sofa'],
    ['Mered in the News', 'Recent Mered announcements and coverage.', 'mic'],
    ['Mered Buyer Questions', 'What to ask Mered about payment plans, returns and exits.', 'search'],
  ] },
];

export const DEV_ROW_DESC = {};
export const DEV_ROW_MOTIF = {};
export const DEV_ROW_ACCENT = {};
export const DEV_TAB_DESC = {};
DEVELOPERS.forEach((d) => {
  DEV_TAB_DESC[d.name] = d.tab;
  d.rows.forEach(([label, desc, motif]) => {
    DEV_ROW_DESC[label] = desc;
    DEV_ROW_MOTIF[label] = motif;
    DEV_ROW_ACCENT[label] = d.accent;
  });
});

// lookups tolerant of labels or slugs
export const devSlug = (x = '') => String(x).toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const BY_SLUG = {};
DEVELOPERS.forEach((d) => d.rows.forEach(([label, , motif]) => { BY_SLUG[devSlug(label)] = { motif, accent: d.accent }; }));
export const devRow = (child) => BY_SLUG[devSlug(child)] || null;
