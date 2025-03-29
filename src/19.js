function getRandomInt(max) {
  var max = Math.ceil(Math.min(max || 0, 2147483647));
  var randomNum = Math.floor(Math.random() * (max - 1)) + 1;
  return randomNum;
}

// Example usage:
var randomNumber = getRandomInt(100);
console.log(randomNumber); // Outputs a random integer between 1 and 100
