const { solve } = require('./361.1');

describe('361.1', () => {
  const examples = [
    ['abcde', {
      a: 1, b: 1, c: 1, d: 1, e: 1,
    }],
    ['dbbaCEDbdAacCEAadcB',
      {
        b: 2, d: 2, a: 1, c: 0, e: -2,
      }],
    ['EbAAdbBEaBaaBBdAccbeebaec',
      {
        a: 1, b: 0, c: 3, d: 2, e: 1,
      }],
  ];
  examples.forEach(([input, expectedOutput], i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(input)).toEqual(expectedOutput);
    });
  });
});
