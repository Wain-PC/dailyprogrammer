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
      console.log(answer);
      expect(stringContainsEachLetterOnce(answer)).toBe(true);
    });
  });
});
