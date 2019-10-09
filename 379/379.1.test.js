const { solve, bonus1 } = require('./379.1');

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


  describe('bonus1', () => {
    const examples1 = [
      {
        query: 0,
        answer: 0,
      },
      {
        query: 0.06,
        answer: 25000,
      },
      {
        query: 0.09,
        answer: 34375,
      },
      {
        query: 0.32,
        answer: 256250,
      },
      {
        query: 0.40,
        answer: NaN,
      },

    ];
    const windowSize = 10;

    examples1.forEach(({ query, answer }, i) => {
      it(`should solve example ${i}`, () => {
        const result = bonus1(query);

        if (Number.isNaN(answer)) {
          expect(result).toBeNaN();
          return;
        }

        expect(result).toBeGreaterThanOrEqual(answer - windowSize / 2);
        expect(result).toBeLessThanOrEqual(answer + windowSize / 2);
      });
    });
  });
});
