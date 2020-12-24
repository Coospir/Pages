import Requisites from '../../modules/Requisites/Requisites.js';

import { requsites, dataContact } from './utils/requsites.js';
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';

if (location.href.includes('term-of-use')) {
  console.log(location.href);
  const req = new Requisites(requsites, 'beforeend', 'ИП Зобнина Вера Сергеевна');
  req.setTemplate();
}

if (location.href.includes('/contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Зобнина Вера Сергеевна', media);
  req.setTemplate();
}

if (location.href.includes('/policy')) {
  const req = new Requisites(requsites, 'afterend', 'ИП Зобнина Вера Сергеевна', document.querySelector("#content > div > div"));
  req.setTemplate();
}
