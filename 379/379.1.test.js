const { solve } = require('./379.1');

describe('379.1', () => {
  const examples = [
    {
      query: 0,
      answer: 0,
    },

    {
      query: 10000,
      answer: 0,
    },

    {
      query: 10009,
      answer: 0,
    },

    {
      query: 10010,
      answer: 1,
    },

    {
      query: 12000,
      answer: 200,
    },

    {
      query: 56789,
      answer: 8697,
    },

    {
      query: 1234567,
      answer: 473326,
    },

  ];

  examples.forEach(({ query, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(query)).toEqual(answer);
    });
  });
});
