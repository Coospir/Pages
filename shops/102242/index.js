// import Requisites from '../../modules/Requisites/Requisites.js';
// import requsites from './utils/requsites.js'

// import '../../fixes/js/DeleteSelectorProductItem/DeleteSelectorProductItem.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js';
import '../../fixes/js/ChangeErrorEessage/ChangeErrorMessage.js';
// import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';
import icons from './utils/icons/icons.js';

import '../../components/PictureCategories/PictureCategories.js';

import InfoCardTypeOne from '../../components/InfoCardTypeOne/InfoCardTypeOne.js';
import VideoBanner from '../../components/VideoBanner/VideoBanner.js';
import FormBasic from '../../components/FormBasic/FormBasic.js';
import SocIconsTypeOne from '../../components/SocialIconsTypeOne/SocialIconsTypeOne.js';
import ColorChoise from '../../components/ColorChoise/ColorChoise.js';
import ContentBannerTypeOne from '../../components/ContentBannerTypeOne/ContentBannerTypeOne.js';
// import '../../components/HeaderTypeTwo/HeaderTypeTwo.js';
import '../../modules/ButtonListInHeader/ButtonListInHeader.js';

import { bannerContent } from './constants/constants.js';
import contentBannerData from './utils/contentBannerData.js';
import advantagesData from './utils/advantagesData.js';
import senderData from './utils/senderData.js';
import socIconsData from './utils/socIconsData.js';
import tableData from './utils/tableData.js';
import PopupWithTable from '../../components/PopupWithTable/PopupWithTable.js';
import tableTemplate from '../../components/PopupWithTable/template/tableTemplate.js';

if (document.querySelector('.common-home')) {
  const sctmSection = document.querySelector('.custom_section');
  const logo = document.querySelector('.logo img');

  logo.setAttribute(
    'src',
    'https://res.cloudinary.com/gz-company/image/upload/v1606990377/%D0%9A%D0%BE%D1%80%D1%81%D0%B5%D1%82%D1%8B/Group_1_5_yvhzbg.png',
  );
  /** VIDEO BANNER **/
  const cstmBanner = document.querySelector('.custom_banner');
  const videoBanner = new VideoBanner(cstmBanner, 'beforeend', bannerContent);
  videoBanner.render();
  /** END VIDEO BANNER **/

  //Content banner
  const contentBanner = new ContentBannerTypeOne(sctmSection, 'beforeEnd', contentBannerData);
  contentBanner.render();

  document.querySelector('.banner-content').classList.add('container');

  const advantagesCard = new InfoCardTypeOne(
    sctmSection,
    'beforeEnd',
    advantagesData,
    'Преимущества',
  );
  advantagesCard.render();
  // End sales

  const sender = new FormBasic(sctmSection, 'beforeend', senderData);
  sender.render();

  //rm attr fron advantages

  // reset cut image in categories
  const imgCat = document.querySelectorAll(
    '.page-section.homefeatured_category > div > div > div > div > div > a > picture > img',
  );
  imgCat.forEach((cat) => {
    const src = cat.getAttribute('src');

    let replacedSrc = src.replace(
      /\/if_ar_gt_2\:1\/c_fill\,h_300\,w_300\,dpr_2\/if_else\/c_pad\,h_300\,w_300\,dpr_2\/if_end/gi,
      '',
    );

    cat.setAttribute('src', replacedSrc);
  });
  // rend reset cit img

  document.querySelectorAll('.info-card__item>a').forEach((a) => a.removeAttribute('href'));
}

