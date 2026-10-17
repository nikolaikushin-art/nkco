// v243 · Institutional tier for Privileges: advanced courses, frameworks, templates, research and services for allocators, committees,
// trustees and investment teams. Appended to the existing categories by privileges.js (after privilegesMore.js).
// Draft copy: no guests, firms, dates, fees, figures or regulators are named. Services are proposals; confirm scope before they go live.
import { P } from './privilegesMore';

export const PRIV_INST_ITEMS = {
  Podcasts: [
    {
      label: 'Allocator Conversations Episodes', motif: 'mic2',
      blurb: 'How institutions build and govern portfolios.',
      lead: 'Long-form conversations on how institutional investors set mandates, construct portfolios and hold managers to account.',
      who: 'Allocators, trustees, investment committee members and the advisers who serve them.',
      pieces: [
        P('Setting an Investment Policy', 'How a policy statement guides every later decision.', 'How an investment policy statement is set, what it must settle and how it guides every later decision.', ['Objectives and constraints', 'Risk limits and time horizons', 'When to revisit the policy'], 38, 'document'),
        P('Strategic and Tactical Allocation', 'Long-term weights, short-term tilts and who decides.', 'The difference between long-term weights and short-term tilts, and who should decide each.', ['Setting long-term weights', 'When a tilt is justified', 'Who holds the decision'], 36, 'pie'),
        P('Selecting and Monitoring Managers', 'How institutions appoint, review and replace managers.', 'How institutions appoint managers, review them on a regular cycle and decide when to replace them.', ['A structured selection process', 'What to monitor each quarter', 'Grounds for replacement'], 40, 'search'),
        P('Liquidity, Pacing and Commitments', 'Planning private-market commitments against cash needs.', 'How to plan private-market commitments against expected cash needs, so liquidity is never a surprise.', ['Mapping cash needs', 'Pacing commitments over years', 'Stress-testing liquidity'], 37, 'timeline'),
        P('Reporting to Trustees and Committees', 'What a committee needs to see, and how often.', 'What trustees and committees need to see, how often, and how to keep reports short enough to be read.', ['The core report', 'Exceptions and breaches', 'Keeping it readable'], 33, 'bars'),
      ],
    },
  ],
  Masterclasses: [
    {
      label: 'Advanced Private Markets and Alternatives', motif: 'vault',
      blurb: 'Six advanced lessons on private markets for institutions.',
      lead: 'An advanced course for investors who already allocate to private markets: structures, manager selection, fees, pacing, valuation and co-investment.',
      who: 'Investment teams and committee members who have prior exposure to private-market funds.',
      pieces: [
        P('Fund Structures and Terms', 'Partnership terms, fees and what each clause does.', 'How a typical fund partnership is built, and what each major term does for the investor and the manager.', ['Partnership structure', 'Key terms and what they do', 'Terms worth negotiating'], 26, 'document'),
        P('Manager Selection and Due Diligence', 'A structured process for assessing a manager.', 'A structured process for assessing a manager, from first screen to final committee paper.', ['Screening and first meetings', 'Evidence to request', 'Writing the recommendation'], 28, 'search'),
        P('Fees, Carry and Net Returns', 'How costs flow through to what investors keep.', 'How management fees, carried interest and expenses flow through to the return an investor keeps.', ['Fee layers', 'How carry works', 'Gross against net'], 24, 'coins'),
        P('Commitment Pacing', 'Spreading commitments across years and vintages.', 'How to spread commitments across years so that exposure builds steadily and cash calls are met.', ['Why vintage spread matters', 'Modelling calls and distributions', 'Adjusting the plan'], 25, 'timeline'),
        P('Valuation and Reporting', 'How private assets are valued and reported.', 'How private assets are valued, how often, and what an investor should ask about a reported figure.', ['Valuation methods', 'Timing and lags', 'Questions to ask'], 24, 'scales'),
        P('Co-Investment and Direct Deals', 'When to invest alongside a manager or directly.', 'When it makes sense to invest alongside a manager or directly, and what capability that demands.', ['Why co-invest', 'Capability and resources', 'Risks to manage'], 27, 'handshake'),
      ],
    },
    {
      label: 'Advanced Fiduciary Governance and Stewardship', motif: 'shield',
      blurb: 'Six advanced lessons on duty, oversight and stewardship.',
      lead: 'An advanced course on the duties of those who oversee other people\u2019s money: standards of care, conflicts, delegation, decision records and stewardship.',
      who: 'Trustees, committee members, directors and executives with oversight of institutional assets.',
      pieces: [
        P('Duties and Standards of Care', 'What oversight of other people\u2019s money requires.', 'What oversight of other people\u2019s money asks of those who hold it, and how to show the standard was met.', ['Core duties', 'What good process looks like', 'Showing the work'], 24, 'scales'),
        P('Conflicts of Interest', 'Spotting, recording and managing conflicts.', 'How to spot conflicts early, record them properly and manage them without stalling decisions.', ['Common conflicts', 'A conflicts register', 'Recusal in practice'], 22, 'shield'),
        P('Delegation and Oversight', 'What to delegate, and how to keep control.', 'What to delegate, to whom, and how to keep real oversight once a task has left the room.', ['Choosing what to delegate', 'Mandates and limits', 'Oversight routines'], 25, 'org'),
        P('Decision Records and Minutes', 'Recording why a decision was made.', 'How to record why a decision was made, what alternatives were weighed and who was responsible.', ['What a record must show', 'Writing useful minutes', 'Keeping and finding records'], 20, 'pen'),
        P('Stewardship and Voting', 'Using ownership to influence outcomes.', 'How owners use votes and engagement to influence the companies and managers they hold.', ['Setting priorities', 'Voting and engagement', 'Recording outcomes'], 23, 'target'),
        P('Reviewing the Governance Itself', 'A regular check of the framework.', 'A regular check of the governance framework itself: policies, roles, records and the committee\u2019s own performance.', ['What to review and when', 'Self-assessment of the committee', 'Acting on the findings'], 22, 'repeat'),
      ],
    },
  ],
  'Guides & Playbooks': [
    {
      label: 'Institutional Frameworks', motif: 'blueprint',
      blurb: 'Reference frameworks for committees and investment teams.',
      lead: 'Reference frameworks written for committees and investment teams: policy, due diligence, risk appetite, credit and reporting, set out so they can be adapted and adopted.',
      who: 'Investment teams, risk functions and committee secretaries.',
      pieces: [
        P('The Investment Policy Framework', 'Objectives, limits and review in one reference.', 'A reference for writing and reviewing an investment policy: objectives, limits, roles and review cycle.', ['Objectives and constraints', 'Limits and roles', 'Review cycle'], 18, 'document'),
        P('The Manager Due Diligence Framework', 'A structured set of questions and evidence.', 'A structured set of questions and evidence to request when assessing an investment manager.', ['People and organisation', 'Process and risk', 'Terms and alignment'], 20, 'search'),
        P('The Risk Appetite Framework', 'Setting, expressing and monitoring risk limits.', 'How to set, express and monitor risk limits so that the board and the team mean the same thing by them.', ['Setting appetite', 'Turning it into limits', 'Monitoring and breaches'], 17, 'gauge'),
        P('The Counterparty and Credit Framework', 'Assessing who you lend to and deal with.', 'How to assess the borrowers and counterparties you lend to or deal with, and how to set exposure limits.', ['Assessing a counterparty', 'Setting exposure limits', 'Reviewing over time'], 18, 'bank'),
        P('The Reporting Pack Framework', 'What a committee pack should contain.', 'What a committee pack should contain, in what order, and how to keep it to a length people will read.', ['The core pages', 'Exceptions and decisions', 'Length and layout'], 14, 'newspaper'),
        P('The Stewardship and Engagement Framework', 'Setting priorities and recording engagement.', 'How to set stewardship priorities, run engagement with companies and managers, and record what changed.', ['Choosing priorities', 'Running engagement', 'Recording outcomes'], 15, 'target'),
      ],
    },
  ],
  'Tools & Templates': [
    {
      label: 'Institutional Toolkits', motif: 'gauge',
      blurb: 'Templates and scorecards for committees and investment teams.',
      lead: 'Templates, questionnaires and registers for committees and investment teams, built so that every assumption and score can be seen and challenged.',
      who: 'Investment teams, risk functions and committee secretaries.',
      pieces: [
        P('Investment Policy Statement Template', 'A structured template with prompts for each section.', 'A structured template for an investment policy statement, with a prompt and a note for each section.', ['Sections and prompts', 'Notes on what to decide', 'Review dates'], 20, 'document'),
        P('Investment Committee Paper Template', 'A standard layout for a decision paper.', 'A standard layout for a committee decision paper: recommendation, rationale, risks and the decision requested.', ['Recommendation first', 'Rationale and risks', 'The decision requested'], 12, 'pen'),
        P('Manager Due Diligence Questionnaire', 'A questionnaire covering people, process and risk.', 'A questionnaire covering people, process, risk and terms, ready to send to a manager.', ['People and organisation', 'Process and risk', 'Terms and reporting'], 25, 'checklist'),
        P('Risk Register and Limits Tracker', 'Record risks, owners and limit breaches.', 'Record risks, owners, limits and breaches in one place, with a simple view of what needs action.', ['Risks and owners', 'Limits and breaches', 'Actions and dates'], 15, 'gauge'),
        P('Committee Charter Template', 'Purpose, membership, powers and reporting.', 'A template for a committee charter: purpose, membership, powers, meeting rules and reporting lines.', ['Purpose and powers', 'Membership and quorum', 'Reporting lines'], 14, 'seal'),
        P('Annual Governance Review Checklist', 'A yearly check of policies, records and roles.', 'A yearly checklist for reviewing policies, records, roles and the committee\u2019s own effectiveness.', ['Policies and records', 'Roles and delegation', 'Committee effectiveness'], 10, 'repeat'),
      ],
    },
  ],
  'Video & Webinars': [
    {
      label: 'Institutional Briefings', motif: 'screen',
      blurb: 'Short and long briefings for investment teams.',
      lead: 'Briefings for investment teams and committees: a short explainer on a technical point, or a full session on a current theme.',
      who: 'Investment professionals and committee members.',
      pieces: [
        P('Portfolio Construction in Fifteen Minutes', 'From objectives to a first allocation.', 'From objectives and constraints to a first allocation, in one clear walk-through.', ['Objectives and constraints', 'Building blocks', 'A first allocation'], 15, 'pie'),
        P('Private Credit Due Diligence', 'The questions to ask before committing.', 'The questions to ask before committing to a private credit strategy, and the evidence that answers them.', ['Strategy and sourcing', 'Underwriting and workouts', 'Terms and reporting'], 40, 'search'),
        P('Reading a Fund Offering Document', 'The terms that matter most.', 'How to read a fund offering document and find the terms that matter most to an investor.', ['Where to start', 'Terms that matter', 'Points to raise'], 12, 'document'),
        P('Risk Reporting for Committees', 'What good risk reporting looks like.', 'What good risk reporting looks like for a committee, and how to avoid pages nobody reads.', ['The few numbers that matter', 'Exceptions and trends', 'Layout and length'], 14, 'gauge'),
        P('Stewardship in Practice', 'Engagement and voting, with worked examples.', 'How engagement and voting work in practice, shown through worked examples.', ['Setting an agenda', 'Voting and escalation', 'Recording results'], 12, 'target'),
      ],
    },
  ],
};

