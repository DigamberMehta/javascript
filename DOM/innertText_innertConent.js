// $ DIFFERENCE BETWEEN INNERTEXT, INNERHTML, TEXTCONTENT, TEXTNODE

const paragraph = document.querySelector('p');

// $ innerHTML: returns the HTML content of an element
const innerHtmlContent = paragraph.innerHTML;
// console.log(innerHtmlContent); 
// paragraph.innerHTML = '<b>Changed</b>'; // -> it will change the content of the paragraph element to the bold text 'Changed'
 

// $ innerText: returns the text content of an element, means it will return only the visible text content of an element that is displayed on the screen
const innerText = paragraph.innerText;
// console.log(innerText);
// paragraph.innerText = 'Changed'; // -> it will change the content of the paragraph element to the text 'Changed'



// $ textContent: returns the text content of an element, means it will return all the text content of an element including the hidden text content, next line characters, and extra white spaces 
const textContent = paragraph.textContent;
// console.log(textContent);
// paragraph.textContent = 'Changed'; // -> it will change the content of the paragraph element to the text 'Changed'

