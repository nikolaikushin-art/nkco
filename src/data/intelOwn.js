// Intelligence library: research, data and publications written for the Intelligence section.
//   category: { title, format, noun, motif, description, viewAll, items }   item: { label, blurb, lead, who, motif, pieces }   piece: [title, description, [3 points], minutes, motif]
// Information only, not advice. Edit any text freely.
const mk = (label, motif, blurb, lead, who, rows) => ({
  label, motif, blurb, lead, who,
  pieces: rows.map(([title, description, points, minutes, m]) => [title, description, points, minutes, m || motif]),
});

export const INTEL_OWN_CATEGORIES = [
  {
    title: 'Sector & Thematic Research', format: 'report', noun: 'report', motif: 'newspaper',
    description: 'Sector reports, thematic whitepapers and executive briefings on the UAE and GCC.',
    viewAll: 'See all research',
    items: [
      mk('Sector Reports', 'newspaper', 'In-depth reviews of one sector at a time.', 'Each report sets out how a sector is structured, what is changing and what owners and operators should watch. Information only, not advice.', 'Owners, boards and investors who need a sector explained in one document.', [
        ['Real Estate UAE', 'How the UAE property market is organised: the segments, who supplies and who buys, and the rules that shape each. Written for business owners rather than brokers.', ['How residential, commercial and off-plan segments differ', 'Which rules change what a company or buyer can do', 'Where licensed brokers and valuers take over'], 14, 'building'],
        ['Financial Services', 'How banks, insurers and advisers are changing the way they serve business customers, and what that means for companies that borrow, insure or raise funds.', ['What lenders and insurers now ask for first', 'How digital channels change service and speed', 'Which questions to settle before approaching a provider'], 12, 'coins'],
        ['Energy & Sustainability', 'Where energy supply, efficiency and sustainable business practice are moving in the region, seen from the position of a company that has to budget for them.', ['Which cost lines are most exposed to energy change', 'How reporting expectations are reaching mid-sized firms', 'What makes some efficiency projects slower to deliver than others'], 13, 'bulb'],
        ['Technology & Media', 'How technology and media companies are building, funding and selling in the Gulf, and what buyers and partners look at when they assess one.', ['How these companies make and keep revenue', 'What partners and acquirers check first', 'Where talent and licensing limit growth'], 11, 'network'],
        ['Healthcare & Life Sciences', 'How care providers, suppliers and investors are positioning for demand in the UAE, with attention to licensing and staffing, the two constraints owners meet most.', ['How demand and capacity are changing', 'What licensing and staffing mean for a start or a sale', 'Which operating measures a buyer will ask to see'], 15, 'people'],
      ]),
      mk('Thematic Whitepapers', 'compass', 'Long-form analysis of the forces reshaping business.', 'Whitepapers follow one theme across sectors: what is driving it, who is affected and how leaders are responding. Information only, not advice.', 'Leadership teams planning beyond the next budget cycle.', [
        ['AI & Enterprise', 'Where companies are moving from pilots to everyday use of AI, and the governance, data and skills that decide whether a pilot survives.', ['Tasks where AI already earns its place', 'Why data quality decides most outcomes', 'A simple governance model that does not slow teams down'], 18, 'network'],
        ['Sustainability', 'How sustainability moves from a reporting exercise to a set of decisions about cost, capital and customers, and how a mid-sized company can start in proportion.', ['What customers and lenders now ask suppliers', 'How to size a first programme sensibly', 'Where claims need evidence before they are made'], 16, 'bulb'],
        ['Geopolitics', 'How shifting trade routes, sanctions regimes and capital flows affect companies based in the Gulf, and the scenarios a board can reasonably plan against.', ['Which exposures are direct and which are indirect', 'Scenarios worth stress-testing', 'Signals to monitor without over-reacting'], 17, 'map'],
        ['Demographics', 'How population growth, talent mobility and household change shape demand for housing, services and skills across the region.', ['Who is arriving, who is leaving and why', 'What changing households buy and rent', 'How employers can plan for a shifting workforce'], 15, 'people'],
      ]),
      mk('Executive Briefings', 'scales', 'Short, decision-ready notes for CEOs, boards and investors.', 'Briefings are written to be read in minutes: the development, why it matters and the question to ask next. Information only, not advice.', 'Executives and directors short on time.', [
        ['CEO Insights', 'The issues chief executives are weighing this quarter and how they are framing them, from cost and hiring to expansion and succession.', ['The three questions most often on the table', 'How peers sequence decisions under uncertainty', 'What to prepare before the next board meeting'], 7, 'people'],
        ['Board Perspectives', 'The questions boards are asking on strategy, risk and oversight, and the papers they find most useful when the agenda is crowded.', ['What good board papers have in common', 'Risk questions that are often missed', 'How to keep oversight proportionate'], 8, 'scales'],
        ['Investor Notes', 'What investors in the region ask of the companies they consider, and how a founder or finance lead can prepare answers in advance.', ['The documents asked for in the first call', 'Where numbers are usually challenged', 'How to present a plan without overstating it'], 9, 'coins'],
        ['Policy Briefs', 'Policy changes explained in plain language, with the dates and decisions that follow for companies and landlords.', ['What changed and who it affects', 'Dates to put in the diary', 'Where to read the official text'], 6, 'scales'],
        ['Regulatory Updates', 'Short notes on rule changes that touch companies, each with a pointer to the official source and a list of questions for your adviser.', ['What the rule says in everyday terms', 'Who must act and by when', 'Questions to put to a licensed professional'], 6, 'doc'],
        ['Market Flash Notes', 'One-page notes written when something moves and owners ask what it means: the event, the context and what is not yet known.', ['What happened and what is still unclear', 'Which businesses are most exposed', 'What to watch over the next few weeks'], 4, 'timeline'],
      ]),
    ],
  },
  {
    title: 'Data & Analytics', format: 'data', noun: 'data note', motif: 'chart',
    description: 'Market analytics, deal intelligence and real asset views, explained for decision-makers.',
    viewAll: 'See all data',
    items: [
      mk('Market Analytics', 'chart', 'Pricing, volume and supply trends explained.', 'Notes that read the market\u2019s numbers for you: what moved, in which direction and what may explain it. Information only, not advice.', 'Owners and investors who track the market but not the spreadsheets.', [
        ['Pricing Trends', 'How prices have moved across segments and communities, and what sits behind the movement: supply, financing costs and buyer mix.', ['How to read a price series without being misled', 'Why averages hide differences between segments', 'Which companion measures to check'], 9, 'chart'],
        ['Volume Trends', 'How transaction activity has changed over time and which segments drive it, with notes on seasonality and one-off launches.', ['Volume versus value: why both matter', 'How launches distort a quarter', 'Segments that move first when conditions shift'], 8, 'chart'],
        ['Geographic Heatmaps', 'Where activity is concentrated across the emirate and where it is spreading, read as a map rather than a table.', ['How to read a heatmap and its limits', 'Where activity is moving outward', 'Local factors that explain hot spots'], 7, 'map'],
        ['Sentiment Signals', 'Indicators of how buyers and sellers feel, such as enquiries, listing behaviour and survey results, and how far each can be trusted.', ['Which signals lead and which lag', 'Why surveys and behaviour can disagree', 'How to avoid reading too much into one month'], 8, 'compass'],
        ['Rental Performance', 'How rents and occupancy behave across communities and property types, and what a landlord or tenant company should compare.', ['Rent, occupancy and turnover read together', 'Differences between community types', 'Costs that reduce what an owner keeps'], 10, 'building'],
        ['Supply Pipelines', 'What is due to be delivered, where and when, and how construction delays change the picture for buyers, renters and lenders.', ['How to track announcements against delivery', 'Why completion dates slip', 'What pipeline size means for pricing pressure'], 9, 'timeline'],
        ['Affordability Measures', 'How incomes, prices and borrowing costs combine to shape demand, and the simple ratios worth keeping an eye on.', ['Three affordability ratios and what they miss', 'How borrowing costs shift the monthly picture', 'Who is priced out and who is not'], 8, 'coins'],
      ]),
      mk('Deal Intelligence', 'coins', 'Reading transactions, buyers and comparables.', 'Guides to the evidence behind a deal: who is transacting, on what terms and against which comparables. Information only, not advice.', 'Advisers and principals preparing to buy, sell or raise capital.', [
        ['Transaction Notes', 'How to read completed transactions and what they can and cannot tell you about the value of a business or asset.', ['What a recorded price includes and omits', 'Why timing and terms matter as much as price', 'How to avoid cherry-picked examples'], 10, 'coins'],
        ['Investor Activity', 'Which kinds of investor are active, what they are looking for and how their appetite changes with conditions.', ['Investor types and their typical aims', 'How appetite shifts through a cycle', 'What each type asks first in a process'], 9, 'people'],
        ['Comparable Analysis', 'How to choose and adjust comparables so that a valuation discussion stays grounded, and the common ways comparisons go wrong.', ['Criteria for a fair comparable', 'Adjustments for size, location and terms', 'Warning signs of a flattering set'], 12, 'scales'],
        ['Pipeline Scans', 'A structured way to scan announced and planned deals for signals relevant to your sector, without drowning in headlines.', ['Sources worth scanning and how often', 'How to log and rank what you find', 'How to judge whether a signal matters'], 8, 'timeline'],
        ['Buyer Profiles', 'Typical buyer types for a business or asset, their motives and the questions each one tends to ask.', ['Strategic, financial and family buyers compared', 'What each type values and discounts', 'How to prepare for each type\u2019s questions'], 10, 'people'],
      ]),
      mk('Real Asset Dashboards', 'tower', 'Real estate, infrastructure, logistics and energy at a glance.', 'One-page views of each real asset class: what to track, where the data comes from and how to read it. Information only, not advice.', 'Principals who follow several asset classes at once.', [
        ['Real Estate View', 'The measures worth tracking for property, where to find them and how to read them together on one page.', ['Five measures that cover most questions', 'Official and market sources compared', 'How often each measure is worth reviewing'], 7, 'building'],
        ['Infrastructure View', 'How to follow infrastructure projects from announcement through procurement to delivery, and which stage tells you most.', ['Stages of a project and what each signals', 'Where delays appear first', 'Which companies benefit at which stage'], 8, 'tower'],
        ['Logistics View', 'Warehousing, ports and freight measures and how they connect, so that a change in one can be read across the others.', ['Capacity, throughput and rent compared', 'Free zone and port effects', 'Early signs of tightening or slack'], 8, 'map'],
        ['Energy View', 'The supply, demand and project measures that matter for energy assets, set out so a non-specialist can follow them.', ['The few indicators that carry most information', 'Projects versus operating capacity', 'How policy announcements feed through'], 8, 'bulb'],
      ]),
    ],
  },
  {
    title: 'Publications', format: 'publication', noun: 'edition', motif: 'newspaper',
    description: 'The NK&CO Quarterly, annual outlooks and special editions.',
    viewAll: 'See all publications',
    items: [
      mk('NK&CO Quarterly', 'newspaper', 'Our quarterly review of the market.', 'One edition each quarter: the lead essays, a summary for busy readers and the notes behind them. Information only, not advice.', 'Principals who want a regular, readable view of the region.', [
        ['Q1 Edition', 'The first quarter\u2019s lead essays on capital, property and enterprise, and what they mean for the plans being set for the year.', ['The quarter\u2019s lead essays in brief', 'Themes carried over from the previous year', 'Questions to settle before mid-year'], 20, 'newspaper'],
        ['Q2 Edition', 'A mid-year review: what has changed since January, what has not and what owners should revisit in their budgets.', ['What has moved since the start of the year', 'Plans worth revisiting now', 'Risks that have grown or faded'], 20, 'newspaper'],
        ['Q3 Edition', 'The third quarter\u2019s themes, with attention to planning for year-end: renewals, hiring, funding and filings.', ['Themes of the quarter', 'A year-end planning checklist', 'Decisions that are easier made early'], 20, 'newspaper'],
        ['Q4 Edition', 'The year in review and the questions to settle before the next budget, written for boards and owners.', ['The year in six developments', 'Questions to settle before budgeting', 'What carries into the new year'], 22, 'newspaper'],
        ['Executive Summary', 'Each edition on two pages, for readers who need the conclusions and the next step rather than the full argument.', ['Conclusions in plain language', 'Three questions to consider', 'Where to read further'], 5, 'doc'],
        ['Data Appendix', 'The tables, definitions and sources behind each edition, so that every statement can be checked and every chart reproduced.', ['Definitions used in the edition', 'Source list with dates', 'Notes on limits and revisions'], 12, 'chart'],
        ['Quarterly Forecasts', 'The scenarios we consider plausible for the next quarters, with the assumptions written down so you can disagree with them.', ['Base, upside and downside scenarios', 'The assumptions behind each', 'Signals that would change our view'], 10, 'timeline'],
        ['Regional Spotlights', 'A closer look at one market, district or sector in each edition, with context a newcomer would otherwise lack.', ['Background in a page', 'What makes the place or sector distinctive', 'Practical points for companies operating there'], 9, 'map'],
      ]),
      mk('Annual Outlook', 'compass', 'The year ahead, edition by edition.', 'Outlooks look twelve months forward for the economy, the region, individual sectors and investors. Information only, not advice.', 'Boards and investment teams setting plans for the year.', [
        ['Global Outlook', 'The world economy as it affects Gulf businesses in the coming year: growth, rates, trade and currency, in plain terms.', ['Main global forces for the year', 'How each reaches a Gulf company', 'Which exposures to watch closely'], 18, 'map'],
        ['GCC Outlook', 'The region\u2019s main economies, policy direction and risks, with a short section for each market.', ['A page on each major market', 'Policy direction and its pace', 'Cross-border risks and openings'], 20, 'compass'],
        ['Sector Editions', 'Outlooks written one sector at a time, so a board can read only the chapter that concerns it.', ['Demand and cost drivers for the sector', 'Regulation to watch', 'Questions for the sector\u2019s management teams'], 14, 'newspaper'],
        ['Investor Editions', 'The year ahead from the point of view of those deploying capital: the themes they are weighing and the questions they are asking.', ['Themes investors are weighing', 'Structures investors discuss in uncertain conditions', 'Diligence points to give extra time'], 16, 'coins'],
        ['Risk Outlook', 'The risks worth planning for in the coming year, set out in order of how much preparation they reward, with early signs to watch.', ['Risks that reward preparation most', 'Early-warning indicators', 'Simple contingency steps'], 15, 'scales'],
        ['Capital Flows Outlook', 'Where capital is moving and how the Gulf is positioned, with attention to what that means for companies seeking funds.', ['Direction of international capital', 'How funders\u2019 preferences are changing', 'What companies can do to be ready'], 17, 'coins'],
      ]),
      mk('Special Editions', 'star', 'One audience or theme, examined in depth.', 'Special editions are written for one reader: the family, the institution, the founder or the leader. Information only, not advice.', 'Readers with a specific brief rather than a general interest.', [
        ['Family Office', 'Governance, succession and investment questions for owning families, written to help a family agree on the questions before engaging advisers.', ['Structures families commonly consider', 'Governance documents worth having', 'How to approach succession as a process'], 22, 'people'],
        ['Public Capital', 'How public investors work, how they make decisions and what it means for companies that wish to partner with them.', ['How public investors are organised', 'What they typically require of partners', 'Preparing for a long process'], 18, 'coins'],
        ['Institutional Investors', 'How investment committees decide, what papers they ask for and how to make a proposal easy to evaluate.', ['The anatomy of a committee paper', 'Typical objections and answers', 'Reporting expected after investment'], 19, 'scales'],
        ['Founders Series', 'Practical lessons for founders at each stage of a company, from the first licence to the first outside investor.', ['Stage-by-stage priorities', 'Mistakes that are expensive to undo', 'When to bring in specialist help'], 16, 'people'],
        ['Women in Leadership', 'Perspectives on leadership careers, boards and ownership in the region, with practical ideas for organisations.', ['Routes into senior and board roles', 'Practices that retain talent', 'Questions organisations can ask themselves'], 14, 'people'],
      ]),
    ],
  },
];
