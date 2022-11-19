const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']

console.log(days[0]);

/* let sayHello = function () {
    console.log("Greeting message for user");
}

days.forEach(sayHello); */


/* days.forEach(function () {
    console.log("Greeting message for user");
}); */

days.forEach(function (day, index) {
    console.log(`starts with ${index+1} -- ${day} ` );
    // console.log(index);
    // console.log(day);
}); //Callback function without founction name