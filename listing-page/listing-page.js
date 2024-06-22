function showListing() {
  const listing = JSON.parse(localStorage.getItem("listing"));
  if (!listing) {
    document.getElementById("one-item-container").innerHTML =
      "<p>No listing found.</p>";
    return;
  }

  const listingHtml = `
        <img src="${listing.picture}" alt="${listing.title}">
        <h3>${listing.title}</h3>
        <p>$${listing.price}</p>
        <button onclick="addToShoppingCart('${listing.title}', ${listing.price}, '${listing.picture}')" class="btn">Add to Cart</button>
    `;

  document.getElementById("one-item-container").innerHTML = listingHtml;
}

function addToShoppingCart(title, price, picture) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let item = cart.find((item) => item.title === title);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ title, price, picture, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartNum();
}

function updateCartNum() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartNum = cart.reduce((acc, item) => acc + item.quantity, 0);
  document.getElementById("cart-num").innerText = cartNum;
}

window.addEventListener("load", () => {
  showListing();
  updateCartNum();
});
