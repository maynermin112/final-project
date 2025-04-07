function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

const dataPoints = [4.5, 6.2, 8.7, 10.3];
console.log(calculateAverage(dataPoints));
