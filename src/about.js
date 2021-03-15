const about = () => {
    return (`
    <h3>ABOUT US</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ullam commodi. Nobis distinctio accusamus quos autem<br> similique aliquam tenetur vel sunt atque amet! Laudantium itaque labore et quibusdam qui suscipit!</p>
    
    <h3>ABOUT THIS SITE</h3>
    <p><a href="https://www.theodinproject.com/courses/javascript/lessons/restaurant-page">The Odin Project</a>'
    <p><a href="https://github.com/jasont01/restaurant-page">github repo</a></p>
    <p>Background Photo by <a href="https://unsplash.com/photos/UkudQyyeovs">Alexandra Tran on Unsplash</a></p>
    `)
}

const renderAbout = () => {
    const main = document.getElementById('main');
    main.innerHTML = about();
}

export default renderAbout