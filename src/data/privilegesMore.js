// v242 · Privileges expansion. Merged into PRIV in privileges.js (new series are appended to existing categories, new categories sit before Member Access).
// Piece helper: P(title, menuLine, description, [three points], minutes, motif). The menu line is the short one-line text used in the menu
// (keep under about 62 characters, no ellipsis). All copy is draft: no guests, dates, figures or regulators are named. Sessions and programmes are proposals.

export const PRIV_MORE_LINES = {};
export const P = (title, line, desc, points, minutes, motif) => { PRIV_MORE_LINES[title] = line; return [title, desc, points, minutes, motif]; };

// ---- new series / courses / libraries added to the existing categories -------------------------------------------------
export const PRIV_MORE_ITEMS = {
  Podcasts: [
    {
      label: 'Policy Desk Episodes', motif: 'scales',
      blurb: 'Rules, regulators and what changes mean for business.',
      lead: 'Short conversations on the rules that shape business in the UAE: what is changing, who it affects and how to prepare in time.',
      who: 'Owners, finance heads and advisers who need to act on rule changes, not just read about them.',
      pieces: [
        P('Property Law in Plain Terms', 'The rules that matter to buyers, owners and landlords.', 'The property rules that matter most to buyers, owners and landlords, and where people most often go wrong.', ['Rules buyers should know', 'Duties of owners and landlords', 'Common mistakes'], 32, 'scales'),
        P('Corporate Tax, One Year On', 'What companies have learned since registering.', 'What companies have learned since the tax began: registration, records, filing and the questions that keep coming up.', ['Registration and records', 'Filing in practice', 'Questions that keep returning'], 35, 'document'),
        P('Employment Law for Growing Teams', 'Contracts, notice and end of service as a team grows.', 'How contracts, probation, notice and end of service work as a team grows, and what employers should write down.', ['Contracts and probation', 'Notice and end of service', 'What to put in writing'], 31, 'people'),
        P('Free Zone Rules and Where They Stop', 'What a free zone licence does and does not allow.', 'What a free zone licence allows, where its limits sit and what to do when a business outgrows them.', ['What the licence allows', 'Where the limits sit', 'When to move or add a licence'], 30, 'map'),
        P('Compliance Without the Panic', 'A calm routine for staying inside the rules.', 'A calm, regular routine for staying inside the rules, built around calendars, named owners and short checks.', ['A calendar everyone can see', 'Owners for each task', 'Short monthly checks'], 28, 'checklist'),
      ],
    },
  ],
  Masterclasses: [
    {
      label: 'Sales, Marketing and Growth', motif: 'megaphone',
      blurb: 'Five lessons on winning clients and growing steadily.',
      lead: 'A short course on finding the right clients, making a clear offer, pricing fairly and growing without losing quality.',
      who: 'Founders and sales leads in service businesses who want a simple, repeatable way to grow.',
      pieces: [
        P('Who Your Client Really Is', 'Defining the client you serve best.', 'Define the client you serve best and what they are actually buying from you.', ['A one-page client profile', 'What they are really buying', 'Where to find more of them'], 18, 'target'),
        P('Making a Clear Offer', 'Say what you do, for whom and at what price.', 'How to say what you do, for whom and at what price, in a few plain sentences.', ['The offer in three sentences', 'Proof that supports it', 'What to leave out'], 17, 'pen'),
        P('Pricing and Proposals', 'Setting a price and writing a proposal that wins.', 'How to set a fair price and write a short proposal that makes the decision easy.', ['Ways to set a price', 'A short proposal layout', 'Handling a request to cut the price'], 21, 'tag'),
        P('Building a Pipeline', 'Tracking leads from first contact to signed work.', 'Track every lead from first contact to signed work, and see where opportunities are lost.', ['Stages of a pipeline', 'What to record at each stage', 'A weekly review'], 19, 'funnel'),
        P('Keeping Clients and Growing Accounts', 'Why clients stay, and how accounts grow.', 'Why clients stay, how to check in without nagging and how an account grows over time.', ['Regular check-ins', 'Spotting a client at risk', 'Growing an existing account'], 20, 'repeat'),
      ],
    },
  ],
  'Guides & Playbooks': [
    {
      label: 'Compliance Playbooks', motif: 'checklist',
      blurb: 'Routines for staying inside the rules.',
      lead: 'Step-by-step playbooks for the filings, records and checks a company has to keep up, with owners and calendars built in.',
      who: 'Finance heads, company secretaries and owners who are responsible for compliance.',
      pieces: [
        P('The Annual Filings Playbook', 'Every yearly filing, who owns it and when.', 'A working list of the filings a company makes each year, who owns each one and when it falls due.', ['A yearly filing calendar', 'An owner for each filing', 'Checks before submitting'], 14, 'calendar'),
        P('The Records and Retention Playbook', 'What records to keep, for how long and where.', 'What records to keep, for how long and where, so that an inspection or audit is a routine event.', ['Records by type', 'Where to keep them', 'When to review and clear'], 13, 'document'),
        P('The Licence Renewal Playbook', 'A calm path through renewals, with early warnings.', 'A calm path through licence renewals, with early warnings and a short list of documents to gather.', ['Dates and early warnings', 'Documents to gather', 'What delays a renewal'], 12, 'seal'),
        P('The Know-Your-Customer Basics Playbook', 'Check who you deal with, and record that you did.', 'The basic steps for checking who you are dealing with, recording the checks and raising a concern.', ['Who to check and when', 'What to record', 'How to raise a concern'], 15, 'search'),
        P('The Data Protection Playbook', 'Handle personal data with simple, written routines.', 'Simple, written routines for handling the personal data of customers and staff.', ['What personal data you hold', 'Who may see it', 'What to do after a mistake'], 13, 'lock'),
      ],
    },
  ],
  'Video & Webinars': [
    {
      label: 'Money and Markets Explained', motif: 'coins',
      blurb: 'Three to six minutes on how money and markets work.',
      lead: 'Short videos that explain the money side of business and property in plain terms, one idea at a time.',
      who: 'Owners and first-time investors who want each idea clear and free of jargon.',
      pieces: [
        P('What a Yield Is', 'Yield explained in plain terms, with one example.', 'Yield explained in plain terms, with one simple example you can repeat on your own numbers.', ['What yield measures', 'Gross and net', 'A worked example'], 4, 'growth'),
        P('How Interest Rates Reach You', 'How rate changes reach loans, rents and prices.', 'How a change in interest rates travels through to loans, rents and prices.', ['From central bank to lender', 'What changes for a borrower', 'What changes for a landlord'], 5, 'gauge'),
        P('Debt, Equity and the Mix', 'Two ways to fund a business, and when to use each.', 'Two ways to fund a business, what each costs and how to think about the mix.', ['What debt asks of you', 'What equity asks of you', 'Choosing the mix'], 5, 'swap'),
        P('What a Valuation Is', 'How a price is put on a business or property.', 'How a price is put on a business or a property, and why two sensible people can differ.', ['Three common methods', 'What moves a value', 'Reading someone else\u2019s valuation'], 6, 'scales'),
        P('Reading a Balance Sheet', 'The three parts of a balance sheet, in plain terms.', 'The three parts of a balance sheet, what each tells you and what to look at first.', ['Assets and liabilities', 'What equity shows', 'Three questions to ask'], 5, 'document'),
      ],
    },
  ],
  'Tools & Templates': [
    {
      label: 'Finance Toolkits', motif: 'coins',
      blurb: 'Working files for cash, budgets and funding.',
      lead: 'Spreadsheet-style tools for forecasting cash, tracking budgets and getting ready to raise money, with every assumption visible.',
      who: 'Founders and finance leads who want a working file rather than a lecture.',
      pieces: [
        P('Cash Flow Forecast', 'A rolling cash forecast with every assumption shown.', 'A rolling cash forecast that shows every assumption, so you can see when money gets tight before it does.', ['Money in and money out', 'Assumptions you can change', 'A view of the lowest point'], 20, 'gauge'),
        P('Budget Versus Actual Tracker', 'Compare plan with results and see what moved.', 'Compare your plan with the results each month and see which lines moved and why.', ['Plan and actual side by side', 'Variance by line', 'Notes for the next month'], 15, 'bars'),
        P('Invoice and Payment Tracker', 'See what is owed to you and when it is due.', 'See what you are owed, what is overdue and who needs a reminder.', ['Invoices by status', 'Ageing of what is owed', 'A reminder routine'], 10, 'checklist'),
        P('Funding Data Room Checklist', 'What to gather before investors ask.', 'The documents and numbers to gather before investors or lenders ask for them.', ['Company and legal papers', 'Financials and forecasts', 'Contracts and key people'], 12, 'vault'),
        P('Valuation Worksheet', 'A simple worksheet for a first view of value.', 'A simple worksheet for a first view of value, with each step and assumption laid out.', ['Inputs you need', 'Two methods side by side', 'A range, not one number'], 18, 'scales'),
      ],
    },
  ],
};

