// v284 — additions from the Institutional Corporate Architecture & Professional Services Framework.

export const SERVICE_ARCH = {
  eyebrow: 'Service architecture',
  title: 'What each practice does, and where it stops.',
  intro: 'Each practice has a defined professional mandate. Services are offered only within the approved activity scope and the written mandate of the engagement.',
  columns: [
    {
      name: 'Management Consultancy',
      ref: 'Advisory, analytical and organisational mandates',
      items: [
        'Corporate strategy and business planning',
        'Business establishment and operating-model development',
        'Organisational architecture and governance design',
        'Operational diagnostics and process improvement',
        'Commercial strategy and business development',
        'Management information and performance architecture',
        'Business transformation and implementation planning',
        'Growth, replication and expansion',
      ],
      note: 'Advisory in character unless a separate, properly authorised implementation or management engagement is agreed. Company incorporation, corporate-secretarial services, legal structuring and licensing processing are excluded.',
    },
    {
      name: 'Enterprise Management',
      ref: 'Defined operational and management mandates',
      items: [
        'Enterprise coordination and management control',
        'Commercial operations management',
        'Operational management',
        'Management administration and internal controls',
        'Business financial control (management-level)',
        'Organisational and workforce management',
        'Systems and process operations',
        'Supplier and procurement-process management',
        'Programme and implementation management',
        'Interim or outsourced management mandates',
      ],
      note: 'Offered only after the licensing authority confirms the intended arrangement is within scope. No authority to hold client money, act as statutory director, or bind the client beyond express written delegation.',
    },
    {
      name: 'Business Brokerage',
      ref: 'Business-sale and acquisition intermediation',
      items: [
        'Seller representation',
        'Buyer-side acquisition intermediation',
        'Transaction-process coordination',
        'Counterparty identification and introductions',
        'Authorised information disclosure',
        'Buyer-engagement and enquiry records',
      ],
      note: 'Distinct from regulated investment services, real estate brokerage and legal representation. Business information is not represented as independently verified unless verification has actually been undertaken.',
    },
  ],
};

export const DELIVERABLES = {
  eyebrow: 'Consultancy deliverables',
  title: 'Outputs are scoped, assumption-based and limited to the information available.',
  intro: 'Depending on the mandate, Management Consultancy may deliver:',
  items: [
    ['Business diagnostic report', 'An assessment of the business and the issues material to its performance.'],
    ['Strategic assessment and recommendation paper', 'Options assessed and a recommended course of action.'],
    ['Business plan and operating-model documentation', 'The commercial and operating basis of the business.'],
    ['Organisational structure and responsibility matrix', 'Roles, accountability and reporting lines.'],
    ['Process maps and operating procedures', 'Documented workflows and standard operating procedures.'],
    ['Management KPI and reporting framework', 'Performance measures, dashboards and review calendars.'],
    ['Transformation roadmap', 'Prioritised initiatives and sequencing.'],
    ['Implementation plan and governance structure', 'Workstreams, milestones and decision routes.'],
    ['Management presentation and decision paper', 'Material prepared for authorised decision-makers.'],
    ['Periodic progress or review report', 'Progress against agreed objectives.'],
  ],
  close: 'Assumptions, information limitations and matters requiring independent specialist review are identified where material.',
};

export const ACCOUNTABILITY = {
  eyebrow: 'Enterprise Management accountability model',
  title: 'Four levels of authority, written down for every mandate.',
  intro: 'For each management engagement NK&CO maintains a written responsibility schedule. It prevents an ambiguous engagement from being read as an unlimited transfer of management responsibility.',
  head: ['Level', 'Description', 'Required control'],
  rows: [
    ['Recommend', 'NK&CO proposes a course of action.', 'Client decision required.'],
    ['Coordinate', 'NK&CO organises agreed actions and stakeholders.', 'Scope and coordination authority documented.'],
    ['Execute', 'NK&CO implements an approved action.', 'Execution responsibility and limits documented.'],
    ['Decide or approve', 'NK&CO exercises delegated decision-making authority.', 'Express delegation, legal capacity and applicable authorisation confirmed.'],
  ],
  close: 'Interim or outsourced management is offered only once the licensing authority confirms the arrangement is within scope.',
};

