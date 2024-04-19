const openMenu = document.querySelector('#open-nav')
const navbar = document.querySelector('nav')
const animatedDiv = document.querySelector('#hidden-div')
const heroButton = document.querySelector('#hover-button')


function closeMenu () {
    openMenu.checked = false
}

function checkScrollPosition() {
    if(document.documentElement.scrollTop === 0){
        navbar.style.boxShadow = "0 0 0 0 transparent"
    } else{
        navbar.style.boxShadow = "0 0.1em 1.5em 0 #826fff65"
    }
}

window.addEventListener("load", checkScrollPosition)
window.addEventListener("scroll", checkScrollPosition)


heroButton.addEventListener("mouseenter", function(e) {
    animatedDiv.style.left = e.clientX + "px" 
    animatedDiv.style.top = e.clientY + "px" 
    console.log(e.clientX, e.clientY)
})