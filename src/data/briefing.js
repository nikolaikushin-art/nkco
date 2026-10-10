// NK&CO Briefing — podcast platform data (August 2026)
import { IMG } from '../mock';

export const BRIEFING = {
  name: 'NK&CO Briefing',
  tagline: 'Executive conversations on Dubai, the UAE, and the institutional GCC.',
  description:
    'A premium podcast platform from NK&CO Research. Each week, senior partners sit down with the leaders shaping the region\u2019s capital, real assets, and institutions.',
  stats: [
    { k: 'Episodes', v: '128' },
    { k: 'Series', v: '6' },
    { k: 'Downloads', v: '1.2M' },
    { k: 'Guest voices', v: '210+' },
  ],
  series: [
    { slug: 'the-dubai-briefing', title: 'The Dubai Briefing', desc: 'The state of the city\u2014 policy, capital, and the built environment.', image: IMG.dubai1, episodes: 42 },
    { slug: 'capital-conversations', title: 'Capital Conversations', desc: 'Institutional allocators and CIOs on where capital is moving.', image: IMG.tower, episodes: 28 },
    { slug: 'the-real-assets-room', title: 'The Real Assets Room', desc: 'Real estate, infrastructure, logistics and the private markets.', image: IMG.marina, episodes: 34 },
    { slug: 'founders-and-family-offices', title: 'Founders & Family Offices', desc: 'How principals steward wealth across generations.', image: IMG.exec2, episodes: 24 },
  ],
  topics: ['Real Estate & Living', 'Capital Markets', 'Family Office', 'Policy & Regulation', 'AI & Enterprise', 'Sustainability'],
  episodes: [
    { slug: 'difc-at-20', title: 'DIFC at 20 \u2014 the region\u2019s financial capital, next chapter', series: 'Capital Conversations', guest: 'Salma Bin Zayed, CIO, Gulf Institutional', duration: '38 min', date: 'Aug 12, 2026', image: IMG.glass, summary: 'A conversation on the maturation of DIFC and the emergence of Dubai as a top-3 global financial centre.', tags: ['Capital Markets', 'Policy & Regulation'] },
    { slug: 'dubai-2040-in-motion', title: 'Dubai 2040 in motion \u2014 execution, capital, and the new districts', series: 'The Dubai Briefing', guest: 'Hasan Al Rayes, Master-Planner', duration: '46 min', date: 'Aug 05, 2026', image: IMG.curve, summary: 'How the 2040 vision is landing on the ground \u2014 mobility, housing, and mixed-use.', tags: ['Real Estate & Living'] },
    { slug: 'private-credit-inflection', title: 'The private-credit inflection point in the Gulf', series: 'Capital Conversations', guest: 'Yusra Kaddoura, Partner, NK&CO', duration: '41 min', date: 'Jul 29, 2026', image: IMG.tower, summary: 'Institutional allocators are re-engineering their fixed-income playbooks \u2014 with private credit now central.', tags: ['Capital Markets'] },
    { slug: 'grade-a-office', title: 'Grade-A office in Dubai \u2014 rents, take-up and the new occupier map', series: 'The Real Assets Room', guest: 'Nadia Farouk, Head of Occupier, NK&CO', duration: '35 min', date: 'Jul 22, 2026', image: IMG.build, summary: 'Where occupiers are moving, and what it means for landlords and investors in the second half of 2026.', tags: ['Real Estate & Living'] },
    { slug: 'family-office-governance', title: 'The quiet reinvention of the Gulf family office', series: 'Founders & Family Offices', guest: 'Omar Al Suwaidi, Principal', duration: '52 min', date: 'Jul 15, 2026', image: IMG.exec1, summary: 'How next-generation principals are professionalising governance, investment and impact.', tags: ['Family Office'] },
    { slug: 'logistics-supercycle', title: 'The industrial supercycle \u2014 UAE logistics & manufacturing', series: 'The Real Assets Room', guest: 'Karim Nasser, MD, Regional Logistics', duration: '44 min', date: 'Jul 08, 2026', image: IMG.marina, summary: 'Grade-A logistics, cold storage, and manufacturing platforms across the Emirates.', tags: ['Real Estate & Living'] },
    { slug: 'sovereign-flows', title: 'Sovereign flows: the new geometry of Gulf capital', series: 'Capital Conversations', guest: 'Amira Kassem, Partner, NK&CO', duration: '39 min', date: 'Jul 01, 2026', image: IMG.glass, summary: 'From Riyadh to Abu Dhabi \u2014 how sovereign capital is repricing global markets.', tags: ['Capital Markets'] },
    { slug: 'ai-in-enterprise', title: 'AI in enterprise \u2014 from prototype to operating model', series: 'The Dubai Briefing', guest: 'David Whitmore, Partner, NK&CO', duration: '37 min', date: 'Jun 24, 2026', image: IMG.office, summary: 'How UAE institutions are moving from AI experiments to enterprise-grade adoption.', tags: ['AI & Enterprise'] },
    { slug: 'hospitality-cycle', title: 'The hospitality cycle \u2014 Downtown, Marina and beyond', series: 'The Real Assets Room', guest: 'Layla Haddad, Head of Hospitality', duration: '43 min', date: 'Jun 17, 2026', image: IMG.dubai2, summary: 'Hotel keys, ADRs, and where hospitality investors are placing conviction capital.', tags: ['Real Estate & Living'] },
  ],
  hosts: [
    { name: 'Rashid Al Mansouri', role: 'Managing Partner \u2014 Real Assets', image: IMG.exec1 },
    { name: 'Amira Kassem', role: 'Partner \u2014 Capital Markets & DIFC', image: IMG.exec2 },
    { name: 'David Whitmore', role: 'Partner \u2014 Corporate Advisory', image: IMG.exec3 },
  ],
};

export const getEpisode = (slug) => BRIEFING.episodes.find((e) => e.slug === slug);
export const getSeries = (slug) => BRIEFING.series.find((s) => s.slug === slug);
