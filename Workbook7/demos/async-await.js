"use strict";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((user) => {
    console.log(user);
  });

// async - notation that the function is going to: use await inside of it (i.e. call a function that returns a prmoise)

// await

async function loadUsers() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await response.json();
  console.log(users);
}
