function solution(systemNames, stepNumbers) {
  //use empty object to store previous step number for each respective system
  const prevStep = {};

  //loop through systemsNames and stepNumbers (same length)
  for (i = 0; i < systemNames.length; i++) {
    const system = systemNames[i];
    const step = stepNumbers[i];

    //check if current system has been previously encountered
    if (prevStep.hasOwnProperty(system)) {
      //if current step is less than previous step number of system, it is not strictly increasing hence its false
      if (step <= prevStep[system]) return false;
    }
    //if true then set previous step to become current step
    prevStep[system] = step;
  }
  return true;
}
