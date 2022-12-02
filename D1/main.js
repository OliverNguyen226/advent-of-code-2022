const fs = require("fs").promises;
const { findWeight, findMultiWeights } = require("./solution.js");

// Part 1
fs.readFile("./input.txt", "utf8")
  .then((res) => res.split("\n\n"))
  .then((res) => res.map((w) => w.split("\n")))
  .then((res) => {
    console.log(findWeight(res));
  });
// 69206

// Part 2
fs.readFile("./input.txt", "utf8")
  .then((res) => res.split("\n\n"))
  .then((res) => res.map((w) => w.split("\n")))
  .then((res) => {
    console.log(findMultiWeights(res));
  });
// 197400
