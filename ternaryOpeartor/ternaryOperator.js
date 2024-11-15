// ternary operator 
// ** syntax: condition ? expr1 : expr2
// ** if condition is true, expr1 is returned, else expr2 is returned

/*
true ? console.log('true') : console.log('false') // true
false ? console.log('true') : console.log('false') // false
5 > 3 ? console.log('5 is greater than 3') : console.log('5 is not greater than 3') // 5 is greater than 3
5 < 3 ? console.log('5 is greater than 3') : console.log('5 is not greater than 3') // 5 is not greater than 3
*/
gender = 'M';
const userMessage = `${gender === 'F' ? 'Hello Ma\'am' : 'Hello Sir'} i am waiting for you`;
console.log(userMessage); // Hello Sir i am waiting for you
