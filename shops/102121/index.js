import Requisites from '../../modules/Requisites/Requisites.js'
import requsites from './utils/requsites.js'
import GetCategoriesFromNavbar from "../../components/GetCategoriesFromNavbar/GetCategoriesFromNavbar.js"
import imgArr from "./utils/images.js"

let customBanner = document.querySelector(".custom_banner")
let customSection = document.querySelector(".custom_section")

if(window.location.pathname === '/' || window.location.pathname === '/?from_admin') {
  /* Delete main page */
  document.querySelector("#undefined-sticky-wrapper > header > div.navigation-wrapper > div > nav > ul > li:nth-child(1)").remove()
  let nodeList = document.querySelectorAll("header>.navigation-wrapper>.container>.navigation>.nav.sf-menu>li")
  let categories = new GetCategoriesFromNavbar(Array.from(nodeList), imgArr, "Каталог товаров", customSection, "afterbegin")
  categories.render()
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
