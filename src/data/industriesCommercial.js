// NK&CO: commercial industry columns (v246)
// Replace the three v245 columns Defence & Security, Transition Fuels & Minerals and Life Sciences & Agri-Food.
// industriesAdvanced.js places these in the same menu positions. Same shape as DATA in industriesMore.js.
// Sub-sector counts vary on purpose (4, 6 or 8 per industry).
// All copy is draft. No firms, figures, dates or regulators are named. Nothing here is financial, legal or tax advice.

export const COMMERCIAL_SMES = {
  title: 'SMEs & Growth Companies',
  lead: 'Advisory for owner-managed and mid-sized companies: funding growth, running the business better and entering new markets across the UAE and GCC.',
  feat: ['The growth-stage company: where funding, discipline and new markets meet', 'What separates SMEs that scale from those that stall.'],
  items: [
    {
      label: 'Growth Capital & Funding',
      desc: 'Bank debt, private credit, growth equity and working capital for growing companies.',
      lead: 'Advisory for companies raising money to grow, and for the lenders and investors who fund them, where the right structure matters as much as the amount.',
      feat: ['Funding the next stage: choosing between debt, equity and programme support', 'How growing companies match the funding source to the use of funds.'],
      kids: [
        ['Bank & Trade Finance for SMEs', 'Term loans, overdrafts and trade lines.', 'Bank facilities for smaller companies: what lenders look at, security and guarantees, trade lines, covenants and how to present the business so credit approval moves faster.'],
        ['Private Credit for Mid-Market Firms', 'Direct lending outside the banks.', 'Non-bank lending to mid-sized companies: where it fits against bank debt, pricing and covenants, flexibility for acquisitions and what lenders expect in reporting.'],
        ['Minority Growth Equity', 'Outside investors taking a stake, not control.', 'Raising capital by selling a minority stake: valuation, investor rights, board seats, use of proceeds and keeping the founder in charge of day-to-day decisions.'],
        ['Government & Programme Funding', 'Public schemes, guarantees and grants.', 'Public programmes that support smaller companies: eligibility, application discipline, guarantee schemes, reporting duties and how they sit alongside private funding.'],
        ['Invoice Finance & Working Capital', 'Turning receivables into cash sooner.', 'Funding the gap between delivery and payment: invoice discounting, supply chain finance, stock funding and the cash-cycle changes that reduce the need to borrow at all.'],
        ['Funding Readiness & Investor Packs', 'Getting the numbers and story lender-ready.', 'Preparing a company to be financed: clean accounts, forecasts that hold up, a clear use of funds, data rooms and the answers lenders and investors ask first.'],
      ],
    },
    {
      label: 'Owner-Managed Business Strategy',
      desc: 'Profit, pricing, management depth and planning for founder-led companies.',
      lead: 'Advisory for founders and families running their own companies: improving profit, building a management team and planning the next five years.',
      feat: ['Beyond the founder: building a company that runs without daily rescue', 'Where owner-managed businesses gain the most from structure.'],
      kids: [
        ['Operating Model & Profit Improvement', 'Costs, processes and margin recovery.', 'Finding profit already inside the business: cost structure, process waste, supplier terms, utilisation and the few changes that move margin the most.'],
        ['Pricing & Margin Management', 'Setting prices that protect returns.', 'Pricing discipline for smaller companies: cost-plus versus value pricing, discount control, contract terms, and tracking margin by customer and product.'],
        ['Management Teams & Delegation', 'Moving from founder-led to team-led.', 'Hiring and empowering senior managers: roles, accountability, incentives, decision rights and how a founder steps back without losing control.'],
        ['Business Planning & Reporting', 'Plans, budgets and monthly numbers that get used.', 'A practical planning and reporting rhythm: budgets, rolling forecasts, a short list of management measures and board-style reviews for a smaller company.'],
      ],
    },
    {
      label: 'Expansion & Market Entry',
      desc: 'Regional growth, exports, franchising, partnerships and overseas set-up.',
      lead: 'Advisory for companies taking a proven business into new cities, countries and channels, and for partners and investors helping them do it.',
      feat: ['Taking a local business regional: sequencing, partners and structure', 'The decisions that decide whether expansion adds value or only adds cost.'],
      kids: [
        ['Regional GCC Expansion', 'Opening in neighbouring markets.', 'Extending from the UAE to other Gulf markets: market selection, entry route, local rules, hiring and a staged plan that limits the capital at risk.'],
        ['Export Readiness & Trade Corridors', 'Selling abroad with the right paperwork and partners.', 'Preparing to export: product fit, pricing, logistics, documentation, payment security and the trade corridors that suit the company best.'],
        ['Franchising & Multi-Unit Rollout', 'Replicating a concept across locations.', 'Turning a successful outlet into a network: operating manuals, unit economics, franchise or owned-and-operated models, training and brand control.'],
        ['Distribution & Agency Agreements', 'Appointing partners to sell in a territory.', 'Using distributors and agents to enter markets: selection, exclusivity, targets, margins, termination terms and keeping control of the brand.'],
        ['Joint Ventures & Local Partnerships', 'Sharing risk with a regional partner.', 'Building a venture with a local or strategic partner: contribution, governance, deadlock rules, exit routes and aligning incentives from the start.'],
        ['Licensing & Free Zone Structuring', 'Choosing where and how to operate.', 'Selecting the licence, zone and legal entity for a new activity: ownership, permitted activities, costs, banking and how the structure may need to change as the company grows.'],
        ['Acquisitions as a Growth Route', 'Buying capacity, customers or capability.', 'Using smaller acquisitions to grow faster: target criteria, valuation, funding, integration planning and avoiding deals that distract the core business.'],
        ['Overseas Subsidiaries & Branch Set-Up', 'Establishing a presence outside the region.', 'Setting up operations abroad: entity choice, banking, people, intercompany arrangements and the controls that keep an overseas unit aligned with the group.'],
      ],
    },
  ],
};

