const { object, array } = require('../utils/enable1');

const funnel = (input, expected) => {
  const { length } = input;
  if (length !== expected.length + 1) {
    return false;
  }
  return input.split('').some((letter, i) => input.substr(0, i) + input.substr(i + 1, length) === expected);
};

const bonus = async (input, obj) => {
  const dataObj = obj || await object();
  return input.split('').reduce((arr, letter, i) => {
    const newWord = input.substr(0, i) + input.substr(i + 1, input.length);
    if (dataObj[newWord] && !arr.includes(newWord)) {
      arr.push(newWord);
    }
    return arr;
  }, []);
};
const bonus2 = async () => {
  const outArr = [];
  const promiseArr = [];
  const dataArr = await array();
  const dataObj = await object();

  dataArr.forEach((word) => {
    if (word.length < 5) {
      return;
    }
    promiseArr.push(bonus(word, dataObj).then(words => (words.length === 5 ? word : null)));
  });

  const wordsArr = await Promise.all(promiseArr);
  return wordsArr.filter(word => word);
};

module.exports = { funnel, bonus, bonus2 };
