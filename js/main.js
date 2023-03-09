const navMain = document.querySelector('.nav__main-nav');
const navBtn = document.querySelector('.nav__burgerBtn');
const navShadow = document.querySelector('.nav__shadow');

const allNavItems = document.querySelectorAll('.nav__item');



const handleNav = () => {
    navMain.classList.toggle('nav--active');
    navShadow.classList.toggle('nav__shadow--active');

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            navMain.classList.remove('nav--active');
            navShadow.classList.remove('nav__shadow--active');
        })
    })
}


navBtn.addEventListener('click', handleNav)

