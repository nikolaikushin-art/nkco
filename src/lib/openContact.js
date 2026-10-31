// One place that opens the Contact menu (Business Diagnostic). Buttons keep their mailto / anchor href as a fallback
// (new tab, no JavaScript); a plain click opens the form in the header instead.
export function openContact(e) {
  if (e && (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)) return;
  if (e && e.preventDefault) e.preventDefault();
  if (typeof window !== 'undefined') window.dispatchEvent(new Event('nk:open-contact'));
}
