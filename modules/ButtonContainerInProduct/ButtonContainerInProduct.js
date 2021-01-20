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

    // this.delete(addToCart);
    // this.delete(addToWishList);
  }
}

  const price = document.querySelectorAll('.product-item .price');
const addToCart = document.querySelectorAll('.add_to_cart');

if (document.querySelectorAll('.add_to_wishlist').length === 0) {
 var wishList = document.querySelectorAll('.remove_from_wishlist');
} else {
  var wishList = document.querySelectorAll('.add_to_wishlist');
}


  const buttonContainerInProduct = new ButtonContainerInProduct(addToCart, wishList, price);

  buttonContainerInProduct.createContainer();
  buttonContainerInProduct.delete(addToCart);
  buttonContainerInProduct.delete(wishList);
