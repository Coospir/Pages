import Requisites from '../../modules/Requisites/Requisites.js';
import {requsites, dataContact } from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'
import '../../templates/TemplateTypeTwo/TemplateTypeTwo.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';

if (document.querySelector('.common-home')) {
  document.querySelector('#banner0 > div > div > div > div > div > div > div > div > div > p > a').innerHTML = 'Подробнее';
  document.querySelector('#home > div > div > section.page-section.homefeatured_category').insertAdjacentHTML('beforebegin', '<div class="preCatTitle"><div class="container"><div class="row"><div class="col-sm">Категории</div></div></div></div>');
}

if (document.querySelector('.header-wrapper')) {
  const oldNav = document.querySelector('.navigation .nav.sf-menu');
  const newNav = oldNav.cloneNode(true);
  document.querySelector('#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div.container > div.logo').insertAdjacentHTML('afterend', newNav.outerHTML);
  oldNav.remove();
  document.querySelector('#home > div > div.navigation_black_screen').remove();
}

if (location.href.includes('contact')) {
  document.querySelector('#home > div.wrapper.wrapper-closed > div.content-area > div > section > div > div > div.col-md-4 > div > div > div:nth-child(1) > div > strong').insertAdjacentHTML('afterend', '<div>Нижегородская область, г.Кстово, ул.Шохина, 2а ;</div>');
}

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Давыдов Олег Борисович');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Давыдов Олег Борисович', media);
  req.setTemplate();
}


if (location.href.includes('policy')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Давыдов Олег Борисович',
    document.querySelector('#content > div > div'),
  );
  req.setTemplate();
}

if (location.href.includes('pay-delivery')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Давыдов Олег Борисович',
    document.querySelector('#content > div > div'),
    dataContact,
  );
  req.setTemplate();
}

if (document.querySelector('.custom_section')) {
  document.querySelector('.custom_section').insertAdjacentHTML('afterbegin', '<div class="preCatTitle"><div class="container"><div class="row"><div class="col-sm"><div>Сегодня «COLOREX» это:</div><ul><li>- крупнейший производитель лакокрасочных материалов в Швеции;</li><li>- современный исследовательский центр и собственный банк рецептур ЛКМ, состоящий</li><li>- экспорт продукции в 15 стран Европы;</li></ul></div><div class="col-sm"></div><div class="col-sm"><ul><li>- более 3000 оптовых партнеров на международных рынках.</li><li>- полностью автоматизированное предприятие с объемом производства продукции более</li><li>- 13 миллионов литров в год;</li><li>- более чем из 10 000 наименований;</li></ul></div></div></div></div>');
}