// ---- research and member services ----------------------------------------------------------------------------------------
export const PRIV_INST_RESEARCH = {
  label: 'Institutional Research', motif: 'eye',
  blurb: 'In-depth research for allocators and committees.',
  lead: 'Longer, more technical research for allocators and committees: methods stated, assumptions shown and limits made plain.',
  who: 'Allocators, analysts and committee members who read the method as well as the conclusion.',
  pieces: [
    P('Private Credit Market Study', 'Structures, pricing and risks across the Gulf.', 'A study of private credit in the Gulf: structures, pricing, documentation and the risks investors take.', ['Structures in use', 'Pricing and terms', 'Risks and protections'], 25, 'bank'),
    P('Real Assets Allocation Study', 'Where property and infrastructure fit in a portfolio.', 'A study of where property and infrastructure fit within a diversified portfolio, and what each is expected to do.', ['Roles in a portfolio', 'Return and risk drivers', 'Implementation routes'], 25, 'tower'),
    P('Gulf Sovereign and Institutional Flows', 'Where institutional capital is going, and why.', 'A study of where institutional capital in the region is going, how mandates are set and what that means for the market.', ['Mandates and priorities', 'Where capital is placed', 'Implications for others'], 22, 'globe'),
    P('Liquidity and Exit Routes Study', 'How investors realise value, and what slows them.', 'A study of how investors realise value from private holdings, and what slows the process.', ['Routes to exit', 'What slows an exit', 'Planning ahead'], 20, 'funnel'),
    P('Governance Practices Compared', 'How institutions organise oversight, compared.', 'A comparison of how institutions organise committees, delegation and reporting, and what tends to work.', ['Committee structures', 'Delegation and limits', 'Reporting practice'], 20, 'org'),
  ],
};

