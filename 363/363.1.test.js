const { solve, bonus } = require('./363.1');

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

  it('should solve bonus task', async () => {
    const result = await bonus();
    expect(result).toBe(2169);
  });
});
