const { solve } = require("./365.2");
const { get } = require("../utils/file");

describe("365.2", () => {
  it("should solve example 1", async () => {
    const input = await get("./365/test1.txt");
    const expectedResult = await get("./365/result1.txt");
    expect(solve(input)).toBe(expectedResult);
  });
  it("should solve example 2", async () => {
    const input = await get("./365/test2.txt");
    const expectedResult = await get("./365/result2.txt");
    expect(solve(input)).toBe(expectedResult);
  });
});
