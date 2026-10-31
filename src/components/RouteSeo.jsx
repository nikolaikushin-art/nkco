import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteMeta, DEFAULT_DESCRIPTION } from '../lib/routeMeta';

function setMeta(selector, create, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(create.tag);
    Object.entries(create.attrs).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.setAttribute(create.valueAttr, value);
}

// Keeps <title>, description, canonical and OG tags correct while users navigate
// client-side. (First load is already correct thanks to the prerendered HTML.)
export default function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getRouteMeta(pathname);
    const origin = window.location.origin;
    const title = meta ? meta.title : 'Page not found | NK&CO';
    const description = meta ? meta.description : DEFAULT_DESCRIPTION;
    const canonical = origin + (meta ? meta.path : pathname);

    document.title = title;
    setMeta('meta[name="description"]', { tag: 'meta', attrs: { name: 'description' }, valueAttr: 'content' }, description);
    setMeta('link[rel="canonical"]', { tag: 'link', attrs: { rel: 'canonical' }, valueAttr: 'href' }, canonical);
    setMeta('meta[property="og:title"]', { tag: 'meta', attrs: { property: 'og:title' }, valueAttr: 'content' }, title);
    setMeta('meta[property="og:description"]', { tag: 'meta', attrs: { property: 'og:description' }, valueAttr: 'content' }, description);
    setMeta('meta[property="og:url"]', { tag: 'meta', attrs: { property: 'og:url' }, valueAttr: 'content' }, canonical);
    setMeta('meta[name="robots"]', { tag: 'meta', attrs: { name: 'robots' }, valueAttr: 'content' }, meta ? 'index, follow' : 'noindex, follow');
  }, [pathname]);

  return null;
}
