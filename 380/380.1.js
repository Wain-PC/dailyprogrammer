const { array } = require('../utils/enable1');

const codes = '.- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..'
  .split(' ')
  .reduce((acc, code, index) => {
    acc[String.fromCharCode(index + 97)] = code;
    return acc;
  }, {});

const getMorseCodeForLetter = letter => codes[letter];


const solve = word => word.split('').map(getMorseCodeForLetter).join('');


const bonus1 = async () => {
  const words = await array();
  const acc = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const morse = solve(word);
    if (!acc[morse]) {
      acc[morse] = [word];
    } else {
      acc[morse].push(word);
      if (acc[morse].length === 13) {
        return morse;
      }
    }
  }

  return null;
};

const bonus2 = async () => {
  const words = await array();
  const fifteenDashes = '-'.repeat(15);
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (solve(word).includes(fifteenDashes)) {
      return word;
    }
  }
  return null;
};


const wordHasEqualDashesAndDots = (word) => {
  const morse = solve(word);
  // eslint-disable-next-line no-bitwise
  const result = morse.split('').reduce((acc, letter) => {
    if (!acc[letter]) {
      acc[letter] = 1;
    } else {
      acc[letter] += 1;
    }
    return acc;
  }, {});
  return result['-'] === result['.'];
};

const bonus3 = async () => {
  const words = await array();
  const res = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length !== 21) {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (wordHasEqualDashesAndDots(word)) {
      res.push(word);
    }
  }
  return res;
};

const isMorsePalindrome = (word) => {
  const morse = solve(word);
  return morse === morse.split('').reverse().join('');
};

const bonus4 = async () => {
  const words = await array();
  const res = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length !== 13) {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (isMorsePalindrome(word)) {
      res.push(word);
    }
  }
  return res;
};


const padRight = (str, requiredLength, padding = '.') => {
  const diff = requiredLength - str.length;
  if (diff <= 0) {
    return str;
  }

  return str + padding.repeat(diff);
};

const morsePermutations = (length) => {
  const arr = [];
  const deep = (level = 0, str = '') => {
    if (level === length) {
      return;
    }
    arr.push(padRight(`${str}.`, length, '.'));
    arr.push(padRight(`${str}-`, length, '.'));

    deep(level + 1, `${str}.`);
    deep(level + 1, `${str}-`);
  };

  deep();
  return arr;
};

const morseCodesIncludePart = (list, part) => list.some(code => code.includes(part));

const bonus5 = async () => {
  const words = await array();
  const morseCodes = Object.keys(words.reduce((acc, word) => {
    acc[solve(word)] = true;
    return acc;
  }, {}));

  const permutations = morsePermutations(13);

  return permutations.reduce((acc, perm) => {
    if (!morseCodesIncludePart(morseCodes, perm)) {
      acc.push(perm);
    }
    return acc;
  }, []);
};


module.exports = {
  solve, bonus1, bonus2, bonus3, bonus4, bonus5,
};
