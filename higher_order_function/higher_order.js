// $ Higher order function is a function that takes a function as an argument or returns a function as a result.

// Example 1: Function as an argument
function greet() {
    return "Hello";
    }

function displayMessage() {
    return greet();
    }

console.log(displayMessage()); // Output: Hello


// $ Call back function

// @ when we call a function and pass another function as an argument, that another function is called a callback function.

// Example 2: Callback function
function a(b){
    console.dir(b);
    b();
}

a(function(){ // callback function (inside function is callback function)
    console.log('I am callback function');
});

// @ a is a higher order function because it takes a function as an argument.
// @ function inside a() is a callback function.