function solution(s) {
  let countMap = new Map();

  for (const char of s) {
    countMap.set(char, (countMap.get(char) || 0) + 1);
  }

  for (const char of s) {
    if (countMap.get(char) === 1) {
      return char;
    }
  }
  return '_';
}

//easy solution
