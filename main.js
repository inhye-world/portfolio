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

    navbarMenu.classList.remove('open');
    scrollIntoView(link);
});

//hamburger navbar style
const navtoggle = document.querySelector('.navbar__toggle-btn');
navtoggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});

/* move by scrolling when tapping on the contact button */
const contactbtn = document.querySelector('.home__contact');
contactbtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});

//Make home transparent as passing
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

window.addEventListener("scroll", () =>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

//show arrow when scroll
const pageup = document.querySelector('.pageup');
window.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight/2){
        pageup.classList.add('show__arrow');
    }else{
        pageup.classList.remove('show__arrow');
    }
})

// move top of page when tapping up arrow icon
pageup.addEventListener('click',() => {
    scrollIntoView('#home');
})

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}

//sorting projects by type
const workCate = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects')
const projects = document.querySelectorAll('.project');
workCate.addEventListener('click', (event) => {
    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
    if(filter == null){
        return;
    }

    //remove selection form the previous item and select new one
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');

    const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
    target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    
    setTimeout(() => {
        projects.forEach((project) => {
        
            console.log(project.dataset.type);
            console.log(`filter : `+filter);
                if(filter === '*' || filter === project.dataset.type){
                    project.classList.remove('invisible');
                }else{
                    project.classList.add('invisible');
                }
            });
        projectContainer.classList.remove('anim-out');
    }, 300);
    
});
