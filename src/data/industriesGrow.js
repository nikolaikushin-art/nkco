// NK&CO: extra sub-sectors (v247). Every industry in the Industries menu now has 4, 6 or 8 sub-sectors.
// Row shape: [label, shortLine, pageLead]. All labels are unique across the whole menu.
//   GROW_ORIG  key 'Category|Industry' -> rows added to the original industries written in src/mock.js
//   GROW_NEW   key 'Industry'          -> rows added to the industries written in industriesMore.js / industriesAdvanced.js
// All copy is draft. No firms, figures, dates or regulators are named.

export const GROW_ORIG = {
  'Corporate & Commercial|Professional Services': [
    ['Corporate Secretarial Services', 'Company records, filings and governance support.', 'Support for company records, board and shareholder meetings, statutory filings and registers, so that governance obligations are met on time and in order.'],
  ],
  'Corporate & Commercial|Media & Communications': [
    ['Outdoor & Out-of-Home Media', 'Billboards, transit and digital screens.', 'Outdoor and out-of-home media owners and buyers: site portfolios, concession terms, digital screen networks, audience measurement and the pricing of premium locations.'],
  ],
  'Real Assets & Infrastructure|Real Estate & Property': [
    ['Land & Development Sites', 'Plots and sites for building.', 'Buying, selling and structuring land for development: title and zoning checks, infrastructure readiness, joint-venture terms with developers and the valuation of sites before a scheme exists.'],
  ],
  'Real Assets & Infrastructure|Hospitality & Tourism': [
    ['Events, Conferences & Exhibitions', 'Venues, organisers and business events.', 'Venues and organisers of conferences, exhibitions and incentive travel: venue operations, event portfolios, sponsorship income and how business events support hotels and destinations.'],
  ],
  'Industrial & Manufacturing|Industrial & Special Assets': [
    ['Logistics & Industrial Parks', 'Multi-tenant parks for light industry and storage.', 'Purpose-built parks for logistics, light manufacturing and storage: land assembly, tenant mix, lease structures, utilities and the income profile investors buy.'],
  ],
  'Industrial & Manufacturing|Packaging & Materials': [
    ['Packaging Machinery & Automation', 'Filling, wrapping and line equipment.', 'Suppliers and users of packaging lines: equipment selection, service contracts, spare parts, automation upgrades and the economics of replacing ageing lines.'],
  ],
  'Corporate & Commercial|Insurance & Risk': [
    ['Insurtech & Digital Distribution', 'Online sales, comparison and embedded cover.', 'Digital insurance models: online and embedded distribution, comparison platforms, automated underwriting and servicing, and how they sit alongside agents and brokers.'],
  ],
  'Corporate & Commercial|Commerce & Distribution': [
    ['Foodservice & Cash-and-Carry', 'Supplying restaurants, hotels and traders.', 'Distribution to restaurants, hotels, caterers and small retailers: range and pricing, delivery routes, credit terms, cold-chain handling and the margins of wholesale formats.'],
  ],
  'Real Assets & Infrastructure|Architecture & Design': [
    ['Hospitality & Retail Design', 'Hotels, restaurants and store concepts.', 'Design practices working on hotels, restaurants and stores: concept development, brand alignment, procurement of finishes and furniture, and delivery with operators and contractors.'],
  ],
  'Industrial & Manufacturing|Materials & Production': [
    ['Paper, Pulp & Board', 'Paper, tissue and board production.', 'Producers and converters of paper, tissue and board: raw material supply, energy use, recycled content, regional demand and the economics of local production.'],
  ],
  'Corporate & Commercial|Capital Markets & M&A': [
    ['Valuation & Fairness Opinions', 'Independent views on what a business is worth.', 'Independent valuation for transactions, disputes and reporting: methods, comparables, minority and control adjustments, and the evidence boards and counterparties expect to see.'],
    ['Private Placements & Pre-IPO Rounds', 'Raising capital before a listing.', 'Raising capital from selected investors ahead of a public offering: investor targeting, pricing, rights attached to shares and preparing the company for the scrutiny of a listing.'],
    ['Restructuring & Distressed Deals', 'Turnarounds, recapitalisations and creditor deals.', 'Transactions involving stressed companies: negotiating with lenders, recapitalisation, asset sales, debt-for-equity exchanges and the order in which creditors are paid.'],
    ['Investor Relations & Liquidity', 'Keeping listed shares well understood and traded.', 'Supporting listed companies after the offering: investor communication, analyst coverage, disclosure routines, market-making arrangements and the link between liquidity and valuation.'],
  ],
  'Real Assets & Infrastructure|Construction & Development': [
    ['Design-Build & EPC Delivery', 'One contract for design and construction.', 'Delivery models that place design and construction under one contractor: pricing and risk allocation, performance guarantees, variation control and when they beat traditional tendering.'],
    ['Infrastructure & Civil Works', 'Roads, utilities and enabling works.', 'Contractors and clients in roads, utilities, drainage and site-enabling works: public tendering, plant intensity, programme risk and the working capital of long contracts.'],
    ['Fit-Out & Refurbishment', 'Interior works and upgrades of existing buildings.', 'Interior fit-out and building refurbishment: short programmes, tenant and landlord responsibilities, specialist trades, handover standards and margin control on smaller projects.'],
    ['Cost Management & Construction Claims', 'Budgets, valuations and dispute resolution.', 'Controlling and resolving cost on projects: quantity surveying, interim valuations, delay and variation claims, and early settlement of disputes between owners and contractors.'],
  ],
  'Industrial & Manufacturing|Supply Chain & Operations': [
    ['Last-Mile & E-Commerce Fulfilment', 'Delivering to the customer\u2019s door.', 'Fulfilment and last-mile delivery for online retailers: warehouse design near the customer, courier networks, returns, delivery promises and the cost to serve per order.'],
    ['Freight Forwarding & Customs Brokerage', 'Moving and clearing goods across borders.', 'Forwarders and customs brokers handling air, sea and road freight: carrier contracts, documentation, clearance processes, free zone movements and managing duties and delays.'],
  ],
};

