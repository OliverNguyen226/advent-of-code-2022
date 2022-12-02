const fs = require("fs").promises;
const calcTotalScore = require("./solution.js");

fs.readFile("./input.txt", "utf8")
  .then((res) => res.split("\n"))
  .then((res) => res.map((w) => w.split(" ")))
  .then((res) => {
    console.log(calcTotalScore(res));
  });

// 15572
