//자바스크립트는 아주 유연하게 만들었지만 실수하는 요소가 있을 수 있음
'use script';//비 상식적인 것을 쓸 수 없도록 조치

//Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navHeight = navbar.getBoundingClientRect().height;

window.addEventListener("scroll", () =>{
    if(window.scrollY > navHeight){
        navbar.classList.add("navbar__color");
    }else{
        navbar.classList.remove("navbar__color");
    }
    
});

/* handle scrolling when tapping on the navbar menu */
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    scrollIntoView(link);
});

/* move by scrolling when tapping on the contact button */
const contactbtn = document.querySelector('.home__contact');
contactbtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}

//Make home transparent as passing
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

window.addEventListener("scroll", () =>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
});
