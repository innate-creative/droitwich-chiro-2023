// Navigation

const burger = document.getElementById('burger')
const navMenu = document.getElementById('mobile-nav-menu')
const burgerIcon = document.getElementById('burger-icon')
burger.addEventListener('click', function (){
  burger.classList.toggle('open');
  burgerIcon.classList.toggle('active');
  navMenu.classList.toggle('hidden');
  navMenu.classList.toggle('flex');
})
