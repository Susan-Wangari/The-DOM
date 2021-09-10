//createElement
let newDiv = document.createElement('div');
// console.log(newDiv);

//adding a class
newDiv.className = 'hello';

//adding an id
newDiv.id = 'hello1';

//adding an attribute
newDiv.setAttribute('p','greetings from Mars!');

//text node
let divText = document.createTextNode('Mars Rover');

//adding text to the element
newDiv.appendChild(divText);

let container = document.querySelector('header .container');
 let heading = document.querySelector('header h1');

 //insert before
 container.insertBefore(newDiv, heading);

 //styling the element
 newDiv.style.fontStyle = 'italic';
 
console.log(newDiv);