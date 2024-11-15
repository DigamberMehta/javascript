
// $ Spread Operator
// @ the spread operator used to expand the elements of an array or object and string. it take out each element of the array or object or string and copy it to another array or object or string.

// $ Spread Operator with Arrays
// -> The spread operator is used to expand an array or object into individual elements.
// -> The spread operator is used to copy the elements of an array or object into another array or object.
// * example

let arr = [1,2,3,4,5,6]
let arr2 = [...arr];
// -> here the elements of arr are copied into arr2
console.log(arr2); // [1,2,3,4,5,6]

// $ Spread Operator with Objects

let obj = {
    name: 'digamber',
    age: 22,
    city: 'pune',
    country: 'india'
}

let obj2 = {...obj};
// -> here the elements of obj are copied into obj2
console.log(obj2); // {name: 'digamber', age: 22, city: 'pune', country: 'india'}

// -> we can also add new properties to the object while copying the elements of the object.
let obj3 = {...obj, job: 'developer'};
console.log(obj3); // {name: 'digamber', age: 22, city: 'pune', country: 'india', job: 'developer'}


numbers = [1,2,3,4,5,6,7,8,9,10];


function add(){
    sum = 0;
    for ( let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
}

add(...numbers); // add(1,2,3,4,5,6,7,8,9,10);
console.log(sum); // 55

// ! in Function call only number and string can spread. not object or array.


