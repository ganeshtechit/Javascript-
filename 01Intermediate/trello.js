const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']

// console.log(days[0]);

/* let sayHello = function () {
    console.log("Greeting message for user");
}

days.forEach(sayHello); */


/* days.forEach(function () {
    console.log("Greeting message for user");
}); */

days.forEach(function (day, index) {
    // console.log(`starts with ${index+1} -- ${day} ` );
    // console.log(index);
    // console.log(day);
}); //Callback function without founction name


// console.log(days.length+1);


/*

index++ ==> index = index + 1

*/
// for (let index = 0; index < days.length; index++){
/* for (let index = 0; index < days.length; index = index + 1){
    const element = days[index];
    console.log(element);
} */

/* for (let i = 0; i < days.length; i++){    
    console.log(days[i]);
} */

/* // Output
Mon
Tue
Wed
Thr
Fri
Sat */

for (let i = days.length - 1; i >= 0; i--) {
    console.log(days[i]);
}
/* // Output
Sat
Fri
Thr
Wed
Tue
Mon */

const myTodos = []

myTodos.push("Buy Bread")
myTodos.push("Record videos for youtube")
myTodos.push("Go to Gym")

myTodos.forEach(function( mytodo , index) {
    console.log(`Your task no. ${index+1} is: ${mytodo}`);
})
