const firstName= 'akash';
const homeName = firstName;
const lastName = 'kumar';
const userAge = 25;
const isGraduated = false;


const originalObject = {
    name: "John",
    age: 30,
    job: "Developer"
  };
  
const copiedObjectDirect = originalObject;
// -> copying object using direct assignment, this is not a good way to copy an object because it will not create a new object, it will only create a reference to the original object. any change in the copied object will also reflect in the original object.  
  

const copiedObjectSpread = { ...originalObject };
// -> copying object using Object.assign() method, this is a good way to copy an object because it will create a new object. any change in the copied object will not reflect in the original object.  

