// Classes in JS
console.log("Classes in JS.");

class myClass { // Class
    constructor(name, age, city) {   // Construcor: Special member function to initialize objects.
        this.name = name; // Propertise
        this.age = age; // Properties
        this.city = city; // Properties
    }

    intro() { // Methods
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old. I'm living in ${this.city}!`);
    }
}

// Object: An instance of the class.
let person1 = new myClass("Divyam", 19, "Surat");
let person2 = new myClass("Virat Kohli", 36, "Bengaluru");

// Calling the methods.
person1.intro();
person2.intro();


// Prototype in JS
console.log("Prototype in Js.");

const employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    },
};

const jayShukhla = {
    salary: 50000,
    calcTax() {
        console.log("Tax rate is 20%"); // It gives more priority to this calcTax() method.
    }
};

jayShukhla.__proto__ = employee; // It acquire the method of employee to jayShukhla.


// Inheritance in JS.
console.log("Inheritance in JS.");

class person {
    eat() {
        console.log("Eat");
    }

    sleep() {
        console.log("Sleep");
    }
}

class Engineer extends person {    // Inheritance the properties of person class.
    work() {
        console.log("Work something, Solve problems");
    }
}

let Divyam = new Engineer();

Divyam.eat();
Divyam.sleep();
Divyam.work();


// Try - Catch block: It's used to execute risky code without any stopping.
// Our code is not stop, just this error is handeled and move to next.
console.log("Try-Catch block.");

let a = 10;
let b = 20;

console.log("a: ", a);
console.log("b: ", b);
console.log("a + b: ", a + b);

// Try-Catch block, It handel this code where minor error, C is not defined.
try {
    console.log("a - b: ", a - c);
} 
catch(e) {
    console.log(e);
}

console.log("a * b: ", a * b);
