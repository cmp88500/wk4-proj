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


    var input = $("#toppings option:selected").val();
      console.log(inputToppings)
      if (input === "pepperoni") {
        var inputSize = pepperoni.size
        var inputToppings = pepperoni.toppings;
        var inputPrice = pepperoni.priceSet();
    } if (input === "meats") {
        var inputSize = meats.size
        var inputToppings = meats.toppings;
        var inputPrice = meats.priceSet();
    } if (input === "cheese") {
        var inputSize = cheese.size
        var inputToppings = cheese.toppings;
        var inputPrice = cheese.priceSet();
    } if (input === "supreme") {
        var inputSize = supreme.size
        var inputToppings = supreme.toppings;
        var inputPrice = supreme.priceSet();

    } if (input === "custom") {
      var customToppings = []
      $("input:checkbox[name=topping]:checked").each(function() {
        var check = $(this).val();
        $("#review").append("<li><span class='review'>" + check + "</span></li>")
      })
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
