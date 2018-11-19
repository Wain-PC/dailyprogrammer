const { solve } = require('./363.2');

describe('363.2', () => {
  const examples = [
    ['buttons', 'but-ton-s'],
    ['bewildering', 'be-wil-der-ing'],
    ['programmer', 'pro-gram-mer'],
    ['mistranslate', 'mis-trans-late'],
    ['alphabetical', 'al-pha-bet-i-cal'],
    ['ceremony', 'cer-e-mo-ny'],
    ['hovercraft', 'hov-er-craft'],
    ['lexicographically', 'lex-i-co-graph-i-cal-ly'],
    ['recursion', 're-cur-sion'],
  ];

  examples.forEach(([input, expectedResult]) => {
    it(`should solve main task (input '${input}')`, async () => {
      const result = await solve(input);
      console.log(input, result);
      expect(result).toBe(expectedResult);
    });
  });
});
