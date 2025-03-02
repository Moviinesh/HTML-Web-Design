var theTitle;
var theName;
var theDescrpiton;
var theThings;
var newthing1;
var newthing2;
var newthing3;

document.getElementById("changeTitle").onclick = titleChange
document.getElementById("changeName").onclick = nameChangeFunction
document.getElementById("changeAboutMe").onclick = aboutMeChange
document.getElementById("changeThings").onclick = thingsChange


function titleChange(){
    theTitle = prompt("What is your new title? ")
    document.getElementById("pageTitle").innerHTML = theTitle
}

function nameChangeFunction(){
    theName = prompt("What is your new name? ")
    document.getElementById("myName").innerHTML = theName
}

function aboutMeChange(){
    theDescrpiton = prompt("What is your new About Me? ")
    document.getElementById("aboutMe").innerHTML = theDescrpiton
}

function thingsChange(){
    newthing1 = prompt("Favourite thing 1: ")
    newthing2 = prompt("Favourite thing 2: ")
    newthing3 = prompt("Favourite thing 3:")
    itemsChange("thing1", newthing1)
    itemsChange("thing2", newthing2)
    itemsChange("thing3", newthing3)
}

function itemsChange(itemId, newItem){
    document.getElementById(itemId).innerHTML = newItem;
}