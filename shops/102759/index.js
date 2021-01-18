import Requisites from '../../modules/Requisites/Requisites.js';
import '../../components/PictureCategories/PictureCategories.js';
import { requsites, dataContact } from './utils/requsites.js';
import '../../fixes/js/FooterCopy/FooterCopy.js';
// import '../../fixes/js/TranslateFix/TranslateFix.js'
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';
import BigBanner from '../../modules/BigBanner/BigBanner.js';
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';
import '../../components/HeaderTypeThree/HeaderTypeThree.js';
import { GridImgWithQuote, data } from './utils/photoTemplate.js';

import './pages/for-business/for-business.js';
import './pages/individual/individual.js';

if (document.querySelector('.common-home')) {
  new BigBanner(
    'https://res.cloudinary.com/gz-company/image/upload/v1609859584/Group_276_2_otlany.png',
  ).render();

  const logo = document.querySelector('header .logo img');
  logo.setAttribute(
    'src',
    'https://res.cloudinary.com/depgheppz/image/upload/v1610980958/Group_3_rqdumj.png',
  );

  const cstmSection = document.querySelector('.wrapper > .content-area');
  cstmSection.insertAdjacentHTML('beforeend', new GridImgWithQuote(data).render());

  // const quote = document.querySelector("#home > div > div.content-area > div.gallery.d-flex.flex-column > div:nth-child(1) > div:nth-child(2) > blockquote");
  // if (document.querySelector("#home > div > div.content-area > div.gallery.d-flex.flex-column > div:nth-child(1) > div:nth-child(2) > blockquote").getBoundingClientRect().top + document.querySelector("#home > div > div.content-area > div.gallery.d-flex.flex-column > div:nth-child(1) > div:nth-child(2)").scrollTop) {
  //   quote.classList.add('quote-fixed')
  // }

  // if ()
}

if (document.querySelector('.wrapper')) {
  document.querySelector(
    '#home > div > header > div.header-wrapper > div > nav > ul > li:nth-child(1) > div > a',
  ).textContent = '';
  document
    .querySelector(
      '#home > div > header > div.header-wrapper > div > nav > ul > li:nth-child(1) > div > a',
    )
    .insertAdjacentHTML(
      'beforeend',
      `
  <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="23" height="1" fill="black"/>
    <rect y="7" width="23" height="1" fill="black"/>
    <rect y="14" width="23" height="1" fill="black"/>
  </svg>
  `,
    );



  document.querySelector('.mobile-navigation-wrapper').addEventListener('click', () => {
    document.querySelector('.prevent_touch_banner').insertAdjacentHTML(
      'afterend',
      `
      <div class="mobile-navigation-close">
        <i class="fal fa-times"></i>
      </div>
    `,
    );
    document.querySelector('.mobile-navigation-close').addEventListener('click', () => {
      const nav = document.querySelector('.navigation');
      nav.classList.add('nav-closed');
      nav.classList.remove('nav-opened');
    });
  });
}

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Скотарева Наталия Анатольевна');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Скотарева Наталия Анатольевна', media);
  req.setTemplate();
}

if (location.href.includes('policy')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Скотарева Наталия Анатольевна',
    document.querySelector('#content > div > div'),
  );
  req.setTemplate();
}

if (location.href.includes('pay-delivery')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Скотарева Наталия Анатольевна',
    document.querySelector('#content > div > div'),
    dataContact,
  );
  req.setTemplate();
}
