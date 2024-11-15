// $ copying an array

const fruits = ['apple', 'banana', 'cherry'];
const myFruits = fruits;

myFruits.push('watermelon');
myFruits.push('orange');

// console.log(fruits);
// console.log(myFruits);
// -> By copying an array, we are copying the reference to the original array. So, any changes made to the copied array will affect the original array. This is because both the original and copied arrays point to the same memory location. 



// $ copying an object

// const user1 = {
//     name: 'john',
//     age: 25
// };
// const user2 = user1;
// user2.age = 30;
// console.log(user1);
// console.log(user2);
// -> By copying an object, we are copying the reference to the original object. So, any changes made to the copied object will affect the original object. This is because both the original and copied objects point to the same memory location.

// $ copying object using different methods

// $ method 1: using the Object.assign() method

// const user3 = {
//     name: 'john',
//     age: 25
// };

// const user4 = {}
// Object.assign(user4, user3);
// console.log(user4);
// -> this method is used to copy the values of all enumerable own properties from one or more source objects to a target object. it returns the target object.
// -> this first argument is the target object and the second argument is the source object.
// ! this method is not used now a days. because we cannot copy nested objects using this method.


// $ method 2: using the spread operator

// const user5 = {
//     name: 'john',
//     age: 25
// };

// const user6 = {...user5}
// console.log(user6); 

// -> this method is used to copy the values of all enumerable own properties from one or more source objects to a target object. it returns the target object.


// $ method 3: using the JSON.parse() and JSON.stringify() methods

// const user7 = {
//     name: 'john',
//     age: 25
// };

// const user8 = JSON.parse(JSON.stringify(user7));
// console.log(user8);


// $ Similarily we can copy an array using the spread operator and JSON methods.

// $ method 1: copying an array using the spread operator

// const cities = ['mumbai', 'delhi', 'bangalore'];
// const myCities = [...cities];
// console.log(myCities);

// $ method 2: copying an array using the JSON methods

// const cities1 = ['mumbai', 'delhi', 'bangalore'];
// const myCities1 = JSON.parse(JSON.stringify(cities1));
// console.log(myCities1);

// $ method 3: copying an array using the slice() method

// const cities2 = ['mumbai', 'delhi', 'bangalore'];
// const myCities2 = cities2.slice();
// console.log(myCities2);

// $ method 4: copying an array using the concat() method

// const cities3 = ['mumbai', 'delhi', 'bangalore'];
// const myCities3 = cities3.concat();
// console.log(myCities3);


// @ if there is an nested object or array in the original object or array, then the nested object or array will have the same reference in the copied object or array. So, any changes made to the nested object or array will affect the original object or array. This is because both the original and copied objects or arrays point to the same memory location.
// @ if any change is made to the nested object or array in the copied object or array, then the original object or array will also be affected. This is because both the original and copied objects or arrays point to the same memory location.

// $ copying an object with nested object

const user9 = {
    name: 'john',
    age: 25,
    address: {
        city: 'mumbai',
        country: 'india'
    }
};

const user10 = {...user9};

user10.address.city = 'delhi';
console.log(user9);
console.log(user10);