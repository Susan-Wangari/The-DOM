const body = document.body;
//returns the first instance of the selected element
const div = document.querySelector('div');
const span1 = Document.querySelector('#hi');
const span2 = document.querySelector('#2');
//removes an element from the web page
span2.remove();

//adding an element
div.append(span2);

//removing an element from a parent
div.removeChild(span1);