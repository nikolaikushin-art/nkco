// Language switch (English / Arabic). The UAE-flag button in the header toggles it.
// Sets <html lang> and <html dir>, remembers the choice, and holds the Arabic strings for the header and search.
// Page copy is still English: extend AR below (or add a per-page dictionary) to translate more.
import { useSyncExternalStore } from 'react';

const KEY = 'nk-lang';
let lang = 'en';
try { lang = localStorage.getItem(KEY) === 'ar' ? 'ar' : 'en'; } catch (e) { /* storage blocked */ }
const subs = new Set();

const apply = () => {
  if (typeof document === 'undefined') return;
  const el = document.documentElement;
  el.lang = lang;
  el.dir = lang === 'ar' ? 'rtl' : 'ltr';
  el.setAttribute('data-lang', lang);
};
apply();

export const setLang = (next) => {
  lang = next === 'ar' ? 'ar' : 'en';
  try { localStorage.setItem(KEY, lang); } catch (e) { /* ignore */ }
  apply();
  subs.forEach((f) => f());
};
export const toggleLang = () => setLang(lang === 'ar' ? 'en' : 'ar');
export const useLang = () => useSyncExternalStore((f) => { subs.add(f); return () => subs.delete(f); }, () => lang, () => 'en');

const AR = {
  Capabilities: 'القدرات', Infrastructure: 'البنية التحتية', Opportunities: 'الفرص', Privileges: 'امتيازات', Intelligence: 'الرؤى والتحليلات',
  Industries: 'القطاعات', Expertise: 'الخبرات', Overview: 'نظرة عامة',
  'Contact Us': 'تواصل معنا', 'Open navigation': 'فتح القائمة', 'Close navigation': 'إغلاق القائمة',
  'Search': 'بحث', 'Search the site': 'ابحث في الموقع', 'Close search': 'إغلاق البحث',
  'Search for Capabilities, Intelligence, Industries and More…': 'ابحث في القدرات والرؤى والقطاعات والمزيد…',
  'Type to search pages': 'اكتب للبحث في الصفحات', 'No pages match': 'لا توجد صفحات مطابقة',
  'Switch to Arabic': 'التبديل إلى العربية', 'Switch to English': 'Switch to English',
  'Quick links': 'روابط سريعة',
};
export const tr = (s, l) => (l === 'ar' && AR[s]) || s;
