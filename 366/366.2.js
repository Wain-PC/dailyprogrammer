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

module.exports = { funnel2, funnel2bonus };
