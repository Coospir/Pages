import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js'
import '../../fixes/js/ButtonContainerInProductCard/ButtonContainerInProductCard.js'
import '../../fixes/js/RemoveBlur/RemoveBlur.js'
import renderContactsInCustomSection from "./blocks/contacts/contacts.js"

import Requisites from '../../modules/Requisites/Requisites.js';
import {requsites, dataContact } from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'


document.querySelector("body").insertAdjacentHTML("afterbegin", `
  <div class="custom-preloader">
      <span>
        <img src="https://ru.sellavi.com/assets/images/logo.svg" alt="img" />
    </span>
  </div>
`)

/*setTimeout(function() {*/
  window.addEventListener("load", function () {
    const preloader = document.querySelector(".custom-preloader");
    preloader.className += " hidden";
  });
/*}, 1500)*/


if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП КОРСАКОВ ЭДУАРД ВЛАДИМИРОВИЧ');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП КОРСАКОВ ЭДУАРД ВЛАДИМИРОВИЧ', media);
  req.setTemplate();
}

/*

if (location.href.includes('policy')) {
  const req = new Requisites(
      requsites,
      'afterend',
      'ИП КОРСАКОВ ЭДУАРД ВЛАДИМИРОВИЧ',
      document.querySelector('#content > div > div'),
  );
  req.setTemplate();
}
*/

if (location.href.includes('pay-delivery')) {
  const req = new Requisites(
      requsites,
      'afterend',
      'ИП КОРСАКОВ ЭДУАРД ВЛАДИМИРОВИЧ',
      document.querySelector('#content > div > div'),
      dataContact,
  );
  req.setTemplate();
}



renderContactsInCustomSection()