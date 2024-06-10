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
  const id = idInput.value;

  // computer builds the url which is http://jsonplaceholder.typicode.com/todos/ plus the input id value
  const url = "http://localhost:3000/todos/" + id;
  // computer calls api using url provided
  fetch(url)
    .then((response) => response.json())
    .then((todo) => {
      console.log(todo);
      // computer display todo info

      infoParagraph.innerText = "";
      const todoTitle = document.createElement("h2");
      todoTitle.innerText = "Title: ";
      const titleParagraph = document.createElement("p");
      titleParagraph.innerText = todo.title;

      //   infoParagraph.innerText = todo.Title;

      const todoStatus = document.createElement("h2");
      todoStatus.innerText = "Status: ";
      const statusParagraph = document.createElement("p");
      statusParagraph.innerText = todo.completed;

      infoParagraph.appendChild(todoTitle);
      infoParagraph.appendChild(titleParagraph);
      infoParagraph.appendChild(todoStatus);
      infoParagraph.appendChild(statusParagraph);
      //   infoParagraph.innerText = todo.todoStatus;
      //   Maybe a few ways on how to do it below

      //   const todoInfo =`Title: ${url.title}  Status: ${url.completed}`;
      //   infoParagraph.innerText = `Title: ${todo.title}  Status: ${todo.completed}`
      //   infoParagraph.innertext = todoInfo;
    });
}

//event handling
displayButton.onclick = displayTodo;

//initial loading
