const ftoc = function(temp) {
  let celsius = (temp - 32) * 5 / 9;
  if (celsius == Math.round(celsius)) {
    return celsius;
  }
  return parseFloat(celsius.toFixed(1));
}

const ctof = function(temp) {
  let fahrenheit = (temp * 9 / 5) +32;
  if (fahrenheit == Math.round(fahrenheit)) {
    return fahrenheit;
  }
  return parseFloat(fahrenheit.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
