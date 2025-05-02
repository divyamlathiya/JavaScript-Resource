// DOM in JS. --> Is used to make changes in HTML using it's manipulation methods.
console.log("DOM in JS.");

alert("Hello!");

// Part: 1
console.log("Part: 1");

/*
    * The window object represents an open window in a browser. It is browser's object (not JS's) & it is automatically created by browser.
      - It is a global object with lots of properties & methods.     
*/
console.log(window);

/*
    * When a web page is loded, the browser creates a " Document Object Model "(DOM) of the page.

// We can access HTML in JS, Window -> Document(Model) --> It is represnts HTML code.
*/

console.log(document.body); // It is used to print something on console section.
console.dir(document.body); // It is used to print special objects like document's --> properties and methods

// DOM Manipulation (Accessing Elements)

// Select elements by Id --> getElementById();
console.log("Select by Id:");
let heading = document.getElementById("heading");
console.dir(heading);

// Select elements by class --> getElementsByClassName();
console.log("Select by Class:");
let paragraph = document.getElementsByClassName("paragraph");
console.dir(paragraph);
console.log(paragraph);

// Select elements by tag --> getElementsByTagName();
console.log("Select by Tag:");
let btn = document.getElementsByTagName("button");
console.dir(btn);

// Query Selector
console.log("Select by Query:");
let firstElement = document.querySelector("p"); // First element
console.log(firstElement);

let allElements = document.querySelectorAll("p"); // All element
console.log(allElements);

// Proprties

// tagName --> Returns tag for element nodes
console.log("tagName:", firstElement.tagName);

// innerText --> Returns the text content of the element and all it's children
// Gets or Sets text of element.
let div = document.querySelector("#devices");
console.log(div);
div.innerText = "Heading Changed";

// innerHTML --> Returns the plain text or HTML contents in the element
// Gets or Sets HTML tags/content
let listItem = document.querySelector("div li");
console.log(listItem);
listItem.innerHTML = "<i><b>New</b></i>"; // Using innerHTML we can change html content

// textContent --> Returns textual content even for hidden elements

/*
    parent, child, sibling
    nodes --> firstChild --> lastChild
*/

/*
    DOM tree:
             1. textNodes
             2. Comments
             3. elements (Most important)
*/

// Part: 2
console.log("Part: 2");

// Attributes --> Get or Set attribute using:

// getAttribute(attribute); --> To get the attributes value
let getattr = document.querySelector("#box");
console.log(getattr);

/*
let id = getattr.getAttribute("id");
console.log(id);
*/
// Short - trick to write upper code
console.log("Attribute is: ", getattr.getAttribute("id"));

// setAttribute(attribute, newValue); --> To set the attribute value
console.log(getattr.setAttribute("id", "newBox"));

// node.style --> Chnage the style of elements using:
let box2 = document.querySelector("#box2");
console.log(box2);

box2.style.backgroundColor = "green"; // Change the BG color
box2.style.fontSize = "26px"; // Change the fontSize
box2.innerText = "Hello!"; // Chnage the text

// Insert Elements

/*
    1. Create element --> let el = document.createElement("div");
    2. Add
*/
let newButton = document.createElement("button");
newButton.innerText = "Click me!";

let newHeading = document.createElement("h1");
newHeading.innerText = "Heading";

// node.append(element) --> Add at the end
let addBtn = document.querySelector("#box2");
addBtn.append(newButton);

// node.prepend(element) --> Add at the start
addBtn.prepend(newButton);

// node.before(element) --> Add before the node
addBtn.before(newButton);

// node.after(element) --> Add after the node
addBtn.after(newButton);
addBtn.after(newHeading); // May it not shows because in below, through delete it could removed.

// Delete Elements

// node.remove() --> Remove the node
newHeading.remove();
