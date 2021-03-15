const contact = () => {
    return (`
    <h3>CONTACT US</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ullam commodi. Nobis distinctio accusamus quos autem<br> similique aliquam tenetur vel sunt atque amet! Laudantium itaque labore et quibusdam qui suscipit!</p>
    `)
}

const renderContact = () => {
    const main = document.getElementById('main');
    main.innerHTML = contact();
}

export default renderContact