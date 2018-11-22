const { solve } = require('./363.1');

describe('363.1', () => {
  const examples = [
    ['a', true],
    ['zombie', true],
    ['transceiver', true],
    ['veil', false],
    ['icier', false],
  ];


  examples.forEach(([input, expectedResult]) => {
    it(`should solve main task (input '${input}')`, () => {
      const result = solve(input);
      expect(result).toBe(expectedResult);
    });
  });
});
