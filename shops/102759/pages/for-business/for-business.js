import ImgNearText from '../../../../components/ImgNearText/ImgNearText.js'

const aboutData = [
  {
    img: 'https://res.cloudinary.com/gz-company/image/upload/v1606228219/Miru/Miru_1_day_Flat_Pack_pattern-01_1_cg520r.png',
    title: 'О нас',
    ph1: ' представляет широкий портфель продукции для профилактики и лечения офтальмологических заболеваний.',
    ph2: ' успешно работает на российском рынке более 25 лет.'
  }
]

if (location.href.includes('/for-business')) {
  new ImgNearText(document.querySelector('#content > .row > div'), 'beforeEnd', aboutData).render();
}