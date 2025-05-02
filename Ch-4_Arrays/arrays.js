// Arrays in JS
// Array is mutable.
console.log("Arrays in JS.");


// Create an Array
let marks = [25, 38, 34, 35, 44];
console.log(marks);
console.log(marks.length); // Return the number of array elements

let names = ["Kohli", "Pandya", "Rahul", "Rohit", "Gill", "Jaiswal"];
console.log(names);


// Array indices
names[0] = "Virat Kohli"; // Change the value of names[0], Kohli to Virat Kohli.
console.log(names[0]); // Prints the array index 0.


// Looping over an Array
console.log("Looping over an Array:");

// Through for loop
console.log("Through for loop:");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Through for-of loop
console.log("Through for-of loop:");
for (let i of marks) {
    console.log(i);
}


// Array methods
let foodItems = ["Potato", "Apple", "Litchi", "Tomato"];

// Push(); --> Add items in the end
console.log("push():");
foodItems.push("New Pushed item");
console.log(foodItems);


// Pop(); --> Delete element from end & return
console.log("pop():");
foodItems.pop();
console.log(foodItems);


// toString() --> Converts array to string
console.log("In normal method:");
console.log(foodItems);
console.log("toString():");
console.log(foodItems.toString());


// Concat(); --> Joins multiple arrays & returns
console.log("Concat(): --> Joins two arrays");
let marvelHeroes = ["SpiderMan", "Thor", "Hulk"];
let dcHeroes = ["Superman", "Batman"];

console.log(marvelHeroes.concat(dcHeroes));

// Unshift(); --> Add elements in start --> Works like push(); method.
console.log("Unshift();")
marvelHeroes.unshift("CaptionAmerica");
console.log(marvelHeroes);


// Shift(); --> Delete element form start --> Works like pop(); method.
console.log("Shift();");
marvelHeroes.shift();
console.log(marvelHeroes);


// Slice(); --> Returns a piece of the array
// Syntax: slice(startIndex, endIndex);
console.log("Slice();");
console.log(marvelHeroes.slice(0, 2));


// Splice(); --> Chnage in original array(like add, remove, replace).
// Syntax: splice(startIndex, deleteCount, newElement);
console.log("Splice():");
let arr = [101, 102, 103, 104];

// Add elements
arr.splice(2, 0, 109);
console.log("Add elements:", arr);

// Delete elements
arr.splice(3, 1);
console.log("Delete elements:", arr);

// Replace elements
arr.splice(3, 1, 110);
console.log("Replace elements:", arr);


// Inbuilt: forEach function --> It's a function that execute for each element in array. --> HOF/HOM
/*
arr.forEach(callBackFunction) --> Callback is a function passed as an argument to another function.
arr.forEach((val) => {
    console.log(val);
    })

    * Higher Order Function / Methods (HOF/HOM) --> It takes other functions as parameter or return.
*/
console.log("forEach function:");
let num = [1, 2, 3, 4, 5];

num.forEach(function (number) {
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
console.log("Filetr function:");
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