export const PRIV_INST_ACCESS = {
  label: 'Institutional Services', motif: 'vault',
  blurb: 'Dedicated support for institutional members.',
  lead: 'Services reserved for institutional members, by arrangement: briefings prepared for committees, access to analysts and focused research on request.',
  who: 'Institutional members: funds, family offices, corporates and public bodies.',
  pieces: [
    P('Investment Committee Briefing', 'A private briefing prepared for your committee.', 'A private briefing prepared for your investment committee on a theme or decision you choose.', ['A theme set by the committee', 'Papers in advance', 'Time for questions'], 90, 'org'),
    P('Analyst Access', 'Questions answered by our research team.', 'Put questions on our research directly to the analysts who wrote it, with a short written reply.', ['Questions in writing', 'A call where useful', 'A short written reply'], 30, 'search'),
    P('Bespoke Research Request', 'Commission a focused piece of analysis.', 'Ask for a focused piece of analysis on a question that matters to your institution, with scope agreed in advance.', ['A scoping conversation', 'Agreed scope and timing', 'A written deliverable'], 60, 'pen'),
    P('Due Diligence Support Session', 'Work through a transaction with a specialist.', 'Work through a live transaction or manager review with a specialist, using the frameworks in the library.', ['Your transaction or manager', 'Frameworks applied', 'Open issues and next steps'], 90, 'checklist'),
    P('Annual Relationship Review', 'A yearly review of how we can help.', 'A yearly review with a named partner of how the library and services are being used, and what to add.', ['Use of the library', 'Gaps and requests', 'Plan for the year ahead'], 60, 'calendar'),
  ],
};
