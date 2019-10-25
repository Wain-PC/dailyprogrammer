const { array } = require("../utils/enable1");

const solve = input => {
  const ie = /ie/gi;
  const ei = /ei/gi;
  let result;
  // If "ie" appears in a word, it must not immediately follow "c".
  do {
    result = ie.exec(input);
    if (result && input[result.index - 1] === "c") {
      return false;
    }
  } while (result);

  // If "ei" appears in a word, it must immediately follow "c".
  do {
    result = ei.exec(input);
    if (result && input[result.index - 1] !== "c") {
      return false;
    }
  } while (result);
  return true;
};

const bonus = async () =>
  (await array()).reduce((total, word) => total + +!solve(word), 0);

module.exports = { solve, bonus };
