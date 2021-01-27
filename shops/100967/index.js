//import '../../fixes/FooterCopy/FooterCopy.js';
import '../../fixes/TranslateAboutUs/TranslateAboutUs.js';

import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js';
import DeleteClasses from '../../modules/DeleteClasses/DeleteClasses.js';
import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';
import DeleteElements from '../../modules/DeleteElements/DeleteElements.js';

import AdvantagesTypeOne from '../../components/AdvantagesTypeOne/AdvantagesTypeOne.js';
import ContentBannerTypeOne from '../../components/ContentBannerTypeOne/ContentBannerTypeOne.js';
import InfoCardTypeOne from '../../components/InfoCardTypeOne/InfoCardTypeOne.js';
import ImgNearText from '../../components/ImgNearText/ImgNearText.js';
import HistoryLine from '../../components/HistoryLine/HistoryLine.js';
import GridPhotoWithText from '../../components/GridPhotoWithText/GridPhotoWithText.js';
<<<<<<< HEAD
<<<<<<< HEAD
import RatingWithImgText from "../../components/RatingWithImgText/RatingWithImgText.js";
=======
import SocialIconsTypeOne from '../../components/SocialIconsTypeOne/SocialIconsTypeOne.js';
=======
// import SocialIconsTypeOne from '../../components/SocialIconsTypeOne/SocialIconsTypeOne.js';
<<<<<<< HEAD
>>>>>>> a40d97689d2246beee13469403d31bfdbe1706c9
=======
>>>>>>> 10f10b8e5452e71d1b9c54dabeb85bb6c495d459
>>>>>>> 70e19ce0bac23bb43e78a1990b614bf3ae6c4507
import BaseSender from '../../components/BaseSender/BaseSender.js';
<<<<<<< HEAD
>>>>>>> 6f5e3bb1ba1e728e6d79c1d105ee055db6ad3b27
=======
>>>>>>> fb20d0b043c0f565c46c37065190c94798c110f3
>>>>>>> ffe69d7318efd37732f9f2f206fddac992493ad1

import bootstrapClasses from './utils/bootstrapClasses.js';
import advantages from './utils/advantages.js';
import dataBannerContent from './utils/dataBannerContent.js';
import salesData from './utils/salesData.js';
import aboutData from './utils/aboutData.js';
import historyData from './utils/historyData.js';

import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';

const icons = {
  cart:
    '<img src="https://res.cloudinary.com/gz-company/image/upload/v1606402883/Miru/assets/icons/icons8-%D0%BA%D0%BE%D1%80%D0%B7%D0%B8%D0%BD%D0%B0_1_1_gqdqiq.png" alt="cart">',
  like:
    '<img src="https://res.cloudinary.com/gz-company/image/upload/v1605863437/Miru/assets/icon_di3am3.svg">',
};

const textInHeader = 'Бесплатная доставка';
const footerText = 'Имеются противопоказания. Проконсультируйтесь со специалистом';

if (document.querySelector('.wrapper')) {
  const navWrapperCon = document.querySelector('.navigation-wrapper>.container');
  const megalineLi = document.querySelectorAll('.megaline>div>ul>li');
  const productItem = document.querySelectorAll('.product-item');
  const bsMenutoggle = document.querySelector('.bs-menu-toggle');
  const footerContainer = document.querySelector('footer>.footer-widgets>dvi');
  const footerRow = document.querySelector('footer > div.footer-widgets > div.container > div');
  const notActiveLink = document.querySelectorAll(
    'body > div > header > div.navigation-wrapper > div > nav > ul > li.flexy.has_children.megamenu > a',
  );
  const link = document.querySelectorAll(
    'body > div > header > div.navigation-wrapper > div > nav > ul > li.flexy.has_children.megamenu.active > ul > li > div > div > span > a',
  );
  const delSelectorsProductItem = new DeleteClasses(productItem, bootstrapClasses);

  const logo = document.querySelector('#cart');
  const logoIco = document.querySelector('#cart > i');
  logoIco.remove();
  logo.insertAdjacentHTML('afterbegin', icons.cart);

  // Icons in header cont
  const headerWrapper = document.querySelector('.header-wrapper>div:first-child');
  const hideCart = document.querySelector('.header-wrapper>div>.header-cart');

  const buttonsInHeader = new ButtonListInHeader(headerWrapper, icons);

  hideCart.remove();
  // End

  const baseSender = new BaseSender(
    document.querySelector('.footer-widgets>.container'),
    'afterbegin',
  );

  footerContainer.insertAdjacentHTML('beforeend', `
    <div class="phh">
      <p style="
        font-size: 24px;
        text-transform: uppercase;
        color: rgba(100,100,100,.5);
        text-align: center;
      ">${footerText}
      </p>
    </div>
  `)

  // FOOTER
  baseSender.render();
  // socialIconsTypeOne.render();
  buttonsInHeader.setTemplate();
  delSelectorsProductItem.findAndDelete();

  hideCart.remove();
  navWrapperCon.classList.remove('container');

  megalineLi.forEach((it) => {
    it.insertAdjacentHTML('beforeend', `<i class="fal fa-chevron-right"></i>`);
  });

  footerRow.remove();
  notActiveLink.forEach((el) => {
    el.removeAttribute('href');
  });

  link.forEach((el) => {
    el.removeAttribute('href');
  });

  const qty = document.querySelector('.cart-qty-circle');
  const qtyNum = +qty.textContent.trim();

  if (qtyNum > 0) {
    qty.style.cssText =
      'background: rgba(240, 10, 10, .9) !important; color: white !important; border-color: white !important;';
  } else {
    qty.style.cssText = `
      color: black;
      border-color: black;
    `;
  }

  const buttonList = document.querySelector('.button__list');
  buttonList.insertAdjacentHTML(
    'beforeend',
    `<li class="button__list_elem custom__text"><p class="custom__text_ph">${textInHeader}</p></li>`,
  );

  const disLinkHeader = document.querySelectorAll('.megamenu > ul > .megaline > div > div > span > a');
  disLinkHeader.forEach(link => link.removeAttribute('href'));
  bsMenutoggle.remove();
}

