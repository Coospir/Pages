import '../../fixes/fixes.js';

window.onload = () => {
  document.querySelector("#home > div.wrapper.wrapper-closed > header > div").setAttribute("style", "background-color: #fff")

  let bannerMain = document.querySelector(".custom_banner")
  bannerMain.insertAdjacentHTML("afterbegin", `
      <div class="video__banner">
          <video autoplay loop muted>
              <source src="https://video-public.canva.com/VAEFIQ7iFMI/v/a2ade3cf84.mp4" type="video/mp4">
              Your browser does not support the video tag.
          </video>
           <div class="video__banner__text__content">
              <h1 class="video__banner__text__content__header">whitemoon.store</h1>
           </div>
      </div>
    `)

  let mainContainer = document.querySelector("#home > div.wrapper.wrapper-closed > div > section > div")


  fetch(`https://sellavi-api.000webhostapp.com/fetch.php`)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      let categories = json.response.data
      categories.map(category => {
        mainContainer.insertAdjacentHTML("afterbegin", `
            <div class="categories__group">
                <div class="categories__group__item">
                  <div class="categories__group__header">
                      <h1 class="categories__group__header__text">${category.full_name}</h1>
                  </div>
                  <div class="categories__group__link">
                      <a href="${category.url}">Перейти</a>
                  </div>
                </div>
            </div>
          `)
      })
    });
}