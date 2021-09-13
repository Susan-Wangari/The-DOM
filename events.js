let button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(event) {
    console.log('Successful');
    //using this to manipulate the dom
    document.getElementById('header-title').textContent = 'success';
    document.querySelector('#main').style.backgroundColor = 'grey'; 
    console.log(event);
    //shows the id of the target element
    // shows the target element
    console.log(event.target);
    // //shows the id of the target element
    console.log(event.target.id);
    // //shows the id of the target element
    console.log(event.target.className);
    // //an array of classes
    console.log(event.target.classList);
    let output = document.getElementById('output');
    output.innerHTML = '<h3>'+event.target.id+'</h3>';
    //position from the window
    console.log(event.clientX);
    //position from the actual element
    console.log(event.offsetX);
    // key events
    console.log(event.altKey);
    console.log(event.ctlKey);
    console.log(event.shiftKey);
}