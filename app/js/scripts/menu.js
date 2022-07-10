export function mobileMenu() {
  const menuBtn = document.querySelector('.arrow');
  const menu = document.querySelector('.header__block');

  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  })
}