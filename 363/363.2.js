const { EOL } = require('os');
const { get } = require('../utils/file');
const { array } = require('../utils/enable1');

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

const solve = (input, patterns) => {
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

// Eh, this is slow as hell, takes approx. 8 minutes on an i7.
// But it yields a correct result at least.
// Could possibly multithread this or come up with a better algorithm (prefix tree?) (or both).
const bonus = async () => {
  const words = await array();
  const patterns = await getPatterns();
  const solver = word => solve(word, patterns).split('-').length - 1;
  return words.map(solver).reduce((countArr, hyphens) => {
    countArr[hyphens]++; // eslint-disable-line no-param-reassign
    return countArr;
  }, Array(10).fill(0));
};

module.exports = { solve, bonus, getPatterns };
