
 let itemList = document.querySelector('#items');
//parent node
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'grey';
//getting the parent node of a parent node
console.log(itemList.parentNode.parentNode.parentNode);

//parent element
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'grey';
//getting the parent node of a parent node
console.log(itemList.parentElement.parentElement.parentElement);

//child nodes
console.log(itemList.childNodes);

//children
console.log(itemList.children);
console.log(itemList.children[1]);;
itemList.children[1].style.backgroundColor="pink";

//first child
console.log(itemList.firstChild);

//first element child
console.log(itemList.firstElementChild);
//changing text content
itemList.firstElementChild.textContent = 'hello 1';

//siblings
//next sibling
console.log(itemList.nextSibling);

//next element sibling
console.log(itemList.nextElementSibling);

//previous sibling
console.log(itemList.previousSibling);  
 //previous element sibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';
