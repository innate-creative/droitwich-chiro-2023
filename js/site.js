// Navigation

const burger = document.getElementById('burger')
const navMenu = document.getElementById('mobile-nav-menu')
const burgerIcon = document.getElementById('burger-icon')
const mobileDropdowns = Array.from(document.querySelectorAll('.mobile-dropdown-button'));
const submenus = mobileDropdowns.concat(Array.from(document.querySelectorAll('.mobile-submenu')));
burger.addEventListener('click', function (){
  burger.classList.toggle('open');
  burgerIcon.classList.toggle('active');
  navMenu.classList.toggle('hidden');
  navMenu.classList.toggle('flex');
})
mobileDropdowns.forEach((btn) => {
  btn.addEventListener('click', () => {        
    let expand = btn.nextElementSibling;
    btn.classList.toggle('active');
    expand.classList.toggle('open');
    let collapse = mobileDropdowns.filter(sub => sub !== btn);
    collapse.forEach((el) => {
      let submenu = el.nextElementSibling;
      el.classList.remove('active');
      submenu.classList.remove('open');
    });
  });
});