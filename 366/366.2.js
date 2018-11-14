const { object, array } = require('../utils/enable1');
const { bonus } = require('./366.1');

const funnel2 = async (input, length = 1, w) => {
  const wordsObj = w || await object();
  if (input.length <= 2) {
    return length;
  }
  // Get a list of funnels for the current word.
  const funnels = await bonus(input, wordsObj);
  if (!funnels.length) {
    return length;
  }
  // For each of the funnels, call funnel2 with increased length.
  const funnelsResults = funnels.map(funnelWord => funnel2(funnelWord, length + 1, wordsObj));
  // After receiving results, maximum funnel length wins.
  return Math.max(...(await Promise.all(funnelsResults)));
};

// Find a single funnel2 of length 10.
const funnel2bonus = async () => {
  // Funnel of length 10 can only be achieved with words having length of at least 11 chars.
  // (last word should have at least 2 characters).
  const arr = (await array()).filter(word => word.length >= 11);
  const obj = await object();
  const promiseArr = arr.map(
    word => funnel2(word, 1, obj).then(length => (length === 10 ? word : null)),
  );
  return (await Promise.all(promiseArr)).filter(w => w)[0];
};

// -------------------BONUS 2 STARTS HERE----------------------------

// Find words with funnel length = 12 if we can simultaneously remove 2 letters at each funnel step.
const funnel2bonus2 = async (depth) => {
  // Funnel of length 12 can only be achieved with words having length of at least 13 chars.
  // (last word should have at least 2 characters).
  const arr = (await array())
    .filter(word => word.length >= 13)
    .sort((w1, w2) => w2.length - w1.length);
  const obj = await object();

  const findPermutation = (word) => {
    const perms = [];
    for (let i = 0; i < word.length; i++) {
      perms.push(word.substr(0, i) + word.substr(i + 1, word.length));
    }
    return perms;
  };

  // Get valid N-step permutations.
  const permutations = (input, funnelLength, level = 0) => {
    // Stop looking for funnels which are obviously incorrect.
    if (input.length <= 12 - funnelLength) {
      return [];
    }
    const perms = findPermutation(input);

    if (level === depth) {
      return perms;
    }
    const output = perms.concat(...perms.map(word => permutations(word, funnelLength, level + 1)));
    if (level === 0) {
      // Filter the list to leave only unique valid funnels
      return output.filter((w, i, a) => obj[w] && a.indexOf(w) === i);
    }
    return output;
  };


  const fn = (word, length = 1) => {
    if (word.length <= 2) {
      return length;
    }
    // At each step, get array of possible permutations for the current word.
    const arrayOfPermutations = permutations(word, length).filter(w => w.length > 12 - length);
    // If there're no permutations left, return current length.
    if (!arrayOfPermutations.length) {
      return length;
    }
    // Otherwise, run the same step on each of the found words, then select max permutations length.
    return Math.max(...arrayOfPermutations.map(w => fn(w, length + 1)));
  };
  const outArr = [];
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    const length = fn(word);
    if (length === 12) {
      outArr.push(word);
    }
    if (outArr.length === 5) {
      return outArr;
    }
  }
  return outArr;
};

module.exports = { funnel2, funnel2bonus, funnel2bonus2 };
