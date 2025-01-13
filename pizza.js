var pizzaQuantity
var pizzaType
var deliverCity
var birthDay
var theText

document.getElementById("numPizzas").addEventListener("change", numChange)
document.getElementById("typePizza").addEventListener("change", typeChange)
document.getElementById("deliveryCity").addEventListener("change", cityChange)
document.getElementById("birthday").addEventListener("change", birthdayChange)
document.getElementById("placeOrderBtn").addEventListener("click", placeOrder)


function numChange() {
    pizzaQuantity = document.getElementById("numPizzas").value
    console.log("You have ordered " + pizzaQuantity + " pizzas.");
}

function typeChange(){
    pizzaType = document.getElementById("typePizza").value;
    console.log("Your pizza type is " + pizzaType +".");
}

function cityChange(){
    deliverCity = document.getElementById("deliveryCity").value;
    console.log("Your delivery city is " + deliverCity +".");
}

function birthdayChange(){
    birthDay = document.getElementById("birthday").value;
    if (birthDay === "yes")
        console.log("You have a birthday discount!")

    if (birthDay === "no")
        console.log("You don't have a birthday discount.")

}

function placeOrder(){
    theText = ("Your total will be $" +8*pizzaQuantity+".")
    document.getElementById("displayTotal").innerHTML = theText
}

