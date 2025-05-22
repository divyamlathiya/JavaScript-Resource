// Functions in JS.
console.log("Functions in JS.");

// Function Definition / Declaration
/*
1:
function functionName() {
    // Do some work;
}
*/

function myFunction() { // Function Declaration / Definition
    console.log("Divyam Lathiya");
    console.log("Hello JS, from myFunction");
}

// Function Call / Invoke
/*
    functionName();
*/
myFunction(); // Calling function


/*
2:
function functionName(parameter1, parameter2) {  // Parameter --> Input
    // Do some work;
}

// Calling parameterized functions: 
    functionName(arguments);

    * During declaration of the function inside of -->() it's called parameter, and during calling function it's called arguments.
    * Function parameters are like local variables of functions, which has block scope.
*/

function newFunction(msg) { // Inside -->() this it's called parameter(It's called parameter during declaration).
    console.log(msg);
}

newFunction("Hello JS, from newFunction"); // Inside -->() it's called arguments (It's called arguments in calling).

function sum(x, y) {
    // Local variable(x and y)
    console.log(x + y);
}

sum(5, 15);


// Arrow functions --> Compact way to write a function
/*
const functionName = (parameter1, parameter2) => {
        // Do soem work;
}
*/

const arrowSum = (x, y) => {
    console.log("Arrow function:", x + y);
};
arrowSum(5, 20);

let arrowMul = (a, b) => {
    console.log(a * b);
};
arrowMul(5, 10);


// Inbuilt: forEach function --> It's a function that execute for each element in array. --> HOF/HOM
/*
arr.forEach(callBackFunction) --> Callback is a function passed as an argument to another function.
arr.forEach((val) => {
    console.log(val);
    })

    * Higher Order Function / Methods (HOF/HOM) --> It takes other functions as parameter or return.
*/
console.log("forEach function:");
let arr = [1, 2, 3, 4, 5];

arr.forEach(function (number) {
    console.log(number * 2);
})

// Using arrow
let city = ["Pune", "Delhi", "Mumbai"];

city.forEach((val, idx) => {
    console.log(val, idx);
});


// Map --> Creates new array with result of some operation. The value it's callback returns are used from new array
/*
arr.map(callbackfunction(value, index, array))
let newArr = arr.map((val) => {
    return val * 2;
    });
*/
console.log("Map function:");
let nums = [55, 65, 75];

let newArray = nums.map((val) => {
    console.log(val);
    return val;
});

console.log("Using return in map:", newArray);


// Filter --> Creates a new array of elements that give true for a condition / filter.
/*
let newArr = arr.filter((val) => {
    return val %2 === 0;
    });
*/
console.log("Filetr function:")
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenArr = number.filter((val) => {
    return val > 3;
});
console.log(evenArr);


// Reduce --> Performs some operations & reduces the array to single value. It returns that single value.
console.log("Reduce function:");
let numbers = [1, 2, 3, 4];

const output = numbers.reduce((res, curr) => {
    return res + curr;
});
console.log(output); // 10
