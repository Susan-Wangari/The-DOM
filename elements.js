const body = document.body;
//returns the first instance of the selected element
const div = document.querySelector('div');
const span1 = Document.querySelector('#hi');
const span2 = document.querySelector('#2');

//getting the value from an attribute
console.log(span1.getAttribute('title')); 
//or
console.log(span1.title);
//change a value to a new value 
console.log(span1.setAttribute('title', 'hey'));
//or
console.log(span1.title = 'yoh');
