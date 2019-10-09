const {
  solve, bonus1, bonus2, bonus3, bonus4, bonus5,
} = require('./380.1');

describe('380.1', () => {
  const examples = [

    {
      query: 'sos',
      answer: '...---...',
    },

    {
      query: 'daily',
      answer: '-...-...-..-.--',
    },

    {
      query: 'programmer',
      answer: '.--..-.-----..-..-----..-.',
    },

    {
      query: 'bits',
      answer: '-.....-...',
    },

    {
      query: 'three',
      answer: '-.....-...',
    },

  ];

  examples.forEach(({ query, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(query)).toEqual(answer);
    });
  });
});
