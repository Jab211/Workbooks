"use strict";

function displayReceipt(totalDue, amountPaid) {
  let change = amountPaid - totalDue;
  console.log("Total Due: $" + totalDue);
  console.log("Amount Paid: $" + amountPaid);

  if (change > 0) {
    console.log("Change: $" + change.toFixed(2));
  } else if (change == 0) {
    console.log("No change needed");
  } else if (change < 0) {
    console.log("You still owe: $" + Math.abs(change).toFixed(2));
  }

  console.log();
}
displayReceipt(22.65, 40);
displayReceipt(22.65, 22.65);
displayReceipt(22.65, 15);
