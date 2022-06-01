export function burgerMenu() {
  const menuBtn = document.querySelector('.arrow');
  const menu = document.querySelector('.header__block');

  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    //bg.classList.toggle('active');
    //document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
  })
}