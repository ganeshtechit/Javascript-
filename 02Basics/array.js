/* // datatype  - Array

const superHeroes = ['Iron man', 'Spiderman', 'Capt. America', 'Thor']

console.log(superHeroes);
console.log(superHeroes[0]);
console.log(superHeroes[2]);
console.log(superHeroes.length);
console.log(superHeroes.length - 1);
console.log(superHeroes[superHeroes.length - 1]);

console.log(`We have ${superHeroes.length - 1} super heroes`);


 */


// 3 Must array method

/* shift()
unshift()
pop()
push() */

const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

/* numbers[1] = 'SOMETHING'

console.log(numbers); */

// start

/* console.log(numbers.shift());
numbers.shift(); //deleted or shift anything but first array deleted
console.log(numbers); */

/* console.log(numbers.unshift('SOMETHING'));
numbers.unshift('SOMETHING');
console.log(numbers); */

//end
/* console.log('The element to be deleted is:' + ' ' +numbers.pop());
numbers.pop();
console.log(numbers); */

/* numbers.push('Seven');
console.log(numbers); */


// middle

numbers.splice(1, 4, 'SOMETHING', 'SOMETHING1');
console.log(numbers);

