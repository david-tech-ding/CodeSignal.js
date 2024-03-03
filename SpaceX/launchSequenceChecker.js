function solution(systemNames, stepNumbers) {
  const prevStep = {};
  for (i = 0; i < systemNames.length; i++) {
    const system = systemNames[i];
    const step = stepNumbers[i];

    if (prevStep.hasOwnProperty(system)) {
      if (step <= prevStep[system]) return false;
    }
    prevStep[system] = step;
  }
  return true;
}
