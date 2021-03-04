const changeLinks = (() => {

  const findSetLink = (arr, href, check) => {
    arr.forEach((link) => {
      if (link.textContent.trim().toLocaleLowerCase() === check) link.setAttribute('href', href)
    });
  }
  const links = document.querySelectorAll(
    'header > div.navigation-wrapper > div .nav.sf-menu > li > a',
  );
  const mobLinks = document.querySelectorAll('.mobile_side_nav_menu > li > a');

  let linkBag;
  let shoesLinks;
  let manShoes;
  let womanShoes;
  let kidShoes;

  links.forEach((a) => {
    if (a.textContent.trim().toLocaleLowerCase() === 'сумки') {
      linkBag = a.getAttribute('href');
    }
  });
  // mobile_side_nav_menu

  links.forEach((a) => {
    if (a.textContent.trim().toLocaleLowerCase() === 'обувь') {
      shoesLinks = a.nextElementSibling.querySelectorAll('.megaline .block-title.h4 a');
    }
  });

  shoesLinks.forEach((a) => {
    if (a.textContent.trim().toLocaleLowerCase() === 'подростковая')kidShoes = a.getAttribute('href');
    if (a.textContent.trim().toLocaleLowerCase() === 'мужская') manShoes = a.getAttribute('href');
    if (a.textContent.trim().toLocaleLowerCase() === 'женская') womanShoes = a.getAttribute('href');
  });

  links.forEach((a) => {
    if (
      a.textContent.trim().toLocaleLowerCase() === 'детям' ||
      a.textContent.trim().toLocaleLowerCase() === 'мужчинам' ||
      a.textContent.trim().toLocaleLowerCase() === 'женщинам'
    ) {

      findSetLink(Array.from(a.nextElementSibling.querySelectorAll('a')), linkBag, 'сумки')

      if (a.textContent.trim().toLocaleLowerCase() === 'детям') findSetLink(a, kidShoes, 'обувь')
      if (a.textContent.trim().toLocaleLowerCase() === 'мужчинам') findSetLink(a, manShoes, 'обувь')
      if (a.textContent.trim().toLocaleLowerCase() === 'женщинам') findSetLink(a, womanShoes, 'обувь')
    }
  });

  mobLinks.forEach((a) => {
    if (
      a.textContent.trim().toLocaleLowerCase() === 'детям' ||
      a.textContent.trim().toLocaleLowerCase() === 'мужчинам' ||
      a.textContent.trim().toLocaleLowerCase() === 'женщинам'
    ) {
      a.closest('li').querySelectorAll('.panel-collapse > ul > li > a').forEach((link) => {
        if (link.textContent.trim().toLocaleLowerCase() === 'сумки') link.setAttribute('href', linkBag)
      });

      if (a.textContent.trim().toLocaleLowerCase() === 'детям') findSetLink(a, kidShoes, 'обувь')
      if (a.textContent.trim().toLocaleLowerCase() === 'мужчинам') findSetLink(a, manShoes, 'обувь')
      if (a.textContent.trim().toLocaleLowerCase() === 'женщинам') findSetLink(a, womanShoes, 'обувь')
    }
  });

  if (document.querySelector('.product-category-5763 .subcategories_top')) {
    const categoriLinks = document.querySelectorAll('.subcategories_top .media_holder a');

      findSetLink(Array.from(categoriLinks), linkBag, 'сумки')
      findSetLink(Array.from(categoriLinks), shoesLinks, 'обувь')
  }
})

export default changeLinks;
