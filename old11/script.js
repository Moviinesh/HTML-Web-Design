var printBtn = document.getElementById("printable");
var addBtn = document.getElementById("addIt");

printBtn.addEventListener("click", printView)
addBtn.addEventListener("click", addTheThing)

var myList = []
var myListArea = document.getElementById("wishList")

function addTheThing() {
    var theThing = document.getElementById("iWant");
    addToTheList(theThing);
    resetInput(theThing);
}
function addToTheList(theThingToAdd) {
    if (theThingToAdd.value === "") return;
    console.log(myList);
    myList.push(theThingToAdd.value);
    var newListItem = document.createElement("li");
    newListItem.innerHTML = myList[myList.length - 1];
    myListArea.appendChild(newListItem);
}
function resetInput(inputToReset) {
    inputToReset.value = "";
}

function printView() {
    var listPage = document.getElementById("listPage");
    var formArea = document.getElementById("formArea");

    formArea.style.display = "none";
    listPage.className = "print";

    myListArea.innerHTML = "";
    myList.sort();

    for (var i = 0; i < myList.length; i++) {
        console.log(myList[i]);
        wishList.innerHTML += "<li>" + myList[i] + "</li>";
    }

    window.print();
    formArea.style.display = "block";


}

