const fruits = ['apple', 'banana', 'orange', 'grape', 'melon', 'strawberry', 'kiwi'];
// $ forEach method
// -> The forEach() method calls a function once for each element in an array, in order.
// -> forEach() method does not return anything.
// -> forEach() method is faster than for loop.
// @ forEach() method takes 3 arguments (element, index, array).
// -> the return value of forEach() method is always undefined.
fruits.forEach((fruit, index, array) => {
    console.log(fruit, index, array);
});