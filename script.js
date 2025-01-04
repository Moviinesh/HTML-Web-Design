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
    document.getElementById("thing1").innerHTML = newthing1
    document.getElementById("thing2").innerHTML = newthing2
    document.getElementById("thing3").innerHTML = newthing3
}