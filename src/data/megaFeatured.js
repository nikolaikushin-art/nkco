// Featured card content for EVERY mega-menu sidebar (category) and sub-sidebar (item).
//
//   getFeatured(sectionKey, categoryTitle, itemLabel?)
//     - itemLabel given   -> the card for that item
//     - itemLabel omitted -> the card for the category
//     - nothing found     -> null (MegaRail falls back to the section's default card)
//
// To edit a card, change its [title, description] below. Add `_tag` / `_cta` to a
// category block to override the section's default tag / button label.
// Images are assigned automatically from the pool (no two neighbouring cards share one).
import { IMG, slugify } from '../mock';
import { featuredPhoto } from '../lib/leafPhoto';

const leaf = (...p) => ('/' + p.map(slugify).join('/')).replace(/\/+/g, '/');

// Default tag + button label per top-level menu
const SECTION_STYLE = {
  capabilities: { tag: 'Featured insight', cta: 'Read the insight' },
  infrastructure: { tag: 'Featured playbook', cta: 'Read the playbook' },
  opportunities: { tag: 'Featured mandate', cta: 'View the mandate' },
  intelligence: { tag: 'Featured research', cta: 'Read the report' },
  industries: { tag: 'Sector spotlight', cta: 'Explore the sector' },
  expertise: { tag: 'Featured practice', cta: 'See the approach' },
  overview: { tag: 'Featured story', cta: 'Read more' },
};

