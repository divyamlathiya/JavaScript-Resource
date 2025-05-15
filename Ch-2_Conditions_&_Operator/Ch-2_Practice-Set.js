// Ch-2 Practice Set.
console.log("Ch-2 Practice Set");

// 1. Get user to input a number using prompt(“Enter a number:”). Check if the number isa multiple of 5 or not.
console.log("Q-1");

let num = prompt("Enter an number: ");
if (num % 5 === 0) {
    console.log(num, "is multiple of 5");
}
else {
    console.log(num, "is NOT multiple of 5");
}


// 2. Write a code which can give grades to students according to their scores:
console.log("Q-2");

let marks = 75;
if (marks <= 100 && marks >= 80) {
    console.log("A");
}
else if (marks <= 89 && marks >= 70) {
    console.log("B");
}
else if (marks <= 69 && marks >= 60) {
    console.log("C");
}
else if (marks <= 59 && marks >= 50) {
    console.log("D");
}
else {
    console.log("F");
}


// let marks = 69;
// if (marks >= 90 && marks <= 100) {
//     console.log("A");
// }
// else if (marks >= 70 && marks < 89) {
//     console.log("B");
// }
// else if (marks >= 60 && marks < 69) {
//     console.log("C");
// }
// else if (marks >= 59 && marks < 50) {
//     console.log("D");
// }
// else if (marks >= 0 && marks < 49) {
//     console.log("F");
// }
