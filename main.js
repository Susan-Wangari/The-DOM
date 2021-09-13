//selecting the form
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');
//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click',removeItem);
//filter event
filter.addEventListener('keyup', filterItems);

//add item function
function addItem (ev) {
     ev.preventDefault();
     //getting the input value
     let textInput = document.getElementById('text').value;
     //create a new li element
     let listItem = document.createElement('li');
     listItem.className = 'list-group-item';
     //adding a text node with input value
     listItem.appendChild(document.createTextNode(textInput));
     //create delete button/element
     let delBtn = document.createElement('button'); 
     //add classes to delete button
     delBtn.className = 'btn btn-danger btn-sm float-right delete';
     //add text node
     delBtn.appendChild(document.createTextNode('X'));
     //adding the button to the li 
     listItem.appendChild(delBtn); 
     //append li to list
     itemList.appendChild(listItem);
     console.log(listItem);
}
//remove items function
function removeItem(ev) {
    if(ev.target.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
            let listItem = ev.target.parentElement;
            itemList.removeChild(listItem);
        }
        console.log(1);
    }
}

//filter items
function filterItems(ev){
    //convert to lowercase
    let text = ev.target.value.toLowerCase();
    //get list
  let items = itemList.getElementsByTagName('li');
  //turn to an array for easier manipulation
  Array.from(items).forEach(function(item) {
      let itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = "block";
      } else {
          item.style.display = "none";
      }
      console.log(itemName);
  });
}