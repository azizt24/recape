// const book = {
// title : "a song of ice and fire",
// author : "aziz",
// ISBN : 52156268,
// isCheckOut : false,
// toggleCheckOutStatus :function() {
// this.isCheckOut =!this.isCheckOut 

// }
// }
// book.toggleCheckOutStatus();
// console.log(book.isCheckOut);


const shoppingCart = {
  items: [],
  
  addItem: function(name, price, quantity) {
    const existingItem = this.items.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity += quantity;
    } 
    else {
      const newItem = { name, price, quantity };
      this.items.push(newItem);
    }
  },
  
  removeItem: function(name) {
    this.items = this.items.filter(item => item.name !== name);
  },
  
  calculateTotal: function() {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.quantity;
    }
    return total;
  }
};

 
shoppingCart.addItem("Apple", 1.0, 3);
shoppingCart.addItem("Banana", 0.5, 5);
shoppingCart.addItem("Orange", 0.75, 2);
shoppingCart.removeItem("Banana");


const totalCost = shoppingCart.calculateTotal();
console.log("Total Cost:", totalCost);
console.log("Cart Items:", shoppingCart.items);
