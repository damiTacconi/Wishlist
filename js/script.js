import Product from "./product.js";
import ProductList from "./productsList.js";
import WishList from "./wishlist.js";

const productList = new ProductList(document.getElementById("products"));
const wishlist = new WishList(document.getElementById("wishlist"));

function addItems(list, count = 1) {
  for (let i = 1; i <= count; i++) list.addItem(new Product(i, `Product ${i}`));
}

productList.setWishList(wishlist);

addItems(productList, 5);
