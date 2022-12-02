// A = X = Rock = 1 pt
// B = Y = Paper = 2 pts
// C = Z = Scissors = 3 pts
// Loss = 0 pts
// Draw = 3 pts
// Win = 6 pts

// A ? 1 = 3, A ? 2 = 6, A ? 3 = 0
// A:Z, Z:B, B:X
const shapeScore = {
  X: 1,
  Y: 2,
  Z: 3,
};

function addCalc(input) {
  return input.reduce((p, c) => Number(p) + Number(c), 0);
}

function roundScoreCalculator([elf, me]) {
  let score = 0;
  switch (elf) {
    case "A":
      switch (me) {
        case "X":
          score += 3;
          break;
        case "Y":
          score += 6;
          break;
        case "Z":
          score += 0;
          break;
      }
      break;
    case "B":
      switch (me) {
        case "X":
          score += 0;
          break;
        case "Y":
          score += 3;
          break;
        case "Z":
          score += 6;
          break;
      }
      break;
    case "C":
      switch (me) {
        case "X":
          score += 6;
          break;
        case "Y":
          score += 0;
          break;
        case "Z":
          score += 3;
          break;
      }
      break;
  }
  score += shapeScore[me];
  return score;
}

function calcTotalScore(rounds) {
  return addCalc(rounds.map(roundScoreCalculator));
}

module.exports = calcTotalScore;
