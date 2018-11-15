const roll = (input) => {
  const [dices, sides] = input.split('d');
  const output = [];
  for (let i = 0; i < dices; i++) {
    const value = Math.round(Math.random() * (sides - 1)) + 1;
    output.push(value);
  }
  return output;
};

const sum = input => input.reduce((a, b) => a + b, 0);

const solve = input => sum(roll(input));

const bonus = (input) => {
  const rolls = roll(input);
  const total = sum(rolls);
  return `${total}: ${rolls.join(' ')}`;
};

module.exports = { solve, bonus };
