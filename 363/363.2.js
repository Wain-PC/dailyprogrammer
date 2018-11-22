const { EOL, cpus } = require('os');
const { Worker } = require('worker_threads');
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

const getTrie = async () => (await getPatterns()).reduce((accumulator, props) => {
  let tree = accumulator;
  props.text.split('').forEach((letter, index) => {
    if (!tree[letter]) {
      tree[letter] = {}; // eslint-disable-line no-param-reassign
    }
    if (index === props.text.length - 1) {
      tree[letter].matches = tree[letter].matches || []; // eslint-disable-line no-param-reassign
      tree[letter].matches.push(props);
    }
    tree = tree[letter];
  });
  return accumulator;
}, {});

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

const solveTrie = (input, tree) => {
  // walk each letter of the word and then BFS within the tree to find the deepest path.
  // Then apply all patterns that come across while traversing
  const weights = Array(input.length - 1).fill(0);
  const split = input.split('');
  for (let i = 0; i < split.length; i++) {
    let t = tree;
    split.slice(i).every((letter) => {
      if (!t[letter]) {
        return false;
      }
      if (t[letter].matches) {
        t[letter].matches.forEach(({
          starts, ends, text, hyphens,
        }) => {
          if (
            (starts && i === 0)
            || (ends && i === input.length - text.length)
            || (!starts && !ends)) {
            hyphens.forEach(({ weight, offset }) => {
              const weightOffset = i + offset;
              if (weights[weightOffset] < weight) {
                weights[weightOffset] = weight;
              }
            });
          }
        });
      }
      t = t[letter];
      return true;
    });
  }

  // Construct output string
  return split.reduce((arr, l, i) => {
    arr.push(l);
    if (weights[i] % 2 === 1) {
      arr.push('-');
    }
    return arr;
  }, []).join('');

  // After having all available hyphens
};


const bonus = async () => {
  const words = await array();
  const tree = await getTrie();
  const solver = word => solveTrie(word, tree).split('-').length - 1;
  return words.map(solver).reduce((countArr, hyphens) => {
    countArr[hyphens]++; // eslint-disable-line no-param-reassign
    return countArr;
  }, Array(10).fill(0));
};

const bonusLong = async () => {
  const words = await array();
  const patterns = await getPatterns();
  const solver = word => solve(word, patterns).split('-').length - 1;
  return words.map(solver).reduce((countArr, hyphens) => {
    countArr[hyphens]++; // eslint-disable-line no-param-reassign
    return countArr;
  }, Array(10).fill(0));
};

module.exports = {
  solve, solveTrie, bonus, bonusLong, getPatterns, getTrie,
};
