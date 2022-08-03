//make an array to store our products
//currentUserCart.addCartItem()
function renderBestSellers() {
  const listElement = document.getElementById("bs-product-list");
  products.forEach((product) => {
    const { id, name, price, description, image } = product;
    //destructure
    let _product = new Product(
      id,
      name,
      description,
      price,
      image,
    );
    let _element = _product.productPreviewElement;
    listElement.appendChild(_element);
  });
  //this is where we are going to pick up
}

renderBestSellers();
let test = new Product("test");
console.log(test);
