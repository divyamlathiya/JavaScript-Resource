// TimeOut in JS.
console.log("TimeOut in Js.");

function greet(name) {
    console.log(`Hello, ${name}`);
}

// setTimeout(function, miliSeconds, arg1, arg2);
// It is used to display things after specific time.
setTimeout(greet, 2000, "Divyam"); // It display greet() function after 2seconds.


// It is an arrow function to set time out.
setTimeout(() => {
    function hello(name) {
        console.log(`Hello ${name}`);
    }
    hello("Divyam");
}, 2000);


// setInterval();  It is used to update/executes code repeatedly.
// Visit MDN for more..