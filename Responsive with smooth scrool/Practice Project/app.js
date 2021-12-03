const navbar = document.querySelector('.navbar');

const mobileMenu = document.querySelector('#mobile_menu');
const navbarMenu = document.querySelector('.navbar_menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
    navbarMenu.classList.toggle('active');
});