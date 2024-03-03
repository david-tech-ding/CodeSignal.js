function solution(trainingData) {
  let totalTime = 0;
  let numCorrect = 0;
  for (let [answerTime, correctness] of trainingData) {
    if (correctness === 1) {
      totalTime += answerTime;
      numCorrect++;
    }
  }
  if (numCorrect === 0) {
    return 0;
  }
  return totalTime / numCorrect;
}
