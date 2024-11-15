// $ Default Parameters

// -> The default parameters are used when the value of the parameter is not passed or is undefined.

// * example 
function myFunction(a, b = 2) { // * here b is the default parameter
    return a + b;
}
myFunction(a = 1); 
// -> if both the parameters are passed then the default parameter will not be used.


