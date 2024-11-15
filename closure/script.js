// $ Closure 
// * Closure is a function having access to the parent scope, even after the parent function has closed.
// * Closure is created when a function is defined within another function and has access to the outer function's scope.

// * Example 1
function outerFunction() {
    let outerVariable = 'I am outside!';
    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction;
}
// -> in the above example, innerFunction has access to the outerVariable even after the outerFunction has closed.

 

// * Example 2
function outer() {
    function parent() {
        const a = 10;
        const b = 20;
        function add() {
            console.log(a + b); // `add` function closes over `a` and `b`
        }
        return add; // Return the function `add`, not `add()`
    }
    return parent(); // Returns `add` function itself, which keeps access to `a` and `b`
}

const add1 = outer();
add1(); // This will print 30


