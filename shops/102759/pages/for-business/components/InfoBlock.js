export default class InfoBlock {
  constructor(props) {
    this.props = props;
  }

  setText() {
    return
  }

  setContent(data) {
    return `
      <div class="info-block__content col">
        ${data.image}
      </div>
      <div class="info-block__content tcol">
        <h5>${data.title}</h5>
        <div>${data.ph1}</div>
        ${
          data.ph2 !== '' ? `<div>${data.ph2}</div>` : ''
        }
      </div>
    `;
  }

  setRow(data) {
    return data.map(row => {
      return `
        <div class="row">${this.setContent(row)}</div>
      `
    }).join('');
  }

  render() {
    return `
      <div class="info-block d-flex justify-content-between">
         ${this.setRow(this.props)}
      </div>
    `
  }
}