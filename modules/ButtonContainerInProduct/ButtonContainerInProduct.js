export default class ButtonContainerInProduct {
  constructor(addToCart, addToWishList, container) {
    this.container = container;
    this.addToCart = addToCart;
    this.addToWishList = addToWishList;
  }

  delete(element) {
    element.forEach(el => el.remove());
  }

  createContainer() {
    this.container.forEach((btn, i) => {
      btn.insertAdjacentHTML(
        'afterend',
        `<div class="buttons__container">${this.addToWishList[i].outerHTML}${this.addToCart[i].outerHTML}</div>`,
      );
    });

    this.delete(addToCart);
    this.delete(addToWishList);
  }
}

const priceActions = document.querySelectorAll('.price_actions');
const price = document.querySelectorAll('.product-item .price');
const addToCart = document.querySelectorAll('.add_to_cart');
const addToWishList = document.querySelectorAll('.add_to_wishlist') ? document.querySelectorAll('.add_to_wishlist') : document.querySelectorAll('.remove_from_wishlist') ;
console.log(addToWishList);
const buttonContainerInProduct = new ButtonContainerInProduct(addToCart, addToWishList, price);

buttonContainerInProduct.createContainer();

// const btnContainer = document.querySelectorAll('.buttons__container')

// const addCartInProductCard = new AddElemInContainer(addToCart, btnContainer);
// const addLikeInProductCard = new AddElemInContainer(addToWishList, btnContainer);

//${this.addToCart.outerHTML}${this.addToWishList.outerHTML}