export const GROW_NEW = {
  'Hospitals & Clinics': [
    ['Rehabilitation & Long-Term Care', 'Recovery, nursing and elder care.', 'Facilities providing rehabilitation, nursing and long-term care: bed capacity, staffing models, funding sources, care standards and growing demand from an ageing population.'],
    ['Women\u2019s, Maternity & Fertility Care', 'Specialist services for women and families.', 'Specialist maternity, fertility and women\u2019s health providers: facility design, clinician recruitment, package pricing and building a reputation that fills the schedule.'],
    ['Dental & Dermatology Clinics', 'High-volume specialist outpatient chains.', 'Chains and independents in dental, dermatology and aesthetic care: site selection, clinician economics, equipment cost, repeat patient rates and consolidation among small practices.'],
    ['Medical Tourism & Referral Networks', 'Patients travelling for treatment.', 'Programmes that bring patients from abroad for care: partnerships with hospitals, referral agents, package design, visas and accommodation, and quality assurance across the journey.'],
  ],
  'Digital Health': [
    ['Digital Therapeutics & Health Apps', 'Software that supports treatment and prevention.', 'Apps and software used to support treatment, prevention and self-management: clinical evidence, regulatory pathways, reimbursement and how to keep patients engaged beyond the first month.'],
    ['Claims Automation & Health Payments', 'Faster billing and settlement.', 'Technology that speeds up health billing and settlement between providers, insurers and patients: coding accuracy, automated approvals, denial management and cash collection.'],
    ['Clinical Software & Hospital Systems', 'Systems that run wards, theatres and labs.', 'Hospital and clinic software: clinical workflows, imaging and laboratory systems, vendor selection, implementation risk and the cost of replacing core systems.'],
    ['Genomics & Personalised Medicine', 'Testing and treatment tailored to the patient.', 'Genomic testing and personalised care: laboratory capacity, data governance, clinical partnerships, consent and the commercial models linking tests to treatment decisions.'],
  ],
  'Staffing & Workforce Solutions': [
    ['Recruitment Process Outsourcing', 'Running hiring on behalf of employers.', 'Outsourced hiring for large employers: service scope, pricing per hire, technology, service levels and how providers manage volume without losing candidate quality.'],
    ['Skills, Training & Emiratisation Programmes', 'Developing and placing national talent.', 'Programmes that train and place nationals in private-sector roles: employer commitments, training design, retention, reporting and building pipelines with universities and institutes.'],
    ['Remote & Cross-Border Talent Platforms', 'Hiring skilled people across borders.', 'Platforms and services for hiring across borders: contracting and payment models, local rules, intellectual property, time zones and the controls a company needs for remote teams.'],
    ['HR Technology & Workforce Analytics', 'Systems and data for people decisions.', 'Human resources software and analytics: core HR and payroll systems, applicant tracking, workforce planning data and how to prove the return on people technology.'],
  ],
  'Retail & Shopping Destinations': [
    ['Community & Neighbourhood Retail', 'Everyday shopping close to home.', 'Neighbourhood centres and convenience formats: anchor supermarkets, tenant mix, steady footfall, lease terms and the resilience of necessity-based income.'],
    ['Outlet & Value Retail', 'Discount-led destinations and brands.', 'Outlet and value formats: brand participation, destination design, tourist flows, rent structures and managing full-price brand protection alongside discounting.'],
    ['Food Halls & Dining Destinations', 'Dining as the reason to visit.', 'Places where food and beverage anchors the visit: operator curation, shared facilities, event programming, rent models and the effect on dwell time and surrounding retail.'],
    ['Retail Technology & Omnichannel Stores', 'Linking stores, apps and online sales.', 'Technology that joins store and online selling: inventory visibility, click-and-collect, payments, customer data and the investment needed to make stores work as part of one system.'],
  ],
  'AI Compute & Data Centres': [
    ['Edge & Sovereign Cloud Facilities', 'Smaller sites close to users and under national control.', 'Smaller facilities placed near users, and national or sector clouds with data kept in-country: demand drivers, security requirements, operating models and who funds them.'],
    ['Data Centre Development Finance', 'Funding construction and operation.', 'Funding for data centre projects: construction loans, pre-leasing requirements, power contracts, sale-and-leaseback and the structures long-term investors accept.'],
    ['Operations, Maintenance & Facility Services', 'Running sites to high availability.', 'Running data centres day to day: uptime commitments, maintenance contracts, spare parts, skilled staffing, energy efficiency reporting and outsourcing choices.'],
    ['AI Platforms & Model Hosting', 'Services that run models for business users.', 'Platforms that host and serve AI models for enterprises: capacity commitments, pricing, data residency, integration with existing systems and managing dependence on suppliers.'],
  ],
  'Private Capital & Credit': [
    ['Venture & Growth Funds', 'Funds backing younger, faster-growing companies.', 'Venture and growth investors: fund formation, regional deal flow, follow-on reserves, valuation discipline and the realistic routes to exit in the region.'],
    ['Real Estate Private Funds', 'Pooled capital for property investment.', 'Private funds investing in property: strategy and sector focus, fee and promote structures, leverage, asset management and reporting to institutional investors.'],
    ['Co-Investment & Direct Deals', 'Investing alongside funds or directly.', 'Investors taking larger stakes directly or beside fund managers: deal sourcing, governance rights, fee savings, speed of decision and the diligence a smaller team can realistically run.'],
    ['Fund Administration & Investor Relations', 'Reporting, accounting and investor service.', 'The operating side of a fund: administration, valuation and reporting, investor communication, regulatory filings and the service levels institutional investors expect.'],
  ],
  'Pharma & Medical Supply': [
    ['Clinical Research & Trials', 'Studies that support new treatments.', 'Clinical research organisations and sites: study start-up, patient recruitment, ethics approvals, data quality and the role of regional trials in global programmes.'],
    ['Local Manufacturing & Biosimilars', 'Producing medicines closer to patients.', 'Local production of generic and biosimilar medicines: plant investment, technology partners, quality accreditation, procurement preference and securing reliable supply.'],
  ],
  'Food & Beverage Brands': [
    ['Beverage Brands & Bottling', 'Drinks owners and production partners.', 'Beverage brands and bottlers: contract filling, water and soft drinks, distribution agreements, shelf competition and margins between brand owner and producer.'],
    ['Grocery & Food Retail Chains', 'Supermarkets and specialist food stores.', 'Grocery chains and specialist food retailers: store formats, private label, supplier terms, fresh supply chains and the pressure from online grocery.'],
  ],
  'Project & Structured Finance': [
    ['Green Bonds & Sustainability-Linked Loans', 'Finance priced against sustainability goals.', 'Debt tied to green projects or sustainability targets: eligibility, reporting and verification, pricing incentives and the investors that look for these instruments.'],
    ['Development Bank & Multilateral Co-Financing', 'Public lenders alongside private capital.', 'Projects co-financed with development banks and multilateral lenders: eligibility, safeguards and procurement rules, pricing, tenor and what their involvement does for other lenders.'],
  ],
};
