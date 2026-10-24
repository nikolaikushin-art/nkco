// NK&CO: Infrastructure menu, advanced sub-services (v262).
// Every Infrastructure item now has 4, 6 or 8 sub-service pages.
//   INFRA_NEW    key 'Section|Item' -> rows added to the item. Row shape: [label, shortLine, pageLead]
//   INFRA_LINES  label -> one-line description for existing sub-services that had none
// All labels are unique across the whole menu. All copy is draft. No firms, figures or regulators are named.

const slug = (s = '') =>
  String(s).toLowerCase().trim().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const INFRA_NEW = {
  // ---------------------------------------------------------------- Strategy & Feasibility
  'Strategy & Feasibility|Business Idea Validation': [
    ['Venture Thesis Stress-Test', 'Challenge the idea before money moves.', 'A structured challenge of the venture thesis: the assumptions it rests on, the evidence behind each, the failure points and the conditions under which the idea should be reshaped, delayed or dropped.'],
  ],
  'Strategy & Feasibility|Feasibility & Business Case': [
    ['Sensitivity & Downside Modelling', 'What breaks the case, and when.', 'Testing the business case against slower demand, higher costs and delayed licences, so the board sees which variables decide the outcome and how much room for error the plan really has.'],
    ['Capital Requirement Sizing', 'How much funding the venture truly needs.', 'Sizing the capital a venture needs from set-up through break-even: build cost, working capital, licences, hiring and a reserve, phased against the milestones that release each tranche.'],
    ['Go / No-Go Decision Memo', 'One page that lets the board decide.', 'A decision-ready memorandum that pulls the study, model and risks into one recommendation, with the conditions attached to a go and the triggers that would turn it into a no-go.'],
  ],
  'Strategy & Feasibility|Market & Demand Research': [
    ['Addressable Market Mapping', 'Who can realistically be served.', 'Mapping the market from total demand to the share a new entrant can reach in the UAE, by segment, emirate and channel, with the assumptions written down and open to challenge.'],
    ['Segment & Persona Profiling', 'Buyers described by behaviour, not guesses.', 'Profiles of the customer groups worth pursuing: who decides, what they pay for today, what moves them to switch and which segments are worth the cost of winning.'],
    ['Channel Economics Research', 'What each route to market really costs.', 'Comparing direct, partner, distributor and digital routes on cost to acquire, margin retained, speed to revenue and how much control the company keeps over the customer.'],
  ],
  'Strategy & Feasibility|Competitor & Landscape Analysis': [
    ['Competitive Moat Assessment', 'What protects a position, and what does not.', 'Assessing which advantages are durable in this market (licences, relationships, scale, data, brand) and which can be copied within a year, and what that means for how the venture should compete.'],
  ],
  'Strategy & Feasibility|Location & Jurisdiction Scoping': [
    ['Licence Activity Matching', 'Match the activity to the right licence.', 'Matching each planned activity to the licence category, authority and permitted scope that fits, so the structure chosen does not later block a service, a client type or a revenue line.'],
  ],
  'Strategy & Feasibility|Partner & Supplier Discovery': [
    ['Counterparty Reputation Screening', 'Know who you are dealing with.', 'Background and reputation screening of partners, agents and suppliers: ownership, litigation, sanctions exposure, references and standing with regulators and banks.'],
  ],
  'Strategy & Feasibility|Customer & Proposition Testing': [
    ['Willingness-to-Pay Testing', 'Find the price customers will accept.', 'Structured price testing with real prospects to find the range customers accept, what they trade off and which package gets chosen, before a price list is committed.'],
  ],

  // ---------------------------------------------------------------- Business Architecture
  'Business Architecture|Business Plan & Operating Model': [
    ['Unit Economics Model', 'Profit per customer, product and site.', 'A model of what each customer, product or site earns after direct cost, with payback periods and the levers that move margin, so growth is only pursued where it pays.'],
    ['Capability & Resource Plan', 'The people, assets and skills required.', 'A plan of the capabilities the operating model needs, which are built, hired or bought in, and when each has to be in place for launch and for each step of growth.'],
    ['Governance & Reporting Model', 'How decisions and numbers flow.', 'The reporting lines, decision forums and management information the new business runs on from day one, designed so owners and lenders see the same numbers as management.'],
  ],
  'Business Architecture|Legal & Ownership Structuring': [
    ['Founder Equity & Vesting', 'Fair splits that survive disagreement.', 'Equity allocation, vesting and leaver terms between founders and early backers, drafted so contribution, control and exit rights stay clear as the company grows.'],
    ['Group Structure Charting', 'The structure on one page.', 'A clear chart and rationale of the entities, owners and flows of funds in the group, kept current as entities are added, merged or closed.'],
    ['Regulatory Ownership Limits', 'Foreign ownership and licence conditions.', 'Reviewing activity-level ownership limits, local sponsor or service-agent requirements and regulator approvals that shape who may own what in each jurisdiction.'],
  ],
  'Business Architecture|Funding & Budget Planning': [
    ['Contingency & Reserve Planning', 'Buffers sized to the real risks.', 'Setting contingency and cash reserves from the risks identified in the plan, with the triggers for using them and the point at which funding must be raised again.'],
  ],
  'Business Architecture|Product & Service Architecture': [
    ['Service Level Frameworks', 'What is promised, measured and reported.', 'Defining service levels, response times and reporting that the company can honestly meet, with the escalation and remedy terms that go into client contracts.'],
  ],
  'Business Architecture|Process & Systems Blueprint': [
    ['Controls-by-Design Review', 'Build the controls into the process.', 'Reviewing designed processes for approval points, segregation of duties and audit trail before they are built, so controls are part of the workflow rather than added later.'],
  ],
  'Business Architecture|Launch & Implementation Planning': [
    ['Critical Path & Gating Plan', 'What must happen, in what order.', 'The dependency chain from licence to first revenue, with decision gates and owners, so delay on one approval does not quietly stall everything behind it.'],
    ['Hiring & Mobilisation Plan', 'The team in place before launch.', 'A phased plan for hiring, visas, onboarding and handover that has the right people in seat on launch day, with the lead times for each role built in.'],
    ['Soft-Launch & Pilot Plan', 'Open small, learn fast, then scale.', 'A controlled opening with a limited set of clients or sites, defined success measures and a fixed review point at which the full launch is confirmed or adjusted.'],
  ],
  'Business Architecture|Compliance & Licensing Roadmap': [
    ['Beneficial Ownership Filing Plan', 'UBO filings planned and kept current.', 'Planning the beneficial ownership registers, declarations and update routines each entity needs, with owners for every filing and a calendar for changes.'],
  ],

  // ---------------------------------------------------------------- Setup & Conceptualisation
  'Setup & Conceptualisation|Foundation & Formation Framework': [
    ['Registers & Minute Books', 'Statutory records set up correctly.', 'Opening the statutory registers, minute books and share records for each entity, with the templates and routines that keep them complete and inspection-ready.'],
  ],
  'Setup & Conceptualisation|Organisational Architecture Setup': [
    ['Authority Matrix Rollout', 'Who can sign, approve and commit.', 'Rolling out the authority matrix to banks, advisers and staff, with signing limits, dual approvals and the evidence trail that shows decisions were taken properly.'],
  ],
  'Setup & Conceptualisation|Corporate Incorporation & Inception': [
    ['Notarisation & Attestation', 'Documents accepted first time.', 'Preparing, notarising and attesting corporate documents for UAE authorities and counterparties abroad, in the order and format each will accept.'],
    ['Registered Office & Address Services', 'A compliant business address.', 'Securing the registered office, tenancy or flexi-desk the licence requires, with the contract and registration formalities handled alongside the licence.'],
    ['Establishment Card & Immigration File', 'Open the company with the labour authorities.', 'Opening the establishment card and immigration file the company needs to sponsor staff and shareholders, with quotas, approvals and fees sequenced to the hiring plan.'],
  ],
  'Setup & Conceptualisation|Banking & Initial Capital Structuring': [
    ['Banking Compliance Pack', 'Everything the bank asks for, first time.', 'Assembling the documents, source-of-funds evidence and ownership explanations a UAE bank expects, so account opening is not held up by repeated requests.'],
  ],

  // ---------------------------------------------------------------- Establishment & Operations
  'Establishment & Operations|Finance, Accounting & Taxation': [
    ['Month-End Close Process', 'A predictable close, every month.', 'Designing and running a month-end close with a calendar, checklists and review points, so management accounts arrive on time and without surprises.'],
    ['Corporate Tax Registration & Filing', 'Registered, calculated and filed.', 'Registering for UAE corporate tax and VAT where required, computing liabilities, preparing returns and keeping the supporting workings ready for review.'],
    ['Fixed Assets & Cost Accounting', 'Know what things cost and what is owned.', 'Setting up asset registers, depreciation policy and cost allocation so margins by product, project or site reflect the real cost of delivering them.'],
    ['Chart of Accounts & ERP Mapping', 'Accounts that match the business.', 'Designing the chart of accounts and mapping it to the finance system, so reporting by entity, department and project works from the first transaction.'],
  ],
  'Establishment & Operations|Public Relations, Marketing & Sales': [
    ['Pipeline & Proposal Desk', 'A repeatable way to win work.', 'A proposal desk with templates, pricing guardrails and review steps that turns leads into clear, consistent offers and tracks them through to decision.'],
  ],
  'Establishment & Operations|General Management & Operations': [
    ['Decision Rights & Escalation', 'Clear on who decides what.', 'Defining decision rights, thresholds and escalation routes between management, the board and shareholders so issues are settled at the right level and quickly.'],
    ['Performance Review Rhythm', 'A cadence that keeps delivery honest.', 'A weekly, monthly and quarterly review rhythm with agreed measures, owners and actions, so slippage is visible early and corrected while it is still small.'],
  ],
  'Establishment & Operations|Organisation Scaling Establishment': [
    ['Multi-Entity Consolidation Setup', 'One view across every entity.', 'Setting up group consolidation across entities and currencies, with intercompany eliminations and a single reporting calendar for owners and lenders.'],
  ],

  // ---------------------------------------------------------------- Growth & Capitalisation
  'Growth & Capitalisation|Growth Strategy & Market Entry': [
    ['Market Prioritisation Model', 'Rank markets by return and effort.', 'A scoring model that ranks target markets on size, margin, regulatory ease and fit with existing strengths, so expansion goes where the return is highest.'],
    ['Entry Mode Selection', 'Build, partner, acquire or license.', 'Comparing the routes into a new market on control, speed, capital and risk, with a recommended mode and the terms required to make it work.'],
    ['Regional Launch Sequencing', 'Which market, in what order.', 'Sequencing launches across emirates and GCC countries so each opening funds and informs the next, with resources and risks planned wave by wave.'],
  ],
  'Growth & Capitalisation|Funding & Capital Raising': [
    ['Valuation & Term Sheet Advisory', 'Understand what is on offer.', 'Supporting founders and boards through valuation discussions and term sheets: what each clause means, what is negotiable and what it costs over time.'],
    ['Investor Targeting & Outreach', 'The right investors, approached well.', 'Identifying investors whose mandate fits the raise and managing a disciplined outreach process, with materials, meetings and follow-up tracked to a close.'],
    ['Due Diligence Management', 'A diligence process that stays on track.', 'Running the diligence process: question lists, document flow, management sessions and issue tracking, so the deal does not lose momentum or credibility.'],
  ],
  'Growth & Capitalisation|Financial Planning & Treasury': [
    ['Capital Allocation Framework', 'Spend where the return is highest.', 'A framework for ranking investments, dividends and debt repayment against hurdle rates and strategic fit, so capital decisions follow one consistent logic.'],
  ],
  'Growth & Capitalisation|Technology & Digital Scaling': [
    ['Enterprise Integration Layer', 'Systems that talk to each other.', 'Designing the integration layer that connects finance, CRM, HR and operations systems, so data moves once, correctly, and reporting does not rely on spreadsheets.'],
    ['Cloud Migration Planning', 'Move to the cloud without disruption.', 'Planning the move of applications and data to the cloud: sequence, cost, security, residency requirements and the fallback if a step does not go as expected.'],
    ['Digital Product Roadmap', 'What to build next, and why.', 'A prioritised roadmap for digital products and platforms, tied to revenue, cost or risk outcomes, with funding gates and owners for each release.'],
  ],
  'Growth & Capitalisation|Sales & Revenue Operations': [
    ['Sales Compensation Design', 'Incentives that reward the right sales.', 'Designing commission and bonus plans that reward margin and retention as well as volume, with clear rules, caps and a plan that can be administered cleanly.'],
  ],
  'Growth & Capitalisation|Supply Chain & Procurement': [
    ['Vendor Performance Management', 'Hold suppliers to what was agreed.', 'Scorecards, review meetings and corrective action plans for key suppliers, so delivery, quality and cost are managed through the life of the contract.'],
  ],
  'Growth & Capitalisation|Investor & Lender Reporting': [
    ['Lender Compliance Certificates', 'Covenant certificates done properly.', 'Preparing the compliance certificates and supporting calculations lenders require, with review steps that catch errors before they reach the bank.'],
  ],

  // ---------------------------------------------------------------- Governance & Risk
  'Governance & Risk|Corporate Governance Frameworks': [
    ['Board Effectiveness Review', 'How well the board really works.', 'An independent review of board composition, information flow, meeting quality and committee use, ending in practical changes the chair can act on.'],
  ],
  'Governance & Risk|Regulatory & Legal Compliance': [
    ['Regulatory Change Monitoring', 'Know what changed and what it means.', 'Tracking changes in UAE and free-zone rules, assessing their impact on the business and assigning owners and dates for each required response.'],
    ['Compliance Monitoring Programme', 'Test that policies are followed.', 'A risk-based monitoring plan that tests whether policies and filings are actually followed, with findings reported to management and tracked to closure.'],
    ['Regulator Engagement & Inspections', 'Prepared for the regulator\u2019s visit.', 'Preparing for regulator reviews and inspections: document readiness, staff briefing, a single point of contact and a calm, organised response to requests.'],
  ],
  'Governance & Risk|Enterprise Risk & Internal Control': [
    ['Risk Appetite Statement', 'How much risk the board accepts.', 'Setting out in writing the amount and type of risk the board will accept, with limits and triggers that management can apply to day-to-day decisions.'],
    ['Control Testing & Assurance', 'Prove that the controls work.', 'Testing key controls on a schedule, recording evidence and reporting failures, so management and auditors can rely on controls rather than assume them.'],
    ['Key Risk Indicator Dashboards', 'Early warnings on one screen.', 'Selecting the indicators that signal rising risk and presenting them in a simple dashboard with thresholds, owners and actions when a limit is crossed.'],
  ],
  'Governance & Risk|Tax & Transfer Pricing Structuring': [
    ['Tax Dispute & Audit Support', 'Support when the authority asks.', 'Preparing for and responding to tax audits and queries: workings, correspondence, negotiation of positions and escalation routes if a dispute develops.'],
  ],
  'Governance & Risk|Contracts & Legal Operations': [
    ['Contract Lifecycle Management', 'From draft to renewal, in one place.', 'A contract repository and workflow covering drafting, approval, signature, obligations and renewal alerts, so no deadline or commitment is missed.'],
  ],
  'Governance & Risk|Cyber & Data Security': [
    ['Security Architecture Review', 'Is the design secure by default?', 'Reviewing network, identity, application and data design against recognised practice, with prioritised fixes for the weaknesses most likely to be exploited.'],
    ['Penetration Testing Coordination', 'Controlled attacks, clear results.', 'Scoping and coordinating independent penetration tests, receiving the findings in plain language and tracking remediation through to a verified fix.'],
    ['Privacy Impact Assessments', 'Check data use before it goes live.', 'Assessing new systems and processes that handle personal data for legal basis, minimisation, retention and transfer risks before they go live.'],
  ],
  'Governance & Risk|Health, Safety & Environment': [
    ['Contractor Safety Management', 'Safety standards extended to contractors.', 'Pre-qualification, induction and monitoring of contractors so the same safety standards apply to everyone working on the company\u2019s sites.'],
  ],

  // ---------------------------------------------------------------- Sustainability & Expansion
  'Sustainability & Expansion|Quality Governance & Assurance': [
    ['Supplier Quality Assurance', 'Quality that extends to suppliers.', 'Qualifying suppliers, setting quality requirements and auditing against them, so the standard the client experiences does not depend on a weak link.'],
  ],
  'Sustainability & Expansion|Team & Workforce Enhancement': [
    ['Capability Gap Analysis', 'Where skills fall short of strategy.', 'Comparing the skills the strategy needs with those the team has, by function and level, and turning the gaps into a plan to hire, train or partner.'],
  ],
  'Sustainability & Expansion|Transformation & Diversification': [
    ['Portfolio Rationalisation', 'Keep, fix, grow or exit each line.', 'Reviewing each business line on return, risk and strategic fit, and deciding which to grow, fix, merge or exit so capital and attention go where they earn most.'],
  ],
  'Sustainability & Expansion|Enterprise Expansion & Franchise': [
    ['Franchise Disclosure & Legal Pack', 'The legal documents a franchise needs.', 'Preparing the franchise agreement, disclosure materials, brand licence and operating manual references that give franchisees clear terms and protect the brand.'],
    ['Franchisee Selection & Onboarding', 'Choose partners who can deliver.', 'Setting selection criteria, assessing candidates and onboarding new franchisees with training, site approval and an opening plan that protects standards.'],
  ],

  // ---------------------------------------------------------------- Succession & Legacy
  'Succession & Legacy|Succession & Ownership Transition': [
    ['Governance of the Transition Period', 'Stable leadership during the handover.', 'Interim governance for the period of change: who decides, how owners and managers are informed and how conflicts are resolved while ownership or leadership moves.'],
  ],
  'Succession & Legacy|Exit Readiness & Valuation': [
    ['Buyer Universe Mapping', 'Who might buy, and why.', 'Mapping the strategic and financial buyers most likely to value the business, their motives and capacity, so an exit process targets the right counterparties.'],
  ],
  'Succession & Legacy|Sale, Merger & IPO Execution': [
    ['Sell-Side Advisory Coordination', 'One team running the sale.', 'Coordinating the advisers, management and documents in a sale so the process runs to timetable and the information given to buyers is consistent.'],
    ['Regulatory & Merger Control Approvals', 'Approvals planned into the timetable.', 'Identifying the competition, sector and foreign-ownership approvals a transaction needs, and building their timing and conditions into the deal plan.'],
    ['Post-Deal Integration Planning', 'Value protected after completion.', 'Planning the first 100 days after a deal: leadership, systems, customers and people, with owners and measures for the synergies the deal was priced on.'],
  ],
  'Succession & Legacy|Family Office & Wealth Structuring': [
    ['Estate & Inheritance Planning', 'Assets pass as intended.', 'Planning how assets pass between generations under UAE and foreign rules, with wills, structures and guardianship arrangements that reflect the family\u2019s wishes.'],
  ],
  'Succession & Legacy|Business Continuity & Crisis Management': [
    ['Business Impact Analysis', 'What the business cannot do without.', 'Identifying the processes, systems and people the business depends on, how long it can be without each, and the cost of that interruption.'],
    ['Emergency Communications Plan', 'Say the right thing, quickly.', 'Pre-agreed roles, channels and holding statements for staff, clients, regulators and the media, so communication in a crisis is fast, consistent and accurate.'],
    ['Resilience Testing & Drills', 'Rehearse before it matters.', 'Scheduled exercises of continuity and crisis plans, with observers, lessons recorded and plans updated, so the response works when it is needed.'],
  ],
  'Succession & Legacy|Restructuring & Orderly Wind-Down': [
    ['Creditor & Stakeholder Negotiation', 'Reach terms without a dispute.', 'Planning and leading negotiations with lenders, suppliers, landlords and employees, with a clear order of priorities and a documented settlement for each.'],
  ],
};

