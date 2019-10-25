const { array } = require("../utils/enable1");

const reverseCodes = ".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --.."
  .split(" ")
  .reduce((acc, code, index) => {
    acc[code] = String.fromCharCode(index + 97);
    return acc;
  }, {});

const getLetterForMorseCode = code => {
  if (reverseCodes[code]) {
    return reverseCodes[code];
  }
  return null;
};

const deep = (code, str = "") => {
  if (!code) {
    return str;
  }

  for (let i = 1; i <= 4; i++) {
    const codedLetter = code.slice(0, i);
    const letter = getLetterForMorseCode(codedLetter);
    if (letter && !str.includes(letter)) {
      const result = deep(code.slice(i), str + letter);
      if (result) {
        return result;
      }
    }
  }

  return null;
};

const solve = smooshedCode => deep(smooshedCode);

const bonus1 = async () => {
  const smooshedCodes = await array("./380/1000words.txt");
  return smooshedCodes.map(solve);
};

const bonus2 = smooshedCode => smooshedCode;

module.exports = { solve, bonus1, bonus2 };
