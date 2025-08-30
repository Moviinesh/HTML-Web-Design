var pizzaQuantity = 0;
var pizzaType = 0;
var deliverCity = "Anytown";
var birthDay = 0;
var theText = 0;
var pizzaPrice = 0,
    deliveryPrice = 0,
    birthdayDiscount = 0,
    pizzaTotal = 0;

document.getElementById("numPizzas").addEventListener("change", numChange);
document.getElementById("typePizza").addEventListener("change", typeChange);
document.getElementById("deliveryCity").addEventListener("change", cityChange);
document.getElementById("birthday").addEventListener("change", birthdayChange);
document.getElementById("placeOrderBtn").addEventListener("click", placeOrder);

function numChange() {
    pizzaQuantity = document.getElementById("numPizzas").value;
    console.log(pizzaQuantity);
}

function typeChange() {
    pizzaType = document.getElementById("typePizza").value;
    console.log("Your pizza type is " + pizzaType + ".");
    // cheese = 8, pepperoni = 10, supreme =12
    if (pizzaType === "cheese") {
        pizzaPrice = 8;
        console.log("8");
    } else if (pizzaType === "pepperoni") {
        pizzaPrice = 10;
        console.log("10");
    } else if (pizzaType === "supreme") {
        pizzaPrice = 12;
        console.log("12");
    } else {
        pizzaPrice = 0;
        console.log("nothing");
    }
}

function cityChange() {
    deliverCity = document.getElementById("deliveryCity").value;
    // Anytown = 0, Sacramento = 5, Beverly Hills = 10
    if (deliverCity === "Sacramento") {
        deliveryPrice = 5;
    } else if (deliverCity === "Beverly Hills") {
        deliveryPrice = 10;
    } else {
        deliveryPrice = 0;
    }
}

function birthdayChange() {
    birthDay = document.getElementById("birthday").value;
    // if it is the user's birthday, then give them 10% discount
    if (birthDay === "yes") {
        birthdayDiscount = 0.1;
    } else {
        birthdayDiscount = 0;
    }
}

function placeOrder() {
    pizzaTotal =
        pizzaQuantity * pizzaPrice * (1 - birthdayDiscount) + deliveryPrice;
    theText = `<p>You bought ${pizzaQuantity} ${pizzaType} pizzas at RM ${pizzaPrice} per pizza.</p>
    <p>Your delivery city is ${deliverCity} and your delivery price is RM ${deliveryPrice}.</p>
    <p>Your birthday discount is ${birthdayDiscount * 100}%.</p>
    <p>Your total is RM ${pizzaTotal}</p>`;
    document.getElementById("displayTotal").innerHTML = theText;

    console.table({
        "Pizza Quantity": pizzaQuantity,
        "Pizza Type": pizzaType || "Not selected",
        "Delivery City": deliverCity || "Not selected",
        "Pizza Price": pizzaPrice,
        "Delivery Price": deliveryPrice,
        "Birthday Discount (Percentage)": birthdayDiscount * 100 + "%",
        "Total Amount": pizzaTotal,
    });
}
