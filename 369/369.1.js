const paddedHex = d => `0${d.toString(16)}`.slice(-2).toUpperCase();
const solve = (r, g, b) => `#${paddedHex(r)}${paddedHex(g)}${paddedHex(b)}`;

const bonus = (...args) => {
  const colors = args.length;
  // Split each hex to
  const blended = args.reduce(({ r, g, b }, hexColor) => ({
    r: r + parseInt(hexColor.slice(1, 3), 16),
    g: g + parseInt(hexColor.slice(3, 5), 16),
    b: b + parseInt(hexColor.slice(5, 7), 16),
  }), { r: 0, g: 0, b: 0 });

  return solve(
    Math.round(blended.r / colors),
    Math.round(blended.g / colors),
    Math.round(blended.b / colors),
  );
};

module.exports = { solve, bonus };
