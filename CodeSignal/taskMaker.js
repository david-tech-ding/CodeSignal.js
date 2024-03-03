function solution(source, challengeId) {
  //declare the challenge string
  const challengeString = `//DB ${challengeId}//`;

  //use output to store answer
  const output = [];

  for (const line of source) {
    //if line starts with challengeString we take out last element in the stack and then replace challengeString with empty string
    if (line.trim().startsWith(challengeString)) {
      output.pop();
      output.push(line.replace(challengeString, ''));
    } else if (!line.trim().startsWith('//')) {
      output.push(line);
    }
  }
  return output;
}
