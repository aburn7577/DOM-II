// Your code goes here
const top = document.querySelector('.main-navigation')
const navBar = document.querySelectorAll('.nav-link') //get element

navBar.forEach(link => {
    link.addEventListener('mouseover', event => {
        event.target.style.color = "purple"
    })
    link.addEventListener('mouseout', event => {
        event.target.style.color = "black"
    })
})
