document.getElementById("checkoutForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Basic validation (more can be added)
  const name = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();
  const card = document.getElementById("card").value.trim();

  if (!name || !email || !address || !card) {
    alert("Please fill in all fields.");
    return;
  }

  if (card.length !== 16 || isNaN(card)) {
    alert("Please enter a valid 16-digit card number.");
    return;
  }

  // Simulate placing order
  localStorage.removeItem("cart");
  alert("Thank you for your purchase, " + name + "!");
  window.location.href = "index.html";
});
