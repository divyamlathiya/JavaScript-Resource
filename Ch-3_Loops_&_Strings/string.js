// Strings in JS.
// String is immutable 
console.log("Strings in JS.");

// Create string
let name = "Divyam Lathiya";
let course = 'BCA';


// String length
// Syntax: stringName.length;
console.log("Length:", name.length);


// String Indices
// stringName[postion]
console.log(course[1]); // C


// Template Literals (Special string) We can embed expression in string.
/* String Interpolation:
   `String text ${expression} string text.`
*/

let specialString = `This is a template literals.`;
console.log(specialString);

let obj = {
    item: "Pen",
    price: 10
};

// Display with normal method.
console.log("Cost of", obj.item, "is", obj.price, "rupees.");

// Display using Template Literals. (Easy to write and understand)
console.log(`Cost of ${obj.item} is ${obj.price} rupees.`);


/* ------------------------------------- */

// String Methods 

// UpperCase
// Syntax: str.toUpperCase();
let lowerToCap = "abcd";
console.log("UpperCase:", lowerToCap.toUpperCase());


// LowerCase
// Syntax: str.toLowerCase();
let capToLower = "ABCD";
console.log("LowerCase:", capToLower.toLocaleLowerCase());


// Trim --> Used to remove extra white space for start and end (It ignore to remove space between content).
// Syntax: str.trim();
let str = "     Divya Lathiya          ";
console.log("Trim:", str.trim());


// Slice
// Syntax: str.slice(start, end?)
let newStr = "Slice the string";
console.log("Slice: ", newStr.slice(0, 8)); // Slice th


// Concat (join two strings)
// Syntax: str.concat(other);
let firstName = "Divyam";
let secondName = " Lathiya";
console.log("Concate(Joins two Strings):", firstName.concat(secondName)); // Joins two strings


// Replace
// Syntax: str.replace(searchVal, newVal);
let str1 = "Hello";
console.log("Replace:", str1.replace("H", "y"));


// Visit MDN / W3schools to know more methods.
