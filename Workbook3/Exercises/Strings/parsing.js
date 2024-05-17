"use strict"
let fullName = "Brenda Kaye";

let  positionOfSpace = fullName.indexOf(" ");
let firstName = fullName.substring(0, positionOfSpace)
let lastName = fullName.substring(positionOfSpace + 1)
// let lastName = fullName.lastIndexOf(" ")

// console.log(positionOfSpace);
console.log(firstName);
console.log(lastName);

// let message = "Your first name is " + firstName + " and your last name is " + lastName + "."

let message =`Your first name is ${firstName} and your last name is ${lastName}.`  
console.log(message);

// "Your first name is Julien and your last name is Ilboudo."


// middle name output

// let name = "Christopher MickeyMouse Johnson";
// let positionOfSpace = name.indexOf(" ");
// let positionOfSpaceEnd = name.lastIndexOf(" ");
// let firstName = name.substring(0, positionOfSpace);
// let middleName = name.substring(positionOfSpace + 1, positionOfSpaceEnd);
// let lastName = name.substring(positionOfSpaceEnd + 1);

// console.log(firstName);
// console.log(middleName);
// console.log(lastName);