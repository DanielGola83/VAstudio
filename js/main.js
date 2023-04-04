
const navMain = document.querySelector('.nav__main-nav');
const navBtn = document.querySelector('.nav__burgerBtn');
const navShadow = document.querySelector('.nav__shadow');
const footerYear = document.querySelector('.footer__year')

const CTA = document.querySelector('.nav__ctaBtn')
const newW = document.querySelector('.xxx')

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

const ddd = () => {
    newW.classList.add('xxx--active');
}
const delet = () => {
    newW.classList.remove('xxx--active');
}

navBtn.addEventListener('click', handleNav);
navShadow.addEventListener('click', handleNav)
CTA.addEventListener('click', ddd)
newW.addEventListener('click', delet)


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
