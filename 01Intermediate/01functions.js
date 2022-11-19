let sayHello = function (name, age) {
    // console.log("Greeting message for user");
    console.log(`Greeting message for ${age}`);
    // console.log("Hey User");
    console.log(`Hey ${name}`);
}

// sayHello();
/* sayHello(John); // Error John is not defined */
// sayHello('John', '25'); //Output - Hey John


let fullNameMaker = function (firstname, lastname) {
    console.log('Welcome to LCO');
    console.log(`Happy to have you, ${firstname} ${lastname}`);
}

// fullNameMaker('John', 'Doe');


let myAdder = function (num1, num2) {
    let added = num1 + num2;
    return added;
}

/* myAdder(4, 5);
console.log(myAdder(4, 5)); */

let result = myAdder(4, 8);
console.log(result);
