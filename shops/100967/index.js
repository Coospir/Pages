import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';

import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js';
import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';
import DeleteElements from '../../modules/DeleteElements/DeleteElements.js';

// import AdvantagesTypeOne from '../../components/AdvantagesTypeOne/AdvantagesTypeOne.js';
// import ContentBannerTypeOne from '../../components/ContentBannerTypeOne/ContentBannerTypeOne.js';
// import InfoCardTypeOne from '../../components/InfoCardTypeOne/InfoCardTypeOne.js';
import ImgNearText from '../../components/ImgNearText/ImgNearText.js';
// import HistoryLine from '../../components/HistoryLine/HistoryLine.js';
import GridPhotoWithText from '../../components/GridPhotoWithText/GridPhotoWithText.js';
import RatingWithImgText from '../../components/RatingWithImgText/RatingWithImgText.js';
import BaseSender from '../../components/BaseSender/BaseSender.js';
import Steps from '../../components/Steps/Steps.js';
import deliveryPage from './deliveryPage.js';
import cartWhite from './assets/svg/bag-white.js';
import setDarkTheme from '../../components/DarkMode/DarkMode.js'
// import bootstrapClasses from './utils/bootstrapClasses.js';
// import advantages from './utils/advantages.js';
// import dataBannerContent from './utils/dataBannerContent.js';
// import salesData from './utils/salesData.js';
import aboutData from './utils/aboutData.js';
// import historyData from './utils/historyData.js';
import { l1, l2 } from './assets/svg/l1.js';
import themeToggle from './themeToggle.js'
// import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';

const icons = {
  cart:
    '<img src="https://res.cloudinary.com/depgheppz/image/upload/v1611136009/Vector_opwga3.svg" alt="cart">',
  like:
    '<img src="https://res.cloudinary.com/gz-company/image/upload/v1605863437/Miru/assets/icon_di3am3.svg">',
};

const textInHeader = 'Бесплатная доставка по России';
const footerText = 'Имеются противопоказания. Проконсультируйтесь со специалистом';

if (document.querySelector('.wrapper')) {
  const navWrapperCon = document.querySelector('.navigation-wrapper>.container');
  const megalineLi = document.querySelectorAll('.megaline>div>ul>li');
  const productItem = document.querySelectorAll('.product-item');
  const bsMenutoggle = document.querySelector('.bs-menu-toggle');
  const footerContainer = document.querySelector('footer>.footer-widgets>div');
  const notActiveLink = document.querySelectorAll(
    'body > div > header > div.navigation-wrapper > div > nav > ul > li.flexy.has_children.megamenu > a',
  );
  const link = document.querySelectorAll(
    'body > div > header > div.navigation-wrapper > div > nav > ul > li.flexy.has_children.megamenu.active > ul > li > div > div > span > a',
  );
  // const delSelectorsProductItem = new DeleteClasses(productItem);

  const logo = document.querySelector('#cart');
  const logoIco = document.querySelector('#cart > i');
  logoIco.remove();
  logo.insertAdjacentHTML('afterbegin', icons.cart);

  // document.querySelector('.header-wrapper > .container').classList.add('container-fluid');
  // document.querySelector('.header-wrapper > .container').classList.remove('container');

  // Icons in header cont
  const headerWrapper = document.querySelector('.header-wrapper>div:first-child');
  const hideCart = document.querySelector('.header-wrapper>div>.header-cart');

  const buttonsInHeader = new ButtonListInHeader(headerWrapper, icons);

  hideCart.remove();
  // End

  const baseSender = new BaseSender(
    document.querySelector('.footer-widgets>.container'),
    'afterbegin',
    'Остались вопросы? Оставьте ваш телефон, наш специалист с вами свяжется.',
  );

  footerContainer.insertAdjacentHTML(
    'beforeend',
    `
    <div class="phh">
      <p style="
        font-size: 24px;
        text-transform: uppercase;
        color: rgba(100,100,100,.5);
        text-align: center;
      ">${footerText}
      </p>
    </div>
  `,
  );

  // FOOTER
  baseSender.render();
  // socialIconsTypeOne.render();
  buttonsInHeader.setTemplate();
  // delSelectorsProductItem.findAndDelete();

  // hideCart.remove();
  navWrapperCon.classList.remove('container');

  megalineLi.forEach((it) => {
    it.insertAdjacentHTML('beforeend', `<i class="fal fa-chevron-right"></i>`);
  });

  // footerRow.remove();
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

  const disLinkHeader = document.querySelectorAll(
    '.megamenu > ul > .megaline > div > div > span > a',
  );
  disLinkHeader.forEach((link) => link.removeAttribute('href'));
  bsMenutoggle.remove();

  const brg = document.querySelector('.mobile-navigation-wrapper');
  document
    .querySelector('.header-wrapper > .container')
    .insertAdjacentHTML('afterbegin', brg.outerHTML);
  brg.remove();

  // setTimeout(() => {
  //   document.querySelector('.prevent_touch_banner.d-none').insertAdjacentHTML(
  //     'afterend',
  //     `
  //       <div class="mobile-navigation-close">
  //         <i class="fal fa-times"></i>
  //       </div>
  //     `,
  //   );
  // }, 500);

  // document.querySelector('.mobile-navigation-wrapper').addEventListener('click', (e) => {
  //   document.querySelector('.mobile-navigation-close').addEventListener('click', () => {
  //     const nav = document.querySelector('.navigation');
  //     const brg = document.querySelector('.mobile-navigation-wrapper');
  //     const wrapper = document.querySelector("#home > div");
  //     wrapper.classList.add('wrapper-closed')
  //     wrapper.classList.remove('wrapper-opened')
  //     wrapper.classList.remove('fixed')
  //     nav.classList.add('nav-closed');
  //     nav.classList.remove('nav-opened');
  //     nav.classList.remove('opened');
  //     brg.querySelector('i').classList.add('fa-bars')
  //     brg.querySelector('i').classList.remove('fa-times')

  //     document.querySelector('body').classList.remove('overflow-hidden');
  //   });
  // });

  const footerDocs = document.querySelector(
    'footer > div.footer-widgets > div > div.row > div:nth-child(2) > div > ul',
  );
  const phh = document.querySelector('.phh');
  phh.insertAdjacentHTML('beforebegin', `<div class="docs">${footerDocs.outerHTML}</div>`);

  // document.querySelector("#home > nav.navigation.mobile_side_nav.opened.nav-opened > ul").insertAdjacentHTML('afterend', `<p class="d-flex justify-content-center align-items-center custom__text_ph">Бесплатная доставка</p>`);

  document.querySelectorAll('.panel-collapse > ul > li > a').forEach((el) => {
    const tr = el.textContent;

    if (tr.includes(' - ')) {
      el.textContent = tr.slice(2);
    }
  });

}

