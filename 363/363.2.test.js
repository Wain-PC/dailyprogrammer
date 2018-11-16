const { solve } = require('./363.2');

describe('363.2', () => {
  const examples = [
    ['mistranslate', 'mis-trans-late'],
    ['alphabetical', 'al-pha-bet-i-cal'],
    ['bewildering', 'be-wil-der-ing'],
    ['buttons', 'but-ton-s'],
    ['ceremony', 'cer-e-mo-ny'],
    ['hovercraft', 'hov-er-craft'],
    ['lexicographically', 'lex-i-co-graph-i-cal-ly'],
    ['programmer', 'pro-gram-mer'],
    ['recursion', 're-cur-sion'],
  ];

  examples.forEach(([input, expectedResult]) => {
    it(`should solve main task (input '${input}')`, async () => {
      const result = await solve(input);
      expect(result).toBe(expectedResult);
    });
  });
});
