// $ For of loop
// -> The for...of statement creates a loop iterating over iterable objects, Like Array, String , set ,Nodelist etc.
// -> object are not iterable, so we can't use for of loop with object.

// -> used for array
// const fruits = ['apple', 'banana', 'orange', 'grape', 'melon', 'strawberry', 'kiwi'];

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// -> used for string
// const user = 'digamber'
// for (let letter of user){
//     console.log(letter);
// }

// -> used for object (0bject are not iterable)

const person = {
    name: 'Digamber',
    age: 22,
    eyeColor: 'black',
    city : 'pune'
}

// for (let key of person){
//     console.log(key); // ! it will give error because object are not iterable ,  TypeError: person is not iterable
// }

// @ we have to use for in loop for object

for (let key in person){
    console.log(key);
    console.log(person[key]);
}
// -> we generally do not use for in loop for object because it consume more time to iterate over object.
// @ we should use Object.keys() , Object.values() , Object.entries() to iterate over object.

const personKeys = Object.keys(person);
console.log(personKeys);
const personValues = Object.values(person);
console.log(personValues);
const personEntries = Object.entries(person);
console.log(personEntries);