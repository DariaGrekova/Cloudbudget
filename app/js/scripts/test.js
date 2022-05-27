export function burgerMenu() {
  const menuBtn = document.querySelector('.kebab-menu');
  const menu = document.querySelector('.header-menu');

  menuBtn.addEventListener('click', function () {
    const menuItems = document.querySelectorAll('.header-menu__item');
    menuItems.forEach((item) => {})
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    //bg.classList.toggle('active');
    //document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
  })
}