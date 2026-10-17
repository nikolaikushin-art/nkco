// NK&CO Privileges: members' access, podcasts and instructional material.
// ONE file drives the whole section: the main menu, the side panel, every page, the SEO metadata, the pictures and the featured cards.
//
// Shape:  category -> item (a series, course, library, toolkit or programme) -> piece (an episode, lesson, guide, video, tool or session).
//   category: { title, format, noun, description, viewAll, motif, items }
//   item:     { label, blurb, lead, who, motif, pieces }
//   piece:    [title, description, [three points], minutes, motif]
//   motif:    a drawing name from src/lib/topicPlate.js. Each page also gets its own accent colour, so no two pages look alike.
//
// `format` decides how a piece page looks and what its action button says:
//   podcast (audio player) | course (video lesson + notes) | guide (document, read or request) | video (video player) | tool (template, checklist or calculator)
//   access (a members' session or service: the page asks for an invitation, nothing plays)
//
// MEDIA: when a real file exists, add it to MEDIA at the bottom, keyed by the page path. Without an entry the page shows
// the poster and an email request, so nothing pretends to play. Everything written here is draft editorial copy: replace freely.

import { PRIV_MENU_LINES } from './privilegesMenuLines';
import { PRIV_MORE_ITEMS, PRIV_NEW_CATEGORIES, PRIV_MORE_LINES } from './privilegesMore';
import { PRIV_INST_ITEMS, PRIV_INST_RESEARCH, PRIV_INST_ACCESS } from './privilegesInstitutional';

