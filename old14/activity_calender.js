var todaysDate = document.getElementById("todaysdate")
var todoButton = document.getElementById("whattodo")

var d = new Date;

todoButton.addEventListener("click", displayActivity)

displayDate();

function displayDate() {
    todaysDate.innerHTML = d.toDateString();
}

function displayActivity() {
    var dayOfTheWeek = d.getDay()
    console.log(dayOfTheWeek)
    var youShould

    switch (dayOfTheWeek) {
        case 0:
            youShould = "Take a Rest You Earned It."
            break;

        case 1:
            youShould = "Go Do Some Workouts."
            break;

        case 2:
            youShould = "Buy a Nice Drink."
            break;

        case 3:
            youShould = "Do your Homeworks and Revision."
            break;

        case 4:
            youShould = "Play a lot of Sports."
            break;

        case 5:
            youShould = "Go Out And Eat Dinner"
            break;

        case 6:
            youShould = "Take a Rest You Earned It"
            break;

        default:
            youShould = "Please Debug your Application and Try Again."
            break;
    }

    document.getElementById("thingToDo").innerHTML = youShould
}
