function getRandomInt(max) {
  Math.floor(Math.random() * (max - 0 + 1)) + 0;
}

var colors = ["red", "yellow", "green", "blue", "orange"];
for (var i = 0; i < colors.length; i++) {
  console.log("Random color: " + getRandomInt(colors.length));
}
