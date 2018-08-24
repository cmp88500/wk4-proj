function Pizza (size, toppings, crust) {
  this.size = size;
  this.toppings = toppings;
  this.crust = crust;
}

var cheese = new Pizza ("large", ["cheese"], "pan");
var pepperoni = new Pizza ("large", ["cheese", "pepperoni"], "pan");
var meats = new Pizza ("large", ["cheese", "pepperoni", "sausage", "bacon"], "pan");
var supreme = new Pizza ("large", ["cheese", "pepperoni", "sausage", "bacon", "green peppers", "mushrooms", "olives"], "pan");

console.log(cheese);
console.log(meats.toppings);
