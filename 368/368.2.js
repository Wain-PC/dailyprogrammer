const check = matrix => {
  const { length } = matrix;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1; j++) {
      const topLeft = matrix[i][j];
      for (let ii = i + 1; ii < length; ii++) {
        const bottomLeft = matrix[ii][j];
        const jj = ii - i + j;
        const topRight = matrix[i][jj];
        const bottomRight = matrix[ii][jj];
        const sum = topLeft + bottomLeft + topRight + bottomRight;
        if (sum === 0 || sum === 4) {
          return false;
        }
      }
    }
  }
  return true;
};

// eslint-disable-next-line no-console
const print = matrix =>
  console.log(matrix.reduce((out, row) => `${out}${row.join(" ")}\n`, ""));

const padLeft = (s, l, c) => c.repeat(l - s.length) + s;

const run = (matrix, n) => {
  const { length } = matrix;
  // Actual exit condition.
  if (length === n) {
    return matrix;
  }
  const desiredLength = length + 1;
  const totalLength = 2 * desiredLength - 1;
  const permsLength = 2 ** totalLength;
  for (let i = 0; i < permsLength; i++) {
    const binStr = padLeft(i.toString(2), totalLength, "0")
      .split("")
      .map(c => +c);
    const col = binStr.slice(0, desiredLength - 1);
    const row = binStr.slice(desiredLength - 1);
    const newMatrix = matrix.map((r, index) => [col[index], ...r]);
    newMatrix.unshift(row);
    if (check(newMatrix)) {
      const result = run(newMatrix, n);
      if (result) {
        return result;
      }
    }
  }
  return false;
};

const solve = n => run([], n);

module.exports = {
  solve,
  check,
  print
};
