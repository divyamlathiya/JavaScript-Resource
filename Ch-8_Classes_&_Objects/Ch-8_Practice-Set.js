// Ch-8 Practice-Set
console.log("Ch-8 Practice-Set");

// Q-1 You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData() that allows user to view website data.
console.log("Q-1");

let data = "Secret Info";

class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewDate() {
        console.log(`Name of the student is ${this.name} and email is ${this.email}.`);
    }
}

let student1 = new user("Divyam", "divyam1@gmail.com");
let student2 = new user("Raj", "raj2@gmail.com");

// let teacher1 = new user("Rakesh", "rakesh1@gmail.com");
// let teacher2 = new user("Vijay", "vijay@gmail.com");

student1.viewDate();
student2.viewDate();

// teacher1.viewDate();
// teacher2.viewDate();


// Q-2 Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.
console.log("Q-2");

class admin extends user {
    constructor(name, email) {
        super(name, email);
    }

    editData() {
        data = "Some new";
    }
}

let admin1 = new admin("admin1", "admin1@gmail.com");

console.log(data);
admin1.editData();
console.log(data);
