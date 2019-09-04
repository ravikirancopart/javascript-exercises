const ftoc = function(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var rounded=Math.round( fToCel*10)/10
  var message =  rounded;
    return message;
}

const ctof = function(celsius) {
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var rounded=Math.round(  cToFahr*10)/10
  var message = rounded;
   return message;
}
console.log(ftoc(100));
console.log(ctof(73.2));
module.exports = {
  ftoc,
  ctof
}


