// // You are a programmer who is very playful with the way you write your code.
// // Write a switch statement that accepts days of the week and returns a playful message for each day.
// // Starter code snippet
// let day = prompt("Enter a day of the week (e.g., Monday, Tuesday, etc.):");

// switch (day) {
//     case "Monday":
//         alert("First day of the week.")
//         break;

//     case "Tuesday":
//         alert("Second day of the week.")
//         break;

//     case "Wednesday":
//         alert("Third day of the week.")
//         break;

//     case "Thursday":
//         alert("Forth day of the week.")
//         break;

//     case "Friday":
//         alert("Fifth day of the week.")
//         break;

//     case "Saturday":
//         alert("Favourite day of the week.")
//         break;

//     case "Sunday":
//         alert("Second favourite day of the week.")
//         break;

//     default:
//         alert("Thats not a day!")
//         break;
// }

myDate = new Date();

var day = myDate.getDay();
var date = myDate.getDate();
var year = myDate.getFullYear();
var month = myDate.getMonth();
var minutes = myDate.getMinutes();
var seconds = myDate.getSeconds();
var milliseconds = myDate.getMilliseconds();
var time = myDate.getTime();
var timezone = myDate.getTimezoneOffset();

console.table({
    day,
    date,
    year,
    month,
    minutes,
    seconds,
    milliseconds,
    time,
    timezone
})

// Task Set everything to this date and time
// Thu Jan 21 2001 10:43:21

myDate.setDate(21);
myDate.setMonth(0);
myDate.setFullYear(2001);
myDate.setHours(10);
myDate.setMinutes(43);
myDate.setSeconds(21);

console.log(myDate)