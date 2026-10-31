// NK&CO: advanced industries (v245; v246: Defence & Security, Transition Fuels & Minerals and Life Sciences & Agri-Food
// were replaced by commercial columns, see industriesCommercial.js)
// Institutional tier for the Industries menu: capital-intensive, technical and policy-driven sectors, written for
// investors, sovereign and public funds, strategic buyers and boards. Same shape as DATA in industriesMore.js, which
// appends this list to its own (so the menu, side panel, pages, featured cards and pictures pick it up).
//
// Column: { title, lead, feat:[title, desc], items:[ { label, desc, lead, feat:[title, desc], kids:[ [label, shortLine, pageLead] ] } ] }
//
// Every child label is unique across the whole menu (checked when this file was written).
// All copy is draft. No firms, figures, dates or regulators are named. Nothing here is investment, legal or regulatory advice.

import { COMMERCIAL_SMES, COMMERCIAL_MARKETING, COMMERCIAL_LEASING } from './industriesCommercial';

export const ADV_DATA = [
  {
    title: 'Advanced Tech & Compute',
    lead: 'Advisory for the companies and investors building the physical layer of the digital economy: compute, chips and space systems.',
    feat: ['The compute build-out: power, chips and capital', 'Where AI infrastructure, semiconductors and satellites meet long-term capital.'],
    items: [
      {
        label: 'AI Compute & Data Centres',
        desc: 'AI campuses, GPU capacity, power, cooling and interconnection.',
        lead: 'Advisory for developers, operators, tenants and financiers of data centre and AI compute capacity, where power access and delivery speed decide returns.',
        feat: ['Compute is infrastructure: financing the AI build-out', 'Power, cooling, tenancy and the structures investors now underwrite.'],
        kids: [
          ['Hyperscale & AI Campuses', 'Large campuses built for cloud and AI tenants.', 'Large campuses designed for cloud and AI workloads: land and power assembly, phased delivery, anchor tenancy, and the financing of multi-year builds.'],
          ['GPU Clusters & Compute Leasing', 'Accelerator capacity sold or leased as a service.', 'Accelerator capacity offered as a service: hardware refresh cycles, utilisation risk, customer concentration and the structure of long-term compute contracts.'],
          ['Power, Cooling & Site Selection', 'Grid access, energy sourcing and thermal design.', 'The constraints that decide where capacity can be built: grid connection timelines, energy sourcing, water and cooling design, and permitting.'],
          ['Colocation & Interconnection', 'Neutral facilities, cross-connects and networks.', 'Neutral colocation and interconnection hubs: tenant mix, network density, pricing power, contract terms and the valuation of operating platforms.'],
        ],
      },
      {
        label: 'Semiconductors & Electronics',
        desc: 'Chip design, fabrication, packaging and electronics manufacturing.',
        lead: 'Advisory for companies and investors across the semiconductor and electronics chain, from design houses to assembly, in a sector shaped by industrial policy.',
        feat: ['Chips as strategy: how the supply chain is being redrawn', 'Design, fabrication, packaging and the role of regional capital.'],
        kids: [
          ['Chip Design & Fabless Models', 'Design houses and intellectual property.', 'Companies that design chips without owning fabrication: intellectual property, foundry access, talent, licensing models and funding for long design cycles.'],
          ['Fabrication & Advanced Packaging', 'Foundries, back-end and packaging capacity.', 'Fabrication and packaging capacity: capital intensity, customer commitments, technology partnerships, incentives and the realistic path to local capability.'],
          ['Electronics Manufacturing Services', 'Contract assembly and board-level production.', 'Contract manufacturers of electronic assemblies: customer qualification, working capital, automation, quality systems and supply security.'],
          ['Sensors & Power Electronics', 'Components for vehicles, grids and industry.', 'Sensors, power conversion and control components used in vehicles, grids and industrial equipment: design wins, certification and long product lifecycles.'],
        ],
      },
      {
        label: 'Space & Satellite Systems',
        desc: 'Satellites, launch, earth observation and space services.',
        lead: 'Advisory for space agencies, operators, manufacturers and the commercial companies and funds building a regional space economy.',
        feat: ['A regional space economy: from national programmes to commercial markets', 'Where satellites, data and services create investable businesses.'],
        kids: [
          ['Satellite Manufacturing & Launch', 'Spacecraft build, integration and launch access.', 'Spacecraft manufacturing, integration and launch services: programme funding, supplier depth, qualification, insurance and launch scheduling.'],
          ['Earth Observation & Geospatial Data', 'Imagery, analytics and mapping services.', 'Earth observation and geospatial analytics: data licensing, government and commercial demand, processing platforms and recurring revenue models.'],
          ['Satellite Communications', 'Broadband, broadcast and connectivity services.', 'Satellite connectivity for broadband, maritime, aviation and remote sites: spectrum, ground infrastructure, capacity pricing and partnerships.'],
          ['Ground Segment & Space Services', 'Stations, tracking, operations and support.', 'Ground stations, tracking, mission operations and support services: utilisation, long-term service agreements and the expansion of operating capability.'],
        ],
      },
    ],
  },
  COMMERCIAL_SMES,
  COMMERCIAL_MARKETING,
  {
    title: 'Institutional Capital',
    lead: 'Advisory for sovereign funds, public pension and reserve funds, family offices and institutional allocators deploying long-term capital across private markets and real assets.',
    feat: ['Long-term capital: how institutions allocate beyond listed markets', 'Governance, structures and partnerships behind large pools of patient capital.'],
    items: [
      {
        label: 'Sovereign & Public Investment',
        desc: 'Sovereign wealth, public funds, co-investment and strategic stakes.',
        lead: 'Advisory for sovereign and public investors on strategy, governance, co-investment and the domestic and international stakes they hold.',
        feat: ['Sovereign investors: mandates, governance and domestic mission', 'How public capital balances returns, strategy and national priorities.'],
        kids: [
          ['Sovereign Wealth Strategy', 'Mandates, allocation and governance.', 'Mandate design and portfolio governance for sovereign funds: objectives, risk appetite, internal capability and the split between internal and external management.'],
          ['Public Pension & Reserve Funds', 'Long-horizon funds with defined liabilities.', 'Public pension and reserve funds with defined obligations: liability-aware allocation, liquidity planning, reporting to boards and member communication.'],
          ['Strategic Co-Investment Platforms', 'Alongside funds and operating partners.', 'Co-investment programmes alongside funds and operators: deal access, fee terms, selection rights, monitoring and decision timelines.'],
          ['Domestic Champions & Strategic Stakes', 'Holdings in national companies and sectors.', 'Stakes in nationally important companies: governance rights, listing and sell-down decisions, board representation and the use of strategic holdings.'],
        ],
      },
      {
        label: 'Private Capital & Credit',
        desc: 'Buyouts, private credit, real asset funds and secondaries.',
        lead: 'Advisory for general partners, limited partners and corporates on fund strategy, structures and the growing private capital market in the region.',
        feat: ['Private markets in the Gulf: capital formation and exits', 'How funds, lenders and allocators are building a regional ecosystem.'],
        kids: [
          ['Private Equity & Buyouts', 'Control investments and value creation.', 'Control investments in mid-sized and large companies: sourcing, valuation, operating improvement, financing and exit routes including listings.'],
          ['Private Credit & Direct Lending', 'Non-bank lending to companies and projects.', 'Direct lending outside banks: covenant design, security, pricing, borrower demand and the regional growth of private debt funds.'],
          ['Infrastructure & Real Asset Funds', 'Long-lived assets with contracted revenue.', 'Funds investing in infrastructure and real assets: yield profile, inflation protection, asset selection, operating partners and fund terms.'],
          ['Secondaries & Continuation Funds', 'Liquidity solutions for funds and investors.', 'Secondary transactions and continuation vehicles: pricing, conflicts, governance, investor consent and the role of independent advice.'],
        ],
      },
      {
        label: 'Project & Structured Finance',
        desc: 'Concessions, development finance, securitisation and structured debt.',
        lead: 'Advisory for sponsors, lenders and public bodies structuring large projects and asset-backed funding across the GCC.',
        feat: ['Financing the pipeline: structures that move projects to close', 'Concessions, Islamic finance and asset-backed funding in practice.'],
        kids: [
          ['PPP & Concession Finance', 'Public-private projects and long concessions.', 'Public-private partnerships and concessions: risk allocation, revenue models, bidding, lender requirements and contract management through the life of the asset.'],
          ['Sukuk-Funded Infrastructure', 'Islamic structures for asset-based funding.', 'Using sukuk to fund infrastructure: asset and structure selection, Shari’ah governance, investor demand, pricing and documentation.'],
          ['Export Credit & Development Finance', 'Official lenders and guaranteed funding.', 'Export credit agencies and development finance institutions: eligibility, cover, tenor, co-financing with banks and the conditions that come with them.'],
          ['Securitisation & Asset-Backed Finance', 'Receivables, leases and pooled assets.', 'Funding backed by pooled receivables, leases and loans: structure, credit enhancement, rating, investor appetite and reporting.'],
        ],
      },
    ],
  },
  COMMERCIAL_LEASING,
];
