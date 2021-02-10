import Paths from "../../path/paths.js"

const headerWidgets = [
  document.querySelector(".header-wrapper"),
  document.querySelector(".mobile-navigation-wrapper"),
  document.querySelector("#cart"),
  document.querySelector("#wishlist"),
  document.querySelector("#login"),
  document.querySelector(".header .header-search button"),
  document.querySelector("#search > div.search_field > input")
]

if ( !Paths.home ) {
  headerWidgets.forEach(item => {
    item.classList.add('colored')
  })
}
