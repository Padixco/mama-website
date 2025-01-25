let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price, quantity: 1 });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add("cart-item");
        div.innerHTML = `
            ${item.productName} - ₦${item.price} 
            <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)" />
            <button onclick="removeItem(${index})">Remove</button>
        `;
        cartItems.appendChild(div);
        total += item.price * item.quantity;
    });

    totalPriceElement.textContent = total;
}

function updateQuantity(index, quantity) {
    cart[index].quantity = parseInt(quantity, 10);
    updateCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}

function checkout() {
    alert("Proceeding to checkout!");
}
