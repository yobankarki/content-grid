let hamBurger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav');   

hamBurger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-toggle');
    hamBurger.classList.toggle('hamburger-toggle');
});

const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let bodyBg= document.querySelector("body");
let bgBtn=document.querySelector(".btn");

bgBtn.addEventListener("click", function (){
    let hexValue = '#';
    for(let i=0; i<6; i++)
    {
        hexValue+= colors[getRandomNumber()];
    }
    bodyBg.style.backgroundColor=hexValue;
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