export const MANDATE_SCHEDULE = {
  eyebrow: 'Interim and outsourced management',
  title: 'What every management mandate defines.',
  intro: 'Any interim or outsourced management mandate records, in writing:',
  items: [
    ['Function or unit', 'The precise function or business unit being managed.'],
    ['Objectives and outputs', 'The objectives and expected management outputs.'],
    ['Duration', 'The term and operating arrangements.'],
    ['Reporting line', 'The reporting line to the client.'],
    ['Independent decisions', 'Decisions NK&CO may take independently.'],
    ['Prior approval', 'Decisions requiring prior client approval.'],
    ['Limits', 'Financial, contractual and expenditure limits.'],
    ['Personnel authority', 'Personnel-management authority, if applicable.'],
    ['Access', 'Access to systems, information and business records.'],
    ['Reserved matters', 'Matters reserved to the client or its formally appointed officers.'],
    ['Retained responsibilities', 'Professional and regulatory responsibilities retained by the client.'],
    ['Reporting and termination', 'Performance reporting, escalation and termination arrangements.'],
    ['Transition', 'Handover and continuity obligations.'],
  ],
  close: 'No engagement implies unrestricted authority to bind the client, act as its statutory director, assume regulated responsibilities or control client funds unless all applicable requirements have been satisfied.',
};

export const TXN_CLASS = {
  eyebrow: 'Brokerage transaction classification',
  title: 'Every brokerage transaction is classified before acceptance.',
  intro: 'Before accepting a brokerage engagement, NK&CO classifies the proposed transaction. This is a preliminary control, not a legal determination of the transaction\u2019s regulatory status.',
  items: [
    ['Business asset transaction', 'The acquisition concerns specified assets or the operating business. The legal and commercial structure is confirmed by the parties\u2019 appointed advisers.'],
    ['Ownership-interest transaction', 'The acquisition concerns shares, membership interests or other ownership rights. Regulatory implications are assessed before NK&CO agrees to act as intermediary.'],
    ['Real estate-related transaction', 'The business or transaction includes real estate brokerage or property-related intermediary activity. This is not assumed to fall within the business-brokerage permission.'],
    ['Investment or capital-raising transaction', 'The mandate involves securities, investment instruments, fundraising or introductions that may constitute regulated financial activity. Reviewed separately; required permissions obtained.'],
  ],
  close: 'Success-based remuneration, dual representation and share or ownership-interest transfers require particular review against the applicable UAE regulatory requirements.',
};

export const LIFECYCLE = {
  eyebrow: 'Client engagement lifecycle',
  title: 'One lifecycle. Three separate mandates.',
  intro: 'NK&CO uses a common eight-stage lifecycle while preserving the separate mandates of its three practices.',
  stages: [
    { n: '01', title: 'Initial enquiry and qualification', desc: 'Establish the prospective client, the business, the required outcome, the proposed service and any obvious licensing or conflict issues.' },
    { n: '02', title: 'Scope and authority assessment', desc: 'Determine whether the proposed work is within approved activities and identify external services or additional authorisations required.' },
    { n: '03', title: 'Mandate definition', desc: 'Specify service, deliverables, exclusions, client responsibilities, decision rights, fees, timetable, information requirements and reporting.' },
    { n: '04', title: 'Engagement acceptance', desc: 'Complete contractual and internal approvals before work begins. No activity starts while its authorisation remains materially unresolved.' },
    { n: '05', title: 'Delivery and oversight', desc: 'Maintain working records, track deliverables, monitor scope and escalate material issues.' },
    { n: '06', title: 'Change control', desc: 'Written approval for material changes in scope, responsibilities, commercial terms or assumptions; licensing implications reassessed first.' },
    { n: '07', title: 'Completion and handover', desc: 'Provide agreed outputs, document outstanding matters, confirm the end of any delegated authority and complete handover.' },
    { n: '08', title: 'Review and continuation', desc: 'Where further work is proposed, assess whether it stays within the same practice or needs a separate mandate.' },
  ],
  close: 'A transition from consultancy to management, or from management to brokerage, closes or amends the existing mandate and documents the new scope. It does not occur through informal instructions.',
};

