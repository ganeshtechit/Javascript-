// && - AND operator -- Both side need to be true

// || - OR operator -- One side need to be true
// !  Logical Not

/* 
let isVerified = false 
let isLoggedIn = false
let hasPaymentToken = false
let isGuest = false


if (isVerified && hasPaymentToken && isLoggedIn) {
    console.log('Greeting message for user')
    console.log('Allow access to view all courses')
} else if (isGuest || hasPaymentToken ) {
    console.log('Greeting message for teacher')
    console.log('Allow access to his courses')
} else {
    console.log('MESSAGE: please verify your email')
    console.log('Send user an email for varification')
} 
 */

const a = 3;
const b = -2;

console.log((a > 0 || b > 0));

// expected output: false //with !(logical not operator)

// expected output: true //without !(logical not operator)

