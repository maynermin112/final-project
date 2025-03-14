function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const numbers = [];
for (let i = 0; i < 100; i++) {
  const randomNumber = getRandomInt(100);
  if (!numbers.includes(randomNumber)) {
    numbers.push(randomNumber);
  }
}
console.log(numbers);
