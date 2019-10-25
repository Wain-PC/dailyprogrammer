const solve = require("./355.2");

describe("355.2", () => {
  it("should pass example 1", () => {
    expect(solve(10, 14, 10, 42, 24)).toBe(3);
  });
  it("should pass example 2", () => {
    expect(solve(12, 4, 40, 30, 40)).toBe(8);
  });
  it("should pass example 3", () => {
    expect(solve(12, 14, 20, 42, 24)).toBe(6);
  });
});
