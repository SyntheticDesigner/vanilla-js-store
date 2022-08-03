class Cart {
  constructor(cartItems) {
    this.cartItems;
    this.cartElement;
  }
  addCartItem(product) {
    if (!this.cartItems) {
      this.cartItems = [product];
    }
    this.cartItems.push(product);
    console.log(this.cartItems);
  }
  get cartItemArray() {
    return this.cartItems;
  }
}
