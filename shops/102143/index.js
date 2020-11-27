import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js';
import Requisites from '../../modules/Requisites/Requisites.js';

import requsites from './utils/requsites.js'
import icons from './utils/icons.js';

//import fixes from '../../fixes/fixes.js'

import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';
import BigBanner from '../../modules/BigBanner/BigBanner.js';

if (document.querySelector('.wrapper')) {
// Icons im header cont
  const headerWrapper = document.querySelector('.header-wrapper>div:first-child');
  const hideCart = document.querySelector('.header-wrapper>div>.header-cart');

  const buttonsInHeader = new ButtonListInHeader(headerWrapper);

  buttonsInHeader.setTemplate();
  hideCart.remove();
// End

  const bigBanner = new BigBanner('https://res.cloudinary.com/gz-company/image/upload/v1606466129/ThaiCosmetic/Group_73_yqnh52.png');
  bigBanner.render()
}

if (document.querySelector('.common-home')) {
  const pageSection = document.querySelector('');

  pageSection.insertAdjacentHTML('beforeend', `<img src="https://res.cloudinary.com/gz-company/image/upload/v1606479718/ThaiCosmetic/image_3_fe6p69.png" style="
  position: absolute;
  right: 0;
  top: 0;
  opacity: .5;
">`)

pageSection.insertAdjacentHTML('beforeend', `<img src="https://res.cloudinary.com/gz-company/image/upload/v1606479718/ThaiCosmetic/image_3_1_cmzi4q.png" style="
  position: absolute;
  left: 0;
  bottom: 0;
  opacity: .5;
">`)

}

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП ТЮМЕНЦЕВА МАРИЯ ВАЛЕРЬЕВНА');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП ТЮМЕНЦЕВА МАРИЯ ВАЛЕРЬЕВНА', media);
  req.setTemplate();
}
