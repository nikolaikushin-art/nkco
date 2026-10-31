// POST /api/enquiry · receives the Business Diagnostic and e-mails it to the office, with an acknowledgement to the sender.
// Runs as a Vercel serverless function (this folder sits next to package.json, so Vercel picks it up on its own).
//
// Set these in Vercel -> Project -> Settings -> Environment Variables:
//   RESEND_API_KEY   API key from resend.com (the domain nkco.ae must be verified there)
//   ENQUIRY_FROM     e.g.  NK&CO <enquiries@nkco.ae>       (default shown here)
//   ENQUIRY_TO       e.g.  info@nkco.ae                    (default shown here)
// Without RESEND_API_KEY the function answers 503 and the form tells the visitor to try again or e-mail the office.
const crypto = require('crypto');

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const clip = (s, n) => String(s == null ? '' : s).slice(0, n);

function reference() {
  const d = new Date();
  const yy = String(d.getUTCFullYear()).slice(2);
  const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(d.getUTCDate()).padStart(2, '0');
  return `NK-${yy}${mm}${dd}-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;
}

async function send(key, payload) {
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!r.ok) throw new Error(`mail provider ${r.status}`);
}

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ error: 'method' }); }

  let b = req.body;
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch (e) { b = null; } }
  if (!b || typeof b !== 'object') return res.status(400).json({ error: 'body' });

  // spam trap: real visitors never fill this field
  if (b.website_hp) return res.status(200).json({ reference: reference() });

  const c = b.contact || {};
  const name = clip(c.name, 120).trim(); const email = clip(c.email, 160).trim(); const company = clip(c.company, 160).trim();
  if (!name || !company || !EMAIL_RE.test(email)) return res.status(422).json({ error: 'fields' });
  const sections = Array.isArray(b.sections) ? b.sections.slice(0, 8) : [];
  const text = clip(b.text, 12000);

  const key = process.env.RESEND_API_KEY;
  if (!key) return res.status(503).json({ error: 'not_configured' });
  const from = process.env.ENQUIRY_FROM || 'NK&CO <enquiries@nkco.ae>';
  const to = process.env.ENQUIRY_TO || 'info@nkco.ae';
  const ref = reference();

  const rows = sections.map((s) => `<h3 style="font:600 13px Arial;letter-spacing:.1em;text-transform:uppercase;margin:22px 0 6px">${esc(clip(s.title, 60))}</h3>` +
    `<table style="border-collapse:collapse;font:14px/1.5 Arial">${(Array.isArray(s.rows) ? s.rows : []).slice(0, 20).map((r) => `<tr><td style="padding:3px 18px 3px 0;color:#6b6f76;vertical-align:top">${esc(clip(r[0], 80))}</td><td style="padding:3px 0">${esc(clip(r[1], 2000))}</td></tr>`).join('')}</table>`).join('');

  try {
    await send(key, {
      from, to: [to], reply_to: email, subject: `Business Diagnostic ${ref} · ${company}`,
      html: `<div style="font:14px/1.5 Arial;color:#16171a"><p>Reference <strong>${ref}</strong><br>Received from ${esc(clip(b.page, 200) || '/')}</p>${rows}</div>`,
      text: `Reference ${ref}\n\n${text}`,
    });
    // the acknowledgement is best effort: the enquiry is already with the office
    try {
      await send(key, {
        from, to: [email], reply_to: to, subject: `NK&CO · your enquiry ${ref}`,
        text: `Dear ${name},\n\nThank you. NK&CO has received your Business Diagnostic. Your reference is ${ref}; please quote it in any correspondence.\n\nWe will review your responses and contact you with the appropriate next steps. This is an initial review by our team, not a formal recommendation or proposal.\n\nNK&CO\n${to}`,
      });
    } catch (e) { /* ignore */ }
    return res.status(200).json({ reference: ref });
  } catch (e) {
    return res.status(502).json({ error: 'send' });
  }
};
