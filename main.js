//자바스크립트는 아주 유연하게 만들었지만 실수하는 요소가 있을 수 있음
'use script';//비 상식적인 것을 쓸 수 없도록 조치

//Make navbar transparent when it is on the top
console.log("hello world");

const navbar = document.querySelector("#navbar");
const navHeight = navbar.getBoundingClientRect().height;

window.addEventListener("scroll", () =>{
    if(window.scrollY > navHeight){
        navbar.classList.add("navbar__color");
    }else{
        navbar.classList.remove("navbar__color");
    }
    
});

/* handle scrolling when tapping on th navbar menu */
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    console.log(event.target.dataset.link);

    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
});

