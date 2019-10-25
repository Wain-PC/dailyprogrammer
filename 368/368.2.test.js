const { solve, check, print } = require("./368.2");

describe("368.2", () => {
  for (let i = 1; i <= 10; i++) {
    it(`should solve a matrix with size = ${i}`, () => {
      const matrix = solve(i);
      expect(check(matrix)).toBe(true);
      print(matrix);
    });
  }
});
