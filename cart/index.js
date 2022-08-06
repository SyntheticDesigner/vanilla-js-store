const cart = JSON.parse(sessionStorage.getItem("cart"));
// console.log(JSON.parse(cart));

const cartList = document.getElementById("cart-item-list");

const renderCart = () => {
  for (let index = 0; index < cart.length; index++) {
    // console.log(cart[index]);
    let itemData = cart[index];

    let cartItem = document.createElement("li");
    let title = document.createElement("h2");
    let price = document.createElement("bold");
    let qty = document.createElement("p");
    let img = document.createElement("img");

    title.innerHTML = itemData.name;
    price.innerHTML = itemData.price;
    qty.innerHTML = itemData.quantity;
    img.src = itemData.image;
    img.alt = itemData.name;

    cartItem.classList.add("cart-item");

    cartItem.appendChild(img);
    cartItem.appendChild(title);
    cartItem.appendChild(qty);
    cartItem.appendChild(price);

    cartList.appendChild(cartItem);
  }
};

renderCart();

let subTotal = document.getElementById("sub-total");
let total = document.getElementById("total");
let tax = document.getElementById("total-tax");

const renderTotals = () => {
  //loop through cart
  cart.forEach((cartItem) => {
    //get total for each item
    // let itemTotal = cartItem.calculateTotal();
    console.log(cartItem);
  });
  //add all totals together
  //render them to the appropriate elements
};

renderTotals();
