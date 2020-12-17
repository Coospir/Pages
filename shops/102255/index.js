import Requisites from '../../modules/Requisites/Requisites.js';
import requsites from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../templates/TemplateTypeOne/TemplateTypeOne.js';

let newNav = document.querySelector('.nav.sf-menu')
document.querySelector('section.page-section.latest-section').insertAdjacentHTML('afterbegin', `<div class="container"><div class="newNavTitle">Категории</div>${newNav.outerHTML}</div>`)

// add user icon in header
document.querySelector('.header_widgets').insertAdjacentHTML('afterbegin', '<div class="header_user"><a id="user" class="position-relative" href="https://store102255.sellavi.com/login/" role="link"><i class="far fa-user"></i></a></div>');

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ООО"Санитары Столицы"');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ООО"Санитары Столицы"', media);
  req.setTemplate();
}