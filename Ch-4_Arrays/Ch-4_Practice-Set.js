// Ch-4 Practice Set
console.log("Ch-4 Practice Set.");

// 1. For a given array with marks of students --> [85,97,44,37,76,60] Find the avarage marks of the entire class.
console.log("Q-1");

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (let i of marks) {
    sum += i;
}
console.log(`Average of marks of the entire class is: ${sum / marks.length}`);


// 2. For a given array with prices of 5 items --> [250,645,300,900,50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
console.log("Q-2");

let itemsPrice = [250, 645, 300, 900, 50];
console.log("Price before discount:", itemsPrice);

for (let i = 0; i < itemsPrice.length; i++) {
    let finalPrice = itemsPrice[i] / 10;
    itemsPrice[i] -= finalPrice;
}
console.log("Price after 10% discount:", itemsPrice);


/* 3. Create an array to store companies --> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix".

    a. Remove the first company from the array
    b. Remove Uber & Add Ola in its place
    c. Add Amazon at the end

*/
console.log("Q-3");

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// a:
companies.shift();
console.log("a:", companies);

// b:
companies.splice(1, 1, "Ola");
console.log("b:", companies);

// c:
companies.push("Amazon");
console.log("c:", companies);