import CreateAddContainer from '../../../../../modules/CreateAddContainer/CreateAddContainer.js';
import DeleteClasses from '../../../../../modules/DeleteClasses/DeleteClasses.js';
import { collapseShow } from '../../../../../components/HeaderTypeTwo/scripts/collapseShow.js';

document.querySelector("body.ltr > div > header > div.header-wrapper > div.container-fluid").insertAdjacentHTML("beforeend", `<div class='header_widgets'></div>`)
const headerWidgets = document.querySelector('.header_widgets');
const headerContainer = document.querySelector('.header-wrapper>div');
//const headerLoginText = document.querySelector('.header_login>.d-none.d-lg-block');
const navigationElements = document.querySelectorAll('.navigation .sf-menu li > a');

const links = document.querySelectorAll('.mobile_side_nav_menu>.flexy>a');

const wishList = `
    <a
      id="wishlist"
      class="position-relative"
      href="https://${location.host}/index.php?route=account/wishlist"
      role="link"
    >
      <i class="far fa-heart"></i>
    </a>
`;

if (document.querySelector('.wrapper')) {
  const selectors = [];
  const cartI = document.querySelector('body .header-cart i');

  headerContainer.classList.add('container');
  headerContainer.classList.remove('container-fluid');

  cartI.classList.add('far');
  cartI.classList.remove('fal');

  //headerLoginText.remove();

  // Add underline to nav elem for open page
  navigationElements.forEach(elem => {
    if (elem.getAttribute('href') == decodeURI(location.href) || location.pathname == elem.getAttribute('href')) {
      elem.style.cssText = 'border-bottom: 2px solid;'
    }
  })

  // END add underline to nav elem for open page

  if (headerWidgets) {
    const newCont = new CreateAddContainer(headerContainer, 'beforeend', headerWidgets.outerHTML);
    newCont.render();

    headerWidgets.remove();
    collapseShow(links);
    document
      .querySelector('.header_widgets')
      .insertAdjacentHTML('afterbegin', `<div class="header_wishlist">${wishList}</div>`);

    //const headerLoginIco = document.querySelectorAll('.header_login>.d-none.d-sm-block.d-lg-none');

    //headerLoginIco[0].classList.forEach((selector) => selectors.push(selector));

    //const deleteSelectors = new DeleteClasses(headerLoginIco, selectors);
    //deleteSelectors.findAndDelete();
  } else {
    headerContainer.insertAdjacentHTML(
      'beforeend',
      `<div class="header_widgets">${wishList}${cartI.outerHTML}</div>`,
    );
    cartI.remove();
  }
}




/*let headerContainer = document.querySelector("body.ltr > div > header > div.header-wrapper > div.container-fluid > div.logo")

// Getting old elements
let oldHeaderCart = document.querySelector(".header-cart")
let oldHeaderSearch = document.querySelector(".header-search")

// Deleting words from cart
document.querySelector("#cart > span.cart-norm-qty.d-none.d-lg-inline-block").remove()

// Creating copy of widgets
let newHeaderCart = oldHeaderCart.cloneNode(true)
let newHeaderSearch = oldHeaderSearch.cloneNode(true)
let wishList = `
    <a
      id="wishlist"
      class="position-relative"
      href="https://${location.host}/index.php?route=account/wishlist"
      role="link"
    >
      <i class="far fa-heart"></i>
    </a>
`;

let widgetsBlock = `<div class='widgets_block'>
    ${newHeaderSearch.outerHTML}
    ${newHeaderCart.outerHTML}
    ${wishList}
</div>`

headerContainer.insertAdjacentHTML("beforeend", widgetsBlock)
oldHeaderSearch.remove()
oldHeaderCart.remove()*/





