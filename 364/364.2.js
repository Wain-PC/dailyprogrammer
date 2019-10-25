const { sum } = require("./364.1");

const ducci = arr =>
  arr.map((value, index, array) => {
    const next = index === array.length - 1 ? 0 : index + 1;
    return Math.abs(value - array[next]);
  });

const solve = input => {
  let current = input;
  let counter = 1;
  const steps = [current];
  const visited = {};
  // eslint-disable-next-line no-constant-condition
  while (true) {
    current = ducci(current);
    const key = current.join(",");
    steps.push(current);
    counter++;
    if (visited[key] || sum(current) === 0) {
      return { counter, steps };
    }
    visited[key] = true;
  }
};

module.exports = { solve };
