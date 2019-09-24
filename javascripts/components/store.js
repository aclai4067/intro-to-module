const bookInfo = {
    price: 24.99,
    title: "Fifty Shades of Chicken",
    image: "./assets/images/book.jpg"
  };

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const addToCartEvent = () => {
    console.log('added to cart');
};

const makeStore = () => {
    const domString = `
        <h2>Our Only Book</h2>
        <p>But it now:</p>
        <h3>$${bookInfo.price}</h3>
        <img src=${bookInfo.image} alt='${bookInfo.title} cover' />
        <button id='cart-button' class='btn btn-danger col-12'>Add to cart</button>
    `;
    printToDom('store-container', domString);
    document.getElementById('cart-button').addEventListener('click', addToCartEvent);
};

export default { makeStore };