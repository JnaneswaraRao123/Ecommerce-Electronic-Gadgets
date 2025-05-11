const products = [
    {
      name: "Wireless Headphones",
      description: "High-quality sound with noise cancellation.",
      price: "₹2999",
      image: "https://via.placeholder.com/200x150"
    },
    {
      name: "Smart Watch",
      description: "Track your fitness and health.",
      price: "₹4999",
      image: "https://via.placeholder.com/200x150"
    },
    {
      name: "Gaming Mouse",
      description: "Precision control for gamers.",
      price: "₹1599",
      image: "https://via.placeholder.com/200x150"
    }
  ];

  // ✅ Render products to the DOM
  const container = document.querySelector(".product-list");

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="desc">${product.description}</p>
      <p><strong>${product.price}</strong></p>
      <a href="#" class="btn">Buy Now</a>
    `;
    container.appendChild(card);
  });