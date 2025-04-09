function getRandomInt(min, max) {
    min = Math.ceil(Math.random() * (max - 0 + 1));
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
