import Requisites from '../../modules/Requisites/Requisites.js'
import {requsites} from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js'
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'
import './blocks/header/header.js'
import './blocks/banner/banner.js'
import resetSizeBanner from "./blocks/banner/banner.js";
import renderContactsInCustomSection from "./blocks/custom-section/contacts/contacts.js";


document.querySelector("#home > div > header > div.header-wrapper > div > nav > ul > li:nth-child(1) > div > a").addEventListener('click', () => {
  console.log("Clicked burger")
  document.querySelector(".mobile_side_nav").classList.remove("nav-opened")
  document.querySelector(".mobile_side_nav").classList.add("nav-closed")
  document.querySelector("body").classList.remove("overflow-hidden")
})

document.querySelector("#home > div > footer > div.footer-widgets > div.container > div > div:nth-child(1) > div > h4").innerHTML = 'О нас'

document.querySelector("#home > div > header > div.header-wrapper > div > nav > ul > li:nth-child(2) > a").innerHTML = `<a href="">Каталог</a>`
if(document.querySelector(".common-home")) {
  resetSizeBanner()
  renderContactsInCustomSection()

  document.querySelector(".custom_banner").insertAdjacentHTML("afterend", `
      <div class="container cat_block">
        <div class="categories_block">

            <div class="cat_item">
                <a href="https://multimanic.ru/multiblade/"><img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612350624/sellavi/103094/Frame_316_1_skvz21.jpg" alt="category" /></a>
            </div>

            <div class="cat_item">
                <a href="https://multimanic.ru/multicream-1/"><img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612350640/sellavi/103094/Frame_317_1_nmqnvi.jpg" alt="category" /></a>
            </div>

            <div class="cat_item">
                <a href="https://multimanic.ru/multidez/"><img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612350658/sellavi/103094/Frame_318_1_k2fd4i.jpg" alt="category" /></a>
            </div>

            <div class="cat_item">
                <a href="https://multimanic.ru/multigialuron/"><img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612350674/sellavi/103094/Frame_319_ij1lbd.jpg" alt="category" /></a>
            </div>

            <div class="cat_item">
                <a href="https://multimanic.ru/multinailstick/"><img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612350674/sellavi/103094/Frame_319_ij1lbd.jpg" alt="category" /></a>
            </div>
        </div>
      </div>
    `)
  if(window.screen.width < 480) {

    document.querySelector(".cat_block").insertAdjacentHTML("afterend", `
    <img class="second_banner container" src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612351112/sellavi/103094/Component_2_1_kkyhjg.jpg" alt="desktop"/>
  `)
  } else {
    document.querySelector(".cat_block").insertAdjacentHTML("afterend", `
    <img class="second_banner container" src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612351092/sellavi/103094/Group_279_1_uzrnbp.jpg" alt="desktop"/>
  `)
  }

}

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Кучма Виктория Геннадьевна');
  req.setTemplate();
}

if (location.href.includes('/contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Кучма Виктория Геннадьевна', media);
  req.setTemplate();
}

if (location.href.includes('/policy')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Кучма Виктория Геннадьевна',
    document.querySelector('#content > div > div'),
  );
  req.setTemplate();
}

