const navMain = document.querySelector('.nav__main-nav');
const navOthers = document.querySelector('.nav__others-nav');
const navBtn = document.querySelector('.nav__burgerBtn');

const allNavItems = document.querySelectorAll('.nav__item');



const handleNav = () => {
    navMain.classList.toggle('nav--active');
    navOthers.classList.toggle('nav--active');

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            navMain.classList.remove('nav--active');
            navOthers.classList.remove('nav--active');
        })
    })
}



navBtn.addEventListener('click', handleNav)

