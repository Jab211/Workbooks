"use strict";

let myInfo = {
  name: "Jason B",
  address: "123 Main St",
  city: "St Paul",
  state: "NJ",
  zip: "43243",
};

function printContact(myInfo) {
  console.log(myInfo.name);
  console.log(myInfo.address);
  console.log(myInfo.city + ",", myInfo.state, myInfo.zip);
}
printContact(myInfo);
// printContact(myInfo.address);
// printContact(myInfo.city, myInfo.state, myInfo.zip);
