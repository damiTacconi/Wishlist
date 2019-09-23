export default class WishList {
  constructor(selector) {
    this.selector = selector;
    this.items = [];
  }

  isItAlreadyAdded(item) {
    return this.items.find(i => i.id === item.id) === undefined ? false : true;
  }
  addItem(item) {
    if (!this.isItAlreadyAdded(item)) {
      this.items = [...this.items, item];
      this.render();
    } else alert("The product has already been added");
  }

  remove(item) {
    this.items = this.items.filter(i => i.id !== item.id);
    this.render();
  }
  increasePriority(index) {
    if (index > 0) {
      const prevItem = this.items[index - 1];
      this.items[index - 1] = this.items[index];
      this.items[index] = prevItem;
      this.render();
    }
  }
  decreasePriority(index) {
    if (index < this.items.length - 1) {
      const nextItem = this.items[index + 1];
      this.items[index + 1] = this.items[index];
      this.items[index] = nextItem;
      this.render();
    }
  }
  render() {
    this.selector.innerHTML = "";
    this.items.forEach((item, index) => {
      const li = document.createElement("LI");
      const removeButton = document.createElement("BUTTON");
      const increasePriorityButton = document.createElement("BUTTON");
      const decreasePriorityButton = document.createElement("BUTTON");

      removeButton.onclick = () => this.remove(item);
      increasePriorityButton.onclick = () => this.increasePriority(index);
      decreasePriorityButton.onclick = () => this.decreasePriority(index);
      removeButton.innerHTML = "-";
      increasePriorityButton.innerHTML = "&#8593;";
      decreasePriorityButton.innerHTML = "&#8595;";

      li.append(document.createTextNode(item.name));
      li.append(document.createTextNode("\u00A0"));
      li.append(removeButton);
      li.append(increasePriorityButton);
      li.append(decreasePriorityButton);

      this.selector.append(li);
    });
  }
}
