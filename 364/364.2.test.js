const { solve } = require("./364.2");

describe("364.2", () => {
  const examples = [
    [1, 5, 7, 9, 9],
    [1, 2, 1, 2, 1, 0],
    [10, 12, 41, 62, 31, 50],
    [10, 12, 41, 62, 31]
  ];

  examples.forEach(example =>
    it(`should solve example ${example}`, () => {
      expect(solve(example)).toMatchSnapshot();
    })
  );
});
