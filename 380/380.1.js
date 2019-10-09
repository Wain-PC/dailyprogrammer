const codes = '.- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..'
  .split(' ')
  .reduce((acc, code, index) => {
    acc[String.fromCharCode(index + 97)] = code;
    return acc;
  }, {});

const getMorseCodeForLetter = letter => codes[letter];


const solve = word => word.split('').map(getMorseCodeForLetter).join('');


const bonus1 = word => word;

const bonus2 = word => word;

const bonus3 = word => word;

const bonus4 = word => word;

const bonus5 = word => word;


module.exports = {
  solve, bonus1, bonus2, bonus3, bonus4, bonus5,
};
