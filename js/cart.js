// js/cart.js

// Retrieve cart from localStorage
const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function renderCart() {
  cartContainer.innerHTML = "";
  let total = 0;

  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.textContent = "";
    return;
  }

  cartItems.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    const priceNumber = parseInt(item.price.replace("₹", "").replace(",", ""));

    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-img">
      <div class="cart-details">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p><strong>${item.price}</strong></p>
        <button onclick="removeItem(${index})" class="btn remove-btn">Remove</button>
      </div>
    `;
    cartContainer.appendChild(itemDiv);
    total += priceNumber;
  });

  cartTotal.innerHTML = `<h3>Total: ₹${total}</h3>`;
}

function removeItem(index) {
  cartItems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  renderCart();
}

// Initial render
renderCart();
