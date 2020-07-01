const menuBtn = document.querySelector('.menu-btn');
const hamburderBtn = document.querySelector('.menu-btn-burger');
const nav = document.querySelector("nav")
const menuNav = document.querySelector(".menu-nav");
const menuNavItems = document.querySelectorAll('.menu-nav-item');



let showMenu = false;

menuBtn.addEventListener('click', toggleMenuBtn);

function toggleMenuBtn(){
    if(!showMenu){
        hamburderBtn.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        menuNavItems.forEach(el =>{
            el.classList.add('open');
        });
        
        showMenu = true;
    }else{
        hamburderBtn.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        menuNavItems.forEach(el => {
            el.classList.remove('open');
        });

        showMenu = false;
    }
}