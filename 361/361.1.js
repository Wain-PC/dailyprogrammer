const solve = (input) => {
  const out = {};
  input.split('').forEach((letter) => {
    const lower = letter.toLowerCase();
    if (!out[lower]) {
      out[lower] = 0;
    }
    if (lower === letter) {
      out[lower]++;
    } else {
      out[lower]--;
    }
  });
  return out;
};

module.exports = { solve };
