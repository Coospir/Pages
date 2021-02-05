import CreateAddContainer from '../../modules/CreateAddContainer/CreateAddContainer.js';

export default class VideoBanner {
  constructor(container, target, ...obj) {
    this.obj = obj;
    this.container = container;
    this.target = target;
  }

  setBanner() {
    return this.obj.map(item => {
      return `
        <video preload="yes" width='100%' height='100%' src="${item.src}" autoplay muted="muted" loop playsinline
        ${
          item.poster ? `poster="${item.poster}"` : ''
        }>
            Your browser does not support the video tag.
        </video>
      `
  });
}

  setCaption() {
    return this.obj.map((item) => {
      return `
      <div class="banner-caption">
        <h1 class="banner-caption__title">${item.caption}</h1>
      </div>
    `});
  }

  setTemplate() {
    return `
      <div class="video-banner">
        ${this.setBanner()}
        ${this.setCaption()}
      </div>
      `
  }

  render() {
    const createAddContainer = new CreateAddContainer(
      this.container,
      this.target,
      this.setTemplate(),
    );
    createAddContainer.render();
  }
}