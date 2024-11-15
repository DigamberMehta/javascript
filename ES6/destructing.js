
// $ Destructuring
// -> The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// $ Destructuring Arrays

// -> the varibale name can be different in case of array destructuring 
// * example
let numbers = [1,2,3,4,5,6,7,8,9,10];
let [a, b, c, ...rest] = numbers; // -> here a = 1, b = 2, c = 3, rest = [4,5,6,7,8,9,10]
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(rest); // [4,5,6,7,8,9,10]

// $ Destructuring Objects
// -> The destructuring assignment uses similar syntax, but on the left-hand side of the assignment to define what values to unpack from the sourced variable.
// -> the variable name should be the same as the object key.

// * example
let user3 = {
    name: 'digamber',
    age: 22,
    city: 'pune',
    country: 'india'
}

let {name, age, ...others} = user3; // -> here name = 'digamber', age = 22, others = {city: 'pune', country: 'india'}

// $ Multiple level destructuring in Objects

let user4 = {
    naam: 'digamber',
    umaar: 22,
    address: {
        city: 'pune',
        country: 'india'
    }
}

let {naam, umaar, address: {city, country}} = user4; // -> here name = 'digamber', age = 22, city = 'pune', country = 'india'

console.log(naam); // digamber
console.log(umaar); // 22
console.log(city); // pune
console.log(country); // india


// $ Destructuring Function Parameters

// * example

const user5 = {
    name: 'akash',
    age: 25,
    city: 'delhi',
    country: 'india'
}

function intro({name, age, city, country}) {
    console.log(`My name is ${name}. I am ${age} years old. I live in ${city}, ${country}.`);
}

intro(user5); // My name is akash. I am 25 years old. I live in delhi, india.