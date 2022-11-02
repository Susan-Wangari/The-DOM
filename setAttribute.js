const mainHeading = document.querySelector('h1');

mainHeading.setAttribute('style', 'color:red; font-size: 12px;');

//can be used to set other attributes e.g ids

mainHeading.nextElementSibling.setAttribute('id', 'heading-sibling');
//styling
document.querySelector('#heading-sibling').style.backgroundColor= 'red';