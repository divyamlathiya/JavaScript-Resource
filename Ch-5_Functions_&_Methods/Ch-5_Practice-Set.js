// Ch-5 Practice Set.
console.log("Ch-5 Practice set.");

// 1. Crate a function using the "function" keyword that takes String as an argument & return the number of vowels in the string.
console.log("Q-1");
function countVowels(str) {
    let count = 0;
    for (let i of str) {
        if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
            count++;
        }
    }
    console.log("Total vowels in", str, "is:", count);
}
countVowels("Lathiya Divyam");


// 2. Create arrow function for same task(Q-1).
console.log("Q-2");
const countVow = (str) => {
    let count = 0;
    for (let i of str) {
        if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
            count++;
        }
    }
    console.log("Total vowels in", str, "is:", count);
}
countVow("xyz");


// 3. For a given array of numbers, print the square of each value using the forEach loop.
console.log("Q-3");
let arr = [1, 2, 3, 4, 5];

arr.forEach((number) => {
    console.log("Square of", number, "is:", number * number);
})


// 4. We are given array of marks of students. Filter our of the marks of students that scored 90+.
/*
    a. Take a number n as input from user. Create an array of numbers from 1 to n.
    b. Use the reduce method to calculate sum of all numbers in the array.
    c. Use the reduce method to calculate product of all numbers in the array.
*/
console.log("Q-4");
let marks = [97, 64, 45, 55, 78, 89, 96, 95];

let toppers = marks.filter((val) => {
    return val > 90;
});
console.log(toppers);


// a:
let n = prompt("enter a number:");

let arr1 = [];

for (let i = 1; i <= n; i++) {
    arr1[i - 1] = i;
}
console.log("a:", arr1);


// b:
let sum = arr1.reduce((res, curr) => {
    return res + curr;
});
console.log("b:", sum);


// c:
console.log("c:");

let factorial = arr1.reduce((res, curr) => {
    return res * curr;
});
console.log("Factorial:", factorial);
