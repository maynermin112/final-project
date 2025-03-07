function getRandomColor() {
  var colors = ["red", "blue", "green"];
  return colors[Math.floor(Math.random() * colors.length)];
}

console.log(getRandomColor());
