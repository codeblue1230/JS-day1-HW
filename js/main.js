//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches" */

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(a_string, arr) {
    let test_array = []
    for (const name of arr) {
        if (a_string.includes(name)) {
            console.log("Matched ", name)
            test_array.push(name)
        };
    };
    if (test_array.length == 0) {
        console.log("No Matches")
    };
};

//Call method here with parameters

findWords(dog_string, dog_names)
findWords(dog_string, ["HAS","PuRple","dog"]) /* This function call is testing to see if "No Matches" gets logged*/


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let my_list = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr.splice(i, 1, "even index")
        };
    };
    console.log(arr)
};

replaceEvens(my_list)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// Codewars Problems

// Question 1
// https://www.codewars.com/kata/50654ddff44f800200000004/javascript
// This code does not execute properly. Try to figure out why.
/*
function multiply(a, b) {
    a * b
}
*/

function multiply(a, b) {
    return a * b
};

console.log(multiply(4, 4))

// Question 2
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
/*
Create a function that takes an integer as an argument and returns "Even" for 
even numbers or "Odd" for odd numbers.
*/

function evenOrOdd(number) {
    if (number % 2 == 0) {
        return "Even"
    } else {
        return "Odd"
    };
};

console.log(evenOrOdd(8))
console.log(evenOrOdd(9))