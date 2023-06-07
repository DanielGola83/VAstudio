// NAVIGATION
const navMain = document.querySelector('.nav__main-nav');
const navBtn = document.querySelector('.nav__burgerBtn');
const navShadow = document.querySelector('.nav__shadow');
const footerYear = document.querySelector('.footer__year')

const offer = document.querySelector('.nav__main-nav-offer')
const navDropdown = document.querySelector('.nav__dropdown')

const allNavItems = document.querySelectorAll('.nav__item');


const handleNav = () => {
    navMain.classList.toggle('nav--active');
    navBtn.classList.toggle('open--active');
    navShadow.classList.toggle('nav__shadow--active');
    navDropdown.classList.toggle('nav__dropdown--active');

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            navMain.classList.remove('nav--active');
            navBtn.classList.remove('open--active');
            navShadow.classList.remove('nav__shadow--active');
            navDropdown.classList.remove('nav__dropdown--active');
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


// CTA POPUP
const CTA = document.querySelector('.nav__ctaBtn')
const CTApopUp = document.querySelector('.CTA__popUp')
const CTAshadow = document.querySelector('.CTA__shadow')
const CTAcontainer = document.querySelector('.CTA__container')
const CTAcloseBtn = document.querySelector('.CTA__closeBtn')


const popUpWindowOn = () => {
    CTApopUp.classList.add('CTA__popUp--active');
    CTAshadow.classList.add('CTA__shadow--active');
    CTAcontainer.classList.add('CTA__container--active');
}
const popUpWindowOff = () => {
    CTApopUp.classList.remove('CTA__popUp--active');
    CTAshadow.classList.remove('CTA__shadow--active');
    CTAcontainer.classList.remove('CTA__container--active');
}


CTA.addEventListener('click', popUpWindowOn)
CTAshadow.addEventListener('click', popUpWindowOff)
CTAcloseBtn.addEventListener('click', popUpWindowOff)


// ACCORDION
const accordionItemHeader = document.querySelectorAll(".section-accordion__header")

accordionItemHeader.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

        // const currentlyActiveAccordionItemHeader = document.querySelector(".section-accordion__header.active");
        // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
        //     currentlyActiveAccordionItemHeader.classList.toggle("active");
        //     currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0
        // }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0
        }
    })
})