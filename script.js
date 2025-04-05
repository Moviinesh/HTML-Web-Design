var myDreamCar = {
    make: "Honda",
    model: "Civic",
    year: 2022,
    color: "red",
    bodyStyle: "Sedan",
    price: 76000,
}

document.getElementById("pricetag").innerHTML = myDreamCar.price;
document.getElementById("modelyear").innerHTML = myDreamCar.year;
document.getElementById("body").style.backgroundColor = myDreamCar.color;
document.getElementById("body").innerHTML = myDreamCar.make + " " + myDreamCar.model;
