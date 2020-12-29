import AdvantagesTypeOne from '../../../../components/AdvantagesTypeOne/AdvantagesTypeOne.js'
import ImgNearText from '../../../../components/ImgNearText/ImgNearText.js';
import FormBasic from '../../../../components/FormBasic/FormBasic.js'

import AdvantagesData from '../constants/AdvantagesData.js';
import DataImgNearText from '../constants/DataImgNearText.js';
import FormTags from '../constants/FormTags.js'

export default (function() {
  if (document.querySelector('.common-home')) {

    new FormBasic(document.querySelector('.homefeatured_category'), 'afterend', senderData, FormTags).render();
    new ImgNearText(document.querySelector('.main-slider'), 'afterend', DataImgNearText).render();

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

    const btnCategory = document.querySelectorAll(".common-home > div > div.content-area > section.page-section.homefeatured_category > div > div > div > div > div > a > div > div > div > span");

    btnCategory.forEach(btn => btn.textContent = 'Подробнее');

    const advantages = new AdvantagesTypeOne(document.querySelector('.main-slider'), AdvantagesData, 'afterend');

    advantages.render();
  }
})();