export const COMMERCIAL_MARKETING = {
  title: 'Marketing & Growth',
  lead: 'Advisory for companies that want more customers and better ones: brand, digital performance, sales systems and retention, measured against commercial results.',
  feat: ['Marketing that earns its budget: from brand to booked revenue', 'How leading companies tie spend to customers won and kept.'],
  items: [
    {
      label: 'Brand & Positioning',
      desc: 'Brand strategy, messaging, reputation and identity.',
      lead: 'Advisory for companies defining what they stand for and how they are seen by buyers, partners, investors and talent.',
      feat: ['A brand is a pricing power decision', 'How clear positioning supports margin and shortens the sales cycle.'],
      kids: [
        ['Brand Strategy & Identity', 'Purpose, positioning and visual identity.', 'Defining who the brand is for and why it wins: audience, positioning, personality, identity systems and the guidelines that keep every channel consistent.'],
        ['Messaging & Value Proposition', 'Saying what you do in terms buyers value.', 'Clear messages for each audience: core promise, proof points, differentiation from competitors and a message hierarchy that sales and marketing share.'],
        ['Corporate Reputation & PR', 'Media, stakeholders and credibility.', 'Managing how the company is perceived: media relations, thought leadership, awards and events, crisis preparedness and consistent public communication.'],
        ['Naming & Brand Architecture', 'Names, sub-brands and portfolio structure.', 'Organising brands in a group or product range: naming, endorsed and standalone brands, rebranding after acquisitions and protecting the marks that matter.'],
      ],
    },
    {
      label: 'Performance & Digital Marketing',
      desc: 'Paid media, search, social, analytics and e-commerce growth.',
      lead: 'Advisory for companies running digital marketing as a measurable growth engine, from first click to repeat purchase.',
      feat: ['Digital growth with accountability: spend, attribution and payback', 'Where performance marketing creates value and where it only buys traffic.'],
      kids: [
        ['Paid Media & Search', 'Search, display and video advertising.', 'Planning and managing paid campaigns: channel mix, budgets, bidding, creative testing and judging spend by cost per customer rather than clicks.'],
        ['SEO & Content Programmes', 'Organic visibility and useful content.', 'Earning demand through search and content: keyword and topic strategy, technical foundations, editorial planning and measuring which content produces enquiries.'],
        ['Social & Influencer Marketing', 'Communities, creators and platforms.', 'Using social platforms and creators to reach buyers: channel choice, content formats, creator selection, disclosure and results beyond reach and likes.'],
        ['Marketing Analytics & Attribution', 'Measuring what drives sales.', 'Working out which marketing really works: tracking set-up, attribution models, dashboards, testing and sound decisions on where to move budget.'],
        ['Conversion & Website Optimisation', 'Turning visitors into enquiries and orders.', 'Improving how websites and landing pages convert: user journeys, speed, forms, proof and structured testing that lifts results without extra traffic.'],
        ['Email & Lifecycle Marketing', 'Messaging that follows the customer.', 'Planned communication across the customer relationship: welcome and nurture flows, win-back, segmentation, consent and measuring revenue per message.'],
        ['Marketplace & E-Commerce Growth', 'Selling through platforms and own stores.', 'Growing online sales: marketplace presence, own-store performance, product content, fulfilment, returns and margin after platform fees.'],
        ['Marketing Automation & Technology', 'Systems that run campaigns at scale.', 'Choosing and running marketing technology: automation platforms, customer data, integration with CRM and keeping the stack simple enough to be used.'],
      ],
    },
    {
      label: 'Sales & Customer Growth',
      desc: 'Lead generation, sales process, key accounts and retention.',
      lead: 'Advisory for companies building a repeatable way to win, grow and keep customers, in business-to-business and consumer markets.',
      feat: ['Revenue as a system: pipeline, process and retention', 'How the best sales organisations make growth predictable.'],
      kids: [
        ['B2B Lead Generation', 'Finding and qualifying business buyers.', 'Building a steady pipeline of business buyers: target accounts, outreach, events, referral routes, qualification rules and handover between marketing and sales.'],
        ['Sales Process & CRM Design', 'Stages, tools and discipline.', 'Designing a sales process the team will follow: pipeline stages, forecasting, CRM set-up, coaching routines and reporting that shows where deals are won or lost.'],
        ['Strategic Account Growth', 'Growing the largest customers.', 'Managing the accounts that matter most: account plans, relationship maps, renewals, cross-selling and protecting revenue when a contact moves on.'],
        ['Offers, Pricing & Promotions', 'Packages and campaigns that move volume.', 'Shaping what is sold and how it is offered: bundles, tiers, seasonal campaigns, discount rules and checking that promotions add profit, not only sales.'],
        ['Customer Retention & Loyalty', 'Keeping customers and raising lifetime value.', 'Reducing churn and increasing repeat business: onboarding, service standards, loyalty programmes, feedback loops and measuring customer lifetime value.'],
        ['Channel & Partner Sales', 'Selling through resellers and alliances.', 'Growing through partners: partner selection, incentives, enablement, conflict between channels and reporting that shows each partner\u2019s real contribution.'],
      ],
    },
  ],
};

