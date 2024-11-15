let numberArray = [4, 1, 3, 2, 5]
let evenNumber = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]
const animals = ['dog', 'cat', 'lion', 'tiger', 'elephant']
let oddNumber = [1, 3, 5, 7, 9]

// $ Array Methods
// -> Array methods are used to perform operations on arrays. some of the array methods are push(), pop(), shift(), unshift(), slice(), splice(), etc.

// $ these methods change the original array.
// @ these methods are push(), pop(), shift(), unshift(), reverse(), sort(), fill(), copyWithin(), splice().

// $ these methods do not change the original array.
// @ these methods are concat(), filter(), map(), reduce(), every(), some(), find(), findIndex(), indexOf(), includes(), slice(), etc.

// $ push()
// -> The push() method adds new items to the end of an array,
// @ and returns the new length.
// numberArray.push(1)
// console.log(numberArray)

// $ pop()
// -> The pop() method removes the last element from an array and 
// @ returns that element.
// numberArray.pop()
// console.log(numberArray)   

// $ shift()
// -> The shift() method removes the first element from an array and 
// @ returns that removed element. 
// @ This method changes the length of the array.
// -> it take more processing time than pop() method. because it has to re-index all the elements in the array.
// numberArray.shift()
// console.log(numberArray)

// $ unshift()
// -> The unshift() method adds new items to the beginning of an array, and
// @ returns the new length.
// numberArray.unshift(1)
// console.log(numberArray)

// $ concat()
// -> The concat() method is used to merge two or more arrays. 
// @ This method does not change the existing arrays, but instead returns a new array.
// @ we can also multiple arrays in this method.

// let newArray = numberArray.concat(animals)
// let newArray1 = numberArray.concat(animals, oddNumber)
// console.log(newArray)
// console.log(newArray1)

// $ indexOf()
// -> The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// let index = animals.indexOf('lion')
// console.log(index)

// $ includes()
// -> The includes() method determines whether an array includes a certain value among its entries, 
// @ returns true or false as appropriate.
// let includes = animals.includes('lion')
// console.log(includes)

// $ reverse()
// -> The reverse() method reverses an array in place.
// let reverse = animals.reverse()
// console.log(reverse)

// $ sort()
// -> The sort() method sorts the elements of an array in place and returns the sorted array.
// @ for strings, it sorts the array in alphabetical order. it is case-sensitive. for example, 'A' comes before 'a'. it is based on the Unicode code point value.
// let sort = animals.sort()
// console.log(sort)
// let sort1 = numberArray.sort()
// console.log(sort1)
// let sort2 = evenNumber.sort()
// console.log(sort2)

// $ slice()
// -> The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
// let slicedArray = animals.slice(1, 3)
// console.log(slicedArray)

// $ splice()
// -> The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// -> The splice() method returns an array containing the deleted elements.
// @ the first argument is the index at which to start changing the array.
// @ the second argument is the number of elements to remove.
// @ the third and subsequent arguments are the elements to add to the array.

let splice = animals.splice(1, 2, 'cheetah', 'leopard')
console.log(splice)
console.log(animals)