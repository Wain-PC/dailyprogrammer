const { EOL } = require('os');
const { get } = require('../utils/file');

const getPatterns = async () => (await get('./363/patterns.txt'))
  .split(EOL)
  .filter(p => p)
  .map((pattern) => {
    const starts = pattern.indexOf('.') === 0;
    const ends = pattern.indexOf('.') === pattern.length - 1;
    const hyphens = [];
    const text = pattern
      .replace(/\./g, '')
      .replace(/\d+?/g, (n, o) => {
        hyphens.push({ weight: +n, offset: o - hyphens.length - 1 });
        return '';
      });
    return {
      starts, ends, text, hyphens,
    };
  });

const solve = async (input) => {
  const patterns = await getPatterns();
  const weights = Array(input.length - 1).fill(0);
  patterns.forEach(({
    starts, ends, text, hyphens,
  }) => {
    const re = new RegExp(text, 'gi');
    let match = re.exec(input);
    while (match) {
      const { index } = match;
      if (index === -1) {
        return;
      }
      if (
        (starts && index === 0)
        || (ends && index === input.length - text.length)
        || (!starts && !ends)) {
        hyphens.forEach(({ weight, offset }) => {
          const weightOffset = index + offset;
          if (weights[weightOffset] < weight) {
            weights[weightOffset] = weight;
          }
        });
      }
      match = re.exec(input);
    }
  });

  // Construct output string
  return input.split('').reduce((arr, letter, index) => {
    arr.push(letter);
    if (weights[index] % 2 === 1) {
      arr.push('-');
    }
    return arr;
  }, []).join('');
};
const bonus = () => {};

module.exports = { solve, bonus };
