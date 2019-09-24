import utilities from '../helpers/utilities.js'

const cart = [];

const setCart = (book) => {
    cart.push(book);
};

const cartToDom = () => {
    let domstring = `
        <h2 class='text-center'>My cart</h2>
        <div class='d-flex flex-wrap text-center'>
    `;
    for (let i = 0; i < cart.length; i++){
        domstring+=`
        <div class='card col-4'>
        <img src=${cart[i].image} class="card-img-top" alt="${cart[i].title}">
        <div class="card-body">
          <h5 class="card-title">${cart[i].title}</h5>
          <p class="card-text">$${cart[i].price}</p>
        </div>
      </div>
        `
    }
    domstring+=`</div>`
    utilities.printToDom('cart-container', domstring);
};

export default { setCart, cartToDom };