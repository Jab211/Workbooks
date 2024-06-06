"use strict";
let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];


const displayButton = document.getElementById("displayButton");
const footballTeams = document.getElementById("footballTeams");
const messageParagraph = document.getElementById("messageParagraph");


function init() {
  for (const team of teams) {
    const option = document.createElement("option");
    option.value = team.code;
    option.innerText = team.name;
    footballTeams.appendChild(option);
  }
 
}

function teamInfo() {
  const teamCode = footballTeams.value;
  for (const team of teams) {
    if (team.code === teamCode) {
      const details = `The ${team.name} (${team.code}) plays in ${team.plays}`;
      const details1 = `The dallas cowboys (DAL) plays in Dallas, TX` ;
      messageParagraph.innerText = details;
      
    
    }
  }
}

 displayButton.onclick = teamInfo;

window.onload = init;