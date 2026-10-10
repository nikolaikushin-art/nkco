// Topic-matched plate for every page and card.
// Each plate is a line-art motif chosen from the page's own words (title first, then item, category, section), so the
// picture always says what the page is about. Nothing here is random: same page -> same plate, no network needed.
//
// Real photos in photoManifest.json still win, but only photos that passed the relevance check in scripts/fetch-photos.mjs.

// ---- motifs: drawn in a 200x140 box, stroke = currentColor-ish ink, `a` = accent ---------------------------------
const M = {
  growth: (i, a) => `<path d="M40 105 L70 82 L92 92 L128 56 L160 38" stroke="${i}" stroke-width="3" fill="none"/><path d="M142 38 H160 V56" stroke="${a}" stroke-width="3" fill="none"/><path d="M36 112 H168 M36 112 V30" stroke="${i}" stroke-width="1.5"/><circle cx="70" cy="82" r="3.5" fill="${a}"/><circle cx="128" cy="56" r="3.5" fill="${a}"/>`,
  bars: (i, a) => `<path d="M36 112 H168" stroke="${i}" stroke-width="1.5"/><rect x="46" y="84" width="18" height="28" fill="none" stroke="${i}" stroke-width="2.5"/><rect x="78" y="64" width="18" height="48" fill="none" stroke="${i}" stroke-width="2.5"/><rect x="110" y="46" width="18" height="66" fill="${a}" fill-opacity=".35" stroke="${a}" stroke-width="2.5"/><rect x="142" y="30" width="18" height="82" fill="none" stroke="${i}" stroke-width="2.5"/>`,
  pie: (i, a) => `<circle cx="100" cy="70" r="40" fill="none" stroke="${i}" stroke-width="2.5"/><path d="M100 70 V30 A40 40 0 0 1 138 82 Z" fill="${a}" fill-opacity=".4" stroke="${a}" stroke-width="2.5"/><path d="M100 70 L66 92" stroke="${i}" stroke-width="2"/>`,
  tower: (i, a) => `<path d="M30 118 H170" stroke="${i}" stroke-width="1.5"/><rect x="48" y="62" width="30" height="56" fill="none" stroke="${i}" stroke-width="2.5"/><rect x="86" y="24" width="32" height="94" fill="none" stroke="${a}" stroke-width="2.5"/><rect x="126" y="48" width="28" height="70" fill="none" stroke="${i}" stroke-width="2.5"/><path d="M92 38 H112 M92 52 H112 M92 66 H112 M92 80 H112 M92 94 H112 M55 76 H71 M55 92 H71 M133 62 H147 M133 78 H147 M133 94 H147" stroke="${i}" stroke-width="1.5"/><path d="M102 24 V12" stroke="${a}" stroke-width="2"/>`,
  house: (i, a) => `<path d="M34 118 H166" stroke="${i}" stroke-width="1.5"/><path d="M50 118 V70 L100 32 L150 70 V118" fill="none" stroke="${i}" stroke-width="2.5"/><rect x="88" y="84" width="24" height="34" fill="none" stroke="${a}" stroke-width="2.5"/><rect x="60" y="76" width="16" height="16" fill="none" stroke="${i}" stroke-width="2"/><rect x="124" y="76" width="16" height="16" fill="none" stroke="${i}" stroke-width="2"/>`,
  key: (i, a) => `<circle cx="64" cy="70" r="22" fill="none" stroke="${a}" stroke-width="3"/><circle cx="64" cy="70" r="7" fill="none" stroke="${a}" stroke-width="2"/><path d="M86 70 H160 M138 70 V90 M152 70 V84" stroke="${i}" stroke-width="3" fill="none"/>`,
  rings: (i, a) => `<circle cx="82" cy="70" r="34" fill="none" stroke="${i}" stroke-width="3"/><circle cx="118" cy="70" r="34" fill="none" stroke="${a}" stroke-width="3"/>`,
  document: (i, a) => `<path d="M64 24 H116 L142 50 V116 H64 Z" fill="none" stroke="${i}" stroke-width="2.5"/><path d="M116 24 V50 H142" fill="none" stroke="${i}" stroke-width="2"/><path d="M76 66 H128 M76 80 H128 M76 94 H108" stroke="${i}" stroke-width="2"/><circle cx="124" cy="100" r="11" fill="none" stroke="${a}" stroke-width="2.5"/>`,
  scales: (i, a) => `<path d="M100 26 V112 M72 112 H128" stroke="${i}" stroke-width="3"/><path d="M52 40 H148" stroke="${i}" stroke-width="3"/><path d="M52 40 L36 78 H68 Z M148 40 L132 78 H164 Z" fill="none" stroke="${a}" stroke-width="2.5"/><path d="M36 78 A16 10 0 0 0 68 78 M132 78 A16 10 0 0 0 164 78" fill="none" stroke="${a}" stroke-width="2.5"/>`,
  shield: (i, a) => `<path d="M100 24 L146 40 V74 C146 98 126 112 100 122 C74 112 54 98 54 74 V40 Z" fill="none" stroke="${i}" stroke-width="3"/><path d="M80 72 L95 88 L124 58" fill="none" stroke="${a}" stroke-width="4"/>`,
  globe: (i, a) => `<circle cx="100" cy="70" r="42" fill="none" stroke="${i}" stroke-width="2.5"/><ellipse cx="100" cy="70" rx="18" ry="42" fill="none" stroke="${i}" stroke-width="2"/><path d="M58 70 H142 M66 46 H134 M66 94 H134" stroke="${i}" stroke-width="1.5"/><circle cx="128" cy="50" r="5" fill="${a}"/>`,
  map: (i, a) => `<path d="M40 40 L78 28 L122 42 L160 30 V102 L122 114 L78 100 L40 112 Z" fill="none" stroke="${i}" stroke-width="2.5"/><path d="M78 28 V100 M122 42 V114" stroke="${i}" stroke-width="1.5"/><path d="M100 84 C84 66 84 50 100 50 C116 50 116 66 100 84 Z" fill="${a}" fill-opacity=".4" stroke="${a}" stroke-width="2.5"/>`,
  heat: (i, a) => `<g fill="none" stroke="${i}" stroke-width="1.5">${[0, 1, 2, 3, 4].map((r) => [0, 1, 2, 3, 4, 5].map((c) => `<rect x="${40 + c * 22}" y="${26 + r * 18}" width="20" height="16"/>`).join('')).join('')}</g><g fill="${a}"><rect x="84" y="44" width="20" height="16" fill-opacity=".85"/><rect x="106" y="44" width="20" height="16" fill-opacity=".5"/><rect x="84" y="62" width="20" height="16" fill-opacity=".5"/><rect x="106" y="62" width="20" height="16" fill-opacity=".3"/><rect x="62" y="62" width="20" height="16" fill-opacity=".25"/></g>`,
  coins: (i, a) => `<g fill="none" stroke="${i}" stroke-width="2.5"><ellipse cx="100" cy="96" rx="38" ry="12"/><path d="M62 96 V84 M138 96 V84"/><ellipse cx="100" cy="84" rx="38" ry="12"/><path d="M62 84 V72 M138 84 V72"/></g><ellipse cx="100" cy="72" rx="38" ry="12" fill="${a}" fill-opacity=".3" stroke="${a}" stroke-width="2.5"/><path d="M100 64 V80 M94 68 H104 M94 76 H106" stroke="${a}" stroke-width="2" fill="none"/>`,
  tag: (i, a) => `<path d="M40 70 L82 28 H150 V96 L108 122 Z" transform="translate(0 -4)" fill="none" stroke="${i}" stroke-width="2.5"/><circle cx="130" cy="42" r="6" fill="none" stroke="${a}" stroke-width="2.5"/><path d="M84 88 L116 56 M90 62 h0 M110 84 h0" stroke="${a}" stroke-width="3"/><circle cx="92" cy="64" r="4" fill="${a}"/><circle cx="112" cy="84" r="4" fill="${a}"/>`,
  people: (i, a) => `<g fill="none" stroke="${i}" stroke-width="2.5"><circle cx="100" cy="52" r="14"/><path d="M72 112 C72 88 128 88 128 112"/><circle cx="56" cy="64" r="10"/><path d="M38 108 C38 90 74 90 74 108"/><circle cx="144" cy="64" r="10"/><path d="M126 108 C126 90 162 90 162 108"/></g><circle cx="100" cy="52" r="14" fill="${a}" fill-opacity=".3" stroke="${a}" stroke-width="2.5"/>`,
  org: (i, a) => `<rect x="82" y="24" width="36" height="20" fill="${a}" fill-opacity=".3" stroke="${a}" stroke-width="2.5"/><g fill="none" stroke="${i}" stroke-width="2.5"><rect x="36" y="88" width="36" height="20"/><rect x="82" y="88" width="36" height="20"/><rect x="128" y="88" width="36" height="20"/><path d="M100 44 V66 M54 88 V66 H146 V88 M100 66 V88"/></g>`,
  gears: (i, a) => `<g fill="none" stroke="${i}" stroke-width="2.5"><circle cx="82" cy="70" r="22"/><circle cx="82" cy="70" r="8"/>${[0, 45, 90, 135, 180, 225, 270, 315].map((d) => `<path d="M82 36 V46" transform="rotate(${d} 82 70)"/>`).join('')}</g><g fill="none" stroke="${a}" stroke-width="2.5"><circle cx="134" cy="92" r="15"/><circle cx="134" cy="92" r="5"/>${[0, 60, 120, 180, 240, 300].map((d) => `<path d="M134 70 V78" transform="rotate(${d} 134 92)"/>`).join('')}</g>`,
  network: (i, a) => `<g stroke="${i}" stroke-width="1.8" fill="none"><path d="M100 70 L50 38 M100 70 L152 40 M100 70 L48 100 M100 70 L154 102 M50 38 L48 100 M152 40 L154 102"/></g><circle cx="100" cy="70" r="12" fill="${a}" fill-opacity=".35" stroke="${a}" stroke-width="2.5"/><g fill="none" stroke="${i}" stroke-width="2.5"><circle cx="50" cy="38" r="7"/><circle cx="152" cy="40" r="7"/><circle cx="48" cy="100" r="7"/><circle cx="154" cy="102" r="7"/></g>`,
  screen: (i, a) => `<rect x="44" y="30" width="112" height="74" rx="3" fill="none" stroke="${i}" stroke-width="2.5"/><path d="M84 118 H116 M100 104 V118" stroke="${i}" stroke-width="2.5"/><path d="M56 88 L76 70 L92 80 L116 54 L144 44" fill="none" stroke="${a}" stroke-width="2.5"/>`,
  crane: (i, a) => `<path d="M30 120 H170" stroke="${i}" stroke-width="1.5"/><path d="M60 120 V24 M80 120 V24 M60 40 H80 M60 58 H80 M60 76 H80 M60 94 H80 M60 24 L80 40 M60 58 L80 76" stroke="${i}" stroke-width="1.6" fill="none"/><path d="M40 24 H156 M60 24 L96 8 L148 24" stroke="${a}" stroke-width="2.5" fill="none"/><path d="M140 24 V68" stroke="${a}" stroke-width="1.8"/><rect x="130" y="68" width="20" height="14" fill="none" stroke="${a}" stroke-width="2.2"/><rect x="104" y="92" width="44" height="28" fill="none" stroke="${i}" stroke-width="2.5"/>`,
  factory: (i, a) => `<path d="M30 118 H172" stroke="${i}" stroke-width="1.5"/><path d="M44 118 V64 L76 84 V64 L108 84 V64 L140 84 V50 H160 V118" fill="none" stroke="${i}" stroke-width="2.5"/><path d="M146 50 V26 H156 V50" fill="none" stroke="${a}" stroke-width="2.5"/><path d="M151 18 C158 12 150 8 156 2" fill="none" stroke="${a}" stroke-width="2"/><path d="M56 98 H66 M84 98 H94 M112 98 H122" stroke="${i}" stroke-width="3"/>`,
  store: (i, a) => `<path d="M40 52 L52 28 H148 L160 52 Z" fill="none" stroke="${a}" stroke-width="2.5"/><path d="M40 52 C40 64 64 64 64 52 C64 64 88 64 88 52 C88 64 112 64 112 52 C112 64 136 64 136 52 C136 64 160 64 160 52" fill="none" stroke="${a}" stroke-width="2.5"/><path d="M48 62 V118 H152 V62" fill="none" stroke="${i}" stroke-width="2.5"/><rect x="88" y="82" width="24" height="36" fill="none" stroke="${i}" stroke-width="2.5"/><rect x="58" y="76" width="22" height="22" fill="none" stroke="${i}" stroke-width="2"/><rect x="120" y="76" width="22" height="22" fill="none" stroke="${i}" stroke-width="2"/>`,
  bag: (i, a) => `<path d="M58 52 H142 L150 118 H50 Z" fill="none" stroke="${i}" stroke-width="2.5"/><path d="M80 52 V42 C80 22 120 22 120 42 V52" fill="none" stroke="${a}" stroke-width="2.8"/>`,
  hotel: (i, a) => `<path d="M30 118 H172" stroke="${i}" stroke-width="1.5"/><rect x="50" y="30" width="100" height="88" fill="none" stroke="${i}" stroke-width="2.5"/><g fill="none" stroke="${i}" stroke-width="2">${[0, 1, 2, 3].map((c) => [0, 1, 2].map((r) => `<rect x="${60 + c * 22}" y="${42 + r * 20}" width="12" height="12"/>`).join('')).join('')}</g><path d="M90 118 V100 H110 V118" fill="none" stroke="${a}" stroke-width="2.5"/><path d="M100 30 V16 M92 22 H108" stroke="${a}" stroke-width="2.5"/>`,
  bed: (i, a) => `<path d="M36 110 V50 M36 96 H164 V110 M164 96 V74 C164 66 156 64 148 64 H84 V96" fill="none" stroke="${i}" stroke-width="2.8"/><rect x="46" y="66" width="30" height="16" rx="6" fill="${a}" fill-opacity=".3" stroke="${a}" stroke-width="2.5"/>`,
  search: (i, a) => `<circle cx="90" cy="64" r="30" fill="none" stroke="${i}" stroke-width="3"/><path d="M112 86 L148 120" stroke="${a}" stroke-width="5"/><path d="M74 72 L84 60 L94 68 L106 52" fill="none" stroke="${a}" stroke-width="2.5"/>`,
  calendar: (i, a) => `<rect x="48" y="34" width="104" height="82" fill="none" stroke="${i}" stroke-width="2.5"/><path d="M48 56 H152 M72 26 V42 M128 26 V42" stroke="${i}" stroke-width="2.5"/><g fill="none" stroke="${i}" stroke-width="1.6">${[0, 1, 2, 3, 4].map((c) => [0, 1].map((r) => `<rect x="${58 + c * 18}" y="${66 + r * 20}" width="12" height="12"/>`).join('')).join('')}</g><rect x="94" y="86" width="12" height="12" fill="${a}"/>`,
  timeline: (i, a) => `<path d="M30 70 H172" stroke="${i}" stroke-width="2.5"/><g fill="${i}"><circle cx="52" cy="70" r="6"/><circle cx="100" cy="70" r="6"/></g><circle cx="148" cy="70" r="8" fill="${a}"/><path d="M52 62 V42 M100 62 V34 M148 60 V28 M52 78 V98 M100 78 V90 M148 80 V104" stroke="${i}" stroke-width="1.8"/>`,
  megaphone: (i, a) => `<path d="M48 58 H76 L136 28 V112 L76 82 H48 Z" fill="none" stroke="${i}" stroke-width="2.5"/><path d="M60 82 L68 116 H82 L76 82" fill="none" stroke="${i}" stroke-width="2.5"/><path d="M148 52 C158 62 158 78 148 88 M158 40 C174 58 174 82 158 100" fill="none" stroke="${a}" stroke-width="2.5"/>`,
  cap: (i, a) => `<path d="M100 32 L164 60 L100 88 L36 60 Z" fill="none" stroke="${i}" stroke-width="2.8"/><path d="M62 74 V100 C62 112 138 112 138 100 V74" fill="none" stroke="${i}" stroke-width="2.5"/><path d="M164 60 V96" stroke="${a}" stroke-width="2.5"/><circle cx="164" cy="100" r="4" fill="${a}"/>`,
  mic: (i, a) => `<rect x="82" y="22" width="36" height="58" rx="18" fill="none" stroke="${i}" stroke-width="2.8"/><path d="M62 70 C62 106 138 106 138 70 M100 96 V118 M80 118 H120" fill="none" stroke="${a}" stroke-width="2.8"/>`,
  leaf: (i, a) => `<path d="M52 108 C48 56 92 28 150 30 C154 84 114 112 60 108 Z" fill="${a}" fill-opacity=".22" stroke="${a}" stroke-width="2.8"/><path d="M52 108 C80 84 108 62 136 44" fill="none" stroke="${i}" stroke-width="2"/><path d="M84 86 H62 M104 70 H84 M120 58 L128 82" fill="none" stroke="${i}" stroke-width="1.5"/>`,
  blueprint: (i, a) => `<rect x="36" y="28" width="128" height="88" fill="none" stroke="${i}" stroke-width="2.5"/><path d="M36 50 H164 M64 28 V116" stroke="${i}" stroke-width="1.2"/><path d="M76 106 V72 H108 V106 M108 88 H138 V106" fill="none" stroke="${a}" stroke-width="2.5"/><path d="M76 106 H138" stroke="${a}" stroke-width="2.5"/><path d="M120 44 L152 44" stroke="${i}" stroke-width="2"/><path d="M130 40 V48 M142 40 V48" stroke="${i}" stroke-width="1.5"/>`,
  compass: (i, a) => `<circle cx="100" cy="70" r="44" fill="none" stroke="${i}" stroke-width="2.5"/><path d="M100 26 V34 M100 106 V114 M56 70 H64 M136 70 H144" stroke="${i}" stroke-width="2.5"/><path d="M100 70 L116 42 L108 78 Z" fill="${a}" fill-opacity=".5" stroke="${a}" stroke-width="2"/><path d="M100 70 L84 98 L92 62 Z" fill="none" stroke="${i}" stroke-width="2"/>`,
  target: (i, a) => `<circle cx="96" cy="72" r="40" fill="none" stroke="${i}" stroke-width="2.5"/><circle cx="96" cy="72" r="26" fill="none" stroke="${i}" stroke-width="2.5"/><circle cx="96" cy="72" r="11" fill="${a}" fill-opacity=".4" stroke="${a}" stroke-width="2.5"/><path d="M96 72 L150 28 M138 28 H150 V40" stroke="${a}" stroke-width="2.8" fill="none"/>`,
  briefcase: (i, a) => `<rect x="42" y="50" width="116" height="66" rx="3" fill="none" stroke="${i}" stroke-width="2.8"/><path d="M80 50 V38 H120 V50 M42 80 H158" fill="none" stroke="${i}" stroke-width="2.5"/><rect x="92" y="74" width="16" height="14" fill="${a}" fill-opacity=".4" stroke="${a}" stroke-width="2.2"/>`,
  trophy: (i, a) => `<path d="M72 28 H128 V62 C128 82 72 82 72 62 Z" fill="none" stroke="${a}" stroke-width="2.8"/><path d="M72 36 H52 C52 58 62 64 72 64 M128 36 H148 C148 58 138 64 128 64 M100 78 V98 M78 116 H122 M84 98 H116 V116" fill="none" stroke="${i}" stroke-width="2.6"/>`,
  truck: (i, a) => `<path d="M30 112 H172" stroke="${i}" stroke-width="1.5"/><rect x="36" y="48" width="78" height="52" fill="none" stroke="${i}" stroke-width="2.6"/><path d="M114 62 H144 L162 82 V100 H114" fill="none" stroke="${a}" stroke-width="2.6"/><circle cx="62" cy="104" r="9" fill="#fff" stroke="${i}" stroke-width="2.6"/><circle cx="142" cy="104" r="9" fill="#fff" stroke="${a}" stroke-width="2.6"/>`,
  warehouse: (i, a) => `<path d="M30 118 H172" stroke="${i}" stroke-width="1.5"/><path d="M40 118 V58 L100 28 L160 58 V118" fill="none" stroke="${i}" stroke-width="2.6"/><rect x="72" y="76" width="56" height="42" fill="none" stroke="${a}" stroke-width="2.6"/><path d="M72 88 H128 M72 100 H128" stroke="${a}" stroke-width="1.6"/>`,
  checklist: (i, a) => `<rect x="58" y="24" width="84" height="96" rx="3" fill="none" stroke="${i}" stroke-width="2.6"/><g stroke="${a}" stroke-width="2.6" fill="none"><path d="M70 50 L76 56 L86 44 M70 74 L76 80 L86 68"/></g><g stroke="${i}" stroke-width="2"><path d="M96 50 H130 M96 74 H130 M96 98 H130"/></g><rect x="70" y="92" width="12" height="12" fill="none" stroke="${i}" stroke-width="2"/>`,
  bank: (i, a) => `<path d="M30 118 H172 M38 106 H164" stroke="${i}" stroke-width="2.6"/><path d="M32 52 L100 20 L168 52 Z" fill="none" stroke="${a}" stroke-width="2.6"/><g stroke="${i}" stroke-width="2.6" fill="none"><rect x="48" y="58" width="12" height="42"/><rect x="76" y="58" width="12" height="42"/><rect x="112" y="58" width="12" height="42"/><rect x="140" y="58" width="12" height="42"/></g>`,
  bulb: (i, a) => `<path d="M100 26 C74 26 62 44 62 60 C62 76 76 82 80 96 H120 C124 82 138 76 138 60 C138 44 126 26 100 26 Z" fill="${a}" fill-opacity=".18" stroke="${a}" stroke-width="2.8"/><path d="M84 106 H116 M90 116 H110" stroke="${i}" stroke-width="2.6"/><path d="M100 42 V70" stroke="${i}" stroke-width="2"/>`,
  star: (i, a) => `<path d="M100 24 L113 54 L146 58 L122 80 L129 112 L100 96 L71 112 L78 80 L54 58 L87 54 Z" fill="${a}" fill-opacity=".25" stroke="${a}" stroke-width="2.8"/><path d="M40 122 H160" stroke="${i}" stroke-width="1.5"/>`,
  heart: (i, a) => `<path d="M100 112 C48 78 44 40 74 34 C88 32 96 42 100 50 C104 42 112 32 126 34 C156 40 152 78 100 112 Z" fill="${a}" fill-opacity=".22" stroke="${a}" stroke-width="2.8"/>`,
  channel: (i, a) => `<circle cx="46" cy="70" r="10" fill="${a}" fill-opacity=".35" stroke="${a}" stroke-width="2.5"/><path d="M56 70 H84 C104 70 104 36 126 36 H150 M84 70 C104 70 104 104 126 104 H150 M84 70 H150" fill="none" stroke="${i}" stroke-width="2.5"/><g fill="none" stroke="${i}" stroke-width="2.5"><rect x="150" y="28" width="16" height="16"/><rect x="150" y="62" width="16" height="16"/><rect x="150" y="96" width="16" height="16"/></g>`,
  swap: (i, a) => `<path d="M46 52 H146 M130 36 L148 52 L130 68" fill="none" stroke="${i}" stroke-width="3"/><path d="M154 92 H54 M70 76 L52 92 L70 108" fill="none" stroke="${a}" stroke-width="3"/>`,
  handshake: (i, a) => `<path d="M30 56 L58 48 L92 62 L116 52 L144 48 L172 56 V82 L148 86 L116 112 L96 100 L76 108 L58 90 L30 82 Z" fill="none" stroke="${i}" stroke-width="2.6"/><path d="M92 62 L110 76 C116 82 108 90 102 86 L92 80 M80 90 L96 100" fill="none" stroke="${a}" stroke-width="2.6"/>`,
  envelope: (i, a) => `<rect x="40" y="38" width="120" height="82" fill="none" stroke="${i}" stroke-width="2.6"/><path d="M40 38 L100 86 L160 38" fill="none" stroke="${a}" stroke-width="2.6"/>`,
  seal: (i, a) => `<circle cx="100" cy="62" r="30" fill="none" stroke="${a}" stroke-width="2.8"/><circle cx="100" cy="62" r="20" fill="none" stroke="${i}" stroke-width="1.8"/><path d="M84 88 L76 124 L100 112 L124 124 L116 88" fill="none" stroke="${i}" stroke-width="2.6"/>`,
  pen: (i, a) => `<path d="M48 112 L58 80 L136 24 L158 46 L82 104 Z" fill="none" stroke="${i}" stroke-width="2.6"/><path d="M122 36 L148 58 M58 80 L82 104" stroke="${a}" stroke-width="2.6"/><path d="M40 122 H110" stroke="${a}" stroke-width="2"/>`,
  newspaper: (i, a) => `<rect x="40" y="30" width="120" height="86" fill="none" stroke="${i}" stroke-width="2.6"/><rect x="50" y="40" width="40" height="30" fill="${a}" fill-opacity=".25" stroke="${a}" stroke-width="2"/><path d="M100 42 H150 M100 54 H150 M100 66 H140 M50 82 H150 M50 94 H150 M50 106 H120" stroke="${i}" stroke-width="2"/>`,
  lock: (i, a) => `<rect x="62" y="62" width="76" height="56" rx="3" fill="none" stroke="${i}" stroke-width="2.8"/><path d="M78 62 V46 C78 22 122 22 122 46 V62" fill="none" stroke="${a}" stroke-width="2.8"/><circle cx="100" cy="86" r="7" fill="${a}"/><path d="M100 92 V106" stroke="${a}" stroke-width="3"/>`,
  funnel: (i, a) => `<path d="M40 34 H160 L112 82 V116 L88 104 V82 Z" fill="none" stroke="${i}" stroke-width="2.6"/><path d="M60 48 H140" stroke="${a}" stroke-width="2.4"/><circle cx="76" cy="26" r="3" fill="${a}"/><circle cx="104" cy="22" r="3" fill="${a}"/><circle cx="130" cy="26" r="3" fill="${a}"/>`,
  ladder: (i, a) => `<path d="M40 112 H72 V90 H104 V68 H136 V46 H168" fill="none" stroke="${i}" stroke-width="2.8"/><path d="M146 28 L168 46 L146 56" fill="none" stroke="${a}" stroke-width="2.8"/>`,
  repeat: (i, a) => `<path d="M58 60 C58 38 142 38 142 60 M130 50 L142 60 L152 46" fill="none" stroke="${i}" stroke-width="2.8"/><path d="M142 84 C142 106 58 106 58 84 M70 94 L58 84 L48 98" fill="none" stroke="${a}" stroke-width="2.8"/>`,
  gauge: (i, a) => `<path d="M44 100 A56 56 0 0 1 156 100" fill="none" stroke="${i}" stroke-width="3"/><path d="M100 100 L132 62" stroke="${a}" stroke-width="3.4"/><circle cx="100" cy="100" r="6" fill="${a}"/><path d="M52 80 L60 84 M100 50 V60 M148 80 L140 84" stroke="${i}" stroke-width="2.2"/>`,
  vault: (i, a) => `<rect x="44" y="30" width="112" height="88" rx="4" fill="none" stroke="${i}" stroke-width="2.8"/><circle cx="100" cy="74" r="24" fill="none" stroke="${a}" stroke-width="2.8"/><circle cx="100" cy="74" r="6" fill="${a}"/><path d="M100 50 V58 M100 90 V98 M76 74 H84 M116 74 H124" stroke="${a}" stroke-width="2.2"/><path d="M60 118 V126 M140 118 V126" stroke="${i}" stroke-width="2.8"/>`,
  wrench: (i, a) => `<path d="M62 112 L112 62 C102 46 118 26 140 30 L126 46 L132 56 L148 50 C152 72 132 84 112 74 L74 116 Z" fill="none" stroke="${i}" stroke-width="2.6"/><circle cx="70" cy="108" r="3" fill="${a}"/>`,
  sofa: (i, a) => `<path d="M42 62 C42 48 62 48 62 62 V72 H138 V62 C138 48 158 48 158 62 V100 H42 Z" fill="none" stroke="${i}" stroke-width="2.7"/><path d="M62 72 V86 H138 V72" fill="none" stroke="${a}" stroke-width="2.4"/><path d="M52 100 V112 M148 100 V112" stroke="${i}" stroke-width="2.7"/>`,
  chair: (i, a) => `<path d="M76 30 V70 H128 V112 M76 70 V112 M76 48 H112" fill="none" stroke="${i}" stroke-width="2.8"/><path d="M70 90 H134" stroke="${a}" stroke-width="3"/>`,
  pin: (i, a) => `<path d="M100 120 C66 80 56 62 56 48 C56 30 76 20 100 20 C124 20 144 30 144 48 C144 62 134 80 100 120 Z" fill="none" stroke="${i}" stroke-width="2.8"/><circle cx="100" cy="48" r="14" fill="${a}" fill-opacity=".35" stroke="${a}" stroke-width="2.6"/>`,
  eye: (i, a) => `<path d="M32 70 C58 36 142 36 168 70 C142 104 58 104 32 70 Z" fill="none" stroke="${i}" stroke-width="2.8"/><circle cx="100" cy="70" r="20" fill="none" stroke="${a}" stroke-width="2.8"/><circle cx="100" cy="70" r="7" fill="${a}"/>`,
  mic2: (i, a) => `<path d="M48 54 H64 L96 30 V110 L64 86 H48 Z" fill="none" stroke="${i}" stroke-width="2.6"/><path d="M114 52 C128 64 128 78 114 90 M128 40 C150 58 150 84 128 102" fill="none" stroke="${a}" stroke-width="2.6"/>`,
  plane: (i, a) => `<path d="M32 78 L168 34 L130 112 L108 86 L84 98 L88 74 Z" fill="none" stroke="${i}" stroke-width="2.6"/><path d="M88 74 L168 34 M108 86 L168 34" stroke="${a}" stroke-width="2.2"/>`,
  cross: (i, a) => `<path d="M84 28 H116 V54 H142 V86 H116 V112 H84 V86 H58 V54 H84 Z" fill="${a}" fill-opacity=".2" stroke="${a}" stroke-width="2.8"/><path d="M38 70 H58 L66 52 L78 92 L88 70 H162" fill="none" stroke="${i}" stroke-width="2"/>`,
  flask: (i, a) => `<path d="M84 24 H116 M90 24 V58 L52 112 C48 120 54 124 62 124 H138 C146 124 152 120 148 112 L110 58 V24" fill="none" stroke="${i}" stroke-width="2.8"/><path d="M68 100 H132" stroke="${a}" stroke-width="2.6"/><circle cx="96" cy="88" r="4" fill="${a}"/><circle cx="112" cy="78" r="3" fill="${a}"/>`,
  puzzle: (i, a) => `<path d="M48 44 H80 C74 30 100 30 94 44 H126 V74 C112 68 112 96 126 90 V120 H48 Z" fill="none" stroke="${i}" stroke-width="2.7"/><path d="M126 44 H156 V76 H126" fill="none" stroke="${a}" stroke-width="2.7"/>`,
};

