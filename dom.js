//examine the document object
//shows all properties and methods of an object
console.dir(document);
//gets the value of selected elements
console.log(document.domain);
console.log(document.title);
console.log(document.doctype);
//displays all elements in that document
console.log(document.all);
//can be used to access an element in a certain array
console.log(document.all[10]);

//displays an element by referencing its id
console.log(document.getElementById('header-title'));

//changing styling
let header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';

//getting elements using class names
let list = document.getElementsByClassName('list-group-item');
console.log(list);
//accesses an item or element from the list(displays as an array)
console.log(list[1]);
list[1].textContent = 'hey there';
list[1].style.color = 'purple';

//gets elements using tag names
let items = document.getElementsByTagName('li');
console.log(items);
//accesses an item or element from the list(displays as an array)
console.log(items[1]);
items[1].textContent = 'hey there';
items[1].style.color = 'purple';

// //adding a style to all elements in the list
for(let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = 'grey';
}

//query selector
let head = document.querySelector('#main-header');
head.style.borderBottom = 'solid 3px #000';

let input = document.querySelector('input');
input.value = 'hello there';
//changes the first item only
let listItem = document.querySelector('.list-group-item');
listItem.style.color = 'red'; 

//color or change the last item
let lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue'; 
//changing the submit button
let submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

//second child
let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';
 
//query selector all
let title = document.querySelectorAll('.title');
console.log(title);

//styling odd numbers/elements
let odd = document.querySelectorAll('li:nth-child(odd)');
for(let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#ccc';
}
 
