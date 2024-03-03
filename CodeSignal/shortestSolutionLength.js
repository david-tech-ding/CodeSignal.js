function solution(source) {
  let totalLength = 0;
  let inBlockComment = false;

  //we iterate over each line of source
  for (const line of source) {
    let i = 0;
    //if we are in the block comment we want to set it back to false if we reach the end of it
    while (i < line.length) {
      if (inBlockComment) {
        if (line.substring(i, i + 2) === '*/') {
          inBlockComment = false;
          i += 2;
        } else {
          i++;
        }
        //if we are in // we want to break and ignore everything else after //
      } else {
        if (line.substring(i, i + 2) === '//') {
          break;
          //if we just entered the block comment then we set inBlockComment to true and increment i by 2
        } else if (line.substring(i, i + 2) === '/*') {
          inBlockComment = true;
          i += 2;
          //finally, if element is not a space i.e. ' ' then we increment totalLength
        } else if (line[i] !== ' ') {
          totalLength++;
        }
        i++;
      }
    }
  }
  return totalLength;
}
