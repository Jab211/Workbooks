"use strict";
fetch("https://jsonplaceholder.typicode.com/users/1")
.then((response) => response.json())
.then((user) => {
    console.log(user);
})

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((user) => {
    console.log(user);
})
fetch("https://jsonplaceholder.typicode.com/photo/1")
.then((response) => response.json())
.then((photo) => {
    console.log(photo);
})
fetch("https://jsonplaceholder.typicode.com/photos")
.then((response) => response.json())
.then((photos) => {
    console.log(photos);
})
