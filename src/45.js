function randomCodeGenerator() {
  // Randomly select one of the following codes
  const codes = [
    "abcdef1234567890", // example 1
    "123456abcdef",      // example 2
    "e1cdef6a7b8f",     // example 3
    "C#js code",        // example 4
    "abcde567890"       // example 5
  ];

  return codes[Math.floor(Math.random() * codes.length)];
}
