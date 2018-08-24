// BUSINESS LOGIC
function Pizza (size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.priceSet = function() {
  return "$" + this.price.toFixed(2)
}

var cheese = new Pizza ("large", ["cheese"], 5.00);
var pepperoni = new Pizza ("large", ["cheese", "pepperoni"], 6.00);
var meats = new Pizza ("large", ["cheese", "pepperoni", "sausage", "bacon"], 8.00);
var supreme = new Pizza ("large", ["cheese", "pepperoni", "sausage", "bacon", "green peppers", "mushrooms", "olives"], 8.50);

// USER INTERFACE LOGIC
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    $("#review").prepend("<li><span class='display'>" + Pizza.size + "</span></li>");
    $("#review").after("<li><span class='display'>" + Pizza.toppings + "</span></li>");
    $("#review").after("<li><span class='display' id='price'" + Pizza.priceSet() + "</span></li>");
})
})

// console.log(cheese);
// console.log(meats.toppings);
// console.log(pepperoni.price);
// console.log(pepperoni.priceSet());
