function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Example usage:
const max = 10;
let result = getRandomInt(max);
console.log(result); // Output: a random integer between 0 and max-1

max = 50;
result = getRandomInt(max);
console.log(result); // Output: a random integer between 0 and max-1