// ---- new top-level categories (inserted before Member Access) ---------------------------------------------------------
export const PRIV_NEW_CATEGORIES = [
  {
    title: 'Research & Reports', format: 'report', noun: 'report', motif: 'newspaper',
    description: 'Market reports, sector outlooks, data notes and regulatory updates from NK&CO, written for people who have to make decisions.',
    viewAll: 'See all Research & Reports',
    items: [
      {
        label: 'Market Reports', motif: 'bars',
        blurb: 'Periodic reports on the main property and capital markets.',
        lead: 'Reports on the property and capital markets that matter to our clients: what is happening, why, and what to watch next.',
        who: 'Investors, owners and developers who follow the market closely.',
        pieces: [
          P('The Dubai Residential Report', 'Prices, rents, supply and what they mean for buyers.', 'A periodic review of the residential market: prices, rents, supply and what they mean for buyers and landlords.', ['Prices and rents', 'New supply', 'What to watch next'], 18, 'house'),
          P('The Office and Industrial Report', 'Occupier demand, rents and new space across the Emirates.', 'A periodic review of offices and industrial space: occupier demand, rents and new supply.', ['Occupier demand', 'Rents and incentives', 'New supply'], 18, 'tower'),
          P('The Hotel and Leisure Report', 'Demand, rates and the pipeline in hospitality.', 'A periodic review of hotels and leisure: demand, room rates and the pipeline of new space.', ['Demand signals', 'Rates and occupancy', 'The pipeline'], 16, 'hotel'),
          P('The Gulf Capital Markets Report', 'Lending, listings and issuance across the Gulf.', 'A periodic review of lending, listings and issuance across the Gulf, and what they signal for borrowers and investors.', ['Lending conditions', 'Listings and issuance', 'What it means for borrowers'], 20, 'bank'),
        ],
      },
      {
        label: 'Sector Outlooks', motif: 'eye',
        blurb: 'A forward view of one sector at a time.',
        lead: 'Each outlook takes one sector and sets out where demand is heading, what could change it and what operators and investors should do about it.',
        who: 'Operators and investors planning a year or more ahead in a single sector.',
        pieces: [
          P('Banking and Finance Outlook', 'Where lending, deposits and digital services are heading.', 'Where lending, deposits and digital services are heading, and what could change the picture.', ['Demand for credit', 'Deposits and funding', 'Digital services'], 16, 'bank'),
          P('Technology and AI Outlook', 'Where regional technology spending is heading.', 'Where technology and AI spending in the region is heading, and where projects tend to stall.', ['Where spending goes', 'Skills and suppliers', 'Risks to plan for'], 16, 'network'),
          P('Energy and Infrastructure Outlook', 'Where power and infrastructure projects are heading.', 'Where power and infrastructure projects are heading, how they are financed and who delivers them.', ['Projects in progress', 'How they are financed', 'Delivery risks'], 17, 'leaf'),
          P('Healthcare and Education Outlook', 'Where demand for care and schooling is heading.', 'Where demand for healthcare and education is heading, and what it means for operators and investors.', ['Demand drivers', 'Capacity and staffing', 'What investors ask'], 17, 'cross'),
        ],
      },
      {
        label: 'Data Notes', motif: 'heat',
        blurb: 'Short notes built around one set of numbers.',
        lead: 'One chart or table and a page of explanation: what the numbers show, how they were put together and what they do not tell you.',
        who: 'Readers who want a quick, honest read of the numbers.',
        pieces: [
          P('Rents and Yields: A Data Note', 'How rents and yields compare across areas.', 'How rents and yields compare across areas, and what the gap between them can and cannot tell you.', ['What was measured', 'How areas compare', 'Limits of the data'], 7, 'growth'),
          P('The Supply Pipeline: A Data Note', 'What is due to complete, and what tends to slip.', 'What is due to complete, what tends to slip and how to read a pipeline figure with care.', ['Announced and under way', 'What tends to slip', 'Reading the figure'], 7, 'timeline'),
          P('Transactions and Prices: A Data Note', 'How sales volumes and prices move together.', 'How sales volumes and prices move together, and why one can rise while the other falls.', ['Volume against price', 'Different kinds of sale', 'Limits of the data'], 7, 'bars'),
          P('The Cost of Setting Up: A Data Note', 'First-year set-up costs, laid out side by side.', 'First-year set-up costs laid out side by side, with the lines that are easy to miss.', ['The main cost lines', 'Lines easy to miss', 'How to use the table'], 6, 'coins'),
        ],
      },
      {
        label: 'Regulatory Updates', motif: 'seal',
        blurb: 'Plain-language notes when the rules change.',
        lead: 'Short notes on new or changed rules: what is different, who is affected and what to do by when.',
        who: 'Owners, finance heads and advisers who need to act on rule changes.',
        pieces: [
          P('Property Rules Update', 'What changed for buyers, owners and landlords.', 'What changed for buyers, owners and landlords, and what each group should do next.', ['What is different', 'Who is affected', 'Actions and dates'], 8, 'scales'),
          P('Corporate Tax Update', 'What changed for registration, records and filing.', 'What changed for company registration, records and filing, and what to do by when.', ['What is different', 'Who is affected', 'Actions and dates'], 8, 'document'),
          P('Employment Rules Update', 'What changed for contracts, leave and end of service.', 'What changed for contracts, leave and end of service, and what employers should update.', ['What is different', 'Who is affected', 'Actions and dates'], 8, 'people'),
          P('Licensing and Free Zone Update', 'What changed for activities, approvals and renewals.', 'What changed for licensed activities, approvals and renewals, in the free zones and on the mainland.', ['What is different', 'Who is affected', 'Actions and dates'], 8, 'map'),
        ],
      },
    ],
  },
  {
    title: 'Meetings & Events', format: 'event', noun: 'event', motif: 'calendar',
    description: 'Breakfast briefings, summits, workshops, site visits and online sessions run by NK&CO. Places are by request, and the team confirms dates and details.',
    viewAll: 'See all Meetings & Events',
    items: [
      {
        label: 'Breakfast Briefings', motif: 'calendar',
        blurb: 'Early, short sessions with one clear subject.',
        lead: 'A short morning session with a partner and a small group: one subject, time for questions and a one-page note to take away.',
        who: 'Owners and leaders who want a focused hour before the working day.',
        pieces: [
          P('Dubai Market Breakfast', 'The market in one hour, with time for questions.', 'The state of the market in one hour, led by a partner, with time for questions.', ['A short market view', 'Questions from the table', 'A one-page note afterwards'], 75, 'house'),
          P('Founders Breakfast', 'Set-up, funding and hiring questions for founders.', 'A morning for founders to put set-up, funding and hiring questions to a partner and to one another.', ['A short opening talk', 'Questions on set-up and funding', 'Peer introductions'], 75, 'bulb'),
          P('Investor Breakfast', 'A short view of deals and capital, with discussion.', 'A short view of deals and capital conditions, followed by open discussion among investors.', ['Capital conditions', 'Deals being discussed', 'Open discussion'], 75, 'handshake'),
          P('Operators Breakfast', 'Running sites and teams, among operators.', 'Operators of hotels, shops, clinics, schools and sites compare notes on running teams and sites.', ['One topic for the morning', 'Practical exchange', 'A note of what was shared'], 75, 'people'),
        ],
      },
      {
        label: 'Conferences and Summits', motif: 'megaphone',
        blurb: 'Larger gatherings on a single theme.',
        lead: 'Larger gatherings that bring clients, partners and invited guests together around one theme, with talks, panels and time to meet.',
        who: 'Clients and invited guests who want to meet peers and hear several views in one day.',
        pieces: [
          P('Members Summit', 'A day for members and partners to hear and meet.', 'A day for members, partners and invited guests to hear the partners\u2019 view and meet one another.', ['Opening view from the partners', 'Panels on the main themes', 'Time to meet'], 300, 'star'),
          P('Real Estate Leaders Summit', 'Owners, developers and investors on one theme.', 'Owners, developers and investors gather around one theme in property, with talks and panels.', ['One theme for the day', 'Panels with practitioners', 'Time to meet'], 300, 'tower'),
          P('Capital and Finance Summit', 'Lenders, investors and issuers in one room.', 'Lenders, investors and issuers meet to discuss financing routes, conditions and structures.', ['Financing routes', 'Conditions and structures', 'Time to meet'], 300, 'bank'),
          P('Technology and AI Summit', 'Leaders on putting technology to work.', 'Leaders discuss putting technology and AI to work in a real business, from first test to wide use.', ['From pilot to practice', 'Governance and risk', 'Time to meet'], 300, 'network'),
        ],
      },
      {
        label: 'Workshops and Clinics', motif: 'wrench',
        blurb: 'Hands-on sessions where you work on your own material.',
        lead: 'Small working sessions: you bring your own numbers, papers or questions and leave with something finished or fixed.',
        who: 'Owners and managers who learn best by working on their own material.',
        pieces: [
          P('Corporate Tax Workshop', 'Work through your own registration and records.', 'A working session on your own company\u2019s registration, records and filing, led by a specialist.', ['Your registration status', 'Records you need to keep', 'A filing plan'], 120, 'document'),
          P('Board Effectiveness Workshop', 'Improve your agenda, papers and decisions.', 'Work on your own board agenda and papers, and agree changes that make decisions quicker.', ['Your current agenda', 'Papers that help decisions', 'Agreed changes'], 120, 'org'),
          P('Financial Model Clinic', 'Bring your model and get it reviewed.', 'Bring your own financial model and have its structure and assumptions reviewed.', ['Structure and checks', 'Assumptions to test', 'Fixes to make'], 120, 'bars'),
          P('Hiring and Contracts Clinic', 'Bring a role or a contract and get it checked.', 'Bring a role description or an employment contract and have it checked against common good practice.', ['Role and pay', 'Contract terms', 'Visa and onboarding steps'], 120, 'briefcase'),
        ],
      },
      {
        label: 'Site Visits and Tours', motif: 'pin',
        blurb: 'See projects, sites and operations first-hand.',
        lead: 'Guided visits to projects and working sites, led by the people who run them, with time to ask what you would not see in a brochure.',
        who: 'Buyers, investors and occupiers who want to see before they commit.',
        pieces: [
          P('Off-Plan Site Visit', 'Walk a project site with its team.', 'Walk a project site with its team and ask about progress, programme and handover.', ['Progress on site', 'Programme and handover', 'Questions for the team'], 150, 'crane'),
          P('Industrial and Logistics Tour', 'See how a working warehouse is run.', 'See how a working warehouse or logistics site is laid out, run and kept safe.', ['Layout and flow', 'Safety and staffing', 'Questions for the operator'], 150, 'warehouse'),
          P('Hospitality Walk-Through', 'See a hotel from the back of house.', 'See a hotel from the back of house: how rooms, kitchens and teams work together.', ['Rooms and housekeeping', 'Kitchen and service', 'Questions for the manager'], 150, 'hotel'),
          P('Developer Showcase Tour', 'Visit completed projects with the developer.', 'Visit completed projects with the developer and see how they have aged since handover.', ['Finish and quality', 'Service and upkeep', 'Questions for the developer'], 180, 'house'),
        ],
      },
      {
        label: 'Virtual Sessions', motif: 'screen',
        blurb: 'Short online sessions you can join from anywhere.',
        lead: 'Short online sessions on markets, rules and the questions of the moment, open to members and clients wherever they are.',
        who: 'Busy leaders who want the view of the partners without travelling.',
        pieces: [
          P('Monthly Market Call', 'A short call on what moved in the month.', 'A short online call on what moved in the markets during the month and what to watch next.', ['What moved', 'What to watch', 'Live questions'], 45, 'growth'),
          P('Regulation Update Webinar', 'A live walk-through of new rules, with questions.', 'A live walk-through of new or changed rules, with time for questions on how they apply to you.', ['What is new', 'How it applies', 'Live questions'], 45, 'seal'),
          P('Ask the Partners Live', 'Put your questions live to NK&CO partners.', 'Put your own questions live to NK&CO partners, on any subject from the library.', ['Questions sent in advance', 'Live questions', 'A short written follow-up'], 60, 'mic'),
          P('Quarterly Themes Call', 'A short review of the quarter\u2019s main themes.', 'A short online review of the main themes of the quarter and what they mean for members.', ['The quarter\u2019s themes', 'What it means for you', 'Live questions'], 45, 'calendar'),
        ],
      },
    ],
  },
  {
    title: 'Programmes & Cohorts', format: 'event', noun: 'programme', motif: 'ladder',
    description: 'Structured programmes for founders, executives and the next generation of family owners: a small cohort, a clear curriculum and a named partner. Places are by request.',
    viewAll: 'See all Programmes & Cohorts',
    items: [
      {
        label: 'Founder Programme', motif: 'bulb',
        blurb: 'A guided path from idea to a running company.',
        lead: 'A small cohort of founders works through the steps of setting up, funding and staffing a company, with a named partner and regular reviews.',
        who: 'Founders in their first years who want structure and a sounding board.',
        pieces: [
          P('Set-Up Sprint', 'A guided sprint from decision to trading.', 'A guided sprint from the decision to start through licensing, banking and a first day of trading.', ['Choosing a jurisdiction', 'Licence and bank account', 'Ready to trade'], 180, 'compass'),
          P('Funding Readiness Lab', 'Get your story and numbers ready for investors.', 'Prepare your story, numbers and papers so that you are ready when investors or lenders ask.', ['Your story in one page', 'Numbers that hold up', 'Papers in order'], 180, 'funnel'),
          P('First Hires Cohort', 'Hire and contract your first people well.', 'Work with other founders on roles, hiring order, contracts and the first weeks of a new hire.', ['Roles and order of hiring', 'Contracts and visas', 'The first weeks'], 180, 'people'),
          P('Growth Review Sessions', 'Regular reviews of your plan with a partner.', 'Regular reviews of your plan, numbers and priorities with a named partner.', ['Plan against results', 'Priorities for the next quarter', 'Decisions to take'], 90, 'target'),
        ],
      },
      {
        label: 'Executive Learning', motif: 'cap',
        blurb: 'Practical programmes for people moving into wider roles.',
        lead: 'Practical programmes for senior people stepping into a bigger role, built around real cases and led by partners with experience of the work.',
        who: 'Directors, finance heads and managers taking on more responsibility.',
        pieces: [
          P('Board Director Programme', 'Practical grounding for new and aspiring directors.', 'Practical grounding for new and aspiring directors: duties, papers, committees and good questions.', ['Duties of a director', 'Reading board papers', 'Asking good questions'], 240, 'org'),
          P('Finance Leadership Programme', 'For finance heads moving into wider roles.', 'For finance heads moving into wider roles: funding, reporting, controls and working with the board.', ['Funding and reporting', 'Controls and risk', 'Working with the board'], 240, 'bars'),
          P('Operations Leadership Programme', 'For managers running sites and teams.', 'For managers running sites and teams: planning, standards, people and the numbers that matter.', ['Planning and standards', 'Leading teams', 'Numbers to watch'], 240, 'gears'),
          P('Technology Leadership Programme', 'For leaders buying and running technology.', 'For leaders who buy and run technology: choosing suppliers, managing projects and judging results.', ['Choosing suppliers', 'Managing delivery', 'Judging results'], 240, 'network'),
        ],
      },
      {
        label: 'Next Generation', motif: 'ladder',
        blurb: 'Programmes for the younger members of owning families.',
        lead: 'Programmes that prepare younger family members to take part in the business and its investments, with mentors and peers.',
        who: 'Younger family principals and the families who want to prepare them.',
        pieces: [
          P('Family Business Foundations', 'How a family business and its owners work.', 'How a family business and its owners work together, from ownership and roles to decisions.', ['Ownership and roles', 'How decisions are made', 'Working with elders'], 180, 'house'),
          P('Investing Basics for Heirs', 'First principles of investing, without jargon.', 'First principles of investing, without jargon: risk, return, time and how to review a holding.', ['Risk and return', 'Time and patience', 'Reviewing a holding'], 180, 'growth'),
          P('Governance for the Next Generation', 'Councils, roles and decision rules, explained.', 'Councils, roles and decision rules explained for those about to take a seat at the table.', ['What a council does', 'Roles and rules', 'Handling disagreement'], 180, 'scales'),
          P('The Mentoring Circle', 'Younger principals paired with experienced mentors.', 'Younger principals are paired with experienced mentors and meet in a small circle through the year.', ['A named mentor', 'Regular circle meetings', 'Questions from the group'], 90, 'handshake'),
        ],
      },
    ],
  },
];
