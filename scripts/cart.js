class Cart {
  constructor() {
    this.cartItems = [];
    this.cartElement;
  }
  addCartItem(product) {
    if (this.cartItems.length) {
      const filteredArray = this.cartItems.filter(
        (item) => item.id === product.id
      );

      if (filteredArray.length) {
        const index = this.cartItems.indexOf({ id: product.id });
        console.log(index);
      } else {
        this.cartItems.push(product);
      }
    } else {
      this.cartItems.push(product);
    }
    console.log(this.cartItems);
  }
  get cartItemArray() {
    return this.cartItems;
  }
}
