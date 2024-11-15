// $ Arguments Keyword
// -> The arguments object is a local variable available within all functions. You can refer to a function's arguments within the function by using the arguments object. This object contains an entry for each argument passed to the function, the first entry's index starting at 0.

// -> The arguments object is not an Array. It is similar to an Array, but does not have any Array properties except length. For example, it does not have the pop method. However, it can be converted to a real Array.

// -> If we pass more arguments than the function takes, these will be stored in the arguments object.

//  * example

// function myFunction(a, b) {
//     console.log(arguments); 
//     return arguments.length;
// }

// console.log(myFunction(1, 2, 3, 4)); // 4


let arr = [];

function myFunction() {
    for (let i = 0 ; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
}

myFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 10
let Final = arr.reduce((acc, curr) => {
    return acc + curr;
});

console.log(Final); // 55
