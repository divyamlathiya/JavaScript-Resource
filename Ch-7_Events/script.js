// Events in JS.
console.log("Events in JS.");

/*
    node.event = () => {
          // Handle here
        }
*/


// onclick
// let btn = document.querySelector("#btn");
btn.onclick = () => {
    let body = document.querySelector("body");
    // body.style.backgroundColor = "black";
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        btn.innerText = "Black theme"
    }
    else {
        body.style.backgroundColor = "black";
        btn.innerText = "White theme";
    }
}


// onmouseover
box.onmouseover = () => {
    console.log("Pointer is inside box.");
}

// Visit MDN for get all events 



// Event object

// e.target, e.type, e.clientX, e.clientY
box.onclick = (evt) => {
    console.log(evt);
    console.log("Target:", evt.target);
    console.log("Type:", evt.type);
    console.log("X & Y:", evt.clientX, evt.clientY);
}



// Event Listeners --> through eventListeners we can do multiple work on same event.  

// node.addEventListener(event, callback)
// let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    console.log("Button2 is clicked! Handler1");
});

btn2.addEventListener("click", () => {
    console.log("Button2 is clicked! Handler2");
});

btn2.addEventListener("click", () => {
    console.log("Button2 is clicked! Handler3");
});

