"use strict";

window.onload = function () {
  // HTML element variables
  const userTableBody = document.querySelector("#userTableBody");
};
// let users = fetch("https://jsonplaceholder.typicode.com/users")
//functions
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    for (const user of users) {
      buildTableRow(user);
    }
  });

function buildTableRow(user) {
  let row = userTableBody.insertRow();

  let cell1 = row.insertCell();
  cell1.innerText = user.id;

  let cell2 = row.insertCell();
  cell2.innerText = user.name;

  let cell3 = row.insertCell();
  cell3.innerText = user.username;

  let cell4 = row.insertCell();
  cell4.innerText = user.email;

  let cell5 = row.insertCell();
  cell5.innerText = user.phone;

  let cell6 = row.insertCell();
  cell6.innerText = user.company.catchPhrase;
}
// https://jsonplaceholder.typicode.com/users
