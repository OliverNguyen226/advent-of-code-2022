function addCalc(input) {
  return input.reduce((p, c) => Number(p) + Number(c), 0);
}

function findMax(input) {
  return input.reduce((p, c) => (Number(p) > Number(c) ? p : c));
}

function findMaxes(input, num = 1) {
  const maxes = input.splice(0, num).sort();
  input.forEach((e) => {
    if (e > maxes[maxes.length - 1]) {
      maxes.shift();
      maxes.push(e);
    }
  });
  return addCalc(maxes);
}

function findWeight(elves) {
  return findMax(elves.map(addCalc));
}

function findMultiWeights(elves) {
  return findMaxes(elves.map(addCalc), 3);
}

module.exports = { findWeight, findMultiWeights };