if (document.querySelector('.common-home')) {
  console.log(document.querySelector('body>.wrapper>.content-area>.container'));
  const advantagesTypeOne = new AdvantagesTypeOne(
    document.querySelector('.page-section'),
    advantages,
  );
  const contentBanner = new ContentBannerTypeOne(
    document.querySelector('body>.wrapper>.content-area>.page-section'),
    'beforeEnd',
    dataBannerContent,
  );
  const infoCardTypeOne = new InfoCardTypeOne(
    document.querySelector('body>.wrapper>.content-area>.page-section'),
    'beforeEnd',
    salesData,
  );

  const imgNearText = new ImgNearText(
    document.querySelector('body>.wrapper>.content-area>.page-section'),
    'beforeEnd',
    aboutData,
  );

  const historyLine = new HistoryLine(
    document.querySelector('body>.wrapper>.content-area>.page-section'),
    'beforeEnd',
    historyData,
  );
  const gridPhotoWithText = new GridPhotoWithText(
    document.querySelector('body>.wrapper>.content-area>.page-section'),
    'beforeEnd',
  );

  advantagesTypeOne.render();
  contentBanner.render();
  infoCardTypeOne.render();
  imgNearText.render();
  historyLine.render();
  gridPhotoWithText.render();

  const bannerContentItemImg = document.querySelector('.banner-content__item');

  // Коробка которая вылезает за баннер
  bannerContentItemImg.insertAdjacentHTML(
    'afterbegin',
    `<img class="img-1" src="https://res.cloudinary.com/gz-company/image/upload/v1606223895/Miru/Group_88_1_lfzmtk.png">`,
  );
}

if (document.querySelector('.product-product')) {
  const description = document.querySelector('.tab-pane');
  const productContainer = document.querySelector('.product-single');
  const model = document.querySelector('.table_holder');
  const productRating = document.querySelector('.product-rating');
  const productAvailability = document.querySelector('.product-availability');
  const addReview = document.querySelector('.add-review');
  const rating = document.querySelector('.rating');
  const reviews = document.querySelector('.reviews');
  const title = document.querySelector('.product-title');

  const ratingArr = [rating, reviews];
  const titleCont = [title, productAvailability];

  const social = document.querySelector('.share_page_wrapper');

  const onDelete = [
    model,
    description,
    addReview,
    rating,
    reviews,
    productRating,
    social,
    title,
    productAvailability,
  ];

  const getOuterHTML = (arr) => arr.map((item) => item.outerHTML);

  const createContainerForRaiting = new CreateAddContainer(
    productAvailability,
    'afterend',
    getOuterHTML(ratingArr),
  );
  const deleteEl = new DeleteElements(onDelete);

  productContainer.insertAdjacentHTML('afterend', description.outerHTML);
  productAvailability.insertAdjacentHTML(
    'afterend',
    `
    <div class="price-cont">
      <div class="rating-cont">${getOuterHTML(ratingArr).join('')}</div>
    </div>`,
  );
  createContainerForRaiting.render();

  const priceCont = document.querySelector('.price-cont');

  priceCont.insertAdjacentHTML('afterbegin', getOuterHTML(titleCont).join(''));

  ratingArr.forEach((el) => el.remove());

  deleteEl.remove();
  document
    .querySelector(
      '#home > div > div > section:nth-child(1) > div > div.row.product-single.product-item > div:nth-child(2)',
    )
    .childNodes[3].remove();

  document
    .querySelector(
      '#home > div > div > section:nth-child(1) > div > div.row.product-single.product-item > div:nth-child(2) > div.price-cont > div.rating-cont > a',
    )
    .text.substr(0, 2);

  if (document.querySelector('.comments')) {
    const date = document.querySelector('#review > div.comments > div > div > span');
    const commentMeta = document.querySelector(
      '#review > div.comments > div > div > p.comment-meta',
    );
    commentMeta.insertAdjacentHTML('beforeend', date.outerHTML);
  }
}

if (document.querySelector('.product-product')) {
  if (document.querySelector('.product-product')) {
    const a = document.querySelectorAll('#tab-description > span > p');
    document.querySelectorAll("#tab-description > span > ul").forEach((el) => {
     el.insertAdjacentHTML('beforebegin', `<div class="tab-content__content">
  ${el.previousSibling.outerHTML} ${el.outerHTML}
  </div>`)
  el.previousSibling.previousSibling.remove();
  el.remove();
  })

  document.querySelectorAll("#tab-description > span > ul").forEach((el) => {
     el.insertAdjacentHTML('beforebegin', `<div class="tab-content__content">
  ${el.previousSibling.outerHTML} ${el.outerHTML}
  </div>`)
  el.previousSibling.remove();
  el.remove();
  })

  const content = document.querySelector('.tab-content__content');
  const contents = document.querySelectorAll('.tab-content__content');
  content.insertAdjacentHTML('beforebegin', `<div class="tab-content__container"></div>`);

  const container = document.querySelector('.tab-content__container');
  contents.forEach(el => {
      container.insertAdjacentHTML('beforeend', el.outerHTML);
  el.remove();
  })

  }
}
