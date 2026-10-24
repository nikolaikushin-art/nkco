// One image per service page, used by the mega-menu rows, the preview card AND the page hero so they always match.
//
// RULE: an image is only shown if it matches the page's content.
//   1. A photo in photoManifest.json (written by `npm run photos`, which only keeps photos whose description matches the
//      page title) is used first.
//   2. Otherwise the page gets a topic plate (src/lib/topicPlate.js): a drawn motif chosen from the page's own words
//      (pricing -> price tag, cybersecurity -> padlock, heatmaps -> grid, ...). Never a random stock photo.
import MANIFEST from '../data/photoManifest.json';
import { topicPlate, CARD_MOTIF } from './topicPlate';
import { artForSeries } from '../data/intelLibrary';

export const LEAF_COUNT = Object.keys(MANIFEST).length;

// Photo for a featured mega-menu card. key = 'feat|section|category|item' (item empty for the category card).
export function featuredPhoto(key, title) {
  const real = MANIFEST[key];
  if (real) return { src: real.src, id: real.id, credit: real.credit };
  const [, section, category, item] = key.split('|');
  return { src: topicPlate(section, category, item || category, '', CARD_MOTIF[title]), id: `plate-${key}` };
}

export function leafPhoto(section, category, item, child) {
  const key = [section, category, item, child].join('|');
  const real = MANIFEST[key];
  if (real) return { src: real.src, id: real.id, credit: real.credit, x: 50, y: 50, zoom: 1, flip: false, hue: 0 };
  // Intelligence library rows: the same drawn plate as the series page
  const ia = section === 'intelligence' ? artForSeries(child) : null;
  if (ia) return { src: topicPlate(section, category, item, child, ia.motif, ia.accent), id: `plate-${key}`, x: 50, y: 50, zoom: 1, flip: false, hue: 0 };
  return { src: topicPlate(section, category, item, child), id: `plate-${key}`, x: 50, y: 50, zoom: 1, flip: false, hue: 0 };
}

export const photoStyle = (p) => ({
  objectPosition: `${p.x}% ${p.y}%`,
  transform: p.zoom !== 1 || p.flip ? `${p.flip ? 'scaleX(-1) ' : ''}scale(${p.zoom})` : undefined,
});
