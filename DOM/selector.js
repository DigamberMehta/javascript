// $ Selecting Elements using getElementsByClassName

// -> it will return an HTMLCollection in form of array-like object, it is accessible by index
const allImages = document.getElementsByClassName('css-image');
// console.log(allImages); // * it will return an HTMLCollection
// console.log(allImages[0]); // * it will return the first element of HTMLCollection


// $ Selecting Elements using getElementById


// -> it will return a single element
// -> if there are multiple elements with the same id, it will return the first element
const cssImage = document.getElementById('css-image');
// console.log(cssImage); // * it will return the element with id css-image


// $ Selecting Elements using querySelector

// -> it will return the first element that matches the selector for class as well as id
const cssImageQuery = document.querySelector('.css-image');
// console.log(cssImageQuery); // * it will return the first element with class css-image


// $ Selecting Elements using querySelectorAll

// -> it will return a NodeList
// @ we can use some array methods on it like forEach, etc.
// -> it will return all the elements that matches the selector for class as well as id

const allImagesQuery = document.querySelectorAll('.css-image');
// console.log(allImagesQuery); // * it will return a NodeList

const  jsImage = document.querySelector('[alt="javascript-roadmap"]')

