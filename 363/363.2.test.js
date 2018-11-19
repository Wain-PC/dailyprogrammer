const { solve, bonus, getPatterns } = require('./363.2');

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
  let patterns;

  beforeAll(async () => {
    patterns = await getPatterns();
  });

  examples.forEach(([input, expectedResult]) => {
    it(`should solve main task (input '${input}')`, async () => {
      const result = await solve(input, patterns);
      expect(result).toBe(expectedResult);
    });
  });

  it('should solve bonus task', async () => {
    const result = await bonus();
    expect(result).toEqual([21829, 56851, 50453, 26631, 11751, 4044, 1038, 195, 30, 1]);
  });
});
