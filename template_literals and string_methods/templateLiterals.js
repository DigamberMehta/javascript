const lastFourDigits = 1234;
const TemplateString = `last four digits of my phone number is `;

// $ using concat
const concatResult = TemplateString.concat(lastFourDigits);
console.log('using concat : ',concatResult); // last four digits of my phone number is 1234

// $ using template literals
const templateLiteralResult = `${TemplateString}${lastFourDigits}`;
// or
const templateLiteralResult2 = `last four digits of my phone number is ${lastFourDigits}`;


//result the template string
console.log('using template literals : ', templateLiteralResult); 
console.log('using template literals : ', templateLiteralResult2); 
