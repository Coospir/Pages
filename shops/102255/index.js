import Requisites from '../../modules/Requisites/Requisites.js';
import requsites from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../templates/TemplateTypeOne/TemplateTypeOne.js';
import ContactsWithMap from '../../components/ContactsWithMap/ContactsWithMap.js';
import contactData from './utils/contactData.js'
import SocialIconsTypeOne from '../../components/SocialIconsTypeOne/SocialIconsTypeOne.js'
import socIconsData from './utils/socIconsData.js';


if (document.querySelector('.common-home')) {
  const customSection = document.querySelector('.custom_section');
  customSection.classList.add('container');

  const map = new ContactsWithMap(customSection, 'beforeend', contactData);
  map.render();
}

if (document.querySelector('.wrapper') && !location.href.includes('checkout')) {
  const footerContainer = document.querySelector('.footer-widgets>div');

  new SocialIconsTypeOne(footerContainer, 'beforeend', socIconsData).render();

  const socIcons = document.querySelector('.soc-icons>.container');
  socIcons.insertAdjacentHTML('afterbegin', `<p class="soc-icons__title">Мы в соц.сетях</p>`)
}

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ООО"Санитары Столицы"');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ООО"Санитары Столицы"', media);
  req.setTemplate();
}