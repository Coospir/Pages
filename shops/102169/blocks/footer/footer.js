let socialLayout = `
    <li><h4 class="widget-title">Мы в соц. сетях</h4></li>
    <li class="social__li">
        <a href="https://www.instagram.com/_organic_stories_/" target="_blank"><img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1608727375/sellavi/102169/instt.svg" alt="instagram"></a>
        <a target="_blank" href="https://wa.me/79262547856?text=Здравствуйте!%20Заинтересовала%20Ваша%20продукция."><img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1608727336/sellavi/102169/wwa.svg" alt="wa"></a>
        <a target="_blank" href="https://vk.com/organicstories"><img src="https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1608727297/sellavi/102169/vk.svg" alt="vk"/></a>
    </li>
`

if(document.querySelector(".footer")) {
  let renderSocialLayoutFooter = () => {
    document.querySelector(".footer-widgets>.container>.row>div:nth-child(3)>.widget>ul>li:nth-child(3)").insertAdjacentHTML("afterend", socialLayout)
  }
}



export default renderSocialLayoutFooter