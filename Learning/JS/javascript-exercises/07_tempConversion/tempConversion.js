function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const convertToCelsius = function(farenheit) {
  let celsius = (farenheit-32)*(5/9);
  celsius = round(celsius,1);
  return celsius
};

const convertToFahrenheit = function(celsius) {
  let farenheit = (celsius*(9/5))+32;
  farenheit = round(farenheit,1);
  return farenheit
};


// // Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
