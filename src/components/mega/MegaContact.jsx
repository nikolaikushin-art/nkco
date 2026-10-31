// Contact menu · the seven-step Business Diagnostic, drawn inside the same white mega sheet as the other menus.
//   Left rail: title, one-line descriptor and picture (same anatomy and sizes as the other menus). Footer: contact line (same as the other menus).
//   Right: step header with progress, the step's questions (scrolls inside its own area), Back / Continue bar.
// All wording and options live in src/data/diagnostic.js. All styles live in src/styles/contact-diagnostic-v650.css (.nk-dx-*).
// Progress is kept in memory while the site is open, so closing the menu by accident does not lose the answers.
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown } from 'lucide-react';
import { MENU_IMAGES } from '../../data/menuDisplay';
import {
  STEPS, PRACTICE_CHOICES, OFFICE_EMAIL, COUNTRIES, DIAL_CODES, CONTACT_METHODS, stagesFor, STAGE_FIELDS, ENGAGEMENT_BY, CONFIDENTIALITY, SCOPE_BY, PRACTICE_TEXT, STAGE_CHALLENGES, STAGE_OBJECTIVES,
  FOCUS_BY, LEADERSHIP_BY, TIMEFRAMES_BY, NOTE_HINT, PRACTICE_CONTACT, PRACTICE_RAIL,
  HEALTH_AREAS, HEALTH_SCALE, COVERAGE_FUNCTIONS, COVERAGE_LEVELS, WHO_KNOWS, DISCLOSURE, APPROACH_BY, PRACTICE_PROFILE,
  STAGE_NOTE, STAGE_EMPTY, NEXT_STEPS, RAIL_STEP, GATE,
} from '../../data/diagnostic';

const ENDPOINT = process.env.REACT_APP_ENQUIRY_ENDPOINT || '/api/enquiry';
const F_TITLE = { fontFamily: "'Cormorant Garamond','EB Garamond',Georgia,serif", fontWeight: 500 };

// Local pictures (never blocked or offline): one per step, used as the fallback for the rail photo and as the in-step picture.
const PUB = process.env.PUBLIC_URL || '';
const PIC_SETS = { advisory: [5, 2, 8, 4, 6, 1], enterprise: [6, 8, 3, 1, 5, 7], brokerage: [3, 1, 5, 2, 7, 4] };
const picFor = (practice, step) => `${PUB}/brand/thumbs/arch-${(PIC_SETS[practice] || PIC_SETS.brokerage)[step]}.svg`;

function Pic({ src, fallback, className = 'nk-dx-pic' }) {
  const [url, setUrl] = useState(src || fallback);
  useEffect(() => { setUrl(src || fallback); }, [src, fallback]);
  return (
    <div className={className} aria-hidden="true">
      <img src={url} alt="" loading="lazy" onError={() => { if (url !== fallback) setUrl(fallback); }} />
    </div>
  );
}

const blank = () => ({
  step: 0, reached: 0, sent: null, dialTouched: false, entered: false,
  v: {
    practice: '', health: {}, coverage: {}, knows: [], disclose: '', approach: [], capacity: '', role: '', industry: '', employees: '', name: '', email: '', dial: '+971', phone: '', company: '', website: '', country: '', method: 'Email',
    stage: '', biz: {}, challenges: [], notes: '', objectives: [], focus: [], leadership: '', priorities: '', timeframe: '', outcome: '',
    services: [], engagement: '', confidentiality: '', scopeNote: '',
  },
});
let DRAFT = blank();

