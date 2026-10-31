// Photo for an editorial card (home, menu side cards, podcast): looked up by headline in src/data/editorialPhotos.json,
// which scripts/assign-photos.mjs fills with a labelled photo that fits the headline. Falls back to the topic plate.
import MAP from '../data/editorialPhotos.json';
import { topicPlate } from './topicPlate';

export const editorialPhoto = (title, section = '') => (MAP[title] && MAP[title].src) || topicPlate(section, '', '', title);
