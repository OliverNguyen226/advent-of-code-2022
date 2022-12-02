function addCalc(input) {
  return input.reduce((p, c) => Number(p) + Number(c), 0);
}

function findMax(input) {
  return input.reduce((p, c) => (Number(p) > Number(c) ? p : c));
}

function findWeight(elves) {
  return findMax(elves.map(addCalc));
}

module.exports = findWeight;
