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
console.log(myAdder(4, 5)); */  //Doing WAY 1

let result = myAdder(4, 8);     //Doing WAY 2
// console.log(result);


let myMultiplier = function (num1, num2) {
    return num1 * num2
}

myMultiplier(5, 1);
// console.log(myMultiplier(5, 1));

let guestUser = function (name = 'unName', courseCount = 0) {
    return 'Hello ' + name + ' and your course count is ' + courseCount
}
guestUser();
console.log(guestUser()); //OUTPUT: Hello unName and your course count is 0 
console.log(guestUser('John', 5)); //OUTPUT: Hello John and your course count is 5 // Value has been over writed by function value  


