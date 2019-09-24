import cart from './cart.js';
import utilities from '../helpers/utilities.js'

const bookInfo = {
    price: 24.99,
    title: "Fifty Shades of Chicken",
    image: "./assets/images/book.jpg"
  };

const addToCartEvent = () => {
    cart.setCart(bookInfo);
    cart.cartToDom();
};

const makeStore = () => {
    const domString = `
        <h2 class='text-center'>Our Only Book</h2>
        <p class='text-center'>But it now:</p>
        <h3 class='text-center'>$${bookInfo.price}</h3>
        <img id='chickenBook' src=${bookInfo.image} alt='${bookInfo.title} cover' />
        <button id='cart-button' class='btn btn-danger col-6 offset-3'>Add to cart</button>
    `;
    utilities.printToDom('store-container', domString);
    document.getElementById('cart-button').addEventListener('click', addToCartEvent);
};

export default { makeStore };