if (document.querySelector('.account-register')) {
  document.querySelectorAll('form > fieldset > div > div').forEach((sel) => {
    sel.classList.remove('col-sm-10');
  });
}
if (document.querySelector('.common-home')) {
  // const pageSection = document.querySelector('.page-section');

  // const product = document.querySelectorAll('.product-item');

  // let twoWeek = document.createElement('div');
  // let oneMonth = document.createElement('div');
  // let row1 = document.createElement('div');
  // let row2 = document.createElement('div');
  // let titleWeek = document.createElement('h2');
  // let titleWeekSpan = document.createElement('span');
  // let titleMonth = document.createElement('h2');
  // let titleMonthSpan = document.createElement('span');

  // twoWeek.classList.add('container', 'twoWeek');
  // oneMonth.classList.add('container', 'oneMonth');
  // row1.classList.add('row', 'products', 'grid');
  // row2.classList.add('row', 'products', 'grid');
  // titleWeek.classList.add('section-title', 'mb-4', 'mt-4');
  // titleMonth.classList.add('section-title', 'mb-4', 'mt-4');

  // pageSection.append(twoWeek);
  // pageSection.append(oneMonth);

  // titleWeekSpan.textContent = 'Двухнедельные линзы';
  // titleMonthSpan.textContent = 'Линзы месячного ношения';

  // const monthCont = document.querySelector('.oneMonth');
  // const weekCont = document.querySelector('.twoWeek');

  // monthCont.append(row1);
  // weekCont.append(row2);

  // weekCont.prepend(titleWeek);
  // monthCont.prepend(titleMonth);
  // titleWeek.append(titleWeekSpan);
  // titleMonth.append(titleMonthSpan);

  // const monthRow = document.querySelector('.oneMonth>.products');
  // const weekRow = document.querySelector('.twoWeek>.products');
  // const monthArr = ['688', '687', '4441', '977'];
  // const weekArr = ['668', '4426'];

  // product.forEach(function (i) {
  //   const attr = i.getAttribute('data-product_id');

  //   if (attr === '688' || attr === '687' || attr === '4441' || attr === '977') {
  //     monthRow.append(i);
  //   }
  //   if (attr === '668' || attr === '4426') {
  //     weekRow.append(i);
  //   }
  // });
  // const advantagesTypeOne = new AdvantagesTypeOne(
  //   document.querySelector('.page-section'),
  //   advantages,
  // );
  // const contentBanner = new ContentBannerTypeOne(
  //   document.querySelector('body>.wrapper>.content-area>.page-section'),
  //   'beforeEnd',
  //   dataBannerContent,
  // );
  // const infoCardTypeOne = new InfoCardTypeOne(
  //   document.querySelector('body>.wrapper>.content-area>.page-section'),
  //   'beforeEnd',
  //   salesData,
  // );

  // const imgNearText = new ImgNearText(
  //   document.querySelector('body>.wrapper>.content-area>.page-section'),
  //   'beforeEnd',
  //   aboutData,
  // );

  // const historyLine = new HistoryLine(
  //   document.querySelector('body>.wrapper>.content-area>.page-section'),
  //   'beforeEnd',
  //   historyData,
  // );
  const gridPhotoWithText = new GridPhotoWithText(
    document.querySelector('body>.wrapper>.content-area>.page-section'),
    'beforeEnd',
  );

  // advantagesTypeOne.render();
  // contentBanner.render();
  // infoCardTypeOne.render();
  // imgNearText.render();
  // historyLine.render();
  gridPhotoWithText.render();

  // const bannerContentItemImg = document.querySelector('.banner-content__item');

  // // Коробка которая вылезает за баннер
  // bannerContentItemImg.insertAdjacentHTML(
  //   'afterbegin',
  //   `<img class="img-1" src="https://res.cloudinary.com/gz-company/image/upload/v1606223895/Miru/Group_88_1_lfzmtk.png">`,
  // );
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

  // const social = document.querySelector('.share_page_wrapper');

  const onDelete = [
    model,
    description,
    addReview,
    rating,
    reviews,
    productRating,
    // social,
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
    .querySelector('body > div > div > section:nth-child(1) .product-single > div:nth-child(2)')
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

    document.querySelector('#form-review > div.comments-form > h2').textContent = 'Оставить отзыв';
  }
}