// Each category: `_` is the category card, every other key is an item card.
const CONTENT = {
  // ------------------------------------------------------------------ CAPABILITIES
  capabilities: {
    'Business Deployment': {
      _: ['Entering the UAE in 90 days: the operator\u2019s blueprint', 'Licensing, hiring and go-to-market sequencing for international businesses landing in Dubai.'],
      'Market Entry & Expansion': ['Why GCC expansion now starts in Dubai \u2014 and rarely ends there', 'How multinationals sequence UAE entry ahead of Saudi and wider regional rollouts.'],
      'Commercial Excellence': ['Pricing power in a high-inflation Gulf consumer market', 'Where leading operators are finding margin through pricing, channels and customer experience.'],
      'Market Intelligence': ['Sizing Dubai demand when the data is incomplete', 'A practical approach to market sizing, competitor mapping and demand forecasting.'],
    },
    'Enterprise Consulting': {
      _: ['The performance reset: lessons from Gulf operators', 'How institutions are rebuilding operating models for a higher-cost, higher-growth decade.'],
      'Transformation & Performance': ['Cost out, growth in: the two-speed transformation model', 'Funding growth bets from structural savings without stalling the core business.'],
      'Digital & Innovation': ['From pilots to platforms: scaling digital in regulated sectors', 'What separates the innovation programmes that ship from those that stall.'],
      'Operational Excellence': ['Automation and AI in the back office: what actually pays back', 'A grounded look at where process redesign delivers measurable returns.'],
    },
    'Corporate Advisory': {
      _: ['Building long-term enterprise value in family-led groups', 'Governance, portfolio and succession choices that compound over decades.'],
      'Portfolio Direction': ['Pruning the portfolio: when divestment creates more value than growth', 'A framework for deciding what to keep, fix, grow or sell.'],
      'Corporate Planning': ['Five-year planning for a market that reprices every quarter', 'Scenario-based planning that holds up when conditions change fast.'],
      'Business Structuring': ['Holding structures in DIFC and ADGM: the 2026 decision guide', 'Choosing the right vehicle for ownership, financing and eventual exit.'],
    },
    'Talent & Recruitment': {
      _: ['The UAE C-suite talent market: scarcity, premiums and retention', 'What it now takes to hire and keep senior leaders in the Gulf.'],
      'Executive Search': ['Searching for the next generation of Gulf CEOs', 'How boards are widening the pool beyond the familiar shortlist.'],
      'Institutional Leadership': ['Boards, committees and the leadership bench institutions need', 'Building leadership depth before the succession moment arrives.'],
      'Talent Management': ['Emiratisation and global talent: designing a workforce that compounds', 'Blending national and international talent into one high-performing organisation.'],
    },
    'Capital Markets': {
      _: ['Private credit reaches an inflection point in the Gulf', 'Institutional allocators are re-engineering fixed-income playbooks around private debt.'],
      'Capital Solutions': ['Matching capital to stage: debt, equity and hybrids', 'A decision guide for founders and CFOs raising growth capital in the region.'],
      'Investor Relations': ['Investor relations for first-time Gulf issuers', 'Disclosure, cadence and narrative for companies meeting institutional investors.'],
      'Financial Transactions': ['Anatomy of a cross-border financing in DIFC', 'The workstreams, documents and timelines behind a regional financing.'],
    },
    'Mergers & Acquisitions': {
      _: ['Gulf M&A: why the mid-market is where the volume is', 'Deal activity, valuation trends and the buyers shaping the next cycle.'],
      'Acquisition Services': ['Buy-side discipline: sourcing, screening and walking away', 'How disciplined acquirers protect returns before the term sheet.'],
      'Divestment Solutions': ['Running a clean carve-out sale process', 'Preparing perimeters, data rooms and buyers for a competitive exit.'],
      'Transaction Execution': ['Closing on time: the workstreams that decide deals', 'Diligence, financing and integration planning run in parallel, not in sequence.'],
    },
  },

  // ------------------------------------------------------------------ INFRASTRUCTURE
  infrastructure: {
    'Setup & Conceptualisation': {
      _: ['The 30-day UAE incorporation blueprint', 'From concept to licensed entity: the sequence that keeps launch on schedule.'],
      'Brand Development & Deployment': ['Naming, trademarking and launching a brand in the UAE', 'Protecting and positioning a brand before the first client meeting.'],
      'Corporate Licensing & Registration': ['Free zone, mainland or offshore: matching licence to activity', 'How regulators, ownership rules and client expectations shape the choice.'],
      'Foundation & Formation Framework': ['Shareholder agreements and founding documents that hold up', 'The clauses that matter once the company has partners, investors and disputes.'],
      'Institutional Business Development': ['Winning the first anchor client in the Gulf', 'Relationship-led sales for new entrants without a local track record.'],
      'Organisational Architecture Setup': ['Designing the first 50 roles: structure before headcount', 'Sizing teams and reporting lines for the first two years of operation.'],
      'Corporate Incorporation & Inception': ['Day-one readiness: what must be in place at incorporation', 'A checklist of registrations, policies and systems for opening day.'],
      'Banking & Initial Capital Structuring': ['Opening a UAE corporate account in 2026: what banks now ask for', 'Preparing documentation and capital structure to clear onboarding quickly.'],
    },
    'Establishment & Operations': {
      _: ['Standing up the operating core of a Dubai business', 'Finance, people, technology and administration set up to scale.'],
      'Finance, Accounting & Taxation': ['Corporate Tax and VAT: an operator\u2019s guide for 2026', 'Registrations, filings and planning points for newly established companies.'],
      'Human Resource & Recruitment': ['Hiring in the UAE: visas, contracts and end-of-service obligations', 'Building compliant employment foundations from the first hire.'],
      'IT Deployment & AI Infrastructure': ['Choosing a cloud and data stack that meets UAE data rules', 'Architecture decisions that keep options open as AI use grows.'],
      'Public Relations, Marketing & Sales': ['Building a pipeline in a relationship-led market', 'Combining reputation, content and outreach to create qualified demand.'],
      'Office Administration & Reception': ['Outsourced front office: when it beats building in-house', 'Cost, control and client experience trade-offs for growing teams.'],
      'General Management & Operations': ['The weekly operating cadence of well-run Gulf businesses', 'Meetings, metrics and decisions that keep leadership aligned.'],
      'Organisation Scaling Establishment': ['Scaling from one emirate to six without losing control', 'Playbooks for repeatable expansion across sites and teams.'],
    },
    'Sustainability & Expansion': {
      _: ['Compounding advantage: the ten-year view for Gulf enterprises', 'The choices that separate durable institutions from fast starters.'],
      'Quality Governance & Assurance': ['ISO, audit and assurance: building credibility with institutional buyers', 'Quality systems that turn compliance into a commercial advantage.'],
      'Partnership & Investor Relations': ['Bringing in strategic investors without losing control', 'Structuring cap tables, rights and reporting for long-term partners.'],
      'Client Engagement & Retention': ['Retention is the cheapest growth in the Gulf', 'Voice-of-customer programmes that lift renewals and referrals.'],
      'Business Acquisition & Experience': ['Designing the client journey from first meeting to renewal', 'Mapping touchpoints to remove friction and build advocacy.'],
      'Team & Workforce Enhancement': ['Culture at scale: keeping a multinational team aligned', 'Leadership, learning and performance coaching that travel across offices.'],
      'Transformation & Diversification': ['Diversifying beyond the founding business: sequencing new bets', 'How to add business units without diluting the core.'],
      'Enterprise Expansion & Franchise': ['Franchising as a growth engine: the legal and operational foundations', 'What brands need in place before granting their first territory.'],
    },
  },

  // ------------------------------------------------------------------ OPPORTUNITIES
  opportunities: {
    'Business Opportunities': {
      _: ['Reading the Deal Board: what buyers are really paying for', 'Valuation multiples and deal structures across live UAE and GCC business sales.'],
      'Businesses For Sale': ['Cash-generative SMEs: the quiet core of Gulf deal flow', 'Why established operators with steady earnings keep attracting buyers.'],
      'Spin-Outs & Carve-Outs': ['Carve-outs done right: separating perimeters without breaking the business', 'Standalone costs, transition services and buyer readiness in practice.'],
      'Platform Plays': ['Buy-and-build in the GCC: where consolidation theses are working', 'Sectors where roll-ups are creating scale and defensible margins.'],
    },
    'Commercial Concepts': {
      _: ['Concepts with scale potential: what operators and landlords are backing', 'The F&B, retail and wellness formats attracting growth capital in Dubai.'],
      'F&B Concepts': ['From one site to twenty: the F&B concepts investors are funding', 'Unit economics and brand traits behind the successful rollouts.'],
      'Retail & Lifestyle': ['Experiential retail and wellness: the Dubai formats outperforming', 'How footfall, destination appeal and community are reshaping retail.'],
      'Ready-to-Scale Brands': ['Master franchise or direct: choosing a regional rollout model', 'Control, capital and speed compared across expansion routes.'],
    },
    'Institutional Investment': {
      _: ['Institutional Real Assets Fund \u2014 Series III', 'A curated fund investing across Dubai\u2019s Grade-A hospitality and living portfolios.', 'marina', 'View the mandate', '/opportunities/mandates/series-iii'],
      'Real Assets': ['Grade-A hospitality and living: the real-asset thesis for 2026', 'Why income-producing Dubai assets remain a core institutional allocation.'],
      'Private Credit': ['Senior and special-situations credit: where Gulf lenders see value', 'Pricing, structure and security across the regional private debt market.'],
      'Platform Mandates': ['Fund-of-ones and sovereign co-invest: structuring bespoke mandates', 'How large allocators are tailoring vehicles to their own return targets.'],
    },
    'Partnership Participation': {
      _: ['Partnering for scale: how Gulf joint ventures are being structured', 'Governance, exit rights and alignment in modern regional partnerships.'],
      'Joint Ventures': ['Sovereign and corporate JVs: governance that survives year three', 'Decision rights and deadlock mechanisms that keep partners aligned.'],
      'Franchise Opportunities': ['Master franchise UAE: the territories still open', 'What international brands look for in a regional master franchisee.'],
      'Co-Investment': ['Co-investing alongside institutions: access, fees and alignment', 'A guide to sourcing, sizing and monitoring co-investment positions.'],
    },
  },

  // ------------------------------------------------------------------ INTELLIGENCE
  intelligence: {
    'Research & Insights': {
      _: ['UAE Real Estate Market Review \u2014 Q1 2026', 'Living demand remains intact while affordability reshapes where it is expressed.'],
      'Sector Reports': ['Dubai Grade-A office: rents, take-up and the new occupier map', 'Where demand is concentrating and what it means for landlords.'],
      'Thematic Whitepapers': ['Dubai 2040 Urban Master Plan \u2014 Institutional Playbook', 'How the 2040 vision is shifting capital across housing, mobility and mixed use.'],
      'Executive Briefings': ['The quarter in five minutes: a briefing for boards', 'The signals that matter, distilled for decision-makers short on time.'],
    },
    'Data Platforms': {
      _: ['The Dubai Grade-A Office Live Dashboard', 'Rents, vacancy and pipeline updated continuously for institutional users.'],
      'Market Analytics': ['Transaction-level analytics across Dubai residential', 'Price, volume and buyer-mix trends down to community level.'],
      'Deal Intelligence': ['Who is buying what: tracking institutional deal flow in the GCC', 'A running view of transactions, capital sources and pricing.'],
      'Real Asset Dashboards': ['Yield, vacancy and pipeline across hospitality, offices and logistics', 'Side-by-side performance of the asset classes institutions watch most.'],
    },
    Publications: {
      _: ['NK&CO Quarterly: the editorial view of the Gulf economy', 'Long-form analysis on capital, property and enterprise in the region.'],
      'NK&CO Quarterly': ['Inside the latest Quarterly', 'This edition\u2019s lead essays on capital allocation and market structure.'],
      'Annual Outlook': ['Global Capital Flows Outlook 2026', 'Where international capital is heading and how the Gulf is positioned.'],
      'Special Editions': ['Special editions: one theme, examined in depth', 'Focused issues on topics reshaping the region\u2019s economy.'],
    },
    'NK&CO Briefing': {
      _: ['The Briefing: conversations with the people shaping Gulf capital', 'Short, sharp discussions with investors, operators and policymakers.'],
      'Latest Episodes': ['New this week: the Dubai market, explained', 'Our most recent conversation and the three takeaways from it.'],
      Series: ['Series: The Allocator Diaries', 'A recurring look at how institutions make real-world investment decisions.'],
      Topics: ['Browse by topic: credit, real estate, family offices, AI', 'Find every conversation on the theme you care about.'],
      'Guest Voices': ['Guest voices: perspectives from across the region', 'Founders, CIOs and regulators on what they are seeing first-hand.'],
    },
  },

  // ------------------------------------------------------------------ INDUSTRIES
  industries: {
    'Corporate & Commercial': {
      _: ['The corporate Gulf: ten sectors, one capital cycle', 'How finance, technology and services are being reshaped by the same forces.'],
      'Banking & Investment': ['Gulf banks and the rise of the private-credit competitor', 'How lenders are responding as non-bank capital grows.'],
      'Capital Markets & M&A': ['IPO windows and the pipeline behind them', 'What listings and deals say about regional market depth.'],
      'Insurance & Risk': ['Pricing climate and cyber risk in the UAE insurance market', 'Underwriting responses to new categories of exposure.'],
      'Technology & Digital': ['Dubai as a regional technology hub: beyond the headlines', 'Where talent, capital and regulation are aligning for digital companies.'],
      'Professional Services': ['The future of advisory in a platform-first market', 'How firms are rebuilding around data, specialisation and speed.'],
      'Media & Communications': ['Media in the Gulf: audiences, platforms and monetisation', 'Content strategies winning in a fast-changing attention economy.'],
      'Commerce & Distribution': ['Omnichannel in the UAE: the distribution models winning share', 'How retailers and distributors are rewiring the route to customer.'],
      'Education & Learning': ['The UAE education market: capacity, quality and capital', 'Investment themes across schools, higher education and skills.'],
      'Innovation & Emerging': ['Emerging sectors worth watching in the GCC', 'Early signals in frontier industries drawing institutional attention.'],
      'Training & Academy': ['Corporate academies: building capability in-house', 'Why leading employers are investing in their own learning institutions.'],
    },
    'Real Assets & Infrastructure': {
      _: ['The Future of Real Estate & Living in the UAE', 'Demand, supply and capital flows across the region\u2019s built environment.'],
      'Real Estate & Property': ['Dubai\u2019s housing market: resilient demand, tighter affordability', 'What rising prices mean for investors, occupiers and developers.'],
      'Construction & Development': ['Delivering the pipeline: cost, capacity and contractor risk', 'How developers are managing supply chains in a record build cycle.'],
      'Automotive & Mobility': ['Electrification and mobility: the Gulf\u2019s next infrastructure layer', 'Charging, fleets and new mobility business models.'],
      'Architecture & Design': ['Design as an asset: why premium schemes outperform', 'The role of architecture in pricing, absorption and brand.'],
      'Hospitality & Tourism': ['Record visitor numbers and the hotel pipeline behind them', 'RevPAR, supply growth and the brands expanding in Dubai.'],
      'Entertainment & Leisure': ['Destination entertainment: building demand that lasts', 'How venues and operators turn visits into repeat engagement.'],
      'Engineering & Design': ['Engineering the next generation of Gulf infrastructure', 'Technical advisory trends in complex built-environment projects.'],
      'Lifestyle & Concierge': ['Luxury lifestyle services: a growing niche for private clients', 'Service models serving the region\u2019s high-net-worth households.'],
    },
    'Industrial & Manufacturing': {
      _: ['The industrial supercycle \u2014 UAE logistics and manufacturing', 'Policy, trade and capital converging on the country\u2019s industrial base.'],
      'Industrial & Special Assets': ['Grade-A logistics: why institutions are building positions', 'Yields, take-up and the development pipeline across industrial zones.'],
      'Materials & Production': ['Local production: the economics of onshoring materials', 'Where domestic manufacturing is becoming commercially compelling.'],
      'Supply Chain & Operations': ['Resilient supply chains: lessons from a volatile decade', 'Dual sourcing, inventory buffers and regional hubs in practice.'],
      'Engineering & Automation': ['Automating the warehouse and the factory floor', 'Where robotics and AI are paying back fastest in the Gulf.'],
      'Packaging & Materials': ['Sustainable packaging: regulation meets consumer demand', 'How producers are redesigning materials and logistics.'],
      'Food & Life Sciences': ['Food security and life sciences: a national priority, an investable theme', 'Capital flowing into agritech, processing and healthcare supply.'],
    },
  },

  // ------------------------------------------------------------------ EXPERTISE
  expertise: {
    'Agency & Brokerage': {
      _: ['Modern brokerage: from listings to institutional advisory', 'How leading agencies are professionalising origination, structuring and closing.'],
      'Lead Intelligence': ['Qualifying leads before the first call', 'Data-driven scoring that focuses brokers on buyers who transact.'],
      'Client Origination': ['Origination that compounds: referrals, partnerships, repeat clients', 'Building a pipeline that does not depend on portals.'],
      'Mandate Structuring': ['Exclusive or open: structuring mandates that protect both sides', 'Terms, fees and exclusivity in the current market.'],
      'Buyer Qualification': ['Proof of funds and intent: qualifying serious buyers', 'Screening steps that save time for sellers and agents.'],
      'Listing Management': ['Listings that convert: pricing, presentation and compliance', 'Managing the full life of a listing from launch to close.'],
      'Closing Procedures': ['From offer to transfer: the closing checklist', 'Every step, document and deadline between agreement and keys.'],
    },
    'Primary & Off-Plan': {
      _: ['Off-plan in Dubai: protecting buyers and developers alike', 'Escrow, regulation and sales practice in the primary market.'],
      'Developer Alignment': ['Aligning agency and developer incentives on a launch', 'Commission structures and exclusivity that keep both sides motivated.'],
      'Project Positioning': ['Positioning a new project: story, price and audience', 'Turning a master plan into a proposition buyers recognise.'],
      'Sales Architecture': ['Designing the sales machine for a launch', 'Teams, channels and reporting for high-volume primary sales.'],
      'Off-Plan Compliance': ['Off-plan compliance: the rules every seller must follow', 'Registration, escrow and disclosure obligations in plain language.'],
      'Investor Conversion': ['Converting overseas investors: trust, clarity, speed', 'What moves international buyers from interest to reservation.'],
      'Payment Structuring': ['Payment plans that work for buyers and developers', 'Balancing affordability, cash flow and default risk.'],
    },
    'Secondary & Resale': {
      _: ['The resale market: liquidity, pricing and timing', 'How secondary transactions are performing across Dubai communities.'],
      'Market Appraisals': ['Appraisals that sellers trust and buyers accept', 'Comparable selection, adjustments and pricing discipline.'],
      'Seller Acquisition': ['Winning seller instructions in a competitive market', 'Positioning, proof and process that earn the listing.'],
      'Property Positioning': ['Positioning a resale property to stand out', 'Staging, photography and narrative for faster sales.'],
      'Viewing Management': ['Viewings that convert: preparation and follow-up', 'Scheduling, briefing and feedback loops for stronger outcomes.'],
      'Resale Negotiation': ['Negotiating resale: anchors, concessions and walk-aways', 'Tactics for protecting price while keeping deals alive.'],
      'Transfer Procedures': ['Transfer day: documents, fees and timelines', 'What buyers and sellers need ready for a smooth title transfer.'],
    },
    'Commercial & Retail': {
      _: ['Commercial property: office, retail and the occupier shift', 'Where tenant demand is moving and what landlords should do about it.'],
      'Commercial Leasing': ['Office leasing in a tight Grade-A market', 'Terms, incentives and flexibility sought by today\u2019s occupiers.'],
      'Retail Acquisition': ['Buying retail: footfall, tenancy and income security', 'Underwriting retail assets beyond headline yield.'],
      'Tenant Relations': ['Tenant relations as a retention strategy', 'Service practices that keep quality occupiers for longer.'],
      'Asset Positioning': ['Repositioning a commercial asset for the next tenant', 'Refurbishment, branding and mix decisions that lift value.'],
      'Investment Analysis': ['Underwriting commercial investments: the numbers that matter', 'Cash-flow, risk and exit assumptions in a single framework.'],
      'Corporate Transactions': ['Corporate real estate: sale-and-leaseback and beyond', 'How companies are using property to fund growth.'],
    },
    'Leasing & Lettings': {
      _: ['The rental market: supply, rents and tenant expectations', 'What a contracting private rented sector means for landlords.'],
      'Landlord Acquisition': ['Winning landlords: proving the value of professional lettings', 'Pitch, pricing and proof that convert owners.'],
      'Tenant Qualification': ['Tenant screening: reducing risk before the lease', 'Verification steps that cut arrears and disputes.'],
      'Leasing Negotiation': ['Negotiating leases: rent, term and break clauses', 'Balancing landlord yield with tenant retention.'],
      'Property Marketing': ['Marketing a rental that lets quickly', 'Listing quality, pricing and channels that shorten void periods.'],
      'Tenancy Administration': ['Tenancy administration: contracts, Ejari and renewals', 'The paperwork that keeps a tenancy compliant.'],
      'Renewal Management': ['Renewals: keeping good tenants at fair rent', 'Timing and communication that raise renewal rates.'],
    },
    'Holiday Homes': {
      _: ['Holiday homes in Dubai: the economics of short-stay', 'Occupancy, rates and regulation for owners and operators.'],
      'Tenant Management': ['Managing guests as tenants: expectations and rules', 'Setting standards that protect the property and the review score.'],
      'Maintenance Operations': ['Maintenance that never interrupts a booking', 'Scheduling and vendor models for high-turnover homes.'],
      'Service Coordination': ['Coordinating cleaning, linen and check-in at scale', 'Operating models for consistent guest experience.'],
      'Financial Reporting': ['Owner reporting: transparency that builds trust', 'Statements and metrics owners actually want to see.'],
      'Lease Administration': ['Holiday-home permits and lease administration', 'Keeping licences, leases and registrations in order.'],
      'Compliance Procedures': ['Compliance for short-term rentals: a practical guide', 'Regulatory duties and the processes that satisfy them.'],
    },
    'Property Management': {
      _: ['Property management as an institutional discipline', 'Service standards and technology raising performance across portfolios.'],
      'Short-Term Leasing': ['Short-term leasing within managed portfolios', 'When flexible stays lift returns, and when they do not.'],
      'Guest Management': ['Guest management: the hospitality lens on property', 'Communications and service that drive repeat bookings.'],
      'Occupancy Architecture': ['Designing for occupancy: mix, pricing and seasonality', 'Balancing short and long stays across the year.'],
      'Revenue Optimisation': ['Revenue management for residential portfolios', 'Dynamic pricing methods that lift income without hurting occupancy.'],
      'Platform Integration': ['Integrating booking platforms and property systems', 'Connecting channels, payments and operations into one view.'],
      'Hospitality Standards': ['Hospitality standards for residential operators', 'Setting and auditing the service bar across properties.'],
    },
    'Property Developers': {
      _: ['Developer playbook: from land to launch', 'Planning, partners and pricing for successful Dubai schemes.'],
      'Project Origination': ['Originating projects: land, partners and feasibility', 'Screening sites and structuring deals before commitment.'],
      'Project Positioning': ['Positioning a scheme against a crowded launch calendar', 'Differentiating on product, location and brand.'],
      'Market Deployment': ['Deploying a project to market: sequencing and channels', 'Phasing releases to match demand and cash flow.'],
      'Launch Coordination': ['Launch day: coordinating teams, partners and press', 'The run-sheet behind a high-demand launch.'],
      'Channel Distribution': ['Distribution: brokers, direct and international partners', 'Choosing the mix that maximises reach and margin.'],
      'Transaction Closure': ['Closing the sale: contracts, payments and handover', 'Making the final steps seamless for buyers.'],
    },
    'Construction Firms': {
      _: ['Construction firms: winning work in a record pipeline', 'Business development and delivery discipline for contractors.'],
      'Project Origination': ['Finding the next contract: tender pipelines and relationships', 'Building a visible, qualified pipeline of opportunities.'],
      'Project Positioning': ['Positioning a contractor for premium clients', 'Track record, safety and delivery as differentiators.'],
      'Market Deployment': ['Taking a construction offer to new emirates', 'Entering new markets with the right partners and licences.'],
      'Launch Coordination': ['Mobilisation: coordinating start-up on site', 'Planning labour, materials and approvals for day one.'],
      'Channel Distribution': ['Working with developers, consultants and main contractors', 'Routes to market for specialist and subcontract firms.'],
      'Transaction Closure': ['Contract close-out: payments, claims and handover', 'Protecting margin through the final stages of a project.'],
    },
    'Real Estate Academy': {
      _: ['Real Estate Academy: raising the standard of the profession', 'Structured learning for brokers, managers and institutions.'],
      'Enterprise Learning Institute': ['Enterprise learning: academies built for your organisation', 'Custom programmes aligned to your strategy and culture.'],
      'Broker Development': ['Broker development: from licence to top producer', 'Skills, coaching and habits of the best performers.'],
      'Institutional Training': ['Institutional training for investment and asset teams', 'Technical programmes on underwriting, structuring and reporting.'],
    },
  },

  // ------------------------------------------------------------------ OVERVIEW
  overview: {
    'About NK&CO': {
      _: ['Building institutions that last \u2014 the NK&CO story', 'Who we are, what we believe and how we advise.'],
      'Our Story': ['Our story: from a small advisory to a regional firm', 'The decisions and people that shaped NK&CO.'],
      Leadership: ['Meet the partners leading the firm', 'Backgrounds, specialisms and the clients they serve.'],
      Governance: ['How we govern: independence, ethics and quality', 'The standards that guide every engagement.'],
    },
    'How We Work': {
      _: ['Partner-led, outcome-focused: how we work with clients', 'Senior attention on every engagement from start to finish.'],
      'Client Engagement': ['How an engagement begins, runs and ends', 'Scoping, cadence and reporting from first call to final review.'],
      'Our Methodology': ['Our methodology: evidence first, decisions second', 'The frameworks we use to move from analysis to action.'],
      'Partnership Model': ['Our partnership model: aligned incentives, long horizons', 'Why we prefer long-term relationships to one-off projects.'],
    },
    Careers: {
      _: ['Join a firm building the next generation of advisory', 'Roles, development and the culture behind them.', null, 'Explore careers'],
      'Experienced Hires': ['For experienced professionals: roles and pathways', 'Where your expertise can lead at NK&CO.', null, 'See open roles'],
      'Graduate Programme': ['The graduate programme: learn by doing from day one', 'Rotations, mentoring and early responsibility.', null, 'Apply now'],
      'Life at NK&CO': ['Life at NK&CO: the people, the work, the Dubai lifestyle', 'A look inside our offices and teams.', null, 'Meet the team'],
    },
    Newsroom: {
      _: ['NK&CO advises on landmark hospitality transaction in Dubai', 'The latest announcements and coverage of the firm.', null, 'Read the story'],
      'Press Releases': ['Latest press releases', 'Firm news, transactions, appointments and awards.', null, 'Read the release'],
      'In the News': ['NK&CO in the news', 'Where our people and views appear in global and regional media.', null, 'See coverage'],
      'Awards & Recognition': ['Awards and recognition', 'Industry honours for advisory, workplace and innovation.', null, 'See awards'],
    },
  },
};

