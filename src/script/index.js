const openMenu = document.querySelector('#open-nav')
const navbar = document.querySelector('nav')
const allLinks = document.querySelectorAll('nav a')


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
allLinks.forEach(link => link.addEventListener('click', closeMenu))