import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

const headerWidgets = document.querySelector('.header_widgets');
const headerContainer = document.querySelector('.header-wrapper>div');
const headerLoginText = document.querySelector('.header_login>.d-none.d-lg-block');
const wishList = `
  <div class="header_wishlist">
    <a
      id="wishlist"
      class="position-relative"
      href="https://${location.host}/index.php?route=account/wishlist"
      role="link"
    >
      <i class="far fa-heart"></i>
    </a>
  </div>
`;

const collapseShow = () => {
  const links = document.querySelectorAll('.mobile_side_nav_menu>.flexy>a');
  //remove attr href
  links.forEach(a => {
    if (a.closest('li').querySelector('.panel-collapse')){
      a.removeAttribute('href')
    }
  });

  //set listeners and show panel-collapse
  links.forEach(a => {
    a.addEventListener('click', (e) => {
      const el = e.target.closest('.flexy')
      console.log(el);

      el.querySelector('.panel-collapse').classList.toggle('show');
    })
  })
}

if (document.querySelector('.wrapper')) {
  const cart = document.querySelector('.header-cart');
  const cartI = cart.querySelector('i');


  cartI.classList.add('far');
  cartI.classList.remove('fal');

  headerContainer.classList.add('container')
  headerContainer.classList.remove('container-fluid')

  headerLoginText.remove();

  console.log(headerWidgets);
  if (headerWidgets) {
    const newCont = new CreateAddContainer(headerContainer, 'beforeend', headerWidgets.outerHTML);
    newCont.render();
    headerWidgets.remove();
    collapseShow();
    headerWidgets.insertAdjacentHTML('afterbegin', wishList);
  } else {
    headerContainer.insertAdjacentHTML('beforeend', `<div class="header_widgets">${wishList}${cart.outerHTML}</div>`);
    cart.remove();
  }
}