// Image rotation (deliberately excludes `marina` so the Series III card stays unique)
const POOL = ['curve', 'tower', 'office', 'glass', 'bay', 'meetingroom', 'build', 'villa', 'lobby', 'dubai2', 'construction', 'meeting', 'hero', 'palm', 'exec2', 'build2', 'dubai1', 'exec1', 'exec3'];

const INDEX = {};
export const FEATURED_SLOTS = []; // every card that needs its own photo: { key, title } (used by scripts/fetch-photos.mjs)
let n = 0;
const nextImg = () => IMG[POOL[n++ % POOL.length]];

// There are fewer photos than cards, so every card also gets its own crop, zoom and
// colour grade. Same photo + different framing/tint = no two cards look alike.
// Golden-ratio sequences spread the values evenly, so neighbouring cards always differ.
const PHI = 0.6180339887;
const HUES = [212, 196, 226, 178, 38, 248, 204, 160]; // navy, cyan, indigo, teal, gold, violet, steel, green
let a = 0;
const nextArt = () => {
  const i = a++;
  const f = (k) => ((i + 1) * PHI * k) % 1;
  return {
    x: Math.round(8 + f(1) * 84),          // object-position X %
    y: Math.round(10 + f(1.7) * 80),       // object-position Y %
    zoom: +(1.04 + f(2.3) * 0.5).toFixed(2), // 1.04 – 1.54
    hue: HUES[(i * 3) % HUES.length],      // overlay tint
    tint: +(0.14 + f(3.1) * 0.2).toFixed(2), // overlay strength
    flip: f(4.3) > 0.5,                    // mirror the photo on every other card or so
  };
};

Object.entries(CONTENT).forEach(([section, cats]) => {
  const style = SECTION_STYLE[section] || { tag: 'Featured', cta: 'Read more' };
  Object.entries(cats).forEach(([cat, entries]) => {
    Object.entries(entries).forEach(([label, v]) => {
      if (label.startsWith('_') && label !== '_') return;
      const [title, description, imgKey, cta, href] = v;
      const isCat = label === '_';
      const fkey = ['feat', section, cat, isCat ? '' : label].join('|');
      if (!imgKey) FEATURED_SLOTS.push({ key: fkey, title });
      INDEX[[section, cat, isCat ? '' : label].join('|')] = {
        tag: style.tag,
        title,
        description,
        ctaLabel: cta || style.cta,
        ctaHref: href || (isCat ? leaf(section, cat) : leaf(section, cat, label)),
        // hand-picked images (imgKey) keep their original photo; every other card gets a photo or topic plate matched to its own title
        image: imgKey ? IMG[imgKey] : featuredPhoto(fkey).src,
        art: null,
      };
    });
  });
});

export function getFeatured(section, category, item) {
  return INDEX[[section, category, item || ''].join('|')] || null;
}
