// Ch-3 Practice Set.
console.log("Ch-3 Practice Set");


// Loops

// 1. Print all even numbers from 0 to 100.
console.log("Q-1");

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// 2. Create a game where you start with any random game number. Ask the user to keepguessing the game number until the user enters correct value.
console.log("Q-2");

let gamNum = 25;

let userNum = prompt("Guess the number: ");
console.log("Chossen number:", userNum);

while (userNum != gamNum) {
    userNum = prompt("You enterd wrong number, Guess again: ")
}

console.log("Congratulations!, You choose right number", userNum, ".");