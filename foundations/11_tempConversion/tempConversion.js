function convertToCelsius(farenheit){
  celsius = (farenheit-32) * 5/9;
  return Number(celsius.toFixed(1));
}

function convertToFahrenheit(celcius){
  farenheit = (celcius * 9/5) + 32;
  return Number(farenheit.toFixed(1))
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
