const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navbarLogo = document.querySelector('#navbar__logo');

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});




const highlightNavbar = () => {
    const element = document.querySelector('.highlight');
    const homeNav = document.querySelector('#home-page');
    const aboutNav = document.querySelector('#about-page');
    const serviceNav = document.querySelector('#services-page');
    let scrollPos = window.scrollY;


    // add '.highlight' class to my navbar menu

    if (window.innerWidth > 960 && scrollPos < 600) {
        homeNav.classList.add('highlight');
        aboutNav.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        homeNav.classList.remove('highlight');
        aboutNav.classList.add('highlight');
        serviceNav.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        homeNav.classList.remove('highlight');
        aboutNav.classList.remove('highlight');
        serviceNav.classList.add('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos > 3200) {
        homeNav.classList.remove('highlight');
        aboutNav.classList.remove('highlight');
        serviceNav.classList.remove('highlight');
        return;
    }

    if ((element && window.innerWidth < 960 && scrollPos < 600) || element) {
        element.classList.remove('highlight');
    }
}


window.addEventListener('scroll', highlightNavbar);
window.addEventListener('click', highlightNavbar);

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 960 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navbarLogo.addEventListener('click', hideMobileMenu);