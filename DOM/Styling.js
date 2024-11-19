const heading = document.querySelector('.css-image');
heading.style.color = 'blue';

const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
//   link.style.color = 'teal';
//   link.style.textDecoration = 'none';
//   link.style.fontSize = '0.8rem';
     link.setAttribute('class', 'green-link') // it remove all the classes and add the new class
    
}
 