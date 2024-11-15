
// $ Rest Parameters
// -> it makes an array of the rest of the parameters.
// -> the rest paramter should be last in the parameter list.
// * example
// function restParams(a, b, ...rest) {
//     console.log(a); // 1
//     console.log(b); // 2
//     console.log(rest); // [3,4,5,6,7,8,9,10]
// }

// restParams(1,2,3,4,5,6,7,8,9,10);

// -> The rest parameter is used to represent an indefinite number of arguments as an array.


// * example
function add(...rest) {
    console.log(rest); // [1,2,3,4,5,6,7,8,9,10]
    let sum = 0;
    for (let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}

console.log(add(1,2,3,4,5,6,7,8,9,10)); // 55


/* 
| Feature          | Rest Parameter                          | Spread Operator                          |
|------------------|-----------------------------------------|------------------------------------------|
| Syntax           | function(...args) {}                    | [...array]                               |
| Usage            | Collects multiple elements into an array| Expands an array into individual elements|
| Function Context | Used in function parameter list         | Used in function calls                   |
| Example          | function(a, b, ...rest) {}              | Math.max(...numbers)                     |
| Purpose          | To handle variable number of arguments  | To spread elements of an array or object |
*/


