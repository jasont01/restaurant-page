const menu = () => {

    let menuItems = [

    { name: 'Ruben',
    description: 'Corned beef, Swiss Cheese, Saurkraut. Served with 1000 Island',
    price: 5.99},

    { name: 'Southwestern',
    description: 'Grilled Chicken, Black Beans Dip. Served with Avocado Ranch',
    price: 5.99},

    { name: 'BBQ',
    description: 'Pulled Pork, Coleslaw. Served with Smokey Ranch',
    price: 5.99},

    { name: 'Roasted Pork',
    description: 'Pork, Cabbage, Carrots. Served with Sweet n Sour',
    price: 5.99},

    { name: 'Roasted Chicken',
    description: 'Chicken, Cabbage, Carrots. Served with Sweet n Sour',
    price: 5.99},

    { name: 'Cheeseburger',
    description: 'Ground Beef, Onions, Cheddar Cheese. Served with Ketchup',
    price: 5.99},

    { name: 'Meatball',
    description: 'Ground Beef & Mozzarella. Served with Marinara',
    price: 5.99},

    { name: 'Crab Rangoon',
    description: 'Crab, Cream Cheese. Served with Sweet n Sour',
    price: 5.99},

    { name: 'Buffalo Chicken',
    description: 'Buffalo Chicken Dip. Served with Ranch',
    price: 5.99},

    { name: 'Mac n Cheees',
    description: 'Mac n Cheese. Served with Ranch',
    price: 5.99},

    { name: 'Avocado',
    description: 'Avocado, Bacon, Pepperjack Cheese. Served with Ranch',
    price: 5.99},

    { name: 'Steak & Cheese',
    description: 'Sliced Steak, Onions, Swiss Cheese. Serverd with Cipotle Mayo',
    price: 5.99},

    { name: 'Chicken Cordon Bleu',
    description: 'Grilled Chicken, Ham, Swiss Cheese. Served with Honey Mustard',
    price: 5.99},

    { name: 'California',
    description: 'Avocado, Sun Dried Tomatoes, Cilantro. Served with Ranch',
    price: 5.99},

    ]

    let listItems = ''
    let menuLeft = ''
    let menuRight = ''

    menuItems.forEach((item, index) => {
        if (index % 2 == 0) {
            menuLeft += `
                <li>
                <b>${item.name}</b><br>
                ${item.description}<br>
                ${item.price}
                </li>
                `
        } else {
            menuRight += `
                <li>
                <b>${item.name}</b><br>
                ${item.description}<br>
                ${item.price}
                </li>
                `
        }
    })

    return (`
    <h3>MENU</h3>
    <div id='menu'>
        <div id='menu-left'>
            <ul>
            ${menuLeft}
            </ul>
        </div>
        <div id='menu-right'>
            <ul>
            ${menuRight}
            </ul>
        </div>
    </div>
    `)
}

const renderMenu = () => {
    const main = document.getElementById('main');
    main.innerHTML = menu();
}

export default renderMenu