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
    sessionStorage.setItem("cart", JSON.stringify(this));
    console.log(this.cartItems);
  }
  initializeCart(cart) {
    if (cart.cartItems) {
      //get all the cartItems
      cart.cartItems.forEach((item) => {
        //convert them to products
        const { id, name, description, price, image, quantity } = item;
        //add them to the current state
        this.addCartItem(
          new Product(id, name, description, price, image, quantity)
        );
      });
    }
    if (cart.cartElement) {
      this.cartElement = cart.cartElement;
    }
  }
  get cartItemArray() {
    return this.cartItems;
  }
}
