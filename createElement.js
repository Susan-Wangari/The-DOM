//used to create a new element
//create a paragraph
const para = document.createElement('p');
//add content
para.textContent ='I love my life';

//add a list of languages to the document body
let languages = document.createElement('ol');
document.body.appendChild(languages);

let lang1 = document.createElement('li');
lang1.textContent = "JavaScript";
languages.appendChild(lang1);

let lang2 = document.createElement('li');
lang2.textContent="Python";
languages.appendChild(lang2);