// ---- word -> motif rules. First match wins; tested on the page title, then item, then category, then section. --------
const RULES = [
  [/transformation office|\bpmo\b/, 'gears'],
  [/articles of association/, 'document'],
  [/\b(award|recogni|accolad|prize|honou?r)/, 'trophy'],
  [/\b(podcast|episode|audio|voice)/, 'mic'],
  [/\b(brochure|collateral)/, 'newspaper'],
  [/\b(press|newsroom|news|publication|publish|article|journal|briefing|bulletin|newsletter|editorial|commentary|blog|whitepaper|white paper|edition|report(?!ing))/, 'newspaper'],
  [/\b(academy|academies|training|learning|course|workshop|curriculum|mentor|graduate|school|education|university|e-learning|k-12|edtech|bootcamp)/, 'cap'],
  [/\b(career|vacanc|job|join us|work with us|internship|hiring)/, 'briefcase'],
  [/\b(contact|enquir|reach us|get in touch|speak with)/, 'envelope'],
  [/\b(healthcare|medical|life sciences|hospitals?\b|clinic|wellness|life & health)/, 'cross'],
  [/\b(heatmap|heat map|hotspot|concentrat)/, 'heat'],
  [/\b(sentiment|confidence|survey|poll|perception)/, 'gauge'],
  [/\b(yield|rental return|roi|return on)/, 'growth'],
  [/\b(pricing indic|price indic|index|indices|benchmark|afford)/, 'bars'],
  [/\b(volume|transaction (trend|data)|trend)/, 'bars'],
  [/\b(milestone|supply (pipelines?|outlook|schedule)|completion|handover|snagging|defect)/, 'timeline'],
  [/\b(instalment|schedule|cadence|calendar|renewal|expiry)/, 'calendar'],
  [/\b(aviation|aircraft|private jet|airline|space\b)/, 'plane'],
  [/\b(marine|yacht|maritime|ports? &|ports\b)/, 'compass'],
  [/\b(machine vision|photograph|rendering|visuals?|video|walkthrough|virtual tours?)/, 'eye'],
  [/\b(copywriting|op-eds?)/, 'pen'],
  [/\b(franchise)/, 'store'],
  [/\b(bond & insurance|guarantees?)/, 'shield'],
  [/\b(dfm|adx|ipo|sukuk|bond|rights issue|convertible|syndicated|banking)/, 'bank'],
  [/\b(escrow|hedging)/, 'vault'],
  [/\b(cyber|security systems)/, 'lock'],
  [/\b(oqood|title deed|registration|registry|permit|licen[cs]|trade licen|visa|noc|attestation|authority|administrative|admin|procedur|filing|paperwork|onboarding)/, 'checklist'],
  [/\b(exclusive mandates|mandate scoping|retainer|confidentiality|memos?|reporting|records?|ownership|constitution|shareholder framework)/, 'document'],
  [/\b(contract(?!ing|or)|agreement|spa\b|sale and purchase|mou|term sheet|lease agreement|tenancy|ejari|clause|drafting|documentation|legal doc)/, 'document'],
  [/\b(compliance|regulat|governance|legal|law|aml|kyc|audit|ethic|disclos|conduct|arbitration|dispute|litigation|policy|policies)/, 'scales'],
  [/\b(tax|vat|zakat|transfer pricing)/, 'document'],
  [/\b(insur|risk|protect|safeguard|assurance|resilien|continuity|security|safety|indemn|takaful)/, 'shield'],
  [/\b(sustainab|esg|green|net.?zero|carbon|environment|energy|solar|climate|leed|estidama|renewable|landscape|agri)/, 'leaf'],
  [/\b(nutraceutical|pharma|chemical|cosmetic|beverage|dairy|biotech|polymer|plastics)/, 'flask'],
  [/\b(managing partners|senior partners|partners & principals|diversity|inclusion|expat|placement|stakeholder)/, 'people'],
  [/\b(wellbeing|post-sales)/, 'heart'],
  [/\b(outcome)/, 'target'],
  [/\b(evidence|discovery|diagnos)/, 'search'],
  [/\b(long-term value)/, 'growth'],
  [/\b(delivery)\b/, 'checklist'],
  [/\b(partner|joint venture|jvs?\b|alliance|collaborat|syndicat|co-invest|consortium)/, 'rings'],
  [/\b(roll-?up|buy-and-build|consolidation|add-on|exit readiness|exits?\b)/, 'handshake'],
  [/\b(innovat|ideation|r&d|venture building|venture studio|incubat|start.?up|conceptualisation|deep-?tech|frontier)/, 'bulb'],
  [/\b(capex|cap table|cash)/, 'coins'],
  [/\b(dining|coffee|bakery|kitchen|cafe|f&b|restaurant)/, 'store'],
  [/\b(3pl|4pl|logistic|supply chain|freight|shipping|transport|fleet|cargo|last.?mile|fulfil|import|export|ev\b|charging|mobility|automotive|dealership|vehicle)/, 'truck'],
  [/\b(wholesale|trading|e-commerce|marketplaces?|omnichannel)/, 'bag'],
  [/\b(vault|sovereign|family office|family business|wealth|private client|high.?net)/, 'vault'],
  [/\b(digital|technolog|platform|software|data|analytic|ai\b|automation|robotics|cloud|crm|system|dashboard|proptech|fintech|saas|portal|mls\b|feeds?\b|web3|app\b)/, 'network'],
  [/\b(aftersales|parts\b)/, 'wrench'],
  [/\b(event|activation|roadshow|brand|marketing|campaign|advertis|broadcast|communication|promotion|publicity|content|social|public relations|\bpr\b|media)/, 'megaphone'],
  [/\b(customer|client experience|guest experience|loyalty|retention|service excellence|satisfaction|journey|after.?sales|community)/, 'heart'],
  [/\b(key account|vip|concierge|club|entertainment|attractions?|themed|sports|gaming|leisure)/, 'star'],
  [/\b(channel|distribution partner|partner network|reseller|go.?to.?market)/, 'channel'],
  [/\b(sales)\b(?! agent)/, 'funnel'],
  [/\b(merger|acquisition|m&a|divest|carve|takeover|buy.?out|buyout|deal|due diligence|transaction advisory)/, 'handshake'],
  [/\b(resale|secondary|re-?sale|swap|exchange)/, 'swap'],
  [/\b(succession|workforce|emirati|talent|recruit|executive search|leadership|people|hr\b|human|team|board|headhunt|staffing|founders|demographic)/, 'people'],
  [/\b(pipelines?|lead qualification|qualification)/, 'funnel'],
  [/\b(pric|fees?\b|commission|rate card|payment)/, 'tag'],
  [/\b(territor|land sourcing)/, 'map'],
  [/\b(site visits?)/, 'pin'],
  [/\b(interiors?|furnish|staging|furniture)/, 'sofa'],
  [/\b(structural|geotechnical|building services|construct|contracting|contractor|build(?:ing)? works|civil|mep\b|engineering|site|infrastructure project|procurement of works|project management|cost consult|quantity)/, 'crane'],
  [/\b(structur|holding|organisation|organization|operating model|restructur|entity|group structure|hierarch|org design)/, 'org'],
  [/\b(off.?plan|primary|launch|project launch|pre.?launch|new launch)/, 'blueprint'],
  [/\b(design|architect|master.?plan|planning|space plan|conceptual|schematic|drawing|blueprints?)/, 'blueprint'],
  [/\b(manufactur|industrial|factory|production|processing|plant|fabricat|assembly|materials)/, 'factory'],
  [/\b(warehous|storage|distribution centre|cold chain)/, 'warehouse'],
  [/\b(retail|shop|mall|store|boutique|food|merchand)/, 'store'],
  [/\b(hospitality|hotel|resort|serviced apartment|lodging)/, 'hotel'],
  [/\b(guest(?! experience| satisfaction)|booking|check-in)/, 'bed'],
  [/\b(holiday home|short.?term|vacation|airbnb|guest stay|stay)/, 'bed'],
  [/\b(workspace|hq\b|co-?working|business park|showroom)/, 'tower'],
  [/\b(lettings?|leasing|tenant|tenancy|rent(?:al)?|occupan|occupier|landlord|lease)/, 'key'],
  [/\b(pool|cleaning|hygiene|pest)/, 'wrench'],
  [/\b(maintenance|facilit|fm\b|repair|handyman|property management|service charge)/, 'wrench'],
  [/\b(villa|homes?|residential|townhouse|apartment|housing|property|real estate|estate|brokerage|agency|buyer|seller|sales? agent|viewing|listing|mortgage)/, 'house'],
  [/\b(offices?|commercial|corporate real|tower|asset|portfolio|reit|fund|trust)/, 'tower'],
  [/\b(bank|financ|credit|debt|loan|capital market|treasury|lending)/, 'bank'],
  [/\b(margin|monetis)/, 'tag'],
  [/\b(capital|equity|invest|fund(?:ing|raising)|raise|allocation|valuation|valuations|appraisal|worth|budget|revenue)/, 'coins'],
  [/\b(market entry|expansion|international|global|cross.?border|regional|gcc|saudi|middle east|rollout|roll-outs?|relocat|landing|geopolit)/, 'globe'],
  [/\b(strateg|vision|positioning|direction|roadmap|mandate|objective|goal)/, 'target'],
  [/\b(operation|process|efficien|lean|optimis|workflow|excellence|performance|productivity|transformation|cost)/, 'gears'],
  [/\b(map|location|geograph|district|community map|area|neighbourhood|neighborhood)/, 'map'],
  [/\b(research|analysis|study|insight|intelligence|assessment|diagnostic|review|feasib|benchmarking|sizing|forecast|outlook|scenario)/, 'search'],
  [/\b(growth|scale|scaling|grow|accelerat|momentum|upside)/, 'growth'],
  [/\b(about|who we are|heritage|history|our story|firm|overview|profile|values|mission)/, 'seal'],
  [/\b(office|advis|consult|enterprise|corporate|business|practice|solution)/, 'briefcase'],
];

