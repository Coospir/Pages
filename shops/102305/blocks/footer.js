export default class Footer {
  addIcons() {
    if (document.querySelector('.wrapper')) {
      document.querySelector(".footer-widgets>.container>.footer-row").insertAdjacentHTML("beforeend", `
      <div class="col-md-3">
          <div class="widget widget-categories">
              <h4 class="widget-title">Мы в социальных сетях</h4>
              <ul>
                  <li><a href="https://wa.me/79649929997" role="link" target="_blank"><img src="https://res.cloudinary.com/gz-company/image/upload/v1606295327/Miru/assets/icons/icons8-whatsapp_1_kh2mdl.svg" alt="img"/></a></li>
                  <li><a href="#" role="link" target="_blank"><img src="https://res.cloudinary.com/gz-company/image/upload/v1606295327/Miru/assets/icons/icons8-instagram_1_rw7nv3.svg" alt="img"/></a></li>
              </ul>
          </div>
      </div>
      `)
    }
  }
}