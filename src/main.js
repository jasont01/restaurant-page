const navBar = () => {
    return (`
    <header class="mb-auto p-3">
        <div>
            <h3 class="float-md-start mb-0">Eggroll Restaurant</h3>
            <nav class="nav nav-masthead justify-content-center float-md-end px-5">
                <a id="home" class="nav-link active" aria-current="page" href="#">Home</a>
                <a id="menu" class="nav-link" href="#">Menu</a>
                <a id="about" class="nav-link" href="#">About</a>
                <a id="contact" class="nav-link" href="#">Contact</a>
            </nav>
        </div>
    </header>
    `)
}

const main = () => {
    return (`
    <main id='main' class="row align-items-center justify-content-center px-3 mt"></main>
    `)
}

const footer = () => {
    return (`
    <footer class="mt-auto text-white-50 p-3">
    <p>&copy2021 <a href="#" class="text-white">Eggroll Restaurant</a></p>
</footer>
    `)
}

const renderPage = () => {
    const content = document.getElementById('content');
    content.innerHTML = navBar() + main() + footer();
}

export default renderPage 