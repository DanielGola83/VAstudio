
const navMain = document.querySelector('.nav__main-nav');
const navBtn = document.querySelector('.nav__burgerBtn');
const navShadow = document.querySelector('.nav__shadow');
const footerYear = document.querySelector('.footer__year')

const allNavItems = document.querySelectorAll('.nav__item');


const handleNav = () => {
    navMain.classList.toggle('nav--active');
    navBtn.classList.toggle('open--active');
    navShadow.classList.toggle('nav__shadow--active');

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            navMain.classList.remove('nav--active');
            navBtn.classList.remove('open--active');
            navShadow.classList.remove('nav__shadow--active');
        })
    })
}

navBtn.addEventListener('click', handleNav);
navShadow.addEventListener('click', handleNav)


// FOOTER YEAR - START
const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year
}
handleCurrentYear();


// DROPPING CONTACT
const navDropContact = document.querySelector('.nav__droppingContact')

const droppingContactShow = () => {
    navDropContact.classList.toggle('nav__droppingContact--show', window.scrollY > 700);
    navDropContact.classList.toggle('nav__droppingContact--hide', window.scrollY > 11500);
}

window.addEventListener('scroll', droppingContactShow)
