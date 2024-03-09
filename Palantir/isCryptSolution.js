const solution = (crypt, solution) => {
  //declare a map for the next logic
  const numMap = new Map(solution);

  //convert each element in crypt into a number based on numMap
  const numbers = crypt.map((word) => {
    const numStr = word
      .split('')
      .map((char) => numMap.get(char))
      .join('');
    return numStr;
  });

  //base case
  for (const num of numbers) {
    if (num.length > 1 && num[0] === '0') {
      return false;
    }
  }

  //check all conditions are met
  return parseInt(numbers[0]) + parseInt(numbers[1]) === parseInt(numbers[2]);
};
