const user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    }
};

Object.seal(user);
// -> Object.seal() method is used to seal an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.

Object.freeze(user);
// -> Object.freeze() method is used to freeze an object, preventing new properties from being added to it, existing properties from being removed, and preventing existing properties, or their enumerability, configurability, or writability, from being changed. In essence the object is made effectively immutable. The method returns the object being frozen.

// $ in operator(used to check whether a property is in an object or not)

'name' in user; // true
'job' in user
// -> The in operator returns true if the specified property is in the specified object or its prototype chain.