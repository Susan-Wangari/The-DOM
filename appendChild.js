//used to add an element to the DOM
//not used on the object object
const newParagraph = document.createElement('p');
//element being appended to
const newMain = document.querySelector('main');
//added as the last child of the element
newMain.appendChild(newParagraph);

//only works if the element being appned to exists