if (location.href.includes('/checkout')) {
  const textDelivery = document.querySelector(
    '#home > div.content-area > section > div.flexwrap.checkout_form > div.register_block > div.form_checkout > div.payment-method > div:nth-child(3) > div > div > label',
  );
  textDelivery.textContent = 'Оплата курьеру при получении';

  document
    .querySelector(
      '#home > div.content-area > section > div.flexwrap.checkout_form > div.cart_block',
    )
    .insertAdjacentHTML(
      'beforeend',
      `
<div class="warranty">
  <img src="https://res.cloudinary.com/depgheppz/image/upload/v1611321319/Group_264_1_qlpx7e.png">
</div>
`,
    );
}

if (document.querySelector('.product-item')) {
  document.querySelectorAll('.product-item .add_to_cart button').forEach((btn) => {
    btn.querySelector('i').remove();
    btn.textContent = 'В корзину';
    btn.insertAdjacentHTML('afterbegin', icons.cart);
  });
}

if (document.querySelector('.product-product')) {
  const btnCart = document.querySelector('#button-cart');
  btnCart.querySelector('i').remove();
  btnCart.textContent = 'В корзину';
  btnCart.insertAdjacentHTML('afterbegin', cartWhite);

  const colProdcut = document.querySelector(
    '#home > div > div.content-area > section:nth-child(1) > div > div.row.product-single.product-item > div:nth-child(2)',
  );
  colProdcut.insertAdjacentHTML(
    'beforeend',
    `
    <div class="warranty">
      <img src="https://res.cloudinary.com/depgheppz/image/upload/v1611321319/Group_264_1_qlpx7e.png">
    </div>
  `,
  );

  const titleSect = document.querySelector('#home > div > section > div > h2 > span');
  titleSect.insertAdjacentHTML('afterend', l1);
  titleSect.insertAdjacentHTML('beforebegin', l2);
  // document.querySelectorAll('#tab-description > span > ul').forEach((el) => {
  //   el.insertAdjacentHTML(
  //     'beforebegin',
  //     `<div class="tab-content__content">
  // ${el.previousSibling.outerHTML} ${el.outerHTML}
  // </div>`,
  //   );
  //   el.previousSibling.previousSibling.remove();
  //   el.remove();
  // });

  // document.querySelectorAll('#tab-description > span > ul').forEach((el) => {
  //   el.insertAdjacentHTML(
  //     'beforebegin',
  //     `<div class="tab-content__content">
  // ${el.previousSibling.outerHTML} ${el.outerHTML}
  // </div>`,
  //   );
  //   el.previousSibling.remove();
  //   el.remove();
  // });

  // const content = document.querySelector('.tab-content__content');
  // const contents = document.querySelectorAll('.tab-content__content');
  // content.insertAdjacentHTML('beforebegin', `<div class="tab-content__container"></div>`);

  // const container = document.querySelector('.tab-content__container');
  // contents.forEach((el) => {
  //   container.insertAdjacentHTML('beforeend', el.outerHTML);
  //   el.remove();
  // });
}

