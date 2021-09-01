 const body = document.body;
 //adding a string to the body
 body.append("I am a software developer");

 //creates an element
 const div = document.createElement('div'); 
 //adding text to the element
 div.innerText = 'Hey There!';
 //or
 div.textContent = 'Hello';
//adding the element to the page
body.append(div);

