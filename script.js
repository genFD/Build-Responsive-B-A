const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');
const navlinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
  navbar.classList.toggle('navchange');
  navlinks.classList.toggle('linkschange');
  menu.classList.toggle('menuchange');
});