if (location.href.includes('/pay-delivery')) {
  const mainContainer = document.querySelector('#content > div > div');

  const props = {
    container: mainContainer,
    target: 'beforeend',
  };

  const dataSteps = {
    title: 'Клуб Miru позволит вам:',
    content: [
      'Скорректировать контактные данные и адрес доставки;',
      'Посмотреть историю покупок;',
      'Проконсультироваться с врачом-офтальмологом;',
      'Получить напоминание пополнить Ваш запас линз, с нами вы всегда будете видеть!',
      'Записаться на бесплатный прием к офтальмологу.',
      'Получать подарки, бонусы, скидки и многое другое!',
    ],
  };

  new Steps(props, dataSteps).setTemplate();

  mainContainer.insertAdjacentHTML('beforeend', deliveryPage());

  document.querySelector('.page-section.titles').insertAdjacentHTML(
    'beforebegin',
    `
  <section class="page-section reg">
    <div class="reg-text">
        <h1>Регистрация на сайте</h1>
        <p>
          Мы ценим Ваше время, поэтому предлагаем максимально просто вступить в Клуб Miru - зарегистрироваться на сайте mirulens.ru для удобного и быстрого заказа Ваших линз!
        </p>
    </div>
  </section>`,
  );
}

if (location.href.includes('/test')) {
  document.querySelector('.button__list > li:first-child').insertAdjacentHTML('afterend', themeToggle())
  .then(setDarkTheme());
}
/*
Доставка курьером

Мы осуществляем доставку по России в партнерстве с компанией DPD и Dostavista

Расчет стоимости и времени доставки происходит автоматически на нашем сайте в момент оформления заказа. Заказы, сделанные после 14.00 пятницы и до 10.00 понедельника, обрабатываются и передаются курьеру с 10.00 понедельника.

Доставка осуществляется двумя способами: до пункта самовывоза и до дверей. Доставка до дверей стоит дороже.

Доставка по России компанией DPD и. Dostavista, осуществляется на условиях 100% предоплаты за товар и доставку. Доставка по схеме «Наложенный платеж» (оплата при получении) не осуществляется.

Заказ бесплатно хранится в пункте выдачи 14 календарных дней, затем отправляется обратно нам. Повторная отправка на твой адрес производится за твой счёт, а возврат денег – за вычетом стоимости обратной пересылки.

Способы оплаты заказа
Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на платёжный шлюз ПАО СБЕРБАНК. Соединение с платёжным шлюзом и передача информации осуществляется в защищённом режиме с использованием протокола шифрования SSL. В случае если Ваш банк поддерживает технологию безопасного проведения интернет-платежей Verified By Visa, MasterCard SecureCode, MIR Accept, J-Secure для проведения платежа также может потребоваться ввод специального пароля

• Банковской картой:
— При получении заказа в согласованном по телефону с сотрудником нашей компании месте выдачи заказа. При получении товара обязательно проверьте комплектацию товара и наличие чека.
— При предоплате банковской картой на сайте нашей компании во время оформления заказа. Для выбора оплаты товара с помощью банковской карты на соответствующей странице необходимо выбрать Способ оплаты "Онлайн оплата". Оплата происходит через ПАО СБЕРБАНК с использованием банковских карт следующих платёжных систем:

МИР
МИР
VISA International
VISA International
Mastercard Worldwide
Mastercard Worldwide
JCB
JCB
Описание процесса передачи данных во время оплаты заказа с сайта компании
Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность сообщаемой персональной информации обеспечивается ПАО СБЕРБАНК. Введённая информация не будет предоставлена третьим лицам за исключением случаев, предусмотренных законодательством РФ. Проведение платежей по банковским картам осуществляется в строгом соответствии с требованиями платёжных систем МИР, Visa Int., MasterCard Europe Sprl, JCB.
*/
