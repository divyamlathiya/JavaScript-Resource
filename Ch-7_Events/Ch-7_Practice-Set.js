// Ch-7 Practice Set.
console.log("Ch-7 Practice Set.");

// 1. Crate a toggle button that changes the screen to dark-mode when clicked again light-mode.

btn.onclick = () => {
    let body = document.querySelector("body");
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        btn.innerText = "Black theme";
    }
    else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        btn.innerText = "White theme";
    }
}