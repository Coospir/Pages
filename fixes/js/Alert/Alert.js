if (document.querySelector('.common-home')) {
  const btns = document.querySelectorAll('.add_to_wishlist > button');
  const banner = document.querySelector('.main-slider');


  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const alert = document.querySelector('.alert');
      console.log(e.target)
      setTimeout(() => {
        console.log(alert);
        banner.insertAdjacentHTML('afterend', alert);
      }, 2000);
    });
  });
}
