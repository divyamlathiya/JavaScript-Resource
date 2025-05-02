// Variables in JS.
console.log("Variables in JS");

// It print/display this console.log, in the browser's console section.
console.log("Variables in JS.");

name = "Divyam Lathiya";
console.log(name);

mark = 24;
MARK = 25;  // JS is case sensitive; mark & MARK is different
console.log(mark);
console.log(MARK);

x = null;
console.log(x);

let y; //Undefined
console.log(y);

isFollow = true;
console.log(isFollow);

// Letters(a-z A-Z), Digit(0-100), Underscore(_) and $ is allowd --> (Not even space( ))
a1_$ = 12;
console.log(a1_$);

// Only Letters, Underscore and $ should be 1st character of variable.
// New, _New, $new --> True || 1New --> Through error

// Reserved words(Keywords) can't be variables.


// var: Can be re-declared & updated.
var car = 12;
var car = 13;
console.log(car);


// let: Cannot be re-declared but it can be updated. --> Modern way to declare variable.
let fullName = "Divyam Lathiya";
let age = 19;
console.log(fullName, age);


// const: Cannot be re-declared $ updated.
const PI = 3.14;

// It will through error, because const cannot be changed.
// PI  = 22;
console.log(PI);


// var: Can be re-declared & updated.
// let: Cannot be re-declared but it can be updated. --> Modern way to declare variable.
// const: Cannot be re-declared $ updated.