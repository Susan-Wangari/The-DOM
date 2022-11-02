//parent element
const cardContainer = $0;
//placing the content to be removed in a variable
const firstCard = cardContainer.firstElementChild
//removing the child element
cardContainer.removeChild(firstCard);

//removing an element using parentElement
const myHeading = document.querySelector('h1');
myHeading.parentElement.removeChild(myHeading);