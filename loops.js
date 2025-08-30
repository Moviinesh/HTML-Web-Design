// for (var i = 0; i < 1000; i++) {
//     console.log("I love JavaScript")
// }

// var random_number = Math.floor(Math.random() * 10)
// console.log(random_number)

// Create a function that generates a random number between 400 and 600



function generate_Number() {
    var random_number = Math.floor(Math.random() * 600)
    for (var min = 400; random_number < 400; min--) {
        random_number++
    }
    console.log(Math.floor((random_number + (Math.random() * 199))))
}

generate_Number()