export const PRIV = {
  key: 'privileges',
  title: 'Privileges',
  description:
    'Members’ sessions and priority access, plus podcasts, masterclasses, guides, videos, working tools, research, meetings and programmes from NK&CO partners: practical learning and access across banking, technology, energy, hospitality, retail, healthcare, education, construction, real assets and Gulf capital.',
  exploreLabel: 'Explore all Privileges',
  categories: [
    // ------------------------------------------------------------------ PODCASTS
    {
      title: 'Podcasts',
      format: 'podcast',
      noun: 'episode',
      motif: 'mic',
      description: 'Eight audio series from NK&CO partners and their guests on the city, its capital, its sectors, its real assets, its families and the operators who run businesses day to day.',
      viewAll: 'Enter the NK&CO Briefing',
      items: [
        {
          label: 'Dubai Briefing Episodes',
          motif: 'mic',
          blurb: 'The state of the city: policy, capital and the built environment.',
          lead: 'A fortnightly look at what is changing in Dubai, from planning decisions and new districts to the rules that shape how business is done.',
          who: 'Owners, operators and investors who want the city explained, not just reported.',
          pieces: [
            ['Dubai 2040 in Motion', 'How the long-term plan is landing on the ground: districts, transport and housing, and what it means for those building or buying now.', ['Which districts are moving first', 'How transport links change land value', 'What the plan means for housing supply'], 46, 'map'],
            ['AI in the Enterprise', 'Where UAE institutions are moving from experiments to everyday use of AI, and what separates the pilots that stick from the ones that stall.', ['Four tasks AI already does well', 'Why data quality decides the outcome', 'How to govern it without slowing down'], 37, 'network'],
            ['Rules That Changed This Year', 'A plain-English review of the regulatory changes that matter to owners and operators, and the dates to watch.', ['Changes that affect companies and landlords', 'What to do before a deadline passes', 'Where to check for official updates'], 33, 'scales'],
            ['The Cost of Doing Business', 'What it really costs to run a company in Dubai once rent, licences, staff and tax are counted, with ways to plan for it.', ['The cost lines founders forget', 'Free zone and mainland compared', 'How to budget for the second year'], 29, 'coins'],
            ['Where the Next Wave of Business Is Settling', 'A look at which kinds of company are choosing Dubai and what they need from the city: space, talent, licences and connections.', ['Company types arriving', 'What they ask for first', 'What the city needs to provide'], 36, 'org'],
            ['Living and Working in Dubai: What Employers Should Know', 'Practical points on visas, contracts, housing and cost of living that shape whether people stay.', ['Visas and contracts', 'Housing and cost of living', 'Keeping people for the long term'], 31, 'people'],
            ['Free Zones Explained', 'How the free zones differ from the mainland and from one another, and how to choose without paying for what you do not need.', ['What a free zone offers', 'Where the limits sit', 'Choosing between them'], 30, 'puzzle'],
            ['Reading the Project Pipeline', 'How to follow new projects across the city: what to track, where delays appear and how to tell an announcement from delivery.', ['What to track', 'Where delays appear', 'Announcement versus delivery'], 34, 'timeline'],
          ],
        },
        {
          label: 'Capital Conversations Episodes',
          motif: 'mic2',
          blurb: 'Allocators, lenders and investors on where capital is moving.',
          lead: 'Long-form conversations about money: who is lending, who is buying, how deals are structured and what institutions are watching.',
          who: 'Investors, lenders, advisers and anyone raising or deploying capital in the Gulf.',
          pieces: [
            ['DIFC at Twenty', 'The financial centre’s next chapter: how it has matured, what it offers firms today and where it is heading.', ['What twenty years changed', 'Who is choosing DIFC and why', 'Where the centre goes next'], 38, 'bank'],
            ['The Private Credit Turn', 'Why lenders outside the banks are taking a bigger role in Gulf financing, and how borrowers should approach them.', ['How private credit differs from a bank loan', 'What lenders ask for first', 'Pricing, terms and pitfalls'], 41, 'vault'],
            ['Sovereign Capital and Where It Goes', 'How state-backed investors choose where to place money, and what that means for markets and for smaller players beside them.', ['How sovereign mandates are set', 'Why co-investment is growing', 'Signals smaller investors can follow'], 39, 'globe'],
            ['Raising Money for a Mid-Sized Company', 'A practical conversation on the routes open to a growing company: equity, debt, listings and private placements.', ['Choosing between debt and equity', 'Preparing the information lenders need', 'Timelines from first call to funds'], 35, 'funnel'],
            ['Sukuk: The Investor’s Question List', 'What investors ask before they buy a sukuk, and what issuers should be ready to answer.', ['Structure and underlying assets', 'Questions on pricing', 'What issuers should prepare'], 34, 'seal'],
            ['Listing Locally or Abroad', 'The trade-offs for a company deciding where to list, from cost and investor base to disclosure and timing.', ['Investor base and liquidity', 'Cost and disclosure', 'Timing the decision'], 37, 'bars'],
            ['How Family Capital Co-Invests', 'How family offices join deals alongside institutions, what they look for and how sponsors should approach them.', ['What families look for', 'How to approach them', 'Terms and alignment'], 36, 'handshake'],
            ['Reading a Credit Agreement', 'The clauses borrowers and lenders spend most time on, explained in plain language.', ['Covenants', 'Security and guarantees', 'What to negotiate'], 33, 'document'],
          ],
        },
        {
          label: 'Real Assets Room Episodes',
          motif: 'tower',
          blurb: 'Property, infrastructure and logistics: the market from the inside.',
          lead: 'Specialists in offices, industrial space, hotels and residential talk through the cycle: rents, supply, yields and what is next.',
          who: 'Landlords, developers, occupiers and investors in property and infrastructure.',
          pieces: [
            ['Grade-A Office and the New Occupier Map', 'Where companies are moving, what they are paying and what that means for landlords through the second half of the year.', ['Where take-up is strongest', 'How leases are being structured', 'What tenants now expect from a building'], 35, 'tower'],
            ['The Industrial Supercycle', 'Warehousing, cold storage and manufacturing space across the Emirates: demand, supply and where returns are found.', ['What is driving demand for space', 'Why specification matters', 'How investors underwrite industrial assets'], 44, 'warehouse'],
            ['The Hotel Cycle', 'Keys, rates and the pipeline: where hospitality investors are placing money and where they are cautious.', ['Reading occupancy and average rates', 'How new supply changes the picture', 'Operator and owner terms'], 43, 'hotel'],
            ['Residential Supply and What Buyers Do Next', 'How new completions, payment plans and rents interact, and how buyers and landlords can plan around them.', ['How to read the supply pipeline', 'Why handover timing moves prices', 'What landlords do when rents flatten'], 36, 'house'],
            ['Retail Space After the Shift Online', 'How owners and tenants are rethinking shop space, and what that means for leases, layouts and rents.', ['Leases and layouts', 'What tenants ask for', 'Owner strategies'], 34, 'store'],
            ['Build-to-Rent and the Institutional Landlord', 'Why institutions look at purpose-built rental housing, and how it differs from buying single units.', ['How it differs from single units', 'Operating model', 'What investors check'], 35, 'house'],
          ],
        },
        {
          label: 'Founders & Family Offices Episodes',
          motif: 'people',
          blurb: 'How principals build, govern and pass on what they own.',
          lead: 'Founders, family heads and the advisers who work with them on governance, succession, investing and the habits that keep wealth together.',
          who: 'Business owners, family principals and the next generation preparing to lead.',
          pieces: [
            ['The Quiet Reinvention of the Family Office', 'How a new generation is professionalising governance, investing and giving, and what older families can learn from it.', ['What a modern family office does', 'Governance that survives disagreement', 'Bringing the next generation in'], 52, 'people'],
            ['Handing Over the Business', 'Succession without drama: choosing a successor, setting the timeline and keeping the family and the company apart.', ['Starting the conversation early', 'Family and non-family leaders', 'Documents that make a handover stick'], 47, 'repeat'],
            ['Building a Portfolio Beyond Property', 'How families in the region are spreading holdings across assets, with the questions to ask before each new allocation.', ['Setting a mandate and limits', 'Private markets in plain terms', 'Reviewing what you already hold'], 40, 'pie'],
            ['Giving With Purpose', 'How families set up giving that lasts: structures, priorities and how to measure whether it works.', ['Choosing causes and a structure', 'Involving younger family members', 'Keeping records and reporting'], 34, 'heart'],
            ['Choosing Advisers for the Family', 'How families pick and manage lawyers, bankers and investment advisers, and how to keep their roles clear.', ['Roles and boundaries', 'Selecting and reviewing advisers', 'Managing conflicts'], 32, 'people'],
            ['Keeping the Next Generation Engaged', 'Ways families prepare younger members to take part, from learning the business to joining the investment discussion.', ['Learning the business', 'Joining decisions', 'Setting expectations'], 34, 'ladder'],
          ],
        },
        {
          label: 'Sector Desk Episodes',
          motif: 'bulb',
          blurb: 'Banking, insurance, technology and energy: one sector at a time.',
          lead: 'Short conversations with sector specialists on what is changing in banking, insurance, technology and energy, and what operators and investors should do about it.',
          who: 'Executives, investors and advisers who work across more than one sector.',
          pieces: [
            ['Banking After the Rate Cycle', 'How Gulf banks are adjusting lending, deposits and digital services as the rate cycle turns, and what it means for borrowers.', ['Where margins are moving', 'Lending priorities for the next year', 'What corporate clients should ask their bank'], 31, 'bank'],
            ['Insurance and the Price of Risk', 'How insurers and reinsurers are pricing risk in the region, and how buyers can prepare for their next renewal.', ['What drives premiums', 'Preparing for a renewal', 'Gaps buyers often find too late'], 29, 'shield'],
            ['Energy Transition in Practice', 'Where energy and clean-power projects are moving from announcement to contract, and who is financing them.', ['Projects that reach contract', 'How they are financed', 'Roles for private capital'], 33, 'leaf'],
            ['Technology Beyond the Pilot', 'How regional companies take cybersecurity, cloud and data work past the first project, and what holds them back.', ['Why pilots stall', 'Security and data basics', 'Building the team that runs it'], 30, 'network'],
            ['Hospitality and Tourism: Reading the Demand Signals', 'What operators and investors watch to judge hotel and leisure demand, and how to separate a strong season from a lasting trend.', ['Signals worth watching', 'Season versus trend', 'What it means for owners'], 30, 'hotel'],
            ['Retail and Consumer: What Shoppers Are Telling Us', 'How retailers read changing customer habits across stores and online, and how they adjust range and space.', ['Reading customer habits', 'Adjusting range and space', 'Online and in-store'], 29, 'store'],
            ['Healthcare: Where Providers Are Expanding', 'How clinics, hospitals and specialist centres decide where to open next, and what investors ask before they back them.', ['Choosing where to open', 'Staffing the new site', 'What investors ask'], 32, 'cross'],
            ['Construction: Reading the Pipeline', 'How contractors and developers judge the pipeline of work, and what rising or falling activity means for cost and delivery.', ['Reading the pipeline', 'Cost and capacity', 'Delivery risk'], 31, 'crane'],
          ],
        },
        {
          label: 'Operators Desk Episodes',
          motif: 'gears',
          blurb: 'Hotels, shops, clinics, schools and building sites, run from the inside.',
          lead: 'Conversations about the daily work of running a business in hospitality, retail, healthcare, education and construction: staffing, service, cost and the decisions that only operators face.',
          who: 'Owners, general managers and operating partners who run sites, teams and budgets rather than portfolios.',
          pieces: [
            ['Running a Hotel Through the Seasons', 'How operators plan staffing, pricing and maintenance as demand rises and falls across the year, and what owners should expect to see in the monthly numbers.', ['Planning around busy and quiet months', 'Staffing without losing service', 'What owners should ask for in reports'], 34, 'hotel'],
            ['The Store That Keeps Customers Coming Back', 'What retail operators do in the shop and online to turn a first visit into a habit, from range and layout to service and stock.', ['Range and layout decisions', 'Stock that matches demand', 'Service that earns a second visit'], 32, 'store'],
            ['Clinic Operations: Capacity, Staffing and Trust', 'How clinic and hospital operators balance appointments, clinical staffing and patient experience, and where the bottlenecks usually sit.', ['Matching appointments to capacity', 'Recruiting and keeping clinical staff', 'Building patient trust'], 36, 'cross'],
            ['Running a School Well', 'What school operators weigh each year: enrolment, teaching staff, facilities and fees, and how they keep standards steady as a school grows.', ['Enrolment and fee planning', 'Hiring and developing teachers', 'Keeping standards as you grow'], 33, 'cap'],
            ['Delivering on Site: The Contractor’s View', 'How contractors manage programme, cost and subcontractors on live projects, and what clients can do to keep a build on track.', ['Programme and cost control', 'Managing subcontractors', 'What clients can do to help'], 35, 'crane'],
            ['Hiring and Keeping Frontline Teams', 'How hotels, shops, clinics and schools recruit, train and keep the people who deal with customers every day.', ['Recruiting for attitude and skill', 'Training that sticks', 'Reasons people stay'], 33, 'people'],
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ MASTERCLASSES
    {
      title: 'Masterclasses',
      format: 'course',
      noun: 'lesson',
      motif: 'cap',
      description: 'Structured video courses with notes and exercises, from property and capital to banking, technology, energy, hospitality, retail, healthcare, education and construction, taught by NK&CO partners and built to be taken at your own pace.',
      viewAll: 'Browse all Masterclasses',
      items: [
        {
          label: 'Dubai Real Estate Foundations',
          motif: 'cap',
          blurb: 'Eight lessons on how the market works, from first principles.',
          lead: 'A grounded course for buyers, new brokers and investors: how property is owned, sold, financed and valued in Dubai, with worked examples.',
          who: 'First-time buyers, new agents and investors entering the market.',
          pieces: [
            ['How the Dubai Market Works', 'The players, the rules and the cycle: who sells, who regulates, how prices form and why the market behaves as it does.', ['Who does what in a transaction', 'The role of the regulator and registry', 'Reading a market cycle'], 14, 'gears'],
            ['Title, Registration and Ownership', 'What you actually own, how it is recorded and the documents to check before you commit any money.', ['Freehold and other ownership types', 'Reading a title record', 'Documents to request from a seller'], 12, 'key'],
            ['Off-Plan Payment Plans', 'How payment plans work, what escrow protects and how to test a plan before you sign.', ['Plan structures compared', 'How escrow protects a buyer', 'Questions to ask a developer'], 15, 'calendar'],
            ['Yield, Valuation and Price', 'How to judge whether a property is fairly priced and what return it can deliver, with a worked example.', ['Gross and net yield', 'Comparing like for like', 'Valuation reports in plain terms'], 16, 'growth'],
            ['Selling, Renting and Exiting', 'Planning the way out before you buy: resale routes, letting options and the costs of each.', ['Costs of selling', 'Letting for income', 'Choosing the right moment'], 13, 'tag'],
            ['Service Charges and Running Costs', 'What owners pay each year beyond the price, how service charges are set and how to read the bill.', ['What the charge covers', 'How it is set and reviewed', 'Questions to ask the manager'], 14, 'coins'],
            ['Financing a Purchase', 'The main ways to pay for a property, how lenders assess a buyer and what to prepare before applying.', ['Ways to pay', 'How lenders assess you', 'Preparing the application'], 15, 'bank'],
            ['Managing a Property as a Landlord', 'Finding tenants, writing a lease, handling maintenance and keeping the paperwork in order.', ['Finding and vetting tenants', 'Leases and renewals', 'Maintenance and records'], 14, 'key'],
          ],
        },
        {
          label: 'Setting Up in the UAE',
          motif: 'briefcase',
          blurb: 'Six lessons for founders on structure, licences, banking, tax and running the company.',
          lead: 'A step-by-step course for anyone starting or moving a company to the UAE, covering the choices that are hard to reverse and the order to take them in.',
          who: 'Founders, executives relocating a business and advisers supporting them.',
          pieces: [
            ['Choosing Your Jurisdiction', 'Free zone, mainland or financial centre: how to choose, and the trade-offs that decide it.', ['Three jurisdictions compared', 'What each allows you to trade', 'Switching later and what it costs'], 15, 'compass'],
            ['Licences in Practice', 'How licensing works: activities, approvals, timelines and the mistakes that cause delays.', ['Matching activity to licence', 'Approvals that take longest', 'A realistic timeline'], 13, 'checklist'],
            ['Banking and Escrow', 'Opening accounts, passing checks and keeping the relationship healthy after the first month.', ['What banks ask for', 'Why applications are declined', 'Running accounts day to day'], 12, 'shield'],
            ['Corporate Tax and VAT Basics', 'What a new company needs to register, file and keep, set out for people who are not accountants.', ['Registration and deadlines', 'Records that matter', 'When to bring in an adviser'], 17, 'document'],
            ['Hiring, Visas and Contracts', 'Hiring your first team: visas, contracts, end-of-service rules and the habits that keep staff.', ['Visa steps in order', 'What a contract must contain', 'End-of-service obligations'], 14, 'briefcase'],
            ['Running the Company Day to Day', 'Bookkeeping, renewals and annual filings: the routine tasks that keep a new company in good standing.', ['Bookkeeping basics', 'Renewals and filings', 'A simple calendar'], 14, 'calendar'],
          ],
        },
        {
          label: 'Capital and Investing',
          motif: 'bank',
          blurb: 'Four lessons on deals, lending, sukuk and portfolios.',
          lead: 'A practical introduction to how capital is raised and deployed in the Gulf, taught with real structures and plain language.',
          who: 'Investors, finance teams and founders preparing to raise or place money.',
          pieces: [
            ['Reading a Term Sheet', 'Line by line through a typical term sheet: what each clause does and where the real negotiation lies.', ['Valuation and dilution', 'Rights that matter most', 'Clauses to push back on'], 18, 'pen'],
            ['Private Credit Explained', 'How direct lending works, who it suits and how it compares with a bank facility.', ['Structures and pricing', 'Security and covenants', 'A borrower’s checklist'], 16, 'swap'],
            ['Sukuk and Islamic Structures', 'How sukuk and other Islamic structures are built, what they are backed by and how investors compare them with bonds.', ['Asset-backed and asset-based', 'Roles of each party', 'Reading an offering circular'], 17, 'star'],
            ['Building a Portfolio', 'How to set an allocation, choose managers and review what you hold at least once a year.', ['Setting a mandate', 'Balancing income and growth', 'An annual review routine'], 15, 'bars'],
          ],
        },
        {
          label: 'Leadership and Governance',
          motif: 'org',
          blurb: 'Six lessons for directors, owners and senior teams.',
          lead: 'Short, direct lessons on running a board, setting decision rights and keeping a growing company in control.',
          who: 'Directors, owners and executives responsible for how a company is run.',
          pieces: [
            ['Running an Effective Board', 'How to build the agenda, the papers and the habits that make a board useful instead of ceremonial.', ['A yearly board calendar', 'Papers that get read', 'Handling a disagreement'], 14, 'org'],
            ['Decision Rights and Delegation', 'Who decides what, written down: a method for clearing bottlenecks without losing control.', ['A decision rights table', 'Limits and escalation', 'Reviewing it every year'], 12, 'target'],
            ['Managing Risk in a Growing Company', 'A working risk register, built from the ground up, with owners and review dates.', ['Listing risks that matter', 'Scoring and ranking them', 'Making someone accountable'], 13, 'gauge'],
            ['Preparing for Investors and Auditors', 'What to have in order before due diligence begins, so that questions are answered in days, not weeks.', ['The standard request list', 'Keeping a data room', 'Common findings and fixes'], 16, 'search'],
            ['Setting Strategy and Tracking It', 'How a leadership team agrees a few priorities, gives each an owner and checks progress without drowning in reports.', ['Choosing a few priorities', 'Owners and milestones', 'Reviewing progress'], 14, 'target'],
            ['Running Meetings and Making Decisions', 'Agendas, papers and minutes that help a group decide, and the habits that make meetings shorter.', ['Agendas and papers', 'Reaching a decision', 'Minutes and follow-up'], 14, 'people'],
          ],
        },
        {
          label: 'Banking, Insurance and Risk',
          motif: 'shield',
          blurb: 'Four lessons on how banks and insurers decide, and how to prepare.',
          lead: 'A grounded course on how banks and insurers make decisions, so that borrowers, buyers and managers can prepare better and negotiate with confidence.',
          who: 'Finance leaders, founders and risk officers who deal with banks and insurers.',
          pieces: [
            ['How a Bank Reads Your Business', 'What credit teams look for in a corporate borrower, and how to present accounts, forecasts and security so a facility is approved.', ['What credit teams test first', 'Preparing a lending pack', 'Negotiating terms and covenants'], 15, 'bank'],
            ['Islamic Banking and Takaful Compared', 'How Islamic banking and takaful differ from conventional products, and when each one fits.', ['Contract types explained', 'Takaful compared with insurance', 'Choosing between them'], 16, 'seal'],
            ['Insurance Programmes for Growing Companies', 'Which covers a growing company needs first, how to buy them and how to handle a claim.', ['Covers in order of priority', 'Working with a broker', 'Making a claim succeed'], 14, 'shield'],
            ['Risk, Compliance and Controls', 'A practical frame for managing financial crime, conduct and operational risk in a regulated business.', ['Three lines of defence', 'Policies people actually use', 'Reporting to the board'], 15, 'lock'],
          ],
        },
        {
          label: 'Technology and AI for Leaders',
          motif: 'network',
          blurb: 'Six lessons on AI, data, cyber risk and technology projects for non-technical leaders.',
          lead: 'Plain-language lessons on where technology and AI pay off, what to get in place first and how to keep the risks in view.',
          who: 'Executives, directors and managers who commission or oversee technology.',
          pieces: [
            ['AI Strategy Without the Hype', 'Choosing where AI is worth using in a company, how to test it cheaply and how to govern it.', ['Finding use cases that pay', 'A low-cost test plan', 'Rules for responsible use'], 15, 'bulb'],
            ['Data Foundations', 'Why most AI and reporting efforts depend on clean, owned data, and how to improve yours in stages.', ['Who owns which data', 'Quality and access', 'A first-year data plan'], 13, 'gears'],
            ['Cybersecurity for the Board', 'The questions directors should ask about cyber risk, and the controls that matter most.', ['Reading a security report', 'Controls that matter first', 'Planning for an incident'], 14, 'lock'],
            ['Buying and Running Technology', 'How to select a supplier, write a brief, manage a rollout and measure whether the system delivers.', ['Writing a clear brief', 'Comparing suppliers fairly', 'Measuring adoption and benefit'], 14, 'screen'],
            ['Choosing Where to Use AI First', 'A simple way to rank possible uses of AI by value, effort and risk, so the first project is one that can succeed.', ['Listing possible uses', 'Scoring value, effort and risk', 'Picking a first project'], 15, 'funnel'],
            ['Managing Technology Projects and Vendors', 'How to scope a project, pick a supplier and keep delivery on track, with the questions worth asking early.', ['Scoping the work', 'Choosing a supplier', 'Keeping delivery on track'], 15, 'gears'],
          ],
        },
        {
          label: 'Energy, Mobility and Sustainability',
          motif: 'leaf',
          blurb: 'Four lessons on energy, transport and sustainable business.',
          lead: 'A practical introduction to how energy, transport and sustainability decisions are made and financed, taught with plain examples.',
          who: 'Operators, investors and sustainability leads weighing energy, transport and reporting decisions.',
          pieces: [
            ['How the Energy Mix Is Changing', 'The main sources of power and fuel, how each is financed and where companies can take part.', ['Sources and their economics', 'Where private capital fits', 'Policy signals to watch'], 15, 'gauge'],
            ['Mobility and Logistics Basics', 'How goods and people move across the Emirates, from ports and free zones to fleets and last-mile delivery.', ['The logistics chain end to end', 'Fleet and electrification choices', 'Cost levers for operators'], 14, 'truck'],
            ['Measuring and Reporting Sustainability', 'What to measure, how to report it and how to avoid claims you cannot support.', ['Choosing a few metrics', 'Reporting formats', 'Avoiding unsupported claims'], 14, 'leaf'],
            ['Green Finance and Funding', 'Green bonds, sustainability-linked loans and grants: how they work and who qualifies.', ['Instruments compared', 'What lenders ask for', 'Reporting after funding'], 15, 'coins'],
          ],
        },
        {
          label: 'Hospitality and Retail Operations',
          motif: 'hotel',
          blurb: 'Eight lessons on running hotels, restaurants and shops.',
          lead: 'A practical introduction to how hospitality and retail businesses earn their income, set their standards and protect their margin, taught with plain examples.',
          who: 'Owners, new managers and investors who want to understand how guest-facing businesses really run.',
          pieces: [
            ['How a Hospitality Business Makes Money', 'Rooms, food and beverage and other income lines explained, with the main costs that sit against each.', ['Income lines and their costs', 'Owner and operator roles', 'Numbers worth watching every month'], 15, 'coins'],
            ['Guest Experience and Service Standards', 'How to set service standards, train a team to them and tell whether guests notice.', ['Writing standards people can follow', 'Training and coaching', 'Listening to guest feedback'], 14, 'heart'],
            ['Retail Basics: Range, Space and Stock', 'The three decisions behind most shops: what to sell, how to lay it out and how much to hold.', ['Choosing a range', 'Using space well', 'Stock levels and reordering'], 15, 'store'],
            ['Pricing, Promotions and Margin', 'How operators set prices and run promotions without giving away the margin, in hospitality and in retail.', ['Setting a price', 'Promotions that pay for themselves', 'Protecting margin'], 14, 'tag'],
            ['Revenue Management for Hotels', 'How hotels set rates and manage availability across the year, and what owners should expect to see.', ['Setting and changing rates', 'Managing availability', 'What owners should expect'], 15, 'growth'],
            ['Food and Beverage Operations', 'The basics of running a kitchen and dining room: menus, purchasing, waste and the cost lines that decide the margin.', ['Menus and purchasing', 'Controlling waste', 'Cost lines that matter'], 14, 'chair'],
            ['Online and In-Store: Running Both Channels', 'How retailers keep stock, prices and customer service consistent across shops and online.', ['Shared stock and pricing', 'Fulfilment and returns', 'One view of the customer'], 15, 'channel'],
            ['Hiring, Training and Scheduling Frontline Teams', 'Building rosters that match demand and training that keeps service steady.', ['Rosters that match demand', 'Training new staff', 'Keeping standards steady'], 14, 'people'],
          ],
        },
        {
          label: 'Healthcare and Education Operations',
          motif: 'cross',
          blurb: 'Eight lessons on running clinics, schools and training providers.',
          lead: 'A plain introduction to how healthcare and education providers are organised, staffed and held to account, and what operators and investors should understand before they commit.',
          who: 'Operators, investors and managers entering or running a regulated, long-cycle service business.',
          pieces: [
            ['How Healthcare Providers Are Organised', 'Clinics, hospitals and specialist centres: how they are licensed, staffed and paid, in plain terms.', ['Types of provider', 'Licensing and staffing', 'How income is earned'], 15, 'cross'],
            ['Capacity Planning for Clinical Sites', 'Matching clinicians, rooms and appointment slots to demand, and what happens when they do not match.', ['Reading demand', 'Rosters and rooms', 'Reducing waiting time'], 14, 'calendar'],
            ['How Schools and Training Providers Are Run', 'Governance, curriculum, staffing and fees: the moving parts of an education business.', ['Governance and leadership', 'Teaching staff and curriculum', 'Fees and enrolment'], 15, 'cap'],
            ['Quality, Compliance and Reputation', 'Inspections, audits and public ratings in regulated sectors, and how operators prepare for them without a scramble.', ['What inspectors look for', 'Keeping records ready', 'Protecting reputation'], 14, 'seal'],
            ['Patient Experience and Clinical Quality', 'How providers measure and improve the patient journey, from first contact to follow-up.', ['Mapping the patient journey', 'Measuring quality', 'Acting on feedback'], 14, 'heart'],
            ['Clinical Staffing and Credentialing', 'How clinicians are recruited, checked and kept, and why credentialing matters to operators and insurers.', ['Recruiting clinicians', 'Checking credentials', 'Keeping and developing staff'], 14, 'seal'],
            ['Curriculum, Teaching and Student Outcomes', 'How a school or college decides what to teach, how to support its teachers and how to judge results.', ['Choosing a curriculum', 'Supporting teachers', 'Judging outcomes'], 15, 'document'],
            ['Enrolment, Fees and Financial Planning for Schools', 'How operators forecast enrolment, set fees and plan the budget, with the risks to watch.', ['Forecasting enrolment', 'Setting fees', 'Budget risks'], 14, 'bars'],
          ],
        },
        {
          label: 'Construction and Project Delivery',
          motif: 'crane',
          blurb: 'Six lessons on how buildings and infrastructure get delivered.',
          lead: 'A practical introduction to how construction projects are structured, priced and handed over, written for the people who commission, finance and manage them.',
          who: 'Clients, developers, investors and project managers who need to follow a build from tender to handover.',
          pieces: [
            ['How a Construction Project Is Structured', 'Client, consultant, contractor and subcontractor: who does what, and who carries which risk.', ['The roles on a project', 'Where risk sits', 'Reporting lines'], 15, 'blueprint'],
            ['Budgets, Programmes and Change Orders', 'How cost and time are planned, tracked and protected when the scope changes mid-build.', ['Building a budget and programme', 'Tracking progress', 'Handling changes to scope'], 15, 'timeline'],
            ['Procurement and Contract Choices', 'Tender routes and contract types compared, with the trade-offs for client and contractor.', ['Tender routes', 'Contract types compared', 'Choosing for the project'], 14, 'scales'],
            ['Handover, Snagging and the Defects Period', 'What a good handover looks like and how to manage the period after completion.', ['Completion and handover', 'Snagging lists', 'Managing the defects period'], 14, 'checklist'],
            ['Managing Subcontractors and Suppliers', 'Selecting, contracting and managing the trades and suppliers who do most of the work on site.', ['Selecting trades', 'Contracting and payment', 'Managing performance'], 14, 'truck'],
            ['Health, Safety and Quality on Site', 'The routines that keep people safe and work to standard, and how clients can check that they are followed.', ['Site safety routines', 'Quality checks', 'What clients can ask to see'], 15, 'shield'],
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ GUIDES
    {
      title: 'Guides & Playbooks',
      format: 'guide',
      noun: 'guide',
      motif: 'newspaper',
      description: 'Practical reading for buyers, founders, investors and operators: step-by-step guides, working playbooks, sector guides and plain-English regulation notes.',
      viewAll: 'Browse all Guides',
      items: [
        {
          label: 'Buyer and Investor Guides',
          motif: 'house',
          blurb: 'Clear guides for people buying, letting or investing in property.',
          lead: 'Practical reading for anyone putting money into Dubai property: what to check, what to ask and how to avoid the costly mistakes.',
          who: 'Buyers, landlords and investors, from first purchase to a growing portfolio.',
          pieces: [
            ['The First Purchase Guide', 'A step-by-step path from budget to keys: finance, search, offer, contract, transfer and the costs along the way.', ['A realistic all-in budget', 'The order of steps and who handles each', 'Common first-time mistakes'], 18, 'key'],
            ['The Off-Plan Buyer’s Guide', 'How to assess a developer, a project and a payment plan before reserving a unit.', ['Checking a developer’s record', 'Reading the sale contract', 'Handover and snagging'], 20, 'blueprint'],
            ['The Landlord’s Handbook', 'Letting a property well: pricing, tenants, contracts, maintenance and the rules on both sides.', ['Setting a rent that lets', 'Contracts and registration', 'Maintenance and service charges'], 17, 'sofa'],
            ['Building a Rental Portfolio', 'How to add the second, third and tenth property without letting costs, vacancies and debt get ahead of you.', ['Underwriting each addition', 'Financing and stress tests', 'Systems for managing many units'], 22, 'puzzle'],
            ['The Resale Buyer’s Guide', 'Buying a property from an existing owner: the checks on title, charges and condition to make before you sign.', ['Checking title and charges', 'Inspecting the property', 'Steps from offer to transfer'], 20, 'house'],
            ['The Commercial Property Guide', 'What changes when you buy or lease offices, shops or warehouses instead of homes: leases, yields and running costs.', ['Leases and tenants', 'Yields and costs', 'Questions to ask first'], 22, 'tower'],
          ],
        },
        {
          label: 'Founder Playbooks',
          motif: 'blueprint',
          blurb: 'Working playbooks for starting and growing a company.',
          lead: 'Playbooks built from client work: checklists, sequences and examples for founders who want a clear next step.',
          who: 'Founders and managers in the first five years of a company.',
          pieces: [
            ['The 30-Day Incorporation Blueprint', 'A week-by-week plan to take a company from decision to a licensed, banked and trading entity.', ['A four-week schedule', 'Documents to prepare first', 'What can run in parallel'], 19, 'timeline'],
            ['Starting a Real Estate Brokerage', 'The licences, systems, people and first-year numbers behind a new brokerage, set out in order.', ['Licence and registration route', 'Systems and agent hiring', 'A first-year cash plan'], 24, 'store'],
            ['Hiring Your First Ten', 'Roles, order of hiring, pay and contracts for the first ten people in a new UAE company.', ['Who to hire first', 'Pay bands and benefits', 'Contracts and visa timing'], 16, 'people'],
            ['Your First Year of Marketing', 'A simple plan to get known: positioning, channels, a content rhythm and how to measure what works.', ['Positioning in one page', 'Three channels to start with', 'Measuring results monthly'], 15, 'megaphone'],
            ['Pricing Your Services', 'A simple method for setting prices for a service business, testing them and raising them without losing clients.', ['Setting a starting price', 'Testing and adjusting', 'Raising prices'], 18, 'tag'],
            ['Your First Board and Advisers', 'When to appoint advisers or a board, who to ask and how to run the relationship.', ['When to start', 'Who to ask', 'Running the relationship'], 19, 'people'],
          ],
        },
        {
          label: 'Regulation Guides',
          motif: 'scales',
          blurb: 'Plain-English notes on the rules that govern property and business.',
          lead: 'Short notes on laws and procedures that affect owners and operators, each with what changed, who it affects and what to do next.',
          who: 'Owners, managers and advisers who need to stay compliant without reading statutes.',
          pieces: [
            ['Corporate Tax: An Operator’s Guide', 'What the tax means for a normal operating company: registration, rates, records and filing.', ['Who must register', 'Records to keep', 'Filing calendar and penalties'], 21, 'document'],
            ['Rules for Brokers and Developers', 'The licensing, escrow and conduct rules that apply to people who sell property, in plain terms.', ['Licensing and permits', 'Escrow and client money', 'Conduct and complaints'], 18, 'scales'],
            ['Holiday Home Permits and Compliance', 'How to register, permit and run a short-stay property within the rules, and what inspectors look for.', ['Permit steps in order', 'Safety and insurance requirements', 'Records and tourism fees'], 14, 'bed'],
            ['Employment Rules for Employers', 'Contracts, probation, leave, notice and end of service: the essentials for anyone with staff in the UAE.', ['What a contract must say', 'Leave and working time', 'Ending employment correctly'], 16, 'handshake'],
          ],
        },
        {
          label: 'Annual Handbooks',
          motif: 'calendar',
          blurb: 'Yearly reference books for planning and decisions.',
          lead: 'Reference editions refreshed each year: the numbers, calendars and checklists that planning teams and families reach for again and again.',
          who: 'Finance teams, planners and principals who want one dependable reference.',
          pieces: [
            ['The UAE Owner’s Handbook', 'A year’s reference for property owners: fees, calendars, contacts and the questions owners ask most.', ['Annual fees and when they fall due', 'A yearly owner’s calendar', 'Who to call for what'], 28, 'newspaper'],
            ['The Founder’s Year Planner', 'A month-by-month planner for filings, renewals, reviews and decisions across a company’s first years.', ['Monthly deadlines in one place', 'Quarterly review prompts', 'Renewals and licence dates'], 18, 'calendar'],
            ['The Investor’s Annual Review', 'A structured way to review your holdings once a year: performance, risk, costs and what to change.', ['Performance against targets', 'Costs and fees audit', 'Decisions for the coming year'], 20, 'target'],
            ['The Family Governance Handbook', 'A working reference for family councils: meeting rhythm, decision rules, roles and how to resolve disputes.', ['Setting up a family council', 'Writing a family charter', 'Dispute and exit procedures'], 25, 'rings'],
          ],
        },
        {
          label: 'Sector Guides',
          motif: 'globe',
          blurb: 'Plain guides to how a sector works and what to check first.',
          lead: 'Short guides to how a sector is structured, who matters in it and what to check before you invest, hire or partner.',
          who: 'Investors, executives and advisers entering or comparing sectors.',
          pieces: [
            ['Banking and Financial Services: A Sector Guide', 'How the sector is structured in the UAE, who regulates it and the trends that decide where value is created.', ['Structure and regulators', 'Revenue models compared', 'Trends to watch'], 22, 'bank'],
            ['Technology and Fintech: A Sector Guide', 'How technology and fintech companies are licensed, funded and scaled, with the common routes to market.', ['Licences and sandboxes', 'Funding stages', 'Routes to market'], 21, 'network'],
            ['Healthcare and Education: A Sector Guide', 'How providers, operators and investors approach two regulated, long-cycle sectors.', ['How each sector is regulated', 'Operating models', 'What investors look for'], 22, 'cross'],
            ['Logistics and Mobility: A Sector Guide', 'How freight, free zones and fleets fit together, and where operators earn their margin.', ['The logistics chain', 'Free zone and mainland choices', 'Margin levers'], 20, 'truck'],
            ['Insurance and Reinsurance: A Sector Guide', 'How insurers, reinsurers and brokers are structured, how they earn a return and what buyers should know.', ['Structure and regulators', 'How insurers earn a return', 'Trends to watch'], 21, 'shield'],
            ['Energy and Utilities: A Sector Guide', 'How power, fuel and water businesses are organised and financed, and where private capital takes part.', ['Structure and ownership', 'How projects are financed', 'Roles for private capital'], 22, 'leaf'],
            ['Real Estate and Property: A Sector Guide', 'How developers, brokers, owners and managers fit together, and where each earns its income.', ['Who does what', 'Income and costs', 'Cycle and risks'], 22, 'tower'],
            ['Professional and Business Services: A Sector Guide', 'How advisory, legal, accounting and outsourcing firms are structured, priced and grown.', ['Firm structures', 'Pricing and utilisation', 'Growth routes'], 20, 'briefcase'],
          ],
        },
        {
          label: 'Operator Playbooks',
          motif: 'gears',
          blurb: 'Working playbooks for people who run sites and teams.',
          lead: 'Step-by-step playbooks for the people who run hotels, shops, clinics, schools and building sites: what to set up, what to check each week and where problems usually start.',
          who: 'General managers, operations heads and owner-operators who need a routine, not a theory.',
          pieces: [
            ['The Hotel Operator’s Playbook', 'A working guide to running a hotel: the daily and weekly routines, the reports to read and the early signs that something is slipping.', ['Daily and weekly routines', 'Reports worth reading', 'Early warning signs'], 24, 'hotel'],
            ['The Retail Operator’s Playbook', 'A working guide to running shops: ranging, staffing, stock and the numbers that show whether a store is healthy.', ['Store routines', 'Stock and replenishment', 'Store health numbers'], 22, 'store'],
            ['The Clinic Operator’s Playbook', 'A working guide to running a clinic: scheduling, staffing, records and the checks that keep a site ready for inspection.', ['Scheduling and staffing', 'Records and consent', 'Inspection readiness'], 23, 'cross'],
            ['The School Operator’s Playbook', 'A working guide to running a school: the annual cycle, staffing, fees and the routines that keep standards steady.', ['The annual cycle', 'Staffing and fees', 'Routines that hold standards'], 23, 'cap'],
            ['The Contractor’s Playbook', 'A working guide to delivering a project on site: mobilisation, programme control, subcontractor management and close-out.', ['Mobilising a site', 'Programme and cost control', 'Close-out and handover'], 24, 'crane'],
            ['The Restaurant Operator’s Playbook', 'A working guide to running a restaurant: menus, purchasing, kitchen and floor routines, and the cost lines to watch.', ['Menu and purchasing', 'Kitchen and floor routines', 'Cost lines to watch'], 23, 'chair'],
            ['The Facilities and Maintenance Playbook', 'A working guide to keeping buildings running: planned maintenance, contractors, records and budgets.', ['Planned maintenance', 'Managing contractors', 'Records and budgets'], 22, 'wrench'],
            ['The Operations Reporting Playbook', 'How to build a short weekly and monthly report that shows an operator what to act on.', ['Choosing the numbers', 'Weekly and monthly rhythm', 'Acting on the report'], 20, 'bars'],
          ],
        },
        {
          label: 'Single-Sector Guides',
          motif: 'blueprint',
          blurb: 'One sector per guide: structure, regulation and what to check first.',
          lead: 'Guides to one sector at a time, covering how it is structured, how it is regulated, how operators earn their margin and what to check before you invest, hire or partner.',
          who: 'Investors, executives and advisers who need a closer look at one sector.',
          pieces: [
            ['Hospitality: A Sector Guide', 'How hotels, restaurants and leisure businesses are owned, operated and financed, and where value is made or lost.', ['Owners and operators', 'Management and franchise models', 'What investors check first'], 22, 'hotel'],
            ['Retail and Consumer: A Sector Guide', 'How shops, brands and online sellers are structured, and what separates a strong retail business from a weak one.', ['Formats and channels', 'Leasing and landlords', 'Margin and stock'], 21, 'store'],
            ['Healthcare: A Sector Guide', 'How providers are licensed and funded, how operators are organised and what investors should understand before committing.', ['Licensing and oversight', 'Operating models', 'What investors look for'], 22, 'cross'],
            ['Education: A Sector Guide', 'How schools, universities and training providers are licensed, funded and run, and where operators and investors take part.', ['Licensing and oversight', 'Operating models', 'Fees and enrolment'], 21, 'cap'],
            ['Construction and Contracting: A Sector Guide', 'How developers, consultants and contractors fit together, and the commercial and delivery risks that matter most.', ['Who does what', 'Contract and payment risk', 'Delivery risks to check'], 22, 'crane'],
            ['Food and Beverage: A Sector Guide', 'How restaurants, cafes and food service businesses are owned, run and financed, and what investors check first.', ['Formats and models', 'Margins and costs', 'What investors check first'], 21, 'chair'],
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ VIDEO
    {
      title: 'Video & Webinars',
      format: 'video',
      noun: 'video',
      motif: 'screen',
      description: 'Short explainers, full webinars and fireside conversations: the people and ideas of NK&CO on screen.',
      viewAll: 'Browse all Video',
      items: [
        {
          label: 'Explainer Videos',
          motif: 'eye',
          blurb: 'Three to six minutes on one idea, clearly shown.',
          lead: 'One idea per video, explained with diagrams and examples: the quickest way into a topic before you read or listen further.',
          who: 'Anyone who wants a clear answer in minutes.',
          pieces: [
            ['What Escrow Actually Protects', 'A short walk through the escrow account in off-plan sales: who pays in, who releases and what happens if a project stalls.', ['How money moves through escrow', 'What triggers a release', 'What buyers are and are not covered for'], 5, 'vault'],
            ['Freehold, Leasehold and Usufruct', 'Three ownership types in one diagram, with what each lets you do.', ['What each right allows', 'Where each is available', 'Effects on resale and finance'], 4, 'key'],
            ['Free Zone or Mainland in Four Minutes', 'The choice most founders face first, reduced to the four questions that decide it.', ['Four deciding questions', 'Common misconceptions', 'When to ask for advice'], 4, 'map'],
            ['How Service Charges Are Set', 'Where the fee on your property comes from, what it pays for and how to question it.', ['What is included', 'How budgets are approved', 'Your rights as an owner'], 5, 'tag'],
            ['How Title Transfer Works', 'The steps to move a property from seller to buyer, from offer to registration.', ['The parties and documents', 'The steps in order', 'Common delays'], 5, 'document'],
            ['What a Sukuk Is', 'The structure of a sukuk in plain terms, and how it differs from a conventional bond.', ['The basic structure', 'Underlying assets', 'How it differs from a bond'], 5, 'seal'],
          ],
        },
        {
          label: 'Webinar Library',
          motif: 'screen',
          blurb: 'Full sessions with questions answered live.',
          lead: 'Recorded webinars led by NK&CO partners, each ending with the questions asked by attendees and their answers.',
          who: 'Professionals who prefer a full session with time for questions.',
          pieces: [
            ['The Market Mid-Year Review', 'A partner-led review of the first half: prices, rents, volumes and the factors behind them, with questions from the audience.', ['The half-year in numbers', 'Segments to watch', 'Audience questions answered'], 52, 'bars'],
            ['A Founder’s Guide to Corporate Tax', 'A practical session for company owners on registering, filing and planning, with a live question round.', ['Registration walk-through', 'Planning opportunities', 'Common filing errors'], 48, 'document'],
            ['Raising Capital in the Gulf', 'How companies are raising money today: routes, timing and what investors want to see.', ['Routes compared', 'The investor-ready checklist', 'Live questions from founders'], 55, 'growth'],
            ['Running a Family Council', 'A session on setting up and running a council that families actually attend and trust.', ['Agenda and cadence', 'Roles and rules', 'Handling difficult topics'], 50, 'rings'],
            ['Buying Off-Plan: Your Questions Answered', 'A full session on off-plan purchases, with answers to questions from the audience.', ['Payment plans and protections', 'Choosing a developer', 'Audience questions'], 45, 'tower'],
            ['Hiring in the UAE: Contracts and Visas', 'A session on hiring staff: contracts, visas and the paperwork that follows.', ['Contracts', 'Visas and permits', 'Audience questions'], 50, 'people'],
            ['AI Adoption for Mid-Sized Companies', 'A session on starting with AI in a mid-sized company, with a live question period.', ['Choosing a first use', 'Data and security basics', 'Audience questions'], 45, 'network'],
            ['Preparing for an Audit', 'What auditors ask for and how a company can prepare so the process runs smoothly.', ['What auditors request', 'Preparing the files', 'Audience questions'], 50, 'checklist'],
          ],
        },
        {
          label: 'Fireside Conversations',
          motif: 'handshake',
          blurb: 'Partners in conversation with leaders from industry.',
          lead: 'Unhurried filmed conversations between NK&CO partners and the people running companies, funds and projects in the region.',
          who: 'Anyone who wants to hear how decisions are really made.',
          pieces: [
            ['Building a Brokerage From Zero', 'A conversation about the first two years of starting an agency: hiring, licences, early mistakes and what worked.', ['The first hire', 'Where the money went', 'What they would repeat'], 38, 'store'],
            ['Lessons From a Development Launch', 'What a developer and an adviser learned from bringing a project to market: pricing, sales and timing.', ['Pricing a launch', 'Choosing sales partners', 'Handling delays honestly'], 42, 'crane'],
            ['Running Money for a Family', 'A candid talk on how a family investment team sets priorities, reports and reviews results.', ['Setting priorities', 'Reporting to the family', 'Learning from poor decisions'], 40, 'coins'],
            ['Why Companies Choose Dubai', 'Leaders who relocated or expanded here explain what drew them and what they would tell others.', ['Reasons that mattered', 'Surprises after arrival', 'Advice for newcomers'], 36, 'star'],
            ['Building a Hospitality Brand', 'A conversation with an operator on how a hotel or restaurant brand is built, kept consistent and grown.', ['Defining the brand', 'Keeping it consistent', 'Growing it'], 40, 'hotel'],
            ['Growing a Clinic Group', 'A conversation with a healthcare operator on opening new sites, hiring clinicians and keeping quality steady.', ['Choosing new sites', 'Hiring clinicians', 'Keeping quality steady'], 40, 'cross'],
          ],
        },
        {
          label: 'Sector Briefings',
          motif: 'pie',
          blurb: 'Twelve to fifteen minutes on one sector at a time.',
          lead: 'Short filmed briefings from sector leads on what is changing, what it means for operators and where capital is moving.',
          who: 'Executives and investors who want a quick, structured view of a sector.',
          pieces: [
            ['Banking in Twelve Minutes', 'The shape of Gulf banking: players, products and the trends that matter for the next two years.', ['Players and products', 'Three trends', 'What it means for clients'], 12, 'bank'],
            ['Technology and Cyber in Fifteen Minutes', 'Where regional companies are investing in technology and security, and where the gaps remain.', ['Where spend is going', 'Common security gaps', 'What to do first'], 15, 'lock'],
            ['Energy and Mobility in Fifteen Minutes', 'Power, fuel and transport in one view: projects, financing and the operators to watch.', ['Projects and financing', 'Operators and suppliers', 'Risks and policy'], 15, 'truck'],
            ['Healthcare and Education in Fifteen Minutes', 'Two long-cycle sectors explained: demand, licensing and the business models that work.', ['Demand drivers', 'Licensing and operators', 'Models that work'], 15, 'cross'],
          ],
        },
        {
          label: 'Operator Briefings',
          motif: 'screen',
          blurb: 'Twelve to fifteen minutes on how one kind of business is run.',
          lead: 'Short filmed briefings from sector leads on the daily running of a hotel, a shop, a clinic, a school or a building site, and what owners and investors should look for.',
          who: 'Owners, investors and new managers who want a quick, structured view of how a business operates.',
          pieces: [
            ['Hospitality Operations in Twelve Minutes', 'How a hotel or restaurant runs day to day: teams, standards, income and the costs that matter.', ['Teams and standards', 'Income and costs', 'What to look for'], 12, 'hotel'],
            ['Retail Operations in Twelve Minutes', 'How a shop or chain runs day to day: range, staff, stock and the numbers behind them.', ['Range and staff', 'Stock and sales', 'Store numbers'], 12, 'store'],
            ['Healthcare Operations in Fifteen Minutes', 'How a clinic or hospital runs day to day: scheduling, staffing, records and quality checks.', ['Scheduling and staffing', 'Records and quality', 'Common pressure points'], 15, 'cross'],
            ['Education Operations in Twelve Minutes', 'How a school or training provider runs through the year: enrolment, teaching, fees and standards.', ['The school year', 'Enrolment and fees', 'Standards and reviews'], 12, 'cap'],
            ['Construction Delivery in Fifteen Minutes', 'How a project moves from award to handover: mobilisation, programme, cost control and close-out.', ['Mobilisation', 'Programme and cost', 'Handover'], 15, 'crane'],
            ['Facilities and Maintenance in Twelve Minutes', 'How buildings are kept running: planned maintenance, contractors and the costs behind them.', ['Planned maintenance', 'Contractors', 'Costs'], 12, 'wrench'],
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ TOOLS
    {
      title: 'Tools & Templates',
      format: 'tool',
      noun: 'tool',
      motif: 'wrench',
      description: 'Calculators, checklists, templates, sector and operator toolkits and a glossary: working files you can use on your own deals and decisions.',
      viewAll: 'Browse all Tools',
      items: [
        {
          label: 'Calculators',
          motif: 'gears',
          blurb: 'Spreadsheet models for the numbers you need most.',
          lead: 'Simple, transparent models with every assumption visible, so you can change the inputs and see the effect.',
          who: 'Buyers, landlords and founders who want to test numbers before they commit.',
          pieces: [
            ['Rental Yield Calculator', 'Work out gross and net yield on a property, with service charges, vacancy and management fees included.', ['Yield before and after costs', 'Costs you might miss', 'Sensitivity to vacancy'], 5, 'growth'],
            ['Off-Plan Payment Plan Modeller', 'Lay out a payment schedule against your cash position and see the effect on your return.', ['Schedule against cash', 'Effect of delays', 'Return at exit'], 6, 'calendar'],
            ['Mortgage and Cost Calculator', 'Estimate monthly payments and the one-off costs of buying, so the budget is complete.', ['Monthly payment scenarios', 'Fees and transfer costs', 'Stress test on rates'], 5, 'house'],
            ['Business Set-Up Cost Estimator', 'Add up the licence, space, visa and service costs of a first year to get a realistic budget.', ['First-year cost lines', 'Free zone and mainland variants', 'Contingency allowance'], 6, 'coins'],
            ['Lease Versus Buy Calculator', 'Compare renting premises with buying them over a chosen period, with every assumption visible.', ['Inputs and assumptions', 'Total cost over time', 'Sensitivity to rates'], 5, 'scales'],
            ['Staff Cost Estimator', 'Estimate the full yearly cost of a hire beyond salary: visas, benefits, insurance and set-up.', ['Salary and benefits', 'Visa and set-up costs', 'Total yearly cost'], 4, 'coins'],
            ['Loan Repayment Calculator', 'See repayments, interest and total cost for different loan sizes and terms.', ['Loan size and term', 'Repayment schedule', 'Total cost of borrowing'], 4, 'bank'],
            ['Break-Even Calculator', 'Find the sales a business needs to cover its costs, and how changes in price or cost move that point.', ['Fixed and variable costs', 'Break-even point', 'Effect of price changes'], 4, 'gauge'],
          ],
        },
        {
          label: 'Checklists',
          motif: 'checklist',
          blurb: 'One-page lists to use before you sign, hire or file.',
          lead: 'Short checklists drawn from client work, each built to be printed, ticked off and kept with the file.',
          who: 'Anyone who wants fewer surprises at the point of decision.',
          pieces: [
            ['Property Purchase Checklist', 'Every check before, during and after a purchase, from documents to the first day of ownership.', ['Before you offer', 'Before you sign', 'On transfer and handover'], 3, 'checklist'],
            ['Tenant Move-In and Move-Out Checklist', 'Inspections, readings, photographs and handback steps, so deposits are returned without dispute.', ['Move-in record', 'Move-out inspection', 'Deposit settlement'], 3, 'key'],
            ['Company Set-Up Checklist', 'The sequence of approvals, documents and accounts to take a company from idea to trading.', ['Pre-registration tasks', 'Licence and bank steps', 'First thirty days'], 4, 'ladder'],
            ['Due Diligence Request List', 'The standard questions to put to a business, a landlord or a developer before committing funds.', ['Corporate and legal', 'Financial and tax', 'Operational and people'], 4, 'search'],
            ['Lease Review Checklist', 'Points to check before signing a lease, as tenant or as landlord.', ['Term and rent', 'Obligations and costs', 'Exit and renewal'], 4, 'key'],
            ['Annual Compliance Calendar', 'A year view of renewals, filings and reviews so nothing is missed.', ['Renewals and filings', 'Reviews and reports', 'Who owns each item'], 4, 'calendar'],
          ],
        },
        {
          label: 'Templates',
          motif: 'document',
          blurb: 'Editable documents you can adapt for your own use.',
          lead: 'Starting points for the documents you write most often, with notes on what to change and when to ask for professional review.',
          who: 'Owners and managers who want a sound draft to begin from.',
          pieces: [
            ['Investment Memo Template', 'A structure for presenting a deal to a committee: thesis, numbers, risks and the decision requested.', ['One-page summary', 'Numbers tables', 'Risks and mitigants'], 4, 'document'],
            ['Board Paper Template', 'A short format that makes a paper easy to read and easy to decide on.', ['Purpose and decision', 'Options and recommendation', 'Financial effect'], 3, 'org'],
            ['Brokerage Commission Plan Template', 'A framework for agent commission tiers, caps and splits that is simple to explain and fair to apply.', ['Tiers and splits', 'Caps and exceptions', 'Review and payment dates'], 4, 'pie'],
            ['Family Charter Template', 'A first draft for a family’s values, roles and decision rules, with prompts for each section.', ['Values and purpose', 'Roles and meetings', 'Rules for joining and leaving'], 5, 'seal'],
            ['Business Plan Template', 'A simple structure for a business plan, with notes on what each section should answer.', ['Market and offer', 'Operations and team', 'Financial plan'], 5, 'document'],
            ['Job Description Template', 'A clear format for describing a role, its duties and how success will be measured.', ['Purpose and duties', 'Skills and experience', 'Measures of success'], 4, 'pen'],
          ],
        },
        {
          label: 'Glossary',
          motif: 'pen',
          blurb: 'The terms of the market, defined in plain words.',
          lead: 'Short definitions of the words that appear in contracts, listings and filings, with an example for each, so you can read documents with confidence.',
          who: 'Newcomers to the market and anyone who is tired of nodding along.',
          pieces: [
            ['Property and Ownership Terms', 'Title, freehold, usufruct, strata, service charge, snagging and the other words in a property contract.', ['Ownership terms defined', 'Charges and fees defined', 'Handover terms defined'], 8, 'house'],
            ['Finance and Investment Terms', 'Yield, leverage, covenant, mezzanine, sukuk and others, each with a short worked example.', ['Return measures', 'Debt terms', 'Islamic finance terms'], 9, 'coins'],
            ['Company and Licensing Terms', 'Free zone, mainland, activity, UBO, substance and other words used in setting up and running a company.', ['Structure terms', 'Licence terms', 'Compliance terms'], 7, 'briefcase'],
            ['Legal and Regulatory Terms', 'Escrow, Oqood, Ejari, RERA and other names you meet when dealing with property and business authorities.', ['Registries and bodies', 'Documents and registrations', 'Dispute terms'], 7, 'scales'],
          ],
        },
        {
          label: 'Sector Toolkits',
          motif: 'wrench',
          blurb: 'Working files for banking, technology, energy and other sectors.',
          lead: 'Models, scorecards and checklists written for sectors beyond property, with every assumption visible.',
          who: 'Finance teams, operators and investors who work outside real estate.',
          pieces: [
            ['Loan and Facility Comparison Model', 'Compare offers from banks and lenders on cost, tenor, security and covenants, side by side.', ['Total cost of each offer', 'Covenants compared', 'Stress test on rates'], 6, 'bank'],
            ['Technology Vendor Scorecard', 'Score suppliers against the same criteria so a selection can be explained and defended.', ['Weighted criteria', 'Reference checks', 'Cost over five years'], 5, 'checklist'],
            ['Cyber Readiness Checklist', 'Twenty checks that show how ready a company is for a security incident, with a next step for each.', ['Access and identity', 'Backups and recovery', 'Incident roles'], 4, 'lock'],
            ['Sustainability Reporting Template', 'A simple structure for reporting energy, emissions and governance data, with notes on what to include.', ['Metrics and sources', 'Narrative and targets', 'Review and sign-off'], 4, 'leaf'],
            ['Insurance Renewal Preparation Pack', 'Questions and data to gather before an insurance renewal, so the discussion with the insurer or broker is better informed.', ['Data to gather', 'Questions to ask', 'Comparing quotes'], 5, 'shield'],
            ['Energy Project Screening Checklist', 'A first-pass checklist for judging whether an energy project merits a closer look.', ['Resource and site', 'Counterparties and contracts', 'Financing and risks'], 5, 'leaf'],
          ],
        },
        {
          label: 'Operator Toolkits',
          motif: 'wrench',
          blurb: 'Working files for hotels, shops, clinics, schools and building sites.',
          lead: 'Models, scorecards and planners for the people who run sites, written so every assumption is visible and can be changed.',
          who: 'Operators, finance teams and owners who want to test a plan before they commit to it.',
          pieces: [
            ['Hotel Operating Budget Model', 'Build a simple budget from rooms, food and beverage and other income, set against staffing and running costs, with every assumption visible.', ['Income lines and drivers', 'Staffing and running costs', 'Sensitivity to occupancy'], 6, 'hotel'],
            ['Retail Store Performance Scorecard', 'Score each store on sales, stock, staffing and service so the weak points show up early.', ['Choosing the measures', 'Comparing stores', 'Actions for the lowest scores'], 5, 'store'],
            ['Clinic Capacity and Staffing Planner', 'Match clinicians, rooms and appointment slots to expected demand, and see where waiting times build up.', ['Demand assumptions', 'Rosters and rooms', 'Where queues form'], 6, 'calendar'],
            ['School Enrolment and Fee Planner', 'Plan enrolment, fees and teaching staff by year group and see how changes affect the budget.', ['Enrolment by year group', 'Fees and discounts', 'Staffing needs'], 5, 'cap'],
            ['Construction Cost and Programme Tracker', 'Track budget, programme and changes in one place, with a simple view of what is ahead or behind.', ['Budget against actual', 'Programme progress', 'Change log'], 6, 'crane'],
            ['Restaurant Cost and Menu Planner', 'Cost each dish, plan menu pricing and see how changes affect margin.', ['Costing a dish', 'Pricing the menu', 'Margin by item'], 5, 'chair'],
            ['Facilities Maintenance Schedule', 'A planner for routine and planned maintenance, with a simple log of work done.', ['Routine tasks', 'Planned work', 'Work log'], 5, 'wrench'],
            ['Weekly Operations Dashboard Template', 'One page showing the handful of numbers an operator should read every week.', ['Choosing the numbers', 'Layout', 'Using it in a weekly meeting'], 4, 'bars'],
          ],
        },
      ],
    },

    // ------------------------------------------------------------------ MEMBER ACCESS
    {
      title: 'Member Access',
      format: 'access',
      noun: 'session',
      motif: 'star',
      description: 'Private briefings, closed roundtables, sector and leadership circles, and priority access for clients and members of NK&CO, by invitation.',
      viewAll: 'See all Member Access',
      items: [
        {
          label: 'Private Briefings',
          motif: 'lock',
          blurb: 'Partner-led sessions reserved for members.',
          lead: 'Closed sessions led by NK&CO partners: the quarter in review, research before it is published and short calls when the rules change.',
          who: 'Clients and members who want the view of the partners before everyone else.',
          pieces: [
            ['Quarterly Partner Briefing', 'A members-only review of the quarter with NK&CO partners: markets, policy and what to do next, with time for questions.', ['The quarter in review', 'Policy and market signals', 'Questions from members'], 60, 'calendar'],
            ['Pre-Release Research Walk-Through', 'Members hear the findings of a flagship report before it is published, from the people who wrote it.', ['Findings before publication', 'Method and data', 'What it means for your business'], 45, 'search'],
            ['Sector Deep Dive', 'A closed session on one sector, led by the specialist team, with a short pack for members to keep.', ['Sector outlook', 'Deals and valuations', 'Open discussion'], 60, 'pie'],
            ['Regulatory Change Call', 'A short call when a rule changes, covering what is new, who is affected and what to do by when.', ['What changed', 'Who is affected', 'Actions and dates'], 30, 'seal'],
            ['Annual Outlook Preview', 'Members hear the main themes of the annual outlook before it is published, with time for questions.', ['Main themes', 'What it means for members', 'Questions'], 60, 'eye'],
            ['Deal Environment Review', 'A closed session on the conditions for raising and deploying capital, led by the partners.', ['Capital conditions', 'What deals are getting done', 'Open discussion'], 60, 'funnel'],
          ],
        },
        {
          label: 'Closed Roundtables',
          motif: 'rings',
          blurb: 'Small private conversations among peers.',
          lead: 'Small-group conversations among directors, finance heads, owners and investors, held under agreed ground rules so people can speak candidly.',
          who: 'Senior leaders who learn most from candid conversation with their peers.',
          pieces: [
            ['Chairs and Directors Roundtable', 'A small, private conversation among board members on governance, risk and strategy, under agreed ground rules.', ['An agenda set by members', 'Ground rules for candour', 'A short note afterwards'], 90, 'people'],
            ['Finance Leaders Circle', 'Chief financial officers and finance heads compare notes on funding, reporting and planning.', ['Funding and liquidity', 'Reporting and controls', 'Planning assumptions'], 90, 'bars'],
            ['Founders and Family Principals Forum', 'Owners and principals discuss succession, governance and investing among peers.', ['Succession and governance', 'Investing as a family', 'Peer questions'], 90, 'vault'],
            ['Investor and Allocator Dinner', 'An evening for institutional investors and allocators to meet NK&CO partners and one another.', ['A short opening view', 'Table discussion', 'Introductions'], 120, 'handshake'],
            ['Audit and Risk Committee Roundtable', 'Committee members compare notes on oversight, controls and reporting, under agreed ground rules.', ['Oversight and controls', 'Reporting', 'Peer questions'], 90, 'shield'],
            ['Chief Executives Roundtable', 'Chief executives discuss strategy, people and growth among peers, under agreed ground rules.', ['Strategy and growth', 'People and leadership', 'Peer questions'], 90, 'org'],
            ['Real Estate Principals Roundtable', 'Owners and developers discuss supply, financing and the cycle among peers, under agreed ground rules.', ['Supply and demand', 'Financing', 'Peer questions'], 90, 'tower'],
            ['Family Office Investment Roundtable', 'Investment heads from family offices compare approaches to allocation and co-investment.', ['Allocation approaches', 'Co-investment', 'Peer questions'], 90, 'vault'],
          ],
        },
        {
          label: 'Priority Access',
          motif: 'key',
          blurb: 'One-to-one time, introductions and early access.',
          lead: 'Direct access to the partners and the library: booked time, introductions where they fit, and new work before general release.',
          who: 'Members who want a direct line rather than a general programme.',
          pieces: [
            ['Partner Office Hours', 'A booked slot with an NK&CO partner to talk through a question, a decision or a plan.', ['Booking and preparing', 'What partners can help with', 'Follow-up in writing'], 30, 'compass'],
            ['Priority Introductions', 'Members ask for an introduction to an adviser, operator or investor in our network, and we make it where it fits.', ['How to ask', 'How we choose', 'Confidentiality'], 20, 'swap'],
            ['Early Access to New Intelligence', 'Members receive new reports, data and briefings ahead of general release, with a short walk-through call.', ['What arrives early', 'How it is delivered', 'The walk-through call'], 25, 'growth'],
            ['Members’ Library and Archive', 'A guided tour of the full library, including past briefings, recordings and members-only material.', ['What is in the archive', 'How to search it', 'Requesting material'], 20, 'document'],
            ['Dedicated Relationship Partner', 'Members are paired with a named partner who knows their business and is their first point of contact.', ['How pairing works', 'What the partner does', 'Staying in touch'], 20, 'compass'],
            ['Event Priority and Invitations', 'Members receive early notice and priority places at NK&CO events and roundtables.', ['Early notice', 'Priority places', 'How to respond'], 20, 'calendar'],
          ],
        },
        {
          label: 'Sector Circles',
          motif: 'network',
          blurb: 'Private circles for leaders in one sector.',
          lead: 'Small, private circles for owners, operators and investors in a single sector, held under agreed ground rules so people can compare notes candidly.',
          who: 'Senior leaders who want to learn from peers in their own sector.',
          pieces: [
            ['Hospitality Owners and Operators Circle', 'Hotel owners, operators and investors compare notes on performance, partners and the cycle, under agreed ground rules.', ['Performance and partners', 'Owner and operator relations', 'Peer questions'], 90, 'hotel'],
            ['Retail and Consumer Leaders Circle', 'Leaders of retail and consumer businesses discuss sites, landlords, supply and customers among peers.', ['Sites and landlords', 'Supply and stock', 'Customer questions'], 90, 'store'],
            ['Healthcare Leaders Circle', 'Clinic, hospital and healthcare group leaders discuss staffing, standards and growth among peers.', ['Staffing and standards', 'Growth and partnerships', 'Peer questions'], 90, 'cross'],
            ['Education Leaders Circle', 'School, college and training provider leaders discuss enrolment, staffing and quality among peers.', ['Enrolment and staffing', 'Quality and oversight', 'Peer questions'], 90, 'cap'],
            ['Construction and Contracting Circle', 'Developers, consultants and contractors discuss delivery, payment and risk across a project.', ['Delivery and programme', 'Payment and contract risk', 'Peer questions'], 90, 'crane'],
            ['Banking and Financial Services Circle', 'Leaders in banking and financial services discuss regulation, funding and growth among peers.', ['Regulation', 'Funding and growth', 'Peer questions'], 90, 'bank'],
            ['Technology and Fintech Circle', 'Founders and executives in technology and fintech discuss licences, funding and scaling among peers.', ['Licences and funding', 'Scaling', 'Peer questions'], 90, 'network'],
            ['Energy and Infrastructure Circle', 'Leaders in energy and infrastructure discuss projects, financing and delivery among peers.', ['Projects and financing', 'Delivery', 'Peer questions'], 90, 'gauge'],
          ],
        },
        {
          label: 'Leadership Circles',
          motif: 'people',
          blurb: 'Private circles for people who hold the same role.',
          lead: 'Small, private circles for people who hold the same kind of role in different companies, held under agreed ground rules so they can speak candidly.',
          who: 'Executives and principals who learn most from others in a similar seat.',
          pieces: [
            ['Chief Operating Officers Circle', 'Operating chiefs compare notes on running teams, sites and budgets, and on what to change first.', ['Running operations at scale', 'Cost and performance', 'Peer questions'], 90, 'gears'],
            ['People and Talent Leaders Circle', 'Heads of people and talent discuss hiring, retention and pay among peers.', ['Hiring and retention', 'Pay and benefits', 'Peer questions'], 90, 'people'],
            ['Risk and Compliance Leaders Circle', 'Risk and compliance heads discuss regulation, controls and reporting among peers.', ['Regulatory change', 'Controls and reporting', 'Peer questions'], 90, 'shield'],
            ['Technology and Data Leaders Circle', 'Technology and data leaders discuss security, platforms and delivery among peers.', ['Security and platforms', 'Delivery and teams', 'Peer questions'], 90, 'network'],
            ['Next Generation Principals Circle', 'Younger family principals meet one another to discuss governance, investing and taking on responsibility.', ['Taking on responsibility', 'Governance and investing', 'Peer questions'], 90, 'ladder'],
            ['General Counsel Circle', 'In-house legal leaders discuss regulation, contracts and disputes among peers.', ['Regulation', 'Contracts and disputes', 'Peer questions'], 90, 'scales'],
          ],
        },
      ],
    },

  ],
};

// v242 expansion: extra series/courses/libraries go to the end of their category; new categories sit before Member Access (src/data/privilegesMore.js).
PRIV.categories.forEach((cat) => { if (PRIV_MORE_ITEMS[cat.title]) cat.items.push(...PRIV_MORE_ITEMS[cat.title]); });
(() => { const at = PRIV.categories.findIndex((c) => c.title === 'Member Access'); PRIV.categories.splice(at < 0 ? PRIV.categories.length : at, 0, ...PRIV_NEW_CATEGORIES); })();
// v243 institutional tier: advanced courses, frameworks, toolkits, briefings, research and services (src/data/privilegesInstitutional.js)
PRIV.categories.forEach((cat) => {
  if (PRIV_INST_ITEMS[cat.title]) cat.items.push(...PRIV_INST_ITEMS[cat.title]);
  if (cat.title === 'Research & Reports') cat.items.push(PRIV_INST_RESEARCH);
  if (cat.title === 'Member Access') cat.items.push(PRIV_INST_ACCESS);
});

// ---- helpers ------------------------------------------------------------------------------------------------------------
const slug = (s = '') => String(s).toLowerCase().trim().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const PRIV_FORMATS = {
  podcast: { label: 'Podcast', noun: 'Episode', unit: 'min listen', verb: 'Listen', cta: 'Listen to this episode', icon: 'mic' },
  course: { label: 'Masterclass', noun: 'Lesson', unit: 'min lesson', verb: 'Watch', cta: 'Start this lesson', icon: 'cap' },
  guide: { label: 'Guide', noun: 'Guide', unit: 'min read', verb: 'Read', cta: 'Get the guide', icon: 'doc' },
  video: { label: 'Video', noun: 'Video', unit: 'min watch', verb: 'Watch', cta: 'Watch this video', icon: 'play' },
  tool: { label: 'Tool', noun: 'Tool', unit: 'min to use', verb: 'Use', cta: 'Get this tool', icon: 'tool' },
  report: { label: 'Report', noun: 'Report', unit: 'min read', verb: 'Read', cta: 'Get the report', icon: 'doc' },
  event: { label: 'Event', noun: 'Event', unit: 'min session', verb: 'Join', cta: 'Request a place', icon: 'star' },
  access: { label: 'Member access', noun: 'Session', unit: 'min session', verb: 'Join', cta: 'Request an invitation', icon: 'star' },
};

// path -> real file. Add { src, kind: 'audio'|'video'|'file', poster? } to switch a page from "request" to real playback or download.
//   e.g.  'privileges/podcasts/dubai-briefing-episodes/dubai-2040-in-motion': { kind: 'audio', src: '/media/dubai-2040.mp3' },
export const MEDIA = {};

// An episode that already exists on the NK&CO Briefing platform links across to its full page.
const BRIEFING_EPISODE = {
  'Dubai 2040 in Motion': 'dubai-2040-in-motion',
  'AI in the Enterprise': 'ai-in-enterprise',
  'DIFC at Twenty': 'difc-at-20',
  'The Private Credit Turn': 'private-credit-inflection',
  'Sovereign Capital and Where It Goes': 'sovereign-flows',
  'Grade-A Office and the New Occupier Map': 'grade-a-office',
  'The Industrial Supercycle': 'logistics-supercycle',
  'The Hotel Cycle': 'hospitality-cycle',
  'The Quiet Reinvention of the Family Office': 'family-office-governance',
};

const mapPiece = (p, cat, item) => {
  const path = ['privileges', slug(cat.title), slug(item.label), slug(p[0])].join('/');
  return {
    title: p[0], description: p[1], points: p[2], minutes: p[3], format: cat.format, path,
    briefing: cat.format === 'podcast' ? BRIEFING_EPISODE[p[0]] || null : null,
    media: MEDIA[path] || null,
  };
};


// ---- pictures: every page gets its own drawn plate (motif + accent colour), so no two pages look alike ----------------
// Motifs come from the data above (category.motif, item.motif, piece[4]); names are those of src/lib/topicPlate.js.
// The accent steps round the colour wheel by 47 degrees per page: distinct for the first 360 pages.
// first 360 pages keep their original colour; after that (hue repeats) saturation and lightness step so accents stay distinct
const accentFor = (n) => { const lap = Math.floor(n / 360); return `hsl(${(n * 47) % 360}, ${36 + lap * 9}%, ${34 + lap * 7}%)`; };
export const PRIV_ART = {};
(() => {
  let n = 0;
  const put = (path, motif) => { PRIV_ART[path] = { motif: motif || 'compass', accent: accentFor(n) }; n += 1; };
  put('privileges', 'compass');
  PRIV.categories.forEach((cat) => {
    put(`privileges/${slug(cat.title)}`, cat.motif);
    cat.items.forEach((item) => {
      put(`privileges/${slug(cat.title)}/${slug(item.label)}`, item.motif);
      item.pieces.forEach((p) => put(`privileges/${slug(cat.title)}/${slug(item.label)}/${slug(p[0])}`, p[4]));
    });
  });
})();
// art for a page given its labels (any level may be empty)
export const privArt = (cat, item, piece) => PRIV_ART[['privileges', cat && slug(cat), item && slug(item), piece && slug(piece)].filter(Boolean).join('/')] || PRIV_ART.privileges;

// path ('privileges/<cat>/<item>/<piece>' or shorter) -> record. Built once.
const INDEX = {};
export const PRIV_ALL = [];
PRIV.categories.forEach((cat) => {
  const cRec = { level: 'category', cat, path: `privileges/${slug(cat.title)}` };
  INDEX[cRec.path] = cRec;
  cat.items.forEach((item) => {
    const iRec = { level: 'item', cat, item, path: `${cRec.path}/${slug(item.label)}` };
    INDEX[iRec.path] = iRec;
    item.list = item.pieces.map((p) => mapPiece(p, cat, item));
    item.list.forEach((piece) => {
      const rec = { level: 'piece', cat, item, piece, path: piece.path };
      INDEX[piece.path] = rec;
      PRIV_ALL.push(rec);
    });
  });
});

export const privRecord = (...parts) => INDEX[parts.filter(Boolean).join('/')] || null;
export const privHref = (rec) => '/' + rec.path;
export const privLabel = (rec) => (rec.level === 'piece' ? rec.piece.title : rec.level === 'item' ? rec.item.label : rec.cat.title);
export const formatMeta = (cat) => PRIV_FORMATS[cat.format];

// One-line description for any level, used by the menu, SEO and page lead.
export function privLead(rec) {
  if (!rec) return PRIV.description;
  if (rec.level === 'piece') return rec.piece.description;
  if (rec.level === 'item') return rec.item.lead;
  return rec.cat.description;
}

// Menu lookups (consumed by megaChildDescriptions / megaItemDescriptions / megaFeatured / serviceContent)
export const PRIV_CHILD_DESC = {};
export const PRIV_ITEM_DESC = {};
export const PRIV_LEAF_LEAD = {};
export const PRIV_ITEM_LEAD = {};
export const PRIV_COL_LEAD = {};
PRIV.categories.forEach((cat) => {
  PRIV_COL_LEAD[`privileges/${slug(cat.title)}`] = cat.description;
  cat.items.forEach((item) => {
    PRIV_ITEM_LEAD[`privileges/${slug(cat.title)}/${slug(item.label)}`] = item.lead;
    PRIV_ITEM_DESC[`privileges|${cat.title}|${item.label}`] = item.blurb;
    item.list.forEach((p) => {
      // short menu line: first sentence, trimmed
      const dot = p.description.indexOf('. ');
      const first = dot > 0 ? p.description.slice(0, dot + 1) : p.description;
      // Written short lines (privilegesMenuLines.js) fit one menu row. New pieces without one get a clean trim at a comma or word, never an ellipsis.
      const fallback = (() => {
        const t = first.replace(/[.!?]+$/, '');
        if (t.length <= 62) return t + '.';
        const head = t.slice(0, 62);
        const comma = head.lastIndexOf(', ');
        const cut = comma >= 28 ? comma : head.lastIndexOf(' ');
        return head.slice(0, cut).replace(/[,;:]$/, '').replace(/\s+(and|or|the|a|an|of|to|in|for|with|that|how)$/i, '') + '.';
      })();
      PRIV_CHILD_DESC[p.title] = PRIV_MORE_LINES[p.title] || PRIV_MENU_LINES[p.title] || fallback;
      PRIV_LEAF_LEAD[p.path] = p.description;
    });
  });
});

// Featured card in the menu: one per category (`_`) and one per item.
export const PRIV_FEATURED = {};
PRIV.categories.forEach((cat) => {
  const f = {
    Podcasts: ['Listen: eight audio series on Dubai, Gulf capital, policy, the sectors and the operators', 'Conversations with partners and guests, from the city to the family office and from banking to the hotel, the shop, the clinic and the building site.'],
    Masterclasses: ['Learn at your own pace: thirteen masterclasses from our partners', 'Video lessons with notes and exercises on property, setting up, capital, governance, banking, technology, energy, hospitality, retail, healthcare, education and construction.'],
    'Guides & Playbooks': ['Practical guides for buyers, founders, investors and operators', 'Step-by-step reading, operator playbooks and sector guides with checklists, written to be used rather than just read.'],
    'Video & Webinars': ['Explained in minutes: short videos and full webinars', 'One idea per explainer, sector briefings, and full sessions with the audience\u2019s questions answered.'],
    'Tools & Templates': ['Working files: calculators, checklists and templates', 'Test your numbers and prepare your paperwork with the same tools our teams use, for property, for other sectors and for the people who run sites.'],
    'Research & Reports': ['Read: market reports, sector outlooks, data notes and regulatory updates', 'Research written for people who have to make decisions: what is happening, why it matters and what to do next.'],
    'Meetings & Events': ['Meet: breakfast briefings, summits, workshops, site visits and online sessions', 'Sessions run by NK&CO partners, from a one-hour breakfast to a full-day summit, with places by request.'],
    'Programmes & Cohorts': ['Develop: programmes for founders, executives and the next generation', 'Small cohorts with a clear curriculum and a named partner, built around real cases.'],
    'Member Access': ['Members\u2019 access: private briefings, roundtables, sector circles and priority access', 'Sessions and services reserved for clients and members of NK&CO, by invitation.'],
  }[cat.title];
  PRIV_FEATURED[cat.title] = { _: f };
  cat.items.forEach((item) => { PRIV_FEATURED[cat.title][item.label] = [item.label + ': ' + item.blurb.replace(/\.$/, ''), item.lead]; });
});
