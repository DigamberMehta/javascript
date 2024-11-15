// -> every method is a function, but not every function is a method
// -> methods are functions that are attached to objects
// -> functions are not attached to objects
// -> functions are independent of objects
// -> methods are dependent on objects
// -> functions are not properties of objects
// -> methods are properties of objects

// * Example
const maths = {
    add: function(a,b){
        return a + b;
    },
    sub: function(a,b){
        return a - b;
    },
    mul: function(a,b){
        return a * b;
    },
    div: function(a,b){
        return a / b;
    }
};
