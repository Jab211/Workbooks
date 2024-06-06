"use strict";

// HTML element variables
const idInput = document.querySelector("#idInput");
const displayButton = document.querySelector("#displayButton");
const infoParagraph = document.querySelector("#infoParagraph");
//functions

function displayTodo() {
    
//  user puts ID number in idInput
// user clicks displayButton

// computer recieves idInput value
const id = idInput.value

// computer builds the url which is http://jsonplaceholder.typicode.com/todos/ plus the input id value 
const url = "http://localhost:3000/todos/" + id
// computer calls api using url provided
fetch(url)
.then((response) => response.json ())
.then((todo) => {
    console.log(todo);
// computer display todo info 
infoParagraph.innerText = todo.title
})

} 


//event handling
displayButton.onclick = displayTodo;



//initial loading
