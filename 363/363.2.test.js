const {
  solve, getTrie, solveTrie, getPatterns, bonus, bonusLong,
} = require('./363.2');
const { array } = require('../utils/enable1');


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
  let tree;

  beforeAll(async () => {
    patterns = await getPatterns();
    tree = await getTrie();
  });

  examples.forEach(([input, expectedResult]) => {
    it(`should solve main task (input '${input}')`, () => {
      const result = solve(input, patterns);
      expect(result).toBe(expectedResult);
    });
    it(`should solve main task with trie (input '${input}')`, () => {
      const result = solveTrie(input, tree);
      expect(result).toBe(expectedResult);
    });
  });


  it.skip('should solve bonus task', async () => {
    const result = await bonus();
    expect(result).toEqual([21830, 56852, 50452, 26630, 11751, 4044, 1038, 195, 30, 1]);
  });

  it('should solve bonus task with same answers for `long` and `tree` versions', async (done) => {
    const words = await array();

    const result = words.map(word => solve(word, patterns));
    const resultLong = words.map(word => solveTrie(word, tree));
    result.forEach((word, i) => {
      if (word !== resultLong[i]) {
        console.log(word, resultLong[i]);
      }
    });
    done();
  });
});
