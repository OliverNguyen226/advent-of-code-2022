const fs = require("fs").promises;
const findWeight = require("./solution.js");

fs.readFile("./input.txt", "utf8")
  .then((res) => res.split("\n\n"))
  .then((res) => res.map((w) => w.split("\n")))
  .then((res) => {
    console.log(findWeight(res));
  });

// 69206
