import Requisites from '../../modules/Requisites/Requisites.js';
import requsites from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Балинец Наталья Александровна');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Балинец Наталья Александровна', media);
  req.setTemplate();
}