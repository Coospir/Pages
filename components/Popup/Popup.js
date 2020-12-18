export default class Popup {
  constructor(data, container) {
    this.data = data;
    this.container= container;
  }

  setTemplate() {
    return `
      <div class="popup">
        <div class="popup-wrapper"></div>
        <div class="popup__content">

        </div>
        <div class="popup__close">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.3566 20L31.1781 28.8215L28.8211 31.1786L18.3497 20.7072C17.9592 20.3166 17.9592 19.6835 18.3497 19.2929L28.8211 8.82153L31.1781 11.1786L22.3566 20Z"
              fill="white"
            />
            <path
              d="M18.1307 20L9.30919 28.8215L11.6662 31.1786L22.1376 20.7072C22.5281 20.3166 22.5281 19.6835 22.1376 19.2929L11.6662 8.82153L9.30919 11.1786L18.1307 20Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    `
  }

  render(){
    this.container.inserAdjacentHTMK('beforebegin', this.setTemplate(this.data))
  }
}