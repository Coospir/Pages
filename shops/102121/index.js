import Requisites from '../../modules/Requisites/Requisites.js'
import requsites from './utils/requsites.js'
import GetCategoriesFromNavbar from "../../components/GetCategoriesFromNavbar/GetCategoriesFromNavbar.js"
import imgArr from "./utils/images.js"
import TranslateAboutUs from "../../fixes/TranslateAboutUs/TranslateAboutUs.js"
import ChangeAgreement from "../../fixes/ChangeAgreement/ChangeAgreement.js"
import BigBanner from '../../modules/BigBanner/BigBanner.js'
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js'


let customBanner = document.querySelector(".custom_banner")
let customSection = document.querySelector(".custom_section")

if(window.location.pathname === '/' || window.location.pathname === '/?from_admin') {
  let nodeList = document.querySelectorAll("header>.navigation-wrapper>.container>.navigation>.nav.sf-menu>li")
  let categories = new GetCategoriesFromNavbar(Array.from(nodeList), imgArr, "Каталог товаров", customBanner, "afterend")
  categories.render()
  const objBanner = {
    title: 'Wigstyle',
    urlImg: 'https://images.unsplash.com/photo-1582461245067-d444cd654711?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    link: window.location.hostname,
    linkContent: 'Подробнее',
  };
  const bigBanner = new BigBanner(document, objBanner);

  bigBanner.render();
}



if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Харламова Зоя Николаевна');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Харламова Зоя Николаевна', media);
  req.setTemplate();
}
