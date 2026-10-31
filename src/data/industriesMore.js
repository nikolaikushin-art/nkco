// NK&CO: additional industries (v244, advanced tier added in v245)
// (v246e: Energy & Utilities removed.) Five new top-level industries for the Industries menu. Edit the copy here; the menu, side panel, pages,
// featured cards and pictures all pick it up.
//
//   MORE_INDUSTRIES      -> appended to INDUSTRIES_MENU.columns in src/mock.js
//   MORE_ITEM_DESC       -> merged into ITEM_DESCRIPTIONS   (key: industries|Column|Item)
//   MORE_FEATURED        -> merged into the featured cards   (megaFeatured.js)
//   MORE_COL_LEADS / MORE_ITEM_LEADS / MORE_LEAF_DESC -> merged into leafDescriptions.js (page lead paragraphs)
//   MORE_CHILD_DESC      -> merged into CHILD_DESCRIPTIONS   (key: child label)
//
// Every child label is unique across the whole menu (checked when this file was written).
// All copy is draft. No firms, figures or dates are named.

import { ADV_DATA } from './industriesAdvanced';
import { GROW_NEW, GROW_ORIG } from './industriesGrow';

// Same rule as slugify() in mock.js (copied here to avoid a circular import).
const slug = (s = '') => String(s).toLowerCase().trim().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Column: { title, lead, feat:[title, desc], items:[ { label, desc, lead, feat:[title, desc], kids:[ [label, shortLine, pageLead] ] } ] }
const DATA = [
  {
    title: 'Healthcare & Wellness',
    lead: 'Advisory for hospital groups, clinics, suppliers, digital health companies and the wellness businesses growing around them in the UAE and GCC.',
    feat: ['Healthcare in the UAE: capacity, talent and the new investor', 'How demand, insurance mandates and medical tourism are reshaping the sector.'],
    items: [
      {
        label: 'Hospitals & Clinics',
        desc: 'Hospital groups, specialty clinics, diagnostics and primary care.',
        lead: 'Advisory for owners and operators of care facilities: hospital groups, specialty and day-case clinics, diagnostic centres and primary care networks.',
        feat: ['Specialty clinics: the roll-up opportunity in Gulf healthcare', 'Where platforms are being built and what makes them integrate well.'],
        kids: [
          ['Hospital Groups', 'Multi-site acute care operators.', 'Operators of multi-site acute care: capacity planning, payer mix, clinician recruitment, quality accreditation and the economics of new beds.'],
          ['Specialty & Day-Case Clinics', 'Dental, dermatology, fertility and more.', 'Focused clinics in dental, dermatology, fertility, orthopaedics and other specialties: unit economics, doctor partnerships and roll-up strategy.'],
          ['Diagnostics & Imaging', 'Laboratories and imaging centres.', 'Laboratories and imaging providers: test volumes, reimbursement, equipment investment, referral relationships and consolidation.'],
          ['Primary & Urgent Care', 'Community clinics and walk-in care.', 'Community clinics and urgent care: location strategy, insurer contracts, staffing models and patient access outside hospital settings.'],
        ],
      },
      {
        label: 'Pharma & Medical Supply',
        desc: 'Pharmacy retail, distribution, equipment and procurement.',
        lead: 'Advisory for the businesses that move medicines and equipment to patients and providers: pharmacies, distributors, device suppliers and procurement platforms.',
        feat: ['Pharma distribution: scale, cold chain and regulatory complexity', 'Why distribution capability is a strategic asset in Gulf healthcare.'],
        kids: [
          ['Pharmacy Retail', 'Chains, independents and online pharmacy.', 'Pharmacy chains and independents, plus online dispensing: margins, private label, insurance links and growth in health and beauty categories.'],
          ['Pharmaceutical Distribution', 'Wholesalers and cold-chain logistics.', 'Wholesalers and specialist distributors: licensing, cold-chain logistics, manufacturer agreements and tender supply to public hospitals.'],
          ['Medical Equipment & Devices', 'Suppliers, service and maintenance.', 'Suppliers of medical equipment and devices: agency agreements, installed-base service revenue, financing for providers and registration requirements.'],
          ['Healthcare Procurement', 'Group purchasing and supply platforms.', 'Group purchasing and digital procurement for hospitals and clinics: category management, supplier consolidation and savings tracking.'],
        ],
      },
      {
        label: 'Digital Health',
        desc: 'Telemedicine, health data, records and remote monitoring.',
        lead: 'Advisory for companies building digital care: telemedicine, health data and AI, records systems and remote monitoring, within the region’s data rules.',
        feat: ['Digital health: what scales and what stays a pilot', 'Reimbursement, data rules and clinician adoption decide the winners.'],
        kids: [
          ['Telemedicine & Virtual Care', 'Remote consultations and care pathways.', 'Remote consultation and virtual care pathways: licensing, insurer reimbursement, clinician workflow and patient retention.'],
          ['Health Data & AI', 'Analytics, imaging AI and decision support.', 'Analytics, imaging AI and clinical decision support: data access, validation, regulatory approval and commercial models with providers.'],
          ['Health Records & Interoperability', 'Records platforms and data exchange.', 'Electronic records and data exchange between providers and insurers: standards, national platforms, migration and data protection.'],
          ['Remote Monitoring & Wearables', 'Connected devices and chronic care.', 'Connected devices and monitoring for chronic conditions: clinical evidence, device regulation, integration with care teams and payer interest.'],
        ],
      },
      {
        label: 'Longevity & Wellness',
        desc: 'Longevity clinics, fitness, mental health and senior care.',
        lead: 'Advisory for the preventive and personal side of health: longevity programmes, fitness and sports medicine, mental health, and senior and home care.',
        feat: ['Longevity medicine: a premium category finds its footing', 'Evidence, regulation and pricing in preventive care for private clients.'],
        kids: [
          ['Longevity & Preventive Clinics', 'Screening, optimisation and membership care.', 'Preventive screening and personalised health programmes: clinical evidence, membership pricing, regulation and marketing claims.'],
          ['Fitness & Sports Medicine', 'Gyms, performance centres and rehabilitation.', 'Gyms, performance centres and rehabilitation clinics: membership economics, athlete services, site strategy and links with medical providers.'],
          ['Mental Health Services', 'Therapy, psychiatry and workplace wellbeing.', 'Therapy, psychiatry and employer wellbeing programmes: clinician supply, stigma, insurance coverage and digital delivery.'],
          ['Senior & Home Care', 'Assisted living and care at home.', 'Assisted living, nursing and home care for an ageing population: facility models, staffing, standards and family-paid demand.'],
        ],
      },
    ],
  },
  {
    title: 'Business Services & BPO',
    lead: 'Advisory for companies that run, staff and support other businesses: facilities, workforce, shared services and corporate support across the UAE and GCC.',
    feat: ['The outsourcing economy: scale, contracts and margins', 'How service providers win long contracts, protect margins and consolidate.'],
    items: [
      {
        label: 'Facilities & Integrated Services',
        desc: 'Facilities management, cleaning, guarding and contract catering.',
        lead: 'Advisory for providers and buyers of integrated facilities services, a sector built on long contracts, labour efficiency and tight margins.',
        feat: ['Integrated facilities management: bundling, pricing and renewal', 'Why clients consolidate suppliers and what it means for providers.'],
        kids: [
          ['Hard & Soft Facilities Management', 'Building systems and day-to-day services.', 'Management of building systems and everyday services in one contract: pricing models, performance standards, subcontractor control and contract renewal.'],
          ['Cleaning & Hygiene Services', 'Commercial cleaning and specialist hygiene.', 'Commercial and specialist cleaning: labour productivity, equipment, quality auditing, tender competition and sector consolidation.'],
          ['Manned Guarding & Concierge', 'Guarding, reception and access services.', 'Guarding, reception and concierge services for offices, malls and residential towers: staffing standards, technology blending and margin management.'],
          ['Contract Catering', 'Staff dining, camps and institutional catering.', 'Catering for corporate sites, workforce accommodation and institutions: menu cost control, supply contracts, compliance and per-head pricing.'],
        ],
      },
      {
        label: 'Staffing & Workforce Solutions',
        desc: 'Recruitment, temporary staffing, payroll and labour supply.',
        lead: 'Advisory for recruitment and workforce businesses and the employers that rely on them, in a market shaped by licensing rules and fast-changing demand.',
        feat: ['Flexible workforces: how staffing firms grow and get paid', 'Contract labour, payroll outsourcing and the economics of placement.'],
        kids: [
          ['Executive Search & Permanent Placement', 'Fee-based hiring for senior and skilled roles.', 'Search and placement firms: fee structures, candidate pipelines, specialist verticals, partner economics and the shift to retained work.'],
          ['Temporary & Contract Staffing', 'Short-term and project-based labour.', 'Temporary and contract staffing: margin per worker, client concentration, compliance with labour rules and working capital needs.'],
          ['Payroll & Employer-of-Record Services', 'Outsourced payroll, compliance and hiring.', 'Payroll and employer-of-record providers: pricing per employee, regulatory change, technology platforms and cross-border expansion.'],
          ['Labour Supply & Workforce Accommodation', 'Large-scale labour and housing services.', 'Providers of large labour pools and accommodation: contract structures, welfare standards, facility operations and client audit requirements.'],
        ],
      },
      {
        label: 'Shared Services & BPO',
        desc: 'Finance back-office, contact centres, managed IT and automation.',
        lead: 'Advisory for outsourcing providers and the corporates moving back-office work to shared service centres and specialist partners.',
        feat: ['Shared services and BPO: where the work goes next', 'Automation, regional hubs and the economics of outsourced processes.'],
        kids: [
          ['Finance & Accounting Outsourcing', 'Bookkeeping, payables and reporting for clients.', 'Outsourced accounting, payables and reporting: pricing, process standardisation, data security, service levels and client transition.'],
          ['Customer Contact Centres', 'Multilingual voice and digital support.', 'Contact centres serving regional and global clients: language coverage, seat utilisation, attrition, quality metrics and automation of simple contacts.'],
          ['IT Managed Services', 'Outsourced infrastructure and support.', 'Managed IT providers: recurring revenue models, service desk and infrastructure support, vendor partnerships and contract length.'],
          ['Back-Office Process Automation', 'Workflow software and robotic processing.', 'Automation of repetitive back-office work: process selection, implementation cost, measured savings and the effect on outsourcing contracts.'],
        ],
      },
      {
        label: 'Corporate Support Services',
        desc: 'Company formation, translation, flexible offices and events.',
        lead: 'Advisory for firms that help businesses set up, operate and grow, from company formation and document services to flexible workspace.',
        feat: ['Services for businesses setting up in the region', 'Formation, workspace and support: a recurring-revenue sector.'],
        kids: [
          ['Corporate Services & Company Formation', 'Licences, registrations and ongoing compliance.', 'Company formation and ongoing corporate services: licence packages, free zone and mainland options, renewal revenue and referral partners.'],
          ['Translation & Document Services', 'Legal translation, attestation and typing.', 'Translation, attestation and document processing: accreditation, turnaround, pricing by volume and digitisation of paper workflows.'],
          ['Business Centres & Flexible Offices', 'Serviced offices and shared workspace.', 'Serviced offices and flexible workspace: lease structures, occupancy, membership pricing, landlord partnerships and multi-site operators.'],
          ['Travel & Event Management', 'Corporate travel, conferences and incentives.', 'Corporate travel and event management: supplier rebates, client contracts, technology platforms and the recovery of in-person events.'],
        ],
      },
    ],
  },
  {
    title: 'Consumer & Lifestyle',
    lead: 'Advisory for luxury and fashion houses, food and beverage brands, retailers and consumer technology companies serving the Gulf consumer.',
    feat: ['The Gulf consumer: spending power, tourism and loyalty', 'What resident and visitor spending say about where brands should invest.'],
    items: [
      {
        label: 'Luxury & Fashion',
        desc: 'Luxury retail, fashion brands, jewellery, watches, beauty and fragrance.',
        lead: 'Advisory for luxury and fashion businesses: brand owners, regional distributors and retailers selling to some of the world’s highest-spending customers.',
        feat: ['Luxury in the Gulf: local clients, global brands', 'How houses are adapting stores, services and collections to regional demand.'],
        kids: [
          ['Luxury Retail & Distribution', 'Boutiques, franchise partners and wholesale.', 'Luxury boutiques and regional franchise partners: store economics, brand agreements, clienteling and inventory strategy.'],
          ['Fashion Brands & Design Houses', 'Regional labels and designers.', 'Regional fashion labels and design houses: brand building, wholesale versus direct sales, production and international growth.'],
          ['Jewellery & Watches', 'Fine jewellery, gold and timepieces.', 'Jewellers and watch retailers: gold and diamond sourcing, authenticity, resale markets and high-net-worth client relationships.'],
          ['Beauty & Fragrance', 'Prestige beauty and regional perfumers.', 'Prestige beauty and fragrance brands, including regional perfumers: product development, retail partnerships and online growth.'],
        ],
      },
      {
        label: 'Food & Beverage Brands',
        desc: 'Restaurant groups, packaged food, cloud kitchens and franchises.',
        lead: 'Advisory for food and beverage businesses on the consumer side: restaurant groups, packaged food brands, delivery-led kitchens and franchise concepts.',
        feat: ['Restaurant groups: scaling concepts without losing the brand', 'Site selection, unit economics and the discipline of multi-brand growth.'],
        kids: [
          ['Restaurant & Hospitality Groups', 'Multi-brand dining operators.', 'Multi-brand restaurant groups: concept pipelines, site selection, central kitchens, labour costs and group-level margin management.'],
          ['Packaged Food & Beverage Brands', 'Consumer brands and retail listings.', 'Consumer food and drink brands: retail listings, pricing, promotion, private label competition and export routes.'],
          ['Cloud Kitchens & Delivery', 'Delivery-first food businesses.', 'Delivery-led kitchens and virtual brands: aggregator terms, kitchen utilisation, direct ordering and customer retention.'],
          ['Franchise & Master Licence Concepts', 'Bringing brands in, taking them out.', 'Master franchise and licence arrangements for food concepts: term sheets, territory rights, support obligations and exit options.'],
        ],
      },
      {
        label: 'Retail & Shopping Destinations',
        desc: 'Malls, department stores, specialty retail and duty free.',
        lead: 'Advisory for the places and companies that sell to consumers: mall owners, department stores, specialty chains and travel retail operators.',
        feat: ['The mall reinvented: tenants, experiences and footfall', 'How landlords are rebalancing retail, leisure and dining to keep visitors coming.'],
        kids: [
          ['Malls & Shopping Centres', 'Owners, asset managers and leasing.', 'Mall owners and asset managers: tenant mix, turnover rents, leisure and dining space, refurbishment and valuation.'],
          ['Department & Multi-Brand Stores', 'Curated and concession retail.', 'Department stores and multi-brand retailers: concession models, buying, private label, online integration and space productivity.'],
          ['Specialty Retail Chains', 'Category-focused store networks.', 'Category-focused chains in electronics, home, sport and beauty: network planning, supplier terms and omnichannel performance.'],
          ['Travel Retail & Duty Free', 'Airport and tourist-driven retail.', 'Airport and tourist-driven retail: concession bidding, passenger mix, category performance and brand partnerships.'],
        ],
      },
      {
        label: 'Consumer Technology',
        desc: 'Direct-to-consumer, loyalty, subscriptions and social commerce.',
        lead: 'Advisory for companies that sell and retain customers through technology: direct-to-consumer brands, loyalty platforms, subscriptions and social commerce.',
        feat: ['Direct-to-consumer in the Gulf: what it takes to be profitable', 'Acquisition costs, logistics and returns decide the economics.'],
        kids: [
          ['Direct-to-Consumer Brands', 'Brands selling without intermediaries.', 'Brands that sell directly online: customer acquisition cost, fulfilment, returns, repeat purchase and when to add stores or wholesale.'],
          ['Loyalty & Customer Data', 'Programmes, partnerships and personalisation.', 'Loyalty programmes and customer data platforms: points economics, coalition partners, consent and personalised offers.'],
          ['Subscription & Membership Models', 'Recurring revenue consumer businesses.', 'Subscription and membership businesses: pricing, churn, content or product cadence and lifetime value measurement.'],
          ['Social Commerce & Creators', 'Selling through content and communities.', 'Selling through social platforms and creators: live commerce, influencer contracts, attribution and brand safety.'],
        ],
      },
    ],
  },
  {
    title: 'Family Business & Holdings',
    lead: 'Advisory for family-owned enterprises and diversified holding groups: governance, succession, portfolio decisions and growth across generations.',
    feat: ['Family enterprise across generations: governance, growth and exit', 'How holding groups manage portfolios, succession and capital.'],
    items: [
      {
        label: 'Governance & Succession',
        desc: 'Family constitutions, succession, boards and shareholder agreements.',
        lead: 'Advisory for families and owners planning how the business is governed and passed on, where clear rules protect both the company and the family.',
        feat: ['Succession: planning the transition before it is needed', 'Governance structures that keep family and business decisions separate.'],
        kids: [
          ['Family Constitutions & Councils', 'Written rules for family and business roles.', 'Family charters and councils: who may work in the business, how shares are held, how decisions are made and how the rules are reviewed.'],
          ['Succession Planning', 'Leadership and ownership transition.', 'Planning the handover of leadership and ownership: successor development, timing, interim arrangements and communication to staff and lenders.'],
          ['Board Professionalisation', 'Independent directors and board practice.', 'Strengthening the board of a family company: independent directors, committees, reporting standards and clear lines between owners and management.'],
          ['Shareholder Agreements & Dispute Prevention', 'Terms between owners and exit rights.', 'Agreements between family shareholders: transfer rules, valuation methods, deadlock resolution and early mediation before disputes harden.'],
        ],
      },
      {
        label: 'Holding Group Strategy',
        desc: 'Portfolio review, group treasury, restructuring and acquisitions.',
        lead: 'Advisory for diversified groups deciding what to own, what to grow and how to allocate capital across their businesses.',
        feat: ['Running a diversified group: focus, capital and structure', 'How holding companies review portfolios and decide where to invest.'],
        kids: [
          ['Portfolio Review & Rationalisation', 'Which businesses to keep, grow or sell.', 'A structured review of every business in the group: returns on capital, strategic fit, management strength and the decision to keep, grow or exit.'],
          ['Group Treasury & Capital Allocation', 'Funding, cash and investment priorities.', 'Central treasury and capital allocation: internal funding rules, banking relationships, dividend policy and hurdle rates for new investment.'],
          ['Intra-Group Restructuring', 'Reorganising entities, ownership and holdings.', 'Reorganising legal entities and holdings: structure charts, transfers between group companies, tax and licensing implications and lender consent.'],
          ['Acquisitions & Corporate Ventures', 'Buying and building new businesses.', 'Acquisitions and new ventures by a holding group: target criteria, integration, ownership of new ventures and the discipline to stop what is not working.'],
        ],
      },
      {
        label: 'Growth & Professionalisation',
        desc: 'Management depth, expansion, digital change and joint ventures.',
        lead: 'Advisory for established family companies preparing to grow beyond the founder, with stronger management, systems and partnerships.',
        feat: ['From founder-led to institution: building management depth', 'What changes in systems, people and reporting as a family business scales.'],
        kids: [
          ['Operating Model & Management Depth', 'Roles, reporting and a professional team.', 'Building a management layer below the owners: role definitions, delegation limits, performance management and hiring senior executives from outside.'],
          ['Regional & International Expansion', 'New markets and cross-border growth.', 'Taking a family business into new markets: market selection, entry structures, local partners, funding and governance of overseas operations.'],
          ['Digital Transformation for Legacy Firms', 'Modernising systems and customer channels.', 'Updating long-established firms: finance and operating systems, online sales channels, data use and change management in a traditional organisation.'],
          ['Partnerships & Joint Ventures', 'Growing with a strategic partner.', 'Joint ventures with international or local partners: contribution and control, governance, profit sharing, deadlock terms and exit options.'],
        ],
      },
      {
        label: 'Liquidity & Exit',
        desc: 'Minority sales, listings, trade sales and carve-outs.',
        lead: 'Advisory for owners considering partial or full liquidity, and for the investors and buyers who deal with family-held companies.',
        feat: ['Liquidity for family owners: selling part, not all', 'Minority investors, listings and sales: matching the route to the family goals.'],
        kids: [
          ['Partial Sales & Minority Investors', 'Bringing in capital while keeping control.', 'Selling a minority stake: valuation, investor rights, board seats, use of proceeds and the effect on family control.'],
          ['Listing Readiness', 'Preparing a company for the public market.', 'Preparing a family company for a stock exchange listing: governance, audited track record, free float decisions and the timing of the process.'],
          ['Trade Sales & Management Buyouts', 'Selling to a strategic buyer or the team.', 'Selling the whole business to a strategic buyer or to management: preparing the company, running a sale process, structuring payment and handling employees.'],
          ['Asset Recycling & Carve-Outs', 'Separating and selling parts of a group.', 'Separating a division or property from a group for sale: carve-out accounts, shared services, transitional arrangements and tax treatment.'],
        ],
      },
    ],
  },
];

