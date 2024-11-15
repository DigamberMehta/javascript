// -> arrow fucntion is a new way to write function in javascript

// $ example of arrow function (explicit return)
const add = (a,b) => {
    return a + b;
};

// -> it is a short hand way to write function


// $ short hand way to write arrow function (implicit return)
const sub = (a,b) => a - b;
// -> it will directly return the value


// * example 2
setTimeout(() => {
    console.log("Hello World");
},1000);