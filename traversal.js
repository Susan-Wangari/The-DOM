//
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