const { solve, bonus1, bonus2 } = require('./380.2');

describe('380.2', () => {
  const examples = [

    {
      query: '.--...-.-.-.....-.--........----.-.-..---.---.--.--.-.-....-..-...-.---..--.----..',
    },

    {
      query: '.----...---.-....--.-........-----....--.-..-.-..--.--...--..-.---.--..-.-...--..-',
    },

    {
      query: '..-...-..-....--.---.---.---..-..--....-.....-..-.--.-.-.--.-..--.--..--.----..-..',
    },

  ];

  const stringContainsEachLetterOnce = (string) => {
    const acc = {};
    return string.length === 26 && string.split('').every((letter) => {
      const alreadyFound = acc[letter];
      acc[letter] = true;
      return !alreadyFound;
    });
  };

  examples.forEach(({ query }, i) => {
    it(`should solve example ${i}`, () => {
      const answer = solve(query);
      // eslint-disable-next-line no-console
      console.log(answer);
      expect(stringContainsEachLetterOnce(answer)).toBe(true);
    });
  });


  describe('bonus1', () => {
    it('should solve', async () => {
      const result = await bonus1();
      result.forEach((answer) => {
        // eslint-disable-next-line no-console
        console.log(answer);
        expect(stringContainsEachLetterOnce(answer)).toBe(true);
      });
    });
  });
});
