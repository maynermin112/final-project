function getRandomInt(min, max) {
  min = Math.ceil((min - 1) / 2);
  max = Math.floor(max / 2);

  if (max < min)
    return getRandomInt(min, max + 1);

  var base = (min * 3 > max) ? max : base = (min * 3 + 1);
  return (Math.random() * ((max - base) / (max - base - (base + 1)))) + base;
}
