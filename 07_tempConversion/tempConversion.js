const convertToCelsius = function() {
  let val = arguments[0];
  let celsius = (val - 32)/1.8;
  return celsius.toFixed(1);
};

const convertToFahrenheit = function() {
  let val = arguments[0];
  let fahrenheit = (val * 1.8) + 32;
  return fahrenheit.toFixed(1);
};

console.log(convertToCelsius(32));
console.log(convertToCelsius(100));
console.log(convertToCelsius(-100));

console.log(convertToFahrenheit(0));
console.log(convertToFahrenheit(73.2));
console.log(convertToFahrenheit(-10));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
