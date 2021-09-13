let button = document.getElementById('button');
let box = document.getElementById('box');
let output = document.getElementById('output');
let itemList = document.querySelector('#items');

button.addEventListener('click', runEvent);
//double click
button.addEventListener('dblclick', runEvent);
//mouse down
button.addEventListener('mousedown', runEvent);
//mouse up
button.addEventListener('mouseup', runEvent);
//mouse enter
box.addEventListener('mouseenter', runEvent);
//mouse leave
box.addEventListener('mouseleave', runEvent);
//mouse over
box.addEventListener('mouseover', runEvent);
//mouse out
box.addEventListener('mouseout', runEvent);
//mouse move
box.addEventListener('mousemove', runEvent);
let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');
let select = document.querySelector('select');
//key down
itemInput.addEventListener('keydown', runEvent);
//key up
itemInput.addEventListener('keyup', runEvent);
//key press
itemInput.addEventListener('keypress', runEvent);
focus
itemInput.addEventListener('focus', runEvent);
//blur-when you click outside an element
itemInput.addEventListener('blur', runEvent);
cut
itemInput.addEventListener('cut', runEvent);
paste
itemInput.addEventListener('paste', runEvent);
input
itemInput.addEventListener('input', runEvent);
//change event
select.addEventListener('change',runEvent);
select.addEventListener('input',runEvent);
//submit event
form.addEventListener('submit',runEvent);


function runEvent(event) {
    //prevents the page from working like html
    event.preventDefault();
    console.log('EVENT TYPE: '+ event.type);
    console.log(event.target.value);  
}

// output.innerHTML = '<h3>MouseX: '+event.offsetX+'</h3><h3>MouseY: '+ event.offsetY+ '</h3'; 
// box.style.backgroundColor = "rgb("+event.offsetX+","+event.offsetY+", 40)";