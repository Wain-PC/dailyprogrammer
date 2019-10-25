const { solve, bonus } = require("./369.1");

describe("369.2", () => {
  const examples = [
    [255, 99, 71, "#FF6347"],
    [184, 134, 11, "#B8860B"],
    [189, 183, 107, "#BDB76B"],
    [0, 0, 205, "#0000CD"]
  ];

  examples.forEach(([r, g, b, hex], i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(r, g, b)).toBe(hex);
    });
  });
  const bonusExamples = [
    ["#3C444D", "#000000", "#778899"],
    ["#DCB1D9", "#E6E6FA", "#FF69B4", "#B0C4DE"]
  ];

  bonusExamples.forEach(([result, ...colors], i) => {
    it(`should solve bonus example ${i}`, () => {
      expect(bonus(...colors)).toBe(result);
    });
  });
});
