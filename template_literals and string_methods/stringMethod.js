let string = 'my name is digamber'

// string methods
// -> string methods are used to perform operations on strings. there are many string methods available in javascript. they do not change the original string. they return a new string.

//  Method without arguments

// $ string length
StringLength = string.length
console.log(StringLength) // 19

// $ string toUpperCase
// -> string.toUpperCase() method is used to convert the string to uppercase 
UpperCase = string.toUpperCase()
console.log(UpperCase) // MY NAME IS DIGAMBER


// $ string toLowerCase
// -> string.toLowerCase() method is used to convert the string to lowercase 
LowerCase = string.toLowerCase()
console.log(LowerCase) // my name is digamber


// $ string trim
// -> string.trim() method is used to remove the white spaces from both ends of the string.
Trim = string.trim()
console.log(Trim) // my name is digamber


// $ trimStart
// -> string.trimStart() method is used to remove the white spaces from the start of the string.
TrimStart = string.trimStart()
console.log(TrimStart) // my name is digamber

// $ trimEnd
// -> string.trimEnd() method is used to remove the white spaces from the end of the string.
TrimEnd = string.trimEnd()
console.log(TrimEnd) // my name is digamber


//  Method with arguments


// $ string includes
// -> string.includes() method is used to check whether a string contains the specified string or not. it returns true if the string contains the specified string otherwise it returns false.
Includes = string.includes('name')
console.log(Includes) // true

// $ string indexOf
IndexOf = string.indexOf('name')
console.log(IndexOf) // 3

// $ replace
// -> string.replace() method is used to replace the specified string with another string. it can replace only the first occurrence of the specified string.
Replace = string.replace('digamber', 'kumar')
console.log(Replace) // my name is kumar

// $ replaceAll
// -> string.replaceAll() method is used to replace all the occurrences of the specified string with another string.
ReplaceAll = string.replaceAll('name', 'full name')
console.log(ReplaceAll) // my full name is digamber

// $ concat
// -> string.concat() method is used to concatenate two or more strings.it add the specified string to the end of the string.
Concat = string.concat(' kumar')
console.log(Concat) // my name is digamber kumar

// $ padStart
// -> string.padStart() method is used to pad the string with another string from the start of the string.it takes two arguments. the first argument is the total length of the string after padding and the second argument is the string to pad. the 25 represents the total length of the string after padding.
PadStart = string.padStart(25, '*')
console.log(PadStart) // ->****my name is digamber

// $ padEnd
// -> string.padEnd() method is used to pad the string with another string from the end of the string.it takes two arguments. the first argument is the total length of the string after padding and the second argument is the string to pad. the 25 represents the total length of the string after padding.
PadEnd = string.padEnd(25, '*')
console.log(PadEnd) // my name is digamber******

// $ string charAt
// -> string.charAt() method is used to get the character at the specified index. it returns the character at the specified index.
CharAt = string.charAt(0)
console.log(CharAt) // m

// $ string charCodeAt
CharCodeAt = string.charCodeAt(0)
console.log(CharCodeAt) // 109

// $ string split
// -> string.split() method is used to split the string into an array of substrings. it takes two arguments. the first argument is the separator and the second argument is the limit. 
// -> when it finds the separator in the string, it splits the string from that point.
// -> if the limit is not specified then it will split the string into an array of substrings.
// -> if the limit is specified then it will split the string into an array of substrings up to the limit.

Split = string.split(' ')
console.log(Split) // [ 'my', 'name', 'is', 'digamber' ]

Split2 = string.split(' ', 2)
console.log(Split2) // [ 'my', 'name' ]

Split3 = string.split('a')
console.log(Split3) // [ 'my n', 'me is dig', 'mber' ]


