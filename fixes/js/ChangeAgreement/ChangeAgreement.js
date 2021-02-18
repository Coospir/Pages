export default class ChangeAgreement {
  constructor() {
    this.checkbox = document.querySelector('.checkbox>label');
  }

  change() {
    this.checkbox.textContent = '';
    this.checkbox.insertAdjacentHTML(
      'beforeend',
      `Согласен (-а) с условиями <a href="/term-of-use/" style="text-decoration: underline !important;"><b>Публичной оферты</b></a>`,
    );
  }
}

if (location.href.includes('/checkout') || location.href.includes('/register')) {
  const newChange = new ChangeAgreement();
  newChange.change();
}
