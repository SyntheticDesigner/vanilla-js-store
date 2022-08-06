// const cart = JSON.parse(sessionStorage.getItem("cart"));
// console.log(JSON.parse(cart));

const cartList = document.getElementById("cart-item-list");

const renderCart = () => {
  for (let index = 0; index < currentUserCart.cartItemArray.length; index++) {
    // console.log(cart[index]);
    let itemData = currentUserCart.cartItemArray[index];

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

let subTotalElement = document.getElementById("sub-total");
let totalElement = document.getElementById("total");
let taxElement = document.getElementById("total-tax");

const renderTotals = () => {
  let subTotal = 0;
  let total = 0;
  let tax = 0;
  //loop through cart
  currentUserCart.cartItemArray.forEach((cartItem) => {
    //add all totals together
    subTotal += cartItem.total;
  });
  tax = subTotal * 0.03;
  total = subTotal + tax;
  //render them to the appropriate elements
  subTotalElement.innerHTML = subTotal;
  totalElement.innerHTML = total;
  taxElement.innerHTML = tax;
};

renderTotals();
