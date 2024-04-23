const openMenu = document.querySelector('#open-nav')
const navbar = document.querySelector('nav')
const allLinks = document.querySelectorAll('nav a')
const loginLogoutButton = document.querySelector('#login-logout-button')


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

function authenticate() {
    const token = localStorage.getItem('tokenSphynx')
    if(!token){
        loginLogoutButton.innerHTML = 'Entrar'
        loginLogoutButton.classList.add('loggedButton')
        loginLogoutButton.classList.remove('notLoggedButton')
        return
    }
    loginLogoutButton.classList.remove('loggedButton')
    loginLogoutButton.classList.add('notLoggedButton')
    loginLogoutButton.innerHTML = 'Sair'
}

function Logout() {
    const token = localStorage.getItem('tokenSphynx')
    if(token){
        localStorage.removeItem('tokenSphynx')
        localStorage.removeItem('nameSphynx')
        window.location.href = window.location.href
    }
}

window.addEventListener("load", authenticate)
window.addEventListener("load", checkScrollPosition)
window.addEventListener("scroll", checkScrollPosition)
allLinks.forEach(link => link.addEventListener('click', closeMenu))