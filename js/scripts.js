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
var custom = new Pizza ("large", ["cheese"], 5.00);

console.log(pepperoni.toppings)
// USER INTERFACE LOGIC
$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
    $("#review").empty();


    var inputToppings = $("#toppings option:selected").val();
      console.log(inputToppings)


      if (inputToppings === "pepperoni") {
        var inputSize = pepperoni.size
        var inputPizza = pepperoni.toppings;
        var inputPrice = pepperoni.priceSet();
    } if (inputToppings === "meats") {
        var inputSize = meats.size
        var inputPizza = meats.toppings;
        var inputPrice = meats.priceSet();
    } if (inputToppings === "cheese") {
        var inputSize = cheese.size
        var inputPizza = cheese.toppings;
        var inputPrice = cheese.priceSet();
    } if (inputToppings === "supreme") {
        var inputSize = supreme.size
        var inputPizza = supreme.toppings;
        var inputPrice = supreme.priceSet();
    }
var inputPizza = new Pizza(inputSize, inputToppings, inputPrice);
    console.log(inputPizza);



    $("#review").append("<li><span class='review'>" + inputPizza.size + "</span></li>");
    $("#review").append("<li><span class='review'>" + inputPizza.toppings + "</span></li>");
    $("#review").append("<li><span class='review' id='price'>" + inputPizza.price + "</span></li>");

    // $(".review").
});
});

// console.log(cheese);
// console.log(meats.toppings);
// console.log(pepperoni.price);
// console.log(pepperoni.priceSet());
