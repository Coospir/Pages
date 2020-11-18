// const data = {
//   ogranization: '',
//   orgAdress: '',
//   mailAdress: '',
//   regAdress: '',
//   inn: '',
//   kpp: '',
//   ogrn: '',
//   bankName: '',
//   accountNumber: '',
//   corrNumber: '',
//   bik: '',
//   director = '',
// }

export default class Requisites {
  constructor(obj, target, container = document.querySelector('.requsitess')) {
    this.obj = obj;
    this.target = target;
    this.container = container;
    this.arr = [];
  }

  setItemtemplate(key, val) {
    return `
      <p class="requsites__elem">
        ${key}: <span>${val}</span>
      </p>`;
  }

  setData() {
    const arr = Object.entries(this.obj);
    return arr.map((item) => this.setItemtemplate(item.key, item.value));
  }

  setTemplate() {
    if (this.container.classList.contains('media')) {
      this.container.insertAdjacentHTML(
        this.target,
        `<div class="media">
          <div class="meida-body requsites__data">
            <i class="fas fa-info-circle"></i>
            <h4 class="requsites__title">Реквизиты продавца</h4>
            <div class="requsites__list">
              ${this.setData().join('')}
            </div>
          </div>`,
      );
    } else if (this.container.classList.contains('requsitess')) {
      this.container.insertAdjacentHTML(
        this.target,
        `
        <div class="requsites__data">
          <h4 class="requsites__title">Реквизиты продавца</h4>
          ${this.setData().join('')}
        </div>`,
      );
    }
  }
}

const data = {
  'Организация' : 'ИП ЩЕРБАКОВ АЛЕКСАНДР СЕРГЕЕВИЧ',
  'Юр. Адрес': 'г. Екатеринбург, ул. Щербакова 4 офис 302',
  'Почтовый адрес': 'г. Екатеринбург, ул. Щербакова 4 офис 302',
  'ИНН': '667105593531',
  'ОГРН': '317665800123460',
  'Банк': 'УРАЛЬСКИЙ БАНК ПАО СБЕРБАНК',
  'Рассчетный счет': '40802810016540071804',
  'Корр. Счёт': '30101810500000000674',
  'БИК': '046577674',
  'Директор': 'ЩЕРБАКОВ АЛЕКСАНДР СЕРГЕЕВИЧ',
};

if (location.href.includes('term-of-use')) {
  const req = new Requisites(data, 'afterbegin');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(data, 'afterend', media);
  req.setTemplate();
}
