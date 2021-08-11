const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

openMenu.addEventListener('click', () => {
  mobileMenu.style.width = '100%';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.style.width = '0';
});
