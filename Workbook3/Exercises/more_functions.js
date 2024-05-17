"Use strict";

function displayMailingLabel(name, address, city, state, zip) {
  console.log(name);
  console.log(address);
  console.log(city + ",", state, zip);
}
displayMailingLabel(
  "Jason",
  "1234 Main St",
  "Guttenberg",
  "New Jersey",
  "14525"
);
displayMailingLabel("D", "6th St", "Guttenberg", "New Jersey", "68543");