// v245: advanced / institutional tier (src/data/industriesAdvanced.js), appended after the v244 columns
DATA.push(...ADV_DATA);

// v247: extra sub-sectors so every industry has 4, 6 or 8 (src/data/industriesGrow.js)
DATA.forEach((c) => c.items.forEach((it) => { if (GROW_NEW[it.label]) it.kids.push(...GROW_NEW[it.label]); }));

// ---- derived exports ----------------------------------------------------------------------------------------
export const MORE_INDUSTRIES = DATA.map((c) => ({
  title: c.title,
  items: c.items.map((it) => ({ label: it.label, children: it.kids.map((k) => k[0]) })),
  viewAll: 'Discover Acquisitions',
}));

export const MORE_ITEM_DESC = {};
export const MORE_CHILD_DESC = {};
export const MORE_COL_LEADS = {};
export const MORE_ITEM_LEADS = {};
export const MORE_LEAF_DESC = {};
export const MORE_FEATURED = {};

DATA.forEach((c) => {
  const f = {};
  f._ = c.feat;
  MORE_COL_LEADS[`industries/${slug(c.title)}`] = c.lead;
  c.items.forEach((it) => {
    MORE_ITEM_DESC[`industries|${c.title}|${it.label}`] = it.desc;
    MORE_ITEM_LEADS[`industries/${slug(c.title)}/${slug(it.label)}`] = it.lead;
    f[it.label] = it.feat;
    it.kids.forEach(([label, short, long]) => {
      MORE_CHILD_DESC[label] = short;
      MORE_LEAF_DESC[`industries/${slug(c.title)}/${slug(it.label)}/${slug(label)}`] = long;
    });
  });
  MORE_FEATURED[c.title] = f;
});

// v247: copy for the sub-sectors added to the original industries (their rows are added to the menu in mock.js)
Object.entries(GROW_ORIG).forEach(([key, rows]) => {
  const [cat, ind] = key.split('|');
  rows.forEach(([label, short, long]) => {
    MORE_CHILD_DESC[label] = short;
    MORE_LEAF_DESC[`industries/${slug(cat)}/${slug(ind)}/${slug(label)}`] = long;
  });
});
