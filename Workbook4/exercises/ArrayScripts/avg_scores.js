"use strict"

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100]; 

function getAverage(scores) {
    let total = 0;
    for (let index = 0; index < scores.length; index++) {
        total += scores[index];
        // total = total + scores
    }
    return total / scores.length;
}
let myAverage = getAverage(myScores);
console.log("My average score is: " + myAverage.toFixed(0));