// Section-level fallback (only used if nothing in the page's own words matched)
const SECTION_DEFAULT = {
  capabilities: 'briefcase', infrastructure: 'tower', opportunities: 'coins', intelligence: 'search', industries: 'factory', expertise: 'people', overview: 'seal',
};

// section accent (ink stays the same so the whole menu reads as one set)
const ACCENT = {
  capabilities: '#9b7a3c', infrastructure: '#2f6f6b', opportunities: '#8a3b36', intelligence: '#3d5a80', industries: '#6b6b2a', expertise: '#6a4a7a', overview: '#9b7a3c',
};

const INK = '#2c3035';

const hash = (s) => { let h = 7; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; };

export function motifFor(section, category, item, child) {
  const tiers = [child, item, category];
  for (const t of tiers) {
    if (!t) continue;
    const s = t.toLowerCase();
    for (const [re, m] of RULES) if (re.test(s)) return m;
  }
  return SECTION_DEFAULT[section] || 'briefcase';
}

const cache = new Map();

// Returns a data-URI SVG plate (940x650 so it crops cleanly in the 148x92 thumbnails and the large preview alike)
export function topicPlate(section, category, item, child) {
  const key = [section, category, item, child].join('|');
  if (cache.has(key)) return cache.get(key);
  const motif = motifFor(section, category, item, child);
  const accent = ACCENT[section] || '#9b7a3c';
  const h = hash(key);
  // Small per-page variation so sibling pages with the same motif are not pixel-identical: ground tone only
  const grounds = ['#f4f0e6', '#efeadd', '#f1eee7', '#ece8dc'];
  const ground = grounds[h % grounds.length];
  const body = M[motif](INK, accent);
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 940 650" preserveAspectRatio="xMidYMid slice">` +
    `<rect width="940" height="650" fill="${ground}"/>` +
    `<g stroke="${INK}" stroke-opacity=".07" stroke-width="1">${Array.from({ length: 12 }, (_, n) => `<path d="M0 ${n * 60} H940"/>`).join('')}${Array.from({ length: 16 }, (_, n) => `<path d="M${n * 60} 0 V650"/>`).join('')}</g>` +
    `<rect x="26" y="26" width="888" height="598" fill="none" stroke="${accent}" stroke-opacity=".55" stroke-width="2"/>` +
    `<rect x="38" y="38" width="864" height="574" fill="none" stroke="${accent}" stroke-opacity=".25" stroke-width="1"/>` +
    `<g transform="translate(140 94) scale(3.3)" stroke-linecap="round" stroke-linejoin="round" fill="none">${body}</g>` +
    `</svg>`;
  const uri = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  cache.set(key, uri);
  return uri;
}

export const MOTIF_NAMES = Object.keys(M);
