// $ Array
// @ Behind the scenes, JavaScript arrays are objects with integer-based keys that act like indexes.
// @ The typeof operator in JavaScript returns "object" for arrays.
// @ any changes made to the array will affect the original array.
// @ Array can store any type of data.for example string, number, boolean, object, etc.

// $ Creating an Array
const fruitsCollection = [ 'apple', 'banana', 'cherry' ];
// console.log(fruitsCollection); 
// console.log(typeof fruitsCollection); // object

// $ Accessing an Array
// -> Array elements are accessed using their index number:
fruitsCollection[1]
// console.log(fruitsCollection[1])

// $ Updating an Array
// -> Array elements can be updated using their index number:
fruitsCollection[2] = 'watermelon'
// console.log(fruitsCollection)

// $ data types in an array
// -> Array can store any type of data.for example string, number, boolean, object, etc.
const mixedArray = [ 'string', 10, true, { name: 'john' } ,null, undefined, NaN, Infinity, -Infinity ];

