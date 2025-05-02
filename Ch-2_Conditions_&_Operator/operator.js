// Operators in JS.
console.log("Operators in JS");


// Arithmetic operator --> +, -, *, /, %, **.
console.log("Arithmetic operators");
let a = 10;
let b = 20;

console.log("a: ", + a, "b: ", + b);

console.log("a + b = ", a + b);

console.log("a - b = ", a - b);

console.log("a * b = ", a * b);

console.log("a / b = ", a / b);

console.log("a % b = ", a % b);

console.log("a ** b = ", a ** b); //10^20--> 10 power 20. 


/* ----------------------- */


// Unary operator
console.log("Unary operators");

a++; // Post increament
console.log("a++ = ", a);

b--; // Post decreament
console.log("b-- = ", b);

console.log("++a = ", ++a); // Pre increament

console.log("--b = ", --b); // Pre decreament


/* ----------------------- */


// Assignment operators --> +=, -=, *=, /= %=. **=.
console.log("Assignment opertors");
let c = 20;
let d = 30;

console.log("c: ", + c, "d: ", + d);

c += 5; // c = c + 5; --> 15
console.log("c += 5", c);

d -= 5; // d = d - 5; --> 15
console.log("d += 5", d);

// *=, /=, %=, **= --> All operators used as assignment operator.


/* ----------------------- */


// Comparison operators --> ==, !=, ===, !==, <, <=, >, >=.
console.log("Comparison operators");
let e = 20; // Number
let f = 30; // Number
let g = "30"; // String

console.log("e: ", + e, "f: ", + f, "g: ", + g);

console.log("20 == 30", e == f); // 20 is equal to 30

console.log("20 != 30", e != f); // 20 is not equal to 30

console.log("g === f", g === f); // === is strict, string and number comparison is always false.

console.log("g !== f", g !== f); // g is equal to f

console.log("e > f", e > f); // e is greater than f

console.log("e < f", e < f); // e is less than f

// <=, >=.


/* ----------------------- */


// Logical operators --> &&, ||, !.
// && --> If both conditions true than it returns true.
// || --> If any one condition true than it returns true.
// ! -->  It change true to false and false to true.
console.log("Logical operator");
let h = 20;
let i = 40;

console.log("h: ", + h, "i: ", + i);

let cond1 = h < i; // True
let cond2 = h <= i; // True

console.log("cond1 && cond2 = ", cond1 && cond2);

console.log("cond1 || cond2 = ", cond1 || cond2);

console.log("!cond1 = ", !cond1);