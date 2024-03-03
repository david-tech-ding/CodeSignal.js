function solution(xp) {
  //first map a new queue with index and with xp value and sort it by xp value
  //i.e. [[2, 70], [1, 100], [4, 100], [3, 130], [0, 200], [5, 800], [6, 810]]
  const queue = xp
    .map((val, index) => [index, val])
    .sort((a, b) => a[1] - b[1]);
  //declare a matches array to store ans
  const matches = [];

  //when queue has more than 2 elements, we loop through
  while (queue.length >= 2) {
    let minDist = Infinity;
    let pair;
    //if difference between xp of a pair is less than min_dist
    for (i = 0; i < queue.length - 1; i++) {
      let [id0, xp0] = queue[i];
      let [id1, xp1] = queue[i + 1];
      if (xp1 - xp0 < minDist) {
        minDist = xp1 - xp0;
        pair = [
          [id0, xp0],
          [id1, xp1],
        ];
      }
    }
    //push player of the pair (not xp) to the queue
    matches.push(pair.map((p) => p[0]).sort((a, b) => a - b));

    //if pair has been found, remove it from queue
    //we first iterate over the pair array, then compare the index of pair[0] to index of queue and if index > -1, we remove the index from queue
    pair.forEach((p) => {
      let index = queue.findIndex((i) => i[0] === p[0]);
      if (index > -1) queue.splice(index, 1);
    });
  }
  return matches;
}
