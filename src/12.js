  const getRandomNumber = () => {
    return Math.floor(Math.random() * 10) + 1;
  };
  
  let numbers = [];
  for (let i = 0; i < 5; i++) {
    numbers.push(getRandomNumber());
  }
  
  console.log(numbers);