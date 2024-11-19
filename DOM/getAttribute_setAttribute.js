const paragraph = document.querySelector('p');

// $ getAttribute method
// -> returns the value of the attribute
paragraph.getAttribute('class'); // returns the class attribute value 
// -> output: 'para sf'


// $ setAttribute method
// -> sets the value of the attribute
// -> this will overwrite the existing value
paragraph.setAttribute('class', 'new-class');

// @ we can set id and class and some common attributes that are defined in javascript by this method also :
paragraph.setAttribute.id = 'new-id';
paragraph.setAttribute.class = 'new-class';


// $ removeAttribute method
// -> removes the attribute
paragraph.removeAttribute('class');


// $ ClassList property
// -> the main difference between classList and setAttribute is that, setAttribute will overwrite the existing value, but classList will not. it will add the new class to the existing list of classes

 
// $ contains the list of classes of the element
paragraph.classList;

// $ add method
// -> adds a class to the list
paragraph.classList.add('new-class');

// $ remove method
// -> removes a class from the list
paragraph.classList.remove('new-class');

// $ toggle method
// -> adds the class if it's not present , removes the class if it's present
 
paragraph.classList.toggle('new-class');

