const products = [
  {
    id: 1,
    name: "Product 1",
    price: 29.99,
    image: "assets/images/product1.jpg"
  },
  {
    id: 2,
    name: "Product 2",
    price: 39.99,
    image: "assets/images/product2.jpg"
  },
  {
    id: 3,
    name: "Product 3",
    price: 24.99,
    image: "assets/images/product3.jpg"
  }
];

function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})" class="btn">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: id, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart!");
}

window.onload = displayProducts;
