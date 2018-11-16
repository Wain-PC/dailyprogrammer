const { EOL } = require('os');
const { get } = require('../utils/file');

const solve = async (input) => {
  const patterns = (await get('./363/patterns.txt')).split(EOL);
  console.log(patterns);
  const weights = Array(input.length - 1).fill(0);
  patterns.forEach((pattern) => {
    // TODO: Apply each pattern to the input.
    // If the patterns fills, its numbers should be put to `weights` array
    // (only if the current weight on the corresponding position is less than ours
  });

  // Construct output string
  return input.split('').reduce((arr, letter, index) => {
    arr.push(letter);
    if (weights[index]) {
      arr.push('-');
    }
    return arr;
  }, []).join('');
};
const bonus = () => {};

module.exports = { solve, bonus };
