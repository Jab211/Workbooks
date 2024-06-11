"use strict";
const usersDataTable = document.querySelector("#usersDataTable");

function loadUserTableData(users) {
  for (const user of users) {
    buildTableRow(user);
  }
}

function buildTableRow(user) {
  let row = usersDataTable.insertRow();
  let cell1 = row.insertCell();
  cell1.innerText = user.name;

  let cell2 = row.insertCell();
  cell2.innerText = user.username;

  let cell3 = row.insertCell();
  cell3.innerText = user.email;

  let cell4 = row.insertCell();
  cell4.innerText = user.address.zipcode;

  let cell5 = row.insertCell();
  let editLink = document.createElement("a");
  editLink.href = "edit.html?id=" + user.id;
  editLink.innerText = "Edit";
  //   let editButton = document.createElement("button");

  cell5.appendChild(editLink);

  let cell6 = row.insertCell();
  let deleteLink = document.createElement("a");
  deleteLink.href = "delete.html?id=" + user.id;
  deleteLink.innerText = "Delete";
  cell6.appendChild(deleteLink);
}

function fetchAndDisplayUserData() {
  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((users) => {
      loadUserTableData(users);
    });
}
fetchAndDisplayUserData();
