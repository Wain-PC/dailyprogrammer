const funnel = (input, expected) => {
  const { length } = input;
  if (length !== expected.length + 1) {
    return false;
  }
  return input.split('').some((letter, i) => input.substr(0, i) + input.substr(i + 1, length) === expected);
};

module.exports = funnel;
