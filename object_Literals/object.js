// @ object are key value pairs.
// @ object is a collection of key value pairs.
// @ object is a non primitive data type in javascript.
// @ object is a reference data type in javascript.
// @ object is a mutable data type in javascript.
// @ object is a collection of properties.
// @ object is a collection of methods.
// @ object can be created using object literals or constructors.
// @ object properties can be accessed using dot notation or bracket notation.

// -> If two string variables have the same value, they will point to the same memory location for that value. 

let str1 = "hello";
let str2 = "hello";
// console.log(str1 === str2);  // true
// console.log(str1 === str2);  // true because they refer to the same memory location


// -> Even if two objects have the same content, they are stored at different memory locations because each object is a unique reference.

let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };
// console.log(obj1 === obj2);  // false because they refer to different memory locations



// const user1 = {
//     name: 'John',
//     age: 30,
//     job: 'Developer'
//   };
  
//   const user2 = {
//     name: 'Alice',
//     age: 25,
//     job: 'Designer'
//   };
  
// user1 === user2; // @ false 
// console.log(user1 === user2);
// -> it will result in false , because they refer to different memory locations




// $ Accessing object values
// -> object properties can be accessed using dot notation or bracket notation.
const user1 = {
    name: 'John',
    age: 30,
    job: 'Developer'
  };
  
  const user2 = {
    name: 'Alice',
    age: 25,
    job: 'Designer'
  };
  
  // $ dot notation
  user1.name; // @ John
  // console.log(user1.name);
  
  // $ bracket notation
  user1['name']; // @ John
  // console.log(user1['name']);
  // -> bracket notation is used when the property name is dynamic or when the property name is a reserved keyword or when the property name is not a valid identifier (example: user1['first-name']). 
  
  const user3 = {
    firstName: 'Adarsh',
    'last-Name': 'kumar'
  };
  // console.log(user3['last-Name']); // kumar
  // -> we cannot access last-name of user3 using dot notation because it is not a valid identifier. we have to use bracket notation to access it.
  // console.log(user3['first' + 'Name']); // Adarsh
  // -> we can also use bracket notation for expressions.
  
  
  // $ Adding properties to an object
  // -> we can add properties to an object using dot notation or bracket notation.
  const user4 = {
    name: 'John',
    age: 30,
    job: 'Developer'
  };
  
  // $ dot notation
  user4.location = 'New York';
  // console.log(user4.location); // New York
  
  // $ bracket notation
  user4['email'] = 'john123@gmail.com'; 
  // console.log(user4['email']);  
  
  // console.log(user4);   
  
  
  
  
  
  
  // $ Deleting properties from an object
  // -> we can delete properties from an object using delete operator.
  const user5 = {
    name: 'John',
    age: 30,
    job: 'Developer'
  };
  
  delete user5.job;
  // console.log(user5); // { name: 'John', age: 30 }
  // -> we can also use bracket notation to delete a property from an object.
  delete user5['age'];
  // console.log(user5); // { name: 'John' }
  
  
  // $ updating properties of an object
  // -> we can update properties of an object using dot notation or bracket notation.
  const user6 = {
    name: 'John',
    age: 30,
    job: 'Developer'
  };
  
  // $ dot notation
  user6.age = 35;
  // console.log(user6.age); // 35
  
  // $ bracket notation
  user6['job'] = 'Designer';
  // console.log(user6['job']); // Designer
  
  
  
  
  
  
  
  
  
  // $ Object inside an object
  // -> an object can have another object as a property.
  const user7 = {
    name: 'John',
    age: 30,
    job: 'Developer',
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
  
  // $ accessing the value using dot notation
  user7.address.city
  // console.log(user7.address.city)
  
  // $ accessing the value using bracket notation
  user7['address']['city']
  console.log(user7['address']['city'])