console.log(username); // digamber
var username = 'digamber';
Output: undefined
// -> Explanation: In this example, the variable username is declared after the console.log statement. this is called hoisting.
// -> when we use a variable before it is declared, it is hoisted to the top of the function or global scope.
// @ only var can be hoisted. let and const are not hoisted. it will throw an error if we try to use them before they are declared.
// @ hoisting can be done with function also but not with function expression. becuase function expression is assigned to a variable. 
// @ During the memory allocation phase, the function is already stored in memory and is available for use. that is why we can use a function before it is declared.

indtroduceMe()
function indtroduceMe(){
    console.log('Hello, I am a developer');
    
}
// -> this is called hoisting. when we use a function before it is declared, it is hoisted to the top of the function or global scope.


sayHi()
const sayHi = function(){ // anonymous function
    console.log('Hello, I am a developer');
    
}
// Output: ReferenceError: Cannot access 'sayHi' before initialization
// -> Explanation: In this example, the function sayHi is declared using a function expression. function expression is assigned to a variable.
// -> this function is also called anonymous function.

// ! CHECK ABOUT IIFE (Immediately Invoked Function Expression)