// Step positions (STEPS in data/diagnostic.js). Use these names, never bare numbers.
const S = { contact: 0, business: 1, challenges: 2, objectives: 3, scope: 4, review: 5 };
const RESET = { health: {}, coverage: {}, knows: [], disclose: '', approach: [], capacity: '', role: '', industry: '', employees: '', stage: '', biz: {}, challenges: [], objectives: [], focus: [], leadership: '', priorities: '', confidentiality: '', services: [], engagement: '', scopeNote: '' };
const practiceOf = (id) => PRACTICE_CHOICES.find((p) => p.id === id);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const stageOf = (id, practice) => stagesFor(practice).find((s) => s.id === id);
const textOf = (practice) => PRACTICE_TEXT[practice] || PRACTICE_TEXT.advisory;
const toggle = (arr, x) => (arr.includes(x) ? arr.filter((y) => y !== x) : arr.concat(x));
const cleanSite = (s) => s.trim().replace(/^https?:\/\//i, '').replace(/\/+$/, '');

// ---------- validation: returns { fieldId: message } for the step ----------
function validate(step, v) {
  const e = {};
  if (step === S.contact) {
    if (!v.practice) e.practice = 'Select the practice you would like to discuss.';
    const PC = PRACTICE_CONTACT[v.practice];
    if (PC && PC.capacity && !v.capacity) e.capacity = 'Select how you are enquiring.';
    if (PC) PC.fields.forEach((f) => { if (f.req && !v[f.id]) e[f.id] = 'Select an option.'; });
    if (!v.name.trim()) e.name = 'Enter your full name.';
    if (!v.email.trim()) e.email = 'Enter your business email.';
    else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Enter a valid email, for example name@company.com.';
    const digits = v.phone.replace(/[\s\-().]/g, '');
    if (!digits) e.phone = 'Enter your telephone number.';
    else if (!/^\d{6,12}$/.test(digits)) e.phone = 'Use 6 to 12 digits, without the country code.';
    if (!v.company.trim()) e.company = 'Enter your company name.';
    if (v.website.trim() && /\s/.test(v.website.trim())) e.website = 'Enter a website address without spaces.';
    if (!v.country) e.country = 'Select a country.';
  }
  if (step === S.business) {
    if (!v.stage) e.stage = 'Select the stage that best describes your situation.';
    else (STAGE_FIELDS[v.stage] || []).forEach((f) => { if (f.req && !String(v.biz[f.id] || '').trim()) e[`biz_${f.id}`] = f.type === 'select' ? 'Select an option.' : 'This field is required.'; });
  }
  if (step === S.objectives && !v.timeframe) e.timeframe = 'Select a preferred timeframe.';
  return e;
}

// ---------- review summary (also the body of the submitted enquiry) ----------
function summarise(v) {
  const st = stageOf(v.stage, v.practice);
  const T = textOf(v.practice);
  const bizRows = [[T.stage[2], st ? st.label : '']];
  (STAGE_FIELDS[v.stage] || []).forEach((f) => bizRows.push([f.label, v.biz[f.id] || '']));
  const list = (a) => a.join('; ');
  const pr = practiceOf(v.practice);
  return [
    { key: 'contact', title: 'Contact', step: S.contact, rows: [['Practice', pr ? pr.label : ''], ['Name', v.name.trim()], ['Email', v.email.trim()], ['Telephone', `${v.dial} ${v.phone.replace(/[\s\-().]/g, '')}`], ['Enquiring as', v.capacity], ['Company', v.company.trim()], ['Your role', v.role], ['Sector', v.industry], ['Employees', v.employees], ['Website', cleanSite(v.website)], ['Country', v.country], ['Preferred contact', v.method]] },
    { key: 'business', title: 'Your business', step: S.business, rows: bizRows },
    { key: 'challenges', title: 'Profile', step: S.challenges, rows: [
      ['Health check', Object.entries(v.health).map(([k, x]) => `${k} ${x}/5`).join('; ')],
      ['Management coverage', Object.entries(v.coverage).filter(([, x]) => x !== 'Not needed').map(([k, x]) => `${k}: ${x}`).join('; ')],
      ['Who may know', list(v.knows)], ['Introduction', v.disclose], ['Approach', list(v.approach)],
      ['Challenges', list(v.challenges)], ['Notes', v.notes.trim()]] },
    { key: 'objectives', title: 'Objectives', step: S.objectives, rows: [['Objectives', list(v.objectives)], [T.focus || 'Areas to strengthen', list(v.focus)], [T.lead || 'Current leadership', v.leadership], ['Implementation priorities', v.priorities.trim()], ['Confidentiality', v.confidentiality], ['Timeframe', v.timeframe], ['Intended outcome', v.outcome.trim()]] },
    { key: 'scope', title: 'Scope', step: S.scope, rows: [[T.scope[2], list(v.services)], ['How to start', v.engagement], ['Anything to add', (v.scopeNote || '').trim()]] },
  ].map((s) => ({ ...s, rows: s.rows.filter(([, val]) => val && String(val).trim()) }));
}
const asText = (secs) => secs.map((s) => `${s.title.toUpperCase()}\n${s.rows.map(([k, val]) => `${k}: ${val}`).join('\n')}`).join('\n\n');

// ---------- small building blocks ----------
function Field({ id, label, req, error, hint, wide, span, grow, children }) {
  return (
    <div className="nk-dx-f" data-grow={grow || undefined} data-wide={wide || undefined} data-span={span || undefined} data-err={error ? 'true' : undefined}>
      <label className="nk-dx-l" htmlFor={id}>{label}{req && <span className="nk-dx-req" aria-hidden="true"> *</span>}{!req && hint && <span className="nk-dx-hint"> {hint}</span>}</label>
      {children}
      {error && <p className="nk-dx-err" id={`${id}-err`} role="alert">{error}</p>}
    </div>
  );
}
const ctl = (id, error) => ({ id, 'aria-invalid': error ? 'true' : undefined, 'aria-describedby': error ? `${id}-err` : undefined });

function Select({ id, value, onChange, options, error, placeholder = 'Select' }) {
  return (
    <span className="nk-dx-sel" data-empty={!value || undefined}>
      <select className="nk-dx-in" {...ctl(id, error)} value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <ChevronDown size={16} aria-hidden="true" />
    </span>
  );
}

// Radio / checkbox cards: native inputs, drawn by CSS from the :checked state
function Choice({ type, name, label, note, checked, onChange, invalid }) {
  return (
    <label className="nk-dx-ch" data-type={type} data-on={checked || undefined} data-invalid={invalid || undefined}>
      <input type={type} name={name} checked={checked} onChange={onChange} />
      <span className="nk-dx-mark" aria-hidden="true">{checked && (type === 'checkbox' ? <Check size={12} strokeWidth={3} /> : <i />)}</span>
      <span className="nk-dx-ct">{label}{note && <small className="nk-dx-note-s">{note}</small>}</span>
    </label>
  );
}
function Group({ legend, req, error, cols, children, id }) {
  return (
    <fieldset className="nk-dx-g" data-err={error ? 'true' : undefined} aria-describedby={error ? `${id}-err` : undefined}>
      {legend && <legend className="nk-dx-l">{legend}{req && <span className="nk-dx-req" aria-hidden="true"> *</span>}</legend>}
      <div className="nk-dx-cards" data-cols={cols || 2}>{children}</div>
      {error && <p className="nk-dx-err" id={`${id}-err`} role="alert">{error}</p>}
    </fieldset>
  );
}

// Segmented answer row (rating 1-5, or a short list of levels). Click the chosen one again to clear it.
function Seg({ id, label, options, value, onChange }) {
  return (
    <div className="nk-dx-sr-row">
      <span className="nk-dx-sr-l" id={`${id}-l`}>{label}</span>
      <div className="nk-dx-seg" role="radiogroup" aria-labelledby={`${id}-l`}>
        {options.map((o) => <button type="button" key={o} role="radio" aria-checked={value === o} data-on={value === o || undefined} onClick={() => onChange(value === o ? '' : o)}>{o}</button>)}
      </div>
    </div>
  );
}
const setKey = (obj, k, val) => { const n = { ...obj }; if (val) n[k] = val; else delete n[k]; return n; };

// Gateway: shown before the form. Three columns like Capabilities; a row opens to one line and a link that enters the form.
function Gateway({ onEnter }) {
  const [open, setOpen] = useState({});
  return (
    <div className="nk-gw" role="group" aria-label="Choose where to begin">
      {GATE.map((g) => {
        const pr = practiceOf(g.id);
        return (
          <div className="nk-gw-col" key={g.id}>
            <h3 className="nk-gw-h" style={F_TITLE}>{pr.label}</h3>
            <div className="nk-gw-rows">
              {g.rows.map((r, i) => {
                const key = `${g.id}-${i}`;
                const on = open[g.id] === key;
                const note = r.note || STAGE_NOTE[r.id] || pr.line;
                return (
                  <div className="nk-gw-row" key={key} data-open={on || undefined}>
                    <button type="button" className="nk-gw-t" aria-expanded={on} onClick={() => setOpen((o) => ({ ...o, [g.id]: on ? null : key }))}>
                      <span>{r.title}</span><ChevronDown size={15} aria-hidden="true" />
                    </button>
                    <div className="nk-gw-b" hidden={!on}>
                      <p>{note}</p>
                      <button type="button" className="nk-gw-in" onClick={() => onEnter(g.id, r.id)}>Begin with this<ArrowRight size={13} aria-hidden="true" /></button>
                    </div>
                  </div>
                );
              })}
            </div>
            <button type="button" className="nk-gw-go" onClick={() => onEnter(g.id, '')}><i aria-hidden="true" /><span>{g.cta}</span></button>
          </div>
        );
      })}
    </div>
  );
}

export default function MegaContact({ onClose, mode = 'top', sections: navSections = [], onSelectSection }) {
  const [st, setSt] = useState(DRAFT);
  const [errs, setErrs] = useState({});
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  const headRef = useRef(null);
  const bodyRef = useRef(null);
  const mounted = useRef(false);
  const { step, v, sent } = st;

  useEffect(() => { DRAFT = st; }, [st]);

  // after a step change: scroll the questions to the top and move focus to the step title
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
    if (mounted.current && headRef.current) headRef.current.focus({ preventScroll: true });
    mounted.current = true;
  }, [step, sent]);

  const set = (patch) => setSt((s) => ({ ...s, ...patch }));
  const setV = (patch, extra = {}) => setSt((s) => ({ ...s, ...extra, v: { ...s.v, ...patch } }));
  const setBiz = (id, val) => setSt((s) => ({ ...s, v: { ...s.v, biz: { ...s.v.biz, [id]: val } } }));
  const clearErr = (...ids) => setErrs((e) => { const n = { ...e }; ids.forEach((i) => delete n[i]); return n; });

  const goto = (n) => { setErrs({}); setFailed(false); set({ step: n, reached: Math.max(st.reached, n) }); };
  const next = () => {
    const e = validate(step, v);
    if (Object.keys(e).length) {
      setErrs(e);
      requestAnimationFrame(() => {
        const first = bodyRef.current && bodyRef.current.querySelector('[aria-invalid="true"], fieldset[data-err="true"] input');
        if (first) first.focus();
      });
      return;
    }
    setErrs({});
    goto(step + 1);
  };
  const back = () => goto(Math.max(0, step - 1));

  const sections = useMemo(() => summarise(v), [v]);

  const submit = async () => {
    // all required steps must be complete before sending (an Edit link can leave one incomplete)
    for (const n of [S.contact, S.business, S.objectives]) {
      const e = validate(n, v);
      if (Object.keys(e).length) { setErrs(e); goto(n); setErrs(e); return; }
    }
    setBusy(true); setFailed(false);
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 20000);
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: ctrl.signal,
        body: JSON.stringify({ contact: { name: v.name.trim(), email: v.email.trim(), company: v.company.trim() }, sections, text: asText(sections), page: typeof window !== 'undefined' ? window.location.pathname : '/', website_hp: '' }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.reference) throw new Error('send failed');
      set({ sent: { reference: data.reference, email: v.email.trim() } });
    } catch (err) {
      setFailed(true);
    } finally {
      clearTimeout(timer); setBusy(false);
    }
  };

  // Gateway -> form. Changing practice clears the answers that belong to the previous one.
  const enter = (practice, stageId) => {
    setErrs({}); setFailed(false);
    setSt((s0) => ({ ...s0, entered: true, step: 0, reached: s0.v.practice === practice ? s0.reached : 0, v: { ...s0.v, ...(s0.v.practice && s0.v.practice !== practice ? RESET : {}), practice, ...(stageId ? { stage: stageId, biz: s0.v.stage === stageId ? s0.v.biz : {} } : {}) } }));
  };
  const leave = () => { setErrs({}); set({ entered: false }); };

  const finish = () => { DRAFT = blank(); if (onClose) onClose(); };

  // ---------- steps ----------
  // Step 1 · the practice was chosen in the gateway. Shown as the same serif heading with a teal hairline, plus a link back.
  const stepPractice = (
    <div className="nk-dx-chosen">
      <h4 className="nk-dx-chosen-t" style={F_TITLE}>{practiceOf(v.practice) ? practiceOf(v.practice).label : ''}</h4>
      {stageOf(v.stage, v.practice) && <span className="nk-dx-chosen-s">{stageOf(v.stage, v.practice).group}</span>}
      <button type="button" className="nk-dx-chg" onClick={leave}>Change<span className="nk-dx-sr"> practice</span></button>
    </div>
  );

  // Step 1 · different for each practice: own heading, own questions. Nothing is shown until a practice is chosen.
  const PC = PRACTICE_CONTACT[v.practice];
  const extra = (f) => (
    <Field key={f.id} id={`dx-${f.id}`} label={f.label} req={f.req} error={errs[f.id]}>
      <Select id={`dx-${f.id}`} value={v[f.id]} options={f.options} error={errs[f.id]} onChange={(x) => { setV({ [f.id]: x }); clearErr(f.id); }} />
    </Field>
  );
  const stepContact = (
    <>
    {stepPractice}
    {!PC ? (
      <div className="nk-dx-block nk-dx-wait"><p>Select a practice above. The questions that follow are specific to it.</p></div>
    ) : (
      <div className="nk-dx-block" key={v.practice}>
        <h4 className="nk-dx-sub">{PC.sub}</h4>
        {PC.capacity && (
          <Group legend={PC.capacity.label} req cols={4} error={errs.capacity} id="dx-capacity">
            {PC.capacity.options.map((o) => <Choice key={o} type="radio" name="dx-capacity" label={o} checked={v.capacity === o} invalid={!!errs.capacity} onChange={() => { setV({ capacity: o }); clearErr('capacity'); }} />)}
          </Group>
        )}
        <div className="nk-dx-grid" data-cols="3">
          <Field id="dx-name" label="Full name" req error={errs.name}>
            <input className="nk-dx-in" {...ctl('dx-name', errs.name)} autoComplete="name" placeholder="Full name" value={v.name} onChange={(e) => { setV({ name: e.target.value }); clearErr('name'); }} />
          </Field>
          <Field id="dx-email" label="Business email" req error={errs.email}>
            <input className="nk-dx-in" {...ctl('dx-email', errs.email)} type="email" autoComplete="email" placeholder="name@company.com" value={v.email} onChange={(e) => { setV({ email: e.target.value }); clearErr('email'); }} />
          </Field>
          <Field id="dx-company" label={PC.company} req error={errs.company}>
            <input className="nk-dx-in" {...ctl('dx-company', errs.company)} autoComplete="organization" placeholder={PC.company} value={v.company} onChange={(e) => { setV({ company: e.target.value }); clearErr('company'); }} />
          </Field>
          <Field id="dx-phone" label="Telephone number" req error={errs.phone}>
            <div className="nk-dx-tel">
              <span className="nk-dx-sel nk-dx-dial">
                <select className="nk-dx-in" aria-label="Country code" value={v.dial} onChange={(e) => setV({ dial: e.target.value }, { dialTouched: true })}>
                  {DIAL_CODES.map(([c, n]) => <option key={c + n} value={c} title={n}>{c}</option>)}
                </select>
              </span>
              <input className="nk-dx-in" {...ctl('dx-phone', errs.phone)} type="tel" autoComplete="tel-national" inputMode="tel" placeholder="50 123 4567" value={v.phone} onChange={(e) => { setV({ phone: e.target.value }); clearErr('phone'); }} />
            </div>
          </Field>
          {PC.fields.map(extra)}
          <Field id="dx-country" label="Country of operation" req error={errs.country}>
            <Select id="dx-country" value={v.country} error={errs.country} options={COUNTRIES} placeholder="Select country"
              onChange={(c) => { const hit = DIAL_CODES.find(([, n]) => n === c); setSt((s) => ({ ...s, v: { ...s.v, country: c, dial: !s.dialTouched && hit ? hit[0] : s.v.dial } })); clearErr('country'); }} />
          </Field>
          {PC.website && (
            <Field id="dx-site" label="Company website" span="2" error={errs.website}>
              <input className="nk-dx-in" {...ctl('dx-site', errs.website)} inputMode="url" autoComplete="url" placeholder="Optional" value={v.website} onChange={(e) => { setV({ website: e.target.value }); clearErr('website'); }} />
            </Field>
          )}
          <div className="nk-dx-f" data-wide="true">
            <Group legend="Preferred contact method" cols={3} id="dx-method">
              {CONTACT_METHODS.map((m) => <Choice key={m} type="radio" name="dx-method" label={m} checked={v.method === m} onChange={() => setV({ method: m })} />)}
            </Group>
          </div>
        </div>
      </div>
    )}
    </>
  );

  const T = textOf(v.practice);
  const stageFields = STAGE_FIELDS[v.stage] || [];
  const stBiz = (
    <div className="nk-dx-split">
      <div className="nk-dx-col">
      <Group legend={T.stage[2]} req cols={1} error={errs.stage} id="dx-stage">
        {stagesFor(v.practice).map((s) => <Choice key={s.id} type="radio" name="dx-stage" label={s.label} note={STAGE_NOTE[s.id]} checked={v.stage === s.id} invalid={!!errs.stage} onChange={() => { setV({ stage: s.id }); clearErr('stage'); }} />)}
      </Group>
        <Pic className="nk-dx-stepimg" src="" fallback={picFor(v.practice, S.business)} />
      </div>
      {stageOf(v.stage, v.practice) ? (
        <div className="nk-dx-block" key={v.stage}>
          <h4 className="nk-dx-sub">{stageOf(v.stage, v.practice).group}</h4>
          <div className="nk-dx-grid">
            {stageFields.map((f) => {
              const id = `dx-biz-${f.id}`; const val = v.biz[f.id] || ''; const er = errs[`biz_${f.id}`];
              return (
                <Field key={f.id} id={id} label={f.label} req={f.req} error={er} wide={f.wide}>
                  {f.type === 'select' && <Select id={id} value={val} options={f.options} error={er} onChange={(x) => { setBiz(f.id, x); clearErr(`biz_${f.id}`); }} />}
                  {f.type === 'text' && <input className="nk-dx-in" {...ctl(id, er)} placeholder={f.placeholder} value={val} onChange={(e) => { setBiz(f.id, e.target.value); clearErr(`biz_${f.id}`); }} />}
                  {f.type === 'area' && <textarea className="nk-dx-in nk-dx-area" {...ctl(id, er)} rows={4} placeholder={f.placeholder} value={val} onChange={(e) => setBiz(f.id, e.target.value)} />}
                </Field>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="nk-dx-block nk-dx-ask">
          <h4 className="nk-dx-sub">{(STAGE_EMPTY[v.practice] || STAGE_EMPTY.advisory)[0]}</h4>
          <ol className="nk-dx-list">
            {(STAGE_EMPTY[v.practice] || STAGE_EMPTY.advisory)[1].map((t, i) => <li key={t}><b>{String(i + 1).padStart(2, '0')}</b><span>{t}</span></li>)}
          </ol>
          <p className="nk-dx-hintline">Select your situation on the left. The questions that follow depend on it.</p>
        </div>
      )}
    </div>
  );

  const PP = PRACTICE_PROFILE[v.practice] || PRACTICE_PROFILE.advisory;
  const stChallenges = (
    <div className={`nk-dx-split nk-dx-split--even${v.practice === 'brokerage' ? ' nk-dx-split--three' : ''}`}>
      <div className="nk-dx-col">
        {v.practice === 'advisory' && (
          <>
            <h4 className="nk-dx-sub">{PP.legend}<span className="nk-dx-hint"> {PP.hint}</span></h4>
            <div className="nk-dx-seg-list">
              {HEALTH_AREAS.map((a, i) => <Seg key={a} id={`dx-h${i}`} label={a} options={HEALTH_SCALE} value={v.health[a] || ''} onChange={(x) => setV({ health: setKey(v.health, a, x) })} />)}
            </div>
          </>
        )}
        {v.practice === 'enterprise' && (
          <>
            <h4 className="nk-dx-sub">{PP.legend}</h4>
            <div className="nk-dx-seg-list">
              {COVERAGE_FUNCTIONS.map((a, i) => <Seg key={a} id={`dx-c${i}`} label={a} options={COVERAGE_LEVELS} value={v.coverage[a] || ''} onChange={(x) => setV({ coverage: setKey(v.coverage, a, x) })} />)}
            </div>
          </>
        )}
        {v.practice === 'brokerage' && (
          <>
            <Group legend={PP.legend} cols={1} id="dx-knows">
              {WHO_KNOWS.map((c) => <Choice key={c} type="checkbox" name="dx-knows" label={c} checked={v.knows.includes(c)} onChange={() => setV({ knows: toggle(v.knows, c) })} />)}
            </Group>
            <Group legend="How should the business be introduced?" cols={1} id="dx-disc">
              {DISCLOSURE.map((c) => <Choice key={c} type="radio" name="dx-disc" label={c} checked={v.disclose === c} onChange={() => setV({ disclose: c })} />)}
            </Group>
          </>
        )}
      </div>
      {v.practice === 'brokerage' ? (
        <>
          <div className="nk-dx-col">
            <Group legend={v.stage === 'acquire' || v.stage === 'invest' ? 'Who should we approach for you?' : 'Who should we approach?'} cols={1} id="dx-appr">
              {(APPROACH_BY[v.stage] || APPROACH_BY.sell).map((c) => <Choice key={c} type="checkbox" name="dx-appr" label={c} checked={v.approach.includes(c)} onChange={() => setV({ approach: toggle(v.approach, c) })} />)}
            </Group>
            <Field id="dx-notes" label="Notes" hint="(optional)" wide grow>
              <textarea className="nk-dx-in nk-dx-area" id="dx-notes" rows={2} placeholder={(NOTE_HINT[v.practice] || NOTE_HINT.advisory)[0]} value={v.notes} onChange={(e) => setV({ notes: e.target.value })} />
            </Field>
          </div>
          <div className="nk-dx-col">
            <Group legend={PP.right} cols={1} id="dx-ch">
              {(STAGE_CHALLENGES[v.stage] || STAGE_CHALLENGES.established).map((c) => <Choice key={c} type="checkbox" name="dx-ch" label={c} checked={v.challenges.includes(c)} onChange={() => setV({ challenges: toggle(v.challenges, c) })} />)}
            </Group>
          </div>
        </>
      ) : (
        <div className="nk-dx-col">
          <Group legend={PP.right} cols={1} id="dx-ch">
            {(STAGE_CHALLENGES[v.stage] || STAGE_CHALLENGES.established).map((c) => <Choice key={c} type="checkbox" name="dx-ch" label={c} checked={v.challenges.includes(c)} onChange={() => setV({ challenges: toggle(v.challenges, c) })} />)}
          </Group>
          <Field id="dx-notes" label="Notes" hint="(optional)" wide grow>
            <textarea className="nk-dx-in nk-dx-area" id="dx-notes" rows={2} placeholder={(NOTE_HINT[v.practice] || NOTE_HINT.advisory)[0]} value={v.notes} onChange={(e) => setV({ notes: e.target.value })} />
          </Field>
        </div>
      )}
    </div>
  );

  // Fills the left column of Objectives: the enquiry so far, as read by the partner. Same rows as the review.
  const recapRows = [['Situation', (stageOf(v.stage, v.practice) || {}).label], ['Company', v.company.trim()], ['Sector', v.biz.industry || v.industry], ['Location', v.biz.location || v.country]].filter(([, x]) => x);
  const recap = (
    <div className="nk-dx-recap">
      <h4 className="nk-dx-sub">Your enquiry so far</h4>
      <dl>{recapRows.map(([k, x]) => <div key={k}><dt>{k}</dt><dd>{x}</dd></div>)}</dl>
    </div>
  );

  const stObjectives = (
    <div className="nk-dx-split">
      <div className="nk-dx-col">
        <Group legend="What would you like to achieve?" cols={1} id="dx-ob">
          {(STAGE_OBJECTIVES[v.stage] || STAGE_OBJECTIVES.established).map((o) => <Choice key={o} type="checkbox" name="dx-ob" label={o} checked={v.objectives.includes(o)} onChange={() => setV({ objectives: toggle(v.objectives, o) })} />)}
        </Group>
        {recap}
      </div>
      <div className="nk-dx-col">
        <Group legend="Preferred timeframe" req cols={2} error={errs.timeframe} id="dx-tf">
          {(TIMEFRAMES_BY[v.practice] || TIMEFRAMES_BY.advisory).map((t) => <Choice key={t} type="radio" name="dx-tf" label={t} checked={v.timeframe === t} invalid={!!errs.timeframe} onChange={() => { setV({ timeframe: t }); clearErr('timeframe'); }} />)}
        </Group>
        {v.practice === 'brokerage' ? (
          <Field id="dx-conf" label="Confidentiality" wide><Select id="dx-conf" value={v.confidentiality} options={CONFIDENTIALITY} onChange={(x) => setV({ confidentiality: x })} /></Field>
        ) : (
          <div className="nk-dx-grid">
            <Field id="dx-lead" label={T.lead}><Select id="dx-lead" value={v.leadership} options={LEADERSHIP_BY[v.practice] || []} onChange={(x) => setV({ leadership: x })} /></Field>
            <Field id="dx-prio" label="Implementation priorities"><input className="nk-dx-in" id="dx-prio" placeholder="For example systems, people" value={v.priorities} onChange={(e) => setV({ priorities: e.target.value })} /></Field>
          </div>
        )}
        <Field id="dx-out" label="Intended outcome" hint="(optional)" wide grow>
          <textarea className="nk-dx-in nk-dx-area" id="dx-out" rows={3} placeholder={(NOTE_HINT[v.practice] || NOTE_HINT.advisory)[1]} value={v.outcome} onChange={(e) => setV({ outcome: e.target.value })} />
        </Field>
      </div>
    </div>
  );

  const NX = NEXT_STEPS[v.practice] || NEXT_STEPS.advisory;
  const stScope = (
    <div className="nk-dx-split nk-dx-split--even">
      <div className="nk-dx-col">
        <Group legend={T.scope[2]} cols={2} id="dx-sv">
          {(SCOPE_BY[v.practice] || SCOPE_BY.advisory).map((it) => <Choice key={it} type="checkbox" name="dx-sv" label={it} checked={v.services.includes(it)} onChange={() => setV({ services: toggle(v.services, it) })} />)}
        </Group>
        <Group legend="How would you like to start?" cols={2} id="dx-en">
          {(ENGAGEMENT_BY[v.practice] || ENGAGEMENT_BY.advisory).map((o) => <Choice key={o} type="radio" name="dx-en" label={o} checked={v.engagement === o} onChange={() => setV({ engagement: o })} />)}
        </Group>
      </div>
      <div className="nk-dx-col nk-dx-next">
        <h4 className="nk-dx-sub">{NX[0]}</h4>
        <ol className="nk-dx-list nk-dx-list--rich">
          {NX[1].map(([h, t], i) => <li key={h}><b>{String(i + 1).padStart(2, '0')}</b><span><strong>{h}</strong><small>{t}</small></span></li>)}
        </ol>
        <Field id="dx-sn" label="Anything else you would like us to know" hint="(optional)" wide grow>
          <textarea className="nk-dx-in nk-dx-area" id="dx-sn" rows={3} placeholder="Questions, constraints or people we should speak to" value={v.scopeNote} onChange={(e) => setV({ scopeNote: e.target.value })} />
        </Field>
      </div>
    </div>
  );

  const stReview = (
    <>
      {failed && (
        <p className="nk-dx-fail" role="alert">
          Your enquiry could not be sent. Check your connection and try again, or{' '}
          <a href={`mailto:${OFFICE_EMAIL}?subject=${encodeURIComponent('NK&CO Business Diagnostic')}&body=${encodeURIComponent(asText(sections))}`}>send it by email</a>.
        </p>
      )}
      <p className="nk-dx-hintline nk-dx-hintline--top">NK&amp;CO uses these details only to respond to this enquiry.</p>
      <div className="nk-dx-rev">
        {[[0], [1, 4], [2, 3]].map((col, ci) => (
          <div className="nk-dx-rc" key={ci}>
            {col.map((n) => sections[n]).map((s) => (
              <section className="nk-dx-rs" key={s.key}>
                <div className="nk-dx-rh"><h4>{s.title}</h4><button type="button" className="nk-dx-edit" onClick={() => goto(s.step)} aria-label={`Edit ${s.title}`}>Edit</button></div>
                {s.rows.length ? (
                  <dl>{s.rows.map(([k, val]) => <div key={k}><dt>{k}</dt><dd>{val}</dd></div>)}</dl>
                ) : <p className="nk-dx-none">Nothing added. <button type="button" className="nk-dx-edit" onClick={() => goto(s.step)}>Add details</button></p>}
              </section>
            ))}
          </div>
        ))}
      </div>
    </>
  );

  const TITLES = [
    PC ? [PC.title, PC.lead] : ['Your contact information', 'Choose the practice you would like to discuss. The form that follows is specific to it.'],
    T.stage,
    [PP.title, PP.lead],
    T.objectives,
    T.scope,
    ['Review and submit', 'Check your answers. You can return to any step to amend them.'],
  ];
  const BODIES = [stepContact, stBiz, stChallenges, stObjectives, stScope, stReview];
  const last = step === STEPS.length - 1;

  // ---------- left rail ----------
  const rp = st.entered ? v.practice : '';
  const R = PRACTICE_RAIL[rp] || PRACTICE_RAIL.none;
  const rail = (
    <aside className="nk-dx-rail">
      <h2 className="nk-dx-h" style={F_TITLE}>Contact us</h2>
      <p className="nk-dx-tag">{practiceOf(rp) ? practiceOf(rp).label : 'Business Diagnostic'}</p>
      <Pic src={R.image} fallback={picFor(rp, st.entered ? step : 0)} />
      <p className="nk-dx-rl" key={`${rp || 'none'}-${step}`}>{(st.entered && step > 0 && RAIL_STEP[v.practice] && RAIL_STEP[v.practice][step]) || R.lead}</p>
      <a className="nk-dx-go" href={R.to}><i aria-hidden="true" /><span>{R.cta}</span><b className="nk-dx-ar" aria-hidden="true" /></a>
    </aside>
  );

  // Footer row, identical to the other menus: hairline, "Contact the office" + e-mail.
  const foot = (
    <div className="nk-dx-foot">
      <a href={`mailto:${OFFICE_EMAIL}?subject=NK%26CO%20Enquiry`}><span>Contact the office</span><ArrowUpRight size={14} aria-hidden="true" /></a>
      <a href={`mailto:${OFFICE_EMAIL}`} className="nk-dx-mail">{OFFICE_EMAIL}</a>
    </div>
  );

  // Hamburger (desktop): the same row of section tabs as every other menu, with "Contact us" as the current one.
  const tabs = mode === 'burger' && navSections.length > 0 && (
    <div className="nk-dx-tabs" role="tablist" aria-label="Main navigation">
      {navSections.map((sec) => {
        const cur = sec.key === 'contact';
        return (
          <button key={sec.key} type="button" role="tab" className="nk-dx-tab" aria-selected={cur} data-active={cur} onClick={() => { if (!cur && onSelectSection) onSelectSection(sec.key); }}>{sec.label}</button>
        );
      })}
    </div>
  );

  if (sent) {
    return (
      <>
      {tabs}
      <div className="nk-dx-wrap">
      <div className="nk-dx" data-done="true">
        {rail}
        <section className="nk-dx-main nk-dx-thanks" aria-live="polite">
          <span className="nk-dx-tick" aria-hidden="true"><Check size={22} strokeWidth={2.2} /></span>
          <h3 className="nk-dx-th" style={F_TITLE} ref={headRef} tabIndex={-1}>Thank you. Your enquiry has been received.</h3>
          <p>Your reference is <strong>{sent.reference}</strong>. Please quote it in any correspondence.</p>
          <p>NK&amp;CO will review your responses and contact you by {v.method === 'WhatsApp' ? 'WhatsApp or email' : v.method === 'Telephone' ? 'telephone or email' : 'email'} with the appropriate next steps. An acknowledgement has been sent to {sent.email}.</p>
          <p className="nk-dx-small">This is an initial review by our team, not a formal recommendation or proposal.</p>
          <button type="button" className="nk-dx-btn" onClick={finish}>Close</button>
        </section>
      </div>
      {foot}
      </div>
      </>
    );
  }

  if (!st.entered) {
    return (
      <>
      {tabs}
      <div className="nk-dx-wrap">
      <div className="nk-dx" data-gate="true">
        {rail}
        <section className="nk-dx-main nk-dx-gate">
          <h3 className="nk-dx-sr" ref={headRef} tabIndex={-1}>Choose where to begin</h3>
          <Gateway onEnter={enter} />
        </section>
      </div>
      {foot}
      </div>
      </>
    );
  }

  return (
    <>
    {tabs}
    <div className="nk-dx-wrap">
    <div className="nk-dx" data-step={step}>
      {rail}
      <section className="nk-dx-main">
        <form className="nk-dx-form" noValidate onSubmit={(e) => { e.preventDefault(); if (last) submit(); else next(); }}>
          <div className="nk-dx-body" ref={bodyRef} key={step}>
            <input className="nk-dx-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" name="website_hp" defaultValue="" />
            {step === 0 ? (
              <div className="nk-dx-sr">
                <h3 ref={headRef} tabIndex={-1}>{TITLES[step][0]}</h3>
                <p>{TITLES[step][1]}</p>
              </div>
            ) : (
              <div className="nk-dx-hd">
                <h3 ref={headRef} tabIndex={-1} style={F_TITLE}>{TITLES[step][0]}</h3>
                <p>{TITLES[step][1]}</p>
              </div>
            )}
            {BODIES[step]}
          </div>
          <div className="nk-dx-bar">
            {step > 0 ? <button type="button" className="nk-dx-back" onClick={back}><ArrowLeft size={16} aria-hidden="true" />Back</button> : <span />}
            <nav className="nk-dx-steps" aria-label={`Progress, step ${step + 1} of ${STEPS.length}`}>
              {STEPS.map((x, i) => (
                <button type="button" key={x.key} className="nk-dx-stp" data-done={i < step || undefined} data-cur={i === step || undefined} disabled={i > st.reached || i === step} aria-current={i === step ? 'step' : undefined} onClick={() => goto(i)}>
                  <i aria-hidden="true" /><span>{x.label}</span>
                </button>
              ))}
            </nav>
            {last
              ? <button type="submit" className="nk-dx-btn" disabled={busy}>{busy ? 'Sending' : failed ? 'Try again' : 'Submit business enquiry'}</button>
              : <button type="submit" className="nk-dx-btn">Continue<ArrowRight size={16} aria-hidden="true" /></button>}
          </div>
        </form>
      </section>
    </div>
    {foot}
    </div>
    </>
  );
}
