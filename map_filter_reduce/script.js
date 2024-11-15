// @ map , filter and reduce method in javascript for array manipulation , they cannot be used with object.
const fruits = ['apple', 'banana', 'orange', 'grape', 'melon', 'strawberry', 'kiwi'];

// $ map method
// capitalFruit =fruits.map((fruit, index) => {
//     console.log(fruit,index);
//     return fruit.toUpperCase();
// })

// console.log(capitalFruit);
// -> The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// -> it will return a new array with the same length of the original array.
// -> it will not change the original array.
// -> it can take third argument also (array) which is optional. that array is the array on which map() method is called. means original array.


// $ filter method
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const evenNumbers = numbers.filter((number) => {
//     return number % 2 === 0;
// });
// console.log(evenNumbers);
// -> The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// -> it returns based on the condition provided in the callback function. if the condition is true then it will return that element in the new array.
// @ it can also 3 argument (array) i.e. element, index, array.


// *example 
const students = [
    {
        name: 'digamber',
        age: 22,
        city: 'pune'
    },
    {
        name: 'sachin',
        age: 23,
        city: 'mumbai'
    },
    {
        name: 'rahul',
        age: 21,
        city: 'nagpur'
    },
    {
        name: 'akshay',
        age: 18,
        city: 'pune'
    }
];

// const matureStudents = students.filter((student) => {
//     // console.log(student)
//     return student.age > 18
// }).map((student) => {
//     return student.name
// }).filter((name) => {
//     return name.includes('i')
// });

// console.log(matureStudents)




// $ reduce method

const numbersArray = [1,2,3,4,5];

// const sum = numbersArray.reduce((accumulator, currentValue) => {
//     console.log(accumulator, currentValue);
//     return accumulator + currentValue;
// }, 0);
// -> the starting value of is by default the first element of the array if we do not provide the initial value. the inital value is provided as the second argument of the reduce method. if the second agrument is provided then the starting value of the accumulator will be that value.
// -> the current value is the current element of the array.