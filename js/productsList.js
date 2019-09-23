export default class ProductsList {
  constructor(selector, products) {
    this.selector = selector;
    this.products = products || [];
  }

  setWishList(wishlist) {
    this.wishlist = wishlist;
  }
  addItem(item) {
    this.products = [...this.products, item];
    this.render();
  }

  render() {
    this.selector.innerHTML = "";
    this.products.forEach(p => {
      const li = document.createElement("LI");
      li.append(document.createTextNode(p.name));
      li.append(document.createTextNode("\u00A0"));
      const button = document.createElement("BUTTON");
      button.onclick = () => {
        this.wishlist.addItem(p);
      };
      button.innerHTML = "Add to Wishlist";
      li.append(button);
      this.selector.append(li);
    });
  }
}
