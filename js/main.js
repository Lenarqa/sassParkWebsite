const menuBtn = document.querySelector('.menu-btn');
const hamburderBtn = document.querySelector('.menu-btn-burger');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenuBtn);

function toggleMenuBtn(){
    if(!showMenu){
        hamburderBtn.classList.add('open');
        showMenu = true;
    }else{
        hamburderBtn.classList.remove('open');
        showMenu = false;
    }
}


console.log(menuBtn);