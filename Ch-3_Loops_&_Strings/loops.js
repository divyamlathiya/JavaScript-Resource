// Loops in JS.
console.log("Loops in JS.");

// For loop 
for (let i = 0; i < 5; i++) {
    console.log("Divyam lathiya");
}

/*
How it works.

Declaration; Conditions; Increment/Decrement
let i = 0; i < 5; i++
first i is 0; i(0) is less than 5 --> execute --> increment
now i is 1; i(1) is less than 5 --> execute --> increment
now i is 2; i(2) is less than 5 --> execute --> increment
now i is 3; i(3) is less than 5 --> execute -> increment
now i is 4; i(4) is less than 5 --> execute --> increment
now i is 5; i(5) is not less than 5 -> Loop end here.
*/

let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log("Sum Is:", sum);


// While loop
console.log("While loop");
let j = 1;
while (j <= 5) {
    console.log("j: ", j);
    j++;
}


// Do-While loop
console.log("Do-While loop");
let k = 1;
do {
    console.log("k:", k);
    k++;
} while (k <= 5);


// For-of loop
console.log("For-of loop");

let str = "Divyam Lathiya";
for (let i of str) {
    console.log("i:", i);
}


// For-in loop
console.log("For-in loop");
let student = {
    name: "Divyam Lathiya",
    Course: "BCA",
    SGPA: 7.73
};

for (let i in student) {
    console.log(i, ":", student[i]);
}