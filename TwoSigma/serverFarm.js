function solution(jobs, servers) {
  //initially we want to create an array of length servers to store each server's backlog
  let backlog = new Array(servers).fill(0);

  //we want to create an array of arrays to store index of each job
  let output = new Array(servers).fill().map(() => []);

  //we want to sort the jobs by descending order according to their processing times
  let reversedJobs = jobs
    .map((time, index) => ({ time, index }))
    .sort((a, b) => b.time - a.time);

  for (let job of reversedJobs) {
    //find the server with the shortest backlog
    let smallestBacklog = Math.min(...backlog);

    //then find the associated index
    let minIndex = backlog.indexOf(smallestBacklog);

    //then we assign the next job to the server with the smallest backlog
    output[minIndex].push(job.index);

    //finally update backlog
    backlog[minIndex] += job.time;
  }
  return output;
}
