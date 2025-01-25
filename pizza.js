var pizzaQuantity;
var pizzaType;
var deliverCity;
var birthDay;
var theText;
var pizzaPrice, deliveryPrice, birthdayDiscount;

document.getElementById("numPizzas").addEventListener("change", numChange);
document.getElementById("typePizza").addEventListener("change", typeChange);
document.getElementById("deliveryCity").addEventListener("change", cityChange);
document.getElementById("birthday").addEventListener("change", birthdayChange);
document.getElementById("placeOrderBtn").addEventListener("click", placeOrder);

function numChange() {
  pizzaQuantity = document.getElementById("numPizzas").value;
  console.log("You have ordered " + pizzaQuantity + " pizzas.");
}

function typeChange() {
  pizzaType = document.getElementById("typePizza").value;
  console.log("Your pizza type is " + pizzaType + ".");
  // cheese = 8, pepperoni = 10, supreme =12
  if (pizzaType === "cheese") {
    pizzaPrice = 8;
  } else if (pizzaType === "pepperoni") {
    pizzaPrice = 10;
  } else if (pizzaType === "supreme") {
    pizzaPrice = 12;
  }
}

function cityChange() {
  deliverCity = document.getElementById("deliveryCity").value;
  console.log("Your delivery city is " + deliverCity + ".");

  // Anytown = 0, Sacramento = 5, Beverly Hills = 10
}

function birthdayChange() {
  birthDay = document.getElementById("birthday").value;
  if (birthDay === "yes") console.log("You have a birthday discount!");

  if (birthDay === "no") console.log("You don't have a birthday discount.");

  // if it is the user's birthday, then give them 10% discount
}

function placeOrder() {
  theText = "Your total will be $" + 8 * pizzaQuantity + ".";
  document.getElementById("displayTotal").innerHTML = theText;
}
