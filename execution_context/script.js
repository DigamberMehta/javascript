debugger
const username = 'digamber'
const userAge = 30

function sayHi(){
    console.log(`Hi ${username}`)
}

//-> there are three phase in the execution context

// @ 1. memory creation phase
// -> in this phase, the memory is created for the variables and functions, all the variables are assigned with undefined value

// @ 2. code execution phase
// -> in this phase, the code is executed line by line, the variables are assigned with the values

// @ 3. context destruction phase
// -> in this phase, the context is destroyed and the memory is released

// -> the global execution context is created when the script is loaded, and the context is destroyed when the script is unloaded, they all comes under the global execution context

// @4 . if we use let or const for the variable declaration, then it goes to script context, and if we use var for the variable declaration, then it goes to global context

// @5 . functions goes to the global context, and the variables inside the function goes to the function context

// @6 . in memory creation phase, the function is assigned with the function definition, and if we call the function before the function definition, then it will not give the error, because the function is already assigned with the function definition in the memory creation phase