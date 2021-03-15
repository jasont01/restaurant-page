import renderMenu from './menu.js'

const home = () => {
    return (`
    <div class="hero-content">
        <h1>Not just appetizers.</h1>
        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti quaerat quia at iusto minima facilis rem, aliquid libero impedit, reprehenderit provident id tempora eaque possimus repellat unde expedita ratione!</p>
        <p class="lead">
            <a href="#" id="menu-cta" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Menu</a>
        </p>
    </div>
    `)
}

const renderHome = () => {
    const main = document.getElementById('main');
    main.innerHTML = home();

    const menuCta = document.getElementById('menu-cta')
    menuCta.addEventListener('click', renderMenu)
}

export default renderHome