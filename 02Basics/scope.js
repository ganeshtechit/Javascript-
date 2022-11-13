/* let iamGlobal = "someValue" // Global scope variable

if (true) {
    // let iamLocal = "some more Value" // Local scope variable
    var iamLocal = "some more Value" // Local scope variable
    iamGlobal = "superman"
    console.log(iamGlobal)
    console.log(iamLocal)
}
console.log(iamGlobal)
// console.log(iamLocal) */


// Kings problem

// let king = ' jhon'

if (true) {

    // let king = 'sam'
    if (true) {
        king = "  Ram"
        console.log(king)
    }
}

if (true) {
    console.log("I am second part" + king)
}