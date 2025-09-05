// for (var i = 0; i < 1000; i++) {
//     console.log("I love JavaScript")
// }

// var random_number = Math.floor(Math.random() * 10)
// console.log(random_number)

// Create a function that generates a random number between 400 and 600



function generate_Number() {
    var random_number = 400 + Math.floor(Math.random() * 200)
    console.log(random_number)
}

generate_Number()