class Cart {
  constructor() {
    this.cartItems = [];
    this.cartElement;
    this.count = 0;
  }
  addCartItem(product) {
    let existingItems = this.cartItems.filter(
      (item) => item.productId === product.productId
    );
    if (existingItems.length) {
      let index = this.cartItems.indexOf(existingItems[0]);
      this.cartItems[index].addOne();
    } else {
      this.cartItems.push(product);
    }
    console.log(this)
  }
  get cartItemArray() {
    return this.cartItems;
  }
}
