const navMain = document.querySelector('.nav__main-nav');
const navSocial = document.querySelector('.nav__social');
const navBtn = document.querySelector('.nav__burgerBtn');
const navShadow = document.querySelector('.nav__shadow');

const allNavItems = document.querySelectorAll('.nav__item');



const handleNav = () => {
    navMain.classList.toggle('nav--active');
    navSocial.classList.toggle('nav--active');
    navShadow.classList.toggle('nav__shadow--active');

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            navMain.classList.remove('nav--active');
            navSocial.classList.remove('nav--active');
            navShadow.classList.remove('nav__shadow--active');
        })
    })
}


navBtn.addEventListener('click', handleNav)





const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
})