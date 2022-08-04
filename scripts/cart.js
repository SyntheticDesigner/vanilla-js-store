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
        const index = this.cartItems.indexOf(filteredArray[0]);
        //get the index from the cartItems that matches the filteredItem
        this.cartItems[index].addOne();
        //use the index to access the product in the carItems and the addOne method for that product
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
