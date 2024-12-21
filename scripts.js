let cart = [];
let cartTotal = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    cartTotal += price;
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalDiv = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>No items in cart</p>';
    } else {
        cartItemsDiv.innerHTML = '';
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `${item.name} - ₹${item.price.toFixed(2)}`;
            cartItemsDiv.appendChild(itemDiv);
        });
    }
    
    cartTotalDiv.innerHTML = `<p>Total: ₹${cartTotal.toFixed(2)}</p>`;
}