export const COMMERCIAL_LEASING = {
  title: 'Leasing & Asset Finance',
  lead: 'Advisory for companies that finance equipment, vehicles and working assets, and for lessors, lenders and investors building asset-backed portfolios.',
  feat: ['Asset finance as a growth tool: use the asset, preserve the cash', 'How leasing and asset-backed lending free capital for operating businesses.'],
  items: [
    {
      label: 'Equipment & Vehicle Leasing',
      desc: 'Leasing of machinery, fleets, technology and medical equipment.',
      lead: 'Advisory for businesses that lease the assets they use, and for lessors providing them, across structure, pricing and end-of-term decisions.',
      feat: ['Own or lease: the decision behind every major asset', 'Cost, flexibility and balance sheet effects compared.'],
      kids: [
        ['Equipment Finance & Leasing', 'Machinery and plant on lease or hire purchase.', 'Financing productive equipment: lease versus hire purchase, term and rental profile, maintenance responsibilities and what happens at the end of the contract.'],
        ['Fleet Leasing & Management', 'Cars and commercial vehicles on contract.', 'Funding and running vehicle fleets: full-service and finance leasing, replacement cycles, maintenance, insurance, telematics and total cost per vehicle.'],
        ['Medical & Technology Equipment Leasing', 'Fast-changing equipment on flexible terms.', 'Leasing assets that age quickly or cost a great deal: diagnostics, imaging, IT and networks, with upgrade rights, refresh cycles and support bundled in.'],
        ['Sale-and-Leaseback', 'Releasing capital tied up in owned assets.', 'Selling an owned asset to a lessor and leasing it back: when it unlocks growth capital, valuation, term and the effect on borrowing capacity.'],
        ['Operating & Finance Lease Structuring', 'Choosing the right type of lease.', 'Comparing lease structures: risk and ownership, tax and accounting treatment, break rights, purchase options and how each affects cash flow.'],
        ['Islamic Leasing: Ijara & Murabaha', 'Sharia-compliant asset finance.', 'Asset financing built on Islamic principles: ijara and related structures, ownership and risk allocation, documentation and how they compare with conventional leases.'],
      ],
    },
    {
      label: 'Asset-Backed & Specialist Finance',
      desc: 'Receivables, inventory, plant and asset-based lending facilities.',
      lead: 'Advisory for companies borrowing against what they own and for lenders structuring finance around collateral rather than only cash flow.',
      feat: ['Borrowing against the balance sheet: collateral as a funding source', 'When asset-based facilities outperform conventional lending.'],
      kids: [
        ['Receivables & Factoring', 'Funding against customer invoices.', 'Raising cash from outstanding invoices: factoring and discounting, recourse, customer concentration, notification and the real cost compared with other funding.'],
        ['Inventory & Trade Asset Finance', 'Funding stock and goods in transit.', 'Financing goods held for sale or in the supply chain: valuation and control of stock, borrowing bases, monitoring and seasonal funding needs.'],
        ['Plant & Machinery Finance', 'Long-life industrial assets as security.', 'Lending against plant and machinery: independent valuation, asset life, maintenance conditions, repossession practicalities and sensible loan-to-value limits.'],
        ['Asset-Based Lending Facilities', 'Revolving lines secured on assets.', 'Flexible credit lines that grow with the asset base: borrowing base design, reporting, field audits, covenants and when they replace traditional overdraft lines.'],
      ],
    },
    {
      label: 'Lessors, Portfolios & Residual Value',
      desc: 'Lessor platforms, portfolio trading, remarketing and funding lines.',
      lead: 'Advisory for lessors, lenders and investors building, buying and managing portfolios of leases and asset-backed receivables.',
      feat: ['Running a lease book: origination, credit and residual risk', 'What investors examine before they buy or fund a portfolio.'],
      kids: [
        ['Lessor Platforms & Origination', 'Building a leasing business.', 'Setting up and scaling a lessor: origination channels, vendor programmes, pricing, credit policy, systems and the capital needed to grow the book.'],
        ['Portfolio Acquisitions & Sales', 'Trading books of leases and loans.', 'Buying and selling portfolios: data tape review, valuation, performance history, servicing transfer and the diligence that supports a fair price.'],
        ['Residual Value & Remarketing', 'What assets are worth at the end of the lease.', 'Managing end-of-lease outcomes: residual value setting, inspection and refurbishment, resale channels and how residual losses affect returns.'],
        ['Credit Risk & Collections', 'Underwriting and recovering what is owed.', 'Protecting the quality of a lease book: scoring and approval, early arrears handling, recoveries, repossession and provisioning.'],
        ['Securitisation & Funding Lines', 'Raising money to fund the lease book.', 'Funding a lessor: bank lines, warehouse facilities, securitisation and investor structures, with the eligibility tests and reporting each requires.'],
        ['Lease Accounting & Reporting', 'IFRS 16 and portfolio reporting.', 'Accounting for leases on both sides of the contract: right-of-use assets and liabilities, data and systems, disclosure and the effect on reported ratios.'],
      ],
    },
  ],
};
