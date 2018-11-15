const { solve, bonus } = require('./364.1');

describe('364.1', () => {
  const examples = ['5d12', '6d4', '1d2', '1d8', '3d6', '4d20', '100d100'];

  examples.forEach((input) => {
    it(`should solve main task (input '${input}')`, () => {
      const [dices, sides] = input.split('d');
      const result = solve(input);
      expect(result).toBeGreaterThanOrEqual(+dices);
      expect(result).toBeLessThanOrEqual(+dices * +sides);
    });

    it(`should solve bonus task (input '${input}')`, () => {
      const [dices, sides] = input.split('d');
      const result = bonus(input);
      const [sum, rest] = result.split(':');
      const rolls = rest.split(' ').filter(s => s);
      expect(+sum).toBeGreaterThanOrEqual(+dices);
      expect(+sum).toBeLessThanOrEqual(+dices * +sides);
      rolls.forEach((r) => {
        expect(+r).toBeGreaterThanOrEqual(1);
        expect(+r).toBeLessThanOrEqual(+sides);
      });
    });
  });
});
