import ChangeErrorMessage from './../../../fixes/js/ChangeErrorEessage/ChangeErrorMessage.js';
import TranslateAboutUs from './../../../fixes/js/TranslateAboutUs/TranslateAboutUs.js';
import FooterCopy from './../../../fixes/js/FooterCopy/FooterCopy.js';


export default class Fixes {
  deleteUnnecessaryClasses() {
    if (document.querySelector('.common-home')) {
      document.querySelector(".main-slider ").remove()
    }
    // } else if (document.querySelector('.wrapper')) {
    //   document.querySelector(".sf-menu>li[data-nav-part='home']").remove()
    //   document.querySelector(".sf-menu>li[data-nav-part='5764']").remove()
    //   document.querySelector(".sf-menu>li[data-nav-part='5763']").remove()
    //   document.querySelector(".sf-menu>li[data-nav-part='5762']").remove()
    // }
  }

  updateImgCategories() {
    const imgCat = document.querySelectorAll(".page-section.homefeatured_category > div > div > div > div > div > a > picture > img");
    imgCat.forEach(cat => {
      const src = cat.getAttribute('src');
      let replacedSrc = src.replace(/\/if_ar_gt_2\:1\/c_fill\,h_300\,w_300\,dpr_2\/if_else\/c_pad\,h_300\,w_300\,dpr_2\/if_end/gi, '');
      cat.setAttribute('src', replacedSrc);
    })
  }

  updateClasses() {
    if (document.querySelector('.common-home')) {
      document.querySelector(".content-area>.page-section>.container>.row").classList.add("categories__block")
    }

    if (document.querySelector('.product-product')) {
      document.querySelector(".content-area>.page-section>.container>.row").classList.add("product__block")
    }

    if (document.querySelector('.wrapper')) {
      document.querySelector(".footer>.footer-widgets>.container>.row").classList.add("footer__row")
    }
  }

  insertTitleToCategories() {
    if (document.querySelector('.common-home')) {
      document.querySelectorAll(".content-area>.page-section>.container>.row>div>.thumbnail>.media>.media-link>.caption>.caption-wrapper>.caption-inner>.caption-title").forEach(card => {
        card.insertAdjacentHTML("afterend",
        `<div class="category__card">
          <a href="${card.closest('.media-link').getAttribute('src')}" class="more__category">Смотреть</a>
        </div>`)
      })


      // document.querySelector(".content-area>.page-section>.container>.row>div:nth-child(2)>.thumbnail>.media>.media-link>.caption>.caption-wrapper>.caption-inner>.caption-title")
      //   .insertAdjacentHTML("afterend",
      //     `<div class="category__card">
      //       <small class="count__products">Более 6000 товаров</small>
      //       <a href="/men/" class="more__category">Смотреть</a>
      //     </div>`)

      // document.querySelector(".content-area>.page-section>.container>.row>div:nth-child(3)>.thumbnail>.media>.media-link>.caption>.caption-wrapper>.caption-inner>.caption-title")
      //   .insertAdjacentHTML("afterend",
      //     `<div class="category__card">
      //       <small class="count__products">Более 2000 товаров</small>
      //       <a href="/women/" class="more__category">Смотреть</a>
      //     </div>`)
    }

  }
}

export { ChangeErrorMessage, TranslateAboutUs, FooterCopy };