const { solve, bonus1, bonus2, bonus3, bonus4, bonus5 } = require("./380.1");

describe("380.1", () => {
  const examples = [
    {
      query: "sos",
      answer: "...---..."
    },

    {
      query: "daily",
      answer: "-...-...-..-.--"
    },

    {
      query: "programmer",
      answer: ".--..-.-----..-..-----..-."
    },

    {
      query: "bits",
      answer: "-.....-..."
    },

    {
      query: "three",
      answer: "-.....-..."
    }
  ];

  examples.forEach(({ query, answer }, i) => {
    it(`should solve example ${i}`, () => {
      expect(solve(query)).toEqual(answer);
    });
  });

  describe("bonus1", () => {
    it("should solve", async () => {
      const result = await bonus1();
      expect(result).toBe("-....--....");
    });
  });

  describe("bonus2", () => {
    it("should solve", async () => {
      const result = await bonus2();
      expect(result).toBe("bottommost");
    });
  });

  describe("bonus3", () => {
    it("should solve", async () => {
      const result = await bonus3();
      expect(result).toEqual([
        "counterdemonstrations",
        "overcommercialization"
      ]);
    });
  });

  describe("bonus4", () => {
    it("should solve", async () => {
      const result = await bonus4();
      expect(result).toEqual(["intransigence"]);
    });
  });

  describe("bonus5", () => {
    it("should solve", async () => {
      const result = await bonus5();
      expect(result).toEqual([
        "--.---.---.--",
        "--.---.------",
        "---.---.---.-",
        "---.---.-----",
        "---.----.----"
      ]);
    });
  });
});
