<script>
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[getRandomInt(letters.length)];
  }
  return color;
};

const randomColor = getRandomColor();
console.log(randomColor);
</script>
