
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

// FOOTER YEAR
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







// CTA POPUP
const CTA = document.querySelector('.nav__ctaBtn')
const newW = document.querySelector('.CTA__PopUp')

const ddd = () => {
    newW.classList.add('CTA__PopUp--active');
}
const delet = () => {
    newW.classList.remove('CTA__PopUp--active');
    
}
CTA.addEventListener('click', ddd)
newW.addEventListener('click', delet)



// BUTTON MENU
const ppp = document.querySelector('.nav__main-nav-offer')
const nD = document.querySelector('.nav__dropdown')

const ooo = () => {
    nD.classList.toggle('nav__dropdown--active');
}

ppp.addEventListener('click', ooo)

