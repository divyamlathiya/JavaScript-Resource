// CallBacks in Js.
console.log("Callbacks in JS.");


// It is an function that call after an specific function/tasks is excecute.
// It is an argument of function.
function myFunc() {
    console.log("Hello from callback function.");
}

function newFunc(callback) {
    console.log("My name is Divyam");
    callback(); // Call the callback parameter.
}

newFunc(myFunc); // calling the myFunc() function that runs after newFunc() is called.



// Callback hell (Pyramid of doom)
// Nested callbacks stacked below one another forming. (Difficult to understand code)
console.log("Callbacks hell:");
function getData(dataId, getNextData) {
    // 2s
    setTimeout(() => {
        console.log("Data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

getData(1, () => {
    console.log("Getting data2....");
    getData(2, () => {
        console.log("Getting data3....");
        getData(3, () => {
            console.log("Getting data4....");
            getData(4);
        });
    });
});
