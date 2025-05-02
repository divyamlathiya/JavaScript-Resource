// Conditional statements
console.log("Conditional statements in JS");

// If statement 
let age = 19;
if (age > 18) {
    console.log("Votting passed!");
}

if (age < 18) {
    console.log("Votting failed!");
}

// Example for If:
/*
let mode = "dark";
let color;
if (mode === "dark") {
    color = "black";
}

if (mode === "light") {
    color = "light";
}
console.log(color);
*/


// If-else statement
let marks = 34;
if (marks >= 33) {
    console.log("Pass!");
}
else {
    console.log("Failed");
}


// else-if statement
let Marks = 99;
if (Marks > 80) {
    console.log("Distinction!");
}
else if (Marks >= 33) {
    console.log("Pass!");
}

else {
    console.log("Failed");
}


// Ternary/Conditional operator
let Age = 18;
let Result = Age >= 18 ? "Adult" : "Not Adult";
console.log(Result);


// Switch statement.
let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Entered number is wrong!");
        break;
}