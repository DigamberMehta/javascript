// $ Some method and Every method


// $ some method
// -> The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
// -> It can also take 3 argument (array) i.e. element, index, array.
// -> it return true if any one element pass the condition.
const evenNumbers = [2,4,6,8,10];


const result = evenNumbers.some((num)=>{
    return num%4==0
})
console.log(result)



// $ every method
const oddNumbers = [1,3,5,7,9];
// -> The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

const result1 = oddNumbers.every((num)=>{
    return num%2!=0
})