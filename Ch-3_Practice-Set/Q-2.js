// Ch-3 Practice Set.
console.log("Ch-3 Practice Set");


// String

// 1. Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.

// eg: user name = “DivyamLathiya” , username should be “@DivyamLathiya13”
console.log("Q-1");

let fullName = prompt("Enter your fullname:");
console.log(fullName);

// let length1 = fullName.length;
let userName = "@" + fullName + fullName.length;

console.log(userName);