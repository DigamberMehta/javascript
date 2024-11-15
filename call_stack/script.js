// -> call stack is mechanism by which java script interpreter keeps track of its place in a script that calls multiple functions
// -> it follow the LIFO principle , means last in first out
// -> when a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function

function indtroduceMe(){
    console.log('Hello, I am a developer');
    
}

indtroduceMe()