import renderPage from './main.js'
import renderHome from './home.js'
import renderMenu from './menu.js'
import renderAbout from './about.js'
import renderContact from './contact.js'

renderPage()

const homeBtn = document.getElementById('home')
const menuBtn = document.getElementById('menu')
const aboutBtn = document.getElementById('about')
const contactBtn = document.getElementById('contact')

homeBtn.addEventListener('click', renderHome)
menuBtn.addEventListener('click', renderMenu)
aboutBtn.addEventListener('click', renderAbout)
contactBtn.addEventListener('click', renderContact)

renderHome()

// FIXME: navbar indicators