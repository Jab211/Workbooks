"use strict";

function convertFtoC(fahrenheitTemperature) {
  let celsiusTempature = ((fahrenheitTemperature - 32) * 5) / 9;
  return celsiusTempature;
}
var fahrenheitTemperature = 77;
let celsiusTempature = convertFtoC(fahrenheitTemperature);

console.log(
  "The fahrenheit temperature of " +
    fahrenheitTemperature +
    " is " +
    celsiusTempature +
    " celsius."
);
