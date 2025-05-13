// Ch-6 Practice Set.
console.log("Ch-6 Practice Set.");

// Part: 1

// 1. Create a H2 heading element with text - "Hello JavaScript". Append "from Divyam Lathiya" to this text using JS.
console.log("Q-1");

let h2 = document.querySelector("h2");
console.log(h2.innerText);

h2.innerText = h2.innerText + ", from Divyam Lathiya";
// h2.append(", from Divyam Lathiya"); // Using append property


// 2. Create 3 divs with common class name - "box". Access them & add some unique text to each of them.
console.log("Q-2");

let divs = document.querySelectorAll(".box");
// divs[0].innerText = "New unique text 1.";
// divs[1].innerText = "New unique text 2.";
// divs[2].innerText = "New unique text 3.";

let idx = 1;
for (let i of divs) {
    i.innerText = `New unique text ${idx}`;
    idx++;
}



// Part: 2

// 1. Create a new button element. Give it a text "Click me!", background color of red & text color of white.
// insert the button as the first element inside the body tag.
console.log("Q-1");

let newButton = document.createElement("button"); // Create button
newButton.innerText = "Click me!"; // Give it text

newButton.style.backgroundColor = "red"; // Set background color
newButton.style.color = "white"; // Set text color

let addButton = document.querySelector("body"); // Inserting in the body
addButton.prepend(newButton); // prepeand property add element at end.

// document.querySelector("body").prepend(newButton);


/*2. Create a <p> tag in html, give it a class & some styling.
    - Now create a new class in CSS and try to append this class to the <p> element
    - Did you notice, how you overwrite the class name when you add a new one?
    - Solve this problem using classList.
*/
console.log("Q-2");

let content = document.querySelector(".content");
// content.setAttribute("class", "newClass");
content.classList.add("newClass"); // Check the output before after by comment this line.
