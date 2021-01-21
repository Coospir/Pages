
let renderContactsInCustomSection = () => {
  if (document.querySelector('.common-home')) {
    document.querySelector('.page-section.latest-section').insertAdjacentHTML('afterend', `
  <div class="contactsSection">
    <div class="container">
      <div class="contacts-flex">
        <div class="contacts-title">
          <span>Контакты</span>
        </div>
        <div class="otherInfo">
            <div class="number">
              <div class="number-img">
                  <img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1610451452/Group_208_ydygyb.png" alt="">
              </div>
              <div class="title-and-number">
                <div class="number-title">
                    <span>Номер телефона</span>
                </div>
                <div class="real-number">
                  <span>8 (919) 721-55-83</span>
                </div>
              </div>
            </div>
            <div class="email">
              <div class="email-img">
                  <img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1610451450/Group_209_ye2yi4.png" alt="">
              </div>
              <div class="title-and-email"
                  <div class="email-title">
                      <span>Почтовый адрес</span>
                  </div>
                  <div class="real-email">
                      <span>severinovsquash@gmail.com</span>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>`);
  }
}

export default renderContactsInCustomSection
