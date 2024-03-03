function solution(
  marathonLength,
  maxScore,
  submissions,
  successfulSubmissionTime
) {
  if (successfulSubmissionTime === -1) return 0;
  let unsuccessful = (submissions - 1) * 10;
  let penalty =
    (maxScore / 2) * (1 / marathonLength) * successfulSubmissionTime;
  let provAns = maxScore - unsuccessful - penalty;
  return provAns < maxScore / 2 ? maxScore / 2 : provAns;
}
