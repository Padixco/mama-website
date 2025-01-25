let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    alert(`${product} added to cart!`);
}

function removeItem(product) {
    cart = cart.filter(item => item.product !== product);
    alert(`${product} removed from cart.`);
}

function checkout() {
    alert("Proceeding to checkout!");
}