// Menu lines for existing sub-services that had none.
export const INFRA_LINES = {
  // Strategy & Feasibility
  'Concept Screening': 'Quick filter on which ideas merit a study.',
  'Problem & Solution Fit': 'Does the offer solve a real, paid-for problem?',
  'Founder Readiness': 'Skills, capital and commitment to carry it.',
  'Opportunity Assessment': 'Size and shape of the prize.',
  'Risk Screening': 'The red flags, found early.',
  'Feasibility Study': 'Commercial, legal and operational viability.',
  'Financial Projections': 'Revenue, cost and cash over five years.',
  'Break-Even Analysis': 'When the venture pays for itself.',
  'Investment Case': 'The return a backer can expect.',
  'Scenario Planning': 'Base, upside and downside views.',
  'Market Sizing': 'Demand quantified by segment.',
  'Customer Research': 'What buyers say and actually do.',
  'Sector Reports': 'Industry facts for UAE decisions.',
  'Pricing Research': 'What the market will bear.',
  'Competitor Benchmarking': 'Side-by-side against named rivals.',
  'Pricing Landscape': 'How the market prices today.',
  'Positioning Gaps': 'Where no competitor stands yet.',
  'Regulatory Landscape': 'Rules that shape the opportunity.',
  'Partner Mapping': 'Who could help you win.',
  'Mainland vs Free Zone': 'The trade-offs, set out plainly.',
  'Emirate Comparison': 'Dubai, Abu Dhabi, Sharjah and beyond.',
  'Cost Benchmarking': 'Set-up and running cost by location.',
  'Sector Fit': 'Where your sector has an advantage.',
  'Office Requirements': 'Space and desk rules by licence.',
  'Local Partner Search': 'Shortlisted and introduced.',
  'Supplier Vetting': 'Capacity, quality and standing checked.',
  'Distributor Screening': 'Reach and reliability reviewed.',
  'Sponsor & Agent Review': 'Terms and risks of local sponsors.',
  'Partner Due Diligence': 'Independent checks before signing.',
  'Pilot Programmes': 'A small live test with real clients.',
  'Prototype Testing': 'Feedback before the full build.',
  'Customer Interviews': 'Structured conversations with buyers.',
  'Offer Refinement': 'Sharpening what is sold and how.',
  'Pre-Sales Validation': 'Commitments before capital.',
  // Business Architecture
  'Business Plan': 'The plan lenders and boards trust.',
  'Operating Model': 'How the business runs day to day.',
  'Revenue Model': 'Where income comes from and how.',
  'Organisation Plan': 'Roles, reporting lines and headcount.',
  'Launch Roadmap': 'Milestones from approval to opening.',
  'Ownership Structure': 'Who owns what, and with what rights.',
  'Shareholder Terms': 'Rights, duties and exit rules.',
  'IP Ownership': 'Brand and know-how held properly.',
  'Nominee & Trust Options': 'Where permitted, and how it works.',
  'Start-Up Budget': 'Every cost before the first sale.',
  'Funding Requirements': 'How much, and when.',
  'Capital Sources': 'Equity, debt, grants and partners.',
  'Cash Runway Plan': 'Months of operation funded.',
  'Milestone Funding': 'Money released as goals are met.',
  'Service Catalogue': 'What is offered, defined clearly.',
  'Pricing Architecture': 'Rate cards, discounts and rules.',
  'Delivery Model': 'Who does what, where and how.',
  'Quality Standards': 'The bar every client experiences.',
  'Packaging & Tiers': 'Good, better and best offers.',
  'Process Mapping': 'Workflows drawn as they are.',
  'Systems Landscape': 'The tools in use and their gaps.',
  'Workflow Design': 'Processes redesigned to run lean.',
  'Tool Selection': 'The right software for the job.',
  'Integration Plan': 'How systems connect and share data.',
  'Launch Timeline': 'The dated path to opening day.',
  'Project Management Office': 'Governance of the launch programme.',
  'Vendor Selection': 'Suppliers chosen on evidence.',
  'Risk & Dependencies': 'What could delay launch.',
  'Day-One Readiness': 'Checked, signed off, ready.',
  'Licence Requirements': 'Every permit the business needs.',
  'Approval Sequencing': 'Applications in the right order.',
  'Regulatory Calendar': 'Deadlines for filings and renewals.',
  'Policy Requirements': 'Policies regulators expect to see.',
  'Audit Readiness': 'Ready for the first review.',
  // Growth & Capitalisation
  'Growth Roadmap': 'Priorities and milestones to scale.',
  'GCC Market Entry': 'Routes into KSA, Qatar, Oman and more.',
  'Channel Strategy': 'Which routes carry which products.',
  'Strategic Alliances': 'Partners that open doors.',
  'Revenue Diversification': 'New income beyond the core.',
  'Investor Readiness': 'Numbers and story fit for scrutiny.',
  'Pitch & Data Room': 'Materials investors can rely on.',
  'Equity Raising': 'Rounds structured and run.',
  'Debt & Credit Facilities': 'Bank and non-bank lending.',
  'Government & Grant Funding': 'Public programmes and incentives.',
  'Financial Modelling': 'Three-statement models that hold up.',
  'Budgeting & Forecasting': 'Plans linked to drivers.',
  'Working Capital Optimisation': 'Cash released from the cycle.',
  'Cash Flow Management': 'Weekly visibility of cash.',
  'Treasury Policy': 'Rules for cash, FX and risk.',
  'Platform Architecture': 'The technical foundation to grow on.',
  'Process Automation': 'Manual work removed.',
  'Data & Analytics': 'Decisions backed by clean data.',
  'CRM Rollout': 'One client record, adopted by teams.',
  'AI Adoption': 'Practical use cases, governed.',
  'Sales Process Design': 'Stages, owners and exit criteria.',
  'Pipeline Management': 'Forecasts you can rely on.',
  'Pricing & Discounting': 'Price discipline across the team.',
  'Revenue Reporting': 'One truth for bookings and revenue.',
  'Partner & Channel Sales': 'Resellers and referrers managed.',
  'Procurement Policy': 'Buying rules and approval limits.',
  'Supplier Contracts': 'Terms that protect price and supply.',
  'Logistics Setup': 'Warehousing and distribution built.',
  'Inventory Planning': 'Stock levels that serve demand.',
  'Management Accounts': 'Monthly results, explained.',
  'Board Packs': 'Concise, decision-ready papers.',
  'Covenant Tracking': 'Headroom watched in advance.',
  'KPI Dashboards': 'The measures that matter, live.',
  'Investor Updates': 'Regular, consistent, honest.',
  // Governance & Risk
  'Board Charters': 'Duties and conduct of the board.',
  'Committee Terms of Reference': 'Remit and authority of each committee.',
  'Delegation Matrices': 'Approval limits by role.',
  'Governance Reviews': 'Independent health check.',
  'Family Governance': 'Rules for family, ownership and business.',
  'Regulatory Mapping': 'Every rule that applies, listed.',
  'AML & KYC Programmes': 'Client due diligence that stands up.',
  'Economic Substance & UBO': 'Substance and ownership filings.',
  'Data Protection': 'Compliance with UAE privacy law.',
  'Licence Renewals': 'No lapses, no surprises.',
  'Risk Registers': 'Risks owned, rated and tracked.',
  'Internal Controls': 'Checks built into operations.',
  'Fraud Prevention': 'Detection and deterrence.',
  'Insurance Strategy': 'Cover matched to real exposure.',
  'Third-Party Risk': 'Supplier and partner exposure managed.',
  'Corporate Tax Planning': 'Position planned within the rules.',
  'Transfer Pricing Policy': 'Arm\u2019s-length terms documented.',
  'Group Structuring': 'Entities arranged for tax and control.',
  'Tax Residency': 'Residency evidence and certificates.',
  'Cross-Border Tax': 'Treaties, withholding and flows.',
  'Contract Templates': 'Standard terms, approved once.',
  'Approval Workflows': 'Who signs, in what order.',
  'Dispute Avoidance': 'Clear terms that prevent claims.',
  'Legal Entity Management': 'Every entity, in good standing.',
  'Company Secretarial': 'Meetings, resolutions and filings.',
  'Security Policies': 'Rules every user can follow.',
  'Access Controls': 'The right people, the right data.',
  'Incident Response': 'A rehearsed plan for a breach.',
  'Security Awareness': 'Training that changes behaviour.',
  'Vulnerability Assessment': 'Weak points found and ranked.',
  'HSE Policy': 'Standards and responsibilities set.',
  'Site Audits': 'Inspections with clear findings.',
  'Incident Reporting': 'Events logged, analysed, closed.',
  'Environmental Compliance': 'Permits and emissions managed.',
  'Emergency Planning': 'Evacuation, response and drills.',
  // Succession & Legacy
  'Family Business Transition': 'Handing over without losing value.',
  'Shareholder Buy-Sell Terms': 'Pre-agreed exit and buy-out rules.',
  'Next-Generation Readiness': 'Heirs prepared to lead or own.',
  'Exit Strategy': 'Route, timing and price objectives.',
  'Business Valuation': 'An independent view of worth.',
  'Value Enhancement': 'Actions that raise the price.',
  'Data Room Preparation': 'Documents organised for buyers.',
  'Trade Sale Process': 'Run to timetable, to a signed deal.',
  'Merger Structuring': 'Terms, structure and approvals.',
  'IPO Preparation': 'Readiness for a public listing.',
  'Buyer & Investor Outreach': 'Targeted, confidential approaches.',
  'Deal Negotiation': 'Positions prepared, trade-offs clear.',
  'Family Office Setup': 'Entity, team and reporting built.',
  'Wealth Structuring': 'Assets held in the right vehicles.',
  'Family Constitution': 'Shared principles in writing.',
  'Philanthropic Vehicles': 'Giving structured to last.',
  'Asset Protection': 'Safeguards against future claims.',
  'Holding Company Design': 'A parent built for control.',
  'DIFC & ADGM Foundations': 'Foundations in the financial centres.',
  'Trust Arrangements': 'Trusts set up and administered.',
  'Intra-Group Structuring': 'Flows between group entities.',
  'Continuity Planning': 'Operations kept running.',
  'Crisis Playbooks': 'Roles and steps for an emergency.',
  'Reputation Management': 'Protect trust when it is tested.',
  'Leadership Pipelines': 'Successors ready for key roles.',
  'Disaster Recovery': 'Systems and data restored fast.',
  'Business Restructuring': 'A leaner, financeable business.',
  'Debt Reorganisation': 'New terms with lenders.',
  'Entity Liquidation': 'Orderly closure of entities.',
  'Licence Cancellation': 'Authorities closed out properly.',
  'Employee Settlement': 'End-of-service paid correctly.',
};

// ---- derived exports (same pattern as industriesMore.js) -----------------------------------------------------
export const INFRA_CHILD_DESC = { ...INFRA_LINES };
export const INFRA_LEAF_DESC = {};
Object.entries(INFRA_NEW).forEach(([key, rows]) => {
  const [cat, item] = key.split('|');
  rows.forEach(([label, short, long]) => {
    INFRA_CHILD_DESC[label] = short;
    INFRA_LEAF_DESC[`infrastructure/${slug(cat)}/${slug(item)}/${slug(label)}`] = long;
  });
});
