// Your code goes here
const top = document.querySelector('header');
const logo = document.querySelector(".logo-heading");
const navBar = document.querySelectorAll('.nav-link');
const pic = document.querySelectorAll('img')

// onload------------------------11111
window.onload = function(){
    top.style.backgroundColor = 'teal'
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
        alert('Where are you going?!!!')
    }
})