if (document.querySelector('.wrapper')) {
  // Login Ico
  const headerLoginText = document.querySelector('.header_login>a');
  headerLoginText.remove();
  const headerLoginIco = document.querySelector('.header_login>a');
  headerLoginIco.classList.remove('d-none', 'd-lg-none');
  // End login Ico

  // remove cart text
  const cart = document.querySelector('#cart');
  cart.querySelector('span').remove();
  // end remove cart text

  // transfer navigation
  const headerWrapperLogo = document.querySelector('.header-wrapper>div>.logo');
  const navigation = document.querySelector('.navigation-wrapper .navigation');
  console.log(headerWrapperLogo);
  headerWrapperLogo.insertAdjacentHTML('beforebegin', navigation.outerHTML);
  navigation.remove();
  // end transfer navigation

  const footerContainer = document.querySelector('.footer-widgets>div>div');

  new SocIconsTypeOne(footerContainer, 'beforeend', socIconsData).render();

  const socIconsContainer = document.querySelector('.soc-icons>.container');
  socIconsContainer.insertAdjacentHTML(
    'afterbegin',
    `<h4 class="widget-title soc-icons__title">Мы в соц.сетях</h4>`,
  );

  const socIcons = document.querySelector('.soc-icons');
  socIcons.classList.add('col-md-3');

  document.querySelector('.bs-menu-toggle').remove();

  const wishList = `
  <a
    id="wishlist"
    class="position-relative"
    href="https://${location.host}/index.php?route=account/wishlist"
    role="link"
   >
   <i class="far fa-heart"></i>
  </a>`;

  document
    .querySelector('.header_widgets')
    .insertAdjacentHTML('afterbegin', `<div class="header_wishlist">${wishList}</div>`);

  const headerIcons = {
    cart: document.querySelector('body .header_widgets .header-cart i'),
    like: document.querySelector('body .header_widgets .header_wishlist i'),
  };

  headerIcons.cart.classList.remove('fa-shopping-cart', 'far');
  headerIcons.cart.insertAdjacentHTML('afterbegin', icons.cart);
  headerIcons.like.classList.remove('far', 'fa-heart');
  headerIcons.like.insertAdjacentHTML('afterbegin', icons.like);

  document
    .querySelectorAll('.page-section.homefeatured_category > div > div > div')
    .forEach((div) => {
      div.classList.add('col-lg-4', 'col-sm-6', 'col-12');
    });
}

// if (document.querySelector('.product-item')) {
//   setTimeout(() => {
//     document
//       .querySelectorAll(
//         'body.ltr.ru > div > div.content-area > section.page-section.latest-section > div > div > div > div > div.media > a > img',
//       )
//       .forEach((cat) => {
//         const src = cat.getAttribute('src');
//         let replacedSrc = src.replace(
//           /\/if_ar_gt_2:1\/c_fill,h_252,w_225,q_100\/c_fill,h_252,w_525\/if_else\/c_pad,h_252,q_100,w_225\/if_end/gi,
//           '',
//         );
//         console.log(replacedSrc);

//         cat.setAttribute('src', replacedSrc);
//       });
//   }, 1000);
// }

if (document.querySelector('.product-product')) {
  document.querySelector('.table_holder').remove();
  document.querySelector('.share_page_wrapper').remove();

  const lastSection = document.querySelector(
    'body > div > div.content-area > section.page-section',
  );

  const sender = new FormBasic(lastSection, 'beforeend', senderData);
  sender.render();

  const colorChoise = new ColorChoise();
  colorChoise.render();

  const product = document.querySelector('#product');

  new PopupWithTable(tableData, product, tableTemplate).render();
}

if (location.href.includes('/checkout')) {
  document.querySelector(
    '#home > div.content-area > section > div.flexwrap.checkout_form > div.register_block > div.form_checkout > div.payment-method > div > div > div > label',
  ).textContent = 'Перевод на Сбербанк';
}

const removeWishlist = (arr) => {
  arr.forEach((card) => {
    const like = card.querySelector('.add_to_wishlist');
    card.querySelector('.price').insertAdjacentHTML('beforeend', like.outerHTML);
    like.remove();
  });
};

if (document.querySelector('.common-home') || document.querySelector('.product-category')) {
  const productCards = document.querySelectorAll('.row.products.grid .product-item');
  removeWishlist(productCards);

  productCards.forEach((card) => {
    card.classList.remove('col-xl-4', 'col-lg-4');
    card.classList.add('col-xl-3', 'col-lg-3');
  });
}

if (document.querySelector('.product-product')) {
  const productCards = document.querySelectorAll(
    'body .content-area ~ .page-section .product-item',
  );
  removeWishlist(productCards);

  document.querySelectorAll('#bx-pager.row.product-thumbnails .col-2').forEach((col) => {
    col.classList.add('col');
    col.classList.remove('col-2', 'col-md-3');
  });
}

// if (location.href.includes('term-of-use')) {
//   const req = new Requisites(requsites, 'beforeend', 'ИП Харламова Зоя Николаевна');

//   req.setTemplate();
// }

// if (location.href.includes('contact')) {
//   const media = document.querySelector('.contact-info > .media-list > .media:last-child');

//   const req = new Requisites(requsites, 'afterend', 'ИП Харламова Зоя Николаевна', media);
//   req.setTemplate();
// }
