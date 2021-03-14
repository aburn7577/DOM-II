// Your code goes here
const top = document.querySelector('header');
const logo = document.querySelector(".logo-heading");
const navBar = document.querySelectorAll('.nav-link');
const newMainPic = document.querySelector('.intro img')
const image = document.querySelector('.content-destination img')
const par = document.querySelectorAll('p')
const body = document.querySelector('body')
const button = document.querySelectorAll('.btn')

// onload------------------------11111
window.onload = function(){
    top.style.backgroundColor = 'teal'
    body.style.backgroundColor= 'purple'
}


        // nav bar links
// mouseover--------------------22222
// mouseout---------------------33333
navBar.forEach(link => {
    link.addEventListener('mouseover', event => {
        event.target.style.color = "limegreen";
    })
    link.addEventListener('mouseout', event => {
        event.target.style.color = "black";
    })
})


// header bar click to change body
// click-------------------------44444
top.addEventListener('click', () => {
    const color = top.style.backgroundColor;
     if (color === 'maroon'){
         top.style.backgroundColor = 'pink';
     }
     else {
         top.style.backgroundColor = 'maroon';
     }
});

// keydown------------------------55555
document.addEventListener('keydown', event =>{
    if (event.key === "Escape"){
        alert('Where are you going?!!!');
    }
})

// doubleclick--------------------66666
newMainPic.addEventListener('dblclick', () =>{
    newMainPic.src = 'https://www.allianztravelinsurance.com/v_1557948389077/media/travel/planning/top-reasons-to-travel-by-bus.jpg'
})

// wheel--------------------------77777
function zoom(event){
    event.preventDefault();
    scale += event.deltaY *-0.01;
    scale = Math.min(Math.max(.225, scale), 4);
    image.style.transform =`scale(${scale})`
}
let scale = 1;

image.onwheel = zoom;

// resize-------------------------88888
// scroll------------------------99999
par.forEach(element =>{
    window.addEventListener('resize', ()=>{
        element.style.backgroundColor = '#B0BF1A'
    })
    window.addEventListener('scroll', ()=>{
        element.style.fontFamily = 'Indie Flower';
    })
})

// focus--------------------------1010101010
button.forEach(words => {
    window.addEventListener('focus', () =>{
        words.style.transform = 'translateY(8rem)';
    })
})

navBar.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
    })
})