export const TRANSITION = {
  eyebrow: 'Cross-practice referral and transition',
  title: 'Which practice, and what control applies.',
  intro: 'A client may need more than one practice over time, but the relationship does not blur their legal and commercial boundaries.',
  head: ['Client requirement', 'Appropriate practice', 'Transition control'],
  rows: [
    ['Business strategy or organisational advice', 'Management Consultancy', 'Defined advisory scope'],
    ['Continuing management of agreed operations', 'Enterprise Management', 'Confirmed activity and written delegation'],
    ['Sale or acquisition of an eligible business', 'Business Brokerage', 'Brokerage mandate and transaction-scope review'],
    ['Capital raising or regulated investment advice', 'Not automatically included', 'Refer to an appropriately authorised provider where required'],
    ['Legal, tax, statutory accounting or audit work', 'Not automatically included', 'Engage an appropriately qualified and authorised specialist'],
    ['Real estate brokerage', 'Not automatically included', 'Separate relevant permission required'],
  ],
};

export const ACCEPTANCE = {
  eyebrow: 'Engagement acceptance controls',
  title: 'Eight assessments documented before a mandate is accepted.',
  intro: 'A material failure in any area triggers further review before acceptance.',
  items: [
    ['Licensing', 'The approved activity covers the actual work proposed.'],
    ['Competence', 'NK&CO has the capability and resources to deliver the service.'],
    ['Conflict', 'Actual, potential or perceived conflicts are identified and addressed.'],
    ['Information', 'Access, confidentiality, permitted disclosure and information handling are adequate.'],
    ['Authority', 'Any delegated decision-making or representation is documented and lawful.'],
    ['Commercial', 'Fees, payment terms, scope and material assumptions are clear.'],
    ['Specialist', 'Matters requiring separately authorised professionals are identified and allocated.'],
    ['Delivery', 'Responsibilities, milestones, reporting and escalation are proportionate to the engagement.'],
  ],
  close: 'Records are maintained appropriate to the activities, including engagement letters, scope schedules, licensing assessments, conflict disclosures, client approvals, delegated authorities, brokerage disclosure records, fee records and closure documentation. Retention, privacy, confidentiality and anti-money-laundering obligations are assessed under the rules applicable to the activity and the entity.',
};

export const COMMERCIAL = {
  eyebrow: 'Commercial operating model',
  title: 'Fees follow the responsibility undertaken.',
  paragraphs: [
    'NK&CO commercialises its three practices through distinct engagement types rather than a single undifferentiated package. Management Consultancy may be structured around a diagnostic, advisory project, strategy assignment or recurring advisory retainer. Enterprise Management may be structured around a functional-management mandate, implementation assignment or continuing management engagement, subject to confirmed licensing scope. Business Brokerage may be structured around a defined intermediary mandate with transparent remuneration terms.',
    'Each proposal distinguishes included services, explicit exclusions, deliverables and acceptance criteria, client inputs, timetable, fees, expenses and third-party charges, conditions for additional work, conditions for suspension or termination, and any contingent remuneration and its triggering event.',
    'NK&CO does not promise a sale, acquisition, funding outcome, growth result or financial return that depends on factors outside its control. Where a client requires services outside NK&CO\u2019s authorised scope, the firm may, where legally permitted, coordinate with appropriately qualified or licensed providers. The engagement documents state who appoints the specialist, who is responsible for its work, how fees are handled and who holds the relevant authorisation. Coordination does not replace the specialist\u2019s obligations.',
  ],
};

export const FINAL_PRINCIPLE = {
  eyebrow: 'Governing standard',
  title: 'Claims, licence, mandate and delivery must agree.',
  quote: 'Every service must have a defined purpose, a lawful basis, an explicit mandate, an accountable delivery model and a clear boundary of responsibility.',
  body: 'NK&CO\u2019s credibility rests on the consistency between what it claims, what it is licensed to do, what it agrees to do and what it actually delivers. Enterprise Management and the precise scope of Business Brokerage remain proposed, rather than presented as authorised activities, until written confirmation of the licence scope is obtained.',
};
